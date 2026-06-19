# udp

|函数名|函数描述/介绍|
|:------|:--------|
| [udp.Connect](#connect) |Connect 建立一个 UDP 连接，返回一个可收发数据的 UDP 连接对象 参数: - target: 目标主机，可包含端口（如 &#34;8.8.8.8&#34; 或 &#34;8.8.8.8:53&#34;） - portRaw: 目标端口，当 target 中未指定端口时使用 - opts: 可选配置，例如 udp.cl...|
| [udp.MockUDPProtocol](#mockudpprotocol) |MockUDPProtocol 启动一个模拟指定协议指纹的 UDP 服务，用于测试，返回监听的主机与端口 参数: - name: 要模拟的服务名称（指纹规则名） 返回值: - 模拟服务监听的主机地址 - 模拟服务监听的端口|
| [udp.Serve](#serve) |Serve 启动一个 UDP 服务器，监听指定地址并通过回调处理收到的数据报 参数: - host: 监听的主机地址 - port: 监听的端口 - opts: 可选配置，例如 udp.serverCallback、udp.serverTimeout、udp.serverContext 返回值: -...|
| [udp.clientLocalAddr](#clientlocaladdr) |clientLocalAddr 是一个 UDP 客户端配置选项，用于指定本地绑定地址 参数: - target: 本地地址，格式为 host:port 返回值: - 一个 UDP 客户端配置选项，作为可变参数传入 udp.Connect|
| [udp.clientTimeout](#clienttimeout) |clientTimeout 是一个 UDP 客户端配置选项，用于设置读写超时时间（单位：秒） 参数: - target: 超时时间，单位为秒，支持小数 返回值: - 一个 UDP 客户端配置选项，作为可变参数传入 udp.Connect|
| [udp.serverCallback](#servercallback) |serverCallback 是一个 UDP 服务器配置选项，用于设置收到数据报时的回调函数 参数: - cb: 回调函数，接收连接对象与收到的数据字节 返回值: - 一个 UDP 服务器配置选项，作为可变参数传入 udp.Serve|
| [udp.serverContext](#servercontext) |serverContext 是一个 UDP 服务器配置选项，用于设置上下文以控制服务的生命周期 参数: - ctx: 上下文对象，取消该上下文会停止服务器 返回值: - 一个 UDP 服务器配置选项，作为可变参数传入 udp.Serve|
| [udp.serverTimeout](#servertimeout) |serverTimeout 是一个 UDP 服务器配置选项，用于设置读取超时时间（单位：秒） 参数: - f: 超时时间，单位为秒，支持小数 返回值: - 一个 UDP 服务器配置选项，作为可变参数传入 udp.Serve|


## 函数定义
### Connect

#### 详细描述
Connect 建立一个 UDP 连接，返回一个可收发数据的 UDP 连接对象

参数:

  - target: 目标主机，可包含端口（如 &#34;8.8.8.8&#34; 或 &#34;8.8.8.8:53&#34;）

  - portRaw: 目标端口，当 target 中未指定端口时使用

  - opts: 可选配置，例如 udp.clientTimeout、udp.clientLocalAddr



返回值:

  - UDP 连接对象，可调用 Send/Recv 等方法

  - 错误信息，连接失败时返回非空




Example:

``````````````yak
// 建立 UDP 连接并发送数据，依赖网络，此处仅作示意
conn = udp.Connect("8.8.8.8", 53, udp.clientTimeout(5))~
conn.Send("hello")~
``````````````


#### 定义

`Connect(target string, portRaw any, opts ...udpClientOption) (*udpConnection, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| target | `string` | 目标主机，可包含端口（如 &#34;8.8.8.8&#34; 或 &#34;8.8.8.8:53&#34;） |
| portRaw | `any` | 目标端口，当 target 中未指定端口时使用 |
| opts | `...udpClientOption` | 可选配置，例如 udp.clientTimeout、udp.clientLocalAddr |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*udpConnection` | UDP 连接对象，可调用 Send/Recv 等方法 |
| r2 | `error` | 错误信息，连接失败时返回非空 |


### MockUDPProtocol

#### 详细描述
MockUDPProtocol 启动一个模拟指定协议指纹的 UDP 服务，用于测试，返回监听的主机与端口

参数:

  - name: 要模拟的服务名称（指纹规则名）



返回值:

  - 模拟服务监听的主机地址

  - 模拟服务监听的端口




Example:

``````````````yak
// 启动一个模拟 UDP 协议的本地服务用于测试，此处仅作示意
host, port = udp.MockUDPProtocol("dns")
println(host, port)
``````````````


#### 定义

`MockUDPProtocol(name string) (string, int)`

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
Serve 启动一个 UDP 服务器，监听指定地址并通过回调处理收到的数据报

参数:

  - host: 监听的主机地址

  - port: 监听的端口

  - opts: 可选配置，例如 udp.serverCallback、udp.serverTimeout、udp.serverContext



返回值:

  - 错误信息，监听失败或服务结束时返回




Example:

``````````````yak
// 启动 UDP 服务器并处理收到的数据，此处仅作示意

	udp.Serve("0.0.0.0", 53531, udp.serverCallback(func(conn, msg) {
	    println(string(msg))
	}))~
``````````````


#### 定义

`Serve(host string, port any, opts ...UdpServerOpt) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| host | `string` | 监听的主机地址 |
| port | `any` | 监听的端口 |
| opts | `...UdpServerOpt` | 可选配置，例如 udp.serverCallback、udp.serverTimeout、udp.serverContext |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息，监听失败或服务结束时返回 |


### clientLocalAddr

#### 详细描述
clientLocalAddr 是一个 UDP 客户端配置选项，用于指定本地绑定地址

参数:

  - target: 本地地址，格式为 host:port



返回值:

  - 一个 UDP 客户端配置选项，作为可变参数传入 udp.Connect




Example:

``````````````yak
// 指定本地端口建立 UDP 连接，此处仅作示意
conn = udp.Connect("8.8.8.8", 53, udp.clientLocalAddr("0.0.0.0:0"), udp.clientTimeout(5))~
println(conn)
``````````````


#### 定义

`clientLocalAddr(target string) udpClientOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| target | `string` | 本地地址，格式为 host:port |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `udpClientOption` | 一个 UDP 客户端配置选项，作为可变参数传入 udp.Connect |


### clientTimeout

#### 详细描述
clientTimeout 是一个 UDP 客户端配置选项，用于设置读写超时时间（单位：秒）

参数:

  - target: 超时时间，单位为秒，支持小数



返回值:

  - 一个 UDP 客户端配置选项，作为可变参数传入 udp.Connect




Example:

``````````````yak
// 设置 5 秒超时建立 UDP 连接，此处仅作示意
conn = udp.Connect("8.8.8.8", 53, udp.clientTimeout(5))~
println(conn)
``````````````


#### 定义

`clientTimeout(target float64) udpClientOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| target | `float64` | 超时时间，单位为秒，支持小数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `udpClientOption` | 一个 UDP 客户端配置选项，作为可变参数传入 udp.Connect |


### serverCallback

#### 详细描述
serverCallback 是一个 UDP 服务器配置选项，用于设置收到数据报时的回调函数

参数:

  - cb: 回调函数，接收连接对象与收到的数据字节



返回值:

  - 一个 UDP 服务器配置选项，作为可变参数传入 udp.Serve




Example:

``````````````yak
// 设置 UDP 服务器收到数据时的处理回调，此处仅作示意

	udp.Serve("0.0.0.0", 53531, udp.serverCallback(func(conn, msg) {
	    conn.Send("ack")
	}))~
``````````````


#### 定义

`serverCallback(cb func(*udpConnection, []byte)) UdpServerOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cb | `func(*udpConnection, []byte)` | 回调函数，接收连接对象与收到的数据字节 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `UdpServerOpt` | 一个 UDP 服务器配置选项，作为可变参数传入 udp.Serve |


### serverContext

#### 详细描述
serverContext 是一个 UDP 服务器配置选项，用于设置上下文以控制服务的生命周期

参数:

  - ctx: 上下文对象，取消该上下文会停止服务器



返回值:

  - 一个 UDP 服务器配置选项，作为可变参数传入 udp.Serve




Example:

``````````````yak
// 通过 context 控制 UDP 服务器的关闭，此处仅作示意
ctx, cancel = context.WithCancel(context.Background())
defer cancel()
go udp.Serve("0.0.0.0", 53531, udp.serverContext(ctx))
``````````````


#### 定义

`serverContext(ctx context.Context) UdpServerOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` | 上下文对象，取消该上下文会停止服务器 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `UdpServerOpt` | 一个 UDP 服务器配置选项，作为可变参数传入 udp.Serve |


### serverTimeout

#### 详细描述
serverTimeout 是一个 UDP 服务器配置选项，用于设置读取超时时间（单位：秒）

参数:

  - f: 超时时间，单位为秒，支持小数



返回值:

  - 一个 UDP 服务器配置选项，作为可变参数传入 udp.Serve




Example:

``````````````yak
// 设置 UDP 服务器读取超时，此处仅作示意
udp.Serve("0.0.0.0", 53531, udp.serverTimeout(10))~
``````````````


#### 定义

`serverTimeout(f float64) UdpServerOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `float64` | 超时时间，单位为秒，支持小数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `UdpServerOpt` | 一个 UDP 服务器配置选项，作为可变参数传入 udp.Serve |


