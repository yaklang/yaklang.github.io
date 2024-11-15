# fuzz

|函数名|函数描述/介绍|
|:------|:--------|
| [fuzz.FuzzCalcExpr](#fuzzcalcexpr) ||
| [fuzz.FuzzCalcExprInt32Safe](#fuzzcalcexprint32safe) ||
| [fuzz.FuzzCalcExprInt64Safe](#fuzzcalcexprint64safe) ||
| [fuzz.HTTPRequest](#httprequest) ||
| [fuzz.MustHTTPRequest](#musthttprequest) ||
| [fuzz.ProtobufBytes](#protobufbytes) ||
| [fuzz.ProtobufHex](#protobufhex) ||
| [fuzz.ProtobufJSON](#protobufjson) ||
| [fuzz.ProtobufYAML](#protobufyaml) ||
| [fuzz.Strings](#strings) |fuzz |
| [fuzz.StringsFunc](#stringsfunc) ||
| [fuzz.StringsWithParam](#stringswithparam) ||
| [fuzz.UrlToHTTPRequest](#urltohttprequest) ||
| [fuzz.UrlsToHTTPRequests](#urlstohttprequests) ||
| [fuzz.WithConcurrentLimit](#withconcurrentlimit) ||
| [fuzz.WithDelay](#withdelay) ||
| [fuzz.WithNamingContext](#withnamingcontext) ||
| [fuzz.WithTimeOut](#withtimeout) ||
| [fuzz.context](#context) ||
| [fuzz.https](#https) ||
| [fuzz.noEncode](#noencode) ||
| [fuzz.proxy](#proxy) ||
| [fuzz.showTag](#showtag) ||


## 函数定义
### FuzzCalcExpr

#### 详细描述


#### 定义

`FuzzCalcExpr() map[string]any`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `map[string]any` |   |


### FuzzCalcExprInt32Safe

#### 详细描述


#### 定义

`FuzzCalcExprInt32Safe() map[string]any`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `map[string]any` |   |


### FuzzCalcExprInt64Safe

#### 详细描述


#### 定义

`FuzzCalcExprInt64Safe() map[string]any`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `map[string]any` |   |


### HTTPRequest

#### 详细描述


#### 定义

`HTTPRequest(i any, opts ...BuildFuzzHTTPRequestOption) (*FuzzHTTPRequest, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |
| opts | `...BuildFuzzHTTPRequestOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*FuzzHTTPRequest` |   |
| r2 | `error` |   |


### MustHTTPRequest

#### 详细描述


#### 定义

`MustHTTPRequest(i any, opts ...BuildFuzzHTTPRequestOption) *FuzzHTTPRequest`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |
| opts | `...BuildFuzzHTTPRequestOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*FuzzHTTPRequest` |   |


### ProtobufBytes

#### 详细描述


#### 定义

`ProtobufBytes(i any) *ProtobufRecords`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ProtobufRecords` |   |


### ProtobufHex

#### 详细描述


#### 定义

`ProtobufHex(i any) *ProtobufRecords`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ProtobufRecords` |   |


### ProtobufJSON

#### 详细描述


#### 定义

`ProtobufJSON(i any) *ProtobufRecords`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ProtobufRecords` |   |


### ProtobufYAML

#### 详细描述


#### 定义

`ProtobufYAML(i any) *ProtobufRecords`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ProtobufRecords` |   |


### Strings

#### 详细描述
fuzz


#### 定义

`Strings(i any) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### StringsFunc

#### 详细描述


#### 定义

`StringsFunc(i any, cb func(i *mutate.MutateResult), params ...any) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |
| cb | `func(i *mutate.MutateResult)` |   |
| params | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### StringsWithParam

#### 详细描述


#### 定义

`StringsWithParam(i any, i2 any) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |
| i2 | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### UrlToHTTPRequest

#### 详细描述


#### 定义

`UrlToHTTPRequest(method string, i any) (*mutate.FuzzHTTPRequest, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| method | `string` |   |
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*mutate.FuzzHTTPRequest` |   |
| r2 | `error` |   |


### UrlsToHTTPRequests

#### 详细描述


#### 定义

`UrlsToHTTPRequests(target ...any) (*FuzzHTTPRequestBatch, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| target | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*FuzzHTTPRequestBatch` |   |
| r2 | `error` |   |


### WithConcurrentLimit

#### 详细描述


#### 定义

`WithConcurrentLimit(i int) HttpPoolConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpPoolConfigOption` |   |


### WithDelay

#### 详细描述


#### 定义

`WithDelay(b float64) HttpPoolConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpPoolConfigOption` |   |


### WithNamingContext

#### 详细描述


#### 定义

`WithNamingContext(invokerName string) HttpPoolConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| invokerName | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpPoolConfigOption` |   |


### WithTimeOut

#### 详细描述


#### 定义

`WithTimeOut(f float64) HttpPoolConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpPoolConfigOption` |   |


### context

#### 详细描述


#### 定义

`context(ctx context.Context) BuildFuzzHTTPRequestOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BuildFuzzHTTPRequestOption` |   |


### https

#### 详细描述


#### 定义

`https(i bool) BuildFuzzHTTPRequestOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BuildFuzzHTTPRequestOption` |   |


### noEncode

#### 详细描述


#### 定义

`noEncode(i bool) BuildFuzzHTTPRequestOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BuildFuzzHTTPRequestOption` |   |


### proxy

#### 详细描述


#### 定义

`proxy(i string) BuildFuzzHTTPRequestOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `BuildFuzzHTTPRequestOption` |   |


### showTag

#### 详细描述


#### 定义

`showTag()`


