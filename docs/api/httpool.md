# httpool


|成员函数|函数描述/介绍|
|:------|:--------|
 | [httpool.Pool](#httpoolpool) |  |
 | [httpool.host](#httpoolhost) |  |
 | [httpool.https](#httpoolhttps) |  |
 | [httpool.perRequestTimeout](#httpoolperrequesttimeout) |  |
 | [httpool.port](#httpoolport) |  |
 | [httpool.size](#httpoolsize) |  |




 



## 函数定义

### httpool.Pool



#### 详细描述



#### 定义：

`func httpool.Pool(v1: any, v2 ...mutate.httpPoolConfigOption) return (r0: chan *mutate._httpResult, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `...mutate.httpPoolConfigOption` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `chan *mutate._httpResult` |   |
| r1 | `error` |   |


 
### httpool.host



#### 详细描述



#### 定义：

`func httpool.host(v1: string) return (r0: func httpPoolConfigOption(v1: *mutate.httpPoolConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func httpPoolConfigOption(v1: *mutate.httpPoolConfig) ` |   |


 
### httpool.https



#### 详细描述



#### 定义：

`func httpool.https(v1: bool) return (r0: func httpPoolConfigOption(v1: *mutate.httpPoolConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func httpPoolConfigOption(v1: *mutate.httpPoolConfig) ` |   |


 
### httpool.perRequestTimeout



#### 详细描述



#### 定义：

`func httpool.perRequestTimeout(v1: float64) return (r0: func httpPoolConfigOption(v1: *mutate.httpPoolConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `float64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func httpPoolConfigOption(v1: *mutate.httpPoolConfig) ` |   |


 
### httpool.port



#### 详细描述



#### 定义：

`func httpool.port(v1: int) return (r0: func httpPoolConfigOption(v1: *mutate.httpPoolConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func httpPoolConfigOption(v1: *mutate.httpPoolConfig) ` |   |


 
### httpool.size



#### 详细描述



#### 定义：

`func httpool.size(v1: int) return (r0: func httpPoolConfigOption(v1: *mutate.httpPoolConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func httpPoolConfigOption(v1: *mutate.httpPoolConfig) ` |   |


 


