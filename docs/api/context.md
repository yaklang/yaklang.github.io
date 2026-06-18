# context

|函数名|函数描述/介绍|
|:------|:--------|
| [context.Background](#background) |Background 返回空的 Context 接口（即上下文接口）  |
| [context.New](#new) |New 返回空的 Context 接口（即上下文接口）  它实际是 context.Background 的别名  |
| [context.Seconds](#seconds) |Seconds 返回一个超时时间为 d 秒的 Context 接口（即上下文接口）  它实际是 context.WithTimeoutSeconds 的别名  |
| [context.WithCancel](#withcancel) |WithCancel 返回继承自 parent 的 Context 接口（即上下文接口）和取消函数  当调用返回的取消函数或者 parent 的取消函数时，整个上下文会被取消  |
| [context.WithDeadline](#withdeadline) |WithDeadline 返回继承自 parent 的 Context 接口（即上下文接口）和取消函数  当调用返回的取消函数或者超出指定时间，整个上下文会被取消  |
| [context.WithTimeout](#withtimeout) |WithTimeout 返回继承自 parent 的 Context 接口（即上下文接口）和取消函数  当调用返回的取消函数或者超时，整个上下文会被取消  |
| [context.WithTimeoutSeconds](#withtimeoutseconds) |WithTimeoutSeconds 返回超时时间为 d 秒的 Context 接口（即上下文接口）  |
| [context.WithValue](#withvalue) |WithValue 返回继承自 parent ，同时额外携带键值的 Context 接口（即上下文接口）和取消函数  当调用返回的取消函数时，整个上下文会被取消  |


## 函数定义
### Background

#### 详细描述
Background 返回空的 Context 接口（即上下文接口）

Example:
```
ctx = context.Background()
```


#### 定义

`Background() context.Context`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `context.Context` |   |


### New

#### 详细描述
New 返回空的 Context 接口（即上下文接口）

它实际是 context.Background 的别名

Example:
```
ctx = context.New()
```


#### 定义

`New() context.Context`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `context.Context` |   |


### Seconds

#### 详细描述
Seconds 返回一个超时时间为 d 秒的 Context 接口（即上下文接口）

它实际是 context.WithTimeoutSeconds 的别名

Example:
```
ctx = context.Seconds(10)
```


#### 定义

`Seconds(d float64) context.Context`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| d | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `context.Context` |   |


### WithCancel

#### 详细描述
WithCancel 返回继承自 parent 的 Context 接口（即上下文接口）和取消函数

当调用返回的取消函数或者 parent 的取消函数时，整个上下文会被取消

Example:
```
ctx, cancel = context.WithCancel(context.Background())
defer cancel()
```


#### 定义

`WithCancel(parent context.Context) (context.Context, context.CancelFunc)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| parent | `context.Context` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `context.Context` |   |
| r2 | `context.CancelFunc` |   |


### WithDeadline

#### 详细描述
WithDeadline 返回继承自 parent 的 Context 接口（即上下文接口）和取消函数

当调用返回的取消函数或者超出指定时间，整个上下文会被取消

Example:
```
dur, err = time.ParseDuration("10s")
after = time.Now().Add(dur)
ctx, cancel := context.WithDeadline(context.Background(), after)
defer cancel()
```


#### 定义

`WithDeadline(parent context.Context, t time.Time) (context.Context, context.CancelFunc)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| parent | `context.Context` |   |
| t | `time.Time` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `context.Context` |   |
| r2 | `context.CancelFunc` |   |


### WithTimeout

#### 详细描述
WithTimeout 返回继承自 parent 的 Context 接口（即上下文接口）和取消函数

当调用返回的取消函数或者超时，整个上下文会被取消

Example:
```
dur, err = time.ParseDuration("10s")
ctx, cancel := context.WithTimeout(context.Background(), dur)
defer cancel()
```


#### 定义

`WithTimeout(parent context.Context, timeout time.Duration) (context.Context, context.CancelFunc)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| parent | `context.Context` |   |
| timeout | `time.Duration` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `context.Context` |   |
| r2 | `context.CancelFunc` |   |


### WithTimeoutSeconds

#### 详细描述
WithTimeoutSeconds 返回超时时间为 d 秒的 Context 接口（即上下文接口）

Example:
```
ctx = context.WithTimeoutSeconds(10)
```


#### 定义

`WithTimeoutSeconds(d float64) context.Context`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| d | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `context.Context` |   |


### WithValue

#### 详细描述
WithValue 返回继承自 parent ，同时额外携带键值的 Context 接口（即上下文接口）和取消函数

当调用返回的取消函数时，整个上下文会被取消

Example:
```
ctx = context.WithValue(context.Background(), "key", "value")
ctx.Value("key") // "value"
```


#### 定义

`WithValue(parent context.Context, key any, val any) context.Context`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| parent | `context.Context` |   |
| key | `any` |   |
| val | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `context.Context` |   |


