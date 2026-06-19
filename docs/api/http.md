# http

|函数名|函数描述/介绍|
|:------|:--------|
| [http.Do](#do) |Do 根据构造好的请求结构体引用发送请求，返回响应结构体引用与错误 ! 已弃用 参数: - i: 请求结构体引用 返回值: - 响应结构体引用 - 错误信息，请求失败时返回非空|
| [http.ExtractFaviconURL](#extractfaviconurl) |ExtractFaviconURL 从 HTML 页面内容中解析出 favicon 图标的 URL，并相对站点地址补全为绝对地址 参数: - siteURL: 页面所在的站点地址，用于补全相对路径 - content: HTML 页面内容 返回值: - favicon 图标的绝对 URL - 错误信...|
| [http.Get](#get) |Get 根据指定的 URL 发起 GET 请求，可接收零个到多个请求选项用于配置此次请求 ! 已弃用，使用 poc.Get 代替 参数: - url: 目标 URL - options: 可选请求选项，例如 http.timeout 返回值: - 响应结构体引用 - 错误信息，请求失败时返回非空|
| [http.GetAllBody](#getallbody) |GetAllBody 获取响应结构体引用的响应体内容 参数: - raw: 响应结构体引用 返回值: - 响应体字节数组，读取失败或类型不支持时返回 nil|
| [http.NewRequest](#newrequest) |NewRequest 根据指定的 method 和 URL 生成请求结构体引用，可接收零个到多个请求选项用于配置此次请求 注意，此函数只会生成请求结构体引用，不会发起请求 ! 已弃用 参数: - method: 请求方法，如 &#34;GET&#34;、&#34;POST&#34; - url: 目标 URL - opts: 可选...|
| [http.Post](#post) |Post 根据指定的 URL 发起 POST 请求，可接收零个到多个请求选项用于配置此次请求 ! 已弃用，使用 poc.Post 代替 参数: - url: 目标 URL - options: 可选请求选项，例如 http.body、http.timeout 返回值: - 响应结构体引用 - 错误信...|
| [http.Raw](#raw) |Raw 根据原始请求报文生成请求结构体引用，返回请求结构体引用与错误 注意，此函数只会生成请求结构体引用，不会发起请求 ! 已弃用，使用 poc.HTTP 或 poc.HTTPEx 代替 参数: - i: 原始请求报文（字符串、字节数组或请求结构体引用） 返回值: - 请求结构体引用 - 错误信息，...|
| [http.Request](#request) |Request 根据指定的 method 和 URL 发起请求，可接收零个到多个请求选项用于配置此次请求 ! 已弃用，使用 poc.Do 代替 参数: - method: 请求方法，如 &#34;GET&#34;、&#34;POST&#34; - url: 目标 URL - options: 可选请求选项，例如 http.body...|
| [http.RequestFaviconHash](#requestfaviconhash) |RequestFaviconHash 根据指定的 URL 发起 GET 请求并计算响应体的 favicon hash，常用于资产识别 参数: - urlRaw: 目标 URL - options: 可选请求选项，例如 http.timeout 返回值: - 响应体的 base64 编码 mmh3 h...|
| [http.RequestToMD5](#requesttomd5) |RequestToMD5 根据指定的 URL 发起 GET 请求，并计算响应体的 md5 hash 参数: - urlRaw: 目标 URL - options: 可选请求选项，例如 http.timeout 返回值: - 响应体的 md5 hash 字符串 - 错误信息，请求失败时返回非空|
| [http.RequestToMMH3Hash128](#requesttommh3hash128) |RequestToMMH3Hash128 根据指定的 URL 发起 GET 请求，并计算响应体的 mmh3 hash&lt;128&gt; 参数: - urlRaw: 目标 URL - options: 可选请求选项，例如 http.timeout 返回值: - 响应体的 mmh3 hash&lt;128&gt; 字符串 ...|
| [http.RequestToMMH3Hash128x64](#requesttommh3hash128x64) |RequestToMMH3Hash128x64 根据指定的 URL 发起 GET 请求，并计算响应体的 mmh3 hash&lt;128x64&gt; 参数: - urlRaw: 目标 URL - options: 可选请求选项，例如 http.timeout 返回值: - 响应体的 mmh3 hash&lt;128...|
| [http.RequestToSha1](#requesttosha1) |RequestToSha1 根据指定的 URL 发起 GET 请求，并计算响应体的 sha1 hash 参数: - urlRaw: 目标 URL - options: 可选请求选项，例如 http.timeout 返回值: - 响应体的 sha1 hash 字符串 - 错误信息，请求失败时返回非空|
| [http.RequestToSha256](#requesttosha256) |RequestToSha256 根据指定的 URL 发起 GET 请求，并计算响应体的 sha256 hash 参数: - urlRaw: 目标 URL - options: 可选请求选项，例如 http.timeout 返回值: - 响应体的 sha256 hash 字符串 - 错误信息，请求失败...|
| [http.RequestToSha512](#requesttosha512) |RequestToSha512 根据指定的 URL 发起 GET 请求，并计算响应体的 sha512 hash 参数: - urlRaw: 目标 URL - options: 可选请求选项，例如 http.timeout 返回值: - 响应体的 sha512 hash 字符串 - 错误信息，请求失败...|
| [http.afterSaveHandler](#aftersavehandler) |afterSaveHandler 是一个请求选项参数，用于设置请求记录保存到数据库后的回调函数 参数: - f: 一个或多个回调函数，参数为保存后的 HTTPFlow 记录 返回值: - 一个请求选项，作为可变参数传入 http.Get/http.Post 等|
| [http.body](#body) |body 是一个请求选项参数，用于指定请求体 参数: - value: 请求体内容（字符串、字节数组或 io.Reader） 返回值: - 一个请求选项，作为可变参数传入 http.Post 等|
| [http.context](#context) |context 是一个请求选项参数，用于设置请求的上下文，可通过取消上下文来中断请求 参数: - ctx: 上下文对象 返回值: - 一个请求选项，作为可变参数传入 http.Get/http.Post 等|
| [http.cookie](#cookie) |cookie 是一个请求选项参数，用于设置完整的 Cookie 字段 参数: - value: 完整的 Cookie 字符串，形如 &#34;a=b; c=d&#34; 返回值: - 一个请求选项，作为可变参数传入 http.Get/http.Post 等|
| [http.disableSession](#disablesession) |disableSession 是一个请求选项参数，为 true 时不自动分配 session，也不使用 cookie jar 参数: - b: 是否禁用会话 返回值: - 一个请求选项，作为可变参数传入 http.Get/http.Post 等|
| [http.dump](#dump) |dump 获取指定请求结构体引用或响应结构体引用的原始报文，返回原始报文与错误 参数: - i: 请求或响应结构体引用 返回值: - 原始报文字节数组 - 错误信息，类型不支持或序列化失败时返回非空|
| [http.dumphead](#dumphead) |dumphead 获取指定请求结构体引用或响应结构体引用的原始报文头部，返回原始报文头部与错误 参数: - i: 请求或响应结构体引用 返回值: - 原始报文头部字节数组 - 错误信息，类型不支持或序列化失败时返回非空|
| [http.fakeua](#fakeua) |fakeua 是一个请求选项参数，用于随机指定请求的 User-Agent 返回值: - 一个请求选项，作为可变参数传入 http.Get/http.Post 等|
| [http.fromPlugin](#fromplugin) |fromPlugin 是一个请求选项参数，用于在请求记录保存到数据库时标识此次请求来源的插件名称 参数: - value: 来源插件名称 返回值: - 一个请求选项，作为可变参数传入 http.Get/http.Post 等|
| [http.header](#header) |header 是一个请求选项参数，用于添加/指定请求头 参数: - key: 请求头名称 - value: 请求头值 返回值: - 一个请求选项，作为可变参数传入 http.Get/http.Post 等|
| [http.json](#json) |json 是一个请求选项参数，用于指定 JSON 格式的请求体，它会将传入的值进行 JSON 序列化后设置为请求体 参数: - value: 任意可被 JSON 序列化的值（如 map、slice） 返回值: - 一个请求选项，作为可变参数传入 http.Post 等|
| [http.noredirect](#noredirect) |noredirect 是一个请求选项参数，用于禁止重定向 返回值: - 一个请求选项，作为可变参数传入 http.Get/http.Post 等|
| [http.params](#params) |params 是一个请求选项参数，用于添加/指定 GET 参数，这会将参数进行 URL 编码 参数: - i: GET 参数，形如 &#34;a=b&#34;，多次调用可添加多个 返回值: - 一个请求选项，作为可变参数传入 http.Get 等|
| [http.postparams](#postparams) |postparams 是一个请求选项参数，用于添加/指定 POST 参数，这会将参数进行 URL 编码 参数: - i: POST 参数，形如 &#34;a=b&#34;，多次调用可添加多个 返回值: - 一个请求选项，作为可变参数传入 http.Post 等|
| [http.proxy](#proxy) |proxy 是一个请求选项参数，用于设置一个或多个请求的代理，请求时会根据顺序找到一个可用的代理使用 参数: - values: 一个或多个代理地址，支持 http、https、socks5 协议 返回值: - 一个请求选项，作为可变参数传入 http.Get/http.Post 等|
| [http.redirect](#redirect) |redirect 是一个请求选项参数，它接收重定向处理函数，用于自定义重定向处理逻辑，返回 true 代表继续重定向，返回 false 代表终止重定向 参数: - c: 重定向处理函数，第一个参数是当前请求结构体引用，第二个参数是之前的请求列表，返回是否继续重定向 返回值: - 一个请求选项，作为可...|
| [http.runtimeID](#runtimeid) |runtimeID 是一个请求选项参数，用于设置运行时 ID 以便将请求记录与某次任务关联追踪 参数: - value: 运行时 ID 字符串 返回值: - 一个请求选项，作为可变参数传入 http.Get/http.Post 等|
| [http.save](#save) |save 是一个请求选项参数，用于指定是否将此次请求的记录保存在数据库中，默认为 true 即会保存到数据库 参数: - value: 是否保存到数据库 返回值: - 一个请求选项，作为可变参数传入 http.Get/http.Post 等|
| [http.session](#session) |session 是一个请求选项参数，用于根据传入的值指定会话，使用相同的值会使用同一个会话，同一个会话会自动复用 Cookie 参数: - value: 会话标识，相同标识共享同一会话 返回值: - 一个请求选项，作为可变参数传入 http.Get/http.Post 等|
| [http.show](#show) |show 获取指定请求结构体引用或响应结构体引用的原始报文并输出在标准输出 参数: - i: 请求或响应结构体引用 返回值: - 无|
| [http.showhead](#showhead) |showhead 获取指定请求结构体引用或响应结构体引用的原始报文头部并输出在标准输出 参数: - i: 请求或响应结构体引用 返回值: - 无|
| [http.source](#source) |source 是一个请求选项参数，用于在请求记录保存到数据库时标识此次请求的来源 参数: - value: 来源标识字符串 返回值: - 一个请求选项，作为可变参数传入 http.Get/http.Post 等|
| [http.timeout](#timeout) |WithTimeout 是一个请求选项参数，用于设置请求超时时间，单位是秒 参数: - f: 超时时间，单位为秒，支持小数 返回值: - 一个请求选项，作为可变参数传入 http.Get/http.Post 等|
| [http.ua](#ua) |useragent 是一个请求选项参数，用于指定请求的 User-Agent 参数: - value: User-Agent 字符串 返回值: - 一个请求选项，作为可变参数传入 http.Get/http.Post 等|
| [http.uarand](#uarand) |uarand 返回一个随机的 User-Agent 返回值: - 随机生成的 User-Agent 字符串|
| [http.useragent](#useragent) |useragent 是一个请求选项参数，用于指定请求的 User-Agent 参数: - value: User-Agent 字符串 返回值: - 一个请求选项，作为可变参数传入 http.Get/http.Post 等|


## 函数定义
### Do

#### 详细描述
Do 根据构造好的请求结构体引用发送请求，返回响应结构体引用与错误

! 已弃用

参数:

  - i: 请求结构体引用



返回值:

  - 响应结构体引用

  - 错误信息，请求失败时返回非空




Example:

``````````````yak
req, err = http.Raw("GET / HTTP/1.1\r\nHost: www.yaklang.com\r\n\r\n")
rsp, err = http.Do(req)
``````````````


#### 定义

`Do(i any) (*http.Response, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 请求结构体引用 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*http.Response` | 响应结构体引用 |
| r2 | `error` | 错误信息，请求失败时返回非空 |


### ExtractFaviconURL

#### 详细描述
ExtractFaviconURL 从 HTML 页面内容中解析出 favicon 图标的 URL，并相对站点地址补全为绝对地址

参数:

  - siteURL: 页面所在的站点地址，用于补全相对路径

  - content: HTML 页面内容



返回值:

  - favicon 图标的绝对 URL

  - 错误信息，解析失败或未找到图标时返回非空




Example:

``````````````yak
html = "<html><head><link rel=\"icon\" href=\"/favicon.ico\"></head></html>"
iconURL = http.ExtractFaviconURL("https://example.com", html)~
println(iconURL)   // OUT: https://example.com/favicon.ico
``````````````


#### 定义

`ExtractFaviconURL(siteURL string, content []byte) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| siteURL | `string` | 页面所在的站点地址，用于补全相对路径 |
| content | `[]byte` | HTML 页面内容 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | favicon 图标的绝对 URL |
| r2 | `error` | 错误信息，解析失败或未找到图标时返回非空 |


### Get

#### 详细描述
Get 根据指定的 URL 发起 GET 请求，可接收零个到多个请求选项用于配置此次请求

! 已弃用，使用 poc.Get 代替

参数:

  - url: 目标 URL

  - options: 可选请求选项，例如 http.timeout



返回值:

  - 响应结构体引用

  - 错误信息，请求失败时返回非空




Example:

``````````````yak
rsp, err = http.Get("http://www.yaklang.com", http.timeout(10))
``````````````


#### 定义

`Get(url string, options ...http_struct.HttpOption) (*http_struct.YakHttpResponse, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` | 目标 URL |
| options | `...http_struct.HttpOption` | 可选请求选项，例如 http.timeout |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*http_struct.YakHttpResponse` | 响应结构体引用 |
| r2 | `error` | 错误信息，请求失败时返回非空 |


### GetAllBody

#### 详细描述
GetAllBody 获取响应结构体引用的响应体内容

参数:

  - raw: 响应结构体引用



返回值:

  - 响应体字节数组，读取失败或类型不支持时返回 nil




Example:

``````````````yak
rsp, err = http.Get("http://www.yaklang.com")
raw = http.GetAllBody(rsp)
``````````````


#### 定义

`GetAllBody(raw any) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `any` | 响应结构体引用 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 响应体字节数组，读取失败或类型不支持时返回 nil |


### NewRequest

#### 详细描述
NewRequest 根据指定的 method 和 URL 生成请求结构体引用，可接收零个到多个请求选项用于配置此次请求

注意，此函数只会生成请求结构体引用，不会发起请求

! 已弃用

参数:

  - method: 请求方法，如 &#34;GET&#34;、&#34;POST&#34;

  - url: 目标 URL

  - opts: 可选请求选项，例如 http.timeout



返回值:

  - 请求结构体引用

  - 错误信息，构造失败时返回非空




Example:

``````````````yak
req, err = http.NewRequest("GET", "http://www.yaklang.com", http.timeout(10))
``````````````


#### 定义

`NewRequest(method string, url string, opts ...http_struct.HttpOption) (*http_struct.YakHttpRequest, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| method | `string` | 请求方法，如 &#34;GET&#34;、&#34;POST&#34; |
| url | `string` | 目标 URL |
| opts | `...http_struct.HttpOption` | 可选请求选项，例如 http.timeout |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*http_struct.YakHttpRequest` | 请求结构体引用 |
| r2 | `error` | 错误信息，构造失败时返回非空 |


### Post

#### 详细描述
Post 根据指定的 URL 发起 POST 请求，可接收零个到多个请求选项用于配置此次请求

! 已弃用，使用 poc.Post 代替

参数:

  - url: 目标 URL

  - options: 可选请求选项，例如 http.body、http.timeout



返回值:

  - 响应结构体引用

  - 错误信息，请求失败时返回非空




Example:

``````````````yak
rsp, err = http.Post("http://pie.dev/post", http.body("a=b&c=d"), http.timeout(10))
``````````````


#### 定义

`Post(url string, options ...http_struct.HttpOption) (*http_struct.YakHttpResponse, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` | 目标 URL |
| options | `...http_struct.HttpOption` | 可选请求选项，例如 http.body、http.timeout |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*http_struct.YakHttpResponse` | 响应结构体引用 |
| r2 | `error` | 错误信息，请求失败时返回非空 |


### Raw

#### 详细描述
Raw 根据原始请求报文生成请求结构体引用，返回请求结构体引用与错误

注意，此函数只会生成请求结构体引用，不会发起请求

! 已弃用，使用 poc.HTTP 或 poc.HTTPEx 代替

参数:

  - i: 原始请求报文（字符串、字节数组或请求结构体引用）



返回值:

  - 请求结构体引用

  - 错误信息，类型不支持或解析失败时返回非空




Example:

``````````````yak
req, err = http.Raw("GET / HTTP/1.1\r\nHost: www.yaklang.com\r\n\r\n")
``````````````


#### 定义

`Raw(i any) (*http.Request, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 原始请求报文（字符串、字节数组或请求结构体引用） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*http.Request` | 请求结构体引用 |
| r2 | `error` | 错误信息，类型不支持或解析失败时返回非空 |


### Request

#### 详细描述
Request 根据指定的 method 和 URL 发起请求，可接收零个到多个请求选项用于配置此次请求

! 已弃用，使用 poc.Do 代替

参数:

  - method: 请求方法，如 &#34;GET&#34;、&#34;POST&#34;

  - url: 目标 URL

  - options: 可选请求选项，例如 http.body、http.timeout



返回值:

  - 响应结构体引用

  - 错误信息，请求失败时返回非空




Example:

``````````````yak
rsp, err = http.Request("POST","http://pie.dev/post", http.body("a=b&c=d"), http.timeout(10))
``````````````


#### 定义

`Request(method string, url string, options ...http_struct.HttpOption) (*http_struct.YakHttpResponse, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| method | `string` | 请求方法，如 &#34;GET&#34;、&#34;POST&#34; |
| url | `string` | 目标 URL |
| options | `...http_struct.HttpOption` | 可选请求选项，例如 http.body、http.timeout |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*http_struct.YakHttpResponse` | 响应结构体引用 |
| r2 | `error` | 错误信息，请求失败时返回非空 |


### RequestFaviconHash

#### 详细描述
RequestFaviconHash 根据指定的 URL 发起 GET 请求并计算响应体的 favicon hash，常用于资产识别

参数:

  - urlRaw: 目标 URL

  - options: 可选请求选项，例如 http.timeout



返回值:

  - 响应体的 base64 编码 mmh3 hash（响应状态码为 2xx 时）

  - 错误信息，请求失败或状态码非 2xx 时返回非空




Example:

``````````````yak
rsp, err = http.RequestFaviconHash("http://pie.dev/post", http.body("a=b&c=d"), http.timeout(10))
``````````````


#### 定义

`RequestFaviconHash(urlRaw string, options ...http_struct.HttpOption) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| urlRaw | `string` | 目标 URL |
| options | `...http_struct.HttpOption` | 可选请求选项，例如 http.timeout |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 响应体的 base64 编码 mmh3 hash（响应状态码为 2xx 时） |
| r2 | `error` | 错误信息，请求失败或状态码非 2xx 时返回非空 |


### RequestToMD5

#### 详细描述
RequestToMD5 根据指定的 URL 发起 GET 请求，并计算响应体的 md5 hash

参数:

  - urlRaw: 目标 URL

  - options: 可选请求选项，例如 http.timeout



返回值:

  - 响应体的 md5 hash 字符串

  - 错误信息，请求失败时返回非空




Example:

``````````````yak
rsp, err = http.RequestToMD5("http://pie.dev/post", http.body("a=b&c=d"), http.timeout(10))
``````````````


#### 定义

`RequestToMD5(urlRaw string, options ...http_struct.HttpOption) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| urlRaw | `string` | 目标 URL |
| options | `...http_struct.HttpOption` | 可选请求选项，例如 http.timeout |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 响应体的 md5 hash 字符串 |
| r2 | `error` | 错误信息，请求失败时返回非空 |


### RequestToMMH3Hash128

#### 详细描述
RequestToMMH3Hash128 根据指定的 URL 发起 GET 请求，并计算响应体的 mmh3 hash&lt;128&gt;

参数:

  - urlRaw: 目标 URL

  - options: 可选请求选项，例如 http.timeout



返回值:

  - 响应体的 mmh3 hash&lt;128&gt; 字符串

  - 错误信息，请求失败时返回非空




Example:

``````````````yak
rsp, err = http.RequestToMMH3Hash128("http://pie.dev/post", http.body("a=b&c=d"), http.timeout(10))
``````````````


#### 定义

`RequestToMMH3Hash128(urlRaw string, options ...http_struct.HttpOption) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| urlRaw | `string` | 目标 URL |
| options | `...http_struct.HttpOption` | 可选请求选项，例如 http.timeout |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 响应体的 mmh3 hash&lt;128&gt; 字符串 |
| r2 | `error` | 错误信息，请求失败时返回非空 |


### RequestToMMH3Hash128x64

#### 详细描述
RequestToMMH3Hash128x64 根据指定的 URL 发起 GET 请求，并计算响应体的 mmh3 hash&lt;128x64&gt;

参数:

  - urlRaw: 目标 URL

  - options: 可选请求选项，例如 http.timeout



返回值:

  - 响应体的 mmh3 hash&lt;128x64&gt; 字符串

  - 错误信息，请求失败时返回非空




Example:

``````````````yak
rsp, err = http.RequestToMMH3Hash128x64("http://pie.dev/post", http.body("a=b&c=d"), http.timeout(10))
``````````````


#### 定义

`RequestToMMH3Hash128x64(urlRaw string, options ...http_struct.HttpOption) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| urlRaw | `string` | 目标 URL |
| options | `...http_struct.HttpOption` | 可选请求选项，例如 http.timeout |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 响应体的 mmh3 hash&lt;128x64&gt; 字符串 |
| r2 | `error` | 错误信息，请求失败时返回非空 |


### RequestToSha1

#### 详细描述
RequestToSha1 根据指定的 URL 发起 GET 请求，并计算响应体的 sha1 hash

参数:

  - urlRaw: 目标 URL

  - options: 可选请求选项，例如 http.timeout



返回值:

  - 响应体的 sha1 hash 字符串

  - 错误信息，请求失败时返回非空




Example:

``````````````yak
rsp, err = http.RequestToSha1("http://pie.dev/post", http.body("a=b&c=d"), http.timeout(10))
``````````````


#### 定义

`RequestToSha1(urlRaw string, options ...http_struct.HttpOption) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| urlRaw | `string` | 目标 URL |
| options | `...http_struct.HttpOption` | 可选请求选项，例如 http.timeout |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 响应体的 sha1 hash 字符串 |
| r2 | `error` | 错误信息，请求失败时返回非空 |


### RequestToSha256

#### 详细描述
RequestToSha256 根据指定的 URL 发起 GET 请求，并计算响应体的 sha256 hash

参数:

  - urlRaw: 目标 URL

  - options: 可选请求选项，例如 http.timeout



返回值:

  - 响应体的 sha256 hash 字符串

  - 错误信息，请求失败时返回非空




Example:

``````````````yak
rsp, err = http.RequestToSha256("http://pie.dev/post", http.body("a=b&c=d"), http.timeout(10))
``````````````


#### 定义

`RequestToSha256(urlRaw string, options ...http_struct.HttpOption) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| urlRaw | `string` | 目标 URL |
| options | `...http_struct.HttpOption` | 可选请求选项，例如 http.timeout |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 响应体的 sha256 hash 字符串 |
| r2 | `error` | 错误信息，请求失败时返回非空 |


### RequestToSha512

#### 详细描述
RequestToSha512 根据指定的 URL 发起 GET 请求，并计算响应体的 sha512 hash

参数:

  - urlRaw: 目标 URL

  - options: 可选请求选项，例如 http.timeout



返回值:

  - 响应体的 sha512 hash 字符串

  - 错误信息，请求失败时返回非空




Example:

``````````````yak
rsp, err = http.RequestToSha512("http://pie.dev/post", http.body("a=b&c=d"), http.timeout(10))
``````````````


#### 定义

`RequestToSha512(urlRaw string, options ...http_struct.HttpOption) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| urlRaw | `string` | 目标 URL |
| options | `...http_struct.HttpOption` | 可选请求选项，例如 http.timeout |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 响应体的 sha512 hash 字符串 |
| r2 | `error` | 错误信息，请求失败时返回非空 |


### afterSaveHandler

#### 详细描述
afterSaveHandler 是一个请求选项参数，用于设置请求记录保存到数据库后的回调函数

参数:

  - f: 一个或多个回调函数，参数为保存后的 HTTPFlow 记录



返回值:

  - 一个请求选项，作为可变参数传入 http.Get/http.Post 等




Example:

``````````````yak
// 在请求记录保存后执行回调，依赖网络，此处仅作示意

	rsp, err = http.Get("https://example.com", http.save(true), http.afterSaveHandler(func(flow) {
	    println(flow.Url)
	}))
``````````````


#### 定义

`afterSaveHandler(f ...func(flow *schema.HTTPFlow)) http_struct.HttpOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `...func(flow *schema.HTTPFlow)` | 一个或多个回调函数，参数为保存后的 HTTPFlow 记录 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `http_struct.HttpOption` | 一个请求选项，作为可变参数传入 http.Get/http.Post 等 |


### body

#### 详细描述
body 是一个请求选项参数，用于指定请求体

参数:

  - value: 请求体内容（字符串、字节数组或 io.Reader）



返回值:

  - 一个请求选项，作为可变参数传入 http.Post 等




Example:

``````````````yak
rsp, err = http.Post("https://pie.dev/post", http.body("a=b&c=d"))
``````````````


#### 定义

`body(value any) http_struct.HttpOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| value | `any` | 请求体内容（字符串、字节数组或 io.Reader） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `http_struct.HttpOption` | 一个请求选项，作为可变参数传入 http.Post 等 |


### context

#### 详细描述
context 是一个请求选项参数，用于设置请求的上下文，可通过取消上下文来中断请求

参数:

  - ctx: 上下文对象



返回值:

  - 一个请求选项，作为可变参数传入 http.Get/http.Post 等




Example:

``````````````yak
ctx = context.New()
rsp, err = http.Get("http://www.example.com", http.context(ctx)) // 向 example.com 发起请求，使用指定的上下文
``````````````


#### 定义

`context(ctx context.Context) http_struct.HttpOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` | 上下文对象 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `http_struct.HttpOption` | 一个请求选项，作为可变参数传入 http.Get/http.Post 等 |


### cookie

#### 详细描述
cookie 是一个请求选项参数，用于设置完整的 Cookie 字段

参数:

  - value: 完整的 Cookie 字符串，形如 &#34;a=b; c=d&#34;



返回值:

  - 一个请求选项，作为可变参数传入 http.Get/http.Post 等




Example:

``````````````yak
rsp, err = http.Get("http://www.yaklang.com", http.WithCookie("a=b; c=d"))
``````````````


#### 定义

`cookie(value any) http_struct.HttpOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| value | `any` | 完整的 Cookie 字符串，形如 &#34;a=b; c=d&#34; |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `http_struct.HttpOption` | 一个请求选项，作为可变参数传入 http.Get/http.Post 等 |


### disableSession

#### 详细描述
disableSession 是一个请求选项参数，为 true 时不自动分配 session，也不使用 cookie jar

参数:

  - b: 是否禁用会话



返回值:

  - 一个请求选项，作为可变参数传入 http.Get/http.Post 等




Example:

``````````````yak
// 禁用会话与 cookie jar，依赖网络，此处仅作示意
rsp, err = http.Get("https://example.com", http.disableSession(true))
``````````````


#### 定义

`disableSession(b bool) http_struct.HttpOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` | 是否禁用会话 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `http_struct.HttpOption` | 一个请求选项，作为可变参数传入 http.Get/http.Post 等 |


### dump

#### 详细描述
dump 获取指定请求结构体引用或响应结构体引用的原始报文，返回原始报文与错误

参数:

  - i: 请求或响应结构体引用



返回值:

  - 原始报文字节数组

  - 错误信息，类型不支持或序列化失败时返回非空




Example:

``````````````yak
req, err = http.NewRequest("GET", "http://www.yaklang.com", http.timeout(10))
reqRaw, err = http.dump(req)
rsp, err = http.Do(req)
rspRaw, err = http.dump(rsp)
``````````````


#### 定义

`dump(i any) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 请求或响应结构体引用 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 原始报文字节数组 |
| r2 | `error` | 错误信息，类型不支持或序列化失败时返回非空 |


### dumphead

#### 详细描述
dumphead 获取指定请求结构体引用或响应结构体引用的原始报文头部，返回原始报文头部与错误

参数:

  - i: 请求或响应结构体引用



返回值:

  - 原始报文头部字节数组

  - 错误信息，类型不支持或序列化失败时返回非空




Example:

``````````````yak
req, err = http.NewRequest("GET", "http://www.yaklang.com", http.timeout(10))
reqHeadRaw, err = http.dumphead(req)
rsp, err = http.Do(req)
rspHeadRaw, err = http.dumphead(rsp)
``````````````


#### 定义

`dumphead(i any) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 请求或响应结构体引用 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 原始报文头部字节数组 |
| r2 | `error` | 错误信息，类型不支持或序列化失败时返回非空 |


### fakeua

#### 详细描述
fakeua 是一个请求选项参数，用于随机指定请求的 User-Agent

返回值:

  - 一个请求选项，作为可变参数传入 http.Get/http.Post 等




Example:

``````````````yak
rsp, err = http.Get("http://www.yaklang.com", http.fakeua())
``````````````


#### 定义

`fakeua() http_struct.HttpOption`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `http_struct.HttpOption` | 一个请求选项，作为可变参数传入 http.Get/http.Post 等 |


### fromPlugin

#### 详细描述
fromPlugin 是一个请求选项参数，用于在请求记录保存到数据库时标识此次请求来源的插件名称

参数:

  - value: 来源插件名称



返回值:

  - 一个请求选项，作为可变参数传入 http.Get/http.Post 等




Example:

``````````````yak
// 标记请求来源插件，依赖网络，此处仅作示意
rsp, err = http.Get("https://example.com", http.save(true), http.fromPlugin("my-plugin"))
``````````````


#### 定义

`fromPlugin(value string) http_struct.HttpOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| value | `string` | 来源插件名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `http_struct.HttpOption` | 一个请求选项，作为可变参数传入 http.Get/http.Post 等 |


### header

#### 详细描述
header 是一个请求选项参数，用于添加/指定请求头

参数:

  - key: 请求头名称

  - value: 请求头值



返回值:

  - 一个请求选项，作为可变参数传入 http.Get/http.Post 等




Example:

``````````````yak
rsp, err = http.Get("http://www.yaklang.com", http.header("AAA", "BBB"))
``````````````


#### 定义

`header(key any, value any) http_struct.HttpOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `any` | 请求头名称 |
| value | `any` | 请求头值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `http_struct.HttpOption` | 一个请求选项，作为可变参数传入 http.Get/http.Post 等 |


### json

#### 详细描述
json 是一个请求选项参数，用于指定 JSON 格式的请求体，它会将传入的值进行 JSON 序列化后设置为请求体

参数:

  - value: 任意可被 JSON 序列化的值（如 map、slice）



返回值:

  - 一个请求选项，作为可变参数传入 http.Post 等




Example:

``````````````yak
rsp, err = http.Post("https://pie.dev/post", http.header("Content-Type", "application/json"), http.json({"a": "b", "c": "d"}))
``````````````


#### 定义

`json(value any) http_struct.HttpOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| value | `any` | 任意可被 JSON 序列化的值（如 map、slice） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `http_struct.HttpOption` | 一个请求选项，作为可变参数传入 http.Post 等 |


### noredirect

#### 详细描述
noredirect 是一个请求选项参数，用于禁止重定向

返回值:

  - 一个请求选项，作为可变参数传入 http.Get/http.Post 等




Example:

``````````````yak
rsp, err = http.Get("http://pie.dev/redirect/3", http.noredirect())
``````````````


#### 定义

`noredirect() http_struct.HttpOption`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `http_struct.HttpOption` | 一个请求选项，作为可变参数传入 http.Get/http.Post 等 |


### params

#### 详细描述
params 是一个请求选项参数，用于添加/指定 GET 参数，这会将参数进行 URL 编码

参数:

  - i: GET 参数，形如 &#34;a=b&#34;，多次调用可添加多个



返回值:

  - 一个请求选项，作为可变参数传入 http.Get 等




Example:

``````````````yak
rsp, err = http.Get("http://www.yaklang.com", http.params("a=b"), http.params("c=d"))
``````````````


#### 定义

`params(i any) http_struct.HttpOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | GET 参数，形如 &#34;a=b&#34;，多次调用可添加多个 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `http_struct.HttpOption` | 一个请求选项，作为可变参数传入 http.Get 等 |


### postparams

#### 详细描述
postparams 是一个请求选项参数，用于添加/指定 POST 参数，这会将参数进行 URL 编码

参数:

  - i: POST 参数，形如 &#34;a=b&#34;，多次调用可添加多个



返回值:

  - 一个请求选项，作为可变参数传入 http.Post 等




Example:

``````````````yak
rsp, err = http.Post("http://www.yaklang.com", http.postparams("a=b"), http.postparams("c=d"))
``````````````


#### 定义

`postparams(i any) http_struct.HttpOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | POST 参数，形如 &#34;a=b&#34;，多次调用可添加多个 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `http_struct.HttpOption` | 一个请求选项，作为可变参数传入 http.Post 等 |


### proxy

#### 详细描述
proxy 是一个请求选项参数，用于设置一个或多个请求的代理，请求时会根据顺序找到一个可用的代理使用

参数:

  - values: 一个或多个代理地址，支持 http、https、socks5 协议



返回值:

  - 一个请求选项，作为可变参数传入 http.Get/http.Post 等




Example:

``````````````yak
rsp, err = http.Get("http://www.yaklang.com", http.proxy("http://127.0.0.1:7890", "http://127.0.0.1:8083"))
``````````````


#### 定义

`proxy(values ...string) http_struct.HttpOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| values | `...string` | 一个或多个代理地址，支持 http、https、socks5 协议 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `http_struct.HttpOption` | 一个请求选项，作为可变参数传入 http.Get/http.Post 等 |


### redirect

#### 详细描述
redirect 是一个请求选项参数，它接收重定向处理函数，用于自定义重定向处理逻辑，返回 true 代表继续重定向，返回 false 代表终止重定向

参数:

  - c: 重定向处理函数，第一个参数是当前请求结构体引用，第二个参数是之前的请求列表，返回是否继续重定向



返回值:

  - 一个请求选项，作为可变参数传入 http.Get/http.Post 等




Example:

``````````````yak
rsp, err = http.Get("http://pie.dev/redirect/3", http.redirect(func(r, vias) bool { return true })
``````````````


#### 定义

`redirect(c func(r *http.Request, vias []*http.Request) bool) http_struct.HttpOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| c | `func(r *http.Request, vias []*http.Request) bool` | 重定向处理函数，第一个参数是当前请求结构体引用，第二个参数是之前的请求列表，返回是否继续重定向 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `http_struct.HttpOption` | 一个请求选项，作为可变参数传入 http.Get/http.Post 等 |


### runtimeID

#### 详细描述
runtimeID 是一个请求选项参数，用于设置运行时 ID 以便将请求记录与某次任务关联追踪

参数:

  - value: 运行时 ID 字符串



返回值:

  - 一个请求选项，作为可变参数传入 http.Get/http.Post 等




Example:

``````````````yak
// 设置运行时 ID，依赖网络，此处仅作示意
rsp, err = http.Get("https://example.com", http.save(true), http.runtimeID("task-001"))
``````````````


#### 定义

`runtimeID(value string) http_struct.HttpOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| value | `string` | 运行时 ID 字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `http_struct.HttpOption` | 一个请求选项，作为可变参数传入 http.Get/http.Post 等 |


### save

#### 详细描述
save 是一个请求选项参数，用于指定是否将此次请求的记录保存在数据库中，默认为 true 即会保存到数据库

参数:

  - value: 是否保存到数据库



返回值:

  - 一个请求选项，作为可变参数传入 http.Get/http.Post 等




Example:

``````````````yak
http.Get("https://exmaple.com", http.save(true)) // 向 example.com 发起请求，会将此次请求保存到数据库中
``````````````


#### 定义

`save(value bool) http_struct.HttpOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| value | `bool` | 是否保存到数据库 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `http_struct.HttpOption` | 一个请求选项，作为可变参数传入 http.Get/http.Post 等 |


### session

#### 详细描述
session 是一个请求选项参数，用于根据传入的值指定会话，使用相同的值会使用同一个会话，同一个会话会自动复用 Cookie

参数:

  - value: 会话标识，相同标识共享同一会话



返回值:

  - 一个请求选项，作为可变参数传入 http.Get/http.Post 等




Example:

``````````````yak
rsp, err = http.Get("http://www.yaklang.com", http.session("request1"))
``````````````


#### 定义

`session(value string) http_struct.HttpOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| value | `string` | 会话标识，相同标识共享同一会话 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `http_struct.HttpOption` | 一个请求选项，作为可变参数传入 http.Get/http.Post 等 |


### show

#### 详细描述
show 获取指定请求结构体引用或响应结构体引用的原始报文并输出在标准输出

参数:

  - i: 请求或响应结构体引用



返回值:

  - 无




Example:

``````````````yak
req, err = http.NewRequest("GET", "http://www.yaklang.com", http.timeout(10))
http.show(req)
rsp, err = http.Do(req)
http.show(rsp)
``````````````


#### 定义

`show(i any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 请求或响应结构体引用 |


### showhead

#### 详细描述
showhead 获取指定请求结构体引用或响应结构体引用的原始报文头部并输出在标准输出

参数:

  - i: 请求或响应结构体引用



返回值:

  - 无




Example:

``````````````yak
req, err = http.NewRequest("GET", "http://www.yaklang.com", http.timeout(10))
http.showhead(req)
rsp, err = http.Do(req)
http.showhead(rsp)
``````````````


#### 定义

`showhead(i any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 请求或响应结构体引用 |


### source

#### 详细描述
source 是一个请求选项参数，用于在请求记录保存到数据库时标识此次请求的来源

参数:

  - value: 来源标识字符串



返回值:

  - 一个请求选项，作为可变参数传入 http.Get/http.Post 等




Example:

``````````````yak
rsp, err = http.Get("https://exmaple.com", http.save(true), http.source("test")) // 向 example.com 发起请求，会将此次请求保存到数据库中，指示此次请求的来源为test
``````````````


#### 定义

`source(value string) http_struct.HttpOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| value | `string` | 来源标识字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `http_struct.HttpOption` | 一个请求选项，作为可变参数传入 http.Get/http.Post 等 |


### timeout

#### 详细描述
WithTimeout 是一个请求选项参数，用于设置请求超时时间，单位是秒

参数:

  - f: 超时时间，单位为秒，支持小数



返回值:

  - 一个请求选项，作为可变参数传入 http.Get/http.Post 等




Example:

``````````````yak
rsp, err = http.Get("http://www.yaklang.com", http.WithTimeout(10))
``````````````


#### 定义

`timeout(f float64) http_struct.HttpOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `float64` | 超时时间，单位为秒，支持小数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `http_struct.HttpOption` | 一个请求选项，作为可变参数传入 http.Get/http.Post 等 |


### ua

#### 详细描述
useragent 是一个请求选项参数，用于指定请求的 User-Agent

参数:

  - value: User-Agent 字符串



返回值:

  - 一个请求选项，作为可变参数传入 http.Get/http.Post 等




Example:

``````````````yak
rsp, err = http.Get("http://www.yaklang.com", http.ua("yaklang-http"))
``````````````


#### 定义

`ua(value any) http_struct.HttpOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| value | `any` | User-Agent 字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `http_struct.HttpOption` | 一个请求选项，作为可变参数传入 http.Get/http.Post 等 |


### uarand

#### 详细描述
uarand 返回一个随机的 User-Agent

返回值:

  - 随机生成的 User-Agent 字符串




Example:

``````````````yak
ua = http.uarand()
``````````````


#### 定义

`uarand() string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 随机生成的 User-Agent 字符串 |


### useragent

#### 详细描述
useragent 是一个请求选项参数，用于指定请求的 User-Agent

参数:

  - value: User-Agent 字符串



返回值:

  - 一个请求选项，作为可变参数传入 http.Get/http.Post 等




Example:

``````````````yak
rsp, err = http.Get("http://www.yaklang.com", http.ua("yaklang-http"))
``````````````


#### 定义

`useragent(value any) http_struct.HttpOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| value | `any` | User-Agent 字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `http_struct.HttpOption` | 一个请求选项，作为可变参数传入 http.Get/http.Post 等 |


