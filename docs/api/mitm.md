# mitm

|成员函数|函数描述/介绍|
|:------|:--------|
| [mitm.Bridge](#bridge) ||
| [mitm.Start](#start) ||
| [mitm.callback](#callback) ||
| [mitm.context](#context) ||
| [mitm.hijackHTTPRequest](#hijackhttprequest) ||
| [mitm.hijackHTTPResponse](#hijackhttpresponse) ||
| [mitm.hijackHTTPResponseEx](#hijackhttpresponseex) ||
| [mitm.host](#host) ||
| [mitm.isTransparent](#istransparent) ||
| [mitm.maxContentLength](#maxcontentlength) ||
| [mitm.rootCA](#rootca) ||
| [mitm.useDefaultCA](#usedefaultca) ||
| [mitm.wscallback](#wscallback) ||
| [mitm.wsforcetext](#wsforcetext) ||


## 函数定义
### bridge

#### 详细描述


#### 定义

`Bridge(port any, downstreamProxy string, opts ...mitmConfigOpt) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| port | `any` |   |
| downstreamProxy | `string` |   |
| opts | `...mitmConfigOpt` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### start

#### 详细描述


#### 定义

`Start(port int, opts ...mitmConfigOpt) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| port | `int` |   |
| opts | `...mitmConfigOpt` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### callback

#### 详细描述


#### 定义

`callback(f func(bool, string, *http.Request, *http.Response)) mitmConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `func(bool, string, *http.Request, *http.Response)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `mitmConfigOpt` |   |


### context

#### 详细描述


#### 定义

`context(ctx context.Context) mitmConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `mitmConfigOpt` |   |


### hijackhttprequest

#### 详细描述


#### 定义

`hijackHTTPRequest(h func(isHttps bool, u string, req []byte, modified func([]byte), dropped func())) mitmConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `func(isHttps bool, u string, req []byte, modified func([]byte), dropped func())` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `mitmConfigOpt` |   |


### hijackhttpresponse

#### 详细描述


#### 定义

`hijackHTTPResponse(h func(isHttps bool, u string, rsp []byte, modified func([]byte), dropped func())) mitmConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `func(isHttps bool, u string, rsp []byte, modified func([]byte), dropped func())` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `mitmConfigOpt` |   |


### hijackhttpresponseex

#### 详细描述


#### 定义

`hijackHTTPResponseEx(h func(bool, string, []byte, []byte, func([]byte), func())) mitmConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `func(bool, string, []byte, []byte, func([]byte), func())` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `mitmConfigOpt` |   |


### host

#### 详细描述


#### 定义

`host(host string) mitmConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| host | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `mitmConfigOpt` |   |


### istransparent

#### 详细描述


#### 定义

`isTransparent(b bool) mitmConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `mitmConfigOpt` |   |


### maxcontentlength

#### 详细描述


#### 定义

`maxContentLength(i int) mitmConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `mitmConfigOpt` |   |


### rootca

#### 详细描述


#### 定义

`rootCA(cert []byte, key []byte) mitmConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cert | `[]byte` |   |
| key | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `mitmConfigOpt` |   |


### usedefaultca

#### 详细描述


#### 定义

`useDefaultCA(t bool) mitmConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| t | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `mitmConfigOpt` |   |


### wscallback

#### 详细描述


#### 定义

`wscallback(f func([]byte, bool) any) mitmConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `func([]byte, bool) any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `mitmConfigOpt` |   |


### wsforcetext

#### 详细描述


#### 定义

`wsforcetext(b bool) mitmConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `mitmConfigOpt` |   |


