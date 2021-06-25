# mitm


|成员函数|函数描述/介绍|
|:------|:--------|
 | [mitm.Bridge](#mitmbridge) |  |
 | [mitm.Start](#mitmstart) |  |
 | [mitm.callback](#mitmcallback) |  |
 | [mitm.context](#mitmcontext) |  |
 | [mitm.host](#mitmhost) |  |
 | [mitm.rootCA](#mitmrootca) |  |




 



## 函数定义

### mitm.Bridge



#### 详细描述



#### 定义：

`func mitm.Bridge(v1: any, v2: string, v3 ...yaklib.mitmConfigOpt) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `string` |   |
| v3 | `...yaklib.mitmConfigOpt` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### mitm.Start



#### 详细描述



#### 定义：

`func mitm.Start(v1: int, v2 ...yaklib.mitmConfigOpt) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |
| v2 | `...yaklib.mitmConfigOpt` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### mitm.callback



#### 详细描述



#### 定义：

`func mitm.callback(v1: func (v1: bool, v2: *http.Request, v3: *http.Response) ) return (r0: func mitmConfigOpt(v1: *yaklib.mitmConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `func (v1: bool, v2: *http.Request, v3: *http.Response) ` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func mitmConfigOpt(v1: *yaklib.mitmConfig) ` |   |


 
### mitm.context



#### 详细描述



#### 定义：

`func mitm.context(v1: context.Context) return (r0: func mitmConfigOpt(v1: *yaklib.mitmConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `context.Context` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func mitmConfigOpt(v1: *yaklib.mitmConfig) ` |   |


 
### mitm.host



#### 详细描述



#### 定义：

`func mitm.host(v1: string) return (r0: func mitmConfigOpt(v1: *yaklib.mitmConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func mitmConfigOpt(v1: *yaklib.mitmConfig) ` |   |


 
### mitm.rootCA



#### 详细描述



#### 定义：

`func mitm.rootCA(v1: bytes, v2: bytes) return (r0: func mitmConfigOpt(v1: *yaklib.mitmConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func mitmConfigOpt(v1: *yaklib.mitmConfig) ` |   |


 


