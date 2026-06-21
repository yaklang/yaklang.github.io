# udp {#library-udp}

`udp` 库提供 UDP 客户端与服务端能力，用于无连接的数据报收发，常用于 UDP 协议交互、自定义协议测试与服务探测。

典型使用场景：

- 客户端：`udp.Connect(target, port, opts...)` 创建 UDP 连接收发数据（配 `udp.clientTimeout` / `udp.clientLocalAddr`）。
- 服务端：`udp.Serve(host, port, opts...)` 起 UDP 服务（配 `udp.serverCallback` 处理数据报、`udp.serverTimeout` / `udp.serverContext`）。
- 测试桩：`udp.MockUDPProtocol` 快速起 mock UDP 服务用于联调。

与相邻库的关系：`udp` 与 `tcp`（面向连接）互补，是无连接协议的实现基础，常用于 DNS、SNMP 等 UDP 服务的交互测试。

> 共 8 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [udp.MockUDPProtocol](#mockudpprotocol) | `name string` | `string, int` | 启动一个模拟指定协议指纹的 UDP 服务，用于测试，返回监听的主机与端口 |
| [udp.serverCallback](#servercallback) | `cb func(*udpConnection, []byte)` | `UdpServerOpt` | 是一个 UDP 服务器配置选项，用于设置收到数据报时的回调函数 |
| [udp.serverContext](#servercontext) | `ctx context.Context` | `UdpServerOpt` | 是一个 UDP 服务器配置选项，用于设置上下文以控制服务的生命周期 |
| [udp.serverTimeout](#servertimeout) | `f float64` | `UdpServerOpt` | 是一个 UDP 服务器配置选项，用于设置读取超时时间（单位：秒） |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [udp.Connect](#connect) | `target string, portRaw any, opts ...udpClientOption` | `*udpConnection, error` | 建立一个 UDP 连接，返回一个可收发数据的 UDP 连接对象 |
| [udp.Serve](#serve) | `host string, port any, opts ...UdpServerOpt` | `error` | 启动一个 UDP 服务器，监听指定地址并通过回调处理收到的数据报 |

## 函数详情

### MockUDPProtocol {#mockudpprotocol}

```go
MockUDPProtocol(name string) (string, int)
```

启动一个模拟指定协议指纹的 UDP 服务，用于测试，返回监听的主机与端口

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
// 启动一个模拟 UDP 协议的本地服务用于测试，此处仅作示意
host, port = udp.MockUDPProtocol("dns")
println(host, port)
``````````````

---

### serverCallback {#servercallback}

```go
serverCallback(cb func(*udpConnection, []byte)) UdpServerOpt
```

是一个 UDP 服务器配置选项，用于设置收到数据报时的回调函数

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| cb | `func(*udpConnection, []byte)` | 回调函数，接收连接对象与收到的数据字节 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `UdpServerOpt` | 一个 UDP 服务器配置选项，作为可变参数传入 udp.Serve |

**示例**

``````````````yak
// 设置 UDP 服务器收到数据时的处理回调，此处仅作示意

	udp.Serve("0.0.0.0", 53531, udp.serverCallback(func(conn, msg) {
	    conn.Send("ack")
	}))~
``````````````

---

### serverContext {#servercontext}

```go
serverContext(ctx context.Context) UdpServerOpt
```

是一个 UDP 服务器配置选项，用于设置上下文以控制服务的生命周期

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| ctx | `context.Context` | 上下文对象，取消该上下文会停止服务器 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `UdpServerOpt` | 一个 UDP 服务器配置选项，作为可变参数传入 udp.Serve |

**示例**

``````````````yak
// 通过 context 控制 UDP 服务器的关闭，此处仅作示意
ctx, cancel = context.WithCancel(context.Background())
defer cancel()
go udp.Serve("0.0.0.0", 53531, udp.serverContext(ctx))
``````````````

---

### serverTimeout {#servertimeout}

```go
serverTimeout(f float64) UdpServerOpt
```

是一个 UDP 服务器配置选项，用于设置读取超时时间（单位：秒）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| f | `float64` | 超时时间，单位为秒，支持小数 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `UdpServerOpt` | 一个 UDP 服务器配置选项，作为可变参数传入 udp.Serve |

**示例**

``````````````yak
// 设置 UDP 服务器读取超时，此处仅作示意
udp.Serve("0.0.0.0", 53531, udp.serverTimeout(10))~
``````````````

---

## 可变参数函数详情

### Connect {#connect}

```go
Connect(target string, portRaw any, opts ...udpClientOption) (*udpConnection, error)
```

建立一个 UDP 连接，返回一个可收发数据的 UDP 连接对象

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| target | `string` | 目标主机，可包含端口（如 &#34;8.8.8.8&#34; 或 &#34;8.8.8.8:53&#34;） |
| portRaw | `any` | 目标端口，当 target 中未指定端口时使用 |

**可选参数**

可作为可变参数 `opts ...udpClientOption` 传入选项；共 2 个可用选项，详见 [udpClientOption 选项列表](#option-udpclientoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*udpConnection` | UDP 连接对象，可调用 Send/Recv 等方法 |
| r2 | `error` | 错误信息，连接失败时返回非空 |

**示例**

``````````````yak
// 建立 UDP 连接并发送数据，依赖网络，此处仅作示意
conn = udp.Connect("8.8.8.8", 53, udp.clientTimeout(5))~
conn.Send("hello")~
``````````````

---

### Serve {#serve}

```go
Serve(host string, port any, opts ...UdpServerOpt) error
```

启动一个 UDP 服务器，监听指定地址并通过回调处理收到的数据报

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| host | `string` | 监听的主机地址 |
| port | `any` | 监听的端口 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...UdpServerOpt` | 可选配置，例如 udp.serverCallback、udp.serverTimeout、udp.serverContext |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息，监听失败或服务结束时返回 |

**示例**

``````````````yak
// 启动 UDP 服务器并处理收到的数据，此处仅作示意

	udp.Serve("0.0.0.0", 53531, udp.serverCallback(func(conn, msg) {
	    println(string(msg))
	}))~
``````````````

---

## 可变参数选项列表

以下按选项类型汇总全部可变参数选项(原先重复在各主函数下的选项表已收拢到此处)：

### 1. 类型：udpClientOption {#option-udpclientoption}

涉及到的函数有：[udp.Connect](#connect)

|选项函数|参数|返回值|说明|
|:--|:--|:--|:--|
| `udp.clientLocalAddr` | `target string` | `udpClientOption` | 是一个 UDP 客户端配置选项，用于指定本地绑定地址 |
| `udp.clientTimeout` | `target float64` | `udpClientOption` | 是一个 UDP 客户端配置选项，用于设置读写超时时间（单位：秒） |

