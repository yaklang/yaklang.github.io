# yakit

|函数名|函数描述/介绍|
|:------|:--------|
| [.](#) ||
| [yakit.AIAgentSession](#aiagentsession) |AIAgentSession 向 Yakit 输出并注册一个 AI Agent 会话 ID（导出名为 yakit.AIAgentSession） 参数: - sessionID: 会话 ID - source: 可选的会话来源标识 返回值: - 无|
| [yakit.AIOutput](#aioutput) |AIOutput 向 Yakit 输出可被 AI 工具 stdout 过滤的 AI 专用输出（导出名为 yakit.AIOutput） AIOutput writes AI-focused output that can be filtered for AI tool stdout. aiLevel...|
| [yakit.AutoInitYakit](#autoinityakit) ||
| [yakit.Code](#code) |YakitCode 向 Yakit 输出一段代码块（导出名为 yakit.Code） 参数: - tmp: 代码内容 返回值: - 无|
| [yakit.Debug](#debug) |YakitDebug 向 Yakit 输出一条 debug 级别日志（导出名为 yakit.Debug） 参数: - tmp: 日志格式字符串 - items: 格式化参数 返回值: - 无|
| [yakit.DeleteAllAIEvent](#deleteallaievent) ||
| [yakit.DeletePayloadByGroup](#deletepayloadbygroup) |deletePayloadByGroup 删除指定字典组及其全部 payload（导出名为 db.DeletePayloadByGroup） 参数: - group: 字典组名 返回值: - 错误信息|
| [yakit.EmitSSAResult](#emitssaresult) ||
| [yakit.EnableDotGraphTab](#enabledotgraphtab) ||
| [yakit.EnableTable](#enabletable) ||
| [yakit.EnableText](#enabletext) ||
| [yakit.EnableWebsiteTrees](#enablewebsitetrees) ||
| [yakit.Error](#error) |YakitError 向 Yakit 输出一条 error 级别日志（导出名为 yakit.Error） 参数: - tmp: 日志格式字符串 - items: 格式化参数 返回值: - 无|
| [yakit.File](#file) |YakitFile 向 Yakit 输出一个文件信息卡片或文件操作记录（导出名为 yakit.File） 参数: - fileName: 文件路径 - option: 可选项，可为标题/描述字符串或 YakitFileAction 文件操作 返回值: - 无|
| [yakit.ForceSyncBuildInForge](#forcesyncbuildinforge) ||
| [yakit.ForceSyncCorePlugin](#forcesynccoreplugin) ||
| [yakit.ForceSyncSyntaxFlowRule](#forcesyncsyntaxflowrule) ||
| [yakit.GenerateYakitMITMHooksParams](#generateyakitmitmhooksparams) |generateYakitMITMHookParams 发起一次 HTTP 请求并生成可传给 MITM hook 的参数列表（导出名为 yakit.GenerateYakitMITMHooksParams） 参数: - method: HTTP 方法 - url: 请求 URL - opts: HT...|
| [yakit.GetHomeDir](#gethomedir) ||
| [yakit.GetHomeTempDir](#gethometempdir) ||
| [yakit.Info](#info) |YakitInfo 向 Yakit 输出一条 info 级别日志（导出名为 yakit.Info） 参数: - tmp: 日志格式字符串 - items: 格式化参数 返回值: - 无|
| [yakit.InitYakit](#inityakit) |InitYakit 初始化全局 Yakit 客户端实例（导出名为 yakit.InitYakit） 参数: - y: Yakit 客户端对象 返回值: - 无|
| [yakit.Markdown](#markdown) |YakitMarkdown 向 Yakit 输出一段 Markdown（导出名为 yakit.Markdown） 参数: - tmp: Markdown 内容 返回值: - 无|
| [yakit.MockHTTPFlowSlowSQL](#mockhttpflowslowsql) ||
| [yakit.MockMITMSlowRuleHook](#mockmitmslowrulehook) ||
| [yakit.NewBarGraph](#newbargraph) |NewBarGraph 创建一个柱状图对象（导出名为 yakit.NewBarGraph） 参数: - graphName: 可选的图表名称 返回值: - 图表对象|
| [yakit.NewClient](#newclient) |NewYakitClient 基于 webhook 地址创建一个 Yakit 客户端（导出名为 yakit.NewClient） 参数: - addr: Yakit webhook 地址，为空时输出回退到日志 返回值: - Yakit 客户端对象|
| [yakit.NewHTTPFlowRisk](#newhttpflowrisk) |NewHTTPFlowRisk 创建一个 HTTP 流量风险对象（导出名为 yakit.NewHTTPFlowRisk） 参数: - riskName: 风险名称 - isHttps: 是否为 HTTPS - url: 关联 URL - req: 原始请求字节 - rsp: 原始响应字节 返回值: ...|
| [yakit.NewLineGraph](#newlinegraph) |NewLineGraph 创建一个折线图对象（导出名为 yakit.NewLineGraph） 参数: - graphName: 可选的图表名称 返回值: - 图表对象|
| [yakit.NewPieGraph](#newpiegraph) |NewPieGraph 创建一个饼图对象（导出名为 yakit.NewPieGraph） 参数: - graphName: 可选的图表名称 返回值: - 图表对象|
| [yakit.NewTable](#newtable) |NewTable 创建一个 Yakit 表格对象（导出名为 yakit.NewTable） 参数: - head: 表头列名 返回值: - 表格对象|
| [yakit.NewWordCloud](#newwordcloud) |NewWordCloud 创建一个词云图对象（导出名为 yakit.NewWordCloud） 参数: - graphName: 可选的图表名称 返回值: - 图表对象|
| [yakit.ObjToPort](#objtoport) ||
| [yakit.Output](#output) |Output 向 Yakit 输出任意可识别对象（自动按类型选择输出通道，导出名为 yakit.Output） 支持的对象包括风险、HTTP 流量、表格、图表、状态卡片等 参数: - i: 要输出的对象 返回值: - 错误信息|
| [yakit.OutputDotGraph](#outputdotgraph) ||
| [yakit.QueryDomainsByDomainKeyword](#querydomainsbydomainkeyword) |queryDomainAssetByDomainKeyword 按域名关键词模糊查询域名资产（导出名为 db.QueryDomainsByDomainKeyword） 参数: - keyword: 域名关键词 返回值: - 域名资产的 channel，可使用 for-range 遍历 - 错误信息|
| [yakit.QueryDomainsByNetwork](#querydomainsbynetwork) |queryDomainAssetByNetwork 按网段查询域名资产（导出名为 db.QueryDomainsByNetwork） 参数: - network: 网段表达式，如 &#34;192.168.1.0/24&#34; 返回值: - 域名资产的 channel，可使用 for-range 遍历 - 错误信...|
| [yakit.QueryDomainsByTitle](#querydomainsbytitle) |queryDomainAssetByHTMLTitle 按 HTML 标题模糊查询域名资产（导出名为 db.QueryDomainsByTitle） 参数: - title: HTML 标题关键词 返回值: - 域名资产的 channel，可使用 for-range 遍历 - 错误信息|
| [yakit.QueryHTTPFlowsAll](#queryhttpflowsall) ||
| [yakit.QueryHTTPFlowsByKeyword](#queryhttpflowsbykeyword) |queryHTTPFlowByKeyword 按关键词在 URL/请求/响应中模糊查询 HTTP 流量（导出名为 db.QueryHTTPFlowsByKeyword） 参数: - k: 关键词 返回值: - HTTPFlow 对象的 channel，可使用 for-range 遍历|
| [yakit.QueryHostPortAll](#queryhostportall) ||
| [yakit.QueryHostPortByKeyword](#queryhostportbykeyword) ||
| [yakit.QueryHostPortByNetwork](#queryhostportbynetwork) |queryHostPortByNetwork 按网段查询开放端口并以 host:port 字符串返回（导出名为 db.QueryHostPortByNetwork） 参数: - network: 网段表达式，如 &#34;192.168.1.0/24&#34; 返回值: - host:port 字符串的 chann...|
| [yakit.QueryHostPortByNetworkAndPort](#queryhostportbynetworkandport) ||
| [yakit.QueryHostsByDomain](#queryhostsbydomain) |queryHostAssetByDomainKeyword 按关联域名关键词查询主机资产（导出名为 db.QueryHostsByDomain） 参数: - keyword: 域名关键词 返回值: - 主机资产的 channel，可使用 for-range 遍历 - 错误信息|
| [yakit.QueryHostsByNetwork](#queryhostsbynetwork) |queryHostAssetByNetwork 按网段查询主机资产（导出名为 db.QueryHostPortByKeyword 等相关接口的底层实现之一） 参数: - network: 网段表达式，如 &#34;192.168.1.0/24&#34; 返回值: - 主机资产的 channel，可使用 for-ra...|
| [yakit.QueryPortAssetByNetwork](#queryportassetbynetwork) ||
| [yakit.QueryUrlsAll](#queryurlsall) |queryAllUrls 查询全部 URL 资产（导出名为 db.QueryUrlsAll） 参数: - 无 返回值: - URL 字符串的 channel，可使用 for-range 遍历|
| [yakit.QueryUrlsByKeyword](#queryurlsbykeyword) |queryUrlsByKeyword 按关键词模糊查询 URL 资产（导出名为 db.QueryUrlsByKeyword） 参数: - k: URL 关键词 返回值: - URL 字符串的 channel，可使用 for-range 遍历|
| [yakit.Report](#report) |YakitReport 向 Yakit 输出一个报告引用（按报告 ID，导出名为 yakit.Report） 参数: - i: 报告 ID 返回值: - 无|
| [yakit.SSAStream](#ssastream) ||
| [yakit.SaveDomain](#savedomain) |saveDomain 保存域名及其关联 IP 到项目数据库（导出名为 db.SaveDomain） 参数: - domain: 域名 - ip: 零个或多个关联 IP 返回值: - 错误信息|
| [yakit.SaveHTTPFlow](#savehttpflow) |saveCrawler 将一次 HTTP 请求/响应作为爬虫流量保存到项目数据库（导出名为 db.SaveHTTPFlowFromNative） 参数: - url: 请求 URL - req: HTTP 请求对象 - rsp: HTTP 响应对象 返回值: - 错误信息|
| [yakit.SavePayload](#savepayload) |savePayloads 将一组 payload 保存到指定字典组（导出名为 db.SavePayload） 参数: - group: 字典组名 - payloadRaw: payload 内容（字符串或字符串列表） 返回值: - 错误信息|
| [yakit.SavePayloadByFile](#savepayloadbyfile) |savePayloadByFile 从文件读取内容并保存到指定字典组（导出名为 db.SavePayloadByFile） 参数: - group: 字典组名 - fileName: 文件路径 返回值: - 错误信息|
| [yakit.SavePortFromResult](#saveportfromresult) |savePortFromObj 从扫描结果对象提取端口信息并保存到项目数据库（导出名为 db.SavePortFromResult） 支持的对象类型包括 fp.MatchResult、synscan.SynScanResult、空间引擎结果以及 schema.Port 参数: - t: 扫描结果对象...|
| [yakit.SetOnlineBaseUrl](#setonlinebaseurl) ||
| [yakit.SetProgress](#setprogress) |YakitSetProgress 设置主进度条进度（导出名为 yakit.SetProgress） 参数: - f: 进度值（0.0-1.0） 返回值: - 无|
| [yakit.SetProgressEx](#setprogressex) |YakitSetProgressEx 设置指定 ID 的进度条进度（导出名为 yakit.SetProgressEx） 参数: - id: 进度条 ID - f: 进度值（0.0-1.0） 返回值: - 无|
| [yakit.StatusCard](#statuscard) ||
| [yakit.Stream](#stream) |Stream 向 Yakit 持续输出一个流（如实时日志、命令输出，导出名为 yakit.Stream） 参数: - streamType: 流类型标识 - streamId: 流 ID - stream: 数据源 reader - extra: 可选的额外信息 返回值: - 无|
| [yakit.Success](#success) |YakitSuccess 向 Yakit 输出一条成功信息（导出名为 yakit.Success） 参数: - tmp: 成功信息内容 返回值: - 无|
| [yakit.TableData](#tabledata) ||
| [yakit.Text](#text) |YakitTextBlock 向 Yakit 输出一个文本块（导出名为 yakit.Text） 参数: - tmp: 文本内容 返回值: - 无|
| [yakit.TextTabData](#texttabdata) ||
| [yakit.UpdateOnlineYakitStore](#updateonlineyakitstore) |updateOnlineYakitStore 从在线商店下载并保存全部 Yakit 插件（导出名为 yakit.UpdateOnlineYakitStore） 参数: - 无 返回值: - 错误信息|
| [yakit.UpdateYakitStore](#updateyakitstore) |updateYakitStore 从本地数据库更新 Yakit 插件商店（导出名为 yakit.UpdateYakitStore） 参数: - 无 返回值: - 错误信息|
| [yakit.UpdateYakitStoreFromGit](#updateyakitstorefromgit) |LoadYakitThirdpartySourceScripts 从第三方 Git 源拉取并导入 Yakit 插件（导出名为 yakit.UpdateYakitStoreFromGit） 参数: - ctx: 上下文，用于控制取消与超时 - ghUrl: 第三方 Git 仓库地址 - proxy: ...|
| [yakit.UpdateYakitStoreLocal](#updateyakitstorelocal) |LoadYakitFromLocalDir 从本地目录加载 Yakit 插件与文档并写入本地数据库（导出名为 yakit.UpdateYakitStoreLocal） 参数: - f: 本地资源目录路径 返回值: - 错误信息|
| [yakit.Warn](#warn) |YakitWarn 向 Yakit 输出一条 warn 级别日志（导出名为 yakit.Warn） 参数: - tmp: 日志格式字符串 - items: 格式化参数 返回值: - 无|
| [yakit.YieldAllAIEvent](#yieldallaievent) ||
| [yakit.fileChmodAction](#filechmodaction) ||
| [yakit.fileCreateAction](#filecreateaction) ||
| [yakit.fileDeleteAction](#filedeleteaction) ||
| [yakit.fileFindAction](#filefindaction) ||
| [yakit.fileReadAction](#filereadaction) ||
| [yakit.fileStatusAction](#filestatusaction) ||
| [yakit.fileWriteAction](#filewriteaction) ||


## 函数定义
### 

#### 详细描述
暂无描述

#### 定义

``


### AIAgentSession

#### 详细描述
AIAgentSession 向 Yakit 输出并注册一个 AI Agent 会话 ID（导出名为 yakit.AIAgentSession）
参数:
  - sessionID: 会话 ID
  - source: 可选的会话来源标识

返回值:
  - 无


Example:

``````````````yak
yakit.AIAgentSession("my-session-id")
``````````````


#### 定义

`AIAgentSession(sessionID string, source ...string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| sessionID | `string` | 会话 ID |
| source | `...string` | 可选的会话来源标识 |


### AIOutput

#### 详细描述
AIOutput 向 Yakit 输出可被 AI 工具 stdout 过滤的 AI 专用输出（导出名为 yakit.AIOutput）
AIOutput writes AI-focused output that can be filtered for AI tool stdout.
aiLevel is an optional category for downstream consumers.
参数:
  - tmp: 输出格式字符串
  - items: 格式化参数

返回值:
  - 无


Example:

``````````````yak
yakit.AIOutput("analysis result: %s", "ok")
``````````````


#### 定义

`AIOutput(tmp string, items ...any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tmp | `string` | 输出格式字符串 |
| items | `...any` | 格式化参数 |


### AutoInitYakit

#### 详细描述
暂无描述

#### 定义

`AutoInitYakit()`


### Code

#### 详细描述
YakitCode 向 Yakit 输出一段代码块（导出名为 yakit.Code）
参数:
  - tmp: 代码内容

返回值:
  - 无


Example:

``````````````yak
yakit.Code("println(\"hello\")")
``````````````


#### 定义

`Code(tmp any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tmp | `any` | 代码内容 |


### Debug

#### 详细描述
YakitDebug 向 Yakit 输出一条 debug 级别日志（导出名为 yakit.Debug）
参数:
  - tmp: 日志格式字符串
  - items: 格式化参数

返回值:
  - 无


Example:

``````````````yak
yakit.Debug("debug value: %v", 123)
``````````````


#### 定义

`Debug(tmp string, items ...any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tmp | `string` | 日志格式字符串 |
| items | `...any` | 格式化参数 |


### DeleteAllAIEvent

#### 详细描述
暂无描述

#### 定义

`DeleteAllAIEvent() error`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |  |


### DeletePayloadByGroup

#### 详细描述
deletePayloadByGroup 删除指定字典组及其全部 payload（导出名为 db.DeletePayloadByGroup）

参数:

  - group: 字典组名



返回值:

  - 错误信息




Example:

``````````````yak
// 依赖本地数据库（示意性示例）
db.DeletePayloadByGroup("my-group")~
``````````````


#### 定义

`DeletePayloadByGroup(group string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| group | `string` | 字典组名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### EmitSSAResult

#### 详细描述
暂无描述

#### 定义

`EmitSSAResult(result *ssaapi.SyntaxFlowResult) (int, int, int, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| result | `*ssaapi.SyntaxFlowResult` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` |  |
| r2 | `int` |  |
| r3 | `int` |  |
| r4 | `error` |  |


### EnableDotGraphTab

#### 详细描述
暂无描述

#### 定义

`EnableDotGraphTab(tabName string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tabName | `string` |  |


### EnableTable

#### 详细描述
暂无描述

#### 定义

`EnableTable(tableName string, columns []string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tableName | `string` |  |
| columns | `[]string` |  |


### EnableText

#### 详细描述
暂无描述

#### 定义

`EnableText(tabName string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tabName | `string` |  |


### EnableWebsiteTrees

#### 详细描述
暂无描述

#### 定义

`EnableWebsiteTrees(targets string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| targets | `string` |  |


### Error

#### 详细描述
YakitError 向 Yakit 输出一条 error 级别日志（导出名为 yakit.Error）
参数:
  - tmp: 日志格式字符串
  - items: 格式化参数

返回值:
  - 无


Example:

``````````````yak
yakit.Error("scan failed: %v", "timeout")
``````````````


#### 定义

`Error(tmp string, items ...any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tmp | `string` | 日志格式字符串 |
| items | `...any` | 格式化参数 |


### File

#### 详细描述
YakitFile 向 Yakit 输出一个文件信息卡片或文件操作记录（导出名为 yakit.File）
参数:
  - fileName: 文件路径
  - option: 可选项，可为标题/描述字符串或 YakitFileAction 文件操作

返回值:
  - 无


Example:

``````````````yak
yakit.File("/tmp/result.txt", "Scan Result", "the result of this scan")
``````````````


#### 定义

`File(fileName string, option ...any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fileName | `string` | 文件路径 |
| option | `...any` | 可选项，可为标题/描述字符串或 YakitFileAction 文件操作 |


### ForceSyncBuildInForge

#### 详细描述
暂无描述

#### 定义

`ForceSyncBuildInForge(notify func(float64, string)) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| notify | `func(float64, string)` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |  |


### ForceSyncCorePlugin

#### 详细描述
暂无描述

#### 定义

`ForceSyncCorePlugin(notify func(float64, string)) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| notify | `func(float64, string)` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |  |


### ForceSyncSyntaxFlowRule

#### 详细描述
暂无描述

#### 定义

`ForceSyncSyntaxFlowRule(notify func(float64, string)) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| notify | `func(float64, string)` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |  |


### GenerateYakitMITMHooksParams

#### 详细描述
generateYakitMITMHookParams 发起一次 HTTP 请求并生成可传给 MITM hook 的参数列表（导出名为 yakit.GenerateYakitMITMHooksParams）

参数:

  - method: HTTP 方法

  - url: 请求 URL

  - opts: HTTP 请求可选项



返回值:

  - 参数列表（isHttps, url, reqRaw, rspRaw, body）

  - 错误信息




Example:

``````````````yak
// 需要联网（示意性示例）
params = yakit.GenerateYakitMITMHooksParams("GET", "http://example.com")~
dump(params)
``````````````


#### 定义

`GenerateYakitMITMHooksParams(method string, url string, opts ...http_struct.HttpOption) ([]any, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| method | `string` | HTTP 方法 |
| url | `string` | 请求 URL |
| opts | `...http_struct.HttpOption` | HTTP 请求可选项 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]any` | 参数列表（isHttps, url, reqRaw, rspRaw, body） |
| r2 | `error` | 错误信息 |


### GetHomeDir

#### 详细描述
暂无描述

#### 定义

`GetHomeDir() string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |  |


### GetHomeTempDir

#### 详细描述
暂无描述

#### 定义

`GetHomeTempDir() string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |  |


### Info

#### 详细描述
YakitInfo 向 Yakit 输出一条 info 级别日志（导出名为 yakit.Info）
参数:
  - tmp: 日志格式字符串
  - items: 格式化参数

返回值:
  - 无


Example:

``````````````yak
yakit.Info("scanning target: %s", "example.com")
``````````````


#### 定义

`Info(tmp string, items ...any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tmp | `string` | 日志格式字符串 |
| items | `...any` | 格式化参数 |


### InitYakit

#### 详细描述
InitYakit 初始化全局 Yakit 客户端实例（导出名为 yakit.InitYakit）

参数:

  - y: Yakit 客户端对象



返回值:

  - 无




Example:

``````````````yak
client = yakit.NewClient("http://127.0.0.1:8080/webhook")
yakit.InitYakit(client)
``````````````


#### 定义

`InitYakit(y *YakitClient)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| y | `*YakitClient` | Yakit 客户端对象 |


### Markdown

#### 详细描述
YakitMarkdown 向 Yakit 输出一段 Markdown（导出名为 yakit.Markdown）
参数:
  - tmp: Markdown 内容

返回值:
  - 无


Example:

``````````````yak
yakit.Markdown("# Title\nsome content")
``````````````


#### 定义

`Markdown(tmp any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tmp | `any` | Markdown 内容 |


### MockHTTPFlowSlowSQL

#### 详细描述
暂无描述

#### 定义

`MockHTTPFlowSlowSQL(seconds ...float64)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| seconds | `...float64` |  |


### MockMITMSlowRuleHook

#### 详细描述
暂无描述

#### 定义

`MockMITMSlowRuleHook(seconds ...float64)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| seconds | `...float64` |  |


### NewBarGraph

#### 详细描述
NewBarGraph 创建一个柱状图对象（导出名为 yakit.NewBarGraph）

参数:

  - graphName: 可选的图表名称



返回值:

  - 图表对象




Example:

``````````````yak
graph = yakit.NewBarGraph("count")
graph.Add("a", 3)
dump(graph)
``````````````


#### 定义

`NewBarGraph(graphName ...string) *YakitGraph`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| graphName | `...string` | 可选的图表名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*YakitGraph` | 图表对象 |


### NewClient

#### 详细描述
NewYakitClient 基于 webhook 地址创建一个 Yakit 客户端（导出名为 yakit.NewClient）

参数:

  - addr: Yakit webhook 地址，为空时输出回退到日志



返回值:

  - Yakit 客户端对象




Example:

``````````````yak
client = yakit.NewClient("http://127.0.0.1:8080/webhook")
yakit.InitYakit(client)
``````````````


#### 定义

`NewClient(addr string) *YakitClient`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| addr | `string` | Yakit webhook 地址，为空时输出回退到日志 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*YakitClient` | Yakit 客户端对象 |


### NewHTTPFlowRisk

#### 详细描述
NewHTTPFlowRisk 创建一个 HTTP 流量风险对象（导出名为 yakit.NewHTTPFlowRisk）

参数:

  - riskName: 风险名称

  - isHttps: 是否为 HTTPS

  - url: 关联 URL

  - req: 原始请求字节

  - rsp: 原始响应字节



返回值:

  - HTTP 流量风险对象




Example:

``````````````yak
risk = yakit.NewHTTPFlowRisk("XSS", true, "https://example.com", reqBytes, rspBytes)
risk.SetLevel("high")
dump(risk)
``````````````


#### 定义

`NewHTTPFlowRisk(riskName string, isHttps bool, url string, req []byte, rsp []byte) *YakitHTTPFlowRisk`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| riskName | `string` | 风险名称 |
| isHttps | `bool` | 是否为 HTTPS |
| url | `string` | 关联 URL |
| req | `[]byte` | 原始请求字节 |
| rsp | `[]byte` | 原始响应字节 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*YakitHTTPFlowRisk` | HTTP 流量风险对象 |


### NewLineGraph

#### 详细描述
NewLineGraph 创建一个折线图对象（导出名为 yakit.NewLineGraph）

参数:

  - graphName: 可选的图表名称



返回值:

  - 图表对象




Example:

``````````````yak
graph = yakit.NewLineGraph("trend")
graph.Add("day1", 10)
dump(graph)
``````````````


#### 定义

`NewLineGraph(graphName ...string) *YakitGraph`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| graphName | `...string` | 可选的图表名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*YakitGraph` | 图表对象 |


### NewPieGraph

#### 详细描述
NewPieGraph 创建一个饼图对象（导出名为 yakit.NewPieGraph）

参数:

  - graphName: 可选的图表名称



返回值:

  - 图表对象




Example:

``````````````yak
graph = yakit.NewPieGraph("ratio")
graph.Add("a", 30)
dump(graph)
``````````````


#### 定义

`NewPieGraph(graphName ...string) *YakitGraph`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| graphName | `...string` | 可选的图表名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*YakitGraph` | 图表对象 |


### NewTable

#### 详细描述
NewTable 创建一个 Yakit 表格对象（导出名为 yakit.NewTable）

参数:

  - head: 表头列名



返回值:

  - 表格对象




Example:

``````````````yak
table = yakit.NewTable("name", "age")
table.Append("alice", 18)
dump(table)
``````````````


#### 定义

`NewTable(head ...string) *YakitTable`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| head | `...string` | 表头列名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*YakitTable` | 表格对象 |


### NewWordCloud

#### 详细描述
NewWordCloud 创建一个词云图对象（导出名为 yakit.NewWordCloud）

参数:

  - graphName: 可选的图表名称



返回值:

  - 图表对象




Example:

``````````````yak
graph = yakit.NewWordCloud("words")
graph.Add("security", 100)
dump(graph)
``````````````


#### 定义

`NewWordCloud(graphName ...string) *YakitGraph`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| graphName | `...string` | 可选的图表名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*YakitGraph` | 图表对象 |


### ObjToPort

#### 详细描述
暂无描述

#### 定义

`ObjToPort(t any) (*schema.Port, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| t | `any` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*schema.Port` |  |
| r2 | `error` |  |


### Output

#### 详细描述
Output 向 Yakit 输出任意可识别对象（自动按类型选择输出通道，导出名为 yakit.Output）
支持的对象包括风险、HTTP 流量、表格、图表、状态卡片等
参数:
  - i: 要输出的对象

返回值:
  - 错误信息


Example:

``````````````yak
table = yakit.NewTable("a", "b")
table.Append("1", "2")
yakit.Output(table)
``````````````


#### 定义

`Output(i any) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 要输出的对象 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### OutputDotGraph

#### 详细描述
暂无描述

#### 定义

`OutputDotGraph(tabName string, data string) *YakitDotGraphData`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tabName | `string` |  |
| data | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*YakitDotGraphData` |  |


### QueryDomainsByDomainKeyword

#### 详细描述
queryDomainAssetByDomainKeyword 按域名关键词模糊查询域名资产（导出名为 db.QueryDomainsByDomainKeyword）

参数:

  - keyword: 域名关键词



返回值:

  - 域名资产的 channel，可使用 for-range 遍历

  - 错误信息




Example:

``````````````yak
// 依赖本地项目数据库（示意性示例）
ch = db.QueryDomainsByDomainKeyword("example.com")~
for domain := range ch { println(domain.Domain) }
``````````````


#### 定义

`QueryDomainsByDomainKeyword(keyword string) (chan *schema.Domain, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| keyword | `string` | 域名关键词 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *schema.Domain` | 域名资产的 channel，可使用 for-range 遍历 |
| r2 | `error` | 错误信息 |


### QueryDomainsByNetwork

#### 详细描述
queryDomainAssetByNetwork 按网段查询域名资产（导出名为 db.QueryDomainsByNetwork）

参数:

  - network: 网段表达式，如 &#34;192.168.1.0/24&#34;



返回值:

  - 域名资产的 channel，可使用 for-range 遍历

  - 错误信息




Example:

``````````````yak
// 依赖本地项目数据库（示意性示例）
ch = db.QueryDomainsByNetwork("192.168.1.0/24")~
for domain := range ch { println(domain.Domain) }
``````````````


#### 定义

`QueryDomainsByNetwork(network string) (chan *schema.Domain, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| network | `string` | 网段表达式，如 &#34;192.168.1.0/24&#34; |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *schema.Domain` | 域名资产的 channel，可使用 for-range 遍历 |
| r2 | `error` | 错误信息 |


### QueryDomainsByTitle

#### 详细描述
queryDomainAssetByHTMLTitle 按 HTML 标题模糊查询域名资产（导出名为 db.QueryDomainsByTitle）

参数:

  - title: HTML 标题关键词



返回值:

  - 域名资产的 channel，可使用 for-range 遍历

  - 错误信息




Example:

``````````````yak
// 依赖本地项目数据库（示意性示例）
ch = db.QueryDomainsByTitle("admin")~
for domain := range ch { println(domain.Domain) }
``````````````


#### 定义

`QueryDomainsByTitle(title string) (chan *schema.Domain, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| title | `string` | HTML 标题关键词 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *schema.Domain` | 域名资产的 channel，可使用 for-range 遍历 |
| r2 | `error` | 错误信息 |


### QueryHTTPFlowsAll

#### 详细描述
暂无描述

#### 定义

`QueryHTTPFlowsAll() chan *schema.HTTPFlow`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *schema.HTTPFlow` |  |


### QueryHTTPFlowsByKeyword

#### 详细描述
queryHTTPFlowByKeyword 按关键词在 URL/请求/响应中模糊查询 HTTP 流量（导出名为 db.QueryHTTPFlowsByKeyword）

参数:

  - k: 关键词



返回值:

  - HTTPFlow 对象的 channel，可使用 for-range 遍历




Example:

``````````````yak
// 依赖本地项目数据库（示意性示例）

	for flow := range db.QueryHTTPFlowsByKeyword("password") {
	    println(flow.Url)
	}
``````````````


#### 定义

`QueryHTTPFlowsByKeyword(k string) chan *schema.HTTPFlow`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| k | `string` | 关键词 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *schema.HTTPFlow` | HTTPFlow 对象的 channel，可使用 for-range 遍历 |


### QueryHostPortAll

#### 详细描述
暂无描述

#### 定义

`QueryHostPortAll() chan string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan string` |  |


### QueryHostPortByKeyword

#### 详细描述
暂无描述

#### 定义

`QueryHostPortByKeyword(target string) chan string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| target | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan string` |  |


### QueryHostPortByNetwork

#### 详细描述
queryHostPortByNetwork 按网段查询开放端口并以 host:port 字符串返回（导出名为 db.QueryHostPortByNetwork）

参数:

  - network: 网段表达式，如 &#34;192.168.1.0/24&#34;



返回值:

  - host:port 字符串的 channel，可使用 for-range 遍历




Example:

``````````````yak
// 依赖本地项目数据库（示意性示例）

	for hostport := range db.QueryHostPortByNetwork("192.168.1.0/24") {
	    println(hostport)
	}
``````````````


#### 定义

`QueryHostPortByNetwork(network string) chan string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| network | `string` | 网段表达式，如 &#34;192.168.1.0/24&#34; |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan string` | port 字符串的 channel，可使用 for-range 遍历 |


### QueryHostPortByNetworkAndPort

#### 详细描述
暂无描述

#### 定义

`QueryHostPortByNetworkAndPort(network string, port string) chan string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| network | `string` |  |
| port | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan string` |  |


### QueryHostsByDomain

#### 详细描述
queryHostAssetByDomainKeyword 按关联域名关键词查询主机资产（导出名为 db.QueryHostsByDomain）

参数:

  - keyword: 域名关键词



返回值:

  - 主机资产的 channel，可使用 for-range 遍历

  - 错误信息




Example:

``````````````yak
// 依赖本地项目数据库（示意性示例）
ch = db.QueryHostsByDomain("example.com")~
for host := range ch { println(host.IP) }
``````````````


#### 定义

`QueryHostsByDomain(keyword string) (chan *schema.Host, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| keyword | `string` | 域名关键词 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *schema.Host` | 主机资产的 channel，可使用 for-range 遍历 |
| r2 | `error` | 错误信息 |


### QueryHostsByNetwork

#### 详细描述
queryHostAssetByNetwork 按网段查询主机资产（导出名为 db.QueryHostPortByKeyword 等相关接口的底层实现之一）

参数:

  - network: 网段表达式，如 &#34;192.168.1.0/24&#34;



返回值:

  - 主机资产的 channel，可使用 for-range 遍历

  - 错误信息




Example:

``````````````yak
// 依赖本地项目数据库（示意性示例）
ch = db.QueryHostsByNetwork("192.168.1.0/24")~
for host := range ch { println(host.IP) }
``````````````


#### 定义

`QueryHostsByNetwork(network string) (chan *schema.Host, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| network | `string` | 网段表达式，如 &#34;192.168.1.0/24&#34; |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *schema.Host` | 主机资产的 channel，可使用 for-range 遍历 |
| r2 | `error` | 错误信息 |


### QueryPortAssetByNetwork

#### 详细描述
暂无描述

#### 定义

`QueryPortAssetByNetwork(network string) (chan *schema.Port, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| network | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *schema.Port` |  |
| r2 | `error` |  |


### QueryUrlsAll

#### 详细描述
queryAllUrls 查询全部 URL 资产（导出名为 db.QueryUrlsAll）

参数:

  - 无



返回值:

  - URL 字符串的 channel，可使用 for-range 遍历




Example:

``````````````yak
// 依赖本地项目数据库（示意性示例）

	for u := range db.QueryUrlsAll() {
	    println(u)
	}
``````````````


#### 定义

`QueryUrlsAll() chan string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan string` | URL 字符串的 channel，可使用 for-range 遍历 |


### QueryUrlsByKeyword

#### 详细描述
queryUrlsByKeyword 按关键词模糊查询 URL 资产（导出名为 db.QueryUrlsByKeyword）

参数:

  - k: URL 关键词



返回值:

  - URL 字符串的 channel，可使用 for-range 遍历




Example:

``````````````yak
// 依赖本地项目数据库（示意性示例）

	for u := range db.QueryUrlsByKeyword("login") {
	    println(u)
	}
``````````````


#### 定义

`QueryUrlsByKeyword(k string) chan string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| k | `string` | URL 关键词 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan string` | URL 字符串的 channel，可使用 for-range 遍历 |


### Report

#### 详细描述
YakitReport 向 Yakit 输出一个报告引用（按报告 ID，导出名为 yakit.Report）
参数:
  - i: 报告 ID

返回值:
  - 无


Example:

``````````````yak
yakit.Report(1)
``````````````


#### 定义

`Report(i int)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `int` | 报告 ID |


### SSAStream

#### 详细描述
暂无描述

#### 定义

`SSAStream(partsJSON string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| partsJSON | `string` |  |


### SaveDomain

#### 详细描述
saveDomain 保存域名及其关联 IP 到项目数据库（导出名为 db.SaveDomain）

参数:

  - domain: 域名

  - ip: 零个或多个关联 IP



返回值:

  - 错误信息




Example:

``````````````yak
// 依赖本地项目数据库（示意性示例）
db.SaveDomain("example.com", "93.184.216.34")~
``````````````


#### 定义

`SaveDomain(domain string, ip ...string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| domain | `string` | 域名 |
| ip | `...string` | 零个或多个关联 IP |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### SaveHTTPFlow

#### 详细描述
saveCrawler 将一次 HTTP 请求/响应作为爬虫流量保存到项目数据库（导出名为 db.SaveHTTPFlowFromNative）

参数:

  - url: 请求 URL

  - req: HTTP 请求对象

  - rsp: HTTP 响应对象



返回值:

  - 错误信息




Example:

``````````````yak
// 依赖本地项目数据库与 http 请求对象（示意性示例）
db.SaveHTTPFlowFromNative("http://example.com", req, rsp)~
``````````````


#### 定义

`SaveHTTPFlow(url string, req *http.Request, rsp *http.Response) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` | 请求 URL |
| req | `*http.Request` | HTTP 请求对象 |
| rsp | `*http.Response` | HTTP 响应对象 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### SavePayload

#### 详细描述
savePayloads 将一组 payload 保存到指定字典组（导出名为 db.SavePayload）

参数:

  - group: 字典组名

  - payloadRaw: payload 内容（字符串或字符串列表）



返回值:

  - 错误信息




Example:

``````````````yak
// 依赖本地数据库（示意性示例）
db.SavePayload("my-group", ["admin", "root", "test"])~
``````````````


#### 定义

`SavePayload(group string, payloadRaw any) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| group | `string` | 字典组名 |
| payloadRaw | `any` | payload 内容（字符串或字符串列表） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### SavePayloadByFile

#### 详细描述
savePayloadByFile 从文件读取内容并保存到指定字典组（导出名为 db.SavePayloadByFile）

参数:

  - group: 字典组名

  - fileName: 文件路径



返回值:

  - 错误信息




Example:

``````````````yak
// 依赖本地数据库与字典文件（示意性示例）
db.SavePayloadByFile("my-group", "/tmp/dict.txt")~
``````````````


#### 定义

`SavePayloadByFile(group string, fileName string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| group | `string` | 字典组名 |
| fileName | `string` | 文件路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### SavePortFromResult

#### 详细描述
savePortFromObj 从扫描结果对象提取端口信息并保存到项目数据库（导出名为 db.SavePortFromResult）

支持的对象类型包括 fp.MatchResult、synscan.SynScanResult、空间引擎结果以及 schema.Port

参数:

  - t: 扫描结果对象

  - RuntimeId: 可选的运行时 ID



返回值:

  - 错误信息




Example:

``````````````yak
// 依赖本地项目数据库与扫描结果对象（示意性示例）
db.SavePortFromResult(result)~
``````````````


#### 定义

`SavePortFromResult(t any, RuntimeId ...string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| t | `any` | 扫描结果对象 |
| RuntimeId | `...string` | 可选的运行时 ID |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### SetOnlineBaseUrl

#### 详细描述
暂无描述

#### 定义

`SetOnlineBaseUrl(u string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| u | `string` |  |


### SetProgress

#### 详细描述
YakitSetProgress 设置主进度条进度（导出名为 yakit.SetProgress）
参数:
  - f: 进度值（0.0-1.0）

返回值:
  - 无


Example:

``````````````yak
yakit.SetProgress(0.5)
``````````````


#### 定义

`SetProgress(f float64)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `float64` | 进度值（0.0-1.0） |


### SetProgressEx

#### 详细描述
YakitSetProgressEx 设置指定 ID 的进度条进度（导出名为 yakit.SetProgressEx）
参数:
  - id: 进度条 ID
  - f: 进度值（0.0-1.0）

返回值:
  - 无


Example:

``````````````yak
yakit.SetProgressEx("download", 0.5)
``````````````


#### 定义

`SetProgressEx(id string, f float64)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| id | `string` | 进度条 ID |
| f | `float64` | 进度值（0.0-1.0） |


### StatusCard

#### 详细描述
暂无描述

#### 定义

`StatusCard(id string, data any, tags ...string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| id | `string` |  |
| data | `any` |  |
| tags | `...string` |  |


### Stream

#### 详细描述
Stream 向 Yakit 持续输出一个流（如实时日志、命令输出，导出名为 yakit.Stream）
参数:
  - streamType: 流类型标识
  - streamId: 流 ID
  - stream: 数据源 reader
  - extra: 可选的额外信息

返回值:
  - 无


Example:

``````````````yak
// reader 为任意 io.Reader（示意性示例）
yakit.Stream("exec", "task-1", reader)
``````````````


#### 定义

`Stream(streamType string, streamId string, stream io.Reader, extra ...any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| streamType | `string` | 流类型标识 |
| streamId | `string` | 流 ID |
| stream | `io.Reader` | 数据源 reader |
| extra | `...any` | 可选的额外信息 |


### Success

#### 详细描述
YakitSuccess 向 Yakit 输出一条成功信息（导出名为 yakit.Success）
参数:
  - tmp: 成功信息内容

返回值:
  - 无


Example:

``````````````yak
yakit.Success("task done")
``````````````


#### 定义

`Success(tmp any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tmp | `any` | 成功信息内容 |


### TableData

#### 详细描述
暂无描述

#### 定义

`TableData(tableName string, data any) *YakitFixedTableData`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tableName | `string` |  |
| data | `any` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*YakitFixedTableData` |  |


### Text

#### 详细描述
YakitTextBlock 向 Yakit 输出一个文本块（导出名为 yakit.Text）
参数:
  - tmp: 文本内容

返回值:
  - 无


Example:

``````````````yak
yakit.Text("scan finished")
``````````````


#### 定义

`Text(tmp any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tmp | `any` | 文本内容 |


### TextTabData

#### 详细描述
暂无描述

#### 定义

`TextTabData(tabName string, data string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tabName | `string` |  |
| data | `string` |  |


### UpdateOnlineYakitStore

#### 详细描述
updateOnlineYakitStore 从在线商店下载并保存全部 Yakit 插件（导出名为 yakit.UpdateOnlineYakitStore）

参数:

  - 无



返回值:

  - 错误信息




Example:

``````````````yak
// 需要联网及本地数据库（示意性示例）
yakit.UpdateOnlineYakitStore()~
``````````````


#### 定义

`UpdateOnlineYakitStore() error`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### UpdateYakitStore

#### 详细描述
updateYakitStore 从本地数据库更新 Yakit 插件商店（导出名为 yakit.UpdateYakitStore）

参数:

  - 无



返回值:

  - 错误信息




Example:

``````````````yak
// 依赖本地数据库（示意性示例）
yakit.UpdateYakitStore()~
``````````````


#### 定义

`UpdateYakitStore() error`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### UpdateYakitStoreFromGit

#### 详细描述
LoadYakitThirdpartySourceScripts 从第三方 Git 源拉取并导入 Yakit 插件（导出名为 yakit.UpdateYakitStoreFromGit）

参数:

  - ctx: 上下文，用于控制取消与超时

  - ghUrl: 第三方 Git 仓库地址

  - proxy: 可选的代理地址



返回值:

  - 错误信息




Example:

``````````````yak
// 需要联网及本地数据库（示意性示例）
ctx = context.Background()
yakit.UpdateYakitStoreFromGit(ctx, "https://github.com/example/yakit-store")~
``````````````


#### 定义

`UpdateYakitStoreFromGit(ctx context.Context, ghUrl string, proxy ...string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` | 上下文，用于控制取消与超时 |
| ghUrl | `string` | 第三方 Git 仓库地址 |
| proxy | `...string` | 可选的代理地址 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### UpdateYakitStoreLocal

#### 详细描述
LoadYakitFromLocalDir 从本地目录加载 Yakit 插件与文档并写入本地数据库（导出名为 yakit.UpdateYakitStoreLocal）

参数:

  - f: 本地资源目录路径



返回值:

  - 错误信息




Example:

``````````````yak
// 依赖本地数据库（示意性示例）
yakit.UpdateYakitStoreLocal("/tmp/yakit-store")~
``````````````


#### 定义

`UpdateYakitStoreLocal(f string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `string` | 本地资源目录路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### Warn

#### 详细描述
YakitWarn 向 Yakit 输出一条 warn 级别日志（导出名为 yakit.Warn）
参数:
  - tmp: 日志格式字符串
  - items: 格式化参数

返回值:
  - 无


Example:

``````````````yak
yakit.Warn("deprecated option: %s", "old-flag")
``````````````


#### 定义

`Warn(tmp string, items ...any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tmp | `string` | 日志格式字符串 |
| items | `...any` | 格式化参数 |


### YieldAllAIEvent

#### 详细描述
暂无描述

#### 定义

`YieldAllAIEvent() chan *schema.AiOutputEvent`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *schema.AiOutputEvent` |  |


### fileChmodAction

#### 详细描述
暂无描述

#### 定义

`fileChmodAction(chmodMode uint32) *YakitFileAction`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| chmodMode | `uint32` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*YakitFileAction` |  |


### fileCreateAction

#### 详细描述
暂无描述

#### 定义

`fileCreateAction(isDir bool, chmodMode uint32) *YakitFileAction`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| isDir | `bool` |  |
| chmodMode | `uint32` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*YakitFileAction` |  |


### fileDeleteAction

#### 详细描述
暂无描述

#### 定义

`fileDeleteAction(isDir bool) *YakitFileAction`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| isDir | `bool` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*YakitFileAction` |  |


### fileFindAction

#### 详细描述
暂无描述

#### 定义

`fileFindAction(findMode string, findCondition string, findContent ...string) *YakitFileAction`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| findMode | `string` |  |
| findCondition | `string` |  |
| findContent | `...string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*YakitFileAction` |  |


### fileReadAction

#### 详细描述
暂无描述

#### 定义

`fileReadAction(offset int, length int, unit string, content []byte) *YakitFileAction`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| offset | `int` |  |
| length | `int` |  |
| unit | `string` |  |
| content | `[]byte` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*YakitFileAction` |  |


### fileStatusAction

#### 详细描述
暂无描述

#### 定义

`fileStatusAction(status any) *YakitFileAction`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| status | `any` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*YakitFileAction` |  |


### fileWriteAction

#### 详细描述
暂无描述

#### 定义

`fileWriteAction(length int, mode string, content []byte) *YakitFileAction`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| length | `int` |  |
| mode | `string` |  |
| content | `[]byte` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*YakitFileAction` |  |


