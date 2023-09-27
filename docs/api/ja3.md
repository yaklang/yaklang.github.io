# ja3

|成员函数|函数描述/介绍|
|:------|:--------|
| [ja3.GetTransportByClientHelloSpec](#gettransportbyclienthellospec) ||
| [ja3.ParseJA3](#parseja3) ||
| [ja3.ParseJA3S](#parseja3s) ||
| [ja3.ParseJA3ToClientHelloSpec](#parseja3toclienthellospec) ||


## 函数定义
### gettransportbyclienthellospec

#### 详细描述


#### 定义

`GetTransportByClientHelloSpec(spec *tls.ClientHelloSpec) *http.Transport`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| spec | `*tls.ClientHelloSpec` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*http.Transport` |   |


### parseja3

#### 详细描述


#### 定义

`ParseJA3(ja3FullString string) (*JA3, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ja3FullString | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JA3` |   |
| r2 | `error` |   |


### parseja3s

#### 详细描述


#### 定义

`ParseJA3S(ja3sFullString string) (*JA3S, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ja3sFullString | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JA3S` |   |
| r2 | `error` |   |


### parseja3toclienthellospec

#### 详细描述


#### 定义

`ParseJA3ToClientHelloSpec(str string) (*tls.ClientHelloSpec, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| str | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*tls.ClientHelloSpec` |   |
| r2 | `error` |   |


