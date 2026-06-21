# context {#library-context}

`context` 库是 Go 标准库 `context` 的 yak 封装，用于在并发与网络操作中传递取消信号、超时与截止时间，是控制长耗时操作（扫描、请求、AI 调用）生命周期的基础设施。

典型使用场景：

- 创建上下文：`context.Background` / `context.New` 创建根上下文。
- 超时控制：`context.Seconds` / `context.WithTimeoutSeconds` 快速创建带超时的上下文，`context.WithTimeout` / `context.WithDeadline` 精细控制。
- 取消与传值：`context.WithCancel` 返回可手动取消的上下文与取消函数，`context.WithValue` 在上下文中携带键值。

与相邻库的关系：`context` 几乎被所有支持 `context(ctx)` 选项的库（`poc`、`crawler`、`synscan`、`aiagent` 等）使用，把它传入即可统一控制超时与中止。

> 共 8 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [context.Background](#background) | - | `context.Context` | 返回空的 Context 接口（即上下文接口） |
| [context.New](#new) | - | `context.Context` | 返回空的 Context 接口（即上下文接口） |
| [context.Seconds](#seconds) | `d float64` | `context.Context` | 返回一个超时时间为 d 秒的 Context 接口（即上下文接口） |
| [context.WithCancel](#withcancel) | `parent context.Context` | `context.Context, context.CancelFunc` | 返回继承自 parent 的 Context 接口（即上下文接口）和取消函数 |
| [context.WithDeadline](#withdeadline) | `parent context.Context, t time.Time` | `context.Context, context.CancelFunc` | 返回继承自 parent 的 Context 接口（即上下文接口）和取消函数 |
| [context.WithTimeout](#withtimeout) | `parent context.Context, timeout time.Duration` | `context.Context, context.CancelFunc` | 返回继承自 parent 的 Context 接口（即上下文接口）和取消函数 |
| [context.WithTimeoutSeconds](#withtimeoutseconds) | `d float64` | `context.Context` | 返回超时时间为 d 秒的 Context 接口（即上下文接口） |
| [context.WithValue](#withvalue) | `parent context.Context, key any, val any` | `context.Context` | 返回继承自 parent ，同时额外携带键值的 Context 接口（即上下文接口） |

## 函数详情

### Background {#background}

```go
Background() context.Context
```

返回空的 Context 接口（即上下文接口）

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `context.Context` | 一个空的根上下文接口 |

**示例**

``````````````yak
// VARS: 创建根上下文
ctx = context.Background()
// assert: 根上下文没有错误
assert ctx.Err() == nil, "background context should have no error"
``````````````

---

### New {#new}

```go
New() context.Context
```

返回空的 Context 接口（即上下文接口）

它实际是 context.Background 的别名

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `context.Context` | 一个空的根上下文接口 |

**示例**

``````````````yak
// VARS: 创建根上下文
ctx = context.New()
// assert: 根上下文没有错误
assert ctx.Err() == nil, "background context should have no error"
``````````````

---

### Seconds {#seconds}

```go
Seconds(d float64) context.Context
```

返回一个超时时间为 d 秒的 Context 接口（即上下文接口）

它实际是 context.WithTimeoutSeconds 的别名

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| d | `float64` | 超时时间，单位为秒 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `context.Context` | 带有指定超时的上下文接口 |

**示例**

``````````````yak
// VARS: 创建 10 秒超时上下文
ctx = context.Seconds(10)
// assert: 刚创建时尚未超时，Err 为 nil
assert ctx.Err() == nil, "fresh timeout context should have no error yet"
``````````````

---

### WithCancel {#withcancel}

```go
WithCancel(parent context.Context) (context.Context, context.CancelFunc)
```

返回继承自 parent 的 Context 接口（即上下文接口）和取消函数

当调用返回的取消函数或者 parent 的取消函数时，整个上下文会被取消

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| parent | `context.Context` | 父上下文 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `context.Context` | 派生出的可取消上下文 |
| r2 | `context.CancelFunc` | 取消函数，调用后会取消该上下文 |

**示例**

``````````````yak
// VARS: 派生一个可取消上下文
ctx, cancel = context.WithCancel(context.New())
// 取消前没有错误
assert ctx.Err() == nil, "context should have no error before cancel"
// 取消后产生错误
cancel()
assert ctx.Err() != nil, "context should report error after cancel"
``````````````

---

### WithDeadline {#withdeadline}

```go
WithDeadline(parent context.Context, t time.Time) (context.Context, context.CancelFunc)
```

返回继承自 parent 的 Context 接口（即上下文接口）和取消函数

当调用返回的取消函数或者超出指定时间，整个上下文会被取消

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| parent | `context.Context` | 父上下文 |
| t | `time.Time` | 截止时间点 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `context.Context` | 派生出的带截止时间的上下文 |
| r2 | `context.CancelFunc` | 取消函数，调用后会取消该上下文 |

**示例**

``````````````yak
// VARS: 派生一个带未来截止时间的上下文
dur = time.ParseDuration("10s")~
after = time.Now().Add(dur)
ctx, cancel = context.WithDeadline(context.New(), after)
defer cancel()
// assert: 截止时间尚未到达
assert ctx.Err() == nil, "context should have no error before deadline"
``````````````

---

### WithTimeout {#withtimeout}

```go
WithTimeout(parent context.Context, timeout time.Duration) (context.Context, context.CancelFunc)
```

返回继承自 parent 的 Context 接口（即上下文接口）和取消函数

当调用返回的取消函数或者超时，整个上下文会被取消

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| parent | `context.Context` | 父上下文 |
| timeout | `time.Duration` | 超时时间间隔 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `context.Context` | 派生出的带超时的上下文 |
| r2 | `context.CancelFunc` | 取消函数，调用后会取消该上下文 |

**示例**

``````````````yak
// VARS: 派生一个 10 秒超时的上下文
dur = time.ParseDuration("10s")~
ctx, cancel = context.WithTimeout(context.New(), dur)
defer cancel()
// assert: 刚创建时尚未超时
assert ctx.Err() == nil, "context should have no error before timeout"
``````````````

---

### WithTimeoutSeconds {#withtimeoutseconds}

```go
WithTimeoutSeconds(d float64) context.Context
```

返回超时时间为 d 秒的 Context 接口（即上下文接口）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| d | `float64` | 超时时间，单位为秒 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `context.Context` | 带有指定超时的上下文接口 |

**示例**

``````````````yak
// VARS: 创建 10 秒超时上下文
ctx = context.WithTimeoutSeconds(10)
// assert: 刚创建时尚未超时，Err 为 nil
assert ctx.Err() == nil, "fresh timeout context should have no error yet"
``````````````

---

### WithValue {#withvalue}

```go
WithValue(parent context.Context, key any, val any) context.Context
```

返回继承自 parent ，同时额外携带键值的 Context 接口（即上下文接口）

可通过 ctx.Value(key) 读取携带的值

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| parent | `context.Context` | 父上下文 |
| key | `any` | 携带值的键 |
| val | `any` | 携带的值 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `context.Context` | 携带了指定键值的派生上下文 |

**示例**

``````````````yak
// VARS: 在上下文中携带键值
ctx = context.WithValue(context.New(), "key", "value")
// STDOUT: 读取携带的值
println(ctx.Value("key"))   // OUT: value
// assert: 锁定结论
assert ctx.Value("key") == "value", "WithValue should carry the value"
``````````````

---

