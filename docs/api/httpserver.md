# httpserver

|成员函数|函数描述/介绍|
|:------|:--------|
| [httpserver.LocalFileSystemServe](#localfilesystemserve) ||
| [httpserver.Serve](#serve) ||
| [httpserver.context](#context) ||
| [httpserver.handler](#handler) ||
| [httpserver.tlsCertAndKey](#tlscertandkey) ||


## 函数定义
### LocalFileSystemServe

#### 详细描述


#### 定义

`LocalFileSystemServe(host string, port int, prefix string, localPath string, opts ...HttpServerConfigOpt) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| host | `string` |   |
| port | `int` |   |
| prefix | `string` |   |
| localPath | `string` |   |
| opts | `...HttpServerConfigOpt` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### Serve

#### 详细描述


#### 定义

`Serve(host string, port int, opts ...HttpServerConfigOpt) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| host | `string` |   |
| port | `int` |   |
| opts | `...HttpServerConfigOpt` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### context

#### 详细描述


#### 定义

`context(ctx context.Context) HttpServerConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpServerConfigOpt` |   |


### handler

#### 详细描述


#### 定义

`handler(cb func(rsp http.ResponseWriter, req *http.Request)) HttpServerConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cb | `func(rsp http.ResponseWriter, req *http.Request)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpServerConfigOpt` |   |


### tlsCertAndKey

#### 详细描述


#### 定义

`tlsCertAndKey(crt any, key any, cas ...any) HttpServerConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| crt | `any` |   |
| key | `any` |   |
| cas | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `HttpServerConfigOpt` |   |


