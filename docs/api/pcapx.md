# pcapx {#library-pcapx}

`pcapx` 库提供底层网络抓包与造包能力：监听网卡流量、解析 TCP/HTTP/TLS 流，以及逐层构造并注入以太网/IP/TCP/UDP/ICMP/ARP 数据包。属于原始套接字操作，通常需要管理员/root 权限。

典型使用场景：

- 抓包嗅探：`pcapx.StartSniff(iface, opts...)` 监听网卡，`pcapx.OpenPcapFile` 解析 pcap 文件，配合 `pcapx.pcap_bpfFilter` 过滤、`pcapx.pcap_onHTTPFlow` / `pcapx.pcap_onTLSClientHello` / `pcapx.pcap_everyPacket` 等回调处理流量。
- 造包注入：`pcapx.PacketBuilder` 逐层构造数据包（`pcapx.ethernet_*` / `pcapx.ipv4_*` / `pcapx.tcp_*` / `pcapx.udp_*` / `pcapx.icmp_*` / `pcapx.arp_*` 选项），`pcapx.InjectRaw` / `pcapx.InjectTCP` / `pcapx.InjectIP` / `pcapx.InjectHTTPRequest` 注入到网络。
- 权限：`pcapx.FixPermission` / `pcapx.WithdrawPermission` 处理抓包权限。

与相邻库的关系：`pcapx` 是底层数据包能力，`synscan`/`finscan` 在其之上做端口扫描，`netstack`/`netutils` 处理路由；分析 TLS 指纹可结合 `ja3`。

> 共 61 个函数、66 个实例

## 实例

|实例名|类型|说明|
|:--|:--|:--|
| ICMP_CODE_PARAM_PROBLEM_BAD_LENGTH | `int` | 2 |
| ICMP_CODE_PARAM_PROBLEM_MISSING_OPTION | `int` | 1 |
| ICMP_CODE_PARAM_PROBLEM_POINTER_INDICATES_ERROR | `int` | 0 |
| ICMP_CODE_REDIRECT_HOST | `int` | 1 |
| ICMP_CODE_REDIRECT_NET | `int` | 0 |
| ICMP_CODE_REDIRECT_TOS_HOST | `int` | 12 |
| ICMP_CODE_REDIRECT_TOS_NET | `int` | 11 |
| ICMP_CODE_TIME_EXCEEDED_FRAG_REASS | `int` | 1 |
| ICMP_CODE_TIME_EXCEEDED_TTL | `int` | 0 |
| ICMP_CODE_UNREACH_COMM_ADMIN | `int` | 13 |
| ICMP_CODE_UNREACH_FRAGMENTATION_NEEDED | `int` | 4 |
| ICMP_CODE_UNREACH_HOST | `int` | 1 |
| ICMP_CODE_UNREACH_HOST_ADMIN | `int` | 10 |
| ICMP_CODE_UNREACH_HOST_PRECEDENCE | `int` | 14 |
| ICMP_CODE_UNREACH_HOST_TOS | `int` | 12 |
| ICMP_CODE_UNREACH_HOST_UNKNOWN | `int` | 7 |
| ICMP_CODE_UNREACH_NET | `int` | 0 |
| ICMP_CODE_UNREACH_NET_ADMIN | `int` | 9 |
| ICMP_CODE_UNREACH_NET_TOS | `int` | 11 |
| ICMP_CODE_UNREACH_NET_UNKNOWN | `int` | 6 |
| ICMP_CODE_UNREACH_PORT | `int` | 3 |
| ICMP_CODE_UNREACH_PRECEDENCE_CUTOFF | `int` | 15 |
| ICMP_CODE_UNREACH_PROTOCOL | `int` | 2 |
| ICMP_CODE_UNREACH_SRC_ISOLATED | `int` | 8 |
| ICMP_CODE_UNREACH_SRC_ROUTE_FAIL | `int` | 5 |
| ICMP_TYPE_ADDRESS_MASK_REPLY | `int` | 18 |
| ICMP_TYPE_ADDRESS_MASK_REQUEST | `int` | 17 |
| ICMP_TYPE_DEST_UNREACH | `int` | 3 |
| ICMP_TYPE_ECHO_REPLY | `int` | 0 |
| ICMP_TYPE_ECHO_REQUEST | `int` | 8 |
| ICMP_TYPE_INFO_REPLY | `int` | 16 |
| ICMP_TYPE_INFO_REQUEST | `int` | 15 |
| ICMP_TYPE_PARAM_PROBLEM | `int` | 12 |
| ICMP_TYPE_REDIRECT | `int` | 5 |
| ICMP_TYPE_ROUTER_ADVERTISEMENT | `int` | 9 |
| ICMP_TYPE_ROUTER_SOLICITATION | `int` | 10 |
| ICMP_TYPE_SRC_QUENCH | `int` | 4 |
| ICMP_TYPE_TIMESTAMP | `int` | 13 |
| ICMP_TYPE_TIMESTAMP_REPLY | `int` | 14 |
| ICMP_TYPE_TIME_EXCEEDED | `int` | 11 |
| IPV4_FLAG_DONT_FRAGMENT | `int` | 2 |
| IPV4_FLAG_EVIL_BIT | `int` | 4 |
| IPV4_FLAG_MORE_FRAGMENT | `int` | 1 |
| IPV4_PROTOCOL_AH | `int` | 51 |
| IPV4_PROTOCOL_ESP | `int` | 50 |
| IPV4_PROTOCOL_ETHERIP | `int` | 97 |
| IPV4_PROTOCOL_GRE | `int` | 47 |
| IPV4_PROTOCOL_ICMP | `int` | 1 |
| IPV4_PROTOCOL_IGMP | `int` | 2 |
| IPV4_PROTOCOL_IPIP | `int` | 94 |
| IPV4_PROTOCOL_MPLSINIP | `int` | 137 |
| IPV4_PROTOCOL_OSPF | `int` | 89 |
| IPV4_PROTOCOL_SCTP | `int` | 132 |
| IPV4_PROTOCOL_TCP | `int` | 6 |
| IPV4_PROTOCOL_UDP | `int` | 17 |
| IPV4_PROTOCOL_UDPLITE | `int` | 136 |
| IPV4_PROTOCOL_VRRP | `int` | 112 |
| TCP_FLAG_ACK | `int` | 16 |
| TCP_FLAG_CWR | `int` | 128 |
| TCP_FLAG_ECE | `int` | 64 |
| TCP_FLAG_FIN | `int` | 1 |
| TCP_FLAG_NS | `int` | 256 |
| TCP_FLAG_PSH | `int` | 8 |
| TCP_FLAG_RST | `int` | 4 |
| TCP_FLAG_SYN | `int` | 2 |
| TCP_FLAG_URG | `int` | 32 |

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [pcapx.FixPermission](#fixpermission) | - | `error` | 尝试修复 pcap 权限问题(SYN 扫描依赖原始套接字，需要相应权限) |
| [pcapx.GetStatistics](#getstatistics) | - | `*Statistics` | 获取 pcapx 注入流量过程中累计的统计信息(链路层、网络层、传输层) |
| [pcapx.WithPayload](#withpayload) | `payload []byte` | `BuilderConfigOption` | 为 pcapx.PacketBuilder 设置数据包的负载(Payload)内容 |
| [pcapx.WithdrawPermission](#withdrawpermission) | - | `error` | 撤销 pcap 权限 |
| [pcapx.arp_reply](#arp_reply) | `targetIp string, targetMac string` | `ArpConfig` | 构造一个 ARP 应答层，自动使用本机默认网卡的 IP 与 MAC 作为源 |
| [pcapx.arp_replyEx](#arp_replyex) | `srcTarget string, srcMac string, targetIp string, targetMac string` | `ArpConfig` | 构造一个完整指定源与目的信息的 ARP 应答层 |
| [pcapx.arp_request](#arp_request) | `ip string` | `ArpConfig` | 构造一个 ARP 请求层，自动使用本机默认网卡的 IP 与 MAC 作为源 |
| [pcapx.arp_requestEx](#arp_requestex) | `selfIP string, selfMac string, remoteIP string` | `ArpConfig` | 构造一个完整指定源信息的 ARP 请求层 |
| [pcapx.ethernet_dstMac](#ethernet_dstmac) | `dstMac any` | `EthernetOption` | 设置以太网帧的目的 MAC 地址 |
| [pcapx.ethernet_nextLayerType](#ethernet_nextlayertype) | `i any` | `EthernetOption` | 设置以太网帧的上层协议类型(EtherType) |
| [pcapx.ethernet_srcMac](#ethernet_srcmac) | `srcMac any` | `EthernetOption` | 设置以太网帧的源 MAC 地址 |
| [pcapx.icmp_id](#icmp_id) | `id any` | `ICMPOption` | 设置 ICMPv4 的标识符(Identifier)字段 |
| [pcapx.icmp_payload](#icmp_payload) | `i []byte` | `ICMPOption` | 设置 ICMPv4 的负载(Payload)数据 |
| [pcapx.icmp_seq](#icmp_seq) | `sequence any` | `ICMPOption` | 设置 ICMPv4 的序列号(Sequence)字段 |
| [pcapx.icmp_type](#icmp_type) | `icmpType any, icmpCode any` | `ICMPOption` | 设置 ICMPv4 的类型(Type)与代码(Code) |
| [pcapx.ipv4_dstOp](#ipv4_dstop) | `i any` | `IPv4Option` | 设置 IPv4 头部的目的 IP 地址 |
| [pcapx.ipv4_flags](#ipv4_flags) | `i any` | `IPv4Option` | 设置 IPv4 头部的标志位(如 DF、MF 等) |
| [pcapx.ipv4_fragment](#ipv4_fragment) | `i any` | `IPv4Option` | 设置 IPv4 头部的分片偏移(Fragment Offset)字段 |
| [pcapx.ipv4_id](#ipv4_id) | `i any` | `IPv4Option` | 设置 IPv4 头部的标识(Identification)字段 |
| [pcapx.ipv4_nextLayerProtocol](#ipv4_nextlayerprotocol) | `i any` | `IPv4Option` | 设置 IPv4 头部的上层协议(Protocol)字段 |
| [pcapx.ipv4_option](#ipv4_option) | `optType any, data []byte` | `IPv4Option` | 向 IPv4 头部追加一个选项(Option)，optType 为 nil 时清空全部选项 |
| [pcapx.ipv4_srcIp](#ipv4_srcip) | `i any` | `IPv4Option` | 设置 IPv4 头部的源 IP 地址 |
| [pcapx.ipv4_tos](#ipv4_tos) | `i any` | `IPv4Option` | 设置 IPv4 头部的 TOS(服务类型)字段 |
| [pcapx.ipv4_ttl](#ipv4_ttl) | `i any` | `IPv4Option` | 设置 IPv4 头部的 TTL(生存时间)字段 |
| [pcapx.loopback_family](#loopback_family) | `i any` | `LoopbackOption` | 设置 loopback(回环)层的协议族(ProtocolFamily) |
| [pcapx.loopback_payload](#loopback_payload) | `payload []byte` | `LoopbackOption` | 设置 loopback(回环)层所承载的负载数据 |
| [pcapx.tcp_ack](#tcp_ack) | `ack any` | `TCPOption` | 设置 TCP 头部的确认号(Acknowledgment Number) |
| [pcapx.tcp_dataOffset](#tcp_dataoffset) | `dataOffset any` | `TCPOption` | 设置 TCP 头部的数据偏移(Data Offset，即首部长度) |
| [pcapx.tcp_dstPort](#tcp_dstport) | `dstPort any` | `TCPOption` | 设置 TCP 头部的目的端口 |
| [pcapx.tcp_flag](#tcp_flag) | `in any` | `TCPOption` | 设置 TCP 头部的标志位(可用字符串、&#34;\|&#34;/&#34;,&#34; 分隔的组合或整数) |
| [pcapx.tcp_optionMSS](#tcp_optionmss) | `i any` | `TCPOption` | 设置 TCP 的 MSS(最大报文段长度)选项，默认 1460 |
| [pcapx.tcp_optionRaw](#tcp_optionraw) | `optionType any, data []byte` | `TCPOption` | 向 TCP 头部追加一个自定义选项，optionType 为 nil 时清空全部选项 |
| [pcapx.tcp_optionSACKPermitted](#tcp_optionsackpermitted) | - | `TCPOption` | 设置 TCP 的 SACK Permitted(允许选择性确认)选项 |
| [pcapx.tcp_optionTimestamp](#tcp_optiontimestamp) | `i any` | `TCPOption` | 设置 TCP 的 Timestamp(时间戳)选项 |
| [pcapx.tcp_optionWindowScale](#tcp_optionwindowscale) | `i any` | `TCPOption` | 设置 TCP 的窗口缩放(Window Scale)选项 |
| [pcapx.tcp_seq](#tcp_seq) | `seq any` | `TCPOption` | 设置 TCP 头部的序列号(Sequence Number) |
| [pcapx.tcp_srcPort](#tcp_srcport) | `srcPort any` | `TCPOption` | 设置 TCP 头部的源端口 |
| [pcapx.tcp_urgent](#tcp_urgent) | `urgent any` | `TCPOption` | 设置 TCP 头部的紧急指针(Urgent Pointer) |
| [pcapx.tcp_window](#tcp_window) | `window any` | `TCPOption` | 设置 TCP 头部的窗口大小(Window Size) |
| [pcapx.udp_dstPort](#udp_dstport) | `in any` | `UDPOption` | 设置 UDP 头部的目的端口 |
| [pcapx.udp_srcPort](#udp_srcport) | `in any` | `UDPOption` | 设置 UDP 头部的源端口 |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [pcapx.InjectChaosTraffic](#injectchaostraffic) | `t *ChaosTraffic, opts ...ConfigOption` | - | 根据 ChaosTraffic 结构中携带的各类负载，自动注入对应的混合流量 |
| [pcapx.InjectHTTPRequest](#injecthttprequest) | `raw []byte, opt ...ConfigOption` | - | 将一个 HTTP 请求按 TCP/IP 流量注入到网络 |
| [pcapx.InjectIP](#injectip) | `raw []byte, opt ...ConfigOption` | - | InjectTCPIP 解析并注入一个 TCP/IP 数据包(在 yak 中对应 pcapx.InjectTCP 和 pcapx.InjectIP) |
| [pcapx.InjectRaw](#injectraw) | `raw []byte, opt ...ConfigOption` | - | 将一个原始数据包(自链路层起的完整字节)直接注入到网卡发送 |
| [pcapx.InjectTCP](#injecttcp) | `raw []byte, opt ...ConfigOption` | - | InjectTCPIP 解析并注入一个 TCP/IP 数据包(在 yak 中对应 pcapx.InjectTCP 和 pcapx.InjectIP) |
| [pcapx.OpenPcapFile](#openpcapfile) | `filename string, opts ...CaptureOption` | `error` | 打开并解析一个 pcap 抓包文件，通过回调选项处理其中的流量 |
| [pcapx.PacketBuilder](#packetbuilder) | `opts ...any` | `[]byte, error` | 按照传入的各层配置选项组合并序列化出一个完整的数据包字节 |
| [pcapx.StartSniff](#startsniff) | `iface string, opts ...CaptureOption` | `error` | 在指定网卡上开始抓包(嗅探),通过回调选项处理捕获到的流量 |
| [pcapx.tcp_optionSACK](#tcp_optionsack) | `i ...any` | `TCPOption` | 设置 TCP 的 SACK(选择性确认)选项，可传入多个边界值 |

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

### GetStatistics {#getstatistics}

```go
GetStatistics() (result *Statistics)
```

获取 pcapx 注入流量过程中累计的统计信息(链路层、网络层、传输层)

在 yak 中通过 pcapx.GetStatistics 调用

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| result | `*Statistics` | 一个统计信息对象，包含各层地址命中计数 |

**示例**

``````````````yak
// 该示例为示意性用法：读取 pcapx 流量统计
stat = pcapx.GetStatistics()
println(stat)
``````````````

---

### WithPayload {#withpayload}

```go
WithPayload(payload []byte) BuilderConfigOption
```

为 pcapx.PacketBuilder 设置数据包的负载(Payload)内容

在 yak 中通过 pcapx.WithPayload 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| payload | `[]byte` | 负载字节数据 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `BuilderConfigOption` | 一个 pcapx.PacketBuilder 可接收的构建配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：构造带负载的数据包
raw = pcapx.PacketBuilder(pcapx.ipv4_srcIp("1.1.1.1"), pcapx.ipv4_dstOp("2.2.2.2"), pcapx.tcp_srcPort(12345), pcapx.tcp_dstPort(80), pcapx.WithPayload([]byte("hello")))~
println(len(raw))
``````````````

---

### WithdrawPermission {#withdrawpermission}

```go
WithdrawPermission() error
```

撤销 pcap 权限

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 撤销失败时返回错误 |

**示例**

``````````````yak
err := pcapx.Withdraw()
die(err)
``````````````

---

### arp_reply {#arp_reply}

```go
arp_reply(targetIp string, targetMac string) ArpConfig
```

构造一个 ARP 应答层，自动使用本机默认网卡的 IP 与 MAC 作为源

在 yak 中通过 pcapx.arp_reply 调用，配合 pcapx.PacketBuilder 使用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| targetIp | `string` | 目标(接收方) IP 地址 |
| targetMac | `string` | 目标(接收方) MAC 地址 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ArpConfig` | 一个 pcapx.PacketBuilder 可接收的 ARP 层配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：自动构造 ARP 应答
raw = pcapx.PacketBuilder(pcapx.arp_reply("192.168.1.2", "66:77:88:99:aa:bb"))~
println(len(raw))
``````````````

---

### arp_replyEx {#arp_replyex}

```go
arp_replyEx(srcTarget string, srcMac string, targetIp string, targetMac string) ArpConfig
```

构造一个完整指定源与目的信息的 ARP 应答层

在 yak 中通过 pcapx.arp_replyEx 调用，配合 pcapx.PacketBuilder 使用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| srcTarget | `string` | 应答中声明的源 IP 地址 |
| srcMac | `string` | 应答中声明的源 MAC 地址 |
| targetIp | `string` | 目标(接收方) IP 地址 |
| targetMac | `string` | 目标(接收方) MAC 地址 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ArpConfig` | 一个 pcapx.PacketBuilder 可接收的 ARP 层配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：构造 ARP 应答
raw = pcapx.PacketBuilder(pcapx.arp_replyEx("192.168.1.1", "00:11:22:33:44:55", "192.168.1.2", "66:77:88:99:aa:bb"))~
println(len(raw))
``````````````

---

### arp_request {#arp_request}

```go
arp_request(ip string) ArpConfig
```

构造一个 ARP 请求层，自动使用本机默认网卡的 IP 与 MAC 作为源

在 yak 中通过 pcapx.arp_request 调用，配合 pcapx.PacketBuilder 使用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| ip | `string` | 要查询的目标 IP 地址 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ArpConfig` | 一个 pcapx.PacketBuilder 可接收的 ARP 层配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：自动构造 ARP 请求
raw = pcapx.PacketBuilder(pcapx.arp_request("192.168.1.1"))~
println(len(raw))
``````````````

---

### arp_requestEx {#arp_requestex}

```go
arp_requestEx(selfIP string, selfMac string, remoteIP string) ArpConfig
```

构造一个完整指定源信息的 ARP 请求层

在 yak 中通过 pcapx.arp_requestEx 调用，配合 pcapx.PacketBuilder 使用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| selfIP | `string` | 本机(源) IP 地址 |
| selfMac | `string` | 本机(源) MAC 地址 |
| remoteIP | `string` | 要查询的目标 IP 地址 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ArpConfig` | 一个 pcapx.PacketBuilder 可接收的 ARP 层配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：构造 ARP 请求
raw = pcapx.PacketBuilder(pcapx.arp_requestEx("192.168.1.2", "00:11:22:33:44:55", "192.168.1.1"))~
println(len(raw))
``````````````

---

### ethernet_dstMac {#ethernet_dstmac}

```go
ethernet_dstMac(dstMac any) EthernetOption
```

设置以太网帧的目的 MAC 地址

在 yak 中通过 pcapx.ethernet_dstMac 调用，配合 pcapx.PacketBuilder 使用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| dstMac | `any` | 目的 MAC，可为 &#34;00:11:22:33:44:55&#34; 字符串或 net.HardwareAddr |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `EthernetOption` | 一个 pcapx.PacketBuilder 可接收的以太网层配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：构造带目的 MAC 的以太网帧
raw = pcapx.PacketBuilder(pcapx.ethernet_dstMac("ff:ff:ff:ff:ff:ff"))~
println(len(raw))
``````````````

---

### ethernet_nextLayerType {#ethernet_nextlayertype}

```go
ethernet_nextLayerType(i any) EthernetOption
```

设置以太网帧的上层协议类型(EtherType)

在 yak 中通过 pcapx.ethernet_nextLayerType 调用，配合 pcapx.PacketBuilder 使用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 上层协议类型，如 &#34;ipv4&#34;、&#34;ipv6&#34;、&#34;arp&#34;、&#34;mpls&#34;、&#34;pppoe&#34; 或数字 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `EthernetOption` | 一个 pcapx.PacketBuilder 可接收的以太网层配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：指定以太网上层为 ARP
raw = pcapx.PacketBuilder(pcapx.ethernet_nextLayerType("arp"))~
println(len(raw))
``````````````

---

### ethernet_srcMac {#ethernet_srcmac}

```go
ethernet_srcMac(srcMac any) EthernetOption
```

设置以太网帧的源 MAC 地址

在 yak 中通过 pcapx.ethernet_srcMac 调用，配合 pcapx.PacketBuilder 使用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| srcMac | `any` | 源 MAC，可为 &#34;00:11:22:33:44:55&#34; 字符串或 net.HardwareAddr |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `EthernetOption` | 一个 pcapx.PacketBuilder 可接收的以太网层配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：构造带源 MAC 的以太网帧
raw = pcapx.PacketBuilder(pcapx.ethernet_srcMac("00:11:22:33:44:55"))~
println(len(raw))
``````````````

---

### icmp_id {#icmp_id}

```go
icmp_id(id any) ICMPOption
```

设置 ICMPv4 的标识符(Identifier)字段

在 yak 中通过 pcapx.icmp_id 调用，配合 pcapx.PacketBuilder 使用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| id | `any` | 标识符值(0-65535) |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ICMPOption` | 一个 pcapx.PacketBuilder 可接收的 ICMP 层配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：设置 ICMP 标识符
raw = pcapx.PacketBuilder(pcapx.ipv4_srcIp("1.1.1.1"), pcapx.ipv4_dstOp("2.2.2.2"), pcapx.icmp_type(pcapx.ICMP_TYPE_ECHO_REQUEST, 0), pcapx.icmp_id(1))~
println(len(raw))
``````````````

---

### icmp_payload {#icmp_payload}

```go
icmp_payload(i []byte) ICMPOption
```

设置 ICMPv4 的负载(Payload)数据

在 yak 中通过 pcapx.icmp_payload 调用，配合 pcapx.PacketBuilder 使用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `[]byte` | 负载字节数据 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ICMPOption` | 一个 pcapx.PacketBuilder 可接收的 ICMP 层配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：设置 ICMP 负载
raw = pcapx.PacketBuilder(pcapx.ipv4_srcIp("1.1.1.1"), pcapx.ipv4_dstOp("2.2.2.2"), pcapx.icmp_type(pcapx.ICMP_TYPE_ECHO_REQUEST, 0), pcapx.icmp_payload([]byte("ping")))~
println(len(raw))
``````````````

---

### icmp_seq {#icmp_seq}

```go
icmp_seq(sequence any) ICMPOption
```

设置 ICMPv4 的序列号(Sequence)字段

在 yak 中通过 pcapx.icmp_seq 调用，配合 pcapx.PacketBuilder 使用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| sequence | `any` | 序列号(0-65535) |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ICMPOption` | 一个 pcapx.PacketBuilder 可接收的 ICMP 层配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：设置 ICMP 序列号
raw = pcapx.PacketBuilder(pcapx.ipv4_srcIp("1.1.1.1"), pcapx.ipv4_dstOp("2.2.2.2"), pcapx.icmp_type(pcapx.ICMP_TYPE_ECHO_REQUEST, 0), pcapx.icmp_seq(1))~
println(len(raw))
``````````````

---

### icmp_type {#icmp_type}

```go
icmp_type(icmpType any, icmpCode any) ICMPOption
```

设置 ICMPv4 的类型(Type)与代码(Code)

在 yak 中通过 pcapx.icmp_type 调用，可配合 pcapx.ICMP_TYPE_ECHO_REQUEST 等常量使用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| icmpType | `any` | ICMP 类型 |
| icmpCode | `any` | ICMP 代码，留空则默认为 0 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ICMPOption` | 一个 pcapx.PacketBuilder 可接收的 ICMP 层配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：构造一个 ICMP Echo 请求类型
raw = pcapx.PacketBuilder(pcapx.ipv4_srcIp("1.1.1.1"), pcapx.ipv4_dstOp("2.2.2.2"), pcapx.icmp_type(pcapx.ICMP_TYPE_ECHO_REQUEST, 0))~
println(len(raw))
``````````````

---

### ipv4_dstOp {#ipv4_dstop}

```go
ipv4_dstOp(i any) IPv4Option
```

设置 IPv4 头部的目的 IP 地址

在 yak 中通过 pcapx.ipv4_dstOp 调用，配合 pcapx.PacketBuilder 使用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 目的 IP 地址字符串，如 &#34;2.2.2.2&#34; |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `IPv4Option` | 一个 pcapx.PacketBuilder 可接收的 IPv4 层配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：设置 IPv4 目的地址
raw = pcapx.PacketBuilder(pcapx.ipv4_srcIp("1.1.1.1"), pcapx.ipv4_dstOp("2.2.2.2"))~
println(len(raw))
``````````````

---

### ipv4_flags {#ipv4_flags}

```go
ipv4_flags(i any) IPv4Option
```

设置 IPv4 头部的标志位(如 DF、MF 等)

在 yak 中通过 pcapx.ipv4_flags 调用，可配合 pcapx.IPV4_FLAG_DONT_FRAGMENT 等常量使用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 标志位值，取 layers.IPv4Flag 或整数 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `IPv4Option` | 一个 pcapx.PacketBuilder 可接收的 IPv4 层配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：设置 IPv4 不分片标志
raw = pcapx.PacketBuilder(pcapx.ipv4_srcIp("1.1.1.1"), pcapx.ipv4_dstOp("2.2.2.2"), pcapx.ipv4_flags(pcapx.IPV4_FLAG_DONT_FRAGMENT))~
println(len(raw))
``````````````

---

### ipv4_fragment {#ipv4_fragment}

```go
ipv4_fragment(i any) IPv4Option
```

设置 IPv4 头部的分片偏移(Fragment Offset)字段

在 yak 中通过 pcapx.ipv4_fragment 调用，配合 pcapx.PacketBuilder 使用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 分片偏移值 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `IPv4Option` | 一个 pcapx.PacketBuilder 可接收的 IPv4 层配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：设置 IPv4 分片偏移
raw = pcapx.PacketBuilder(pcapx.ipv4_srcIp("1.1.1.1"), pcapx.ipv4_dstOp("2.2.2.2"), pcapx.ipv4_fragment(0))~
println(len(raw))
``````````````

---

### ipv4_id {#ipv4_id}

```go
ipv4_id(i any) IPv4Option
```

设置 IPv4 头部的标识(Identification)字段

在 yak 中通过 pcapx.ipv4_id 调用，配合 pcapx.PacketBuilder 使用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 标识值(0-65535) |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `IPv4Option` | 一个 pcapx.PacketBuilder 可接收的 IPv4 层配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：设置 IPv4 标识
raw = pcapx.PacketBuilder(pcapx.ipv4_srcIp("1.1.1.1"), pcapx.ipv4_dstOp("2.2.2.2"), pcapx.ipv4_id(12345))~
println(len(raw))
``````````````

---

### ipv4_nextLayerProtocol {#ipv4_nextlayerprotocol}

```go
ipv4_nextLayerProtocol(i any) IPv4Option
```

设置 IPv4 头部的上层协议(Protocol)字段

在 yak 中通过 pcapx.ipv4_nextLayerProtocol 调用，配合 pcapx.PacketBuilder 使用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 上层协议，如 &#34;tcp&#34;、&#34;udp&#34;、&#34;icmp&#34; 或对应数字 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `IPv4Option` | 一个 pcapx.PacketBuilder 可接收的 IPv4 层配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：指定 IPv4 上层协议为 udp
raw = pcapx.PacketBuilder(pcapx.ipv4_srcIp("1.1.1.1"), pcapx.ipv4_dstOp("2.2.2.2"), pcapx.ipv4_nextLayerProtocol("udp"))~
println(len(raw))
``````````````

---

### ipv4_option {#ipv4_option}

```go
ipv4_option(optType any, data []byte) IPv4Option
```

向 IPv4 头部追加一个选项(Option)，optType 为 nil 时清空全部选项

在 yak 中通过 pcapx.ipv4_option 调用，配合 pcapx.PacketBuilder 使用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| optType | `any` | 选项类型，传 nil 表示清空所有选项 |
| data | `[]byte` | 选项数据字节 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `IPv4Option` | 一个 pcapx.PacketBuilder 可接收的 IPv4 层配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：追加一个 IPv4 选项
raw = pcapx.PacketBuilder(pcapx.ipv4_srcIp("1.1.1.1"), pcapx.ipv4_dstOp("2.2.2.2"), pcapx.ipv4_option(7, []byte{0x01}))~
println(len(raw))
``````````````

---

### ipv4_srcIp {#ipv4_srcip}

```go
ipv4_srcIp(i any) IPv4Option
```

设置 IPv4 头部的源 IP 地址

在 yak 中通过 pcapx.ipv4_srcIp 调用，配合 pcapx.PacketBuilder 使用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 源 IP 地址字符串，如 &#34;1.1.1.1&#34; |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `IPv4Option` | 一个 pcapx.PacketBuilder 可接收的 IPv4 层配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：设置 IPv4 源地址
raw = pcapx.PacketBuilder(pcapx.ipv4_srcIp("1.1.1.1"), pcapx.ipv4_dstOp("2.2.2.2"))~
println(len(raw))
``````````````

---

### ipv4_tos {#ipv4_tos}

```go
ipv4_tos(i any) IPv4Option
```

设置 IPv4 头部的 TOS(服务类型)字段

在 yak 中通过 pcapx.ipv4_tos 调用，配合 pcapx.PacketBuilder 使用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | TOS 值(0-255) |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `IPv4Option` | 一个 pcapx.PacketBuilder 可接收的 IPv4 层配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：设置 IPv4 TOS
raw = pcapx.PacketBuilder(pcapx.ipv4_srcIp("1.1.1.1"), pcapx.ipv4_dstOp("2.2.2.2"), pcapx.ipv4_tos(0))~
println(len(raw))
``````````````

---

### ipv4_ttl {#ipv4_ttl}

```go
ipv4_ttl(i any) IPv4Option
```

设置 IPv4 头部的 TTL(生存时间)字段

在 yak 中通过 pcapx.ipv4_ttl 调用，配合 pcapx.PacketBuilder 使用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | TTL 值(0-255) |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `IPv4Option` | 一个 pcapx.PacketBuilder 可接收的 IPv4 层配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：设置 IPv4 TTL
raw = pcapx.PacketBuilder(pcapx.ipv4_srcIp("1.1.1.1"), pcapx.ipv4_dstOp("2.2.2.2"), pcapx.ipv4_ttl(64))~
println(len(raw))
``````````````

---

### loopback_family {#loopback_family}

```go
loopback_family(i any) LoopbackOption
```

设置 loopback(回环)层的协议族(ProtocolFamily)

在 yak 中通过 pcapx.loopback_family 调用，配合 pcapx.PacketBuilder 使用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 协议族，取 layers.ProtocolFamily 类型值 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `LoopbackOption` | 一个 pcapx.PacketBuilder 可接收的 loopback 层配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：设置 loopback 协议族
raw = pcapx.PacketBuilder(pcapx.loopback_payload([]byte("data")))~
println(len(raw))
``````````````

---

### loopback_payload {#loopback_payload}

```go
loopback_payload(payload []byte) LoopbackOption
```

设置 loopback(回环)层所承载的负载数据

在 yak 中通过 pcapx.loopback_payload 调用，配合 pcapx.PacketBuilder 使用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| payload | `[]byte` | 负载字节数据 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `LoopbackOption` | 一个 pcapx.PacketBuilder 可接收的 loopback 层配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：设置 loopback 负载
raw = pcapx.PacketBuilder(pcapx.loopback_payload([]byte("data")))~
println(len(raw))
``````````````

---

### tcp_ack {#tcp_ack}

```go
tcp_ack(ack any) TCPOption
```

设置 TCP 头部的确认号(Acknowledgment Number)

在 yak 中通过 pcapx.tcp_ack 调用，配合 pcapx.PacketBuilder 使用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| ack | `any` | 确认号 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `TCPOption` | 一个 pcapx.PacketBuilder 可接收的 TCP 层配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：设置 TCP 确认号
raw = pcapx.PacketBuilder(pcapx.tcp_srcPort(12345), pcapx.tcp_dstPort(80), pcapx.tcp_ack(1001))~
println(len(raw))
``````````````

---

### tcp_dataOffset {#tcp_dataoffset}

```go
tcp_dataOffset(dataOffset any) TCPOption
```

设置 TCP 头部的数据偏移(Data Offset，即首部长度)

在 yak 中通过 pcapx.tcp_dataOffset 调用，配合 pcapx.PacketBuilder 使用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| dataOffset | `any` | 数据偏移值(以 4 字节为单位) |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `TCPOption` | 一个 pcapx.PacketBuilder 可接收的 TCP 层配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：设置 TCP 数据偏移
raw = pcapx.PacketBuilder(pcapx.tcp_srcPort(12345), pcapx.tcp_dstPort(80), pcapx.tcp_dataOffset(5))~
println(len(raw))
``````````````

---

### tcp_dstPort {#tcp_dstport}

```go
tcp_dstPort(dstPort any) TCPOption
```

设置 TCP 头部的目的端口

在 yak 中通过 pcapx.tcp_dstPort 调用，配合 pcapx.PacketBuilder 使用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| dstPort | `any` | 目的端口号(0-65535) |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `TCPOption` | 一个 pcapx.PacketBuilder 可接收的 TCP 层配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：设置 TCP 目的端口
raw = pcapx.PacketBuilder(pcapx.tcp_srcPort(12345), pcapx.tcp_dstPort(80))~
println(len(raw))
``````````````

---

### tcp_flag {#tcp_flag}

```go
tcp_flag(in any) TCPOption
```

设置 TCP 头部的标志位(可用字符串、&#34;|&#34;/&#34;,&#34; 分隔的组合或整数)

在 yak 中通过 pcapx.tcp_flag 调用，可配合 pcapx.TCP_FLAG_SYN 等常量使用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| in | `any` | 标志位，如 &#34;syn&#34;、&#34;syn\|ack&#34; 或整数组合 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `TCPOption` | 一个 pcapx.PacketBuilder 可接收的 TCP 层配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：构造 SYN 包标志
raw = pcapx.PacketBuilder(pcapx.tcp_srcPort(12345), pcapx.tcp_dstPort(80), pcapx.tcp_flag("syn"))~
println(len(raw))
``````````````

---

### tcp_optionMSS {#tcp_optionmss}

```go
tcp_optionMSS(i any) TCPOption
```

设置 TCP 的 MSS(最大报文段长度)选项，默认 1460

在 yak 中通过 pcapx.tcp_optionMSS 调用，配合 pcapx.PacketBuilder 使用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | MSS 值 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `TCPOption` | 一个 pcapx.PacketBuilder 可接收的 TCP 层配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：设置 TCP MSS 选项
raw = pcapx.PacketBuilder(pcapx.tcp_srcPort(12345), pcapx.tcp_dstPort(80), pcapx.tcp_optionMSS(1460))~
println(len(raw))
``````````````

---

### tcp_optionRaw {#tcp_optionraw}

```go
tcp_optionRaw(optionType any, data []byte) TCPOption
```

向 TCP 头部追加一个自定义选项，optionType 为 nil 时清空全部选项

在 yak 中通过 pcapx.tcp_optionRaw 调用，配合 pcapx.PacketBuilder 使用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| optionType | `any` | 选项类型，传 nil 表示清空所有选项 |
| data | `[]byte` | 选项数据字节(长度 +2 不能超过 255) |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `TCPOption` | 一个 pcapx.PacketBuilder 可接收的 TCP 层配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：追加一个原始 TCP 选项
raw = pcapx.PacketBuilder(pcapx.tcp_srcPort(12345), pcapx.tcp_dstPort(80), pcapx.tcp_optionRaw(8, []byte{0x00, 0x00}))~
println(len(raw))
``````````````

---

### tcp_optionSACKPermitted {#tcp_optionsackpermitted}

```go
tcp_optionSACKPermitted() TCPOption
```

设置 TCP 的 SACK Permitted(允许选择性确认)选项

在 yak 中通过 pcapx.tcp_optionSACKPermitted 调用，配合 pcapx.PacketBuilder 使用

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `TCPOption` | 一个 pcapx.PacketBuilder 可接收的 TCP 层配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：开启 TCP SACK Permitted 选项
raw = pcapx.PacketBuilder(pcapx.tcp_srcPort(12345), pcapx.tcp_dstPort(80), pcapx.tcp_optionSACKPermitted())~
println(len(raw))
``````````````

---

### tcp_optionTimestamp {#tcp_optiontimestamp}

```go
tcp_optionTimestamp(i any) TCPOption
```

设置 TCP 的 Timestamp(时间戳)选项

在 yak 中通过 pcapx.tcp_optionTimestamp 调用，配合 pcapx.PacketBuilder 使用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 时间戳值 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `TCPOption` | 一个 pcapx.PacketBuilder 可接收的 TCP 层配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：设置 TCP 时间戳选项
raw = pcapx.PacketBuilder(pcapx.tcp_srcPort(12345), pcapx.tcp_dstPort(80), pcapx.tcp_optionTimestamp(123456))~
println(len(raw))
``````````````

---

### tcp_optionWindowScale {#tcp_optionwindowscale}

```go
tcp_optionWindowScale(i any) TCPOption
```

设置 TCP 的窗口缩放(Window Scale)选项

在 yak 中通过 pcapx.tcp_optionWindowScale 调用，配合 pcapx.PacketBuilder 使用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 窗口缩放因子 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `TCPOption` | 一个 pcapx.PacketBuilder 可接收的 TCP 层配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：设置 TCP 窗口缩放选项
raw = pcapx.PacketBuilder(pcapx.tcp_srcPort(12345), pcapx.tcp_dstPort(80), pcapx.tcp_optionWindowScale(7))~
println(len(raw))
``````````````

---

### tcp_seq {#tcp_seq}

```go
tcp_seq(seq any) TCPOption
```

设置 TCP 头部的序列号(Sequence Number)

在 yak 中通过 pcapx.tcp_seq 调用，配合 pcapx.PacketBuilder 使用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| seq | `any` | 序列号 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `TCPOption` | 一个 pcapx.PacketBuilder 可接收的 TCP 层配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：设置 TCP 序列号
raw = pcapx.PacketBuilder(pcapx.tcp_srcPort(12345), pcapx.tcp_dstPort(80), pcapx.tcp_seq(1000))~
println(len(raw))
``````````````

---

### tcp_srcPort {#tcp_srcport}

```go
tcp_srcPort(srcPort any) TCPOption
```

设置 TCP 头部的源端口

在 yak 中通过 pcapx.tcp_srcPort 调用，配合 pcapx.PacketBuilder 使用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| srcPort | `any` | 源端口号(0-65535) |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `TCPOption` | 一个 pcapx.PacketBuilder 可接收的 TCP 层配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：设置 TCP 源端口
raw = pcapx.PacketBuilder(pcapx.tcp_srcPort(12345), pcapx.tcp_dstPort(80))~
println(len(raw))
``````````````

---

### tcp_urgent {#tcp_urgent}

```go
tcp_urgent(urgent any) TCPOption
```

设置 TCP 头部的紧急指针(Urgent Pointer)

在 yak 中通过 pcapx.tcp_urgent 调用，配合 pcapx.PacketBuilder 使用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| urgent | `any` | 紧急指针值 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `TCPOption` | 一个 pcapx.PacketBuilder 可接收的 TCP 层配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：设置 TCP 紧急指针
raw = pcapx.PacketBuilder(pcapx.tcp_srcPort(12345), pcapx.tcp_dstPort(80), pcapx.tcp_urgent(0))~
println(len(raw))
``````````````

---

### tcp_window {#tcp_window}

```go
tcp_window(window any) TCPOption
```

设置 TCP 头部的窗口大小(Window Size)

在 yak 中通过 pcapx.tcp_window 调用，配合 pcapx.PacketBuilder 使用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| window | `any` | 窗口大小(0-65535) |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `TCPOption` | 一个 pcapx.PacketBuilder 可接收的 TCP 层配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：设置 TCP 窗口大小
raw = pcapx.PacketBuilder(pcapx.tcp_srcPort(12345), pcapx.tcp_dstPort(80), pcapx.tcp_window(8192))~
println(len(raw))
``````````````

---

### udp_dstPort {#udp_dstport}

```go
udp_dstPort(in any) UDPOption
```

设置 UDP 头部的目的端口

在 yak 中通过 pcapx.udp_dstPort 调用，配合 pcapx.PacketBuilder 使用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| in | `any` | 目的端口号(0-65535) |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `UDPOption` | 一个 pcapx.PacketBuilder 可接收的 UDP 层配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：设置 UDP 目的端口
raw = pcapx.PacketBuilder(pcapx.udp_srcPort(12345), pcapx.udp_dstPort(53))~
println(len(raw))
``````````````

---

### udp_srcPort {#udp_srcport}

```go
udp_srcPort(in any) UDPOption
```

设置 UDP 头部的源端口

在 yak 中通过 pcapx.udp_srcPort 调用，配合 pcapx.PacketBuilder 使用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| in | `any` | 源端口号(0-65535) |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `UDPOption` | 一个 pcapx.PacketBuilder 可接收的 UDP 层配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：设置 UDP 源端口
raw = pcapx.PacketBuilder(pcapx.udp_srcPort(12345), pcapx.udp_dstPort(53))~
println(len(raw))
``````````````

---

## 可变参数函数详情

### InjectChaosTraffic {#injectchaostraffic}

```go
InjectChaosTraffic(t *ChaosTraffic, opts ...ConfigOption)
```

根据 ChaosTraffic 结构中携带的各类负载，自动注入对应的混合流量

在 yak 中通过 pcapx.InjectChaosTraffic 调用，支持 HTTP、TCP/IP、UDP/IP、ICMP/IP 等多种负载

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| t | `*ChaosTraffic` | ChaosTraffic 对象，包含待注入的各类负载 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...ConfigOption` | 可选配置项 |

**示例**

``````````````yak
// ChaosTraffic 可同时携带 HTTP、TCP/IP、UDP/IP、ICMP/IP 等多种负载，注入时按负载分别下发。
// 若只需注入单一 HTTP 负载，可直接使用底层原语 InjectHTTPRequest(需要发包权限)：
pcapx.InjectHTTPRequest("GET / HTTP/1.1\r\nHost: example.com\r\n\r\n")
``````````````

---

### InjectHTTPRequest {#injecthttprequest}

```go
InjectHTTPRequest(raw []byte, opt ...ConfigOption)
```

将一个 HTTP 请求按 TCP/IP 流量注入到网络

在 yak 中通过 pcapx.InjectHTTPRequest 调用，会自动从请求中解析目标地址

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| raw | `[]byte` | 原始 HTTP 请求字节 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opt | `...ConfigOption` | 可选配置项 |

**示例**

``````````````yak
// 该示例为示意性用法：注入一个 HTTP 请求(需要发包权限)
req = "GET / HTTP/1.1\r\nHost: example.com\r\n\r\n"
pcapx.InjectHTTPRequest([]byte(req))
``````````````

---

### InjectIP {#injectip}

```go
InjectIP(raw []byte, opt ...ConfigOption)
```

InjectTCPIP 解析并注入一个 TCP/IP 数据包(在 yak 中对应 pcapx.InjectTCP 和 pcapx.InjectIP)

需要通过配置项指定流量方向(发往服务端或客户端)

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| raw | `[]byte` | TCP/IP 层数据包字节 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opt | `...ConfigOption` | 可选配置项，需指定 pcapx.WithToServer 或 pcapx.WithToClient |

**示例**

``````````````yak
// 该示例为示意性用法：注入 TCP/IP 数据包(需要发包权限)
raw = pcapx.PacketBuilder(pcapx.ipv4_srcIp("1.1.1.1"), pcapx.ipv4_dstOp("2.2.2.2"), pcapx.tcp_srcPort(12345), pcapx.tcp_dstPort(80))~
pcapx.InjectTCP(raw)
``````````````

---

### InjectRaw {#injectraw}

```go
InjectRaw(raw []byte, opt ...ConfigOption)
```

将一个原始数据包(自链路层起的完整字节)直接注入到网卡发送

在 yak 中通过 pcapx.InjectRaw 调用，需要相应的网卡发包权限

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| raw | `[]byte` | 完整的原始数据包字节 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opt | `...ConfigOption` | 可选配置项，如指定网卡等 |

**示例**

``````````````yak
// 该示例为示意性用法：注入一个原始数据包(需要发包权限)
raw = pcapx.PacketBuilder(pcapx.ipv4_srcIp("1.1.1.1"), pcapx.ipv4_dstOp("2.2.2.2"), pcapx.tcp_srcPort(12345), pcapx.tcp_dstPort(80), pcapx.tcp_flag("syn"))~
pcapx.InjectRaw(raw)
``````````````

---

### InjectTCP {#injecttcp}

```go
InjectTCP(raw []byte, opt ...ConfigOption)
```

InjectTCPIP 解析并注入一个 TCP/IP 数据包(在 yak 中对应 pcapx.InjectTCP 和 pcapx.InjectIP)

需要通过配置项指定流量方向(发往服务端或客户端)

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| raw | `[]byte` | TCP/IP 层数据包字节 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opt | `...ConfigOption` | 可选配置项，需指定 pcapx.WithToServer 或 pcapx.WithToClient |

**示例**

``````````````yak
// 该示例为示意性用法：注入 TCP/IP 数据包(需要发包权限)
raw = pcapx.PacketBuilder(pcapx.ipv4_srcIp("1.1.1.1"), pcapx.ipv4_dstOp("2.2.2.2"), pcapx.tcp_srcPort(12345), pcapx.tcp_dstPort(80))~
pcapx.InjectTCP(raw)
``````````````

---

### OpenPcapFile {#openpcapfile}

```go
OpenPcapFile(filename string, opts ...CaptureOption) error
```

打开并解析一个 pcap 抓包文件，通过回调选项处理其中的流量

在 yak 中通过 pcapx.OpenPcapFile 调用

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| filename | `string` | pcap 文件路径 |

**可选参数**

可作为可变参数 `opts ...CaptureOption` 传入选项；共 11 个可用选项，详见 [CaptureOption 选项列表](#option-captureoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 解析过程中的错误 |

**示例**

``````````````yak
// 该示例为示意性用法：读取并解析一个 pcap 文件
pcapx.OpenPcapFile("/tmp/capture.pcap",

	pcapx.pcap_onHTTPRequest(func(flow, req) { println("got a http request") }),

)~
``````````````

---

### PacketBuilder {#packetbuilder}

```go
PacketBuilder(opts ...any) ([]byte, error)
```

按照传入的各层配置选项组合并序列化出一个完整的数据包字节

在 yak 中通过 pcapx.PacketBuilder 调用，可叠加链路层/网络层/传输层等多种选项

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...any` | 一组数据包构建选项(如 pcapx.ipv4_srcIp、pcapx.tcp_dstPort、pcapx.WithPayload 等) |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 序列化后的数据包字节 |
| r2 | `error` | 构建过程中的错误 |

**示例**

``````````````yak
// 该示例为示意性用法：构建一个 TCP SYN 数据包
raw = pcapx.PacketBuilder(

	pcapx.ipv4_srcIp("1.1.1.1"), pcapx.ipv4_dstOp("2.2.2.2"),
	pcapx.tcp_srcPort(12345), pcapx.tcp_dstPort(80), pcapx.tcp_flag("syn"),

)~
println(len(raw))
``````````````

---

### StartSniff {#startsniff}

```go
StartSniff(iface string, opts ...CaptureOption) error
```

在指定网卡上开始抓包(嗅探),通过回调选项处理捕获到的流量

在 yak 中通过 pcapx.StartSniff 调用，需要相应的抓包权限

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| iface | `string` | 网卡名称，多个网卡用逗号分隔 |

**可选参数**

可作为可变参数 `opts ...CaptureOption` 传入选项；共 11 个可用选项，详见 [CaptureOption 选项列表](#option-captureoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 抓包过程中的错误 |

**示例**

``````````````yak
// 该示例为示意性用法：在 eth0 上抓取 80 端口流量(需要抓包权限)
pcapx.StartSniff("eth0",

	pcapx.pcap_bpfFilter("tcp port 80"),
	pcapx.pcap_onHTTPFlow(func(flow, req, rsp) { println("got a http flow") }),

)~
``````````````

---

### tcp_optionSACK {#tcp_optionsack}

```go
tcp_optionSACK(i ...any) TCPOption
```

设置 TCP 的 SACK(选择性确认)选项，可传入多个边界值

在 yak 中通过 pcapx.tcp_optionSACK 调用，配合 pcapx.PacketBuilder 使用

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `...any` | 一组 SACK 边界值(每个占 4 字节) |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `TCPOption` | 一个 pcapx.PacketBuilder 可接收的 TCP 层配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：设置 TCP SACK 选项
raw = pcapx.PacketBuilder(pcapx.tcp_srcPort(12345), pcapx.tcp_dstPort(80), pcapx.tcp_optionSACK(1000, 2000))~
println(len(raw))
``````````````

---

## 可变参数选项列表

以下按选项类型汇总全部可变参数选项(原先重复在各主函数下的选项表已收拢到此处)：

### 1. 类型：CaptureOption {#option-captureoption}

涉及到的函数有：[pcapx.OpenPcapFile](#openpcapfile)、[pcapx.StartSniff](#startsniff)

|选项函数|参数|返回值|说明|
|:--|:--|:--|:--|
| `pcapx.pcap_bpfFilter` | `bpf string` | `CaptureOption` | 设置 BPF 过滤表达式，仅捕获匹配的流量 |
| `pcapx.pcap_debug` | `b bool` | `CaptureOption` | 设置是否开启抓包调试模式(输出更详细的调试日志) |
| `pcapx.pcap_disableAssembly` | `b bool` | `CaptureOption` | 设置是否禁用 TCP 流重组 |
| `pcapx.pcap_everyPacket` | `h func(packet gopacket.Packet)` | `CaptureOption` | 注册一个回调，对抓包过程中捕获到的每一个数据包执行处理 |
| `pcapx.pcap_onFlowClosed` | `h func(reason TrafficFlowCloseReason, flow *TrafficFlow)` | `CaptureOption` | 注册一个回调，当某个流量会话(Flow)关闭时触发 |
| `pcapx.pcap_onFlowCreated` | `h func(flow *TrafficFlow)` | `CaptureOption` | 注册一个回调，当有新的流量会话(Flow)创建时触发 |
| `pcapx.pcap_onFlowDataFrame` | `h func(flow *TrafficFlow, conn *TrafficConnection, frame *TrafficFrame)` | `CaptureOption` | 注册一个回调，当数据帧经过流重组后触发 |
| `pcapx.pcap_onFlowDataFrameNoReassembled` | `h func(flow *TrafficFlow, conn *TrafficConnection, frame *TrafficFrame)` | `CaptureOption` | 注册一个回调，当数据帧到达(未经流重组)时触发 |
| `pcapx.pcap_onHTTPFlow` | `h func(flow *TrafficFlow, req *http.Request, rsp *http.Response)` | `CaptureOption` | 注册一个回调，当从流量中解析出完整的 HTTP 请求-响应对时触发 |
| `pcapx.pcap_onHTTPRequest` | `h func(flow *TrafficFlow, req *http.Request)` | `CaptureOption` | 注册一个回调，当从流量中解析出 HTTP 请求时触发 |
| `pcapx.pcap_onTLSClientHello` | `h func(flow *TrafficFlow, hello *tlsutils.HandshakeClientHello)` | `CaptureOption` | 注册一个回调，当捕获到 TLS ClientHello 报文时触发 |

