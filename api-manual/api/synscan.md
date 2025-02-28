# synscan

|函数名|函数描述/介绍|
|:------|:--------|
| [synscan.FixPermission](#fixpermission) |FixPermission 尝试修复 pcap 权限问题  |
| [synscan.Scan](#scan) |Scan 使用 SYN 扫描技术进行端口扫描，它不必打开一个完整的TCP连接，只发送一个SYN包，就能做到打开连接的效果，然后等待对端的反应  @param {string} target 目标地址，支持 CIDR 格式  @param {string} port 端口，支持 1-65535、1,2...|
| [synscan.ScanFromPing](#scanfromping) |ScanFromPing 对使用 ping.Scan 探测出的存活结果进行端口扫描，需要配合 ping.Scan 使用  @param {chan *PingResult} res ping.Scan 的扫描结果  @param {string} ports 端口，支持 1-65535、1,2,3、...|
| [synscan.callback](#callback) |callback syn scan 的配置选项，设置一个回调函数，每发现一个端口就会调用一次  @param {func(i *synscan.SynScanResult)} i 回调函数  @return {scanOpt} 返回配置选项  |
| [synscan.concurrent](#concurrent) |concurrent syn scan 的配置选项，设置 syn 扫描的发包速率，和 rateLimit 基本相同  @param {int} count 并发数  @return {scanOpt} 返回配置选项  |
| [synscan.excludeHosts](#excludehosts) |excludeHosts syn scan 的配置选项，设置本次扫描排除的主机  @param {string} hosts 主机，支持逗号分割、CIDR、-的格式  @return {scanOpt} 返回配置选项  |
| [synscan.excludePorts](#excludeports) |excludePorts syn scan 的配置选项，设置本次扫描排除的端口  @param {string} ports 端口，支持 1-65535、1,2,3、1-100,200-300 格式  @return {scanOpt} 返回配置选项  |
| [synscan.iface](#iface) |iface syn scan 的配置选项，设置 syn 扫描的网卡  @param {string} iface 网卡名称  @return {scanOpt} 返回配置选项  |
| [synscan.initHostFilter](#inithostfilter) |initHostFilter syn scan 的配置选项，设置本次扫描的主机过滤器，只展示这些主机的扫描结果  @param {string} f 主机，支持逗号、CIDR、-分割  @return {scanOpt} 返回配置选项  |
| [synscan.initPortFilter](#initportfilter) |initPortFilter syn scan 的配置选项，设置本次扫描的端口过滤器，只展示这些端口的扫描结果  @param {string} f 端口，支持逗号、-分割  @return {scanOpt} 返回配置选项  |
| [synscan.maxPorts](#maxports) |maxOpenPorts syn scan 的配置选项，设置单个 IP 允许的最大开放端口数  @param {int} max 最大开放端口数  @return {scanOpt} 返回配置选项  |
| [synscan.outputFile](#outputfile) |outputFile syn scan 的配置选项，设置本次扫描结果保存到指定的文件  @param {string} file 文件路径  @return {scanOpt} 返回配置选项  |
| [synscan.outputPrefix](#outputprefix) |outputPrefix syn scan 的配置选项，设置本次扫描结果保存到文件时添加自定义前缀，比如 tcp:// https:// http:// 等，需要配合 outputFile 使用  @param {string} prefix 前缀  @return {scanOpt} 返回配置选项...|
| [synscan.rateLimit](#ratelimit) |rateLimit syn scan 的配置选项，设置 syn 扫描的速率  @param {int} ms 延迟多少毫秒  @param {int} count 每隔多少个数据包延迟一次  @return {scanOpt} 返回配置选项  |
| [synscan.shuffle](#shuffle) |shuffle syn scan 的配置选项，设置是否打乱扫描顺序  @param {bool} s 是否打乱  @return {scanOpt} 返回配置选项  |
| [synscan.submitTaskCallback](#submittaskcallback) |submitTaskCallback syn scan 的配置选项，设置一个回调函数，每提交一个探测数据包的时候，这个回调会执行一次  @param {func(string)} i 回调函数  @return {scanOpt} 返回配置选项  |
| [synscan.wait](#wait) |wait syn scan 的配置选项，设置等待扫描目标回包的最大时间  @param {float64} sec 等待时间，单位秒  @return {scanOpt} 返回配置选项  |


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


### Scan

#### 详细描述
Scan 使用 SYN 扫描技术进行端口扫描，它不必打开一个完整的TCP连接，只发送一个SYN包，就能做到打开连接的效果，然后等待对端的反应

@param {string} target 目标地址，支持 CIDR 格式

@param {string} port 端口，支持 1-65535、1,2,3、1-100,200-300 格式

@param {scanOpt} [opts] synscan 扫描参数

@return {chan *synscan.SynScanResult} 返回结果

Example:
```
res, err := synscan.Scan("127.0.0.1", "1-65535") //
die(err)

	for result := range res {
	  result.Show()
	}

```


#### 定义

`Scan(targets string, ports string, opts ...synscanx.SynxConfigOption) (chan *synscan.SynScanResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| targets | `string` |   |
| ports | `string` |   |
| opts | `...synscanx.SynxConfigOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *synscan.SynScanResult` |   |
| r2 | `error` |   |


### ScanFromPing

#### 详细描述
ScanFromPing 对使用 ping.Scan 探测出的存活结果进行端口扫描，需要配合 ping.Scan 使用

@param {chan *PingResult} res ping.Scan 的扫描结果

@param {string} ports 端口，支持 1-65535、1,2,3、1-100,200-300 格式

@param {scanOpt} [opts] synscan 扫描参数

@return {chan *synscan.SynScanResult} 返回结果

Example:
```
pingResult, err = ping.Scan("192.168.1.1/24") // 先进行存活探测
die(err)
res, err = synscan.ScanFromPing(pingResult, "1-65535") // 对存活结果进行端口扫描
die(err)

	for r := range res {
	  r.Show()
	}

```


#### 定义

`ScanFromPing(res chan *pingutil.PingResult, ports string, opts ...synscanx.SynxConfigOption) (chan *synscan.SynScanResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| res | `chan *pingutil.PingResult` |   |
| ports | `string` |   |
| opts | `...synscanx.SynxConfigOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *synscan.SynScanResult` |   |
| r2 | `error` |   |


### callback

#### 详细描述
callback syn scan 的配置选项，设置一个回调函数，每发现一个端口就会调用一次

@param {func(i *synscan.SynScanResult)} i 回调函数

@return {scanOpt} 返回配置选项

Example:
```
res, err = synscan.Scan("127.0.0.1", "1-65535",

	synscan.callback(func(i){
	   db.SavePortFromResult(i) // 将结果保存到数据库
	})

)
die(err)
```


#### 定义

`callback(callback func(result *synscan.SynScanResult)) SynxConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `func(result *synscan.SynScanResult)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `SynxConfigOption` |   |


### concurrent

#### 详细描述
concurrent syn scan 的配置选项，设置 syn 扫描的发包速率，和 rateLimit 基本相同

@param {int} count 并发数

@return {scanOpt} 返回配置选项

Example:
```
res, err = synscan.Scan("127.0.0.1", "1-65535",

	synscan.concurrent(1000) // 并发 1000

)
die(err)
```


#### 定义

`concurrent(count int) SynxConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| count | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `SynxConfigOption` |   |


### excludeHosts

#### 详细描述
excludeHosts syn scan 的配置选项，设置本次扫描排除的主机

@param {string} hosts 主机，支持逗号分割、CIDR、-的格式

@return {scanOpt} 返回配置选项

Example:
```
res, err = synscan.Scan("192.168.1.1/24", "1-65535",

	synscan.excludeHosts("192.168.1.1,192.168.1.3-10,192.168.1.1/26")

)
die(err)
```


#### 定义

`excludeHosts(hosts string) SynxConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| hosts | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `SynxConfigOption` |   |


### excludePorts

#### 详细描述
excludePorts syn scan 的配置选项，设置本次扫描排除的端口

@param {string} ports 端口，支持 1-65535、1,2,3、1-100,200-300 格式

@return {scanOpt} 返回配置选项

Example:
```
res, err = synscan.Scan("127.0.0.1", "1-65535",

	synscan.excludePorts("1-100,200-300") // 排除 1-100 和 200-300 端口

)
die(err)
```


#### 定义

`excludePorts(ports string) SynxConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ports | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `SynxConfigOption` |   |


### iface

#### 详细描述
iface syn scan 的配置选项，设置 syn 扫描的网卡

@param {string} iface 网卡名称

@return {scanOpt} 返回配置选项

Example:
```
res, err = synscan.Scan("192.168.1.1/24", "1-65535",

	synscan.iface("eth0") // 使用 eth0 网卡

)
die(err)
```


#### 定义

`iface(iface string) SynxConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| iface | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `SynxConfigOption` |   |


### initHostFilter

#### 详细描述
initHostFilter syn scan 的配置选项，设置本次扫描的主机过滤器，只展示这些主机的扫描结果

@param {string} f 主机，支持逗号、CIDR、-分割

@return {scanOpt} 返回配置选项

Example:
```
res, err = synscan.Scan("192.168.1.1/24", "1-65535",

	synscan.initHostFilter("192.168.1.1,192.168.1.2")

)
die(err)
```


#### 定义

`initHostFilter(hosts string) SynxConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| hosts | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `SynxConfigOption` |   |


### initPortFilter

#### 详细描述
initPortFilter syn scan 的配置选项，设置本次扫描的端口过滤器，只展示这些端口的扫描结果

@param {string} f 端口，支持逗号、-分割

@return {scanOpt} 返回配置选项

Example:
```
res, err = synscan.Scan("192.168.3.1", "1-65535",

	synscan.initPortFilter("1-100,200-300")

)
die(err)
```


#### 定义

`initPortFilter(ports string) SynxConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ports | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `SynxConfigOption` |   |


### maxPorts

#### 详细描述
maxOpenPorts syn scan 的配置选项，设置单个 IP 允许的最大开放端口数

@param {int} max 最大开放端口数

@return {scanOpt} 返回配置选项

Example:
```
res, err = synscan.Scan("127.0.0.1", "1-65535",

	synscan.maxOpenPorts(100) // 单个 IP 最多开放 100 个端口

)
die(err)
```


#### 定义

`maxPorts(max int) SynxConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| max | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `SynxConfigOption` |   |


### outputFile

#### 详细描述
outputFile syn scan 的配置选项，设置本次扫描结果保存到指定的文件

@param {string} file 文件路径

@return {scanOpt} 返回配置选项

Example:
```
res, err = synscan.Scan("127.0.0.1", "1-65535",

	synscan.outputFile("/tmp/open_ports.txt")

)
die(err)
```


#### 定义

`outputFile(file string) SynxConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| file | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `SynxConfigOption` |   |


### outputPrefix

#### 详细描述
outputPrefix syn scan 的配置选项，设置本次扫描结果保存到文件时添加自定义前缀，比如 tcp:// https:// http:// 等，需要配合 outputFile 使用

@param {string} prefix 前缀

@return {scanOpt} 返回配置选项

Example:
```
res, err = synscan.Scan("127.0.0.1", "1-65535",

	 synscan.outputFile("./open_ports.txt"),
		synscan.outputPrefix("tcp://")

)
die(err)
```


#### 定义

`outputPrefix(prefix string) SynxConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| prefix | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `SynxConfigOption` |   |


### rateLimit

#### 详细描述
rateLimit syn scan 的配置选项，设置 syn 扫描的速率

@param {int} ms 延迟多少毫秒

@param {int} count 每隔多少个数据包延迟一次

@return {scanOpt} 返回配置选项

Example:
```
res, err = synscan.Scan("127.0.0.1", "1-65535",

	synscan.rateLimit(1, 2000) // 每隔 2000 个数据包延迟 1 毫秒

)
die(err)
```


#### 定义

`rateLimit(ms int, count int) SynxConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ms | `int` |   |
| count | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `SynxConfigOption` |   |


### shuffle

#### 详细描述
shuffle syn scan 的配置选项，设置是否打乱扫描顺序

@param {bool} s 是否打乱

@return {scanOpt} 返回配置选项

Example:
```
res, err = synscan.Scan("127.0.0.1", "1-65535",

	synscan.shuffle(true) // 打乱扫描顺序

)
die(err)
```


#### 定义

`shuffle(s bool) SynxConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `SynxConfigOption` |   |


### submitTaskCallback

#### 详细描述
submitTaskCallback syn scan 的配置选项，设置一个回调函数，每提交一个探测数据包的时候，这个回调会执行一次

@param {func(string)} i 回调函数

@return {scanOpt} 返回配置选项

Example:
```
res, err = synscan.Scan("127.0.0.1", "1-65535",

	synscan.submitTaskCallback(func(i){
	   println(i) // 打印要探测的目标
	})

)
die(err)
```


#### 定义

`submitTaskCallback(callback func(i string)) SynxConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `func(i string)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `SynxConfigOption` |   |


### wait

#### 详细描述
wait syn scan 的配置选项，设置等待扫描目标回包的最大时间

@param {float64} sec 等待时间，单位秒

@return {scanOpt} 返回配置选项

Example:
```
res, err = synscan.Scan("127.0.0.1", "1-65535",

	synscan.wait(5) // 等待 5 秒

)
die(err)
```


#### 定义

`wait(sec float64) SynxConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| sec | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `SynxConfigOption` |   |


