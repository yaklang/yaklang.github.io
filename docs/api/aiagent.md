# aiagent {#library-aiagent}

`aiagent` 库是 yaklang 的 AI 智能体（Agent）编排入口，把"大模型 + 工具调用 + 计划执行"封装成可在脚本里驱动的自动化流程。它围绕 ReAct 式的"思考-行动-观察"循环，让 AI 自主拆解任务、调用 yak 工具/插件、并在需要时请求人工确认。

典型使用场景：

- 构建执行器：`aiagent.NewExecutor` / `aiagent.NewExecutorFromJson` 创建协调器（Coordinator），驱动一次完整的多步任务；`aiagent.ExecuteForge` / `aiagent.CreateForge` / `aiagent.CreateLiteForge` 运行预制的 Forge 蓝图。
- 工具与计划：`aiagent.AllYakScriptAiTools` 列出可用 AI 工具，`aiagent.ParseYakScriptToAiTools` 把 yak 插件转成工具；`aiagent.ExtractPlan` / `aiagent.ExtractAction` 从模型输出里解析计划与动作。
- 行为控制：通过 `aiagent.aiCallback` 接入模型、`aiagent.tool(s)` 注入工具、`aiagent.agreeAuto` / `aiagent.agreeManual` / `aiagent.agreeYOLO` 控制审批策略、`aiagent.debug` 打开调试。

与相邻库的关系：`aiagent` 是高层编排，底层模型对话由 `ai` 库提供，结构化输出与 schema 由 `liteforge` / `jsonschema` 支撑，知识检索可结合 `rag`，被编排的能力多来自 `hook`/yak 插件。它面向"让 AI 自己完成一串安全任务"的场景。

> 共 57 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [aiagent.AllYakScriptAiTools](#allyakscriptaitools) | - | `[]*aitool.Tool` | 获取数据库中保存的全部 Yak 脚本 AI 工具（导出名为 aiagent.AllYakScriptAiTools） |
| [aiagent.ExtractPlan](#extractplan) | `c *Coordinator, rawResponse string` | `*PlanResponse, error` | 从 AI 原始响应中解析出任务计划（导出名为 aiagent.ExtractPlan） |
| [aiagent.GetDefaultContextProvider](#getdefaultcontextprovider) | - | `*PromptContextProvider` | 返回默认的 Prompt 上下文提供器（导出名为 aiagent.GetDefaultContextProvider） |
| [aiagent.ParseYakScriptToAiTools](#parseyakscripttoaitools) | `name string, content string` | `*schema.AIYakTool` | LoadYakScriptToAiTools 将一段 Yak 插件源码解析为 AI 工具描述（导出名为 aiagent.ParseYakScriptToAiTools） |
| [aiagent.UpdateYakScriptMetaData](#updateyakscriptmetadata) | `name string, content string, forceUpdate bool` | `string, *metadata.YakScriptMetadata, error` | 解析并（按需借助 AI）补全 Yak 插件的元数据（导出名为 aiagent.UpdateYakScriptMetaData） |
| [aiagent.context](#context) | `ctx context.Context` | `AIAgentOption` | WithContext 设置 AI Agent 的上下文，用于控制取消（导出名为 aiagent.context） |
| [aiagent.forgeName](#forgename) | `forgeName string` | `AIAgentOption` | WithForgeName 设置 AI Agent 使用的 Forge 名称（导出名为 aiagent.forgeName） |
| [aiagent.forgePlanMocker](#forgeplanmocker) | `plan func(config *aid.Coordinator) *aid.PlanResponse` | `Option` | WithPlanMocker 设置AI助手的计划生成器（导出名为 aiagent.forgePlanMocker） |
| [aiagent.initPrompt](#initprompt) | `prompt string` | `Option` | WithInitializePrompt 设置AI助手的初始化提示词（导出名为 aiagent.initPrompt） |
| [aiagent.initializePrompt](#initializeprompt) | `prompt string` | `Option` | WithInitializePrompt 设置AI助手的初始化提示词（导出名为 aiagent.initPrompt） |
| [aiagent.liteForgeOutputSchemaRaw](#liteforgeoutputschemaraw) | `actionName string, outputSchema string` | `LiteForgeOption` | WithLiteForge_OutputSchemaRaw 通过原始 JSON Schema 字符串设置输出结构（导出名为 aiagent.liteForgeOutputSchemaRaw） |
| [aiagent.liteForgePrompt](#liteforgeprompt) | `i string` | `LiteForgeOption` | WithLiteForge_Prompt 设置 LiteForge 的&#34;上下文/动态&#34; prompt 文本。 |
| [aiagent.originYaklangCliCode](#originyaklangclicode) | `originYaklangCliCode string` | `Option` | WithOriginYaklangCliCode 设置原始的Yaklang CLI代码（导出名为 aiagent.originYaklangCliCode） |
| [aiagent.persistentPrompt](#persistentprompt) | `persistentPrompt string` | `Option` | WithPersistentPrompt 设置AI助手的持久提示词（导出名为 aiagent.persistentPrompt） |
| [aiagent.persistentPromptForge](#persistentpromptforge) | `persistentPrompt string` | `Option` | WithPersistentPrompt 设置AI助手的持久提示词（导出名为 aiagent.persistentPrompt） |
| [aiagent.resultHandlerForge](#resulthandlerforge) | `handler func(string, error)` | `Option` | WithResultHandler 设置AI助手的结果处理函数（导出名为 aiagent.resultHandlerForge） |
| [aiagent.resultPrompt](#resultprompt) | `prompt string` | `Option` | WithResultPrompt 设置AI助手的生成结果提示词（导出名为 aiagent.resultPrompt） |
| [aiagent.resultPromptForge](#resultpromptforge) | `prompt string` | `Option` | WithResultPrompt 设置AI助手的生成结果提示词（导出名为 aiagent.resultPrompt） |
| [aiagent.toolKeywords](#toolkeywords) | `keywords []string` | `Option` | WithToolKeywords 设置AI助手的工具关键词（导出名为 aiagent.toolKeywords） |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [aiagent.CreateForge](#createforge) | `name string, opts ...any` | `*aiforge.ForgeBlueprint` | NewForgeBlueprint 创建一个 Forge 蓝图（导出名为 aiagent.CreateForge） |
| [aiagent.CreateLiteForge](#createliteforge) | `name string, opts ...any` | `*aiforge.LiteForge, error` | NewLiteForge 创建一个 LiteForge 实例（导出名为 aiagent.CreateLiteForge） |
| [aiagent.ExecuteForge](#executeforge) | `forgeName string, i any, iopts ...any` | `any, error` | 执行一个已注册的 Forge 并返回结果（导出名为 aiagent.ExecuteForge） |
| [aiagent.ExtractAction](#extractaction) | `i string, actionName string, alias ...string` | `*Action, error` | 从字符串中提取指定的 Action 对象，支持别名，这里隐含一个强校验行为，即会等待处理完毕之后检查是否有可用的Action（导出名为 aiagent.ExtractAction） |
| [aiagent.NewExecutor](#newexecutor) | `name string, i any, opts ...any` | `*aid.Coordinator, error` | NewForgeExecutor 基于已注册的 Forge 名称创建执行器（导出名为 aiagent.NewExecutor） |
| [aiagent.NewExecutorFromJson](#newexecutorfromjson) | `json string, i any, opts ...any` | `*aid.Coordinator, error` | 通过 JSON 描述的 Forge 蓝图创建执行器（导出名为 aiagent.NewExecutorFromJson） |
| [aiagent.extendAIDOptions](#extendaidoptions) | `opts ...aicommon.ConfigOption` | `AIAgentOption` | WithExtendAICommonOptions 追加底层 aicommon 配置选项（导出名为 aiagent.extendAIDOptions） |
| [aiagent.forgeTools](#forgetools) | `tools ...*aitool.Tool` | `Option` | WithTools 为AI助手添加可用的工具（导出名为 aiagent.forgeTools） |
| [aiagent.liteForgeOutputSchema](#liteforgeoutputschema) | `params ...aitool.ToolOption` | `LiteForgeOption` | WithLiteForge_OutputSchema 设置 LiteForge 的输出结构 schema（导出名为 aiagent.liteForgeOutputSchema） |
| [aiagent.liteForgedRequireParams](#liteforgedrequireparams) | `params ...aitool.ToolOption` | `LiteForgeOption` | WithLiteForge_RequireParams 设置 LiteForge 的输入参数 schema（导出名为 aiagent.liteForgedRequireParams） |

## 函数详情

### AllYakScriptAiTools {#allyakscriptaitools}

```go
AllYakScriptAiTools() []*aitool.Tool
```

获取数据库中保存的全部 Yak 脚本 AI 工具（导出名为 aiagent.AllYakScriptAiTools）

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*aitool.Tool` | AI 工具列表 |

**示例**

``````````````yak
// 依赖本地 profile 数据库（示意性示例）
tools = aiagent.AllYakScriptAiTools()
dump(tools)
``````````````

---

### ExtractPlan {#extractplan}

```go
ExtractPlan(c *Coordinator, rawResponse string) (*PlanResponse, error)
```

从 AI 原始响应中解析出任务计划（导出名为 aiagent.ExtractPlan）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| c | `*Coordinator` | 协调器对象 |
| rawResponse | `string` | AI 返回的原始文本 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*PlanResponse` | 计划响应对象 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 需要可用的协调器与响应（示意性示例）
plan = aiagent.ExtractPlan(coordinator, rawResponse)~
dump(plan)
``````````````

---

### GetDefaultContextProvider {#getdefaultcontextprovider}

```go
GetDefaultContextProvider() *PromptContextProvider
```

返回默认的 Prompt 上下文提供器（导出名为 aiagent.GetDefaultContextProvider）

上下文提供器持有计划历史、持久化数据、交互历史以及工具列表

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*PromptContextProvider` | 默认上下文提供器对象 |

**示例**

``````````````yak
provider = aiagent.GetDefaultContextProvider()
dump(provider)
``````````````

---

### ParseYakScriptToAiTools {#parseyakscripttoaitools}

```go
ParseYakScriptToAiTools(name string, content string) *schema.AIYakTool
```

LoadYakScriptToAiTools 将一段 Yak 插件源码解析为 AI 工具描述（导出名为 aiagent.ParseYakScriptToAiTools）

会从源码中提取元数据（名称、描述、关键词等）以及 CLI 参数并转换为工具输入 schema

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 工具名称 |
| content | `string` | Yak 插件源码 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*schema.AIYakTool` | AI 工具描述对象（解析失败时返回 nil） |

**示例**

``````````````yak
code = `cli.String("target"); cli.check()`
tool = aiagent.ParseYakScriptToAiTools("demo", code)
dump(tool)
``````````````

---

### UpdateYakScriptMetaData {#updateyakscriptmetadata}

```go
UpdateYakScriptMetaData(name string, content string, forceUpdate bool) (string, *metadata.YakScriptMetadata, error)
```

解析并（按需借助 AI）补全 Yak 插件的元数据（导出名为 aiagent.UpdateYakScriptMetaData）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 插件名称 |
| content | `string` | 插件源码 |
| forceUpdate | `bool` | 是否强制重新生成元数据 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 更新后的插件源码 |
| r2 | `*metadata.YakScriptMetadata` | 解析出的元数据对象 |
| r3 | `error` | 错误信息 |

**示例**

``````````````yak
// 需要配置可用的 AI 服务（示意性示例）
newContent, meta, err = aiagent.UpdateYakScriptMetaData("demo", code, false)
dump(meta)
``````````````

---

### context {#context}

```go
context(ctx context.Context) AIAgentOption
```

WithContext 设置 AI Agent 的上下文，用于控制取消（导出名为 aiagent.context）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| ctx | `context.Context` | 上下文对象 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `AIAgentOption` | AI Agent 可选项 |

**示例**

``````````````yak
opt = aiagent.context(context.Background())
println(opt)
``````````````

---

### forgeName {#forgename}

```go
forgeName(forgeName string) AIAgentOption
```

WithForgeName 设置 AI Agent 使用的 Forge 名称（导出名为 aiagent.forgeName）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| forgeName | `string` | Forge 名称 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `AIAgentOption` | AI Agent 可选项 |

**示例**

``````````````yak
opt = aiagent.forgeName("my-forge")
println(opt)
``````````````

---

### forgePlanMocker {#forgeplanmocker}

```go
forgePlanMocker(plan func(config *aid.Coordinator) *aid.PlanResponse) Option
```

WithPlanMocker 设置AI助手的计划生成器（导出名为 aiagent.forgePlanMocker）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| plan | `func(config *aid.Coordinator) *aid.PlanResponse` | 计划生成函数，参数为协调器，返回计划响应 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `Option` | Forge 可选项 |

**示例**

``````````````yak
opt = aiagent.forgePlanMocker(func(coordinator) { return nil })
println(opt)
``````````````

---

### initPrompt {#initprompt}

```go
initPrompt(prompt string) Option
```

WithInitializePrompt 设置AI助手的初始化提示词（导出名为 aiagent.initPrompt）

这个提示词会在AI助手启动时被使用，用于定义AI的初始状态和行为

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| prompt | `string` | 初始化提示词 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `Option` | Forge 可选项 |

**示例**

``````````````yak
opt = aiagent.initPrompt("you are a security expert")
println(opt)
``````````````

---

### initializePrompt {#initializeprompt}

```go
initializePrompt(prompt string) Option
```

WithInitializePrompt 设置AI助手的初始化提示词（导出名为 aiagent.initPrompt）

这个提示词会在AI助手启动时被使用，用于定义AI的初始状态和行为

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| prompt | `string` | 初始化提示词 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `Option` | Forge 可选项 |

**示例**

``````````````yak
opt = aiagent.initPrompt("you are a security expert")
println(opt)
``````````````

---

### liteForgeOutputSchemaRaw {#liteforgeoutputschemaraw}

```go
liteForgeOutputSchemaRaw(actionName string, outputSchema string) LiteForgeOption
```

WithLiteForge_OutputSchemaRaw 通过原始 JSON Schema 字符串设置输出结构（导出名为 aiagent.liteForgeOutputSchemaRaw）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| actionName | `string` | action 名称 |
| outputSchema | `string` | 原始 JSON Schema 字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `LiteForgeOption` | LiteForge 可选项 |

**示例**

``````````````yak
opt = aiagent.liteForgeOutputSchemaRaw("call-tool", `{"type":"object"}`)
println(opt)
``````````````

---

### liteForgePrompt {#liteforgeprompt}

```go
liteForgePrompt(i string) LiteForgeOption
```

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

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `string` | 动态 prompt 文本 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `LiteForgeOption` | LiteForge 可选项 |

**示例**

``````````````yak
opt = aiagent.liteForgePrompt("extract the title from the html")
println(opt)
``````````````

---

### originYaklangCliCode {#originyaklangclicode}

```go
originYaklangCliCode(originYaklangCliCode string) Option
```

WithOriginYaklangCliCode 设置原始的Yaklang CLI代码（导出名为 aiagent.originYaklangCliCode）

这个结构需要 Yak 引擎根据 CLI 代码构建出正确的用户需要输入的工具

这个结构是表单构建的核心依据，可以使用 Yak 原声插件基础设施直接构建表单

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| originYaklangCliCode | `string` | 原始 Yaklang CLI 代码 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `Option` | Forge 可选项 |

**示例**

``````````````yak
opt = aiagent.originYaklangCliCode(`cli.String("target")`)
println(opt)
``````````````

---

### persistentPrompt {#persistentprompt}

```go
persistentPrompt(persistentPrompt string) Option
```

WithPersistentPrompt 设置AI助手的持久提示词（导出名为 aiagent.persistentPrompt）

这个提示词会在整个会话过程中持续存在，确保AI行为的一致性

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| persistentPrompt | `string` | 持久提示词 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `Option` | Forge 可选项 |

**示例**

``````````````yak
opt = aiagent.persistentPrompt("always respond in english")
println(opt)
``````````````

---

### persistentPromptForge {#persistentpromptforge}

```go
persistentPromptForge(persistentPrompt string) Option
```

WithPersistentPrompt 设置AI助手的持久提示词（导出名为 aiagent.persistentPrompt）

这个提示词会在整个会话过程中持续存在，确保AI行为的一致性

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| persistentPrompt | `string` | 持久提示词 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `Option` | Forge 可选项 |

**示例**

``````````````yak
opt = aiagent.persistentPrompt("always respond in english")
println(opt)
``````````````

---

### resultHandlerForge {#resulthandlerforge}

```go
resultHandlerForge(handler func(string, error)) Option
```

WithResultHandler 设置AI助手的结果处理函数（导出名为 aiagent.resultHandlerForge）

这个函数会在AI助手生成结果后被调用，用于处理AI的输出

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| handler | `func(string, error)` | 结果处理函数，参数为 (result, err) |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `Option` | Forge 可选项 |

**示例**

``````````````yak
opt = aiagent.resultHandlerForge(func(result, err) { println(result) })
println(opt)
``````````````

---

### resultPrompt {#resultprompt}

```go
resultPrompt(prompt string) Option
```

WithResultPrompt 设置AI助手的生成结果提示词（导出名为 aiagent.resultPrompt）

这个提示词会在AI助手生成结果时被使用，用于定义AI的输出格式和内容

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| prompt | `string` | 结果提示词 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `Option` | Forge 可选项 |

**示例**

``````````````yak
opt = aiagent.resultPrompt("summarize the findings in markdown")
println(opt)
``````````````

---

### resultPromptForge {#resultpromptforge}

```go
resultPromptForge(prompt string) Option
```

WithResultPrompt 设置AI助手的生成结果提示词（导出名为 aiagent.resultPrompt）

这个提示词会在AI助手生成结果时被使用，用于定义AI的输出格式和内容

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| prompt | `string` | 结果提示词 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `Option` | Forge 可选项 |

**示例**

``````````````yak
opt = aiagent.resultPrompt("summarize the findings in markdown")
println(opt)
``````````````

---

### toolKeywords {#toolkeywords}

```go
toolKeywords(keywords []string) Option
```

WithToolKeywords 设置AI助手的工具关键词（导出名为 aiagent.toolKeywords）

这些关键词可以扩展AI的能力，使其能够执行特定的任务

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| keywords | `[]string` | 工具关键词列表 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `Option` | Forge 可选项 |

**示例**

``````````````yak
opt = aiagent.toolKeywords(["scan", "vuln"])
println(opt)
``````````````

---

## 可变参数函数详情

### CreateForge {#createforge}

```go
CreateForge(name string, opts ...any) *aiforge.ForgeBlueprint
```

NewForgeBlueprint 创建一个 Forge 蓝图（导出名为 aiagent.CreateForge）

Forge 蓝图描述了一个可复用的 AI 工作流，可基于它创建执行器

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | Forge 名称 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...any` | 可选项，如 aiagent.initPrompt、aiagent.persistentPrompt、aiagent.resultPrompt 等 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*aiforge.ForgeBlueprint` | Forge 蓝图对象 |

**示例**

``````````````yak
forge = aiagent.CreateForge("demo",

	aiagent.initPrompt("you are a security expert"),

)
dump(forge)
``````````````

---

### CreateLiteForge {#createliteforge}

```go
CreateLiteForge(name string, opts ...any) (*aiforge.LiteForge, error)
```

NewLiteForge 创建一个 LiteForge 实例（导出名为 aiagent.CreateLiteForge）

LiteForge 是轻量的一次性 AI 任务执行单元

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | LiteForge 名称 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...any` | 可选项，如 aiagent.liteForgePrompt、aiagent.liteForgeOutputSchema 等 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*aiforge.LiteForge` | LiteForge 实例 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 需要配置可用的 AI 服务（示意性示例）
lf = aiagent.CreateLiteForge("demo", aiagent.liteForgePrompt("extract the title"))~
dump(lf)
``````````````

---

### ExecuteForge {#executeforge}

```go
ExecuteForge(forgeName string, i any, iopts ...any) (any, error)
```

执行一个已注册的 Forge 并返回结果（导出名为 aiagent.ExecuteForge）

这是 AI Agent 最常用的入口，内部会创建协调器并运行整个 AI 工作流

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| forgeName | `string` | Forge 名称 |
| i | `any` | 执行参数（map 或键值对） |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| iopts | `...any` | 可选项，如 aiagent.aiCallback、aiagent.context、aiagent.agreeYOLO 等 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `any` | Forge 执行结果 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 需要配置可用的 AI 服务（示意性示例）
result = aiagent.ExecuteForge("my-forge", {"query": "scan example.com"}, aiagent.agreeYOLO())~
dump(result)
``````````````

---

### ExtractAction {#extractaction}

```go
ExtractAction(i string, actionName string, alias ...string) (*Action, error)
```

从字符串中提取指定的 Action 对象，支持别名，这里隐含一个强校验行为，即会等待处理完毕之后检查是否有可用的Action（导出名为 aiagent.ExtractAction）

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `string` | 包含 action 的原始文本 |
| actionName | `string` | 期望的 action 名称 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| alias | `...string` | 可选的 action 别名 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*Action` | 解析出的 Action 对象 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
raw = `{"@action": "object", "value": "hello"}`
action = aiagent.ExtractAction(raw, "object")~
dump(action)
``````````````

---

### NewExecutor {#newexecutor}

```go
NewExecutor(name string, i any, opts ...any) (*aid.Coordinator, error)
```

NewForgeExecutor 基于已注册的 Forge 名称创建执行器（导出名为 aiagent.NewExecutor）

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | Forge 名称 |
| i | `any` | 执行参数（map 或键值对） |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...any` | 可选项，如 aiagent.aiCallback、aiagent.context 等 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*aid.Coordinator` | 协调器对象（可调用 Run 执行） |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 需要配置可用的 AI 服务（示意性示例）
coordinator = aiagent.NewExecutor("my-forge", {"query": "hello"})~
dump(coordinator)
``````````````

---

### NewExecutorFromJson {#newexecutorfromjson}

```go
NewExecutorFromJson(json string, i any, opts ...any) (*aid.Coordinator, error)
```

通过 JSON 描述的 Forge 蓝图创建执行器（导出名为 aiagent.NewExecutorFromJson）

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| json | `string` | Forge 蓝图的 JSON 描述 |
| i | `any` | 执行参数（map 或键值对） |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...any` | 可选项，如 aiagent.aiCallback、aiagent.context 等 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*aid.Coordinator` | 协调器对象（可调用 Run 执行） |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 需要配置可用的 AI 服务（示意性示例）
coordinator = aiagent.NewExecutorFromJson(forgeJson, {"query": "hello"})~
dump(coordinator)
``````````````

---

### extendAIDOptions {#extendaidoptions}

```go
extendAIDOptions(opts ...aicommon.ConfigOption) AIAgentOption
```

WithExtendAICommonOptions 追加底层 aicommon 配置选项（导出名为 aiagent.extendAIDOptions）

**可选参数**

可作为可变参数 `opts ...aicommon.ConfigOption` 传入选项；共 28 个可用选项，详见 [ConfigOption 选项列表](#option-configoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `AIAgentOption` | AI Agent 可选项 |

**示例**

``````````````yak
// opt 由 aicommon 提供（示意性示例）
opt = aiagent.extendAIDOptions(aiagent.debug(true))
println(opt)
``````````````

---

### forgeTools {#forgetools}

```go
forgeTools(tools ...*aitool.Tool) Option
```

WithTools 为AI助手添加可用的工具（导出名为 aiagent.forgeTools）

这些工具可以扩展AI的能力，使其能够执行特定的任务

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| tools | `...*aitool.Tool` | 一个或多个 AI 工具对象 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `Option` | Forge 可选项 |

**示例**

``````````````yak
// tool 由 aitool 构造（示意性示例）
opt = aiagent.forgeTools(tool)
println(opt)
``````````````

---

### liteForgeOutputSchema {#liteforgeoutputschema}

```go
liteForgeOutputSchema(params ...aitool.ToolOption) LiteForgeOption
```

WithLiteForge_OutputSchema 设置 LiteForge 的输出结构 schema（导出名为 aiagent.liteForgeOutputSchema）

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| params | `...aitool.ToolOption` | 一个或多个 aitool 参数选项，描述期望的输出字段 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `LiteForgeOption` | LiteForge 可选项 |

**示例**

``````````````yak
opt = aiagent.liteForgeOutputSchema(aitool.WithStringParam("title"))
println(opt)
``````````````

---

### liteForgedRequireParams {#liteforgedrequireparams}

```go
liteForgedRequireParams(params ...aitool.ToolOption) LiteForgeOption
```

WithLiteForge_RequireParams 设置 LiteForge 的输入参数 schema（导出名为 aiagent.liteForgedRequireParams）

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| params | `...aitool.ToolOption` | 一个或多个 aitool 参数选项 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `LiteForgeOption` | LiteForge 可选项 |

**示例**

``````````````yak
opt = aiagent.liteForgedRequireParams(aitool.WithStringParam("target"))
println(opt)
``````````````

---

## 可变参数选项列表

以下按选项类型汇总全部可变参数选项(原先重复在各主函数下的选项表已收拢到此处)：

### 1. 类型：ConfigOption {#option-configoption}

涉及到的函数有：[aiagent.extendAIDOptions](#extendaidoptions)

|选项函数|参数|返回值|说明|
|:--|:--|:--|:--|
| `aiagent.agreeAuto` | - | `ConfigOption` | WithAgreeAuto 设置自动审批通过所有操作 |
| `aiagent.agreeManual` | - | `ConfigOption` | WithAgreeManual 设置由人工手动审批操作 |
| `aiagent.agreePolicy` | `p AgreePolicyType` | `ConfigOption` | WithAgreePolicy 设置操作审批策略 |
| `aiagent.agreePolicyAI` | - | `ConfigOption` | WithAIAgree 设置由 AI 自动审批操作 |
| `aiagent.agreeYOLO` | `b ...bool` | `ConfigOption` | WithAgreeYOLO 设置 YOLO 模式，自动通过所有审批 |
| `aiagent.aiAutoRetry` | `n int64` | `ConfigOption` | WithAIAutoRetry 设置 AI 调用失败时的自动重试次数 |
| `aiagent.aiCallback` | `cb AICallbackType` | `ConfigOption` | WithAICallback 设置统一的 AI 回调 |
| `aiagent.aiTransactionRetry` | `n int64` | `ConfigOption` | WithAITransactionRetry 设置 AI 事务（单次交互）的自动重试次数 |
| `aiagent.allowRequireForUserInteract` | `v bool` | `ConfigOption` | WithAllowRequireForUserInteract 设置是否允许向用户发起交互请求 |
| `aiagent.appendPersistentMemory` | `keys ...string` | `ConfigOption` | WithAppendPersistentContext 追加持久化记忆的键 |
| `aiagent.coordinatorAICallback` | `cb AICallbackType` | `ConfigOption` | WithQualityPriorityAICallback 设置质量优先档的 AI 回调 |
| `aiagent.debug` | `v bool` | `ConfigOption` | WithDebug 同时开启 prompt 与 event 调试输出 |
| `aiagent.debugPrompt` | `v ...bool` | `ConfigOption` | WithDebugPrompt 开启 prompt 调试输出 |
| `aiagent.disableOutputType` | `types ...string` | `ConfigOption` | WithDisableOutputEvent 禁用指定类型的输出事件 |
| `aiagent.disableToolUse` | `disable bool` | `ConfigOption` | WithDisableToolUse 禁用工具调用 |
| `aiagent.disallowRequireForUserPrompt` | - | `ConfigOption` | WithDisallowRequireForUserPrompt 禁止向用户发起交互请求 |
| `aiagent.extendedActionCallback` | `name string, callback func(config *Config, action *Action)` | `ConfigOption` | WithExtendedActionCallback 注册扩展 action 回调 |
| `aiagent.manualAssistantCallback` | `cb func(context.Context, *Config) (aitool.InvokeParams, error)` | `ConfigOption` | WithManualAssistantCallback 设置人工审批回调 |
| `aiagent.offsetSeq` | `seq int64` | `ConfigOption` | WithSequence 设置起始序列号并安装自增 id 生成器 |
| `aiagent.omniSearchTool` | - | `ConfigOption` | WithOmniSearchTool 启用全网搜索工具 |
| `aiagent.plan` | `i func(coordinator *Coordinator) *PlanResponse` | `aicommon.ConfigOption` | WithPlanMocker 设置协调器的计划生成器，用于自定义/模拟任务计划 |
| `aiagent.planAICallback` | `cb AICallbackType` | `ConfigOption` | WithQualityPriorityAICallback 设置质量优先档的 AI 回调 |
| `aiagent.resultHandler` | `h func(c *Coordinator)` | `aicommon.ConfigOption` | WithResultHandler 设置协调器执行结束后的结果处理回调 |
| `aiagent.systemFileOperator` | - | `ConfigOption` | WithSystemFileOperator 为 AI 启用系统文件操作工具集 |
| `aiagent.taskAICallback` | `cb AICallbackType` | `ConfigOption` | WithSpeedPriorityAICallback 设置速度优先档的 AI 回调 |
| `aiagent.timelineContentLimit` | `limit int` | `ConfigOption` | WithTimelineContentLimit 设置 timeline 内容大小上限 |
| `aiagent.tool` | `tool *aitool.Tool` | `ConfigOption` | WithTool 添加单个 AI 工具 |
| `aiagent.tools` | `tool ...*aitool.Tool` | `ConfigOption` | WithTools 为 AI 批量添加可用工具 |

