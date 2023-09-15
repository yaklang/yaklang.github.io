# context

|成员函数|函数描述/介绍|
|:------|:--------|
| [context.Background](#Background) |Background returns a non-nil, empty Context. It is never canceled, has novalues, and has no deadline. It is typically used by the main function,initialization, and tests, and as the top-level Context for incomingrequests.|
| [context.New](#New) |Background returns a non-nil, empty Context. It is never canceled, has novalues, and has no deadline. It is typically used by the main function,initialization, and tests, and as the top-level Context for incomingrequests.|
| [context.Seconds](#Seconds) ||
| [context.WithCancel](#WithCancel) |WithCancel returns a copy of parent with a new Done channel. The returnedcontext's Done channel is closed when the returned cancel function is calledor when the parent context's Done channel is closed, whichever happens first.Canceling this context releases resources associated with it, so code shouldcall cancel as soon as the operations running in this Context complete.|
| [context.WithDeadline](#WithDeadline) |WithDeadline returns a copy of the parent context with the deadline adjustedto be no later than d. If the parent's deadline is already earlier than d,WithDeadline(parent, d) is semantically equivalent to parent. The returnedcontext's Done channel is closed when the deadline expires, when the returnedcancel function is called, or when the parent context's Done channel isclosed, whichever happens first.Canceling this context releases resources associated with it, so code shouldcall cancel as soon as the operations running in this Context complete.|
| [context.WithTimeout](#WithTimeout) |WithTimeout returns WithDeadline(parent, time.Now().Add(timeout)).Canceling this context releases resources associated with it, so code shouldcall cancel as soon as the operations running in this Context complete:	func slowOperationWithTimeout(ctx context.Context) (Result, error) {		ctx, cancel := context.WithTimeout(ctx, 100*time.Millisecond)		defer cancel()  // releases resources if slowOperation completes before timeout elapses		return slowOperation(ctx)	}|
| [context.WithValue](#WithValue) |WithValue returns a copy of parent in which the value associated with key isval.Use context Values only for request-scoped data that transits processes andAPIs, not for passing optional parameters to functions.The provided key must be comparable and should not be of typestring or any other built-in type to avoid collisions betweenpackages using context. Users of WithValue should define their owntypes for keys. To avoid allocating when assigning to aninterface{}, context keys often have concrete typestruct{}. Alternatively, exported context key variables' statictype should be a pointer or interface.|


## 函数定义
### Background

#### 详细描述
Background returns a non-nil, empty Context. It is never canceled, has novalues, and has no deadline. It is typically used by the main function,initialization, and tests, and as the top-level Context for incomingrequests.

#### 定义

`Background() Context`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Context` |   |


### New

#### 详细描述
Background returns a non-nil, empty Context. It is never canceled, has novalues, and has no deadline. It is typically used by the main function,initialization, and tests, and as the top-level Context for incomingrequests.

#### 定义

`New() Context`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Context` |   |


### Seconds

#### 详细描述


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
WithCancel returns a copy of parent with a new Done channel. The returnedcontext's Done channel is closed when the returned cancel function is calledor when the parent context's Done channel is closed, whichever happens first.Canceling this context releases resources associated with it, so code shouldcall cancel as soon as the operations running in this Context complete.

#### 定义

`WithCancel(parent Context) (ctx Context, cancel CancelFunc)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| parent | `Context` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| ctx | `Context` |   |
| cancel | `CancelFunc` |   |


### WithDeadline

#### 详细描述
WithDeadline returns a copy of the parent context with the deadline adjustedto be no later than d. If the parent's deadline is already earlier than d,WithDeadline(parent, d) is semantically equivalent to parent. The returnedcontext's Done channel is closed when the deadline expires, when the returnedcancel function is called, or when the parent context's Done channel isclosed, whichever happens first.Canceling this context releases resources associated with it, so code shouldcall cancel as soon as the operations running in this Context complete.

#### 定义

`WithDeadline(parent Context, d time.Time) (Context, CancelFunc)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| parent | `Context` |   |
| d | `time.Time` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Context` |   |
| r2 | `CancelFunc` |   |


### WithTimeout

#### 详细描述
WithTimeout returns WithDeadline(parent, time.Now().Add(timeout)).Canceling this context releases resources associated with it, so code shouldcall cancel as soon as the operations running in this Context complete:	func slowOperationWithTimeout(ctx context.Context) (Result, error) {		ctx, cancel := context.WithTimeout(ctx, 100*time.Millisecond)		defer cancel()  // releases resources if slowOperation completes before timeout elapses		return slowOperation(ctx)	}

#### 定义

`WithTimeout(parent Context, timeout time.Duration) (Context, CancelFunc)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| parent | `Context` |   |
| timeout | `time.Duration` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Context` |   |
| r2 | `CancelFunc` |   |


### WithValue

#### 详细描述
WithValue returns a copy of parent in which the value associated with key isval.Use context Values only for request-scoped data that transits processes andAPIs, not for passing optional parameters to functions.The provided key must be comparable and should not be of typestring or any other built-in type to avoid collisions betweenpackages using context. Users of WithValue should define their owntypes for keys. To avoid allocating when assigning to aninterface{}, context keys often have concrete typestruct{}. Alternatively, exported context key variables' statictype should be a pointer or interface.

#### 定义

`WithValue(parent Context, key any, val any) Context`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| parent | `Context` |   |
| key | `any` |   |
| val | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Context` |   |


