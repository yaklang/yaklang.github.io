# liteforge

|函数名|函数描述/介绍|
|:------|:--------|
| [liteforge.AnalyzeAudioFile](#analyzeaudiofile) ||
| [liteforge.AnalyzeERM](#analyzeerm) ||
| [liteforge.AnalyzeFile](#analyzefile) ||
| [liteforge.AnalyzeImage](#analyzeimage) ||
| [liteforge.AnalyzeImageFile](#analyzeimagefile) ||
| [liteforge.AnalyzeVideo](#analyzevideo) ||
| [liteforge.Execute](#execute) ||
| [liteforge.Refine](#refine) ||
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
| [liteforge.output](#output) |liteforge.output is an option for liteforge.Execute it can limit the output of the liteforge.Execute use `jsonschema.ActionObject` to limit the output...|
| [liteforge.refinePrompt](#refineprompt) ||
| [liteforge.strictRefine](#strictrefine) ||
| [liteforge.verboseName](#verbosename) |liteforge.verboseName is an option for liteforge.Execute it adds verbose naming options to the execution  example: ``` liteforge.Execute(&amp;lt;&amp;lt;&amp;lt;P...|


## 函数定义
### AnalyzeAudioFile

#### 详细描述


#### 定义

`AnalyzeAudioFile(audio string, opts ...any) (&lt;-chan *AudioAnalysisResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| audio | `string` |   |
| opts | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `&lt;-chan *AudioAnalysisResult` |   |
| r2 | `error` |   |


### AnalyzeERM

#### 详细描述


#### 定义

`AnalyzeERM(path string, option ...any) (*entitybase.EntityRepository, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` |   |
| option | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*entitybase.EntityRepository` |   |
| r2 | `error` |   |


### AnalyzeFile

#### 详细描述


#### 定义

`AnalyzeFile(path string, option ...any) (&lt;-chan AnalysisResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` |   |
| option | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `&lt;-chan AnalysisResult` |   |
| r2 | `error` |   |


### AnalyzeImage

#### 详细描述


#### 定义

`AnalyzeImage(image any, opts ...any) (*ImageAnalysisResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| image | `any` |   |
| opts | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ImageAnalysisResult` |   |
| r2 | `error` |   |


### AnalyzeImageFile

#### 详细描述


#### 定义

`AnalyzeImageFile(image string, opts ...any) (*ImageAnalysisResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| image | `string` |   |
| opts | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ImageAnalysisResult` |   |
| r2 | `error` |   |


### AnalyzeVideo

#### 详细描述


#### 定义

`AnalyzeVideo(video string, options ...any) (&lt;-chan AnalysisResult, error)`

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


### Refine

#### 详细描述


#### 定义

`Refine(path string, option ...any) (*knowledgebase.KnowledgeBase, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` |   |
| option | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*knowledgebase.KnowledgeBase` |   |
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

`verboseName(opts ...aid.Option) LiteForgeExecOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...aid.Option` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `LiteForgeExecOption` |   |


