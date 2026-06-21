# httpool {#library-httpool}

`httpool` 库提供 HTTP 请求池，对一批请求（可结合 fuzztag 变异）做高并发批量发送并流式返回结果，适合大规模探测、批量验证与字典爆破类场景。

典型使用场景：

- 批量发包：`httpool.Pool(i, opts...)` 传入请求（或可变异的模板），返回 `*HttpResult` 的 channel。
- 控制：`httpool.size` / `httpool.perRequestTimeout` 控制并发与超时，`httpool.fuzz` / `httpool.fuzzParams` 启用变异，`httpool.https` / `httpool.host` / `httpool.proxy` / `httpool.rawMode` 控制传输，`httpool.noRedirect` / `httpool.redirectTimes` 控制重定向。

与相邻库的关系：`httpool` 是发包引擎，常作为 `fuzz`/`fuzzx` 的底层批量执行层，也可直接用于大批量 URL 探测。

> 共 15 个函数

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [httpool.Pool](#pool) | `i any, opts ...HttpPoolConfigOption` | `chan *HttpResult, error` | 以并发连接池的方式批量发送 HTTP 请求，输入可以是原始报文、请求列表或 fuzz 对象，返回结果管道 |

## 可变参数函数详情

### Pool {#pool}

```go
Pool(i any, opts ...HttpPoolConfigOption) (chan *HttpResult, error)
```

以并发连接池的方式批量发送 HTTP 请求，输入可以是原始报文、请求列表或 fuzz 对象，返回结果管道

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 待发送的请求源（原始报文 []byte/[][]byte、*http.Request、FuzzHTTPRequest 等） |

**可选参数**

可作为可变参数 `opts ...HttpPoolConfigOption` 传入选项；共 14 个可用选项，详见 [HttpPoolConfigOption 选项列表](#option-httppoolconfigoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `chan *HttpResult` | HTTP 结果管道，逐个产出每个请求的响应结果 |
| r2 | `error` | 错误信息，初始化失败时返回非空 |

**示例**

``````````````yak
// 并发批量发包，依赖网络，无法本地验证(仅作示意)
raw = `GET / HTTP/1.1
Host: www.example.com

`
ch = httpool.Pool(raw, httpool.https(false), httpool.size(10), httpool.perRequestTimeout(5))~
for res = range ch { println(res.Url) }
``````````````

---

## 可变参数选项列表

以下按选项类型汇总全部可变参数选项(原先重复在各主函数下的选项表已收拢到此处)：

### 1. 类型：HttpPoolConfigOption {#option-httppoolconfigoption}

涉及到的函数有：[httpool.Pool](#pool)

|选项函数|参数|返回值|说明|
|:--|:--|:--|:--|
| `httpool.connPool` | `b bool` | `HttpPoolConfigOption` | 是一个 HTTP 连接池/批量请求配置选项，用于设置是否复用底层 TCP 连接池以提升性能 |
| `httpool.context` | `ctx context.Context` | `HttpPoolConfigOption` | 是一个 HTTP 连接池/批量请求配置选项，用于传入上下文以便外部取消批量任务 |
| `httpool.fuzz` | `b bool` | `HttpPoolConfigOption` | 是一个 HTTP 连接池配置选项，用于设置是否对请求模板进行 fuzztag 渲染（变形） |
| `httpool.fuzzParams` | `i any` | `HttpPoolConfigOption` | 是一个 HTTP 连接池配置选项，用于为 fuzztag 渲染提供额外的参数表 |
| `httpool.host` | `h string, isHttps bool` | `HttpPoolConfigOption` | 是一个 HTTP 连接池/批量请求配置选项，用于强制指定请求实际连接的目标主机（覆盖报文中的 Host） |
| `httpool.https` | `f bool` | `HttpPoolConfigOption` | 是一个 HTTP 连接池/批量请求配置选项，用于设置是否以 HTTPS 协议发送请求 |
| `httpool.noFixContentLength` | `f bool` | `HttpPoolConfigOption` | 是一个 HTTP 连接池/批量请求配置选项，用于设置是否不自动修复 Content-Length 头 |
| `httpool.noRedirect` | `i bool` | `HttpPoolConfigOption` | 是一个 HTTP 连接池配置选项，用于设置是否禁止跟随重定向 |
| `httpool.perRequestTimeout` | `f float64` | `HttpPoolConfigOption` | 是一个 HTTP 连接池/批量请求配置选项，用于设置单个请求的超时时间（单位：秒） |
| `httpool.port` | `port int` | `HttpPoolConfigOption` | 是一个 HTTP 连接池/批量请求配置选项，用于强制指定请求实际连接的目标端口 |
| `httpool.proxy` | `proxies ...string` | `HttpPoolConfigOption` | 是一个 HTTP 连接池/批量请求配置选项，用于设置请求所使用的代理（支持多个，依次尝试） |
| `httpool.rawMode` | `b bool` | `HttpPoolConfigOption` | 是一个 HTTP 连接池配置选项，用于设置是否以原始报文模式发送（不做额外解析处理） |
| `httpool.redirectTimes` | `f int` | `HttpPoolConfigOption` | 是一个 HTTP 连接池/批量请求配置选项，用于设置最大重定向跟随次数 |
| `httpool.size` | `i int` | `HttpPoolConfigOption` | 是一个 HTTP 连接池/批量请求配置选项，用于设置并发请求数量（并发上限） |

