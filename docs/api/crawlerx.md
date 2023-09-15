# crawlerx

|成员函数|函数描述/介绍|
|:------|:--------|
| [crawlerx.StartCrawler](#StartCrawler) ||
| [crawlerx.blacklist](#blacklist) ||
| [crawlerx.browserInfo](#browserInfo) ||
| [crawlerx.concurrent](#concurrent) ||
| [crawlerx.cookies](#cookies) ||
| [crawlerx.evalJs](#evalJs) ||
| [crawlerx.extraWaitLoadTime](#extraWaitLoadTime) ||
| [crawlerx.fileInput](#fileInput) ||
| [crawlerx.formFill](#formFill) ||
| [crawlerx.fullTimeout](#fullTimeout) ||
| [crawlerx.headers](#headers) ||
| [crawlerx.ignoreQueryName](#ignoreQueryName) ||
| [crawlerx.invalidSuffix](#invalidSuffix) ||
| [crawlerx.jsResultSend](#jsResultSend) ||
| [crawlerx.leakless](#leakless) ||
| [crawlerx.localStorage](#localStorage) ||
| [crawlerx.maxDepth](#maxDepth) ||
| [crawlerx.maxUrl](#maxUrl) ||
| [crawlerx.pageTimeout](#pageTimeout) ||
| [crawlerx.rawCookie](#rawCookie) ||
| [crawlerx.rawHeaders](#rawHeaders) ||
| [crawlerx.runtimeID](#runtimeID) ||
| [crawlerx.runtimeId](#runtimeId) ||
| [crawlerx.saveToDB](#saveToDB) ||
| [crawlerx.scanRangeLevel](#scanRangeLevel) ||
| [crawlerx.scanRepeatLevel](#scanRepeatLevel) ||
| [crawlerx.sensitiveWords](#sensitiveWords) ||
| [crawlerx.stealth](#stealth) ||
| [crawlerx.whitelist](#whitelist) ||


## 函数定义
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


