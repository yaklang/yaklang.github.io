# aim {#library-aim}

`aim` 库是 yaklang 的 AI 引擎（AI Engine）封装，提供一个开箱即用的 ReAct 智能体运行时：给定一句自然语言输入，引擎自动规划、调用工具、与知识库/Forge 协作，并通过丰富的事件回调把过程实时吐出来。相比 `aiagent` 更偏"完整引擎 + 事件流"的一体化体验。

典型使用场景：

- 启动引擎：`aim.InvokeReAct` 同步执行一次 ReAct 任务，`aim.InvokeReActAsync` 异步返回 `*AIEngine` 句柄，`aim.NewAIEngine` 创建可复用引擎。
- 接入模型与能力：`aim.aiConfig` / `aim.aiCallback` 配置模型，`aim.attachedAITool` / `aim.attachedAIForge` / `aim.attachedKnowledgeBase` 挂载工具、Forge 与知识库，`aim.includeToolNames` / `aim.excludeToolNames` 精选工具集。
- 过程观测与交互：`aim.onStream` / `aim.onStreamContent` / `aim.onEvent` / `aim.onFinished` 订阅流式输出与事件，`aim.onInputRequired` 处理需要人工补充输入的场景，`aim.maxIteration` / `aim.timeout` 控制迭代与超时。

与相邻库的关系：`aim` 把 `ai`（模型对话）、`aiagent`（编排）、`rag`（知识检索）、`liteforge`/Forge（结构化任务）整合为统一引擎，适合需要"一行调用即可跑通一个带工具的智能体"的脚本。

> 共 49 个函数

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [aim.InvokeReAct](#invokereact) | `input string, options ...AIEngineConfigOption` | `error` | 以 ReAct 模式执行一次 AI 任务并阻塞至完成（导出名为 aim.InvokeReAct） |
| [aim.InvokeReActAsync](#invokereactasync) | `input string, options ...AIEngineConfigOption` | `*AIEngine, error` | 异步执行 ReAct 任务，并返回引擎实例（导出名为 aim.InvokeReActAsync） |
| [aim.NewAIEngine](#newaiengine) | `options ...AIEngineConfigOption` | `*AIEngine, error` | 创建新的 AI 引擎实例（导出名为 aim.NewAIEngine） |

## 可变参数函数详情

### InvokeReAct {#invokereact}

```go
InvokeReAct(input string, options ...AIEngineConfigOption) error
```

以 ReAct 模式执行一次 AI 任务并阻塞至完成（导出名为 aim.InvokeReAct）

内部会创建一个临时 AI 引擎，执行完成后自动关闭

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| input | `string` | 任务输入（自然语言指令） |

**可选参数**

可作为可变参数 `options ...AIEngineConfigOption` 传入选项；共 46 个可用选项，详见 [AIEngineConfigOption 选项列表](#option-aiengineconfigoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
// 需要配置可用的 AI 服务（示意性示例）
err = aim.InvokeReAct("summarize the README", aim.maxIteration(5))
if err != nil { die(err) }
``````````````

---

### InvokeReActAsync {#invokereactasync}

```go
InvokeReActAsync(input string, options ...AIEngineConfigOption) (*AIEngine, error)
```

异步执行 ReAct 任务，并返回引擎实例（导出名为 aim.InvokeReActAsync）

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| input | `string` | 任务输入（自然语言指令） |

**可选参数**

可作为可变参数 `options ...AIEngineConfigOption` 传入选项；共 46 个可用选项，详见 [AIEngineConfigOption 选项列表](#option-aiengineconfigoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*AIEngine` | AI 引擎实例（可用于后续交互或等待） |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 需要配置可用的 AI 服务（示意性示例）
engine = aim.InvokeReActAsync("scan target", aim.onEvent(func(op, e) { dump(e) }))~
defer engine.Close()
engine.Wait()
``````````````

---

### NewAIEngine {#newaiengine}

```go
NewAIEngine(options ...AIEngineConfigOption) (*AIEngine, error)
```

创建新的 AI 引擎实例（导出名为 aim.NewAIEngine）

AI 引擎封装了 ReAct 等能力，可通过 SendMsg/SendMsgAsync 发送任务

**可选参数**

可作为可变参数 `options ...AIEngineConfigOption` 传入选项；共 46 个可用选项，详见 [AIEngineConfigOption 选项列表](#option-aiengineconfigoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*AIEngine` | AI 引擎实例 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 需要配置可用的 AI 服务（示意性示例）
engine = aim.NewAIEngine(aim.maxIteration(10))~
defer engine.Close()
engine.SendMsg("list files in current dir")
``````````````

---

## 可变参数选项列表

以下按选项类型汇总全部可变参数选项(原先重复在各主函数下的选项表已收拢到此处)：

### 1. 类型：AIEngineConfigOption {#option-aiengineconfigoption}

涉及到的函数有：[aim.InvokeReAct](#invokereact)、[aim.InvokeReActAsync](#invokereactasync)、[aim.NewAIEngine](#newaiengine)

|选项函数|参数|返回值|说明|
|:--|:--|:--|:--|
| `aim.aiCallback` | `callback aicommon.AICallbackType` | `AIEngineConfigOption` | WithAICallback 设置 AI 回调 |
| `aim.aiConfig` | `typeName string, opts ...aispec.AIConfigOption` | `AIEngineConfigOption` | WithAIConfig 通过 AI 类型与 aispec 选项设置引擎使用的 AI |
| `aim.aiReviewMode` | - | `AIEngineConfigOption` | WithAIReviewMode AI 审批模式：由 AI 决定是否需要用户确认 |
| `aim.aiService` | `service string` | `AIEngineConfigOption` | WithAIService 设置使用的 AI 服务名称 |
| `aim.allowUserInteract` | `allow bool` | `AIEngineConfigOption` | WithAllowUserInteract 设置是否允许用户交互 |
| `aim.attachedAIForge` | `aiForgeName string` | `AIEngineConfigOption` | WithAttachedAIForge 为引擎附加一个 AI Forge |
| `aim.attachedAITool` | `aitoolName string` | `AIEngineConfigOption` | WithAttachedAITool 为引擎附加一个 AI 工具 |
| `aim.attachedFileContent` | `content string` | `AIEngineConfigOption` | WithAttachedFileContent 为引擎附加文件内容资源 |
| `aim.attachedFilePath` | `filePath string` | `AIEngineConfigOption` | WithAttachedFilePath 为引擎附加一个文件路径资源 |
| `aim.attachedKnowledgeBase` | `knowledgeBaseName string` | `AIEngineConfigOption` | WithAttachedKnowledgeBase 为引擎附加一个知识库 |
| `aim.attachedResource` | `typ string, key string, value string` | `AIEngineConfigOption` | WithAttachedResource 为引擎附加自定义资源 |
| `aim.context` | `ctx context.Context` | `AIEngineConfigOption` | WithContext 设置上下文，用于控制引擎的取消 |
| `aim.debugMode` | `debug bool` | `AIEngineConfigOption` | WithDebugMode 设置调试模式 |
| `aim.disableAIForge` | `disable bool` | `AIEngineConfigOption` | WithDisableAIForge 禁用 AI Forge 调用 |
| `aim.disableMCPServers` | `disable bool` | `AIEngineConfigOption` | WithDisableMCPServers 禁用 MCP servers |
| `aim.disableToolUse` | `disable bool` | `AIEngineConfigOption` | WithDisableToolUse 禁用工具调用 |
| `aim.enableAISearchTool` | `enable bool` | `AIEngineConfigOption` | WithEnableAISearchTool 启用 AI 搜索工具 |
| `aim.enableForgeSearchTool` | `enable bool` | `AIEngineConfigOption` | WithEnableForgeSearchTool 启用 Forge 搜索工具 |
| `aim.excludeToolNames` | `names ...string` | `AIEngineConfigOption` | WithExcludeToolNames 设置排除的工具名称黑名单 |
| `aim.extendedForgeFromZip` | `zipPath string, password ...string` | `AIEngineConfigOption` | WithExtendedForgeFromZip 从 ZIP 文件加载扩展 Forge |
| `aim.focus` | `focus string` | `AIEngineConfigOption` | WithFocus 设置焦点，用于让引擎聚焦某个任务 |
| `aim.includeToolNames` | `names ...string` | `AIEngineConfigOption` | WithIncludeToolNames 设置包含的工具名称白名单 |
| `aim.keywords` | `keywords ...string` | `AIEngineConfigOption` | WithKeywords 设置工具搜索关键词 |
| `aim.language` | `lang string` | `AIEngineConfigOption` | WithLanguage 设置引擎响应语言偏好 |
| `aim.manualMode` | - | `AIEngineConfigOption` | WithManualMode 手动模式：所有操作都需要用户确认 |
| `aim.maxIteration` | `max int` | `AIEngineConfigOption` | WithMaxIteration 设置引擎最大迭代次数 |
| `aim.onData` | `callback func(react aicommon.AIEngineOperator, event *schema.AiOutputEvent, NodeId string, data []byte)` | `AIEngineConfigOption` | WithOnData 设置数据回调 |
| `aim.onEvent` | `callback func(aicommon.AIEngineOperator, *schema.AiOutputEvent)` | `AIEngineConfigOption` | WithOnEvent 设置事件回调 |
| `aim.onFinished` | `callback func(react aicommon.AIEngineOperator)` | `AIEngineConfigOption` | WithOnFinished 设置完成回调 |
| `aim.onInputRequired` | `callback func(react aicommon.AIEngineOperator, question string) string` | `AIEngineConfigOption` | WithOnInputRequired 设置需要用户输入的回调 |
| `aim.onInputRequiredRaw` | `callback func(react aicommon.AIEngineOperator, event *schema.AiOutputEvent, question string) string` | `AIEngineConfigOption` | WithOnInputRequiredRaw 设置需要用户输入的回调（携带原始事件，导出名为 aim.onInputRequiredRaw） |
| `aim.onSessionID` | `callback func(sessionID string)` | `AIEngineConfigOption` | WithOnSessionID 设置会话 ID 就绪回调 |
| `aim.onStream` | `callback func(react aicommon.AIEngineOperator, event *schema.AiOutputEvent, NodeId string, data []byte)` | `AIEngineConfigOption` | WithOnStream 设置流式输出回调 |
| `aim.onStreamContent` | `callback func(react aicommon.AIEngineOperator, event *schema.AiOutputEvent, NodeId string, totalContent []byte)` | `AIEngineConfigOption` | WithOnStreamContent 设置流式输出结束回调，并返回重组后的完整流内容 |
| `aim.onStreamEnd` | `callback func(react aicommon.AIEngineOperator, event *schema.AiOutputEvent, NodeId string)` | `AIEngineConfigOption` | WithOnStreamEnd 设置流式输出结束回调 |
| `aim.qualityPriorityAICallback` | `callback aicommon.AICallbackType` | `AIEngineConfigOption` | WithQualityPriorityAICallback 设置质量优先的 AI 回调 |
| `aim.qualityPriorityAIConfig` | `typeName string, opts ...aispec.AIConfigOption` | `AIEngineConfigOption` | WithQualityPriorityAIConfig 设置质量优先档使用的 AI |
| `aim.reviewPolicy` | `policy string` | `AIEngineConfigOption` | WithReviewPolicy 设置审批策略 |
| `aim.sessionID` | `sessionID string` | `AIEngineConfigOption` | WithSessionID 设置会话 ID，用于持久化与续接 |
| `aim.speedPriorityAICallback` | `callback aicommon.AICallbackType` | `AIEngineConfigOption` | WithSpeedPriorityAICallback 设置速度优先的 AI 回调 |
| `aim.speedPriorityAIConfig` | `typeName string, opts ...aispec.AIConfigOption` | `AIEngineConfigOption` | WithSpeedPriorityAIConfig 设置速度优先档使用的 AI |
| `aim.timelineContentLimit` | `limit int` | `AIEngineConfigOption` | WithTimelineContentLimit 设置 Timeline 内容大小上限 |
| `aim.timeout` | `timeout float64` | `AIEngineConfigOption` | WithTimeout 设置引擎运行的超时时间 |
| `aim.userInteractLimit` | `limit int64` | `AIEngineConfigOption` | WithUserInteractLimit 设置用户交互次数上限 |
| `aim.workdir` | `workdir string` | `AIEngineConfigOption` | WithWorkdir 设置引擎工作目录 |
| `aim.yoloMode` | - | `AIEngineConfigOption` | WithYOLOMode YOLO 模式：自动执行所有操作，无需用户确认 |

