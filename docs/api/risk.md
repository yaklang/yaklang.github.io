# risk

|函数名|函数描述/介绍|
|:------|:--------|
| [risk.CheckDNSLogByToken](#checkdnslogbytoken) |CheckDNSLogByToken 通过 token 查询 DNSLog 平台上是否收到对应的 DNS 解析触发（导出名为 risk.CheckDNSLogByToken） 常用于带外（OOB）漏洞验证，配合 risk.NewDNSLogDomain 生成的 token 使用 参数: - toke...|
| [risk.CheckHTTPLogByToken](#checkhttplogbytoken) |CheckHTTPLogByToken 通过 token 查询是否收到对应的 HTTP 带外请求（导出名为 risk.CheckHTTPLogByToken） 常用于带外（OOB）漏洞验证，配合 risk.NewHTTPLog 生成的 token 使用 参数: - token: HTTPLog to...|
| [risk.CheckICMPTriggerByLength](#checkicmptriggerbylength) |CheckICMPTriggerByLength 通过特定 ICMP 包长度检查 ICMP 反连事件，返回触发通知与错误 在 yak 中通过 risk.CheckICMPTriggerByLength 调用，依赖公网 Bridge 反连服务 参数: - i: 用于触发匹配的特定 ICMP 包长度 返...|
| [risk.CheckRandomTriggerByToken](#checkrandomtriggerbytoken) |CheckRandomTriggerByToken 通过 token 查询是否收到随机端口反连事件（导出名为 risk.CheckRandomTriggerByToken） 常用于带外（OOB）漏洞验证，配合 risk.NewRandomPortTrigger 生成的 token 使用 参数: - ...|
| [risk.CheckServerReachable](#checkserverreachable) |CheckServerReachable 通过 Bridge 检查目标是否可达，第一个参数为上下文，第二个参数为目标地址，第三个参数为是否进行 http 检测，返回的第一个值是 CheckServerReachableResponse，第二个值是错误 参数: - ctx: 上下文，用于控制超时与取消...|
| [risk.CreateRisk](#createrisk) |CreateRisk 创建漏洞记录结构体，但是并不会保存到数据库，第一个参数是目标URL，后面可以传入零个或多个选项参数，用于指定 risk 的结构，其通常与 Save 一起使用 参数: - u: 目标 URL 或 IP - opts: 零个或多个风险选项参数，如 risk.title、risk.t...|
| [risk.DeleteRiskByID](#deleteriskbyid) |DeleteRiskByID 根据风险记录ID删除风险记录 参数: - id: 风险记录 ID 返回值: - 错误信息，失败时非 nil|
| [risk.DeleteRiskByTarget](#deleteriskbytarget) |DeleteRiskByTarget 根据目标(ip或ip:port)删除风险记录 参数: - addr: 目标地址(ip 或 ip:port) 返回值: - 错误信息，失败时非 nil|
| [risk.ExtractTokenFromUrl](#extracttokenfromurl) |ExtractTokenFromUrl 从反连(reverse) URL 中提取其中携带的 token 字符串 在 yak 中通过 risk.ExtractTokenFromUrl 调用，常配合 DNSLog/HTTPLog 反连验证使用 参数: - tokenUrl: 包含 token 的反连 U...|
| [risk.GetSSARiskByID](#getssariskbyid) |GetSSARiskByID 根据 SSA Risk ID 获取 SSA 风险记录 参数: - id: SSA Risk ID 返回值: - SSA 风险记录，获取失败时返回 nil|
| [risk.GetSSARiskSourceCode](#getssarisksourcecode) |GetSSARiskSourceCode 根据 SSA Risk ID 获取完整的源代码,无法获取会返回相关代码片段CodeFragment 参数: - id: SSA Risk ID 返回值: - 完整源代码，无法获取时返回代码片段 CodeFragment|
| [risk.GetSSARiskSourceCodeWithFragment](#getssarisksourcecodewithfragment) |GetSSARiskSourceCodeWithFragment 根据 SSA Risk ID 获取源代码，如果获取完整源码失败则返回代码片段CodeFragment 参数: - id: SSA Risk ID 返回值: - 完整源码 - 代码片段 CodeFragment - 是否成功获取完整源码|
| [risk.GetSSARiskWithDataFlow](#getssariskwithdataflow) |GetSSARiskWithDataFlow 根据 SSA Risk ID 获取包含数据流信息的风险记录 参数: - id: SSA Risk ID 返回值: - 包含数据流信息的风险记录，获取失败时返回 nil|
| [risk.HaveReverseRisk](#havereverserisk) |HaveReverseRisk 通过轮询检查是否存在对应token的反连记录，重试最多5次，每次等待1秒， 如果存在返回true，否则返回false 参数: - token: 反连验证用的 token 返回值: - 是否存在对应 token 的反连记录|
| [risk.NewDNSLogDomain](#newdnslogdomain) |NewDNSLogDomain 返回一个公网 Bridge 的 DNSLog 域名，返回的第一个值是域名，第二个值是 token，第三个值是错误 返回值: - DNSLog 域名 - 反连验证用的 token - 错误信息，失败时非 nil|
| [risk.NewHTTPLog](#newhttplog) |NewHTTPLog 返回一个公网 Bridge 的 HTTPLog 域名，返回的第一个值是域名，第二个值是 token，第三个值是错误 参数: - i: 可选参数，用于定制 HTTPLog 域名申请的行为 返回值: - HTTPLog 域名 - 反连验证用的 token - 错误信息，失败时非 n...|
| [risk.NewLocalReverseHTTPSUrl](#newlocalreversehttpsurl) |NewLocalReverseHTTPSUrl 返回一个本地 Bridge 的反向 HTTPS URL 返回值: - 反向 HTTPS URL 字符串|
| [risk.NewLocalReverseHTTPUrl](#newlocalreversehttpurl) |NewLocalReverseHTTPUrl 返回一个本地 Bridge 的反向 HTTP URL 返回值: - 反向 HTTP URL 字符串|
| [risk.NewLocalReverseRMIUrl](#newlocalreversermiurl) |NewLocalReverseRMIUrl 返回一个本地 Bridge 的反向 RMI URL 返回值: - 反向 RMI URL 字符串|
| [risk.NewPublicReverseHTTPSUrl](#newpublicreversehttpsurl) |NewPublicReverseHTTPSUrl 返回一个公网 Bridge 的反向 HTTPS URL 返回值: - 反向 HTTPS URL 字符串|
| [risk.NewPublicReverseHTTPUrl](#newpublicreversehttpurl) |NewPublicReverseHTTPUrl 返回一个公网 Bridge 的反向 HTTP URL 返回值: - 反向 HTTP URL 字符串|
| [risk.NewPublicReverseRMIUrl](#newpublicreversermiurl) |NewPublicReverseRMIUrl 返回一个公网 Bridge 的反向 RMI URL 返回值: - 反向 RMI URL 字符串|
| [risk.NewRandomPortTrigger](#newrandomporttrigger) |NewRandomPortTrigger 返回一个公网 Bridge 的随机端口反连检测地址，返回的第一个值是 token，第二个值是检测地址，第三个值是错误 参数: - opt: 零个或多个风险选项参数，如 risk.title、risk.severity 等 返回值: - 反连验证用的 toke...|
| [risk.NewRisk](#newrisk) |NewRisk 创建一条漏洞记录并保存到数据库（导出名为 risk.NewRisk） 第一个参数为目标，后面可传入零个或多个选项用于描述该 risk（标题、类型、严重程度、描述、解决方案等） 参数: - target: 漏洞目标，通常为 URL 或 IP - opts: 可选项，如 risk.tit...|
| [risk.NewUnverifiedRisk](#newunverifiedrisk) |NewUnverifiedRisk 创建一条&#34;待验证&#34;风险记录并保存，常用于反连(reverse)类漏洞先记录、后由回连验证 在 yak 中通过 risk.NewUnverifiedRisk 调用，配合反连 token 使用 参数: - u: 风险目标(URL 或 IP) - token: 反连验证...|
| [risk.QueryRisksByKeyword](#queryrisksbykeyword) |QueryRisksByKeyword 根据关键字查询风险记录，返回风险记录的管道 参数: - keyword: 查询关键字 - opts: 零个或多个风险选项参数，用于附加过滤条件，如 risk.severity、risk.type 等 返回值: - 风险记录的管道|
| [risk.RegisterBeforeRiskSave](#registerbeforerisksave) |RegisterBeforeRiskSave 注册一个在风险记录保存到数据库之前执行的回调钩子，可用于统一改写/丰富风险字段 在 yak 中通过 risk.RegisterBeforeRiskSave 调用 参数: - f: 回调函数，入参为即将保存的风险记录，可在其中修改该记录|
| [risk.Save](#save) |Save 将一条漏洞记录结构体保存到数据库（导出名为 risk.Save） 通常与 risk.CreateRisk 搭配使用：先构造再保存 参数: - r: 漏洞记录对象（通常来自 risk.CreateRisk） 返回值: - 错误信息（保存失败时返回）|
| [risk.YieldRiskByCreateAt](#yieldriskbycreateat) |YieldRiskByCreateAt 根据创建时间戳获取风险记录，返回风险记录的管道 参数: - timestamp: 创建时间的 Unix 时间戳 返回值: - 风险记录的管道|
| [risk.YieldRiskByIds](#yieldriskbyids) |YieldRiskByIds 根据 Risk ID 获取风险记录，返回风险记录的管道 参数: - ids: 风险记录 ID 列表 返回值: - 风险记录的管道|
| [risk.YieldRiskByRuntimeId](#yieldriskbyruntimeid) |YieldRiskByRuntimeId 根据 RuntimeID 获取风险记录，返回风险记录的管道 参数: - runtimeId: 运行时 ID 返回值: - 风险记录的管道|
| [risk.YieldRiskByScriptName](#yieldriskbyscriptname) |YieldRiskByScriptName 根据插件名戳获取风险记录，返回风险记录的管道 参数: - scriptName: 插件名 返回值: - 风险记录的管道|
| [risk.YieldRiskByTarget](#yieldriskbytarget) |YieldRiskByTarget 根据目标(ip或ip:port)获取风险记录，返回风险记录的管道 参数: - target: 目标地址(ip 或 ip:port) 返回值: - 风险记录的管道|
| [risk.appendPacketPairs](#appendpacketpairs) |appendPacketPairs 是一个追加形式的选项参数，用于向风险记录中追加一对请求/响应报文 会将报文保存为 HTTPFlow，并在 PacketPairs 中记录 httpflow_id、url 以及请求/响应快照， 前端可优先按 id 查询详情；HTTPFlow 被删除后仍可使用 Pac...|
| [risk.cve](#cve) |cve 是一个选项参数，用于指定风险记录的 CVE 编号 参数: - s: CVE 编号，例如 &#34;CVE-2021-22145&#34; 返回值: - 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数|
| [risk.description](#description) |description 是一个选项参数，用于指定漏洞记录的描述 参数: - i: 漏洞记录的描述 返回值: - 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数|
| [risk.details](#details) |details 是一个选项参数，用于指定风险记录的详细信息 参数: - i: 详细信息，通常为 map 或可转换为 map 的值 返回值: - 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数|
| [risk.fromYakScript](#fromyakscript) |fromScript 是一个选项参数，用于指定风险记录的来源插件名 参数: - i: 风险记录的来源插件名 返回值: - 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数|
| [risk.ignore](#ignore) |ignore 是一个选项参数，用于标记风险记录为已忽略状态(忽略后默认查询不展示) 参数: - i: 是否忽略该风险 返回值: - 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数|
| [risk.ip](#ip) |ip 是一个选项参数，用于指定风险记录关联的 IP 地址 参数: - i: IP 地址字符串 返回值: - 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数|
| [risk.level](#level) |severity 是一个选项参数，用于指定风险记录的严重程度 可用的严重程度有: critical, high, warning, info, low 参数: - i: 严重程度，可选 critical / high / warning / info / low 返回值: - 一个 risk.New...|
| [risk.parameter](#parameter) |parameter 是一个选项参数，用于指定风险记录的参数 参数: - i: 风险记录的参数 返回值: - 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数|
| [risk.payload](#payload) |payload 是一个选项参数，用于指定漏洞记录的载荷(payload) 参数: - i: 漏洞记录的载荷(payload) 返回值: - 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数|
| [risk.potential](#potential) |potential 是一个选项参数，用于标记风险记录是否为潜在(疑似)风险 参数: - i: 是否为潜在风险 返回值: - 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数|
| [risk.request](#request) |request 是一个选项参数，用于指定风险记录的原始请求报文 参数: - i: 原始请求报文，支持 string / []byte / 任意可转成字符串的类型 返回值: - 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数|
| [risk.response](#response) |response 是一个选项参数，用于指定风险记录的原始响应报文 参数: - i: 原始响应报文，支持 string / []byte / 任意可转成字符串的类型 返回值: - 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数|
| [risk.runtimeId](#runtimeid) |runtimeId 是一个选项参数，用于指定风险记录的运行时 ID 参数: - i: 风险记录的运行时 ID 返回值: - 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数|
| [risk.severity](#severity) |severity 是一个选项参数，用于指定风险记录的严重程度 可用的严重程度有: critical, high, warning, info, low 参数: - i: 严重程度，可选 critical / high / warning / info / low 返回值: - 一个 risk.New...|
| [risk.solution](#solution) |solution 是一个选项参数，用于指定漏洞记录的解决方案 参数: - i: 漏洞记录的解决方案 返回值: - 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数|
| [risk.tag](#tag) |tag 是一个选项参数，用于为风险记录设置标签(多个标签可用分隔符拼接) 参数: - i: 标签字符串 返回值: - 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数|
| [risk.title](#title) |title 是一个选项参数，用于指定漏洞记录的标题 参数: - i: 漏洞记录的标题 返回值: - 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数|
| [risk.titleVerbose](#titleverbose) |titleVerbose 是一个选项参数，用于指定漏洞记录的详细标题 参数: - i: 漏洞记录的详细标题 返回值: - 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数|
| [risk.token](#token) |token 是一个选项参数，用于指定风险记录的反连 token 参数: - i: 风险记录的反连 token 返回值: - 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数|
| [risk.type](#type) |type 是一个选项参数，用于指定风险类型，可用的风险类型: SQL 注入: sqli​,sqlinj​,sql-inj,sqlinjection​,sql-injection​ 跨站脚本:xss​ 远程执行: rce​,rce-command,rce-code​ 文件操作: lfi​,file-r...|
| [risk.typeVerbose](#typeverbose) |typeVerbose 是一个选项参数，用于指定风险类型的详细描述 参数: - i: 风险类型的详细描述 返回值: - 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数|


## 函数定义
### CheckDNSLogByToken

#### 详细描述
CheckDNSLogByToken 通过 token 查询 DNSLog 平台上是否收到对应的 DNS 解析触发（导出名为 risk.CheckDNSLogByToken）

常用于带外（OOB）漏洞验证，配合 risk.NewDNSLogDomain 生成的 token 使用



参数:

  - token: DNSLog token

  - timeout: 可选的查询超时时间（秒）



返回值:

  - 收到的 DNSLog 事件列表

  - 错误信息（查询失败时返回）




Example:

``````````````yak
domain, token = risk.NewDNSLogDomain()~
// 触发目标解析 domain 后查询（需要网络与 DNSLog 平台，示意性示例）
events = risk.CheckDNSLogByToken(token, 5)~
for e in events { println(e.Domain) }
``````````````


#### 定义

`CheckDNSLogByToken(token string, timeout ...float64) ([]*tpb.DNSLogEvent, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| token | `string` | DNSLog token |
| timeout | `...float64` | 可选的查询超时时间（秒） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*tpb.DNSLogEvent` | 收到的 DNSLog 事件列表 |
| r2 | `error` | 错误信息（查询失败时返回） |


### CheckHTTPLogByToken

#### 详细描述
CheckHTTPLogByToken 通过 token 查询是否收到对应的 HTTP 带外请求（导出名为 risk.CheckHTTPLogByToken）

常用于带外（OOB）漏洞验证，配合 risk.NewHTTPLog 生成的 token 使用



参数:

  - token: HTTPLog token

  - timeout: 可选的查询超时时间（秒）



返回值:

  - 收到的 HTTP 触发通知列表

  - 错误信息（查询失败时返回）




Example:

``````````````yak
domain, token = risk.NewHTTPLog()~
// 触发目标访问 domain 后查询（需要网络与带外平台，示意性示例）
notifications = risk.CheckHTTPLogByToken(token, 5)~
for n in notifications { println(n.Url) }
``````````````


#### 定义

`CheckHTTPLogByToken(token string, timeout ...float64) ([]*tpb.HTTPRequestTriggerNotification, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| token | `string` | HTTPLog token |
| timeout | `...float64` | 可选的查询超时时间（秒） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*tpb.HTTPRequestTriggerNotification` | 收到的 HTTP 触发通知列表 |
| r2 | `error` | 错误信息（查询失败时返回） |


### CheckICMPTriggerByLength

#### 详细描述
CheckICMPTriggerByLength 通过特定 ICMP 包长度检查 ICMP 反连事件，返回触发通知与错误

在 yak 中通过 risk.CheckICMPTriggerByLength 调用，依赖公网 Bridge 反连服务

参数:

  - i: 用于触发匹配的特定 ICMP 包长度



返回值:

  - ICMP 触发通知对象

  - 错误信息，失败时非 nil




Example:

``````````````yak
// 该示例为示意性用法：通过长度检查 ICMP 反连
event = risk.CheckICMPTriggerByLength(1111)~
println(event.CurrentRemoteAddr)
``````````````


#### 定义

`CheckICMPTriggerByLength(i int) (*tpb.ICMPTriggerNotification, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `int` | 用于触发匹配的特定 ICMP 包长度 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*tpb.ICMPTriggerNotification` | ICMP 触发通知对象 |
| r2 | `error` | 错误信息，失败时非 nil |


### CheckRandomTriggerByToken

#### 详细描述
CheckRandomTriggerByToken 通过 token 查询是否收到随机端口反连事件（导出名为 risk.CheckRandomTriggerByToken）

常用于带外（OOB）漏洞验证，配合 risk.NewRandomPortTrigger 生成的 token 使用



参数:

  - t: 随机端口反连 token



返回值:

  - 随机端口反连事件对象

  - 错误信息（查询失败时返回）




Example:

``````````````yak
token, addr = risk.NewRandomPortTrigger()~
// 触发目标连接 addr 后查询（需要网络与 Bridge 反连服务，示意性示例）
event = risk.CheckRandomTriggerByToken(token)~
println(event.RemoteAddr)
``````````````


#### 定义

`CheckRandomTriggerByToken(t string) (*tpb.RandomPortTriggerEvent, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| t | `string` | 随机端口反连 token |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*tpb.RandomPortTriggerEvent` | 随机端口反连事件对象 |
| r2 | `error` | 错误信息（查询失败时返回） |


### CheckServerReachable

#### 详细描述
CheckServerReachable 通过 Bridge 检查目标是否可达，第一个参数为上下文，第二个参数为目标地址，第三个参数为是否进行 http 检测，返回的第一个值是 CheckServerReachableResponse，第二个值是错误

参数:

  - ctx: 上下文，用于控制超时与取消

  - target: 待检测的目标地址

  - httpCheck: 是否进行 http 检测



返回值:

  - 检测结果 CheckServerReachableResponse 对象

  - 错误信息，失败时非 nil




Example:

``````````````yak
resp = risk.CheckServerReachable(context.Background(), "example.com", false)~
print(resp.Reachable) // 是否可达
``````````````


#### 定义

`CheckServerReachable(ctx context.Context, target string, httpCheck bool) (*tpb.CheckServerReachableResponse, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` | 上下文，用于控制超时与取消 |
| target | `string` | 待检测的目标地址 |
| httpCheck | `bool` | 是否进行 http 检测 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*tpb.CheckServerReachableResponse` | 检测结果 CheckServerReachableResponse 对象 |
| r2 | `error` | 错误信息，失败时非 nil |


### CreateRisk

#### 详细描述
CreateRisk 创建漏洞记录结构体，但是并不会保存到数据库，第一个参数是目标URL，后面可以传入零个或多个选项参数，用于指定 risk 的结构，其通常与 Save 一起使用

参数:

  - u: 目标 URL 或 IP

  - opts: 零个或多个风险选项参数，如 risk.title、risk.type、risk.severity 等



返回值:

  - 创建的风险记录结构体




Example:

``````````````yak
r = risk.CreateRisk("http://example.com", risk.title("SQL注入漏洞"), risk.type("sqli"), risk.severity("high"), risk.description(""), risk.solution(""))
risk.Save(r)
``````````````


#### 定义

`CreateRisk(u string, opts ...RiskParamsOpt) *schema.Risk`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| u | `string` | 目标 URL 或 IP |
| opts | `...RiskParamsOpt` | 零个或多个风险选项参数，如 risk.title、risk.type、risk.severity 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*schema.Risk` | 创建的风险记录结构体 |


### DeleteRiskByID

#### 详细描述
DeleteRiskByID 根据风险记录ID删除风险记录

参数:

  - id: 风险记录 ID



返回值:

  - 错误信息，失败时非 nil




Example:

``````````````yak
risk.DeleteRiskByID(123)
``````````````


#### 定义

`DeleteRiskByID(id int64) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| id | `int64` | 风险记录 ID |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息，失败时非 nil |


### DeleteRiskByTarget

#### 详细描述
DeleteRiskByTarget 根据目标(ip或ip:port)删除风险记录

参数:

  - addr: 目标地址(ip 或 ip:port)



返回值:

  - 错误信息，失败时非 nil




Example:

``````````````yak
risk.DeleteRiskByTarget("example.com")
``````````````


#### 定义

`DeleteRiskByTarget(addr string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| addr | `string` | 目标地址(ip 或 ip:port) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息，失败时非 nil |


### ExtractTokenFromUrl

#### 详细描述
ExtractTokenFromUrl 从反连(reverse) URL 中提取其中携带的 token 字符串

在 yak 中通过 risk.ExtractTokenFromUrl 调用，常配合 DNSLog/HTTPLog 反连验证使用

参数:

  - tokenUrl: 包含 token 的反连 URL



返回值:

  - 提取出的 token 字符串，无法解析时返回空字符串




Example:

``````````````yak
// 该示例为示意性用法：从反连 URL 提取 token
token = risk.ExtractTokenFromUrl("http://abc123.dnslog.cn/")
println(token)
``````````````


#### 定义

`ExtractTokenFromUrl(tokenUrl string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tokenUrl | `string` | 包含 token 的反连 URL |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 提取出的 token 字符串，无法解析时返回空字符串 |


### GetSSARiskByID

#### 详细描述
GetSSARiskByID 根据 SSA Risk ID 获取 SSA 风险记录

参数:

  - id: SSA Risk ID



返回值:

  - SSA 风险记录，获取失败时返回 nil




Example:

``````````````yak
ssaRisk = risk.GetSSARiskByID(123)

	if ssaRisk != nil {
	    println("风险标题:", ssaRisk.Title)
	    println("代码片段:", ssaRisk.CodeFragment)
	}
``````````````


#### 定义

`GetSSARiskByID(id int64) *schema.SSARisk`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| id | `int64` | SSA Risk ID |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*schema.SSARisk` | SSA 风险记录，获取失败时返回 nil |


### GetSSARiskSourceCode

#### 详细描述
GetSSARiskSourceCode 根据 SSA Risk ID 获取完整的源代码,无法获取会返回相关代码片段CodeFragment

参数:

  - id: SSA Risk ID



返回值:

  - 完整源代码，无法获取时返回代码片段 CodeFragment




Example:

``````````````yak
sourceCode = risk.GetSSARiskSourceCode(123)

	if sourceCode != "" {
	    println("完整源代码:", sourceCode)
	}
``````````````


#### 定义

`GetSSARiskSourceCode(id int64) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| id | `int64` | SSA Risk ID |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 完整源代码，无法获取时返回代码片段 CodeFragment |


### GetSSARiskSourceCodeWithFragment

#### 详细描述
GetSSARiskSourceCodeWithFragment 根据 SSA Risk ID 获取源代码，如果获取完整源码失败则返回代码片段CodeFragment

参数:

  - id: SSA Risk ID



返回值:

  - 完整源码

  - 代码片段 CodeFragment

  - 是否成功获取完整源码




Example:

``````````````yak
fullCode, fragment, isFullCode = risk.GetSSARiskSourceCodeWithFragment(123)

	if isFullCode {
	    println("获取到完整源代码")
	} else {

	    println("只获取到代码片段")
	}
``````````````


#### 定义

`GetSSARiskSourceCodeWithFragment(id int64) (string, string, bool)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| id | `int64` | SSA Risk ID |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 完整源码 |
| r2 | `string` | 代码片段 CodeFragment |
| r3 | `bool` | 是否成功获取完整源码 |


### GetSSARiskWithDataFlow

#### 详细描述
GetSSARiskWithDataFlow 根据 SSA Risk ID 获取包含数据流信息的风险记录

参数:

  - id: SSA Risk ID



返回值:

  - 包含数据流信息的风险记录，获取失败时返回 nil




Example:

``````````````yak
wrappedRisk = risk.GetSSARiskWithDataFlow(123)

	if wrappedRisk != nil {
	    println("风险标题:", wrappedRisk.Title)
	    println("数据流路径数量:", len(wrappedRisk.DataFlowPaths))
	}
``````````````


#### 定义

`GetSSARiskWithDataFlow(id int64) *sfreport.Risk`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| id | `int64` | SSA Risk ID |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*sfreport.Risk` | 包含数据流信息的风险记录，获取失败时返回 nil |


### HaveReverseRisk

#### 详细描述
HaveReverseRisk 通过轮询检查是否存在对应token的反连记录，重试最多5次，每次等待1秒， 如果存在返回true，否则返回false

参数:

  - token: 反连验证用的 token



返回值:

  - 是否存在对应 token 的反连记录




Example:

``````````````yak
if risk.HaveReverseRisk("token") { // 轮询检查是否存在反连风险，会阻塞
println("have reverse risk")
}
``````````````


#### 定义

`HaveReverseRisk(token string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| token | `string` | 反连验证用的 token |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 是否存在对应 token 的反连记录 |


### NewDNSLogDomain

#### 详细描述
NewDNSLogDomain 返回一个公网 Bridge 的 DNSLog 域名，返回的第一个值是域名，第二个值是 token，第三个值是错误



返回值:

  - DNSLog 域名

  - 反连验证用的 token

  - 错误信息，失败时非 nil




Example:

``````````````yak
domain, token = risk.NewDNSLogDomain()~
``````````````


#### 定义

`NewDNSLogDomain() (domain string, token string, _ error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| domain | `string` | DNSLog 域名 |
| token | `string` | 反连验证用的 token |
| _ | `error` | 错误信息，失败时非 nil |


### NewHTTPLog

#### 详细描述
NewHTTPLog 返回一个公网 Bridge 的 HTTPLog 域名，返回的第一个值是域名，第二个值是 token，第三个值是错误

参数:

  - i: 可选参数，用于定制 HTTPLog 域名申请的行为



返回值:

  - HTTPLog 域名

  - 反连验证用的 token

  - 错误信息，失败时非 nil




Example:

``````````````yak
domain, token = risk.NewHTTPLog()~
``````````````


#### 定义

`NewHTTPLog(i ...any) (domain string, token string, _ error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `...any` | 可选参数，用于定制 HTTPLog 域名申请的行为 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| domain | `string` | HTTPLog 域名 |
| token | `string` | 反连验证用的 token |
| _ | `error` | 错误信息，失败时非 nil |


### NewLocalReverseHTTPSUrl

#### 详细描述
NewLocalReverseHTTPSUrl 返回一个本地 Bridge 的反向 HTTPS URL



返回值:

  - 反向 HTTPS URL 字符串




Example:

``````````````yak
url := risk.NewLocalReverseHTTPSUrl()
``````````````


#### 定义

`NewLocalReverseHTTPSUrl() string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 反向 HTTPS URL 字符串 |


### NewLocalReverseHTTPUrl

#### 详细描述
NewLocalReverseHTTPUrl 返回一个本地 Bridge 的反向 HTTP URL



返回值:

  - 反向 HTTP URL 字符串




Example:

``````````````yak
url := risk.NewLocalReverseHTTPUrl()
``````````````


#### 定义

`NewLocalReverseHTTPUrl() string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 反向 HTTP URL 字符串 |


### NewLocalReverseRMIUrl

#### 详细描述
NewLocalReverseRMIUrl 返回一个本地 Bridge 的反向 RMI URL



返回值:

  - 反向 RMI URL 字符串




Example:

``````````````yak
url := risk.NewLocalReverseRMIUrl()
``````````````


#### 定义

`NewLocalReverseRMIUrl() string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 反向 RMI URL 字符串 |


### NewPublicReverseHTTPSUrl

#### 详细描述
NewPublicReverseHTTPSUrl 返回一个公网 Bridge 的反向 HTTPS URL



返回值:

  - 反向 HTTPS URL 字符串




Example:

``````````````yak
url := risk.NewPublicReverseHTTPSUrl()
``````````````


#### 定义

`NewPublicReverseHTTPSUrl() string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 反向 HTTPS URL 字符串 |


### NewPublicReverseHTTPUrl

#### 详细描述
NewPublicReverseHTTPUrl 返回一个公网 Bridge 的反向 HTTP URL



返回值:

  - 反向 HTTP URL 字符串




Example:

``````````````yak
url := risk.NewPublicReverseHTTPUrl()
``````````````


#### 定义

`NewPublicReverseHTTPUrl() string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 反向 HTTP URL 字符串 |


### NewPublicReverseRMIUrl

#### 详细描述
NewPublicReverseRMIUrl 返回一个公网 Bridge 的反向 RMI URL



返回值:

  - 反向 RMI URL 字符串




Example:

``````````````yak
url := risk.NewPublicReverseRMIUrl()
``````````````


#### 定义

`NewPublicReverseRMIUrl() string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 反向 RMI URL 字符串 |


### NewRandomPortTrigger

#### 详细描述
NewRandomPortTrigger 返回一个公网 Bridge 的随机端口反连检测地址，返回的第一个值是 token，第二个值是检测地址，第三个值是错误

参数:

  - opt: 零个或多个风险选项参数，如 risk.title、risk.severity 等



返回值:

  - 反连验证用的 token

  - 随机端口反连检测地址

  - 错误信息，失败时非 nil




Example:

``````````````yak
token, addr = risk.NewRandomPortTrigger()~
``````````````


#### 定义

`NewRandomPortTrigger(opt ...RiskParamsOpt) (token string, addr string, _ error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opt | `...RiskParamsOpt` | 零个或多个风险选项参数，如 risk.title、risk.severity 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| token | `string` | 反连验证用的 token |
| addr | `string` | 随机端口反连检测地址 |
| _ | `error` | 错误信息，失败时非 nil |


### NewRisk

#### 详细描述
NewRisk 创建一条漏洞记录并保存到数据库（导出名为 risk.NewRisk）

第一个参数为目标，后面可传入零个或多个选项用于描述该 risk（标题、类型、严重程度、描述、解决方案等）



参数:

  - target: 漏洞目标，通常为 URL 或 IP

  - opts: 可选项，如 risk.title / risk.type / risk.severity / risk.description / risk.solution 等




Example:

``````````````yak
risk.NewRisk("http://example.com",
    risk.title("SQL Injection"),
    risk.type("sqli"),
    risk.severity("high"),
)
// 写入后可用 risk.YieldRiskByTarget 等查询（示意性示例）
``````````````


#### 定义

`NewRisk(target string, opts ...yakit.RiskParamsOpt)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| target | `string` | 漏洞目标，通常为 URL 或 IP |
| opts | `...yakit.RiskParamsOpt` | 可选项，如 risk.title / risk.type / risk.severity / risk.description / risk.solution 等 |


### NewUnverifiedRisk

#### 详细描述
NewUnverifiedRisk 创建一条&#34;待验证&#34;风险记录并保存，常用于反连(reverse)类漏洞先记录、后由回连验证

在 yak 中通过 risk.NewUnverifiedRisk 调用，配合反连 token 使用

参数:

  - u: 风险目标(URL 或 IP)

  - token: 反连验证用的 token

  - opts: 零个或多个风险选项参数，如 risk.title、risk.severity 等



返回值:

  - 创建的风险记录结构体

  - 错误信息，保存失败时非 nil




Example:

``````````````yak
// 该示例为示意性用法：创建待验证风险
token = risk.NewDNSLogDomain()[1]
r, err = risk.NewUnverifiedRisk("http://example.com", token, risk.title("SSRF"), risk.severity("high"))
``````````````


#### 定义

`NewUnverifiedRisk(u string, token string, opts ...RiskParamsOpt) (*schema.Risk, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| u | `string` | 风险目标(URL 或 IP) |
| token | `string` | 反连验证用的 token |
| opts | `...RiskParamsOpt` | 零个或多个风险选项参数，如 risk.title、risk.severity 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*schema.Risk` | 创建的风险记录结构体 |
| r2 | `error` | 错误信息，保存失败时非 nil |


### QueryRisksByKeyword

#### 详细描述
QueryRisksByKeyword 根据关键字查询风险记录，返回风险记录的管道

参数:

  - keyword: 查询关键字

  - opts: 零个或多个风险选项参数，用于附加过滤条件，如 risk.severity、risk.type 等



返回值:

  - 风险记录的管道




Example:

``````````````yak
for risk := range risk.QueryRisksByKeyword("SQL注入", risk.severity("high")) {
println(risk)
}
``````````````


#### 定义

`QueryRisksByKeyword(keyword string, opts ...yakit.RiskParamsOpt) chan *schema.Risk`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| keyword | `string` | 查询关键字 |
| opts | `...yakit.RiskParamsOpt` | 零个或多个风险选项参数，用于附加过滤条件，如 risk.severity、risk.type 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *schema.Risk` | 风险记录的管道 |


### RegisterBeforeRiskSave

#### 详细描述
RegisterBeforeRiskSave 注册一个在风险记录保存到数据库之前执行的回调钩子，可用于统一改写/丰富风险字段

在 yak 中通过 risk.RegisterBeforeRiskSave 调用

参数:

  - f: 回调函数，入参为即将保存的风险记录，可在其中修改该记录




Example:

``````````````yak
// 该示例为示意性用法：保存前为所有风险追加标签

	risk.RegisterBeforeRiskSave(func(r) {
	    r.Tags = "auto-tagged"
	})
``````````````


#### 定义

`RegisterBeforeRiskSave(f func(*schema.Risk))`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `func(*schema.Risk)` | 回调函数，入参为即将保存的风险记录，可在其中修改该记录 |


### Save

#### 详细描述
Save 将一条漏洞记录结构体保存到数据库（导出名为 risk.Save）

通常与 risk.CreateRisk 搭配使用：先构造再保存



参数:

  - r: 漏洞记录对象（通常来自 risk.CreateRisk）



返回值:

  - 错误信息（保存失败时返回）




Example:

``````````````yak
r = risk.CreateRisk("http://example.com", risk.title("SQL Injection"), risk.type("sqli"), risk.severity("high"))
risk.Save(r)~
``````````````


#### 定义

`Save() error`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息（保存失败时返回） |


### YieldRiskByCreateAt

#### 详细描述
YieldRiskByCreateAt 根据创建时间戳获取风险记录，返回风险记录的管道

参数:

  - timestamp: 创建时间的 Unix 时间戳



返回值:

  - 风险记录的管道




Example:

``````````````yak
ts = time.Parse("2006-01-02 15:04:05", "2020-01-01 00:00:00")~.Unix()
for risk := range risk.YieldRiskByCreateAt(ts) {
println(risk)
}
``````````````


#### 定义

`YieldRiskByCreateAt(timestamp int64) chan *schema.Risk`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| timestamp | `int64` | 创建时间的 Unix 时间戳 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *schema.Risk` | 风险记录的管道 |


### YieldRiskByIds

#### 详细描述
YieldRiskByIds 根据 Risk ID 获取风险记录，返回风险记录的管道

参数:

  - ids: 风险记录 ID 列表



返回值:

  - 风险记录的管道




Example:

``````````````yak
for risk := range risk.YieldRiskByIds([1,2,3]) {
println(risk)
}
``````````````


#### 定义

`YieldRiskByIds(ids []int) chan *schema.Risk`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ids | `[]int` | 风险记录 ID 列表 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *schema.Risk` | 风险记录的管道 |


### YieldRiskByRuntimeId

#### 详细描述
YieldRiskByRuntimeId 根据 RuntimeID 获取风险记录，返回风险记录的管道

参数:

  - runtimeId: 运行时 ID



返回值:

  - 风险记录的管道




Example:

``````````````yak
for risk := range risk.YieldRiskByRuntimeId("161c5372-3e75-46f6-a6bf-1a3182da625e") {
println(risk)
}
``````````````


#### 定义

`YieldRiskByRuntimeId(runtimeId string) chan *schema.Risk`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| runtimeId | `string` | 运行时 ID |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *schema.Risk` | 风险记录的管道 |


### YieldRiskByScriptName

#### 详细描述
YieldRiskByScriptName 根据插件名戳获取风险记录，返回风险记录的管道

参数:

  - scriptName: 插件名



返回值:

  - 风险记录的管道




Example:

``````````````yak
for risk := range risk.YieldRiskByScriptName("基础 XSS 检测") {
println(risk)
}
``````````````


#### 定义

`YieldRiskByScriptName(scriptName string) chan *schema.Risk`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| scriptName | `string` | 插件名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *schema.Risk` | 风险记录的管道 |


### YieldRiskByTarget

#### 详细描述
YieldRiskByTarget 根据目标(ip或ip:port)获取风险记录，返回风险记录的管道

参数:

  - target: 目标地址(ip 或 ip:port)



返回值:

  - 风险记录的管道




Example:

``````````````yak
for risk := range risk.YieldRiskByTarget("example.com") {
println(risk)
}
``````````````


#### 定义

`YieldRiskByTarget(target string) chan *schema.Risk`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| target | `string` | 目标地址(ip 或 ip:port) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *schema.Risk` | 风险记录的管道 |


### appendPacketPairs

#### 详细描述
appendPacketPairs 是一个追加形式的选项参数，用于向风险记录中追加一对请求/响应报文

会将报文保存为 HTTPFlow，并在 PacketPairs 中记录 httpflow_id、url 以及请求/响应快照，

前端可优先按 id 查询详情；HTTPFlow 被删除后仍可使用 PacketPairs 中的快照展示流量。

支持 string / []byte / 任意可转成字符串的类型

参数:

  - req: 请求报文，支持 string / []byte / 任意可转成字符串的类型

  - resp: 响应报文，支持 string / []byte / 任意可转成字符串的类型



返回值:

  - 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数




Example:

``````````````yak
risk.NewRisk(target,

	risk.appendPacketPairs(req1, rsp1),
	risk.appendPacketPairs(req2, rsp2),

)
``````````````


#### 定义

`appendPacketPairs(req any, resp any) RiskParamsOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| req | `any` | 请求报文，支持 string / []byte / 任意可转成字符串的类型 |
| resp | `any` | 响应报文，支持 string / []byte / 任意可转成字符串的类型 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RiskParamsOpt` | 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数 |


### cve

#### 详细描述
cve 是一个选项参数，用于指定风险记录的 CVE 编号

参数:

  - s: CVE 编号，例如 &#34;CVE-2021-22145&#34;



返回值:

  - 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数




Example:

``````````````yak
risk.NewRisk(target, risk.cve("CVE-2021-22145"))
``````````````


#### 定义

`cve(s string) RiskParamsOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` | CVE 编号，例如 &#34;CVE-2021-22145&#34; |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RiskParamsOpt` | 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数 |


### description

#### 详细描述
description 是一个选项参数，用于指定漏洞记录的描述

参数:

  - i: 漏洞记录的描述



返回值:

  - 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数




Example:

``````````````yak
risk.NewRisk(target, risk.description(description))
``````````````


#### 定义

`description(i string) RiskParamsOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` | 漏洞记录的描述 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RiskParamsOpt` | 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数 |


### details

#### 详细描述
details 是一个选项参数，用于指定风险记录的详细信息

参数:

  - i: 详细信息，通常为 map 或可转换为 map 的值



返回值:

  - 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数




Example:

``````````````yak
risk.NewRisk(target, risk.details({"message": message, "ohter_message": message}))
``````````````


#### 定义

`details(i any) RiskParamsOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 详细信息，通常为 map 或可转换为 map 的值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RiskParamsOpt` | 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数 |


### fromYakScript

#### 详细描述
fromScript 是一个选项参数，用于指定风险记录的来源插件名

参数:

  - i: 风险记录的来源插件名



返回值:

  - 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数




Example:

``````````````yak
risk.NewRisk(target, risk.fromScript("plugin_name"))
``````````````


#### 定义

`fromYakScript(i string) RiskParamsOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` | 风险记录的来源插件名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RiskParamsOpt` | 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数 |


### ignore

#### 详细描述
ignore 是一个选项参数，用于标记风险记录为已忽略状态(忽略后默认查询不展示)

参数:

  - i: 是否忽略该风险



返回值:

  - 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数




Example:

``````````````yak
// 该示例为示意性用法：将风险标记为忽略
risk.NewRisk("http://example.com", risk.ignore(true))
``````````````


#### 定义

`ignore(i bool) RiskParamsOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `bool` | 是否忽略该风险 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RiskParamsOpt` | 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数 |


### ip

#### 详细描述
ip 是一个选项参数，用于指定风险记录关联的 IP 地址

参数:

  - i: IP 地址字符串



返回值:

  - 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数




Example:

``````````````yak
// 该示例为示意性用法：指定风险关联 IP
risk.NewRisk("http://example.com", risk.ip("1.2.3.4"))
``````````````


#### 定义

`ip(i string) RiskParamsOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` | IP 地址字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RiskParamsOpt` | 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数 |


### level

#### 详细描述
severity 是一个选项参数，用于指定风险记录的严重程度

可用的严重程度有: critical, high, warning, info, low

参数:

  - i: 严重程度，可选 critical / high / warning / info / low



返回值:

  - 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数




Example:

``````````````yak
risk.NewRisk(target, risk.severity("high"))
``````````````


#### 定义

`level(i string) RiskParamsOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` | 严重程度，可选 critical / high / warning / info / low |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RiskParamsOpt` | 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数 |


### parameter

#### 详细描述
parameter 是一个选项参数，用于指定风险记录的参数

参数:

  - i: 风险记录的参数



返回值:

  - 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数




Example:

``````````````yak
risk.NewRisk(target, risk.parameter("param"))
``````````````


#### 定义

`parameter(i string) RiskParamsOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` | 风险记录的参数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RiskParamsOpt` | 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数 |


### payload

#### 详细描述
payload 是一个选项参数，用于指定漏洞记录的载荷(payload)

参数:

  - i: 漏洞记录的载荷(payload)



返回值:

  - 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数




Example:

``````````````yak
risk.NewRisk(target, risk.payload("payload"))
``````````````


#### 定义

`payload(i string) RiskParamsOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` | 漏洞记录的载荷(payload) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RiskParamsOpt` | 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数 |


### potential

#### 详细描述
potential 是一个选项参数，用于标记风险记录是否为潜在(疑似)风险

参数:

  - i: 是否为潜在风险



返回值:

  - 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数




Example:

``````````````yak
// 该示例为示意性用法：标记为潜在风险
risk.NewRisk("http://example.com", risk.potential(true))
``````````````


#### 定义

`potential(i bool) RiskParamsOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `bool` | 是否为潜在风险 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RiskParamsOpt` | 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数 |


### request

#### 详细描述
request 是一个选项参数，用于指定风险记录的原始请求报文

参数:

  - i: 原始请求报文，支持 string / []byte / 任意可转成字符串的类型



返回值:

  - 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数




Example:

``````````````yak
risk.NewRisk(target, risk.request(req))
``````````````


#### 定义

`request(i any) RiskParamsOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 原始请求报文，支持 string / []byte / 任意可转成字符串的类型 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RiskParamsOpt` | 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数 |


### response

#### 详细描述
response 是一个选项参数，用于指定风险记录的原始响应报文

参数:

  - i: 原始响应报文，支持 string / []byte / 任意可转成字符串的类型



返回值:

  - 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数




Example:

``````````````yak
risk.NewRisk(target, risk.response(resp))
``````````````


#### 定义

`response(i any) RiskParamsOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 原始响应报文，支持 string / []byte / 任意可转成字符串的类型 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RiskParamsOpt` | 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数 |


### runtimeId

#### 详细描述
runtimeId 是一个选项参数，用于指定风险记录的运行时 ID

参数:

  - i: 风险记录的运行时 ID



返回值:

  - 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数




Example:

``````````````yak
risk.NewRisk(target, risk.runtimeId(runtime_id))
``````````````


#### 定义

`runtimeId(i string) RiskParamsOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` | 风险记录的运行时 ID |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RiskParamsOpt` | 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数 |


### severity

#### 详细描述
severity 是一个选项参数，用于指定风险记录的严重程度

可用的严重程度有: critical, high, warning, info, low

参数:

  - i: 严重程度，可选 critical / high / warning / info / low



返回值:

  - 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数




Example:

``````````````yak
risk.NewRisk(target, risk.severity("high"))
``````````````


#### 定义

`severity(i string) RiskParamsOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` | 严重程度，可选 critical / high / warning / info / low |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RiskParamsOpt` | 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数 |


### solution

#### 详细描述
solution 是一个选项参数，用于指定漏洞记录的解决方案

参数:

  - i: 漏洞记录的解决方案



返回值:

  - 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数




Example:

``````````````yak
risk.NewRisk(target, risk.description(description), risk.solution(solution))
``````````````


#### 定义

`solution(i string) RiskParamsOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` | 漏洞记录的解决方案 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RiskParamsOpt` | 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数 |


### tag

#### 详细描述
tag 是一个选项参数，用于为风险记录设置标签(多个标签可用分隔符拼接)

参数:

  - i: 标签字符串



返回值:

  - 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数




Example:

``````````````yak
// 该示例为示意性用法：为风险设置标签
risk.NewRisk("http://example.com", risk.tag("sqli,important"))
``````````````


#### 定义

`tag(i string) RiskParamsOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` | 标签字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RiskParamsOpt` | 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数 |


### title

#### 详细描述
title 是一个选项参数，用于指定漏洞记录的标题

参数:

  - i: 漏洞记录的标题



返回值:

  - 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数




Example:

``````````````yak
risk.NewRisk(target, risk.title(title))
``````````````


#### 定义

`title(i string) RiskParamsOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` | 漏洞记录的标题 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RiskParamsOpt` | 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数 |


### titleVerbose

#### 详细描述
titleVerbose 是一个选项参数，用于指定漏洞记录的详细标题

参数:

  - i: 漏洞记录的详细标题



返回值:

  - 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数




Example:

``````````````yak
risk.NewRisk(target, risk.titleVerbose(verbose_title))
``````````````


#### 定义

`titleVerbose(i string) RiskParamsOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` | 漏洞记录的详细标题 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RiskParamsOpt` | 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数 |


### token

#### 详细描述
token 是一个选项参数，用于指定风险记录的反连 token

参数:

  - i: 风险记录的反连 token



返回值:

  - 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数




Example:

``````````````yak
risk.NewRisk(target, risk.token("token"))
``````````````


#### 定义

`token(i string) RiskParamsOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` | 风险记录的反连 token |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RiskParamsOpt` | 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数 |


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

参数:

  - i: 风险类型字符串，见上方可用类型列表



返回值:

  - 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数




Example:

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


#### 定义

`type(i string) RiskParamsOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` | 风险类型字符串，见上方可用类型列表 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RiskParamsOpt` | 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数 |


### typeVerbose

#### 详细描述
typeVerbose 是一个选项参数，用于指定风险类型的详细描述

参数:

  - i: 风险类型的详细描述



返回值:

  - 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数




Example:

``````````````yak
risk.NewRisk(target, risk.typeVerbose("SQL注入漏洞"))
``````````````


#### 定义

`typeVerbose(i string) RiskParamsOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` | 风险类型的详细描述 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `RiskParamsOpt` | 一个 risk.NewRisk/risk.CreateRisk 可接收的选项参数 |


