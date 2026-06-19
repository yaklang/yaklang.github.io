# fuzzx

|函数名|函数描述/介绍|
|:------|:--------|
| [fuzzx.MustNewRequest](#mustnewrequest) |MustNewRequest 根据原始请求报文构造一个 fuzzx 请求对象，报文非法时直接 panic，便于在确定输入合法时简化调用 参数: - raw: 原始 HTTP 请求报文字节数组 返回值: - 构造好的 fuzzx 请求对象|
| [fuzzx.NewRequest](#newrequest) |NewRequest 根据原始请求报文构造一个 fuzzx 请求对象，用于新一代的 HTTP 请求变形与批量发包 参数: - raw: 原始 HTTP 请求报文字节数组 返回值: - 构造好的 fuzzx 请求对象 - 错误信息，报文非法时返回非空|
| [fuzzx.concurrentLimit](#concurrentlimit) |size 是一个 HTTP 连接池/批量请求配置选项，用于设置并发请求数量（并发上限） 参数: - i: 并发数量 返回值: - 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzz / fuzzx 等|
| [fuzzx.connPool](#connpool) |connPool 是一个 HTTP 连接池/批量请求配置选项，用于设置是否复用底层 TCP 连接池以提升性能 参数: - b: 是否启用连接池复用 返回值: - 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzzx 等|
| [fuzzx.context](#context) |context 是一个 HTTP 连接池/批量请求配置选项，用于传入上下文以便外部取消批量任务 参数: - ctx: 上下文对象 返回值: - 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzzx 等|
| [fuzzx.delay](#delay) |delay 是一个 HTTP 连接池/批量请求配置选项，用于设置每个请求之间的固定延迟秒数 参数: - b: 延迟时间，单位为秒，支持小数 返回值: - 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzz.Exec / fuzzx 等|
| [fuzzx.fromPlugin](#fromplugin) |fromPlugin 是一个 HTTP 连接池/批量请求配置选项，用于标记请求来源的插件名称 参数: - plugin: 来源插件名称 返回值: - 一个连接池配置选项，作为可变参数传入 fuzzx 等|
| [fuzzx.host](#host) |host 是一个 HTTP 连接池/批量请求配置选项，用于强制指定请求实际连接的目标主机（覆盖报文中的 Host） 参数: - h: 目标主机地址（可包含端口或 scheme） - isHttps: 当地址未带端口时，是否按 HTTPS 推断默认端口（443/80） 返回值: - 一个连接池配置选项...|
| [fuzzx.https](#https) |https 是一个 HTTP 连接池/批量请求配置选项，用于设置是否以 HTTPS 协议发送请求 参数: - f: 是否使用 HTTPS 返回值: - 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzzx 等|
| [fuzzx.namingContext](#namingcontext) |namingContext 是一个 HTTP 连接池/批量请求配置选项，用于设置命名调用上下文以便对并发任务进行分组限流 参数: - invokerName: 调用者名称，用于并发分组标识 返回值: - 一个连接池配置选项，作为可变参数传入 fuzz / fuzzx 等|
| [fuzzx.noFixContentLength](#nofixcontentlength) |noFixContentLength 是一个 HTTP 连接池/批量请求配置选项，用于设置是否不自动修复 Content-Length 头 参数: - f: 是否禁止自动修复 Content-Length 返回值: - 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzzx ...|
| [fuzzx.noRedirect](#noredirect) |noRedirect 是一个 HTTP 连接池/批量请求配置选项，用于设置是否禁止跟随重定向 参数: - i: 是否禁止跟随重定向 返回值: - 一个连接池配置选项，作为可变参数传入 fuzzx / fuzz 等|
| [fuzzx.port](#port) |port 是一个 HTTP 连接池/批量请求配置选项，用于强制指定请求实际连接的目标端口 参数: - port: 目标端口 返回值: - 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzzx 等|
| [fuzzx.proxy](#proxy) |proxy 是一个 HTTP 连接池/批量请求配置选项，用于设置请求所使用的代理（支持多个，依次尝试） 参数: - proxies: 一个或多个代理地址，支持 http、https、socks4、socks5 协议 返回值: - 一个连接池配置选项，作为可变参数传入 httpool.Pool / f...|
| [fuzzx.redirectTimes](#redirecttimes) |redirectTimes 是一个 HTTP 连接池/批量请求配置选项，用于设置最大重定向跟随次数 参数: - f: 最大重定向次数 返回值: - 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzzx 等|
| [fuzzx.runtimeID](#runtimeid) |runtimeID 是一个 HTTP 连接池/批量请求配置选项，用于设置运行时 ID 以便结果关联与追踪 参数: - i: 运行时 ID 字符串 返回值: - 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzzx 等|
| [fuzzx.source](#source) |source 是一个 HTTP 连接池/批量请求配置选项，用于标记请求的来源（如关联的插件名） 参数: - i: 来源标识字符串 返回值: - 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzzx 等|
| [fuzzx.timeout](#timeout) |perRequestTimeout 是一个 HTTP 连接池/批量请求配置选项，用于设置单个请求的超时时间（单位：秒） 参数: - f: 超时时间，单位为秒，支持小数 返回值: - 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzz / fuzzx 等|


## 函数定义
### MustNewRequest

#### 详细描述
MustNewRequest 根据原始请求报文构造一个 fuzzx 请求对象，报文非法时直接 panic，便于在确定输入合法时简化调用

参数:

  - raw: 原始 HTTP 请求报文字节数组



返回值:

  - 构造好的 fuzzx 请求对象




Example:

``````````````yak
raw = []byte(`GET / HTTP/1.1
Host: www.example.com

`)
freq = fuzzx.MustNewRequest(raw)
freq.FuzzPath("/a", "/b").Show()
``````````````


#### 定义

`MustNewRequest(raw []byte) *FuzzRequest`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` | 原始 HTTP 请求报文字节数组 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*FuzzRequest` | 构造好的 fuzzx 请求对象 |


### NewRequest

#### 详细描述
NewRequest 根据原始请求报文构造一个 fuzzx 请求对象，用于新一代的 HTTP 请求变形与批量发包

参数:

  - raw: 原始 HTTP 请求报文字节数组



返回值:

  - 构造好的 fuzzx 请求对象

  - 错误信息，报文非法时返回非空




Example:

``````````````yak
raw = []byte(`GET / HTTP/1.1
Host: www.example.com

`)
freq = fuzzx.NewRequest(raw)~
freq.FuzzPath("/a", "/b").Show()
``````````````


#### 定义

`NewRequest(raw []byte) (*FuzzRequest, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` | 原始 HTTP 请求报文字节数组 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*FuzzRequest` | 构造好的 fuzzx 请求对象 |
| r2 | `error` | 错误信息，报文非法时返回非空 |


### concurrentLimit

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

`concurrentLimit(i int) HttpPoolConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `int` | 并发数量 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpPoolConfigOption` | 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzz / fuzzx 等 |


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


### delay

#### 详细描述
delay 是一个 HTTP 连接池/批量请求配置选项，用于设置每个请求之间的固定延迟秒数

参数:

  - b: 延迟时间，单位为秒，支持小数



返回值:

  - 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzz.Exec / fuzzx 等




Example:

``````````````yak
// 设置每个请求间隔 1 秒，依赖网络，此处仅作示意
res = httpool.Pool(reqs, fuzzx.delay(1))~
``````````````


#### 定义

`delay(b float64) HttpPoolConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `float64` | 延迟时间，单位为秒，支持小数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpPoolConfigOption` | 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzz.Exec / fuzzx 等 |


### fromPlugin

#### 详细描述
fromPlugin 是一个 HTTP 连接池/批量请求配置选项，用于标记请求来源的插件名称

参数:

  - plugin: 来源插件名称



返回值:

  - 一个连接池配置选项，作为可变参数传入 fuzzx 等




Example:

``````````````yak
// 标记来源插件，依赖网络，此处仅作示意
res = httpool.Pool(reqs, fuzzx.fromPlugin("my-plugin"))~
``````````````


#### 定义

`fromPlugin(plugin string) HttpPoolConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| plugin | `string` | 来源插件名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpPoolConfigOption` | 一个连接池配置选项，作为可变参数传入 fuzzx 等 |


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


### namingContext

#### 详细描述
namingContext 是一个 HTTP 连接池/批量请求配置选项，用于设置命名调用上下文以便对并发任务进行分组限流

参数:

  - invokerName: 调用者名称，用于并发分组标识



返回值:

  - 一个连接池配置选项，作为可变参数传入 fuzz / fuzzx 等




Example:

``````````````yak
// 设置命名调用上下文，依赖网络，此处仅作示意
res = httpool.Pool(reqs, fuzzx.namingContext("scan-group-1"))~
``````````````


#### 定义

`namingContext(invokerName string) HttpPoolConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| invokerName | `string` | 调用者名称，用于并发分组标识 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpPoolConfigOption` | 一个连接池配置选项，作为可变参数传入 fuzz / fuzzx 等 |


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
noRedirect 是一个 HTTP 连接池/批量请求配置选项，用于设置是否禁止跟随重定向

参数:

  - i: 是否禁止跟随重定向



返回值:

  - 一个连接池配置选项，作为可变参数传入 fuzzx / fuzz 等




Example:

``````````````yak
// 禁止跟随重定向，依赖网络，此处仅作示意
res = httpool.Pool(reqs, fuzzx.noRedirect(true))~
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
| r1 | `HttpPoolConfigOption` | 一个连接池配置选项，作为可变参数传入 fuzzx / fuzz 等 |


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


### runtimeID

#### 详细描述
runtimeID 是一个 HTTP 连接池/批量请求配置选项，用于设置运行时 ID 以便结果关联与追踪

参数:

  - i: 运行时 ID 字符串



返回值:

  - 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzzx 等




Example:

``````````````yak
// 设置运行时 ID，依赖网络，此处仅作示意
res = httpool.Pool(reqs, fuzzx.runtimeID("task-001"))~
``````````````


#### 定义

`runtimeID(i string) HttpPoolConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` | 运行时 ID 字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpPoolConfigOption` | 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzzx 等 |


### source

#### 详细描述
source 是一个 HTTP 连接池/批量请求配置选项，用于标记请求的来源（如关联的插件名）

参数:

  - i: 来源标识字符串



返回值:

  - 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzzx 等




Example:

``````````````yak
// 标记请求来源，依赖网络，此处仅作示意
res = httpool.Pool(reqs, fuzzx.source("my-plugin"))~
``````````````


#### 定义

`source(i string) HttpPoolConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` | 来源标识字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpPoolConfigOption` | 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzzx 等 |


### timeout

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

`timeout(f float64) HttpPoolConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `float64` | 超时时间，单位为秒，支持小数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpPoolConfigOption` | 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzz / fuzzx 等 |


