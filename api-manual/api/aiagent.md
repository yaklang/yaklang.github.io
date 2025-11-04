# aiagent

|函数名|函数描述/介绍|
|:------|:--------|
| [aiagent.AllYakScriptAiTools](#allyakscriptaitools) ||
| [aiagent.CreateForge](#createforge) ||
| [aiagent.CreateLiteForge](#createliteforge) ||
| [aiagent.ExecuteForge](#executeforge) ||
| [aiagent.ExtractAction](#extractaction) |ExtractAction 从字符串中提取指定的 Action 对象，支持别名，这里隐含一个强校验行为，即会等待处理完毕之后检查是否有可用的Action |
| [aiagent.ExtractPlan](#extractplan) ||
| [aiagent.GetDefaultMemory](#getdefaultmemory) ||
| [aiagent.NewExecutor](#newexecutor) ||
| [aiagent.NewExecutorFromJson](#newexecutorfromjson) ||
| [aiagent.ParseYakScriptToAiTools](#parseyakscripttoaitools) ||
| [aiagent.UpdateYakScriptMetaData](#updateyakscriptmetadata) ||
| [aiagent.agreeAuto](#agreeauto) ||
| [aiagent.agreeManual](#agreemanual) ||
| [aiagent.agreePolicy](#agreepolicy) ||
| [aiagent.agreePolicyAI](#agreepolicyai) ||
| [aiagent.agreeYOLO](#agreeyolo) ||
| [aiagent.aiAutoRetry](#aiautoretry) |WithAIAutoRetry sets AiAutoRetry count. |
| [aiagent.aiCallback](#aicallback) |Callback setters |
| [aiagent.aiTransactionRetry](#aitransactionretry) |WithAITransactionRetry alias to existing WithAITransactionAutoRetry for naming compatibility. |
| [aiagent.allowRequireForUserInteract](#allowrequireforuserinteract) |Interactive / review / require_user |
| [aiagent.appendPersistentMemory](#appendpersistentmemory) |WithAppendPersistentMemory appends keys to PersistentMemory. |
| [aiagent.context](#context) ||
| [aiagent.coordinatorAICallback](#coordinatoraicallback) ||
| [aiagent.debug](#debug) |WithDebug toggles both prompt and event debug flags. |
| [aiagent.debugPrompt](#debugprompt) |Debug flags |
| [aiagent.disableOutputType](#disableoutputtype) |WithDisableOutputEvent is a name-compatible wrapper for disabling output event types. |
| [aiagent.disableToolUse](#disabletooluse) ||
| [aiagent.disallowRequireForUserPrompt](#disallowrequireforuserprompt) |WithDisallowRequireForUserPrompt disables require-for-user-interact. |
| [aiagent.extendAIDOptions](#extendaidoptions) ||
| [aiagent.extendedActionCallback](#extendedactioncallback) |WithExtendedActionCallback sets the ExtendedActionCallback map. |
| [aiagent.forgeName](#forgename) ||
| [aiagent.forgePlanMocker](#forgeplanmocker) |WithPlanMocker 设置AI助手的计划生成器 |
| [aiagent.forgeTools](#forgetools) |WithTools 为AI助手添加可用的工具 这些工具可以扩展AI的能力，使其能够执行特定的任务 |
| [aiagent.initPrompt](#initprompt) |WithInitializePrompt 设置AI助手的初始化提示词 这个提示词会在AI助手启动时被使用，用于定义AI的初始状态和行为 |
| [aiagent.initializePrompt](#initializeprompt) |WithInitializePrompt 设置AI助手的初始化提示词 这个提示词会在AI助手启动时被使用，用于定义AI的初始状态和行为 |
| [aiagent.liteForgeOutputSchema](#liteforgeoutputschema) ||
| [aiagent.liteForgeOutputSchemaRaw](#liteforgeoutputschemaraw) ||
| [aiagent.liteForgePrompt](#liteforgeprompt) ||
| [aiagent.liteForgedRequireParams](#liteforgedrequireparams) ||
| [aiagent.manualAssistantCallback](#manualassistantcallback) |WithManualAssistantCallback is an alias to the agree/manual callback setter. |
| [aiagent.offsetSeq](#offsetseq) |WithSequence sets the starting sequence/id and installs a simple id generator that increments it. |
| [aiagent.omniSearchTool](#omnisearchtool) ||
| [aiagent.originYaklangCliCode](#originyaklangclicode) |WithOriginYaklangCliCode 设置原始的Yaklang CLI代码 这个结构需要 Yak 引擎根据 CLI 代码构建出正确的用户需要输入的工具 这个结构是表单构建的核心依据，可以使用 Yak 原声插件基础设施直接构建表单 |
| [aiagent.persistentPrompt](#persistentprompt) |WithPersistentPrompt 设置AI助手的持久提示词 这个提示词会在整个会话过程中持续存在，确保AI行为的一致性 |
| [aiagent.persistentPromptForge](#persistentpromptforge) |WithPersistentPrompt 设置AI助手的持久提示词 这个提示词会在整个会话过程中持续存在，确保AI行为的一致性 |
| [aiagent.plan](#plan) ||
| [aiagent.planAICallback](#planaicallback) ||
| [aiagent.resultHandler](#resulthandler) |cycle import issue |
| [aiagent.resultHandlerForge](#resulthandlerforge) |WithResultHandler 设置AI助手的结果处理函数 这个函数会在AI助手生成结果后被调用，用于处理AI的输出 |
| [aiagent.resultPrompt](#resultprompt) |WithResultPrompt 设置AI助手的生成结果提示词 这个提示词会在AI助手生成结果时被使用，用于定义AI的输出格式和内容 |
| [aiagent.resultPromptForge](#resultpromptforge) |WithResultPrompt 设置AI助手的生成结果提示词 这个提示词会在AI助手生成结果时被使用，用于定义AI的输出格式和内容 |
| [aiagent.systemFileOperator](#systemfileoperator) ||
| [aiagent.taskAICallback](#taskaicallback) ||
| [aiagent.timelineContentLimit](#timelinecontentlimit) |WithTimelineContentLimit sets timeline content size limit (keeps naming parity). |
| [aiagent.tool](#tool) |WithTool is a convenience wrapper to add a single tool (delegates to WithTools). |
| [aiagent.toolKeywords](#toolkeywords) |WithToolKeywords 设置AI助手的工具关键词 这些关键词可以扩展AI的能力，使其能够执行特定的任务 |
| [aiagent.tools](#tools) ||


## 函数定义
### AllYakScriptAiTools

#### 详细描述


#### 定义

`AllYakScriptAiTools() []*aitool.Tool`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*aitool.Tool` |   |


### CreateForge

#### 详细描述


#### 定义

`CreateForge(name string, opts ...any) *aiforge.ForgeBlueprint`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| opts | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*aiforge.ForgeBlueprint` |   |


### CreateLiteForge

#### 详细描述


#### 定义

`CreateLiteForge(name string, opts ...any) (*aiforge.LiteForge, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| opts | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*aiforge.LiteForge` |   |
| r2 | `error` |   |


### ExecuteForge

#### 详细描述


#### 定义

`ExecuteForge(forgeName string, i any, iopts ...any) (any, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| forgeName | `string` |   |
| i | `any` |   |
| iopts | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` |   |
| r2 | `error` |   |


### ExtractAction

#### 详细描述
ExtractAction 从字符串中提取指定的 Action 对象，支持别名，这里隐含一个强校验行为，即会等待处理完毕之后检查是否有可用的Action


#### 定义

`ExtractAction(i string, actionName string, alias ...string) (*Action, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |
| actionName | `string` |   |
| alias | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*Action` |   |
| r2 | `error` |   |


### ExtractPlan

#### 详细描述


#### 定义

`ExtractPlan(c *Coordinator, rawResponse string) (*PlanResponse, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| c | `*Coordinator` |   |
| rawResponse | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*PlanResponse` |   |
| r2 | `error` |   |


### GetDefaultMemory

#### 详细描述


#### 定义

`GetDefaultMemory() *PromptContextProvider`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*PromptContextProvider` |   |


### NewExecutor

#### 详细描述


#### 定义

`NewExecutor(name string, i any, opts ...any) (*aid.Coordinator, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| i | `any` |   |
| opts | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*aid.Coordinator` |   |
| r2 | `error` |   |


### NewExecutorFromJson

#### 详细描述


#### 定义

`NewExecutorFromJson(json string, i any, opts ...any) (*aid.Coordinator, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| json | `string` |   |
| i | `any` |   |
| opts | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*aid.Coordinator` |   |
| r2 | `error` |   |


### ParseYakScriptToAiTools

#### 详细描述


#### 定义

`ParseYakScriptToAiTools(name string, content string) *schema.AIYakTool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| content | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*schema.AIYakTool` |   |


### UpdateYakScriptMetaData

#### 详细描述


#### 定义

`UpdateYakScriptMetaData(name string, content string, forceUpdate bool) (string, *metadata.YakScriptMetadata, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| content | `string` |   |
| forceUpdate | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `*metadata.YakScriptMetadata` |   |
| r3 | `error` |   |


### agreeAuto

#### 详细描述


#### 定义

`agreeAuto() error`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### agreeManual

#### 详细描述


#### 定义

`agreeManual() error`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### agreePolicy

#### 详细描述


#### 定义

`agreePolicy(p AgreePolicyType) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| p | `AgreePolicyType` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### agreePolicyAI

#### 详细描述


#### 定义

`agreePolicyAI() error`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### agreeYOLO

#### 详细描述


#### 定义

`agreeYOLO(b ...bool) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `...bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### aiAutoRetry

#### 详细描述
WithAIAutoRetry sets AiAutoRetry count.


#### 定义

`aiAutoRetry(n int64) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `int64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### aiCallback

#### 详细描述
Callback setters


#### 定义

`aiCallback(cb AICallbackType) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cb | `AICallbackType` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### aiTransactionRetry

#### 详细描述
WithAITransactionRetry alias to existing WithAITransactionAutoRetry for naming compatibility.


#### 定义

`aiTransactionRetry(n int64) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `int64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### allowRequireForUserInteract

#### 详细描述
Interactive / review / require_user


#### 定义

`allowRequireForUserInteract(v bool) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### appendPersistentMemory

#### 详细描述
WithAppendPersistentMemory appends keys to PersistentMemory.


#### 定义

`appendPersistentMemory(keys ...string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| keys | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### context

#### 详细描述


#### 定义

`context(ctx context.Context) AIAgentOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIAgentOption` |   |


### coordinatorAICallback

#### 详细描述


#### 定义

`coordinatorAICallback(cb AICallbackType) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cb | `AICallbackType` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### debug

#### 详细描述
WithDebug toggles both prompt and event debug flags.


#### 定义

`debug(v bool) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### debugPrompt

#### 详细描述
Debug flags


#### 定义

`debugPrompt(v ...bool) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v | `...bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### disableOutputType

#### 详细描述
WithDisableOutputEvent is a name-compatible wrapper for disabling output event types.


#### 定义

`disableOutputType(types ...string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| types | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### disableToolUse

#### 详细描述


#### 定义

`disableToolUse(disable bool) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| disable | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### disallowRequireForUserPrompt

#### 详细描述
WithDisallowRequireForUserPrompt disables require-for-user-interact.


#### 定义

`disallowRequireForUserPrompt() ConfigOption`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### extendAIDOptions

#### 详细描述


#### 定义

`extendAIDOptions(opts ...aicommon.ConfigOption) AIAgentOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...aicommon.ConfigOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIAgentOption` |   |


### extendedActionCallback

#### 详细描述
WithExtendedActionCallback sets the ExtendedActionCallback map.


#### 定义

`extendedActionCallback(name string, callback func(config *Config, action *Action)) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| callback | `func(config *Config, action *Action)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### forgeName

#### 详细描述


#### 定义

`forgeName(forgeName string) AIAgentOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| forgeName | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIAgentOption` |   |


### forgePlanMocker

#### 详细描述
WithPlanMocker 设置AI助手的计划生成器


#### 定义

`forgePlanMocker(plan func(config *aid.Coordinator) *aid.PlanResponse) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| plan | `func(config *aid.Coordinator) *aid.PlanResponse` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### forgeTools

#### 详细描述
WithTools 为AI助手添加可用的工具
这些工具可以扩展AI的能力，使其能够执行特定的任务


#### 定义

`forgeTools(tools ...*aitool.Tool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tools | `...*aitool.Tool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### initPrompt

#### 详细描述
WithInitializePrompt 设置AI助手的初始化提示词
这个提示词会在AI助手启动时被使用，用于定义AI的初始状态和行为


#### 定义

`initPrompt(prompt string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| prompt | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### initializePrompt

#### 详细描述
WithInitializePrompt 设置AI助手的初始化提示词
这个提示词会在AI助手启动时被使用，用于定义AI的初始状态和行为


#### 定义

`initializePrompt(prompt string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| prompt | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### liteForgeOutputSchema

#### 详细描述


#### 定义

`liteForgeOutputSchema(params ...aitool.ToolOption) LiteForgeOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| params | `...aitool.ToolOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `LiteForgeOption` |   |


### liteForgeOutputSchemaRaw

#### 详细描述


#### 定义

`liteForgeOutputSchemaRaw(actionName string, outputSchema string) LiteForgeOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| actionName | `string` |   |
| outputSchema | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `LiteForgeOption` |   |


### liteForgePrompt

#### 详细描述


#### 定义

`liteForgePrompt(i string) LiteForgeOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `LiteForgeOption` |   |


### liteForgedRequireParams

#### 详细描述


#### 定义

`liteForgedRequireParams(params ...aitool.ToolOption) LiteForgeOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| params | `...aitool.ToolOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `LiteForgeOption` |   |


### manualAssistantCallback

#### 详细描述
WithManualAssistantCallback is an alias to the agree/manual callback setter.


#### 定义

`manualAssistantCallback(cb func(context.Context, *Config) (aitool.InvokeParams, error)) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cb | `func(context.Context, *Config) (aitool.InvokeParams, error)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### offsetSeq

#### 详细描述
WithSequence sets the starting sequence/id and installs a simple id generator that increments it.


#### 定义

`offsetSeq(seq int64) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| seq | `int64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### omniSearchTool

#### 详细描述


#### 定义

`omniSearchTool() error`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### originYaklangCliCode

#### 详细描述
WithOriginYaklangCliCode 设置原始的Yaklang CLI代码
这个结构需要 Yak 引擎根据 CLI 代码构建出正确的用户需要输入的工具
这个结构是表单构建的核心依据，可以使用 Yak 原声插件基础设施直接构建表单


#### 定义

`originYaklangCliCode(originYaklangCliCode string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| originYaklangCliCode | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### persistentPrompt

#### 详细描述
WithPersistentPrompt 设置AI助手的持久提示词
这个提示词会在整个会话过程中持续存在，确保AI行为的一致性


#### 定义

`persistentPrompt(persistentPrompt string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| persistentPrompt | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### persistentPromptForge

#### 详细描述
WithPersistentPrompt 设置AI助手的持久提示词
这个提示词会在整个会话过程中持续存在，确保AI行为的一致性


#### 定义

`persistentPromptForge(persistentPrompt string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| persistentPrompt | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### plan

#### 详细描述


#### 定义

`plan(i func(coordinator *Coordinator) *PlanResponse) aicommon.ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `func(coordinator *Coordinator) *PlanResponse` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `aicommon.ConfigOption` |   |


### planAICallback

#### 详细描述


#### 定义

`planAICallback(cb AICallbackType) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cb | `AICallbackType` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### resultHandler

#### 详细描述
cycle import issue


#### 定义

`resultHandler(h func(c *Coordinator)) aicommon.ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `func(c *Coordinator)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `aicommon.ConfigOption` |   |


### resultHandlerForge

#### 详细描述
WithResultHandler 设置AI助手的结果处理函数
这个函数会在AI助手生成结果后被调用，用于处理AI的输出


#### 定义

`resultHandlerForge(handler func(string, error)) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| handler | `func(string, error)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### resultPrompt

#### 详细描述
WithResultPrompt 设置AI助手的生成结果提示词
这个提示词会在AI助手生成结果时被使用，用于定义AI的输出格式和内容


#### 定义

`resultPrompt(prompt string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| prompt | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### resultPromptForge

#### 详细描述
WithResultPrompt 设置AI助手的生成结果提示词
这个提示词会在AI助手生成结果时被使用，用于定义AI的输出格式和内容


#### 定义

`resultPromptForge(prompt string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| prompt | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### systemFileOperator

#### 详细描述


#### 定义

`systemFileOperator() error`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### taskAICallback

#### 详细描述


#### 定义

`taskAICallback(cb AICallbackType) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cb | `AICallbackType` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### timelineContentLimit

#### 详细描述
WithTimelineContentLimit sets timeline content size limit (keeps naming parity).


#### 定义

`timelineContentLimit(limit int) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| limit | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### tool

#### 详细描述
WithTool is a convenience wrapper to add a single tool (delegates to WithTools).


#### 定义

`tool(tool *aitool.Tool) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tool | `*aitool.Tool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### toolKeywords

#### 详细描述
WithToolKeywords 设置AI助手的工具关键词
这些关键词可以扩展AI的能力，使其能够执行特定的任务


#### 定义

`toolKeywords(keywords []string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| keywords | `[]string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### tools

#### 详细描述


#### 定义

`tools(tool ...*aitool.Tool) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tool | `...*aitool.Tool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


