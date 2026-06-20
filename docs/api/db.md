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
| [db.DelKey](#delkey) |DelKey 从 Profile（全局配置）数据库删除一个键（导出名为 db.DelKey） 删除由 db.SetKey / db.SetKeyWithTTL 写入的键。删除后 db.GetKey 返回空字符串。 常用于脚本结束时清理临时数据，或重置某个配置项。删除不存在的键不会报错。 参数: - ...|
| [db.DeletePayloadByGroup](#deletepayloadbygroup) |deletePayloadByGroup 删除指定字典组及其全部 payload（导出名为 db.DeletePayloadByGroup） 用于清理不再需要的字典组。删除后该组不再出现在 db.GetAllPayloadGroupsName 的结果里， db.YieldPayload 也取不到任何...|
| [db.DeleteYakScriptByName](#deleteyakscriptbyname) |_deleteYakScriptByName 按名称删除本地插件（核心插件受保护不会被删，导出名为 db.DeleteYakScriptByName） 用于清理由 db.SaveYakitPlugin 等保存的本地插件。出于安全考虑，标记为核心插件(is_core_plugin)的插件不会被删除。 ...|
| [db.DeleteYakitMenuItemAll](#deleteyakitmenuitemall) |deleteYakitMenuItemAll 删除全部 Yakit 菜单项（导出名为 db.DeleteYakitMenuItemAll） 参数: - 无 返回值: - 错误信息|
| [db.DownloadGeoIP](#downloadgeoip) |DownloadGeoIP 下载 GeoIP 数据库到本地（导出名为 db.DownloadGeoIP） 下载后即可使用 db.QueryIPCity / db.QueryIPForIPS 进行离线 IP 归属查询 返回值: - 错误信息（下载或解压失败时返回）|
| [db.GetAllPayloadGroupsName](#getallpayloadgroupsname) |getAllPayloadGroupsName 获取数据库中全部字典组的名称（导出名为 db.GetAllPayloadGroupsName） 用于枚举当前所有可用的 payload 字典组，常配合 db.YieldPayload 遍历每个组的内容做统计或导出。 返回值: - 全部字典组名列表|
| [db.GetKey](#getkey) |GetKey 从 Profile（全局配置）数据库读取一个键对应的值（导出名为 db.GetKey） 读取由 db.SetKey / db.SetKeyWithTTL 写入的值。键不存在或已过期时返回空字符串（&#34;&#34;）， 因此可用 `if db.GetKey(k) == &#34;&#34;` 判断键是否存在。若存储...|
| [db.GetProjectKey](#getprojectkey) |GetProjectKey 从当前项目数据库读取一个键对应的值（导出名为 db.GetProjectKey） 读取由 db.SetProjectKey 写入的项目级值；键不存在时返回空字符串。 与 db.GetKey（全局 Profile 库）相互独立：同名键在两个库里互不影响。 参数: - k: ...|
| [db.GetYakitPluginByID](#getyakitpluginbyid) |getYakitPluginByID 按数据库 ID 查询本地插件（导出名为 db.GetYakitPluginByID） 参数: - i: 插件 ID 返回值: - 插件对象 - 错误信息|
| [db.GetYakitPluginByName](#getyakitpluginbyname) |queryYakitPluginByName 按名称查询本地插件（导出名为 db.GetYakitPluginByName） 取回某个已存在插件的完整对象，可读取 .ScriptName / .Type / .Content / .Help / .Author 等字段。 常用于在调用前检查插件是否存...|
| [db.GetYakitPluginByUUID](#getyakitpluginbyuuid) |getYakitPluginByUUID 按 UUID 查询本地插件（导出名为 db.GetYakitPluginByUUID） 参数: - i: 插件 UUID 返回值: - 插件对象 - 错误信息|
| [db.NewAliveHost](#newalivehost) |YakitNewAliveHost 创建并保存一条存活主机记录并输出（导出名为 db.NewAliveHost） 参数: - target: 主机目标（IP 或域名） - opts: 存活主机可选项，如运行时 ID 等 返回值: - 无|
| [db.OpenDatabase](#opendatabase) |OpenDatabase 通过指定方言与连接源打开一个任意 gorm 数据库连接（导出名为 db.OpenDatabase） 这是最底层、最通用的建连接口，用于连接 yaklang 内置库之外的数据库（如目标业务库、外部 MySQL）。 返回的连接对象支持 .Exec(sql, args...) 执...|
| [db.OpenSqliteDatabase](#opensqlitedatabase) |OpenSqliteDatabase 打开（不存在时自动创建）一个 SQLite 数据库文件（导出名为 db.OpenSqliteDatabase） 适合需要把数据持久化到指定文件、且后续可重复打开的场景（如导出扫描结果、构建自定义数据集）。 连接以 shared cache + rwc 模式打开。...|
| [db.OpenTempSqliteDatabase](#opentempsqlitedatabase) |OpenTempSqliteDatabase 在临时目录中创建并打开一个临时 SQLite 数据库（导出名为 db.OpenTempSqliteDatabase） 数据库文件以随机 UUID 命名建于 Yakit 临时目录，适合脚本内部做数据中转、聚合、去重、排序等， 用完即弃。是“把内存数据交给 ...|
| [db.QueryAliveHost](#queryalivehost) |QueryAliveHost 按运行时 ID 查询存活主机记录（导出名为 db.QueryAliveHost） 以 channel 形式逐条返回，常配合扫描任务的 runtimeId 使用 参数: - runtimeId: 扫描任务的运行时 ID 返回值: - 逐条产出存活主机记录的 channel|
| [db.QueryDomainsByDomainKeyword](#querydomainsbydomainkeyword) |queryDomainAssetByDomainKeyword 按域名关键词模糊查询域名资产（导出名为 db.QueryDomainsByDomainKeyword） 检索由 db.SaveDomain 入库的域名资产，在 domain 字段做模糊匹配（常用于按主域聚合所有子域名）。 返回的 Dom...|
| [db.QueryDomainsByNetwork](#querydomainsbynetwork) |queryDomainAssetByNetwork 按网段（解析 IP 所在网段）查询域名资产（导出名为 db.QueryDomainsByNetwork） 与 db.QueryDomainsByDomainKeyword 的区别：本函数按域名“解析到的 IP”所属网段匹配（基于 ip_intege...|
| [db.QueryDomainsByTitle](#querydomainsbytitle) |queryDomainAssetByHTMLTitle 按网站 HTML 标题模糊查询域名资产（导出名为 db.QueryDomainsByTitle） 在域名资产的 html_title 字段做模糊匹配，用于按网站标题定位资产（如所有标题含 &#34;admin&#34;/&#34;后台&#34;/&#34;登录&#34; 的站点）。 注意：仅...|
| [db.QueryHTTPFlowByID](#queryhttpflowbyid) |queryHTTPFlowByID 按数据库自增 ID 精确查询单条 HTTP 流量（导出名为 db.QueryHTTPFlowByID） 当你已经知道某条流量的 ID（例如从列表/表格中选中、或从其他查询里拿到 flow.ID）时，用它直接取回完整对象。 批量按多个 ID 取用 db.QueryH...|
| [db.QueryHTTPFlowsAll](#queryhttpflowsall) |QueryHTTPFlowsAll 查询数据库中保存的全部 HTTP 流量记录（导出名为 db.QueryHTTPFlowsAll） 以 channel 形式逐条返回，便于流式遍历 返回值: - 逐条产出 HTTP 流量记录的 channel|
| [db.QueryHTTPFlowsByID](#queryhttpflowsbyid) |queryHTTPFlowsByID 按一个或多个 ID 查询 HTTP 流量（导出名为 db.QueryHTTPFlowsByID） 参数: - id: 一个或多个 HTTPFlow ID 返回值: - HTTPFlow 对象的 channel，可使用 for-range 遍历|
| [db.QueryHTTPFlowsByKeyword](#queryhttpflowsbykeyword) |queryHTTPFlowByKeyword 按关键词在 URL/请求/响应中模糊查询 HTTP 流量（导出名为 db.QueryHTTPFlowsByKeyword） 在历史流量的 url、request、response 三个字段中做模糊匹配，是检索“流量证据”的主力接口。 例如检索包含 &#34;pa...|
| [db.QueryHostPortByKeyword](#queryhostportbykeyword) |queryHostAssetByNetwork 按网段查询主机资产（导出名为 db.QueryHostPortByKeyword 等相关接口的底层实现之一） 参数: - network: 网段表达式，如 &#34;192.168.1.0/24&#34; 返回值: - 主机资产的 channel，可使用 for-ra...|
| [db.QueryHostPortByNetwork](#queryhostportbynetwork) |queryHostPortByNetwork 按网段查询开放端口并以 &#34;host:port&#34; 字符串返回（导出名为 db.QueryHostPortByNetwork） 从端口资产（由 db.SavePortFromResult 入库）中筛选 state=open 且落在指定网段的记录，直接拼成 &#34;...|
| [db.QueryHostsByDomain](#queryhostsbydomain) |queryHostAssetByDomainKeyword 按关联域名关键词查询主机资产（导出名为 db.QueryHostsByDomain） 参数: - keyword: 域名关键词 返回值: - 主机资产的 channel，可使用 for-range 遍历 - 错误信息|
| [db.QueryIPCity](#queryipcity) |QueryIPCity 查询一个 IP 的地理位置信息（导出名为 db.QueryIPCity） 依赖本地 GeoIP 数据库，可先用 db.DownloadGeoIP 下载 参数: - ip: 要查询的 IP 地址 返回值: - 地理位置信息对象（City） - 错误信息（数据库缺失或查询失败时返...|
| [db.QueryIPForIPS](#queryipforips) |QueryIPForIPS 查询一个 IP 的 ISP（运营商）信息（导出名为 db.QueryIPForIPS） 依赖本地 GeoIP ISP 数据库，可先用 db.DownloadGeoIP 下载 参数: - ip: 要查询的 IP 地址 返回值: - ISP 信息对象 - 错误信息（数据库缺失...|
| [db.QueryPayloadGroups](#querypayloadgroups) |getPayloadGroups 查询匹配指定名称关键字的字典组列表（导出名为 db.QueryPayloadGroups） 与 db.GetAllPayloadGroupsName 的区别：本函数可按关键字过滤组名（传空串等价于返回全部）。 适合在大量字典组中按命名前缀/关键字定位目标组。 参数:...|
| [db.QueryPortsByRuntimeId](#queryportsbyruntimeid) |queryPortsByRuntimeId 按运行时 ID 查询端口资产（导出名为 db.QueryPortsByRuntimeId） 取回某一次扫描任务（runtimeId）保存的端口资产，是 db.SavePortFromResult(result, runtimeId) 的天然配对： 保存时用...|
| [db.QueryPortsByTaskName](#queryportsbytaskname) |queryPortsByTaskName 按任务名称查询端口资产（导出名为 db.QueryPortsByTaskName） 参数: - taskName: 任务名称 返回值: - 端口资产的 channel，可使用 for-range 遍历 - 错误信息|
| [db.QueryPortsByUpdatedAt](#queryportsbyupdatedat) |queryPortsByUpdatedAt 查询指定时间戳之后更新的开放端口（导出名为 db.QueryPortsByUpdatedAt） 参数: - timestamp: Unix 时间戳，仅返回此后更新的端口 返回值: - 端口资产的 channel，可使用 for-range 遍历 - 错误信...|
| [db.QueryUrlsAll](#queryurlsall) |queryAllUrls 查询全部 URL 资产（导出名为 db.QueryUrlsAll） 参数: - 无 返回值: - URL 字符串的 channel，可使用 for-range 遍历|
| [db.QueryUrlsByKeyword](#queryurlsbykeyword) |queryUrlsByKeyword 按关键词模糊查询历史流量中的 URL 资产（导出名为 db.QueryUrlsByKeyword） 与 db.QueryHTTPFlowsByKeyword 的区别：本函数只在 url 字段上匹配，且只返回去重后的 URL 字符串 （而非完整流量对象），更轻量，...|
| [db.SaveAIYakScript](#saveaiyakscript) |SaveAIYakScript 将一个 AI 工具定义保存到 Profile 数据库（导出名为 db.SaveAIYakScript） 参数: - tool: AI 工具定义对象 返回值: - 错误信息（数据库不可用或保存失败时返回）|
| [db.SaveDomain](#savedomain) |saveDomain 保存域名及其关联 IP 到项目数据库（导出名为 db.SaveDomain） 把（子）域名及其解析到的 IP 作为域名资产入库，常用于子域名爆破/收集（subdomain 库）之后的资产沉淀。 一个域名可关联多个 IP（多个 A 记录 / CDN 节点）。入库后可用 db.Qu...|
| [db.SaveHTTPFlowFromNative](#savehttpflowfromnative) |saveCrawler 将一次 HTTP 请求/响应作为爬虫流量保存到项目数据库（导出名为 db.SaveHTTPFlowFromNative） 与 db.SaveHTTPFlowFromRaw 的区别：本函数接收 Go/标准库风格的 *http.Request / *http.Response 对...|
| [db.SaveHTTPFlowFromNativeWithType](#savehttpflowfromnativewithtype) |saveHTTPFlowWithType 将一次 HTTP 请求/响应按指定来源类型保存到项目数据库（导出名为 db.SaveHTTPFlowFromNativeWithType） 参数: - url: 请求 URL - req: HTTP 请求对象 - rsp: HTTP 响应对象 - typeS...|
| [db.SaveHTTPFlowFromRaw](#savehttpflowfromraw) |saveHTTPFlowFromRaw 根据原始请求/响应保存一条 HTTP 流量记录到项目数据库（导出名为 db.SaveHTTPFlowFromRaw） 把一次 HTTP 交互（请求包 + 响应包）持久化为可检索的流量记录，来源类型默认标记为 &#34;basic-crawler&#34;。 入库后可用 db....|
| [db.SaveHTTPFlowFromRawWithOption](#savehttpflowfromrawwithoption) |saveHTTPFlowFromRawWithOption 根据原始请求/响应及自定义选项保存一条 HTTP 流量记录（导出名为 db.SaveHTTPFlowFromRawWithOption） 是 HTTP 流量入库最灵活的接口：除请求/响应外，可追加可选项进一步描述这条流量。 目前可用的可选项...|
| [db.SaveHTTPFlowFromRawWithType](#savehttpflowfromrawwithtype) |saveHTTPFlowFromRawWithType 根据原始请求/响应及来源类型保存一条 HTTP 流量记录（导出名为 db.SaveHTTPFlowFromRawWithType） 与 db.SaveHTTPFlowFromRaw 相同，但可显式指定来源类型（source type），便于按来...|
| [db.SaveHTTPFlowInstance](#savehttpflowinstance) |saveHTTPFlowInstance 直接保存一个已构造好的 HTTPFlow 对象到项目数据库（导出名为 db.SaveHTTPFlowInstance） 参数: - flow: HTTPFlow 对象 返回值: - 错误信息|
| [db.SavePayload](#savepayload) |savePayloads 将一组 payload 保存到指定字典组（导出名为 db.SavePayload） payload 字典是爆破（brute）、fuzz、模糊测试等场景的弹药库。同一 group 名下的多次保存会累积入库（去重由底层处理）。 入库后用 db.YieldPayload 流式取出...|
| [db.SavePayloadByFile](#savepayloadbyfile) |savePayloadByFile 从字典文件按行读取内容并保存到指定字典组（导出名为 db.SavePayloadByFile） 与 db.SavePayload 等价，但数据源是文件：文件每一行作为一个 payload 入库，适合导入大字典（rockyou 等）。 导入后同样用 db.Yield...|
| [db.SavePortFromResult](#saveportfromresult) |savePortFromObj 从扫描结果对象提取端口信息并保存为端口资产（导出名为 db.SavePortFromResult） 这是端口/服务扫描结果落库的标准接口，直接接收各扫描器返回的结果对象，自动转换为统一的端口资产入库。 支持的对象类型：servicescan 的指纹结果(fp.Matc...|
| [db.SaveYakitMenuItemByBatchExecuteConfig](#saveyakitmenuitembybatchexecuteconfig) |saveYakitMenuItemByBatchExecuteConfig 根据批量执行配置创建并保存 Yakit 菜单项（导出名为 db.SaveYakitMenuItemByBatchExecuteConfig） 参数: - raw: 批量执行配置（JSON 或 map） 返回值: - 错误信息|
| [db.SaveYakitPlugin](#saveyakitplugin) |saveYakitPlugin 将插件源码保存到本地插件数据库（导出名为 db.SaveYakitPlugin） 把一段插件源码以指定类型持久化为本地插件，之后可在 Yakit 中加载、或用 db.GetYakitPluginByName 取回。 插件类型用内置常量指定：db.YAKIT_PLUGI...|
| [db.ScanResult](#scanresult) |ScanResult 执行原始 SQL 查询并把每一行转换为一个 map（导出名为 db.ScanResult） 是从任意 gorm 连接（db.OpenTempSqliteDatabase / db.OpenSqliteDatabase / db.OpenDatabase 返回的对象） 读取查询结...|
| [db.SetKey](#setkey) |SetKey 向 Profile（全局配置）数据库写入一个键值对（导出名为 db.SetKey） 这是 yaklang 中最常用的跨脚本/跨运行共享数据的方式。键值会持久化保存在用户级 Profile 库中， 不随项目切换而丢失，可用 db.GetKey 读取、db.DelKey 删除、db.Set...|
| [db.SetKeyWithTTL](#setkeywithttl) |SetKeyWithTTL 向 Profile 数据库写入一个带过期时间（TTL）的键值对（导出名为 db.SetKeyWithTTL） 与 db.SetKey 相同，但该键会在 ttl 秒之后自动失效，过期后 db.GetKey 返回空字符串。 典型用途：缓存有时效性的数据（如临时 token、会...|
| [db.SetProjectKey](#setprojectkey) |SetProjectKey 向当前项目数据库写入一个键值对（导出名为 db.SetProjectKey） 与 db.SetKey 用法完全一致，区别在于作用域：db.SetProjectKey 写入“当前项目”库， 切换项目后读不到（实现项目级数据隔离）；db.SetKey 写入全局 Profile...|
| [db.YieldAllAIForges](#yieldallaiforges) |YieldAllAIForges 遍历 Profile 数据库中保存的全部 AI Forge（导出名为 db.YieldAllAIForges） 以 channel 形式逐条返回 返回值: - 逐条产出 AI Forge 的 channel|
| [db.YieldAllAITools](#yieldallaitools) |YieldAllAITools 遍历 Profile 数据库中保存的全部 AI 工具（导出名为 db.YieldAllAITools） 以 channel 形式逐条返回 返回值: - 逐条产出 AI 工具的 channel|
| [db.YieldAllMCPServers](#yieldallmcpservers) |YieldAllMCPServers 遍历 Profile 数据库中保存的全部 MCP Server（导出名为 db.YieldAllMCPServers） 以 channel 形式逐条返回 返回值: - 逐条产出 MCP Server 的 channel|
| [db.YieldPayload](#yieldpayload) |YieldPayload 以 channel 形式流式遍历一个或多个字典组中的 payload 内容（导出名为 db.YieldPayload） 这是消费字典的标准方式：内存友好，适合大字典。可一次传入多个组名，把多个字典合并消费 （例如把若干用户名字典拼成一个候选集）。常配合爆破/fuzz 的目标...|
| [db.YieldYakScriptAll](#yieldyakscriptall) |_yieldYakScript 以 channel 形式流式遍历本地数据库中的全部插件（导出名为 db.YieldYakScriptAll） 枚举所有本地插件，常用于按类型/作者/标签做统计或批量处理。返回 YakScript 对象 channel， 可读取 .ScriptName / .Type ...|
| [db.saveHTTPFlowWithTags](#savehttpflowwithtags) |saveHTTPFlowWithTags 构造一个为 HTTP 流量附加标签的保存选项（导出名为 db.saveHTTPFlowWithTags） 作为保存 HTTP 流量相关接口的可选项使用，用于在入库时打上指定标签 参数: - tags: 要附加的标签字符串（多个标签可用分隔符拼接） 返回值: ...|


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
DelKey 从 Profile（全局配置）数据库删除一个键（导出名为 db.DelKey）



删除由 db.SetKey / db.SetKeyWithTTL 写入的键。删除后 db.GetKey 返回空字符串。

常用于脚本结束时清理临时数据，或重置某个配置项。删除不存在的键不会报错。



参数:

  - k: 要删除的键名




Example:

``````````````yak
// 完整生命周期：写入 -> 读取 -> 删除 -> 确认已删除
db.SetKey("temp-flag", "running")
assert db.GetKey("temp-flag") == "running", "key should exist after SetKey"
db.DelKey("temp-flag")
println(db.GetKey("temp-flag"))   // OUT:
assert db.GetKey("temp-flag") == "", "DelKey should remove the key"
``````````````


#### 定义

`DelKey(k any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| k | `any` | 要删除的键名 |


### DeletePayloadByGroup

#### 详细描述
deletePayloadByGroup 删除指定字典组及其全部 payload（导出名为 db.DeletePayloadByGroup）



用于清理不再需要的字典组。删除后该组不再出现在 db.GetAllPayloadGroupsName 的结果里，

db.YieldPayload 也取不到任何内容。删除不存在的组不会报错。



参数:

  - group: 要删除的字典组名



返回值:

  - 错误信息（数据库不可用时返回）




Example:

``````````````yak
// 完整生命周期：创建 -> 确认存在 -> 删除 -> 确认消失
db.SavePayload("doc-demo-tmp", ["a", "b"])~
assert "doc-demo-tmp" in db.GetAllPayloadGroupsName(), "group should exist after SavePayload"
db.DeletePayloadByGroup("doc-demo-tmp")~
assert !("doc-demo-tmp" in db.GetAllPayloadGroupsName()), "group should be gone after delete"
``````````````


#### 定义

`DeletePayloadByGroup(group string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| group | `string` | 要删除的字典组名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息（数据库不可用时返回） |


### DeleteYakScriptByName

#### 详细描述
_deleteYakScriptByName 按名称删除本地插件（核心插件受保护不会被删，导出名为 db.DeleteYakScriptByName）



用于清理由 db.SaveYakitPlugin 等保存的本地插件。出于安全考虑，标记为核心插件(is_core_plugin)的插件不会被删除。

常作为脚本中保存临时插件后的清理步骤（见 db.SaveYakitPlugin 示例）。



参数:

  - i: 要删除的插件名称



返回值:

  - 错误信息（数据库不可用或删除失败时返回）




Example:

``````````````yak
// 保存一个临时插件再删除，验证删除后查不到（保存->删除->确认 联动）
name = "doc-demo-del-"+str.RandStr(6)
db.SaveYakitPlugin(name, db.YAKIT_PLUGIN_TYPE_YAK, `yakit.Info("temp")`)~
db.DeleteYakScriptByName(name)~
_, err = db.GetYakitPluginByName(name)
assert err != nil, "the plugin should no longer exist after deletion"
``````````````


#### 定义

`DeleteYakScriptByName(i string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` | 要删除的插件名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息（数据库不可用或删除失败时返回） |


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
DownloadGeoIP 下载 GeoIP 数据库到本地（导出名为 db.DownloadGeoIP）

下载后即可使用 db.QueryIPCity / db.QueryIPForIPS 进行离线 IP 归属查询



返回值:

  - 错误信息（下载或解压失败时返回）




Example:

``````````````yak
// 需要网络访问以下载数据库（示意性示例）
db.DownloadGeoIP()~
city = db.QueryIPCity("1.1.1.1")~
println(city.Country.Names["en"])
``````````````


#### 定义

`DownloadGeoIP() error`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息（下载或解压失败时返回） |


### GetAllPayloadGroupsName

#### 详细描述
getAllPayloadGroupsName 获取数据库中全部字典组的名称（导出名为 db.GetAllPayloadGroupsName）



用于枚举当前所有可用的 payload 字典组，常配合 db.YieldPayload 遍历每个组的内容做统计或导出。



返回值:

  - 全部字典组名列表




Example:

``````````````yak
// 创建若干组后枚举全部组名，并统计每组 payload 数量
db.SavePayload("doc-all-1", ["a", "b"])~
db.SavePayload("doc-all-2", ["c"])~
groups = db.GetAllPayloadGroupsName()
assert "doc-all-1" in groups && "doc-all-2" in groups, "both groups should be listed"
for g in groups {
    if g.HasPrefix("doc-all-") {
        cnt = 0
        for _ in db.YieldPayload(g) { cnt++ }
        println(g, cnt)
    }
}
db.DeletePayloadByGroup("doc-all-1"); db.DeletePayloadByGroup("doc-all-2")
``````````````


#### 定义

`GetAllPayloadGroupsName() []string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 全部字典组名列表 |


### GetKey

#### 详细描述
GetKey 从 Profile（全局配置）数据库读取一个键对应的值（导出名为 db.GetKey）



读取由 db.SetKey / db.SetKeyWithTTL 写入的值。键不存在或已过期时返回空字符串（&#34;&#34;），

因此可用 `if db.GetKey(k) == &#34;&#34;` 判断键是否存在。若存储的是 json 字符串，读取后用 json.loads 还原。



参数:

  - k: 键名



返回值:

  - 键对应的值字符串；键不存在或已过期时返回空字符串




Example:

``````````````yak
// 读取已存在的值，并对“首次运行”做默认值兜底
if db.GetKey("scan-round") == "" {
    db.SetKey("scan-round", "1")            // 首次运行初始化
}
round = atoi(db.GetKey("scan-round"))~
db.SetKey("scan-round", sprint(round + 1))  // 每次运行自增
println(round >= 1)   // OUT: true
assert db.GetKey("scan-round") != "", "GetKey should return the persisted counter"
db.DelKey("scan-round")
``````````````


#### 定义

`GetKey(k any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| k | `any` | 键名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 键对应的值字符串；键不存在或已过期时返回空字符串 |


### GetProjectKey

#### 详细描述
GetProjectKey 从当前项目数据库读取一个键对应的值（导出名为 db.GetProjectKey）



读取由 db.SetProjectKey 写入的项目级值；键不存在时返回空字符串。

与 db.GetKey（全局 Profile 库）相互独立：同名键在两个库里互不影响。



参数:

  - k: 键名



返回值:

  - 键对应的值字符串；键不存在时返回空字符串




Example:

``````````````yak
// 演示项目库与全局库的隔离：同名键互不干扰
db.SetProjectKey("env", "project-value")
db.SetKey("env", "global-value")
println(db.GetProjectKey("env"))   // OUT: project-value
assert db.GetProjectKey("env") == "project-value", "GetProjectKey reads from the project DB"
assert db.GetKey("env") == "global-value", "db.GetKey reads from the global profile DB"
db.DelKey("env")
``````````````


#### 定义

`GetProjectKey(k any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| k | `any` | 键名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 键对应的值字符串；键不存在时返回空字符串 |


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



取回某个已存在插件的完整对象，可读取 .ScriptName / .Type / .Content / .Help / .Author 等字段。

常用于在调用前检查插件是否存在、读取插件源码做二次处理。配套有按 ID / UUID 查询的版本。



参数:

  - name: 插件名称



返回值:

  - 插件对象（*schema.YakScript）

  - 错误信息（数据库不可用或插件不存在时返回）




Example:

``````````````yak
// 与 db.SaveYakitPlugin 配对：保存后按名取回并读取源码长度
name = "doc-demo-getbyname-"+str.RandStr(6)
db.SaveYakitPlugin(name, db.YAKIT_PLUGIN_TYPE_YAK, `yakit.Info("x")`)~

script = db.GetYakitPluginByName(name)~
println(script.Type, len(script.Content) > 0)
assert script.ScriptName == name, "GetYakitPluginByName should return the matching plugin"
db.DeleteYakScriptByName(name)~
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
| r1 | `*schema.YakScript` | 插件对象（*schema.YakScript） |
| r2 | `error` | 错误信息（数据库不可用或插件不存在时返回） |


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
OpenDatabase 通过指定方言与连接源打开一个任意 gorm 数据库连接（导出名为 db.OpenDatabase）



这是最底层、最通用的建连接口，用于连接 yaklang 内置库之外的数据库（如目标业务库、外部 MySQL）。

返回的连接对象支持 .Exec(sql, args...) 执行写操作、配合 db.ScanResult 执行查询。

若只是需要一个临时本地库做数据中转，优先用 db.OpenTempSqliteDatabase；连接 SQLite 文件用 db.OpenSqliteDatabase。



参数:

  - dialect: 数据库方言，常见取值 &#34;sqlite3&#34;、&#34;mysql&#34;、&#34;postgres&#34;

  - source: 数据源连接串。sqlite3 为文件路径；mysql 形如 &#34;user:pass@tcp(127.0.0.1:3306)/dbname?charset=utf8mb4&#34;



返回值:

  - 数据库连接对象（*gorm.DB）

  - 错误信息（连接失败时返回）




Example:

``````````````yak
// sqlite3：打开/创建一个本地库
conn = db.OpenDatabase("sqlite3", "/tmp/doc-demo-open.db")~
defer conn.Close()
conn.Exec("CREATE TABLE IF NOT EXISTS kv(k TEXT, v TEXT)")
conn.Exec("INSERT INTO kv VALUES (?, ?)", "name", "yak")
rows = db.ScanResult(conn, "SELECT v FROM kv WHERE k = ?", "name")~
assert rows[0]["v"] == "yak", "OpenDatabase + Exec + ScanResult should round-trip"

// mysql（依赖目标 MySQL，示意性，不在文档校验中执行）
// mysqlConn = db.OpenDatabase("mysql", "root:123456@tcp(127.0.0.1:3306)/test?charset=utf8mb4")~
``````````````


#### 定义

`OpenDatabase(dialect string, source string) (*gorm.DB, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| dialect | `string` | 数据库方言，常见取值 &#34;sqlite3&#34;、&#34;mysql&#34;、&#34;postgres&#34; |
| source | `string` | 数据源连接串。sqlite3 为文件路径；mysql 形如 &#34;user:pass@tcp(127.0.0.1:3306)/dbname?charset=utf8mb4&#34; |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*gorm.DB` | 数据库连接对象（*gorm.DB） |
| r2 | `error` | 错误信息（连接失败时返回） |


### OpenSqliteDatabase

#### 详细描述
OpenSqliteDatabase 打开（不存在时自动创建）一个 SQLite 数据库文件（导出名为 db.OpenSqliteDatabase）



适合需要把数据持久化到指定文件、且后续可重复打开的场景（如导出扫描结果、构建自定义数据集）。

连接以 shared cache + rwc 模式打开。若不需要持久化文件，用 db.OpenTempSqliteDatabase 更省心。



参数:

  - path: SQLite 数据库文件路径（不存在会自动创建空文件）



返回值:

  - 数据库连接对象（*gorm.DB）

  - 错误信息（创建或打开失败时返回）




Example:

``````````````yak
// 把数据写入指定文件，重新打开后数据仍在（持久化验证）
path = "/tmp/doc-demo-sqlite.db"
conn = db.OpenSqliteDatabase(path)~
conn.Exec("CREATE TABLE IF NOT EXISTS findings(id INTEGER PRIMARY KEY, title TEXT, severity TEXT)")
conn.Exec("INSERT INTO findings(title, severity) VALUES (?, ?)", "SQL Injection", "high")
conn.Close()

reopen = db.OpenSqliteDatabase(path)~          // 重新打开同一文件
defer reopen.Close()
rows = db.ScanResult(reopen, "SELECT title, severity FROM findings")~
println(rows[0]["title"])   // OUT: SQL Injection
assert len(rows) >= 1 && rows[0]["severity"] == "high", "data should persist across reopen"
``````````````


#### 定义

`OpenSqliteDatabase(path string) (*gorm.DB, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` | SQLite 数据库文件路径（不存在会自动创建空文件） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*gorm.DB` | 数据库连接对象（*gorm.DB） |
| r2 | `error` | 错误信息（创建或打开失败时返回） |


### OpenTempSqliteDatabase

#### 详细描述
OpenTempSqliteDatabase 在临时目录中创建并打开一个临时 SQLite 数据库（导出名为 db.OpenTempSqliteDatabase）



数据库文件以随机 UUID 命名建于 Yakit 临时目录，适合脚本内部做数据中转、聚合、去重、排序等，

用完即弃。是“把内存数据交给 SQL 处理”的最便捷入口：建表 -&gt; 批量写入 -&gt; 用 SQL 聚合/JOIN -&gt; 取结果。



返回值:

  - 数据库连接对象（*gorm.DB）

  - 错误信息（创建失败时返回）




Example:

``````````````yak
// 完整 CRUD + 聚合：把扫描得到的端口数据交给 SQL 统计每类服务数量
conn = db.OpenTempSqliteDatabase()~
defer conn.Close()
conn.Exec(`CREATE TABLE ports(host TEXT, port INTEGER, service TEXT)`)
records = [
    ["10.0.0.1", 80, "http"], ["10.0.0.1", 443, "https"],
    ["10.0.0.2", 22, "ssh"],  ["10.0.0.2", 80, "http"],
]
for r in records { conn.Exec("INSERT INTO ports VALUES (?, ?, ?)", r[0], r[1], r[2]) }

stats = db.ScanResult(conn, "SELECT service, COUNT(*) AS cnt FROM ports GROUP BY service ORDER BY cnt DESC")~
for row in stats { println(row["service"], row["cnt"]) }
assert len(stats) == 3, "should aggregate into 3 service groups"
assert stats[0]["service"] == "http", "http should be the most frequent service"
``````````````


#### 定义

`OpenTempSqliteDatabase() (*gorm.DB, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*gorm.DB` | 数据库连接对象（*gorm.DB） |
| r2 | `error` | 错误信息（创建失败时返回） |


### QueryAliveHost

#### 详细描述
QueryAliveHost 按运行时 ID 查询存活主机记录（导出名为 db.QueryAliveHost）

以 channel 形式逐条返回，常配合扫描任务的 runtimeId 使用



参数:

  - runtimeId: 扫描任务的运行时 ID



返回值:

  - 逐条产出存活主机记录的 channel




Example:

``````````````yak
// runtimeId 来自某次扫描任务（示意性示例）
for host in db.QueryAliveHost("example-runtime-id") {
    println(host.IP)
}
``````````````


#### 定义

`QueryAliveHost(runtimeId string) chan *schema.AliveHost`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| runtimeId | `string` | 扫描任务的运行时 ID |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *schema.AliveHost` | 逐条产出存活主机记录的 channel |


### QueryDomainsByDomainKeyword

#### 详细描述
queryDomainAssetByDomainKeyword 按域名关键词模糊查询域名资产（导出名为 db.QueryDomainsByDomainKeyword）



检索由 db.SaveDomain 入库的域名资产，在 domain 字段做模糊匹配（常用于按主域聚合所有子域名）。

返回的 Domain 对象可读取 .Domain（域名）、.IPAddr（关联 IP）、.HTTPTitle（网站标题）等字段。



参数:

  - keyword: 域名关键词（如主域 &#34;example.com&#34;）



返回值:

  - 域名资产的 channel，可使用 for-range 遍历

  - 错误信息（项目数据库不可用时返回）




Example:

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


#### 定义

`QueryDomainsByDomainKeyword(keyword string) (chan *schema.Domain, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| keyword | `string` | 域名关键词（如主域 &#34;example.com&#34;） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *schema.Domain` | 域名资产的 channel，可使用 for-range 遍历 |
| r2 | `error` | 错误信息（项目数据库不可用时返回） |


### QueryDomainsByNetwork

#### 详细描述
queryDomainAssetByNetwork 按网段（解析 IP 所在网段）查询域名资产（导出名为 db.QueryDomainsByNetwork）



与 db.QueryDomainsByDomainKeyword 的区别：本函数按域名“解析到的 IP”所属网段匹配（基于 ip_integer 字段），

用于回答“哪些域名落在某个 C 段 / 某个 IP 上”——典型用于把同一 IP 上的虚拟主机/旁站聚合出来。



参数:

  - network: 网段表达式，如 &#34;192.168.1.0/24&#34;、&#34;1.1.1.1/32&#34;



返回值:

  - 域名资产的 channel，可使用 for-range 遍历

  - 错误信息（项目数据库不可用时返回）




Example:

``````````````yak
// 保存带解析 IP 的域名，再按该 IP 网段反查域名（按 IP 聚合旁站的思路）
db.SaveDomain("vhost-a.doc-demo-net.example.com", "203.0.113.7")~
db.SaveDomain("vhost-b.doc-demo-net.example.com", "203.0.113.7")~

got = []
ch = db.QueryDomainsByNetwork("203.0.113.0/24")~
for d in ch { got = append(got, d.Domain) }
assert len(got) >= 2, "both vhosts resolving into 203.0.113.0/24 should be returned"
``````````````


#### 定义

`QueryDomainsByNetwork(network string) (chan *schema.Domain, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| network | `string` | 网段表达式，如 &#34;192.168.1.0/24&#34;、&#34;1.1.1.1/32&#34; |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *schema.Domain` | 域名资产的 channel，可使用 for-range 遍历 |
| r2 | `error` | 错误信息（项目数据库不可用时返回） |


### QueryDomainsByTitle

#### 详细描述
queryDomainAssetByHTMLTitle 按网站 HTML 标题模糊查询域名资产（导出名为 db.QueryDomainsByTitle）



在域名资产的 html_title 字段做模糊匹配，用于按网站标题定位资产（如所有标题含 &#34;admin&#34;/&#34;后台&#34;/&#34;登录&#34; 的站点）。

注意：仅当入库时记录了网站标题（例如经过抓取并回填标题）才能命中，仅用 db.SaveDomain 保存域名+IP 时标题为空。



参数:

  - title: HTML 标题关键词



返回值:

  - 域名资产的 channel，可使用 for-range 遍历

  - 错误信息（项目数据库不可用时返回）




Example:

``````````````yak
// 按网站标题筛选后台类资产（依赖资产已带标题，示意性示例）
ch = db.QueryDomainsByTitle("admin")~
for domain in ch {
    println(domain.Domain, domain.HTTPTitle)
}
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
| r2 | `error` | 错误信息（项目数据库不可用时返回） |


### QueryHTTPFlowByID

#### 详细描述
queryHTTPFlowByID 按数据库自增 ID 精确查询单条 HTTP 流量（导出名为 db.QueryHTTPFlowByID）



当你已经知道某条流量的 ID（例如从列表/表格中选中、或从其他查询里拿到 flow.ID）时，用它直接取回完整对象。

批量按多个 ID 取用 db.QueryHTTPFlowsByID。



参数:

  - id: HTTPFlow 的数据库 ID



返回值:

  - HTTPFlow 对象

  - 错误信息（数据库不可用或该 ID 不存在时返回）




Example:

``````````````yak
// 先落一条流量，从遍历结果拿到它的 ID，再按 ID 精确取回（保存->拿ID->按ID查 联动）
host = "doc-demo-byid.example.com"
db.SaveHTTPFlowFromRaw("http://"+host+"/", []byte(f"GET / HTTP/1.1\r\nHost: ${host}\r\n\r\n"), []byte("HTTP/1.1 200 OK\r\nContent-Length: 2\r\n\r\nok"))~

id = 0
for flow in db.QueryHTTPFlowsByKeyword(host) { id = flow.ID; break }
if id > 0 {
    one = db.QueryHTTPFlowByID(id)~
    println(one.Url)
    assert one.ID == id, "QueryHTTPFlowByID should return the same record"
}
``````````````


#### 定义

`QueryHTTPFlowByID(id int64) (*schema.HTTPFlow, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| id | `int64` | HTTPFlow 的数据库 ID |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*schema.HTTPFlow` | HTTPFlow 对象 |
| r2 | `error` | 错误信息（数据库不可用或该 ID 不存在时返回） |


### QueryHTTPFlowsAll

#### 详细描述
QueryHTTPFlowsAll 查询数据库中保存的全部 HTTP 流量记录（导出名为 db.QueryHTTPFlowsAll）

以 channel 形式逐条返回，便于流式遍历



返回值:

  - 逐条产出 HTTP 流量记录的 channel




Example:

``````````````yak
// 遍历数据库中已保存的全部 HTTP 流量
count = 0
for flow in db.QueryHTTPFlowsAll() {
    count++
    if count > 5 { break }
}
println("scanned http flows")
``````````````


#### 定义

`QueryHTTPFlowsAll() chan *schema.HTTPFlow`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *schema.HTTPFlow` | 逐条产出 HTTP 流量记录的 channel |


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



在历史流量的 url、request、response 三个字段中做模糊匹配，是检索“流量证据”的主力接口。

例如检索包含 &#34;password&#34; 的流量定位登录点、检索某域名定位相关请求。返回 HTTPFlow 对象 channel，

可读取 .Url / .Method / .StatusCode / .BodyLength 等字段，常配合 yakit.NewTable 展示结果。



参数:

  - k: 关键词（在 url/request/response 中模糊匹配；传 &#34;&#34; 等价于遍历全部）



返回值:

  - HTTPFlow 对象的 channel，可使用 for-range 遍历




Example:

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


#### 定义

`QueryHTTPFlowsByKeyword(k string) chan *schema.HTTPFlow`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| k | `string` | 关键词（在 url/request/response 中模糊匹配；传 &#34;&#34; 等价于遍历全部） |

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
queryHostPortByNetwork 按网段查询开放端口并以 &#34;host:port&#34; 字符串返回（导出名为 db.QueryHostPortByNetwork）



从端口资产（由 db.SavePortFromResult 入库）中筛选 state=open 且落在指定网段的记录，直接拼成 &#34;host:port&#34;。

非常适合把“之前扫到的开放端口”作为下一步动作的目标列表（如批量取 banner、批量发 poc）。

若需要端口资产的完整字段（服务、指纹、标题等），用 db.QueryPortAssetByNetwork 拿对象而非字符串。



参数:

  - network: 网段表达式，如 &#34;192.168.1.0/24&#34; 或单个 IP



返回值:

  - &#34;host:port&#34; 字符串的 channel，可使用 for-range 遍历




Example:

``````````````yak
// 联动：把某网段已入库的开放端口取出，作为后续探测的目标列表（依赖已有端口资产，示意性示例）
targets = []
for hostport in db.QueryHostPortByNetwork("192.168.1.0/24") {
    targets = append(targets, hostport)   // 形如 "192.168.1.10:80"
}
yakit.Info("collected %d open host:port targets for next step", len(targets))
``````````````


#### 定义

`QueryHostPortByNetwork(network string) chan string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| network | `string` | 网段表达式，如 &#34;192.168.1.0/24&#34; 或单个 IP |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan string` | &#34;host:port&#34; 字符串的 channel，可使用 for-range 遍历 |


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
QueryIPCity 查询一个 IP 的地理位置信息（导出名为 db.QueryIPCity）

依赖本地 GeoIP 数据库，可先用 db.DownloadGeoIP 下载



参数:

  - ip: 要查询的 IP 地址



返回值:

  - 地理位置信息对象（City）

  - 错误信息（数据库缺失或查询失败时返回）




Example:

``````````````yak
// 需先准备本地 GeoIP 数据库（示意性示例）
city = db.QueryIPCity("1.1.1.1")~
println(city.Country.Names["en"])
``````````````


#### 定义

`QueryIPCity(ip string) (*geo.City, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ip | `string` | 要查询的 IP 地址 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*geo.City` | 地理位置信息对象（City） |
| r2 | `error` | 错误信息（数据库缺失或查询失败时返回） |


### QueryIPForIPS

#### 详细描述
QueryIPForIPS 查询一个 IP 的 ISP（运营商）信息（导出名为 db.QueryIPForIPS）

依赖本地 GeoIP ISP 数据库，可先用 db.DownloadGeoIP 下载



参数:

  - ip: 要查询的 IP 地址



返回值:

  - ISP 信息对象

  - 错误信息（数据库缺失或查询失败时返回）




Example:

``````````````yak
// 需先准备本地 GeoIP ISP 数据库（示意性示例）
isp = db.QueryIPForIPS("1.1.1.1")~
println(isp.ISP)
``````````````


#### 定义

`QueryIPForIPS(ip string) (*geo.ISP, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ip | `string` | 要查询的 IP 地址 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*geo.ISP` | ISP 信息对象 |
| r2 | `error` | 错误信息（数据库缺失或查询失败时返回） |


### QueryPayloadGroups

#### 详细描述
getPayloadGroups 查询匹配指定名称关键字的字典组列表（导出名为 db.QueryPayloadGroups）



与 db.GetAllPayloadGroupsName 的区别：本函数可按关键字过滤组名（传空串等价于返回全部）。

适合在大量字典组中按命名前缀/关键字定位目标组。



参数:

  - group: 字典组名关键字（传 &#34;&#34; 返回全部组）



返回值:

  - 匹配的字典组名列表




Example:

``````````````yak
// 创建两个带相同前缀的组，再用关键字过滤
db.SavePayload("doc-grp-alpha", ["x"])~
db.SavePayload("doc-grp-beta",  ["y"])~
matched = db.QueryPayloadGroups("doc-grp-")
println(len(matched) >= 2)   // OUT: true
assert len(matched) >= 2, "keyword should match both doc-grp-* groups"
db.DeletePayloadByGroup("doc-grp-alpha"); db.DeletePayloadByGroup("doc-grp-beta")
``````````````


#### 定义

`QueryPayloadGroups(group string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| group | `string` | 字典组名关键字（传 &#34;&#34; 返回全部组） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 匹配的字典组名列表 |


### QueryPortsByRuntimeId

#### 详细描述
queryPortsByRuntimeId 按运行时 ID 查询端口资产（导出名为 db.QueryPortsByRuntimeId）



取回某一次扫描任务（runtimeId）保存的端口资产，是 db.SavePortFromResult(result, runtimeId) 的天然配对：

保存时用同一个 runtimeId 归档，查询时用它精确取回“本次扫描”的结果，避免与历史数据混在一起。



参数:

  - runtimeID: 运行时 ID（与保存端口资产时传入的一致）



返回值:

  - 端口资产的 channel，可使用 for-range 遍历

  - 错误信息（项目数据库不可用时返回）




Example:

``````````````yak
// 与保存端 SavePortFromResult(result, runtimeId) 配对使用（依赖一次真实扫描，示意性示例）
runtimeId = "scan-"+uuid()
for result in servicescan.Scan("127.0.0.1", "1-100")~ {
    db.SavePortFromResult(result, runtimeId)~
}
table = yakit.NewTable("Host", "Port", "Service")
for port in db.QueryPortsByRuntimeId(runtimeId)~ {
    table.Append(port.Host, port.Port, port.ServiceType)
}
yakit.Output(table)
``````````````


#### 定义

`QueryPortsByRuntimeId(runtimeID string) (chan *schema.Port, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| runtimeID | `string` | 运行时 ID（与保存端口资产时传入的一致） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *schema.Port` | 端口资产的 channel，可使用 for-range 遍历 |
| r2 | `error` | 错误信息（项目数据库不可用时返回） |


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
queryUrlsByKeyword 按关键词模糊查询历史流量中的 URL 资产（导出名为 db.QueryUrlsByKeyword）



与 db.QueryHTTPFlowsByKeyword 的区别：本函数只在 url 字段上匹配，且只返回去重后的 URL 字符串

（而非完整流量对象），更轻量，适合“我只想要 URL 列表”的场景（如收集所有 /api 接口）。



参数:

  - k: URL 关键词（在 url 字段做模糊匹配）



返回值:

  - URL 字符串的 channel，可使用 for-range 遍历




Example:

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


#### 定义

`QueryUrlsByKeyword(k string) chan string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| k | `string` | URL 关键词（在 url 字段做模糊匹配） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan string` | URL 字符串的 channel，可使用 for-range 遍历 |


### SaveAIYakScript

#### 详细描述
SaveAIYakScript 将一个 AI 工具定义保存到 Profile 数据库（导出名为 db.SaveAIYakScript）



参数:

  - tool: AI 工具定义对象



返回值:

  - 错误信息（数据库不可用或保存失败时返回）




Example:

``````````````yak
// tool 为已构造的 AIYakTool 对象（示意性示例）
db.SaveAIYakScript(tool)~
``````````````


#### 定义

`SaveAIYakScript(tool *schema.AIYakTool) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tool | `*schema.AIYakTool` | AI 工具定义对象 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息（数据库不可用或保存失败时返回） |


### SaveDomain

#### 详细描述
saveDomain 保存域名及其关联 IP 到项目数据库（导出名为 db.SaveDomain）



把（子）域名及其解析到的 IP 作为域名资产入库，常用于子域名爆破/收集（subdomain 库）之后的资产沉淀。

一个域名可关联多个 IP（多个 A 记录 / CDN 节点）。入库后可用 db.QueryDomainsByDomainKeyword /

db.QueryDomainsByNetwork / db.QueryDomainsByTitle 检索。



参数:

  - domain: 域名（如 &#34;api.example.com&#34;）

  - ip: 零个或多个关联 IP（可变参数）



返回值:

  - 错误信息（项目数据库不可用时返回）




Example:

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


#### 定义

`SaveDomain(domain string, ip ...string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| domain | `string` | 域名（如 &#34;api.example.com&#34;） |
| ip | `...string` | 零个或多个关联 IP（可变参数） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息（项目数据库不可用时返回） |


### SaveHTTPFlowFromNative

#### 详细描述
saveCrawler 将一次 HTTP 请求/响应作为爬虫流量保存到项目数据库（导出名为 db.SaveHTTPFlowFromNative）



与 db.SaveHTTPFlowFromRaw 的区别：本函数接收 Go/标准库风格的 *http.Request / *http.Response 对象，

而非原始字节。适合已经持有结构化请求/响应对象（如某些库的返回值）时直接落库；

来源类型固定标记为 &#34;basic-crawler&#34;。若你手里是原始报文字节，请优先用 db.SaveHTTPFlowFromRaw。



参数:

  - url: 请求 URL

  - req: *http.Request 请求对象

  - rsp: *http.Response 响应对象



返回值:

  - 错误信息（项目数据库不可用或保存失败时返回）




Example:

``````````````yak
// 依赖结构化的 http 请求/响应对象（示意性示例）
// 多数情况下推荐改用 db.SaveHTTPFlowFromRaw 直接保存原始报文字节
db.SaveHTTPFlowFromNative("http://example.com", req, rsp)~
``````````````


#### 定义

`SaveHTTPFlowFromNative(url string, req *http.Request, rsp *http.Response) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` | 请求 URL |
| req | `*http.Request` | *http.Request 请求对象 |
| rsp | `*http.Response` | *http.Response 响应对象 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息（项目数据库不可用或保存失败时返回） |


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



把一次 HTTP 交互（请求包 + 响应包）持久化为可检索的流量记录，来源类型默认标记为 &#34;basic-crawler&#34;。

入库后可用 db.QueryHTTPFlowsByKeyword / db.QueryUrlsByKeyword 等检索。是“发请求 -&gt; 存证据”的常用一环：

常与 poc 库（poc.HTTP/poc.Get 返回的原始包）联动，把扫描/爬取过程中的关键请求落库供后续分析。



参数:

  - url: 请求 URL（用于建立索引；https/wss 前缀会被识别为 HTTPS 流量）

  - req: 原始 HTTP 请求字节（完整请求报文）

  - rsp: 原始 HTTP 响应字节（完整响应报文）



返回值:

  - 错误信息（项目数据库不可用或保存失败时返回）




Example:

``````````````yak
// 联动 poc：真实发起一次请求，再把原始请求/响应落库，最后检索验证
host = "doc-demo-rawflow.example.com"
reqRaw = f`GET / HTTP/1.1
Host: ${host}
User-Agent: yak-doc-demo

`
rspRaw = "HTTP/1.1 200 OK\r\nContent-Type: text/html\r\nContent-Length: 5\r\n\r\nhello"
db.SaveHTTPFlowFromRaw("http://"+host+"/", []byte(reqRaw), []byte(rspRaw))~

found = 0
for flow in db.QueryHTTPFlowsByKeyword(host) { found++; break }
println(found)   // OUT: 1
assert found == 1, "the saved flow should be retrievable by its host keyword"
``````````````


#### 定义

`SaveHTTPFlowFromRaw(url string, req []byte, rsp []byte) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` | 请求 URL（用于建立索引；https/wss 前缀会被识别为 HTTPS 流量） |
| req | `[]byte` | 原始 HTTP 请求字节（完整请求报文） |
| rsp | `[]byte` | 原始 HTTP 响应字节（完整响应报文） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息（项目数据库不可用或保存失败时返回） |


### SaveHTTPFlowFromRawWithOption

#### 详细描述
saveHTTPFlowFromRawWithOption 根据原始请求/响应及自定义选项保存一条 HTTP 流量记录（导出名为 db.SaveHTTPFlowFromRawWithOption）



是 HTTP 流量入库最灵活的接口：除请求/响应外，可追加可选项进一步描述这条流量。

目前可用的可选项：db.saveHTTPFlowWithTags(tags)，用于给流量打标签（如标记可疑、命中规则等），

标签随流量入库后可在 Yakit 历史流量中用于筛选。



参数:

  - url: 请求 URL

  - req: 原始 HTTP 请求字节

  - rsp: 原始 HTTP 响应字节

  - exOption: 额外的流量创建选项（可变参数），如 db.saveHTTPFlowWithTags(&#34;...&#34;)



返回值:

  - 错误信息（项目数据库不可用或保存失败时返回）




Example:

``````````````yak
// 给入库的流量打上标签，便于后续在历史流量中筛选
host = "doc-demo-tagged.example.com"
req = []byte(f"GET /admin HTTP/1.1\r\nHost: ${host}\r\n\r\n")
rsp = []byte("HTTP/1.1 200 OK\r\nContent-Length: 5\r\n\r\nadmin")
db.SaveHTTPFlowFromRawWithOption(
    "http://"+host+"/admin", req, rsp,
    db.saveHTTPFlowWithTags("suspicious|admin-panel"),
)~

found = 0
for flow in db.QueryHTTPFlowsByKeyword(host) { found++; break }
assert found == 1, "tagged flow should be saved and retrievable"
``````````````


#### 定义

`SaveHTTPFlowFromRawWithOption(url string, req []byte, rsp []byte, exOption ...yakit.CreateHTTPFlowOptions) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` | 请求 URL |
| req | `[]byte` | 原始 HTTP 请求字节 |
| rsp | `[]byte` | 原始 HTTP 响应字节 |
| exOption | `...yakit.CreateHTTPFlowOptions` | 额外的流量创建选项（可变参数），如 db.saveHTTPFlowWithTags(&#34;...&#34;) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息（项目数据库不可用或保存失败时返回） |


### SaveHTTPFlowFromRawWithType

#### 详细描述
saveHTTPFlowFromRawWithType 根据原始请求/响应及来源类型保存一条 HTTP 流量记录（导出名为 db.SaveHTTPFlowFromRawWithType）



与 db.SaveHTTPFlowFromRaw 相同，但可显式指定来源类型（source type），便于按来源分类检索与统计。

常见 type 取值：&#34;basic-crawler&#34;（爬虫）、&#34;mitm&#34;（中间人代理）、&#34;scan&#34;（扫描器）、自定义业务标记等。



参数:

  - url: 请求 URL

  - req: 原始 HTTP 请求字节

  - rsp: 原始 HTTP 响应字节

  - typeStr: 流量来源类型标记



返回值:

  - 错误信息（项目数据库不可用或保存失败时返回）




Example:

``````````````yak
// 同一目标的两次流量打上不同来源类型，便于后续按 type 区分
host = "doc-demo-typed.example.com"
req = []byte(f"GET / HTTP/1.1\r\nHost: ${host}\r\n\r\n")
rsp = []byte("HTTP/1.1 200 OK\r\nContent-Length: 2\r\n\r\nok")
db.SaveHTTPFlowFromRawWithType("http://"+host+"/crawl", req, rsp, "basic-crawler")~
db.SaveHTTPFlowFromRawWithType("http://"+host+"/scan",  req, rsp, "scan")~

cnt = 0
for flow in db.QueryHTTPFlowsByKeyword(host) { cnt++ }
assert cnt >= 2, "both typed flows should be saved and retrievable"
``````````````


#### 定义

`SaveHTTPFlowFromRawWithType(url string, req []byte, rsp []byte, typeStr string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` | 请求 URL |
| req | `[]byte` | 原始 HTTP 请求字节 |
| rsp | `[]byte` | 原始 HTTP 响应字节 |
| typeStr | `string` | 流量来源类型标记 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息（项目数据库不可用或保存失败时返回） |


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



payload 字典是爆破（brute）、fuzz、模糊测试等场景的弹药库。同一 group 名下的多次保存会累积入库（去重由底层处理）。

入库后用 db.YieldPayload 流式取出消费、db.GetAllPayloadGroupsName 列出所有组、db.DeletePayloadByGroup 删除整组。

payloadRaw 既可传单个字符串，也可传字符串列表；大字典建议用 db.SavePayloadByFile 直接从文件导入。



参数:

  - group: 字典组名（如 &#34;common-users&#34;、&#34;weak-passwords&#34;）

  - payloadRaw: payload 内容，支持单个字符串或字符串列表



返回值:

  - 错误信息（数据库不可用或保存失败时返回）




Example:

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


#### 定义

`SavePayload(group string, payloadRaw any) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| group | `string` | 字典组名（如 &#34;common-users&#34;、&#34;weak-passwords&#34;） |
| payloadRaw | `any` | payload 内容，支持单个字符串或字符串列表 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息（数据库不可用或保存失败时返回） |


### SavePayloadByFile

#### 详细描述
savePayloadByFile 从字典文件按行读取内容并保存到指定字典组（导出名为 db.SavePayloadByFile）



与 db.SavePayload 等价，但数据源是文件：文件每一行作为一个 payload 入库，适合导入大字典（rockyou 等）。

导入后同样用 db.YieldPayload 取出消费。



参数:

  - group: 字典组名

  - fileName: 字典文件路径（每行一个 payload）



返回值:

  - 错误信息（数据库不可用、文件不存在或读取失败时返回）




Example:

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


#### 定义

`SavePayloadByFile(group string, fileName string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| group | `string` | 字典组名 |
| fileName | `string` | 字典文件路径（每行一个 payload） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息（数据库不可用、文件不存在或读取失败时返回） |


### SavePortFromResult

#### 详细描述
savePortFromObj 从扫描结果对象提取端口信息并保存为端口资产（导出名为 db.SavePortFromResult）



这是端口/服务扫描结果落库的标准接口，直接接收各扫描器返回的结果对象，自动转换为统一的端口资产入库。

支持的对象类型：servicescan 的指纹结果(fp.MatchResult)、synscan 结果(synscan.SynScanResult)、

空间引擎结果、以及已构造的 schema.Port。可选传入 RuntimeId 把这批资产归属到某次扫描任务，

便于之后用 db.QueryPortsByRuntimeId 精确取回。入库后可用 db.QueryHostPortByNetwork 等检索。



参数:

  - t: 扫描结果对象（servicescan/synscan/空间引擎结果或 schema.Port）

  - RuntimeId: 可选的运行时 ID，用于把资产关联到具体扫描任务



返回值:

  - 错误信息（类型不支持或保存失败时返回）




Example:

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


#### 定义

`SavePortFromResult(t any, RuntimeId ...string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| t | `any` | 扫描结果对象（servicescan/synscan/空间引擎结果或 schema.Port） |
| RuntimeId | `...string` | 可选的运行时 ID，用于把资产关联到具体扫描任务 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息（类型不支持或保存失败时返回） |


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
saveYakitPlugin 将插件源码保存到本地插件数据库（导出名为 db.SaveYakitPlugin）



把一段插件源码以指定类型持久化为本地插件，之后可在 Yakit 中加载、或用 db.GetYakitPluginByName 取回。

插件类型用内置常量指定：db.YAKIT_PLUGIN_TYPE_YAK（yak 脚本）、db.YAKIT_PLUGIN_TYPE_MITM、

db.YAKIT_PLUGIN_TYPE_PORTSCAN、db.YAKIT_PLUGIN_TYPE_NUCLEI、db.YAKIT_PLUGIN_TYPE_CODEC、

db.YAKIT_PLUGIN_TYPE_PACKET_HACK。注意：scriptName 不可与已有插件重名，否则返回错误。

若只是想临时注册一个插件供调用而不长期保存，考虑 db.CreateTemporaryYakScript。



参数:

  - scriptName: 插件名称（全局唯一，重名会报错）

  - typeStr: 插件类型，使用 db.YAKIT_PLUGIN_TYPE_* 常量

  - content: 插件源码内容



返回值:

  - 错误信息（数据库不可用、重名或保存失败时返回）




Example:

``````````````yak
// 保存 -> 按名取回 -> 清理 的完整生命周期
name = "doc-demo-plugin-"+str.RandStr(6)
code = `yakit.Info("hello from saved plugin")`
db.SaveYakitPlugin(name, db.YAKIT_PLUGIN_TYPE_YAK, code)~

got = db.GetYakitPluginByName(name)~
println(got.ScriptName, got.Type)
assert got.ScriptName == name && got.Type == db.YAKIT_PLUGIN_TYPE_YAK, "saved plugin should be retrievable by name"

db.DeleteYakScriptByName(name)~   // 清理演示插件
``````````````


#### 定义

`SaveYakitPlugin(scriptName string, typeStr string, content any) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| scriptName | `string` | 插件名称（全局唯一，重名会报错） |
| typeStr | `string` | 插件类型，使用 db.YAKIT_PLUGIN_TYPE_* 常量 |
| content | `any` | 插件源码内容 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息（数据库不可用、重名或保存失败时返回） |


### ScanResult

#### 详细描述
ScanResult 执行原始 SQL 查询并把每一行转换为一个 map（导出名为 db.ScanResult）



是从任意 gorm 连接（db.OpenTempSqliteDatabase / db.OpenSqliteDatabase / db.OpenDatabase 返回的对象）

读取查询结果的标准方式。返回值是 []map，每个 map 的 key 为列名、value 为该列的值，便于直接用 row[&#34;col&#34;] 取值。

强烈建议使用 `?` 占位符传参（参数化查询），由驱动负责转义，避免拼接字符串导致的 SQL 注入。

写操作（INSERT/UPDATE/DELETE/DDL）用连接对象的 .Exec(sql, args...)，查询用本函数。



参数:

  - db: 数据库连接对象（来自 db.Open* 系列函数）

  - query: 原始 SQL 查询语句，使用 ? 作为占位符

  - args: 与占位符一一对应的参数



返回值:

  - 查询结果，每行一个 map[列名]值

  - 错误信息（连接为空或 SQL 执行失败时返回）




Example:

``````````````yak
conn = db.OpenTempSqliteDatabase()~
defer conn.Close()
conn.Exec("CREATE TABLE users(id INTEGER PRIMARY KEY, name TEXT, role TEXT)")
conn.Exec("INSERT INTO users(name, role) VALUES (?, ?)", "alice", "admin")
conn.Exec("INSERT INTO users(name, role) VALUES (?, ?)", "bob", "user")

// 参数化条件查询：只取 admin（即使传入带引号的恶意输入也安全）
admins = db.ScanResult(conn, "SELECT id, name FROM users WHERE role = ?", "admin")~
println(admins[0]["name"])   // OUT: alice
assert len(admins) == 1 && admins[0]["name"] == "alice", "parameterized query should return only admin"

// 聚合查询：统计总行数
total = db.ScanResult(conn, "SELECT COUNT(*) AS n FROM users")~
assert int(total[0]["n"]) == 2, "should count 2 users"
``````````````


#### 定义

`ScanResult(db *gorm.DB, query string, args ...any) ([]map[string]any, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| db | `*gorm.DB` | 数据库连接对象（来自 db.Open* 系列函数） |
| query | `string` | 原始 SQL 查询语句，使用 ? 作为占位符 |
| args | `...any` | 与占位符一一对应的参数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]map[string]any` | 查询结果，每行一个 map[列名]值 |
| r2 | `error` | 错误信息（连接为空或 SQL 执行失败时返回） |


### SetKey

#### 详细描述
SetKey 向 Profile（全局配置）数据库写入一个键值对（导出名为 db.SetKey）



这是 yaklang 中最常用的跨脚本/跨运行共享数据的方式。键值会持久化保存在用户级 Profile 库中，

不随项目切换而丢失，可用 db.GetKey 读取、db.DelKey 删除、db.SetKeyWithTTL 设置带过期时间的版本。

典型用途：保存扫描配置、缓存中间结果、记录上次运行状态、在多个插件之间传递数据。

注意：value 会被转成字符串存储；如需保存结构化数据（map/list），请先用 json.dumps 序列化，

读取时再用 json.loads 反序列化（见下方联动示例）。Profile 库与 db.SetProjectKey 的项目库相互隔离。



参数:

  - k: 键名，建议使用有意义且带前缀的命名（如 &#34;myscan-target&#34;）避免与其他脚本冲突

  - v: 值，任意类型，最终以字符串形式持久化



返回值:

  - 错误信息（数据库不可用或写入失败时返回）




Example:

``````````````yak
// 1) 基础读写：保存与读取扫描目标
db.SetKey("myscan-target", "192.168.1.0/24")
db.SetKey("myscan-ports", "22,80,443,3306,8080")
target = db.GetKey("myscan-target")
ports = db.GetKey("myscan-ports")
println(target)   // OUT: 192.168.1.0/24
assert target == "192.168.1.0/24" && ports == "22,80,443,3306,8080", "SetKey should persist the values"

// 2) 联动 json：用键值存储保存结构化的扫描配置
scanConfig = {"concurrent": 50, "timeout": 5, "excludes": [22, 3389]}
db.SetKey("myscan-config", json.dumps(scanConfig))
loaded = json.loads(db.GetKey("myscan-config"))
assert loaded["concurrent"] == 50 && len(loaded["excludes"]) == 2, "config should round-trip via json"

// 3) 清理
db.DelKey("myscan-target"); db.DelKey("myscan-ports"); db.DelKey("myscan-config")
``````````````


#### 定义

`SetKey(k any, v any) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| k | `any` | 键名，建议使用有意义且带前缀的命名（如 &#34;myscan-target&#34;）避免与其他脚本冲突 |
| v | `any` | 值，任意类型，最终以字符串形式持久化 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息（数据库不可用或写入失败时返回） |


### SetKeyWithTTL

#### 详细描述
SetKeyWithTTL 向 Profile 数据库写入一个带过期时间（TTL）的键值对（导出名为 db.SetKeyWithTTL）



与 db.SetKey 相同，但该键会在 ttl 秒之后自动失效，过期后 db.GetKey 返回空字符串。

典型用途：缓存有时效性的数据（如临时 token、会话 ID、限速窗口、一次性验证码），避免脏数据长期残留。



参数:

  - k: 键名

  - v: 值（以字符串形式持久化）

  - ttl: 过期时间，单位为秒



返回值:

  - 错误信息（数据库不可用或写入失败时返回）




Example:

``````````````yak
// 缓存一个有效期 60 秒的临时凭据，过期前可正常读取
db.SetKeyWithTTL("session-token", "tok-"+str.RandStr(16), 60)
tok = db.GetKey("session-token")
println(tok != "")   // OUT: true
assert tok != "", "value should be readable before it expires"

// 联动 SetKey：常见的“短期缓存 + 长期配置”组合
db.SetKey("api-endpoint", "https://api.internal/scan")          // 长期配置
db.SetKeyWithTTL("api-rate-window", "1", 2)                       // 2 秒限速窗口
assert db.GetKey("api-rate-window") == "1", "ttl key should exist initially"
db.DelKey("session-token"); db.DelKey("api-endpoint")
``````````````


#### 定义

`SetKeyWithTTL(k any, v any, ttl int) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| k | `any` | 键名 |
| v | `any` | 值（以字符串形式持久化） |
| ttl | `int` | 过期时间，单位为秒 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息（数据库不可用或写入失败时返回） |


### SetProjectKey

#### 详细描述
SetProjectKey 向当前项目数据库写入一个键值对（导出名为 db.SetProjectKey）



与 db.SetKey 用法完全一致，区别在于作用域：db.SetProjectKey 写入“当前项目”库，

切换项目后读不到（实现项目级数据隔离）；db.SetKey 写入全局 Profile 库，所有项目共享。

经验法则：与具体扫描项目强相关的数据（项目名、目标范围、本项目的中间结果）用 ProjectKey；

跨项目复用的工具配置（API 地址、字典路径、个人偏好）用 db.SetKey。同样建议用 json 存结构化数据。



参数:

  - k: 键名

  - v: 值（以字符串形式持久化）



返回值:

  - 错误信息（数据库不可用或写入失败时返回）




Example:

``````````````yak
// 保存当前项目的元信息，并与全局配置区分开
db.SetProjectKey("project-name", "WebSec-Assessment-2026")
db.SetProjectKey("project-scope", json.dumps(["example.com", "192.168.1.0/24"]))
db.SetKey("global-api-endpoint", "https://api.internal")   // 全局，跨项目共享

name = db.GetProjectKey("project-name")
scope = json.loads(db.GetProjectKey("project-scope"))
println(name)   // OUT: WebSec-Assessment-2026
assert name == "WebSec-Assessment-2026" && len(scope) == 2, "project key should persist project-scoped data"
``````````````


#### 定义

`SetProjectKey(k any, v any) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| k | `any` | 键名 |
| v | `any` | 值（以字符串形式持久化） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息（数据库不可用或写入失败时返回） |


### YieldAllAIForges

#### 详细描述
YieldAllAIForges 遍历 Profile 数据库中保存的全部 AI Forge（导出名为 db.YieldAllAIForges）

以 channel 形式逐条返回



返回值:

  - 逐条产出 AI Forge 的 channel




Example:

``````````````yak
for forge in db.YieldAllAIForges() {
    println(forge.ForgeName)
}
``````````````


#### 定义

`YieldAllAIForges() chan *schema.AIForge`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *schema.AIForge` | 逐条产出 AI Forge 的 channel |


### YieldAllAITools

#### 详细描述
YieldAllAITools 遍历 Profile 数据库中保存的全部 AI 工具（导出名为 db.YieldAllAITools）

以 channel 形式逐条返回



返回值:

  - 逐条产出 AI 工具的 channel




Example:

``````````````yak
for tool in db.YieldAllAITools() {
    println(tool.Name)
}
``````````````


#### 定义

`YieldAllAITools() chan *schema.AIYakTool`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *schema.AIYakTool` | 逐条产出 AI 工具的 channel |


### YieldAllMCPServers

#### 详细描述
YieldAllMCPServers 遍历 Profile 数据库中保存的全部 MCP Server（导出名为 db.YieldAllMCPServers）

以 channel 形式逐条返回



返回值:

  - 逐条产出 MCP Server 的 channel




Example:

``````````````yak
for server in db.YieldAllMCPServers() {
    println(server.Name)
}
``````````````


#### 定义

`YieldAllMCPServers() chan *schema.MCPServer`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *schema.MCPServer` | 逐条产出 MCP Server 的 channel |


### YieldPayload

#### 详细描述
YieldPayload 以 channel 形式流式遍历一个或多个字典组中的 payload 内容（导出名为 db.YieldPayload）



这是消费字典的标准方式：内存友好，适合大字典。可一次传入多个组名，把多个字典合并消费

（例如把若干用户名字典拼成一个候选集）。常配合爆破/fuzz 的目标循环使用。



参数:

  - raw: 字典组名

  - extra: 额外的字典组名（可变参数，用于合并多组）



返回值:

  - payload 内容的 channel，可使用 for-range 遍历




Example:

``````````````yak
// 准备两个用户名字典，合并遍历得到去重后的候选集
db.SavePayload("doc-y-a", ["admin", "root"])~
db.SavePayload("doc-y-b", ["root", "guest"])~

seen = {}
for u in db.YieldPayload("doc-y-a", "doc-y-b") { seen[u] = true }
println(len(seen))   // OUT: 3
assert len(seen) == 3, "merged unique usernames should be admin/root/guest"

// 典型联动：用字典构造 HTTP 登录请求（此处仅构造，不发送）
for u in db.YieldPayload("doc-y-a") {
    _ = f`POST /login HTTP/1.1\r\nHost: target\r\n\r\nusername=${u}&password=test`
}
db.DeletePayloadByGroup("doc-y-a"); db.DeletePayloadByGroup("doc-y-b")
``````````````


#### 定义

`YieldPayload(raw any, extra ...any) chan string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `any` | 字典组名 |
| extra | `...any` | 额外的字典组名（可变参数，用于合并多组） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan string` | payload 内容的 channel，可使用 for-range 遍历 |


### YieldYakScriptAll

#### 详细描述
_yieldYakScript 以 channel 形式流式遍历本地数据库中的全部插件（导出名为 db.YieldYakScriptAll）



枚举所有本地插件，常用于按类型/作者/标签做统计或批量处理。返回 YakScript 对象 channel，

可读取 .ScriptName / .Type / .Author / .Tags 等字段。



返回值:

  - 插件对象的 channel，可使用 for-range 遍历




Example:

``````````````yak
// 统计本地插件按类型的分布，并用饼图展示（遍历->统计->可视化 联动）
byType = {}
for script in db.YieldYakScriptAll() {
    t = script.Type
    if t in byType { byType[t] = byType[t] + 1 } else { byType[t] = 1 }
}
pie = yakit.NewPieGraph("plugin types")
for t, c in byType { pie.Add(t, c) }
yakit.Output(pie)
``````````````


#### 定义

`YieldYakScriptAll() chan *schema.YakScript`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *schema.YakScript` | 插件对象的 channel，可使用 for-range 遍历 |


### saveHTTPFlowWithTags

#### 详细描述
saveHTTPFlowWithTags 构造一个为 HTTP 流量附加标签的保存选项（导出名为 db.saveHTTPFlowWithTags）

作为保存 HTTP 流量相关接口的可选项使用，用于在入库时打上指定标签



参数:

  - tags: 要附加的标签字符串（多个标签可用分隔符拼接）



返回值:

  - HTTP 流量保存选项




Example:

``````````````yak
// 作为保存 HTTP 流量的可选项使用（示意性示例）
opt = db.saveHTTPFlowWithTags("suspicious")
``````````````


#### 定义

`saveHTTPFlowWithTags(tags string) yakit.CreateHTTPFlowOptions`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tags | `string` | 要附加的标签字符串（多个标签可用分隔符拼接） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `yakit.CreateHTTPFlowOptions` | HTTP 流量保存选项 |


