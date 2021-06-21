# httpserver


|成员函数|函数描述/介绍|
|:------|:--------|
 | [httpserver.Serve](#httpserverserve) |  |
 | [httpserver.context](#httpservercontext) |  |
 | [httpserver.handler](#httpserverhandler) |  |
 | [httpserver.tlsCertAndKey](#httpservertlscertandkey) |  |




 



## 函数定义

### httpserver.Serve



#### 定义：

`func (v1: string, v2: int, v3 ...func _httpServerConfigOpt(v1: *yaklib._httpServerConfig) ) return(error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |
| v2 | int |   |
| v3 | []yaklib._httpServerConfigOpt |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | error |   |


### httpserver.context



#### 定义：

`func (v1: context.Context) return(func _httpServerConfigOpt(v1: *yaklib._httpServerConfig) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | context.Context |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func _httpServerConfigOpt(v1: *yaklib._httpServerConfig)  |   |


### httpserver.handler



#### 定义：

`func (v1: func (v1: http.ResponseWriter, v2: *http.Request) ) return(func _httpServerConfigOpt(v1: *yaklib._httpServerConfig) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | func (v1: http.ResponseWriter, v2: *http.Request)  |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func _httpServerConfigOpt(v1: *yaklib._httpServerConfig)  |   |


### httpserver.tlsCertAndKey



#### 定义：

`func (v1: interface {}, v2: interface {}, v3 ...interface {}) return(func _httpServerConfigOpt(v1: *yaklib._httpServerConfig) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | interface {} |   |
| v2 | interface {} |   |
| v3 | []interface {} |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func _httpServerConfigOpt(v1: *yaklib._httpServerConfig)  |   |





