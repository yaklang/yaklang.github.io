# fuzz

|成员函数|函数描述/介绍|
|:------|:--------|
| [fuzz.FuzzCalcExpr](#FuzzCalcExpr) ||
| [fuzz.HTTPRequest](#HTTPRequest) ||
| [fuzz.MustHTTPRequest](#MustHTTPRequest) ||
| [fuzz.ProtobufBytes](#ProtobufBytes) ||
| [fuzz.ProtobufHex](#ProtobufHex) ||
| [fuzz.ProtobufJSON](#ProtobufJSON) ||
| [fuzz.ProtobufYAML](#ProtobufYAML) ||
| [fuzz.Strings](#Strings) |fuzz|
| [fuzz.StringsFunc](#StringsFunc) ||
| [fuzz.StringsWithParam](#StringsWithParam) ||
| [fuzz.UrlToHTTPRequest](#UrlToHTTPRequest) ||
| [fuzz.UrlsToHTTPRequests](#UrlsToHTTPRequests) ||
| [fuzz.WithConcurrentLimit](#WithConcurrentLimit) ||
| [fuzz.WithDelay](#WithDelay) ||
| [fuzz.WithNamingContext](#WithNamingContext) ||
| [fuzz.WithTimeOut](#WithTimeOut) ||
| [fuzz.https](#https) ||


## 函数定义
### FuzzCalcExpr

#### 详细描述


#### 定义

`FuzzCalcExpr() map[string]any`

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

`UrlsToHTTPRequests(target ...interface) (target ...interface)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| target | `...interface` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| target | `...interface` |   |


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


