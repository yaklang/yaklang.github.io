# nuclei


|成员函数|函数描述/介绍|
|:------|:--------|
 | [nuclei.AllPoC](#nucleiallpoc) | 获取当前所有 PoC 对象 |
 | [nuclei.GetPoCDir](#nucleigetpocdir) |  |
 | [nuclei.PocVulToRisk](#nucleipocvultorisk) |  |
 | [nuclei.PullDatabase](#nucleipulldatabase) | 拉去数据库 |
 | [nuclei.RemoveDatabase](#nucleiremovedatabase) | 移除 nuclei 数据库 |
 | [nuclei.Scan](#nucleiscan) |  |
 | [nuclei.ScanAuto](#nucleiscanauto) |  |
 | [nuclei.UpdateDatabase](#nucleiupdatedatabase) |  |
 | [nuclei.bulkSize](#nucleibulksize) |  |
 | [nuclei.debug](#nucleidebug) |  |
 | [nuclei.debugRequest](#nucleidebugrequest) |  |
 | [nuclei.debugResponse](#nucleidebugresponse) |  |
 | [nuclei.dnsResolver](#nucleidnsresolver) |  |
 | [nuclei.enableReverseConnection](#nucleienablereverseconnection) |  |
 | [nuclei.excludeTags](#nucleiexcludetags) |  |
 | [nuclei.excludeTemplates](#nucleiexcludetemplates) |  |
 | [nuclei.fuzzQueryTemplate](#nucleifuzzquerytemplate) |  |
 | [nuclei.headers](#nucleiheaders) |  |
 | [nuclei.headless](#nucleiheadless) |  |
 | [nuclei.http2](#nucleihttp2) |  |
 | [nuclei.https](#nucleihttps) |  |
 | [nuclei.logFile](#nucleilogfile) |  |
 | [nuclei.metrics](#nucleimetrics) |  |
 | [nuclei.mode](#nucleimode) |  |
 | [nuclei.newTemplates](#nucleinewtemplates) |  |
 | [nuclei.noColor](#nucleinocolor) |  |
 | [nuclei.noInteractsh](#nucleinointeractsh) |  |
 | [nuclei.noMeta](#nucleinometa) |  |
 | [nuclei.output](#nucleioutput) |  |
 | [nuclei.pageTimeout](#nucleipagetimeout) |  |
 | [nuclei.proxy](#nucleiproxy) |  |
 | [nuclei.rateLimit](#nucleiratelimit) |  |
 | [nuclei.rawTemplate](#nucleirawtemplate) |  |
 | [nuclei.reportingConfig](#nucleireportingconfig) |  |
 | [nuclei.reportingDB](#nucleireportingdb) |  |
 | [nuclei.resultCallback](#nucleiresultcallback) |  |
 | [nuclei.retry](#nucleiretry) |  |
 | [nuclei.reverseUrl](#nucleireverseurl) |  |
 | [nuclei.severity](#nucleiseverity) |  |
 | [nuclei.showBrowser](#nucleishowbrowser) |  |
 | [nuclei.silent](#nucleisilent) |  |
 | [nuclei.stopAtFirstMatch](#nucleistopatfirstmatch) |  |
 | [nuclei.systemDnsResolver](#nucleisystemdnsresolver) |  |
 | [nuclei.tags](#nucleitags) |  |
 | [nuclei.targetConcurrent](#nucleitargetconcurrent) |  |
 | [nuclei.tcpResultCallback](#nucleitcpresultcallback) |  |
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

### nuclei.AllPoC

获取当前所有 PoC 对象

#### 详细描述



#### 定义：

`AllPoC(...string) ([]*tools.templateDesc, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]*tools.templateDesc` |   |
| r1 | `error` |   |


 
### nuclei.GetPoCDir



#### 详细描述



#### 定义：

`GetPoCDir() string`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### nuclei.PocVulToRisk



#### 详细描述



#### 定义：

`PocVulToRisk(p *PocVul) *yakit.Risk`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `*tools.PocVul` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yakit.Risk` |   |


 
### nuclei.PullDatabase

拉去数据库

#### 详细描述



#### 定义：

`PullDatabase(giturl string, proxy ...string) (string, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| gitUrl | `string` |   |
| proxies | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |
| r1 | `error` |   |


 
### nuclei.RemoveDatabase

移除 nuclei 数据库

#### 详细描述



#### 定义：

`RemoveDatabase() error`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### nuclei.Scan



#### 详细描述



#### 定义：

`Scan(string, ...tools.nucleiOpt) (chan *tools.PocVul, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `...any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `chan *tools.PocVul` |   |
| r1 | `error` |   |


 
### nuclei.ScanAuto



#### 详细描述



#### 定义：

``func nuclei.ScanAuto(v1: any, v2 ...any)``


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `...any` |   |




 

 
### nuclei.UpdateDatabase



#### 详细描述



#### 定义：

`UpdateDatabase(nucleiDir ...string) error`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| localPath | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### nuclei.bulkSize



#### 详细描述



#### 定义：

`bulkSize(int) tools.nucleiOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *httptpl.Config) ` |   |


 
### nuclei.debug



#### 详细描述



#### 定义：

`debug(bool) tools.nucleiOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *httptpl.Config) ` |   |


 
### nuclei.debugRequest



#### 详细描述



#### 定义：

`debugRequest(bool) tools.nucleiOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *httptpl.Config) ` |   |


 
### nuclei.debugResponse



#### 详细描述



#### 定义：

`debugResponse(bool) tools.nucleiOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *httptpl.Config) ` |   |


 
### nuclei.dnsResolver



#### 详细描述



#### 定义：

`dnsResolver(...string) tools.nucleiOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `[]string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func LowhttpOpt(v1: *lowhttp.LowhttpExecConfig) ` |   |


 
### nuclei.enableReverseConnection



#### 详细描述



#### 定义：

`func nuclei.enableReverseConnection(v1: bool) return (r0: func ConfigOption(v1: *httptpl.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *httptpl.Config) ` |   |


 
### nuclei.excludeTags



#### 详细描述



#### 定义：

`excludeTags(...string) tools.nucleiOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |


 
### nuclei.excludeTemplates



#### 详细描述



#### 定义：

`excludeTemplates(...string) tools.nucleiOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *httptpl.Config) ` |   |


 
### nuclei.fuzzQueryTemplate



#### 详细描述



#### 定义：

`func nuclei.fuzzQueryTemplate(v1 ...string) return (r0: func ConfigOption(v1: *httptpl.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *httptpl.Config) ` |   |


 
### nuclei.headers



#### 详细描述



#### 定义：

`headers(...string) tools.nucleiOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |


 
### nuclei.headless



#### 详细描述



#### 定义：

`headless(bool) tools.nucleiOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |


 
### nuclei.http2



#### 详细描述



#### 定义：

`func nuclei.http2(v1: bool) return (r0: func LowhttpOpt(v1: *lowhttp.LowhttpExecConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func LowhttpOpt(v1: *lowhttp.LowhttpExecConfig) ` |   |


 
### nuclei.https



#### 详细描述



#### 定义：

`func nuclei.https(v1: bool) return (r0: func LowhttpOpt(v1: *lowhttp.LowhttpExecConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func LowhttpOpt(v1: *lowhttp.LowhttpExecConfig) ` |   |


 
### nuclei.logFile



#### 详细描述



#### 定义：

`logFile(string) tools.nucleiOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |


 
### nuclei.metrics



#### 详细描述



#### 定义：

`metrics(bool) tools.nucleiOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |


 
### nuclei.mode



#### 详细描述



#### 定义：

`func nuclei.mode(v1: string) return (r0: func ConfigOption(v1: *httptpl.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *httptpl.Config) ` |   |


 
### nuclei.newTemplates



#### 详细描述



#### 定义：

`newTemplates(bool) tools.nucleiOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |


 
### nuclei.noColor



#### 详细描述



#### 定义：

`noColor(bool) tools.nucleiOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |


 
### nuclei.noInteractsh



#### 详细描述



#### 定义：

`noInteractsh(bool) tools.nucleiOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *httptpl.Config) ` |   |


 
### nuclei.noMeta



#### 详细描述



#### 定义：

`noMeta(bool) tools.nucleiOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |


 
### nuclei.output



#### 详细描述



#### 定义：

`output(string) tools.nucleiOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |


 
### nuclei.pageTimeout



#### 详细描述



#### 定义：

`pageTimeout(int) tools.nucleiOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `float64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func LowhttpOpt(v1: *lowhttp.LowhttpExecConfig) ` |   |


 
### nuclei.proxy



#### 详细描述



#### 定义：

`proxy(...string) tools.nucleiOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func LowhttpOpt(v1: *lowhttp.LowhttpExecConfig) ` |   |


 
### nuclei.rateLimit



#### 详细描述



#### 定义：

`rateLimit(int) tools.nucleiOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `float64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func LowhttpOpt(v1: *lowhttp.LowhttpExecConfig) ` |   |


 
### nuclei.rawTemplate



#### 详细描述



#### 定义：

`func nuclei.rawTemplate(v1: string) return (r0: func ConfigOption(v1: *httptpl.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *httptpl.Config) ` |   |


 
### nuclei.reportingConfig



#### 详细描述



#### 定义：

`reportingConfig(string) tools.nucleiOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |


 
### nuclei.reportingDB



#### 详细描述



#### 定义：

`reportingDB(string) tools.nucleiOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |


 
### nuclei.resultCallback



#### 详细描述



#### 定义：

`func nuclei.resultCallback(v1: func (v1: map[string]any) ) return (r0: func ConfigOption(v1: *httptpl.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `func (v1: map[string]any) ` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *httptpl.Config) ` |   |


 
### nuclei.retry



#### 详细描述



#### 定义：

`retry(int) tools.nucleiOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func LowhttpOpt(v1: *lowhttp.LowhttpExecConfig) ` |   |


 
### nuclei.reverseUrl



#### 详细描述



#### 定义：

`reverseUrl(string) tools.nucleiOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |


 
### nuclei.severity



#### 详细描述



#### 定义：

`severity(...string) tools.nucleiOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |


 
### nuclei.showBrowser



#### 详细描述



#### 定义：

`showBrowser(bool) tools.nucleiOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |


 
### nuclei.silent



#### 详细描述



#### 定义：

`silent(bool) tools.nucleiOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |


 
### nuclei.stopAtFirstMatch



#### 详细描述



#### 定义：

`stopAtFirstMatch(bool) tools.nucleiOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |


 
### nuclei.systemDnsResolver



#### 详细描述



#### 定义：

`systemDnsResolver(bool) tools.nucleiOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |


 
### nuclei.tags



#### 详细描述



#### 定义：

`tags(...string) tools.nucleiOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *httptpl.Config) ` |   |


 
### nuclei.targetConcurrent



#### 详细描述



#### 定义：

`func nuclei.targetConcurrent(v1: int) return (r0: func ConfigOption(v1: *httptpl.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *httptpl.Config) ` |   |


 
### nuclei.tcpResultCallback



#### 详细描述



#### 定义：

`func nuclei.tcpResultCallback(v1: func (v1: map[string]any) ) return (r0: func ConfigOption(v1: *httptpl.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `func (v1: map[string]any) ` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *httptpl.Config) ` |   |


 
### nuclei.templateList



#### 详细描述



#### 定义：

`templateList(bool) tools.nucleiOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |


 
### nuclei.templates



#### 详细描述



#### 定义：

`templates(...string) tools.nucleiOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *httptpl.Config) ` |   |


 
### nuclei.templatesDir



#### 详细描述



#### 定义：

`templatesDir(string) tools.nucleiOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |


 
### nuclei.templatesThreads



#### 详细描述



#### 定义：

`templatesThreads(int) tools.nucleiOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *httptpl.Config) ` |   |


 
### nuclei.templatesVersion



#### 详细描述



#### 定义：

`templatesVersion(bool) tools.nucleiOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |


 
### nuclei.timeout



#### 详细描述



#### 定义：

`timeout(int) tools.nucleiOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `float64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func LowhttpOpt(v1: *lowhttp.LowhttpExecConfig) ` |   |


 
### nuclei.updateTemplates



#### 详细描述



#### 定义：

`updateTemplates(bool) tools.nucleiOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |


 
### nuclei.verbose



#### 详细描述



#### 定义：

`verbose(bool) tools.nucleiOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *httptpl.Config) ` |   |


 
### nuclei.version



#### 详细描述



#### 定义：

`version(bool) tools.nucleiOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |


 
### nuclei.workflows



#### 详细描述



#### 定义：

`workflows(...string) tools.nucleiOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |


 


