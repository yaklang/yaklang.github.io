---
sidebar_position: 2
sidebar_label: "基础对话与模型调用"
---

# 基础对话与模型调用（ai）

`ai` 库是和大模型打交道的入口。最常用的就是 `ai.Chat(prompt, ...opts)`：传一段提示词，拿回模型的回答字符串。围绕它，`ai` 还提供了**分级模型**（按"智能/快速/视觉"挑模型）、**流式输出**（边生成边消费）以及一整套**连接选项**（指定供应商、密钥、代理、超时等）。

:::tip 本章示例如何运行
所有示例都用本地 `httpserver` 起一个兼容 OpenAI 协议的 mock 后端来固定输出，原理见[本章总览](./overview.md)。每个代码块都是**独立运行**的，所以都自带一小段 mock 启动代码。真实使用时把 `ai.baseURL/apiKey/model` 换成真实供应商配置即可。
:::

## 分组速查表

| 分组 | 函数（含调用形态） | 说明 |
| --- | --- | --- |
| 基础对话 | `ai.Chat(prompt, ...opts)` | 发一段提示词，返回回答字符串 |
| 分级对话 | `ai.IntelligentChat(...)` `ai.LightweightChat(...)` `ai.VisionChat(...)` | 按"高智能/轻量快速/视觉"自动挑模型 |
| 列出模型 | `ai.ListModels(...opts)` | 查询供应商支持的模型列表 |
| 选供应商 | `ai.type(name)` | 指定协议/供应商：`openai`/`chatglm`/`moonshot` 等 |
| 连接选项 | `ai.apiKey(k)` `ai.baseURL(u)` `ai.domain(d)` `ai.model(m)` `ai.proxy(p)` `ai.timeout(s)` `ai.noHttps(true)` | 鉴权、地址、模型名、代理、超时 |
| 流式选项 | `ai.onStream(fn)` `ai.onReasonStream(fn)` `ai.debugStream(true)` | 增量输出、推理过程、调试流 |
| 推理控制 | `ai.thinking(true)` `ai.preferredTier(t)` `ai.speedPriority(true)` `ai.qualityPriority(true)` | 开启思考、偏好模型档位 |
| 多模态 | `ai.imageFile(path)` `ai.imageBase64(s)` `ai.imageRaw(b)` `ai.visionPriority(true)` | 给模型喂图片做视觉理解 |
| 用量回调 | `ai.usageCallback(fn)` | 接收上游返回的 token 用量统计 |

## ai.Chat：最基础的一问一答

`ai.Chat` 接收提示词与若干选项，返回模型回答的完整字符串。下面用本地 mock 把回答固定成 `"yaklang is great"`，重点看清调用形态。

``````````````yak
// 特性: ai.Chat 基础对话, 返回完整回答字符串
// 关键词: ai.Chat, ai.type, ai.baseURL, ai.apiKey
port = os.GetRandomAvailableTCPPort()
ctx, cancel = context.WithCancel(context.Background())
go func() {
    httpserver.Serve("127.0.0.1", port, httpserver.context(ctx), httpserver.handler(func(rsp, req) {
        io.ReadAll(req.Body)
        rsp.Header().Set("Content-Type", "text/event-stream")
        rsp.Write([]byte("data: {\"choices\":[{\"delta\":{\"content\":\"yaklang is great\"}}]}\n\ndata: [DONE]\n\n"))
    }))
}()
time.Sleep(0.5)
url = f"http://127.0.0.1:${port}/v1/chat/completions"

// ~ 表示出错就抛异常; 真实使用时建议 res, err = ai.Chat(...) 自行判错
reply = ai.Chat("introduce yaklang in one line",
    ai.type("openai"), ai.baseURL(url), ai.apiKey("test"), ai.model("mock"))~
println(reply)        // OUT: yaklang is great
println(len(reply))   // OUT: 16
cancel()
``````````````

`ai.type("openai")` 指定走 OpenAI 协议（很多国产/自建网关也兼容此协议）；`ai.baseURL` 直接给出完整的 `/v1/chat/completions` 地址。若用真实 OpenAI，只需 `ai.apiKey("sk-...")` 加可选的 `ai.model(...)`，地址会自动用官方默认值。

## 选项是"可变参数"，可以拼成列表复用

`ai.Chat` 的选项是可变参数。把一组常用选项装进列表，用 `列表...` 展开传入，能避免每次都重复写一长串。

:::danger 展开 `...` 必须是最后一个实参
Yaklang 里 `opts...` 这种展开**只能放在参数列表末尾**。想在复用选项的基础上再追加一个选项，要先 `append` 到列表里，不能写成 `ai.Chat(prompt, opts..., ai.onStream(fn))`——那样会编译报错。
:::

``````````````yak
// 特性: 把连接选项拼成列表复用, 用 append 追加再展开
// 关键词: ai 选项复用, append, 展开 ...
port = os.GetRandomAvailableTCPPort()
ctx, cancel = context.WithCancel(context.Background())
go func() {
    httpserver.Serve("127.0.0.1", port, httpserver.context(ctx), httpserver.handler(func(rsp, req) {
        io.ReadAll(req.Body)
        rsp.Header().Set("Content-Type", "text/event-stream")
        rsp.Write([]byte("data: {\"choices\":[{\"delta\":{\"content\":\"done\"}}]}\n\ndata: [DONE]\n\n"))
    }))
}()
time.Sleep(0.5)
url = f"http://127.0.0.1:${port}/v1/chat/completions"

// 一组公共连接选项, 多次调用复用
conn = [ai.type("openai"), ai.baseURL(url), ai.apiKey("test"), ai.model("mock")]

r1 = ai.Chat("q1", conn...)~
r2 = ai.Chat("q2", conn...)~
println(r1)   // OUT: done
println(r2)   // OUT: done
cancel()
``````````````

## ai.onStream：边生成边消费（流式）

大模型是逐字生成的。`ai.Chat` 默认会等全部生成完再返回，但你可以用 `ai.onStream(fn)` 注册一个回调，**在生成过程中**拿到增量内容。回调参数是一个 `io.Reader`，读它就能拿到这一段新产生的文字。

``````````````yak
// 特性: ai.onStream 流式接收增量输出
// 关键词: ai.onStream, io.ReadAll, 流式
port = os.GetRandomAvailableTCPPort()
ctx, cancel = context.WithCancel(context.Background())
go func() {
    httpserver.Serve("127.0.0.1", port, httpserver.context(ctx), httpserver.handler(func(rsp, req) {
        io.ReadAll(req.Body)
        rsp.Header().Set("Content-Type", "text/event-stream")
        // 分两帧返回, 模拟逐字生成
        rsp.Write([]byte("data: {\"choices\":[{\"delta\":{\"content\":\"Hello \"}}]}\n\ndata: {\"choices\":[{\"delta\":{\"content\":\"World\"}}]}\n\ndata: [DONE]\n\n"))
    }))
}()
time.Sleep(0.5)
url = f"http://127.0.0.1:${port}/v1/chat/completions"

conn = [ai.type("openai"), ai.baseURL(url), ai.apiKey("test"), ai.model("mock")]
collected = ""
// 注意: onStream 要追加进选项列表再展开
opts = append(conn, ai.onStream(func(reader) {
    collected += string(io.ReadAll(reader)~)
}))
reply = ai.Chat("hi", opts...)~

// onStream 收到的增量拼起来, 和最终返回值一致
println(reply)       // OUT: Hello World
println(collected)   // OUT: Hello World
cancel()
``````````````

`ai.onStream` 的回调可能被调用多次，每次给你一段新内容；把它们拼接起来就等于完整回答。流式适合做"打字机效果"的实时展示，或在长回答里提前发现并中断。

## 分级模型：IntelligentChat / LightweightChat / VisionChat

很多场景下你并不想写死某个模型名，而是想表达"给我一个聪明的/快的/能看图的模型"。`ai` 提供三个分级入口，它们与 `ai.Chat` 签名完全一致，只是内部按档位挑模型：

- `ai.IntelligentChat`：偏向**高质量**模型，适合复杂推理。
- `ai.LightweightChat`：偏向**轻量快速**模型，适合简单分类、改写等高频小任务。
- `ai.VisionChat`：偏向**视觉**模型，配合 `ai.imageFile/imageBase64` 做图片理解。

``````````````yak
// 特性: 分级对话入口与 ai.Chat 同签名
// 关键词: ai.IntelligentChat, ai.LightweightChat, 分级模型
port = os.GetRandomAvailableTCPPort()
ctx, cancel = context.WithCancel(context.Background())
go func() {
    httpserver.Serve("127.0.0.1", port, httpserver.context(ctx), httpserver.handler(func(rsp, req) {
        io.ReadAll(req.Body)
        rsp.Header().Set("Content-Type", "text/event-stream")
        rsp.Write([]byte("data: {\"choices\":[{\"delta\":{\"content\":\"ok\"}}]}\n\ndata: [DONE]\n\n"))
    }))
}()
time.Sleep(0.5)
url = f"http://127.0.0.1:${port}/v1/chat/completions"
conn = [ai.type("openai"), ai.baseURL(url), ai.apiKey("test"), ai.model("mock")]

a = ai.IntelligentChat("complex task", conn...)~
b = ai.LightweightChat("simple task", conn...)~
println(a)   // OUT: ok
println(b)   // OUT: ok
cancel()
``````````````

:::note 分级依赖真实供应商的模型档位
分级入口要发挥作用，需要供应商/网关侧配置了不同档位的模型（如 Yakit 全局 AI 配置）。本地 mock 没有真实档位，所以这里只演示"调用形态一致"。真实环境下 `ai.IntelligentChat` 会自动选用质量更高的模型。
:::

## ai.timeout / ai.proxy：超时与代理

访问外部大模型时，网络是最大的不确定因素。用 `ai.timeout(秒)` 限制单次请求时长，用 `ai.proxy("http://127.0.0.1:7890")` 走代理。下面演示超时选项的写法（mock 秒回，不会真的触发超时）。

``````````````yak
// 特性: ai.timeout 限制请求时长, ai.proxy 走代理(此处仅演示写法)
// 关键词: ai.timeout, ai.proxy, 网络健壮性
port = os.GetRandomAvailableTCPPort()
ctx, cancel = context.WithCancel(context.Background())
go func() {
    httpserver.Serve("127.0.0.1", port, httpserver.context(ctx), httpserver.handler(func(rsp, req) {
        io.ReadAll(req.Body)
        rsp.Header().Set("Content-Type", "text/event-stream")
        rsp.Write([]byte("data: {\"choices\":[{\"delta\":{\"content\":\"fast\"}}]}\n\ndata: [DONE]\n\n"))
    }))
}()
time.Sleep(0.5)
url = f"http://127.0.0.1:${port}/v1/chat/completions"

reply = ai.Chat("hi",
    ai.type("openai"), ai.baseURL(url), ai.apiKey("test"), ai.model("mock"),
    ai.timeout(10))~   // 单次请求最多等 10 秒
println(reply)   // OUT: fast
cancel()
``````````````

## ai.ListModels：列出可用模型

`ai.ListModels(...opts)` 返回供应商当前支持的模型元信息列表（`[]*ModelMeta`），常用于做"模型选择器"或巡检可用模型。它访问的是供应商的模型列表接口（如 OpenAI 的 `/v1/models`），需要真实供应商才能返回有意义的数据，因此这里仅给出调用形态：

```yak
// 列出某供应商支持的模型(需要真实 apiKey 与网络)
models, err = ai.ListModels(ai.type("openai"), ai.apiKey("sk-..."))
if err != nil {
    log.error("list models failed: %v", err)
    return
}
for m in models {
    println(m.ModelName)
}
```

## 易错点小结

- **默认流式**：`ai` 发出的请求带 `stream:true`，自建/mock 后端必须用 SSE 应答，否则会一直重试到超时。
- **展开放末尾**：`opts...` 只能是最后一个实参；要追加选项先 `append` 进列表。
- **务必判错**：网络/鉴权随时可能失败。示例为简洁用了 `~`（出错抛异常），生产代码建议 `res, err = ai.Chat(...)` 显式处理。
- **不要硬编码密钥**：`apiKey` 应来自环境变量或 Yakit 配置，不要写进脚本提交到仓库。
