# db

|实例名|实例描述|
|:------|:--------|
YAKIT_PLUGIN_TYPE_CODEC|(string) &#34;codec&#34;|
YAKIT_PLUGIN_TYPE_MITM|(string) &#34;mitm&#34;|
YAKIT_PLUGIN_TYPE_NUCLEI|(string) &#34;nuclei&#34;|
YAKIT_PLUGIN_TYPE_PACKET_HACK|(string) &#34;packet-hack&#34;|
YAKIT_PLUGIN_TYPE_PORTSCAN|(string) &#34;port-scan&#34;|
YAKIT_PLUGIN_TYPE_YAK|(string) &#34;yak&#34;|

|函数名|函数描述/介绍|
|:------|:--------|
| [db.CreateTemporaryYakScript](#createtemporaryyakscript) |CreateTemporaryYakScript 创建一个临时插件并保存到数据库，返回插件名称（导出名为 db.CreateTemporaryYakScript） 临时插件常用于测试，使用后可通过 db.DeleteYakScriptByName 清理 参数: - t: 插件类型，如 &#34;yak&#34;、&#34;...|
| [db.DelKey](#delkey) ||
| [db.DeletePayloadByGroup](#deletepayloadbygroup) |deletePayloadByGroup 删除指定字典组及其全部 payload（导出名为 db.DeletePayloadByGroup） 参数: - group: 字典组名 返回值: - 错误信息|
| [db.DeleteYakScriptByName](#deleteyakscriptbyname) |_deleteYakScriptByName 按名称删除本地插件（核心插件除外，导出名为 db.DeleteYakScriptByName） 参数: - i: 插件名称 返回值: - 错误信息|
| [db.DeleteYakitMenuItemAll](#deleteyakitmenuitemall) |deleteYakitMenuItemAll 删除全部 Yakit 菜单项（导出名为 db.DeleteYakitMenuItemAll） 参数: - 无 返回值: - 错误信息|
| [db.DownloadGeoIP](#downloadgeoip) ||
| [db.GetAllPayloadGroupsName](#getallpayloadgroupsname) |getAllPayloadGroupsName 获取全部字典组名称（导出名为 db.GetAllPayloadGroupsName） 参数: - 无 返回值: - 全部字典组名列表|
| [db.GetKey](#getkey) ||
| [db.GetProjectKey](#getprojectkey) ||
| [db.GetYakitPluginByID](#getyakitpluginbyid) |getYakitPluginByID 按数据库 ID 查询本地插件（导出名为 db.GetYakitPluginByID） 参数: - i: 插件 ID 返回值: - 插件对象 - 错误信息|
| [db.GetYakitPluginByName](#getyakitpluginbyname) |queryYakitPluginByName 按名称查询本地插件（导出名为 db.GetYakitPluginByName） 参数: - name: 插件名称 返回值: - 插件对象 - 错误信息|
| [db.GetYakitPluginByUUID](#getyakitpluginbyuuid) |getYakitPluginByUUID 按 UUID 查询本地插件（导出名为 db.GetYakitPluginByUUID） 参数: - i: 插件 UUID 返回值: - 插件对象 - 错误信息|
| [db.NewAliveHost](#newalivehost) |YakitNewAliveHost 创建并保存一条存活主机记录并输出（导出名为 db.NewAliveHost） 参数: - target: 主机目标（IP 或域名） - opts: 存活主机可选项，如运行时 ID 等 返回值: - 无|
| [db.OpenDatabase](#opendatabase) |OpenDatabase 通过指定方言与连接源打开一个数据库连接（导出名为 db.OpenDatabase） 参数: - dialect: 数据库方言，如 &#34;sqlite3&#34;、&#34;mysql&#34; - source: 数据源连接串 返回值: - 数据库连接对象 - 错误信息|
| [db.OpenSqliteDatabase](#opensqlitedatabase) |OpenSqliteDatabase 打开（不存在时创建）一个 SQLite 数据库（导出名为 db.OpenSqliteDatabase） 参数: - path: SQLite 数据库文件路径 返回值: - 数据库连接对象 - 错误信息|
| [db.OpenTempSqliteDatabase](#opentempsqlitedatabase) |OpenTempSqliteDatabase 在临时目录中创建并打开一个临时 SQLite 数据库（导出名为 db.OpenTempSqliteDatabase） 参数: - 无 返回值: - 数据库连接对象 - 错误信息|
| [db.QueryAliveHost](#queryalivehost) ||
| [db.QueryDomainsByDomainKeyword](#querydomainsbydomainkeyword) |queryDomainAssetByDomainKeyword 按域名关键词模糊查询域名资产（导出名为 db.QueryDomainsByDomainKeyword） 参数: - keyword: 域名关键词 返回值: - 域名资产的 channel，可使用 for-range 遍历 - 错误信息|
| [db.QueryDomainsByNetwork](#querydomainsbynetwork) |queryDomainAssetByNetwork 按网段查询域名资产（导出名为 db.QueryDomainsByNetwork） 参数: - network: 网段表达式，如 &#34;192.168.1.0/24&#34; 返回值: - 域名资产的 channel，可使用 for-range 遍历 - 错误信...|
| [db.QueryDomainsByTitle](#querydomainsbytitle) |queryDomainAssetByHTMLTitle 按 HTML 标题模糊查询域名资产（导出名为 db.QueryDomainsByTitle） 参数: - title: HTML 标题关键词 返回值: - 域名资产的 channel，可使用 for-range 遍历 - 错误信息|
| [db.QueryHTTPFlowByID](#queryhttpflowbyid) |queryHTTPFlowByID 按 ID 查询单条 HTTP 流量（导出名为 db.QueryHTTPFlowByID） 参数: - id: HTTPFlow ID 返回值: - HTTPFlow 对象 - 错误信息|
| [db.QueryHTTPFlowsAll](#queryhttpflowsall) ||
| [db.QueryHTTPFlowsByID](#queryhttpflowsbyid) |queryHTTPFlowsByID 按一个或多个 ID 查询 HTTP 流量（导出名为 db.QueryHTTPFlowsByID） 参数: - id: 一个或多个 HTTPFlow ID 返回值: - HTTPFlow 对象的 channel，可使用 for-range 遍历|
| [db.QueryHTTPFlowsByKeyword](#queryhttpflowsbykeyword) |queryHTTPFlowByKeyword 按关键词在 URL/请求/响应中模糊查询 HTTP 流量（导出名为 db.QueryHTTPFlowsByKeyword） 参数: - k: 关键词 返回值: - HTTPFlow 对象的 channel，可使用 for-range 遍历|
| [db.QueryHostPortByKeyword](#queryhostportbykeyword) |queryHostAssetByNetwork 按网段查询主机资产（导出名为 db.QueryHostPortByKeyword 等相关接口的底层实现之一） 参数: - network: 网段表达式，如 &#34;192.168.1.0/24&#34; 返回值: - 主机资产的 channel，可使用 for-ra...|
| [db.QueryHostPortByNetwork](#queryhostportbynetwork) |queryHostPortByNetwork 按网段查询开放端口并以 host:port 字符串返回（导出名为 db.QueryHostPortByNetwork） 参数: - network: 网段表达式，如 &#34;192.168.1.0/24&#34; 返回值: - host:port 字符串的 chann...|
| [db.QueryHostsByDomain](#queryhostsbydomain) |queryHostAssetByDomainKeyword 按关联域名关键词查询主机资产（导出名为 db.QueryHostsByDomain） 参数: - keyword: 域名关键词 返回值: - 主机资产的 channel，可使用 for-range 遍历 - 错误信息|
| [db.QueryIPCity](#queryipcity) ||
| [db.QueryIPForIPS](#queryipforips) ||
| [db.QueryPayloadGroups](#querypayloadgroups) |getPayloadGroups 查询匹配指定名称的字典组列表（导出名为 db.QueryPayloadGroups） 参数: - group: 字典组名（可用于过滤） 返回值: - 字典组名列表|
| [db.QueryPortsByRuntimeId](#queryportsbyruntimeid) |queryPortsByRuntimeId 按运行时 ID 查询端口资产（导出名为 db.QueryPortsByRuntimeId） 参数: - runtimeID: 运行时 ID 返回值: - 端口资产的 channel，可使用 for-range 遍历 - 错误信息|
| [db.QueryPortsByTaskName](#queryportsbytaskname) |queryPortsByTaskName 按任务名称查询端口资产（导出名为 db.QueryPortsByTaskName） 参数: - taskName: 任务名称 返回值: - 端口资产的 channel，可使用 for-range 遍历 - 错误信息|
| [db.QueryPortsByUpdatedAt](#queryportsbyupdatedat) |queryPortsByUpdatedAt 查询指定时间戳之后更新的开放端口（导出名为 db.QueryPortsByUpdatedAt） 参数: - timestamp: Unix 时间戳，仅返回此后更新的端口 返回值: - 端口资产的 channel，可使用 for-range 遍历 - 错误信...|
| [db.QueryUrlsAll](#queryurlsall) |queryAllUrls 查询全部 URL 资产（导出名为 db.QueryUrlsAll） 参数: - 无 返回值: - URL 字符串的 channel，可使用 for-range 遍历|
| [db.QueryUrlsByKeyword](#queryurlsbykeyword) |queryUrlsByKeyword 按关键词模糊查询 URL 资产（导出名为 db.QueryUrlsByKeyword） 参数: - k: URL 关键词 返回值: - URL 字符串的 channel，可使用 for-range 遍历|
| [db.SaveAIYakScript](#saveaiyakscript) ||
| [db.SaveDomain](#savedomain) |saveDomain 保存域名及其关联 IP 到项目数据库（导出名为 db.SaveDomain） 参数: - domain: 域名 - ip: 零个或多个关联 IP 返回值: - 错误信息|
| [db.SaveHTTPFlowFromNative](#savehttpflowfromnative) |saveCrawler 将一次 HTTP 请求/响应作为爬虫流量保存到项目数据库（导出名为 db.SaveHTTPFlowFromNative） 参数: - url: 请求 URL - req: HTTP 请求对象 - rsp: HTTP 响应对象 返回值: - 错误信息|
| [db.SaveHTTPFlowFromNativeWithType](#savehttpflowfromnativewithtype) |saveHTTPFlowWithType 将一次 HTTP 请求/响应按指定来源类型保存到项目数据库（导出名为 db.SaveHTTPFlowFromNativeWithType） 参数: - url: 请求 URL - req: HTTP 请求对象 - rsp: HTTP 响应对象 - typeS...|
| [db.SaveHTTPFlowFromRaw](#savehttpflowfromraw) |saveHTTPFlowFromRaw 根据原始请求/响应保存一条 HTTP 流量记录到项目数据库（导出名为 db.SaveHTTPFlowFromRaw） 参数: - url: 请求 URL - req: 原始 HTTP 请求字节 - rsp: 原始 HTTP 响应字节 返回值: - 错误信息|
| [db.SaveHTTPFlowFromRawWithOption](#savehttpflowfromrawwithoption) |saveHTTPFlowFromRawWithOption 根据原始请求/响应及自定义选项保存一条 HTTP 流量记录（导出名为 db.SaveHTTPFlowFromRawWithOption） 参数: - url: 请求 URL - req: 原始 HTTP 请求字节 - rsp: 原始 HTT...|
| [db.SaveHTTPFlowFromRawWithType](#savehttpflowfromrawwithtype) |saveHTTPFlowFromRawWithType 根据原始请求/响应及来源类型保存一条 HTTP 流量记录（导出名为 db.SaveHTTPFlowFromRawWithType） 参数: - url: 请求 URL - req: 原始 HTTP 请求字节 - rsp: 原始 HTTP 响应字...|
| [db.SaveHTTPFlowInstance](#savehttpflowinstance) |saveHTTPFlowInstance 直接保存一个已构造好的 HTTPFlow 对象到项目数据库（导出名为 db.SaveHTTPFlowInstance） 参数: - flow: HTTPFlow 对象 返回值: - 错误信息|
| [db.SavePayload](#savepayload) |savePayloads 将一组 payload 保存到指定字典组（导出名为 db.SavePayload） 参数: - group: 字典组名 - payloadRaw: payload 内容（字符串或字符串列表） 返回值: - 错误信息|
| [db.SavePayloadByFile](#savepayloadbyfile) |savePayloadByFile 从文件读取内容并保存到指定字典组（导出名为 db.SavePayloadByFile） 参数: - group: 字典组名 - fileName: 文件路径 返回值: - 错误信息|
| [db.SavePortFromResult](#saveportfromresult) |savePortFromObj 从扫描结果对象提取端口信息并保存到项目数据库（导出名为 db.SavePortFromResult） 支持的对象类型包括 fp.MatchResult、synscan.SynScanResult、空间引擎结果以及 schema.Port 参数: - t: 扫描结果对象...|
| [db.SaveYakitMenuItemByBatchExecuteConfig](#saveyakitmenuitembybatchexecuteconfig) |saveYakitMenuItemByBatchExecuteConfig 根据批量执行配置创建并保存 Yakit 菜单项（导出名为 db.SaveYakitMenuItemByBatchExecuteConfig） 参数: - raw: 批量执行配置（JSON 或 map） 返回值: - 错误信息|
| [db.SaveYakitPlugin](#saveyakitplugin) |saveYakitPlugin 将插件内容保存到本地插件数据库（导出名为 db.SaveYakitPlugin） 参数: - scriptName: 插件名称（不可与已有插件重名） - typeStr: 插件类型，如 db.YAKIT_PLUGIN_TYPE_YAK - content: 插件源码内...|
| [db.ScanResult](#scanresult) |ScanResult 执行原始 SQL 查询并将结果按行转换为 map 列表（导出名为 db.ScanResult） 参数: - db: 数据库连接对象 - query: 原始 SQL 查询语句 - args: SQL 占位符参数 返回值: - 查询结果（每行一个 map） - 错误信息|
| [db.SetKey](#setkey) ||
| [db.SetKeyWithTTL](#setkeywithttl) ||
| [db.SetProjectKey](#setprojectkey) ||
| [db.YieldAllAIForges](#yieldallaiforges) ||
| [db.YieldAllAITools](#yieldallaitools) ||
| [db.YieldAllMCPServers](#yieldallmcpservers) ||
| [db.YieldPayload](#yieldpayload) |YieldPayload 以 channel 形式遍历一个或多个字典组中的 payload 内容（导出名为 db.YieldPayload） 参数: - raw: 字典组名 - extra: 额外的字典组名 返回值: - payload 内容的 channel，可使用 for-range 遍历|
| [db.YieldYakScriptAll](#yieldyakscriptall) |_yieldYakScript 以 channel 形式遍历本地数据库中的全部插件（导出名为 db.YieldYakScriptAll） 参数: - 无 返回值: - 插件对象的 channel，可使用 for-range 遍历|
| [db.saveHTTPFlowWithTags](#savehttpflowwithtags) ||


## 函数定义
### CreateTemporaryYakScript

#### 详细描述
CreateTemporaryYakScript 创建一个临时插件并保存到数据库，返回插件名称（导出名为 db.CreateTemporaryYakScript）

临时插件常用于测试，使用后可通过 db.DeleteYakScriptByName 清理

参数:

  - t: 插件类型，如 &#34;yak&#34;、&#34;mitm&#34;

  - code: 插件源码

  - suffix: 可选的名称后缀



返回值:

  - 生成的临时插件名称

  - 错误信息




Example:

``````````````yak
// 依赖本地插件数据库（示意性示例）
name = db.CreateTemporaryYakScript("yak", "yakit.Info(\"hello\")")~
defer db.DeleteYakScriptByName(name)
println(name)
``````````````


#### 定义

`CreateTemporaryYakScript(t string, code string, suffix ...string) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| t | `string` | 插件类型，如 &#34;yak&#34;、&#34;mitm&#34; |
| code | `string` | 插件源码 |
| suffix | `...string` | 可选的名称后缀 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 生成的临时插件名称 |
| r2 | `error` | 错误信息 |


### DelKey

#### 详细描述
暂无描述

#### 定义

`DelKey(k any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| k | `any` |  |


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


### DeleteYakScriptByName

#### 详细描述
_deleteYakScriptByName 按名称删除本地插件（核心插件除外，导出名为 db.DeleteYakScriptByName）

参数:

  - i: 插件名称



返回值:

  - 错误信息




Example:

``````````````yak
// 依赖本地插件数据库（示意性示例）
db.DeleteYakScriptByName("my-plugin")~
``````````````


#### 定义

`DeleteYakScriptByName(i string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` | 插件名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### DeleteYakitMenuItemAll

#### 详细描述
deleteYakitMenuItemAll 删除全部 Yakit 菜单项（导出名为 db.DeleteYakitMenuItemAll）

参数:

  - 无



返回值:

  - 错误信息




Example:

``````````````yak
// 依赖本地数据库（示意性示例）
db.DeleteYakitMenuItemAll()~
``````````````


#### 定义

`DeleteYakitMenuItemAll() error`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### DownloadGeoIP

#### 详细描述
暂无描述

#### 定义

`DownloadGeoIP() error`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |  |


### GetAllPayloadGroupsName

#### 详细描述
getAllPayloadGroupsName 获取全部字典组名称（导出名为 db.GetAllPayloadGroupsName）

参数:

  - 无



返回值:

  - 全部字典组名列表




Example:

``````````````yak
// 依赖本地数据库（示意性示例）
groups = db.GetAllPayloadGroupsName()
dump(groups)
``````````````


#### 定义

`GetAllPayloadGroupsName() []string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 全部字典组名列表 |


### GetKey

#### 详细描述
暂无描述

#### 定义

`GetKey(k any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| k | `any` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |  |


### GetProjectKey

#### 详细描述
暂无描述

#### 定义

`GetProjectKey(k any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| k | `any` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |  |


### GetYakitPluginByID

#### 详细描述
getYakitPluginByID 按数据库 ID 查询本地插件（导出名为 db.GetYakitPluginByID）

参数:

  - i: 插件 ID



返回值:

  - 插件对象

  - 错误信息




Example:

``````````````yak
// 依赖本地插件数据库（示意性示例）
script = db.GetYakitPluginByID(1)~
dump(script)
``````````````


#### 定义

`GetYakitPluginByID(i any) (*schema.YakScript, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 插件 ID |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*schema.YakScript` | 插件对象 |
| r2 | `error` | 错误信息 |


### GetYakitPluginByName

#### 详细描述
queryYakitPluginByName 按名称查询本地插件（导出名为 db.GetYakitPluginByName）

参数:

  - name: 插件名称



返回值:

  - 插件对象

  - 错误信息




Example:

``````````````yak
// 依赖本地插件数据库（示意性示例）
script = db.GetYakitPluginByName("my-plugin")~
dump(script)
``````````````


#### 定义

`GetYakitPluginByName(name string) (*schema.YakScript, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 插件名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*schema.YakScript` | 插件对象 |
| r2 | `error` | 错误信息 |


### GetYakitPluginByUUID

#### 详细描述
getYakitPluginByUUID 按 UUID 查询本地插件（导出名为 db.GetYakitPluginByUUID）

参数:

  - i: 插件 UUID



返回值:

  - 插件对象

  - 错误信息




Example:

``````````````yak
// 依赖本地插件数据库（示意性示例）
script = db.GetYakitPluginByUUID("xxxx-uuid")~
dump(script)
``````````````


#### 定义

`GetYakitPluginByUUID(i any) (*schema.YakScript, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 插件 UUID |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*schema.YakScript` | 插件对象 |
| r2 | `error` | 错误信息 |


### NewAliveHost

#### 详细描述
YakitNewAliveHost 创建并保存一条存活主机记录并输出（导出名为 db.NewAliveHost）

参数:

  - target: 主机目标（IP 或域名）

  - opts: 存活主机可选项，如运行时 ID 等



返回值:

  - 无




Example:

``````````````yak
// 依赖本地项目数据库（示意性示例）
db.NewAliveHost("127.0.0.1")
``````````````


#### 定义

`NewAliveHost(target string, opts ...yakit.AliveHostParamsOpt)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| target | `string` | 主机目标（IP 或域名） |
| opts | `...yakit.AliveHostParamsOpt` | 存活主机可选项，如运行时 ID 等 |


### OpenDatabase

#### 详细描述
OpenDatabase 通过指定方言与连接源打开一个数据库连接（导出名为 db.OpenDatabase）

参数:

  - dialect: 数据库方言，如 &#34;sqlite3&#34;、&#34;mysql&#34;

  - source: 数据源连接串



返回值:

  - 数据库连接对象

  - 错误信息




Example:

``````````````yak
conn = db.OpenDatabase("sqlite3", "/tmp/test.db")~
defer conn.Close()
``````````````


#### 定义

`OpenDatabase(dialect string, source string) (*gorm.DB, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| dialect | `string` | 数据库方言，如 &#34;sqlite3&#34;、&#34;mysql&#34; |
| source | `string` | 数据源连接串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*gorm.DB` | 数据库连接对象 |
| r2 | `error` | 错误信息 |


### OpenSqliteDatabase

#### 详细描述
OpenSqliteDatabase 打开（不存在时创建）一个 SQLite 数据库（导出名为 db.OpenSqliteDatabase）

参数:

  - path: SQLite 数据库文件路径



返回值:

  - 数据库连接对象

  - 错误信息




Example:

``````````````yak
conn = db.OpenSqliteDatabase("/tmp/test.db")~
defer conn.Close()
``````````````


#### 定义

`OpenSqliteDatabase(path string) (*gorm.DB, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` | SQLite 数据库文件路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*gorm.DB` | 数据库连接对象 |
| r2 | `error` | 错误信息 |


### OpenTempSqliteDatabase

#### 详细描述
OpenTempSqliteDatabase 在临时目录中创建并打开一个临时 SQLite 数据库（导出名为 db.OpenTempSqliteDatabase）

参数:

  - 无



返回值:

  - 数据库连接对象

  - 错误信息




Example:

``````````````yak
conn = db.OpenTempSqliteDatabase()~
defer conn.Close()
``````````````


#### 定义

`OpenTempSqliteDatabase() (*gorm.DB, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*gorm.DB` | 数据库连接对象 |
| r2 | `error` | 错误信息 |


### QueryAliveHost

#### 详细描述
暂无描述

#### 定义

`QueryAliveHost(runtimeId string) chan *schema.AliveHost`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| runtimeId | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *schema.AliveHost` |  |


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


### QueryHTTPFlowByID

#### 详细描述
queryHTTPFlowByID 按 ID 查询单条 HTTP 流量（导出名为 db.QueryHTTPFlowByID）

参数:

  - id: HTTPFlow ID



返回值:

  - HTTPFlow 对象

  - 错误信息




Example:

``````````````yak
// 依赖本地项目数据库（示意性示例）
flow = db.QueryHTTPFlowByID(1)~
println(flow.Url)
``````````````


#### 定义

`QueryHTTPFlowByID(id int64) (*schema.HTTPFlow, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| id | `int64` | HTTPFlow ID |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*schema.HTTPFlow` | HTTPFlow 对象 |
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


### QueryHTTPFlowsByID

#### 详细描述
queryHTTPFlowsByID 按一个或多个 ID 查询 HTTP 流量（导出名为 db.QueryHTTPFlowsByID）

参数:

  - id: 一个或多个 HTTPFlow ID



返回值:

  - HTTPFlow 对象的 channel，可使用 for-range 遍历




Example:

``````````````yak
// 依赖本地项目数据库（示意性示例）

	for flow := range db.QueryHTTPFlowsByID(1, 2, 3) {
	    println(flow.Url)
	}
``````````````


#### 定义

`QueryHTTPFlowsByID(id ...int64) chan *schema.HTTPFlow`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| id | `...int64` | 一个或多个 HTTPFlow ID |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *schema.HTTPFlow` | HTTPFlow 对象的 channel，可使用 for-range 遍历 |


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


### QueryHostPortByKeyword

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

`QueryHostPortByKeyword(network string) (chan *schema.Host, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| network | `string` | 网段表达式，如 &#34;192.168.1.0/24&#34; |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *schema.Host` | 主机资产的 channel，可使用 for-range 遍历 |
| r2 | `error` | 错误信息 |


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


### QueryIPCity

#### 详细描述
暂无描述

#### 定义

`QueryIPCity(ip string) (*geo.City, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ip | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*geo.City` |  |
| r2 | `error` |  |


### QueryIPForIPS

#### 详细描述
暂无描述

#### 定义

`QueryIPForIPS(ip string) (*geo.ISP, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ip | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*geo.ISP` |  |
| r2 | `error` |  |


### QueryPayloadGroups

#### 详细描述
getPayloadGroups 查询匹配指定名称的字典组列表（导出名为 db.QueryPayloadGroups）

参数:

  - group: 字典组名（可用于过滤）



返回值:

  - 字典组名列表




Example:

``````````````yak
// 依赖本地数据库（示意性示例）
groups = db.QueryPayloadGroups("")
dump(groups)
``````````````


#### 定义

`QueryPayloadGroups(group string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| group | `string` | 字典组名（可用于过滤） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 字典组名列表 |


### QueryPortsByRuntimeId

#### 详细描述
queryPortsByRuntimeId 按运行时 ID 查询端口资产（导出名为 db.QueryPortsByRuntimeId）

参数:

  - runtimeID: 运行时 ID



返回值:

  - 端口资产的 channel，可使用 for-range 遍历

  - 错误信息




Example:

``````````````yak
// 依赖本地项目数据库（示意性示例）
ch = db.QueryPortsByRuntimeId("xxxx-runtime-id")~
for port := range ch { println(port.Host, port.Port) }
``````````````


#### 定义

`QueryPortsByRuntimeId(runtimeID string) (chan *schema.Port, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| runtimeID | `string` | 运行时 ID |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *schema.Port` | 端口资产的 channel，可使用 for-range 遍历 |
| r2 | `error` | 错误信息 |


### QueryPortsByTaskName

#### 详细描述
queryPortsByTaskName 按任务名称查询端口资产（导出名为 db.QueryPortsByTaskName）

参数:

  - taskName: 任务名称



返回值:

  - 端口资产的 channel，可使用 for-range 遍历

  - 错误信息




Example:

``````````````yak
// 依赖本地项目数据库（示意性示例）
ch = db.QueryPortsByTaskName("scan-task-1")~
for port := range ch { println(port.Host, port.Port) }
``````````````


#### 定义

`QueryPortsByTaskName(taskName string) (chan *schema.Port, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| taskName | `string` | 任务名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *schema.Port` | 端口资产的 channel，可使用 for-range 遍历 |
| r2 | `error` | 错误信息 |


### QueryPortsByUpdatedAt

#### 详细描述
queryPortsByUpdatedAt 查询指定时间戳之后更新的开放端口（导出名为 db.QueryPortsByUpdatedAt）

参数:

  - timestamp: Unix 时间戳，仅返回此后更新的端口



返回值:

  - 端口资产的 channel，可使用 for-range 遍历

  - 错误信息




Example:

``````````````yak
// 依赖本地项目数据库（示意性示例）
ch = db.QueryPortsByUpdatedAt(time.Now().Unix() - 3600)~
for port := range ch { println(port.Host, port.Port) }
``````````````


#### 定义

`QueryPortsByUpdatedAt(timestamp int64) (chan *schema.Port, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| timestamp | `int64` | Unix 时间戳，仅返回此后更新的端口 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *schema.Port` | 端口资产的 channel，可使用 for-range 遍历 |
| r2 | `error` | 错误信息 |


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


### SaveAIYakScript

#### 详细描述
暂无描述

#### 定义

`SaveAIYakScript(tool *schema.AIYakTool) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tool | `*schema.AIYakTool` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |  |


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


### SaveHTTPFlowFromNative

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

`SaveHTTPFlowFromNative(url string, req *http.Request, rsp *http.Response) error`

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


### SaveHTTPFlowFromNativeWithType

#### 详细描述
saveHTTPFlowWithType 将一次 HTTP 请求/响应按指定来源类型保存到项目数据库（导出名为 db.SaveHTTPFlowFromNativeWithType）

参数:

  - url: 请求 URL

  - req: HTTP 请求对象

  - rsp: HTTP 响应对象

  - typeStr: 流量来源类型，空字符串默认为 &#34;mitm&#34;



返回值:

  - 错误信息




Example:

``````````````yak
// 依赖本地项目数据库与 http 请求对象（示意性示例）
db.SaveHTTPFlowFromNativeWithType("http://example.com", req, rsp, "mitm")~
``````````````


#### 定义

`SaveHTTPFlowFromNativeWithType(url string, req *http.Request, rsp *http.Response, typeStr string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` | 请求 URL |
| req | `*http.Request` | HTTP 请求对象 |
| rsp | `*http.Response` | HTTP 响应对象 |
| typeStr | `string` | 流量来源类型，空字符串默认为 &#34;mitm&#34; |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### SaveHTTPFlowFromRaw

#### 详细描述
saveHTTPFlowFromRaw 根据原始请求/响应保存一条 HTTP 流量记录到项目数据库（导出名为 db.SaveHTTPFlowFromRaw）

参数:

  - url: 请求 URL

  - req: 原始 HTTP 请求字节

  - rsp: 原始 HTTP 响应字节



返回值:

  - 错误信息




Example:

``````````````yak
// 依赖本地项目数据库（示意性示例）
db.SaveHTTPFlowFromRaw("http://example.com", []byte("GET / HTTP/1.1\r\nHost: example.com\r\n\r\n"), []byte("HTTP/1.1 200 OK\r\n\r\n"))~
``````````````


#### 定义

`SaveHTTPFlowFromRaw(url string, req []byte, rsp []byte) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` | 请求 URL |
| req | `[]byte` | 原始 HTTP 请求字节 |
| rsp | `[]byte` | 原始 HTTP 响应字节 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### SaveHTTPFlowFromRawWithOption

#### 详细描述
saveHTTPFlowFromRawWithOption 根据原始请求/响应及自定义选项保存一条 HTTP 流量记录（导出名为 db.SaveHTTPFlowFromRawWithOption）

参数:

  - url: 请求 URL

  - req: 原始 HTTP 请求字节

  - rsp: 原始 HTTP 响应字节

  - exOption: 额外的流量创建选项



返回值:

  - 错误信息




Example:

``````````````yak
// 依赖本地项目数据库（示意性示例）
db.SaveHTTPFlowFromRawWithOption("http://example.com", reqBytes, rspBytes)~
``````````````


#### 定义

`SaveHTTPFlowFromRawWithOption(url string, req []byte, rsp []byte, exOption ...yakit.CreateHTTPFlowOptions) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` | 请求 URL |
| req | `[]byte` | 原始 HTTP 请求字节 |
| rsp | `[]byte` | 原始 HTTP 响应字节 |
| exOption | `...yakit.CreateHTTPFlowOptions` | 额外的流量创建选项 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### SaveHTTPFlowFromRawWithType

#### 详细描述
saveHTTPFlowFromRawWithType 根据原始请求/响应及来源类型保存一条 HTTP 流量记录（导出名为 db.SaveHTTPFlowFromRawWithType）

参数:

  - url: 请求 URL

  - req: 原始 HTTP 请求字节

  - rsp: 原始 HTTP 响应字节

  - typeStr: 流量来源类型，如 &#34;basic-crawler&#34;



返回值:

  - 错误信息




Example:

``````````````yak
// 依赖本地项目数据库（示意性示例）
db.SaveHTTPFlowFromRawWithType("http://example.com", reqBytes, rspBytes, "mitm")~
``````````````


#### 定义

`SaveHTTPFlowFromRawWithType(url string, req []byte, rsp []byte, typeStr string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` | 请求 URL |
| req | `[]byte` | 原始 HTTP 请求字节 |
| rsp | `[]byte` | 原始 HTTP 响应字节 |
| typeStr | `string` | 流量来源类型，如 &#34;basic-crawler&#34; |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### SaveHTTPFlowInstance

#### 详细描述
saveHTTPFlowInstance 直接保存一个已构造好的 HTTPFlow 对象到项目数据库（导出名为 db.SaveHTTPFlowInstance）

参数:

  - flow: HTTPFlow 对象



返回值:

  - 错误信息




Example:

``````````````yak
// 依赖本地项目数据库与 flow 对象（示意性示例）
db.SaveHTTPFlowInstance(flow)~
``````````````


#### 定义

`SaveHTTPFlowInstance(flow *schema.HTTPFlow) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| flow | `*schema.HTTPFlow` | HTTPFlow 对象 |

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


### SaveYakitMenuItemByBatchExecuteConfig

#### 详细描述
saveYakitMenuItemByBatchExecuteConfig 根据批量执行配置创建并保存 Yakit 菜单项（导出名为 db.SaveYakitMenuItemByBatchExecuteConfig）

参数:

  - raw: 批量执行配置（JSON 或 map）



返回值:

  - 错误信息




Example:

``````````````yak
// 依赖本地数据库（示意性示例）
db.SaveYakitMenuItemByBatchExecuteConfig(config)~
``````````````


#### 定义

`SaveYakitMenuItemByBatchExecuteConfig(raw any) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `any` | 批量执行配置（JSON 或 map） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### SaveYakitPlugin

#### 详细描述
saveYakitPlugin 将插件内容保存到本地插件数据库（导出名为 db.SaveYakitPlugin）

参数:

  - scriptName: 插件名称（不可与已有插件重名）

  - typeStr: 插件类型，如 db.YAKIT_PLUGIN_TYPE_YAK

  - content: 插件源码内容



返回值:

  - 错误信息




Example:

``````````````yak
// 依赖本地插件数据库（示意性示例）
db.SaveYakitPlugin("my-plugin", db.YAKIT_PLUGIN_TYPE_YAK, "yakit.Info(\"hello\")")~
``````````````


#### 定义

`SaveYakitPlugin(scriptName string, typeStr string, content any) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| scriptName | `string` | 插件名称（不可与已有插件重名） |
| typeStr | `string` | 插件类型，如 db.YAKIT_PLUGIN_TYPE_YAK |
| content | `any` | 插件源码内容 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### ScanResult

#### 详细描述
ScanResult 执行原始 SQL 查询并将结果按行转换为 map 列表（导出名为 db.ScanResult）

参数:

  - db: 数据库连接对象

  - query: 原始 SQL 查询语句

  - args: SQL 占位符参数



返回值:

  - 查询结果（每行一个 map）

  - 错误信息




Example:

``````````````yak
conn = db.OpenTempSqliteDatabase()~
defer conn.Close()
rows = db.ScanResult(conn, "SELECT 1 AS n")~
dump(rows)
``````````````


#### 定义

`ScanResult(db *gorm.DB, query string, args ...any) ([]map[string]any, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| db | `*gorm.DB` | 数据库连接对象 |
| query | `string` | 原始 SQL 查询语句 |
| args | `...any` | SQL 占位符参数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]map[string]any` | 查询结果（每行一个 map） |
| r2 | `error` | 错误信息 |


### SetKey

#### 详细描述
暂无描述

#### 定义

`SetKey(k any, v any) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| k | `any` |  |
| v | `any` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |  |


### SetKeyWithTTL

#### 详细描述
暂无描述

#### 定义

`SetKeyWithTTL(k any, v any, ttl int) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| k | `any` |  |
| v | `any` |  |
| ttl | `int` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |  |


### SetProjectKey

#### 详细描述
暂无描述

#### 定义

`SetProjectKey(k any, v any) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| k | `any` |  |
| v | `any` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |  |


### YieldAllAIForges

#### 详细描述
暂无描述

#### 定义

`YieldAllAIForges() chan *schema.AIForge`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *schema.AIForge` |  |


### YieldAllAITools

#### 详细描述
暂无描述

#### 定义

`YieldAllAITools() chan *schema.AIYakTool`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *schema.AIYakTool` |  |


### YieldAllMCPServers

#### 详细描述
暂无描述

#### 定义

`YieldAllMCPServers() chan *schema.MCPServer`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *schema.MCPServer` |  |


### YieldPayload

#### 详细描述
YieldPayload 以 channel 形式遍历一个或多个字典组中的 payload 内容（导出名为 db.YieldPayload）

参数:

  - raw: 字典组名

  - extra: 额外的字典组名



返回值:

  - payload 内容的 channel，可使用 for-range 遍历




Example:

``````````````yak
// 依赖本地数据库（示意性示例）

	for payload := range db.YieldPayload("my-group") {
	    println(payload)
	}
``````````````


#### 定义

`YieldPayload(raw any, extra ...any) chan string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `any` | 字典组名 |
| extra | `...any` | 额外的字典组名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan string` | payload 内容的 channel，可使用 for-range 遍历 |


### YieldYakScriptAll

#### 详细描述
_yieldYakScript 以 channel 形式遍历本地数据库中的全部插件（导出名为 db.YieldYakScriptAll）

参数:

  - 无



返回值:

  - 插件对象的 channel，可使用 for-range 遍历




Example:

``````````````yak
// 依赖本地插件数据库（示意性示例）

	for script := range db.YieldYakScriptAll() {
	    println(script.ScriptName)
	}
``````````````


#### 定义

`YieldYakScriptAll() chan *schema.YakScript`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *schema.YakScript` | 插件对象的 channel，可使用 for-range 遍历 |


### saveHTTPFlowWithTags

#### 详细描述
暂无描述

#### 定义

`saveHTTPFlowWithTags(tags string) CreateHTTPFlowOptions`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tags | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CreateHTTPFlowOptions` |  |


