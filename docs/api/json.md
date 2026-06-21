# json {#library-json}

`json` 库提供 JSON 的序列化/反序列化与路径查询能力，并能从混杂文本中智能提取 JSON 片段，是数据处理与接口测试的常用工具。

典型使用场景：

- 序列化：`json.dumps`（对象转字符串，可配 `json.withIndent` / `json.noEscapeHTML`）、`json.Marshal`，`json.loads` 解析字符串。
- 路径查询：`json.Find` / `json.FindPath`（JSONPath 取值）、`json.ReplaceAll`（按路径替换）。
- 提取：`json.ExtractJSON` / `json.ExtractJSONEx` 从任意文本里捞出合法 JSON 片段。

与相邻库的关系：`json` 是纯数据处理库，常与 `http`/`poc`（解析接口响应）、`jsonstream`（流式大 JSON）、`jsonschema`（结构定义）配合。

> 共 12 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [json.ExtractJSON](#extractjson) | `raw string` | `[]string` | 从一段文本中提取并修复其中包含的所有 JSON 字符串（导出名为 json.ExtractJSON） |
| [json.ExtractJSONEx](#extractjsonex) | `raw string` | `[]string, []string` | 从一段文本中提取所有 JSON 字符串，同时返回修复后与修复前的版本（导出名为 json.ExtractJSONEx） |
| [json.Find](#find) | `json any, jsonPath string` | `any` | 使用 JSONPath 查找并返回 JSON 中匹配的所有值（导出名为 json.Find） |
| [json.FindPath](#findpath) | `json any, jsonPath string` | `any` | 使用 JSONPath 查找并返回 JSON 中匹配的第一个值（导出名为 json.FindPath） |
| [json.Marshal](#marshal) | `v any` | `[]byte, error` | 将一个对象序列化为 JSON 字节（导出名为 json.Marshal） |
| [json.New](#new) | `i any` | `*yakJson, error` | 根据传入的值创建一个 JSON 对象（导出名为 json.New） |
| [json.ReplaceAll](#replaceall) | `json any, jsonPath string, replaceValue any` | `any` | 使用 JSONPath 替换 JSON 中所有匹配的值，返回替换后的对象（导出名为 json.ReplaceAll） |
| [json.noEscapeHTML](#noescapehtml) | - | `JsonOpt` | 设置 json.dumps 时不转义 HTML 字符（导出名为 json.noEscapeHTML） |
| [json.withIndent](#withindent) | `indent string` | `JsonOpt` | 设置 json.dumps 输出时的缩进字符串（导出名为 json.withIndent） |
| [json.withPrefix](#withprefix) | `prefix string` | `JsonOpt` | 设置 json.dumps 输出时每一行的前缀（导出名为 json.withPrefix） |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [json.dumps](#dumps) | `raw any, opts ...JsonOpt` | `string` | 将一个对象转换为 JSON 字符串，返回转换后的字符串 |
| [json.loads](#loads) | `raw any, opts ...JsonOpt` | `any` | 将一个 JSON 字符串转换为对象，返回转换后的对象，通常是一个omap |

## 函数详情

### ExtractJSON {#extractjson}

```go
ExtractJSON(raw string) []string
```

从一段文本中提取并修复其中包含的所有 JSON 字符串（导出名为 json.ExtractJSON）

常用于从 AI 回复、日志等夹杂自然语言的文本中抽取 JSON 片段

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| raw | `string` | 包含 JSON 片段的原始文本 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]string` | 提取并修复后的 JSON 字符串切片 |

**示例**

``````````````yak
v = json.ExtractJSON(`prefix {"a": "b"} mid {"c": "d"} end`)
println(len(v))   // OUT: 2
assert len(v) == 2, "ExtractJSON should extract two JSON fragments"
``````````````

---

### ExtractJSONEx {#extractjsonex}

```go
ExtractJSONEx(raw string) (results []string, rawStr []string)
```

从一段文本中提取所有 JSON 字符串，同时返回修复后与修复前的版本（导出名为 json.ExtractJSONEx）

相比 ExtractJSON，额外返回修复前的原始片段，便于对照

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| raw | `string` | 包含 JSON 片段的原始文本 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| results | `[]string` | 修复后的 JSON 字符串切片 |
| rawStr | `[]string` | 修复前的原始 JSON 字符串切片（无需修复时可能为空） |

**示例**

``````````````yak
fixed, raws = json.ExtractJSONEx(`see {"a": "b"}`)
println(len(fixed))   // OUT: 1
assert len(fixed) == 1, "ExtractJSONEx should extract one JSON fragment"
``````````````

---

### Find {#find}

```go
Find(json any, jsonPath string) any
```

使用 JSONPath 查找并返回 JSON 中匹配的所有值（导出名为 json.Find）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| json | `any` | JSON 字符串或已解析的对象 |
| jsonPath | `string` | JSONPath 表达式（如 $..a） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `any` | 匹配到的所有值组成的切片 |

**示例**

``````````````yak
v = json.Find(`{"a":"a1","c":{"a":"a2"}}`, "$..a")
println(v)
assert len(v) == 2, "Find with $..a should match two values"
``````````````

---

### FindPath {#findpath}

```go
FindPath(json any, jsonPath string) any
```

使用 JSONPath 查找并返回 JSON 中匹配的第一个值（导出名为 json.FindPath）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| json | `any` | JSON 字符串或已解析的对象 |
| jsonPath | `string` | JSONPath 表达式（如 $..a） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `any` | 第一个匹配到的值 |

**示例**

``````````````yak
v = json.FindPath(`{"a":"a1","c":{"a":"a2"}}`, "$..a")
println(v)   // OUT: a1
assert v == "a1", "FindPath should return the first matched value"
``````````````

---

### Marshal {#marshal}

```go
Marshal(v any) ([]byte, error)
```

将一个对象序列化为 JSON 字节（导出名为 json.Marshal）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| v | `any` | 要序列化的对象 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 序列化后的 JSON 字节 |
| r2 | `error` | 错误信息（序列化失败时返回） |

**示例**

``````````````yak
b = json.Marshal({"a": "b"})~
println(string(b))   // OUT: {"a":"b"}
assert string(b) == "{\"a\":\"b\"}", "Marshal should produce compact JSON bytes"
``````````````

---

### New {#new}

```go
New(i any) (*yakJson, error)
```

根据传入的值创建一个 JSON 对象（导出名为 json.New）

返回的对象提供 IsObject/IsArray/IsString/IsNumber/IsNull/Value 等类型判断与取值方法

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 输入值，可为 JSON 字符串、字节或任意可序列化对象 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*yakJson` | JSON 对象 |
| r2 | `error` | 错误信息（解析或序列化失败时返回） |

**示例**

``````````````yak
v = json.New(`{"a": "b", "c": "d"}`)~
println(v.IsObject())   // OUT: true
assert v.IsObject(), "New should recognize a JSON object"
``````````````

---

### ReplaceAll {#replaceall}

```go
ReplaceAll(json any, jsonPath string, replaceValue any) any
```

使用 JSONPath 替换 JSON 中所有匹配的值，返回替换后的对象（导出名为 json.ReplaceAll）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| json | `any` | JSON 字符串或已解析的对象 |
| jsonPath | `string` | JSONPath 表达式（如 $..a） |
| replaceValue | `any` | 用于替换的新值 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `any` | 替换后的对象 |

**示例**

``````````````yak
v = json.ReplaceAll(`{"a":"a1","c":{"a":"a2"}}`, "$..a", "b")
s = json.dumps(v)
println(s)
assert str.Contains(s, "\"b\""), "ReplaceAll should replace matched values with the new value"
``````````````

---

### noEscapeHTML {#noescapehtml}

```go
noEscapeHTML() JsonOpt
```

设置 json.dumps 时不转义 HTML 字符（导出名为 json.noEscapeHTML）

默认情况下 &lt;, &gt;, &amp; 会被转义为 \u003c 等；启用该选项后保持原样输出

作为 json.dumps 的可选项使用

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `JsonOpt` | 可传入 json.dumps 的序列化选项 |

**示例**

``````````````yak
s = json.dumps({"a": "<x>"}, json.noEscapeHTML())
println(s)
assert str.Contains(s, "<x>"), "noEscapeHTML should keep raw HTML characters"
``````````````

---

### withIndent {#withindent}

```go
withIndent(indent string) JsonOpt
```

设置 json.dumps 输出时的缩进字符串（导出名为 json.withIndent）

设置后输出为带缩进的多行 JSON，便于阅读；作为 json.dumps 的可选项使用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| indent | `string` | 每一级缩进使用的字符串（如四个空格） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `JsonOpt` | 可传入 json.dumps 的序列化选项 |

**示例**

``````````````yak
s = json.dumps({"a": "b"}, json.withIndent("    "))
println(s)
assert str.Contains(s, "\n"), "withIndent should produce multiline output"
``````````````

---

### withPrefix {#withprefix}

```go
withPrefix(prefix string) JsonOpt
```

设置 json.dumps 输出时每一行的前缀（导出名为 json.withPrefix）

作为 json.dumps 的可选项使用，常配合 withIndent 控制多行 JSON 的排版

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| prefix | `string` | 每行前缀字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `JsonOpt` | 可传入 json.dumps 的序列化选项 |

**示例**

``````````````yak
s = json.dumps({"a": "b"}, json.withPrefix(">>"), json.withIndent("  "))
println(s)
assert str.Contains(s, ">>"), "withPrefix should prepend the prefix to indented lines"
``````````````

---

## 可变参数函数详情

### dumps {#dumps}

```go
dumps(raw any, opts ...JsonOpt) string
```

将一个对象转换为 JSON 字符串，返回转换后的字符串

它还可以接收零个到多个请求选项函数，用于配置转换过程，控制转换后的缩进，前缀等

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| raw | `any` | 要序列化的对象 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...JsonOpt` | 可选的序列化选项（缩进、前缀、是否转义 HTML 等） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 序列化后的 JSON 字符串，失败返回空字符串 |

**示例**

``````````````yak
s = json.dumps({"name": "yak"})
// dumps 默认输出带缩进的多行 JSON，这里打印是否包含被序列化的值
println(str.Contains(s, "yak"))   // OUT: true
assert str.Contains(s, "yak"), "dumps output should contain the value"
``````````````

---

### loads {#loads}

```go
loads(raw any, opts ...JsonOpt) any
```

将一个 JSON 字符串转换为对象，返回转换后的对象，通常是一个omap

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| raw | `any` | JSON 字符串（任意可转为字符串的输入） |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...JsonOpt` | 可选的解析选项（当前预留） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `any` | 解析后的对象，通常是有序 map（omap） |

**示例**

``````````````yak
m = json.loads(`{"a": "b", "c": "d"}`)
println(m["a"])   // OUT: b
assert m["a"] == "b", "loads should parse the first field"
assert m["c"] == "d", "loads should parse the second field"
``````````````

---

