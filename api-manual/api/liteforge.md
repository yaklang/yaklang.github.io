# liteforge

|函数名|函数描述/介绍|
|:------|:--------|
| [liteforge.AnalyzeVideoOmni](#analyzevideoomni) |AnalyzeVideoOmni 把视频切片送进 omni 模型做端到端理解，按段返回 AnalysisResult。  example:  	ch, err := aiforge.AnalyzeVideoOmni(&amp;#34;xss-learn.mp4&amp;#34;, 	    aiforge.Vide...|
| [liteforge.BuildVideoKnowledgeFromOmni](#buildvideoknowledgefromomni) |BuildVideoKnowledgeFromOmni 复用 _buildKnowledge 的 RAG/ERM 入库链路， 但分析阶段切换为 omni 端到端视频理解（AnalyzeVideoOmni），与既有 BuildKnowledgeFromFile 等保持完全独立，纯增量。  关键词: B...|
| [liteforge.Execute](#execute) ||
| [liteforge.action](#action) |liteforge.action is an option for liteforge.Execute it sets the action type for the liteforge execution,  example: ``` liteforge.Execute(&amp;lt;&amp;lt;&amp;lt;P...|
| [liteforge.analyzeCtx](#analyzectx) ||
| [liteforge.analyzeLog](#analyzelog) ||
| [liteforge.analyzeStatusCard](#analyzestatuscard) ||
| [liteforge.context](#context) |liteforge.context is an option for liteforge.Execute it sets the context for the liteforge execution  example: ``` liteforge.Execute(&amp;lt;&amp;lt;&amp;lt;PROMP...|
| [liteforge.forceImage](#forceimage) |liteforge.forceImage is an option for liteforge.Execute it forces the execution to require image input  example: ``` liteforge.Execute(&amp;lt;&amp;lt;&amp;lt;PRO...|
| [liteforge.id](#id) |liteforge.id is an option for liteforge.Execute it sets the ID for the liteforge instance  example: ``` liteforge.Execute(&amp;lt;&amp;lt;&amp;lt;PROMPT SOME_CONT...|
| [liteforge.image](#image) |liteforge.image is an option for liteforge.Execute it adds image data to the execution context  example: ``` liteforge.Execute(&amp;lt;&amp;lt;&amp;lt;PROMPT SOME...|
| [liteforge.imageExtraPrompt](#imageextraprompt) ||
| [liteforge.imageFile](#imagefile) |liteforge.imageFile is an option for liteforge.Execute it adds image files to the execution context  example: ``` liteforge.Execute(&amp;lt;&amp;lt;&amp;lt;PROMPT...|
| [liteforge.knowledgeBaseDesc](#knowledgebasedesc) ||
| [liteforge.knowledgeBaseName](#knowledgebasename) ||
| [liteforge.knowledgeBaseType](#knowledgebasetype) ||
| [liteforge.knowledgeEntryLength](#knowledgeentrylength) ||
| [liteforge.omniAPIKey](#omniapikey) ||
| [liteforge.omniBaseURL](#omnibaseurl) ||
| [liteforge.omniContext](#omnicontext) ||
| [liteforge.omniMaxBase64Bytes](#omnimaxbase64bytes) ||
| [liteforge.omniMaxHeight](#omnimaxheight) ||
| [liteforge.omniMaxSegments](#omnimaxsegments) ||
| [liteforge.omniModel](#omnimodel) ||
| [liteforge.omniPresetFlash](#omnipresetflash) ||
| [liteforge.omniPresetPlus](#omnipresetplus) ||
| [liteforge.omniPresetTurbo](#omnipresetturbo) ||
| [liteforge.omniProgressCallback](#omniprogresscallback) ||
| [liteforge.omniQueryPrompt](#omniqueryprompt) ||
| [liteforge.omniRateLimitRetry](#omniratelimitretry) |WithVideoOmniRateLimitRetry 设定 429 / 限速退避重试次数与基数。 关键词: WithVideoOmniRateLimitRetry, omni 视频限速重试 |
| [liteforge.omniReencode](#omnireencode) ||
| [liteforge.omniSegmentInterval](#omnisegmentinterval) |WithVideoOmniSegmentInterval 设置段间静默节流，&amp;lt;=0 表示不节流。 关键词: WithVideoOmniSegmentInterval, omni 视频段间节流 |
| [liteforge.omniSegmentSeconds](#omnisegmentseconds) ||
| [liteforge.omniSystemPrompt](#omnisystemprompt) ||
| [liteforge.omniTargetFPS](#omnitargetfps) ||
| [liteforge.omniTimeout](#omnitimeout) ||
| [liteforge.omniType](#omnitype) ||
| [liteforge.omniZipDir](#omnizipdir) |WithVideoOmniZipDir 指定 zip 输出目录，运行时自动按 &#123;kbName|video-omni&#125;-&#123;model&#125;-&#123;ts&#125;.zip 命名落盘。 |
| [liteforge.omniZipFile](#omnizipfile) |WithVideoOmniZipFile 指定 zip 文件完整输出路径。 设置后会忽略 WithVideoOmniZipDir。 |
| [liteforge.output](#output) |liteforge.output is an option for liteforge.Execute it can limit the output of the liteforge.Execute use `jsonschema.ActionObject` to limit the output...|
| [liteforge.refinePrompt](#refineprompt) ||
| [liteforge.speedPriority](#speedpriority) |liteforge.speedPriority uses a faster/cheaper AI model for distillation tasks |
| [liteforge.strictRefine](#strictrefine) ||
| [liteforge.verboseName](#verbosename) |liteforge.verboseName is an option for liteforge.Execute it adds verbose naming options to the execution  example: ``` liteforge.Execute(&amp;lt;&amp;lt;&amp;lt;P...|


## 函数定义
### AnalyzeVideoOmni

#### 详细描述
AnalyzeVideoOmni 把视频切片送进 omni 模型做端到端理解，按段返回 AnalysisResult。

example:

	ch, err := aiforge.AnalyzeVideoOmni(&#34;xss-learn.mp4&#34;,
	    aiforge.VideoOmniPresetFlash(),
	    aiforge.WithVideoOmniAPIKey(key),
	)

关键词: AnalyzeVideoOmni, omni 视频端到端


#### 定义

`AnalyzeVideoOmni(video string, options ...any) (&lt;-chan AnalysisResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| video | `string` |   |
| options | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `&lt;-chan AnalysisResult` |   |
| r2 | `error` |   |


### BuildVideoKnowledgeFromOmni

#### 详细描述
BuildVideoKnowledgeFromOmni 复用 _buildKnowledge 的 RAG/ERM 入库链路，
但分析阶段切换为 omni 端到端视频理解（AnalyzeVideoOmni），与既有
BuildKnowledgeFromFile 等保持完全独立，纯增量。

关键词: BuildVideoKnowledgeFromOmni, omni 视频建知识库

example:

	ch, err := aiforge.BuildVideoKnowledgeFromOmni(
	    &#34;xss-learn-omni-flash&#34;, &#34;/path/to/xss-learn.mp4&#34;,
	    aiforge.VideoOmniPresetFlash(),
	    aiforge.WithVideoOmniAPIKey(key),
	)


#### 定义

`BuildVideoKnowledgeFromOmni(kbName string, video string, options ...any) (&lt;-chan *schema.KnowledgeBaseEntry, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| kbName | `string` |   |
| video | `string` |   |
| options | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `&lt;-chan *schema.KnowledgeBaseEntry` |   |
| r2 | `error` |   |


### Execute

#### 详细描述


#### 定义

`Execute(query string, opts ...any) (*ForgeResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| query | `string` |   |
| opts | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ForgeResult` |   |
| r2 | `error` |   |


### action

#### 详细描述
liteforge.action is an option for liteforge.Execute
it sets the action type for the liteforge execution,

example:
```
liteforge.Execute(&lt;&lt;&lt;PROMPT
SOME_CONTENT
PROMPT, liteforge.action(&#34;analyze&#34;))
```


#### 定义

`action(action string) LiteForgeExecOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| action | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `LiteForgeExecOption` |   |


### analyzeCtx

#### 详细描述


#### 定义

`analyzeCtx(ctx context.Context) AnalysisOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AnalysisOption` |   |


### analyzeLog

#### 详细描述


#### 定义

`analyzeLog(handler func(format string, args ...any)) AnalysisOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| handler | `func(format string, args ...any)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AnalysisOption` |   |


### analyzeStatusCard

#### 详细描述


#### 定义

`analyzeStatusCard(handler func(id string, data any, tags ...string)) AnalysisOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| handler | `func(id string, data any, tags ...string)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AnalysisOption` |   |


### context

#### 详细描述
liteforge.context is an option for liteforge.Execute
it sets the context for the liteforge execution

example:
```
liteforge.Execute(&lt;&lt;&lt;PROMPT
SOME_CONTENT
PROMPT, liteforge.context(ctx))
```


#### 定义

`context(ctx context.Context) LiteForgeExecOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `LiteForgeExecOption` |   |


### forceImage

#### 详细描述
liteforge.forceImage is an option for liteforge.Execute
it forces the execution to require image input

example:
```
liteforge.Execute(&lt;&lt;&lt;PROMPT
SOME_CONTENT
PROMPT, liteforge.forceImage(true))
```


#### 定义

`forceImage(force ...bool) LiteForgeExecOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| force | `...bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `LiteForgeExecOption` |   |


### id

#### 详细描述
liteforge.id is an option for liteforge.Execute
it sets the ID for the liteforge instance

example:
```
liteforge.Execute(&lt;&lt;&lt;PROMPT
SOME_CONTENT
PROMPT, liteforge.id(&#34;my-forge-instance&#34;))
```


#### 定义

`id(id string) LiteForgeExecOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| id | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `LiteForgeExecOption` |   |


### image

#### 详细描述
liteforge.image is an option for liteforge.Execute
it adds image data to the execution context

example:
```
liteforge.Execute(&lt;&lt;&lt;PROMPT
SOME_CONTENT
PROMPT, liteforge.image(imageData))
```


#### 定义

`image(anyImageInput ...any) LiteForgeExecOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| anyImageInput | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `LiteForgeExecOption` |   |


### imageExtraPrompt

#### 详细描述


#### 定义

`imageExtraPrompt(prompt string) AnalysisOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| prompt | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AnalysisOption` |   |


### imageFile

#### 详细描述
liteforge.imageFile is an option for liteforge.Execute
it adds image files to the execution context

example:
```
liteforge.Execute(&lt;&lt;&lt;PROMPT
SOME_CONTENT
PROMPT, liteforge.imageFile(&#34;path/to/image.jpg&#34;))
```


#### 定义

`imageFile(filename ...string) LiteForgeExecOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| filename | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `LiteForgeExecOption` |   |


### knowledgeBaseDesc

#### 详细描述


#### 定义

`knowledgeBaseDesc(desc string) RefineOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| desc | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RefineOption` |   |


### knowledgeBaseName

#### 详细描述


#### 定义

`knowledgeBaseName(name string) RefineOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RefineOption` |   |


### knowledgeBaseType

#### 详细描述


#### 定义

`knowledgeBaseType(typ string) RefineOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| typ | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RefineOption` |   |


### knowledgeEntryLength

#### 详细描述


#### 定义

`knowledgeEntryLength(length int) RefineOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| length | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RefineOption` |   |


### omniAPIKey

#### 详细描述


#### 定义

`omniAPIKey(k string) VideoOmniOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| k | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `VideoOmniOption` |   |


### omniBaseURL

#### 详细描述


#### 定义

`omniBaseURL(u string) VideoOmniOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| u | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `VideoOmniOption` |   |


### omniContext

#### 详细描述


#### 定义

`omniContext(ctx context.Context) VideoOmniOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `VideoOmniOption` |   |


### omniMaxBase64Bytes

#### 详细描述


#### 定义

`omniMaxBase64Bytes(n int64) VideoOmniOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `int64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `VideoOmniOption` |   |


### omniMaxHeight

#### 详细描述


#### 定义

`omniMaxHeight(h int) VideoOmniOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `VideoOmniOption` |   |


### omniMaxSegments

#### 详细描述


#### 定义

`omniMaxSegments(n int) VideoOmniOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `VideoOmniOption` |   |


### omniModel

#### 详细描述


#### 定义

`omniModel(m string) VideoOmniOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| m | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `VideoOmniOption` |   |


### omniPresetFlash

#### 详细描述


#### 定义

`omniPresetFlash()`


### omniPresetPlus

#### 详细描述


#### 定义

`omniPresetPlus()`


### omniPresetTurbo

#### 详细描述


#### 定义

`omniPresetTurbo()`


### omniProgressCallback

#### 详细描述


#### 定义

`omniProgressCallback(cb func(*VideoOmniSegmentResult)) VideoOmniOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cb | `func(*VideoOmniSegmentResult)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `VideoOmniOption` |   |


### omniQueryPrompt

#### 详细描述


#### 定义

`omniQueryPrompt(q string) VideoOmniOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| q | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `VideoOmniOption` |   |


### omniRateLimitRetry

#### 详细描述
WithVideoOmniRateLimitRetry 设定 429 / 限速退避重试次数与基数。
关键词: WithVideoOmniRateLimitRetry, omni 视频限速重试


#### 定义

`omniRateLimitRetry(maxAttempts int, backoffBase time.Duration) VideoOmniOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| maxAttempts | `int` |   |
| backoffBase | `time.Duration` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `VideoOmniOption` |   |


### omniReencode

#### 详细描述


#### 定义

`omniReencode(b bool) VideoOmniOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `VideoOmniOption` |   |


### omniSegmentInterval

#### 详细描述
WithVideoOmniSegmentInterval 设置段间静默节流，&lt;=0 表示不节流。
关键词: WithVideoOmniSegmentInterval, omni 视频段间节流


#### 定义

`omniSegmentInterval(d time.Duration) VideoOmniOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| d | `time.Duration` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `VideoOmniOption` |   |


### omniSegmentSeconds

#### 详细描述


#### 定义

`omniSegmentSeconds(s float64) VideoOmniOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `VideoOmniOption` |   |


### omniSystemPrompt

#### 详细描述


#### 定义

`omniSystemPrompt(p string) VideoOmniOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| p | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `VideoOmniOption` |   |


### omniTargetFPS

#### 详细描述


#### 定义

`omniTargetFPS(f float64) VideoOmniOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `VideoOmniOption` |   |


### omniTimeout

#### 详细描述


#### 定义

`omniTimeout(d time.Duration) VideoOmniOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| d | `time.Duration` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `VideoOmniOption` |   |


### omniType

#### 详细描述


#### 定义

`omniType(t string) VideoOmniOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| t | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `VideoOmniOption` |   |


### omniZipDir

#### 详细描述
WithVideoOmniZipDir 指定 zip 输出目录，运行时自动按
&#123;kbName|video-omni&#125;-&#123;model&#125;-&#123;ts&#125;.zip 命名落盘。


#### 定义

`omniZipDir(dir string) VideoOmniOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| dir | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `VideoOmniOption` |   |


### omniZipFile

#### 详细描述
WithVideoOmniZipFile 指定 zip 文件完整输出路径。
设置后会忽略 WithVideoOmniZipDir。


#### 定义

`omniZipFile(p string) VideoOmniOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| p | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `VideoOmniOption` |   |


### output

#### 详细描述
liteforge.output is an option for liteforge.Execute
it can limit the output of the liteforge.Execute
use `jsonschema.ActionObject` to limit the output to an object

example:
```
liteforge.Execute(&lt;&lt;&lt;PROMPT
SOME_CONTENTN
PROMPT, liteforge.output(jsonschema.ActionObject(jsonschema.paramString(&#34;value&#34;))),
```


#### 定义

`output(output string) LiteForgeExecOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| output | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `LiteForgeExecOption` |   |


### refinePrompt

#### 详细描述


#### 定义

`refinePrompt(prompt string) RefineOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| prompt | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RefineOption` |   |


### speedPriority

#### 详细描述
liteforge.speedPriority uses a faster/cheaper AI model for distillation tasks


#### 定义

`speedPriority(b ...bool) LiteForgeExecOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `...bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `LiteForgeExecOption` |   |


### strictRefine

#### 详细描述


#### 定义

`strictRefine(strict bool) RefineOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| strict | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RefineOption` |   |


### verboseName

#### 详细描述
liteforge.verboseName is an option for liteforge.Execute
it adds verbose naming options to the execution

example:
```
liteforge.Execute(&lt;&lt;&lt;PROMPT
SOME_CONTENT
PROMPT, liteforge.verboseName(&#34;my-forge-instance&#34;))
```


#### 定义

`verboseName(opts ...aicommon.ConfigOption) LiteForgeExecOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...aicommon.ConfigOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `LiteForgeExecOption` |   |


