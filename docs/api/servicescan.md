# servicescan {#library-servicescan}

servicescan 是服务指纹识别(全连接扫描)模块：对目标主机的端口建立完整 TCP 连接，发送探测包并比对指纹规则，识别出端口上运行的服务名称、版本与 CPE 信息。相比 synscan 只判断"端口是否开放"，servicescan 更精准，能回答"这个开放端口上跑的是什么服务"。

典型用法是先用 synscan 快速筛出开放端口，再用 servicescan.ScanFromSynResult 对开放端口做指纹识别，兼顾速度与精度；也可以直接用 servicescan.Scan 对少量目标做端到端扫描。结果以 channel 流式返回 *MatchResult，可一边扫描一边消费，对每个结果调用 IsOpen() 判断开放、String() 获取可读摘要、GetCPEs()/GetProto() 获取 CPE 与协议。

模块支持服务(nmap)指纹与 Web 指纹两套规则：用 service() 仅跑服务指纹、web() 仅跑 Web 指纹、all() 同时启用；并提供并发(concurrent)、探测超时(probeTimeout)、主动发包(active)、代理(proxy)、可取消上下文(context) 等大量可选项。可与 synscan、ping、spacengine(网络空间测绘) 等模块联动，是资产发现阶段的核心工具。

> 共 32 个函数

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [servicescan.Scan](#scan) | `target string, port string, opts ...fp.ConfigOption` | `chan *fp.MatchResult, error` | servicescan 库使用的端口扫描类型的方式为全连接扫描，用于对连接目标进行精准的扫描，相比 synscan 库的单纯扫描，servicescan 库会尝试获取精确指纹信息以及 CPE 信息 |
| [servicescan.ScanFromPing](#scanfromping) | `res chan *pingutil.PingResult, ports string, opts ...fp.ConfigOption` | `chan *fp.MatchResult, error` | 从 ping.Scan 的结果中进行指纹识别 |
| [servicescan.ScanFromSpaceEngine](#scanfromspaceengine) | `res any, opts ...fp.ConfigOption` | `chan *fp.MatchResult, error` | ScanFromSynResult / ScanFromSpaceEngine 从 synscan.Scan 或者 spacengine.Query 的结果中进行指纹识别 |
| [servicescan.ScanFromSynResult](#scanfromsynresult) | `res any, opts ...fp.ConfigOption` | `chan *fp.MatchResult, error` | / ScanFromSpaceEngine 从 synscan.Scan 或者 spacengine.Query 的结果中进行指纹识别 |
| [servicescan.ScanOne](#scanone) | `target string, port int, opts ...fp.ConfigOption` | `*fp.MatchResult, error` | servicescan 单体扫描，同步扫描一个目标，主机+端口 |

## 可变参数函数详情

### Scan {#scan}

```go
Scan(target string, port string, opts ...fp.ConfigOption) (chan *fp.MatchResult, error)
```

servicescan 库使用的端口扫描类型的方式为全连接扫描，用于对连接目标进行精准的扫描，相比 synscan 库的单纯扫描，servicescan 库会尝试获取精确指纹信息以及 CPE 信息

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| target | `string` | 目标地址，支持 CIDR 格式，支持 192.168.1.1-100 格式 |
| port | `string` | 端口，支持 1-65535、1,2,3、1-100,200-300 格式 |

**可选参数**

可作为可变参数 `opts ...fp.ConfigOption` 传入选项；共 27 个可用选项，详见 [ConfigOption 选项列表](#option-configoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `chan *fp.MatchResult` | chan *MatchResult: 指纹识别结果管道，逐个产出扫描结果 |
| r2 | `error` | 启动失败时返回错误 |

**示例：servicescan.Scan 的基础全连接扫描**

``````````````yak
// 全连接扫描本机常见端口，对开放端口打印指纹与 CPE 信息
ch, err = servicescan.Scan("127.0.0.1", "22,80,443,3306")
die(err) // 启动失败时停止脚本
for result := range ch {
    if result.IsOpen() { // IsOpen 判断端口是否开放
        println(result.String())  // 可读摘要，含服务名与版本
        println(result.GetCPEs()) // CPE 列表
    }
}
``````````````

**示例：控制并发与探测超时**

``````````````yak
// 目标端口较多时调大并发，并设置单个探测包超时
ch, err = servicescan.Scan("192.168.1.1/24", "1-1000",
    servicescan.concurrent(50),   // 50 个并发
    servicescan.probeTimeout(5),  // 单个探测包 5 秒超时
)
die(err)
for result := range ch {
    if result.IsOpen() {
        println(result.String())
    }
}
``````````````

**示例：仅识别 Web 指纹**

``````````````yak
// 只跑 Web 指纹规则，扫描常见 Web 端口
ch, err = servicescan.Scan("127.0.0.1", "80,443,8080,8443", servicescan.web())
die(err)
for result := range ch {
    if result.IsOpen() {
        println(result.String())
    }
}
``````````````

---

### ScanFromPing {#scanfromping}

```go
ScanFromPing(res chan *pingutil.PingResult, ports string, opts ...fp.ConfigOption) (chan *fp.MatchResult, error)
```

从 ping.Scan 的结果中进行指纹识别

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| res | `chan *pingutil.PingResult` | ping.Scan 的结果管道 |
| ports | `string` | 端口，支持 1-65535、1,2,3、1-100,200-300 格式 |

**可选参数**

可作为可变参数 `opts ...fp.ConfigOption` 传入选项；共 27 个可用选项，详见 [ConfigOption 选项列表](#option-configoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `chan *fp.MatchResult` | chan *MatchResult: 指纹识别结果管道，逐个产出扫描结果 |
| r2 | `error` | 启动失败时返回错误 |

**示例：先 ping 探活再做指纹识别**

``````````````yak
// 先用 ping 探活，再只对存活主机做服务指纹识别，省去对死主机的探测
pingResult, err = ping.Scan("192.168.1.1/24")
die(err)
fpResults, err = servicescan.ScanFromPing(pingResult, "22,80,443,3389")
die(err)
for result := range fpResults {
    if result.IsOpen() {
        println(result.String())
    }
}
``````````````

---

### ScanFromSpaceEngine {#scanfromspaceengine}

```go
ScanFromSpaceEngine(res any, opts ...fp.ConfigOption) (chan *fp.MatchResult, error)
```

ScanFromSynResult / ScanFromSpaceEngine 从 synscan.Scan 或者 spacengine.Query 的结果中进行指纹识别

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| res | `any` | synscan.Scan 或者 spacengine.Query 的结果 |

**可选参数**

可作为可变参数 `opts ...fp.ConfigOption` 传入选项；共 27 个可用选项，详见 [ConfigOption 选项列表](#option-configoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `chan *fp.MatchResult` | chan *MatchResult: 指纹识别结果管道，逐个产出扫描结果 |
| r2 | `error` | 启动失败时返回错误 |

**示例：与 synscan 联动(先快速探活, 再精准识别指纹)**

``````````````yak
// 先用 synscan 快速探活开放端口，再交给 servicescan 做精准指纹识别，兼顾速度与精度
synResult, err = synscan.Scan("127.0.0.1", "1-65535")
die(err)
fpResults, err = servicescan.ScanFromSynResult(synResult)
die(err)
for result := range fpResults {
    println(result.String())
}
``````````````

**示例：与网络空间测绘(spacengine)联动复核指纹**

``````````````yak
// 把网络空间测绘(如 shodan)查询到的资产交给 servicescan 复核服务指纹
res, err = spacengine.ShodanQuery("YOUR_API_KEY", "apache")
die(err)
fpResults, err = servicescan.ScanFromSpaceEngine(res)
die(err)
for result := range fpResults {
    println(result.String())
}
``````````````

---

### ScanFromSynResult {#scanfromsynresult}

```go
ScanFromSynResult(res any, opts ...fp.ConfigOption) (chan *fp.MatchResult, error)
```

/ ScanFromSpaceEngine 从 synscan.Scan 或者 spacengine.Query 的结果中进行指纹识别

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| res | `any` | synscan.Scan 或者 spacengine.Query 的结果 |

**可选参数**

可作为可变参数 `opts ...fp.ConfigOption` 传入选项；共 27 个可用选项，详见 [ConfigOption 选项列表](#option-configoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `chan *fp.MatchResult` | chan *MatchResult: 指纹识别结果管道，逐个产出扫描结果 |
| r2 | `error` | 启动失败时返回错误 |

**示例：与 synscan 联动(先快速探活, 再精准识别指纹)**

``````````````yak
// 先用 synscan 快速探活开放端口，再交给 servicescan 做精准指纹识别，兼顾速度与精度
synResult, err = synscan.Scan("127.0.0.1", "1-65535")
die(err)
fpResults, err = servicescan.ScanFromSynResult(synResult)
die(err)
for result := range fpResults {
    println(result.String())
}
``````````````

**示例：与网络空间测绘(spacengine)联动复核指纹**

``````````````yak
// 把网络空间测绘(如 shodan)查询到的资产交给 servicescan 复核服务指纹
res, err = spacengine.ShodanQuery("YOUR_API_KEY", "apache")
die(err)
fpResults, err = servicescan.ScanFromSpaceEngine(res)
die(err)
for result := range fpResults {
    println(result.String())
}
``````````````

---

### ScanOne {#scanone}

```go
ScanOne(target string, port int, opts ...fp.ConfigOption) (*fp.MatchResult, error)
```

servicescan 单体扫描，同步扫描一个目标，主机+端口

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| target | `string` | 目标地址 |
| port | `int` | 端口 |

**可选参数**

可作为可变参数 `opts ...fp.ConfigOption` 传入选项；共 27 个可用选项，详见 [ConfigOption 选项列表](#option-configoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*fp.MatchResult` | *MatchResult: 单个目标的指纹识别结果 |
| r2 | `error` | 扫描失败时返回错误 |

**示例：servicescan.ScanOne 同步扫描单个目标**

``````````````yak
// 同步扫描单个 host:port，直接拿到一个结果(端口关闭也会返回结果、不报错)
result, err = servicescan.ScanOne("127.0.0.1", 80, servicescan.probeTimeout(5))
die(err)
if result.IsOpen() {
    println(result.String())  // 可读摘要
    println(result.GetCPEs()) // CPE 列表
}
``````````````

---

## 可变参数选项列表

以下按选项类型汇总全部可变参数选项(原先重复在各主函数下的选项表已收拢到此处)：

### 1. 类型：ConfigOption {#option-configoption}

涉及到的函数有：[servicescan.Scan](#scan)、[servicescan.ScanFromPing](#scanfromping)、[servicescan.ScanFromSpaceEngine](#scanfromspaceengine)、[servicescan.ScanFromSynResult](#scanfromsynresult)、[servicescan.ScanOne](#scanone)

|选项函数|参数|返回值|说明|
|:--|:--|:--|:--|
| `servicescan.active` | `raw bool` | `ConfigOption` | 设置是否启用主动发包模式，主动向目标发送探测包以提升指纹识别准确率 |
| `servicescan.all` | - | `fp.ConfigOption` | servicescan 的配置选项，强制同时启用 Web 与服务(nmap)全部指纹识别 |
| `servicescan.cache` | `b bool` | `ConfigOption` | servicescan 的配置选项，设置本次扫描是否使用缓存 |
| `servicescan.concurrent` | `size int` | `ConfigOption` | servicescan 的配置选项，用于设置整体扫描并发 |
| `servicescan.context` | `ctx context.Context` | `ConfigOption` | 设置服务扫描使用的 context，用于取消或超时控制 |
| `servicescan.databaseCache` | `b bool` | `ConfigOption` | servicescan 的配置选项，设置本次扫描是否使用数据库缓存 |
| `servicescan.debugLog` | `b ...bool` | `ConfigOption` | 的配置选项，设置本次扫描是否使用 debugLog |
| `servicescan.disableDefaultRule` | `b ...bool` | `fp.ConfigOption` | servicescan 的配置选项，禁用内置默认指纹规则(通常配合自定义规则使用) |
| `servicescan.disableOpenPortGuard` | `b ...bool` | `ConfigOption` | servicescan 的配置选项, 禁用单主机开放端口数保护. |
| `servicescan.disableWebScanConnPool` | `b bool` | `fp.ConfigOption` | servicescan 的配置选项，用于禁用 web 扫描的连接池 |
| `servicescan.excludeHosts` | `hosts string` | `ConfigOption` | servicescan 的配置选项，设置本次扫描排除的主机 |
| `servicescan.excludePorts` | `ports string` | `ConfigOption` | servicescan 的配置选项，设置本次扫描排除的端口 |
| `servicescan.maxProbes` | `m int` | `ConfigOption` | servicescan 的配置选项，在主动模式发包的基础上设置本次扫描使用的最大探测包数量，默认值为 5 |
| `servicescan.maxProbesConcurrent` | `m int` | `ConfigOption` | servicescan 的配置选项，设置本次扫描发送 Probe 的并发量，默认值为 5 |
| `servicescan.nmapRarityMax` | `rarity int` | `ConfigOption` | servicescan 的配置选项，设置本次扫描使用的 Nmap 指纹稀有度，在主动模式发包的基础上进行探测控制 |
| `servicescan.nmapRule` | `i any` | `ConfigOption` | servicescan 的配置选项，设置本次扫描使用的 Nmap 指纹规则 |
| `servicescan.onFinish` | `cb func(*MatchResult)` | `ConfigOption` | servicescan 的配置选项，设置本次扫描完成单个目标时的回调函数 |
| `servicescan.onOpen` | `cb func(*MatchResult)` | `ConfigOption` | servicescan 的配置选项，设置本次扫描端口开放时的回调函数 |
| `servicescan.openPortGuardLimit` | `limit int` | `ConfigOption` | servicescan 的配置选项, 设置单主机开放端口数熔断阈值. |
| `servicescan.probeTimeout` | `f float64` | `ConfigOption` | servicescan 的配置选项，设置每一个探测包的超时时间 |
| `servicescan.proto` | `proto ...any` | `fp.ConfigOption` | servicescan 的配置选项，用于指定扫描协议 |
| `servicescan.proxy` | `proxies ...string` | `ConfigOption` | servicescan 的配置选项，设置本次扫描使用的代理 |
| `servicescan.service` | - | `fp.ConfigOption` | servicescan 的配置选项，仅启用服务(nmap)指纹识别，禁用 Web 指纹 |
| `servicescan.web` | - | `fp.ConfigOption` | servicescan 的配置选项，仅启用 Web 指纹识别(只扫描 Web 服务指纹) |
| `servicescan.webRule` | `rs ...any` | `ConfigOption` | servicescan 的配置选项，设置本次扫描使用的 Web 指纹规则 |
| `servicescan.withRuleGroup` | `groups ...string` | `ConfigOption` | servicescan 的配置选项，用于指定指纹库中的指纹组。 |
| `servicescan.withRuleGroupAll` | - | `ConfigOption` | servicescan 的配置选项，用于指定使用指纹组的全部指纹。 |

