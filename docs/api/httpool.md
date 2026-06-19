# httpool

|函数名|函数描述/介绍|
|:------|:--------|
| [httpool.Pool](#pool) |Pool 以并发连接池的方式批量发送 HTTP 请求，输入可以是原始报文、请求列表或 fuzz 对象，返回结果管道 参数: - i: 待发送的请求源（原始报文 []byte/[][]byte、*http.Request、FuzzHTTPRequest 等） - opts: 可选配置，例如 httpo...|
| [httpool.connPool](#connpool) |connPool 是一个 HTTP 连接池/批量请求配置选项，用于设置是否复用底层 TCP 连接池以提升性能 参数: - b: 是否启用连接池复用 返回值: - 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzzx 等|
| [httpool.context](#context) |context 是一个 HTTP 连接池/批量请求配置选项，用于传入上下文以便外部取消批量任务 参数: - ctx: 上下文对象 返回值: - 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzzx 等|
| [httpool.fuzz](#fuzz) |fuzz 是一个 HTTP 连接池配置选项，用于设置是否对请求模板进行 fuzztag 渲染（变形） 参数: - b: 是否启用 fuzztag 渲染 返回值: - 一个连接池配置选项，作为可变参数传入 httpool.Pool|
| [httpool.fuzzParams](#fuzzparams) |fuzzParams 是一个 HTTP 连接池配置选项，用于为 fuzztag 渲染提供额外的参数表 参数: - i: 额外参数（map 或可转换为 map 的值） 返回值: - 一个连接池配置选项，作为可变参数传入 httpool.Pool|
| [httpool.host](#host) |host 是一个 HTTP 连接池/批量请求配置选项，用于强制指定请求实际连接的目标主机（覆盖报文中的 Host） 参数: - h: 目标主机地址（可包含端口或 scheme） - isHttps: 当地址未带端口时，是否按 HTTPS 推断默认端口（443/80） 返回值: - 一个连接池配置选项...|
| [httpool.https](#https) |https 是一个 HTTP 连接池/批量请求配置选项，用于设置是否以 HTTPS 协议发送请求 参数: - f: 是否使用 HTTPS 返回值: - 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzzx 等|
| [httpool.noFixContentLength](#nofixcontentlength) |noFixContentLength 是一个 HTTP 连接池/批量请求配置选项，用于设置是否不自动修复 Content-Length 头 参数: - f: 是否禁止自动修复 Content-Length 返回值: - 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzzx ...|
| [httpool.noRedirect](#noredirect) |noRedirect 是一个 HTTP 连接池配置选项，用于设置是否禁止跟随重定向 参数: - i: 是否禁止跟随重定向 返回值: - 一个连接池配置选项，作为可变参数传入 httpool.Pool|
| [httpool.perRequestTimeout](#perrequesttimeout) |perRequestTimeout 是一个 HTTP 连接池/批量请求配置选项，用于设置单个请求的超时时间（单位：秒） 参数: - f: 超时时间，单位为秒，支持小数 返回值: - 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzz / fuzzx 等|
| [httpool.port](#port) |port 是一个 HTTP 连接池/批量请求配置选项，用于强制指定请求实际连接的目标端口 参数: - port: 目标端口 返回值: - 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzzx 等|
| [httpool.proxy](#proxy) |proxy 是一个 HTTP 连接池/批量请求配置选项，用于设置请求所使用的代理（支持多个，依次尝试） 参数: - proxies: 一个或多个代理地址，支持 http、https、socks4、socks5 协议 返回值: - 一个连接池配置选项，作为可变参数传入 httpool.Pool / f...|
| [httpool.rawMode](#rawmode) |rawMode 是一个 HTTP 连接池配置选项，用于设置是否以原始报文模式发送（不做额外解析处理） 参数: - b: 是否启用原始报文模式 返回值: - 一个连接池配置选项，作为可变参数传入 httpool.Pool|
| [httpool.redirectTimes](#redirecttimes) |redirectTimes 是一个 HTTP 连接池/批量请求配置选项，用于设置最大重定向跟随次数 参数: - f: 最大重定向次数 返回值: - 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzzx 等|
| [httpool.size](#size) |size 是一个 HTTP 连接池/批量请求配置选项，用于设置并发请求数量（并发上限） 参数: - i: 并发数量 返回值: - 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzz / fuzzx 等|


## 函数定义
### Pool

#### 详细描述
Pool 以并发连接池的方式批量发送 HTTP 请求，输入可以是原始报文、请求列表或 fuzz 对象，返回结果管道

参数:

  - i: 待发送的请求源（原始报文 []byte/[][]byte、*http.Request、FuzzHTTPRequest 等）

  - opts: 可选配置，例如 httpool.https、httpool.size、httpool.proxy、httpool.perRequestTimeout



返回值:

  - HTTP 结果管道，逐个产出每个请求的响应结果

  - 错误信息，初始化失败时返回非空




Example:

``````````````yak
// 并发批量发包，依赖网络，此处仅作示意
raw = `GET / HTTP/1.1
Host: www.example.com

`
ch = httpool.Pool(raw, httpool.https(false), httpool.size(10), httpool.perRequestTimeout(5))~
for res = range ch { println(res.Url) }
``````````````


#### 定义

`Pool(i any, opts ...HttpPoolConfigOption) (chan *HttpResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待发送的请求源（原始报文 []byte/[][]byte、*http.Request、FuzzHTTPRequest 等） |
| opts | `...HttpPoolConfigOption` | 可选配置，例如 httpool.https、httpool.size、httpool.proxy、httpool.perRequestTimeout |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *HttpResult` | HTTP 结果管道，逐个产出每个请求的响应结果 |
| r2 | `error` | 错误信息，初始化失败时返回非空 |


### connPool

#### 详细描述
connPool 是一个 HTTP 连接池/批量请求配置选项，用于设置是否复用底层 TCP 连接池以提升性能

参数:

  - b: 是否启用连接池复用



返回值:

  - 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzzx 等




Example:

``````````````yak
// 启用连接池复用，依赖网络，此处仅作示意
res = httpool.Pool(reqs, httpool.connPool(true))~
``````````````


#### 定义

`connPool(b bool) HttpPoolConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` | 是否启用连接池复用 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpPoolConfigOption` | 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzzx 等 |


### context

#### 详细描述
context 是一个 HTTP 连接池/批量请求配置选项，用于传入上下文以便外部取消批量任务

参数:

  - ctx: 上下文对象



返回值:

  - 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzzx 等




Example:

``````````````yak
// 传入可取消的上下文，依赖网络，此处仅作示意
ctx = context.New()
res = httpool.Pool(reqs, httpool.context(ctx))~
``````````````


#### 定义

`context(ctx context.Context) HttpPoolConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` | 上下文对象 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpPoolConfigOption` | 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzzx 等 |


### fuzz

#### 详细描述
fuzz 是一个 HTTP 连接池配置选项，用于设置是否对请求模板进行 fuzztag 渲染（变形）

参数:

  - b: 是否启用 fuzztag 渲染



返回值:

  - 一个连接池配置选项，作为可变参数传入 httpool.Pool




Example:

``````````````yak
// 启用 fuzztag 渲染，依赖网络，此处仅作示意
res = httpool.Pool(reqs, httpool.fuzz(true))~
``````````````


#### 定义

`fuzz(b bool) HttpPoolConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` | 是否启用 fuzztag 渲染 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpPoolConfigOption` | 一个连接池配置选项，作为可变参数传入 httpool.Pool |


### fuzzParams

#### 详细描述
fuzzParams 是一个 HTTP 连接池配置选项，用于为 fuzztag 渲染提供额外的参数表

参数:

  - i: 额外参数（map 或可转换为 map 的值）



返回值:

  - 一个连接池配置选项，作为可变参数传入 httpool.Pool




Example:

``````````````yak
// 提供 fuzztag 渲染参数，依赖网络，此处仅作示意
res = httpool.Pool(reqs, httpool.fuzz(true), httpool.fuzzParams({"id": ["1", "2"]}))~
``````````````


#### 定义

`fuzzParams(i any) HttpPoolConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 额外参数（map 或可转换为 map 的值） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpPoolConfigOption` | 一个连接池配置选项，作为可变参数传入 httpool.Pool |


### host

#### 详细描述
host 是一个 HTTP 连接池/批量请求配置选项，用于强制指定请求实际连接的目标主机（覆盖报文中的 Host）

参数:

  - h: 目标主机地址（可包含端口或 scheme）

  - isHttps: 当地址未带端口时，是否按 HTTPS 推断默认端口（443/80）



返回值:

  - 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzzx 等




Example:

``````````````yak
// 强制连接指定主机，依赖网络，此处仅作示意
res = httpool.Pool(reqs, httpool.host("127.0.0.1", false), httpool.port(8080))~
``````````````


#### 定义

`host(h string, isHttps bool) HttpPoolConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `string` | 目标主机地址（可包含端口或 scheme） |
| isHttps | `bool` | 当地址未带端口时，是否按 HTTPS 推断默认端口（443/80） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpPoolConfigOption` | 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzzx 等 |


### https

#### 详细描述
https 是一个 HTTP 连接池/批量请求配置选项，用于设置是否以 HTTPS 协议发送请求

参数:

  - f: 是否使用 HTTPS



返回值:

  - 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzzx 等




Example:

``````````````yak
// 以 HTTPS 发送，依赖网络，此处仅作示意
res = httpool.Pool(reqs, httpool.https(true))~
``````````````


#### 定义

`https(f bool) HttpPoolConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `bool` | 是否使用 HTTPS |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpPoolConfigOption` | 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzzx 等 |


### noFixContentLength

#### 详细描述
noFixContentLength 是一个 HTTP 连接池/批量请求配置选项，用于设置是否不自动修复 Content-Length 头

参数:

  - f: 是否禁止自动修复 Content-Length



返回值:

  - 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzzx 等




Example:

``````````````yak
// 不自动修复 Content-Length，依赖网络，此处仅作示意
res = httpool.Pool(reqs, httpool.noFixContentLength(true))~
``````````````


#### 定义

`noFixContentLength(f bool) HttpPoolConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `bool` | 是否禁止自动修复 Content-Length |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpPoolConfigOption` | 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzzx 等 |


### noRedirect

#### 详细描述
noRedirect 是一个 HTTP 连接池配置选项，用于设置是否禁止跟随重定向

参数:

  - i: 是否禁止跟随重定向



返回值:

  - 一个连接池配置选项，作为可变参数传入 httpool.Pool




Example:

``````````````yak
// 禁止跟随重定向，依赖网络，此处仅作示意
res = httpool.Pool(reqs, httpool.noRedirect(true))~
``````````````


#### 定义

`noRedirect(i bool) HttpPoolConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `bool` | 是否禁止跟随重定向 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpPoolConfigOption` | 一个连接池配置选项，作为可变参数传入 httpool.Pool |


### perRequestTimeout

#### 详细描述
perRequestTimeout 是一个 HTTP 连接池/批量请求配置选项，用于设置单个请求的超时时间（单位：秒）

参数:

  - f: 超时时间，单位为秒，支持小数



返回值:

  - 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzz / fuzzx 等




Example:

``````````````yak
// 设置单请求超时 5 秒，依赖网络，此处仅作示意
res = httpool.Pool(reqs, httpool.perRequestTimeout(5))~
``````````````


#### 定义

`perRequestTimeout(f float64) HttpPoolConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `float64` | 超时时间，单位为秒，支持小数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpPoolConfigOption` | 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzz / fuzzx 等 |


### port

#### 详细描述
port 是一个 HTTP 连接池/批量请求配置选项，用于强制指定请求实际连接的目标端口

参数:

  - port: 目标端口



返回值:

  - 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzzx 等




Example:

``````````````yak
// 强制连接 8080 端口，依赖网络，此处仅作示意
res = httpool.Pool(reqs, httpool.host("127.0.0.1", false), httpool.port(8080))~
``````````````


#### 定义

`port(port int) HttpPoolConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| port | `int` | 目标端口 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpPoolConfigOption` | 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzzx 等 |


### proxy

#### 详细描述
proxy 是一个 HTTP 连接池/批量请求配置选项，用于设置请求所使用的代理（支持多个，依次尝试）

参数:

  - proxies: 一个或多个代理地址，支持 http、https、socks4、socks5 协议



返回值:

  - 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzzx 等




Example:

``````````````yak
// 通过本地代理发送，依赖网络，此处仅作示意
res = httpool.Pool(reqs, httpool.proxy("http://127.0.0.1:8083"))~
``````````````


#### 定义

`proxy(proxies ...string) HttpPoolConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| proxies | `...string` | 一个或多个代理地址，支持 http、https、socks4、socks5 协议 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpPoolConfigOption` | 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzzx 等 |


### rawMode

#### 详细描述
rawMode 是一个 HTTP 连接池配置选项，用于设置是否以原始报文模式发送（不做额外解析处理）

参数:

  - b: 是否启用原始报文模式



返回值:

  - 一个连接池配置选项，作为可变参数传入 httpool.Pool




Example:

``````````````yak
// 以原始报文模式发送，依赖网络，此处仅作示意
res = httpool.Pool(reqs, httpool.rawMode(true))~
``````````````


#### 定义

`rawMode(b bool) HttpPoolConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` | 是否启用原始报文模式 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpPoolConfigOption` | 一个连接池配置选项，作为可变参数传入 httpool.Pool |


### redirectTimes

#### 详细描述
redirectTimes 是一个 HTTP 连接池/批量请求配置选项，用于设置最大重定向跟随次数

参数:

  - f: 最大重定向次数



返回值:

  - 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzzx 等




Example:

``````````````yak
// 最多跟随 3 次重定向，依赖网络，此处仅作示意
res = httpool.Pool(reqs, httpool.redirectTimes(3))~
``````````````


#### 定义

`redirectTimes(f int) HttpPoolConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `int` | 最大重定向次数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpPoolConfigOption` | 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzzx 等 |


### size

#### 详细描述
size 是一个 HTTP 连接池/批量请求配置选项，用于设置并发请求数量（并发上限）

参数:

  - i: 并发数量



返回值:

  - 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzz / fuzzx 等




Example:

``````````````yak
// 设置 20 并发，依赖网络，此处仅作示意
res = httpool.Pool(reqs, httpool.size(20))~
``````````````


#### 定义

`size(i int) HttpPoolConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `int` | 并发数量 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpPoolConfigOption` | 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzz / fuzzx 等 |


