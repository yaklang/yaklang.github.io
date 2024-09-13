# re

|函数名|函数描述/介绍|
|:------|:--------|
| [re.Compile](#compile) |Compile 将正则表达式解析为一个正则表达式结构体引用  |
| [re.CompilePOSIX](#compileposix) |CompilePOSIX 将正则表达式解析为一个符合 POSIX ERE(egrep) 语法的正则表达式结构体引用，并且匹配语义改为左最长匹配  |
| [re.ExtractEmail](#extractemail) |ExtractEmail 提取字符串中所有的 Email 地址  |
| [re.ExtractHostPort](#extracthostport) |ExtractHostPort 提取字符串中所有的 Host:Port  |
| [re.ExtractIP](#extractip) |ExtractIP 提取字符串中所有的 IP 地址  |
| [re.ExtractIPv4](#extractipv4) |ExtractIPv4 提取字符串中所有的 IPv4 地址  |
| [re.ExtractIPv6](#extractipv6) |ExtractIPv6 提取字符串中所有的 IPv6 地址  |
| [re.ExtractMac](#extractmac) |ExtractMac 提取字符串中所有的 MAC 地址  |
| [re.ExtractPath](#extractpath) |ExtractPath 提取URL中的路径和查询字符串  |
| [re.ExtractTTY](#extracttty) |ExtractTTY 提取字符串中所有的Linux/Unix系统中的设备文件路径  |
| [re.ExtractURL](#extracturl) |ExtractURL 提取字符串中所有的 URL 地址  |
| [re.Find](#find) |Find 使用正则尝试匹配字符串，如果匹配成功返回第一个匹配的字符串，否则返回空字符串  |
| [re.FindAll](#findall) |FindAll 使用正则尝试匹配字符串，如果匹配成功返回所有匹配的字符串，否则返回空字符串切片  |
| [re.FindAllIndex](#findallindex) |FindAllIndex 使用正则尝试匹配字符串，如果匹配成功返回所有匹配的字符串的起始位置和结束位置，否则返回空整数的二维切片  |
| [re.FindGroup](#findgroup) |FindGroup 使用正则表达式匹配字符串，如果匹配成功返回一个映射，其键名为正则表达式中的命名捕获组，键值为匹配到的字符串，否则返回空映射  |
| [re.FindGroupAll](#findgroupall) |FindGroupAll 使用正则表达式匹配字符串，如果匹配成功返回一个映射切片，其键名为正则表达式中的命名捕获组，键值为匹配到的字符串，否则返回空映射切片  |
| [re.FindIndex](#findindex) |FindIndex 使用正则尝试匹配字符串，如果匹配成功返回一个长度为2的整数切片，第一个元素为起始位置，第二个元素为结束位置，否则返回空整数切片  |
| [re.FindSubmatch](#findsubmatch) |FindSubmatch 使用正则尝试匹配字符串，如果匹配成功返回第一个匹配的字符串以及子匹配的字符串，否则返回空字符串切片  |
| [re.FindSubmatchAll](#findsubmatchall) |FindSubmatchAll 使用正则尝试匹配字符串，如果匹配成功返回所有匹配的字符串以及子匹配的字符串，否则返回空字符串切片的二维切片  |
| [re.FindSubmatchAllIndex](#findsubmatchallindex) |FindSubmatchAllIndex 使用正则尝试匹配字符串，如果匹配成功返回所有匹配的字符串以及子匹配的字符串的起始位置和结束位置，否则返回空整数切片的二维切片  |
| [re.FindSubmatchIndex](#findsubmatchindex) |FindSubmatchIndex 使用正则尝试匹配字符串，如果匹配成功返回第一个匹配的字符串以及子匹配的字符串的起始位置和结束位置，否则返回空整数切片  |
| [re.Grok](#grok) |Grok 用于将字符串 line 使用 Grok 以规则 rule 进行解析，并返回解析结果(map)，参考 https://doc.yonyoucloud.com/doc/logstash-best-practice-cn/filter/grok.html 获取更多信息。  |
| [re.Match](#match) |Match 使用正则尝试匹配字符串，如果匹配成功返回 true，否则返回 false  |
| [re.MustCompile](#mustcompile) |MustCompile 将正则表达式解析为一个正则表达式对象结构体引用，如果解析失败则会引发崩溃  |
| [re.MustCompilePOSIX](#mustcompileposix) |MustCompilePOSIX 将正则表达式解析为一个POSIX正则表达式结构体引用，如果解析失败则会引发崩溃  |
| [re.QuoteMeta](#quotemeta) |QuoteMeta 返回一个字符串，该字符串是将 s 中所有正则表达式元字符进行转义后的结果  |
| [re.ReplaceAll](#replaceall) |ReplaceAll 使用正则表达式匹配并替换字符串，并返回替换后的字符串  |
| [re.ReplaceAllWithFunc](#replaceallwithfunc) |ReplaceAllWithFunc 使用正则表达式匹配并使用自定义的函数替换字符串，并返回替换后的字符串  |


## 函数定义
### Compile

#### 详细描述
Compile 将正则表达式解析为一个正则表达式结构体引用

Example:
```
re.Compile("^[a-z]+$")
```


#### 定义

`Compile(expr string) (*regexp.Regexp, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| expr | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*regexp.Regexp` |   |
| r2 | `error` |   |


### CompilePOSIX

#### 详细描述
CompilePOSIX 将正则表达式解析为一个符合 POSIX ERE(egrep) 语法的正则表达式结构体引用，并且匹配语义改为左最长匹配

Example:
```
re.CompilePOSIX("^[a-z]+$")
```


#### 定义

`CompilePOSIX(expr string) (*regexp.Regexp, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| expr | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*regexp.Regexp` |   |
| r2 | `error` |   |


### ExtractEmail

#### 详细描述
ExtractEmail 提取字符串中所有的 Email 地址

Example:
```
re.ExtractEmail("hello your email is anonymous@yaklang.io") // ["anonymous@yaklang.io"]
```


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
ExtractHostPort 提取字符串中所有的 Host:Port

Example:
```
re.ExtractHostPort("Open Host:Port\n127.0.0.1:80\n127.0.0.1:443") // ["127.0.0.1:80", "127.0.0.1:443"]
```


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
ExtractIP 提取字符串中所有的 IP 地址

Example:
```
re.ExtractIP("hello your local ip is 127.0.0.1, your local ipv6 ip is fe80::1") // ["127.0.0.1", "fe80::1"]
```


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
ExtractIPv4 提取字符串中所有的 IPv4 地址

Example:
```
re.ExtractIPv4("hello your local ip is 127.0.0.1, your public ip is 1.1.1.1") // ["127.0.0.1", "1.1.1.1"]
```


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
ExtractIPv6 提取字符串中所有的 IPv6 地址

Example:
```
re.ExtractIPv6("hello your local ipv6 ip is fe80::1, your public ipv6 ip is 2001:4860:4860::8888") // ["fe80::1", "2001:4860:4860::8888"]
```


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
ExtractMac 提取字符串中所有的 MAC 地址

Example:
```
re.ExtractMac("hello your mac is 00:00:00:00:00:00") // ["00:00:00:00:00:00"]
```


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
ExtractPath 提取URL中的路径和查询字符串

Example:
```
re.ExtractPath("visit this website: yaklang.com/docs/api/re?name=anonymous") // ["/docs/api/re?name=anonymous"]
```


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
ExtractTTY 提取字符串中所有的Linux/Unix系统中的设备文件路径

Example:
```
re.ExtractTTY("hello your tty is /dev/pts/1") // ["/dev/pts/1"]
```


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
ExtractURL 提取字符串中所有的 URL 地址

Example:
```
re.ExtractURL("Yak official website: https://yaklang.com and https://yaklang.io") // ["https://yaklang.com", "https://yaklang.io"]
```


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
Find 使用正则尝试匹配字符串，如果匹配成功返回第一个匹配的字符串，否则返回空字符串

Example:
```
re.Find("apple is an easy word", "^[a-z]+") // "apple"
```


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
FindAll 使用正则尝试匹配字符串，如果匹配成功返回所有匹配的字符串，否则返回空字符串切片

Example:
```
re.FindAll("Well,yakit is GUI client for yaklang", "yak[a-z]+") // ["yakit", "yaklang"]
```


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
FindAllIndex 使用正则尝试匹配字符串，如果匹配成功返回所有匹配的字符串的起始位置和结束位置，否则返回空整数的二维切片

Example:
```
re.FindAllIndex("Well,yakit is GUI client for yaklang", "yak[a-z]+") // [[5, 10], [29, 36]]
```


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
FindGroup 使用正则表达式匹配字符串，如果匹配成功返回一个映射，其键名为正则表达式中的命名捕获组，键值为匹配到的字符串，否则返回空映射

Example:
```
// {"0": "yakit", "other": "it"}
re.FindGroup("Well,yakit is GUI client for yaklang", "yak(?P<other>[a-z]+)")
```


#### 定义

`FindGroup(i any, re string) map[string]string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |
| re | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `map[string]string` |   |


### FindGroupAll

#### 详细描述
FindGroupAll 使用正则表达式匹配字符串，如果匹配成功返回一个映射切片，其键名为正则表达式中的命名捕获组，键值为匹配到的字符串，否则返回空映射切片

Example:
```
// [{"0": "yakit", "other": "it"}, {"0": "yaklang", "other": "lang"}]
re.FindGroupAll("Well,yakit is GUI client for yaklang", "yak(?P<other>[a-z]+)")
```


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
FindIndex 使用正则尝试匹配字符串，如果匹配成功返回一个长度为2的整数切片，第一个元素为起始位置，第二个元素为结束位置，否则返回空整数切片

Example:
```
re.FindIndex("Well,yakit is GUI client for yaklang", "yak[a-z]+") // [5, 10]
```


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
FindSubmatch 使用正则尝试匹配字符串，如果匹配成功返回第一个匹配的字符串以及子匹配的字符串，否则返回空字符串切片

Example:
```
re.FindSubmatch("Well,yakit is GUI client for yaklang", "yak([a-z]+)") // ["yakit", "it"]
```


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
FindSubmatchAll 使用正则尝试匹配字符串，如果匹配成功返回所有匹配的字符串以及子匹配的字符串，否则返回空字符串切片的二维切片

Example:
```
// [["yakit", "it"], ["yaklang", "lang"]]
re.FindSubmatchAll("Well,yakit is GUI client for yaklang", "yak([a-z]+)")
```


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
FindSubmatchAllIndex 使用正则尝试匹配字符串，如果匹配成功返回所有匹配的字符串以及子匹配的字符串的起始位置和结束位置，否则返回空整数切片的二维切片

Example:
```
// [[5, 10, 8, 10], [29, 36, 32, 36]]
re.FindSubmatchAllIndex("Well,yakit is GUI client for yaklang", "yak([a-z]+)")
```


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
FindSubmatchIndex 使用正则尝试匹配字符串，如果匹配成功返回第一个匹配的字符串以及子匹配的字符串的起始位置和结束位置，否则返回空整数切片

Example:
```
re.FindSubmatchIndex("Well,yakit is GUI client for yaklang", "yak([a-z]+)") // [5, 10, 8, 10]
```


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
Match 使用正则尝试匹配字符串，如果匹配成功返回 true，否则返回 false

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
MustCompile 将正则表达式解析为一个正则表达式对象结构体引用，如果解析失败则会引发崩溃

Example:
```
re.MustCompile("^[a-z]+$")
```


#### 定义

`MustCompile(str string) *regexp.Regexp`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| str | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*regexp.Regexp` |   |


### MustCompilePOSIX

#### 详细描述
MustCompilePOSIX 将正则表达式解析为一个POSIX正则表达式结构体引用，如果解析失败则会引发崩溃

Example:
```
re.MustCompilePOSIX("^[a-z]+$")
```


#### 定义

`MustCompilePOSIX(str string) *regexp.Regexp`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| str | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*regexp.Regexp` |   |


### QuoteMeta

#### 详细描述
QuoteMeta 返回一个字符串，该字符串是将 s 中所有正则表达式元字符进行转义后的结果

Example:
```
str.QuoteMeta("^[a-z]+$") // "\^\\[a-z\]\\+$"
```


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
ReplaceAll 使用正则表达式匹配并替换字符串，并返回替换后的字符串

Example:
```
// "yaklang is a programming language"
re.ReplaceAll("yakit is programming language", "yak([a-z]+)", "yaklang")
```


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
ReplaceAllWithFunc 使用正则表达式匹配并使用自定义的函数替换字符串，并返回替换后的字符串

Example:
```
// "yaklang is a programming language"
re.ReplaceAllWithFunc("yakit is programming language", "yak([a-z]+)", func(s) {
return "yaklang"
})
```


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


