# spacengine

|成员函数|函数描述/介绍|
|:------|:--------|
| [spacengine.FofaQuery](#FofaQuery) ||
| [spacengine.HunterQuery](#HunterQuery) ||
| [spacengine.QuakeQuery](#QuakeQuery) ||
| [spacengine.ShodanQuery](#ShodanQuery) ||
| [spacengine.ZoomeyeQuery](#ZoomeyeQuery) ||
| [spacengine.maxPage](#maxPage) ||
| [spacengine.maxRecord](#maxRecord) ||
| [spacengine.pageSize](#pageSize) ||


## 函数定义
### FofaQuery

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


### HunterQuery

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


### QuakeQuery

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


### ShodanQuery

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


### ZoomeyeQuery

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


