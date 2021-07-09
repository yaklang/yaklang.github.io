# nuclei


|成员函数|函数描述/介绍|
|:------|:--------|
 | [nuclei.Scan](#nucleiscan) |  |
 | [nuclei.bulkSize](#nucleibulksize) |  |
 | [nuclei.debug](#nucleidebug) |  |
 | [nuclei.debugRequest](#nucleidebugrequest) |  |
 | [nuclei.debugResponse](#nucleidebugresponse) |  |
 | [nuclei.dnsResolver](#nucleidnsresolver) |  |
 | [nuclei.excludeTags](#nucleiexcludetags) |  |
 | [nuclei.excludeTemplates](#nucleiexcludetemplates) |  |
 | [nuclei.headers](#nucleiheaders) |  |
 | [nuclei.headless](#nucleiheadless) |  |
 | [nuclei.logFile](#nucleilogfile) |  |
 | [nuclei.metrics](#nucleimetrics) |  |
 | [nuclei.newTemplates](#nucleinewtemplates) |  |
 | [nuclei.noColor](#nucleinocolor) |  |
 | [nuclei.noInteractsh](#nucleinointeractsh) |  |
 | [nuclei.noMeta](#nucleinometa) |  |
 | [nuclei.output](#nucleioutput) |  |
 | [nuclei.pageTimeout](#nucleipagetimeout) |  |
 | [nuclei.project](#nucleiproject) |  |
 | [nuclei.proxy](#nucleiproxy) |  |
 | [nuclei.rateLimit](#nucleiratelimit) |  |
 | [nuclei.reportingConfig](#nucleireportingconfig) |  |
 | [nuclei.reportingDB](#nucleireportingdb) |  |
 | [nuclei.retry](#nucleiretry) |  |
 | [nuclei.severity](#nucleiseverity) |  |
 | [nuclei.showBrowser](#nucleishowbrowser) |  |
 | [nuclei.silent](#nucleisilent) |  |
 | [nuclei.stopAtFirstMatch](#nucleistopatfirstmatch) |  |
 | [nuclei.systemDnsResolver](#nucleisystemdnsresolver) |  |
 | [nuclei.tags](#nucleitags) |  |
 | [nuclei.templateList](#nucleitemplatelist) |  |
 | [nuclei.templates](#nucleitemplates) |  |
 | [nuclei.templatesDir](#nucleitemplatesdir) |  |
 | [nuclei.templatesThreads](#nucleitemplatesthreads) |  |
 | [nuclei.templatesVersion](#nucleitemplatesversion) |  |
 | [nuclei.timeout](#nucleitimeout) |  |
 | [nuclei.updateTemplates](#nucleiupdatetemplates) |  |
 | [nuclei.verbose](#nucleiverbose) |  |
 | [nuclei.version](#nucleiversion) |  |
 | [nuclei.workflows](#nucleiworkflows) |  |




 



## 函数定义

### nuclei.Scan



#### 详细描述



#### 定义：

`func nuclei.Scan(v1: string, v2 ...tools.nucleiOpt) return (r0: any, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...tools.nucleiOpt` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |
| r1 | `error` |   |


 
### nuclei.bulkSize



#### 详细描述



#### 定义：

`func nuclei.bulkSize(v1: int) return (r0: func nucleiOpt(v1: *types.Options) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func nucleiOpt(v1: *types.Options) ` |   |


 
### nuclei.debug



#### 详细描述



#### 定义：

`func nuclei.debug(v1: bool) return (r0: func nucleiOpt(v1: *types.Options) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func nucleiOpt(v1: *types.Options) ` |   |


 
### nuclei.debugRequest



#### 详细描述



#### 定义：

`func nuclei.debugRequest(v1: bool) return (r0: func nucleiOpt(v1: *types.Options) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func nucleiOpt(v1: *types.Options) ` |   |


 
### nuclei.debugResponse



#### 详细描述



#### 定义：

`func nuclei.debugResponse(v1: bool) return (r0: func nucleiOpt(v1: *types.Options) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func nucleiOpt(v1: *types.Options) ` |   |


 
### nuclei.dnsResolver



#### 详细描述



#### 定义：

`func nuclei.dnsResolver(v1 ...string) return (r0: func nucleiOpt(v1: *types.Options) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func nucleiOpt(v1: *types.Options) ` |   |


 
### nuclei.excludeTags



#### 详细描述



#### 定义：

`func nuclei.excludeTags(v1 ...string) return (r0: func nucleiOpt(v1: *types.Options) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func nucleiOpt(v1: *types.Options) ` |   |


 
### nuclei.excludeTemplates



#### 详细描述



#### 定义：

`func nuclei.excludeTemplates(v1 ...string) return (r0: func nucleiOpt(v1: *types.Options) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func nucleiOpt(v1: *types.Options) ` |   |


 
### nuclei.headers



#### 详细描述



#### 定义：

`func nuclei.headers(v1 ...string) return (r0: func nucleiOpt(v1: *types.Options) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func nucleiOpt(v1: *types.Options) ` |   |


 
### nuclei.headless



#### 详细描述



#### 定义：

`func nuclei.headless(v1: bool) return (r0: func nucleiOpt(v1: *types.Options) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func nucleiOpt(v1: *types.Options) ` |   |


 
### nuclei.logFile



#### 详细描述



#### 定义：

`func nuclei.logFile(v1: string) return (r0: func nucleiOpt(v1: *types.Options) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func nucleiOpt(v1: *types.Options) ` |   |


 
### nuclei.metrics



#### 详细描述



#### 定义：

`func nuclei.metrics(v1: bool) return (r0: func nucleiOpt(v1: *types.Options) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func nucleiOpt(v1: *types.Options) ` |   |


 
### nuclei.newTemplates



#### 详细描述



#### 定义：

`func nuclei.newTemplates(v1: bool) return (r0: func nucleiOpt(v1: *types.Options) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func nucleiOpt(v1: *types.Options) ` |   |


 
### nuclei.noColor



#### 详细描述



#### 定义：

`func nuclei.noColor(v1: bool) return (r0: func nucleiOpt(v1: *types.Options) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func nucleiOpt(v1: *types.Options) ` |   |


 
### nuclei.noInteractsh



#### 详细描述



#### 定义：

`func nuclei.noInteractsh(v1: bool) return (r0: func nucleiOpt(v1: *types.Options) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func nucleiOpt(v1: *types.Options) ` |   |


 
### nuclei.noMeta



#### 详细描述



#### 定义：

`func nuclei.noMeta(v1: bool) return (r0: func nucleiOpt(v1: *types.Options) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func nucleiOpt(v1: *types.Options) ` |   |


 
### nuclei.output



#### 详细描述



#### 定义：

`func nuclei.output(v1: string) return (r0: func nucleiOpt(v1: *types.Options) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func nucleiOpt(v1: *types.Options) ` |   |


 
### nuclei.pageTimeout



#### 详细描述



#### 定义：

`func nuclei.pageTimeout(v1: int) return (r0: func nucleiOpt(v1: *types.Options) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func nucleiOpt(v1: *types.Options) ` |   |


 
### nuclei.project



#### 详细描述



#### 定义：

`func nuclei.project(v1: bool) return (r0: func nucleiOpt(v1: *types.Options) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func nucleiOpt(v1: *types.Options) ` |   |


 
### nuclei.proxy



#### 详细描述



#### 定义：

`func nuclei.proxy(v1: string) return (r0: func nucleiOpt(v1: *types.Options) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func nucleiOpt(v1: *types.Options) ` |   |


 
### nuclei.rateLimit



#### 详细描述



#### 定义：

`func nuclei.rateLimit(v1: int) return (r0: func nucleiOpt(v1: *types.Options) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func nucleiOpt(v1: *types.Options) ` |   |


 
### nuclei.reportingConfig



#### 详细描述



#### 定义：

`func nuclei.reportingConfig(v1: string) return (r0: func nucleiOpt(v1: *types.Options) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func nucleiOpt(v1: *types.Options) ` |   |


 
### nuclei.reportingDB



#### 详细描述



#### 定义：

`func nuclei.reportingDB(v1: string) return (r0: func nucleiOpt(v1: *types.Options) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func nucleiOpt(v1: *types.Options) ` |   |


 
### nuclei.retry



#### 详细描述



#### 定义：

`func nuclei.retry(v1: int) return (r0: func nucleiOpt(v1: *types.Options) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func nucleiOpt(v1: *types.Options) ` |   |


 
### nuclei.severity



#### 详细描述



#### 定义：

`func nuclei.severity(v1 ...string) return (r0: func nucleiOpt(v1: *types.Options) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func nucleiOpt(v1: *types.Options) ` |   |


 
### nuclei.showBrowser



#### 详细描述



#### 定义：

`func nuclei.showBrowser(v1: bool) return (r0: func nucleiOpt(v1: *types.Options) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func nucleiOpt(v1: *types.Options) ` |   |


 
### nuclei.silent



#### 详细描述



#### 定义：

`func nuclei.silent(v1: bool) return (r0: func nucleiOpt(v1: *types.Options) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func nucleiOpt(v1: *types.Options) ` |   |


 
### nuclei.stopAtFirstMatch



#### 详细描述



#### 定义：

`func nuclei.stopAtFirstMatch(v1: bool) return (r0: func nucleiOpt(v1: *types.Options) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func nucleiOpt(v1: *types.Options) ` |   |


 
### nuclei.systemDnsResolver



#### 详细描述



#### 定义：

`func nuclei.systemDnsResolver(v1: bool) return (r0: func nucleiOpt(v1: *types.Options) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func nucleiOpt(v1: *types.Options) ` |   |


 
### nuclei.tags



#### 详细描述



#### 定义：

`func nuclei.tags(v1 ...string) return (r0: func nucleiOpt(v1: *types.Options) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func nucleiOpt(v1: *types.Options) ` |   |


 
### nuclei.templateList



#### 详细描述



#### 定义：

`func nuclei.templateList(v1: bool) return (r0: func nucleiOpt(v1: *types.Options) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func nucleiOpt(v1: *types.Options) ` |   |


 
### nuclei.templates



#### 详细描述



#### 定义：

`func nuclei.templates(v1 ...string) return (r0: func nucleiOpt(v1: *types.Options) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func nucleiOpt(v1: *types.Options) ` |   |


 
### nuclei.templatesDir



#### 详细描述



#### 定义：

`func nuclei.templatesDir(v1: string) return (r0: func nucleiOpt(v1: *types.Options) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func nucleiOpt(v1: *types.Options) ` |   |


 
### nuclei.templatesThreads



#### 详细描述



#### 定义：

`func nuclei.templatesThreads(v1: int) return (r0: func nucleiOpt(v1: *types.Options) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func nucleiOpt(v1: *types.Options) ` |   |


 
### nuclei.templatesVersion



#### 详细描述



#### 定义：

`func nuclei.templatesVersion(v1: bool) return (r0: func nucleiOpt(v1: *types.Options) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func nucleiOpt(v1: *types.Options) ` |   |


 
### nuclei.timeout



#### 详细描述



#### 定义：

`func nuclei.timeout(v1: int) return (r0: func nucleiOpt(v1: *types.Options) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func nucleiOpt(v1: *types.Options) ` |   |


 
### nuclei.updateTemplates



#### 详细描述



#### 定义：

`func nuclei.updateTemplates(v1: bool) return (r0: func nucleiOpt(v1: *types.Options) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func nucleiOpt(v1: *types.Options) ` |   |


 
### nuclei.verbose



#### 详细描述



#### 定义：

`func nuclei.verbose(v1: bool) return (r0: func nucleiOpt(v1: *types.Options) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func nucleiOpt(v1: *types.Options) ` |   |


 
### nuclei.version



#### 详细描述



#### 定义：

`func nuclei.version(v1: bool) return (r0: func nucleiOpt(v1: *types.Options) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func nucleiOpt(v1: *types.Options) ` |   |


 
### nuclei.workflows



#### 详细描述



#### 定义：

`func nuclei.workflows(v1 ...string) return (r0: func nucleiOpt(v1: *types.Options) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func nucleiOpt(v1: *types.Options) ` |   |


 


