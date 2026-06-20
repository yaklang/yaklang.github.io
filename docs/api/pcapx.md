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
| [pcapx.FixPermission](#fixpermission) |FixPermission 尝试修复 pcap 权限问题 返回值: - error: 修复失败时返回错误，为 nil 表示可正常使用 syn 扫描|
| [pcapx.GetStatistics](#getstatistics) |GetStatistics 获取 pcapx 注入流量过程中累计的统计信息(链路层、网络层、传输层) 在 yak 中通过 pcapx.GetStatistics 调用 参数: - 无 返回值: - 一个统计信息对象，包含各层地址命中计数|
| [pcapx.InjectChaosTraffic](#injectchaostraffic) |InjectChaosTraffic 根据 ChaosTraffic 结构中携带的各类负载，自动注入对应的混合流量 在 yak 中通过 pcapx.InjectChaosTraffic 调用，支持 HTTP、TCP/IP、UDP/IP、ICMP/IP 等多种负载 参数: - t: ChaosTraf...|
| [pcapx.InjectHTTPRequest](#injecthttprequest) |InjectHTTPRequest 将一个 HTTP 请求按 TCP/IP 流量注入到网络 在 yak 中通过 pcapx.InjectHTTPRequest 调用，会自动从请求中解析目标地址 参数: - raw: 原始 HTTP 请求字节 - opt: 可选配置项 返回值: - 无|
| [pcapx.InjectIP](#injectip) |InjectTCPIP 解析并注入一个 TCP/IP 数据包(在 yak 中对应 pcapx.InjectTCP 和 pcapx.InjectIP) 需要通过配置项指定流量方向(发往服务端或客户端) 参数: - raw: TCP/IP 层数据包字节 - opt: 可选配置项，需指定 pcapx.Wi...|
| [pcapx.InjectRaw](#injectraw) |InjectRaw 将一个原始数据包(自链路层起的完整字节)直接注入到网卡发送 在 yak 中通过 pcapx.InjectRaw 调用，需要相应的网卡发包权限 参数: - raw: 完整的原始数据包字节 - opt: 可选配置项，如指定网卡等 返回值: - 无|
| [pcapx.InjectTCP](#injecttcp) |InjectTCPIP 解析并注入一个 TCP/IP 数据包(在 yak 中对应 pcapx.InjectTCP 和 pcapx.InjectIP) 需要通过配置项指定流量方向(发往服务端或客户端) 参数: - raw: TCP/IP 层数据包字节 - opt: 可选配置项，需指定 pcapx.Wi...|
| [pcapx.OpenPcapFile](#openpcapfile) |OpenPcapFile 打开并解析一个 pcap 抓包文件，通过回调选项处理其中的流量 在 yak 中通过 pcapx.OpenPcapFile 调用 参数: - filename: pcap 文件路径 - opts: 处理配置项，如 pcapx.pcap_onHTTPFlow 等 返回值: - ...|
| [pcapx.PacketBuilder](#packetbuilder) |PacketBuilder 按照传入的各层配置选项组合并序列化出一个完整的数据包字节 在 yak 中通过 pcapx.PacketBuilder 调用，可叠加链路层/网络层/传输层等多种选项 参数: - opts: 一组数据包构建选项(如 pcapx.ipv4_srcIp、pcapx.tcp_dst...|
| [pcapx.StartSniff](#startsniff) |StartSniff 在指定网卡上开始抓包(嗅探),通过回调选项处理捕获到的流量 在 yak 中通过 pcapx.StartSniff 调用，需要相应的抓包权限 参数: - iface: 网卡名称，多个网卡用逗号分隔 - opts: 抓包配置项，如 pcapx.pcap_bpfFilter、pcap...|
| [pcapx.WithPayload](#withpayload) |WithPayload 为 pcapx.PacketBuilder 设置数据包的负载(Payload)内容 在 yak 中通过 pcapx.WithPayload 调用 参数: - payload: 负载字节数据 返回值: - 一个 pcapx.PacketBuilder 可接收的构建配置选项|
| [pcapx.WithdrawPermission](#withdrawpermission) |WithdrawPermission 撤销 pcap 权限 返回值: - error: 撤销失败时返回错误|
| [pcapx.arp_reply](#arp_reply) |arp_reply 构造一个 ARP 应答层，自动使用本机默认网卡的 IP 与 MAC 作为源 在 yak 中通过 pcapx.arp_reply 调用，配合 pcapx.PacketBuilder 使用 参数: - targetIp: 目标(接收方) IP 地址 - targetMac: 目标(接...|
| [pcapx.arp_replyEx](#arp_replyex) |arp_replyEx 构造一个完整指定源与目的信息的 ARP 应答层 在 yak 中通过 pcapx.arp_replyEx 调用，配合 pcapx.PacketBuilder 使用 参数: - srcTarget: 应答中声明的源 IP 地址 - srcMac: 应答中声明的源 MAC 地址 -...|
| [pcapx.arp_request](#arp_request) |arp_request 构造一个 ARP 请求层，自动使用本机默认网卡的 IP 与 MAC 作为源 在 yak 中通过 pcapx.arp_request 调用，配合 pcapx.PacketBuilder 使用 参数: - ip: 要查询的目标 IP 地址 返回值: - 一个 pcapx.Pack...|
| [pcapx.arp_requestEx](#arp_requestex) |arp_requestEx 构造一个完整指定源信息的 ARP 请求层 在 yak 中通过 pcapx.arp_requestEx 调用，配合 pcapx.PacketBuilder 使用 参数: - selfIP: 本机(源) IP 地址 - selfMac: 本机(源) MAC 地址 - remo...|
| [pcapx.ethernet_dstMac](#ethernet_dstmac) |ethernet_dstMac 设置以太网帧的目的 MAC 地址 在 yak 中通过 pcapx.ethernet_dstMac 调用，配合 pcapx.PacketBuilder 使用 参数: - dstMac: 目的 MAC，可为 &#34;00:11:22:33:44:55&#34; 字符串或 net.Har...|
| [pcapx.ethernet_nextLayerType](#ethernet_nextlayertype) |ethernet_nextLayerType 设置以太网帧的上层协议类型(EtherType) 在 yak 中通过 pcapx.ethernet_nextLayerType 调用，配合 pcapx.PacketBuilder 使用 参数: - i: 上层协议类型，如 &#34;ipv4&#34;、&#34;ipv6&#34;、&#34;a...|
| [pcapx.ethernet_srcMac](#ethernet_srcmac) |ethernet_srcMac 设置以太网帧的源 MAC 地址 在 yak 中通过 pcapx.ethernet_srcMac 调用，配合 pcapx.PacketBuilder 使用 参数: - srcMac: 源 MAC，可为 &#34;00:11:22:33:44:55&#34; 字符串或 net.Hardw...|
| [pcapx.icmp_id](#icmp_id) |icmp_id 设置 ICMPv4 的标识符(Identifier)字段 在 yak 中通过 pcapx.icmp_id 调用，配合 pcapx.PacketBuilder 使用 参数: - id: 标识符值(0-65535) 返回值: - 一个 pcapx.PacketBuilder 可接收的 I...|
| [pcapx.icmp_payload](#icmp_payload) |icmp_payload 设置 ICMPv4 的负载(Payload)数据 在 yak 中通过 pcapx.icmp_payload 调用，配合 pcapx.PacketBuilder 使用 参数: - i: 负载字节数据 返回值: - 一个 pcapx.PacketBuilder 可接收的 ICM...|
| [pcapx.icmp_seq](#icmp_seq) |icmp_seq 设置 ICMPv4 的序列号(Sequence)字段 在 yak 中通过 pcapx.icmp_seq 调用，配合 pcapx.PacketBuilder 使用 参数: - sequence: 序列号(0-65535) 返回值: - 一个 pcapx.PacketBuilder 可...|
| [pcapx.icmp_type](#icmp_type) |icmp_type 设置 ICMPv4 的类型(Type)与代码(Code) 在 yak 中通过 pcapx.icmp_type 调用，可配合 pcapx.ICMP_TYPE_ECHO_REQUEST 等常量使用 参数: - icmpType: ICMP 类型 - icmpCode: ICMP 代码...|
| [pcapx.ipv4_dstOp](#ipv4_dstop) |ipv4_dstOp 设置 IPv4 头部的目的 IP 地址 在 yak 中通过 pcapx.ipv4_dstOp 调用，配合 pcapx.PacketBuilder 使用 参数: - i: 目的 IP 地址字符串，如 &#34;2.2.2.2&#34; 返回值: - 一个 pcapx.PacketBuilder ...|
| [pcapx.ipv4_flags](#ipv4_flags) |ipv4_flags 设置 IPv4 头部的标志位(如 DF、MF 等) 在 yak 中通过 pcapx.ipv4_flags 调用，可配合 pcapx.IPV4_FLAG_DONT_FRAGMENT 等常量使用 参数: - i: 标志位值，取 layers.IPv4Flag 或整数 返回值: - ...|
| [pcapx.ipv4_fragment](#ipv4_fragment) |ipv4_fragment 设置 IPv4 头部的分片偏移(Fragment Offset)字段 在 yak 中通过 pcapx.ipv4_fragment 调用，配合 pcapx.PacketBuilder 使用 参数: - i: 分片偏移值 返回值: - 一个 pcapx.PacketBuild...|
| [pcapx.ipv4_id](#ipv4_id) |ipv4_id 设置 IPv4 头部的标识(Identification)字段 在 yak 中通过 pcapx.ipv4_id 调用，配合 pcapx.PacketBuilder 使用 参数: - i: 标识值(0-65535) 返回值: - 一个 pcapx.PacketBuilder 可接收的 ...|
| [pcapx.ipv4_nextLayerProtocol](#ipv4_nextlayerprotocol) |ipv4_nextLayerProtocol 设置 IPv4 头部的上层协议(Protocol)字段 在 yak 中通过 pcapx.ipv4_nextLayerProtocol 调用，配合 pcapx.PacketBuilder 使用 参数: - i: 上层协议，如 &#34;tcp&#34;、&#34;udp&#34;、&#34;ic...|
| [pcapx.ipv4_option](#ipv4_option) |ipv4_option 向 IPv4 头部追加一个选项(Option)，optType 为 nil 时清空全部选项 在 yak 中通过 pcapx.ipv4_option 调用，配合 pcapx.PacketBuilder 使用 参数: - optType: 选项类型，传 nil 表示清空所有选项 ...|
| [pcapx.ipv4_srcIp](#ipv4_srcip) |ipv4_srcIp 设置 IPv4 头部的源 IP 地址 在 yak 中通过 pcapx.ipv4_srcIp 调用，配合 pcapx.PacketBuilder 使用 参数: - i: 源 IP 地址字符串，如 &#34;1.1.1.1&#34; 返回值: - 一个 pcapx.PacketBuilder 可接...|
| [pcapx.ipv4_tos](#ipv4_tos) |ipv4_tos 设置 IPv4 头部的 TOS(服务类型)字段 在 yak 中通过 pcapx.ipv4_tos 调用，配合 pcapx.PacketBuilder 使用 参数: - i: TOS 值(0-255) 返回值: - 一个 pcapx.PacketBuilder 可接收的 IPv4 层...|
| [pcapx.ipv4_ttl](#ipv4_ttl) |ipv4_ttl 设置 IPv4 头部的 TTL(生存时间)字段 在 yak 中通过 pcapx.ipv4_ttl 调用，配合 pcapx.PacketBuilder 使用 参数: - i: TTL 值(0-255) 返回值: - 一个 pcapx.PacketBuilder 可接收的 IPv4 层...|
| [pcapx.loopback_family](#loopback_family) |loopback_family 设置 loopback(回环)层的协议族(ProtocolFamily) 在 yak 中通过 pcapx.loopback_family 调用，配合 pcapx.PacketBuilder 使用 参数: - i: 协议族，取 layers.ProtocolFamily...|
| [pcapx.loopback_payload](#loopback_payload) |loopback_payload 设置 loopback(回环)层所承载的负载数据 在 yak 中通过 pcapx.loopback_payload 调用，配合 pcapx.PacketBuilder 使用 参数: - payload: 负载字节数据 返回值: - 一个 pcapx.PacketBu...|
| [pcapx.pcap_bpfFilter](#pcap_bpffilter) |pcap_bpfFilter 设置 BPF 过滤表达式，仅捕获匹配的流量 在 yak 中通过 pcapx.pcap_bpfFilter 调用，配合 pcapx.StartSniff/OpenPcapFile 使用 参数: - bpf: BPF 过滤表达式，如 &#34;tcp port 80&#34; 返回值: -...|
| [pcapx.pcap_debug](#pcap_debug) |pcap_debug 设置是否开启抓包调试模式(输出更详细的调试日志) 在 yak 中通过 pcapx.pcap_debug 调用，配合 pcapx.StartSniff/OpenPcapFile 使用 参数: - b: 为 true 时开启调试模式 返回值: - 一个抓包配置选项|
| [pcapx.pcap_disableAssembly](#pcap_disableassembly) |pcap_disableAssembly 设置是否禁用 TCP 流重组 在 yak 中通过 pcapx.pcap_disableAssembly 调用，配合 pcapx.StartSniff/OpenPcapFile 使用 参数: - b: 为 true 时禁用流重组 返回值: - 一个抓包配置选项|
| [pcapx.pcap_everyPacket](#pcap_everypacket) |pcap_everyPacket 注册一个回调，对抓包过程中捕获到的每一个数据包执行处理 在 yak 中通过 pcapx.pcap_everyPacket 调用，配合 pcapx.StartSniff/OpenPcapFile 使用 参数: - h: 回调函数，参数为捕获到的单个数据包 返回值: -...|
| [pcapx.pcap_onFlowClosed](#pcap_onflowclosed) |pcap_onFlowClosed 注册一个回调，当某个流量会话(Flow)关闭时触发 在 yak 中通过 pcapx.pcap_onFlowClosed 调用，配合 pcapx.StartSniff/OpenPcapFile 使用 参数: - h: 回调函数，参数为关闭原因和对应的流量会话 返回值...|
| [pcapx.pcap_onFlowCreated](#pcap_onflowcreated) |pcap_onFlowCreated 注册一个回调，当有新的流量会话(Flow)创建时触发 在 yak 中通过 pcapx.pcap_onFlowCreated 调用，配合 pcapx.StartSniff/OpenPcapFile 使用 参数: - h: 回调函数，参数为新创建的流量会话 返回值:...|
| [pcapx.pcap_onFlowDataFrame](#pcap_onflowdataframe) |pcap_onFlowDataFrame 注册一个回调，当数据帧经过流重组后触发 在 yak 中通过 pcapx.pcap_onFlowDataFrame 调用，配合 pcapx.StartSniff/OpenPcapFile 使用 参数: - h: 回调函数，参数为流量会话、连接和重组后的数据帧 ...|
| [pcapx.pcap_onFlowDataFrameNoReassembled](#pcap_onflowdataframenoreassembled) |pcap_onFlowDataFrameNoReassembled 注册一个回调，当数据帧到达(未经流重组)时触发 在 yak 中通过 pcapx.pcap_onFlowDataFrameNoReassembled 调用，配合 pcapx.StartSniff/OpenPcapFile 使用 参数:...|
| [pcapx.pcap_onHTTPFlow](#pcap_onhttpflow) |pcap_onHTTPFlow 注册一个回调，当从流量中解析出完整的 HTTP 请求-响应对时触发 在 yak 中通过 pcapx.pcap_onHTTPFlow 调用，配合 pcapx.StartSniff/OpenPcapFile 使用 参数: - h: 回调函数，参数为流量会话、HTTP 请求...|
| [pcapx.pcap_onHTTPRequest](#pcap_onhttprequest) |pcap_onHTTPRequest 注册一个回调，当从流量中解析出 HTTP 请求时触发 在 yak 中通过 pcapx.pcap_onHTTPRequest 调用，配合 pcapx.StartSniff/OpenPcapFile 使用 参数: - h: 回调函数，参数为流量会话和解析出的 HTT...|
| [pcapx.pcap_onTLSClientHello](#pcap_ontlsclienthello) |pcap_onTLSClientHello 注册一个回调，当捕获到 TLS ClientHello 报文时触发 在 yak 中通过 pcapx.pcap_onTLSClientHello 调用，配合 pcapx.StartSniff/OpenPcapFile 使用 参数: - h: 回调函数，参数为...|
| [pcapx.tcp_ack](#tcp_ack) |tcp_ack 设置 TCP 头部的确认号(Acknowledgment Number) 在 yak 中通过 pcapx.tcp_ack 调用，配合 pcapx.PacketBuilder 使用 参数: - ack: 确认号 返回值: - 一个 pcapx.PacketBuilder 可接收的 TC...|
| [pcapx.tcp_dataOffset](#tcp_dataoffset) |tcp_dataOffset 设置 TCP 头部的数据偏移(Data Offset，即首部长度) 在 yak 中通过 pcapx.tcp_dataOffset 调用，配合 pcapx.PacketBuilder 使用 参数: - dataOffset: 数据偏移值(以 4 字节为单位) 返回值: -...|
| [pcapx.tcp_dstPort](#tcp_dstport) |tcp_dstPort 设置 TCP 头部的目的端口 在 yak 中通过 pcapx.tcp_dstPort 调用，配合 pcapx.PacketBuilder 使用 参数: - dstPort: 目的端口号(0-65535) 返回值: - 一个 pcapx.PacketBuilder 可接收的 T...|
| [pcapx.tcp_flag](#tcp_flag) |tcp_flag 设置 TCP 头部的标志位(可用字符串、&#34;\|&#34;/&#34;,&#34; 分隔的组合或整数) 在 yak 中通过 pcapx.tcp_flag 调用，可配合 pcapx.TCP_FLAG_SYN 等常量使用 参数: - in: 标志位，如 &#34;syn&#34;、&#34;syn\|ack&#34; 或整数组合 返回值: - 一...|
| [pcapx.tcp_optionMSS](#tcp_optionmss) |tcp_optionMSS 设置 TCP 的 MSS(最大报文段长度)选项，默认 1460 在 yak 中通过 pcapx.tcp_optionMSS 调用，配合 pcapx.PacketBuilder 使用 参数: - i: MSS 值 返回值: - 一个 pcapx.PacketBuilder ...|
| [pcapx.tcp_optionRaw](#tcp_optionraw) |tcp_optionRaw 向 TCP 头部追加一个自定义选项，optionType 为 nil 时清空全部选项 在 yak 中通过 pcapx.tcp_optionRaw 调用，配合 pcapx.PacketBuilder 使用 参数: - optionType: 选项类型，传 nil 表示清空所...|
| [pcapx.tcp_optionSACK](#tcp_optionsack) |tcp_optionSACK 设置 TCP 的 SACK(选择性确认)选项，可传入多个边界值 在 yak 中通过 pcapx.tcp_optionSACK 调用，配合 pcapx.PacketBuilder 使用 参数: - i: 一组 SACK 边界值(每个占 4 字节) 返回值: - 一个 pc...|
| [pcapx.tcp_optionSACKPermitted](#tcp_optionsackpermitted) |tcp_optionSACKPermitted 设置 TCP 的 SACK Permitted(允许选择性确认)选项 在 yak 中通过 pcapx.tcp_optionSACKPermitted 调用，配合 pcapx.PacketBuilder 使用 参数: - 无 返回值: - 一个 pcap...|
| [pcapx.tcp_optionTimestamp](#tcp_optiontimestamp) |tcp_optionTimestamp 设置 TCP 的 Timestamp(时间戳)选项 在 yak 中通过 pcapx.tcp_optionTimestamp 调用，配合 pcapx.PacketBuilder 使用 参数: - i: 时间戳值 返回值: - 一个 pcapx.PacketBui...|
| [pcapx.tcp_optionWindowScale](#tcp_optionwindowscale) |tcp_optionWindowScale 设置 TCP 的窗口缩放(Window Scale)选项 在 yak 中通过 pcapx.tcp_optionWindowScale 调用，配合 pcapx.PacketBuilder 使用 参数: - i: 窗口缩放因子 返回值: - 一个 pcapx....|
| [pcapx.tcp_seq](#tcp_seq) |tcp_seq 设置 TCP 头部的序列号(Sequence Number) 在 yak 中通过 pcapx.tcp_seq 调用，配合 pcapx.PacketBuilder 使用 参数: - seq: 序列号 返回值: - 一个 pcapx.PacketBuilder 可接收的 TCP 层配置选...|
| [pcapx.tcp_srcPort](#tcp_srcport) |tcp_srcPort 设置 TCP 头部的源端口 在 yak 中通过 pcapx.tcp_srcPort 调用，配合 pcapx.PacketBuilder 使用 参数: - srcPort: 源端口号(0-65535) 返回值: - 一个 pcapx.PacketBuilder 可接收的 TCP...|
| [pcapx.tcp_urgent](#tcp_urgent) |tcp_urgent 设置 TCP 头部的紧急指针(Urgent Pointer) 在 yak 中通过 pcapx.tcp_urgent 调用，配合 pcapx.PacketBuilder 使用 参数: - urgent: 紧急指针值 返回值: - 一个 pcapx.PacketBuilder 可接...|
| [pcapx.tcp_window](#tcp_window) |tcp_window 设置 TCP 头部的窗口大小(Window Size) 在 yak 中通过 pcapx.tcp_window 调用，配合 pcapx.PacketBuilder 使用 参数: - window: 窗口大小(0-65535) 返回值: - 一个 pcapx.PacketBuild...|
| [pcapx.udp_dstPort](#udp_dstport) |udp_dstPort 设置 UDP 头部的目的端口 在 yak 中通过 pcapx.udp_dstPort 调用，配合 pcapx.PacketBuilder 使用 参数: - in: 目的端口号(0-65535) 返回值: - 一个 pcapx.PacketBuilder 可接收的 UDP 层配...|
| [pcapx.udp_srcPort](#udp_srcport) |udp_srcPort 设置 UDP 头部的源端口 在 yak 中通过 pcapx.udp_srcPort 调用，配合 pcapx.PacketBuilder 使用 参数: - in: 源端口号(0-65535) 返回值: - 一个 pcapx.PacketBuilder 可接收的 UDP 层配置选...|


## 函数定义
### FixPermission

#### 详细描述
FixPermission 尝试修复 pcap 权限问题

返回值:

  - error: 修复失败时返回错误，为 nil 表示可正常使用 syn 扫描




Example:

``````````````yak
err := pcapx.FixPermission()
die(err) // 没有错误，即可正常使用 syn 扫描
...
``````````````


#### 定义

`FixPermission() error`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 修复失败时返回错误，为 nil 表示可正常使用 syn 扫描 |


### GetStatistics

#### 详细描述
GetStatistics 获取 pcapx 注入流量过程中累计的统计信息(链路层、网络层、传输层)

在 yak 中通过 pcapx.GetStatistics 调用

参数:

  - 无



返回值:

  - 一个统计信息对象，包含各层地址命中计数




Example:

``````````````yak
// 该示例为示意性用法：读取 pcapx 流量统计
stat = pcapx.GetStatistics()
println(stat)
``````````````


#### 定义

`GetStatistics() (result *Statistics)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| result | `*Statistics` | 一个统计信息对象，包含各层地址命中计数 |


### InjectChaosTraffic

#### 详细描述
InjectChaosTraffic 根据 ChaosTraffic 结构中携带的各类负载，自动注入对应的混合流量

在 yak 中通过 pcapx.InjectChaosTraffic 调用，支持 HTTP、TCP/IP、UDP/IP、ICMP/IP 等多种负载

参数:

  - t: ChaosTraffic 对象，包含待注入的各类负载

  - opts: 可选配置项



返回值:

  - 无




Example:

``````````````yak
// 该示例为示意性用法：注入混合流量(需要发包权限)
t = &pcapx.ChaosTraffic{HttpRequest: []byte("GET / HTTP/1.1\r\nHost: example.com\r\n\r\n")}
pcapx.InjectChaosTraffic(t)
``````````````


#### 定义

`InjectChaosTraffic(t *ChaosTraffic, opts ...ConfigOption)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| t | `*ChaosTraffic` | ChaosTraffic 对象，包含待注入的各类负载 |
| opts | `...ConfigOption` | 可选配置项 |


### InjectHTTPRequest

#### 详细描述
InjectHTTPRequest 将一个 HTTP 请求按 TCP/IP 流量注入到网络

在 yak 中通过 pcapx.InjectHTTPRequest 调用，会自动从请求中解析目标地址

参数:

  - raw: 原始 HTTP 请求字节

  - opt: 可选配置项



返回值:

  - 无




Example:

``````````````yak
// 该示例为示意性用法：注入一个 HTTP 请求(需要发包权限)
req = "GET / HTTP/1.1\r\nHost: example.com\r\n\r\n"
pcapx.InjectHTTPRequest([]byte(req))
``````````````


#### 定义

`InjectHTTPRequest(raw []byte, opt ...ConfigOption)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` | 原始 HTTP 请求字节 |
| opt | `...ConfigOption` | 可选配置项 |


### InjectIP

#### 详细描述
InjectTCPIP 解析并注入一个 TCP/IP 数据包(在 yak 中对应 pcapx.InjectTCP 和 pcapx.InjectIP)

需要通过配置项指定流量方向(发往服务端或客户端)

参数:

  - raw: TCP/IP 层数据包字节

  - opt: 可选配置项，需指定 pcapx.WithToServer 或 pcapx.WithToClient



返回值:

  - 无




Example:

``````````````yak
// 该示例为示意性用法：注入 TCP/IP 数据包(需要发包权限)
raw = pcapx.PacketBuilder(pcapx.ipv4_srcIp("1.1.1.1"), pcapx.ipv4_dstOp("2.2.2.2"), pcapx.tcp_srcPort(12345), pcapx.tcp_dstPort(80))~
pcapx.InjectTCP(raw)
``````````````


#### 定义

`InjectIP(raw []byte, opt ...ConfigOption)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` | TCP/IP 层数据包字节 |
| opt | `...ConfigOption` | 可选配置项，需指定 pcapx.WithToServer 或 pcapx.WithToClient |


### InjectRaw

#### 详细描述
InjectRaw 将一个原始数据包(自链路层起的完整字节)直接注入到网卡发送

在 yak 中通过 pcapx.InjectRaw 调用，需要相应的网卡发包权限

参数:

  - raw: 完整的原始数据包字节

  - opt: 可选配置项，如指定网卡等



返回值:

  - 无




Example:

``````````````yak
// 该示例为示意性用法：注入一个原始数据包(需要发包权限)
raw = pcapx.PacketBuilder(pcapx.ipv4_srcIp("1.1.1.1"), pcapx.ipv4_dstOp("2.2.2.2"), pcapx.tcp_srcPort(12345), pcapx.tcp_dstPort(80), pcapx.tcp_flag("syn"))~
pcapx.InjectRaw(raw)
``````````````


#### 定义

`InjectRaw(raw []byte, opt ...ConfigOption)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` | 完整的原始数据包字节 |
| opt | `...ConfigOption` | 可选配置项，如指定网卡等 |


### InjectTCP

#### 详细描述
InjectTCPIP 解析并注入一个 TCP/IP 数据包(在 yak 中对应 pcapx.InjectTCP 和 pcapx.InjectIP)

需要通过配置项指定流量方向(发往服务端或客户端)

参数:

  - raw: TCP/IP 层数据包字节

  - opt: 可选配置项，需指定 pcapx.WithToServer 或 pcapx.WithToClient



返回值:

  - 无




Example:

``````````````yak
// 该示例为示意性用法：注入 TCP/IP 数据包(需要发包权限)
raw = pcapx.PacketBuilder(pcapx.ipv4_srcIp("1.1.1.1"), pcapx.ipv4_dstOp("2.2.2.2"), pcapx.tcp_srcPort(12345), pcapx.tcp_dstPort(80))~
pcapx.InjectTCP(raw)
``````````````


#### 定义

`InjectTCP(raw []byte, opt ...ConfigOption)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` | TCP/IP 层数据包字节 |
| opt | `...ConfigOption` | 可选配置项，需指定 pcapx.WithToServer 或 pcapx.WithToClient |


### OpenPcapFile

#### 详细描述
OpenPcapFile 打开并解析一个 pcap 抓包文件，通过回调选项处理其中的流量

在 yak 中通过 pcapx.OpenPcapFile 调用

参数:

  - filename: pcap 文件路径

  - opts: 处理配置项，如 pcapx.pcap_onHTTPFlow 等



返回值:

  - 解析过程中的错误




Example:

``````````````yak
// 该示例为示意性用法：读取并解析一个 pcap 文件
pcapx.OpenPcapFile("/tmp/capture.pcap",

	pcapx.pcap_onHTTPRequest(func(flow, req) { println("got a http request") }),

)~
``````````````


#### 定义

`OpenPcapFile(filename string, opts ...CaptureOption) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| filename | `string` | pcap 文件路径 |
| opts | `...CaptureOption` | 处理配置项，如 pcapx.pcap_onHTTPFlow 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 解析过程中的错误 |


### PacketBuilder

#### 详细描述
PacketBuilder 按照传入的各层配置选项组合并序列化出一个完整的数据包字节

在 yak 中通过 pcapx.PacketBuilder 调用，可叠加链路层/网络层/传输层等多种选项

参数:

  - opts: 一组数据包构建选项(如 pcapx.ipv4_srcIp、pcapx.tcp_dstPort、pcapx.WithPayload 等)



返回值:

  - 序列化后的数据包字节

  - 构建过程中的错误




Example:

``````````````yak
// 该示例为示意性用法：构建一个 TCP SYN 数据包
raw = pcapx.PacketBuilder(

	pcapx.ipv4_srcIp("1.1.1.1"), pcapx.ipv4_dstOp("2.2.2.2"),
	pcapx.tcp_srcPort(12345), pcapx.tcp_dstPort(80), pcapx.tcp_flag("syn"),

)~
println(len(raw))
``````````````


#### 定义

`PacketBuilder(opts ...any) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...any` | 一组数据包构建选项(如 pcapx.ipv4_srcIp、pcapx.tcp_dstPort、pcapx.WithPayload 等) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 序列化后的数据包字节 |
| r2 | `error` | 构建过程中的错误 |


### StartSniff

#### 详细描述
StartSniff 在指定网卡上开始抓包(嗅探),通过回调选项处理捕获到的流量

在 yak 中通过 pcapx.StartSniff 调用，需要相应的抓包权限

参数:

  - iface: 网卡名称，多个网卡用逗号分隔

  - opts: 抓包配置项，如 pcapx.pcap_bpfFilter、pcapx.pcap_onHTTPFlow 等



返回值:

  - 抓包过程中的错误




Example:

``````````````yak
// 该示例为示意性用法：在 eth0 上抓取 80 端口流量(需要抓包权限)
pcapx.StartSniff("eth0",

	pcapx.pcap_bpfFilter("tcp port 80"),
	pcapx.pcap_onHTTPFlow(func(flow, req, rsp) { println("got a http flow") }),

)~
``````````````


#### 定义

`StartSniff(iface string, opts ...CaptureOption) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| iface | `string` | 网卡名称，多个网卡用逗号分隔 |
| opts | `...CaptureOption` | 抓包配置项，如 pcapx.pcap_bpfFilter、pcapx.pcap_onHTTPFlow 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 抓包过程中的错误 |


### WithPayload

#### 详细描述
WithPayload 为 pcapx.PacketBuilder 设置数据包的负载(Payload)内容

在 yak 中通过 pcapx.WithPayload 调用

参数:

  - payload: 负载字节数据



返回值:

  - 一个 pcapx.PacketBuilder 可接收的构建配置选项




Example:

``````````````yak
// 该示例为示意性用法：构造带负载的数据包
raw = pcapx.PacketBuilder(pcapx.ipv4_srcIp("1.1.1.1"), pcapx.ipv4_dstOp("2.2.2.2"), pcapx.tcp_srcPort(12345), pcapx.tcp_dstPort(80), pcapx.WithPayload([]byte("hello")))~
println(len(raw))
``````````````


#### 定义

`WithPayload(payload []byte) BuilderConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| payload | `[]byte` | 负载字节数据 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BuilderConfigOption` | 一个 pcapx.PacketBuilder 可接收的构建配置选项 |


### WithdrawPermission

#### 详细描述
WithdrawPermission 撤销 pcap 权限

返回值:

  - error: 撤销失败时返回错误




Example:

``````````````yak
err := pcapx.Withdraw()
die(err)
...
``````````````


#### 定义

`WithdrawPermission() error`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 撤销失败时返回错误 |


### arp_reply

#### 详细描述
arp_reply 构造一个 ARP 应答层，自动使用本机默认网卡的 IP 与 MAC 作为源

在 yak 中通过 pcapx.arp_reply 调用，配合 pcapx.PacketBuilder 使用

参数:

  - targetIp: 目标(接收方) IP 地址

  - targetMac: 目标(接收方) MAC 地址



返回值:

  - 一个 pcapx.PacketBuilder 可接收的 ARP 层配置选项




Example:

``````````````yak
// 该示例为示意性用法：自动构造 ARP 应答
raw = pcapx.PacketBuilder(pcapx.arp_reply("192.168.1.2", "66:77:88:99:aa:bb"))~
println(len(raw))
``````````````


#### 定义

`arp_reply(targetIp string, targetMac string) ArpConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| targetIp | `string` | 目标(接收方) IP 地址 |
| targetMac | `string` | 目标(接收方) MAC 地址 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ArpConfig` | 一个 pcapx.PacketBuilder 可接收的 ARP 层配置选项 |


### arp_replyEx

#### 详细描述
arp_replyEx 构造一个完整指定源与目的信息的 ARP 应答层

在 yak 中通过 pcapx.arp_replyEx 调用，配合 pcapx.PacketBuilder 使用

参数:

  - srcTarget: 应答中声明的源 IP 地址

  - srcMac: 应答中声明的源 MAC 地址

  - targetIp: 目标(接收方) IP 地址

  - targetMac: 目标(接收方) MAC 地址



返回值:

  - 一个 pcapx.PacketBuilder 可接收的 ARP 层配置选项




Example:

``````````````yak
// 该示例为示意性用法：构造 ARP 应答
raw = pcapx.PacketBuilder(pcapx.arp_replyEx("192.168.1.1", "00:11:22:33:44:55", "192.168.1.2", "66:77:88:99:aa:bb"))~
println(len(raw))
``````````````


#### 定义

`arp_replyEx(srcTarget string, srcMac string, targetIp string, targetMac string) ArpConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| srcTarget | `string` | 应答中声明的源 IP 地址 |
| srcMac | `string` | 应答中声明的源 MAC 地址 |
| targetIp | `string` | 目标(接收方) IP 地址 |
| targetMac | `string` | 目标(接收方) MAC 地址 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ArpConfig` | 一个 pcapx.PacketBuilder 可接收的 ARP 层配置选项 |


### arp_request

#### 详细描述
arp_request 构造一个 ARP 请求层，自动使用本机默认网卡的 IP 与 MAC 作为源

在 yak 中通过 pcapx.arp_request 调用，配合 pcapx.PacketBuilder 使用

参数:

  - ip: 要查询的目标 IP 地址



返回值:

  - 一个 pcapx.PacketBuilder 可接收的 ARP 层配置选项




Example:

``````````````yak
// 该示例为示意性用法：自动构造 ARP 请求
raw = pcapx.PacketBuilder(pcapx.arp_request("192.168.1.1"))~
println(len(raw))
``````````````


#### 定义

`arp_request(ip string) ArpConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ip | `string` | 要查询的目标 IP 地址 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ArpConfig` | 一个 pcapx.PacketBuilder 可接收的 ARP 层配置选项 |


### arp_requestEx

#### 详细描述
arp_requestEx 构造一个完整指定源信息的 ARP 请求层

在 yak 中通过 pcapx.arp_requestEx 调用，配合 pcapx.PacketBuilder 使用

参数:

  - selfIP: 本机(源) IP 地址

  - selfMac: 本机(源) MAC 地址

  - remoteIP: 要查询的目标 IP 地址



返回值:

  - 一个 pcapx.PacketBuilder 可接收的 ARP 层配置选项




Example:

``````````````yak
// 该示例为示意性用法：构造 ARP 请求
raw = pcapx.PacketBuilder(pcapx.arp_requestEx("192.168.1.2", "00:11:22:33:44:55", "192.168.1.1"))~
println(len(raw))
``````````````


#### 定义

`arp_requestEx(selfIP string, selfMac string, remoteIP string) ArpConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| selfIP | `string` | 本机(源) IP 地址 |
| selfMac | `string` | 本机(源) MAC 地址 |
| remoteIP | `string` | 要查询的目标 IP 地址 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ArpConfig` | 一个 pcapx.PacketBuilder 可接收的 ARP 层配置选项 |


### ethernet_dstMac

#### 详细描述
ethernet_dstMac 设置以太网帧的目的 MAC 地址

在 yak 中通过 pcapx.ethernet_dstMac 调用，配合 pcapx.PacketBuilder 使用

参数:

  - dstMac: 目的 MAC，可为 &#34;00:11:22:33:44:55&#34; 字符串或 net.HardwareAddr



返回值:

  - 一个 pcapx.PacketBuilder 可接收的以太网层配置选项




Example:

``````````````yak
// 该示例为示意性用法：构造带目的 MAC 的以太网帧
raw = pcapx.PacketBuilder(pcapx.ethernet_dstMac("ff:ff:ff:ff:ff:ff"))~
println(len(raw))
``````````````


#### 定义

`ethernet_dstMac(dstMac any) EthernetOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| dstMac | `any` | 目的 MAC，可为 &#34;00:11:22:33:44:55&#34; 字符串或 net.HardwareAddr |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `EthernetOption` | 一个 pcapx.PacketBuilder 可接收的以太网层配置选项 |


### ethernet_nextLayerType

#### 详细描述
ethernet_nextLayerType 设置以太网帧的上层协议类型(EtherType)

在 yak 中通过 pcapx.ethernet_nextLayerType 调用，配合 pcapx.PacketBuilder 使用

参数:

  - i: 上层协议类型，如 &#34;ipv4&#34;、&#34;ipv6&#34;、&#34;arp&#34;、&#34;mpls&#34;、&#34;pppoe&#34; 或数字



返回值:

  - 一个 pcapx.PacketBuilder 可接收的以太网层配置选项




Example:

``````````````yak
// 该示例为示意性用法：指定以太网上层为 ARP
raw = pcapx.PacketBuilder(pcapx.ethernet_nextLayerType("arp"))~
println(len(raw))
``````````````


#### 定义

`ethernet_nextLayerType(i any) EthernetOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 上层协议类型，如 &#34;ipv4&#34;、&#34;ipv6&#34;、&#34;arp&#34;、&#34;mpls&#34;、&#34;pppoe&#34; 或数字 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `EthernetOption` | 一个 pcapx.PacketBuilder 可接收的以太网层配置选项 |


### ethernet_srcMac

#### 详细描述
ethernet_srcMac 设置以太网帧的源 MAC 地址

在 yak 中通过 pcapx.ethernet_srcMac 调用，配合 pcapx.PacketBuilder 使用

参数:

  - srcMac: 源 MAC，可为 &#34;00:11:22:33:44:55&#34; 字符串或 net.HardwareAddr



返回值:

  - 一个 pcapx.PacketBuilder 可接收的以太网层配置选项




Example:

``````````````yak
// 该示例为示意性用法：构造带源 MAC 的以太网帧
raw = pcapx.PacketBuilder(pcapx.ethernet_srcMac("00:11:22:33:44:55"))~
println(len(raw))
``````````````


#### 定义

`ethernet_srcMac(srcMac any) EthernetOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| srcMac | `any` | 源 MAC，可为 &#34;00:11:22:33:44:55&#34; 字符串或 net.HardwareAddr |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `EthernetOption` | 一个 pcapx.PacketBuilder 可接收的以太网层配置选项 |


### icmp_id

#### 详细描述
icmp_id 设置 ICMPv4 的标识符(Identifier)字段

在 yak 中通过 pcapx.icmp_id 调用，配合 pcapx.PacketBuilder 使用

参数:

  - id: 标识符值(0-65535)



返回值:

  - 一个 pcapx.PacketBuilder 可接收的 ICMP 层配置选项




Example:

``````````````yak
// 该示例为示意性用法：设置 ICMP 标识符
raw = pcapx.PacketBuilder(pcapx.ipv4_srcIp("1.1.1.1"), pcapx.ipv4_dstOp("2.2.2.2"), pcapx.icmp_type(pcapx.ICMP_TYPE_ECHO_REQUEST, 0), pcapx.icmp_id(1))~
println(len(raw))
``````````````


#### 定义

`icmp_id(id any) ICMPOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| id | `any` | 标识符值(0-65535) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ICMPOption` | 一个 pcapx.PacketBuilder 可接收的 ICMP 层配置选项 |


### icmp_payload

#### 详细描述
icmp_payload 设置 ICMPv4 的负载(Payload)数据

在 yak 中通过 pcapx.icmp_payload 调用，配合 pcapx.PacketBuilder 使用

参数:

  - i: 负载字节数据



返回值:

  - 一个 pcapx.PacketBuilder 可接收的 ICMP 层配置选项




Example:

``````````````yak
// 该示例为示意性用法：设置 ICMP 负载
raw = pcapx.PacketBuilder(pcapx.ipv4_srcIp("1.1.1.1"), pcapx.ipv4_dstOp("2.2.2.2"), pcapx.icmp_type(pcapx.ICMP_TYPE_ECHO_REQUEST, 0), pcapx.icmp_payload([]byte("ping")))~
println(len(raw))
``````````````


#### 定义

`icmp_payload(i []byte) ICMPOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `[]byte` | 负载字节数据 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ICMPOption` | 一个 pcapx.PacketBuilder 可接收的 ICMP 层配置选项 |


### icmp_seq

#### 详细描述
icmp_seq 设置 ICMPv4 的序列号(Sequence)字段

在 yak 中通过 pcapx.icmp_seq 调用，配合 pcapx.PacketBuilder 使用

参数:

  - sequence: 序列号(0-65535)



返回值:

  - 一个 pcapx.PacketBuilder 可接收的 ICMP 层配置选项




Example:

``````````````yak
// 该示例为示意性用法：设置 ICMP 序列号
raw = pcapx.PacketBuilder(pcapx.ipv4_srcIp("1.1.1.1"), pcapx.ipv4_dstOp("2.2.2.2"), pcapx.icmp_type(pcapx.ICMP_TYPE_ECHO_REQUEST, 0), pcapx.icmp_seq(1))~
println(len(raw))
``````````````


#### 定义

`icmp_seq(sequence any) ICMPOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| sequence | `any` | 序列号(0-65535) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ICMPOption` | 一个 pcapx.PacketBuilder 可接收的 ICMP 层配置选项 |


### icmp_type

#### 详细描述
icmp_type 设置 ICMPv4 的类型(Type)与代码(Code)

在 yak 中通过 pcapx.icmp_type 调用，可配合 pcapx.ICMP_TYPE_ECHO_REQUEST 等常量使用

参数:

  - icmpType: ICMP 类型

  - icmpCode: ICMP 代码，留空则默认为 0



返回值:

  - 一个 pcapx.PacketBuilder 可接收的 ICMP 层配置选项




Example:

``````````````yak
// 该示例为示意性用法：构造一个 ICMP Echo 请求类型
raw = pcapx.PacketBuilder(pcapx.ipv4_srcIp("1.1.1.1"), pcapx.ipv4_dstOp("2.2.2.2"), pcapx.icmp_type(pcapx.ICMP_TYPE_ECHO_REQUEST, 0))~
println(len(raw))
``````````````


#### 定义

`icmp_type(icmpType any, icmpCode any) ICMPOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| icmpType | `any` | ICMP 类型 |
| icmpCode | `any` | ICMP 代码，留空则默认为 0 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ICMPOption` | 一个 pcapx.PacketBuilder 可接收的 ICMP 层配置选项 |


### ipv4_dstOp

#### 详细描述
ipv4_dstOp 设置 IPv4 头部的目的 IP 地址

在 yak 中通过 pcapx.ipv4_dstOp 调用，配合 pcapx.PacketBuilder 使用

参数:

  - i: 目的 IP 地址字符串，如 &#34;2.2.2.2&#34;



返回值:

  - 一个 pcapx.PacketBuilder 可接收的 IPv4 层配置选项




Example:

``````````````yak
// 该示例为示意性用法：设置 IPv4 目的地址
raw = pcapx.PacketBuilder(pcapx.ipv4_srcIp("1.1.1.1"), pcapx.ipv4_dstOp("2.2.2.2"))~
println(len(raw))
``````````````


#### 定义

`ipv4_dstOp(i any) IPv4Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 目的 IP 地址字符串，如 &#34;2.2.2.2&#34; |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `IPv4Option` | 一个 pcapx.PacketBuilder 可接收的 IPv4 层配置选项 |


### ipv4_flags

#### 详细描述
ipv4_flags 设置 IPv4 头部的标志位(如 DF、MF 等)

在 yak 中通过 pcapx.ipv4_flags 调用，可配合 pcapx.IPV4_FLAG_DONT_FRAGMENT 等常量使用

参数:

  - i: 标志位值，取 layers.IPv4Flag 或整数



返回值:

  - 一个 pcapx.PacketBuilder 可接收的 IPv4 层配置选项




Example:

``````````````yak
// 该示例为示意性用法：设置 IPv4 不分片标志
raw = pcapx.PacketBuilder(pcapx.ipv4_srcIp("1.1.1.1"), pcapx.ipv4_dstOp("2.2.2.2"), pcapx.ipv4_flags(pcapx.IPV4_FLAG_DONT_FRAGMENT))~
println(len(raw))
``````````````


#### 定义

`ipv4_flags(i any) IPv4Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 标志位值，取 layers.IPv4Flag 或整数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `IPv4Option` | 一个 pcapx.PacketBuilder 可接收的 IPv4 层配置选项 |


### ipv4_fragment

#### 详细描述
ipv4_fragment 设置 IPv4 头部的分片偏移(Fragment Offset)字段

在 yak 中通过 pcapx.ipv4_fragment 调用，配合 pcapx.PacketBuilder 使用

参数:

  - i: 分片偏移值



返回值:

  - 一个 pcapx.PacketBuilder 可接收的 IPv4 层配置选项




Example:

``````````````yak
// 该示例为示意性用法：设置 IPv4 分片偏移
raw = pcapx.PacketBuilder(pcapx.ipv4_srcIp("1.1.1.1"), pcapx.ipv4_dstOp("2.2.2.2"), pcapx.ipv4_fragment(0))~
println(len(raw))
``````````````


#### 定义

`ipv4_fragment(i any) IPv4Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 分片偏移值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `IPv4Option` | 一个 pcapx.PacketBuilder 可接收的 IPv4 层配置选项 |


### ipv4_id

#### 详细描述
ipv4_id 设置 IPv4 头部的标识(Identification)字段

在 yak 中通过 pcapx.ipv4_id 调用，配合 pcapx.PacketBuilder 使用

参数:

  - i: 标识值(0-65535)



返回值:

  - 一个 pcapx.PacketBuilder 可接收的 IPv4 层配置选项




Example:

``````````````yak
// 该示例为示意性用法：设置 IPv4 标识
raw = pcapx.PacketBuilder(pcapx.ipv4_srcIp("1.1.1.1"), pcapx.ipv4_dstOp("2.2.2.2"), pcapx.ipv4_id(12345))~
println(len(raw))
``````````````


#### 定义

`ipv4_id(i any) IPv4Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 标识值(0-65535) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `IPv4Option` | 一个 pcapx.PacketBuilder 可接收的 IPv4 层配置选项 |


### ipv4_nextLayerProtocol

#### 详细描述
ipv4_nextLayerProtocol 设置 IPv4 头部的上层协议(Protocol)字段

在 yak 中通过 pcapx.ipv4_nextLayerProtocol 调用，配合 pcapx.PacketBuilder 使用

参数:

  - i: 上层协议，如 &#34;tcp&#34;、&#34;udp&#34;、&#34;icmp&#34; 或对应数字



返回值:

  - 一个 pcapx.PacketBuilder 可接收的 IPv4 层配置选项




Example:

``````````````yak
// 该示例为示意性用法：指定 IPv4 上层协议为 udp
raw = pcapx.PacketBuilder(pcapx.ipv4_srcIp("1.1.1.1"), pcapx.ipv4_dstOp("2.2.2.2"), pcapx.ipv4_nextLayerProtocol("udp"))~
println(len(raw))
``````````````


#### 定义

`ipv4_nextLayerProtocol(i any) IPv4Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 上层协议，如 &#34;tcp&#34;、&#34;udp&#34;、&#34;icmp&#34; 或对应数字 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `IPv4Option` | 一个 pcapx.PacketBuilder 可接收的 IPv4 层配置选项 |


### ipv4_option

#### 详细描述
ipv4_option 向 IPv4 头部追加一个选项(Option)，optType 为 nil 时清空全部选项

在 yak 中通过 pcapx.ipv4_option 调用，配合 pcapx.PacketBuilder 使用

参数:

  - optType: 选项类型，传 nil 表示清空所有选项

  - data: 选项数据字节



返回值:

  - 一个 pcapx.PacketBuilder 可接收的 IPv4 层配置选项




Example:

``````````````yak
// 该示例为示意性用法：追加一个 IPv4 选项
raw = pcapx.PacketBuilder(pcapx.ipv4_srcIp("1.1.1.1"), pcapx.ipv4_dstOp("2.2.2.2"), pcapx.ipv4_option(7, []byte{0x01}))~
println(len(raw))
``````````````


#### 定义

`ipv4_option(optType any, data []byte) IPv4Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| optType | `any` | 选项类型，传 nil 表示清空所有选项 |
| data | `[]byte` | 选项数据字节 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `IPv4Option` | 一个 pcapx.PacketBuilder 可接收的 IPv4 层配置选项 |


### ipv4_srcIp

#### 详细描述
ipv4_srcIp 设置 IPv4 头部的源 IP 地址

在 yak 中通过 pcapx.ipv4_srcIp 调用，配合 pcapx.PacketBuilder 使用

参数:

  - i: 源 IP 地址字符串，如 &#34;1.1.1.1&#34;



返回值:

  - 一个 pcapx.PacketBuilder 可接收的 IPv4 层配置选项




Example:

``````````````yak
// 该示例为示意性用法：设置 IPv4 源地址
raw = pcapx.PacketBuilder(pcapx.ipv4_srcIp("1.1.1.1"), pcapx.ipv4_dstOp("2.2.2.2"))~
println(len(raw))
``````````````


#### 定义

`ipv4_srcIp(i any) IPv4Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 源 IP 地址字符串，如 &#34;1.1.1.1&#34; |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `IPv4Option` | 一个 pcapx.PacketBuilder 可接收的 IPv4 层配置选项 |


### ipv4_tos

#### 详细描述
ipv4_tos 设置 IPv4 头部的 TOS(服务类型)字段

在 yak 中通过 pcapx.ipv4_tos 调用，配合 pcapx.PacketBuilder 使用

参数:

  - i: TOS 值(0-255)



返回值:

  - 一个 pcapx.PacketBuilder 可接收的 IPv4 层配置选项




Example:

``````````````yak
// 该示例为示意性用法：设置 IPv4 TOS
raw = pcapx.PacketBuilder(pcapx.ipv4_srcIp("1.1.1.1"), pcapx.ipv4_dstOp("2.2.2.2"), pcapx.ipv4_tos(0))~
println(len(raw))
``````````````


#### 定义

`ipv4_tos(i any) IPv4Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | TOS 值(0-255) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `IPv4Option` | 一个 pcapx.PacketBuilder 可接收的 IPv4 层配置选项 |


### ipv4_ttl

#### 详细描述
ipv4_ttl 设置 IPv4 头部的 TTL(生存时间)字段

在 yak 中通过 pcapx.ipv4_ttl 调用，配合 pcapx.PacketBuilder 使用

参数:

  - i: TTL 值(0-255)



返回值:

  - 一个 pcapx.PacketBuilder 可接收的 IPv4 层配置选项




Example:

``````````````yak
// 该示例为示意性用法：设置 IPv4 TTL
raw = pcapx.PacketBuilder(pcapx.ipv4_srcIp("1.1.1.1"), pcapx.ipv4_dstOp("2.2.2.2"), pcapx.ipv4_ttl(64))~
println(len(raw))
``````````````


#### 定义

`ipv4_ttl(i any) IPv4Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | TTL 值(0-255) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `IPv4Option` | 一个 pcapx.PacketBuilder 可接收的 IPv4 层配置选项 |


### loopback_family

#### 详细描述
loopback_family 设置 loopback(回环)层的协议族(ProtocolFamily)

在 yak 中通过 pcapx.loopback_family 调用，配合 pcapx.PacketBuilder 使用

参数:

  - i: 协议族，取 layers.ProtocolFamily 类型值



返回值:

  - 一个 pcapx.PacketBuilder 可接收的 loopback 层配置选项




Example:

``````````````yak
// 该示例为示意性用法：设置 loopback 协议族
raw = pcapx.PacketBuilder(pcapx.loopback_payload([]byte("data")))~
println(len(raw))
``````````````


#### 定义

`loopback_family(i any) LoopbackOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 协议族，取 layers.ProtocolFamily 类型值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `LoopbackOption` | 一个 pcapx.PacketBuilder 可接收的 loopback 层配置选项 |


### loopback_payload

#### 详细描述
loopback_payload 设置 loopback(回环)层所承载的负载数据

在 yak 中通过 pcapx.loopback_payload 调用，配合 pcapx.PacketBuilder 使用

参数:

  - payload: 负载字节数据



返回值:

  - 一个 pcapx.PacketBuilder 可接收的 loopback 层配置选项




Example:

``````````````yak
// 该示例为示意性用法：设置 loopback 负载
raw = pcapx.PacketBuilder(pcapx.loopback_payload([]byte("data")))~
println(len(raw))
``````````````


#### 定义

`loopback_payload(payload []byte) LoopbackOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| payload | `[]byte` | 负载字节数据 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `LoopbackOption` | 一个 pcapx.PacketBuilder 可接收的 loopback 层配置选项 |


### pcap_bpfFilter

#### 详细描述
pcap_bpfFilter 设置 BPF 过滤表达式，仅捕获匹配的流量

在 yak 中通过 pcapx.pcap_bpfFilter 调用，配合 pcapx.StartSniff/OpenPcapFile 使用

参数:

  - bpf: BPF 过滤表达式，如 &#34;tcp port 80&#34;



返回值:

  - 一个抓包配置选项




Example:

``````````````yak
// 该示例为示意性用法：仅抓取 80 端口的 TCP 流量
pcapx.StartSniff("eth0", pcapx.pcap_bpfFilter("tcp port 80"))~
``````````````


#### 定义

`pcap_bpfFilter(bpf string) CaptureOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| bpf | `string` | BPF 过滤表达式，如 &#34;tcp port 80&#34; |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CaptureOption` | 一个抓包配置选项 |


### pcap_debug

#### 详细描述
pcap_debug 设置是否开启抓包调试模式(输出更详细的调试日志)

在 yak 中通过 pcapx.pcap_debug 调用，配合 pcapx.StartSniff/OpenPcapFile 使用

参数:

  - b: 为 true 时开启调试模式



返回值:

  - 一个抓包配置选项




Example:

``````````````yak
// 该示例为示意性用法：开启抓包调试模式
pcapx.StartSniff("eth0", pcapx.pcap_debug(true))~
``````````````


#### 定义

`pcap_debug(b bool) CaptureOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` | 为 true 时开启调试模式 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CaptureOption` | 一个抓包配置选项 |


### pcap_disableAssembly

#### 详细描述
pcap_disableAssembly 设置是否禁用 TCP 流重组

在 yak 中通过 pcapx.pcap_disableAssembly 调用，配合 pcapx.StartSniff/OpenPcapFile 使用

参数:

  - b: 为 true 时禁用流重组



返回值:

  - 一个抓包配置选项




Example:

``````````````yak
// 该示例为示意性用法：禁用 TCP 流重组
pcapx.StartSniff("eth0", pcapx.pcap_disableAssembly(true))~
``````````````


#### 定义

`pcap_disableAssembly(b bool) CaptureOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` | 为 true 时禁用流重组 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CaptureOption` | 一个抓包配置选项 |


### pcap_everyPacket

#### 详细描述
pcap_everyPacket 注册一个回调，对抓包过程中捕获到的每一个数据包执行处理

在 yak 中通过 pcapx.pcap_everyPacket 调用，配合 pcapx.StartSniff/OpenPcapFile 使用

参数:

  - h: 回调函数，参数为捕获到的单个数据包



返回值:

  - 一个抓包配置选项




Example:

``````````````yak
// 该示例为示意性用法：处理每个捕获到的数据包
pcapx.StartSniff("eth0", pcapx.pcap_everyPacket(func(packet) { println("got a packet") }))~
``````````````


#### 定义

`pcap_everyPacket(h func(packet gopacket.Packet)) CaptureOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `func(packet gopacket.Packet)` | 回调函数，参数为捕获到的单个数据包 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CaptureOption` | 一个抓包配置选项 |


### pcap_onFlowClosed

#### 详细描述
pcap_onFlowClosed 注册一个回调，当某个流量会话(Flow)关闭时触发

在 yak 中通过 pcapx.pcap_onFlowClosed 调用，配合 pcapx.StartSniff/OpenPcapFile 使用

参数:

  - h: 回调函数，参数为关闭原因和对应的流量会话



返回值:

  - 一个抓包配置选项




Example:

``````````````yak
// 该示例为示意性用法：监听流量会话关闭
pcapx.StartSniff("eth0", pcapx.pcap_onFlowClosed(func(reason, flow) { println("flow closed") }))~
``````````````


#### 定义

`pcap_onFlowClosed(h func(reason TrafficFlowCloseReason, flow *TrafficFlow)) CaptureOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `func(reason TrafficFlowCloseReason, flow *TrafficFlow)` | 回调函数，参数为关闭原因和对应的流量会话 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CaptureOption` | 一个抓包配置选项 |


### pcap_onFlowCreated

#### 详细描述
pcap_onFlowCreated 注册一个回调，当有新的流量会话(Flow)创建时触发

在 yak 中通过 pcapx.pcap_onFlowCreated 调用，配合 pcapx.StartSniff/OpenPcapFile 使用

参数:

  - h: 回调函数，参数为新创建的流量会话



返回值:

  - 一个抓包配置选项




Example:

``````````````yak
// 该示例为示意性用法：监听新流量会话创建
pcapx.StartSniff("eth0", pcapx.pcap_onFlowCreated(func(flow) { println("new flow created") }))~
``````````````


#### 定义

`pcap_onFlowCreated(h func(flow *TrafficFlow)) CaptureOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `func(flow *TrafficFlow)` | 回调函数，参数为新创建的流量会话 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CaptureOption` | 一个抓包配置选项 |


### pcap_onFlowDataFrame

#### 详细描述
pcap_onFlowDataFrame 注册一个回调，当数据帧经过流重组后触发

在 yak 中通过 pcapx.pcap_onFlowDataFrame 调用，配合 pcapx.StartSniff/OpenPcapFile 使用

参数:

  - h: 回调函数，参数为流量会话、连接和重组后的数据帧



返回值:

  - 一个抓包配置选项




Example:

``````````````yak
// 该示例为示意性用法：处理重组后的数据帧
pcapx.StartSniff("eth0", pcapx.pcap_onFlowDataFrame(func(flow, conn, frame) { println("reassembled data frame") }))~
``````````````


#### 定义

`pcap_onFlowDataFrame(h func(flow *TrafficFlow, conn *TrafficConnection, frame *TrafficFrame)) CaptureOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `func(flow *TrafficFlow, conn *TrafficConnection, frame *TrafficFrame)` | 回调函数，参数为流量会话、连接和重组后的数据帧 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CaptureOption` | 一个抓包配置选项 |


### pcap_onFlowDataFrameNoReassembled

#### 详细描述
pcap_onFlowDataFrameNoReassembled 注册一个回调，当数据帧到达(未经流重组)时触发

在 yak 中通过 pcapx.pcap_onFlowDataFrameNoReassembled 调用，配合 pcapx.StartSniff/OpenPcapFile 使用

参数:

  - h: 回调函数，参数为流量会话、连接和原始数据帧



返回值:

  - 一个抓包配置选项




Example:

``````````````yak
// 该示例为示意性用法：处理未重组的数据帧
pcapx.StartSniff("eth0", pcapx.pcap_onFlowDataFrameNoReassembled(func(flow, conn, frame) { println("data frame arrived") }))~
``````````````


#### 定义

`pcap_onFlowDataFrameNoReassembled(h func(flow *TrafficFlow, conn *TrafficConnection, frame *TrafficFrame)) CaptureOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `func(flow *TrafficFlow, conn *TrafficConnection, frame *TrafficFrame)` | 回调函数，参数为流量会话、连接和原始数据帧 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CaptureOption` | 一个抓包配置选项 |


### pcap_onHTTPFlow

#### 详细描述
pcap_onHTTPFlow 注册一个回调，当从流量中解析出完整的 HTTP 请求-响应对时触发

在 yak 中通过 pcapx.pcap_onHTTPFlow 调用，配合 pcapx.StartSniff/OpenPcapFile 使用

参数:

  - h: 回调函数，参数为流量会话、HTTP 请求与 HTTP 响应



返回值:

  - 一个抓包配置选项




Example:

``````````````yak
// 该示例为示意性用法：监听完整 HTTP 流量
pcapx.StartSniff("eth0", pcapx.pcap_onHTTPFlow(func(flow, req, rsp) { println("got http flow") }))~
``````````````


#### 定义

`pcap_onHTTPFlow(h func(flow *TrafficFlow, req *http.Request, rsp *http.Response)) CaptureOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `func(flow *TrafficFlow, req *http.Request, rsp *http.Response)` | 回调函数，参数为流量会话、HTTP 请求与 HTTP 响应 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CaptureOption` | 一个抓包配置选项 |


### pcap_onHTTPRequest

#### 详细描述
pcap_onHTTPRequest 注册一个回调，当从流量中解析出 HTTP 请求时触发

在 yak 中通过 pcapx.pcap_onHTTPRequest 调用，配合 pcapx.StartSniff/OpenPcapFile 使用

参数:

  - h: 回调函数，参数为流量会话和解析出的 HTTP 请求



返回值:

  - 一个抓包配置选项




Example:

``````````````yak
// 该示例为示意性用法：监听 HTTP 请求
pcapx.StartSniff("eth0", pcapx.pcap_onHTTPRequest(func(flow, req) { println("got http request") }))~
``````````````


#### 定义

`pcap_onHTTPRequest(h func(flow *TrafficFlow, req *http.Request)) CaptureOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `func(flow *TrafficFlow, req *http.Request)` | 回调函数，参数为流量会话和解析出的 HTTP 请求 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CaptureOption` | 一个抓包配置选项 |


### pcap_onTLSClientHello

#### 详细描述
pcap_onTLSClientHello 注册一个回调，当捕获到 TLS ClientHello 报文时触发

在 yak 中通过 pcapx.pcap_onTLSClientHello 调用，配合 pcapx.StartSniff/OpenPcapFile 使用

参数:

  - h: 回调函数，参数为流量会话和解析出的 ClientHello



返回值:

  - 一个抓包配置选项




Example:

``````````````yak
// 该示例为示意性用法：监听 TLS ClientHello
pcapx.StartSniff("eth0", pcapx.pcap_onTLSClientHello(func(flow, hello) { println("got tls client hello") }))~
``````````````


#### 定义

`pcap_onTLSClientHello(h func(flow *TrafficFlow, hello *tlsutils.HandshakeClientHello)) CaptureOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `func(flow *TrafficFlow, hello *tlsutils.HandshakeClientHello)` | 回调函数，参数为流量会话和解析出的 ClientHello |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CaptureOption` | 一个抓包配置选项 |


### tcp_ack

#### 详细描述
tcp_ack 设置 TCP 头部的确认号(Acknowledgment Number)

在 yak 中通过 pcapx.tcp_ack 调用，配合 pcapx.PacketBuilder 使用

参数:

  - ack: 确认号



返回值:

  - 一个 pcapx.PacketBuilder 可接收的 TCP 层配置选项




Example:

``````````````yak
// 该示例为示意性用法：设置 TCP 确认号
raw = pcapx.PacketBuilder(pcapx.tcp_srcPort(12345), pcapx.tcp_dstPort(80), pcapx.tcp_ack(1001))~
println(len(raw))
``````````````


#### 定义

`tcp_ack(ack any) TCPOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ack | `any` | 确认号 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `TCPOption` | 一个 pcapx.PacketBuilder 可接收的 TCP 层配置选项 |


### tcp_dataOffset

#### 详细描述
tcp_dataOffset 设置 TCP 头部的数据偏移(Data Offset，即首部长度)

在 yak 中通过 pcapx.tcp_dataOffset 调用，配合 pcapx.PacketBuilder 使用

参数:

  - dataOffset: 数据偏移值(以 4 字节为单位)



返回值:

  - 一个 pcapx.PacketBuilder 可接收的 TCP 层配置选项




Example:

``````````````yak
// 该示例为示意性用法：设置 TCP 数据偏移
raw = pcapx.PacketBuilder(pcapx.tcp_srcPort(12345), pcapx.tcp_dstPort(80), pcapx.tcp_dataOffset(5))~
println(len(raw))
``````````````


#### 定义

`tcp_dataOffset(dataOffset any) TCPOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| dataOffset | `any` | 数据偏移值(以 4 字节为单位) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `TCPOption` | 一个 pcapx.PacketBuilder 可接收的 TCP 层配置选项 |


### tcp_dstPort

#### 详细描述
tcp_dstPort 设置 TCP 头部的目的端口

在 yak 中通过 pcapx.tcp_dstPort 调用，配合 pcapx.PacketBuilder 使用

参数:

  - dstPort: 目的端口号(0-65535)



返回值:

  - 一个 pcapx.PacketBuilder 可接收的 TCP 层配置选项




Example:

``````````````yak
// 该示例为示意性用法：设置 TCP 目的端口
raw = pcapx.PacketBuilder(pcapx.tcp_srcPort(12345), pcapx.tcp_dstPort(80))~
println(len(raw))
``````````````


#### 定义

`tcp_dstPort(dstPort any) TCPOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| dstPort | `any` | 目的端口号(0-65535) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `TCPOption` | 一个 pcapx.PacketBuilder 可接收的 TCP 层配置选项 |


### tcp_flag

#### 详细描述
tcp_flag 设置 TCP 头部的标志位(可用字符串、&#34;|&#34;/&#34;,&#34; 分隔的组合或整数)

在 yak 中通过 pcapx.tcp_flag 调用，可配合 pcapx.TCP_FLAG_SYN 等常量使用

参数:

  - in: 标志位，如 &#34;syn&#34;、&#34;syn|ack&#34; 或整数组合



返回值:

  - 一个 pcapx.PacketBuilder 可接收的 TCP 层配置选项




Example:

``````````````yak
// 该示例为示意性用法：构造 SYN 包标志
raw = pcapx.PacketBuilder(pcapx.tcp_srcPort(12345), pcapx.tcp_dstPort(80), pcapx.tcp_flag("syn"))~
println(len(raw))
``````````````


#### 定义

`tcp_flag(in any) TCPOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| in | `any` | 标志位，如 &#34;syn&#34;、&#34;syn\|ack&#34; 或整数组合 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `TCPOption` | 一个 pcapx.PacketBuilder 可接收的 TCP 层配置选项 |


### tcp_optionMSS

#### 详细描述
tcp_optionMSS 设置 TCP 的 MSS(最大报文段长度)选项，默认 1460

在 yak 中通过 pcapx.tcp_optionMSS 调用，配合 pcapx.PacketBuilder 使用

参数:

  - i: MSS 值



返回值:

  - 一个 pcapx.PacketBuilder 可接收的 TCP 层配置选项




Example:

``````````````yak
// 该示例为示意性用法：设置 TCP MSS 选项
raw = pcapx.PacketBuilder(pcapx.tcp_srcPort(12345), pcapx.tcp_dstPort(80), pcapx.tcp_optionMSS(1460))~
println(len(raw))
``````````````


#### 定义

`tcp_optionMSS(i any) TCPOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | MSS 值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `TCPOption` | 一个 pcapx.PacketBuilder 可接收的 TCP 层配置选项 |


### tcp_optionRaw

#### 详细描述
tcp_optionRaw 向 TCP 头部追加一个自定义选项，optionType 为 nil 时清空全部选项

在 yak 中通过 pcapx.tcp_optionRaw 调用，配合 pcapx.PacketBuilder 使用

参数:

  - optionType: 选项类型，传 nil 表示清空所有选项

  - data: 选项数据字节(长度 +2 不能超过 255)



返回值:

  - 一个 pcapx.PacketBuilder 可接收的 TCP 层配置选项




Example:

``````````````yak
// 该示例为示意性用法：追加一个原始 TCP 选项
raw = pcapx.PacketBuilder(pcapx.tcp_srcPort(12345), pcapx.tcp_dstPort(80), pcapx.tcp_optionRaw(8, []byte{0x00, 0x00}))~
println(len(raw))
``````````````


#### 定义

`tcp_optionRaw(optionType any, data []byte) TCPOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| optionType | `any` | 选项类型，传 nil 表示清空所有选项 |
| data | `[]byte` | 选项数据字节(长度 +2 不能超过 255) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `TCPOption` | 一个 pcapx.PacketBuilder 可接收的 TCP 层配置选项 |


### tcp_optionSACK

#### 详细描述
tcp_optionSACK 设置 TCP 的 SACK(选择性确认)选项，可传入多个边界值

在 yak 中通过 pcapx.tcp_optionSACK 调用，配合 pcapx.PacketBuilder 使用

参数:

  - i: 一组 SACK 边界值(每个占 4 字节)



返回值:

  - 一个 pcapx.PacketBuilder 可接收的 TCP 层配置选项




Example:

``````````````yak
// 该示例为示意性用法：设置 TCP SACK 选项
raw = pcapx.PacketBuilder(pcapx.tcp_srcPort(12345), pcapx.tcp_dstPort(80), pcapx.tcp_optionSACK(1000, 2000))~
println(len(raw))
``````````````


#### 定义

`tcp_optionSACK(i ...any) TCPOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `...any` | 一组 SACK 边界值(每个占 4 字节) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `TCPOption` | 一个 pcapx.PacketBuilder 可接收的 TCP 层配置选项 |


### tcp_optionSACKPermitted

#### 详细描述
tcp_optionSACKPermitted 设置 TCP 的 SACK Permitted(允许选择性确认)选项

在 yak 中通过 pcapx.tcp_optionSACKPermitted 调用，配合 pcapx.PacketBuilder 使用

参数:

  - 无



返回值:

  - 一个 pcapx.PacketBuilder 可接收的 TCP 层配置选项




Example:

``````````````yak
// 该示例为示意性用法：开启 TCP SACK Permitted 选项
raw = pcapx.PacketBuilder(pcapx.tcp_srcPort(12345), pcapx.tcp_dstPort(80), pcapx.tcp_optionSACKPermitted())~
println(len(raw))
``````````````


#### 定义

`tcp_optionSACKPermitted() TCPOption`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `TCPOption` | 一个 pcapx.PacketBuilder 可接收的 TCP 层配置选项 |


### tcp_optionTimestamp

#### 详细描述
tcp_optionTimestamp 设置 TCP 的 Timestamp(时间戳)选项

在 yak 中通过 pcapx.tcp_optionTimestamp 调用，配合 pcapx.PacketBuilder 使用

参数:

  - i: 时间戳值



返回值:

  - 一个 pcapx.PacketBuilder 可接收的 TCP 层配置选项




Example:

``````````````yak
// 该示例为示意性用法：设置 TCP 时间戳选项
raw = pcapx.PacketBuilder(pcapx.tcp_srcPort(12345), pcapx.tcp_dstPort(80), pcapx.tcp_optionTimestamp(123456))~
println(len(raw))
``````````````


#### 定义

`tcp_optionTimestamp(i any) TCPOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 时间戳值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `TCPOption` | 一个 pcapx.PacketBuilder 可接收的 TCP 层配置选项 |


### tcp_optionWindowScale

#### 详细描述
tcp_optionWindowScale 设置 TCP 的窗口缩放(Window Scale)选项

在 yak 中通过 pcapx.tcp_optionWindowScale 调用，配合 pcapx.PacketBuilder 使用

参数:

  - i: 窗口缩放因子



返回值:

  - 一个 pcapx.PacketBuilder 可接收的 TCP 层配置选项




Example:

``````````````yak
// 该示例为示意性用法：设置 TCP 窗口缩放选项
raw = pcapx.PacketBuilder(pcapx.tcp_srcPort(12345), pcapx.tcp_dstPort(80), pcapx.tcp_optionWindowScale(7))~
println(len(raw))
``````````````


#### 定义

`tcp_optionWindowScale(i any) TCPOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 窗口缩放因子 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `TCPOption` | 一个 pcapx.PacketBuilder 可接收的 TCP 层配置选项 |


### tcp_seq

#### 详细描述
tcp_seq 设置 TCP 头部的序列号(Sequence Number)

在 yak 中通过 pcapx.tcp_seq 调用，配合 pcapx.PacketBuilder 使用

参数:

  - seq: 序列号



返回值:

  - 一个 pcapx.PacketBuilder 可接收的 TCP 层配置选项




Example:

``````````````yak
// 该示例为示意性用法：设置 TCP 序列号
raw = pcapx.PacketBuilder(pcapx.tcp_srcPort(12345), pcapx.tcp_dstPort(80), pcapx.tcp_seq(1000))~
println(len(raw))
``````````````


#### 定义

`tcp_seq(seq any) TCPOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| seq | `any` | 序列号 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `TCPOption` | 一个 pcapx.PacketBuilder 可接收的 TCP 层配置选项 |


### tcp_srcPort

#### 详细描述
tcp_srcPort 设置 TCP 头部的源端口

在 yak 中通过 pcapx.tcp_srcPort 调用，配合 pcapx.PacketBuilder 使用

参数:

  - srcPort: 源端口号(0-65535)



返回值:

  - 一个 pcapx.PacketBuilder 可接收的 TCP 层配置选项




Example:

``````````````yak
// 该示例为示意性用法：设置 TCP 源端口
raw = pcapx.PacketBuilder(pcapx.tcp_srcPort(12345), pcapx.tcp_dstPort(80))~
println(len(raw))
``````````````


#### 定义

`tcp_srcPort(srcPort any) TCPOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| srcPort | `any` | 源端口号(0-65535) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `TCPOption` | 一个 pcapx.PacketBuilder 可接收的 TCP 层配置选项 |


### tcp_urgent

#### 详细描述
tcp_urgent 设置 TCP 头部的紧急指针(Urgent Pointer)

在 yak 中通过 pcapx.tcp_urgent 调用，配合 pcapx.PacketBuilder 使用

参数:

  - urgent: 紧急指针值



返回值:

  - 一个 pcapx.PacketBuilder 可接收的 TCP 层配置选项




Example:

``````````````yak
// 该示例为示意性用法：设置 TCP 紧急指针
raw = pcapx.PacketBuilder(pcapx.tcp_srcPort(12345), pcapx.tcp_dstPort(80), pcapx.tcp_urgent(0))~
println(len(raw))
``````````````


#### 定义

`tcp_urgent(urgent any) TCPOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| urgent | `any` | 紧急指针值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `TCPOption` | 一个 pcapx.PacketBuilder 可接收的 TCP 层配置选项 |


### tcp_window

#### 详细描述
tcp_window 设置 TCP 头部的窗口大小(Window Size)

在 yak 中通过 pcapx.tcp_window 调用，配合 pcapx.PacketBuilder 使用

参数:

  - window: 窗口大小(0-65535)



返回值:

  - 一个 pcapx.PacketBuilder 可接收的 TCP 层配置选项




Example:

``````````````yak
// 该示例为示意性用法：设置 TCP 窗口大小
raw = pcapx.PacketBuilder(pcapx.tcp_srcPort(12345), pcapx.tcp_dstPort(80), pcapx.tcp_window(8192))~
println(len(raw))
``````````````


#### 定义

`tcp_window(window any) TCPOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| window | `any` | 窗口大小(0-65535) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `TCPOption` | 一个 pcapx.PacketBuilder 可接收的 TCP 层配置选项 |


### udp_dstPort

#### 详细描述
udp_dstPort 设置 UDP 头部的目的端口

在 yak 中通过 pcapx.udp_dstPort 调用，配合 pcapx.PacketBuilder 使用

参数:

  - in: 目的端口号(0-65535)



返回值:

  - 一个 pcapx.PacketBuilder 可接收的 UDP 层配置选项




Example:

``````````````yak
// 该示例为示意性用法：设置 UDP 目的端口
raw = pcapx.PacketBuilder(pcapx.udp_srcPort(12345), pcapx.udp_dstPort(53))~
println(len(raw))
``````````````


#### 定义

`udp_dstPort(in any) UDPOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| in | `any` | 目的端口号(0-65535) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `UDPOption` | 一个 pcapx.PacketBuilder 可接收的 UDP 层配置选项 |


### udp_srcPort

#### 详细描述
udp_srcPort 设置 UDP 头部的源端口

在 yak 中通过 pcapx.udp_srcPort 调用，配合 pcapx.PacketBuilder 使用

参数:

  - in: 源端口号(0-65535)



返回值:

  - 一个 pcapx.PacketBuilder 可接收的 UDP 层配置选项




Example:

``````````````yak
// 该示例为示意性用法：设置 UDP 源端口
raw = pcapx.PacketBuilder(pcapx.udp_srcPort(12345), pcapx.udp_dstPort(53))~
println(len(raw))
``````````````


#### 定义

`udp_srcPort(in any) UDPOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| in | `any` | 源端口号(0-65535) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `UDPOption` | 一个 pcapx.PacketBuilder 可接收的 UDP 层配置选项 |


