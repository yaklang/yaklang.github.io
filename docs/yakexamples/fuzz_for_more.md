---
sidebar_position: 10
---

# Web Fuzz 高级教程

我们在基础教程中，讲解了最最基础的用法，但是细心的读者发现，Web Fuzz 基础篇中的内容并不足以支持我们完全完成 Fuzz 操作

其中大家遇到的最大的问题可能就是，自动化情况下：**用户输入/被动扫描输入的请求，我们并不知道请求中有哪些参数**，连参数都不知道，更不要说对参数进行操作了。

## 使用 web Fuzz 来获取可测参数

细心的朋友可能已经观察到了，在我们的上一节展示的 `*FuzzHTTPRequest` 结构体中，有几个字段可能和我们在这一小节中的主要目的有关

```go
// 获取所有常见参数
func GetCommonParams() return([]*mutate.FuzzHTTPRequestParam) 
func GetCookieParams() return([]*mutate.FuzzHTTPRequestParam) 
func GetGetQueryParams() return([]*mutate.FuzzHTTPRequestParam) 
func GetPostJsonParams() return([]*mutate.FuzzHTTPRequestParam) 
func GetPostParams() return([]*mutate.FuzzHTTPRequestParam) 
...
```

我们发现上述的方法引入了一个结构体 `*mutate.FuzzHTTPRequestParam`，这个结构体我们可以通过如下代码 `desc` 出这个内容

```go
req, err := fuzz.HTTPRequest(`GET /?test=1 HTTP/1.1
Host: 127.0.0.1`)
die(err)

for _, param := range req.GetGetQueryParams() {
    desc(param)
}
```

我们通过上述代码，构建了一个 GET 参数为 `test` 的 HTTP 请求。在没有进行 Fuzz 的情况下我们使用 `.GetGetQueryParams()` 来获取所有的 Get 参数的可测试的参数，我们直接来 `desc(param)` 可以描述这个结构体。

```go
type palm/common/mutate.(FuzzHTTPRequestParam) struct {
  Fields(可用字段): 
  StructMethods(结构方法/函数): 
  PtrStructMethods(指针结构方法/函数): 
      // 进行针对这个参数值的 Fuzz
      func Fuzz(v1 ...interface {}) return(mutate.FuzzHTTPRequestIf) 

      // 参数名
      func Name() return(string) 

      // 这个参数所属的位置
      func Position() return(string) 

      // 这个参数的原始值
      func Value() return(interface {}) 
}
```

我们观察到了这个结构体中，我们有四个字段。分别为 Fuzz 功能，参数名，漏洞位置，漏洞的值。具体如何测试？我们来看对上述代码更详细的解析和用例

### 如何使用发现的可 Fuzz 的参数？

我们上一节展示了，如何获取 Get 中的参数，那么我们接下来对上一节的一点点代码进行小修改，我们再增加一个参数，并打印出这些参数的一些属性，并尝试对参数进行 Fuzz 看一下实际使用效果。

```go
req, err := fuzz.HTTPRequest(`GET /?test=1&key1=23 HTTP/1.1
Host: 127.0.0.1`)
die(err)

fuzzValue = "this_is_payload"

for _, param := range req.GetGetQueryParams() {
    printf("Found Param[%10s]:\n    ParamName: %v\n    OriginValue: %v\n\n", param.Position(), param.Name(), param.Value())
    param.Fuzz(fuzzValue).Show()
    println("-----------------------------------------------")
}
```

我们看上面，增加了 `test=1&key1=23` 这个参数段，增加了两个参数，针对参数的测试，我们输出 `Position/Name/Value` 三个属性，同时针对这个参数进行 fuzz，使用 `this_is_payload` 进行参数替换。执行之后结果如下

```
Found Param[ get-query]:
    ParamName: key1
    OriginValue: [23]

GET /?key1=this_is_payload&test=1 HTTP/1.1
Host: 127.0.0.1
Content-Length: 0


-----------------------------------------------
Found Param[ get-query]:
    ParamName: test
    OriginValue: [1]

GET /?key1=23&test=this_is_payload HTTP/1.1
Host: 127.0.0.1
Content-Length: 0


-----------------------------------------------
```

当我们看到这个结果的时候，结果是符合预期的，`this_is_payload` 分别替换了两个参数值。

当我们完成了上述例子，我们发现，Yak Fuzz 帮你做了很多事

1. 解析了 HTTP 数据包
1. 分析了数据包中 Get 的可测参数
1. 使用 Fuzz 核心功能，全自动分别替换了可测参数中的值
1. 把 Payload 融入了新的数据包，实现了 Fuzz 的案例

短短几行，我们就可以完成了针对一个数据包的全自动参数发现和 Fuzz 测试功能。

如果说换成 Python/Golang，在没有类似的基础设施，如果要完成上面的代码，可能并不是一件容易的事情。但是用户如果使用 Yak 的基础设施，完成这样的代码其实是一件非常容易的事情。虽然这些基础设施的编写也并不是一件容易的事情，好在 Yak 存在的意义就是为大家解决这个问题。

### Fuzz 更多的参数

当前，yak fuzz 支持如下几种情况的参数的 Fuzz

1. Get 中的参数
1. Post 中的参数（urlencoded 格式）
1. Post 中的参数（json object 格式）
1. Cookie 中的参数（通用 kv-pair 格式，例如 `key1=value1; key2=value2` 等）
1. 上传文件中的参数（包含文件）

这些参数一般来说，我们的参数通用的属性应该都是统一的，不同的参数类型，他的 Position 是不一样的。

同时我们为常见的参数提供了测试：`.GetCommonParams()` 这个方法可以把 Get 中的参数，Post 中的参数以及 Post Json Object 作为集合进行返回。

## 配合 `crawler` 来使用 `fuzz`

在我们完成前面的所有教程，大家肯定已经有了自己的想法。如果用户熟练掌握了我们上述的所有功能，可能已经在盘算着我们可以从哪个地方寻找数据包，让他进入我们的 `fuzz` 模块中。

幸运的是，我们 yak 中并不缺乏把扫描目标的数据包进入 fuzz 的方法。我们很自然的会想到，我们做一个爬虫，把爬到的 HTTP 数据包交给 fuzz 模块，就可以轻易做到针对于一个 Web 站点的常见参数的全覆盖。

在 [【实战2: 指纹扫描+基础爬虫】](/docs/yakexamples/scan_and_crawler) 这一节中，我们可以做到爬虫爬取指纹扫描的结果，尽可能获取一个 Web 应用的常见的 URL 与可扫描的数据包。

```go
loglevel("error")

res, err := crawler.Start(cli.String("target"), crawler.maxRequest(100))
die(err)

for r := range res {
    url = r.Url()

    rsp, err := r.Response()
    if err != nil {
        log.error("fetch [%v]'s response err: %v", r.Url(), err)
        continue
    }
    
    fuzzReq, err := fuzz.HTTPRequest(r.Request())
    if err != nil {
        log.error("create fuzz request [%s] failed: %v", url, err)
        continue
    }

    for _, param := range fuzzReq.GetCommonParams() {
        param.Fuzz("test-your-payload!!!!!").Show()
    }
}
```

我们在上述脚本中，分别使用了 `crawler` 与 `fuzz` 模块，把 crawler 的结果，通过 `fuzz.HTTPRequest` 构造成了可以进行 Fuzz 操作的请求。

1. 通过 `crawler.Start` 从命令行中读出了某个特定参数的值（扫描目标）。
1. 通过 `fuzz.HTTPRequest(crawlerResult.Request())` 构造一个可以进行 fuzz 的请求。
1. 通过 `*FuzzHTTPRequest.GetCommonParams()` 获取想要测试的请求的通用参数。
1. 对获取到的参数进行值的替换：替换成 `test-your-payload!!!!!`
1. 把替换后的请求进行展示/执行。

我们针对某些目标进行测试，执行

`yak ./fuzz_with_crawler.yak -target example.com`

执行结果为（省略，脱敏打码了很大一部分信息，大家也不必猜测实际扫描环境，可以自己复制执行进行学习）

```go
...
...

GET /favicon.ico?n=test-your-payload%21%21%21%21%21 HTTP/1.1
Host: ************
Content-Length: 0
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36


GET /37f3150736a50df4f217c4984c7b652b.html?n=test-your-payload%21%21%21%21%21 HTTP/1.1
Host: ************
Content-Length: 0
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36


GET /65880dc9cdfc3f52ca817f13339c1c0f.html?n=test-your-payload%21%21%21%21%21 HTTP/1.1
Host: ************
Content-Length: 0
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36


```

我们看到结果，大家发现我们设置的 Payload 成功替换掉了原来的参数值，我们实现了爬虫+Web Fuzz的基础功能，常见的普通应用的扫描手段已经完全具备了。

## 配合 `mitm` 来使用 `fuzz`

我们实际上明确知道，爬虫远远是不够的，日常针对带有 Cookie / Authorization JWT 认证的各种常见应用，最有效的方式其实是通过中间人劫持来获取具体的 HTTP 的包，然后针对这个包来发起 Fuzz。我们在之前的文档中，已经了解过如何进行被动扫描 [【使用 `mitm`】进行被动扫描](/docs/yakexamples/passive_scan)。

```go title="fuzz_with_mitm.yak" {3-5}
loglevel(`info`)

go func {
    err = mitm.Start(5534, mitm.callback(func(isHttps, req, rsp) {
        http.show(req)
        fReq, err := fuzz.HTTPRequest(req)
        if err != nil {
            log.error("http request failed: %s", err)
            return
        }
        for _, r := range fReq.GetCommonParams() {
            r.Fuzz("this_is_fuzzing_payload").Show()
        }
    }))
    die(err)
}

sleep(1)
log.info("start to send request with proxy")

rsp, err := http.Get("http://www.example.com/?test=abc", http.proxy("http://127.0.0.1:5534"))
die(err)
```

`mitm` 的代码其实大家可能已经很熟悉了，实际上在使用的过程中这个 `mitm` 的可塑性非常高，如果我们设置了回调函数，我们就可以在回调函数中取出需要测试的请求，通过这个请求使用 `fuzz` 构造可用于模糊测试的请求，同时把这个请求发送出来，交给其他的算法进行漏洞检测。
