# mitm {#library-mitm}

`mitm` 库是中间人代理（MITM）能力封装，启动一个 HTTP/HTTPS 代理，对经过的请求/响应进行劫持、查看、改写或 mock，是流量分析、被动扫描与交互式测试的核心。支持国密 TLS、透明代理、WebSocket 与 JA3 随机化。

典型使用场景：

- 启动代理：`mitm.Start(port, opts...)` 启动 MITM，`mitm.Bridge` 串联下游代理。
- 劫持改写：`mitm.hijackHTTPRequest` / `mitm.hijackHTTPResponse` 在回调里修改或丢弃报文，`mitm.mockHTTPRequest` 直接返回 mock 响应，`mitm.callback` 旁路观察全部流量。
- 证书与传输：`mitm.AddMITMRootCertIntoSystem` / `mitm.VerifyMITMRootCertInstalled` 管理根证书，`mitm.rootCA` / `mitm.gmtls` / `mitm.sni` / `mitm.randomJA3` 控制 TLS 行为，`mitm.wscallback` 处理 WebSocket。

与相邻库的关系：`mitm` 是流量入口，常与 `hook`（驱动插件链处理流量）、`fuzz`/`poc`（对劫持到的请求做测试）、`db`（流量入库）协同，构成被动扫描与交互测试流水线。

> 共 30 个函数、1 个实例

## 实例

|实例名|类型|说明|
|:--|:--|:--|
| grpcMitmKey | `string` | &#34;grpc_mitm_extra_conn_key&#34; |

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [mitm.AddMITMRootCertIntoSystem](#addmitmrootcertintosystem) | - | `error` | 将 MITM 根证书添加到 Linux 系统信任库 |
| [mitm.GetDefaultExtraConnManager](#getdefaultextraconnmanager) | - | `*MitmExtraConnManager` | 获取默认的 MITM 额外连接管理器，用于向运行中的 MITM 服务注入外部连接 |
| [mitm.QuickVerifyMITMRootCert](#quickverifymitmrootcert) | - | `bool, error` | 快速验证 MITM 根证书状态（不启动服务器，只检查系统证书池） |
| [mitm.TestCertificateOperations](#testcertificateoperations) | - | `error` | 完整测试 MITM 根证书的安装、验证和撤销操作流程（需要管理员权限） |
| [mitm.VerifyMITMRootCertInstalled](#verifymitmrootcertinstalled) | - | `error` | 验证 MITM 根证书是否已正确安装到系统信任库 |
| [mitm.VerifyMITMRootCertNotInstalled](#verifymitmrootcertnotinstalled) | - | `error` | 验证 MITM 根证书是否已从系统信任库中移除 |
| [mitm.WithdrawMITMRootCertFromSystem](#withdrawmitmrootcertfromsystem) | - | `error` | 从 Linux 系统信任库中移除 MITM 根证书 |
| [mitm.callback](#callback) | `f func(bool, string, *http.Request, *http.Response)` | `MitmConfigOpt` | 是一个选项函数，用于指定中间人代理服务器的回调函数，当接收到请求和响应后会调用该回调函数 |
| [mitm.context](#context) | `ctx context.Context` | `MitmConfigOpt` | 是一个选项函数，用于指定中间人代理服务器的上下文，可通过取消上下文来停止服务 |
| [mitm.extraIncomingConn](#extraincomingconn) | `ch any` | `MitmConfigOpt` | 是一个选项函数，用于指定中间人代理服务器接受外部传入的连接通道 |
| [mitm.gmRootCA](#gmrootca) | `cert []byte, key []byte` | `MitmConfigOpt` | 是一个选项函数，用于指定中间人代理服务器的国密根证书和私钥 |
| [mitm.gmtls](#gmtls) | `b bool` | `MitmConfigOpt` | 是一个选项参数，用于指定中间人代理服务器是否开启 GMTLS 劫持模式，默认为false |
| [mitm.gmtlsOnly](#gmtlsonly) | `b bool` | `MitmConfigOpt` | 是一个选项参数，用于指定中间人代理服务器是否只使用 GMTLS 劫持模式，默认为false |
| [mitm.gmtlsPrefer](#gmtlsprefer) | `b bool` | `MitmConfigOpt` | 是一个选项参数，用于指定中间人代理服务器是否优先使用 GMTLS 劫持模式，默认为false |
| [mitm.hijackHTTPRequest](#hijackhttprequest) | `h func(isHttps bool, u string, req []byte, modified func([]byte), dropped func())` | `MitmConfigOpt` | 是一个选项函数，用于指定中间人代理服务器的请求劫持函数，当接收到请求后，会调用该回调函数 |
| [mitm.hijackHTTPResponse](#hijackhttpresponse) | `h func(isHttps bool, u string, rsp []byte, modified func([]byte), dropped func())` | `MitmConfigOpt` | 是一个选项函数，用于指定中间人代理服务器的响应劫持函数，当接收到响应后，会调用该回调函数 |
| [mitm.hijackHTTPResponseEx](#hijackhttpresponseex) | `h func(bool, string, []byte, []byte, func([]byte), func())` | `MitmConfigOpt` | 是一个选项函数，用于指定中间人代理服务器的响应劫持函数，当接收到响应后，会调用该回调函数 |
| [mitm.host](#host) | `host string` | `MitmConfigOpt` | 是一个选项函数，用于指定中间人代理服务器的监听地址，默认为空，即监听所有网卡 |
| [mitm.isTransparent](#istransparent) | `b bool` | `MitmConfigOpt` | 是一个选项函数，用于指定中间人代理服务器是否开启透明劫持模式，默认为false |
| [mitm.maxContentLength](#maxcontentlength) | `i int` | `MitmConfigOpt` | 是一个选项函数，用于指定中间人代理服务器的最大请求和响应内容长度，默认为 10MB |
| [mitm.mockHTTPRequest](#mockhttprequest) | `h func(isHttps bool, urlStr string, req []byte, mockResponse func(rsp any))` | `MitmConfigOpt` | 是一个选项函数，用于指定中间人代理服务器的请求 mock 函数 |
| [mitm.randomJA3](#randomja3) | `b bool` | `MitmConfigOpt` | 是一个选项函数，用于指定中间人代理服务器是否开启随机 JA3 指纹模式，默认为 false |
| [mitm.rootCA](#rootca) | `cert []byte, key []byte` | `MitmConfigOpt` | 是一个选项函数，用于指定中间人代理服务器的根证书和私钥 |
| [mitm.sni](#sni) | `sni string, overwrite bool` | `MitmConfigOpt` | 是一个选项函数，用于控制 MITM 代理连接目标服务器时的 SNI (Server Name Indication) |
| [mitm.useDefaultCA](#usedefaultca) | `t bool` | `MitmConfigOpt` | 是一个选项函数，用于指定中间人代理服务器是否使用内置的证书和私钥，默认为true |
| [mitm.wscallback](#wscallback) | `f func([]byte, bool) any` | `MitmConfigOpt` | 是一个选项函数，用于指定中间人代理服务器的 websocket 劫持函数，当接收到 websocket 请求或响应后，会调用该回调函数 |
| [mitm.wsforcetext](#wsforcetext) | `b bool` | `MitmConfigOpt` | 是一个选项函数，用于强制将 websocket 劫持的数据帧转换为文本帧，默认为 false |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [mitm.Bridge](#bridge) | `port any, downstreamProxy string, opts ...MitmConfigOpt` | `error` | 启动一个 MITM (中间人)代理服务器，与 Start 类似但可指定下游代理服务器地址，并默认在收到请求和响应时打印到标准输出 |
| [mitm.Start](#start) | `port int, opts ...MitmConfigOpt` | `error` | 启动一个 MITM (中间人)代理服务器，可接收零个到多个选项函数影响其行为 |
| [mitm.extraIncomingConnChanWithStrongLocalHost](#extraincomingconnchanwithstronglocalhost) | `localAddr any, ch any, kv ...any` | `MitmConfigOpt` | 是一个选项函数，用于指定中间人代理服务器接受外部传入的连接通道 |

## 函数详情

### AddMITMRootCertIntoSystem {#addmitmrootcertintosystem}

```go
AddMITMRootCertIntoSystem() error
```

将 MITM 根证书添加到 Linux 系统信任库
支持多个发行版的证书安装路径

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` |  |

---

### GetDefaultExtraConnManager {#getdefaultextraconnmanager}

```go
GetDefaultExtraConnManager() *MitmExtraConnManager
```

获取默认的 MITM 额外连接管理器，用于向运行中的 MITM 服务注入外部连接

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*MitmExtraConnManager` | 默认的额外连接管理器实例 |

**示例**

``````````````yak
// 获取默认额外连接管理器，此处仅作示意
manager = mitm.GetDefaultExtraConnManager()
println(manager)
``````````````

---

### QuickVerifyMITMRootCert {#quickverifymitmrootcert}

```go
QuickVerifyMITMRootCert() (bool, error)
```

快速验证 MITM 根证书状态（不启动服务器，只检查系统证书池）

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `bool` | 证书是否被系统信任 |
| r2 | `error` | 错误信息，获取或解析证书失败时返回非空 |

**示例**

``````````````yak
// 快速检查 MITM 根证书是否被信任，此处仅作示意
trusted, err = mitm.QuickVerifyMITMRootCert()
println(trusted)
``````````````

---

### TestCertificateOperations {#testcertificateoperations}

```go
TestCertificateOperations() error
```

完整测试 MITM 根证书的安装、验证和撤销操作流程（需要管理员权限）

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息，测试流程中任一步骤失败时返回非空 |

**示例**

``````````````yak
// 测试证书安装/验证/撤销全流程，需要权限，此处仅作示意
mitm.TestCertificateOperations()~
``````````````

---

### VerifyMITMRootCertInstalled {#verifymitmrootcertinstalled}

```go
VerifyMITMRootCertInstalled() error
```

验证 MITM 根证书是否已正确安装到系统信任库

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息，证书未安装或验证失败时返回非空，安装正确时返回 nil |

**示例**

``````````````yak
// 验证 MITM 根证书是否已安装，此处仅作示意
mitm.VerifyMITMRootCertInstalled()~
``````````````

---

### VerifyMITMRootCertNotInstalled {#verifymitmrootcertnotinstalled}

```go
VerifyMITMRootCertNotInstalled() error
```

验证 MITM 根证书是否已从系统信任库中移除

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息，证书仍被信任或验证异常时返回非空，已移除时返回 nil |

**示例**

``````````````yak
// 验证 MITM 根证书是否已移除，此处仅作示意
mitm.VerifyMITMRootCertNotInstalled()~
``````````````

---

### WithdrawMITMRootCertFromSystem {#withdrawmitmrootcertfromsystem}

```go
WithdrawMITMRootCertFromSystem() error
```

从 Linux 系统信任库中移除 MITM 根证书

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` |  |

---

### callback {#callback}

```go
callback(f func(bool, string, *http.Request, *http.Response)) MitmConfigOpt
```

是一个选项函数，用于指定中间人代理服务器的回调函数，当接收到请求和响应后会调用该回调函数

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| f | `func(bool, string, *http.Request, *http.Response)` | 回调函数，参数依次为是否 HTTPS、URL、请求对象、响应对象 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `MitmConfigOpt` | 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge |

**示例**

``````````````yak
mitm.Start(8080, mitm.callback(func(isHttps, urlStr, req, rsp) { http.dump(req); http.dump(rsp)  }))
``````````````

---

### context {#context}

```go
context(ctx context.Context) MitmConfigOpt
```

是一个选项函数，用于指定中间人代理服务器的上下文，可通过取消上下文来停止服务

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| ctx | `context.Context` | 上下文对象 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `MitmConfigOpt` | 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge |

**示例**

``````````````yak
mitm.Start(8080, mitm.context(context.Background()))
``````````````

---

### extraIncomingConn {#extraincomingconn}

```go
extraIncomingConn(ch any) MitmConfigOpt
```

是一个选项函数，用于指定中间人代理服务器接受外部传入的连接通道

通过该选项，可以将外部的 net.Conn 连接注入到 MITM 服务器中进行劫持处理

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| ch | `any` | 连接通道（chan net.Conn 或 chan interface{}） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `MitmConfigOpt` | 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge |

**示例**

``````````````yak
connChan = make(chan any) // 元素为 net.Conn
mitm.Start(8080, mitm.extraIncomingConn(connChan))
``````````````

---

### gmRootCA {#gmrootca}

```go
gmRootCA(cert []byte, key []byte) MitmConfigOpt
```

是一个选项函数，用于指定中间人代理服务器的国密根证书和私钥

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| cert | `[]byte` | PEM 格式的国密根证书 |
| key | `[]byte` | PEM 格式的国密私钥 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `MitmConfigOpt` | 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge |

**示例**

``````````````yak
mitm.Start(8080, mitm.gmRootCA(cert, key))
``````````````

---

### gmtls {#gmtls}

```go
gmtls(b bool) MitmConfigOpt
```

是一个选项参数，用于指定中间人代理服务器是否开启 GMTLS 劫持模式，默认为false

在开启 GMTLS 劫持模式下，中间人代理服务器会劫持所有的 GMTLS 流量

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| b | `bool` | 是否开启 GMTLS 劫持模式 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `MitmConfigOpt` | 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge |

**示例**

``````````````yak
mitm.Start(8080, mitm.gmtls(true))
``````````````

---

### gmtlsOnly {#gmtlsonly}

```go
gmtlsOnly(b bool) MitmConfigOpt
```

是一个选项参数，用于指定中间人代理服务器是否只使用 GMTLS 劫持模式，默认为false

在开启 GMTLS 劫持模式下，中间人代理服务器只会使用 GMTLS 劫持模式

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| b | `bool` | 是否只使用 GMTLS 劫持模式 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `MitmConfigOpt` | 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge |

**示例**

``````````````yak
mitm.Start(8080, mitm.gmtlsOnly(true))
``````````````

---

### gmtlsPrefer {#gmtlsprefer}

```go
gmtlsPrefer(b bool) MitmConfigOpt
```

是一个选项参数，用于指定中间人代理服务器是否优先使用 GMTLS 劫持模式，默认为false

在开启 GMTLS 劫持模式下，中间人代理服务器会优先使用 GMTLS 劫持模式

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| b | `bool` | 是否优先使用 GMTLS 劫持模式 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `MitmConfigOpt` | 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge |

**示例**

``````````````yak
mitm.Start(8080, mitm.gmtlsPrefer(true))
``````````````

---

### hijackHTTPRequest {#hijackhttprequest}

```go
hijackHTTPRequest(h func(isHttps bool, u string, req []byte, modified func([]byte), dropped func())) MitmConfigOpt
```

是一个选项函数，用于指定中间人代理服务器的请求劫持函数，当接收到请求后，会调用该回调函数

通过调用该回调函数的第四个参数，可以修改请求内容，通过调用该回调函数的第五个参数，可以丢弃请求

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| h | `func(isHttps bool, u string, req []byte, modified func([]byte), dropped func())` | 请求劫持回调，参数依次为是否 HTTPS、URL、请求报文、修改函数、丢弃函数 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `MitmConfigOpt` | 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge |

**示例**

``````````````yak
mitm.Start(8080, mitm.hijackHTTPRequest(func(isHttps, urlStr, req, modified, dropped) {
// 添加一个额外的请求头
req = poc.ReplaceHTTPPacketHeader(req, "AAA", "BBB")
modified(req)
}
))
``````````````

---

### hijackHTTPResponse {#hijackhttpresponse}

```go
hijackHTTPResponse(h func(isHttps bool, u string, rsp []byte, modified func([]byte), dropped func())) MitmConfigOpt
```

是一个选项函数，用于指定中间人代理服务器的响应劫持函数，当接收到响应后，会调用该回调函数

通过调用该回调函数的第四个参数，可以修改响应内容，通过调用该回调函数的第五个参数，可以丢弃响应

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| h | `func(isHttps bool, u string, rsp []byte, modified func([]byte), dropped func())` | 响应劫持回调，参数依次为是否 HTTPS、URL、响应报文、修改函数、丢弃函数 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `MitmConfigOpt` | 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge |

**示例**

``````````````yak
mitm.Start(8080, mitm.hijackHTTPResponse(func(isHttps, urlStr, rsp, modified, dropped) {
// 修改响应体为hijacked
rsp = poc.ReplaceBody(rsp, b"hijacked", false)
modified(rsp)
}
))
``````````````

---

### hijackHTTPResponseEx {#hijackhttpresponseex}

```go
hijackHTTPResponseEx(h func(bool, string, []byte, []byte, func([]byte), func())) MitmConfigOpt
```

是一个选项函数，用于指定中间人代理服务器的响应劫持函数，当接收到响应后，会调用该回调函数

通过调用该回调函数的第五个参数，可以修改响应内容，通过调用该回调函数的第六个参数，可以丢弃响应

它与 hijackHTTPResponse 的区别在于，它可以获取到原始请求报文

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| h | `func(bool, string, []byte, []byte, func([]byte), func())` | 响应劫持回调，参数依次为是否 HTTPS、URL、请求报文、响应报文、修改函数、丢弃函数 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `MitmConfigOpt` | 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge |

**示例**

``````````````yak
mitm.Start(8080, mitm.hijackHTTPResponseEx(func(isHttps, urlStr, req, rsp, modified, dropped) {
// 修改响应体为hijacked
rsp = poc.ReplaceBody(rsp, b"hijacked", false)
modified(rsp)
}
))
``````````````

---

### host {#host}

```go
host(host string) MitmConfigOpt
```

是一个选项函数，用于指定中间人代理服务器的监听地址，默认为空，即监听所有网卡

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| host | `string` | 监听地址 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `MitmConfigOpt` | 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge |

**示例**

``````````````yak
mitm.Start(8080, mitm.host("127.0.0.1"))
``````````````

---

### isTransparent {#istransparent}

```go
isTransparent(b bool) MitmConfigOpt
```

是一个选项函数，用于指定中间人代理服务器是否开启透明劫持模式，默认为false

在开启透明模式下，所有流量都会被默认转发，所有的回调函数都会被忽略

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| b | `bool` | 是否开启透明劫持 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `MitmConfigOpt` | 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge |

**示例**

``````````````yak
mitm.Start(8080, mitm.isTransparent(true))
``````````````

---

### maxContentLength {#maxcontentlength}

```go
maxContentLength(i int) MitmConfigOpt
```

是一个选项函数，用于指定中间人代理服务器的最大请求和响应内容长度，默认为 10MB

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `int` | 最大内容长度，单位为字节 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `MitmConfigOpt` | 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge |

**示例**

``````````````yak
mitm.Start(8080, mitm.maxContentLength(100 * 1000 * 1000))
``````````````

---

### mockHTTPRequest {#mockhttprequest}

```go
mockHTTPRequest(h func(isHttps bool, urlStr string, req []byte, mockResponse func(rsp any))) MitmConfigOpt
```

是一个选项函数，用于指定中间人代理服务器的请求 mock 函数

当接收到请求后，会调用该回调函数，通过调用 mockResponse 函数可以直接返回自定义响应，跳过真实的网络请求

mockResponse 接受一个响应（字符串或字节数组），会自动修复响应格式，如果修复失败则返回 502 Bad Gateway

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| h | `func(isHttps bool, urlStr string, req []byte, mockResponse func(rsp any))` | 请求 mock 回调，参数依次为是否 HTTPS、URL、请求报文、mockResponse 函数 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `MitmConfigOpt` | 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge |

**示例**

``````````````yak
mitm.Start(8080, mitm.mockHTTPRequest(func(isHttps, urlStr, req, mockResponse) {

	if str.Contains(urlStr, "test") {
	    mockResponse("HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n\r\nMocked Response")
	}

}))
``````````````

---

### randomJA3 {#randomja3}

```go
randomJA3(b bool) MitmConfigOpt
```

是一个选项函数，用于指定中间人代理服务器是否开启随机 JA3 指纹模式，默认为 false

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| b | `bool` | 是否开启随机 JA3 指纹 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `MitmConfigOpt` | 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge |

**示例**

``````````````yak
mitm.Start(8080, mitm.randomJA3(true))
``````````````

---

### rootCA {#rootca}

```go
rootCA(cert []byte, key []byte) MitmConfigOpt
```

是一个选项函数，用于指定中间人代理服务器的根证书和私钥

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| cert | `[]byte` | PEM 格式的根证书 |
| key | `[]byte` | PEM 格式的私钥 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `MitmConfigOpt` | 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge |

**示例**

``````````````yak
mitm.Start(8080, mitm.rootCA(cert, key))
``````````````

---

### sni {#sni}

```go
sni(sni string, overwrite bool) MitmConfigOpt
```

是一个选项函数，用于控制 MITM 代理连接目标服务器时的 SNI (Server Name Indication)

这在测试 CDN、WAF 或进行域前置 (Domain Fronting) 测试时非常有用

支持三种模式：

1. 自动模式（默认）：不调用此函数，根据请求的 Host 自动推断 SNI

2. 强制模式：mitm.sni(&#34;custom.domain.com&#34;, true)，总是使用指定的 SNI

3. 清空模式：mitm.sni(&#34;&#34;, true)，不发送 SNI

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| sni | `string` | 要使用的 SNI 域名 |
| overwrite | `bool` | 是否强制覆盖（true 时总是使用指定 SNI，false 时为自动模式） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `MitmConfigOpt` | 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge |

**示例**

``````````````yak
// 强制模式：总是使用指定的 SNI
mitm.Start(8080, mitm.sni("admin.example.com", true))

// 清空模式：不发送 SNI
mitm.Start(8080, mitm.sni("", true))

// 自动模式：根据 Host 自动推断（默认行为）
mitm.Start(8080)  // 或 mitm.sni("", false)
``````````````

---

### useDefaultCA {#usedefaultca}

```go
useDefaultCA(t bool) MitmConfigOpt
```

是一个选项函数，用于指定中间人代理服务器是否使用内置的证书和私钥，默认为true

默认的证书与私钥路径：~/yakit-projects/yak-mitm-ca.crt 和 ~/yakit-projects/yak-mitm-ca.key

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| t | `bool` | 是否使用内置证书和私钥 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `MitmConfigOpt` | 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge |

**示例**

``````````````yak
mitm.Start(8080, mitm.useDefaultCA(true))
``````````````

---

### wscallback {#wscallback}

```go
wscallback(f func([]byte, bool) any) MitmConfigOpt
```

是一个选项函数，用于指定中间人代理服务器的 websocket 劫持函数，当接收到 websocket 请求或响应后，会调用该回调函数

该回调函数的第一个参数是请求或响应的内容

第二个参数是一个布尔值，用于指示该内容是请求还是响应，true 表示请求，false 表示响应

通过该回调函数的返回值，可以修改请求或响应的内容

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| f | `func([]byte, bool) any` | websocket 劫持回调，第一个参数为数据内容，第二个参数为是否为请求，返回修改后的内容 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `MitmConfigOpt` | 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge |

**示例**

``````````````yak
mitm.Start(8080, mitm.wscallback(func(data, isRequest) { println(data); return data }))
``````````````

---

### wsforcetext {#wsforcetext}

```go
wsforcetext(b bool) MitmConfigOpt
```

是一个选项函数，用于强制将 websocket 劫持的数据帧转换为文本帧，默认为 false

! 已弃用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| b | `bool` | 是否强制转换为文本帧 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `MitmConfigOpt` | 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge |

**示例**

``````````````yak
mitm.Start(8080, mitm.wsforcetext(true))
``````````````

---

## 可变参数函数详情

### Bridge {#bridge}

```go
Bridge(port any, downstreamProxy string, opts ...MitmConfigOpt) error
```

启动一个 MITM (中间人)代理服务器，与 Start 类似但可指定下游代理服务器地址，并默认在收到请求和响应时打印到标准输出

如果没有指定 CA 证书和私钥，那么将使用内置的证书和私钥

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| port | `any` | 代理服务器监听端口 |
| downstreamProxy | `string` | 下游代理服务器地址，多个用逗号分隔，可为空字符串 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...MitmConfigOpt` | 可选配置，例如 mitm.host、mitm.callback |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息，启动失败或服务异常退出时返回非空 |

**示例**

``````````````yak
mitm.Bridge(8080, "", mitm.host("127.0.0.1"), mitm.callback(func(isHttps, urlStr, req, rsp) { http.dump(req); http.dump(rsp)  })) // 启动一个中间人代理服务器，并将请求和响应打印到标准输出
``````````````

---

### Start {#start}

```go
Start(port int, opts ...MitmConfigOpt) error
```

启动一个 MITM (中间人)代理服务器，可接收零个到多个选项函数影响其行为

如果没有指定 CA 证书和私钥，那么将使用内置的证书和私钥

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| port | `int` | 代理服务器监听端口 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...MitmConfigOpt` | 可选配置，例如 mitm.host、mitm.callback、mitm.hijackHTTPRequest |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息，启动失败或服务异常退出时返回非空 |

**示例**

``````````````yak
mitm.Start(8080, mitm.host("127.0.0.1"), mitm.callback(func(isHttps, urlStr, req, rsp) { http.dump(req); http.dump(rsp)  })) // 启动一个中间人代理服务器，并将请求和响应打印到标准输出
``````````````

---

### extraIncomingConnChanWithStrongLocalHost {#extraincomingconnchanwithstronglocalhost}

```go
extraIncomingConnChanWithStrongLocalHost(localAddr any, ch any, kv ...any) MitmConfigOpt
```

是一个选项函数，用于指定中间人代理服务器接受外部传入的连接通道

强制要求设置强主机模式的本地地址，用于透明劫持 TUN 生成的流量

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| localAddr | `any` | 强主机模式的本地地址 |
| ch | `any` | 连接通道（chan net.Conn、chan interface{} 或 chan *WrapperedConn） |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| kv | `...any` | 可选的元数据键值对 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `MitmConfigOpt` | 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge |

**示例**

``````````````yak
connChan = make(chan any) // 元素为 net.Conn
mitm.Start(8080, mitm.extraIncomingConnChanWithStrongLocalHost("192.168.1.100", connChan))  // 设置强主机模式本地地址
mitm.Start(8080, mitm.extraIncomingConnChanWithStrongLocalHost("192.168.1.100", connChan, {"key": "value"}))  // 设置强主机模式本地地址并设置元数据
``````````````

---

