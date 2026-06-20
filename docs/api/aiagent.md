# aiagent

|函数名|函数描述/介绍|
|:------|:--------|
| [aiagent.AllYakScriptAiTools](#allyakscriptaitools) |GetAllYakScriptAiTools 获取数据库中保存的全部 Yak 脚本 AI 工具（导出名为 aiagent.AllYakScriptAiTools） 参数: - 无 返回值: - AI 工具列表|
| [aiagent.CreateForge](#createforge) |NewForgeBlueprint 创建一个 Forge 蓝图（导出名为 aiagent.CreateForge） Forge 蓝图描述了一个可复用的 AI 工作流，可基于它创建执行器 参数: - name: Forge 名称 - opts: 可选项，如 aiagent.initPrompt、aia...|
| [aiagent.CreateLiteForge](#createliteforge) |NewLiteForge 创建一个 LiteForge 实例（导出名为 aiagent.CreateLiteForge） LiteForge 是轻量的一次性 AI 任务执行单元 参数: - name: LiteForge 名称 - opts: 可选项，如 aiagent.liteForgePromp...|
| [aiagent.ExecuteForge](#executeforge) |ExecuteForge 执行一个已注册的 Forge 并返回结果（导出名为 aiagent.ExecuteForge） 这是 AI Agent 最常用的入口，内部会创建协调器并运行整个 AI 工作流 参数: - forgeName: Forge 名称 - i: 执行参数（map 或键值对） - i...|
| [aiagent.ExtractAction](#extractaction) |ExtractAction 从字符串中提取指定的 Action 对象，支持别名，这里隐含一个强校验行为，即会等待处理完毕之后检查是否有可用的Action（导出名为 aiagent.ExtractAction） 参数: - i: 包含 action 的原始文本 - actionName: 期望的 ac...|
| [aiagent.ExtractPlan](#extractplan) |ExtractPlan 从 AI 原始响应中解析出任务计划（导出名为 aiagent.ExtractPlan） 参数: - c: 协调器对象 - rawResponse: AI 返回的原始文本 返回值: - 计划响应对象 - 错误信息|
| [aiagent.GetDefaultContextProvider](#getdefaultcontextprovider) |GetDefaultContextProvider 返回默认的 Prompt 上下文提供器（导出名为 aiagent.GetDefaultContextProvider） 上下文提供器持有计划历史、持久化数据、交互历史以及工具列表 参数: - 无 返回值: - 默认上下文提供器对象|
| [aiagent.NewExecutor](#newexecutor) |NewForgeExecutor 基于已注册的 Forge 名称创建执行器（导出名为 aiagent.NewExecutor） 参数: - name: Forge 名称 - i: 执行参数（map 或键值对） - opts: 可选项，如 aiagent.aiCallback、aiagent.cont...|
| [aiagent.NewExecutorFromJson](#newexecutorfromjson) |NewExecutorFromJson 通过 JSON 描述的 Forge 蓝图创建执行器（导出名为 aiagent.NewExecutorFromJson） 参数: - json: Forge 蓝图的 JSON 描述 - i: 执行参数（map 或键值对） - opts: 可选项，如 aiagen...|
| [aiagent.ParseYakScriptToAiTools](#parseyakscripttoaitools) |LoadYakScriptToAiTools 将一段 Yak 插件源码解析为 AI 工具描述（导出名为 aiagent.ParseYakScriptToAiTools） 会从源码中提取元数据（名称、描述、关键词等）以及 CLI 参数并转换为工具输入 schema 参数: - name: 工具名称 -...|
| [aiagent.UpdateYakScriptMetaData](#updateyakscriptmetadata) |UpdateYakScriptMetaData 解析并（按需借助 AI）补全 Yak 插件的元数据（导出名为 aiagent.UpdateYakScriptMetaData） 参数: - name: 插件名称 - content: 插件源码 - forceUpdate: 是否强制重新生成元数据 返回...|
| [aiagent.agreeAuto](#agreeauto) |WithAgreeAuto 设置自动审批通过所有操作（导出名为 aiagent.agreeAuto） 参数: - 无 返回值: - 配置选项|
| [aiagent.agreeManual](#agreemanual) |WithAgreeManual 设置由人工手动审批操作（导出名为 aiagent.agreeManual） 参数: - 无 返回值: - 配置选项|
| [aiagent.agreePolicy](#agreepolicy) |WithAgreePolicy 设置操作审批策略（导出名为 aiagent.agreePolicy） 参数: - p: 审批策略，如自动、AI、手动等 返回值: - 配置选项|
| [aiagent.agreePolicyAI](#agreepolicyai) |WithAIAgree 设置由 AI 自动审批操作（导出名为 aiagent.agreePolicyAI） 参数: - 无 返回值: - 配置选项|
| [aiagent.agreeYOLO](#agreeyolo) |WithAgreeYOLO 设置 YOLO 模式，自动通过所有审批（导出名为 aiagent.agreeYOLO） 参数: - b: 可选，是否开启 YOLO（默认 true） 返回值: - 配置选项|
| [aiagent.aiAutoRetry](#aiautoretry) |WithAIAutoRetry 设置 AI 调用失败时的自动重试次数（导出名为 aiagent.aiAutoRetry） WithAIAutoRetry sets AiAutoRetry count. 参数: - n: 重试次数（&gt;= 0） 返回值: - 配置选项|
| [aiagent.aiCallback](#aicallback) |WithAICallback 设置统一的 AI 回调（导出名为 aiagent.aiCallback） WARNING 粗粒度的ai callback 设置，只可在测试或者功能固定单一的ai模块（如知识库蒸馏）使用，其他位置应该用 WithAutoTieredAICallback 参数: - cb:...|
| [aiagent.aiTransactionRetry](#aitransactionretry) |WithAITransactionRetry 设置 AI 事务（单次交互）的自动重试次数（导出名为 aiagent.aiTransactionRetry） WithAITransactionRetry alias to existing WithAITransactionAutoRetry for ...|
| [aiagent.allowRequireForUserInteract](#allowrequireforuserinteract) |WithAllowRequireForUserInteract 设置是否允许向用户发起交互请求（导出名为 aiagent.allowRequireForUserInteract） 参数: - v: 是否允许用户交互 返回值: - 配置选项|
| [aiagent.appendPersistentMemory](#appendpersistentmemory) |WithAppendPersistentContext 追加持久化记忆的键（导出名为 aiagent.appendPersistentMemory） WithAppendPersistentContext appends keys to PersistentMemory. 参数: - keys: 一...|
| [aiagent.context](#context) |WithContext 设置 AI Agent 的上下文，用于控制取消（导出名为 aiagent.context） 参数: - ctx: 上下文对象 返回值: - AI Agent 可选项|
| [aiagent.coordinatorAICallback](#coordinatoraicallback) |WithQualityPriorityAICallback 设置质量优先档的 AI 回调（导出名为 aiagent.planAICallback / coordinatorAICallback） 参数: - cb: AI 回调函数 返回值: - 配置选项|
| [aiagent.debug](#debug) |WithDebug 同时开启 prompt 与 event 调试输出（导出名为 aiagent.debug） WithDebug toggles both prompt and event debug flags. 参数: - v: 是否开启调试 返回值: - 配置选项|
| [aiagent.debugPrompt](#debugprompt) |WithDebugPrompt 开启 prompt 调试输出（导出名为 aiagent.debugPrompt） 参数: - v: 可选，是否开启（默认 true） 返回值: - 配置选项|
| [aiagent.disableOutputType](#disableoutputtype) |WithDisableOutputEvent 禁用指定类型的输出事件（导出名为 aiagent.disableOutputType） WithDisableOutputEvent is a name-compatible wrapper for disabling output event type...|
| [aiagent.disableToolUse](#disabletooluse) |WithDisableToolUse 禁用工具调用（导出名为 aiagent.disableToolUse） 参数: - disable: 是否禁用工具调用 返回值: - 配置选项|
| [aiagent.disallowRequireForUserPrompt](#disallowrequireforuserprompt) |WithDisallowRequireForUserPrompt 禁止向用户发起交互请求（导出名为 aiagent.disallowRequireForUserPrompt） WithDisallowRequireForUserPrompt disables require-for-user-int...|
| [aiagent.extendAIDOptions](#extendaidoptions) |WithExtendAICommonOptions 追加底层 aicommon 配置选项（导出名为 aiagent.extendAIDOptions） 参数: - opts: 一个或多个 aicommon 配置选项 返回值: - AI Agent 可选项|
| [aiagent.extendedActionCallback](#extendedactioncallback) |WithExtendedActionCallback 注册扩展 action 回调（导出名为 aiagent.extendedActionCallback） WithExtendedActionCallback sets the ExtendedActionCallback map. 参数: - n...|
| [aiagent.forgeName](#forgename) |WithForgeName 设置 AI Agent 使用的 Forge 名称（导出名为 aiagent.forgeName） 参数: - forgeName: Forge 名称 返回值: - AI Agent 可选项|
| [aiagent.forgePlanMocker](#forgeplanmocker) |WithPlanMocker 设置AI助手的计划生成器（导出名为 aiagent.forgePlanMocker） 参数: - plan: 计划生成函数，参数为协调器，返回计划响应 返回值: - Forge 可选项|
| [aiagent.forgeTools](#forgetools) |WithTools 为AI助手添加可用的工具（导出名为 aiagent.forgeTools） 这些工具可以扩展AI的能力，使其能够执行特定的任务 参数: - tools: 一个或多个 AI 工具对象 返回值: - Forge 可选项|
| [aiagent.initPrompt](#initprompt) |WithInitializePrompt 设置AI助手的初始化提示词（导出名为 aiagent.initPrompt） 这个提示词会在AI助手启动时被使用，用于定义AI的初始状态和行为 参数: - prompt: 初始化提示词 返回值: - Forge 可选项|
| [aiagent.initializePrompt](#initializeprompt) |WithInitializePrompt 设置AI助手的初始化提示词（导出名为 aiagent.initPrompt） 这个提示词会在AI助手启动时被使用，用于定义AI的初始状态和行为 参数: - prompt: 初始化提示词 返回值: - Forge 可选项|
| [aiagent.liteForgeOutputSchema](#liteforgeoutputschema) |WithLiteForge_OutputSchema 设置 LiteForge 的输出结构 schema（导出名为 aiagent.liteForgeOutputSchema） 参数: - params: 一个或多个 aitool 参数选项，描述期望的输出字段 返回值: - LiteForge 可选...|
| [aiagent.liteForgeOutputSchemaRaw](#liteforgeoutputschemaraw) |WithLiteForge_OutputSchemaRaw 通过原始 JSON Schema 字符串设置输出结构（导出名为 aiagent.liteForgeOutputSchemaRaw） 参数: - actionName: action 名称 - outputSchema: 原始 JSON Sc...|
| [aiagent.liteForgePrompt](#liteforgeprompt) |WithLiteForge_Prompt 设置 LiteForge 的&#34;上下文/动态&#34; prompt 文本。 渲染后该字段被包在 &lt;\|PROMPT_SECTION_dynamic_&lt;nonce&gt;\|&gt;...&lt;\|PROMPT_SECTION_dynamic_END_&lt;nonce&gt;\|&gt; 内的 &lt;conte...|
| [aiagent.liteForgedRequireParams](#liteforgedrequireparams) |WithLiteForge_RequireParams 设置 LiteForge 的输入参数 schema（导出名为 aiagent.liteForgedRequireParams） 参数: - params: 一个或多个 aitool 参数选项 返回值: - LiteForge 可选项|
| [aiagent.manualAssistantCallback](#manualassistantcallback) |WithManualAssistantCallback 设置人工审批回调（导出名为 aiagent.manualAssistantCallback） WithManualAssistantCallback is an alias to the agree/manual callback setter...|
| [aiagent.offsetSeq](#offsetseq) |WithSequence 设置起始序列号并安装自增 id 生成器（导出名为 aiagent.offsetSeq） WithSequence sets the starting sequence/id and installs a simple id generator that increments...|
| [aiagent.omniSearchTool](#omnisearchtool) |WithOmniSearchTool 启用全网搜索工具（导出名为 aiagent.omniSearchTool） 参数: - 无 返回值: - 配置选项|
| [aiagent.originYaklangCliCode](#originyaklangclicode) |WithOriginYaklangCliCode 设置原始的Yaklang CLI代码（导出名为 aiagent.originYaklangCliCode） 这个结构需要 Yak 引擎根据 CLI 代码构建出正确的用户需要输入的工具 这个结构是表单构建的核心依据，可以使用 Yak 原声插件基础设施直...|
| [aiagent.persistentPrompt](#persistentprompt) |WithPersistentPrompt 设置AI助手的持久提示词（导出名为 aiagent.persistentPrompt） 这个提示词会在整个会话过程中持续存在，确保AI行为的一致性 参数: - persistentPrompt: 持久提示词 返回值: - Forge 可选项|
| [aiagent.persistentPromptForge](#persistentpromptforge) |WithPersistentPrompt 设置AI助手的持久提示词（导出名为 aiagent.persistentPrompt） 这个提示词会在整个会话过程中持续存在，确保AI行为的一致性 参数: - persistentPrompt: 持久提示词 返回值: - Forge 可选项|
| [aiagent.plan](#plan) |WithPlanMocker 设置协调器的计划生成器，用于自定义/模拟任务计划（导出名为 aiagent.plan） 参数: - i: 计划生成函数，参数为协调器，返回计划响应 返回值: - 配置选项|
| [aiagent.planAICallback](#planaicallback) |WithQualityPriorityAICallback 设置质量优先档的 AI 回调（导出名为 aiagent.planAICallback / coordinatorAICallback） 参数: - cb: AI 回调函数 返回值: - 配置选项|
| [aiagent.resultHandler](#resulthandler) |WithResultHandler 设置协调器执行结束后的结果处理回调（导出名为 aiagent.resultHandler） cycle import issue 参数: - h: 结果处理函数，参数为协调器对象 返回值: - 配置选项|
| [aiagent.resultHandlerForge](#resulthandlerforge) |WithResultHandler 设置AI助手的结果处理函数（导出名为 aiagent.resultHandlerForge） 这个函数会在AI助手生成结果后被调用，用于处理AI的输出 参数: - handler: 结果处理函数，参数为 (result, err) 返回值: - Forge 可选项|
| [aiagent.resultPrompt](#resultprompt) |WithResultPrompt 设置AI助手的生成结果提示词（导出名为 aiagent.resultPrompt） 这个提示词会在AI助手生成结果时被使用，用于定义AI的输出格式和内容 参数: - prompt: 结果提示词 返回值: - Forge 可选项|
| [aiagent.resultPromptForge](#resultpromptforge) |WithResultPrompt 设置AI助手的生成结果提示词（导出名为 aiagent.resultPrompt） 这个提示词会在AI助手生成结果时被使用，用于定义AI的输出格式和内容 参数: - prompt: 结果提示词 返回值: - Forge 可选项|
| [aiagent.systemFileOperator](#systemfileoperator) |WithSystemFileOperator 为 AI 启用系统文件操作工具集（导出名为 aiagent.systemFileOperator） 参数: - 无 返回值: - 配置选项|
| [aiagent.taskAICallback](#taskaicallback) |WithSpeedPriorityAICallback 设置速度优先档的 AI 回调（导出名为 aiagent.taskAICallback） 参数: - cb: AI 回调函数 返回值: - 配置选项|
| [aiagent.timelineContentLimit](#timelinecontentlimit) |WithTimelineContentLimit 设置 timeline 内容大小上限（导出名为 aiagent.timelineContentLimit） WithTimelineContentLimit sets timeline content size limit (keeps naming...|
| [aiagent.tool](#tool) |WithTool 添加单个 AI 工具（导出名为 aiagent.tool） WithTool is a convenience wrapper to add a single tool (delegates to WithTools). 参数: - tool: AI 工具对象 返回值: - 配置选...|
| [aiagent.toolKeywords](#toolkeywords) |WithToolKeywords 设置AI助手的工具关键词（导出名为 aiagent.toolKeywords） 这些关键词可以扩展AI的能力，使其能够执行特定的任务 参数: - keywords: 工具关键词列表 返回值: - Forge 可选项|
| [aiagent.tools](#tools) |WithTools 为 AI 批量添加可用工具（导出名为 aiagent.tools） 参数: - tool: 一个或多个 AI 工具对象 返回值: - 配置选项|


## 函数定义
### AllYakScriptAiTools

#### 详细描述
GetAllYakScriptAiTools 获取数据库中保存的全部 Yak 脚本 AI 工具（导出名为 aiagent.AllYakScriptAiTools）

参数:

  - 无



返回值:

  - AI 工具列表




Example:

``````````````yak
// 依赖本地 profile 数据库（示意性示例）
tools = aiagent.AllYakScriptAiTools()
dump(tools)
``````````````


#### 定义

`AllYakScriptAiTools() []*aitool.Tool`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*aitool.Tool` | AI 工具列表 |


### CreateForge

#### 详细描述
NewForgeBlueprint 创建一个 Forge 蓝图（导出名为 aiagent.CreateForge）

Forge 蓝图描述了一个可复用的 AI 工作流，可基于它创建执行器

参数:

  - name: Forge 名称

  - opts: 可选项，如 aiagent.initPrompt、aiagent.persistentPrompt、aiagent.resultPrompt 等



返回值:

  - Forge 蓝图对象




Example:

``````````````yak
forge = aiagent.CreateForge("demo",

	aiagent.initPrompt("you are a security expert"),

)
dump(forge)
``````````````


#### 定义

`CreateForge(name string, opts ...any) *aiforge.ForgeBlueprint`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | Forge 名称 |
| opts | `...any` | 可选项，如 aiagent.initPrompt、aiagent.persistentPrompt、aiagent.resultPrompt 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*aiforge.ForgeBlueprint` | Forge 蓝图对象 |


### CreateLiteForge

#### 详细描述
NewLiteForge 创建一个 LiteForge 实例（导出名为 aiagent.CreateLiteForge）

LiteForge 是轻量的一次性 AI 任务执行单元

参数:

  - name: LiteForge 名称

  - opts: 可选项，如 aiagent.liteForgePrompt、aiagent.liteForgeOutputSchema 等



返回值:

  - LiteForge 实例

  - 错误信息




Example:

``````````````yak
// 需要配置可用的 AI 服务（示意性示例）
lf = aiagent.CreateLiteForge("demo", aiagent.liteForgePrompt("extract the title"))~
dump(lf)
``````````````


#### 定义

`CreateLiteForge(name string, opts ...any) (*aiforge.LiteForge, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | LiteForge 名称 |
| opts | `...any` | 可选项，如 aiagent.liteForgePrompt、aiagent.liteForgeOutputSchema 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*aiforge.LiteForge` | LiteForge 实例 |
| r2 | `error` | 错误信息 |


### ExecuteForge

#### 详细描述
ExecuteForge 执行一个已注册的 Forge 并返回结果（导出名为 aiagent.ExecuteForge）

这是 AI Agent 最常用的入口，内部会创建协调器并运行整个 AI 工作流

参数:

  - forgeName: Forge 名称

  - i: 执行参数（map 或键值对）

  - iopts: 可选项，如 aiagent.aiCallback、aiagent.context、aiagent.agreeYOLO 等



返回值:

  - Forge 执行结果

  - 错误信息




Example:

``````````````yak
// 需要配置可用的 AI 服务（示意性示例）
result = aiagent.ExecuteForge("my-forge", {"query": "scan example.com"}, aiagent.agreeYOLO())~
dump(result)
``````````````


#### 定义

`ExecuteForge(forgeName string, i any, iopts ...any) (any, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| forgeName | `string` | Forge 名称 |
| i | `any` | 执行参数（map 或键值对） |
| iopts | `...any` | 可选项，如 aiagent.aiCallback、aiagent.context、aiagent.agreeYOLO 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` | Forge 执行结果 |
| r2 | `error` | 错误信息 |


### ExtractAction

#### 详细描述
ExtractAction 从字符串中提取指定的 Action 对象，支持别名，这里隐含一个强校验行为，即会等待处理完毕之后检查是否有可用的Action（导出名为 aiagent.ExtractAction）

参数:

  - i: 包含 action 的原始文本

  - actionName: 期望的 action 名称

  - alias: 可选的 action 别名



返回值:

  - 解析出的 Action 对象

  - 错误信息




Example:

``````````````yak
raw = `{"@action": "object", "value": "hello"}`
action = aiagent.ExtractAction(raw, "object")~
dump(action)
``````````````


#### 定义

`ExtractAction(i string, actionName string, alias ...string) (*Action, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` | 包含 action 的原始文本 |
| actionName | `string` | 期望的 action 名称 |
| alias | `...string` | 可选的 action 别名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*Action` | 解析出的 Action 对象 |
| r2 | `error` | 错误信息 |


### ExtractPlan

#### 详细描述
ExtractPlan 从 AI 原始响应中解析出任务计划（导出名为 aiagent.ExtractPlan）

参数:

  - c: 协调器对象

  - rawResponse: AI 返回的原始文本



返回值:

  - 计划响应对象

  - 错误信息




Example:

``````````````yak
// 需要可用的协调器与响应（示意性示例）
plan = aiagent.ExtractPlan(coordinator, rawResponse)~
dump(plan)
``````````````


#### 定义

`ExtractPlan(c *Coordinator, rawResponse string) (*PlanResponse, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| c | `*Coordinator` | 协调器对象 |
| rawResponse | `string` | AI 返回的原始文本 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*PlanResponse` | 计划响应对象 |
| r2 | `error` | 错误信息 |


### GetDefaultContextProvider

#### 详细描述
GetDefaultContextProvider 返回默认的 Prompt 上下文提供器（导出名为 aiagent.GetDefaultContextProvider）

上下文提供器持有计划历史、持久化数据、交互历史以及工具列表

参数:

  - 无



返回值:

  - 默认上下文提供器对象




Example:

``````````````yak
provider = aiagent.GetDefaultContextProvider()
dump(provider)
``````````````


#### 定义

`GetDefaultContextProvider() *PromptContextProvider`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*PromptContextProvider` | 默认上下文提供器对象 |


### NewExecutor

#### 详细描述
NewForgeExecutor 基于已注册的 Forge 名称创建执行器（导出名为 aiagent.NewExecutor）

参数:

  - name: Forge 名称

  - i: 执行参数（map 或键值对）

  - opts: 可选项，如 aiagent.aiCallback、aiagent.context 等



返回值:

  - 协调器对象（可调用 Run 执行）

  - 错误信息




Example:

``````````````yak
// 需要配置可用的 AI 服务（示意性示例）
coordinator = aiagent.NewExecutor("my-forge", {"query": "hello"})~
dump(coordinator)
``````````````


#### 定义

`NewExecutor(name string, i any, opts ...any) (*aid.Coordinator, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | Forge 名称 |
| i | `any` | 执行参数（map 或键值对） |
| opts | `...any` | 可选项，如 aiagent.aiCallback、aiagent.context 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*aid.Coordinator` | 协调器对象（可调用 Run 执行） |
| r2 | `error` | 错误信息 |


### NewExecutorFromJson

#### 详细描述
NewExecutorFromJson 通过 JSON 描述的 Forge 蓝图创建执行器（导出名为 aiagent.NewExecutorFromJson）

参数:

  - json: Forge 蓝图的 JSON 描述

  - i: 执行参数（map 或键值对）

  - opts: 可选项，如 aiagent.aiCallback、aiagent.context 等



返回值:

  - 协调器对象（可调用 Run 执行）

  - 错误信息




Example:

``````````````yak
// 需要配置可用的 AI 服务（示意性示例）
coordinator = aiagent.NewExecutorFromJson(forgeJson, {"query": "hello"})~
dump(coordinator)
``````````````


#### 定义

`NewExecutorFromJson(json string, i any, opts ...any) (*aid.Coordinator, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| json | `string` | Forge 蓝图的 JSON 描述 |
| i | `any` | 执行参数（map 或键值对） |
| opts | `...any` | 可选项，如 aiagent.aiCallback、aiagent.context 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*aid.Coordinator` | 协调器对象（可调用 Run 执行） |
| r2 | `error` | 错误信息 |


### ParseYakScriptToAiTools

#### 详细描述
LoadYakScriptToAiTools 将一段 Yak 插件源码解析为 AI 工具描述（导出名为 aiagent.ParseYakScriptToAiTools）

会从源码中提取元数据（名称、描述、关键词等）以及 CLI 参数并转换为工具输入 schema

参数:

  - name: 工具名称

  - content: Yak 插件源码



返回值:

  - AI 工具描述对象（解析失败时返回 nil）




Example:

``````````````yak
code = `cli.String("target"); cli.check()`
tool = aiagent.ParseYakScriptToAiTools("demo", code)
dump(tool)
``````````````


#### 定义

`ParseYakScriptToAiTools(name string, content string) *schema.AIYakTool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 工具名称 |
| content | `string` | Yak 插件源码 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*schema.AIYakTool` | AI 工具描述对象（解析失败时返回 nil） |


### UpdateYakScriptMetaData

#### 详细描述
UpdateYakScriptMetaData 解析并（按需借助 AI）补全 Yak 插件的元数据（导出名为 aiagent.UpdateYakScriptMetaData）

参数:

  - name: 插件名称

  - content: 插件源码

  - forceUpdate: 是否强制重新生成元数据



返回值:

  - 更新后的插件源码

  - 解析出的元数据对象

  - 错误信息




Example:

``````````````yak
// 需要配置可用的 AI 服务（示意性示例）
newContent, meta, err = aiagent.UpdateYakScriptMetaData("demo", code, false)
dump(meta)
``````````````


#### 定义

`UpdateYakScriptMetaData(name string, content string, forceUpdate bool) (string, *metadata.YakScriptMetadata, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 插件名称 |
| content | `string` | 插件源码 |
| forceUpdate | `bool` | 是否强制重新生成元数据 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 更新后的插件源码 |
| r2 | `*metadata.YakScriptMetadata` | 解析出的元数据对象 |
| r3 | `error` | 错误信息 |


### agreeAuto

#### 详细描述
WithAgreeAuto 设置自动审批通过所有操作（导出名为 aiagent.agreeAuto）

参数:

  - 无



返回值:

  - 配置选项




Example:

``````````````yak
opt = aiagent.agreeAuto()
println(opt)
``````````````


#### 定义

`agreeAuto() ConfigOption`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 配置选项 |


### agreeManual

#### 详细描述
WithAgreeManual 设置由人工手动审批操作（导出名为 aiagent.agreeManual）

参数:

  - 无



返回值:

  - 配置选项




Example:

``````````````yak
opt = aiagent.agreeManual()
println(opt)
``````````````


#### 定义

`agreeManual() ConfigOption`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 配置选项 |


### agreePolicy

#### 详细描述
WithAgreePolicy 设置操作审批策略（导出名为 aiagent.agreePolicy）

参数:

  - p: 审批策略，如自动、AI、手动等



返回值:

  - 配置选项




Example:

``````````````yak
// p 由 aicommon 提供（示意性示例）
opt = aiagent.agreePolicy(p)
println(opt)
``````````````


#### 定义

`agreePolicy(p AgreePolicyType) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| p | `AgreePolicyType` | 审批策略，如自动、AI、手动等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 配置选项 |


### agreePolicyAI

#### 详细描述
WithAIAgree 设置由 AI 自动审批操作（导出名为 aiagent.agreePolicyAI）

参数:

  - 无



返回值:

  - 配置选项




Example:

``````````````yak
opt = aiagent.agreePolicyAI()
println(opt)
``````````````


#### 定义

`agreePolicyAI() ConfigOption`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 配置选项 |


### agreeYOLO

#### 详细描述
WithAgreeYOLO 设置 YOLO 模式，自动通过所有审批（导出名为 aiagent.agreeYOLO）

参数:

  - b: 可选，是否开启 YOLO（默认 true）



返回值:

  - 配置选项




Example:

``````````````yak
opt = aiagent.agreeYOLO()
println(opt)
``````````````


#### 定义

`agreeYOLO(b ...bool) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `...bool` | 可选，是否开启 YOLO（默认 true） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 配置选项 |


### aiAutoRetry

#### 详细描述
WithAIAutoRetry 设置 AI 调用失败时的自动重试次数（导出名为 aiagent.aiAutoRetry）

WithAIAutoRetry sets AiAutoRetry count.

参数:

  - n: 重试次数（&gt;= 0）



返回值:

  - 配置选项




Example:

``````````````yak
opt = aiagent.aiAutoRetry(3)
println(opt)
``````````````


#### 定义

`aiAutoRetry(n int64) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `int64` | 重试次数（&gt;= 0） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 配置选项 |


### aiCallback

#### 详细描述
WithAICallback 设置统一的 AI 回调（导出名为 aiagent.aiCallback）

WARNING 粗粒度的ai callback 设置，只可在测试或者功能固定单一的ai模块（如知识库蒸馏）使用，其他位置应该用 WithAutoTieredAICallback

参数:

  - cb: AI 回调函数



返回值:

  - 配置选项




Example:

``````````````yak
// cb 由 aicommon 构造（示意性示例）
opt = aiagent.aiCallback(cb)
println(opt)
``````````````


#### 定义

`aiCallback(cb AICallbackType) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cb | `AICallbackType` | AI 回调函数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 配置选项 |


### aiTransactionRetry

#### 详细描述
WithAITransactionRetry 设置 AI 事务（单次交互）的自动重试次数（导出名为 aiagent.aiTransactionRetry）

WithAITransactionRetry alias to existing WithAITransactionAutoRetry for naming compatibility.

参数:

  - n: 重试次数



返回值:

  - 配置选项




Example:

``````````````yak
opt = aiagent.aiTransactionRetry(3)
println(opt)
``````````````


#### 定义

`aiTransactionRetry(n int64) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `int64` | 重试次数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 配置选项 |


### allowRequireForUserInteract

#### 详细描述
WithAllowRequireForUserInteract 设置是否允许向用户发起交互请求（导出名为 aiagent.allowRequireForUserInteract）

参数:

  - v: 是否允许用户交互



返回值:

  - 配置选项




Example:

``````````````yak
opt = aiagent.allowRequireForUserInteract(true)
println(opt)
``````````````


#### 定义

`allowRequireForUserInteract(v bool) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v | `bool` | 是否允许用户交互 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 配置选项 |


### appendPersistentMemory

#### 详细描述
WithAppendPersistentContext 追加持久化记忆的键（导出名为 aiagent.appendPersistentMemory）

WithAppendPersistentContext appends keys to PersistentMemory.

参数:

  - keys: 一个或多个记忆键



返回值:

  - 配置选项




Example:

``````````````yak
opt = aiagent.appendPersistentMemory("target", "scope")
println(opt)
``````````````


#### 定义

`appendPersistentMemory(keys ...string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| keys | `...string` | 一个或多个记忆键 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 配置选项 |


### context

#### 详细描述
WithContext 设置 AI Agent 的上下文，用于控制取消（导出名为 aiagent.context）

参数:

  - ctx: 上下文对象



返回值:

  - AI Agent 可选项




Example:

``````````````yak
opt = aiagent.context(context.Background())
println(opt)
``````````````


#### 定义

`context(ctx context.Context) AIAgentOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` | 上下文对象 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIAgentOption` | AI Agent 可选项 |


### coordinatorAICallback

#### 详细描述
WithQualityPriorityAICallback 设置质量优先档的 AI 回调（导出名为 aiagent.planAICallback / coordinatorAICallback）

参数:

  - cb: AI 回调函数



返回值:

  - 配置选项




Example:

``````````````yak
// cb 由 aicommon 构造（示意性示例）
opt = aiagent.planAICallback(cb)
println(opt)
``````````````


#### 定义

`coordinatorAICallback(cb AICallbackType) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cb | `AICallbackType` | AI 回调函数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 配置选项 |


### debug

#### 详细描述
WithDebug 同时开启 prompt 与 event 调试输出（导出名为 aiagent.debug）

WithDebug toggles both prompt and event debug flags.

参数:

  - v: 是否开启调试



返回值:

  - 配置选项




Example:

``````````````yak
opt = aiagent.debug(true)
println(opt)
``````````````


#### 定义

`debug(v bool) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v | `bool` | 是否开启调试 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 配置选项 |


### debugPrompt

#### 详细描述
WithDebugPrompt 开启 prompt 调试输出（导出名为 aiagent.debugPrompt）

参数:

  - v: 可选，是否开启（默认 true）



返回值:

  - 配置选项




Example:

``````````````yak
opt = aiagent.debugPrompt(true)
println(opt)
``````````````


#### 定义

`debugPrompt(v ...bool) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v | `...bool` | 可选，是否开启（默认 true） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 配置选项 |


### disableOutputType

#### 详细描述
WithDisableOutputEvent 禁用指定类型的输出事件（导出名为 aiagent.disableOutputType）

WithDisableOutputEvent is a name-compatible wrapper for disabling output event types.

参数:

  - types: 一个或多个事件类型



返回值:

  - 配置选项




Example:

``````````````yak
opt = aiagent.disableOutputType("stream")
println(opt)
``````````````


#### 定义

`disableOutputType(types ...string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| types | `...string` | 一个或多个事件类型 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 配置选项 |


### disableToolUse

#### 详细描述
WithDisableToolUse 禁用工具调用（导出名为 aiagent.disableToolUse）

参数:

  - disable: 是否禁用工具调用



返回值:

  - 配置选项




Example:

``````````````yak
opt = aiagent.disableToolUse(true)
println(opt)
``````````````


#### 定义

`disableToolUse(disable bool) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| disable | `bool` | 是否禁用工具调用 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 配置选项 |


### disallowRequireForUserPrompt

#### 详细描述
WithDisallowRequireForUserPrompt 禁止向用户发起交互请求（导出名为 aiagent.disallowRequireForUserPrompt）

WithDisallowRequireForUserPrompt disables require-for-user-interact.

参数:

  - 无



返回值:

  - 配置选项




Example:

``````````````yak
opt = aiagent.disallowRequireForUserPrompt()
println(opt)
``````````````


#### 定义

`disallowRequireForUserPrompt() ConfigOption`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 配置选项 |


### extendAIDOptions

#### 详细描述
WithExtendAICommonOptions 追加底层 aicommon 配置选项（导出名为 aiagent.extendAIDOptions）

参数:

  - opts: 一个或多个 aicommon 配置选项



返回值:

  - AI Agent 可选项




Example:

``````````````yak
// opt 由 aicommon 提供（示意性示例）
opt = aiagent.extendAIDOptions(aiagent.debug(true))
println(opt)
``````````````


#### 定义

`extendAIDOptions(opts ...aicommon.ConfigOption) AIAgentOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...aicommon.ConfigOption` | 一个或多个 aicommon 配置选项 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIAgentOption` | AI Agent 可选项 |


### extendedActionCallback

#### 详细描述
WithExtendedActionCallback 注册扩展 action 回调（导出名为 aiagent.extendedActionCallback）

WithExtendedActionCallback sets the ExtendedActionCallback map.

参数:

  - name: action 名称

  - callback: 回调函数，参数为 (config, action)



返回值:

  - 配置选项




Example:

``````````````yak
opt = aiagent.extendedActionCallback("custom", func(config, action) { dump(action) })
println(opt)
``````````````


#### 定义

`extendedActionCallback(name string, callback func(config *Config, action *Action)) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | action 名称 |
| callback | `func(config *Config, action *Action)` | 回调函数，参数为 (config, action) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 配置选项 |


### forgeName

#### 详细描述
WithForgeName 设置 AI Agent 使用的 Forge 名称（导出名为 aiagent.forgeName）

参数:

  - forgeName: Forge 名称



返回值:

  - AI Agent 可选项




Example:

``````````````yak
opt = aiagent.forgeName("my-forge")
println(opt)
``````````````


#### 定义

`forgeName(forgeName string) AIAgentOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| forgeName | `string` | Forge 名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIAgentOption` | AI Agent 可选项 |


### forgePlanMocker

#### 详细描述
WithPlanMocker 设置AI助手的计划生成器（导出名为 aiagent.forgePlanMocker）

参数:

  - plan: 计划生成函数，参数为协调器，返回计划响应



返回值:

  - Forge 可选项




Example:

``````````````yak
opt = aiagent.forgePlanMocker(func(coordinator) { return nil })
println(opt)
``````````````


#### 定义

`forgePlanMocker(plan func(config *aid.Coordinator) *aid.PlanResponse) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| plan | `func(config *aid.Coordinator) *aid.PlanResponse` | 计划生成函数，参数为协调器，返回计划响应 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | Forge 可选项 |


### forgeTools

#### 详细描述
WithTools 为AI助手添加可用的工具（导出名为 aiagent.forgeTools）

这些工具可以扩展AI的能力，使其能够执行特定的任务

参数:

  - tools: 一个或多个 AI 工具对象



返回值:

  - Forge 可选项




Example:

``````````````yak
// tool 由 aitool 构造（示意性示例）
opt = aiagent.forgeTools(tool)
println(opt)
``````````````


#### 定义

`forgeTools(tools ...*aitool.Tool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tools | `...*aitool.Tool` | 一个或多个 AI 工具对象 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | Forge 可选项 |


### initPrompt

#### 详细描述
WithInitializePrompt 设置AI助手的初始化提示词（导出名为 aiagent.initPrompt）

这个提示词会在AI助手启动时被使用，用于定义AI的初始状态和行为

参数:

  - prompt: 初始化提示词



返回值:

  - Forge 可选项




Example:

``````````````yak
opt = aiagent.initPrompt("you are a security expert")
println(opt)
``````````````


#### 定义

`initPrompt(prompt string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| prompt | `string` | 初始化提示词 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | Forge 可选项 |


### initializePrompt

#### 详细描述
WithInitializePrompt 设置AI助手的初始化提示词（导出名为 aiagent.initPrompt）

这个提示词会在AI助手启动时被使用，用于定义AI的初始状态和行为

参数:

  - prompt: 初始化提示词



返回值:

  - Forge 可选项




Example:

``````````````yak
opt = aiagent.initPrompt("you are a security expert")
println(opt)
``````````````


#### 定义

`initializePrompt(prompt string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| prompt | `string` | 初始化提示词 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | Forge 可选项 |


### liteForgeOutputSchema

#### 详细描述
WithLiteForge_OutputSchema 设置 LiteForge 的输出结构 schema（导出名为 aiagent.liteForgeOutputSchema）

参数:

  - params: 一个或多个 aitool 参数选项，描述期望的输出字段



返回值:

  - LiteForge 可选项




Example:

``````````````yak
opt = aiagent.liteForgeOutputSchema(aitool.WithStringParam("title"))
println(opt)
``````````````


#### 定义

`liteForgeOutputSchema(params ...aitool.ToolOption) LiteForgeOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| params | `...aitool.ToolOption` | 一个或多个 aitool 参数选项，描述期望的输出字段 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `LiteForgeOption` | LiteForge 可选项 |


### liteForgeOutputSchemaRaw

#### 详细描述
WithLiteForge_OutputSchemaRaw 通过原始 JSON Schema 字符串设置输出结构（导出名为 aiagent.liteForgeOutputSchemaRaw）

参数:

  - actionName: action 名称

  - outputSchema: 原始 JSON Schema 字符串



返回值:

  - LiteForge 可选项




Example:

``````````````yak
opt = aiagent.liteForgeOutputSchemaRaw("call-tool", `{"type":"object"}`)
println(opt)
``````````````


#### 定义

`liteForgeOutputSchemaRaw(actionName string, outputSchema string) LiteForgeOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| actionName | `string` | action 名称 |
| outputSchema | `string` | 原始 JSON Schema 字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `LiteForgeOption` | LiteForge 可选项 |


### liteForgePrompt

#### 详细描述
WithLiteForge_Prompt 设置 LiteForge 的&#34;上下文/动态&#34; prompt 文本。



渲染后该字段被包在 &lt;|PROMPT_SECTION_dynamic_&lt;nonce&gt;|&gt;...&lt;|PROMPT_SECTION_dynamic_END_&lt;nonce&gt;|&gt;

内的 &lt;context_&lt;nonce&gt;&gt;...&lt;/context_&lt;nonce&gt;&gt; 子标签里, 即 dynamic 段。dynamic

段每次请求都包含 nonce 因此 byte-hash 必定不同, 没有跨调用 prefix cache 命中

价值, **不要把任何静态指令** (例如 INSTRUCTION / CRITICAL RULES / Selection

rules) 塞进这里。



调用约定 (P0-B4):

  - 真正动态的内容 (USER_QUERY / PARENT_TASK / CURRENT_TASK / 当次具体输入) -&gt;

    WithLiteForge_Prompt

  - 跨调用稳定的指令文本 (规则 / Schema / 角色定义) -&gt;

    WithLiteForge_StaticInstruction (进 semi-dynamic 段) 或写到调用方传给

    NewLiteForge 的 schema 里



关键词: WithLiteForge_Prompt, dynamic 段, 调用方约定

参数:

  - i: 动态 prompt 文本



返回值:

  - LiteForge 可选项




Example:

``````````````yak
opt = aiagent.liteForgePrompt("extract the title from the html")
println(opt)
``````````````


#### 定义

`liteForgePrompt(i string) LiteForgeOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` | 动态 prompt 文本 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `LiteForgeOption` | LiteForge 可选项 |


### liteForgedRequireParams

#### 详细描述
WithLiteForge_RequireParams 设置 LiteForge 的输入参数 schema（导出名为 aiagent.liteForgedRequireParams）

参数:

  - params: 一个或多个 aitool 参数选项



返回值:

  - LiteForge 可选项




Example:

``````````````yak
opt = aiagent.liteForgedRequireParams(aitool.WithStringParam("target"))
println(opt)
``````````````


#### 定义

`liteForgedRequireParams(params ...aitool.ToolOption) LiteForgeOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| params | `...aitool.ToolOption` | 一个或多个 aitool 参数选项 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `LiteForgeOption` | LiteForge 可选项 |


### manualAssistantCallback

#### 详细描述
WithManualAssistantCallback 设置人工审批回调（导出名为 aiagent.manualAssistantCallback）

WithManualAssistantCallback is an alias to the agree/manual callback setter.

参数:

  - cb: 回调函数，参数为 (ctx, config)，返回审批参数与错误



返回值:

  - 配置选项




Example:

``````````````yak
opt = aiagent.manualAssistantCallback(func(ctx, config) { return {"suggestion": "continue"}, nil })
println(opt)
``````````````


#### 定义

`manualAssistantCallback(cb func(context.Context, *Config) (aitool.InvokeParams, error)) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cb | `func(context.Context, *Config) (aitool.InvokeParams, error)` | 回调函数，参数为 (ctx, config)，返回审批参数与错误 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 配置选项 |


### offsetSeq

#### 详细描述
WithSequence 设置起始序列号并安装自增 id 生成器（导出名为 aiagent.offsetSeq）

WithSequence sets the starting sequence/id and installs a simple id generator that increments it.

参数:

  - seq: 起始序列号



返回值:

  - 配置选项




Example:

``````````````yak
opt = aiagent.offsetSeq(1000)
println(opt)
``````````````


#### 定义

`offsetSeq(seq int64) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| seq | `int64` | 起始序列号 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 配置选项 |


### omniSearchTool

#### 详细描述
WithOmniSearchTool 启用全网搜索工具（导出名为 aiagent.omniSearchTool）

参数:

  - 无



返回值:

  - 配置选项




Example:

``````````````yak
opt = aiagent.omniSearchTool()
println(opt)
``````````````


#### 定义

`omniSearchTool() ConfigOption`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 配置选项 |


### originYaklangCliCode

#### 详细描述
WithOriginYaklangCliCode 设置原始的Yaklang CLI代码（导出名为 aiagent.originYaklangCliCode）

这个结构需要 Yak 引擎根据 CLI 代码构建出正确的用户需要输入的工具

这个结构是表单构建的核心依据，可以使用 Yak 原声插件基础设施直接构建表单

参数:

  - originYaklangCliCode: 原始 Yaklang CLI 代码



返回值:

  - Forge 可选项




Example:

``````````````yak
opt = aiagent.originYaklangCliCode(`cli.String("target")`)
println(opt)
``````````````


#### 定义

`originYaklangCliCode(originYaklangCliCode string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| originYaklangCliCode | `string` | 原始 Yaklang CLI 代码 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | Forge 可选项 |


### persistentPrompt

#### 详细描述
WithPersistentPrompt 设置AI助手的持久提示词（导出名为 aiagent.persistentPrompt）

这个提示词会在整个会话过程中持续存在，确保AI行为的一致性

参数:

  - persistentPrompt: 持久提示词



返回值:

  - Forge 可选项




Example:

``````````````yak
opt = aiagent.persistentPrompt("always respond in english")
println(opt)
``````````````


#### 定义

`persistentPrompt(persistentPrompt string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| persistentPrompt | `string` | 持久提示词 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | Forge 可选项 |


### persistentPromptForge

#### 详细描述
WithPersistentPrompt 设置AI助手的持久提示词（导出名为 aiagent.persistentPrompt）

这个提示词会在整个会话过程中持续存在，确保AI行为的一致性

参数:

  - persistentPrompt: 持久提示词



返回值:

  - Forge 可选项




Example:

``````````````yak
opt = aiagent.persistentPrompt("always respond in english")
println(opt)
``````````````


#### 定义

`persistentPromptForge(persistentPrompt string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| persistentPrompt | `string` | 持久提示词 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | Forge 可选项 |


### plan

#### 详细描述
WithPlanMocker 设置协调器的计划生成器，用于自定义/模拟任务计划（导出名为 aiagent.plan）

参数:

  - i: 计划生成函数，参数为协调器，返回计划响应



返回值:

  - 配置选项




Example:

``````````````yak
opt = aiagent.plan(func(coordinator) { return nil })
println(opt)
``````````````


#### 定义

`plan(i func(coordinator *Coordinator) *PlanResponse) aicommon.ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `func(coordinator *Coordinator) *PlanResponse` | 计划生成函数，参数为协调器，返回计划响应 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `aicommon.ConfigOption` | 配置选项 |


### planAICallback

#### 详细描述
WithQualityPriorityAICallback 设置质量优先档的 AI 回调（导出名为 aiagent.planAICallback / coordinatorAICallback）

参数:

  - cb: AI 回调函数



返回值:

  - 配置选项




Example:

``````````````yak
// cb 由 aicommon 构造（示意性示例）
opt = aiagent.planAICallback(cb)
println(opt)
``````````````


#### 定义

`planAICallback(cb AICallbackType) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cb | `AICallbackType` | AI 回调函数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 配置选项 |


### resultHandler

#### 详细描述
WithResultHandler 设置协调器执行结束后的结果处理回调（导出名为 aiagent.resultHandler）

cycle import issue

参数:

  - h: 结果处理函数，参数为协调器对象



返回值:

  - 配置选项




Example:

``````````````yak
opt = aiagent.resultHandler(func(coordinator) { println("done") })
println(opt)
``````````````


#### 定义

`resultHandler(h func(c *Coordinator)) aicommon.ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `func(c *Coordinator)` | 结果处理函数，参数为协调器对象 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `aicommon.ConfigOption` | 配置选项 |


### resultHandlerForge

#### 详细描述
WithResultHandler 设置AI助手的结果处理函数（导出名为 aiagent.resultHandlerForge）

这个函数会在AI助手生成结果后被调用，用于处理AI的输出

参数:

  - handler: 结果处理函数，参数为 (result, err)



返回值:

  - Forge 可选项




Example:

``````````````yak
opt = aiagent.resultHandlerForge(func(result, err) { println(result) })
println(opt)
``````````````


#### 定义

`resultHandlerForge(handler func(string, error)) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| handler | `func(string, error)` | 结果处理函数，参数为 (result, err) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | Forge 可选项 |


### resultPrompt

#### 详细描述
WithResultPrompt 设置AI助手的生成结果提示词（导出名为 aiagent.resultPrompt）

这个提示词会在AI助手生成结果时被使用，用于定义AI的输出格式和内容

参数:

  - prompt: 结果提示词



返回值:

  - Forge 可选项




Example:

``````````````yak
opt = aiagent.resultPrompt("summarize the findings in markdown")
println(opt)
``````````````


#### 定义

`resultPrompt(prompt string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| prompt | `string` | 结果提示词 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | Forge 可选项 |


### resultPromptForge

#### 详细描述
WithResultPrompt 设置AI助手的生成结果提示词（导出名为 aiagent.resultPrompt）

这个提示词会在AI助手生成结果时被使用，用于定义AI的输出格式和内容

参数:

  - prompt: 结果提示词



返回值:

  - Forge 可选项




Example:

``````````````yak
opt = aiagent.resultPrompt("summarize the findings in markdown")
println(opt)
``````````````


#### 定义

`resultPromptForge(prompt string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| prompt | `string` | 结果提示词 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | Forge 可选项 |


### systemFileOperator

#### 详细描述
WithSystemFileOperator 为 AI 启用系统文件操作工具集（导出名为 aiagent.systemFileOperator）

参数:

  - 无



返回值:

  - 配置选项




Example:

``````````````yak
opt = aiagent.systemFileOperator()
println(opt)
``````````````


#### 定义

`systemFileOperator() ConfigOption`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 配置选项 |


### taskAICallback

#### 详细描述
WithSpeedPriorityAICallback 设置速度优先档的 AI 回调（导出名为 aiagent.taskAICallback）

参数:

  - cb: AI 回调函数



返回值:

  - 配置选项




Example:

``````````````yak
// cb 由 aicommon 构造（示意性示例）
opt = aiagent.taskAICallback(cb)
println(opt)
``````````````


#### 定义

`taskAICallback(cb AICallbackType) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cb | `AICallbackType` | AI 回调函数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 配置选项 |


### timelineContentLimit

#### 详细描述
WithTimelineContentLimit 设置 timeline 内容大小上限（导出名为 aiagent.timelineContentLimit）

WithTimelineContentLimit sets timeline content size limit (keeps naming parity).

参数:

  - limit: 内容大小上限



返回值:

  - 配置选项




Example:

``````````````yak
opt = aiagent.timelineContentLimit(4096)
println(opt)
``````````````


#### 定义

`timelineContentLimit(limit int) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| limit | `int` | 内容大小上限 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 配置选项 |


### tool

#### 详细描述
WithTool 添加单个 AI 工具（导出名为 aiagent.tool）

WithTool is a convenience wrapper to add a single tool (delegates to WithTools).

参数:

  - tool: AI 工具对象



返回值:

  - 配置选项




Example:

``````````````yak
// tool 由 aitool 构造（示意性示例）
opt = aiagent.tool(tool)
println(opt)
``````````````


#### 定义

`tool(tool *aitool.Tool) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tool | `*aitool.Tool` | AI 工具对象 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 配置选项 |


### toolKeywords

#### 详细描述
WithToolKeywords 设置AI助手的工具关键词（导出名为 aiagent.toolKeywords）

这些关键词可以扩展AI的能力，使其能够执行特定的任务

参数:

  - keywords: 工具关键词列表



返回值:

  - Forge 可选项




Example:

``````````````yak
opt = aiagent.toolKeywords(["scan", "vuln"])
println(opt)
``````````````


#### 定义

`toolKeywords(keywords []string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| keywords | `[]string` | 工具关键词列表 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | Forge 可选项 |


### tools

#### 详细描述
WithTools 为 AI 批量添加可用工具（导出名为 aiagent.tools）

参数:

  - tool: 一个或多个 AI 工具对象



返回值:

  - 配置选项




Example:

``````````````yak
// tool 由 aitool 构造（示意性示例）
opt = aiagent.tools(tool)
println(opt)
``````````````


#### 定义

`tools(tool ...*aitool.Tool) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tool | `...*aitool.Tool` | 一个或多个 AI 工具对象 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 配置选项 |


