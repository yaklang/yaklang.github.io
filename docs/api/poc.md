# poc


|成员函数|函数描述/介绍|
|:------|:--------|
 | [poc.FixHTTPPacketCRLF](#pocfixhttppacketcrlf) |  |
 | [poc.FixHTTPRequest](#pocfixhttprequest) | 修复可能有问题的 http request 数据包 |
 | [poc.FixHTTPResponse](#pocfixhttpresponse) | 修复可能有问题的 http response 数据包 |
 | [poc.HTTP](#pochttp) |  |
 | [poc.HTTPPacketForceChunked](#pochttppacketforcechunked) |  |
 | [poc.ParseBytesToHTTPRequest](#pocparsebytestohttprequest) | 把一个原始数据包 bytes 转变成 HTTP 请求 |
 | [poc.ParseBytesToHTTPResponse](#pocparsebytestohttpresponse) | 把一个数据包转变成可用的 HTTP Response 对象 |
 | [poc.ParseUrlToHTTPRequestRaw](#pocparseurltohttprequestraw) | 把 URL 解析成原始数据包 |
 | [poc.ReplaceBody](#pocreplacebody) |  |
 | [poc.Split](#pocsplit) | 把一个数据包的 Header 部分和 Body 分开，Header 是 string，body 部分是 bytes |
 | [poc.Websocket](#pocwebsocket) |  |
 | [poc.host](#pochost) |  |
 | [poc.http2](#pochttp2) |  |
 | [poc.https](#pochttps) |  |
 | [poc.jsRedirect](#pocjsredirect) |  |
 | [poc.noFixContentLength](#pocnofixcontentlength) |  |
 | [poc.noRedirect](#pocnoredirect) |  |
 | [poc.params](#pocparams) |  |
 | [poc.port](#pocport) |  |
 | [poc.proxy](#pocproxy) |  |
 | [poc.redirectHandler](#pocredirecthandler) |  |
 | [poc.redirectTimes](#pocredirecttimes) |  |
 | [poc.retryInStatusCode](#pocretryinstatuscode) |  |
 | [poc.retryNotInStatusCode](#pocretrynotinstatuscode) |  |
 | [poc.retryTimes](#pocretrytimes) |  |
 | [poc.save](#pocsave) |  |
 | [poc.session](#pocsession) |  |
 | [poc.source](#pocsource) |  |
 | [poc.timeout](#poctimeout) |  |
 | [poc.websocket](#pocwebsocket) |  |
 | [poc.websocketFromServer](#pocwebsocketfromserver) |  |
 | [poc.websocketOnClient](#pocwebsocketonclient) |  |




 



## 函数定义

### poc.FixHTTPPacketCRLF



#### 详细描述



#### 定义：

`FixHTTPPacketCRLF(raw []byte, noFixLength bool) []byte`


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

`FixHTTPRequest(raw []byte) []byte`


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

`FixHTTPResponse([]uint8) []uint8`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |


 
### poc.HTTP



#### 详细描述



#### 定义：

`HTTP(raw any, opts ...pocConfig) ([]byte, []byte, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `...yaklib.PocConfig` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `bytes` |   |
| r2 | `error` |   |


 
### poc.HTTPPacketForceChunked



#### 详细描述



#### 定义：

`HTTPPacketForceChunked(raw []byte) []byte`


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

`ParseBytesToHTTPRequest(raw []byte) (*http.Request, error)`


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

`ParseBytesToHTTPResponse(res []byte) (*http.Response, error)`


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

`ParseUrlToHTTPRequestRaw(method string, i any) (bool, []byte, error)`


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

`ReplaceBody(raw []byte, body []byte, chunk bool) []byte`


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

`Split(raw []byte, hook ...func(line string)) (string, []byte)`


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

`Websocket(any, ...yaklib.pocConfig) ([]uint8, []uint8, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `...yaklib.PocConfig` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `bytes` |   |
| r2 | `error` |   |


 
### poc.host



#### 详细描述



#### 定义：

`host(string) yaklib.pocConfig`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func PocConfig(v1: *yaklib._pocConfig) ` |   |


 
### poc.http2



#### 详细描述



#### 定义：

`http2(bool) yaklib.pocConfig`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func PocConfig(v1: *yaklib._pocConfig) ` |   |


 
### poc.https



#### 详细描述



#### 定义：

`https(bool) yaklib.pocConfig`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func PocConfig(v1: *yaklib._pocConfig) ` |   |


 
### poc.jsRedirect



#### 详细描述



#### 定义：

`jsRedirect(bool) yaklib.pocConfig`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func PocConfig(v1: *yaklib._pocConfig) ` |   |


 
### poc.noFixContentLength



#### 详细描述



#### 定义：

`noFixContentLength(bool) yaklib.pocConfig`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func PocConfig(v1: *yaklib._pocConfig) ` |   |


 
### poc.noRedirect



#### 详细描述



#### 定义：

`noRedirect(bool) yaklib.pocConfig`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func PocConfig(v1: *yaklib._pocConfig) ` |   |


 
### poc.params



#### 详细描述



#### 定义：

`params(any) yaklib.pocConfig`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func PocConfig(v1: *yaklib._pocConfig) ` |   |


 
### poc.port



#### 详细描述



#### 定义：

`port(int) yaklib.pocConfig`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func PocConfig(v1: *yaklib._pocConfig) ` |   |


 
### poc.proxy



#### 详细描述



#### 定义：

`proxy(...string) yaklib.pocConfig`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func PocConfig(v1: *yaklib._pocConfig) ` |   |


 
### poc.redirectHandler



#### 详细描述



#### 定义：

`redirectHandler(func(bool, []uint8, []uint8) bool) yaklib.pocConfig`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `func (v1: bool, v2: bytes, v3: bytes) return(bool) ` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func PocConfig(v1: *yaklib._pocConfig) ` |   |


 
### poc.redirectTimes



#### 详细描述



#### 定义：

`redirectTimes(int) yaklib.pocConfig`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func PocConfig(v1: *yaklib._pocConfig) ` |   |


 
### poc.retryInStatusCode



#### 详细描述



#### 定义：

`retryInStatusCode(...int) yaklib.pocConfig`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func PocConfig(v1: *yaklib._pocConfig) ` |   |


 
### poc.retryNotInStatusCode



#### 详细描述



#### 定义：

`retryNotInStatusCode(...int) yaklib.pocConfig`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func PocConfig(v1: *yaklib._pocConfig) ` |   |


 
### poc.retryTimes



#### 详细描述



#### 定义：

`retryTimes(int) yaklib.pocConfig`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func PocConfig(v1: *yaklib._pocConfig) ` |   |


 
### poc.save



#### 详细描述



#### 定义：

`save(bool) yaklib.pocConfig`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func PocConfig(v1: *yaklib._pocConfig) ` |   |


 
### poc.session



#### 详细描述



#### 定义：

`session(any) yaklib.pocConfig`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func PocConfig(v1: *yaklib._pocConfig) ` |   |


 
### poc.source



#### 详细描述



#### 定义：

`func poc.source(v1: string) return (r0: func PocConfig(v1: *yaklib._pocConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func PocConfig(v1: *yaklib._pocConfig) ` |   |


 
### poc.timeout



#### 详细描述



#### 定义：

`timeout(float64) yaklib.pocConfig`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `float64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func PocConfig(v1: *yaklib._pocConfig) ` |   |


 
### poc.websocket



#### 详细描述



#### 定义：

`websocket(bool) yaklib.pocConfig`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func PocConfig(v1: *yaklib._pocConfig) ` |   |


 
### poc.websocketFromServer



#### 详细描述



#### 定义：

`websocketFromServer(func([]uint8, func())) yaklib.pocConfig`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `func (v1: bytes, v2: func () ) ` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func PocConfig(v1: *yaklib._pocConfig) ` |   |


 
### poc.websocketOnClient



#### 详细描述



#### 定义：

`websocketOnClient(func(*lowhttp.WebsocketClient)) yaklib.pocConfig`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `func (v1: *lowhttp.WebsocketClient) ` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func PocConfig(v1: *yaklib._pocConfig) ` |   |


 


