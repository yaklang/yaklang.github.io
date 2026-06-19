# poc

|函数名|函数描述/介绍|
|:------|:--------|
| [poc.AppendHTTPPacketCookie](#appendhttppacketcookie) |AppendHTTPPacketCookie 是一个辅助函数，用于改变请求报文，添加Cookie请求头中的值 参数: - packet: 原始 HTTP 报文字节数组 - key: Cookie 名称 - value: Cookie 的值 返回值: - 修改后的 HTTP 报文字节数组|
| [poc.AppendHTTPPacketFormEncoded](#appendhttppacketformencoded) |AppendHTTPPacketFormEncoded 是一个辅助函数，用于改变请求报文，添加请求体中的表单 参数: - packet: 原始 HTTP 请求报文字节数组 - key: 表单字段名 - value: 表单字段值 返回值: - 修改后的 HTTP 请求报文字节数组|
| [poc.AppendHTTPPacketHeader](#appendhttppacketheader) |AppendHTTPPacketHeader 是一个辅助函数，用于改变请求报文，添加请求头。 无论 header 是否已存在都会直接附加（大小写不敏感行为与 Replace 不冲突）。 参数: - packet: 原始 HTTP 报文字节数组 - headerKey: 请求头名称 - headerV...|
| [poc.AppendHTTPPacketPath](#appendhttppacketpath) |AppendHTTPPacketPath 是一个辅助函数，用于改变请求报文，在现有请求路径后添加请求路径 参数: - packet: 原始 HTTP 请求报文字节数组 - p: 要追加到现有路径后的路径片段 返回值: - 修改后的 HTTP 请求报文字节数组|
| [poc.AppendHTTPPacketPostParam](#appendhttppacketpostparam) |AppendHTTPPacketPostParam 是一个辅助函数，用于改变请求报文，添加POST请求参数 参数: - packet: 原始 HTTP 请求报文字节数组 - key: POST 请求参数名 - value: POST 请求参数值 返回值: - 修改后的 HTTP 请求报文字节数组|
| [poc.AppendHTTPPacketQueryParam](#appendhttppacketqueryparam) |AppendHTTPPacketQueryParam 是一个辅助函数，用于改变请求报文，添加GET请求参数 参数: - packet: 原始 HTTP 请求报文字节数组 - key: GET 请求参数名 - value: GET 请求参数值 返回值: - 修改后的 HTTP 请求报文字节数组|
| [poc.AppendHTTPPacketUploadFile](#appendhttppacketuploadfile) |AppendHTTPPacketUploadFile 是一个辅助函数，用于改变请求报文，添加请求体中的上传的文件，其中第一个参数为原始请求报文，第二个参数为表单名，第三个参数为文件名，第四个参数为文件内容，第五个参数是可选参数，为文件类型(Content-Type) 参数: - packet: 原始...|
| [poc.AutoUnzipPacketEncoding](#autounzippacketencoding) |AutoUnzipPacketEncoding 是一个辅助函数，用于将 HTTP 报文中的传输/内容编码“解开”，以便前端展示/编辑。 - 支持处理 Transfer-Encoding: chunked（会自动反分块，并移除相关头） - 支持处理 Content-Encoding（如 gzip/br...|
| [poc.BasicRequest](#basicrequest) |BasicRequest 返回一个基本的 HTTP 请求，用于测试，它实际上返回一个b&#34;GET / HTTP/1.1\r\nHost: example.com\r\n\r\n&#34; 参数: - 无 返回值: - 基本 HTTP 请求报文字节数组|
| [poc.BasicResponse](#basicresponse) |BasicResponse 返回一个基本的 HTTP 响应，用于测试，它实际上返回一个b&#34;HTTP/1.1 200 OK\r\nContent-Length: 0\r\n\r\n&#34; 参数: - 无 返回值: - 基本 HTTP 响应报文字节数组|
| [poc.BuildRequest](#buildrequest) |BuildRequest 是一个用于辅助构建请求报文的工具函数，它第一个参数可以接收 []byte, string, http.Request 结构体，接下来可以接收零个到多个请求选项，修改请求报文的选项将被作用，最后返回构建好的请求报文 参数: - i: 请求源，可为原始报文 []byte/str...|
| [poc.CurlToHTTPRequest](#curltohttprequest) |CurlToHTTPRequest 尝试将curl命令转换为HTTP请求报文，其返回值为bytes，即转换后的HTTP请求报文 参数: - command: curl 命令字符串 返回值: - 转换后的 HTTP 请求报文字节数组|
| [poc.Delete](#delete) |Delete 向指定 URL 发送 DELETE 请求并且返回响应结构体，请求结构体以及错误，它的第一个参数是 URL 字符串，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如对设置超时时间，或者修改请求报文等 关于结构体中的可用字段和方法可以使用 desc 函数进行查看 参数: - ...|
| [poc.DeleteHTTPPacketCookie](#deletehttppacketcookie) |DeleteHTTPPacketCookie 是一个辅助函数，用于改变请求报文，删除Cookie中的值 参数: - packet: 原始 HTTP 报文字节数组 - key: 要删除的 Cookie 名称 返回值: - 修改后的 HTTP 报文字节数组|
| [poc.DeleteHTTPPacketForm](#deletehttppacketform) |DeleteHTTPPacketForm 是一个辅助函数，用于改变请求报文，删除POST请求表单 参数: - packet: 原始 HTTP 请求报文字节数组 - key: 要删除的表单字段名 返回值: - 修改后的 HTTP 请求报文字节数组|
| [poc.DeleteHTTPPacketHeader](#deletehttppacketheader) |DeleteHTTPPacketHeader 是一个辅助函数，用于改变请求报文，删除请求头。 默认情况下匹配会忽略 Header 名大小写，若需严格匹配可使用 DeleteHTTPPacketHeaderStrict。 参数: - packet: 原始 HTTP 报文字节数组 - headerKey...|
| [poc.DeleteHTTPPacketPostParam](#deletehttppacketpostparam) |DeleteHTTPPacketPostParam 是一个辅助函数，用于改变请求报文，删除POST请求参数 参数: - packet: 原始 HTTP 请求报文字节数组 - key: 要删除的 POST 请求参数名 返回值: - 修改后的 HTTP 请求报文字节数组|
| [poc.DeleteHTTPPacketQueryParam](#deletehttppacketqueryparam) |DeleteHTTPPacketQueryParam 是一个辅助函数，用于改变请求报文，删除GET请求参数 参数: - packet: 原始 HTTP 请求报文字节数组 - key: 要删除的 GET 请求参数名 返回值: - 修改后的 HTTP 请求报文字节数组|
| [poc.Do](#do) |Do 向指定 URL 发送指定请求方法的请求并且返回响应结构体，请求结构体以及错误，它的是第一个参数是请求方法，第二个参数 URL 字符串，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如设置超时时间，或者修改请求报文等 关于结构体中的可用字段和方法可以使用 desc 函数进行查看 参...|
| [poc.Download](#download) |Download 从指定 URL 下载文件并保存到本地，返回保存的文件路径和错误 支持进度回调、完成回调、自定义文件名和保存目录等选项 参数: - urlStr: 目标文件的 URL 字符串 - opts: 可选的请求/下载选项，例如 poc.downloadProgress、poc.downloa...|
| [poc.DownloadWithMethod](#downloadwithmethod) |DownloadWithMethod 使用指定的 HTTP 方法从 URL 下载文件 参数: - method: HTTP 请求方法，如 GET、POST - urlStr: 目标文件的 URL 字符串 - opts: 可选的请求/下载选项，例如 poc.body、poc.downloadDir 返...|
| [poc.ExtractPostParams](#extractpostparams) |ExtractPostParams 尝试将 HTTP 请求报文中的各种 POST 参数(普通格式，表单格式，JSON格式，XML格式)提取出来，返回提取出来的 POST 参数与错误 参数: - raw: 原始 HTTP 请求报文字节数组 返回值: - 提取出来的 POST 参数键值对表 - 错误信息...|
| [poc.FixHTTPPacketCRLF](#fixhttppacketcrlf) |FixHTTPPacketCRLF 修复一个HTTP报文的CRLF问题（正常的报文每行末尾为\r\n，但是某些报文可能是有\n），如果noFixLength为true，则不会修复Content-Length，否则会尝试修复Content-Length 参数: - raw: 原始 HTTP 报文字节数...|
| [poc.FixHTTPRequest](#fixhttprequest) |FixHTTPRequest 尝试对传入的HTTP请求报文进行修复，并返回修复后的请求 参数: - raw: 原始 HTTP 请求报文字节数组 返回值: - 修复后的 HTTP 请求报文字节数组|
| [poc.FixHTTPResponse](#fixhttpresponse) |FixHTTPResponse 尝试对传入的 HTTP 响应报文进行修复，并返回修复后的响应 参数: - r: 原始 HTTP 响应报文字节数组 返回值: - 修复后的 HTTP 响应报文字节数组|
| [poc.Get](#get) |Get 向指定 URL 发送 GET 请求并且返回响应结构体，请求结构体以及错误，它的第一个参数是 URL 字符串，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如对设置超时时间，或者修改请求报文等 关于结构体中的可用字段和方法可以使用 desc 函数进行查看 参数: - urlStr...|
| [poc.GetAllHTTPPacketPostParams](#getallhttppacketpostparams) |GetAllHTTPPacketPostParams 是一个辅助函数，用于获取请求报文中的所有POST请求参数，其返回值为map[string]string，其中键为参数名，值为参数值 参数: - packet: 原始 HTTP 请求报文字节数组 返回值: - 所有 POST 请求参数的键值对映射|
| [poc.GetAllHTTPPacketPostParamsFull](#getallhttppacketpostparamsfull) |GetAllHTTPPacketPostParamsFull 是一个辅助函数，用于获取请求报文中的所有POST请求参数，其返回值为map[string][]string，其中键为参数名，值为参数值切片 参数: - packet: 原始 HTTP 请求报文字节数组 返回值: - 所有 POST 请求参...|
| [poc.GetAllHTTPPacketQueryParams](#getallhttppacketqueryparams) |GetAllHTTPPacketQueryParams 是一个辅助函数，用于获取请求报文中的所有GET请求参数，其返回值为map[string]string，其中键为参数名，值为参数值 参数: - packet: 原始 HTTP 请求报文字节数组 返回值: - 所有 GET 请求参数的键值对映射|
| [poc.GetAllHTTPPacketQueryParamsFull](#getallhttppacketqueryparamsfull) |GetAllHTTPPacketQueryParamsFull 是一个辅助函数，用于获取请求报文中的所有GET请求参数，其返回值为map[string][]string，其中键为参数名，值为参数值切片 参数: - packet: 原始 HTTP 请求报文字节数组 返回值: - 所有 GET 请求参数...|
| [poc.GetHTTPPacketBody](#gethttppacketbody) |GetHTTPPacketBody 是一个辅助函数，用于获取请求报文中的请求体，其返回值为bytes 参数: - packet: 原始 HTTP 报文字节数组 返回值: - 报文主体内容字节数组|
| [poc.GetHTTPPacketContentType](#gethttppacketcontenttype) |GetHTTPPacketContentType 是一个辅助函数，用于获取请求报文中的Content-Type请求头，其返回值为string 参数: - packet: 原始 HTTP 报文字节数组 返回值: - Content-Type 请求头的值|
| [poc.GetHTTPPacketCookie](#gethttppacketcookie) |GetHTTPPacketCookie 是一个辅助函数，用于获取请求报文中Cookie值，其返回值为string 参数: - packet: 原始 HTTP 报文字节数组 - key: Cookie 名称 返回值: - 匹配该名称的 Cookie 值|
| [poc.GetHTTPPacketCookieFirst](#gethttppacketcookiefirst) |GetHTTPPacketCookieFirst 是一个辅助函数，用于获取请求报文中Cookie值，其返回值为string 参数: - packet: 原始 HTTP 报文字节数组 - key: Cookie 名称 返回值: - 匹配该名称的第一个 Cookie 值|
| [poc.GetHTTPPacketCookieValues](#gethttppacketcookievalues) |GetHTTPPacketCookieValues 是一个辅助函数，用于获取请求报文中Cookie值，其返回值为[]string，这是因为Cookie可能存在多个相同键名的值 参数: - packet: 原始 HTTP 报文字节数组 - key: Cookie 名称 返回值: - 匹配该名称的所有 ...|
| [poc.GetHTTPPacketCookies](#gethttppacketcookies) |GetHTTPPacketCookies 是一个辅助函数，用于获取请求报文中所有Cookie值，其返回值为map[string]string 参数: - packet: 原始 HTTP 报文字节数组 返回值: - 所有 Cookie 的键值对映射|
| [poc.GetHTTPPacketCookiesFull](#gethttppacketcookiesfull) |GetHTTPPacketCookiesFull 是一个辅助函数，用于获取请求报文中所有Cookie值，其返回值为map[string][]string，这是因为Cookie可能存在多个相同键名的值 参数: - packet: 原始 HTTP 报文字节数组 返回值: - 所有 Cookie 的键到值...|
| [poc.GetHTTPPacketFirstLine](#gethttppacketfirstline) |GetHTTPPacketFirstLine 是一个辅助函数，用于获取 HTTP 报文中第一行的值，其返回值为string，string，string 在请求报文中，其三个返回值分别为：请求方法，请求URI，协议版本 在响应报文中，其三个返回值分别为：协议版本，状态码，状态码描述 参数: - pac...|
| [poc.GetHTTPPacketHeader](#gethttppacketheader) |GetHTTPPacketHeader 是一个辅助函数，用于获取请求报文中指定的请求头，其返回值为string 参数: - packet: 原始 HTTP 报文字节数组 - key: 请求头名称 返回值: - 匹配该名称的请求头的值|
| [poc.GetHTTPPacketHeaders](#gethttppacketheaders) |GetHTTPPacketHeaders 是一个辅助函数，用于获取请求报文中所有请求头，其返回值为map[string]string 参数: - packet: 原始 HTTP 报文字节数组 返回值: - 所有请求头的键值对映射|
| [poc.GetHTTPPacketHeadersFull](#gethttppacketheadersfull) |GetHTTPPacketHeadersFull 是一个辅助函数，用于获取请求报文中所有请求头，其返回值为map[string][]string，这是因为请求头可能存在多个相同键名的值 参数: - packet: 原始 HTTP 报文字节数组 返回值: - 所有请求头的键到值列表的映射|
| [poc.GetHTTPPacketPostParam](#gethttppacketpostparam) |GetHTTPPacketPostParam 是一个辅助函数，用于获取请求报文中指定的POST请求参数，其返回值为string 参数: - packet: 原始 HTTP 请求报文字节数组 - key: POST 请求参数名 返回值: - 匹配该名称的 POST 请求参数的值|
| [poc.GetHTTPPacketQueryParam](#gethttppacketqueryparam) |GetHTTPPacketQueryParam 是一个辅助函数，用于获取请求报文中指定的GET请求参数，其返回值为string 参数: - packet: 原始 HTTP 请求报文字节数组 - key: GET 请求参数名 返回值: - 匹配该名称的 GET 请求参数的值|
| [poc.GetHTTPRequestMethod](#gethttprequestmethod) |GetHTTPRequestMethod 是一个辅助函数，用于获取请求报文中的请求方法，其返回值为string 参数: - packet: 原始 HTTP 请求报文字节数组 返回值: - 请求方法，如 GET、POST|
| [poc.GetHTTPRequestPath](#gethttprequestpath) |GetHTTPRequestPath 是一个辅助函数，用于获取请求报文中的路径，返回值是 string，包含 query 参数: - packet: 原始 HTTP 请求报文字节数组 返回值: - 包含 query 的请求路径|
| [poc.GetHTTPRequestPathWithoutQuery](#gethttprequestpathwithoutquery) |GetHTTPRequestPathWithoutQuery 是一个辅助函数，用于获取请求报文中的路径，返回值是 string，不包含 query 参数: - packet: 原始 HTTP 请求报文字节数组 返回值: - 不包含 query 的请求路径|
| [poc.GetStatusCodeFromResponse](#getstatuscodefromresponse) |GetStatusCodeFromResponse 是一个辅助函数，用于获取响应报文中的状态码，其返回值为int 参数: - packet: 原始 HTTP 响应报文字节数组 返回值: - 响应状态码|
| [poc.GetUrlFromHTTPRequest](#geturlfromhttprequest) |GetUrlFromHTTPRequest 是一个辅助函数，用于获取请求报文中的URL，其返回值为string 参数: - scheme: URL 协议，如 http、https，留空默认为 http - packet: 原始 HTTP 请求报文字节数组 返回值: - 拼接后的完整 URL|
| [poc.HTTP](#http) |HTTP 发送请求并且返回原始响应报文，原始请求报文以及错误，它的第一个参数可以接收 []byte, string, http.Request 结构体，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如设置超时时间，或者修改请求报文等 参数: - i: 请求源，可为原始报文 []byte...|
| [poc.HTTPEx](#httpex) |HTTPEx 与 HTTP 类似，它发送请求并且返回响应结构体，请求结构体以及错误，它的第一个参数可以接收 []byte, string, http.Request 结构体，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如设置超时时间，或者修改请求报文等 关于结构体中的可用字段和方法可...|
| [poc.HTTPPacketForceChunked](#httppacketforcechunked) |HTTPPacketForceChunked 将一个HTTP报文的body强制转换为chunked编码 参数: - raw: 原始 HTTP 报文字节数组 返回值: - 转换为 chunked 编码后的 HTTP 报文字节数组|
| [poc.HTTPRequestToCurl](#httprequesttocurl) |HTTPRequestToCurl 尝试将 HTTP 请求报文转换为curl命令。第一个参数为是否使用HTTPS，第二个参数为HTTP请求报文，其返回值为string，即转换后的curl命令 参数: - https: 是否使用 HTTPS - raw: HTTP 请求报文，可为 string 或 b...|
| [poc.Head](#head) |Head 向指定 URL 发送 HEAD 请求并且返回响应结构体，请求结构体以及错误，它的第一个参数是 URL 字符串，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如对设置超时时间，或者修改请求报文等 关于结构体中的可用字段和方法可以使用 desc 函数进行查看 参数: - urlS...|
| [poc.IsResponse](#isresponse) |IsResp 判断传入的数据是否为 HTTP 响应报文 参数: - raw: 待判断的数据，可为字节数组或字符串 返回值: - 是否为 HTTP 响应报文|
| [poc.Options](#options) |Options 向指定 URL 发送 OPTIONS 请求并且返回响应结构体，请求结构体以及错误，它的第一个参数是 URL 字符串，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如对设置超时时间，或者修改请求报文等 关于结构体中的可用字段和方法可以使用 desc 函数进行查看 参数: ...|
| [poc.ParseBytesToHTTPRequest](#parsebytestohttprequest) |ParseBytesToHTTPRequest 将字节数组解析为 HTTP 请求 参数: - raw: 原始 HTTP 请求报文字节数组 返回值: - 解析得到的 HTTP 请求对象 - 错误信息，解析失败时返回非空|
| [poc.ParseBytesToHTTPResponse](#parsebytestohttpresponse) |ParseBytesToHTTPResponse 将字节数组解析为 HTTP 响应 参数: - res: 原始 HTTP 响应报文字节数组 返回值: - 解析得到的 HTTP 响应对象 - 错误信息，解析失败时返回非空|
| [poc.ParseMultiPartFormWithCallback](#parsemultipartformwithcallback) |ParseMultiPartFormWithCallback 是一个辅助函数，用于尝试解析请求报文体中的表单并进行回调 参数: - req: 原始 HTTP 请求报文字节数组 - callback: 表单分块回调函数，参数为每个 multipart.Part 返回值: - 错误信息，解析失败时返回非...|
| [poc.ParseUrlToHTTPRequestRaw](#parseurltohttprequestraw) |ParseUrlToHTTPRequestRaw 将URL解析为原始 HTTP 请求报文，返回是否为 HTTPS，原始请求报文与错误 参数: - method: 请求方法，如 GET、POST - i: 目标 URL，可为字符串或可转换为字符串的对象 返回值: - 是否为 HTTPS - 原始 HT...|
| [poc.Post](#post) |Post 向指定 URL 发送 POST 请求并且返回响应结构体，请求结构体以及错误，它的第一个参数是 URL 字符串，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如对设置超时时间，或者修改请求报文等 关于结构体中的可用字段和方法可以使用 desc 函数进行查看 参数: - urlS...|
| [poc.RemoveSession](#removesession) |RemoveSession 清除指定的 session，删除其关联的 cookiejar 这在完成一系列请求后清理资源时很有用 参数: - session: 要清除的 session 标识符|
| [poc.ReplaceAllHTTPPacketPostParams](#replaceallhttppacketpostparams) |ReplaceAllHTTPPacketPostParams 是一个辅助函数，用于改变请求报文，修改所有 POST 请求参数，如果不存在则会增加，其接收一个 map[string]string 类型的参数，其中 key 为 POST 请求参数名，value 为 POST 请求参数值 参数: - pa...|
| [poc.ReplaceAllHTTPPacketPostParamsWithoutEscape](#replaceallhttppacketpostparamswithoutescape) |ReplaceAllHTTPPacketPostParamsWithoutEscape 是一个辅助函数，用于改变请求报文，修改所有 POST 请求参数，如果不存在则会增加，其接收一个 map[string]string 类型的参数，其中 key 为 POST 请求参数名，value 为 POST 请...|
| [poc.ReplaceAllHTTPPacketQueryParams](#replaceallhttppacketqueryparams) |ReplaceAllHTTPPacketQueryParams 是一个辅助函数，用于改变请求报文，修改所有 GET 请求参数，如果不存在则会增加，其接收一个 map[string]string 类型的参数，其中 key 为请求参数名，value 为请求参数值 参数: - packet: 原始 HTT...|
| [poc.ReplaceAllHTTPPacketQueryParamsWithoutEscape](#replaceallhttppacketqueryparamswithoutescape) |ReplaceAllHTTPPacketQueryParamsWithoutEscape 是一个辅助函数，用于改变请求报文，修改所有 GET 请求参数，如果不存在则会增加，其接收一个 map[string]string 类型的参数，其中 key 为请求参数名，value 为请求参数值 与 poc.R...|
| [poc.ReplaceBody](#replacebody) |ReplaceBody 将原始 HTTP 请求报文中的 body 替换为指定的 body，并指定是否为 chunked，返回新的 HTTP 请求报文 参数: - raw: 原始 HTTP 报文字节数组 - body: 替换后的报文主体内容 - chunk: 是否使用 chunked 传输编码 返回值...|
| [poc.ReplaceHTTPPacketBasicAuth](#replacehttppacketbasicauth) |ReplaceHTTPPacketBasicAuth 是一个辅助函数，用于改变请求报文，修改Authorization请求头为基础认证的密文，如果不存在则会增加，实际上是ReplaceHTTPPacketHeader(&#34;Authorization&#34;, codec.EncodeBase64(usern...|
| [poc.ReplaceHTTPPacketBody](#replacehttppacketbody) |ReplaceHTTPPacketBody 是一个辅助函数，用于改变 HTTP 报文，修改 HTTP 报文主体内容，第一个参数为原始 HTTP 报文，第二个参数为修改的报文主体内容 参数: - packet: 原始 HTTP 报文字节数组 - body: 修改后的报文主体内容 返回值: - 修改后的...|
| [poc.ReplaceHTTPPacketCookie](#replacehttppacketcookie) |ReplaceHTTPPacketCookie 是一个辅助函数，用于改变请求报文，修改Cookie请求头中的值，如果不存在则会增加 参数: - packet: 原始 HTTP 报文字节数组 - key: Cookie 名称 - value: Cookie 的值 返回值: - 修改后的 HTTP 报文...|
| [poc.ReplaceHTTPPacketCookies](#replacehttppacketcookies) |ReplaceHTTPPacketCookies 是一个辅助函数，用于改变请求报文，修改Cookie请求头 参数: - packet: 原始 HTTP 报文字节数组 - m: Cookie 键值对表 返回值: - 修改后的 HTTP 报文字节数组|
| [poc.ReplaceHTTPPacketFirstLine](#replacehttppacketfirstline) |ReplaceHTTPPacketFirstLine 是一个辅助，用于改变请求报文，修改第一行（即请求方法，请求路径，协议版本） 参数: - packet: 原始 HTTP 请求报文字节数组 - firstLine: 新的请求行，如 &#34;GET /test HTTP/1.1&#34; 返回值: - 修改后的 ...|
| [poc.ReplaceHTTPPacketFormEncoded](#replacehttppacketformencoded) |ReplaceHTTPPacketFormEncoded 是一个辅助函数，用于改变请求报文，替换请求体中的表单，如果不存在则会增加 参数: - packet: 原始 HTTP 请求报文字节数组 - key: 表单字段名 - value: 表单字段值 返回值: - 修改后的 HTTP 请求报文字节数组|
| [poc.ReplaceHTTPPacketHeader](#replacehttppacketheader) |ReplaceHTTPPacketHeader 是一个辅助函数，用于改变请求报文，修改请求头，如果不存在则会增加。 默认情况下（ignoreCase=true）会忽略大小写匹配，若需要严格匹配可使用 ReplaceHTTPPacketHeaderStrict。 参数: - packet: 原始 HT...|
| [poc.ReplaceHTTPPacketHost](#replacehttppackethost) |ReplaceHTTPPacketHost 是一个辅助函数，用于改变请求报文，修改Host请求头，如果不存在则会增加，实际上是ReplaceHTTPPacketHeader(&#34;Host&#34;, host)的简写 参数: - packet: 原始 HTTP 请求报文字节数组 - host: 新的 Host...|
| [poc.ReplaceHTTPPacketJsonBody](#replacehttppacketjsonbody) |ReplaceHTTPPacketJsonBody 是一个辅助函数，用于改变 HTTP 报文，修改 HTTP 报文主体内容（ json 格式），第一个参数为原始 HTTP 报文，第二个参数为修改的报文主体内容（ map 对象） 参数: - packet: 原始 HTTP 报文字节数组 - jsonM...|
| [poc.ReplaceHTTPPacketMethod](#replacehttppacketmethod) |ReplaceHTTPPacketMethod 是一个辅助函数，用于改变请求报文，修改请求方法 参数: - packet: 原始 HTTP 请求报文字节数组 - newMethod: 新的请求方法，如 GET、POST 返回值: - 修改后的 HTTP 请求报文字节数组|
| [poc.ReplaceHTTPPacketPath](#replacehttppacketpath) |ReplaceHTTPPacketPath 是一个辅助函数，用于改变请求报文，修改请求路径 参数: - packet: 原始 HTTP 请求报文字节数组 - p: 新的请求路径 返回值: - 修改后的 HTTP 请求报文字节数组|
| [poc.ReplaceHTTPPacketPathFunc](#replacehttppacketpathfunc) |ReplaceHTTPPacketPathFunc 是一个辅助函数，使用回调改变请求报文中的请求路径 参数: - packet: 原始 HTTP 请求报文字节数组 - callback: 路径处理回调函数，参数为原路径，返回新路径 返回值: - 修改后的 HTTP 请求报文字节数组|
| [poc.ReplaceHTTPPacketPostParam](#replacehttppacketpostparam) |ReplaceHTTPPacketPostParam 是一个辅助函数，用于改变请求报文，修改POST请求参数，如果不存在则会增加 参数: - packet: 原始 HTTP 请求报文字节数组 - key: POST 请求参数名 - value: POST 请求参数值 返回值: - 修改后的 HTTP...|
| [poc.ReplaceHTTPPacketQueryParam](#replacehttppacketqueryparam) |ReplaceHTTPPacketQueryParam 是一个辅助函数，用于改变请求报文，修改GET请求参数，如果不存在则会增加 参数: - packet: 原始 HTTP 请求报文字节数组 - key: GET 请求参数名 - value: GET 请求参数值 返回值: - 修改后的 HTTP 请...|
| [poc.ReplaceHTTPPacketQueryParamWithoutEscape](#replacehttppacketqueryparamwithoutescape) |ReplaceHTTPPacketQueryParamWithoutEscape 是一个辅助函数，用于改变请求报文，修改所有 GET 请求参数，如果不存在则会增加，其接收一个 map[string]string 类型的参数，其中 key 为请求参数名，value 为请求参数值 与 poc.Repla...|
| [poc.ReplaceHTTPPacketUploadFile](#replacehttppacketuploadfile) |ReplaceHTTPPacketUploadFile 是一个辅助函数，用于改变请求报文，替换请求体中的上传的文件，其中第一个参数为原始请求报文，第二个参数为表单名，第三个参数为文件名，第四个参数为文件内容，第五个参数是可选参数，为文件类型(Content-Type)，如果表单名不存在则会增加 参数...|
| [poc.Split](#split) |Split 切割 HTTP 报文，返回响应头和响应体，其第一个参数是原始HTTP报文，接下来可以接收零个到多个回调函数，其在每次解析到请求头时回调 参数: - raw: 原始 HTTP 报文字节数组 - hook: 可选的回调函数，每解析到一行请求头时回调 返回值: - 报文头部字符串 - 报文体字...|
| [poc.Websocket](#websocket) |Websocket 实际上等价于`poc.HTTP(..., poc.websocket(true))`，用于快速发送请求并建立websocket连接并且返回原始响应报文，原始请求报文以及错误 参数: - raw: websocket 握手请求源，可为原始报文 []byte/string 或 *ht...|
| [poc.afterSaveHandler](#aftersavehandler) |afterSaveHandler 是一个请求选项参数，用于设置在此次请求记录保存到数据库之后的回调函数 参数: - f: 一个或多个回调函数，参数为已保存的 HTTPFlow 对象 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.appendCookie](#appendcookie) |appendCookie 是一个请求选项参数，用于改变请求报文，添加 Cookie 请求头中的值 参数: - key: Cookie 名称 - value: Cookie 的值 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.appendFormEncoded](#appendformencoded) |appendFormEncoded 是一个请求选项参数，用于改变请求报文，添加请求体中的表单 参数: - key: 表单字段名 - value: 表单字段值 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.appendHeader](#appendheader) |appendHeader 是一个请求选项参数，用于改变请求报文，添加请求头 参数: - key: 请求头名称 - value: 请求头的值 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.appendHeaders](#appendheaders) |appendHeaders 是一个请求选项参数，用于改变请求报文，添加请求头 参数: - headers: 请求头键值对表，会逐个追加 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.appendPath](#appendpath) |appendPath 是一个请求选项参数，用于改变请求报文，在现有请求路径后添加请求路径 参数: - path: 要追加到现有路径后的路径片段 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.appendPostParam](#appendpostparam) |appendPostParam 是一个请求选项参数，用于改变请求报文，添加 POST 请求参数 参数: - key: POST 请求参数名 - value: POST 请求参数值 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.appendQueryParam](#appendqueryparam) |appendQueryParam 是一个请求选项参数，用于改变请求报文，添加 GET 请求参数 参数: - key: GET 请求参数名 - value: GET 请求参数值 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.appendUploadFile](#appenduploadfile) |appendUploadFile 是一个请求选项参数，用于改变请求报文，添加请求体中的上传的文件，其中第一个参数为表单名，第二个参数为文件名，第三个参数为文件内容，第四个参数是可选参数，为文件类型(Content-Type) 参数: - fieldName: 表单字段名 - fileName: 文件...|
| [poc.body](#body) |body 是一个请求选项参数，用于指定请求的 body，需要传入一个任意类型的参数，如果不是 string 或者 bytes 会抛出日志并忽略。 参数: - i: 请求体内容，需为 string 或 bytes 类型 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.bodyStreamHandler](#bodystreamhandler) |bodyStreamHandler 是一个请求选项参数，可以设置一个回调函数，如果 body 读取了，将会复制一份给这个流，在这个流中处理 body 是不会影响最终结果的，一般用于处理较长的 chunk 数据 参数: - i: 流式处理回调函数，参数依次为响应头字节、响应体读取流 返回值: - 一个...|
| [poc.connPool](#connpool) |connPool 是一个请求选项参数，用于指定是否使用连接池，默认不使用连接池 参数: - b: 是否使用连接池 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.connectTimeout](#connecttimeout) |connectTimeout 是一个请求选项参数，用于指定连接超时时间，默认为15秒 参数: - f: 连接超时时间，单位为秒 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.context](#context) |context 是一个请求选项参数，用于指定请求的上下文 参数: - ctx: 上下文对象，可用于取消请求 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.cookie](#cookie) |cookie 是一个请求选项参数，用于改变请求报文，添加 Cookie 请求头中的值 参数: - c: Cookie 字符串，或当提供 values 时作为 Cookie 名称 - values: 可选，Cookie 的值（提供时 c 作为名称） 返回值: - 一个请求选项，作为可变参数传入 poc...|
| [poc.deleteCookie](#deletecookie) |deleteCookie 是一个请求选项参数，用于改变请求报文，删除 Cookie 中的值 参数: - key: 要删除的 Cookie 名称 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.deleteForm](#deleteform) |deleteForm 是一个请求选项参数，用于改变请求报文，删除 POST 请求表单 参数: - key: 要删除的表单字段名 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.deleteHeader](#deleteheader) |deleteHeader 是一个请求选项参数，用于改变请求报文，删除请求头 参数: - key: 要删除的请求头名称 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.deletePostParam](#deletepostparam) |deletePostParam 是一个请求选项参数，用于改变请求报文，删除 POST 请求参数 参数: - key: 要删除的 POST 请求参数名 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.deleteQueryParam](#deletequeryparam) |deleteQueryParam 是一个请求选项参数，用于改变请求报文，删除 GET 请求参数 参数: - key: 要删除的 GET 请求参数名 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.disableSession](#disablesession) |disableSession 为 true 时不自动分配 session，也不启用 cookie jar（适合无需 cookie 的探测请求） 参数: - b: 是否禁用 session 与 cookie jar 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.dnsNoCache](#dnsnocache) |dnsNoCache 是一个请求选项参数，用于指定请求时不使用DNS缓存，默认使用DNS缓存 参数: - b: 是否禁用 DNS 缓存 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.dnsServer](#dnsserver) |dnsServer 是一个请求选项参数，用于指定请求所使用的DNS服务器，默认使用系统自带的DNS服务器 参数: - servers: 一个或多个 DNS 服务器地址 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.downloadDir](#downloaddir) |downloadDir 是一个下载选项参数，用于指定文件保存目录 如果不指定，将保存到默认的 yakit 下载目录 参数: - dir: 文件保存目录 返回值: - 一个请求选项，作为可变参数传入 poc.Download 等|
| [poc.downloadFilename](#downloadfilename) |downloadFilename 是一个下载选项参数，用于手动指定保存的文件名 如果不指定，将自动从 Content-Disposition 响应头或 URL 路径中提取文件名 参数: - filename: 指定保存的文件名 返回值: - 一个请求选项，作为可变参数传入 poc.Download ...|
| [poc.downloadFinished](#downloadfinished) |downloadFinished 是一个下载选项参数，用于设置下载完成回调函数 回调函数接收一个参数：保存的文件完整路径 参数: - callback: 完成回调函数，参数为已保存文件的完整路径 返回值: - 一个请求选项，作为可变参数传入 poc.Download 等|
| [poc.downloadProgress](#downloadprogress) |downloadProgress 是一个下载选项参数，用于设置下载进度回调函数 回调函数接收三个参数：已下载字节数、总字节数、下载百分比(0-100) 参数: - callback: 进度回调函数，参数依次为已下载字节数、总字节数、百分比 返回值: - 一个请求选项，作为可变参数传入 poc.Dow...|
| [poc.fakeua](#fakeua) |replaceRandomUserAgent 是一个请求选项参数，用于改变请求报文，修改 User-Agent 请求头为随机的常见请求头 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.fixQueryEscape](#fixqueryescape) |fixQueryEscape 是一个请求选项参数，用于指定是否修复查询参数中的 URL 编码，默认为 false 即会自动修复URL编码 参数: - b: 为 true 时不自动修复查询参数的 URL 编码 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.fromPlugin](#fromplugin) |fromPlugin 是一个请求选项参数，用于标记此次请求来源于哪个插件，便于请求记录的归类与溯源 参数: - b: 来源插件的名称/标识 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.gmTLSCipherSuite](#gmtlsciphersuite) |WithGmTLSCipherSuite 指定国密 TLS 套件，使用 tls.GMTLS_* 常量（可传多个）。 参数: - suites: 一个或多个国密 TLS 套件，使用 tls.GMTLS_* 常量 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.gmTLSDisableCompatMode](#gmtlsdisablecompatmode) |WithGmTLSDisableCompatMode 关闭国密兼容模式；不传参等价于 true（仅单次四套）。 参数: - disable: 可选，是否关闭兼容模式，默认为 true 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.gmTLSPrefer](#gmtlsprefer) |gmTLSPrefer 是一个请求选项参数，用于在兼容模式下优先尝试国密 TLS(GMTLS) 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.gmTls](#gmtls) |gmTls 是一个请求选项参数，用于启用国密 TLS(GMTLS)，默认兼容模式同时尝试标准 TLS 与国密 TLS 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.gmTlsOnly](#gmtlsonly) |gmTlsOnly 是一个请求选项参数，用于仅使用国密 TLS(GMTLS)，不再回退到标准 TLS 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.header](#header) |appendHeader 是一个请求选项参数，用于改变请求报文，添加请求头 参数: - key: 请求头名称 - value: 请求头的值 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.host](#host) |host 是一个请求选项参数，用于指定实际请求的 host，如果没有设置该请求选项，则会依据原始请求报文中的Host字段来确定实际请求的host 参数: - h: 实际请求的 host 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.http2](#http2) |http2 是一个请求选项参数，用于指定是否使用 http2 协议，默认为 false 即使用http1协议 参数: - isHttp2: 是否使用 http2 协议 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.https](#https) |https 是一个请求选项参数，用于指定是否使用 https 协议，默认为 false 即使用 http 协议 参数: - isHttps: 是否使用 https 协议 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.jsRedirect](#jsredirect) |jsRedirect 是一个请求选项参数，用于指定是否跟踪JS重定向，默认为false即不会自动跟踪JS重定向 参数: - b: 是否跟踪 JS 重定向 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.json](#json) |json 是一个请求选项参数，用于指定请求的 body 为 json 格式，需要传入一个任意类型的参数，会自动转换为 json 格式 参数: - i: 任意类型的值，会被序列化为 JSON 作为请求体 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.noBodyBuffer](#nobodybuffer) |noBodyBuffer 是一个请求选项参数，用于指定是否禁用响应体缓冲，设置为 true 时可以避免大文件下载时的内存占用 通常与 WithBodyStreamReaderHandler 配合使用，用于流式处理大文件 参数: - b: 是否禁用响应体缓冲 返回值: - 一个请求选项，作为可变参数传...|
| [poc.noFixContentLength](#nofixcontentlength) |noFixContentLength 是一个请求选项参数，用于指定是否修复响应报文中的 Content-Length 字段，默认为 false 即会自动修复Content-Length字段 参数: - b: 为 true 时不自动修复 Content-Length 返回值: - 一个请求选项，作为可...|
| [poc.noRedirect](#noredirect) |noRedirect 是一个请求选项参数，用于指定是否跟踪重定向，默认为 false 即会自动跟踪重定向 参数: - b: 为 true 时不跟踪重定向 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.noredirect](#noredirect) |noRedirect 是一个请求选项参数，用于指定是否跟踪重定向，默认为 false 即会自动跟踪重定向 参数: - b: 为 true 时不跟踪重定向 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.params](#params) |params 是一个请求选项参数，用于在请求时使用传入的值，需要注意的是，它可以很方便地使用 `str.f()`或 f-string 代替 参数: - i: 参数表，可以是 map 等可被转换为键值对的对象，用于替换报文中的 {{params(key)}} 占位符 返回值: - 一个请求选项，作为可...|
| [poc.password](#password) |password 是一个请求选项参数，用于指定认证时的密码 参数: - password: 认证密码 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.port](#port) |port 是一个请求选项参数，用于指定实际请求的端口，如果没有设置该请求选项，则会依据原始请求报文中的Host字段来确定实际请求的端口 参数: - port: 实际请求的端口 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.postData](#postdata) |postData 是一个请求选项参数，用于指定请求的 body 为 post 数据，需要传入一个任意类型的参数，会自动转换为 post 数据 输入是原始字符串，不会修改 Content-Type 参数: - i: POST 请求体的原始字符串内容 返回值: - 一个请求选项，作为可变参数传入 poc...|
| [poc.postParams](#postparams) |postParams 是一个请求选项参数，用于指定请求的 body 为 post 数据，需要传入一个任意类型的参数，会自动转换为 post 数据 输入是 map 类型，会自动转换为 post 数据，同时会自动设置 Content-Type 为 application/x-www-form-urlen...|
| [poc.postparams](#postparams) |postParams 是一个请求选项参数，用于指定请求的 body 为 post 数据，需要传入一个任意类型的参数，会自动转换为 post 数据 输入是 map 类型，会自动转换为 post 数据，同时会自动设置 Content-Type 为 application/x-www-form-urlen...|
| [poc.proxy](#proxy) |proxy 是一个请求选项参数，用于指定请求使用的代理，可以指定多个代理，默认会使用系统代理 参数: - proxies: 一个或多个代理地址，如 http://127.0.0.1:7890 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.query](#query) |query 是一个请求选项参数，用于指定请求的 query 参数，需要传入一个任意类型的参数，会自动转换为 query 参数 如果输入的是 map 类型，则会自动转换为 query 参数，例如：{&#34;a&#34;: &#34;b&#34;} 转换为 a=b 如果输入的是其他，会把字符串结果直接作为 query 设置 参数: ...|
| [poc.randomChunked](#randomchunked) |randomChunked 是一个请求选项参数，用于启用随机分块传输，默认不启用 参数: - b: 是否启用随机分块传输 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.randomChunkedDelay](#randomchunkeddelay) |randomChunkedDelay是一个请求选项参数，用于设置随机分块传输的分块延迟范围，默认最小延迟为50毫秒，最大延迟为100毫秒 参数: - min: 分块最小延迟，单位为毫秒 - max: 分块最大延迟，单位为毫秒 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.G...|
| [poc.randomChunkedLength](#randomchunkedlength) |randomChunkedLength 是一个请求选项参数，用于设置随机分块传输的分块长度范围，默认最小长度为10，最大长度为25 参数: - min: 分块最小长度 - max: 分块最大长度 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.randomChunkedResultHandler](#randomchunkedresulthandler) |randomChunkedResultHandler 是一个请求选项参数，用于设置随机分块传输的结果处理函数 处理函数接受四个参数，id为分块的ID，chunkRaw为分块的原始数据，totalTime为总耗时，chunkSendTime为分块发送的耗时 参数: - f: 结果处理回调函数，参数依次...|
| [poc.randomJA3](#randomja3) |randomJA3 是一个请求选项参数，用于指定是否启用随机 JA3 指纹，默认为 false 参数: - b: 是否启用随机 JA3 指纹 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.redirect](#redirect) |redirect 是一个请求选项参数，用于设置旧风格的 redirectHandler 函数，如果设置了该选项，则会在重定向时调用该函数，如果该函数返回 true，则会继续重定向，否则不会重定向。其第一个参数为当前的请求，第二个参数为既往的多个请求 参数: - i: 重定向处理回调函数，参数依次为当...|
| [poc.redirectHandler](#redirecthandler) |redirectHandler 是一个请求选项参数，用于作为重定向处理函数，如果设置了该选项，则会在重定向时调用该函数，如果该函数返回 true，则会继续重定向，否则不会重定向。其第一个参数为是否使用 https 协议，第二个参数为原始请求报文，第三个参数为原始响应报文 参数: - i: 重定向处理...|
| [poc.redirectTimes](#redirecttimes) |redirectTimes 是一个请求选项参数，用于指定最大重定向次数，默认为5次 参数: - t: 最大重定向次数 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.replaceAllHeaders](#replaceallheaders) |replaceAllHeaders 是一个请求选项参数，用于改变请求报文，修改修改所有请求头 参数: - headers: 请求头键值对表，会替换所有请求头 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.replaceAllPostParams](#replaceallpostparams) |replaceAllPostParams 是一个请求选项参数，用于改变请求报文，修改所有POST请求参数，如果不存在则会增加，其接收一个map[string]string类型的参数，其中key为POST请求参数名，value为POST请求参数值 参数: - values: POST 请求参数键值对表...|
| [poc.replaceAllPostParamsWithoutEscape](#replaceallpostparamswithoutescape) |replaceAllPostParamsWithoutEscape 是一个请求选项参数，用于改变请求报文，修改所有POST请求参数，如果不存在则会增加，其接收一个map[string]string类型的参数，其中key为POST请求参数名，value为POST请求参数值 与 poc.replaceA...|
| [poc.replaceAllQueryParams](#replaceallqueryparams) |replaceAllQueryParams 是一个请求选项参数，用于改变请求报文，修改所有 GET 请求参数，如果不存在则会增加，其接收一个map[string]string 类型的参数，其中 key 为请求参数名，value 为请求参数值 参数: - values: GET 请求参数键值对表，会替...|
| [poc.replaceAllQueryParamsWithoutEscape](#replaceallqueryparamswithoutescape) |replaceAllQueryParamsWithoutEscape 是一个请求选项参数，用于改变请求报文，修改所有 GET 请求参数，如果不存在则会增加，其接收一个map[string]string 类型的参数，其中 key 为请求参数名，value 为请求参数值 与 poc.replaceAll...|
| [poc.replaceBasicAuth](#replacebasicauth) |replaceBasicAuth 是一个请求选项参数，用于改变请求报文，修改 Authorization 请求头为基础认证的密文，如果不存在则会增加，实际上是replaceHeader(&#34;Authorization&#34;, codec.EncodeBase64(username + &#34;:&#34; + pass...|
| [poc.replaceBody](#replacebody) |replaceBody 是一个请求选项参数，用于改变请求报文，修改请求体内容，第一个参数为修改后的请求体内容，第二个参数为是否分块传输 参数: - body: 修改后的请求体内容 - chunk: 是否使用分块传输编码 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get ...|
| [poc.replaceCookie](#replacecookie) |replaceCookie 是一个请求选项参数，用于改变请求报文，修改Cookie请求头中的值，如果不存在则会增加 参数: - key: Cookie 名称 - value: Cookie 的值 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.replaceCookies](#replacecookies) |replaceCookies 是一个请求选项参数，用于改变请求报文，修改所有Cookie请求头中的值 参数: - cookies: Cookie 键值对表 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.replaceFirstLine](#replacefirstline) |replaceFirstLine 是一个请求选项参数，用于改变请求报文，修改第一行（即请求方法，请求路径，协议版本） 参数: - firstLine: 新的请求行，如 &#34;GET /test HTTP/1.1&#34; 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.replaceFormEncoded](#replaceformencoded) |replaceFormEncoded 是一个请求选项参数，用于改变请求报文，修改请求体中的表单，如果不存在则会增加 参数: - key: 表单字段名 - value: 表单字段值 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.replaceHeader](#replaceheader) |replaceHeader 是一个请求选项参数，用于改变请求报文，修改修改请求头，如果不存在则会增加 参数: - key: 请求头名称 - value: 请求头的值 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.replaceHost](#replacehost) |replaceHost 是一个请求选项参数，用于改变请求报文，修改Host请求头，如果不存在则会增加，实际上是replaceHeader(&#34;Host&#34;, host)的简写 参数: - host: 新的 Host 请求头的值 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Ge...|
| [poc.replaceMethod](#replacemethod) |replaceMethod 是一个请求选项参数，用于改变请求报文，修改请求方法 参数: - method: 新的请求方法，如 GET、POST 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.replacePath](#replacepath) |replacePath 是一个请求选项参数，用于改变请求报文，修改请求路径 参数: - path: 新的请求路径 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.replacePathFunc](#replacepathfunc) |replacePathFunc 是一个请求选项参数，用于使用回调改变请求报文，修改请求路径 参数: - handle: 路径处理回调函数，参数为原路径，返回新路径 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.replacePostParam](#replacepostparam) |replacePostParam 是一个请求选项参数，用于改变请求报文，修改 POST 请求参数，如果不存在则会增加 参数: - key: POST 请求参数名 - value: POST 请求参数值 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.replaceQueryParam](#replacequeryparam) |replaceQueryParam 是一个请求选项参数，用于改变请求报文，修改 GET 请求参数，如果不存在则会增加 参数: - key: GET 请求参数名 - value: GET 请求参数值 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.replaceRandomUserAgent](#replacerandomuseragent) |replaceRandomUserAgent 是一个请求选项参数，用于改变请求报文，修改 User-Agent 请求头为随机的常见请求头 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.replaceUploadFile](#replaceuploadfile) |replaceUploadFile 是一个请求选项参数，用于改变请求报文，修改请求体中的上传的文件，其中第一个参数为表单名，第二个参数为文件名，第三个参数为文件内容，第四个参数是可选参数，为文件类型(Content-Type)，如果不存在则会增加 参数: - formName: 表单字段名 - fi...|
| [poc.replaceUserAgent](#replaceuseragent) |replaceUserAgent 是一个请求选项参数，用于改变请求报文，修改 User-Agent 请求头，实际上是replaceHeader(&#34;User-Agent&#34;, userAgent)的简写 参数: - ua: 新的 User-Agent 请求头的值 返回值: - 一个请求选项，作为可变参数...|
| [poc.retryInStatusCode](#retryinstatuscode) |retryInStatusCode 是一个请求选项参数，用于指定在某些响应状态码的情况下重试，需要搭配 retryTimes 使用 参数: - codes: 一个或多个触发重试的响应状态码 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.retryMaxWaitTime](#retrymaxwaittime) |retryMaxWaitTime 是一个请求选项参数，用于指定重试时最大等待时间，需要搭配 retryTimes 使用，默认为2秒 参数: - f: 最大等待时间，单位为秒 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.retryNotInStatusCode](#retrynotinstatuscode) |retryNotInStatusCode 是一个请求选项参数，用于指定非某些响应状态码的情况下重试，需要搭配 retryTimes 使用 参数: - codes: 一个或多个状态码，响应不在这些状态码内时触发重试 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.retryTimes](#retrytimes) |retryTimes 是一个请求选项参数，用于指定请求失败时的重试次数，需要搭配 retryInStatusCode 或 retryNotInStatusCode 使用，来设置在什么响应码的情况下重试 参数: - t: 重试次数 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc...|
| [poc.retryWaitTime](#retrywaittime) |retryWaitTime 是一个请求选项参数，用于指定重试时最小等待时间，需要搭配 retryTimes 使用，默认为0.1秒 参数: - f: 最小等待时间，单位为秒 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.runtimeID](#runtimeid) |runtimeID 是一个请求选项参数，用于为此次请求指定运行时 ID，便于关联与追踪请求记录 参数: - r: 运行时 ID 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.save](#save) |save 是一个请求选项参数，用于指定是否将此次请求的记录保存在数据库中，默认为true即会保存到数据库 参数: - b: 是否将请求记录保存到数据库 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.saveHandler](#savehandler) |saveHandler 是一个请求选项参数，用于设置在将此次请求存入数据库之前的回调函数 参数: - f: 一个或多个回调函数，参数为 LowhttpResponse，在保存前调用 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.saveSync](#savesync) |saveSync 是一个请求选项参数，用于指定是否将此次请求的记录保存在数据库中，且同步保存，默认为false即会异步保存到数据库 参数: - b: 是否同步保存到数据库 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.session](#session) |session 是一个请求选项参数，用于指定请求的 session 标识（string），同一 session 共享 cookie jar，适合登录后连续请求 参数: - session: session 标识符 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.sni](#sni) |sni 是一个请求选项参数，用于指定使用 tls(https) 协议时的 服务器名称指示(SNI) 参数: - sni: 服务器名称指示(SNI)域名 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.source](#source) |source 是一个请求选项参数，用于在请求记录保存到数据库时标识此次请求的来源 参数: - i: 请求来源标识 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.timeout](#timeout) |timeout 是一个请求选项参数，用于指定读取超时时间，默认为15秒 参数: - f: 读取超时时间，单位为秒 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.ua](#ua) |ua 是一个请求选项参数，用于改变请求报文，添加 User-Agent 请求头中的值 参数: - ua: User-Agent 请求头的值 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.uarand](#uarand) |replaceRandomUserAgent 是一个请求选项参数，用于改变请求报文，修改 User-Agent 请求头为随机的常见请求头 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.useMitmRule](#usemitmrule) |useMitmRule 是一个请求选项参数，用于指定是否使用MITM规则，默认为false即不会使用MITM规则，使用规则可以完成流量染色，附加tag与提取数据的功能 参数: - b: 是否使用 MITM 规则 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.useragent](#useragent) |ua 是一个请求选项参数，用于改变请求报文，添加 User-Agent 请求头中的值 参数: - ua: User-Agent 请求头的值 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.username](#username) |username 是一个请求选项参数，用于指定认证时的用户名 参数: - username: 认证用户名 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.websocket](#websocket) |websocket 是一个请求选项参数，用于允许将链接升级为 websocket，此时发送的请求应该为 websocket 握手请求 参数: - w: 是否允许升级为 websocket 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|
| [poc.websocketFromServer](#websocketfromserver) |websocketFromServer 是一个请求选项参数，它接收一个回调函数，这个函数有两个参数，其中第一个参数为服务端发送的数据，第二个参数为取消函数，调用将会强制断开 websocket 参数: - w: 回调函数，参数依次为服务端数据、取消函数 返回值: - 一个请求选项，作为可变参数传入 ...|
| [poc.websocketOnClient](#websocketonclient) |websocketOnClient 是一个请求选项参数，它接收一个回调函数，这个函数有一个参数，是WebsocketClient结构体，通过该结构体可以向服务端发送数据 参数: - w: 回调函数，参数为 WebsocketClient 客户端对象 返回值: - 一个请求选项，作为可变参数传入 po...|
| [poc.websocketStrictMode](#websocketstrictmode) |websocketStrictMode 是一个请求选项参数，它用于控制是否启用严格模式，如果启用严格模式，则会遵循 RFC 6455 规范 参数: - b: 是否启用严格模式 返回值: - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等|


## 函数定义
### AppendHTTPPacketCookie

#### 详细描述
AppendHTTPPacketCookie 是一个辅助函数，用于改变请求报文，添加Cookie请求头中的值

参数:

  - packet: 原始 HTTP 报文字节数组

  - key: Cookie 名称

  - value: Cookie 的值



返回值:

  - 修改后的 HTTP 报文字节数组




Example:

``````````````yak
poc.AppendHTTPPacketCookie(poc.BasicRequest(), "aaa", "bbb") // 添加cookie键值对aaa:bbb
``````````````


#### 定义

`AppendHTTPPacketCookie(packet []byte, key string, value any) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` | 原始 HTTP 报文字节数组 |
| key | `string` | Cookie 名称 |
| value | `any` | Cookie 的值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 修改后的 HTTP 报文字节数组 |


### AppendHTTPPacketFormEncoded

#### 详细描述
AppendHTTPPacketFormEncoded 是一个辅助函数，用于改变请求报文，添加请求体中的表单

参数:

  - packet: 原始 HTTP 请求报文字节数组

  - key: 表单字段名

  - value: 表单字段值



返回值:

  - 修改后的 HTTP 请求报文字节数组




Example:

``````````````yak
poc.AppendHTTPPacketFormEncoded(`POST /post HTTP/1.1
Host: pie.dev
Content-Type: multipart/form-data; boundary=------------------------OFHnlKtUimimGcXvRSxgCZlIMAyDkuqsxeppbIFm
Content-Length: 203

--------------------------OFHnlKtUimimGcXvRSxgCZlIMAyDkuqsxeppbIFm
Content-Disposition: form-data; name="aaa"

bbb
--------------------------OFHnlKtUimimGcXvRSxgCZlIMAyDkuqsxeppbIFm--`, "ccc", "ddd") // 添加POST请求表单，其中ccc为键，ddd为值
``````````````


#### 定义

`AppendHTTPPacketFormEncoded(packet []byte, key string, value string) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |
| key | `string` | 表单字段名 |
| value | `string` | 表单字段值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 修改后的 HTTP 请求报文字节数组 |


### AppendHTTPPacketHeader

#### 详细描述
AppendHTTPPacketHeader 是一个辅助函数，用于改变请求报文，添加请求头。

无论 header 是否已存在都会直接附加（大小写不敏感行为与 Replace 不冲突）。

参数:

  - packet: 原始 HTTP 报文字节数组

  - headerKey: 请求头名称

  - headerValue: 请求头的值



返回值:

  - 修改后的 HTTP 报文字节数组




Example:

``````````````yak
poc.AppendHTTPPacketHeader(poc.BasicRequest(), "AAA", "BBB") // 添加 AAA 请求头
``````````````


#### 定义

`AppendHTTPPacketHeader(packet []byte, headerKey string, headerValue any) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` | 原始 HTTP 报文字节数组 |
| headerKey | `string` | 请求头名称 |
| headerValue | `any` | 请求头的值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 修改后的 HTTP 报文字节数组 |


### AppendHTTPPacketPath

#### 详细描述
AppendHTTPPacketPath 是一个辅助函数，用于改变请求报文，在现有请求路径后添加请求路径

参数:

  - packet: 原始 HTTP 请求报文字节数组

  - p: 要追加到现有路径后的路径片段



返回值:

  - 修改后的 HTTP 请求报文字节数组




Example:

``````````````yak
poc.AppendHTTPPacketPath(`GET /docs HTTP/1.1
Host: yaklang.com
`, "/api/poc")) // 向 example.com 发起请求，实际上请求路径改为/docs/api/poc
``````````````


#### 定义

`AppendHTTPPacketPath(packet []byte, p string) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |
| p | `string` | 要追加到现有路径后的路径片段 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 修改后的 HTTP 请求报文字节数组 |


### AppendHTTPPacketPostParam

#### 详细描述
AppendHTTPPacketPostParam 是一个辅助函数，用于改变请求报文，添加POST请求参数

参数:

  - packet: 原始 HTTP 请求报文字节数组

  - key: POST 请求参数名

  - value: POST 请求参数值



返回值:

  - 修改后的 HTTP 请求报文字节数组




Example:

``````````````yak
poc.AppendHTTPPacketPostParam(poc.BasicRequest(), "a", "b") // 向 pie.dev 发起请求，添加POST请求参数a，值为b
``````````````


#### 定义

`AppendHTTPPacketPostParam(packet []byte, key string, value string) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |
| key | `string` | POST 请求参数名 |
| value | `string` | POST 请求参数值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 修改后的 HTTP 请求报文字节数组 |


### AppendHTTPPacketQueryParam

#### 详细描述
AppendHTTPPacketQueryParam 是一个辅助函数，用于改变请求报文，添加GET请求参数

参数:

  - packet: 原始 HTTP 请求报文字节数组

  - key: GET 请求参数名

  - value: GET 请求参数值



返回值:

  - 修改后的 HTTP 请求报文字节数组




Example:

``````````````yak
poc.AppendHTTPPacketQueryParam(poc.BasicRequest(), "a", "b") // 添加GET请求参数a，值为b
``````````````


#### 定义

`AppendHTTPPacketQueryParam(packet []byte, key string, value string) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |
| key | `string` | GET 请求参数名 |
| value | `string` | GET 请求参数值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 修改后的 HTTP 请求报文字节数组 |


### AppendHTTPPacketUploadFile

#### 详细描述
AppendHTTPPacketUploadFile 是一个辅助函数，用于改变请求报文，添加请求体中的上传的文件，其中第一个参数为原始请求报文，第二个参数为表单名，第三个参数为文件名，第四个参数为文件内容，第五个参数是可选参数，为文件类型(Content-Type)

参数:

  - packet: 原始 HTTP 请求报文字节数组

  - fieldName: 表单字段名

  - fileName: 文件名

  - fileContent: 文件内容

  - contentType: 可选，文件类型(Content-Type)



返回值:

  - 修改后的 HTTP 请求报文字节数组




Example:

``````````````yak
_, raw, _ = poc.ParseUrlToHTTPRequestRaw("POST", "https://pie.dev/post")
poc.AppendHTTPPacketUploadFile(raw, "file", "phpinfo.php", "<?php phpinfo(); ?>", "image/jpeg")) // 添加POST请求表单，其文件名为phpinfo.php，内容为<?php phpinfo(); ?>，文件类型为image/jpeg
``````````````


#### 定义

`AppendHTTPPacketUploadFile(packet []byte, fieldName string, fileName string, fileContent any, contentType ...string) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |
| fieldName | `string` | 表单字段名 |
| fileName | `string` | 文件名 |
| fileContent | `any` | 文件内容 |
| contentType | `...string` | 可选，文件类型(Content-Type) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 修改后的 HTTP 请求报文字节数组 |


### AutoUnzipPacketEncoding

#### 详细描述
AutoUnzipPacketEncoding 是一个辅助函数，用于将 HTTP 报文中的传输/内容编码“解开”，以便前端展示/编辑。



- 支持处理 Transfer-Encoding: chunked（会自动反分块，并移除相关头）

- 支持处理 Content-Encoding（如 gzip/br/zstd/zlib/deflate），优先按 header 解码；header 缺失时会尝试用 magic number 判断（如 gzip/zstd/zlib）

- 失败时保持保守：返回 (raw, nil, false)，避免破坏原始报文



该函数通常与 AutoZipPacketEncoding 配对使用：前端编辑 plain 报文后，服务端可用 state 将其重新压回原始编码形态。



参数:

  - raw: 原始 HTTP 报文字节数组



返回值:

  - 解开编码后的明文 HTTP 报文字节数组

  - 编码状态对象，可用于将明文重新压回原始编码形态

  - 是否成功解开编码




Example:

``````````````yak
raw := []byte(`HTTP/1.1 200 OK
Transfer-Encoding: chunked

5
hello
0

`)
plain, state, ok = poc.AutoUnzipPacketEncoding(raw)
// plain 的 body 变为 "hello"，并移除了 Transfer-Encoding: chunked
``````````````


#### 定义

`AutoUnzipPacketEncoding(raw []byte) (plain []byte, state *PacketEncodingState, ok bool)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` | 原始 HTTP 报文字节数组 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| plain | `[]byte` | 解开编码后的明文 HTTP 报文字节数组 |
| state | `*PacketEncodingState` | 编码状态对象，可用于将明文重新压回原始编码形态 |
| ok | `bool` | 是否成功解开编码 |


### BasicRequest

#### 详细描述
BasicRequest 返回一个基本的 HTTP 请求，用于测试，它实际上返回一个b&#34;GET / HTTP/1.1\r\nHost: example.com\r\n\r\n&#34;

参数:

  - 无



返回值:

  - 基本 HTTP 请求报文字节数组




Example:

``````````````yak
poc.BasicRequest() // b"GET / HTTP/1.1\r\nHost: example.com\r\n\r\n"
``````````````


#### 定义

`BasicRequest() []byte`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 基本 HTTP 请求报文字节数组 |


### BasicResponse

#### 详细描述
BasicResponse 返回一个基本的 HTTP 响应，用于测试，它实际上返回一个b&#34;HTTP/1.1 200 OK\r\nContent-Length: 0\r\n\r\n&#34;

参数:

  - 无



返回值:

  - 基本 HTTP 响应报文字节数组




Example:

``````````````yak
poc.BasicResponse() // b"HTTP/1.1 200 OK\r\nContent-Length: 0\r\n\r\n"
``````````````


#### 定义

`BasicResponse() []byte`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 基本 HTTP 响应报文字节数组 |


### BuildRequest

#### 详细描述
BuildRequest 是一个用于辅助构建请求报文的工具函数，它第一个参数可以接收 []byte, string, http.Request 结构体，接下来可以接收零个到多个请求选项，修改请求报文的选项将被作用，最后返回构建好的请求报文

参数:

  - i: 请求源，可为原始报文 []byte/string 或 *http.Request

  - opts: 可选的请求选项，仅修改请求报文的选项会生效



返回值:

  - 构建好的请求报文字节数组




Example:

``````````````yak
raw = poc.BuildRequest(poc.BasicRequest(), poc.https(true), poc.replaceHost("yaklang.com"), poc.replacePath("/docs/api/poc")) // 构建一个基础GET请求，修改其Host为yaklang.com，访问的URI路径为/docs/api/poc
// raw = b"GET /docs/api/poc HTTP/1.1\r\nHost: www.yaklang.com\r\n\r\n"
``````````````


#### 定义

`BuildRequest(i any, opts ...PocConfigOption) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 请求源，可为原始报文 []byte/string 或 *http.Request |
| opts | `...PocConfigOption` | 可选的请求选项，仅修改请求报文的选项会生效 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 构建好的请求报文字节数组 |


### CurlToHTTPRequest

#### 详细描述
CurlToHTTPRequest 尝试将curl命令转换为HTTP请求报文，其返回值为bytes，即转换后的HTTP请求报文

参数:

  - command: curl 命令字符串



返回值:

  - 转换后的 HTTP 请求报文字节数组




Example:

``````````````yak
poc.CurlToHTTPRequest("curl -X POST -d 'a=b&c=d' http://example.com")
``````````````


#### 定义

`CurlToHTTPRequest(command string) (req []byte)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| command | `string` | curl 命令字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| req | `[]byte` | 转换后的 HTTP 请求报文字节数组 |


### Delete

#### 详细描述
Delete 向指定 URL 发送 DELETE 请求并且返回响应结构体，请求结构体以及错误，它的第一个参数是 URL 字符串，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如对设置超时时间，或者修改请求报文等

关于结构体中的可用字段和方法可以使用 desc 函数进行查看

参数:

  - urlStr: 目标 URL 字符串

  - opts: 可选的请求选项，例如 poc.https、poc.timeout



返回值:

  - 响应结构体 LowhttpResponse

  - 请求结构体 *http.Request

  - 错误信息，请求失败时返回非空




Example:

``````````````yak
rsp,req = poc.Delete("https://yaklang.com", poc.https(true))~ // 向yaklang.com发送一个基于HTTPS协议的DELETE请求
desc(rsp) // 查看响应结构体中的可用字段
``````````````


#### 定义

`Delete(urlStr string, opts ...PocConfigOption) (rspInst *lowhttp.LowhttpResponse, reqInst *http.Request, err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| urlStr | `string` | 目标 URL 字符串 |
| opts | `...PocConfigOption` | 可选的请求选项，例如 poc.https、poc.timeout |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| rspInst | `*lowhttp.LowhttpResponse` | 响应结构体 LowhttpResponse |
| reqInst | `*http.Request` | 请求结构体 *http.Request |
| err | `error` | 错误信息，请求失败时返回非空 |


### DeleteHTTPPacketCookie

#### 详细描述
DeleteHTTPPacketCookie 是一个辅助函数，用于改变请求报文，删除Cookie中的值

参数:

  - packet: 原始 HTTP 报文字节数组

  - key: 要删除的 Cookie 名称



返回值:

  - 修改后的 HTTP 报文字节数组




Example:

``````````````yak
poc.DeleteHTTPPacketCookie(`GET /get HTTP/1.1
Content-Type: application/json
Cookie: aaa=bbb; ccc=ddd
Host: pie.dev

`, "aaa") // 删除Cookie中的aaa
``````````````


#### 定义

`DeleteHTTPPacketCookie(packet []byte, key string) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` | 原始 HTTP 报文字节数组 |
| key | `string` | 要删除的 Cookie 名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 修改后的 HTTP 报文字节数组 |


### DeleteHTTPPacketForm

#### 详细描述
DeleteHTTPPacketForm 是一个辅助函数，用于改变请求报文，删除POST请求表单

参数:

  - packet: 原始 HTTP 请求报文字节数组

  - key: 要删除的表单字段名



返回值:

  - 修改后的 HTTP 请求报文字节数组




Example:

``````````````yak
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
``````````````


#### 定义

`DeleteHTTPPacketForm(packet []byte, key string) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |
| key | `string` | 要删除的表单字段名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 修改后的 HTTP 请求报文字节数组 |


### DeleteHTTPPacketHeader

#### 详细描述
DeleteHTTPPacketHeader 是一个辅助函数，用于改变请求报文，删除请求头。

默认情况下匹配会忽略 Header 名大小写，若需严格匹配可使用 DeleteHTTPPacketHeaderStrict。

参数:

  - packet: 原始 HTTP 报文字节数组

  - headerKey: 要删除的请求头名称



返回值:

  - 修改后的 HTTP 报文字节数组




Example:

``````````````yak
poc.DeleteHTTPPacketHeader(`GET /get HTTP/1.1
Content-Type: application/json
AAA: BBB
Host: pie.dev

`, "AAA") // 删除 AAA 请求头（忽略大小写）

poc.DeleteHTTPPacketHeaderStrict(`GET /get HTTP/1.1
Content-Type: application/json
AAA: BBB
Host: pie.dev

`, "AAA") // 仅当 Header 严格等于 AAA 时才删除
``````````````


#### 定义

`DeleteHTTPPacketHeader(packet []byte, headerKey string) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` | 原始 HTTP 报文字节数组 |
| headerKey | `string` | 要删除的请求头名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 修改后的 HTTP 报文字节数组 |


### DeleteHTTPPacketPostParam

#### 详细描述
DeleteHTTPPacketPostParam 是一个辅助函数，用于改变请求报文，删除POST请求参数

参数:

  - packet: 原始 HTTP 请求报文字节数组

  - key: 要删除的 POST 请求参数名



返回值:

  - 修改后的 HTTP 请求报文字节数组




Example:

``````````````yak
poc.DeleteHTTPPacketPostParam(`POST /post HTTP/1.1
Content-Type: application/json
Content-Length: 7
Host: pie.dev

a=b&c=d`, "a") // 删除POST请求参数a
``````````````


#### 定义

`DeleteHTTPPacketPostParam(packet []byte, key string) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |
| key | `string` | 要删除的 POST 请求参数名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 修改后的 HTTP 请求报文字节数组 |


### DeleteHTTPPacketQueryParam

#### 详细描述
DeleteHTTPPacketQueryParam 是一个辅助函数，用于改变请求报文，删除GET请求参数

参数:

  - packet: 原始 HTTP 请求报文字节数组

  - key: 要删除的 GET 请求参数名



返回值:

  - 修改后的 HTTP 请求报文字节数组




Example:

``````````````yak
poc.DeleteHTTPPacketQueryParam(`GET /get?a=b&c=d HTTP/1.1
Content-Type: application/json
Host: pie.dev

`, "a") // 删除GET请求参数a
``````````````


#### 定义

`DeleteHTTPPacketQueryParam(packet []byte, key string) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |
| key | `string` | 要删除的 GET 请求参数名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 修改后的 HTTP 请求报文字节数组 |


### Do

#### 详细描述
Do 向指定 URL 发送指定请求方法的请求并且返回响应结构体，请求结构体以及错误，它的是第一个参数是请求方法，第二个参数 URL 字符串，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如设置超时时间，或者修改请求报文等

关于结构体中的可用字段和方法可以使用 desc 函数进行查看

参数:

  - method: 请求方法，如 GET、POST

  - urlStr: 目标 URL 字符串

  - opts: 可选的请求选项，例如 poc.https、poc.timeout



返回值:

  - 响应结构体 LowhttpResponse

  - 请求结构体 *http.Request

  - 错误信息，请求失败时返回非空




Example:

``````````````yak
poc.Do("GET","https://yaklang.com", poc.https(true)) // 向yaklang.com发送一个基于HTTPS协议的GET请求
desc(rsp) // 查看响应结构体中的可用字段
``````````````


#### 定义

`Do(method string, urlStr string, opts ...PocConfigOption) (rspInst *lowhttp.LowhttpResponse, reqInst *http.Request, err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| method | `string` | 请求方法，如 GET、POST |
| urlStr | `string` | 目标 URL 字符串 |
| opts | `...PocConfigOption` | 可选的请求选项，例如 poc.https、poc.timeout |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| rspInst | `*lowhttp.LowhttpResponse` | 响应结构体 LowhttpResponse |
| reqInst | `*http.Request` | 请求结构体 *http.Request |
| err | `error` | 错误信息，请求失败时返回非空 |


### Download

#### 详细描述
Download 从指定 URL 下载文件并保存到本地，返回保存的文件路径和错误

支持进度回调、完成回调、自定义文件名和保存目录等选项

参数:

  - urlStr: 目标文件的 URL 字符串

  - opts: 可选的请求/下载选项，例如 poc.downloadProgress、poc.downloadDir



返回值:

  - 已保存文件的本地路径

  - 错误信息，下载失败时返回非空




Example:

``````````````yak
filename, err = poc.Download("https://example.com/file.zip")
filename, err = poc.Download("https://example.com/file.zip", poc.downloadProgress(func(downloaded, total, percent) {

	println(sprintf("下载进度: %.2f%%", percent))

}), poc.downloadFilename("my_file.zip"))
``````````````


#### 定义

`Download(urlStr string, opts ...PocConfigOption) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| urlStr | `string` | 目标文件的 URL 字符串 |
| opts | `...PocConfigOption` | 可选的请求/下载选项，例如 poc.downloadProgress、poc.downloadDir |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 已保存文件的本地路径 |
| r2 | `error` | 错误信息，下载失败时返回非空 |


### DownloadWithMethod

#### 详细描述
DownloadWithMethod 使用指定的 HTTP 方法从 URL 下载文件

参数:

  - method: HTTP 请求方法，如 GET、POST

  - urlStr: 目标文件的 URL 字符串

  - opts: 可选的请求/下载选项，例如 poc.body、poc.downloadDir



返回值:

  - 已保存文件的本地路径

  - 错误信息，下载失败时返回非空




Example:

``````````````yak
filename, err = poc.DownloadWithMethod("POST", "https://example.com/download", poc.body("token=xxx"))
``````````````


#### 定义

`DownloadWithMethod(method string, urlStr string, opts ...PocConfigOption) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| method | `string` | HTTP 请求方法，如 GET、POST |
| urlStr | `string` | 目标文件的 URL 字符串 |
| opts | `...PocConfigOption` | 可选的请求/下载选项，例如 poc.body、poc.downloadDir |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 已保存文件的本地路径 |
| r2 | `error` | 错误信息，下载失败时返回非空 |


### ExtractPostParams

#### 详细描述
ExtractPostParams 尝试将 HTTP 请求报文中的各种 POST 参数(普通格式，表单格式，JSON格式，XML格式)提取出来，返回提取出来的 POST 参数与错误

参数:

  - raw: 原始 HTTP 请求报文字节数组



返回值:

  - 提取出来的 POST 参数键值对表

  - 错误信息，无法提取时返回非空




Example:

``````````````yak
params, err = poc.ExtractPostParams("POST / HTTP/1.1\r\nContent-Type: application/json\r\nHost: example.com\r\n\r\n{\"key\": \"value\"}")
dump(params) // {"key": "value"}
``````````````


#### 定义

`ExtractPostParams(raw []byte) (map[string]string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` | 原始 HTTP 请求报文字节数组 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `map[string]string` | 提取出来的 POST 参数键值对表 |
| r2 | `error` | 错误信息，无法提取时返回非空 |


### FixHTTPPacketCRLF

#### 详细描述
FixHTTPPacketCRLF 修复一个HTTP报文的CRLF问题（正常的报文每行末尾为\r\n，但是某些报文可能是有\n），如果noFixLength为true，则不会修复Content-Length，否则会尝试修复Content-Length

参数:

  - raw: 原始 HTTP 报文字节数组

  - noFixLength: 是否不修复 Content-Length，为 true 时不修复



返回值:

  - 修复后的 HTTP 报文字节数组




Example:

``````````````yak
poc.FixHTTPPacketCRLF(`POST / HTTP/1.1
Host: example.com
Content-Length: 11

hello world`, false)
``````````````


#### 定义

`FixHTTPPacketCRLF(raw []byte, noFixLength bool) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` | 原始 HTTP 报文字节数组 |
| noFixLength | `bool` | 是否不修复 Content-Length，为 true 时不修复 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 修复后的 HTTP 报文字节数组 |


### FixHTTPRequest

#### 详细描述
FixHTTPRequest 尝试对传入的HTTP请求报文进行修复，并返回修复后的请求

参数:

  - raw: 原始 HTTP 请求报文字节数组



返回值:

  - 修复后的 HTTP 请求报文字节数组




Example:

``````````````yak
poc.FixHTTPRequest(b"GET / HTTP/1.1\r\nHost: example.com\r\n\r\n")
``````````````


#### 定义

`FixHTTPRequest(raw []byte) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` | 原始 HTTP 请求报文字节数组 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 修复后的 HTTP 请求报文字节数组 |


### FixHTTPResponse

#### 详细描述
FixHTTPResponse 尝试对传入的 HTTP 响应报文进行修复，并返回修复后的响应

参数:

  - r: 原始 HTTP 响应报文字节数组



返回值:

  - 修复后的 HTTP 响应报文字节数组




Example:

``````````````yak
poc.FixHTTPResponse(b"HTTP/1.1 200 OK\nContent-Length: 5\n\nhello")
``````````````


#### 定义

`FixHTTPResponse(r []byte) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| r | `[]byte` | 原始 HTTP 响应报文字节数组 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 修复后的 HTTP 响应报文字节数组 |


### Get

#### 详细描述
Get 向指定 URL 发送 GET 请求并且返回响应结构体，请求结构体以及错误，它的第一个参数是 URL 字符串，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如对设置超时时间，或者修改请求报文等

关于结构体中的可用字段和方法可以使用 desc 函数进行查看

参数:

  - urlStr: 目标 URL 字符串

  - opts: 可选的请求选项，例如 poc.https、poc.timeout



返回值:

  - 响应结构体 LowhttpResponse

  - 请求结构体 *http.Request

  - 错误信息，请求失败时返回非空




Example:

``````````````yak
rsp,req = poc.Get("https://yaklang.com", poc.https(true))~ // 向yaklang.com发送一个基于HTTPS协议的GET请求
desc(rsp) // 查看响应结构体中的可用字段
``````````````


#### 定义

`Get(urlStr string, opts ...PocConfigOption) (rspInst *lowhttp.LowhttpResponse, reqInst *http.Request, err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| urlStr | `string` | 目标 URL 字符串 |
| opts | `...PocConfigOption` | 可选的请求选项，例如 poc.https、poc.timeout |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| rspInst | `*lowhttp.LowhttpResponse` | 响应结构体 LowhttpResponse |
| reqInst | `*http.Request` | 请求结构体 *http.Request |
| err | `error` | 错误信息，请求失败时返回非空 |


### GetAllHTTPPacketPostParams

#### 详细描述
GetAllHTTPPacketPostParams 是一个辅助函数，用于获取请求报文中的所有POST请求参数，其返回值为map[string]string，其中键为参数名，值为参数值

参数:

  - packet: 原始 HTTP 请求报文字节数组



返回值:

  - 所有 POST 请求参数的键值对映射




Example:

``````````````yak
poc.GetAllHTTPPacketPostParams(`POST /post HTTP/1.1
Content-Type: application/json
COntent-Length: 7
Host: pie.dev

a=b&c=d`) // 获取所有POST请求参数
``````````````


#### 定义

`GetAllHTTPPacketPostParams(packet []byte) (params map[string]string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| params | `map[string]string` | 所有 POST 请求参数的键值对映射 |


### GetAllHTTPPacketPostParamsFull

#### 详细描述
GetAllHTTPPacketPostParamsFull 是一个辅助函数，用于获取请求报文中的所有POST请求参数，其返回值为map[string][]string，其中键为参数名，值为参数值切片

参数:

  - packet: 原始 HTTP 请求报文字节数组



返回值:

  - 所有 POST 请求参数的键到值列表的映射




Example:

``````````````yak
poc.GetAllHTTPPacketPostParams(`POST /post HTTP/1.1
Content-Type: application/json
COntent-Length: 7
Host: pie.dev

a=b&a=c`) // 获取所有POST请求参数，这里会返回{"a":["b", "c"]}
``````````````


#### 定义

`GetAllHTTPPacketPostParamsFull(packet []byte) (params map[string][]string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| params | `map[string][]string` | 所有 POST 请求参数的键到值列表的映射 |


### GetAllHTTPPacketQueryParams

#### 详细描述
GetAllHTTPPacketQueryParams 是一个辅助函数，用于获取请求报文中的所有GET请求参数，其返回值为map[string]string，其中键为参数名，值为参数值

参数:

  - packet: 原始 HTTP 请求报文字节数组



返回值:

  - 所有 GET 请求参数的键值对映射




Example:

``````````````yak
poc.GetAllHTTPPacketQueryParams(`GET /get?a=b&c=d HTTP/1.1
Content-Type: application/json
Host: pie.dev

`) // 获取所有GET请求参数
``````````````


#### 定义

`GetAllHTTPPacketQueryParams(packet []byte) (params map[string]string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| params | `map[string]string` | 所有 GET 请求参数的键值对映射 |


### GetAllHTTPPacketQueryParamsFull

#### 详细描述
GetAllHTTPPacketQueryParamsFull 是一个辅助函数，用于获取请求报文中的所有GET请求参数，其返回值为map[string][]string，其中键为参数名，值为参数值切片

参数:

  - packet: 原始 HTTP 请求报文字节数组



返回值:

  - 所有 GET 请求参数的键到值列表的映射




Example:

``````````````yak
poc.GetAllHTTPPacketQueryParamsFull(`GET /get?a=b&a=c HTTP/1.1
Content-Type: application/json
Host: pie.dev

`) // 返回所有GET请求参数，这里会返回{"a":["b", "c"]}
``````````````


#### 定义

`GetAllHTTPPacketQueryParamsFull(packet []byte) (params map[string][]string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| params | `map[string][]string` | 所有 GET 请求参数的键到值列表的映射 |


### GetHTTPPacketBody

#### 详细描述
GetHTTPPacketBody 是一个辅助函数，用于获取请求报文中的请求体，其返回值为bytes

参数:

  - packet: 原始 HTTP 报文字节数组



返回值:

  - 报文主体内容字节数组




Example:

``````````````yak
poc.GetHTTPPacketBody(`POST /post HTTP/1.1
Content-Type: application/json
COntent-Length: 7
Host: pie.dev

a=b&c=d`) // 获取请求头，这里为b"a=b&c=d"
``````````````


#### 定义

`GetHTTPPacketBody(packet []byte) (body []byte)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` | 原始 HTTP 报文字节数组 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| body | `[]byte` | 报文主体内容字节数组 |


### GetHTTPPacketContentType

#### 详细描述
GetHTTPPacketContentType 是一个辅助函数，用于获取请求报文中的Content-Type请求头，其返回值为string

参数:

  - packet: 原始 HTTP 报文字节数组



返回值:

  - Content-Type 请求头的值




Example:

``````````````yak
poc.GetHTTPPacketContentType(`POST /post HTTP/1.1
Content-Type: application/json
COntent-Length: 7
Host: pie.dev

a=b&c=d`) // 获取Content-Type请求头
``````````````


#### 定义

`GetHTTPPacketContentType(packet []byte) (contentType string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` | 原始 HTTP 报文字节数组 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| contentType | `string` | Content-Type 请求头的值 |


### GetHTTPPacketCookie

#### 详细描述
GetHTTPPacketCookie 是一个辅助函数，用于获取请求报文中Cookie值，其返回值为string

参数:

  - packet: 原始 HTTP 报文字节数组

  - key: Cookie 名称



返回值:

  - 匹配该名称的 Cookie 值




Example:

``````````````yak
poc.GetHTTPPacketCookie(`GET /get HTTP/1.1
Content-Type: application/json
Cookie: a=b; c=d
Host: pie.dev

`, "a") // 获取键名为a的Cookie值，这里会返回"b"
``````````````


#### 定义

`GetHTTPPacketCookie(packet []byte, key string) (cookieValue string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` | 原始 HTTP 报文字节数组 |
| key | `string` | Cookie 名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| cookieValue | `string` | 匹配该名称的 Cookie 值 |


### GetHTTPPacketCookieFirst

#### 详细描述
GetHTTPPacketCookieFirst 是一个辅助函数，用于获取请求报文中Cookie值，其返回值为string

参数:

  - packet: 原始 HTTP 报文字节数组

  - key: Cookie 名称



返回值:

  - 匹配该名称的第一个 Cookie 值




Example:

``````````````yak
poc.GetHTTPPacketCookieFirst(`GET /get HTTP/1.1
Content-Type: application/json
Cookie: a=b; c=d
Host: pie.dev

`, "a") // 获取键名为a的Cookie值，这里会返回"b"
``````````````


#### 定义

`GetHTTPPacketCookieFirst(packet []byte, key string) (cookieValue string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` | 原始 HTTP 报文字节数组 |
| key | `string` | Cookie 名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| cookieValue | `string` | 匹配该名称的第一个 Cookie 值 |


### GetHTTPPacketCookieValues

#### 详细描述
GetHTTPPacketCookieValues 是一个辅助函数，用于获取请求报文中Cookie值，其返回值为[]string，这是因为Cookie可能存在多个相同键名的值

参数:

  - packet: 原始 HTTP 报文字节数组

  - key: Cookie 名称



返回值:

  - 匹配该名称的所有 Cookie 值列表




Example:

``````````````yak
poc.GetHTTPPacketCookieValues(`GET /get HTTP/1.1
Content-Type: application/json
Cookie: a=b; a=c
Host: pie.dev

`, "a") // 获取键名为a的Cookie值，这里会返回["b", "c"]
``````````````


#### 定义

`GetHTTPPacketCookieValues(packet []byte, key string) (cookieValues []string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` | 原始 HTTP 报文字节数组 |
| key | `string` | Cookie 名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| cookieValues | `[]string` | 匹配该名称的所有 Cookie 值列表 |


### GetHTTPPacketCookies

#### 详细描述
GetHTTPPacketCookies 是一个辅助函数，用于获取请求报文中所有Cookie值，其返回值为map[string]string

参数:

  - packet: 原始 HTTP 报文字节数组



返回值:

  - 所有 Cookie 的键值对映射




Example:

``````````````yak
poc.GetHTTPPacketCookies(`GET /get HTTP/1.1
Content-Type: application/json
Cookie: a=b; c=d
Host: pie.dev

`) // 获取所有Cookie值，这里会返回{"a":"b", "c":"d"}
``````````````


#### 定义

`GetHTTPPacketCookies(packet []byte) (cookies map[string]string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` | 原始 HTTP 报文字节数组 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| cookies | `map[string]string` | 所有 Cookie 的键值对映射 |


### GetHTTPPacketCookiesFull

#### 详细描述
GetHTTPPacketCookiesFull 是一个辅助函数，用于获取请求报文中所有Cookie值，其返回值为map[string][]string，这是因为Cookie可能存在多个相同键名的值

参数:

  - packet: 原始 HTTP 报文字节数组



返回值:

  - 所有 Cookie 的键到值列表的映射




Example:

``````````````yak
poc.GetHTTPPacketCookiesFull(`GET /get HTTP/1.1
Content-Type: application/json
Cookie: a=b; a=c; c=d
Host: pie.dev

`) // 获取所有Cookie值，这里会返回{"a":["b", "c"], "c":["d"]}
``````````````


#### 定义

`GetHTTPPacketCookiesFull(packet []byte) (cookies map[string][]string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` | 原始 HTTP 报文字节数组 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| cookies | `map[string][]string` | 所有 Cookie 的键到值列表的映射 |


### GetHTTPPacketFirstLine

#### 详细描述
GetHTTPPacketFirstLine 是一个辅助函数，用于获取 HTTP 报文中第一行的值，其返回值为string，string，string

在请求报文中，其三个返回值分别为：请求方法，请求URI，协议版本

在响应报文中，其三个返回值分别为：协议版本，状态码，状态码描述

参数:

  - packet: 原始 HTTP 报文字节数组



返回值:

  - 第一个字段（请求方法 或 协议版本）

  - 第二个字段（请求URI 或 状态码）

  - 第三个字段（协议版本 或 状态码描述）




Example:

``````````````yak
poc.GetHTTPPacketFirstLine(`GET /get HTTP/1.1
Content-Type: application/json
Cookie: a=b; a=c; c=d
Host: pie.dev

`) // 获取请求方法，请求URI，协议版本，这里会返回"GET", "/get", "HTTP/1.1"
``````````````


#### 定义

`GetHTTPPacketFirstLine(packet []byte) (string, string, string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` | 原始 HTTP 报文字节数组 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 第一个字段（请求方法 或 协议版本） |
| r2 | `string` | 第二个字段（请求URI 或 状态码） |
| r3 | `string` | 第三个字段（协议版本 或 状态码描述） |


### GetHTTPPacketHeader

#### 详细描述
GetHTTPPacketHeader 是一个辅助函数，用于获取请求报文中指定的请求头，其返回值为string

参数:

  - packet: 原始 HTTP 报文字节数组

  - key: 请求头名称



返回值:

  - 匹配该名称的请求头的值




Example:

``````````````yak
poc.GetHTTPPacketHeader(`GET /get HTTP/1.1
Content-Type: application/json
Cookie: a=b; a=c; c=d
Host: pie.dev

`, "Content-Type") // 获取Content-Type请求头，这里会返回"application/json"
``````````````


#### 定义

`GetHTTPPacketHeader(packet []byte, key string) (header string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` | 原始 HTTP 报文字节数组 |
| key | `string` | 请求头名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| header | `string` | 匹配该名称的请求头的值 |


### GetHTTPPacketHeaders

#### 详细描述
GetHTTPPacketHeaders 是一个辅助函数，用于获取请求报文中所有请求头，其返回值为map[string]string

参数:

  - packet: 原始 HTTP 报文字节数组



返回值:

  - 所有请求头的键值对映射




Example:

``````````````yak
poc.GetHTTPPacketHeaders(`GET /get HTTP/1.1
Content-Type: application/json
Cookie: a=b; a=c; c=d
Host: pie.dev

`) // 获取所有请求头，这里会返回{"Content-Type": "application/json", "Cookie": "a=b; a=c; c=d", "Host": "pie.dev"}
``````````````


#### 定义

`GetHTTPPacketHeaders(packet []byte) (headers map[string]string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` | 原始 HTTP 报文字节数组 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| headers | `map[string]string` | 所有请求头的键值对映射 |


### GetHTTPPacketHeadersFull

#### 详细描述
GetHTTPPacketHeadersFull 是一个辅助函数，用于获取请求报文中所有请求头，其返回值为map[string][]string，这是因为请求头可能存在多个相同键名的值

参数:

  - packet: 原始 HTTP 报文字节数组



返回值:

  - 所有请求头的键到值列表的映射




Example:

``````````````yak
poc.GetHTTPPacketHeadersFull(`GET /get HTTP/1.1
Content-Type: application/json
Cookie: a=b; a=c; c=d
Cookie: e=f
Host: pie.dev

`) // 获取所有请求头，这里会返回{"Content-Type": ["application/json"], "Cookie": []"a=b; a=c; c=d", "e=f"], "Host": ["pie.dev"]}
``````````````


#### 定义

`GetHTTPPacketHeadersFull(packet []byte) (headers map[string][]string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` | 原始 HTTP 报文字节数组 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| headers | `map[string][]string` | 所有请求头的键到值列表的映射 |


### GetHTTPPacketPostParam

#### 详细描述
GetHTTPPacketPostParam 是一个辅助函数，用于获取请求报文中指定的POST请求参数，其返回值为string

参数:

  - packet: 原始 HTTP 请求报文字节数组

  - key: POST 请求参数名



返回值:

  - 匹配该名称的 POST 请求参数的值




Example:

``````````````yak
poc.GetHTTPPacketPostParam(`POST /post HTTP/1.1
Content-Type: application/json
COntent-Length: 7
Host: pie.dev

a=b&c=d`, "a") // 获取POST请求参数a的值
``````````````


#### 定义

`GetHTTPPacketPostParam(packet []byte, key string) (paramValue string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |
| key | `string` | POST 请求参数名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| paramValue | `string` | 匹配该名称的 POST 请求参数的值 |


### GetHTTPPacketQueryParam

#### 详细描述
GetHTTPPacketQueryParam 是一个辅助函数，用于获取请求报文中指定的GET请求参数，其返回值为string

参数:

  - packet: 原始 HTTP 请求报文字节数组

  - key: GET 请求参数名



返回值:

  - 匹配该名称的 GET 请求参数的值




Example:

``````````````yak
poc.GetHTTPPacketQueryParam(`GET /get?a=b&c=d HTTP/1.1
Content-Type: application/json
Host: pie.dev

`, "a") // 获取GET请求参数a的值
``````````````


#### 定义

`GetHTTPPacketQueryParam(packet []byte, key string) (paramValue string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |
| key | `string` | GET 请求参数名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| paramValue | `string` | 匹配该名称的 GET 请求参数的值 |


### GetHTTPRequestMethod

#### 详细描述
GetHTTPRequestMethod 是一个辅助函数，用于获取请求报文中的请求方法，其返回值为string

参数:

  - packet: 原始 HTTP 请求报文字节数组



返回值:

  - 请求方法，如 GET、POST




Example:

``````````````yak
poc.GetHTTPRequestMethod(`GET /get HTTP/1.1
Content-Type: application/json
Cookie: a=b; a=c; c=d
Host: pie.dev

`) // 获取请求方法，这里会返回"GET"
``````````````


#### 定义

`GetHTTPRequestMethod(packet []byte) (method string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| method | `string` | 请求方法，如 GET、POST |


### GetHTTPRequestPath

#### 详细描述
GetHTTPRequestPath 是一个辅助函数，用于获取请求报文中的路径，返回值是 string，包含 query

参数:

  - packet: 原始 HTTP 请求报文字节数组



返回值:

  - 包含 query 的请求路径




Example:

``````````````yak
poc.GetHTTPRequestPath("GET /a/bc.html?a=1 HTTP/1.1\r\nHost: www.example.com\r\n\r\n") // /a/bc.html?a=1
``````````````


#### 定义

`GetHTTPRequestPath(packet []byte) (path string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| path | `string` | 包含 query 的请求路径 |


### GetHTTPRequestPathWithoutQuery

#### 详细描述
GetHTTPRequestPathWithoutQuery 是一个辅助函数，用于获取请求报文中的路径，返回值是 string，不包含 query

参数:

  - packet: 原始 HTTP 请求报文字节数组



返回值:

  - 不包含 query 的请求路径




Example:

``````````````yak
poc.GetHTTPRequestPathWithoutQuery("GET /a/bc.html?a=1 HTTP/1.1\r\nHost: www.example.com\r\n\r\n") // /a/bc.html
``````````````


#### 定义

`GetHTTPRequestPathWithoutQuery(packet []byte) (path string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| path | `string` | 不包含 query 的请求路径 |


### GetStatusCodeFromResponse

#### 详细描述
GetStatusCodeFromResponse 是一个辅助函数，用于获取响应报文中的状态码，其返回值为int

参数:

  - packet: 原始 HTTP 响应报文字节数组



返回值:

  - 响应状态码




Example:

``````````````yak
poc.GetStatusCodeFromResponse(`HTTP/1.1 200 OK
Content-Length: 5

hello`) // 获取响应报文中的状态码，这里会返回200
``````````````


#### 定义

`GetStatusCodeFromResponse(packet []byte) (statusCode int)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` | 原始 HTTP 响应报文字节数组 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| statusCode | `int` | 响应状态码 |


### GetUrlFromHTTPRequest

#### 详细描述
GetUrlFromHTTPRequest 是一个辅助函数，用于获取请求报文中的URL，其返回值为string

参数:

  - scheme: URL 协议，如 http、https，留空默认为 http

  - packet: 原始 HTTP 请求报文字节数组



返回值:

  - 拼接后的完整 URL




Example:

``````````````yak
poc.GetUrlFromHTTPRequest("https", `GET /get HTTP/1.1
Content-Type: application/json
Host: pie.dev

`) // 获取URL，这里会返回"https://pie.dev/get"
``````````````


#### 定义

`GetUrlFromHTTPRequest(scheme string, packet []byte) (url string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| scheme | `string` | URL 协议，如 http、https，留空默认为 http |
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| url | `string` | 拼接后的完整 URL |


### HTTP

#### 详细描述
HTTP 发送请求并且返回原始响应报文，原始请求报文以及错误，它的第一个参数可以接收 []byte, string, http.Request 结构体，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如设置超时时间，或者修改请求报文等

参数:

  - i: 请求源，可为原始报文 []byte/string 或 *http.Request

  - opts: 可选的请求选项，例如 poc.https、poc.timeout、poc.replaceHeader



返回值:

  - 原始响应报文字节数组

  - 原始请求报文字节数组

  - 错误信息，请求失败时返回非空




Example:

``````````````yak
poc.HTTP("GET / HTTP/1.1\r\nHost: www.yaklang.com\r\n\r\n", poc.https(true), poc.replaceHeader("AAA", "BBB")) // yaklang.com发送一个基于HTTPS协议的GET请求，并且添加一个请求头AAA，它的值为BBB
``````````````


#### 定义

`HTTP(i any, opts ...PocConfigOption) (rsp []byte, req []byte, err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 请求源，可为原始报文 []byte/string 或 *http.Request |
| opts | `...PocConfigOption` | 可选的请求选项，例如 poc.https、poc.timeout、poc.replaceHeader |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| rsp | `[]byte` | 原始响应报文字节数组 |
| req | `[]byte` | 原始请求报文字节数组 |
| err | `error` | 错误信息，请求失败时返回非空 |


### HTTPEx

#### 详细描述
HTTPEx 与 HTTP 类似，它发送请求并且返回响应结构体，请求结构体以及错误，它的第一个参数可以接收 []byte, string, http.Request 结构体，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如设置超时时间，或者修改请求报文等

关于结构体中的可用字段和方法可以使用 desc 函数进行查看

参数:

  - i: 请求源，可为原始报文 []byte/string 或 *http.Request

  - opts: 可选的请求选项，例如 poc.https、poc.timeout、poc.replaceHeader



返回值:

  - 响应结构体 LowhttpResponse

  - 请求结构体 *http.Request

  - 错误信息，请求失败时返回非空




Example:

``````````````yak
rsp, req, err = poc.HTTPEx(`GET / HTTP/1.1\r\nHost: www.yaklang.com\r\n\r\n`, poc.https(true), poc.replaceHeader("AAA", "BBB")) // 向yaklang.com发送一个基于HTTPS协议的GET请求，并且添加一个请求头AAA，它的值为BBB
desc(rsp) // 查看响应结构体中的可用字段
``````````````


#### 定义

`HTTPEx(i any, opts ...PocConfigOption) (rspInst *lowhttp.LowhttpResponse, reqInst *http.Request, err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 请求源，可为原始报文 []byte/string 或 *http.Request |
| opts | `...PocConfigOption` | 可选的请求选项，例如 poc.https、poc.timeout、poc.replaceHeader |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| rspInst | `*lowhttp.LowhttpResponse` | 响应结构体 LowhttpResponse |
| reqInst | `*http.Request` | 请求结构体 *http.Request |
| err | `error` | 错误信息，请求失败时返回非空 |


### HTTPPacketForceChunked

#### 详细描述
HTTPPacketForceChunked 将一个HTTP报文的body强制转换为chunked编码

参数:

  - raw: 原始 HTTP 报文字节数组



返回值:

  - 转换为 chunked 编码后的 HTTP 报文字节数组




Example:

``````````````yak
poc.HTTPPacketForceChunked(`POST / HTTP/1.1
Host: example.com
Content-Length: 11

hello world`)
``````````````


#### 定义

`HTTPPacketForceChunked(raw []byte) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` | 原始 HTTP 报文字节数组 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 转换为 chunked 编码后的 HTTP 报文字节数组 |


### HTTPRequestToCurl

#### 详细描述
HTTPRequestToCurl 尝试将 HTTP 请求报文转换为curl命令。第一个参数为是否使用HTTPS，第二个参数为HTTP请求报文，其返回值为string，即转换后的curl命令

参数:

  - https: 是否使用 HTTPS

  - raw: HTTP 请求报文，可为 string 或 bytes



返回值:

  - 转换后的 curl 命令字符串




Example:

``````````````yak
poc.HTTPRequestToCurl(true, "GET / HTTP/1.1\r\nHost: example.com\r\n\r\n")
``````````````


#### 定义

`HTTPRequestToCurl(https bool, raw any) (curlCommand string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| https | `bool` | 是否使用 HTTPS |
| raw | `any` | HTTP 请求报文，可为 string 或 bytes |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| curlCommand | `string` | 转换后的 curl 命令字符串 |


### Head

#### 详细描述
Head 向指定 URL 发送 HEAD 请求并且返回响应结构体，请求结构体以及错误，它的第一个参数是 URL 字符串，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如对设置超时时间，或者修改请求报文等

关于结构体中的可用字段和方法可以使用 desc 函数进行查看

参数:

  - urlStr: 目标 URL 字符串

  - opts: 可选的请求选项，例如 poc.https、poc.timeout



返回值:

  - 响应结构体 LowhttpResponse

  - 请求结构体 *http.Request

  - 错误信息，请求失败时返回非空




Example:

``````````````yak
rsp,req = poc.Head("https://yaklang.com", poc.https(true))~ // 向yaklang.com发送一个基于HTTPS协议的HEAD请求
desc(rsp) // 查看响应结构体中的可用字段
``````````````


#### 定义

`Head(urlStr string, opts ...PocConfigOption) (rspInst *lowhttp.LowhttpResponse, reqInst *http.Request, err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| urlStr | `string` | 目标 URL 字符串 |
| opts | `...PocConfigOption` | 可选的请求选项，例如 poc.https、poc.timeout |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| rspInst | `*lowhttp.LowhttpResponse` | 响应结构体 LowhttpResponse |
| reqInst | `*http.Request` | 请求结构体 *http.Request |
| err | `error` | 错误信息，请求失败时返回非空 |


### IsResponse

#### 详细描述
IsResp 判断传入的数据是否为 HTTP 响应报文

参数:

  - raw: 待判断的数据，可为字节数组或字符串



返回值:

  - 是否为 HTTP 响应报文




Example:

``````````````yak
poc.IsResp(b"HTTP/1.1 200 OK\r\nContent-Length: 2\r\n\r\nok") // true
``````````````


#### 定义

`IsResponse(raw any) (isHTTPResponse bool)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `any` | 待判断的数据，可为字节数组或字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| isHTTPResponse | `bool` | 是否为 HTTP 响应报文 |


### Options

#### 详细描述
Options 向指定 URL 发送 OPTIONS 请求并且返回响应结构体，请求结构体以及错误，它的第一个参数是 URL 字符串，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如对设置超时时间，或者修改请求报文等

关于结构体中的可用字段和方法可以使用 desc 函数进行查看

参数:

  - urlStr: 目标 URL 字符串

  - opts: 可选的请求选项，例如 poc.https、poc.timeout



返回值:

  - 响应结构体 LowhttpResponse

  - 请求结构体 *http.Request

  - 错误信息，请求失败时返回非空




Example:

``````````````yak
rsp,req = poc.Options("https://yaklang.com", poc.https(true))~ // 向yaklang.com发送一个基于HTTPS协议的Options请求
desc(rsp) // 查看响应结构体中的可用字段
``````````````


#### 定义

`Options(urlStr string, opts ...PocConfigOption) (rspInst *lowhttp.LowhttpResponse, reqInst *http.Request, err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| urlStr | `string` | 目标 URL 字符串 |
| opts | `...PocConfigOption` | 可选的请求选项，例如 poc.https、poc.timeout |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| rspInst | `*lowhttp.LowhttpResponse` | 响应结构体 LowhttpResponse |
| reqInst | `*http.Request` | 请求结构体 *http.Request |
| err | `error` | 错误信息，请求失败时返回非空 |


### ParseBytesToHTTPRequest

#### 详细描述
ParseBytesToHTTPRequest 将字节数组解析为 HTTP 请求

参数:

  - raw: 原始 HTTP 请求报文字节数组



返回值:

  - 解析得到的 HTTP 请求对象

  - 错误信息，解析失败时返回非空




Example:

``````````````yak
req, err := str.ParseBytesToHTTPRequest(b"GET / HTTP/1.1\r\nHost: example.com\r\n\r\n")
``````````````


#### 定义

`ParseBytesToHTTPRequest(raw []byte) (reqInst *http.Request, err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` | 原始 HTTP 请求报文字节数组 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| reqInst | `*http.Request` | 解析得到的 HTTP 请求对象 |
| err | `error` | 错误信息，解析失败时返回非空 |


### ParseBytesToHTTPResponse

#### 详细描述
ParseBytesToHTTPResponse 将字节数组解析为 HTTP 响应

参数:

  - res: 原始 HTTP 响应报文字节数组



返回值:

  - 解析得到的 HTTP 响应对象

  - 错误信息，解析失败时返回非空




Example:

``````````````yak
res, err := str.ParseBytesToHTTPResponse(b"HTTP/1.1 200 OK\r\nContent-Length: 2\r\n\r\nok")
``````````````


#### 定义

`ParseBytesToHTTPResponse(res []byte) (rspInst *http.Response, err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| res | `[]byte` | 原始 HTTP 响应报文字节数组 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| rspInst | `*http.Response` | 解析得到的 HTTP 响应对象 |
| err | `error` | 错误信息，解析失败时返回非空 |


### ParseMultiPartFormWithCallback

#### 详细描述
ParseMultiPartFormWithCallback 是一个辅助函数，用于尝试解析请求报文体中的表单并进行回调

参数:

  - req: 原始 HTTP 请求报文字节数组

  - callback: 表单分块回调函数，参数为每个 multipart.Part



返回值:

  - 错误信息，解析失败时返回非空




Example:

``````````````yak
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
``````````````


#### 定义

`ParseMultiPartFormWithCallback(req []byte, callback func(part *multipart.Part)) (err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| req | `[]byte` | 原始 HTTP 请求报文字节数组 |
| callback | `func(part *multipart.Part)` | 表单分块回调函数，参数为每个 multipart.Part |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| err | `error` | 错误信息，解析失败时返回非空 |


### ParseUrlToHTTPRequestRaw

#### 详细描述
ParseUrlToHTTPRequestRaw 将URL解析为原始 HTTP 请求报文，返回是否为 HTTPS，原始请求报文与错误

参数:

  - method: 请求方法，如 GET、POST

  - i: 目标 URL，可为字符串或可转换为字符串的对象



返回值:

  - 是否为 HTTPS

  - 原始 HTTP 请求报文字节数组

  - 错误信息，解析失败时返回非空




Example:

``````````````yak
ishttps, raw, err = poc.ParseUrlToHTTPRequestRaw("GET", "https://yaklang.com")
``````````````


#### 定义

`ParseUrlToHTTPRequestRaw(method string, i any) (isHttps bool, req []byte, err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| method | `string` | 请求方法，如 GET、POST |
| i | `any` | 目标 URL，可为字符串或可转换为字符串的对象 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| isHttps | `bool` | 是否为 HTTPS |
| req | `[]byte` | 原始 HTTP 请求报文字节数组 |
| err | `error` | 错误信息，解析失败时返回非空 |


### Post

#### 详细描述
Post 向指定 URL 发送 POST 请求并且返回响应结构体，请求结构体以及错误，它的第一个参数是 URL 字符串，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如对设置超时时间，或者修改请求报文等

关于结构体中的可用字段和方法可以使用 desc 函数进行查看

参数:

  - urlStr: 目标 URL 字符串

  - opts: 可选的请求选项，例如 poc.https、poc.postParams



返回值:

  - 响应结构体 LowhttpResponse

  - 请求结构体 *http.Request

  - 错误信息，请求失败时返回非空




Example:

``````````````yak
rsp,req = poc.Post("https://yaklang.com", poc.https(true))~ // 向yaklang.com发送一个基于HTTPS协议的POST请求
desc(rsp) // 查看响应结构体中的可用字段
``````````````


#### 定义

`Post(urlStr string, opts ...PocConfigOption) (rspInst *lowhttp.LowhttpResponse, reqInst *http.Request, err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| urlStr | `string` | 目标 URL 字符串 |
| opts | `...PocConfigOption` | 可选的请求选项，例如 poc.https、poc.postParams |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| rspInst | `*lowhttp.LowhttpResponse` | 响应结构体 LowhttpResponse |
| reqInst | `*http.Request` | 请求结构体 *http.Request |
| err | `error` | 错误信息，请求失败时返回非空 |


### RemoveSession

#### 详细描述
RemoveSession 清除指定的 session，删除其关联的 cookiejar

这在完成一系列请求后清理资源时很有用

参数:

  - session: 要清除的 session 标识符




Example:

``````````````yak
poc.Get("https://example.com/login", poc.session("user1")) // 使用 session "user1" 登录
poc.Get("https://example.com/api", poc.session("user1"))   // 继续使用 session "user1"
poc.RemoveSession("user1") // 清除 session "user1"，释放其 cookiejar
``````````````


#### 定义

`RemoveSession(session string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| session | `string` | 要清除的 session 标识符 |


### ReplaceAllHTTPPacketPostParams

#### 详细描述
ReplaceAllHTTPPacketPostParams 是一个辅助函数，用于改变请求报文，修改所有 POST 请求参数，如果不存在则会增加，其接收一个 map[string]string 类型的参数，其中 key 为 POST 请求参数名，value 为 POST 请求参数值

参数:

  - packet: 原始 HTTP 请求报文字节数组

  - values: POST 请求参数键值对表，会替换所有 POST 参数



返回值:

  - 修改后的 HTTP 请求报文字节数组




Example:

``````````````yak
_, raw, _ = poc.ParseUrlToHTTPRequestRaw("POST", "https://pie.dev/post")
poc.ReplaceAllHTTPPacketPostParams(raw, {"a":"b", "c":"d"}) // 添加POST请求参数a，值为b，POST请求参数c，值为d
``````````````


#### 定义

`ReplaceAllHTTPPacketPostParams(packet []byte, values map[string]string) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |
| values | `map[string]string` | POST 请求参数键值对表，会替换所有 POST 参数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 修改后的 HTTP 请求报文字节数组 |


### ReplaceAllHTTPPacketPostParamsWithoutEscape

#### 详细描述
ReplaceAllHTTPPacketPostParamsWithoutEscape 是一个辅助函数，用于改变请求报文，修改所有 POST 请求参数，如果不存在则会增加，其接收一个 map[string]string 类型的参数，其中 key 为 POST 请求参数名，value 为 POST 请求参数值

与 poc.ReplaceAllHTTPPacketPostParams 类似，但是不会将参数值进行转义



参数:

  - packet: 原始 HTTP 请求报文字节数组

  - values: POST 请求参数键值对表（值不做 URL 转义）



返回值:

  - 修改后的 HTTP 请求报文字节数组




Example:

``````````````yak
_, raw, _ = poc.ParseUrlToHTTPRequestRaw("POST", "https://pie.dev/post")
poc.ReplaceAllHTTPPacketPostParamsWithoutEscape(raw, {"a":"b", "c":"d"}) // 添加POST请求参数a，值为b，POST请求参数c，值为d
``````````````


#### 定义

`ReplaceAllHTTPPacketPostParamsWithoutEscape(packet []byte, values map[string]string) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |
| values | `map[string]string` | POST 请求参数键值对表（值不做 URL 转义） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 修改后的 HTTP 请求报文字节数组 |


### ReplaceAllHTTPPacketQueryParams

#### 详细描述
ReplaceAllHTTPPacketQueryParams 是一个辅助函数，用于改变请求报文，修改所有 GET 请求参数，如果不存在则会增加，其接收一个 map[string]string 类型的参数，其中 key 为请求参数名，value 为请求参数值

参数:

  - packet: 原始 HTTP 请求报文字节数组

  - values: GET 请求参数键值对表，会替换所有 GET 参数



返回值:

  - 修改后的 HTTP 请求报文字节数组




Example:

``````````````yak
poc.ReplaceAllHTTPPacketQueryParams(poc.BasicRequest(), {"a":"b", "c":"d"}) // 添加GET请求参数a，值为b，添加GET请求参数c，值为d
``````````````


#### 定义

`ReplaceAllHTTPPacketQueryParams(packet []byte, values map[string]string) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |
| values | `map[string]string` | GET 请求参数键值对表，会替换所有 GET 参数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 修改后的 HTTP 请求报文字节数组 |


### ReplaceAllHTTPPacketQueryParamsWithoutEscape

#### 详细描述
ReplaceAllHTTPPacketQueryParamsWithoutEscape 是一个辅助函数，用于改变请求报文，修改所有 GET 请求参数，如果不存在则会增加，其接收一个 map[string]string 类型的参数，其中 key 为请求参数名，value 为请求参数值

与 poc.ReplaceAllHTTPPacketQueryParams 类似，但是不会将参数值进行转义

参数:

  - packet: 原始 HTTP 请求报文字节数组

  - values: GET 请求参数键值对表（值不做 URL 转义）



返回值:

  - 修改后的 HTTP 请求报文字节数组




Example:

``````````````yak
poc.ReplaceAllHTTPPacketQueryParamsWithoutEscape(poc.BasicRequest(), {"a":"b", "c":"d"}) // 添加GET请求参数a，值为b，添加GET请求参数c，值为d
``````````````


#### 定义

`ReplaceAllHTTPPacketQueryParamsWithoutEscape(packet []byte, values map[string]string) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |
| values | `map[string]string` | GET 请求参数键值对表（值不做 URL 转义） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 修改后的 HTTP 请求报文字节数组 |


### ReplaceBody

#### 详细描述
ReplaceBody 将原始 HTTP 请求报文中的 body 替换为指定的 body，并指定是否为 chunked，返回新的 HTTP 请求报文

参数:

  - raw: 原始 HTTP 报文字节数组

  - body: 替换后的报文主体内容

  - chunk: 是否使用 chunked 传输编码



返回值:

  - 修改后的 HTTP 报文字节数组




Example:

``````````````yak
poc.ReplaceBody(`POST / HTTP/1.1
Host: example.com
Content-Length: 11

hello world`, "hello yak", false)
``````````````


#### 定义

`ReplaceBody(raw []byte, body []byte, chunk bool) (newHTTPRequest []byte)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` | 原始 HTTP 报文字节数组 |
| body | `[]byte` | 替换后的报文主体内容 |
| chunk | `bool` | 是否使用 chunked 传输编码 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| newHTTPRequest | `[]byte` | 修改后的 HTTP 报文字节数组 |


### ReplaceHTTPPacketBasicAuth

#### 详细描述
ReplaceHTTPPacketBasicAuth 是一个辅助函数，用于改变请求报文，修改Authorization请求头为基础认证的密文，如果不存在则会增加，实际上是ReplaceHTTPPacketHeader(&#34;Authorization&#34;, codec.EncodeBase64(username + &#34;:&#34; + password))的简写

参数:

  - packet: 原始 HTTP 请求报文字节数组

  - username: 基础认证用户名

  - password: 基础认证密码



返回值:

  - 修改后的 HTTP 请求报文字节数组




Example:

``````````````yak
_, raw, _ = poc.ParseUrlToHTTPRequestRaw("GET", "https://pie.dev/basic-auth/admin/password")
poc.ReplaceHTTPPacketBasicAuth(raw, "admin", "password") // 修改Authorization请求头
``````````````


#### 定义

`ReplaceHTTPPacketBasicAuth(packet []byte, username string, password string) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |
| username | `string` | 基础认证用户名 |
| password | `string` | 基础认证密码 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 修改后的 HTTP 请求报文字节数组 |


### ReplaceHTTPPacketBody

#### 详细描述
ReplaceHTTPPacketBody 是一个辅助函数，用于改变 HTTP 报文，修改 HTTP 报文主体内容，第一个参数为原始 HTTP 报文，第二个参数为修改的报文主体内容

参数:

  - packet: 原始 HTTP 报文字节数组

  - body: 修改后的报文主体内容



返回值:

  - 修改后的 HTTP 报文字节数组




Example:

``````````````yak
poc.ReplaceHTTPPacketBody(poc.BasicRequest(), "a=b") // 修改请求体内容为a=b
``````````````


#### 定义

`ReplaceHTTPPacketBody(packet []byte, body []byte) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` | 原始 HTTP 报文字节数组 |
| body | `[]byte` | 修改后的报文主体内容 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 修改后的 HTTP 报文字节数组 |


### ReplaceHTTPPacketCookie

#### 详细描述
ReplaceHTTPPacketCookie 是一个辅助函数，用于改变请求报文，修改Cookie请求头中的值，如果不存在则会增加

参数:

  - packet: 原始 HTTP 报文字节数组

  - key: Cookie 名称

  - value: Cookie 的值



返回值:

  - 修改后的 HTTP 报文字节数组




Example:

``````````````yak
poc.ReplaceHTTPPacketCookie(poc.BasicRequest(), "aaa", "bbb") // 修改cookie值，由于这里没有aaa的cookie值，所以会增加
``````````````


#### 定义

`ReplaceHTTPPacketCookie(packet []byte, key string, value any) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` | 原始 HTTP 报文字节数组 |
| key | `string` | Cookie 名称 |
| value | `any` | Cookie 的值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 修改后的 HTTP 报文字节数组 |


### ReplaceHTTPPacketCookies

#### 详细描述
ReplaceHTTPPacketCookies 是一个辅助函数，用于改变请求报文，修改Cookie请求头

参数:

  - packet: 原始 HTTP 报文字节数组

  - m: Cookie 键值对表



返回值:

  - 修改后的 HTTP 报文字节数组




Example:

``````````````yak
poc.ReplaceHTTPPacketCookies(poc.BasicRequest(), {"aaa":"bbb", "ccc":"ddd"}) // 修改cookie值为aaa=bbb;ccc=ddd
``````````````


#### 定义

`ReplaceHTTPPacketCookies(packet []byte, m any) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` | 原始 HTTP 报文字节数组 |
| m | `any` | Cookie 键值对表 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 修改后的 HTTP 报文字节数组 |


### ReplaceHTTPPacketFirstLine

#### 详细描述
ReplaceHTTPPacketFirstLine 是一个辅助，用于改变请求报文，修改第一行（即请求方法，请求路径，协议版本）

参数:

  - packet: 原始 HTTP 请求报文字节数组

  - firstLine: 新的请求行，如 &#34;GET /test HTTP/1.1&#34;



返回值:

  - 修改后的 HTTP 请求报文字节数组




Example:

``````````````yak
poc.ReplaceHTTPPacketFirstLine(`GET / HTTP/1.1
Host: Example.com
`, "GET /test HTTP/1.1")) // 向 example.com 发起请求，修改请求报文的第一行，请求/test路径
``````````````


#### 定义

`ReplaceHTTPPacketFirstLine(packet []byte, firstLine string) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |
| firstLine | `string` | 新的请求行，如 &#34;GET /test HTTP/1.1&#34; |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 修改后的 HTTP 请求报文字节数组 |


### ReplaceHTTPPacketFormEncoded

#### 详细描述
ReplaceHTTPPacketFormEncoded 是一个辅助函数，用于改变请求报文，替换请求体中的表单，如果不存在则会增加

参数:

  - packet: 原始 HTTP 请求报文字节数组

  - key: 表单字段名

  - value: 表单字段值



返回值:

  - 修改后的 HTTP 请求报文字节数组




Example:

``````````````yak
poc.ReplaceHTTPPacketFormEncoded(`POST /post HTTP/1.1
Host: pie.dev
Content-Type: multipart/form-data; boundary=------------------------OFHnlKtUimimGcXvRSxgCZlIMAyDkuqsxeppbIFm
Content-Length: 203

--------------------------OFHnlKtUimimGcXvRSxgCZlIMAyDkuqsxeppbIFm
Content-Disposition: form-data; name="aaa"

bbb
--------------------------OFHnlKtUimimGcXvRSxgCZlIMAyDkuqsxeppbIFm--`, "ccc", "ddd") // 替换POST请求表单，其中ccc为键，ddd为值
``````````````


#### 定义

`ReplaceHTTPPacketFormEncoded(packet []byte, key string, value string) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |
| key | `string` | 表单字段名 |
| value | `string` | 表单字段值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 修改后的 HTTP 请求报文字节数组 |


### ReplaceHTTPPacketHeader

#### 详细描述
ReplaceHTTPPacketHeader 是一个辅助函数，用于改变请求报文，修改请求头，如果不存在则会增加。

默认情况下（ignoreCase=true）会忽略大小写匹配，若需要严格匹配可使用 ReplaceHTTPPacketHeaderStrict。

参数:

  - packet: 原始 HTTP 报文字节数组

  - headerKey: 请求头名称

  - headerValue: 请求头的值



返回值:

  - 修改后的 HTTP 报文字节数组




Example:

``````````````yak
poc.ReplaceHTTPPacketHeader(poc.BasicRequest(),"AAA", "BBB") // 修改 AAA 请求头，如果不存在则新增（忽略大小写）
poc.ReplaceHTTPPacketHeaderStrict(poc.BasicRequest(),"AAA", "BBB") // 严格匹配 AAA 的大小写，再进行修改/新增
``````````````


#### 定义

`ReplaceHTTPPacketHeader(packet []byte, headerKey string, headerValue any) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` | 原始 HTTP 报文字节数组 |
| headerKey | `string` | 请求头名称 |
| headerValue | `any` | 请求头的值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 修改后的 HTTP 报文字节数组 |


### ReplaceHTTPPacketHost

#### 详细描述
ReplaceHTTPPacketHost 是一个辅助函数，用于改变请求报文，修改Host请求头，如果不存在则会增加，实际上是ReplaceHTTPPacketHeader(&#34;Host&#34;, host)的简写

参数:

  - packet: 原始 HTTP 请求报文字节数组

  - host: 新的 Host 请求头的值



返回值:

  - 修改后的 HTTP 请求报文字节数组




Example:

``````````````yak
_, raw, _ = poc.ParseUrlToHTTPRequestRaw("GET", "https://yaklang.com")
poc.ReplaceHTTPPacketHost(raw, "www.yaklang.com") // 修改Host请求头的值为 www.yaklang.com
``````````````


#### 定义

`ReplaceHTTPPacketHost(packet []byte, host string) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |
| host | `string` | 新的 Host 请求头的值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 修改后的 HTTP 请求报文字节数组 |


### ReplaceHTTPPacketJsonBody

#### 详细描述
ReplaceHTTPPacketJsonBody 是一个辅助函数，用于改变 HTTP 报文，修改 HTTP 报文主体内容（ json 格式），第一个参数为原始 HTTP 报文，第二个参数为修改的报文主体内容（ map 对象）

参数:

  - packet: 原始 HTTP 报文字节数组

  - jsonMap: 修改后的报文主体内容（ map 对象，会被序列化为 JSON）



返回值:

  - 修改后的 HTTP 报文字节数组




Example:

``````````````yak
poc.ReplaceHTTPPacketJsonBody(poc.BasicRequest(), {"a":"b"}) // 修改请求体内容为{"a":"b"}
``````````````


#### 定义

`ReplaceHTTPPacketJsonBody(packet []byte, jsonMap map[string]any) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` | 原始 HTTP 报文字节数组 |
| jsonMap | `map[string]any` | 修改后的报文主体内容（ map 对象，会被序列化为 JSON） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 修改后的 HTTP 报文字节数组 |


### ReplaceHTTPPacketMethod

#### 详细描述
ReplaceHTTPPacketMethod 是一个辅助函数，用于改变请求报文，修改请求方法

参数:

  - packet: 原始 HTTP 请求报文字节数组

  - newMethod: 新的请求方法，如 GET、POST



返回值:

  - 修改后的 HTTP 请求报文字节数组




Example:

``````````````yak
poc.ReplaceHTTPPacketMethod(poc.BasicRequest(), "OPTIONS") // 修改请求方法为OPTIONS
``````````````


#### 定义

`ReplaceHTTPPacketMethod(packet []byte, newMethod string) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |
| newMethod | `string` | 新的请求方法，如 GET、POST |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 修改后的 HTTP 请求报文字节数组 |


### ReplaceHTTPPacketPath

#### 详细描述
ReplaceHTTPPacketPath 是一个辅助函数，用于改变请求报文，修改请求路径

参数:

  - packet: 原始 HTTP 请求报文字节数组

  - p: 新的请求路径



返回值:

  - 修改后的 HTTP 请求报文字节数组




Example:

``````````````yak
poc.ReplaceHTTPPacketPath(poc.BasicRequest(), "/get") // 修改请求路径为/get
``````````````


#### 定义

`ReplaceHTTPPacketPath(packet []byte, p string) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |
| p | `string` | 新的请求路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 修改后的 HTTP 请求报文字节数组 |


### ReplaceHTTPPacketPathFunc

#### 详细描述
ReplaceHTTPPacketPathFunc 是一个辅助函数，使用回调改变请求报文中的请求路径

参数:

  - packet: 原始 HTTP 请求报文字节数组

  - callback: 路径处理回调函数，参数为原路径，返回新路径



返回值:

  - 修改后的 HTTP 请求报文字节数组




Example:

``````````````yak
raw = poc.ReplaceHTTPPacketPathFunc(poc.BasicRequest(), func(p) { return "/get" })
dump(raw)
``````````````


#### 定义

`ReplaceHTTPPacketPathFunc(packet []byte, callback func(originPath string) string) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |
| callback | `func(originPath string) string` | 路径处理回调函数，参数为原路径，返回新路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 修改后的 HTTP 请求报文字节数组 |


### ReplaceHTTPPacketPostParam

#### 详细描述
ReplaceHTTPPacketPostParam 是一个辅助函数，用于改变请求报文，修改POST请求参数，如果不存在则会增加

参数:

  - packet: 原始 HTTP 请求报文字节数组

  - key: POST 请求参数名

  - value: POST 请求参数值



返回值:

  - 修改后的 HTTP 请求报文字节数组




Example:

``````````````yak
_, raw, _ = poc.ParseUrlToHTTPRequestRaw("POST", "https://pie.dev/post")
poc.ReplaceHTTPPacketPostParam(raw, "a", "b") // 添加POST请求参数a，值为b
``````````````


#### 定义

`ReplaceHTTPPacketPostParam(packet []byte, key string, value string) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |
| key | `string` | POST 请求参数名 |
| value | `string` | POST 请求参数值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 修改后的 HTTP 请求报文字节数组 |


### ReplaceHTTPPacketQueryParam

#### 详细描述
ReplaceHTTPPacketQueryParam 是一个辅助函数，用于改变请求报文，修改GET请求参数，如果不存在则会增加

参数:

  - packet: 原始 HTTP 请求报文字节数组

  - key: GET 请求参数名

  - value: GET 请求参数值



返回值:

  - 修改后的 HTTP 请求报文字节数组




Example:

``````````````yak
_, raw, _ = poc.ParseUrlToHTTPRequestRaw("GET", "https://pie.dev/get")
poc.ReplaceHTTPPacketQueryParam(raw, "a", "b") // 添加GET请求参数a，值为b
``````````````


#### 定义

`ReplaceHTTPPacketQueryParam(packet []byte, key string, value string) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |
| key | `string` | GET 请求参数名 |
| value | `string` | GET 请求参数值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 修改后的 HTTP 请求报文字节数组 |


### ReplaceHTTPPacketQueryParamWithoutEscape

#### 详细描述
ReplaceHTTPPacketQueryParamWithoutEscape 是一个辅助函数，用于改变请求报文，修改所有 GET 请求参数，如果不存在则会增加，其接收一个 map[string]string 类型的参数，其中 key 为请求参数名，value 为请求参数值

与 poc.ReplaceHTTPPacketQueryParam 类似，但是不会将参数值进行转义

参数:

  - packet: 原始 HTTP 请求报文字节数组

  - key: GET 请求参数名

  - value: GET 请求参数值（不做 URL 转义）



返回值:

  - 修改后的 HTTP 请求报文字节数组




Example:

``````````````yak
poc.ReplaceAllHTTPPacketQueryParamsWithoutEscape(poc.BasicRequest(), "a", "b") // 添加GET请求参数a，值为b
``````````````


#### 定义

`ReplaceHTTPPacketQueryParamWithoutEscape(packet []byte, key string, value string) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |
| key | `string` | GET 请求参数名 |
| value | `string` | GET 请求参数值（不做 URL 转义） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 修改后的 HTTP 请求报文字节数组 |


### ReplaceHTTPPacketUploadFile

#### 详细描述
ReplaceHTTPPacketUploadFile 是一个辅助函数，用于改变请求报文，替换请求体中的上传的文件，其中第一个参数为原始请求报文，第二个参数为表单名，第三个参数为文件名，第四个参数为文件内容，第五个参数是可选参数，为文件类型(Content-Type)，如果表单名不存在则会增加

参数:

  - packet: 原始 HTTP 请求报文字节数组

  - fieldName: 表单字段名

  - fileName: 文件名

  - fileContent: 文件内容

  - contentType: 可选，文件类型(Content-Type)



返回值:

  - 修改后的 HTTP 请求报文字节数组




Example:

``````````````yak
_, raw, _ = poc.ParseUrlToHTTPRequestRaw("POST", "https://pie.dev/post")
poc.ReplaceHTTPPacketUploadFile(raw, "file", "phpinfo.php", "<?php phpinfo(); ?>", "image/jpeg")) // 添加POST请求表单，其文件名为phpinfo.php，内容为<?php phpinfo(); ?>，文件类型为image/jpeg
``````````````


#### 定义

`ReplaceHTTPPacketUploadFile(packet []byte, fieldName string, fileName string, fileContent any, contentType ...string) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |
| fieldName | `string` | 表单字段名 |
| fileName | `string` | 文件名 |
| fileContent | `any` | 文件内容 |
| contentType | `...string` | 可选，文件类型(Content-Type) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 修改后的 HTTP 请求报文字节数组 |


### Split

#### 详细描述
Split 切割 HTTP 报文，返回响应头和响应体，其第一个参数是原始HTTP报文，接下来可以接收零个到多个回调函数，其在每次解析到请求头时回调

参数:

  - raw: 原始 HTTP 报文字节数组

  - hook: 可选的回调函数，每解析到一行请求头时回调



返回值:

  - 报文头部字符串

  - 报文体字节数组




Example:

``````````````yak
poc.Split(`POST / HTTP/1.1
Content-Type: application/json
Host: www.example.com

{"key": "value"}`, func(header) {
dump(header)
})
``````````````


#### 定义

`Split(raw []byte, hook ...func(line string)) (headers string, body []byte)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` | 原始 HTTP 报文字节数组 |
| hook | `...func(line string)` | 可选的回调函数，每解析到一行请求头时回调 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| headers | `string` | 报文头部字符串 |
| body | `[]byte` | 报文体字节数组 |


### Websocket

#### 详细描述
Websocket 实际上等价于`poc.HTTP(..., poc.websocket(true))`，用于快速发送请求并建立websocket连接并且返回原始响应报文，原始请求报文以及错误

参数:

  - raw: websocket 握手请求源，可为原始报文 []byte/string 或 *http.Request

  - opts: 可选的请求选项，例如 poc.websocketFromServer、poc.websocketOnClient



返回值:

  - 原始响应报文字节数组

  - 原始请求报文字节数组

  - 错误信息，请求失败时返回非空




Example:

``````````````yak
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
``````````````


#### 定义

`Websocket(raw any, opts ...PocConfigOption) (rsp []byte, req []byte, err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `any` | websocket 握手请求源，可为原始报文 []byte/string 或 *http.Request |
| opts | `...PocConfigOption` | 可选的请求选项，例如 poc.websocketFromServer、poc.websocketOnClient |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| rsp | `[]byte` | 原始响应报文字节数组 |
| req | `[]byte` | 原始请求报文字节数组 |
| err | `error` | 错误信息，请求失败时返回非空 |


### afterSaveHandler

#### 详细描述
afterSaveHandler 是一个请求选项参数，用于设置在此次请求记录保存到数据库之后的回调函数

参数:

  - f: 一个或多个回调函数，参数为已保存的 HTTPFlow 对象



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
// 保存后回调，依赖网络，此处仅作示意
poc.Get("https://example.com", poc.save(true), poc.afterSaveHandler(func(flow) { println(flow.Url) }))~
``````````````


#### 定义

`afterSaveHandler(f ...func(flow *schema.HTTPFlow)) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `...func(flow *schema.HTTPFlow)` | 一个或多个回调函数，参数为已保存的 HTTPFlow 对象 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### appendCookie

#### 详细描述
appendCookie 是一个请求选项参数，用于改变请求报文，添加 Cookie 请求头中的值

参数:

  - key: Cookie 名称

  - value: Cookie 的值



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.Get("https://pie.dev/get", poc.appendCookie("aaa", "bbb")) // 向 pie.dev 发起请求，添加cookie键值对aaa:bbb
``````````````


#### 定义

`appendCookie(key string, value string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` | Cookie 名称 |
| value | `string` | Cookie 的值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### appendFormEncoded

#### 详细描述
appendFormEncoded 是一个请求选项参数，用于改变请求报文，添加请求体中的表单

参数:

  - key: 表单字段名

  - value: 表单字段值



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.Post("https://pie.dev/post", poc.appendFormEncoded("aaa", "bbb")) // 向 pie.dev 发起请求，添加POST请求表单，其中aaa为键，bbb为值
``````````````


#### 定义

`appendFormEncoded(key string, value string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` | 表单字段名 |
| value | `string` | 表单字段值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### appendHeader

#### 详细描述
appendHeader 是一个请求选项参数，用于改变请求报文，添加请求头

参数:

  - key: 请求头名称

  - value: 请求头的值



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.Post("https://pie.dev/post", poc.appendHeader("AAA", "BBB")) // 向 pie.dev 发起请求，添加AAA请求头的值为BBB
``````````````


#### 定义

`appendHeader(key string, value string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` | 请求头名称 |
| value | `string` | 请求头的值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### appendHeaders

#### 详细描述
appendHeaders 是一个请求选项参数，用于改变请求报文，添加请求头

参数:

  - headers: 请求头键值对表，会逐个追加



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.Post("https://pie.dev/post", poc.appendHeaders({"AAA": "BBB","CCC": "DDD"})) // 向 pie.dev 发起请求，添加AAA请求头的值为BBB
``````````````


#### 定义

`appendHeaders(headers map[string]string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| headers | `map[string]string` | 请求头键值对表，会逐个追加 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### appendPath

#### 详细描述
appendPath 是一个请求选项参数，用于改变请求报文，在现有请求路径后添加请求路径

参数:

  - path: 要追加到现有路径后的路径片段



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.Get("https://yaklang.com/docs", poc.appendPath("/api/poc")) // 向 yaklang.com 发起请求，实际上请求路径为/docs/api/poc
``````````````


#### 定义

`appendPath(path string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` | 要追加到现有路径后的路径片段 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### appendPostParam

#### 详细描述
appendPostParam 是一个请求选项参数，用于改变请求报文，添加 POST 请求参数

参数:

  - key: POST 请求参数名

  - value: POST 请求参数值



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.Post("https://pie.dev/post", poc.appendPostParam("a", "b")) // 向 pie.dev 发起请求，添加POST请求参数a，值为b
``````````````


#### 定义

`appendPostParam(key string, value string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` | POST 请求参数名 |
| value | `string` | POST 请求参数值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### appendQueryParam

#### 详细描述
appendQueryParam 是一个请求选项参数，用于改变请求报文，添加 GET 请求参数

参数:

  - key: GET 请求参数名

  - value: GET 请求参数值



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.Get("https://pie.dev/get", poc.appendQueryParam("a", "b")) // 向 pie.dev 发起请求，添加GET请求参数a，值为b
``````````````


#### 定义

`appendQueryParam(key string, value string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` | GET 请求参数名 |
| value | `string` | GET 请求参数值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### appendUploadFile

#### 详细描述
appendUploadFile 是一个请求选项参数，用于改变请求报文，添加请求体中的上传的文件，其中第一个参数为表单名，第二个参数为文件名，第三个参数为文件内容，第四个参数是可选参数，为文件类型(Content-Type)

参数:

  - fieldName: 表单字段名

  - fileName: 文件名

  - fileContent: 文件内容

  - contentType: 可选，文件类型(Content-Type)



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.Post("https://pie.dev/post", poc.appendUploadFile("file", "phpinfo.php", "<?php phpinfo(); ?>", "image/jpeg"))// 向 pie.dev 发起请求，添加POST请求表单，其文件名为phpinfo.php，内容为<?php phpinfo(); ?>，文件类型为image/jpeg
``````````````


#### 定义

`appendUploadFile(fieldName string, fileName string, fileContent any, contentType ...string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fieldName | `string` | 表单字段名 |
| fileName | `string` | 文件名 |
| fileContent | `any` | 文件内容 |
| contentType | `...string` | 可选，文件类型(Content-Type) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### body

#### 详细描述
body 是一个请求选项参数，用于指定请求的 body，需要传入一个任意类型的参数，如果不是 string 或者 bytes 会抛出日志并忽略。

参数:

  - i: 请求体内容，需为 string 或 bytes 类型



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.Post("https://www.example.com", poc.body("a=b")) // 向 www.example.com 发起请求，请求的 body 为 a=b
``````````````


#### 定义

`body(i any) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 请求体内容，需为 string 或 bytes 类型 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### bodyStreamHandler

#### 详细描述
bodyStreamHandler 是一个请求选项参数，可以设置一个回调函数，如果 body 读取了，将会复制一份给这个流，在这个流中处理 body 是不会影响最终结果的，一般用于处理较长的 chunk 数据

参数:

  - i: 流式处理回调函数，参数依次为响应头字节、响应体读取流



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
// 流式处理响应体，依赖网络，此处仅作示意
poc.Get("https://example.com/file", poc.bodyStreamHandler(func(header, body) { io.Copy(os.Stdout, body) }))~
``````````````


#### 定义

`bodyStreamHandler(i func(r []byte, closer io.ReadCloser)) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `func(r []byte, closer io.ReadCloser)` | 流式处理回调函数，参数依次为响应头字节、响应体读取流 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### connPool

#### 详细描述
connPool 是一个请求选项参数，用于指定是否使用连接池，默认不使用连接池

参数:

  - b: 是否使用连接池



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
rsp, req, err = poc.HTTP(x`POST /post HTTP/1.1
Content-Type: application/json
Host: pie.dev

{"key": "asd"}`, poc.connPool(true)) // 使用连接池发送请求，这在发送多个请求时非常有用
``````````````


#### 定义

`connPool(b bool) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` | 是否使用连接池 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### connectTimeout

#### 详细描述
connectTimeout 是一个请求选项参数，用于指定连接超时时间，默认为15秒

参数:

  - f: 连接超时时间，单位为秒



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.Get("https://www.example.com", poc.connectTimeout(15)) // 向 www.example.com 发起请求，连接超时时间为15秒
``````````````


#### 定义

`connectTimeout(f float64) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `float64` | 连接超时时间，单位为秒 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### context

#### 详细描述
context 是一个请求选项参数，用于指定请求的上下文

参数:

  - ctx: 上下文对象，可用于取消请求



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
ctx = context.New()
poc.Get("https://exmaple.com", poc.context(ctx)) // 向 example.com 发起请求，使用指定的上下文
``````````````


#### 定义

`context(ctx context.Context) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` | 上下文对象，可用于取消请求 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### cookie

#### 详细描述
cookie 是一个请求选项参数，用于改变请求报文，添加 Cookie 请求头中的值

参数:

  - c: Cookie 字符串，或当提供 values 时作为 Cookie 名称

  - values: 可选，Cookie 的值（提供时 c 作为名称）



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.Get("https://pie.dev/get", poc.cookie("a=b; c=d")) // 向 pie.dev 发起请求，添加Cookie请求头，其值为a=b; c=d
poc.Get("https://pie.dev/get", poc.cookie("a", "b")) // 向 pie.dev 发起请求，添加Cookie请求头，其值为a=b
``````````````


#### 定义

`cookie(c string, values ...any) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| c | `string` | Cookie 字符串，或当提供 values 时作为 Cookie 名称 |
| values | `...any` | 可选，Cookie 的值（提供时 c 作为名称） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### deleteCookie

#### 详细描述
deleteCookie 是一个请求选项参数，用于改变请求报文，删除 Cookie 中的值

参数:

  - key: 要删除的 Cookie 名称



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.HTTP(`GET /get HTTP/1.1
Content-Type: application/json
Cookie: aaa=bbb; ccc=ddd
Host: pie.dev

`, poc.deleteCookie("aaa"))// 向 pie.dev 发起请求，删除Cookie中的aaa
``````````````


#### 定义

`deleteCookie(key string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` | 要删除的 Cookie 名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### deleteForm

#### 详细描述
deleteForm 是一个请求选项参数，用于改变请求报文，删除 POST 请求表单

参数:

  - key: 要删除的表单字段名



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
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
``````````````


#### 定义

`deleteForm(key string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` | 要删除的表单字段名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### deleteHeader

#### 详细描述
deleteHeader 是一个请求选项参数，用于改变请求报文，删除请求头

参数:

  - key: 要删除的请求头名称



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.HTTP(`GET /get HTTP/1.1
Content-Type: application/json
AAA: BBB
Host: pie.dev

`, poc.deleteHeader("AAA"))// 向 pie.dev 发起请求，删除AAA请求头
``````````````


#### 定义

`deleteHeader(key string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` | 要删除的请求头名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### deletePostParam

#### 详细描述
deletePostParam 是一个请求选项参数，用于改变请求报文，删除 POST 请求参数

参数:

  - key: 要删除的 POST 请求参数名



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.HTTP(`POST /post HTTP/1.1
Content-Type: application/json
Content-Length: 7
Host: pie.dev

a=b&c=d`, poc.deletePostParam("a")) // 向 pie.dev 发起请求，删除POST请求参数a
``````````````


#### 定义

`deletePostParam(key string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` | 要删除的 POST 请求参数名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### deleteQueryParam

#### 详细描述
deleteQueryParam 是一个请求选项参数，用于改变请求报文，删除 GET 请求参数

参数:

  - key: 要删除的 GET 请求参数名



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.HTTP(`GET /get?a=b&c=d HTTP/1.1
Content-Type: application/json
Host: pie.dev

`, poc.deleteQueryParam("a")) // 向 pie.dev 发起请求，删除GET请求参数a
``````````````


#### 定义

`deleteQueryParam(key string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` | 要删除的 GET 请求参数名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### disableSession

#### 详细描述
disableSession 为 true 时不自动分配 session，也不启用 cookie jar（适合无需 cookie 的探测请求）

参数:

  - b: 是否禁用 session 与 cookie jar



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
// 禁用 session，依赖网络，此处仅作示意
poc.Get("https://example.com", poc.disableSession(true))~
``````````````


#### 定义

`disableSession(b bool) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` | 是否禁用 session 与 cookie jar |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### dnsNoCache

#### 详细描述
dnsNoCache 是一个请求选项参数，用于指定请求时不使用DNS缓存，默认使用DNS缓存

参数:

  - b: 是否禁用 DNS 缓存



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
// 向 example.com 发起请求，不使用DNS缓存
poc.Get("https://exmaple.com", poc.dnsNoCache(true))
``````````````


#### 定义

`dnsNoCache(b bool) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` | 是否禁用 DNS 缓存 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### dnsServer

#### 详细描述
dnsServer 是一个请求选项参数，用于指定请求所使用的DNS服务器，默认使用系统自带的DNS服务器

参数:

  - servers: 一个或多个 DNS 服务器地址



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
// 向 example.com 发起请求，使用指定的DNS服务器
poc.Get("https://exmaple.com", poc.dnsServer("8.8.8.8", "1.1.1.1"))
``````````````


#### 定义

`dnsServer(servers ...string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| servers | `...string` | 一个或多个 DNS 服务器地址 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### downloadDir

#### 详细描述
downloadDir 是一个下载选项参数，用于指定文件保存目录

如果不指定，将保存到默认的 yakit 下载目录

参数:

  - dir: 文件保存目录



返回值:

  - 一个请求选项，作为可变参数传入 poc.Download 等




Example:

``````````````yak
poc.Download("https://example.com/file.zip", poc.downloadDir("/tmp/downloads"))
``````````````


#### 定义

`downloadDir(dir string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| dir | `string` | 文件保存目录 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.Download 等 |


### downloadFilename

#### 详细描述
downloadFilename 是一个下载选项参数，用于手动指定保存的文件名

如果不指定，将自动从 Content-Disposition 响应头或 URL 路径中提取文件名

参数:

  - filename: 指定保存的文件名



返回值:

  - 一个请求选项，作为可变参数传入 poc.Download 等




Example:

``````````````yak
poc.Download("https://example.com/file.zip", poc.downloadFilename("my_file.zip"))
``````````````


#### 定义

`downloadFilename(filename string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| filename | `string` | 指定保存的文件名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.Download 等 |


### downloadFinished

#### 详细描述
downloadFinished 是一个下载选项参数，用于设置下载完成回调函数

回调函数接收一个参数：保存的文件完整路径

参数:

  - callback: 完成回调函数，参数为已保存文件的完整路径



返回值:

  - 一个请求选项，作为可变参数传入 poc.Download 等




Example:

``````````````yak
poc.Download("https://example.com/file.zip", poc.downloadFinished(func(filePath) {

	println("下载完成: " + filePath)

}))
``````````````


#### 定义

`downloadFinished(callback func(filePath string)) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `func(filePath string)` | 完成回调函数，参数为已保存文件的完整路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.Download 等 |


### downloadProgress

#### 详细描述
downloadProgress 是一个下载选项参数，用于设置下载进度回调函数

回调函数接收三个参数：已下载字节数、总字节数、下载百分比(0-100)

参数:

  - callback: 进度回调函数，参数依次为已下载字节数、总字节数、百分比



返回值:

  - 一个请求选项，作为可变参数传入 poc.Download 等




Example:

``````````````yak
poc.Download("https://example.com/file.zip", poc.downloadProgress(func(downloaded, total, percent) {

	println(sprintf("下载进度: %.2f%% (%d/%d)", percent, downloaded, total))

}))
``````````````


#### 定义

`downloadProgress(callback func(downloaded int64, total int64, percent float64)) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `func(downloaded int64, total int64, percent float64)` | 进度回调函数，参数依次为已下载字节数、总字节数、百分比 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.Download 等 |


### fakeua

#### 详细描述
replaceRandomUserAgent 是一个请求选项参数，用于改变请求报文，修改 User-Agent 请求头为随机的常见请求头

返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.Get("https://pie.dev/basic-auth/admin/password", poc.replaceRandomUserAgent()) // 向 pie.dev 发起请求，修改 User-Agent 请求头为随机的常见请求头
``````````````


#### 定义

`fakeua() PocConfigOption`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### fixQueryEscape

#### 详细描述
fixQueryEscape 是一个请求选项参数，用于指定是否修复查询参数中的 URL 编码，默认为 false 即会自动修复URL编码

参数:

  - b: 为 true 时不自动修复查询参数的 URL 编码



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.HTTP(poc.BasicRequest(), poc.fixQueryEscape(true)) // 向 example.com 发起请求，如果查询参数中的 URL 编码不正确或不存在也不会自动修复URL编码
``````````````


#### 定义

`fixQueryEscape(b bool) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` | 为 true 时不自动修复查询参数的 URL 编码 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### fromPlugin

#### 详细描述
fromPlugin 是一个请求选项参数，用于标记此次请求来源于哪个插件，便于请求记录的归类与溯源

参数:

  - b: 来源插件的名称/标识



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
// 标记请求来源插件，依赖网络，此处仅作示意
poc.Get("https://example.com", poc.fromPlugin("my-plugin"))~
``````````````


#### 定义

`fromPlugin(b string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `string` | 来源插件的名称/标识 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### gmTLSCipherSuite

#### 详细描述
WithGmTLSCipherSuite 指定国密 TLS 套件，使用 tls.GMTLS_* 常量（可传多个）。

参数:

  - suites: 一个或多个国密 TLS 套件，使用 tls.GMTLS_* 常量



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.Get("https://example.com", poc.gmTLS(true), poc.gmTLSCipherSuite(tls.GMTLS_ECC_SM4_CBC_SM3))
``````````````


#### 定义

`gmTLSCipherSuite(suites ...int) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| suites | `...int` | 一个或多个国密 TLS 套件，使用 tls.GMTLS_* 常量 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### gmTLSDisableCompatMode

#### 详细描述
WithGmTLSDisableCompatMode 关闭国密兼容模式；不传参等价于 true（仅单次四套）。

参数:

  - disable: 可选，是否关闭兼容模式，默认为 true



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.Get(url, poc.gmTLS(true)) // 默认兼容模式开启
poc.Get(url, poc.gmTLS(true), poc.gmTLSDisableCompatMode()) // 关闭兼容
poc.Get(url, poc.gmTLS(true), poc.gmTLSDisableCompatMode(false)) // 显式保持兼容开启
``````````````


#### 定义

`gmTLSDisableCompatMode(disable ...bool) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| disable | `...bool` | 可选，是否关闭兼容模式，默认为 true |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### gmTLSPrefer

#### 详细描述
gmTLSPrefer 是一个请求选项参数，用于在兼容模式下优先尝试国密 TLS(GMTLS)

返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
// 优先使用国密 TLS，依赖网络，此处仅作示意
poc.Get("https://example.com", poc.gmTLSPrefer(true))~
``````````````


#### 定义

`gmTLSPrefer() PocConfigOption`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### gmTls

#### 详细描述
gmTls 是一个请求选项参数，用于启用国密 TLS(GMTLS)，默认兼容模式同时尝试标准 TLS 与国密 TLS

返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
// 启用国密 TLS，依赖网络，此处仅作示意
poc.Get("https://example.com", poc.gmTls(true))~
``````````````


#### 定义

`gmTls() PocConfigOption`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### gmTlsOnly

#### 详细描述
gmTlsOnly 是一个请求选项参数，用于仅使用国密 TLS(GMTLS)，不再回退到标准 TLS

返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
// 仅使用国密 TLS，依赖网络，此处仅作示意
poc.Get("https://example.com", poc.gmTlsOnly(true))~
``````````````


#### 定义

`gmTlsOnly() PocConfigOption`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### header

#### 详细描述
appendHeader 是一个请求选项参数，用于改变请求报文，添加请求头

参数:

  - key: 请求头名称

  - value: 请求头的值



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.Post("https://pie.dev/post", poc.appendHeader("AAA", "BBB")) // 向 pie.dev 发起请求，添加AAA请求头的值为BBB
``````````````


#### 定义

`header(key string, value string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` | 请求头名称 |
| value | `string` | 请求头的值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### host

#### 详细描述
host 是一个请求选项参数，用于指定实际请求的 host，如果没有设置该请求选项，则会依据原始请求报文中的Host字段来确定实际请求的host

参数:

  - h: 实际请求的 host



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.HTTP(poc.BasicRequest(), poc.host("yaklang.com")) // 实际上请求 yaklang.com
``````````````


#### 定义

`host(h string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `string` | 实际请求的 host |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### http2

#### 详细描述
http2 是一个请求选项参数，用于指定是否使用 http2 协议，默认为 false 即使用http1协议

参数:

  - isHttp2: 是否使用 http2 协议



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.Get("https://www.example.com", poc.http2(true), poc.https(true)) // 向 www.example.com 发起请求，使用 http2 协议
``````````````


#### 定义

`http2(isHttp2 bool) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| isHttp2 | `bool` | 是否使用 http2 协议 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### https

#### 详细描述
https 是一个请求选项参数，用于指定是否使用 https 协议，默认为 false 即使用 http 协议

参数:

  - isHttps: 是否使用 https 协议



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.HTTP(poc.BasicRequest(), poc.https(true)) // 向 example.com 发起请求，使用 https 协议
``````````````


#### 定义

`https(isHttps bool) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| isHttps | `bool` | 是否使用 https 协议 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### jsRedirect

#### 详细描述
jsRedirect 是一个请求选项参数，用于指定是否跟踪JS重定向，默认为false即不会自动跟踪JS重定向

参数:

  - b: 是否跟踪 JS 重定向



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.HTTP(poc.BasicRequest(), poc.redirectTimes(5), poc.jsRedirect(true)) // 向 www.baidu.com 发起请求，如果响应重定向到其他链接也会自动跟踪JS重定向，最多进行5次重定向
``````````````


#### 定义

`jsRedirect(b bool) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` | 是否跟踪 JS 重定向 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### json

#### 详细描述
json 是一个请求选项参数，用于指定请求的 body 为 json 格式，需要传入一个任意类型的参数，会自动转换为 json 格式

参数:

  - i: 任意类型的值，会被序列化为 JSON 作为请求体



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.Post("https://www.example.com", poc.json({"a": "b"})) // 向 www.example.com 发起请求，请求的 body 为 {"a": "b"} 并自动设置 Content-Type 为 application/json
``````````````


#### 定义

`json(i any) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 任意类型的值，会被序列化为 JSON 作为请求体 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### noBodyBuffer

#### 详细描述
noBodyBuffer 是一个请求选项参数，用于指定是否禁用响应体缓冲，设置为 true 时可以避免大文件下载时的内存占用

通常与 WithBodyStreamReaderHandler 配合使用，用于流式处理大文件

参数:

  - b: 是否禁用响应体缓冲



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.Get("https://example.com/large-file.zip",

	poc.noBodyBuffer(true),
	poc.bodyStreamHandler(func(header, body) {
	    // 流式处理响应体，不会将整个文件读入内存
	    io.Copy(file, body)
	}))
``````````````


#### 定义

`noBodyBuffer(b bool) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` | 是否禁用响应体缓冲 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### noFixContentLength

#### 详细描述
noFixContentLength 是一个请求选项参数，用于指定是否修复响应报文中的 Content-Length 字段，默认为 false 即会自动修复Content-Length字段

参数:

  - b: 为 true 时不自动修复 Content-Length



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.HTTP(poc.BasicRequest(), poc.noFixContentLength()) // 向 example.com 发起请求，如果响应报文中的Content-Length字段不正确或不存在	也不会自动修复
``````````````


#### 定义

`noFixContentLength(b bool) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` | 为 true 时不自动修复 Content-Length |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### noRedirect

#### 详细描述
noRedirect 是一个请求选项参数，用于指定是否跟踪重定向，默认为 false 即会自动跟踪重定向

参数:

  - b: 为 true 时不跟踪重定向



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.HTTP(poc.BasicRequest(), poc.noRedirect()) // 向 example.com 发起请求，如果响应重定向到其他链接也不会自动跟踪重定向
``````````````


#### 定义

`noRedirect(b bool) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` | 为 true 时不跟踪重定向 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### noredirect

#### 详细描述
noRedirect 是一个请求选项参数，用于指定是否跟踪重定向，默认为 false 即会自动跟踪重定向

参数:

  - b: 为 true 时不跟踪重定向



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.HTTP(poc.BasicRequest(), poc.noRedirect()) // 向 example.com 发起请求，如果响应重定向到其他链接也不会自动跟踪重定向
``````````````


#### 定义

`noredirect(b bool) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` | 为 true 时不跟踪重定向 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### params

#### 详细描述
params 是一个请求选项参数，用于在请求时使用传入的值，需要注意的是，它可以很方便地使用 `str.f()`或 f-string 代替

参数:

  - i: 参数表，可以是 map 等可被转换为键值对的对象，用于替换报文中的 {{params(key)}} 占位符



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
rsp, req, err = poc.HTTP(x`POST /post HTTP/1.1
Content-Type: application/json
Host: pie.dev

{"key": "{{params(a)}}"}`, poc.params({"a":"bbb"})) // 实际上发送的POST参数为{"key": "bbb"}
``````````````


#### 定义

`params(i any) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 参数表，可以是 map 等可被转换为键值对的对象，用于替换报文中的 {{params(key)}} 占位符 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### password

#### 详细描述
password 是一个请求选项参数，用于指定认证时的密码

参数:

  - password: 认证密码



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.Get("https://www.example.com", poc.username("admin"), poc.password("admin"))
``````````````


#### 定义

`password(password string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| password | `string` | 认证密码 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### port

#### 详细描述
port 是一个请求选项参数，用于指定实际请求的端口，如果没有设置该请求选项，则会依据原始请求报文中的Host字段来确定实际请求的端口

参数:

  - port: 实际请求的端口



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.HTTP(poc.BasicRequest(), poc.host("yaklang.com"), poc.port(443), poc.https(true)) // 实际上请求 yaklang.com 的443端口
``````````````


#### 定义

`port(port int) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| port | `int` | 实际请求的端口 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### postData

#### 详细描述
postData 是一个请求选项参数，用于指定请求的 body 为 post 数据，需要传入一个任意类型的参数，会自动转换为 post 数据

输入是原始字符串，不会修改 Content-Type

参数:

  - i: POST 请求体的原始字符串内容



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.Post("https://www.example.com", poc.postData("a=b")) // 向 www.example.com 发起请求，请求的 body 为 a=b
``````````````


#### 定义

`postData(i string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` | POST 请求体的原始字符串内容 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### postParams

#### 详细描述
postParams 是一个请求选项参数，用于指定请求的 body 为 post 数据，需要传入一个任意类型的参数，会自动转换为 post 数据

输入是 map 类型，会自动转换为 post 数据，同时会自动设置 Content-Type 为 application/x-www-form-urlencoded

参数:

  - i: POST 参数，map 类型时自动转为表单数据，否则作为原始字符串



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.Post("https://www.example.com", poc.postParams({"a": "b"})) // 向 www.example.com 发起请求，请求的 body 为 a=b 并自动设置 Content-Type 为 application/x-www-form-urlencoded
``````````````


#### 定义

`postParams(i any) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | POST 参数，map 类型时自动转为表单数据，否则作为原始字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### postparams

#### 详细描述
postParams 是一个请求选项参数，用于指定请求的 body 为 post 数据，需要传入一个任意类型的参数，会自动转换为 post 数据

输入是 map 类型，会自动转换为 post 数据，同时会自动设置 Content-Type 为 application/x-www-form-urlencoded

参数:

  - i: POST 参数，map 类型时自动转为表单数据，否则作为原始字符串



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.Post("https://www.example.com", poc.postParams({"a": "b"})) // 向 www.example.com 发起请求，请求的 body 为 a=b 并自动设置 Content-Type 为 application/x-www-form-urlencoded
``````````````


#### 定义

`postparams(i any) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | POST 参数，map 类型时自动转为表单数据，否则作为原始字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### proxy

#### 详细描述
proxy 是一个请求选项参数，用于指定请求使用的代理，可以指定多个代理，默认会使用系统代理

参数:

  - proxies: 一个或多个代理地址，如 http://127.0.0.1:7890



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.HTTP(poc.BasicRequest(), poc.proxy("http://127.0.0.1:7890")) // 向 example.com 发起请求，使用 http://127.0.0.1:7890 代理
``````````````


#### 定义

`proxy(proxies ...string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| proxies | `...string` | 一个或多个代理地址，如 http://127.0.0.1:7890 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### query

#### 详细描述
query 是一个请求选项参数，用于指定请求的 query 参数，需要传入一个任意类型的参数，会自动转换为 query 参数

如果输入的是 map 类型，则会自动转换为 query 参数，例如：{&#34;a&#34;: &#34;b&#34;} 转换为 a=b

如果输入的是其他，会把字符串结果直接作为 query 设置

参数:

  - i: query 参数，可以是 map（键值对）或字符串（原始 query）



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.Get("https://www.example.com", poc.query({"a": "b"})) // 向 www.example.com 发起请求，请求的 query 为 a=b, url 为 https://www.example.com?a=b
poc.Get("https://www.example.com", poc.query("a=b")) // 向 www.example.com 发起请求，请求的 query 为 a=b, url 为 https://www.example.com?a=b
poc.Get("https://www.example.com", poc.query("abc")) // 向 www.example.com 发起请求，请求的 query 为 a=b, url 为 https://www.example.com?abc
``````````````


#### 定义

`query(i any) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | query 参数，可以是 map（键值对）或字符串（原始 query） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### randomChunked

#### 详细描述
randomChunked 是一个请求选项参数，用于启用随机分块传输，默认不启用

参数:

  - b: 是否启用随机分块传输



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
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
``````````````


#### 定义

`randomChunked(b bool) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` | 是否启用随机分块传输 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### randomChunkedDelay

#### 详细描述
randomChunkedDelay是一个请求选项参数，用于设置随机分块传输的分块延迟范围，默认最小延迟为50毫秒，最大延迟为100毫秒

参数:

  - min: 分块最小延迟，单位为毫秒

  - max: 分块最大延迟，单位为毫秒



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
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
``````````````


#### 定义

`randomChunkedDelay(min int, max int) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| min | `int` | 分块最小延迟，单位为毫秒 |
| max | `int` | 分块最大延迟，单位为毫秒 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### randomChunkedLength

#### 详细描述
randomChunkedLength 是一个请求选项参数，用于设置随机分块传输的分块长度范围，默认最小长度为10，最大长度为25

参数:

  - min: 分块最小长度

  - max: 分块最大长度



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
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
``````````````


#### 定义

`randomChunkedLength(min int, max int) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| min | `int` | 分块最小长度 |
| max | `int` | 分块最大长度 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### randomChunkedResultHandler

#### 详细描述
randomChunkedResultHandler 是一个请求选项参数，用于设置随机分块传输的结果处理函数

处理函数接受四个参数，id为分块的ID，chunkRaw为分块的原始数据，totalTime为总耗时，chunkSendTime为分块发送的耗时

参数:

  - f: 结果处理回调函数，参数依次为分块 ID、分块原始数据、总耗时、分块发送耗时



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
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
``````````````


#### 定义

`randomChunkedResultHandler(f func(id int, chunkRaw []byte, totalTime time.Duration, chunkSendTime time.Duration)) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `func(id int, chunkRaw []byte, totalTime time.Duration, chunkSendTime time.Duration)` | 结果处理回调函数，参数依次为分块 ID、分块原始数据、总耗时、分块发送耗时 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### randomJA3

#### 详细描述
randomJA3 是一个请求选项参数，用于指定是否启用随机 JA3 指纹，默认为 false

参数:

  - b: 是否启用随机 JA3 指纹



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
// 启用随机 JA3 指纹，依赖网络，此处仅作示意
poc.Get("https://example.com", poc.https(true), poc.randomJA3(true))~
``````````````


#### 定义

`randomJA3(b bool) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` | 是否启用随机 JA3 指纹 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### redirect

#### 详细描述
redirect 是一个请求选项参数，用于设置旧风格的 redirectHandler 函数，如果设置了该选项，则会在重定向时调用该函数，如果该函数返回 true，则会继续重定向，否则不会重定向。其第一个参数为当前的请求，第二个参数为既往的多个请求

参数:

  - i: 重定向处理回调函数，参数依次为当前请求、既往请求列表，返回 true 表示继续重定向



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.HTTP(poc.BasicRequest(), poc.redirect(func(current, vias) {
return true
})) // 向 example.com 发起请求，使用自定义 redirectHandler 函数，如果该函数返回 true，则会继续重定向，否则不会重定向
``````````````


#### 定义

`redirect(i func(current *http.Request, vias []*http.Request) bool) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `func(current *http.Request, vias []*http.Request) bool` | 重定向处理回调函数，参数依次为当前请求、既往请求列表，返回 true 表示继续重定向 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### redirectHandler

#### 详细描述
redirectHandler 是一个请求选项参数，用于作为重定向处理函数，如果设置了该选项，则会在重定向时调用该函数，如果该函数返回 true，则会继续重定向，否则不会重定向。其第一个参数为是否使用 https 协议，第二个参数为原始请求报文，第三个参数为原始响应报文

参数:

  - i: 重定向处理回调函数，参数依次为是否 https、请求报文、响应报文，返回 true 表示继续重定向



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
count = 3
poc.Get("https://pie.dev/redirect/5", poc.redirectHandler(func(https, req, rsp) {
count--
return count >= 0
})) // 向 pie.edv 发起请求，使用自定义 redirectHandler 函数，使用 count 控制，进行最多3次重定向
``````````````


#### 定义

`redirectHandler(i func(isHttps bool, req, rsp []byte) bool) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `func(isHttps bool, req, rsp []byte) bool` | 重定向处理回调函数，参数依次为是否 https、请求报文、响应报文，返回 true 表示继续重定向 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### redirectTimes

#### 详细描述
redirectTimes 是一个请求选项参数，用于指定最大重定向次数，默认为5次

参数:

  - t: 最大重定向次数



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.HTTP(poc.BasicRequest(), poc.redirectTimes(5)) // 向 example.com 发起请求，如果响应重定向到其他链接，则会自动跟踪重定向最多5次
``````````````


#### 定义

`redirectTimes(t int) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| t | `int` | 最大重定向次数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### replaceAllHeaders

#### 详细描述
replaceAllHeaders 是一个请求选项参数，用于改变请求报文，修改修改所有请求头

参数:

  - headers: 请求头键值对表，会替换所有请求头



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.Get("https://pie.dev/get", poc.replaceAllHeaders({"AAA": "BBB", "CCC": "DDD"})) // 向 pie.dev 发起请求，修改所有请求头
``````````````


#### 定义

`replaceAllHeaders(headers map[string]string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| headers | `map[string]string` | 请求头键值对表，会替换所有请求头 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### replaceAllPostParams

#### 详细描述
replaceAllPostParams 是一个请求选项参数，用于改变请求报文，修改所有POST请求参数，如果不存在则会增加，其接收一个map[string]string类型的参数，其中key为POST请求参数名，value为POST请求参数值

参数:

  - values: POST 请求参数键值对表，会替换所有 POST 参数



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.Post("https://pie.dev/post", poc.replaceAllPostParams({"a":"b", "c":"d"})) // 向 pie.dev 发起请求，添加POST请求参数a，值为b，POST请求参数c，值为d
``````````````


#### 定义

`replaceAllPostParams(values map[string]string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| values | `map[string]string` | POST 请求参数键值对表，会替换所有 POST 参数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### replaceAllPostParamsWithoutEscape

#### 详细描述
replaceAllPostParamsWithoutEscape 是一个请求选项参数，用于改变请求报文，修改所有POST请求参数，如果不存在则会增加，其接收一个map[string]string类型的参数，其中key为POST请求参数名，value为POST请求参数值

与 poc.replaceAllPostParams 类似，但是不会将参数值进行转义

参数:

  - values: POST 请求参数键值对表（值不做 URL 转义）



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.Post("https://pie.dev/post", poc.replaceAllPostParamsWithoutEscape({"a":"{{}}", "c":"%%"})) // 向 pie.dev 发起请求，添加POST请求参数a，值为{{}}，POST请求参数c，值为%%
``````````````


#### 定义

`replaceAllPostParamsWithoutEscape(values map[string]string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| values | `map[string]string` | POST 请求参数键值对表（值不做 URL 转义） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### replaceAllQueryParams

#### 详细描述
replaceAllQueryParams 是一个请求选项参数，用于改变请求报文，修改所有 GET 请求参数，如果不存在则会增加，其接收一个map[string]string 类型的参数，其中 key 为请求参数名，value 为请求参数值

参数:

  - values: GET 请求参数键值对表，会替换所有 GET 参数



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.Get("https://pie.dev/get", poc.replaceAllQueryParams({"a":"b", "c":"d"})) // 向 pie.dev 发起请求，添加GET请求参数a，值为b，添加GET请求参数c，值为d
``````````````


#### 定义

`replaceAllQueryParams(values map[string]string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| values | `map[string]string` | GET 请求参数键值对表，会替换所有 GET 参数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### replaceAllQueryParamsWithoutEscape

#### 详细描述
replaceAllQueryParamsWithoutEscape 是一个请求选项参数，用于改变请求报文，修改所有 GET 请求参数，如果不存在则会增加，其接收一个map[string]string 类型的参数，其中 key 为请求参数名，value 为请求参数值

与 poc.replaceAllQueryParams 类似，但是不会将参数值进行转义

参数:

  - values: GET 请求参数键值对表（值不做 URL 转义）



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.Get("https://pie.dev/get", poc.replaceAllQueryParamsWithoutEscape({"a":"{{}}", "c":"%%"})) // 向 pie.dev 发起请求，添加GET请求参数a，值为{{}}，添加GET请求参数c，值为%%
``````````````


#### 定义

`replaceAllQueryParamsWithoutEscape(values map[string]string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| values | `map[string]string` | GET 请求参数键值对表（值不做 URL 转义） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### replaceBasicAuth

#### 详细描述
replaceBasicAuth 是一个请求选项参数，用于改变请求报文，修改 Authorization 请求头为基础认证的密文，如果不存在则会增加，实际上是replaceHeader(&#34;Authorization&#34;, codec.EncodeBase64(username + &#34;:&#34; + password))的简写

参数:

  - username: 基础认证用户名

  - password: 基础认证密码



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.Get("https://pie.dev/basic-auth/admin/password", poc.replaceBasicAuth("admin", "password")) // 向 pie.dev 发起请求进行基础认证，会得到200响应状态码
``````````````


#### 定义

`replaceBasicAuth(username string, password string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| username | `string` | 基础认证用户名 |
| password | `string` | 基础认证密码 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### replaceBody

#### 详细描述
replaceBody 是一个请求选项参数，用于改变请求报文，修改请求体内容，第一个参数为修改后的请求体内容，第二个参数为是否分块传输

参数:

  - body: 修改后的请求体内容

  - chunk: 是否使用分块传输编码



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.Post("https://pie.dev/post", poc.replaceBody("a=b", false)) // 向 pie.dev 发起请求，修改请求体内容为a=b
``````````````


#### 定义

`replaceBody(body []byte, chunk bool) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| body | `[]byte` | 修改后的请求体内容 |
| chunk | `bool` | 是否使用分块传输编码 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### replaceCookie

#### 详细描述
replaceCookie 是一个请求选项参数，用于改变请求报文，修改Cookie请求头中的值，如果不存在则会增加

参数:

  - key: Cookie 名称

  - value: Cookie 的值



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.Get("https://pie.dev/get", poc.replaceCookie("aaa", "bbb")) // 向 pie.dev 发起请求，这里没有aaa的cookie值，所以会增加
``````````````


#### 定义

`replaceCookie(key string, value string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` | Cookie 名称 |
| value | `string` | Cookie 的值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### replaceCookies

#### 详细描述
replaceCookies 是一个请求选项参数，用于改变请求报文，修改所有Cookie请求头中的值

参数:

  - cookies: Cookie 键值对表



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.Get("https://pie.dev/get", poc.replaceCookies({"aaa":"bbb", "ccc":"ddd"})) // 向 pie.dev 发起请求，修改aaa的cookie值为bbb，修改ccc的cookie值为ddd
``````````````


#### 定义

`replaceCookies(cookies any) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cookies | `any` | Cookie 键值对表 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### replaceFirstLine

#### 详细描述
replaceFirstLine 是一个请求选项参数，用于改变请求报文，修改第一行（即请求方法，请求路径，协议版本）

参数:

  - firstLine: 新的请求行，如 &#34;GET /test HTTP/1.1&#34;



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.Get("https://exmaple.com", poc.replaceFirstLine("GET /test HTTP/1.1")) // 向 example.com 发起请求，修改请求报文的第一行，请求/test路径
``````````````


#### 定义

`replaceFirstLine(firstLine string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| firstLine | `string` | 新的请求行，如 &#34;GET /test HTTP/1.1&#34; |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### replaceFormEncoded

#### 详细描述
replaceFormEncoded 是一个请求选项参数，用于改变请求报文，修改请求体中的表单，如果不存在则会增加

参数:

  - key: 表单字段名

  - value: 表单字段值



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.Post("https://pie.dev/post", poc.replaceFormEncoded("aaa", "bbb")) // 向 pie.dev 发起请求，添加POST请求表单，其中aaa为键，bbb为值
``````````````


#### 定义

`replaceFormEncoded(key string, value string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` | 表单字段名 |
| value | `string` | 表单字段值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### replaceHeader

#### 详细描述
replaceHeader 是一个请求选项参数，用于改变请求报文，修改修改请求头，如果不存在则会增加

参数:

  - key: 请求头名称

  - value: 请求头的值



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.Get("https://pie.dev/get", poc.replaceHeader("AAA", "BBB")) // 向 pie.dev 发起请求，修改AAA请求头的值为BBB，这里没有AAA请求头，所以会增加该请求头
``````````````


#### 定义

`replaceHeader(key string, value string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` | 请求头名称 |
| value | `string` | 请求头的值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### replaceHost

#### 详细描述
replaceHost 是一个请求选项参数，用于改变请求报文，修改Host请求头，如果不存在则会增加，实际上是replaceHeader(&#34;Host&#34;, host)的简写

参数:

  - host: 新的 Host 请求头的值



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.Get("https://yaklang.com/", poc.replaceHost("www.yaklang.com")) // 向 yaklang.com 发起请求，修改Host请求头的值为 www.yaklang.com
``````````````


#### 定义

`replaceHost(host string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| host | `string` | 新的 Host 请求头的值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### replaceMethod

#### 详细描述
replaceMethod 是一个请求选项参数，用于改变请求报文，修改请求方法

参数:

  - method: 新的请求方法，如 GET、POST



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.Options("https://exmaple.com", poc.replaceMethod("GET")) // 向 example.com 发起请求，修改请求方法为GET
``````````````


#### 定义

`replaceMethod(method string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| method | `string` | 新的请求方法，如 GET、POST |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### replacePath

#### 详细描述
replacePath 是一个请求选项参数，用于改变请求报文，修改请求路径

参数:

  - path: 新的请求路径



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.Get("https://pie.dev/post", poc.replacePath("/get")) // 向 pie.dev 发起请求，实际上请求路径为/get
``````````````


#### 定义

`replacePath(path string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` | 新的请求路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### replacePathFunc

#### 详细描述
replacePathFunc 是一个请求选项参数，用于使用回调改变请求报文，修改请求路径

参数:

  - handle: 路径处理回调函数，参数为原路径，返回新路径



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.Get("https://pie.dev/post", poc.replacePath(func(a){
	return "/get"
})) // 向 pie.dev 发起请求，实际上请求路径为/get
``````````````


#### 定义

`replacePathFunc(handle func(string) string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| handle | `func(string) string` | 路径处理回调函数，参数为原路径，返回新路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### replacePostParam

#### 详细描述
replacePostParam 是一个请求选项参数，用于改变请求报文，修改 POST 请求参数，如果不存在则会增加

参数:

  - key: POST 请求参数名

  - value: POST 请求参数值



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.Post("https://pie.dev/post", poc.replacePostParam("a", "b")) // 向 pie.dev 发起请求，添加POST请求参数a，值为b
``````````````


#### 定义

`replacePostParam(key string, value string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` | POST 请求参数名 |
| value | `string` | POST 请求参数值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### replaceQueryParam

#### 详细描述
replaceQueryParam 是一个请求选项参数，用于改变请求报文，修改 GET 请求参数，如果不存在则会增加

参数:

  - key: GET 请求参数名

  - value: GET 请求参数值



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.Get("https://pie.dev/get", poc.replaceQueryParam("a", "b")) // 向 pie.dev 发起请求，添加GET请求参数a，值为b
``````````````


#### 定义

`replaceQueryParam(key string, value string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` | GET 请求参数名 |
| value | `string` | GET 请求参数值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### replaceRandomUserAgent

#### 详细描述
replaceRandomUserAgent 是一个请求选项参数，用于改变请求报文，修改 User-Agent 请求头为随机的常见请求头

返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.Get("https://pie.dev/basic-auth/admin/password", poc.replaceRandomUserAgent()) // 向 pie.dev 发起请求，修改 User-Agent 请求头为随机的常见请求头
``````````````


#### 定义

`replaceRandomUserAgent() PocConfigOption`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### replaceUploadFile

#### 详细描述
replaceUploadFile 是一个请求选项参数，用于改变请求报文，修改请求体中的上传的文件，其中第一个参数为表单名，第二个参数为文件名，第三个参数为文件内容，第四个参数是可选参数，为文件类型(Content-Type)，如果不存在则会增加

参数:

  - formName: 表单字段名

  - fileName: 文件名

  - fileContent: 文件内容

  - contentType: 可选，文件类型(Content-Type)



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.Post("https://pie.dev/post", poc.replaceUploadFile("file", "phpinfo.php", "<?php phpinfo(); ?>", "application/x-php")) // 向 pie.dev 发起请求，添加POST请求上传文件，其中file为表单名，phpinfo.php为文件名，<?php phpinfo(); ?>为文件内容，application/x-php为文件类型
``````````````


#### 定义

`replaceUploadFile(formName string, fileName string, fileContent []byte, contentType ...string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| formName | `string` | 表单字段名 |
| fileName | `string` | 文件名 |
| fileContent | `[]byte` | 文件内容 |
| contentType | `...string` | 可选，文件类型(Content-Type) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### replaceUserAgent

#### 详细描述
replaceUserAgent 是一个请求选项参数，用于改变请求报文，修改 User-Agent 请求头，实际上是replaceHeader(&#34;User-Agent&#34;, userAgent)的简写

参数:

  - ua: 新的 User-Agent 请求头的值



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.Get("https://pie.dev/basic-auth/admin/password", poc.replaceUserAgent("yak-http-client")) // 向 pie.dev 发起请求，修改 User-Agent 请求头为 yak-http-client
``````````````


#### 定义

`replaceUserAgent(ua string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ua | `string` | 新的 User-Agent 请求头的值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### retryInStatusCode

#### 详细描述
retryInStatusCode 是一个请求选项参数，用于指定在某些响应状态码的情况下重试，需要搭配 retryTimes 使用

参数:

  - codes: 一个或多个触发重试的响应状态码



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.HTTP(poc.BasicRequest(), poc.retryTimes(5), poc.retryInStatusCode(500, 502)) // 向 example.com 发起请求，如果响应状态码500或502则进行重试，最多进行5次重试
``````````````


#### 定义

`retryInStatusCode(codes ...int) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| codes | `...int` | 一个或多个触发重试的响应状态码 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### retryMaxWaitTime

#### 详细描述
retryMaxWaitTime 是一个请求选项参数，用于指定重试时最大等待时间，需要搭配 retryTimes 使用，默认为2秒

参数:

  - f: 最大等待时间，单位为秒



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.HTTP(poc.BasicRequest(), poc.retryTimes(5), poc.retryNotInStatusCode(200), poc.retryMaxWaitTime(2)) // 向 example.com 发起请求，如果响应状态码不等于200则进行重试，最多进行5次重试，重试时最多等待2秒
``````````````


#### 定义

`retryMaxWaitTime(f float64) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `float64` | 最大等待时间，单位为秒 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### retryNotInStatusCode

#### 详细描述
retryNotInStatusCode 是一个请求选项参数，用于指定非某些响应状态码的情况下重试，需要搭配 retryTimes 使用

参数:

  - codes: 一个或多个状态码，响应不在这些状态码内时触发重试



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.HTTP(poc.BasicRequest(), poc.retryTimes(5), poc.retryNotInStatusCode(200)) // 向 example.com 发起请求，如果响应状态码不等于200则进行重试，最多进行5次重试
``````````````


#### 定义

`retryNotInStatusCode(codes ...int) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| codes | `...int` | 一个或多个状态码，响应不在这些状态码内时触发重试 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### retryTimes

#### 详细描述
retryTimes 是一个请求选项参数，用于指定请求失败时的重试次数，需要搭配 retryInStatusCode 或 retryNotInStatusCode 使用，来设置在什么响应码的情况下重试

参数:

  - t: 重试次数



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.HTTP(poc.BasicRequest(), poc.retryTimes(5), poc.retryInStatusCode(500, 502)) // 向 example.com 发起请求，如果响应状态码500或502则进行重试，最多进行5次重试
``````````````


#### 定义

`retryTimes(t int) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| t | `int` | 重试次数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### retryWaitTime

#### 详细描述
retryWaitTime 是一个请求选项参数，用于指定重试时最小等待时间，需要搭配 retryTimes 使用，默认为0.1秒

参数:

  - f: 最小等待时间，单位为秒



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.HTTP(poc.BasicRequest(), poc.retryTimes(5), poc.retryNotInStatusCode(200), poc.retryWaitTime(0.1)) // 向 example.com 发起请求，如果响应状态码不等于200则进行重试，最多进行5次重试，重试时最小等待0.1秒
``````````````


#### 定义

`retryWaitTime(f float64) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `float64` | 最小等待时间，单位为秒 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### runtimeID

#### 详细描述
runtimeID 是一个请求选项参数，用于为此次请求指定运行时 ID，便于关联与追踪请求记录

参数:

  - r: 运行时 ID



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
// 指定运行时 ID，依赖网络，此处仅作示意
poc.Get("https://example.com", poc.runtimeID("task-001"))~
``````````````


#### 定义

`runtimeID(r string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| r | `string` | 运行时 ID |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### save

#### 详细描述
save 是一个请求选项参数，用于指定是否将此次请求的记录保存在数据库中，默认为true即会保存到数据库

参数:

  - b: 是否将请求记录保存到数据库



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.Get("https://exmaple.com", poc.save(true)) // 向 example.com 发起请求，会将此次请求保存到数据库中
``````````````


#### 定义

`save(b bool) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` | 是否将请求记录保存到数据库 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### saveHandler

#### 详细描述
saveHandler 是一个请求选项参数，用于设置在将此次请求存入数据库之前的回调函数

参数:

  - f: 一个或多个回调函数，参数为 LowhttpResponse，在保存前调用



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.Get("https://exmaple.com", poc.saveHandler(func(resp){
	resp.Tags = append(resp.Tags,"test")
})) // 向 example.com 发起请求，添加test tag
``````````````


#### 定义

`saveHandler(f ...func(response *lowhttp.LowhttpResponse)) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `...func(response *lowhttp.LowhttpResponse)` | 一个或多个回调函数，参数为 LowhttpResponse，在保存前调用 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### saveSync

#### 详细描述
saveSync 是一个请求选项参数，用于指定是否将此次请求的记录保存在数据库中，且同步保存，默认为false即会异步保存到数据库

参数:

  - b: 是否同步保存到数据库



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.Get("https://exmaple.com", poc.save(true), poc.saveSync(true)) // 向 example.com 发起请求，会将此次请求保存到数据库中，且同步保存
``````````````


#### 定义

`saveSync(b bool) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` | 是否同步保存到数据库 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### session

#### 详细描述
session 是一个请求选项参数，用于指定请求的 session 标识（string），同一 session 共享 cookie jar，适合登录后连续请求

参数:

  - session: session 标识符



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.Get("https://pie.dev/cookies/set/AAA/BBB", poc.session("test")) // 向 pie.dev 发起第一次请求，这会设置一个名为AAA，值为BBB的cookie
rsp, req, err = poc.Get("https://pie.dev/cookies", poc.session("test")) // 向 pie.dev 发起第二次请求，这个请求会输出所有的cookies，可以看到第一次请求设置的cookie已经存在了
``````````````


#### 定义

`session(session string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| session | `string` | session 标识符 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### sni

#### 详细描述
sni 是一个请求选项参数，用于指定使用 tls(https) 协议时的 服务器名称指示(SNI)

参数:

  - sni: 服务器名称指示(SNI)域名



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.Get("https://www.example.com", poc.sni("google.com"))
``````````````


#### 定义

`sni(sni string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| sni | `string` | 服务器名称指示(SNI)域名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### source

#### 详细描述
source 是一个请求选项参数，用于在请求记录保存到数据库时标识此次请求的来源

参数:

  - i: 请求来源标识



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.Get("https://exmaple.com", poc.save(true), poc.source("test")) // 向 example.com 发起请求，会将此次请求保存到数据库中，指示此次请求的来源为test
``````````````


#### 定义

`source(i string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` | 请求来源标识 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### timeout

#### 详细描述
timeout 是一个请求选项参数，用于指定读取超时时间，默认为15秒

参数:

  - f: 读取超时时间，单位为秒



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.Get("https://www.example.com", poc.timeout(15)) // 向 www.baidu.com 发起请求，读取超时时间为15秒
``````````````


#### 定义

`timeout(f float64) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `float64` | 读取超时时间，单位为秒 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### ua

#### 详细描述
ua 是一个请求选项参数，用于改变请求报文，添加 User-Agent 请求头中的值

参数:

  - ua: User-Agent 请求头的值



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.Get("https://pie.dev/get", poc.ua("Mozilla/5.0")) // 向 pie.dev 发起请求，添加User-Agent请求头，其值为Mozilla/5.0
``````````````


#### 定义

`ua(ua string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ua | `string` | User-Agent 请求头的值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### uarand

#### 详细描述
replaceRandomUserAgent 是一个请求选项参数，用于改变请求报文，修改 User-Agent 请求头为随机的常见请求头

返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.Get("https://pie.dev/basic-auth/admin/password", poc.replaceRandomUserAgent()) // 向 pie.dev 发起请求，修改 User-Agent 请求头为随机的常见请求头
``````````````


#### 定义

`uarand() PocConfigOption`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### useMitmRule

#### 详细描述
useMitmRule 是一个请求选项参数，用于指定是否使用MITM规则，默认为false即不会使用MITM规则，使用规则可以完成流量染色，附加tag与提取数据的功能

参数:

  - b: 是否使用 MITM 规则



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.Get("https://exmaple.com", poc.save(true), poc.useMitmRule(true))
``````````````


#### 定义

`useMitmRule(b bool) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` | 是否使用 MITM 规则 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### useragent

#### 详细描述
ua 是一个请求选项参数，用于改变请求报文，添加 User-Agent 请求头中的值

参数:

  - ua: User-Agent 请求头的值



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.Get("https://pie.dev/get", poc.ua("Mozilla/5.0")) // 向 pie.dev 发起请求，添加User-Agent请求头，其值为Mozilla/5.0
``````````````


#### 定义

`useragent(ua string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ua | `string` | User-Agent 请求头的值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### username

#### 详细描述
username 是一个请求选项参数，用于指定认证时的用户名

参数:

  - username: 认证用户名



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
poc.Get("https://www.example.com", poc.username("admin"), poc.password("admin"))
``````````````


#### 定义

`username(username string) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| username | `string` | 认证用户名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### websocket

#### 详细描述
websocket 是一个请求选项参数，用于允许将链接升级为 websocket，此时发送的请求应该为 websocket 握手请求

参数:

  - w: 是否允许升级为 websocket



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
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
``````````````


#### 定义

`websocket(w bool) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| w | `bool` | 是否允许升级为 websocket |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### websocketFromServer

#### 详细描述
websocketFromServer 是一个请求选项参数，它接收一个回调函数，这个函数有两个参数，其中第一个参数为服务端发送的数据，第二个参数为取消函数，调用将会强制断开 websocket

参数:

  - w: 回调函数，参数依次为服务端数据、取消函数



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
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
``````````````


#### 定义

`websocketFromServer(w func(i []byte, cancel func())) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| w | `func(i []byte, cancel func())` | 回调函数，参数依次为服务端数据、取消函数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### websocketOnClient

#### 详细描述
websocketOnClient 是一个请求选项参数，它接收一个回调函数，这个函数有一个参数，是WebsocketClient结构体，通过该结构体可以向服务端发送数据

参数:

  - w: 回调函数，参数为 WebsocketClient 客户端对象



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
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
``````````````


#### 定义

`websocketOnClient(w func(c *lowhttp.WebsocketClient)) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| w | `func(c *lowhttp.WebsocketClient)` | 回调函数，参数为 WebsocketClient 客户端对象 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


### websocketStrictMode

#### 详细描述
websocketStrictMode 是一个请求选项参数，它用于控制是否启用严格模式，如果启用严格模式，则会遵循 RFC 6455 规范

参数:

  - b: 是否启用严格模式



返回值:

  - 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等




Example:

``````````````yak
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
``````````````


#### 定义

`websocketStrictMode(b bool) PocConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` | 是否启用严格模式 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfigOption` | 一个请求选项，作为可变参数传入 poc.HTTP/poc.Get 等 |


