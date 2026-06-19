# finscan

|函数名|函数描述/介绍|
|:------|:--------|
| [finscan.Scan](#scan) |FinScan 对目标执行 FIN 端口扫描，以 channel 形式流式返回开放端口结果 在 yak 中通过 finscan.Scan 调用，FIN 扫描具有较好的隐蔽性，依赖网络环境且通常需要相应权限 参数: - target: 扫描目标，支持 IP、域名、CIDR、逗号分隔等多种写法 - po...|
| [finscan.concurrent](#concurrent) |设置 FIN 扫描的并发可以有效控制精准度|
| [finscan.excludeHosts](#excludehosts) |excludeHosts 设置 FIN 扫描时需要排除的主机 在 yak 中通过 finscan.excludeHosts 调用 参数: - hosts: 需要排除的主机表达式，支持 IP、CIDR、范围等 返回值: - 一个 finscan.Scan 可接收的配置选项|
| [finscan.excludePorts](#excludeports) |excludePorts 设置 FIN 扫描时需要排除的端口 在 yak 中通过 finscan.excludePorts 调用 参数: - ports: 需要排除的端口表达式，如 &#34;9100,9200&#34; 返回值: - 一个 finscan.Scan 可接收的配置选项|
| [finscan.initHostFilter](#inithostfilter) |initHostFilter 设置 FIN 扫描的初始主机过滤器，仅扫描命中过滤器的主机 在 yak 中通过 finscan.initHostFilter 调用 参数: - f: 初始主机过滤表达式 返回值: - 一个 finscan.Scan 可接收的配置选项|
| [finscan.initPortFilter](#initportfilter) |initPortFilter 设置 FIN 扫描的初始端口过滤器，仅扫描命中过滤器的端口 在 yak 中通过 finscan.initPortFilter 调用 参数: - f: 初始端口过滤表达式 返回值: - 一个 finscan.Scan 可接收的配置选项|
| [finscan.outputFile](#outputfile) |端口开放的结果保存到文件|
| [finscan.outputPrefix](#outputprefix) |端口开放结果保存文件加个前缀，比如 tcp:// https:// http:// 等|
| [finscan.rateLimit](#ratelimit) |rateLimit 设置 FIN 扫描的发包速率限制(每 count 个数据包延迟 ms 毫秒) 在 yak 中通过 finscan.rateLimit 调用 参数: - ms: 延迟毫秒数 - count: 每多少个数据包延迟一次 返回值: - 一个 finscan.Scan 可接收的配置选项|
| [finscan.wait](#wait) |finscan 发出 FIN 包后等待多久？|


## 函数定义
### Scan

#### 详细描述
FinScan 对目标执行 FIN 端口扫描，以 channel 形式流式返回开放端口结果

在 yak 中通过 finscan.Scan 调用，FIN 扫描具有较好的隐蔽性，依赖网络环境且通常需要相应权限

参数:

  - target: 扫描目标，支持 IP、域名、CIDR、逗号分隔等多种写法

  - port: 端口表达式，如 &#34;80,443&#34;、&#34;1-65535&#34;

  - opts: 可选配置项，如 finscan.concurrent、finscan.wait、finscan.excludePorts 等



返回值:

  - 一个只读 channel，逐条产出 FIN 扫描结果

  - 错误信息，启动失败时非 nil




Example:

``````````````yak
// 该示例为示意性用法：对目标执行 FIN 端口扫描
res = finscan.Scan("192.168.1.1", "22,80,443", finscan.wait(5))~

	for result = range res {
	    println(result.Host, result.Port)
	}
``````````````


#### 定义

`Scan(target string, port string, opts ...finScanOpt) (chan *finscan.FinScanResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| target | `string` | 扫描目标，支持 IP、域名、CIDR、逗号分隔等多种写法 |
| port | `string` | 端口表达式，如 &#34;80,443&#34;、&#34;1-65535&#34; |
| opts | `...finScanOpt` | 可选配置项，如 finscan.concurrent、finscan.wait、finscan.excludePorts 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *finscan.FinScanResult` | 一个只读 channel，逐条产出 FIN 扫描结果 |
| r2 | `error` | 错误信息，启动失败时非 nil |


### concurrent

#### 详细描述
设置 FIN 扫描的并发可以有效控制精准度


#### 定义

`concurrent(count int) finScanOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| count | `int` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `finScanOpt` |  |


### excludeHosts

#### 详细描述
excludeHosts 设置 FIN 扫描时需要排除的主机

在 yak 中通过 finscan.excludeHosts 调用

参数:

  - hosts: 需要排除的主机表达式，支持 IP、CIDR、范围等



返回值:

  - 一个 finscan.Scan 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：排除网关地址
res = finscan.Scan("192.168.1.1/24", "80", finscan.excludeHosts("192.168.1.1"))~
``````````````


#### 定义

`excludeHosts(hosts string) finScanOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| hosts | `string` | 需要排除的主机表达式，支持 IP、CIDR、范围等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `finScanOpt` | 一个 finscan.Scan 可接收的配置选项 |


### excludePorts

#### 详细描述
excludePorts 设置 FIN 扫描时需要排除的端口

在 yak 中通过 finscan.excludePorts 调用

参数:

  - ports: 需要排除的端口表达式，如 &#34;9100,9200&#34;



返回值:

  - 一个 finscan.Scan 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：排除指定端口
res = finscan.Scan("192.168.1.1", "1-65535", finscan.excludePorts("9100,9200"))~
``````````````


#### 定义

`excludePorts(ports string) finScanOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ports | `string` | 需要排除的端口表达式，如 &#34;9100,9200&#34; |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `finScanOpt` | 一个 finscan.Scan 可接收的配置选项 |


### initHostFilter

#### 详细描述
initHostFilter 设置 FIN 扫描的初始主机过滤器，仅扫描命中过滤器的主机

在 yak 中通过 finscan.initHostFilter 调用

参数:

  - f: 初始主机过滤表达式



返回值:

  - 一个 finscan.Scan 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：设置初始主机过滤器
res = finscan.Scan("192.168.1.1/24", "80", finscan.initHostFilter("192.168.1.0/24"))~
``````````````


#### 定义

`initHostFilter(f string) finScanOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `string` | 初始主机过滤表达式 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `finScanOpt` | 一个 finscan.Scan 可接收的配置选项 |


### initPortFilter

#### 详细描述
initPortFilter 设置 FIN 扫描的初始端口过滤器，仅扫描命中过滤器的端口

在 yak 中通过 finscan.initPortFilter 调用

参数:

  - f: 初始端口过滤表达式



返回值:

  - 一个 finscan.Scan 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：设置初始端口过滤器
res = finscan.Scan("192.168.1.1", "1-65535", finscan.initPortFilter("80,443"))~
``````````````


#### 定义

`initPortFilter(f string) finScanOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `string` | 初始端口过滤表达式 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `finScanOpt` | 一个 finscan.Scan 可接收的配置选项 |


### outputFile

#### 详细描述
端口开放的结果保存到文件


#### 定义

`outputFile(file string) finScanOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| file | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `finScanOpt` |  |


### outputPrefix

#### 详细描述
端口开放结果保存文件加个前缀，比如 tcp:// https:// http:// 等


#### 定义

`outputPrefix(prefix string) finScanOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| prefix | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `finScanOpt` |  |


### rateLimit

#### 详细描述
rateLimit 设置 FIN 扫描的发包速率限制(每 count 个数据包延迟 ms 毫秒)

在 yak 中通过 finscan.rateLimit 调用

参数:

  - ms: 延迟毫秒数

  - count: 每多少个数据包延迟一次



返回值:

  - 一个 finscan.Scan 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：限制发包速率
res = finscan.Scan("192.168.1.1", "1-1000", finscan.rateLimit(10, 5))~
``````````````


#### 定义

`rateLimit(ms int, count int) finScanOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ms | `int` | 延迟毫秒数 |
| count | `int` | 每多少个数据包延迟一次 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `finScanOpt` | 一个 finscan.Scan 可接收的配置选项 |


### wait

#### 详细描述
finscan 发出 FIN 包后等待多久？


#### 定义

`wait(sec float64) finScanOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| sec | `float64` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `finScanOpt` |  |


