# context


|成员函数|函数描述/介绍|
|:------|:--------|
 | [context.Background](#contextbackground) | 创建一个基础的 `context.Context` |
 | [context.New](#contextnew) | 同 `context.Background()` |
 | [context.Seconds](#contextseconds) | 生成一个几秒结束的 context |
 | [context.WithCancel](#contextwithcancel) | 给 context 增加一个 cancel 手动按钮 |
 | [context.WithDeadline](#contextwithdeadline) | 给上下文增加一个 ddl |
 | [context.WithTimeout](#contextwithtimeout) | 给 context 带一个超时间隔，如果超时就自动取消 |
 | [context.WithValue](#contextwithvalue) | 为上下文绑定一个 kv 对 |




 



## 函数定义

### context.Background

创建一个基础的 `context.Context`

#### 详细描述



#### 定义：

`func context.Background() return (ctx: context.Context)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` |   |


 
### context.New

同 `context.Background()`

#### 详细描述



#### 定义：

`func context.New() return (ctx: context.Context)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` |   |


 
### context.Seconds

生成一个几秒结束的 context

#### 详细描述



#### 定义：

`func context.Seconds(seconds: float) return (ctx: context.Context)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| seconds | `float` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` |   |


 
### context.WithCancel

给 context 增加一个 cancel 手动按钮

#### 详细描述



#### 定义：

`func context.WithCancel(originCtx: context.Context) return (r0: context.Context, r1: func CancelFunc() )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| originCtx | `context.Context` |  想要增加 cancel 的上下文实例 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `context.Context` |   |
| r1 | `func CancelFunc() ` |   |


 
### context.WithDeadline

给上下文增加一个 ddl

#### 详细描述



#### 定义：

`func context.WithDeadline(ctx: context.Context, ddl: time.Time) return (r0: context.Context, r1: func CancelFunc() )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` |   |
| ddl | `time.Time` |  想要设置的 context 的过期时间，使用 time.Time，可以直接用 time 模块创建 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `context.Context` |   |
| r1 | `func CancelFunc() ` |   |


 
### context.WithTimeout

给 context 带一个超时间隔，如果超时就自动取消

#### 详细描述



#### 定义：

`func context.WithTimeout(ctx: context.Context, timeout: time.Duration) return (ctx: context.Context, cancel: func CancelFunc() )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` |   |
| timeout | `time.Duration` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` |   |
| cancel | `func CancelFunc() ` |   |


 
### context.WithValue

为上下文绑定一个 kv 对

#### 详细描述



#### 定义：

`func context.WithValue(ctx: context.Context, key: any, value: any) return (ctx: context.Context)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` |   |
| key | `any` |   |
| value | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` |   |


 


