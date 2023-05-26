# httpserver


|成员函数|函数描述/介绍|
|:------|:--------|
 | [httpserver.LocalFileSystemServe](#httpserverlocalfilesystemserve) |  |
 | [httpserver.Serve](#httpserverserve) | 启动一个 HTTP 服务器 |
 | [httpserver.context](#httpservercontext) | 【参数】为 HTTP Server 增加上下文控制生命周期 |
 | [httpserver.handler](#httpserverhandler) |  |
 | [httpserver.tlsCertAndKey](#httpservertlscertandkey) | 【参数】设置 TLS/SSL，启动一个 HTTPS 服务器 |




 



## 函数定义

### httpserver.LocalFileSystemServe



#### 详细描述



#### 定义：

`LocalFileSystemServe(host string, port int, prefix, localPath string, opts ..._httpServerConfigOpt) error`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `int` |   |
| v3 | `string` |   |
| v4 | `string` |   |
| v5 | `...yaklib._httpServerConfigOpt` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### httpserver.Serve

启动一个 HTTP 服务器

#### 详细描述



#### 定义：

`Serve(host string, port int, opts ..._httpServerConfigOpt) error`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| host | `string` |  服务器的本地地址 |
| port | `int` |  服务器的端口 |
| params | `...opt` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### httpserver.context

【参数】为 HTTP Server 增加上下文控制生命周期

#### 详细描述



#### 定义：

`context(context.Context) yaklib._httpServerConfigOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `opt` |   |


 
### httpserver.handler



#### 详细描述



#### 定义：

`handler(func(http.ResponseWriter, *http.Request)) yaklib._httpServerConfigOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| handler | `func (v1: http.ResponseWriter, v2: *http.Request) ` |  【参数】设置 HTTP 请求的处理回调函数 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `opt` |   |


 
### httpserver.tlsCertAndKey

【参数】设置 TLS/SSL，启动一个 HTTPS 服务器

#### 详细描述



#### 定义：

`tlsCertAndKey(any, any, ...any) yaklib._httpServerConfigOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cert | `any` |   |
| key | `any` |   |
| caCerts | `...any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func _httpServerConfigOpt(v1: *yaklib._httpServerConfig) ` |   |


 


