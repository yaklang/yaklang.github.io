# ai

|函数名|函数描述/介绍|
|:------|:--------|
| [ai.Chat](#chat) ||
| [ai.ChatGLM](#chatglm) ||
| [ai.FunctionCall](#functioncall) ||
| [ai.ListModelByProviderType](#listmodelbyprovidertype) ||
| [ai.ListModels](#listmodels) ||
| [ai.LoadAIService](#loadaiservice) ||
| [ai.Moonshot](#moonshot) ||
| [ai.OpenAI](#openai) ||
| [ai.StructuredStream](#structuredstream) ||
| [ai.apiKey](#apikey) ||
| [ai.baseURL](#baseurl) ||
| [ai.debugStream](#debugstream) ||
| [ai.domain](#domain) ||
| [ai.funcCallRetryTimes](#funccallretrytimes) ||
| [ai.imageFile](#imagefile) ||
| [ai.model](#model) ||
| [ai.noHttps](#nohttps) ||
| [ai.onReasonStream](#onreasonstream) ||
| [ai.onStream](#onstream) ||
| [ai.proxy](#proxy) ||
| [ai.thinking](#thinking) ||
| [ai.timeout](#timeout) ||
| [ai.type](#type) ||


## 函数定义
### Chat

#### 详细描述


#### 定义

`Chat(msg string, opts ...aispec.AIConfigOption) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| msg | `string` |   |
| opts | `...aispec.AIConfigOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


### ChatGLM

#### 详细描述


#### 定义

`ChatGLM(opts ...aispec.AIConfigOption) aispec.AIClient`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...aispec.AIConfigOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `aispec.AIClient` |   |


### FunctionCall

#### 详细描述


#### 定义

`FunctionCall(input string, funcs any, opts ...aispec.AIConfigOption) (map[string]any, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| input | `string` |   |
| funcs | `any` |   |
| opts | `...aispec.AIConfigOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `map[string]any` |   |
| r2 | `error` |   |


### ListModelByProviderType

#### 详细描述


#### 定义

`ListModelByProviderType(providerType string, opts ...aispec.AIConfigOption) ([]*aispec.ModelMeta, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| providerType | `string` |   |
| opts | `...aispec.AIConfigOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*aispec.ModelMeta` |   |
| r2 | `error` |   |


### ListModels

#### 详细描述


#### 定义

`ListModels(opts ...aispec.AIConfigOption) ([]*aispec.ModelMeta, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...aispec.AIConfigOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*aispec.ModelMeta` |   |
| r2 | `error` |   |


### LoadAIService

#### 详细描述


#### 定义

`LoadAIService(typeName string, opts ...aispec.AIConfigOption) (AICallbackType, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| typeName | `string` |   |
| opts | `...aispec.AIConfigOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AICallbackType` |   |
| r2 | `error` |   |


### Moonshot

#### 详细描述


#### 定义

`Moonshot(opts ...aispec.AIConfigOption) aispec.AIClient`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...aispec.AIConfigOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `aispec.AIClient` |   |


### OpenAI

#### 详细描述


#### 定义

`OpenAI(opts ...aispec.AIConfigOption) aispec.AIClient`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...aispec.AIConfigOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `aispec.AIClient` |   |


### StructuredStream

#### 详细描述


#### 定义

`StructuredStream(input string, opts ...aispec.AIConfigOption) (chan *aispec.StructuredData, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| input | `string` |   |
| opts | `...aispec.AIConfigOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *aispec.StructuredData` |   |
| r2 | `error` |   |


### apiKey

#### 详细描述


#### 定义

`apiKey(k string) AIConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| k | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIConfigOption` |   |


### baseURL

#### 详细描述


#### 定义

`baseURL(baseURL string) AIConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| baseURL | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIConfigOption` |   |


### debugStream

#### 详细描述


#### 定义

`debugStream(h ...bool) AIConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `...bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIConfigOption` |   |


### domain

#### 详细描述


#### 定义

`domain(domain string) AIConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| domain | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIConfigOption` |   |


### funcCallRetryTimes

#### 详细描述


#### 定义

`funcCallRetryTimes(times int) AIConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| times | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIConfigOption` |   |


### imageFile

#### 详细描述


#### 定义

`imageFile(i string) AIConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIConfigOption` |   |


### model

#### 详细描述


#### 定义

`model(model string) AIConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| model | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIConfigOption` |   |


### noHttps

#### 详细描述


#### 定义

`noHttps(b bool) AIConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIConfigOption` |   |


### onReasonStream

#### 详细描述


#### 定义

`onReasonStream(h func(io.Reader)) AIConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `func(io.Reader)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIConfigOption` |   |


### onStream

#### 详细描述


#### 定义

`onStream(h func(io.Reader)) AIConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `func(io.Reader)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIConfigOption` |   |


### proxy

#### 详细描述


#### 定义

`proxy(p string) AIConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| p | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIConfigOption` |   |


### thinking

#### 详细描述


#### 定义

`thinking(t any) AIConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| t | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIConfigOption` |   |


### timeout

#### 详细描述


#### 定义

`timeout(timeout float64) AIConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| timeout | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIConfigOption` |   |


### type

#### 详细描述


#### 定义

`type(t string) AIConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| t | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIConfigOption` |   |


