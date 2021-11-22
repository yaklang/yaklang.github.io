# http


|成员函数|函数描述/介绍|
|:------|:--------|
 | [http.Do](#httpdo) | 执行一个 http 请求，这个请求是 `http.NewRequest` 创建的 |
 | [http.Get](#httpget) | 发送一个 http 请求 |
 | [http.GetAllBody](#httpgetallbody) |  |
 | [http.NewRequest](#httpnewrequest) | 创建一个新的 Request，创建之后，需要通过 `http.Do` 来发送 |
 | [http.Post](#httppost) |  |
 | [http.Raw](#httpraw) | 创建一个 Golang 原生的 `*http.Request` |
 | [http.Request](#httprequest) | 立即发起一个 http 请求，不需要 `http.Do` 来执行 |
 | [http.RequestFaviconHash](#httprequestfaviconhash) | 生成 favicon 的 hash(mmh3 32) |
 | [http.RequestToMD5](#httprequesttomd5) | 把对 url 的 GET 请求的内容直接编码成 md5 |
 | [http.RequestToMMH3Hash128](#httprequesttommh3hash128) | 把 GET url 的 body 变成 mmh3 的 hash128 |
 | [http.RequestToMMH3Hash128x64](#httprequesttommh3hash128x64) | 把 GET url 的 body 变成 mmh3 的 hash128x64 |
 | [http.RequestToSha1](#httprequesttosha1) | 把 GET url 的 body 变成 mmh3 的 sha1 |
 | [http.RequestToSha256](#httprequesttosha256) | 把 GET url 的 body 变成 mmh3 的 sha256 |
 | [http.body](#httpbody) | 【参数】设置请求的 body |
 | [http.cookie](#httpcookie) | 【参数】设置请求的 Cookie |
 | [http.dump](#httpdump) | 工具函数，把 `http.Request/http.Response` 变成完整的数据包 `[]byte` |
 | [http.dumphead](#httpdumphead) | 工具函数，把 `http.Request/http.Response` 的数据包的头序列化程 `[]byte` |
 | [http.header](#httpheader) | 【参数】为请求设置 http header |
 | [http.json](#httpjson) | 设置发送模式为 JSON，传入的参数会被 JSON 序列化，把结果设置为 Body，然后设置 application/json 为 Content-Type |
 | [http.proxy](#httpproxy) | 【参数】为请求设置 http 代理 |
 | [http.redirect](#httpredirect) | 设置重定向 |
 | [http.show](#httpshow) | 调试函数，展示原始数据包内容 |
 | [http.showhead](#httpshowhead) | 调试函数，展示原始数据包内容，不包含 body |
 | [http.timeout](#httptimeout) | 【参数】设置超时时间 |
 | [http.ua](#httpua) | 【参数】设置 UserAgent |
 | [http.uarand](#httpuarand) | 【参数】设置随机 UserAgent |
 | [http.useragent](#httpuseragent) | 【参数】设置 UserAgent |




 



## 函数定义

### http.Do

执行一个 http 请求，这个请求是 `http.NewRequest` 创建的

#### 详细描述



#### 定义：

`func http.Do(request: *yaklib.yakHttpRequest) return (r0: *http.Response, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| request | `*yaklib.yakHttpRequest` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*http.Response` |   |
| r1 | `error` |   |


 
### http.Get

发送一个 http 请求

#### 详细描述



#### 定义：

`func http.Get(url: opt, params ...httpOpt) return (r0: *http.Response, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `opt` |  想要请求的 url |
| params | `...httpOpt` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*http.Response` |   |
| r1 | `error` |   |


 
### http.GetAllBody



#### 详细描述



#### 定义：

`func http.GetAllBody(response: *http.Response) return (r0: []byte)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| response | `*http.Response` |  想要读取 body 的 `*http.Response` |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]byte` |   |


 
### http.NewRequest

创建一个新的 Request，创建之后，需要通过 `http.Do` 来发送

#### 详细描述



#### 定义：

`func http.NewRequest(method: string, url: string, params ...httpOpt) return (r0: *yaklib.yakHttpRequest, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| method | `string` |  HTTP 请求的方法 |
| url | `string` |  想要发送请求的 URL |
| params | `...httpOpt` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yaklib.yakHttpRequest` |   |
| r1 | `error` |   |


 
### http.Post



#### 详细描述



#### 定义：

`func http.Post(url: string, params ...httpOpt) return (r0: *http.Response, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` |  想要请求的 url |
| params | `...httpOpt` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*http.Response` |   |
| r1 | `error` |   |


 
### http.Raw

创建一个 Golang 原生的 `*http.Request`

#### 详细描述



#### 定义：

`func http.Raw(req: []byte|string|*http.Request|http.Request) return (r0: *http.Request, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| req | `[]byte|string|*http.Request|http.Request` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*http.Request` |   |
| r1 | `error` |   |


 
### http.Request

立即发起一个 http 请求，不需要 `http.Do` 来执行

#### 详细描述



#### 定义：

`func http.Request(method: string, url: string, params ...httpOpt) return (r0: *http.Response, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| method | `string` |  HTTP 方法 |
| url | `string` |  想要请求的 URL 链接 |
| params | `...httpOpt` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*http.Response` |   |
| r1 | `error` |   |


 
### http.RequestFaviconHash

生成 favicon 的 hash(mmh3 32)

#### 详细描述



#### 定义：

`func http.RequestFaviconHash(v1: string) return (r0: string, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |
| r1 | `error` |   |


 
### http.RequestToMD5

把对 url 的 GET 请求的内容直接编码成 md5

#### 详细描述



#### 定义：

`func http.RequestToMD5(url: string) return (md5Str: string, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| md5Str | `string` |   |
| r1 | `error` |   |


 
### http.RequestToMMH3Hash128

把 GET url 的 body 变成 mmh3 的 hash128

#### 详细描述



#### 定义：

`func http.RequestToMMH3Hash128(url: string) return (r0: string, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |
| r1 | `error` |   |


 
### http.RequestToMMH3Hash128x64

把 GET url 的 body 变成 mmh3 的 hash128x64

#### 详细描述



#### 定义：

`func http.RequestToMMH3Hash128x64(url: string) return (r0: string, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |
| r1 | `error` |   |


 
### http.RequestToSha1

把 GET url 的 body 变成 mmh3 的 sha1

#### 详细描述



#### 定义：

`func http.RequestToSha1(url: string) return (r0: string, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |
| r1 | `error` |   |


 
### http.RequestToSha256

把 GET url 的 body 变成 mmh3 的 sha256

#### 详细描述



#### 定义：

`func http.RequestToSha256(url: string) return (r0: string, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |
| r1 | `error` |   |


 
### http.body

【参数】设置请求的 body

#### 详细描述



#### 定义：

`func http.body(body: string|[]byte|io.Reader|any(fmt.Sprint)) return (r0: httpOpt)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| body | `string|[]byte|io.Reader|any(fmt.Sprint)` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `httpOpt` |   |


 
### http.cookie

【参数】设置请求的 Cookie

#### 详细描述



#### 定义：

`func http.cookie(cookieRaw: string) return (r0: httpOpt)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cookieRaw | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `httpOpt` |   |


 
### http.dump

工具函数，把 `http.Request/http.Response` 变成完整的数据包 `[]byte`

#### 详细描述



#### 定义：

`func http.dump(reqOrRsp: http.Response/Request) return (r0: bytes, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| reqOrRsp | `http.Response/Request` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### http.dumphead

工具函数，把 `http.Request/http.Response` 的数据包的头序列化程 `[]byte`

#### 详细描述



#### 定义：

`func http.dumphead(reqOrRsp: http.Response/Request) return (r0: bytes, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| reqOrRsp | `http.Response/Request` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### http.header

【参数】为请求设置 http header

#### 详细描述



#### 定义：

`func http.header(headerName: string, headerValue: string) return (r0: httpOpt)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| headerName | `string` |   |
| headerValue | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `httpOpt` |   |


 
### http.json

设置发送模式为 JSON，传入的参数会被 JSON 序列化，把结果设置为 Body，然后设置 application/json 为 Content-Type

#### 详细描述



#### 定义：

`func http.json(obj: any) return (r0: func httpOption(v1: *yaklib.yakHttpRequest) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| obj | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func httpOption(v1: *yaklib.yakHttpRequest) ` |   |


 
### http.proxy

【参数】为请求设置 http 代理

#### 详细描述



#### 定义：

`func http.proxy(proxyUrls ...string) return (r0: httpOpt)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| proxyUrls | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `httpOpt` |   |


 
### http.redirect

设置重定向

#### 详细描述



#### 定义：

`func http.redirect(v1: func (v1: *http.Request, v2: []*http.Request) return(bool) ) return (r0: func httpOption(v1: *yaklib.yakHttpRequest) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `func (v1: *http.Request, v2: []*http.Request) return(bool) ` |  回调函数，第一个参数为当前请求，第二个函数为已经重定向的请求，返回值为是否继续重定向？ |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func httpOption(v1: *yaklib.yakHttpRequest) ` |   |


 
### http.show

调试函数，展示原始数据包内容

#### 详细描述



#### 定义：

``func http.show(reqOrRsp: http.Request/Response)``


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| reqOrRsp | `http.Request/Response` |   |




 

 
### http.showhead

调试函数，展示原始数据包内容，不包含 body

#### 详细描述



#### 定义：

``func http.showhead(reqOrRsp: http.Request/Response)``


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| reqOrRsp | `http.Request/Response` |   |




 

 
### http.timeout

【参数】设置超时时间

#### 详细描述



#### 定义：

`func http.timeout(seconds: float64) return (r0: httpOpt)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| seconds | `float64` |  超时时间 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `httpOpt` |   |


 
### http.ua

【参数】设置 UserAgent

#### 详细描述



#### 定义：

`func http.ua(userAgent: any) return (r0: httpOpt)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| userAgent | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `httpOpt` |   |


 
### http.uarand

【参数】设置随机 UserAgent

#### 详细描述



#### 定义：

`func http.uarand() return (r0: string)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### http.useragent

【参数】设置 UserAgent

#### 详细描述



#### 定义：

`func http.useragent(userAgent: any) return (r0: func httpOption(v1: *yaklib.yakHttpRequest) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| userAgent | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func httpOption(v1: *yaklib.yakHttpRequest) ` |   |


 


