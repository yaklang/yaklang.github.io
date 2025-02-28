# pcapx

|实例名|实例描述|
|:------|:--------|
ICMP_CODE_PARAM_PROBLEM_BAD_LENGTH|(int) 2|
ICMP_CODE_PARAM_PROBLEM_MISSING_OPTION|(int) 1|
ICMP_CODE_PARAM_PROBLEM_POINTER_INDICATES_ERROR|(int) 0|
ICMP_CODE_REDIRECT_HOST|(int) 1|
ICMP_CODE_REDIRECT_NET|(int) 0|
ICMP_CODE_REDIRECT_TOS_HOST|(int) 12|
ICMP_CODE_REDIRECT_TOS_NET|(int) 11|
ICMP_CODE_TIME_EXCEEDED_FRAG_REASS|(int) 1|
ICMP_CODE_TIME_EXCEEDED_TTL|(int) 0|
ICMP_CODE_UNREACH_COMM_ADMIN|(int) 13|
ICMP_CODE_UNREACH_FRAGMENTATION_NEEDED|(int) 4|
ICMP_CODE_UNREACH_HOST|(int) 1|
ICMP_CODE_UNREACH_HOST_ADMIN|(int) 10|
ICMP_CODE_UNREACH_HOST_PRECEDENCE|(int) 14|
ICMP_CODE_UNREACH_HOST_TOS|(int) 12|
ICMP_CODE_UNREACH_HOST_UNKNOWN|(int) 7|
ICMP_CODE_UNREACH_NET|(int) 0|
ICMP_CODE_UNREACH_NET_ADMIN|(int) 9|
ICMP_CODE_UNREACH_NET_TOS|(int) 11|
ICMP_CODE_UNREACH_NET_UNKNOWN|(int) 6|
ICMP_CODE_UNREACH_PORT|(int) 3|
ICMP_CODE_UNREACH_PRECEDENCE_CUTOFF|(int) 15|
ICMP_CODE_UNREACH_PROTOCOL|(int) 2|
ICMP_CODE_UNREACH_SRC_ISOLATED|(int) 8|
ICMP_CODE_UNREACH_SRC_ROUTE_FAIL|(int) 5|
ICMP_TYPE_ADDRESS_MASK_REPLY|(int) 18|
ICMP_TYPE_ADDRESS_MASK_REQUEST|(int) 17|
ICMP_TYPE_DEST_UNREACH|(int) 3|
ICMP_TYPE_ECHO_REPLY|(int) 0|
ICMP_TYPE_ECHO_REQUEST|(int) 8|
ICMP_TYPE_INFO_REPLY|(int) 16|
ICMP_TYPE_INFO_REQUEST|(int) 15|
ICMP_TYPE_PARAM_PROBLEM|(int) 12|
ICMP_TYPE_REDIRECT|(int) 5|
ICMP_TYPE_ROUTER_ADVERTISEMENT|(int) 9|
ICMP_TYPE_ROUTER_SOLICITATION|(int) 10|
ICMP_TYPE_SRC_QUENCH|(int) 4|
ICMP_TYPE_TIMESTAMP|(int) 13|
ICMP_TYPE_TIMESTAMP_REPLY|(int) 14|
ICMP_TYPE_TIME_EXCEEDED|(int) 11|
IPV4_FLAG_DONT_FRAGMENT|(int) 2|
IPV4_FLAG_EVIL_BIT|(int) 4|
IPV4_FLAG_MORE_FRAGMENT|(int) 1|
IPV4_PROTOCOL_AH|(int) 51|
IPV4_PROTOCOL_ESP|(int) 50|
IPV4_PROTOCOL_ETHERIP|(int) 97|
IPV4_PROTOCOL_GRE|(int) 47|
IPV4_PROTOCOL_ICMP|(int) 1|
IPV4_PROTOCOL_IGMP|(int) 2|
IPV4_PROTOCOL_IPIP|(int) 94|
IPV4_PROTOCOL_MPLSINIP|(int) 137|
IPV4_PROTOCOL_OSPF|(int) 89|
IPV4_PROTOCOL_SCTP|(int) 132|
IPV4_PROTOCOL_TCP|(int) 6|
IPV4_PROTOCOL_UDP|(int) 17|
IPV4_PROTOCOL_UDPLITE|(int) 136|
IPV4_PROTOCOL_VRRP|(int) 112|
TCP_FLAG_ACK|(int) 16|
TCP_FLAG_CWR|(int) 128|
TCP_FLAG_ECE|(int) 64|
TCP_FLAG_FIN|(int) 1|
TCP_FLAG_NS|(int) 256|
TCP_FLAG_PSH|(int) 8|
TCP_FLAG_RST|(int) 4|
TCP_FLAG_SYN|(int) 2|
TCP_FLAG_URG|(int) 32|

|函数名|函数描述/介绍|
|:------|:--------|
| [pcapx.FixPermission](#fixpermission) |FixPermission 尝试修复 pcap 权限问题  |
| [pcapx.GetStatistics](#getstatistics) ||
| [pcapx.InjectChaosTraffic](#injectchaostraffic) ||
| [pcapx.InjectHTTPRequest](#injecthttprequest) ||
| [pcapx.InjectIP](#injectip) ||
| [pcapx.InjectRaw](#injectraw) ||
| [pcapx.InjectTCP](#injecttcp) ||
| [pcapx.OpenPcapFile](#openpcapfile) ||
| [pcapx.StartSniff](#startsniff) ||
| [pcapx.WithdrawPermission](#withdrawpermission) |WithdrawPermission 撤销 pcap 权限  |
| [pcapx.arp_reply](#arp_reply) ||
| [pcapx.arp_replyEx](#arp_replyex) ||
| [pcapx.arp_request](#arp_request) ||
| [pcapx.arp_requestEx](#arp_requestex) ||
| [pcapx.ethernet_dstMac](#ethernet_dstmac) ||
| [pcapx.ethernet_nextLayerType](#ethernet_nextlayertype) ||
| [pcapx.ethernet_srcMac](#ethernet_srcmac) ||
| [pcapx.icmp_id](#icmp_id) ||
| [pcapx.icmp_payload](#icmp_payload) ||
| [pcapx.icmp_seq](#icmp_seq) ||
| [pcapx.icmp_type](#icmp_type) ||
| [pcapx.ipv4_dstOp](#ipv4_dstop) ||
| [pcapx.ipv4_flags](#ipv4_flags) ||
| [pcapx.ipv4_fragment](#ipv4_fragment) ||
| [pcapx.ipv4_id](#ipv4_id) ||
| [pcapx.ipv4_nextLayerProtocol](#ipv4_nextlayerprotocol) ||
| [pcapx.ipv4_option](#ipv4_option) ||
| [pcapx.ipv4_srcIp](#ipv4_srcip) ||
| [pcapx.ipv4_tos](#ipv4_tos) ||
| [pcapx.ipv4_ttl](#ipv4_ttl) ||
| [pcapx.loopback_family](#loopback_family) ||
| [pcapx.loopback_payload](#loopback_payload) ||
| [pcapx.pcap_bpfFilter](#pcap_bpffilter) ||
| [pcapx.pcap_debug](#pcap_debug) ||
| [pcapx.pcap_disableAssembly](#pcap_disableassembly) ||
| [pcapx.pcap_everyPacket](#pcap_everypacket) ||
| [pcapx.pcap_onFlowClosed](#pcap_onflowclosed) ||
| [pcapx.pcap_onFlowCreated](#pcap_onflowcreated) ||
| [pcapx.pcap_onFlowDataFrame](#pcap_onflowdataframe) ||
| [pcapx.pcap_onFlowDataFrameNoReassembled](#pcap_onflowdataframenoreassembled) ||
| [pcapx.pcap_onHTTPFlow](#pcap_onhttpflow) ||
| [pcapx.pcap_onHTTPRequest](#pcap_onhttprequest) ||
| [pcapx.pcap_onTLSClientHello](#pcap_ontlsclienthello) ||
| [pcapx.tcp_ack](#tcp_ack) ||
| [pcapx.tcp_dataOffset](#tcp_dataoffset) ||
| [pcapx.tcp_dstPort](#tcp_dstport) ||
| [pcapx.tcp_flag](#tcp_flag) ||
| [pcapx.tcp_optionMSS](#tcp_optionmss) |WithTCP_OptionMSS is a IPv4Option default 1460 |
| [pcapx.tcp_optionRaw](#tcp_optionraw) ||
| [pcapx.tcp_optionSACK](#tcp_optionsack) ||
| [pcapx.tcp_optionSACKPermitted](#tcp_optionsackpermitted) ||
| [pcapx.tcp_optionTimestamp](#tcp_optiontimestamp) ||
| [pcapx.tcp_optionWindowScale](#tcp_optionwindowscale) ||
| [pcapx.tcp_seq](#tcp_seq) ||
| [pcapx.tcp_srcPort](#tcp_srcport) ||
| [pcapx.tcp_urgent](#tcp_urgent) ||
| [pcapx.tcp_window](#tcp_window) ||
| [pcapx.udp_dstPort](#udp_dstport) ||
| [pcapx.udp_srcPort](#udp_srcport) ||


## 函数定义
### FixPermission

#### 详细描述
FixPermission 尝试修复 pcap 权限问题

Example:
```
err := pcapx.FixPermission()
die(err) // 没有错误，即可正常使用 syn 扫描
...
```


#### 定义

`FixPermission() error`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### GetStatistics

#### 详细描述


#### 定义

`GetStatistics() *Statistics`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*Statistics` |   |


### InjectChaosTraffic

#### 详细描述


#### 定义

`InjectChaosTraffic(t *ChaosTraffic, opts ...ConfigOption)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| t | `*ChaosTraffic` |   |
| opts | `...ConfigOption` |   |


### InjectHTTPRequest

#### 详细描述


#### 定义

`InjectHTTPRequest(raw []byte, opt ...ConfigOption)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` |   |
| opt | `...ConfigOption` |   |


### InjectIP

#### 详细描述


#### 定义

`InjectIP(raw []byte, opt ...ConfigOption)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` |   |
| opt | `...ConfigOption` |   |


### InjectRaw

#### 详细描述


#### 定义

`InjectRaw(raw []byte, opt ...ConfigOption)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` |   |
| opt | `...ConfigOption` |   |


### InjectTCP

#### 详细描述


#### 定义

`InjectTCP(raw []byte, opt ...ConfigOption)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` |   |
| opt | `...ConfigOption` |   |


### OpenPcapFile

#### 详细描述


#### 定义

`OpenPcapFile(filename string, opts ...CaptureOption) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| filename | `string` |   |
| opts | `...CaptureOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### StartSniff

#### 详细描述


#### 定义

`StartSniff(iface string, opts ...CaptureOption) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| iface | `string` |   |
| opts | `...CaptureOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### WithdrawPermission

#### 详细描述
WithdrawPermission 撤销 pcap 权限

Example:
```
err := pcapx.Withdraw()
die(err)
...
```


#### 定义

`WithdrawPermission() error`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### arp_reply

#### 详细描述


#### 定义

`arp_reply(targetIp string, targetMac string) ArpConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| targetIp | `string` |   |
| targetMac | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ArpConfig` |   |


### arp_replyEx

#### 详细描述


#### 定义

`arp_replyEx(srcTarget string, srcMac string, targetIp string, targetMac string) ArpConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| srcTarget | `string` |   |
| srcMac | `string` |   |
| targetIp | `string` |   |
| targetMac | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ArpConfig` |   |


### arp_request

#### 详细描述


#### 定义

`arp_request(ip string) ArpConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ip | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ArpConfig` |   |


### arp_requestEx

#### 详细描述


#### 定义

`arp_requestEx(selfIP string, selfMac string, remoteIP string) ArpConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| selfIP | `string` |   |
| selfMac | `string` |   |
| remoteIP | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ArpConfig` |   |


### ethernet_dstMac

#### 详细描述


#### 定义

`ethernet_dstMac(dstMac any) EthernetOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| dstMac | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `EthernetOption` |   |


### ethernet_nextLayerType

#### 详细描述


#### 定义

`ethernet_nextLayerType(i any) EthernetOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `EthernetOption` |   |


### ethernet_srcMac

#### 详细描述


#### 定义

`ethernet_srcMac(srcMac any) EthernetOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| srcMac | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `EthernetOption` |   |


### icmp_id

#### 详细描述


#### 定义

`icmp_id(id any) ICMPOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| id | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ICMPOption` |   |


### icmp_payload

#### 详细描述


#### 定义

`icmp_payload(i []byte) ICMPOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ICMPOption` |   |


### icmp_seq

#### 详细描述


#### 定义

`icmp_seq(sequence any) ICMPOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| sequence | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ICMPOption` |   |


### icmp_type

#### 详细描述


#### 定义

`icmp_type(icmpType any, icmpCode any) ICMPOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| icmpType | `any` |   |
| icmpCode | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ICMPOption` |   |


### ipv4_dstOp

#### 详细描述


#### 定义

`ipv4_dstOp(i any) IPv4Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `IPv4Option` |   |


### ipv4_flags

#### 详细描述


#### 定义

`ipv4_flags(i any) IPv4Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `IPv4Option` |   |


### ipv4_fragment

#### 详细描述


#### 定义

`ipv4_fragment(i any) IPv4Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `IPv4Option` |   |


### ipv4_id

#### 详细描述


#### 定义

`ipv4_id(i any) IPv4Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `IPv4Option` |   |


### ipv4_nextLayerProtocol

#### 详细描述


#### 定义

`ipv4_nextLayerProtocol(i any) IPv4Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `IPv4Option` |   |


### ipv4_option

#### 详细描述


#### 定义

`ipv4_option(optType any, data []byte) IPv4Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| optType | `any` |   |
| data | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `IPv4Option` |   |


### ipv4_srcIp

#### 详细描述


#### 定义

`ipv4_srcIp(i any) IPv4Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `IPv4Option` |   |


### ipv4_tos

#### 详细描述


#### 定义

`ipv4_tos(i any) IPv4Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `IPv4Option` |   |


### ipv4_ttl

#### 详细描述


#### 定义

`ipv4_ttl(i any) IPv4Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `IPv4Option` |   |


### loopback_family

#### 详细描述


#### 定义

`loopback_family(i any) LoopbackOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `LoopbackOption` |   |


### loopback_payload

#### 详细描述


#### 定义

`loopback_payload(payload []byte) LoopbackOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| payload | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `LoopbackOption` |   |


### pcap_bpfFilter

#### 详细描述


#### 定义

`pcap_bpfFilter(bpf string) CaptureOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| bpf | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CaptureOption` |   |


### pcap_debug

#### 详细描述


#### 定义

`pcap_debug(b bool) CaptureOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CaptureOption` |   |


### pcap_disableAssembly

#### 详细描述


#### 定义

`pcap_disableAssembly(b bool) CaptureOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CaptureOption` |   |


### pcap_everyPacket

#### 详细描述


#### 定义

`pcap_everyPacket(h func(packet gopacket.Packet)) CaptureOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `func(packet gopacket.Packet)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CaptureOption` |   |


### pcap_onFlowClosed

#### 详细描述


#### 定义

`pcap_onFlowClosed(h func(reason TrafficFlowCloseReason, flow *TrafficFlow)) CaptureOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `func(reason TrafficFlowCloseReason, flow *TrafficFlow)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CaptureOption` |   |


### pcap_onFlowCreated

#### 详细描述


#### 定义

`pcap_onFlowCreated(h func(flow *TrafficFlow)) CaptureOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `func(flow *TrafficFlow)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CaptureOption` |   |


### pcap_onFlowDataFrame

#### 详细描述


#### 定义

`pcap_onFlowDataFrame(h func(flow *TrafficFlow, conn *TrafficConnection, frame *TrafficFrame)) CaptureOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `func(flow *TrafficFlow, conn *TrafficConnection, frame *TrafficFrame)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CaptureOption` |   |


### pcap_onFlowDataFrameNoReassembled

#### 详细描述


#### 定义

`pcap_onFlowDataFrameNoReassembled(h func(flow *TrafficFlow, conn *TrafficConnection, frame *TrafficFrame)) CaptureOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `func(flow *TrafficFlow, conn *TrafficConnection, frame *TrafficFrame)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CaptureOption` |   |


### pcap_onHTTPFlow

#### 详细描述


#### 定义

`pcap_onHTTPFlow(h func(flow *TrafficFlow, req *http.Request, rsp *http.Response)) CaptureOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `func(flow *TrafficFlow, req *http.Request, rsp *http.Response)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CaptureOption` |   |


### pcap_onHTTPRequest

#### 详细描述


#### 定义

`pcap_onHTTPRequest(h func(flow *TrafficFlow, req *http.Request)) CaptureOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `func(flow *TrafficFlow, req *http.Request)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CaptureOption` |   |


### pcap_onTLSClientHello

#### 详细描述


#### 定义

`pcap_onTLSClientHello(h func(flow *TrafficFlow, hello *tlsutils.HandshakeClientHello)) CaptureOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `func(flow *TrafficFlow, hello *tlsutils.HandshakeClientHello)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CaptureOption` |   |


### tcp_ack

#### 详细描述


#### 定义

`tcp_ack(ack any) TCPOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ack | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `TCPOption` |   |


### tcp_dataOffset

#### 详细描述


#### 定义

`tcp_dataOffset(dataOffset any) TCPOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| dataOffset | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `TCPOption` |   |


### tcp_dstPort

#### 详细描述


#### 定义

`tcp_dstPort(dstPort any) TCPOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| dstPort | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `TCPOption` |   |


### tcp_flag

#### 详细描述


#### 定义

`tcp_flag(in any) TCPOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| in | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `TCPOption` |   |


### tcp_optionMSS

#### 详细描述
WithTCP_OptionMSS is a IPv4Option default 1460


#### 定义

`tcp_optionMSS(i any) TCPOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `TCPOption` |   |


### tcp_optionRaw

#### 详细描述


#### 定义

`tcp_optionRaw(optionType any, data []byte) TCPOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| optionType | `any` |   |
| data | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `TCPOption` |   |


### tcp_optionSACK

#### 详细描述


#### 定义

`tcp_optionSACK(i ...any) TCPOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `TCPOption` |   |


### tcp_optionSACKPermitted

#### 详细描述


#### 定义

`tcp_optionSACKPermitted() TCPOption`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `TCPOption` |   |


### tcp_optionTimestamp

#### 详细描述


#### 定义

`tcp_optionTimestamp(i any) TCPOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `TCPOption` |   |


### tcp_optionWindowScale

#### 详细描述


#### 定义

`tcp_optionWindowScale(i any) TCPOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `TCPOption` |   |


### tcp_seq

#### 详细描述


#### 定义

`tcp_seq(seq any) TCPOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| seq | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `TCPOption` |   |


### tcp_srcPort

#### 详细描述


#### 定义

`tcp_srcPort(srcPort any) TCPOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| srcPort | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `TCPOption` |   |


### tcp_urgent

#### 详细描述


#### 定义

`tcp_urgent(urgent any) TCPOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| urgent | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `TCPOption` |   |


### tcp_window

#### 详细描述


#### 定义

`tcp_window(window any) TCPOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| window | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `TCPOption` |   |


### udp_dstPort

#### 详细描述


#### 定义

`udp_dstPort(in any) UDPOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| in | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `UDPOption` |   |


### udp_srcPort

#### 详细描述


#### 定义

`udp_srcPort(in any) UDPOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| in | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `UDPOption` |   |


