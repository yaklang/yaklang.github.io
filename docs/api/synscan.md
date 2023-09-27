# synscan

|成员函数|函数描述/介绍|
|:------|:--------|
| [synscan.FixPermission](#fixpermission) ||
| [synscan.Scan](#scan) ||
| [synscan.ScanFromPing](#scanfromping) ||
| [synscan.callback](#callback) ||
| [synscan.concurrent](#concurrent) |设置 SYN 扫描的并发可以有效控制精准度|
| [synscan.excludeHosts](#excludehosts) ||
| [synscan.excludePorts](#excludeports) ||
| [synscan.initHostFilter](#inithostfilter) ||
| [synscan.initPortFilter](#initportfilter) ||
| [synscan.outputFile](#outputfile) |端口开放的结果保存到文件|
| [synscan.outputPrefix](#outputprefix) |端口开放结果保存文件加个前缀，比如 tcp:// https:// http:// 等|
| [synscan.rateLimit](#ratelimit) ||
| [synscan.submitTaskCallback](#submittaskcallback) ||
| [synscan.wait](#wait) |synscan 发出 SYN 包后等待多久？|


## 函数定义
### fixpermission

#### 详细描述


#### 定义

`FixPermission() error`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### scan

#### 详细描述


#### 定义

`Scan(target string, port string, opts ...scanOpt) (chan *synscan.SynScanResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| target | `string` |   |
| port | `string` |   |
| opts | `...scanOpt` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *synscan.SynScanResult` |   |
| r2 | `error` |   |


### scanfromping

#### 详细描述


#### 定义

`ScanFromPing(res chan *pingutil.PingResult, ports string, opts ...scanOpt) (chan *synscan.SynScanResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| res | `chan *pingutil.PingResult` |   |
| ports | `string` |   |
| opts | `...scanOpt` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *synscan.SynScanResult` |   |
| r2 | `error` |   |


### callback

#### 详细描述


#### 定义

`callback(i func(i *synscan.SynScanResult)) scanOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `func(i *synscan.SynScanResult)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `scanOpt` |   |


### concurrent

#### 详细描述
设置 SYN 扫描的并发可以有效控制精准度

#### 定义

`concurrent(count int) scanOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| count | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `scanOpt` |   |


### excludehosts

#### 详细描述


#### 定义

`excludeHosts(hosts string) scanOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| hosts | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `scanOpt` |   |


### excludeports

#### 详细描述


#### 定义

`excludePorts(ports string) scanOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ports | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `scanOpt` |   |


### inithostfilter

#### 详细描述


#### 定义

`initHostFilter(f string) scanOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `scanOpt` |   |


### initportfilter

#### 详细描述


#### 定义

`initPortFilter(f string) scanOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `scanOpt` |   |


### outputfile

#### 详细描述
端口开放的结果保存到文件

#### 定义

`outputFile(file string) scanOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| file | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `scanOpt` |   |


### outputprefix

#### 详细描述
端口开放结果保存文件加个前缀，比如 tcp:// https:// http:// 等

#### 定义

`outputPrefix(prefix string) scanOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| prefix | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `scanOpt` |   |


### ratelimit

#### 详细描述


#### 定义

`rateLimit(ms int, count int) scanOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ms | `int` |   |
| count | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `scanOpt` |   |


### submittaskcallback

#### 详细描述


#### 定义

`submitTaskCallback(i func(string)) scanOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `func(string)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `scanOpt` |   |


### wait

#### 详细描述
synscan 发出 SYN 包后等待多久？

#### 定义

`wait(sec float64) scanOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| sec | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `scanOpt` |   |


