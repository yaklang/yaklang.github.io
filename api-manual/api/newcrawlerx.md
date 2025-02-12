# newcrawlerx


|成员函数|函数描述/介绍|
|:------|:--------|
 | [newcrawlerx.blackList](#newcrawlerxblacklist) |  |
 | [newcrawlerx.browserInfo](#newcrawlerxbrowserinfo) |  |
 | [newcrawlerx.cookie](#newcrawlerxcookie) |  |
 | [newcrawlerx.cookies](#newcrawlerxcookies) |  |
 | [newcrawlerx.extraWaitLoad](#newcrawlerxextrawaitload) |  |
 | [newcrawlerx.fileInput](#newcrawlerxfileinput) |  |
 | [newcrawlerx.formFill](#newcrawlerxformfill) |  |
 | [newcrawlerx.fullTimeout](#newcrawlerxfulltimeout) |  |
 | [newcrawlerx.header](#newcrawlerxheader) |  |
 | [newcrawlerx.headers](#newcrawlerxheaders) |  |
 | [newcrawlerx.ignoreQuery](#newcrawlerxignorequery) |  |
 | [newcrawlerx.maxDepth](#newcrawlerxmaxdepth) |  |
 | [newcrawlerx.maxUrl](#newcrawlerxmaxurl) |  |
 | [newcrawlerx.scanRange](#newcrawlerxscanrange) |  |
 | [newcrawlerx.scanRepeat](#newcrawlerxscanrepeat) |  |
 | [newcrawlerx.startCrawler](#newcrawlerxstartcrawler) |  |
 | [newcrawlerx.timeout](#newcrawlerxtimeout) |  |
 | [newcrawlerx.vueWebsite](#newcrawlerxvuewebsite) |  |
 | [newcrawlerx.whiteList](#newcrawlerxwhitelist) |  |




## 变量定义

|变量调用名|变量类型|变量解释/帮助信息|
|:-----------|:---------- |:-----------|
|`newcrawlerx.AllDomainScan`|`newcrawlerx.scanRangeLevel`| //|
|`newcrawlerx.ExtremeRepeatLevel`|`newcrawlerx.limitLevel`| //|
|`newcrawlerx.HighRepeatLevel`|`newcrawlerx.limitLevel`| //|
|`newcrawlerx.LowRepeatLevel`|`newcrawlerx.limitLevel`| //|
|`newcrawlerx.MediumRepeatLevel`|`newcrawlerx.limitLevel`| //|
|`newcrawlerx.SubMenuScan`|`newcrawlerx.scanRangeLevel`| //|
|`newcrawlerx.UnLimitRepeat`|`newcrawlerx.limitLevel`| //|





## 函数定义

### newcrawlerx.blackList



#### 详细描述



#### 定义：

`func newcrawlerx.blackList(v1 ...string) return (r0: func ConfigOpt(v1: *newcrawlerx.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *newcrawlerx.Config) ` |   |


 
### newcrawlerx.browserInfo



#### 详细描述



#### 定义：

`func newcrawlerx.browserInfo(v1: string) return (r0: func ConfigOpt(v1: *newcrawlerx.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *newcrawlerx.Config) ` |   |


 
### newcrawlerx.cookie



#### 详细描述



#### 定义：

`func newcrawlerx.cookie(v1: string, v2 ...string) return (r0: func ConfigOpt(v1: *newcrawlerx.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *newcrawlerx.Config) ` |   |


 
### newcrawlerx.cookies



#### 详细描述



#### 定义：

`func newcrawlerx.cookies(v1: string, v2: map[string]string) return (r0: func ConfigOpt(v1: *newcrawlerx.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `map[string]string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *newcrawlerx.Config) ` |   |


 
### newcrawlerx.extraWaitLoad



#### 详细描述



#### 定义：

`func newcrawlerx.extraWaitLoad(v1: int) return (r0: func ConfigOpt(v1: *newcrawlerx.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *newcrawlerx.Config) ` |   |


 
### newcrawlerx.fileInput



#### 详细描述



#### 定义：

`func newcrawlerx.fileInput(v1: map[string]string) return (r0: func ConfigOpt(v1: *newcrawlerx.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `map[string]string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *newcrawlerx.Config) ` |   |


 
### newcrawlerx.formFill



#### 详细描述



#### 定义：

`func newcrawlerx.formFill(v1: map[string]string) return (r0: func ConfigOpt(v1: *newcrawlerx.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `map[string]string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *newcrawlerx.Config) ` |   |


 
### newcrawlerx.fullTimeout



#### 详细描述



#### 定义：

`func newcrawlerx.fullTimeout(v1: int) return (r0: func ConfigOpt(v1: *newcrawlerx.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *newcrawlerx.Config) ` |   |


 
### newcrawlerx.header



#### 详细描述



#### 定义：

`func newcrawlerx.header(v1 ...string) return (r0: func ConfigOpt(v1: *newcrawlerx.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *newcrawlerx.Config) ` |   |


 
### newcrawlerx.headers



#### 详细描述



#### 定义：

`func newcrawlerx.headers(v1: map[string]string) return (r0: func ConfigOpt(v1: *newcrawlerx.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `map[string]string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *newcrawlerx.Config) ` |   |


 
### newcrawlerx.ignoreQuery



#### 详细描述



#### 定义：

`func newcrawlerx.ignoreQuery(v1 ...string) return (r0: func ConfigOpt(v1: *newcrawlerx.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *newcrawlerx.Config) ` |   |


 
### newcrawlerx.maxDepth



#### 详细描述



#### 定义：

`func newcrawlerx.maxDepth(v1: int) return (r0: func ConfigOpt(v1: *newcrawlerx.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *newcrawlerx.Config) ` |   |


 
### newcrawlerx.maxUrl



#### 详细描述



#### 定义：

`func newcrawlerx.maxUrl(v1: int) return (r0: func ConfigOpt(v1: *newcrawlerx.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *newcrawlerx.Config) ` |   |


 
### newcrawlerx.scanRange



#### 详细描述



#### 定义：

`func newcrawlerx.scanRange(v1: newcrawlerx.scanRangeLevel) return (r0: func ConfigOpt(v1: *newcrawlerx.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `newcrawlerx.scanRangeLevel` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *newcrawlerx.Config) ` |   |


 
### newcrawlerx.scanRepeat



#### 详细描述



#### 定义：

`func newcrawlerx.scanRepeat(v1: newcrawlerx.limitLevel) return (r0: func ConfigOpt(v1: *newcrawlerx.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `newcrawlerx.limitLevel` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *newcrawlerx.Config) ` |   |


 
### newcrawlerx.startCrawler



#### 详细描述



#### 定义：

`func newcrawlerx.startCrawler(v1: string, v2 ...newcrawlerx.ConfigOpt) return (r0: chan newcrawlerx.ReqInfo, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...newcrawlerx.ConfigOpt` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `chan newcrawlerx.ReqInfo` |   |
| r1 | `error` |   |


 
### newcrawlerx.timeout



#### 详细描述



#### 定义：

`func newcrawlerx.timeout(v1: int) return (r0: func ConfigOpt(v1: *newcrawlerx.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *newcrawlerx.Config) ` |   |


 
### newcrawlerx.vueWebsite



#### 详细描述



#### 定义：

`func newcrawlerx.vueWebsite(v1: bool) return (r0: func ConfigOpt(v1: *newcrawlerx.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *newcrawlerx.Config) ` |   |


 
### newcrawlerx.whiteList



#### 详细描述



#### 定义：

`func newcrawlerx.whiteList(v1 ...string) return (r0: func ConfigOpt(v1: *newcrawlerx.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *newcrawlerx.Config) ` |   |


 


