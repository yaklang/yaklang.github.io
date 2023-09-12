# finscan

|成员函数|函数描述/介绍|
|:------|:--------|
| [finscan.Scan](#Scan) ||
| [finscan.concurrent](#concurrent) |设置 FIN 扫描的并发可以有效控制精准度|
| [finscan.excludeHosts](#excludeHosts) ||
| [finscan.excludePorts](#excludePorts) ||
| [finscan.initHostFilter](#initHostFilter) ||
| [finscan.initPortFilter](#initPortFilter) ||
| [finscan.outputFile](#outputFile) |端口开放的结果保存到文件|
| [finscan.outputPrefix](#outputPrefix) |端口开放结果保存文件加个前缀，比如 tcp:// https:// http:// 等|
| [finscan.rateLimit](#rateLimit) ||
| [finscan.wait](#wait) |finscan 发出 FIN 包后等待多久？|


## 函数定义
### finscan.Scan

#### 详细描述


#### 定义

`Scan(target string, port string, opts ...finScanOpt) (chan *finscan.FinScanResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| target | `string` |   |
| port | `string` |   |
| opts | `...finScanOpt` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *finscan.FinScanResult` |   |
| r2 | `error` |   |


### finscan.concurrent

#### 详细描述
设置 FIN 扫描的并发可以有效控制精准度

#### 定义

`concurrent(count int) finScanOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| count | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `finScanOpt` |   |


### finscan.excludeHosts

#### 详细描述


#### 定义

`excludeHosts(hosts string) finScanOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| hosts | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `finScanOpt` |   |


### finscan.excludePorts

#### 详细描述


#### 定义

`excludePorts(ports string) finScanOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ports | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `finScanOpt` |   |


### finscan.initHostFilter

#### 详细描述


#### 定义

`initHostFilter(f string) finScanOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `finScanOpt` |   |


### finscan.initPortFilter

#### 详细描述


#### 定义

`initPortFilter(f string) finScanOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `finScanOpt` |   |


### finscan.outputFile

#### 详细描述
端口开放的结果保存到文件

#### 定义

`outputFile(file string) finScanOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| file | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `finScanOpt` |   |


### finscan.outputPrefix

#### 详细描述
端口开放结果保存文件加个前缀，比如 tcp:// https:// http:// 等

#### 定义

`outputPrefix(prefix string) finScanOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| prefix | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `finScanOpt` |   |


### finscan.rateLimit

#### 详细描述


#### 定义

`rateLimit(ms int, count int) finScanOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ms | `int` |   |
| count | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `finScanOpt` |   |


### finscan.wait

#### 详细描述
finscan 发出 FIN 包后等待多久？

#### 定义

`wait(sec float64) finScanOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| sec | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `finScanOpt` |   |


