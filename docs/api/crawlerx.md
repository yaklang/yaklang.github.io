# crawlerx

|实例名|实例描述|
|:------|:--------|
SubMenuScan|(crawlerx.scanRangeLevel) 1|
MediumRepeatLevel|(crawlerx.repeatLevel) 2|
ExtremeRepeatLevel|(crawlerx.repeatLevel) 4|
HighRepeatLevel|(crawlerx.repeatLevel) 3|
LowRepeatLevel|(crawlerx.repeatLevel) 1|
AllDomainScan|(crawlerx.scanRangeLevel) 0|
UnLimitRepeat|(crawlerx.repeatLevel) 0|

|函数名|函数描述/介绍|
|:------|:--------|
| [crawlerx.PageScreenShot](#pagescreenshot) ||
| [crawlerx.StartCrawler](#startcrawler) ||
| [crawlerx.blacklist](#blacklist) ||
| [crawlerx.browserInfo](#browserinfo) ||
| [crawlerx.concurrent](#concurrent) ||
| [crawlerx.cookies](#cookies) ||
| [crawlerx.evalJs](#evaljs) ||
| [crawlerx.extraWaitLoadTime](#extrawaitloadtime) ||
| [crawlerx.fileInput](#fileinput) ||
| [crawlerx.formFill](#formfill) ||
| [crawlerx.fromPlugin](#fromplugin) ||
| [crawlerx.fullTimeout](#fulltimeout) ||
| [crawlerx.headers](#headers) ||
| [crawlerx.ignoreQueryName](#ignorequeryname) ||
| [crawlerx.invalidSuffix](#invalidsuffix) ||
| [crawlerx.jsResultSend](#jsresultsend) ||
| [crawlerx.leakless](#leakless) ||
| [crawlerx.localStorage](#localstorage) ||
| [crawlerx.maxDepth](#maxdepth) ||
| [crawlerx.maxUrl](#maxurl) ||
| [crawlerx.pageTimeout](#pagetimeout) ||
| [crawlerx.rawCookie](#rawcookie) ||
| [crawlerx.rawHeaders](#rawheaders) ||
| [crawlerx.response](#response) ||
| [crawlerx.runtimeID](#runtimeid) ||
| [crawlerx.runtimeId](#runtimeid) ||
| [crawlerx.saveToDB](#savetodb) ||
| [crawlerx.scanRangeLevel](#scanrangelevel) ||
| [crawlerx.scanRepeatLevel](#scanrepeatlevel) ||
| [crawlerx.sensitiveWords](#sensitivewords) ||
| [crawlerx.sessionStorage](#sessionstorage) ||
| [crawlerx.sourceType](#sourcetype) ||
| [crawlerx.stealth](#stealth) ||
| [crawlerx.urlCheck](#urlcheck) ||
| [crawlerx.vue](#vue) ||
| [crawlerx.whitelist](#whitelist) ||


## 函数定义
### PageScreenShot

#### 详细描述


#### 定义

`PageScreenShot(targetUrl string, opts ...ConfigOpt) (code string, err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| targetUrl | `string` |   |
| opts | `...ConfigOpt` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| code | `string` |   |
| err | `error` |   |


### StartCrawler

#### 详细描述


#### 定义

`StartCrawler(url string, opts ...ConfigOpt) (chan ReqInfo, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` |   |
| opts | `...ConfigOpt` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan ReqInfo` |   |
| r2 | `error` |   |


### blacklist

#### 详细描述


#### 定义

`blacklist(keywords ...string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| keywords | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### browserInfo

#### 详细描述


#### 定义

`browserInfo(data string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| data | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### concurrent

#### 详细描述


#### 定义

`concurrent(concurrent int) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| concurrent | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### cookies

#### 详细描述


#### 定义

`cookies(domain string, cookiesInfo map[string]string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| domain | `string` |   |
| cookiesInfo | `map[string]string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### evalJs

#### 详细描述


#### 定义

`evalJs(target string, evalJs string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| target | `string` |   |
| evalJs | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### extraWaitLoadTime

#### 详细描述


#### 定义

`extraWaitLoadTime(extraWaitLoadTime int) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| extraWaitLoadTime | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### fileInput

#### 详细描述


#### 定义

`fileInput(fileInput map[string]string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fileInput | `map[string]string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### formFill

#### 详细描述


#### 定义

`formFill(formFills map[string]string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| formFills | `map[string]string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### fromPlugin

#### 详细描述


#### 定义

`fromPlugin(fromPlugin string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fromPlugin | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### fullTimeout

#### 详细描述


#### 定义

`fullTimeout(timeout int) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| timeout | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### headers

#### 详细描述


#### 定义

`headers(headersInfo map[string]string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| headersInfo | `map[string]string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### ignoreQueryName

#### 详细描述


#### 定义

`ignoreQueryName(names ...string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| names | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### invalidSuffix

#### 详细描述


#### 定义

`invalidSuffix(suffix []string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| suffix | `[]string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### jsResultSend

#### 详细描述


#### 定义

`jsResultSend(storage func(s string)) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| storage | `func(s string)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### leakless

#### 详细描述


#### 定义

`leakless(leakless string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| leakless | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### localStorage

#### 详细描述


#### 定义

`localStorage(storage map[string]string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| storage | `map[string]string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### maxDepth

#### 详细描述


#### 定义

`maxDepth(depth int) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| depth | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### maxUrl

#### 详细描述


#### 定义

`maxUrl(maxUrl int) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| maxUrl | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### pageTimeout

#### 详细描述


#### 定义

`pageTimeout(timeout int) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| timeout | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### rawCookie

#### 详细描述


#### 定义

`rawCookie(domain string, cookieInfo string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| domain | `string` |   |
| cookieInfo | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### rawHeaders

#### 详细描述


#### 定义

`rawHeaders(headerInfo string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| headerInfo | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### response

#### 详细描述


#### 定义

`response(targetUrl string, response string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| targetUrl | `string` |   |
| response | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### runtimeID

#### 详细描述


#### 定义

`runtimeID(id string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| id | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### runtimeId

#### 详细描述


#### 定义

`runtimeId(id string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| id | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### saveToDB

#### 详细描述


#### 定义

`saveToDB(b bool) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### scanRangeLevel

#### 详细描述


#### 定义

`scanRangeLevel(scanRange scanRangeLevel) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| scanRange | `scanRangeLevel` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### scanRepeatLevel

#### 详细描述


#### 定义

`scanRepeatLevel(scanRepeat repeatLevel) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| scanRepeat | `repeatLevel` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### sensitiveWords

#### 详细描述


#### 定义

`sensitiveWords(words []string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| words | `[]string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### sessionStorage

#### 详细描述


#### 定义

`sessionStorage(storage map[string]string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| storage | `map[string]string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### sourceType

#### 详细描述


#### 定义

`sourceType(sourceType string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| sourceType | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### stealth

#### 详细描述


#### 定义

`stealth(stealth bool) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| stealth | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### urlCheck

#### 详细描述


#### 定义

`urlCheck(check bool) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| check | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### vue

#### 详细描述


#### 定义

`vue(vue bool) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| vue | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


### whitelist

#### 详细描述


#### 定义

`whitelist(keywords ...string) ConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| keywords | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOpt` |   |


