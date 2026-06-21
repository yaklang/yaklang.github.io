# fuzzx {#library-fuzzx}

`fuzzx` 库是 `fuzz` 的新一代实现，围绕 `FuzzRequest` 对 HTTP 请求做变异与高性能批量发包，提供更清晰的请求构造与连接池/重定向控制，是 Web 模糊测试的推荐入口之一。

典型使用场景：

- 构造请求：`fuzzx.NewRequest` / `fuzzx.MustNewRequest` 从原始报文构建可变异请求。
- 传输控制：`fuzzx.https` / `fuzzx.host` / `fuzzx.port` / `fuzzx.proxy` 配置目标与代理，`fuzzx.concurrentLimit` / `fuzzx.delay` / `fuzzx.timeout` / `fuzzx.connPool` 控制并发与连接池，`fuzzx.noRedirect` / `fuzzx.redirectTimes` / `fuzzx.noFixContentLength` 控制重定向与报文修正。

与相邻库的关系：`fuzzx` 与 `fuzz` 同源、定位一致（HTTP 变异测试），常配合 `httpool`（请求池）与 `poc`（精确请求）使用。

> 共 18 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [fuzzx.MustNewRequest](#mustnewrequest) | `raw []byte` | `*FuzzRequest` | 根据原始请求报文构造一个 fuzzx 请求对象，报文非法时直接 panic，便于在确定输入合法时简化调用 |
| [fuzzx.NewRequest](#newrequest) | `raw []byte` | `*FuzzRequest, error` | 根据原始请求报文构造一个 fuzzx 请求对象，用于新一代的 HTTP 请求变形与批量发包 |
| [fuzzx.concurrentLimit](#concurrentlimit) | `i int` | `HttpPoolConfigOption` | size 是一个 HTTP 连接池/批量请求配置选项，用于设置并发请求数量（并发上限） |
| [fuzzx.connPool](#connpool) | `b bool` | `HttpPoolConfigOption` | 是一个 HTTP 连接池/批量请求配置选项，用于设置是否复用底层 TCP 连接池以提升性能 |
| [fuzzx.context](#context) | `ctx context.Context` | `HttpPoolConfigOption` | 是一个 HTTP 连接池/批量请求配置选项，用于传入上下文以便外部取消批量任务 |
| [fuzzx.delay](#delay) | `b float64` | `HttpPoolConfigOption` | 是一个 HTTP 连接池/批量请求配置选项，用于设置每个请求之间的固定延迟秒数 |
| [fuzzx.fromPlugin](#fromplugin) | `plugin string` | `HttpPoolConfigOption` | 是一个 HTTP 连接池/批量请求配置选项，用于标记请求来源的插件名称 |
| [fuzzx.host](#host) | `h string, isHttps bool` | `HttpPoolConfigOption` | 是一个 HTTP 连接池/批量请求配置选项，用于强制指定请求实际连接的目标主机（覆盖报文中的 Host） |
| [fuzzx.https](#https) | `f bool` | `HttpPoolConfigOption` | 是一个 HTTP 连接池/批量请求配置选项，用于设置是否以 HTTPS 协议发送请求 |
| [fuzzx.namingContext](#namingcontext) | `invokerName string` | `HttpPoolConfigOption` | 是一个 HTTP 连接池/批量请求配置选项，用于设置命名调用上下文以便对并发任务进行分组限流 |
| [fuzzx.noFixContentLength](#nofixcontentlength) | `f bool` | `HttpPoolConfigOption` | 是一个 HTTP 连接池/批量请求配置选项，用于设置是否不自动修复 Content-Length 头 |
| [fuzzx.noRedirect](#noredirect) | `i bool` | `HttpPoolConfigOption` | 是一个 HTTP 连接池/批量请求配置选项，用于设置是否禁止跟随重定向 |
| [fuzzx.port](#port) | `port int` | `HttpPoolConfigOption` | 是一个 HTTP 连接池/批量请求配置选项，用于强制指定请求实际连接的目标端口 |
| [fuzzx.redirectTimes](#redirecttimes) | `f int` | `HttpPoolConfigOption` | 是一个 HTTP 连接池/批量请求配置选项，用于设置最大重定向跟随次数 |
| [fuzzx.runtimeID](#runtimeid) | `i string` | `HttpPoolConfigOption` | 是一个 HTTP 连接池/批量请求配置选项，用于设置运行时 ID 以便结果关联与追踪 |
| [fuzzx.source](#source) | `i string` | `HttpPoolConfigOption` | 是一个 HTTP 连接池/批量请求配置选项，用于标记请求的来源（如关联的插件名） |
| [fuzzx.timeout](#timeout) | `f float64` | `HttpPoolConfigOption` | perRequestTimeout 是一个 HTTP 连接池/批量请求配置选项，用于设置单个请求的超时时间（单位：秒） |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [fuzzx.proxy](#proxy) | `proxies ...string` | `HttpPoolConfigOption` | 是一个 HTTP 连接池/批量请求配置选项，用于设置请求所使用的代理（支持多个，依次尝试） |

## 函数详情

### MustNewRequest {#mustnewrequest}

```go
MustNewRequest(raw []byte) *FuzzRequest
```

根据原始请求报文构造一个 fuzzx 请求对象，报文非法时直接 panic，便于在确定输入合法时简化调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| raw | `[]byte` | 原始 HTTP 请求报文字节数组 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*FuzzRequest` | 构造好的 fuzzx 请求对象 |

**示例**

``````````````yak
raw = []byte(`GET / HTTP/1.1
Host: www.example.com

`)
freq = fuzzx.MustNewRequest(raw)
freq.FuzzPath("/a", "/b").Show()
``````````````

---

### NewRequest {#newrequest}

```go
NewRequest(raw []byte) (*FuzzRequest, error)
```

根据原始请求报文构造一个 fuzzx 请求对象，用于新一代的 HTTP 请求变形与批量发包

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| raw | `[]byte` | 原始 HTTP 请求报文字节数组 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*FuzzRequest` | 构造好的 fuzzx 请求对象 |
| r2 | `error` | 错误信息，报文非法时返回非空 |

**示例**

``````````````yak
raw = []byte(`GET / HTTP/1.1
Host: www.example.com

`)
freq = fuzzx.NewRequest(raw)~
freq.FuzzPath("/a", "/b").Show()
``````````````

---

### concurrentLimit {#concurrentlimit}

```go
concurrentLimit(i int) HttpPoolConfigOption
```

size 是一个 HTTP 连接池/批量请求配置选项，用于设置并发请求数量（并发上限）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `int` | 并发数量 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `HttpPoolConfigOption` | 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzz / fuzzx 等 |

**示例**

``````````````yak
// 设置 20 并发，依赖网络，无法本地验证(仅作示意)
res = httpool.Pool(reqs, httpool.size(20))~
``````````````

---

### connPool {#connpool}

```go
connPool(b bool) HttpPoolConfigOption
```

是一个 HTTP 连接池/批量请求配置选项，用于设置是否复用底层 TCP 连接池以提升性能

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| b | `bool` | 是否启用连接池复用 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `HttpPoolConfigOption` | 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzzx 等 |

**示例**

``````````````yak
// 启用连接池复用，依赖网络，无法本地验证(仅作示意)
res = httpool.Pool(reqs, httpool.connPool(true))~
``````````````

---

### context {#context}

```go
context(ctx context.Context) HttpPoolConfigOption
```

是一个 HTTP 连接池/批量请求配置选项，用于传入上下文以便外部取消批量任务

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| ctx | `context.Context` | 上下文对象 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `HttpPoolConfigOption` | 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzzx 等 |

**示例**

``````````````yak
// 传入可取消的上下文，依赖网络，无法本地验证(仅作示意)
ctx = context.New()
res = httpool.Pool(reqs, httpool.context(ctx))~
``````````````

---

### delay {#delay}

```go
delay(b float64) HttpPoolConfigOption
```

是一个 HTTP 连接池/批量请求配置选项，用于设置每个请求之间的固定延迟秒数

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| b | `float64` | 延迟时间，单位为秒，支持小数 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `HttpPoolConfigOption` | 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzz.Exec / fuzzx 等 |

**示例**

``````````````yak
// 设置每个请求间隔 1 秒，依赖网络，无法本地验证(仅作示意)
res = httpool.Pool(reqs, fuzzx.delay(1))~
``````````````

---

### fromPlugin {#fromplugin}

```go
fromPlugin(plugin string) HttpPoolConfigOption
```

是一个 HTTP 连接池/批量请求配置选项，用于标记请求来源的插件名称

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| plugin | `string` | 来源插件名称 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `HttpPoolConfigOption` | 一个连接池配置选项，作为可变参数传入 fuzzx 等 |

**示例**

``````````````yak
// 标记来源插件，依赖网络，无法本地验证(仅作示意)
res = httpool.Pool(reqs, fuzzx.fromPlugin("my-plugin"))~
``````````````

---

### host {#host}

```go
host(h string, isHttps bool) HttpPoolConfigOption
```

是一个 HTTP 连接池/批量请求配置选项，用于强制指定请求实际连接的目标主机（覆盖报文中的 Host）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| h | `string` | 目标主机地址（可包含端口或 scheme） |
| isHttps | `bool` | 当地址未带端口时，是否按 HTTPS 推断默认端口（443/80） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `HttpPoolConfigOption` | 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzzx 等 |

**示例**

``````````````yak
// 强制连接指定主机，依赖网络，无法本地验证(仅作示意)
res = httpool.Pool(reqs, httpool.host("127.0.0.1", false), httpool.port(8080))~
``````````````

---

### https {#https}

```go
https(f bool) HttpPoolConfigOption
```

是一个 HTTP 连接池/批量请求配置选项，用于设置是否以 HTTPS 协议发送请求

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| f | `bool` | 是否使用 HTTPS |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `HttpPoolConfigOption` | 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzzx 等 |

**示例**

``````````````yak
// 以 HTTPS 发送，依赖网络，无法本地验证(仅作示意)
res = httpool.Pool(reqs, httpool.https(true))~
``````````````

---

### namingContext {#namingcontext}

```go
namingContext(invokerName string) HttpPoolConfigOption
```

是一个 HTTP 连接池/批量请求配置选项，用于设置命名调用上下文以便对并发任务进行分组限流

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| invokerName | `string` | 调用者名称，用于并发分组标识 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `HttpPoolConfigOption` | 一个连接池配置选项，作为可变参数传入 fuzz / fuzzx 等 |

**示例**

``````````````yak
// 设置命名调用上下文，依赖网络，无法本地验证(仅作示意)
res = httpool.Pool(reqs, fuzzx.namingContext("scan-group-1"))~
``````````````

---

### noFixContentLength {#nofixcontentlength}

```go
noFixContentLength(f bool) HttpPoolConfigOption
```

是一个 HTTP 连接池/批量请求配置选项，用于设置是否不自动修复 Content-Length 头

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| f | `bool` | 是否禁止自动修复 Content-Length |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `HttpPoolConfigOption` | 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzzx 等 |

**示例**

``````````````yak
// 不自动修复 Content-Length，依赖网络，无法本地验证(仅作示意)
res = httpool.Pool(reqs, httpool.noFixContentLength(true))~
``````````````

---

### noRedirect {#noredirect}

```go
noRedirect(i bool) HttpPoolConfigOption
```

是一个 HTTP 连接池/批量请求配置选项，用于设置是否禁止跟随重定向

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `bool` | 是否禁止跟随重定向 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `HttpPoolConfigOption` | 一个连接池配置选项，作为可变参数传入 fuzzx / fuzz 等 |

**示例**

``````````````yak
// 禁止跟随重定向，依赖网络，无法本地验证(仅作示意)
res = httpool.Pool(reqs, fuzzx.noRedirect(true))~
``````````````

---

### port {#port}

```go
port(port int) HttpPoolConfigOption
```

是一个 HTTP 连接池/批量请求配置选项，用于强制指定请求实际连接的目标端口

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| port | `int` | 目标端口 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `HttpPoolConfigOption` | 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzzx 等 |

**示例**

``````````````yak
// 强制连接 8080 端口，依赖网络，无法本地验证(仅作示意)
res = httpool.Pool(reqs, httpool.host("127.0.0.1", false), httpool.port(8080))~
``````````````

---

### redirectTimes {#redirecttimes}

```go
redirectTimes(f int) HttpPoolConfigOption
```

是一个 HTTP 连接池/批量请求配置选项，用于设置最大重定向跟随次数

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| f | `int` | 最大重定向次数 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `HttpPoolConfigOption` | 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzzx 等 |

**示例**

``````````````yak
// 最多跟随 3 次重定向，依赖网络，无法本地验证(仅作示意)
res = httpool.Pool(reqs, httpool.redirectTimes(3))~
``````````````

---

### runtimeID {#runtimeid}

```go
runtimeID(i string) HttpPoolConfigOption
```

是一个 HTTP 连接池/批量请求配置选项，用于设置运行时 ID 以便结果关联与追踪

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `string` | 运行时 ID 字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `HttpPoolConfigOption` | 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzzx 等 |

**示例**

``````````````yak
// 设置运行时 ID，依赖网络，无法本地验证(仅作示意)
res = httpool.Pool(reqs, fuzzx.runtimeID("task-001"))~
``````````````

---

### source {#source}

```go
source(i string) HttpPoolConfigOption
```

是一个 HTTP 连接池/批量请求配置选项，用于标记请求的来源（如关联的插件名）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `string` | 来源标识字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `HttpPoolConfigOption` | 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzzx 等 |

**示例**

``````````````yak
// 标记请求来源，依赖网络，无法本地验证(仅作示意)
res = httpool.Pool(reqs, fuzzx.source("my-plugin"))~
``````````````

---

### timeout {#timeout}

```go
timeout(f float64) HttpPoolConfigOption
```

perRequestTimeout 是一个 HTTP 连接池/批量请求配置选项，用于设置单个请求的超时时间（单位：秒）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| f | `float64` | 超时时间，单位为秒，支持小数 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `HttpPoolConfigOption` | 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzz / fuzzx 等 |

**示例**

``````````````yak
// 设置单请求超时 5 秒，依赖网络，无法本地验证(仅作示意)
res = httpool.Pool(reqs, httpool.perRequestTimeout(5))~
``````````````

---

## 可变参数函数详情

### proxy {#proxy}

```go
proxy(proxies ...string) HttpPoolConfigOption
```

是一个 HTTP 连接池/批量请求配置选项，用于设置请求所使用的代理（支持多个，依次尝试）

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| proxies | `...string` | 一个或多个代理地址，支持 http、https、socks4、socks5 协议 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `HttpPoolConfigOption` | 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzzx 等 |

**示例**

``````````````yak
// 通过本地代理发送，依赖网络，无法本地验证(仅作示意)
res = httpool.Pool(reqs, httpool.proxy("http://127.0.0.1:8083"))~
``````````````

---

