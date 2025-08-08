# servicescan

|函数名|函数描述/介绍|
|:------|:--------|
| [servicescan.Scan](#scan) |Scan servicescan 库使用的端口扫描类型的方式为全连接扫描，用于对连接目标进行精准的扫描，相比 synscan 库的单纯扫描，servicescan 库会尝试获取精确指纹信息以及 CPE 信息  @param {string} target 目标地址，支持 CIDR 格式，支持 192...|
| [servicescan.ScanFromPing](#scanfromping) |ScanFromPing 从 ping.Scan 的结果中进行指纹识别  @param {chan *pingutil.PingResult} res ping.Scan 的结果  @param {string} ports 端口，支持 1-65535、1,2,3、1-100,200-300 格式 ...|
| [servicescan.ScanFromSpaceEngine](#scanfromspaceengine) |ScanFromSynResult / ScanFromSpaceEngine 从 synscan.Scan 或者 spacengine.Query 的结果中进行指纹识别  @param {interface{}} res synscan.Scan 或者 spacengine.Query 的结果  ...|
| [servicescan.ScanFromSynResult](#scanfromsynresult) |ScanFromSynResult / ScanFromSpaceEngine 从 synscan.Scan 或者 spacengine.Query 的结果中进行指纹识别  @param {interface{}} res synscan.Scan 或者 spacengine.Query 的结果  ...|
| [servicescan.ScanOne](#scanone) |ScanOne servicescan 单体扫描，同步扫描一个目标，主机+端口  @param {string} target 目标地址  @param {int} port 端口  @param {ConfigOption} [opts] servicescan 扫描参数  @return {Ma...|
| [servicescan.active](#active) ||
| [servicescan.all](#all) ||
| [servicescan.cache](#cache) |cache servicescan 的配置选项，设置本次扫描是否使用缓存  @param {bool} b 是否使用缓存  @return {ConfigOption} 返回配置项  |
| [servicescan.concurrent](#concurrent) |concurrent servicescan 的配置选项，用于设置整体扫描并发  @param {int} size 并发数量  @return {ConfigOption} 返回配置项  |
| [servicescan.databaseCache](#databasecache) |databaseCache servicescan 的配置选项，设置本次扫描是否使用数据库缓存  @param {bool} b 是否使用数据库缓存  @return {ConfigOption} 返回配置项  |
| [servicescan.debugLog](#debuglog) |debugLog 的配置选项，设置本次扫描是否使用 debugLog  @param {bool} b 是否使用 debugLog  @return {ConfigOption} 返回配置项  |
| [servicescan.disableDefaultRule](#disabledefaultrule) ||
| [servicescan.disableWebScanConnPool](#disablewebscanconnpool) |disableWebScanConnPool servicescan 的配置选项，用于禁用 web 扫描的连接池 @param {bool} b 是否禁用连接池，默认为 false @return {ConfigOption} 返回配置选项 ``` result,err = servicescan....|
| [servicescan.excludeHosts](#excludehosts) |excludeHosts servicescan 的配置选项，设置本次扫描排除的主机  @param {string} hosts 主机，支持逗号分割、CIDR、-的格式  @return {ConfigOption} 返回配置项  |
| [servicescan.excludePorts](#excludeports) |excludePorts servicescan 的配置选项，设置本次扫描排除的端口  @param {string} ports 端口，支持逗号分割、-的格式  @return {ConfigOption} 返回配置项  |
| [servicescan.maxProbes](#maxprobes) |maxProbes servicescan 的配置选项，在主动模式发包的基础上设置本次扫描使用的最大探测包数量，默认值为 5  @param {int} m 最大探测包数量  @return {ConfigOption} 返回配置项  |
| [servicescan.maxProbesConcurrent](#maxprobesconcurrent) |maxProbesConcurrent servicescan 的配置选项，设置本次扫描发送 Probe 的并发量，默认值为 5  @param {int} m 并发量  @return {ConfigOption} 返回配置项  |
| [servicescan.nmapRarityMax](#nmapraritymax) |nmapRarityMax servicescan 的配置选项，设置本次扫描使用的 Nmap 指纹稀有度，在主动模式发包的基础上进行探测控制  稀有度越大，表示这个服务在现实存在的可能性越小，取值范围为 1-9，默认值为 5  @param {int} rarity 稀有度，取值范围为 1-9  @...|
| [servicescan.nmapRule](#nmaprule) |nmapRule servicescan 的配置选项，设置本次扫描使用的 Nmap 指纹规则 @param {interface{}} i Nmap 指纹规则 |
| [servicescan.onFinish](#onfinish) |onFinish servicescan 的配置选项，设置本次扫描端口开放时的回调函数  @param {func(*MatchResult)} cb 回调函数  @return {ConfigOption} 返回配置项  |
| [servicescan.onOpen](#onopen) |onOpen servicescan 的配置选项，设置本次扫描端口开放时的回调函数  @param {func(*MatchResult)} cb 回调函数  @return {ConfigOption} 返回配置项  |
| [servicescan.probeTimeout](#probetimeout) |probeTimeout servicescan 的配置选项，设置每一个探测包的超时时间  @param {float64} f 超时时间，单位为秒  @return {ConfigOption} 返回配置项  |
| [servicescan.proto](#proto) |proto servicescan 的配置选项，用于指定扫描协议  @param {...interface{}} [proto] 协议，例如：tcp、udp，可选参数，不传入参数默认为 tcp  @return {ConfigOption} 返回配置选项  |
| [servicescan.proxy](#proxy) |proxy servicescan 的配置选项，设置本次扫描使用的代理  @param {string} proxies 代理地址，支持 http 和 socks5  @return {ConfigOption} 返回配置项  |
| [servicescan.service](#service) ||
| [servicescan.web](#web) ||
| [servicescan.webRule](#webrule) |webRule servicescan 的配置选项，设置本次扫描使用的 Web 指纹规则 @param {interface{}} i Web 指纹规则 |
| [servicescan.withRuleGroup](#withrulegroup) |service servicescan 的配置选项，用于指定指纹库中的指纹组。  @return {ConfigOption} 返回配置选项  |
| [servicescan.withRuleGroupAll](#withrulegroupall) |service servicescan 的配置选项，用于指定使用指纹组的全部指纹。  @return {ConfigOption} 返回配置选项  |


## 函数定义
### Scan

#### 详细描述
Scan servicescan 库使用的端口扫描类型的方式为全连接扫描，用于对连接目标进行精准的扫描，相比 synscan 库的单纯扫描，servicescan 库会尝试获取精确指纹信息以及 CPE 信息

@param {string} target 目标地址，支持 CIDR 格式，支持 192.168.1.1-100 格式

@param {string} port 端口，支持 1-65535、1,2,3、1-100,200-300 格式

@param {ConfigOption} [opts] servicescan 扫描参数

@return {chan *MatchResult} 返回结果

Example:
```
ch, err = servicescan.Scan("127.0.0.1", "22-80,443,3389")  // 开始扫描，函数会立即返回一个错误和结果管道
die(err) // 如果错误非空则报错
for result := range ch { // 通过遍历管道的形式获取管道中的结果

	   if result.IsOpen() { // 获取到的结果是一个结构体，可以调用IsOpen方法判断该端口是否打开
	       println(result.String()) // 输出结果，调用String方法获取可读字符串
	       println(result.GetCPEs()) // 查看 CPE 结果
	   }
	}

```


#### 定义

`Scan(target string, port string, opts ...fp.ConfigOption) (chan *fp.MatchResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| target | `string` |   |
| port | `string` |   |
| opts | `...fp.ConfigOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *fp.MatchResult` |   |
| r2 | `error` |   |


### ScanFromPing

#### 详细描述
ScanFromPing 从 ping.Scan 的结果中进行指纹识别

@param {chan *pingutil.PingResult} res ping.Scan 的结果

@param {string} ports 端口，支持 1-65535、1,2,3、1-100,200-300 格式

@param {ConfigOption} [opts] synscan 扫描参数

@return {chan *MatchResult} 返回结果

Example:
```
pingResult, err = ping.Scan("192.168.1.1/24") // 先进行存活探测
die(err)
fpResults, err := servicescan.ScanFromPing(pingResult, "22-80,443,3389") // 将ping中拿到的结果传入servicescan中进行指纹扫描
die(err) // 如果错误非空则报错
for result := range fpResults { // 通过遍历管道的形式获取管道中的结果，一旦有结果返回就会执行循环体的代码

	   println(result.String()) // 输出结果，调用String方法获取可读字符串
	}

```


#### 定义

`ScanFromPing(res chan *pingutil.PingResult, ports string, opts ...fp.ConfigOption) (chan *fp.MatchResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| res | `chan *pingutil.PingResult` |   |
| ports | `string` |   |
| opts | `...fp.ConfigOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *fp.MatchResult` |   |
| r2 | `error` |   |


### ScanFromSpaceEngine

#### 详细描述
ScanFromSynResult / ScanFromSpaceEngine 从 synscan.Scan 或者 spacengine.Query 的结果中进行指纹识别

@param {interface{}} res synscan.Scan 或者 spacengine.Query 的结果

@param {scanOpt} [opts] synscan 扫描参数

@return {chan *MatchResult} 返回结果

Example:
```
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

```


#### 定义

`ScanFromSpaceEngine(res any, opts ...fp.ConfigOption) (chan *fp.MatchResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| res | `any` |   |
| opts | `...fp.ConfigOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *fp.MatchResult` |   |
| r2 | `error` |   |


### ScanFromSynResult

#### 详细描述
ScanFromSynResult / ScanFromSpaceEngine 从 synscan.Scan 或者 spacengine.Query 的结果中进行指纹识别

@param {interface{}} res synscan.Scan 或者 spacengine.Query 的结果

@param {scanOpt} [opts] synscan 扫描参数

@return {chan *MatchResult} 返回结果

Example:
```
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

```


#### 定义

`ScanFromSynResult(res any, opts ...fp.ConfigOption) (chan *fp.MatchResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| res | `any` |   |
| opts | `...fp.ConfigOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *fp.MatchResult` |   |
| r2 | `error` |   |


### ScanOne

#### 详细描述
ScanOne servicescan 单体扫描，同步扫描一个目标，主机+端口

@param {string} target 目标地址

@param {int} port 端口

@param {ConfigOption} [opts] servicescan 扫描参数

@return {MatchResult} 返回结果

Example:
```
result, err = servicescan.ScanOne("127.0.0.1", "22-80,443,3389")  // 开始扫描，函数会立即返回一个错误和结果
die(err) // 如果错误非空则报错
if result.IsOpen() { // 获取到的结果是一个结构体，可以调用IsOpen方法判断该端口是否打开

	    println(result.String()) // 输出结果，调用String方法获取可读字符串
	    println(result.GetCPEs()) // 查看 CPE 结果
	}

```


#### 定义

`ScanOne(target string, port int, opts ...fp.ConfigOption) (*fp.MatchResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| target | `string` |   |
| port | `int` |   |
| opts | `...fp.ConfigOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*fp.MatchResult` |   |
| r2 | `error` |   |


### active

#### 详细描述


#### 定义

`active(raw bool) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### all

#### 详细描述


#### 定义

`all() fp.ConfigOption`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `fp.ConfigOption` |   |


### cache

#### 详细描述
cache servicescan 的配置选项，设置本次扫描是否使用缓存

@param {bool} b 是否使用缓存

@return {ConfigOption} 返回配置项

Example:
```
result, err = servicescan.Scan("127.0.0.1", "22-80,443,3389,161", servicescan.cache(true))
die(err)

	for v := range result {
		println(v.String())
	}

```


#### 定义

`cache(b bool) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### concurrent

#### 详细描述
concurrent servicescan 的配置选项，用于设置整体扫描并发

@param {int} size 并发数量

@return {ConfigOption} 返回配置项

Example:
```
result, err = servicescan.Scan("127.0.0.1", "22-80,443,3389,161", servicescan.concurrent(100))
die(err)

	for v := range result {
		println(v.String())
	}

```


#### 定义

`concurrent(size int) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| size | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### databaseCache

#### 详细描述
databaseCache servicescan 的配置选项，设置本次扫描是否使用数据库缓存

@param {bool} b 是否使用数据库缓存

@return {ConfigOption} 返回配置项

Example:
```
result, err = servicescan.Scan("127.0.0.1", "22-80,443,3389,161", servicescan.databaseCache(true))
die(err)

	for v := range result {
		println(v.String())
	}

```


#### 定义

`databaseCache(b bool) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### debugLog

#### 详细描述
debugLog 的配置选项，设置本次扫描是否使用 debugLog

@param {bool} b 是否使用 debugLog

@return {ConfigOption} 返回配置项

Example:
```
result, err = servicescan.Scan("127.0.0.1", "22-80,443,3389,161", servicescan.debugLog(true))
die(err)

	for v := range result {
		println(v.String())
	}

```


#### 定义

`debugLog(b ...bool) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `...bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### disableDefaultRule

#### 详细描述


#### 定义

`disableDefaultRule(b ...bool) fp.ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `...bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `fp.ConfigOption` |   |


### disableWebScanConnPool

#### 详细描述
disableWebScanConnPool servicescan 的配置选项，用于禁用 web 扫描的连接池
@param {bool} b 是否禁用连接池，默认为 false
@return {ConfigOption} 返回配置选项
```
result,err = servicescan.Scan(&#34;127.0.0.1&#34;, &#34;22-80,443,3389,161&#34;, servicescan.disableWebScanConnPool(true)) // 禁用 web 扫描的连接池
die(err) // 如果错误非空则报错
for res := range result { // 通过遍历管道的形式获取管道中的结果，一旦有结果返回就会执行循环体的代码

	   println(res.String()) // 输出结果，调用String方法获取可读
	   println(res.String()) // 输出结果，调用String方法获取可读字符串
	}

```


#### 定义

`disableWebScanConnPool(b bool) fp.ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `fp.ConfigOption` |   |


### excludeHosts

#### 详细描述
excludeHosts servicescan 的配置选项，设置本次扫描排除的主机

@param {string} hosts 主机，支持逗号分割、CIDR、-的格式

@return {ConfigOption} 返回配置项

Example:
```
result, err = servicescan.Scan("192.168.1.1/24", "22-80,443,3389", servicescan.excludeHosts("192.168.1.1"))
die(err)

	for v := range result {
		println(v.String())
	}

```


#### 定义

`excludeHosts(hosts string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| hosts | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### excludePorts

#### 详细描述
excludePorts servicescan 的配置选项，设置本次扫描排除的端口

@param {string} ports 端口，支持逗号分割、-的格式

@return {ConfigOption} 返回配置项

Example:
```
result, err = servicescan.Scan("127.0.0.1", "22-80,443,3389,161", servicescan.excludePorts("22,80"))
die(err)

	for v := range result {
		println(v.String())
	}

```


#### 定义

`excludePorts(ports string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ports | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### maxProbes

#### 详细描述
maxProbes servicescan 的配置选项，在主动模式发包的基础上设置本次扫描使用的最大探测包数量，默认值为 5

@param {int} m 最大探测包数量

@return {ConfigOption} 返回配置项

Example:
```
result, err = servicescan.Scan("127.0.0.1", "22-80,443,3389,161",
servicescan.active(true), // 需要在主动发包的基础上
servicescan.maxProbes(10)
)
die(err)

	for v := range result {
		println(v.String())
	}

```


#### 定义

`maxProbes(m int) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| m | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### maxProbesConcurrent

#### 详细描述
maxProbesConcurrent servicescan 的配置选项，设置本次扫描发送 Probe 的并发量，默认值为 5

@param {int} m 并发量

@return {ConfigOption} 返回配置项

Example:
```
result, err = servicescan.Scan("127.0.0.1", "22-80,443,3389,161",
servicescan.active(true), // 需要在主动发包的基础上
servicescan.maxProbes(50), // 设置本次扫描使用的最大探测包数量
servicescan.maxProbesConcurrent(10) // 设置本次扫描发送 Probe 的并发量
)
die(err)

	for v := range result {
		println(v.String())
	}

```


#### 定义

`maxProbesConcurrent(m int) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| m | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### nmapRarityMax

#### 详细描述
nmapRarityMax servicescan 的配置选项，设置本次扫描使用的 Nmap 指纹稀有度，在主动模式发包的基础上进行探测控制

稀有度越大，表示这个服务在现实存在的可能性越小，取值范围为 1-9，默认值为 5

@param {int} rarity 稀有度，取值范围为 1-9

@return {ConfigOption} 返回配置项

Example:
```
result, err = servicescan.Scan("127.0.0.1", "22-80,443,3389,161",
servicescan.active(true), // 需要在主动发包的基础上通过稀有度进行筛选
servicescan.nmapRarityMax(9),
)
die(err)

	for v := range result {
		println(v.String())
	}

```


#### 定义

`nmapRarityMax(rarity int) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| rarity | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### nmapRule

#### 详细描述
nmapRule servicescan 的配置选项，设置本次扫描使用的 Nmap 指纹规则
@param {interface{}} i Nmap 指纹规则


#### 定义

`nmapRule(i any) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### onFinish

#### 详细描述
onFinish servicescan 的配置选项，设置本次扫描端口开放时的回调函数

@param {func(*MatchResult)} cb 回调函数

@return {ConfigOption} 返回配置项

Example:
```

	result, err := servicescan.Scan("127.0.0.1", "22,80,443", servicescan.onFinish(result => dump(result.String())))
	die(err)
	for i in result {
		println(i.String())
	}

```


#### 定义

`onFinish(cb func(*MatchResult)) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cb | `func(*MatchResult)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### onOpen

#### 详细描述
onOpen servicescan 的配置选项，设置本次扫描端口开放时的回调函数

@param {func(*MatchResult)} cb 回调函数

@return {ConfigOption} 返回配置项

Example:
```
result, err := servicescan.Scan("127.0.0.1", "22,80,443", servicescan.onOpen(result => dump(result.String())))
die(err)

	for i in result {
			println(i.String())
		}

```


#### 定义

`onOpen(cb func(*MatchResult)) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cb | `func(*MatchResult)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### probeTimeout

#### 详细描述
probeTimeout servicescan 的配置选项，设置每一个探测包的超时时间

@param {float64} f 超时时间，单位为秒

@return {ConfigOption} 返回配置项

Example:
```
result, err = servicescan.Scan("127.0.0.1", "22-80,443,3389,161", servicescan.probeTimeout(5))
die(err)

	for v := range result {
		println(v.String())
	}

```


#### 定义

`probeTimeout(f float64) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### proto

#### 详细描述
proto servicescan 的配置选项，用于指定扫描协议

@param {...interface{}} [proto] 协议，例如：tcp、udp，可选参数，不传入参数默认为 tcp

@return {ConfigOption} 返回配置选项

Example:
```
result,err = servicescan.Scan("127.0.0.1", "22-80,443,3389,161", servicescan.proto(["tcp","udp"]...)) // 使用 TCP 和 UDP 进行扫描
die(err) // 如果错误非空则报错
for res := range result { // 通过遍历管道的形式获取管道中的结果，一旦有结果返回就会执行循环体的代码

	   println(res.String()) // 输出结果，调用String方法获取可读字符串
	}

```


#### 定义

`proto(proto ...any) fp.ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| proto | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `fp.ConfigOption` |   |


### proxy

#### 详细描述
proxy servicescan 的配置选项，设置本次扫描使用的代理

@param {string} proxies 代理地址，支持 http 和 socks5

@return {ConfigOption} 返回配置项

Example:
```
result, err = servicescan.Scan("127.0.0.1", "22-80,443,3389,161", servicescan.proxy("http://127.0.0.1:1080"))
die(err)

	for v := range result {
		println(v.String())
	}

```


#### 定义

`proxy(proxies ...string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| proxies | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### service

#### 详细描述


#### 定义

`service() fp.ConfigOption`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `fp.ConfigOption` |   |


### web

#### 详细描述


#### 定义

`web() fp.ConfigOption`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `fp.ConfigOption` |   |


### webRule

#### 详细描述
webRule servicescan 的配置选项，设置本次扫描使用的 Web 指纹规则
@param {interface{}} i Web 指纹规则


#### 定义

`webRule(rs ...any) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| rs | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### withRuleGroup

#### 详细描述
service servicescan 的配置选项，用于指定指纹库中的指纹组。

@return {ConfigOption} 返回配置选项

Example:
```
result,err = servicescan.Scan("127.0.0.1", "22-80,443,3389,161", servicescan.withRuleGroup("group1","group2")) // 使用"group1"和"group2"指纹组的指纹进行扫描
die(err) // 如果错误非空则报错
for res := range result { // 通过遍历管道的形式获取管道中的结果，一旦有结果返回就会执行循环体的代码

	   println(res.String()) // 输出结果，调用String方法获取可读字符串
	}

```


#### 定义

`withRuleGroup(groups ...string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| groups | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### withRuleGroupAll

#### 详细描述
service servicescan 的配置选项，用于指定使用指纹组的全部指纹。

@return {ConfigOption} 返回配置选项

Example:
```
result,err = servicescan.Scan("127.0.0.1", "22-80,443,3389,161", servicescan.withRuleGroupAll()) // 使用全部指纹组的指纹进行扫描
die(err) // 如果错误非空则报错
for res := range result { // 通过遍历管道的形式获取管道中的结果，一旦有结果返回就会执行循环体的代码

	   println(res.String()) // 输出结果，调用String方法获取可读字符串
	}

```


#### 定义

`withRuleGroupAll() ConfigOption`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


