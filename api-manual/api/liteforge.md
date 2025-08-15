# liteforge

|函数名|函数描述/介绍|
|:------|:--------|
| [liteforge.AnalyzeImage](#analyzeimage) ||
| [liteforge.AnalyzeImageFile](#analyzeimagefile) ||
| [liteforge.Execute](#execute) ||
| [liteforge.action](#action) |liteforge.action is an option for liteforge.Execute it sets the action type for the liteforge execution,  example: ``` liteforge.Execute(&amp;lt;&amp;lt;&amp;lt;P...|
| [liteforge.context](#context) |liteforge.context is an option for liteforge.Execute it sets the context for the liteforge execution  example: ``` liteforge.Execute(&amp;lt;&amp;lt;&amp;lt;PROMP...|
| [liteforge.forceImage](#forceimage) |liteforge.forceImage is an option for liteforge.Execute it forces the execution to require image input  example: ``` liteforge.Execute(&amp;lt;&amp;lt;&amp;lt;PRO...|
| [liteforge.id](#id) |liteforge.id is an option for liteforge.Execute it sets the ID for the liteforge instance  example: ``` liteforge.Execute(&amp;lt;&amp;lt;&amp;lt;PROMPT SOME_CONT...|
| [liteforge.image](#image) |liteforge.image is an option for liteforge.Execute it adds image data to the execution context  example: ``` liteforge.Execute(&amp;lt;&amp;lt;&amp;lt;PROMPT SOME...|
| [liteforge.imageExtraPrompt](#imageextraprompt) ||
| [liteforge.imageFile](#imagefile) |liteforge.imageFile is an option for liteforge.Execute it adds image files to the execution context  example: ``` liteforge.Execute(&amp;lt;&amp;lt;&amp;lt;PROMPT...|
| [liteforge.output](#output) |liteforge.output is an option for liteforge.Execute it can limit the output of the liteforge.Execute use `jsonschema.ActionObject` to limit the output...|
| [liteforge.verboseName](#verbosename) |liteforge.verboseName is an option for liteforge.Execute it adds verbose naming options to the execution  example: ``` liteforge.Execute(&amp;lt;&amp;lt;&amp;lt;P...|


## 函数定义
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

`imageExtraPrompt(prompt string) imageAnalysisOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| prompt | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `imageAnalysisOption` |   |


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


