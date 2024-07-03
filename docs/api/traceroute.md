# traceroute

|函数名|函数描述/介绍|
|:------|:--------|
| [traceroute.Diagnostic](#diagnostic) ||
| [traceroute.ctx](#ctx) ||
| [traceroute.firstTTL](#firstttl) ||
| [traceroute.hops](#hops) ||
| [traceroute.localIp](#localip) ||
| [traceroute.protocol](#protocol) ||
| [traceroute.retry](#retry) ||
| [traceroute.timeout](#timeout) ||
| [traceroute.udpPort](#udpport) ||


## 函数定义
### Diagnostic

#### 详细描述


#### 定义

`Diagnostic(host string, opts ...pingutil.TracerouteConfigOption) (chan *pingutil.TracerouteResponse, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| host | `string` |   |
| opts | `...pingutil.TracerouteConfigOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *pingutil.TracerouteResponse` |   |
| r2 | `error` |   |


### ctx

#### 详细描述


#### 定义

`ctx(ctx context.Context) TracerouteConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `TracerouteConfigOption` |   |


### firstTTL

#### 详细描述


#### 定义

`firstTTL(ttl int) TracerouteConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ttl | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `TracerouteConfigOption` |   |


### hops

#### 详细描述


#### 定义

`hops(hops int) TracerouteConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| hops | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `TracerouteConfigOption` |   |


### localIp

#### 详细描述


#### 定义

`localIp(addr string) TracerouteConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| addr | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `TracerouteConfigOption` |   |


### protocol

#### 详细描述


#### 定义

`protocol(protocol string) TracerouteConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| protocol | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `TracerouteConfigOption` |   |


### retry

#### 详细描述


#### 定义

`retry(times int) TracerouteConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| times | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `TracerouteConfigOption` |   |


### timeout

#### 详细描述


#### 定义

`timeout(timeout float64) pingutil.TracerouteConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| timeout | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `pingutil.TracerouteConfigOption` |   |


### udpPort

#### 详细描述


#### 定义

`udpPort(port int) TracerouteConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| port | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `TracerouteConfigOption` |   |


