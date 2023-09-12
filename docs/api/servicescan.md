# servicescan

|成员函数|函数描述/介绍|
|:------|:--------|
| [servicescan.Scan](#Scan) ||
| [servicescan.ScanFromPing](#ScanFromPing) ||
| [servicescan.ScanFromSpaceEngine](#ScanFromSpaceEngine) ||
| [servicescan.ScanFromSynResult](#ScanFromSynResult) ||
| [servicescan.ScanOne](#ScanOne) ||
| [servicescan.active](#active) ||
| [servicescan.all](#all) ||
| [servicescan.cache](#cache) ||
| [servicescan.concurrent](#concurrent) ||
| [servicescan.databaseCache](#databaseCache) ||
| [servicescan.excludeHosts](#excludeHosts) ||
| [servicescan.excludePorts](#excludePorts) ||
| [servicescan.maxProbes](#maxProbes) ||
| [servicescan.maxProbesConcurrent](#maxProbesConcurrent) ||
| [servicescan.nmapRarityMax](#nmapRarityMax) ||
| [servicescan.nmapRule](#nmapRule) ||
| [servicescan.probeTimeout](#probeTimeout) ||
| [servicescan.proto](#proto) ||
| [servicescan.proxy](#proxy) ||
| [servicescan.service](#service) ||
| [servicescan.web](#web) ||
| [servicescan.webRule](#webRule) ||


## 函数定义
### servicescan.Scan

#### 详细描述


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


### servicescan.ScanFromPing

#### 详细描述


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


### servicescan.ScanFromSpaceEngine

#### 详细描述


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


### servicescan.ScanFromSynResult

#### 详细描述


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


### servicescan.ScanOne

#### 详细描述


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


### servicescan.active

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


### servicescan.all

#### 详细描述


#### 定义

`all() fp.ConfigOption`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `fp.ConfigOption` |   |


### servicescan.cache

#### 详细描述


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


### servicescan.concurrent

#### 详细描述


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


### servicescan.databaseCache

#### 详细描述


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


### servicescan.excludeHosts

#### 详细描述


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


### servicescan.excludePorts

#### 详细描述


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


### servicescan.maxProbes

#### 详细描述


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


### servicescan.maxProbesConcurrent

#### 详细描述


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


### servicescan.nmapRarityMax

#### 详细描述


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


### servicescan.nmapRule

#### 详细描述


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


### servicescan.probeTimeout

#### 详细描述


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


### servicescan.proto

#### 详细描述


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


### servicescan.proxy

#### 详细描述


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


### servicescan.service

#### 详细描述


#### 定义

`service() fp.ConfigOption`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `fp.ConfigOption` |   |


### servicescan.web

#### 详细描述


#### 定义

`web() fp.ConfigOption`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `fp.ConfigOption` |   |


### servicescan.webRule

#### 详细描述


#### 定义

`webRule(i any) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


