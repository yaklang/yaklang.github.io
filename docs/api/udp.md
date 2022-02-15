# udp


|成员函数|函数描述/介绍|
|:------|:--------|
 | [udp.Connect](#udpconnect) | 创建一个 UDP 连接 |
 | [udp.Serve](#udpserve) | 启动一个 UDP 服务器 |
 | [udp.clientLocalAddr](#udpclientlocaladdr) | 【可选】设置客户端的本地监听地址 |
 | [udp.clientTimeout](#udpclienttimeout) | 【可选】设置默认的客户端超时时间 |
 | [udp.serverCallback](#udpservercallback) | 【重要参数】设置服务器的处理函数 |
 | [udp.serverContext](#udpservercontext) | 【可选】设置服务器上下文 |
 | [udp.serverTimeout](#udpservertimeout) | 【可选】设置服务器默认超时时间 |




 



## 函数定义

### udp.Connect

创建一个 UDP 连接

#### 详细描述



#### 定义：

`func udp.Connect(target: string, extraParams ...yaklib.udpClientOption) return (conn: *yaklib.udpConn, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| target | `string` |  连接目标：IP:Port 的格式即可 |
| extraParams | `...yaklib.udpClientOption` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| conn | `*yaklib.udpConn` |   |
| r1 | `error` |   |


 
### udp.Serve

启动一个 UDP 服务器

#### 详细描述



#### 定义：

`func udp.Serve(host: string, port: any, params ...yaklib.udpServerOpt) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| host | `string` |  IP地址 |
| port | `any` |   |
| params | `...yaklib.udpServerOpt` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### udp.clientLocalAddr

【可选】设置客户端的本地监听地址

#### 详细描述



#### 定义：

`func udp.clientLocalAddr(localaddr: string) return (r0: func udpClientOption(v1: *yaklib.udpClientConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| localaddr | `string` |  IP:Port, 例如 127.0.0.0:53 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func udpClientOption(v1: *yaklib.udpClientConfig) ` |   |


 
### udp.clientTimeout

【可选】设置默认的客户端超时时间

#### 详细描述



#### 定义：

`func udp.clientTimeout(v1: float64) return (r0: func udpClientOption(v1: *yaklib.udpClientConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `float64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func udpClientOption(v1: *yaklib.udpClientConfig) ` |   |


 
### udp.serverCallback

【重要参数】设置服务器的处理函数

#### 详细描述



#### 定义：

`func udp.serverCallback(v1: func (v1: *yaklib.udpConn, v2: bytes, v3: net.Addr) ) return (r0: func udpServerOpt(v1: *yaklib.udpServerConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `func (v1: *yaklib.udpConn, v2: bytes, v3: net.Addr) ` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func udpServerOpt(v1: *yaklib.udpServerConfig) ` |   |


 
### udp.serverContext

【可选】设置服务器上下文

#### 详细描述



#### 定义：

`func udp.serverContext(v1: context.Context) return (r0: func udpServerOpt(v1: *yaklib.udpServerConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `context.Context` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func udpServerOpt(v1: *yaklib.udpServerConfig) ` |   |


 
### udp.serverTimeout

【可选】设置服务器默认超时时间

#### 详细描述



#### 定义：

`func udp.serverTimeout(v1: float64) return (r0: func udpServerOpt(v1: *yaklib.udpServerConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `float64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func udpServerOpt(v1: *yaklib.udpServerConfig) ` |   |


 


