# poc

|成员函数|函数描述/介绍|
|:------|:--------|
| [poc.AppendHTTPPacketCookie](#appendhttppacketcookie) |AppendHTTPPacketCookie append cookie to http packetif packet is request, it will append to Cookie headerif packet is response, it will append to Set-C...|
| [poc.AppendHTTPPacketFormEncoded](#appendhttppacketformencoded) |AppendHTTPPacketFormEncoded replace form data in http packetenable for request, it will replace form data in body	 packet = AppendHTTPPacketFormEncode...|
| [poc.AppendHTTPPacketHeader](#appendhttppacketheader) ||
| [poc.AppendHTTPPacketPath](#appendhttppacketpath) ||
| [poc.AppendHTTPPacketPostParam](#appendhttppacketpostparam) ||
| [poc.AppendHTTPPacketQueryParam](#appendhttppacketqueryparam) ||
| [poc.AppendHTTPPacketUploadFile](#appendhttppacketuploadfile) |AppendHTTPPacketUploadFile replace form file in http packetenable for request, it will replace form file in bodyif fileContent is string, it will be t...|
| [poc.BuildRequest](#buildrequest) |BuildRequest will build a bytes request, you can use it to send request by yourself.|
| [poc.CurlToHTTPRequest](#curltohttprequest) ||
| [poc.Delete](#delete) ||
| [poc.DeleteHTTPPacketCookie](#deletehttppacketcookie) |DeleteHTTPPacketCookie delete cookie from http packetif packet is request, it will delete from Cookie headerif packet is response, it will delete from...|
| [poc.DeleteHTTPPacketForm](#deletehttppacketform) ||
| [poc.DeleteHTTPPacketHeader](#deletehttppacketheader) ||
| [poc.DeleteHTTPPacketPostParam](#deletehttppacketpostparam) ||
| [poc.DeleteHTTPPacketQueryParam](#deletehttppacketqueryparam) ||
| [poc.Do](#do) |poc.Do is something like poc.HTTPEx, but the params is (method string, url string, opt...)use it like `poc.Do("GET", "https://www.example.com", poc.pr...|
| [poc.FixHTTPPacketCRLF](#fixhttppacketcrlf) ||
| [poc.FixHTTPRequest](#fixhttprequest) ||
| [poc.FixHTTPResponse](#fixhttpresponse) ||
| [poc.Get](#get) ||
| [poc.GetAllHTTPPacketPostParams](#getallhttppacketpostparams) ||
| [poc.GetAllHTTPPacketQueryParams](#getallhttppacketqueryparams) ||
| [poc.GetHTTPPacketBody](#gethttppacketbody) ||
| [poc.GetHTTPPacketContentType](#gethttppacketcontenttype) ||
| [poc.GetHTTPPacketCookie](#gethttppacketcookie) ||
| [poc.GetHTTPPacketCookieFirst](#gethttppacketcookiefirst) ||
| [poc.GetHTTPPacketCookieValues](#gethttppacketcookievalues) ||
| [poc.GetHTTPPacketCookies](#gethttppacketcookies) ||
| [poc.GetHTTPPacketCookiesFull](#gethttppacketcookiesfull) ||
| [poc.GetHTTPPacketFirstLine](#gethttppacketfirstline) ||
| [poc.GetHTTPPacketHeader](#gethttppacketheader) ||
| [poc.GetHTTPPacketHeaders](#gethttppacketheaders) ||
| [poc.GetHTTPPacketHeadersFull](#gethttppacketheadersfull) ||
| [poc.GetHTTPPacketPostParam](#gethttppacketpostparam) ||
| [poc.GetHTTPPacketQueryParam](#gethttppacketqueryparam) ||
| [poc.GetStatusCodeFromResponse](#getstatuscodefromresponse) ||
| [poc.HTTP](#http) |poc.HTTP means send http request and return (response, request, error)it support many option, use it via: `poc.HTTP(packet, poc.https(true), poc.proxy...|
| [poc.HTTPEx](#httpex) |poc.HTTPEx means send http request and return (*LowhttpResponse, *http.Request, error)it support many option, use it via: `poc.HTTPEx(packet, poc.http...|
| [poc.HTTPPacketForceChunked](#httppacketforcechunked) ||
| [poc.HTTPRequestToCurl](#httprequesttocurl) ||
| [poc.Head](#head) ||
| [poc.IsResponse](#isresponse) |IsResp test if bytesstream is http response|
| [poc.Options](#options) ||
| [poc.ParseBytesToHTTPRequest](#parsebytestohttprequest) ||
| [poc.ParseBytesToHTTPResponse](#parsebytestohttpresponse) ||
| [poc.ParseUrlToHTTPRequestRaw](#parseurltohttprequestraw) ||
| [poc.Post](#post) ||
| [poc.ReplaceAllHTTPPacketPostParams](#replaceallhttppacketpostparams) ||
| [poc.ReplaceAllHTTPPacketQueryParams](#replaceallhttppacketqueryparams) ||
| [poc.ReplaceBody](#replacebody) ||
| [poc.ReplaceHTTPPacketBasicAuth](#replacehttppacketbasicauth) ||
| [poc.ReplaceHTTPPacketBody](#replacehttppacketbody) ||
| [poc.ReplaceHTTPPacketCookie](#replacehttppacketcookie) ||
| [poc.ReplaceHTTPPacketFirstLine](#replacehttppacketfirstline) |ReplaceHTTPPacketFirstLine replace http packet first lineenable for request and response all|
| [poc.ReplaceHTTPPacketHeader](#replacehttppacketheader) ||
| [poc.ReplaceHTTPPacketHost](#replacehttppackethost) ||
| [poc.ReplaceHTTPPacketMethod](#replacehttppacketmethod) ||
| [poc.ReplaceHTTPPacketPath](#replacehttppacketpath) ||
| [poc.ReplaceHTTPPacketPostParam](#replacehttppacketpostparam) ||
| [poc.ReplaceHTTPPacketQueryParam](#replacehttppacketqueryparam) ||
| [poc.Split](#split) ||
| [poc.Websocket](#websocket) |poc.Websocket is shortcut for `poc.HTTP(..., poc.websocket(true))`|
| [poc.appendCookie](#appendcookie) ||
| [poc.appendFormEncoded](#appendformencoded) ||
| [poc.appendHeader](#appendheader) ||
| [poc.appendPath](#appendpath) ||
| [poc.appendPostParam](#appendpostparam) ||
| [poc.appendQueryParam](#appendqueryparam) ||
| [poc.appendUploadFile](#appenduploadfile) ||
| [poc.deleteCookie](#deletecookie) ||
| [poc.deleteForm](#deleteform) ||
| [poc.deleteHeader](#deleteheader) ||
| [poc.deletePostParam](#deletepostparam) ||
| [poc.deleteQueryParam](#deletequeryparam) ||
| [poc.host](#host) |params: poc packet builder and sender params, use it like: `poc.HTTP(..., poc.host("127.0.0.1"))`|
| [poc.http2](#http2) |params: use it `poc.HTTP(packet, poc.http2(true))` control http2 schema|
| [poc.https](#https) |params: use it `poc.HTTP(packet, poc.https(true))` control tls schema|
| [poc.jsRedirect](#jsredirect) |params, use it as `poc.HTTP(packet, poc.jsRedirect(true))` to recognize js href(regexp)|
| [poc.noFixContentLength](#nofixcontentlength) |params: use it like: `poc.HTTP(..., poc.noFixContentLength(true))` control fix content length.use it in pipeline or smuggle case.|
| [poc.noRedirect](#noredirect) |params: use it like: `poc.HTTP(..., poc.noRedirect(true))` control redirect.|
| [poc.params](#params) ||
| [poc.port](#port) |params: poc packet builder and sender params, use it like: `poc.HTTP(..., poc.port(8080))`|
| [poc.proxy](#proxy) |params: use it: `poc.HTTP(..., poc.proxy(15))` control proxy.|
| [poc.redirectHandler](#redirecthandler) ||
| [poc.redirectTimes](#redirecttimes) |params: use it `poc.HTTP(..., poc.redirectTimes(3))` control redirect times.|
| [poc.replaceAllPostParams](#replaceallpostparams) ||
| [poc.replaceAllQueryParams](#replaceallqueryparams) ||
| [poc.replaceBasicAuth](#replacebasicauth) ||
| [poc.replaceBody](#replacebody) ||
| [poc.replaceCookie](#replacecookie) ||
| [poc.replaceFirstLine](#replacefirstline) |params, replace request first line, it's hacky!modified request bytes before request sent out|
| [poc.replaceHeader](#replaceheader) |params, replace request header before sending.|
| [poc.replaceHost](#replacehost) ||
| [poc.replaceMethod](#replacemethod) |params, replace request method before sending.|
| [poc.replacePath](#replacepath) ||
| [poc.replacePostParam](#replacepostparam) ||
| [poc.replaceQueryParam](#replacequeryparam) ||
| [poc.retryInStatusCode](#retryinstatuscode) |params: use it like: `poc.HTTP(..., poc.retryInStatusCode(200, 404))` control retry in(matched) status code.|
| [poc.retryNotInStatusCode](#retrynotinstatuscode) |params: use it like: `poc.HTTP(..., poc.retryNotInStatusCode(200, 404))` control retry not in(matched) status code.|
| [poc.retryTimes](#retrytimes) |params: use it like: `poc.HTTP(..., poc.retryTimes(3))` control retry times.|
| [poc.retryWaitTime](#retrywaittime) |params: use it like: `poc.HTTP(..., poc.retryWaitTime(1))` control retry wait time(seconds).|
| [poc.save](#save) |params, save the current request and response to databasefind it in `yakit.QueryHTTPFlow`|
| [poc.session](#session) |params, inherit cookie via the same session key,use it as `poc.HTTP(packet, poc.session("key"))`it's useful for login case|
| [poc.source](#source) |params, set request source field, for saving to database|
| [poc.timeout](#timeout) |params: use it like: `poc.HTTP(..., poc.timeout(15))` control network timeout|
| [poc.websocket](#websocket) ||
| [poc.websocketFromServer](#websocketfromserver) ||
| [poc.websocketOnClient](#websocketonclient) ||


## 函数定义
### appendhttppacketcookie

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


### appendhttppacketformencoded

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


### appendhttppacketheader

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


### appendhttppacketpath

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


### appendhttppacketpostparam

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


### appendhttppacketqueryparam

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


### appendhttppacketuploadfile

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


### buildrequest

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


### curltohttprequest

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


### delete

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


### deletehttppacketcookie

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


### deletehttppacketform

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


### deletehttppacketheader

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


### deletehttppacketpostparam

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


### deletehttppacketqueryparam

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


### do

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


### fixhttppacketcrlf

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


### fixhttprequest

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


### fixhttpresponse

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


### get

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


### getallhttppacketpostparams

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


### getallhttppacketqueryparams

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


### gethttppacketbody

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


### gethttppacketcontenttype

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


### gethttppacketcookie

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


### gethttppacketcookiefirst

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


### gethttppacketcookievalues

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


### gethttppacketcookies

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


### gethttppacketcookiesfull

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


### gethttppacketfirstline

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


### gethttppacketheader

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


### gethttppacketheaders

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


### gethttppacketheadersfull

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


### gethttppacketpostparam

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


### gethttppacketqueryparam

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


### getstatuscodefromresponse

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


### http

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


### httpex

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


### httppacketforcechunked

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


### httprequesttocurl

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


### head

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


### isresponse

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


### options

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


### parsebytestohttprequest

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


### parsebytestohttpresponse

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


### parseurltohttprequestraw

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


### post

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


### replaceallhttppacketpostparams

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


### replaceallhttppacketqueryparams

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


### replacebody

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


### replacehttppacketbasicauth

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


### replacehttppacketbody

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


### replacehttppacketcookie

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


### replacehttppacketfirstline

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


### replacehttppacketheader

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


### replacehttppackethost

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


### replacehttppacketmethod

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


### replacehttppacketpath

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


### replacehttppacketpostparam

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


### replacehttppacketqueryparam

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


### split

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


### websocket

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


### appendcookie

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


### appendformencoded

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


### appendheader

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


### appendpath

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


### appendpostparam

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


### appendqueryparam

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


### appenduploadfile

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


### deletecookie

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


### deleteform

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


### deleteheader

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


### deletepostparam

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


### deletequeryparam

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


### jsredirect

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


### nofixcontentlength

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


### noredirect

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


### redirecthandler

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


### redirecttimes

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


### replaceallpostparams

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


### replaceallqueryparams

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


### replacebasicauth

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


### replacebody

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


### replacecookie

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


### replacefirstline

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


### replaceheader

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


### replacehost

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


### replacemethod

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


### replacepath

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


### replacepostparam

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


### replacequeryparam

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


### retryinstatuscode

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


### retrynotinstatuscode

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


### retrytimes

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


### retrywaittime

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


### websocketfromserver

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


### websocketonclient

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


