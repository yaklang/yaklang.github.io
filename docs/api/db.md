# db


|成员函数|函数描述/介绍|
|:------|:--------|
 | [db.DelKey](#dbdelkey) | 删除 Key 对应的值(数据库中) |
 | [db.DeletePayloadByGroup](#dbdeletepayloadbygroup) | 删除 Payload |
 | [db.DeleteYakScriptByName](#dbdeleteyakscriptbyname) |  |
 | [db.DeleteYakitMenuItemAll](#dbdeleteyakitmenuitemall) |  |
 | [db.DownloadGeoIP](#dbdownloadgeoip) | 下载并自动解压 GeoIP |
 | [db.GetKey](#dbgetkey) | 获取持久化 Key |
 | [db.GetYakitPluginByName](#dbgetyakitpluginbyname) |  |
 | [db.QueryDomainsByDomainKeyword](#dbquerydomainsbydomainkeyword) | 根据关键字查询域名资产 |
 | [db.QueryDomainsByNetwork](#dbquerydomainsbynetwork) | 根据解析到的网段查询域名资产 |
 | [db.QueryDomainsByTitle](#dbquerydomainsbytitle) | 根据网站名查询域名 |
 | [db.QueryHTTPFlowsAll](#dbqueryhttpflowsall) | 查询所有的 HTTP 流 |
 | [db.QueryHTTPFlowsByID](#dbqueryhttpflowsbyid) |  |
 | [db.QueryHTTPFlowsByKeyword](#dbqueryhttpflowsbykeyword) | 根据关键字插件 HTTP 流对象 |
 | [db.QueryHostPortByKeyword](#dbqueryhostportbykeyword) | 通过关键字查询 HostPort |
 | [db.QueryHostPortByNetwork](#dbqueryhostportbynetwork) | 根据网络查询 Host:Port |
 | [db.QueryHostsByDomain](#dbqueryhostsbydomain) | 根据域名查询 Hosts 资产 |
 | [db.QueryIPCity](#dbqueryipcity) | 查询 IP 对应的城市位置 |
 | [db.QueryIPForIPS](#dbqueryipforips) | 根据 IP 查询运营商 |
 | [db.QueryPayloadGroups](#dbquerypayloadgroups) |  |
 | [db.QueryPortsByTaskName](#dbqueryportsbytaskname) |  |
 | [db.QueryPortsByUpdatedAt](#dbqueryportsbyupdatedat) |  |
 | [db.QueryUrlsAll](#dbqueryurlsall) | 查询所有可用 URL |
 | [db.QueryUrlsByKeyword](#dbqueryurlsbykeyword) | 根据关键字查询 URL |
 | [db.SaveDomain](#dbsavedomain) | 保存域名 |
 | [db.SaveHTTPFlowFromNative](#dbsavehttpflowfromnative) | 从原始对象中保存 HTTP 资产 |
 | [db.SaveHTTPFlowFromNativeWithType](#dbsavehttpflowfromnativewithtype) |  |
 | [db.SavePayload](#dbsavepayload) | 保存 Payload 到一个组 |
 | [db.SavePayloadByFile](#dbsavepayloadbyfile) | 保存 Payload 到文件 |
 | [db.SavePortFromResult](#dbsaveportfromresult) |  |
 | [db.SaveYakitMenuItemByBatchExecuteConfig](#dbsaveyakitmenuitembybatchexecuteconfig) |  |
 | [db.SaveYakitPlugin](#dbsaveyakitplugin) |  |
 | [db.SetKey](#dbsetkey) | 设置持久化 Key |
 | [db.YieldYakScriptAll](#dbyieldyakscriptall) |  |




## 变量定义

|变量调用名|变量类型|变量解释/帮助信息|
|:-----------|:---------- |:-----------|
|`db.YAKIT_PLUGIN_TYPE_CODEC`|`string`| //|
|`db.YAKIT_PLUGIN_TYPE_MITM`|`string`| //|
|`db.YAKIT_PLUGIN_TYPE_NUCLEI`|`string`| //|
|`db.YAKIT_PLUGIN_TYPE_PACKET_HACK`|`string`| //|
|`db.YAKIT_PLUGIN_TYPE_PORTSCAN`|`string`| //|
|`db.YAKIT_PLUGIN_TYPE_YAK`|`string`| //|





## 函数定义

### db.DelKey

删除 Key 对应的值(数据库中)

#### 详细描述



#### 定义：

`DelKey(any)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |




 

 
### db.DeletePayloadByGroup

删除 Payload

#### 详细描述



#### 定义：

`DeletePayloadByGroup(group string) error`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| group | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### db.DeleteYakScriptByName



#### 详细描述



#### 定义：

`DeleteYakScriptByName(i string) error`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### db.DeleteYakitMenuItemAll



#### 详细描述



#### 定义：

`DeleteYakitMenuItemAll() error`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### db.DownloadGeoIP

下载并自动解压 GeoIP

#### 详细描述



#### 定义：

`DownloadGeoIP() error`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### db.GetKey

获取持久化 Key

#### 详细描述



#### 定义：

`GetKey(any) string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### db.GetYakitPluginByName



#### 详细描述



#### 定义：

`GetYakitPluginByName(name string) (*yakit.YakScript, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yakit.YakScript` |   |
| r1 | `error` |   |


 
### db.QueryDomainsByDomainKeyword

根据关键字查询域名资产

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


 
### db.QueryDomainsByNetwork

根据解析到的网段查询域名资产

#### 详细描述



#### 定义：

`QueryDomainsByNetwork(network string) (chan *yakit.Domain, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cidrNetwork | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `chan *yakit.Domain` |   |
| r1 | `error` |   |


 
### db.QueryDomainsByTitle

根据网站名查询域名

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


 
### db.QueryHTTPFlowsAll

查询所有的 HTTP 流

#### 详细描述



#### 定义：

`QueryHTTPFlowsAll() chan *yakit.HTTPFlow`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `chan *yakit.HTTPFlow` |   |


 
### db.QueryHTTPFlowsByID



#### 详细描述



#### 定义：

`QueryHTTPFlowsByID(id ...int64) chan *yakit.HTTPFlow`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...int64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `chan *yakit.HTTPFlow` |   |


 
### db.QueryHTTPFlowsByKeyword

根据关键字插件 HTTP 流对象

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


 
### db.QueryHostPortByKeyword

通过关键字查询 HostPort

#### 详细描述



#### 定义：

`QueryHostPortByKeyword(network string) (chan *yakit.Host, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| keyword | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `chan *yakit.Host` |   |
| r1 | `error` |   |


 
### db.QueryHostPortByNetwork

根据网络查询 Host:Port

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


 
### db.QueryHostsByDomain

根据域名查询 Hosts 资产

#### 详细描述



#### 定义：

`QueryHostsByDomain(keyword string) (chan *yakit.Host, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `chan *yakit.Host` |   |
| r1 | `error` |   |


 
### db.QueryIPCity

查询 IP 对应的城市位置

#### 详细描述



#### 定义：

`QueryIPCity(ip string) (*geo.City, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*geo.City` |   |
| r1 | `error` |   |


 
### db.QueryIPForIPS

根据 IP 查询运营商

#### 详细描述



#### 定义：

`QueryIPForIPS(ip string) (*geo.ISP, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*geo.ISP` |   |
| r1 | `error` |   |


 
### db.QueryPayloadGroups



#### 详细描述



#### 定义：

`QueryPayloadGroups(group string) []string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### db.QueryPortsByTaskName



#### 详细描述



#### 定义：

`func db.QueryPortsByTaskName(v1: string) return (r0: chan *yakit.Port, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `chan *yakit.Port` |   |
| r1 | `error` |   |


 
### db.QueryPortsByUpdatedAt



#### 详细描述



#### 定义：

`func db.QueryPortsByUpdatedAt(v1: int64) return (r0: chan *yakit.Port, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `chan *yakit.Port` |   |
| r1 | `error` |   |


 
### db.QueryUrlsAll

查询所有可用 URL

#### 详细描述



#### 定义：

`QueryUrlsAll() chan string`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `chan string` |   |


 
### db.QueryUrlsByKeyword

根据关键字查询 URL

#### 详细描述



#### 定义：

`QueryUrlsByKeyword(k string) chan string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `chan string` |   |


 
### db.SaveDomain

保存域名

#### 详细描述



#### 定义：

`SaveDomain(domain string, ip ...string) error`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| domain | `string` |   |
| ipaddress | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### db.SaveHTTPFlowFromNative

从原始对象中保存 HTTP 资产

#### 详细描述



#### 定义：

`SaveHTTPFlowFromNative(url string, req *http.Request, rsp *http.Response) error`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` |   |
| req | `*http.Request` |   |
| rsp | `*http.Response` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### db.SaveHTTPFlowFromNativeWithType



#### 详细描述



#### 定义：

`SaveHTTPFlowFromNativeWithType(url string, req *http.Request, rsp *http.Response, typeStr string) error`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `*http.Request` |   |
| v3 | `*http.Response` |   |
| v4 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### db.SavePayload

保存 Payload 到一个组

#### 详细描述



#### 定义：

`SavePayload(group string, payloads []string) error`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| group | `string` |   |
| payload | `[]string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### db.SavePayloadByFile

保存 Payload 到文件

#### 详细描述



#### 定义：

`SavePayloadByFile(group string, fileName string) error`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| group | `string` |   |
| fileName | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### db.SavePortFromResult



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


 
### db.SaveYakitMenuItemByBatchExecuteConfig



#### 详细描述



#### 定义：

`SaveYakitMenuItemByBatchExecuteConfig(raw any) error`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### db.SaveYakitPlugin



#### 详细描述



#### 定义：

`SaveYakitPlugin(scriptName string, typeStr string, content any) error`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |
| v3 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### db.SetKey

设置持久化 Key

#### 详细描述



#### 定义：

`SetKey(any, any) error`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `any` |   |
| value | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### db.YieldYakScriptAll



#### 详细描述



#### 定义：

`YieldYakScriptAll() chan *yakit.YakScript`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `chan *yakit.YakScript` |   |


 


