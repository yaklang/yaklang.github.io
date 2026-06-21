# poc {#library-poc}

`poc` 库是 yaklang 的底层 HTTP 报文工具核心，提供"原始报文级"的请求发送与对 HTTP 数据包任意部位的读取/构造/改写能力（近 190 个函数）。它不替你做任何隐式修改，适合编写 PoC、漏洞利用与对协议细节高度敏感的测试。

典型使用场景：

- 发送请求：`poc.HTTP` / `poc.HTTPEx` 直接发原始报文，`poc.Get` / `poc.Post` / `poc.Do` 按方法发送，配合 `poc.timeout` / `poc.proxy` / `poc.https` / `poc.host` 等选项（这些选项均为 `PocConfigOption`）。
- 读取报文：`poc.GetHTTPPacketBody` / `poc.GetHTTPPacketHeader` / `poc.GetAllHTTPPacketQueryParams` / `poc.GetStatusCodeFromResponse` 等 `Get*` 家族解析请求/响应。
- 构造改写：`poc.ReplaceHTTPPacketBody` / `poc.ReplaceHTTPPacketHeader` / `poc.AppendHTTPPacketQueryParam` / `poc.DeleteHTTPPacketCookie` 等 `Replace*`/`Append*`/`Delete*` 家族精确改包。
- 转换修复：`poc.FixHTTPRequest` / `poc.FixHTTPPacketCRLF` 修复报文，`poc.CurlToHTTPRequest` / `poc.HTTPRequestToCurl` 与 curl 互转，`poc.GetUrlFromHTTPRequest` 提取 URL。

与相邻库的关系：`poc` 是 `fuzz`/`fuzzx`（批量变异）、`nuclei`/`httptpl`（模板检测）的底层报文基石；相比 `http`（通用易用客户端）更贴近字节、可控性更强。务必为网络请求设置 `poc.timeout`。

快速上手（本地构造与读取报文，不发包即可验证）：

```yak
// 用 poc.BuildRequest 在本地拼出请求报文(只应用"改写报文"的选项, 不真正发包)
raw = poc.BuildRequest(poc.BasicRequest(),
    poc.replaceHost("yaklang.com"),        // 改 Host
    poc.replacePath("/docs/api/poc"),      // 改路径
    poc.replaceMethod("POST"),             // 改方法
    poc.replaceHeader("X-Token", "abc"),   // 加/改请求头
)
println(string(raw))                        // 打印拼好的完整请求报文

// 再用 Get* 家族从报文里精确读取字段
host = poc.GetHTTPPacketHeader(raw, "Host") // 读取大小写不敏感
println("Host =", host)                     // 预期输出: Host = yaklang.com
assert host == "yaklang.com", "host should be replaced"
assert string(raw).Contains("POST /docs/api/poc"), "first line should be rebuilt"

// 真正发包(需要可达目标, 这里仅示意): rsp, req = poc.HTTP(raw, poc.timeout(10))~
```

> 共 188 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [poc.AppendHTTPPacketCookie](#appendhttppacketcookie) | `packet []byte, key string, value any` | `[]byte` | 是一个辅助函数，用于改变请求报文，添加Cookie请求头中的值 |
| [poc.AppendHTTPPacketFormEncoded](#appendhttppacketformencoded) | `packet []byte, key string, value string` | `[]byte` | 是一个辅助函数，用于改变请求报文，添加请求体中的表单 |
| [poc.AppendHTTPPacketHeader](#appendhttppacketheader) | `packet []byte, headerKey string, headerValue any` | `[]byte` | 是一个辅助函数，用于改变请求报文，添加请求头。 |
| [poc.AppendHTTPPacketPath](#appendhttppacketpath) | `packet []byte, p string` | `[]byte` | 是一个辅助函数，用于改变请求报文，在现有请求路径后添加请求路径 |
| [poc.AppendHTTPPacketPostParam](#appendhttppacketpostparam) | `packet []byte, key string, value string` | `[]byte` | 是一个辅助函数，用于改变请求报文，添加POST请求参数 |
| [poc.AppendHTTPPacketQueryParam](#appendhttppacketqueryparam) | `packet []byte, key string, value string` | `[]byte` | 是一个辅助函数，用于改变请求报文，添加GET请求参数 |
| [poc.AutoUnzipPacketEncoding](#autounzippacketencoding) | `raw []byte` | `[]byte, *PacketEncodingState, bool` | 是一个辅助函数，用于将 HTTP 报文中的传输/内容编码“解开”，以便前端展示/编辑。 |
| [poc.BasicRequest](#basicrequest) | - | `[]byte` | 返回一个基本的 HTTP 请求，用于测试，它实际上返回一个b&#34;GET / HTTP/1.1\r\nHost: example.com\r\n\r\n&#34; |
| [poc.BasicResponse](#basicresponse) | - | `[]byte` | 返回一个基本的 HTTP 响应，用于测试，它实际上返回一个b&#34;HTTP/1.1 200 OK\r\nContent-Length: 0\r\n\r\n&#34; |
| [poc.CurlToHTTPRequest](#curltohttprequest) | `command string` | `[]byte` | 尝试将curl命令转换为HTTP请求报文，其返回值为bytes，即转换后的HTTP请求报文 |
| [poc.DeleteHTTPPacketCookie](#deletehttppacketcookie) | `packet []byte, key string` | `[]byte` | 是一个辅助函数，用于改变请求报文，删除Cookie中的值 |
| [poc.DeleteHTTPPacketForm](#deletehttppacketform) | `packet []byte, key string` | `[]byte` | 是一个辅助函数，用于改变请求报文，删除POST请求表单 |
| [poc.DeleteHTTPPacketHeader](#deletehttppacketheader) | `packet []byte, headerKey string` | `[]byte` | 是一个辅助函数，用于改变请求报文，删除请求头。 |
| [poc.DeleteHTTPPacketPostParam](#deletehttppacketpostparam) | `packet []byte, key string` | `[]byte` | 是一个辅助函数，用于改变请求报文，删除POST请求参数 |
| [poc.DeleteHTTPPacketQueryParam](#deletehttppacketqueryparam) | `packet []byte, key string` | `[]byte` | 是一个辅助函数，用于改变请求报文，删除GET请求参数 |
| [poc.ExtractPostParams](#extractpostparams) | `raw []byte` | `map[string]string, error` | 尝试将 HTTP 请求报文中的各种 POST 参数(普通格式，表单格式，JSON格式，XML格式)提取出来，返回提取出来的 POST 参数与错误 |
| [poc.FixHTTPPacketCRLF](#fixhttppacketcrlf) | `raw []byte, noFixLength bool` | `[]byte` | 修复一个HTTP报文的CRLF问题（正常的报文每行末尾为\r\n，但是某些报文可能是有\n），如果noFixLength为true，则不会修复Content-Length，否则会尝试修复Content-Length |
| [poc.FixHTTPRequest](#fixhttprequest) | `raw []byte` | `[]byte` | 尝试对传入的HTTP请求报文进行修复，并返回修复后的请求 |
| [poc.FixHTTPResponse](#fixhttpresponse) | `r []byte` | `[]byte` | 尝试对传入的 HTTP 响应报文进行修复，并返回修复后的响应 |
| [poc.GetAllHTTPPacketPostParams](#getallhttppacketpostparams) | `packet []byte` | `map[string]string` | 是一个辅助函数，用于获取请求报文中的所有POST请求参数，其返回值为map[string]string，其中键为参数名，值为参数值 |
| [poc.GetAllHTTPPacketPostParamsFull](#getallhttppacketpostparamsfull) | `packet []byte` | `map[string][]string` | 是一个辅助函数，用于获取请求报文中的所有POST请求参数，其返回值为map[string][]string，其中键为参数名，值为参数值切片 |
| [poc.GetAllHTTPPacketQueryParams](#getallhttppacketqueryparams) | `packet []byte` | `map[string]string` | 是一个辅助函数，用于获取请求报文中的所有GET请求参数，其返回值为map[string]string，其中键为参数名，值为参数值 |
| [poc.GetAllHTTPPacketQueryParamsFull](#getallhttppacketqueryparamsfull) | `packet []byte` | `map[string][]string` | 是一个辅助函数，用于获取请求报文中的所有GET请求参数，其返回值为map[string][]string，其中键为参数名，值为参数值切片 |
| [poc.GetHTTPPacketBody](#gethttppacketbody) | `packet []byte` | `[]byte` | 是一个辅助函数，用于获取请求报文中的请求体，其返回值为bytes |
| [poc.GetHTTPPacketContentType](#gethttppacketcontenttype) | `packet []byte` | `string` | 是一个辅助函数，用于获取请求报文中的Content-Type请求头，其返回值为string |
| [poc.GetHTTPPacketCookie](#gethttppacketcookie) | `packet []byte, key string` | `string` | 是一个辅助函数，用于获取请求报文中Cookie值，其返回值为string |
| [poc.GetHTTPPacketCookieFirst](#gethttppacketcookiefirst) | `packet []byte, key string` | `string` | 是一个辅助函数，用于获取请求报文中Cookie值，其返回值为string |
| [poc.GetHTTPPacketCookieValues](#gethttppacketcookievalues) | `packet []byte, key string` | `[]string` | 是一个辅助函数，用于获取请求报文中Cookie值，其返回值为[]string，这是因为Cookie可能存在多个相同键名的值 |
| [poc.GetHTTPPacketCookies](#gethttppacketcookies) | `packet []byte` | `map[string]string` | 是一个辅助函数，用于获取请求报文中所有Cookie值，其返回值为map[string]string |
| [poc.GetHTTPPacketCookiesFull](#gethttppacketcookiesfull) | `packet []byte` | `map[string][]string` | 是一个辅助函数，用于获取请求报文中所有Cookie值，其返回值为map[string][]string，这是因为Cookie可能存在多个相同键名的值 |
| [poc.GetHTTPPacketFirstLine](#gethttppacketfirstline) | `packet []byte` | `string, string, string` | 是一个辅助函数，用于获取 HTTP 报文中第一行的值，其返回值为string，string，string |
| [poc.GetHTTPPacketHeader](#gethttppacketheader) | `packet []byte, key string` | `string` | 是一个辅助函数，用于获取请求报文中指定的请求头，其返回值为string |
| [poc.GetHTTPPacketHeaders](#gethttppacketheaders) | `packet []byte` | `map[string]string` | 是一个辅助函数，用于获取请求报文中所有请求头，其返回值为map[string]string |
| [poc.GetHTTPPacketHeadersFull](#gethttppacketheadersfull) | `packet []byte` | `map[string][]string` | 是一个辅助函数，用于获取请求报文中所有请求头，其返回值为map[string][]string，这是因为请求头可能存在多个相同键名的值 |
| [poc.GetHTTPPacketPostParam](#gethttppacketpostparam) | `packet []byte, key string` | `string` | 是一个辅助函数，用于获取请求报文中指定的POST请求参数，其返回值为string |
| [poc.GetHTTPPacketQueryParam](#gethttppacketqueryparam) | `packet []byte, key string` | `string` | 是一个辅助函数，用于获取请求报文中指定的GET请求参数，其返回值为string |
| [poc.GetHTTPRequestMethod](#gethttprequestmethod) | `packet []byte` | `string` | 是一个辅助函数，用于获取请求报文中的请求方法，其返回值为string |
| [poc.GetHTTPRequestPath](#gethttprequestpath) | `packet []byte` | `string` | 是一个辅助函数，用于获取请求报文中的路径，返回值是 string，包含 query |
| [poc.GetHTTPRequestPathWithoutQuery](#gethttprequestpathwithoutquery) | `packet []byte` | `string` | 是一个辅助函数，用于获取请求报文中的路径，返回值是 string，不包含 query |
| [poc.GetStatusCodeFromResponse](#getstatuscodefromresponse) | `packet []byte` | `int` | 是一个辅助函数，用于获取响应报文中的状态码，其返回值为int |
| [poc.GetUrlFromHTTPRequest](#geturlfromhttprequest) | `scheme string, packet []byte` | `string` | 是一个辅助函数，用于获取请求报文中的URL，其返回值为string |
| [poc.HTTPPacketForceChunked](#httppacketforcechunked) | `raw []byte` | `[]byte` | 将一个HTTP报文的body强制转换为chunked编码 |
| [poc.HTTPRequestToCurl](#httprequesttocurl) | `https bool, raw any` | `string` | 尝试将 HTTP 请求报文转换为curl命令。第一个参数为是否使用HTTPS，第二个参数为HTTP请求报文，其返回值为string，即转换后的curl命令 |
| [poc.IsResponse](#isresponse) | `raw any` | `bool` | IsResp 判断传入的数据是否为 HTTP 响应报文 |
| [poc.ParseBytesToHTTPRequest](#parsebytestohttprequest) | `raw []byte` | `*http.Request, error` | 将字节数组解析为 HTTP 请求 |
| [poc.ParseBytesToHTTPResponse](#parsebytestohttpresponse) | `res []byte` | `*http.Response, error` | 将字节数组解析为 HTTP 响应 |
| [poc.ParseMultiPartFormWithCallback](#parsemultipartformwithcallback) | `req []byte, callback func(part *multipart.Part)` | `error` | 是一个辅助函数，用于尝试解析请求报文体中的表单并进行回调 |
| [poc.ParseUrlToHTTPRequestRaw](#parseurltohttprequestraw) | `method string, i any` | `bool, []byte, error` | 将URL解析为原始 HTTP 请求报文，返回是否为 HTTPS，原始请求报文与错误 |
| [poc.RemoveSession](#removesession) | `session string` | - | 清除指定的 session，删除其关联的 cookiejar |
| [poc.ReplaceAllHTTPPacketPostParams](#replaceallhttppacketpostparams) | `packet []byte, values map[string]string` | `[]byte` | 是一个辅助函数，用于改变请求报文，修改所有 POST 请求参数，如果不存在则会增加，其接收一个 map[string]string 类型的参数，其中 key 为 POST 请求参数名，value 为 POST 请求参数值 |
| [poc.ReplaceAllHTTPPacketPostParamsWithoutEscape](#replaceallhttppacketpostparamswithoutescape) | `packet []byte, values map[string]string` | `[]byte` | 是一个辅助函数，用于改变请求报文，修改所有 POST 请求参数，如果不存在则会增加，其接收一个 map[string]string 类型的参数，其中 key 为 POST 请求参数名，value 为 POST 请求参数值 |
| [poc.ReplaceAllHTTPPacketQueryParams](#replaceallhttppacketqueryparams) | `packet []byte, values map[string]string` | `[]byte` | 是一个辅助函数，用于改变请求报文，修改所有 GET 请求参数，如果不存在则会增加，其接收一个 map[string]string 类型的参数，其中 key 为请求参数名，value 为请求参数值 |
| [poc.ReplaceAllHTTPPacketQueryParamsWithoutEscape](#replaceallhttppacketqueryparamswithoutescape) | `packet []byte, values map[string]string` | `[]byte` | 是一个辅助函数，用于改变请求报文，修改所有 GET 请求参数，如果不存在则会增加，其接收一个 map[string]string 类型的参数，其中 key 为请求参数名，value 为请求参数值 |
| [poc.ReplaceBody](#replacebody) | `raw []byte, body []byte, chunk bool` | `[]byte` | 将原始 HTTP 请求报文中的 body 替换为指定的 body，并指定是否为 chunked，返回新的 HTTP 请求报文 |
| [poc.ReplaceHTTPPacketBasicAuth](#replacehttppacketbasicauth) | `packet []byte, username string, password string` | `[]byte` | 是一个辅助函数，用于改变请求报文，修改Authorization请求头为基础认证的密文，如果不存在则会增加，实际上是ReplaceHTTPPacketHeader(&#34;Authorization&#34;, codec.EncodeBase64(username + &#34;:&#34; + password))的简写 |
| [poc.ReplaceHTTPPacketBody](#replacehttppacketbody) | `packet []byte, body []byte` | `[]byte` | 是一个辅助函数，用于改变 HTTP 报文，修改 HTTP 报文主体内容，第一个参数为原始 HTTP 报文，第二个参数为修改的报文主体内容 |
| [poc.ReplaceHTTPPacketCookie](#replacehttppacketcookie) | `packet []byte, key string, value any` | `[]byte` | 是一个辅助函数，用于改变请求报文，修改Cookie请求头中的值，如果不存在则会增加 |
| [poc.ReplaceHTTPPacketCookies](#replacehttppacketcookies) | `packet []byte, m any` | `[]byte` | 是一个辅助函数，用于改变请求报文，修改Cookie请求头 |
| [poc.ReplaceHTTPPacketFirstLine](#replacehttppacketfirstline) | `packet []byte, firstLine string` | `[]byte` | 是一个辅助，用于改变请求报文，修改第一行（即请求方法，请求路径，协议版本） |
| [poc.ReplaceHTTPPacketFormEncoded](#replacehttppacketformencoded) | `packet []byte, key string, value string` | `[]byte` | 是一个辅助函数，用于改变请求报文，替换请求体中的表单，如果不存在则会增加 |
| [poc.ReplaceHTTPPacketHeader](#replacehttppacketheader) | `packet []byte, headerKey string, headerValue any` | `[]byte` | 是一个辅助函数，用于改变请求报文，修改请求头，如果不存在则会增加。 |
| [poc.ReplaceHTTPPacketHost](#replacehttppackethost) | `packet []byte, host string` | `[]byte` | 是一个辅助函数，用于改变请求报文，修改Host请求头，如果不存在则会增加，实际上是ReplaceHTTPPacketHeader(&#34;Host&#34;, host)的简写 |
| [poc.ReplaceHTTPPacketJsonBody](#replacehttppacketjsonbody) | `packet []byte, jsonMap map[string]any` | `[]byte` | 是一个辅助函数，用于改变 HTTP 报文，修改 HTTP 报文主体内容（ json 格式），第一个参数为原始 HTTP 报文，第二个参数为修改的报文主体内容（ map 对象） |
| [poc.ReplaceHTTPPacketMethod](#replacehttppacketmethod) | `packet []byte, newMethod string` | `[]byte` | 是一个辅助函数，用于改变请求报文，修改请求方法 |
| [poc.ReplaceHTTPPacketPath](#replacehttppacketpath) | `packet []byte, p string` | `[]byte` | 是一个辅助函数，用于改变请求报文，修改请求路径 |
| [poc.ReplaceHTTPPacketPathFunc](#replacehttppacketpathfunc) | `packet []byte, callback func(originPath string) string` | `[]byte` | 是一个辅助函数，使用回调改变请求报文中的请求路径 |
| [poc.ReplaceHTTPPacketPostParam](#replacehttppacketpostparam) | `packet []byte, key string, value string` | `[]byte` | 是一个辅助函数，用于改变请求报文，修改POST请求参数，如果不存在则会增加 |
| [poc.ReplaceHTTPPacketQueryParam](#replacehttppacketqueryparam) | `packet []byte, key string, value string` | `[]byte` | 是一个辅助函数，用于改变请求报文，修改GET请求参数，如果不存在则会增加 |
| [poc.ReplaceHTTPPacketQueryParamWithoutEscape](#replacehttppacketqueryparamwithoutescape) | `packet []byte, key string, value string` | `[]byte` | 是一个辅助函数，用于改变请求报文，修改所有 GET 请求参数，如果不存在则会增加，其接收一个 map[string]string 类型的参数，其中 key 为请求参数名，value 为请求参数值 |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [poc.AppendHTTPPacketUploadFile](#appendhttppacketuploadfile) | `packet []byte, fieldName string, fileName string, fileContent any, contentType ...string` | `[]byte` | 是一个辅助函数，用于改变请求报文，添加请求体中的上传的文件，其中第一个参数为原始请求报文，第二个参数为表单名，第三个参数为文件名，第四个参数为文件内容，第五个参数是可选参数，为文件类型(Content-Type) |
| [poc.BuildRequest](#buildrequest) | `i any, opts ...PocConfigOption` | `[]byte` | 是一个用于辅助构建请求报文的工具函数，它第一个参数可以接收 []byte, string, http.Request 结构体，接下来可以接收零个到多个请求选项，修改请求报文的选项将被作用，最后返回构建好的请求报文 |
| [poc.Delete](#delete) | `urlStr string, opts ...PocConfigOption` | `*lowhttp.LowhttpResponse, *http.Request, error` | 向指定 URL 发送 DELETE 请求并且返回响应结构体，请求结构体以及错误，它的第一个参数是 URL 字符串，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如对设置超时时间，或者修改请求报文等 |
| [poc.Do](#do) | `method string, urlStr string, opts ...PocConfigOption` | `*lowhttp.LowhttpResponse, *http.Request, error` | 向指定 URL 发送指定请求方法的请求并且返回响应结构体，请求结构体以及错误，它的是第一个参数是请求方法，第二个参数 URL 字符串，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如设置超时时间，或者修改请求报文等 |
| [poc.Download](#download) | `urlStr string, opts ...PocConfigOption` | `string, error` | 从指定 URL 下载文件并保存到本地，返回保存的文件路径和错误 |
| [poc.DownloadWithMethod](#downloadwithmethod) | `method string, urlStr string, opts ...PocConfigOption` | `string, error` | 使用指定的 HTTP 方法从 URL 下载文件 |
| [poc.Get](#get) | `urlStr string, opts ...PocConfigOption` | `*lowhttp.LowhttpResponse, *http.Request, error` | 向指定 URL 发送 GET 请求并且返回响应结构体，请求结构体以及错误，它的第一个参数是 URL 字符串，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如对设置超时时间，或者修改请求报文等 |
| [poc.HTTP](#http) | `i any, opts ...PocConfigOption` | `[]byte, []byte, error` | 发送请求并且返回原始响应报文，原始请求报文以及错误，它的第一个参数可以接收 []byte, string, http.Request 结构体，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如设置超时时间，或者修改请求报文等 |
| [poc.HTTPEx](#httpex) | `i any, opts ...PocConfigOption` | `*lowhttp.LowhttpResponse, *http.Request, error` | 与 HTTP 类似，它发送请求并且返回响应结构体，请求结构体以及错误，它的第一个参数可以接收 []byte, string, http.Request 结构体，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如设置超时时间，或者修改请求报文等 |
| [poc.Head](#head) | `urlStr string, opts ...PocConfigOption` | `*lowhttp.LowhttpResponse, *http.Request, error` | 向指定 URL 发送 HEAD 请求并且返回响应结构体，请求结构体以及错误，它的第一个参数是 URL 字符串，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如对设置超时时间，或者修改请求报文等 |
| [poc.Options](#options) | `urlStr string, opts ...PocConfigOption` | `*lowhttp.LowhttpResponse, *http.Request, error` | 向指定 URL 发送 OPTIONS 请求并且返回响应结构体，请求结构体以及错误，它的第一个参数是 URL 字符串，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如对设置超时时间，或者修改请求报文等 |
| [poc.Post](#post) | `urlStr string, opts ...PocConfigOption` | `*lowhttp.LowhttpResponse, *http.Request, error` | 向指定 URL 发送 POST 请求并且返回响应结构体，请求结构体以及错误，它的第一个参数是 URL 字符串，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如对设置超时时间，或者修改请求报文等 |
| [poc.ReplaceHTTPPacketUploadFile](#replacehttppacketuploadfile) | `packet []byte, fieldName string, fileName string, fileContent any, contentType ...string` | `[]byte` | 是一个辅助函数，用于改变请求报文，替换请求体中的上传的文件，其中第一个参数为原始请求报文，第二个参数为表单名，第三个参数为文件名，第四个参数为文件内容，第五个参数是可选参数，为文件类型(Content-Type)，如果表单名不存在则会增加 |
| [poc.Split](#split) | `raw []byte, hook ...func(line string)` | `string, []byte` | 切割 HTTP 报文，返回响应头和响应体，其第一个参数是原始HTTP报文，接下来可以接收零个到多个回调函数，其在每次解析到请求头时回调 |
| [poc.Websocket](#websocket) | `raw any, opts ...PocConfigOption` | `[]byte, []byte, error` | 实际上等价于`poc.HTTP(..., poc.websocket(true))`，用于快速发送请求并建立websocket连接并且返回原始响应报文，原始请求报文以及错误 |

## 函数详情

### AppendHTTPPacketCookie {#appendhttppacketcookie}

```go
AppendHTTPPacketCookie(packet []byte, key string, value any) []byte
```

是一个辅助函数，用于改变请求报文，添加Cookie请求头中的值

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| packet | `[]byte` | 原始 HTTP 报文字节数组 |
| key | `string` | Cookie 名称 |
| value | `any` | Cookie 的值 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 修改后的 HTTP 报文字节数组 |

**示例**

``````````````yak
poc.AppendHTTPPacketCookie(poc.BasicRequest(), "aaa", "bbb") // 添加cookie键值对aaa:bbb
``````````````

---

### AppendHTTPPacketFormEncoded {#appendhttppacketformencoded}

```go
AppendHTTPPacketFormEncoded(packet []byte, key string, value string) []byte
```

是一个辅助函数，用于改变请求报文，添加请求体中的表单

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |
| key | `string` | 表单字段名 |
| value | `string` | 表单字段值 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 修改后的 HTTP 请求报文字节数组 |

**示例**

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

---

### AppendHTTPPacketHeader {#appendhttppacketheader}

```go
AppendHTTPPacketHeader(packet []byte, headerKey string, headerValue any) []byte
```

是一个辅助函数，用于改变请求报文，添加请求头。
无论 header 是否已存在都会直接附加（大小写不敏感行为与 Replace 不冲突）。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| packet | `[]byte` | 原始 HTTP 报文字节数组 |
| headerKey | `string` | 请求头名称 |
| headerValue | `any` | 请求头的值 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 修改后的 HTTP 报文字节数组 |

**示例：示例：追加一个自定义请求头**

``````````````yak
// 关键词: poc.AppendHTTPPacketHeader, 追加请求头
packet = poc.BasicRequest()
modified = poc.AppendHTTPPacketHeader(packet, "X-Trace-Id", "abc-123") // 直接附加，不去重
println(string(modified))                       // 打印查看追加结果
assert poc.GetHTTPPacketHeader(modified, "X-Trace-Id") == "abc-123", "header should be appended"
``````````````

---

### AppendHTTPPacketPath {#appendhttppacketpath}

```go
AppendHTTPPacketPath(packet []byte, p string) []byte
```

是一个辅助函数，用于改变请求报文，在现有请求路径后添加请求路径

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |
| p | `string` | 要追加到现有路径后的路径片段 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 修改后的 HTTP 请求报文字节数组 |

**示例**

``````````````yak
poc.AppendHTTPPacketPath(`GET /docs HTTP/1.1
Host: yaklang.com
`, "/api/poc") // 向 example.com 发起请求，实际上请求路径改为/docs/api/poc
``````````````

---

### AppendHTTPPacketPostParam {#appendhttppacketpostparam}

```go
AppendHTTPPacketPostParam(packet []byte, key string, value string) []byte
```

是一个辅助函数，用于改变请求报文，添加POST请求参数

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |
| key | `string` | POST 请求参数名 |
| value | `string` | POST 请求参数值 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 修改后的 HTTP 请求报文字节数组 |

**示例**

``````````````yak
poc.AppendHTTPPacketPostParam(poc.BasicRequest(), "a", "b") // 向 pie.dev 发起请求，添加POST请求参数a，值为b
``````````````

---

### AppendHTTPPacketQueryParam {#appendhttppacketqueryparam}

```go
AppendHTTPPacketQueryParam(packet []byte, key string, value string) []byte
```

是一个辅助函数，用于改变请求报文，添加GET请求参数

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |
| key | `string` | GET 请求参数名 |
| value | `string` | GET 请求参数值 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 修改后的 HTTP 请求报文字节数组 |

**示例**

``````````````yak
poc.AppendHTTPPacketQueryParam(poc.BasicRequest(), "a", "b") // 添加GET请求参数a，值为b
``````````````

---

### AutoUnzipPacketEncoding {#autounzippacketencoding}

```go
AutoUnzipPacketEncoding(raw []byte) (plain []byte, state *PacketEncodingState, ok bool)
```

是一个辅助函数，用于将 HTTP 报文中的传输/内容编码“解开”，以便前端展示/编辑。

- 支持处理 Transfer-Encoding: chunked（会自动反分块，并移除相关头）

- 支持处理 Content-Encoding（如 gzip/br/zstd/zlib/deflate），优先按 header 解码；header 缺失时会尝试用 magic number 判断（如 gzip/zstd/zlib）

- 失败时保持保守：返回 (raw, nil, false)，避免破坏原始报文

该函数通常与 AutoZipPacketEncoding 配对使用：前端编辑 plain 报文后，服务端可用 state 将其重新压回原始编码形态。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| raw | `[]byte` | 原始 HTTP 报文字节数组 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| plain | `[]byte` | 解开编码后的明文 HTTP 报文字节数组 |
| state | `*PacketEncodingState` | 编码状态对象，可用于将明文重新压回原始编码形态 |
| ok | `bool` | 是否成功解开编码 |

**示例**

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

---

### BasicRequest {#basicrequest}

```go
BasicRequest() []byte
```

返回一个基本的 HTTP 请求，用于测试，它实际上返回一个b&#34;GET / HTTP/1.1\r\nHost: example.com\r\n\r\n&#34;

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 基本 HTTP 请求报文字节数组 |

**示例**

``````````````yak
poc.BasicRequest() // b"GET / HTTP/1.1\r\nHost: example.com\r\n\r\n"
``````````````

---

### BasicResponse {#basicresponse}

```go
BasicResponse() []byte
```

返回一个基本的 HTTP 响应，用于测试，它实际上返回一个b&#34;HTTP/1.1 200 OK\r\nContent-Length: 0\r\n\r\n&#34;

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 基本 HTTP 响应报文字节数组 |

**示例**

``````````````yak
poc.BasicResponse() // b"HTTP/1.1 200 OK\r\nContent-Length: 0\r\n\r\n"
``````````````

---

### CurlToHTTPRequest {#curltohttprequest}

```go
CurlToHTTPRequest(command string) (req []byte)
```

尝试将curl命令转换为HTTP请求报文，其返回值为bytes，即转换后的HTTP请求报文

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| command | `string` | curl 命令字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| req | `[]byte` | 转换后的 HTTP 请求报文字节数组 |

**示例：示例：把 curl 命令转成 HTTP 请求报文**

``````````````yak
// 关键词: poc.CurlToHTTPRequest, curl转报文
req = poc.CurlToHTTPRequest("curl -X POST -d 'a=b&c=d' http://example.com")
println(string(req))
assert poc.GetHTTPRequestMethod(req) == "POST", "method should be POST"
assert string(poc.GetHTTPPacketBody(req)) == "a=b&c=d", "body should come from -d"
``````````````

---

### DeleteHTTPPacketCookie {#deletehttppacketcookie}

```go
DeleteHTTPPacketCookie(packet []byte, key string) []byte
```

是一个辅助函数，用于改变请求报文，删除Cookie中的值

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| packet | `[]byte` | 原始 HTTP 报文字节数组 |
| key | `string` | 要删除的 Cookie 名称 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 修改后的 HTTP 报文字节数组 |

**示例**

``````````````yak
poc.DeleteHTTPPacketCookie(`GET /get HTTP/1.1
Content-Type: application/json
Cookie: aaa=bbb; ccc=ddd
Host: pie.dev

`, "aaa") // 删除Cookie中的aaa
``````````````

---

### DeleteHTTPPacketForm {#deletehttppacketform}

```go
DeleteHTTPPacketForm(packet []byte, key string) []byte
```

是一个辅助函数，用于改变请求报文，删除POST请求表单

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |
| key | `string` | 要删除的表单字段名 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 修改后的 HTTP 请求报文字节数组 |

**示例**

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

---

### DeleteHTTPPacketHeader {#deletehttppacketheader}

```go
DeleteHTTPPacketHeader(packet []byte, headerKey string) []byte
```

是一个辅助函数，用于改变请求报文，删除请求头。
默认情况下匹配会忽略 Header 名大小写，若需严格匹配可使用 DeleteHTTPPacketHeaderStrict。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| packet | `[]byte` | 原始 HTTP 报文字节数组 |
| headerKey | `string` | 要删除的请求头名称 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 修改后的 HTTP 报文字节数组 |

**示例：示例：删除指定请求头(忽略大小写)**

``````````````yak
// 关键词: poc.DeleteHTTPPacketHeader, 删除请求头
packet = `GET /get HTTP/1.1
Content-Type: application/json
AAA: BBB
Host: pie.dev

`
modified = poc.DeleteHTTPPacketHeader(packet, "AAA") // 匹配时忽略大小写
println(string(modified))                             // 打印查看, AAA 头已被删除
assert poc.GetHTTPPacketHeader(modified, "AAA") == "", "AAA header should be removed"
``````````````

---

### DeleteHTTPPacketPostParam {#deletehttppacketpostparam}

```go
DeleteHTTPPacketPostParam(packet []byte, key string) []byte
```

是一个辅助函数，用于改变请求报文，删除POST请求参数

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |
| key | `string` | 要删除的 POST 请求参数名 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 修改后的 HTTP 请求报文字节数组 |

**示例**

``````````````yak
poc.DeleteHTTPPacketPostParam(`POST /post HTTP/1.1
Content-Type: application/json
Content-Length: 7
Host: pie.dev

a=b&c=d`, "a") // 删除POST请求参数a
``````````````

---

### DeleteHTTPPacketQueryParam {#deletehttppacketqueryparam}

```go
DeleteHTTPPacketQueryParam(packet []byte, key string) []byte
```

是一个辅助函数，用于改变请求报文，删除GET请求参数

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |
| key | `string` | 要删除的 GET 请求参数名 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 修改后的 HTTP 请求报文字节数组 |

**示例**

``````````````yak
poc.DeleteHTTPPacketQueryParam(`GET /get?a=b&c=d HTTP/1.1
Content-Type: application/json
Host: pie.dev

`, "a") // 删除GET请求参数a
``````````````

---

### ExtractPostParams {#extractpostparams}

```go
ExtractPostParams(raw []byte) (map[string]string, error)
```

尝试将 HTTP 请求报文中的各种 POST 参数(普通格式，表单格式，JSON格式，XML格式)提取出来，返回提取出来的 POST 参数与错误

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| raw | `[]byte` | 原始 HTTP 请求报文字节数组 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `map[string]string` | 提取出来的 POST 参数键值对表 |
| r2 | `error` | 错误信息，无法提取时返回非空 |

**示例**

``````````````yak
params, err = poc.ExtractPostParams("POST / HTTP/1.1\r\nContent-Type: application/json\r\nHost: example.com\r\n\r\n{\"key\": \"value\"}")
dump(params) // {"key": "value"}
``````````````

---

### FixHTTPPacketCRLF {#fixhttppacketcrlf}

```go
FixHTTPPacketCRLF(raw []byte, noFixLength bool) []byte
```

修复一个HTTP报文的CRLF问题（正常的报文每行末尾为\r\n，但是某些报文可能是有\n），如果noFixLength为true，则不会修复Content-Length，否则会尝试修复Content-Length

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| raw | `[]byte` | 原始 HTTP 报文字节数组 |
| noFixLength | `bool` | 是否不修复 Content-Length，为 true 时不修复 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 修复后的 HTTP 报文字节数组 |

**示例**

``````````````yak
poc.FixHTTPPacketCRLF(`POST / HTTP/1.1
Host: example.com
Content-Length: 11

hello world`, false)
``````````````

---

### FixHTTPRequest {#fixhttprequest}

```go
FixHTTPRequest(raw []byte) []byte
```

尝试对传入的HTTP请求报文进行修复，并返回修复后的请求

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| raw | `[]byte` | 原始 HTTP 请求报文字节数组 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 修复后的 HTTP 请求报文字节数组 |

**示例：示例：修复请求报文(自动补齐 Content-Length 等)**

``````````````yak
// 关键词: poc.FixHTTPRequest, 修复请求报文
// 这个请求声明了 Content-Length: 100, 但实际 body 只有 3 字节, FixHTTPRequest 会修正它
broken = "POST / HTTP/1.1\r\nHost: example.com\r\nContent-Length: 100\r\n\r\nabc"
fixed = poc.FixHTTPRequest(broken)
println(string(fixed))
assert poc.GetHTTPPacketHeader(fixed, "Content-Length") == "3", "content-length should be fixed to real body length"
``````````````

---

### FixHTTPResponse {#fixhttpresponse}

```go
FixHTTPResponse(r []byte) []byte
```

尝试对传入的 HTTP 响应报文进行修复，并返回修复后的响应

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| r | `[]byte` | 原始 HTTP 响应报文字节数组 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 修复后的 HTTP 响应报文字节数组 |

**示例：示例：修复响应报文(规整 CRLF 与 Content-Length)**

``````````````yak
// 关键词: poc.FixHTTPResponse, 修复响应报文
// 这个响应用了 LF 换行且未声明 Content-Length, FixHTTPResponse 会把它规整为标准报文
broken = "HTTP/1.1 200 OK\nContent-Type: text/plain\n\nhello"
fixed = poc.FixHTTPResponse(broken)
println(string(fixed))
assert poc.GetStatusCodeFromResponse(fixed) == 200, "status code should still be 200"
assert string(poc.GetHTTPPacketBody(fixed)) == "hello", "body should be preserved"
``````````````

---

### GetAllHTTPPacketPostParams {#getallhttppacketpostparams}

```go
GetAllHTTPPacketPostParams(packet []byte) (params map[string]string)
```

是一个辅助函数，用于获取请求报文中的所有POST请求参数，其返回值为map[string]string，其中键为参数名，值为参数值

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| params | `map[string]string` | 所有 POST 请求参数的键值对映射 |

**示例**

``````````````yak
poc.GetAllHTTPPacketPostParams(`POST /post HTTP/1.1
Content-Type: application/json
COntent-Length: 7
Host: pie.dev

a=b&c=d`) // 获取所有POST请求参数
``````````````

---

### GetAllHTTPPacketPostParamsFull {#getallhttppacketpostparamsfull}

```go
GetAllHTTPPacketPostParamsFull(packet []byte) (params map[string][]string)
```

是一个辅助函数，用于获取请求报文中的所有POST请求参数，其返回值为map[string][]string，其中键为参数名，值为参数值切片

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| params | `map[string][]string` | 所有 POST 请求参数的键到值列表的映射 |

**示例**

``````````````yak
poc.GetAllHTTPPacketPostParams(`POST /post HTTP/1.1
Content-Type: application/json
COntent-Length: 7
Host: pie.dev

a=b&a=c`) // 获取所有POST请求参数，这里会返回{"a":["b", "c"]}
``````````````

---

### GetAllHTTPPacketQueryParams {#getallhttppacketqueryparams}

```go
GetAllHTTPPacketQueryParams(packet []byte) (params map[string]string)
```

是一个辅助函数，用于获取请求报文中的所有GET请求参数，其返回值为map[string]string，其中键为参数名，值为参数值

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| params | `map[string]string` | 所有 GET 请求参数的键值对映射 |

**示例**

``````````````yak
poc.GetAllHTTPPacketQueryParams(`GET /get?a=b&c=d HTTP/1.1
Content-Type: application/json
Host: pie.dev

`) // 获取所有GET请求参数
``````````````

---

### GetAllHTTPPacketQueryParamsFull {#getallhttppacketqueryparamsfull}

```go
GetAllHTTPPacketQueryParamsFull(packet []byte) (params map[string][]string)
```

是一个辅助函数，用于获取请求报文中的所有GET请求参数，其返回值为map[string][]string，其中键为参数名，值为参数值切片

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| params | `map[string][]string` | 所有 GET 请求参数的键到值列表的映射 |

**示例**

``````````````yak
poc.GetAllHTTPPacketQueryParamsFull(`GET /get?a=b&a=c HTTP/1.1
Content-Type: application/json
Host: pie.dev

`) // 返回所有GET请求参数，这里会返回{"a":["b", "c"]}
``````````````

---

### GetHTTPPacketBody {#gethttppacketbody}

```go
GetHTTPPacketBody(packet []byte) (body []byte)
```

是一个辅助函数，用于获取请求报文中的请求体，其返回值为bytes

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| packet | `[]byte` | 原始 HTTP 报文字节数组 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| body | `[]byte` | 报文主体内容字节数组 |

**示例：示例：提取报文 body(请求体/响应体通用)**

``````````````yak
// 关键词: poc.GetHTTPPacketBody, 提取请求体/响应体
packet = `POST /post HTTP/1.1
Content-Type: application/json
Content-Length: 7
Host: pie.dev

a=b&c=d`
body = poc.GetHTTPPacketBody(packet) // 返回值是 bytes
println("body =", string(body))      // 预期输出: body = a=b&c=d
assert string(body) == "a=b&c=d", "should extract packet body"
``````````````

---

### GetHTTPPacketContentType {#gethttppacketcontenttype}

```go
GetHTTPPacketContentType(packet []byte) (contentType string)
```

是一个辅助函数，用于获取请求报文中的Content-Type请求头，其返回值为string

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| packet | `[]byte` | 原始 HTTP 报文字节数组 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| contentType | `string` | Content-Type 请求头的值 |

**示例**

``````````````yak
poc.GetHTTPPacketContentType(`POST /post HTTP/1.1
Content-Type: application/json
COntent-Length: 7
Host: pie.dev

a=b&c=d`) // 获取Content-Type请求头
``````````````

---

### GetHTTPPacketCookie {#gethttppacketcookie}

```go
GetHTTPPacketCookie(packet []byte, key string) (cookieValue string)
```

是一个辅助函数，用于获取请求报文中Cookie值，其返回值为string

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| packet | `[]byte` | 原始 HTTP 报文字节数组 |
| key | `string` | Cookie 名称 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| cookieValue | `string` | 匹配该名称的 Cookie 值 |

**示例**

``````````````yak
poc.GetHTTPPacketCookie(`GET /get HTTP/1.1
Content-Type: application/json
Cookie: a=b; c=d
Host: pie.dev

`, "a") // 获取键名为a的Cookie值，这里会返回"b"
``````````````

---

### GetHTTPPacketCookieFirst {#gethttppacketcookiefirst}

```go
GetHTTPPacketCookieFirst(packet []byte, key string) (cookieValue string)
```

是一个辅助函数，用于获取请求报文中Cookie值，其返回值为string

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| packet | `[]byte` | 原始 HTTP 报文字节数组 |
| key | `string` | Cookie 名称 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| cookieValue | `string` | 匹配该名称的第一个 Cookie 值 |

**示例**

``````````````yak
poc.GetHTTPPacketCookieFirst(`GET /get HTTP/1.1
Content-Type: application/json
Cookie: a=b; c=d
Host: pie.dev

`, "a") // 获取键名为a的Cookie值，这里会返回"b"
``````````````

---

### GetHTTPPacketCookieValues {#gethttppacketcookievalues}

```go
GetHTTPPacketCookieValues(packet []byte, key string) (cookieValues []string)
```

是一个辅助函数，用于获取请求报文中Cookie值，其返回值为[]string，这是因为Cookie可能存在多个相同键名的值

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| packet | `[]byte` | 原始 HTTP 报文字节数组 |
| key | `string` | Cookie 名称 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| cookieValues | `[]string` | 匹配该名称的所有 Cookie 值列表 |

**示例**

``````````````yak
poc.GetHTTPPacketCookieValues(`GET /get HTTP/1.1
Content-Type: application/json
Cookie: a=b; a=c
Host: pie.dev

`, "a") // 获取键名为a的Cookie值，这里会返回["b", "c"]
``````````````

---

### GetHTTPPacketCookies {#gethttppacketcookies}

```go
GetHTTPPacketCookies(packet []byte) (cookies map[string]string)
```

是一个辅助函数，用于获取请求报文中所有Cookie值，其返回值为map[string]string

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| packet | `[]byte` | 原始 HTTP 报文字节数组 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| cookies | `map[string]string` | 所有 Cookie 的键值对映射 |

**示例**

``````````````yak
poc.GetHTTPPacketCookies(`GET /get HTTP/1.1
Content-Type: application/json
Cookie: a=b; c=d
Host: pie.dev

`) // 获取所有Cookie值，这里会返回{"a":"b", "c":"d"}
``````````````

---

### GetHTTPPacketCookiesFull {#gethttppacketcookiesfull}

```go
GetHTTPPacketCookiesFull(packet []byte) (cookies map[string][]string)
```

是一个辅助函数，用于获取请求报文中所有Cookie值，其返回值为map[string][]string，这是因为Cookie可能存在多个相同键名的值

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| packet | `[]byte` | 原始 HTTP 报文字节数组 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| cookies | `map[string][]string` | 所有 Cookie 的键到值列表的映射 |

**示例**

``````````````yak
poc.GetHTTPPacketCookiesFull(`GET /get HTTP/1.1
Content-Type: application/json
Cookie: a=b; a=c; c=d
Host: pie.dev

`) // 获取所有Cookie值，这里会返回{"a":["b", "c"], "c":["d"]}
``````````````

---

### GetHTTPPacketFirstLine {#gethttppacketfirstline}

```go
GetHTTPPacketFirstLine(packet []byte) (string, string, string)
```

是一个辅助函数，用于获取 HTTP 报文中第一行的值，其返回值为string，string，string

在请求报文中，其三个返回值分别为：请求方法，请求URI，协议版本

在响应报文中，其三个返回值分别为：协议版本，状态码，状态码描述

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| packet | `[]byte` | 原始 HTTP 报文字节数组 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 第一个字段（请求方法 或 协议版本） |
| r2 | `string` | 第二个字段（请求URI 或 状态码） |
| r3 | `string` | 第三个字段（协议版本 或 状态码描述） |

**示例**

``````````````yak
poc.GetHTTPPacketFirstLine(`GET /get HTTP/1.1
Content-Type: application/json
Cookie: a=b; a=c; c=d
Host: pie.dev

`) // 获取请求方法，请求URI，协议版本，这里会返回"GET", "/get", "HTTP/1.1"
``````````````

---

### GetHTTPPacketHeader {#gethttppacketheader}

```go
GetHTTPPacketHeader(packet []byte, key string) (header string)
```

是一个辅助函数，用于获取请求报文中指定的请求头，其返回值为string

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| packet | `[]byte` | 原始 HTTP 报文字节数组 |
| key | `string` | 请求头名称 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| header | `string` | 匹配该名称的请求头的值 |

**示例：示例：从报文中读取指定请求头(大小写不敏感)**

``````````````yak
// 关键词: poc.GetHTTPPacketHeader, 读取请求头/响应头
packet = `GET /get HTTP/1.1
Content-Type: application/json
Cookie: a=b; a=c; c=d
Host: pie.dev

`
ct = poc.GetHTTPPacketHeader(packet, "Content-Type") // 匹配时大小写不敏感
println("Content-Type =", ct)                        // 预期输出: Content-Type = application/json
assert ct == "application/json", "should read Content-Type header"
``````````````

---

### GetHTTPPacketHeaders {#gethttppacketheaders}

```go
GetHTTPPacketHeaders(packet []byte) (headers map[string]string)
```

是一个辅助函数，用于获取请求报文中所有请求头，其返回值为map[string]string

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| packet | `[]byte` | 原始 HTTP 报文字节数组 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| headers | `map[string]string` | 所有请求头的键值对映射 |

**示例**

``````````````yak
poc.GetHTTPPacketHeaders(`GET /get HTTP/1.1
Content-Type: application/json
Cookie: a=b; a=c; c=d
Host: pie.dev

`) // 获取所有请求头，这里会返回{"Content-Type": "application/json", "Cookie": "a=b; a=c; c=d", "Host": "pie.dev"}
``````````````

---

### GetHTTPPacketHeadersFull {#gethttppacketheadersfull}

```go
GetHTTPPacketHeadersFull(packet []byte) (headers map[string][]string)
```

是一个辅助函数，用于获取请求报文中所有请求头，其返回值为map[string][]string，这是因为请求头可能存在多个相同键名的值

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| packet | `[]byte` | 原始 HTTP 报文字节数组 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| headers | `map[string][]string` | 所有请求头的键到值列表的映射 |

**示例**

``````````````yak
poc.GetHTTPPacketHeadersFull(`GET /get HTTP/1.1
Content-Type: application/json
Cookie: a=b; a=c; c=d
Cookie: e=f
Host: pie.dev

`) // 获取所有请求头，这里会返回{"Content-Type": ["application/json"], "Cookie": []"a=b; a=c; c=d", "e=f"], "Host": ["pie.dev"]}
``````````````

---

### GetHTTPPacketPostParam {#gethttppacketpostparam}

```go
GetHTTPPacketPostParam(packet []byte, key string) (paramValue string)
```

是一个辅助函数，用于获取请求报文中指定的POST请求参数，其返回值为string

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |
| key | `string` | POST 请求参数名 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| paramValue | `string` | 匹配该名称的 POST 请求参数的值 |

**示例**

``````````````yak
poc.GetHTTPPacketPostParam(`POST /post HTTP/1.1
Content-Type: application/json
COntent-Length: 7
Host: pie.dev

a=b&c=d`, "a") // 获取POST请求参数a的值
``````````````

---

### GetHTTPPacketQueryParam {#gethttppacketqueryparam}

```go
GetHTTPPacketQueryParam(packet []byte, key string) (paramValue string)
```

是一个辅助函数，用于获取请求报文中指定的GET请求参数，其返回值为string

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |
| key | `string` | GET 请求参数名 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| paramValue | `string` | 匹配该名称的 GET 请求参数的值 |

**示例**

``````````````yak
poc.GetHTTPPacketQueryParam(`GET /get?a=b&c=d HTTP/1.1
Content-Type: application/json
Host: pie.dev

`, "a") // 获取GET请求参数a的值
``````````````

---

### GetHTTPRequestMethod {#gethttprequestmethod}

```go
GetHTTPRequestMethod(packet []byte) (method string)
```

是一个辅助函数，用于获取请求报文中的请求方法，其返回值为string

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| method | `string` | 请求方法，如 GET、POST |

**示例**

``````````````yak
poc.GetHTTPRequestMethod(`GET /get HTTP/1.1
Content-Type: application/json
Cookie: a=b; a=c; c=d
Host: pie.dev

`) // 获取请求方法，这里会返回"GET"
``````````````

---

### GetHTTPRequestPath {#gethttprequestpath}

```go
GetHTTPRequestPath(packet []byte) (path string)
```

是一个辅助函数，用于获取请求报文中的路径，返回值是 string，包含 query

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| path | `string` | 包含 query 的请求路径 |

**示例**

``````````````yak
poc.GetHTTPRequestPath("GET /a/bc.html?a=1 HTTP/1.1\r\nHost: www.example.com\r\n\r\n") // /a/bc.html?a=1
``````````````

---

### GetHTTPRequestPathWithoutQuery {#gethttprequestpathwithoutquery}

```go
GetHTTPRequestPathWithoutQuery(packet []byte) (path string)
```

是一个辅助函数，用于获取请求报文中的路径，返回值是 string，不包含 query

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| path | `string` | 不包含 query 的请求路径 |

**示例**

``````````````yak
poc.GetHTTPRequestPathWithoutQuery("GET /a/bc.html?a=1 HTTP/1.1\r\nHost: www.example.com\r\n\r\n") // /a/bc.html
``````````````

---

### GetStatusCodeFromResponse {#getstatuscodefromresponse}

```go
GetStatusCodeFromResponse(packet []byte) (statusCode int)
```

是一个辅助函数，用于获取响应报文中的状态码，其返回值为int

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| packet | `[]byte` | 原始 HTTP 响应报文字节数组 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| statusCode | `int` | 响应状态码 |

**示例：示例：从响应报文取状态码**

``````````````yak
// 关键词: poc.GetStatusCodeFromResponse, 响应状态码
response = `HTTP/1.1 200 OK
Content-Length: 5

hello`
code = poc.GetStatusCodeFromResponse(response) // 返回 int
println("status code =", code)                  // 预期输出: status code = 200
assert code == 200, "should parse status code 200"
``````````````

---

### GetUrlFromHTTPRequest {#geturlfromhttprequest}

```go
GetUrlFromHTTPRequest(scheme string, packet []byte) (url string)
```

是一个辅助函数，用于获取请求报文中的URL，其返回值为string

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| scheme | `string` | URL 协议，如 http、https，留空默认为 http |
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| url | `string` | 拼接后的完整 URL |

**示例**

``````````````yak
poc.GetUrlFromHTTPRequest("https", `GET /get HTTP/1.1
Content-Type: application/json
Host: pie.dev

`) // 获取URL，这里会返回"https://pie.dev/get"
``````````````

---

### HTTPPacketForceChunked {#httppacketforcechunked}

```go
HTTPPacketForceChunked(raw []byte) []byte
```

将一个HTTP报文的body强制转换为chunked编码

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| raw | `[]byte` | 原始 HTTP 报文字节数组 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 转换为 chunked 编码后的 HTTP 报文字节数组 |

**示例**

``````````````yak
poc.HTTPPacketForceChunked(`POST / HTTP/1.1
Host: example.com
Content-Length: 11

hello world`)
``````````````

---

### HTTPRequestToCurl {#httprequesttocurl}

```go
HTTPRequestToCurl(https bool, raw any) (curlCommand string)
```

尝试将 HTTP 请求报文转换为curl命令。第一个参数为是否使用HTTPS，第二个参数为HTTP请求报文，其返回值为string，即转换后的curl命令

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| https | `bool` | 是否使用 HTTPS |
| raw | `any` | HTTP 请求报文，可为 string 或 bytes |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| curlCommand | `string` | 转换后的 curl 命令字符串 |

**示例：示例：把 HTTP 请求报文转成 curl 命令**

``````````````yak
// 关键词: poc.HTTPRequestToCurl, 报文转curl
cmd = poc.HTTPRequestToCurl(true, "GET /api HTTP/1.1\r\nHost: example.com\r\n\r\n") // 第一个参数表示是否 https
println(cmd)
assert cmd.Contains("curl"), "should produce a curl command"
assert cmd.Contains("https://example.com/api"), "should target the https url"
``````````````

---

### IsResponse {#isresponse}

```go
IsResponse(raw any) (isHTTPResponse bool)
```

IsResp 判断传入的数据是否为 HTTP 响应报文

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| raw | `any` | 待判断的数据，可为字节数组或字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| isHTTPResponse | `bool` | 是否为 HTTP 响应报文 |

**示例：示例：判断一段数据是否为 HTTP 响应报文**

``````````````yak
// 关键词: poc.IsResponse, 判断响应报文
// 注意: 在 yak 中该函数导出名为 poc.IsResponse
isResp = poc.IsResponse(b"HTTP/1.1 200 OK\r\nContent-Length: 2\r\n\r\nok")
println("is response =", isResp)              // 预期输出: is response = true
assert isResp, "should be recognized as response"
isReq = poc.IsResponse(b"GET / HTTP/1.1\r\nHost: a.com\r\n\r\n")
assert !isReq, "request packet should not be a response"
``````````````

---

### ParseBytesToHTTPRequest {#parsebytestohttprequest}

```go
ParseBytesToHTTPRequest(raw []byte) (reqInst *http.Request, err error)
```

将字节数组解析为 HTTP 请求

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| raw | `[]byte` | 原始 HTTP 请求报文字节数组 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| reqInst | `*http.Request` | 解析得到的 HTTP 请求对象 |
| err | `error` | 错误信息，解析失败时返回非空 |

**示例**

``````````````yak
req, err := str.ParseBytesToHTTPRequest(b"GET / HTTP/1.1\r\nHost: example.com\r\n\r\n")
``````````````

---

### ParseBytesToHTTPResponse {#parsebytestohttpresponse}

```go
ParseBytesToHTTPResponse(res []byte) (rspInst *http.Response, err error)
```

将字节数组解析为 HTTP 响应

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| res | `[]byte` | 原始 HTTP 响应报文字节数组 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| rspInst | `*http.Response` | 解析得到的 HTTP 响应对象 |
| err | `error` | 错误信息，解析失败时返回非空 |

**示例**

``````````````yak
res, err := str.ParseBytesToHTTPResponse(b"HTTP/1.1 200 OK\r\nContent-Length: 2\r\n\r\nok")
``````````````

---

### ParseMultiPartFormWithCallback {#parsemultipartformwithcallback}

```go
ParseMultiPartFormWithCallback(req []byte, callback func(part *multipart.Part)) (err error)
```

是一个辅助函数，用于尝试解析请求报文体中的表单并进行回调

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| req | `[]byte` | 原始 HTTP 请求报文字节数组 |
| callback | `func(part *multipart.Part)` | 表单分块回调函数，参数为每个 multipart.Part |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| err | `error` | 错误信息，解析失败时返回非空 |

**示例**

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

---

### ParseUrlToHTTPRequestRaw {#parseurltohttprequestraw}

```go
ParseUrlToHTTPRequestRaw(method string, i any) (isHttps bool, req []byte, err error)
```

将URL解析为原始 HTTP 请求报文，返回是否为 HTTPS，原始请求报文与错误

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| method | `string` | 请求方法，如 GET、POST |
| i | `any` | 目标 URL，可为字符串或可转换为字符串的对象 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| isHttps | `bool` | 是否为 HTTPS |
| req | `[]byte` | 原始 HTTP 请求报文字节数组 |
| err | `error` | 错误信息，解析失败时返回非空 |

**示例**

``````````````yak
ishttps, raw, err = poc.ParseUrlToHTTPRequestRaw("GET", "https://yaklang.com")
``````````````

---

### RemoveSession {#removesession}

```go
RemoveSession(session string)
```

清除指定的 session，删除其关联的 cookiejar

这在完成一系列请求后清理资源时很有用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| session | `string` | 要清除的 session 标识符 |

**示例**

``````````````yak
// 关键词: poc.RemoveSession, 按 session 名清理本地 cookiejar
// RemoveSession 只清理本地 session 缓存(cookiejar), 不发起任何网络请求, 可本地验证
poc.RemoveSession("user1") // 清除名为 user1 的 session, 释放其 cookiejar
println("session user1 removed") // 预期输出: session user1 removed
// 真实场景: 先用 poc.Get(url, poc.session("user1")) 登录并积累 cookie, 用完后再 RemoveSession 释放
``````````````

---

### ReplaceAllHTTPPacketPostParams {#replaceallhttppacketpostparams}

```go
ReplaceAllHTTPPacketPostParams(packet []byte, values map[string]string) []byte
```

是一个辅助函数，用于改变请求报文，修改所有 POST 请求参数，如果不存在则会增加，其接收一个 map[string]string 类型的参数，其中 key 为 POST 请求参数名，value 为 POST 请求参数值

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |
| values | `map[string]string` | POST 请求参数键值对表，会替换所有 POST 参数 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 修改后的 HTTP 请求报文字节数组 |

**示例**

``````````````yak
_, raw, _ = poc.ParseUrlToHTTPRequestRaw("POST", "https://pie.dev/post")
poc.ReplaceAllHTTPPacketPostParams(raw, {"a":"b", "c":"d"}) // 添加POST请求参数a，值为b，POST请求参数c，值为d
``````````````

---

### ReplaceAllHTTPPacketPostParamsWithoutEscape {#replaceallhttppacketpostparamswithoutescape}

```go
ReplaceAllHTTPPacketPostParamsWithoutEscape(packet []byte, values map[string]string) []byte
```

是一个辅助函数，用于改变请求报文，修改所有 POST 请求参数，如果不存在则会增加，其接收一个 map[string]string 类型的参数，其中 key 为 POST 请求参数名，value 为 POST 请求参数值

与 poc.ReplaceAllHTTPPacketPostParams 类似，但是不会将参数值进行转义

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |
| values | `map[string]string` | POST 请求参数键值对表（值不做 URL 转义） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 修改后的 HTTP 请求报文字节数组 |

**示例**

``````````````yak
_, raw, _ = poc.ParseUrlToHTTPRequestRaw("POST", "https://pie.dev/post")
poc.ReplaceAllHTTPPacketPostParamsWithoutEscape(raw, {"a":"b", "c":"d"}) // 添加POST请求参数a，值为b，POST请求参数c，值为d
``````````````

---

### ReplaceAllHTTPPacketQueryParams {#replaceallhttppacketqueryparams}

```go
ReplaceAllHTTPPacketQueryParams(packet []byte, values map[string]string) []byte
```

是一个辅助函数，用于改变请求报文，修改所有 GET 请求参数，如果不存在则会增加，其接收一个 map[string]string 类型的参数，其中 key 为请求参数名，value 为请求参数值

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |
| values | `map[string]string` | GET 请求参数键值对表，会替换所有 GET 参数 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 修改后的 HTTP 请求报文字节数组 |

**示例**

``````````````yak
poc.ReplaceAllHTTPPacketQueryParams(poc.BasicRequest(), {"a":"b", "c":"d"}) // 添加GET请求参数a，值为b，添加GET请求参数c，值为d
``````````````

---

### ReplaceAllHTTPPacketQueryParamsWithoutEscape {#replaceallhttppacketqueryparamswithoutescape}

```go
ReplaceAllHTTPPacketQueryParamsWithoutEscape(packet []byte, values map[string]string) []byte
```

是一个辅助函数，用于改变请求报文，修改所有 GET 请求参数，如果不存在则会增加，其接收一个 map[string]string 类型的参数，其中 key 为请求参数名，value 为请求参数值

与 poc.ReplaceAllHTTPPacketQueryParams 类似，但是不会将参数值进行转义

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |
| values | `map[string]string` | GET 请求参数键值对表（值不做 URL 转义） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 修改后的 HTTP 请求报文字节数组 |

**示例**

``````````````yak
poc.ReplaceAllHTTPPacketQueryParamsWithoutEscape(poc.BasicRequest(), {"a":"b", "c":"d"}) // 添加GET请求参数a，值为b，添加GET请求参数c，值为d
``````````````

---

### ReplaceBody {#replacebody}

```go
ReplaceBody(raw []byte, body []byte, chunk bool) (newHTTPRequest []byte)
```

将原始 HTTP 请求报文中的 body 替换为指定的 body，并指定是否为 chunked，返回新的 HTTP 请求报文

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| raw | `[]byte` | 原始 HTTP 报文字节数组 |
| body | `[]byte` | 替换后的报文主体内容 |
| chunk | `bool` | 是否使用 chunked 传输编码 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| newHTTPRequest | `[]byte` | 修改后的 HTTP 报文字节数组 |

**示例**

``````````````yak
poc.ReplaceBody(`POST / HTTP/1.1
Host: example.com
Content-Length: 11

hello world`, "hello yak", false)
``````````````

---

### ReplaceHTTPPacketBasicAuth {#replacehttppacketbasicauth}

```go
ReplaceHTTPPacketBasicAuth(packet []byte, username string, password string) []byte
```

是一个辅助函数，用于改变请求报文，修改Authorization请求头为基础认证的密文，如果不存在则会增加，实际上是ReplaceHTTPPacketHeader(&#34;Authorization&#34;, codec.EncodeBase64(username + &#34;:&#34; + password))的简写

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |
| username | `string` | 基础认证用户名 |
| password | `string` | 基础认证密码 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 修改后的 HTTP 请求报文字节数组 |

**示例**

``````````````yak
_, raw, _ = poc.ParseUrlToHTTPRequestRaw("GET", "https://pie.dev/basic-auth/admin/password")
poc.ReplaceHTTPPacketBasicAuth(raw, "admin", "password") // 修改Authorization请求头
``````````````

---

### ReplaceHTTPPacketBody {#replacehttppacketbody}

```go
ReplaceHTTPPacketBody(packet []byte, body []byte) []byte
```

是一个辅助函数，用于改变 HTTP 报文，修改 HTTP 报文主体内容，第一个参数为原始 HTTP 报文，第二个参数为修改的报文主体内容

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| packet | `[]byte` | 原始 HTTP 报文字节数组 |
| body | `[]byte` | 修改后的报文主体内容 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 修改后的 HTTP 报文字节数组 |

**示例：示例：替换报文 body 并自动修正 Content-Length**

``````````````yak
// 关键词: poc.ReplaceHTTPPacketBody, 替换请求体, 自动修正长度
packet = poc.ReplaceHTTPPacketMethod(poc.BasicRequest(), "POST") // 先改成 POST
modified = poc.ReplaceHTTPPacketBody(packet, "a=b&c=d")           // 替换 body, Content-Length 会自动修正
println(string(modified))                                          // 打印查看完整报文
assert string(poc.GetHTTPPacketBody(modified)) == "a=b&c=d", "body should be replaced"
``````````````

---

### ReplaceHTTPPacketCookie {#replacehttppacketcookie}

```go
ReplaceHTTPPacketCookie(packet []byte, key string, value any) []byte
```

是一个辅助函数，用于改变请求报文，修改Cookie请求头中的值，如果不存在则会增加

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| packet | `[]byte` | 原始 HTTP 报文字节数组 |
| key | `string` | Cookie 名称 |
| value | `any` | Cookie 的值 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 修改后的 HTTP 报文字节数组 |

**示例**

``````````````yak
poc.ReplaceHTTPPacketCookie(poc.BasicRequest(), "aaa", "bbb") // 修改cookie值，由于这里没有aaa的cookie值，所以会增加
``````````````

---

### ReplaceHTTPPacketCookies {#replacehttppacketcookies}

```go
ReplaceHTTPPacketCookies(packet []byte, m any) []byte
```

是一个辅助函数，用于改变请求报文，修改Cookie请求头

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| packet | `[]byte` | 原始 HTTP 报文字节数组 |
| m | `any` | Cookie 键值对表 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 修改后的 HTTP 报文字节数组 |

**示例**

``````````````yak
poc.ReplaceHTTPPacketCookies(poc.BasicRequest(), {"aaa":"bbb", "ccc":"ddd"}) // 修改cookie值为aaa=bbb;ccc=ddd
``````````````

---

### ReplaceHTTPPacketFirstLine {#replacehttppacketfirstline}

```go
ReplaceHTTPPacketFirstLine(packet []byte, firstLine string) []byte
```

是一个辅助，用于改变请求报文，修改第一行（即请求方法，请求路径，协议版本）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |
| firstLine | `string` | 新的请求行，如 &#34;GET /test HTTP/1.1&#34; |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 修改后的 HTTP 请求报文字节数组 |

**示例**

``````````````yak
poc.ReplaceHTTPPacketFirstLine(`GET / HTTP/1.1
Host: Example.com
`, "GET /test HTTP/1.1") // 向 example.com 发起请求，修改请求报文的第一行，请求/test路径
``````````````

---

### ReplaceHTTPPacketFormEncoded {#replacehttppacketformencoded}

```go
ReplaceHTTPPacketFormEncoded(packet []byte, key string, value string) []byte
```

是一个辅助函数，用于改变请求报文，替换请求体中的表单，如果不存在则会增加

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |
| key | `string` | 表单字段名 |
| value | `string` | 表单字段值 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 修改后的 HTTP 请求报文字节数组 |

**示例**

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

---

### ReplaceHTTPPacketHeader {#replacehttppacketheader}

```go
ReplaceHTTPPacketHeader(packet []byte, headerKey string, headerValue any) []byte
```

是一个辅助函数，用于改变请求报文，修改请求头，如果不存在则会增加。
默认情况下（ignoreCase=true）会忽略大小写匹配，若需要严格匹配可使用 ReplaceHTTPPacketHeaderStrict。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| packet | `[]byte` | 原始 HTTP 报文字节数组 |
| headerKey | `string` | 请求头名称 |
| headerValue | `any` | 请求头的值 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 修改后的 HTTP 报文字节数组 |

**示例：示例：修改请求头(不存在则新增)**

``````````````yak
// 关键词: poc.ReplaceHTTPPacketHeader, 修改/新增请求头
packet = poc.BasicRequest() // 一个基础 GET 请求模板
modified = poc.ReplaceHTTPPacketHeader(packet, "User-Agent", "yak/1.0") // 不存在则新增，忽略大小写
println(string(modified))                       // 可直接打印整段报文，肉眼确认 User-Agent 已写入
assert poc.GetHTTPPacketHeader(modified, "User-Agent") == "yak/1.0", "header should be set"
// poc.ReplaceHTTPPacketHeaderStrict(packet, "AAA", "BBB") // 严格区分大小写的版本
``````````````

---

### ReplaceHTTPPacketHost {#replacehttppackethost}

```go
ReplaceHTTPPacketHost(packet []byte, host string) []byte
```

是一个辅助函数，用于改变请求报文，修改Host请求头，如果不存在则会增加，实际上是ReplaceHTTPPacketHeader(&#34;Host&#34;, host)的简写

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |
| host | `string` | 新的 Host 请求头的值 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 修改后的 HTTP 请求报文字节数组 |

**示例**

``````````````yak
_, raw, _ = poc.ParseUrlToHTTPRequestRaw("GET", "https://yaklang.com")
poc.ReplaceHTTPPacketHost(raw, "www.yaklang.com") // 修改Host请求头的值为 www.yaklang.com
``````````````

---

### ReplaceHTTPPacketJsonBody {#replacehttppacketjsonbody}

```go
ReplaceHTTPPacketJsonBody(packet []byte, jsonMap map[string]any) []byte
```

是一个辅助函数，用于改变 HTTP 报文，修改 HTTP 报文主体内容（ json 格式），第一个参数为原始 HTTP 报文，第二个参数为修改的报文主体内容（ map 对象）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| packet | `[]byte` | 原始 HTTP 报文字节数组 |
| jsonMap | `map[string]any` | 修改后的报文主体内容（ map 对象，会被序列化为 JSON） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 修改后的 HTTP 报文字节数组 |

**示例**

``````````````yak
poc.ReplaceHTTPPacketJsonBody(poc.BasicRequest(), {"a":"b"}) // 修改请求体内容为{"a":"b"}
``````````````

---

### ReplaceHTTPPacketMethod {#replacehttppacketmethod}

```go
ReplaceHTTPPacketMethod(packet []byte, newMethod string) []byte
```

是一个辅助函数，用于改变请求报文，修改请求方法

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |
| newMethod | `string` | 新的请求方法，如 GET、POST |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 修改后的 HTTP 请求报文字节数组 |

**示例**

``````````````yak
poc.ReplaceHTTPPacketMethod(poc.BasicRequest(), "OPTIONS") // 修改请求方法为OPTIONS
``````````````

---

### ReplaceHTTPPacketPath {#replacehttppacketpath}

```go
ReplaceHTTPPacketPath(packet []byte, p string) []byte
```

是一个辅助函数，用于改变请求报文，修改请求路径

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |
| p | `string` | 新的请求路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 修改后的 HTTP 请求报文字节数组 |

**示例**

``````````````yak
poc.ReplaceHTTPPacketPath(poc.BasicRequest(), "/get") // 修改请求路径为/get
``````````````

---

### ReplaceHTTPPacketPathFunc {#replacehttppacketpathfunc}

```go
ReplaceHTTPPacketPathFunc(packet []byte, callback func(originPath string) string) []byte
```

是一个辅助函数，使用回调改变请求报文中的请求路径

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |
| callback | `func(originPath string) string` | 路径处理回调函数，参数为原路径，返回新路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 修改后的 HTTP 请求报文字节数组 |

**示例**

``````````````yak
raw = poc.ReplaceHTTPPacketPathFunc(poc.BasicRequest(), func(p) { return "/get" })
dump(raw)
``````````````

---

### ReplaceHTTPPacketPostParam {#replacehttppacketpostparam}

```go
ReplaceHTTPPacketPostParam(packet []byte, key string, value string) []byte
```

是一个辅助函数，用于改变请求报文，修改POST请求参数，如果不存在则会增加

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |
| key | `string` | POST 请求参数名 |
| value | `string` | POST 请求参数值 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 修改后的 HTTP 请求报文字节数组 |

**示例**

``````````````yak
_, raw, _ = poc.ParseUrlToHTTPRequestRaw("POST", "https://pie.dev/post")
poc.ReplaceHTTPPacketPostParam(raw, "a", "b") // 添加POST请求参数a，值为b
``````````````

---

### ReplaceHTTPPacketQueryParam {#replacehttppacketqueryparam}

```go
ReplaceHTTPPacketQueryParam(packet []byte, key string, value string) []byte
```

是一个辅助函数，用于改变请求报文，修改GET请求参数，如果不存在则会增加

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |
| key | `string` | GET 请求参数名 |
| value | `string` | GET 请求参数值 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 修改后的 HTTP 请求报文字节数组 |

**示例**

``````````````yak
_, raw, _ = poc.ParseUrlToHTTPRequestRaw("GET", "https://pie.dev/get")
poc.ReplaceHTTPPacketQueryParam(raw, "a", "b") // 添加GET请求参数a，值为b
``````````````

---

### ReplaceHTTPPacketQueryParamWithoutEscape {#replacehttppacketqueryparamwithoutescape}

```go
ReplaceHTTPPacketQueryParamWithoutEscape(packet []byte, key string, value string) []byte
```

是一个辅助函数，用于改变请求报文，修改所有 GET 请求参数，如果不存在则会增加，其接收一个 map[string]string 类型的参数，其中 key 为请求参数名，value 为请求参数值
与 poc.ReplaceHTTPPacketQueryParam 类似，但是不会将参数值进行转义

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |
| key | `string` | GET 请求参数名 |
| value | `string` | GET 请求参数值（不做 URL 转义） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 修改后的 HTTP 请求报文字节数组 |

**示例：示例：设置单个 GET 参数且不做 URL 转义**

``````````````yak
// 关键词: poc.ReplaceHTTPPacketQueryParamWithoutEscape, GET参数不转义
packet = poc.BasicRequest()
modified = poc.ReplaceHTTPPacketQueryParamWithoutEscape(packet, "a", "b c") // 值原样写入, 不会把空格转成 %20
println(string(modified))                                                    // first line 出现 ?a=b c
assert string(modified).Contains("a=b c"), "value should not be escaped"
``````````````

---

## 可变参数函数详情

### AppendHTTPPacketUploadFile {#appendhttppacketuploadfile}

```go
AppendHTTPPacketUploadFile(packet []byte, fieldName string, fileName string, fileContent any, contentType ...string) []byte
```

是一个辅助函数，用于改变请求报文，添加请求体中的上传的文件，其中第一个参数为原始请求报文，第二个参数为表单名，第三个参数为文件名，第四个参数为文件内容，第五个参数是可选参数，为文件类型(Content-Type)

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |
| fieldName | `string` | 表单字段名 |
| fileName | `string` | 文件名 |
| fileContent | `any` | 文件内容 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| contentType | `...string` | 可选，文件类型(Content-Type) |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 修改后的 HTTP 请求报文字节数组 |

**示例**

``````````````yak
_, raw, _ = poc.ParseUrlToHTTPRequestRaw("POST", "https://pie.dev/post")
poc.AppendHTTPPacketUploadFile(raw, "file", "phpinfo.php", "<?php phpinfo(); ?>", "image/jpeg") // 添加POST请求表单，其文件名为phpinfo.php，内容为<?php phpinfo(); ?>，文件类型为image/jpeg
``````````````

---

### BuildRequest {#buildrequest}

```go
BuildRequest(i any, opts ...PocConfigOption) []byte
```

是一个用于辅助构建请求报文的工具函数，它第一个参数可以接收 []byte, string, http.Request 结构体，接下来可以接收零个到多个请求选项，修改请求报文的选项将被作用，最后返回构建好的请求报文

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 请求源，可为原始报文 []byte/string 或 *http.Request |

**可选参数**

可作为可变参数 `opts ...PocConfigOption` 传入选项；共 104 个可用选项，详见 [PocConfigOption 选项列表](#option-pocconfigoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 构建好的请求报文字节数组 |

**示例：示例：用选项链在本地构建请求报文(不发包, 可本地验证)**

``````````````yak
// 关键词: poc.BuildRequest, 本地构建报文, 选项链
// BuildRequest 只应用"修改请求报文"的选项并返回报文, 不会真正发请求, 适合本地拼包/调试。
raw = poc.BuildRequest(
    poc.BasicRequest(),                 // 基础 GET 模板
    poc.replaceHost("yaklang.com"),     // 改 Host
    poc.replacePath("/docs/api/poc"),   // 改路径
    poc.replaceMethod("POST"),          // 改方法
    poc.replaceBody("a=b", false),      // 改 body(第二个参数表示是否分块传输)
)
println(string(raw))                     // 打印拼好的完整请求报文
assert string(raw).Contains("POST /docs/api/poc"), "first line should be rebuilt"
assert poc.GetHTTPPacketHeader(raw, "Host") == "yaklang.com", "host should be replaced"
``````````````

---

### Delete {#delete}

```go
Delete(urlStr string, opts ...PocConfigOption) (rspInst *lowhttp.LowhttpResponse, reqInst *http.Request, err error)
```

向指定 URL 发送 DELETE 请求并且返回响应结构体，请求结构体以及错误，它的第一个参数是 URL 字符串，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如对设置超时时间，或者修改请求报文等

关于结构体中的可用字段和方法可以使用 desc 函数进行查看

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| urlStr | `string` | 目标 URL 字符串 |

**可选参数**

可作为可变参数 `opts ...PocConfigOption` 传入选项；共 104 个可用选项，详见 [PocConfigOption 选项列表](#option-pocconfigoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| rspInst | `*lowhttp.LowhttpResponse` | 响应结构体 LowhttpResponse |
| reqInst | `*http.Request` | 请求结构体 *http.Request |
| err | `error` | 错误信息，请求失败时返回非空 |

**示例**

``````````````yak
// 无法本地验证: 需要可达的真实 HTTPS 目标
rsp,req = poc.Delete("https://yaklang.com", poc.https(true))~ // 向yaklang.com发送一个基于HTTPS协议的DELETE请求
desc(rsp) // 查看响应结构体中的可用字段
``````````````

---

### Do {#do}

```go
Do(method string, urlStr string, opts ...PocConfigOption) (rspInst *lowhttp.LowhttpResponse, reqInst *http.Request, err error)
```

向指定 URL 发送指定请求方法的请求并且返回响应结构体，请求结构体以及错误，它的是第一个参数是请求方法，第二个参数 URL 字符串，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如设置超时时间，或者修改请求报文等
关于结构体中的可用字段和方法可以使用 desc 函数进行查看

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| method | `string` | 请求方法，如 GET、POST |
| urlStr | `string` | 目标 URL 字符串 |

**可选参数**

可作为可变参数 `opts ...PocConfigOption` 传入选项；共 104 个可用选项，详见 [PocConfigOption 选项列表](#option-pocconfigoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| rspInst | `*lowhttp.LowhttpResponse` | 响应结构体 LowhttpResponse |
| reqInst | `*http.Request` | 请求结构体 *http.Request |
| err | `error` | 错误信息，请求失败时返回非空 |

**示例：向本地 mock 服务发送指定方法请求(可本地验证, 不出网)**

``````````````yak
host, port = tcp.MockServe(b"HTTP/1.1 200 OK\r\nContent-Length: 2\r\n\r\nok") // 起本地 mock 服务
rsp, req = poc.Do("GET", f"http://${host}:${port}/")~
assert rsp.GetStatusCode() == 200, "should get 200 from local mock"
``````````````

**示例：向真实站点发送指定方法的 HTTPS 请求**

``````````````yak
// 无法本地验证: 需要可达的真实 HTTPS 目标
rsp, req = poc.Do("GET", "https://yaklang.com", poc.https(true))~ // 向 yaklang.com 发送 HTTPS GET 请求
desc(rsp) // 查看响应结构体中的可用字段
``````````````

---

### Download {#download}

```go
Download(urlStr string, opts ...PocConfigOption) (string, error)
```

从指定 URL 下载文件并保存到本地，返回保存的文件路径和错误

支持进度回调、完成回调、自定义文件名和保存目录等选项

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| urlStr | `string` | 目标文件的 URL 字符串 |

**可选参数**

可作为可变参数 `opts ...PocConfigOption` 传入选项；共 104 个可用选项，详见 [PocConfigOption 选项列表](#option-pocconfigoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 已保存文件的本地路径 |
| r2 | `error` | 错误信息，下载失败时返回非空 |

**示例**

``````````````yak
filename, err = poc.Download("https://example.com/file.zip")
filename, err = poc.Download("https://example.com/file.zip", poc.downloadProgress(func(downloaded, total, percent) {

	println(sprintf("下载进度: %.2f%%", percent))

}), poc.downloadFilename("my_file.zip"))
``````````````

---

### DownloadWithMethod {#downloadwithmethod}

```go
DownloadWithMethod(method string, urlStr string, opts ...PocConfigOption) (string, error)
```

使用指定的 HTTP 方法从 URL 下载文件

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| method | `string` | HTTP 请求方法，如 GET、POST |
| urlStr | `string` | 目标文件的 URL 字符串 |

**可选参数**

可作为可变参数 `opts ...PocConfigOption` 传入选项；共 104 个可用选项，详见 [PocConfigOption 选项列表](#option-pocconfigoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 已保存文件的本地路径 |
| r2 | `error` | 错误信息，下载失败时返回非空 |

**示例**

``````````````yak
filename, err = poc.DownloadWithMethod("POST", "https://example.com/download", poc.body("token=xxx"))
``````````````

---

### Get {#get}

```go
Get(urlStr string, opts ...PocConfigOption) (rspInst *lowhttp.LowhttpResponse, reqInst *http.Request, err error)
```

向指定 URL 发送 GET 请求并且返回响应结构体，请求结构体以及错误，它的第一个参数是 URL 字符串，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如对设置超时时间，或者修改请求报文等
关于结构体中的可用字段和方法可以使用 desc 函数进行查看

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| urlStr | `string` | 目标 URL 字符串 |

**可选参数**

可作为可变参数 `opts ...PocConfigOption` 传入选项；共 104 个可用选项，详见 [PocConfigOption 选项列表](#option-pocconfigoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| rspInst | `*lowhttp.LowhttpResponse` | 响应结构体 LowhttpResponse |
| reqInst | `*http.Request` | 请求结构体 *http.Request |
| err | `error` | 错误信息，请求失败时返回非空 |

**示例：向本地 mock 服务发送 GET 请求(可本地验证, 不出网)**

``````````````yak
host, port = tcp.MockServe(b"HTTP/1.1 200 OK\r\nContent-Length: 2\r\n\r\nok") // 起本地 mock 服务
rsp, req = poc.Get(f"http://${host}:${port}/")~
assert rsp.GetStatusCode() == 200, "should get 200 from local mock"
``````````````

**示例：向真实站点发送 HTTPS GET 请求**

``````````````yak
// 无法本地验证: 需要可达的真实 HTTPS 目标
rsp, req = poc.Get("https://yaklang.com", poc.https(true))~ // 向 yaklang.com 发送 HTTPS GET 请求
desc(rsp) // 查看响应结构体中的可用字段
``````````````

---

### HTTP {#http}

```go
HTTP(i any, opts ...PocConfigOption) (rsp []byte, req []byte, err error)
```

发送请求并且返回原始响应报文，原始请求报文以及错误，它的第一个参数可以接收 []byte, string, http.Request 结构体，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如设置超时时间，或者修改请求报文等

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 请求源，可为原始报文 []byte/string 或 *http.Request |

**可选参数**

可作为可变参数 `opts ...PocConfigOption` 传入选项；共 104 个可用选项，详见 [PocConfigOption 选项列表](#option-pocconfigoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| rsp | `[]byte` | 原始响应报文字节数组 |
| req | `[]byte` | 原始请求报文字节数组 |
| err | `error` | 错误信息，请求失败时返回非空 |

**示例：向本地 mock 服务发送原始报文请求(可本地验证, 不出网)**

``````````````yak
host, port = tcp.MockServe(b"HTTP/1.1 200 OK\r\nContent-Length: 2\r\n\r\nok") // 起本地 mock 服务
rsp, req = poc.HTTP(f"GET / HTTP/1.1\r\nHost: ${host}:${port}\r\n\r\n")~
assert str.Contains(string(rsp), "200 OK"), "should receive mock response"
``````````````

**示例：向真实站点发送 HTTPS 请求并改写请求头**

``````````````yak
// 无法本地验证: 需要可达的真实 HTTPS 目标
// 向 yaklang.com 发送 HTTPS GET 请求, 并添加请求头 AAA: BBB
rsp, req = poc.HTTP("GET / HTTP/1.1\r\nHost: www.yaklang.com\r\n\r\n", poc.https(true), poc.replaceHeader("AAA", "BBB"))~
``````````````

---

### HTTPEx {#httpex}

```go
HTTPEx(i any, opts ...PocConfigOption) (rspInst *lowhttp.LowhttpResponse, reqInst *http.Request, err error)
```

与 HTTP 类似，它发送请求并且返回响应结构体，请求结构体以及错误，它的第一个参数可以接收 []byte, string, http.Request 结构体，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如设置超时时间，或者修改请求报文等
关于结构体中的可用字段和方法可以使用 desc 函数进行查看

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 请求源，可为原始报文 []byte/string 或 *http.Request |

**可选参数**

可作为可变参数 `opts ...PocConfigOption` 传入选项；共 104 个可用选项，详见 [PocConfigOption 选项列表](#option-pocconfigoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| rspInst | `*lowhttp.LowhttpResponse` | 响应结构体 LowhttpResponse |
| reqInst | `*http.Request` | 请求结构体 *http.Request |
| err | `error` | 错误信息，请求失败时返回非空 |

**示例：向本地 mock 服务发送请求并读取响应结构体(可本地验证, 不出网)**

``````````````yak
host, port = tcp.MockServe(b"HTTP/1.1 200 OK\r\nContent-Length: 2\r\n\r\nok") // 起本地 mock 服务
rsp, req = poc.HTTPEx(f"GET / HTTP/1.1\r\nHost: ${host}:${port}\r\n\r\n")~
assert rsp.GetStatusCode() == 200, "should get 200 from local mock"
``````````````

**示例：向真实站点发送 HTTPS 请求并改写请求头**

``````````````yak
// 无法本地验证: 需要可达的真实 HTTPS 目标
rsp, req = poc.HTTPEx(`GET / HTTP/1.1\r\nHost: www.yaklang.com\r\n\r\n`, poc.https(true), poc.replaceHeader("AAA", "BBB"))~
desc(rsp) // 查看响应结构体中的可用字段
``````````````

---

### Head {#head}

```go
Head(urlStr string, opts ...PocConfigOption) (rspInst *lowhttp.LowhttpResponse, reqInst *http.Request, err error)
```

向指定 URL 发送 HEAD 请求并且返回响应结构体，请求结构体以及错误，它的第一个参数是 URL 字符串，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如对设置超时时间，或者修改请求报文等

关于结构体中的可用字段和方法可以使用 desc 函数进行查看

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| urlStr | `string` | 目标 URL 字符串 |

**可选参数**

可作为可变参数 `opts ...PocConfigOption` 传入选项；共 104 个可用选项，详见 [PocConfigOption 选项列表](#option-pocconfigoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| rspInst | `*lowhttp.LowhttpResponse` | 响应结构体 LowhttpResponse |
| reqInst | `*http.Request` | 请求结构体 *http.Request |
| err | `error` | 错误信息，请求失败时返回非空 |

**示例**

``````````````yak
// 无法本地验证: 需要可达的真实 HTTPS 目标
rsp,req = poc.Head("https://yaklang.com", poc.https(true))~ // 向yaklang.com发送一个基于HTTPS协议的HEAD请求
desc(rsp) // 查看响应结构体中的可用字段
``````````````

---

### Options {#options}

```go
Options(urlStr string, opts ...PocConfigOption) (rspInst *lowhttp.LowhttpResponse, reqInst *http.Request, err error)
```

向指定 URL 发送 OPTIONS 请求并且返回响应结构体，请求结构体以及错误，它的第一个参数是 URL 字符串，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如对设置超时时间，或者修改请求报文等

关于结构体中的可用字段和方法可以使用 desc 函数进行查看

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| urlStr | `string` | 目标 URL 字符串 |

**可选参数**

可作为可变参数 `opts ...PocConfigOption` 传入选项；共 104 个可用选项，详见 [PocConfigOption 选项列表](#option-pocconfigoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| rspInst | `*lowhttp.LowhttpResponse` | 响应结构体 LowhttpResponse |
| reqInst | `*http.Request` | 请求结构体 *http.Request |
| err | `error` | 错误信息，请求失败时返回非空 |

**示例**

``````````````yak
// 无法本地验证: 需要可达的真实 HTTPS 目标
rsp,req = poc.Options("https://yaklang.com", poc.https(true))~ // 向yaklang.com发送一个基于HTTPS协议的Options请求
desc(rsp) // 查看响应结构体中的可用字段
``````````````

---

### Post {#post}

```go
Post(urlStr string, opts ...PocConfigOption) (rspInst *lowhttp.LowhttpResponse, reqInst *http.Request, err error)
```

向指定 URL 发送 POST 请求并且返回响应结构体，请求结构体以及错误，它的第一个参数是 URL 字符串，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如对设置超时时间，或者修改请求报文等
关于结构体中的可用字段和方法可以使用 desc 函数进行查看

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| urlStr | `string` | 目标 URL 字符串 |

**可选参数**

可作为可变参数 `opts ...PocConfigOption` 传入选项；共 104 个可用选项，详见 [PocConfigOption 选项列表](#option-pocconfigoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| rspInst | `*lowhttp.LowhttpResponse` | 响应结构体 LowhttpResponse |
| reqInst | `*http.Request` | 请求结构体 *http.Request |
| err | `error` | 错误信息，请求失败时返回非空 |

**示例：向本地 mock 服务发送 POST 请求(可本地验证, 不出网)**

``````````````yak
host, port = tcp.MockServe(b"HTTP/1.1 200 OK\r\nContent-Length: 2\r\n\r\nok") // 起本地 mock 服务
rsp, req = poc.Post(f"http://${host}:${port}/login", poc.body("user=admin&pass=123"))~
assert rsp.GetStatusCode() == 200, "should get 200 from local mock"
``````````````

**示例：向真实站点发送 HTTPS POST 请求**

``````````````yak
// 无法本地验证: 需要可达的真实 HTTPS 目标
rsp, req = poc.Post("https://yaklang.com", poc.https(true))~ // 向 yaklang.com 发送 HTTPS POST 请求
desc(rsp) // 查看响应结构体中的可用字段
``````````````

---

### ReplaceHTTPPacketUploadFile {#replacehttppacketuploadfile}

```go
ReplaceHTTPPacketUploadFile(packet []byte, fieldName string, fileName string, fileContent any, contentType ...string) []byte
```

是一个辅助函数，用于改变请求报文，替换请求体中的上传的文件，其中第一个参数为原始请求报文，第二个参数为表单名，第三个参数为文件名，第四个参数为文件内容，第五个参数是可选参数，为文件类型(Content-Type)，如果表单名不存在则会增加

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| packet | `[]byte` | 原始 HTTP 请求报文字节数组 |
| fieldName | `string` | 表单字段名 |
| fileName | `string` | 文件名 |
| fileContent | `any` | 文件内容 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| contentType | `...string` | 可选，文件类型(Content-Type) |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 修改后的 HTTP 请求报文字节数组 |

**示例**

``````````````yak
_, raw, _ = poc.ParseUrlToHTTPRequestRaw("POST", "https://pie.dev/post")
poc.ReplaceHTTPPacketUploadFile(raw, "file", "phpinfo.php", "<?php phpinfo(); ?>", "image/jpeg") // 添加POST请求表单，其文件名为phpinfo.php，内容为<?php phpinfo(); ?>，文件类型为image/jpeg
``````````````

---

### Split {#split}

```go
Split(raw []byte, hook ...func(line string)) (headers string, body []byte)
```

切割 HTTP 报文，返回响应头和响应体，其第一个参数是原始HTTP报文，接下来可以接收零个到多个回调函数，其在每次解析到请求头时回调

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| raw | `[]byte` | 原始 HTTP 报文字节数组 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| hook | `...func(line string)` | 可选的回调函数，每解析到一行请求头时回调 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| headers | `string` | 报文头部字符串 |
| body | `[]byte` | 报文体字节数组 |

**示例：示例：把报文切成 header 和 body 两部分**

``````````````yak
// 关键词: poc.Split, 切分报文头与体
packet = `POST / HTTP/1.1
Content-Type: application/json
Host: www.example.com

{"key": "value"}`
header, body = poc.Split(packet) // 第一个返回值是头部字符串, 第二个是 body 字节
println("--- header ---")
println(header)
println("--- body ---")
println(string(body))            // 预期输出: {"key": "value"}
assert string(body) == `{"key": "value"}`, "body should be split out correctly"
assert header.Contains("Content-Type: application/json"), "header should contain content-type"
``````````````

---

### Websocket {#websocket}

```go
Websocket(raw any, opts ...PocConfigOption) (rsp []byte, req []byte, err error)
```

实际上等价于`poc.HTTP(..., poc.websocket(true))`，用于快速发送请求并建立websocket连接并且返回原始响应报文，原始请求报文以及错误

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| raw | `any` | websocket 握手请求源，可为原始报文 []byte/string 或 *http.Request |

**可选参数**

可作为可变参数 `opts ...PocConfigOption` 传入选项；共 104 个可用选项，详见 [PocConfigOption 选项列表](#option-pocconfigoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| rsp | `[]byte` | 原始响应报文字节数组 |
| req | `[]byte` | 原始请求报文字节数组 |
| err | `error` | 错误信息，请求失败时返回非空 |

**示例**

``````````````yak
// 无法本地验证: 需要可达的真实 websocket 服务与本地代理
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

---

## 可变参数选项列表

以下按选项类型汇总全部可变参数选项(原先重复在各主函数下的选项表已收拢到此处)：

### 1. 类型：PocConfigOption {#option-pocconfigoption}

涉及到的函数有：[poc.BuildRequest](#buildrequest)、[poc.Delete](#delete)、[poc.Do](#do)、[poc.Download](#download)、[poc.DownloadWithMethod](#downloadwithmethod)、[poc.Get](#get)、[poc.HTTP](#http)、[poc.HTTPEx](#httpex)、[poc.Head](#head)、[poc.Options](#options)、[poc.Post](#post)、[poc.Websocket](#websocket)

|选项函数|参数|返回值|说明|
|:--|:--|:--|:--|
| `poc.afterSaveHandler` | `f ...func(flow *schema.HTTPFlow)` | `PocConfigOption` | 是一个请求选项参数，用于设置在此次请求记录保存到数据库之后的回调函数 |
| `poc.appendCookie` | `key string, value string` | `PocConfigOption` | 是一个请求选项参数，用于改变请求报文，添加 Cookie 请求头中的值 |
| `poc.appendFormEncoded` | `key string, value string` | `PocConfigOption` | 是一个请求选项参数，用于改变请求报文，添加请求体中的表单 |
| `poc.appendHeader` | `key string, value string` | `PocConfigOption` | 是一个请求选项参数，用于改变请求报文，添加请求头 |
| `poc.appendHeaders` | `headers map[string]string` | `PocConfigOption` | 是一个请求选项参数，用于改变请求报文，添加请求头 |
| `poc.appendPath` | `path string` | `PocConfigOption` | 是一个请求选项参数，用于改变请求报文，在现有请求路径后添加请求路径 |
| `poc.appendPostParam` | `key string, value string` | `PocConfigOption` | 是一个请求选项参数，用于改变请求报文，添加 POST 请求参数 |
| `poc.appendQueryParam` | `key string, value string` | `PocConfigOption` | 是一个请求选项参数，用于改变请求报文，添加 GET 请求参数 |
| `poc.appendUploadFile` | `fieldName string, fileName string, fileContent any, contentType ...string` | `PocConfigOption` | 是一个请求选项参数，用于改变请求报文，添加请求体中的上传的文件，其中第一个参数为表单名，第二个参数为文件名，第三个参数为文件内容，第四个参数是可选参数，为文件类型(Content-Type) |
| `poc.body` | `i any` | `PocConfigOption` | 是一个请求选项参数，用于指定请求的 body，需要传入一个任意类型的参数，如果不是 string 或者 bytes 会抛出日志并忽略。 |
| `poc.bodyStreamHandler` | `i func(r []byte, closer io.ReadCloser)` | `PocConfigOption` | 是一个请求选项参数，可以设置一个回调函数，如果 body 读取了，将会复制一份给这个流，在这个流中处理 body 是不会影响最终结果的，一般用于处理较长的 chunk 数据 |
| `poc.connPool` | `b bool` | `PocConfigOption` | 是一个请求选项参数，用于指定是否使用连接池，默认不使用连接池 |
| `poc.connectTimeout` | `f float64` | `PocConfigOption` | 是一个请求选项参数，用于指定连接超时时间，默认为15秒 |
| `poc.context` | `ctx context.Context` | `PocConfigOption` | 是一个请求选项参数，用于指定请求的上下文 |
| `poc.cookie` | `c string, values ...any` | `PocConfigOption` | 是一个请求选项参数，用于改变请求报文，添加 Cookie 请求头中的值 |
| `poc.deleteCookie` | `key string` | `PocConfigOption` | 是一个请求选项参数，用于改变请求报文，删除 Cookie 中的值 |
| `poc.deleteForm` | `key string` | `PocConfigOption` | 是一个请求选项参数，用于改变请求报文，删除 POST 请求表单 |
| `poc.deleteHeader` | `key string` | `PocConfigOption` | 是一个请求选项参数，用于改变请求报文，删除请求头 |
| `poc.deletePostParam` | `key string` | `PocConfigOption` | 是一个请求选项参数，用于改变请求报文，删除 POST 请求参数 |
| `poc.deleteQueryParam` | `key string` | `PocConfigOption` | 是一个请求选项参数，用于改变请求报文，删除 GET 请求参数 |
| `poc.disableSession` | `b bool` | `PocConfigOption` | 为 true 时不自动分配 session，也不启用 cookie jar（适合无需 cookie 的探测请求） |
| `poc.dnsNoCache` | `b bool` | `PocConfigOption` | 是一个请求选项参数，用于指定请求时不使用DNS缓存，默认使用DNS缓存 |
| `poc.dnsServer` | `servers ...string` | `PocConfigOption` | 是一个请求选项参数，用于指定请求所使用的DNS服务器，默认使用系统自带的DNS服务器 |
| `poc.downloadDir` | `dir string` | `PocConfigOption` | 是一个下载选项参数，用于指定文件保存目录 |
| `poc.downloadFilename` | `filename string` | `PocConfigOption` | 是一个下载选项参数，用于手动指定保存的文件名 |
| `poc.downloadFinished` | `callback func(filePath string)` | `PocConfigOption` | 是一个下载选项参数，用于设置下载完成回调函数 |
| `poc.downloadProgress` | `callback func(downloaded int64, total int64, percent float64)` | `PocConfigOption` | 是一个下载选项参数，用于设置下载进度回调函数 |
| `poc.fakeua` | - | `PocConfigOption` | replaceRandomUserAgent 是一个请求选项参数，用于改变请求报文，修改 User-Agent 请求头为随机的常见请求头 |
| `poc.fixQueryEscape` | `b bool` | `PocConfigOption` | 是一个请求选项参数，用于指定是否修复查询参数中的 URL 编码，默认为 false 即会自动修复URL编码 |
| `poc.fromPlugin` | `b string` | `PocConfigOption` | 是一个请求选项参数，用于标记此次请求来源于哪个插件，便于请求记录的归类与溯源 |
| `poc.gmTLSCipherSuite` | `suites ...int` | `PocConfigOption` | WithGmTLSCipherSuite 指定国密 TLS 套件，使用 tls.GMTLS_* 常量（可传多个）。 |
| `poc.gmTLSDisableCompatMode` | `disable ...bool` | `PocConfigOption` | WithGmTLSDisableCompatMode 关闭国密兼容模式；不传参等价于 true（仅单次四套）。 |
| `poc.gmTLSPrefer` | - | `PocConfigOption` | 是一个请求选项参数，用于在兼容模式下优先尝试国密 TLS(GMTLS) |
| `poc.gmTls` | - | `PocConfigOption` | 是一个请求选项参数，用于启用国密 TLS(GMTLS)，默认兼容模式同时尝试标准 TLS 与国密 TLS |
| `poc.gmTlsOnly` | - | `PocConfigOption` | 是一个请求选项参数，用于仅使用国密 TLS(GMTLS)，不再回退到标准 TLS |
| `poc.header` | `key string, value string` | `PocConfigOption` | appendHeader 是一个请求选项参数，用于改变请求报文，添加请求头 |
| `poc.host` | `h string` | `PocConfigOption` | 是一个请求选项参数，用于指定实际请求的 host，如果没有设置该请求选项，则会依据原始请求报文中的Host字段来确定实际请求的host |
| `poc.http2` | `isHttp2 bool` | `PocConfigOption` | 是一个请求选项参数，用于指定是否使用 http2 协议，默认为 false 即使用http1协议 |
| `poc.https` | `isHttps bool` | `PocConfigOption` | 是一个请求选项参数，用于指定是否使用 https 协议，默认为 false 即使用 http 协议 |
| `poc.jsRedirect` | `b bool` | `PocConfigOption` | 是一个请求选项参数，用于指定是否跟踪JS重定向，默认为false即不会自动跟踪JS重定向 |
| `poc.json` | `i any` | `PocConfigOption` | 是一个请求选项参数，用于指定请求的 body 为 json 格式，需要传入一个任意类型的参数，会自动转换为 json 格式 |
| `poc.noBodyBuffer` | `b bool` | `PocConfigOption` | 是一个请求选项参数，用于指定是否禁用响应体缓冲，设置为 true 时可以避免大文件下载时的内存占用 |
| `poc.noFixContentLength` | `b bool` | `PocConfigOption` | 是一个请求选项参数，用于指定是否修复响应报文中的 Content-Length 字段，默认为 false 即会自动修复Content-Length字段 |
| `poc.noRedirect` | `b bool` | `PocConfigOption` | 是一个请求选项参数，用于指定是否跟踪重定向，默认为 false 即会自动跟踪重定向 |
| `poc.noredirect` | `b bool` | `PocConfigOption` | 是一个请求选项参数，用于指定是否跟踪重定向，默认为 false 即会自动跟踪重定向 |
| `poc.params` | `i any` | `PocConfigOption` | 是一个请求选项参数，用于在请求时使用传入的值，需要注意的是，它可以很方便地使用 `str.f()`或 f-string 代替 |
| `poc.password` | `password string` | `PocConfigOption` | 是一个请求选项参数，用于指定认证时的密码 |
| `poc.port` | `port int` | `PocConfigOption` | 是一个请求选项参数，用于指定实际请求的端口，如果没有设置该请求选项，则会依据原始请求报文中的Host字段来确定实际请求的端口 |
| `poc.postData` | `i string` | `PocConfigOption` | 是一个请求选项参数，用于指定请求的 body 为 post 数据，需要传入一个任意类型的参数，会自动转换为 post 数据 |
| `poc.postParams` | `i any` | `PocConfigOption` | 是一个请求选项参数，用于指定请求的 body 为 post 数据，需要传入一个任意类型的参数，会自动转换为 post 数据 |
| `poc.postparams` | `i any` | `PocConfigOption` | 是一个请求选项参数，用于指定请求的 body 为 post 数据，需要传入一个任意类型的参数，会自动转换为 post 数据 |
| `poc.proxy` | `proxies ...string` | `PocConfigOption` | 是一个请求选项参数，用于指定请求使用的代理，可以指定多个代理，默认会使用系统代理 |
| `poc.query` | `i any` | `PocConfigOption` | 是一个请求选项参数，用于指定请求的 query 参数，需要传入一个任意类型的参数，会自动转换为 query 参数 |
| `poc.randomChunked` | `b bool` | `PocConfigOption` | 是一个请求选项参数，用于启用随机分块传输，默认不启用 |
| `poc.randomChunkedDelay` | `min int, max int` | `PocConfigOption` | randomChunkedDelay是一个请求选项参数，用于设置随机分块传输的分块延迟范围，默认最小延迟为50毫秒，最大延迟为100毫秒 |
| `poc.randomChunkedLength` | `min int, max int` | `PocConfigOption` | 是一个请求选项参数，用于设置随机分块传输的分块长度范围，默认最小长度为10，最大长度为25 |
| `poc.randomChunkedResultHandler` | `f func(id int, chunkRaw []byte, totalTime time.Duration, chunkSendTime time.Duration)` | `PocConfigOption` | 是一个请求选项参数，用于设置随机分块传输的结果处理函数 |
| `poc.randomJA3` | `b bool` | `PocConfigOption` | 是一个请求选项参数，用于指定是否启用随机 JA3 指纹，默认为 false |
| `poc.redirect` | `i func(current *http.Request, vias []*http.Request) bool` | `PocConfigOption` | 是一个请求选项参数，用于设置旧风格的 redirectHandler 函数，如果设置了该选项，则会在重定向时调用该函数，如果该函数返回 true，则会继续重定向，否则不会重定向。其第一个参数为当前的请求，第二个参数为既往的多个请求 |
| `poc.redirectHandler` | `i func(isHttps bool, req, rsp []byte) bool` | `PocConfigOption` | 是一个请求选项参数，用于作为重定向处理函数，如果设置了该选项，则会在重定向时调用该函数，如果该函数返回 true，则会继续重定向，否则不会重定向。其第一个参数为是否使用 https 协议，第二个参数为原始请求报文，第三个参数为原始响应报文 |
| `poc.redirectTimes` | `t int` | `PocConfigOption` | 是一个请求选项参数，用于指定最大重定向次数，默认为5次 |
| `poc.replaceAllHeaders` | `headers map[string]string` | `PocConfigOption` | 是一个请求选项参数，用于改变请求报文，修改修改所有请求头 |
| `poc.replaceAllPostParams` | `values map[string]string` | `PocConfigOption` | 是一个请求选项参数，用于改变请求报文，修改所有POST请求参数，如果不存在则会增加，其接收一个map[string]string类型的参数，其中key为POST请求参数名，value为POST请求参数值 |
| `poc.replaceAllPostParamsWithoutEscape` | `values map[string]string` | `PocConfigOption` | 是一个请求选项参数，用于改变请求报文，修改所有POST请求参数，如果不存在则会增加，其接收一个map[string]string类型的参数，其中key为POST请求参数名，value为POST请求参数值 |
| `poc.replaceAllQueryParams` | `values map[string]string` | `PocConfigOption` | 是一个请求选项参数，用于改变请求报文，修改所有 GET 请求参数，如果不存在则会增加，其接收一个map[string]string 类型的参数，其中 key 为请求参数名，value 为请求参数值 |
| `poc.replaceAllQueryParamsWithoutEscape` | `values map[string]string` | `PocConfigOption` | 是一个请求选项参数，用于改变请求报文，修改所有 GET 请求参数，如果不存在则会增加，其接收一个map[string]string 类型的参数，其中 key 为请求参数名，value 为请求参数值 |
| `poc.replaceBasicAuth` | `username string, password string` | `PocConfigOption` | 是一个请求选项参数，用于改变请求报文，修改 Authorization 请求头为基础认证的密文，如果不存在则会增加，实际上是replaceHeader(&#34;Authorization&#34;, codec.EncodeBase64(username + &#34;:&#34; + password))的简写 |
| `poc.replaceBody` | `body []byte, chunk bool` | `PocConfigOption` | 是一个请求选项参数，用于改变请求报文，修改请求体内容，第一个参数为修改后的请求体内容，第二个参数为是否分块传输 |
| `poc.replaceCookie` | `key string, value string` | `PocConfigOption` | 是一个请求选项参数，用于改变请求报文，修改Cookie请求头中的值，如果不存在则会增加 |
| `poc.replaceCookies` | `cookies any` | `PocConfigOption` | 是一个请求选项参数，用于改变请求报文，修改所有Cookie请求头中的值 |
| `poc.replaceFirstLine` | `firstLine string` | `PocConfigOption` | 是一个请求选项参数，用于改变请求报文，修改第一行（即请求方法，请求路径，协议版本） |
| `poc.replaceFormEncoded` | `key string, value string` | `PocConfigOption` | 是一个请求选项参数，用于改变请求报文，修改请求体中的表单，如果不存在则会增加 |
| `poc.replaceHeader` | `key string, value string` | `PocConfigOption` | 是一个请求选项参数，用于改变请求报文，修改修改请求头，如果不存在则会增加 |
| `poc.replaceHost` | `host string` | `PocConfigOption` | 是一个请求选项参数，用于改变请求报文，修改Host请求头，如果不存在则会增加，实际上是replaceHeader(&#34;Host&#34;, host)的简写 |
| `poc.replaceMethod` | `method string` | `PocConfigOption` | 是一个请求选项参数，用于改变请求报文，修改请求方法 |
| `poc.replacePath` | `path string` | `PocConfigOption` | 是一个请求选项参数，用于改变请求报文，修改请求路径 |
| `poc.replacePathFunc` | `handle func(string) string` | `PocConfigOption` | 是一个请求选项参数，用于使用回调改变请求报文，修改请求路径 |
| `poc.replacePostParam` | `key string, value string` | `PocConfigOption` | 是一个请求选项参数，用于改变请求报文，修改 POST 请求参数，如果不存在则会增加 |
| `poc.replaceQueryParam` | `key string, value string` | `PocConfigOption` | 是一个请求选项参数，用于改变请求报文，修改 GET 请求参数，如果不存在则会增加 |
| `poc.replaceRandomUserAgent` | - | `PocConfigOption` | 是一个请求选项参数，用于改变请求报文，修改 User-Agent 请求头为随机的常见请求头 |
| `poc.replaceUploadFile` | `formName string, fileName string, fileContent []byte, contentType ...string` | `PocConfigOption` | 是一个请求选项参数，用于改变请求报文，修改请求体中的上传的文件，其中第一个参数为表单名，第二个参数为文件名，第三个参数为文件内容，第四个参数是可选参数，为文件类型(Content-Type)，如果不存在则会增加 |
| `poc.replaceUserAgent` | `ua string` | `PocConfigOption` | 是一个请求选项参数，用于改变请求报文，修改 User-Agent 请求头，实际上是replaceHeader(&#34;User-Agent&#34;, userAgent)的简写 |
| `poc.retryInStatusCode` | `codes ...int` | `PocConfigOption` | 是一个请求选项参数，用于指定在某些响应状态码的情况下重试，需要搭配 retryTimes 使用 |
| `poc.retryMaxWaitTime` | `f float64` | `PocConfigOption` | 是一个请求选项参数，用于指定重试时最大等待时间，需要搭配 retryTimes 使用，默认为2秒 |
| `poc.retryNotInStatusCode` | `codes ...int` | `PocConfigOption` | 是一个请求选项参数，用于指定非某些响应状态码的情况下重试，需要搭配 retryTimes 使用 |
| `poc.retryTimes` | `t int` | `PocConfigOption` | 是一个请求选项参数，用于指定请求失败时的重试次数，需要搭配 retryInStatusCode 或 retryNotInStatusCode 使用，来设置在什么响应码的情况下重试 |
| `poc.retryWaitTime` | `f float64` | `PocConfigOption` | 是一个请求选项参数，用于指定重试时最小等待时间，需要搭配 retryTimes 使用，默认为0.1秒 |
| `poc.runtimeID` | `r string` | `PocConfigOption` | 是一个请求选项参数，用于为此次请求指定运行时 ID，便于关联与追踪请求记录 |
| `poc.save` | `b bool` | `PocConfigOption` | 是一个请求选项参数，用于指定是否将此次请求的记录保存在数据库中，默认为true即会保存到数据库 |
| `poc.saveHandler` | `f ...func(response *lowhttp.LowhttpResponse)` | `PocConfigOption` | 是一个请求选项参数，用于设置在将此次请求存入数据库之前的回调函数 |
| `poc.saveSync` | `b bool` | `PocConfigOption` | 是一个请求选项参数，用于指定是否将此次请求的记录保存在数据库中，且同步保存，默认为false即会异步保存到数据库 |
| `poc.session` | `session string` | `PocConfigOption` | 是一个请求选项参数，用于指定请求的 session 标识（string），同一 session 共享 cookie jar，适合登录后连续请求 |
| `poc.sni` | `sni string` | `PocConfigOption` | 是一个请求选项参数，用于指定使用 tls(https) 协议时的 服务器名称指示(SNI) |
| `poc.source` | `i string` | `PocConfigOption` | 是一个请求选项参数，用于在请求记录保存到数据库时标识此次请求的来源 |
| `poc.timeout` | `f float64` | `PocConfigOption` | 是一个请求选项参数，用于指定读取超时时间，默认为15秒 |
| `poc.ua` | `ua string` | `PocConfigOption` | 是一个请求选项参数，用于改变请求报文，添加 User-Agent 请求头中的值 |
| `poc.uarand` | - | `PocConfigOption` | replaceRandomUserAgent 是一个请求选项参数，用于改变请求报文，修改 User-Agent 请求头为随机的常见请求头 |
| `poc.useMitmRule` | `b bool` | `PocConfigOption` | 是一个请求选项参数，用于指定是否使用MITM规则，默认为false即不会使用MITM规则，使用规则可以完成流量染色，附加tag与提取数据的功能 |
| `poc.useragent` | `ua string` | `PocConfigOption` | ua 是一个请求选项参数，用于改变请求报文，添加 User-Agent 请求头中的值 |
| `poc.username` | `username string` | `PocConfigOption` | 是一个请求选项参数，用于指定认证时的用户名 |
| `poc.websocket` | `w bool` | `PocConfigOption` | 是一个请求选项参数，用于允许将链接升级为 websocket，此时发送的请求应该为 websocket 握手请求 |
| `poc.websocketFromServer` | `w func(i []byte, cancel func())` | `PocConfigOption` | 是一个请求选项参数，它接收一个回调函数，这个函数有两个参数，其中第一个参数为服务端发送的数据，第二个参数为取消函数，调用将会强制断开 websocket |
| `poc.websocketOnClient` | `w func(c *lowhttp.WebsocketClient)` | `PocConfigOption` | 是一个请求选项参数，它接收一个回调函数，这个函数有一个参数，是WebsocketClient结构体，通过该结构体可以向服务端发送数据 |
| `poc.websocketStrictMode` | `b bool` | `PocConfigOption` | 是一个请求选项参数，它用于控制是否启用严格模式，如果启用严格模式，则会遵循 RFC 6455 规范 |

