# liteforge

|函数名|函数描述/介绍|
|:------|:--------|
| [liteforge.AnalyzeVideoOmni](#analyzevideoomni) |AnalyzeVideoOmni 把视频切片送进 omni 模型做端到端理解，按段返回 AnalysisResult。|
| [liteforge.BuildVideoKnowledgeFromOmni](#buildvideoknowledgefromomni) |BuildVideoKnowledgeFromOmni 复用 _buildKnowledge 的 RAG/ERM 入库链路， 但分析阶段切换为 omni 端到端视频理解（AnalyzeVideoOmni），与既有 BuildKnowledgeFromFile 等保持完全独立，纯增量。 关键词: Bu...|
| [liteforge.Execute](#execute) ||
| [liteforge.action](#action) |liteforge.action is an option for liteforge.Execute it sets the action type for the liteforge execution,|
| [liteforge.analyzeCtx](#analyzectx) |WithAnalyzeContext 设置分析使用的上下文，用于控制取消（导出名为 liteforge.analyzeCtx） 参数: - ctx: 上下文对象 返回值: - 分析可选项|
| [liteforge.analyzeLog](#analyzelog) |WithAnalyzeLog 设置分析过程的日志回调（导出名为 liteforge.analyzeLog） 参数: - handler: 日志回调函数，参数为格式化字符串与参数 返回值: - 分析可选项|
| [liteforge.analyzeStatusCard](#analyzestatuscard) |WithAnalyzeStatusCard 设置分析过程的状态卡片回调（导出名为 liteforge.analyzeStatusCard） 参数: - handler: 状态卡片回调，参数为 (id, data, tags...) 返回值: - 分析可选项|
| [liteforge.context](#context) |liteforge.context is an option for liteforge.Execute it sets the context for the liteforge execution|
| [liteforge.forceImage](#forceimage) |liteforge.forceImage is an option for liteforge.Execute it forces the execution to require image input|
| [liteforge.id](#id) |liteforge.id is an option for liteforge.Execute it sets the ID for the liteforge instance|
| [liteforge.image](#image) |liteforge.image is an option for liteforge.Execute it adds image data to the execution context|
| [liteforge.imageExtraPrompt](#imageextraprompt) |WithExtraPrompt 为图片/上下文分析追加额外提示词（导出名为 liteforge.imageExtraPrompt） 参数: - prompt: 额外提示词 返回值: - 分析可选项|
| [liteforge.imageFile](#imagefile) |liteforge.imageFile is an option for liteforge.Execute it adds image files to the execution context|
| [liteforge.knowledgeBaseDesc](#knowledgebasedesc) |RefineWithKnowledgeBaseDesc 设置生成知识库的描述（导出名为 liteforge.knowledgeBaseDesc） 参数: - desc: 知识库描述 返回值: - 知识构建可选项|
| [liteforge.knowledgeBaseName](#knowledgebasename) |RefineWithKnowledgeBaseName 设置生成知识库的名称（导出名为 liteforge.knowledgeBaseName） 参数: - name: 知识库名称 返回值: - 知识构建可选项|
| [liteforge.knowledgeBaseType](#knowledgebasetype) |RefineWithKnowledgeBaseType 设置生成知识库的类型（导出名为 liteforge.knowledgeBaseType） 参数: - typ: 知识库类型 返回值: - 知识构建可选项|
| [liteforge.knowledgeEntryLength](#knowledgeentrylength) |RefineWithKnowledgeEntryLength 设置每条知识条目的目标长度（导出名为 liteforge.knowledgeEntryLength） 参数: - length: 知识条目长度 返回值: - 知识构建可选项|
| [liteforge.omniAPIKey](#omniapikey) |WithVideoOmniAPIKey 设置 omni 视频分析使用的 API Key（导出名为 liteforge.omniAPIKey） 参数: - k: API Key 返回值: - omni 视频可选项|
| [liteforge.omniBaseURL](#omnibaseurl) |WithVideoOmniBaseURL 设置 omni 视频分析使用的 API 基础地址（导出名为 liteforge.omniBaseURL） 参数: - u: API 基础地址 返回值: - omni 视频可选项|
| [liteforge.omniContext](#omnicontext) |WithVideoOmniContext 设置 omni 视频分析的上下文（导出名为 liteforge.omniContext） 参数: - ctx: 上下文对象 返回值: - omni 视频可选项|
| [liteforge.omniMaxBase64Bytes](#omnimaxbase64bytes) |WithVideoOmniMaxBase64Bytes 设置每段视频 base64 编码后的字节上限（导出名为 liteforge.omniMaxBase64Bytes） 参数: - n: 字节上限 返回值: - omni 视频可选项|
| [liteforge.omniMaxHeight](#omnimaxheight) |WithVideoOmniMaxHeight 设置视频切片的最大高度（导出名为 liteforge.omniMaxHeight） 参数: - h: 最大高度（像素） 返回值: - omni 视频可选项|
| [liteforge.omniMaxSegments](#omnimaxsegments) |WithVideoOmniMaxSegments 设置最多分析的视频段数（导出名为 liteforge.omniMaxSegments） 参数: - n: 最大段数 返回值: - omni 视频可选项|
| [liteforge.omniModel](#omnimodel) |WithVideoOmniModel 设置 omni 视频分析使用的模型（导出名为 liteforge.omniModel） 参数: - m: 模型名 返回值: - omni 视频可选项|
| [liteforge.omniPresetFlash](#omnipresetflash) ||
| [liteforge.omniPresetPlus](#omnipresetplus) ||
| [liteforge.omniPresetTurbo](#omnipresetturbo) ||
| [liteforge.omniProgressCallback](#omniprogresscallback) |WithVideoOmniProgressCallback 设置 omni 视频分析的进度回调（导出名为 liteforge.omniProgressCallback） 参数: - cb: 进度回调，参数为每段的分析结果 返回值: - omni 视频可选项|
| [liteforge.omniQueryPrompt](#omniqueryprompt) |WithVideoOmniQueryPrompt 设置 omni 视频分析的查询提示词（导出名为 liteforge.omniQueryPrompt） 参数: - q: 查询提示词 返回值: - omni 视频可选项|
| [liteforge.omniRateLimitRetry](#omniratelimitretry) |WithVideoOmniRateLimitRetry 设定 429 / 限速退避重试次数与基数。 关键词: WithVideoOmniRateLimitRetry, omni 视频限速重试 参数: - maxAttempts: 最大重试次数 - backoffBase: 退避基数（time.Dur...|
| [liteforge.omniReencode](#omnireencode) |WithVideoOmniReencode 设置是否对视频切片重新编码（导出名为 liteforge.omniReencode） 参数: - b: 是否重新编码 返回值: - omni 视频可选项|
| [liteforge.omniSegmentInterval](#omnisegmentinterval) |WithVideoOmniSegmentInterval 设置段间静默节流，&lt;=0 表示不节流。 关键词: WithVideoOmniSegmentInterval, omni 视频段间节流 参数: - d: 段间间隔（time.Duration） 返回值: - omni 视频可选项|
| [liteforge.omniSegmentSeconds](#omnisegmentseconds) |WithVideoOmniSegmentSeconds 设置 omni 视频切片的时长（秒，导出名为 liteforge.omniSegmentSeconds） 参数: - s: 每段视频时长（秒） 返回值: - omni 视频可选项|
| [liteforge.omniSystemPrompt](#omnisystemprompt) |WithVideoOmniSystemPrompt 设置 omni 视频分析的系统提示词（导出名为 liteforge.omniSystemPrompt） 参数: - p: 系统提示词 返回值: - omni 视频可选项|
| [liteforge.omniTargetFPS](#omnitargetfps) |WithVideoOmniTargetFPS 设置视频切片的目标帧率（导出名为 liteforge.omniTargetFPS） 参数: - f: 目标帧率 返回值: - omni 视频可选项|
| [liteforge.omniTimeout](#omnitimeout) |WithVideoOmniTimeout 设置 omni 视频分析的超时时间（导出名为 liteforge.omniTimeout） 参数: - d: 超时时间（time.Duration） 返回值: - omni 视频可选项|
| [liteforge.omniType](#omnitype) |WithVideoOmniType 设置 omni 视频分析使用的 AI 类型（导出名为 liteforge.omniType） 参数: - t: AI 类型 返回值: - omni 视频可选项|
| [liteforge.omniZipDir](#omnizipdir) |WithVideoOmniZipDir 指定 zip 输出目录，运行时自动按 {kbName\|video-omni}-{model}-{ts}.zip 命名落盘。 参数: - dir: zip 输出目录 返回值: - omni 视频可选项|
| [liteforge.omniZipFile](#omnizipfile) |WithVideoOmniZipFile 指定 zip 文件完整输出路径。 设置后会忽略 WithVideoOmniZipDir。 参数: - p: zip 文件输出路径 返回值: - omni 视频可选项|
| [liteforge.output](#output) |liteforge.output is an option for liteforge.Execute it can limit the output of the liteforge.Execute use `jsonschema.ActionObject` to limit the output...|
| [liteforge.refinePrompt](#refineprompt) |_refine_WithRefinePrompt 设置知识提炼使用的提示词（导出名为 liteforge.refinePrompt） 参数: - prompt: 提炼提示词 返回值: - 知识构建可选项|
| [liteforge.speedPriority](#speedpriority) |liteforge.speedPriority uses a faster/cheaper AI model for distillation tasks 参数: - b: 是否启用速度优先，缺省为 true 返回值: - liteforge 执行可选项|
| [liteforge.strictRefine](#strictrefine) |_refine_WithStrict 设置知识提炼是否使用严格模式（导出名为 liteforge.strictRefine） 参数: - strict: 是否严格模式 返回值: - 知识构建可选项|
| [liteforge.verboseName](#verbosename) |liteforge.verboseName is an option for liteforge.Execute it adds verbose naming options to the execution|


## 函数定义
### AnalyzeVideoOmni

#### 详细描述
AnalyzeVideoOmni 把视频切片送进 omni 模型做端到端理解，按段返回 AnalysisResult。




Example:

``````````````yak
ch, err := aiforge.AnalyzeVideoOmni("xss-learn.mp4",

	    aiforge.VideoOmniPresetFlash(),

	    aiforge.WithVideoOmniAPIKey(key),

	)



关键词: AnalyzeVideoOmni, omni 视频端到端

参数:

  - video: 视频文件路径

  - options: omni 视频可选项，如 liteforge.omniPresetFlash、liteforge.omniAPIKey 等



返回值:

  - 按段返回的分析结果 channel

  - 错误信息



Example:
// 需要可用的 omni 模型与 API Key（示意性示例）
ch = aiforge.AnalyzeVideoOmni("/tmp/demo.mp4", liteforge.omniPresetFlash(), liteforge.omniAPIKey("your-key"))~

	for result := range ch {
	    dump(result)
	}
``````````````


#### 定义

`AnalyzeVideoOmni(video string, options ...any) (<-chan AnalysisResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| video | `string` | 视频文件路径 |
| options | `...any` | omni 视频可选项，如 liteforge.omniPresetFlash、liteforge.omniAPIKey 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `<-chan AnalysisResult` | 按段返回的分析结果 channel |
| r2 | `error` | 错误信息 |


### BuildVideoKnowledgeFromOmni

#### 详细描述
BuildVideoKnowledgeFromOmni 复用 _buildKnowledge 的 RAG/ERM 入库链路，
但分析阶段切换为 omni 端到端视频理解（AnalyzeVideoOmni），与既有
BuildKnowledgeFromFile 等保持完全独立，纯增量。

关键词: BuildVideoKnowledgeFromOmni, omni 视频建知识库


Example:

``````````````yak
ch, err := aiforge.BuildVideoKnowledgeFromOmni(
	    "xss-learn-omni-flash", "/path/to/xss-learn.mp4",
	    aiforge.VideoOmniPresetFlash(),
	    aiforge.WithVideoOmniAPIKey(key),
	)

参数:
  - kbName: 目标知识库名称
  - video: 视频文件路径
  - options: omni 视频可选项，如 liteforge.omniPresetFlash、liteforge.omniAPIKey 等

返回值:
  - 知识库条目 channel
  - 错误信息
``````````````


#### 定义

`BuildVideoKnowledgeFromOmni(kbName string, video string, options ...any) (<-chan *schema.KnowledgeBaseEntry, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| kbName | `string` | 目标知识库名称 |
| video | `string` | 视频文件路径 |
| options | `...any` | omni 视频可选项，如 liteforge.omniPresetFlash、liteforge.omniAPIKey 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `<-chan *schema.KnowledgeBaseEntry` | 知识库条目 channel |
| r2 | `error` | 错误信息 |


### Execute

#### 详细描述
暂无描述

#### 定义

`Execute(query string, opts ...any) (*ForgeResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| query | `string` |  |
| opts | `...any` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ForgeResult` |  |
| r2 | `error` |  |


### action

#### 详细描述
liteforge.action is an option for liteforge.Execute
it sets the action type for the liteforge execution,


Example:

``````````````yak
liteforge.Execute(<<<PROMPT
SOME_CONTENT
PROMPT, liteforge.action("analyze"))

参数:
  - action: 输出的 action 类型

返回值:
  - liteforge 执行可选项
``````````````


#### 定义

`action(action string) LiteForgeExecOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| action | `string` | 输出的 action 类型 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `LiteForgeExecOption` | liteforge 执行可选项 |


### analyzeCtx

#### 详细描述
WithAnalyzeContext 设置分析使用的上下文，用于控制取消（导出名为 liteforge.analyzeCtx）

参数:

  - ctx: 上下文对象



返回值:

  - 分析可选项




Example:

``````````````yak
opt = liteforge.analyzeCtx(context.Background())
println(opt)
``````````````


#### 定义

`analyzeCtx(ctx context.Context) AnalysisOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` | 上下文对象 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AnalysisOption` | 分析可选项 |


### analyzeLog

#### 详细描述
WithAnalyzeLog 设置分析过程的日志回调（导出名为 liteforge.analyzeLog）

参数:

  - handler: 日志回调函数，参数为格式化字符串与参数



返回值:

  - 分析可选项




Example:

``````````````yak
opt = liteforge.analyzeLog(func(format, args...) { println(sprintf(format, args...)) })
println(opt)
``````````````


#### 定义

`analyzeLog(handler func(format string, args ...any)) AnalysisOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| handler | `func(format string, args ...any)` | 日志回调函数，参数为格式化字符串与参数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AnalysisOption` | 分析可选项 |


### analyzeStatusCard

#### 详细描述
WithAnalyzeStatusCard 设置分析过程的状态卡片回调（导出名为 liteforge.analyzeStatusCard）

参数:

  - handler: 状态卡片回调，参数为 (id, data, tags...)



返回值:

  - 分析可选项




Example:

``````````````yak
opt = liteforge.analyzeStatusCard(func(id, data, tags...) { println(id, data) })
println(opt)
``````````````


#### 定义

`analyzeStatusCard(handler func(id string, data any, tags ...string)) AnalysisOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| handler | `func(id string, data any, tags ...string)` | 状态卡片回调，参数为 (id, data, tags...) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AnalysisOption` | 分析可选项 |


### context

#### 详细描述
liteforge.context is an option for liteforge.Execute
it sets the context for the liteforge execution


Example:

``````````````yak
liteforge.Execute(<<<PROMPT
SOME_CONTENT
PROMPT, liteforge.context(ctx))

参数:
  - ctx: 上下文，用于控制取消与超时

返回值:
  - liteforge 执行可选项
``````````````


#### 定义

`context(ctx context.Context) LiteForgeExecOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` | 上下文，用于控制取消与超时 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `LiteForgeExecOption` | liteforge 执行可选项 |


### forceImage

#### 详细描述
liteforge.forceImage is an option for liteforge.Execute
it forces the execution to require image input


Example:

``````````````yak
liteforge.Execute(<<<PROMPT
SOME_CONTENT
PROMPT, liteforge.forceImage(true))

参数:
  - force: 是否强制要求图片输入，缺省为 true

返回值:
  - liteforge 执行可选项
``````````````


#### 定义

`forceImage(force ...bool) LiteForgeExecOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| force | `...bool` | 是否强制要求图片输入，缺省为 true |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `LiteForgeExecOption` | liteforge 执行可选项 |


### id

#### 详细描述
liteforge.id is an option for liteforge.Execute
it sets the ID for the liteforge instance


Example:

``````````````yak
liteforge.Execute(<<<PROMPT
SOME_CONTENT
PROMPT, liteforge.id("my-forge-instance"))

参数:
  - id: liteforge 实例 ID

返回值:
  - liteforge 执行可选项
``````````````


#### 定义

`id(id string) LiteForgeExecOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| id | `string` | liteforge 实例 ID |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `LiteForgeExecOption` | liteforge 执行可选项 |


### image

#### 详细描述
liteforge.image is an option for liteforge.Execute
it adds image data to the execution context


Example:

``````````````yak
liteforge.Execute(<<<PROMPT
SOME_CONTENT
PROMPT, liteforge.image(imageData))

参数:
  - anyImageInput: 一个或多个图片输入（字节、路径、base64 等）

返回值:
  - liteforge 执行可选项
``````````````


#### 定义

`image(anyImageInput ...any) LiteForgeExecOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| anyImageInput | `...any` | 一个或多个图片输入（字节、路径、base64 等） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `LiteForgeExecOption` | liteforge 执行可选项 |


### imageExtraPrompt

#### 详细描述
WithExtraPrompt 为图片/上下文分析追加额外提示词（导出名为 liteforge.imageExtraPrompt）

参数:

  - prompt: 额外提示词



返回值:

  - 分析可选项




Example:

``````````````yak
opt = liteforge.imageExtraPrompt("focus on the error message in the screenshot")
println(opt)
``````````````


#### 定义

`imageExtraPrompt(prompt string) AnalysisOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| prompt | `string` | 额外提示词 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AnalysisOption` | 分析可选项 |


### imageFile

#### 详细描述
liteforge.imageFile is an option for liteforge.Execute
it adds image files to the execution context


Example:

``````````````yak
liteforge.Execute(<<<PROMPT
SOME_CONTENT
PROMPT, liteforge.imageFile("path/to/image.jpg"))

参数:
  - filename: 一个或多个图片文件路径

返回值:
  - liteforge 执行可选项
``````````````


#### 定义

`imageFile(filename ...string) LiteForgeExecOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| filename | `...string` | 一个或多个图片文件路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `LiteForgeExecOption` | liteforge 执行可选项 |


### knowledgeBaseDesc

#### 详细描述
RefineWithKnowledgeBaseDesc 设置生成知识库的描述（导出名为 liteforge.knowledgeBaseDesc）

参数:

  - desc: 知识库描述



返回值:

  - 知识构建可选项




Example:

``````````````yak
opt = liteforge.knowledgeBaseDesc("security related knowledge")
println(opt)
``````````````


#### 定义

`knowledgeBaseDesc(desc string) RefineOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| desc | `string` | 知识库描述 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RefineOption` | 知识构建可选项 |


### knowledgeBaseName

#### 详细描述
RefineWithKnowledgeBaseName 设置生成知识库的名称（导出名为 liteforge.knowledgeBaseName）

参数:

  - name: 知识库名称



返回值:

  - 知识构建可选项




Example:

``````````````yak
opt = liteforge.knowledgeBaseName("my-kb")
println(opt)
``````````````


#### 定义

`knowledgeBaseName(name string) RefineOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 知识库名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RefineOption` | 知识构建可选项 |


### knowledgeBaseType

#### 详细描述
RefineWithKnowledgeBaseType 设置生成知识库的类型（导出名为 liteforge.knowledgeBaseType）

参数:

  - typ: 知识库类型



返回值:

  - 知识构建可选项




Example:

``````````````yak
opt = liteforge.knowledgeBaseType("text")
println(opt)
``````````````


#### 定义

`knowledgeBaseType(typ string) RefineOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| typ | `string` | 知识库类型 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RefineOption` | 知识构建可选项 |


### knowledgeEntryLength

#### 详细描述
RefineWithKnowledgeEntryLength 设置每条知识条目的目标长度（导出名为 liteforge.knowledgeEntryLength）

参数:

  - length: 知识条目长度



返回值:

  - 知识构建可选项




Example:

``````````````yak
opt = liteforge.knowledgeEntryLength(512)
println(opt)
``````````````


#### 定义

`knowledgeEntryLength(length int) RefineOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| length | `int` | 知识条目长度 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RefineOption` | 知识构建可选项 |


### omniAPIKey

#### 详细描述
WithVideoOmniAPIKey 设置 omni 视频分析使用的 API Key（导出名为 liteforge.omniAPIKey）

参数:

  - k: API Key



返回值:

  - omni 视频可选项




Example:

``````````````yak
opt = liteforge.omniAPIKey("your-key")
println(opt)
``````````````


#### 定义

`omniAPIKey(k string) VideoOmniOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| k | `string` | API Key |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `VideoOmniOption` | omni 视频可选项 |


### omniBaseURL

#### 详细描述
WithVideoOmniBaseURL 设置 omni 视频分析使用的 API 基础地址（导出名为 liteforge.omniBaseURL）

参数:

  - u: API 基础地址



返回值:

  - omni 视频可选项




Example:

``````````````yak
opt = liteforge.omniBaseURL("https://dashscope.aliyuncs.com")
println(opt)
``````````````


#### 定义

`omniBaseURL(u string) VideoOmniOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| u | `string` | API 基础地址 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `VideoOmniOption` | omni 视频可选项 |


### omniContext

#### 详细描述
WithVideoOmniContext 设置 omni 视频分析的上下文（导出名为 liteforge.omniContext）

参数:

  - ctx: 上下文对象



返回值:

  - omni 视频可选项




Example:

``````````````yak
opt = liteforge.omniContext(context.Background())
println(opt)
``````````````


#### 定义

`omniContext(ctx context.Context) VideoOmniOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` | 上下文对象 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `VideoOmniOption` | omni 视频可选项 |


### omniMaxBase64Bytes

#### 详细描述
WithVideoOmniMaxBase64Bytes 设置每段视频 base64 编码后的字节上限（导出名为 liteforge.omniMaxBase64Bytes）

参数:

  - n: 字节上限



返回值:

  - omni 视频可选项




Example:

``````````````yak
opt = liteforge.omniMaxBase64Bytes(7 * 1024 * 1024)
println(opt)
``````````````


#### 定义

`omniMaxBase64Bytes(n int64) VideoOmniOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `int64` | 字节上限 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `VideoOmniOption` | omni 视频可选项 |


### omniMaxHeight

#### 详细描述
WithVideoOmniMaxHeight 设置视频切片的最大高度（导出名为 liteforge.omniMaxHeight）

参数:

  - h: 最大高度（像素）



返回值:

  - omni 视频可选项




Example:

``````````````yak
opt = liteforge.omniMaxHeight(720)
println(opt)
``````````````


#### 定义

`omniMaxHeight(h int) VideoOmniOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `int` | 最大高度（像素） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `VideoOmniOption` | omni 视频可选项 |


### omniMaxSegments

#### 详细描述
WithVideoOmniMaxSegments 设置最多分析的视频段数（导出名为 liteforge.omniMaxSegments）

参数:

  - n: 最大段数



返回值:

  - omni 视频可选项




Example:

``````````````yak
opt = liteforge.omniMaxSegments(10)
println(opt)
``````````````


#### 定义

`omniMaxSegments(n int) VideoOmniOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `int` | 最大段数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `VideoOmniOption` | omni 视频可选项 |


### omniModel

#### 详细描述
WithVideoOmniModel 设置 omni 视频分析使用的模型（导出名为 liteforge.omniModel）

参数:

  - m: 模型名



返回值:

  - omni 视频可选项




Example:

``````````````yak
opt = liteforge.omniModel("qwen-omni-turbo")
println(opt)
``````````````


#### 定义

`omniModel(m string) VideoOmniOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| m | `string` | 模型名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `VideoOmniOption` | omni 视频可选项 |


### omniPresetFlash

#### 详细描述
暂无描述

#### 定义

`omniPresetFlash()`


### omniPresetPlus

#### 详细描述
暂无描述

#### 定义

`omniPresetPlus()`


### omniPresetTurbo

#### 详细描述
暂无描述

#### 定义

`omniPresetTurbo()`


### omniProgressCallback

#### 详细描述
WithVideoOmniProgressCallback 设置 omni 视频分析的进度回调（导出名为 liteforge.omniProgressCallback）

参数:

  - cb: 进度回调，参数为每段的分析结果



返回值:

  - omni 视频可选项




Example:

``````````````yak
opt = liteforge.omniProgressCallback(func(seg) { dump(seg) })
println(opt)
``````````````


#### 定义

`omniProgressCallback(cb func(*VideoOmniSegmentResult)) VideoOmniOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cb | `func(*VideoOmniSegmentResult)` | 进度回调，参数为每段的分析结果 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `VideoOmniOption` | omni 视频可选项 |


### omniQueryPrompt

#### 详细描述
WithVideoOmniQueryPrompt 设置 omni 视频分析的查询提示词（导出名为 liteforge.omniQueryPrompt）

参数:

  - q: 查询提示词



返回值:

  - omni 视频可选项




Example:

``````````````yak
opt = liteforge.omniQueryPrompt("summarize this video segment")
println(opt)
``````````````


#### 定义

`omniQueryPrompt(q string) VideoOmniOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| q | `string` | 查询提示词 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `VideoOmniOption` | omni 视频可选项 |


### omniRateLimitRetry

#### 详细描述
WithVideoOmniRateLimitRetry 设定 429 / 限速退避重试次数与基数。

关键词: WithVideoOmniRateLimitRetry, omni 视频限速重试

参数:

  - maxAttempts: 最大重试次数

  - backoffBase: 退避基数（time.Duration）



返回值:

  - omni 视频可选项




Example:

``````````````yak
opt = liteforge.omniRateLimitRetry(3, time.Second)
println(opt)
``````````````


#### 定义

`omniRateLimitRetry(maxAttempts int, backoffBase time.Duration) VideoOmniOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| maxAttempts | `int` | 最大重试次数 |
| backoffBase | `time.Duration` | 退避基数（time.Duration） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `VideoOmniOption` | omni 视频可选项 |


### omniReencode

#### 详细描述
WithVideoOmniReencode 设置是否对视频切片重新编码（导出名为 liteforge.omniReencode）

参数:

  - b: 是否重新编码



返回值:

  - omni 视频可选项




Example:

``````````````yak
opt = liteforge.omniReencode(true)
println(opt)
``````````````


#### 定义

`omniReencode(b bool) VideoOmniOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` | 是否重新编码 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `VideoOmniOption` | omni 视频可选项 |


### omniSegmentInterval

#### 详细描述
WithVideoOmniSegmentInterval 设置段间静默节流，&lt;=0 表示不节流。

关键词: WithVideoOmniSegmentInterval, omni 视频段间节流

参数:

  - d: 段间间隔（time.Duration）



返回值:

  - omni 视频可选项




Example:

``````````````yak
opt = liteforge.omniSegmentInterval(time.Second)
println(opt)
``````````````


#### 定义

`omniSegmentInterval(d time.Duration) VideoOmniOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| d | `time.Duration` | 段间间隔（time.Duration） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `VideoOmniOption` | omni 视频可选项 |


### omniSegmentSeconds

#### 详细描述
WithVideoOmniSegmentSeconds 设置 omni 视频切片的时长（秒，导出名为 liteforge.omniSegmentSeconds）

参数:

  - s: 每段视频时长（秒）



返回值:

  - omni 视频可选项




Example:

``````````````yak
opt = liteforge.omniSegmentSeconds(10)
println(opt)
``````````````


#### 定义

`omniSegmentSeconds(s float64) VideoOmniOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `float64` | 每段视频时长（秒） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `VideoOmniOption` | omni 视频可选项 |


### omniSystemPrompt

#### 详细描述
WithVideoOmniSystemPrompt 设置 omni 视频分析的系统提示词（导出名为 liteforge.omniSystemPrompt）

参数:

  - p: 系统提示词



返回值:

  - omni 视频可选项




Example:

``````````````yak
opt = liteforge.omniSystemPrompt("you are a video knowledge extractor")
println(opt)
``````````````


#### 定义

`omniSystemPrompt(p string) VideoOmniOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| p | `string` | 系统提示词 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `VideoOmniOption` | omni 视频可选项 |


### omniTargetFPS

#### 详细描述
WithVideoOmniTargetFPS 设置视频切片的目标帧率（导出名为 liteforge.omniTargetFPS）

参数:

  - f: 目标帧率



返回值:

  - omni 视频可选项




Example:

``````````````yak
opt = liteforge.omniTargetFPS(1.0)
println(opt)
``````````````


#### 定义

`omniTargetFPS(f float64) VideoOmniOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `float64` | 目标帧率 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `VideoOmniOption` | omni 视频可选项 |


### omniTimeout

#### 详细描述
WithVideoOmniTimeout 设置 omni 视频分析的超时时间（导出名为 liteforge.omniTimeout）

参数:

  - d: 超时时间（time.Duration）



返回值:

  - omni 视频可选项




Example:

``````````````yak
opt = liteforge.omniTimeout(300 * time.Second)
println(opt)
``````````````


#### 定义

`omniTimeout(d time.Duration) VideoOmniOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| d | `time.Duration` | 超时时间（time.Duration） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `VideoOmniOption` | omni 视频可选项 |


### omniType

#### 详细描述
WithVideoOmniType 设置 omni 视频分析使用的 AI 类型（导出名为 liteforge.omniType）

参数:

  - t: AI 类型



返回值:

  - omni 视频可选项




Example:

``````````````yak
opt = liteforge.omniType("openai")
println(opt)
``````````````


#### 定义

`omniType(t string) VideoOmniOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| t | `string` | AI 类型 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `VideoOmniOption` | omni 视频可选项 |


### omniZipDir

#### 详细描述
WithVideoOmniZipDir 指定 zip 输出目录，运行时自动按

{kbName|video-omni}-{model}-{ts}.zip 命名落盘。

参数:

  - dir: zip 输出目录



返回值:

  - omni 视频可选项




Example:

``````````````yak
opt = liteforge.omniZipDir("/tmp")
println(opt)
``````````````


#### 定义

`omniZipDir(dir string) VideoOmniOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| dir | `string` | zip 输出目录 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `VideoOmniOption` | omni 视频可选项 |


### omniZipFile

#### 详细描述
WithVideoOmniZipFile 指定 zip 文件完整输出路径。

设置后会忽略 WithVideoOmniZipDir。

参数:

  - p: zip 文件输出路径



返回值:

  - omni 视频可选项




Example:

``````````````yak
opt = liteforge.omniZipFile("/tmp/omni-result.zip")
println(opt)
``````````````


#### 定义

`omniZipFile(p string) VideoOmniOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| p | `string` | zip 文件输出路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `VideoOmniOption` | omni 视频可选项 |


### output

#### 详细描述
liteforge.output is an option for liteforge.Execute
it can limit the output of the liteforge.Execute
use `jsonschema.ActionObject` to limit the output to an object


Example:

``````````````yak
liteforge.Execute(<<<PROMPT
SOME_CONTENTN
PROMPT, liteforge.output(jsonschema.ActionObject(jsonschema.paramString("value"))),

参数:
  - output: JSON Schema 字符串，用于约束输出结构

返回值:
  - liteforge 执行可选项
``````````````


#### 定义

`output(output string) LiteForgeExecOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| output | `string` | JSON Schema 字符串，用于约束输出结构 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `LiteForgeExecOption` | liteforge 执行可选项 |


### refinePrompt

#### 详细描述
_refine_WithRefinePrompt 设置知识提炼使用的提示词（导出名为 liteforge.refinePrompt）

参数:

  - prompt: 提炼提示词



返回值:

  - 知识构建可选项




Example:

``````````````yak
opt = liteforge.refinePrompt("extract key concepts only")
println(opt)
``````````````


#### 定义

`refinePrompt(prompt string) RefineOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| prompt | `string` | 提炼提示词 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RefineOption` | 知识构建可选项 |


### speedPriority

#### 详细描述
liteforge.speedPriority uses a faster/cheaper AI model for distillation tasks

参数:

  - b: 是否启用速度优先，缺省为 true



返回值:

  - liteforge 执行可选项




Example:

``````````````yak
opt = liteforge.speedPriority(true)
println(opt)
``````````````


#### 定义

`speedPriority(b ...bool) LiteForgeExecOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `...bool` | 是否启用速度优先，缺省为 true |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `LiteForgeExecOption` | liteforge 执行可选项 |


### strictRefine

#### 详细描述
_refine_WithStrict 设置知识提炼是否使用严格模式（导出名为 liteforge.strictRefine）

参数:

  - strict: 是否严格模式



返回值:

  - 知识构建可选项




Example:

``````````````yak
opt = liteforge.strictRefine(true)
println(opt)
``````````````


#### 定义

`strictRefine(strict bool) RefineOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| strict | `bool` | 是否严格模式 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RefineOption` | 知识构建可选项 |


### verboseName

#### 详细描述
liteforge.verboseName is an option for liteforge.Execute
it adds verbose naming options to the execution


Example:

``````````````yak
liteforge.Execute(<<<PROMPT
SOME_CONTENT
PROMPT, liteforge.verboseName("my-forge-instance"))

参数:
  - opts: 一个或多个底层 aicommon 配置选项

返回值:
  - liteforge 执行可选项
``````````````


#### 定义

`verboseName(opts ...aicommon.ConfigOption) LiteForgeExecOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...aicommon.ConfigOption` | 一个或多个底层 aicommon 配置选项 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `LiteForgeExecOption` | liteforge 执行可选项 |


