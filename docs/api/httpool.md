# httpool


|成员函数|函数描述/介绍|
|:------|:--------|
 | [httpool.Pool](#httpoolpool) |  |
 | [httpool.context](#httpoolcontext) |  |
 | [httpool.fuzz](#httpoolfuzz) |  |
 | [httpool.fuzzParams](#httpoolfuzzparams) |  |
 | [httpool.host](#httpoolhost) |  |
 | [httpool.https](#httpoolhttps) |  |
 | [httpool.noFixContentLength](#httpoolnofixcontentlength) |  |
 | [httpool.perRequestTimeout](#httpoolperrequesttimeout) |  |
 | [httpool.port](#httpoolport) |  |
 | [httpool.proxy](#httpoolproxy) |  |
 | [httpool.rawMode](#httpoolrawmode) |  |
 | [httpool.redirectTimes](#httpoolredirecttimes) |  |
 | [httpool.size](#httpoolsize) |  |




 



## 函数定义

### httpool.Pool



#### 详细描述



#### 定义：

`Pool(i any, opts ...httpPoolConfigOption) (chan *_httpResult, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `...mutate.HttpPoolConfigOption` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `chan *mutate._httpResult` |   |
| r1 | `error` |   |


 
### httpool.context



#### 详细描述



#### 定义：

`context(context.Context) mutate.httpPoolConfigOption`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `context.Context` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func HttpPoolConfigOption(v1: *mutate.httpPoolConfig) ` |   |


 
### httpool.fuzz



#### 详细描述



#### 定义：

`fuzz(bool) mutate.httpPoolConfigOption`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func HttpPoolConfigOption(v1: *mutate.httpPoolConfig) ` |   |


 
### httpool.fuzzParams



#### 详细描述



#### 定义：

`fuzzParams(any) mutate.httpPoolConfigOption`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func HttpPoolConfigOption(v1: *mutate.httpPoolConfig) ` |   |


 
### httpool.host



#### 详细描述



#### 定义：

`host(string, bool) mutate.httpPoolConfigOption`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func HttpPoolConfigOption(v1: *mutate.httpPoolConfig) ` |   |


 
### httpool.https



#### 详细描述



#### 定义：

`https(bool) mutate.httpPoolConfigOption`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func HttpPoolConfigOption(v1: *mutate.httpPoolConfig) ` |   |


 
### httpool.noFixContentLength



#### 详细描述



#### 定义：

`noFixContentLength(bool) mutate.httpPoolConfigOption`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func HttpPoolConfigOption(v1: *mutate.httpPoolConfig) ` |   |


 
### httpool.perRequestTimeout



#### 详细描述



#### 定义：

`perRequestTimeout(float64) mutate.httpPoolConfigOption`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `float64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func HttpPoolConfigOption(v1: *mutate.httpPoolConfig) ` |   |


 
### httpool.port



#### 详细描述



#### 定义：

`port(int) mutate.httpPoolConfigOption`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func HttpPoolConfigOption(v1: *mutate.httpPoolConfig) ` |   |


 
### httpool.proxy



#### 详细描述



#### 定义：

`proxy(...string) mutate.httpPoolConfigOption`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func HttpPoolConfigOption(v1: *mutate.httpPoolConfig) ` |   |


 
### httpool.rawMode



#### 详细描述



#### 定义：

`rawMode(bool) mutate.httpPoolConfigOption`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func HttpPoolConfigOption(v1: *mutate.httpPoolConfig) ` |   |


 
### httpool.redirectTimes



#### 详细描述



#### 定义：

`redirectTimes(int) mutate.httpPoolConfigOption`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func HttpPoolConfigOption(v1: *mutate.httpPoolConfig) ` |   |


 
### httpool.size



#### 详细描述



#### 定义：

`size(int) mutate.httpPoolConfigOption`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func HttpPoolConfigOption(v1: *mutate.httpPoolConfig) ` |   |


 


