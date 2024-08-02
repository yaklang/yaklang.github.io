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
| [re2.Compile](#compile) ||
| [re2.CompileWithOption](#compilewithoption) ||
| [re2.Find](#find) ||
| [re2.FindAll](#findall) ||
| [re2.FindGroup](#findgroup) ||
| [re2.FindGroupAll](#findgroupall) ||
| [re2.FindSubmatch](#findsubmatch) ||
| [re2.FindSubmatchAll](#findsubmatchall) ||
| [re2.QuoteMeta](#quotemeta) |Escape adds backslashes to any special characters in the input string |
| [re2.ReplaceAll](#replaceall) ||
| [re2.ReplaceAllWithFunc](#replaceallwithfunc) ||


## 函数定义
### Compile

#### 详细描述


#### 定义

`Compile(pattern string) (*regexp2.Regexp, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pattern | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*regexp2.Regexp` |   |
| r2 | `error` |   |


### CompileWithOption

#### 详细描述


#### 定义

`CompileWithOption(rule string, opt int) (*regexp2.Regexp, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| rule | `string` |   |
| opt | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*regexp2.Regexp` |   |
| r2 | `error` |   |


### Find

#### 详细描述


#### 定义

`Find(data any, pattern string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| data | `any` |   |
| pattern | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### FindAll

#### 详细描述


#### 定义

`FindAll(data any, pattern string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| data | `any` |   |
| pattern | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### FindGroup

#### 详细描述


#### 定义

`FindGroup(i any, pattern string) map[string]string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |
| pattern | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `map[string]string` |   |


### FindGroupAll

#### 详细描述


#### 定义

`FindGroupAll(i any, pattern string) []map[string]string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |
| pattern | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]map[string]string` |   |


### FindSubmatch

#### 详细描述


#### 定义

`FindSubmatch(i any, pattern string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |
| pattern | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### FindSubmatchAll

#### 详细描述


#### 定义

`FindSubmatchAll(i any, pattern string) [][]string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |
| pattern | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[][]string` |   |


### QuoteMeta

#### 详细描述
Escape adds backslashes to any special characters in the input string


#### 定义

`QuoteMeta(input string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| input | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### ReplaceAll

#### 详细描述


#### 定义

`ReplaceAll(i any, pattern string, target string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |
| pattern | `string` |   |
| target | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### ReplaceAllWithFunc

#### 详细描述


#### 定义

`ReplaceAllWithFunc(i any, pattern string, target func(string) string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |
| pattern | `string` |   |
| target | `func(string) string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


