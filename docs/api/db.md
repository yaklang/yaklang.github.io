# db


|成员函数|函数描述/介绍|
|:------|:--------|
 | [db.DelKey](#dbdelkey) | 删除 Key 对应的值(数据库中) |
 | [db.DeletePayloadByGroup](#dbdeletepayloadbygroup) | 删除 Payload |
 | [db.DeleteYakitMenuItemAll](#dbdeleteyakitmenuitemall) |  |
 | [db.DownloadGeoIP](#dbdownloadgeoip) | 下载并自动解压 GeoIP |
 | [db.GetKey](#dbgetkey) | 获取持久化 Key |
 | [db.GetYakitPluginByName](#dbgetyakitpluginbyname) |  |
 | [db.QueryDomainsByDomainKeyword](#dbquerydomainsbydomainkeyword) | 根据关键字查询域名资产 |
 | [db.QueryDomainsByNetwork](#dbquerydomainsbynetwork) | 根据解析到的网段查询域名资产 |
 | [db.QueryDomainsByTitle](#dbquerydomainsbytitle) | 根据网站名查询域名 |
 | [db.QueryHTTPFlowsAll](#dbqueryhttpflowsall) | 查询所有的 HTTP 流 |
 | [db.QueryHTTPFlowsByKeyword](#dbqueryhttpflowsbykeyword) | 根据关键字插件 HTTP 流对象 |
 | [db.QueryHostPortByKeyword](#dbqueryhostportbykeyword) | 通过关键字查询 HostPort |
 | [db.QueryHostPortByNetwork](#dbqueryhostportbynetwork) | 根据网络查询 Host:Port |
 | [db.QueryHostsByDomain](#dbqueryhostsbydomain) | 根据域名查询 Hosts 资产 |
 | [db.QueryIPCity](#dbqueryipcity) | 查询 IP 对应的城市位置 |
 | [db.QueryIPForIPS](#dbqueryipforips) | 根据 IP 查询运营商 |
 | [db.QueryUrlsAll](#dbqueryurlsall) | 查询所有可用 URL |
 | [db.QueryUrlsByKeyword](#dbqueryurlsbykeyword) | 根据关键字查询 URL |
 | [db.SaveDomain](#dbsavedomain) | 保存域名 |
 | [db.SaveHTTPFlowFromNative](#dbsavehttpflowfromnative) | 从原始对象中保存 HTTP 资产 |
 | [db.SavePayload](#dbsavepayload) | 保存 Payload 到一个组 |
 | [db.SavePayloadByFile](#dbsavepayloadbyfile) | 保存 Payload 到文件 |
 | [db.SavePortFromResult](#dbsaveportfromresult) | 从某个结果中保存端口 |
 | [db.SaveYakitMenuItemByBatchExecuteConfig](#dbsaveyakitmenuitembybatchexecuteconfig) |  |
 | [db.SetKey](#dbsetkey) | 设置持久化 Key |




 



## 函数定义

### db.DelKey

删除 Key 对应的值(数据库中)

#### 详细描述



#### 定义：

``func db.DelKey(v1: any)``


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |




 

 
### db.DeletePayloadByGroup

删除 Payload

#### 详细描述



#### 定义：

`func db.DeletePayloadByGroup(group: string) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| group | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### db.DeleteYakitMenuItemAll



#### 详细描述



#### 定义：

`func db.DeleteYakitMenuItemAll() return (r0: error)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### db.DownloadGeoIP

下载并自动解压 GeoIP

#### 详细描述



#### 定义：

`func db.DownloadGeoIP() return (r0: error)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### db.GetKey

获取持久化 Key

#### 详细描述



#### 定义：

`func db.GetKey(key: any) return (r0: string)`


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

`func db.GetYakitPluginByName(v1: string) return (r0: *yakit.YakScript, r1: error)`


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

`func db.QueryDomainsByDomainKeyword(keyword: string) return (r0: chan *yakit.Domain, r1: error)`


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

`func db.QueryDomainsByNetwork(cidrNetwork: string) return (r0: chan *yakit.Domain, r1: error)`


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

`func db.QueryDomainsByTitle(title: string) return (r0: chan *yakit.Domain, r1: error)`


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

`func db.QueryHTTPFlowsAll() return (r0: chan *yakit.HTTPFlow)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `chan *yakit.HTTPFlow` |   |


 
### db.QueryHTTPFlowsByKeyword

根据关键字插件 HTTP 流对象

#### 详细描述



#### 定义：

`func db.QueryHTTPFlowsByKeyword(v1: string) return (r0: chan *yakit.HTTPFlow)`


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

`func db.QueryHostPortByKeyword(keyword: string) return (r0: chan *yakit.Host, r1: error)`


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

`func db.QueryHostPortByNetwork(network: string) return (r0: chan string)`


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

`func db.QueryHostsByDomain(v1: string) return (r0: chan *yakit.Host, r1: error)`


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

`func db.QueryIPCity(v1: string) return (r0: *geo.City, r1: error)`


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

`func db.QueryIPForIPS(v1: string) return (r0: *geo.ISP, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*geo.ISP` |   |
| r1 | `error` |   |


 
### db.QueryUrlsAll

查询所有可用 URL

#### 详细描述



#### 定义：

`func db.QueryUrlsAll() return (r0: chan string)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `chan string` |   |


 
### db.QueryUrlsByKeyword

根据关键字查询 URL

#### 详细描述



#### 定义：

`func db.QueryUrlsByKeyword(v1: string) return (r0: chan string)`


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

`func db.SaveDomain(domain: string, ipaddress ...string) return (r0: error)`


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

`func db.SaveHTTPFlowFromNative(url: string, req: *http.Request, rsp: *http.Response) return (r0: error)`


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


 
### db.SavePayload

保存 Payload 到一个组

#### 详细描述



#### 定义：

`func db.SavePayload(group: string, payload: []string) return (r0: error)`


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

`func db.SavePayloadByFile(group: string, fileName: string) return (r0: error)`


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

从某个结果中保存端口

#### 详细描述



#### 定义：

`func db.SavePortFromResult(result: any) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| result | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### db.SaveYakitMenuItemByBatchExecuteConfig



#### 详细描述



#### 定义：

`func db.SaveYakitMenuItemByBatchExecuteConfig(v1: any) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### db.SetKey

设置持久化 Key

#### 详细描述



#### 定义：

`func db.SetKey(key: any, value: any) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `any` |   |
| value | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 


