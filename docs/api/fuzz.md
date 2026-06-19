# fuzz

|函数名|函数描述/介绍|
|:------|:--------|
| [fuzz.FuzzCalcExpr](#fuzzcalcexpr) |FuzzCalcExpr 生成一组用于表达式注入(SSTI/计算型)探测的随机日期相关变量与计算表达式 返回值: - 包含 year、month、day、expr、result 等键的变量表，用于构造与校验计算型注入 payload|
| [fuzz.FuzzCalcExprInt32Safe](#fuzzcalcexprint32safe) |FuzzCalcExprInt32Safe 生成一组用于表达式注入(SSTI/计算型)探测的随机变量，保证减法结果在 int32 安全范围内 返回值: - 包含 num1、num2、expr、result 等键的变量表，用于构造与校验计算型注入 payload|
| [fuzz.FuzzCalcExprInt64Safe](#fuzzcalcexprint64safe) |FuzzCalcExprInt64Safe 生成一组用于表达式注入(SSTI/计算型)探测的随机变量，保证减法结果在 int64 安全范围内 返回值: - 包含 num1、num2、expr、result 等键的变量表，用于构造与校验计算型注入 payload|
| [fuzz.HTTPRequest](#httprequest) |HTTPRequest 根据原始请求报文构造一个 HTTP Fuzz 请求对象，用于对请求各部分进行参数变形与发包 参数: - i: 原始 HTTP 请求报文（字符串、字节数组或 *http.Request） - opts: 可选构造选项，例如 fuzz.https、fuzz.proxy、fuzz....|
| [fuzz.MustHTTPRequest](#musthttprequest) |MustHTTPRequest 根据原始请求报文构造一个 HTTP Fuzz 请求对象，构造失败时不返回错误（仅记录日志），便于链式调用 参数: - i: 原始 HTTP 请求报文（字符串、字节数组或 *http.Request） - opts: 可选构造选项，例如 fuzz.https、fuzz....|
| [fuzz.ProtobufBytes](#protobufbytes) |ProtobufBytes 解析 Protobuf 编码的字节流，返回可读取/变形的 Protobuf 记录集合对象 参数: - i: Protobuf 编码的字节流（字符串或字节数组） 返回值: - Protobuf 记录集合对象，可用于查看与 fuzz 变形|
| [fuzz.ProtobufHex](#protobufhex) |ProtobufHex 解析十六进制字符串表示的 Protobuf 编码数据，返回可读取/变形的 Protobuf 记录集合对象 参数: - i: 十六进制编码的 Protobuf 数据字符串 返回值: - Protobuf 记录集合对象，可用于查看与 fuzz 变形|
| [fuzz.ProtobufJSON](#protobufjson) |ProtobufJSON 从 JSON 描述还原 Protobuf 记录集合对象（与 ProtobufRecords.ToJSON 互逆） 参数: - i: 描述 Protobuf 记录的 JSON 字符串 返回值: - Protobuf 记录集合对象，可用于序列化回字节流或 fuzz 变形|
| [fuzz.ProtobufYAML](#protobufyaml) |ProtobufYAML 从 YAML 描述还原 Protobuf 记录集合对象（与 ProtobufRecords.ToYAML 互逆） 参数: - i: 描述 Protobuf 记录的 YAML 字符串 返回值: - Protobuf 记录集合对象，可用于序列化回字节流或 fuzz 变形|
| [fuzz.Strings](#strings) |Strings 使用 fuzztag 渲染规则，将一个模板字符串展开成一组字符串结果 参数: - i: 含 fuzztag 的模板（如 &#34;{{i(1-3)}}&#34;），也可以是普通字符串 返回值: - 渲染展开后的字符串列表|
| [fuzz.StringsFunc](#stringsfunc) |StringsFunc 使用 fuzztag 渲染模板，并为每个渲染结果回调一次，便于流式处理大量结果 参数: - i: 含 fuzztag 的模板字符串 - cb: 针对每个渲染结果触发的回调函数，参数为单个变形结果 - params: 可选的额外参数表，参与模板渲染 返回值: - 错误信息，渲染...|
| [fuzz.StringsWithParam](#stringswithparam) |StringsWithParam 使用 fuzztag 渲染模板，并允许传入额外的命名参数表参与渲染 参数: - i: 含 fuzztag 的模板字符串 - i2: 额外参数表（map），可被模板中的 {{params(...)}} 等标签引用 返回值: - 渲染展开后的字符串列表|
| [fuzz.UrlToHTTPRequest](#urltohttprequest) |UrlToHTTPRequest 根据请求方法与 URL 构造一个 HTTP Fuzz 请求对象，便于后续做参数变形与发包 参数: - method: 请求方法，如 &#34;GET&#34;、&#34;POST&#34; - i: 目标 URL 返回值: - 构造好的 HTTP Fuzz 请求对象 - 错误信息，URL 解析失败...|
| [fuzz.UrlsToHTTPRequests](#urlstohttprequests) |UrlsToHTTPRequests 将一个或多个 URL 转换成可批量变形发包的 HTTP Fuzz 请求批次对象 参数: - target: 一个或多个 URL（字符串），支持 fuzztag 展开 返回值: - HTTP Fuzz 请求批次对象，可对其统一做参数变形与批量发包 - 错误信息，无...|
| [fuzz.WithConcurrentLimit](#withconcurrentlimit) |size 是一个 HTTP 连接池/批量请求配置选项，用于设置并发请求数量（并发上限） 参数: - i: 并发数量 返回值: - 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzz / fuzzx 等|
| [fuzz.WithDelay](#withdelay) |delay 是一个 HTTP 连接池/批量请求配置选项，用于设置每个请求之间的固定延迟秒数 参数: - b: 延迟时间，单位为秒，支持小数 返回值: - 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzz.Exec / fuzzx 等|
| [fuzz.WithNamingContext](#withnamingcontext) |namingContext 是一个 HTTP 连接池/批量请求配置选项，用于设置命名调用上下文以便对并发任务进行分组限流 参数: - invokerName: 调用者名称，用于并发分组标识 返回值: - 一个连接池配置选项，作为可变参数传入 fuzz / fuzzx 等|
| [fuzz.WithTimeOut](#withtimeout) |perRequestTimeout 是一个 HTTP 连接池/批量请求配置选项，用于设置单个请求的超时时间（单位：秒） 参数: - f: 超时时间，单位为秒，支持小数 返回值: - 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzz / fuzzx 等|
| [fuzz.context](#context) |context 是一个 HTTP Fuzz 请求构造选项，用于传入上下文以便外部取消变形与发包任务 参数: - ctx: 上下文对象 返回值: - 一个 Fuzz 请求构造选项，作为可变参数传入 fuzz.HTTPRequest 等|
| [fuzz.https](#https) |https 是一个 HTTP Fuzz 请求构造选项，用于设置该请求是否以 HTTPS 协议发送 参数: - i: 是否使用 HTTPS 返回值: - 一个 Fuzz 请求构造选项，作为可变参数传入 fuzz.HTTPRequest 等|
| [fuzz.noEncode](#noencode) |noEncode 是一个 HTTP Fuzz 请求构造选项，用于设置是否禁用对 fuzz 结果的自动编码 参数: - i: 是否禁用自动编码 返回值: - 一个 Fuzz 请求构造选项，作为可变参数传入 fuzz.HTTPRequest 等|
| [fuzz.noEscapeHTML](#noescapehtml) |noEscapeHTML 是一个 HTTP Fuzz 请求构造选项，用于设置是否禁用对内容的 HTML 转义 参数: - i: 是否禁用 HTML 转义 返回值: - 一个 Fuzz 请求构造选项，作为可变参数传入 fuzz.HTTPRequest 等|
| [fuzz.proxy](#proxy) |proxy 是一个 HTTP Fuzz 请求构造选项，用于设置发包时使用的代理地址 参数: - i: 代理地址，支持 http、https、socks5 协议 返回值: - 一个 Fuzz 请求构造选项，作为可变参数传入 fuzz.HTTPRequest 等|
| [fuzz.showTag](#showtag) |showTag 是一个 HTTP Fuzz 请求构造选项，用于以更友好的方式展示 fuzztag（便于阅读与调试） 返回值: - 一个 Fuzz 请求构造选项，作为可变参数传入 fuzz.HTTPRequest 等|


## 函数定义
### FuzzCalcExpr

#### 详细描述
FuzzCalcExpr 生成一组用于表达式注入(SSTI/计算型)探测的随机日期相关变量与计算表达式

返回值:

  - 包含 year、month、day、expr、result 等键的变量表，用于构造与校验计算型注入 payload




Example:

``````````````yak
// 生成计算型注入变量，此处仅作示意
vars = fuzz.FuzzCalcExpr()
println(vars["expr"])
``````````````


#### 定义

`FuzzCalcExpr() map[string]any`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `map[string]any` | 包含 year、month、day、expr、result 等键的变量表，用于构造与校验计算型注入 payload |


### FuzzCalcExprInt32Safe

#### 详细描述
FuzzCalcExprInt32Safe 生成一组用于表达式注入(SSTI/计算型)探测的随机变量，保证减法结果在 int32 安全范围内

返回值:

  - 包含 num1、num2、expr、result 等键的变量表，用于构造与校验计算型注入 payload




Example:

``````````````yak
// 生成 int32 安全的计算型注入变量，此处仅作示意
vars = fuzz.FuzzCalcExprInt32Safe()
println(vars["expr"])
``````````````


#### 定义

`FuzzCalcExprInt32Safe() map[string]any`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `map[string]any` | 包含 num1、num2、expr、result 等键的变量表，用于构造与校验计算型注入 payload |


### FuzzCalcExprInt64Safe

#### 详细描述
FuzzCalcExprInt64Safe 生成一组用于表达式注入(SSTI/计算型)探测的随机变量，保证减法结果在 int64 安全范围内

返回值:

  - 包含 num1、num2、expr、result 等键的变量表，用于构造与校验计算型注入 payload




Example:

``````````````yak
// 生成 int64 安全的计算型注入变量，此处仅作示意
vars = fuzz.FuzzCalcExprInt64Safe()
println(vars["expr"])
``````````````


#### 定义

`FuzzCalcExprInt64Safe() map[string]any`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `map[string]any` | 包含 num1、num2、expr、result 等键的变量表，用于构造与校验计算型注入 payload |


### HTTPRequest

#### 详细描述
HTTPRequest 根据原始请求报文构造一个 HTTP Fuzz 请求对象，用于对请求各部分进行参数变形与发包

参数:

  - i: 原始 HTTP 请求报文（字符串、字节数组或 *http.Request）

  - opts: 可选构造选项，例如 fuzz.https、fuzz.proxy、fuzz.noEncode



返回值:

  - 构造好的 HTTP Fuzz 请求对象

  - 错误信息，报文解析失败时返回非空




Example:

``````````````yak
raw = `GET /?a=1 HTTP/1.1
Host: www.example.com

`
freq = fuzz.HTTPRequest(raw)~
freq.Show()
``````````````


#### 定义

`HTTPRequest(i any, opts ...BuildFuzzHTTPRequestOption) (*FuzzHTTPRequest, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 原始 HTTP 请求报文（字符串、字节数组或 *http.Request） |
| opts | `...BuildFuzzHTTPRequestOption` | 可选构造选项，例如 fuzz.https、fuzz.proxy、fuzz.noEncode |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*FuzzHTTPRequest` | 构造好的 HTTP Fuzz 请求对象 |
| r2 | `error` | 错误信息，报文解析失败时返回非空 |


### MustHTTPRequest

#### 详细描述
MustHTTPRequest 根据原始请求报文构造一个 HTTP Fuzz 请求对象，构造失败时不返回错误（仅记录日志），便于链式调用

参数:

  - i: 原始 HTTP 请求报文（字符串、字节数组或 *http.Request）

  - opts: 可选构造选项，例如 fuzz.https、fuzz.proxy



返回值:

  - 构造好的 HTTP Fuzz 请求对象（失败时可能为 nil）




Example:

``````````````yak
raw = `GET / HTTP/1.1
Host: www.example.com

`
freq = fuzz.MustHTTPRequest(raw)
freq.Show()
``````````````


#### 定义

`MustHTTPRequest(i any, opts ...BuildFuzzHTTPRequestOption) *FuzzHTTPRequest`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 原始 HTTP 请求报文（字符串、字节数组或 *http.Request） |
| opts | `...BuildFuzzHTTPRequestOption` | 可选构造选项，例如 fuzz.https、fuzz.proxy |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*FuzzHTTPRequest` | 构造好的 HTTP Fuzz 请求对象（失败时可能为 nil） |


### ProtobufBytes

#### 详细描述
ProtobufBytes 解析 Protobuf 编码的字节流，返回可读取/变形的 Protobuf 记录集合对象

参数:

  - i: Protobuf 编码的字节流（字符串或字节数组）



返回值:

  - Protobuf 记录集合对象，可用于查看与 fuzz 变形




Example:

``````````````yak
// 解析 protobuf 字节流并打印结构，此处仅作示意
records = fuzz.ProtobufBytes(raw)
println(records.String())
``````````````


#### 定义

`ProtobufBytes(i any) *ProtobufRecords`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | Protobuf 编码的字节流（字符串或字节数组） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ProtobufRecords` | Protobuf 记录集合对象，可用于查看与 fuzz 变形 |


### ProtobufHex

#### 详细描述
ProtobufHex 解析十六进制字符串表示的 Protobuf 编码数据，返回可读取/变形的 Protobuf 记录集合对象

参数:

  - i: 十六进制编码的 Protobuf 数据字符串



返回值:

  - Protobuf 记录集合对象，可用于查看与 fuzz 变形




Example:

``````````````yak
// 解析 hex 形式的 protobuf 数据，此处仅作示意
records = fuzz.ProtobufHex("0a0568656c6c6f")
println(records.String())
``````````````


#### 定义

`ProtobufHex(i any) *ProtobufRecords`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 十六进制编码的 Protobuf 数据字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ProtobufRecords` | Protobuf 记录集合对象，可用于查看与 fuzz 变形 |


### ProtobufJSON

#### 详细描述
ProtobufJSON 从 JSON 描述还原 Protobuf 记录集合对象（与 ProtobufRecords.ToJSON 互逆）

参数:

  - i: 描述 Protobuf 记录的 JSON 字符串



返回值:

  - Protobuf 记录集合对象，可用于序列化回字节流或 fuzz 变形




Example:

``````````````yak
// 从 JSON 还原 protobuf 记录，此处仅作示意
records = fuzz.ProtobufJSON(jsonStr)
println(records.ToHex())
``````````````


#### 定义

`ProtobufJSON(i any) *ProtobufRecords`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 描述 Protobuf 记录的 JSON 字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ProtobufRecords` | Protobuf 记录集合对象，可用于序列化回字节流或 fuzz 变形 |


### ProtobufYAML

#### 详细描述
ProtobufYAML 从 YAML 描述还原 Protobuf 记录集合对象（与 ProtobufRecords.ToYAML 互逆）

参数:

  - i: 描述 Protobuf 记录的 YAML 字符串



返回值:

  - Protobuf 记录集合对象，可用于序列化回字节流或 fuzz 变形




Example:

``````````````yak
// 从 YAML 还原 protobuf 记录，此处仅作示意
records = fuzz.ProtobufYAML(yamlStr)
println(records.ToHex())
``````````````


#### 定义

`ProtobufYAML(i any) *ProtobufRecords`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 描述 Protobuf 记录的 YAML 字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ProtobufRecords` | Protobuf 记录集合对象，可用于序列化回字节流或 fuzz 变形 |


### Strings

#### 详细描述
Strings 使用 fuzztag 渲染规则，将一个模板字符串展开成一组字符串结果

参数:

  - i: 含 fuzztag 的模板（如 &#34;{{i(1-3)}}&#34;），也可以是普通字符串



返回值:

  - 渲染展开后的字符串列表




Example:

``````````````yak
results = fuzz.Strings("{{i(1-3)}}")
println(results)   // OUT: [1 2 3]
assert len(results) == 3, "i(1-3) should expand to 3 results"
``````````````


#### 定义

`Strings(i any) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 含 fuzztag 的模板（如 &#34;{{i(1-3)}}&#34;），也可以是普通字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 渲染展开后的字符串列表 |


### StringsFunc

#### 详细描述
StringsFunc 使用 fuzztag 渲染模板，并为每个渲染结果回调一次，便于流式处理大量结果

参数:

  - i: 含 fuzztag 的模板字符串

  - cb: 针对每个渲染结果触发的回调函数，参数为单个变形结果

  - params: 可选的额外参数表，参与模板渲染



返回值:

  - 错误信息，渲染失败时返回非空




Example:

``````````````yak
fuzz.StringsFunc("{{i(1-3)}}", func(result) {
    println(result.Result)
})~
``````````````


#### 定义

`StringsFunc(i any, cb func(i *mutate.MutateResult), params ...any) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 含 fuzztag 的模板字符串 |
| cb | `func(i *mutate.MutateResult)` | 针对每个渲染结果触发的回调函数，参数为单个变形结果 |
| params | `...any` | 可选的额外参数表，参与模板渲染 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息，渲染失败时返回非空 |


### StringsWithParam

#### 详细描述
StringsWithParam 使用 fuzztag 渲染模板，并允许传入额外的命名参数表参与渲染

参数:

  - i: 含 fuzztag 的模板字符串

  - i2: 额外参数表（map），可被模板中的 {{params(...)}} 等标签引用



返回值:

  - 渲染展开后的字符串列表




Example:

``````````````yak
results = fuzz.StringsWithParam("{{params(p)}}", {"p": "abc"})
println(results)   // OUT: [abc]
assert results[0] == "abc", "param p should be rendered into result"
``````````````


#### 定义

`StringsWithParam(i any, i2 any) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 含 fuzztag 的模板字符串 |
| i2 | `any` | 额外参数表（map），可被模板中的 {{params(...)}} 等标签引用 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 渲染展开后的字符串列表 |


### UrlToHTTPRequest

#### 详细描述
UrlToHTTPRequest 根据请求方法与 URL 构造一个 HTTP Fuzz 请求对象，便于后续做参数变形与发包

参数:

  - method: 请求方法，如 &#34;GET&#34;、&#34;POST&#34;

  - i: 目标 URL



返回值:

  - 构造好的 HTTP Fuzz 请求对象

  - 错误信息，URL 解析失败时返回非空




Example:

``````````````yak
freq = fuzz.UrlToHTTPRequest("GET", "https://www.example.com/a?b=1")~
freq.Show()
``````````````


#### 定义

`UrlToHTTPRequest(method string, i any) (*mutate.FuzzHTTPRequest, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| method | `string` | 请求方法，如 &#34;GET&#34;、&#34;POST&#34; |
| i | `any` | 目标 URL |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*mutate.FuzzHTTPRequest` | 构造好的 HTTP Fuzz 请求对象 |
| r2 | `error` | 错误信息，URL 解析失败时返回非空 |


### UrlsToHTTPRequests

#### 详细描述
UrlsToHTTPRequests 将一个或多个 URL 转换成可批量变形发包的 HTTP Fuzz 请求批次对象

参数:

  - target: 一个或多个 URL（字符串），支持 fuzztag 展开



返回值:

  - HTTP Fuzz 请求批次对象，可对其统一做参数变形与批量发包

  - 错误信息，无有效请求时返回非空




Example:

``````````````yak
batch = fuzz.UrlsToHTTPRequests("https://www.example.com/", "https://www.example.com/login")~
batch.Show()
``````````````


#### 定义

`UrlsToHTTPRequests(target ...any) (*FuzzHTTPRequestBatch, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| target | `...any` | 一个或多个 URL（字符串），支持 fuzztag 展开 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*FuzzHTTPRequestBatch` | HTTP Fuzz 请求批次对象，可对其统一做参数变形与批量发包 |
| r2 | `error` | 错误信息，无有效请求时返回非空 |


### WithConcurrentLimit

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

`WithConcurrentLimit(i int) HttpPoolConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `int` | 并发数量 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpPoolConfigOption` | 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzz / fuzzx 等 |


### WithDelay

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

`WithDelay(b float64) HttpPoolConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `float64` | 延迟时间，单位为秒，支持小数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpPoolConfigOption` | 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzz.Exec / fuzzx 等 |


### WithNamingContext

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

`WithNamingContext(invokerName string) HttpPoolConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| invokerName | `string` | 调用者名称，用于并发分组标识 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpPoolConfigOption` | 一个连接池配置选项，作为可变参数传入 fuzz / fuzzx 等 |


### WithTimeOut

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

`WithTimeOut(f float64) HttpPoolConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `float64` | 超时时间，单位为秒，支持小数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpPoolConfigOption` | 一个连接池配置选项，作为可变参数传入 httpool.Pool / fuzz / fuzzx 等 |


### context

#### 详细描述
context 是一个 HTTP Fuzz 请求构造选项，用于传入上下文以便外部取消变形与发包任务

参数:

  - ctx: 上下文对象



返回值:

  - 一个 Fuzz 请求构造选项，作为可变参数传入 fuzz.HTTPRequest 等




Example:

``````````````yak
// 传入可取消上下文，依赖网络，此处仅作示意
ctx = context.New()
freq = fuzz.HTTPRequest(raw, fuzz.context(ctx))~
``````````````


#### 定义

`context(ctx context.Context) BuildFuzzHTTPRequestOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` | 上下文对象 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BuildFuzzHTTPRequestOption` | 一个 Fuzz 请求构造选项，作为可变参数传入 fuzz.HTTPRequest 等 |


### https

#### 详细描述
https 是一个 HTTP Fuzz 请求构造选项，用于设置该请求是否以 HTTPS 协议发送

参数:

  - i: 是否使用 HTTPS



返回值:

  - 一个 Fuzz 请求构造选项，作为可变参数传入 fuzz.HTTPRequest 等




Example:

``````````````yak
// 以 HTTPS 构造请求，依赖网络，此处仅作示意
freq = fuzz.HTTPRequest(raw, fuzz.https(true))~
``````````````


#### 定义

`https(i bool) BuildFuzzHTTPRequestOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `bool` | 是否使用 HTTPS |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BuildFuzzHTTPRequestOption` | 一个 Fuzz 请求构造选项，作为可变参数传入 fuzz.HTTPRequest 等 |


### noEncode

#### 详细描述
noEncode 是一个 HTTP Fuzz 请求构造选项，用于设置是否禁用对 fuzz 结果的自动编码

参数:

  - i: 是否禁用自动编码



返回值:

  - 一个 Fuzz 请求构造选项，作为可变参数传入 fuzz.HTTPRequest 等




Example:

``````````````yak
// 禁用自动编码，依赖网络，此处仅作示意
freq = fuzz.HTTPRequest(raw, fuzz.noEncode(true))~
``````````````


#### 定义

`noEncode(i bool) BuildFuzzHTTPRequestOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `bool` | 是否禁用自动编码 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BuildFuzzHTTPRequestOption` | 一个 Fuzz 请求构造选项，作为可变参数传入 fuzz.HTTPRequest 等 |


### noEscapeHTML

#### 详细描述
noEscapeHTML 是一个 HTTP Fuzz 请求构造选项，用于设置是否禁用对内容的 HTML 转义

参数:

  - i: 是否禁用 HTML 转义



返回值:

  - 一个 Fuzz 请求构造选项，作为可变参数传入 fuzz.HTTPRequest 等




Example:

``````````````yak
// 禁用 HTML 转义，依赖网络，此处仅作示意
freq = fuzz.HTTPRequest(raw, fuzz.noEscapeHTML(true))~
``````````````


#### 定义

`noEscapeHTML(i bool) BuildFuzzHTTPRequestOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `bool` | 是否禁用 HTML 转义 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BuildFuzzHTTPRequestOption` | 一个 Fuzz 请求构造选项，作为可变参数传入 fuzz.HTTPRequest 等 |


### proxy

#### 详细描述
proxy 是一个 HTTP Fuzz 请求构造选项，用于设置发包时使用的代理地址

参数:

  - i: 代理地址，支持 http、https、socks5 协议



返回值:

  - 一个 Fuzz 请求构造选项，作为可变参数传入 fuzz.HTTPRequest 等




Example:

``````````````yak
// 通过代理构造并发包，依赖网络，此处仅作示意
freq = fuzz.HTTPRequest(raw, fuzz.proxy("http://127.0.0.1:8083"))~
``````````````


#### 定义

`proxy(i string) BuildFuzzHTTPRequestOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` | 代理地址，支持 http、https、socks5 协议 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BuildFuzzHTTPRequestOption` | 一个 Fuzz 请求构造选项，作为可变参数传入 fuzz.HTTPRequest 等 |


### showTag

#### 详细描述
showTag 是一个 HTTP Fuzz 请求构造选项，用于以更友好的方式展示 fuzztag（便于阅读与调试）

返回值:

  - 一个 Fuzz 请求构造选项，作为可变参数传入 fuzz.HTTPRequest 等




Example:

``````````````yak
// 友好展示 fuzztag，依赖网络，此处仅作示意
freq = fuzz.HTTPRequest(raw, fuzz.showTag())~
``````````````


#### 定义

`showTag() BuildFuzzHTTPRequestOption`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BuildFuzzHTTPRequestOption` | 一个 Fuzz 请求构造选项，作为可变参数传入 fuzz.HTTPRequest 等 |


