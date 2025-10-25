# poc

|函数名|函数描述/介绍|
|:------|:--------|
| [.](#) ||
| [.](#) ||
| [poc.AppendHTTPPacketCookie](#appendhttppacketcookie) |AppendHTTPPacketCookie 是一个辅助函数，用于改变请求报文，添加Cookie请求头中的值  |
| [poc.AppendHTTPPacketFormEncoded](#appendhttppacketformencoded) |AppendHTTPPacketFormEncoded 是一个辅助函数，用于改变请求报文，添加请求体中的表单  |
| [poc.AppendHTTPPacketHeader](#appendhttppacketheader) |AppendHTTPPacketHeader 是一个辅助函数，用于改变请求报文，添加请求头  |
| [poc.AppendHTTPPacketPath](#appendhttppacketpath) |AppendHTTPPacketPath 是一个辅助函数，用于改变请求报文，在现有请求路径后添加请求路径  |
| [poc.AppendHTTPPacketPostParam](#appendhttppacketpostparam) |AppendHTTPPacketPostParam 是一个辅助函数，用于改变请求报文，添加POST请求参数  |
| [poc.AppendHTTPPacketQueryParam](#appendhttppacketqueryparam) |AppendHTTPPacketQueryParam 是一个辅助函数，用于改变请求报文，添加GET请求参数  |
| [poc.AppendHTTPPacketUploadFile](#appendhttppacketuploadfile) |AppendHTTPPacketUploadFile 是一个辅助函数，用于改变请求报文，添加请求体中的上传的文件，其中第一个参数为原始请求报文，第二个参数为表单名，第三个参数为文件名，第四个参数为文件内容，第五个参数是可选参数，为文件类型(Content-Type)  |
| [poc.BuildRequest](#buildrequest) |BuildRequest 是一个用于辅助构建请求报文的工具函数，它第一个参数可以接收 []byte, string, http.Request 结构体，接下来可以接收零个到多个请求选项，修改请求报文的选项将被作用，最后返回构建好的请求报文  |
| [poc.CurlToHTTPRequest](#curltohttprequest) |CurlToHTTPRequest 尝试将curl命令转换为HTTP请求报文，其返回值为bytes，即转换后的HTTP请求报文  |
| [poc.Delete](#delete) |Delete 向指定 URL 发送 DELETE 请求并且返回响应结构体，请求结构体以及错误，它的第一个参数是 URL 字符串，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如对设置超时时间，或者修改请求报文等  关于结构体中的可用字段和方法可以使用 desc 函数进行查看  |
| [poc.DeleteHTTPPacketCookie](#deletehttppacketcookie) |DeleteHTTPPacketCookie 是一个辅助函数，用于改变请求报文，删除Cookie中的值  |
| [poc.DeleteHTTPPacketForm](#deletehttppacketform) |DeleteHTTPPacketForm 是一个辅助函数，用于改变请求报文，删除POST请求表单  |
| [poc.DeleteHTTPPacketHeader](#deletehttppacketheader) |DeleteHTTPPacketHeader 是一个辅助函数，用于改变请求报文，删除请求头  |
| [poc.DeleteHTTPPacketPostParam](#deletehttppacketpostparam) |DeleteHTTPPacketPostParam 是一个辅助函数，用于改变请求报文，删除POST请求参数  |
| [poc.DeleteHTTPPacketQueryParam](#deletehttppacketqueryparam) |DeleteHTTPPacketQueryParam 是一个辅助函数，用于改变请求报文，删除GET请求参数  |
| [poc.Do](#do) |Do 向指定 URL 发送指定请求方法的请求并且返回响应结构体，请求结构体以及错误，它的是第一个参数是请求方法，第二个参数 URL 字符串，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如设置超时时间，或者修改请求报文等  关于结构体中的可用字段和方法可以使用 desc 函数进行查看 ...|
| [poc.ExtractPostParams](#extractpostparams) |ExtractPostParams 尝试将 HTTP 请求报文中的各种 POST 参数(普通格式，表单格式，JSON格式，XML格式)提取出来，返回提取出来的 POST 参数与错误  |
| [poc.FixHTTPPacketCRLF](#fixhttppacketcrlf) |FixHTTPPacketCRLF 修复一个HTTP报文的CRLF问题（正常的报文每行末尾为\r\n，但是某些报文可能是有\n），如果noFixLength为true，则不会修复Content-Length，否则会尝试修复Content-Length  |
| [poc.FixHTTPRequest](#fixhttprequest) |FixHTTPRequest 尝试对传入的HTTP请求报文进行修复，并返回修复后的请求  |
| [poc.FixHTTPResponse](#fixhttpresponse) |FixHTTPResponse 尝试对传入的 HTTP 响应报文进行修复，并返回修复后的响应  |
| [poc.Get](#get) |Get 向指定 URL 发送 GET 请求并且返回响应结构体，请求结构体以及错误，它的第一个参数是 URL 字符串，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如对设置超时时间，或者修改请求报文等  关于结构体中的可用字段和方法可以使用 desc 函数进行查看  |
| [poc.GetAllHTTPPacketPostParams](#getallhttppacketpostparams) |GetAllHTTPPacketPostParams 是一个辅助函数，用于获取请求报文中的所有POST请求参数，其返回值为map[string]string，其中键为参数名，值为参数值  |
| [poc.GetAllHTTPPacketPostParamsFull](#getallhttppacketpostparamsfull) |GetAllHTTPPacketPostParamsFull 是一个辅助函数，用于获取请求报文中的所有POST请求参数，其返回值为map[string][]string，其中键为参数名，值为参数值切片  |
| [poc.GetAllHTTPPacketQueryParams](#getallhttppacketqueryparams) |GetAllHTTPPacketQueryParams 是一个辅助函数，用于获取请求报文中的所有GET请求参数，其返回值为map[string]string，其中键为参数名，值为参数值  |
| [poc.GetAllHTTPPacketQueryParamsFull](#getallhttppacketqueryparamsfull) |GetAllHTTPPacketQueryParamsFull 是一个辅助函数，用于获取请求报文中的所有GET请求参数，其返回值为map[string][]string，其中键为参数名，值为参数值切片  |
| [poc.GetHTTPPacketBody](#gethttppacketbody) |GetHTTPPacketBody 是一个辅助函数，用于获取请求报文中的请求体，其返回值为bytes  |
| [poc.GetHTTPPacketContentType](#gethttppacketcontenttype) |GetHTTPPacketContentType 是一个辅助函数，用于获取请求报文中的Content-Type请求头，其返回值为string  |
| [poc.GetHTTPPacketCookie](#gethttppacketcookie) |GetHTTPPacketCookie 是一个辅助函数，用于获取请求报文中Cookie值，其返回值为string  |
| [poc.GetHTTPPacketCookieFirst](#gethttppacketcookiefirst) |GetHTTPPacketCookieFirst 是一个辅助函数，用于获取请求报文中Cookie值，其返回值为string  |
| [poc.GetHTTPPacketCookieValues](#gethttppacketcookievalues) |GetHTTPPacketCookieValues 是一个辅助函数，用于获取请求报文中Cookie值，其返回值为[]string，这是因为Cookie可能存在多个相同键名的值  |
| [poc.GetHTTPPacketCookies](#gethttppacketcookies) |GetHTTPPacketCookies 是一个辅助函数，用于获取请求报文中所有Cookie值，其返回值为map[string]string  |
| [poc.GetHTTPPacketCookiesFull](#gethttppacketcookiesfull) |GetHTTPPacketCookiesFull 是一个辅助函数，用于获取请求报文中所有Cookie值，其返回值为map[string][]string，这是因为Cookie可能存在多个相同键名的值  |
| [poc.GetHTTPPacketFirstLine](#gethttppacketfirstline) |GetHTTPPacketFirstLine 是一个辅助函数，用于获取 HTTP 报文中第一行的值，其返回值为string，string，string  在请求报文中，其三个返回值分别为：请求方法，请求URI，协议版本  在响应报文中，其三个返回值分别为：协议版本，状态码，状态码描述  |
| [poc.GetHTTPPacketHeader](#gethttppacketheader) |GetHTTPPacketHeader 是一个辅助函数，用于获取请求报文中指定的请求头，其返回值为string  |
| [poc.GetHTTPPacketHeaders](#gethttppacketheaders) |GetHTTPPacketHeaders 是一个辅助函数，用于获取请求报文中所有请求头，其返回值为map[string]string  |
| [poc.GetHTTPPacketHeadersFull](#gethttppacketheadersfull) |GetHTTPPacketHeadersFull 是一个辅助函数，用于获取请求报文中所有请求头，其返回值为map[string][]string，这是因为请求头可能存在多个相同键名的值  |
| [poc.GetHTTPPacketPostParam](#gethttppacketpostparam) |GetHTTPPacketPostParam 是一个辅助函数，用于获取请求报文中指定的POST请求参数，其返回值为string  |
| [poc.GetHTTPPacketQueryParam](#gethttppacketqueryparam) |GetHTTPPacketQueryParam 是一个辅助函数，用于获取请求报文中指定的GET请求参数，其返回值为string  |
| [poc.GetHTTPRequestMethod](#gethttprequestmethod) |GetHTTPRequestMethod 是一个辅助函数，用于获取请求报文中的请求方法，其返回值为string  |
| [poc.GetHTTPRequestPath](#gethttprequestpath) |GetHTTPRequestPath 是一个辅助函数，用于获取响应报文中的路径，返回值是 string，包含 query  |
| [poc.GetHTTPRequestPathWithoutQuery](#gethttprequestpathwithoutquery) |GetHTTPRequestPathWithoutQuery 是一个辅助函数，用于获取响应报文中的路径，返回值是 string，不包含 query  |
| [poc.GetStatusCodeFromResponse](#getstatuscodefromresponse) |GetStatusCodeFromResponse 是一个辅助函数，用于获取响应报文中的状态码，其返回值为int  |
| [poc.GetUrlFromHTTPRequest](#geturlfromhttprequest) |GetUrlFromHTTPRequest 是一个辅助函数，用于获取请求报文中的URL，其返回值为string  |
| [poc.HTTP](#http) |HTTP 发送请求并且返回原始响应报文，原始请求报文以及错误，它的第一个参数可以接收 []byte, string, http.Request 结构体，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如设置超时时间，或者修改请求报文等  |
| [poc.HTTPEx](#httpex) |HTTPEx 与 HTTP 类似，它发送请求并且返回响应结构体，请求结构体以及错误，它的第一个参数可以接收 []byte, string, http.Request 结构体，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如设置超时时间，或者修改请求报文等  关于结构体中的可用字段和方法...|
| [poc.HTTPPacketForceChunked](#httppacketforcechunked) |HTTPPacketForceChunked 将一个HTTP报文的body强制转换为chunked编码  |
| [poc.HTTPRequestToCurl](#httprequesttocurl) |HTTPRequestToCurl 尝试将 HTTP 请求报文转换为curl命令。第一个参数为是否使用HTTPS，第二个参数为HTTP请求报文，其返回值为string，即转换后的curl命令  |
| [poc.Head](#head) |Head 向指定 URL 发送 HEAD 请求并且返回响应结构体，请求结构体以及错误，它的第一个参数是 URL 字符串，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如对设置超时时间，或者修改请求报文等  关于结构体中的可用字段和方法可以使用 desc 函数进行查看  |
| [poc.IsResponse](#isresponse) |IsResp 判断传入的数据是否为 HTTP 响应报文  |
| [poc.Options](#options) |Options 向指定 URL 发送 OPTIONS 请求并且返回响应结构体，请求结构体以及错误，它的第一个参数是 URL 字符串，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如对设置超时时间，或者修改请求报文等  关于结构体中的可用字段和方法可以使用 desc 函数进行查看  |
| [poc.ParseBytesToHTTPRequest](#parsebytestohttprequest) |ParseBytesToHTTPRequest 将字节数组解析为 HTTP 请求  |
| [poc.ParseBytesToHTTPResponse](#parsebytestohttpresponse) |ParseBytesToHTTPResponse 将字节数组解析为 HTTP 响应  |
| [poc.ParseMultiPartFormWithCallback](#parsemultipartformwithcallback) |ParseMultiPartFormWithCallback 是一个辅助函数，用于尝试解析请求报文体中的表单并进行回调  |
| [poc.ParseUrlToHTTPRequestRaw](#parseurltohttprequestraw) |ParseUrlToHTTPRequestRaw 将URL解析为原始 HTTP 请求报文，返回是否为 HTTPS，原始请求报文与错误  |
| [poc.Post](#post) |Post 向指定 URL 发送 POST 请求并且返回响应结构体，请求结构体以及错误，它的第一个参数是 URL 字符串，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如对设置超时时间，或者修改请求报文等  关于结构体中的可用字段和方法可以使用 desc 函数进行查看  |
| [poc.ReplaceAllHTTPPacketPostParams](#replaceallhttppacketpostparams) |ReplaceAllHTTPPacketPostParams 是一个辅助函数，用于改变请求报文，修改所有 POST 请求参数，如果不存在则会增加，其接收一个 map[string]string 类型的参数，其中 key 为 POST 请求参数名，value 为 POST 请求参数值  |
| [poc.ReplaceAllHTTPPacketPostParamsWithoutEscape](#replaceallhttppacketpostparamswithoutescape) |ReplaceAllHTTPPacketPostParamsWithoutEscape 是一个辅助函数，用于改变请求报文，修改所有 POST 请求参数，如果不存在则会增加，其接收一个 map[string]string 类型的参数，其中 key 为 POST 请求参数名，value 为 POST 请...|
| [poc.ReplaceAllHTTPPacketQueryParams](#replaceallhttppacketqueryparams) |ReplaceAllHTTPPacketQueryParams 是一个辅助函数，用于改变请求报文，修改所有 GET 请求参数，如果不存在则会增加，其接收一个 map[string]string 类型的参数，其中 key 为请求参数名，value 为请求参数值  |
| [poc.ReplaceAllHTTPPacketQueryParamsWithoutEscape](#replaceallhttppacketqueryparamswithoutescape) |ReplaceAllHTTPPacketQueryParamsWithoutEscape 是一个辅助函数，用于改变请求报文，修改所有 GET 请求参数，如果不存在则会增加，其接收一个 map[string]string 类型的参数，其中 key 为请求参数名，value 为请求参数值  与 poc....|
| [poc.ReplaceBody](#replacebody) |ReplaceBody 将原始 HTTP 请求报文中的 body 替换为指定的 body，并指定是否为 chunked，返回新的 HTTP 请求报文  |
| [poc.ReplaceHTTPPacketBasicAuth](#replacehttppacketbasicauth) |ReplaceHTTPPacketBasicAuth 是一个辅助函数，用于改变请求报文，修改Authorization请求头为基础认证的密文，如果不存在则会增加，实际上是ReplaceHTTPPacketHeader(&amp;#34;Authorization&amp;#34;, codec.EncodeBase...|
| [poc.ReplaceHTTPPacketBody](#replacehttppacketbody) |ReplaceHTTPPacketBody 是一个辅助函数，用于改变 HTTP 报文，修改 HTTP 报文主体内容，第一个参数为原始 HTTP 报文，第二个参数为修改的报文主体内容  |
| [poc.ReplaceHTTPPacketCookie](#replacehttppacketcookie) |ReplaceHTTPPacketCookie 是一个辅助函数，用于改变请求报文，修改Cookie请求头中的值，如果不存在则会增加  |
| [poc.ReplaceHTTPPacketCookies](#replacehttppacketcookies) |ReplaceHTTPPacketCookies 是一个辅助函数，用于改变请求报文，修改Cookie请求头  |
| [poc.ReplaceHTTPPacketFirstLine](#replacehttppacketfirstline) |ReplaceHTTPPacketFirstLine 是一个辅助，用于改变请求报文，修改第一行（即请求方法，请求路径，协议版本）  |
| [poc.ReplaceHTTPPacketFormEncoded](#replacehttppacketformencoded) |ReplaceHTTPPacketFormEncoded 是一个辅助函数，用于改变请求报文，替换请求体中的表单，如果不存在则会增加  |
| [poc.ReplaceHTTPPacketHeader](#replacehttppacketheader) |ReplaceHTTPPacketHeader 是一个辅助函数，用于改变请求报文，修改请求头，如果不存在则会增加  |
| [poc.ReplaceHTTPPacketHost](#replacehttppackethost) |ReplaceHTTPPacketHost 是一个辅助函数，用于改变请求报文，修改Host请求头，如果不存在则会增加，实际上是ReplaceHTTPPacketHeader(&amp;#34;Host&amp;#34;, host)的简写  |
| [poc.ReplaceHTTPPacketJsonBody](#replacehttppacketjsonbody) |ReplaceHTTPPacketJsonBody 是一个辅助函数，用于改变 HTTP 报文，修改 HTTP 报文主体内容（ json 格式），第一个参数为原始 HTTP 报文，第二个参数为修改的报文主体内容（ map 对象）  |
| [poc.ReplaceHTTPPacketMethod](#replacehttppacketmethod) |ReplaceHTTPPacketMethod 是一个辅助函数，用于改变请求报文，修改请求方法  |
| [poc.ReplaceHTTPPacketPath](#replacehttppacketpath) |ReplaceHTTPPacketPath 是一个辅助函数，用于改变请求报文，修改请求路径  |
| [poc.ReplaceHTTPPacketPostParam](#replacehttppacketpostparam) |ReplaceHTTPPacketPostParam 是一个辅助函数，用于改变请求报文，修改POST请求参数，如果不存在则会增加  |
| [poc.ReplaceHTTPPacketQueryParam](#replacehttppacketqueryparam) |ReplaceHTTPPacketQueryParam 是一个辅助函数，用于改变请求报文，修改GET请求参数，如果不存在则会增加  |
| [poc.ReplaceHTTPPacketUploadFile](#replacehttppacketuploadfile) |ReplaceHTTPPacketUploadFile 是一个辅助函数，用于改变请求报文，替换请求体中的上传的文件，其中第一个参数为原始请求报文，第二个参数为表单名，第三个参数为文件名，第四个参数为文件内容，第五个参数是可选参数，为文件类型(Content-Type)，如果表单名不存在则会增加  |
| [poc.Split](#split) |Split 切割 HTTP 报文，返回响应头和响应体，其第一个参数是原始HTTP报文，接下来可以接收零个到多个回调函数，其在每次解析到请求头时回调  |
| [poc.Websocket](#websocket) |Websocket 实际上等价于`poc.HTTP(..., poc.websocket(true))`，用于快速发送请求并建立websocket连接并且返回原始响应报文，原始请求报文以及错误  |
| [poc.appendCookie](#appendcookie) |appendCookie 是一个请求选项参数，用于改变请求报文，添加 Cookie 请求头中的值  |
| [poc.appendFormEncoded](#appendformencoded) |appendFormEncoded 是一个请求选项参数，用于改变请求报文，添加请求体中的表单  |
| [poc.appendHeader](#appendheader) |appendHeader 是一个请求选项参数，用于改变请求报文，添加请求头  |
| [poc.appendHeaders](#appendheaders) |appendHeaders 是一个请求选项参数，用于改变请求报文，添加请求头  |
| [poc.appendPath](#appendpath) |appendPath 是一个请求选项参数，用于改变请求报文，在现有请求路径后添加请求路径  |
| [poc.appendPostParam](#appendpostparam) |appendPostParam 是一个请求选项参数，用于改变请求报文，添加 POST 请求参数  |
| [poc.appendQueryParam](#appendqueryparam) |appendQueryParam 是一个请求选项参数，用于改变请求报文，添加 GET 请求参数  |
| [poc.appendUploadFile](#appenduploadfile) |appendUploadFile 是一个请求选项参数，用于改变请求报文，添加请求体中的上传的文件，其中第一个参数为表单名，第二个参数为文件名，第三个参数为文件内容，第四个参数是可选参数，为文件类型(Content-Type)  |
| [poc.body](#body) |body 是一个请求选项参数，用于指定请求的 body，需要传入一个任意类型的参数，如果不是 string 或者 bytes 会抛出日志并忽略。  |
| [poc.bodyStreamHandler](#bodystreamhandler) |stream 是一个请求选项参数，可以设置一个回调函数，如果 body 读取了，将会复制一份给这个流，在这个流中处理 body 是不会影响最终结果的，一般用于处理较长的 chunk 数据 |
| [poc.connPool](#connpool) |connPool 是一个请求选项参数，用于指定是否使用连接池，默认不使用连接池  |
| [poc.connectTimeout](#connecttimeout) |connectTimeout 是一个请求选项参数，用于指定连接超时时间，默认为15秒  |
| [poc.context](#context) |context 是一个请求选项参数，用于指定请求的上下文  |
| [poc.cookie](#cookie) |cookie 是一个请求选项参数，用于改变请求报文，添加 Cookie 请求头中的值  |
| [poc.deleteCookie](#deletecookie) |deleteCookie 是一个请求选项参数，用于改变请求报文，删除 Cookie 中的值  |
| [poc.deleteForm](#deleteform) |deleteForm 是一个请求选项参数，用于改变请求报文，删除 POST 请求表单  |
| [poc.deleteHeader](#deleteheader) |deleteHeader 是一个请求选项参数，用于改变请求报文，删除请求头  |
| [poc.deletePostParam](#deletepostparam) |deletePostParam 是一个请求选项参数，用于改变请求报文，删除 POST 请求参数  |
| [poc.deleteQueryParam](#deletequeryparam) |deleteQueryParam 是一个请求选项参数，用于改变请求报文，删除 GET 请求参数  |
| [poc.dnsNoCache](#dnsnocache) |dnsNoCache 是一个请求选项参数，用于指定请求时不使用DNS缓存，默认使用DNS缓存  |
| [poc.dnsServer](#dnsserver) |dnsServer 是一个请求选项参数，用于指定请求所使用的DNS服务器，默认使用系统自带的DNS服务器  |
| [poc.fakeua](#fakeua) |replaceRandomUserAgent 是一个请求选项参数，用于改变请求报文，修改 User-Agent 请求头为随机的常见请求头  |
| [poc.fromPlugin](#fromplugin) ||
| [poc.gmTLSPrefer](#gmtlsprefer) ||
| [poc.gmTls](#gmtls) ||
| [poc.gmTlsOnly](#gmtlsonly) ||
| [poc.header](#header) |appendHeader 是一个请求选项参数，用于改变请求报文，添加请求头  |
| [poc.host](#host) |host 是一个请求选项参数，用于指定实际请求的 host，如果没有设置该请求选项，则会依据原始请求报文中的Host字段来确定实际请求的host  |
| [poc.http2](#http2) |http2 是一个请求选项参数，用于指定是否使用 http2 协议，默认为 false 即使用http1协议  |
| [poc.https](#https) |https 是一个请求选项参数，用于指定是否使用 https 协议，默认为 false 即使用 http 协议  |
| [poc.jsRedirect](#jsredirect) |jsRedirect 是一个请求选项参数，用于指定是否跟踪JS重定向，默认为false即不会自动跟踪JS重定向  |
| [poc.json](#json) |json 是一个请求选项参数，用于指定请求的 body 为 json 格式，需要传入一个任意类型的参数，会自动转换为 json 格式  |
| [poc.noBodyBuffer](#nobodybuffer) |noBodyBuffer 是一个请求选项参数，用于指定是否禁用响应体缓冲，设置为 true 时可以避免大文件下载时的内存占用  通常与 WithBodyStreamReaderHandler 配合使用，用于流式处理大文件  |
| [poc.noFixContentLength](#nofixcontentlength) |noFixContentLength 是一个请求选项参数，用于指定是否修复响应报文中的 Content-Length 字段，默认为 false 即会自动修复Content-Length字段  |
| [poc.noRedirect](#noredirect) |noRedirect 是一个请求选项参数，用于指定是否跟踪重定向，默认为 false 即会自动跟踪重定向  |
| [poc.noredirect](#noredirect) |noRedirect 是一个请求选项参数，用于指定是否跟踪重定向，默认为 false 即会自动跟踪重定向  |
| [poc.params](#params) |params 是一个请求选项参数，用于在请求时使用传入的值，需要注意的是，它可以很方便地使用 `str.f()`或 f-string 代替  |
| [poc.password](#password) |password 是一个请求选项参数，用于指定认证时的密码  |
| [poc.port](#port) |port 是一个请求选项参数，用于指定实际请求的端口，如果没有设置该请求选项，则会依据原始请求报文中的Host字段来确定实际请求的端口  |
| [poc.postData](#postdata) |postData 是一个请求选项参数，用于指定请求的 body 为 post 数据，需要传入一个任意类型的参数，会自动转换为 post 数据  输入是原始字符串，不会修改 Content-Type  |
| [poc.postParams](#postparams) |postParams 是一个请求选项参数，用于指定请求的 body 为 post 数据，需要传入一个任意类型的参数，会自动转换为 post 数据  输入是 map 类型，会自动转换为 post 数据，同时会自动设置 Content-Type 为 application/x-www-form-urle...|
| [poc.postparams](#postparams) |postParams 是一个请求选项参数，用于指定请求的 body 为 post 数据，需要传入一个任意类型的参数，会自动转换为 post 数据  输入是 map 类型，会自动转换为 post 数据，同时会自动设置 Content-Type 为 application/x-www-form-urle...|
| [poc.proxy](#proxy) |proxy 是一个请求选项参数，用于指定请求使用的代理，可以指定多个代理，默认会使用系统代理  |
| [poc.query](#query) |query 是一个请求选项参数，用于指定请求的 query 参数，需要传入一个任意类型的参数，会自动转换为 query 参数  如果输入的是 map 类型，则会自动转换为 query 参数，例如：{&amp;#34;a&amp;#34;: &amp;#34;b&amp;#34;} 转换为 a=b  如果输入的是其他，会把字符串结果...|
| [poc.randomChunked](#randomchunked) |randomChunked 是一个请求选项参数，用于启用随机分块传输，默认不启用  |
| [poc.randomChunkedDelay](#randomchunkeddelay) |randomChunkedDelay是一个请求选项参数，用于设置随机分块传输的分块延迟范围，默认最小延迟为50毫秒，最大延迟为100毫秒  |
| [poc.randomChunkedLength](#randomchunkedlength) |randomChunkedLength 是一个请求选项参数，用于设置随机分块传输的分块长度范围，默认最小长度为10，最大长度为25  |
| [poc.randomChunkedResultHandler](#randomchunkedresulthandler) |randomChunkedResultHandler 是一个请求选项参数，用于设置随机分块传输的结果处理函数  处理函数接受四个参数，id为分块的ID，chunkRaw为分块的原始数据，totalTime为总耗时，chunkSendTime为分块发送的耗时  |
| [poc.randomJA3](#randomja3) ||
| [poc.redirect](#redirect) |redirect 是一个请求选项参数，用于设置旧风格的 redirectHandler 函数，如果设置了该选项，则会在重定向时调用该函数，如果该函数返回 true，则会继续重定向，否则不会重定向。其第一个参数为当前的请求，第二个参数为既往的多个请求  |
| [poc.redirectHandler](#redirecthandler) |redirectHandler 是一个请求选项参数，用于作为重定向处理函数，如果设置了该选项，则会在重定向时调用该函数，如果该函数返回 true，则会继续重定向，否则不会重定向。其第一个参数为是否使用 https 协议，第二个参数为原始请求报文，第三个参数为原始响应报文  |
| [poc.redirectTimes](#redirecttimes) |redirectTimes 是一个请求选项参数，用于指定最大重定向次数，默认为5次  |
| [poc.replaceAllPostParams](#replaceallpostparams) |replaceAllPostParams 是一个请求选项参数，用于改变请求报文，修改所有POST请求参数，如果不存在则会增加，其接收一个map[string]string类型的参数，其中key为POST请求参数名，value为POST请求参数值  |
| [poc.replaceAllPostParamsWithoutEscape](#replaceallpostparamswithoutescape) |replaceAllPostParamsWithoutEscape 是一个请求选项参数，用于改变请求报文，修改所有POST请求参数，如果不存在则会增加，其接收一个map[string]string类型的参数，其中key为POST请求参数名，value为POST请求参数值  与 poc.replace...|
| [poc.replaceAllQueryParams](#replaceallqueryparams) |replaceAllQueryParams 是一个请求选项参数，用于改变请求报文，修改所有 GET 请求参数，如果不存在则会增加，其接收一个map[string]string 类型的参数，其中 key 为请求参数名，value 为请求参数值  |
| [poc.replaceAllQueryParamsWithoutEscape](#replaceallqueryparamswithoutescape) |replaceAllQueryParamsWithoutEscape 是一个请求选项参数，用于改变请求报文，修改所有 GET 请求参数，如果不存在则会增加，其接收一个map[string]string 类型的参数，其中 key 为请求参数名，value 为请求参数值  与 poc.replaceAl...|
| [poc.replaceBasicAuth](#replacebasicauth) |replaceBasicAuth 是一个请求选项参数，用于改变请求报文，修改 Authorization 请求头为基础认证的密文，如果不存在则会增加，实际上是replaceHeader(&amp;#34;Authorization&amp;#34;, codec.EncodeBase64(username + &amp;#...|
| [poc.replaceBody](#replacebody) |replaceBody 是一个请求选项参数，用于改变请求报文，修改请求体内容，第一个参数为修改后的请求体内容，第二个参数为是否分块传输  |
| [poc.replaceCookie](#replacecookie) |replaceCookie 是一个请求选项参数，用于改变请求报文，修改Cookie请求头中的值，如果不存在则会增加  |
| [poc.replaceCookies](#replacecookies) |replaceAllCookies 是一个请求选项参数，用于改变请求报文，修改所有Cookie请求头中的值  |
| [poc.replaceFirstLine](#replacefirstline) |replaceFirstLine 是一个请求选项参数，用于改变请求报文，修改第一行（即请求方法，请求路径，协议版本）  |
| [poc.replaceFormEncoded](#replaceformencoded) |replaceFormEncoded 是一个请求选项参数，用于改变请求报文，修改请求体中的表单，如果不存在则会增加  |
| [poc.replaceHeader](#replaceheader) |replaceHeader 是一个请求选项参数，用于改变请求报文，修改修改请求头，如果不存在则会增加  |
| [poc.replaceHost](#replacehost) |replaceHost 是一个请求选项参数，用于改变请求报文，修改Host请求头，如果不存在则会增加，实际上是replaceHeader(&amp;#34;Host&amp;#34;, host)的简写  |
| [poc.replaceMethod](#replacemethod) |replaceMethod 是一个请求选项参数，用于改变请求报文，修改请求方法  |
| [poc.replacePath](#replacepath) |replacePath 是一个请求选项参数，用于改变请求报文，修改请求路径  |
| [poc.replacePostParam](#replacepostparam) |replacePostParam 是一个请求选项参数，用于改变请求报文，修改 POST 请求参数，如果不存在则会增加  |
| [poc.replaceQueryParam](#replacequeryparam) |replaceQueryParam 是一个请求选项参数，用于改变请求报文，修改 GET 请求参数，如果不存在则会增加  |
| [poc.replaceRandomUserAgent](#replacerandomuseragent) |replaceRandomUserAgent 是一个请求选项参数，用于改变请求报文，修改 User-Agent 请求头为随机的常见请求头  |
| [poc.replaceUploadFile](#replaceuploadfile) |replaceUploadFile 是一个请求选项参数，用于改变请求报文，修改请求体中的上传的文件，其中第一个参数为表单名，第二个参数为文件名，第三个参数为文件内容，第四个参数是可选参数，为文件类型(Content-Type)，如果不存在则会增加  |
| [poc.replaceUserAgent](#replaceuseragent) |replaceUserAgent 是一个请求选项参数，用于改变请求报文，修改 User-Agent 请求头，实际上是replaceHeader(&amp;#34;User-Agent&amp;#34;, userAgent)的简写  |
| [poc.retryInStatusCode](#retryinstatuscode) |retryInStatusCode 是一个请求选项参数，用于指定在某些响应状态码的情况下重试，需要搭配 retryTimes 使用  |
| [poc.retryMaxWaitTime](#retrymaxwaittime) |retryMaxWaitTime 是一个请求选项参数，用于指定重试时最大等待时间，需要搭配 retryTimes 使用，默认为2秒  |
| [poc.retryNotInStatusCode](#retrynotinstatuscode) |retryNotInStatusCode 是一个请求选项参数，用于指定非某些响应状态码的情况下重试，需要搭配 retryTimes 使用  |
| [poc.retryTimes](#retrytimes) |retryTimes 是一个请求选项参数，用于指定请求失败时的重试次数，需要搭配 retryInStatusCode 或 retryNotInStatusCode 使用，来设置在什么响应码的情况下重试  |
| [poc.retryWaitTime](#retrywaittime) |retryWaitTime 是一个请求选项参数，用于指定重试时最小等待时间，需要搭配 retryTimes 使用，默认为0.1秒  |
| [poc.runtimeID](#runtimeid) ||
| [poc.save](#save) |save 是一个请求选项参数，用于指定是否将此次请求的记录保存在数据库中，默认为true即会保存到数据库  |
| [poc.saveHandler](#savehandler) |saveHandler 是一个请求选项参数，用于设置在将此次请求存入数据库之前的回调函数  |
| [poc.saveSync](#savesync) |saveSync 是一个请求选项参数，用于指定是否将此次请求的记录保存在数据库中，且同步保存，默认为false即会异步保存到数据库  |
| [poc.session](#session) |session 是一个请求选项参数，用于指定请求的session，参数可以是任意类型的值，用此值做标识符从而找到唯一的session。使用session进行请求时会自动管理cookie，这在登录后操作的场景非常有用  |
| [poc.sni](#sni) |sni 是一个请求选项参数，用于指定使用 tls(https) 协议时的 服务器名称指示(SNI)  |
| [poc.source](#source) |source 是一个请求选项参数，用于在请求记录保存到数据库时标识此次请求的来源  |
| [poc.timeout](#timeout) |timeout 是一个请求选项参数，用于指定读取超时时间，默认为15秒  |
| [poc.ua](#ua) |ua 是一个请求选项参数，用于改变请求报文，添加 User-Agent 请求头中的值  |
| [poc.uarand](#uarand) |replaceRandomUserAgent 是一个请求选项参数，用于改变请求报文，修改 User-Agent 请求头为随机的常见请求头  |
| [poc.useMitmRule](#usemitmrule) |mitmRule 是一个请求选项参数，用于指定是否使用MITM规则，默认为false即不会使用MITM规则，使用规则可以完成流量染色，附加tag与提取数据的功能  |
| [poc.useragent](#useragent) |ua 是一个请求选项参数，用于改变请求报文，添加 User-Agent 请求头中的值  |
| [poc.username](#username) |username 是一个请求选项参数，用于指定认证时的用户名  |
| [poc.websocket](#websocket) |websocket 是一个请求选项参数，用于允许将链接升级为 websocket，此时发送的请求应该为 websocket 握手请求  |
| [poc.websocketFromServer](#websocketfromserver) |websocketFromServer 是一个请求选项参数，它接收一个回调函数，这个函数有两个参数，其中第一个参数为服务端发送的数据，第二个参数为取消函数，调用将会强制断开 websocket  |
| [poc.websocketOnClient](#websocketonclient) |websocketOnClient 是一个请求选项参数，它接收一个回调函数，这个函数有一个参数，是WebsocketClient结构体，通过该结构体可以向服务端发送数据  |
| [poc.websocketStrictMode](#websocketstrictmode) |websocketStrictMode 是一个请求选项参数，它用于控制是否启用严格模式，如果启用严格模式，则会遵循 RFC 6455 规范  |


## 函数定义
### 

#### 详细描述


#### 定义

``


### 

#### 详细描述


#### 定义

``


### AppendHTTPPacketCookie

#### 详细描述
AppendHTTPPacketCookie 是一个辅助函数，用于改变请求报文，添加Cookie请求头中的值

Example:
```
poc.AppendHTTPPacketCookie(poc.BasicRequest(), "aaa", "bbb") // 添加cookie键值对aaa:bbb
```


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
AppendHTTPPacketFormEncoded 是一个辅助函数，用于改变请求报文，添加请求体中的表单

Example:
```
poc.AppendHTTPPacketFormEncoded(`POST /post HTTP/1.1
Host: pie.dev
Content-Type: multipart/form-data; boundary=------------------------OFHnlKtUimimGcXvRSxgCZlIMAyDkuqsxeppbIFm
Content-Length: 203

--------------------------OFHnlKtUimimGcXvRSxgCZlIMAyDkuqsxeppbIFm
Content-Disposition: form-data; name="aaa"

bbb
--------------------------OFHnlKtUimimGcXvRSxgCZlIMAyDkuqsxeppbIFm--`, "ccc", "ddd") // 添加POST请求表单，其中ccc为键，ddd为值
```


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
AppendHTTPPacketHeader 是一个辅助函数，用于改变请求报文，添加请求头

Example:
```
poc.AppendHTTPPacketHeader(poc.BasicRequest(), "AAA", "BBB") // 添加AAA请求头的值为BBB
```


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
AppendHTTPPacketPath 是一个辅助函数，用于改变请求报文，在现有请求路径后添加请求路径

Example:
```
poc.AppendHTTPPacketPath(`GET /docs HTTP/1.1
Host: yaklang.com
`, "/api/poc")) // 向 example.com 发起请求，实际上请求路径改为/docs/api/poc
```


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
AppendHTTPPacketPostParam 是一个辅助函数，用于改变请求报文，添加POST请求参数

Example:
```
poc.AppendHTTPPacketPostParam(poc.BasicRequest(), "a", "b") // 向 pie.dev 发起请求，添加POST请求参数a，值为b
```


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
AppendHTTPPacketQueryParam 是一个辅助函数，用于改变请求报文，添加GET请求参数

Example:
```
poc.AppendHTTPPacketQueryParam(poc.BasicRequest(), "a", "b") // 添加GET请求参数a，值为b
```


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
AppendHTTPPacketUploadFile 是一个辅助函数，用于改变请求报文，添加请求体中的上传的文件，其中第一个参数为原始请求报文，第二个参数为表单名，第三个参数为文件名，第四个参数为文件内容，第五个参数是可选参数，为文件类型(Content-Type)

Example:
```
_, raw, _ = poc.ParseUrlToHTTPRequestRaw("POST", "https://pie.dev/post")
poc.AppendHTTPPacketUploadFile(raw, "file", "phpinfo.php", "<?php phpinfo(); ?>", "image/jpeg")) // 添加POST请求表单，其文件名为phpinfo.php，内容为<?php phpinfo(); ?>，文件类型为image/jpeg
```


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
BuildRequest 是一个用于辅助构建请求报文的工具函数，它第一个参数可以接收 []byte, string, http.Request 结构体，接下来可以接收零个到多个请求选项，修改请求报文的选项将被作用，最后返回构建好的请求报文

Example:
```
raw = poc.BuildRequest(poc.BasicRequest(), poc.https(true), poc.replaceHost("yaklang.com"), poc.replacePath("/docs/api/poc")) // 构建一个基础GET请求，修改其Host为yaklang.com，访问的URI路径为/docs/api/poc
// raw = b"GET /docs/api/poc HTTP/1.1\r\nHost: www.yaklang.com\r\n\r\n"
```


#### 定义

`BuildRequest(i any, opts ...PocConfigOption) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |
| opts | `...PocConfigOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### CurlToHTTPRequest

#### 详细描述
CurlToHTTPRequest 尝试将curl命令转换为HTTP请求报文，其返回值为bytes，即转换后的HTTP请求报文

Example:
```
poc.CurlToHTTPRequest("curl -X POST -d 'a=b&c=d' http://example.com")
```


#### 定义

`CurlToHTTPRequest(command string) (req []byte)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| command | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| req | `[]byte` |   |


### Delete

#### 详细描述
Delete 向指定 URL 发送 DELETE 请求并且返回响应结构体，请求结构体以及错误，它的第一个参数是 URL 字符串，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如对设置超时时间，或者修改请求报文等

关于结构体中的可用字段和方法可以使用 desc 函数进行查看

Example:
```
rsp,req = poc.Delete("https://yaklang.com", poc.https(true))~ // 向yaklang.com发送一个基于HTTPS协议的DELETE请求
desc(rsp) // 查看响应结构体中的可用字段
```


#### 定义

`Delete(urlStr string, opts ...PocConfigOption) (rspInst *lowhttp.LowhttpResponse, reqInst *http.Request, err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| urlStr | `string` |   |
| opts | `...PocConfigOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| rspInst | `*lowhttp.LowhttpResponse` |   |
| reqInst | `*http.Request` |   |
| err | `error` |   |


### DeleteHTTPPacketCookie

#### 详细描述
DeleteHTTPPacketCookie 是一个辅助函数，用于改变请求报文，删除Cookie中的值

Example:
```
poc.DeleteHTTPPacketCookie(`GET /get HTTP/1.1
Content-Type: application/json
Cookie: aaa=bbb; ccc=ddd
Host: pie.dev

`, "aaa") // 删除Cookie中的aaa
```


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
DeleteHTTPPacketForm 是一个辅助函数，用于改变请求报文，删除POST请求表单

Example:
```
poc.DeleteHTTPPacketForm(`POST /post HTTP/1.1
Host: pie.dev
Content-Type: multipart/form-data; boundary=------------------------OFHnlKtUimimGcXvRSxgCZlIMAyDkuqsxeppbIFm
Content-Length: 308

--------------------------OFHnlKtUimimGcXvRSxgCZlIMAyDkuqsxeppbIFm
Content-Disposition: form-data; name="aaa"

bbb
--------------------------OFHnlKtUimimGcXvRSxgCZlIMAyDkuqsxeppbIFm
Content-Disposition: form-data; name="ccc"

ddd
--------------------------OFHnlKtUimimGcXvRSxgCZlIMAyDkuqsxeppbIFm--`, "aaa") // 删除POST请求表单aaa
```


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
DeleteHTTPPacketHeader 是一个辅助函数，用于改变请求报文，删除请求头

Example:
```
poc.DeleteHTTPPacketHeader(`GET /get HTTP/1.1
Content-Type: application/json
AAA: BBB
Host: pie.dev

`, "AAA") // 删除AAA请求头
```


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
DeleteHTTPPacketPostParam 是一个辅助函数，用于改变请求报文，删除POST请求参数

Example:
```
poc.DeleteHTTPPacketPostParam(`POST /post HTTP/1.1
Content-Type: application/json
Content-Length: 7
Host: pie.dev

a=b&c=d`, "a") // 删除POST请求参数a
```


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
DeleteHTTPPacketQueryParam 是一个辅助函数，用于改变请求报文，删除GET请求参数

Example:
```
poc.DeleteHTTPPacketQueryParam(`GET /get?a=b&c=d HTTP/1.1
Content-Type: application/json
Host: pie.dev

`, "a") // 删除GET请求参数a
```


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
Do 向指定 URL 发送指定请求方法的请求并且返回响应结构体，请求结构体以及错误，它的是第一个参数是请求方法，第二个参数 URL 字符串，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如设置超时时间，或者修改请求报文等

关于结构体中的可用字段和方法可以使用 desc 函数进行查看

Example:
```
poc.Do("GET","https://yaklang.com", poc.https(true)) // 向yaklang.com发送一个基于HTTPS协议的GET请求
desc(rsp) // 查看响应结构体中的可用字段
```


#### 定义

`Do(method string, urlStr string, opts ...PocConfigOption) (rspInst *lowhttp.LowhttpResponse, reqInst *http.Request, err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| method | `string` |   |
| urlStr | `string` |   |
| opts | `...PocConfigOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| rspInst | `*lowhttp.LowhttpResponse` |   |
| reqInst | `*http.Request` |   |
| err | `error` |   |


### ExtractPostParams

#### 详细描述
ExtractPostParams 尝试将 HTTP 请求报文中的各种 POST 参数(普通格式，表单格式，JSON格式，XML格式)提取出来，返回提取出来的 POST 参数与错误

Example:
```
params, err = poc.ExtractPostParams("POST / HTTP/1.1\r\nContent-Type: application/json\r\nHost: example.com\r\n\r\n{\"key\": \"value\"}")
dump(params) // {"key": "value"}
```


#### 定义

`ExtractPostParams(raw []byte) (map[string]string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `map[string]string` |   |
| r2 | `error` |   |


### FixHTTPPacketCRLF

#### 详细描述
FixHTTPPacketCRLF 修复一个HTTP报文的CRLF问题（正常的报文每行末尾为\r\n，但是某些报文可能是有\n），如果noFixLength为true，则不会修复Content-Length，否则会尝试修复Content-Length

Example:
```
poc.FixHTTPPacketCRLF(`POST / HTTP/1.1
Host: example.com
Content-Length: 11

hello world`, false)
```


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
FixHTTPRequest 尝试对传入的HTTP请求报文进行修复，并返回修复后的请求

Example:
```
poc.FixHTTPRequest(b"GET / HTTP/1.1\r\nHost: example.com\r\n\r\n")
```


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
FixHTTPResponse 尝试对传入的 HTTP 响应报文进行修复，并返回修复后的响应

Example:
```
poc.FixHTTPResponse(b"HTTP/1.1 200 OK\nContent-Length: 5\n\nhello")
```


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
Get 向指定 URL 发送 GET 请求并且返回响应结构体，请求结构体以及错误，它的第一个参数是 URL 字符串，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如对设置超时时间，或者修改请求报文等

关于结构体中的可用字段和方法可以使用 desc 函数进行查看

Example:
```
rsp,req = poc.Get("https://yaklang.com", poc.https(true))~ // 向yaklang.com发送一个基于HTTPS协议的GET请求
desc(rsp) // 查看响应结构体中的可用字段
```


#### 定义

`Get(urlStr string, opts ...PocConfigOption) (rspInst *lowhttp.LowhttpResponse, reqInst *http.Request, err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| urlStr | `string` |   |
| opts | `...PocConfigOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| rspInst | `*lowhttp.LowhttpResponse` |   |
| reqInst | `*http.Request` |   |
| err | `error` |   |


### GetAllHTTPPacketPostParams

#### 详细描述
GetAllHTTPPacketPostParams 是一个辅助函数，用于获取请求报文中的所有POST请求参数，其返回值为map[string]string，其中键为参数名，值为参数值

Example:
```
poc.GetAllHTTPPacketPostParams(`POST /post HTTP/1.1
Content-Type: application/json
COntent-Length: 7
Host: pie.dev

a=b&c=d`) // 获取所有POST请求参数
```


#### 定义

`GetAllHTTPPacketPostParams(packet []byte) (params map[string]string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| params | `map[string]string` |   |


### GetAllHTTPPacketPostParamsFull

#### 详细描述
GetAllHTTPPacketPostParamsFull 是一个辅助函数，用于获取请求报文中的所有POST请求参数，其返回值为map[string][]string，其中键为参数名，值为参数值切片

Example:
```
poc.GetAllHTTPPacketPostParams(`POST /post HTTP/1.1
Content-Type: application/json
COntent-Length: 7
Host: pie.dev

a=b&a=c`) // 获取所有POST请求参数，这里会返回{"a":["b", "c"]}
```


#### 定义

`GetAllHTTPPacketPostParamsFull(packet []byte) (params map[string][]string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| params | `map[string][]string` |   |


### GetAllHTTPPacketQueryParams

#### 详细描述
GetAllHTTPPacketQueryParams 是一个辅助函数，用于获取请求报文中的所有GET请求参数，其返回值为map[string]string，其中键为参数名，值为参数值

Example:
```
poc.GetAllHTTPPacketQueryParams(`GET /get?a=b&c=d HTTP/1.1
Content-Type: application/json
Host: pie.dev

`) // 获取所有GET请求参数
```


#### 定义

`GetAllHTTPPacketQueryParams(packet []byte) (params map[string]string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| params | `map[string]string` |   |


### GetAllHTTPPacketQueryParamsFull

#### 详细描述
GetAllHTTPPacketQueryParamsFull 是一个辅助函数，用于获取请求报文中的所有GET请求参数，其返回值为map[string][]string，其中键为参数名，值为参数值切片

Example:
```
poc.GetAllHTTPPacketQueryParamsFull(`GET /get?a=b&a=c HTTP/1.1
Content-Type: application/json
Host: pie.dev

`) // 返回所有GET请求参数，这里会返回{"a":["b", "c"]}
```


#### 定义

`GetAllHTTPPacketQueryParamsFull(packet []byte) (params map[string][]string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| params | `map[string][]string` |   |


### GetHTTPPacketBody

#### 详细描述
GetHTTPPacketBody 是一个辅助函数，用于获取请求报文中的请求体，其返回值为bytes

Example:
```
poc.GetHTTPPacketBody(`POST /post HTTP/1.1
Content-Type: application/json
COntent-Length: 7
Host: pie.dev

a=b&c=d`) // 获取请求头，这里为b"a=b&c=d"
```


#### 定义

`GetHTTPPacketBody(packet []byte) (body []byte)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| body | `[]byte` |   |


### GetHTTPPacketContentType

#### 详细描述
GetHTTPPacketContentType 是一个辅助函数，用于获取请求报文中的Content-Type请求头，其返回值为string

Example:
```
poc.GetHTTPPacketContentType(`POST /post HTTP/1.1
Content-Type: application/json
COntent-Length: 7
Host: pie.dev

a=b&c=d`) // 获取Content-Type请求头
```


#### 定义

`GetHTTPPacketContentType(packet []byte) (contentType string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| contentType | `string` |   |


### GetHTTPPacketCookie

#### 详细描述
GetHTTPPacketCookie 是一个辅助函数，用于获取请求报文中Cookie值，其返回值为string

Example:
```
poc.GetHTTPPacketCookie(`GET /get HTTP/1.1
Content-Type: application/json
Cookie: a=b; c=d
Host: pie.dev

`, "a") // 获取键名为a的Cookie值，这里会返回"b"
```


#### 定义

`GetHTTPPacketCookie(packet []byte, key string) (cookieValue string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| key | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| cookieValue | `string` |   |


### GetHTTPPacketCookieFirst

#### 详细描述
GetHTTPPacketCookieFirst 是一个辅助函数，用于获取请求报文中Cookie值，其返回值为string

Example:
```
poc.GetHTTPPacketCookieFirst(`GET /get HTTP/1.1
Content-Type: application/json
Cookie: a=b; c=d
Host: pie.dev

`, "a") // 获取键名为a的Cookie值，这里会返回"b"
```


#### 定义

`GetHTTPPacketCookieFirst(packet []byte, key string) (cookieValue string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| key | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| cookieValue | `string` |   |


### GetHTTPPacketCookieValues

#### 详细描述
GetHTTPPacketCookieValues 是一个辅助函数，用于获取请求报文中Cookie值，其返回值为[]string，这是因为Cookie可能存在多个相同键名的值

Example:
```
poc.GetHTTPPacketCookieValues(`GET /get HTTP/1.1
Content-Type: application/json
Cookie: a=b; a=c
Host: pie.dev

`, "a") // 获取键名为a的Cookie值，这里会返回["b", "c"]
```


#### 定义

`GetHTTPPacketCookieValues(packet []byte, key string) (cookieValues []string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| key | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| cookieValues | `[]string` |   |


### GetHTTPPacketCookies

#### 详细描述
GetHTTPPacketCookies 是一个辅助函数，用于获取请求报文中所有Cookie值，其返回值为map[string]string

Example:
```
poc.GetHTTPPacketCookies(`GET /get HTTP/1.1
Content-Type: application/json
Cookie: a=b; c=d
Host: pie.dev

`) // 获取所有Cookie值，这里会返回{"a":"b", "c":"d"}
```


#### 定义

`GetHTTPPacketCookies(packet []byte) (cookies map[string]string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| cookies | `map[string]string` |   |


### GetHTTPPacketCookiesFull

#### 详细描述
GetHTTPPacketCookiesFull 是一个辅助函数，用于获取请求报文中所有Cookie值，其返回值为map[string][]string，这是因为Cookie可能存在多个相同键名的值

Example:
```
poc.GetHTTPPacketCookiesFull(`GET /get HTTP/1.1
Content-Type: application/json
Cookie: a=b; a=c; c=d
Host: pie.dev

`) // 获取所有Cookie值，这里会返回{"a":["b", "c"], "c":["d"]}
```


#### 定义

`GetHTTPPacketCookiesFull(packet []byte) (cookies map[string][]string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| cookies | `map[string][]string` |   |


### GetHTTPPacketFirstLine

#### 详细描述
GetHTTPPacketFirstLine 是一个辅助函数，用于获取 HTTP 报文中第一行的值，其返回值为string，string，string

在请求报文中，其三个返回值分别为：请求方法，请求URI，协议版本

在响应报文中，其三个返回值分别为：协议版本，状态码，状态码描述

Example:
```
poc.GetHTTPPacketFirstLine(`GET /get HTTP/1.1
Content-Type: application/json
Cookie: a=b; a=c; c=d
Host: pie.dev

`) // 获取请求方法，请求URI，协议版本，这里会返回"GET", "/get", "HTTP/1.1"
```


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
GetHTTPPacketHeader 是一个辅助函数，用于获取请求报文中指定的请求头，其返回值为string

Example:
```
poc.GetHTTPPacketHeader(`GET /get HTTP/1.1
Content-Type: application/json
Cookie: a=b; a=c; c=d
Host: pie.dev

`, "Content-Type") // 获取Content-Type请求头，这里会返回"application/json"
```


#### 定义

`GetHTTPPacketHeader(packet []byte, key string) (header string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| key | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| header | `string` |   |


### GetHTTPPacketHeaders

#### 详细描述
GetHTTPPacketHeaders 是一个辅助函数，用于获取请求报文中所有请求头，其返回值为map[string]string

Example:
```
poc.GetHTTPPacketHeaders(`GET /get HTTP/1.1
Content-Type: application/json
Cookie: a=b; a=c; c=d
Host: pie.dev

`) // 获取所有请求头，这里会返回{"Content-Type": "application/json", "Cookie": "a=b; a=c; c=d", "Host": "pie.dev"}
```


#### 定义

`GetHTTPPacketHeaders(packet []byte) (headers map[string]string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| headers | `map[string]string` |   |


### GetHTTPPacketHeadersFull

#### 详细描述
GetHTTPPacketHeadersFull 是一个辅助函数，用于获取请求报文中所有请求头，其返回值为map[string][]string，这是因为请求头可能存在多个相同键名的值

Example:
```
poc.GetHTTPPacketHeadersFull(`GET /get HTTP/1.1
Content-Type: application/json
Cookie: a=b; a=c; c=d
Cookie: e=f
Host: pie.dev

`) // 获取所有请求头，这里会返回{"Content-Type": ["application/json"], "Cookie": []"a=b; a=c; c=d", "e=f"], "Host": ["pie.dev"]}
```


#### 定义

`GetHTTPPacketHeadersFull(packet []byte) (headers map[string][]string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| headers | `map[string][]string` |   |


### GetHTTPPacketPostParam

#### 详细描述
GetHTTPPacketPostParam 是一个辅助函数，用于获取请求报文中指定的POST请求参数，其返回值为string

Example:
```
poc.GetHTTPPacketPostParam(`POST /post HTTP/1.1
Content-Type: application/json
COntent-Length: 7
Host: pie.dev

a=b&c=d`, "a") // 获取POST请求参数a的值
```


#### 定义

`GetHTTPPacketPostParam(packet []byte, key string) (paramValue string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| key | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| paramValue | `string` |   |


### GetHTTPPacketQueryParam

#### 详细描述
GetHTTPPacketQueryParam 是一个辅助函数，用于获取请求报文中指定的GET请求参数，其返回值为string

Example:
```
poc.GetHTTPPacketQueryParam(`GET /get?a=b&c=d HTTP/1.1
Content-Type: application/json
Host: pie.dev

`, "a") // 获取GET请求参数a的值
```


#### 定义

`GetHTTPPacketQueryParam(packet []byte, key string) (paramValue string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| key | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| paramValue | `string` |   |


### GetHTTPRequestMethod

#### 详细描述
GetHTTPRequestMethod 是一个辅助函数，用于获取请求报文中的请求方法，其返回值为string

Example:
```
poc.GetHTTPRequestMethod(`GET /get HTTP/1.1
Content-Type: application/json
Cookie: a=b; a=c; c=d
Host: pie.dev

`) // 获取请求方法，这里会返回"GET"
```


#### 定义

`GetHTTPRequestMethod(packet []byte) (method string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| method | `string` |   |


### GetHTTPRequestPath

#### 详细描述
GetHTTPRequestPath 是一个辅助函数，用于获取响应报文中的路径，返回值是 string，包含 query

Example:
```
poc.GetHTTPRequestPath("GET /a/bc.html?a=1 HTTP/1.1\r\nHost: www.example.com\r\n\r\n") // /a/bc.html?a=1
```


#### 定义

`GetHTTPRequestPath(packet []byte) (path string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| path | `string` |   |


### GetHTTPRequestPathWithoutQuery

#### 详细描述
GetHTTPRequestPathWithoutQuery 是一个辅助函数，用于获取响应报文中的路径，返回值是 string，不包含 query

Example:
```
poc.GetHTTPRequestPathWithoutQuery("GET /a/bc.html?a=1 HTTP/1.1\r\nHost: www.example.com\r\n\r\n") // /a/bc.html
```


#### 定义

`GetHTTPRequestPathWithoutQuery(packet []byte) (path string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| path | `string` |   |


### GetStatusCodeFromResponse

#### 详细描述
GetStatusCodeFromResponse 是一个辅助函数，用于获取响应报文中的状态码，其返回值为int

Example:
```
poc.GetStatusCodeFromResponse(`HTTP/1.1 200 OK
Content-Length: 5

hello`) // 获取响应报文中的状态码，这里会返回200
```


#### 定义

`GetStatusCodeFromResponse(packet []byte) (statusCode int)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| statusCode | `int` |   |


### GetUrlFromHTTPRequest

#### 详细描述
GetUrlFromHTTPRequest 是一个辅助函数，用于获取请求报文中的URL，其返回值为string

Example:
```
poc.GetUrlFromHTTPRequest("https", `GET /get HTTP/1.1
Content-Type: application/json
Host: pie.dev

`) // 获取URL，这里会返回"https://pie.dev/get"
```


#### 定义

`GetUrlFromHTTPRequest(scheme string, packet []byte) (url string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| scheme | `string` |   |
| packet | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| url | `string` |   |


### HTTP

#### 详细描述
HTTP 发送请求并且返回原始响应报文，原始请求报文以及错误，它的第一个参数可以接收 []byte, string, http.Request 结构体，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如设置超时时间，或者修改请求报文等

Example:
```
poc.HTTP("GET / HTTP/1.1\r\nHost: www.yaklang.com\r\n\r\n", poc.https(true), poc.replaceHeader("AAA", "BBB")) // yaklang.com发送一个基于HTTPS协议的GET请求，并且添加一个请求头AAA，它的值为BBB
```


#### 定义

`HTTP(i any, opts ...PocConfigOption) (rsp []byte, req []byte, err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |
| opts | `...PocConfigOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| rsp | `[]byte` |   |
| req | `[]byte` |   |
| err | `error` |   |


### HTTPEx

#### 详细描述
HTTPEx 与 HTTP 类似，它发送请求并且返回响应结构体，请求结构体以及错误，它的第一个参数可以接收 []byte, string, http.Request 结构体，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如设置超时时间，或者修改请求报文等

关于结构体中的可用字段和方法可以使用 desc 函数进行查看

Example:
```
rsp, req, err = poc.HTTPEx(`GET / HTTP/1.1\r\nHost: www.yaklang.com\r\n\r\n`, poc.https(true), poc.replaceHeader("AAA", "BBB")) // 向yaklang.com发送一个基于HTTPS协议的GET请求，并且添加一个请求头AAA，它的值为BBB
desc(rsp) // 查看响应结构体中的可用字段
```


#### 定义

`HTTPEx(i any, opts ...PocConfigOption) (rspInst *lowhttp.LowhttpResponse, reqInst *http.Request, err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |
| opts | `...PocConfigOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| rspInst | `*lowhttp.LowhttpResponse` |   |
| reqInst | `*http.Request` |   |
| err | `error` |   |


### HTTPPacketForceChunked

#### 详细描述
HTTPPacketForceChunked 将一个HTTP报文的body强制转换为chunked编码

Example:
```
poc.HTTPPacketForceChunked(`POST / HTTP/1.1
Host: example.com
Content-Length: 11

hello world`)
```


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
HTTPRequestToCurl 尝试将 HTTP 请求报文转换为curl命令。第一个参数为是否使用HTTPS，第二个参数为HTTP请求报文，其返回值为string，即转换后的curl命令

Example:
```
poc.HTTPRequestToCurl(true, "GET / HTTP/1.1\r\nHost: example.com\r\n\r\n")
```


#### 定义

`HTTPRequestToCurl(https bool, raw any) (curlCommand string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| https | `bool` |   |
| raw | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| curlCommand | `string` |   |


### Head

#### 详细描述
Head 向指定 URL 发送 HEAD 请求并且返回响应结构体，请求结构体以及错误，它的第一个参数是 URL 字符串，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如对设置超时时间，或者修改请求报文等

关于结构体中的可用字段和方法可以使用 desc 函数进行查看

Example:
```
rsp,req = poc.Head("https://yaklang.com", poc.https(true))~ // 向yaklang.com发送一个基于HTTPS协议的HEAD请求
desc(rsp) // 查看响应结构体中的可用字段
```


#### 定义

`Head(urlStr string, opts ...PocConfigOption) (rspInst *lowhttp.LowhttpResponse, reqInst *http.Request, err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| urlStr | `string` |   |
| opts | `...PocConfigOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| rspInst | `*lowhttp.LowhttpResponse` |   |
| reqInst | `*http.Request` |   |
| err | `error` |   |


### IsResponse

#### 详细描述
IsResp 判断传入的数据是否为 HTTP 响应报文

Example:
```
poc.IsResp(b"HTTP/1.1 200 OK\r\nContent-Length: 2\r\n\r\nok") // true
```


#### 定义

`IsResponse(raw any) (isHTTPResponse bool)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| isHTTPResponse | `bool` |   |


### Options

#### 详细描述
Options 向指定 URL 发送 OPTIONS 请求并且返回响应结构体，请求结构体以及错误，它的第一个参数是 URL 字符串，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如对设置超时时间，或者修改请求报文等

关于结构体中的可用字段和方法可以使用 desc 函数进行查看

Example:
```
rsp,req = poc.Options("https://yaklang.com", poc.https(true))~ // 向yaklang.com发送一个基于HTTPS协议的Options请求
desc(rsp) // 查看响应结构体中的可用字段
```


#### 定义

`Options(urlStr string, opts ...PocConfigOption) (rspInst *lowhttp.LowhttpResponse, reqInst *http.Request, err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| urlStr | `string` |   |
| opts | `...PocConfigOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| rspInst | `*lowhttp.LowhttpResponse` |   |
| reqInst | `*http.Request` |   |
| err | `error` |   |


### ParseBytesToHTTPRequest

#### 详细描述
ParseBytesToHTTPRequest 将字节数组解析为 HTTP 请求

Example:
```
req, err := str.ParseBytesToHTTPRequest(b"GET / HTTP/1.1\r\nHost: example.com\r\n\r\n")
```


#### 定义

`ParseBytesToHTTPRequest(raw []byte) (reqInst *http.Request, err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| reqInst | `*http.Request` |   |
| err | `error` |   |


### ParseBytesToHTTPResponse

#### 详细描述
ParseBytesToHTTPResponse 将字节数组解析为 HTTP 响应

Example:
```
res, err := str.ParseBytesToHTTPResponse(b"HTTP/1.1 200 OK\r\nContent-Length: 2\r\n\r\nok")
```


#### 定义

`ParseBytesToHTTPResponse(res []byte) (rspInst *http.Response, err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| res | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| rspInst | `*http.Response` |   |
| err | `error` |   |


### ParseMultiPartFormWithCallback

#### 详细描述
ParseMultiPartFormWithCallback 是一个辅助函数，用于尝试解析请求报文体中的表单并进行回调

Example:
```
poc.ParseMultiPartFormWithCallback(`POST /post HTTP/1.1
Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW
Host: pie.dev

------WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="a"

1
------WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="b"

2
------WebKitFormBoundary7MA4YWxkTrZu0gW--`, func(part) {
content = string(io.ReadAll(part)~)
println(part.FileName(), part.FormName(), content)
})
```


#### 定义

`ParseMultiPartFormWithCallback(req []byte, callback func(part *multipart.Part)) (err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| req | `[]byte` |   |
| callback | `func(part *multipart.Part)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| err | `error` |   |


### ParseUrlToHTTPRequestRaw

#### 详细描述
ParseUrlToHTTPRequestRaw 将URL解析为原始 HTTP 请求报文，返回是否为 HTTPS，原始请求报文与错误

Example:
```
ishttps, raw, err = poc.ParseUrlToHTTPRequestRaw("GET", "https://yaklang.com")
```


#### 定义

`ParseUrlToHTTPRequestRaw(method string, i any) (isHttps bool, req []byte, err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| method | `string` |   |
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| isHttps | `bool` |   |
| req | `[]byte` |   |
| err | `error` |   |


### Post

#### 详细描述
Post 向指定 URL 发送 POST 请求并且返回响应结构体，请求结构体以及错误，它的第一个参数是 URL 字符串，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如对设置超时时间，或者修改请求报文等

关于结构体中的可用字段和方法可以使用 desc 函数进行查看

Example:
```
rsp,req = poc.Post("https://yaklang.com", poc.https(true))~ // 向yaklang.com发送一个基于HTTPS协议的POST请求
desc(rsp) // 查看响应结构体中的可用字段
```


#### 定义

`Post(urlStr string, opts ...PocConfigOption) (rspInst *lowhttp.LowhttpResponse, reqInst *http.Request, err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| urlStr | `string` |   |
| opts | `...PocConfigOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| rspInst | `*lowhttp.LowhttpResponse` |   |
| reqInst | `*http.Request` |   |
| err | `error` |   |


### ReplaceAllHTTPPacketPostParams

#### 详细描述
ReplaceAllHTTPPacketPostParams 是一个辅助函数，用于改变请求报文，修改所有 POST 请求参数，如果不存在则会增加，其接收一个 map[string]string 类型的参数，其中 key 为 POST 请求参数名，value 为 POST 请求参数值

Example:
```
_, raw, _ = poc.ParseUrlToHTTPRequestRaw("POST", "https://pie.dev/post")
poc.ReplaceAllHTTPPacketPostParams(raw, {"a":"b", "c":"d"}) // 添加POST请求参数a，值为b，POST请求参数c，值为d
```


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


### ReplaceAllHTTPPacketPostParamsWithoutEscape

#### 详细描述
ReplaceAllHTTPPacketPostParamsWithoutEscape 是一个辅助函数，用于改变请求报文，修改所有 POST 请求参数，如果不存在则会增加，其接收一个 map[string]string 类型的参数，其中 key 为 POST 请求参数名，value 为 POST 请求参数值

与 poc.ReplaceAllHTTPPacketPostParams 类似，但是不会将参数值进行转义



Example:
```
_, raw, _ = poc.ParseUrlToHTTPRequestRaw("POST", "https://pie.dev/post")
poc.ReplaceAllHTTPPacketPostParamsWithoutEscape(raw, {"a":"b", "c":"d"}) // 添加POST请求参数a，值为b，POST请求参数c，值为d
```


#### 定义

`ReplaceAllHTTPPacketPostParamsWithoutEscape(packet []byte, values map[string]string) []byte`

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
ReplaceAllHTTPPacketQueryParams 是一个辅助函数，用于改变请求报文，修改所有 GET 请求参数，如果不存在则会增加，其接收一个 map[string]string 类型的参数，其中 key 为请求参数名，value 为请求参数值

Example:
```
poc.ReplaceAllHTTPPacketQueryParams(poc.BasicRequest(), {"a":"b", "c":"d"}) // 添加GET请求参数a，值为b，添加GET请求参数c，值为d
```


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


### ReplaceAllHTTPPacketQueryParamsWithoutEscape

#### 详细描述
ReplaceAllHTTPPacketQueryParamsWithoutEscape 是一个辅助函数，用于改变请求报文，修改所有 GET 请求参数，如果不存在则会增加，其接收一个 map[string]string 类型的参数，其中 key 为请求参数名，value 为请求参数值

与 poc.ReplaceAllHTTPPacketQueryParams 类似，但是不会将参数值进行转义

Example:
```
poc.ReplaceAllHTTPPacketQueryParamsWithoutEscape(poc.BasicRequest(), {"a":"b", "c":"d"}) // 添加GET请求参数a，值为b，添加GET请求参数c，值为d
```


#### 定义

`ReplaceAllHTTPPacketQueryParamsWithoutEscape(packet []byte, values map[string]string) []byte`

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
ReplaceBody 将原始 HTTP 请求报文中的 body 替换为指定的 body，并指定是否为 chunked，返回新的 HTTP 请求报文

Example:
```
poc.ReplaceBody(`POST / HTTP/1.1
Host: example.com
Content-Length: 11

hello world`, "hello yak", false)
```


#### 定义

`ReplaceBody(raw []byte, body []byte, chunk bool) (newHTTPRequest []byte)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` |   |
| body | `[]byte` |   |
| chunk | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| newHTTPRequest | `[]byte` |   |


### ReplaceHTTPPacketBasicAuth

#### 详细描述
ReplaceHTTPPacketBasicAuth 是一个辅助函数，用于改变请求报文，修改Authorization请求头为基础认证的密文，如果不存在则会增加，实际上是ReplaceHTTPPacketHeader(&#34;Authorization&#34;, codec.EncodeBase64(username + &#34;:&#34; + password))的简写

Example:
```
_, raw, _ = poc.ParseUrlToHTTPRequestRaw("GET", "https://pie.dev/basic-auth/admin/password")
poc.ReplaceHTTPPacketBasicAuth(raw, "admin", "password") // 修改Authorization请求头
```


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
ReplaceHTTPPacketBody 是一个辅助函数，用于改变 HTTP 报文，修改 HTTP 报文主体内容，第一个参数为原始 HTTP 报文，第二个参数为修改的报文主体内容

Example:
```
poc.ReplaceHTTPPacketBody(poc.BasicRequest(), "a=b") // 修改请求体内容为a=b
```


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
ReplaceHTTPPacketCookie 是一个辅助函数，用于改变请求报文，修改Cookie请求头中的值，如果不存在则会增加

Example:
```
poc.ReplaceHTTPPacketCookie(poc.BasicRequest(), "aaa", "bbb") // 修改cookie值，由于这里没有aaa的cookie值，所以会增加
```


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


### ReplaceHTTPPacketCookies

#### 详细描述
ReplaceHTTPPacketCookies 是一个辅助函数，用于改变请求报文，修改Cookie请求头

Example:
```
poc.ReplaceHTTPPacketCookies(poc.BasicRequest(), {"aaa":"bbb", "ccc":"ddd"}) // 修改cookie值为aaa=bbb;ccc=ddd
```


#### 定义

`ReplaceHTTPPacketCookies(packet []byte, m any) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| m | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### ReplaceHTTPPacketFirstLine

#### 详细描述
ReplaceHTTPPacketFirstLine 是一个辅助，用于改变请求报文，修改第一行（即请求方法，请求路径，协议版本）

Example:
```
poc.ReplaceHTTPPacketFirstLine(`GET / HTTP/1.1
Host: Example.com
`, "GET /test HTTP/1.1")) // 向 example.com 发起请求，修改请求报文的第一行，请求/test路径
```


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


### ReplaceHTTPPacketFormEncoded

#### 详细描述
ReplaceHTTPPacketFormEncoded 是一个辅助函数，用于改变请求报文，替换请求体中的表单，如果不存在则会增加

Example:
```
poc.ReplaceHTTPPacketFormEncoded(`POST /post HTTP/1.1
Host: pie.dev
Content-Type: multipart/form-data; boundary=------------------------OFHnlKtUimimGcXvRSxgCZlIMAyDkuqsxeppbIFm
Content-Length: 203

--------------------------OFHnlKtUimimGcXvRSxgCZlIMAyDkuqsxeppbIFm
Content-Disposition: form-data; name="aaa"

bbb
--------------------------OFHnlKtUimimGcXvRSxgCZlIMAyDkuqsxeppbIFm--`, "ccc", "ddd") // 替换POST请求表单，其中ccc为键，ddd为值
```


#### 定义

`ReplaceHTTPPacketFormEncoded(packet []byte, key string, value string) []byte`

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


### ReplaceHTTPPacketHeader

#### 详细描述
ReplaceHTTPPacketHeader 是一个辅助函数，用于改变请求报文，修改请求头，如果不存在则会增加

Example:
```
poc.ReplaceHTTPPacketHeader(poc.BasicRequest(),"AAA", "BBB") // 修改AAA请求头的值为BBB，这里没有AAA请求头，所以会增加该请求头
```


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
ReplaceHTTPPacketHost 是一个辅助函数，用于改变请求报文，修改Host请求头，如果不存在则会增加，实际上是ReplaceHTTPPacketHeader(&#34;Host&#34;, host)的简写

Example:
```
_, raw, _ = poc.ParseUrlToHTTPRequestRaw("GET", "https://yaklang.com")
poc.ReplaceHTTPPacketHost(raw, "www.yaklang.com") // 修改Host请求头的值为 www.yaklang.com
```


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


### ReplaceHTTPPacketJsonBody

#### 详细描述
ReplaceHTTPPacketJsonBody 是一个辅助函数，用于改变 HTTP 报文，修改 HTTP 报文主体内容（ json 格式），第一个参数为原始 HTTP 报文，第二个参数为修改的报文主体内容（ map 对象）

Example:
```
poc.ReplaceHTTPPacketJsonBody(poc.BasicRequest(), {"a":"b"}) // 修改请求体内容为{"a":"b"}
```


#### 定义

`ReplaceHTTPPacketJsonBody(packet []byte, jsonMap map[string]any) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| jsonMap | `map[string]any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### ReplaceHTTPPacketMethod

#### 详细描述
ReplaceHTTPPacketMethod 是一个辅助函数，用于改变请求报文，修改请求方法

Example:
```
poc.ReplaceHTTPPacketMethod(poc.BasicRequest(), "OPTIONS") // 修改请求方法为OPTIONS
```


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
ReplaceHTTPPacketPath 是一个辅助函数，用于改变请求报文，修改请求路径

Example:
```
poc.ReplaceHTTPPacketPath(poc.BasicRequest(), "/get") // 修改请求路径为/get
```


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
ReplaceHTTPPacketPostParam 是一个辅助函数，用于改变请求报文，修改POST请求参数，如果不存在则会增加

Example:
```
_, raw, _ = poc.ParseUrlToHTTPRequestRaw("POST", "https://pie.dev/post")
poc.ReplaceHTTPPacketPostParam(raw, "a", "b") // 添加POST请求参数a，值为b
```


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
ReplaceHTTPPacketQueryParam 是一个辅助函数，用于改变请求报文，修改GET请求参数，如果不存在则会增加

Example:
```
_, raw, _ = poc.ParseUrlToHTTPRequestRaw("GET", "https://pie.dev/get")
poc.ReplaceHTTPPacketQueryParam(raw, "a", "b") // 添加GET请求参数a，值为b
```


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


### ReplaceHTTPPacketUploadFile

#### 详细描述
ReplaceHTTPPacketUploadFile 是一个辅助函数，用于改变请求报文，替换请求体中的上传的文件，其中第一个参数为原始请求报文，第二个参数为表单名，第三个参数为文件名，第四个参数为文件内容，第五个参数是可选参数，为文件类型(Content-Type)，如果表单名不存在则会增加

Example:
```
_, raw, _ = poc.ParseUrlToHTTPRequestRaw("POST", "https://pie.dev/post")
poc.ReplaceHTTPPacketUploadFile(raw, "file", "phpinfo.php", "<?php phpinfo(); ?>", "image/jpeg")) // 添加POST请求表单，其文件名为phpinfo.php，内容为<?php phpinfo(); ?>，文件类型为image/jpeg
```


#### 定义

`ReplaceHTTPPacketUploadFile(packet []byte, fieldName string, fileName string, fileContent any, contentType ...string) []byte`

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


### Split

#### 详细描述
Split 切割 HTTP 报文，返回响应头和响应体，其第一个参数是原始HTTP报文，接下来可以接收零个到多个回调函数，其在每次解析到请求头时回调

Example:
```
poc.Split(`POST / HTTP/1.1
Content-Type: application/json
Host: www.example.com

{"key": "value"}`, func(header) {
dump(header)
})
```


#### 定义

`Split(raw []byte, hook ...func(line string)) (headers string, body []byte)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` |   |
| hook | `...func(line string)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| headers | `string` |   |
| body | `[]byte` |   |


### Websocket

#### 详细描述
Websocket 实际上等价于`poc.HTTP(..., poc.websocket(true))`，用于快速发送请求并建立websocket连接并且返回原始响应报文，原始请求报文以及错误

Example:
```
rsp, req, err = poc.Websocket(`GET / HTTP/1.1
Connection: Upgrade
Upgrade: websocket
Sec-Websocket-Version: 13
Sec-Websocket-Extensions: permessage-deflate; client_max_window_bits
Host: echo.websocket.events
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,en-US;q=0.7
Sec-Websocket-Key: L31R1As+71fwuXqhwhABuA==`,

	poc.proxy("http://127.0.0.1:7890"), poc.websocketFromServer(func(rsp, cancel) {
		    dump(rsp)
		}), poc.websocketOnClient(func(c) {
		    c.WriteText("123")
		})

)
time.Sleep(100)
```


#### 定义

`Websocket(raw any, opts ...PocConfigOption) (rsp []byte, req []byte, err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `any` |   |
| opts | `...PocConfigOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| rsp | `[]byte` |   |
| req | `[]byte` |   |
| err | `error` |   |


### appendCookie

#### 详细描述
appendCookie 是一个请求选项参数，用于改变请求报文，添加 Cookie 请求头中的值

Example:
```
poc.Get("https://pie.dev/get", poc.appendCookie("aaa", "bbb")) // 向 pie.dev 发起请求，添加cookie键值对aaa:bbb
```


#### 定义

`appendCookie(key string, value string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |
| value | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### appendFormEncoded

#### 详细描述
appendFormEncoded 是一个请求选项参数，用于改变请求报文，添加请求体中的表单

Example:
```
poc.Post("https://pie.dev/post", poc.appendFormEncoded("aaa", "bbb")) // 向 pie.dev 发起请求，添加POST请求表单，其中aaa为键，bbb为值
```


#### 定义

`appendFormEncoded(key string, value string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |
| value | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### appendHeader

#### 详细描述
appendHeader 是一个请求选项参数，用于改变请求报文，添加请求头

Example:
```
poc.Post("https://pie.dev/post", poc.appendHeader("AAA", "BBB")) // 向 pie.dev 发起请求，添加AAA请求头的值为BBB
```


#### 定义

`appendHeader(key string, value string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |
| value | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### appendHeaders

#### 详细描述
appendHeaders 是一个请求选项参数，用于改变请求报文，添加请求头

Example:
```
poc.Post("https://pie.dev/post", poc.appendHeaders({"AAA": "BBB","CCC": "DDD"})) // 向 pie.dev 发起请求，添加AAA请求头的值为BBB
```


#### 定义

`appendHeaders(headers map[string]string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| headers | `map[string]string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### appendPath

#### 详细描述
appendPath 是一个请求选项参数，用于改变请求报文，在现有请求路径后添加请求路径

Example:
```
poc.Get("https://yaklang.com/docs", poc.appendPath("/api/poc")) // 向 yaklang.com 发起请求，实际上请求路径为/docs/api/poc
```


#### 定义

`appendPath(path string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### appendPostParam

#### 详细描述
appendPostParam 是一个请求选项参数，用于改变请求报文，添加 POST 请求参数

Example:
```
poc.Post("https://pie.dev/post", poc.appendPostParam("a", "b")) // 向 pie.dev 发起请求，添加POST请求参数a，值为b
```


#### 定义

`appendPostParam(key string, value string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |
| value | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### appendQueryParam

#### 详细描述
appendQueryParam 是一个请求选项参数，用于改变请求报文，添加 GET 请求参数

Example:
```
poc.Get("https://pie.dev/get", poc.appendQueryParam("a", "b")) // 向 pie.dev 发起请求，添加GET请求参数a，值为b
```


#### 定义

`appendQueryParam(key string, value string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |
| value | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### appendUploadFile

#### 详细描述
appendUploadFile 是一个请求选项参数，用于改变请求报文，添加请求体中的上传的文件，其中第一个参数为表单名，第二个参数为文件名，第三个参数为文件内容，第四个参数是可选参数，为文件类型(Content-Type)

Example:
```
poc.Post("https://pie.dev/post", poc.appendUploadFile("file", "phpinfo.php", "<?php phpinfo(); ?>", "image/jpeg"))// 向 pie.dev 发起请求，添加POST请求表单，其文件名为phpinfo.php，内容为<?php phpinfo(); ?>，文件类型为image/jpeg
```


#### 定义

`appendUploadFile(fieldName string, fileName string, fileContent any, contentType ...string) PocConfigOption`

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
| r1 | `PocConfigOption` |   |


### body

#### 详细描述
body 是一个请求选项参数，用于指定请求的 body，需要传入一个任意类型的参数，如果不是 string 或者 bytes 会抛出日志并忽略。

Example:
```
poc.Post("https://www.example.com", poc.body("a=b")) // 向 www.example.com 发起请求，请求的 body 为 a=b
```


#### 定义

`body(i any) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### bodyStreamHandler

#### 详细描述
stream 是一个请求选项参数，可以设置一个回调函数，如果 body 读取了，将会复制一份给这个流，在这个流中处理 body 是不会影响最终结果的，一般用于处理较长的 chunk 数据


#### 定义

`bodyStreamHandler(i func(r []byte, closer io.ReadCloser)) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `func(r []byte, closer io.ReadCloser)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### connPool

#### 详细描述
connPool 是一个请求选项参数，用于指定是否使用连接池，默认不使用连接池

Example:
```
rsp, req, err = poc.HTTP(x`POST /post HTTP/1.1
Content-Type: application/json
Host: pie.dev

{"key": "asd"}`, poc.connPool(true)) // 使用连接池发送请求，这在发送多个请求时非常有用
```


#### 定义

`connPool(b bool) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### connectTimeout

#### 详细描述
connectTimeout 是一个请求选项参数，用于指定连接超时时间，默认为15秒

Example:
```
poc.Get("https://www.example.com", poc.timeout(15)) // 向 www.baidu.com 发起请求，读取超时时间为15秒
```


#### 定义

`connectTimeout(f float64) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### context

#### 详细描述
context 是一个请求选项参数，用于指定请求的上下文

Example:
```
ctx = context.New()
poc.Get("https://exmaple.com", poc.withContext(ctx)) // 向 example.com 发起请求，使用指定的上下文
```


#### 定义

`context(ctx context.Context) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### cookie

#### 详细描述
cookie 是一个请求选项参数，用于改变请求报文，添加 Cookie 请求头中的值

Example:
```
poc.Get("https://pie.dev/get", poc.cookie("a=b; c=d")) // 向 pie.dev 发起请求，添加Cookie请求头，其值为a=b; c=d
poc.Get("https://pie.dev/get", poc.cookie("a", "b")) // 向 pie.dev 发起请求，添加Cookie请求头，其值为a=b
```


#### 定义

`cookie(c string, values ...any) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| c | `string` |   |
| values | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### deleteCookie

#### 详细描述
deleteCookie 是一个请求选项参数，用于改变请求报文，删除 Cookie 中的值

Example:
```
poc.HTTP(`GET /get HTTP/1.1
Content-Type: application/json
Cookie: aaa=bbb; ccc=ddd
Host: pie.dev

`, poc.deleteCookie("aaa"))// 向 pie.dev 发起请求，删除Cookie中的aaa
```


#### 定义

`deleteCookie(key string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### deleteForm

#### 详细描述
deleteForm 是一个请求选项参数，用于改变请求报文，删除 POST 请求表单

Example:
```
poc.HTTP(`POST /post HTTP/1.1
Host: pie.dev
Content-Type: multipart/form-data; boundary=------------------------OFHnlKtUimimGcXvRSxgCZlIMAyDkuqsxeppbIFm
Content-Length: 308

--------------------------OFHnlKtUimimGcXvRSxgCZlIMAyDkuqsxeppbIFm
Content-Disposition: form-data; name="aaa"

bbb
--------------------------OFHnlKtUimimGcXvRSxgCZlIMAyDkuqsxeppbIFm
Content-Disposition: form-data; name="ccc"

ddd
--------------------------OFHnlKtUimimGcXvRSxgCZlIMAyDkuqsxeppbIFm--`, poc.deleteForm("aaa")) // 向 pie.dev 发起请求，删除POST请求表单aaa
```


#### 定义

`deleteForm(key string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### deleteHeader

#### 详细描述
deleteHeader 是一个请求选项参数，用于改变请求报文，删除请求头

Example:
```
poc.HTTP(`GET /get HTTP/1.1
Content-Type: application/json
AAA: BBB
Host: pie.dev

`, poc.deleteHeader("AAA"))// 向 pie.dev 发起请求，删除AAA请求头
```


#### 定义

`deleteHeader(key string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### deletePostParam

#### 详细描述
deletePostParam 是一个请求选项参数，用于改变请求报文，删除 POST 请求参数

Example:
```
poc.HTTP(`POST /post HTTP/1.1
Content-Type: application/json
Content-Length: 7
Host: pie.dev

a=b&c=d`, poc.deletePostParam("a")) // 向 pie.dev 发起请求，删除POST请求参数a
```


#### 定义

`deletePostParam(key string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### deleteQueryParam

#### 详细描述
deleteQueryParam 是一个请求选项参数，用于改变请求报文，删除 GET 请求参数

Example:
```
poc.HTTP(`GET /get?a=b&c=d HTTP/1.1
Content-Type: application/json
Host: pie.dev

`, poc.deleteQueryParam("a")) // 向 pie.dev 发起请求，删除GET请求参数a
```


#### 定义

`deleteQueryParam(key string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### dnsNoCache

#### 详细描述
dnsNoCache 是一个请求选项参数，用于指定请求时不使用DNS缓存，默认使用DNS缓存

Example:
```
// 向 example.com 发起请求，不使用DNS缓存
poc.Get("https://exmaple.com", poc.dnsNoCache(true))
```


#### 定义

`dnsNoCache(b bool) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### dnsServer

#### 详细描述
dnsServer 是一个请求选项参数，用于指定请求所使用的DNS服务器，默认使用系统自带的DNS服务器

Example:
```
// 向 example.com 发起请求，使用指定的DNS服务器
poc.Get("https://exmaple.com", poc.dnsServer("8.8.8.8", "1.1.1.1"))
```


#### 定义

`dnsServer(servers ...string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| servers | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### fakeua

#### 详细描述
replaceRandomUserAgent 是一个请求选项参数，用于改变请求报文，修改 User-Agent 请求头为随机的常见请求头

Example:
```
poc.Get("https://pie.dev/basic-auth/admin/password", poc.replaceRandomUserAgent()) // 向 pie.dev 发起请求，修改 User-Agent 请求头为随机的常见请求头
```


#### 定义

`fakeua() PocConfigOption`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### fromPlugin

#### 详细描述


#### 定义

`fromPlugin(b string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### gmTLSPrefer

#### 详细描述


#### 定义

`gmTLSPrefer() PocConfigOption`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### gmTls

#### 详细描述


#### 定义

`gmTls() PocConfigOption`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### gmTlsOnly

#### 详细描述


#### 定义

`gmTlsOnly() PocConfigOption`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### header

#### 详细描述
appendHeader 是一个请求选项参数，用于改变请求报文，添加请求头

Example:
```
poc.Post("https://pie.dev/post", poc.appendHeader("AAA", "BBB")) // 向 pie.dev 发起请求，添加AAA请求头的值为BBB
```


#### 定义

`header(key string, value string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |
| value | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### host

#### 详细描述
host 是一个请求选项参数，用于指定实际请求的 host，如果没有设置该请求选项，则会依据原始请求报文中的Host字段来确定实际请求的host

Example:
```
poc.HTTP(poc.BasicRequest(), poc.host("yaklang.com")) // 实际上请求 yaklang.com
```


#### 定义

`host(h string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### http2

#### 详细描述
http2 是一个请求选项参数，用于指定是否使用 http2 协议，默认为 false 即使用http1协议

Example:
```
poc.Get("https://www.example.com", poc.http2(true), poc.https(true)) // 向 www.example.com 发起请求，使用 http2 协议
```


#### 定义

`http2(isHttp2 bool) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| isHttp2 | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### https

#### 详细描述
https 是一个请求选项参数，用于指定是否使用 https 协议，默认为 false 即使用 http 协议

Example:
```
poc.HTTP(poc.BasicRequest(), poc.https(true)) // 向 example.com 发起请求，使用 https 协议
```


#### 定义

`https(isHttps bool) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| isHttps | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### jsRedirect

#### 详细描述
jsRedirect 是一个请求选项参数，用于指定是否跟踪JS重定向，默认为false即不会自动跟踪JS重定向

Example:
```
poc.HTTP(poc.BasicRequest(), poc.redirectTimes(5), poc.jsRedirect(true)) // 向 www.baidu.com 发起请求，如果响应重定向到其他链接也会自动跟踪JS重定向，最多进行5次重定向
```


#### 定义

`jsRedirect(b bool) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### json

#### 详细描述
json 是一个请求选项参数，用于指定请求的 body 为 json 格式，需要传入一个任意类型的参数，会自动转换为 json 格式

Example:
```
poc.Post("https://www.example.com", poc.json({"a": "b"})) // 向 www.example.com 发起请求，请求的 body 为 {"a": "b"} 并自动设置 Content-Type 为 application/json
```


#### 定义

`json(i any) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### noBodyBuffer

#### 详细描述
noBodyBuffer 是一个请求选项参数，用于指定是否禁用响应体缓冲，设置为 true 时可以避免大文件下载时的内存占用

通常与 WithBodyStreamReaderHandler 配合使用，用于流式处理大文件

Example:
```
poc.Get("https://example.com/large-file.zip",

	poc.noBodyBuffer(true),
	poc.bodyStreamHandler(func(header, body) {
	    // 流式处理响应体，不会将整个文件读入内存
	    io.Copy(file, body)
	}))

```


#### 定义

`noBodyBuffer(b bool) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### noFixContentLength

#### 详细描述
noFixContentLength 是一个请求选项参数，用于指定是否修复响应报文中的 Content-Length 字段，默认为 false 即会自动修复Content-Length字段

Example:
```
poc.HTTP(poc.BasicRequest(), poc.noFixContentLength()) // 向 example.com 发起请求，如果响应报文中的Content-Length字段不正确或不存在	也不会自动修复
```


#### 定义

`noFixContentLength(b bool) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### noRedirect

#### 详细描述
noRedirect 是一个请求选项参数，用于指定是否跟踪重定向，默认为 false 即会自动跟踪重定向

Example:
```
poc.HTTP(poc.BasicRequest(), poc.noRedirect()) // 向 example.com 发起请求，如果响应重定向到其他链接也不会自动跟踪重定向
```


#### 定义

`noRedirect(b bool) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### noredirect

#### 详细描述
noRedirect 是一个请求选项参数，用于指定是否跟踪重定向，默认为 false 即会自动跟踪重定向

Example:
```
poc.HTTP(poc.BasicRequest(), poc.noRedirect()) // 向 example.com 发起请求，如果响应重定向到其他链接也不会自动跟踪重定向
```


#### 定义

`noredirect(b bool) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### params

#### 详细描述
params 是一个请求选项参数，用于在请求时使用传入的值，需要注意的是，它可以很方便地使用 `str.f()`或 f-string 代替

Example:
rsp, req, err = poc.HTTP(x`POST /post HTTP/1.1
Content-Type: application/json
Host: pie.dev

{"key": "{{params(a)}}"}`, poc.params({"a":"bbb"})) // 实际上发送的POST参数为{"key": "bbb"}


#### 定义

`params(i any) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### password

#### 详细描述
password 是一个请求选项参数，用于指定认证时的密码

Example:
```
poc.Get("https://www.example.com", poc.username("admin"), poc.password("admin"))
```


#### 定义

`password(password string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| password | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### port

#### 详细描述
port 是一个请求选项参数，用于指定实际请求的端口，如果没有设置该请求选项，则会依据原始请求报文中的Host字段来确定实际请求的端口

Example:
```
poc.HTTP(poc.BasicRequest(), poc.host("yaklang.com"), poc.port(443), poc.https(true)) // 实际上请求 yaklang.com 的443端口
```


#### 定义

`port(port int) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| port | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### postData

#### 详细描述
postData 是一个请求选项参数，用于指定请求的 body 为 post 数据，需要传入一个任意类型的参数，会自动转换为 post 数据

输入是原始字符串，不会修改 Content-Type

Example:
```
poc.Post("https://www.example.com", poc.postData("a=b")) // 向 www.example.com 发起请求，请求的 body 为 a=b
```


#### 定义

`postData(i string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### postParams

#### 详细描述
postParams 是一个请求选项参数，用于指定请求的 body 为 post 数据，需要传入一个任意类型的参数，会自动转换为 post 数据

输入是 map 类型，会自动转换为 post 数据，同时会自动设置 Content-Type 为 application/x-www-form-urlencoded

Example:
```
poc.Post("https://www.example.com", poc.postParams({"a": "b"})) // 向 www.example.com 发起请求，请求的 body 为 a=b 并自动设置 Content-Type 为 application/x-www-form-urlencoded
```


#### 定义

`postParams(i any) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### postparams

#### 详细描述
postParams 是一个请求选项参数，用于指定请求的 body 为 post 数据，需要传入一个任意类型的参数，会自动转换为 post 数据

输入是 map 类型，会自动转换为 post 数据，同时会自动设置 Content-Type 为 application/x-www-form-urlencoded

Example:
```
poc.Post("https://www.example.com", poc.postParams({"a": "b"})) // 向 www.example.com 发起请求，请求的 body 为 a=b 并自动设置 Content-Type 为 application/x-www-form-urlencoded
```


#### 定义

`postparams(i any) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### proxy

#### 详细描述
proxy 是一个请求选项参数，用于指定请求使用的代理，可以指定多个代理，默认会使用系统代理

Example:
```
poc.HTTP(poc.BasicRequest(), poc.proxy("http://127.0.0.1:7890")) // 向 example.com 发起请求，使用 http://127.0.0.1:7890 代理
```


#### 定义

`proxy(proxies ...string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| proxies | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### query

#### 详细描述
query 是一个请求选项参数，用于指定请求的 query 参数，需要传入一个任意类型的参数，会自动转换为 query 参数

如果输入的是 map 类型，则会自动转换为 query 参数，例如：{&#34;a&#34;: &#34;b&#34;} 转换为 a=b

如果输入的是其他，会把字符串结果直接作为 query 设置

Example:
```
poc.Get("https://www.example.com", poc.query({"a": "b"})) // 向 www.example.com 发起请求，请求的 query 为 a=b, url 为 https://www.example.com?a=b
poc.Get("https://www.example.com", poc.query("a=b")) // 向 www.example.com 发起请求，请求的 query 为 a=b, url 为 https://www.example.com?a=b
poc.Get("https://www.example.com", poc.query("abc")) // 向 www.example.com 发起请求，请求的 query 为 a=b, url 为 https://www.example.com?abc
```


#### 定义

`query(i any) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### randomChunked

#### 详细描述
randomChunked 是一个请求选项参数，用于启用随机分块传输，默认不启用

Example:
```
data = `
POST /post HTTP/1.1
Host: pie.dev
Content-Type: multipart/form-data; boundary=------------------------OFHnlKtUimimGcXvRSxgCZlIMAyDkuqsxeppbIFm
Content-Length: 308

--------------------------OFHnlKtUimimGcXvRSxgCZlIMAyDkuqsxeppbIFm
Content-Disposition: form-data; name="aaa"

bbb
--------------------------OFHnlKtUimimGcXvRSxgCZlIMAyDkuqsxeppbIFm
Content-Disposition: form-data; name="ccc"

ddd
--------------------------OFHnlKtUimimGcXvRSxgCZlIMAyDkuqsxeppbIFm--
`

poc.HTTP(data,poc.randomChunked(true),poc.randomChunkedLength(10,25),poc.randomChunkedDelay(50,200))~
```


#### 定义

`randomChunked(b bool) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### randomChunkedDelay

#### 详细描述
randomChunkedDelay是一个请求选项参数，用于设置随机分块传输的分块延迟范围，默认最小延迟为50毫秒，最大延迟为100毫秒

Example:
```
data = `
POST /post HTTP/1.1
Host: pie.dev
Content-Type: multipart/form-data; boundary=------------------------OFHnlKtUimimGcXvRSxgCZlIMAyDkuqsxeppbIFm
Content-Length: 308

--------------------------OFHnlKtUimimGcXvRSxgCZlIMAyDkuqsxeppbIFm
Content-Disposition: form-data; name="aaa"

bbb
--------------------------OFHnlKtUimimGcXvRSxgCZlIMAyDkuqsxeppbIFm
Content-Disposition: form-data; name="ccc"

ddd
--------------------------OFHnlKtUimimGcXvRSxgCZlIMAyDkuqsxeppbIFm--
`

poc.HTTP(data,poc.randomChunked(true),poc.randomChunkedLength(10,25),poc.randomChunkedDelay(50,200))~
```


#### 定义

`randomChunkedDelay(min int, max int) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| min | `int` |   |
| max | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### randomChunkedLength

#### 详细描述
randomChunkedLength 是一个请求选项参数，用于设置随机分块传输的分块长度范围，默认最小长度为10，最大长度为25

Example:
```
data = `
POST /post HTTP/1.1
Host: pie.dev
Content-Type: multipart/form-data; boundary=------------------------OFHnlKtUimimGcXvRSxgCZlIMAyDkuqsxeppbIFm
Content-Length: 308

--------------------------OFHnlKtUimimGcXvRSxgCZlIMAyDkuqsxeppbIFm
Content-Disposition: form-data; name="aaa"

bbb
--------------------------OFHnlKtUimimGcXvRSxgCZlIMAyDkuqsxeppbIFm
Content-Disposition: form-data; name="ccc"

ddd
--------------------------OFHnlKtUimimGcXvRSxgCZlIMAyDkuqsxeppbIFm--
`

poc.HTTP(data,poc.randomChunked(true),poc.randomChunkedLength(10,25),poc.randomChunkedDelay(50,200))~
```


#### 定义

`randomChunkedLength(min int, max int) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| min | `int` |   |
| max | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### randomChunkedResultHandler

#### 详细描述
randomChunkedResultHandler 是一个请求选项参数，用于设置随机分块传输的结果处理函数

处理函数接受四个参数，id为分块的ID，chunkRaw为分块的原始数据，totalTime为总耗时，chunkSendTime为分块发送的耗时

Example:
```
data = `
POST /post HTTP/1.1
Host: pie.dev
Content-Type: multipart/form-data; boundary=------------------------OFHnlKtUimimGcXvRSxgCZlIMAyDkuqsxeppbIFm
Content-Length: 308

--------------------------OFHnlKtUimimGcXvRSxgCZlIMAyDkuqsxeppbIFm
Content-Disposition: form-data; name="aaa"

bbb
--------------------------OFHnlKtUimimGcXvRSxgCZlIMAyDkuqsxeppbIFm
Content-Disposition: form-data; name="ccc"

ddd
--------------------------OFHnlKtUimimGcXvRSxgCZlIMAyDkuqsxeppbIFm--
`

poc.HTTP(data,poc.randomChunked(true),
poc.randomChunkedLength(10,25),
poc.randomChunkedDelay(50,200),

	poc.randomChunkedResultHandler(func(id,data,totalTime,chunkTime){
		print(sprintf("id:%v\tdata:%s\ttotalTime:%vms\tdelay:%vms\n", id,data,totalTime,chunkTime))
	}))~

```


#### 定义

`randomChunkedResultHandler(f func(id int, chunkRaw []byte, totalTime time.Duration, chunkSendTime time.Duration)) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `func(id int, chunkRaw []byte, totalTime time.Duration, chunkSendTime time.Duration)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### randomJA3

#### 详细描述


#### 定义

`randomJA3(b bool) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### redirect

#### 详细描述
redirect 是一个请求选项参数，用于设置旧风格的 redirectHandler 函数，如果设置了该选项，则会在重定向时调用该函数，如果该函数返回 true，则会继续重定向，否则不会重定向。其第一个参数为当前的请求，第二个参数为既往的多个请求

Example:
```
poc.HTTP(poc.BasicRequest(), poc.redirect(func(current, vias) {
return true
})) // 向 example.com 发起请求，使用自定义 redirectHandler 函数，如果该函数返回 true，则会继续重定向，否则不会重定向
```


#### 定义

`redirect(i func(current *http.Request, vias []*http.Request) bool) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `func(current *http.Request, vias []*http.Request) bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### redirectHandler

#### 详细描述
redirectHandler 是一个请求选项参数，用于作为重定向处理函数，如果设置了该选项，则会在重定向时调用该函数，如果该函数返回 true，则会继续重定向，否则不会重定向。其第一个参数为是否使用 https 协议，第二个参数为原始请求报文，第三个参数为原始响应报文

Example:
```
count = 3
poc.Get("https://pie.dev/redirect/5", poc.redirectHandler(func(https, req, rsp) {
count--
return count >= 0
})) // 向 pie.edv 发起请求，使用自定义 redirectHandler 函数，使用 count 控制，进行最多3次重定向
```


#### 定义

`redirectHandler(i func(isHttps bool, req, rsp []byte) bool) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `func(isHttps bool, req, rsp []byte) bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### redirectTimes

#### 详细描述
redirectTimes 是一个请求选项参数，用于指定最大重定向次数，默认为5次

Example:
```
poc.HTTP(poc.BasicRequest(), poc.redirectTimes(5)) // 向 example.com 发起请求，如果响应重定向到其他链接，则会自动跟踪重定向最多5次
```


#### 定义

`redirectTimes(t int) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| t | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### replaceAllPostParams

#### 详细描述
replaceAllPostParams 是一个请求选项参数，用于改变请求报文，修改所有POST请求参数，如果不存在则会增加，其接收一个map[string]string类型的参数，其中key为POST请求参数名，value为POST请求参数值

Example:
```
poc.Post("https://pie.dev/post", poc.replaceAllPostParams({"a":"b", "c":"d"})) // 向 pie.dev 发起请求，添加POST请求参数a，值为b，POST请求参数c，值为d
```


#### 定义

`replaceAllPostParams(values map[string]string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| values | `map[string]string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### replaceAllPostParamsWithoutEscape

#### 详细描述
replaceAllPostParamsWithoutEscape 是一个请求选项参数，用于改变请求报文，修改所有POST请求参数，如果不存在则会增加，其接收一个map[string]string类型的参数，其中key为POST请求参数名，value为POST请求参数值

与 poc.replaceAllPostParams 类似，但是不会将参数值进行转义

Example:
```
poc.Post("https://pie.dev/post", poc.replaceAllPostParamsWithoutEscape({"a":"{{}}", "c":"%%"})) // 向 pie.dev 发起请求，添加POST请求参数a，值为{{}}，POST请求参数c，值为%%
```


#### 定义

`replaceAllPostParamsWithoutEscape(values map[string]string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| values | `map[string]string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### replaceAllQueryParams

#### 详细描述
replaceAllQueryParams 是一个请求选项参数，用于改变请求报文，修改所有 GET 请求参数，如果不存在则会增加，其接收一个map[string]string 类型的参数，其中 key 为请求参数名，value 为请求参数值

Example:
```
poc.Get("https://pie.dev/get", poc.replaceAllQueryParams({"a":"b", "c":"d"})) // 向 pie.dev 发起请求，添加GET请求参数a，值为b，添加GET请求参数c，值为d
```


#### 定义

`replaceAllQueryParams(values map[string]string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| values | `map[string]string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### replaceAllQueryParamsWithoutEscape

#### 详细描述
replaceAllQueryParamsWithoutEscape 是一个请求选项参数，用于改变请求报文，修改所有 GET 请求参数，如果不存在则会增加，其接收一个map[string]string 类型的参数，其中 key 为请求参数名，value 为请求参数值

与 poc.replaceAllQueryParams 类似，但是不会将参数值进行转义

Example:
```
poc.Get("https://pie.dev/get", poc.replaceAllQueryParamsWithoutEscape({"a":"{{}}", "c":"%%"})) // 向 pie.dev 发起请求，添加GET请求参数a，值为{{}}，添加GET请求参数c，值为%%
```


#### 定义

`replaceAllQueryParamsWithoutEscape(values map[string]string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| values | `map[string]string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### replaceBasicAuth

#### 详细描述
replaceBasicAuth 是一个请求选项参数，用于改变请求报文，修改 Authorization 请求头为基础认证的密文，如果不存在则会增加，实际上是replaceHeader(&#34;Authorization&#34;, codec.EncodeBase64(username + &#34;:&#34; + password))的简写

Example:
```
poc.Get("https://pie.dev/basic-auth/admin/password", poc.replaceBasicAuth("admin", "password")) // 向 pie.dev 发起请求进行基础认证，会得到200响应状态码
```


#### 定义

`replaceBasicAuth(username string, password string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| username | `string` |   |
| password | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### replaceBody

#### 详细描述
replaceBody 是一个请求选项参数，用于改变请求报文，修改请求体内容，第一个参数为修改后的请求体内容，第二个参数为是否分块传输

Example:
```
poc.Post("https://pie.dev/post", poc.replaceBody("a=b", false)) // 向 pie.dev 发起请求，修改请求体内容为a=b
```


#### 定义

`replaceBody(body []byte, chunk bool) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| body | `[]byte` |   |
| chunk | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### replaceCookie

#### 详细描述
replaceCookie 是一个请求选项参数，用于改变请求报文，修改Cookie请求头中的值，如果不存在则会增加

Example:
```
poc.Get("https://pie.dev/get", poc.replaceCookie("aaa", "bbb")) // 向 pie.dev 发起请求，这里没有aaa的cookie值，所以会增加
```


#### 定义

`replaceCookie(key string, value string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |
| value | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### replaceCookies

#### 详细描述
replaceAllCookies 是一个请求选项参数，用于改变请求报文，修改所有Cookie请求头中的值

Example:
```
poc.Get("https://pie.dev/get", poc.replaceAllCookies({"aaa":"bbb", "ccc":"ddd"})) // 向 pie.dev 发起请求，修改aaa的cookie值为bbb，修改ccc的cookie值为ddd
```


#### 定义

`replaceCookies(cookies any) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cookies | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### replaceFirstLine

#### 详细描述
replaceFirstLine 是一个请求选项参数，用于改变请求报文，修改第一行（即请求方法，请求路径，协议版本）

Example:
```
poc.Get("https://exmaple.com", poc.replaceFirstLine("GET /test HTTP/1.1")) // 向 example.com 发起请求，修改请求报文的第一行，请求/test路径
```


#### 定义

`replaceFirstLine(firstLine string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| firstLine | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### replaceFormEncoded

#### 详细描述
replaceFormEncoded 是一个请求选项参数，用于改变请求报文，修改请求体中的表单，如果不存在则会增加

Example:
```
poc.Post("https://pie.dev/post", poc.replaceFormEncoded("aaa", "bbb")) // 向 pie.dev 发起请求，添加POST请求表单，其中aaa为键，bbb为值
```


#### 定义

`replaceFormEncoded(key string, value string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |
| value | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### replaceHeader

#### 详细描述
replaceHeader 是一个请求选项参数，用于改变请求报文，修改修改请求头，如果不存在则会增加

Example:
```
poc.Get("https://pie.dev/get", poc.replaceHeader("AAA", "BBB")) // 向 pie.dev 发起请求，修改AAA请求头的值为BBB，这里没有AAA请求头，所以会增加该请求头
```


#### 定义

`replaceHeader(key string, value string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |
| value | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### replaceHost

#### 详细描述
replaceHost 是一个请求选项参数，用于改变请求报文，修改Host请求头，如果不存在则会增加，实际上是replaceHeader(&#34;Host&#34;, host)的简写

Example:
```
poc.Get("https://yaklang.com/", poc.replaceHost("www.yaklang.com")) // 向 yaklang.com 发起请求，修改Host请求头的值为 www.yaklang.com
```


#### 定义

`replaceHost(host string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| host | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### replaceMethod

#### 详细描述
replaceMethod 是一个请求选项参数，用于改变请求报文，修改请求方法

Example:
```
poc.Options("https://exmaple.com", poc.replaceMethod("GET")) // 向 example.com 发起请求，修改请求方法为GET
```


#### 定义

`replaceMethod(method string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| method | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### replacePath

#### 详细描述
replacePath 是一个请求选项参数，用于改变请求报文，修改请求路径

Example:
```
poc.Get("https://pie.dev/post", poc.replacePath("/get")) // 向 pie.dev 发起请求，实际上请求路径为/get
```


#### 定义

`replacePath(path string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### replacePostParam

#### 详细描述
replacePostParam 是一个请求选项参数，用于改变请求报文，修改 POST 请求参数，如果不存在则会增加

Example:
```
poc.Post("https://pie.dev/post", poc.replacePostParam("a", "b")) // 向 pie.dev 发起请求，添加POST请求参数a，值为b
```


#### 定义

`replacePostParam(key string, value string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |
| value | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### replaceQueryParam

#### 详细描述
replaceQueryParam 是一个请求选项参数，用于改变请求报文，修改 GET 请求参数，如果不存在则会增加

Example:
```
poc.Get("https://pie.dev/get", poc.replaceQueryParam("a", "b")) // 向 pie.dev 发起请求，添加GET请求参数a，值为b
```


#### 定义

`replaceQueryParam(key string, value string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |
| value | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### replaceRandomUserAgent

#### 详细描述
replaceRandomUserAgent 是一个请求选项参数，用于改变请求报文，修改 User-Agent 请求头为随机的常见请求头

Example:
```
poc.Get("https://pie.dev/basic-auth/admin/password", poc.replaceRandomUserAgent()) // 向 pie.dev 发起请求，修改 User-Agent 请求头为随机的常见请求头
```


#### 定义

`replaceRandomUserAgent() PocConfigOption`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### replaceUploadFile

#### 详细描述
replaceUploadFile 是一个请求选项参数，用于改变请求报文，修改请求体中的上传的文件，其中第一个参数为表单名，第二个参数为文件名，第三个参数为文件内容，第四个参数是可选参数，为文件类型(Content-Type)，如果不存在则会增加

Example:
```
poc.Post("https://pie.dev/post", poc.replaceUploadFile("file", "phpinfo.php", "<?php phpinfo(); ?>", "application/x-php")) // 向 pie.dev 发起请求，添加POST请求上传文件，其中file为表单名，phpinfo.php为文件名，<?php phpinfo(); ?>为文件内容，application/x-php为文件类型
```


#### 定义

`replaceUploadFile(formName string, fileName string, fileContent []byte, contentType ...string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| formName | `string` |   |
| fileName | `string` |   |
| fileContent | `[]byte` |   |
| contentType | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### replaceUserAgent

#### 详细描述
replaceUserAgent 是一个请求选项参数，用于改变请求报文，修改 User-Agent 请求头，实际上是replaceHeader(&#34;User-Agent&#34;, userAgent)的简写

Example:
```
poc.Get("https://pie.dev/basic-auth/admin/password", poc.replaceUserAgent("yak-http-client")) // 向 pie.dev 发起请求，修改 User-Agent 请求头为 yak-http-client
```


#### 定义

`replaceUserAgent(ua string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ua | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### retryInStatusCode

#### 详细描述
retryInStatusCode 是一个请求选项参数，用于指定在某些响应状态码的情况下重试，需要搭配 retryTimes 使用

Example:
```
poc.HTTP(poc.BasicRequest(), poc.retryTimes(5), poc.retryInStatusCode(500, 502)) // 向 example.com 发起请求，如果响应状态码500或502则进行重试，最多进行5次重试
```


#### 定义

`retryInStatusCode(codes ...int) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| codes | `...int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### retryMaxWaitTime

#### 详细描述
retryMaxWaitTime 是一个请求选项参数，用于指定重试时最大等待时间，需要搭配 retryTimes 使用，默认为2秒

Example:
```
poc.HTTP(poc.BasicRequest(), poc.retryTimes(5), poc.retryNotInStatusCode(200), poc.retryWaitTime(2)) // 向 example.com 发起请求，如果响应状态码不等于200则进行重试，最多进行5次重试，重试时最多等待2秒
```


#### 定义

`retryMaxWaitTime(f float64) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### retryNotInStatusCode

#### 详细描述
retryNotInStatusCode 是一个请求选项参数，用于指定非某些响应状态码的情况下重试，需要搭配 retryTimes 使用

Example:
```
poc.HTTP(poc.BasicRequest(), poc.retryTimes(5), poc.retryNotInStatusCode(200)) // 向 example.com 发起请求，如果响应状态码不等于200则进行重试，最多进行5次重试
```


#### 定义

`retryNotInStatusCode(codes ...int) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| codes | `...int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### retryTimes

#### 详细描述
retryTimes 是一个请求选项参数，用于指定请求失败时的重试次数，需要搭配 retryInStatusCode 或 retryNotInStatusCode 使用，来设置在什么响应码的情况下重试

Example:
```
poc.HTTP(poc.BasicRequest(), poc.retryTimes(5), poc.retryInStatusCode(500, 502)) // 向 example.com 发起请求，如果响应状态码500或502则进行重试，最多进行5次重试
```


#### 定义

`retryTimes(t int) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| t | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### retryWaitTime

#### 详细描述
retryWaitTime 是一个请求选项参数，用于指定重试时最小等待时间，需要搭配 retryTimes 使用，默认为0.1秒

Example:
```
poc.HTTP(poc.BasicRequest(), poc.retryTimes(5), poc.retryNotInStatusCode(200), poc.retryWaitTime(0.1)) // 向 example.com 发起请求，如果响应状态码不等于200则进行重试，最多进行5次重试，重试时最小等待0.1秒
```


#### 定义

`retryWaitTime(f float64) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### runtimeID

#### 详细描述


#### 定义

`runtimeID(r string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| r | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### save

#### 详细描述
save 是一个请求选项参数，用于指定是否将此次请求的记录保存在数据库中，默认为true即会保存到数据库

Example:
```
poc.Get("https://exmaple.com", poc.save(true)) // 向 example.com 发起请求，会将此次请求保存到数据库中
```


#### 定义

`save(b bool) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### saveHandler

#### 详细描述
saveHandler 是一个请求选项参数，用于设置在将此次请求存入数据库之前的回调函数

Example:
```

	poc.Get("https://exmaple.com", poc.save(func(resp){
		resp.Tags = append(resp.Tags,"test")
	})) // 向 example.com 发起请求，添加test tag

```


#### 定义

`saveHandler(f ...func(response *lowhttp.LowhttpResponse)) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `...func(response *lowhttp.LowhttpResponse)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### saveSync

#### 详细描述
saveSync 是一个请求选项参数，用于指定是否将此次请求的记录保存在数据库中，且同步保存，默认为false即会异步保存到数据库

Example:
```
poc.Get("https://exmaple.com", poc.save(true), poc.saveSync(true)) // 向 example.com 发起请求，会将此次请求保存到数据库中，且同步保存
```


#### 定义

`saveSync(b bool) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### session

#### 详细描述
session 是一个请求选项参数，用于指定请求的session，参数可以是任意类型的值，用此值做标识符从而找到唯一的session。使用session进行请求时会自动管理cookie，这在登录后操作的场景非常有用

Example:
```
poc.Get("https://pie.dev/cookies/set/AAA/BBB", poc.session("test")) // 向 pie.dev 发起第一次请求，这会设置一个名为AAA，值为BBB的cookie
rsp, req, err = poc.Get("https://pie.dev/cookies", poc.session("test")) // 向 pie.dev 发起第二次请求，这个请求会输出所有的cookies，可以看到第一次请求设置的cookie已经存在了
```


#### 定义

`session(i any) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### sni

#### 详细描述
sni 是一个请求选项参数，用于指定使用 tls(https) 协议时的 服务器名称指示(SNI)

Example:
```
poc.Get("https://www.example.com", poc.sni("google.com"))
```


#### 定义

`sni(sni string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| sni | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### source

#### 详细描述
source 是一个请求选项参数，用于在请求记录保存到数据库时标识此次请求的来源

Example:
```
poc.Get("https://exmaple.com", poc.save(true), poc.source("test")) // 向 example.com 发起请求，会将此次请求保存到数据库中，指示此次请求的来源为test
```


#### 定义

`source(i string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### timeout

#### 详细描述
timeout 是一个请求选项参数，用于指定读取超时时间，默认为15秒

Example:
```
poc.Get("https://www.example.com", poc.timeout(15)) // 向 www.baidu.com 发起请求，读取超时时间为15秒
```


#### 定义

`timeout(f float64) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### ua

#### 详细描述
ua 是一个请求选项参数，用于改变请求报文，添加 User-Agent 请求头中的值

Example:
```
poc.Get("https://pie.dev/get", poc.ua("Mozilla/5.0")) // 向 pie.dev 发起请求，添加User-Agent请求头，其值为Mozilla/5.0
```


#### 定义

`ua(ua string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ua | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### uarand

#### 详细描述
replaceRandomUserAgent 是一个请求选项参数，用于改变请求报文，修改 User-Agent 请求头为随机的常见请求头

Example:
```
poc.Get("https://pie.dev/basic-auth/admin/password", poc.replaceRandomUserAgent()) // 向 pie.dev 发起请求，修改 User-Agent 请求头为随机的常见请求头
```


#### 定义

`uarand() PocConfigOption`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### useMitmRule

#### 详细描述
mitmRule 是一个请求选项参数，用于指定是否使用MITM规则，默认为false即不会使用MITM规则，使用规则可以完成流量染色，附加tag与提取数据的功能

Example:
```
poc.Get("https://exmaple.com", poc.save(true), poc.mitmReplacer(true))
```


#### 定义

`useMitmRule(b bool) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### useragent

#### 详细描述
ua 是一个请求选项参数，用于改变请求报文，添加 User-Agent 请求头中的值

Example:
```
poc.Get("https://pie.dev/get", poc.ua("Mozilla/5.0")) // 向 pie.dev 发起请求，添加User-Agent请求头，其值为Mozilla/5.0
```


#### 定义

`useragent(ua string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ua | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### username

#### 详细描述
username 是一个请求选项参数，用于指定认证时的用户名

Example:
```
poc.Get("https://www.example.com", poc.username("admin"), poc.password("admin"))
```


#### 定义

`username(username string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| username | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### websocket

#### 详细描述
websocket 是一个请求选项参数，用于允许将链接升级为 websocket，此时发送的请求应该为 websocket 握手请求

Example:
```
rsp, req, err = poc.HTTP(`GET / HTTP/1.1
Connection: Upgrade
Upgrade: websocket
Sec-Websocket-Version: 13
Sec-Websocket-Extensions: permessage-deflate; client_max_window_bits
Host: echo.websocket.events
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,en-US;q=0.7
Sec-Websocket-Key: L31R1As+71fwuXqhwhABuA==`,

	poc.proxy("http://127.0.0.1:7890"), poc.websocketFromServer(func(rsp, cancel) {
		    dump(rsp)
		}), poc.websocketOnClient(func(c) {
		    c.WriteText("123")
		}), poc.websocket(true),

)
time.Sleep(100)
```


#### 定义

`websocket(w bool) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| w | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### websocketFromServer

#### 详细描述
websocketFromServer 是一个请求选项参数，它接收一个回调函数，这个函数有两个参数，其中第一个参数为服务端发送的数据，第二个参数为取消函数，调用将会强制断开 websocket

Example:
```
rsp, req, err = poc.HTTP(`GET / HTTP/1.1
Connection: Upgrade
Upgrade: websocket
Sec-Websocket-Version: 13
Sec-Websocket-Extensions: permessage-deflate; client_max_window_bits
Host: echo.websocket.events
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,en-US;q=0.7
Sec-Websocket-Key: L31R1As+71fwuXqhwhABuA==`,

	poc.proxy("http://127.0.0.1:7890"), poc.websocketFromServer(func(rsp, cancel) {
		    dump(rsp)
		}), poc.websocketOnClient(func(c) {
		    c.WriteText("123")
		}), poc.websocket(true),

)
time.Sleep(100)
```


#### 定义

`websocketFromServer(w func(i []byte, cancel func())) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| w | `func(i []byte, cancel func())` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### websocketOnClient

#### 详细描述
websocketOnClient 是一个请求选项参数，它接收一个回调函数，这个函数有一个参数，是WebsocketClient结构体，通过该结构体可以向服务端发送数据

Example:
```
rsp, req, err = poc.HTTP(`GET / HTTP/1.1
Connection: Upgrade
Upgrade: websocket
Sec-Websocket-Version: 13
Sec-Websocket-Extensions: permessage-deflate; client_max_window_bits
Host: echo.websocket.events
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,en-US;q=0.7
Sec-Websocket-Key: L31R1As+71fwuXqhwhABuA==`,

	poc.proxy("http://127.0.0.1:7890"), poc.websocketFromServer(func(rsp, cancel) {
		    dump(rsp)
		}), poc.websocketOnClient(func(c) {
		    c.WriteText("123")
		}), poc.websocket(true),

)
time.Sleep(100)
```


#### 定义

`websocketOnClient(w func(c *lowhttp.WebsocketClient)) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| w | `func(c *lowhttp.WebsocketClient)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


### websocketStrictMode

#### 详细描述
websocketStrictMode 是一个请求选项参数，它用于控制是否启用严格模式，如果启用严格模式，则会遵循 RFC 6455 规范

Example:
```
rsp, req, err = poc.HTTP(`GET / HTTP/1.1
Connection: Upgrade
Upgrade: websocket
Sec-Websocket-Version: 13
Sec-Websocket-Extensions: permessage-deflate; client_max_window_bits
Host: echo.websocket.events
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,en-US;q=0.7
Sec-Websocket-Key: L31R1As+71fwuXqhwhABuA==`,
poc.proxy("http://127.0.0.1:7890"), poc.websocketStrictMode(true))

time.Sleep(100)
```


#### 定义

`websocketStrictMode(b bool) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` |   |


