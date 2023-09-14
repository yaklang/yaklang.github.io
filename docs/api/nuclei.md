# nuclei

|成员函数|函数描述/介绍|
|:------|:--------|
| [nuclei.AllPoC](#AllPoC) ||
| [nuclei.GetPoCDir](#GetPoCDir) ||
| [nuclei.PocVulToRisk](#PocVulToRisk) ||
| [nuclei.PullDatabase](#PullDatabase) ||
| [nuclei.RemoveDatabase](#RemoveDatabase) ||
| [nuclei.Scan](#Scan) ||
| [nuclei.ScanAuto](#ScanAuto) ||
| [nuclei.UpdateDatabase](#UpdateDatabase) ||
| [nuclei.all](#all) ||
| [nuclei.bulkSize](#bulkSize) ||
| [nuclei.debug](#debug) ||
| [nuclei.debugRequest](#debugRequest) ||
| [nuclei.debugResponse](#debugResponse) ||
| [nuclei.dnsResolver](#dnsResolver) ||
| [nuclei.enableReverseConnection](#enableReverseConnection) ||
| [nuclei.excludeTags](#excludeTags) ||
| [nuclei.excludeTemplates](#excludeTemplates) ||
| [nuclei.fromPlugin](#fromPlugin) ||
| [nuclei.fuzzQueryTemplate](#fuzzQueryTemplate) ||
| [nuclei.headers](#headers) ||
| [nuclei.headless](#headless) ||
| [nuclei.http2](#http2) ||
| [nuclei.https](#https) ||
| [nuclei.interactshTimeout](#interactshTimeout) ||
| [nuclei.logFile](#logFile) ||
| [nuclei.metrics](#metrics) ||
| [nuclei.mode](#mode) ||
| [nuclei.newTemplates](#newTemplates) ||
| [nuclei.noColor](#noColor) ||
| [nuclei.noInteractsh](#noInteractsh) ||
| [nuclei.noMeta](#noMeta) ||
| [nuclei.output](#output) ||
| [nuclei.pageTimeout](#pageTimeout) ||
| [nuclei.proxy](#proxy) ||
| [nuclei.rateLimit](#rateLimit) ||
| [nuclei.rawTemplate](#rawTemplate) ||
| [nuclei.reportingConfig](#reportingConfig) ||
| [nuclei.reportingDB](#reportingDB) ||
| [nuclei.resultCallback](#resultCallback) ||
| [nuclei.retry](#retry) ||
| [nuclei.reverseUrl](#reverseUrl) ||
| [nuclei.runtimeId](#runtimeId) ||
| [nuclei.severity](#severity) ||
| [nuclei.showBrowser](#showBrowser) ||
| [nuclei.silent](#silent) ||
| [nuclei.stopAtFirstMatch](#stopAtFirstMatch) ||
| [nuclei.systemDnsResolver](#systemDnsResolver) ||
| [nuclei.tags](#tags) ||
| [nuclei.targetConcurrent](#targetConcurrent) ||
| [nuclei.tcpResultCallback](#tcpResultCallback) ||
| [nuclei.templateList](#templateList) ||
| [nuclei.templates](#templates) ||
| [nuclei.templatesDir](#templatesDir) ||
| [nuclei.templatesThreads](#templatesThreads) ||
| [nuclei.templatesVersion](#templatesVersion) ||
| [nuclei.timeout](#timeout) ||
| [nuclei.updateTemplates](#updateTemplates) ||
| [nuclei.verbose](#verbose) ||
| [nuclei.version](#version) ||
| [nuclei.workflows](#workflows) ||


## 函数定义
### nuclei.AllPoC

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


### nuclei.GetPoCDir

#### 详细描述


#### 定义

`GetPoCDir() string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### nuclei.PocVulToRisk

#### 详细描述


#### 定义

`PocVulToRisk(p *PocVul) *yakit.Risk`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| p | `*PocVul` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*yakit.Risk` |   |


### nuclei.PullDatabase

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


### nuclei.RemoveDatabase

#### 详细描述


#### 定义

`RemoveDatabase() error`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### nuclei.Scan

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


### nuclei.ScanAuto

#### 详细描述


#### 定义

`ScanAuto(items any, opt ...any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| items | `any` |   |
| opt | `...any` |   |


### nuclei.UpdateDatabase

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


### nuclei.all

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


### nuclei.bulkSize

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


### nuclei.debug

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


### nuclei.debugRequest

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


### nuclei.debugResponse

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


### nuclei.dnsResolver

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


### nuclei.enableReverseConnection

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


### nuclei.excludeTags

#### 详细描述


#### 定义

`excludeTags(n string) func(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `func(i ...any) any` |   |


### nuclei.excludeTemplates

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


### nuclei.fromPlugin

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


### nuclei.fuzzQueryTemplate

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


### nuclei.headers

#### 详细描述


#### 定义

`headers(n string) func(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `func(i ...any) any` |   |


### nuclei.headless

#### 详细描述


#### 定义

`headless(n string) func(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `func(i ...any) any` |   |


### nuclei.http2

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


### nuclei.https

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


### nuclei.interactshTimeout

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


### nuclei.logFile

#### 详细描述


#### 定义

`logFile(n string) func(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `func(i ...any) any` |   |


### nuclei.metrics

#### 详细描述


#### 定义

`metrics(n string) func(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `func(i ...any) any` |   |


### nuclei.mode

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


### nuclei.newTemplates

#### 详细描述


#### 定义

`newTemplates(n string) func(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `func(i ...any) any` |   |


### nuclei.noColor

#### 详细描述


#### 定义

`noColor(n string) func(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `func(i ...any) any` |   |


### nuclei.noInteractsh

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


### nuclei.noMeta

#### 详细描述


#### 定义

`noMeta(n string) func(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `func(i ...any) any` |   |


### nuclei.output

#### 详细描述


#### 定义

`output(n string) func(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `func(i ...any) any` |   |


### nuclei.pageTimeout

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


### nuclei.proxy

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


### nuclei.rateLimit

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


### nuclei.rawTemplate

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


### nuclei.reportingConfig

#### 详细描述


#### 定义

`reportingConfig(n string) func(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `func(i ...any) any` |   |


### nuclei.reportingDB

#### 详细描述


#### 定义

`reportingDB(n string) func(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `func(i ...any) any` |   |


### nuclei.resultCallback

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


### nuclei.retry

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


### nuclei.reverseUrl

#### 详细描述


#### 定义

`reverseUrl(n string) func(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `func(i ...any) any` |   |


### nuclei.runtimeId

#### 详细描述


#### 定义

`runtimeId(runtimeId string) LowhttpOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| runtimeId | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `LowhttpOpt` |   |


### nuclei.severity

#### 详细描述


#### 定义

`severity(n string) func(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `func(i ...any) any` |   |


### nuclei.showBrowser

#### 详细描述


#### 定义

`showBrowser(n string) func(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `func(i ...any) any` |   |


### nuclei.silent

#### 详细描述


#### 定义

`silent(n string) func(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `func(i ...any) any` |   |


### nuclei.stopAtFirstMatch

#### 详细描述


#### 定义

`stopAtFirstMatch(n string) func(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `func(i ...any) any` |   |


### nuclei.systemDnsResolver

#### 详细描述


#### 定义

`systemDnsResolver(n string) func(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `func(i ...any) any` |   |


### nuclei.tags

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


### nuclei.targetConcurrent

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


### nuclei.tcpResultCallback

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


### nuclei.templateList

#### 详细描述


#### 定义

`templateList(n string) func(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `func(i ...any) any` |   |


### nuclei.templates

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


### nuclei.templatesDir

#### 详细描述


#### 定义

`templatesDir(n string) func(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `func(i ...any) any` |   |


### nuclei.templatesThreads

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


### nuclei.templatesVersion

#### 详细描述


#### 定义

`templatesVersion(n string) func(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `func(i ...any) any` |   |


### nuclei.timeout

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


### nuclei.updateTemplates

#### 详细描述


#### 定义

`updateTemplates(n string) func(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `func(i ...any) any` |   |


### nuclei.verbose

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


### nuclei.version

#### 详细描述


#### 定义

`version(n string) func(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `func(i ...any) any` |   |


### nuclei.workflows

#### 详细描述


#### 定义

`workflows(n string) func(i ...any) any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `func(i ...any) any` |   |


