# ping

|函数名|函数描述/介绍|
|:------|:--------|
| [ping.Ping](#ping) |Ping 对单个目标执行存活探测，自动在 ICMP 与 TCP Ping 之间选择，返回探测结果 在 yak 中通过 ping.Ping 调用，target 支持 IP、域名或 http(s) URL 参数: - target: 单个探测目标 - opts: 可选配置项，如 ping.timeout...|
| [ping.Scan](#scan) |Scan 对一个或一批目标执行存活探测(ping)，以 channel 形式流式返回每个目标的存活结果 在 yak 中通过 ping.Scan 调用，target 支持 IP、域名、CIDR、逗号分隔或范围等多种写法 参数: - target: 探测目标，如 &#34;192.168.1.1&#34;、&#34;192.1...|
| [ping.concurrent](#concurrent) |concurrent 设置存活探测的并发数量(默认 50) 在 yak 中通过 ping.concurrent 调用 参数: - i: 并发数量 返回值: - 一个 ping.Scan/ping.Ping 可接收的配置选项|
| [ping.dnsServers](#dnsservers) |dnsServers 设置进行域名解析时使用的自定义 DNS 服务器列表 在 yak 中通过 ping.dnsServers 调用 参数: - i: 一个或多个 DNS 服务器地址 返回值: - 一个 ping.Scan/ping.Ping 可接收的配置选项|
| [ping.dnsTimeout](#dnstimeout) |dnsTimeout 设置域名解析(DNS)的超时时间(秒) 在 yak 中通过 ping.dnsTimeout 调用 参数: - i: 超时时间(秒) 返回值: - 一个 ping.Scan/ping.Ping 可接收的配置选项|
| [ping.excludeHosts](#excludehosts) |excludeHosts 设置探测时需要排除的主机(支持 IP、CIDR、范围等写法) 在 yak 中通过 ping.excludeHosts 调用 参数: - host: 需要排除的主机表达式 返回值: - 一个 ping.Scan/ping.Ping 可接收的配置选项|
| [ping.onResult](#onresult) |onResult 设置每得到一个探测结果时触发的回调函数 在 yak 中通过 ping.onResult 调用 参数: - i: 接收单个探测结果的回调函数 返回值: - 一个 ping.Scan/ping.Ping 可接收的配置选项|
| [ping.proxy](#proxy) |proxy 设置探测时使用的代理地址列表 在 yak 中通过 ping.proxy 调用 参数: - i: 一个或多个代理地址 返回值: - 一个 ping.Scan/ping.Ping 可接收的配置选项|
| [ping.scanCClass](#scancclass) |scanCClass 设置是否将目标扩展为其所在的整个 C 段(/24)再进行探测 在 yak 中通过 ping.scanCClass 调用 参数: - i: 是否扩展为 C 段 返回值: - 一个 ping.Scan/ping.Ping 可接收的配置选项|
| [ping.skip](#skip) |skip 设置是否跳过实际存活探测，直接将目标标记为存活(常用于已知目标存活的场景) 在 yak 中通过 ping.skip 调用 参数: - i: 是否跳过探测 返回值: - 一个 ping.Scan/ping.Ping 可接收的配置选项|
| [ping.tcpPingPorts](#tcppingports) |tcpPingPorts 设置 TCP Ping 使用的端口列表(当 ICMP 不可用时回退到 TCP 探测) 在 yak 中通过 ping.tcpPingPorts 调用 参数: - i: 逗号分隔的端口列表，如 &#34;22,80,443&#34; 返回值: - 一个 ping.Scan/ping.Ping ...|
| [ping.timeout](#timeout) |timeout 设置单次存活探测的超时时间(秒) 在 yak 中通过 ping.timeout 调用 参数: - i: 超时时间(秒) 返回值: - 一个 ping.Scan/ping.Ping 可接收的配置选项|


## 函数定义
### Ping

#### 详细描述
Ping 对单个目标执行存活探测，自动在 ICMP 与 TCP Ping 之间选择，返回探测结果

在 yak 中通过 ping.Ping 调用，target 支持 IP、域名或 http(s) URL

参数:

  - target: 单个探测目标

  - opts: 可选配置项，如 ping.timeout、ping.tcpPingPorts、ping.proxy 等



返回值:

  - 探测结果对象，包含目标 IP、是否存活、RTT 与原因等




Example:

``````````````yak
// 该示例为示意性用法：探测单个目标是否存活
result = ping.Ping("127.0.0.1", ping.timeout(5))
println(result.IP, result.Ok)
``````````````


#### 定义

`Ping(target string, opts ...PingConfigOpt) *pingutil.PingResult`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| target | `string` | 单个探测目标 |
| opts | `...PingConfigOpt` | 可选配置项，如 ping.timeout、ping.tcpPingPorts、ping.proxy 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*pingutil.PingResult` | 探测结果对象，包含目标 IP、是否存活、RTT 与原因等 |


### Scan

#### 详细描述
Scan 对一个或一批目标执行存活探测(ping)，以 channel 形式流式返回每个目标的存活结果

在 yak 中通过 ping.Scan 调用，target 支持 IP、域名、CIDR、逗号分隔或范围等多种写法

参数:

  - target: 探测目标，如 &#34;192.168.1.1&#34;、&#34;192.168.1.0/24&#34;、&#34;a.com,b.com&#34;

  - opts: 可选配置项，如 ping.timeout、ping.concurrent、ping.tcpPingPorts 等



返回值:

  - 一个只读 channel，逐条产出 *pingutil.PingResult 探测结果




Example:

``````````````yak
// 该示例为示意性用法：探测 C 段存活主机
res = ping.Scan("192.168.1.1/24", ping.timeout(5), ping.concurrent(50))

	for result = range res {
	    if result.Ok {
	        println("alive:", result.IP)
	    }
	}
``````````````


#### 定义

`Scan(target string, opts ...PingConfigOpt) chan *pingutil.PingResult`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| target | `string` | 探测目标，如 &#34;192.168.1.1&#34;、&#34;192.168.1.0/24&#34;、&#34;a.com,b.com&#34; |
| opts | `...PingConfigOpt` | 可选配置项，如 ping.timeout、ping.concurrent、ping.tcpPingPorts 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *pingutil.PingResult` | 一个只读 channel，逐条产出 *pingutil.PingResult 探测结果 |


### concurrent

#### 详细描述
concurrent 设置存活探测的并发数量(默认 50)

在 yak 中通过 ping.concurrent 调用

参数:

  - i: 并发数量



返回值:

  - 一个 ping.Scan/ping.Ping 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：以 100 并发探测
res = ping.Scan("192.168.1.1/24", ping.concurrent(100))
``````````````


#### 定义

`concurrent(i int) PingConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `int` | 并发数量 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PingConfigOpt` | 一个 ping.Scan/ping.Ping 可接收的配置选项 |


### dnsServers

#### 详细描述
dnsServers 设置进行域名解析时使用的自定义 DNS 服务器列表

在 yak 中通过 ping.dnsServers 调用

参数:

  - i: 一个或多个 DNS 服务器地址



返回值:

  - 一个 ping.Scan/ping.Ping 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：使用自定义 DNS 服务器
res = ping.Scan("example.com", ping.dnsServers("8.8.8.8", "1.1.1.1"))
``````````````


#### 定义

`dnsServers(i ...string) PingConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `...string` | 一个或多个 DNS 服务器地址 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PingConfigOpt` | 一个 ping.Scan/ping.Ping 可接收的配置选项 |


### dnsTimeout

#### 详细描述
dnsTimeout 设置域名解析(DNS)的超时时间(秒)

在 yak 中通过 ping.dnsTimeout 调用

参数:

  - i: 超时时间(秒)



返回值:

  - 一个 ping.Scan/ping.Ping 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：设置 DNS 解析超时 3 秒
res = ping.Scan("example.com", ping.dnsTimeout(3))
``````````````


#### 定义

`dnsTimeout(i float64) PingConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `float64` | 超时时间(秒) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PingConfigOpt` | 一个 ping.Scan/ping.Ping 可接收的配置选项 |


### excludeHosts

#### 详细描述
excludeHosts 设置探测时需要排除的主机(支持 IP、CIDR、范围等写法)

在 yak 中通过 ping.excludeHosts 调用

参数:

  - host: 需要排除的主机表达式



返回值:

  - 一个 ping.Scan/ping.Ping 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：排除网关地址
res = ping.Scan("192.168.1.1/24", ping.excludeHosts("192.168.1.1"))
``````````````


#### 定义

`excludeHosts(host string) PingConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| host | `string` | 需要排除的主机表达式 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PingConfigOpt` | 一个 ping.Scan/ping.Ping 可接收的配置选项 |


### onResult

#### 详细描述
onResult 设置每得到一个探测结果时触发的回调函数

在 yak 中通过 ping.onResult 调用

参数:

  - i: 接收单个探测结果的回调函数



返回值:

  - 一个 ping.Scan/ping.Ping 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：通过回调处理每个结果

	res = ping.Scan("192.168.1.1/24", ping.onResult(func(result) {
	    println(result.IP, result.Ok)
	}))
``````````````


#### 定义

`onResult(i func(result *pingutil.PingResult)) PingConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `func(result *pingutil.PingResult)` | 接收单个探测结果的回调函数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PingConfigOpt` | 一个 ping.Scan/ping.Ping 可接收的配置选项 |


### proxy

#### 详细描述
proxy 设置探测时使用的代理地址列表

在 yak 中通过 ping.proxy 调用

参数:

  - i: 一个或多个代理地址



返回值:

  - 一个 ping.Scan/ping.Ping 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：通过代理探测
res = ping.Scan("192.168.1.1/24", ping.proxy("socks5://127.0.0.1:1080"))
``````````````


#### 定义

`proxy(i ...string) PingConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `...string` | 一个或多个代理地址 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PingConfigOpt` | 一个 ping.Scan/ping.Ping 可接收的配置选项 |


### scanCClass

#### 详细描述
scanCClass 设置是否将目标扩展为其所在的整个 C 段(/24)再进行探测

在 yak 中通过 ping.scanCClass 调用

参数:

  - i: 是否扩展为 C 段



返回值:

  - 一个 ping.Scan/ping.Ping 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：探测目标所在 C 段
res = ping.Scan("192.168.1.1", ping.scanCClass(true))
``````````````


#### 定义

`scanCClass(i bool) PingConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `bool` | 是否扩展为 C 段 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PingConfigOpt` | 一个 ping.Scan/ping.Ping 可接收的配置选项 |


### skip

#### 详细描述
skip 设置是否跳过实际存活探测，直接将目标标记为存活(常用于已知目标存活的场景)

在 yak 中通过 ping.skip 调用

参数:

  - i: 是否跳过探测



返回值:

  - 一个 ping.Scan/ping.Ping 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：跳过存活探测
res = ping.Scan("192.168.1.1/24", ping.skip(true))
``````````````


#### 定义

`skip(i bool) PingConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `bool` | 是否跳过探测 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PingConfigOpt` | 一个 ping.Scan/ping.Ping 可接收的配置选项 |


### tcpPingPorts

#### 详细描述
tcpPingPorts 设置 TCP Ping 使用的端口列表(当 ICMP 不可用时回退到 TCP 探测)

在 yak 中通过 ping.tcpPingPorts 调用

参数:

  - i: 逗号分隔的端口列表，如 &#34;22,80,443&#34;



返回值:

  - 一个 ping.Scan/ping.Ping 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：指定 TCP Ping 端口
res = ping.Scan("192.168.1.1/24", ping.tcpPingPorts("80,443"))
``````````````


#### 定义

`tcpPingPorts(i string) PingConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` | 逗号分隔的端口列表，如 &#34;22,80,443&#34; |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PingConfigOpt` | 一个 ping.Scan/ping.Ping 可接收的配置选项 |


### timeout

#### 详细描述
timeout 设置单次存活探测的超时时间(秒)

在 yak 中通过 ping.timeout 调用

参数:

  - i: 超时时间(秒)



返回值:

  - 一个 ping.Scan/ping.Ping 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：设置探测超时 5 秒
res = ping.Scan("192.168.1.1/24", ping.timeout(5))
``````````````


#### 定义

`timeout(i float64) PingConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `float64` | 超时时间(秒) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PingConfigOpt` | 一个 ping.Scan/ping.Ping 可接收的配置选项 |


