# json

|函数名|函数描述/介绍|
|:------|:--------|
| [json.ExtractJSON](#extractjson) |ExtractJSON 从一段文本中提取并修复其中包含的所有 JSON 字符串（导出名为 json.ExtractJSON） 常用于从 AI 回复、日志等夹杂自然语言的文本中抽取 JSON 片段 参数: - raw: 包含 JSON 片段的原始文本 返回值: - 提取并修复后的 JSON 字符串切片|
| [json.ExtractJSONEx](#extractjsonex) |ExtractJSONEx 从一段文本中提取所有 JSON 字符串，同时返回修复后与修复前的版本（导出名为 json.ExtractJSONEx） 相比 ExtractJSON，额外返回修复前的原始片段，便于对照 参数: - raw: 包含 JSON 片段的原始文本 返回值: - results: ...|
| [json.Find](#find) |Find 使用 JSONPath 查找并返回 JSON 中匹配的所有值（导出名为 json.Find） 参数: - json: JSON 字符串或已解析的对象 - jsonPath: JSONPath 表达式（如 $..a） 返回值: - 匹配到的所有值组成的切片|
| [json.FindPath](#findpath) |FindPath 使用 JSONPath 查找并返回 JSON 中匹配的第一个值（导出名为 json.FindPath） 参数: - json: JSON 字符串或已解析的对象 - jsonPath: JSONPath 表达式（如 $..a） 返回值: - 第一个匹配到的值|
| [json.Marshal](#marshal) |Marshal 将一个对象序列化为 JSON 字节（导出名为 json.Marshal） 参数: - v: 要序列化的对象 返回值: - 序列化后的 JSON 字节 - 错误信息（序列化失败时返回）|
| [json.New](#new) |New 根据传入的值创建一个 JSON 对象（导出名为 json.New） 返回的对象提供 IsObject/IsArray/IsString/IsNumber/IsNull/Value 等类型判断与取值方法 参数: - i: 输入值，可为 JSON 字符串、字节或任意可序列化对象 返回值: - J...|
| [json.ReplaceAll](#replaceall) |ReplaceAll 使用 JSONPath 替换 JSON 中所有匹配的值，返回替换后的对象（导出名为 json.ReplaceAll） 参数: - json: JSON 字符串或已解析的对象 - jsonPath: JSONPath 表达式（如 $..a） - replaceValue: 用于替...|
| [json.dumps](#dumps) |dumps 将一个对象转换为 JSON 字符串，返回转换后的字符串 它还可以接收零个到多个请求选项函数，用于配置转换过程，控制转换后的缩进，前缀等 参数: - raw: 要序列化的对象 - opts: 可选的序列化选项（缩进、前缀、是否转义 HTML 等） 返回值: - 序列化后的 JSON 字符串...|
| [json.loads](#loads) |loads 将一个 JSON 字符串转换为对象，返回转换后的对象，通常是一个omap 参数: - raw: JSON 字符串（任意可转为字符串的输入） - opts: 可选的解析选项（当前预留） 返回值: - 解析后的对象，通常是有序 map（omap）|
| [json.noEscapeHTML](#noescapehtml) |noEscapeHTML 设置 json.dumps 时不转义 HTML 字符（导出名为 json.noEscapeHTML） 默认情况下 &lt;, &gt;, &amp; 会被转义为 \u003c 等；启用该选项后保持原样输出 作为 json.dumps 的可选项使用 返回值: - 可传入 json.dumps 的...|
| [json.withIndent](#withindent) |withIndent 设置 json.dumps 输出时的缩进字符串（导出名为 json.withIndent） 设置后输出为带缩进的多行 JSON，便于阅读；作为 json.dumps 的可选项使用 参数: - indent: 每一级缩进使用的字符串（如四个空格） 返回值: - 可传入 json....|
| [json.withPrefix](#withprefix) |withPrefix 设置 json.dumps 输出时每一行的前缀（导出名为 json.withPrefix） 作为 json.dumps 的可选项使用，常配合 withIndent 控制多行 JSON 的排版 参数: - prefix: 每行前缀字符串 返回值: - 可传入 json.dumps...|


## 函数定义
### ExtractJSON

#### 详细描述
ExtractJSON 从一段文本中提取并修复其中包含的所有 JSON 字符串（导出名为 json.ExtractJSON）

常用于从 AI 回复、日志等夹杂自然语言的文本中抽取 JSON 片段



参数:

  - raw: 包含 JSON 片段的原始文本



返回值:

  - 提取并修复后的 JSON 字符串切片




Example:

``````````````yak
v = json.ExtractJSON(`prefix {"a": "b"} mid {"c": "d"} end`)
println(len(v))   // OUT: 2
assert len(v) == 2, "ExtractJSON should extract two JSON fragments"
``````````````


#### 定义

`ExtractJSON(raw string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `string` | 包含 JSON 片段的原始文本 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 提取并修复后的 JSON 字符串切片 |


### ExtractJSONEx

#### 详细描述
ExtractJSONEx 从一段文本中提取所有 JSON 字符串，同时返回修复后与修复前的版本（导出名为 json.ExtractJSONEx）

相比 ExtractJSON，额外返回修复前的原始片段，便于对照



参数:

  - raw: 包含 JSON 片段的原始文本



返回值:

  - results: 修复后的 JSON 字符串切片

  - rawStr: 修复前的原始 JSON 字符串切片（无需修复时可能为空）




Example:

``````````````yak
fixed, raws = json.ExtractJSONEx(`see {"a": "b"}`)
println(len(fixed))   // OUT: 1
assert len(fixed) == 1, "ExtractJSONEx should extract one JSON fragment"
``````````````


#### 定义

`ExtractJSONEx(raw string) (results []string, rawStr []string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `string` | 包含 JSON 片段的原始文本 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| results | `[]string` | 修复后的 JSON 字符串切片 |
| rawStr | `[]string` | 修复前的原始 JSON 字符串切片（无需修复时可能为空） |


### Find

#### 详细描述
Find 使用 JSONPath 查找并返回 JSON 中匹配的所有值（导出名为 json.Find）



参数:

  - json: JSON 字符串或已解析的对象

  - jsonPath: JSONPath 表达式（如 $..a）



返回值:

  - 匹配到的所有值组成的切片




Example:

``````````````yak
v = json.Find(`{"a":"a1","c":{"a":"a2"}}`, "$..a")
println(v)
assert len(v) == 2, "Find with $..a should match two values"
``````````````


#### 定义

`Find(json any, jsonPath string) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| json | `any` | JSON 字符串或已解析的对象 |
| jsonPath | `string` | JSONPath 表达式（如 $..a） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` | 匹配到的所有值组成的切片 |


### FindPath

#### 详细描述
FindPath 使用 JSONPath 查找并返回 JSON 中匹配的第一个值（导出名为 json.FindPath）



参数:

  - json: JSON 字符串或已解析的对象

  - jsonPath: JSONPath 表达式（如 $..a）



返回值:

  - 第一个匹配到的值




Example:

``````````````yak
v = json.FindPath(`{"a":"a1","c":{"a":"a2"}}`, "$..a")
println(v)   // OUT: a1
assert v == "a1", "FindPath should return the first matched value"
``````````````


#### 定义

`FindPath(json any, jsonPath string) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| json | `any` | JSON 字符串或已解析的对象 |
| jsonPath | `string` | JSONPath 表达式（如 $..a） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` | 第一个匹配到的值 |


### Marshal

#### 详细描述
Marshal 将一个对象序列化为 JSON 字节（导出名为 json.Marshal）



参数:

  - v: 要序列化的对象



返回值:

  - 序列化后的 JSON 字节

  - 错误信息（序列化失败时返回）




Example:

``````````````yak
b = json.Marshal({"a": "b"})~
println(string(b))   // OUT: {"a":"b"}
assert string(b) == "{\"a\":\"b\"}", "Marshal should produce compact JSON bytes"
``````````````


#### 定义

`Marshal(v any) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v | `any` | 要序列化的对象 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 序列化后的 JSON 字节 |
| r2 | `error` | 错误信息（序列化失败时返回） |


### New

#### 详细描述
New 根据传入的值创建一个 JSON 对象（导出名为 json.New）

返回的对象提供 IsObject/IsArray/IsString/IsNumber/IsNull/Value 等类型判断与取值方法



参数:

  - i: 输入值，可为 JSON 字符串、字节或任意可序列化对象



返回值:

  - JSON 对象

  - 错误信息（解析或序列化失败时返回）




Example:

``````````````yak
v = json.New(`{"a": "b", "c": "d"}`)~
println(v.IsObject())   // OUT: true
assert v.IsObject(), "New should recognize a JSON object"
``````````````


#### 定义

`New(i any) (*yakJson, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 输入值，可为 JSON 字符串、字节或任意可序列化对象 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*yakJson` | JSON 对象 |
| r2 | `error` | 错误信息（解析或序列化失败时返回） |


### ReplaceAll

#### 详细描述
ReplaceAll 使用 JSONPath 替换 JSON 中所有匹配的值，返回替换后的对象（导出名为 json.ReplaceAll）



参数:

  - json: JSON 字符串或已解析的对象

  - jsonPath: JSONPath 表达式（如 $..a）

  - replaceValue: 用于替换的新值



返回值:

  - 替换后的对象




Example:

``````````````yak
v = json.ReplaceAll(`{"a":"a1","c":{"a":"a2"}}`, "$..a", "b")
s = json.dumps(v)
println(s)
assert str.Contains(s, "\"b\""), "ReplaceAll should replace matched values with the new value"
``````````````


#### 定义

`ReplaceAll(json any, jsonPath string, replaceValue any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| json | `any` | JSON 字符串或已解析的对象 |
| jsonPath | `string` | JSONPath 表达式（如 $..a） |
| replaceValue | `any` | 用于替换的新值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` | 替换后的对象 |


### dumps

#### 详细描述
dumps 将一个对象转换为 JSON 字符串，返回转换后的字符串

它还可以接收零个到多个请求选项函数，用于配置转换过程，控制转换后的缩进，前缀等

参数:

  - raw: 要序列化的对象

  - opts: 可选的序列化选项（缩进、前缀、是否转义 HTML 等）



返回值:

  - 序列化后的 JSON 字符串，失败返回空字符串




Example:

``````````````yak
s = json.dumps({"name": "yak"})
// dumps 默认输出带缩进的多行 JSON，这里打印是否包含被序列化的值
println(str.Contains(s, "yak"))   // OUT: true
assert str.Contains(s, "yak"), "dumps output should contain the value"
``````````````


#### 定义

`dumps(raw any, opts ...JsonOpt) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `any` | 要序列化的对象 |
| opts | `...JsonOpt` | 可选的序列化选项（缩进、前缀、是否转义 HTML 等） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 序列化后的 JSON 字符串，失败返回空字符串 |


### loads

#### 详细描述
loads 将一个 JSON 字符串转换为对象，返回转换后的对象，通常是一个omap

参数:

  - raw: JSON 字符串（任意可转为字符串的输入）

  - opts: 可选的解析选项（当前预留）



返回值:

  - 解析后的对象，通常是有序 map（omap）




Example:

``````````````yak
m = json.loads(`{"a": "b", "c": "d"}`)
println(m["a"])   // OUT: b
assert m["a"] == "b", "loads should parse the first field"
assert m["c"] == "d", "loads should parse the second field"
``````````````


#### 定义

`loads(raw any, opts ...JsonOpt) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `any` | JSON 字符串（任意可转为字符串的输入） |
| opts | `...JsonOpt` | 可选的解析选项（当前预留） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` | 解析后的对象，通常是有序 map（omap） |


### noEscapeHTML

#### 详细描述
noEscapeHTML 设置 json.dumps 时不转义 HTML 字符（导出名为 json.noEscapeHTML）

默认情况下 &lt;, &gt;, &amp; 会被转义为 \u003c 等；启用该选项后保持原样输出

作为 json.dumps 的可选项使用



返回值:

  - 可传入 json.dumps 的序列化选项




Example:

``````````````yak
s = json.dumps({"a": "<x>"}, json.noEscapeHTML())
println(s)
assert str.Contains(s, "<x>"), "noEscapeHTML should keep raw HTML characters"
``````````````


#### 定义

`noEscapeHTML() JsonOpt`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `JsonOpt` | 可传入 json.dumps 的序列化选项 |


### withIndent

#### 详细描述
withIndent 设置 json.dumps 输出时的缩进字符串（导出名为 json.withIndent）

设置后输出为带缩进的多行 JSON，便于阅读；作为 json.dumps 的可选项使用



参数:

  - indent: 每一级缩进使用的字符串（如四个空格）



返回值:

  - 可传入 json.dumps 的序列化选项




Example:

``````````````yak
s = json.dumps({"a": "b"}, json.withIndent("    "))
println(s)
assert str.Contains(s, "\n"), "withIndent should produce multiline output"
``````````````


#### 定义

`withIndent(indent string) JsonOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| indent | `string` | 每一级缩进使用的字符串（如四个空格） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `JsonOpt` | 可传入 json.dumps 的序列化选项 |


### withPrefix

#### 详细描述
withPrefix 设置 json.dumps 输出时每一行的前缀（导出名为 json.withPrefix）

作为 json.dumps 的可选项使用，常配合 withIndent 控制多行 JSON 的排版



参数:

  - prefix: 每行前缀字符串



返回值:

  - 可传入 json.dumps 的序列化选项




Example:

``````````````yak
s = json.dumps({"a": "b"}, json.withPrefix(">>"), json.withIndent("  "))
println(s)
assert str.Contains(s, ">>"), "withPrefix should prepend the prefix to indented lines"
``````````````


#### 定义

`withPrefix(prefix string) JsonOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| prefix | `string` | 每行前缀字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `JsonOpt` | 可传入 json.dumps 的序列化选项 |


