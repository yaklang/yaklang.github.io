---
sidebar_position: 9
---

# Web Fuzz 基础

## 什么是 Web Fuzz（针对 Web 应用的模糊测试）？

模糊测试是黑盒软件测试一种，通过把构造的特殊 payload 注入到软件可以接受输入的点来观察软件执行的结果和崩溃信息来发现软件有问题的点，尤其在二进制领域极为常见。

在 OWASP 中，给出了关于 Web Fuzz 的一些解释：

> Fuzzing
> Fuzz testing or Fuzzing is a Black Box software testing technique, which basically consists in finding implementation bugs using malformed/semi-malformed data injection in an automated fashion.
>
> A trivial example
> Let’s consider an integer in a program, which stores the result of a user’s choice between 3 questions. When the user picks one, the choice will be 0, 1 or 2. Which makes three practical cases. But what if we transmit 3, or 255 ? We can, because integers are stored a static size variable. If the default switch case hasn’t been implemented securely, the program may crash and lead to “classical” security issues: (un)exploitable buffer overflows, DoS, …
>
> Fuzzing is the art of automatic bug finding, and it’s role is to find software implementation faults, and identify them if possible.

一般来说，在 Web 漏洞扫描中，我们也许并不知道一个参数应该测试什么。甚至我们能自动把需要测试漏洞的参数寻找到已经是一个很难的事儿了。

往往在编写漏洞检测算法的时候，编写漏洞的同学会花大量的时间来完成基础设施的搭建，和编写基础的发包代码。

在 Yak 中，作者并不希望用户把时间和经历都花在基础设施中，而是希望用户尽可能关注漏洞检测算法本身。在实际的使用过程中这种基础设施往往并没有合适的方式提供给用户，如果作为一家公司，这个可以作为公司员工遵循或者可以使用的框架之一，但是作为外部用户，能有这种研发体验其实是一件不容易的事情

## Web Fuzz 本质：针对 HTTP 数据包的 Fuzz

本质上针对 HTTP 请求的 Fuzz 是 Web Fuzz 需要做的核心事项。再说具体一点，其实针对 HTTP Request 是整个测试的核心：

1. 需要能对 HTTP 方法做不同方法的变换测试
1. 对 HTTP 的 Path 做不同路径的测试
1. 对 HTTP Get 参数进行每个参数的测试
1. 对 HTTP Post 数据包中的内容做测试：
    1. Post 数据如果是 Json，要支持能对 Json 的数据做支持和替换
    1. Post 数据如果是 urlencode 应该支持和 Get 参数一样的测试方法
    1. Post 数据如果是上传文件，也要可以识别，并对上传的文件做测试
1. 针对 HTTP Header 的测试：
    1. 包含但不限于 User-Agent / Host / Cookie / Authorization 这些头进行整体测试
    1. 众所周知，Cookie 中的一些字段也应该被测试，要具备增加 K-V Pair 的 Cookie 测试
1. ...

当然上面列出的并不是 Web Fuzz 的全部的点，总的来说，需要测试的点并不是特别多，但是也并不算少。Yak 希望用户在使用的过程中，能通过使用 Yak 自带的 API 快速进行对上述可以测试的点进行测试，从而快速编写手动/全自动化 Fuzz 的数据包。

在 Yak 中，你甚至可以这样编写 Web Fuzz 的功能

```go
// 创建一个可 Fuzz 的请求
fReq, err := fuzz.HTTPRequest(`GET / HTTP/1.1
Host: 127.0.0.1`)
die(err)

// 替换掉请求中的某个 Get 参数，同时替换掉 UserAgent 头中的字段
fReq = fReq.FuzzGetParams("testValue", "test").FuzzHTTPHeader("User-Agent", "ua-for www.example.com")

// 展示 fReq 的 Fuzz 结果
fReq.Show()
```

上述代码执行之后，我们能发现 fuzz 结束之后请求被打印在屏幕上了

```
GET /?testValue=test HTTP/1.1
Host: 127.0.0.1
Content-Length: 0
User-Agent: ua-for www.example.com

```

## Web Fuzz 进阶

当我们完成上一节的简单内容之后，我们会发现我们能实现对单个数据包进行变换了，但是 Fuzz 往往是一个非常复杂的操作，针对一个点我们要进行不同的 Payload 的测试，那 Yak 的 fuzz 包支持针对一个输入点的多个数据包进行 fuzz 吗？当然支持！

Yak 针对这种情况的支持可以说是业内首创，通过 `{{integer(1-10)}}` 这样的标签，我们可以把 `1-10` 拆成真正的 `[1,2,3,4...8,9,10]`。例如我们执行下面的脚本

```go
basePacket = `
GET / HTTP/1.1
Host: 127.0.0.1
`
// 创建一个可 Fuzz 的请求
fReq, err := fuzz.HTTPRequest(basePacket)
die(err)

// 替换掉请求中的某个 Get 参数，使用 test{{integer(1-10)}} 即可生成 [test1, test2, test3, ... test8, test9, test10] 
fReq.FuzzGetParams("testValue", "test{{integer(1-10)}}").Show()
```

将会生成 10 个数据包，分别使用如下内容作为 Get 参数

```
testValue=test1
testValue=test2
testValue=test3
...
testValue=test8
testValue=test9
testValue=test10
```

执行的内容为

```
GET /?testValue=test1 HTTP/1.1
Host: 127.0.0.1
Content-Length: 0


GET /?testValue=test2 HTTP/1.1
Host: 127.0.0.1
Content-Length: 0


GET /?testValue=test3 HTTP/1.1
...
...
...
GET /?testValue=test9 HTTP/1.1
Host: 127.0.0.1
Content-Length: 0


GET /?testValue=test10 HTTP/1.1
Host: 127.0.0.1
Content-Length: 0


```

我们观察到这些数据包的时候，很容易就能理解我们通过 `{{integer(1-10)}}` 标签，对 `test1,test2...test10` 参数进行了动态生成，一个命令 fuzz 了 10 个数据包，可以说是非常好用了。

当然，`{{integer}}` 标签并不是唯一可用的标签，对于常见的 Fuzz 多个 Payload 的场景，我们

### Web Fuzz 制定 Payloads

但是有时候，我们使用 fuzz 并不只是为了 fuzz 几个整数，经常我们需要构造若干与漏洞测试相关的 Payload，或者随机字符串，构造数据包，那么我们应该如何操作呢？

```go
basePacket = `
GET / HTTP/1.1
Host: 127.0.0.1
`
// 创建一个可 Fuzz 的请求
fReq, err := fuzz.HTTPRequest(basePacket)
die(err)

// 替换掉请求中的某个 Get 参数，使用带 fuzz 标签的 []string 进行 Fuzz
fReq.FuzzGetParams("testValue", ["test", "alert(1)", "prompt`34{{char(a-c)}}`"]).Show()
```

我们观察上面代码，Get 参数变成一个 list/slice，分别为

```go
test
alert(1)
prompt`34{{char(a-c)}}`
```

根据我们的使用经验，这些 payload 将会被 fuzz 成 5 条 Payload

:::caution 为什么是五条呢？
`{{char(a-c)}}` 是我们遇到的一个新标签，根据标签字面意思，会被解析为 `a,b,c` 三个元素，所以上述的 Payload 实际为

```
test
alert(1)
prompt`34a`
prompt`34b`
prompt`34c`
```
:::

经过上述的 Payload 渲染，我们得到了如下数据包

```http
GET /?testValue=test HTTP/1.1
Host: 127.0.0.1
Content-Length: 0


GET /?testValue=alert%281%29 HTTP/1.1
Host: 127.0.0.1
Content-Length: 0


GET /?testValue=prompt%6034a%60 HTTP/1.1
Host: 127.0.0.1
Content-Length: 0


GET /?testValue=prompt%6034b%60 HTTP/1.1
Host: 127.0.0.1
Content-Length: 0


GET /?testValue=prompt%6034c%60 HTTP/1.1
Host: 127.0.0.1
Content-Length: 0


```

观察结果，我们发现我们的结果被编码了，并且我们的 Payload 确实被渲染在了 Get 参数的位置。

经过这样的变换，我们基本上可以针对一个常见参数做更多的针对性的测试了，但是问题也会随之而来

1. 我们使用了 `{{integer}} / {{char}}` 来进行 Fuzz，对应的还有其他可用标签吗？
1. 我们在例子中重点只测试了 `.FuzzGetParam(key, value)` 这个方法，其他接口应该怎么测试？
1. 我们批量构建的请求难道只能 `.Show()` 展示出来吗？如何批量发起请求？

## 更多的 Fuzz 手段和更多的标签

### 使用 `fuzz.Strings(fuzzTemplate)` 测试

我们 fuzz 构建了一个函数，专门用来渲染带 fuzz 标签的字符串，可以把它变成 fuzz 的结果：`fuzz.Strings`

我们观察如下案例：

```go
dump(fuzz.Strings(`fuzzedStr:{{integer(1-4)}}`))
```

我们执行上述代码之后，控制台输出如下内容

```go
([]string) (len=4 cap=4) {
 (string) (len=11) "fuzzedStr:1",
 (string) (len=11) "fuzzedStr:2",
 (string) (len=11) "fuzzedStr:3",
 (string) (len=11) "fuzzedStr:4"
}
```

我们的标签被渲染了。使用 `fuzz.Strings` 是一个调试的非常棒的方法。

### 其他标签速览

很自然的，我们的 fuzz 标签并不只这么几个，实际上我们的 fuzz 标签主要分为两类，一类是基础标签，一类是编码标签，编码标签可以单独使用，也可以在内部嵌套普通标签进行使用。

我们支持如下内容：

```go
// 整数 fuzz： 
{{int}} {{integer}} {{i}}

// 字符 fuzz
{{char}} {{ch}} {{c}}

// 拆网段 fuzz，一般用于拆分扫描目标
{{net}} {{host}}

// 随机 fuzz
{{randstr}} {{randint}} {{rs}} {{ri}}

...

// 编码标签
{{base64}} {{url}} {{hex}} {{durl}} {{html}} {{htmlhex}}
{{md5}} {{sha1}} {{sha256}} {{sha512}} ...
```

上述标签更详细的使用教程大家可以参考这里[【fuzz】使用手册](/api-manual/buildinlibs/lib_fuzz#fuzz-标签定义以及使用)

### HTTP 协议其他 Fuzz 方法：

在使用 Yak 的时候，尤其是调试代码的时候，我们经常想要知道一个结构，对象究竟有哪些方法可用？

这个时候，推荐大家使用 `desc` 这个内置的方法。

我们执行下面代码，我们构建一个最基础的 HTTP 请求，然后在使用 `desc(req)` 展示 req 具体所有的可用字段

```go
req, err := fuzz.HTTPRequest(`GET / HTTP/1.1
Host: 127.0.0.1`)
die(err)

desc(req)
```

我们将得到一个非常棒的结果：

```go
type palm/common/mutate.(FuzzHTTPRequest) struct {
  Fields(可用字段): 
      Opts: []mutate.BuildFuzzHTTPRequestOption  
  StructMethods(结构方法/函数): 
  PtrStructMethods(指针结构方法/函数): 
      // 批量发送构造好的请求
      func Exec(v1 ...func httpPoolConfigOption(v1: *mutate.httpPoolConfig) ) return(chan *mutate._httpResult, error) 

      // Fuzz Cookie
      func FuzzCookie(v1: interface {}, v2: interface {}) return(mutate.FuzzHTTPRequestIf) 
      func FuzzCookieRaw(v1: interface {}) return(mutate.FuzzHTTPRequestIf) 

      // Fuzz 上传表单中的字段
      func FuzzFormEncoded(v1: interface {}, v2: interface {}) return(mutate.FuzzHTTPRequestIf) 

      // Fuzz Get 参数
      func FuzzGetParams(v1: interface {}, v2: interface {}) return(mutate.FuzzHTTPRequestIf) 
      func FuzzGetParamsRaw(v1 ...string) return(mutate.FuzzHTTPRequestIf) 

      // Fuzz HTTP Header
      func FuzzHTTPHeader(v1: interface {}, v2: interface {}) return(mutate.FuzzHTTPRequestIf) 

      // 测试方法
      func FuzzMethod(v1 ...string) return(mutate.FuzzHTTPRequestIf) 

      // 测试路径
      func FuzzPath(v1 ...string) return(mutate.FuzzHTTPRequestIf) 

      // 测试 Post 中参数
      func FuzzPostJsonParams(v1: interface {}, v2: interface {}) return(mutate.FuzzHTTPRequestIf) 
      func FuzzPostParams(v1: interface {}, v2: interface {}) return(mutate.FuzzHTTPRequestIf) 
      func FuzzPostRaw(v1 ...string) return(mutate.FuzzHTTPRequestIf) 

      // 测试上传文件
      func FuzzUploadFile(v1: interface {}, v2: interface {}, v3: []uint8) return(mutate.FuzzHTTPRequestIf) 
      func FuzzUploadFileName(v1: interface {}, v2: interface {}) return(mutate.FuzzHTTPRequestIf) 

      // 获取所有常见参数
      func GetCommonParams() return([]*mutate.FuzzHTTPRequestParam) 
      func GetCookieParams() return([]*mutate.FuzzHTTPRequestParam) 
      func GetGetQueryParams() return([]*mutate.FuzzHTTPRequestParam) 
      func GetOriginHTTPRequest() return(*http.Request, error) 
      func GetPostJsonParams() return([]*mutate.FuzzHTTPRequestParam) 
      func GetPostParams() return([]*mutate.FuzzHTTPRequestParam) 
      ...

      // 判断 Body 的类型
      func IsBodyFormEncoded() return(bool) 
      func IsBodyJsonEncoded() return(bool) 
      func IsBodyUrlEncoded() return(bool) 
      func IsEmptyBody() return(bool) 

      // Hash 值，一般用来做参数去重
      func ParamsHash() return(string, error) 
      func Results() return([]*http.Request, error) 
      func Show() 
}
```

:::info

如果大家有需要，对任何有疑惑的对象，都可以使用这个函数，将会描述所有公开可用的方法。

:::

当大家看到上述结构之后，应该就可以支持我们的 Yak 版本目前支持多少种 fuzz 的方法？

## 如何执行 Fuzz 后的请求？

大家可能注意到了，我们发现针对 `FuzzHTTPRequest/Batch` 这个对象，我们有一个方法：`.Exec()`

这个方法本质上就是把我们构造的请求发送出去（默认并发为 50，支持批量发送请求）。

我们用一个最简单的例子说明一下基础用法

```go
basePacket = `
GET / HTTP/1.1
Host: www.example.com
`
// 创建一个可 Fuzz 的请求
fReq, err := fuzz.HTTPRequest(basePacket)
die(err)

// 替换掉请求中的某个 Get 参数，使用带 fuzz 标签的 []string 进行 Fuzz
res, err := fReq.FuzzGetParams("testValue", ["test", "alert(1)", "prompt`34{{char(a-c)}}`"]).Exec()
die(err)

for element := range res {
    printf("status: %3d bodylen: %7d  url: %v\n", element.Response.StatusCode, len(element.ResponseRaw), element.Url)
}
```

大家观察我们这个例子，发现我们只是把前面几节出现的例子拿过来，把 `.Show()` 换成了 `.Exec()`，并对结果进行处理，把 StatusCode 和 ResponseRaw 长度打印出来。

上述简单 Fuzz 脚本获得的结果为：

```go
status: 200 bodylen:    1610  url: http://www.example.com/?testValue=prompt%6034a%60
status: 200 bodylen:    1610  url: http://www.example.com/?testValue=prompt%6034c%60
status: 200 bodylen:    1610  url: http://www.example.com/?testValue=prompt%6034b%60
status: 200 bodylen:    1626  url: http://www.example.com/?testValue=test
status: 200 bodylen:    1610  url: http://www.example.com/?testValue=alert%281%29
```

## 结语

我相信读者看到这一步，已经明白了 Yak 是如何做 Web Fuzz 的基础设施的，作为编程人员我们编写的脚本实际并不多，我在编写教程的时候，也尽量把代码控制在一眼就能看完的长度。 

Happy Game!
