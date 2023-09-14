# tcp

|成员函数|函数描述/介绍|
|:------|:--------|
| [tcp.Connect](#Connect) ||
| [tcp.Forward](#Forward) ||
| [tcp.MockServe](#MockServe) ||
| [tcp.MockTCPProtocol](#MockTCPProtocol) ||
| [tcp.Serve](#Serve) ||
| [tcp.cliengProxy](#cliengProxy) ||
| [tcp.clientLocal](#clientLocal) ||
| [tcp.clientTimeout](#clientTimeout) ||
| [tcp.clientTls](#clientTls) ||
| [tcp.serverCallback](#serverCallback) ||
| [tcp.serverContext](#serverContext) ||
| [tcp.serverTls](#serverTls) ||


## 函数定义
### tcp.Connect

#### 详细描述


#### 定义

`Connect(host string, port any, opts ...dialerOpt) (*tcpConnection, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| host | `string` |   |
| port | `any` |   |
| opts | `...dialerOpt` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*tcpConnection` |   |
| r2 | `error` |   |


### tcp.Forward

#### 详细描述


#### 定义

`Forward(localPort int, remoteHost string, remotePort int) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| localPort | `int` |   |
| remoteHost | `string` |   |
| remotePort | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### tcp.MockServe

#### 详细描述


#### 定义

`MockServe(rsp []byte) (string, int)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| rsp | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `int` |   |


### tcp.MockTCPProtocol

#### 详细描述


#### 定义

`MockTCPProtocol(name string) (string, int)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `int` |   |


### tcp.Serve

#### 详细描述


#### 定义

`Serve(host any, port int, opts ...tcpServerConfigOpt) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| host | `any` |   |
| port | `int` |   |
| opts | `...tcpServerConfigOpt` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### tcp.cliengProxy

#### 详细描述


#### 定义

`cliengProxy(proxy string) dialerOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| proxy | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `dialerOpt` |   |


### tcp.clientLocal

#### 详细描述


#### 定义

`clientLocal(i any) dialerOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `dialerOpt` |   |


### tcp.clientTimeout

#### 详细描述


#### 定义

`clientTimeout(i float64) dialerOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `dialerOpt` |   |


### tcp.clientTls

#### 详细描述


#### 定义

`clientTls(crt any, key any, caCerts ...any) dialerOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| crt | `any` |   |
| key | `any` |   |
| caCerts | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `dialerOpt` |   |


### tcp.serverCallback

#### 详细描述


#### 定义

`serverCallback(cb func(connection *tcpConnection)) tcpServerConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cb | `func(connection *tcpConnection)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `tcpServerConfigOpt` |   |


### tcp.serverContext

#### 详细描述


#### 定义

`serverContext(ctx context.Context) tcpServerConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `tcpServerConfigOpt` |   |


### tcp.serverTls

#### 详细描述


#### 定义

`serverTls(crt any, key any, cas ...any) tcpServerConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| crt | `any` |   |
| key | `any` |   |
| cas | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `tcpServerConfigOpt` |   |


