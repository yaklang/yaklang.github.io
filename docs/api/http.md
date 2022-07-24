# http


|成员函数|函数描述/介绍|
|:------|:--------|
 | [http.Do](#httpdo) |  |
 | [http.Get](#httpget) |  |
 | [http.GetAllBody](#httpgetallbody) |  |
 | [http.NewRequest](#httpnewrequest) |  |
 | [http.Post](#httppost) |  |
 | [http.Raw](#httpraw) | 创建一个 Golang 原生的 `*http.Request` |
 | [http.Request](#httprequest) |  |
 | [http.RequestFaviconHash](#httprequestfaviconhash) | 生成 favicon 的 hash(mmh3 32) |
 | [http.RequestToMD5](#httprequesttomd5) | 把对 url 的 GET 请求的内容直接编码成 md5 |
 | [http.RequestToMMH3Hash128](#httprequesttommh3hash128) | 把 GET url 的 body 变成 mmh3 的 hash128 |
 | [http.RequestToMMH3Hash128x64](#httprequesttommh3hash128x64) | 把 GET url 的 body 变成 mmh3 的 hash128x64 |
 | [http.RequestToSha1](#httprequesttosha1) | 把 GET url 的 body 变成 mmh3 的 sha1 |
 | [http.RequestToSha256](#httprequesttosha256) | 把 GET url 的 body 变成 mmh3 的 sha256 |
 | [http.body](#httpbody) |  |
 | [http.cookie](#httpcookie) |  |
 | [http.dump](#httpdump) | 工具函数，把 `http.Request/http.Response` 变成完整的数据包 `[]byte` |
 | [http.dumphead](#httpdumphead) | 工具函数，把 `http.Request/http.Response` 的数据包的头序列化程 `[]byte` |
 | [http.header](#httpheader) |  |
 | [http.json](#httpjson) |  |
 | [http.noredirect](#httpnoredirect) |  |
 | [http.proxy](#httpproxy) |  |
 | [http.redirect](#httpredirect) |  |
 | [http.show](#httpshow) | 调试函数，展示原始数据包内容 |
 | [http.showhead](#httpshowhead) | 调试函数，展示原始数据包内容，不包含 body |
 | [http.timeout](#httptimeout) |  |
 | [http.ua](#httpua) |  |
 | [http.uarand](#httpuarand) | 【参数】设置随机 UserAgent |
 | [http.useragent](#httpuseragent) |  |




 



## 函数定义

### http.Do



#### 详细描述



#### 定义：

`func http.Do(v1: *yakhttp.YakHttpRequest) return (r0: *http.Response, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `*yakhttp.YakHttpRequest` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*http.Response` |   |
| r1 | `error` |   |


 
### http.Get



#### 详细描述



#### 定义：

`func http.Get(v1: string, v2 ...yakhttp.HttpOption) return (r0: *http.Response, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...yakhttp.HttpOption` |   |





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



#### 详细描述



#### 定义：

`func http.NewRequest(v1: string, v2: string, v3 ...yakhttp.HttpOption) return (r0: *yakhttp.YakHttpRequest, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |
| v3 | `...yakhttp.HttpOption` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yakhttp.YakHttpRequest` |   |
| r1 | `error` |   |


 
### http.Post



#### 详细描述



#### 定义：

`func http.Post(v1: string, v2 ...yakhttp.HttpOption) return (r0: *http.Response, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...yakhttp.HttpOption` |   |





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



#### 详细描述



#### 定义：

`func http.Request(v1: string, v2: string, v3 ...yakhttp.HttpOption) return (r0: *http.Response, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |
| v3 | `...yakhttp.HttpOption` |   |





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



#### 详细描述



#### 定义：

`func http.body(v1: any) return (r0: func HttpOption(v1: *yakhttp.YakHttpRequest) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func HttpOption(v1: *yakhttp.YakHttpRequest) ` |   |


 
### http.cookie



#### 详细描述



#### 定义：

`func http.cookie(v1: any) return (r0: func HttpOption(v1: *yakhttp.YakHttpRequest) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func HttpOption(v1: *yakhttp.YakHttpRequest) ` |   |


 
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



#### 详细描述



#### 定义：

`func http.header(v1: any, v2: any) return (r0: func HttpOption(v1: *yakhttp.YakHttpRequest) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func HttpOption(v1: *yakhttp.YakHttpRequest) ` |   |


 
### http.json



#### 详细描述



#### 定义：

`func http.json(v1: any) return (r0: func HttpOption(v1: *yakhttp.YakHttpRequest) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func HttpOption(v1: *yakhttp.YakHttpRequest) ` |   |


 
### http.noredirect



#### 详细描述



#### 定义：

`func http.noredirect(v1: func (v1: *http.Request, v2: []*http.Request) return(bool) ) return (r0: func HttpOption(v1: *yakhttp.YakHttpRequest) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `func (v1: *http.Request, v2: []*http.Request) return(bool) ` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func HttpOption(v1: *yakhttp.YakHttpRequest) ` |   |


 
### http.proxy



#### 详细描述



#### 定义：

`func http.proxy(v1 ...string) return (r0: func HttpOption(v1: *yakhttp.YakHttpRequest) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func HttpOption(v1: *yakhttp.YakHttpRequest) ` |   |


 
### http.redirect



#### 详细描述



#### 定义：

`func http.redirect(v1: func (v1: *http.Request, v2: []*http.Request) return(bool) ) return (r0: func HttpOption(v1: *yakhttp.YakHttpRequest) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `func (v1: *http.Request, v2: []*http.Request) return(bool) ` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func HttpOption(v1: *yakhttp.YakHttpRequest) ` |   |


 
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



#### 详细描述



#### 定义：

`func http.timeout(v1: float64) return (r0: func HttpOption(v1: *yakhttp.YakHttpRequest) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `float64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func HttpOption(v1: *yakhttp.YakHttpRequest) ` |   |


 
### http.ua



#### 详细描述



#### 定义：

`func http.ua(v1: any) return (r0: func HttpOption(v1: *yakhttp.YakHttpRequest) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func HttpOption(v1: *yakhttp.YakHttpRequest) ` |   |


 
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



#### 详细描述



#### 定义：

`func http.useragent(v1: any) return (r0: func HttpOption(v1: *yakhttp.YakHttpRequest) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func HttpOption(v1: *yakhttp.YakHttpRequest) ` |   |


 


