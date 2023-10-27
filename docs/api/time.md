# time

|成员函数|函数描述/介绍|
|:------|:--------|
| [time.After](#after) ||
| [time.AfterFunc](#afterfunc) |AfterFunc waits for the duration to elapse and then calls f
in its own goroutine. It returns a Timer that can
be used to cancel the call using its Sto...|
| [time.GetCurrentDate](#getcurrentdate) ||
| [time.GetCurrentMonday](#getcurrentmonday) ||
| [time.NewTicker](#newticker) ||
| [time.NewTimer](#newtimer) ||
| [time.Now](#now) |Now returns the current local time.
|
| [time.Parse](#parse) ||
| [time.ParseDuration](#parseduration) ||
| [time.Since](#since) |Since returns the time elapsed since t.
It is shorthand for time.Now().Sub(t).
|
| [time.Sleep](#sleep) ||
| [time.Unix](#unix) |Unix returns the local Time corresponding to the given Unix time,
sec seconds and nsec nanoseconds since January 1, 1970 UTC.
It is valid to pass nsec...|
| [time.Until](#until) |Until returns the duration until t.
It is shorthand for t.Sub(time.Now()).
|
| [time.now](#now) |Now returns the current local time.
|
| [time.sleep](#sleep) ||


## 函数定义
### after

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


### afterfunc

#### 详细描述
AfterFunc waits for the duration to elapse and then calls f
in its own goroutine. It returns a Timer that can
be used to cancel the call using its Stop method.


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


### getcurrentdate

#### 详细描述


#### 定义

`GetCurrentDate() (time.Time, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `time.Time` |   |
| r2 | `error` |   |


### getcurrentmonday

#### 详细描述


#### 定义

`GetCurrentMonday() (time.Time, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `time.Time` |   |
| r2 | `error` |   |


### newticker

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


### newtimer

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


### now

#### 详细描述
Now returns the current local time.


#### 定义

`Now() Time`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Time` |   |


### parse

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


### parseduration

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


### since

#### 详细描述
Since returns the time elapsed since t.
It is shorthand for time.Now().Sub(t).


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


### sleep

#### 详细描述


#### 定义

`Sleep(i float64)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `float64` |   |


### unix

#### 详细描述
Unix returns the local Time corresponding to the given Unix time,
sec seconds and nsec nanoseconds since January 1, 1970 UTC.
It is valid to pass nsec outside the range [0, 999999999].
Not all sec values have a corresponding time value. One such
value is 1&lt;&lt;63-1 (the largest int64 value).


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


### until

#### 详细描述
Until returns the duration until t.
It is shorthand for t.Sub(time.Now()).


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


