# spacengine

|成员函数|函数描述/介绍|
|:------|:--------|
| [spacengine.FofaQuery](#fofaquery) ||
| [spacengine.HunterQuery](#hunterquery) ||
| [spacengine.QuakeQuery](#quakequery) ||
| [spacengine.ShodanQuery](#shodanquery) ||
| [spacengine.ZoomeyeQuery](#zoomeyequery) ||
| [spacengine.maxPage](#maxpage) ||
| [spacengine.maxRecord](#maxrecord) ||
| [spacengine.pageSize](#pagesize) ||


## 函数定义
### fofaquery

#### 详细描述


#### 定义

`FofaQuery(email string, key string, filter string, opts ..._spaceEngineConfigOpt) (chan *spacengine2.NetSpaceEngineResult, error)`

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
| r1 | `chan *spacengine2.NetSpaceEngineResult` |   |
| r2 | `error` |   |


### hunterquery

#### 详细描述


#### 定义

`HunterQuery(name string, key string, filter string, opts ..._spaceEngineConfigOpt) (chan *spacengine2.NetSpaceEngineResult, error)`

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
| r1 | `chan *spacengine2.NetSpaceEngineResult` |   |
| r2 | `error` |   |


### quakequery

#### 详细描述


#### 定义

`QuakeQuery(token string, filter string, opts ..._spaceEngineConfigOpt) (chan *spacengine2.NetSpaceEngineResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| token | `string` |   |
| filter | `string` |   |
| opts | `..._spaceEngineConfigOpt` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *spacengine2.NetSpaceEngineResult` |   |
| r2 | `error` |   |


### shodanquery

#### 详细描述


#### 定义

`ShodanQuery(token string, filter string, opts ..._spaceEngineConfigOpt) (chan *spacengine2.NetSpaceEngineResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| token | `string` |   |
| filter | `string` |   |
| opts | `..._spaceEngineConfigOpt` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *spacengine2.NetSpaceEngineResult` |   |
| r2 | `error` |   |


### zoomeyequery

#### 详细描述


#### 定义

`ZoomeyeQuery(key string, filter string, opts ..._spaceEngineConfigOpt) (chan *spacengine2.NetSpaceEngineResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |
| filter | `string` |   |
| opts | `..._spaceEngineConfigOpt` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *spacengine2.NetSpaceEngineResult` |   |
| r2 | `error` |   |


### maxpage

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


### maxrecord

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


### pagesize

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


