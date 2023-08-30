# pcapx


|成员函数|函数描述/介绍|
|:------|:--------|
 | [pcapx.GetStatistics](#pcapxgetstatistics) |  |
 | [pcapx.InjectChaosTraffic](#pcapxinjectchaostraffic) |  |
 | [pcapx.InjectHTTPRequest](#pcapxinjecthttprequest) |  |
 | [pcapx.InjectIP](#pcapxinjectip) |  |
 | [pcapx.InjectRaw](#pcapxinjectraw) |  |
 | [pcapx.InjectTCP](#pcapxinjecttcp) |  |
 | [pcapx.arp_reply](#pcapxarp_reply) |  |
 | [pcapx.arp_replyEx](#pcapxarp_replyex) |  |
 | [pcapx.arp_request](#pcapxarp_request) |  |
 | [pcapx.arp_requestEx](#pcapxarp_requestex) |  |
 | [pcapx.ethernet_dstMac](#pcapxethernet_dstmac) |  |
 | [pcapx.ethernet_nextLayerType](#pcapxethernet_nextlayertype) |  |
 | [pcapx.ethernet_srcMac](#pcapxethernet_srcmac) |  |
 | [pcapx.icmp_id](#pcapxicmp_id) |  |
 | [pcapx.icmp_payload](#pcapxicmp_payload) |  |
 | [pcapx.icmp_seq](#pcapxicmp_seq) |  |
 | [pcapx.icmp_type](#pcapxicmp_type) |  |
 | [pcapx.ipv4_dstOp](#pcapxipv4_dstop) |  |
 | [pcapx.ipv4_flags](#pcapxipv4_flags) |  |
 | [pcapx.ipv4_fragment](#pcapxipv4_fragment) |  |
 | [pcapx.ipv4_id](#pcapxipv4_id) |  |
 | [pcapx.ipv4_nextLayerProtocol](#pcapxipv4_nextlayerprotocol) |  |
 | [pcapx.ipv4_option](#pcapxipv4_option) |  |
 | [pcapx.ipv4_srcIp](#pcapxipv4_srcip) |  |
 | [pcapx.ipv4_tos](#pcapxipv4_tos) |  |
 | [pcapx.ipv4_ttl](#pcapxipv4_ttl) |  |
 | [pcapx.tcp_ack](#pcapxtcp_ack) |  |
 | [pcapx.tcp_dataOffset](#pcapxtcp_dataoffset) |  |
 | [pcapx.tcp_dstPort](#pcapxtcp_dstport) |  |
 | [pcapx.tcp_flag](#pcapxtcp_flag) |  |
 | [pcapx.tcp_optionMSS](#pcapxtcp_optionmss) |  |
 | [pcapx.tcp_optionRaw](#pcapxtcp_optionraw) |  |
 | [pcapx.tcp_optionSACK](#pcapxtcp_optionsack) |  |
 | [pcapx.tcp_optionSACKPermitted](#pcapxtcp_optionsackpermitted) |  |
 | [pcapx.tcp_optionTimestamp](#pcapxtcp_optiontimestamp) |  |
 | [pcapx.tcp_optionWindowScale](#pcapxtcp_optionwindowscale) |  |
 | [pcapx.tcp_seq](#pcapxtcp_seq) |  |
 | [pcapx.tcp_srcPort](#pcapxtcp_srcport) |  |
 | [pcapx.tcp_urgent](#pcapxtcp_urgent) |  |
 | [pcapx.tcp_window](#pcapxtcp_window) |  |
 | [pcapx.udp_dstPort](#pcapxudp_dstport) |  |
 | [pcapx.udp_srcPort](#pcapxudp_srcport) |  |




## 变量定义

|变量调用名|变量类型|变量解释/帮助信息|
|:-----------|:---------- |:-----------|
|`pcapx.ICMP_CODE_PARAM_PROBLEM_BAD_LENGTH`|`int`| //|
|`pcapx.ICMP_CODE_PARAM_PROBLEM_MISSING_OPTION`|`int`| //|
|`pcapx.ICMP_CODE_PARAM_PROBLEM_POINTER_INDICATES_ERROR`|`int`| //|
|`pcapx.ICMP_CODE_REDIRECT_HOST`|`int`| //|
|`pcapx.ICMP_CODE_REDIRECT_NET`|`int`| //|
|`pcapx.ICMP_CODE_REDIRECT_TOS_HOST`|`int`| //|
|`pcapx.ICMP_CODE_REDIRECT_TOS_NET`|`int`| //|
|`pcapx.ICMP_CODE_TIME_EXCEEDED_FRAG_REASS`|`int`| //|
|`pcapx.ICMP_CODE_TIME_EXCEEDED_TTL`|`int`| //|
|`pcapx.ICMP_CODE_UNREACH_COMM_ADMIN`|`int`| //|
|`pcapx.ICMP_CODE_UNREACH_FRAGMENTATION_NEEDED`|`int`| //|
|`pcapx.ICMP_CODE_UNREACH_HOST`|`int`| //|
|`pcapx.ICMP_CODE_UNREACH_HOST_ADMIN`|`int`| //|
|`pcapx.ICMP_CODE_UNREACH_HOST_PRECEDENCE`|`int`| //|
|`pcapx.ICMP_CODE_UNREACH_HOST_TOS`|`int`| //|
|`pcapx.ICMP_CODE_UNREACH_HOST_UNKNOWN`|`int`| //|
|`pcapx.ICMP_CODE_UNREACH_NET`|`int`| //|
|`pcapx.ICMP_CODE_UNREACH_NET_ADMIN`|`int`| //|
|`pcapx.ICMP_CODE_UNREACH_NET_TOS`|`int`| //|
|`pcapx.ICMP_CODE_UNREACH_NET_UNKNOWN`|`int`| //|
|`pcapx.ICMP_CODE_UNREACH_PORT`|`int`| //|
|`pcapx.ICMP_CODE_UNREACH_PRECEDENCE_CUTOFF`|`int`| //|
|`pcapx.ICMP_CODE_UNREACH_PROTOCOL`|`int`| //|
|`pcapx.ICMP_CODE_UNREACH_SRC_ISOLATED`|`int`| //|
|`pcapx.ICMP_CODE_UNREACH_SRC_ROUTE_FAIL`|`int`| //|
|`pcapx.ICMP_TYPE_ADDRESS_MASK_REPLY`|`int`| //|
|`pcapx.ICMP_TYPE_ADDRESS_MASK_REQUEST`|`int`| //|
|`pcapx.ICMP_TYPE_DEST_UNREACH`|`int`| //|
|`pcapx.ICMP_TYPE_ECHO_REPLY`|`int`| //|
|`pcapx.ICMP_TYPE_ECHO_REQUEST`|`int`| //|
|`pcapx.ICMP_TYPE_INFO_REPLY`|`int`| //|
|`pcapx.ICMP_TYPE_INFO_REQUEST`|`int`| //|
|`pcapx.ICMP_TYPE_PARAM_PROBLEM`|`int`| //|
|`pcapx.ICMP_TYPE_REDIRECT`|`int`| //|
|`pcapx.ICMP_TYPE_ROUTER_ADVERTISEMENT`|`int`| //|
|`pcapx.ICMP_TYPE_ROUTER_SOLICITATION`|`int`| //|
|`pcapx.ICMP_TYPE_SRC_QUENCH`|`int`| //|
|`pcapx.ICMP_TYPE_TIMESTAMP`|`int`| //|
|`pcapx.ICMP_TYPE_TIMESTAMP_REPLY`|`int`| //|
|`pcapx.ICMP_TYPE_TIME_EXCEEDED`|`int`| //|
|`pcapx.IPV4_FLAG_DONT_FRAGMENT`|`int`| //|
|`pcapx.IPV4_FLAG_EVIL_BIT`|`int`| //|
|`pcapx.IPV4_FLAG_MORE_FRAGMENT`|`int`| //|
|`pcapx.IPV4_PROTOCOL_AH`|`int`| //|
|`pcapx.IPV4_PROTOCOL_ESP`|`int`| //|
|`pcapx.IPV4_PROTOCOL_ETHERIP`|`int`| //|
|`pcapx.IPV4_PROTOCOL_GRE`|`int`| //|
|`pcapx.IPV4_PROTOCOL_ICMP`|`int`| //|
|`pcapx.IPV4_PROTOCOL_IGMP`|`int`| //|
|`pcapx.IPV4_PROTOCOL_IPIP`|`int`| //|
|`pcapx.IPV4_PROTOCOL_MPLSINIP`|`int`| //|
|`pcapx.IPV4_PROTOCOL_OSPF`|`int`| //|
|`pcapx.IPV4_PROTOCOL_SCTP`|`int`| //|
|`pcapx.IPV4_PROTOCOL_TCP`|`int`| //|
|`pcapx.IPV4_PROTOCOL_UDP`|`int`| //|
|`pcapx.IPV4_PROTOCOL_UDPLITE`|`int`| //|
|`pcapx.IPV4_PROTOCOL_VRRP`|`int`| //|
|`pcapx.TCP_FLAG_ACK`|`int`| //|
|`pcapx.TCP_FLAG_CWR`|`int`| //|
|`pcapx.TCP_FLAG_ECE`|`int`| //|
|`pcapx.TCP_FLAG_FIN`|`int`| //|
|`pcapx.TCP_FLAG_NS`|`int`| //|
|`pcapx.TCP_FLAG_PSH`|`int`| //|
|`pcapx.TCP_FLAG_RST`|`int`| //|
|`pcapx.TCP_FLAG_SYN`|`int`| //|
|`pcapx.TCP_FLAG_URG`|`int`| //|





## 函数定义

### pcapx.GetStatistics



#### 详细描述



#### 定义：

`func pcapx.GetStatistics() return (r0: *pcapx.Statistics)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*pcapx.Statistics` |   |


 
### pcapx.InjectChaosTraffic



#### 详细描述



#### 定义：

``func pcapx.InjectChaosTraffic(v1: *pcapx.ChaosTraffic, v2 ...pcapx.ConfigOption)``


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `*pcapx.ChaosTraffic` |   |
| v2 | `...pcapx.ConfigOption` |   |




 

 
### pcapx.InjectHTTPRequest



#### 详细描述



#### 定义：

``func pcapx.InjectHTTPRequest(v1: bytes, v2 ...pcapx.ConfigOption)``


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `...pcapx.ConfigOption` |   |




 

 
### pcapx.InjectIP



#### 详细描述



#### 定义：

``func pcapx.InjectIP(v1: bytes, v2 ...pcapx.ConfigOption)``


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `...pcapx.ConfigOption` |   |




 

 
### pcapx.InjectRaw



#### 详细描述



#### 定义：

``func pcapx.InjectRaw(v1: bytes, v2 ...pcapx.ConfigOption)``


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `...pcapx.ConfigOption` |   |




 

 
### pcapx.InjectTCP



#### 详细描述



#### 定义：

``func pcapx.InjectTCP(v1: bytes, v2 ...pcapx.ConfigOption)``


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `...pcapx.ConfigOption` |   |




 

 
### pcapx.arp_reply



#### 详细描述



#### 定义：

`func pcapx.arp_reply(v1: string, v2: string) return (r0: func ArpConfig(v1: *layers.ARP) return(error) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ArpConfig(v1: *layers.ARP) return(error) ` |   |


 
### pcapx.arp_replyEx



#### 详细描述



#### 定义：

`func pcapx.arp_replyEx(v1: string, v2: string, v3: string, v4: string) return (r0: func ArpConfig(v1: *layers.ARP) return(error) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |
| v3 | `string` |   |
| v4 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ArpConfig(v1: *layers.ARP) return(error) ` |   |


 
### pcapx.arp_request



#### 详细描述



#### 定义：

`func pcapx.arp_request(v1: string) return (r0: func ArpConfig(v1: *layers.ARP) return(error) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ArpConfig(v1: *layers.ARP) return(error) ` |   |


 
### pcapx.arp_requestEx



#### 详细描述



#### 定义：

`func pcapx.arp_requestEx(v1: string, v2: string, v3: string) return (r0: func ArpConfig(v1: *layers.ARP) return(error) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |
| v3 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ArpConfig(v1: *layers.ARP) return(error) ` |   |


 
### pcapx.ethernet_dstMac



#### 详细描述



#### 定义：

`func pcapx.ethernet_dstMac(v1: any) return (r0: func EthernetOption(v1: *layers.Ethernet) return(error) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func EthernetOption(v1: *layers.Ethernet) return(error) ` |   |


 
### pcapx.ethernet_nextLayerType



#### 详细描述



#### 定义：

`func pcapx.ethernet_nextLayerType(v1: any) return (r0: func EthernetOption(v1: *layers.Ethernet) return(error) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func EthernetOption(v1: *layers.Ethernet) return(error) ` |   |


 
### pcapx.ethernet_srcMac



#### 详细描述



#### 定义：

`func pcapx.ethernet_srcMac(v1: any) return (r0: func EthernetOption(v1: *layers.Ethernet) return(error) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func EthernetOption(v1: *layers.Ethernet) return(error) ` |   |


 
### pcapx.icmp_id



#### 详细描述



#### 定义：

`func pcapx.icmp_id(v1: any) return (r0: func ICMPOption(v1: *layers.ICMPv4) return(error) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ICMPOption(v1: *layers.ICMPv4) return(error) ` |   |


 
### pcapx.icmp_payload



#### 详细描述



#### 定义：

`func pcapx.icmp_payload(v1: bytes) return (r0: func ICMPOption(v1: *layers.ICMPv4) return(error) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ICMPOption(v1: *layers.ICMPv4) return(error) ` |   |


 
### pcapx.icmp_seq



#### 详细描述



#### 定义：

`func pcapx.icmp_seq(v1: any) return (r0: func ICMPOption(v1: *layers.ICMPv4) return(error) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ICMPOption(v1: *layers.ICMPv4) return(error) ` |   |


 
### pcapx.icmp_type



#### 详细描述



#### 定义：

`func pcapx.icmp_type(v1: any, v2: any) return (r0: func ICMPOption(v1: *layers.ICMPv4) return(error) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ICMPOption(v1: *layers.ICMPv4) return(error) ` |   |


 
### pcapx.ipv4_dstOp



#### 详细描述



#### 定义：

`func pcapx.ipv4_dstOp(v1: any) return (r0: func IPv4Option(v1: *layers.IPv4) return(error) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func IPv4Option(v1: *layers.IPv4) return(error) ` |   |


 
### pcapx.ipv4_flags



#### 详细描述



#### 定义：

`func pcapx.ipv4_flags(v1: any) return (r0: func IPv4Option(v1: *layers.IPv4) return(error) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func IPv4Option(v1: *layers.IPv4) return(error) ` |   |


 
### pcapx.ipv4_fragment



#### 详细描述



#### 定义：

`func pcapx.ipv4_fragment(v1: any) return (r0: func IPv4Option(v1: *layers.IPv4) return(error) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func IPv4Option(v1: *layers.IPv4) return(error) ` |   |


 
### pcapx.ipv4_id



#### 详细描述



#### 定义：

`func pcapx.ipv4_id(v1: any) return (r0: func IPv4Option(v1: *layers.IPv4) return(error) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func IPv4Option(v1: *layers.IPv4) return(error) ` |   |


 
### pcapx.ipv4_nextLayerProtocol



#### 详细描述



#### 定义：

`func pcapx.ipv4_nextLayerProtocol(v1: any) return (r0: func IPv4Option(v1: *layers.IPv4) return(error) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func IPv4Option(v1: *layers.IPv4) return(error) ` |   |


 
### pcapx.ipv4_option



#### 详细描述



#### 定义：

`func pcapx.ipv4_option(v1: any, v2: bytes) return (r0: func IPv4Option(v1: *layers.IPv4) return(error) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func IPv4Option(v1: *layers.IPv4) return(error) ` |   |


 
### pcapx.ipv4_srcIp



#### 详细描述



#### 定义：

`func pcapx.ipv4_srcIp(v1: any) return (r0: func IPv4Option(v1: *layers.IPv4) return(error) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func IPv4Option(v1: *layers.IPv4) return(error) ` |   |


 
### pcapx.ipv4_tos



#### 详细描述



#### 定义：

`func pcapx.ipv4_tos(v1: any) return (r0: func IPv4Option(v1: *layers.IPv4) return(error) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func IPv4Option(v1: *layers.IPv4) return(error) ` |   |


 
### pcapx.ipv4_ttl



#### 详细描述



#### 定义：

`func pcapx.ipv4_ttl(v1: any) return (r0: func IPv4Option(v1: *layers.IPv4) return(error) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func IPv4Option(v1: *layers.IPv4) return(error) ` |   |


 
### pcapx.tcp_ack



#### 详细描述



#### 定义：

`func pcapx.tcp_ack(v1: any) return (r0: func TCPOption(v1: *layers.TCP) return(error) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func TCPOption(v1: *layers.TCP) return(error) ` |   |


 
### pcapx.tcp_dataOffset



#### 详细描述



#### 定义：

`func pcapx.tcp_dataOffset(v1: any) return (r0: func TCPOption(v1: *layers.TCP) return(error) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func TCPOption(v1: *layers.TCP) return(error) ` |   |


 
### pcapx.tcp_dstPort



#### 详细描述



#### 定义：

`func pcapx.tcp_dstPort(v1: any) return (r0: func TCPOption(v1: *layers.TCP) return(error) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func TCPOption(v1: *layers.TCP) return(error) ` |   |


 
### pcapx.tcp_flag



#### 详细描述



#### 定义：

`func pcapx.tcp_flag(v1: any) return (r0: func TCPOption(v1: *layers.TCP) return(error) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func TCPOption(v1: *layers.TCP) return(error) ` |   |


 
### pcapx.tcp_optionMSS



#### 详细描述



#### 定义：

`func pcapx.tcp_optionMSS(v1: any) return (r0: func TCPOption(v1: *layers.TCP) return(error) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func TCPOption(v1: *layers.TCP) return(error) ` |   |


 
### pcapx.tcp_optionRaw



#### 详细描述



#### 定义：

`func pcapx.tcp_optionRaw(v1: any, v2: bytes) return (r0: func TCPOption(v1: *layers.TCP) return(error) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func TCPOption(v1: *layers.TCP) return(error) ` |   |


 
### pcapx.tcp_optionSACK



#### 详细描述



#### 定义：

`func pcapx.tcp_optionSACK(v1 ...any) return (r0: func TCPOption(v1: *layers.TCP) return(error) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func TCPOption(v1: *layers.TCP) return(error) ` |   |


 
### pcapx.tcp_optionSACKPermitted



#### 详细描述



#### 定义：

`func pcapx.tcp_optionSACKPermitted() return (r0: func TCPOption(v1: *layers.TCP) return(error) )`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func TCPOption(v1: *layers.TCP) return(error) ` |   |


 
### pcapx.tcp_optionTimestamp



#### 详细描述



#### 定义：

`func pcapx.tcp_optionTimestamp(v1: any) return (r0: func TCPOption(v1: *layers.TCP) return(error) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func TCPOption(v1: *layers.TCP) return(error) ` |   |


 
### pcapx.tcp_optionWindowScale



#### 详细描述



#### 定义：

`func pcapx.tcp_optionWindowScale(v1: any) return (r0: func TCPOption(v1: *layers.TCP) return(error) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func TCPOption(v1: *layers.TCP) return(error) ` |   |


 
### pcapx.tcp_seq



#### 详细描述



#### 定义：

`func pcapx.tcp_seq(v1: any) return (r0: func TCPOption(v1: *layers.TCP) return(error) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func TCPOption(v1: *layers.TCP) return(error) ` |   |


 
### pcapx.tcp_srcPort



#### 详细描述



#### 定义：

`func pcapx.tcp_srcPort(v1: any) return (r0: func TCPOption(v1: *layers.TCP) return(error) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func TCPOption(v1: *layers.TCP) return(error) ` |   |


 
### pcapx.tcp_urgent



#### 详细描述



#### 定义：

`func pcapx.tcp_urgent(v1: any) return (r0: func TCPOption(v1: *layers.TCP) return(error) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func TCPOption(v1: *layers.TCP) return(error) ` |   |


 
### pcapx.tcp_window



#### 详细描述



#### 定义：

`func pcapx.tcp_window(v1: any) return (r0: func TCPOption(v1: *layers.TCP) return(error) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func TCPOption(v1: *layers.TCP) return(error) ` |   |


 
### pcapx.udp_dstPort



#### 详细描述



#### 定义：

`func pcapx.udp_dstPort(v1: any) return (r0: func UDPOption(v1: *layers.UDP) return(error) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func UDPOption(v1: *layers.UDP) return(error) ` |   |


 
### pcapx.udp_srcPort



#### 详细描述



#### 定义：

`func pcapx.udp_srcPort(v1: any) return (r0: func UDPOption(v1: *layers.UDP) return(error) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func UDPOption(v1: *layers.UDP) return(error) ` |   |


 


