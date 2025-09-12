# risk

|函数名|函数描述/介绍|
|:------|:--------|
| [risk.CheckDNSLogByToken](#checkdnslogbytoken) ||
| [risk.CheckHTTPLogByToken](#checkhttplogbytoken) ||
| [risk.CheckICMPTriggerByLength](#checkicmptriggerbylength) ||
| [risk.CheckRandomTriggerByToken](#checkrandomtriggerbytoken) ||
| [risk.CheckServerReachable](#checkserverreachable) |CheckServerReachable 通过 Bridge 检查目标是否可达，第一个参数为上下文，第二个参数为目标地址，第三个参数为是否进行 http 检测，返回的第一个值是 CheckServerReachableResponse，第二个值是错误  |
| [risk.CreateRisk](#createrisk) |CreateRisk 创建漏洞记录结构体，但是并不会保存到数据库，第一个参数是目标URL，后面可以传入零个或多个选项参数，用于指定 risk 的结构，其通常与 Save 一起使用  |
| [risk.DeleteRiskByID](#deleteriskbyid) |DeleteRiskByID 根据风险记录ID删除风险记录 |
| [risk.DeleteRiskByTarget](#deleteriskbytarget) |DeleteRiskByTarget 根据目标(ip或ip:port)删除风险记录  |
| [risk.ExtractTokenFromUrl](#extracttokenfromurl) ||
| [risk.GetSSARiskByID](#getssariskbyid) |GetSSARiskByID 根据 SSA Risk ID 获取 SSA 风险记录  |
| [risk.GetSSARiskSourceCode](#getssarisksourcecode) |GetSSARiskSourceCode 根据 SSA Risk ID 获取完整的源代码,无法获取会返回相关代码片段CodeFragment  |
| [risk.GetSSARiskSourceCodeWithFragment](#getssarisksourcecodewithfragment) |GetSSARiskSourceCodeWithFragment 根据 SSA Risk ID 获取源代码，如果获取完整源码失败则返回代码片段CodeFragment  返回: (完整源码, 代码片段, 是否成功获取完整源码)  |
| [risk.GetSSARiskWithDataFlow](#getssariskwithdataflow) |GetSSARiskWithDataFlow 根据 SSA Risk ID 获取包含数据流信息的风险记录  |
| [risk.HaveReverseRisk](#havereverserisk) |HaveReverseRisk 通过轮询检查是否存在对应token的反连记录，重试最多5次，每次等待1秒， 如果存在返回true，否则返回false  |
| [risk.NewDNSLogDomain](#newdnslogdomain) |NewDNSLogDomain 返回一个公网 Bridge 的 DNSLog 域名，返回的第一个值是域名，第二个值是 token，第三个值是错误  |
| [risk.NewHTTPLog](#newhttplog) |NewHTTPLog 返回一个公网 Bridge 的 HTTPLog 域名，返回的第一个值是域名，第二个值是 token，第三个值是错误  |
| [risk.NewLocalReverseHTTPSUrl](#newlocalreversehttpsurl) |NewLocalReverseHTTPSUrl 返回一个本地 Bridge 的反向 HTTPS URL  |
| [risk.NewLocalReverseHTTPUrl](#newlocalreversehttpurl) |NewLocalReverseHTTPUrl 返回一个本地 Bridge 的反向 HTTP URL  |
| [risk.NewLocalReverseRMIUrl](#newlocalreversermiurl) |NewLocalReverseRMIUrl 返回一个本地 Bridge 的反向 RMI URL  |
| [risk.NewPublicReverseHTTPSUrl](#newpublicreversehttpsurl) |NewPublicReverseHTTPSUrl 返回一个公网 Bridge 的反向 HTTPS URL  |
| [risk.NewPublicReverseHTTPUrl](#newpublicreversehttpurl) |NewPublicReverseHTTPUrl 返回一个公网 Bridge 的反向 HTTP URL  |
| [risk.NewPublicReverseRMIUrl](#newpublicreversermiurl) |NewPublicReverseRMIUrl 返回一个公网 Bridge 的反向 RMI URL  |
| [risk.NewRandomPortTrigger](#newrandomporttrigger) |NewRandomPortTrigger 返回一个公网 Bridge 的随机端口反连检测地址，返回的第一个值是 token，第二个值是检测地址，第三个值是错误  |
| [risk.NewRisk](#newrisk) ||
| [risk.NewUnverifiedRisk](#newunverifiedrisk) ||
| [risk.QueryRisksByKeyword](#queryrisksbykeyword) |QueryRisksByKeyword 根据关键字查询风险记录，返回风险记录的管道  |
| [risk.RegisterBeforeRiskSave](#registerbeforerisksave) ||
| [risk.Save](#save) ||
| [risk.YieldRiskByCreateAt](#yieldriskbycreateat) |YieldRiskByCreateAt 根据创建时间戳获取风险记录，返回风险记录的管道  |
| [risk.YieldRiskByIds](#yieldriskbyids) |YieldRiskByIds 根据 Risk ID 获取风险记录，返回风险记录的管道  |
| [risk.YieldRiskByRuntimeId](#yieldriskbyruntimeid) |YieldRiskByRuntimeId 根据 RuntimeID 获取风险记录，返回风险记录的管道  |
| [risk.YieldRiskByScriptName](#yieldriskbyscriptname) |YieldRiskByScriptName 根据插件名戳获取风险记录，返回风险记录的管道  |
| [risk.YieldRiskByTarget](#yieldriskbytarget) |YieldRiskByTarget 根据目标(ip或ip:port)获取风险记录，返回风险记录的管道  |
| [risk.cve](#cve) |cve 是一个选项参数，用于指定风险记录的 CVE 编号  |
| [risk.description](#description) |description 是一个选项参数，用于指定漏洞记录的描述  |
| [risk.details](#details) |details 是一个选项参数，用于指定风险记录的详细信息  |
| [risk.fromYakScript](#fromyakscript) |fromScript 是一个选项参数，用于指定风险记录的来源插件名  |
| [risk.ignore](#ignore) ||
| [risk.ip](#ip) ||
| [risk.level](#level) |severity 是一个选项参数，用于指定风险记录的严重程度  可用的严重程度有: critical, high, warning, info, low  |
| [risk.parameter](#parameter) |parameter 是一个选项参数，用于指定风险记录的参数  |
| [risk.payload](#payload) |payload 是一个选项参数，用于指定漏洞记录的载荷(payload)  |
| [risk.potential](#potential) ||
| [risk.request](#request) |request 是一个选项参数，用于指定风险记录的原始请求报文  |
| [risk.response](#response) |response 是一个选项参数，用于指定风险记录的原始响应报文  |
| [risk.runtimeId](#runtimeid) |runtimeId 是一个选项参数，用于指定风险记录的运行时 ID  |
| [risk.severity](#severity) |severity 是一个选项参数，用于指定风险记录的严重程度  可用的严重程度有: critical, high, warning, info, low  |
| [risk.solution](#solution) |solution 是一个选项参数，用于指定漏洞记录的解决方案  |
| [risk.tag](#tag) ||
| [risk.title](#title) |title 是一个选项参数，用于指定漏洞记录的标题  |
| [risk.titleVerbose](#titleverbose) |titleVerbose 是一个选项参数，用于指定漏洞记录的详细标题  |
| [risk.token](#token) |token 是一个选项参数，用于指定风险记录的反连 token  |
| [risk.type](#type) |type 是一个选项参数，用于指定风险类型，可用的风险类型:  SQL 注入: sqli​,sqlinj​,sql-inj,sqlinjection​,sql-injection​  跨站脚本:xss​  远程执行: rce​,rce-command,rce-code​  文件操作: lfi​,fi...|
| [risk.typeVerbose](#typeverbose) |typeVerbose 是一个选项参数，用于指定风险类型的详细描述  |


## 函数定义
### CheckDNSLogByToken

#### 详细描述


#### 定义

`CheckDNSLogByToken(token string, timeout ...float64) ([]*tpb.DNSLogEvent, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| token | `string` |   |
| timeout | `...float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*tpb.DNSLogEvent` |   |
| r2 | `error` |   |


### CheckHTTPLogByToken

#### 详细描述


#### 定义

`CheckHTTPLogByToken(token string, timeout ...float64) ([]*tpb.HTTPRequestTriggerNotification, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| token | `string` |   |
| timeout | `...float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*tpb.HTTPRequestTriggerNotification` |   |
| r2 | `error` |   |


### CheckICMPTriggerByLength

#### 详细描述


#### 定义

`CheckICMPTriggerByLength(i int) (*tpb.ICMPTriggerNotification, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*tpb.ICMPTriggerNotification` |   |
| r2 | `error` |   |


### CheckRandomTriggerByToken

#### 详细描述


#### 定义

`CheckRandomTriggerByToken(t string) (*tpb.RandomPortTriggerEvent, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| t | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*tpb.RandomPortTriggerEvent` |   |
| r2 | `error` |   |


### CheckServerReachable

#### 详细描述
CheckServerReachable 通过 Bridge 检查目标是否可达，第一个参数为上下文，第二个参数为目标地址，第三个参数为是否进行 http 检测，返回的第一个值是 CheckServerReachableResponse，第二个值是错误

Example:
```
resp = risk.CheckServerReachable(context.Background(), "example.com", false)~
print(resp.Reachable) // 是否可达
```


#### 定义

`CheckServerReachable(ctx context.Context, target string, httpCheck bool) (*tpb.CheckServerReachableResponse, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` |   |
| target | `string` |   |
| httpCheck | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*tpb.CheckServerReachableResponse` |   |
| r2 | `error` |   |


### CreateRisk

#### 详细描述
CreateRisk 创建漏洞记录结构体，但是并不会保存到数据库，第一个参数是目标URL，后面可以传入零个或多个选项参数，用于指定 risk 的结构，其通常与 Save 一起使用

Example:
```
r = risk.CreateRisk("http://example.com", risk.title("SQL注入漏洞"), risk.type("sqli"), risk.severity("high"), risk.description(""), risk.solution(""))
risk.Save(r)
```


#### 定义

`CreateRisk(u string, opts ...RiskParamsOpt) *schema.Risk`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| u | `string` |   |
| opts | `...RiskParamsOpt` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*schema.Risk` |   |


### DeleteRiskByID

#### 详细描述
DeleteRiskByID 根据风险记录ID删除风险记录


#### 定义

`DeleteRiskByID(id int64) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| id | `int64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### DeleteRiskByTarget

#### 详细描述
DeleteRiskByTarget 根据目标(ip或ip:port)删除风险记录

Example:
```
risk.DeleteRiskByTarget("example.com")
```


#### 定义

`DeleteRiskByTarget(addr string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| addr | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### ExtractTokenFromUrl

#### 详细描述


#### 定义

`ExtractTokenFromUrl(tokenUrl string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tokenUrl | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### GetSSARiskByID

#### 详细描述
GetSSARiskByID 根据 SSA Risk ID 获取 SSA 风险记录

Example:
```
ssaRisk = risk.GetSSARiskByID(123)

	if ssaRisk != nil {
	    println("风险标题:", ssaRisk.Title)
	    println("代码片段:", ssaRisk.CodeFragment)
	}

```


#### 定义

`GetSSARiskByID(id int64) *schema.SSARisk`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| id | `int64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*schema.SSARisk` |   |


### GetSSARiskSourceCode

#### 详细描述
GetSSARiskSourceCode 根据 SSA Risk ID 获取完整的源代码,无法获取会返回相关代码片段CodeFragment

Example:
```
sourceCode = risk.GetSSARiskSourceCode(123)

	if sourceCode != "" {
	    println("完整源代码:", sourceCode)
	}

```


#### 定义

`GetSSARiskSourceCode(id int64) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| id | `int64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### GetSSARiskSourceCodeWithFragment

#### 详细描述
GetSSARiskSourceCodeWithFragment 根据 SSA Risk ID 获取源代码，如果获取完整源码失败则返回代码片段CodeFragment

返回: (完整源码, 代码片段, 是否成功获取完整源码)

Example:
```
fullCode, fragment, isFullCode = risk.GetSSARiskSourceCodeWithFragment(123)

	if isFullCode {
	    println("获取到完整源代码")
	} else {

	    println("只获取到代码片段")
	}

```


#### 定义

`GetSSARiskSourceCodeWithFragment(id int64) (string, string, bool)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| id | `int64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `string` |   |
| r3 | `bool` |   |


### GetSSARiskWithDataFlow

#### 详细描述
GetSSARiskWithDataFlow 根据 SSA Risk ID 获取包含数据流信息的风险记录

Example:
```
wrappedRisk = risk.GetSSARiskWithDataFlow(123)

	if wrappedRisk != nil {
	    println("风险标题:", wrappedRisk.Title)
	    println("数据流路径数量:", len(wrappedRisk.DataFlowPaths))
	}

```


#### 定义

`GetSSARiskWithDataFlow(id int64) *sfreport.Risk`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| id | `int64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*sfreport.Risk` |   |


### HaveReverseRisk

#### 详细描述
HaveReverseRisk 通过轮询检查是否存在对应token的反连记录，重试最多5次，每次等待1秒， 如果存在返回true，否则返回false

Example:
```
if risk.HaveReverseRisk("token") { // 轮询检查是否存在反连风险，会阻塞
println("have reverse risk")
}
```


#### 定义

`HaveReverseRisk(token string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| token | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### NewDNSLogDomain

#### 详细描述
NewDNSLogDomain 返回一个公网 Bridge 的 DNSLog 域名，返回的第一个值是域名，第二个值是 token，第三个值是错误

Example:
```
domain, token = risk.NewDNSLogDomain()~
```


#### 定义

`NewDNSLogDomain() (domain string, token string, _ error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| domain | `string` |   |
| token | `string` |   |
| _ | `error` |   |


### NewHTTPLog

#### 详细描述
NewHTTPLog 返回一个公网 Bridge 的 HTTPLog 域名，返回的第一个值是域名，第二个值是 token，第三个值是错误

Example:
```
domain, token = risk.NewHTTPLog()~
```


#### 定义

`NewHTTPLog(i ...any) (domain string, token string, _ error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| domain | `string` |   |
| token | `string` |   |
| _ | `error` |   |


### NewLocalReverseHTTPSUrl

#### 详细描述
NewLocalReverseHTTPSUrl 返回一个本地 Bridge 的反向 HTTPS URL

Example:
```
url := risk.NewLocalReverseHTTPSUrl()
```


#### 定义

`NewLocalReverseHTTPSUrl() string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### NewLocalReverseHTTPUrl

#### 详细描述
NewLocalReverseHTTPUrl 返回一个本地 Bridge 的反向 HTTP URL

Example:
```
url := risk.NewLocalReverseHTTPUrl()
```


#### 定义

`NewLocalReverseHTTPUrl() string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### NewLocalReverseRMIUrl

#### 详细描述
NewLocalReverseRMIUrl 返回一个本地 Bridge 的反向 RMI URL

Example:
```
url := risk.NewLocalReverseRMIUrl()
```


#### 定义

`NewLocalReverseRMIUrl() string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### NewPublicReverseHTTPSUrl

#### 详细描述
NewPublicReverseHTTPSUrl 返回一个公网 Bridge 的反向 HTTPS URL

Example:
```
url := risk.NewPublicReverseHTTPSUrl()
```


#### 定义

`NewPublicReverseHTTPSUrl() string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### NewPublicReverseHTTPUrl

#### 详细描述
NewPublicReverseHTTPUrl 返回一个公网 Bridge 的反向 HTTP URL

Example:
```
url := risk.NewPublicReverseHTTPUrl()
```


#### 定义

`NewPublicReverseHTTPUrl() string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### NewPublicReverseRMIUrl

#### 详细描述
NewPublicReverseRMIUrl 返回一个公网 Bridge 的反向 RMI URL

Example:
```
url := risk.NewPublicReverseRMIUrl()
```


#### 定义

`NewPublicReverseRMIUrl() string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### NewRandomPortTrigger

#### 详细描述
NewRandomPortTrigger 返回一个公网 Bridge 的随机端口反连检测地址，返回的第一个值是 token，第二个值是检测地址，第三个值是错误

Example:
```
token, addr = risk.NewRandomPortTrigger()~
```


#### 定义

`NewRandomPortTrigger(opt ...RiskParamsOpt) (token string, addr string, _ error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opt | `...RiskParamsOpt` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| token | `string` |   |
| addr | `string` |   |
| _ | `error` |   |


### NewRisk

#### 详细描述


#### 定义

`NewRisk(target string, opts ...yakit.RiskParamsOpt)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| target | `string` |   |
| opts | `...yakit.RiskParamsOpt` |   |


### NewUnverifiedRisk

#### 详细描述


#### 定义

`NewUnverifiedRisk(u string, token string, opts ...RiskParamsOpt) (*schema.Risk, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| u | `string` |   |
| token | `string` |   |
| opts | `...RiskParamsOpt` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*schema.Risk` |   |
| r2 | `error` |   |


### QueryRisksByKeyword

#### 详细描述
QueryRisksByKeyword 根据关键字查询风险记录，返回风险记录的管道

Example:
```
for risk := range risk.QueryRisksByKeyword("SQL注入", risk.severity("high")) {
println(risk)
}
```


#### 定义

`QueryRisksByKeyword(keyword string, opts ...yakit.RiskParamsOpt) chan *schema.Risk`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| keyword | `string` |   |
| opts | `...yakit.RiskParamsOpt` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *schema.Risk` |   |


### RegisterBeforeRiskSave

#### 详细描述


#### 定义

`RegisterBeforeRiskSave(f func(*schema.Risk))`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `func(*schema.Risk)` |   |


### Save

#### 详细描述


#### 定义

`Save(risk *schema.Risk) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| risk | `*schema.Risk` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### YieldRiskByCreateAt

#### 详细描述
YieldRiskByCreateAt 根据创建时间戳获取风险记录，返回风险记录的管道

Example:
```
ts = time.Parse("2006-01-02 15:04:05", "2020-01-01 00:00:00")~.Unix()
for risk := range risk.YieldRiskByCreateAt(ts) {
println(risk)
}
```


#### 定义

`YieldRiskByCreateAt(timestamp int64) chan *schema.Risk`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| timestamp | `int64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *schema.Risk` |   |


### YieldRiskByIds

#### 详细描述
YieldRiskByIds 根据 Risk ID 获取风险记录，返回风险记录的管道

Example:
```
for risk := range risk.YieldRiskByIds([1,2,3]) {
println(risk)
}
```


#### 定义

`YieldRiskByIds(ids []int) chan *schema.Risk`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ids | `[]int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *schema.Risk` |   |


### YieldRiskByRuntimeId

#### 详细描述
YieldRiskByRuntimeId 根据 RuntimeID 获取风险记录，返回风险记录的管道

Example:
```
for risk := range risk.YieldRiskByRuntimeId("161c5372-3e75-46f6-a6bf-1a3182da625e") {
println(risk)
}
```


#### 定义

`YieldRiskByRuntimeId(runtimeId string) chan *schema.Risk`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| runtimeId | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *schema.Risk` |   |


### YieldRiskByScriptName

#### 详细描述
YieldRiskByScriptName 根据插件名戳获取风险记录，返回风险记录的管道

Example:
```
for risk := range risk.YieldRiskByScriptName("基础 XSS 检测") {
println(risk)
}
```


#### 定义

`YieldRiskByScriptName(scriptName string) chan *schema.Risk`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| scriptName | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *schema.Risk` |   |


### YieldRiskByTarget

#### 详细描述
YieldRiskByTarget 根据目标(ip或ip:port)获取风险记录，返回风险记录的管道

Example:
```
for risk := range risk.YieldRiskByTarget("example.com") {
println(risk)
}
```


#### 定义

`YieldRiskByTarget(target string) chan *schema.Risk`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| target | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *schema.Risk` |   |


### cve

#### 详细描述
cve 是一个选项参数，用于指定风险记录的 CVE 编号

Example:
```
risk.NewRisk(target, risk.cve("CVE-2021-22145"))
```


#### 定义

`cve(s string) RiskParamsOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RiskParamsOpt` |   |


### description

#### 详细描述
description 是一个选项参数，用于指定漏洞记录的描述

Example:
```
risk.NewRisk(target, risk.description(description))
```


#### 定义

`description(i string) RiskParamsOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RiskParamsOpt` |   |


### details

#### 详细描述
details 是一个选项参数，用于指定风险记录的详细信息

Example:
```
risk.NewRisk(target, risk.details({"message": message, "ohter_message": message}))
```


#### 定义

`details(i any) RiskParamsOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RiskParamsOpt` |   |


### fromYakScript

#### 详细描述
fromScript 是一个选项参数，用于指定风险记录的来源插件名

Example:
```
risk.NewRisk(target, risk.fromScript("plugin_name"))
```


#### 定义

`fromYakScript(i string) RiskParamsOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RiskParamsOpt` |   |


### ignore

#### 详细描述


#### 定义

`ignore(r *schema.Risk)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| r | `*schema.Risk` |   |


### ip

#### 详细描述


#### 定义

`ip(i string) RiskParamsOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RiskParamsOpt` |   |


### level

#### 详细描述
severity 是一个选项参数，用于指定风险记录的严重程度

可用的严重程度有: critical, high, warning, info, low

Example:
```
risk.NewRisk(target, risk.severity("high"))
```


#### 定义

`level(i string) RiskParamsOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RiskParamsOpt` |   |


### parameter

#### 详细描述
parameter 是一个选项参数，用于指定风险记录的参数

Example:
```
risk.NewRisk(target, risk.parameter("param"))
```


#### 定义

`parameter(i string) RiskParamsOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RiskParamsOpt` |   |


### payload

#### 详细描述
payload 是一个选项参数，用于指定漏洞记录的载荷(payload)

Example:
```
risk.NewRisk(target, risk.payload("payload"))
```


#### 定义

`payload(i string) RiskParamsOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RiskParamsOpt` |   |


### potential

#### 详细描述


#### 定义

`potential(i bool) RiskParamsOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RiskParamsOpt` |   |


### request

#### 详细描述
request 是一个选项参数，用于指定风险记录的原始请求报文

Example:
```
risk.NewRisk(target, risk.request(req))
```


#### 定义

`request(i any) RiskParamsOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RiskParamsOpt` |   |


### response

#### 详细描述
response 是一个选项参数，用于指定风险记录的原始响应报文

Example:
```
risk.NewRisk(target, risk.response(resp))
```


#### 定义

`response(i any) RiskParamsOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RiskParamsOpt` |   |


### runtimeId

#### 详细描述
runtimeId 是一个选项参数，用于指定风险记录的运行时 ID

Example:
```
risk.NewRisk(target, risk.runtimeId(runtime_id))
```


#### 定义

`runtimeId(i string) RiskParamsOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RiskParamsOpt` |   |


### severity

#### 详细描述
severity 是一个选项参数，用于指定风险记录的严重程度

可用的严重程度有: critical, high, warning, info, low

Example:
```
risk.NewRisk(target, risk.severity("high"))
```


#### 定义

`severity(i string) RiskParamsOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RiskParamsOpt` |   |


### solution

#### 详细描述
solution 是一个选项参数，用于指定漏洞记录的解决方案

Example:
```
risk.NewRisk(target, risk.description(description), risk.solution(solution))
```


#### 定义

`solution(i string) RiskParamsOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RiskParamsOpt` |   |


### tag

#### 详细描述


#### 定义

`tag(i string) RiskParamsOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RiskParamsOpt` |   |


### title

#### 详细描述
title 是一个选项参数，用于指定漏洞记录的标题

Example:
```
risk.NewRisk(target, risk.title(title))
```


#### 定义

`title(i string) RiskParamsOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RiskParamsOpt` |   |


### titleVerbose

#### 详细描述
titleVerbose 是一个选项参数，用于指定漏洞记录的详细标题

Example:
```
risk.NewRisk(target, risk.titleVerbose(verbose_title))
```


#### 定义

`titleVerbose(i string) RiskParamsOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RiskParamsOpt` |   |


### token

#### 详细描述
token 是一个选项参数，用于指定风险记录的反连 token

Example:
```
risk.NewRisk(target, risk.token("token"))
```


#### 定义

`token(i string) RiskParamsOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RiskParamsOpt` |   |


### type

#### 详细描述
type 是一个选项参数，用于指定风险类型，可用的风险类型:

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

Example:
```
risk.NewRisk(
addr,
risk.title("CVE-2021-22145"),
risk.severity("low"),
risk.titleVerbose("CVE-2021-22145 Elasticsearch 敏感信息泄漏漏洞"),
risk.type("info-exposure"),
risk.cve("CVE-2021-22145"),
)
```


#### 定义

`type(i string) RiskParamsOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RiskParamsOpt` |   |


### typeVerbose

#### 详细描述
typeVerbose 是一个选项参数，用于指定风险类型的详细描述

Example:
```
risk.NewRisk(target, risk.typeVerbose("SQL注入漏洞"))
```


#### 定义

`typeVerbose(i string) RiskParamsOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RiskParamsOpt` |   |


