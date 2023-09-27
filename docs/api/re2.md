# re2

|成员函数|函数描述/介绍|
|:------|:--------|
| [re2.Compile](#compile) |Compile parses a regular expression and returns, if successful,a Regexp object that can be used to match against text.When matching against text, the ...|
| [re2.CompilePOSIX](#compileposix) |CompilePOSIX is like Compile but restricts the regular expressionto POSIX ERE (egrep) syntax and changes the match semantics toleftmost-longest.That i...|
| [re2.ExtractEmail](#extractemail) ||
| [re2.ExtractHostPort](#extracthostport) |HOSTPORT|
| [re2.ExtractIP](#extractip) ||
| [re2.ExtractIPv4](#extractipv4) ||
| [re2.ExtractIPv6](#extractipv6) ||
| [re2.ExtractMac](#extractmac) ||
| [re2.ExtractPath](#extractpath) |PATHPARAM|
| [re2.ExtractTTY](#extracttty) |TTY|
| [re2.ExtractURL](#extracturl) |URL|
| [re2.Find](#find) ||
| [re2.FindAll](#findall) ||
| [re2.FindAllIndex](#findallindex) ||
| [re2.FindGroup](#findgroup) ||
| [re2.FindGroupAll](#findgroupall) ||
| [re2.FindIndex](#findindex) ||
| [re2.FindSubmatch](#findsubmatch) ||
| [re2.FindSubmatchAll](#findsubmatchall) ||
| [re2.FindSubmatchAllIndex](#findsubmatchallindex) ||
| [re2.FindSubmatchIndex](#findsubmatchindex) ||
| [re2.Grok](#grok) ||
| [re2.Match](#match) ||
| [re2.MustCompile](#mustcompile) |MustCompile is like Compile but panics if the expression cannot be parsed.It simplifies safe initialization of global variables holding compiled regul...|
| [re2.MustCompilePOSIX](#mustcompileposix) |MustCompilePOSIX is like CompilePOSIX but panics if the expression cannot be parsed.It simplifies safe initialization of global variables holding comp...|
| [re2.QuoteMeta](#quotemeta) |QuoteMeta returns a string that escapes all regular expression metacharactersinside the argument text; the returned string is a regular expression mat...|
| [re2.ReplaceAll](#replaceall) ||
| [re2.ReplaceAllWithFunc](#replaceallwithfunc) ||


## 函数定义
### compile

#### 详细描述
Compile parses a regular expression and returns, if successful,a Regexp object that can be used to match against text.When matching against text, the regexp returns a match thatbegins as early as possible in the input (leftmost), and among thoseit chooses the one that a backtracking search would have found first.This so-called leftmost-first matching is the same semanticsthat Perl, Python, and other implementations use, although thispackage implements it without the expense of backtracking.For POSIX leftmost-longest matching, see CompilePOSIX.

#### 定义

`Compile(expr string) (*Regexp, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| expr | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*Regexp` |   |
| r2 | `error` |   |


### compileposix

#### 详细描述
CompilePOSIX is like Compile but restricts the regular expressionto POSIX ERE (egrep) syntax and changes the match semantics toleftmost-longest.That is, when matching against text, the regexp returns a match thatbegins as early as possible in the input (leftmost), and among thoseit chooses a match that is as long as possible.This so-called leftmost-longest matching is the same semanticsthat early regular expression implementations used and that POSIXspecifies.However, there can be multiple leftmost-longest matches, with differentsubmatch choices, and here this package diverges from POSIX.Among the possible leftmost-longest matches, this package choosesthe one that a backtracking search would have found first, while POSIXspecifies that the match be chosen to maximize the length of the firstsubexpression, then the second, and so on from left to right.The POSIX rule is computationally prohibitive and not even well-defined.See https://swtch.com/~rsc/regexp/regexp2.html#posix for details.

#### 定义

`CompilePOSIX(expr string) (*Regexp, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| expr | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*Regexp` |   |
| r2 | `error` |   |


### extractemail

#### 详细描述


#### 定义

`ExtractEmail(i any) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### extracthostport

#### 详细描述
HOSTPORT

#### 定义

`ExtractHostPort(i any) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### extractip

#### 详细描述


#### 定义

`ExtractIP(i any) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### extractipv4

#### 详细描述


#### 定义

`ExtractIPv4(i any) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### extractipv6

#### 详细描述


#### 定义

`ExtractIPv6(i any) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### extractmac

#### 详细描述


#### 定义

`ExtractMac(i any) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### extractpath

#### 详细描述
PATHPARAM

#### 定义

`ExtractPath(i any) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### extracttty

#### 详细描述
TTY

#### 定义

`ExtractTTY(i any) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### extracturl

#### 详细描述
URL

#### 定义

`ExtractURL(i any) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### find

#### 详细描述


#### 定义

`Find(origin any, re string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| origin | `any` |   |
| re | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### findall

#### 详细描述


#### 定义

`FindAll(origin any, re string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| origin | `any` |   |
| re | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### findallindex

#### 详细描述


#### 定义

`FindAllIndex(origin any, re string) [][]int`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| origin | `any` |   |
| re | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[][]int` |   |


### findgroup

#### 详细描述


#### 定义

`FindGroup(i any, raw string) map[string]string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |
| raw | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `map[string]string` |   |


### findgroupall

#### 详细描述


#### 定义

`FindGroupAll(i any, raw string) []map[string]string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |
| raw | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]map[string]string` |   |


### findindex

#### 详细描述


#### 定义

`FindIndex(origin any, re string) []int`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| origin | `any` |   |
| re | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]int` |   |


### findsubmatch

#### 详细描述


#### 定义

`FindSubmatch(origin any, re string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| origin | `any` |   |
| re | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### findsubmatchall

#### 详细描述


#### 定义

`FindSubmatchAll(origin any, re string) [][]string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| origin | `any` |   |
| re | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[][]string` |   |


### findsubmatchallindex

#### 详细描述


#### 定义

`FindSubmatchAllIndex(origin any, re string) [][]int`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| origin | `any` |   |
| re | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[][]int` |   |


### findsubmatchindex

#### 详细描述


#### 定义

`FindSubmatchIndex(origin any, re string) []int`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| origin | `any` |   |
| re | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]int` |   |


### grok

#### 详细描述


#### 定义

`Grok(line string, rule string) GrokResult`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| line | `string` |   |
| rule | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GrokResult` |   |


### match

#### 详细描述


#### 定义

`Match(pattern string, i any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pattern | `string` |   |
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### mustcompile

#### 详细描述
MustCompile is like Compile but panics if the expression cannot be parsed.It simplifies safe initialization of global variables holding compiled regularexpressions.

#### 定义

`MustCompile(str string) *Regexp`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| str | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*Regexp` |   |


### mustcompileposix

#### 详细描述
MustCompilePOSIX is like CompilePOSIX but panics if the expression cannot be parsed.It simplifies safe initialization of global variables holding compiled regularexpressions.

#### 定义

`MustCompilePOSIX(str string) *Regexp`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| str | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*Regexp` |   |


### quotemeta

#### 详细描述
QuoteMeta returns a string that escapes all regular expression metacharactersinside the argument text; the returned string is a regular expression matchingthe literal text.

#### 定义

`QuoteMeta(s string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### replaceall

#### 详细描述


#### 定义

`ReplaceAll(origin any, re string, newStr any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| origin | `any` |   |
| re | `string` |   |
| newStr | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### replaceallwithfunc

#### 详细描述


#### 定义

`ReplaceAllWithFunc(origin any, re string, newStr func(string) string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| origin | `any` |   |
| re | `string` |   |
| newStr | `func(string) string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


