# time

|成员函数|函数描述/介绍|
|:------|:--------|
| [time.After](#After) ||
| [time.AfterFunc](#AfterFunc) |AfterFunc waits for the duration to elapse and then calls fin its own goroutine. It returns a Timer that canbe used to cancel the call using its Stop method.|
| [time.GetCurrentDate](#GetCurrentDate) ||
| [time.GetCurrentMonday](#GetCurrentMonday) ||
| [time.NewTicker](#NewTicker) ||
| [time.NewTimer](#NewTimer) ||
| [time.Now](#Now) |Now returns the current local time.|
| [time.Parse](#Parse) ||
| [time.ParseDuration](#ParseDuration) ||
| [time.Since](#Since) |Since returns the time elapsed since t.It is shorthand for time.Now().Sub(t).|
| [time.Sleep](#Sleep) ||
| [time.Unix](#Unix) |Unix returns the local Time corresponding to the given Unix time,sec seconds and nsec nanoseconds since January 1, 1970 UTC.It is valid to pass nsec outside the range [0, 999999999].Not all sec values have a corresponding time value. One suchvalue is 1<<63-1 (the largest int64 value).|
| [time.Until](#Until) |Until returns the duration until t.It is shorthand for t.Sub(time.Now()).|
| [time.now](#now) |Now returns the current local time.|
| [time.sleep](#sleep) ||


## 函数定义
### After

#### 详细描述


#### 定义

`After(i float64) <-chan time.Time`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `<-chan time.Time` |   |


### AfterFunc

#### 详细描述
AfterFunc waits for the duration to elapse and then calls fin its own goroutine. It returns a Timer that canbe used to cancel the call using its Stop method.

#### 定义

`AfterFunc(d Duration, f func()) *Timer`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| d | `Duration` |   |
| f | `func()` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*Timer` |   |


### GetCurrentDate

#### 详细描述


#### 定义

`GetCurrentDate() (time.Time, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `time.Time` |   |
| r2 | `error` |   |


### GetCurrentMonday

#### 详细描述


#### 定义

`GetCurrentMonday() (time.Time, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `time.Time` |   |
| r2 | `error` |   |


### NewTicker

#### 详细描述


#### 定义

`NewTicker(i float64) *time.Ticker`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*time.Ticker` |   |


### NewTimer

#### 详细描述


#### 定义

`NewTimer(i float64) *time.Timer`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*time.Timer` |   |


### Now

#### 详细描述
Now returns the current local time.

#### 定义

`Now() Time`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Time` |   |


### Parse

#### 详细描述


#### 定义

`Parse(v1 layout, value string) (Time, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `layout` |   |
| value | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Time` |   |
| r2 | `error` |   |


### ParseDuration

#### 详细描述


#### 定义

`ParseDuration(s string) (Duration, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Duration` |   |
| r2 | `error` |   |


### Since

#### 详细描述
Since returns the time elapsed since t.It is shorthand for time.Now().Sub(t).

#### 定义

`Since(t Time) Duration`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| t | `Time` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Duration` |   |


### Sleep

#### 详细描述


#### 定义

`Sleep(i float64)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `float64` |   |


### Unix

#### 详细描述
Unix returns the local Time corresponding to the given Unix time,sec seconds and nsec nanoseconds since January 1, 1970 UTC.It is valid to pass nsec outside the range [0, 999999999].Not all sec values have a corresponding time value. One suchvalue is 1<<63-1 (the largest int64 value).

#### 定义

`Unix(sec int64, nsec int64) Time`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| sec | `int64` |   |
| nsec | `int64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Time` |   |


### Until

#### 详细描述
Until returns the duration until t.It is shorthand for t.Sub(time.Now()).

#### 定义

`Until(t Time) Duration`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| t | `Time` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Duration` |   |


### now

#### 详细描述
Now returns the current local time.

#### 定义

`now() Time`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Time` |   |


### sleep

#### 详细描述


#### 定义

`sleep(i float64)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `float64` |   |


