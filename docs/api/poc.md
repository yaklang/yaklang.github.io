# poc


|成员函数|函数描述/介绍|
|:------|:--------|
 | [poc.AppendHTTPPacketCookie](#pocappendhttppacketcookie) |  |
 | [poc.AppendHTTPPacketFormEncoded](#pocappendhttppacketformencoded) |  |
 | [poc.AppendHTTPPacketHeader](#pocappendhttppacketheader) |  |
 | [poc.AppendHTTPPacketPath](#pocappendhttppacketpath) |  |
 | [poc.AppendHTTPPacketPostParam](#pocappendhttppacketpostparam) |  |
 | [poc.AppendHTTPPacketQueryParam](#pocappendhttppacketqueryparam) |  |
 | [poc.AppendHTTPPacketUploadFile](#pocappendhttppacketuploadfile) |  |
 | [poc.BuildRequest](#pocbuildrequest) |  |
 | [poc.CurlToHTTPRequest](#poccurltohttprequest) |  |
 | [poc.Delete](#pocdelete) |  |
 | [poc.DeleteHTTPPacketCookie](#pocdeletehttppacketcookie) |  |
 | [poc.DeleteHTTPPacketForm](#pocdeletehttppacketform) |  |
 | [poc.DeleteHTTPPacketHeader](#pocdeletehttppacketheader) |  |
 | [poc.DeleteHTTPPacketPostParam](#pocdeletehttppacketpostparam) |  |
 | [poc.DeleteHTTPPacketQueryParam](#pocdeletehttppacketqueryparam) |  |
 | [poc.Do](#pocdo) |  |
 | [poc.FixHTTPPacketCRLF](#pocfixhttppacketcrlf) |  |
 | [poc.FixHTTPRequest](#pocfixhttprequest) | 修复可能有问题的 http request 数据包 |
 | [poc.FixHTTPResponse](#pocfixhttpresponse) | 修复可能有问题的 http response 数据包 |
 | [poc.Get](#pocget) |  |
 | [poc.GetAllHTTPPacketPostParams](#pocgetallhttppacketpostparams) |  |
 | [poc.GetAllHTTPPacketQueryParams](#pocgetallhttppacketqueryparams) |  |
 | [poc.GetHTTPPacketBody](#pocgethttppacketbody) |  |
 | [poc.GetHTTPPacketContentType](#pocgethttppacketcontenttype) |  |
 | [poc.GetHTTPPacketCookie](#pocgethttppacketcookie) |  |
 | [poc.GetHTTPPacketCookieFirst](#pocgethttppacketcookiefirst) |  |
 | [poc.GetHTTPPacketCookieValues](#pocgethttppacketcookievalues) |  |
 | [poc.GetHTTPPacketCookies](#pocgethttppacketcookies) |  |
 | [poc.GetHTTPPacketCookiesFull](#pocgethttppacketcookiesfull) |  |
 | [poc.GetHTTPPacketFirstLine](#pocgethttppacketfirstline) |  |
 | [poc.GetHTTPPacketHeader](#pocgethttppacketheader) |  |
 | [poc.GetHTTPPacketHeaders](#pocgethttppacketheaders) |  |
 | [poc.GetHTTPPacketHeadersFull](#pocgethttppacketheadersfull) |  |
 | [poc.GetHTTPPacketPostParam](#pocgethttppacketpostparam) |  |
 | [poc.GetHTTPPacketQueryParam](#pocgethttppacketqueryparam) |  |
 | [poc.GetStatusCodeFromResponse](#pocgetstatuscodefromresponse) |  |
 | [poc.HTTP](#pochttp) |  |
 | [poc.HTTPEx](#pochttpex) |  |
 | [poc.HTTPPacketForceChunked](#pochttppacketforcechunked) |  |
 | [poc.HTTPRequestToCurl](#pochttprequesttocurl) |  |
 | [poc.Head](#pochead) |  |
 | [poc.IsResponse](#pocisresponse) |  |
 | [poc.Options](#pocoptions) |  |
 | [poc.ParseBytesToHTTPRequest](#pocparsebytestohttprequest) | 把一个原始数据包 bytes 转变成 HTTP 请求 |
 | [poc.ParseBytesToHTTPResponse](#pocparsebytestohttpresponse) | 把一个数据包转变成可用的 HTTP Response 对象 |
 | [poc.ParseUrlToHTTPRequestRaw](#pocparseurltohttprequestraw) | 把 URL 解析成原始数据包 |
 | [poc.Post](#pocpost) |  |
 | [poc.ReplaceAllHTTPPacketPostParams](#pocreplaceallhttppacketpostparams) |  |
 | [poc.ReplaceAllHTTPPacketQueryParams](#pocreplaceallhttppacketqueryparams) |  |
 | [poc.ReplaceBody](#pocreplacebody) |  |
 | [poc.ReplaceHTTPPacketBasicAuth](#pocreplacehttppacketbasicauth) |  |
 | [poc.ReplaceHTTPPacketBody](#pocreplacehttppacketbody) |  |
 | [poc.ReplaceHTTPPacketCookie](#pocreplacehttppacketcookie) |  |
 | [poc.ReplaceHTTPPacketFirstLine](#pocreplacehttppacketfirstline) |  |
 | [poc.ReplaceHTTPPacketHeader](#pocreplacehttppacketheader) |  |
 | [poc.ReplaceHTTPPacketHost](#pocreplacehttppackethost) |  |
 | [poc.ReplaceHTTPPacketMethod](#pocreplacehttppacketmethod) |  |
 | [poc.ReplaceHTTPPacketPath](#pocreplacehttppacketpath) |  |
 | [poc.ReplaceHTTPPacketPostParam](#pocreplacehttppacketpostparam) |  |
 | [poc.ReplaceHTTPPacketQueryParam](#pocreplacehttppacketqueryparam) |  |
 | [poc.Split](#pocsplit) | 把一个数据包的 Header 部分和 Body 分开，Header 是 string，body 部分是 bytes |
 | [poc.Websocket](#pocwebsocket) |  |
 | [poc.appendCookie](#pocappendcookie) |  |
 | [poc.appendFormEncoded](#pocappendformencoded) |  |
 | [poc.appendHeader](#pocappendheader) |  |
 | [poc.appendPath](#pocappendpath) |  |
 | [poc.appendPostParam](#pocappendpostparam) |  |
 | [poc.appendQueryParam](#pocappendqueryparam) |  |
 | [poc.appendUploadFile](#pocappenduploadfile) |  |
 | [poc.deleteCookie](#pocdeletecookie) |  |
 | [poc.deleteForm](#pocdeleteform) |  |
 | [poc.deleteHeader](#pocdeleteheader) |  |
 | [poc.deletePostParam](#pocdeletepostparam) |  |
 | [poc.deleteQueryParam](#pocdeletequeryparam) |  |
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
 | [poc.replaceAllPostParams](#pocreplaceallpostparams) |  |
 | [poc.replaceAllQueryParams](#pocreplaceallqueryparams) |  |
 | [poc.replaceBasicAuth](#pocreplacebasicauth) |  |
 | [poc.replaceBody](#pocreplacebody) |  |
 | [poc.replaceCookie](#pocreplacecookie) |  |
 | [poc.replaceFirstLine](#pocreplacefirstline) |  |
 | [poc.replaceHeader](#pocreplaceheader) |  |
 | [poc.replaceHost](#pocreplacehost) |  |
 | [poc.replaceMethod](#pocreplacemethod) |  |
 | [poc.replacePath](#pocreplacepath) |  |
 | [poc.replacePostParam](#pocreplacepostparam) |  |
 | [poc.replaceQueryParam](#pocreplacequeryparam) |  |
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

### poc.AppendHTTPPacketCookie



#### 详细描述



#### 定义：

`func poc.AppendHTTPPacketCookie(v1: bytes, v2: string, v3: any) return (r0: bytes)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `string` |   |
| v3 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |


 
### poc.AppendHTTPPacketFormEncoded



#### 详细描述



#### 定义：

`func poc.AppendHTTPPacketFormEncoded(v1: bytes, v2: string, v3: string) return (r0: bytes)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `string` |   |
| v3 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |


 
### poc.AppendHTTPPacketHeader



#### 详细描述



#### 定义：

`func poc.AppendHTTPPacketHeader(v1: bytes, v2: string, v3: any) return (r0: bytes)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `string` |   |
| v3 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |


 
### poc.AppendHTTPPacketPath



#### 详细描述



#### 定义：

`func poc.AppendHTTPPacketPath(v1: bytes, v2: string) return (r0: bytes)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |


 
### poc.AppendHTTPPacketPostParam



#### 详细描述



#### 定义：

`func poc.AppendHTTPPacketPostParam(v1: bytes, v2: string, v3: string) return (r0: bytes)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `string` |   |
| v3 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |


 
### poc.AppendHTTPPacketQueryParam



#### 详细描述



#### 定义：

`func poc.AppendHTTPPacketQueryParam(v1: bytes, v2: string, v3: string) return (r0: bytes)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `string` |   |
| v3 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |


 
### poc.AppendHTTPPacketUploadFile



#### 详细描述



#### 定义：

`func poc.AppendHTTPPacketUploadFile(v1: bytes, v2: string, v3: string, v4: any, v5 ...string) return (r0: bytes)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `string` |   |
| v3 | `string` |   |
| v4 | `any` |   |
| v5 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |


 
### poc.BuildRequest



#### 详细描述



#### 定义：

`func poc.BuildRequest(v1: any, v2 ...yaklib.PocConfig) return (r0: bytes)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `...yaklib.PocConfig` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |


 
### poc.CurlToHTTPRequest



#### 详细描述



#### 定义：

`func poc.CurlToHTTPRequest(v1: string) return (r0: bytes)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |


 
### poc.Delete



#### 详细描述



#### 定义：

`func poc.Delete(v1: string, v2 ...yaklib.PocConfig) return (r0: *lowhttp.LowhttpResponse, r1: *http.Request, r2: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...yaklib.PocConfig` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*lowhttp.LowhttpResponse` |   |
| r1 | `*http.Request` |   |
| r2 | `error` |   |


 
### poc.DeleteHTTPPacketCookie



#### 详细描述



#### 定义：

`func poc.DeleteHTTPPacketCookie(v1: bytes, v2: string) return (r0: bytes)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |


 
### poc.DeleteHTTPPacketForm



#### 详细描述



#### 定义：

`func poc.DeleteHTTPPacketForm(v1: bytes, v2: string) return (r0: bytes)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |


 
### poc.DeleteHTTPPacketHeader



#### 详细描述



#### 定义：

`func poc.DeleteHTTPPacketHeader(v1: bytes, v2: string) return (r0: bytes)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |


 
### poc.DeleteHTTPPacketPostParam



#### 详细描述



#### 定义：

`func poc.DeleteHTTPPacketPostParam(v1: bytes, v2: string) return (r0: bytes)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |


 
### poc.DeleteHTTPPacketQueryParam



#### 详细描述



#### 定义：

`func poc.DeleteHTTPPacketQueryParam(v1: bytes, v2: string) return (r0: bytes)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |


 
### poc.Do



#### 详细描述



#### 定义：

`func poc.Do(v1: string, v2: string, v3 ...yaklib.PocConfig) return (r0: *lowhttp.LowhttpResponse, r1: *http.Request, r2: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |
| v3 | `...yaklib.PocConfig` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*lowhttp.LowhttpResponse` |   |
| r1 | `*http.Request` |   |
| r2 | `error` |   |


 
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


 
### poc.Get



#### 详细描述



#### 定义：

`func poc.Get(v1: string, v2 ...yaklib.PocConfig) return (r0: *lowhttp.LowhttpResponse, r1: *http.Request, r2: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...yaklib.PocConfig` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*lowhttp.LowhttpResponse` |   |
| r1 | `*http.Request` |   |
| r2 | `error` |   |


 
### poc.GetAllHTTPPacketPostParams



#### 详细描述



#### 定义：

`func poc.GetAllHTTPPacketPostParams(v1: bytes) return (r0: map[string]string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `map[string]string` |   |


 
### poc.GetAllHTTPPacketQueryParams



#### 详细描述



#### 定义：

`func poc.GetAllHTTPPacketQueryParams(v1: bytes) return (r0: map[string]string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `map[string]string` |   |


 
### poc.GetHTTPPacketBody



#### 详细描述



#### 定义：

`func poc.GetHTTPPacketBody(v1: bytes) return (r0: bytes)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |


 
### poc.GetHTTPPacketContentType



#### 详细描述



#### 定义：

`func poc.GetHTTPPacketContentType(v1: bytes) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### poc.GetHTTPPacketCookie



#### 详细描述



#### 定义：

`func poc.GetHTTPPacketCookie(v1: bytes, v2: string) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### poc.GetHTTPPacketCookieFirst



#### 详细描述



#### 定义：

`func poc.GetHTTPPacketCookieFirst(v1: bytes, v2: string) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### poc.GetHTTPPacketCookieValues



#### 详细描述



#### 定义：

`func poc.GetHTTPPacketCookieValues(v1: bytes, v2: string) return (r0: []string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### poc.GetHTTPPacketCookies



#### 详细描述



#### 定义：

`func poc.GetHTTPPacketCookies(v1: bytes) return (r0: map[string]string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `map[string]string` |   |


 
### poc.GetHTTPPacketCookiesFull



#### 详细描述



#### 定义：

`func poc.GetHTTPPacketCookiesFull(v1: bytes) return (r0: map[string][]string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `map[string][]string` |   |


 
### poc.GetHTTPPacketFirstLine



#### 详细描述



#### 定义：

`func poc.GetHTTPPacketFirstLine(v1: bytes) return (r0: string, r1: string, r2: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |
| r1 | `string` |   |
| r2 | `string` |   |


 
### poc.GetHTTPPacketHeader



#### 详细描述



#### 定义：

`func poc.GetHTTPPacketHeader(v1: bytes, v2: string) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### poc.GetHTTPPacketHeaders



#### 详细描述



#### 定义：

`func poc.GetHTTPPacketHeaders(v1: bytes) return (r0: map[string]string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `map[string]string` |   |


 
### poc.GetHTTPPacketHeadersFull



#### 详细描述



#### 定义：

`func poc.GetHTTPPacketHeadersFull(v1: bytes) return (r0: map[string][]string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `map[string][]string` |   |


 
### poc.GetHTTPPacketPostParam



#### 详细描述



#### 定义：

`func poc.GetHTTPPacketPostParam(v1: bytes, v2: string) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### poc.GetHTTPPacketQueryParam



#### 详细描述



#### 定义：

`func poc.GetHTTPPacketQueryParam(v1: bytes, v2: string) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### poc.GetStatusCodeFromResponse



#### 详细描述



#### 定义：

`func poc.GetStatusCodeFromResponse(v1: bytes) return (r0: int)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `int` |   |


 
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


 
### poc.HTTPEx



#### 详细描述



#### 定义：

`func poc.HTTPEx(v1: any, v2 ...yaklib.PocConfig) return (r0: *lowhttp.LowhttpResponse, r1: *http.Request, r2: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `...yaklib.PocConfig` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*lowhttp.LowhttpResponse` |   |
| r1 | `*http.Request` |   |
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


 
### poc.HTTPRequestToCurl



#### 详细描述



#### 定义：

`func poc.HTTPRequestToCurl(v1: bool, v2: any) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |
| v2 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### poc.Head



#### 详细描述



#### 定义：

`func poc.Head(v1: string, v2 ...yaklib.PocConfig) return (r0: *lowhttp.LowhttpResponse, r1: *http.Request, r2: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...yaklib.PocConfig` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*lowhttp.LowhttpResponse` |   |
| r1 | `*http.Request` |   |
| r2 | `error` |   |


 
### poc.IsResponse



#### 详细描述



#### 定义：

`func poc.IsResponse(v1: any) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### poc.Options



#### 详细描述



#### 定义：

`func poc.Options(v1: string, v2 ...yaklib.PocConfig) return (r0: *lowhttp.LowhttpResponse, r1: *http.Request, r2: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...yaklib.PocConfig` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*lowhttp.LowhttpResponse` |   |
| r1 | `*http.Request` |   |
| r2 | `error` |   |


 
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


 
### poc.Post



#### 详细描述



#### 定义：

`func poc.Post(v1: string, v2 ...yaklib.PocConfig) return (r0: *lowhttp.LowhttpResponse, r1: *http.Request, r2: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...yaklib.PocConfig` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*lowhttp.LowhttpResponse` |   |
| r1 | `*http.Request` |   |
| r2 | `error` |   |


 
### poc.ReplaceAllHTTPPacketPostParams



#### 详细描述



#### 定义：

`func poc.ReplaceAllHTTPPacketPostParams(v1: bytes, v2: map[string]string) return (r0: bytes)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `map[string]string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |


 
### poc.ReplaceAllHTTPPacketQueryParams



#### 详细描述



#### 定义：

`func poc.ReplaceAllHTTPPacketQueryParams(v1: bytes, v2: map[string]string) return (r0: bytes)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `map[string]string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |


 
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


 
### poc.ReplaceHTTPPacketBasicAuth



#### 详细描述



#### 定义：

`func poc.ReplaceHTTPPacketBasicAuth(v1: bytes, v2: string, v3: string) return (r0: bytes)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `string` |   |
| v3 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |


 
### poc.ReplaceHTTPPacketBody



#### 详细描述



#### 定义：

`func poc.ReplaceHTTPPacketBody(v1: bytes, v2: bytes) return (r0: bytes)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |


 
### poc.ReplaceHTTPPacketCookie



#### 详细描述



#### 定义：

`func poc.ReplaceHTTPPacketCookie(v1: bytes, v2: string, v3: any) return (r0: bytes)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `string` |   |
| v3 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |


 
### poc.ReplaceHTTPPacketFirstLine



#### 详细描述



#### 定义：

`func poc.ReplaceHTTPPacketFirstLine(v1: bytes, v2: string) return (r0: bytes)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |


 
### poc.ReplaceHTTPPacketHeader



#### 详细描述



#### 定义：

`func poc.ReplaceHTTPPacketHeader(v1: bytes, v2: string, v3: any) return (r0: bytes)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `string` |   |
| v3 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |


 
### poc.ReplaceHTTPPacketHost



#### 详细描述



#### 定义：

`func poc.ReplaceHTTPPacketHost(v1: bytes, v2: string) return (r0: bytes)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |


 
### poc.ReplaceHTTPPacketMethod



#### 详细描述



#### 定义：

`func poc.ReplaceHTTPPacketMethod(v1: bytes, v2: string) return (r0: bytes)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |


 
### poc.ReplaceHTTPPacketPath



#### 详细描述



#### 定义：

`func poc.ReplaceHTTPPacketPath(v1: bytes, v2: string) return (r0: bytes)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |


 
### poc.ReplaceHTTPPacketPostParam



#### 详细描述



#### 定义：

`func poc.ReplaceHTTPPacketPostParam(v1: bytes, v2: string, v3: string) return (r0: bytes)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `string` |   |
| v3 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |


 
### poc.ReplaceHTTPPacketQueryParam



#### 详细描述



#### 定义：

`func poc.ReplaceHTTPPacketQueryParam(v1: bytes, v2: string, v3: string) return (r0: bytes)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `string` |   |
| v3 | `string` |   |





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


 
### poc.appendCookie



#### 详细描述



#### 定义：

`func poc.appendCookie(v1: string, v2: string) return (r0: func PocConfig(v1: *yaklib._pocConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func PocConfig(v1: *yaklib._pocConfig) ` |   |


 
### poc.appendFormEncoded



#### 详细描述



#### 定义：

`func poc.appendFormEncoded(v1: string, v2: string) return (r0: func PocConfig(v1: *yaklib._pocConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func PocConfig(v1: *yaklib._pocConfig) ` |   |


 
### poc.appendHeader



#### 详细描述



#### 定义：

`func poc.appendHeader(v1: string, v2: string) return (r0: func PocConfig(v1: *yaklib._pocConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func PocConfig(v1: *yaklib._pocConfig) ` |   |


 
### poc.appendPath



#### 详细描述



#### 定义：

`func poc.appendPath(v1: string) return (r0: func PocConfig(v1: *yaklib._pocConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func PocConfig(v1: *yaklib._pocConfig) ` |   |


 
### poc.appendPostParam



#### 详细描述



#### 定义：

`func poc.appendPostParam(v1: string, v2: string) return (r0: func PocConfig(v1: *yaklib._pocConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func PocConfig(v1: *yaklib._pocConfig) ` |   |


 
### poc.appendQueryParam



#### 详细描述



#### 定义：

`func poc.appendQueryParam(v1: string, v2: string) return (r0: func PocConfig(v1: *yaklib._pocConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func PocConfig(v1: *yaklib._pocConfig) ` |   |


 
### poc.appendUploadFile



#### 详细描述



#### 定义：

`func poc.appendUploadFile(v1: string, v2: string, v3: any, v4 ...string) return (r0: func PocConfig(v1: *yaklib._pocConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |
| v3 | `any` |   |
| v4 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func PocConfig(v1: *yaklib._pocConfig) ` |   |


 
### poc.deleteCookie



#### 详细描述



#### 定义：

`func poc.deleteCookie(v1: string) return (r0: func PocConfig(v1: *yaklib._pocConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func PocConfig(v1: *yaklib._pocConfig) ` |   |


 
### poc.deleteForm



#### 详细描述



#### 定义：

`func poc.deleteForm(v1: string) return (r0: func PocConfig(v1: *yaklib._pocConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func PocConfig(v1: *yaklib._pocConfig) ` |   |


 
### poc.deleteHeader



#### 详细描述



#### 定义：

`func poc.deleteHeader(v1: string) return (r0: func PocConfig(v1: *yaklib._pocConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func PocConfig(v1: *yaklib._pocConfig) ` |   |


 
### poc.deletePostParam



#### 详细描述



#### 定义：

`func poc.deletePostParam(v1: string) return (r0: func PocConfig(v1: *yaklib._pocConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func PocConfig(v1: *yaklib._pocConfig) ` |   |


 
### poc.deleteQueryParam



#### 详细描述



#### 定义：

`func poc.deleteQueryParam(v1: string) return (r0: func PocConfig(v1: *yaklib._pocConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func PocConfig(v1: *yaklib._pocConfig) ` |   |


 
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


 
### poc.replaceAllPostParams



#### 详细描述



#### 定义：

`func poc.replaceAllPostParams(v1: map[string]string) return (r0: func PocConfig(v1: *yaklib._pocConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `map[string]string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func PocConfig(v1: *yaklib._pocConfig) ` |   |


 
### poc.replaceAllQueryParams



#### 详细描述



#### 定义：

`func poc.replaceAllQueryParams(v1: map[string]string) return (r0: func PocConfig(v1: *yaklib._pocConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `map[string]string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func PocConfig(v1: *yaklib._pocConfig) ` |   |


 
### poc.replaceBasicAuth



#### 详细描述



#### 定义：

`func poc.replaceBasicAuth(v1: string, v2: string) return (r0: func PocConfig(v1: *yaklib._pocConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func PocConfig(v1: *yaklib._pocConfig) ` |   |


 
### poc.replaceBody



#### 详细描述



#### 定义：

`func poc.replaceBody(v1: bytes, v2: bool) return (r0: func PocConfig(v1: *yaklib._pocConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func PocConfig(v1: *yaklib._pocConfig) ` |   |


 
### poc.replaceCookie



#### 详细描述



#### 定义：

`func poc.replaceCookie(v1: string, v2: string) return (r0: func PocConfig(v1: *yaklib._pocConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func PocConfig(v1: *yaklib._pocConfig) ` |   |


 
### poc.replaceFirstLine



#### 详细描述



#### 定义：

`func poc.replaceFirstLine(v1: string) return (r0: func PocConfig(v1: *yaklib._pocConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func PocConfig(v1: *yaklib._pocConfig) ` |   |


 
### poc.replaceHeader



#### 详细描述



#### 定义：

`func poc.replaceHeader(v1: string, v2: string) return (r0: func PocConfig(v1: *yaklib._pocConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func PocConfig(v1: *yaklib._pocConfig) ` |   |


 
### poc.replaceHost



#### 详细描述



#### 定义：

`func poc.replaceHost(v1: string) return (r0: func PocConfig(v1: *yaklib._pocConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func PocConfig(v1: *yaklib._pocConfig) ` |   |


 
### poc.replaceMethod



#### 详细描述



#### 定义：

`func poc.replaceMethod(v1: string) return (r0: func PocConfig(v1: *yaklib._pocConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func PocConfig(v1: *yaklib._pocConfig) ` |   |


 
### poc.replacePath



#### 详细描述



#### 定义：

`func poc.replacePath(v1: string) return (r0: func PocConfig(v1: *yaklib._pocConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func PocConfig(v1: *yaklib._pocConfig) ` |   |


 
### poc.replacePostParam



#### 详细描述



#### 定义：

`func poc.replacePostParam(v1: string, v2: string) return (r0: func PocConfig(v1: *yaklib._pocConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func PocConfig(v1: *yaklib._pocConfig) ` |   |


 
### poc.replaceQueryParam



#### 详细描述



#### 定义：

`func poc.replaceQueryParam(v1: string, v2: string) return (r0: func PocConfig(v1: *yaklib._pocConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





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


 


