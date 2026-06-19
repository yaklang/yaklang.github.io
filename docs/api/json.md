# json

|函数名|函数描述/介绍|
|:------|:--------|
| [json.ExtractJSON](#extractjson) |ExtractJSON 尝试提取字符串中的 JSON 并进行修复, 返回中的元素都是原始 Json|
| [json.ExtractJSONEx](#extractjsonex) ||
| [json.Find](#find) ||
| [json.FindPath](#findpath) ||
| [json.Marshal](#marshal) |Marshal 将一个对象转换为 JSON bytes，返回转换后的 bytes 与错误|
| [json.New](#new) |New 根据传入的值创建并返回一个新的 JSON 对象与错误|
| [json.ReplaceAll](#replaceall) ||
| [json.dumps](#dumps) |dumps 将一个对象转换为 JSON 字符串，返回转换后的字符串 它还可以接收零个到多个请求选项函数，用于配置转换过程，控制转换后的缩进，前缀等 参数: - raw: 要序列化的对象 - opts: 可选的序列化选项（缩进、前缀、是否转义 HTML 等） 返回值: - 序列化后的 JSON 字符串...|
| [json.loads](#loads) |loads 将一个 JSON 字符串转换为对象，返回转换后的对象，通常是一个omap 参数: - raw: JSON 字符串（任意可转为字符串的输入） - opts: 可选的解析选项（当前预留） 返回值: - 解析后的对象，通常是有序 map（omap）|
| [json.noEscapeHTML](#noescapehtml) ||
| [json.withIndent](#withindent) |withIndent 设置 JSON dumps时的缩进|
| [json.withPrefix](#withprefix) |withPrefix 设置 JSON dumps时的前缀|


## 函数定义
### ExtractJSON

#### 详细描述
ExtractJSON 尝试提取字符串中的 JSON 并进行修复, 返回中的元素都是原始 Json


Example:

``````````````yak
json.ExtractJson("hello yak") // []
res = json.ExtractJson(`[{"hello": "yak"}]`) // [[{"key": "value"}]]
assert(res[0]==`[{"key": "value"}]`)
``````````````


#### 定义

`ExtractJSON(raw string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |  |


### ExtractJSONEx

#### 详细描述
暂无描述

#### 定义

`ExtractJSONEx(raw string) (results []string, rawStr []string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| results | `[]string` |  |
| rawStr | `[]string` |  |


### Find

#### 详细描述
暂无描述

#### 定义

`Find(j any, jpath string) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| j | `any` |  |
| jpath | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` |  |


### FindPath

#### 详细描述
暂无描述

#### 定义

`FindPath(j any, jpath string) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| j | `any` |  |
| jpath | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` |  |


### Marshal

#### 详细描述
Marshal 将一个对象转换为 JSON bytes，返回转换后的 bytes 与错误


Example:

``````````````yak
v, err = json.Marshal({"a": "b", "c": "d"})
// v = b"{"a": "b", "c": "d"}"
``````````````


#### 定义

`Marshal(v any) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v | `any` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |  |
| r2 | `error` |  |


### New

#### 详细描述
New 根据传入的值创建并返回一个新的 JSON 对象与错误


Example:

``````````````yak
v, err = json.New("foo")
v, err = json.New(b"bar")
v, err = json.New({"a": "b", "c": "d"})
``````````````


#### 定义

`New(i any) (*yakJson, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*yakJson` |  |
| r2 | `error` |  |


### ReplaceAll

#### 详细描述
暂无描述

#### 定义

`ReplaceAll(j any, jpath string, replaceValue any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| j | `any` |  |
| jpath | `string` |  |
| replaceValue | `any` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` |  |


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
暂无描述

#### 定义

`noEscapeHTML() JsonOpt`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `JsonOpt` |  |


### withIndent

#### 详细描述
withIndent 设置 JSON dumps时的缩进


Example:

``````````````yak
v = json.dumps({"a": "b", "c": "d"}, json.withIndent("  "))
``````````````


#### 定义

`withIndent(indent string) JsonOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| indent | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `JsonOpt` |  |


### withPrefix

#### 详细描述
withPrefix 设置 JSON dumps时的前缀


Example:

``````````````yak
v = json.dumps({"a": "b", "c": "d"}, json.withPrefix("  "))
``````````````


#### 定义

`withPrefix(prefix string) JsonOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| prefix | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `JsonOpt` |  |


