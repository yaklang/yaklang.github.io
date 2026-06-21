# ping {#library-ping}

`ping` 库提供主机存活探测能力，支持 ICMP Ping 与 TCP Ping，常用于扫描前的存活筛选，把"活着的主机"先挑出来再做端口/服务扫描，提升整体效率。

典型使用场景：

- 单点与批量：`ping.Ping(target, opts...)` 探测单个目标，`ping.Scan(target, opts...)` 对网段批量探测并流式返回结果。
- 控制：`ping.tcpPingPorts` 用 TCP Ping 指定端口（绕过禁 ICMP 环境），`ping.concurrent` 控制并发，`ping.timeout` / `ping.proxy` / `ping.dnsServers` 控制超时与解析，`ping.scanCClass` 扫描整个 C 段，`ping.onResult` 处理每个结果。

与相邻库的关系：`ping` 处于扫描链路前端，存活结果常交给 `synscan`/`servicescan` 做后续端口与服务扫描。

> 共 12 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [ping.concurrent](#concurrent) | `i int` | `PingConfigOpt` | 设置存活探测的并发数量(默认 50) |
| [ping.dnsTimeout](#dnstimeout) | `i float64` | `PingConfigOpt` | 设置域名解析(DNS)的超时时间(秒) |
| [ping.excludeHosts](#excludehosts) | `host string` | `PingConfigOpt` | 设置探测时需要排除的主机(支持 IP、CIDR、范围等写法) |
| [ping.onResult](#onresult) | `i func(result *pingutil.PingResult)` | `PingConfigOpt` | 设置每得到一个探测结果时触发的回调函数 |
| [ping.scanCClass](#scancclass) | `i bool` | `PingConfigOpt` | 设置是否将目标扩展为其所在的整个 C 段(/24)再进行探测 |
| [ping.skip](#skip) | `i bool` | `PingConfigOpt` | 设置是否跳过实际存活探测，直接将目标标记为存活(常用于已知目标存活的场景) |
| [ping.tcpPingPorts](#tcppingports) | `i string` | `PingConfigOpt` | 设置 TCP Ping 使用的端口列表(当 ICMP 不可用时回退到 TCP 探测) |
| [ping.timeout](#timeout) | `i float64` | `PingConfigOpt` | 设置单次存活探测的超时时间(秒) |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [ping.Ping](#ping) | `target string, opts ...PingConfigOpt` | `*pingutil.PingResult` | 对单个目标执行存活探测，自动在 ICMP 与 TCP Ping 之间选择，返回探测结果 |
| [ping.Scan](#scan) | `target string, opts ...PingConfigOpt` | `chan *pingutil.PingResult` | 对一个或一批目标执行存活探测(ping)，以 channel 形式流式返回每个目标的存活结果 |
| [ping.dnsServers](#dnsservers) | `i ...string` | `PingConfigOpt` | 设置进行域名解析时使用的自定义 DNS 服务器列表 |
| [ping.proxy](#proxy) | `i ...string` | `PingConfigOpt` | 设置探测时使用的代理地址列表 |

## 函数详情

### concurrent {#concurrent}

```go
concurrent(i int) PingConfigOpt
```

设置存活探测的并发数量(默认 50)

在 yak 中通过 ping.concurrent 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `int` | 并发数量 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `PingConfigOpt` | 一个 ping.Scan/ping.Ping 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：以 100 并发探测
res = ping.Scan("192.168.1.1/24", ping.concurrent(100))
``````````````

---

### dnsTimeout {#dnstimeout}

```go
dnsTimeout(i float64) PingConfigOpt
```

设置域名解析(DNS)的超时时间(秒)

在 yak 中通过 ping.dnsTimeout 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `float64` | 超时时间(秒) |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `PingConfigOpt` | 一个 ping.Scan/ping.Ping 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：设置 DNS 解析超时 3 秒
res = ping.Scan("example.com", ping.dnsTimeout(3))
``````````````

---

### excludeHosts {#excludehosts}

```go
excludeHosts(host string) PingConfigOpt
```

设置探测时需要排除的主机(支持 IP、CIDR、范围等写法)

在 yak 中通过 ping.excludeHosts 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| host | `string` | 需要排除的主机表达式 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `PingConfigOpt` | 一个 ping.Scan/ping.Ping 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：排除网关地址
res = ping.Scan("192.168.1.1/24", ping.excludeHosts("192.168.1.1"))
``````````````

---

### onResult {#onresult}

```go
onResult(i func(result *pingutil.PingResult)) PingConfigOpt
```

设置每得到一个探测结果时触发的回调函数

在 yak 中通过 ping.onResult 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `func(result *pingutil.PingResult)` | 接收单个探测结果的回调函数 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `PingConfigOpt` | 一个 ping.Scan/ping.Ping 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：通过回调处理每个结果

	res = ping.Scan("192.168.1.1/24", ping.onResult(func(result) {
	    println(result.IP, result.Ok)
	}))
``````````````

---

### scanCClass {#scancclass}

```go
scanCClass(i bool) PingConfigOpt
```

设置是否将目标扩展为其所在的整个 C 段(/24)再进行探测

在 yak 中通过 ping.scanCClass 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `bool` | 是否扩展为 C 段 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `PingConfigOpt` | 一个 ping.Scan/ping.Ping 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：探测目标所在 C 段
res = ping.Scan("192.168.1.1", ping.scanCClass(true))
``````````````

---

### skip {#skip}

```go
skip(i bool) PingConfigOpt
```

设置是否跳过实际存活探测，直接将目标标记为存活(常用于已知目标存活的场景)

在 yak 中通过 ping.skip 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `bool` | 是否跳过探测 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `PingConfigOpt` | 一个 ping.Scan/ping.Ping 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：跳过存活探测
res = ping.Scan("192.168.1.1/24", ping.skip(true))
``````````````

---

### tcpPingPorts {#tcppingports}

```go
tcpPingPorts(i string) PingConfigOpt
```

设置 TCP Ping 使用的端口列表(当 ICMP 不可用时回退到 TCP 探测)

在 yak 中通过 ping.tcpPingPorts 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `string` | 逗号分隔的端口列表，如 &#34;22,80,443&#34; |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `PingConfigOpt` | 一个 ping.Scan/ping.Ping 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：指定 TCP Ping 端口
res = ping.Scan("192.168.1.1/24", ping.tcpPingPorts("80,443"))
``````````````

---

### timeout {#timeout}

```go
timeout(i float64) PingConfigOpt
```

设置单次存活探测的超时时间(秒)

在 yak 中通过 ping.timeout 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `float64` | 超时时间(秒) |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `PingConfigOpt` | 一个 ping.Scan/ping.Ping 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：设置探测超时 5 秒
res = ping.Scan("192.168.1.1/24", ping.timeout(5))
``````````````

---

## 可变参数函数详情

### Ping {#ping}

```go
Ping(target string, opts ...PingConfigOpt) *pingutil.PingResult
```

对单个目标执行存活探测，自动在 ICMP 与 TCP Ping 之间选择，返回探测结果

在 yak 中通过 ping.Ping 调用，target 支持 IP、域名或 http(s) URL

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| target | `string` | 单个探测目标 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...PingConfigOpt` | 可选配置项，如 ping.timeout、ping.tcpPingPorts、ping.proxy 等 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*pingutil.PingResult` | 探测结果对象，包含目标 IP、是否存活、RTT 与原因等 |

**示例**

``````````````yak
// 该示例为示意性用法：探测单个目标是否存活
result = ping.Ping("127.0.0.1", ping.timeout(5))
println(result.IP, result.Ok)
``````````````

---

### Scan {#scan}

```go
Scan(target string, opts ...PingConfigOpt) chan *pingutil.PingResult
```

对一个或一批目标执行存活探测(ping)，以 channel 形式流式返回每个目标的存活结果

在 yak 中通过 ping.Scan 调用，target 支持 IP、域名、CIDR、逗号分隔或范围等多种写法

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| target | `string` | 探测目标，如 &#34;192.168.1.1&#34;、&#34;192.168.1.0/24&#34;、&#34;a.com,b.com&#34; |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...PingConfigOpt` | 可选配置项，如 ping.timeout、ping.concurrent、ping.tcpPingPorts 等 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `chan *pingutil.PingResult` | 一个只读 channel，逐条产出 *pingutil.PingResult 探测结果 |

**示例**

``````````````yak
// 该示例为示意性用法：探测 C 段存活主机
res = ping.Scan("192.168.1.1/24", ping.timeout(5), ping.concurrent(50))

	for result = range res {
	    if result.Ok {
	        println("alive:", result.IP)
	    }
	}
``````````````

---

### dnsServers {#dnsservers}

```go
dnsServers(i ...string) PingConfigOpt
```

设置进行域名解析时使用的自定义 DNS 服务器列表

在 yak 中通过 ping.dnsServers 调用

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `...string` | 一个或多个 DNS 服务器地址 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `PingConfigOpt` | 一个 ping.Scan/ping.Ping 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：使用自定义 DNS 服务器
res = ping.Scan("example.com", ping.dnsServers("8.8.8.8", "1.1.1.1"))
``````````````

---

### proxy {#proxy}

```go
proxy(i ...string) PingConfigOpt
```

设置探测时使用的代理地址列表

在 yak 中通过 ping.proxy 调用

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `...string` | 一个或多个代理地址 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `PingConfigOpt` | 一个 ping.Scan/ping.Ping 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：通过代理探测
res = ping.Scan("192.168.1.1/24", ping.proxy("socks5://127.0.0.1:1080"))
``````````````

---

