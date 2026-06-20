# crawler

|函数名|函数描述/介绍|
|:------|:--------|
| [crawler.RequestsFromFlow](#requestsfromflow) |RequestsFromFlow 尝试从一次请求与响应中爬取出所有可能的请求，返回所有可能请求的原始报文与错误 参数: - isHttps: 该流量是否为 HTTPS - reqBytes: 请求原始报文 - rspBytes: 响应原始报文 返回值: - [][]byte: 爬取到的所有可能请求的...|
| [crawler.Start](#start) |Start 启动爬虫爬取某个URL，它还可以接收零个到多个选项函数，用于影响爬取行为 返回一个Req结构体引用管道与错误 参数: - url: 起始爬取的 URL - opt: 零个或多个爬虫配置选项函数 返回值: - 一个可迭代的 Req 结构体引用管道，用于读取爬取到的请求 - error: 启...|
| [crawler.aiJSAIOptions](#aijsaioptions) |aiJSAIOptions 将底层 AI 配置选项（模型、密钥等）转发给 LiteForge 参数: - opts: 一个或多个 AI 配置选项，例如模型名称、API 密钥等 返回值: - 一个 crawler.aiJSExtract 可接收的 AI JS 抽取配置选项|
| [crawler.aiJSChunkBytes](#aijschunkbytes) |aiJSChunkBytes 设置 AI JS 抽取时每个 AI 调用切片的目标字节大小 参数: - n: 每个切片的目标字节数 返回值: - 一个 crawler.aiJSExtract 可接收的 AI JS 抽取配置选项|
| [crawler.aiJSConcurrency](#aijsconcurrency) |aiJSConcurrency 设置 AI JS 抽取时并行 AI 调用的最大并发数 参数: - n: 并行 AI 调用的最大并发数 返回值: - 一个 crawler.aiJSExtract 可接收的 AI JS 抽取配置选项|
| [crawler.aiJSContextBytes](#aijscontextbytes) |aiJSContextBytes 设置 AI JS 抽取时每个正则命中点周围上下文窗口的半宽字节数 参数: - n: 命中点周围上下文窗口的半宽字节数 返回值: - 一个 crawler.aiJSExtract 可接收的 AI JS 抽取配置选项|
| [crawler.aiJSExtract](#aijsextract) |aiJSExtract 启用基于 AI 辅助的 JS / HTML 文本路径与 URL 抽取通道， 与现有 SSA / 回调通道并行（不互相影响）。 该通道按以下三阶段工作： 1. 宽松正则预筛选可疑窗口（URL / 路径风格） 2. aireducer 按字节切片，DumpWithOverlap ...|
| [crawler.aiJSMaxTokens](#aijsmaxtokens) |aiJSMaxTokens 设置 AI JS 抽取时每次调用的 token 预算上限 参数: - n: 每次 AI 调用的最大 token 数 返回值: - 一个 crawler.aiJSExtract 可接收的 AI JS 抽取配置选项|
| [crawler.aiJSOverlapBytes](#aijsoverlapbytes) |aiJSOverlapBytes 设置 AI JS 抽取时跨切片折叠（重叠）的字节大小 参数: - n: 跨切片重叠的字节数 返回值: - 一个 crawler.aiJSExtract 可接收的 AI JS 抽取配置选项|
| [crawler.aiJSSkipBelow](#aijsskipbelow) |aiJSSkipBelow 设置候选数据流低于该字节阈值时跳过 AI 步骤，直接输出原始命中结果 参数: - n: 跳过 AI 步骤的候选数据流字节阈值 返回值: - 一个 crawler.aiJSExtract 可接收的 AI JS 抽取配置选项|
| [crawler.aiJSSmallInputBytes](#aijssmallinputbytes) |aiJSSmallInputBytes 设置直接投喂快速通道的原始输入字节阈值，设为 0 表示禁用 参数: - n: 直接投喂快速通道的原始输入字节阈值，0 表示禁用 返回值: - 一个 crawler.aiJSExtract 可接收的 AI JS 抽取配置选项|
| [crawler.aiJSSmallInputTokens](#aijssmallinputtokens) |aiJSSmallInputTokens 设置直接投喂快速通道的原始输入 token 阈值，设为 0 表示禁用 参数: - n: 直接投喂快速通道的原始输入 token 阈值，0 表示禁用 返回值: - 一个 crawler.aiJSExtract 可接收的 AI JS 抽取配置选项|
| [crawler.autoLogin](#autologin) |autoLogin 是一个选项函数，用于指定爬虫时的自动填写可能存在的登录表单 参数: - username: 登录用户名 - password: 登录密码 - flags: 可选的额外标志参数 返回值: - 一个 crawler.Start 可接收的配置选项|
| [crawler.basicAuth](#basicauth) |basicAuth 是一个选项函数，用于指定爬虫时的自动该填写的基础认证用户名和密码 参数: - user: 基础认证用户名 - pass: 基础认证密码 返回值: - 一个 crawler.Start 可接收的配置选项|
| [crawler.bodySize](#bodysize) |bodySize 是一个选项函数，用于指定爬虫时的最大响应体大小，默认为10MB 参数: - size: 最大响应体大小，单位为字节 返回值: - 一个 crawler.Start 可接收的配置选项|
| [crawler.concurrent](#concurrent) |concurrent 是一个选项函数，用于指定爬虫时的并发数，默认为20 参数: - concurrent: 并发数 返回值: - 一个 crawler.Start 可接收的配置选项|
| [crawler.connectTimeout](#connecttimeout) |connectTimeout 是一个选项函数，用于指定爬虫时的连接超时时间，默认为10s 参数: - f: 连接超时时间，单位为秒 返回值: - 一个 crawler.Start 可接收的配置选项|
| [crawler.context](#context) |context 设置爬虫使用的 context，用于取消或超时控制 在 yak 中通过 crawler.context 调用；cancel 时爬虫会停止抓取 参数: - ctx: 上下文对象 返回值: - 一个 crawler.Start 可接收的配置选项|
| [crawler.cookie](#cookie) |cookie 是一个选项函数，用于指定爬虫时的cookie 参数: - k: cookie 名称 - v: cookie 值 返回值: - 一个 crawler.Start 可接收的配置选项|
| [crawler.disallowSuffix](#disallowsuffix) |disallowSuffix 是一个选项函数，用于指定爬虫时的后缀黑名单 参数: - d: 后缀黑名单列表，命中的后缀将不被爬取 返回值: - 一个 crawler.Start 可接收的配置选项|
| [crawler.domainExclude](#domainexclude) |domainExclude 是一个选项函数，用于指定爬虫时的域名黑名单 domain允许使用glob语法，例如*.example.com 参数: - domain: 禁止的域名，支持 glob 语法 返回值: - 一个 crawler.Start 可接收的配置选项|
| [crawler.domainInclude](#domaininclude) |domainInclude 是一个选项函数，用于指定爬虫时的域名白名单 domain允许使用glob语法，例如*.example.com 参数: - domain: 允许的域名，支持 glob 语法 返回值: - 一个 crawler.Start 可接收的配置选项|
| [crawler.forbiddenFromParent](#forbiddenfromparent) |forbiddenFromParent 是一个选项函数，用于指定爬虫时的是否禁止从根路径发起请求，默认为false 对于一个起始URL，如果其并不是从根路径开始且没有禁止从根路径发起请求，那么爬虫会从其根路径开始爬取 参数: - b: 是否禁止从根路径发起请求 返回值: - 一个 crawler.S...|
| [crawler.header](#header) |header 是一个选项函数，用于指定爬虫时的请求头 参数: - k: 请求头名称 - v: 请求头值 返回值: - 一个 crawler.Start 可接收的配置选项|
| [crawler.httpsToHttpFallback](#httpstohttpfallback) |httpsToHttpFallback 设置当 HTTPS 请求失败时是否自动回退为 HTTP 重试 在 yak 中通过 crawler.httpsToHttpFallback 调用 参数: - enable: 是否启用 HTTPS 到 HTTP 的回退 返回值: - 一个 crawler.Star...|
| [crawler.jsParser](#jsparser) |jsParser 是一个选项函数，用于指定爬虫时是否进行对于JS的代码解析。 填写该选项默认开启，也可以传入false强制关闭。 参数: - enable: 可选，是否启用 JS 解析，缺省时默认开启 返回值: - 一个 crawler.Start 可接收的配置选项|
| [crawler.maxDepth](#maxdepth) |maxDepth 是一个选项函数，用于指定爬虫时的最大深度，默认为5 参数: - depth: 最大爬取深度 返回值: - 一个 crawler.Start 可接收的配置选项|
| [crawler.maxRedirect](#maxredirect) |maxRedirect 是一个选项函数，用于指定爬虫时的最大重定向次数，默认为5 参数: - maxRedirectTimes: 最大重定向次数 返回值: - 一个 crawler.Start 可接收的配置选项|
| [crawler.maxRequest](#maxrequest) |maxRequest 是一个选项函数，用于指定爬虫时的最大请求数，默认为1000 参数: - limit: 最大请求数 返回值: - 一个 crawler.Start 可接收的配置选项|
| [crawler.maxRetry](#maxretry) |maxRetry 是一个选项函数，用于指定爬虫时的最大重试次数，默认为3 参数: - limit: 最大重试次数 返回值: - 一个 crawler.Start 可接收的配置选项|
| [crawler.maxUrls](#maxurls) |maxUrls 是一个选项函数，用于指定爬虫时的最大链接数，默认为10000 参数: - limit: 最大链接数 返回值: - 一个 crawler.Start 可接收的配置选项|
| [crawler.onUrlFound](#onurlfound) |onUrlFound 是一个选项函数，用于在爬虫发现新URL时触发回调（包括未实际发出请求的URL） 参数: - f: 发现新 URL 时触发的回调函数，入参为发现的 URL 返回值: - 一个 crawler.Start 可接收的配置选项|
| [crawler.proxy](#proxy) |proxy 是一个选项函数，用于指定爬虫时的代理 参数: - proxies: 一个或多个代理地址，例如 http://127.0.0.1:8080 返回值: - 一个 crawler.Start 可接收的配置选项|
| [crawler.responseTimeout](#responsetimeout) |responseTimeout 设置爬虫的响应超时时间(秒)，默认为 10s 在 yak 中通过 crawler.responseTimeout 调用 参数: - f: 响应超时时间，单位为秒 返回值: - 一个 crawler.Start 可接收的配置选项|
| [crawler.timeout](#timeout) |connectTimeout 是一个选项函数，用于指定爬虫时的连接超时时间，默认为10s 参数: - f: 连接超时时间，单位为秒 返回值: - 一个 crawler.Start 可接收的配置选项|
| [crawler.ua](#ua) |userAgent 是一个选项函数，用于指定爬虫时的User-Agent 参数: - ua: User-Agent 字符串 返回值: - 一个 crawler.Start 可接收的配置选项|
| [crawler.urlExtractor](#urlextractor) |urlExtractor 是一个选项函数，它接收一个函数作为参数，用于为爬虫添加额外的链接提取规则 参数: - f: 自定义链接提取函数，入参为请求对象，返回提取到的链接列表 返回值: - 一个 crawler.Start 可接收的配置选项|
| [crawler.urlRegexpExclude](#urlregexpexclude) |urlRegexpExclude 是一个选项函数，用于指定爬虫时的URL正则黑名单 参数: - re: URL 黑名单正则表达式 返回值: - 一个 crawler.Start 可接收的配置选项|
| [crawler.urlRegexpInclude](#urlregexpinclude) |urlRegexpInclude 是一个选项函数，用于指定爬虫时的URL正则白名单 参数: - re: URL 白名单正则表达式 返回值: - 一个 crawler.Start 可接收的配置选项|
| [crawler.userAgent](#useragent) |userAgent 是一个选项函数，用于指定爬虫时的User-Agent 参数: - ua: User-Agent 字符串 返回值: - 一个 crawler.Start 可接收的配置选项|
| [crawler.verifyCertificate](#verifycertificate) |verifyCertificate 设置爬虫在 HTTPS 请求时是否校验服务端证书 在 yak 中通过 crawler.verifyCertificate 调用 参数: - b: 是否校验证书，false 表示忽略证书错误 返回值: - 一个 crawler.Start 可接收的配置选项|


## 函数定义
### RequestsFromFlow

#### 详细描述
RequestsFromFlow 尝试从一次请求与响应中爬取出所有可能的请求，返回所有可能请求的原始报文与错误

参数:

  - isHttps: 该流量是否为 HTTPS

  - reqBytes: 请求原始报文

  - rspBytes: 响应原始报文



返回值:

  - [][]byte: 爬取到的所有可能请求的原始报文列表

  - error: 处理失败时返回错误




Example:

``````````````yak
reqs, err = crawler.RequestsFromFlow(false, reqBytes, rspBytes)
``````````````


#### 定义

`RequestsFromFlow(isHttps bool, reqBytes []byte, rspBytes []byte) ([][]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| isHttps | `bool` | 该流量是否为 HTTPS |
| reqBytes | `[]byte` | 请求原始报文 |
| rspBytes | `[]byte` | 响应原始报文 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[][]byte` | [][]byte: 爬取到的所有可能请求的原始报文列表 |
| r2 | `error` | 处理失败时返回错误 |


### Start

#### 详细描述
Start 启动爬虫爬取某个URL，它还可以接收零个到多个选项函数，用于影响爬取行为

返回一个Req结构体引用管道与错误

参数:

  - url: 起始爬取的 URL

  - opt: 零个或多个爬虫配置选项函数



返回值:

  - 一个可迭代的 Req 结构体引用管道，用于读取爬取到的请求

  - error: 启动失败时返回错误




Example:

``````````````yak
ch, err := crawler.Start("https://www.baidu.com", crawler.concurrent(10))
for req in ch {
println(req.Response()~)
}
``````````````


#### 定义

`Start(url string, opt ...ConfigOpt) (chan *Req, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` | 起始爬取的 URL |
| opt | `...ConfigOpt` | 零个或多个爬虫配置选项函数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *Req` | 一个可迭代的 Req 结构体引用管道，用于读取爬取到的请求 |
| r2 | `error` | 启动失败时返回错误 |


### aiJSAIOptions

#### 详细描述
aiJSAIOptions 将底层 AI 配置选项（模型、密钥等）转发给 LiteForge

参数:

  - opts: 一个或多个 AI 配置选项，例如模型名称、API 密钥等



返回值:

  - 一个 crawler.aiJSExtract 可接收的 AI JS 抽取配置选项




Example:

``````````````yak
crawler.Start("https://example.com", crawler.aiJSExtract(crawler.aiJSAIOptions(ai.model("gpt-4"))))
``````````````


#### 定义

`aiJSAIOptions(opts ...aicommon.ConfigOption) AIJSExtractOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...aicommon.ConfigOption` | 一个或多个 AI 配置选项，例如模型名称、API 密钥等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIJSExtractOption` | 一个 crawler.aiJSExtract 可接收的 AI JS 抽取配置选项 |


### aiJSChunkBytes

#### 详细描述
aiJSChunkBytes 设置 AI JS 抽取时每个 AI 调用切片的目标字节大小

参数:

  - n: 每个切片的目标字节数



返回值:

  - 一个 crawler.aiJSExtract 可接收的 AI JS 抽取配置选项




Example:

``````````````yak
crawler.Start("https://example.com", crawler.aiJSExtract(crawler.aiJSChunkBytes(8192)))
``````````````


#### 定义

`aiJSChunkBytes(n int64) AIJSExtractOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `int64` | 每个切片的目标字节数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIJSExtractOption` | 一个 crawler.aiJSExtract 可接收的 AI JS 抽取配置选项 |


### aiJSConcurrency

#### 详细描述
aiJSConcurrency 设置 AI JS 抽取时并行 AI 调用的最大并发数

参数:

  - n: 并行 AI 调用的最大并发数



返回值:

  - 一个 crawler.aiJSExtract 可接收的 AI JS 抽取配置选项




Example:

``````````````yak
crawler.Start("https://example.com", crawler.aiJSExtract(crawler.aiJSConcurrency(5)))
``````````````


#### 定义

`aiJSConcurrency(n int) AIJSExtractOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `int` | 并行 AI 调用的最大并发数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIJSExtractOption` | 一个 crawler.aiJSExtract 可接收的 AI JS 抽取配置选项 |


### aiJSContextBytes

#### 详细描述
aiJSContextBytes 设置 AI JS 抽取时每个正则命中点周围上下文窗口的半宽字节数

参数:

  - n: 命中点周围上下文窗口的半宽字节数



返回值:

  - 一个 crawler.aiJSExtract 可接收的 AI JS 抽取配置选项




Example:

``````````````yak
crawler.Start("https://example.com", crawler.aiJSExtract(crawler.aiJSContextBytes(512)))
``````````````


#### 定义

`aiJSContextBytes(n int) AIJSExtractOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `int` | 命中点周围上下文窗口的半宽字节数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIJSExtractOption` | 一个 crawler.aiJSExtract 可接收的 AI JS 抽取配置选项 |


### aiJSExtract

#### 详细描述
aiJSExtract 启用基于 AI 辅助的 JS / HTML 文本路径与 URL 抽取通道，

与现有 SSA / 回调通道并行（不互相影响）。

该通道按以下三阶段工作：

 1. 宽松正则预筛选可疑窗口（URL / 路径风格）

 2. aireducer 按字节切片，DumpWithOverlap 跨切片折叠

 3. aiforge.LiteForge SpeedPriority 抽取结构化路径列表



参数:

  - opts: 可选的 AI JS 抽取配置项，例如 crawler.aiJSMaxTokens



返回值:

  - 一个 crawler.Start 可接收的配置选项




Example:

``````````````yak
crawler.Start("https://example.com", crawler.aiJSExtract()) // 启用，全部默认值
crawler.Start("https://example.com", crawler.aiJSExtract(crawler.aiJSMaxTokens(40000))) // 调整 token 上限
``````````````


#### 定义

`aiJSExtract(opts ...AIJSExtractOption) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...AIJSExtractOption` | 可选的 AI JS 抽取配置项，例如 crawler.aiJSMaxTokens |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | 一个 crawler.Start 可接收的配置选项 |


### aiJSMaxTokens

#### 详细描述
aiJSMaxTokens 设置 AI JS 抽取时每次调用的 token 预算上限

参数:

  - n: 每次 AI 调用的最大 token 数



返回值:

  - 一个 crawler.aiJSExtract 可接收的 AI JS 抽取配置选项




Example:

``````````````yak
crawler.Start("https://example.com", crawler.aiJSExtract(crawler.aiJSMaxTokens(40000)))
``````````````


#### 定义

`aiJSMaxTokens(n int) AIJSExtractOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `int` | 每次 AI 调用的最大 token 数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIJSExtractOption` | 一个 crawler.aiJSExtract 可接收的 AI JS 抽取配置选项 |


### aiJSOverlapBytes

#### 详细描述
aiJSOverlapBytes 设置 AI JS 抽取时跨切片折叠（重叠）的字节大小

参数:

  - n: 跨切片重叠的字节数



返回值:

  - 一个 crawler.aiJSExtract 可接收的 AI JS 抽取配置选项




Example:

``````````````yak
crawler.Start("https://example.com", crawler.aiJSExtract(crawler.aiJSOverlapBytes(256)))
``````````````


#### 定义

`aiJSOverlapBytes(n int) AIJSExtractOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `int` | 跨切片重叠的字节数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIJSExtractOption` | 一个 crawler.aiJSExtract 可接收的 AI JS 抽取配置选项 |


### aiJSSkipBelow

#### 详细描述
aiJSSkipBelow 设置候选数据流低于该字节阈值时跳过 AI 步骤，直接输出原始命中结果

参数:

  - n: 跳过 AI 步骤的候选数据流字节阈值



返回值:

  - 一个 crawler.aiJSExtract 可接收的 AI JS 抽取配置选项




Example:

``````````````yak
crawler.Start("https://example.com", crawler.aiJSExtract(crawler.aiJSSkipBelow(1024)))
``````````````


#### 定义

`aiJSSkipBelow(n int) AIJSExtractOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `int` | 跳过 AI 步骤的候选数据流字节阈值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIJSExtractOption` | 一个 crawler.aiJSExtract 可接收的 AI JS 抽取配置选项 |


### aiJSSmallInputBytes

#### 详细描述
aiJSSmallInputBytes 设置直接投喂快速通道的原始输入字节阈值，设为 0 表示禁用

参数:

  - n: 直接投喂快速通道的原始输入字节阈值，0 表示禁用



返回值:

  - 一个 crawler.aiJSExtract 可接收的 AI JS 抽取配置选项




Example:

``````````````yak
crawler.Start("https://example.com", crawler.aiJSExtract(crawler.aiJSSmallInputBytes(2048)))
``````````````


#### 定义

`aiJSSmallInputBytes(n int) AIJSExtractOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `int` | 直接投喂快速通道的原始输入字节阈值，0 表示禁用 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIJSExtractOption` | 一个 crawler.aiJSExtract 可接收的 AI JS 抽取配置选项 |


### aiJSSmallInputTokens

#### 详细描述
aiJSSmallInputTokens 设置直接投喂快速通道的原始输入 token 阈值，设为 0 表示禁用

参数:

  - n: 直接投喂快速通道的原始输入 token 阈值，0 表示禁用



返回值:

  - 一个 crawler.aiJSExtract 可接收的 AI JS 抽取配置选项




Example:

``````````````yak
crawler.Start("https://example.com", crawler.aiJSExtract(crawler.aiJSSmallInputTokens(800)))
``````````````


#### 定义

`aiJSSmallInputTokens(n int) AIJSExtractOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `int` | 直接投喂快速通道的原始输入 token 阈值，0 表示禁用 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AIJSExtractOption` | 一个 crawler.aiJSExtract 可接收的 AI JS 抽取配置选项 |


### autoLogin

#### 详细描述
autoLogin 是一个选项函数，用于指定爬虫时的自动填写可能存在的登录表单

参数:

  - username: 登录用户名

  - password: 登录密码

  - flags: 可选的额外标志参数



返回值:

  - 一个 crawler.Start 可接收的配置选项




Example:

``````````````yak
crawler.Start("https://example.com", crawler.autoLogin("admin", "admin"))
``````````````


#### 定义

`autoLogin(username string, password string, flags ...string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| username | `string` | 登录用户名 |
| password | `string` | 登录密码 |
| flags | `...string` | 可选的额外标志参数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | 一个 crawler.Start 可接收的配置选项 |


### basicAuth

#### 详细描述
basicAuth 是一个选项函数，用于指定爬虫时的自动该填写的基础认证用户名和密码

参数:

  - user: 基础认证用户名

  - pass: 基础认证密码



返回值:

  - 一个 crawler.Start 可接收的配置选项




Example:

``````````````yak
crawler.Start("https://example.com", crawler.basicAuth("admin", "admin"))
``````````````


#### 定义

`basicAuth(user string, pass string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| user | `string` | 基础认证用户名 |
| pass | `string` | 基础认证密码 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | 一个 crawler.Start 可接收的配置选项 |


### bodySize

#### 详细描述
bodySize 是一个选项函数，用于指定爬虫时的最大响应体大小，默认为10MB

参数:

  - size: 最大响应体大小，单位为字节



返回值:

  - 一个 crawler.Start 可接收的配置选项




Example:

``````````````yak
crawler.Start("https://example.com", crawler.bodySize(1024 * 1024))
``````````````


#### 定义

`bodySize(size int) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| size | `int` | 最大响应体大小，单位为字节 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | 一个 crawler.Start 可接收的配置选项 |


### concurrent

#### 详细描述
concurrent 是一个选项函数，用于指定爬虫时的并发数，默认为20

参数:

  - concurrent: 并发数



返回值:

  - 一个 crawler.Start 可接收的配置选项




Example:

``````````````yak
crawler.Start("https://example.com", crawler.concurrent(10))
``````````````


#### 定义

`concurrent(concurrent int) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| concurrent | `int` | 并发数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | 一个 crawler.Start 可接收的配置选项 |


### connectTimeout

#### 详细描述
connectTimeout 是一个选项函数，用于指定爬虫时的连接超时时间，默认为10s

参数:

  - f: 连接超时时间，单位为秒



返回值:

  - 一个 crawler.Start 可接收的配置选项




Example:

``````````````yak
crawler.Start("https://example.com", crawler.connectTimeout(5))
``````````````


#### 定义

`connectTimeout(f float64) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `float64` | 连接超时时间，单位为秒 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | 一个 crawler.Start 可接收的配置选项 |


### context

#### 详细描述
context 设置爬虫使用的 context，用于取消或超时控制

在 yak 中通过 crawler.context 调用；cancel 时爬虫会停止抓取

参数:

  - ctx: 上下文对象



返回值:

  - 一个 crawler.Start 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：使用可取消的 context 控制爬虫
ctx, cancel = context.WithCancel(context.Background())
defer cancel()
res = crawler.Start("https://example.com", crawler.context(ctx))~

	for req = range res {
	    println(req.Url())
	}
``````````````


#### 定义

`context(ctx context.Context) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` | 上下文对象 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | 一个 crawler.Start 可接收的配置选项 |


### cookie

#### 详细描述
cookie 是一个选项函数，用于指定爬虫时的cookie

参数:

  - k: cookie 名称

  - v: cookie 值



返回值:

  - 一个 crawler.Start 可接收的配置选项




Example:

``````````````yak
crawler.Start("https://example.com", crawler.cookie("key", "value"))
``````````````


#### 定义

`cookie(k string, v string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| k | `string` | cookie 名称 |
| v | `string` | cookie 值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | 一个 crawler.Start 可接收的配置选项 |


### disallowSuffix

#### 详细描述
disallowSuffix 是一个选项函数，用于指定爬虫时的后缀黑名单

参数:

  - d: 后缀黑名单列表，命中的后缀将不被爬取



返回值:

  - 一个 crawler.Start 可接收的配置选项




Example:

``````````````yak
crawler.Start("https://example.com", crawler.disallowSuffix(".css", ".jpg", ".png")) // 爬虫时不会爬取css、jpg、png文件
``````````````


#### 定义

`disallowSuffix(d []string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| d | `[]string` | 后缀黑名单列表，命中的后缀将不被爬取 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | 一个 crawler.Start 可接收的配置选项 |


### domainExclude

#### 详细描述
domainExclude 是一个选项函数，用于指定爬虫时的域名黑名单

domain允许使用glob语法，例如*.example.com

参数:

  - domain: 禁止的域名，支持 glob 语法



返回值:

  - 一个 crawler.Start 可接收的配置选项




Example:

``````````````yak
crawler.Start("https://example.com", crawler.domainExclude("*.baidu.com"))
``````````````


#### 定义

`domainExclude(domain string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| domain | `string` | 禁止的域名，支持 glob 语法 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | 一个 crawler.Start 可接收的配置选项 |


### domainInclude

#### 详细描述
domainInclude 是一个选项函数，用于指定爬虫时的域名白名单

domain允许使用glob语法，例如*.example.com

参数:

  - domain: 允许的域名，支持 glob 语法



返回值:

  - 一个 crawler.Start 可接收的配置选项




Example:

``````````````yak
crawler.Start("https://example.com", crawler.domainInclude("*.example.com"))
``````````````


#### 定义

`domainInclude(domain string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| domain | `string` | 允许的域名，支持 glob 语法 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | 一个 crawler.Start 可接收的配置选项 |


### forbiddenFromParent

#### 详细描述
forbiddenFromParent 是一个选项函数，用于指定爬虫时的是否禁止从根路径发起请求，默认为false

对于一个起始URL，如果其并不是从根路径开始且没有禁止从根路径发起请求，那么爬虫会从其根路径开始爬取

参数:

  - b: 是否禁止从根路径发起请求



返回值:

  - 一个 crawler.Start 可接收的配置选项




Example:

``````````````yak
crawler.Start("https://example.com/a/b/c", crawler.forbiddenFromParent(false)) // 这会从 https://example.com/ 开始爬取
``````````````


#### 定义

`forbiddenFromParent(b bool) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` | 是否禁止从根路径发起请求 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | 一个 crawler.Start 可接收的配置选项 |


### header

#### 详细描述
header 是一个选项函数，用于指定爬虫时的请求头

参数:

  - k: 请求头名称

  - v: 请求头值



返回值:

  - 一个 crawler.Start 可接收的配置选项




Example:

``````````````yak
crawler.Start("https://example.com", crawler.header("User-Agent", "yaklang-crawler"))
``````````````


#### 定义

`header(k string, v string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| k | `string` | 请求头名称 |
| v | `string` | 请求头值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | 一个 crawler.Start 可接收的配置选项 |


### httpsToHttpFallback

#### 详细描述
httpsToHttpFallback 设置当 HTTPS 请求失败时是否自动回退为 HTTP 重试

在 yak 中通过 crawler.httpsToHttpFallback 调用

参数:

  - enable: 是否启用 HTTPS 到 HTTP 的回退



返回值:

  - 一个 crawler.Start 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：开启 HTTPS 失败回退 HTTP
res = crawler.Start("https://example.com", crawler.httpsToHttpFallback(true))~

	for req = range res {
	    println(req.Url())
	}
``````````````


#### 定义

`httpsToHttpFallback(enable bool) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| enable | `bool` | 是否启用 HTTPS 到 HTTP 的回退 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | 一个 crawler.Start 可接收的配置选项 |


### jsParser

#### 详细描述
jsParser 是一个选项函数，用于指定爬虫时是否进行对于JS的代码解析。

填写该选项默认开启，也可以传入false强制关闭。

参数:

  - enable: 可选，是否启用 JS 解析，缺省时默认开启



返回值:

  - 一个 crawler.Start 可接收的配置选项




Example:

``````````````yak
crawler.Start("https://example.com", crawler.jsParser()) // 开启
crawler.Start("https://example.com", crawler.jsParser(true)) // 开启
crawler.Start("https://example.com", crawler.jsParser(false)) // 关闭
``````````````


#### 定义

`jsParser(enable ...bool) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| enable | `...bool` | 可选，是否启用 JS 解析，缺省时默认开启 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | 一个 crawler.Start 可接收的配置选项 |


### maxDepth

#### 详细描述
maxDepth 是一个选项函数，用于指定爬虫时的最大深度，默认为5

参数:

  - depth: 最大爬取深度



返回值:

  - 一个 crawler.Start 可接收的配置选项




Example:

``````````````yak
crawler.Start("https://example.com", crawler.maxDepth(10))
``````````````


#### 定义

`maxDepth(depth int) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| depth | `int` | 最大爬取深度 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | 一个 crawler.Start 可接收的配置选项 |


### maxRedirect

#### 详细描述
maxRedirect 是一个选项函数，用于指定爬虫时的最大重定向次数，默认为5

参数:

  - maxRedirectTimes: 最大重定向次数



返回值:

  - 一个 crawler.Start 可接收的配置选项




Example:

``````````````yak
crawler.Start("https://example.com", crawler.maxRedirect(10))
``````````````


#### 定义

`maxRedirect(maxRedirectTimes int) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| maxRedirectTimes | `int` | 最大重定向次数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | 一个 crawler.Start 可接收的配置选项 |


### maxRequest

#### 详细描述
maxRequest 是一个选项函数，用于指定爬虫时的最大请求数，默认为1000

参数:

  - limit: 最大请求数



返回值:

  - 一个 crawler.Start 可接收的配置选项




Example:

``````````````yak
crawler.Start("https://example.com", crawler.maxRequest(10000))
``````````````


#### 定义

`maxRequest(limit int) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| limit | `int` | 最大请求数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | 一个 crawler.Start 可接收的配置选项 |


### maxRetry

#### 详细描述
maxRetry 是一个选项函数，用于指定爬虫时的最大重试次数，默认为3

参数:

  - limit: 最大重试次数



返回值:

  - 一个 crawler.Start 可接收的配置选项




Example:

``````````````yak
crawler.Start("https://example.com", crawler.maxRetry(10))
``````````````


#### 定义

`maxRetry(limit int) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| limit | `int` | 最大重试次数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | 一个 crawler.Start 可接收的配置选项 |


### maxUrls

#### 详细描述
maxUrls 是一个选项函数，用于指定爬虫时的最大链接数，默认为10000

参数:

  - limit: 最大链接数



返回值:

  - 一个 crawler.Start 可接收的配置选项




Example:

``````````````yak
crawler.Start("https://example.com", crawler.maxUrls(20000))
``````````````


#### 定义

`maxUrls(limit int) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| limit | `int` | 最大链接数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | 一个 crawler.Start 可接收的配置选项 |


### onUrlFound

#### 详细描述
onUrlFound 是一个选项函数，用于在爬虫发现新URL时触发回调（包括未实际发出请求的URL）

参数:

  - f: 发现新 URL 时触发的回调函数，入参为发现的 URL



返回值:

  - 一个 crawler.Start 可接收的配置选项




Example:

``````````````yak
crawler.Start("https://example.com", crawler.onUrlFound(func(url) { println(url) }))
``````````````


#### 定义

`onUrlFound(f func(string)) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `func(string)` | 发现新 URL 时触发的回调函数，入参为发现的 URL |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | 一个 crawler.Start 可接收的配置选项 |


### proxy

#### 详细描述
proxy 是一个选项函数，用于指定爬虫时的代理

参数:

  - proxies: 一个或多个代理地址，例如 http://127.0.0.1:8080



返回值:

  - 一个 crawler.Start 可接收的配置选项




Example:

``````````````yak
crawler.Start("https://example.com", crawler.proxy("http://127.0.0.1:8080"))
``````````````


#### 定义

`proxy(proxies ...string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| proxies | `...string` | 一个或多个代理地址，例如 http://127.0.0.1:8080 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | 一个 crawler.Start 可接收的配置选项 |


### responseTimeout

#### 详细描述
responseTimeout 设置爬虫的响应超时时间(秒)，默认为 10s

在 yak 中通过 crawler.responseTimeout 调用

参数:

  - f: 响应超时时间，单位为秒



返回值:

  - 一个 crawler.Start 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：设置响应超时为 5 秒
res = crawler.Start("https://example.com", crawler.responseTimeout(5))~

	for req = range res {
	    println(req.Url())
	}
``````````````


#### 定义

`responseTimeout(f float64) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `float64` | 响应超时时间，单位为秒 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | 一个 crawler.Start 可接收的配置选项 |


### timeout

#### 详细描述
connectTimeout 是一个选项函数，用于指定爬虫时的连接超时时间，默认为10s

参数:

  - f: 连接超时时间，单位为秒



返回值:

  - 一个 crawler.Start 可接收的配置选项




Example:

``````````````yak
crawler.Start("https://example.com", crawler.connectTimeout(5))
``````````````


#### 定义

`timeout(f float64) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `float64` | 连接超时时间，单位为秒 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | 一个 crawler.Start 可接收的配置选项 |


### ua

#### 详细描述
userAgent 是一个选项函数，用于指定爬虫时的User-Agent

参数:

  - ua: User-Agent 字符串



返回值:

  - 一个 crawler.Start 可接收的配置选项




Example:

``````````````yak
crawler.Start("https://example.com", crawler.userAgent("yaklang-crawler"))
``````````````


#### 定义

`ua(ua string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ua | `string` | User-Agent 字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | 一个 crawler.Start 可接收的配置选项 |


### urlExtractor

#### 详细描述
urlExtractor 是一个选项函数，它接收一个函数作为参数，用于为爬虫添加额外的链接提取规则

参数:

  - f: 自定义链接提取函数，入参为请求对象，返回提取到的链接列表



返回值:

  - 一个 crawler.Start 可接收的配置选项




Example:

``````````````yak
crawler.Start("https://example.com", crawler.urlExtractor(func(req) {
尝试编写自己的规则，从响应体(req.Response()或req.ResponseRaw())中提取额外的链接
})
``````````````


#### 定义

`urlExtractor(f func(*Req) []any) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `func(*Req) []any` | 自定义链接提取函数，入参为请求对象，返回提取到的链接列表 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | 一个 crawler.Start 可接收的配置选项 |


### urlRegexpExclude

#### 详细描述
urlRegexpExclude 是一个选项函数，用于指定爬虫时的URL正则黑名单

参数:

  - re: URL 黑名单正则表达式



返回值:

  - 一个 crawler.Start 可接收的配置选项




Example:

``````````````yak
crawler.Start("https://example.com", crawler.urlRegexpExclude(`\.jpg`))
``````````````


#### 定义

`urlRegexpExclude(re string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| re | `string` | URL 黑名单正则表达式 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | 一个 crawler.Start 可接收的配置选项 |


### urlRegexpInclude

#### 详细描述
urlRegexpInclude 是一个选项函数，用于指定爬虫时的URL正则白名单

参数:

  - re: URL 白名单正则表达式



返回值:

  - 一个 crawler.Start 可接收的配置选项




Example:

``````````````yak
crawler.Start("https://example.com", crawler.urlRegexpInclude(`\.html`))
``````````````


#### 定义

`urlRegexpInclude(re string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| re | `string` | URL 白名单正则表达式 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | 一个 crawler.Start 可接收的配置选项 |


### userAgent

#### 详细描述
userAgent 是一个选项函数，用于指定爬虫时的User-Agent

参数:

  - ua: User-Agent 字符串



返回值:

  - 一个 crawler.Start 可接收的配置选项




Example:

``````````````yak
crawler.Start("https://example.com", crawler.userAgent("yaklang-crawler"))
``````````````


#### 定义

`userAgent(ua string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ua | `string` | User-Agent 字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | 一个 crawler.Start 可接收的配置选项 |


### verifyCertificate

#### 详细描述
verifyCertificate 设置爬虫在 HTTPS 请求时是否校验服务端证书

在 yak 中通过 crawler.verifyCertificate 调用

参数:

  - b: 是否校验证书，false 表示忽略证书错误



返回值:

  - 一个 crawler.Start 可接收的配置选项




Example:

``````````````yak
// 该示例为示意性用法：抓取自签名证书站点时关闭证书校验
res = crawler.Start("https://self-signed.example.com", crawler.verifyCertificate(false))~

	for req = range res {
	    println(req.Url())
	}
``````````````


#### 定义

`verifyCertificate(b bool) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` | 是否校验证书，false 表示忽略证书错误 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` | 一个 crawler.Start 可接收的配置选项 |


