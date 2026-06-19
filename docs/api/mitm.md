# mitm

|实例名|实例描述|
|:------|:--------|
grpcMitmKey|(string) &#34;grpc_mitm_extra_conn_key&#34;|

|函数名|函数描述/介绍|
|:------|:--------|
| [mitm.AddMITMRootCertIntoSystem](#addmitmrootcertintosystem) |AddMITMRootCertIntoSystem 将 MITM 根证书添加到系统信任库并设置为信任（需要管理员权限） 返回值: - 错误信息，导入或信任设置失败时返回非空|
| [mitm.Bridge](#bridge) |Bridge 启动一个 MITM (中间人)代理服务器，与 Start 类似但可指定下游代理服务器地址，并默认在收到请求和响应时打印到标准输出 如果没有指定 CA 证书和私钥，那么将使用内置的证书和私钥 参数: - port: 代理服务器监听端口 - downstreamProxy: 下游代理服务器...|
| [mitm.GetDefaultExtraConnManager](#getdefaultextraconnmanager) |GetDefaultExtraConnManager 获取默认的 MITM 额外连接管理器，用于向运行中的 MITM 服务注入外部连接 返回值: - 默认的额外连接管理器实例|
| [mitm.QuickVerifyMITMRootCert](#quickverifymitmrootcert) |QuickVerifyMITMRootCert 快速验证 MITM 根证书状态（不启动服务器，只检查系统证书池） 返回值: - 证书是否被系统信任 - 错误信息，获取或解析证书失败时返回非空|
| [mitm.Start](#start) |Start 启动一个 MITM (中间人)代理服务器，可接收零个到多个选项函数影响其行为 如果没有指定 CA 证书和私钥，那么将使用内置的证书和私钥 参数: - port: 代理服务器监听端口 - opts: 可选配置，例如 mitm.host、mitm.callback、mitm.hijackHT...|
| [mitm.TestCertificateOperations](#testcertificateoperations) |TestCertificateOperations 完整测试 MITM 根证书的安装、验证和撤销操作流程（需要管理员权限） 返回值: - 错误信息，测试流程中任一步骤失败时返回非空|
| [mitm.VerifyMITMRootCertInstalled](#verifymitmrootcertinstalled) |VerifyMITMRootCertInstalled 验证 MITM 根证书是否已正确安装到系统信任库 返回值: - 错误信息，证书未安装或验证失败时返回非空，安装正确时返回 nil|
| [mitm.VerifyMITMRootCertNotInstalled](#verifymitmrootcertnotinstalled) |VerifyMITMRootCertNotInstalled 验证 MITM 根证书是否已从系统信任库中移除 返回值: - 错误信息，证书仍被信任或验证异常时返回非空，已移除时返回 nil|
| [mitm.WithdrawMITMRootCertFromSystem](#withdrawmitmrootcertfromsystem) |WithdrawMITMRootCertFromSystem 从系统信任库中移除 MITM 根证书（需要管理员权限） 返回值: - 错误信息，移除失败时返回非空|
| [mitm.callback](#callback) |callback 是一个选项函数，用于指定中间人代理服务器的回调函数，当接收到请求和响应后会调用该回调函数 参数: - f: 回调函数，参数依次为是否 HTTPS、URL、请求对象、响应对象 返回值: - 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge|
| [mitm.context](#context) |context 是一个选项函数，用于指定中间人代理服务器的上下文，可通过取消上下文来停止服务 参数: - ctx: 上下文对象 返回值: - 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge|
| [mitm.extraIncomingConn](#extraincomingconn) |extraIncomingConn 是一个选项函数，用于指定中间人代理服务器接受外部传入的连接通道 通过该选项，可以将外部的 net.Conn 连接注入到 MITM 服务器中进行劫持处理 参数: - ch: 连接通道（chan net.Conn 或 chan interface{}） 返回值: - ...|
| [mitm.extraIncomingConnChanWithStrongLocalHost](#extraincomingconnchanwithstronglocalhost) |extraIncomingConnChanWithStrongLocalHost 是一个选项函数，用于指定中间人代理服务器接受外部传入的连接通道 强制要求设置强主机模式的本地地址，用于透明劫持 TUN 生成的流量 参数: - localAddr: 强主机模式的本地地址 - ch: 连接通道（chan...|
| [mitm.gmRootCA](#gmrootca) |gmRootCA 是一个选项函数，用于指定中间人代理服务器的国密根证书和私钥 参数: - cert: PEM 格式的国密根证书 - key: PEM 格式的国密私钥 返回值: - 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge|
| [mitm.gmtls](#gmtls) |gmtls 是一个选项参数，用于指定中间人代理服务器是否开启 GMTLS 劫持模式，默认为false 在开启 GMTLS 劫持模式下，中间人代理服务器会劫持所有的 GMTLS 流量 参数: - b: 是否开启 GMTLS 劫持模式 返回值: - 一个 MITM 配置选项，作为可变参数传入 mitm....|
| [mitm.gmtlsOnly](#gmtlsonly) |gmtlsOnly 是一个选项参数，用于指定中间人代理服务器是否只使用 GMTLS 劫持模式，默认为false 在开启 GMTLS 劫持模式下，中间人代理服务器只会使用 GMTLS 劫持模式 参数: - b: 是否只使用 GMTLS 劫持模式 返回值: - 一个 MITM 配置选项，作为可变参数传入...|
| [mitm.gmtlsPrefer](#gmtlsprefer) |gmtlsPrefer 是一个选项参数，用于指定中间人代理服务器是否优先使用 GMTLS 劫持模式，默认为false 在开启 GMTLS 劫持模式下，中间人代理服务器会优先使用 GMTLS 劫持模式 参数: - b: 是否优先使用 GMTLS 劫持模式 返回值: - 一个 MITM 配置选项，作为可...|
| [mitm.hijackHTTPRequest](#hijackhttprequest) |hijackHTTPRequest 是一个选项函数，用于指定中间人代理服务器的请求劫持函数，当接收到请求后，会调用该回调函数 通过调用该回调函数的第四个参数，可以修改请求内容，通过调用该回调函数的第五个参数，可以丢弃请求 参数: - h: 请求劫持回调，参数依次为是否 HTTPS、URL、请求报文、...|
| [mitm.hijackHTTPResponse](#hijackhttpresponse) |hijackHTTPResponse 是一个选项函数，用于指定中间人代理服务器的响应劫持函数，当接收到响应后，会调用该回调函数 通过调用该回调函数的第四个参数，可以修改响应内容，通过调用该回调函数的第五个参数，可以丢弃响应 参数: - h: 响应劫持回调，参数依次为是否 HTTPS、URL、响应报文...|
| [mitm.hijackHTTPResponseEx](#hijackhttpresponseex) |hijackHTTPResponseEx 是一个选项函数，用于指定中间人代理服务器的响应劫持函数，当接收到响应后，会调用该回调函数 通过调用该回调函数的第五个参数，可以修改响应内容，通过调用该回调函数的第六个参数，可以丢弃响应 它与 hijackHTTPResponse 的区别在于，它可以获取到原始...|
| [mitm.host](#host) |host 是一个选项函数，用于指定中间人代理服务器的监听地址，默认为空，即监听所有网卡 参数: - host: 监听地址 返回值: - 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge|
| [mitm.isTransparent](#istransparent) |isTransparent 是一个选项函数，用于指定中间人代理服务器是否开启透明劫持模式，默认为false 在开启透明模式下，所有流量都会被默认转发，所有的回调函数都会被忽略 参数: - b: 是否开启透明劫持 返回值: - 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mi...|
| [mitm.maxContentLength](#maxcontentlength) |maxContentLength 是一个选项函数，用于指定中间人代理服务器的最大请求和响应内容长度，默认为 10MB 参数: - i: 最大内容长度，单位为字节 返回值: - 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge|
| [mitm.mockHTTPRequest](#mockhttprequest) |mockHTTPRequest 是一个选项函数，用于指定中间人代理服务器的请求 mock 函数 当接收到请求后，会调用该回调函数，通过调用 mockResponse 函数可以直接返回自定义响应，跳过真实的网络请求 mockResponse 接受一个响应（字符串或字节数组），会自动修复响应格式，如果修...|
| [mitm.randomJA3](#randomja3) |randomJA3 是一个选项函数，用于指定中间人代理服务器是否开启随机 JA3 指纹模式，默认为 false 参数: - b: 是否开启随机 JA3 指纹 返回值: - 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge|
| [mitm.rootCA](#rootca) |rootCA 是一个选项函数，用于指定中间人代理服务器的根证书和私钥 参数: - cert: PEM 格式的根证书 - key: PEM 格式的私钥 返回值: - 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge|
| [mitm.sni](#sni) |sni 是一个选项函数，用于控制 MITM 代理连接目标服务器时的 SNI (Server Name Indication) 这在测试 CDN、WAF 或进行域前置 (Domain Fronting) 测试时非常有用 支持三种模式： 1. 自动模式（默认）：不调用此函数，根据请求的 Host 自动推...|
| [mitm.useDefaultCA](#usedefaultca) |useDefaultCA 是一个选项函数，用于指定中间人代理服务器是否使用内置的证书和私钥，默认为true 默认的证书与私钥路径：~/yakit-projects/yak-mitm-ca.crt 和 ~/yakit-projects/yak-mitm-ca.key 参数: - t: 是否使用内置证书...|
| [mitm.wscallback](#wscallback) |wscallback 是一个选项函数，用于指定中间人代理服务器的 websocket 劫持函数，当接收到 websocket 请求或响应后，会调用该回调函数 该回调函数的第一个参数是请求或响应的内容 第二个参数是一个布尔值，用于指示该内容是请求还是响应，true 表示请求，false 表示响应 通过...|
| [mitm.wsforcetext](#wsforcetext) |wsforcetext 是一个选项函数，用于强制将 websocket 劫持的数据帧转换为文本帧，默认为 false ! 已弃用 参数: - b: 是否强制转换为文本帧 返回值: - 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge|


## 函数定义
### AddMITMRootCertIntoSystem

#### 详细描述
AddMITMRootCertIntoSystem 将 MITM 根证书添加到系统信任库并设置为信任（需要管理员权限）

返回值:

  - 错误信息，导入或信任设置失败时返回非空




Example:

``````````````yak
// 将 MITM 根证书安装到系统，需要权限，此处仅作示意
mitm.AddMITMRootCertIntoSystem()~
``````````````


#### 定义

`AddMITMRootCertIntoSystem() error`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息，导入或信任设置失败时返回非空 |


### Bridge

#### 详细描述
Bridge 启动一个 MITM (中间人)代理服务器，与 Start 类似但可指定下游代理服务器地址，并默认在收到请求和响应时打印到标准输出

如果没有指定 CA 证书和私钥，那么将使用内置的证书和私钥

参数:

  - port: 代理服务器监听端口

  - downstreamProxy: 下游代理服务器地址，多个用逗号分隔，可为空字符串

  - opts: 可选配置，例如 mitm.host、mitm.callback



返回值:

  - 错误信息，启动失败或服务异常退出时返回非空




Example:

``````````````yak
mitm.Bridge(8080, "", mitm.host("127.0.0.1"), mitm.callback(func(isHttps, urlStr, req, rsp) { http.dump(req); http.dump(rsp)  })) // 启动一个中间人代理服务器，并将请求和响应打印到标准输出
``````````````


#### 定义

`Bridge(port any, downstreamProxy string, opts ...MitmConfigOpt) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| port | `any` | 代理服务器监听端口 |
| downstreamProxy | `string` | 下游代理服务器地址，多个用逗号分隔，可为空字符串 |
| opts | `...MitmConfigOpt` | 可选配置，例如 mitm.host、mitm.callback |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息，启动失败或服务异常退出时返回非空 |


### GetDefaultExtraConnManager

#### 详细描述
GetDefaultExtraConnManager 获取默认的 MITM 额外连接管理器，用于向运行中的 MITM 服务注入外部连接

返回值:

  - 默认的额外连接管理器实例




Example:

``````````````yak
// 获取默认额外连接管理器，此处仅作示意
manager = mitm.GetDefaultExtraConnManager()
println(manager)
``````````````


#### 定义

`GetDefaultExtraConnManager() *MitmExtraConnManager`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*MitmExtraConnManager` | 默认的额外连接管理器实例 |


### QuickVerifyMITMRootCert

#### 详细描述
QuickVerifyMITMRootCert 快速验证 MITM 根证书状态（不启动服务器，只检查系统证书池）

返回值:

  - 证书是否被系统信任

  - 错误信息，获取或解析证书失败时返回非空




Example:

``````````````yak
// 快速检查 MITM 根证书是否被信任，此处仅作示意
trusted, err = mitm.QuickVerifyMITMRootCert()
println(trusted)
``````````````


#### 定义

`QuickVerifyMITMRootCert() (bool, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 证书是否被系统信任 |
| r2 | `error` | 错误信息，获取或解析证书失败时返回非空 |


### Start

#### 详细描述
Start 启动一个 MITM (中间人)代理服务器，可接收零个到多个选项函数影响其行为

如果没有指定 CA 证书和私钥，那么将使用内置的证书和私钥

参数:

  - port: 代理服务器监听端口

  - opts: 可选配置，例如 mitm.host、mitm.callback、mitm.hijackHTTPRequest



返回值:

  - 错误信息，启动失败或服务异常退出时返回非空




Example:

``````````````yak
mitm.Start(8080, mitm.host("127.0.0.1"), mitm.callback(func(isHttps, urlStr, req, rsp) { http.dump(req); http.dump(rsp)  })) // 启动一个中间人代理服务器，并将请求和响应打印到标准输出
``````````````


#### 定义

`Start(port int, opts ...MitmConfigOpt) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| port | `int` | 代理服务器监听端口 |
| opts | `...MitmConfigOpt` | 可选配置，例如 mitm.host、mitm.callback、mitm.hijackHTTPRequest |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息，启动失败或服务异常退出时返回非空 |


### TestCertificateOperations

#### 详细描述
TestCertificateOperations 完整测试 MITM 根证书的安装、验证和撤销操作流程（需要管理员权限）

返回值:

  - 错误信息，测试流程中任一步骤失败时返回非空




Example:

``````````````yak
// 测试证书安装/验证/撤销全流程，需要权限，此处仅作示意
mitm.TestCertificateOperations()~
``````````````


#### 定义

`TestCertificateOperations() error`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息，测试流程中任一步骤失败时返回非空 |


### VerifyMITMRootCertInstalled

#### 详细描述
VerifyMITMRootCertInstalled 验证 MITM 根证书是否已正确安装到系统信任库

返回值:

  - 错误信息，证书未安装或验证失败时返回非空，安装正确时返回 nil




Example:

``````````````yak
// 验证 MITM 根证书是否已安装，此处仅作示意
mitm.VerifyMITMRootCertInstalled()~
``````````````


#### 定义

`VerifyMITMRootCertInstalled() error`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息，证书未安装或验证失败时返回非空，安装正确时返回 nil |


### VerifyMITMRootCertNotInstalled

#### 详细描述
VerifyMITMRootCertNotInstalled 验证 MITM 根证书是否已从系统信任库中移除

返回值:

  - 错误信息，证书仍被信任或验证异常时返回非空，已移除时返回 nil




Example:

``````````````yak
// 验证 MITM 根证书是否已移除，此处仅作示意
mitm.VerifyMITMRootCertNotInstalled()~
``````````````


#### 定义

`VerifyMITMRootCertNotInstalled() error`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息，证书仍被信任或验证异常时返回非空，已移除时返回 nil |


### WithdrawMITMRootCertFromSystem

#### 详细描述
WithdrawMITMRootCertFromSystem 从系统信任库中移除 MITM 根证书（需要管理员权限）

返回值:

  - 错误信息，移除失败时返回非空




Example:

``````````````yak
// 从系统移除 MITM 根证书，需要权限，此处仅作示意
mitm.WithdrawMITMRootCertFromSystem()~
``````````````


#### 定义

`WithdrawMITMRootCertFromSystem() error`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息，移除失败时返回非空 |


### callback

#### 详细描述
callback 是一个选项函数，用于指定中间人代理服务器的回调函数，当接收到请求和响应后会调用该回调函数

参数:

  - f: 回调函数，参数依次为是否 HTTPS、URL、请求对象、响应对象



返回值:

  - 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge




Example:

``````````````yak
mitm.Start(8080, mitm.callback(func(isHttps, urlStr, req, rsp) { http.dump(req); http.dump(rsp)  }))
``````````````


#### 定义

`callback(f func(bool, string, *http.Request, *http.Response)) MitmConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `func(bool, string, *http.Request, *http.Response)` | 回调函数，参数依次为是否 HTTPS、URL、请求对象、响应对象 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `MitmConfigOpt` | 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge |


### context

#### 详细描述
context 是一个选项函数，用于指定中间人代理服务器的上下文，可通过取消上下文来停止服务

参数:

  - ctx: 上下文对象



返回值:

  - 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge




Example:

``````````````yak
mitm.Start(8080, mitm.context(context.Background()))
``````````````


#### 定义

`context(ctx context.Context) MitmConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` | 上下文对象 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `MitmConfigOpt` | 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge |


### extraIncomingConn

#### 详细描述
extraIncomingConn 是一个选项函数，用于指定中间人代理服务器接受外部传入的连接通道

通过该选项，可以将外部的 net.Conn 连接注入到 MITM 服务器中进行劫持处理

参数:

  - ch: 连接通道（chan net.Conn 或 chan interface{}）



返回值:

  - 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge




Example:

``````````````yak
connChan = make(chan net.Conn)
mitm.Start(8080, mitm.extraIncomingConn(connChan))
``````````````


#### 定义

`extraIncomingConn(ch any) MitmConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ch | `any` | 连接通道（chan net.Conn 或 chan interface{}） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `MitmConfigOpt` | 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge |


### extraIncomingConnChanWithStrongLocalHost

#### 详细描述
extraIncomingConnChanWithStrongLocalHost 是一个选项函数，用于指定中间人代理服务器接受外部传入的连接通道

强制要求设置强主机模式的本地地址，用于透明劫持 TUN 生成的流量

参数:

  - localAddr: 强主机模式的本地地址

  - ch: 连接通道（chan net.Conn、chan interface{} 或 chan *WrapperedConn）

  - kv: 可选的元数据键值对



返回值:

  - 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge




Example:

``````````````yak
connChan = make(chan net.Conn)
mitm.Start(8080, mitm.extraIncomingConnChanWithStrongLocalHost("192.168.1.100", connChan))  // 设置强主机模式本地地址
mitm.Start(8080, mitm.extraIncomingConnChanWithStrongLocalHost("192.168.1.100", connChan, {"key": "value"}))  // 设置强主机模式本地地址并设置元数据
``````````````


#### 定义

`extraIncomingConnChanWithStrongLocalHost(localAddr any, ch any, kv ...any) MitmConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| localAddr | `any` | 强主机模式的本地地址 |
| ch | `any` | 连接通道（chan net.Conn、chan interface{} 或 chan *WrapperedConn） |
| kv | `...any` | 可选的元数据键值对 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `MitmConfigOpt` | 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge |


### gmRootCA

#### 详细描述
gmRootCA 是一个选项函数，用于指定中间人代理服务器的国密根证书和私钥

参数:

  - cert: PEM 格式的国密根证书

  - key: PEM 格式的国密私钥



返回值:

  - 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge




Example:

``````````````yak
mitm.Start(8080, mitm.gmRootCA(cert, key))
``````````````


#### 定义

`gmRootCA(cert []byte, key []byte) MitmConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cert | `[]byte` | PEM 格式的国密根证书 |
| key | `[]byte` | PEM 格式的国密私钥 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `MitmConfigOpt` | 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge |


### gmtls

#### 详细描述
gmtls 是一个选项参数，用于指定中间人代理服务器是否开启 GMTLS 劫持模式，默认为false

在开启 GMTLS 劫持模式下，中间人代理服务器会劫持所有的 GMTLS 流量

参数:

  - b: 是否开启 GMTLS 劫持模式



返回值:

  - 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge




Example:

``````````````yak
mitm.Start(8080, mitm.gmtls(true))
``````````````


#### 定义

`gmtls(b bool) MitmConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` | 是否开启 GMTLS 劫持模式 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `MitmConfigOpt` | 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge |


### gmtlsOnly

#### 详细描述
gmtlsOnly 是一个选项参数，用于指定中间人代理服务器是否只使用 GMTLS 劫持模式，默认为false

在开启 GMTLS 劫持模式下，中间人代理服务器只会使用 GMTLS 劫持模式

参数:

  - b: 是否只使用 GMTLS 劫持模式



返回值:

  - 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge




Example:

``````````````yak
mitm.Start(8080, mitm.gmtlsOnly(true))
``````````````


#### 定义

`gmtlsOnly(b bool) MitmConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` | 是否只使用 GMTLS 劫持模式 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `MitmConfigOpt` | 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge |


### gmtlsPrefer

#### 详细描述
gmtlsPrefer 是一个选项参数，用于指定中间人代理服务器是否优先使用 GMTLS 劫持模式，默认为false

在开启 GMTLS 劫持模式下，中间人代理服务器会优先使用 GMTLS 劫持模式

参数:

  - b: 是否优先使用 GMTLS 劫持模式



返回值:

  - 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge




Example:

``````````````yak
mitm.Start(8080, mitm.gmtlsPrefer(true))
``````````````


#### 定义

`gmtlsPrefer(b bool) MitmConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` | 是否优先使用 GMTLS 劫持模式 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `MitmConfigOpt` | 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge |


### hijackHTTPRequest

#### 详细描述
hijackHTTPRequest 是一个选项函数，用于指定中间人代理服务器的请求劫持函数，当接收到请求后，会调用该回调函数

通过调用该回调函数的第四个参数，可以修改请求内容，通过调用该回调函数的第五个参数，可以丢弃请求

参数:

  - h: 请求劫持回调，参数依次为是否 HTTPS、URL、请求报文、修改函数、丢弃函数



返回值:

  - 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge




Example:

``````````````yak
mitm.Start(8080, mitm.hijackHTTPRequest(func(isHttps, urlStr, req, modified, dropped) {
// 添加一个额外的请求头
req = poc.ReplaceHTTPPacketHeader(req, "AAA", "BBB")
modified(req)
}
))
``````````````


#### 定义

`hijackHTTPRequest(h func(isHttps bool, u string, req []byte, modified func([]byte), dropped func())) MitmConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `func(isHttps bool, u string, req []byte, modified func([]byte), dropped func())` | 请求劫持回调，参数依次为是否 HTTPS、URL、请求报文、修改函数、丢弃函数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `MitmConfigOpt` | 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge |


### hijackHTTPResponse

#### 详细描述
hijackHTTPResponse 是一个选项函数，用于指定中间人代理服务器的响应劫持函数，当接收到响应后，会调用该回调函数

通过调用该回调函数的第四个参数，可以修改响应内容，通过调用该回调函数的第五个参数，可以丢弃响应

参数:

  - h: 响应劫持回调，参数依次为是否 HTTPS、URL、响应报文、修改函数、丢弃函数



返回值:

  - 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge




Example:

``````````````yak
mitm.Start(8080, mitm.hijackHTTPResponse(func(isHttps, urlStr, rsp, modified, dropped) {
// 修改响应体为hijacked
rsp = poc.ReplaceBody(rsp, b"hijacked", false)
modified(rsp)
}
))
``````````````


#### 定义

`hijackHTTPResponse(h func(isHttps bool, u string, rsp []byte, modified func([]byte), dropped func())) MitmConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `func(isHttps bool, u string, rsp []byte, modified func([]byte), dropped func())` | 响应劫持回调，参数依次为是否 HTTPS、URL、响应报文、修改函数、丢弃函数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `MitmConfigOpt` | 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge |


### hijackHTTPResponseEx

#### 详细描述
hijackHTTPResponseEx 是一个选项函数，用于指定中间人代理服务器的响应劫持函数，当接收到响应后，会调用该回调函数

通过调用该回调函数的第五个参数，可以修改响应内容，通过调用该回调函数的第六个参数，可以丢弃响应

它与 hijackHTTPResponse 的区别在于，它可以获取到原始请求报文

参数:

  - h: 响应劫持回调，参数依次为是否 HTTPS、URL、请求报文、响应报文、修改函数、丢弃函数



返回值:

  - 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge




Example:

``````````````yak
mitm.Start(8080, mitm.hijackHTTPResponseEx(func(isHttps, urlStr, req, rsp, modified, dropped) {
// 修改响应体为hijacked
rsp = poc.ReplaceBody(rsp, b"hijacked", false)
modified(rsp)
}
))
``````````````


#### 定义

`hijackHTTPResponseEx(h func(bool, string, []byte, []byte, func([]byte), func())) MitmConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `func(bool, string, []byte, []byte, func([]byte), func())` | 响应劫持回调，参数依次为是否 HTTPS、URL、请求报文、响应报文、修改函数、丢弃函数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `MitmConfigOpt` | 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge |


### host

#### 详细描述
host 是一个选项函数，用于指定中间人代理服务器的监听地址，默认为空，即监听所有网卡

参数:

  - host: 监听地址



返回值:

  - 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge




Example:

``````````````yak
mitm.Start(8080, mitm.host("127.0.0.1"))
``````````````


#### 定义

`host(host string) MitmConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| host | `string` | 监听地址 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `MitmConfigOpt` | 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge |


### isTransparent

#### 详细描述
isTransparent 是一个选项函数，用于指定中间人代理服务器是否开启透明劫持模式，默认为false

在开启透明模式下，所有流量都会被默认转发，所有的回调函数都会被忽略

参数:

  - b: 是否开启透明劫持



返回值:

  - 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge




Example:

``````````````yak
mitm.Start(8080, mitm.isTransparent(true))
``````````````


#### 定义

`isTransparent(b bool) MitmConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` | 是否开启透明劫持 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `MitmConfigOpt` | 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge |


### maxContentLength

#### 详细描述
maxContentLength 是一个选项函数，用于指定中间人代理服务器的最大请求和响应内容长度，默认为 10MB

参数:

  - i: 最大内容长度，单位为字节



返回值:

  - 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge




Example:

``````````````yak
mitm.Start(8080, mitm.maxContentLength(100 * 1000 * 1000))
``````````````


#### 定义

`maxContentLength(i int) MitmConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `int` | 最大内容长度，单位为字节 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `MitmConfigOpt` | 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge |


### mockHTTPRequest

#### 详细描述
mockHTTPRequest 是一个选项函数，用于指定中间人代理服务器的请求 mock 函数

当接收到请求后，会调用该回调函数，通过调用 mockResponse 函数可以直接返回自定义响应，跳过真实的网络请求

mockResponse 接受一个响应（字符串或字节数组），会自动修复响应格式，如果修复失败则返回 502 Bad Gateway

参数:

  - h: 请求 mock 回调，参数依次为是否 HTTPS、URL、请求报文、mockResponse 函数



返回值:

  - 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge




Example:

``````````````yak
mitm.Start(8080, mitm.mockHTTPRequest(func(isHttps, urlStr, req, mockResponse) {

	if str.Contains(urlStr, "test") {
	    mockResponse("HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n\r\nMocked Response")
	}

}))
``````````````


#### 定义

`mockHTTPRequest(h func(isHttps bool, urlStr string, req []byte, mockResponse func(rsp any))) MitmConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `func(isHttps bool, urlStr string, req []byte, mockResponse func(rsp any))` | 请求 mock 回调，参数依次为是否 HTTPS、URL、请求报文、mockResponse 函数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `MitmConfigOpt` | 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge |


### randomJA3

#### 详细描述
randomJA3 是一个选项函数，用于指定中间人代理服务器是否开启随机 JA3 指纹模式，默认为 false

参数:

  - b: 是否开启随机 JA3 指纹



返回值:

  - 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge




Example:

``````````````yak
mitm.Start(8080, mitm.randomJA3(true))
``````````````


#### 定义

`randomJA3(b bool) MitmConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` | 是否开启随机 JA3 指纹 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `MitmConfigOpt` | 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge |


### rootCA

#### 详细描述
rootCA 是一个选项函数，用于指定中间人代理服务器的根证书和私钥

参数:

  - cert: PEM 格式的根证书

  - key: PEM 格式的私钥



返回值:

  - 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge




Example:

``````````````yak
mitm.Start(8080, mitm.rootCA(cert, key))
``````````````


#### 定义

`rootCA(cert []byte, key []byte) MitmConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cert | `[]byte` | PEM 格式的根证书 |
| key | `[]byte` | PEM 格式的私钥 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `MitmConfigOpt` | 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge |


### sni

#### 详细描述
sni 是一个选项函数，用于控制 MITM 代理连接目标服务器时的 SNI (Server Name Indication)

这在测试 CDN、WAF 或进行域前置 (Domain Fronting) 测试时非常有用



支持三种模式：

1. 自动模式（默认）：不调用此函数，根据请求的 Host 自动推断 SNI

2. 强制模式：mitm.sni(&#34;custom.domain.com&#34;, true)，总是使用指定的 SNI

3. 清空模式：mitm.sni(&#34;&#34;, true)，不发送 SNI



参数:

  - sni: 要使用的 SNI 域名

  - overwrite: 是否强制覆盖（true 时总是使用指定 SNI，false 时为自动模式）



返回值:

  - 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge




Example:

``````````````yak
// 强制模式：总是使用指定的 SNI
mitm.Start(8080, mitm.sni("admin.example.com", true))

// 清空模式：不发送 SNI
mitm.Start(8080, mitm.sni("", true))

// 自动模式：根据 Host 自动推断（默认行为）
mitm.Start(8080)  // 或 mitm.sni("", false)
``````````````


#### 定义

`sni(sni string, overwrite bool) MitmConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| sni | `string` | 要使用的 SNI 域名 |
| overwrite | `bool` | 是否强制覆盖（true 时总是使用指定 SNI，false 时为自动模式） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `MitmConfigOpt` | 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge |


### useDefaultCA

#### 详细描述
useDefaultCA 是一个选项函数，用于指定中间人代理服务器是否使用内置的证书和私钥，默认为true

默认的证书与私钥路径：~/yakit-projects/yak-mitm-ca.crt 和 ~/yakit-projects/yak-mitm-ca.key

参数:

  - t: 是否使用内置证书和私钥



返回值:

  - 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge




Example:

``````````````yak
mitm.Start(8080, mitm.useDefaultCA(true))
``````````````


#### 定义

`useDefaultCA(t bool) MitmConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| t | `bool` | 是否使用内置证书和私钥 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `MitmConfigOpt` | 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge |


### wscallback

#### 详细描述
wscallback 是一个选项函数，用于指定中间人代理服务器的 websocket 劫持函数，当接收到 websocket 请求或响应后，会调用该回调函数

该回调函数的第一个参数是请求或响应的内容

第二个参数是一个布尔值，用于指示该内容是请求还是响应，true 表示请求，false 表示响应

通过该回调函数的返回值，可以修改请求或响应的内容

参数:

  - f: websocket 劫持回调，第一个参数为数据内容，第二个参数为是否为请求，返回修改后的内容



返回值:

  - 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge




Example:

``````````````yak
mitm.Start(8080, mitm.wscallback(func(data, isRequest) { println(data); return data }))
``````````````


#### 定义

`wscallback(f func([]byte, bool) any) MitmConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `func([]byte, bool) any` | websocket 劫持回调，第一个参数为数据内容，第二个参数为是否为请求，返回修改后的内容 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `MitmConfigOpt` | 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge |


### wsforcetext

#### 详细描述
wsforcetext 是一个选项函数，用于强制将 websocket 劫持的数据帧转换为文本帧，默认为 false

! 已弃用

参数:

  - b: 是否强制转换为文本帧



返回值:

  - 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge




Example:

``````````````yak
mitm.Start(8080, mitm.wsforcetext(true))
``````````````


#### 定义

`wsforcetext(b bool) MitmConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` | 是否强制转换为文本帧 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `MitmConfigOpt` | 一个 MITM 配置选项，作为可变参数传入 mitm.Start / mitm.Bridge |


