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
 | [yakit.SavePortFromResult](#yakitsaveportfromresult) |  |
 | [yakit.SetOnlineBaseUrl](#yakitsetonlinebaseurl) | 设置 Yakit Online 的基础 URL |
 | [yakit.SetProgress](#yakitsetprogress) |  |
 | [yakit.SetProgressEx](#yakitsetprogressex) | 设置额外进度条的进度信息（默认进度条id为 `main`） |
 | [yakit.StatusCard](#yakitstatuscard) |  |
 | [yakit.TableData](#yakittabledata) |  |
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

`AutoInitYakit()`

 

 

 
### yakit.DeletePayloadByGroup



#### 详细描述



#### 定义：

`DeletePayloadByGroup(group string) error`


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

`EnableTable(tableName string, columns []string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tableName | `string` |  表名，实时刷新表格的名称 |
| columns | `[]string` |  表列 |




 

 
### yakit.EnableWebsiteTrees

启动在结果中启动网站树视图（案例：基础爬虫）

#### 详细描述



#### 定义：

`EnableWebsiteTrees(targets string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| websiteKeyword | `string` |  生成网站树的关键字 |




 

 
### yakit.Error

在 Yakit 的 UI 中输出输出 Error 级别的信息

#### 详细描述



#### 定义：

`Error(tmp string, items ...any)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fmt | `string` |   |
| items | `...any` |   |




 

 
### yakit.File



#### 详细描述



#### 定义：

`File(fileName string, desc ...any)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...any` |   |




 

 
### yakit.GenerateYakitMITMHooksParams



#### 详细描述



#### 定义：

`GenerateYakitMITMHooksParams(method string, url string, opts ...yakhttp.HttpOption) ([]any, error)`


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

`GetHomeDir() string`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### yakit.GetHomeTempDir



#### 详细描述



#### 定义：

`GetHomeTempDir() string`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### yakit.GetOnlineBaseUrl



#### 详细描述



#### 定义：

`GetOnlineBaseUrl() string`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### yakit.Info

在 Yakit UI 中输出 Info 级别的信息

#### 详细描述



#### 定义：

`Info(tmp string, items ...any)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fmt | `string` |   |
| items | `...any` |   |




 

 
### yakit.InitYakit

手动初始化 Yakit 客户端，用于自定义

#### 详细描述



#### 定义：

`InitYakit(y *YakitClient)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| yakitClient | `*yaklib.YakitClient` |   |




 

 
### yakit.Markdown



#### 详细描述



#### 定义：

`Markdown(tmp any)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |




 

 
### yakit.NewBarGraph

创建一个柱形图

#### 详细描述



#### 定义：

`NewBarGraph() *yaklib.YakitGraph`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yaklib.YakitGraph` |   |


 
### yakit.NewClient

创建一个与 yakit 通信的通道（webhook）

#### 详细描述



#### 定义：

`NewClient(string) *yaklib.YakitClient`


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

`NewHTTPFlowRisk(string, bool, string, []uint8, []uint8) *yaklib.YakitHTTPFlowRisk`


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

`NewLineGraph() *yaklib.YakitGraph`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yaklib.YakitGraph` |   |


 
### yakit.NewPieGraph

生成饼图数据

#### 详细描述



#### 定义：

`NewPieGraph() *yaklib.YakitGraph`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yaklib.YakitGraph` |   |


 
### yakit.NewTable

生成表格（无法实时刷新，对比 EnableTable）

#### 详细描述



#### 定义：

`NewTable(...string) *yaklib.YakitTable`


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

`NewWordCloud() *yaklib.YakitGraph`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yaklib.YakitGraph` |   |


 
### yakit.Output

输出任意的对象到 Yakit UI 中，如果对象是图，将会自动创建一个图，如果对象是一个其他东西，将会自动 JSON 序列化

#### 详细描述



#### 定义：

`Output(i any)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |




 

 
### yakit.QueryDomainsByDomainKeyword

从数据库中根据域名关键字查询域名

#### 详细描述



#### 定义：

`QueryDomainsByDomainKeyword(keyword string) (chan *yakit.Domain, error)`


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

`QueryDomainsByNetwork(network string) (chan *yakit.Domain, error)`


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

`QueryDomainsByTitle(title string) (chan *yakit.Domain, error)`


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

`QueryHTTPFlowsAll() chan *yakit.HTTPFlow`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `chan *yakit.HTTPFlow` |   |


 
### yakit.QueryHTTPFlowsByKeyword

根据关键字搜索查询符合条件的 HTTPFlow

#### 详细描述



#### 定义：

`QueryHTTPFlowsByKeyword(k string) chan *yakit.HTTPFlow`


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

`QueryHostPortAll() chan string`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `chan string` |   |


 
### yakit.QueryHostPortByKeyword

根据指纹信息搜索所有符合条件的 host:port

#### 详细描述



#### 定义：

`QueryHostPortByKeyword(target string) chan string`


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

`QueryHostPortByNetwork(network string) chan string`


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

`QueryHostPortByNetworkAndPort(network, port string) chan string`


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

`QueryHostsByDomain(keyword string) (chan *yakit.Host, error)`


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

`QueryHostsByNetwork(network string) (chan *yakit.Host, error)`


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

`QueryPortAssetByNetwork(network string) (chan *yakit.Port, error)`


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

`QueryUrlsAll() chan string`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `chan string` |   |


 
### yakit.QueryUrlsByKeyword

查询所有带一定关键字的 URL

#### 详细描述



#### 定义：

`QueryUrlsByKeyword(k string) chan string`


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

`Report(i int)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| 生成的报告的 ID | `int` |   |




 

 
### yakit.SaveDomain



#### 详细描述



#### 定义：

`SaveDomain(domain string, ip ...string) error`


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

`SaveHTTPFlow(url string, req *http.Request, rsp *http.Response) error`


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

`SavePayload(group string, payloads []string) error`


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

`SavePayloadByFile(group string, fileName string) error`


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



#### 详细描述



#### 定义：

`SavePortFromResult(t any) error`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### yakit.SetOnlineBaseUrl

设置 Yakit Online 的基础 URL

#### 详细描述



#### 定义：

`SetOnlineBaseUrl(u string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |




 

 
### yakit.SetProgress



#### 详细描述

设置默认进度条的进度信息

#### 定义：

`SetProgress(f float64)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| progress | `float64` |   |




 

 
### yakit.SetProgressEx

设置额外进度条的进度信息（默认进度条id为 `main`）

#### 详细描述



#### 定义：

`SetProgressEx(id string, f float64)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| progressName | `string` |   |
| percent | `float64` |   |




 

 
### yakit.StatusCard



#### 详细描述



#### 定义：

`StatusCard(id string, data any, tags ...string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| statusName | `string` |   |
| statusValue | `any` |   |
| tags | `...string` |   |




 

 
### yakit.TableData



#### 详细描述



#### 定义：

`TableData(string, map[string]any) *yaklib.YakitFixedTableData`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yaklib.YakitFixedTableData` |   |


 
### yakit.Text



#### 详细描述



#### 定义：

`Text(tmp any)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |




 

 
### yakit.UpdateOnlineYakitStore

更新所有线上商店的内容

#### 详细描述



#### 定义：

`UpdateOnlineYakitStore() error`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### yakit.UpdateYakitStore

使用 yakit 来直接更新 yakit-store 中的插件

#### 详细描述



#### 定义：

`UpdateYakitStore() error`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### yakit.UpdateYakitStoreFromGit

从 Git 中更新 Yakit 商店内容

#### 详细描述



#### 定义：

`UpdateYakitStoreFromGit(
	ctx context.Context, ghUrl string,
	proxy ...string,
) error`


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

`UpdateYakitStoreLocal(f string) error`


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

`Warn(tmp string, items ...any)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...any` |   |




 

 


