# re {#library-re}

`re` 库是基于 Go RE2 引擎的正则表达式工具，提供匹配、查找、分组提取、替换，以及一批开箱即用的常见信息抽取器（IP、邮箱、URL、MAC 等）和 Grok 解析，是文本处理与数据提取的主力。

典型使用场景：

- 匹配与查找：`re.Match` 判断是否匹配，`re.Find` / `re.FindAll` 查找，`re.FindSubmatch` / `re.FindGroup` / `re.FindGroupAll` 提取分组（含命名分组）。
- 替换：`re.ReplaceAll` 文本替换，`re.ReplaceAllWithFunc` 用回调动态替换。
- 内置抽取器：`re.ExtractIP` / `re.ExtractIPv4` / `re.ExtractEmail` / `re.ExtractURL` / `re.ExtractMac` / `re.ExtractHostPort` 等直接抽取常见实体，`re.Grok` 用 Grok 规则结构化解析日志。
- 编译：`re.Compile` / `re.MustCompile` 预编译复用，`re.QuoteMeta` 转义。

与相邻库的关系：`re` 基于标准 RE2（不支持反向引用等高级特性），需要时用 `re2`（支持更丰富语法）；常与 `str`（字符串处理）、`json`（数据抽取）配合。提示：含 `\d` 等的模式建议用反引号原始串书写。

> 共 28 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [re.Compile](#compile) | `expr string` | `*regexp.Regexp, error` | 将正则表达式编译为正则对象（导出名为 re.Compile） |
| [re.CompilePOSIX](#compileposix) | `expr string` | `*regexp.Regexp, error` | 按 POSIX ERE(egrep) 语法编译正则，匹配语义为左最长匹配（导出名为 re.CompilePOSIX） |
| [re.ExtractEmail](#extractemail) | `i any` | `[]string` | 提取字符串中所有的 Email 地址（导出名为 re.ExtractEmail） |
| [re.ExtractHostPort](#extracthostport) | `i any` | `[]string` | 提取字符串中所有的 Host:Port（导出名为 re.ExtractHostPort） |
| [re.ExtractIP](#extractip) | `i any` | `[]string` | 提取字符串中所有的 IP 地址（IPv4 与 IPv6）（导出名为 re.ExtractIP） |
| [re.ExtractIPv4](#extractipv4) | `i any` | `[]string` | 提取字符串中所有的 IPv4 地址（导出名为 re.ExtractIPv4） |
| [re.ExtractIPv6](#extractipv6) | `i any` | `[]string` | 提取字符串中所有的 IPv6 地址（导出名为 re.ExtractIPv6） |
| [re.ExtractMac](#extractmac) | `i any` | `[]string` | 提取字符串中所有的 MAC 地址（导出名为 re.ExtractMac） |
| [re.ExtractPath](#extractpath) | `i any` | `[]string` | 提取字符串中所有的路径与查询字符串（导出名为 re.ExtractPath） |
| [re.ExtractTTY](#extracttty) | `i any` | `[]string` | 提取字符串中所有的 Linux/Unix 终端设备路径（导出名为 re.ExtractTTY） |
| [re.ExtractURL](#extracturl) | `i any` | `[]string` | 提取字符串中所有的 URL 地址（导出名为 re.ExtractURL） |
| [re.Find](#find) | `origin any, re string` | `string` | 使用正则尝试匹配字符串，如果匹配成功返回第一个匹配的字符串，否则返回空字符串 |
| [re.FindAll](#findall) | `origin any, re string` | `[]string` | 使用正则尝试匹配字符串，如果匹配成功返回所有匹配的字符串，否则返回空字符串切片 |
| [re.FindAllIndex](#findallindex) | `origin any, re string` | `[][]int` | 使用正则匹配字符串，返回所有匹配子串的起止位置（导出名为 re.FindAllIndex） |
| [re.FindGroup](#findgroup) | `i any, re string` | `map[string]string` | 使用正则匹配并按命名捕获组返回结果映射（导出名为 re.FindGroup） |
| [re.FindGroupAll](#findgroupall) | `i any, raw string` | `[]map[string]string` | 使用正则匹配并按命名捕获组返回所有结果映射（导出名为 re.FindGroupAll） |
| [re.FindIndex](#findindex) | `origin any, re string` | `[]int` | 使用正则匹配字符串，返回第一个匹配子串的起止位置（导出名为 re.FindIndex） |
| [re.FindSubmatch](#findsubmatch) | `origin any, re string` | `[]string` | 使用正则匹配字符串，返回第一个匹配及其子匹配（导出名为 re.FindSubmatch） |
| [re.FindSubmatchAll](#findsubmatchall) | `origin any, re string` | `[][]string` | 使用正则匹配字符串，返回所有匹配及其子匹配（导出名为 re.FindSubmatchAll） |
| [re.FindSubmatchAllIndex](#findsubmatchallindex) | `origin any, re string` | `[][]int` | 使用正则匹配字符串，返回所有匹配及子匹配的位置（导出名为 re.FindSubmatchAllIndex） |
| [re.FindSubmatchIndex](#findsubmatchindex) | `origin any, re string` | `[]int` | 使用正则匹配字符串，返回第一个匹配及子匹配的位置（导出名为 re.FindSubmatchIndex） |
| [re.Grok](#grok) | `line string, rule string` | `GrokResult` | 使用 Grok 规则解析字符串并返回解析结果（导出名为 re.Grok） |
| [re.Match](#match) | `pattern string, s any` | `bool` | 使用正则尝试匹配字符串，如果匹配成功返回 true，否则返回 false |
| [re.MustCompile](#mustcompile) | `str string` | `*regexp.Regexp` | 编译正则表达式，语法非法时直接 panic（导出名为 re.MustCompile） |
| [re.MustCompilePOSIX](#mustcompileposix) | `str string` | `*regexp.Regexp` | 按 POSIX 语法编译正则，语法非法时直接 panic（导出名为 re.MustCompilePOSIX） |
| [re.QuoteMeta](#quotemeta) | `s string` | `string` | 转义字符串中所有正则元字符，使其可作为普通文本参与匹配（导出名为 re.QuoteMeta） |
| [re.ReplaceAll](#replaceall) | `origin any, re string, newStr any` | `string` | 使用正则匹配并替换为指定字符串（导出名为 re.ReplaceAll） |
| [re.ReplaceAllWithFunc](#replaceallwithfunc) | `origin any, re string, newStr func(string) string` | `string` | 使用正则匹配并用回调函数生成替换内容（导出名为 re.ReplaceAllWithFunc） |

## 函数详情

### Compile {#compile}

```go
Compile(expr string) (*regexp.Regexp, error)
```

将正则表达式编译为正则对象（导出名为 re.Compile）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| expr | `string` | 正则表达式字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*regexp.Regexp` | 编译得到的正则对象，可调用 MatchString/FindString 等方法 |
| r2 | `error` | 错误信息（正则语法非法时返回） |

**示例**

``````````````yak
r = re.Compile("^[a-z]+$")~
println(r.MatchString("abc"))   // OUT: true
assert r.MatchString("abc") == true, "Compile result should match lowercase letters"
``````````````

---

### CompilePOSIX {#compileposix}

```go
CompilePOSIX(expr string) (*regexp.Regexp, error)
```

按 POSIX ERE(egrep) 语法编译正则，匹配语义为左最长匹配（导出名为 re.CompilePOSIX）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| expr | `string` | 正则表达式字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*regexp.Regexp` | 编译得到的 POSIX 正则对象 |
| r2 | `error` | 错误信息（正则语法非法时返回） |

**示例**

``````````````yak
r = re.CompilePOSIX("^[a-z]+$")~
println(r.MatchString("abc"))   // OUT: true
assert r.MatchString("abc") == true, "CompilePOSIX result should match lowercase letters"
``````````````

---

### ExtractEmail {#extractemail}

```go
ExtractEmail(i any) []string
```

提取字符串中所有的 Email 地址（导出名为 re.ExtractEmail）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 待提取的输入（任意可转为字符串） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]string` | 提取到的 Email 地址列表，未匹配返回空切片 |

**示例**

``````````````yak
emails = re.ExtractEmail("hello your email is anonymous@yaklang.io")
println(emails[0])   // OUT: anonymous@yaklang.io
assert len(emails) == 1, "ExtractEmail should find one email"
``````````````

---

### ExtractHostPort {#extracthostport}

```go
ExtractHostPort(i any) []string
```

提取字符串中所有的 Host:Port（导出名为 re.ExtractHostPort）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 待提取的输入（任意可转为字符串） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]string` | 提取到的 Host:Port 列表，未匹配返回空切片 |

**示例**

``````````````yak
hps = re.ExtractHostPort("open: 127.0.0.1:80 and 127.0.0.1:443")
println(hps)   // OUT: [127.0.0.1:80 127.0.0.1:443]
assert len(hps) == 2 && hps[0] == "127.0.0.1:80", "ExtractHostPort should find both host:port"
``````````````

---

### ExtractIP {#extractip}

```go
ExtractIP(i any) []string
```

提取字符串中所有的 IP 地址（IPv4 与 IPv6）（导出名为 re.ExtractIP）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 待提取的输入（任意可转为字符串） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]string` | 提取到的 IP 地址列表（先 IPv6 后 IPv4），未匹配返回空切片 |

**示例**

``````````````yak
ips = re.ExtractIP("local ip is 127.0.0.1 here")
println(ips)   // OUT: [127.0.0.1]
assert len(ips) == 1 && ips[0] == "127.0.0.1", "ExtractIP should find the ipv4 address"
``````````````

---

### ExtractIPv4 {#extractipv4}

```go
ExtractIPv4(i any) []string
```

提取字符串中所有的 IPv4 地址（导出名为 re.ExtractIPv4）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 待提取的输入（任意可转为字符串） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]string` | 提取到的 IPv4 地址列表，未匹配返回空切片 |

**示例**

``````````````yak
ips = re.ExtractIPv4("hello your local ip is 127.0.0.1, your public ip is 1.1.1.1")
println(ips)   // OUT: [127.0.0.1 1.1.1.1]
assert len(ips) == 2 && ips[0] == "127.0.0.1", "ExtractIPv4 should find both addresses"
``````````````

---

### ExtractIPv6 {#extractipv6}

```go
ExtractIPv6(i any) []string
```

提取字符串中所有的 IPv6 地址（导出名为 re.ExtractIPv6）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 待提取的输入（任意可转为字符串） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]string` | 提取到的 IPv6 地址列表，未匹配返回空切片 |

**示例**

``````````````yak
ips = re.ExtractIPv6("public ipv6 is 2001:4860:4860::8888 here")
println(ips[0])   // OUT: 2001:4860:4860::8888
assert len(ips) >= 1, "ExtractIPv6 should find the ipv6 address"
``````````````

---

### ExtractMac {#extractmac}

```go
ExtractMac(i any) []string
```

提取字符串中所有的 MAC 地址（导出名为 re.ExtractMac）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 待提取的输入（任意可转为字符串） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]string` | 提取到的 MAC 地址列表，未匹配返回空切片 |

**示例**

``````````````yak
macs = re.ExtractMac("hello your mac is 00:11:22:33:44:55")
println(macs[0])   // OUT: 00:11:22:33:44:55
assert len(macs) == 1, "ExtractMac should find one mac address"
``````````````

---

### ExtractPath {#extractpath}

```go
ExtractPath(i any) []string
```

提取字符串中所有的路径与查询字符串（导出名为 re.ExtractPath）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 待提取的输入（任意可转为字符串） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]string` | 提取到的 路径(?查询) 列表，未匹配返回空切片 |

**示例**

``````````````yak
paths = re.ExtractPath("visit yaklang.com/docs/api/re?name=anonymous now")
println(paths[0])   // OUT: /docs/api/re?name=anonymous
assert len(paths) >= 1, "ExtractPath should extract the path with query"
``````````````

---

### ExtractTTY {#extracttty}

```go
ExtractTTY(i any) []string
```

提取字符串中所有的 Linux/Unix 终端设备路径（导出名为 re.ExtractTTY）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 待提取的输入（任意可转为字符串） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]string` | 提取到的设备文件路径列表，未匹配返回空切片 |

**示例**

``````````````yak
ttys = re.ExtractTTY("hello your tty is /dev/pts/1")
println(ttys[0])   // OUT: /dev/pts/1
assert len(ttys) == 1, "ExtractTTY should find one tty path"
``````````````

---

### ExtractURL {#extracturl}

```go
ExtractURL(i any) []string
```

提取字符串中所有的 URL 地址（导出名为 re.ExtractURL）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 待提取的输入（任意可转为字符串） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]string` | 提取到的 URL 列表，未匹配返回空切片 |

**示例**

``````````````yak
urls = re.ExtractURL("Yak site: https://yaklang.com and https://yaklang.io")
println(urls)   // OUT: [https://yaklang.com https://yaklang.io]
assert len(urls) == 2, "ExtractURL should find both urls"
``````````````

---

### Find {#find}

```go
Find(origin any, re string) string
```

使用正则尝试匹配字符串，如果匹配成功返回第一个匹配的字符串，否则返回空字符串

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| origin | `any` | 待匹配的输入（任意可转为字符串） |
| re | `string` | 正则表达式 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 第一个匹配的子串，未匹配返回空字符串 |

**示例**

``````````````yak
result = re.Find("apple is an easy word", "^[a-z]+")
println(result)   // OUT: apple
assert result == "apple", "Find should return first match"
``````````````

---

### FindAll {#findall}

```go
FindAll(origin any, re string) []string
```

使用正则尝试匹配字符串，如果匹配成功返回所有匹配的字符串，否则返回空字符串切片

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| origin | `any` | 待匹配的输入（任意可转为字符串） |
| re | `string` | 正则表达式 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]string` | 所有匹配子串组成的切片，未匹配返回空切片 |

**示例**

``````````````yak
matches = re.FindAll("Well,yakit is GUI client for yaklang", "yak[a-z]+")
println(matches)   // OUT: [yakit yaklang]
assert len(matches) == 2, "FindAll should find two matches"
assert matches[0] == "yakit" && matches[1] == "yaklang", "FindAll should return all matches in order"
``````````````

---

### FindAllIndex {#findallindex}

```go
FindAllIndex(origin any, re string) [][]int
```

使用正则匹配字符串，返回所有匹配子串的起止位置（导出名为 re.FindAllIndex）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| origin | `any` | 待匹配的输入（任意可转为字符串） |
| re | `string` | 正则表达式 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[][]int` | 二维整数切片，每项为 [起始位置, 结束位置]，未匹配返回空切片 |

**示例**

``````````````yak
idx = re.FindAllIndex("Well,yakit is GUI client for yaklang", "yak[a-z]+")
println(idx)   // OUT: [[5 10] [29 36]]
assert len(idx) == 2, "FindAllIndex should locate two matches"
assert idx[0][0] == 5 && idx[0][1] == 10, "first match index should be [5,10]"
``````````````

---

### FindGroup {#findgroup}

```go
FindGroup(i any, re string) map[string]string
```

使用正则匹配并按命名捕获组返回结果映射（导出名为 re.FindGroup）

键为捕获组名（未命名组用其序号字符串），值为匹配内容；键 &#34;0&#34; 表示整体匹配

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 待匹配的输入（任意可转为字符串） |
| re | `string` | 含命名捕获组的正则表达式 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `map[string]string` | 命名捕获组到匹配内容的映射，未匹配返回空映射 |

**示例**

``````````````yak
g = re.FindGroup("Well,yakit is GUI client for yaklang", "yak(?P<other>[a-z]+)")
println(g["other"])   // OUT: it
assert g["0"] == "yakit", "group 0 should be whole match"
assert g["other"] == "it", "named group other should be it"
``````````````

---

### FindGroupAll {#findgroupall}

```go
FindGroupAll(i any, raw string) []map[string]string
```

使用正则匹配并按命名捕获组返回所有结果映射（导出名为 re.FindGroupAll）

每个匹配对应一个映射，键为捕获组名（未命名组用序号），键 &#34;0&#34; 为整体匹配

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 待匹配的输入（任意可转为字符串） |
| raw | `string` | 含命名捕获组的正则表达式 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]map[string]string` | 映射切片，每项对应一个匹配，未匹配返回空切片 |

**示例**

``````````````yak
gs = re.FindGroupAll("Well,yakit is GUI client for yaklang", "yak(?P<other>[a-z]+)")
println(len(gs))   // OUT: 2
assert gs[0]["other"] == "it" && gs[1]["other"] == "lang", "FindGroupAll should capture both named groups"
``````````````

---

### FindIndex {#findindex}

```go
FindIndex(origin any, re string) []int
```

使用正则匹配字符串，返回第一个匹配子串的起止位置（导出名为 re.FindIndex）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| origin | `any` | 待匹配的输入（任意可转为字符串） |
| re | `string` | 正则表达式 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]int` | 长度为 2 的整数切片 [起始位置, 结束位置]，未匹配返回空切片 |

**示例**

``````````````yak
idx = re.FindIndex("Well,yakit is GUI client for yaklang", "yak[a-z]+")
println(idx)   // OUT: [5 10]
assert idx[0] == 5 && idx[1] == 10, "FindIndex should return [5,10]"
``````````````

---

### FindSubmatch {#findsubmatch}

```go
FindSubmatch(origin any, re string) []string
```

使用正则匹配字符串，返回第一个匹配及其子匹配（导出名为 re.FindSubmatch）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| origin | `any` | 待匹配的输入（任意可转为字符串） |
| re | `string` | 含捕获组的正则表达式 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]string` | 字符串切片，第 0 项为整体匹配，其余为各捕获组，未匹配返回空切片 |

**示例**

``````````````yak
m = re.FindSubmatch("Well,yakit is GUI client for yaklang", "yak([a-z]+)")
println(m)   // OUT: [yakit it]
assert m[0] == "yakit" && m[1] == "it", "FindSubmatch should return whole match and group"
``````````````

---

### FindSubmatchAll {#findsubmatchall}

```go
FindSubmatchAll(origin any, re string) [][]string
```

使用正则匹配字符串，返回所有匹配及其子匹配（导出名为 re.FindSubmatchAll）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| origin | `any` | 待匹配的输入（任意可转为字符串） |
| re | `string` | 含捕获组的正则表达式 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[][]string` | 二维字符串切片，每项为 [整体匹配, 捕获组...]，未匹配返回空切片 |

**示例**

``````````````yak
all = re.FindSubmatchAll("Well,yakit is GUI client for yaklang", "yak([a-z]+)")
println(all)   // OUT: [[yakit it] [yaklang lang]]
assert len(all) == 2, "FindSubmatchAll should find two matches"
assert all[1][1] == "lang", "second group should be lang"
``````````````

---

### FindSubmatchAllIndex {#findsubmatchallindex}

```go
FindSubmatchAllIndex(origin any, re string) [][]int
```

使用正则匹配字符串，返回所有匹配及子匹配的位置（导出名为 re.FindSubmatchAllIndex）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| origin | `any` | 待匹配的输入（任意可转为字符串） |
| re | `string` | 含捕获组的正则表达式 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[][]int` | 二维整数切片，每项每两个一组依次为整体匹配与各捕获组的 [起始, 结束]，未匹配返回空切片 |

**示例**

``````````````yak
idx = re.FindSubmatchAllIndex("Well,yakit is GUI client for yaklang", "yak([a-z]+)")
println(idx)   // OUT: [[5 10 8 10] [29 36 32 36]]
assert len(idx) == 2, "FindSubmatchAllIndex should find two matches"
``````````````

---

### FindSubmatchIndex {#findsubmatchindex}

```go
FindSubmatchIndex(origin any, re string) []int
```

使用正则匹配字符串，返回第一个匹配及子匹配的位置（导出名为 re.FindSubmatchIndex）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| origin | `any` | 待匹配的输入（任意可转为字符串） |
| re | `string` | 含捕获组的正则表达式 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]int` | 整数切片，每两个一组依次为整体匹配与各捕获组的 [起始, 结束]，未匹配返回空切片 |

**示例**

``````````````yak
idx = re.FindSubmatchIndex("Well,yakit is GUI client for yaklang", "yak([a-z]+)")
println(idx)   // OUT: [5 10 8 10]
assert idx[0] == 5 && idx[1] == 10, "FindSubmatchIndex should locate whole match at [5,10]"
``````````````

---

### Grok {#grok}

```go
Grok(line string, rule string) GrokResult
```

使用 Grok 规则解析字符串并返回解析结果（导出名为 re.Grok）

结果为字段名到取值的映射，可用 .Get(key) 取第一个值；参考 logstash grok 语法

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| line | `string` | 待解析的原始字符串 |
| rule | `string` | Grok 规则（如 &#34;%{MONTHNUM:month}/%{MONTHDAY:day}-%{TIME:time}&#34;） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `GrokResult` | Grok 解析结果对象，解析失败返回空结果，可用 .Get(name) 取值 |

**示例**

``````````````yak
result = re.Grok("04/18-00:59:45.385191", "%{MONTHNUM:month}/%{MONTHDAY:day}-%{TIME:time}")
println(result.Get("month"))   // OUT: 04
assert result.Get("day") == "18", "Grok should capture the day field"
assert result.Get("time") == "00:59:45.385191", "Grok should capture the time field"
``````````````

---

### Match {#match}

```go
Match(pattern string, s any) bool
```

使用正则尝试匹配字符串，如果匹配成功返回 true，否则返回 false

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| pattern | `string` | 正则表达式 |
| s | `any` | 待匹配的字符串或字节切片 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `bool` | 是否匹配成功 |

**示例**

``````````````yak
ok = re.Match("^[a-z]+$", "abc")
println(ok)   // OUT: true
assert ok == true, "Match should match lowercase letters"
assert re.Match("^[a-z]+$", "abc123") == false, "Match should fail when extra chars present"
``````````````

---

### MustCompile {#mustcompile}

```go
MustCompile(str string) *regexp.Regexp
```

编译正则表达式，语法非法时直接 panic（导出名为 re.MustCompile）

适用于编译期可确定合法的常量正则

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| str | `string` | 正则表达式字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*regexp.Regexp` | 编译得到的正则对象 |

**示例**

``````````````yak
r = re.MustCompile("^[a-z]+$")
println(r.MatchString("abc"))   // OUT: true
assert r.MatchString("abc") == true, "MustCompile result should match lowercase letters"
``````````````

---

### MustCompilePOSIX {#mustcompileposix}

```go
MustCompilePOSIX(str string) *regexp.Regexp
```

按 POSIX 语法编译正则，语法非法时直接 panic（导出名为 re.MustCompilePOSIX）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| str | `string` | 正则表达式字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*regexp.Regexp` | 编译得到的 POSIX 正则对象 |

**示例**

``````````````yak
r = re.MustCompilePOSIX("^[a-z]+$")
println(r.MatchString("abc"))   // OUT: true
assert r.MatchString("abc") == true, "MustCompilePOSIX result should match lowercase letters"
``````````````

---

### QuoteMeta {#quotemeta}

```go
QuoteMeta(s string) string
```

转义字符串中所有正则元字符，使其可作为普通文本参与匹配（导出名为 re.QuoteMeta）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| s | `string` | 原始字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 转义后的字符串 |

**示例**

``````````````yak
q = re.QuoteMeta("a.b+c")
println(q)   // OUT: a\.b\+c
assert q == "a\\.b\\+c", "QuoteMeta should escape . and +"
``````````````

---

### ReplaceAll {#replaceall}

```go
ReplaceAll(origin any, re string, newStr any) string
```

使用正则匹配并替换为指定字符串（导出名为 re.ReplaceAll）

替换字符串支持 $1、${name} 等引用捕获组

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| origin | `any` | 原始输入（任意可转为字符串） |
| re | `string` | 正则表达式 |
| newStr | `any` | 替换字符串（支持 $1 等捕获组引用） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 替换完成后的字符串 |

**示例**

``````````````yak
result = re.ReplaceAll("yakit is programming language", "yak([a-z]+)", "yaklang")
println(result)   // OUT: yaklang is programming language
assert result == "yaklang is programming language", "ReplaceAll should replace matched token"
``````````````

---

### ReplaceAllWithFunc {#replaceallwithfunc}

```go
ReplaceAllWithFunc(origin any, re string, newStr func(string) string) string
```

使用正则匹配并用回调函数生成替换内容（导出名为 re.ReplaceAllWithFunc）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| origin | `any` | 原始输入（任意可转为字符串） |
| re | `string` | 正则表达式 |
| newStr | `func(string) string` | 回调函数 func(matched string) string，入参为每个匹配，返回替换后的内容 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 替换完成后的字符串 |

**示例**

``````````````yak
result = re.ReplaceAllWithFunc("yakit is programming language", "yak([a-z]+)", func(s) {
    return "yaklang"
})
println(result)   // OUT: yaklang is programming language
assert result == "yaklang is programming language", "ReplaceAllWithFunc should replace matched token"
``````````````

---

