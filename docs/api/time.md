# time

|函数名|函数描述/介绍|
|:------|:--------|
| [time.After](#after) |After 用于创建一个定时器，它会在指定的时间后向返回的通道发送当前时间  |
| [time.AfterFunc](#afterfunc) |AfterFunc 用于创建一个定时器，它会在指定的时间后执行指定的函数，该函数会在另一个协程中执行  该函数本身会立刻返回一个定时器结构体引用，你可以通过调用该引用的Stop方法来取消定时器  |
| [time.GetCurrentDate](#getcurrentdate) |GetCurrentDate 返回精确到当前日期的时间结构体与错误  |
| [time.GetCurrentMonday](#getcurrentmonday) |GetCurrentMonday 返回精确到本周星期一的时间结构体与错误  |
| [time.NewTicker](#newticker) |NewTicker 根据给定的时间间隔(单位：秒)返回一个循环定时器结构体引用，它会周期性的向返回的通道发送当前时间  你可以通过 &amp;lt;- timer.C 来等待循环定时器到期  你也可以通过调用 timer.Stop 来取消循环定时器  |
| [time.NewTimer](#newtimer) |NewTimer 根据给定的时间间隔(单位：秒)返回一个定时器结构体引用  你可以通过 &amp;lt;- timer.C 来等待定时器到期  你也可以通过调用 timer.Stop 来取消定时器  |
| [time.Now](#now) |now 用于获取当前时间的时间结构体  |
| [time.Parse](#parse) |Parse 根据给定的格式解析时间字符串，返回时间结构体与错误  一个参考的格式为：2006-01-02 15:04:05  |
| [time.ParseDuration](#parseduration) |ParseDuration 根据给定的格式解析时间间隔字符串，返回时间间隔结构体与错误  时间间隔字符串是一个可能带有符号的十进制数字序列，每个数字可以带有可选的小数和单位后缀，例如 &amp;#34;300ms&amp;#34;，&amp;#34;-1.5h&amp;#34; 或 &amp;#34;2h45m&amp;#34;  有效的时间单位...|
| [time.Since](#since) |Since 函数返回自 t (过去时间)到当前时间的时间间隔  |
| [time.Sleep](#sleep) |sleep 用于让当前协程休眠一段时间，其单位为秒  |
| [time.Unix](#unix) |Unix 函数根据给定的 Unix 时间戳（从 1970 年 1 月 1 日 UTC 开始的 sec 秒和 nsec 纳秒）返回相应的本地时间结构体  |
| [time.Until](#until) |Until 函数返回当前时间到 t (未来时间)的时间间隔  |
| [time.now](#now) |now 用于获取当前时间的时间结构体  它实际是 time.Now 的别名  |
| [time.sleep](#sleep) |sleep 用于让当前协程休眠一段时间，其单位为秒  |


## 函数定义
### After

#### 详细描述
After 用于创建一个定时器，它会在指定的时间后向返回的通道发送当前时间

Example:
```
d, err = time.ParseDuration("5s")
<-time.After(d) // 等待5秒后执行后续的语句
tln("after 5s")
```


#### 定义

`After(d time.Duration) &lt;-chan time.Time`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| d | `time.Duration` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `&lt;-chan time.Time` |   |


### AfterFunc

#### 详细描述
AfterFunc 用于创建一个定时器，它会在指定的时间后执行指定的函数，该函数会在另一个协程中执行

该函数本身会立刻返回一个定时器结构体引用，你可以通过调用该引用的Stop方法来取消定时器

Example:
```
d, err = time.ParseDuration("5s")
timer = time.AfterFunc(d, () => println("after 5s")) // 你可以通过调用 timer.Stop() 来取消定时器
time.sleep(10)
```


#### 定义

`AfterFunc(d time.Duration, f func()) *time.Timer`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| d | `time.Duration` |   |
| f | `func()` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*time.Timer` |   |


### GetCurrentDate

#### 详细描述
GetCurrentDate 返回精确到当前日期的时间结构体与错误

Example:
```
date, err = time.GetCurrentDate()
```


#### 定义

`GetCurrentDate() (time.Time, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `time.Time` |   |
| r2 | `error` |   |


### GetCurrentMonday

#### 详细描述
GetCurrentMonday 返回精确到本周星期一的时间结构体与错误

Example:
```
monday, err = time.GetCurrentMonday()
```


#### 定义

`GetCurrentMonday() (time.Time, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `time.Time` |   |
| r2 | `error` |   |


### NewTicker

#### 详细描述
NewTicker 根据给定的时间间隔(单位：秒)返回一个循环定时器结构体引用，它会周期性的向返回的通道发送当前时间

你可以通过 &lt;- timer.C 来等待循环定时器到期

你也可以通过调用 timer.Stop 来取消循环定时器

Example:
```
timer = time.NewTicker(5) // 你可以通过调用 timer.Stop() 来取消定时器
ticker = time.NewTicker(1)
for t in ticker.C {
println("tick") // 每 1 秒打印一次 tick
}
```


#### 定义

`NewTicker(d float64) *time.Ticker`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| d | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*time.Ticker` |   |


### NewTimer

#### 详细描述
NewTimer 根据给定的时间间隔(单位：秒)返回一个定时器结构体引用

你可以通过 &lt;- timer.C 来等待定时器到期

你也可以通过调用 timer.Stop 来取消定时器

Example:
```
timer = time.NewTimer(5) // 你可以通过调用 timer.Stop() 来取消定时器
<-timer.C // 等待定时器到期
```


#### 定义

`NewTimer(d float64) *time.Timer`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| d | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*time.Timer` |   |


### Now

#### 详细描述
now 用于获取当前时间的时间结构体

Example:
```
dur = time.ParseDuration("1m")~
ctx, cancel = context.WithDeadline(context.New(), now().Add(dur))

println(now().Format("2006-01-02 15:04:05"))
```


#### 定义

`Now() time.Time`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `time.Time` |   |


### Parse

#### 详细描述
Parse 根据给定的格式解析时间字符串，返回时间结构体与错误

一个参考的格式为：2006-01-02 15:04:05

Example:
```
t, err = time.Parse("2006-01-02 15:04:05", "2020-01-01 00:00:00")
```


#### 定义

`Parse(layout string, value string) (time.Time, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| layout | `string` |   |
| value | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `time.Time` |   |
| r2 | `error` |   |


### ParseDuration

#### 详细描述
ParseDuration 根据给定的格式解析时间间隔字符串，返回时间间隔结构体与错误

时间间隔字符串是一个可能带有符号的十进制数字序列，每个数字可以带有可选的小数和单位后缀，例如 &#34;300ms&#34;，&#34;-1.5h&#34; 或 &#34;2h45m&#34;

有效的时间单位有 &#34;ns&#34;（纳秒）, &#34;us&#34;（或 &#34;µs&#34; 微秒）, &#34;ms&#34;（毫秒）, &#34;s&#34;（秒）, &#34;m&#34;（分）, &#34;h&#34;（小时）

Example:
```
d, err = time.ParseDuration("1h30m")
```


#### 定义

`ParseDuration(s string) (time.Duration, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `time.Duration` |   |
| r2 | `error` |   |


### Since

#### 详细描述
Since 函数返回自 t (过去时间)到当前时间的时间间隔

Example:
```
t = time.Unix(1577808000, 0) // 2020-01-01 00:00:00 +0800 CST
time.Since(t) // 返回 t 到当前时间的时间间隔
```


#### 定义

`Since(t time.Time) time.Duration`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| t | `time.Time` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `time.Duration` |   |


### Sleep

#### 详细描述
sleep 用于让当前协程休眠一段时间，其单位为秒

Example:
```
sleep(1.5) // 休眠1.5秒
```


#### 定义

`Sleep(i float64)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `float64` |   |


### Unix

#### 详细描述
Unix 函数根据给定的 Unix 时间戳（从 1970 年 1 月 1 日 UTC 开始的 sec 秒和 nsec 纳秒）返回相应的本地时间结构体

Example:
```
time.Unix(1577808000, 0) // 2020-01-01 00:00:00 +0800 CST
```


#### 定义

`Unix(sec int64, nsec int64) time.Time`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| sec | `int64` |   |
| nsec | `int64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `time.Time` |   |


### Until

#### 详细描述
Until 函数返回当前时间到 t (未来时间)的时间间隔

Example:
```
t = time.Unix(1704038400, 0) // 2024-1-1 00:00:00 +0800 CST
time.Until(t) // 返回当前时间到 t 的时间间隔
```


#### 定义

`Until(t time.Time) time.Duration`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| t | `time.Time` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `time.Duration` |   |


### now

#### 详细描述
now 用于获取当前时间的时间结构体

它实际是 time.Now 的别名

Example:
```
dur = time.ParseDuration("1m")~
ctx, cancel = context.WithDeadline(context.New(), now().Add(dur))

println(now().Format("2006-01-02 15:04:05"))
```


#### 定义

`now() time.Time`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `time.Time` |   |


### sleep

#### 详细描述
sleep 用于让当前协程休眠一段时间，其单位为秒

Example:
```
sleep(1.5) // 休眠1.5秒
```


#### 定义

`sleep(i float64)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `float64` |   |


