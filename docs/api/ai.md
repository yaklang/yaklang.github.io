# ai

|成员函数|函数描述/介绍|
|:------|:--------|
| [ai.ChatGLM](#chatglm) ||
| [ai.Moonshot](#moonshot) ||
| [ai.OpenAI](#openai) ||
| [ai.apiKey](#apikey) ||
| [ai.baseURL](#baseurl) ||
| [ai.domain](#domain) ||
| [ai.model](#model) ||
| [ai.noHttps](#nohttps) ||
| [ai.proxy](#proxy) ||
| [ai.timeout](#timeout) ||


## 函数定义
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


