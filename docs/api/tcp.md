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



#### 定义：

`func (v1: string, v2: interface {}, v3 ...func dialerOpt(v1: *yaklib._tcpDialer) ) return(*yaklib.tcpConnection, error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |
| v2 | interface {} |   |
| v3 | []yaklib.dialerOpt |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | *yaklib.tcpConnection |   |
| r1 | error |   |


### tcp.Forward



#### 定义：

`func (v1: int, v2: string, v3: int) return(error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | int |   |
| v2 | string |   |
| v3 | int |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | error |   |


### tcp.Serve



#### 定义：

`func (v1: interface {}, v2: int, v3 ...func tcpServerConfigOpt(v1: *yaklib.tcpServerConfig) ) return(error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | interface {} |   |
| v2 | int |   |
| v3 | []yaklib.tcpServerConfigOpt |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | error |   |


### tcp.clientLocal



#### 定义：

`func (v1: interface {}) return(func dialerOpt(v1: *yaklib._tcpDialer) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | interface {} |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func dialerOpt(v1: *yaklib._tcpDialer)  |   |


### tcp.clientTimeout



#### 定义：

`func (v1: float64) return(func dialerOpt(v1: *yaklib._tcpDialer) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | float64 |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func dialerOpt(v1: *yaklib._tcpDialer)  |   |


### tcp.clientTls



#### 定义：

`func (v1: interface {}, v2: interface {}, v3 ...interface {}) return(func dialerOpt(v1: *yaklib._tcpDialer) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | interface {} |   |
| v2 | interface {} |   |
| v3 | []interface {} |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func dialerOpt(v1: *yaklib._tcpDialer)  |   |


### tcp.serverCallback



#### 定义：

`func (v1: func (v1: *yaklib.tcpConnection) ) return(func tcpServerConfigOpt(v1: *yaklib.tcpServerConfig) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | func (v1: *yaklib.tcpConnection)  |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func tcpServerConfigOpt(v1: *yaklib.tcpServerConfig)  |   |


### tcp.serverContext



#### 定义：

`func (v1: context.Context) return(func tcpServerConfigOpt(v1: *yaklib.tcpServerConfig) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | context.Context |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func tcpServerConfigOpt(v1: *yaklib.tcpServerConfig)  |   |


### tcp.serverTls



#### 定义：

`func (v1: interface {}, v2: interface {}, v3 ...interface {}) return(func tcpServerConfigOpt(v1: *yaklib.tcpServerConfig) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | interface {} |   |
| v2 | interface {} |   |
| v3 | []interface {} |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func tcpServerConfigOpt(v1: *yaklib.tcpServerConfig)  |   |





