# re2 {#library-re2}

`re2` 库是基于 regexp2 引擎的正则工具，支持比标准 `re` 更丰富的语法（如反向引用、零宽断言等 .NET 风格特性），适合需要高级正则能力的复杂文本匹配场景。

典型使用场景：

- 匹配查找：`re2.Find` / `re2.FindAll`、`re2.FindSubmatch` / `re2.FindSubmatchAll`、`re2.FindGroup` / `re2.FindGroupAll` 提取分组。
- 替换：`re2.ReplaceAll` / `re2.ReplaceAllWithFunc`。
- 编译：`re2.Compile` / `re2.CompileWithOption`（指定选项位），`re2.QuoteMeta` 转义。

与相邻库的关系：`re2` 与 `re` 互补——`re` 走标准 RE2 引擎、性能稳定且无灾难性回溯；`re2` 提供高级语法但需注意回溯开销。优先用 `re`，确需高级特性时用 `re2`。

> 共 11 个函数、11 个实例

## 实例

|实例名|类型|说明|
|:--|:--|:--|
| OPT_Compiled | `int` | 8 |
| OPT_Debug | `int` | 128 |
| OPT_ECMAScript | `int` | 256 |
| OPT_ExplicitCapture | `int` | 4 |
| OPT_IgnoreCase | `int` | 1 |
| OPT_IgnorePatternWhitespace | `int` | 32 |
| OPT_Multiline | `int` | 2 |
| OPT_None | `regexp2.RegexOptions` | 0 |
| OPT_RE2 | `int` | 512 |
| OPT_RightToLeft | `int` | 64 |
| OPT_Singleline | `int` | 16 |

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [re2.Compile](#compile) | `pattern string` | `*regexp2.Regexp, error` | 编译一个 .NET 风格(regexp2)正则表达式，返回可复用的正则对象 |
| [re2.CompileWithOption](#compilewithoption) | `rule string, opt int` | `*regexp2.Regexp, error` | 使用指定的选项编译 .NET 风格(regexp2)正则，返回编译后的正则对象 |
| [re2.Find](#find) | `data any, pattern string` | `string` | 使用 .NET 风格(regexp2)正则在输入中查找第一个匹配的子串 |
| [re2.FindAll](#findall) | `data any, pattern string` | `[]string` | 使用 .NET 风格(regexp2)正则查找输入中所有匹配的子串 |
| [re2.FindGroup](#findgroup) | `i any, pattern string` | `map[string]string` | 查找第一个匹配并以 map 返回命名/编号分组，键 __all__ 为完整匹配 |
| [re2.FindGroupAll](#findgroupall) | `i any, pattern string` | `[]map[string]string` | 查找所有匹配并为每个匹配返回命名/编号分组 map |
| [re2.FindSubmatch](#findsubmatch) | `i any, pattern string` | `[]string` | 查找第一个匹配并返回其完整匹配与各捕获分组 |
| [re2.FindSubmatchAll](#findsubmatchall) | `i any, pattern string` | `[][]string` | 查找所有匹配，每个匹配返回其完整匹配与各捕获分组 |
| [re2.QuoteMeta](#quotemeta) | `input string` | `string` | 转义字符串中的正则元字符，使其可作为字面量安全嵌入正则表达式（导出名为 re2.QuoteMeta） |
| [re2.ReplaceAll](#replaceall) | `i any, pattern string, target string` | `string` | 将输入中所有匹配正则的部分替换为目标字符串，支持 $1 分组引用 |
| [re2.ReplaceAllWithFunc](#replaceallwithfunc) | `i any, pattern string, target func(string) string` | `string` | 将输入中所有匹配交给回调函数处理，用其返回值替换 |

## 函数详情

### Compile {#compile}

```go
Compile(pattern string) (*regexp2.Regexp, error)
```

编译一个 .NET 风格(regexp2)正则表达式，返回可复用的正则对象

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| pattern | `string` | regexp2 正则表达式字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*regexp2.Regexp` | 编译后的正则对象，可调用 MatchString 等方法 |
| r2 | `error` | 编译失败时返回的错误 |

**示例**

``````````````yak
// VARS: 编译正则并复用匹配
re = re2.Compile(`\d+`)~
matched = re.MatchString("abc123")~
// STDOUT: 打印是否匹配
println(matched)   // OUT: true
// assert: 锁定结论
assert matched, "compiled pattern should match digits"
``````````````

---

### CompileWithOption {#compilewithoption}

```go
CompileWithOption(rule string, opt int) (*regexp2.Regexp, error)
```

使用指定的选项编译 .NET 风格(regexp2)正则，返回编译后的正则对象

选项可使用 re2.OPT_IgnoreCase、re2.OPT_Multiline 等常量，多个选项可用按位或组合

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| rule | `string` | regexp2 正则表达式 |
| opt | `int` | 编译选项，如 re2.OPT_IgnoreCase |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*regexp2.Regexp` | 编译后的正则对象，可调用 MatchString 等方法 |
| r2 | `error` | 编译失败时返回的错误 |

**示例**

``````````````yak
// VARS: 以忽略大小写的方式编译并匹配
re = re2.CompileWithOption(`abc`, re2.OPT_IgnoreCase)~
result = re.MatchString("ABC")~
// STDOUT: 打印匹配结果
println(result)   // OUT: true
// assert: 忽略大小写后能匹配大写串
assert result == true, "case-insensitive compile should match uppercase"
``````````````

---

### Find {#find}

```go
Find(data any, pattern string) string
```

使用 .NET 风格(regexp2)正则在输入中查找第一个匹配的子串

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| data | `any` | 待匹配的输入数据，会被转换为字符串 |
| pattern | `string` | regexp2 正则表达式 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 第一个匹配到的子串，未匹配或编译失败时返回空字符串 |

**示例**

``````````````yak
// VARS: 提取第一段连续数字
result = re2.Find("abc123def", `\d+`)
// STDOUT: 打印匹配结果
println(result)   // OUT: 123
// assert: 锁定结论
assert result == "123", "Find should return the first digit run"
``````````````

---

### FindAll {#findall}

```go
FindAll(data any, pattern string) []string
```

使用 .NET 风格(regexp2)正则查找输入中所有匹配的子串

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| data | `any` | 待匹配的输入数据，会被转换为字符串 |
| pattern | `string` | regexp2 正则表达式 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]string` | 所有匹配到的子串组成的切片，未匹配或编译失败时返回空 |

**示例**

``````````````yak
// VARS: 取出全部单个数字
result = re2.FindAll("a1b2c3", `\d`)
// STDOUT: 打印切片
println(result)   // OUT: [1 2 3]
// assert: 锁定数量
assert len(result) == 3, "FindAll should find three digits"
``````````````

---

### FindGroup {#findgroup}

```go
FindGroup(i any, pattern string) map[string]string
```

查找第一个匹配并以 map 返回命名/编号分组，键 __all__ 为完整匹配

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 待匹配的输入数据，会被转换为字符串 |
| pattern | `string` | 含命名分组(?&lt;name&gt;...)或编号分组的 regexp2 正则 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `map[string]string` | map，命名分组以名字为键，匿名分组以序号为键，__all__ 为完整匹配 |

**示例**

``````````````yak
// VARS: 用命名分组解析 年-月
result = re2.FindGroup("2023-01", `(?<year>\d+)-(?<month>\d+)`)
// STDOUT: 打印 year 分组
println(result["year"])   // OUT: 2023
// assert: month 分组正确
assert result["month"] == "01", "named group month should be 01"
``````````````

---

### FindGroupAll {#findgroupall}

```go
FindGroupAll(i any, pattern string) []map[string]string
```

查找所有匹配并为每个匹配返回命名/编号分组 map

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 待匹配的输入数据，会被转换为字符串 |
| pattern | `string` | 含命名分组(?&lt;name&gt;...)或编号分组的 regexp2 正则 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]map[string]string` | map 切片，每个元素含该次匹配的命名/编号分组与 __all__ 完整匹配 |

**示例**

``````````````yak
// VARS: 批量解析 字母+数字
result = re2.FindGroupAll("a1 b2", `(?<ch>\w)(?<num>\d)`)
// assert: 命中两次，第二次的 ch 分组为 b
assert len(result) == 2, "should match twice"
assert result[1]["ch"] == "b", "second match ch group should be b"
``````````````

---

### FindSubmatch {#findsubmatch}

```go
FindSubmatch(i any, pattern string) []string
```

查找第一个匹配并返回其完整匹配与各捕获分组

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 待匹配的输入数据，会被转换为字符串 |
| pattern | `string` | 含捕获分组的 regexp2 正则表达式 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]string` | 切片，第 0 项为完整匹配，其后依次为各分组内容 |

**示例**

``````````````yak
// VARS: 解析 年-月 并取分组
result = re2.FindSubmatch("2023-01", `(\d+)-(\d+)`)
// STDOUT: 打印分组切片
println(result)   // OUT: [2023-01 2023 01]
// assert: 第一个分组为年份
assert result[1] == "2023", "first group should be the year"
``````````````

---

### FindSubmatchAll {#findsubmatchall}

```go
FindSubmatchAll(i any, pattern string) [][]string
```

查找所有匹配，每个匹配返回其完整匹配与各捕获分组

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 待匹配的输入数据，会被转换为字符串 |
| pattern | `string` | 含捕获分组的 regexp2 正则表达式 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[][]string` | 二维切片，每个元素为一次匹配的[完整匹配, 分组1, 分组2, ...] |

**示例**

``````````````yak
// VARS: 批量解析 字母+数字 组合
result = re2.FindSubmatchAll("a1-b2", `(\w)(\d)`)
// assert: 命中两组，且第二组的首分组为 b
assert len(result) == 2, "should match twice"
assert result[1][1] == "b", "second match first group should be b"
``````````````

---

### QuoteMeta {#quotemeta}

```go
QuoteMeta(input string) string
```

转义字符串中的正则元字符，使其可作为字面量安全嵌入正则表达式（导出名为 re2.QuoteMeta）

会把 . * + ? ( ) [ ] 等元字符前加反斜杠

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| input | `string` | 待转义的字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 转义后的字符串，可直接拼入正则表达式 |

**示例**

``````````````yak
escaped = re2.QuoteMeta("a.b*c")
println(escaped)   // OUT: a\.b\*c
assert escaped == "a\\.b\\*c", "QuoteMeta should escape regex metacharacters"
p = re2.Compile("^" + escaped + "$")~
assert p.MatchString("a.b*c")~ == true, "escaped literal should match the literal string"
assert p.MatchString("aXbYYc")~ == false, "escaped dot/star should not act as metachar"
``````````````

---

### ReplaceAll {#replaceall}

```go
ReplaceAll(i any, pattern string, target string) string
```

将输入中所有匹配正则的部分替换为目标字符串，支持 $1 分组引用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 待处理的输入数据，会被转换为字符串 |
| pattern | `string` | regexp2 正则表达式 |
| target | `string` | 替换目标，可用 $1、$2 引用捕获分组 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 替换后的字符串，编译失败时返回原始输入 |

**示例**

``````````````yak
// VARS: 把所有数字替换为 X
result = re2.ReplaceAll("a1b2c3", `\d`, "X")
// STDOUT: 打印替换结果
println(result)   // OUT: aXbXcX
// assert: 使用分组引用交换 年/月
assert re2.ReplaceAll("2023-01", `(\d+)-(\d+)`, "$2/$1") == "01/2023", "group reference should swap parts"
``````````````

---

### ReplaceAllWithFunc {#replaceallwithfunc}

```go
ReplaceAllWithFunc(i any, pattern string, target func(string) string) string
```

将输入中所有匹配交给回调函数处理，用其返回值替换

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 待处理的输入数据，会被转换为字符串 |
| pattern | `string` | regexp2 正则表达式 |
| target | `func(string) string` | 回调函数，入参为单次匹配的子串，返回替换后的字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 替换后的字符串，编译失败时返回原始输入 |

**示例**

``````````````yak
// VARS: 给每个数字加上方括号
result = re2.ReplaceAllWithFunc("a1b2", `\d`, func(s) { return "[" + s + "]" })
// STDOUT: 打印替换结果
println(result)   // OUT: a[1]b[2]
// assert: 锁定结论
assert result == "a[1]b[2]", "callback should wrap each digit"
``````````````

---

