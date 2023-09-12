# udp

|成员函数|函数描述/介绍|
|:------|:--------|
| [udp.Connect](#Connect) ||
| [udp.MockUDPProtocol](#MockUDPProtocol) ||
| [udp.Serve](#Serve) ||
| [udp.clientLocalAddr](#clientLocalAddr) ||
| [udp.clientTimeout](#clientTimeout) ||
| [udp.serverCallback](#serverCallback) ||
| [udp.serverContext](#serverContext) ||
| [udp.serverTimeout](#serverTimeout) ||


## 函数定义
### udp.Connect

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


### udp.MockUDPProtocol

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


### udp.Serve

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


### udp.clientLocalAddr

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


### udp.clientTimeout

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


### udp.serverCallback

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


### udp.serverContext

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


### udp.serverTimeout

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


