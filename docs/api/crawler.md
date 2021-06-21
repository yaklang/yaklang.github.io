# crawler


|成员函数|函数描述/介绍|
|:------|:--------|
 | [crawler.Start](#crawlerstart) | 核心函数，进行爬虫的入口，输入想要爬的网站，然后设置参数，在一个 chan 中接受爬虫的结果 |
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

#### 定义：

`func (v1: string, v2 ...func configOpt(v1: *crawler.Config) ) return(chan crawler.RequestIf, error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |  想要爬取的网站，以 `,` 作为分割，进行会把每一个部分都尝试解析为 url |
| v2 | []crawler.configOpt |  爬虫的各种参数，例如通过 `crawler.basicAuth(&#34;basicUserName&#34;, &#34;secretPassword&#34;)` 来设置基础认证 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | chan crawler.RequestIf |  返回的爬虫的结果 |
| r1 | error |   |


### crawler.basicAuth

设置爬虫的基础认证

#### 定义：

`func (v1: string, v2: string) return(func configOpt(v1: *crawler.Config) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |  基础认证用户名 |
| v2 | string |  基础认证密码 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func configOpt(v1: *crawler.Config)  |  作为 `crawler.Start` 后不定参数的选项 |


### crawler.bodySize

想要设置每一个 body 最大获取多少页面大小，bytes 的大小，默认为 1024 * 1024 * 10

#### 定义：

`func (v1: int) return(func configOpt(v1: *crawler.Config) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | int |  设置 body 最大值 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func configOpt(v1: *crawler.Config)  |   |


### crawler.concurrent

设置爬虫并发请求数

#### 定义：

`func (v1: int) return(func configOpt(v1: *crawler.Config) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | int |  并发量，可以理解为同时最多多少个 http 请求被发出去 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func configOpt(v1: *crawler.Config)  |   |


### crawler.connectTimeout

每一次进行 HTTP 连接的超时时间

#### 定义：

`func (v1: float64) return(func configOpt(v1: *crawler.Config) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | float64 |  超时时间，以秒为单位 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func configOpt(v1: *crawler.Config)  |   |


### crawler.cookie

设置 Cookie

#### 定义：

`func (v1: string, v2: string) return(func configOpt(v1: *crawler.Config) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |  Cookie 值的 key |
| v2 | string |  Cookie 值的 value |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func configOpt(v1: *crawler.Config)  |   |


### crawler.domainExclude

不扫描的域名，使用 glob 语法

#### 定义：

`func (v1: string) return(func configOpt(v1: *crawler.Config) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |  想要排除的域名 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func configOpt(v1: *crawler.Config)  |   |


### crawler.domainInclude

想要扫描的域名，域名白名单，支持 glob 语法

#### 定义：

`func (v1: string) return(func configOpt(v1: *crawler.Config) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |  想要扫描的域名 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func configOpt(v1: *crawler.Config)  |   |


### crawler.forbiddenFromParent

禁止扫描 url 的父路径

#### 定义：

`func (v1: bool) return(func configOpt(v1: *crawler.Config) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | bool |  true or false 是否扫描父路径 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func configOpt(v1: *crawler.Config)  |   |


### crawler.header

设置爬虫的自定义 Header

#### 定义：

`func (v1: string, v2: string) return(func configOpt(v1: *crawler.Config) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |  设置 Header 的 Key |
| v2 | string |  设置 Header 的值 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func configOpt(v1: *crawler.Config)  |   |


### crawler.maxDepth

设置爬虫的最大深度，默认为5

#### 定义：

`func (v1: int) return(func configOpt(v1: *crawler.Config) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | int |  设置最大深度（int） |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func configOpt(v1: *crawler.Config)  |   |


### crawler.maxRedirect

设置最大重定向次数，默认为5

#### 定义：

`func (v1: int) return(func configOpt(v1: *crawler.Config) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | int |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func configOpt(v1: *crawler.Config)  |   |


### crawler.maxRequest

设置爬虫最大发出的请求数量，默认为 1000

#### 定义：

`func (v1: int) return(func configOpt(v1: *crawler.Config) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | int |  设置爬虫最多发出的请求数 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func configOpt(v1: *crawler.Config)  |   |


### crawler.maxRetry

最大重试次数（如果失败了就会重试）

#### 定义：

`func (v1: int) return(func configOpt(v1: *crawler.Config) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | int |  最大重试次数 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func configOpt(v1: *crawler.Config)  |   |


### crawler.maxUrls

最多获取到多少个 URL 就停止爬虫

#### 定义：

`func (v1: int) return(func configOpt(v1: *crawler.Config) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | int |  最大获取 URL 的树木 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func configOpt(v1: *crawler.Config)  |   |


### crawler.proxy

为爬虫设置代理，如果代理失效，爬虫则请求失败

#### 定义：

`func (v1 ...string) return(func configOpt(v1: *crawler.Config) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | []string |  爬虫代理，例如 `http://196.168.1.1:8080` |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func configOpt(v1: *crawler.Config)  |   |


### crawler.responseTimeout

响应超时时间

#### 定义：

`func (v1: float64) return(func configOpt(v1: *crawler.Config) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | float64 |  超时时间，float 为秒 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func configOpt(v1: *crawler.Config)  |   |


### crawler.timeout

等效于 `crawler.connectTimeout`

#### 定义：

`func (v1: float64) return(func configOpt(v1: *crawler.Config) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | float64 |  超时时间，float 为秒 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func configOpt(v1: *crawler.Config)  |   |


### crawler.ua

设置 useragent

#### 定义：

`func (v1: string) return(func configOpt(v1: *crawler.Config) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |  想要设置的 ua |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func configOpt(v1: *crawler.Config)  |   |


### crawler.urlRegexpExclude

禁止爬取的 url 正则，用于排除一些 login delete 等状况

#### 定义：

`func (v1: string) return(func configOpt(v1: *crawler.Config) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |  正则字符串 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func configOpt(v1: *crawler.Config)  |   |


### crawler.urlRegexpInclude

想要爬 url 的白名单，用于定向爬虫

#### 定义：

`func (v1: string) return(func configOpt(v1: *crawler.Config) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |  正则字符串 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func configOpt(v1: *crawler.Config)  |   |


### crawler.userAgent

设置 useragent

#### 定义：

`func (v1: string) return(func configOpt(v1: *crawler.Config) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |  想要设置的 ua |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func configOpt(v1: *crawler.Config)  |   |





