# http

|成员函数|函数描述/介绍|
|:------|:--------|
| [http.Do](#do) ||
| [http.Get](#get) ||
| [http.GetAllBody](#getallbody) ||
| [http.NewRequest](#newrequest) ||
| [http.Post](#post) ||
| [http.Raw](#raw) ||
| [http.Request](#request) ||
| [http.RequestFaviconHash](#requestfaviconhash) ||
| [http.RequestToMD5](#requesttomd5) ||
| [http.RequestToMMH3Hash128](#requesttommh3hash128) ||
| [http.RequestToMMH3Hash128x64](#requesttommh3hash128x64) ||
| [http.RequestToSha1](#requesttosha1) ||
| [http.RequestToSha256](#requesttosha256) ||
| [http.body](#body) ||
| [http.cookie](#cookie) ||
| [http.dump](#dump) ||
| [http.dumphead](#dumphead) ||
| [http.fakeua](#fakeua) ||
| [http.header](#header) ||
| [http.json](#json) ||
| [http.noredirect](#noredirect) ||
| [http.params](#params) |GetParams set query params|
| [http.postparams](#postparams) |PostParams set post params|
| [http.proxy](#proxy) ||
| [http.redirect](#redirect) ||
| [http.session](#session) ||
| [http.show](#show) ||
| [http.showhead](#showhead) ||
| [http.timeout](#timeout) ||
| [http.ua](#ua) ||
| [http.uarand](#uarand) ||
| [http.useragent](#useragent) ||


## 函数定义
### do

#### 详细描述


#### 定义

`Do(req *YakHttpRequest) (*http.Response, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| req | `*YakHttpRequest` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*http.Response` |   |
| r2 | `error` |   |


### get

#### 详细描述


#### 定义

`Get(url string, opts ...HttpOption) (*YakHttpResponse, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` |   |
| opts | `...HttpOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*YakHttpResponse` |   |
| r2 | `error` |   |


### getallbody

#### 详细描述


#### 定义

`GetAllBody(raw any) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### newrequest

#### 详细描述


#### 定义

`NewRequest(method string, url string, opts ...HttpOption) (*YakHttpRequest, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| method | `string` |   |
| url | `string` |   |
| opts | `...HttpOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*YakHttpRequest` |   |
| r2 | `error` |   |


### post

#### 详细描述


#### 定义

`Post(url string, opts ...HttpOption) (*YakHttpResponse, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` |   |
| opts | `...HttpOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*YakHttpResponse` |   |
| r2 | `error` |   |


### raw

#### 详细描述


#### 定义

`Raw(i any) (*http.Request, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*http.Request` |   |
| r2 | `error` |   |


### request

#### 详细描述


#### 定义

`Request(method string, url string, options ...HttpOption) (*YakHttpResponse, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| method | `string` |   |
| url | `string` |   |
| options | `...HttpOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*YakHttpResponse` |   |
| r2 | `error` |   |


### requestfaviconhash

#### 详细描述


#### 定义

`RequestFaviconHash(urlRaw string) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| urlRaw | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


### requesttomd5

#### 详细描述


#### 定义

`RequestToMD5(url string) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


### requesttommh3hash128

#### 详细描述


#### 定义

`RequestToMMH3Hash128(url string) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


### requesttommh3hash128x64

#### 详细描述


#### 定义

`RequestToMMH3Hash128x64(url string) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


### requesttosha1

#### 详细描述


#### 定义

`RequestToSha1(url string) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


### requesttosha256

#### 详细描述


#### 定义

`RequestToSha256(url string) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


### body

#### 详细描述


#### 定义

`body(value any) HttpOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| value | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpOption` |   |


### cookie

#### 详细描述


#### 定义

`cookie(value any) HttpOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| value | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpOption` |   |


### dump

#### 详细描述


#### 定义

`dump(i any) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### dumphead

#### 详细描述


#### 定义

`dumphead(i any) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### fakeua

#### 详细描述


#### 定义

`fakeua() HttpOption`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpOption` |   |


### header

#### 详细描述


#### 定义

`header(key any, value any) HttpOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `any` |   |
| value | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpOption` |   |


### json

#### 详细描述


#### 定义

`json(value any) HttpOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| value | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpOption` |   |


### noredirect

#### 详细描述


#### 定义

`noredirect() HttpOption`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpOption` |   |


### params

#### 详细描述
GetParams set query params

#### 定义

`params(i any) HttpOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpOption` |   |


### postparams

#### 详细描述
PostParams set post params

#### 定义

`postparams(i any) HttpOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpOption` |   |


### proxy

#### 详细描述


#### 定义

`proxy(values ...string) HttpOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| values | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpOption` |   |


### redirect

#### 详细描述


#### 定义

`redirect(c func(r *http.Request, vias []*http.Request) bool) HttpOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| c | `func(r *http.Request, vias []*http.Request) bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpOption` |   |


### session

#### 详细描述


#### 定义

`session(value any) HttpOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| value | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpOption` |   |


### show

#### 详细描述


#### 定义

`show(i any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |


### showhead

#### 详细描述


#### 定义

`showhead(i any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |


### timeout

#### 详细描述


#### 定义

`timeout(f float64) HttpOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpOption` |   |


### ua

#### 详细描述


#### 定义

`ua(value any) HttpOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| value | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpOption` |   |


### uarand

#### 详细描述


#### 定义

`uarand() string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### useragent

#### 详细描述


#### 定义

`useragent(value any) HttpOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| value | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpOption` |   |


