# tcp

|函数名|函数描述/介绍|
|:------|:--------|
| [tcp.Connect](#connect) ||
| [tcp.Forward](#forward) ||
| [tcp.MockServe](#mockserve) ||
| [tcp.MockTCPProtocol](#mocktcpprotocol) ||
| [tcp.Serve](#serve) ||
| [tcp.clientLocal](#clientlocal) ||
| [tcp.clientProxy](#clientproxy) ||
| [tcp.clientTimeout](#clienttimeout) ||
| [tcp.clientTls](#clienttls) ||
| [tcp.serverCallback](#servercallback) ||
| [tcp.serverContext](#servercontext) ||
| [tcp.serverTls](#servertls) ||


## 函数定义
### Connect

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


### Forward

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


### MockServe

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


### MockTCPProtocol

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


### Serve

#### 详细描述


#### 定义

`Serve(host any, port int, opts ...TcpServerConfigOpt) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| host | `any` |   |
| port | `int` |   |
| opts | `...TcpServerConfigOpt` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### clientLocal

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


### clientProxy

#### 详细描述


#### 定义

`clientProxy(proxy string) dialerOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| proxy | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `dialerOpt` |   |


### clientTimeout

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


### clientTls

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


### serverCallback

#### 详细描述


#### 定义

`serverCallback(cb func(connection *tcpConnection)) TcpServerConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cb | `func(connection *tcpConnection)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `TcpServerConfigOpt` |   |


### serverContext

#### 详细描述


#### 定义

`serverContext(ctx context.Context) TcpServerConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `TcpServerConfigOpt` |   |


### serverTls

#### 详细描述


#### 定义

`serverTls(crt any, key any, cas ...any) TcpServerConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| crt | `any` |   |
| key | `any` |   |
| cas | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `TcpServerConfigOpt` |   |


