# spacengine

|函数名|函数描述/介绍|
|:------|:--------|
| [spacengine.FofaQuery](#fofaquery) ||
| [spacengine.HunterQuery](#hunterquery) ||
| [spacengine.QuakeQuery](#quakequery) ||
| [spacengine.Query](#query) ||
| [spacengine.ShodanQuery](#shodanquery) ||
| [spacengine.ZoomeyeQuery](#zoomeyequery) ||
| [spacengine.domain](#domain) ||
| [spacengine.engine](#engine) ||
| [spacengine.fofa](#fofa) ||
| [spacengine.hunter](#hunter) ||
| [spacengine.maxPage](#maxpage) ||
| [spacengine.maxRecord](#maxrecord) ||
| [spacengine.pageSize](#pagesize) ||
| [spacengine.quake](#quake) ||
| [spacengine.randomDelay](#randomdelay) ||
| [spacengine.retryTimes](#retrytimes) ||
| [spacengine.shodan](#shodan) ||
| [spacengine.zoomeye](#zoomeye) ||


## 函数定义
### FofaQuery

#### 详细描述


#### 定义

`FofaQuery(email string, key string, filter string, opts ..._spaceEngineConfigOpt) (chan *base.NetSpaceEngineResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| email | `string` |   |
| key | `string` |   |
| filter | `string` |   |
| opts | `..._spaceEngineConfigOpt` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *base.NetSpaceEngineResult` |   |
| r2 | `error` |   |


### HunterQuery

#### 详细描述


#### 定义

`HunterQuery(name string, key string, filter string, opts ..._spaceEngineConfigOpt) (chan *base.NetSpaceEngineResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| key | `string` |   |
| filter | `string` |   |
| opts | `..._spaceEngineConfigOpt` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *base.NetSpaceEngineResult` |   |
| r2 | `error` |   |


### QuakeQuery

#### 详细描述


#### 定义

`QuakeQuery(token string, filter string, opts ..._spaceEngineConfigOpt) (chan *base.NetSpaceEngineResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| token | `string` |   |
| filter | `string` |   |
| opts | `..._spaceEngineConfigOpt` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *base.NetSpaceEngineResult` |   |
| r2 | `error` |   |


### Query

#### 详细描述


#### 定义

`Query(filter string, opts ..._spaceEngineConfigOpt) (chan *base.NetSpaceEngineResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| filter | `string` |   |
| opts | `..._spaceEngineConfigOpt` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *base.NetSpaceEngineResult` |   |
| r2 | `error` |   |


### ShodanQuery

#### 详细描述


#### 定义

`ShodanQuery(token string, filter string, opts ..._spaceEngineConfigOpt) (chan *base.NetSpaceEngineResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| token | `string` |   |
| filter | `string` |   |
| opts | `..._spaceEngineConfigOpt` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *base.NetSpaceEngineResult` |   |
| r2 | `error` |   |


### ZoomeyeQuery

#### 详细描述


#### 定义

`ZoomeyeQuery(key string, filter string, opts ..._spaceEngineConfigOpt) (chan *base.NetSpaceEngineResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |
| filter | `string` |   |
| opts | `..._spaceEngineConfigOpt` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *base.NetSpaceEngineResult` |   |
| r2 | `error` |   |


### domain

#### 详细描述


#### 定义

`domain(domain string) _spaceEngineConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| domain | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `_spaceEngineConfigOpt` |   |


### engine

#### 详细描述


#### 定义

`engine(i string, auth ...string) _spaceEngineConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |
| auth | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `_spaceEngineConfigOpt` |   |


### fofa

#### 详细描述


#### 定义

`fofa(auth ...string) _spaceEngineConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| auth | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `_spaceEngineConfigOpt` |   |


### hunter

#### 详细描述


#### 定义

`hunter(auth ...string) _spaceEngineConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| auth | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `_spaceEngineConfigOpt` |   |


### maxPage

#### 详细描述


#### 定义

`maxPage(i int) _spaceEngineConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `_spaceEngineConfigOpt` |   |


### maxRecord

#### 详细描述


#### 定义

`maxRecord(i int) _spaceEngineConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `_spaceEngineConfigOpt` |   |


### pageSize

#### 详细描述


#### 定义

`pageSize(i int) _spaceEngineConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `_spaceEngineConfigOpt` |   |


### quake

#### 详细描述


#### 定义

`quake(api ...string) _spaceEngineConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| api | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `_spaceEngineConfigOpt` |   |


### randomDelay

#### 详细描述


#### 定义

`randomDelay(delayRange int) _spaceEngineConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| delayRange | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `_spaceEngineConfigOpt` |   |


### retryTimes

#### 详细描述


#### 定义

`retryTimes(times int) _spaceEngineConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| times | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `_spaceEngineConfigOpt` |   |


### shodan

#### 详细描述


#### 定义

`shodan(api ...string) _spaceEngineConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| api | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `_spaceEngineConfigOpt` |   |


### zoomeye

#### 详细描述


#### 定义

`zoomeye(api ...string) _spaceEngineConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| api | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `_spaceEngineConfigOpt` |   |


