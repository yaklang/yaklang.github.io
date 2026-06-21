# liteforge {#library-liteforge}

`liteforge` 库是轻量级的"一次性结构化 AI 任务"封装：给一段提示与输出 Schema，调用大模型并拿回结构化结果（含多模态图像/视频分析），无需搭建完整 Agent。它也内置了视频 Omni 分析与知识库构建能力。

典型使用场景：

- 结构化执行：`liteforge.Execute(query, opts...)` 跑一次任务，`liteforge.output` / `liteforge.action` 指定输出动作，`liteforge.image` / `liteforge.imageFile` 传入图像做多模态分析。
- 视频分析：`liteforge.AnalyzeVideoOmni` 对视频做全维分析，`liteforge.BuildVideoKnowledgeFromOmni` 把视频内容沉淀为知识库条目；`liteforge.omniModel` / `liteforge.omniSegmentSeconds` / `liteforge.omniPresetFlash` 等控制分段与模型。

与相邻库的关系：`liteforge` 处于 `ai`（底层对话）与 `aiagent`/`aim`（完整编排）之间，适合"只需一次结构化调用"的场景；输出 Schema 由 `jsonschema` 描述，知识库结果可入 `rag`。

> 共 44 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [liteforge.action](#action) | `action string` | `LiteForgeExecOption` | liteforge.action is an option for liteforge.Execute |
| [liteforge.analyzeCtx](#analyzectx) | `ctx context.Context` | `AnalysisOption` | WithAnalyzeContext 设置分析使用的上下文，用于控制取消（导出名为 liteforge.analyzeCtx） |
| [liteforge.analyzeLog](#analyzelog) | `handler func(format string, args ...any)` | `AnalysisOption` | WithAnalyzeLog 设置分析过程的日志回调（导出名为 liteforge.analyzeLog） |
| [liteforge.analyzeStatusCard](#analyzestatuscard) | `handler func(id string, data any, tags ...string)` | `AnalysisOption` | WithAnalyzeStatusCard 设置分析过程的状态卡片回调（导出名为 liteforge.analyzeStatusCard） |
| [liteforge.context](#context) | `ctx context.Context` | `LiteForgeExecOption` | liteforge.context is an option for liteforge.Execute |
| [liteforge.id](#id) | `id string` | `LiteForgeExecOption` | liteforge.id is an option for liteforge.Execute |
| [liteforge.imageExtraPrompt](#imageextraprompt) | `prompt string` | `AnalysisOption` | WithExtraPrompt 为图片/上下文分析追加额外提示词（导出名为 liteforge.imageExtraPrompt） |
| [liteforge.knowledgeBaseDesc](#knowledgebasedesc) | `desc string` | `RefineOption` | RefineWithKnowledgeBaseDesc 设置生成知识库的描述（导出名为 liteforge.knowledgeBaseDesc） |
| [liteforge.knowledgeBaseName](#knowledgebasename) | `name string` | `RefineOption` | RefineWithKnowledgeBaseName 设置生成知识库的名称（导出名为 liteforge.knowledgeBaseName） |
| [liteforge.knowledgeBaseType](#knowledgebasetype) | `typ string` | `RefineOption` | RefineWithKnowledgeBaseType 设置生成知识库的类型（导出名为 liteforge.knowledgeBaseType） |
| [liteforge.knowledgeEntryLength](#knowledgeentrylength) | `length int` | `RefineOption` | RefineWithKnowledgeEntryLength 设置每条知识条目的目标长度（导出名为 liteforge.knowledgeEntryLength） |
| [liteforge.omniAPIKey](#omniapikey) | `k string` | `VideoOmniOption` | WithVideoOmniAPIKey 设置 omni 视频分析使用的 API Key（导出名为 liteforge.omniAPIKey） |
| [liteforge.omniBaseURL](#omnibaseurl) | `u string` | `VideoOmniOption` | WithVideoOmniBaseURL 设置 omni 视频分析使用的 API 基础地址（导出名为 liteforge.omniBaseURL） |
| [liteforge.omniContext](#omnicontext) | `ctx context.Context` | `VideoOmniOption` | WithVideoOmniContext 设置 omni 视频分析的上下文（导出名为 liteforge.omniContext） |
| [liteforge.omniMaxBase64Bytes](#omnimaxbase64bytes) | `n int64` | `VideoOmniOption` | WithVideoOmniMaxBase64Bytes 设置每段视频 base64 编码后的字节上限（导出名为 liteforge.omniMaxBase64Bytes） |
| [liteforge.omniMaxHeight](#omnimaxheight) | `h int` | `VideoOmniOption` | WithVideoOmniMaxHeight 设置视频切片的最大高度（导出名为 liteforge.omniMaxHeight） |
| [liteforge.omniMaxSegments](#omnimaxsegments) | `n int` | `VideoOmniOption` | WithVideoOmniMaxSegments 设置最多分析的视频段数（导出名为 liteforge.omniMaxSegments） |
| [liteforge.omniModel](#omnimodel) | `m string` | `VideoOmniOption` | WithVideoOmniModel 设置 omni 视频分析使用的模型（导出名为 liteforge.omniModel） |
| [liteforge.omniPresetFlash](#omnipresetflash) | - | `VideoOmniOption` | VideoOmniPresetFlash 使用 flash 预设（qwen3-omni-flash 模型，导出名为 liteforge.omniPresetFlash） |
| [liteforge.omniPresetPlus](#omnipresetplus) | - | `VideoOmniOption` | VideoOmniPresetPlus 使用 plus 预设（qwen3.5-omni-plus 模型，导出名为 liteforge.omniPresetPlus） |
| [liteforge.omniPresetTurbo](#omnipresetturbo) | - | `VideoOmniOption` | VideoOmniPresetTurbo / Flash / Plus 提供 forge 友好的预设 |
| [liteforge.omniProgressCallback](#omniprogresscallback) | `cb func(*VideoOmniSegmentResult)` | `VideoOmniOption` | WithVideoOmniProgressCallback 设置 omni 视频分析的进度回调（导出名为 liteforge.omniProgressCallback） |
| [liteforge.omniQueryPrompt](#omniqueryprompt) | `q string` | `VideoOmniOption` | WithVideoOmniQueryPrompt 设置 omni 视频分析的查询提示词（导出名为 liteforge.omniQueryPrompt） |
| [liteforge.omniRateLimitRetry](#omniratelimitretry) | `maxAttempts int, backoffBase time.Duration` | `VideoOmniOption` | WithVideoOmniRateLimitRetry 设定 429 / 限速退避重试次数与基数。 |
| [liteforge.omniReencode](#omnireencode) | `b bool` | `VideoOmniOption` | WithVideoOmniReencode 设置是否对视频切片重新编码（导出名为 liteforge.omniReencode） |
| [liteforge.omniSegmentInterval](#omnisegmentinterval) | `d time.Duration` | `VideoOmniOption` | WithVideoOmniSegmentInterval 设置段间静默节流，&lt;=0 表示不节流。 |
| [liteforge.omniSegmentSeconds](#omnisegmentseconds) | `s float64` | `VideoOmniOption` | WithVideoOmniSegmentSeconds 设置 omni 视频切片的时长（秒，导出名为 liteforge.omniSegmentSeconds） |
| [liteforge.omniSystemPrompt](#omnisystemprompt) | `p string` | `VideoOmniOption` | WithVideoOmniSystemPrompt 设置 omni 视频分析的系统提示词（导出名为 liteforge.omniSystemPrompt） |
| [liteforge.omniTargetFPS](#omnitargetfps) | `f float64` | `VideoOmniOption` | WithVideoOmniTargetFPS 设置视频切片的目标帧率（导出名为 liteforge.omniTargetFPS） |
| [liteforge.omniTimeout](#omnitimeout) | `d time.Duration` | `VideoOmniOption` | WithVideoOmniTimeout 设置 omni 视频分析的超时时间（导出名为 liteforge.omniTimeout） |
| [liteforge.omniType](#omnitype) | `t string` | `VideoOmniOption` | WithVideoOmniType 设置 omni 视频分析使用的 AI 类型（导出名为 liteforge.omniType） |
| [liteforge.omniZipDir](#omnizipdir) | `dir string` | `VideoOmniOption` | WithVideoOmniZipDir 指定 zip 输出目录，运行时自动按 |
| [liteforge.omniZipFile](#omnizipfile) | `p string` | `VideoOmniOption` | WithVideoOmniZipFile 指定 zip 文件完整输出路径。 |
| [liteforge.output](#output) | `output string` | `LiteForgeExecOption` | liteforge.output is an option for liteforge.Execute |
| [liteforge.refinePrompt](#refineprompt) | `prompt string` | `RefineOption` | _refine_WithRefinePrompt 设置知识提炼使用的提示词（导出名为 liteforge.refinePrompt） |
| [liteforge.strictRefine](#strictrefine) | `strict bool` | `RefineOption` | _refine_WithStrict 设置知识提炼是否使用严格模式（导出名为 liteforge.strictRefine） |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [liteforge.AnalyzeVideoOmni](#analyzevideoomni) | `video string, options ...any` | `<-chan AnalysisResult, error` | 把视频切片送进 omni 模型做端到端理解，按段返回 AnalysisResult。 |
| [liteforge.BuildVideoKnowledgeFromOmni](#buildvideoknowledgefromomni) | `kbName string, video string, options ...any` | `<-chan *schema.KnowledgeBaseEntry, error` | 复用 _buildKnowledge 的 RAG/ERM 入库链路， |
| [liteforge.Execute](#execute) | `query string, opts ...any` | `*ForgeResult, error` | liteforge.Execute can create a temporary LiteForge instance and execute it with the given query. |
| [liteforge.forceImage](#forceimage) | `force ...bool` | `LiteForgeExecOption` | liteforge.forceImage is an option for liteforge.Execute |
| [liteforge.image](#image) | `anyImageInput ...any` | `LiteForgeExecOption` | liteforge.image is an option for liteforge.Execute |
| [liteforge.imageFile](#imagefile) | `filename ...string` | `LiteForgeExecOption` | liteforge.imageFile is an option for liteforge.Execute |
| [liteforge.speedPriority](#speedpriority) | `b ...bool` | `LiteForgeExecOption` | liteforge.speedPriority uses a faster/cheaper AI model for distillation tasks |
| [liteforge.verboseName](#verbosename) | `opts ...aicommon.ConfigOption` | `LiteForgeExecOption` | liteforge.verboseName is an option for liteforge.Execute |

## 函数详情

### action {#action}

```go
action(action string) LiteForgeExecOption
```

liteforge.action is an option for liteforge.Execute
it sets the action type for the liteforge execution,

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| action | `string` | 输出的 action 类型 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `LiteForgeExecOption` | liteforge 执行可选项 |

**示例**

``````````````yak
liteforge.Execute(<<<PROMPT
SOME_CONTENT
PROMPT, liteforge.action("analyze"))
``````````````

---

### analyzeCtx {#analyzectx}

```go
analyzeCtx(ctx context.Context) AnalysisOption
```

WithAnalyzeContext 设置分析使用的上下文，用于控制取消（导出名为 liteforge.analyzeCtx）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| ctx | `context.Context` | 上下文对象 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `AnalysisOption` | 分析可选项 |

**示例**

``````````````yak
opt = liteforge.analyzeCtx(context.Background())
println(opt)
``````````````

---

### analyzeLog {#analyzelog}

```go
analyzeLog(handler func(format string, args ...any)) AnalysisOption
```

WithAnalyzeLog 设置分析过程的日志回调（导出名为 liteforge.analyzeLog）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| handler | `func(format string, args ...any)` | 日志回调函数，参数为格式化字符串与参数 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `AnalysisOption` | 分析可选项 |

**示例**

``````````````yak
opt = liteforge.analyzeLog(func(format, args...) { println(sprintf(format, args...)) })
println(opt)
``````````````

---

### analyzeStatusCard {#analyzestatuscard}

```go
analyzeStatusCard(handler func(id string, data any, tags ...string)) AnalysisOption
```

WithAnalyzeStatusCard 设置分析过程的状态卡片回调（导出名为 liteforge.analyzeStatusCard）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| handler | `func(id string, data any, tags ...string)` | 状态卡片回调，参数为 (id, data, tags...) |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `AnalysisOption` | 分析可选项 |

**示例**

``````````````yak
opt = liteforge.analyzeStatusCard(func(id, data, tags...) { println(id, data) })
println(opt)
``````````````

---

### context {#context}

```go
context(ctx context.Context) LiteForgeExecOption
```

liteforge.context is an option for liteforge.Execute
it sets the context for the liteforge execution

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| ctx | `context.Context` | 上下文，用于控制取消与超时 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `LiteForgeExecOption` | liteforge 执行可选项 |

**示例**

``````````````yak
liteforge.Execute(<<<PROMPT
SOME_CONTENT
PROMPT, liteforge.context(ctx))
``````````````

---

### id {#id}

```go
id(id string) LiteForgeExecOption
```

liteforge.id is an option for liteforge.Execute
it sets the ID for the liteforge instance

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| id | `string` | liteforge 实例 ID |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `LiteForgeExecOption` | liteforge 执行可选项 |

**示例**

``````````````yak
liteforge.Execute(<<<PROMPT
SOME_CONTENT
PROMPT, liteforge.id("my-forge-instance"))
``````````````

---

### imageExtraPrompt {#imageextraprompt}

```go
imageExtraPrompt(prompt string) AnalysisOption
```

WithExtraPrompt 为图片/上下文分析追加额外提示词（导出名为 liteforge.imageExtraPrompt）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| prompt | `string` | 额外提示词 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `AnalysisOption` | 分析可选项 |

**示例**

``````````````yak
opt = liteforge.imageExtraPrompt("focus on the error message in the screenshot")
println(opt)
``````````````

---

### knowledgeBaseDesc {#knowledgebasedesc}

```go
knowledgeBaseDesc(desc string) RefineOption
```

RefineWithKnowledgeBaseDesc 设置生成知识库的描述（导出名为 liteforge.knowledgeBaseDesc）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| desc | `string` | 知识库描述 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `RefineOption` | 知识构建可选项 |

**示例**

``````````````yak
opt = liteforge.knowledgeBaseDesc("security related knowledge")
println(opt)
``````````````

---

### knowledgeBaseName {#knowledgebasename}

```go
knowledgeBaseName(name string) RefineOption
```

RefineWithKnowledgeBaseName 设置生成知识库的名称（导出名为 liteforge.knowledgeBaseName）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 知识库名称 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `RefineOption` | 知识构建可选项 |

**示例**

``````````````yak
opt = liteforge.knowledgeBaseName("my-kb")
println(opt)
``````````````

---

### knowledgeBaseType {#knowledgebasetype}

```go
knowledgeBaseType(typ string) RefineOption
```

RefineWithKnowledgeBaseType 设置生成知识库的类型（导出名为 liteforge.knowledgeBaseType）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| typ | `string` | 知识库类型 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `RefineOption` | 知识构建可选项 |

**示例**

``````````````yak
opt = liteforge.knowledgeBaseType("text")
println(opt)
``````````````

---

### knowledgeEntryLength {#knowledgeentrylength}

```go
knowledgeEntryLength(length int) RefineOption
```

RefineWithKnowledgeEntryLength 设置每条知识条目的目标长度（导出名为 liteforge.knowledgeEntryLength）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| length | `int` | 知识条目长度 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `RefineOption` | 知识构建可选项 |

**示例**

``````````````yak
opt = liteforge.knowledgeEntryLength(512)
println(opt)
``````````````

---

### omniAPIKey {#omniapikey}

```go
omniAPIKey(k string) VideoOmniOption
```

WithVideoOmniAPIKey 设置 omni 视频分析使用的 API Key（导出名为 liteforge.omniAPIKey）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| k | `string` | API Key |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `VideoOmniOption` | omni 视频可选项 |

**示例**

``````````````yak
opt = liteforge.omniAPIKey("your-key")
println(opt)
``````````````

---

### omniBaseURL {#omnibaseurl}

```go
omniBaseURL(u string) VideoOmniOption
```

WithVideoOmniBaseURL 设置 omni 视频分析使用的 API 基础地址（导出名为 liteforge.omniBaseURL）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| u | `string` | API 基础地址 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `VideoOmniOption` | omni 视频可选项 |

**示例**

``````````````yak
opt = liteforge.omniBaseURL("https://dashscope.aliyuncs.com")
println(opt)
``````````````

---

### omniContext {#omnicontext}

```go
omniContext(ctx context.Context) VideoOmniOption
```

WithVideoOmniContext 设置 omni 视频分析的上下文（导出名为 liteforge.omniContext）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| ctx | `context.Context` | 上下文对象 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `VideoOmniOption` | omni 视频可选项 |

**示例**

``````````````yak
opt = liteforge.omniContext(context.Background())
println(opt)
``````````````

---

### omniMaxBase64Bytes {#omnimaxbase64bytes}

```go
omniMaxBase64Bytes(n int64) VideoOmniOption
```

WithVideoOmniMaxBase64Bytes 设置每段视频 base64 编码后的字节上限（导出名为 liteforge.omniMaxBase64Bytes）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| n | `int64` | 字节上限 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `VideoOmniOption` | omni 视频可选项 |

**示例**

``````````````yak
opt = liteforge.omniMaxBase64Bytes(7 * 1024 * 1024)
println(opt)
``````````````

---

### omniMaxHeight {#omnimaxheight}

```go
omniMaxHeight(h int) VideoOmniOption
```

WithVideoOmniMaxHeight 设置视频切片的最大高度（导出名为 liteforge.omniMaxHeight）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| h | `int` | 最大高度（像素） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `VideoOmniOption` | omni 视频可选项 |

**示例**

``````````````yak
opt = liteforge.omniMaxHeight(720)
println(opt)
``````````````

---

### omniMaxSegments {#omnimaxsegments}

```go
omniMaxSegments(n int) VideoOmniOption
```

WithVideoOmniMaxSegments 设置最多分析的视频段数（导出名为 liteforge.omniMaxSegments）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| n | `int` | 最大段数 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `VideoOmniOption` | omni 视频可选项 |

**示例**

``````````````yak
opt = liteforge.omniMaxSegments(10)
println(opt)
``````````````

---

### omniModel {#omnimodel}

```go
omniModel(m string) VideoOmniOption
```

WithVideoOmniModel 设置 omni 视频分析使用的模型（导出名为 liteforge.omniModel）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| m | `string` | 模型名 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `VideoOmniOption` | omni 视频可选项 |

**示例**

``````````````yak
opt = liteforge.omniModel("qwen-omni-turbo")
println(opt)
``````````````

---

### omniPresetFlash {#omnipresetflash}

```go
omniPresetFlash() VideoOmniOption
```

VideoOmniPresetFlash 使用 flash 预设（qwen3-omni-flash 模型，导出名为 liteforge.omniPresetFlash）

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `VideoOmniOption` | omni 视频可选项 |

**示例**

``````````````yak
opt = liteforge.omniPresetFlash()
println(opt)
``````````````

---

### omniPresetPlus {#omnipresetplus}

```go
omniPresetPlus() VideoOmniOption
```

VideoOmniPresetPlus 使用 plus 预设（qwen3.5-omni-plus 模型，导出名为 liteforge.omniPresetPlus）

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `VideoOmniOption` | omni 视频可选项 |

**示例**

``````````````yak
opt = liteforge.omniPresetPlus()
println(opt)
``````````````

---

### omniPresetTurbo {#omnipresetturbo}

```go
omniPresetTurbo() VideoOmniOption
```

VideoOmniPresetTurbo / Flash / Plus 提供 forge 友好的预设

关键词: omniPresetTurbo, omniPresetFlash, omniPresetPlus

预设会强制覆盖 Preset 与 Model；若需要再覆盖 Model 请在 preset 之后再调用 WithVideoOmniModel

VideoOmniPresetTurbo 使用 turbo 预设（qwen-omni-turbo 模型，导出名为 liteforge.omniPresetTurbo）

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `VideoOmniOption` | omni 视频可选项 |

**示例**

``````````````yak
opt = liteforge.omniPresetTurbo()
println(opt)
``````````````

---

### omniProgressCallback {#omniprogresscallback}

```go
omniProgressCallback(cb func(*VideoOmniSegmentResult)) VideoOmniOption
```

WithVideoOmniProgressCallback 设置 omni 视频分析的进度回调（导出名为 liteforge.omniProgressCallback）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| cb | `func(*VideoOmniSegmentResult)` | 进度回调，参数为每段的分析结果 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `VideoOmniOption` | omni 视频可选项 |

**示例**

``````````````yak
opt = liteforge.omniProgressCallback(func(seg) { dump(seg) })
println(opt)
``````````````

---

### omniQueryPrompt {#omniqueryprompt}

```go
omniQueryPrompt(q string) VideoOmniOption
```

WithVideoOmniQueryPrompt 设置 omni 视频分析的查询提示词（导出名为 liteforge.omniQueryPrompt）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| q | `string` | 查询提示词 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `VideoOmniOption` | omni 视频可选项 |

**示例**

``````````````yak
opt = liteforge.omniQueryPrompt("summarize this video segment")
println(opt)
``````````````

---

### omniRateLimitRetry {#omniratelimitretry}

```go
omniRateLimitRetry(maxAttempts int, backoffBase time.Duration) VideoOmniOption
```

WithVideoOmniRateLimitRetry 设定 429 / 限速退避重试次数与基数。

关键词: WithVideoOmniRateLimitRetry, omni 视频限速重试

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| maxAttempts | `int` | 最大重试次数 |
| backoffBase | `time.Duration` | 退避基数（time.Duration） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `VideoOmniOption` | omni 视频可选项 |

**示例**

``````````````yak
opt = liteforge.omniRateLimitRetry(3, time.Second)
println(opt)
``````````````

---

### omniReencode {#omnireencode}

```go
omniReencode(b bool) VideoOmniOption
```

WithVideoOmniReencode 设置是否对视频切片重新编码（导出名为 liteforge.omniReencode）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| b | `bool` | 是否重新编码 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `VideoOmniOption` | omni 视频可选项 |

**示例**

``````````````yak
opt = liteforge.omniReencode(true)
println(opt)
``````````````

---

### omniSegmentInterval {#omnisegmentinterval}

```go
omniSegmentInterval(d time.Duration) VideoOmniOption
```

WithVideoOmniSegmentInterval 设置段间静默节流，&lt;=0 表示不节流。

关键词: WithVideoOmniSegmentInterval, omni 视频段间节流

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| d | `time.Duration` | 段间间隔（time.Duration） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `VideoOmniOption` | omni 视频可选项 |

**示例**

``````````````yak
opt = liteforge.omniSegmentInterval(time.Second)
println(opt)
``````````````

---

### omniSegmentSeconds {#omnisegmentseconds}

```go
omniSegmentSeconds(s float64) VideoOmniOption
```

WithVideoOmniSegmentSeconds 设置 omni 视频切片的时长（秒，导出名为 liteforge.omniSegmentSeconds）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| s | `float64` | 每段视频时长（秒） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `VideoOmniOption` | omni 视频可选项 |

**示例**

``````````````yak
opt = liteforge.omniSegmentSeconds(10)
println(opt)
``````````````

---

### omniSystemPrompt {#omnisystemprompt}

```go
omniSystemPrompt(p string) VideoOmniOption
```

WithVideoOmniSystemPrompt 设置 omni 视频分析的系统提示词（导出名为 liteforge.omniSystemPrompt）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| p | `string` | 系统提示词 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `VideoOmniOption` | omni 视频可选项 |

**示例**

``````````````yak
opt = liteforge.omniSystemPrompt("you are a video knowledge extractor")
println(opt)
``````````````

---

### omniTargetFPS {#omnitargetfps}

```go
omniTargetFPS(f float64) VideoOmniOption
```

WithVideoOmniTargetFPS 设置视频切片的目标帧率（导出名为 liteforge.omniTargetFPS）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| f | `float64` | 目标帧率 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `VideoOmniOption` | omni 视频可选项 |

**示例**

``````````````yak
opt = liteforge.omniTargetFPS(1.0)
println(opt)
``````````````

---

### omniTimeout {#omnitimeout}

```go
omniTimeout(d time.Duration) VideoOmniOption
```

WithVideoOmniTimeout 设置 omni 视频分析的超时时间（导出名为 liteforge.omniTimeout）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| d | `time.Duration` | 超时时间（time.Duration） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `VideoOmniOption` | omni 视频可选项 |

**示例**

``````````````yak
opt = liteforge.omniTimeout(300 * time.Second)
println(opt)
``````````````

---

### omniType {#omnitype}

```go
omniType(t string) VideoOmniOption
```

WithVideoOmniType 设置 omni 视频分析使用的 AI 类型（导出名为 liteforge.omniType）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| t | `string` | AI 类型 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `VideoOmniOption` | omni 视频可选项 |

**示例**

``````````````yak
opt = liteforge.omniType("openai")
println(opt)
``````````````

---

### omniZipDir {#omnizipdir}

```go
omniZipDir(dir string) VideoOmniOption
```

WithVideoOmniZipDir 指定 zip 输出目录，运行时自动按

{kbName|video-omni}-{model}-{ts}.zip 命名落盘。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| dir | `string` | zip 输出目录 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `VideoOmniOption` | omni 视频可选项 |

**示例**

``````````````yak
opt = liteforge.omniZipDir("/tmp")
println(opt)
``````````````

---

### omniZipFile {#omnizipfile}

```go
omniZipFile(p string) VideoOmniOption
```

WithVideoOmniZipFile 指定 zip 文件完整输出路径。

设置后会忽略 WithVideoOmniZipDir。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| p | `string` | zip 文件输出路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `VideoOmniOption` | omni 视频可选项 |

**示例**

``````````````yak
opt = liteforge.omniZipFile("/tmp/omni-result.zip")
println(opt)
``````````````

---

### output {#output}

```go
output(output string) LiteForgeExecOption
```

liteforge.output is an option for liteforge.Execute
it can limit the output of the liteforge.Execute
use `jsonschema.ActionObject` to limit the output to an object

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| output | `string` | JSON Schema 字符串，用于约束输出结构 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `LiteForgeExecOption` | liteforge 执行可选项 |

**示例**

``````````````yak
liteforge.Execute(<<<PROMPT
SOME_CONTENT
PROMPT, liteforge.output(jsonschema.ActionObject(jsonschema.paramString("value"))))
``````````````

---

### refinePrompt {#refineprompt}

```go
refinePrompt(prompt string) RefineOption
```

_refine_WithRefinePrompt 设置知识提炼使用的提示词（导出名为 liteforge.refinePrompt）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| prompt | `string` | 提炼提示词 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `RefineOption` | 知识构建可选项 |

**示例**

``````````````yak
opt = liteforge.refinePrompt("extract key concepts only")
println(opt)
``````````````

---

### strictRefine {#strictrefine}

```go
strictRefine(strict bool) RefineOption
```

_refine_WithStrict 设置知识提炼是否使用严格模式（导出名为 liteforge.strictRefine）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| strict | `bool` | 是否严格模式 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `RefineOption` | 知识构建可选项 |

**示例**

``````````````yak
opt = liteforge.strictRefine(true)
println(opt)
``````````````

---

## 可变参数函数详情

### AnalyzeVideoOmni {#analyzevideoomni}

```go
AnalyzeVideoOmni(video string, options ...any) (<-chan AnalysisResult, error)
```

把视频切片送进 omni 模型做端到端理解，按段返回 AnalysisResult。

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| video | `string` | 视频文件路径 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| options | `...any` | omni 视频可选项，如 liteforge.omniPresetFlash、liteforge.omniAPIKey 等 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `<-chan AnalysisResult` | 按段返回的分析结果 channel |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 需要可用的 omni 模型与 API Key（示意性示例）
ch = aiforge.AnalyzeVideoOmni("/tmp/demo.mp4", liteforge.omniPresetFlash(), liteforge.omniAPIKey("your-key"))~

	for result := range ch {
	    dump(result)
	}
``````````````

---

### BuildVideoKnowledgeFromOmni {#buildvideoknowledgefromomni}

```go
BuildVideoKnowledgeFromOmni(kbName string, video string, options ...any) (<-chan *schema.KnowledgeBaseEntry, error)
```

复用 _buildKnowledge 的 RAG/ERM 入库链路，
但分析阶段切换为 omni 端到端视频理解（AnalyzeVideoOmni），与既有
BuildKnowledgeFromFile 等保持完全独立，纯增量。

关键词: BuildVideoKnowledgeFromOmni, omni 视频建知识库

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| kbName | `string` | 目标知识库名称 |
| video | `string` | 视频文件路径 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| options | `...any` | omni 视频可选项，如 liteforge.omniPresetFlash、liteforge.omniAPIKey 等 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `<-chan *schema.KnowledgeBaseEntry` | 知识库条目 channel |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
ch, err := aiforge.BuildVideoKnowledgeFromOmni(
    "xss-learn-omni-flash", "/path/to/xss-learn.mp4",
    aiforge.VideoOmniPresetFlash(),
    aiforge.WithVideoOmniAPIKey(key),
)
``````````````

---

### Execute {#execute}

```go
Execute(query string, opts ...any) (*ForgeResult, error)
```

liteforge.Execute can create a temporary LiteForge instance and execute it with the given query.

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| query | `string` | 提示词/查询内容 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...any` | 执行可选项，如 liteforge.output、liteforge.action、liteforge.context 等 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*ForgeResult` | 执行结果对象（可通过 Get 读取字段） |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 需要配置可用的 AI 服务（示意性示例）
result = liteforge.Execute("extract the title",

	liteforge.output(jsonschema.ActionObject("object", jsonschema.paramString("value"))),

)~
dump(result)
``````````````

---

### forceImage {#forceimage}

```go
forceImage(force ...bool) LiteForgeExecOption
```

liteforge.forceImage is an option for liteforge.Execute
it forces the execution to require image input

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| force | `...bool` | 是否强制要求图片输入，缺省为 true |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `LiteForgeExecOption` | liteforge 执行可选项 |

**示例**

``````````````yak
liteforge.Execute(<<<PROMPT
SOME_CONTENT
PROMPT, liteforge.forceImage(true))
``````````````

---

### image {#image}

```go
image(anyImageInput ...any) LiteForgeExecOption
```

liteforge.image is an option for liteforge.Execute
it adds image data to the execution context

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| anyImageInput | `...any` | 一个或多个图片输入（字节、路径、base64 等） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `LiteForgeExecOption` | liteforge 执行可选项 |

**示例**

``````````````yak
liteforge.Execute(<<<PROMPT
SOME_CONTENT
PROMPT, liteforge.image(imageData))
``````````````

---

### imageFile {#imagefile}

```go
imageFile(filename ...string) LiteForgeExecOption
```

liteforge.imageFile is an option for liteforge.Execute
it adds image files to the execution context

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| filename | `...string` | 一个或多个图片文件路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `LiteForgeExecOption` | liteforge 执行可选项 |

**示例**

``````````````yak
liteforge.Execute(<<<PROMPT
SOME_CONTENT
PROMPT, liteforge.imageFile("path/to/image.jpg"))
``````````````

---

### speedPriority {#speedpriority}

```go
speedPriority(b ...bool) LiteForgeExecOption
```

liteforge.speedPriority uses a faster/cheaper AI model for distillation tasks

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| b | `...bool` | 是否启用速度优先，缺省为 true |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `LiteForgeExecOption` | liteforge 执行可选项 |

**示例**

``````````````yak
opt = liteforge.speedPriority(true)
println(opt)
``````````````

---

### verboseName {#verbosename}

```go
verboseName(opts ...aicommon.ConfigOption) LiteForgeExecOption
```

liteforge.verboseName is an option for liteforge.Execute
it adds verbose naming options to the execution

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...aicommon.ConfigOption` | 一个或多个底层 aicommon 配置选项 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `LiteForgeExecOption` | liteforge 执行可选项 |

**示例**

``````````````yak
liteforge.Execute(<<<PROMPT
SOME_CONTENT
PROMPT, liteforge.verboseName("my-forge-instance"))
``````````````

---

