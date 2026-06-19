# context

|函数名|函数描述/介绍|
|:------|:--------|
| [context.Background](#background) |Background 返回空的 Context 接口（即上下文接口） 返回值: - 一个空的根上下文接口|
| [context.New](#new) |New 返回空的 Context 接口（即上下文接口） 它实际是 context.Background 的别名 返回值: - 一个空的根上下文接口|
| [context.Seconds](#seconds) |Seconds 返回一个超时时间为 d 秒的 Context 接口（即上下文接口） 它实际是 context.WithTimeoutSeconds 的别名 参数: - d: 超时时间，单位为秒 返回值: - 带有指定超时的上下文接口|
| [context.WithCancel](#withcancel) |WithCancel 返回继承自 parent 的 Context 接口（即上下文接口）和取消函数 当调用返回的取消函数或者 parent 的取消函数时，整个上下文会被取消 参数: - parent: 父上下文 返回值: - 派生出的可取消上下文 - 取消函数，调用后会取消该上下文|
| [context.WithDeadline](#withdeadline) |WithDeadline 返回继承自 parent 的 Context 接口（即上下文接口）和取消函数 当调用返回的取消函数或者超出指定时间，整个上下文会被取消 参数: - parent: 父上下文 - t: 截止时间点 返回值: - 派生出的带截止时间的上下文 - 取消函数，调用后会取消该上下文|
| [context.WithTimeout](#withtimeout) |WithTimeout 返回继承自 parent 的 Context 接口（即上下文接口）和取消函数 当调用返回的取消函数或者超时，整个上下文会被取消 参数: - parent: 父上下文 - timeout: 超时时间间隔 返回值: - 派生出的带超时的上下文 - 取消函数，调用后会取消该上下文|
| [context.WithTimeoutSeconds](#withtimeoutseconds) |WithTimeoutSeconds 返回超时时间为 d 秒的 Context 接口（即上下文接口） 参数: - d: 超时时间，单位为秒 返回值: - 带有指定超时的上下文接口|
| [context.WithValue](#withvalue) |WithValue 返回继承自 parent ，同时额外携带键值的 Context 接口（即上下文接口） 可通过 ctx.Value(key) 读取携带的值 参数: - parent: 父上下文 - key: 携带值的键 - val: 携带的值 返回值: - 携带了指定键值的派生上下文|


## 函数定义
### Background

#### 详细描述
Background 返回空的 Context 接口（即上下文接口）

返回值:

  - 一个空的根上下文接口




Example:

``````````````yak
// VARS: 创建根上下文
ctx = context.Background()
// assert: 根上下文没有错误
assert ctx.Err() == nil, "background context should have no error"
``````````````


#### 定义

`Background() context.Context`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `context.Context` | 一个空的根上下文接口 |


### New

#### 详细描述
New 返回空的 Context 接口（即上下文接口）

它实际是 context.Background 的别名

返回值:

  - 一个空的根上下文接口




Example:

``````````````yak
// VARS: 创建根上下文
ctx = context.New()
// assert: 根上下文没有错误
assert ctx.Err() == nil, "background context should have no error"
``````````````


#### 定义

`New() context.Context`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `context.Context` | 一个空的根上下文接口 |


### Seconds

#### 详细描述
Seconds 返回一个超时时间为 d 秒的 Context 接口（即上下文接口）

它实际是 context.WithTimeoutSeconds 的别名

参数:

  - d: 超时时间，单位为秒



返回值:

  - 带有指定超时的上下文接口




Example:

``````````````yak
// VARS: 创建 10 秒超时上下文
ctx = context.Seconds(10)
// assert: 刚创建时尚未超时，Err 为 nil
assert ctx.Err() == nil, "fresh timeout context should have no error yet"
``````````````


#### 定义

`Seconds(d float64) context.Context`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| d | `float64` | 超时时间，单位为秒 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `context.Context` | 带有指定超时的上下文接口 |


### WithCancel

#### 详细描述
WithCancel 返回继承自 parent 的 Context 接口（即上下文接口）和取消函数

当调用返回的取消函数或者 parent 的取消函数时，整个上下文会被取消

参数:

  - parent: 父上下文



返回值:

  - 派生出的可取消上下文

  - 取消函数，调用后会取消该上下文




Example:

``````````````yak
// VARS: 派生一个可取消上下文
ctx, cancel = context.WithCancel(context.New())
// 取消前没有错误
assert ctx.Err() == nil, "context should have no error before cancel"
// 取消后产生错误
cancel()
assert ctx.Err() != nil, "context should report error after cancel"
``````````````


#### 定义

`WithCancel(parent context.Context) (context.Context, context.CancelFunc)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| parent | `context.Context` | 父上下文 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `context.Context` | 派生出的可取消上下文 |
| r2 | `context.CancelFunc` | 取消函数，调用后会取消该上下文 |


### WithDeadline

#### 详细描述
WithDeadline 返回继承自 parent 的 Context 接口（即上下文接口）和取消函数

当调用返回的取消函数或者超出指定时间，整个上下文会被取消

参数:

  - parent: 父上下文

  - t: 截止时间点



返回值:

  - 派生出的带截止时间的上下文

  - 取消函数，调用后会取消该上下文




Example:

``````````````yak
// VARS: 派生一个带未来截止时间的上下文
dur = time.ParseDuration("10s")~
after = time.Now().Add(dur)
ctx, cancel = context.WithDeadline(context.New(), after)
defer cancel()
// assert: 截止时间尚未到达
assert ctx.Err() == nil, "context should have no error before deadline"
``````````````


#### 定义

`WithDeadline(parent context.Context, t time.Time) (context.Context, context.CancelFunc)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| parent | `context.Context` | 父上下文 |
| t | `time.Time` | 截止时间点 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `context.Context` | 派生出的带截止时间的上下文 |
| r2 | `context.CancelFunc` | 取消函数，调用后会取消该上下文 |


### WithTimeout

#### 详细描述
WithTimeout 返回继承自 parent 的 Context 接口（即上下文接口）和取消函数

当调用返回的取消函数或者超时，整个上下文会被取消

参数:

  - parent: 父上下文

  - timeout: 超时时间间隔



返回值:

  - 派生出的带超时的上下文

  - 取消函数，调用后会取消该上下文




Example:

``````````````yak
// VARS: 派生一个 10 秒超时的上下文
dur = time.ParseDuration("10s")~
ctx, cancel = context.WithTimeout(context.New(), dur)
defer cancel()
// assert: 刚创建时尚未超时
assert ctx.Err() == nil, "context should have no error before timeout"
``````````````


#### 定义

`WithTimeout(parent context.Context, timeout time.Duration) (context.Context, context.CancelFunc)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| parent | `context.Context` | 父上下文 |
| timeout | `time.Duration` | 超时时间间隔 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `context.Context` | 派生出的带超时的上下文 |
| r2 | `context.CancelFunc` | 取消函数，调用后会取消该上下文 |


### WithTimeoutSeconds

#### 详细描述
WithTimeoutSeconds 返回超时时间为 d 秒的 Context 接口（即上下文接口）

参数:

  - d: 超时时间，单位为秒



返回值:

  - 带有指定超时的上下文接口




Example:

``````````````yak
// VARS: 创建 10 秒超时上下文
ctx = context.WithTimeoutSeconds(10)
// assert: 刚创建时尚未超时，Err 为 nil
assert ctx.Err() == nil, "fresh timeout context should have no error yet"
``````````````


#### 定义

`WithTimeoutSeconds(d float64) context.Context`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| d | `float64` | 超时时间，单位为秒 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `context.Context` | 带有指定超时的上下文接口 |


### WithValue

#### 详细描述
WithValue 返回继承自 parent ，同时额外携带键值的 Context 接口（即上下文接口）

可通过 ctx.Value(key) 读取携带的值

参数:

  - parent: 父上下文

  - key: 携带值的键

  - val: 携带的值



返回值:

  - 携带了指定键值的派生上下文




Example:

``````````````yak
// VARS: 在上下文中携带键值
ctx = context.WithValue(context.New(), "key", "value")
// STDOUT: 读取携带的值
println(ctx.Value("key"))   // OUT: value
// assert: 锁定结论
assert ctx.Value("key") == "value", "WithValue should carry the value"
``````````````


#### 定义

`WithValue(parent context.Context, key any, val any) context.Context`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| parent | `context.Context` | 父上下文 |
| key | `any` | 携带值的键 |
| val | `any` | 携带的值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `context.Context` | 携带了指定键值的派生上下文 |


