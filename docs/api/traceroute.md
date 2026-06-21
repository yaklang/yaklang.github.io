# traceroute {#library-traceroute}

`traceroute` 库提供路由追踪能力，探测到达目标主机途经的每一跳网关，常用于网络拓扑探测、链路诊断与目标网络环境分析。部分协议探测可能需要相应权限。

典型使用场景：

- 路由追踪：`traceroute.Diagnostic(host, opts...)` 对目标做路由追踪并流式返回每一跳结果，配 `traceroute.protocol`（ICMP/UDP/TCP）、`traceroute.hops` / `traceroute.firstTTL` 控制跳数范围，`traceroute.timeout` / `traceroute.retry` 控制超时重试。

与相邻库的关系：`traceroute` 与 `ping`（存活探测）、`pcapx`（底层数据包）同属网络探测工具，用于刻画到达目标的网络路径。

> 共 9 个函数

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [traceroute.Diagnostic](#diagnostic) | `host string, opts ...pingutil.TracerouteConfigOption` | `chan *pingutil.TracerouteResponse, error` | 对目标主机执行路由跟踪(traceroute)，以 channel 形式逐跳返回探测结果 |

## 可变参数函数详情

### Diagnostic {#diagnostic}

```go
Diagnostic(host string, opts ...pingutil.TracerouteConfigOption) (chan *pingutil.TracerouteResponse, error)
```

对目标主机执行路由跟踪(traceroute)，以 channel 形式逐跳返回探测结果

在 yak 中通过 traceroute.Diagnostic 调用，依赖网络环境，通常需要相应权限

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| host | `string` | 目标主机(IP 或域名) |

**可选参数**

可作为可变参数 `opts ...pingutil.TracerouteConfigOption` 传入选项；共 8 个可用选项，详见 [TracerouteConfigOption 选项列表](#option-tracerouteconfigoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `chan *pingutil.TracerouteResponse` | 一个只读 channel，逐跳产出 *pingutil.TracerouteResponse 探测结果 |
| r2 | `error` | 错误信息，启动失败时非 nil |

**示例**

``````````````yak
// 该示例为示意性用法：跟踪到目标的网络路径
res = traceroute.Diagnostic("8.8.8.8", traceroute.hops(20), traceroute.timeout(3))~

	for hop = range res {
	    println(hop.Hop, hop.IP)
	}
``````````````

---

## 可变参数选项列表

以下按选项类型汇总全部可变参数选项(原先重复在各主函数下的选项表已收拢到此处)：

### 1. 类型：TracerouteConfigOption {#option-tracerouteconfigoption}

涉及到的函数有：[traceroute.Diagnostic](#diagnostic)

|选项函数|参数|返回值|说明|
|:--|:--|:--|:--|
| `traceroute.ctx` | `ctx context.Context` | `pingutil.TracerouteConfigOption` | 设置路由跟踪使用的 context，用于取消或超时控制 |
| `traceroute.firstTTL` | `ttl int` | `pingutil.TracerouteConfigOption` | 设置路由跟踪的起始 TTL 值 |
| `traceroute.hops` | `hops int` | `pingutil.TracerouteConfigOption` | 设置路由跟踪的最大跳数 |
| `traceroute.localIp` | `addr string` | `pingutil.TracerouteConfigOption` | 设置路由跟踪使用的本地源 IP 地址 |
| `traceroute.protocol` | `protocol string` | `pingutil.TracerouteConfigOption` | 设置路由跟踪使用的探测协议(如 icmp、udp、tcp) |
| `traceroute.retry` | `times int` | `pingutil.TracerouteConfigOption` | 设置路由跟踪每跳的重试次数 |
| `traceroute.timeout` | `timeout float64` | `pingutil.TracerouteConfigOption` | 设置路由跟踪每跳的读写超时时间(秒) |
| `traceroute.udpPort` | `port int` | `pingutil.TracerouteConfigOption` | 设置 UDP 协议路由跟踪使用的目标端口 |

