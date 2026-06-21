# tcp {#library-tcp}

`tcp` 库提供 TCP 客户端与服务端能力，支持连接、收发数据、TLS、端口转发以及搭建测试服务，是裸 TCP 协议交互与自定义协议测试的基础。

典型使用场景：

- 客户端：`tcp.Connect(host, port, opts...)` 建立连接（配 `tcp.clientTimeout` / `tcp.clientProxy` / `tcp.clientTls` / `tcp.clientLocal`），之后收发字节。
- 服务端与转发：`tcp.Serve(host, port, opts...)` 起 TCP 服务（配 `tcp.serverCallback` 处理连接、`tcp.serverTls`），`tcp.Forward` 做端口转发。
- 测试桩：`tcp.MockServe` / `tcp.MockTCPProtocol` 快速起 mock 服务用于联调测试。

与相邻库的关系：`tcp` 是裸协议层工具，与 `udp`（无连接）、`tls`（加密）、`bufio`/`io`（流处理）配合，用于自定义协议的客户端/服务端实现。

> 共 12 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [tcp.Forward](#forward) | `localPort int, remoteHost string, remotePort int` | `error` | 启动一个 TCP 端口转发，将本地端口的流量转发到远端主机端口 |
| [tcp.MockServe](#mockserve) | `rsp []byte` | `string, int` | 启动一个本地 HTTP 模拟服务，对所有请求返回固定的响应报文，常用于测试与示例，返回监听的主机与端口 |
| [tcp.MockTCPProtocol](#mocktcpprotocol) | `name string` | `string, int` | 启动一个模拟指定协议指纹的 TCP 服务，用于测试，返回监听的主机与端口 |
| [tcp.clientLocal](#clientlocal) | `i any` | `dialerOpt` | 是一个 TCP 客户端配置选项，用于指定本地绑定的 IP 地址（不允许使用域名） |
| [tcp.clientProxy](#clientproxy) | `proxy string` | `dialerOpt` | 是一个 TCP 客户端配置选项，用于通过代理建立连接 |
| [tcp.clientTimeout](#clienttimeout) | `i float64` | `dialerOpt` | 是一个 TCP 客户端配置选项，用于设置连接与读写的超时时间（单位：秒） |
| [tcp.serverCallback](#servercallback) | `cb func(connection *tcpConnection)` | `TcpServerConfigOpt` | 是一个 TCP 服务器配置选项，用于设置处理每个新连接的回调函数 |
| [tcp.serverContext](#servercontext) | `ctx context.Context` | `TcpServerConfigOpt` | 是一个 TCP 服务器配置选项，用于设置上下文以控制服务的生命周期 |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [tcp.Connect](#connect) | `host string, port any, opts ...dialerOpt` | `*tcpConnection, error` | 建立一个 TCP 连接，返回一个可收发数据的 TCP 连接对象 |
| [tcp.Serve](#serve) | `host any, port int, opts ...TcpServerConfigOpt` | `error` | 启动一个 TCP 服务器，监听指定地址并通过回调处理每个连接 |
| [tcp.clientTls](#clienttls) | `crt any, key any, caCerts ...any` | `dialerOpt` | 是一个 TCP 客户端配置选项，用于以 TLS（含国密 GMTLS）方式建立连接 |
| [tcp.serverTls](#servertls) | `crt any, key any, cas ...any` | `TcpServerConfigOpt` | 是一个 TCP 服务器配置选项，用于让服务器以 TLS 方式提供服务 |

## 函数详情

### Forward {#forward}

```go
Forward(localPort int, remoteHost string, remotePort int) error
```

启动一个 TCP 端口转发，将本地端口的流量转发到远端主机端口

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| localPort | `int` | 本地监听端口 |
| remoteHost | `string` | 远端目标主机地址 |
| remotePort | `int` | 远端目标端口 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息，监听失败或转发结束时返回 |

**示例**

``````````````yak
// 把本地 8080 端口的流量转发到 example.com:80，此处仅作示意
tcp.Forward(8080, "www.example.com", 80)~
``````````````

---

### MockServe {#mockserve}

```go
MockServe(rsp []byte) (string, int)
```

启动一个本地 HTTP 模拟服务，对所有请求返回固定的响应报文，常用于测试与示例，返回监听的主机与端口

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| rsp | `[]byte` | 服务对每个请求固定返回的原始 HTTP 响应报文 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 模拟服务监听的主机地址 |
| r2 | `int` | 模拟服务监听的端口 |

**示例**

``````````````yak
// 启动一个固定响应的本地 HTTP 服务用于测试，此处仅作示意
host, port = tcp.MockServe([]byte("HTTP/1.1 200 OK\r\nContent-Length: 2\r\n\r\nhi"))
rsp = poc.Get(f"http://${host}:${port}/", poc.timeout(5))~
println(string(rsp.RawPacket))
``````````````

---

### MockTCPProtocol {#mocktcpprotocol}

```go
MockTCPProtocol(name string) (string, int)
```

启动一个模拟指定协议指纹的 TCP 服务，用于测试，返回监听的主机与端口

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 要模拟的服务名称（指纹规则名） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 模拟服务监听的主机地址 |
| r2 | `int` | 模拟服务监听的端口 |

**示例**

``````````````yak
// 启动一个模拟 TCP 协议的本地服务用于测试，此处仅作示意
host, port = tcp.MockTCPProtocol("http")
println(host, port)
``````````````

---

### clientLocal {#clientlocal}

```go
clientLocal(i any) dialerOpt
```

是一个 TCP 客户端配置选项，用于指定本地绑定的 IP 地址（不允许使用域名）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 本地 IP 地址，可为 &#34;192.168.0.1&#34; 或 &#34;192.168.0.1:0&#34; 形式 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `dialerOpt` | 一个 TCP 客户端配置选项，作为可变参数传入 tcp.Connect |

**示例**

``````````````yak
// 指定本地出口 IP 建立 TCP 连接，此处仅作示意
conn = tcp.Connect("www.example.com", 80, tcp.clientLocal("0.0.0.0:0"), tcp.clientTimeout(5))~
println(conn)
``````````````

---

### clientProxy {#clientproxy}

```go
clientProxy(proxy string) dialerOpt
```

是一个 TCP 客户端配置选项，用于通过代理建立连接

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| proxy | `string` | 代理地址，支持 http、https、socks4、socks5 协议 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `dialerOpt` | 一个 TCP 客户端配置选项，作为可变参数传入 tcp.Connect |

**示例**

``````````````yak
// 通过本地 socks5 代理建立 TCP 连接，此处仅作示意
conn = tcp.Connect("www.example.com", 80, tcp.clientProxy("socks5://127.0.0.1:1080"), tcp.clientTimeout(5))~
println(conn)
``````````````

---

### clientTimeout {#clienttimeout}

```go
clientTimeout(i float64) dialerOpt
```

是一个 TCP 客户端配置选项，用于设置连接与读写的超时时间（单位：秒）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `float64` | 超时时间，单位为秒，支持小数 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `dialerOpt` | 一个 TCP 客户端配置选项，作为可变参数传入 tcp.Connect |

**示例**

``````````````yak
// 设置 5 秒超时建立 TCP 连接，此处仅作示意
conn = tcp.Connect("www.example.com", 80, tcp.clientTimeout(5))~
println(conn)
``````````````

---

### serverCallback {#servercallback}

```go
serverCallback(cb func(connection *tcpConnection)) TcpServerConfigOpt
```

是一个 TCP 服务器配置选项，用于设置处理每个新连接的回调函数

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| cb | `func(connection *tcpConnection)` | 回调函数，接收一个 TCP 连接对象，可在其中收发数据 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `TcpServerConfigOpt` | 一个 TCP 服务器配置选项，作为可变参数传入 tcp.Serve |

**示例**

``````````````yak
// 设置 TCP 服务器处理每个连接的回调，此处仅作示意

	tcp.Serve("0.0.0.0", 8080, tcp.serverCallback(func(conn) {
	    data = conn.Recv()~
	    conn.Send("echo: " + string(data))
	}))~
``````````````

---

### serverContext {#servercontext}

```go
serverContext(ctx context.Context) TcpServerConfigOpt
```

是一个 TCP 服务器配置选项，用于设置上下文以控制服务的生命周期

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| ctx | `context.Context` | 上下文对象，取消该上下文会停止服务器 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `TcpServerConfigOpt` | 一个 TCP 服务器配置选项，作为可变参数传入 tcp.Serve |

**示例**

``````````````yak
// 通过 context 控制 TCP 服务器的关闭，此处仅作示意
ctx, cancel = context.WithCancel(context.Background())
defer cancel()
go tcp.Serve("0.0.0.0", 8080, tcp.serverContext(ctx))
``````````````

---

## 可变参数函数详情

### Connect {#connect}

```go
Connect(host string, port any, opts ...dialerOpt) (*tcpConnection, error)
```

建立一个 TCP 连接，返回一个可收发数据的 TCP 连接对象

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| host | `string` | 目标主机地址 |
| port | `any` | 目标端口 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...dialerOpt` | 可选配置，例如 tcp.clientTimeout、tcp.clientProxy、tcp.clientTls、tcp.clientLocal |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*tcpConnection` | TCP 连接对象，可调用 Send/Recv 等方法 |
| r2 | `error` | 错误信息，连接失败时返回非空 |

**示例**

``````````````yak
// 建立 TCP 连接并收发数据，依赖网络，此处仅作示意
conn = tcp.Connect("www.example.com", 80, tcp.clientTimeout(5))~
conn.Send("GET / HTTP/1.1\r\nHost: www.example.com\r\n\r\n")~
rsp = conn.Recv()~
println(string(rsp))
``````````````

---

### Serve {#serve}

```go
Serve(host any, port int, opts ...TcpServerConfigOpt) error
```

启动一个 TCP 服务器，监听指定地址并通过回调处理每个连接

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| host | `any` | 监听的主机地址 |
| port | `int` | 监听的端口 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...TcpServerConfigOpt` | 可选配置，例如 tcp.serverCallback、tcp.serverContext、tcp.serverTls |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息，监听失败或服务结束时返回 |

**示例**

``````````````yak
// 启动 TCP 服务器处理连接，此处仅作示意

	tcp.Serve("0.0.0.0", 8080, tcp.serverCallback(func(conn) {
	    conn.Send("hello")
	}))~
``````````````

---

### clientTls {#clienttls}

```go
clientTls(crt any, key any, caCerts ...any) dialerOpt
```

是一个 TCP 客户端配置选项，用于以 TLS（含国密 GMTLS）方式建立连接

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| crt | `any` | 客户端证书（PEM 格式内容或文件路径） |
| key | `any` | 客户端私钥（PEM 格式内容或文件路径） |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| caCerts | `...any` | 可选的 CA 证书列表，用于校验服务端证书 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `dialerOpt` | 一个 TCP 客户端配置选项，作为可变参数传入 tcp.Connect |

**示例**

``````````````yak
// 以双向 TLS 建立 TCP 连接，此处仅作示意
conn = tcp.Connect("www.example.com", 443, tcp.clientTls(cert, key), tcp.clientTimeout(5))~
println(conn)
``````````````

---

### serverTls {#servertls}

```go
serverTls(crt any, key any, cas ...any) TcpServerConfigOpt
```

是一个 TCP 服务器配置选项，用于让服务器以 TLS 方式提供服务

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| crt | `any` | 服务器证书（PEM 格式内容或文件路径） |
| key | `any` | 服务器私钥（PEM 格式内容或文件路径） |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| cas | `...any` | 可选的 CA 证书列表，用于校验客户端证书 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `TcpServerConfigOpt` | 一个 TCP 服务器配置选项，作为可变参数传入 tcp.Serve |

**示例**

``````````````yak
// 启动一个 TLS 的 TCP 服务器，此处仅作示意
tcp.Serve("0.0.0.0", 8443, tcp.serverTls(cert, key))~
``````````````

---

