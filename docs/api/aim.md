# aim

|函数名|函数描述/介绍|
|:------|:--------|
| [aim.InvokeReAct](#invokereact) |InvokeReAct 以 ReAct 模式执行一次 AI 任务并阻塞至完成（导出名为 aim.InvokeReAct） 内部会创建一个临时 AI 引擎，执行完成后自动关闭 参数: - input: 任务输入（自然语言指令） - options: 引擎配置可选项，如 aim.aiCallback、a...|
| [aim.InvokeReActAsync](#invokereactasync) |InvokeReActAsync 异步执行 ReAct 任务，并返回引擎实例（导出名为 aim.InvokeReActAsync） 参数: - input: 任务输入（自然语言指令） - options: 引擎配置可选项 返回值: - AI 引擎实例（可用于后续交互或等待） - 错误信息|
| [aim.NewAIEngine](#newaiengine) |NewAIEngine 创建新的 AI 引擎实例（导出名为 aim.NewAIEngine） AI 引擎封装了 ReAct 等能力，可通过 SendMsg/SendMsgAsync 发送任务 参数: - options: 引擎配置可选项，如 aim.aiCallback、aim.maxIterati...|
| [aim.aiCallback](#aicallback) |WithAICallback 设置 AI 回调（导出名为 aim.aiCallback） 参数: - callback: AI 回调函数 返回值: - 引擎配置可选项|
| [aim.aiConfig](#aiconfig) |WithAIConfig 通过 AI 类型与 aispec 选项设置引擎使用的 AI（导出名为 aim.aiConfig） 参数: - typeName: AI 类型名，如 &#34;openai&#34; - opts: aispec AI 配置选项，如 ai.apiKey、ai.model 返回值: - 引擎配...|
| [aim.aiReviewMode](#aireviewmode) |WithAIReviewMode AI 审批模式：由 AI 决定是否需要用户确认（导出名为 aim.aiReviewMode） 参数: - 无 返回值: - 引擎配置可选项|
| [aim.aiService](#aiservice) |WithAIService 设置使用的 AI 服务名称（导出名为 aim.aiService） 参数: - service: AI 服务名，如 &#34;openai&#34;、&#34;deepseek&#34; 返回值: - 引擎配置可选项|
| [aim.allowUserInteract](#allowuserinteract) |WithAllowUserInteract 设置是否允许用户交互（导出名为 aim.allowUserInteract） 参数: - allow: 是否允许用户交互 返回值: - 引擎配置可选项|
| [aim.attachedAIForge](#attachedaiforge) |WithAttachedAIForge 为引擎附加一个 AI Forge（导出名为 aim.attachedAIForge） 参数: - aiForgeName: AI Forge 名称 返回值: - 引擎配置可选项|
| [aim.attachedAITool](#attachedaitool) |WithAttachedAITool 为引擎附加一个 AI 工具（导出名为 aim.attachedAITool） 参数: - aitoolName: AI 工具名称 返回值: - 引擎配置可选项|
| [aim.attachedFileContent](#attachedfilecontent) |WithAttachedFileContent 为引擎附加文件内容资源（导出名为 aim.attachedFileContent） 参数: - content: 文件内容 返回值: - 引擎配置可选项|
| [aim.attachedFilePath](#attachedfilepath) |WithAttachedFilePath 为引擎附加一个文件路径资源（导出名为 aim.attachedFilePath） 参数: - filePath: 文件路径 返回值: - 引擎配置可选项|
| [aim.attachedKnowledgeBase](#attachedknowledgebase) |WithAttachedKnowledgeBase 为引擎附加一个知识库（导出名为 aim.attachedKnowledgeBase） 参数: - knowledgeBaseName: 知识库名称 返回值: - 引擎配置可选项|
| [aim.attachedResource](#attachedresource) |WithAttachedResource 为引擎附加自定义资源（导出名为 aim.attachedResource） 参数: - typ: 资源类型 - key: 资源键 - value: 资源值 返回值: - 引擎配置可选项|
| [aim.context](#context) |WithContext 设置上下文，用于控制引擎的取消（导出名为 aim.context） 参数: - ctx: 上下文对象 返回值: - 引擎配置可选项|
| [aim.debugMode](#debugmode) |WithDebugMode 设置调试模式（导出名为 aim.debugMode） 参数: - debug: 是否启用调试模式 返回值: - 引擎配置可选项|
| [aim.disableAIForge](#disableaiforge) |WithDisableAIForge 禁用 AI Forge 调用（导出名为 aim.disableAIForge） 参数: - disable: 是否禁用 Forge 返回值: - 引擎配置可选项|
| [aim.disableMCPServers](#disablemcpservers) |WithDisableMCPServers 禁用 MCP servers（导出名为 aim.disableMCPServers） 参数: - disable: 是否禁用 MCP servers 返回值: - 引擎配置可选项|
| [aim.disableToolUse](#disabletooluse) |WithDisableToolUse 禁用工具调用（导出名为 aim.disableToolUse） 参数: - disable: 是否禁用工具调用 返回值: - 引擎配置可选项|
| [aim.enableAISearchTool](#enableaisearchtool) |WithEnableAISearchTool 启用 AI 搜索工具（导出名为 aim.enableAISearchTool） 参数: - enable: 是否启用 AI 搜索工具 返回值: - 引擎配置可选项|
| [aim.enableForgeSearchTool](#enableforgesearchtool) |WithEnableForgeSearchTool 启用 Forge 搜索工具（导出名为 aim.enableForgeSearchTool） 参数: - enable: 是否启用 Forge 搜索工具 返回值: - 引擎配置可选项|
| [aim.excludeToolNames](#excludetoolnames) |WithExcludeToolNames 设置排除的工具名称黑名单（导出名为 aim.excludeToolNames） 参数: - names: 一个或多个工具名 返回值: - 引擎配置可选项|
| [aim.extendedForgeFromZip](#extendedforgefromzip) |WithExtendedForgeFromZip 从 ZIP 文件加载扩展 Forge（导出名为 aim.extendedForgeFromZip） 参数: - zipPath: ZIP 文件路径 - password: 可选的解压密码 返回值: - 引擎配置可选项|
| [aim.focus](#focus) |WithFocus 设置焦点，用于让引擎聚焦某个任务（导出名为 aim.focus） 参数: - focus: 聚焦标识，如 yaklang_code 返回值: - 引擎配置可选项|
| [aim.includeToolNames](#includetoolnames) |WithIncludeToolNames 设置包含的工具名称白名单（导出名为 aim.includeToolNames） 参数: - names: 一个或多个工具名 返回值: - 引擎配置可选项|
| [aim.keywords](#keywords) |WithKeywords 设置工具搜索关键词（导出名为 aim.keywords） 参数: - keywords: 一个或多个关键词 返回值: - 引擎配置可选项|
| [aim.language](#language) |WithLanguage 设置引擎响应语言偏好（导出名为 aim.language） 参数: - lang: 语言标识，如 &#34;zh&#34;、&#34;en&#34; 返回值: - 引擎配置可选项|
| [aim.manualMode](#manualmode) |WithManualMode 手动模式：所有操作都需要用户确认（导出名为 aim.manualMode） 参数: - 无 返回值: - 引擎配置可选项|
| [aim.maxIteration](#maxiteration) |WithMaxIteration 设置引擎最大迭代次数（导出名为 aim.maxIteration） 参数: - max: 最大迭代次数（默认 10） 返回值: - 引擎配置可选项|
| [aim.onData](#ondata) |WithOnData 设置数据回调（导出名为 aim.onData） 参数: - callback: 回调，参数为 (operator, event, nodeId, data) 返回值: - 引擎配置可选项|
| [aim.onEvent](#onevent) |WithOnEvent 设置事件回调（导出名为 aim.onEvent） 参数: - callback: 事件回调，参数为 (operator, event) 返回值: - 引擎配置可选项|
| [aim.onFinished](#onfinished) |WithOnFinished 设置完成回调（导出名为 aim.onFinished） 参数: - callback: 回调，参数为 operator 返回值: - 引擎配置可选项|
| [aim.onInputRequired](#oninputrequired) |WithOnInputRequired 设置需要用户输入的回调（导出名为 aim.onInputRequired） 参数: - callback: 回调，参数为 (operator, question)，返回用户答复 返回值: - 引擎配置可选项|
| [aim.onInputRequiredRaw](#oninputrequiredraw) |WithOnInputRequiredRaw 设置需要用户输入的回调（携带原始事件，导出名为 aim.onInputRequiredRaw） 参数: - callback: 回调，参数为 (operator, event, question)，返回用户答复 返回值: - 引擎配置可选项|
| [aim.onSessionID](#onsessionid) |WithOnSessionID 设置会话 ID 就绪回调（导出名为 aim.onSessionID） 参数: - callback: 回调，参数为 sessionID 返回值: - 引擎配置可选项|
| [aim.onStream](#onstream) |WithOnStream 设置流式输出回调（导出名为 aim.onStream） 参数: - callback: 流式回调，参数为 (operator, event, nodeId, data) 返回值: - 引擎配置可选项|
| [aim.onStreamContent](#onstreamcontent) |WithOnStreamContent 设置流式输出结束回调，并返回重组后的完整流内容（导出名为 aim.onStreamContent） 参数: - callback: 回调，参数为 (operator, event, nodeId, totalContent) 返回值: - 引擎配置可选项|
| [aim.onStreamEnd](#onstreamend) |WithOnStreamEnd 设置流式输出结束回调（导出名为 aim.onStreamEnd） 参数: - callback: 回调，参数为 (operator, event, nodeId) 返回值: - 引擎配置可选项|
| [aim.qualityPriorityAICallback](#qualitypriorityaicallback) |WithQualityPriorityAICallback 设置质量优先的 AI 回调（导出名为 aim.qualityPriorityAICallback） 参数: - callback: AI 回调函数 返回值: - 引擎配置可选项|
| [aim.qualityPriorityAIConfig](#qualitypriorityaiconfig) |WithQualityPriorityAIConfig 设置质量优先档使用的 AI（导出名为 aim.qualityPriorityAIConfig） 参数: - typeName: AI 类型名 - opts: aispec AI 配置选项 返回值: - 引擎配置可选项|
| [aim.reviewPolicy](#reviewpolicy) |WithReviewPolicy 设置审批策略（导出名为 aim.reviewPolicy） policy: &#34;yolo&#34; (自动通过), &#34;ai&#34; (AI 审批), &#34;manual&#34; (手动审批) 参数: - policy: 审批策略 返回值: - 引擎配置可选项|
| [aim.sessionID](#sessionid) |WithSessionID 设置会话 ID，用于持久化与续接（导出名为 aim.sessionID） 参数: - sessionID: 会话 ID 返回值: - 引擎配置可选项|
| [aim.speedPriorityAICallback](#speedpriorityaicallback) |WithSpeedPriorityAICallback 设置速度优先的 AI 回调（导出名为 aim.speedPriorityAICallback） 参数: - callback: AI 回调函数 返回值: - 引擎配置可选项|
| [aim.speedPriorityAIConfig](#speedpriorityaiconfig) |WithSpeedPriorityAIConfig 设置速度优先档使用的 AI（导出名为 aim.speedPriorityAIConfig） 参数: - typeName: AI 类型名 - opts: aispec AI 配置选项 返回值: - 引擎配置可选项|
| [aim.timelineContentLimit](#timelinecontentlimit) |WithTimelineContentLimit 设置 Timeline 内容大小上限（导出名为 aim.timelineContentLimit） 参数: - limit: 内容大小上限 返回值: - 引擎配置可选项|
| [aim.timeout](#timeout) |WithTimeout 设置引擎运行的超时时间（导出名为 aim.timeout） 参数: - timeout: 超时时间（秒） 返回值: - 引擎配置可选项|
| [aim.userInteractLimit](#userinteractlimit) |WithUserInteractLimit 设置用户交互次数上限（导出名为 aim.userInteractLimit） 参数: - limit: 交互次数上限 返回值: - 引擎配置可选项|
| [aim.workdir](#workdir) |WithWorkdir 设置引擎工作目录（导出名为 aim.workdir） 参数: - workdir: 工作目录路径 返回值: - 引擎配置可选项|
| [aim.yoloMode](#yolomode) |WithYOLOMode YOLO 模式：自动执行所有操作，无需用户确认（导出名为 aim.yoloMode） 参数: - 无 返回值: - 引擎配置可选项|


## 函数定义
### InvokeReAct

#### 详细描述
InvokeReAct 以 ReAct 模式执行一次 AI 任务并阻塞至完成（导出名为 aim.InvokeReAct）

内部会创建一个临时 AI 引擎，执行完成后自动关闭

参数:

  - input: 任务输入（自然语言指令）

  - options: 引擎配置可选项，如 aim.aiCallback、aim.onEvent 等



返回值:

  - 错误信息




Example:

``````````````yak
// 需要配置可用的 AI 服务（示意性示例）
err = aim.InvokeReAct("summarize the README", aim.maxIteration(5))
if err != nil { die(err) }
``````````````


#### 定义

`InvokeReAct(input string, options ...AIEngineConfigOption) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| input | `string` | 任务输入（自然语言指令） |
| options | `...AIEngineConfigOption` | 引擎配置可选项，如 aim.aiCallback、aim.onEvent 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### InvokeReActAsync

#### 详细描述
InvokeReActAsync 异步执行 ReAct 任务，并返回引擎实例（导出名为 aim.InvokeReActAsync）

参数:

  - input: 任务输入（自然语言指令）

  - options: 引擎配置可选项



返回值:

  - AI 引擎实例（可用于后续交互或等待）

  - 错误信息




Example:

``````````````yak
// 需要配置可用的 AI 服务（示意性示例）
engine = aim.InvokeReActAsync("scan target", aim.onEvent(func(op, e) { dump(e) }))~
defer engine.Close()
engine.Wait()
``````````````


#### 定义

`InvokeReActAsync(input string, options ...AIEngineConfigOption) (*AIEngine, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| input | `string` | 任务输入（自然语言指令） |
| options | `...AIEngineConfigOption` | 引擎配置可选项 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*AIEngine` | AI 引擎实例（可用于后续交互或等待） |
| r2 | `error` | 错误信息 |


### NewAIEngine

#### 详细描述
NewAIEngine 创建新的 AI 引擎实例（导出名为 aim.NewAIEngine）

AI 引擎封装了 ReAct 等能力，可通过 SendMsg/SendMsgAsync 发送任务

参数:

  - options: 引擎配置可选项，如 aim.aiCallback、aim.maxIteration、aim.onEvent 等



返回值:

  - AI 引擎实例

  - 错误信息




Example:

``````````````yak
// 需要配置可用的 AI 服务（示意性示例）
engine = aim.NewAIEngine(aim.maxIteration(10))~
defer engine.Close()
engine.SendMsg("list files in current dir")
``````````````


#### 定义

`NewAIEngine(options ...AIEngineConfigOption) (*AIEngine, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| options | `...AIEngineConfigOption` | 引擎配置可选项，如 aim.aiCallback、aim.maxIteration、aim.onEvent 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*AIEngine` | AI 引擎实例 |
| r2 | `error` | 错误信息 |


### aiCallback

#### 详细描述
WithAICallback 设置 AI 回调（导出名为 aim.aiCallback）

参数:

  - callback: AI 回调函数



返回值:

  - 引擎配置可选项




Example:

``````````````yak
// callback 由 aicommon 提供（示意性示例）
opt = aim.aiCallback(callback)
println(opt)
``````````````


#### 定义

`aiCallback(callback aicommon.AICallbackType) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `aicommon.AICallbackType` | AI 回调函数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` | 引擎配置可选项 |


### aiConfig

#### 详细描述
WithAIConfig 通过 AI 类型与 aispec 选项设置引擎使用的 AI（导出名为 aim.aiConfig）

参数:

  - typeName: AI 类型名，如 &#34;openai&#34;

  - opts: aispec AI 配置选项，如 ai.apiKey、ai.model



返回值:

  - 引擎配置可选项




Example:

``````````````yak
opt = aim.aiConfig("openai", ai.apiKey("sk-xxx"), ai.model("gpt-4"))
println(opt)
``````````````


#### 定义

`aiConfig(typeName string, opts ...aispec.AIConfigOption) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| typeName | `string` | AI 类型名，如 &#34;openai&#34; |
| opts | `...aispec.AIConfigOption` | aispec AI 配置选项，如 ai.apiKey、ai.model |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` | 引擎配置可选项 |


### aiReviewMode

#### 详细描述
WithAIReviewMode AI 审批模式：由 AI 决定是否需要用户确认（导出名为 aim.aiReviewMode）

参数:

  - 无



返回值:

  - 引擎配置可选项




Example:

``````````````yak
opt = aim.aiReviewMode()
println(opt)
``````````````


#### 定义

`aiReviewMode() AIEngineConfigOption`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` | 引擎配置可选项 |


### aiService

#### 详细描述
WithAIService 设置使用的 AI 服务名称（导出名为 aim.aiService）

参数:

  - service: AI 服务名，如 &#34;openai&#34;、&#34;deepseek&#34;



返回值:

  - 引擎配置可选项




Example:

``````````````yak
opt = aim.aiService("openai")
println(opt)
``````````````


#### 定义

`aiService(service string) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| service | `string` | AI 服务名，如 &#34;openai&#34;、&#34;deepseek&#34; |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` | 引擎配置可选项 |


### allowUserInteract

#### 详细描述
WithAllowUserInteract 设置是否允许用户交互（导出名为 aim.allowUserInteract）

参数:

  - allow: 是否允许用户交互



返回值:

  - 引擎配置可选项




Example:

``````````````yak
opt = aim.allowUserInteract(true)
println(opt)
``````````````


#### 定义

`allowUserInteract(allow bool) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| allow | `bool` | 是否允许用户交互 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` | 引擎配置可选项 |


### attachedAIForge

#### 详细描述
WithAttachedAIForge 为引擎附加一个 AI Forge（导出名为 aim.attachedAIForge）

参数:

  - aiForgeName: AI Forge 名称



返回值:

  - 引擎配置可选项




Example:

``````````````yak
opt = aim.attachedAIForge("my-forge")
println(opt)
``````````````


#### 定义

`attachedAIForge(aiForgeName string) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| aiForgeName | `string` | AI Forge 名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` | 引擎配置可选项 |


### attachedAITool

#### 详细描述
WithAttachedAITool 为引擎附加一个 AI 工具（导出名为 aim.attachedAITool）

参数:

  - aitoolName: AI 工具名称



返回值:

  - 引擎配置可选项




Example:

``````````````yak
opt = aim.attachedAITool("ls")
println(opt)
``````````````


#### 定义

`attachedAITool(aitoolName string) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| aitoolName | `string` | AI 工具名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` | 引擎配置可选项 |


### attachedFileContent

#### 详细描述
WithAttachedFileContent 为引擎附加文件内容资源（导出名为 aim.attachedFileContent）

参数:

  - content: 文件内容



返回值:

  - 引擎配置可选项




Example:

``````````````yak
opt = aim.attachedFileContent("hello world")
println(opt)
``````````````


#### 定义

`attachedFileContent(content string) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| content | `string` | 文件内容 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` | 引擎配置可选项 |


### attachedFilePath

#### 详细描述
WithAttachedFilePath 为引擎附加一个文件路径资源（导出名为 aim.attachedFilePath）

参数:

  - filePath: 文件路径



返回值:

  - 引擎配置可选项




Example:

``````````````yak
opt = aim.attachedFilePath("/tmp/report.txt")
println(opt)
``````````````


#### 定义

`attachedFilePath(filePath string) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| filePath | `string` | 文件路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` | 引擎配置可选项 |


### attachedKnowledgeBase

#### 详细描述
WithAttachedKnowledgeBase 为引擎附加一个知识库（导出名为 aim.attachedKnowledgeBase）

参数:

  - knowledgeBaseName: 知识库名称



返回值:

  - 引擎配置可选项




Example:

``````````````yak
opt = aim.attachedKnowledgeBase("my-kb")
println(opt)
``````````````


#### 定义

`attachedKnowledgeBase(knowledgeBaseName string) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| knowledgeBaseName | `string` | 知识库名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` | 引擎配置可选项 |


### attachedResource

#### 详细描述
WithAttachedResource 为引擎附加自定义资源（导出名为 aim.attachedResource）

参数:

  - typ: 资源类型

  - key: 资源键

  - value: 资源值



返回值:

  - 引擎配置可选项




Example:

``````````````yak
opt = aim.attachedResource("file", "path", "/tmp/a.txt")
println(opt)
``````````````


#### 定义

`attachedResource(typ string, key string, value string) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| typ | `string` | 资源类型 |
| key | `string` | 资源键 |
| value | `string` | 资源值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` | 引擎配置可选项 |


### context

#### 详细描述
WithContext 设置上下文，用于控制引擎的取消（导出名为 aim.context）

参数:

  - ctx: 上下文对象



返回值:

  - 引擎配置可选项




Example:

``````````````yak
opt = aim.context(context.Background())
println(opt)
``````````````


#### 定义

`context(ctx context.Context) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` | 上下文对象 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` | 引擎配置可选项 |


### debugMode

#### 详细描述
WithDebugMode 设置调试模式（导出名为 aim.debugMode）

参数:

  - debug: 是否启用调试模式



返回值:

  - 引擎配置可选项




Example:

``````````````yak
opt = aim.debugMode(true)
println(opt)
``````````````


#### 定义

`debugMode(debug bool) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| debug | `bool` | 是否启用调试模式 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` | 引擎配置可选项 |


### disableAIForge

#### 详细描述
WithDisableAIForge 禁用 AI Forge 调用（导出名为 aim.disableAIForge）

参数:

  - disable: 是否禁用 Forge



返回值:

  - 引擎配置可选项




Example:

``````````````yak
opt = aim.disableAIForge(true)
println(opt)
``````````````


#### 定义

`disableAIForge(disable bool) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| disable | `bool` | 是否禁用 Forge |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` | 引擎配置可选项 |


### disableMCPServers

#### 详细描述
WithDisableMCPServers 禁用 MCP servers（导出名为 aim.disableMCPServers）

参数:

  - disable: 是否禁用 MCP servers



返回值:

  - 引擎配置可选项




Example:

``````````````yak
opt = aim.disableMCPServers(true)
println(opt)
``````````````


#### 定义

`disableMCPServers(disable bool) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| disable | `bool` | 是否禁用 MCP servers |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` | 引擎配置可选项 |


### disableToolUse

#### 详细描述
WithDisableToolUse 禁用工具调用（导出名为 aim.disableToolUse）

参数:

  - disable: 是否禁用工具调用



返回值:

  - 引擎配置可选项




Example:

``````````````yak
opt = aim.disableToolUse(true)
println(opt)
``````````````


#### 定义

`disableToolUse(disable bool) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| disable | `bool` | 是否禁用工具调用 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` | 引擎配置可选项 |


### enableAISearchTool

#### 详细描述
WithEnableAISearchTool 启用 AI 搜索工具（导出名为 aim.enableAISearchTool）

参数:

  - enable: 是否启用 AI 搜索工具



返回值:

  - 引擎配置可选项




Example:

``````````````yak
opt = aim.enableAISearchTool(true)
println(opt)
``````````````


#### 定义

`enableAISearchTool(enable bool) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| enable | `bool` | 是否启用 AI 搜索工具 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` | 引擎配置可选项 |


### enableForgeSearchTool

#### 详细描述
WithEnableForgeSearchTool 启用 Forge 搜索工具（导出名为 aim.enableForgeSearchTool）

参数:

  - enable: 是否启用 Forge 搜索工具



返回值:

  - 引擎配置可选项




Example:

``````````````yak
opt = aim.enableForgeSearchTool(true)
println(opt)
``````````````


#### 定义

`enableForgeSearchTool(enable bool) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| enable | `bool` | 是否启用 Forge 搜索工具 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` | 引擎配置可选项 |


### excludeToolNames

#### 详细描述
WithExcludeToolNames 设置排除的工具名称黑名单（导出名为 aim.excludeToolNames）

参数:

  - names: 一个或多个工具名



返回值:

  - 引擎配置可选项




Example:

``````````````yak
opt = aim.excludeToolNames("rm", "exec")
println(opt)
``````````````


#### 定义

`excludeToolNames(names ...string) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| names | `...string` | 一个或多个工具名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` | 引擎配置可选项 |


### extendedForgeFromZip

#### 详细描述
WithExtendedForgeFromZip 从 ZIP 文件加载扩展 Forge（导出名为 aim.extendedForgeFromZip）

参数:

  - zipPath: ZIP 文件路径

  - password: 可选的解压密码



返回值:

  - 引擎配置可选项




Example:

``````````````yak
opt = aim.extendedForgeFromZip("/tmp/forge.zip")
println(opt)
``````````````


#### 定义

`extendedForgeFromZip(zipPath string, password ...string) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| zipPath | `string` | ZIP 文件路径 |
| password | `...string` | 可选的解压密码 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` | 引擎配置可选项 |


### focus

#### 详细描述
WithFocus 设置焦点，用于让引擎聚焦某个任务（导出名为 aim.focus）

参数:

  - focus: 聚焦标识，如 yaklang_code



返回值:

  - 引擎配置可选项




Example:

``````````````yak
opt = aim.focus("yaklang_code")
println(opt)
``````````````


#### 定义

`focus(focus string) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| focus | `string` | 聚焦标识，如 yaklang_code |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` | 引擎配置可选项 |


### includeToolNames

#### 详细描述
WithIncludeToolNames 设置包含的工具名称白名单（导出名为 aim.includeToolNames）

参数:

  - names: 一个或多个工具名



返回值:

  - 引擎配置可选项




Example:

``````````````yak
opt = aim.includeToolNames("ls", "cat")
println(opt)
``````````````


#### 定义

`includeToolNames(names ...string) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| names | `...string` | 一个或多个工具名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` | 引擎配置可选项 |


### keywords

#### 详细描述
WithKeywords 设置工具搜索关键词（导出名为 aim.keywords）

参数:

  - keywords: 一个或多个关键词



返回值:

  - 引擎配置可选项




Example:

``````````````yak
opt = aim.keywords("scan", "vuln")
println(opt)
``````````````


#### 定义

`keywords(keywords ...string) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| keywords | `...string` | 一个或多个关键词 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` | 引擎配置可选项 |


### language

#### 详细描述
WithLanguage 设置引擎响应语言偏好（导出名为 aim.language）

参数:

  - lang: 语言标识，如 &#34;zh&#34;、&#34;en&#34;



返回值:

  - 引擎配置可选项




Example:

``````````````yak
opt = aim.language("zh")
println(opt)
``````````````


#### 定义

`language(lang string) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| lang | `string` | 语言标识，如 &#34;zh&#34;、&#34;en&#34; |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` | 引擎配置可选项 |


### manualMode

#### 详细描述
WithManualMode 手动模式：所有操作都需要用户确认（导出名为 aim.manualMode）

参数:

  - 无



返回值:

  - 引擎配置可选项




Example:

``````````````yak
opt = aim.manualMode()
println(opt)
``````````````


#### 定义

`manualMode() AIEngineConfigOption`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` | 引擎配置可选项 |


### maxIteration

#### 详细描述
WithMaxIteration 设置引擎最大迭代次数（导出名为 aim.maxIteration）

参数:

  - max: 最大迭代次数（默认 10）



返回值:

  - 引擎配置可选项




Example:

``````````````yak
opt = aim.maxIteration(20)
println(opt)
``````````````


#### 定义

`maxIteration(max int) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| max | `int` | 最大迭代次数（默认 10） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` | 引擎配置可选项 |


### onData

#### 详细描述
WithOnData 设置数据回调（导出名为 aim.onData）

参数:

  - callback: 回调，参数为 (operator, event, nodeId, data)



返回值:

  - 引擎配置可选项




Example:

``````````````yak
opt = aim.onData(func(op, e, nodeId, data) { dump(data) })
println(opt)
``````````````


#### 定义

`onData(callback func(react aicommon.AIEngineOperator, event *schema.AiOutputEvent, NodeId string, data []byte)) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `func(react aicommon.AIEngineOperator, event *schema.AiOutputEvent, NodeId string, data []byte)` | 回调，参数为 (operator, event, nodeId, data) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` | 引擎配置可选项 |


### onEvent

#### 详细描述
WithOnEvent 设置事件回调（导出名为 aim.onEvent）

参数:

  - callback: 事件回调，参数为 (operator, event)



返回值:

  - 引擎配置可选项




Example:

``````````````yak
opt = aim.onEvent(func(op, e) { dump(e) })
println(opt)
``````````````


#### 定义

`onEvent(callback func(aicommon.AIEngineOperator, *schema.AiOutputEvent)) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `func(aicommon.AIEngineOperator, *schema.AiOutputEvent)` | 事件回调，参数为 (operator, event) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` | 引擎配置可选项 |


### onFinished

#### 详细描述
WithOnFinished 设置完成回调（导出名为 aim.onFinished）

参数:

  - callback: 回调，参数为 operator



返回值:

  - 引擎配置可选项




Example:

``````````````yak
opt = aim.onFinished(func(op) { println("finished") })
println(opt)
``````````````


#### 定义

`onFinished(callback func(react aicommon.AIEngineOperator)) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `func(react aicommon.AIEngineOperator)` | 回调，参数为 operator |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` | 引擎配置可选项 |


### onInputRequired

#### 详细描述
WithOnInputRequired 设置需要用户输入的回调（导出名为 aim.onInputRequired）

参数:

  - callback: 回调，参数为 (operator, question)，返回用户答复



返回值:

  - 引擎配置可选项




Example:

``````````````yak
opt = aim.onInputRequired(func(op, question) { return "yes" })
println(opt)
``````````````


#### 定义

`onInputRequired(callback func(react aicommon.AIEngineOperator, question string) string) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `func(react aicommon.AIEngineOperator, question string) string` | 回调，参数为 (operator, question)，返回用户答复 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` | 引擎配置可选项 |


### onInputRequiredRaw

#### 详细描述
WithOnInputRequiredRaw 设置需要用户输入的回调（携带原始事件，导出名为 aim.onInputRequiredRaw）

参数:

  - callback: 回调，参数为 (operator, event, question)，返回用户答复



返回值:

  - 引擎配置可选项




Example:

``````````````yak
opt = aim.onInputRequiredRaw(func(op, e, question) { return "yes" })
println(opt)
``````````````


#### 定义

`onInputRequiredRaw(callback func(react aicommon.AIEngineOperator, event *schema.AiOutputEvent, question string) string) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `func(react aicommon.AIEngineOperator, event *schema.AiOutputEvent, question string) string` | 回调，参数为 (operator, event, question)，返回用户答复 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` | 引擎配置可选项 |


### onSessionID

#### 详细描述
WithOnSessionID 设置会话 ID 就绪回调（导出名为 aim.onSessionID）

参数:

  - callback: 回调，参数为 sessionID



返回值:

  - 引擎配置可选项




Example:

``````````````yak
opt = aim.onSessionID(func(sessionID) { println(sessionID) })
println(opt)
``````````````


#### 定义

`onSessionID(callback func(sessionID string)) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `func(sessionID string)` | 回调，参数为 sessionID |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` | 引擎配置可选项 |


### onStream

#### 详细描述
WithOnStream 设置流式输出回调（导出名为 aim.onStream）

参数:

  - callback: 流式回调，参数为 (operator, event, nodeId, data)



返回值:

  - 引擎配置可选项




Example:

``````````````yak
opt = aim.onStream(func(op, e, nodeId, data) { print(string(data)) })
println(opt)
``````````````


#### 定义

`onStream(callback func(react aicommon.AIEngineOperator, event *schema.AiOutputEvent, NodeId string, data []byte)) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `func(react aicommon.AIEngineOperator, event *schema.AiOutputEvent, NodeId string, data []byte)` | 流式回调，参数为 (operator, event, nodeId, data) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` | 引擎配置可选项 |


### onStreamContent

#### 详细描述
WithOnStreamContent 设置流式输出结束回调，并返回重组后的完整流内容（导出名为 aim.onStreamContent）

参数:

  - callback: 回调，参数为 (operator, event, nodeId, totalContent)



返回值:

  - 引擎配置可选项




Example:

``````````````yak
opt = aim.onStreamContent(func(op, e, nodeId, total) { println(string(total)) })
println(opt)
``````````````


#### 定义

`onStreamContent(callback func(react aicommon.AIEngineOperator, event *schema.AiOutputEvent, NodeId string, totalContent []byte)) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `func(react aicommon.AIEngineOperator, event *schema.AiOutputEvent, NodeId string, totalContent []byte)` | 回调，参数为 (operator, event, nodeId, totalContent) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` | 引擎配置可选项 |


### onStreamEnd

#### 详细描述
WithOnStreamEnd 设置流式输出结束回调（导出名为 aim.onStreamEnd）

参数:

  - callback: 回调，参数为 (operator, event, nodeId)



返回值:

  - 引擎配置可选项




Example:

``````````````yak
opt = aim.onStreamEnd(func(op, e, nodeId) { println("stream end:", nodeId) })
println(opt)
``````````````


#### 定义

`onStreamEnd(callback func(react aicommon.AIEngineOperator, event *schema.AiOutputEvent, NodeId string)) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `func(react aicommon.AIEngineOperator, event *schema.AiOutputEvent, NodeId string)` | 回调，参数为 (operator, event, nodeId) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` | 引擎配置可选项 |


### qualityPriorityAICallback

#### 详细描述
WithQualityPriorityAICallback 设置质量优先的 AI 回调（导出名为 aim.qualityPriorityAICallback）

参数:

  - callback: AI 回调函数



返回值:

  - 引擎配置可选项




Example:

``````````````yak
opt = aim.qualityPriorityAICallback(callback)
println(opt)
``````````````


#### 定义

`qualityPriorityAICallback(callback aicommon.AICallbackType) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `aicommon.AICallbackType` | AI 回调函数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` | 引擎配置可选项 |


### qualityPriorityAIConfig

#### 详细描述
WithQualityPriorityAIConfig 设置质量优先档使用的 AI（导出名为 aim.qualityPriorityAIConfig）

参数:

  - typeName: AI 类型名

  - opts: aispec AI 配置选项



返回值:

  - 引擎配置可选项




Example:

``````````````yak
opt = aim.qualityPriorityAIConfig("openai", ai.apiKey("sk-xxx"))
println(opt)
``````````````


#### 定义

`qualityPriorityAIConfig(typeName string, opts ...aispec.AIConfigOption) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| typeName | `string` | AI 类型名 |
| opts | `...aispec.AIConfigOption` | aispec AI 配置选项 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` | 引擎配置可选项 |


### reviewPolicy

#### 详细描述
WithReviewPolicy 设置审批策略（导出名为 aim.reviewPolicy）

policy: &#34;yolo&#34; (自动通过), &#34;ai&#34; (AI 审批), &#34;manual&#34; (手动审批)

参数:

  - policy: 审批策略



返回值:

  - 引擎配置可选项




Example:

``````````````yak
opt = aim.reviewPolicy("manual")
println(opt)
``````````````


#### 定义

`reviewPolicy(policy string) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| policy | `string` | 审批策略 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` | 引擎配置可选项 |


### sessionID

#### 详细描述
WithSessionID 设置会话 ID，用于持久化与续接（导出名为 aim.sessionID）

参数:

  - sessionID: 会话 ID



返回值:

  - 引擎配置可选项




Example:

``````````````yak
opt = aim.sessionID("my-session")
println(opt)
``````````````


#### 定义

`sessionID(sessionID string) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| sessionID | `string` | 会话 ID |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` | 引擎配置可选项 |


### speedPriorityAICallback

#### 详细描述
WithSpeedPriorityAICallback 设置速度优先的 AI 回调（导出名为 aim.speedPriorityAICallback）

参数:

  - callback: AI 回调函数



返回值:

  - 引擎配置可选项




Example:

``````````````yak
opt = aim.speedPriorityAICallback(callback)
println(opt)
``````````````


#### 定义

`speedPriorityAICallback(callback aicommon.AICallbackType) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `aicommon.AICallbackType` | AI 回调函数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` | 引擎配置可选项 |


### speedPriorityAIConfig

#### 详细描述
WithSpeedPriorityAIConfig 设置速度优先档使用的 AI（导出名为 aim.speedPriorityAIConfig）

参数:

  - typeName: AI 类型名

  - opts: aispec AI 配置选项



返回值:

  - 引擎配置可选项




Example:

``````````````yak
opt = aim.speedPriorityAIConfig("openai", ai.apiKey("sk-xxx"))
println(opt)
``````````````


#### 定义

`speedPriorityAIConfig(typeName string, opts ...aispec.AIConfigOption) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| typeName | `string` | AI 类型名 |
| opts | `...aispec.AIConfigOption` | aispec AI 配置选项 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` | 引擎配置可选项 |


### timelineContentLimit

#### 详细描述
WithTimelineContentLimit 设置 Timeline 内容大小上限（导出名为 aim.timelineContentLimit）

参数:

  - limit: 内容大小上限



返回值:

  - 引擎配置可选项




Example:

``````````````yak
opt = aim.timelineContentLimit(4096)
println(opt)
``````````````


#### 定义

`timelineContentLimit(limit int) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| limit | `int` | 内容大小上限 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` | 引擎配置可选项 |


### timeout

#### 详细描述
WithTimeout 设置引擎运行的超时时间（导出名为 aim.timeout）

参数:

  - timeout: 超时时间（秒）



返回值:

  - 引擎配置可选项




Example:

``````````````yak
opt = aim.timeout(60)
println(opt)
``````````````


#### 定义

`timeout(timeout float64) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| timeout | `float64` | 超时时间（秒） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` | 引擎配置可选项 |


### userInteractLimit

#### 详细描述
WithUserInteractLimit 设置用户交互次数上限（导出名为 aim.userInteractLimit）

参数:

  - limit: 交互次数上限



返回值:

  - 引擎配置可选项




Example:

``````````````yak
opt = aim.userInteractLimit(3)
println(opt)
``````````````


#### 定义

`userInteractLimit(limit int64) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| limit | `int64` | 交互次数上限 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` | 引擎配置可选项 |


### workdir

#### 详细描述
WithWorkdir 设置引擎工作目录（导出名为 aim.workdir）

参数:

  - workdir: 工作目录路径



返回值:

  - 引擎配置可选项




Example:

``````````````yak
opt = aim.workdir("/tmp/work")
println(opt)
``````````````


#### 定义

`workdir(workdir string) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| workdir | `string` | 工作目录路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` | 引擎配置可选项 |


### yoloMode

#### 详细描述
WithYOLOMode YOLO 模式：自动执行所有操作，无需用户确认（导出名为 aim.yoloMode）

参数:

  - 无



返回值:

  - 引擎配置可选项




Example:

``````````````yak
opt = aim.yoloMode()
println(opt)
``````````````


#### 定义

`yoloMode() AIEngineConfigOption`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` | 引擎配置可选项 |


