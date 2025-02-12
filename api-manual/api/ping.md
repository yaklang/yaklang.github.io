# ping

|函数名|函数描述/介绍|
|:------|:--------|
| [ping.Ping](#ping) ||
| [ping.Scan](#scan) ||
| [ping.concurrent](#concurrent) ||
| [ping.dnsServers](#dnsservers) ||
| [ping.dnsTimeout](#dnstimeout) ||
| [ping.excludeHosts](#excludehosts) ||
| [ping.onResult](#onresult) ||
| [ping.proxy](#proxy) ||
| [ping.scanCClass](#scancclass) ||
| [ping.skip](#skip) ||
| [ping.tcpPingPorts](#tcppingports) ||
| [ping.timeout](#timeout) ||


## 函数定义
### Ping

#### 详细描述


#### 定义

`Ping(target string, opts ...PingConfigOpt) *pingutil.PingResult`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| target | `string` |   |
| opts | `...PingConfigOpt` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*pingutil.PingResult` |   |


### Scan

#### 详细描述


#### 定义

`Scan(target string, opts ...PingConfigOpt) chan *pingutil.PingResult`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| target | `string` |   |
| opts | `...PingConfigOpt` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *pingutil.PingResult` |   |


### concurrent

#### 详细描述


#### 定义

`concurrent(i int) PingConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PingConfigOpt` |   |


### dnsServers

#### 详细描述


#### 定义

`dnsServers(i ...string) PingConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PingConfigOpt` |   |


### dnsTimeout

#### 详细描述


#### 定义

`dnsTimeout(i float64) PingConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PingConfigOpt` |   |


### excludeHosts

#### 详细描述


#### 定义

`excludeHosts(host string) PingConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| host | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PingConfigOpt` |   |


### onResult

#### 详细描述


#### 定义

`onResult(i func(result *pingutil.PingResult)) PingConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `func(result *pingutil.PingResult)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PingConfigOpt` |   |


### proxy

#### 详细描述


#### 定义

`proxy(i ...string) PingConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PingConfigOpt` |   |


### scanCClass

#### 详细描述


#### 定义

`scanCClass(i bool) PingConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PingConfigOpt` |   |


### skip

#### 详细描述


#### 定义

`skip(i bool) PingConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PingConfigOpt` |   |


### tcpPingPorts

#### 详细描述


#### 定义

`tcpPingPorts(i string) PingConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PingConfigOpt` |   |


### timeout

#### 详细描述


#### 定义

`timeout(i float64) PingConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PingConfigOpt` |   |


