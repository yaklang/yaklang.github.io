# crawler {#library-crawler}

`crawler` 库是基于 HTTP 的站点爬虫，从一个起始 URL 出发自动发现并抓取站内链接，产出一系列请求（`*Req`），用于资产测绘、目录发现与攻击面收集。它工作在 HTTP 层，速度快、资源省。

典型使用场景：

- 启动爬取：`crawler.Start(url, opts...)` 返回 `*Req` 的 channel，可边爬边消费；`crawler.RequestsFromFlow` 从已有流量里提取请求。
- 范围与认证：`crawler.domainInclude` / `crawler.domainExclude` / `crawler.disallowSuffix` 控制爬取范围，`crawler.basicAuth` / `crawler.cookie` / `crawler.autoLogin` 处理认证，`crawler.header` 自定义请求头。
- 性能与超时：`crawler.concurrent` 控制并发，`crawler.connectTimeout` / `crawler.bodySize` / `crawler.context` 控制超时与资源；`crawler.urlExtractor` 自定义链接提取规则；`crawler.aiJSExtract` 借助 AI 从 JS 中提取链接。

与相邻库的关系：`crawler` 走 HTTP 层，`crawlerx` 走真实浏览器（适合强 JS 站点）；爬到的请求常交给 `poc`/`fuzz` 做进一步测试，或经 `hook` 插件链路处理。

> 共 41 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [crawler.RequestsFromFlow](#requestsfromflow) | `isHttps bool, reqBytes []byte, rspBytes []byte` | `[][]byte, error` | 尝试从一次请求与响应中爬取出所有可能的请求，返回所有可能请求的原始报文与错误 |
| [crawler.basicAuth](#basicauth) | `user string, pass string` | `ConfigOpt` | 是一个选项函数，用于指定爬虫时的自动该填写的基础认证用户名和密码 |
| [crawler.bodySize](#bodysize) | `size int` | `ConfigOpt` | 是一个选项函数，用于指定爬虫时的最大响应体大小，默认为10MB |
| [crawler.concurrent](#concurrent) | `concurrent int` | `ConfigOpt` | 是一个选项函数，用于指定爬虫时的并发数，默认为20 |
| [crawler.connectTimeout](#connecttimeout) | `f float64` | `ConfigOpt` | 是一个选项函数，用于指定爬虫时的连接超时时间，默认为10s |
| [crawler.context](#context) | `ctx context.Context` | `ConfigOpt` | 设置爬虫使用的 context，用于取消或超时控制 |
| [crawler.cookie](#cookie) | `k string, v string` | `ConfigOpt` | 是一个选项函数，用于指定爬虫时的cookie |
| [crawler.disallowSuffix](#disallowsuffix) | `d []string` | `ConfigOpt` | 是一个选项函数，用于指定爬虫时的后缀黑名单 |
| [crawler.domainExclude](#domainexclude) | `domain string` | `ConfigOpt` | 是一个选项函数，用于指定爬虫时的域名黑名单 |
| [crawler.domainInclude](#domaininclude) | `domain string` | `ConfigOpt` | 是一个选项函数，用于指定爬虫时的域名白名单 |
| [crawler.forbiddenFromParent](#forbiddenfromparent) | `b bool` | `ConfigOpt` | 是一个选项函数，用于指定爬虫时的是否禁止从根路径发起请求，默认为false |
| [crawler.header](#header) | `k string, v string` | `ConfigOpt` | 是一个选项函数，用于指定爬虫时的请求头 |
| [crawler.httpsToHttpFallback](#httpstohttpfallback) | `enable bool` | `ConfigOpt` | 设置当 HTTPS 请求失败时是否自动回退为 HTTP 重试 |
| [crawler.maxDepth](#maxdepth) | `depth int` | `ConfigOpt` | 是一个选项函数，用于指定爬虫时的最大深度，默认为5 |
| [crawler.maxRedirect](#maxredirect) | `maxRedirectTimes int` | `ConfigOpt` | 是一个选项函数，用于指定爬虫时的最大重定向次数，默认为5 |
| [crawler.maxRequest](#maxrequest) | `limit int` | `ConfigOpt` | 是一个选项函数，用于指定爬虫时的最大请求数，默认为1000 |
| [crawler.maxRetry](#maxretry) | `limit int` | `ConfigOpt` | 是一个选项函数，用于指定爬虫时的最大重试次数，默认为3 |
| [crawler.maxUrls](#maxurls) | `limit int` | `ConfigOpt` | 是一个选项函数，用于指定爬虫时的最大链接数，默认为10000 |
| [crawler.onUrlFound](#onurlfound) | `f func(string)` | `ConfigOpt` | 是一个选项函数，用于在爬虫发现新URL时触发回调（包括未实际发出请求的URL） |
| [crawler.responseTimeout](#responsetimeout) | `f float64` | `ConfigOpt` | 设置爬虫的响应超时时间(秒)，默认为 10s |
| [crawler.timeout](#timeout) | `f float64` | `ConfigOpt` | connectTimeout 是一个选项函数，用于指定爬虫时的连接超时时间，默认为10s |
| [crawler.ua](#ua) | `ua string` | `ConfigOpt` | userAgent 是一个选项函数，用于指定爬虫时的User-Agent |
| [crawler.urlExtractor](#urlextractor) | `f func(*Req) []any` | `ConfigOpt` | 是一个选项函数，它接收一个函数作为参数，用于为爬虫添加额外的链接提取规则 |
| [crawler.urlRegexpExclude](#urlregexpexclude) | `re string` | `ConfigOpt` | 是一个选项函数，用于指定爬虫时的URL正则黑名单 |
| [crawler.urlRegexpInclude](#urlregexpinclude) | `re string` | `ConfigOpt` | 是一个选项函数，用于指定爬虫时的URL正则白名单 |
| [crawler.userAgent](#useragent) | `ua string` | `ConfigOpt` | 是一个选项函数，用于指定爬虫时的User-Agent |
| [crawler.verifyCertificate](#verifycertificate) | `b bool` | `ConfigOpt` | 设置爬虫在 HTTPS 请求时是否校验服务端证书 |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [crawler.Start](#start) | `url string, opt ...ConfigOpt` | `chan *Req, error` | 启动爬虫爬取某个URL，它还可以接收零个到多个选项函数，用于影响爬取行为 |
| [crawler.aiJSExtract](#aijsextract) | `opts ...AIJSExtractOption` | `ConfigOpt` | 启用基于 AI 辅助的 JS / HTML 文本路径与 URL 抽取通道， |
| [crawler.autoLogin](#autologin) | `username string, password string, flags ...string` | `ConfigOpt` | 是一个选项函数，用于指定爬虫时的自动填写可能存在的登录表单 |
| [crawler.jsParser](#jsparser) | `enable ...bool` | `ConfigOpt` | 是一个选项函数，用于指定爬虫时是否进行对于JS的代码解析。 |
| [crawler.proxy](#proxy) | `proxies ...string` | `ConfigOpt` | 是一个选项函数，用于指定爬虫时的代理 |

## 函数详情

### RequestsFromFlow {#requestsfromflow}

```go
RequestsFromFlow(isHttps bool, reqBytes []byte, rspBytes []byte) ([][]byte, error)
```

尝试从一次请求与响应中爬取出所有可能的请求，返回所有可能请求的原始报文与错误

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| isHttps | `bool` | 该流量是否为 HTTPS |
| reqBytes | `[]byte` | 请求原始报文 |
| rspBytes | `[]byte` | 响应原始报文 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[][]byte` | [][]byte: 爬取到的所有可能请求的原始报文列表 |
| r2 | `error` | 处理失败时返回错误 |

**示例**

``````````````yak
reqs, err = crawler.RequestsFromFlow(false, reqBytes, rspBytes)
``````````````

---

### basicAuth {#basicauth}

```go
basicAuth(user string, pass string) ConfigOpt
```

是一个选项函数，用于指定爬虫时的自动该填写的基础认证用户名和密码

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| user | `string` | 基础认证用户名 |
| pass | `string` | 基础认证密码 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawler.Start 可接收的配置选项 |

**示例**

``````````````yak
crawler.Start("https://example.com", crawler.basicAuth("admin", "admin"))
``````````````

---

### bodySize {#bodysize}

```go
bodySize(size int) ConfigOpt
```

是一个选项函数，用于指定爬虫时的最大响应体大小，默认为10MB

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| size | `int` | 最大响应体大小，单位为字节 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawler.Start 可接收的配置选项 |

**示例**

``````````````yak
crawler.Start("https://example.com", crawler.bodySize(1024 * 1024))
``````````````

---

### concurrent {#concurrent}

```go
concurrent(concurrent int) ConfigOpt
```

是一个选项函数，用于指定爬虫时的并发数，默认为20

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| concurrent | `int` | 并发数 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawler.Start 可接收的配置选项 |

**示例**

``````````````yak
crawler.Start("https://example.com", crawler.concurrent(10))
``````````````

---

### connectTimeout {#connecttimeout}

```go
connectTimeout(f float64) ConfigOpt
```

是一个选项函数，用于指定爬虫时的连接超时时间，默认为10s

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| f | `float64` | 连接超时时间，单位为秒 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawler.Start 可接收的配置选项 |

**示例**

``````````````yak
crawler.Start("https://example.com", crawler.connectTimeout(5))
``````````````

---

### context {#context}

```go
context(ctx context.Context) ConfigOpt
```

设置爬虫使用的 context，用于取消或超时控制

在 yak 中通过 crawler.context 调用；cancel 时爬虫会停止抓取

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| ctx | `context.Context` | 上下文对象 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawler.Start 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：使用可取消的 context 控制爬虫
ctx, cancel = context.WithCancel(context.Background())
defer cancel()
res = crawler.Start("https://example.com", crawler.context(ctx))~

	for req = range res {
	    println(req.Url())
	}
``````````````

---

### cookie {#cookie}

```go
cookie(k string, v string) ConfigOpt
```

是一个选项函数，用于指定爬虫时的cookie

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| k | `string` | cookie 名称 |
| v | `string` | cookie 值 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawler.Start 可接收的配置选项 |

**示例**

``````````````yak
crawler.Start("https://example.com", crawler.cookie("key", "value"))
``````````````

---

### disallowSuffix {#disallowsuffix}

```go
disallowSuffix(d []string) ConfigOpt
```

是一个选项函数，用于指定爬虫时的后缀黑名单

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| d | `[]string` | 后缀黑名单列表，命中的后缀将不被爬取 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawler.Start 可接收的配置选项 |

**示例**

``````````````yak
crawler.Start("https://example.com", crawler.disallowSuffix(".css", ".jpg", ".png")) // 爬虫时不会爬取css、jpg、png文件
``````````````

---

### domainExclude {#domainexclude}

```go
domainExclude(domain string) ConfigOpt
```

是一个选项函数，用于指定爬虫时的域名黑名单

domain允许使用glob语法，例如*.example.com

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| domain | `string` | 禁止的域名，支持 glob 语法 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawler.Start 可接收的配置选项 |

**示例**

``````````````yak
crawler.Start("https://example.com", crawler.domainExclude("*.baidu.com"))
``````````````

---

### domainInclude {#domaininclude}

```go
domainInclude(domain string) ConfigOpt
```

是一个选项函数，用于指定爬虫时的域名白名单

domain允许使用glob语法，例如*.example.com

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| domain | `string` | 允许的域名，支持 glob 语法 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawler.Start 可接收的配置选项 |

**示例**

``````````````yak
crawler.Start("https://example.com", crawler.domainInclude("*.example.com"))
``````````````

---

### forbiddenFromParent {#forbiddenfromparent}

```go
forbiddenFromParent(b bool) ConfigOpt
```

是一个选项函数，用于指定爬虫时的是否禁止从根路径发起请求，默认为false

对于一个起始URL，如果其并不是从根路径开始且没有禁止从根路径发起请求，那么爬虫会从其根路径开始爬取

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| b | `bool` | 是否禁止从根路径发起请求 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawler.Start 可接收的配置选项 |

**示例**

``````````````yak
crawler.Start("https://example.com/a/b/c", crawler.forbiddenFromParent(false)) // 这会从 https://example.com/ 开始爬取
``````````````

---

### header {#header}

```go
header(k string, v string) ConfigOpt
```

是一个选项函数，用于指定爬虫时的请求头

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| k | `string` | 请求头名称 |
| v | `string` | 请求头值 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawler.Start 可接收的配置选项 |

**示例**

``````````````yak
crawler.Start("https://example.com", crawler.header("User-Agent", "yaklang-crawler"))
``````````````

---

### httpsToHttpFallback {#httpstohttpfallback}

```go
httpsToHttpFallback(enable bool) ConfigOpt
```

设置当 HTTPS 请求失败时是否自动回退为 HTTP 重试

在 yak 中通过 crawler.httpsToHttpFallback 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| enable | `bool` | 是否启用 HTTPS 到 HTTP 的回退 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawler.Start 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：开启 HTTPS 失败回退 HTTP
res = crawler.Start("https://example.com", crawler.httpsToHttpFallback(true))~

	for req = range res {
	    println(req.Url())
	}
``````````````

---

### maxDepth {#maxdepth}

```go
maxDepth(depth int) ConfigOpt
```

是一个选项函数，用于指定爬虫时的最大深度，默认为5

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| depth | `int` | 最大爬取深度 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawler.Start 可接收的配置选项 |

**示例**

``````````````yak
crawler.Start("https://example.com", crawler.maxDepth(10))
``````````````

---

### maxRedirect {#maxredirect}

```go
maxRedirect(maxRedirectTimes int) ConfigOpt
```

是一个选项函数，用于指定爬虫时的最大重定向次数，默认为5

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| maxRedirectTimes | `int` | 最大重定向次数 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawler.Start 可接收的配置选项 |

**示例**

``````````````yak
crawler.Start("https://example.com", crawler.maxRedirect(10))
``````````````

---

### maxRequest {#maxrequest}

```go
maxRequest(limit int) ConfigOpt
```

是一个选项函数，用于指定爬虫时的最大请求数，默认为1000

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| limit | `int` | 最大请求数 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawler.Start 可接收的配置选项 |

**示例**

``````````````yak
crawler.Start("https://example.com", crawler.maxRequest(10000))
``````````````

---

### maxRetry {#maxretry}

```go
maxRetry(limit int) ConfigOpt
```

是一个选项函数，用于指定爬虫时的最大重试次数，默认为3

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| limit | `int` | 最大重试次数 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawler.Start 可接收的配置选项 |

**示例**

``````````````yak
crawler.Start("https://example.com", crawler.maxRetry(10))
``````````````

---

### maxUrls {#maxurls}

```go
maxUrls(limit int) ConfigOpt
```

是一个选项函数，用于指定爬虫时的最大链接数，默认为10000

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| limit | `int` | 最大链接数 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawler.Start 可接收的配置选项 |

**示例**

``````````````yak
crawler.Start("https://example.com", crawler.maxUrls(20000))
``````````````

---

### onUrlFound {#onurlfound}

```go
onUrlFound(f func(string)) ConfigOpt
```

是一个选项函数，用于在爬虫发现新URL时触发回调（包括未实际发出请求的URL）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| f | `func(string)` | 发现新 URL 时触发的回调函数，入参为发现的 URL |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawler.Start 可接收的配置选项 |

**示例**

``````````````yak
crawler.Start("https://example.com", crawler.onUrlFound(func(url) { println(url) }))
``````````````

---

### responseTimeout {#responsetimeout}

```go
responseTimeout(f float64) ConfigOpt
```

设置爬虫的响应超时时间(秒)，默认为 10s

在 yak 中通过 crawler.responseTimeout 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| f | `float64` | 响应超时时间，单位为秒 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawler.Start 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：设置响应超时为 5 秒
res = crawler.Start("https://example.com", crawler.responseTimeout(5))~

	for req = range res {
	    println(req.Url())
	}
``````````````

---

### timeout {#timeout}

```go
timeout(f float64) ConfigOpt
```

connectTimeout 是一个选项函数，用于指定爬虫时的连接超时时间，默认为10s

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| f | `float64` | 连接超时时间，单位为秒 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawler.Start 可接收的配置选项 |

**示例**

``````````````yak
crawler.Start("https://example.com", crawler.connectTimeout(5))
``````````````

---

### ua {#ua}

```go
ua(ua string) ConfigOpt
```

userAgent 是一个选项函数，用于指定爬虫时的User-Agent

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| ua | `string` | User-Agent 字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawler.Start 可接收的配置选项 |

**示例**

``````````````yak
crawler.Start("https://example.com", crawler.userAgent("yaklang-crawler"))
``````````````

---

### urlExtractor {#urlextractor}

```go
urlExtractor(f func(*Req) []any) ConfigOpt
```

是一个选项函数，它接收一个函数作为参数，用于为爬虫添加额外的链接提取规则

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| f | `func(*Req) []any` | 自定义链接提取函数，入参为请求对象，返回提取到的链接列表 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawler.Start 可接收的配置选项 |

**示例**

``````````````yak
crawler.Start("https://example.com", crawler.urlExtractor(func(req) {
    // 自定义规则：从响应体(req.Response() 或 req.ResponseRaw())中提取额外的链接
    return re.FindAll(string(req.ResponseRaw()), `https?://[^\s"'<>]+`)
}))
``````````````

---

### urlRegexpExclude {#urlregexpexclude}

```go
urlRegexpExclude(re string) ConfigOpt
```

是一个选项函数，用于指定爬虫时的URL正则黑名单

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| re | `string` | URL 黑名单正则表达式 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawler.Start 可接收的配置选项 |

**示例**

``````````````yak
crawler.Start("https://example.com", crawler.urlRegexpExclude(`\.jpg`))
``````````````

---

### urlRegexpInclude {#urlregexpinclude}

```go
urlRegexpInclude(re string) ConfigOpt
```

是一个选项函数，用于指定爬虫时的URL正则白名单

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| re | `string` | URL 白名单正则表达式 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawler.Start 可接收的配置选项 |

**示例**

``````````````yak
crawler.Start("https://example.com", crawler.urlRegexpInclude(`\.html`))
``````````````

---

### userAgent {#useragent}

```go
userAgent(ua string) ConfigOpt
```

是一个选项函数，用于指定爬虫时的User-Agent

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| ua | `string` | User-Agent 字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawler.Start 可接收的配置选项 |

**示例**

``````````````yak
crawler.Start("https://example.com", crawler.userAgent("yaklang-crawler"))
``````````````

---

### verifyCertificate {#verifycertificate}

```go
verifyCertificate(b bool) ConfigOpt
```

设置爬虫在 HTTPS 请求时是否校验服务端证书

在 yak 中通过 crawler.verifyCertificate 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| b | `bool` | 是否校验证书，false 表示忽略证书错误 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawler.Start 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：抓取自签名证书站点时关闭证书校验
res = crawler.Start("https://self-signed.example.com", crawler.verifyCertificate(false))~

	for req = range res {
	    println(req.Url())
	}
``````````````

---

## 可变参数函数详情

### Start {#start}

```go
Start(url string, opt ...ConfigOpt) (chan *Req, error)
```

启动爬虫爬取某个URL，它还可以接收零个到多个选项函数，用于影响爬取行为

返回一个Req结构体引用管道与错误

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| url | `string` | 起始爬取的 URL |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opt | `...ConfigOpt` | 零个或多个爬虫配置选项函数 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `chan *Req` | 一个可迭代的 Req 结构体引用管道，用于读取爬取到的请求 |
| r2 | `error` | 启动失败时返回错误 |

**示例**

``````````````yak
ch, err := crawler.Start("https://www.baidu.com", crawler.concurrent(10))
for req in ch {
println(req.Response()~)
}
``````````````

---

### aiJSExtract {#aijsextract}

```go
aiJSExtract(opts ...AIJSExtractOption) ConfigOpt
```

启用基于 AI 辅助的 JS / HTML 文本路径与 URL 抽取通道，

与现有 SSA / 回调通道并行（不互相影响）。

该通道按以下三阶段工作：

 1. 宽松正则预筛选可疑窗口（URL / 路径风格）

 2. aireducer 按字节切片，DumpWithOverlap 跨切片折叠

 3. aiforge.LiteForge SpeedPriority 抽取结构化路径列表

**可选参数**

可作为可变参数 `opts ...AIJSExtractOption` 传入选项；共 9 个可用选项，详见 [AIJSExtractOption 选项列表](#option-aijsextractoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawler.Start 可接收的配置选项 |

**示例**

``````````````yak
crawler.Start("https://example.com", crawler.aiJSExtract()) // 启用，全部默认值
crawler.Start("https://example.com", crawler.aiJSExtract(crawler.aiJSMaxTokens(40000))) // 调整 token 上限
``````````````

---

### autoLogin {#autologin}

```go
autoLogin(username string, password string, flags ...string) ConfigOpt
```

是一个选项函数，用于指定爬虫时的自动填写可能存在的登录表单

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| username | `string` | 登录用户名 |
| password | `string` | 登录密码 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| flags | `...string` | 可选的额外标志参数 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawler.Start 可接收的配置选项 |

**示例**

``````````````yak
crawler.Start("https://example.com", crawler.autoLogin("admin", "admin"))
``````````````

---

### jsParser {#jsparser}

```go
jsParser(enable ...bool) ConfigOpt
```

是一个选项函数，用于指定爬虫时是否进行对于JS的代码解析。

填写该选项默认开启，也可以传入false强制关闭。

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| enable | `...bool` | 可选，是否启用 JS 解析，缺省时默认开启 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawler.Start 可接收的配置选项 |

**示例**

``````````````yak
crawler.Start("https://example.com", crawler.jsParser()) // 开启
crawler.Start("https://example.com", crawler.jsParser(true)) // 开启
crawler.Start("https://example.com", crawler.jsParser(false)) // 关闭
``````````````

---

### proxy {#proxy}

```go
proxy(proxies ...string) ConfigOpt
```

是一个选项函数，用于指定爬虫时的代理

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| proxies | `...string` | 一个或多个代理地址，例如 http&#58;//127.0.0.1:8080 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ConfigOpt` | 一个 crawler.Start 可接收的配置选项 |

**示例**

``````````````yak
crawler.Start("https://example.com", crawler.proxy("http://127.0.0.1:8080"))
``````````````

---

## 可变参数选项列表

以下按选项类型汇总全部可变参数选项(原先重复在各主函数下的选项表已收拢到此处)：

### 1. 类型：AIJSExtractOption {#option-aijsextractoption}

涉及到的函数有：[crawler.aiJSExtract](#aijsextract)

|选项函数|参数|返回值|说明|
|:--|:--|:--|:--|
| `crawler.aiJSAIOptions` | `opts ...aicommon.ConfigOption` | `AIJSExtractOption` | 将底层 AI 配置选项（模型、密钥等）转发给 LiteForge |
| `crawler.aiJSChunkBytes` | `n int64` | `AIJSExtractOption` | 设置 AI JS 抽取时每个 AI 调用切片的目标字节大小 |
| `crawler.aiJSConcurrency` | `n int` | `AIJSExtractOption` | 设置 AI JS 抽取时并行 AI 调用的最大并发数 |
| `crawler.aiJSContextBytes` | `n int` | `AIJSExtractOption` | 设置 AI JS 抽取时每个正则命中点周围上下文窗口的半宽字节数 |
| `crawler.aiJSMaxTokens` | `n int` | `AIJSExtractOption` | 设置 AI JS 抽取时每次调用的 token 预算上限 |
| `crawler.aiJSOverlapBytes` | `n int` | `AIJSExtractOption` | 设置 AI JS 抽取时跨切片折叠（重叠）的字节大小 |
| `crawler.aiJSSkipBelow` | `n int` | `AIJSExtractOption` | 设置候选数据流低于该字节阈值时跳过 AI 步骤，直接输出原始命中结果 |
| `crawler.aiJSSmallInputBytes` | `n int` | `AIJSExtractOption` | 设置直接投喂快速通道的原始输入字节阈值，设为 0 表示禁用 |
| `crawler.aiJSSmallInputTokens` | `n int` | `AIJSExtractOption` | 设置直接投喂快速通道的原始输入 token 阈值，设为 0 表示禁用 |

