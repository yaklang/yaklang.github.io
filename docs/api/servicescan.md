# servicescan

|函数名|函数描述/介绍|
|:------|:--------|
| [servicescan.Scan](#scan) |Scan servicescan 库使用的端口扫描类型的方式为全连接扫描，用于对连接目标进行精准的扫描，相比 synscan 库的单纯扫描，servicescan 库会尝试获取精确指纹信息以及 CPE 信息 参数: - target: 目标地址，支持 CIDR 格式，支持 192.168.1.1-1...|
| [servicescan.ScanFromPing](#scanfromping) |ScanFromPing 从 ping.Scan 的结果中进行指纹识别 参数: - res: ping.Scan 的结果管道 - ports: 端口，支持 1-65535、1,2,3、1-100,200-300 格式 - opts: 零个或多个 servicescan 扫描参数 返回值: - cha...|
| [servicescan.ScanFromSpaceEngine](#scanfromspaceengine) |ScanFromSynResult / ScanFromSpaceEngine 从 synscan.Scan 或者 spacengine.Query 的结果中进行指纹识别 参数: - res: synscan.Scan 或者 spacengine.Query 的结果 - opts: 零个或多个 se...|
| [servicescan.ScanFromSynResult](#scanfromsynresult) |ScanFromSynResult / ScanFromSpaceEngine 从 synscan.Scan 或者 spacengine.Query 的结果中进行指纹识别 参数: - res: synscan.Scan 或者 spacengine.Query 的结果 - opts: 零个或多个 se...|
| [servicescan.ScanOne](#scanone) |ScanOne servicescan 单体扫描，同步扫描一个目标，主机+端口 参数: - target: 目标地址 - port: 端口 - opts: 零个或多个 servicescan 扫描参数 返回值: - *MatchResult: 单个目标的指纹识别结果 - error: 扫描失败时返回...|
| [servicescan.active](#active) |active 设置是否启用主动发包模式，主动向目标发送探测包以提升指纹识别准确率 在 yak 中通过 servicescan.active 调用 参数: - raw: 是否启用主动发包模式 返回值: - 一个 servicescan.Scan 可接收的配置选项|
| [servicescan.all](#all) |all servicescan 的配置选项，强制同时启用 Web 与服务(nmap)全部指纹识别 在 yak 中通过 servicescan.all 调用 返回值: - 一个 servicescan.Scan 可接收的配置选项|
| [servicescan.cache](#cache) |cache servicescan 的配置选项，设置本次扫描是否使用缓存 参数: - b: 是否使用缓存 返回值: - 一个 servicescan.Scan 可接收的配置选项|
| [servicescan.concurrent](#concurrent) |concurrent servicescan 的配置选项，用于设置整体扫描并发 参数: - size: 并发数量 返回值: - 一个 servicescan.Scan 可接收的配置选项|
| [servicescan.context](#context) |context 设置服务扫描使用的 context，用于取消或超时控制 在 yak 中通过 servicescan.context 调用；停止遍历结果前应 cancel 对应 ctx 参数: - ctx: 上下文对象 返回值: - 一个 servicescan.Scan 可接收的配置选项|
| [servicescan.databaseCache](#databasecache) |databaseCache servicescan 的配置选项，设置本次扫描是否使用数据库缓存 参数: - b: 是否使用数据库缓存 返回值: - 一个 servicescan.Scan 可接收的配置选项|
| [servicescan.debugLog](#debuglog) |debugLog 的配置选项，设置本次扫描是否使用 debugLog 参数: - b: 可选，是否使用 debugLog，不传时默认为 true 返回值: - 一个 servicescan.Scan 可接收的配置选项|
| [servicescan.disableDefaultRule](#disabledefaultrule) |disableDefaultRule servicescan 的配置选项，禁用内置默认指纹规则(通常配合自定义规则使用) 在 yak 中通过 servicescan.disableDefaultRule 调用 参数: - b: 可选，是否禁用默认规则，不传时默认为 true 返回值: - 一个 se...|
| [servicescan.disableOpenPortGuard](#disableopenportguard) |disableOpenPortGuard servicescan 的配置选项, 禁用单主机开放端口数保护. 参数: - b: 可选，是否禁用，不传时默认为 true 返回值: - 一个 servicescan.Scan 可接收的配置选项|
| [servicescan.disableWebScanConnPool](#disablewebscanconnpool) |disableWebScanConnPool servicescan 的配置选项，用于禁用 web 扫描的连接池 参数: - b: 是否禁用连接池，默认为 false 返回值: - 一个 servicescan.Scan 可接收的配置选项|
| [servicescan.excludeHosts](#excludehosts) |excludeHosts servicescan 的配置选项，设置本次扫描排除的主机 参数: - hosts: 主机，支持逗号分割、CIDR、- 的格式 返回值: - 一个 servicescan.Scan 可接收的配置选项|
| [servicescan.excludePorts](#excludeports) |excludePorts servicescan 的配置选项，设置本次扫描排除的端口 参数: - ports: 端口，支持逗号分割、- 的格式 返回值: - 一个 servicescan.Scan 可接收的配置选项|
| [servicescan.maxProbes](#maxprobes) |maxProbes servicescan 的配置选项，在主动模式发包的基础上设置本次扫描使用的最大探测包数量，默认值为 5 参数: - m: 最大探测包数量 返回值: - 一个 servicescan.Scan 可接收的配置选项|
| [servicescan.maxProbesConcurrent](#maxprobesconcurrent) |maxProbesConcurrent servicescan 的配置选项，设置本次扫描发送 Probe 的并发量，默认值为 5 参数: - m: 并发量 返回值: - 一个 servicescan.Scan 可接收的配置选项|
| [servicescan.nmapRarityMax](#nmapraritymax) |nmapRarityMax servicescan 的配置选项，设置本次扫描使用的 Nmap 指纹稀有度，在主动模式发包的基础上进行探测控制 稀有度越大，表示这个服务在现实存在的可能性越小，取值范围为 1-9，默认值为 5 参数: - rarity: 稀有度，取值范围为 1-9 返回值: - 一个 ...|
| [servicescan.nmapRule](#nmaprule) |nmapRule servicescan 的配置选项，设置本次扫描使用的 Nmap 指纹规则 参数: - i: Nmap 指纹规则，支持规则字节内容、规则文件路径或规则映射 返回值: - 一个 servicescan.Scan 可接收的配置选项|
| [servicescan.onFinish](#onfinish) |onFinish servicescan 的配置选项，设置本次扫描完成单个目标时的回调函数 参数: - cb: 扫描完成时触发的回调函数，入参为匹配结果 返回值: - 一个 servicescan.Scan 可接收的配置选项|
| [servicescan.onOpen](#onopen) |onOpen servicescan 的配置选项，设置本次扫描端口开放时的回调函数 参数: - cb: 端口开放时触发的回调函数，入参为匹配结果 返回值: - 一个 servicescan.Scan 可接收的配置选项|
| [servicescan.openPortGuardLimit](#openportguardlimit) |openPortGuardLimit servicescan 的配置选项, 设置单主机开放端口数熔断阈值. 参数: - limit: 熔断阈值，小于等于 0 时使用默认值 返回值: - 一个 servicescan.Scan 可接收的配置选项|
| [servicescan.probeTimeout](#probetimeout) |probeTimeout servicescan 的配置选项，设置每一个探测包的超时时间 参数: - f: 超时时间，单位为秒 返回值: - 一个 servicescan.Scan 可接收的配置选项|
| [servicescan.proto](#proto) |proto servicescan 的配置选项，用于指定扫描协议 参数: - proto: 协议，例如 tcp、udp，可选参数，不传入参数默认为 tcp 返回值: - 一个 servicescan.Scan 可接收的配置选项|
| [servicescan.proxy](#proxy) |proxy servicescan 的配置选项，设置本次扫描使用的代理 参数: - proxies: 一个或多个代理地址，支持 http 和 socks5 返回值: - 一个 servicescan.Scan 可接收的配置选项|
| [servicescan.service](#service) |service servicescan 的配置选项，仅启用服务(nmap)指纹识别，禁用 Web 指纹 在 yak 中通过 servicescan.service 调用 返回值: - 一个 servicescan.Scan 可接收的配置选项|
| [servicescan.web](#web) |web servicescan 的配置选项，仅启用 Web 指纹识别(只扫描 Web 服务指纹) 在 yak 中通过 servicescan.web 调用 返回值: - 一个 servicescan.Scan 可接收的配置选项|
| [servicescan.webRule](#webrule) |webRule servicescan 的配置选项，设置本次扫描使用的 Web 指纹规则 参数: - rs: 一个或多个 Web 指纹规则，支持 yaml 规则字符串、规则文件路径或规则对象 返回值: - 一个 servicescan.Scan 可接收的配置选项|
| [servicescan.withRuleGroup](#withrulegroup) |withRuleGroup servicescan 的配置选项，用于指定指纹库中的指纹组。 参数: - groups: 一个或多个指纹组名称 返回值: - 一个 servicescan.Scan 可接收的配置选项|
| [servicescan.withRuleGroupAll](#withrulegroupall) |withRuleGroupAll servicescan 的配置选项，用于指定使用指纹组的全部指纹。 返回值: - 一个 servicescan.Scan 可接收的配置选项|


## 函数定义
### Scan

#### 详细描述
Scan servicescan 库使用的端口扫描类型的方式为全连接扫描，用于对连接目标进行精准的扫描，相比 synscan 库的单纯扫描，servicescan 库会尝试获取精确指纹信息以及 CPE 信息

参数:

  - target: 目标地址，支持 CIDR 格式，支持 192.168.1.1-100 格式

  - port: 端口，支持 1-65535、1,2,3、1-100,200-300 格式

  - opts: 零个或多个 servicescan 扫描参数



返回值:

  - chan *MatchResult: 指纹识别结果管道

  - error: 启动失败时返回错误




Example:

``````````````yak
ch, err = servicescan.Scan("127.0.0.1", "22-80,443,3389")  // 开始扫描，函数会立即返回一个错误和结果管道
die(err) // 如果错误非空则报错
for result := range ch { // 通过遍历管道的形式获取管道中的结果

	   if result.IsOpen() { // 获取到的结果是一个结构体，可以调用IsOpen方法判断该端口是否打开
	       println(result.String()) // 输出结果，调用String方法获取可读字符串
	       println(result.GetCPEs()) // 查看 CPE 结果
	   }
	}
``````````````


#### 定义

`Scan(target string, port string, opts ...fp.ConfigOption) (chan *fp.MatchResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| target | `string` | 目标地址，支持 CIDR 格式，支持 192.168.1.1-100 格式 |
| port | `string` | 端口，支持 1-65535、1,2,3、1-100,200-300 格式 |
| opts | `...fp.ConfigOption` | 零个或多个 servicescan 扫描参数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *fp.MatchResult` | chan *MatchResult: 指纹识别结果管道 |
| r2 | `error` | 启动失败时返回错误 |


### ScanFromPing

#### 详细描述
ScanFromPing 从 ping.Scan 的结果中进行指纹识别

参数:

  - res: ping.Scan 的结果管道

  - ports: 端口，支持 1-65535、1,2,3、1-100,200-300 格式

  - opts: 零个或多个 servicescan 扫描参数



返回值:

  - chan *MatchResult: 指纹识别结果管道

  - error: 启动失败时返回错误




Example:

``````````````yak
pingResult, err = ping.Scan("192.168.1.1/24") // 先进行存活探测
die(err)
fpResults, err := servicescan.ScanFromPing(pingResult, "22-80,443,3389") // 将ping中拿到的结果传入servicescan中进行指纹扫描
die(err) // 如果错误非空则报错
for result := range fpResults { // 通过遍历管道的形式获取管道中的结果，一旦有结果返回就会执行循环体的代码

	   println(result.String()) // 输出结果，调用String方法获取可读字符串
	}
``````````````


#### 定义

`ScanFromPing(res chan *pingutil.PingResult, ports string, opts ...fp.ConfigOption) (chan *fp.MatchResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| res | `chan *pingutil.PingResult` | ping.Scan 的结果管道 |
| ports | `string` | 端口，支持 1-65535、1,2,3、1-100,200-300 格式 |
| opts | `...fp.ConfigOption` | 零个或多个 servicescan 扫描参数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *fp.MatchResult` | chan *MatchResult: 指纹识别结果管道 |
| r2 | `error` | 启动失败时返回错误 |


### ScanFromSpaceEngine

#### 详细描述
ScanFromSynResult / ScanFromSpaceEngine 从 synscan.Scan 或者 spacengine.Query 的结果中进行指纹识别

参数:

  - res: synscan.Scan 或者 spacengine.Query 的结果

  - opts: 零个或多个 servicescan 扫描参数



返回值:

  - chan *MatchResult: 指纹识别结果管道

  - error: 启动失败时返回错误




Example:

``````````````yak
ch, err = synscan.Scan("127.0.0.1", "22-80,443,3389")  // 开始扫描，函数会立即返回一个错误和结果管道
die(err) // 如果错误非空则报错
fpResults, err := servicescan.ScanFromSynResult(ch) // 将synscan中拿到的结果传入servicescan中进行指纹扫描
die(err) // 如果错误非空则报错
for result := range fpResults { // 通过遍历管道的形式获取管道中的结果，一旦有结果返回就会执行循环体的代码

	   println(result.String()) // 输出结果，调用String方法获取可读字符串
	}

res, err := spacengine.ShodanQuery(Apikey,query)
die(err) // 如果错误非空则报错
fpResults, err := servicescan.ScanFromSpaceEngine(res) // 将spacengine中拿到的结果传入servicescan中进行指纹扫描
die(err) // 如果错误非空则报错
for result := range fpResults { // 通过遍历管道的形式获取管道中的结果，一旦有结果返回就会执行循环体的代码

	   println(result.String()) // 输出结果，调用String方法获取可读字符串
	}


Context 契约 (重要):
  - 通过 servicescan.ctx() 注入的 ctx 会被本函数下游 inner goroutine 用作
    "发送结果时的退出信号". 调用方在停止 range outC 之前应当 cancel ctx,
    否则 inner goroutine 会通过 sendMatchResultOrDrop 的 ctx.Done() 分支
    退出, 结果会被丢弃 (首次丢弃会有一条 log.Warn, 后续静默).
  - ctx 缺省 (config.Ctx == nil) 时退化为 context.Background(), 仅依赖
    fp 内部超时托底, 这种情况下 cancel 路径不存在, 建议生产环境显式注入 ctx.

关键词: _scanFromTargetStream ctx 契约, outC goroutine 泄漏防护
``````````````


#### 定义

`ScanFromSpaceEngine(res any, opts ...fp.ConfigOption) (chan *fp.MatchResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| res | `any` | synscan.Scan 或者 spacengine.Query 的结果 |
| opts | `...fp.ConfigOption` | 零个或多个 servicescan 扫描参数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *fp.MatchResult` | chan *MatchResult: 指纹识别结果管道 |
| r2 | `error` | 启动失败时返回错误 |


### ScanFromSynResult

#### 详细描述
ScanFromSynResult / ScanFromSpaceEngine 从 synscan.Scan 或者 spacengine.Query 的结果中进行指纹识别

参数:

  - res: synscan.Scan 或者 spacengine.Query 的结果

  - opts: 零个或多个 servicescan 扫描参数



返回值:

  - chan *MatchResult: 指纹识别结果管道

  - error: 启动失败时返回错误




Example:

``````````````yak
ch, err = synscan.Scan("127.0.0.1", "22-80,443,3389")  // 开始扫描，函数会立即返回一个错误和结果管道
die(err) // 如果错误非空则报错
fpResults, err := servicescan.ScanFromSynResult(ch) // 将synscan中拿到的结果传入servicescan中进行指纹扫描
die(err) // 如果错误非空则报错
for result := range fpResults { // 通过遍历管道的形式获取管道中的结果，一旦有结果返回就会执行循环体的代码

	   println(result.String()) // 输出结果，调用String方法获取可读字符串
	}

res, err := spacengine.ShodanQuery(Apikey,query)
die(err) // 如果错误非空则报错
fpResults, err := servicescan.ScanFromSpaceEngine(res) // 将spacengine中拿到的结果传入servicescan中进行指纹扫描
die(err) // 如果错误非空则报错
for result := range fpResults { // 通过遍历管道的形式获取管道中的结果，一旦有结果返回就会执行循环体的代码

	   println(result.String()) // 输出结果，调用String方法获取可读字符串
	}


Context 契约 (重要):
  - 通过 servicescan.ctx() 注入的 ctx 会被本函数下游 inner goroutine 用作
    "发送结果时的退出信号". 调用方在停止 range outC 之前应当 cancel ctx,
    否则 inner goroutine 会通过 sendMatchResultOrDrop 的 ctx.Done() 分支
    退出, 结果会被丢弃 (首次丢弃会有一条 log.Warn, 后续静默).
  - ctx 缺省 (config.Ctx == nil) 时退化为 context.Background(), 仅依赖
    fp 内部超时托底, 这种情况下 cancel 路径不存在, 建议生产环境显式注入 ctx.

关键词: _scanFromTargetStream ctx 契约, outC goroutine 泄漏防护
``````````````


#### 定义

`ScanFromSynResult(res any, opts ...fp.ConfigOption) (chan *fp.MatchResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| res | `any` | synscan.Scan 或者 spacengine.Query 的结果 |
| opts | `...fp.ConfigOption` | 零个或多个 servicescan 扫描参数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *fp.MatchResult` | chan *MatchResult: 指纹识别结果管道 |
| r2 | `error` | 启动失败时返回错误 |


### ScanOne

#### 详细描述
ScanOne servicescan 单体扫描，同步扫描一个目标，主机+端口

参数:

  - target: 目标地址

  - port: 端口

  - opts: 零个或多个 servicescan 扫描参数



返回值:

  - *MatchResult: 单个目标的指纹识别结果

  - error: 扫描失败时返回错误




Example:

``````````````yak
result, err = servicescan.ScanOne("127.0.0.1", "22-80,443,3389")  // 开始扫描，函数会立即返回一个错误和结果
die(err) // 如果错误非空则报错
if result.IsOpen() { // 获取到的结果是一个结构体，可以调用IsOpen方法判断该端口是否打开

	    println(result.String()) // 输出结果，调用String方法获取可读字符串
	    println(result.GetCPEs()) // 查看 CPE 结果
	}
``````````````


#### 定义

`ScanOne(target string, port int, opts ...fp.ConfigOption) (*fp.MatchResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| target | `string` | 目标地址 |
| port | `int` | 端口 |
| opts | `...fp.ConfigOption` | 零个或多个 servicescan 扫描参数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*fp.MatchResult` | *MatchResult: 单个目标的指纹识别结果 |
| r2 | `error` | 扫描失败时返回错误 |


### active

#### 详细描述
active 设置是否启用主动发包模式，主动向目标发送探测包以提升指纹识别准确率

在 yak 中通过 servicescan.active 调用

参数:

  - raw: 是否启用主动发包模式



返回值:

  - 一个 servicescan.Scan 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：开启主动发包模式扫描
result = servicescan.Scan("127.0.0.1", "1-1000", servicescan.active(true))~

	for res = range result {
	    println(res.String())
	}
``````````````


#### 定义

`active(raw bool) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `bool` | 是否启用主动发包模式 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 一个 servicescan.Scan 可接收的配置选项 |


### all

#### 详细描述
all servicescan 的配置选项，强制同时启用 Web 与服务(nmap)全部指纹识别

在 yak 中通过 servicescan.all 调用

返回值:

  - 一个 servicescan.Scan 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：使用全部指纹进行扫描
result, err = servicescan.Scan("127.0.0.1", "22-80,443,3389,161", servicescan.all())
die(err)

	for res := range result {
	    println(res.String())
	}
``````````````


#### 定义

`all() fp.ConfigOption`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `fp.ConfigOption` | 一个 servicescan.Scan 可接收的配置选项 |


### cache

#### 详细描述
cache servicescan 的配置选项，设置本次扫描是否使用缓存

参数:

  - b: 是否使用缓存



返回值:

  - 一个 servicescan.Scan 可接收的配置选项




Example:

``````````````yak
result, err = servicescan.Scan("127.0.0.1", "22-80,443,3389,161", servicescan.cache(true))
die(err)

	for v := range result {
		println(v.String())
	}
``````````````


#### 定义

`cache(b bool) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` | 是否使用缓存 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 一个 servicescan.Scan 可接收的配置选项 |


### concurrent

#### 详细描述
concurrent servicescan 的配置选项，用于设置整体扫描并发

参数:

  - size: 并发数量



返回值:

  - 一个 servicescan.Scan 可接收的配置选项




Example:

``````````````yak
result, err = servicescan.Scan("127.0.0.1", "22-80,443,3389,161", servicescan.concurrent(100))
die(err)

	for v := range result {
		println(v.String())
	}
``````````````


#### 定义

`concurrent(size int) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| size | `int` | 并发数量 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 一个 servicescan.Scan 可接收的配置选项 |


### context

#### 详细描述
context 设置服务扫描使用的 context，用于取消或超时控制

在 yak 中通过 servicescan.context 调用；停止遍历结果前应 cancel 对应 ctx

参数:

  - ctx: 上下文对象



返回值:

  - 一个 servicescan.Scan 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：使用可取消的 context 控制扫描
ctx, cancel = context.WithCancel(context.Background())
defer cancel()
result = servicescan.Scan("127.0.0.1", "80,443", servicescan.context(ctx))~

	for res = range result {
	    println(res.String())
	}
``````````````


#### 定义

`context(ctx context.Context) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` | 上下文对象 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 一个 servicescan.Scan 可接收的配置选项 |


### databaseCache

#### 详细描述
databaseCache servicescan 的配置选项，设置本次扫描是否使用数据库缓存

参数:

  - b: 是否使用数据库缓存



返回值:

  - 一个 servicescan.Scan 可接收的配置选项




Example:

``````````````yak
result, err = servicescan.Scan("127.0.0.1", "22-80,443,3389,161", servicescan.databaseCache(true))
die(err)

	for v := range result {
		println(v.String())
	}
``````````````


#### 定义

`databaseCache(b bool) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` | 是否使用数据库缓存 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 一个 servicescan.Scan 可接收的配置选项 |


### debugLog

#### 详细描述
debugLog 的配置选项，设置本次扫描是否使用 debugLog

参数:

  - b: 可选，是否使用 debugLog，不传时默认为 true



返回值:

  - 一个 servicescan.Scan 可接收的配置选项




Example:

``````````````yak
result, err = servicescan.Scan("127.0.0.1", "22-80,443,3389,161", servicescan.debugLog(true))
die(err)

	for v := range result {
		println(v.String())
	}
``````````````


#### 定义

`debugLog(b ...bool) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `...bool` | 可选，是否使用 debugLog，不传时默认为 true |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 一个 servicescan.Scan 可接收的配置选项 |


### disableDefaultRule

#### 详细描述
disableDefaultRule servicescan 的配置选项，禁用内置默认指纹规则(通常配合自定义规则使用)

在 yak 中通过 servicescan.disableDefaultRule 调用

参数:

  - b: 可选，是否禁用默认规则，不传时默认为 true



返回值:

  - 一个 servicescan.Scan 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：禁用默认规则并使用自定义 web 规则
result, err = servicescan.Scan("127.0.0.1", "80", servicescan.disableDefaultRule(true))
die(err)
``````````````


#### 定义

`disableDefaultRule(b ...bool) fp.ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `...bool` | 可选，是否禁用默认规则，不传时默认为 true |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `fp.ConfigOption` | 一个 servicescan.Scan 可接收的配置选项 |


### disableOpenPortGuard

#### 详细描述
disableOpenPortGuard servicescan 的配置选项, 禁用单主机开放端口数保护.

参数:

  - b: 可选，是否禁用，不传时默认为 true



返回值:

  - 一个 servicescan.Scan 可接收的配置选项




Example:

``````````````yak
result, err = servicescan.Scan("127.0.0.1", "1-65535", servicescan.disableOpenPortGuard())
die(err)

	for v := range result {
	    println(v.String())
	}
``````````````


#### 定义

`disableOpenPortGuard(b ...bool) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `...bool` | 可选，是否禁用，不传时默认为 true |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 一个 servicescan.Scan 可接收的配置选项 |


### disableWebScanConnPool

#### 详细描述
disableWebScanConnPool servicescan 的配置选项，用于禁用 web 扫描的连接池

参数:

  - b: 是否禁用连接池，默认为 false



返回值:

  - 一个 servicescan.Scan 可接收的配置选项




Example:

``````````````yak
result,err = servicescan.Scan("127.0.0.1", "22-80,443,3389,161", servicescan.disableWebScanConnPool(true)) // 禁用 web 扫描的连接池
die(err) // 如果错误非空则报错
for res := range result { // 通过遍历管道的形式获取管道中的结果，一旦有结果返回就会执行循环体的代码

	   println(res.String()) // 输出结果，调用String方法获取可读
	   println(res.String()) // 输出结果，调用String方法获取可读字符串
	}
``````````````


#### 定义

`disableWebScanConnPool(b bool) fp.ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` | 是否禁用连接池，默认为 false |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `fp.ConfigOption` | 一个 servicescan.Scan 可接收的配置选项 |


### excludeHosts

#### 详细描述
excludeHosts servicescan 的配置选项，设置本次扫描排除的主机

参数:

  - hosts: 主机，支持逗号分割、CIDR、- 的格式



返回值:

  - 一个 servicescan.Scan 可接收的配置选项




Example:

``````````````yak
result, err = servicescan.Scan("192.168.1.1/24", "22-80,443,3389", servicescan.excludeHosts("192.168.1.1"))
die(err)

	for v := range result {
		println(v.String())
	}
``````````````


#### 定义

`excludeHosts(hosts string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| hosts | `string` | 主机，支持逗号分割、CIDR、- 的格式 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 一个 servicescan.Scan 可接收的配置选项 |


### excludePorts

#### 详细描述
excludePorts servicescan 的配置选项，设置本次扫描排除的端口

参数:

  - ports: 端口，支持逗号分割、- 的格式



返回值:

  - 一个 servicescan.Scan 可接收的配置选项




Example:

``````````````yak
result, err = servicescan.Scan("127.0.0.1", "22-80,443,3389,161", servicescan.excludePorts("22,80"))
die(err)

	for v := range result {
		println(v.String())
	}
``````````````


#### 定义

`excludePorts(ports string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ports | `string` | 端口，支持逗号分割、- 的格式 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 一个 servicescan.Scan 可接收的配置选项 |


### maxProbes

#### 详细描述
maxProbes servicescan 的配置选项，在主动模式发包的基础上设置本次扫描使用的最大探测包数量，默认值为 5

参数:

  - m: 最大探测包数量



返回值:

  - 一个 servicescan.Scan 可接收的配置选项




Example:

``````````````yak
result, err = servicescan.Scan("127.0.0.1", "22-80,443,3389,161",
servicescan.active(true), // 需要在主动发包的基础上
servicescan.maxProbes(10)
)
die(err)

	for v := range result {
		println(v.String())
	}
``````````````


#### 定义

`maxProbes(m int) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| m | `int` | 最大探测包数量 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 一个 servicescan.Scan 可接收的配置选项 |


### maxProbesConcurrent

#### 详细描述
maxProbesConcurrent servicescan 的配置选项，设置本次扫描发送 Probe 的并发量，默认值为 5

参数:

  - m: 并发量



返回值:

  - 一个 servicescan.Scan 可接收的配置选项




Example:

``````````````yak
result, err = servicescan.Scan("127.0.0.1", "22-80,443,3389,161",
servicescan.active(true), // 需要在主动发包的基础上
servicescan.maxProbes(50), // 设置本次扫描使用的最大探测包数量
servicescan.maxProbesConcurrent(10) // 设置本次扫描发送 Probe 的并发量
)
die(err)

	for v := range result {
		println(v.String())
	}
``````````````


#### 定义

`maxProbesConcurrent(m int) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| m | `int` | 并发量 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 一个 servicescan.Scan 可接收的配置选项 |


### nmapRarityMax

#### 详细描述
nmapRarityMax servicescan 的配置选项，设置本次扫描使用的 Nmap 指纹稀有度，在主动模式发包的基础上进行探测控制

稀有度越大，表示这个服务在现实存在的可能性越小，取值范围为 1-9，默认值为 5

参数:

  - rarity: 稀有度，取值范围为 1-9



返回值:

  - 一个 servicescan.Scan 可接收的配置选项




Example:

``````````````yak
result, err = servicescan.Scan("127.0.0.1", "22-80,443,3389,161",
servicescan.active(true), // 需要在主动发包的基础上通过稀有度进行筛选
servicescan.nmapRarityMax(9),
)
die(err)

	for v := range result {
		println(v.String())
	}
``````````````


#### 定义

`nmapRarityMax(rarity int) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| rarity | `int` | 稀有度，取值范围为 1-9 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 一个 servicescan.Scan 可接收的配置选项 |


### nmapRule

#### 详细描述
nmapRule servicescan 的配置选项，设置本次扫描使用的 Nmap 指纹规则

参数:

  - i: Nmap 指纹规则，支持规则字节内容、规则文件路径或规则映射



返回值:

  - 一个 servicescan.Scan 可接收的配置选项




Example:

``````````````yak
result, err = servicescan.Scan("127.0.0.1", "22,3306", servicescan.service(), servicescan.nmapRule(nmapProbeContent))
die(err)

	for v := range result {
	    println(v.String())
	}
``````````````


#### 定义

`nmapRule(i any) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | Nmap 指纹规则，支持规则字节内容、规则文件路径或规则映射 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 一个 servicescan.Scan 可接收的配置选项 |


### onFinish

#### 详细描述
onFinish servicescan 的配置选项，设置本次扫描完成单个目标时的回调函数

参数:

  - cb: 扫描完成时触发的回调函数，入参为匹配结果



返回值:

  - 一个 servicescan.Scan 可接收的配置选项




Example:

``````````````yak
result, err := servicescan.Scan("127.0.0.1", "22,80,443", servicescan.onFinish(result => dump(result.String())))
die(err)
for i in result {
	println(i.String())
}
``````````````


#### 定义

`onFinish(cb func(*MatchResult)) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cb | `func(*MatchResult)` | 扫描完成时触发的回调函数，入参为匹配结果 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 一个 servicescan.Scan 可接收的配置选项 |


### onOpen

#### 详细描述
onOpen servicescan 的配置选项，设置本次扫描端口开放时的回调函数

参数:

  - cb: 端口开放时触发的回调函数，入参为匹配结果



返回值:

  - 一个 servicescan.Scan 可接收的配置选项




Example:

``````````````yak
result, err := servicescan.Scan("127.0.0.1", "22,80,443", servicescan.onOpen(result => dump(result.String())))
die(err)

	for i in result {
			println(i.String())
		}
``````````````


#### 定义

`onOpen(cb func(*MatchResult)) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cb | `func(*MatchResult)` | 端口开放时触发的回调函数，入参为匹配结果 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 一个 servicescan.Scan 可接收的配置选项 |


### openPortGuardLimit

#### 详细描述
openPortGuardLimit servicescan 的配置选项, 设置单主机开放端口数熔断阈值.

参数:

  - limit: 熔断阈值，小于等于 0 时使用默认值



返回值:

  - 一个 servicescan.Scan 可接收的配置选项




Example:

``````````````yak
result, err = servicescan.Scan("127.0.0.1", "1-65535", servicescan.openPortGuardLimit(1000))
die(err)

	for v := range result {
	    println(v.String())
	}
``````````````


#### 定义

`openPortGuardLimit(limit int) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| limit | `int` | 熔断阈值，小于等于 0 时使用默认值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 一个 servicescan.Scan 可接收的配置选项 |


### probeTimeout

#### 详细描述
probeTimeout servicescan 的配置选项，设置每一个探测包的超时时间

参数:

  - f: 超时时间，单位为秒



返回值:

  - 一个 servicescan.Scan 可接收的配置选项




Example:

``````````````yak
result, err = servicescan.Scan("127.0.0.1", "22-80,443,3389,161", servicescan.probeTimeout(5))
die(err)

	for v := range result {
		println(v.String())
	}
``````````````


#### 定义

`probeTimeout(f float64) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `float64` | 超时时间，单位为秒 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 一个 servicescan.Scan 可接收的配置选项 |


### proto

#### 详细描述
proto servicescan 的配置选项，用于指定扫描协议

参数:

  - proto: 协议，例如 tcp、udp，可选参数，不传入参数默认为 tcp



返回值:

  - 一个 servicescan.Scan 可接收的配置选项




Example:

``````````````yak
result,err = servicescan.Scan("127.0.0.1", "22-80,443,3389,161", servicescan.proto(["tcp","udp"]...)) // 使用 TCP 和 UDP 进行扫描
die(err) // 如果错误非空则报错
for res := range result { // 通过遍历管道的形式获取管道中的结果，一旦有结果返回就会执行循环体的代码

	   println(res.String()) // 输出结果，调用String方法获取可读字符串
	}
``````````````


#### 定义

`proto(proto ...any) fp.ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| proto | `...any` | 协议，例如 tcp、udp，可选参数，不传入参数默认为 tcp |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `fp.ConfigOption` | 一个 servicescan.Scan 可接收的配置选项 |


### proxy

#### 详细描述
proxy servicescan 的配置选项，设置本次扫描使用的代理

参数:

  - proxies: 一个或多个代理地址，支持 http 和 socks5



返回值:

  - 一个 servicescan.Scan 可接收的配置选项




Example:

``````````````yak
result, err = servicescan.Scan("127.0.0.1", "22-80,443,3389,161", servicescan.proxy("http://127.0.0.1:1080"))
die(err)

	for v := range result {
		println(v.String())
	}
``````````````


#### 定义

`proxy(proxies ...string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| proxies | `...string` | 一个或多个代理地址，支持 http 和 socks5 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 一个 servicescan.Scan 可接收的配置选项 |


### service

#### 详细描述
service servicescan 的配置选项，仅启用服务(nmap)指纹识别，禁用 Web 指纹

在 yak 中通过 servicescan.service 调用

返回值:

  - 一个 servicescan.Scan 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：仅使用 service 指纹进行扫描
result, err = servicescan.Scan("127.0.0.1", "22-80,443,3389,161", servicescan.service())
die(err)

	for res := range result {
	    println(res.String())
	}
``````````````


#### 定义

`service() fp.ConfigOption`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `fp.ConfigOption` | 一个 servicescan.Scan 可接收的配置选项 |


### web

#### 详细描述
web servicescan 的配置选项，仅启用 Web 指纹识别(只扫描 Web 服务指纹)

在 yak 中通过 servicescan.web 调用

返回值:

  - 一个 servicescan.Scan 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：仅使用 web 指纹进行扫描
result, err = servicescan.Scan("127.0.0.1", "22-80,443,3389,161", servicescan.web())
die(err)

	for res := range result {
	    println(res.String())
	}
``````````````


#### 定义

`web() fp.ConfigOption`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `fp.ConfigOption` | 一个 servicescan.Scan 可接收的配置选项 |


### webRule

#### 详细描述
webRule servicescan 的配置选项，设置本次扫描使用的 Web 指纹规则

参数:

  - rs: 一个或多个 Web 指纹规则，支持 yaml 规则字符串、规则文件路径或规则对象



返回值:

  - 一个 servicescan.Scan 可接收的配置选项




Example:

``````````````yak
result, err = servicescan.Scan("127.0.0.1", "80,443", servicescan.web(), servicescan.webRule(yamlRuleContent))
die(err)

	for v := range result {
	    println(v.String())
	}
``````````````


#### 定义

`webRule(rs ...any) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| rs | `...any` | 一个或多个 Web 指纹规则，支持 yaml 规则字符串、规则文件路径或规则对象 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 一个 servicescan.Scan 可接收的配置选项 |


### withRuleGroup

#### 详细描述
withRuleGroup servicescan 的配置选项，用于指定指纹库中的指纹组。

参数:

  - groups: 一个或多个指纹组名称



返回值:

  - 一个 servicescan.Scan 可接收的配置选项




Example:

``````````````yak
result,err = servicescan.Scan("127.0.0.1", "22-80,443,3389,161", servicescan.withRuleGroup("group1","group2")) // 使用"group1"和"group2"指纹组的指纹进行扫描
die(err) // 如果错误非空则报错
for res := range result { // 通过遍历管道的形式获取管道中的结果，一旦有结果返回就会执行循环体的代码

	   println(res.String()) // 输出结果，调用String方法获取可读字符串
	}
``````````````


#### 定义

`withRuleGroup(groups ...string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| groups | `...string` | 一个或多个指纹组名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 一个 servicescan.Scan 可接收的配置选项 |


### withRuleGroupAll

#### 详细描述
withRuleGroupAll servicescan 的配置选项，用于指定使用指纹组的全部指纹。

返回值:

  - 一个 servicescan.Scan 可接收的配置选项




Example:

``````````````yak
result,err = servicescan.Scan("127.0.0.1", "22-80,443,3389,161", servicescan.withRuleGroupAll()) // 使用全部指纹组的指纹进行扫描
die(err) // 如果错误非空则报错
for res := range result { // 通过遍历管道的形式获取管道中的结果，一旦有结果返回就会执行循环体的代码

	   println(res.String()) // 输出结果，调用String方法获取可读字符串
	}
``````````````


#### 定义

`withRuleGroupAll() ConfigOption`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 一个 servicescan.Scan 可接收的配置选项 |


