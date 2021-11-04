# yakit


|成员函数|函数描述/介绍|
|:------|:--------|
 | [yakit.AutoInitYakit](#yakitautoinityakit) | 自动初始化与 Yakit 的链接 |
 | [yakit.EnableWebsiteTrees](#yakitenablewebsitetrees) | 启动在结果中启动网站树视图（案例：基础爬虫） |
 | [yakit.Error](#yakiterror) | 在 Yakit 的 UI 中输出输出 Error 级别的信息 |
 | [yakit.Info](#yakitinfo) | 在 Yakit UI 中输出 Info 级别的信息 |
 | [yakit.InitYakit](#yakitinityakit) | 手动初始化 Yakit 客户端，用于自定义 |
 | [yakit.NewBarGraph](#yakitnewbargraph) | yakit 平台绘制一个图 |
 | [yakit.NewClient](#yakitnewclient) | 创建一个与 yakit 通信的通道（webhook） |
 | [yakit.NewLineGraph](#yakitnewlinegraph) | 创建一个折线图 |
 | [yakit.NewPieGraph](#yakitnewpiegraph) | 创建一个饼图 |
 | [yakit.NewTable](#yakitnewtable) | 创建一个表格 |
 | [yakit.NewWordCloud](#yakitnewwordcloud) | 创建一个词云图（yakit） |
 | [yakit.Output](#yakitoutput) | 输出任意的对象到 Yakit UI 中，如果对象是图，将会自动创建一个图，如果对象是一个其他东西，将会自动 JSON 序列化 |
 | [yakit.QueryHTTPFlowsAll](#yakitqueryhttpflowsall) | 查询所有的 HTTPFlow，包含请求和结果的所有信息 |
 | [yakit.QueryHTTPFlowsByKeyword](#yakitqueryhttpflowsbykeyword) | 根据关键字搜索查询符合条件的 HTTPFlow |
 | [yakit.QueryHostPortAll](#yakitqueryhostportall) | 查询数据库中所有的 [host]:[port] 的形式，例如（192.168.100.1:80） |
 | [yakit.QueryHostPortByKeyword](#yakitqueryhostportbykeyword) | 根据指纹信息搜索所有符合条件的 host:port |
 | [yakit.QueryHostPortByNetwork](#yakitqueryhostportbynetwork) | 根据目标网段搜索本机的 host:port |
 | [yakit.QueryHostPortByNetworkAndPort](#yakitqueryhostportbynetworkandport) | 根据 network 和 port 查询端口 host:port 格式 |
 | [yakit.QueryPortAssetByNetwork](#yakitqueryportassetbynetwork) | 查询端口资产 |
 | [yakit.QueryUrlsAll](#yakitqueryurlsall) | 搜索数据库中所有可用的 URL (httpflows 表) |
 | [yakit.QueryUrlsByKeyword](#yakitqueryurlsbykeyword) | 查询所有带一定关键字的 URL |
 | [yakit.SaveHTTPFlow](#yakitsavehttpflow) | 保存 HTTP Flow 到数据库 |
 | [yakit.SavePortFromResult](#yakitsaveportfromresult) | 把端口信息保存到数据库中，支持 synscan 和 servicescan 的扫描结果直接保存。 |
 | [yakit.SetProgress](#yakitsetprogress) |  |
 | [yakit.SetProgressEx](#yakitsetprogressex) | 设置额外进度条的进度信息（默认进度条id为 `main`） |
 | [yakit.UpdateYakitStore](#yakitupdateyakitstore) | 使用 yakit 来直接更新 yakit-store 中的插件 |
 | [yakit.Warn](#yakitwarn) | 让 Yakit UI 输出告警信息 |




 



## 函数定义

### yakit.AutoInitYakit

自动初始化与 Yakit 的链接

#### 详细描述

`yakit.AutoInitYakit()` 可以自动建立与 Yakit 的连接（yakit-webhook）

#### 定义：

``func yakit.AutoInitYakit()``

 

 

 
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




 

 
### yakit.NewBarGraph

yakit 平台绘制一个图

#### 详细描述



#### 定义：

`func yakit.NewBarGraph() return (r0: *yaklib.yakitGraph)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yaklib.yakitGraph` |   |


 
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


 
### yakit.NewLineGraph

创建一个折线图

#### 详细描述



#### 定义：

`func yakit.NewLineGraph() return (r0: *yaklib.yakitGraph)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yaklib.yakitGraph` |   |


 
### yakit.NewPieGraph

创建一个饼图

#### 详细描述



#### 定义：

`func yakit.NewPieGraph() return (r0: *yaklib.yakitGraph)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yaklib.yakitGraph` |   |


 
### yakit.NewTable

创建一个表格

#### 详细描述



#### 定义：

`func yakit.NewTable(tableHeaders ...string) return (r0: *yaklib.yakitTable)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tableHeaders | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yaklib.yakitTable` |   |


 
### yakit.NewWordCloud

创建一个词云图（yakit）

#### 详细描述



#### 定义：

`func yakit.NewWordCloud() return (r0: *yaklib.yakitGraph)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yaklib.yakitGraph` |   |


 
### yakit.Output

输出任意的对象到 Yakit UI 中，如果对象是图，将会自动创建一个图，如果对象是一个其他东西，将会自动 JSON 序列化

#### 详细描述



#### 定义：

``func yakit.Output(v1: any)``


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |




 

 
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

``func yakit.SetProgressEx(v1: string, v2: float64)``


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `float64` |   |




 

 
### yakit.UpdateYakitStore

使用 yakit 来直接更新 yakit-store 中的插件

#### 详细描述



#### 定义：

`func yakit.UpdateYakitStore() return (r0: error)`

 


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




 

 


