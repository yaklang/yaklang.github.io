---
sidebar_position: 8
---

# [http] HTTP库

这是一个非常高频的库，我们经常会使用他发送 HTTP 请求，相比其他语言的 HTTP 库，yak 的 HTTP 做到了更简练！`talk is cheep...`。

HTTP 库包含三个可用的 http 子库，分别是

1. `http` 标准 HTTP 客户端
2. `httpserver` 简易 HTTP 服务器，一般用于本地测试或者本地接收 HTTP 请求
3. `httpool` 批量 HTTP 请求的工具，一般和 `fuzz` 模块配合使用

## 所有 API

### `http`

#### 核心 API

1. `fn http.Do(var_1: *http.Request): (*http.Response, error)` 执行一个 `*http.Request`
1. `fn http.Get(var_1: string, vars: ...yaklib.httpOption): (*http.Response, error)` 进行 GET 请求，vars 表示其他参数，可以通过 `http.body / http.cookie / http.header / http.ua / http.useragent` 这些参数设置
1. `fn http.Post(var_1: string, vars: ...yaklib.httpOption): (*http.Response, error)` 进行 POST 请求，vars 表示其他参数，参数同上
1. `fn http.NewRequest(method: string, url: string, vars: ...yaklib.httpOption): (*http.Request, error)`
   构筑一个 `*http.Request`，这个方法类似标准库中的 `NewRequest` 但是增加了和前面几个参数一样的
1. `fn http.Raw(var_1: interface {}): (*http.Request, error)` 把请求解析成 `*http.Rquest` 支持 `string/bytes` 等
1. `fn http.Request(method: string, url: string, vars: ...yaklib.httpOption): (*http.Response, error)`
1. `fn http.GetAllBody(var_1: *http.Response): []uint8` 获取 `*http.Response` 的 Body 的 bytes

#### 可用于发起请求的参数

1. `fn http.body(var_1: interface {}): yaklib.httpOption`   用于在请求时设置 body
   的内容 `http.Get("http://example.com", http.body("your body... here"))` 在 vars 可以增加不定参数
1. `fn http.cookie(var_1: interface {}): yaklib.httpOption` 设置 Cookie （Raw）
1. `fn http.header(var_1: interface {}, var_2: interface {}): yaklib.httpOption` 设置一个 Header
1. `fn http.ua(var_1: interface {}): yaklib.httpOption` 设置 User-Agent
1. `fn http.useragent(var_1: interface {}): yaklib.httpOption` 设置 User-Agents
1. `fn http.json(i: any): mutate.httpPoolConfigOption`  发送 JSON 请求
1. `fn http.proxy(proxy: string): mutate.httpPoolConfigOption`  设置代理 
1. ...

#### 调试/DEBUG工具

1. `fn http.dump(var_1: interface {}): ([]uint8, error)` 把 `*http.Request` 和 `*http.Response` 变成原始数据包，包含 Body，返回 bytes
1. `fn http.dumphead(var_1: interface {}): ([]uint8, error)` 同上，但是原始数据包不包含 head
1. `fn http.show(var_1: interface {})` 直接展示 `*http.Request/Response` 的数据包形态，打印在屏幕上
1. `fn http.showhead(var_1: interface {})` 同上，但是不展示 Body

### `httpserver`

1. `fn httpserver.Serve(host: string, port: int, vars: ...yaklib._httpServerConfigOpt): error` 启动 HTTP Server。host
   是主机，port 是启动在哪个端口，vars 表示 httpserver 支持的选项，目前支持设置上下文（Golang原生），handler：处理 请求，tlsCertAndKey 设置 HTTPS
1. `fn httpserver.context(var_1: context.Context): yaklib._httpServerConfigOpt` 启动 HTTP Server，生命周期由一个 context 来控制
1. `fn httpserver.handler(var_1: func(http.ResponseWriter, *http.Request)): yaklib._httpServerConfigOpt` 设置一个 HTTP
   Handler 用来处理 Request 和返回响应结果
1. `fn httpserver.tlsCertAndKey(var_1: interface {}, var_2: interface {}, vars: ...interface {}): yaklib._httpServerConfigOpt`
   设置 HTTPS 证书

### 配合 `fuzz` 使用的 `httpool`

1. `fn httpool.Pool(var_1: interface {}, vars: ...mutate.httpPoolConfigOption): (chan *mutate._httpResult, error)`
   执行批量执行 `[]*http.Request` 或者 `fuzz.HTTPRequestIf` 等，执行的结果为 `*_httpResult` 通过一个 chan 对外传出，执行的结果包含：

:::info

```go
type palm/common/mutate.(_httpResult) struct {
  Fields(可用字段):
      // 档次请求的 URL
      Url: string

      // 发起请求的 Request
      Request: *http.Request

      // 如果请求失败，这个错误将不为 nil 了
      Error: error

      // 相应的原始数据包
      ResponseRaw: []uint8

      // 尝试把响应数据包解析为 *http.Response
      Response: *http.Response
}
```

:::

#### 参数

1. `fn httpool.host(var_1: string): mutate.httpPoolConfigOption` 强制设置发送的 HTTP 连接的对方主机
1. `fn httpool.https(var_1: bool): mutate.httpPoolConfigOption`  强制设置 HTTPS 的形式发送
1. `fn httpool.perRequestTimeout(var_1: float64): mutate.httpPoolConfigOption` 每一个请求的超时时间是多少？
1. `fn httpool.port(var_1: int): mutate.httpPoolConfigOption` 设置连接端口
1. `fn httpool.size(var_1: int): mutate.httpPoolConfigOption` 返回的 Response Body 的 Size 读多少？

## http 库用法

### 使用 `httpserver` 启动一个服务器

为了方便测试，我们启动一个 HTTP Server，用于接收我们客户端发的请求，顺便使用 `http.show(req)` 把接收到的请求展示出来

```go
go die(httpserver.Serve("127.0.0.1", 8084, httpserver.handler(fn(rsp, req) {
    http.show(req)
    rsp.Write([]byte("Hello World From Server"))
})))
sleep(1)
```

### 使用 http get 默认

```go
rsp, err := http.Get(
    "http://127.0.0.1:8084/webhook",
    http.body("test Code to webhook"),
    http.useragent("test-ua"),
)
die(err)

println()
println("REQUEST RECV: ", )
raw, err := io.ReadAll(rsp.Body)
die(err)
println(string(raw))
```

当我们执行上述代码，发出的数据包为

```http
GET /webhook HTTP/1.1
Host: 127.0.0.1:8084
Accept-Encoding: gzip
Content-Length: 20
User-Agent: test-ua

test Code to webhook
```

我们发现，我们设置的 User-Agent, 设置的数据包的内容都被正常发了出去

### 带自定义 HTTP 头使用 http get

```go
rsp, err = http.Get(
    "http://127.0.0.1:8035/",
    http.header("User-Agent", "test"),     # 设置 User-Agent
    http.header("Cookie", "asdfasdfasdf"), # 设置 Cookie
)
die(err)
```

### 使用自定义 HTTP 头和 Body

```go
rsp, err = http.Post(
    "http://127.0.0.1:8035/",
    http.header("Default", "xxx"),            # 添加任意的 Header
    http.body("qerjkasdf"),                   # 添加 body
)
die(err)
```

### JSON Body 支持 `http.json(i: any)`

我们执行如下代码

```go
rsp, err = http.Post("http://baidu.com", http.json({
    "test": 123,
}))
die(err)
```

我们通过上述操作可以使用 `http.json` 参数发送一个 JSON 请求， 这个请求会把传入的任何参数序列化为 JSON 字符串，并设置 Content-Type 为 `application/json`

```
POST http://baidu.com/ HTTP/1.1
Connection: close
Content-Length: 12
Content-Type: application/json
User-Agent: Go-http-client/1.1

{"test":123}
```

### 你可以定义任何 Request 分步请求

#### 构建你想要的 http.Request

```go
req, err = http.NewRequest("HEAD", "http://baidu.com/yourpath", http.header("BAR", "FOO"))
die(err)

http.show(req)                                # 展示内容
```

数据包内容如下

```go
HEAD /yourpath HTTP/1.1
Host: baidu.com
Bar: FOO

```

#### 执行任何你想要的 http.Response

```go
req, err = http.NewRequest("HEAD", "http://baidu.com/yourpath", http.header("BAR", "FOO"))
die(err)

http.show(req)    

rsp, err = http.Do(req)
if err != nil {
    die(err)
}
http.show(rsp)                                # 展示相应信息
```

我们把发出的请求和响应结果联合起来看：

```
HEAD /yourpath HTTP/1.1
Host: baidu.com
Bar: FOO


HTTP/1.1 200 OK
Content-Length: 19825
Accept-Ranges: bytes
Cache-Control: max-age=86400
Content-Type: text/html
Date: Sat, 12 Jun 2021 12:47:43 GMT
Etag: "4d71-5bd28c3bf7800"
Expires: Sun, 13 Jun 2021 12:47:43 GMT
Last-Modified: Wed, 10 Mar 2021 06:27:44 GMT
P3p: CP=" OTI DSP COR IVA OUR IND COM "
Server: Apache
Set-Cookie: BAIDUID=378636EDCB30B5B26C7A96757C45D396:FG=1; expires=Sun, 12-Jun-22 12:47:43 GMT; max-age=31536000; path=/; domain=.baidu.com; version=1
Vary: Accept-Encoding,User-Agent


```

### 自定义一个 http 方法快速请求

```go
rsp, err = http.Request("HEAD", "http://127.0.0.1:8035/")
die(err)
```

## http 库族相关结构 API

### `*http.Request` 标准 http 请求

```go
type net/http.(Request) struct {
  Fields(可用字段):
      Method: string
      URL: *url.URL
      Proto: string
      ProtoMajor: int
      ProtoMinor: int
      Header: http.Header
      Body: io.ReadCloser
      GetBody: func () return(io.ReadCloser, error)
      ContentLength: int64
      TransferEncoding: []string
      Close: bool
      Host: string
      Form: url.Values
      PostForm: url.Values
      MultipartForm: *multipart.Form
      Trailer: http.Header
      RemoteAddr: string
      RequestURI: string
      TLS: *tls.ConnectionState
      Cancel: <-chan struct {}
      Response: *http.Response
  StructMethods(结构方法/函数):
  PtrStructMethods(指针结构方法/函数):
      func AddCookie(v1: *http.Cookie)
      func BasicAuth() return(string, string, bool)
      func Clone(v1: context.Context) return(*http.Request)
      func Context() return(context.Context)
      func Cookie(v1: string) return(*http.Cookie, error)
      func Cookies() return([]*http.Cookie)
      func FormFile(v1: string) return(multipart.File, *multipart.FileHeader, error)
      func FormValue(v1: string) return(string)
      func MultipartReader() return(*multipart.Reader, error)
      func ParseForm() return(error)
      func ParseMultipartForm(v1: int64) return(error)
      func PostFormValue(v1: string) return(string)
      func ProtoAtLeast(v1: int, v2: int) return(bool)
      func Referer() return(string)
      func SetBasicAuth(v1: string, v2: string)
      func UserAgent() return(string)
      func WithContext(v1: context.Context) return(*http.Request)
      func Write(v1: io.Writer) return(error)
      func WriteProxy(v1: io.Writer) return(error)
}
```

### `*http.Response` 标准 http 响应

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

### `*_httpResult` 批量请求(`httpool`)的结果

```go
type palm/common/mutate.(_httpResult) struct {
  Fields(可用字段):
    Url         string
	Request     *http.Request
	Error       error
	RequestRaw  []byte
	ResponseRaw []byte
	Response    *http.Response
	DurationMs  int64
	Timestamp   int64
	Payloads    []string
  StructMethods(结构方法/函数):
  PtrStructMethods(指针结构方法/函数):
}
```