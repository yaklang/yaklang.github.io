# crawlerx


|成员函数|函数描述/介绍|
|:------|:--------|
 | [crawlerx.StartCrawler](#crawlerxstartcrawler) |  |
 | [crawlerx.blackList](#crawlerxblacklist) |  |
 | [crawlerx.checkDanger](#crawlerxcheckdanger) |  |
 | [crawlerx.concurrent](#crawlerxconcurrent) |  |
 | [crawlerx.cookie](#crawlerxcookie) |  |
 | [crawlerx.cookies](#crawlerxcookies) |  |
 | [crawlerx.formFill](#crawlerxformfill) |  |
 | [crawlerx.fullTimeout](#crawlerxfulltimeout) |  |
 | [crawlerx.header](#crawlerxheader) |  |
 | [crawlerx.headers](#crawlerxheaders) |  |
 | [crawlerx.maxDepth](#crawlerxmaxdepth) |  |
 | [crawlerx.maxUrl](#crawlerxmaxurl) |  |
 | [crawlerx.proxy](#crawlerxproxy) |  |
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

### crawlerx.StartCrawler



#### 详细描述



#### 定义：

`func crawlerx.StartCrawler(v1: string, v2 ...core.ConfigOpt) return (r0: chan core.ReqInfo, r1: error)`


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


 
### crawlerx.blackList



#### 详细描述



#### 定义：

`func crawlerx.blackList(v1: string) return (r0: func ConfigOpt(v1: *core.Config) )`


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

`func crawlerx.checkDanger() return (r0: func ConfigOpt(v1: *core.Config) )`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *core.Config) ` |   |


 
### crawlerx.concurrent



#### 详细描述



#### 定义：

`func crawlerx.concurrent(v1: int) return (r0: func ConfigOpt(v1: *core.Config) )`


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

`func crawlerx.cookie(v1: string, v2: string, v3: string) return (r0: func ConfigOpt(v1: *core.Config) )`


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

`func crawlerx.cookies(v1: string, v2: map[string]string) return (r0: func ConfigOpt(v1: *core.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `map[string]string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *core.Config) ` |   |


 
### crawlerx.formFill



#### 详细描述



#### 定义：

`func crawlerx.formFill(v1: string, v2: string) return (r0: func ConfigOpt(v1: *core.Config) )`


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

`func crawlerx.fullTimeout(v1: int) return (r0: func ConfigOpt(v1: *core.Config) )`


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

`func crawlerx.header(v1: string, v2: string) return (r0: func ConfigOpt(v1: *core.Config) )`


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

`func crawlerx.headers(v1: map[string]string) return (r0: func ConfigOpt(v1: *core.Config) )`


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

`func crawlerx.maxDepth(v1: int) return (r0: func ConfigOpt(v1: *core.Config) )`


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

`func crawlerx.maxUrl(v1: int) return (r0: func ConfigOpt(v1: *core.Config) )`


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

`func crawlerx.proxy(v1: string, v2 ...string) return (r0: func ConfigOpt(v1: *core.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *core.Config) ` |   |


 
### crawlerx.scanRange



#### 详细描述



#### 定义：

`func crawlerx.scanRange(v1: int) return (r0: func ConfigOpt(v1: *core.Config) )`


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

`func crawlerx.scanRepeat(v1: int) return (r0: func ConfigOpt(v1: *core.Config) )`


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

`func crawlerx.tags(v1: string) return (r0: func ConfigOpt(v1: *core.Config) )`


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

`func crawlerx.timeout(v1: int) return (r0: func ConfigOpt(v1: *core.Config) )`


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

`func crawlerx.whiteList(v1: string) return (r0: func ConfigOpt(v1: *core.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *core.Config) ` |   |


 


