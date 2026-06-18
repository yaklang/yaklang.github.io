---
sidebar_position: 6
sidebar_label: "ReAct 智能体引擎"
---

# ReAct 智能体引擎（aim）

前面 `ai` 库做的是"一问一答"：你给提示词、模型给答案，**一来一回就结束**。但很多任务不是一句话能搞定的——它需要模型自己**规划步骤、调用工具、看结果、再决定下一步**，反复迭代直到完成。这种"思考(Reason) + 行动(Act)"循环就是 **ReAct**，而 `aim` 就是 Yaklang 内置的 ReAct 智能体引擎。

`aim` 让模型可以在一次任务里自主地：读文件、查知识库、调用内置工具（端口扫描、写代码、查文档……）、向你提问、再综合所有信息给出最终答案。

:::danger 本章示例需要真实模型
ReAct 是一个**多轮**循环，每一轮都要模型产出符合协议的决策（规划 / 调工具 / 反思 / 回答）。这种闭环依赖一个真实可用的大模型，无法用最小 mock 复现（mock 无法持续产出合理决策）。因此本章代码块均为**示意写法**（普通代码块，不参与离线校验），运行前请用 `aim.aiConfig(...)` 配好真实模型，或在 Yakit 全局 AI 配置中设置默认模型。
:::

## 分组速查表

| 分组 | 函数 / 选项（含调用形态） | 说明 |
| --- | --- | --- |
| 同步执行 | `aim.InvokeReAct(input, ...opts)` | 跑一次 ReAct 闭环，阻塞到结束，返回 `err` |
| 异步执行 | `aim.InvokeReActAsync(input, ...opts)` | 返回 `engine`，配合 `engine.WaitTaskFinish()` |
| 构造引擎 | `aim.NewAIEngine(...opts)` | 返回可复用的 `engine`，用 `engine.SendMsg(...)` 多轮对话 |
| 选模型 | `aim.aiConfig(type, ...aiOpts)` `aim.aiCallback(fn)` | 指定底层大模型（透传 `ai.*` 选项） |
| 任务控制 | `aim.focus(s)` `aim.timeout(sec)` `aim.maxIteration(n)` `aim.language(s)` `aim.context(ctx)` | 任务焦点、超时、最大迭代、语言、可取消上下文 |
| 工具开关 | `aim.disableToolUse(b)` `aim.includeToolNames(...)` `aim.excludeToolNames(...)` `aim.disableAIForge(b)` | 是否允许用工具、白/黑名单 |
| 审批策略 | `aim.yoloMode()` `aim.manualMode()` `aim.aiReviewMode()` `aim.reviewPolicy(s)` `aim.allowUserInteract(b)` | 危险动作是否需人工/AI 审批 |
| 附加资源 | `aim.attachedKnowledgeBase(name)` `aim.attachedFilePath(p)` `aim.attachedFileContent(s)` | 给智能体挂知识库 / 文件作为上下文 |
| 事件回调 | `aim.onEvent(fn)` `aim.onStream(fn)` `aim.onStreamContent(fn)` `aim.onFinished(fn)` | 观察智能体的思考、流式输出、结束 |
| 交互回调 | `aim.onInputRequired(fn)` `aim.sessionID(s)` `aim.onSessionID(fn)` | 智能体反问用户、会话标识 |

## 最简单的一次智能体调用

`aim.InvokeReAct(input, ...opts)` 是最直接的入口：传入任务描述与底层模型配置，它会自己跑完整个 ReAct 闭环。`aim.aiConfig("openai", ...)` 的第一个参数是供应商类型，后面可以透传任何 `ai.*` 选项（如 `ai.apiKey`、`ai.model`）。

```yak
// 跑一次 ReAct 智能体任务(需要真实模型)
// 关键词: aim.InvokeReAct, aim.aiConfig, aim.yoloMode
err = aim.InvokeReAct(
    "扫描 127.0.0.1 的常见端口, 并简要说明结果",
    aim.aiConfig("openai", ai.apiKey("sk-..."), ai.model("gpt-4o")),
    aim.timeout(300),     // 整个任务最多 300 秒
    aim.maxIteration(10), // 最多迭代 10 轮
    aim.yoloMode(),       // 自动放行工具调用, 不需人工审批
    aim.onStreamContent(func(react, event, nodeId, content) {
        // 智能体每产出一段完整文字就回调一次
        log.info("node=%v content=%v", nodeId, string(content))
    }),
)
if err != nil {
    log.error("react failed: %v", err)
}
```

`aim.yoloMode()` 表示"全自动放行"——智能体调用工具时不再停下来等你点确认。它适合无人值守的自动化；如果任务涉及危险动作（删文件、发攻击包），生产中应改用 `aim.manualMode()` 或 `aim.aiReviewMode()` 加一道审批。

## 观察智能体在想什么：onEvent

ReAct 的价值不只在最终答案，更在**过程**。`aim.onEvent(func(react, event))` 会在智能体每一步动作时回调，`event.Type` 是事件类型，`event.Content` 是事件内容。你可以据此做日志、进度条、统计 AI 调用次数等。

```yak
// 通过 onEvent 观察智能体的每一步(需要真实模型)
// 关键词: aim.onEvent, event.Type, event.Content
aiCallCount = 0
mu = sync.NewMutex()

err = aim.InvokeReAct(
    "总结一下当前目录下的代码结构",
    aim.aiConfig("openai", ai.apiKey("sk-..."), ai.model("gpt-4o")),
    aim.timeout(300),
    aim.yoloMode(),
    aim.onEvent(func(react, event) {
        eventType = string(event.Type)
        // 统计模型被调用了几次
        if eventType == "ai_first_byte_cost_ms" {
            mu.Lock()
            aiCallCount++
            mu.Unlock()
        }
        log.info("event=%v", eventType)
    }),
)
log.info("total ai calls: %d, err=%v", aiCallCount, err)
```

:::note 事件回调可能在并发 goroutine 中触发
智能体内部多路并发，`onEvent`/`onStreamContent` 等回调可能被不同 goroutine 调用。回调里改共享变量（如上面的计数器）一定要用 `sync.NewMutex()` 加锁，否则会有数据竞争。
:::

## 给智能体挂上知识库与文件

智能体的"聪明"很大程度来自它能看到什么上下文。`aim` 支持把外部资源挂进任务：

- `aim.attachedKnowledgeBase("kb_name")`：挂一个知识库（RAG），智能体可以检索其中内容。
- `aim.attachedFilePath("/path/to/file")`：把一个文件作为上下文。
- `aim.attachedFileContent("...")`：直接把一段文本作为上下文。

```yak
// 让智能体带着知识库回答问题(需要真实模型与已建好的知识库)
// 关键词: aim.attachedKnowledgeBase, aim.focus
err = aim.InvokeReAct(
    "根据知识库, 给出该漏洞的修复建议",
    aim.aiConfig("openai", ai.apiKey("sk-..."), ai.model("gpt-4o")),
    aim.focus("knowledge_enhance"),         // 给任务一个焦点, 引导规划
    aim.attachedKnowledgeBase("vuln_kb"),   // 挂上名为 vuln_kb 的知识库
    aim.timeout(300),
    aim.yoloMode(),
    aim.allowUserInteract(false),           // 不允许中途反问, 适合无人值守
)
```

## 异步执行与多轮会话

如果你不想阻塞当前流程，用 `aim.InvokeReActAsync` 拿到 `engine`，自行决定何时等待：

```yak
// 异步启动, 之后再等待完成
engine, err = aim.InvokeReActAsync(
    "分析这段日志里的异常",
    aim.aiConfig("openai", ai.apiKey("sk-...")),
    aim.yoloMode(),
)
if err != nil {
    log.error("start failed: %v", err); return
}
// ... 这里可以做别的事 ...
engine.WaitTaskFinish()  // 需要结果时再阻塞等待
engine.Close()
```

需要**多轮对话**（同一个智能体连续接收多条消息、保留记忆）时，用 `aim.NewAIEngine` 构造一个可复用的引擎，反复 `SendMsg`：

```yak
// 复用同一个引擎做多轮对话(需要真实模型)
// 关键词: aim.NewAIEngine, engine.SendMsg, engine.WaitTaskFinish
engine, err = aim.NewAIEngine(
    aim.aiConfig("openai", ai.apiKey("sk-...")),
    aim.yoloMode(),
    aim.onStreamContent(func(react, event, nodeId, content) {
        log.info("%v", string(content))
    }),
)
if err != nil { log.error("%v", err); return }
defer engine.Close()

engine.SendMsg("先帮我列出目标的开放端口")
engine.WaitTaskFinish()

// 第二轮会带着上一轮的记忆
engine.SendMsg("针对刚才发现的 web 端口, 再做一次指纹识别")
engine.WaitTaskFinish()
```

## 控制工具的使用范围

智能体默认能调用一整套内置工具。出于安全或聚焦考虑，你可以收紧它的能力：

- `aim.disableToolUse(true)`：完全禁用工具，只让模型用自身知识回答（退化成纯推理）。
- `aim.includeToolNames("query_document", "blueprint")`：只允许这几个工具（白名单）。
- `aim.excludeToolNames("write_yaklang_code")`：禁用某些工具（黑名单）。

```yak
// 只允许智能体使用文档查询工具(需要真实模型)
// 关键词: aim.includeToolNames, aim.disableAIForge
err = aim.InvokeReAct(
    "查一下 poc 库怎么发 HTTP 请求",
    aim.aiConfig("openai", ai.apiKey("sk-...")),
    aim.includeToolNames("query_document"), // 白名单: 只给它查文档的能力
    aim.yoloMode(),
    aim.timeout(120),
)
```

## 易错点小结

- **必须配好真实模型**：`aim` 是闭环智能体，没有可用模型就只会反复重试到超时。先用 `aim.aiConfig(...)` 或 Yakit 全局配置把模型配好。
- **一定要设超时与上限**：用 `aim.timeout(sec)` 和 `aim.maxIteration(n)` 给智能体兜底，避免它陷入死循环或长时间空跑。
- **审批策略要按风险选**：无人值守用 `aim.yoloMode()`，但涉及危险动作时改用 `aim.manualMode()`/`aim.aiReviewMode()` 加审批。
- **回调注意并发安全**：`onEvent`/`onStreamContent` 可能并发触发，共享变量要加锁。
- **异步记得收尾**：`InvokeReActAsync`/`NewAIEngine` 用完要 `engine.Close()` 释放资源。
