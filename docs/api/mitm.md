# mitm

|成员函数|函数描述/介绍|
|:------|:--------|
| [mitm.Bridge](#Bridge) ||
| [mitm.Start](#Start) ||
| [mitm.callback](#callback) ||
| [mitm.context](#context) ||
| [mitm.hijackHTTPRequest](#hijackHTTPRequest) ||
| [mitm.hijackHTTPResponse](#hijackHTTPResponse) ||
| [mitm.hijackHTTPResponseEx](#hijackHTTPResponseEx) ||
| [mitm.host](#host) ||
| [mitm.isTransparent](#isTransparent) ||
| [mitm.maxContentLength](#maxContentLength) ||
| [mitm.rootCA](#rootCA) ||
| [mitm.useDefaultCA](#useDefaultCA) ||
| [mitm.wscallback](#wscallback) ||
| [mitm.wsforcetext](#wsforcetext) ||


## 函数定义
### mitm.Bridge

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


### mitm.Start

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


### mitm.callback

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


### mitm.context

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


### mitm.hijackHTTPRequest

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


### mitm.hijackHTTPResponse

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


### mitm.hijackHTTPResponseEx

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


### mitm.host

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


### mitm.isTransparent

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


### mitm.maxContentLength

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


### mitm.rootCA

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


### mitm.useDefaultCA

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


### mitm.wscallback

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


### mitm.wsforcetext

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


