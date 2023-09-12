# pcapx

|成员函数|函数描述/介绍|
|:------|:--------|
| [pcapx.GetStatistics](#GetStatistics) ||
| [pcapx.InjectChaosTraffic](#InjectChaosTraffic) ||
| [pcapx.InjectHTTPRequest](#InjectHTTPRequest) ||
| [pcapx.InjectIP](#InjectIP) ||
| [pcapx.InjectRaw](#InjectRaw) ||
| [pcapx.InjectTCP](#InjectTCP) ||
| [pcapx.arp_reply](#arp_reply) ||
| [pcapx.arp_replyEx](#arp_replyEx) ||
| [pcapx.arp_request](#arp_request) ||
| [pcapx.arp_requestEx](#arp_requestEx) ||
| [pcapx.ethernet_dstMac](#ethernet_dstMac) ||
| [pcapx.ethernet_nextLayerType](#ethernet_nextLayerType) ||
| [pcapx.ethernet_srcMac](#ethernet_srcMac) ||
| [pcapx.icmp_id](#icmp_id) ||
| [pcapx.icmp_payload](#icmp_payload) ||
| [pcapx.icmp_seq](#icmp_seq) ||
| [pcapx.icmp_type](#icmp_type) ||
| [pcapx.ipv4_dstOp](#ipv4_dstOp) ||
| [pcapx.ipv4_flags](#ipv4_flags) ||
| [pcapx.ipv4_fragment](#ipv4_fragment) ||
| [pcapx.ipv4_id](#ipv4_id) ||
| [pcapx.ipv4_nextLayerProtocol](#ipv4_nextLayerProtocol) ||
| [pcapx.ipv4_option](#ipv4_option) ||
| [pcapx.ipv4_srcIp](#ipv4_srcIp) ||
| [pcapx.ipv4_tos](#ipv4_tos) ||
| [pcapx.ipv4_ttl](#ipv4_ttl) ||
| [pcapx.tcp_ack](#tcp_ack) ||
| [pcapx.tcp_dataOffset](#tcp_dataOffset) ||
| [pcapx.tcp_dstPort](#tcp_dstPort) ||
| [pcapx.tcp_flag](#tcp_flag) ||
| [pcapx.tcp_optionMSS](#tcp_optionMSS) |WithTCP_OptionMSS is a IPv4Option default 1460|
| [pcapx.tcp_optionRaw](#tcp_optionRaw) ||
| [pcapx.tcp_optionSACK](#tcp_optionSACK) ||
| [pcapx.tcp_optionSACKPermitted](#tcp_optionSACKPermitted) ||
| [pcapx.tcp_optionTimestamp](#tcp_optionTimestamp) ||
| [pcapx.tcp_optionWindowScale](#tcp_optionWindowScale) ||
| [pcapx.tcp_seq](#tcp_seq) ||
| [pcapx.tcp_srcPort](#tcp_srcPort) ||
| [pcapx.tcp_urgent](#tcp_urgent) ||
| [pcapx.tcp_window](#tcp_window) ||
| [pcapx.udp_dstPort](#udp_dstPort) ||
| [pcapx.udp_srcPort](#udp_srcPort) ||


## 函数定义
### pcapx.GetStatistics

#### 详细描述


#### 定义

`GetStatistics() *Statistics`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*Statistics` |   |


### pcapx.InjectChaosTraffic

#### 详细描述


#### 定义

`InjectChaosTraffic(t *ChaosTraffic, opts ...ConfigOption)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| t | `*ChaosTraffic` |   |
| opts | `...ConfigOption` |   |


### pcapx.InjectHTTPRequest

#### 详细描述


#### 定义

`InjectHTTPRequest(raw []byte, opt ...ConfigOption)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` |   |
| opt | `...ConfigOption` |   |


### pcapx.InjectIP

#### 详细描述


#### 定义

`InjectIP(raw []byte, opt ...ConfigOption)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` |   |
| opt | `...ConfigOption` |   |


### pcapx.InjectRaw

#### 详细描述


#### 定义

`InjectRaw(raw []byte, opt ...ConfigOption)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` |   |
| opt | `...ConfigOption` |   |


### pcapx.InjectTCP

#### 详细描述


#### 定义

`InjectTCP(raw []byte, opt ...ConfigOption)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` |   |
| opt | `...ConfigOption` |   |


### pcapx.arp_reply

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


### pcapx.arp_replyEx

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


### pcapx.arp_request

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


### pcapx.arp_requestEx

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


### pcapx.ethernet_dstMac

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


### pcapx.ethernet_nextLayerType

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


### pcapx.ethernet_srcMac

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


### pcapx.icmp_id

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


### pcapx.icmp_payload

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


### pcapx.icmp_seq

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


### pcapx.icmp_type

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


### pcapx.ipv4_dstOp

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


### pcapx.ipv4_flags

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


### pcapx.ipv4_fragment

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


### pcapx.ipv4_id

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


### pcapx.ipv4_nextLayerProtocol

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


### pcapx.ipv4_option

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


### pcapx.ipv4_srcIp

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


### pcapx.ipv4_tos

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


### pcapx.ipv4_ttl

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


### pcapx.tcp_ack

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


### pcapx.tcp_dataOffset

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


### pcapx.tcp_dstPort

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


### pcapx.tcp_flag

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


### pcapx.tcp_optionMSS

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


### pcapx.tcp_optionRaw

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


### pcapx.tcp_optionSACK

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


### pcapx.tcp_optionSACKPermitted

#### 详细描述


#### 定义

`tcp_optionSACKPermitted() TCPOption`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `TCPOption` |   |


### pcapx.tcp_optionTimestamp

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


### pcapx.tcp_optionWindowScale

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


### pcapx.tcp_seq

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


### pcapx.tcp_srcPort

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


### pcapx.tcp_urgent

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


### pcapx.tcp_window

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


### pcapx.udp_dstPort

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


### pcapx.udp_srcPort

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


