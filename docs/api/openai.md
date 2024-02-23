# openai

|成员函数|函数描述/介绍|
|:------|:--------|
| [openai.Chat](#chat) |Chat 使用 OpenAI 的大语言模型进行对话，返回对话结果  |
| [openai.FunctionCall](#functioncall) |FunctionCall 使用 OpenAI 的大语言模型的函数调用功能，描述一个函数并让模型智能地选择输出一个包含调用函数的参数的 JSON 对象  详情请参考 https://platform.openai.com/docs/guides/function-calling  @param {st...|
| [openai.TranslateToChinese](#translatetochinese) |TranslateToChinese 使用 OpenAI 的大语言模型将传入的字符串翻译为中文，还可以接收零个到多个配置选项，用于配置代理、API Key、模型等，返回翻译后的中文字符串  |
| [openai.apiKey](#apikey) |apiKey 设置 OpenAI的API Key  |
| [openai.domain](#domain) |domain 设置 OpenAI的第三方加速域名，用于加速访问  |
| [openai.functionParamType](#functionparamtype) |functionParamType 设置函数调用时的参数类型，默认为 "object"  |
| [openai.functionProperty](#functionproperty) |functionProperty 设置函数调用时的单个参数属性  |
| [openai.functionRequired](#functionrequired) |functionRequired 设置函数调用时的必须参数  |
| [openai.localAPIKey](#localapikey) ||
| [openai.model](#model) |model 设置 OpenAI的大语言模型  |
| [openai.proxy](#proxy) |proxy 设置调用 OpenAI 时使用的代理  |
| [openai.yakDomain](#yakdomain) ||


## 函数定义
### Chat

#### 详细描述
Chat 使用 OpenAI 的大语言模型进行对话，返回对话结果

Example:
```
result = openai.Chat("Hello, world!", openai.apiKey("sk-xxx"), openai.proxy("http://127.0.0.1:7890"))
```


#### 定义

`Chat(data string, opts ...ConfigOption) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| data | `string` |   |
| opts | `...ConfigOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### FunctionCall

#### 详细描述
FunctionCall 使用 OpenAI 的大语言模型的函数调用功能，描述一个函数并让模型智能地选择输出一个包含调用函数的参数的 JSON 对象

详情请参考 https://platform.openai.com/docs/guides/function-calling

@param {string} data 用户的提问或描述

@param {string} funcName 函数名

@param {string} funcDesc 函数描述

@param {ConfigOption} ...opts 配置选项，用于配置代理、API Key、模型等

@return {map[string]any} 返回一个包含调用函数的参数的映射

Example:
```
resultMap = openai.FunctionCall(
"What is the weather like in Boston?",
"get_current_weather",
"Get the current weather in a given location",
openai.apiKey("sk-xxxx"),
openai.proxy("http://127.0.0.1:7890"),
openai.functionProperty("location", "string", "The city and state, e.g. San Francisco, CA"),
openai.functionRequired("location"))
```


#### 定义

`FunctionCall(data string, funcName string, funcDesc string, opts ...ConfigOption) map[string]any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| data | `string` |   |
| funcName | `string` |   |
| funcDesc | `string` |   |
| opts | `...ConfigOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `map[string]any` |   |


### TranslateToChinese

#### 详细描述
TranslateToChinese 使用 OpenAI 的大语言模型将传入的字符串翻译为中文，还可以接收零个到多个配置选项，用于配置代理、API Key、模型等，返回翻译后的中文字符串

Example:
```
result = openai.TranslateToChinese("Hello, world!", openai.apiKey("sk-xxx"), openai.proxy("http://127.0.0.1:7890"))
```


#### 定义

`TranslateToChinese(data string, opts ...ConfigOption) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| data | `string` |   |
| opts | `...ConfigOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### apiKey

#### 详细描述
apiKey 设置 OpenAI的API Key

Example:
```
result = openai.TranslateToChinese("Hello, world!", openai.apiKey("sk-xxx"))
```


#### 定义

`apiKey(i string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### domain

#### 详细描述
domain 设置 OpenAI的第三方加速域名，用于加速访问

Example:
```
result = openai.TranslateToChinese("Hello, world!", openai.apiKey("sk-xxx"), openai.domain("api.ai.yaklang.com"))
```


#### 定义

`domain(i string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### functionParamType

#### 详细描述
functionParamType 设置函数调用时的参数类型，默认为 "object"

Example:
```
resultMap = openai.FunctionCall(
"What is the weather like in Boston?",
"get_current_weather",
"Get the current weather in a given location",
openai.apiKey("sk-xxxx"),
openai.proxy("http://127.0.0.1:7890"),
openai.functionProperty("location", "string", "The city and state, e.g. San Francisco, CA"),
openai.functionRequired("location"))
```


#### 定义

`functionParamType(i string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### functionProperty

#### 详细描述
functionProperty 设置函数调用时的单个参数属性

Example:
```
resultMap = openai.FunctionCall(
"What is the weather like in Boston?",
"get_current_weather",
"Get the current weather in a given location",
openai.apiKey("sk-xxxx"),
openai.proxy("http://127.0.0.1:7890"),
openai.functionProperty("location", "string", "The city and state, e.g. San Francisco, CA"),
openai.functionRequired("location"))
```


#### 定义

`functionProperty(name string, typ string, description string, enum ...[]string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| typ | `string` |   |
| description | `string` |   |
| enum | `...[]string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### functionRequired

#### 详细描述
functionRequired 设置函数调用时的必须参数

Example:
```
resultMap = openai.FunctionCall(
"What is the weather like in Boston?",
"get_current_weather",
"Get the current weather in a given location",
openai.apiKey("sk-xxxx"),
openai.proxy("http://127.0.0.1:7890"),
openai.functionProperty("location", "string", "The city and state, e.g. San Francisco, CA"),
openai.functionRequired("location"))
```


#### 定义

`functionRequired(names ...string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| names | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### localAPIKey

#### 详细描述


#### 定义

`localAPIKey(client *Client)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| client | `*Client` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `` |   |


### model

#### 详细描述
model 设置 OpenAI的大语言模型

Example:
```
result = openai.TranslateToChinese("Hello, world!", openai.apiKey("sk-xxx"), openai.model("gpt-4-0613"))
```


#### 定义

`model(i string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### proxy

#### 详细描述
proxy 设置调用 OpenAI 时使用的代理

Example:
```
result = openai.TranslateToChinese("Hello, world!", openai.apiKey("sk-xxx"), openai.proxy("http://127.0.0.1:7890"))
```


#### 定义

`proxy(i string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### yakDomain

#### 详细描述


#### 定义

`yakDomain(client *Client)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| client | `*Client` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `` |   |


