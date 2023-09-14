# http

|成员函数|函数描述/介绍|
|:------|:--------|
| [http.Do](#Do) ||
| [http.Get](#Get) ||
| [http.GetAllBody](#GetAllBody) ||
| [http.NewRequest](#NewRequest) ||
| [http.Post](#Post) ||
| [http.Raw](#Raw) ||
| [http.Request](#Request) ||
| [http.RequestFaviconHash](#RequestFaviconHash) ||
| [http.RequestToMD5](#RequestToMD5) ||
| [http.RequestToMMH3Hash128](#RequestToMMH3Hash128) ||
| [http.RequestToMMH3Hash128x64](#RequestToMMH3Hash128x64) ||
| [http.RequestToSha1](#RequestToSha1) ||
| [http.RequestToSha256](#RequestToSha256) ||
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
### http.Do

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


### http.Get

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


### http.GetAllBody

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


### http.NewRequest

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


### http.Post

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


### http.Raw

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


### http.Request

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


### http.RequestFaviconHash

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


### http.RequestToMD5

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


### http.RequestToMMH3Hash128

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


### http.RequestToMMH3Hash128x64

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


### http.RequestToSha1

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


### http.RequestToSha256

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


### http.body

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


### http.cookie

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


### http.dump

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


### http.dumphead

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


### http.fakeua

#### 详细描述


#### 定义

`fakeua() HttpOption`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpOption` |   |


### http.header

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


### http.json

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


### http.noredirect

#### 详细描述


#### 定义

`noredirect() HttpOption`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpOption` |   |


### http.params

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


### http.postparams

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


### http.proxy

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


### http.redirect

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


### http.session

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


### http.show

#### 详细描述


#### 定义

`show(i any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |


### http.showhead

#### 详细描述


#### 定义

`showhead(i any)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |


### http.timeout

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


### http.ua

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


### http.uarand

#### 详细描述


#### 定义

`uarand() string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### http.useragent

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


