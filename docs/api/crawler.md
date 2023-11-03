# crawler

|成员函数|函数描述/介绍|
|:------|:--------|
| [crawler.RequestsFromFlow](#requestsfromflow) ||
| [crawler.Start](#start) ||
| [crawler.autoLogin](#autologin) ||
| [crawler.basicAuth](#basicauth) ||
| [crawler.bodySize](#bodysize) ||
| [crawler.concurrent](#concurrent) ||
| [crawler.connectTimeout](#connecttimeout) ||
| [crawler.cookie](#cookie) ||
| [crawler.disallowSuffix](#disallowsuffix) ||
| [crawler.domainExclude](#domainexclude) ||
| [crawler.domainInclude](#domaininclude) ||
| [crawler.forbiddenFromParent](#forbiddenfromparent) ||
| [crawler.header](#header) ||
| [crawler.maxDepth](#maxdepth) ||
| [crawler.maxRedirect](#maxredirect) ||
| [crawler.maxRequest](#maxrequest) ||
| [crawler.maxRetry](#maxretry) ||
| [crawler.maxUrls](#maxurls) ||
| [crawler.proxy](#proxy) ||
| [crawler.responseTimeout](#responsetimeout) ||
| [crawler.timeout](#timeout) ||
| [crawler.ua](#ua) ||
| [crawler.urlExtractor](#urlextractor) ||
| [crawler.urlRegexpExclude](#urlregexpexclude) ||
| [crawler.urlRegexpInclude](#urlregexpinclude) ||
| [crawler.userAgent](#useragent) ||


## 函数定义
### RequestsFromFlow

#### 详细描述


#### 定义

`RequestsFromFlow(isHttps bool, reqBytes []byte, rspBytes []byte) ([][]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| isHttps | `bool` |   |
| reqBytes | `[]byte` |   |
| rspBytes | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[][]byte` |   |
| r2 | `error` |   |


### Start

#### 详细描述


#### 定义

`Start(url string, opt ...configOpt) (chan *Req, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` |   |
| opt | `...configOpt` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan *Req` |   |
| r2 | `error` |   |


### autoLogin

#### 详细描述


#### 定义

`autoLogin(username string, password string, flags ...string) configOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| username | `string` |   |
| password | `string` |   |
| flags | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `configOpt` |   |


### basicAuth

#### 详细描述


#### 定义

`basicAuth(user string, pass string) configOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| user | `string` |   |
| pass | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `configOpt` |   |


### bodySize

#### 详细描述


#### 定义

`bodySize(size int) configOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| size | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `configOpt` |   |


### concurrent

#### 详细描述


#### 定义

`concurrent(concurrent int) configOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| concurrent | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `configOpt` |   |


### connectTimeout

#### 详细描述


#### 定义

`connectTimeout(f float64) configOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `configOpt` |   |


### cookie

#### 详细描述


#### 定义

`cookie(k string, v string) configOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| k | `string` |   |
| v | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `configOpt` |   |


### disallowSuffix

#### 详细描述


#### 定义

`disallowSuffix(d []string) configOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| d | `[]string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `configOpt` |   |


### domainExclude

#### 详细描述


#### 定义

`domainExclude(domain string) configOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| domain | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `configOpt` |   |


### domainInclude

#### 详细描述


#### 定义

`domainInclude(domain string) configOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| domain | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `configOpt` |   |


### forbiddenFromParent

#### 详细描述


#### 定义

`forbiddenFromParent(b bool) configOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `configOpt` |   |


### header

#### 详细描述


#### 定义

`header(k string, v string) configOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| k | `string` |   |
| v | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `configOpt` |   |


### maxDepth

#### 详细描述


#### 定义

`maxDepth(depth int) configOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| depth | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `configOpt` |   |


### maxRedirect

#### 详细描述


#### 定义

`maxRedirect(maxRedirectTimes int) configOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| maxRedirectTimes | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `configOpt` |   |


### maxRequest

#### 详细描述


#### 定义

`maxRequest(limit int) configOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| limit | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `configOpt` |   |


### maxRetry

#### 详细描述


#### 定义

`maxRetry(limit int) configOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| limit | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `configOpt` |   |


### maxUrls

#### 详细描述


#### 定义

`maxUrls(limit int) configOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| limit | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `configOpt` |   |


### proxy

#### 详细描述


#### 定义

`proxy(proxies ...string) configOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| proxies | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `configOpt` |   |


### responseTimeout

#### 详细描述


#### 定义

`responseTimeout(f float64) configOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `configOpt` |   |


### timeout

#### 详细描述


#### 定义

`timeout(f float64) configOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `configOpt` |   |


### ua

#### 详细描述


#### 定义

`ua(ua string) configOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ua | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `configOpt` |   |


### urlExtractor

#### 详细描述


#### 定义

`urlExtractor(f func(*Req) []any) configOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `func(*Req) []any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `configOpt` |   |


### urlRegexpExclude

#### 详细描述


#### 定义

`urlRegexpExclude(re string) configOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| re | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `configOpt` |   |


### urlRegexpInclude

#### 详细描述


#### 定义

`urlRegexpInclude(re string) configOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| re | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `configOpt` |   |


### userAgent

#### 详细描述


#### 定义

`userAgent(ua string) configOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ua | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `configOpt` |   |


