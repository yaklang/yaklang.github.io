---
sidebar_position: 15
---

# [crawler] 普通爬虫(非浏览器爬虫)

内置的爬虫并不复杂，可以处理最基础的非单页应用的爬虫需求。在进行一个新的扫描目标的时候，我们往往没有扫描入口，使用爬虫进行爬取是一个不错的选择。

## 快速入门

```go
ch, err := crawler.Start(
    "https://www.leavesongs.com",
)

// 如果启动爬虫失败，则推出程序，抛出错误
die(err)

// 处理结果
for result := range ch {
    println(result.Url())
}
```

:::success 上面快速入门中result对应的结构体: `*crawler.req` 结构体描述
```go
type palm/common/crawler.(req) struct {
  PtrStructMethods(指针结构方法/函数):
      // 根据当前这个请求，把相对路径变成绝对路径
      func AbsoluteURL(v1: string) return(string)

      // 设置请求的 Hash 值：sha1(url, method)
      func Hash() return(string)

      // 返回请求结构体 *http.Request
      func Request() return(*http.Request)

      // 返回响应的结构体 *http.Response
      func Response() return(*http.Response, error)

      // 返回结果的 body bytes
      func ResponseBody() return([]uint8)

      // 这个请求的 URL 是啥
      func Url() return(string)
}
```
:::

## 参数与 API

1. `fn crawler.Start(var_1: string, vars: ...crawler.configOpt): (chan crawler.RequestIf, error)` 爬虫核心函数，var_1 是扫描目标

### 参数

1. `fn crawler.basicAuth(username: string, password: string): crawler.configOpt`：设置基础认证
1. `fn crawler.bodySize(var_1: int): crawler.configOpt`：设置获取最大的 body size （默认值10 * 1024 * 1024）
1. `fn crawler.concurrent(var_1: int): crawler.configOpt`：设置并发效率：默认值为 20
1. `fn crawler.connectTimeout(var_1: float64): crawler.configOpt`：设置单次连接的超时时间：默认 10 秒
1. `fn crawler.timeout(var_1: float64): crawler.configOpt` 这个参数和 `crawler.connectTimeout` 是一样的
1. `fn crawler.cookie(key: string, value: string): crawler.configOpt`：设置 cookie
1. `fn crawler.domainExclude(var_1: string): crawler.configOpt`：设置不扫描的域名：支持 `*.example.com`，glob 语法，默认设置为 `*[扫描目标]`
1. `fn crawler.domainInclude(var_1: string): crawler.configOpt`：设置扫描的白名单：glob 语法
1. `fn crawler.forbiddenFromParent(var_1: bool): crawler.configOpt` 禁止扫描父路径
1. `fn crawler.header(var_1: string, var_2: string): crawler.configOpt` 设置 HTTP Header
1. `fn crawler.maxDepth(var_1: int): crawler.configOpt` 设置爬虫最大深度（逻辑深度），默认为 5
1. `fn crawler.maxRedirect(var_1: int): crawler.configOpt`：最大重定向次数，默认为 5
1. `fn crawler.maxRequest(var_1: int): crawler.configOpt`：设置最大请求次数，默认为 1000，即最多发送 1000 个请求
1. `fn crawler.maxRetry(var_1: int): crawler.configOpt` 设置失败重试次数，默认为 3
1. `fn crawler.maxUrls(var_1: int): crawler.configOpt` 设置获取到最大连接数，默认为 10000，即爬虫收集到 10000 个 url 就退出
1. `fn crawler.proxy(vars: ...string): crawler.configOpt` 设置代理
1. `fn crawler.responseTimeout(var_1: float64): crawler.configOpt` ：响应超时时间，默认 10 秒，即超过多长时间没有响应就断掉连接
1. `fn crawler.userAgent(var_1: string): crawler.configOpt`：设置 User Agent
1. `fn crawler.ua(var_1: string): crawler.configOpt`：设置 User Agent，和 `crawler.userAgent` 是一样的
1. `fn crawler.urlRegexpExclude(var_1: string): crawler.configOpt`：使用正则设置禁止爬虫爬的路径
1. `fn crawler.urlRegexpInclude(var_1: string): crawler.configOpt`：使用正则设置允许爬虫爬的路径

## 实战案例：

### 使用爬虫（带参数）

```go
ch, err := crawler.Start(
    "https://www.leavesongs.com",
    crawler.maxRequest(20),      # 设置参数：最多获取 20 个连接
    crawler.connectTimeout(3),   # 设置参数：每个请求超时时间为 3 秒
)

// 如果启动爬虫失败，则推出程序，抛出错误
die(err)

for result := range ch {
    println(result.Url())
}
```

### 配合 fuzz 模块

```go
ch, err := crawler.Start(
    "https://www.leavesongs.com",
    crawler.maxRequest(200),
)

// 如果启动爬虫失败，则退出程序，抛出错误
die(err)

params = []

for result := range ch {
    // 根据 result.Request 生成对应的 fuzzRequest
    fuzzReq, err := fuzz.HTTPRequest(result.Request())
    if err != nil {
        continue
    }

    // 获取 fuzzRequest 生成 params
    reqParams := fuzzReq.GetCommonParams()
    params = append(params, reqParams...)
}

// 展示生成的params
dump(params)
```