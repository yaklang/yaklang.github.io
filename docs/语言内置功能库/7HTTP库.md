---
sidebar_position: 8
---

# [http] HTTP库

这是一个非常高频的库，我们经常会使用他发送 HTTP 请求，相比其他语言的 HTTP 库，yak 的 HTTP 做到了更简练！`talk is cheep...`。

## 最简单的 http 库用法

```go
// 启动一个 webhook server 来调试
server = http.webhook(8035, fn(i){
    http.show(i)
})
server.start()
sleep(1)
```
    
### 使用 http get 默认

```go
rsp := http.Get(
    "http://127.0.0.1:8035/webhook",
)

// print(string(http.GetAllBody(rsp)))        # 展示请求
```

### 带自定义 HTTP 头使用 http get

    rsp, err = http.Get(
        "http://127.0.0.1:8035/",
        http.header("User-Agent", "test"),     # 设置 User-Agent
        http.header("Cookie", "asdfasdfasdf"), # 设置 Cookie
    )
    if err != nil {
        die(err)
    }
    // print(string(http.GetAllBody(rsp)))        # 展示请求 Body

### 使用自定义 HTTP 头和 Body

    rsp, err = http.Post(
        "http://127.0.0.1:8035/",
        http.header("Default", "xxx"),            # 添加任意的 Header
        http.body("qerjkasdf"),                   # 添加 body
    )
    if err != nil {
        die(err)
    }

### 你可以定义任何 Request 分步请求

#### 构建你想要的 http.Request

    req, err = http.NewRequest("HEAD", "http://baidu.com/yourpath", http.header("BAR", "FOO"))
    die(err)
    
    http.show(req)                                # 展示内容

#### 执行任何你想要的 http.Response

    rsp, err = http.Do(req)
    if err != nil {
        die(err)
    }
    http.show(rsp)                                # 展示相应信息

### 自定义一个 http 方法快速请求

    rsp, err = http.Request("HEAD", "http://127.0.0.1:8035/")
    die(err)

## http 库详解

### 快速发起请求：http.Get / http.Post

    `
    http.Get(url: string): (*http.Response, error)   # 发起 get 请求
    http.Post(url: string): (*http.Response, error)  # 发起 post 请求
    
    
    第一个参数都为 url
    其他参数为 http.body / http.header 等
    `

### 如何设置 HTTP Header 或 Body？

    `
    1. 通过 http.Get(url, http.body("your-body")) 设置 body
    2. 通过 http.Get(url, http.header("AAA", "VALUE_AAA"), http.header("BBB", "VALUE_BBB"),) 设置 header
    3. http.body / http.header 可同时设置
    4. http.header 可设置多个
    5. http.ua 和 http.cookie 可以快捷设置 UserAgent 和 Cookie
    `

### 调试工具

    `
    http.dump           # 把 http.Request / http.Response 变成字符串
    http.show           # 展示 dump 内容
    http.dumphead       # 同 dump，只包含 head 不包含 body
    http.dumphead       # 展示 dumphead 内容
    http.GetAllBody     # 获取 http.Response 的 Body 内容
    `
### 构建单独的 Request：http.NewRequest

    `
    这个函数只有两个参数，http.NewRequest(method, url, opts...): (*http.Request, error)
    
    可以使用 
        req, err = http.NewRequest("POST", "http://xxx.com/zzz", http.body("asdf"))
    来构建一个 request
    `

### http.Do(req: *http.Request): (*http.Response, error)

    `
    发起一个 request，得到 response
    `