# re2

|实例名|实例描述|
|:------|:--------|
OPT_Compiled|(int) 8|
OPT_Debug|(int) 128|
OPT_ECMAScript|(int) 256|
OPT_ExplicitCapture|(int) 4|
OPT_IgnoreCase|(int) 1|
OPT_IgnorePatternWhitespace|(int) 32|
OPT_Multiline|(int) 2|
OPT_None|(regexp2.RegexOptions) 0|
OPT_RE2|(int) 512|
OPT_RightToLeft|(int) 64|
OPT_Singleline|(int) 16|

|函数名|函数描述/介绍|
|:------|:--------|
| [re2.Compile](#compile) |Compile 编译一个 .NET 风格(regexp2)正则表达式，返回可复用的正则对象 参数: - pattern: regexp2 正则表达式字符串 返回值: - 编译后的正则对象，可调用 MatchString 等方法 - 编译失败时返回的错误|
| [re2.CompileWithOption](#compilewithoption) |CompileWithOption 使用指定的选项编译 .NET 风格(regexp2)正则，返回编译后的正则对象 选项可使用 re2.OPT_IgnoreCase、re2.OPT_Multiline 等常量，多个选项可用按位或组合 参数: - rule: regexp2 正则表达式 - opt: ...|
| [re2.Find](#find) |Find 使用 .NET 风格(regexp2)正则在输入中查找第一个匹配的子串 参数: - data: 待匹配的输入数据，会被转换为字符串 - pattern: regexp2 正则表达式 返回值: - 第一个匹配到的子串，未匹配或编译失败时返回空字符串|
| [re2.FindAll](#findall) |FindAll 使用 .NET 风格(regexp2)正则查找输入中所有匹配的子串 参数: - data: 待匹配的输入数据，会被转换为字符串 - pattern: regexp2 正则表达式 返回值: - 所有匹配到的子串组成的切片，未匹配或编译失败时返回空|
| [re2.FindGroup](#findgroup) |FindGroup 查找第一个匹配并以 map 返回命名/编号分组，键 __all__ 为完整匹配 参数: - i: 待匹配的输入数据，会被转换为字符串 - pattern: 含命名分组(?&lt;name&gt;...)或编号分组的 regexp2 正则 返回值: - map，命名分组以名字为键，匿名分组以序...|
| [re2.FindGroupAll](#findgroupall) |FindGroupAll 查找所有匹配并为每个匹配返回命名/编号分组 map 参数: - i: 待匹配的输入数据，会被转换为字符串 - pattern: 含命名分组(?&lt;name&gt;...)或编号分组的 regexp2 正则 返回值: - map 切片，每个元素含该次匹配的命名/编号分组与 __all...|
| [re2.FindSubmatch](#findsubmatch) |FindSubmatch 查找第一个匹配并返回其完整匹配与各捕获分组 参数: - i: 待匹配的输入数据，会被转换为字符串 - pattern: 含捕获分组的 regexp2 正则表达式 返回值: - 切片，第 0 项为完整匹配，其后依次为各分组内容|
| [re2.FindSubmatchAll](#findsubmatchall) |FindSubmatchAll 查找所有匹配，每个匹配返回其完整匹配与各捕获分组 参数: - i: 待匹配的输入数据，会被转换为字符串 - pattern: 含捕获分组的 regexp2 正则表达式 返回值: - 二维切片，每个元素为一次匹配的[完整匹配, 分组1, 分组2, ...]|
| [re2.QuoteMeta](#quotemeta) |re2QuoteMeta 转义字符串中的正则元字符，使其可作为字面量安全嵌入正则表达式（导出名为 re2.QuoteMeta） 会把 . * + ? ( ) [ ] 等元字符前加反斜杠 参数: - input: 待转义的字符串 返回值: - 转义后的字符串，可直接拼入正则表达式|
| [re2.ReplaceAll](#replaceall) |ReplaceAll 将输入中所有匹配正则的部分替换为目标字符串，支持 $1 分组引用 参数: - i: 待处理的输入数据，会被转换为字符串 - pattern: regexp2 正则表达式 - target: 替换目标，可用 $1、$2 引用捕获分组 返回值: - 替换后的字符串，编译失败时返回原...|
| [re2.ReplaceAllWithFunc](#replaceallwithfunc) |ReplaceAllWithFunc 将输入中所有匹配交给回调函数处理，用其返回值替换 参数: - i: 待处理的输入数据，会被转换为字符串 - pattern: regexp2 正则表达式 - target: 回调函数，入参为单次匹配的子串，返回替换后的字符串 返回值: - 替换后的字符串，编译失...|


## 函数定义
### Compile

#### 详细描述
Compile 编译一个 .NET 风格(regexp2)正则表达式，返回可复用的正则对象

参数:

  - pattern: regexp2 正则表达式字符串



返回值:

  - 编译后的正则对象，可调用 MatchString 等方法

  - 编译失败时返回的错误




Example:

``````````````yak
// VARS: 编译正则并复用匹配
re = re2.Compile(`\d+`)~
matched = re.MatchString("abc123")~
// STDOUT: 打印是否匹配
println(matched)   // OUT: true
// assert: 锁定结论
assert matched, "compiled pattern should match digits"
``````````````


#### 定义

`Compile(pattern string) (*regexp2.Regexp, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pattern | `string` | regexp2 正则表达式字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*regexp2.Regexp` | 编译后的正则对象，可调用 MatchString 等方法 |
| r2 | `error` | 编译失败时返回的错误 |


### CompileWithOption

#### 详细描述
CompileWithOption 使用指定的选项编译 .NET 风格(regexp2)正则，返回编译后的正则对象

选项可使用 re2.OPT_IgnoreCase、re2.OPT_Multiline 等常量，多个选项可用按位或组合

参数:

  - rule: regexp2 正则表达式

  - opt: 编译选项，如 re2.OPT_IgnoreCase



返回值:

  - 编译后的正则对象，可调用 MatchString 等方法

  - 编译失败时返回的错误




Example:

``````````````yak
// VARS: 以忽略大小写的方式编译并匹配
re = re2.CompileWithOption(`abc`, re2.OPT_IgnoreCase)~
result = re.MatchString("ABC")~
// STDOUT: 打印匹配结果
println(result)   // OUT: true
// assert: 忽略大小写后能匹配大写串
assert result == true, "case-insensitive compile should match uppercase"
``````````````


#### 定义

`CompileWithOption(rule string, opt int) (*regexp2.Regexp, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| rule | `string` | regexp2 正则表达式 |
| opt | `int` | 编译选项，如 re2.OPT_IgnoreCase |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*regexp2.Regexp` | 编译后的正则对象，可调用 MatchString 等方法 |
| r2 | `error` | 编译失败时返回的错误 |


### Find

#### 详细描述
Find 使用 .NET 风格(regexp2)正则在输入中查找第一个匹配的子串

参数:

  - data: 待匹配的输入数据，会被转换为字符串

  - pattern: regexp2 正则表达式



返回值:

  - 第一个匹配到的子串，未匹配或编译失败时返回空字符串




Example:

``````````````yak
// VARS: 提取第一段连续数字
result = re2.Find("abc123def", `\d+`)
// STDOUT: 打印匹配结果
println(result)   // OUT: 123
// assert: 锁定结论
assert result == "123", "Find should return the first digit run"
``````````````


#### 定义

`Find(data any, pattern string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| data | `any` | 待匹配的输入数据，会被转换为字符串 |
| pattern | `string` | regexp2 正则表达式 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 第一个匹配到的子串，未匹配或编译失败时返回空字符串 |


### FindAll

#### 详细描述
FindAll 使用 .NET 风格(regexp2)正则查找输入中所有匹配的子串

参数:

  - data: 待匹配的输入数据，会被转换为字符串

  - pattern: regexp2 正则表达式



返回值:

  - 所有匹配到的子串组成的切片，未匹配或编译失败时返回空




Example:

``````````````yak
// VARS: 取出全部单个数字
result = re2.FindAll("a1b2c3", `\d`)
// STDOUT: 打印切片
println(result)   // OUT: [1 2 3]
// assert: 锁定数量
assert len(result) == 3, "FindAll should find three digits"
``````````````


#### 定义

`FindAll(data any, pattern string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| data | `any` | 待匹配的输入数据，会被转换为字符串 |
| pattern | `string` | regexp2 正则表达式 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 所有匹配到的子串组成的切片，未匹配或编译失败时返回空 |


### FindGroup

#### 详细描述
FindGroup 查找第一个匹配并以 map 返回命名/编号分组，键 __all__ 为完整匹配

参数:

  - i: 待匹配的输入数据，会被转换为字符串

  - pattern: 含命名分组(?&lt;name&gt;...)或编号分组的 regexp2 正则



返回值:

  - map，命名分组以名字为键，匿名分组以序号为键，__all__ 为完整匹配




Example:

``````````````yak
// VARS: 用命名分组解析 年-月
result = re2.FindGroup("2023-01", `(?<year>\d+)-(?<month>\d+)`)
// STDOUT: 打印 year 分组
println(result["year"])   // OUT: 2023
// assert: month 分组正确
assert result["month"] == "01", "named group month should be 01"
``````````````


#### 定义

`FindGroup(i any, pattern string) map[string]string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待匹配的输入数据，会被转换为字符串 |
| pattern | `string` | 含命名分组(?&lt;name&gt;...)或编号分组的 regexp2 正则 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `map[string]string` | map，命名分组以名字为键，匿名分组以序号为键，__all__ 为完整匹配 |


### FindGroupAll

#### 详细描述
FindGroupAll 查找所有匹配并为每个匹配返回命名/编号分组 map

参数:

  - i: 待匹配的输入数据，会被转换为字符串

  - pattern: 含命名分组(?&lt;name&gt;...)或编号分组的 regexp2 正则



返回值:

  - map 切片，每个元素含该次匹配的命名/编号分组与 __all__ 完整匹配




Example:

``````````````yak
// VARS: 批量解析 字母+数字
result = re2.FindGroupAll("a1 b2", `(?<ch>\w)(?<num>\d)`)
// assert: 命中两次，第二次的 ch 分组为 b
assert len(result) == 2, "should match twice"
assert result[1]["ch"] == "b", "second match ch group should be b"
``````````````


#### 定义

`FindGroupAll(i any, pattern string) []map[string]string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待匹配的输入数据，会被转换为字符串 |
| pattern | `string` | 含命名分组(?&lt;name&gt;...)或编号分组的 regexp2 正则 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]map[string]string` | map 切片，每个元素含该次匹配的命名/编号分组与 __all__ 完整匹配 |


### FindSubmatch

#### 详细描述
FindSubmatch 查找第一个匹配并返回其完整匹配与各捕获分组

参数:

  - i: 待匹配的输入数据，会被转换为字符串

  - pattern: 含捕获分组的 regexp2 正则表达式



返回值:

  - 切片，第 0 项为完整匹配，其后依次为各分组内容




Example:

``````````````yak
// VARS: 解析 年-月 并取分组
result = re2.FindSubmatch("2023-01", `(\d+)-(\d+)`)
// STDOUT: 打印分组切片
println(result)   // OUT: [2023-01 2023 01]
// assert: 第一个分组为年份
assert result[1] == "2023", "first group should be the year"
``````````````


#### 定义

`FindSubmatch(i any, pattern string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待匹配的输入数据，会被转换为字符串 |
| pattern | `string` | 含捕获分组的 regexp2 正则表达式 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 切片，第 0 项为完整匹配，其后依次为各分组内容 |


### FindSubmatchAll

#### 详细描述
FindSubmatchAll 查找所有匹配，每个匹配返回其完整匹配与各捕获分组

参数:

  - i: 待匹配的输入数据，会被转换为字符串

  - pattern: 含捕获分组的 regexp2 正则表达式



返回值:

  - 二维切片，每个元素为一次匹配的[完整匹配, 分组1, 分组2, ...]




Example:

``````````````yak
// VARS: 批量解析 字母+数字 组合
result = re2.FindSubmatchAll("a1-b2", `(\w)(\d)`)
// assert: 命中两组，且第二组的首分组为 b
assert len(result) == 2, "should match twice"
assert result[1][1] == "b", "second match first group should be b"
``````````````


#### 定义

`FindSubmatchAll(i any, pattern string) [][]string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待匹配的输入数据，会被转换为字符串 |
| pattern | `string` | 含捕获分组的 regexp2 正则表达式 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[][]string` | 二维切片，每个元素为一次匹配的[完整匹配, 分组1, 分组2, ...] |


### QuoteMeta

#### 详细描述
re2QuoteMeta 转义字符串中的正则元字符，使其可作为字面量安全嵌入正则表达式（导出名为 re2.QuoteMeta）

会把 . * + ? ( ) [ ] 等元字符前加反斜杠



参数:

  - input: 待转义的字符串



返回值:

  - 转义后的字符串，可直接拼入正则表达式




Example:

``````````````yak
escaped = re2.QuoteMeta("a.b*c")
println(escaped)   // OUT: a\.b\*c
assert escaped == "a\\.b\\*c", "QuoteMeta should escape regex metacharacters"
p = re2.Compile("^" + escaped + "$")~
assert p.MatchString("a.b*c")~ == true, "escaped literal should match the literal string"
assert p.MatchString("aXbYYc")~ == false, "escaped dot/star should not act as metachar"
``````````````


#### 定义

`QuoteMeta(input string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| input | `string` | 待转义的字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 转义后的字符串，可直接拼入正则表达式 |


### ReplaceAll

#### 详细描述
ReplaceAll 将输入中所有匹配正则的部分替换为目标字符串，支持 $1 分组引用

参数:

  - i: 待处理的输入数据，会被转换为字符串

  - pattern: regexp2 正则表达式

  - target: 替换目标，可用 $1、$2 引用捕获分组



返回值:

  - 替换后的字符串，编译失败时返回原始输入




Example:

``````````````yak
// VARS: 把所有数字替换为 X
result = re2.ReplaceAll("a1b2c3", `\d`, "X")
// STDOUT: 打印替换结果
println(result)   // OUT: aXbXcX
// assert: 使用分组引用交换 年/月
assert re2.ReplaceAll("2023-01", `(\d+)-(\d+)`, "$2/$1") == "01/2023", "group reference should swap parts"
``````````````


#### 定义

`ReplaceAll(i any, pattern string, target string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待处理的输入数据，会被转换为字符串 |
| pattern | `string` | regexp2 正则表达式 |
| target | `string` | 替换目标，可用 $1、$2 引用捕获分组 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 替换后的字符串，编译失败时返回原始输入 |


### ReplaceAllWithFunc

#### 详细描述
ReplaceAllWithFunc 将输入中所有匹配交给回调函数处理，用其返回值替换

参数:

  - i: 待处理的输入数据，会被转换为字符串

  - pattern: regexp2 正则表达式

  - target: 回调函数，入参为单次匹配的子串，返回替换后的字符串



返回值:

  - 替换后的字符串，编译失败时返回原始输入




Example:

``````````````yak
// VARS: 给每个数字加上方括号
result = re2.ReplaceAllWithFunc("a1b2", `\d`, func(s) { return "[" + s + "]" })
// STDOUT: 打印替换结果
println(result)   // OUT: a[1]b[2]
// assert: 锁定结论
assert result == "a[1]b[2]", "callback should wrap each digit"
``````````````


#### 定义

`ReplaceAllWithFunc(i any, pattern string, target func(string) string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待处理的输入数据，会被转换为字符串 |
| pattern | `string` | regexp2 正则表达式 |
| target | `func(string) string` | 回调函数，入参为单次匹配的子串，返回替换后的字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 替换后的字符串，编译失败时返回原始输入 |


