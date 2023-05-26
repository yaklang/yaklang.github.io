# mitm


|成员函数|函数描述/介绍|
|:------|:--------|
 | [mitm.Bridge](#mitmbridge) | 桥接模式中间人 |
 | [mitm.Start](#mitmstart) | 启动一个中间人代理 |
 | [mitm.callback](#mitmcallback) |  |
 | [mitm.context](#mitmcontext) | 【参数】设置中间人的 context，用来控制生命周期 |
 | [mitm.hijackHTTPRequest](#mitmhijackhttprequest) |  |
 | [mitm.hijackHTTPResponse](#mitmhijackhttpresponse) |  |
 | [mitm.host](#mitmhost) | 【参数】设置中间人代理/服务器的监听主机端口 |
 | [mitm.isTransparent](#mitmistransparent) | 设置启动一个透明 mitm 劫持接口！ |
 | [mitm.maxContentLength](#mitmmaxcontentlength) |  |
 | [mitm.rootCA](#mitmrootca) | 设置中间人根 CA 证书（可以用 `tls` 工具包生成） |
 | [mitm.useDefaultCA](#mitmusedefaultca) | 设置是否使用默认CA，如果使用了默认CA会在当前目录自动生成一套CA证书和Key |
 | [mitm.wscallback](#mitmwscallback) |  |
 | [mitm.wsforcetext](#mitmwsforcetext) |  |




 



## 函数定义

### mitm.Bridge

桥接模式中间人

#### 详细描述



#### 定义：

`Bridge(
	port any,
	downstreamProxy string,
	opts ...mitmConfigOpt,
) error`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| listenedPort | `any` |  想要监听的本地端口 |
| nextProxy | `string` |  想要中转的下游代理 |
| params | `...opt` |  额外参数，用于设置证书/上下文等 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### mitm.Start

启动一个中间人代理

#### 详细描述



#### 定义：

`Start(
	port int,
	opts ...mitmConfigOpt,
) error`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| port | `int` |  中间人想要监听的代理 |
| params | `...opt` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### mitm.callback



#### 详细描述



#### 定义：

`callback(func(bool, string, *http.Request, *http.Response)) yaklib.mitmConfigOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `func(isHttps, url, req: *http.Request, rsp: *http.Resposne)` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func mitmConfigOpt(v1: *yaklib.mitmConfig) ` |   |


 
### mitm.context

【参数】设置中间人的 context，用来控制生命周期

#### 详细描述



#### 定义：

`context(context.Context) yaklib.mitmConfigOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `context.Context` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func mitmConfigOpt(v1: *yaklib.mitmConfig) ` |   |


 
### mitm.hijackHTTPRequest



#### 详细描述



#### 定义：

`hijackHTTPRequest(func(bool, string, []uint8, func([]uint8), func())) yaklib.mitmConfigOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `func (v1: bool, v2: string, v3: bytes, v4: func (v1: bytes) , v5: func () ) ` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func mitmConfigOpt(v1: *yaklib.mitmConfig) ` |   |


 
### mitm.hijackHTTPResponse



#### 详细描述



#### 定义：

`hijackHTTPResponse(func(bool, string, []uint8, func([]uint8), func())) yaklib.mitmConfigOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `func (v1: bool, v2: string, v3: bytes, v4: func (v1: bytes) , v5: func () ) ` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func mitmConfigOpt(v1: *yaklib.mitmConfig) ` |   |


 
### mitm.host

【参数】设置中间人代理/服务器的监听主机端口

#### 详细描述



#### 定义：

`host(string) yaklib.mitmConfigOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func mitmConfigOpt(v1: *yaklib.mitmConfig) ` |   |


 
### mitm.isTransparent

设置启动一个透明 mitm 劫持接口！

#### 详细描述



#### 定义：

`isTransparent(bool) yaklib.mitmConfigOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func mitmConfigOpt(v1: *yaklib.mitmConfig) ` |   |


 
### mitm.maxContentLength



#### 详细描述



#### 定义：

`maxContentLength(int) yaklib.mitmConfigOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func mitmConfigOpt(v1: *yaklib.mitmConfig) ` |   |


 
### mitm.rootCA

设置中间人根 CA 证书（可以用 `tls` 工具包生成）

#### 详细描述



#### 定义：

`rootCA([]uint8, []uint8) yaklib.mitmConfigOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| caCert | `bytes` |  设置 CA 根证书 |
| key | `bytes` |  设置 CA 对应的私钥 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func mitmConfigOpt(v1: *yaklib.mitmConfig) ` |   |


 
### mitm.useDefaultCA

设置是否使用默认CA，如果使用了默认CA会在当前目录自动生成一套CA证书和Key

#### 详细描述



#### 定义：

`useDefaultCA(bool) yaklib.mitmConfigOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func mitmConfigOpt(v1: *yaklib.mitmConfig) ` |   |


 
### mitm.wscallback



#### 详细描述



#### 定义：

`wscallback(func([]uint8, bool) any) yaklib.mitmConfigOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `func (v1: bytes, v2: bool) return(any) ` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func mitmConfigOpt(v1: *yaklib.mitmConfig) ` |   |


 
### mitm.wsforcetext



#### 详细描述



#### 定义：

`wsforcetext(bool) yaklib.mitmConfigOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func mitmConfigOpt(v1: *yaklib.mitmConfig) ` |   |


 


