# udp


|成员函数|函数描述/介绍|
|:------|:--------|
 | [udp.Connect](#udpconnect) | 创建一个 UDP 连接 |
 | [udp.MockUDPProtocol](#udpmockudpprotocol) |  |
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

`Connect(string, ...yaklib.udpClientOption) (*yaklib.udpConn, error)`


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


 
### udp.MockUDPProtocol



#### 详细描述



#### 定义：

`func udp.MockUDPProtocol(v1: string) return (r0: string, r1: int)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |
| r1 | `int` |   |


 
### udp.Serve

启动一个 UDP 服务器

#### 详细描述



#### 定义：

`Serve(host string, port any, opts ...udpServerOpt) error`


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

`clientLocalAddr(string) yaklib.udpClientOption`


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

`clientTimeout(float64) yaklib.udpClientOption`


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

`serverCallback(func(*yaklib.udpConn, []uint8, net.Addr)) yaklib.udpServerOpt`


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

`serverContext(context.Context) yaklib.udpServerOpt`


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

`serverTimeout(float64) yaklib.udpServerOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `float64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func udpServerOpt(v1: *yaklib.udpServerConfig) ` |   |


 


