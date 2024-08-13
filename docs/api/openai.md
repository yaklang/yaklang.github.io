# openai

|函数名|函数描述/介绍|
|:------|:--------|
| [openai.Chat](#chat) |Chat 使用 OpenAI 的大语言模型进行对话，返回对话结果  @param {string} data 用户的提问或描述  @param {ConfigOption} ...opts 配置选项，用于配置代理、API Key、模型等  |
| [openai.ChatEx](#chatex) |ChatEx 使用 OpenAI 的大语言模型进行对话，返回对话结果结构体与错误  @param {[]ChatDetail} 聊天的消息上下文，可以通过openai.userMessage等创建  @param {ConfigOption} ...opts 配置选项，用于配置代理、API Key、...|
| [openai.FunctionCall](#functioncall) |FunctionCall 使用 OpenAI 的大语言模型的函数调用功能，描述一个函数并让模型智能地选择输出一个包含调用函数的参数的 JSON 对象  详情请参考 https://platform.openai.com/docs/guides/function-calling  @param {st...|
| [openai.NewSession](#newsession) ||
| [openai.TranslateToChinese](#translatetochinese) |TranslateToChinese 使用 OpenAI 的大语言模型将传入的字符串翻译为中文，还可以接收零个到多个配置选项，用于配置代理、API Key、模型等，返回翻译后的中文字符串  |
| [openai.apiKey](#apikey) |apiKey 设置 OpenAI的API Key  |
| [openai.assistantMessage](#assistantmessage) |assistantMessage 根据传入的内容构造并返回一个 OpenAI 助手信息  |
| [openai.domain](#domain) |domain 设置 OpenAI的第三方加速域名，用于加速访问  |
| [openai.functionParamType](#functionparamtype) |functionParamType 设置函数调用时的参数类型，默认为 &amp;#34;object&amp;#34;  |
| [openai.functionProperty](#functionproperty) |functionProperty 设置函数调用时的单个参数属性  |
| [openai.functionRequired](#functionrequired) |functionRequired 设置函数调用时的必须参数  |
| [openai.localAPIKey](#localapikey) ||
| [openai.model](#model) |model 设置 OpenAI的大语言模型  |
| [openai.newFunction](#newfunction) |newFunction 设置新的函数调用  详情请参考 https://platform.openai.com/docs/guides/function-calling  @param {string} name 函数名称  @param {string} description 函数描述  @pa...|
| [openai.proxy](#proxy) |proxy 设置调用 OpenAI 时使用的代理  |
| [openai.systemMessage](#systemmessage) |systemMessage 根据传入的内容构造并返回一个 OpenAI 系统信息  |
| [openai.toolMessage](#toolmessage) |toolMessage 根据传入的函数名,内容构造并返回一个 OpenAI 工具信息，用于指示工具返回结果  |
| [openai.toolMessageWithID](#toolmessagewithid) |toolMessageWithID 根据传入的ID,函数名,内容构造并返回一个 OpenAI 工具信息，用于指示工具返回结果  |
| [openai.userMessage](#usermessage) |userMessage 根据传入的内容构造并返回一个 OpenAI 用户信息  |
| [openai.yakDomain](#yakdomain) ||


## 函数定义
### Chat

#### 详细描述
Chat 使用 OpenAI 的大语言模型进行对话，返回对话结果

@param {string} data 用户的提问或描述

@param {ConfigOption} ...opts 配置选项，用于配置代理、API Key、模型等

Example:
```
result = openai.Chat(&#34;Hello, world!&#34;, openai.apiKey(&#34;sk-xxx&#34;), openai.proxy(&#34;http://127.0.0.1:7890&#34;))
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


### ChatEx

#### 详细描述
ChatEx 使用 OpenAI 的大语言模型进行对话，返回对话结果结构体与错误

@param {[]ChatDetail} 聊天的消息上下文，可以通过openai.userMessage等创建

@param {ConfigOption} ...opts 配置选项，用于配置代理、API Key、模型等

@return {ChatDetails} 包含对话结果的结构体

@return {error} 错误

Example:
```
d = openai.ChatEx(
[
openai.userMessage(&#34;What is the weather like in Boston?&#34;)
],
openai.newFunction(
&#34;get_current_weather&#34;,
&#34;Get the current weather in a given location&#34;,
openai.functionProperty(&#34;location&#34;, &#34;string&#34;, &#34;The city and state, e.g. San Francisco, CA&#34;),
openai.functionRequired(&#34;location&#34;),
),
openai.proxy(&#34;http://127.0.0.1:7890&#34;),
)~
println(d.FunctionCallResult())
```


#### 定义

`ChatEx(messages []aispec.ChatDetail, opts ...ConfigOption) (aispec.ChatDetails, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| messages | `[]aispec.ChatDetail` |   |
| opts | `...ConfigOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `aispec.ChatDetails` |   |
| r2 | `error` |   |


### FunctionCall

#### 详细描述
FunctionCall 使用 OpenAI 的大语言模型的函数调用功能，描述一个函数并让模型智能地选择输出一个包含调用函数的参数的 JSON 对象

详情请参考 https://platform.openai.com/docs/guides/function-calling

@param {string} data 用户的提问或描述

@param {string} funcName 函数名

@param {string} funcDesc 函数描述

@param {ConfigOption} ...opts 配置选项，用于配置代理、API Key、模型等

@return {map[string]any} 包含调用函数的参数的映射

Example:
```
resultMap = openai.FunctionCall(
&#34;What is the weather like in Boston?&#34;,
&#34;get_current_weather&#34;,
&#34;Get the current weather in a given location&#34;,
openai.apiKey(&#34;sk-xxxx&#34;),
openai.proxy(&#34;http://127.0.0.1:7890&#34;),
openai.functionProperty(&#34;location&#34;, &#34;string&#34;, &#34;The city and state, e.g. San Francisco, CA&#34;),
openai.functionRequired(&#34;location&#34;))
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


### NewSession

#### 详细描述


#### 定义

`NewSession(opt ...ConfigOption) *Session`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opt | `...ConfigOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*Session` |   |


### TranslateToChinese

#### 详细描述
TranslateToChinese 使用 OpenAI 的大语言模型将传入的字符串翻译为中文，还可以接收零个到多个配置选项，用于配置代理、API Key、模型等，返回翻译后的中文字符串

Example:
```
result = openai.TranslateToChinese(&#34;Hello, world!&#34;, openai.apiKey(&#34;sk-xxx&#34;), openai.proxy(&#34;http://127.0.0.1:7890&#34;))
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
result = openai.TranslateToChinese(&#34;Hello, world!&#34;, openai.apiKey(&#34;sk-xxx&#34;))
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


### assistantMessage

#### 详细描述
assistantMessage 根据传入的内容构造并返回一个 OpenAI 助手信息

Example:
```
d = openai.ChatEx(
[
openai.userMessage(&#34;What is the weather like today?&#34;),
openai.assistantMessage(&#34;72 degrees and sunny.&#34;),
openai.userMessage(&#34;What will the temperature be tomorrow?&#34;),
],
)~
```


#### 定义

`assistantMessage(content string) ChatDetail`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| content | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ChatDetail` |   |


### domain

#### 详细描述
domain 设置 OpenAI的第三方加速域名，用于加速访问

Example:
```
result = openai.TranslateToChinese(&#34;Hello, world!&#34;, openai.apiKey(&#34;sk-xxx&#34;), openai.domain(&#34;api.ai.yaklang.com&#34;))
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
functionParamType 设置函数调用时的参数类型，默认为 &amp;#34;object&amp;#34;

Example:
```
resultMap = openai.FunctionCall(
&#34;What is the weather like in Boston?&#34;,
&#34;get_current_weather&#34;,
&#34;Get the current weather in a given location&#34;,
openai.apiKey(&#34;sk-xxxx&#34;),
openai.proxy(&#34;http://127.0.0.1:7890&#34;),
openai.functionProperty(&#34;location&#34;, &#34;string&#34;, &#34;The city and state, e.g. San Francisco, CA&#34;),
openai.functionRequired(&#34;location&#34;))
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
&#34;What is the weather like in Boston?&#34;,
&#34;get_current_weather&#34;,
&#34;Get the current weather in a given location&#34;,
openai.apiKey(&#34;sk-xxxx&#34;),
openai.proxy(&#34;http://127.0.0.1:7890&#34;),
openai.functionProperty(&#34;location&#34;, &#34;string&#34;, &#34;The city and state, e.g. San Francisco, CA&#34;),
openai.functionRequired(&#34;location&#34;))
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
&#34;What is the weather like in Boston?&#34;,
&#34;get_current_weather&#34;,
&#34;Get the current weather in a given location&#34;,
openai.apiKey(&#34;sk-xxxx&#34;),
openai.proxy(&#34;http://127.0.0.1:7890&#34;),
openai.functionProperty(&#34;location&#34;, &#34;string&#34;, &#34;The city and state, e.g. San Francisco, CA&#34;),
openai.functionRequired(&#34;location&#34;))
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

`localAPIKey(client *Client) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| client | `*Client` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` |   |


### model

#### 详细描述
model 设置 OpenAI的大语言模型

Example:
```
result = openai.TranslateToChinese(&#34;Hello, world!&#34;, openai.apiKey(&#34;sk-xxx&#34;), openai.model(&#34;gpt-4-0613&#34;))
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


### newFunction

#### 详细描述
newFunction 设置新的函数调用

详情请参考 https://platform.openai.com/docs/guides/function-calling

@param {string} name 函数名称

@param {string} description 函数描述

@param {ConfigOption} ...opts 配置选项，接收openai.functionParamType,openai.functionProperty,openai.functionRequired

@return {ConfigOption} 配置选项

Example:
```
f = openai.newFunction(
&#34;get_current_weather&#34;,
&#34;Get the current weather in a given location&#34;,
openai.functionProperty(&#34;location&#34;, &#34;string&#34;, &#34;The city and state, e.g. San Francisco, CA&#34;),
openai.functionRequired(&#34;location&#34;),
)
d = openai.ChatEx(
[
openai.userMessage(&#34;What is the weather like in Boston?&#34;)
],
f,
openai.proxy(&#34;http://127.0.0.1:7890&#34;),
)~
println(d.FunctionCallResult())
```


#### 定义

`newFunction(name string, description string, opts ...ConfigOption) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| description | `string` |   |
| opts | `...ConfigOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### proxy

#### 详细描述
proxy 设置调用 OpenAI 时使用的代理

Example:
```
result = openai.TranslateToChinese(&#34;Hello, world!&#34;, openai.apiKey(&#34;sk-xxx&#34;), openai.proxy(&#34;http://127.0.0.1:7890&#34;))
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


### systemMessage

#### 详细描述
systemMessage 根据传入的内容构造并返回一个 OpenAI 系统信息

Example:
```
d = openai.ChatEx(
[
openai.systemMessage(&#34;The weather in Boston is 72 degrees and sunny.&#34;),
openai.userMessage(&#34;What is the weather like today?&#34;),
],
)~
```


#### 定义

`systemMessage(content string) ChatDetail`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| content | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ChatDetail` |   |


### toolMessage

#### 详细描述
toolMessage 根据传入的函数名,内容构造并返回一个 OpenAI 工具信息，用于指示工具返回结果

Example:
```
session = openai.NewSession(
openai.proxy(&#34;http://127.0.0.1:7890&#34;)
)
result = session.Chat(openai.userMessage(&#34;What is the weather like in Boston?&#34;),
openai.newFunction(
&#34;get_current_weather&#34;,
&#34;Get the current weather in a given location&#34;,
openai.functionProperty(&#34;location&#34;, &#34;string&#34;, &#34;The city and state, e.g. San Francisco, CA&#34;),
openai.functionRequired(&#34;location&#34;),
),
)~
result = session.Chat(openai.toolMessage(&#34;get_current_weather&#34;, `{&#34;degree&#34;:72,&#34;weather&#34;:&#34;sunny&#34;}`))~
println(result.String())
```


#### 定义

`toolMessage(name string, content string) ChatDetail`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| content | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ChatDetail` |   |


### toolMessageWithID

#### 详细描述
toolMessageWithID 根据传入的ID,函数名,内容构造并返回一个 OpenAI 工具信息，用于指示工具返回结果

Example:
```
session = openai.NewSession(
openai.proxy(&#34;http://127.0.0.1:7890&#34;)
)
result = session.Chat(openai.userMessage(&#34;What is the weather like in Boston?&#34;),
openai.newFunction(
&#34;get_current_weather&#34;,
&#34;Get the current weather in a given location&#34;,
openai.functionProperty(&#34;location&#34;, &#34;string&#34;, &#34;The city and state, e.g. San Francisco, CA&#34;),
openai.functionRequired(&#34;location&#34;),
),
)~
result = session.Chat(openai.toolMessage(&#34;get_current_weather&#34;, `{&#34;degree&#34;:72,&#34;weather&#34;:&#34;sunny&#34;}`))~
println(result.String())
```


#### 定义

`toolMessageWithID(id string, name string, content string) ChatDetail`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| id | `string` |   |
| name | `string` |   |
| content | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ChatDetail` |   |


### userMessage

#### 详细描述
userMessage 根据传入的内容构造并返回一个 OpenAI 用户信息

Example:
```
d = openai.ChatEx(
[
openai.systemMessage(&#34;The weather in Boston is 72 degrees and sunny.&#34;),
openai.userMessage(&#34;What is the weather like today?&#34;),
],
)~
```


#### 定义

`userMessage(content string) ChatDetail`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| content | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ChatDetail` |   |


### yakDomain

#### 详细描述


#### 定义

`yakDomain(client *Client) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| client | `*Client` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` |   |


