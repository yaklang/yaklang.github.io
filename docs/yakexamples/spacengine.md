---
sidebar_position: 4
---

# 网络空间引擎信息收集

前面一些简单小课程，我们主要讲述了如何使用 yak 进行扫描端口，但是有时候，我们针对互联网大量的设备取扫描端口，本身是一件比较奇怪的事情。

:::caution
漫无目的的扫描无异于大海捞针
:::

本节，我们将会学习 yak 更为强大的一面：

1. 内置 shodan API 的接口，可以直接获取 shodan 的数据（以 Wordpress 为例）。
2. 我们对 shodan 获取到的特定数据进行简单筛选，尝试对 Wordpress 的后端进行访问和分析

## shodan API 快速开始

其实我们发现，我们要实现这些常见的功能，已经并不需要手动去寻找库，我们的内置 API 可以完成这部分操作，最基础的代码我们可以看如下样例

```go
shodanToken := cli.String("token")
maxRecord := cli.Int("max-record")
if maxRecord <= 0 {
    maxRecord = 100
}

ch, err := spacengine.ShodanQuery(shodanToken, "wordpress", spacengine.maxRecord(maxRecord))
die(err)

for result := range ch {
    addr := result.Addr
    println(result.Addr)
}
```

当我们执行了上面的结果，我们得到如下结果

![简单shodan API](../../static/img/lesson2_1.jpg)

## 处理 Shodan 中的结果

其实正常来说，到了这一步，关于网络空间引擎的简介与使用应该已经结束了，但是作为作者，当然希望用户使用 yak 来做更加富有想象力的事情。

我们获取到了一批机器地址，想要对上面的内容进行进一步测试，或者进一步处理，应该如何操作呢？

:::info

毕竟有时候，我们也并不能确定网络空间引擎上的目标一定是活跃的目标，可能是旧的，过时的。

所以，我们如何验证上述目标都是有效的呢？

我们以访问 wordpress 后台为例来简要描述一下 yak 支持的其他的常见库了

:::

### 使用 `http` 模块发送 HTTP 请求

一般来说，我们想要测试从搜索引擎中搜到的结果是否可用，我们会使用 `http.Get` 发送特定的请求，然后检查结果。

对于我们要发送 http 请求来说，yak 的接口设计非常自然。

我们以 [`http.Get`](/api-manual/api/http#httpget) 为例讲解一下如何发起一个 http 请求

```go
rsp, err := http.Get("http://example.com")
die(err)

http.show(rsp)
```

我们通过 `http.Get(url: string)` 直接发起一个 http get 请求，请求之后会返回两个结果，一个结果为 `*http.Response`，一个结果为 `error`。

然后通过 `http.show(rsp)` 来展示得到的响应整体数据包。上述代码直接可以执行，执行结果如下：

```go
HTTP/1.1 200 OK
Connection: close
Content-Length: 1256
Age: 369652
Cache-Control: max-age=604800
Content-Type: text/html; charset=UTF-8
Date: Tue, 29 Jun 2021 15:13:07 GMT
Etag: "3147526947+ident"
Expires: Tue, 06 Jul 2021 15:13:07 GMT
Last-Modified: Thu, 17 Oct 2019 07:18:26 GMT
Server: ECS (sab/5783)
Vary: Accept-Encoding
X-Cache: HIT

<!doctype html>
<html>
<head>
    <title>Example Domain</title>

    <meta charset="utf-8" />
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type="text/css">
    body {
        background-color: #f0f0f2;
        margin: 0;
        padding: 0;
        font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
        
    }
    div {
        width: 600px;
        margin: 5em auto;
        padding: 2em;
        background-color: #fdfdff;
        border-radius: 0.5em;
        box-shadow: 2px 3px 7px 2px rgba(0,0,0,0.02);
    }
    a:link, a:visited {
        color: #38488f;
        text-decoration: none;
    }
    @media (max-width: 700px) {
        div {
            margin: 0 auto;
            width: auto;
        }
    }
    </style>    
</head>

<body>
<div>
    <h1>Example Domain</h1>
    <p>This domain is for use in illustrative examples in documents. You may use this
    domain in literature without prior coordination or asking for permission.</p>
    <p><a href="https://www.iana.org/domains/example">More information...</a></p>
</div>
</body>
</html>

```

我们看到结果的时候，其实是完整的 `*http.Response` 数据包，它可以在 Golang 中进行的操作，我们在 yak 中完全可以无缝使用。

定义如下(from `desc(rsp)`)

:::info

```go
type net/http.(Response) struct {
  Fields(可用字段): 
      Status: string  
      StatusCode: int  
      Proto: string  
      ProtoMajor: int  
      ProtoMinor: int  
      Header: http.Header  
      Body: io.ReadCloser  
      ContentLength: int64  
      TransferEncoding: []string  
      Close: bool  
      Uncompressed: bool  
      Trailer: http.Header  
      Request: *http.Request  
      TLS: *tls.ConnectionState  
  StructMethods(结构方法/函数): 
  PtrStructMethods(指针结构方法/函数): 
      func Cookies() return([]*http.Cookie) 
      func Location() return(*url.URL, error) 
      func ProtoAtLeast(v1: int, v2: int) return(bool) 
      func Write(v1: io.Writer) return(error) 
}
```

:::

### `spacengine` 中的结果交给 `http` 来处理

我们经过简单的了解，可以对一开始我们的从 shodan 获取数据的接口进行改动。

```go
shodanToken := cli.String("token")
maxRecord := cli.Int("max-record")
if maxRecord <= 0 {
    maxRecord = 100
}

ch, err := spacengine.ShodanQuery(shodanToken, "wordpress", spacengine.maxRecord(maxRecord))
die(err)

for result := range ch {
    addr := result.Addr
    println("shodan found:", result.Addr)

    // 把 Shodan 的结果，进行访问，访问内容是 /wp-admin/admin.php 验证是否 wp 的 admin 存在
    rsp, err := http.Get(sprintf("http://%v/wp-admin/admin.php", addr))
    if err != nil {
        log.error("http err: %v" , err )
        continue
    }
    http.show(rsp)
}
```

我们改造之后，应该就可以很容易对 shodan 的后续结果进行检查，但是我们发现，我们上述代码效率极低，并没有充分利用并发/多线程的优势，取到一个结果，再对一个结果进行处理，一点都不优雅。

限于篇幅，我们把解决方案留到下一节来讲

### [欢迎享受 yak 中的并发编程](/docs/yakexamples/concurrent)