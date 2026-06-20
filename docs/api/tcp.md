# tcp

|函数名|函数描述/介绍|
|:------|:--------|
| [tcp.Connect](#connect) |Connect 建立一个 TCP 连接，返回一个可收发数据的 TCP 连接对象 参数: - host: 目标主机地址 - port: 目标端口 - opts: 可选配置，例如 tcp.clientTimeout、tcp.clientProxy、tcp.clientTls、tcp.clientLoca...|
| [tcp.Forward](#forward) |Forward 启动一个 TCP 端口转发，将本地端口的流量转发到远端主机端口 参数: - localPort: 本地监听端口 - remoteHost: 远端目标主机地址 - remotePort: 远端目标端口 返回值: - 错误信息，监听失败或转发结束时返回|
| [tcp.MockServe](#mockserve) |MockServe 启动一个本地 HTTP 模拟服务，对所有请求返回固定的响应报文，常用于测试与示例，返回监听的主机与端口 参数: - rsp: 服务对每个请求固定返回的原始 HTTP 响应报文 返回值: - 模拟服务监听的主机地址 - 模拟服务监听的端口|
| [tcp.MockTCPProtocol](#mocktcpprotocol) |MockTCPProtocol 启动一个模拟指定协议指纹的 TCP 服务，用于测试，返回监听的主机与端口 参数: - name: 要模拟的服务名称（指纹规则名） 返回值: - 模拟服务监听的主机地址 - 模拟服务监听的端口|
| [tcp.Serve](#serve) |Serve 启动一个 TCP 服务器，监听指定地址并通过回调处理每个连接 参数: - host: 监听的主机地址 - port: 监听的端口 - opts: 可选配置，例如 tcp.serverCallback、tcp.serverContext、tcp.serverTls 返回值: - 错误信息，...|
| [tcp.clientLocal](#clientlocal) |clientLocal 是一个 TCP 客户端配置选项，用于指定本地绑定的 IP 地址（不允许使用域名） 参数: - i: 本地 IP 地址，可为 &#34;192.168.0.1&#34; 或 &#34;192.168.0.1:0&#34; 形式 返回值: - 一个 TCP 客户端配置选项，作为可变参数传入 tcp.Connec...|
| [tcp.clientProxy](#clientproxy) |clientProxy 是一个 TCP 客户端配置选项，用于通过代理建立连接 参数: - proxy: 代理地址，支持 http、https、socks4、socks5 协议 返回值: - 一个 TCP 客户端配置选项，作为可变参数传入 tcp.Connect|
| [tcp.clientTimeout](#clienttimeout) |clientTimeout 是一个 TCP 客户端配置选项，用于设置连接与读写的超时时间（单位：秒） 参数: - i: 超时时间，单位为秒，支持小数 返回值: - 一个 TCP 客户端配置选项，作为可变参数传入 tcp.Connect|
| [tcp.clientTls](#clienttls) |clientTls 是一个 TCP 客户端配置选项，用于以 TLS（含国密 GMTLS）方式建立连接 参数: - crt: 客户端证书（PEM 格式内容或文件路径） - key: 客户端私钥（PEM 格式内容或文件路径） - caCerts: 可选的 CA 证书列表，用于校验服务端证书 返回值: -...|
| [tcp.serverCallback](#servercallback) |serverCallback 是一个 TCP 服务器配置选项，用于设置处理每个新连接的回调函数 参数: - cb: 回调函数，接收一个 TCP 连接对象，可在其中收发数据 返回值: - 一个 TCP 服务器配置选项，作为可变参数传入 tcp.Serve|
| [tcp.serverContext](#servercontext) |serverContext 是一个 TCP 服务器配置选项，用于设置上下文以控制服务的生命周期 参数: - ctx: 上下文对象，取消该上下文会停止服务器 返回值: - 一个 TCP 服务器配置选项，作为可变参数传入 tcp.Serve|
| [tcp.serverTls](#servertls) |serverTls 是一个 TCP 服务器配置选项，用于让服务器以 TLS 方式提供服务 参数: - crt: 服务器证书（PEM 格式内容或文件路径） - key: 服务器私钥（PEM 格式内容或文件路径） - cas: 可选的 CA 证书列表，用于校验客户端证书 返回值: - 一个 TCP 服务...|


## 函数定义
### Connect

#### 详细描述
Connect 建立一个 TCP 连接，返回一个可收发数据的 TCP 连接对象

参数:

  - host: 目标主机地址

  - port: 目标端口

  - opts: 可选配置，例如 tcp.clientTimeout、tcp.clientProxy、tcp.clientTls、tcp.clientLocal



返回值:

  - TCP 连接对象，可调用 Send/Recv 等方法

  - 错误信息，连接失败时返回非空




Example:

``````````````yak
// 建立 TCP 连接并收发数据，依赖网络，此处仅作示意
conn = tcp.Connect("www.example.com", 80, tcp.clientTimeout(5))~
conn.Send("GET / HTTP/1.1\r\nHost: www.example.com\r\n\r\n")~
rsp = conn.Recv()~
println(string(rsp))
``````````````


#### 定义

`Connect(host string, port any, opts ...dialerOpt) (*tcpConnection, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| host | `string` | 目标主机地址 |
| port | `any` | 目标端口 |
| opts | `...dialerOpt` | 可选配置，例如 tcp.clientTimeout、tcp.clientProxy、tcp.clientTls、tcp.clientLocal |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*tcpConnection` | TCP 连接对象，可调用 Send/Recv 等方法 |
| r2 | `error` | 错误信息，连接失败时返回非空 |


### Forward

#### 详细描述
Forward 启动一个 TCP 端口转发，将本地端口的流量转发到远端主机端口

参数:

  - localPort: 本地监听端口

  - remoteHost: 远端目标主机地址

  - remotePort: 远端目标端口



返回值:

  - 错误信息，监听失败或转发结束时返回




Example:

``````````````yak
// 把本地 8080 端口的流量转发到 example.com:80，此处仅作示意
tcp.Forward(8080, "www.example.com", 80)~
``````````````


#### 定义

`Forward(localPort int, remoteHost string, remotePort int) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| localPort | `int` | 本地监听端口 |
| remoteHost | `string` | 远端目标主机地址 |
| remotePort | `int` | 远端目标端口 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息，监听失败或转发结束时返回 |


### MockServe

#### 详细描述
MockServe 启动一个本地 HTTP 模拟服务，对所有请求返回固定的响应报文，常用于测试与示例，返回监听的主机与端口

参数:

  - rsp: 服务对每个请求固定返回的原始 HTTP 响应报文



返回值:

  - 模拟服务监听的主机地址

  - 模拟服务监听的端口




Example:

``````````````yak
// 启动一个固定响应的本地 HTTP 服务用于测试，此处仅作示意
host, port = tcp.MockServe([]byte("HTTP/1.1 200 OK\r\nContent-Length: 2\r\n\r\nhi"))
rsp = poc.Get(f"http://${host}:${port}/", poc.timeout(5))~
println(string(rsp.RawPacket))
``````````````


#### 定义

`MockServe(rsp []byte) (string, int)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| rsp | `[]byte` | 服务对每个请求固定返回的原始 HTTP 响应报文 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 模拟服务监听的主机地址 |
| r2 | `int` | 模拟服务监听的端口 |


### MockTCPProtocol

#### 详细描述
MockTCPProtocol 启动一个模拟指定协议指纹的 TCP 服务，用于测试，返回监听的主机与端口

参数:

  - name: 要模拟的服务名称（指纹规则名）



返回值:

  - 模拟服务监听的主机地址

  - 模拟服务监听的端口




Example:

``````````````yak
// 启动一个模拟 TCP 协议的本地服务用于测试，此处仅作示意
host, port = tcp.MockTCPProtocol("http")
println(host, port)
``````````````


#### 定义

`MockTCPProtocol(name string) (string, int)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 要模拟的服务名称（指纹规则名） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 模拟服务监听的主机地址 |
| r2 | `int` | 模拟服务监听的端口 |


### Serve

#### 详细描述
Serve 启动一个 TCP 服务器，监听指定地址并通过回调处理每个连接

参数:

  - host: 监听的主机地址

  - port: 监听的端口

  - opts: 可选配置，例如 tcp.serverCallback、tcp.serverContext、tcp.serverTls



返回值:

  - 错误信息，监听失败或服务结束时返回




Example:

``````````````yak
// 启动 TCP 服务器处理连接，此处仅作示意

	tcp.Serve("0.0.0.0", 8080, tcp.serverCallback(func(conn) {
	    conn.Send("hello")
	}))~
``````````````


#### 定义

`Serve(host any, port int, opts ...TcpServerConfigOpt) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| host | `any` | 监听的主机地址 |
| port | `int` | 监听的端口 |
| opts | `...TcpServerConfigOpt` | 可选配置，例如 tcp.serverCallback、tcp.serverContext、tcp.serverTls |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息，监听失败或服务结束时返回 |


### clientLocal

#### 详细描述
clientLocal 是一个 TCP 客户端配置选项，用于指定本地绑定的 IP 地址（不允许使用域名）

参数:

  - i: 本地 IP 地址，可为 &#34;192.168.0.1&#34; 或 &#34;192.168.0.1:0&#34; 形式



返回值:

  - 一个 TCP 客户端配置选项，作为可变参数传入 tcp.Connect




Example:

``````````````yak
// 指定本地出口 IP 建立 TCP 连接，此处仅作示意
conn = tcp.Connect("www.example.com", 80, tcp.clientLocal("0.0.0.0:0"), tcp.clientTimeout(5))~
println(conn)
``````````````


#### 定义

`clientLocal(i any) dialerOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 本地 IP 地址，可为 &#34;192.168.0.1&#34; 或 &#34;192.168.0.1:0&#34; 形式 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `dialerOpt` | 一个 TCP 客户端配置选项，作为可变参数传入 tcp.Connect |


### clientProxy

#### 详细描述
clientProxy 是一个 TCP 客户端配置选项，用于通过代理建立连接

参数:

  - proxy: 代理地址，支持 http、https、socks4、socks5 协议



返回值:

  - 一个 TCP 客户端配置选项，作为可变参数传入 tcp.Connect




Example:

``````````````yak
// 通过本地 socks5 代理建立 TCP 连接，此处仅作示意
conn = tcp.Connect("www.example.com", 80, tcp.clientProxy("socks5://127.0.0.1:1080"), tcp.clientTimeout(5))~
println(conn)
``````````````


#### 定义

`clientProxy(proxy string) dialerOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| proxy | `string` | 代理地址，支持 http、https、socks4、socks5 协议 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `dialerOpt` | 一个 TCP 客户端配置选项，作为可变参数传入 tcp.Connect |


### clientTimeout

#### 详细描述
clientTimeout 是一个 TCP 客户端配置选项，用于设置连接与读写的超时时间（单位：秒）

参数:

  - i: 超时时间，单位为秒，支持小数



返回值:

  - 一个 TCP 客户端配置选项，作为可变参数传入 tcp.Connect




Example:

``````````````yak
// 设置 5 秒超时建立 TCP 连接，此处仅作示意
conn = tcp.Connect("www.example.com", 80, tcp.clientTimeout(5))~
println(conn)
``````````````


#### 定义

`clientTimeout(i float64) dialerOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `float64` | 超时时间，单位为秒，支持小数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `dialerOpt` | 一个 TCP 客户端配置选项，作为可变参数传入 tcp.Connect |


### clientTls

#### 详细描述
clientTls 是一个 TCP 客户端配置选项，用于以 TLS（含国密 GMTLS）方式建立连接

参数:

  - crt: 客户端证书（PEM 格式内容或文件路径）

  - key: 客户端私钥（PEM 格式内容或文件路径）

  - caCerts: 可选的 CA 证书列表，用于校验服务端证书



返回值:

  - 一个 TCP 客户端配置选项，作为可变参数传入 tcp.Connect




Example:

``````````````yak
// 以双向 TLS 建立 TCP 连接，此处仅作示意
conn = tcp.Connect("www.example.com", 443, tcp.clientTls(cert, key), tcp.clientTimeout(5))~
println(conn)
``````````````


#### 定义

`clientTls(crt any, key any, caCerts ...any) dialerOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| crt | `any` | 客户端证书（PEM 格式内容或文件路径） |
| key | `any` | 客户端私钥（PEM 格式内容或文件路径） |
| caCerts | `...any` | 可选的 CA 证书列表，用于校验服务端证书 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `dialerOpt` | 一个 TCP 客户端配置选项，作为可变参数传入 tcp.Connect |


### serverCallback

#### 详细描述
serverCallback 是一个 TCP 服务器配置选项，用于设置处理每个新连接的回调函数

参数:

  - cb: 回调函数，接收一个 TCP 连接对象，可在其中收发数据



返回值:

  - 一个 TCP 服务器配置选项，作为可变参数传入 tcp.Serve




Example:

``````````````yak
// 设置 TCP 服务器处理每个连接的回调，此处仅作示意

	tcp.Serve("0.0.0.0", 8080, tcp.serverCallback(func(conn) {
	    data = conn.Recv()~
	    conn.Send("echo: " + string(data))
	}))~
``````````````


#### 定义

`serverCallback(cb func(connection *tcpConnection)) TcpServerConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cb | `func(connection *tcpConnection)` | 回调函数，接收一个 TCP 连接对象，可在其中收发数据 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `TcpServerConfigOpt` | 一个 TCP 服务器配置选项，作为可变参数传入 tcp.Serve |


### serverContext

#### 详细描述
serverContext 是一个 TCP 服务器配置选项，用于设置上下文以控制服务的生命周期

参数:

  - ctx: 上下文对象，取消该上下文会停止服务器



返回值:

  - 一个 TCP 服务器配置选项，作为可变参数传入 tcp.Serve




Example:

``````````````yak
// 通过 context 控制 TCP 服务器的关闭，此处仅作示意
ctx, cancel = context.WithCancel(context.Background())
defer cancel()
go tcp.Serve("0.0.0.0", 8080, tcp.serverContext(ctx))
``````````````


#### 定义

`serverContext(ctx context.Context) TcpServerConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` | 上下文对象，取消该上下文会停止服务器 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `TcpServerConfigOpt` | 一个 TCP 服务器配置选项，作为可变参数传入 tcp.Serve |


### serverTls

#### 详细描述
serverTls 是一个 TCP 服务器配置选项，用于让服务器以 TLS 方式提供服务

参数:

  - crt: 服务器证书（PEM 格式内容或文件路径）

  - key: 服务器私钥（PEM 格式内容或文件路径）

  - cas: 可选的 CA 证书列表，用于校验客户端证书



返回值:

  - 一个 TCP 服务器配置选项，作为可变参数传入 tcp.Serve




Example:

``````````````yak
// 启动一个 TLS 的 TCP 服务器，此处仅作示意
tcp.Serve("0.0.0.0", 8443, tcp.serverTls(cert, key))~
``````````````


#### 定义

`serverTls(crt any, key any, cas ...any) TcpServerConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| crt | `any` | 服务器证书（PEM 格式内容或文件路径） |
| key | `any` | 服务器私钥（PEM 格式内容或文件路径） |
| cas | `...any` | 可选的 CA 证书列表，用于校验客户端证书 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `TcpServerConfigOpt` | 一个 TCP 服务器配置选项，作为可变参数传入 tcp.Serve |


