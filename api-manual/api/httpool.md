# httpool

|函数名|函数描述/介绍|
|:------|:--------|
| [httpool.Pool](#pool) ||
| [httpool.connPool](#connpool) ||
| [httpool.context](#context) ||
| [httpool.fuzz](#fuzz) ||
| [httpool.fuzzParams](#fuzzparams) ||
| [httpool.host](#host) ||
| [httpool.https](#https) ||
| [httpool.noFixContentLength](#nofixcontentlength) ||
| [httpool.noRedirect](#noredirect) ||
| [httpool.perRequestTimeout](#perrequesttimeout) ||
| [httpool.port](#port) ||
| [httpool.proxy](#proxy) ||
| [httpool.rawMode](#rawmode) ||
| [httpool.redirectTimes](#redirecttimes) ||
| [httpool.size](#size) ||


## 函数定义
### Pool

#### 详细描述


#### 定义

`Pool(i any, opts ...HttpPoolConfigOption) (chan *HttpResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |
| opts | `...HttpPoolConfigOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *HttpResult` |   |
| r2 | `error` |   |


### connPool

#### 详细描述


#### 定义

`connPool(b bool) HttpPoolConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpPoolConfigOption` |   |


### context

#### 详细描述


#### 定义

`context(ctx context.Context) HttpPoolConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpPoolConfigOption` |   |


### fuzz

#### 详细描述


#### 定义

`fuzz(b bool) HttpPoolConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpPoolConfigOption` |   |


### fuzzParams

#### 详细描述


#### 定义

`fuzzParams(i any) HttpPoolConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpPoolConfigOption` |   |


### host

#### 详细描述


#### 定义

`host(h string, isHttps bool) HttpPoolConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `string` |   |
| isHttps | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpPoolConfigOption` |   |


### https

#### 详细描述


#### 定义

`https(f bool) HttpPoolConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpPoolConfigOption` |   |


### noFixContentLength

#### 详细描述


#### 定义

`noFixContentLength(f bool) HttpPoolConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpPoolConfigOption` |   |


### noRedirect

#### 详细描述


#### 定义

`noRedirect(i bool) HttpPoolConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpPoolConfigOption` |   |


### perRequestTimeout

#### 详细描述


#### 定义

`perRequestTimeout(f float64) HttpPoolConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpPoolConfigOption` |   |


### port

#### 详细描述


#### 定义

`port(port int) HttpPoolConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| port | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpPoolConfigOption` |   |


### proxy

#### 详细描述


#### 定义

`proxy(proxies ...string) HttpPoolConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| proxies | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpPoolConfigOption` |   |


### rawMode

#### 详细描述


#### 定义

`rawMode(b bool) HttpPoolConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpPoolConfigOption` |   |


### redirectTimes

#### 详细描述


#### 定义

`redirectTimes(f int) HttpPoolConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpPoolConfigOption` |   |


### size

#### 详细描述


#### 定义

`size(i int) HttpPoolConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpPoolConfigOption` |   |


