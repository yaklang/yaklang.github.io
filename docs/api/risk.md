# risk {#library-risk}

`risk` 库是漏洞/风险对象的创建与管理中心，负责把发现的漏洞结构化记录（标题、等级、目标、请求/响应、CVE、解决方案等）并入库，同时提供反连（DNSLog/HTTPLog/RMI/ICMP/随机端口）平台用于无回显漏洞的带外验证。

典型使用场景：

- 记录漏洞：`risk.NewRisk(target, opts...)` / `risk.CreateRisk` 创建风险，配 `risk.title` / `risk.severity` / `risk.cve` / `risk.request` / `risk.response` / `risk.payload` / `risk.solution` 等丰富信息，`risk.Save` 保存。
- 反连验证：`risk.NewDNSLogDomain` / `risk.NewHTTPLog` 申请带外域名与 token，`risk.CheckDNSLogByToken` / `risk.CheckHTTPLogByToken` 回查是否被触发；`risk.NewLocalReverseHTTPUrl` / `risk.NewPublicReverseRMIUrl` 等生成反连地址。
- 查询：`risk.QueryRisksByKeyword` / `risk.YieldRiskByTarget` / `risk.YieldRiskByRuntimeId` 检索；`risk.GetSSARiskByID` / `risk.GetSSARiskWithDataFlow` 处理代码审计风险。

与相邻库的关系：`risk` 是漏洞中枢，上游接 `poc`/`fuzz`/`nuclei`（发现漏洞）、`dnslog`（带外），下游接 `db`（持久化）、`report`（报告）、`yakit`（展示）。

快速上手（结构化记录一条漏洞并入库）：

```yak
// risk.CreateRisk 创建并保存一条风险记录, 用选项补充标题/等级/类型/payload 等
r = risk.CreateRisk("127.0.0.1",
    risk.title("demo sql injection"),    // 漏洞标题
    risk.severity("high"),               // 等级: info/low/middle/high/critical
    risk.type("sqli"),                   // 漏洞类型
    risk.payload("' or 1=1 -- "),        // 触发用的 payload
)
println("risk created:", r.Title, r.Severity) // 预期输出: risk created: demo sql injection high
assert r.Title == "demo sql injection", "title should be set"
assert r.Severity == "high", "severity should be set"
// 无回显漏洞可用反连验证: domain, token = risk.NewDNSLogDomain()~ ; risk.CheckDNSLogByToken(token)
```

> 共 55 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [risk.CheckICMPTriggerByLength](#checkicmptriggerbylength) | `i int` | `*tpb.ICMPTriggerNotification, error` | 通过特定 ICMP 包长度检查 ICMP 反连事件，返回触发通知与错误 |
| [risk.CheckRandomTriggerByToken](#checkrandomtriggerbytoken) | `t string` | `*tpb.RandomPortTriggerEvent, error` | 通过 token 查询是否收到随机端口反连事件（导出名为 risk.CheckRandomTriggerByToken） |
| [risk.CheckServerReachable](#checkserverreachable) | `ctx context.Context, target string, httpCheck bool` | `*tpb.CheckServerReachableResponse, error` | 通过 Bridge 检查目标是否可达，第一个参数为上下文，第二个参数为目标地址，第三个参数为是否进行 http 检测，返回的第一个值是 CheckServerReachableResponse，第二个值是错误 |
| [risk.DeleteRiskByID](#deleteriskbyid) | `id int64` | `error` | 根据风险记录ID删除风险记录 |
| [risk.DeleteRiskByTarget](#deleteriskbytarget) | `addr string` | `error` | 根据目标(ip或ip:port)删除风险记录 |
| [risk.ExtractTokenFromUrl](#extracttokenfromurl) | `tokenUrl string` | `string` | 从反连(reverse) URL 中提取其中携带的 token 字符串 |
| [risk.GetSSARiskByID](#getssariskbyid) | `id int64` | `*schema.SSARisk` | 根据 SSA Risk ID 获取 SSA 风险记录 |
| [risk.GetSSARiskSourceCode](#getssarisksourcecode) | `id int64` | `string` | 根据 SSA Risk ID 获取完整的源代码,无法获取会返回相关代码片段CodeFragment |
| [risk.GetSSARiskSourceCodeWithFragment](#getssarisksourcecodewithfragment) | `id int64` | `string, string, bool` | 根据 SSA Risk ID 获取源代码，如果获取完整源码失败则返回代码片段CodeFragment |
| [risk.GetSSARiskWithDataFlow](#getssariskwithdataflow) | `id int64` | `*sfreport.Risk` | 根据 SSA Risk ID 获取包含数据流信息的风险记录 |
| [risk.HaveReverseRisk](#havereverserisk) | `token string` | `bool` | 通过轮询检查是否存在对应token的反连记录，重试最多5次，每次等待1秒， 如果存在返回true，否则返回false |
| [risk.NewDNSLogDomain](#newdnslogdomain) | - | `string, string, error` | 返回一个公网 Bridge 的 DNSLog 域名，返回的第一个值是域名，第二个值是 token，第三个值是错误 |
| [risk.NewLocalReverseHTTPSUrl](#newlocalreversehttpsurl) | - | `string` | 返回一个本地 Bridge 的反向 HTTPS URL |
| [risk.NewLocalReverseHTTPUrl](#newlocalreversehttpurl) | - | `string` | 返回一个本地 Bridge 的反向 HTTP URL |
| [risk.NewLocalReverseRMIUrl](#newlocalreversermiurl) | - | `string` | 返回一个本地 Bridge 的反向 RMI URL |
| [risk.NewPublicReverseHTTPSUrl](#newpublicreversehttpsurl) | - | `string` | 返回一个公网 Bridge 的反向 HTTPS URL |
| [risk.NewPublicReverseHTTPUrl](#newpublicreversehttpurl) | - | `string` | 返回一个公网 Bridge 的反向 HTTP URL |
| [risk.NewPublicReverseRMIUrl](#newpublicreversermiurl) | - | `string` | 返回一个公网 Bridge 的反向 RMI URL |
| [risk.RegisterBeforeRiskSave](#registerbeforerisksave) | `f func(*schema.Risk)` | - | 注册一个在风险记录保存到数据库之前执行的回调钩子，可用于统一改写/丰富风险字段 |
| [risk.Save](#save) | - | `error` | 将一条漏洞记录结构体保存到数据库（导出名为 risk.Save） |
| [risk.YieldRiskByCreateAt](#yieldriskbycreateat) | `timestamp int64` | `chan *schema.Risk` | 根据创建时间戳获取风险记录，返回风险记录的管道 |
| [risk.YieldRiskByIds](#yieldriskbyids) | `ids []int` | `chan *schema.Risk` | 根据 Risk ID 获取风险记录，返回风险记录的管道 |
| [risk.YieldRiskByRuntimeId](#yieldriskbyruntimeid) | `runtimeId string` | `chan *schema.Risk` | 根据 RuntimeID 获取风险记录，返回风险记录的管道 |
| [risk.YieldRiskByScriptName](#yieldriskbyscriptname) | `scriptName string` | `chan *schema.Risk` | 根据插件名戳获取风险记录，返回风险记录的管道 |
| [risk.YieldRiskByTarget](#yieldriskbytarget) | `target string` | `chan *schema.Risk` | 根据目标(ip或ip:port)获取风险记录，返回风险记录的管道 |
| [risk.appendPacketPairs](#appendpacketpairs) | `req any, resp any` | `RiskParamsOpt` | 是一个追加形式的选项参数，用于向风险记录中追加一对请求/响应报文 |
| [risk.cve](#cve) | `s string` | `RiskParamsOpt` | 是一个选项参数，用于指定风险记录的 CVE 编号 |
| [risk.description](#description) | `i string` | `RiskParamsOpt` | 是一个选项参数，用于指定漏洞记录的描述 |
| [risk.details](#details) | `i any` | `RiskParamsOpt` | 是一个选项参数，用于指定风险记录的详细信息 |
| [risk.fromYakScript](#fromyakscript) | `i string` | `RiskParamsOpt` | fromScript 是一个选项参数，用于指定风险记录的来源插件名 |
| [risk.ignore](#ignore) | `i bool` | `RiskParamsOpt` | 是一个选项参数，用于标记风险记录为已忽略状态(忽略后默认查询不展示) |
| [risk.ip](#ip) | `i string` | `RiskParamsOpt` | 是一个选项参数，用于指定风险记录关联的 IP 地址 |
| [risk.level](#level) | `i string` | `RiskParamsOpt` | severity 是一个选项参数，用于指定风险记录的严重程度 |
| [risk.parameter](#parameter) | `i string` | `RiskParamsOpt` | 是一个选项参数，用于指定风险记录的参数 |
| [risk.payload](#payload) | `i string` | `RiskParamsOpt` | 是一个选项参数，用于指定漏洞记录的载荷(payload) |
| [risk.potential](#potential) | `i bool` | `RiskParamsOpt` | 是一个选项参数，用于标记风险记录是否为潜在(疑似)风险 |
| [risk.request](#request) | `i any` | `RiskParamsOpt` | 是一个选项参数，用于指定风险记录的原始请求报文 |
| [risk.response](#response) | `i any` | `RiskParamsOpt` | 是一个选项参数，用于指定风险记录的原始响应报文 |
| [risk.runtimeId](#runtimeid) | `i string` | `RiskParamsOpt` | 是一个选项参数，用于指定风险记录的运行时 ID |
| [risk.severity](#severity) | `i string` | `RiskParamsOpt` | 是一个选项参数，用于指定风险记录的严重程度 |
| [risk.solution](#solution) | `i string` | `RiskParamsOpt` | 是一个选项参数，用于指定漏洞记录的解决方案 |
| [risk.tag](#tag) | `i string` | `RiskParamsOpt` | 是一个选项参数，用于为风险记录设置标签(多个标签可用分隔符拼接) |
| [risk.title](#title) | `i string` | `RiskParamsOpt` | 是一个选项参数，用于指定漏洞记录的标题 |
| [risk.titleVerbose](#titleverbose) | `i string` | `RiskParamsOpt` | 是一个选项参数，用于指定漏洞记录的详细标题 |
| [risk.token](#token) | `i string` | `RiskParamsOpt` | 是一个选项参数，用于指定风险记录的反连 token |
| [risk.type](#type) | `i string` | `RiskParamsOpt` | 是一个选项参数，用于指定风险类型，可用的风险类型: |
| [risk.typeVerbose](#typeverbose) | `i string` | `RiskParamsOpt` | 是一个选项参数，用于指定风险类型的详细描述 |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [risk.CheckDNSLogByToken](#checkdnslogbytoken) | `token string, timeout ...float64` | `[]*tpb.DNSLogEvent, error` | 通过 token 查询 DNSLog 平台上是否收到对应的 DNS 解析触发（导出名为 risk.CheckDNSLogByToken） |
| [risk.CheckHTTPLogByToken](#checkhttplogbytoken) | `token string, timeout ...float64` | `[]*tpb.HTTPRequestTriggerNotification, error` | 通过 token 查询是否收到对应的 HTTP 带外请求（导出名为 risk.CheckHTTPLogByToken） |
| [risk.CreateRisk](#createrisk) | `u string, opts ...RiskParamsOpt` | `*schema.Risk` | 创建漏洞记录结构体，但是并不会保存到数据库，第一个参数是目标URL，后面可以传入零个或多个选项参数，用于指定 risk 的结构，其通常与 Save 一起使用 |
| [risk.NewHTTPLog](#newhttplog) | `i ...any` | `string, string, error` | 返回一个公网 Bridge 的 HTTPLog 域名，返回的第一个值是域名，第二个值是 token，第三个值是错误 |
| [risk.NewRandomPortTrigger](#newrandomporttrigger) | `opt ...RiskParamsOpt` | `string, string, error` | 返回一个公网 Bridge 的随机端口反连检测地址，返回的第一个值是 token，第二个值是检测地址，第三个值是错误 |
| [risk.NewRisk](#newrisk) | `target string, opts ...yakit.RiskParamsOpt` | - | 创建一条漏洞记录并保存到数据库（导出名为 risk.NewRisk） |
| [risk.NewUnverifiedRisk](#newunverifiedrisk) | `u string, token string, opts ...RiskParamsOpt` | `*schema.Risk, error` | 创建一条&#34;待验证&#34;风险记录并保存，常用于反连(reverse)类漏洞先记录、后由回连验证 |
| [risk.QueryRisksByKeyword](#queryrisksbykeyword) | `keyword string, opts ...yakit.RiskParamsOpt` | `chan *schema.Risk` | 根据关键字查询风险记录，返回风险记录的管道 |

## 函数详情

### CheckICMPTriggerByLength {#checkicmptriggerbylength}

```go
CheckICMPTriggerByLength(i int) (*tpb.ICMPTriggerNotification, error)
```

通过特定 ICMP 包长度检查 ICMP 反连事件，返回触发通知与错误

在 yak 中通过 risk.CheckICMPTriggerByLength 调用，依赖公网 Bridge 反连服务

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `int` | 用于触发匹配的特定 ICMP 包长度 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*tpb.ICMPTriggerNotification` | ICMP 触发通知对象 |
| r2 | `error` | 错误信息，失败时非 nil |

**示例**

``````````````yak
// 无法本地验证: 依赖公网 Bridge 反连服务(需配置 yak bridge 地址)
// 通过特定 ICMP 包长度查询是否收到 ICMP 反连
event = risk.CheckICMPTriggerByLength(1111)~
println(event.CurrentRemoteAddr)
``````````````

---

### CheckRandomTriggerByToken {#checkrandomtriggerbytoken}

```go
CheckRandomTriggerByToken(t string) (*tpb.RandomPortTriggerEvent, error)
```

通过 token 查询是否收到随机端口反连事件（导出名为 risk.CheckRandomTriggerByToken）

常用于带外（OOB）漏洞验证，配合 risk.NewRandomPortTrigger 生成的 token 使用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| t | `string` | 随机端口反连 token |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*tpb.RandomPortTriggerEvent` | 随机端口反连事件对象 |
| r2 | `error` | 错误信息（查询失败时返回） |

**示例**

``````````````yak
// 无法本地验证: 依赖公网 Bridge 反连服务(需配置 yak bridge 地址)
token, addr = risk.NewRandomPortTrigger()~
// 触发目标连接 addr 后查询是否收到反连事件
event = risk.CheckRandomTriggerByToken(token)~
println(event.RemoteAddr)
``````````````

---

### CheckServerReachable {#checkserverreachable}

```go
CheckServerReachable(ctx context.Context, target string, httpCheck bool) (*tpb.CheckServerReachableResponse, error)
```

通过 Bridge 检查目标是否可达，第一个参数为上下文，第二个参数为目标地址，第三个参数为是否进行 http 检测，返回的第一个值是 CheckServerReachableResponse，第二个值是错误

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| ctx | `context.Context` | 上下文，用于控制超时与取消 |
| target | `string` | 待检测的目标地址 |
| httpCheck | `bool` | 是否进行 http 检测 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*tpb.CheckServerReachableResponse` | 检测结果 CheckServerReachableResponse 对象 |
| r2 | `error` | 错误信息，失败时非 nil |

**示例**

``````````````yak
resp = risk.CheckServerReachable(context.Background(), "example.com", false)~
print(resp.Reachable) // 是否可达
``````````````

---

### DeleteRiskByID {#deleteriskbyid}

```go
DeleteRiskByID(id int64) error
```

根据风险记录ID删除风险记录

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| id | `int64` | 风险记录 ID |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息，失败时非 nil |

**示例**

``````````````yak
risk.DeleteRiskByID(123)
``````````````

---

### DeleteRiskByTarget {#deleteriskbytarget}

```go
DeleteRiskByTarget(addr string) error
```

根据目标(ip或ip:port)删除风险记录

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| addr | `string` | 目标地址(ip 或 ip:port) |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息，失败时非 nil |

**示例**

``````````````yak
risk.DeleteRiskByTarget("example.com")
``````````````

---

### ExtractTokenFromUrl {#extracttokenfromurl}

```go
ExtractTokenFromUrl(tokenUrl string) string
```

从反连(reverse) URL 中提取其中携带的 token 字符串

在 yak 中通过 risk.ExtractTokenFromUrl 调用，常配合 DNSLog/HTTPLog 反连验证使用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| tokenUrl | `string` | 包含 token 的反连 URL |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 提取出的 token 字符串，无法解析时返回空字符串 |

**示例**

``````````````yak
// 该示例为示意性用法：从反连 URL 提取 token
token = risk.ExtractTokenFromUrl("http://abc123.dnslog.cn/")
println(token)
``````````````

---

### GetSSARiskByID {#getssariskbyid}

```go
GetSSARiskByID(id int64) *schema.SSARisk
```

根据 SSA Risk ID 获取 SSA 风险记录

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| id | `int64` | SSA Risk ID |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*schema.SSARisk` | SSA 风险记录，获取失败时返回 nil |

**示例**

``````````````yak
ssaRisk = risk.GetSSARiskByID(123)

	if ssaRisk != nil {
	    println("风险标题:", ssaRisk.Title)
	    println("代码片段:", ssaRisk.CodeFragment)
	}
``````````````

---

### GetSSARiskSourceCode {#getssarisksourcecode}

```go
GetSSARiskSourceCode(id int64) string
```

根据 SSA Risk ID 获取完整的源代码,无法获取会返回相关代码片段CodeFragment

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| id | `int64` | SSA Risk ID |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 完整源代码，无法获取时返回代码片段 CodeFragment |

**示例**

``````````````yak
sourceCode = risk.GetSSARiskSourceCode(123)

	if sourceCode != "" {
	    println("完整源代码:", sourceCode)
	}
``````````````

---

### GetSSARiskSourceCodeWithFragment {#getssarisksourcecodewithfragment}

```go
GetSSARiskSourceCodeWithFragment(id int64) (string, string, bool)
```

根据 SSA Risk ID 获取源代码，如果获取完整源码失败则返回代码片段CodeFragment

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| id | `int64` | SSA Risk ID |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 完整源码 |
| r2 | `string` | 代码片段 CodeFragment |
| r3 | `bool` | 是否成功获取完整源码 |

**示例**

``````````````yak
fullCode, fragment, isFullCode = risk.GetSSARiskSourceCodeWithFragment(123)

	if isFullCode {
	    println("获取到完整源代码")
	} else {

	    println("只获取到代码片段")
	}
``````````````

---

### GetSSARiskWithDataFlow {#getssariskwithdataflow}

```go
GetSSARiskWithDataFlow(id int64) *sfreport.Risk
```

根据 SSA Risk ID 获取包含数据流信息的风险记录

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| id | `int64` | SSA Risk ID |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*sfreport.Risk` | 包含数据流信息的风险记录，获取失败时返回 nil |

**示例**

``````````````yak
wrappedRisk = risk.GetSSARiskWithDataFlow(123)

	if wrappedRisk != nil {
	    println("风险标题:", wrappedRisk.Title)
	    println("数据流路径数量:", len(wrappedRisk.DataFlowPaths))
	}
``````````````

---

### HaveReverseRisk {#havereverserisk}

```go
HaveReverseRisk(token string) bool
```

通过轮询检查是否存在对应token的反连记录，重试最多5次，每次等待1秒， 如果存在返回true，否则返回false

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| token | `string` | 反连验证用的 token |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `bool` | 是否存在对应 token 的反连记录 |

**示例**

``````````````yak
if risk.HaveReverseRisk("token") { // 轮询检查是否存在反连风险，会阻塞
println("have reverse risk")
}
``````````````

---

### NewDNSLogDomain {#newdnslogdomain}

```go
NewDNSLogDomain() (domain string, token string, _ error)
```

返回一个公网 Bridge 的 DNSLog 域名，返回的第一个值是域名，第二个值是 token，第三个值是错误

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| domain | `string` | DNSLog 域名 |
| token | `string` | 反连验证用的 token |
| _ | `error` | 错误信息，失败时非 nil |

**示例**

``````````````yak
domain, token = risk.NewDNSLogDomain()~
``````````````

---

### NewLocalReverseHTTPSUrl {#newlocalreversehttpsurl}

```go
NewLocalReverseHTTPSUrl() string
```

返回一个本地 Bridge 的反向 HTTPS URL

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 反向 HTTPS URL 字符串 |

**示例**

``````````````yak
url := risk.NewLocalReverseHTTPSUrl()
``````````````

---

### NewLocalReverseHTTPUrl {#newlocalreversehttpurl}

```go
NewLocalReverseHTTPUrl() string
```

返回一个本地 Bridge 的反向 HTTP URL

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 反向 HTTP URL 字符串 |

**示例**

``````````````yak
url := risk.NewLocalReverseHTTPUrl()
``````````````

---

### NewLocalReverseRMIUrl {#newlocalreversermiurl}

```go
NewLocalReverseRMIUrl() string
```

返回一个本地 Bridge 的反向 RMI URL

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 反向 RMI URL 字符串 |

**示例**

``````````````yak
url := risk.NewLocalReverseRMIUrl()
``````````````

---

### NewPublicReverseHTTPSUrl {#newpublicreversehttpsurl}

```go
NewPublicReverseHTTPSUrl() string
```

返回一个公网 Bridge 的反向 HTTPS URL

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 反向 HTTPS URL 字符串 |

**示例**

``````````````yak
url := risk.NewPublicReverseHTTPSUrl()
``````````````

---

### NewPublicReverseHTTPUrl {#newpublicreversehttpurl}

```go
NewPublicReverseHTTPUrl() string
```

返回一个公网 Bridge 的反向 HTTP URL

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 反向 HTTP URL 字符串 |

**示例**

``````````````yak
url := risk.NewPublicReverseHTTPUrl()
``````````````

---

### NewPublicReverseRMIUrl {#newpublicreversermiurl}

```go
NewPublicReverseRMIUrl() string
```

返回一个公网 Bridge 的反向 RMI URL

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 反向 RMI URL 字符串 |

**示例**

``````````````yak
url := risk.NewPublicReverseRMIUrl()
``````````````

---

### RegisterBeforeRiskSave {#registerbeforerisksave}

```go
RegisterBeforeRiskSave(f func(*schema.Risk))
```

注册一个在风险记录保存到数据库之前执行的回调钩子，可用于统一改写/丰富风险字段

在 yak 中通过 risk.RegisterBeforeRiskSave 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| f | `func(*schema.Risk)` | 回调函数，入参为即将保存的风险记录，可在其中修改该记录 |

**示例**

``````````````yak
// 该示例为示意性用法：保存前为所有风险追加标签

	risk.RegisterBeforeRiskSave(func(r) {
	    r.Tags = "auto-tagged"
	})
``````````````

---

### Save {#save}

```go
Save() error
```

将一条漏洞记录结构体保存到数据库（导出名为 risk.Save）

通常与 risk.CreateRisk 搭配使用：先构造再保存

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息（保存失败时返回） |

**示例**

``````````````yak
r = risk.CreateRisk("http://example.com", risk.title("SQL Injection"), risk.type("sqli"), risk.severity("high"))
risk.Save(r)~
``````````````

---

### YieldRiskByCreateAt {#yieldriskbycreateat}

```go
YieldRiskByCreateAt(timestamp int64) chan *schema.Risk
```

根据创建时间戳获取风险记录，返回风险记录的管道

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| timestamp | `int64` | 创建时间的 Unix 时间戳 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `chan *schema.Risk` | 风险记录的管道 |

**示例**

``````````````yak
ts = time.Parse("2006-01-02 15:04:05", "2020-01-01 00:00:00")~.Unix()
for risk := range risk.YieldRiskByCreateAt(ts) {
println(risk)
}
``````````````

---

### YieldRiskByIds {#yieldriskbyids}

```go
YieldRiskByIds(ids []int) chan *schema.Risk
```

根据 Risk ID 获取风险记录，返回风险记录的管道

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| ids | `[]int` | 风险记录 ID 列表 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `chan *schema.Risk` | 风险记录的管道 |

**示例**

``````````````yak
for risk := range risk.YieldRiskByIds([1,2,3]) {
println(risk)
}
``````````````

---

### YieldRiskByRuntimeId {#yieldriskbyruntimeid}

```go
YieldRiskByRuntimeId(runtimeId string) chan *schema.Risk
```

根据 RuntimeID 获取风险记录，返回风险记录的管道

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| runtimeId | `string` | 运行时 ID |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `chan *schema.Risk` | 风险记录的管道 |

**示例**

``````````````yak
for risk := range risk.YieldRiskByRuntimeId("161c5372-3e75-46f6-a6bf-1a3182da625e") {
println(risk)
}
``````````````

---

### YieldRiskByScriptName {#yieldriskbyscriptname}

```go
YieldRiskByScriptName(scriptName string) chan *schema.Risk
```

根据插件名戳获取风险记录，返回风险记录的管道

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| scriptName | `string` | 插件名 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `chan *schema.Risk` | 风险记录的管道 |

**示例**

``````````````yak
for risk := range risk.YieldRiskByScriptName("基础 XSS 检测") {
println(risk)
}
``````````````

---

### YieldRiskByTarget {#yieldriskbytarget}

```go
YieldRiskByTarget(target string) chan *schema.Risk
```

根据目标(ip或ip:port)获取风险记录，返回风险记录的管道

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| target | `string` | 目标地址(ip 或 ip:port) |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `chan *schema.Risk` | 风险记录的管道 |

**示例**

``````````````yak
for risk := range risk.YieldRiskByTarget("example.com") {
println(risk)
}
``````````````

---

### appendPacketPairs {#appendpacketpairs}

```go
appendPacketPairs(req any, resp any) RiskParamsOpt
```

是一个追加形式的选项参数，用于向风险记录中追加一对请求/响应报文

会将报文保存为 HTTPFlow，并在 PacketPairs 中记录 httpflow_id、url 以及请求/响应快照，

前端可优先按 id 查询详情；HTTPFlow 被删除后仍可使用 PacketPairs 中的快照展示流量。

支持 string / []byte / 任意可转成字符串的类型

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| req | `any` | 请求报文，支持 string / []byte / 任意可转成字符串的类型 |
| resp | `any` | 响应报文，支持 string / []byte / 任意可转成字符串的类型 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `RiskParamsOpt` | 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数 |

**示例**

``````````````yak
risk.NewRisk(target,

	risk.appendPacketPairs(req1, rsp1),
	risk.appendPacketPairs(req2, rsp2),

)
``````````````

---

### cve {#cve}

```go
cve(s string) RiskParamsOpt
```

是一个选项参数，用于指定风险记录的 CVE 编号

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| s | `string` | CVE 编号，例如 &#34;CVE-2021-22145&#34; |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `RiskParamsOpt` | 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数 |

**示例**

``````````````yak
risk.NewRisk(target, risk.cve("CVE-2021-22145"))
``````````````

---

### description {#description}

```go
description(i string) RiskParamsOpt
```

是一个选项参数，用于指定漏洞记录的描述

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `string` | 漏洞记录的描述 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `RiskParamsOpt` | 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数 |

**示例**

``````````````yak
risk.NewRisk(target, risk.description(description))
``````````````

---

### details {#details}

```go
details(i any) RiskParamsOpt
```

是一个选项参数，用于指定风险记录的详细信息

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 详细信息，通常为 map 或可转换为 map 的值 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `RiskParamsOpt` | 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数 |

**示例**

``````````````yak
risk.NewRisk(target, risk.details({"message": message, "ohter_message": message}))
``````````````

---

### fromYakScript {#fromyakscript}

```go
fromYakScript(i string) RiskParamsOpt
```

fromScript 是一个选项参数，用于指定风险记录的来源插件名

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `string` | 风险记录的来源插件名 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `RiskParamsOpt` | 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数 |

**示例**

``````````````yak
// 记录一条风险到数据库, 并标注来源插件名(便于在风险管理中追溯是哪个插件发现的)
risk.NewRisk("http://example.com/vuln", risk.fromYakScript("my-plugin"), risk.severity("high"))
``````````````

---

### ignore {#ignore}

```go
ignore(i bool) RiskParamsOpt
```

是一个选项参数，用于标记风险记录为已忽略状态(忽略后默认查询不展示)

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `bool` | 是否忽略该风险 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `RiskParamsOpt` | 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数 |

**示例**

``````````````yak
// 该示例为示意性用法：将风险标记为忽略
risk.NewRisk("http://example.com", risk.ignore(true))
``````````````

---

### ip {#ip}

```go
ip(i string) RiskParamsOpt
```

是一个选项参数，用于指定风险记录关联的 IP 地址

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `string` | IP 地址字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `RiskParamsOpt` | 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数 |

**示例**

``````````````yak
// 该示例为示意性用法：指定风险关联 IP
risk.NewRisk("http://example.com", risk.ip("1.2.3.4"))
``````````````

---

### level {#level}

```go
level(i string) RiskParamsOpt
```

severity 是一个选项参数，用于指定风险记录的严重程度

可用的严重程度有: critical, high, warning, info, low

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `string` | 严重程度，可选 critical / high / warning / info / low |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `RiskParamsOpt` | 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数 |

**示例**

``````````````yak
risk.NewRisk(target, risk.severity("high"))
``````````````

---

### parameter {#parameter}

```go
parameter(i string) RiskParamsOpt
```

是一个选项参数，用于指定风险记录的参数

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `string` | 风险记录的参数 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `RiskParamsOpt` | 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数 |

**示例**

``````````````yak
risk.NewRisk(target, risk.parameter("param"))
``````````````

---

### payload {#payload}

```go
payload(i string) RiskParamsOpt
```

是一个选项参数，用于指定漏洞记录的载荷(payload)

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `string` | 漏洞记录的载荷(payload) |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `RiskParamsOpt` | 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数 |

**示例**

``````````````yak
risk.NewRisk(target, risk.payload("payload"))
``````````````

---

### potential {#potential}

```go
potential(i bool) RiskParamsOpt
```

是一个选项参数，用于标记风险记录是否为潜在(疑似)风险

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `bool` | 是否为潜在风险 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `RiskParamsOpt` | 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数 |

**示例**

``````````````yak
// 该示例为示意性用法：标记为潜在风险
risk.NewRisk("http://example.com", risk.potential(true))
``````````````

---

### request {#request}

```go
request(i any) RiskParamsOpt
```

是一个选项参数，用于指定风险记录的原始请求报文

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 原始请求报文，支持 string / []byte / 任意可转成字符串的类型 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `RiskParamsOpt` | 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数 |

**示例**

``````````````yak
risk.NewRisk(target, risk.request(req))
``````````````

---

### response {#response}

```go
response(i any) RiskParamsOpt
```

是一个选项参数，用于指定风险记录的原始响应报文

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 原始响应报文，支持 string / []byte / 任意可转成字符串的类型 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `RiskParamsOpt` | 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数 |

**示例**

``````````````yak
risk.NewRisk(target, risk.response(resp))
``````````````

---

### runtimeId {#runtimeid}

```go
runtimeId(i string) RiskParamsOpt
```

是一个选项参数，用于指定风险记录的运行时 ID

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `string` | 风险记录的运行时 ID |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `RiskParamsOpt` | 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数 |

**示例**

``````````````yak
risk.NewRisk(target, risk.runtimeId(runtime_id))
``````````````

---

### severity {#severity}

```go
severity(i string) RiskParamsOpt
```

是一个选项参数，用于指定风险记录的严重程度

可用的严重程度有: critical, high, warning, info, low

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `string` | 严重程度，可选 critical / high / warning / info / low |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `RiskParamsOpt` | 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数 |

**示例**

``````````````yak
risk.NewRisk(target, risk.severity("high"))
``````````````

---

### solution {#solution}

```go
solution(i string) RiskParamsOpt
```

是一个选项参数，用于指定漏洞记录的解决方案

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `string` | 漏洞记录的解决方案 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `RiskParamsOpt` | 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数 |

**示例**

``````````````yak
risk.NewRisk(target, risk.description(description), risk.solution(solution))
``````````````

---

### tag {#tag}

```go
tag(i string) RiskParamsOpt
```

是一个选项参数，用于为风险记录设置标签(多个标签可用分隔符拼接)

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `string` | 标签字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `RiskParamsOpt` | 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数 |

**示例**

``````````````yak
// 该示例为示意性用法：为风险设置标签
risk.NewRisk("http://example.com", risk.tag("sqli,important"))
``````````````

---

### title {#title}

```go
title(i string) RiskParamsOpt
```

是一个选项参数，用于指定漏洞记录的标题

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `string` | 漏洞记录的标题 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `RiskParamsOpt` | 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数 |

**示例**

``````````````yak
risk.NewRisk(target, risk.title(title))
``````````````

---

### titleVerbose {#titleverbose}

```go
titleVerbose(i string) RiskParamsOpt
```

是一个选项参数，用于指定漏洞记录的详细标题

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `string` | 漏洞记录的详细标题 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `RiskParamsOpt` | 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数 |

**示例**

``````````````yak
risk.NewRisk(target, risk.titleVerbose(verbose_title))
``````````````

---

### token {#token}

```go
token(i string) RiskParamsOpt
```

是一个选项参数，用于指定风险记录的反连 token

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `string` | 风险记录的反连 token |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `RiskParamsOpt` | 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数 |

**示例**

``````````````yak
risk.NewRisk(target, risk.token("token"))
``````````````

---

### type {#type}

```go
type(i string) RiskParamsOpt
```

是一个选项参数，用于指定风险类型，可用的风险类型:

SQL 注入: sqli​,sqlinj​,sql-inj,sqlinjection​,sql-injection​

跨站脚本:xss​

远程执行: rce​,rce-command,rce-code​

文件操作: lfi​,file-read​,file-download​,rfi​,file-write​,file-upload​

其他注入类型: xxe​,ssti​

序列化问题: unserialize​,deserialization​

访问控制: unauth-access​

未授权访问​: auth-bypass​,authentication-bypass​,privilege-escalation​

信息泄露: path-traversal​,info-exposure​,information-exposure​

配置与凭证问题: insecure-default​,weak-pass​,weak-password​,weak-credential​

逻辑漏洞: logic​

安全测试: compliance-test​,cve-baseline​

服务端请求伪造: ssrf​

跨站请求伪造 : csrf​

反连检测: random-port-trigger[tcp]​,random-port-trigger[udp]​,reverse​,reverse-​,reverse-tcp​,reverse-tls​,reverse-rmi​,reverse-rmi-handshake​,reverse-http​,reverse-https​,reverse-dns​,reverse-ldap

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `string` | 风险类型字符串，见上方可用类型列表 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `RiskParamsOpt` | 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数 |

**示例**

``````````````yak
risk.NewRisk(
addr,
risk.title("CVE-2021-22145"),
risk.severity("low"),
risk.titleVerbose("CVE-2021-22145 Elasticsearch 敏感信息泄漏漏洞"),
risk.type("info-exposure"),
risk.cve("CVE-2021-22145"),
)
``````````````

---

### typeVerbose {#typeverbose}

```go
typeVerbose(i string) RiskParamsOpt
```

是一个选项参数，用于指定风险类型的详细描述

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `string` | 风险类型的详细描述 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `RiskParamsOpt` | 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数 |

**示例**

``````````````yak
risk.NewRisk(target, risk.typeVerbose("SQL注入漏洞"))
``````````````

---

## 可变参数函数详情

### CheckDNSLogByToken {#checkdnslogbytoken}

```go
CheckDNSLogByToken(token string, timeout ...float64) ([]*tpb.DNSLogEvent, error)
```

通过 token 查询 DNSLog 平台上是否收到对应的 DNS 解析触发（导出名为 risk.CheckDNSLogByToken）

常用于带外（OOB）漏洞验证，配合 risk.NewDNSLogDomain 生成的 token 使用

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| token | `string` | DNSLog token |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| timeout | `...float64` | 可选的查询超时时间（秒） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*tpb.DNSLogEvent` | 收到的 DNSLog 事件列表 |
| r2 | `error` | 错误信息（查询失败时返回） |

**示例**

``````````````yak
domain, token = risk.NewDNSLogDomain()~
// 触发目标解析 domain 后查询（需要网络与 DNSLog 平台，示意性示例）
events = risk.CheckDNSLogByToken(token, 5)~
for e in events { println(e.Domain) }
``````````````

---

### CheckHTTPLogByToken {#checkhttplogbytoken}

```go
CheckHTTPLogByToken(token string, timeout ...float64) ([]*tpb.HTTPRequestTriggerNotification, error)
```

通过 token 查询是否收到对应的 HTTP 带外请求（导出名为 risk.CheckHTTPLogByToken）

常用于带外（OOB）漏洞验证，配合 risk.NewHTTPLog 生成的 token 使用

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| token | `string` | HTTPLog token |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| timeout | `...float64` | 可选的查询超时时间（秒） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*tpb.HTTPRequestTriggerNotification` | 收到的 HTTP 触发通知列表 |
| r2 | `error` | 错误信息（查询失败时返回） |

**示例**

``````````````yak
// 无法本地验证: 依赖带外(HTTPLog)平台与公网 Bridge
domain, token = risk.NewHTTPLog()~
// 触发目标访问 domain 后查询是否收到带外回连记录
notifications = risk.CheckHTTPLogByToken(token, 5)~
for n in notifications { println(n.Url) }
``````````````

---

### CreateRisk {#createrisk}

```go
CreateRisk(u string, opts ...RiskParamsOpt) *schema.Risk
```

创建漏洞记录结构体，但是并不会保存到数据库，第一个参数是目标URL，后面可以传入零个或多个选项参数，用于指定 risk 的结构，其通常与 Save 一起使用

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| u | `string` | 目标 URL 或 IP |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...RiskParamsOpt` | 零个或多个风险选项参数，如 risk.title、risk.type、risk.severity 等 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*schema.Risk` | 创建的风险记录结构体 |

**示例**

``````````````yak
// 关键词: risk.CreateRisk, 结构化记录漏洞
// CreateRisk 只构造风险结构体, 不入库; 配合 risk.Save 才写入数据库(Yakit 漏洞列表可见)
r = risk.CreateRisk("http://example.com",

	risk.title("SQL Injection in id param"), // 漏洞标题
	risk.type("sqli"),                        // 漏洞类型
	risk.severity("high"),                    // 等级: info/low/middle/high/critical
	risk.payload("id=1' or '1'='1"),          // 触发用 payload
	risk.description("user-controlled id concatenated into SQL"),
	risk.solution("use parameterized queries"),

)
println("title:", r.Title, "severity:", r.Severity) // 预期: title: SQL Injection in id param severity: high
assert r.Title == "SQL Injection in id param", "title should be set"
assert r.Severity == "high", "severity should be set"
risk.Save(r) // 保存到数据库; 也可用 risk.NewRisk(target, ...) 一步创建并保存
``````````````

---

### NewHTTPLog {#newhttplog}

```go
NewHTTPLog(i ...any) (domain string, token string, _ error)
```

返回一个公网 Bridge 的 HTTPLog 域名，返回的第一个值是域名，第二个值是 token，第三个值是错误

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `...any` | 可选参数，用于定制 HTTPLog 域名申请的行为 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| domain | `string` | HTTPLog 域名 |
| token | `string` | 反连验证用的 token |
| _ | `error` | 错误信息，失败时非 nil |

**示例**

``````````````yak
domain, token = risk.NewHTTPLog()~
``````````````

---

### NewRandomPortTrigger {#newrandomporttrigger}

```go
NewRandomPortTrigger(opt ...RiskParamsOpt) (token string, addr string, _ error)
```

返回一个公网 Bridge 的随机端口反连检测地址，返回的第一个值是 token，第二个值是检测地址，第三个值是错误

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opt | `...RiskParamsOpt` | 零个或多个风险选项参数，如 risk.title、risk.severity 等 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| token | `string` | 反连验证用的 token |
| addr | `string` | 随机端口反连检测地址 |
| _ | `error` | 错误信息，失败时非 nil |

**示例**

``````````````yak
// 无法本地验证: 依赖公网 Bridge 反连服务(需配置 yak bridge 地址)
token, addr = risk.NewRandomPortTrigger()~ // 申请一个随机端口反连检测地址
``````````````

---

### NewRisk {#newrisk}

```go
NewRisk(target string, opts ...yakit.RiskParamsOpt)
```

创建一条漏洞记录并保存到数据库（导出名为 risk.NewRisk）

第一个参数为目标，后面可传入零个或多个选项用于描述该 risk（标题、类型、严重程度、描述、解决方案等）

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| target | `string` | 漏洞目标，通常为 URL 或 IP |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...yakit.RiskParamsOpt` | 可选项，如 risk.title / risk.type / risk.severity / risk.description / risk.solution 等 |

**示例**

``````````````yak
risk.NewRisk("http://example.com",
    risk.title("SQL Injection"),
    risk.type("sqli"),
    risk.severity("high"),
)
// 写入后可用 risk.YieldRiskByTarget 等查询（示意性示例）
``````````````

---

### NewUnverifiedRisk {#newunverifiedrisk}

```go
NewUnverifiedRisk(u string, token string, opts ...RiskParamsOpt) (*schema.Risk, error)
```

创建一条&#34;待验证&#34;风险记录并保存，常用于反连(reverse)类漏洞先记录、后由回连验证

在 yak 中通过 risk.NewUnverifiedRisk 调用，配合反连 token 使用

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| u | `string` | 风险目标(URL 或 IP) |
| token | `string` | 反连验证用的 token |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...RiskParamsOpt` | 零个或多个风险选项参数，如 risk.title、risk.severity 等 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*schema.Risk` | 创建的风险记录结构体 |
| r2 | `error` | 错误信息，保存失败时非 nil |

**示例**

``````````````yak
// 该示例为示意性用法：创建待验证风险
token = risk.NewDNSLogDomain()[1]
r, err = risk.NewUnverifiedRisk("http://example.com", token, risk.title("SSRF"), risk.severity("high"))
``````````````

---

### QueryRisksByKeyword {#queryrisksbykeyword}

```go
QueryRisksByKeyword(keyword string, opts ...yakit.RiskParamsOpt) chan *schema.Risk
```

根据关键字查询风险记录，返回风险记录的管道

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| keyword | `string` | 查询关键字 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...yakit.RiskParamsOpt` | 零个或多个风险选项参数，用于附加过滤条件，如 risk.severity、risk.type 等 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `chan *schema.Risk` | 风险记录的管道 |

**示例**

``````````````yak
for risk := range risk.QueryRisksByKeyword("SQL注入", risk.severity("high")) {
println(risk)
}
``````````````

---

