# ja3 {#library-ja3}

`ja3` 库提供 JA3/JA3S TLS 指纹的解析与应用能力，用于按指定 TLS ClientHello 指纹发起请求（指纹伪装/反检测）或识别 TLS 客户端/服务端特征。

典型使用场景：

- 解析指纹：`ja3.ParseJA3` / `ja3.ParseJA3S` 解析 JA3/JA3S 串，`ja3.ParseJA3ToClientHelloSpec` 转成 ClientHello 规格。
- 应用指纹：`ja3.GetTransportByClientHelloSpec` 用指定 ClientHello 规格构造 HTTP Transport，从而以特定 TLS 指纹发起请求。

与相邻库的关系：`ja3` 与 `tls`（TLS 能力）、`http`/`poc`（发起请求）配合，用于绕过基于 TLS 指纹的检测或做 TLS 指纹分析。

> 共 4 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [ja3.GetTransportByClientHelloSpec](#gettransportbyclienthellospec) | `spec *tls.ClientHelloSpec` | `*http.Transport` | 根据给定的 ClientHelloSpec 构造一个使用该 TLS 指纹的 http.Transport |
| [ja3.ParseJA3](#parseja3) | `ja3FullString string` | `*JA3, error` | 解析 JA3 全字符串(由 5 个逗号分隔字段组成)，返回结构化的 JA3 指纹对象 |
| [ja3.ParseJA3S](#parseja3s) | `ja3sFullString string` | `*JA3S, error` | 解析 JA3S 全字符串(由 3 个逗号分隔字段组成)，返回结构化的 JA3S 指纹对象 |
| [ja3.ParseJA3ToClientHelloSpec](#parseja3toclienthellospec) | `str string` | `*tls.ClientHelloSpec, error` | 将 JA3 全字符串转换为 uTLS 的 ClientHelloSpec，用于模拟特定 TLS 客户端指纹 |

## 函数详情

### GetTransportByClientHelloSpec {#gettransportbyclienthellospec}

```go
GetTransportByClientHelloSpec(spec *tls.ClientHelloSpec) *http.Transport
```

根据给定的 ClientHelloSpec 构造一个使用该 TLS 指纹的 http.Transport

配合 ParseJA3ToClientHelloSpec 可让 HTTP 请求伪装成特定客户端的 TLS 指纹

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| spec | `*tls.ClientHelloSpec` | TLS ClientHelloSpec，通常由 ja3.ParseJA3ToClientHelloSpec 生成 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*http.Transport` | 使用指定 TLS 指纹的 *http.Transport |

**示例**

``````````````yak
// 该示例为示意性用法：用 JA3 指纹构造可发起真实请求的 transport
spec = ja3.ParseJA3ToClientHelloSpec("771,4865-4866-4867,0-23-65281,29-23-24,0")~
transport = ja3.GetTransportByClientHelloSpec(spec)
println(transport != nil)
``````````````

---

### ParseJA3 {#parseja3}

```go
ParseJA3(ja3FullString string) (*JA3, error)
```

解析 JA3 全字符串(由 5 个逗号分隔字段组成)，返回结构化的 JA3 指纹对象

JA3 用于标识 TLS 客户端，字段依次为 TLS 版本、加密套件、扩展类型、椭圆曲线、椭圆曲线点格式

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| ja3FullString | `string` | JA3 全字符串，形如 &#34;771,4865-4866-4867,0-23-65281,29-23-24,0&#34; |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*JA3` | 解析得到的 JA3 指纹对象 |
| r2 | `error` | 错误信息，字段数量不为 5 时返回错误 |

**示例**

``````````````yak
ja3str = "771,4865-4866-4867,0-23-65281,29-23-24,0"
obj, err = ja3.ParseJA3(ja3str)
assert err == nil, "valid ja3 string should parse"
// 加密套件字段含 3 个套件
println(len(obj.CipherSuites))   // OUT: 3
assert len(obj.CipherSuites) == 3, "should parse three cipher suites"
``````````````

---

### ParseJA3S {#parseja3s}

```go
ParseJA3S(ja3sFullString string) (*JA3S, error)
```

解析 JA3S 全字符串(由 3 个逗号分隔字段组成)，返回结构化的 JA3S 指纹对象

JA3S 用于标识 TLS 服务端，字段依次为 TLS 版本、选定加密套件、扩展类型

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| ja3sFullString | `string` | JA3S 全字符串，形如 &#34;771,4865,0-23&#34; |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*JA3S` | 解析得到的 JA3S 指纹对象 |
| r2 | `error` | 错误信息，字段数量不为 3 时返回错误 |

**示例**

``````````````yak
ja3sstr = "771,4865,0-23"
obj, err = ja3.ParseJA3S(ja3sstr)
assert err == nil, "valid ja3s string should parse"
// 扩展类型字段含 2 个扩展
println(len(obj.ExtensionsTypes))   // OUT: 2
assert len(obj.ExtensionsTypes) == 2, "should parse two extension types"
``````````````

---

### ParseJA3ToClientHelloSpec {#parseja3toclienthellospec}

```go
ParseJA3ToClientHelloSpec(str string) (*tls.ClientHelloSpec, error)
```

将 JA3 全字符串转换为 uTLS 的 ClientHelloSpec，用于模拟特定 TLS 客户端指纹

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| str | `string` | JA3 全字符串，形如 &#34;771,4865-4866-4867,0-23-65281,29-23-24,0&#34; |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*tls.ClientHelloSpec` | 构造出的 *tls.ClientHelloSpec，可用于自定义 TLS 握手 |
| r2 | `error` | 错误信息，解析失败时非 nil |

**示例**

``````````````yak
ja3str = "771,4865-4866-4867,0-23-65281,29-23-24,0"
spec, err = ja3.ParseJA3ToClientHelloSpec(ja3str)
assert err == nil, "should build client hello spec"
assert spec != nil, "spec should not be nil"
``````````````

---

