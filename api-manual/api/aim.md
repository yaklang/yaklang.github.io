# aim

|函数名|函数描述/介绍|
|:------|:--------|
| [aim.InvokeReAct](#invokereact) ||
| [aim.InvokeReActAsync](#invokereactasync) |InvokeReActAsync 异步执行 ReAct 任务，并返回引擎实例 |
| [aim.NewAIEngine](#newaiengine) |NewAIEngine 创建新的 AI 引擎实例 |
| [aim.aiCallback](#aicallback) |WithAICallback 设置 AI 回调 |
| [aim.aiConfig](#aiconfig) |WithAIConfig 设置 AI 配置 |
| [aim.aiReviewMode](#aireviewmode) ||
| [aim.aiService](#aiservice) |WithAIService 设置 AI 服务 |
| [aim.allowUserInteract](#allowuserinteract) |WithAllowUserInteract 设置是否允许用户交互 |
| [aim.context](#context) |WithContext 设置上下文 |
| [aim.debugMode](#debugmode) |WithDebugMode 设置调试模式 |
| [aim.disableAIForge](#disableaiforge) ||
| [aim.disableMCPServers](#disablemcpservers) ||
| [aim.disableToolUse](#disabletooluse) |WithDisableToolUse 禁用工具调用 |
| [aim.enableAISearchTool](#enableaisearchtool) |WithEnableAISearchTool 启用 AI 搜索工具 |
| [aim.enableForgeSearchTool](#enableforgesearchtool) |WithEnableForgeSearchTool 启用 Forge 搜索工具 |
| [aim.excludeToolNames](#excludetoolnames) |WithExcludeToolNames 设置排除的工具名称 |
| [aim.focus](#focus) |WithFocus 设置焦点 |
| [aim.includeToolNames](#includetoolnames) |WithIncludeToolNames 设置包含的工具名称 |
| [aim.keywords](#keywords) |WithKeywords 设置关键词 |
| [aim.language](#language) |WithLanguage 设置响应语言 |
| [aim.manualMode](#manualmode) ||
| [aim.maxIteration](#maxiteration) |WithMaxIteration 设置最大迭代次数 |
| [aim.onData](#ondata) |WithOnData 设置数据回调 |
| [aim.onEvent](#onevent) |WithOnEvent 设置事件回调 |
| [aim.onFinished](#onfinished) |WithOnFinished 设置完成回调 |
| [aim.onInputRequired](#oninputrequired) |WithOnInputRequired 设置需要用户输入回调 |
| [aim.onInputRequiredRaw](#oninputrequiredraw) |WithOnInputRequiredRaw 设置需要用户输入回调 |
| [aim.onStream](#onstream) |WithOnStream 设置流式输出回调 |
| [aim.onStreamEnd](#onstreamend) |WithOnStreamEnd 设置流式输出结束回调 |
| [aim.reviewPolicy](#reviewpolicy) |WithReviewPolicy 设置审批策略 policy: &amp;#34;yolo&amp;#34; (自动通过), &amp;#34;ai&amp;#34; (AI 审批), &amp;#34;manual&amp;#34; (手动审批) |
| [aim.sessionID](#sessionid) |WithSessionID 设置会话 ID |
| [aim.timelineContentLimit](#timelinecontentlimit) |WithTimelineContentLimit 设置 Timeline 内容大小限制 |
| [aim.timeout](#timeout) ||
| [aim.userInteractLimit](#userinteractlimit) |WithUserInteractLimit 设置用户交互次数限制 |
| [aim.workdir](#workdir) |WithWorkdir 设置工作目录 |
| [aim.yoloMode](#yolomode) ||


## 函数定义
### InvokeReAct

#### 详细描述


#### 定义

`InvokeReAct(input string, options ...AIEngineConfigOption) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| input | `string` |   |
| options | `...AIEngineConfigOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### InvokeReActAsync

#### 详细描述
InvokeReActAsync 异步执行 ReAct 任务，并返回引擎实例


#### 定义

`InvokeReActAsync(input string, options ...AIEngineConfigOption) (*AIEngine, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| input | `string` |   |
| options | `...AIEngineConfigOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*AIEngine` |   |
| r2 | `error` |   |


### NewAIEngine

#### 详细描述
NewAIEngine 创建新的 AI 引擎实例


#### 定义

`NewAIEngine(options ...AIEngineConfigOption) (*AIEngine, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| options | `...AIEngineConfigOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*AIEngine` |   |
| r2 | `error` |   |


### aiCallback

#### 详细描述
WithAICallback 设置 AI 回调


#### 定义

`aiCallback(callback aicommon.AICallbackType) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `aicommon.AICallbackType` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` |   |


### aiConfig

#### 详细描述
WithAIConfig 设置 AI 配置


#### 定义

`aiConfig(typeName string, opts ...aispec.AIConfigOption) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| typeName | `string` |   |
| opts | `...aispec.AIConfigOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` |   |


### aiReviewMode

#### 详细描述


#### 定义

`aiReviewMode()`


### aiService

#### 详细描述
WithAIService 设置 AI 服务


#### 定义

`aiService(service string) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| service | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` |   |


### allowUserInteract

#### 详细描述
WithAllowUserInteract 设置是否允许用户交互


#### 定义

`allowUserInteract(allow bool) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| allow | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` |   |


### context

#### 详细描述
WithContext 设置上下文


#### 定义

`context(ctx context.Context) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` |   |


### debugMode

#### 详细描述
WithDebugMode 设置调试模式


#### 定义

`debugMode(debug bool) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| debug | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` |   |


### disableAIForge

#### 详细描述


#### 定义

`disableAIForge(disable bool) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| disable | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` |   |


### disableMCPServers

#### 详细描述


#### 定义

`disableMCPServers(disable bool) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| disable | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` |   |


### disableToolUse

#### 详细描述
WithDisableToolUse 禁用工具调用


#### 定义

`disableToolUse(disable bool) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| disable | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` |   |


### enableAISearchTool

#### 详细描述
WithEnableAISearchTool 启用 AI 搜索工具


#### 定义

`enableAISearchTool(enable bool) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| enable | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` |   |


### enableForgeSearchTool

#### 详细描述
WithEnableForgeSearchTool 启用 Forge 搜索工具


#### 定义

`enableForgeSearchTool(enable bool) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| enable | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` |   |


### excludeToolNames

#### 详细描述
WithExcludeToolNames 设置排除的工具名称


#### 定义

`excludeToolNames(names ...string) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| names | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` |   |


### focus

#### 详细描述
WithFocus 设置焦点


#### 定义

`focus(focus string) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| focus | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` |   |


### includeToolNames

#### 详细描述
WithIncludeToolNames 设置包含的工具名称


#### 定义

`includeToolNames(names ...string) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| names | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` |   |


### keywords

#### 详细描述
WithKeywords 设置关键词


#### 定义

`keywords(keywords ...string) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| keywords | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` |   |


### language

#### 详细描述
WithLanguage 设置响应语言


#### 定义

`language(lang string) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| lang | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` |   |


### manualMode

#### 详细描述


#### 定义

`manualMode()`


### maxIteration

#### 详细描述
WithMaxIteration 设置最大迭代次数


#### 定义

`maxIteration(max int) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| max | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` |   |


### onData

#### 详细描述
WithOnData 设置数据回调


#### 定义

`onData(callback func(react aicommon.AIEngineOperator, event *schema.AiOutputEvent, NodeId string, data []byte)) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `func(react aicommon.AIEngineOperator, event *schema.AiOutputEvent, NodeId string, data []byte)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` |   |


### onEvent

#### 详细描述
WithOnEvent 设置事件回调


#### 定义

`onEvent(callback func(aicommon.AIEngineOperator, *schema.AiOutputEvent)) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `func(aicommon.AIEngineOperator, *schema.AiOutputEvent)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` |   |


### onFinished

#### 详细描述
WithOnFinished 设置完成回调


#### 定义

`onFinished(callback func(react aicommon.AIEngineOperator)) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `func(react aicommon.AIEngineOperator)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` |   |


### onInputRequired

#### 详细描述
WithOnInputRequired 设置需要用户输入回调


#### 定义

`onInputRequired(callback func(react aicommon.AIEngineOperator, question string) string) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `func(react aicommon.AIEngineOperator, question string) string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` |   |


### onInputRequiredRaw

#### 详细描述
WithOnInputRequiredRaw 设置需要用户输入回调


#### 定义

`onInputRequiredRaw(callback func(react aicommon.AIEngineOperator, event *schema.AiOutputEvent, question string) string) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `func(react aicommon.AIEngineOperator, event *schema.AiOutputEvent, question string) string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` |   |


### onStream

#### 详细描述
WithOnStream 设置流式输出回调


#### 定义

`onStream(callback func(react aicommon.AIEngineOperator, event *schema.AiOutputEvent, NodeId string, data []byte)) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `func(react aicommon.AIEngineOperator, event *schema.AiOutputEvent, NodeId string, data []byte)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` |   |


### onStreamEnd

#### 详细描述
WithOnStreamEnd 设置流式输出结束回调


#### 定义

`onStreamEnd(callback func(react aicommon.AIEngineOperator, event *schema.AiOutputEvent, NodeId string)) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `func(react aicommon.AIEngineOperator, event *schema.AiOutputEvent, NodeId string)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` |   |


### reviewPolicy

#### 详细描述
WithReviewPolicy 设置审批策略
policy: &#34;yolo&#34; (自动通过), &#34;ai&#34; (AI 审批), &#34;manual&#34; (手动审批)


#### 定义

`reviewPolicy(policy string) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| policy | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` |   |


### sessionID

#### 详细描述
WithSessionID 设置会话 ID


#### 定义

`sessionID(sessionID string) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| sessionID | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` |   |


### timelineContentLimit

#### 详细描述
WithTimelineContentLimit 设置 Timeline 内容大小限制


#### 定义

`timelineContentLimit(limit int) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| limit | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` |   |


### timeout

#### 详细描述


#### 定义

`timeout(timeout float64) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| timeout | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` |   |


### userInteractLimit

#### 详细描述
WithUserInteractLimit 设置用户交互次数限制


#### 定义

`userInteractLimit(limit int64) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| limit | `int64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` |   |


### workdir

#### 详细描述
WithWorkdir 设置工作目录


#### 定义

`workdir(workdir string) AIEngineConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| workdir | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIEngineConfigOption` |   |


### yoloMode

#### 详细描述


#### 定义

`yoloMode()`


