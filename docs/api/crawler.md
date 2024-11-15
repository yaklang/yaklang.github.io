# crawler

|函数名|函数描述/介绍|
|:------|:--------|
| [crawler.RequestsFromFlow](#requestsfromflow) |RequestsFromFlow 尝试从一次请求与响应中爬取出所有可能的请求，返回所有可能请求的原始报文与错误  |
| [crawler.Start](#start) |Start 启动爬虫爬取某个URL，它还可以接收零个到多个选项函数，用于影响爬取行为  返回一个Req结构体引用管道与错误  |
| [crawler.autoLogin](#autologin) |autoLogin 是一个选项函数，用于指定爬虫时的自动填写可能存在的登录表单  |
| [crawler.basicAuth](#basicauth) |basicAuth 是一个选项函数，用于指定爬虫时的自动该填写的基础认证用户名和密码  |
| [crawler.bodySize](#bodysize) |bodySize 是一个选项函数，用于指定爬虫时的最大响应体大小，默认为10MB  |
| [crawler.concurrent](#concurrent) |concurrent 是一个选项函数，用于指定爬虫时的并发数，默认为20  |
| [crawler.connectTimeout](#connecttimeout) |connectTimeout 是一个选项函数，用于指定爬虫时的连接超时时间，默认为10s  |
| [crawler.cookie](#cookie) |cookie 是一个选项函数，用于指定爬虫时的cookie  |
| [crawler.disallowSuffix](#disallowsuffix) |disallowSuffix 是一个选项函数，用于指定爬虫时的后缀黑名单  |
| [crawler.domainExclude](#domainexclude) |domainExclude 是一个选项函数，用于指定爬虫时的域名黑名单  domain允许使用glob语法，例如*.example.com  |
| [crawler.domainInclude](#domaininclude) |domainInclude 是一个选项函数，用于指定爬虫时的域名白名单  domain允许使用glob语法，例如*.example.com  |
| [crawler.forbiddenFromParent](#forbiddenfromparent) |forbiddenFromParent 是一个选项函数，用于指定爬虫时的是否禁止从根路径发起请求，默认为false  对于一个起始URL，如果其并不是从根路径开始且没有禁止从根路径发起请求，那么爬虫会从其根路径开始爬取  |
| [crawler.header](#header) |header 是一个选项函数，用于指定爬虫时的请求头  |
| [crawler.jsParser](#jsparser) |jsParser 是一个选项函数，用于指定爬虫时是否进行对于JS的代码解析。  填写该选项默认开启，也可以传入false强制关闭。  |
| [crawler.maxDepth](#maxdepth) |maxDepth 是一个选项函数，用于指定爬虫时的最大深度，默认为5  |
| [crawler.maxRedirect](#maxredirect) |maxRedirect 是一个选项函数，用于指定爬虫时的最大重定向次数，默认为5  |
| [crawler.maxRequest](#maxrequest) |maxRequest 是一个选项函数，用于指定爬虫时的最大请求数，默认为1000  |
| [crawler.maxRetry](#maxretry) |maxRetry 是一个选项函数，用于指定爬虫时的最大重试次数，默认为3  |
| [crawler.maxUrls](#maxurls) |maxUrls 是一个选项函数，用于指定爬虫时的最大链接数，默认为10000  |
| [crawler.proxy](#proxy) |proxy 是一个选项函数，用于指定爬虫时的代理  |
| [crawler.responseTimeout](#responsetimeout) ||
| [crawler.timeout](#timeout) |connectTimeout 是一个选项函数，用于指定爬虫时的连接超时时间，默认为10s  |
| [crawler.ua](#ua) |userAgent 是一个选项函数，用于指定爬虫时的User-Agent  |
| [crawler.urlExtractor](#urlextractor) |urlExtractor 是一个选项函数，它接收一个函数作为参数，用于为爬虫添加额外的链接提取规则  |
| [crawler.urlRegexpExclude](#urlregexpexclude) |urlRegexpExclude 是一个选项函数，用于指定爬虫时的URL正则黑名单  |
| [crawler.urlRegexpInclude](#urlregexpinclude) |urlRegexpInclude 是一个选项函数，用于指定爬虫时的URL正则白名单  |
| [crawler.userAgent](#useragent) |userAgent 是一个选项函数，用于指定爬虫时的User-Agent  |


## 函数定义
### RequestsFromFlow

#### 详细描述
RequestsFromFlow 尝试从一次请求与响应中爬取出所有可能的请求，返回所有可能请求的原始报文与错误

Example:
```
reqs, err = crawler.RequestsFromFlow(false, reqBytes, rspBytes)
```


#### 定义

`RequestsFromFlow(isHttps bool, reqBytes []byte, rspBytes []byte) ([][]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| isHttps | `bool` |   |
| reqBytes | `[]byte` |   |
| rspBytes | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[][]byte` |   |
| r2 | `error` |   |


### Start

#### 详细描述
Start 启动爬虫爬取某个URL，它还可以接收零个到多个选项函数，用于影响爬取行为

返回一个Req结构体引用管道与错误

Example:
```
ch, err := crawler.Start("https://www.baidu.com", crawler.concurrent(10))
for req in ch {
println(req.Response()~)
}
```


#### 定义

`Start(url string, opt ...ConfigOpt) (chan *Req, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` |   |
| opt | `...ConfigOpt` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *Req` |   |
| r2 | `error` |   |


### autoLogin

#### 详细描述
autoLogin 是一个选项函数，用于指定爬虫时的自动填写可能存在的登录表单

Example:
```
crawler.Start("https://example.com", crawler.autoLogin("admin", "admin"))
```


#### 定义

`autoLogin(username string, password string, flags ...string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| username | `string` |   |
| password | `string` |   |
| flags | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### basicAuth

#### 详细描述
basicAuth 是一个选项函数，用于指定爬虫时的自动该填写的基础认证用户名和密码

Example:
```
crawler.Start("https://example.com", crawler.basicAuth("admin", "admin"))
```


#### 定义

`basicAuth(user string, pass string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| user | `string` |   |
| pass | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### bodySize

#### 详细描述
bodySize 是一个选项函数，用于指定爬虫时的最大响应体大小，默认为10MB

Example:
```
crawler.Start("https://example.com", crawler.bodySize(1024 * 1024))
```


#### 定义

`bodySize(size int) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| size | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### concurrent

#### 详细描述
concurrent 是一个选项函数，用于指定爬虫时的并发数，默认为20

Example:
```
crawler.Start("https://example.com", crawler.concurrent(10))
```


#### 定义

`concurrent(concurrent int) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| concurrent | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### connectTimeout

#### 详细描述
connectTimeout 是一个选项函数，用于指定爬虫时的连接超时时间，默认为10s

Example:
```
crawler.Start("https://example.com", crawler.connectTimeout(5))
```


#### 定义

`connectTimeout(f float64) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### cookie

#### 详细描述
cookie 是一个选项函数，用于指定爬虫时的cookie

Example:
```
crawler.Start("https://example.com", crawler.cookie("key", "value"))
```


#### 定义

`cookie(k string, v string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| k | `string` |   |
| v | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### disallowSuffix

#### 详细描述
disallowSuffix 是一个选项函数，用于指定爬虫时的后缀黑名单

Example:
```
crawler.Start("https://example.com", crawler.disallowSuffix(".css", ".jpg", ".png")) // 爬虫时不会爬取css、jpg、png文件
```


#### 定义

`disallowSuffix(d []string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| d | `[]string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### domainExclude

#### 详细描述
domainExclude 是一个选项函数，用于指定爬虫时的域名黑名单

domain允许使用glob语法，例如*.example.com

Example:
```
crawler.Start("https://example.com", crawler.domainExclude("*.baidu.com"))
```


#### 定义

`domainExclude(domain string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| domain | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### domainInclude

#### 详细描述
domainInclude 是一个选项函数，用于指定爬虫时的域名白名单

domain允许使用glob语法，例如*.example.com

Example:
```
crawler.Start("https://example.com", crawler.domainInclude("*.example.com"))
```


#### 定义

`domainInclude(domain string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| domain | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### forbiddenFromParent

#### 详细描述
forbiddenFromParent 是一个选项函数，用于指定爬虫时的是否禁止从根路径发起请求，默认为false

对于一个起始URL，如果其并不是从根路径开始且没有禁止从根路径发起请求，那么爬虫会从其根路径开始爬取

Example:
```
crawler.Start("https://example.com/a/b/c", crawler.forbiddenFromParent(false)) // 这会从 https://example.com/ 开始爬取
```


#### 定义

`forbiddenFromParent(b bool) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### header

#### 详细描述
header 是一个选项函数，用于指定爬虫时的请求头

Example:
```
crawler.Start("https://example.com", crawler.header("User-Agent", "yaklang-crawler"))
```


#### 定义

`header(k string, v string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| k | `string` |   |
| v | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### jsParser

#### 详细描述
jsParser 是一个选项函数，用于指定爬虫时是否进行对于JS的代码解析。

填写该选项默认开启，也可以传入false强制关闭。

Example:
```
crawler.Start("https://example.com", crawler.jsParser()) // 开启
crawler.Start("https://example.com", crawler.jsParser(true)) // 开启
crawler.Start("https://example.com", crawler.jsParser(false)) // 关闭
```


#### 定义

`jsParser(enable ...bool) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| enable | `...bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### maxDepth

#### 详细描述
maxDepth 是一个选项函数，用于指定爬虫时的最大深度，默认为5

Example:
```
crawler.Start("https://example.com", crawler.maxDepth(10))
```


#### 定义

`maxDepth(depth int) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| depth | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### maxRedirect

#### 详细描述
maxRedirect 是一个选项函数，用于指定爬虫时的最大重定向次数，默认为5

Example:
```
crawler.Start("https://example.com", crawler.maxRedirect(10))
```


#### 定义

`maxRedirect(maxRedirectTimes int) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| maxRedirectTimes | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### maxRequest

#### 详细描述
maxRequest 是一个选项函数，用于指定爬虫时的最大请求数，默认为1000

Example:
```
crawler.Start("https://example.com", crawler.maxRequest(10000))
```


#### 定义

`maxRequest(limit int) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| limit | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### maxRetry

#### 详细描述
maxRetry 是一个选项函数，用于指定爬虫时的最大重试次数，默认为3

Example:
```
crawler.Start("https://example.com", crawler.maxRetry(10))
```


#### 定义

`maxRetry(limit int) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| limit | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### maxUrls

#### 详细描述
maxUrls 是一个选项函数，用于指定爬虫时的最大链接数，默认为10000

Example:
```
crawler.Start("https://example.com", crawler.maxUrls(20000))
```


#### 定义

`maxUrls(limit int) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| limit | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### proxy

#### 详细描述
proxy 是一个选项函数，用于指定爬虫时的代理

Example:
```
crawler.Start("https://example.com", crawler.proxy("http://127.0.0.1:8080"))
```


#### 定义

`proxy(proxies ...string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| proxies | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### responseTimeout

#### 详细描述


#### 定义

`responseTimeout(c *Config)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| c | `*Config` |   |


### timeout

#### 详细描述
connectTimeout 是一个选项函数，用于指定爬虫时的连接超时时间，默认为10s

Example:
```
crawler.Start("https://example.com", crawler.connectTimeout(5))
```


#### 定义

`timeout(f float64) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### ua

#### 详细描述
userAgent 是一个选项函数，用于指定爬虫时的User-Agent

Example:
```
crawler.Start("https://example.com", crawler.userAgent("yaklang-crawler"))
```


#### 定义

`ua(ua string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ua | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### urlExtractor

#### 详细描述
urlExtractor 是一个选项函数，它接收一个函数作为参数，用于为爬虫添加额外的链接提取规则

Example:
```
crawler.Start("https://example.com", crawler.urlExtractor(func(req) {
尝试编写自己的规则，从响应体(req.Response()或req.ResponseRaw())中提取额外的链接
})
```


#### 定义

`urlExtractor(f func(*Req) []any) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `func(*Req) []any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### urlRegexpExclude

#### 详细描述
urlRegexpExclude 是一个选项函数，用于指定爬虫时的URL正则黑名单

Example:
```
crawler.Start("https://example.com", crawler.urlRegexpExclude(`\.jpg`))
```


#### 定义

`urlRegexpExclude(re string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| re | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### urlRegexpInclude

#### 详细描述
urlRegexpInclude 是一个选项函数，用于指定爬虫时的URL正则白名单

Example:
```
crawler.Start("https://example.com", crawler.urlRegexpInclude(`\.html`))
```


#### 定义

`urlRegexpInclude(re string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| re | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### userAgent

#### 详细描述
userAgent 是一个选项函数，用于指定爬虫时的User-Agent

Example:
```
crawler.Start("https://example.com", crawler.userAgent("yaklang-crawler"))
```


#### 定义

`userAgent(ua string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ua | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


