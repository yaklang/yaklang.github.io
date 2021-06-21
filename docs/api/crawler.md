# crawler


|成员函数|函数描述/介绍|
|:------|:--------|
 | [crawler.Start](#crawlerstart) |  |
 | [crawler.basicAuth](#crawlerbasicauth) |  |
 | [crawler.bodySize](#crawlerbodysize) |  |
 | [crawler.concurrent](#crawlerconcurrent) |  |
 | [crawler.connectTimeout](#crawlerconnecttimeout) |  |
 | [crawler.cookie](#crawlercookie) |  |
 | [crawler.domainExclude](#crawlerdomainexclude) |  |
 | [crawler.domainInclude](#crawlerdomaininclude) |  |
 | [crawler.forbiddenFromParent](#crawlerforbiddenfromparent) |  |
 | [crawler.header](#crawlerheader) |  |
 | [crawler.maxDepth](#crawlermaxdepth) |  |
 | [crawler.maxRedirect](#crawlermaxredirect) |  |
 | [crawler.maxRequest](#crawlermaxrequest) |  |
 | [crawler.maxRetry](#crawlermaxretry) |  |
 | [crawler.maxUrls](#crawlermaxurls) |  |
 | [crawler.proxy](#crawlerproxy) |  |
 | [crawler.responseTimeout](#crawlerresponsetimeout) |  |
 | [crawler.timeout](#crawlertimeout) |  |
 | [crawler.ua](#crawlerua) |  |
 | [crawler.urlRegexpExclude](#crawlerurlregexpexclude) |  |
 | [crawler.urlRegexpInclude](#crawlerurlregexpinclude) |  |
 | [crawler.userAgent](#crawleruseragent) |  |




 



## 函数定义

### crawler.Start



#### 定义：

`func (v1: string, v2 ...func configOpt(v1: *crawler.Config) ) return(chan crawler.RequestIf, error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |
| v2 | []crawler.configOpt |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | chan crawler.RequestIf |   |
| r1 | error |   |


### crawler.basicAuth



#### 定义：

`func (v1: string, v2: string) return(func configOpt(v1: *crawler.Config) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |
| v2 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func configOpt(v1: *crawler.Config)  |   |


### crawler.bodySize



#### 定义：

`func (v1: int) return(func configOpt(v1: *crawler.Config) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | int |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func configOpt(v1: *crawler.Config)  |   |


### crawler.concurrent



#### 定义：

`func (v1: int) return(func configOpt(v1: *crawler.Config) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | int |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func configOpt(v1: *crawler.Config)  |   |


### crawler.connectTimeout



#### 定义：

`func (v1: float64) return(func configOpt(v1: *crawler.Config) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | float64 |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func configOpt(v1: *crawler.Config)  |   |


### crawler.cookie



#### 定义：

`func (v1: string, v2: string) return(func configOpt(v1: *crawler.Config) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |
| v2 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func configOpt(v1: *crawler.Config)  |   |


### crawler.domainExclude



#### 定义：

`func (v1: string) return(func configOpt(v1: *crawler.Config) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func configOpt(v1: *crawler.Config)  |   |


### crawler.domainInclude



#### 定义：

`func (v1: string) return(func configOpt(v1: *crawler.Config) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func configOpt(v1: *crawler.Config)  |   |


### crawler.forbiddenFromParent



#### 定义：

`func (v1: bool) return(func configOpt(v1: *crawler.Config) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | bool |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func configOpt(v1: *crawler.Config)  |   |


### crawler.header



#### 定义：

`func (v1: string, v2: string) return(func configOpt(v1: *crawler.Config) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |
| v2 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func configOpt(v1: *crawler.Config)  |   |


### crawler.maxDepth



#### 定义：

`func (v1: int) return(func configOpt(v1: *crawler.Config) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | int |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func configOpt(v1: *crawler.Config)  |   |


### crawler.maxRedirect



#### 定义：

`func (v1: int) return(func configOpt(v1: *crawler.Config) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | int |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func configOpt(v1: *crawler.Config)  |   |


### crawler.maxRequest



#### 定义：

`func (v1: int) return(func configOpt(v1: *crawler.Config) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | int |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func configOpt(v1: *crawler.Config)  |   |


### crawler.maxRetry



#### 定义：

`func (v1: int) return(func configOpt(v1: *crawler.Config) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | int |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func configOpt(v1: *crawler.Config)  |   |


### crawler.maxUrls



#### 定义：

`func (v1: int) return(func configOpt(v1: *crawler.Config) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | int |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func configOpt(v1: *crawler.Config)  |   |


### crawler.proxy



#### 定义：

`func (v1 ...string) return(func configOpt(v1: *crawler.Config) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | []string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func configOpt(v1: *crawler.Config)  |   |


### crawler.responseTimeout



#### 定义：

`func (v1: float64) return(func configOpt(v1: *crawler.Config) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | float64 |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func configOpt(v1: *crawler.Config)  |   |


### crawler.timeout



#### 定义：

`func (v1: float64) return(func configOpt(v1: *crawler.Config) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | float64 |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func configOpt(v1: *crawler.Config)  |   |


### crawler.ua



#### 定义：

`func (v1: string) return(func configOpt(v1: *crawler.Config) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func configOpt(v1: *crawler.Config)  |   |


### crawler.urlRegexpExclude



#### 定义：

`func (v1: string) return(func configOpt(v1: *crawler.Config) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func configOpt(v1: *crawler.Config)  |   |


### crawler.urlRegexpInclude



#### 定义：

`func (v1: string) return(func configOpt(v1: *crawler.Config) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func configOpt(v1: *crawler.Config)  |   |


### crawler.userAgent



#### 定义：

`func (v1: string) return(func configOpt(v1: *crawler.Config) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func configOpt(v1: *crawler.Config)  |   |





