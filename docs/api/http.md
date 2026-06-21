# http {#library-http}

`http` 库提供高层、链式风格的 HTTP 客户端，用 `http.Get` / `http.Post` 等便捷方法加选项发起请求，并内置 favicon 哈希、请求指纹等安全测绘小工具。相比 `poc` 更接近"通用 HTTP 客户端"的使用习惯。

典型使用场景：

- 发起请求：`http.Get` / `http.Post` / `http.Request` / `http.Do` / `http.NewRequest`，配合 `http.header` / `http.body` / `http.json` / `http.params` / `http.cookie` / `http.proxy` / `http.timeout` / `http.ua` 等选项。
- 响应处理：`http.GetAllBody` 取响应体，`http.dump` / `http.show` 打印请求/响应，`http.dumphead` / `http.showhead` 打印头部。
- 测绘指纹：`http.RequestFaviconHash` / `http.ExtractFaviconURL` 计算 favicon 哈希，`http.RequestToMD5` / `http.RequestToMMH3Hash128` / `http.RequestToSha256` 计算响应指纹（用于网络空间测绘比对）。

与相邻库的关系：`http` 偏"通用客户端 + 测绘"，`poc` 偏"原始报文级精确控制"，`fuzz`/`fuzzx` 偏"批量变异"；三者覆盖从易用到精细的不同 HTTP 需求。

> 共 41 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [http.Do](#do) | `i any` | `*http.Response, error` | 根据构造好的请求结构体引用发送请求，返回响应结构体引用与错误 |
| [http.ExtractFaviconURL](#extractfaviconurl) | `siteURL string, content []byte` | `string, error` | 从 HTML 页面内容中解析出 favicon 图标的 URL，并相对站点地址补全为绝对地址 |
| [http.GetAllBody](#getallbody) | `raw any` | `[]byte` | 获取响应结构体引用的响应体内容 |
| [http.Raw](#raw) | `i any` | `*http.Request, error` | 根据原始请求报文生成请求结构体引用，返回请求结构体引用与错误 |
| [http.dump](#dump) | `i any` | `[]byte, error` | 获取指定请求结构体引用或响应结构体引用的原始报文，返回原始报文与错误 |
| [http.dumphead](#dumphead) | `i any` | `[]byte, error` | 获取指定请求结构体引用或响应结构体引用的原始报文头部，返回原始报文头部与错误 |
| [http.show](#show) | `i any` | - | 获取指定请求结构体引用或响应结构体引用的原始报文并输出在标准输出 |
| [http.showhead](#showhead) | `i any` | - | 获取指定请求结构体引用或响应结构体引用的原始报文头部并输出在标准输出 |
| [http.uarand](#uarand) | - | `string` | 返回一个随机的 User-Agent |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [http.Get](#get) | `url string, options ...http_struct.HttpOption` | `*http_struct.YakHttpResponse, error` | 根据指定的 URL 发起 GET 请求，可接收零个到多个请求选项用于配置此次请求 |
| [http.NewRequest](#newrequest) | `method string, url string, opts ...http_struct.HttpOption` | `*http_struct.YakHttpRequest, error` | 根据指定的 method 和 URL 生成请求结构体引用，可接收零个到多个请求选项用于配置此次请求 |
| [http.Post](#post) | `url string, options ...http_struct.HttpOption` | `*http_struct.YakHttpResponse, error` | 根据指定的 URL 发起 POST 请求，可接收零个到多个请求选项用于配置此次请求 |
| [http.Request](#request) | `method string, url string, options ...http_struct.HttpOption` | `*http_struct.YakHttpResponse, error` | 根据指定的 method 和 URL 发起请求，可接收零个到多个请求选项用于配置此次请求 |
| [http.RequestFaviconHash](#requestfaviconhash) | `urlRaw string, options ...http_struct.HttpOption` | `string, error` | 根据指定的 URL 发起 GET 请求并计算响应体的 favicon hash，常用于资产识别 |
| [http.RequestToMD5](#requesttomd5) | `urlRaw string, options ...http_struct.HttpOption` | `string, error` | 根据指定的 URL 发起 GET 请求，并计算响应体的 md5 hash |
| [http.RequestToMMH3Hash128](#requesttommh3hash128) | `urlRaw string, options ...http_struct.HttpOption` | `string, error` | 根据指定的 URL 发起 GET 请求，并计算响应体的 mmh3 hash&lt;128&gt; |
| [http.RequestToMMH3Hash128x64](#requesttommh3hash128x64) | `urlRaw string, options ...http_struct.HttpOption` | `string, error` | 根据指定的 URL 发起 GET 请求，并计算响应体的 mmh3 hash&lt;128x64&gt; |
| [http.RequestToSha1](#requesttosha1) | `urlRaw string, options ...http_struct.HttpOption` | `string, error` | 根据指定的 URL 发起 GET 请求，并计算响应体的 sha1 hash |
| [http.RequestToSha256](#requesttosha256) | `urlRaw string, options ...http_struct.HttpOption` | `string, error` | 根据指定的 URL 发起 GET 请求，并计算响应体的 sha256 hash |
| [http.RequestToSha512](#requesttosha512) | `urlRaw string, options ...http_struct.HttpOption` | `string, error` | 根据指定的 URL 发起 GET 请求，并计算响应体的 sha512 hash |

## 函数详情

### Do {#do}

```go
Do(i any) (*http.Response, error)
```

根据构造好的请求结构体引用发送请求，返回响应结构体引用与错误

! 已弃用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 请求结构体引用 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*http.Response` | 响应结构体引用 |
| r2 | `error` | 错误信息，请求失败时返回非空 |

**示例**

``````````````yak
req, err = http.Raw("GET / HTTP/1.1\r\nHost: www.yaklang.com\r\n\r\n")
rsp, err = http.Do(req)
``````````````

---

### ExtractFaviconURL {#extractfaviconurl}

```go
ExtractFaviconURL(siteURL string, content []byte) (string, error)
```

从 HTML 页面内容中解析出 favicon 图标的 URL，并相对站点地址补全为绝对地址

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| siteURL | `string` | 页面所在的站点地址，用于补全相对路径 |
| content | `[]byte` | HTML 页面内容 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | favicon 图标的绝对 URL |
| r2 | `error` | 错误信息，解析失败或未找到图标时返回非空 |

**示例**

``````````````yak
html = "<html><head><link rel=\"icon\" href=\"/favicon.ico\"></head></html>"
iconURL = http.ExtractFaviconURL("https://example.com", html)~
println(iconURL)   // OUT: https://example.com/favicon.ico
``````````````

---

### GetAllBody {#getallbody}

```go
GetAllBody(raw any) []byte
```

获取响应结构体引用的响应体内容

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| raw | `any` | 响应结构体引用 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 响应体字节数组，读取失败或类型不支持时返回 nil |

**示例**

``````````````yak
rsp, err = http.Get("http://www.yaklang.com")
raw = http.GetAllBody(rsp)
``````````````

---

### Raw {#raw}

```go
Raw(i any) (*http.Request, error)
```

根据原始请求报文生成请求结构体引用，返回请求结构体引用与错误

注意，此函数只会生成请求结构体引用，不会发起请求

! 已弃用，使用 poc.HTTP 或 poc.HTTPEx 代替

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 原始请求报文（字符串、字节数组或请求结构体引用） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*http.Request` | 请求结构体引用 |
| r2 | `error` | 错误信息，类型不支持或解析失败时返回非空 |

**示例**

``````````````yak
req, err = http.Raw("GET / HTTP/1.1\r\nHost: www.yaklang.com\r\n\r\n")
``````````````

---

### dump {#dump}

```go
dump(i any) ([]byte, error)
```

获取指定请求结构体引用或响应结构体引用的原始报文，返回原始报文与错误

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 请求或响应结构体引用 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 原始报文字节数组 |
| r2 | `error` | 错误信息，类型不支持或序列化失败时返回非空 |

**示例**

``````````````yak
req, err = http.NewRequest("GET", "http://www.yaklang.com", http.timeout(10))
reqRaw, err = http.dump(req)
rsp, err = http.Do(req)
rspRaw, err = http.dump(rsp)
``````````````

---

### dumphead {#dumphead}

```go
dumphead(i any) ([]byte, error)
```

获取指定请求结构体引用或响应结构体引用的原始报文头部，返回原始报文头部与错误

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 请求或响应结构体引用 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 原始报文头部字节数组 |
| r2 | `error` | 错误信息，类型不支持或序列化失败时返回非空 |

**示例**

``````````````yak
req, err = http.NewRequest("GET", "http://www.yaklang.com", http.timeout(10))
reqHeadRaw, err = http.dumphead(req)
rsp, err = http.Do(req)
rspHeadRaw, err = http.dumphead(rsp)
``````````````

---

### show {#show}

```go
show(i any)
```

获取指定请求结构体引用或响应结构体引用的原始报文并输出在标准输出

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 请求或响应结构体引用 |

**示例**

``````````````yak
req, err = http.NewRequest("GET", "http://www.yaklang.com", http.timeout(10))
http.show(req)
rsp, err = http.Do(req)
http.show(rsp)
``````````````

---

### showhead {#showhead}

```go
showhead(i any)
```

获取指定请求结构体引用或响应结构体引用的原始报文头部并输出在标准输出

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 请求或响应结构体引用 |

**示例**

``````````````yak
req, err = http.NewRequest("GET", "http://www.yaklang.com", http.timeout(10))
http.showhead(req)
rsp, err = http.Do(req)
http.showhead(rsp)
``````````````

---

### uarand {#uarand}

```go
uarand() string
```

返回一个随机的 User-Agent

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 随机生成的 User-Agent 字符串 |

**示例**

``````````````yak
ua = http.uarand()
``````````````

---

## 可变参数函数详情

### Get {#get}

```go
Get(url string, options ...http_struct.HttpOption) (*http_struct.YakHttpResponse, error)
```

根据指定的 URL 发起 GET 请求，可接收零个到多个请求选项用于配置此次请求

! 已弃用，使用 poc.Get 代替

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| url | `string` | 目标 URL |

**可选参数**

可作为可变参数 `options ...http_struct.HttpOption` 传入选项；共 21 个可用选项，详见 [HttpOption 选项列表](#option-httpoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*http_struct.YakHttpResponse` | 响应结构体引用 |
| r2 | `error` | 错误信息，请求失败时返回非空 |

**示例**

``````````````yak
rsp, err = http.Get("http://www.yaklang.com", http.timeout(10))
``````````````

---

### NewRequest {#newrequest}

```go
NewRequest(method string, url string, opts ...http_struct.HttpOption) (*http_struct.YakHttpRequest, error)
```

根据指定的 method 和 URL 生成请求结构体引用，可接收零个到多个请求选项用于配置此次请求

注意，此函数只会生成请求结构体引用，不会发起请求

! 已弃用

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| method | `string` | 请求方法，如 &#34;GET&#34;、&#34;POST&#34; |
| url | `string` | 目标 URL |

**可选参数**

可作为可变参数 `opts ...http_struct.HttpOption` 传入选项；共 21 个可用选项，详见 [HttpOption 选项列表](#option-httpoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*http_struct.YakHttpRequest` | 请求结构体引用 |
| r2 | `error` | 错误信息，构造失败时返回非空 |

**示例**

``````````````yak
req, err = http.NewRequest("GET", "http://www.yaklang.com", http.timeout(10))
``````````````

---

### Post {#post}

```go
Post(url string, options ...http_struct.HttpOption) (*http_struct.YakHttpResponse, error)
```

根据指定的 URL 发起 POST 请求，可接收零个到多个请求选项用于配置此次请求

! 已弃用，使用 poc.Post 代替

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| url | `string` | 目标 URL |

**可选参数**

可作为可变参数 `options ...http_struct.HttpOption` 传入选项；共 21 个可用选项，详见 [HttpOption 选项列表](#option-httpoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*http_struct.YakHttpResponse` | 响应结构体引用 |
| r2 | `error` | 错误信息，请求失败时返回非空 |

**示例**

``````````````yak
rsp, err = http.Post("http://pie.dev/post", http.body("a=b&c=d"), http.timeout(10))
``````````````

---

### Request {#request}

```go
Request(method string, url string, options ...http_struct.HttpOption) (*http_struct.YakHttpResponse, error)
```

根据指定的 method 和 URL 发起请求，可接收零个到多个请求选项用于配置此次请求

! 已弃用，使用 poc.Do 代替

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| method | `string` | 请求方法，如 &#34;GET&#34;、&#34;POST&#34; |
| url | `string` | 目标 URL |

**可选参数**

可作为可变参数 `options ...http_struct.HttpOption` 传入选项；共 21 个可用选项，详见 [HttpOption 选项列表](#option-httpoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*http_struct.YakHttpResponse` | 响应结构体引用 |
| r2 | `error` | 错误信息，请求失败时返回非空 |

**示例**

``````````````yak
rsp, err = http.Request("POST","http://pie.dev/post", http.body("a=b&c=d"), http.timeout(10))
``````````````

---

### RequestFaviconHash {#requestfaviconhash}

```go
RequestFaviconHash(urlRaw string, options ...http_struct.HttpOption) (string, error)
```

根据指定的 URL 发起 GET 请求并计算响应体的 favicon hash，常用于资产识别

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| urlRaw | `string` | 目标 URL |

**可选参数**

可作为可变参数 `options ...http_struct.HttpOption` 传入选项；共 21 个可用选项，详见 [HttpOption 选项列表](#option-httpoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 响应体的 base64 编码 mmh3 hash（响应状态码为 2xx 时） |
| r2 | `error` | 错误信息，请求失败或状态码非 2xx 时返回非空 |

**示例**

``````````````yak
rsp, err = http.RequestFaviconHash("http://pie.dev/post", http.body("a=b&c=d"), http.timeout(10))
``````````````

---

### RequestToMD5 {#requesttomd5}

```go
RequestToMD5(urlRaw string, options ...http_struct.HttpOption) (string, error)
```

根据指定的 URL 发起 GET 请求，并计算响应体的 md5 hash

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| urlRaw | `string` | 目标 URL |

**可选参数**

可作为可变参数 `options ...http_struct.HttpOption` 传入选项；共 21 个可用选项，详见 [HttpOption 选项列表](#option-httpoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 响应体的 md5 hash 字符串 |
| r2 | `error` | 错误信息，请求失败时返回非空 |

**示例**

``````````````yak
rsp, err = http.RequestToMD5("http://pie.dev/post", http.body("a=b&c=d"), http.timeout(10))
``````````````

---

### RequestToMMH3Hash128 {#requesttommh3hash128}

```go
RequestToMMH3Hash128(urlRaw string, options ...http_struct.HttpOption) (string, error)
```

根据指定的 URL 发起 GET 请求，并计算响应体的 mmh3 hash&lt;128&gt;

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| urlRaw | `string` | 目标 URL |

**可选参数**

可作为可变参数 `options ...http_struct.HttpOption` 传入选项；共 21 个可用选项，详见 [HttpOption 选项列表](#option-httpoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 响应体的 mmh3 hash&lt;128&gt; 字符串 |
| r2 | `error` | 错误信息，请求失败时返回非空 |

**示例**

``````````````yak
rsp, err = http.RequestToMMH3Hash128("http://pie.dev/post", http.body("a=b&c=d"), http.timeout(10))
``````````````

---

### RequestToMMH3Hash128x64 {#requesttommh3hash128x64}

```go
RequestToMMH3Hash128x64(urlRaw string, options ...http_struct.HttpOption) (string, error)
```

根据指定的 URL 发起 GET 请求，并计算响应体的 mmh3 hash&lt;128x64&gt;

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| urlRaw | `string` | 目标 URL |

**可选参数**

可作为可变参数 `options ...http_struct.HttpOption` 传入选项；共 21 个可用选项，详见 [HttpOption 选项列表](#option-httpoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 响应体的 mmh3 hash&lt;128x64&gt; 字符串 |
| r2 | `error` | 错误信息，请求失败时返回非空 |

**示例**

``````````````yak
rsp, err = http.RequestToMMH3Hash128x64("http://pie.dev/post", http.body("a=b&c=d"), http.timeout(10))
``````````````

---

### RequestToSha1 {#requesttosha1}

```go
RequestToSha1(urlRaw string, options ...http_struct.HttpOption) (string, error)
```

根据指定的 URL 发起 GET 请求，并计算响应体的 sha1 hash

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| urlRaw | `string` | 目标 URL |

**可选参数**

可作为可变参数 `options ...http_struct.HttpOption` 传入选项；共 21 个可用选项，详见 [HttpOption 选项列表](#option-httpoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 响应体的 sha1 hash 字符串 |
| r2 | `error` | 错误信息，请求失败时返回非空 |

**示例**

``````````````yak
rsp, err = http.RequestToSha1("http://pie.dev/post", http.body("a=b&c=d"), http.timeout(10))
``````````````

---

### RequestToSha256 {#requesttosha256}

```go
RequestToSha256(urlRaw string, options ...http_struct.HttpOption) (string, error)
```

根据指定的 URL 发起 GET 请求，并计算响应体的 sha256 hash

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| urlRaw | `string` | 目标 URL |

**可选参数**

可作为可变参数 `options ...http_struct.HttpOption` 传入选项；共 21 个可用选项，详见 [HttpOption 选项列表](#option-httpoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 响应体的 sha256 hash 字符串 |
| r2 | `error` | 错误信息，请求失败时返回非空 |

**示例**

``````````````yak
rsp, err = http.RequestToSha256("http://pie.dev/post", http.body("a=b&c=d"), http.timeout(10))
``````````````

---

### RequestToSha512 {#requesttosha512}

```go
RequestToSha512(urlRaw string, options ...http_struct.HttpOption) (string, error)
```

根据指定的 URL 发起 GET 请求，并计算响应体的 sha512 hash

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| urlRaw | `string` | 目标 URL |

**可选参数**

可作为可变参数 `options ...http_struct.HttpOption` 传入选项；共 21 个可用选项，详见 [HttpOption 选项列表](#option-httpoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 响应体的 sha512 hash 字符串 |
| r2 | `error` | 错误信息，请求失败时返回非空 |

**示例**

``````````````yak
rsp, err = http.RequestToSha512("http://pie.dev/post", http.body("a=b&c=d"), http.timeout(10))
``````````````

---

## 可变参数选项列表

以下按选项类型汇总全部可变参数选项(原先重复在各主函数下的选项表已收拢到此处)：

### 1. 类型：HttpOption {#option-httpoption}

涉及到的函数有：[http.Get](#get)、[http.NewRequest](#newrequest)、[http.Post](#post)、[http.Request](#request)、[http.RequestFaviconHash](#requestfaviconhash)、[http.RequestToMD5](#requesttomd5)、[http.RequestToMMH3Hash128](#requesttommh3hash128)、[http.RequestToMMH3Hash128x64](#requesttommh3hash128x64)、[http.RequestToSha1](#requesttosha1)、[http.RequestToSha256](#requesttosha256)、[http.RequestToSha512](#requesttosha512)

|选项函数|参数|返回值|说明|
|:--|:--|:--|:--|
| `http.afterSaveHandler` | `f ...func(flow *schema.HTTPFlow)` | `http_struct.HttpOption` | 是一个请求选项参数，用于设置请求记录保存到数据库后的回调函数 |
| `http.body` | `value any` | `http_struct.HttpOption` | 是一个请求选项参数，用于指定请求体 |
| `http.context` | `ctx context.Context` | `http_struct.HttpOption` | 是一个请求选项参数，用于设置请求的上下文，可通过取消上下文来中断请求 |
| `http.cookie` | `value any` | `http_struct.HttpOption` | 是一个请求选项参数，用于设置完整的 Cookie 字段 |
| `http.disableSession` | `b bool` | `http_struct.HttpOption` | 是一个请求选项参数，为 true 时不自动分配 session，也不使用 cookie jar |
| `http.fakeua` | - | `http_struct.HttpOption` | 是一个请求选项参数，用于随机指定请求的 User-Agent |
| `http.fromPlugin` | `value string` | `http_struct.HttpOption` | 是一个请求选项参数，用于在请求记录保存到数据库时标识此次请求来源的插件名称 |
| `http.header` | `key any, value any` | `http_struct.HttpOption` | 是一个请求选项参数，用于添加/指定请求头 |
| `http.json` | `value any` | `http_struct.HttpOption` | 是一个请求选项参数，用于指定 JSON 格式的请求体，它会将传入的值进行 JSON 序列化后设置为请求体 |
| `http.noredirect` | - | `http_struct.HttpOption` | 是一个请求选项参数，用于禁止重定向 |
| `http.params` | `i any` | `http_struct.HttpOption` | 是一个请求选项参数，用于添加/指定 GET 参数，这会将参数进行 URL 编码 |
| `http.postparams` | `i any` | `http_struct.HttpOption` | 是一个请求选项参数，用于添加/指定 POST 参数，这会将参数进行 URL 编码 |
| `http.proxy` | `values ...string` | `http_struct.HttpOption` | 是一个请求选项参数，用于设置一个或多个请求的代理，请求时会根据顺序找到一个可用的代理使用 |
| `http.redirect` | `c func(r *http.Request, vias []*http.Request) bool` | `http_struct.HttpOption` | 是一个请求选项参数，它接收重定向处理函数，用于自定义重定向处理逻辑，返回 true 代表继续重定向，返回 false 代表终止重定向 |
| `http.runtimeID` | `value string` | `http_struct.HttpOption` | 是一个请求选项参数，用于设置运行时 ID 以便将请求记录与某次任务关联追踪 |
| `http.save` | `value bool` | `http_struct.HttpOption` | 是一个请求选项参数，用于指定是否将此次请求的记录保存在数据库中，默认为 true 即会保存到数据库 |
| `http.session` | `value string` | `http_struct.HttpOption` | 是一个请求选项参数，用于根据传入的值指定会话，使用相同的值会使用同一个会话，同一个会话会自动复用 Cookie |
| `http.source` | `value string` | `http_struct.HttpOption` | 是一个请求选项参数，用于在请求记录保存到数据库时标识此次请求的来源 |
| `http.timeout` | `f float64` | `http_struct.HttpOption` | WithTimeout 是一个请求选项参数，用于设置请求超时时间，单位是秒 |
| `http.ua` | `value any` | `http_struct.HttpOption` | useragent 是一个请求选项参数，用于指定请求的 User-Agent |
| `http.useragent` | `value any` | `http_struct.HttpOption` | 是一个请求选项参数，用于指定请求的 User-Agent |

