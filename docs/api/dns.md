# dns {#library-dns}

`dns` 库提供 DNS 查询能力，支持解析 A/IP、NS、TXT 记录以及域传送（AXFR）检测，用于资产测绘、子域发现与 DNS 配置安全检查。

典型使用场景：

- 解析记录：`dns.QueryIP` / `dns.QueryIPAll` 查 A 记录，`dns.QueryNS` 查域名服务器，`dns.QueryTXT` 查 TXT 记录。
- 域传送检测：`dns.QueryAxfr`（及别名 `dns.QuertAxfr`）尝试 AXFR 域传送，发现配置不当的 DNS 服务器。
- 选项：`dns.dnsServers` 指定上游 DNS，`dns.timeout` 控制超时。

与相邻库的关系：`dns` 是资产发现的基础设施，常与 `subdomain`（子域枚举）、`dnslog`（带外检测）配合，把域名解析为可扫描的 IP。

> 共 8 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [dns.timeout](#timeout) | `d float64` | `_dnsConfigOpt` | 是一个 DNS 查询配置选项，用于设置查询的超时时间（单位：秒） |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [dns.QuertAxfr](#quertaxfr) | `target string, opts ..._dnsConfigOpt` | `[]string` | QueryAxfr 对目标域名发起 AXFR（DNS 区域传送）查询，常用于检测域传送配置错误 |
| [dns.QueryAxfr](#queryaxfr) | `target string, opts ..._dnsConfigOpt` | `[]string` | 对目标域名发起 AXFR（DNS 区域传送）查询，常用于检测域传送配置错误 |
| [dns.QueryIP](#queryip) | `target string, opts ..._dnsConfigOpt` | `string` | 查询目标域名的 A 记录，返回解析到的第一个 IPv4 地址 |
| [dns.QueryIPAll](#queryipall) | `target string, opts ..._dnsConfigOpt` | `[]string` | 查询目标域名的全部 A 记录，返回所有解析到的 IPv4 地址 |
| [dns.QueryNS](#queryns) | `target string, opts ..._dnsConfigOpt` | `[]string` | 查询目标域名的 NS（权威域名服务器）记录 |
| [dns.QueryTXT](#querytxt) | `target string, opts ..._dnsConfigOpt` | `[]string` | 查询目标域名的 TXT 记录 |
| [dns.dnsServers](#dnsservers) | `servers ...string` | `_dnsConfigOpt` | 是一个 DNS 查询配置选项，用于指定自定义的 DNS 服务器列表 |

## 函数详情

### timeout {#timeout}

```go
timeout(d float64) _dnsConfigOpt
```

是一个 DNS 查询配置选项，用于设置查询的超时时间（单位：秒）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| d | `float64` | 超时时间，单位为秒，支持小数 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `_dnsConfigOpt` | 一个 DNS 查询配置选项，作为可变参数传入查询函数 |

**示例**

``````````````yak
// 设置 3 秒超时进行 DNS 查询，此处仅作示意
ip = dns.QueryIP("www.example.com", dns.timeout(3))
println(ip)
``````````````

---

## 可变参数函数详情

### QuertAxfr {#quertaxfr}

```go
QuertAxfr(target string, opts ..._dnsConfigOpt) []string
```

QueryAxfr 对目标域名发起 AXFR（DNS 区域传送）查询，常用于检测域传送配置错误

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| target | `string` | 要查询的域名 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `..._dnsConfigOpt` | 可选配置，例如 dns.timeout、dns.dnsServers |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]string` | 区域传送返回的记录字符串切片；失败或被拒绝时返回空切片 |

**示例**

``````````````yak
// 真实 DNS 区域传送查询，结果依赖目标配置，此处仅作示意
records = dns.QueryAxfr("zonetransfer.me", dns.timeout(5))
for r in records { println(r) }
``````````````

---

### QueryAxfr {#queryaxfr}

```go
QueryAxfr(target string, opts ..._dnsConfigOpt) []string
```

对目标域名发起 AXFR（DNS 区域传送）查询，常用于检测域传送配置错误

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| target | `string` | 要查询的域名 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `..._dnsConfigOpt` | 可选配置，例如 dns.timeout、dns.dnsServers |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]string` | 区域传送返回的记录字符串切片；失败或被拒绝时返回空切片 |

**示例**

``````````````yak
// 真实 DNS 区域传送查询，结果依赖目标配置，此处仅作示意
records = dns.QueryAxfr("zonetransfer.me", dns.timeout(5))
for r in records { println(r) }
``````````````

---

### QueryIP {#queryip}

```go
QueryIP(target string, opts ..._dnsConfigOpt) string
```

查询目标域名的 A 记录，返回解析到的第一个 IPv4 地址

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| target | `string` | 要查询的域名 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `..._dnsConfigOpt` | 可选配置，例如 dns.timeout、dns.dnsServers |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 解析到的 IP 地址字符串；解析失败时返回空字符串 |

**示例**

``````````````yak
// 真实 DNS 查询，结果依赖网络与解析服务，此处仅作示意
ip = dns.QueryIP("www.example.com", dns.timeout(5))
println(ip)
``````````````

---

### QueryIPAll {#queryipall}

```go
QueryIPAll(target string, opts ..._dnsConfigOpt) []string
```

查询目标域名的全部 A 记录，返回所有解析到的 IPv4 地址

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| target | `string` | 要查询的域名 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `..._dnsConfigOpt` | 可选配置，例如 dns.timeout、dns.dnsServers |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]string` | 解析到的所有 IP 地址字符串切片；解析失败时返回空切片 |

**示例**

``````````````yak
// 真实 DNS 查询，结果依赖网络与解析服务，此处仅作示意
ips = dns.QueryIPAll("www.example.com", dns.timeout(5))
for ip in ips { println(ip) }
``````````````

---

### QueryNS {#queryns}

```go
QueryNS(target string, opts ..._dnsConfigOpt) []string
```

查询目标域名的 NS（权威域名服务器）记录

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| target | `string` | 要查询的域名 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `..._dnsConfigOpt` | 可选配置，例如 dns.timeout、dns.dnsServers |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]string` | 解析到的 NS 记录字符串切片；解析失败时返回空切片 |

**示例**

``````````````yak
// 真实 DNS 查询，结果依赖网络与解析服务，此处仅作示意
records = dns.QueryNS("example.com", dns.timeout(5))
for r in records { println(r) }
``````````````

---

### QueryTXT {#querytxt}

```go
QueryTXT(target string, opts ..._dnsConfigOpt) []string
```

查询目标域名的 TXT 记录

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| target | `string` | 要查询的域名 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `..._dnsConfigOpt` | 可选配置，例如 dns.timeout、dns.dnsServers |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]string` | 解析到的 TXT 记录字符串切片；解析失败时返回空切片 |

**示例**

``````````````yak
// 真实 DNS 查询，结果依赖网络与解析服务，此处仅作示意
records = dns.QueryTXT("example.com", dns.timeout(5))
for r in records { println(r) }
``````````````

---

### dnsServers {#dnsservers}

```go
dnsServers(servers ...string) _dnsConfigOpt
```

是一个 DNS 查询配置选项，用于指定自定义的 DNS 服务器列表

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| servers | `...string` | 一个或多个 DNS 服务器地址（如 &#34;8.8.8.8&#34;） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `_dnsConfigOpt` | 一个 DNS 查询配置选项，作为可变参数传入查询函数 |

**示例**

``````````````yak
// 指定使用 8.8.8.8 与 1.1.1.1 进行查询，此处仅作示意
ip = dns.QueryIP("www.example.com", dns.dnsServers("8.8.8.8", "1.1.1.1"), dns.timeout(5))
println(ip)
``````````````

---

