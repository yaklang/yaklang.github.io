---
sidebar_position: 3
sidebar_label: "UDP 无连接通信与服务器"
---

# UDP 无连接通信与服务器

`udp` 库提供 UDP 数据报的收发。和 TCP 最大的不同是 UDP 是**无连接**的：`udp.Connect` 并不真的"握手建链"，它只是创建一个绑定了目标地址的本地套接字，因此即使对端没人监听，`Connect` 通常也会成功——错误要到发送/接收时才可能暴露。

## 分组速查表

| 分组 | 代表 API（含调用形态） | 说明 |
| --- | --- | --- |
| 建立套接字 | `udp.Connect(host, port, opts...)` | 返回连接对象与 error；无连接，一般不会立刻失败 |
| 客户端选项 | `udp.clientTimeout(sec)` `udp.clientLocalAddr(addr)` | 读超时（默认 5 秒）、绑定本地地址 |
| 发送 | `conn.Send(data)` `conn.SendTo(data, "host:port")` | 发到 Connect 的目标 / 发到任意目标 |
| 接收 | `conn.RecvString()` `conn.RecvStringTimeout(sec)` `conn.Recv()` | 读数据报，建议带超时 |
| 服务端 | `udp.Serve(host, port, opts...)` | 监听数据报 |
| 服务端选项 | `udp.serverCallback(func(conn, data))` `udp.serverContext(ctx)` `udp.serverTimeout(sec)` | 每个数据报回调一次 |

## 一次完整的 UDP 回环

UDP 服务端的回调签名是 `func(conn, data)`——和 TCP 不同，它**第二个参数直接把这次收到的数据报字节交给你**，回调内用 `conn.Send(...)` 即可回到来源地址。

``````````````yak
// 特性: udp.Serve echo 服务 + udp.Connect 客户端收发
// 关键词: udp.Serve, udp.serverCallback, conn.Send, conn.RecvStringTimeout
port = os.GetRandomAvailableTCPPort()
ctx, cancel = context.WithCancel(context.Background())

go func() {
    udp.Serve("127.0.0.1", port,
        udp.serverContext(ctx),
        udp.serverCallback(func(conn, data) {
            // data 就是本次收到的数据报字节, conn.Send 会回到来源地址
            conn.Send("uecho:" + string(data))
        }),
    )
}()
time.Sleep(0.5)

conn = udp.Connect("127.0.0.1", port, udp.clientTimeout(3))~
conn.Send("ping")~
resp = conn.RecvStringTimeout(2)~     // UDP 接收强烈建议带超时
println(resp)    // OUT: uecho:ping
conn.Close()
cancel()

assert resp == "uecho:ping", "udp echo should reply"
``````````````

注意客户端用的是 `RecvStringTimeout(2)` 而不是裸 `RecvString`。UDP 不保证送达，万一数据报丢了，带超时的接收会在 2 秒后返回错误，而不是永久阻塞。

:::note Connect 成功不代表对端存在
因为 UDP 无连接，下面这段连一个没人监听的端口，`Connect` 依然成功（返回的 error 为 nil）：

``````````````yak
// 特性: UDP 连接没人监听的端口通常也“成功”
// 关键词: udp.Connect, 无连接特性
port = os.GetRandomAvailableTCPPort()  // 空闲端口, 没有 UDP 服务
conn, err = udp.Connect("127.0.0.1", port, udp.clientTimeout(1))
println(err == nil)    // OUT: true
conn.Close()
``````````````

所以判断"对方是否真的在"不能靠 `Connect` 的返回值，而要靠后续是否能收到响应。
:::

## 发往多个目标：每个目标一条 Connect

`conn.Send` 总是发到 `Connect` 时绑定的目标。库里还有一个 `conn.SendTo(data, "host:port")` 想发到任意地址，但它**在 `udp.Connect` 返回的套接字上用不了**，因为那是一个"已连接"（pre-connected）套接字。

:::danger SendTo 在 udp.Connect 的套接字上必然报错
`udp.Connect` 底层把套接字 `connect` 到了目标地址，得到一个已绑定目标的连接。Go 的标准库不允许在已连接的 UDP 套接字上再用 `WriteTo` 发往别的地址，于是 `SendTo` 会直接返回错误：

``````````````yak
// 特性: SendTo 在已连接(udp.Connect)套接字上会失败
// 关键词: conn.SendTo, pre-connected connection, 易错点
conn = udp.Connect("127.0.0.1", os.GetRandomAvailableTCPPort(), udp.clientTimeout(1))~
err = conn.SendTo("hello", "127.0.0.1:9")
println(err != nil)    // OUT: true
println(str.Contains(f"${err}", "pre-connected"))   // OUT: true
conn.Close()

assert err != nil, "SendTo on a connected udp socket must fail"
``````````````

要发往多个目标，正确做法是**每个目标各 `udp.Connect` 一次**，然后用普通的 `conn.Send`：
:::

``````````````yak
// 特性: 向多个 UDP 目标发送 —— 每个目标一条 Connect
// 关键词: udp.Connect, conn.Send, 多目标
// 起两个回显服务端, 端口不同
mk = func(tag) {
    p = os.GetRandomAvailableTCPPort()
    ctx, cancel = context.WithCancel(context.Background())
    go func() {
        udp.Serve("127.0.0.1", p, udp.serverContext(ctx),
            udp.serverCallback(func(conn, data) { conn.Send(tag + ":" + string(data)) }))
    }()
    return p, cancel
}
p1, c1 = mk("A")
p2, c2 = mk("B")
time.Sleep(0.5)

results = []
for _, p = range [p1, p2] {
    conn = udp.Connect("127.0.0.1", p, udp.clientTimeout(3))~
    conn.Send("hi")~
    results = append(results, conn.RecvStringTimeout(2)~)
    conn.Close()
}
c1(); c2()
println(results)    // OUT: [A:hi B:hi]
``````````````

两个目标分别回了 `A:hi` 与 `B:hi`。`Send` 与 `SendTo` 可以这样记：客户端侧只用 `Send`（一连接一目标）；`SendTo` 真正的用武之地是**服务端回调里那个未连接的套接字**，它能回应来自不同来源的数据报。

## 小结

- UDP 无连接：`udp.Connect` 一般不会因对端不存在而失败，存活与否要靠能否收到响应判断。
- 服务端回调是 `func(conn, data)`，`data` 直接是本次数据报字节，回调内 `conn.Send` 回到来源。
- 接收务必带超时（`RecvStringTimeout`），避免丢包导致永久阻塞。
- 一个套接字发往多个目标用 `conn.SendTo(data, "host:port")`。
