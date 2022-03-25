# crawler


|成员函数|函数描述/介绍|
|:------|:--------|
 | [crawler.Start](#crawlerstart) | 核心函数，进行爬虫的入口，输入想要爬的网站，然后设置参数，在一个 chan 中接受爬虫的结果 |
 | [crawler.autoLogin](#crawlerautologin) | 自动登录功能，支持 DVWA 的标准登陆功能 |
 | [crawler.basicAuth](#crawlerbasicauth) | 设置爬虫的基础认证 |
 | [crawler.bodySize](#crawlerbodysize) | 想要设置每一个 body 最大获取多少页面大小，bytes 的大小，默认为 1024 * 1024 * 10 |
 | [crawler.concurrent](#crawlerconcurrent) | 设置爬虫并发请求数 |
 | [crawler.connectTimeout](#crawlerconnecttimeout) | 每一次进行 HTTP 连接的超时时间 |
 | [crawler.cookie](#crawlercookie) | 设置 Cookie |
 | [crawler.domainExclude](#crawlerdomainexclude) | 不扫描的域名，使用 glob 语法 |
 | [crawler.domainInclude](#crawlerdomaininclude) | 想要扫描的域名，域名白名单，支持 glob 语法 |
 | [crawler.forbiddenFromParent](#crawlerforbiddenfromparent) | 禁止扫描 url 的父路径 |
 | [crawler.header](#crawlerheader) | 设置爬虫的自定义 Header |
 | [crawler.maxDepth](#crawlermaxdepth) | 设置爬虫的最大深度，默认为5 |
 | [crawler.maxRedirect](#crawlermaxredirect) | 设置最大重定向次数，默认为5 |
 | [crawler.maxRequest](#crawlermaxrequest) | 设置爬虫最大发出的请求数量，默认为 1000 |
 | [crawler.maxRetry](#crawlermaxretry) | 最大重试次数（如果失败了就会重试） |
 | [crawler.maxUrls](#crawlermaxurls) | 最多获取到多少个 URL 就停止爬虫 |
 | [crawler.proxy](#crawlerproxy) | 为爬虫设置代理，如果代理失效，爬虫则请求失败 |
 | [crawler.responseTimeout](#crawlerresponsetimeout) | 响应超时时间 |
 | [crawler.timeout](#crawlertimeout) | 等效于 `crawler.connectTimeout` |
 | [crawler.ua](#crawlerua) | 设置 useragent |
 | [crawler.urlRegexpExclude](#crawlerurlregexpexclude) | 禁止爬取的 url 正则，用于排除一些 login delete 等状况 |
 | [crawler.urlRegexpInclude](#crawlerurlregexpinclude) | 想要爬 url 的白名单，用于定向爬虫 |
 | [crawler.userAgent](#crawleruseragent) | 设置 useragent |




 



## 函数定义

### crawler.Start

核心函数，进行爬虫的入口，输入想要爬的网站，然后设置参数，在一个 chan 中接受爬虫的结果

#### 详细描述

爬虫的核心函数，通过 Start 来启动，urls 参数可以是逗号分割的多个 url。

```go
res, err = crawler.Start(`https://test1.example.com,https://test12.example.com`)
die(err)

for result := range res {
  /* do sth u like */
}
```


#### 定义：

`func crawler.Start(urls: string, params ...crawler.param) return (r0: chan crawler.RequestIf, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| urls | `string` |  想要爬取的网站，以 `,` 作为分割，进行会把每一个部分都尝试解析为 url |
| params | `...crawler.param` |  爬虫的各种参数，例如通过 `crawler.basicAuth(&#34;basicUserName&#34;, &#34;secretPassword&#34;)` 来设置基础认证 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `chan crawler.RequestIf` |  返回的爬虫的结果 |
| r1 | `error` |   |


 
### crawler.autoLogin

自动登录功能，支持 DVWA 的标准登陆功能

#### 详细描述



#### 定义：

`func crawler.autoLogin(username: string, password: string, v3 ...string) return (r0: func configOpt(v1: *crawler.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| username | `string` |   |
| password | `string` |   |
| v3 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func configOpt(v1: *crawler.Config) ` |   |


 
### crawler.basicAuth

设置爬虫的基础认证

#### 详细描述

使用案例非常简单，直接 `crawler.basicAuth(user, pass)` 返回的结果直接可以作为 Start 函数的可变参数

```go
res, err := crawler.Start(`https://example.com`, crawler.basicAuth(`username`, `secret-password`))
die(err)
```


#### 定义：

`func crawler.basicAuth(username: string, password: string) return (r0: crawler.param)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| username | `string` |  基础认证用户名 |
| password | `string` |  基础认证密码 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `crawler.param` |  作为 `crawler.Start` 后不定参数的选项 |


 
### crawler.bodySize

想要设置每一个 body 最大获取多少页面大小，bytes 的大小，默认为 1024 * 1024 * 10

#### 详细描述

使用案例，类似 `crawler.basicAuth`，可以设置获取 body 的字节量，一般用于防止 body 太大撑爆内存。

```go
res, err := crawler.Start(`http://example.com`, crawler.bodySize(1024 * 1024 * 10))
```


#### 定义：

`func crawler.bodySize(size: int) return (r0: crawler.param)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| size | `int` |  设置 body 最大值 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `crawler.param` |   |


 
### crawler.concurrent

设置爬虫并发请求数

#### 详细描述



#### 定义：

`func crawler.concurrent(maxConcurrent: int) return (r0: crawler.param)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| maxConcurrent | `int` |  并发量，可以理解为同时最多多少个 http 请求被发出去 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `crawler.param` |   |


 
### crawler.connectTimeout

每一次进行 HTTP 连接的超时时间

#### 详细描述



#### 定义：

`func crawler.connectTimeout(seconds: float64) return (r0: crawler.param)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| seconds | `float64` |  超时时间，以秒为单位 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `crawler.param` |   |


 
### crawler.cookie

设置 Cookie

#### 详细描述



#### 定义：

`func crawler.cookie(key: string, value: string) return (r0: crawler.param)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |  Cookie 值的 key |
| value | `string` |  Cookie 值的 value |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `crawler.param` |   |


 
### crawler.domainExclude

不扫描的域名，使用 glob 语法

#### 详细描述

支持 glob 语法，比如
1. `*.example.com` 可以匹配 `test1.example.com` 等
1. `*example.com` 可以匹配 `1testexample.com`，也可以匹配 `test1.example.com`


#### 定义：

`func crawler.domainExclude(excludedDomain: string) return (r0: crawler.param)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| excludedDomain | `string` |  想要排除的域名 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `crawler.param` |   |


 
### crawler.domainInclude

想要扫描的域名，域名白名单，支持 glob 语法

#### 详细描述



#### 定义：

`func crawler.domainInclude(includedDomain: string) return (r0: crawler.param)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| includedDomain | `string` |  想要扫描的域名 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `crawler.param` |   |


 
### crawler.forbiddenFromParent

禁止扫描 url 的父路径

#### 详细描述

禁止扫描父路径

#### 定义：

`func crawler.forbiddenFromParent(allow: bool) return (r0: crawler.param)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| allow | `bool` |  true or false 是否扫描父路径 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `crawler.param` |   |


 
### crawler.header

设置爬虫的自定义 Header

#### 详细描述



#### 定义：

`func crawler.header(key: string, value: string) return (r0: crawler.param)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |  设置 Header 的 Key |
| value | `string` |  设置 Header 的值 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `crawler.param` |   |


 
### crawler.maxDepth

设置爬虫的最大深度，默认为5

#### 详细描述



#### 定义：

`func crawler.maxDepth(depth: int) return (r0: crawler.param)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| depth | `int` |  设置最大深度（int） |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `crawler.param` |   |


 
### crawler.maxRedirect

设置最大重定向次数，默认为5

#### 详细描述



#### 定义：

`func crawler.maxRedirect(limit: int) return (r0: crawler.param)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| limit | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `crawler.param` |   |


 
### crawler.maxRequest

设置爬虫最大发出的请求数量，默认为 1000

#### 详细描述



#### 定义：

`func crawler.maxRequest(limit: int) return (r0: crawler.param)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| limit | `int` |  设置爬虫最多发出的请求数 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `crawler.param` |   |


 
### crawler.maxRetry

最大重试次数（如果失败了就会重试）

#### 详细描述



#### 定义：

`func crawler.maxRetry(limit: int) return (r0: crawler.param)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| limit | `int` |  最大重试次数 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `crawler.param` |   |


 
### crawler.maxUrls

最多获取到多少个 URL 就停止爬虫

#### 详细描述



#### 定义：

`func crawler.maxUrls(limit: int) return (r0: crawler.param)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| limit | `int` |  最大获取 URL 的树木 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `crawler.param` |   |


 
### crawler.proxy

为爬虫设置代理，如果代理失效，爬虫则请求失败

#### 详细描述



#### 定义：

`func crawler.proxy(proxyUrl ...string) return (r0: crawler.param)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| proxyUrl | `...string` |  爬虫代理，例如 `http://196.168.1.1:8080` |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `crawler.param` |   |


 
### crawler.responseTimeout

响应超时时间

#### 详细描述



#### 定义：

`func crawler.responseTimeout(seconds: float64) return (r0: crawler.param)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| seconds | `float64` |  超时时间，float 为秒 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `crawler.param` |   |


 
### crawler.timeout

等效于 `crawler.connectTimeout`

#### 详细描述



#### 定义：

`func crawler.timeout(timeout: float64) return (r0: crawler.param)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| timeout | `float64` |  超时时间，float 为秒 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `crawler.param` |   |


 
### crawler.ua

设置 useragent

#### 详细描述



#### 定义：

`func crawler.ua(userAgent: string) return (r0: crawler.param)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| userAgent | `string` |  想要设置的 ua |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `crawler.param` |   |


 
### crawler.urlRegexpExclude

禁止爬取的 url 正则，用于排除一些 login delete 等状况

#### 详细描述



#### 定义：

`func crawler.urlRegexpExclude(urlRegexp: string) return (r0: crawler.param)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| urlRegexp | `string` |  正则字符串 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `crawler.param` |   |


 
### crawler.urlRegexpInclude

想要爬 url 的白名单，用于定向爬虫

#### 详细描述



#### 定义：

`func crawler.urlRegexpInclude(urlRegexp: string) return (r0: crawler.param)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| urlRegexp | `string` |  正则字符串 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `crawler.param` |   |


 
### crawler.userAgent

设置 useragent

#### 详细描述



#### 定义：

`func crawler.userAgent(userAgent: string) return (r0: crawler.param)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| userAgent | `string` |  想要设置的 ua |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `crawler.param` |   |


 


