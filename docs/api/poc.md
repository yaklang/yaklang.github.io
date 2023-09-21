# poc

|成员函数|函数描述/介绍|
|:------|:--------|
| [poc.AppendHTTPPacketCookie](#AppendHTTPPacketCookie) |AppendHTTPPacketCookie append cookie to http packetif packet is request, it will append to Cookie headerif packet is response, it will append to Set-Cookie header	packet = AppendHTTPPacketCookie(packet, "key", "value")|
| [poc.AppendHTTPPacketFormEncoded](#AppendHTTPPacketFormEncoded) |AppendHTTPPacketFormEncoded replace form data in http packetenable for request, it will replace form data in body	 packet = AppendHTTPPacketFormEncoded(packet, "key", "value")		--BOUNDARY---		Content-Disposition: form-data; name="key"		value		...|
| [poc.AppendHTTPPacketHeader](#AppendHTTPPacketHeader) ||
| [poc.AppendHTTPPacketPath](#AppendHTTPPacketPath) ||
| [poc.AppendHTTPPacketPostParam](#AppendHTTPPacketPostParam) ||
| [poc.AppendHTTPPacketQueryParam](#AppendHTTPPacketQueryParam) ||
| [poc.AppendHTTPPacketUploadFile](#AppendHTTPPacketUploadFile) |AppendHTTPPacketUploadFile replace form file in http packetenable for request, it will replace form file in bodyif fileContent is string, it will be treated as file pathvariadic is content-type, if not set, it will be detected auto.|
| [poc.BuildRequest](#BuildRequest) |BuildRequest will build a bytes request, you can use it to send request by yourself.|
| [poc.CurlToHTTPRequest](#CurlToHTTPRequest) ||
| [poc.Delete](#Delete) ||
| [poc.DeleteHTTPPacketCookie](#DeleteHTTPPacketCookie) |DeleteHTTPPacketCookie delete cookie from http packetif packet is request, it will delete from Cookie headerif packet is response, it will delete from Set-Cookie headerpacket = DeleteHTTPPacketCookie(packet, "key")|
| [poc.DeleteHTTPPacketForm](#DeleteHTTPPacketForm) ||
| [poc.DeleteHTTPPacketHeader](#DeleteHTTPPacketHeader) ||
| [poc.DeleteHTTPPacketPostParam](#DeleteHTTPPacketPostParam) ||
| [poc.DeleteHTTPPacketQueryParam](#DeleteHTTPPacketQueryParam) ||
| [poc.Do](#Do) |poc.Do is something like poc.HTTPEx, but the params is (method string, url string, opt...)use it like `poc.Do("GET", "https://www.example.com", poc.proxy(proxy))`|
| [poc.FixHTTPPacketCRLF](#FixHTTPPacketCRLF) ||
| [poc.FixHTTPRequest](#FixHTTPRequest) ||
| [poc.FixHTTPResponse](#FixHTTPResponse) ||
| [poc.Get](#Get) ||
| [poc.GetAllHTTPPacketPostParams](#GetAllHTTPPacketPostParams) ||
| [poc.GetAllHTTPPacketQueryParams](#GetAllHTTPPacketQueryParams) ||
| [poc.GetHTTPPacketBody](#GetHTTPPacketBody) ||
| [poc.GetHTTPPacketContentType](#GetHTTPPacketContentType) ||
| [poc.GetHTTPPacketCookie](#GetHTTPPacketCookie) ||
| [poc.GetHTTPPacketCookieFirst](#GetHTTPPacketCookieFirst) ||
| [poc.GetHTTPPacketCookieValues](#GetHTTPPacketCookieValues) ||
| [poc.GetHTTPPacketCookies](#GetHTTPPacketCookies) ||
| [poc.GetHTTPPacketCookiesFull](#GetHTTPPacketCookiesFull) ||
| [poc.GetHTTPPacketFirstLine](#GetHTTPPacketFirstLine) ||
| [poc.GetHTTPPacketHeader](#GetHTTPPacketHeader) ||
| [poc.GetHTTPPacketHeaders](#GetHTTPPacketHeaders) ||
| [poc.GetHTTPPacketHeadersFull](#GetHTTPPacketHeadersFull) ||
| [poc.GetHTTPPacketPostParam](#GetHTTPPacketPostParam) ||
| [poc.GetHTTPPacketQueryParam](#GetHTTPPacketQueryParam) ||
| [poc.GetStatusCodeFromResponse](#GetStatusCodeFromResponse) ||
| [poc.HTTP](#HTTP) |poc.HTTP means send http request and return (response, request, error)it support many option, use it via: `poc.HTTP(packet, poc.https(true), poc.proxy(proxy))`|
| [poc.HTTPEx](#HTTPEx) |poc.HTTPEx means send http request and return (*LowhttpResponse, *http.Request, error)it support many option, use it via: `poc.HTTPEx(packet, poc.https(true), poc.proxy(proxy))`.you will handle *lowhttp.LowhttpResponse with your own code. LowhttpResponse include many details.|
| [poc.HTTPPacketForceChunked](#HTTPPacketForceChunked) ||
| [poc.HTTPRequestToCurl](#HTTPRequestToCurl) ||
| [poc.Head](#Head) ||
| [poc.IsResponse](#IsResponse) |IsResp test if bytesstream is http response|
| [poc.Options](#Options) ||
| [poc.ParseBytesToHTTPRequest](#ParseBytesToHTTPRequest) ||
| [poc.ParseBytesToHTTPResponse](#ParseBytesToHTTPResponse) ||
| [poc.ParseUrlToHTTPRequestRaw](#ParseUrlToHTTPRequestRaw) ||
| [poc.Post](#Post) ||
| [poc.ReplaceAllHTTPPacketPostParams](#ReplaceAllHTTPPacketPostParams) ||
| [poc.ReplaceAllHTTPPacketQueryParams](#ReplaceAllHTTPPacketQueryParams) ||
| [poc.ReplaceBody](#ReplaceBody) ||
| [poc.ReplaceHTTPPacketBasicAuth](#ReplaceHTTPPacketBasicAuth) ||
| [poc.ReplaceHTTPPacketBody](#ReplaceHTTPPacketBody) ||
| [poc.ReplaceHTTPPacketCookie](#ReplaceHTTPPacketCookie) ||
| [poc.ReplaceHTTPPacketFirstLine](#ReplaceHTTPPacketFirstLine) |ReplaceHTTPPacketFirstLine replace http packet first lineenable for request and response all|
| [poc.ReplaceHTTPPacketHeader](#ReplaceHTTPPacketHeader) ||
| [poc.ReplaceHTTPPacketHost](#ReplaceHTTPPacketHost) ||
| [poc.ReplaceHTTPPacketMethod](#ReplaceHTTPPacketMethod) ||
| [poc.ReplaceHTTPPacketPath](#ReplaceHTTPPacketPath) ||
| [poc.ReplaceHTTPPacketPostParam](#ReplaceHTTPPacketPostParam) ||
| [poc.ReplaceHTTPPacketQueryParam](#ReplaceHTTPPacketQueryParam) ||
| [poc.Split](#Split) ||
| [poc.Websocket](#Websocket) |poc.Websocket is shortcut for `poc.HTTP(..., poc.websocket(true))`|
| [poc.appendCookie](#appendCookie) ||
| [poc.appendFormEncoded](#appendFormEncoded) ||
| [poc.appendHeader](#appendHeader) ||
| [poc.appendPath](#appendPath) ||
| [poc.appendPostParam](#appendPostParam) ||
| [poc.appendQueryParam](#appendQueryParam) ||
| [poc.appendUploadFile](#appendUploadFile) ||
| [poc.deleteCookie](#deleteCookie) ||
| [poc.deleteForm](#deleteForm) ||
| [poc.deleteHeader](#deleteHeader) ||
| [poc.deletePostParam](#deletePostParam) ||
| [poc.deleteQueryParam](#deleteQueryParam) ||
| [poc.host](#host) |params: poc packet builder and sender params, use it like: `poc.HTTP(..., poc.host("127.0.0.1"))`|
| [poc.http2](#http2) |params: use it `poc.HTTP(packet, poc.http2(true))` control http2 schema|
| [poc.https](#https) |params: use it `poc.HTTP(packet, poc.https(true))` control tls schema|
| [poc.jsRedirect](#jsRedirect) |params, use it as `poc.HTTP(packet, poc.jsRedirect(true))` to recognize js href(regexp)|
| [poc.noFixContentLength](#noFixContentLength) |params: use it like: `poc.HTTP(..., poc.noFixContentLength(true))` control fix content length.use it in pipeline or smuggle case.|
| [poc.noRedirect](#noRedirect) |params: use it like: `poc.HTTP(..., poc.noRedirect(true))` control redirect.|
| [poc.params](#params) ||
| [poc.port](#port) |params: poc packet builder and sender params, use it like: `poc.HTTP(..., poc.port(8080))`|
| [poc.proxy](#proxy) |params: use it: `poc.HTTP(..., poc.proxy(15))` control proxy.|
| [poc.redirectHandler](#redirectHandler) ||
| [poc.redirectTimes](#redirectTimes) |params: use it `poc.HTTP(..., poc.redirectTimes(3))` control redirect times.|
| [poc.replaceAllPostParams](#replaceAllPostParams) ||
| [poc.replaceAllQueryParams](#replaceAllQueryParams) ||
| [poc.replaceBasicAuth](#replaceBasicAuth) ||
| [poc.replaceBody](#replaceBody) ||
| [poc.replaceCookie](#replaceCookie) ||
| [poc.replaceFirstLine](#replaceFirstLine) |params, replace request first line, it's hacky!modified request bytes before request sent out|
| [poc.replaceHeader](#replaceHeader) |params, replace request header before sending.|
| [poc.replaceHost](#replaceHost) ||
| [poc.replaceMethod](#replaceMethod) |params, replace request method before sending.|
| [poc.replacePath](#replacePath) ||
| [poc.replacePostParam](#replacePostParam) ||
| [poc.replaceQueryParam](#replaceQueryParam) ||
| [poc.retryInStatusCode](#retryInStatusCode) |params: use it like: `poc.HTTP(..., poc.retryInStatusCode(200, 404))` control retry in(matched) status code.|
| [poc.retryNotInStatusCode](#retryNotInStatusCode) |params: use it like: `poc.HTTP(..., poc.retryNotInStatusCode(200, 404))` control retry not in(matched) status code.|
| [poc.retryTimes](#retryTimes) |params: use it like: `poc.HTTP(..., poc.retryTimes(3))` control retry times.|
| [poc.retryWaitTime](#retryWaitTime) |params: use it like: `poc.HTTP(..., poc.retryWaitTime(1))` control retry wait time(seconds).|
| [poc.save](#save) |params, save the current request and response to databasefind it in `yakit.QueryHTTPFlow`|
| [poc.session](#session) |params, inherit cookie via the same session key,use it as `poc.HTTP(packet, poc.session("key"))`it's useful for login case|
| [poc.source](#source) |params, set request source field, for saving to database|
| [poc.timeout](#timeout) |params: use it like: `poc.HTTP(..., poc.timeout(15))` control network timeout|
| [poc.websocket](#websocket) ||
| [poc.websocketFromServer](#websocketFromServer) ||
| [poc.websocketOnClient](#websocketOnClient) ||


## 函数定义
### AppendHTTPPacketCookie

#### 详细描述
AppendHTTPPacketCookie append cookie to http packetif packet is request, it will append to Cookie headerif packet is response, it will append to Set-Cookie header	packet = AppendHTTPPacketCookie(packet, "key", "value")

#### 定义

`AppendHTTPPacketCookie(packet []byte, key string, value any) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| key | `string` |   |
| value | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### AppendHTTPPacketFormEncoded

#### 详细描述
AppendHTTPPacketFormEncoded replace form data in http packetenable for request, it will replace form data in body	 packet = AppendHTTPPacketFormEncoded(packet, "key", "value")		--BOUNDARY---		Content-Disposition: form-data; name="key"		value		...

#### 定义

`AppendHTTPPacketFormEncoded(packet []byte, key string, value string) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| key | `string` |   |
| value | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### AppendHTTPPacketHeader

#### 详细描述


#### 定义

`AppendHTTPPacketHeader(packet []byte, headerKey string, headerValue any) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| headerKey | `string` |   |
| headerValue | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### AppendHTTPPacketPath

#### 详细描述


#### 定义

`AppendHTTPPacketPath(packet []byte, p string) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| p | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### AppendHTTPPacketPostParam

#### 详细描述


#### 定义

`AppendHTTPPacketPostParam(packet []byte, key string, value string) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| key | `string` |   |
| value | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### AppendHTTPPacketQueryParam

#### 详细描述


#### 定义

`AppendHTTPPacketQueryParam(packet []byte, key string, value string) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| key | `string` |   |
| value | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### AppendHTTPPacketUploadFile

#### 详细描述
AppendHTTPPacketUploadFile replace form file in http packetenable for request, it will replace form file in bodyif fileContent is string, it will be treated as file pathvariadic is content-type, if not set, it will be detected auto.

#### 定义

`AppendHTTPPacketUploadFile(packet []byte, fieldName string, fileName string, fileContent any, contentType ...string) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| fieldName | `string` |   |
| fileName | `string` |   |
| fileContent | `any` |   |
| contentType | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### BuildRequest

#### 详细描述
BuildRequest will build a bytes request, you can use it to send request by yourself.

#### 定义

`BuildRequest(i any, opts ...PocConfig) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |
| opts | `...PocConfig` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### CurlToHTTPRequest

#### 详细描述


#### 定义

`CurlToHTTPRequest(c string) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| c | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### Delete

#### 详细描述


#### 定义

`Delete(urlStr string, opts ...PocConfig) (*lowhttp.LowhttpResponse, *http.Request, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| urlStr | `string` |   |
| opts | `...PocConfig` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*lowhttp.LowhttpResponse` |   |
| r2 | `*http.Request` |   |
| r3 | `error` |   |


### DeleteHTTPPacketCookie

#### 详细描述
DeleteHTTPPacketCookie delete cookie from http packetif packet is request, it will delete from Cookie headerif packet is response, it will delete from Set-Cookie headerpacket = DeleteHTTPPacketCookie(packet, "key")

#### 定义

`DeleteHTTPPacketCookie(packet []byte, key string) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| key | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### DeleteHTTPPacketForm

#### 详细描述


#### 定义

`DeleteHTTPPacketForm(packet []byte, key string) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| key | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### DeleteHTTPPacketHeader

#### 详细描述


#### 定义

`DeleteHTTPPacketHeader(packet []byte, headerKey string) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| headerKey | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### DeleteHTTPPacketPostParam

#### 详细描述


#### 定义

`DeleteHTTPPacketPostParam(packet []byte, key string) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| key | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### DeleteHTTPPacketQueryParam

#### 详细描述


#### 定义

`DeleteHTTPPacketQueryParam(packet []byte, key string) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| key | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### Do

#### 详细描述
poc.Do is something like poc.HTTPEx, but the params is (method string, url string, opt...)use it like `poc.Do("GET", "https://www.example.com", poc.proxy(proxy))`

#### 定义

`Do(method string, urlStr string, opts ...PocConfig) (*lowhttp.LowhttpResponse, *http.Request, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| method | `string` |   |
| urlStr | `string` |   |
| opts | `...PocConfig` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*lowhttp.LowhttpResponse` |   |
| r2 | `*http.Request` |   |
| r3 | `error` |   |


### FixHTTPPacketCRLF

#### 详细描述


#### 定义

`FixHTTPPacketCRLF(raw []byte, noFixLength bool) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` |   |
| noFixLength | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### FixHTTPRequest

#### 详细描述


#### 定义

`FixHTTPRequest(raw []byte) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### FixHTTPResponse

#### 详细描述


#### 定义

`FixHTTPResponse(r []byte) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| r | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### Get

#### 详细描述


#### 定义

`Get(urlStr string, opts ...PocConfig) (*lowhttp.LowhttpResponse, *http.Request, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| urlStr | `string` |   |
| opts | `...PocConfig` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*lowhttp.LowhttpResponse` |   |
| r2 | `*http.Request` |   |
| r3 | `error` |   |


### GetAllHTTPPacketPostParams

#### 详细描述


#### 定义

`GetAllHTTPPacketPostParams(packet []byte) map[string]string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `map[string]string` |   |


### GetAllHTTPPacketQueryParams

#### 详细描述


#### 定义

`GetAllHTTPPacketQueryParams(packet []byte) map[string]string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `map[string]string` |   |


### GetHTTPPacketBody

#### 详细描述


#### 定义

`GetHTTPPacketBody(packet []byte) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### GetHTTPPacketContentType

#### 详细描述


#### 定义

`GetHTTPPacketContentType(packet []byte) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### GetHTTPPacketCookie

#### 详细描述


#### 定义

`GetHTTPPacketCookie(packet []byte, key string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| key | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### GetHTTPPacketCookieFirst

#### 详细描述


#### 定义

`GetHTTPPacketCookieFirst(packet []byte, key string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| key | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### GetHTTPPacketCookieValues

#### 详细描述


#### 定义

`GetHTTPPacketCookieValues(packet []byte, key string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| key | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### GetHTTPPacketCookies

#### 详细描述


#### 定义

`GetHTTPPacketCookies(packet []byte) map[string]string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `map[string]string` |   |


### GetHTTPPacketCookiesFull

#### 详细描述


#### 定义

`GetHTTPPacketCookiesFull(packet []byte) map[string][]string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `map[string][]string` |   |


### GetHTTPPacketFirstLine

#### 详细描述


#### 定义

`GetHTTPPacketFirstLine(packet []byte) (string, string, string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `string` |   |
| r3 | `string` |   |


### GetHTTPPacketHeader

#### 详细描述


#### 定义

`GetHTTPPacketHeader(packet []byte, key string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| key | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### GetHTTPPacketHeaders

#### 详细描述


#### 定义

`GetHTTPPacketHeaders(packet []byte) map[string]string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `map[string]string` |   |


### GetHTTPPacketHeadersFull

#### 详细描述


#### 定义

`GetHTTPPacketHeadersFull(packet []byte) map[string][]string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `map[string][]string` |   |


### GetHTTPPacketPostParam

#### 详细描述


#### 定义

`GetHTTPPacketPostParam(packet []byte, key string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| key | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### GetHTTPPacketQueryParam

#### 详细描述


#### 定义

`GetHTTPPacketQueryParam(packet []byte, key string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| key | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### GetStatusCodeFromResponse

#### 详细描述


#### 定义

`GetStatusCodeFromResponse(packet []byte) int`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` |   |


### HTTP

#### 详细描述
poc.HTTP means send http request and return (response, request, error)it support many option, use it via: `poc.HTTP(packet, poc.https(true), poc.proxy(proxy))`

#### 定义

`HTTP(i any, opts ...PocConfig) ([]byte, []byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |
| opts | `...PocConfig` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `[]byte` |   |
| r3 | `error` |   |


### HTTPEx

#### 详细描述
poc.HTTPEx means send http request and return (*LowhttpResponse, *http.Request, error)it support many option, use it via: `poc.HTTPEx(packet, poc.https(true), poc.proxy(proxy))`.you will handle *lowhttp.LowhttpResponse with your own code. LowhttpResponse include many details.

#### 定义

`HTTPEx(i any, opts ...PocConfig) (*lowhttp.LowhttpResponse, *http.Request, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |
| opts | `...PocConfig` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*lowhttp.LowhttpResponse` |   |
| r2 | `*http.Request` |   |
| r3 | `error` |   |


### HTTPPacketForceChunked

#### 详细描述


#### 定义

`HTTPPacketForceChunked(raw []byte) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### HTTPRequestToCurl

#### 详细描述


#### 定义

`HTTPRequestToCurl(https bool, i any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| https | `bool` |   |
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### Head

#### 详细描述


#### 定义

`Head(urlStr string, opts ...PocConfig) (*lowhttp.LowhttpResponse, *http.Request, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| urlStr | `string` |   |
| opts | `...PocConfig` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*lowhttp.LowhttpResponse` |   |
| r2 | `*http.Request` |   |
| r3 | `error` |   |


### IsResponse

#### 详细描述
IsResp test if bytesstream is http response

#### 定义

`IsResponse(data any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| data | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### Options

#### 详细描述


#### 定义

`Options(urlStr string, opts ...PocConfig) (*lowhttp.LowhttpResponse, *http.Request, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| urlStr | `string` |   |
| opts | `...PocConfig` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*lowhttp.LowhttpResponse` |   |
| r2 | `*http.Request` |   |
| r3 | `error` |   |


### ParseBytesToHTTPRequest

#### 详细描述


#### 定义

`ParseBytesToHTTPRequest(raw []byte) (*http.Request, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*http.Request` |   |
| r2 | `error` |   |


### ParseBytesToHTTPResponse

#### 详细描述


#### 定义

`ParseBytesToHTTPResponse(res []byte) (*http.Response, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| res | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*http.Response` |   |
| r2 | `error` |   |


### ParseUrlToHTTPRequestRaw

#### 详细描述


#### 定义

`ParseUrlToHTTPRequestRaw(method string, i any) (bool, []byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| method | `string` |   |
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |
| r2 | `[]byte` |   |
| r3 | `error` |   |


### Post

#### 详细描述


#### 定义

`Post(urlStr string, opts ...PocConfig) (*lowhttp.LowhttpResponse, *http.Request, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| urlStr | `string` |   |
| opts | `...PocConfig` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*lowhttp.LowhttpResponse` |   |
| r2 | `*http.Request` |   |
| r3 | `error` |   |


### ReplaceAllHTTPPacketPostParams

#### 详细描述


#### 定义

`ReplaceAllHTTPPacketPostParams(packet []byte, values map[string]string) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| values | `map[string]string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### ReplaceAllHTTPPacketQueryParams

#### 详细描述


#### 定义

`ReplaceAllHTTPPacketQueryParams(packet []byte, values map[string]string) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| values | `map[string]string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### ReplaceBody

#### 详细描述


#### 定义

`ReplaceBody(raw []byte, body []byte, chunk bool) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` |   |
| body | `[]byte` |   |
| chunk | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### ReplaceHTTPPacketBasicAuth

#### 详细描述


#### 定义

`ReplaceHTTPPacketBasicAuth(packet []byte, username string, password string) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| username | `string` |   |
| password | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### ReplaceHTTPPacketBody

#### 详细描述


#### 定义

`ReplaceHTTPPacketBody(packet []byte, body []byte) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| body | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### ReplaceHTTPPacketCookie

#### 详细描述


#### 定义

`ReplaceHTTPPacketCookie(packet []byte, key string, value any) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| key | `string` |   |
| value | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### ReplaceHTTPPacketFirstLine

#### 详细描述
ReplaceHTTPPacketFirstLine replace http packet first lineenable for request and response all

#### 定义

`ReplaceHTTPPacketFirstLine(packet []byte, firstLine string) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| firstLine | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### ReplaceHTTPPacketHeader

#### 详细描述


#### 定义

`ReplaceHTTPPacketHeader(packet []byte, headerKey string, headerValue any) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| headerKey | `string` |   |
| headerValue | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### ReplaceHTTPPacketHost

#### 详细描述


#### 定义

`ReplaceHTTPPacketHost(packet []byte, host string) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| host | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### ReplaceHTTPPacketMethod

#### 详细描述


#### 定义

`ReplaceHTTPPacketMethod(packet []byte, newMethod string) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| newMethod | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### ReplaceHTTPPacketPath

#### 详细描述


#### 定义

`ReplaceHTTPPacketPath(packet []byte, p string) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| p | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### ReplaceHTTPPacketPostParam

#### 详细描述


#### 定义

`ReplaceHTTPPacketPostParam(packet []byte, key string, value string) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| key | `string` |   |
| value | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### ReplaceHTTPPacketQueryParam

#### 详细描述


#### 定义

`ReplaceHTTPPacketQueryParam(packet []byte, key string, value string) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| key | `string` |   |
| value | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### Split

#### 详细描述


#### 定义

`Split(raw []byte, hook ...func(line string)) (string, []byte)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` |   |
| hook | `...func(line string)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `[]byte` |   |


### Websocket

#### 详细描述
poc.Websocket is shortcut for `poc.HTTP(..., poc.websocket(true))`

#### 定义

`Websocket(raw any, opts ...PocConfig) ([]byte, []byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `any` |   |
| opts | `...PocConfig` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `[]byte` |   |
| r3 | `error` |   |


### appendCookie

#### 详细描述


#### 定义

`appendCookie(key string, value string) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |
| value | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### appendFormEncoded

#### 详细描述


#### 定义

`appendFormEncoded(key string, value string) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |
| value | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### appendHeader

#### 详细描述


#### 定义

`appendHeader(key string, value string) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |
| value | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### appendPath

#### 详细描述


#### 定义

`appendPath(path string) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### appendPostParam

#### 详细描述


#### 定义

`appendPostParam(key string, value string) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |
| value | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### appendQueryParam

#### 详细描述


#### 定义

`appendQueryParam(key string, value string) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |
| value | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### appendUploadFile

#### 详细描述


#### 定义

`appendUploadFile(fieldName string, fileName string, fileContent any, contentType ...string) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fieldName | `string` |   |
| fileName | `string` |   |
| fileContent | `any` |   |
| contentType | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### deleteCookie

#### 详细描述


#### 定义

`deleteCookie(key string) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### deleteForm

#### 详细描述


#### 定义

`deleteForm(key string) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### deleteHeader

#### 详细描述


#### 定义

`deleteHeader(key string) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### deletePostParam

#### 详细描述


#### 定义

`deletePostParam(key string) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### deleteQueryParam

#### 详细描述


#### 定义

`deleteQueryParam(key string) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### host

#### 详细描述
params: poc packet builder and sender params, use it like: `poc.HTTP(..., poc.host("127.0.0.1"))`

#### 定义

`host(h string) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### http2

#### 详细描述
params: use it `poc.HTTP(packet, poc.http2(true))` control http2 schema

#### 定义

`http2(isHttp2 bool) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| isHttp2 | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### https

#### 详细描述
params: use it `poc.HTTP(packet, poc.https(true))` control tls schema

#### 定义

`https(isHttps bool) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| isHttps | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### jsRedirect

#### 详细描述
params, use it as `poc.HTTP(packet, poc.jsRedirect(true))` to recognize js href(regexp)

#### 定义

`jsRedirect(b bool) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### noFixContentLength

#### 详细描述
params: use it like: `poc.HTTP(..., poc.noFixContentLength(true))` control fix content length.use it in pipeline or smuggle case.

#### 定义

`noFixContentLength(b bool) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### noRedirect

#### 详细描述
params: use it like: `poc.HTTP(..., poc.noRedirect(true))` control redirect.

#### 定义

`noRedirect(b bool) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### params

#### 详细描述


#### 定义

`params(i any) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### port

#### 详细描述
params: poc packet builder and sender params, use it like: `poc.HTTP(..., poc.port(8080))`

#### 定义

`port(port int) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| port | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### proxy

#### 详细描述
params: use it: `poc.HTTP(..., poc.proxy(15))` control proxy.

#### 定义

`proxy(proxies ...string) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| proxies | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### redirectHandler

#### 详细描述


#### 定义

`redirectHandler(i func(isHttps bool, req, rsp []byte) bool) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `func(isHttps bool, req, rsp []byte) bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### redirectTimes

#### 详细描述
params: use it `poc.HTTP(..., poc.redirectTimes(3))` control redirect times.

#### 定义

`redirectTimes(t int) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| t | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### replaceAllPostParams

#### 详细描述


#### 定义

`replaceAllPostParams(values map[string]string) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| values | `map[string]string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### replaceAllQueryParams

#### 详细描述


#### 定义

`replaceAllQueryParams(values map[string]string) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| values | `map[string]string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### replaceBasicAuth

#### 详细描述


#### 定义

`replaceBasicAuth(username string, password string) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| username | `string` |   |
| password | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### replaceBody

#### 详细描述


#### 定义

`replaceBody(body []byte, chunk bool) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| body | `[]byte` |   |
| chunk | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### replaceCookie

#### 详细描述


#### 定义

`replaceCookie(key string, value string) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |
| value | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### replaceFirstLine

#### 详细描述
params, replace request first line, it's hacky!modified request bytes before request sent out

#### 定义

`replaceFirstLine(firstLine string) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| firstLine | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### replaceHeader

#### 详细描述
params, replace request header before sending.

#### 定义

`replaceHeader(key string, value string) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |
| value | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### replaceHost

#### 详细描述


#### 定义

`replaceHost(host string) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| host | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### replaceMethod

#### 详细描述
params, replace request method before sending.

#### 定义

`replaceMethod(method string) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| method | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### replacePath

#### 详细描述


#### 定义

`replacePath(path string) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### replacePostParam

#### 详细描述


#### 定义

`replacePostParam(key string, value string) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |
| value | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### replaceQueryParam

#### 详细描述


#### 定义

`replaceQueryParam(key string, value string) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |
| value | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### retryInStatusCode

#### 详细描述
params: use it like: `poc.HTTP(..., poc.retryInStatusCode(200, 404))` control retry in(matched) status code.

#### 定义

`retryInStatusCode(codes ...int) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| codes | `...int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### retryNotInStatusCode

#### 详细描述
params: use it like: `poc.HTTP(..., poc.retryNotInStatusCode(200, 404))` control retry not in(matched) status code.

#### 定义

`retryNotInStatusCode(codes ...int) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| codes | `...int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### retryTimes

#### 详细描述
params: use it like: `poc.HTTP(..., poc.retryTimes(3))` control retry times.

#### 定义

`retryTimes(t int) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| t | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### retryWaitTime

#### 详细描述
params: use it like: `poc.HTTP(..., poc.retryWaitTime(1))` control retry wait time(seconds).

#### 定义

`retryWaitTime(t int) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| t | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### save

#### 详细描述
params, save the current request and response to databasefind it in `yakit.QueryHTTPFlow`

#### 定义

`save(i bool) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### session

#### 详细描述
params, inherit cookie via the same session key,use it as `poc.HTTP(packet, poc.session("key"))`it's useful for login case

#### 定义

`session(i any) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### source

#### 详细描述
params, set request source field, for saving to database

#### 定义

`source(i string) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### timeout

#### 详细描述
params: use it like: `poc.HTTP(..., poc.timeout(15))` control network timeout

#### 定义

`timeout(f float64) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### websocket

#### 详细描述


#### 定义

`websocket(w bool) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| w | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### websocketFromServer

#### 详细描述


#### 定义

`websocketFromServer(w func(i []byte, cancel func())) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| w | `func(i []byte, cancel func())` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### websocketOnClient

#### 详细描述


#### 定义

`websocketOnClient(w func(c *lowhttp.WebsocketClient)) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| w | `func(c *lowhttp.WebsocketClient)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


