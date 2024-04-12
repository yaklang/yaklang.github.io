# ai

|成员函数|函数描述/介绍|
|:------|:--------|
| [ai.Chat](#chat) ||
| [ai.ChatGLM](#chatglm) ||
| [ai.FunctionCall](#functioncall) ||
| [ai.Moonshot](#moonshot) ||
| [ai.OpenAI](#openai) ||
| [ai.apiKey](#apikey) ||
| [ai.baseURL](#baseurl) ||
| [ai.debugStream](#debugstream) ||
| [ai.domain](#domain) ||
| [ai.model](#model) ||
| [ai.noHttps](#nohttps) ||
| [ai.onStream](#onstream) ||
| [ai.proxy](#proxy) ||
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

`ChatGLM(opts ...aispec.AIConfigOption) aispec.AIGateway`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...aispec.AIConfigOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `aispec.AIGateway` |   |


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


### Moonshot

#### 详细描述


#### 定义

`Moonshot(opts ...aispec.AIConfigOption) aispec.AIGateway`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...aispec.AIConfigOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `aispec.AIGateway` |   |


### OpenAI

#### 详细描述


#### 定义

`OpenAI(opts ...aispec.AIConfigOption) aispec.AIGateway`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...aispec.AIConfigOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `aispec.AIGateway` |   |


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


