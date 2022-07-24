# yakit


|成员函数|函数描述/介绍|
|:------|:--------|
 | [yakit.AutoInitYakit](#yakitautoinityakit) | 自动初始化与 Yakit 的链接 |
 | [yakit.DeletePayloadByGroup](#yakitdeletepayloadbygroup) |  |
 | [yakit.EnableTable](#yakitenabletable) | 启动一个实时刷新的表格，一般用这个表格来收集结果 |
 | [yakit.EnableWebsiteTrees](#yakitenablewebsitetrees) | 启动在结果中启动网站树视图（案例：基础爬虫） |
 | [yakit.Error](#yakiterror) | 在 Yakit 的 UI 中输出输出 Error 级别的信息 |
 | [yakit.File](#yakitfile) |  |
 | [yakit.GenerateYakitMITMHooksParams](#yakitgenerateyakitmitmhooksparams) |  |
 | [yakit.GetHomeDir](#yakitgethomedir) |  |
 | [yakit.GetHomeTempDir](#yakitgethometempdir) |  |
 | [yakit.GetOnlineBaseUrl](#yakitgetonlinebaseurl) |  |
 | [yakit.Info](#yakitinfo) | 在 Yakit UI 中输出 Info 级别的信息 |
 | [yakit.InitYakit](#yakitinityakit) | 手动初始化 Yakit 客户端，用于自定义 |
 | [yakit.Markdown](#yakitmarkdown) |  |
 | [yakit.NewBarGraph](#yakitnewbargraph) | 创建一个柱形图 |
 | [yakit.NewClient](#yakitnewclient) | 创建一个与 yakit 通信的通道（webhook） |
 | [yakit.NewHTTPFlowRisk](#yakitnewhttpflowrisk) | 生成一个 HTTPFlow 的风险项 |
 | [yakit.NewLineGraph](#yakitnewlinegraph) | 生成线形图数据 |
 | [yakit.NewPieGraph](#yakitnewpiegraph) | 生成饼图数据 |
 | [yakit.NewTable](#yakitnewtable) | 生成表格（无法实时刷新，对比 EnableTable） |
 | [yakit.NewWordCloud](#yakitnewwordcloud) | 生成词云 |
 | [yakit.Output](#yakitoutput) | 输出任意的对象到 Yakit UI 中，如果对象是图，将会自动创建一个图，如果对象是一个其他东西，将会自动 JSON 序列化 |
 | [yakit.QueryDomainsByDomainKeyword](#yakitquerydomainsbydomainkeyword) | 从数据库中根据域名关键字查询域名 |
 | [yakit.QueryDomainsByNetwork](#yakitquerydomainsbynetwork) | 通过域名关联的 IP 查询域名 |
 | [yakit.QueryDomainsByTitle](#yakitquerydomainsbytitle) | 根据域名关联网站的标题查询域名 |
 | [yakit.QueryHTTPFlowsAll](#yakitqueryhttpflowsall) | 查询所有的 HTTPFlow，包含请求和结果的所有信息 |
 | [yakit.QueryHTTPFlowsByKeyword](#yakitqueryhttpflowsbykeyword) | 根据关键字搜索查询符合条件的 HTTPFlow |
 | [yakit.QueryHostPortAll](#yakitqueryhostportall) | 查询数据库中所有的 [host]:[port] 的形式，例如（192.168.100.1:80） |
 | [yakit.QueryHostPortByKeyword](#yakitqueryhostportbykeyword) | 根据指纹信息搜索所有符合条件的 host:port |
 | [yakit.QueryHostPortByNetwork](#yakitqueryhostportbynetwork) | 根据目标网段搜索本机的 host:port |
 | [yakit.QueryHostPortByNetworkAndPort](#yakitqueryhostportbynetworkandport) | 根据 network 和 port 查询端口 host:port 格式 |
 | [yakit.QueryHostsByDomain](#yakitqueryhostsbydomain) | 根据 Domain 查询 Host 资产 |
 | [yakit.QueryHostsByNetwork](#yakitqueryhostsbynetwork) | 根据网段查询 host 资产 |
 | [yakit.QueryPortAssetByNetwork](#yakitqueryportassetbynetwork) | 查询端口资产 |
 | [yakit.QueryUrlsAll](#yakitqueryurlsall) | 搜索数据库中所有可用的 URL (httpflows 表) |
 | [yakit.QueryUrlsByKeyword](#yakitqueryurlsbykeyword) | 查询所有带一定关键字的 URL |
 | [yakit.Report](#yakitreport) | 返回报告的内容给 Yakit |
 | [yakit.SaveDomain](#yakitsavedomain) |  |
 | [yakit.SaveHTTPFlow](#yakitsavehttpflow) | 保存 HTTP Flow 到数据库 |
 | [yakit.SavePayload](#yakitsavepayload) |  |
 | [yakit.SavePayloadByFile](#yakitsavepayloadbyfile) |  |
 | [yakit.SavePortFromResult](#yakitsaveportfromresult) | 把端口信息保存到数据库中，支持 synscan 和 servicescan 的扫描结果直接保存。 |
 | [yakit.SetOnlineBaseUrl](#yakitsetonlinebaseurl) | 设置 Yakit Online 的基础 URL |
 | [yakit.SetProgress](#yakitsetprogress) |  |
 | [yakit.SetProgressEx](#yakitsetprogressex) | 设置额外进度条的进度信息（默认进度条id为 `main`） |
 | [yakit.StatusCard](#yakitstatuscard) |  |
 | [yakit.TableData](#yakittabledata) | 为启动的 table 生成数据 |
 | [yakit.Text](#yakittext) |  |
 | [yakit.UpdateOnlineYakitStore](#yakitupdateonlineyakitstore) | 更新所有线上商店的内容 |
 | [yakit.UpdateYakitStore](#yakitupdateyakitstore) | 使用 yakit 来直接更新 yakit-store 中的插件 |
 | [yakit.UpdateYakitStoreFromGit](#yakitupdateyakitstorefromgit) | 从 Git 中更新 Yakit 商店内容 |
 | [yakit.UpdateYakitStoreLocal](#yakitupdateyakitstorelocal) |  |
 | [yakit.Warn](#yakitwarn) | 让 Yakit UI 输出告警信息 |




 



## 函数定义

### yakit.AutoInitYakit

自动初始化与 Yakit 的链接

#### 详细描述

`yakit.AutoInitYakit()` 可以自动建立与 Yakit 的连接（yakit-webhook）

#### 定义：

``func yakit.AutoInitYakit()``

 

 

 
### yakit.DeletePayloadByGroup



#### 详细描述



#### 定义：

`func yakit.DeletePayloadByGroup(v1: string) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### yakit.EnableTable

启动一个实时刷新的表格，一般用这个表格来收集结果

#### 详细描述



#### 定义：

``func yakit.EnableTable(tableName: string, columns: []string)``


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tableName | `string` |  表名，实时刷新表格的名称 |
| columns | `[]string` |  表列 |




 

 
### yakit.EnableWebsiteTrees

启动在结果中启动网站树视图（案例：基础爬虫）

#### 详细描述



#### 定义：

``func yakit.EnableWebsiteTrees(websiteKeyword: string)``


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| websiteKeyword | `string` |  生成网站树的关键字 |




 

 
### yakit.Error

在 Yakit 的 UI 中输出输出 Error 级别的信息

#### 详细描述



#### 定义：

``func yakit.Error(fmt: string, items ...any)``


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fmt | `string` |   |
| items | `...any` |   |




 

 
### yakit.File



#### 详细描述



#### 定义：

``func yakit.File(v1: string, v2 ...any)``


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...any` |   |




 

 
### yakit.GenerateYakitMITMHooksParams



#### 详细描述



#### 定义：

`func yakit.GenerateYakitMITMHooksParams(v1: string, v2: string, v3 ...yakhttp.HttpOption) return (r0: []any, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |
| v3 | `...yakhttp.HttpOption` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]any` |   |
| r1 | `error` |   |


 
### yakit.GetHomeDir



#### 详细描述



#### 定义：

`func yakit.GetHomeDir() return (r0: string)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### yakit.GetHomeTempDir



#### 详细描述



#### 定义：

`func yakit.GetHomeTempDir() return (r0: string)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### yakit.GetOnlineBaseUrl



#### 详细描述



#### 定义：

`func yakit.GetOnlineBaseUrl() return (r0: string)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### yakit.Info

在 Yakit UI 中输出 Info 级别的信息

#### 详细描述



#### 定义：

``func yakit.Info(fmt: string, items ...any)``


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fmt | `string` |   |
| items | `...any` |   |




 

 
### yakit.InitYakit

手动初始化 Yakit 客户端，用于自定义

#### 详细描述



#### 定义：

``func yakit.InitYakit(yakitClient: *yaklib.YakitClient)``


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| yakitClient | `*yaklib.YakitClient` |   |




 

 
### yakit.Markdown



#### 详细描述



#### 定义：

``func yakit.Markdown(v1: any)``


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |




 

 
### yakit.NewBarGraph

创建一个柱形图

#### 详细描述



#### 定义：

`func yakit.NewBarGraph() return (r0: *yaklib.YakitGraph)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yaklib.YakitGraph` |   |


 
### yakit.NewClient

创建一个与 yakit 通信的通道（webhook）

#### 详细描述



#### 定义：

`func yakit.NewClient(yakitWebhook: string) return (r0: *yaklib.YakitClient)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| yakitWebhook | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yaklib.YakitClient` |   |


 
### yakit.NewHTTPFlowRisk

生成一个 HTTPFlow 的风险项

#### 详细描述



#### 定义：

`func yakit.NewHTTPFlowRisk(riskName: string, isHttps: bool, url: string, req: bytes, rsp: bytes) return (r0: *yaklib.YakitHTTPFlowRisk)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| riskName | `string` |   |
| isHttps | `bool` |   |
| url | `string` |   |
| req | `bytes` |   |
| rsp | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yaklib.YakitHTTPFlowRisk` |   |


 
### yakit.NewLineGraph

生成线形图数据

#### 详细描述



#### 定义：

`func yakit.NewLineGraph() return (r0: *yaklib.YakitGraph)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yaklib.YakitGraph` |   |


 
### yakit.NewPieGraph

生成饼图数据

#### 详细描述



#### 定义：

`func yakit.NewPieGraph() return (r0: *yaklib.YakitGraph)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yaklib.YakitGraph` |   |


 
### yakit.NewTable

生成表格（无法实时刷新，对比 EnableTable）

#### 详细描述



#### 定义：

`func yakit.NewTable(v1 ...string) return (r0: *yaklib.YakitTable)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yaklib.YakitTable` |   |


 
### yakit.NewWordCloud

生成词云

#### 详细描述



#### 定义：

`func yakit.NewWordCloud() return (r0: *yaklib.YakitGraph)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yaklib.YakitGraph` |   |


 
### yakit.Output

输出任意的对象到 Yakit UI 中，如果对象是图，将会自动创建一个图，如果对象是一个其他东西，将会自动 JSON 序列化

#### 详细描述



#### 定义：

``func yakit.Output(v1: any)``


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |




 

 
### yakit.QueryDomainsByDomainKeyword

从数据库中根据域名关键字查询域名

#### 详细描述



#### 定义：

`func yakit.QueryDomainsByDomainKeyword(keyword: string) return (r0: chan *yakit.Domain, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| keyword | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `chan *yakit.Domain` |   |
| r1 | `error` |   |


 
### yakit.QueryDomainsByNetwork

通过域名关联的 IP 查询域名

#### 详细描述



#### 定义：

`func yakit.QueryDomainsByNetwork(network: string) return (r0: chan *yakit.Domain, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| network | `string` |  IP网段或IP |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `chan *yakit.Domain` |   |
| r1 | `error` |   |


 
### yakit.QueryDomainsByTitle

根据域名关联网站的标题查询域名

#### 详细描述



#### 定义：

`func yakit.QueryDomainsByTitle(title: string) return (r0: chan *yakit.Domain, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| title | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `chan *yakit.Domain` |   |
| r1 | `error` |   |


 
### yakit.QueryHTTPFlowsAll

查询所有的 HTTPFlow，包含请求和结果的所有信息

#### 详细描述



#### 定义：

`func yakit.QueryHTTPFlowsAll() return (r0: chan *yakit.HTTPFlow)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `chan *yakit.HTTPFlow` |   |


 
### yakit.QueryHTTPFlowsByKeyword

根据关键字搜索查询符合条件的 HTTPFlow

#### 详细描述



#### 定义：

`func yakit.QueryHTTPFlowsByKeyword(v1: string) return (r0: chan *yakit.HTTPFlow)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `chan *yakit.HTTPFlow` |   |


 
### yakit.QueryHostPortAll

查询数据库中所有的 [host]:[port] 的形式，例如（192.168.100.1:80）

#### 详细描述



#### 定义：

`func yakit.QueryHostPortAll() return (r0: chan string)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `chan string` |   |


 
### yakit.QueryHostPortByKeyword

根据指纹信息搜索所有符合条件的 host:port

#### 详细描述



#### 定义：

`func yakit.QueryHostPortByKeyword(keyword: string) return (r0: chan string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| keyword | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `chan string` |   |


 
### yakit.QueryHostPortByNetwork

根据目标网段搜索本机的 host:port

#### 详细描述



#### 定义：

`func yakit.QueryHostPortByNetwork(network: string) return (r0: chan string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| network | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `chan string` |   |


 
### yakit.QueryHostPortByNetworkAndPort

根据 network 和 port 查询端口 host:port 格式

#### 详细描述



#### 定义：

`func yakit.QueryHostPortByNetworkAndPort(network: string, ports: string) return (r0: chan string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| network | `string` |   |
| ports | `string` |  端口是支持范围搜索的！所以使用字符串吧！ |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `chan string` |   |


 
### yakit.QueryHostsByDomain

根据 Domain 查询 Host 资产

#### 详细描述



#### 定义：

`func yakit.QueryHostsByDomain(domain: string) return (r0: chan *yakit.Host, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| domain | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `chan *yakit.Host` |   |
| r1 | `error` |   |


 
### yakit.QueryHostsByNetwork

根据网段查询 host 资产

#### 详细描述



#### 定义：

`func yakit.QueryHostsByNetwork(network: string) return (r0: chan *yakit.Host, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| network | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `chan *yakit.Host` |   |
| r1 | `error` |   |


 
### yakit.QueryPortAssetByNetwork

查询端口资产

#### 详细描述



#### 定义：

`func yakit.QueryPortAssetByNetwork(network: string) return (channel: chan *yakit.Port, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| network | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| channel | `chan *yakit.Port` |   |
| r1 | `error` |   |


 
### yakit.QueryUrlsAll

搜索数据库中所有可用的 URL (httpflows 表)

#### 详细描述



#### 定义：

`func yakit.QueryUrlsAll() return (r0: chan string)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `chan string` |   |


 
### yakit.QueryUrlsByKeyword

查询所有带一定关键字的 URL

#### 详细描述



#### 定义：

`func yakit.QueryUrlsByKeyword(keyword: string) return (r0: chan string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| keyword | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `chan string` |   |


 
### yakit.Report

返回报告的内容给 Yakit

#### 详细描述



#### 定义：

``func yakit.Report(生成的报告的 ID: int)``


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| 生成的报告的 ID | `int` |   |




 

 
### yakit.SaveDomain



#### 详细描述



#### 定义：

`func yakit.SaveDomain(v1: string, v2 ...string) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### yakit.SaveHTTPFlow

保存 HTTP Flow 到数据库

#### 详细描述



#### 定义：

`func yakit.SaveHTTPFlow(isHttps: string, request: *http.Request, response: *http.Response) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| isHttps | `string` |  该 HTTP 流对象是不是 HTTPS 加密的。 |
| request | `*http.Request` |   |
| response | `*http.Response` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### yakit.SavePayload



#### 详细描述



#### 定义：

`func yakit.SavePayload(v1: string, v2: []string) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `[]string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### yakit.SavePayloadByFile



#### 详细描述



#### 定义：

`func yakit.SavePayloadByFile(v1: string, v2: string) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### yakit.SavePortFromResult

把端口信息保存到数据库中，支持 synscan 和 servicescan 的扫描结果直接保存。

#### 详细描述



#### 定义：

`func yakit.SavePortFromResult(result: any) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| result | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### yakit.SetOnlineBaseUrl

设置 Yakit Online 的基础 URL

#### 详细描述



#### 定义：

``func yakit.SetOnlineBaseUrl(v1: string)``


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |




 

 
### yakit.SetProgress



#### 详细描述

设置默认进度条的进度信息

#### 定义：

``func yakit.SetProgress(progress: float64)``


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| progress | `float64` |   |




 

 
### yakit.SetProgressEx

设置额外进度条的进度信息（默认进度条id为 `main`）

#### 详细描述



#### 定义：

``func yakit.SetProgressEx(progressName: string, percent: float64)``


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| progressName | `string` |   |
| percent | `float64` |   |




 

 
### yakit.StatusCard



#### 详细描述



#### 定义：

``func yakit.StatusCard(statusName: string, statusValue: any, tags ...string)``


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| statusName | `string` |   |
| statusValue | `any` |   |
| tags | `...string` |   |




 

 
### yakit.TableData

为启动的 table 生成数据

#### 详细描述



#### 定义：

`func yakit.TableData(tableName: string, data: map[string]any) return (r0: *yaklib.YakitFixedTableData)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tableName | `string` |   |
| data | `map[string]any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yaklib.YakitFixedTableData` |   |


 
### yakit.Text



#### 详细描述



#### 定义：

``func yakit.Text(v1: any)``


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |




 

 
### yakit.UpdateOnlineYakitStore

更新所有线上商店的内容

#### 详细描述



#### 定义：

`func yakit.UpdateOnlineYakitStore() return (r0: error)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### yakit.UpdateYakitStore

使用 yakit 来直接更新 yakit-store 中的插件

#### 详细描述



#### 定义：

`func yakit.UpdateYakitStore() return (r0: error)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### yakit.UpdateYakitStoreFromGit

从 Git 中更新 Yakit 商店内容

#### 详细描述



#### 定义：

`func yakit.UpdateYakitStoreFromGit(ctx: context.Context, url: string, proxy ...string) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` |   |
| url | `string` |   |
| proxy | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### yakit.UpdateYakitStoreLocal



#### 详细描述



#### 定义：

`func yakit.UpdateYakitStoreLocal(v1: string) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### yakit.Warn

让 Yakit UI 输出告警信息

#### 详细描述



#### 定义：

``func yakit.Warn(v1: string, v2 ...any)``


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...any` |   |




 

 


