# crawlerx


|成员函数|函数描述/介绍|
|:------|:--------|
 | [crawlerx.PageScreenShot](#crawlerxpagescreenshot) |  |
 | [crawlerx.StartCrawler](#crawlerxstartcrawler) |  |
 | [crawlerx.StartCrawlerV2](#crawlerxstartcrawlerv2) |  |
 | [crawlerx.blackList](#crawlerxblacklist) |  |
 | [crawlerx.checkDanger](#crawlerxcheckdanger) |  |
 | [crawlerx.chromeWS](#crawlerxchromews) |  |
 | [crawlerx.concurrent](#crawlerxconcurrent) |  |
 | [crawlerx.cookie](#crawlerxcookie) |  |
 | [crawlerx.cookies](#crawlerxcookies) |  |
 | [crawlerx.extraHeaders](#crawlerxextraheaders) |  |
 | [crawlerx.formFill](#crawlerxformfill) |  |
 | [crawlerx.fullTimeout](#crawlerxfulltimeout) |  |
 | [crawlerx.header](#crawlerxheader) |  |
 | [crawlerx.headers](#crawlerxheaders) |  |
 | [crawlerx.maxDepth](#crawlerxmaxdepth) |  |
 | [crawlerx.maxUrl](#crawlerxmaxurl) |  |
 | [crawlerx.proxy](#crawlerxproxy) |  |
 | [crawlerx.remote](#crawlerxremote) |  |
 | [crawlerx.scanRange](#crawlerxscanrange) |  |
 | [crawlerx.scanRepeat](#crawlerxscanrepeat) |  |
 | [crawlerx.tags](#crawlerxtags) |  |
 | [crawlerx.timeout](#crawlerxtimeout) |  |
 | [crawlerx.whiteList](#crawlerxwhitelist) |  |




## 变量定义

|变量调用名|变量类型|变量解释/帮助信息|
|:-----------|:---------- |:-----------|
|`crawlerx.AllDomainScan`|`int`| //|
|`crawlerx.HighRepeatLevel`|`int`| //|
|`crawlerx.LowRepeatLevel`|`int`| //|
|`crawlerx.MediumRepeatLevel`|`int`| //|
|`crawlerx.SubMenuScan`|`int`| //|
|`crawlerx.TargetUrlScan`|`int`| //|
|`crawlerx.UnLimitRepeat`|`int`| //|





## 函数定义

### crawlerx.PageScreenShot



#### 详细描述



#### 定义：

`func crawlerx.PageScreenShot(v1: string, v2 ...core.ConfigOpt) return (r0: string, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...core.ConfigOpt` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |
| r1 | `error` |   |


 
### crawlerx.StartCrawler



#### 详细描述



#### 定义：

`StartCrawler(url string, opts ...core.ConfigOpt) (chan core.ReqInfo, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...core.ConfigOpt` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `chan core.ReqInfo` |   |
| r1 | `error` |   |


 
### crawlerx.StartCrawlerV2



#### 详细描述



#### 定义：

`StartCrawlerV2(url string, opts ...core.ConfigOpt) error`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...core.ConfigOpt` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### crawlerx.blackList



#### 详细描述



#### 定义：

`blackList(string) core.ConfigOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *core.Config) ` |   |


 
### crawlerx.checkDanger



#### 详细描述



#### 定义：

`checkDanger() core.ConfigOpt`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *core.Config) ` |   |


 
### crawlerx.chromeWS



#### 详细描述



#### 定义：

`chromeWS(string) core.ConfigOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *core.Config) ` |   |


 
### crawlerx.concurrent



#### 详细描述



#### 定义：

`concurrent(int) core.ConfigOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *core.Config) ` |   |


 
### crawlerx.cookie



#### 详细描述



#### 定义：

`cookie(string, string, string) core.ConfigOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |
| v3 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *core.Config) ` |   |


 
### crawlerx.cookies



#### 详细描述



#### 定义：

`cookies(string, map[string]string) core.ConfigOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `map[string]string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *core.Config) ` |   |


 
### crawlerx.extraHeaders



#### 详细描述



#### 定义：

`extraHeaders(...string) core.ConfigOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *core.Config) ` |   |


 
### crawlerx.formFill



#### 详细描述



#### 定义：

`formFill(string, string) core.ConfigOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *core.Config) ` |   |


 
### crawlerx.fullTimeout



#### 详细描述



#### 定义：

`fullTimeout(int) core.ConfigOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *core.Config) ` |   |


 
### crawlerx.header



#### 详细描述



#### 定义：

`header(string, string) core.ConfigOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *core.Config) ` |   |


 
### crawlerx.headers



#### 详细描述



#### 定义：

`headers(map[string]string) core.ConfigOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `map[string]string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *core.Config) ` |   |


 
### crawlerx.maxDepth



#### 详细描述



#### 定义：

`maxDepth(int) core.ConfigOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *core.Config) ` |   |


 
### crawlerx.maxUrl



#### 详细描述



#### 定义：

`maxUrl(int) core.ConfigOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *core.Config) ` |   |


 
### crawlerx.proxy



#### 详细描述



#### 定义：

`proxy(string, ...string) core.ConfigOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *core.Config) ` |   |


 
### crawlerx.remote



#### 详细描述



#### 定义：

`remote(bool) core.ConfigOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *core.Config) ` |   |


 
### crawlerx.scanRange



#### 详细描述



#### 定义：

`scanRange(int) core.ConfigOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *core.Config) ` |   |


 
### crawlerx.scanRepeat



#### 详细描述



#### 定义：

`scanRepeat(int) core.ConfigOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *core.Config) ` |   |


 
### crawlerx.tags



#### 详细描述



#### 定义：

`tags(string) core.ConfigOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *core.Config) ` |   |


 
### crawlerx.timeout



#### 详细描述



#### 定义：

`timeout(int) core.ConfigOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *core.Config) ` |   |


 
### crawlerx.whiteList



#### 详细描述



#### 定义：

`whiteList(string) core.ConfigOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *core.Config) ` |   |


 


