# nuclei

|函数名|函数描述/介绍|
|:------|:--------|
| [nuclei.AllPoC](#allpoc) ||
| [nuclei.GetPoCDir](#getpocdir) ||
| [nuclei.PocVulToRisk](#pocvultorisk) ||
| [nuclei.PullDatabase](#pulldatabase) ||
| [nuclei.RemoveDatabase](#removedatabase) ||
| [nuclei.Scan](#scan) ||
| [nuclei.ScanAuto](#scanauto) ||
| [nuclei.UpdateDatabase](#updatedatabase) ||
| [nuclei.UpdatePoC](#updatepoc) ||
| [nuclei.all](#all) ||
| [nuclei.bulkSize](#bulksize) ||
| [nuclei.context](#context) ||
| [nuclei.customVulnFilter](#customvulnfilter) ||
| [nuclei.debug](#debug) ||
| [nuclei.debugRequest](#debugrequest) ||
| [nuclei.debugResponse](#debugresponse) ||
| [nuclei.dnsResolver](#dnsresolver) ||
| [nuclei.enableReverseConnection](#enablereverseconnection) ||
| [nuclei.exactTemplateIns](#exacttemplateins) ||
| [nuclei.excludeTags](#excludetags) ||
| [nuclei.excludeTemplates](#excludetemplates) ||
| [nuclei.fromPlugin](#fromplugin) ||
| [nuclei.fuzzQueryTemplate](#fuzzquerytemplate) ||
| [nuclei.headers](#headers) ||
| [nuclei.headless](#headless) ||
| [nuclei.http2](#http2) ||
| [nuclei.http3](#http3) ||
| [nuclei.https](#https) ||
| [nuclei.interactshTimeout](#interactshtimeout) ||
| [nuclei.logFile](#logfile) ||
| [nuclei.metrics](#metrics) ||
| [nuclei.mode](#mode) ||
| [nuclei.newTemplates](#newtemplates) ||
| [nuclei.noColor](#nocolor) ||
| [nuclei.noInteractsh](#nointeractsh) ||
| [nuclei.noMeta](#nometa) ||
| [nuclei.output](#output) ||
| [nuclei.pageTimeout](#pagetimeout) ||
| [nuclei.proxy](#proxy) ||
| [nuclei.rateLimit](#ratelimit) ||
| [nuclei.rawTemplate](#rawtemplate) ||
| [nuclei.reportingConfig](#reportingconfig) ||
| [nuclei.reportingDB](#reportingdb) ||
| [nuclei.resultCallback](#resultcallback) ||
| [nuclei.retry](#retry) ||
| [nuclei.reverseUrl](#reverseurl) ||
| [nuclei.runtimeId](#runtimeid) ||
| [nuclei.severity](#severity) ||
| [nuclei.showBrowser](#showbrowser) ||
| [nuclei.silent](#silent) ||
| [nuclei.stopAtFirstMatch](#stopatfirstmatch) ||
| [nuclei.systemDnsResolver](#systemdnsresolver) ||
| [nuclei.tags](#tags) ||
| [nuclei.targetConcurrent](#targetconcurrent) ||
| [nuclei.tcpResultCallback](#tcpresultcallback) ||
| [nuclei.templateList](#templatelist) ||
| [nuclei.templates](#templates) ||
| [nuclei.templatesDir](#templatesdir) ||
| [nuclei.templatesThreads](#templatesthreads) ||
| [nuclei.templatesVersion](#templatesversion) ||
| [nuclei.timeout](#timeout) ||
| [nuclei.updateTemplates](#updatetemplates) ||
| [nuclei.verbose](#verbose) ||
| [nuclei.version](#version) ||
| [nuclei.workflows](#workflows) ||


## 函数定义
### AllPoC

#### 详细描述


#### 定义

`AllPoC(defaultDirs ...string) ([]*templateDesc, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| defaultDirs | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*templateDesc` |   |
| r2 | `error` |   |


### GetPoCDir

#### 详细描述


#### 定义

`GetPoCDir() string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### PocVulToRisk

#### 详细描述


#### 定义

`PocVulToRisk(p *PocVul) *schema.Risk`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| p | `*PocVul` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*schema.Risk` |   |


### PullDatabase

#### 详细描述


#### 定义

`PullDatabase(giturl string, proxy ...string) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| giturl | `string` |   |
| proxy | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


### RemoveDatabase

#### 详细描述


#### 定义

`RemoveDatabase() error`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### Scan

#### 详细描述


#### 定义

`Scan(target any, opt ...any) (chan *tools.PocVul, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| target | `any` |   |
| opt | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *tools.PocVul` |   |
| r2 | `error` |   |


### ScanAuto

#### 详细描述


#### 定义

`ScanAuto(items any, opt ...any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| items | `any` |   |
| opt | `...any` |   |


### UpdateDatabase

#### 详细描述


#### 定义

`UpdateDatabase(nucleiDir ...string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| nucleiDir | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### UpdatePoC

#### 详细描述


#### 定义

`UpdatePoC(proxy ...string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| proxy | `...string` |   |


### all

#### 详细描述


#### 定义

`all(b bool) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### bulkSize

#### 详细描述


#### 定义

`bulkSize(i int) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### context

#### 详细描述


#### 定义

`context(c context.Context) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| c | `context.Context` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### customVulnFilter

#### 详细描述


#### 定义

`customVulnFilter(f filter.Filterable) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `filter.Filterable` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### debug

#### 详细描述


#### 定义

`debug(b bool) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### debugRequest

#### 详细描述


#### 定义

`debugRequest(b bool) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### debugResponse

#### 详细描述


#### 定义

`debugResponse(b bool) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### dnsResolver

#### 详细描述


#### 定义

`dnsResolver(servers []string) LowhttpOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| servers | `[]string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `LowhttpOpt` |   |


### enableReverseConnection

#### 详细描述


#### 定义

`enableReverseConnection(b bool) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### exactTemplateIns

#### 详细描述


#### 定义

`exactTemplateIns(script *schema.YakScript) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| script | `*schema.YakScript` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### excludeTags

#### 详细描述


#### 定义

`excludeTags(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` |   |


### excludeTemplates

#### 详细描述


#### 定义

`excludeTemplates(s ...string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### fromPlugin

#### 详细描述


#### 定义

`fromPlugin(fromPlugin string) LowhttpOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fromPlugin | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `LowhttpOpt` |   |


### fuzzQueryTemplate

#### 详细描述


#### 定义

`fuzzQueryTemplate(s ...string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### headers

#### 详细描述


#### 定义

`headers(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` |   |


### headless

#### 详细描述


#### 定义

`headless(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` |   |


### http2

#### 详细描述


#### 定义

`http2(Http2 bool) LowhttpOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| Http2 | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `LowhttpOpt` |   |


### http3

#### 详细描述


#### 定义

`http3(http3 bool) LowhttpOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| http3 | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `LowhttpOpt` |   |


### https

#### 详细描述


#### 定义

`https(https bool) LowhttpOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| https | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `LowhttpOpt` |   |


### interactshTimeout

#### 详细描述


#### 定义

`interactshTimeout(f float64) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### logFile

#### 详细描述


#### 定义

`logFile(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` |   |


### metrics

#### 详细描述


#### 定义

`metrics(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` |   |


### mode

#### 详细描述


#### 定义

`mode(s string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### newTemplates

#### 详细描述


#### 定义

`newTemplates(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` |   |


### noColor

#### 详细描述


#### 定义

`noColor(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` |   |


### noInteractsh

#### 详细描述


#### 定义

`noInteractsh(b bool) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### noMeta

#### 详细描述


#### 定义

`noMeta(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` |   |


### output

#### 详细描述


#### 定义

`output(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` |   |


### pageTimeout

#### 详细描述


#### 定义

`pageTimeout(i float64) lowhttp.LowhttpOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `lowhttp.LowhttpOpt` |   |


### proxy

#### 详细描述


#### 定义

`proxy(proxy ...string) LowhttpOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| proxy | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `LowhttpOpt` |   |


### rateLimit

#### 详细描述


#### 定义

`rateLimit(i float64) lowhttp.LowhttpOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `lowhttp.LowhttpOpt` |   |


### rawTemplate

#### 详细描述


#### 定义

`rawTemplate(b string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### reportingConfig

#### 详细描述


#### 定义

`reportingConfig(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` |   |


### reportingDB

#### 详细描述


#### 定义

`reportingDB(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` |   |


### resultCallback

#### 详细描述


#### 定义

`resultCallback(handler func(i map[string]any)) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| handler | `func(i map[string]any)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### retry

#### 详细描述


#### 定义

`retry(retryTimes int) LowhttpOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| retryTimes | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `LowhttpOpt` |   |


### reverseUrl

#### 详细描述


#### 定义

`reverseUrl(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` |   |


### runtimeId

#### 详细描述


#### 定义

`runtimeId(id string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| id | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### severity

#### 详细描述


#### 定义

`severity(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` |   |


### showBrowser

#### 详细描述


#### 定义

`showBrowser(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` |   |


### silent

#### 详细描述


#### 定义

`silent(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` |   |


### stopAtFirstMatch

#### 详细描述


#### 定义

`stopAtFirstMatch(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` |   |


### systemDnsResolver

#### 详细描述


#### 定义

`systemDnsResolver(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` |   |


### tags

#### 详细描述


#### 定义

`tags(f ...string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### targetConcurrent

#### 详细描述


#### 定义

`targetConcurrent(i int) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### tcpResultCallback

#### 详细描述


#### 定义

`tcpResultCallback(handler func(i map[string]any)) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| handler | `func(i map[string]any)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### templateList

#### 详细描述


#### 定义

`templateList(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` |   |


### templates

#### 详细描述


#### 定义

`templates(s ...string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### templatesDir

#### 详细描述


#### 定义

`templatesDir(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` |   |


### templatesThreads

#### 详细描述


#### 定义

`templatesThreads(i int) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### templatesVersion

#### 详细描述


#### 定义

`templatesVersion(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` |   |


### timeout

#### 详细描述


#### 定义

`timeout(i float64) lowhttp.LowhttpOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `lowhttp.LowhttpOpt` |   |


### updateTemplates

#### 详细描述


#### 定义

`updateTemplates(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` |   |


### verbose

#### 详细描述


#### 定义

`verbose(b bool) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### version

#### 详细描述


#### 定义

`version(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` |   |


### workflows

#### 详细描述


#### 定义

`workflows(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` |   |


