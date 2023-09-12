# poc

|成员函数|函数描述/介绍|
|:------|:--------|
| [poc.AppendHTTPPacketCookie](#AppendHTTPPacketCookie) ||
| [poc.AppendHTTPPacketFormEncoded](#AppendHTTPPacketFormEncoded) ||
| [poc.AppendHTTPPacketHeader](#AppendHTTPPacketHeader) ||
| [poc.AppendHTTPPacketPath](#AppendHTTPPacketPath) ||
| [poc.AppendHTTPPacketPostParam](#AppendHTTPPacketPostParam) ||
| [poc.AppendHTTPPacketQueryParam](#AppendHTTPPacketQueryParam) ||
| [poc.AppendHTTPPacketUploadFile](#AppendHTTPPacketUploadFile) ||
| [poc.BuildRequest](#BuildRequest) ||
| [poc.CurlToHTTPRequest](#CurlToHTTPRequest) ||
| [poc.Delete](#Delete) ||
| [poc.DeleteHTTPPacketCookie](#DeleteHTTPPacketCookie) ||
| [poc.DeleteHTTPPacketForm](#DeleteHTTPPacketForm) ||
| [poc.DeleteHTTPPacketHeader](#DeleteHTTPPacketHeader) ||
| [poc.DeleteHTTPPacketPostParam](#DeleteHTTPPacketPostParam) ||
| [poc.DeleteHTTPPacketQueryParam](#DeleteHTTPPacketQueryParam) ||
| [poc.Do](#Do) ||
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
| [poc.HTTP](#HTTP) ||
| [poc.HTTPEx](#HTTPEx) ||
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
| [poc.ReplaceHTTPPacketFirstLine](#ReplaceHTTPPacketFirstLine) ||
| [poc.ReplaceHTTPPacketHeader](#ReplaceHTTPPacketHeader) ||
| [poc.ReplaceHTTPPacketHost](#ReplaceHTTPPacketHost) ||
| [poc.ReplaceHTTPPacketMethod](#ReplaceHTTPPacketMethod) ||
| [poc.ReplaceHTTPPacketPath](#ReplaceHTTPPacketPath) ||
| [poc.ReplaceHTTPPacketPostParam](#ReplaceHTTPPacketPostParam) ||
| [poc.ReplaceHTTPPacketQueryParam](#ReplaceHTTPPacketQueryParam) ||
| [poc.Split](#Split) ||
| [poc.Websocket](#Websocket) ||
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
| [poc.host](#host) ||
| [poc.http2](#http2) ||
| [poc.https](#https) ||
| [poc.jsRedirect](#jsRedirect) ||
| [poc.noFixContentLength](#noFixContentLength) ||
| [poc.noRedirect](#noRedirect) ||
| [poc.params](#params) ||
| [poc.port](#port) ||
| [poc.proxy](#proxy) ||
| [poc.redirectHandler](#redirectHandler) ||
| [poc.redirectTimes](#redirectTimes) ||
| [poc.replaceAllPostParams](#replaceAllPostParams) ||
| [poc.replaceAllQueryParams](#replaceAllQueryParams) ||
| [poc.replaceBasicAuth](#replaceBasicAuth) ||
| [poc.replaceBody](#replaceBody) ||
| [poc.replaceCookie](#replaceCookie) ||
| [poc.replaceFirstLine](#replaceFirstLine) ||
| [poc.replaceHeader](#replaceHeader) ||
| [poc.replaceHost](#replaceHost) ||
| [poc.replaceMethod](#replaceMethod) ||
| [poc.replacePath](#replacePath) ||
| [poc.replacePostParam](#replacePostParam) ||
| [poc.replaceQueryParam](#replaceQueryParam) ||
| [poc.retryInStatusCode](#retryInStatusCode) ||
| [poc.retryNotInStatusCode](#retryNotInStatusCode) ||
| [poc.retryTimes](#retryTimes) ||
| [poc.save](#save) ||
| [poc.session](#session) ||
| [poc.source](#source) ||
| [poc.timeout](#timeout) ||
| [poc.websocket](#websocket) ||
| [poc.websocketFromServer](#websocketFromServer) ||
| [poc.websocketOnClient](#websocketOnClient) ||


## 函数定义
### poc.AppendHTTPPacketCookie

#### 详细描述


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


### poc.AppendHTTPPacketFormEncoded

#### 详细描述


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


### poc.AppendHTTPPacketHeader

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


### poc.AppendHTTPPacketPath

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


### poc.AppendHTTPPacketPostParam

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


### poc.AppendHTTPPacketQueryParam

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


### poc.AppendHTTPPacketUploadFile

#### 详细描述


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


### poc.BuildRequest

#### 详细描述


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


### poc.CurlToHTTPRequest

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


### poc.Delete

#### 详细描述


#### 定义

`Delete(method string) func(urlStr string, opts ...PocConfig) (*lowhttp.LowhttpResponse, *http.Request, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| method | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `func(urlStr string, opts ...PocConfig) (*lowhttp.LowhttpResponse, *http.Request, error)` |   |


### poc.DeleteHTTPPacketCookie

#### 详细描述


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


### poc.DeleteHTTPPacketForm

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


### poc.DeleteHTTPPacketHeader

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


### poc.DeleteHTTPPacketPostParam

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


### poc.DeleteHTTPPacketQueryParam

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


### poc.Do

#### 详细描述


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


### poc.FixHTTPPacketCRLF

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


### poc.FixHTTPRequest

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


### poc.FixHTTPResponse

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


### poc.Get

#### 详细描述


#### 定义

`Get(method string) func(urlStr string, opts ...PocConfig) (*lowhttp.LowhttpResponse, *http.Request, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| method | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `func(urlStr string, opts ...PocConfig) (*lowhttp.LowhttpResponse, *http.Request, error)` |   |


### poc.GetAllHTTPPacketPostParams

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


### poc.GetAllHTTPPacketQueryParams

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


### poc.GetHTTPPacketBody

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


### poc.GetHTTPPacketContentType

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


### poc.GetHTTPPacketCookie

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


### poc.GetHTTPPacketCookieFirst

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


### poc.GetHTTPPacketCookieValues

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


### poc.GetHTTPPacketCookies

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


### poc.GetHTTPPacketCookiesFull

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


### poc.GetHTTPPacketFirstLine

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


### poc.GetHTTPPacketHeader

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


### poc.GetHTTPPacketHeaders

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


### poc.GetHTTPPacketHeadersFull

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


### poc.GetHTTPPacketPostParam

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


### poc.GetHTTPPacketQueryParam

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


### poc.GetStatusCodeFromResponse

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


### poc.HTTP

#### 详细描述


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


### poc.HTTPEx

#### 详细描述


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


### poc.HTTPPacketForceChunked

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


### poc.HTTPRequestToCurl

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


### poc.Head

#### 详细描述


#### 定义

`Head(method string) func(urlStr string, opts ...PocConfig) (*lowhttp.LowhttpResponse, *http.Request, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| method | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `func(urlStr string, opts ...PocConfig) (*lowhttp.LowhttpResponse, *http.Request, error)` |   |


### poc.IsResponse

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


### poc.Options

#### 详细描述


#### 定义

`Options(method string) func(urlStr string, opts ...PocConfig) (*lowhttp.LowhttpResponse, *http.Request, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| method | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `func(urlStr string, opts ...PocConfig) (*lowhttp.LowhttpResponse, *http.Request, error)` |   |


### poc.ParseBytesToHTTPRequest

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


### poc.ParseBytesToHTTPResponse

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


### poc.ParseUrlToHTTPRequestRaw

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


### poc.Post

#### 详细描述


#### 定义

`Post(method string) func(urlStr string, opts ...PocConfig) (*lowhttp.LowhttpResponse, *http.Request, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| method | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `func(urlStr string, opts ...PocConfig) (*lowhttp.LowhttpResponse, *http.Request, error)` |   |


### poc.ReplaceAllHTTPPacketPostParams

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


### poc.ReplaceAllHTTPPacketQueryParams

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


### poc.ReplaceBody

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


### poc.ReplaceHTTPPacketBasicAuth

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


### poc.ReplaceHTTPPacketBody

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


### poc.ReplaceHTTPPacketCookie

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


### poc.ReplaceHTTPPacketFirstLine

#### 详细描述


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


### poc.ReplaceHTTPPacketHeader

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


### poc.ReplaceHTTPPacketHost

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


### poc.ReplaceHTTPPacketMethod

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


### poc.ReplaceHTTPPacketPath

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


### poc.ReplaceHTTPPacketPostParam

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


### poc.ReplaceHTTPPacketQueryParam

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


### poc.Split

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


### poc.Websocket

#### 详细描述


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


### poc.appendCookie

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


### poc.appendFormEncoded

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


### poc.appendHeader

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


### poc.appendPath

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


### poc.appendPostParam

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


### poc.appendQueryParam

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


### poc.appendUploadFile

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


### poc.deleteCookie

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


### poc.deleteForm

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


### poc.deleteHeader

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


### poc.deletePostParam

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


### poc.deleteQueryParam

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


### poc.host

#### 详细描述


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


### poc.http2

#### 详细描述


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


### poc.https

#### 详细描述


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


### poc.jsRedirect

#### 详细描述


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


### poc.noFixContentLength

#### 详细描述


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


### poc.noRedirect

#### 详细描述


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


### poc.params

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


### poc.port

#### 详细描述


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


### poc.proxy

#### 详细描述


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


### poc.redirectHandler

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


### poc.redirectTimes

#### 详细描述


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


### poc.replaceAllPostParams

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


### poc.replaceAllQueryParams

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


### poc.replaceBasicAuth

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


### poc.replaceBody

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


### poc.replaceCookie

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


### poc.replaceFirstLine

#### 详细描述


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


### poc.replaceHeader

#### 详细描述


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


### poc.replaceHost

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


### poc.replaceMethod

#### 详细描述


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


### poc.replacePath

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


### poc.replacePostParam

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


### poc.replaceQueryParam

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


### poc.retryInStatusCode

#### 详细描述


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


### poc.retryNotInStatusCode

#### 详细描述


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


### poc.retryTimes

#### 详细描述


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


### poc.save

#### 详细描述


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


### poc.session

#### 详细描述


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


### poc.source

#### 详细描述


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


### poc.timeout

#### 详细描述


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


### poc.websocket

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


### poc.websocketFromServer

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


### poc.websocketOnClient

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


