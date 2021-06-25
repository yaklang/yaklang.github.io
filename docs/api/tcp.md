# tcp


|成员函数|函数描述/介绍|
|:------|:--------|
 | [tcp.Connect](#tcpconnect) |  |
 | [tcp.Forward](#tcpforward) |  |
 | [tcp.Serve](#tcpserve) |  |
 | [tcp.clientLocal](#tcpclientlocal) |  |
 | [tcp.clientTimeout](#tcpclienttimeout) |  |
 | [tcp.clientTls](#tcpclienttls) |  |
 | [tcp.serverCallback](#tcpservercallback) |  |
 | [tcp.serverContext](#tcpservercontext) |  |
 | [tcp.serverTls](#tcpservertls) |  |




 



## 函数定义

### tcp.Connect



#### 详细描述



#### 定义：

`func tcp.Connect(v1: string, v2: any, v3 ...yaklib.dialerOpt) return (r0: *yaklib.tcpConnection, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `any` |   |
| v3 | `...yaklib.dialerOpt` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yaklib.tcpConnection` |   |
| r1 | `error` |   |


 
### tcp.Forward



#### 详细描述



#### 定义：

`func tcp.Forward(v1: int, v2: string, v3: int) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |
| v2 | `string` |   |
| v3 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### tcp.Serve



#### 详细描述



#### 定义：

`func tcp.Serve(v1: any, v2: int, v3 ...yaklib.tcpServerConfigOpt) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `int` |   |
| v3 | `...yaklib.tcpServerConfigOpt` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### tcp.clientLocal



#### 详细描述



#### 定义：

`func tcp.clientLocal(v1: any) return (r0: func dialerOpt(v1: *yaklib._tcpDialer) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func dialerOpt(v1: *yaklib._tcpDialer) ` |   |


 
### tcp.clientTimeout



#### 详细描述



#### 定义：

`func tcp.clientTimeout(v1: float64) return (r0: func dialerOpt(v1: *yaklib._tcpDialer) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `float64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func dialerOpt(v1: *yaklib._tcpDialer) ` |   |


 
### tcp.clientTls



#### 详细描述



#### 定义：

`func tcp.clientTls(v1: any, v2: any, v3 ...any) return (r0: func dialerOpt(v1: *yaklib._tcpDialer) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `any` |   |
| v3 | `...any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func dialerOpt(v1: *yaklib._tcpDialer) ` |   |


 
### tcp.serverCallback



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



#### 详细描述



#### 定义：

`func tcp.serverContext(v1: context.Context) return (r0: func tcpServerConfigOpt(v1: *yaklib.tcpServerConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `context.Context` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func tcpServerConfigOpt(v1: *yaklib.tcpServerConfig) ` |   |


 
### tcp.serverTls



#### 详细描述



#### 定义：

`func tcp.serverTls(v1: any, v2: any, v3 ...any) return (r0: func tcpServerConfigOpt(v1: *yaklib.tcpServerConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `any` |   |
| v3 | `...any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func tcpServerConfigOpt(v1: *yaklib.tcpServerConfig) ` |   |


 


