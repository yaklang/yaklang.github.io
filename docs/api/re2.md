# re2

|成员函数|函数描述/介绍|
|:------|:--------|
| [re2.Compile](#compile) |Compile parses a regular expression and returns, if successful, a Regexp object that can be used to match against text.  When matching against text, t...|
| [re2.CompilePOSIX](#compileposix) |CompilePOSIX is like Compile but restricts the regular expression to POSIX ERE (egrep) syntax and changes the match semantics to leftmost-longest.  Th...|
| [re2.ExtractEmail](#extractemail) ||
| [re2.ExtractHostPort](#extracthostport) |HOSTPORT |
| [re2.ExtractIP](#extractip) ||
| [re2.ExtractIPv4](#extractipv4) ||
| [re2.ExtractIPv6](#extractipv6) ||
| [re2.ExtractMac](#extractmac) ||
| [re2.ExtractPath](#extractpath) |PATHPARAM |
| [re2.ExtractTTY](#extracttty) |TTY |
| [re2.ExtractURL](#extracturl) |URL |
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
| [re2.Grok](#grok) |Grok 用于将字符串 line 使用 Grok 以规则 rule 进行解析，并返回解析结果(map)，参考 https://doc.yonyoucloud.com/doc/logstash-best-practice-cn/filter/grok.html 获取更多信息。 |
| [re2.Match](#match) |Match 使用正则尝试匹配字符串 s，如果匹配成功返回 true，否则返回 false |
| [re2.MustCompile](#mustcompile) |MustCompile is like Compile but panics if the expression cannot be parsed. It simplifies safe initialization of global variables holding compiled regu...|
| [re2.MustCompilePOSIX](#mustcompileposix) |MustCompilePOSIX is like CompilePOSIX but panics if the expression cannot be parsed. It simplifies safe initialization of global variables holding com...|
| [re2.QuoteMeta](#quotemeta) |QuoteMeta returns a string that escapes all regular expression metacharacters inside the argument text; the returned string is a regular expression ma...|
| [re2.ReplaceAll](#replaceall) ||
| [re2.ReplaceAllWithFunc](#replaceallwithfunc) ||


## 函数定义
### Compile

#### 详细描述
Compile parses a regular expression and returns, if successful,
a Regexp object that can be used to match against text.

When matching against text, the regexp returns a match that
begins as early as possible in the input (leftmost), and among those
it chooses the one that a backtracking search would have found first.
This so-called leftmost-first matching is the same semantics
that Perl, Python, and other implementations use, although this
package implements it without the expense of backtracking.
For POSIX leftmost-longest matching, see CompilePOSIX.


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


### CompilePOSIX

#### 详细描述
CompilePOSIX is like Compile but restricts the regular expression
to POSIX ERE (egrep) syntax and changes the match semantics to
leftmost-longest.

That is, when matching against text, the regexp returns a match that
begins as early as possible in the input (leftmost), and among those
it chooses a match that is as long as possible.
This so-called leftmost-longest matching is the same semantics
that early regular expression implementations used and that POSIX
specifies.

However, there can be multiple leftmost-longest matches, with different
submatch choices, and here this package diverges from POSIX.
Among the possible leftmost-longest matches, this package chooses
the one that a backtracking search would have found first, while POSIX
specifies that the match be chosen to maximize the length of the first
subexpression, then the second, and so on from left to right.
The POSIX rule is computationally prohibitive and not even well-defined.
See https://swtch.com/~rsc/regexp/regexp2.html#posix for details.


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


### ExtractEmail

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


### ExtractHostPort

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


### ExtractIP

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


### ExtractIPv4

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


### ExtractIPv6

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


### ExtractMac

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


### ExtractPath

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


### ExtractTTY

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


### ExtractURL

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


### Find

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


### FindAll

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


### FindAllIndex

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


### FindGroup

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


### FindGroupAll

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


### FindIndex

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


### FindSubmatch

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


### FindSubmatchAll

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


### FindSubmatchAllIndex

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


### FindSubmatchIndex

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


### Grok

#### 详细描述
Grok 用于将字符串 line 使用 Grok 以规则 rule 进行解析，并返回解析结果(map)，参考 https://doc.yonyoucloud.com/doc/logstash-best-practice-cn/filter/grok.html 获取更多信息。

Example:
```
str.Grok("04/18-00:59:45.385191", "%{MONTHNUM:month}/%{MONTHDAY:day}-%{TIME:time}") // map[HOUR:[00] MINUTE:[59] SECOND:[45.385191] day:[18] month:[04] time:[00:59:45.385191]]
```


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


### Match

#### 详细描述
Match 使用正则尝试匹配字符串 s，如果匹配成功返回 true，否则返回 false

Example:
```
re.Match("^[a-z]+$", "abc") // true
```


#### 定义

`Match(pattern string, s any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pattern | `string` |   |
| s | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### MustCompile

#### 详细描述
MustCompile is like Compile but panics if the expression cannot be parsed.
It simplifies safe initialization of global variables holding compiled regular
expressions.


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


### MustCompilePOSIX

#### 详细描述
MustCompilePOSIX is like CompilePOSIX but panics if the expression cannot be parsed.
It simplifies safe initialization of global variables holding compiled regular
expressions.


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


### QuoteMeta

#### 详细描述
QuoteMeta returns a string that escapes all regular expression metacharacters
inside the argument text; the returned string is a regular expression matching
the literal text.


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


### ReplaceAll

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


### ReplaceAllWithFunc

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


