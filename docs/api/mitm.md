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



#### 定义：

`func (v1: interface {}, v2: string, v3 ...func mitmConfigOpt(v1: *yaklib.mitmConfig) ) return(error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | interface {} |   |
| v2 | string |   |
| v3 | []yaklib.mitmConfigOpt |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | error |   |


### mitm.Start



#### 定义：

`func (v1: int, v2 ...func mitmConfigOpt(v1: *yaklib.mitmConfig) ) return(error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | int |   |
| v2 | []yaklib.mitmConfigOpt |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | error |   |


### mitm.callback



#### 定义：

`func (v1: func (v1: bool, v2: *http.Request, v3: *http.Response) ) return(func mitmConfigOpt(v1: *yaklib.mitmConfig) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | func (v1: bool, v2: *http.Request, v3: *http.Response)  |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func mitmConfigOpt(v1: *yaklib.mitmConfig)  |   |


### mitm.context



#### 定义：

`func (v1: context.Context) return(func mitmConfigOpt(v1: *yaklib.mitmConfig) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | context.Context |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func mitmConfigOpt(v1: *yaklib.mitmConfig)  |   |


### mitm.host



#### 定义：

`func (v1: string) return(func mitmConfigOpt(v1: *yaklib.mitmConfig) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func mitmConfigOpt(v1: *yaklib.mitmConfig)  |   |


### mitm.rootCA



#### 定义：

`func (v1: []uint8, v2: []uint8) return(func mitmConfigOpt(v1: *yaklib.mitmConfig) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | []uint8 |   |
| v2 | []uint8 |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func mitmConfigOpt(v1: *yaklib.mitmConfig)  |   |





