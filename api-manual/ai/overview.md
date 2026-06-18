---
sidebar_position: 1
sidebar_label: "AI 编程总览"
---

# Yaklang 中的 AI 编程

Yaklang 把大语言模型（LLM）当作"一等公民"内置进语言：你可以在安全脚本里直接发起对话、做函数调用、消费结构化数据流，把大文本切块喂给模型做流水线处理，甚至跑一个会自己调用工具的 ReAct 智能体。本章围绕三个核心库展开：

| 库 | 定位 | 关键入口 |
| --- | --- | --- |
| `ai` | 直接调用大模型：对话、函数调用、结构化流 | `ai.Chat` `ai.FunctionCall` `ai.StructuredStream` |
| `rag` | 知识库检索增强：把私有资料存成向量库，检索后喂给模型 | `rag.Get` `rag.Query` `rag.AddDocument` |
| `aireducer` | 把大文本/数据流按规则切块，逐块交给回调（常配合 AI 做"分段总结/分段抽取"） | `aireducer.String` `aireducer.File` `aireducer.NewReducerFromReader` |
| `aim` | ReAct 智能体引擎：模型自主规划、调用工具、多轮迭代 | `aim.InvokeReAct` `aim.NewAIEngine` |

## 本章目录

- [基础对话与模型调用（ai）](./chat.md)：`ai.Chat` 与分级模型、流式输出、连接选项、列出模型。
- [函数调用与结构化流（ai）](./structured.md)：`ai.FunctionCall` 抽取结构化字段、`ai.StructuredStream` 消费结构化事件流。
- [大文本切块流水线（aireducer）](./aireducer.md)：按分隔符/行数/字节切块，结合 AI 做分段处理。
- [知识库检索增强（rag）](./rag.md)：建向量库、语义检索，结合 `ai.Chat` 做检索增强生成（RAG）。
- [ReAct 智能体引擎（aim）](./aim.md)：让模型自主规划与调用工具完成任务。

## 阅读约定：示例如何"离线跑通"

真实调用大模型需要 API Key、网络与费用，且输出**不确定**，没法写进可复现的文档。为了让本章的示例**可运行、可验证**，我们用 Yaklang 内置的 `httpserver` 在本地起一个**兼容 OpenAI 协议的假后端**，再用 `ai.baseURL(...)` 把 `ai` 指向它。这样示例的输出是固定的，你也能看清"请求长什么样、返回怎么被解析"。

下面这段 mock 后端会在后续多个示例中复用，核心就是：在 `/v1/chat/completions` 上按 OpenAI 的 **SSE 流式格式**回一段固定内容。

``````````````yak
// 特性: 用 httpserver 搭建兼容 OpenAI 的本地 mock, 让 ai.Chat 离线可跑
// 关键词: ai.baseURL, httpserver.Serve, SSE 流式响应, text/event-stream
port = os.GetRandomAvailableTCPPort()
ctx, cancel = context.WithCancel(context.Background())

// 在后台起一个假的 OpenAI 后端: 永远回复 "pong"
go func() {
    httpserver.Serve("127.0.0.1", port, httpserver.context(ctx), httpserver.handler(func(rsp, req) {
        io.ReadAll(req.Body)
        // ai.Chat 默认走流式(stream=true), 必须用 SSE 格式应答:
        // 每条 data: 是一帧增量, delta.content 是这一帧的文字, 最后以 [DONE] 收尾
        rsp.Header().Set("Content-Type", "text/event-stream")
        rsp.Write([]byte("data: {\"choices\":[{\"delta\":{\"content\":\"pong\"}}]}\n\n" + "data: [DONE]\n\n"))
    }))
}()
time.Sleep(0.5) // 等服务起来

url = f"http://127.0.0.1:${port}/v1/chat/completions"
// 把 ai 指向本地 mock: type 选 openai 协议, baseURL 指向我们起的服务, apiKey 随便填
reply = ai.Chat("ping", ai.type("openai"), ai.baseURL(url), ai.apiKey("test"), ai.model("mock"))~
println(reply)   // OUT: pong
cancel()         // 关闭 mock 后端
``````````````

:::tip 怎么连真实模型
把上面的 `ai.baseURL/apiKey/model` 换成真实供应商的配置即可，例如 `ai.Chat("你好", ai.type("openai"), ai.apiKey("sk-..."), ai.model("gpt-4o"))`。也可以在 Yakit 全局配置里设置默认 AI，之后脚本里直接 `ai.Chat("你好")~` 不传任何选项。本章为了可复现统一使用本地 mock，真实使用时删掉 mock、改用真实配置即可。
:::

:::danger ai.Chat 默认是流式的，mock 必须回 SSE
`ai` 库发出的请求里带 `"stream":true`，所以本地 mock **必须**用 `text/event-stream` 的 SSE 格式（`data: {...}\n\n` 多帧 + `data: [DONE]`）应答。如果你图省事直接回一段普通 JSON，客户端会把它当成损坏的流，不断重试直到超时。只有非流式接口（如 `ai.FunctionCall` 内部的抽取）才用普通 JSON 应答。
:::
