# nuclei


|成员函数|函数描述/介绍|
|:------|:--------|
 | [nuclei.AllPoC](#nucleiallpoc) | 获取当前所有 PoC 对象 |
 | [nuclei.GetPoCDir](#nucleigetpocdir) |  |
 | [nuclei.PocVulToRisk](#nucleipocvultorisk) |  |
 | [nuclei.PullDatabase](#nucleipulldatabase) | 拉去数据库 |
 | [nuclei.RemoveDatabase](#nucleiremovedatabase) | 移除 nuclei 数据库 |
 | [nuclei.Scan](#nucleiscan) | nuclei 核心函数，v1 为扫描目标，输入网段/IP/域名/URL 都可以，会被自动解析为 URL（可能会自动补充 www.） |
 | [nuclei.ScanWithContext](#nucleiscanwithcontext) | 带上下文进行扫描，通过上下文控制通断 |
 | [nuclei.UpdateDatabase](#nucleiupdatedatabase) |  |
 | [nuclei.UpdatePoC](#nucleiupdatepoc) | 更新 PoC |
 | [nuclei.bulkSize](#nucleibulksize) | 【参数】同 nuclei 每个模板最大并行的主机数(默认25) |
 | [nuclei.debug](#nucleidebug) | 【参数】调试模式，打印更多的调试信息 |
 | [nuclei.debugRequest](#nucleidebugrequest) | 【参数】打印所有发出的请求，调试 |
 | [nuclei.debugResponse](#nucleidebugresponse) | 【参数】调试响应信息 |
 | [nuclei.dnsResolver](#nucleidnsresolver) | 【参数】设置 DNS 解析服务器 |
 | [nuclei.excludeTags](#nucleiexcludetags) | 【参数】排除 nuclei 扫描模版中的 Tag |
 | [nuclei.excludeTemplates](#nucleiexcludetemplates) | 【参数】排除 Nuclei 模版中特定模版 |
 | [nuclei.headers](#nucleiheaders) | 【参数】设置特定 Headers（x-bug-bounty:hacker） |
 | [nuclei.headless](#nucleiheadless) | 【参数】启动浏览器无界面模式 |
 | [nuclei.logFile](#nucleilogfile) | 【参数】设置日志文件 |
 | [nuclei.metrics](#nucleimetrics) | 【参数】打印统计信息 |
 | [nuclei.newTemplates](#nucleinewtemplates) | 【参数】表明当前进行新模版的编写模式 |
 | [nuclei.noColor](#nucleinocolor) | 【参数】输入不带颜色 |
 | [nuclei.noInteractsh](#nucleinointeractsh) | 【参数】不要交互式 Shell |
 | [nuclei.noMeta](#nucleinometa) | 【参数】不显示匹配的元数据 |
 | [nuclei.output](#nucleioutput) | 【参数】设置最终结果输出到的文件 |
 | [nuclei.pageTimeout](#nucleipagetimeout) | 【参数】页超时时间 |
 | [nuclei.project](#nucleiproject) | 【参数】避免发送相同请求，声明当前是同一个项目 |
 | [nuclei.proxy](#nucleiproxy) | 为 nuclei 设置代理 |
 | [nuclei.rateLimit](#nucleiratelimit) | 【参数】限制每秒最大请求（150默认） |
 | [nuclei.reportingConfig](#nucleireportingconfig) | 【参数】配置报告 |
 | [nuclei.reportingDB](#nucleireportingdb) | 【参数】报告数据库 |
 | [nuclei.retry](#nucleiretry) | 【参数】设置重试次数 |
 | [nuclei.reverseUrl](#nucleireverseurl) | 反连 URL |
 | [nuclei.severity](#nucleiseverity) | 【参数】设置扫描级别（middle/high/critical/low），筛选 nuclei templates |
 | [nuclei.showBrowser](#nucleishowbrowser) | 【参数】展示浏览器 |
 | [nuclei.silent](#nucleisilent) | 【参数】尽量少的输出结果，只展示成功的结果 |
 | [nuclei.stopAtFirstMatch](#nucleistopatfirstmatch) | 【参数】第一次检测出结果就马上停止 |
 | [nuclei.systemDnsResolver](#nucleisystemdnsresolver) | 【参数】使用系统 DNS |
 | [nuclei.tags](#nucleitags) | 【参数】扫描特定 nuclei templates，通过 tags 筛选 |
 | [nuclei.templateList](#nucleitemplatelist) | 【参数】展示所有的 templates |
 | [nuclei.templates](#nucleitemplates) | 【参数】设置想要扫描的 templates 或者存放 templates 的目录 |
 | [nuclei.templatesDir](#nucleitemplatesdir) | 【参数】设置存放 templates 的目录 |
 | [nuclei.templatesThreads](#nucleitemplatesthreads) | 【参数】设置 templates 的线程 |
 | [nuclei.templatesVersion](#nucleitemplatesversion) | 【参数】展示 templates 的版本 |
 | [nuclei.timeout](#nucleitimeout) | 【参数】设置超时时间 |
 | [nuclei.updateTemplates](#nucleiupdatetemplates) | 【参数】更新 nuclei template |
 | [nuclei.verbose](#nucleiverbose) | 【参数】设置输出更多的调试信息 |
 | [nuclei.version](#nucleiversion) | 【参数】展示版本信息 |
 | [nuclei.workflows](#nucleiworkflows) | 【参数】使用 templates 中的特定 workflow 来扫描 |




 



## 函数定义

### nuclei.AllPoC

获取当前所有 PoC 对象

#### 详细描述



#### 定义：

`func nuclei.AllPoC(v1 ...string) return (r0: []*tools.templateDesc, r1: error)`


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

`func nuclei.GetPoCDir() return (r0: string)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### nuclei.PocVulToRisk



#### 详细描述



#### 定义：

`func nuclei.PocVulToRisk(v1: *tools.PocVul) return (r0: *yakit.Risk)`


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

`func nuclei.PullDatabase(gitUrl: string, proxies ...string) return (r0: string, r1: error)`


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

`func nuclei.RemoveDatabase() return (r0: error)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### nuclei.Scan

nuclei 核心函数，v1 为扫描目标，输入网段/IP/域名/URL 都可以，会被自动解析为 URL（可能会自动补充 www.）

#### 详细描述



#### 定义：

`func nuclei.Scan(targets: string, nucleiParams ...params) return (pocChannel: chan *tools.PocVul, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| targets | `string` |   |
| nucleiParams | `...params` |  nuclei的额外参数 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| pocChannel | `chan *tools.PocVul` |  扫描漏洞结果 |
| r1 | `error` |   |


 
### nuclei.ScanWithContext

带上下文进行扫描，通过上下文控制通断

#### 详细描述



#### 定义：

`func nuclei.ScanWithContext(ctx: context.Context, targets: string, opts ...tools.nucleiOpt) return (r0: chan *tools.PocVul, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` |   |
| targets | `string` |   |
| opts | `...tools.nucleiOpt` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `chan *tools.PocVul` |   |
| r1 | `error` |   |


 
### nuclei.UpdateDatabase



#### 详细描述



#### 定义：

`func nuclei.UpdateDatabase(localPath ...string) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| localPath | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### nuclei.UpdatePoC

更新 PoC

#### 详细描述



#### 定义：

`func nuclei.UpdatePoC() return (r0: error)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### nuclei.bulkSize

【参数】同 nuclei 每个模板最大并行的主机数(默认25)

#### 详细描述



#### 定义：

`func nuclei.bulkSize(size: int) return (r0: func nucleiOpt(v1: *types.Options) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| size | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func nucleiOpt(v1: *types.Options) ` |   |


 
### nuclei.debug

【参数】调试模式，打印更多的调试信息

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

【参数】打印所有发出的请求，调试

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

【参数】调试响应信息

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

【参数】设置 DNS 解析服务器

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

【参数】排除 nuclei 扫描模版中的 Tag

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

【参数】排除 Nuclei 模版中特定模版

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

【参数】设置特定 Headers（x-bug-bounty:hacker）

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

【参数】启动浏览器无界面模式

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

【参数】设置日志文件

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

【参数】打印统计信息

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

【参数】表明当前进行新模版的编写模式

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

【参数】输入不带颜色

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

【参数】不要交互式 Shell

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

【参数】不显示匹配的元数据

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

【参数】设置最终结果输出到的文件

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

【参数】页超时时间

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

【参数】避免发送相同请求，声明当前是同一个项目

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

为 nuclei 设置代理

#### 详细描述



#### 定义：

`func nuclei.proxy(proxies ...string) return (r0: func nucleiOpt(v1: *types.Options) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| proxies | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func nucleiOpt(v1: *types.Options) ` |   |


 
### nuclei.rateLimit

【参数】限制每秒最大请求（150默认）

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

【参数】配置报告

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

【参数】报告数据库

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

【参数】设置重试次数

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


 
### nuclei.reverseUrl

反连 URL

#### 详细描述



#### 定义：

`func nuclei.reverseUrl(v1: string) return (r0: func nucleiOpt(v1: *types.Options) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func nucleiOpt(v1: *types.Options) ` |   |


 
### nuclei.severity

【参数】设置扫描级别（middle/high/critical/low），筛选 nuclei templates

#### 详细描述



#### 定义：

`func nuclei.severity(level ...string) return (r0: func nucleiOpt(v1: *types.Options) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| level | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func nucleiOpt(v1: *types.Options) ` |   |


 
### nuclei.showBrowser

【参数】展示浏览器

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

【参数】尽量少的输出结果，只展示成功的结果

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

【参数】第一次检测出结果就马上停止

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

【参数】使用系统 DNS

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

【参数】扫描特定 nuclei templates，通过 tags 筛选

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

【参数】展示所有的 templates

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

【参数】设置想要扫描的 templates 或者存放 templates 的目录

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

【参数】设置存放 templates 的目录

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

【参数】设置 templates 的线程

#### 详细描述



#### 定义：

`func nuclei.templatesThreads(threadSize: int) return (r0: func nucleiOpt(v1: *types.Options) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| threadSize | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func nucleiOpt(v1: *types.Options) ` |   |


 
### nuclei.templatesVersion

【参数】展示 templates 的版本

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

【参数】设置超时时间

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

【参数】更新 nuclei template

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

【参数】设置输出更多的调试信息

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

【参数】展示版本信息

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

【参数】使用 templates 中的特定 workflow 来扫描

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


 


