# yakit {#library-yakit}

`yakit` 库是 yak 脚本与 Yakit 客户端之间的"输出与交互"桥梁：脚本在 Yakit 中以插件形式运行时，通过该库把日志、状态、表格、图表、进度、文件等结构化信息实时回传到客户端界面进行可视化展示。脱离 Yakit 客户端（如命令行直接 `yak xxx.yak`）时，这些输出函数会安全降级为标准日志或空操作，因此可以放心在任意脚本里调用。

典型使用场景：

- 实时日志与状态：`yakit.Info` / `yakit.Warn` / `yakit.Error` / `yakit.Debug` / `yakit.Success` 输出带级别的日志；`yakit.StatusCard` 在界面顶部展示关键指标卡片（如已扫描数量、命中漏洞数）。
- 富文本与文件：`yakit.Text` / `yakit.Code` / `yakit.Markdown` 输出富文本块，`yakit.File` 配合 `yakit.FileReadAction` 等动作展示文件操作。
- 表格与图表：`yakit.EnableTable` + `yakit.TableData` 渲染固定列表格，`yakit.NewTable` / `yakit.NewLineGraph` / `yakit.NewBarGraph` / `yakit.NewPieGraph` 构建数据可视化。
- 进度反馈：`yakit.SetProgress` / `yakit.SetProgressEx` 驱动进度条，适合长耗时扫描任务。

与相邻库的关系：`yakit` 关注"把结果展示给人"，`db` 关注"把结果持久化到数据库"，`risk` / `report` 关注"漏洞与报告对象"。三者常组合使用：扫描发现结果后，用 `risk` 记录漏洞、用 `db` 入库、用 `yakit` 在界面上实时呈现。

> 共 79 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [yakit.AutoInitYakit](#autoinityakit) | - | - | 根据命令行参数自动初始化 Yakit 客户端，并将其绑定到当前脚本引擎（导出名为 yakit.AutoInitYakit） |
| [yakit.Code](#code) | `tmp any` | - | 向 Yakit 输出一段代码块（导出名为 yakit.Code） |
| [yakit.DeleteAllAIEvent](#deleteallaievent) | - | `error` | 删除项目数据库中保存的全部 AI 事件（导出名为 yakit.DeleteAllAIEvent） |
| [yakit.DeletePayloadByGroup](#deletepayloadbygroup) | `group string` | `error` | 删除指定字典组及其全部 payload（导出名为 db.DeletePayloadByGroup） |
| [yakit.EmitSSAResult](#emitssaresult) | `result *ssaapi.SyntaxFlowResult` | `int, int, int, error` | 将单个 SyntaxFlowResult 转换为 SSA 流式负载，并通过内部 &#34;ssa-stream&#34; 通道发送（导出名为 yakit.EmitSSAResult） |
| [yakit.EnableDotGraphTab](#enabledotgraphtab) | `tabName string` | - | 在 Yakit UI 中启用一个 DOT 图标签页（导出名为 yakit.EnableDotGraphTab） |
| [yakit.EnableTable](#enabletable) | `tableName string, columns []string` | - | 在 Yakit UI 中启用一个动态固定表格用于实时展示数据（导出名为 yakit.EnableTable） |
| [yakit.EnableText](#enabletext) | `tabName string` | - | 在 Yakit UI 中启用一个文本标签页（导出名为 yakit.EnableText） |
| [yakit.EnableWebsiteTrees](#enablewebsitetrees) | `targets string` | - | 在 Yakit UI 中启用「网站树」展示标签（导出名为 yakit.EnableWebsiteTrees） |
| [yakit.ForceSyncBuildInForge](#forcesyncbuildinforge) | `notify func(float64, string)` | `error` | 强制把内置 AI Forge 同步到数据库（导出名为 yakit.ForceSyncBuildInForge） |
| [yakit.ForceSyncCorePlugin](#forcesynccoreplugin) | `notify func(float64, string)` | `error` | 强制把内置 Core 插件同步到数据库（导出名为 yakit.ForceSyncCorePlugin） |
| [yakit.ForceSyncSyntaxFlowRule](#forcesyncsyntaxflowrule) | `notify func(float64, string)` | `error` | 强制把内置的 SyntaxFlow 规则同步到数据库（导出名为 yakit.ForceSyncSyntaxFlowRule） |
| [yakit.GetHomeDir](#gethomedir) | - | `string` | GetDefaultYakitBaseDir 获取 Yakit 的主工作目录（导出名为 yakit.GetHomeDir） |
| [yakit.GetHomeTempDir](#gethometempdir) | - | `string` | GetDefaultYakitBaseTempDir 获取 Yakit 的临时目录（导出名为 yakit.GetHomeTempDir） |
| [yakit.GetOnlineBaseUrl](#getonlinebaseurl) | - | `string` | 获取当前配置的在线服务（Yakit 商店等）基础 URL（导出名为 yakit.GetOnlineBaseUrl） |
| [yakit.InitYakit](#inityakit) | `y *YakitClient` | - | 初始化全局 Yakit 客户端实例（导出名为 yakit.InitYakit） |
| [yakit.Markdown](#markdown) | `tmp any` | - | 向 Yakit 输出一段 Markdown（导出名为 yakit.Markdown） |
| [yakit.NewClient](#newclient) | `addr string` | `*YakitClient` | NewYakitClient 基于 webhook 地址创建一个 Yakit 客户端（导出名为 yakit.NewClient） |
| [yakit.NewHTTPFlowRisk](#newhttpflowrisk) | `riskName string, isHttps bool, url string, req []byte, rsp []byte` | `*YakitHTTPFlowRisk` | 创建一个 HTTP 流量风险对象（导出名为 yakit.NewHTTPFlowRisk） |
| [yakit.ObjToPort](#objtoport) | `t any` | `*schema.Port, error` | 将多种来源对象转换为统一的端口资产对象（导出名为 yakit.ObjToPort） |
| [yakit.Output](#output) | `i any` | `error` | 向 Yakit 输出任意可识别对象（自动按类型选择输出通道，导出名为 yakit.Output） |
| [yakit.OutputDotGraph](#outputdotgraph) | `tabName string, data string` | `*YakitDotGraphData` | 向 Yakit UI 中已启用的 DOT 图标签页输出一张 Graphviz DOT 图（导出名为 yakit.OutputDotGraph） |
| [yakit.QueryDomainsByDomainKeyword](#querydomainsbydomainkeyword) | `keyword string` | `chan *schema.Domain, error` | queryDomainAssetByDomainKeyword 按域名关键词模糊查询域名资产（导出名为 db.QueryDomainsByDomainKeyword） |
| [yakit.QueryDomainsByNetwork](#querydomainsbynetwork) | `network string` | `chan *schema.Domain, error` | queryDomainAssetByNetwork 按网段（解析 IP 所在网段）查询域名资产（导出名为 db.QueryDomainsByNetwork） |
| [yakit.QueryDomainsByTitle](#querydomainsbytitle) | `title string` | `chan *schema.Domain, error` | queryDomainAssetByHTMLTitle 按网站 HTML 标题模糊查询域名资产（导出名为 db.QueryDomainsByTitle） |
| [yakit.QueryHTTPFlowsAll](#queryhttpflowsall) | - | `chan *schema.HTTPFlow` | 以管道方式遍历数据库中保存的全部 HTTP 流量（导出名为 yakit.QueryHTTPFlowsAll） |
| [yakit.QueryHTTPFlowsByKeyword](#queryhttpflowsbykeyword) | `k string` | `chan *schema.HTTPFlow` | queryHTTPFlowByKeyword 按关键词在 URL/请求/响应中模糊查询 HTTP 流量（导出名为 db.QueryHTTPFlowsByKeyword） |
| [yakit.QueryHostPortAll](#queryhostportall) | - | `chan string` | 遍历项目数据库中全部 Host:Port 资产（导出名为 yakit.QueryHostPortAll） |
| [yakit.QueryHostPortByKeyword](#queryhostportbykeyword) | `target string` | `chan string` | 按关键字查询 Host:Port 资产（导出名为 yakit.QueryHostPortByKeyword） |
| [yakit.QueryHostPortByNetwork](#queryhostportbynetwork) | `network string` | `chan string` | 按网段查询开放端口并以 &#34;host:port&#34; 字符串返回（导出名为 db.QueryHostPortByNetwork） |
| [yakit.QueryHostPortByNetworkAndPort](#queryhostportbynetworkandport) | `network string, port string` | `chan string` | 按网段与端口查询 Host:Port 资产（导出名为 yakit.QueryHostPortByNetworkAndPort） |
| [yakit.QueryHostsByDomain](#queryhostsbydomain) | `keyword string` | `chan *schema.Host, error` | queryHostAssetByDomainKeyword 按关联域名关键词查询主机资产（导出名为 db.QueryHostsByDomain） |
| [yakit.QueryHostsByNetwork](#queryhostsbynetwork) | `network string` | `chan *schema.Host, error` | queryHostAssetByNetwork 按网段查询主机资产（导出名为 db.QueryHostPortByKeyword 等相关接口的底层实现之一） |
| [yakit.QueryPortAssetByNetwork](#queryportassetbynetwork) | `network string` | `chan *schema.Port, error` | 按网段查询端口资产（导出名为 yakit.QueryPortAssetByNetwork） |
| [yakit.QueryUrlsAll](#queryurlsall) | - | `chan string` | queryAllUrls 查询全部 URL 资产（导出名为 db.QueryUrlsAll） |
| [yakit.QueryUrlsByKeyword](#queryurlsbykeyword) | `k string` | `chan string` | 按关键词模糊查询历史流量中的 URL 资产（导出名为 db.QueryUrlsByKeyword） |
| [yakit.Report](#report) | `i int` | - | 向 Yakit 输出一个报告引用（按报告 ID，导出名为 yakit.Report） |
| [yakit.SSAStream](#ssastream) | `partsJSON string` | - | 通过内部 &#34;ssa-stream&#34; 通道发送一段原始 JSON 字符串（导出名为 yakit.SSAStream） |
| [yakit.SaveHTTPFlow](#savehttpflow) | `url string, req *http.Request, rsp *http.Response` | `error` | saveCrawler 将一次 HTTP 请求/响应作为爬虫流量保存到项目数据库（导出名为 db.SaveHTTPFlowFromNative） |
| [yakit.SavePayload](#savepayload) | `group string, payloadRaw any` | `error` | savePayloads 将一组 payload 保存到指定字典组（导出名为 db.SavePayload） |
| [yakit.SavePayloadByFile](#savepayloadbyfile) | `group string, fileName string` | `error` | 从字典文件按行读取内容并保存到指定字典组（导出名为 db.SavePayloadByFile） |
| [yakit.SetOnlineBaseUrl](#setonlinebaseurl) | `u string` | - | 设置在线服务（Yakit 商店等）的基础 URL（导出名为 yakit.SetOnlineBaseUrl） |
| [yakit.SetProgress](#setprogress) | `f float64` | - | 设置主进度条进度（导出名为 yakit.SetProgress） |
| [yakit.SetProgressEx](#setprogressex) | `id string, f float64` | - | 设置指定 ID 的进度条进度（导出名为 yakit.SetProgressEx） |
| [yakit.Success](#success) | `tmp any` | - | 向 Yakit 输出一条成功信息（导出名为 yakit.Success） |
| [yakit.TableData](#tabledata) | `tableName string, data any` | `*YakitFixedTableData` | 向 Yakit UI 中已启用的固定表格写入一行数据（导出名为 yakit.TableData） |
| [yakit.Text](#text) | `tmp any` | - | YakitTextBlock 向 Yakit 输出一个文本块（导出名为 yakit.Text） |
| [yakit.TextTabData](#texttabdata) | `tabName string, data string` | - | 向 Yakit UI 中已启用的文本标签页追加文本内容（导出名为 yakit.TextTabData） |
| [yakit.UpdateOnlineYakitStore](#updateonlineyakitstore) | - | `error` | 从在线商店下载并保存全部 Yakit 插件（导出名为 yakit.UpdateOnlineYakitStore） |
| [yakit.UpdateYakitStore](#updateyakitstore) | - | `error` | 从本地数据库更新 Yakit 插件商店（导出名为 yakit.UpdateYakitStore） |
| [yakit.UpdateYakitStoreLocal](#updateyakitstorelocal) | `f string` | `error` | LoadYakitFromLocalDir 从本地目录加载 Yakit 插件与文档并写入本地数据库（导出名为 yakit.UpdateYakitStoreLocal） |
| [yakit.YieldAllAIEvent](#yieldallaievent) | - | `chan *schema.AiOutputEvent` | 以管道方式遍历项目数据库中保存的全部 AI 事件（导出名为 yakit.YieldAllAIEvent） |
| [yakit.fileChmodAction](#filechmodaction) | `chmodMode uint32` | `*YakitFileAction` | 构造一个「修改文件权限」操作记录（导出名为 yakit.fileChmodAction） |
| [yakit.fileCreateAction](#filecreateaction) | `isDir bool, chmodMode uint32` | `*YakitFileAction` | 构造一个「创建文件/目录」操作记录（导出名为 yakit.fileCreateAction） |
| [yakit.fileDeleteAction](#filedeleteaction) | `isDir bool` | `*YakitFileAction` | 构造一个「删除文件/目录」操作记录（导出名为 yakit.fileDeleteAction） |
| [yakit.fileReadAction](#filereadaction) | `offset int, length int, unit string, content []byte` | `*YakitFileAction` | 构造一个「读文件」操作记录（导出名为 yakit.fileReadAction） |
| [yakit.fileStatusAction](#filestatusaction) | `status any` | `*YakitFileAction` | 构造一个「文件状态」操作记录（导出名为 yakit.fileStatusAction） |
| [yakit.fileWriteAction](#filewriteaction) | `length int, mode string, content []byte` | `*YakitFileAction` | 构造一个「写文件」操作记录（导出名为 yakit.fileWriteAction） |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [yakit.AIAgentSession](#aiagentsession) | `sessionID string, source ...string` | - | 向 Yakit 输出并注册一个 AI Agent 会话 ID（导出名为 yakit.AIAgentSession） |
| [yakit.AIOutput](#aioutput) | `tmp string, items ...any` | - | 向 Yakit 输出可被 AI 工具 stdout 过滤的 AI 专用输出（导出名为 yakit.AIOutput） |
| [yakit.Debug](#debug) | `tmp string, items ...any` | - | 向 Yakit 输出一条 debug 级别日志（导出名为 yakit.Debug） |
| [yakit.Error](#error) | `tmp string, items ...any` | - | 向 Yakit 输出一条 error 级别日志（导出名为 yakit.Error） |
| [yakit.File](#file) | `fileName string, option ...any` | - | 向 Yakit 输出一个文件信息卡片或文件操作记录（导出名为 yakit.File） |
| [yakit.GenerateYakitMITMHooksParams](#generateyakitmitmhooksparams) | `method string, url string, opts ...http_struct.HttpOption` | `[]any, error` | generateYakitMITMHookParams 发起一次 HTTP 请求并生成可传给 MITM hook 的参数列表（导出名为 yakit.GenerateYakitMITMHooksParams） |
| [yakit.Info](#info) | `tmp string, items ...any` | - | 向 Yakit 输出一条 info 级别日志（导出名为 yakit.Info） |
| [yakit.MockHTTPFlowSlowSQL](#mockhttpflowslowsql) | `seconds ...float64` | - | 模拟 HTTP 流量入库时的慢 SQL（导出名为 yakit.MockHTTPFlowSlowSQL） |
| [yakit.MockMITMSlowRuleHook](#mockmitmslowrulehook) | `seconds ...float64` | - | 模拟 MITM 规则 Hook 的慢执行（导出名为 yakit.MockMITMSlowRuleHook） |
| [yakit.NewBarGraph](#newbargraph) | `graphName ...string` | `*YakitGraph` | 创建一个柱状图对象（导出名为 yakit.NewBarGraph） |
| [yakit.NewLineGraph](#newlinegraph) | `graphName ...string` | `*YakitGraph` | 创建一个折线图对象（导出名为 yakit.NewLineGraph） |
| [yakit.NewPieGraph](#newpiegraph) | `graphName ...string` | `*YakitGraph` | 创建一个饼图对象（导出名为 yakit.NewPieGraph） |
| [yakit.NewTable](#newtable) | `head ...string` | `*YakitTable` | 创建一个 Yakit 静态表格对象（导出名为 yakit.NewTable） |
| [yakit.NewWordCloud](#newwordcloud) | `graphName ...string` | `*YakitGraph` | 创建一个词云图对象（导出名为 yakit.NewWordCloud） |
| [yakit.SaveDomain](#savedomain) | `domain string, ip ...string` | `error` | 保存域名及其关联 IP 到项目数据库（导出名为 db.SaveDomain） |
| [yakit.SavePortFromResult](#saveportfromresult) | `t any, RuntimeId ...string` | `error` | savePortFromObj 从扫描结果对象提取端口信息并保存为端口资产（导出名为 db.SavePortFromResult） |
| [yakit.StatusCard](#statuscard) | `id string, data any, tags ...string` | - | 在 Yakit UI 中输出/更新一个状态卡片（导出名为 yakit.StatusCard） |
| [yakit.Stream](#stream) | `streamType string, streamId string, stream io.Reader, extra ...any` | - | 向 Yakit 持续输出一个流（如实时日志、命令输出，导出名为 yakit.Stream） |
| [yakit.UpdateYakitStoreFromGit](#updateyakitstorefromgit) | `ctx context.Context, ghUrl string, proxy ...string` | `error` | LoadYakitThirdpartySourceScripts 从第三方 Git 源拉取并导入 Yakit 插件（导出名为 yakit.UpdateYakitStoreFromGit） |
| [yakit.Warn](#warn) | `tmp string, items ...any` | - | 向 Yakit 输出一条 warn 级别日志（导出名为 yakit.Warn） |
| [yakit.fileFindAction](#filefindaction) | `findMode string, findCondition string, findContent ...string` | `*YakitFileAction` | 构造一个「查找文件」操作记录（导出名为 yakit.fileFindAction） |

## 函数详情

### AutoInitYakit {#autoinityakit}

```go
AutoInitYakit()
```

根据命令行参数自动初始化 Yakit 客户端，并将其绑定到当前脚本引擎（导出名为 yakit.AutoInitYakit）

当脚本以 Yakit 方式运行（提供了 --yakit-webhook 等参数）时会创建真实客户端，否则使用空客户端

初始化完成后，yakit.Info/yakit.Warn/yakit.StatusCard 等输出会被正确路由到当前引擎对应的客户端

**示例**

``````````````yak
// 在脚本起始处自动初始化 Yakit 客户端（在 Yakit 引擎环境下生效）
yakit.AutoInitYakit()
yakit.Info("yakit client is ready")
``````````````

---

### Code {#code}

```go
Code(tmp any)
```

向 Yakit 输出一段代码块（导出名为 yakit.Code）

在 Yakit 中以代码块样式（等宽字体、保留缩进）展示，适合输出原始 HTTP 报文、PoC 片段、配置文件、payload 等
需要保留格式的内容，比 yakit.Text 更适合展示“代码/报文”这类结构化文本。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| tmp | `any` | 代码或报文内容 |

**示例**

``````````````yak
// 把一个用于复现的原始 HTTP 请求作为代码块展示，方便使用者复制
poc = `POST /login HTTP/1.1
Host: target.example.com
Content-Type: application/x-www-form-urlencoded

username=admin&password=' OR '1'='1`
yakit.Code(poc)
``````````````

---

### DeleteAllAIEvent {#deleteallaievent}

```go
DeleteAllAIEvent() error
```

删除项目数据库中保存的全部 AI 事件（导出名为 yakit.DeleteAllAIEvent）

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息（数据库不可用或删除失败时返回） |

**示例**

``````````````yak
// 清空项目库中的 AI 事件（会修改数据库，示意性示例）
yakit.DeleteAllAIEvent()
``````````````

---

### DeletePayloadByGroup {#deletepayloadbygroup}

```go
DeletePayloadByGroup(group string) error
```

删除指定字典组及其全部 payload（导出名为 db.DeletePayloadByGroup）

用于清理不再需要的字典组。删除后该组不再出现在 db.GetAllPayloadGroupsName 的结果里，

db.YieldPayload 也取不到任何内容。删除不存在的组不会报错。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| group | `string` | 要删除的字典组名 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息（数据库不可用时返回） |

**示例**

``````````````yak
// 完整生命周期：创建 -> 确认存在 -> 删除 -> 确认消失
db.SavePayload("doc-demo-tmp", ["a", "b"])~
assert "doc-demo-tmp" in db.GetAllPayloadGroupsName(), "group should exist after SavePayload"
db.DeletePayloadByGroup("doc-demo-tmp")~
assert !("doc-demo-tmp" in db.GetAllPayloadGroupsName()), "group should be gone after delete"
``````````````

---

### EmitSSAResult {#emitssaresult}

```go
EmitSSAResult(result *ssaapi.SyntaxFlowResult) (int, int, int, error)
```

将单个 SyntaxFlowResult 转换为 SSA 流式负载，并通过内部 &#34;ssa-stream&#34; 通道发送（导出名为 yakit.EmitSSAResult）
去重状态保存在当前 yak 进程内存中（非全局包状态）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| result | `*ssaapi.SyntaxFlowResult` | 一个 SyntaxFlow 查询结果 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `int` | 风险数量 |
| r2 | `int` | 文件数量 |
| r3 | `int` | 数据流数量 |
| r4 | `error` | 错误信息 |

**示例**

``````````````yak
// 发送一个 SyntaxFlow 结果（需在 Yakit 引擎环境下生效，示意性示例）
riskCount, fileCount, flowCount, err = yakit.EmitSSAResult(result)
``````````````

---

### EnableDotGraphTab {#enabledotgraphtab}

```go
EnableDotGraphTab(tabName string)
```

在 Yakit UI 中启用一个 DOT 图标签页（导出名为 yakit.EnableDotGraphTab）
启用后可配合 yakit.OutputDotGraph 向该标签页输出 Graphviz DOT 图

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| tabName | `string` | 标签页名称 |

**示例**

``````````````yak
// 启用 DOT 图标签页并输出一张图（需在 Yakit 引擎环境下生效，示意性示例）
yakit.EnableDotGraphTab("Graph")
yakit.OutputDotGraph("Graph", "digraph G { a -> b }")
``````````````

---

### EnableTable {#enabletable}

```go
EnableTable(tableName string, columns []string)
```

在 Yakit UI 中启用一个动态固定表格用于实时展示数据（导出名为 yakit.EnableTable）

与 yakit.NewTable（静态、一次性输出）不同：EnableTable 先声明一张“持续可写”的表格，
之后在扫描过程中用 yakit.TableData 不断往里增量加行，界面实时刷新。适合“边扫边出结果”的体验。
用法：EnableTable 声明列 -&gt; 循环中多次调用 TableData 写行（每行需有唯一 uuid，TableData 会自动补全）。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| tableName | `string` | 表格名称（后续 TableData 用同名表格写入） |
| columns | `[]string` | 表格列名列表 |

**示例**

``````````````yak
// 实时端口扫描结果表：声明表 -> 边扫边写行（需在 Yakit 引擎环境下展示）
yakit.EnableTable("Port Result", ["host", "port", "service"])
findings = [["10.0.0.1", "80", "http"], ["10.0.0.1", "443", "https"], ["10.0.0.2", "22", "ssh"]]
for f in findings {
    yakit.TableData("Port Result", {"host": f[0], "port": f[1], "service": f[2]})
    yakit.Info("found %s:%s", f[0], f[1])
}
``````````````

---

### EnableText {#enabletext}

```go
EnableText(tabName string)
```

在 Yakit UI 中启用一个文本标签页（导出名为 yakit.EnableText）

启用后可配合 yakit.TextTabData 向该标签页追加文本内容

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| tabName | `string` | 标签页名称 |

**示例**

``````````````yak
// 启用文本标签页并写入文本（需在 Yakit 引擎环境下生效，示意性示例）
yakit.EnableText("Log")
yakit.TextTabData("Log", "hello yak")
``````````````

---

### EnableWebsiteTrees {#enablewebsitetrees}

```go
EnableWebsiteTrees(targets string)
```

在 Yakit UI 中启用「网站树」展示标签（导出名为 yakit.EnableWebsiteTrees）
用于在插件运行时让 Yakit 展示指定目标的网站结构树

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| targets | `string` | 目标（如域名/URL），多个可用逗号等分隔 |

**示例**

``````````````yak
// 在 Yakit 中启用网站树展示（需在 Yakit 引擎环境下生效，示意性示例）
yakit.EnableWebsiteTrees("example.com")
``````````````

---

### ForceSyncBuildInForge {#forcesyncbuildinforge}

```go
ForceSyncBuildInForge(notify func(float64, string)) error
```

强制把内置 AI Forge 同步到数据库（导出名为 yakit.ForceSyncBuildInForge）

适用于初始化或升级后刷新内置 AI Forge；可传入回调以接收同步进度

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| notify | `func(float64, string)` | 进度回调 func(progress float64, message string)，可为 nil |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息（同步失败时返回） |

**示例**

``````````````yak
// 同步内置 AI Forge 到数据库（会写库，示意性示例）
yakit.ForceSyncBuildInForge(func(p, msg) { println(msg) })
``````````````

---

### ForceSyncCorePlugin {#forcesynccoreplugin}

```go
ForceSyncCorePlugin(notify func(float64, string)) error
```

强制把内置 Core 插件同步到数据库（导出名为 yakit.ForceSyncCorePlugin）

适用于初始化或升级后刷新内置插件；可传入回调以接收同步进度

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| notify | `func(float64, string)` | 进度回调 func(progress float64, message string)，可为 nil |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息（同步失败时返回） |

**示例**

``````````````yak
// 同步内置 Core 插件到数据库（会写库，示意性示例）
yakit.ForceSyncCorePlugin(func(p, msg) { println(msg) })
``````````````

---

### ForceSyncSyntaxFlowRule {#forcesyncsyntaxflowrule}

```go
ForceSyncSyntaxFlowRule(notify func(float64, string)) error
```

强制把内置的 SyntaxFlow 规则同步到数据库（导出名为 yakit.ForceSyncSyntaxFlowRule）

适用于初始化或升级后刷新内置规则；可传入回调以接收同步进度

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| notify | `func(float64, string)` | 进度回调 func(progress float64, message string)，可为 nil |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息（同步失败时返回） |

**示例**

``````````````yak
// 同步内置 SyntaxFlow 规则到数据库（会写库，示意性示例）
yakit.ForceSyncSyntaxFlowRule(func(p, msg) { println(msg) })
``````````````

---

### GetHomeDir {#gethomedir}

```go
GetHomeDir() string
```

GetDefaultYakitBaseDir 获取 Yakit 的主工作目录（导出名为 yakit.GetHomeDir）

优先使用环境变量 YAKIT_HOME，否则默认为用户主目录下的 yakit-projects

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | Yakit 主工作目录的绝对路径 |

**示例**

``````````````yak
dir = yakit.GetHomeDir()
println(dir)
assert dir != "", "GetHomeDir should return a non-empty path"
``````````````

---

### GetHomeTempDir {#gethometempdir}

```go
GetHomeTempDir() string
```

GetDefaultYakitBaseTempDir 获取 Yakit 的临时目录（导出名为 yakit.GetHomeTempDir）

该目录位于 Yakit 主工作目录下的 temp 子目录，不存在时会自动创建

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | Yakit 临时目录的绝对路径 |

**示例**

``````````````yak
tmp = yakit.GetHomeTempDir()
println(tmp)
assert tmp != "", "GetHomeTempDir should return a non-empty path"
``````````````

---

### GetOnlineBaseUrl {#getonlinebaseurl}

```go
GetOnlineBaseUrl() string
```

获取当前配置的在线服务（Yakit 商店等）基础 URL（导出名为 yakit.GetOnlineBaseUrl）

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 当前在线服务的基础 URL |

**示例**

``````````````yak
url = yakit.GetOnlineBaseUrl()
println(url)
assert url != "", "GetOnlineBaseUrl should return a non-empty base url"
``````````````

---

### InitYakit {#inityakit}

```go
InitYakit(y *YakitClient)
```

初始化全局 Yakit 客户端实例（导出名为 yakit.InitYakit）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| y | `*YakitClient` | Yakit 客户端对象 |

**示例**

``````````````yak
client = yakit.NewClient("http://127.0.0.1:8080/webhook")
yakit.InitYakit(client)
``````````````

---

### Markdown {#markdown}

```go
Markdown(tmp any)
```

向 Yakit 输出一段 Markdown（导出名为 yakit.Markdown）

在 Yakit 中渲染 Markdown，支持标题、列表、表格、加粗等，适合输出结构化的扫描报告/结论。
是把统计结果做成“可读报告”的常用方式，常与 db 查询统计、yakit 图表配合，形成图文并茂的输出。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| tmp | `any` | Markdown 文本内容 |

**示例**

``````````````yak
// 把扫描结论拼成 Markdown 报告输出（带标题、列表与表格）
report = `# Scan Report

## Overview
- hosts: 10
- open ports: 23
- findings: 2

## Findings
| severity | title |
|----------|-------|
| high     | SQL Injection |
| medium   | Reflected XSS |
`
yakit.Markdown(report)
``````````````

---

### NewClient {#newclient}

```go
NewClient(addr string) *YakitClient
```

NewYakitClient 基于 webhook 地址创建一个 Yakit 客户端（导出名为 yakit.NewClient）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| addr | `string` | Yakit webhook 地址，为空时输出回退到日志 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*YakitClient` | Yakit 客户端对象 |

**示例**

``````````````yak
client = yakit.NewClient("http://127.0.0.1:8080/webhook")
yakit.InitYakit(client)
``````````````

---

### NewHTTPFlowRisk {#newhttpflowrisk}

```go
NewHTTPFlowRisk(riskName string, isHttps bool, url string, req []byte, rsp []byte) *YakitHTTPFlowRisk
```

创建一个 HTTP 流量风险对象（导出名为 yakit.NewHTTPFlowRisk）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| riskName | `string` | 风险名称 |
| isHttps | `bool` | 是否为 HTTPS |
| url | `string` | 关联 URL |
| req | `[]byte` | 原始请求字节 |
| rsp | `[]byte` | 原始响应字节 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*YakitHTTPFlowRisk` | HTTP 流量风险对象 |

**示例**

``````````````yak
risk = yakit.NewHTTPFlowRisk("XSS", true, "https://example.com", reqBytes, rspBytes)
risk.SetLevel("high")
dump(risk)
``````````````

---

### ObjToPort {#objtoport}

```go
ObjToPort(t any) (*schema.Port, error)
```

将多种来源对象转换为统一的端口资产对象（导出名为 yakit.ObjToPort）

支持服务扫描结果(fp.MatchResult)等类型，便于后续统一入库或展示

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| t | `any` | 待转换的对象（如 servicescan 的匹配结果） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*schema.Port` | 端口资产对象 |
| r2 | `error` | 错误信息（无法识别的类型时返回） |

**示例**

``````````````yak
// 将服务扫描结果转换为端口资产对象（依赖扫描结果，示意性示例）
for result in servicescan.Scan("127.0.0.1", "80")~ {
    port = yakit.ObjToPort(result)~
    println(port.Host, port.Port)
    break
}
``````````````

---

### Output {#output}

```go
Output(i any) error
```

向 Yakit 输出任意可识别对象（自动按类型选择输出通道，导出名为 yakit.Output）

这是 Yakit 结构化输出的统一入口：传入对象后会按其类型自动选择正确的展示通道，无需关心底层协议。
支持的对象类型包括：yakit.NewTable 表格、yakit.New*Graph 图表、风险(risk)、HTTP 流量(schema.HTTPFlow)、
指纹扫描结果(servicescan/fp.MatchResult)、状态卡片、表格行(yakit.TableData) 等。
这意味着可以把扫描器的原生结果对象直接 Output 出去，由 Yakit 渲染成对应的卡片/表格。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 要输出的对象（表格、图表、扫描结果对象等） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息（输出失败时返回） |

**示例**

``````````````yak
// 1) 输出表格与图表
table = yakit.NewTable("host", "port")
table.Append("10.0.0.1", "80")
yakit.Output(table)

pie = yakit.NewPieGraph("severity"); pie.Add("high", 3); pie.Add("low", 7)
yakit.Output(pie)

// 2) 联动：把 servicescan 的原生结果对象直接 Output，由 Yakit 渲染为指纹卡片
// （端口扫描依赖网络，示意性示例）
// for result in servicescan.Scan("127.0.0.1", "80")~ { yakit.Output(result) }
``````````````

---

### OutputDotGraph {#outputdotgraph}

```go
OutputDotGraph(tabName string, data string) *YakitDotGraphData
```

向 Yakit UI 中已启用的 DOT 图标签页输出一张 Graphviz DOT 图（导出名为 yakit.OutputDotGraph）
需先通过 yakit.EnableDotGraphTab 启用同名标签页

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| tabName | `string` | 目标标签页名称（需与 EnableDotGraphTab 一致） |
| data | `string` | Graphviz DOT 图字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*YakitDotGraphData` | 本次输出的 DOT 图数据对象 |

**示例**

``````````````yak
// 输出一张简单的 DOT 图（需在 Yakit 引擎环境下生效，示意性示例）
yakit.EnableDotGraphTab("Graph")
yakit.OutputDotGraph("Graph", "digraph G { a -> b }")
``````````````

---

### QueryDomainsByDomainKeyword {#querydomainsbydomainkeyword}

```go
QueryDomainsByDomainKeyword(keyword string) (chan *schema.Domain, error)
```

queryDomainAssetByDomainKeyword 按域名关键词模糊查询域名资产（导出名为 db.QueryDomainsByDomainKeyword）

检索由 db.SaveDomain 入库的域名资产，在 domain 字段做模糊匹配（常用于按主域聚合所有子域名）。

返回的 Domain 对象可读取 .Domain（域名）、.IPAddr（关联 IP）、.HTTPTitle（网站标题）等字段。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| keyword | `string` | 域名关键词（如主域 &#34;example.com&#34;） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `chan *schema.Domain` | 域名资产的 channel，可使用 for-range 遍历 |
| r2 | `error` | 错误信息（项目数据库不可用时返回） |

**示例**

``````````````yak
// 保存子域名资产后，按主域关键字聚合检索（保存->查询 联动）
base = "doc-demo-dq.example.com"
db.SaveDomain("a."+base, "1.1.1.1")~
db.SaveDomain("b."+base, "2.2.2.2")~

got = []
ch = db.QueryDomainsByDomainKeyword(base)~
for d in ch { got = append(got, d.Domain) }
assert len(got) >= 2, "should retrieve the subdomains saved under the base domain"
``````````````

---

### QueryDomainsByNetwork {#querydomainsbynetwork}

```go
QueryDomainsByNetwork(network string) (chan *schema.Domain, error)
```

queryDomainAssetByNetwork 按网段（解析 IP 所在网段）查询域名资产（导出名为 db.QueryDomainsByNetwork）

与 db.QueryDomainsByDomainKeyword 的区别：本函数按域名“解析到的 IP”所属网段匹配（基于 ip_integer 字段），

用于回答“哪些域名落在某个 C 段 / 某个 IP 上”——典型用于把同一 IP 上的虚拟主机/旁站聚合出来。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| network | `string` | 网段表达式，如 &#34;192.168.1.0/24&#34;、&#34;1.1.1.1/32&#34; |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `chan *schema.Domain` | 域名资产的 channel，可使用 for-range 遍历 |
| r2 | `error` | 错误信息（项目数据库不可用时返回） |

**示例**

``````````````yak
// 保存带解析 IP 的域名，再按该 IP 网段反查域名（按 IP 聚合旁站的思路）
db.SaveDomain("vhost-a.doc-demo-net.example.com", "203.0.113.7")~
db.SaveDomain("vhost-b.doc-demo-net.example.com", "203.0.113.7")~

got = []
ch = db.QueryDomainsByNetwork("203.0.113.0/24")~
for d in ch { got = append(got, d.Domain) }
assert len(got) >= 2, "both vhosts resolving into 203.0.113.0/24 should be returned"
``````````````

---

### QueryDomainsByTitle {#querydomainsbytitle}

```go
QueryDomainsByTitle(title string) (chan *schema.Domain, error)
```

queryDomainAssetByHTMLTitle 按网站 HTML 标题模糊查询域名资产（导出名为 db.QueryDomainsByTitle）

在域名资产的 html_title 字段做模糊匹配，用于按网站标题定位资产（如所有标题含 &#34;admin&#34;/&#34;后台&#34;/&#34;登录&#34; 的站点）。

注意：仅当入库时记录了网站标题（例如经过抓取并回填标题）才能命中，仅用 db.SaveDomain 保存域名+IP 时标题为空。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| title | `string` | HTML 标题关键词 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `chan *schema.Domain` | 域名资产的 channel，可使用 for-range 遍历 |
| r2 | `error` | 错误信息（项目数据库不可用时返回） |

**示例**

``````````````yak
// 按网站标题筛选后台类资产（依赖资产已带标题，示意性示例）
ch = db.QueryDomainsByTitle("admin")~
for domain in ch {
    println(domain.Domain, domain.HTTPTitle)
}
``````````````

---

### QueryHTTPFlowsAll {#queryhttpflowsall}

```go
QueryHTTPFlowsAll() chan *schema.HTTPFlow
```

以管道方式遍历数据库中保存的全部 HTTP 流量（导出名为 yakit.QueryHTTPFlowsAll）

等价于以空关键字调用 QueryHTTPFlowsByKeyword，适合流式处理海量历史流量

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `chan *schema.HTTPFlow` | 一个 HTTPFlow 管道，可用 for range 逐条消费 |

**示例**

``````````````yak
// 遍历历史 HTTP 流量（依赖本地数据库已有数据，示意性示例）
for flow in yakit.QueryHTTPFlowsAll() {
    println(flow.Url)
    break
}
``````````````

---

### QueryHTTPFlowsByKeyword {#queryhttpflowsbykeyword}

```go
QueryHTTPFlowsByKeyword(k string) chan *schema.HTTPFlow
```

queryHTTPFlowByKeyword 按关键词在 URL/请求/响应中模糊查询 HTTP 流量（导出名为 db.QueryHTTPFlowsByKeyword）

在历史流量的 url、request、response 三个字段中做模糊匹配，是检索“流量证据”的主力接口。

例如检索包含 &#34;password&#34; 的流量定位登录点、检索某域名定位相关请求。返回 HTTPFlow 对象 channel，

可读取 .Url / .Method / .StatusCode / .BodyLength 等字段，常配合 yakit.NewTable 展示结果。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| k | `string` | 关键词（在 url/request/response 中模糊匹配；传 &#34;&#34; 等价于遍历全部） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `chan *schema.HTTPFlow` | HTTPFlow 对象的 channel，可使用 for-range 遍历 |

**示例**

``````````````yak
// 先落一条可检索的流量，再按关键字查询并用表格展示结果（保存->查询->展示 联动）
host = "doc-demo-query.example.com"
req = []byte(f"GET /login HTTP/1.1\r\nHost: ${host}\r\n\r\n")
rsp = []byte("HTTP/1.1 200 OK\r\nContent-Length: 4\r\n\r\nform")
db.SaveHTTPFlowFromRaw("http://"+host+"/login", req, rsp)~

table = yakit.NewTable("URL", "Method", "Status")
hit = 0
for flow in db.QueryHTTPFlowsByKeyword(host) {
    table.Append(flow.Url, flow.Method, flow.StatusCode)
    hit++
}
yakit.Output(table)
assert hit >= 1, "the saved login flow should be found by keyword"
``````````````

---

### QueryHostPortAll {#queryhostportall}

```go
QueryHostPortAll() chan string
```

遍历项目数据库中全部 Host:Port 资产（导出名为 yakit.QueryHostPortAll）

以管道方式返回形如 &#34;host:port&#34; 的字符串，适合流式处理全部端口资产

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `chan string` | port 字符串管道，可用 for range 逐条消费 |

**示例**

``````````````yak
// 遍历全部 Host:Port 资产（依赖本地数据库已有数据，示意性示例）
for hp in yakit.QueryHostPortAll() { println(hp); break }
``````````````

---

### QueryHostPortByKeyword {#queryhostportbykeyword}

```go
QueryHostPortByKeyword(target string) chan string
```

按关键字查询 Host:Port 资产（导出名为 yakit.QueryHostPortByKeyword）

从项目数据库匹配关键字，以管道方式返回形如 &#34;host:port&#34; 的字符串

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| target | `string` | 查询关键字（可为 IP、域名片段等） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `chan string` | port 字符串管道，可用 for range 逐条消费 |

**示例**

``````````````yak
// 按关键字查询 Host:Port（依赖本地数据库已有数据，示意性示例）
for hp in yakit.QueryHostPortByKeyword("127.0.0.1") { println(hp); break }
``````````````

---

### QueryHostPortByNetwork {#queryhostportbynetwork}

```go
QueryHostPortByNetwork(network string) chan string
```

按网段查询开放端口并以 &#34;host:port&#34; 字符串返回（导出名为 db.QueryHostPortByNetwork）

从端口资产（由 db.SavePortFromResult 入库）中筛选 state=open 且落在指定网段的记录，直接拼成 &#34;host:port&#34;。

非常适合把“之前扫到的开放端口”作为下一步动作的目标列表（如批量取 banner、批量发 poc）。

若需要端口资产的完整字段（服务、指纹、标题等），用 db.QueryPortAssetByNetwork 拿对象而非字符串。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| network | `string` | 网段表达式，如 &#34;192.168.1.0/24&#34; 或单个 IP |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `chan string` | &#34;host:port&#34; 字符串的 channel，可使用 for-range 遍历 |

**示例**

``````````````yak
// 联动：把某网段已入库的开放端口取出，作为后续探测的目标列表（依赖已有端口资产，示意性示例）
targets = []
for hostport in db.QueryHostPortByNetwork("192.168.1.0/24") {
    targets = append(targets, hostport)   // 形如 "192.168.1.10:80"
}
yakit.Info("collected %d open host:port targets for next step", len(targets))
``````````````

---

### QueryHostPortByNetworkAndPort {#queryhostportbynetworkandport}

```go
QueryHostPortByNetworkAndPort(network string, port string) chan string
```

按网段与端口查询 Host:Port 资产（导出名为 yakit.QueryHostPortByNetworkAndPort）

从项目数据库匹配指定网段与端口范围，以管道方式返回形如 &#34;host:port&#34; 的字符串

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| network | `string` | 网段（如 &#34;192.168.1.0/24&#34;） |
| port | `string` | 端口或端口范围（如 &#34;80&#34; 或 &#34;80,443&#34; 或 &#34;1-1000&#34;） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `chan string` | port 字符串管道，可用 for range 逐条消费 |

**示例**

``````````````yak
// 按网段与端口查询 Host:Port（依赖本地数据库已有数据，示意性示例）
for hp in yakit.QueryHostPortByNetworkAndPort("127.0.0.1/32", "80") { println(hp); break }
``````````````

---

### QueryHostsByDomain {#queryhostsbydomain}

```go
QueryHostsByDomain(keyword string) (chan *schema.Host, error)
```

queryHostAssetByDomainKeyword 按关联域名关键词查询主机资产（导出名为 db.QueryHostsByDomain）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| keyword | `string` | 域名关键词 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `chan *schema.Host` | 主机资产的 channel，可使用 for-range 遍历 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 依赖本地项目数据库（示意性示例）
ch = db.QueryHostsByDomain("example.com")~
for host := range ch { println(host.IP) }
``````````````

---

### QueryHostsByNetwork {#queryhostsbynetwork}

```go
QueryHostsByNetwork(network string) (chan *schema.Host, error)
```

queryHostAssetByNetwork 按网段查询主机资产（导出名为 db.QueryHostPortByKeyword 等相关接口的底层实现之一）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| network | `string` | 网段表达式，如 &#34;192.168.1.0/24&#34; |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `chan *schema.Host` | 主机资产的 channel，可使用 for-range 遍历 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 依赖本地项目数据库（示意性示例）
ch = db.QueryHostsByNetwork("192.168.1.0/24")~
for host := range ch { println(host.IP) }
``````````````

---

### QueryPortAssetByNetwork {#queryportassetbynetwork}

```go
QueryPortAssetByNetwork(network string) (chan *schema.Port, error)
```

按网段查询端口资产（导出名为 yakit.QueryPortAssetByNetwork）

从项目数据库中以管道方式返回匹配网段的端口资产对象

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| network | `string` | 网段（如 &#34;192.168.1.0/24&#34; 或单个 IP） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `chan *schema.Port` | Port 资产管道，可用 for range 逐条消费 |
| r2 | `error` | 错误信息（数据库不可用时返回） |

**示例**

``````````````yak
// 查询某网段的端口资产（依赖本地数据库已有数据，示意性示例）
ch = yakit.QueryPortAssetByNetwork("127.0.0.1/32")~
for port in ch { println(port.Host, port.Port); break }
``````````````

---

### QueryUrlsAll {#queryurlsall}

```go
QueryUrlsAll() chan string
```

queryAllUrls 查询全部 URL 资产（导出名为 db.QueryUrlsAll）

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `chan string` | URL 字符串的 channel，可使用 for-range 遍历 |

**示例**

``````````````yak
// 依赖本地项目数据库（示意性示例）

	for u := range db.QueryUrlsAll() {
	    println(u)
	}
``````````````

---

### QueryUrlsByKeyword {#queryurlsbykeyword}

```go
QueryUrlsByKeyword(k string) chan string
```

按关键词模糊查询历史流量中的 URL 资产（导出名为 db.QueryUrlsByKeyword）

与 db.QueryHTTPFlowsByKeyword 的区别：本函数只在 url 字段上匹配，且只返回去重后的 URL 字符串

（而非完整流量对象），更轻量，适合“我只想要 URL 列表”的场景（如收集所有 /api 接口）。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| k | `string` | URL 关键词（在 url 字段做模糊匹配） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `chan string` | URL 字符串的 channel，可使用 for-range 遍历 |

**示例**

``````````````yak
// 落两条同站点不同路径的流量，再仅按 URL 关键字收集接口路径
host = "doc-demo-urls.example.com"
rsp = []byte("HTTP/1.1 200 OK\r\nContent-Length: 2\r\n\r\nok")
db.SaveHTTPFlowFromRaw("http://"+host+"/api/users", []byte(f"GET /api/users HTTP/1.1\r\nHost: ${host}\r\n\r\n"), rsp)~
db.SaveHTTPFlowFromRaw("http://"+host+"/api/login", []byte(f"GET /api/login HTTP/1.1\r\nHost: ${host}\r\n\r\n"), rsp)~

apis = []
for u in db.QueryUrlsByKeyword(host+"/api") { apis = append(apis, u) }
assert len(apis) >= 2, "should collect at least the two /api urls just saved"
``````````````

---

### Report {#report}

```go
Report(i int)
```

向 Yakit 输出一个报告引用（按报告 ID，导出名为 yakit.Report）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `int` | 报告 ID |

**示例**

``````````````yak
yakit.Report(1)
``````````````

---

### SSAStream {#ssastream}

```go
SSAStream(partsJSON string)
```

通过内部 &#34;ssa-stream&#34; 通道发送一段原始 JSON 字符串（导出名为 yakit.SSAStream）
供 ScanNode 等订阅 SSA 扫描事件，避免使用 risk.NewRisk(type=ssa-risk) 作为传输 hack

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| partsJSON | `string` | sfreport.SSAResultParts 的原始 JSON 字符串 |

**示例**

``````````````yak
// 发送一段 SSA 结果 JSON（需在 Yakit 引擎环境下生效，示意性示例）
yakit.SSAStream("{}")
``````````````

---

### SaveHTTPFlow {#savehttpflow}

```go
SaveHTTPFlow(url string, req *http.Request, rsp *http.Response) error
```

saveCrawler 将一次 HTTP 请求/响应作为爬虫流量保存到项目数据库（导出名为 db.SaveHTTPFlowFromNative）

与 db.SaveHTTPFlowFromRaw 的区别：本函数接收 Go/标准库风格的 *http.Request / *http.Response 对象，

而非原始字节。适合已经持有结构化请求/响应对象（如某些库的返回值）时直接落库；

来源类型固定标记为 &#34;basic-crawler&#34;。若你手里是原始报文字节，请优先用 db.SaveHTTPFlowFromRaw。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| url | `string` | 请求 URL |
| req | `*http.Request` | *http.Request 请求对象 |
| rsp | `*http.Response` | *http.Response 响应对象 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息（项目数据库不可用或保存失败时返回） |

**示例**

``````````````yak
// 依赖结构化的 http 请求/响应对象（示意性示例）
// 多数情况下推荐改用 db.SaveHTTPFlowFromRaw 直接保存原始报文字节
db.SaveHTTPFlowFromNative("http://example.com", req, rsp)~
``````````````

---

### SavePayload {#savepayload}

```go
SavePayload(group string, payloadRaw any) error
```

savePayloads 将一组 payload 保存到指定字典组（导出名为 db.SavePayload）

payload 字典是爆破（brute）、fuzz、模糊测试等场景的弹药库。同一 group 名下的多次保存会累积入库（去重由底层处理）。

入库后用 db.YieldPayload 流式取出消费、db.GetAllPayloadGroupsName 列出所有组、db.DeletePayloadByGroup 删除整组。

payloadRaw 既可传单个字符串，也可传字符串列表；大字典建议用 db.SavePayloadByFile 直接从文件导入。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| group | `string` | 字典组名（如 &#34;common-users&#34;、&#34;weak-passwords&#34;） |
| payloadRaw | `any` | payload 内容，支持单个字符串或字符串列表 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息（数据库不可用或保存失败时返回） |

**示例**

``````````````yak
// 保存用户名/密码字典，再取出用于（演示性的）凭据组合
db.SavePayload("doc-demo-users", ["admin", "root", "test"])~
db.SavePayload("doc-demo-pass", ["123456", "admin123", "P@ssw0rd"])~

users = []; pass = []
for u in db.YieldPayload("doc-demo-users") { users = append(users, u) }
for p in db.YieldPayload("doc-demo-pass")  { pass  = append(pass, p) }
combos = len(users) * len(pass)
println(combos)   // OUT: 9
assert combos == 9, "3 users x 3 passwords should yield 9 credential combinations"

// 清理演示数据
db.DeletePayloadByGroup("doc-demo-users"); db.DeletePayloadByGroup("doc-demo-pass")
``````````````

---

### SavePayloadByFile {#savepayloadbyfile}

```go
SavePayloadByFile(group string, fileName string) error
```

从字典文件按行读取内容并保存到指定字典组（导出名为 db.SavePayloadByFile）

与 db.SavePayload 等价，但数据源是文件：文件每一行作为一个 payload 入库，适合导入大字典（rockyou 等）。

导入后同样用 db.YieldPayload 取出消费。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| group | `string` | 字典组名 |
| fileName | `string` | 字典文件路径（每行一个 payload） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息（数据库不可用、文件不存在或读取失败时返回） |

**示例**

``````````````yak
// 先用 file 库写一个临时字典文件，再导入字典组并读回
dictPath = "/tmp/doc-demo-dict.txt"
file.Save(dictPath, "admin\nroot\nguest\n")~
db.SavePayloadByFile("doc-demo-fromfile", dictPath)~

got = []
for p in db.YieldPayload("doc-demo-fromfile") { got = append(got, p) }
assert len(got) == 3, "should import 3 lines from the dictionary file"
db.DeletePayloadByGroup("doc-demo-fromfile")
``````````````

---

### SetOnlineBaseUrl {#setonlinebaseurl}

```go
SetOnlineBaseUrl(u string)
```

设置在线服务（Yakit 商店等）的基础 URL（导出名为 yakit.SetOnlineBaseUrl）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| u | `string` | 新的在线服务基础 URL |

**示例**

``````````````yak
yakit.SetOnlineBaseUrl("https://www.yaklang.com")
assert yakit.GetOnlineBaseUrl() == "https://www.yaklang.com", "SetOnlineBaseUrl should update the base url"
``````````````

---

### SetProgress {#setprogress}

```go
SetProgress(f float64)
```

设置主进度条进度（导出名为 yakit.SetProgress）

在 Yakit 任务界面更新主进度条。进度值是 0.0~1.0 的小数（0.0 表示 0%，1.0 表示 100%）。
典型用法：在遍历目标的循环里用 已完成数/总数 实时刷新进度。多任务并行时用 yakit.SetProgressEx 区分不同进度条。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| f | `float64` | 进度值，取值范围 0.0~1.0 |

**示例**

``````````````yak
// 在循环中按 已完成/总数 刷新主进度条，结束时置满
targets = ["10.0.0.1", "10.0.0.2", "10.0.0.3", "10.0.0.4"]
for i = 0; i < len(targets); i++ {
    yakit.Info("scanning %s", targets[i])
    yakit.SetProgress(float(i + 1) / float(len(targets)))
}
yakit.SetProgress(1.0)
yakit.Success("scan completed")
``````````````

---

### SetProgressEx {#setprogressex}

```go
SetProgressEx(id string, f float64)
```

设置指定 ID 的进度条进度（导出名为 yakit.SetProgressEx）

与 yakit.SetProgress 的区别：本函数带一个 id，可同时维护“多条独立进度条”，每个 id 对应一条。
适合并发/多阶段任务（如同时跑端口扫描和指纹识别，各自一条进度条）。相同 id 的后续调用会更新同一条进度条。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| id | `string` | 进度条 ID（不同 id 对应不同进度条） |
| f | `float64` | 进度值，取值范围 0.0~1.0 |

**示例**

``````````````yak
// 维护两条独立进度条，分别表示两个阶段的进度
for i = 0; i < 5; i++ {
    yakit.SetProgressEx("port-scan",   float(i + 1) / 5.0)
    yakit.SetProgressEx("fingerprint", float(i + 1) / 10.0)
    sleep(0.05)
}
yakit.SetProgressEx("port-scan", 1.0)
``````````````

---

### Success {#success}

```go
Success(tmp any)
```

向 Yakit 输出一条成功信息（导出名为 yakit.Success）

用于标记关键步骤成功完成，在 Yakit 中以成功样式（绿色）展示，比普通 Info 更醒目。
常用于“发现漏洞”“爆破命中”“任务完成”等正向结果。注意：本函数接收已拼好的字符串，不做 printf 格式化。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| tmp | `any` | 成功信息内容（如需格式化请先用 sprintf/f-string 拼好） |

**示例**

``````````````yak
// 在命中结果时给出醒目的成功提示
user = "admin"; pass = "admin123"
yakit.Success(sprintf("credential hit: %s / %s", user, pass))
yakit.Success("all 5 tasks finished")
``````````````

---

### TableData {#tabledata}

```go
TableData(tableName string, data any) *YakitFixedTableData
```

向 Yakit UI 中已启用的固定表格写入一行数据（导出名为 yakit.TableData）

与 yakit.EnableTable 配对使用：先 EnableTable 声明表格，再用本函数逐行写入。data 是一个 map，
其键应与 EnableTable 声明的列名对应。每行需要一个唯一标识 &#34;uuid&#34;，若 data 中未提供会自动生成；
用相同 uuid 再次写入可“更新”同一行（例如先写“扫描中”，拿到结果后用同 uuid 更新为“完成”）。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| tableName | `string` | 目标表格名称（需与 EnableTable 一致） |
| data | `any` | 行数据 map，键为列名；可含 &#34;uuid&#34; 控制行标识 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*YakitFixedTableData` | 始终返回 nil（数据通过 Yakit 输出通道异步发送） |

**示例**

``````````````yak
// 用固定 uuid 实现“同一行”的状态更新：扫描中 -> 完成
yakit.EnableTable("Task", ["target", "status"])
rowId = "row-10.0.0.1"
yakit.TableData("Task", {"uuid": rowId, "target": "10.0.0.1", "status": "scanning"})
sleep(0.1)
yakit.TableData("Task", {"uuid": rowId, "target": "10.0.0.1", "status": "done"})   // 更新同一行
``````````````

---

### Text {#text}

```go
Text(tmp any)
```

YakitTextBlock 向 Yakit 输出一个文本块（导出名为 yakit.Text）

与 yakit.Info 的区别：Info 是“一行日志”，Text 是“一整块文本”，适合输出多行内容（如汇总报告、配置清单、
banner 抓取结果）。注意 Text 接收已拼好的字符串，不做 printf 格式化（需格式化请先用 sprintf/f-string 拼好）。
输出代码用 yakit.Code，输出 Markdown 用 yakit.Markdown。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| tmp | `any` | 要展示的文本内容（可多行） |

**示例**

``````````````yak
// 把一段多行的扫描小结作为整块文本输出
summary = sprintf("Scan Summary\n  targets: %d\n  open ports: %d\n  vulns: %d", 10, 23, 2)
yakit.Text(summary)
``````````````

---

### TextTabData {#texttabdata}

```go
TextTabData(tabName string, data string)
```

向 Yakit UI 中已启用的文本标签页追加文本内容（导出名为 yakit.TextTabData）

需先通过 yakit.EnableText 启用同名标签页

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| tabName | `string` | 目标标签页名称（需与 EnableText 一致） |
| data | `string` | 要追加的文本内容 |

**示例**

``````````````yak
// 向已启用的文本标签页写入内容（需在 Yakit 引擎环境下生效，示意性示例）
yakit.EnableText("Log")
yakit.TextTabData("Log", "hello yak")
``````````````

---

### UpdateOnlineYakitStore {#updateonlineyakitstore}

```go
UpdateOnlineYakitStore() error
```

从在线商店下载并保存全部 Yakit 插件（导出名为 yakit.UpdateOnlineYakitStore）

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
// 需要联网及本地数据库（示意性示例）
yakit.UpdateOnlineYakitStore()~
``````````````

---

### UpdateYakitStore {#updateyakitstore}

```go
UpdateYakitStore() error
```

从本地数据库更新 Yakit 插件商店（导出名为 yakit.UpdateYakitStore）

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
// 依赖本地数据库（示意性示例）
yakit.UpdateYakitStore()~
``````````````

---

### UpdateYakitStoreLocal {#updateyakitstorelocal}

```go
UpdateYakitStoreLocal(f string) error
```

LoadYakitFromLocalDir 从本地目录加载 Yakit 插件与文档并写入本地数据库（导出名为 yakit.UpdateYakitStoreLocal）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| f | `string` | 本地资源目录路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
// 依赖本地数据库（示意性示例）
yakit.UpdateYakitStoreLocal("/tmp/yakit-store")~
``````````````

---

### YieldAllAIEvent {#yieldallaievent}

```go
YieldAllAIEvent() chan *schema.AiOutputEvent
```

以管道方式遍历项目数据库中保存的全部 AI 事件（导出名为 yakit.YieldAllAIEvent）

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `chan *schema.AiOutputEvent` | 一个 AI 事件管道，可用 for range 逐条消费；数据库不可用时返回已关闭的空管道 |

**示例**

``````````````yak
// 遍历项目库中的 AI 事件（依赖本地数据库已有数据，示意性示例）
for event in yakit.YieldAllAIEvent() {
    println(event.Type)
    break
}
``````````````

---

### fileChmodAction {#filechmodaction}

```go
fileChmodAction(chmodMode uint32) *YakitFileAction
```

构造一个「修改文件权限」操作记录（导出名为 yakit.fileChmodAction）

用于在 Agent/插件修改文件权限时，向 Yakit 上报结构化的操作信息

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| chmodMode | `uint32` | 新的权限位（如 0o755） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*YakitFileAction` | 文件操作记录对象 |

**示例**

``````````````yak
action = yakit.fileChmodAction(0o755)
println(action.Action)   // OUT: CHMOD
assert action.Action == "CHMOD", "fileChmodAction should build a CHMOD action"
``````````````

---

### fileCreateAction {#filecreateaction}

```go
fileCreateAction(isDir bool, chmodMode uint32) *YakitFileAction
```

构造一个「创建文件/目录」操作记录（导出名为 yakit.fileCreateAction）

用于在 Agent/插件创建文件或目录时，向 Yakit 上报结构化的操作信息

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| isDir | `bool` | 是否为目录 |
| chmodMode | `uint32` | 权限位（如 0o644） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*YakitFileAction` | 文件操作记录对象 |

**示例**

``````````````yak
action = yakit.fileCreateAction(false, 0o644)
println(action.Action)   // OUT: CREATE
assert action.Action == "CREATE", "fileCreateAction should build a CREATE action"
``````````````

---

### fileDeleteAction {#filedeleteaction}

```go
fileDeleteAction(isDir bool) *YakitFileAction
```

构造一个「删除文件/目录」操作记录（导出名为 yakit.fileDeleteAction）

用于在 Agent/插件删除文件或目录时，向 Yakit 上报结构化的操作信息

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| isDir | `bool` | 是否为目录 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*YakitFileAction` | 文件操作记录对象 |

**示例**

``````````````yak
action = yakit.fileDeleteAction(false)
println(action.Action)   // OUT: DELETE
assert action.Action == "DELETE", "fileDeleteAction should build a DELETE action"
``````````````

---

### fileReadAction {#filereadaction}

```go
fileReadAction(offset int, length int, unit string, content []byte) *YakitFileAction
```

构造一个「读文件」操作记录（导出名为 yakit.fileReadAction）

用于在 Agent/插件执行文件读操作时，向 Yakit 上报结构化的操作信息

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| offset | `int` | 读取的起始偏移 |
| length | `int` | 读取长度 |
| unit | `string` | 长度单位（如 &#34;byte&#34;、&#34;line&#34;） |
| content | `[]byte` | 读到的内容（过长会被截断展示） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*YakitFileAction` | 文件操作记录对象 |

**示例**

``````````````yak
action = yakit.fileReadAction(0, 5, "byte", []byte("hello"))
println(action.Action)   // OUT: READ
assert action.Action == "READ", "fileReadAction should build a READ action"
``````````````

---

### fileStatusAction {#filestatusaction}

```go
fileStatusAction(status any) *YakitFileAction
```

构造一个「文件状态」操作记录（导出名为 yakit.fileStatusAction）

用于上报文件的元信息；若传入 os.FileInfo 会自动提取 name/size/mode/modTime/isDir

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| status | `any` | 文件状态，支持 os.FileInfo 或可转为 map 的对象 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*YakitFileAction` | 文件操作记录对象 |

**示例**

``````````````yak
action = yakit.fileStatusAction({"name": "a.txt", "size": 10})
println(action.Action)   // OUT: STATUS
assert action.Action == "STATUS", "fileStatusAction should build a STATUS action"
``````````````

---

### fileWriteAction {#filewriteaction}

```go
fileWriteAction(length int, mode string, content []byte) *YakitFileAction
```

构造一个「写文件」操作记录（导出名为 yakit.fileWriteAction）

用于在 Agent/插件执行文件写操作时，向 Yakit 上报结构化的操作信息

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| length | `int` | 写入长度 |
| mode | `string` | 写入模式（append 追加 \| cover 覆盖） |
| content | `[]byte` | 写入的内容 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*YakitFileAction` | 文件操作记录对象 |

**示例**

``````````````yak
action = yakit.fileWriteAction(5, "cover", []byte("hello"))
println(action.Action)   // OUT: WRITE
assert action.Action == "WRITE", "fileWriteAction should build a WRITE action"
``````````````

---

## 可变参数函数详情

### AIAgentSession {#aiagentsession}

```go
AIAgentSession(sessionID string, source ...string)
```

向 Yakit 输出并注册一个 AI Agent 会话 ID（导出名为 yakit.AIAgentSession）

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| sessionID | `string` | 会话 ID |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| source | `...string` | 可选的会话来源标识 |

**示例**

``````````````yak
yakit.AIAgentSession("my-session-id")
``````````````

---

### AIOutput {#aioutput}

```go
AIOutput(tmp string, items ...any)
```

向 Yakit 输出可被 AI 工具 stdout 过滤的 AI 专用输出（导出名为 yakit.AIOutput）
AIOutput writes AI-focused output that can be filtered for AI tool stdout.
aiLevel is an optional category for downstream consumers.

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| tmp | `string` | 输出格式字符串 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| items | `...any` | 格式化参数 |

**示例**

``````````````yak
yakit.AIOutput("analysis result: %s", "ok")
``````````````

---

### Debug {#debug}

```go
Debug(tmp string, items ...any)
```

向 Yakit 输出一条 debug 级别日志（导出名为 yakit.Debug）

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| tmp | `string` | 日志格式字符串 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| items | `...any` | 格式化参数 |

**示例**

``````````````yak
yakit.Debug("debug value: %v", 123)
``````````````

---

### Error {#error}

```go
Error(tmp string, items ...any)
```

向 Yakit 输出一条 error 级别日志（导出名为 yakit.Error）

用于输出错误信息，在 Yakit 中以错误样式（红色）展示。用法与 yakit.Info 一致，支持格式化。
常与 try-catch 或带错误返回的调用配合，把失败原因清晰反馈给使用者。

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| tmp | `string` | 日志内容或 printf 风格的格式字符串 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| items | `...any` | 与格式字符串对应的格式化参数（可变参数） |

**示例**

``````````````yak
// 捕获异常并把错误信息上报到 Yakit
try {
    rsp, req = poc.Get("http://127.0.0.1:1/", poc.timeout(1))~   // 故意失败
    yakit.Info("status: %v", rsp.RawPacket)
} catch err {
    yakit.Error("request failed: %v", err)
}
``````````````

---

### File {#file}

```go
File(fileName string, option ...any)
```

向 Yakit 输出一个文件信息卡片或文件操作记录（导出名为 yakit.File）

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| fileName | `string` | 文件路径 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| option | `...any` | 可选项，可为标题/描述字符串或 YakitFileAction 文件操作 |

**示例**

``````````````yak
yakit.File("/tmp/result.txt", "Scan Result", "the result of this scan")
``````````````

---

### GenerateYakitMITMHooksParams {#generateyakitmitmhooksparams}

```go
GenerateYakitMITMHooksParams(method string, url string, opts ...http_struct.HttpOption) ([]any, error)
```

generateYakitMITMHookParams 发起一次 HTTP 请求并生成可传给 MITM hook 的参数列表（导出名为 yakit.GenerateYakitMITMHooksParams）

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| method | `string` | HTTP 方法 |
| url | `string` | 请求 URL |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...http_struct.HttpOption` | HTTP 请求可选项 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]any` | 参数列表（isHttps, url, reqRaw, rspRaw, body） |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 需要联网（示意性示例）
params = yakit.GenerateYakitMITMHooksParams("GET", "http://example.com")~
dump(params)
``````````````

---

### Info {#info}

```go
Info(tmp string, items ...any)
```

向 Yakit 输出一条 info 级别日志（导出名为 yakit.Info）

这是插件向 Yakit 界面输出运行信息的主力函数：在 Yakit 中以 info 级别日志展示，命令行运行时打印到控制台。
支持 printf 风格的格式化（%s/%d/%v 等），第一个参数为格式字符串、其余为对应参数。
配套的还有 yakit.Warn（警告）、yakit.Error（错误）、yakit.Success（成功）、yakit.Debug（调试），
它们仅日志级别/颜色不同，用法一致。按照规范，日志内容统一用英文输出。

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| tmp | `string` | 日志内容或 printf 风格的格式字符串 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| items | `...any` | 与格式字符串对应的格式化参数（可变参数） |

**示例：基础与格式化输出**

``````````````yak
// 第一个参数为格式字符串，其余为对应参数
yakit.Info("scanner started")
target = "example.com"; port = 443
yakit.Info("scanning target: %s:%d", target, port)
``````````````

**示例：边遍历资产边输出进度**

``````````````yak
// 插件里最常见的写法：一边查询一边汇报
total = 0
for u in db.QueryUrlsByKeyword("example.com") {
    total++
    yakit.Info("found url: %s", u)
}
yakit.Info("collected %d urls in total", total)
``````````````

---

### MockHTTPFlowSlowSQL {#mockhttpflowslowsql}

```go
MockHTTPFlowSlowSQL(seconds ...float64)
```

模拟 HTTP 流量入库时的慢 SQL（导出名为 yakit.MockHTTPFlowSlowSQL）

用于测试/演示慢 SQL 监控：会同时触发慢插入与慢查询，持续时间确保超过慢 SQL 阈值

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| seconds | `...float64` | 可选的持续秒数，默认 3 秒；小于 2 秒会被提升到 2.1 秒以确保越过阈值 |

**示例**

``````````````yak
// 触发一次约 3 秒的慢 SQL 模拟（用于验证慢 SQL 监控，示意性示例）
yakit.MockHTTPFlowSlowSQL(3)
``````````````

---

### MockMITMSlowRuleHook {#mockmitmslowrulehook}

```go
MockMITMSlowRuleHook(seconds ...float64)
```

模拟 MITM 规则 Hook 的慢执行（导出名为 yakit.MockMITMSlowRuleHook）

用于测试/演示慢 Hook 监控：会一次性触发 hook_color/hook_request/hook_response 三类规则

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| seconds | `...float64` | 可选参数，第一个为持续秒数（默认 1 秒，小于 0.3 秒会提升到 0.4 秒以越过 300ms 阈值），第二个为规则数量（默认 10） |

**示例**

``````````````yak
// 触发一次约 1 秒、每类 10 条规则的慢 Hook 模拟（用于验证慢 Hook 监控，示意性示例）
yakit.MockMITMSlowRuleHook(1, 10)
``````````````

---

### NewBarGraph {#newbargraph}

```go
NewBarGraph(graphName ...string) *YakitGraph
```

创建一个柱状图对象（导出名为 yakit.NewBarGraph）

柱状图适合“分类对比”：比较各类别的数量大小。用 graph.Add(类别, 数量) 添加，再用 yakit.Output(graph) 渲染。

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| graphName | `...string` | 可选的图表名称 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*YakitGraph` | 图表对象，支持 .Add(key, value) 添加数据点 |

**示例**

``````````````yak
// 联动：统计一批端口结果里各端口出现的次数，用柱状图对比
scanned = ["80", "443", "80", "22", "80", "443"]
counter = {}
for port in scanned {
    if port in counter { counter[port] = counter[port] + 1 } else { counter[port] = 1 }
}
graph = yakit.NewBarGraph("ports distribution")
for p, c in counter { graph.Add(p, c) }
yakit.Output(graph)
``````````````

---

### NewLineGraph {#newlinegraph}

```go
NewLineGraph(graphName ...string) *YakitGraph
```

创建一个折线图对象（导出名为 yakit.NewLineGraph）

折线图适合展示“随时间/序列变化的趋势”。用 graph.Add(键, 值) 逐点添加数据，再用 yakit.Output(graph) 渲染。

四种图表构造器（NewLineGraph/NewBarGraph/NewPieGraph/NewWordCloud）用法完全一致，仅展示形态不同。

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| graphName | `...string` | 可选的图表名称（不传则使用默认名） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*YakitGraph` | 图表对象，支持 .Add(key, value) 添加数据点 |

**示例**

``````````````yak
// 展示一天中各时段发现的开放端口数量趋势
graph = yakit.NewLineGraph("open ports by hour")
graph.Add("00:00", 120)
graph.Add("06:00", 98)
graph.Add("12:00", 203)
graph.Add("18:00", 156)
yakit.Output(graph)
``````````````

---

### NewPieGraph {#newpiegraph}

```go
NewPieGraph(graphName ...string) *YakitGraph
```

创建一个饼图对象（导出名为 yakit.NewPieGraph）

饼图适合展示“占比/构成”：各部分在总量中所占比例。用 graph.Add(类别, 数量) 添加，再用 yakit.Output(graph) 渲染。

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| graphName | `...string` | 可选的图表名称 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*YakitGraph` | 图表对象，支持 .Add(key, value) 添加数据点 |

**示例**

``````````````yak
// 展示漏洞按危险等级的构成占比
graph = yakit.NewPieGraph("vuln severity")
graph.Add("critical", 2)
graph.Add("high", 5)
graph.Add("medium", 12)
graph.Add("low", 30)
yakit.Output(graph)
``````````````

---

### NewTable {#newtable}

```go
NewTable(head ...string) *YakitTable
```

创建一个 Yakit 静态表格对象（导出名为 yakit.NewTable）

用于一次性汇总展示结构化数据：先用表头创建表格，再用 table.Append(列1, 列2, ...) 逐行追加，

最后用 yakit.Output(table) 推送到 Yakit 界面渲染。适合“收集完再统一展示”的场景。

若需要在扫描过程中实时往同一张表里增量加行，用 yakit.EnableTable + yakit.TableData。

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| head | `...string` | 表头列名（可变参数），Append 的列数应与表头一致 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*YakitTable` | 表格对象，支持 .Append(...) 追加行、.SetHead(...) 重设表头 |

**示例**

``````````````yak
// 把一批端口扫描结果汇总成一张表并展示（建表->逐行追加->输出 联动）
table = yakit.NewTable("Host", "Port", "Service")
rows = [["10.0.0.1", "80", "http"], ["10.0.0.1", "443", "https"], ["10.0.0.2", "22", "ssh"]]
for r in rows {
    table.Append(r[0], r[1], r[2])
}
yakit.Output(table)
yakit.Info("rendered %d rows", len(rows))
``````````````

---

### NewWordCloud {#newwordcloud}

```go
NewWordCloud(graphName ...string) *YakitGraph
```

创建一个词云图对象（导出名为 yakit.NewWordCloud）

词云适合展示“关键词频率”：词的大小正比于其权重值。用 graph.Add(词, 权重) 添加，再用 yakit.Output(graph) 渲染。

常用于展示漏洞类型分布、指纹关键词、高频参数名等。

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| graphName | `...string` | 可选的图表名称 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*YakitGraph` | 图表对象，支持 .Add(key, value) 添加数据点 |

**示例**

``````````````yak
// 展示漏洞类型关键词云，词越大代表出现次数越多
graph = yakit.NewWordCloud("vuln keywords")
graph.Add("SQL Injection", 35)
graph.Add("XSS", 28)
graph.Add("Weak Password", 30)
graph.Add("SSRF", 15)
yakit.Output(graph)
``````````````

---

### SaveDomain {#savedomain}

```go
SaveDomain(domain string, ip ...string) error
```

保存域名及其关联 IP 到项目数据库（导出名为 db.SaveDomain）

把（子）域名及其解析到的 IP 作为域名资产入库，常用于子域名爆破/收集（subdomain 库）之后的资产沉淀。

一个域名可关联多个 IP（多个 A 记录 / CDN 节点）。入库后可用 db.QueryDomainsByDomainKeyword /

db.QueryDomainsByNetwork / db.QueryDomainsByTitle 检索。

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| domain | `string` | 域名（如 &#34;api.example.com&#34;） |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| ip | `...string` | 零个或多个关联 IP（可变参数） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息（项目数据库不可用时返回） |

**示例**

``````````````yak
// 保存若干子域名资产（可带解析 IP），再按关键字检索回来
base = "doc-demo-asset.example.com"
db.SaveDomain("api."+base, "93.184.216.34")~
db.SaveDomain("cdn."+base, "93.184.216.34", "93.184.216.35")~   // 多个 IP
db.SaveDomain("admin."+base)~                                     // 仅域名，无 IP

found = 0
ch = db.QueryDomainsByDomainKeyword(base)~
for d in ch { found++ }
println(found >= 3)   // OUT: true
assert found >= 3, "the three saved subdomains should be retrievable by keyword"
``````````````

---

### SavePortFromResult {#saveportfromresult}

```go
SavePortFromResult(t any, RuntimeId ...string) error
```

savePortFromObj 从扫描结果对象提取端口信息并保存为端口资产（导出名为 db.SavePortFromResult）

这是端口/服务扫描结果落库的标准接口，直接接收各扫描器返回的结果对象，自动转换为统一的端口资产入库。

支持的对象类型：servicescan 的指纹结果(fp.MatchResult)、synscan 结果(synscan.SynScanResult)、

空间引擎结果、以及已构造的 schema.Port。可选传入 RuntimeId 把这批资产归属到某次扫描任务，

便于之后用 db.QueryPortsByRuntimeId 精确取回。入库后可用 db.QueryHostPortByNetwork 等检索。

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| t | `any` | 扫描结果对象（servicescan/synscan/空间引擎结果或 schema.Port） |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| RuntimeId | `...string` | 可选的运行时 ID，用于把资产关联到具体扫描任务 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息（类型不支持或保存失败时返回） |

**示例**

``````````````yak
// 典型联动：servicescan 探测 -> SavePortFromResult 落库 -> 按网段查询回来
// 端口扫描依赖网络与目标，这里对目标存活做容错处理
runtimeId = "doc-demo-portscan"
target = "scanme.nmap.org"
for result in servicescan.Scan(target, "80,443")~ {
    db.SavePortFromResult(result, runtimeId)~   // 把每个开放端口结果落库
    yakit.Info("saved port asset: %v:%v", result.Target, result.Port)
}

// 按 runtimeId 取回本次扫描保存的端口资产
for port in db.QueryPortsByRuntimeId(runtimeId)~ {
    println(port.Host, port.Port, port.ServiceType)
}
``````````````

---

### StatusCard {#statuscard}

```go
StatusCard(id string, data any, tags ...string)
```

在 Yakit UI 中输出/更新一个状态卡片（导出名为 yakit.StatusCard）

状态卡片是 Yakit 任务面板上方的“关键指标”小卡片，用于实时展示统计数字（已扫主机数、开放端口数、
发现漏洞数、成功/失败计数等）。核心特性：相同 id 的卡片会被“原地更新”而非新增，因此在循环里用同一个 id
反复调用即可实现指标的实时刷新。可选的 tags 用于把多张卡片分组归类展示。

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| id | `string` | 卡片唯一标识（相同 id 更新同一张卡片，是实现实时刷新的关键） |
| data | `any` | 卡片展示的数据（任意类型，会转为字符串展示） |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| tags | `...string` | 可选的分组标签（可变参数） |

**示例：输出一张基础状态卡片**

``````````````yak
// 输出一张关键指标卡片
yakit.StatusCard("Open Ports", 12, "stats")
``````````````

**示例：循环中实时刷新（相同 id 原地更新）**

``````````````yak
// 在扫描循环中实时更新统计卡片，并用 tags 把卡片分组
total = 8; openPorts = 0; vulns = 0
for i = 0; i < total; i++ {
    openPorts += randn(0, 3)
    if randn(1, 100) > 80 { vulns++ }
    yakit.StatusCard("Scanned", sprintf("%d/%d", i + 1, total), "progress")
    yakit.StatusCard("Open Ports", openPorts, "stats")     // 相同 id 原地刷新
    yakit.StatusCard("Vulns",      vulns,     "stats")
    sleep(0.02)
}
``````````````

---

### Stream {#stream}

```go
Stream(streamType string, streamId string, stream io.Reader, extra ...any)
```

向 Yakit 持续输出一个流（如实时日志、命令输出，导出名为 yakit.Stream）

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| streamType | `string` | 流类型标识 |
| streamId | `string` | 流 ID |
| stream | `io.Reader` | 数据源 reader |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| extra | `...any` | 可选的额外信息 |

**示例**

``````````````yak
// reader 为任意 io.Reader（示意性示例）
yakit.Stream("exec", "task-1", reader)
``````````````

---

### UpdateYakitStoreFromGit {#updateyakitstorefromgit}

```go
UpdateYakitStoreFromGit(ctx context.Context, ghUrl string, proxy ...string) error
```

LoadYakitThirdpartySourceScripts 从第三方 Git 源拉取并导入 Yakit 插件（导出名为 yakit.UpdateYakitStoreFromGit）

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| ctx | `context.Context` | 上下文，用于控制取消与超时 |
| ghUrl | `string` | 第三方 Git 仓库地址 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| proxy | `...string` | 可选的代理地址 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
// 需要联网及本地数据库（示意性示例）
ctx = context.Background()
yakit.UpdateYakitStoreFromGit(ctx, "https://github.com/example/yakit-store")~
``````````````

---

### Warn {#warn}

```go
Warn(tmp string, items ...any)
```

向 Yakit 输出一条 warn 级别日志（导出名为 yakit.Warn）

用于输出“需要注意但不致命”的信息，在 Yakit 中以警告样式展示。用法与 yakit.Info 完全一致，支持格式化。
典型场景：某个目标不可达而跳过、命中可疑特征、使用了不推荐的配置等。

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| tmp | `string` | 日志内容或 printf 风格的格式字符串 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| items | `...any` | 与格式字符串对应的格式化参数（可变参数） |

**示例**

``````````````yak
// 对单个目标做容错时，用 Warn 记录被跳过的原因而不中断整体流程
for host in ["10.0.0.1", "10.0.0.2"] {
    if host == "10.0.0.2" {
        yakit.Warn("target %s unreachable, skipped", host)
        continue
    }
    yakit.Info("processing %s", host)
}
``````````````

---

### fileFindAction {#filefindaction}

```go
fileFindAction(findMode string, findCondition string, findContent ...string) *YakitFileAction
```

构造一个「查找文件」操作记录（导出名为 yakit.fileFindAction）

用于在 Agent/插件执行文件查找时，向 Yakit 上报结构化的操作信息

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| findMode | `string` | 查找模式（name 按名 \| content 按内容 \| all 全部） |
| findCondition | `string` | 查找条件 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| findContent | `...string` | 可选的查找内容 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*YakitFileAction` | 文件操作记录对象 |

**示例**

``````````````yak
action = yakit.fileFindAction("name", "*.go")
println(action.Action)   // OUT: FIND
assert action.Action == "FIND", "fileFindAction should build a FIND action"
``````````````

---

