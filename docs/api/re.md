# re

|函数名|函数描述/介绍|
|:------|:--------|
| [re.Compile](#compile) |Compile 将正则表达式编译为正则对象（导出名为 re.Compile） 参数: - expr: 正则表达式字符串 返回值: - 编译得到的正则对象，可调用 MatchString/FindString 等方法 - 错误信息（正则语法非法时返回）|
| [re.CompilePOSIX](#compileposix) |CompilePOSIX 按 POSIX ERE(egrep) 语法编译正则，匹配语义为左最长匹配（导出名为 re.CompilePOSIX） 参数: - expr: 正则表达式字符串 返回值: - 编译得到的 POSIX 正则对象 - 错误信息（正则语法非法时返回）|
| [re.ExtractEmail](#extractemail) |ExtractEmail 提取字符串中所有的 Email 地址（导出名为 re.ExtractEmail） 参数: - i: 待提取的输入（任意可转为字符串） 返回值: - 提取到的 Email 地址列表，未匹配返回空切片|
| [re.ExtractHostPort](#extracthostport) |ExtractHostPort 提取字符串中所有的 Host:Port（导出名为 re.ExtractHostPort） 参数: - i: 待提取的输入（任意可转为字符串） 返回值: - 提取到的 Host:Port 列表，未匹配返回空切片|
| [re.ExtractIP](#extractip) |ExtractIP 提取字符串中所有的 IP 地址（IPv4 与 IPv6）（导出名为 re.ExtractIP） 参数: - i: 待提取的输入（任意可转为字符串） 返回值: - 提取到的 IP 地址列表（先 IPv6 后 IPv4），未匹配返回空切片|
| [re.ExtractIPv4](#extractipv4) |ExtractIPv4 提取字符串中所有的 IPv4 地址（导出名为 re.ExtractIPv4） 参数: - i: 待提取的输入（任意可转为字符串） 返回值: - 提取到的 IPv4 地址列表，未匹配返回空切片|
| [re.ExtractIPv6](#extractipv6) |ExtractIPv6 提取字符串中所有的 IPv6 地址（导出名为 re.ExtractIPv6） 参数: - i: 待提取的输入（任意可转为字符串） 返回值: - 提取到的 IPv6 地址列表，未匹配返回空切片|
| [re.ExtractMac](#extractmac) |ExtractMac 提取字符串中所有的 MAC 地址（导出名为 re.ExtractMac） 参数: - i: 待提取的输入（任意可转为字符串） 返回值: - 提取到的 MAC 地址列表，未匹配返回空切片|
| [re.ExtractPath](#extractpath) |ExtractPath 提取字符串中所有的路径与查询字符串（导出名为 re.ExtractPath） 参数: - i: 待提取的输入（任意可转为字符串） 返回值: - 提取到的 路径(?查询) 列表，未匹配返回空切片|
| [re.ExtractTTY](#extracttty) |ExtractTTY 提取字符串中所有的 Linux/Unix 终端设备路径（导出名为 re.ExtractTTY） 参数: - i: 待提取的输入（任意可转为字符串） 返回值: - 提取到的设备文件路径列表，未匹配返回空切片|
| [re.ExtractURL](#extracturl) |ExtractURL 提取字符串中所有的 URL 地址（导出名为 re.ExtractURL） 参数: - i: 待提取的输入（任意可转为字符串） 返回值: - 提取到的 URL 列表，未匹配返回空切片|
| [re.Find](#find) |Find 使用正则尝试匹配字符串，如果匹配成功返回第一个匹配的字符串，否则返回空字符串 参数: - origin: 待匹配的输入（任意可转为字符串） - re: 正则表达式 返回值: - 第一个匹配的子串，未匹配返回空字符串|
| [re.FindAll](#findall) |FindAll 使用正则尝试匹配字符串，如果匹配成功返回所有匹配的字符串，否则返回空字符串切片 参数: - origin: 待匹配的输入（任意可转为字符串） - re: 正则表达式 返回值: - 所有匹配子串组成的切片，未匹配返回空切片|
| [re.FindAllIndex](#findallindex) |FindAllIndex 使用正则匹配字符串，返回所有匹配子串的起止位置（导出名为 re.FindAllIndex） 参数: - origin: 待匹配的输入（任意可转为字符串） - re: 正则表达式 返回值: - 二维整数切片，每项为 [起始位置, 结束位置]，未匹配返回空切片|
| [re.FindGroup](#findgroup) |FindGroup 使用正则匹配并按命名捕获组返回结果映射（导出名为 re.FindGroup） 键为捕获组名（未命名组用其序号字符串），值为匹配内容；键 &#34;0&#34; 表示整体匹配 参数: - i: 待匹配的输入（任意可转为字符串） - re: 含命名捕获组的正则表达式 返回值: - 命名捕获组到匹配内...|
| [re.FindGroupAll](#findgroupall) |FindGroupAll 使用正则匹配并按命名捕获组返回所有结果映射（导出名为 re.FindGroupAll） 每个匹配对应一个映射，键为捕获组名（未命名组用序号），键 &#34;0&#34; 为整体匹配 参数: - i: 待匹配的输入（任意可转为字符串） - raw: 含命名捕获组的正则表达式 返回值: - 映...|
| [re.FindIndex](#findindex) |FindIndex 使用正则匹配字符串，返回第一个匹配子串的起止位置（导出名为 re.FindIndex） 参数: - origin: 待匹配的输入（任意可转为字符串） - re: 正则表达式 返回值: - 长度为 2 的整数切片 [起始位置, 结束位置]，未匹配返回空切片|
| [re.FindSubmatch](#findsubmatch) |FindSubmatch 使用正则匹配字符串，返回第一个匹配及其子匹配（导出名为 re.FindSubmatch） 参数: - origin: 待匹配的输入（任意可转为字符串） - re: 含捕获组的正则表达式 返回值: - 字符串切片，第 0 项为整体匹配，其余为各捕获组，未匹配返回空切片|
| [re.FindSubmatchAll](#findsubmatchall) |FindSubmatchAll 使用正则匹配字符串，返回所有匹配及其子匹配（导出名为 re.FindSubmatchAll） 参数: - origin: 待匹配的输入（任意可转为字符串） - re: 含捕获组的正则表达式 返回值: - 二维字符串切片，每项为 [整体匹配, 捕获组...]，未匹配返回...|
| [re.FindSubmatchAllIndex](#findsubmatchallindex) |FindSubmatchAllIndex 使用正则匹配字符串，返回所有匹配及子匹配的位置（导出名为 re.FindSubmatchAllIndex） 参数: - origin: 待匹配的输入（任意可转为字符串） - re: 含捕获组的正则表达式 返回值: - 二维整数切片，每项每两个一组依次为整体匹...|
| [re.FindSubmatchIndex](#findsubmatchindex) |FindSubmatchIndex 使用正则匹配字符串，返回第一个匹配及子匹配的位置（导出名为 re.FindSubmatchIndex） 参数: - origin: 待匹配的输入（任意可转为字符串） - re: 含捕获组的正则表达式 返回值: - 整数切片，每两个一组依次为整体匹配与各捕获组的 [...|
| [re.Grok](#grok) |Grok 使用 Grok 规则解析字符串并返回解析结果（导出名为 re.Grok） 结果为字段名到取值的映射，可用 .Get(key) 取第一个值；参考 logstash grok 语法 参数: - line: 待解析的原始字符串 - rule: Grok 规则（如 &#34;%{MONTHNUM:mont...|
| [re.Match](#match) |Match 使用正则尝试匹配字符串，如果匹配成功返回 true，否则返回 false 参数: - pattern: 正则表达式 - s: 待匹配的字符串或字节切片 返回值: - 是否匹配成功|
| [re.MustCompile](#mustcompile) |MustCompile 编译正则表达式，语法非法时直接 panic（导出名为 re.MustCompile） 适用于编译期可确定合法的常量正则 参数: - str: 正则表达式字符串 返回值: - 编译得到的正则对象|
| [re.MustCompilePOSIX](#mustcompileposix) |MustCompilePOSIX 按 POSIX 语法编译正则，语法非法时直接 panic（导出名为 re.MustCompilePOSIX） 参数: - str: 正则表达式字符串 返回值: - 编译得到的 POSIX 正则对象|
| [re.QuoteMeta](#quotemeta) |QuoteMeta 转义字符串中所有正则元字符，使其可作为普通文本参与匹配（导出名为 re.QuoteMeta） 参数: - s: 原始字符串 返回值: - 转义后的字符串|
| [re.ReplaceAll](#replaceall) |ReplaceAll 使用正则匹配并替换为指定字符串（导出名为 re.ReplaceAll） 替换字符串支持 $1、${name} 等引用捕获组 参数: - origin: 原始输入（任意可转为字符串） - re: 正则表达式 - newStr: 替换字符串（支持 $1 等捕获组引用） 返回值: -...|
| [re.ReplaceAllWithFunc](#replaceallwithfunc) |ReplaceAllWithFunc 使用正则匹配并用回调函数生成替换内容（导出名为 re.ReplaceAllWithFunc） 参数: - origin: 原始输入（任意可转为字符串） - re: 正则表达式 - newStr: 回调函数 func(matched string) string，...|


## 函数定义
### Compile

#### 详细描述
Compile 将正则表达式编译为正则对象（导出名为 re.Compile）

参数:

  - expr: 正则表达式字符串



返回值:

  - 编译得到的正则对象，可调用 MatchString/FindString 等方法

  - 错误信息（正则语法非法时返回）




Example:

``````````````yak
r = re.Compile("^[a-z]+$")~
println(r.MatchString("abc"))   // OUT: true
assert r.MatchString("abc") == true, "Compile result should match lowercase letters"
``````````````


#### 定义

`Compile(expr string) (*regexp.Regexp, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| expr | `string` | 正则表达式字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*regexp.Regexp` | 编译得到的正则对象，可调用 MatchString/FindString 等方法 |
| r2 | `error` | 错误信息（正则语法非法时返回） |


### CompilePOSIX

#### 详细描述
CompilePOSIX 按 POSIX ERE(egrep) 语法编译正则，匹配语义为左最长匹配（导出名为 re.CompilePOSIX）

参数:

  - expr: 正则表达式字符串



返回值:

  - 编译得到的 POSIX 正则对象

  - 错误信息（正则语法非法时返回）




Example:

``````````````yak
r = re.CompilePOSIX("^[a-z]+$")~
println(r.MatchString("abc"))   // OUT: true
assert r.MatchString("abc") == true, "CompilePOSIX result should match lowercase letters"
``````````````


#### 定义

`CompilePOSIX(expr string) (*regexp.Regexp, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| expr | `string` | 正则表达式字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*regexp.Regexp` | 编译得到的 POSIX 正则对象 |
| r2 | `error` | 错误信息（正则语法非法时返回） |


### ExtractEmail

#### 详细描述
ExtractEmail 提取字符串中所有的 Email 地址（导出名为 re.ExtractEmail）

参数:

  - i: 待提取的输入（任意可转为字符串）



返回值:

  - 提取到的 Email 地址列表，未匹配返回空切片




Example:

``````````````yak
emails = re.ExtractEmail("hello your email is anonymous@yaklang.io")
println(emails[0])   // OUT: anonymous@yaklang.io
assert len(emails) == 1, "ExtractEmail should find one email"
``````````````


#### 定义

`ExtractEmail(i any) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待提取的输入（任意可转为字符串） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 提取到的 Email 地址列表，未匹配返回空切片 |


### ExtractHostPort

#### 详细描述
ExtractHostPort 提取字符串中所有的 Host:Port（导出名为 re.ExtractHostPort）

参数:

  - i: 待提取的输入（任意可转为字符串）



返回值:

  - 提取到的 Host:Port 列表，未匹配返回空切片




Example:

``````````````yak
hps = re.ExtractHostPort("open: 127.0.0.1:80 and 127.0.0.1:443")
println(hps)   // OUT: [127.0.0.1:80 127.0.0.1:443]
assert len(hps) == 2 && hps[0] == "127.0.0.1:80", "ExtractHostPort should find both host:port"
``````````````


#### 定义

`ExtractHostPort(i any) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待提取的输入（任意可转为字符串） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 提取到的 Host:Port 列表，未匹配返回空切片 |


### ExtractIP

#### 详细描述
ExtractIP 提取字符串中所有的 IP 地址（IPv4 与 IPv6）（导出名为 re.ExtractIP）

参数:

  - i: 待提取的输入（任意可转为字符串）



返回值:

  - 提取到的 IP 地址列表（先 IPv6 后 IPv4），未匹配返回空切片




Example:

``````````````yak
ips = re.ExtractIP("local ip is 127.0.0.1 here")
println(ips)   // OUT: [127.0.0.1]
assert len(ips) == 1 && ips[0] == "127.0.0.1", "ExtractIP should find the ipv4 address"
``````````````


#### 定义

`ExtractIP(i any) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待提取的输入（任意可转为字符串） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 提取到的 IP 地址列表（先 IPv6 后 IPv4），未匹配返回空切片 |


### ExtractIPv4

#### 详细描述
ExtractIPv4 提取字符串中所有的 IPv4 地址（导出名为 re.ExtractIPv4）

参数:

  - i: 待提取的输入（任意可转为字符串）



返回值:

  - 提取到的 IPv4 地址列表，未匹配返回空切片




Example:

``````````````yak
ips = re.ExtractIPv4("hello your local ip is 127.0.0.1, your public ip is 1.1.1.1")
println(ips)   // OUT: [127.0.0.1 1.1.1.1]
assert len(ips) == 2 && ips[0] == "127.0.0.1", "ExtractIPv4 should find both addresses"
``````````````


#### 定义

`ExtractIPv4(i any) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待提取的输入（任意可转为字符串） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 提取到的 IPv4 地址列表，未匹配返回空切片 |


### ExtractIPv6

#### 详细描述
ExtractIPv6 提取字符串中所有的 IPv6 地址（导出名为 re.ExtractIPv6）

参数:

  - i: 待提取的输入（任意可转为字符串）



返回值:

  - 提取到的 IPv6 地址列表，未匹配返回空切片




Example:

``````````````yak
ips = re.ExtractIPv6("public ipv6 is 2001:4860:4860::8888 here")
println(ips[0])   // OUT: 2001:4860:4860::8888
assert len(ips) >= 1, "ExtractIPv6 should find the ipv6 address"
``````````````


#### 定义

`ExtractIPv6(i any) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待提取的输入（任意可转为字符串） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 提取到的 IPv6 地址列表，未匹配返回空切片 |


### ExtractMac

#### 详细描述
ExtractMac 提取字符串中所有的 MAC 地址（导出名为 re.ExtractMac）

参数:

  - i: 待提取的输入（任意可转为字符串）



返回值:

  - 提取到的 MAC 地址列表，未匹配返回空切片




Example:

``````````````yak
macs = re.ExtractMac("hello your mac is 00:11:22:33:44:55")
println(macs[0])   // OUT: 00:11:22:33:44:55
assert len(macs) == 1, "ExtractMac should find one mac address"
``````````````


#### 定义

`ExtractMac(i any) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待提取的输入（任意可转为字符串） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 提取到的 MAC 地址列表，未匹配返回空切片 |


### ExtractPath

#### 详细描述
ExtractPath 提取字符串中所有的路径与查询字符串（导出名为 re.ExtractPath）

参数:

  - i: 待提取的输入（任意可转为字符串）



返回值:

  - 提取到的 路径(?查询) 列表，未匹配返回空切片




Example:

``````````````yak
paths = re.ExtractPath("visit yaklang.com/docs/api/re?name=anonymous now")
println(paths[0])   // OUT: /docs/api/re?name=anonymous
assert len(paths) >= 1, "ExtractPath should extract the path with query"
``````````````


#### 定义

`ExtractPath(i any) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待提取的输入（任意可转为字符串） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 提取到的 路径(?查询) 列表，未匹配返回空切片 |


### ExtractTTY

#### 详细描述
ExtractTTY 提取字符串中所有的 Linux/Unix 终端设备路径（导出名为 re.ExtractTTY）

参数:

  - i: 待提取的输入（任意可转为字符串）



返回值:

  - 提取到的设备文件路径列表，未匹配返回空切片




Example:

``````````````yak
ttys = re.ExtractTTY("hello your tty is /dev/pts/1")
println(ttys[0])   // OUT: /dev/pts/1
assert len(ttys) == 1, "ExtractTTY should find one tty path"
``````````````


#### 定义

`ExtractTTY(i any) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待提取的输入（任意可转为字符串） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 提取到的设备文件路径列表，未匹配返回空切片 |


### ExtractURL

#### 详细描述
ExtractURL 提取字符串中所有的 URL 地址（导出名为 re.ExtractURL）

参数:

  - i: 待提取的输入（任意可转为字符串）



返回值:

  - 提取到的 URL 列表，未匹配返回空切片




Example:

``````````````yak
urls = re.ExtractURL("Yak site: https://yaklang.com and https://yaklang.io")
println(urls)   // OUT: [https://yaklang.com https://yaklang.io]
assert len(urls) == 2, "ExtractURL should find both urls"
``````````````


#### 定义

`ExtractURL(i any) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待提取的输入（任意可转为字符串） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 提取到的 URL 列表，未匹配返回空切片 |


### Find

#### 详细描述
Find 使用正则尝试匹配字符串，如果匹配成功返回第一个匹配的字符串，否则返回空字符串

参数:

  - origin: 待匹配的输入（任意可转为字符串）

  - re: 正则表达式



返回值:

  - 第一个匹配的子串，未匹配返回空字符串




Example:

``````````````yak
result = re.Find("apple is an easy word", "^[a-z]+")
println(result)   // OUT: apple
assert result == "apple", "Find should return first match"
``````````````


#### 定义

`Find(origin any, re string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| origin | `any` | 待匹配的输入（任意可转为字符串） |
| re | `string` | 正则表达式 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 第一个匹配的子串，未匹配返回空字符串 |


### FindAll

#### 详细描述
FindAll 使用正则尝试匹配字符串，如果匹配成功返回所有匹配的字符串，否则返回空字符串切片

参数:

  - origin: 待匹配的输入（任意可转为字符串）

  - re: 正则表达式



返回值:

  - 所有匹配子串组成的切片，未匹配返回空切片




Example:

``````````````yak
matches = re.FindAll("Well,yakit is GUI client for yaklang", "yak[a-z]+")
println(matches)   // OUT: [yakit yaklang]
assert len(matches) == 2, "FindAll should find two matches"
assert matches[0] == "yakit" && matches[1] == "yaklang", "FindAll should return all matches in order"
``````````````


#### 定义

`FindAll(origin any, re string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| origin | `any` | 待匹配的输入（任意可转为字符串） |
| re | `string` | 正则表达式 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 所有匹配子串组成的切片，未匹配返回空切片 |


### FindAllIndex

#### 详细描述
FindAllIndex 使用正则匹配字符串，返回所有匹配子串的起止位置（导出名为 re.FindAllIndex）

参数:

  - origin: 待匹配的输入（任意可转为字符串）

  - re: 正则表达式



返回值:

  - 二维整数切片，每项为 [起始位置, 结束位置]，未匹配返回空切片




Example:

``````````````yak
idx = re.FindAllIndex("Well,yakit is GUI client for yaklang", "yak[a-z]+")
println(idx)   // OUT: [[5 10] [29 36]]
assert len(idx) == 2, "FindAllIndex should locate two matches"
assert idx[0][0] == 5 && idx[0][1] == 10, "first match index should be [5,10]"
``````````````


#### 定义

`FindAllIndex(origin any, re string) [][]int`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| origin | `any` | 待匹配的输入（任意可转为字符串） |
| re | `string` | 正则表达式 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[][]int` | 二维整数切片，每项为 [起始位置, 结束位置]，未匹配返回空切片 |


### FindGroup

#### 详细描述
FindGroup 使用正则匹配并按命名捕获组返回结果映射（导出名为 re.FindGroup）

键为捕获组名（未命名组用其序号字符串），值为匹配内容；键 &#34;0&#34; 表示整体匹配

参数:

  - i: 待匹配的输入（任意可转为字符串）

  - re: 含命名捕获组的正则表达式



返回值:

  - 命名捕获组到匹配内容的映射，未匹配返回空映射




Example:

``````````````yak
g = re.FindGroup("Well,yakit is GUI client for yaklang", "yak(?P<other>[a-z]+)")
println(g["other"])   // OUT: it
assert g["0"] == "yakit", "group 0 should be whole match"
assert g["other"] == "it", "named group other should be it"
``````````````


#### 定义

`FindGroup(i any, re string) map[string]string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待匹配的输入（任意可转为字符串） |
| re | `string` | 含命名捕获组的正则表达式 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `map[string]string` | 命名捕获组到匹配内容的映射，未匹配返回空映射 |


### FindGroupAll

#### 详细描述
FindGroupAll 使用正则匹配并按命名捕获组返回所有结果映射（导出名为 re.FindGroupAll）

每个匹配对应一个映射，键为捕获组名（未命名组用序号），键 &#34;0&#34; 为整体匹配

参数:

  - i: 待匹配的输入（任意可转为字符串）

  - raw: 含命名捕获组的正则表达式



返回值:

  - 映射切片，每项对应一个匹配，未匹配返回空切片




Example:

``````````````yak
gs = re.FindGroupAll("Well,yakit is GUI client for yaklang", "yak(?P<other>[a-z]+)")
println(len(gs))   // OUT: 2
assert gs[0]["other"] == "it" && gs[1]["other"] == "lang", "FindGroupAll should capture both named groups"
``````````````


#### 定义

`FindGroupAll(i any, raw string) []map[string]string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待匹配的输入（任意可转为字符串） |
| raw | `string` | 含命名捕获组的正则表达式 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]map[string]string` | 映射切片，每项对应一个匹配，未匹配返回空切片 |


### FindIndex

#### 详细描述
FindIndex 使用正则匹配字符串，返回第一个匹配子串的起止位置（导出名为 re.FindIndex）

参数:

  - origin: 待匹配的输入（任意可转为字符串）

  - re: 正则表达式



返回值:

  - 长度为 2 的整数切片 [起始位置, 结束位置]，未匹配返回空切片




Example:

``````````````yak
idx = re.FindIndex("Well,yakit is GUI client for yaklang", "yak[a-z]+")
println(idx)   // OUT: [5 10]
assert idx[0] == 5 && idx[1] == 10, "FindIndex should return [5,10]"
``````````````


#### 定义

`FindIndex(origin any, re string) []int`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| origin | `any` | 待匹配的输入（任意可转为字符串） |
| re | `string` | 正则表达式 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]int` | 长度为 2 的整数切片 [起始位置, 结束位置]，未匹配返回空切片 |


### FindSubmatch

#### 详细描述
FindSubmatch 使用正则匹配字符串，返回第一个匹配及其子匹配（导出名为 re.FindSubmatch）

参数:

  - origin: 待匹配的输入（任意可转为字符串）

  - re: 含捕获组的正则表达式



返回值:

  - 字符串切片，第 0 项为整体匹配，其余为各捕获组，未匹配返回空切片




Example:

``````````````yak
m = re.FindSubmatch("Well,yakit is GUI client for yaklang", "yak([a-z]+)")
println(m)   // OUT: [yakit it]
assert m[0] == "yakit" && m[1] == "it", "FindSubmatch should return whole match and group"
``````````````


#### 定义

`FindSubmatch(origin any, re string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| origin | `any` | 待匹配的输入（任意可转为字符串） |
| re | `string` | 含捕获组的正则表达式 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 字符串切片，第 0 项为整体匹配，其余为各捕获组，未匹配返回空切片 |


### FindSubmatchAll

#### 详细描述
FindSubmatchAll 使用正则匹配字符串，返回所有匹配及其子匹配（导出名为 re.FindSubmatchAll）

参数:

  - origin: 待匹配的输入（任意可转为字符串）

  - re: 含捕获组的正则表达式



返回值:

  - 二维字符串切片，每项为 [整体匹配, 捕获组...]，未匹配返回空切片




Example:

``````````````yak
all = re.FindSubmatchAll("Well,yakit is GUI client for yaklang", "yak([a-z]+)")
println(all)   // OUT: [[yakit it] [yaklang lang]]
assert len(all) == 2, "FindSubmatchAll should find two matches"
assert all[1][1] == "lang", "second group should be lang"
``````````````


#### 定义

`FindSubmatchAll(origin any, re string) [][]string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| origin | `any` | 待匹配的输入（任意可转为字符串） |
| re | `string` | 含捕获组的正则表达式 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[][]string` | 二维字符串切片，每项为 [整体匹配, 捕获组...]，未匹配返回空切片 |


### FindSubmatchAllIndex

#### 详细描述
FindSubmatchAllIndex 使用正则匹配字符串，返回所有匹配及子匹配的位置（导出名为 re.FindSubmatchAllIndex）

参数:

  - origin: 待匹配的输入（任意可转为字符串）

  - re: 含捕获组的正则表达式



返回值:

  - 二维整数切片，每项每两个一组依次为整体匹配与各捕获组的 [起始, 结束]，未匹配返回空切片




Example:

``````````````yak
idx = re.FindSubmatchAllIndex("Well,yakit is GUI client for yaklang", "yak([a-z]+)")
println(idx)   // OUT: [[5 10 8 10] [29 36 32 36]]
assert len(idx) == 2, "FindSubmatchAllIndex should find two matches"
``````````````


#### 定义

`FindSubmatchAllIndex(origin any, re string) [][]int`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| origin | `any` | 待匹配的输入（任意可转为字符串） |
| re | `string` | 含捕获组的正则表达式 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[][]int` | 二维整数切片，每项每两个一组依次为整体匹配与各捕获组的 [起始, 结束]，未匹配返回空切片 |


### FindSubmatchIndex

#### 详细描述
FindSubmatchIndex 使用正则匹配字符串，返回第一个匹配及子匹配的位置（导出名为 re.FindSubmatchIndex）

参数:

  - origin: 待匹配的输入（任意可转为字符串）

  - re: 含捕获组的正则表达式



返回值:

  - 整数切片，每两个一组依次为整体匹配与各捕获组的 [起始, 结束]，未匹配返回空切片




Example:

``````````````yak
idx = re.FindSubmatchIndex("Well,yakit is GUI client for yaklang", "yak([a-z]+)")
println(idx)   // OUT: [5 10 8 10]
assert idx[0] == 5 && idx[1] == 10, "FindSubmatchIndex should locate whole match at [5,10]"
``````````````


#### 定义

`FindSubmatchIndex(origin any, re string) []int`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| origin | `any` | 待匹配的输入（任意可转为字符串） |
| re | `string` | 含捕获组的正则表达式 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]int` | 整数切片，每两个一组依次为整体匹配与各捕获组的 [起始, 结束]，未匹配返回空切片 |


### Grok

#### 详细描述
Grok 使用 Grok 规则解析字符串并返回解析结果（导出名为 re.Grok）

结果为字段名到取值的映射，可用 .Get(key) 取第一个值；参考 logstash grok 语法

参数:

  - line: 待解析的原始字符串

  - rule: Grok 规则（如 &#34;%{MONTHNUM:month}/%{MONTHDAY:day}-%{TIME:time}&#34;）



返回值:

  - Grok 解析结果对象，解析失败返回空结果，可用 .Get(name) 取值




Example:

``````````````yak
result = re.Grok("04/18-00:59:45.385191", "%{MONTHNUM:month}/%{MONTHDAY:day}-%{TIME:time}")
println(result.Get("month"))   // OUT: 04
assert result.Get("day") == "18", "Grok should capture the day field"
assert result.Get("time") == "00:59:45.385191", "Grok should capture the time field"
``````````````


#### 定义

`Grok(line string, rule string) GrokResult`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| line | `string` | 待解析的原始字符串 |
| rule | `string` | Grok 规则（如 &#34;%{MONTHNUM:month}/%{MONTHDAY:day}-%{TIME:time}&#34;） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GrokResult` | Grok 解析结果对象，解析失败返回空结果，可用 .Get(name) 取值 |


### Match

#### 详细描述
Match 使用正则尝试匹配字符串，如果匹配成功返回 true，否则返回 false

参数:

  - pattern: 正则表达式

  - s: 待匹配的字符串或字节切片



返回值:

  - 是否匹配成功




Example:

``````````````yak
ok = re.Match("^[a-z]+$", "abc")
println(ok)   // OUT: true
assert ok == true, "Match should match lowercase letters"
assert re.Match("^[a-z]+$", "abc123") == false, "Match should fail when extra chars present"
``````````````


#### 定义

`Match(pattern string, s any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pattern | `string` | 正则表达式 |
| s | `any` | 待匹配的字符串或字节切片 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 是否匹配成功 |


### MustCompile

#### 详细描述
MustCompile 编译正则表达式，语法非法时直接 panic（导出名为 re.MustCompile）

适用于编译期可确定合法的常量正则

参数:

  - str: 正则表达式字符串



返回值:

  - 编译得到的正则对象




Example:

``````````````yak
r = re.MustCompile("^[a-z]+$")
println(r.MatchString("abc"))   // OUT: true
assert r.MatchString("abc") == true, "MustCompile result should match lowercase letters"
``````````````


#### 定义

`MustCompile(str string) *regexp.Regexp`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| str | `string` | 正则表达式字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*regexp.Regexp` | 编译得到的正则对象 |


### MustCompilePOSIX

#### 详细描述
MustCompilePOSIX 按 POSIX 语法编译正则，语法非法时直接 panic（导出名为 re.MustCompilePOSIX）

参数:

  - str: 正则表达式字符串



返回值:

  - 编译得到的 POSIX 正则对象




Example:

``````````````yak
r = re.MustCompilePOSIX("^[a-z]+$")
println(r.MatchString("abc"))   // OUT: true
assert r.MatchString("abc") == true, "MustCompilePOSIX result should match lowercase letters"
``````````````


#### 定义

`MustCompilePOSIX(str string) *regexp.Regexp`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| str | `string` | 正则表达式字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*regexp.Regexp` | 编译得到的 POSIX 正则对象 |


### QuoteMeta

#### 详细描述
QuoteMeta 转义字符串中所有正则元字符，使其可作为普通文本参与匹配（导出名为 re.QuoteMeta）

参数:

  - s: 原始字符串



返回值:

  - 转义后的字符串




Example:

``````````````yak
q = re.QuoteMeta("a.b+c")
println(q)   // OUT: a\.b\+c
assert q == "a\\.b\\+c", "QuoteMeta should escape . and +"
``````````````


#### 定义

`QuoteMeta(s string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` | 原始字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 转义后的字符串 |


### ReplaceAll

#### 详细描述
ReplaceAll 使用正则匹配并替换为指定字符串（导出名为 re.ReplaceAll）

替换字符串支持 $1、${name} 等引用捕获组

参数:

  - origin: 原始输入（任意可转为字符串）

  - re: 正则表达式

  - newStr: 替换字符串（支持 $1 等捕获组引用）



返回值:

  - 替换完成后的字符串




Example:

``````````````yak
result = re.ReplaceAll("yakit is programming language", "yak([a-z]+)", "yaklang")
println(result)   // OUT: yaklang is programming language
assert result == "yaklang is programming language", "ReplaceAll should replace matched token"
``````````````


#### 定义

`ReplaceAll(origin any, re string, newStr any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| origin | `any` | 原始输入（任意可转为字符串） |
| re | `string` | 正则表达式 |
| newStr | `any` | 替换字符串（支持 $1 等捕获组引用） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 替换完成后的字符串 |


### ReplaceAllWithFunc

#### 详细描述
ReplaceAllWithFunc 使用正则匹配并用回调函数生成替换内容（导出名为 re.ReplaceAllWithFunc）

参数:

  - origin: 原始输入（任意可转为字符串）

  - re: 正则表达式

  - newStr: 回调函数 func(matched string) string，入参为每个匹配，返回替换后的内容



返回值:

  - 替换完成后的字符串




Example:

``````````````yak
result = re.ReplaceAllWithFunc("yakit is programming language", "yak([a-z]+)", func(s) {
    return "yaklang"
})
println(result)   // OUT: yaklang is programming language
assert result == "yaklang is programming language", "ReplaceAllWithFunc should replace matched token"
``````````````


#### 定义

`ReplaceAllWithFunc(origin any, re string, newStr func(string) string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| origin | `any` | 原始输入（任意可转为字符串） |
| re | `string` | 正则表达式 |
| newStr | `func(string) string` | 回调函数 func(matched string) string，入参为每个匹配，返回替换后的内容 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 替换完成后的字符串 |


