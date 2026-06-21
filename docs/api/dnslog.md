# dnslog {#library-dnslog}

`dnslog` 库提供 DNSLog 带外（OOB）检测能力：申请一个临时域名，诱导目标对其发起 DNS 解析，再回查解析记录来确认无回显漏洞（如 SSRF、命令注入、Log4j、反序列化）的存在。

典型使用场景：

- 申请与回查：`dnslog.NewCustomDNSLog` 创建自定义 DNSLog 客户端获取域名与 token，触发后用其查询解析记录；`dnslog.LookupFirst` 查询某域名的首条解析。
- 模式配置：`dnslog.mode` / `dnslog.local` / `dnslog.random` / `dnslog.script` 选择平台、本地模式、随机域名与自定义脚本，`dnslog.QueryCustomScript` 查询可用脚本。

与相邻库的关系：`dnslog` 与 `risk`（记录漏洞）、`yso`（生成带 DNSLog 的反序列化 Payload）、`poc`（发起触发请求）紧密配合，是无回显漏洞验证的关键带外通道。

> 共 7 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [dnslog.QueryCustomScript](#querycustomscript) | - | - | 是为自定义 DNSLog 脚本预留的占位函数，当前不执行任何操作 |
| [dnslog.local](#local) | `isLocal bool` | `_dnslogConfigOpt` | 设置是否使用本地反连服务来申请与查询 DNSLog |
| [dnslog.mode](#mode) | `mode string` | `_dnslogConfigOpt` | 指定 DNSLog 使用的平台名称 |
| [dnslog.random](#random) | - | `_dnslogConfigOpt` | 设置 DNSLog 客户端随机选择可用平台(mode 设为通配) |
| [dnslog.script](#script) | `name string` | `_dnslogConfigOpt` | 指定用于申请与查询 DNSLog 的自定义 yak 脚本名称，并自动切换为本地模式 |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [dnslog.LookupFirst](#lookupfirst) | `host string, opt ...DNSOption` | `string` | 解析域名并返回第一个有效的 IP 地址 |
| [dnslog.NewCustomDNSLog](#newcustomdnslog) | `opts ..._dnslogConfigOpt` | `*CustomDNSLog` | 创建一个 DNSLog 客户端，用于申请 DNSLog 域名并查询 DNS 回连记录 |

## 函数详情

### QueryCustomScript {#querycustomscript}

```go
QueryCustomScript()
```

是为自定义 DNSLog 脚本预留的占位函数，当前不执行任何操作

在 yak 中通过 dnslog.QueryCustomScript 调用

**示例**

``````````````yak
// 该示例为示意性用法：占位接口，无实际副作用
dnslog.QueryCustomScript()
``````````````

---

### local {#local}

```go
local(isLocal bool) _dnslogConfigOpt
```

设置是否使用本地反连服务来申请与查询 DNSLog

在 yak 中通过 dnslog.local 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| isLocal | `bool` | 是否使用本地模式 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `_dnslogConfigOpt` | 一个 dnslog.NewCustomDNSLog 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：使用本地反连服务
client = dnslog.NewCustomDNSLog(dnslog.local(true))
``````````````

---

### mode {#mode}

```go
mode(mode string) _dnslogConfigOpt
```

指定 DNSLog 使用的平台名称

在 yak 中通过 dnslog.mode 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| mode | `string` | DNSLog 平台标识字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `_dnslogConfigOpt` | 一个 dnslog.NewCustomDNSLog 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：指定 DNSLog 平台
client = dnslog.NewCustomDNSLog(dnslog.mode("dnslog.cn"))
``````````````

---

### random {#random}

```go
random() _dnslogConfigOpt
```

设置 DNSLog 客户端随机选择可用平台(mode 设为通配)

在 yak 中通过 dnslog.random 调用

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `_dnslogConfigOpt` | 一个 dnslog.NewCustomDNSLog 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：随机选择 DNSLog 平台
client = dnslog.NewCustomDNSLog(dnslog.random())
``````````````

---

### script {#script}

```go
script(name string) _dnslogConfigOpt
```

指定用于申请与查询 DNSLog 的自定义 yak 脚本名称，并自动切换为本地模式

在 yak 中通过 dnslog.script 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 自定义 DNSLog 脚本的名称 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `_dnslogConfigOpt` | 一个 dnslog.NewCustomDNSLog 可接收的配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：使用自定义脚本驱动 DNSLog
client = dnslog.NewCustomDNSLog(dnslog.script("my-dnslog-script"))
``````````````

---

## 可变参数函数详情

### LookupFirst {#lookupfirst}

```go
LookupFirst(host string, opt ...DNSOption) string
```

解析域名并返回第一个有效的 IP 地址

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| host | `string` | 待解析的域名 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opt | `...DNSOption` | 零个或多个 DNS 解析配置选项，例如超时、DNS 服务器等 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 第一个解析到的 IP 地址，解析失败时返回空字符串 |

**示例**

``````````````yak
// 该示例为示意性用法：解析域名得到首个 IP
ip = dnslog.LookupFirst("example.com")
println(ip)
``````````````

---

### NewCustomDNSLog {#newcustomdnslog}

```go
NewCustomDNSLog(opts ..._dnslogConfigOpt) *CustomDNSLog
```

创建一个 DNSLog 客户端，用于申请 DNSLog 域名并查询 DNS 回连记录

在 yak 中通过 dnslog.NewCustomDNSLog 调用，可通过选项设置平台、是否本地、脚本等

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `..._dnslogConfigOpt` | 可选配置项，如 dnslog.mode、dnslog.local、dnslog.script、dnslog.random |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*CustomDNSLog` | DNSLog 客户端对象，可调用 GetSubDomainAndToken/CheckDNSLogByToken 等方法 |

**示例**

``````````````yak
// 该示例为示意性用法：依赖外部 DNSLog 平台/反连服务
client = dnslog.NewCustomDNSLog(dnslog.random())
domain, token = client.GetSubDomainAndToken()~
println("dnslog domain:", domain)
// 触发对 domain 的 DNS 请求后查询回连事件
events = client.CheckDNSLogByToken()~
``````````````

---

