---
sidebar_position: 2
sidebar_label: "TCP 客户端与服务端编程"
---

# TCP 客户端与服务端编程

`tcp` 库提供原始 TCP 字节流的收发能力：用 `tcp.Connect` 建立客户端连接，用 `tcp.Serve` 起一个 TCP 服务端。它不关心上层协议，给你的是一条可以随意读写字节的管道，适合自定义协议交互、Mock 服务、协议探测等场景。

## 分组速查表

| 分组 | 代表 API（含调用形态） | 说明 |
| --- | --- | --- |
| 建立连接 | `tcp.Connect(host, port, opts...)` | 返回连接对象与 error |
| 客户端选项 | `tcp.clientTimeout(sec)` `tcp.clientLocal(addr)` `tcp.clientTls(crt,key,ca...)` `tcp.clientProxy(url)` | 控制超时/本地地址/TLS/代理 |
| 发送 | `conn.Send(string或[]byte)` | 写入字节，返回 error |
| 接收 | `conn.Recv()` `conn.RecvString()` `conn.RecvTimeout(sec)` `conn.RecvLen(n)` `conn.ReadFast()` | 读字节，语义见下方易错点 |
| 连接控制 | `conn.SetTimeout(sec)` `conn.Close()` | 设默认读超时、关闭连接 |
| 服务端 | `tcp.Serve(host, port, opts...)` | 阻塞监听，每个连接回调一次 |
| 服务端选项 | `tcp.serverCallback(func(conn))` `tcp.serverContext(ctx)` `tcp.serverTls(crt,key)` | 连接处理/生命周期/TLS |

## 建立客户端连接与超时

`tcp.Connect(host, port)` 返回 `(连接对象, error)`。连接不上（端口没人监听）时会立刻返回非空 error；用 `tcp.clientTimeout(秒)` 控制连接与默认读取的超时。

``````````````yak
// 特性: tcp.Connect 连接一个没人监听的端口必然失败
// 关键词: tcp.Connect, tcp.clientTimeout, 连接被拒绝
// GetRandomAvailableTCPPort 返回一个当前空闲的端口, 上面没有服务在跑
port = os.GetRandomAvailableTCPPort()
conn, err = tcp.Connect("127.0.0.1", port, tcp.clientTimeout(2))
println(err != nil)     // OUT: true
println(conn == nil)    // OUT: true

// 用 assert 锁定“连不上时一定返回 error”
assert err != nil, "connect to a closed port must fail"
``````````````

`tcp.Connect` 的第二个参数端口既可以是数字 `8080`，也可以是字符串 `"8080"`，内部会统一解析。失败时连接对象为 `nil`，所以一定要先判断 `err`，不要直接对 `conn` 调方法。

## 收发数据：一次完整的回环

下面在同一个脚本里起一个 echo 服务端，再用客户端连上去收发，演示最常用的 `Send` / `RecvString`。

``````````````yak
// 特性: tcp.Serve 起 echo 服务 + tcp.Connect 客户端收发
// 关键词: tcp.Serve, tcp.serverCallback, conn.Send, conn.RecvString
port = os.GetRandomAvailableTCPPort()
ctx, cancel = context.WithCancel(context.Background())

// 后台起服务端: 每来一个连接回调一次, 读到数据后回显并关闭连接
go func() {
    tcp.Serve("127.0.0.1", port,
        tcp.serverContext(ctx),
        tcp.serverCallback(func(conn) {
            conn.SetTimeout(1)               // 服务端读取最多等 1 秒
            data = conn.RecvString()~        // 读取客户端发来的数据
            conn.Send("echo:" + data)        // 回显
            conn.Close()                     // 关闭连接, 客户端会立刻读到 EOF
        }),
    )
}()
time.Sleep(0.5)  // 等服务端就绪

// 客户端连接并收发
conn = tcp.Connect("127.0.0.1", port, tcp.clientTimeout(3))~
conn.Send("hello")~
resp = conn.RecvString()~
println(resp)    // OUT: echo:hello
conn.Close()
cancel()         // 通知服务端退出监听

assert resp == "echo:hello", "echo server should reply with prefix"
``````````````

服务端回调签名是 `func(conn)`，每个进来的连接调用一次，回调内部就是一条独立连接，可以反复 `RecvString` / `Send`。`tcp.serverContext(ctx)` 让你用 `cancel()` 优雅停止监听。注意服务端处理完后调用了 `conn.Close()`，这一步很关键——见下方易错点。

:::danger Recv/RecvString 会一直读到超时或对端关闭，不是“读一次就返回”
`conn.Recv()` / `conn.RecvString()` 的底层实现是"设置一个读超时，然后 `ReadAll` 一直读到超时或 EOF"。也就是说：**它不会在收到第一个数据包后就立刻返回**，而是把这段时间窗口内到达的所有字节都收集起来。

这带来两个直接后果：

1. 如果对端发完不关闭连接、你又没设较短的读超时，`RecvString` 会一直阻塞到默认 10 秒超时才返回。所以上面的例子里服务端用了 `conn.SetTimeout(1)`，并在回复后 `conn.Close()`——对端关闭后，客户端的 `RecvString` 会在读到 EOF 时立刻返回，不必干等超时。
2. 如果你只想读固定长度或读到稳定为止，用 `conn.RecvLen(n)`（读满 n 字节）或 `conn.ReadFast()`（读到连续一段时间没有新数据为止），而不是裸用 `Recv`。
:::

## 接收的几种方式

针对不同读取需求，连接对象提供了多个接收方法。下面用一个一次性把整段数据发来、然后关闭连接的服务端来对比。

``````````````yak
// 特性: RecvString / RecvLen / RecvTimeout 的区别
// 关键词: conn.RecvLen, conn.RecvTimeout, conn.ReadFast
port = os.GetRandomAvailableTCPPort()
ctx, cancel = context.WithCancel(context.Background())
go func() {
    tcp.Serve("127.0.0.1", port,
        tcp.serverContext(ctx),
        tcp.serverCallback(func(conn) {
            conn.Send("ABCDEFGHIJ")  // 一次性发 10 个字节
            time.Sleep(0.2)
            conn.Close()
        }),
    )
}()
time.Sleep(0.5)

// RecvLen(n): 只读固定长度, 适合定长协议头
conn = tcp.Connect("127.0.0.1", port, tcp.clientTimeout(3))~
head = conn.RecvLen(4)~
println(string(head))    // OUT: ABCD
rest = conn.RecvString()~  // 读剩下的, 对端关闭后立即返回
println(string(rest))    // OUT: EFGHIJ
conn.Close()
cancel()

assert string(head) == "ABCD", "RecvLen reads exactly n bytes"
``````````````

`conn.RecvLen(n)` 适合"先读 N 字节的定长头部、再按头部里的长度读 body"这类协议解析；`conn.RecvTimeout(秒)` 等价于临时改超时再 `Recv`；`conn.ReadFast()` 读到连续约 300ms 没有新数据就返回，适合请求-响应式交互。

## 读到分隔符为止：ReadFastUntilByte

处理"以某个字节分帧"的协议（如以 `\n` 分行的文本协议）时，`conn.ReadFastUntilByte(b)` 会一直读到遇见分隔符 `b` 为止，**返回的数据包含该分隔符**。参数是字节的数值（换行符是 `10`），返回 `([]byte, error)`，用 `~` 处理错误。

``````````````yak
// 特性: conn.ReadFastUntilByte 读到指定分隔符为止
// 关键词: conn.ReadFastUntilByte, 分帧, 换行符 10
port = os.GetRandomAvailableTCPPort()
ctx, cancel = context.WithCancel(context.Background())
go func() {
    tcp.Serve("127.0.0.1", port,
        tcp.serverContext(ctx),
        tcp.serverCallback(func(conn) {
            conn.Send("line1\nline2")   // 一次性发两行
            conn.Close()
        }),
    )
}()
time.Sleep(0.5)

conn = tcp.Connect("127.0.0.1", port, tcp.clientTimeout(3))~
// 读到换行符(字节 10)为止; 返回 ([]byte, err), 用 ~ 处理
first = conn.ReadFastUntilByte(10)~
println(string(first))   // OUT: line1
conn.Close()
cancel()

assert str.TrimSpace(string(first)) == "line1", "ReadFastUntilByte should stop at newline"
``````````````

:::tip 等服务端就绪：time.Sleep vs os.WaitConnect
上面的例子用 `time.Sleep(0.5)` 等服务端起好。更稳妥的做法是 `os.WaitConnect("127.0.0.1:端口", 超时秒)~`，它会轮询直到端口可连接或超时返回错误，不必猜固定等待时间。注意它会真实建立一次探测连接——若服务端回调对"每个连接"都有副作用，需把这次探测计入。
:::

## 用 TLS 加密的 TCP 连接

`tcp` 库可以直接在 TCP 层套一层 TLS：服务端用 `tcp.serverTls(证书, 私钥)`，客户端用 `tcp.clientTls(证书, 私钥, CA...)`。下面用 `tls` 库现场签一套证书，建立一条加密回环。

``````````````yak
// 特性: tcp.serverTls + tcp.clientTls 建立加密 TCP 连接
// 关键词: tcp.serverTls, tcp.clientTls, tls.GenerateRootCA
// 现场生成 CA 与服务器证书
ca, caKey = tls.GenerateRootCA("DemoCA")~
sCert, sKey = tls.SignServerCertAndKey(ca, caKey)~

port = os.GetRandomAvailableTCPPort()
ctx, cancel = context.WithCancel(context.Background())
go func() {
    tcp.Serve("127.0.0.1", port,
        tcp.serverContext(ctx),
        tcp.serverTls(sCert, sKey),          // 服务端启用 TLS
        tcp.serverCallback(func(conn) {
            conn.SetTimeout(1)
            d = conn.RecvString()~
            conn.Send("tls-echo:" + d)
            conn.Close()
        }),
    )
}()
time.Sleep(0.5)

// 客户端用同一套证书 + CA 建立 TLS 连接
conn = tcp.Connect("127.0.0.1", port,
    tcp.clientTimeout(3),
    tcp.clientTls(sCert, sKey, ca),
)~
conn.Send("secret")~
println(conn.RecvString()~)   // OUT: tls-echo:secret
conn.Close()
cancel()
``````````````

启用 TLS 后，连接对象的 `Send` / `Recv` 用法完全不变，加解密由库透明完成。证书的生成、签发与 mTLS 双向认证细节见 [TLS 证书生成与加密连接](./tls.md)。

## 小结

- `tcp.Connect` 建客户端、`tcp.Serve` 起服务端；两端的连接对象用法一致（`Send` / `Recv*` / `Close`）。
- **`Recv` 系列读到超时或对端关闭为止**，请用 `clientTimeout` / `SetTimeout` 控制窗口，或用 `RecvLen` / `ReadFast` 精确读取。
- 用 `serverContext(ctx)` + `cancel()` 管理服务端生命周期。
- TLS 只需加 `serverTls` / `clientTls` 选项，收发代码不变。
