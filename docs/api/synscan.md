# synscan {#library-synscan}

synscan 是 SYN 半开放端口扫描模块：自行构造并发送 TCP 三次握手的第一个 SYN 包，只要收到对端的 SYN-ACK 即判定端口开放，随后发 RST 中断握手，不建立完整 TCP 连接。它绕开了操作系统对连接状态与文件描述符的维护，原理类似 masscan——短时间内把 SYN 包批量发出，再统一等待一段时间收集回包，因此速度极快、资源消耗极低，适合大范围端口快速探活。

核心接口是 synscan.Scan(targets, ports, opts...)，targets 支持 IP、CIDR、域名，ports 支持 22,80,443、1-65535、1-100,200-300 等写法；返回结果 channel 流式产出 *SynScanResult，每个结果含 Host 与 Port，可调用 Show() 打印。由于是批量发包后等待，提供 wait(秒) 控制收包等待时长，并有 rateLimit/concurrent 控速、excludeHosts/excludePorts 排除、outputFile/outputPrefix 落盘、context 取消等可选项。

注意：SYN 扫描使用原始套接字，需要 root/管理员权限，可先用 synscan.FixPermission() 修复权限；高速发包可能造成短暂网络拥塞或被防火墙拦截，且丢包会带来误差，需谨慎使用。synscan 常作为扫描链路的第一步，配合 servicescan.ScanFromSynResult 做"先探活、再识别指纹"的高效组合。

> 共 18 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [synscan.FixPermission](#fixpermission) | - | `error` | 尝试修复 pcap 权限问题(SYN 扫描依赖原始套接字，需要相应权限) |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [synscan.Scan](#scan) | `targets string, ports string, opts ...synscanx.SynxConfigOption` | `chan *synscan.SynScanResult, error` | 使用 SYN 扫描技术进行端口扫描，它不必打开一个完整的TCP连接，只发送一个SYN包，就能做到打开连接的效果，然后等待对端的反应 |
| [synscan.ScanFromPing](#scanfromping) | `res chan *pingutil.PingResult, ports string, opts ...synscanx.SynxConfigOption` | `chan *synscan.SynScanResult, error` | 对使用 ping.Scan 探测出的存活结果进行端口扫描，需要配合 ping.Scan 使用 |

## 函数详情

### FixPermission {#fixpermission}

```go
FixPermission() error
```

尝试修复 pcap 权限问题(SYN 扫描依赖原始套接字，需要相应权限)

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 修复失败时返回错误，为 nil 表示可正常使用 syn 扫描 |

**示例：扫描前修复 pcap 权限**

``````````````yak
// SYN 扫描需要原始套接字权限，扫描前先修复一次
err = synscan.FixPermission()
if err != nil {
    log.error("fix pcap permission failed: %v", err)
    return
}
log.info("pcap permission is ready for syn scan")
``````````````

---

## 可变参数函数详情

### Scan {#scan}

```go
Scan(targets string, ports string, opts ...synscanx.SynxConfigOption) (chan *synscan.SynScanResult, error)
```

使用 SYN 扫描技术进行端口扫描，它不必打开一个完整的TCP连接，只发送一个SYN包，就能做到打开连接的效果，然后等待对端的反应

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| targets | `string` | 目标地址，支持 CIDR 格式 |
| ports | `string` | 端口，支持 1-65535、1,2,3、1-100,200-300 格式 |

**可选参数**

可作为可变参数 `opts ...synscanx.SynxConfigOption` 传入选项；共 15 个可用选项，详见 [SynxConfigOption 选项列表](#option-synxconfigoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `chan *synscan.SynScanResult` | chan *synscan.SynScanResult: SYN 扫描结果管道，逐个产出开放端口 |
| r2 | `error` | 启动失败时返回错误 |

**示例：synscan.Scan 的基础 SYN 扫描**

``````````````yak
// 对本机常见端口做 SYN 扫描，遍历结果管道逐个打印开放端口
res, err = synscan.Scan("127.0.0.1", "22,80,443,3306,8080-8090")
die(err) // 启动失败(如缺少权限)时停止脚本
for result := range res {
    result.Show() // 打印 OPEN: host:port from synscan
}
``````````````

**示例：自定义发包后的等待时间**

``````````````yak
// SYN 扫描是批量发包后统一等待回包，wait 设置等待秒数(网络差可调大以减少漏报)
res, err = synscan.Scan("192.168.1.1/24", "1-65535", synscan.wait(5))
die(err)
for result := range res {
    println(f"open: ${result.Host}:${result.Port}")
}
``````````````

**示例：限速扫描并将开放端口写入文件**

``````````````yak
// 控制发包速率，并把开放端口写入文件，每行带 tcp:// 前缀便于后续处理
res, err = synscan.Scan("10.0.0.0/24", "80,443",
    synscan.rateLimit(1, 1000),          // 每 1 毫秒最多发送 1000 个包
    synscan.outputFile("open_ports.txt"),
    synscan.outputPrefix("tcp://"),
)
die(err)
for result := range res {
    result.Show()
}
``````````````

---

### ScanFromPing {#scanfromping}

```go
ScanFromPing(res chan *pingutil.PingResult, ports string, opts ...synscanx.SynxConfigOption) (chan *synscan.SynScanResult, error)
```

对使用 ping.Scan 探测出的存活结果进行端口扫描，需要配合 ping.Scan 使用

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| res | `chan *pingutil.PingResult` | ping.Scan 的扫描结果管道 |
| ports | `string` | 端口，支持 1-65535、1,2,3、1-100,200-300 格式 |

**可选参数**

可作为可变参数 `opts ...synscanx.SynxConfigOption` 传入选项；共 15 个可用选项，详见 [SynxConfigOption 选项列表](#option-synxconfigoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `chan *synscan.SynScanResult` | chan *synscan.SynScanResult: SYN 扫描结果管道，逐个产出开放端口 |
| r2 | `error` | 启动失败时返回错误 |

**示例：先 ping 探活再做 SYN 端口扫描**

``````````````yak
// 先用 ping 探活，再只对存活主机做 SYN 端口扫描，避免对死主机无谓发包
pingResult, err = ping.Scan("192.168.1.1/24")
die(err)
res, err = synscan.ScanFromPing(pingResult, "22,80,443,3389")
die(err)
for result := range res {
    result.Show()
}
``````````````

---

## 可变参数选项列表

以下按选项类型汇总全部可变参数选项(原先重复在各主函数下的选项表已收拢到此处)：

### 1. 类型：SynxConfigOption {#option-synxconfigoption}

涉及到的函数有：[synscan.Scan](#scan)、[synscan.ScanFromPing](#scanfromping)

|选项函数|参数|返回值|说明|
|:--|:--|:--|:--|
| `synscan.callback` | `callback func(result *synscan.SynScanResult)` | `SynxConfigOption` | syn scan 的配置选项，设置一个回调函数，每发现一个端口就会调用一次 |
| `synscan.concurrent` | `count int` | `SynxConfigOption` | syn scan 的配置选项，设置 syn 扫描的发包速率，和 rateLimit 基本相同 |
| `synscan.context` | `ctx context.Context` | `SynxConfigOption` | 设置 SYN 扫描使用的 context，用于取消或超时控制 |
| `synscan.excludeHosts` | `hosts string` | `SynxConfigOption` | syn scan 的配置选项，设置本次扫描排除的主机 |
| `synscan.excludePorts` | `ports string` | `SynxConfigOption` | syn scan 的配置选项，设置本次扫描排除的端口 |
| `synscan.iface` | `iface string` | `SynxConfigOption` | syn scan 的配置选项，设置 syn 扫描的网卡 |
| `synscan.initHostFilter` | `hosts string` | `SynxConfigOption` | syn scan 的配置选项，设置本次扫描的主机过滤器，只展示这些主机的扫描结果 |
| `synscan.initPortFilter` | `ports string` | `SynxConfigOption` | syn scan 的配置选项，设置本次扫描的端口过滤器，只展示这些端口的扫描结果 |
| `synscan.maxPorts` | `max int` | `SynxConfigOption` | maxOpenPorts syn scan 的配置选项，设置单个 IP 允许的最大开放端口数 |
| `synscan.outputFile` | `file string` | `SynxConfigOption` | syn scan 的配置选项，设置本次扫描结果保存到指定的文件 |
| `synscan.outputPrefix` | `prefix string` | `SynxConfigOption` | syn scan 的配置选项，设置本次扫描结果保存到文件时添加自定义前缀，比如 tcp:// https&#58;// http&#58;// 等，需要配合 outputFile 使用 |
| `synscan.rateLimit` | `ms int, count int` | `SynxConfigOption` | syn scan 的配置选项，设置 syn 扫描的速率 |
| `synscan.shuffle` | `s bool` | `SynxConfigOption` | syn scan 的配置选项，设置是否打乱扫描顺序 |
| `synscan.submitTaskCallback` | `callback func(i string)` | `SynxConfigOption` | syn scan 的配置选项，设置一个回调函数，每提交一个探测数据包的时候，这个回调会执行一次 |
| `synscan.wait` | `sec float64` | `SynxConfigOption` | syn scan 的配置选项，设置等待扫描目标回包的最大时间 |

