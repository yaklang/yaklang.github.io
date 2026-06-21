# fuzz {#library-fuzz}

`fuzz` 库是 yaklang 的 Web 模糊测试核心，围绕"FuzzHTTPRequest"对 HTTP 请求的各个部位（路径、参数、Header、Body、Cookie 等）做变异与批量发包，是漏洞探测与参数爆破的主力工具。它同时提供字符串模糊（fuzztag）与协议数据变异能力。

典型使用场景：

- 构造请求：`fuzz.HTTPRequest` / `fuzz.MustHTTPRequest` 从原始报文构建可变异请求，`fuzz.UrlToHTTPRequest` / `fuzz.UrlsToHTTPRequests` 从 URL 构建。
- 字符串变异：`fuzz.Strings` / `fuzz.StringsWithParam` / `fuzz.StringsFunc` 用 fuzztag 语法批量生成 Payload，`fuzz.FuzzCalcExpr` 生成数学表达式探测。
- 协议数据：`fuzz.ProtobufBytes` / `fuzz.ProtobufJSON` / `fuzz.ProtobufHex` / `fuzz.ProtobufYAML` 解析与变异 Protobuf。
- 发包池：`fuzz.WithConcurrentLimit` / `fuzz.WithDelay` / `fuzz.WithTimeOut` 控制并发与节流，`fuzz.https` / `fuzz.proxy` / `fuzz.context` 控制传输。

与相邻库的关系：`fuzz` 与 `poc`（单发/精确请求）互补——`poc` 偏"构造与发送一个确定请求"，`fuzz` 偏"对请求批量变异探测"；爬取（`crawler`）得到的请求常交给 `fuzz` 做深入测试。`fuzzx` 是其更新的变体。

快速上手（fuzztag 字符串变异，本地生成 Payload，不出网即可验证）：

```yak
// fuzztag 语法: {{int(1-3)}} 展开为 1、2、3, 与前缀拼接生成一组 payload
payloads = fuzz.Strings("admin{{int(1-3)}}")
println(payloads)                       // 预期输出: [admin1 admin2 admin3]
assert len(payloads) == 3, "int(1-3) should expand to 3 payloads"

// 常见用途: 把生成的 payload 套进请求做批量变异(需要可达目标, 这里仅示意)
// for p in payloads {
//     rsp, req = fuzz.HTTPRequest(`GET /?id=__P__ HTTP/1.1\r\nHost: example.com\r\n\r\n`)~ ...
// }
```

> 共 24 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [fuzz.FuzzCalcExpr](#fuzzcalcexpr) | - | `map[string]any` | 生成一组用于表达式注入(SSTI/计算型)探测的随机日期相关变量与计算表达式 |
| [fuzz.FuzzCalcExprInt32Safe](#fuzzcalcexprint32safe) | - | `map[string]any` | 生成一组用于表达式注入(SSTI/计算型)探测的随机变量，保证减法结果在 int32 安全范围内 |
| [fuzz.FuzzCalcExprInt64Safe](#fuzzcalcexprint64safe) | - | `map[string]any` | 生成一组用于表达式注入(SSTI/计算型)探测的随机变量，保证减法结果在 int64 安全范围内 |
| [fuzz.ProtobufBytes](#protobufbytes) | `i any` | `*ProtobufRecords` | 解析 Protobuf 编码的字节流，返回可读取/变形的 Protobuf 记录集合对象 |
| [fuzz.ProtobufHex](#protobufhex) | `i any` | `*ProtobufRecords` | 解析十六进制字符串表示的 Protobuf 编码数据，返回可读取/变形的 Protobuf 记录集合对象 |
| [fuzz.ProtobufJSON](#protobufjson) | `i any` | `*ProtobufRecords` | 从 JSON 描述还原 Protobuf 记录集合对象（与 ProtobufRecords.ToJSON 互逆） |
| [fuzz.ProtobufYAML](#protobufyaml) | `i any` | `*ProtobufRecords` | 从 YAML 描述还原 Protobuf 记录集合对象（与 ProtobufRecords.ToYAML 互逆） |
| [fuzz.Strings](#strings) | `i any` | `[]string` | 使用 fuzztag 渲染规则，将一个模板字符串展开成一组字符串结果 |
| [fuzz.StringsWithParam](#stringswithparam) | `i any, i2 any` | `[]string` | 使用 fuzztag 渲染模板，并允许传入额外的命名参数表参与渲染 |
| [fuzz.UrlToHTTPRequest](#urltohttprequest) | `method string, i any` | `*mutate.FuzzHTTPRequest, error` | 根据请求方法与 URL 构造一个 HTTP Fuzz 请求对象，便于后续做参数变形与发包 |
| [fuzz.WithConcurrentLimit](#withconcurrentlimit) | `i int` | `HttpPoolConfigOption` | size 是一个 HTTP 连接池/批量请求配置选项，用于设置并发请求数量（并发上限） |
| [fuzz.WithDelay](#withdelay) | `b float64` | `HttpPoolConfigOption` | delay 是一个 HTTP 连接池/批量请求配置选项，用于设置每个请求之间的固定延迟秒数 |
| [fuzz.WithNamingContext](#withnamingcontext) | `invokerName string` | `HttpPoolConfigOption` | namingContext 是一个 HTTP 连接池/批量请求配置选项，用于设置命名调用上下文以便对并发任务进行分组限流 |
| [fuzz.WithTimeOut](#withtimeout) | `f float64` | `HttpPoolConfigOption` | perRequestTimeout 是一个 HTTP 连接池/批量请求配置选项，用于设置单个请求的超时时间（单位：秒） |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [fuzz.HTTPRequest](#httprequest) | `i any, opts ...BuildFuzzHTTPRequestOption` | `*FuzzHTTPRequest, error` | 根据原始请求报文构造一个 HTTP Fuzz 请求对象，用于对请求各部分进行参数变形与发包 |
| [fuzz.MustHTTPRequest](#musthttprequest) | `i any, opts ...BuildFuzzHTTPRequestOption` | `*FuzzHTTPRequest` | 根据原始请求报文构造一个 HTTP Fuzz 请求对象，构造失败时不返回错误（仅记录日志），便于链式调用 |
| [fuzz.StringsFunc](#stringsfunc) | `i any, cb func(i *mutate.MutateResult), params ...any` | `error` | 使用 fuzztag 渲染模板，并为每个渲染结果回调一次，便于流式处理大量结果 |
| [fuzz.UrlsToHTTPRequests](#urlstohttprequests) | `target ...any` | `*FuzzHTTPRequestBatch, error` | 将一个或多个 URL 转换成可批量变形发包的 HTTP Fuzz 请求批次对象 |

## 函数详情

### FuzzCalcExpr {#fuzzcalcexpr}

```go
FuzzCalcExpr() map[string]any
```

生成一组用于表达式注入(SSTI/计算型)探测的随机日期相关变量与计算表达式

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `map[string]any` | 包含 year、month、day、expr、result 等键的变量表，用于构造与校验计算型注入 payload |

**示例**

``````````````yak
// 生成计算型注入变量，此处仅作示意
vars = fuzz.FuzzCalcExpr()
println(vars["expr"])
``````````````

---

### FuzzCalcExprInt32Safe {#fuzzcalcexprint32safe}

```go
FuzzCalcExprInt32Safe() map[string]any
```

生成一组用于表达式注入(SSTI/计算型)探测的随机变量，保证减法结果在 int32 安全范围内

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `map[string]any` | 包含 num1、num2、expr、result 等键的变量表，用于构造与校验计算型注入 payload |

**示例**

``````````````yak
// 生成 int32 安全的计算型注入变量，此处仅作示意
vars = fuzz.FuzzCalcExprInt32Safe()
println(vars["expr"])
``````````````

---

### FuzzCalcExprInt64Safe {#fuzzcalcexprint64safe}

```go
FuzzCalcExprInt64Safe() map[string]any
```

生成一组用于表达式注入(SSTI/计算型)探测的随机变量，保证减法结果在 int64 安全范围内

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `map[string]any` | 包含 num1、num2、expr、result 等键的变量表，用于构造与校验计算型注入 payload |

**示例**

``````````````yak
// 生成 int64 安全的计算型注入变量，此处仅作示意
vars = fuzz.FuzzCalcExprInt64Safe()
println(vars["expr"])
``````````````

---

### ProtobufBytes {#protobufbytes}

```go
ProtobufBytes(i any) *ProtobufRecords
```

解析 Protobuf 编码的字节流，返回可读取/变形的 Protobuf 记录集合对象

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | Protobuf 编码的字节流（字符串或字节数组） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*ProtobufRecords` | Protobuf 记录集合对象，可用于查看与 fuzz 变形 |

**示例**

``````````````yak
// 解析 protobuf 字节流并打印结构，此处仅作示意
records = fuzz.ProtobufBytes(raw)
println(records.String())
``````````````

---

### ProtobufHex {#protobufhex}

```go
ProtobufHex(i any) *ProtobufRecords
```

解析十六进制字符串表示的 Protobuf 编码数据，返回可读取/变形的 Protobuf 记录集合对象

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 十六进制编码的 Protobuf 数据字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*ProtobufRecords` | Protobuf 记录集合对象，可用于查看与 fuzz 变形 |

**示例**

``````````````yak
// 解析 hex 形式的 protobuf 数据，此处仅作示意
records = fuzz.ProtobufHex("0a0568656c6c6f")
println(records.String())
``````````````

---

### ProtobufJSON {#protobufjson}

```go
ProtobufJSON(i any) *ProtobufRecords
```

从 JSON 描述还原 Protobuf 记录集合对象（与 ProtobufRecords.ToJSON 互逆）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 描述 Protobuf 记录的 JSON 字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*ProtobufRecords` | Protobuf 记录集合对象，可用于序列化回字节流或 fuzz 变形 |

**示例**

``````````````yak
// 从 JSON 还原 protobuf 记录，此处仅作示意
records = fuzz.ProtobufJSON(jsonStr)
println(records.ToHex())
``````````````

---

### ProtobufYAML {#protobufyaml}

```go
ProtobufYAML(i any) *ProtobufRecords
```

从 YAML 描述还原 Protobuf 记录集合对象（与 ProtobufRecords.ToYAML 互逆）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 描述 Protobuf 记录的 YAML 字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*ProtobufRecords` | Protobuf 记录集合对象，可用于序列化回字节流或 fuzz 变形 |

**示例**

``````````````yak
// 从 YAML 还原 protobuf 记录，此处仅作示意
records = fuzz.ProtobufYAML(yamlStr)
println(records.ToHex())
``````````````

---

### Strings {#strings}

```go
Strings(i any) []string
```

使用 fuzztag 渲染规则，将一个模板字符串展开成一组字符串结果

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 含 fuzztag 的模板（如 &#34;{{i(1-3)}}&#34;），也可以是普通字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]string` | 渲染展开后的字符串列表 |

**示例：示例：fuzz.Strings 的基本用法(整数范围展开)**

``````````````yak
// 关键词: fuzz.Strings, fuzztag, 整数范围
// {{int(a-b)}} 把闭区间内每个整数都展开成一个结果, 常用于遍历 id/页码等
results = fuzz.Strings("id={{int(1-3)}}")
println(results)   // 预期输出: [id=1 id=2 id=3]
assert len(results) == 3, "int(1-3) should expand to 3 results"
``````````````

**示例：示例：fuzz.Strings 的列表与笛卡尔组合**

``````````````yak
// 关键词: fuzz.Strings, list, 笛卡尔积
// {{list(a|b|c)}} 按 | 分隔逐项展开
single = fuzz.Strings("{{list(admin|root|guest)}}")
println(single)    // 预期输出: [admin root guest]
assert len(single) == 3, "list should expand to 3 payloads"
// 同一模板里有多个 fuzztag 时, 各标签的结果做笛卡尔积组合
combo = fuzz.Strings("{{int(1-2)}}-{{list(x|y)}}") // 2 x 2 = 4 种组合
println(combo)     // 预期输出: [1-x 2-x 1-y 2-y]
assert len(combo) == 4, "two tags should form a cartesian product"
``````````````

---

### StringsWithParam {#stringswithparam}

```go
StringsWithParam(i any, i2 any) []string
```

使用 fuzztag 渲染模板，并允许传入额外的命名参数表参与渲染

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 含 fuzztag 的模板字符串 |
| i2 | `any` | 额外参数表（map），可被模板中的 {{params(...)}} 等标签引用 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]string` | 渲染展开后的字符串列表 |

**示例**

``````````````yak
results = fuzz.StringsWithParam("{{params(p)}}", {"p": "abc"})
println(results)   // OUT: [abc]
assert results[0] == "abc", "param p should be rendered into result"
``````````````

---

### UrlToHTTPRequest {#urltohttprequest}

```go
UrlToHTTPRequest(method string, i any) (*mutate.FuzzHTTPRequest, error)
```

根据请求方法与 URL 构造一个 HTTP Fuzz 请求对象，便于后续做参数变形与发包

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| method | `string` | 请求方法，如 &#34;GET&#34;、&#34;POST&#34; |
| i | `any` | 目标 URL |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*mutate.FuzzHTTPRequest` | 构造好的 HTTP Fuzz 请求对象 |
| r2 | `error` | 错误信息，URL 解析失败时返回非空 |

**示例**

``````````````yak
freq = fuzz.UrlToHTTPRequest("GET", "https://www.example.com/a?b=1")~
freq.Show()
``````````````

---

### WithConcurrentLimit {#withconcurrentlimit}

```go
WithConcurrentLimit(i int) HttpPoolConfigOption
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

### WithDelay {#withdelay}

```go
WithDelay(b float64) HttpPoolConfigOption
```

delay 是一个 HTTP 连接池/批量请求配置选项，用于设置每个请求之间的固定延迟秒数

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

### WithNamingContext {#withnamingcontext}

```go
WithNamingContext(invokerName string) HttpPoolConfigOption
```

namingContext 是一个 HTTP 连接池/批量请求配置选项，用于设置命名调用上下文以便对并发任务进行分组限流

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

### WithTimeOut {#withtimeout}

```go
WithTimeOut(f float64) HttpPoolConfigOption
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

### HTTPRequest {#httprequest}

```go
HTTPRequest(i any, opts ...BuildFuzzHTTPRequestOption) (*FuzzHTTPRequest, error)
```

根据原始请求报文构造一个 HTTP Fuzz 请求对象，用于对请求各部分进行参数变形与发包

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 原始 HTTP 请求报文（字符串、字节数组或 *http.Request） |

**可选参数**

可作为可变参数 `opts ...BuildFuzzHTTPRequestOption` 传入选项；共 6 个可用选项，详见 [BuildFuzzHTTPRequestOption 选项列表](#option-buildfuzzhttprequestoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*FuzzHTTPRequest` | 构造好的 HTTP Fuzz 请求对象 |
| r2 | `error` | 错误信息，报文解析失败时返回非空 |

**示例**

``````````````yak
raw = `GET /?a=1 HTTP/1.1
Host: www.example.com

`
freq = fuzz.HTTPRequest(raw)~
freq.Show()
``````````````

---

### MustHTTPRequest {#musthttprequest}

```go
MustHTTPRequest(i any, opts ...BuildFuzzHTTPRequestOption) *FuzzHTTPRequest
```

根据原始请求报文构造一个 HTTP Fuzz 请求对象，构造失败时不返回错误（仅记录日志），便于链式调用

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 原始 HTTP 请求报文（字符串、字节数组或 *http.Request） |

**可选参数**

可作为可变参数 `opts ...BuildFuzzHTTPRequestOption` 传入选项；共 6 个可用选项，详见 [BuildFuzzHTTPRequestOption 选项列表](#option-buildfuzzhttprequestoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*FuzzHTTPRequest` | 构造好的 HTTP Fuzz 请求对象（失败时可能为 nil） |

**示例**

``````````````yak
raw = `GET / HTTP/1.1
Host: www.example.com

`
freq = fuzz.MustHTTPRequest(raw)
freq.Show()
``````````````

---

### StringsFunc {#stringsfunc}

```go
StringsFunc(i any, cb func(i *mutate.MutateResult), params ...any) error
```

使用 fuzztag 渲染模板，并为每个渲染结果回调一次，便于流式处理大量结果

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 含 fuzztag 的模板字符串 |
| cb | `func(i *mutate.MutateResult)` | 针对每个渲染结果触发的回调函数，参数为单个变形结果 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| params | `...any` | 可选的额外参数表，参与模板渲染 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息，渲染失败时返回非空 |

**示例**

``````````````yak
fuzz.StringsFunc("{{i(1-3)}}", func(result) {
    println(result.Result)
})~
``````````````

---

### UrlsToHTTPRequests {#urlstohttprequests}

```go
UrlsToHTTPRequests(target ...any) (*FuzzHTTPRequestBatch, error)
```

将一个或多个 URL 转换成可批量变形发包的 HTTP Fuzz 请求批次对象

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| target | `...any` | 一个或多个 URL（字符串），支持 fuzztag 展开 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*FuzzHTTPRequestBatch` | HTTP Fuzz 请求批次对象，可对其统一做参数变形与批量发包 |
| r2 | `error` | 错误信息，无有效请求时返回非空 |

**示例**

``````````````yak
batch = fuzz.UrlsToHTTPRequests("https://www.example.com/", "https://www.example.com/login")~
batch.Show()
``````````````

---

## 可变参数选项列表

以下按选项类型汇总全部可变参数选项(原先重复在各主函数下的选项表已收拢到此处)：

### 1. 类型：BuildFuzzHTTPRequestOption {#option-buildfuzzhttprequestoption}

涉及到的函数有：[fuzz.HTTPRequest](#httprequest)、[fuzz.MustHTTPRequest](#musthttprequest)

|选项函数|参数|返回值|说明|
|:--|:--|:--|:--|
| `fuzz.context` | `ctx context.Context` | `BuildFuzzHTTPRequestOption` | 是一个 HTTP Fuzz 请求构造选项，用于传入上下文以便外部取消变形与发包任务 |
| `fuzz.https` | `i bool` | `BuildFuzzHTTPRequestOption` | 是一个 HTTP Fuzz 请求构造选项，用于设置该请求是否以 HTTPS 协议发送 |
| `fuzz.noEncode` | `i bool` | `BuildFuzzHTTPRequestOption` | 是一个 HTTP Fuzz 请求构造选项，用于设置是否禁用对 fuzz 结果的自动编码 |
| `fuzz.noEscapeHTML` | `i bool` | `BuildFuzzHTTPRequestOption` | 是一个 HTTP Fuzz 请求构造选项，用于设置是否禁用对内容的 HTML 转义 |
| `fuzz.proxy` | `i string` | `BuildFuzzHTTPRequestOption` | 是一个 HTTP Fuzz 请求构造选项，用于设置发包时使用的代理地址 |
| `fuzz.showTag` | - | `BuildFuzzHTTPRequestOption` | 是一个 HTTP Fuzz 请求构造选项，用于以更友好的方式展示 fuzztag（便于阅读与调试） |

