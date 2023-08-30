# crawlerx


|成员函数|函数描述/介绍|
|:------|:--------|
 | [crawlerx.StartCrawler](#crawlerxstartcrawler) |  |
 | [crawlerx.blacklist](#crawlerxblacklist) |  |
 | [crawlerx.browserInfo](#crawlerxbrowserinfo) |  |
 | [crawlerx.concurrent](#crawlerxconcurrent) |  |
 | [crawlerx.cookies](#crawlerxcookies) |  |
 | [crawlerx.extraWaitLoadTime](#crawlerxextrawaitloadtime) |  |
 | [crawlerx.fileInput](#crawlerxfileinput) |  |
 | [crawlerx.formFill](#crawlerxformfill) |  |
 | [crawlerx.fullTimeout](#crawlerxfulltimeout) |  |
 | [crawlerx.headers](#crawlerxheaders) |  |
 | [crawlerx.ignoreQueryName](#crawlerxignorequeryname) |  |
 | [crawlerx.invalidSuffix](#crawlerxinvalidsuffix) |  |
 | [crawlerx.leakless](#crawlerxleakless) |  |
 | [crawlerx.localStorage](#crawlerxlocalstorage) |  |
 | [crawlerx.maxDepth](#crawlerxmaxdepth) |  |
 | [crawlerx.maxUrl](#crawlerxmaxurl) |  |
 | [crawlerx.pageTimeout](#crawlerxpagetimeout) |  |
 | [crawlerx.rawCookie](#crawlerxrawcookie) |  |
 | [crawlerx.rawHeaders](#crawlerxrawheaders) |  |
 | [crawlerx.scanRangeLevel](#crawlerxscanrangelevel) |  |
 | [crawlerx.scanRepeatLevel](#crawlerxscanrepeatlevel) |  |
 | [crawlerx.sensitiveWords](#crawlerxsensitivewords) |  |
 | [crawlerx.stealth](#crawlerxstealth) |  |
 | [crawlerx.whitelist](#crawlerxwhitelist) |  |




## 变量定义

|变量调用名|变量类型|变量解释/帮助信息|
|:-----------|:---------- |:-----------|
|`crawlerx.AllDomainScan`|`crawlerx.scanRangeLevel`| //|
|`crawlerx.ExtremeRepeatLevel`|`crawlerx.repeatLevel`| //|
|`crawlerx.HighRepeatLevel`|`crawlerx.repeatLevel`| //|
|`crawlerx.LowRepeatLevel`|`crawlerx.repeatLevel`| //|
|`crawlerx.MediumRepeatLevel`|`crawlerx.repeatLevel`| //|
|`crawlerx.SubMenuScan`|`crawlerx.scanRangeLevel`| //|
|`crawlerx.UnLimitRepeat`|`crawlerx.repeatLevel`| //|





## 函数定义

### crawlerx.StartCrawler



#### 详细描述



#### 定义：

`StartCrawler(url string, opts ...core.ConfigOpt) (chan core.ReqInfo, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...crawlerx.ConfigOpt` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `chan crawlerx.ReqInfo` |   |
| r1 | `error` |   |


 
### crawlerx.blacklist



#### 详细描述



#### 定义：

`func crawlerx.blacklist(v1 ...string) return (r0: func ConfigOpt(v1: *crawlerx.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *crawlerx.Config) ` |   |


 
### crawlerx.browserInfo



#### 详细描述



#### 定义：

`func crawlerx.browserInfo(v1: string) return (r0: func ConfigOpt(v1: *crawlerx.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *crawlerx.Config) ` |   |


 
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
| r0 | `func ConfigOpt(v1: *crawlerx.Config) ` |   |


 
### crawlerx.cookies



#### 详细描述



#### 定义：

`cookies(string, map[string]string) core.ConfigOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `map[string]string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *crawlerx.Config) ` |   |


 
### crawlerx.extraWaitLoadTime



#### 详细描述



#### 定义：

`func crawlerx.extraWaitLoadTime(v1: int) return (r0: func ConfigOpt(v1: *crawlerx.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *crawlerx.Config) ` |   |


 
### crawlerx.fileInput



#### 详细描述



#### 定义：

`func crawlerx.fileInput(v1: map[string]string) return (r0: func ConfigOpt(v1: *crawlerx.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `map[string]string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *crawlerx.Config) ` |   |


 
### crawlerx.formFill



#### 详细描述



#### 定义：

`formFill(string, string) core.ConfigOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `map[string]string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *crawlerx.Config) ` |   |


 
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
| r0 | `func ConfigOpt(v1: *crawlerx.Config) ` |   |


 
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
| r0 | `func ConfigOpt(v1: *crawlerx.Config) ` |   |


 
### crawlerx.ignoreQueryName



#### 详细描述



#### 定义：

`func crawlerx.ignoreQueryName(v1 ...string) return (r0: func ConfigOpt(v1: *crawlerx.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *crawlerx.Config) ` |   |


 
### crawlerx.invalidSuffix



#### 详细描述



#### 定义：

`func crawlerx.invalidSuffix(v1: []string) return (r0: func ConfigOpt(v1: *crawlerx.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `[]string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *crawlerx.Config) ` |   |


 
### crawlerx.leakless



#### 详细描述



#### 定义：

`func crawlerx.leakless(v1: string) return (r0: func ConfigOpt(v1: *crawlerx.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *crawlerx.Config) ` |   |


 
### crawlerx.localStorage



#### 详细描述



#### 定义：

`func crawlerx.localStorage(v1: map[string]string) return (r0: func ConfigOpt(v1: *crawlerx.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `map[string]string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *crawlerx.Config) ` |   |


 
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
| r0 | `func ConfigOpt(v1: *crawlerx.Config) ` |   |


 
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
| r0 | `func ConfigOpt(v1: *crawlerx.Config) ` |   |


 
### crawlerx.pageTimeout



#### 详细描述



#### 定义：

`func crawlerx.pageTimeout(v1: int) return (r0: func ConfigOpt(v1: *crawlerx.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *crawlerx.Config) ` |   |


 
### crawlerx.rawCookie



#### 详细描述



#### 定义：

`func crawlerx.rawCookie(v1: string) return (r0: func ConfigOpt(v1: *crawlerx.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *crawlerx.Config) ` |   |


 
### crawlerx.rawHeaders



#### 详细描述



#### 定义：

`func crawlerx.rawHeaders(v1: string) return (r0: func ConfigOpt(v1: *crawlerx.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *crawlerx.Config) ` |   |


 
### crawlerx.scanRangeLevel



#### 详细描述



#### 定义：

`func crawlerx.scanRangeLevel(v1: crawlerx.scanRangeLevel) return (r0: func ConfigOpt(v1: *crawlerx.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `crawlerx.scanRangeLevel` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *crawlerx.Config) ` |   |


 
### crawlerx.scanRepeatLevel



#### 详细描述



#### 定义：

`func crawlerx.scanRepeatLevel(v1: crawlerx.repeatLevel) return (r0: func ConfigOpt(v1: *crawlerx.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `crawlerx.repeatLevel` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *crawlerx.Config) ` |   |


 
### crawlerx.sensitiveWords



#### 详细描述



#### 定义：

`func crawlerx.sensitiveWords(v1: []string) return (r0: func ConfigOpt(v1: *crawlerx.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `[]string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *crawlerx.Config) ` |   |


 
### crawlerx.stealth



#### 详细描述



#### 定义：

`func crawlerx.stealth(v1: bool) return (r0: func ConfigOpt(v1: *crawlerx.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *crawlerx.Config) ` |   |


 
### crawlerx.whitelist



#### 详细描述



#### 定义：

`func crawlerx.whitelist(v1 ...string) return (r0: func ConfigOpt(v1: *crawlerx.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *crawlerx.Config) ` |   |


 


