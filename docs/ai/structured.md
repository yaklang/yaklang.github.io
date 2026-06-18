---
sidebar_position: 3
sidebar_label: "函数调用与结构化流"
---

# 函数调用与结构化流（ai）

普通对话拿到的是一段自由文本，但在自动化里我们往往需要**结构化的结果**——比如让模型把一句话解析成 `{城市, 日期, 意图}` 三个字段，好让后续代码直接用。`ai` 库为此提供两条路：

- `ai.FunctionCall(input, fields, ...opts)`：让模型按你给的字段说明返回一个 **map**，一次拿到结构化结果。
- `ai.StructuredStream(input, ...opts)`：返回一个 **channel**，把模型输出当作结构化事件**流式**消费，适合长输出或需要边到边处理的场景。

:::tip 本章示例如何运行
同[本章总览](./overview.md)，用本地 `httpserver` mock 固定输出。`ai.StructuredStream` 走流式（SSE），`ai.FunctionCall` 内部走**非流式**抽取，对 mock 的应答格式要求不同，下文会分别说明。
:::

## 分组速查表

| 分组 | 函数（含调用形态） | 说明 |
| --- | --- | --- |
| 结构化抽取 | `ai.FunctionCall(input, fields, ...opts)` | 按字段说明返回结构化 `map` |
| 结构化流 | `ai.StructuredStream(input, ...opts)` | 返回 `channel`，逐个产出结构化事件 |
| 事件字段 | `data.OutputText` `data.Event` `data.Id` | 结构化事件里的文本、类型、序号 |

## ai.StructuredStream：把输出当事件流消费

`ai.StructuredStream` 返回 `(channel, err)`。用 `for ... range` 遍历这个 channel，每次拿到一个 `StructuredData` 事件，其中 `OutputText` 是这一段文本内容。channel 自然结束（被关闭）时循环退出。

``````````````yak
// 特性: ai.StructuredStream 流式消费结构化事件
// 关键词: ai.StructuredStream, channel, for range, OutputText
port = os.GetRandomAvailableTCPPort()
ctx, cancel = context.WithCancel(context.Background())
go func() {
    httpserver.Serve("127.0.0.1", port, httpserver.context(ctx), httpserver.handler(func(rsp, req) {
        io.ReadAll(req.Body)
        rsp.Header().Set("Content-Type", "text/event-stream")
        rsp.Write([]byte("data: {\"choices\":[{\"delta\":{\"content\":\"report-body\"}}]}\n\ndata: [DONE]\n\n"))
    }))
}()
time.Sleep(0.5)
url = f"http://127.0.0.1:${port}/v1/chat/completions"

ch, err = ai.StructuredStream("generate a report",
    ai.type("openai"), ai.baseURL(url), ai.apiKey("test"), ai.model("mock"))
assert err == nil, "structured stream should start"

text = ""
// 遍历 channel: 每个事件的 OutputText 是一段文本, 拼起来就是完整输出
for data = range ch {
    text += data.OutputText
}
println(text)   // OUT: report-body
cancel()
``````````````

`StructuredStream` 的事件除了 `OutputText`，还带 `Event`（事件类型，如 `data`）、`Id`（递增序号）等元信息。当上游用结构化协议输出时，这些字段能帮你区分"正文""推理""工具调用"等不同片段。普通文本流场景，只读 `OutputText` 即可。

## ai.FunctionCall：一次拿到结构化字段

`ai.FunctionCall(input, fields, ...opts)` 的第二个参数 `fields` 是一个 **map**：键是你想要的字段名，值是对该字段的自然语言说明。模型会据此返回一个同构的 `map`。

它的典型用途是"把一句话解析成结构"：

```yak
// 把自然语言解析成结构化字段(需要真实模型)
result, err = ai.FunctionCall(
    "帮我查一下北京明天的天气",
    {
        "city":   "用户问的城市名",
        "date":   "用户问的日期",
        "intent": "用户的意图, 如 weather/news/other",
    },
    ai.type("openai"), ai.apiKey("sk-..."), ai.model("gpt-4o"),
)
if err != nil {
    log.error("function call failed: %v", err)
    return
}
println(result["city"])     // 例如: 北京
println(result["date"])     // 例如: 明天
println(result["intent"])   // 例如: weather
```

:::note FunctionCall 走非流式抽取，依赖供应商配置
`ai.FunctionCall` 内部不是简单对话，而是构造抽取提示词、用**非流式**请求拿回 JSON、再解析成 `map`，并且会按当前 AI 供应商优先级（如 Yakit 全局 AI 配置）选择可用网关。因此它对"有一个真实可用的供应商"依赖较强，不适合用最小 mock 复现。生产中请配置好真实模型后使用。
:::

## FunctionCall 与 StructuredStream 如何选

| 需求 | 推荐 |
| --- | --- |
| 一次性拿到几个确定字段（解析意图、抽取实体） | `ai.FunctionCall` |
| 输出很长、想边生成边处理（流式总结、逐段渲染） | `ai.StructuredStream` |
| 只要一段纯文本回答 | 直接 `ai.Chat`（见[基础对话](./chat.md)） |

## 易错点小结

- **fields 是"字段名→说明"**：`FunctionCall` 的第二参用自然语言把每个字段讲清楚，模型抽取得越准。
- **StructuredStream 要遍历 channel**：拿到的是 channel 不是字符串，必须 `for ... range` 消费；不消费会阻塞上游。
- **判空与判错**：模型可能漏字段或返回空。读 `result["x"]` 前先判断是否存在，别假设字段一定在。
