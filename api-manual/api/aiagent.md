# aiagent

|函数名|函数描述/介绍|
|:------|:--------|
| [aiagent.AllYakScriptAiTools](#allyakscriptaitools) ||
| [aiagent.CreateForge](#createforge) ||
| [aiagent.CreateLiteForge](#createliteforge) ||
| [aiagent.ExecuteForge](#executeforge) ||
| [aiagent.ExtractAction](#extractaction) ||
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
| [aiagent.aiAgree](#aiagree) ||
| [aiagent.aiAutoRetry](#aiautoretry) ||
| [aiagent.aiCallback](#aicallback) ||
| [aiagent.aiForgeSearchTool](#aiforgesearchtool) ||
| [aiagent.aiToolsSearchTool](#aitoolssearchtool) ||
| [aiagent.aiTransactionRetry](#aitransactionretry) ||
| [aiagent.allowRequireForUserInteract](#allowrequireforuserinteract) ||
| [aiagent.appendPersistentMemory](#appendpersistentmemory) ||
| [aiagent.context](#context) ||
| [aiagent.coordinatorAICallback](#coordinatoraicallback) ||
| [aiagent.debug](#debug) ||
| [aiagent.debugPrompt](#debugprompt) ||
| [aiagent.disableOutputType](#disableoutputtype) ||
| [aiagent.disableToolUse](#disabletooluse) ||
| [aiagent.disallowRequireForUserPrompt](#disallowrequireforuserprompt) ||
| [aiagent.eventHandler](#eventhandler) ||
| [aiagent.eventInputChan](#eventinputchan) ||
| [aiagent.extendAIDOptions](#extendaidoptions) ||
| [aiagent.extendedActionCallback](#extendedactioncallback) ||
| [aiagent.forgeName](#forgename) ||
| [aiagent.forgePlanMocker](#forgeplanmocker) |WithPlanMocker 设置AI助手的计划生成器 |
| [aiagent.forgeTools](#forgetools) |WithTools 为AI助手添加可用的工具 这些工具可以扩展AI的能力，使其能够执行特定的任务 |
| [aiagent.initPrompt](#initprompt) |WithInitializePrompt 设置AI助手的初始化提示词 这个提示词会在AI助手启动时被使用，用于定义AI的初始状态和行为 |
| [aiagent.initializePrompt](#initializeprompt) |WithInitializePrompt 设置AI助手的初始化提示词 这个提示词会在AI助手启动时被使用，用于定义AI的初始状态和行为 |
| [aiagent.jarOperator](#jaroperator) ||
| [aiagent.liteForgeOutputMemoryOP](#liteforgeoutputmemoryop) ||
| [aiagent.liteForgeOutputSchema](#liteforgeoutputschema) ||
| [aiagent.liteForgeOutputSchemaRaw](#liteforgeoutputschemaraw) ||
| [aiagent.liteForgePrompt](#liteforgeprompt) ||
| [aiagent.liteForgedRequireParams](#liteforgedrequireparams) ||
| [aiagent.manualAssistantCallback](#manualassistantcallback) ||
| [aiagent.memory](#memory) ||
| [aiagent.offsetSeq](#offsetseq) ||
| [aiagent.omniSearchTool](#omnisearchtool) ||
| [aiagent.originYaklangCliCode](#originyaklangclicode) |WithOriginYaklangCliCode 设置原始的Yaklang CLI代码 这个结构需要 Yak 引擎根据 CLI 代码构建出正确的用户需要输入的工具 这个结构是表单构建的核心依据，可以使用 Yak 原声插件基础设施直接构建表单 |
| [aiagent.persistentPrompt](#persistentprompt) |WithPersistentPrompt 设置AI助手的持久提示词 这个提示词会在整个会话过程中持续存在，确保AI行为的一致性 |
| [aiagent.persistentPromptForge](#persistentpromptforge) |WithPersistentPrompt 设置AI助手的持久提示词 这个提示词会在整个会话过程中持续存在，确保AI行为的一致性 |
| [aiagent.plan](#plan) ||
| [aiagent.planAICallback](#planaicallback) ||
| [aiagent.resultHandler](#resulthandler) ||
| [aiagent.resultHandlerForge](#resulthandlerforge) |WithResultHandler 设置AI助手的结果处理函数 这个函数会在AI助手生成结果后被调用，用于处理AI的输出 |
| [aiagent.resultPrompt](#resultprompt) |WithResultPrompt 设置AI助手的生成结果提示词 这个提示词会在AI助手生成结果时被使用，用于定义AI的输出格式和内容 |
| [aiagent.resultPromptForge](#resultpromptforge) |WithResultPrompt 设置AI助手的生成结果提示词 这个提示词会在AI助手生成结果时被使用，用于定义AI的输出格式和内容 |
| [aiagent.systemFileOperator](#systemfileoperator) ||
| [aiagent.taskAICallback](#taskaicallback) ||
| [aiagent.timeLineLimit](#timelinelimit) ||
| [aiagent.timelineContentLimit](#timelinecontentlimit) ||
| [aiagent.tool](#tool) ||
| [aiagent.toolKeywords](#toolkeywords) |WithToolKeywords 设置AI助手的工具关键词 这些关键词可以扩展AI的能力，使其能够执行特定的任务 |
| [aiagent.toolManager](#toolmanager) ||
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

`ExtractPlan(c *Config, rawResponse string) (*PlanResponse, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| c | `*Config` |   |
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

`agreeAuto(interval time.Duration) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| interval | `time.Duration` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### agreeManual

#### 详细描述


#### 定义

`agreeManual(cb ...func(context.Context, *Config) (aitool.InvokeParams, error)) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cb | `...func(context.Context, *Config) (aitool.InvokeParams, error)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### agreePolicy

#### 详细描述


#### 定义

`agreePolicy(policy aicommon.AgreePolicyType) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| policy | `aicommon.AgreePolicyType` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


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

`agreeYOLO(i ...bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `...bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### aiAgree

#### 详细描述


#### 定义

`aiAgree() error`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### aiAutoRetry

#### 详细描述


#### 定义

`aiAutoRetry(t int) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| t | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### aiCallback

#### 详细描述


#### 定义

`aiCallback(cb aicommon.AICallbackType) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cb | `aicommon.AICallbackType` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### aiForgeSearchTool

#### 详细描述


#### 定义

`aiForgeSearchTool() error`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### aiToolsSearchTool

#### 详细描述


#### 定义

`aiToolsSearchTool() error`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### aiTransactionRetry

#### 详细描述


#### 定义

`aiTransactionRetry(t int) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| t | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### allowRequireForUserInteract

#### 详细描述


#### 定义

`allowRequireForUserInteract(opts ...bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### appendPersistentMemory

#### 详细描述


#### 定义

`appendPersistentMemory(i ...string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


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

`coordinatorAICallback(cb aicommon.AICallbackType) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cb | `aicommon.AICallbackType` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### debug

#### 详细描述


#### 定义

`debug(i ...bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `...bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### debugPrompt

#### 详细描述


#### 定义

`debugPrompt(i ...bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `...bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### disableOutputType

#### 详细描述


#### 定义

`disableOutputType(typeString ...string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| typeString | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### disableToolUse

#### 详细描述


#### 定义

`disableToolUse(i ...bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `...bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### disallowRequireForUserPrompt

#### 详细描述


#### 定义

`disallowRequireForUserPrompt() error`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### eventHandler

#### 详细描述


#### 定义

`eventHandler(h func(e *schema.AiOutputEvent)) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `func(e *schema.AiOutputEvent)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### eventInputChan

#### 详细描述


#### 定义

`eventInputChan(ch chan *InputEvent) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ch | `chan *InputEvent` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### extendAIDOptions

#### 详细描述


#### 定义

`extendAIDOptions(opts ...aid.Option) AIAgentOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...aid.Option` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIAgentOption` |   |


### extendedActionCallback

#### 详细描述


#### 定义

`extendedActionCallback(name string, cb func(config *Config, action *aicommon.Action)) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| cb | `func(config *Config, action *aicommon.Action)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


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

`forgePlanMocker(plan func(config *aid.Config) *aid.PlanResponse) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| plan | `func(config *aid.Config) *aid.PlanResponse` |   |

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


### jarOperator

#### 详细描述


#### 定义

`jarOperator() error`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### liteForgeOutputMemoryOP

#### 详细描述


#### 定义

`liteForgeOutputMemoryOP() error`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


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


#### 定义

`manualAssistantCallback(cb func(context.Context, *Config) (aitool.InvokeParams, error)) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cb | `func(context.Context, *Config) (aitool.InvokeParams, error)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### memory

#### 详细描述


#### 定义

`memory(m *PromptContextProvider) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| m | `*PromptContextProvider` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### offsetSeq

#### 详细描述


#### 定义

`offsetSeq(seq int64) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| seq | `int64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


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

`plan(i func(*Config) *PlanResponse) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `func(*Config) *PlanResponse` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### planAICallback

#### 详细描述


#### 定义

`planAICallback(cb aicommon.AICallbackType) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cb | `aicommon.AICallbackType` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### resultHandler

#### 详细描述


#### 定义

`resultHandler(h func(*Config)) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `func(*Config)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


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

`taskAICallback(cb aicommon.AICallbackType) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cb | `aicommon.AICallbackType` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### timeLineLimit

#### 详细描述


#### 定义

`timeLineLimit(config *Config) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| config | `*Config` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### timelineContentLimit

#### 详细描述


#### 定义

`timelineContentLimit(i int) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### tool

#### 详细描述


#### 定义

`tool(tool *aitool.Tool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tool | `*aitool.Tool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


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


### toolManager

#### 详细描述


#### 定义

`toolManager(manager *buildinaitools.AiToolManager) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| manager | `*buildinaitools.AiToolManager` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### tools

#### 详细描述


#### 定义

`tools(tool ...*aitool.Tool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tool | `...*aitool.Tool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


