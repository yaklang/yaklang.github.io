# traceroute

|函数名|函数描述/介绍|
|:------|:--------|
| [traceroute.Diagnostic](#diagnostic) |Diagnostic 对目标主机执行路由跟踪(traceroute)，以 channel 形式逐跳返回探测结果 在 yak 中通过 traceroute.Diagnostic 调用，依赖网络环境，通常需要相应权限 参数: - host: 目标主机(IP 或域名) - opts: 可选配置项，如 tr...|
| [traceroute.ctx](#ctx) |ctx 设置路由跟踪使用的 context，用于取消或超时控制 在 yak 中通过 traceroute.ctx 调用 参数: - ctx: 上下文对象 返回值: - 一个 traceroute.Diagnostic 可接收的配置选项|
| [traceroute.firstTTL](#firstttl) |firstTTL 设置路由跟踪的起始 TTL 值 在 yak 中通过 traceroute.firstTTL 调用 参数: - ttl: 起始 TTL 返回值: - 一个 traceroute.Diagnostic 可接收的配置选项|
| [traceroute.hops](#hops) |hops 设置路由跟踪的最大跳数 在 yak 中通过 traceroute.hops 调用 参数: - hops: 最大跳数 返回值: - 一个 traceroute.Diagnostic 可接收的配置选项|
| [traceroute.localIp](#localip) |localIp 设置路由跟踪使用的本地源 IP 地址 在 yak 中通过 traceroute.localIp 调用 参数: - addr: 本地源 IP 地址 返回值: - 一个 traceroute.Diagnostic 可接收的配置选项|
| [traceroute.protocol](#protocol) |protocol 设置路由跟踪使用的探测协议(如 icmp、udp、tcp) 在 yak 中通过 traceroute.protocol 调用 参数: - protocol: 协议名称 返回值: - 一个 traceroute.Diagnostic 可接收的配置选项|
| [traceroute.retry](#retry) |retry 设置路由跟踪每跳的重试次数 在 yak 中通过 traceroute.retry 调用 参数: - times: 重试次数 返回值: - 一个 traceroute.Diagnostic 可接收的配置选项|
| [traceroute.timeout](#timeout) |timeout 设置路由跟踪每跳的读写超时时间(秒) 在 yak 中通过 traceroute.timeout 调用 参数: - timeout: 超时时间(秒) 返回值: - 一个 traceroute.Diagnostic 可接收的配置选项|
| [traceroute.udpPort](#udpport) |udpPort 设置 UDP 协议路由跟踪使用的目标端口 在 yak 中通过 traceroute.udpPort 调用 参数: - port: 目标 UDP 端口 返回值: - 一个 traceroute.Diagnostic 可接收的配置选项|


## 函数定义
### Diagnostic

#### 详细描述
Diagnostic 对目标主机执行路由跟踪(traceroute)，以 channel 形式逐跳返回探测结果

在 yak 中通过 traceroute.Diagnostic 调用，依赖网络环境，通常需要相应权限

参数:

  - host: 目标主机(IP 或域名)

  - opts: 可选配置项，如 traceroute.hops、traceroute.timeout、traceroute.protocol 等



返回值:

  - 一个只读 channel，逐跳产出 *pingutil.TracerouteResponse 探测结果

  - 错误信息，启动失败时非 nil




Example:

``````````````yak
// 该示例为示意性用法：跟踪到目标的网络路径
res = traceroute.Diagnostic("8.8.8.8", traceroute.hops(20), traceroute.timeout(3))~

	for hop = range res {
	    println(hop.Hop, hop.IP)
	}
``````````````


#### 定义

`Diagnostic(host string, opts ...pingutil.TracerouteConfigOption) (chan *pingutil.TracerouteResponse, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| host | `string` | 目标主机(IP 或域名) |
| opts | `...pingutil.TracerouteConfigOption` | 可选配置项，如 traceroute.hops、traceroute.timeout、traceroute.protocol 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *pingutil.TracerouteResponse` | 一个只读 channel，逐跳产出 *pingutil.TracerouteResponse 探测结果 |
| r2 | `error` | 错误信息，启动失败时非 nil |


### ctx

#### 详细描述
ctx 设置路由跟踪使用的 context，用于取消或超时控制

在 yak 中通过 traceroute.ctx 调用

参数:

  - ctx: 上下文对象



返回值:

  - 一个 traceroute.Diagnostic 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：使用自定义 context
res = traceroute.Diagnostic("8.8.8.8", traceroute.ctx(context.Background()))~
``````````````


#### 定义

`ctx(ctx context.Context) pingutil.TracerouteConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` | 上下文对象 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `pingutil.TracerouteConfigOption` | 一个 traceroute.Diagnostic 可接收的配置选项 |


### firstTTL

#### 详细描述
firstTTL 设置路由跟踪的起始 TTL 值

在 yak 中通过 traceroute.firstTTL 调用

参数:

  - ttl: 起始 TTL



返回值:

  - 一个 traceroute.Diagnostic 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：从 TTL=2 开始跟踪
res = traceroute.Diagnostic("8.8.8.8", traceroute.firstTTL(2))~
``````````````


#### 定义

`firstTTL(ttl int) pingutil.TracerouteConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ttl | `int` | 起始 TTL |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `pingutil.TracerouteConfigOption` | 一个 traceroute.Diagnostic 可接收的配置选项 |


### hops

#### 详细描述
hops 设置路由跟踪的最大跳数

在 yak 中通过 traceroute.hops 调用

参数:

  - hops: 最大跳数



返回值:

  - 一个 traceroute.Diagnostic 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：最大 20 跳
res = traceroute.Diagnostic("8.8.8.8", traceroute.hops(20))~
``````````````


#### 定义

`hops(hops int) pingutil.TracerouteConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| hops | `int` | 最大跳数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `pingutil.TracerouteConfigOption` | 一个 traceroute.Diagnostic 可接收的配置选项 |


### localIp

#### 详细描述
localIp 设置路由跟踪使用的本地源 IP 地址

在 yak 中通过 traceroute.localIp 调用

参数:

  - addr: 本地源 IP 地址



返回值:

  - 一个 traceroute.Diagnostic 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：指定本地源 IP
res = traceroute.Diagnostic("8.8.8.8", traceroute.localIp("192.168.1.10"))~
``````````````


#### 定义

`localIp(addr string) pingutil.TracerouteConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| addr | `string` | 本地源 IP 地址 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `pingutil.TracerouteConfigOption` | 一个 traceroute.Diagnostic 可接收的配置选项 |


### protocol

#### 详细描述
protocol 设置路由跟踪使用的探测协议(如 icmp、udp、tcp)

在 yak 中通过 traceroute.protocol 调用

参数:

  - protocol: 协议名称



返回值:

  - 一个 traceroute.Diagnostic 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：使用 udp 协议跟踪
res = traceroute.Diagnostic("8.8.8.8", traceroute.protocol("udp"))~
``````````````


#### 定义

`protocol(protocol string) pingutil.TracerouteConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| protocol | `string` | 协议名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `pingutil.TracerouteConfigOption` | 一个 traceroute.Diagnostic 可接收的配置选项 |


### retry

#### 详细描述
retry 设置路由跟踪每跳的重试次数

在 yak 中通过 traceroute.retry 调用

参数:

  - times: 重试次数



返回值:

  - 一个 traceroute.Diagnostic 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：每跳重试 3 次
res = traceroute.Diagnostic("8.8.8.8", traceroute.retry(3))~
``````````````


#### 定义

`retry(times int) pingutil.TracerouteConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| times | `int` | 重试次数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `pingutil.TracerouteConfigOption` | 一个 traceroute.Diagnostic 可接收的配置选项 |


### timeout

#### 详细描述
timeout 设置路由跟踪每跳的读写超时时间(秒)

在 yak 中通过 traceroute.timeout 调用

参数:

  - timeout: 超时时间(秒)



返回值:

  - 一个 traceroute.Diagnostic 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：设置每跳超时 3 秒
res = traceroute.Diagnostic("8.8.8.8", traceroute.timeout(3))~
``````````````


#### 定义

`timeout(timeout float64) pingutil.TracerouteConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| timeout | `float64` | 超时时间(秒) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `pingutil.TracerouteConfigOption` | 一个 traceroute.Diagnostic 可接收的配置选项 |


### udpPort

#### 详细描述
udpPort 设置 UDP 协议路由跟踪使用的目标端口

在 yak 中通过 traceroute.udpPort 调用

参数:

  - port: 目标 UDP 端口



返回值:

  - 一个 traceroute.Diagnostic 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：指定 UDP 目标端口
res = traceroute.Diagnostic("8.8.8.8", traceroute.protocol("udp"), traceroute.udpPort(33434))~
``````````````


#### 定义

`udpPort(port int) pingutil.TracerouteConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| port | `int` | 目标 UDP 端口 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `pingutil.TracerouteConfigOption` | 一个 traceroute.Diagnostic 可接收的配置选项 |


