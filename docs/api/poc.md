# poc


|成员函数|函数描述/介绍|
|:------|:--------|
 | [poc.FixHTTPPacketCRLF](#pocfixhttppacketcrlf) |  |
 | [poc.FixHTTPRequest](#pocfixhttprequest) | 修复可能有问题的 http request 数据包 |
 | [poc.FixHTTPResponse](#pocfixhttpresponse) | 修复可能有问题的 http response 数据包 |
 | [poc.HTTP](#pochttp) | 直接使用一个数据包，发送 HTTP 请求 |
 | [poc.HTTPPacketForceChunked](#pochttppacketforcechunked) |  |
 | [poc.ParseBytesToHTTPRequest](#pocparsebytestohttprequest) | 把一个原始数据包 bytes 转变成 HTTP 请求 |
 | [poc.ParseBytesToHTTPResponse](#pocparsebytestohttpresponse) | 把一个数据包转变成可用的 HTTP Response 对象 |
 | [poc.ParseUrlToHTTPRequestRaw](#pocparseurltohttprequestraw) | 把 URL 解析成原始数据包 |
 | [poc.ReplaceBody](#pocreplacebody) |  |
 | [poc.Split](#pocsplit) | 把一个数据包的 Header 部分和 Body 分开，Header 是 string，body 部分是 bytes |
 | [poc.Websocket](#pocwebsocket) |  |
 | [poc.host](#pochost) | 强制指定连接 Host（一般用于 host） |
 | [poc.http2](#pochttp2) |  |
 | [poc.https](#pochttps) | forceHttps |
 | [poc.jsRedirect](#pocjsredirect) | 控制 js 跳转是否启用 |
 | [poc.noFixContentLength](#pocnofixcontentlength) | 不修复 ContentLength 控制开关 |
 | [poc.noRedirect](#pocnoredirect) |  |
 | [poc.params](#pocparams) | 构造数据包时的参数，需要一个 map[string]any |
 | [poc.port](#pocport) | 强行设置远端连接的端口（默认可以自动设置） |
 | [poc.proxy](#pocproxy) | 设置代理 |
 | [poc.redirectHandler](#pocredirecthandler) | 设置重定向处理函数 |
 | [poc.redirectTimes](#pocredirecttimes) | 设置重定向的次数 |
 | [poc.retryInStatusCode](#pocretryinstatuscode) |  |
 | [poc.retryNotInStatusCode](#pocretrynotinstatuscode) |  |
 | [poc.retryTimes](#pocretrytimes) |  |
 | [poc.timeout](#poctimeout) | 设置 PoC Timeout |
 | [poc.websocket](#pocwebsocket) |  |
 | [poc.websocketFromServer](#pocwebsocketfromserver) |  |
 | [poc.websocketOnClient](#pocwebsocketonclient) |  |




 



## 函数定义

### poc.FixHTTPPacketCRLF



#### 详细描述



#### 定义：

`func poc.FixHTTPPacketCRLF(v1: bytes, v2: bool) return (r0: bytes)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |


 
### poc.FixHTTPRequest

修复可能有问题的 http request 数据包

#### 详细描述



#### 定义：

`func poc.FixHTTPRequest(v1: bytes) return (r0: bytes)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |


 
### poc.FixHTTPResponse

修复可能有问题的 http response 数据包

#### 详细描述



#### 定义：

`func poc.FixHTTPResponse(v1: bytes) return (r0: bytes)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |


 
### poc.HTTP

直接使用一个数据包，发送 HTTP 请求

#### 详细描述



#### 定义：

`func poc.HTTP(packet: any, extraParams ...yaklib.pocConfig) return (responsePacket: bytes, requestPacket: bytes, err: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `any` |   |
| extraParams | `...yaklib.pocConfig` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| responsePacket | `bytes` |   |
| requestPacket | `bytes` |   |
| err | `error` |   |


 
### poc.HTTPPacketForceChunked



#### 详细描述



#### 定义：

`func poc.HTTPPacketForceChunked(v1: bytes) return (r0: bytes)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |


 
### poc.ParseBytesToHTTPRequest

把一个原始数据包 bytes 转变成 HTTP 请求

#### 详细描述



#### 定义：

`func poc.ParseBytesToHTTPRequest(requestRaw: bytes) return (req: *http.Request, err: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| requestRaw | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| req | `*http.Request` |   |
| err | `error` |   |


 
### poc.ParseBytesToHTTPResponse

把一个数据包转变成可用的 HTTP Response 对象

#### 详细描述



#### 定义：

`func poc.ParseBytesToHTTPResponse(raw: bytes) return (rsp: *http.Response, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| rsp | `*http.Response` |   |
| r1 | `error` |   |


 
### poc.ParseUrlToHTTPRequestRaw

把 URL 解析成原始数据包

#### 详细描述



#### 定义：

`func poc.ParseUrlToHTTPRequestRaw(method: string, url: any) return (https: bool, packet: bytes, err: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| method | `string` |   |
| url | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| https | `bool` |   |
| packet | `bytes` |   |
| err | `error` |   |


 
### poc.ReplaceBody



#### 详细描述



#### 定义：

`func poc.ReplaceBody(v1: bytes, v2: bytes, v3: bool) return (r0: bytes)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `bytes` |   |
| v3 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |


 
### poc.Split

把一个数据包的 Header 部分和 Body 分开，Header 是 string，body 部分是 bytes

#### 详细描述



#### 定义：

`func poc.Split(v1: bytes, v2 ...func(string)) return (r0: string, r1: bytes)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `...func(string)` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |
| r1 | `bytes` |   |


 
### poc.Websocket



#### 详细描述



#### 定义：

`func poc.Websocket(v1: any, v2 ...yaklib.pocConfig) return (r0: bytes, r1: bytes, r2: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `...yaklib.pocConfig` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `bytes` |   |
| r2 | `error` |   |


 
### poc.host

强制指定连接 Host（一般用于 host）

#### 详细描述



#### 定义：

`func poc.host(host: string) return (r0: func pocConfig(v1: *yaklib._pocConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| host | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func pocConfig(v1: *yaklib._pocConfig) ` |   |


 
### poc.http2



#### 详细描述



#### 定义：

`func poc.http2(v1: bool) return (r0: func pocConfig(v1: *yaklib._pocConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func pocConfig(v1: *yaklib._pocConfig) ` |   |


 
### poc.https

forceHttps

#### 详细描述



#### 定义：

`func poc.https(b: bool) return (r0: func pocConfig(v1: *yaklib._pocConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func pocConfig(v1: *yaklib._pocConfig) ` |   |


 
### poc.jsRedirect

控制 js 跳转是否启用

#### 详细描述



#### 定义：

`func poc.jsRedirect(enable: bool) return (r0: func pocConfig(v1: *yaklib._pocConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| enable | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func pocConfig(v1: *yaklib._pocConfig) ` |   |


 
### poc.noFixContentLength

不修复 ContentLength 控制开关

#### 详细描述



#### 定义：

`func poc.noFixContentLength(v1: bool) return (r0: func pocConfig(v1: *yaklib._pocConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func pocConfig(v1: *yaklib._pocConfig) ` |   |


 
### poc.noRedirect



#### 详细描述



#### 定义：

`func poc.noRedirect(v1: bool) return (r0: func pocConfig(v1: *yaklib._pocConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func pocConfig(v1: *yaklib._pocConfig) ` |   |


 
### poc.params

构造数据包时的参数，需要一个 map[string]any

#### 详细描述



#### 定义：

`func poc.params(params: any) return (r0: func pocConfig(v1: *yaklib._pocConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| params | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func pocConfig(v1: *yaklib._pocConfig) ` |   |


 
### poc.port

强行设置远端连接的端口（默认可以自动设置）

#### 详细描述



#### 定义：

`func poc.port(v1: int) return (r0: func pocConfig(v1: *yaklib._pocConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func pocConfig(v1: *yaklib._pocConfig) ` |   |


 
### poc.proxy

设置代理

#### 详细描述



#### 定义：

`func poc.proxy(proxyUrl ...string) return (r0: func pocConfig(v1: *yaklib._pocConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| proxyUrl | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func pocConfig(v1: *yaklib._pocConfig) ` |   |


 
### poc.redirectHandler

设置重定向处理函数

#### 详细描述



#### 定义：

`func poc.redirectHandler(v1: func (v1: bool, v2: bytes, v3: bytes) return(bool) ) return (r0: func pocConfig(v1: *yaklib._pocConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `func (v1: bool, v2: bytes, v3: bytes) return(bool) ` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func pocConfig(v1: *yaklib._pocConfig) ` |   |


 
### poc.redirectTimes

设置重定向的次数

#### 详细描述



#### 定义：

`func poc.redirectTimes(maxRetry: int) return (r0: func pocConfig(v1: *yaklib._pocConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| maxRetry | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func pocConfig(v1: *yaklib._pocConfig) ` |   |


 
### poc.retryInStatusCode



#### 详细描述



#### 定义：

`func poc.retryInStatusCode(v1 ...int) return (r0: func pocConfig(v1: *yaklib._pocConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func pocConfig(v1: *yaklib._pocConfig) ` |   |


 
### poc.retryNotInStatusCode



#### 详细描述



#### 定义：

`func poc.retryNotInStatusCode(v1 ...int) return (r0: func pocConfig(v1: *yaklib._pocConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func pocConfig(v1: *yaklib._pocConfig) ` |   |


 
### poc.retryTimes



#### 详细描述



#### 定义：

`func poc.retryTimes(v1: int) return (r0: func pocConfig(v1: *yaklib._pocConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func pocConfig(v1: *yaklib._pocConfig) ` |   |


 
### poc.timeout

设置 PoC Timeout

#### 详细描述



#### 定义：

`func poc.timeout(seconds: float64) return (r0: func pocConfig(v1: *yaklib._pocConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| seconds | `float64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func pocConfig(v1: *yaklib._pocConfig) ` |   |


 
### poc.websocket



#### 详细描述



#### 定义：

`func poc.websocket(v1: bool) return (r0: func pocConfig(v1: *yaklib._pocConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func pocConfig(v1: *yaklib._pocConfig) ` |   |


 
### poc.websocketFromServer



#### 详细描述



#### 定义：

`func poc.websocketFromServer(v1: func (v1: bytes, v2: func () ) ) return (r0: func pocConfig(v1: *yaklib._pocConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `func (v1: bytes, v2: func () ) ` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func pocConfig(v1: *yaklib._pocConfig) ` |   |


 
### poc.websocketOnClient



#### 详细描述



#### 定义：

`func poc.websocketOnClient(v1: func (v1: *lowhttp.WebsocketClient) ) return (r0: func pocConfig(v1: *yaklib._pocConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `func (v1: *lowhttp.WebsocketClient) ` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func pocConfig(v1: *yaklib._pocConfig) ` |   |


 


