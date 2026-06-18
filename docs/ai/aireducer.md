---
sidebar_position: 4
sidebar_label: "大文本切块流水线"
---

# 大文本切块流水线（aireducer）

大模型的上下文窗口是有限的。当你要处理一份很长的日志、源码或报告时，不能一股脑塞给模型，而要先**切成小块**，再逐块处理（分段总结、分段抽取、分段打标）。`aireducer` 就是干这件事的：你给它一段文本（或文件、数据流）和一个**切块规则**，它把内容切成一个个 `chunk`，每切出一块就回调一次你的处理函数。

它本身**不调用 AI**——只负责"怎么切、何时回调"。是否在回调里调 `ai.Chat`，完全由你决定。这种"切块 + 回调"的结构非常适合搭配 AI 做流水线。

## 分组速查表

| 分组 | 函数（含调用形态） | 说明 |
| --- | --- | --- |
| 快捷入口 | `aireducer.String(s, cb, ...opts)` `aireducer.File(path, cb, ...opts)` `aireducer.Reader(r, cb, ...opts)` | 传入内容 + 简单回调 `func(chunk)`，立即跑完 |
| 构造器 | `aireducer.NewReducerFromString(s, ...opts)` `aireducer.NewReducerFromFile(path, ...opts)` `aireducer.NewReducerFromReader(r, ...opts)` | 返回 reducer，自行调用 `.Run()` |
| 切块规则 | `aireducer.chunkSize(n)` `aireducer.lines(n)` `aireducer.separator(sep)` `aireducer.timeTriggerIntervalSeconds(f)` | 按字节/行数/分隔符/时间切块 |
| 切块微调 | `aireducer.separatorAsBoundary(true)` `aireducer.lineNumber(true)` | 分隔符作为边界、给每行加行号 |
| 回调 | `aireducer.callback(func(config, memory, chunk))` | 完整回调（带上下文与记忆） |
| 上下文 | `aireducer.context(ctx)` | 传入可取消的 context |

## 三种切块规则

`aireducer.String(内容, 回调, 选项...)` 是最省事的入口：回调签名是 `func(chunk)`，`chunk.Data()` 是这一块的字节内容。下面一次演示三种切块方式。

``````````````yak
// 特性: aireducer 按分隔符 / 行数 / 字节大小切块
// 关键词: aireducer.String, aireducer.separator, aireducer.lines, aireducer.chunkSize
// 1) 按分隔符切: 分隔符会保留在每块末尾
bySep = []
aireducer.String("a|b|c|d", func(chunk) {
    bySep = append(bySep, string(chunk.Data()))
}, aireducer.separator("|"))~
println(len(bySep))   // OUT: 4
println(bySep[0])     // OUT: a|

// 2) 按行数切: 每 2 行一块, 5 行 -> 3 块(2+2+1)
byLine = []
aireducer.String("L1\nL2\nL3\nL4\nL5\n", func(chunk) {
    byLine = append(byLine, string(chunk.Data()))
}, aireducer.lines(2))~
println(len(byLine))  // OUT: 3

// 3) 按字节大小切: 25 字节, 每块上限 10 -> 10+10+5
bySize = []
aireducer.String(str.Repeat("x", 25), func(chunk) {
    bySize = append(bySize, len(chunk.Data()))
}, aireducer.chunkSize(10))~
println(bySize)       // OUT: [10 10 5]
``````````````

:::note 分隔符默认保留在块尾，chunkSize 是"硬上限"
按 `separator` 切时，分隔符会跟在每块**末尾**（所以 `"a|b|c|d"` 切出 `"a|"`、`"b|"`、`"c|"`、`"d"`），这样把各块拼回去能**无损还原**原文。另外 `chunkSize` 是一条**硬上限**：即便用了 `lines` 或 `separator`，任何一块都不会超过 `chunkSize` 字节——超了就强制再切。默认 `chunkSize` 为 1024。
:::

## 给每行加行号：lineNumber

把长文本喂给 AI 做"定位到第几行"的任务时，给每行加上全局行号很有用。`aireducer.lineNumber(true)` 会在每行前加 `N | ` 前缀，且行号**跨块连续**。

``````````````yak
// 特性: aireducer.lineNumber 给每行加全局行号前缀
// 关键词: aireducer.lineNumber, 行号 N | 前缀
acc = []
aireducer.String("alpha\nbeta\ngamma\n", func(chunk) {
    acc = append(acc, string(chunk.Data()))
}, aireducer.lines(10), aireducer.lineNumber(true))~
// 行号格式是 "N | 原始行内容"
println(str.Contains(acc[0], "1 | alpha"))   // OUT: true
println(str.Contains(acc[0], "2 | beta"))    // OUT: true
``````````````

## 构造器写法：NewReducerFromString + Run

如果你想先构造、后运行（比如在不同地方分别配置和触发），用 `aireducer.NewReducerFromString(...)` 拿到 reducer，再调用 `.Run()`。这种写法用完整回调 `aireducer.callback(func(config, memory, chunk))`，比简单回调多了 `config`（运行配置）和 `memory`（跨块记忆/上下文）两个参数，便于做带状态的处理。

``````````````yak
// 特性: 构造器写法 NewReducerFromString + callback + Run
// 关键词: aireducer.NewReducerFromString, aireducer.callback, Run
parts = []
reducer = aireducer.NewReducerFromString("x|y|z",
    aireducer.separator("|"),
    aireducer.callback(func(config, memory, chunk) {
        // 完整回调比简单回调多了 config 与 memory(跨块记忆)
        parts = append(parts, string(chunk.Data()))
    }))~
// 构造与运行分离: Run() 会阻塞直到全部切完
reducer.Run()~
println(len(parts))   // OUT: 3
println(parts[0])     // OUT: x|
``````````````

## 实战：切块 + 逐块交给 AI

这是 `aireducer` 最典型的用法：把长文档按段落（空行 `\n\n`）切块，每块调用一次 `ai.Chat` 做处理。这里用本地 mock 固定 AI 的回答，把流水线跑通。

``````````````yak
// 特性: aireducer 切块后逐块调用 ai.Chat(分段处理流水线)
// 关键词: aireducer.String, ai.Chat, 分段总结, AI 流水线
// 起一个本地 mock AI: 每块都回 "summarized"
port = os.GetRandomAvailableTCPPort()
ctx, cancel = context.WithCancel(context.Background())
go func() {
    httpserver.Serve("127.0.0.1", port, httpserver.context(ctx), httpserver.handler(func(rsp, req) {
        io.ReadAll(req.Body)
        rsp.Header().Set("Content-Type", "text/event-stream")
        rsp.Write([]byte("data: {\"choices\":[{\"delta\":{\"content\":\"summarized\"}}]}\n\ndata: [DONE]\n\n"))
    }))
}()
time.Sleep(0.5)
url = f"http://127.0.0.1:${port}/v1/chat/completions"
conn = [ai.type("openai"), ai.baseURL(url), ai.apiKey("test"), ai.model("mock")]

doc = "第一段内容\n\n第二段内容\n\n第三段内容"
summaries = []
// 按空行把文档切成段落, 每段交给 AI 总结
aireducer.String(doc, func(chunk) {
    text = string(chunk.Data())
    reply = ai.Chat(f"用一句话总结: ${text}", conn...)~
    summaries = append(summaries, reply)
}, aireducer.separator("\n\n"))~

println(len(summaries))    // OUT: 3
println(summaries[0])      // OUT: summarized
cancel()
``````````````

把这个骨架里的 mock 换成真实模型、把 `ai.Chat` 的提示词换成你的任务（总结、翻译、找漏洞、抽取实体……），就得到了一条能处理任意长文本的 AI 流水线。需要处理文件时，把 `aireducer.String(doc, ...)` 换成 `aireducer.File("big.log", ...)` 即可，切块逻辑完全一致。

## 易错点小结

- **回调有两种签名**：快捷入口 `aireducer.String/File/Reader` 用简单回调 `func(chunk)`；构造器配 `aireducer.callback` 用完整回调 `func(config, memory, chunk)`。别混用。
- **chunkSize 优先级最高**：它是硬上限，会覆盖 `lines`/`separator` 的切块意图。想保留整段结构又限制大小，可配合 `separatorAsBoundary(true)`。
- **Run() 会阻塞**：构造器写法必须调用 `.Run()` 才真正开始，且它会阻塞到切完。
- **回调里调 AI 要判错**：逐块调用 `ai.Chat` 时，单块失败别让整条流水线崩溃，建议 `try/catch` 或显式判 `err`。
