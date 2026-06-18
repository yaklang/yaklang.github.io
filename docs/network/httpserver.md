---
sidebar_position: 4
sidebar_label: "HTTP 服务端编程"
---

# HTTP 服务端编程

`httpserver` 库让你用极少的代码起一个 HTTP 服务：注册一个处理函数，对每个请求拿到 `req`（请求）和 `rsp`（响应写入器），自己决定怎么读、怎么回。它常用于搭 Mock 接口、临时回连服务、本地调试用的 Web 服务等。

> 本章只讲"自己起服务"。如果你要发起 HTTP 请求或做模糊测试，请查阅「内置标准库完全手册」里的 `poc` / `http` / `fuzz`。下面所有示例正是用 `poc.HTTP` 来给自己起的服务发测试请求。

## 分组速查表

| 分组 | 代表 API（含调用形态） | 说明 |
| --- | --- | --- |
| 启动服务 | `httpserver.Serve(host, port, opts...)` | 阻塞监听，通常放进 `go func(){}()` |
| 处理函数 | `httpserver.handler(func(rsp, req))` | 每个请求回调一次 |
| 生命周期 | `httpserver.context(ctx)` | 配合 `cancel()` 优雅停止 |
| TLS | `httpserver.tlsCertAndKey(crt, key)` | 起 HTTPS |
| 读请求 | `req.Method` `req.URL.Path` `req.URL.Query()` `req.Header.Get(k)` `req.Body` | 方法/路径/查询参数/请求头/请求体 |
| 写响应 | `rsp.Write(data)` `rsp.WriteHeader(code)` `rsp.Header().Set(k, v)` | 写体/设状态码/设响应头 |

## 最小 HTTP 服务

处理函数签名是 `func(rsp, req)`：`req` 是请求，`rsp` 是响应写入器。最简单的服务就是不管请求是什么，都写回一段内容。

``````````````yak
// 特性: httpserver.Serve 起最小 HTTP 服务, 用 poc.HTTP 自测
// 关键词: httpserver.Serve, httpserver.handler, httpserver.context
port = os.GetRandomAvailableTCPPort()
ctx, cancel = context.WithCancel(context.Background())

go func() {
    httpserver.Serve("127.0.0.1", port,
        httpserver.context(ctx),
        httpserver.handler(func(rsp, req) {
            rsp.Header().Set("Content-Type", "text/plain")
            rsp.Write(b"hello-http")
        }),
    )
}()
time.Sleep(0.5)  // 等服务就绪

// 用 poc.HTTP 给自己发请求
rsp = poc.HTTP(`GET / HTTP/1.1
Host: 127.0.0.1

`, poc.host("127.0.0.1"), poc.port(port), poc.timeout(3))~[0]

println(poc.GetStatusCodeFromResponse(rsp))   // OUT: 200
_, body = poc.Split(rsp)
println(string(body))                          // OUT: hello-http
cancel()
``````````````

`poc.HTTP` 返回 `(响应, 请求, error)`，这里用 `~[0]` 取第一个返回值（响应原文）并自动处理 error。`poc.Split(rsp)` 把响应拆成头部与 body 两段。`httpserver.Serve` 自身是阻塞的，所以必须放进 `go func(){ ... }()`，否则后面的代码永远执行不到。

## 按路径与方法路由

真实服务要根据 `req.URL.Path` 和 `req.Method` 分发。下面演示一个带几条路由、并区分方法的服务。

``````````````yak
// 特性: 用 req.URL.Path / req.Method 做路由分发
// 关键词: req.URL.Path, req.Method, rsp.WriteHeader, 路由
port = os.GetRandomAvailableTCPPort()
ctx, cancel = context.WithCancel(context.Background())

go func() {
    httpserver.Serve("127.0.0.1", port,
        httpserver.context(ctx),
        httpserver.handler(func(rsp, req) {
            if req.URL.Path == "/ping" {
                rsp.Write(b"pong")
                return
            }
            if req.URL.Path == "/api" && req.Method == "POST" {
                rsp.Header().Set("Content-Type", "application/json")
                rsp.WriteHeader(201)
                rsp.Write(b`{"ok":true}`)
                return
            }
            // 兜底 404
            rsp.WriteHeader(404)
            rsp.Write(b"not found")
        }),
    )
}()
time.Sleep(0.5)

get = func(method, path) {
    raw = f`${method} ${path} HTTP/1.1
Host: 127.0.0.1

`
    rsp = poc.HTTP(raw, poc.host("127.0.0.1"), poc.port(port), poc.timeout(3))~[0]
    return poc.GetStatusCodeFromResponse(rsp)
}

println(get("GET", "/ping"))     // OUT: 200
println(get("POST", "/api"))     // OUT: 201
println(get("GET", "/nope"))     // OUT: 404
cancel()
``````````````

路由命中后记得 `return`，否则会继续往下走到兜底分支。`rsp.WriteHeader(code)` 必须在 `rsp.Write(...)` **之前**调用——一旦开始写 body，状态码就定死为 200 了，这是 HTTP 服务编程里最常见的坑。

:::danger WriteHeader 必须先于 Write
HTTP 响应里状态行先于响应体发送。`rsp.Write` 一旦被首次调用，库会自动以 `200` 把响应头发出去；此后再调用 `rsp.WriteHeader(404)` 不再生效（且可能打印告警）。所以"设状态码 → 设响应头 → 写 body"这个顺序不能乱。需要非 200 状态码时，先 `WriteHeader`。
:::

## 读取查询参数、请求头与请求体

下面这个服务读出查询参数、一个请求头、以及 POST 过来的 body，拼成一行回给客户端，演示常用的读取方式。

``````````````yak
// 特性: 读取 query / header / body
// 关键词: req.URL.Query, req.Header.Get, req.Body, io.ReadAll
port = os.GetRandomAvailableTCPPort()
ctx, cancel = context.WithCancel(context.Background())

go func() {
    httpserver.Serve("127.0.0.1", port,
        httpserver.context(ctx),
        httpserver.handler(func(rsp, req) {
            name = req.URL.Query().Get("name")      // 查询参数 ?name=xxx
            token = req.Header.Get("X-Token")        // 请求头
            body, _ = io.ReadAll(req.Body)           // 请求体(io.Reader)
            rsp.Write([]byte(f"name=${name} token=${token} body=${string(body)}"))
        }),
    )
}()
time.Sleep(0.5)

payload = "PAYLOAD"
rsp = poc.HTTP(f`POST /?name=alice HTTP/1.1
Host: 127.0.0.1
X-Token: secret
Content-Length: ${len(payload)}

${payload}`, poc.host("127.0.0.1"), poc.port(port), poc.timeout(3))~[0]

_, body = poc.Split(rsp)
println(string(body))   // OUT: name=alice token=secret body=PAYLOAD
cancel()
``````````````

`req.URL.Query()` 返回一个参数集合，`.Get(key)` 取单个值（不存在返回空串）；`req.Body` 是一个 `io.Reader`，要用 `io.ReadAll(req.Body)` 读出全部字节。发 POST 时别忘了 `Content-Length` 头，否则服务端可能读不到完整 body。

## 小结

- `httpserver.Serve` 阻塞，放进 `go func(){}()`；用 `httpserver.context(ctx)` + `cancel()` 控制生命周期。
- 处理函数 `func(rsp, req)`：读 `req.Method` / `req.URL.Path` / `req.URL.Query()` / `req.Header.Get` / `req.Body`，写 `rsp.WriteHeader` / `rsp.Header().Set` / `rsp.Write`。
- **`WriteHeader` 必须在第一次 `Write` 之前**；路由命中后记得 `return`。
- 起 HTTPS 加 `httpserver.tlsCertAndKey(crt, key)`，证书生成见 [TLS 章节](./tls.md)。
