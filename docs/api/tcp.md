# tcp


|成员函数|函数描述/介绍|
|:------|:--------|
 | [tcp.Connect](#tcpconnect) |  |
 | [tcp.Forward](#tcpforward) | 转发 TCP 链接，在本地开一个 TCP 服务器，把到这个服务器的链接转发到远程端口上 |
 | [tcp.Serve](#tcpserve) | 启动一个 tcp 服务器 |
 | [tcp.cliengProxy](#tcpcliengproxy) |  |
 | [tcp.clientLocal](#tcpclientlocal) | 【客户端参数】设置客户端本地地址 |
 | [tcp.clientTimeout](#tcpclienttimeout) | 【客户端参数】设置超时时间 |
 | [tcp.clientTls](#tcpclienttls) | 【客户端参数】设置 TLS/SSL |
 | [tcp.serverCallback](#tcpservercallback) | 【服务端参数】设置服务端连接处理回调函数 |
 | [tcp.serverContext](#tcpservercontext) | 【服务端参数】设置服务端上下文，用于控制服务器生命周期 |
 | [tcp.serverTls](#tcpservertls) | 【服务端参数】设置 SSL/TLS 服务器 |




 



## 函数定义

### tcp.Connect



#### 详细描述



#### 定义：

`func tcp.Connect(host: string, port: any, params ...clientOpt) return (conn: *yaklib.tcpConnection, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| host | `string` |  要连接的 host |
| port | `any` |  要连接的端口 |
| params | `...clientOpt` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| conn | `*yaklib.tcpConnection` |   |
| r1 | `error` |   |


 
### tcp.Forward

转发 TCP 链接，在本地开一个 TCP 服务器，把到这个服务器的链接转发到远程端口上

#### 详细描述



#### 定义：

`func tcp.Forward(localPort: int, remoteHost: string, remotePort: int) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| localPort | `int` |   |
| remoteHost | `string` |   |
| remotePort | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### tcp.Serve

启动一个 tcp 服务器

#### 详细描述



#### 定义：

`func tcp.Serve(host: any, port: int, params ...serverOpt) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| host | `any` |   |
| port | `int` |   |
| params | `...serverOpt` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### tcp.cliengProxy



#### 详细描述



#### 定义：

`func tcp.cliengProxy(v1: string) return (r0: func dialerOpt(v1: *yaklib._tcpDialer) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func dialerOpt(v1: *yaklib._tcpDialer) ` |   |


 
### tcp.clientLocal

【客户端参数】设置客户端本地地址

#### 详细描述



#### 定义：

`func tcp.clientLocal(host: any) return (r0: clientOpt)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| host | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `clientOpt` |   |


 
### tcp.clientTimeout

【客户端参数】设置超时时间

#### 详细描述



#### 定义：

`func tcp.clientTimeout(seconds: float64) return (r0: clientOpt)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| seconds | `float64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `clientOpt` |   |


 
### tcp.clientTls

【客户端参数】设置 TLS/SSL

#### 详细描述



#### 定义：

`func tcp.clientTls(cert: any, key: any, caCerts ...any) return (r0: func dialerOpt(v1: *yaklib._tcpDialer) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cert | `any` |   |
| key | `any` |   |
| caCerts | `...any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func dialerOpt(v1: *yaklib._tcpDialer) ` |   |


 
### tcp.serverCallback

【服务端参数】设置服务端连接处理回调函数

#### 详细描述



#### 定义：

`func tcp.serverCallback(v1: func (v1: *yaklib.tcpConnection) ) return (r0: func tcpServerConfigOpt(v1: *yaklib.tcpServerConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `func (v1: *yaklib.tcpConnection) ` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func tcpServerConfigOpt(v1: *yaklib.tcpServerConfig) ` |   |


 
### tcp.serverContext

【服务端参数】设置服务端上下文，用于控制服务器生命周期

#### 详细描述



#### 定义：

`func tcp.serverContext(ctx: context.Context) return (r0: func tcpServerConfigOpt(v1: *yaklib.tcpServerConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func tcpServerConfigOpt(v1: *yaklib.tcpServerConfig) ` |   |


 
### tcp.serverTls

【服务端参数】设置 SSL/TLS 服务器

#### 详细描述



#### 定义：

`func tcp.serverTls(cert: any, key: any, caCerts ...any) return (r0: func tcpServerConfigOpt(v1: *yaklib.tcpServerConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cert | `any` |   |
| key | `any` |   |
| caCerts | `...any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func tcpServerConfigOpt(v1: *yaklib.tcpServerConfig) ` |   |


 


