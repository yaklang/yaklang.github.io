# udp

|成员函数|函数描述/介绍|
|:------|:--------|
| [udp.Connect](#connect) ||
| [udp.MockUDPProtocol](#mockudpprotocol) ||
| [udp.Serve](#serve) ||
| [udp.clientLocalAddr](#clientlocaladdr) ||
| [udp.clientTimeout](#clienttimeout) ||
| [udp.serverCallback](#servercallback) ||
| [udp.serverContext](#servercontext) ||
| [udp.serverTimeout](#servertimeout) ||


## 函数定义
### Connect

#### 详细描述


#### 定义

`Connect(target string, opts ...udpClientOption) (*udpConn, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| target | `string` |   |
| opts | `...udpClientOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*udpConn` |   |
| r2 | `error` |   |


### MockUDPProtocol

#### 详细描述


#### 定义

`MockUDPProtocol(name string) (string, int)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `int` |   |


### Serve

#### 详细描述


#### 定义

`Serve(host string, port any, opts ...udpServerOpt) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| host | `string` |   |
| port | `any` |   |
| opts | `...udpServerOpt` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### clientLocalAddr

#### 详细描述


#### 定义

`clientLocalAddr(target string) udpClientOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| target | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `udpClientOption` |   |


### clientTimeout

#### 详细描述


#### 定义

`clientTimeout(target float64) udpClientOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| target | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `udpClientOption` |   |


### serverCallback

#### 详细描述


#### 定义

`serverCallback(cb func(*udpConn, []byte, net.Addr)) udpServerOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cb | `func(*udpConn, []byte, net.Addr)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `udpServerOpt` |   |


### serverContext

#### 详细描述


#### 定义

`serverContext(ctx context.Context) udpServerOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `udpServerOpt` |   |


### serverTimeout

#### 详细描述


#### 定义

`serverTimeout(f float64) udpServerOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `udpServerOpt` |   |


