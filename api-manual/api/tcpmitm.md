# tcpmitm

|函数名|函数描述/介绍|
|:------|:--------|
| [tcpmitm.Start](#start) ||
| [tcpmitm.context](#context) ||
| [tcpmitm.dialer](#dialer) ||
| [tcpmitm.hijackTCPConn](#hijacktcpconn) ||
| [tcpmitm.hijackTCPFrame](#hijacktcpframe) ||
| [tcpmitm.maxBufferSize](#maxbuffersize) ||
| [tcpmitm.protocolAwareSplit](#protocolawaresplit) ||
| [tcpmitm.timeGapThreshold](#timegapthreshold) ||


## 函数定义
### Start

#### 详细描述


#### 定义

`Start(ch any, opts ...Option) (*TCPMitm, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ch | `any` |   |
| opts | `...Option` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*TCPMitm` |   |
| r2 | `error` |   |


### context

#### 详细描述


#### 定义

`context(ctx context.Context) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### dialer

#### 详细描述


#### 定义

`dialer(dialer func(addr string) (net.Conn, error)) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| dialer | `func(addr string) (net.Conn, error)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### hijackTCPConn

#### 详细描述


#### 定义

`hijackTCPConn(callback ConnHijackCallback) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `ConnHijackCallback` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### hijackTCPFrame

#### 详细描述


#### 定义

`hijackTCPFrame(callback FrameHijackCallback) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `FrameHijackCallback` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### maxBufferSize

#### 详细描述


#### 定义

`maxBufferSize(size int) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| size | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### protocolAwareSplit

#### 详细描述


#### 定义

`protocolAwareSplit(enable bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| enable | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### timeGapThreshold

#### 详细描述


#### 定义

`timeGapThreshold(d time.Duration) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| d | `time.Duration` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


