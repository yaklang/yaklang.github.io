# time {#library-time}

`time` 库是 Go 标准库 `time` 的 yak 封装，提供时间获取、休眠、定时器、解析与格式化能力，是脚本中处理时间、节流与定时任务的基础。

典型使用场景：

- 当前时间：`time.Now` 取当前时间，`time.Unix` 由时间戳构造，`time.GetCurrentDate` / `time.GetCurrentMonday` 取日期。
- 休眠与定时：`time.Sleep` 休眠，`time.After` / `time.AfterFunc` 延时触发，`time.NewTimer` / `time.NewTicker` 创建定时器/打点器。
- 解析与计算：`time.Parse` 解析时间字符串，`time.ParseDuration` 解析时长，`time.Since` / `time.Until` 计算时间差。

与相邻库的关系：`time` 是基础库，常与 `context`（超时控制）、`sync`（并发节奏）配合，用于扫描节流、定时执行等场景。

> 共 15 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [time.After](#after) | `d time.Duration` | `<-chan time.Time` | 用于创建一个定时器，它会在指定的时间后向返回的通道发送当前时间 |
| [time.AfterFunc](#afterfunc) | `d time.Duration, f func()` | `*time.Timer` | 用于创建一个定时器，它会在指定的时间后执行指定的函数，该函数会在另一个协程中执行 |
| [time.GetCurrentDate](#getcurrentdate) | - | `time.Time, error` | 返回精确到当前日期的时间结构体与错误 |
| [time.GetCurrentMonday](#getcurrentmonday) | - | `time.Time, error` | 返回精确到本周星期一的时间结构体与错误 |
| [time.NewTicker](#newticker) | `d float64` | `*time.Ticker` | 根据给定的时间间隔(单位：秒)返回一个循环定时器结构体引用，它会周期性的向返回的通道发送当前时间 |
| [time.NewTimer](#newtimer) | `d float64` | `*time.Timer` | 根据给定的时间间隔(单位：秒)返回一个定时器结构体引用 |
| [time.Now](#now) | - | `time.Time` | 用于获取当前时间的时间结构体 |
| [time.Parse](#parse) | `layout string, value string` | `time.Time, error` | 根据给定的格式解析时间字符串，返回时间结构体与错误 |
| [time.ParseDuration](#parseduration) | `s string` | `time.Duration, error` | 根据给定的格式解析时间间隔字符串，返回时间间隔结构体与错误 |
| [time.Since](#since) | `t time.Time` | `time.Duration` | 函数返回自 t (过去时间)到当前时间的时间间隔 |
| [time.Sleep](#sleep) | `i float64` | - | 用于让当前协程休眠一段时间，其单位为秒 |
| [time.Unix](#unix) | `sec int64, nsec int64` | `time.Time` | 函数根据给定的 Unix 时间戳（从 1970 年 1 月 1 日 UTC 开始的 sec 秒和 nsec 纳秒）返回相应的本地时间结构体 |
| [time.Until](#until) | `t time.Time` | `time.Duration` | 函数返回当前时间到 t (未来时间)的时间间隔 |
| [time.now](#now-2) | - | `time.Time` | 用于获取当前时间的时间结构体 |
| [time.sleep](#sleep-2) | `i float64` | - | 用于让当前协程休眠一段时间，其单位为秒 |

## 函数详情

### After {#after}

```go
After(d time.Duration) <-chan time.Time
```

用于创建一个定时器，它会在指定的时间后向返回的通道发送当前时间

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| d | `time.Duration` | 等待的时间间隔 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `<-chan time.Time` | 一个通道，到期后会收到当前时间 |

**示例**

``````````````yak
// 等待 5 秒后继续(作示意)
d = time.ParseDuration("5s")~
<-time.After(d)
println("after 5s")
``````````````

---

### AfterFunc {#afterfunc}

```go
AfterFunc(d time.Duration, f func()) *time.Timer
```

用于创建一个定时器，它会在指定的时间后执行指定的函数，该函数会在另一个协程中执行

该函数本身会立刻返回一个定时器结构体引用，你可以通过调用该引用的Stop方法来取消定时器

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| d | `time.Duration` | 等待的时间间隔 |
| f | `func()` | 到期后要执行的回调函数 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*time.Timer` | 定时器引用，可调用 Stop 取消 |

**示例**

``````````````yak
// 0.1 秒后执行回调
d = time.ParseDuration("100ms")~
timer = time.AfterFunc(d, () => println("fired"))
time.sleep(0.3) // 等回调执行完
``````````````

---

### GetCurrentDate {#getcurrentdate}

```go
GetCurrentDate() (time.Time, error)
```

返回精确到当前日期的时间结构体与错误

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `time.Time` | 今天 00:00:00 的时间结构体 |
| r2 | `error` | 计算失败时返回的错误 |

**示例**

``````````````yak
// 获取今天日期(结果随运行时刻变化，作示意)
date, err = time.GetCurrentDate()
println(date.Format("2006-01-02"))
``````````````

---

### GetCurrentMonday {#getcurrentmonday}

```go
GetCurrentMonday() (time.Time, error)
```

返回精确到本周星期一的时间结构体与错误

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `time.Time` | 本周星期一 00:00:00 的时间结构体 |
| r2 | `error` | 计算失败时返回的错误 |

**示例**

``````````````yak
// 获取本周一(结果随运行时刻变化，作示意)
monday, err = time.GetCurrentMonday()
println(monday.Format("2006-01-02"))
``````````````

---

### NewTicker {#newticker}

```go
NewTicker(d float64) *time.Ticker
```

根据给定的时间间隔(单位：秒)返回一个循环定时器结构体引用，它会周期性的向返回的通道发送当前时间

你可以通过 &lt;- timer.C 来等待循环定时器到期

你也可以通过调用 timer.Stop 来取消循环定时器

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| d | `float64` | 循环周期，单位为秒 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*time.Ticker` | 循环定时器引用，可通过 ticker.C 周期性接收时间或 ticker.Stop 取消 |

**示例**

``````````````yak
// 每 0.1 秒触发一次, 取 3 次后停止
ticker = time.NewTicker(0.1)
count = 0
for t in ticker.C {
    count++
    if count >= 3 { ticker.Stop(); break }
}
``````````````

---

### NewTimer {#newtimer}

```go
NewTimer(d float64) *time.Timer
```

根据给定的时间间隔(单位：秒)返回一个定时器结构体引用

你可以通过 &lt;- timer.C 来等待定时器到期

你也可以通过调用 timer.Stop 来取消定时器

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| d | `float64` | 定时器时长，单位为秒 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*time.Timer` | 定时器引用，可通过 timer.C 等待到期或 timer.Stop 取消 |

**示例**

``````````````yak
// 0.2 秒定时器
timer = time.NewTimer(0.2)
<-timer.C // 等待到期
``````````````

---

### Now {#now}

```go
Now() time.Time
```

用于获取当前时间的时间结构体

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `time.Time` | 当前时间的 time.Time 结构体 |

**示例**

``````````````yak
// 获取当前时间(结果随运行时刻变化，作示意)
now = time.Now()
println(now.Format("2006-01-02 15:04:05"))
``````````````

---

### Parse {#parse}

```go
Parse(layout string, value string) (time.Time, error)
```

根据给定的格式解析时间字符串，返回时间结构体与错误

一个参考的格式为：2006-01-02 15:04:05

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| layout | `string` | 时间格式模板，参考时间为 2006-01-02 15:04:05 |
| value | `string` | 待解析的时间字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `time.Time` | 解析得到的时间结构体 |
| r2 | `error` | 解析失败时返回的错误 |

**示例**

``````````````yak
// VARS: 解析固定时间字符串
t = time.Parse("2006-01-02 15:04:05", "2020-01-01 00:00:00")~
// STDOUT: 打印解析出的年份
println(t.Year())   // OUT: 2020
// assert: 锁定结论
assert t.Year() == 2020, "Parse should read the year as 2020"
``````````````

---

### ParseDuration {#parseduration}

```go
ParseDuration(s string) (time.Duration, error)
```

根据给定的格式解析时间间隔字符串，返回时间间隔结构体与错误

时间间隔字符串是一个可能带有符号的十进制数字序列，每个数字可以带有可选的小数和单位后缀，例如 &#34;300ms&#34;，&#34;-1.5h&#34; 或 &#34;2h45m&#34;

有效的时间单位有 &#34;ns&#34;（纳秒）, &#34;us&#34;（或 &#34;µs&#34; 微秒）, &#34;ms&#34;（毫秒）, &#34;s&#34;（秒）, &#34;m&#34;（分）, &#34;h&#34;（小时）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| s | `string` | 时间间隔字符串，如 &#34;300ms&#34;、&#34;-1.5h&#34;、&#34;2h45m&#34; |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `time.Duration` | 解析得到的时间间隔 |
| r2 | `error` | 解析失败时返回的错误 |

**示例**

``````````````yak
// VARS: 解析 1 小时 30 分
d = time.ParseDuration("1h30m")~
// STDOUT: 打印总秒数
println(d.Seconds())   // OUT: 5400
// assert: 锁定结论
assert d.Seconds() == 5400, "1h30m should be 5400 seconds"
``````````````

---

### Since {#since}

```go
Since(t time.Time) time.Duration
```

函数返回自 t (过去时间)到当前时间的时间间隔

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| t | `time.Time` | 起始(过去)时间 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `time.Duration` | 从 t 到当前时间的时间间隔 |

**示例**

``````````````yak
// 计算从某过去时间到现在的间隔(结果随运行时刻变化，作示意)
t = time.Unix(1577808000, 0)
println(time.Since(t).String())
``````````````

---

### Sleep {#sleep}

```go
Sleep(i float64)
```

用于让当前协程休眠一段时间，其单位为秒

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `float64` | 休眠时长，单位为秒，支持小数 |

**示例**

``````````````yak
sleep(1.5) // 休眠1.5秒
``````````````

---

### Unix {#unix}

```go
Unix(sec int64, nsec int64) time.Time
```

函数根据给定的 Unix 时间戳（从 1970 年 1 月 1 日 UTC 开始的 sec 秒和 nsec 纳秒）返回相应的本地时间结构体

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| sec | `int64` | 自 1970-01-01 UTC 起的秒数 |
| nsec | `int64` | 额外的纳秒数 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `time.Time` | 对应时间戳的本地时间结构体 |

**示例**

``````````````yak
// VARS: 由时间戳还原时间
t = time.Unix(1577808000, 0)
// STDOUT: 打印还原出的时间戳
println(t.Unix())   // OUT: 1577808000
// assert: 锁定结论
assert t.Unix() == 1577808000, "Unix should round-trip the timestamp"
``````````````

---

### Until {#until}

```go
Until(t time.Time) time.Duration
```

函数返回当前时间到 t (未来时间)的时间间隔

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| t | `time.Time` | 目标(未来)时间 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `time.Duration` | 从当前时间到 t 的时间间隔 |

**示例**

``````````````yak
// 计算距离某未来时间还有多久(结果随运行时刻变化，作示意)
t = time.Unix(1704038400, 0)
println(time.Until(t).String())
``````````````

---

### now {#now-2}

```go
now() time.Time
```

用于获取当前时间的时间结构体

它实际是 time.Now 的别名

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `time.Time` | 当前时间的 time.Time 结构体 |

**示例**

``````````````yak
// now 是 time.Now 的别名(结果随运行时刻变化，作示意)
cur = now()
println(cur.Format("2006-01-02 15:04:05"))
``````````````

---

### sleep {#sleep-2}

```go
sleep(i float64)
```

用于让当前协程休眠一段时间，其单位为秒

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `float64` | 休眠时长，单位为秒，支持小数 |

**示例**

``````````````yak
sleep(1.5) // 休眠1.5秒
``````````````

---

