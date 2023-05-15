---
sidebar_position: 1
---

# [str] 字符串工具库

Yak 的字符串我们在语言基础中，有一些简单的讲解，但是我们没有讲关于字符串的其他操作，在本节中，我们将会着重讲解 Yak 自带的字符串处理函数以及相关细节问题

## Yak 中字符串有哪些形态？

和 Golang 类似，在 Yak 中，我们的字符串支持如下定义

```go
strValue := "this is a str"
strValue2 := `this is a str block
multi-lines
and more...
`

println("strValue: ", strValue)
println("strValue2: ", strValue2)

/*
OUTPUT:

strValue:  this is a str
strValue2:  this is a str block
multi-lines
and more...
*/
```

:::note 与其他语言的不同

注意
1. 单引号只能用于包裹 byte, 不能用于包裹字符串。
2. 文本块的定义与 Python 也不同，单个反引号即可

:::

## 字符串的基本操作

:::success 值得注意的是
在 yak 中，`str` 是字符串包的包名，然而一般在 Golang 中，字符串操作使用 `strings` 作为包名
:::

### 取子字符串

与大多数语言都一样，yak 支持使用索引来取子字符串。

```go
strValue := "abcdefghijk"
subStr1 := strValue[2:6]
subStr2 := strValue[:6]
subStr3 := strValue[3:]
// subStr4 := strValue[-3:]   # 这个暂时是不支持的，如果遇到这种情况，请使用 subStr
subStr4 := strValue[len(strValue)-3:]   # 这个暂时是不支持的，如果遇到这种情况，请使用 subStr4 := strValue[len(strValue)-3:]
println("subStr1: ", subStr1)
println("subStr2: ", subStr2)
println("subStr3: ", subStr3)
println("subStr4: ", subStr4)

/*
OUTPUT:

subStr1:  cdef
subStr2:  abcdef
subStr3:  defghijk
subStr4:  ijk
*/
```

### 继承 Golang 的字符串处理包 `strings`

我们看如下列表，即可知道 Yak 支持的 Golang 原生 `strings` 函数，对有 Golang 基础的同学来说，学习无压力，可以无缝转换

具体的文档，我们可以参考 Golang 官方文档，以下是 Yak 支持的基础字符串函数，具体函数的用法，我们可以在

 [strings 官方文档：https://golang.org/pkg/strings/](https://golang.org/pkg/strings/) 
 
 中找到如下函数的字符串操作内容

```golang
IndexAny
StartWith
EndWith
Title
Join
TrimLeft
TrimPrefix
TrimRight
TrimSuffix
Trim
Split
SplitAfter
SplitAfterN
SplitN
ToLower
ToUpper
HasPrefix
HasSuffix
Repeat
ToTitleSpecial
ToTitle
Contains
ReplaceAll
Replace
NewReader
Index
Count
Compare
ContainsAny
EqualFold
Fields
IndexByte
LastIndex
LastIndexAny
LastIndexByte
ToLowerSpecial
ToUpperSpecial
ToValidUTF8
```

## yak 独门绝技

### 基础字符串操作补充

1. [相当于 `fmt.Sprintf` 的快捷函数 `fn str.f(var_1: string, vars: ...interface {}): string`](#f)
1. [判断字符串前缀 `fn str.EndsWith(var_1: string, var_2: string): bool`](#endswith)
1. [判断字符串以指定字符开始 `fn str.StartsWith(var_1: string, var_2: string): bool`](#StartsWith)
1. [把字符串全部小写，并去除左右空白 `fn str.LowerAndTrimSpace(var_1: string): string`](#LowerAndTrimSpace)
1. [Split之后把元素两边的空白移除 `fn str.SplitAndTrim(var_1: string, var_2: string): []string`](#SplitAndTrim)
1. [把 Json 字符串转换成 `map[string]string` `fn str.JsonToMap(var_1: string): map[string]string`](#JsonToMap)
1. [把 Json 字符串转换成 `[]map[string]string` `fn str.JsonToMapList(var_1: string): []map[string]string`](#JsonToMapList)
1. [使用 io.Reader 读取 Json 数据流 `fn str.JsonStreamToMapList(var_1: io.Reader): []map[string]interface `{}](#JsonStreamToMapList)
1. [把字符串数组作为 Path 进行拼接`fn str.PathJoin(vars: ...string): string`](#PathJoin)
1. [正则匹配 `fn str.RegexpMatch(var_1: interface {}, var_2: string): bool`](#RegexpMatch)
1. [把一个对象转变成 Json 字符串，做好锁进展示 `fn str.ToJsonIndentStr(var_1: interface {}): string`](#ToJsonIndentStr)

### 字符串 `Slice/List` 与 `Map/Dict` 操作函数

1. [判断字符串是否包含指定的数组中的任何一个元素 `fn str.StringContainsAnyOfSubString(var_1: string, var_2: []string): bool`](#StringContainsAnyOfSubString)
1. [判断 StringSlice 中是不是包含指定元素 `fn str.StringSliceContains(var_1: []string, var_2: string): bool`](#StringSliceContains)
1. [判断 StringSlice 中是不是包含后续所有字符串`fn str.StringSliceContainsAll(var_1: []string, vars: ...string): bool`](#StringSliceContainsAll)
1. [移除 `List/Slice` 中重复的元素`fn str.RemoveRepeat(var_1: []string): []string`](#RemoveRepeat)
1. [从一个字典中取 key 对应的值，如果没有，设置为 `idEmptyDefault` 的默认值`fn str.ParamsGetOr(var_1: map[string]string, key: string, ifEmptyDefault: string): string`](#ParamsGetOr)


### 渗透测试可能需要使用的函数

1. [判断一个密码是不是强密码 `fn str.IsStrongPassword(var_1: string): bool`](#isstrongpassword)
1. [把域名和端口拼接成一个地址 `fn str.HostPort(var_1: string, var_2: interface {}): string`](#hostport)
1. [让 IPv4 地址退化成一个 C 段地址 `fn str.IPv4ToCClassNetwork(var_1: string): (string, error)`](#ipv4tocclassnetwork)
1. [判断一个字符串是不是 IPv4 `fn str.IsIPv4(var_1: string): bool`](#isipv4)
1. [判断一个字符串是不是 IPv6 `fn str.IsIPv6(var_1: string): bool`](#isipv6)
1. [把字符串（URL/Addr）中的主机和端口解析出来 `fn str.ParseStringToHostPort(var_1: string): (host string, port int, _ error)`](#parsestringtohostport)
1. [把以`,`分割的字符串解析成主机信息，可解析内容为网段、IP、域名等 `fn str.ParseStringToHosts(var_1: string): []string`](#parsestringtohosts)
1. [把字符串按行来分割 `fn str.ParseStringToLines(var_1: string): []string`](#parsestringtolines)
1. [把字符串（端口和端口的集合例如：`22,3306,8080-8088`）解析成单独端口 `fn str.ParseStringToPorts(var_1: string): []int`](#parsestringtoports)
1. [把字符串（网络地址）转变成可能的标准格式的 Url `fn str.ParseStringToUrls(vars: ...string): []string`](#parsestringtourls)
1. [把字符串（网络地址）转变成可能的标准格式的 Url（可能以 `www` 作为域名开头）`fn str.ParseStringToUrlsWith3W(vars: ...string): []string`](#parsestringtourlswith3w)
1. [随机生成一个指定长度的随机字符串，可作为密码 `fn str.RandSecret(var_1: int): string`](#randsecret)
1. [随机生成一个指定长度字符串 `fn str.RandStr(var_1: int): string`](#randstr)


### 特殊操作

1. [创建一个字符串去重工具 `fn str.NewFilter(): *filter.StringFilter`](#NewFilter)
1. [**【重要】**：Grok 支持 `fn str.Grok(var_1: string, var_2: string): yaklib.GrokResult`](#Grok)

## 函数表以及用法

#### f

用法同 Golang `fmt.Sprintf(fmt: string, vars: interface...) string`； 略

#### EndsWith

```go
println(str.EndsWith("abcdef", "abc"))  // false
println(str.EndsWith("abcdef", "def"))  // true
```

#### IsStrongPassword

判断一个字符串作为密码的话，算不算强密码

要求：

1. 大于 8 位
1. 包含特殊字符串
1. 大小写同时包含
1. 包含数字

```go
println(str.IsStrongPassword("abcdefghijk"))       // false
println(str.IsStrongPassword("abc#52G"))           // false
println(str.IsStrongPassword("abcdefgh.G1ijk"))    // true
println(str.IsStrongPassword("abcdefghij.$t2Tk"))  // true
```

#### HostPort

把域名或者IP+端口拼成一个网络地址

```go
println(str.HostPort("192.168.1.1", 80))
println(str.HostPort("192.168.1.1", "80"))
println(str.HostPort("example.com", 80))
println(str.HostPort("[::1]", 80))
println(str.HostPort("::1", 80))
println(str.HostPort("127.0.0.1", 80))

/*
OUTPUT:

192.168.1.1:80
192.168.1.1:80
example.com:80
[::1]:80
[::1]:80
127.0.0.1:80
*/
```

#### IPv4ToCClassNetwork

```go
// 辅助打印结果
def printTwoResult(res) {
    arg1, err = res;
    if err != nil {
        println("ERR:", err)
    } else {
        println(arg1)
    }
}

printTwoResult(str.IPv4ToCClassNetwork("127.0.0.1"))
printTwoResult(str.IPv4ToCClassNetwork("192.168.1.5"))
printTwoResult(str.IPv4ToCClassNetwork("8.8.8.8"))
printTwoResult(str.IPv4ToCClassNetwork("example.com"))
printTwoResult(str.IPv4ToCClassNetwork("[::1]"))

/*
OUTPUT:

127.0.0.0/24
192.168.1.0/24
8.8.8.0/24
ERR: invalid ipv4: example.com
ERR: invalid ipv4: [::1]
*/
```

#### ParseStringToHostPort

把字符串（URL/Addr）中的主机和端口解析出来

```go
def printHostPortErr(res) {
    host, port, err = res;
    if err != nil {
        println("ERROR: ", err)
    }else{
        printf("Host: %v Port: %v\n", host, port)
    }
}


printHostPortErr(str.ParseStringToHostPort("example.com:80"))
printHostPortErr(str.ParseStringToHostPort("127.0.0.1:80"))
printHostPortErr(str.ParseStringToHostPort("https://example.com"))
printHostPortErr(str.ParseStringToHostPort("http://example.com"))
printHostPortErr(str.ParseStringToHostPort("http://example.com:8082"))
printHostPortErr(str.ParseStringToHostPort("example.com"))
printHostPortErr(str.ParseStringToHostPort("example"))
printHostPortErr(str.ParseStringToHostPort("127.0.0.1"))

/*
OUTPUT:

Host: example.com Port: 80
Host: 127.0.0.1 Port: 80
Host: example.com Port: 443
Host: example.com Port: 80
Host: example.com Port: 8082
ERROR:  unknown port for [example.com]
ERROR:  unknown port for [example]
ERROR:  unknown port for [127.0.0.1]
*/
```

#### IsIPv4

【略】

```go
println(str.IsIPv4("127.0.0.1")) // true
println(str.IsIPv6("127.0.0.1")) // false
println(str.IsIPv6("::1"))       // true
println(str.IsIPv4("::1"))       // false
```

#### IsIPv6

【略】

```go

println(str.IsIPv4("127.0.0.1")) // true
println(str.IsIPv6("127.0.0.1")) // false
println(str.IsIPv6("::1"))       // true
println(str.IsIPv4("::1"))       // false
```

#### ParseStringToHosts

把以`,`分割的字符串解析成主机信息，可解析内容为网段，IP，域名等。

一般用于解析扫描目标主机。

```go
println(str.ParseStringToHosts("baidu.com,127.0.0.1,192.168.1.2/28"))
// OUTPUT
// [baidu.com 127.0.0.1 192.168.1.0 192.168.1.1 192.168.1.2 192.168.1.3 192.168.1.4 192.168.1.5 192.168.1.6 192.168.1.7 192.168.1.8 192.168.1.9 192.168.1.10 192.168.1.11 192.168.1.12 192.168.1.13 192.168.1.14 192.168.1.15]

println(str.ParseStringToHosts("10.3.0.1/24,8.8.8.8,example.com"))
// OUTPUT
// [10.3.0.0 ........ 10.3.0.246 10.3.0.247 10.3.0.248 10.3.0.249 10.3.0.250 10.3.0.251 10.3.0.252 10.3.0.253 10.3.0.254 10.3.0.255 8.8.8.8 example.com]

println(str.ParseStringToHosts("example.com,example2.com"))
// OUTPUT
// [example.com example2.com]
```

#### ParseStringToPorts

```go
println(str.ParseStringToPorts("22,3306,80-82,8080-8083"))
println(str.ParseStringToPorts("8080-8083"))
println(str.ParseStringToPorts("22,xx"))
println(str.ParseStringToPorts("127.0.0.1/28"))

/*
OUTPUT:

[22 80 81 82 3306 8080 8081 8082 8083]
[8080 8081 8082 8083]
[22]
[]
*
```

#### ParseStringToLines

解析成行

```go
dump(str.ParseStringToLines("123123123\nasdfasdf\nwfhiuqwe\nasdfasdf\r\nasdfasdf"))
/*
OUTPUT:

([]string) (len=5 cap=8) {
 (string) (len=9) "123123123",
 (string) (len=8) "asdfasdf",
 (string) (len=8) "wfhiuqwe",
 (string) (len=8) "asdfasdf",
 (string) (len=8) "asdfasdf"
}
*/
```

#### ParseStringToUrls

字符串生成可能的 URL

```go
println(str.ParseStringToUrls("www.baidu.com"))
println(str.ParseStringToUrls("example.com"))
println(str.ParseStringToUrls("example.com:80"))
println(str.ParseStringToUrls("sdfaasdgasd"))
println(str.ParseStringToUrls("127.0.1.1"))
println(str.ParseStringToUrls("192.168.1.3:443"))
println(str.ParseStringToUrls("192.168.1.3:80"))

/*
OUTPUT:

[https://www.baidu.com http://www.baidu.com]
[https://example.com http://example.com]
[http://example.com]
[https://sdfaasdgasd http://sdfaasdgasd]
[https://127.0.1.1 http://127.0.1.1]
[https://192.168.1.3]
[http://192.168.1.3]
*/
```

#### ParseStringToUrlsWith3W

```go
println(str.ParseStringToUrlsWith3W("www.baidu.com"))
println(str.ParseStringToUrlsWith3W("example.com"))
println(str.ParseStringToUrlsWith3W("example.com:80"))
println(str.ParseStringToUrlsWith3W("sdfaasdgasd"))
println(str.ParseStringToUrlsWith3W("127.0.1.1"))
println(str.ParseStringToUrlsWith3W("192.168.1.3:443"))
println(str.ParseStringToUrlsWith3W("192.168.1.3:80"))

/*
OUTPUT:

[https://www.baidu.com http://www.baidu.com]
[https://example.com https://www.example.com http://example.com http://www.example.com]
[http://example.com http://www.example.com]
[https://sdfaasdgasd https://www.sdfaasdgasd http://sdfaasdgasd http://www.sdfaasdgasd]
[https://127.0.1.1 http://127.0.1.1]
[https://192.168.1.3]
[http://192.168.1.3]
*/
```