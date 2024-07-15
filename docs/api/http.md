# http

|函数名|函数描述/介绍|
|:------|:--------|
| [http.Do](#do) |Do 根据构造好的请求结构体引用发送请求，返回响应结构体引用与错误  ! 已弃用  |
| [http.ExtractFaviconURL](#extractfaviconurl) |ExtractFaviconURL will receive a site url and html content return the favicon url  |
| [http.Get](#get) |Get 根据指定的 URL 发起 GET 请求，它的第一个参数是 URL ，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如设置超时时间等  返回响应结构体引用与错误  ! 已弃用，使用 poc.Get 代替  |
| [http.GetAllBody](#getallbody) |GetAllBody 获取响应结构体引用的原始响应报文  |
| [http.NewRequest](#newrequest) |NewRequest 根据指定的 method 和 URL 生成请求结构体引用，返回请求结构体引用与错误，它的第一个参数是 URL ，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如设置超时时间等  注意，此函数只会生成请求结构体引用，不会发起请求  ! 已弃用  |
| [http.Post](#post) |Post 根据指定的 URL 发起 POST 请求，它的第一个参数是 URL ，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如设置请求体，设置超时时间等  返回响应结构体引用与错误  ! 已弃用，使用 poc.Post 代替  |
| [http.Raw](#raw) |Raw 根据原始请求报文生成请求结构体引用，返回请求结构体引用与错误  注意，此函数只会生成请求结构体引用，不会发起请求  ! 已弃用，使用 poc.HTTP 或 poc.HTTPEx 代替  |
| [http.Request](#request) |Request 根据指定的 URL 发起请求，它的第一个参数是 URL ，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如设置请求体，设置超时时间等  返回响应结构体引用与错误  ! 已弃用，使用 poc.Do 代替  |
| [http.RequestFaviconHash](#requestfaviconhash) ||
| [http.RequestToMD5](#requesttomd5) ||
| [http.RequestToMMH3Hash128](#requesttommh3hash128) ||
| [http.RequestToMMH3Hash128x64](#requesttommh3hash128x64) ||
| [http.RequestToSha1](#requesttosha1) ||
| [http.RequestToSha256](#requesttosha256) ||
| [http.body](#body) |body 是一个请求选项参数，用于指定请求体  |
| [http.context](#context) |context 是一个请求选项参数，用于设置请求的上下文  |
| [http.cookie](#cookie) |header 是一个请求选项参数，用于设置完整的 Cookie 字段  |
| [http.dump](#dump) |dump 获取指定请求结构体引用或响应结构体引用的原始报文，返回原始报文与错误  |
| [http.dumphead](#dumphead) |dumphead 获取指定请求结构体引用或响应结构体引用的原始报文头部，返回原始报文头部与错误  |
| [http.fakeua](#fakeua) ||
| [http.fromPlugin](#fromplugin) ||
| [http.header](#header) |header 是一个请求选项参数，用于添加/指定请求头  |
| [http.json](#json) |json 是一个请求选项参数，用于指定 JSON 格式的请求体  它会将传入的值进行 JSON 序列化，然后设置序列化后的值为请求体  |
| [http.noredirect](#noredirect) ||
| [http.params](#params) |params 是一个请求选项参数，用于添加/指定 GET 参数，这会将参数进行 URL 编码  |
| [http.postparams](#postparams) |postparams 是一个请求选项参数，用于添加/指定 POST 参数，这会将参数进行 URL 编码  |
| [http.proxy](#proxy) |proxy 是一个请求选项参数，用于设置一个或多个请求的代理，请求时会根据顺序找到一个可用的代理使用  |
| [http.redirect](#redirect) |redirect 是一个请求选项参数，它接收重定向处理函数，用于自定义重定向处理逻辑，返回 true 代表继续重定向，返回 false 代表终止重定向  重定向处理函数中第一个参数是当前的请求结构体引用，第二个参数是之前的请求结构体引用  |
| [http.runtimeID](#runtimeid) ||
| [http.save](#save) |save 是一个请求选项参数，用于指定是否将此次请求的记录保存在数据库中，默认为true即会保存到数据库  |
| [http.session](#session) |session 是一个请求选项参数，用于根据传入的值指定会话，使用相同的值会使用同一个会话，同一个会话会自动复用 Cookie  |
| [http.show](#show) |show 获取指定请求结构体引用或响应结构体引用的原始报文并输出在标准输出  |
| [http.showhead](#showhead) |showhead 获取指定请求结构体引用或响应结构体引用的原始报文头部并输出在标准输出  |
| [http.source](#source) |source 是一个请求选项参数，用于在请求记录保存到数据库时标识此次请求的来源  |
| [http.timeout](#timeout) |WithTimeout 是一个请求选项参数，用于设置请求超时时间，单位是秒  |
| [http.ua](#ua) |useragent 是一个请求选项参数，用于指定请求的 User-Agent  |
| [http.uarand](#uarand) |uarand 返回一个随机的 User-Agent  |
| [http.useragent](#useragent) |useragent 是一个请求选项参数，用于指定请求的 User-Agent  |


## 函数定义
### Do

#### 详细描述
Do 根据构造好的请求结构体引用发送请求，返回响应结构体引用与错误

! 已弃用

Example:
```
req, err = http.Raw(&#34;GET / HTTP/1.1\r\nHost: www.yaklang.com\r\n\r\n&#34;)
rsp, err = http.Do(req)
```


#### 定义

`Do(i any) (*http.Response, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*http.Response` |   |
| r2 | `error` |   |


### ExtractFaviconURL

#### 详细描述
ExtractFaviconURL will receive a site url and html content return the favicon url

Example:

	http.ExtractFaviconURL(&#34;https://www.baidu.com&#34;, []byte(`&lt;link rel=&#34;shortcut icon&#34; href=&#34;/favicon.ico&#34; type=&#34;image/x-icon&#34;&gt;`))
	http.ExtractFaviconURL(&#34;https://www.baidu.com&#34;, []byte(`&lt;link rel=&#34;icon&#34; href=&#34;/favicon.ico&#34; type=&#34;image/x-icon&#34;&gt;`))
	http.ExtractFaviconURL(&#34;https://www.baidu.com&#34;, []byte(`&lt;link rel=&#34;icon&#34; href=&#34;/favicon.png&#34; type=&#34;image/png&#34;&gt;`))


#### 定义

`ExtractFaviconURL(siteURL string, content []byte) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| siteURL | `string` |   |
| content | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


### Get

#### 详细描述
Get 根据指定的 URL 发起 GET 请求，它的第一个参数是 URL ，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如设置超时时间等

返回响应结构体引用与错误

! 已弃用，使用 poc.Get 代替

Example:
```
rsp, err = http.Get(&#34;http://www.yaklang.com&#34;, http.timeout(10))
```


#### 定义

`Get(url string, options ...http_struct.HttpOption) (*http_struct.YakHttpResponse, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` |   |
| options | `...http_struct.HttpOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*http_struct.YakHttpResponse` |   |
| r2 | `error` |   |


### GetAllBody

#### 详细描述
GetAllBody 获取响应结构体引用的原始响应报文

Example:
```
rsp, err = http.Get(&#34;http://www.yaklang.com&#34;)
raw = http.GetAllBody(rsp)
```


#### 定义

`GetAllBody(raw any) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### NewRequest

#### 详细描述
NewRequest 根据指定的 method 和 URL 生成请求结构体引用，返回请求结构体引用与错误，它的第一个参数是 URL ，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如设置超时时间等

注意，此函数只会生成请求结构体引用，不会发起请求

! 已弃用

Example:
```
req, err = http.NewRequest(&#34;GET&#34;, &#34;http://www.yaklang.com&#34;, http.timeout(10))
```


#### 定义

`NewRequest(method string, url string, opts ...http_struct.HttpOption) (*http_struct.YakHttpRequest, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| method | `string` |   |
| url | `string` |   |
| opts | `...http_struct.HttpOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*http_struct.YakHttpRequest` |   |
| r2 | `error` |   |


### Post

#### 详细描述
Post 根据指定的 URL 发起 POST 请求，它的第一个参数是 URL ，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如设置请求体，设置超时时间等

返回响应结构体引用与错误

! 已弃用，使用 poc.Post 代替

Example:
```
rsp, err = http.Post(&#34;http://pie.dev/post&#34;, http.body(&#34;a=b&amp;c=d&#34;), http.timeout(10))
```


#### 定义

`Post(url string, options ...http_struct.HttpOption) (*http_struct.YakHttpResponse, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` |   |
| options | `...http_struct.HttpOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*http_struct.YakHttpResponse` |   |
| r2 | `error` |   |


### Raw

#### 详细描述
Raw 根据原始请求报文生成请求结构体引用，返回请求结构体引用与错误

注意，此函数只会生成请求结构体引用，不会发起请求

! 已弃用，使用 poc.HTTP 或 poc.HTTPEx 代替

Example:
```
req, err = http.Raw(&#34;GET / HTTP/1.1\r\nHost: www.yaklang.com\r\n\r\n&#34;)
```


#### 定义

`Raw(i any) (*http.Request, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*http.Request` |   |
| r2 | `error` |   |


### Request

#### 详细描述
Request 根据指定的 URL 发起请求，它的第一个参数是 URL ，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如设置请求体，设置超时时间等

返回响应结构体引用与错误

! 已弃用，使用 poc.Do 代替

Example:
```
rsp, err = http.Request(&#34;POST&#34;,&#34;http://pie.dev/post&#34;, http.body(&#34;a=b&amp;c=d&#34;), http.timeout(10))
```


#### 定义

`Request(method string, url string, options ...http_struct.HttpOption) (*http_struct.YakHttpResponse, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| method | `string` |   |
| url | `string` |   |
| options | `...http_struct.HttpOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*http_struct.YakHttpResponse` |   |
| r2 | `error` |   |


### RequestFaviconHash

#### 详细描述


#### 定义

`RequestFaviconHash(urlRaw string) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| urlRaw | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


### RequestToMD5

#### 详细描述


#### 定义

`RequestToMD5(url string) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


### RequestToMMH3Hash128

#### 详细描述


#### 定义

`RequestToMMH3Hash128(url string) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


### RequestToMMH3Hash128x64

#### 详细描述


#### 定义

`RequestToMMH3Hash128x64(url string) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


### RequestToSha1

#### 详细描述


#### 定义

`RequestToSha1(url string) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


### RequestToSha256

#### 详细描述


#### 定义

`RequestToSha256(url string) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


### body

#### 详细描述
body 是一个请求选项参数，用于指定请求体

Example:
```
rsp, err = http.Post(&#34;https://pie.dev/post&#34;, http.body(&#34;a=b&amp;c=d&#34;))
```


#### 定义

`body(value any) http_struct.HttpOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| value | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `http_struct.HttpOption` |   |


### context

#### 详细描述
context 是一个请求选项参数，用于设置请求的上下文

Example:
```
ctx = context.New()
rsp, err = http.Get(&#34;http://www.example.com&#34;, http.context(ctx)) // 向 example.com 发起请求，使用指定的上下文
```


#### 定义

`context(ctx context.Context) http_struct.HttpOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `http_struct.HttpOption` |   |


### cookie

#### 详细描述
header 是一个请求选项参数，用于设置完整的 Cookie 字段

Example:
```
rsp, err = http.Get(&#34;http://www.yaklang.com&#34;, http.WithCookie(&#34;a=b; c=d&#34;))
```


#### 定义

`cookie(value any) http_struct.HttpOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| value | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `http_struct.HttpOption` |   |


### dump

#### 详细描述
dump 获取指定请求结构体引用或响应结构体引用的原始报文，返回原始报文与错误

Example:
```
req, err = http.NewRequest(&#34;GET&#34;, &#34;http://www.yaklang.com&#34;, http.timeout(10))
reqRaw, err = http.dump(req)
rsp, err = http.Do(req)
rspRaw, err = http.dump(rsp)
```


#### 定义

`dump(i any) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### dumphead

#### 详细描述
dumphead 获取指定请求结构体引用或响应结构体引用的原始报文头部，返回原始报文头部与错误

Example:
```
req, err = http.NewRequest(&#34;GET&#34;, &#34;http://www.yaklang.com&#34;, http.timeout(10))
reqHeadRaw, err = http.dumphead(req)
rsp, err = http.Do(req)
rspHeadRaw, err = http.dumphead(rsp)
```


#### 定义

`dumphead(i any) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### fakeua

#### 详细描述


#### 定义

`fakeua() http_struct.HttpOption`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `http_struct.HttpOption` |   |


### fromPlugin

#### 详细描述


#### 定义

`fromPlugin(value string) http_struct.HttpOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| value | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `http_struct.HttpOption` |   |


### header

#### 详细描述
header 是一个请求选项参数，用于添加/指定请求头

Example:
```
rsp, err = http.Get(&#34;http://www.yaklang.com&#34;, http.header(&#34;AAA&#34;, &#34;BBB&#34;))
```


#### 定义

`header(key any, value any) http_struct.HttpOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `any` |   |
| value | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `http_struct.HttpOption` |   |


### json

#### 详细描述
json 是一个请求选项参数，用于指定 JSON 格式的请求体

它会将传入的值进行 JSON 序列化，然后设置序列化后的值为请求体

Example:
```
rsp, err = http.Post(&#34;https://pie.dev/post&#34;, http.header(&#34;Content-Type&#34;, &#34;application/json&#34;), http.json({&#34;a&#34;: &#34;b&#34;, &#34;c&#34;: &#34;d&#34;}))
```


#### 定义

`json(value any) http_struct.HttpOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| value | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `http_struct.HttpOption` |   |


### noredirect

#### 详细描述


#### 定义

`noredirect() http_struct.HttpOption`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `http_struct.HttpOption` |   |


### params

#### 详细描述
params 是一个请求选项参数，用于添加/指定 GET 参数，这会将参数进行 URL 编码

Example:
```
rsp, err = http.Get(&#34;http://www.yaklang.com&#34;, http.params(&#34;a=b&#34;), http.params(&#34;c=d&#34;))
```


#### 定义

`params(i any) http_struct.HttpOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `http_struct.HttpOption` |   |


### postparams

#### 详细描述
postparams 是一个请求选项参数，用于添加/指定 POST 参数，这会将参数进行 URL 编码

Example:
```
rsp, err = http.Post(&#34;http://www.yaklang.com&#34;, http.postparams(&#34;a=b&#34;), http.postparams(&#34;c=d&#34;))
```


#### 定义

`postparams(i any) http_struct.HttpOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `http_struct.HttpOption` |   |


### proxy

#### 详细描述
proxy 是一个请求选项参数，用于设置一个或多个请求的代理，请求时会根据顺序找到一个可用的代理使用

Example:
```
rsp, err = http.Get(&#34;http://www.yaklang.com&#34;, http.proxy(&#34;http://127.0.0.1:7890&#34;, &#34;http://127.0.0.1:8083&#34;))
```


#### 定义

`proxy(values ...string) http_struct.HttpOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| values | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `http_struct.HttpOption` |   |


### redirect

#### 详细描述
redirect 是一个请求选项参数，它接收重定向处理函数，用于自定义重定向处理逻辑，返回 true 代表继续重定向，返回 false 代表终止重定向

重定向处理函数中第一个参数是当前的请求结构体引用，第二个参数是之前的请求结构体引用

Example:
```
rsp, err = http.Get(&#34;http://pie.dev/redirect/3&#34;, http.redirect(func(r, vias) bool { return true })
```


#### 定义

`redirect(c func(r *http.Request, vias []*http.Request) bool) http_struct.HttpOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| c | `func(r *http.Request, vias []*http.Request) bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `http_struct.HttpOption` |   |


### runtimeID

#### 详细描述


#### 定义

`runtimeID(value string) http_struct.HttpOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| value | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `http_struct.HttpOption` |   |


### save

#### 详细描述
save 是一个请求选项参数，用于指定是否将此次请求的记录保存在数据库中，默认为true即会保存到数据库

Example:
```
http.Get(&#34;https://exmaple.com&#34;, http.save(true)) // 向 example.com 发起请求，会将此次请求保存到数据库中
```


#### 定义

`save(value bool) http_struct.HttpOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| value | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `http_struct.HttpOption` |   |


### session

#### 详细描述
session 是一个请求选项参数，用于根据传入的值指定会话，使用相同的值会使用同一个会话，同一个会话会自动复用 Cookie

Example:
```
rsp, err = http.Get(&#34;http://www.yaklang.com&#34;, http.session(&#34;request1&#34;))
```


#### 定义

`session(value any) http_struct.HttpOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| value | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `http_struct.HttpOption` |   |


### show

#### 详细描述
show 获取指定请求结构体引用或响应结构体引用的原始报文并输出在标准输出

Example:
```
req, err = http.NewRequest(&#34;GET&#34;, &#34;http://www.yaklang.com&#34;, http.timeout(10))
http.show(req)
rsp, err = http.Do(req)
http.show(rsp)
```


#### 定义

`show(i any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |


### showhead

#### 详细描述
showhead 获取指定请求结构体引用或响应结构体引用的原始报文头部并输出在标准输出

Example:
```
req, err = http.NewRequest(&#34;GET&#34;, &#34;http://www.yaklang.com&#34;, http.timeout(10))
http.showhead(req)
rsp, err = http.Do(req)
http.showhead(rsp)
```


#### 定义

`showhead(i any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |


### source

#### 详细描述
source 是一个请求选项参数，用于在请求记录保存到数据库时标识此次请求的来源

Example:
```
rsp, err = http.Get(&#34;https://exmaple.com&#34;, http.save(true), http.source(&#34;test&#34;)) // 向 example.com 发起请求，会将此次请求保存到数据库中，指示此次请求的来源为test
```


#### 定义

`source(value string) http_struct.HttpOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| value | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `http_struct.HttpOption` |   |


### timeout

#### 详细描述
WithTimeout 是一个请求选项参数，用于设置请求超时时间，单位是秒

Example:
```
rsp, err = http.Get(&#34;http://www.yaklang.com&#34;, http.WithTimeout(10))
```


#### 定义

`timeout(f float64) http_struct.HttpOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `http_struct.HttpOption` |   |


### ua

#### 详细描述
useragent 是一个请求选项参数，用于指定请求的 User-Agent

Example:
```
rsp, err = http.Get(&#34;http://www.yaklang.com&#34;, http.ua(&#34;yaklang-http&#34;))
```


#### 定义

`ua(value any) http_struct.HttpOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| value | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `http_struct.HttpOption` |   |


### uarand

#### 详细描述
uarand 返回一个随机的 User-Agent

Example:
```
ua = http.uarand()
```


#### 定义

`uarand() string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### useragent

#### 详细描述
useragent 是一个请求选项参数，用于指定请求的 User-Agent

Example:
```
rsp, err = http.Get(&#34;http://www.yaklang.com&#34;, http.ua(&#34;yaklang-http&#34;))
```


#### 定义

`useragent(value any) http_struct.HttpOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| value | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `http_struct.HttpOption` |   |


