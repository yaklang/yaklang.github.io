---
sidebar_position: 7
sidebar_label: "系统时间与日期（time）"
---

# 系统时间与日期（time）

本节全部来自 `time` 库，提供时间获取、格式化、解析与计算。Yaklang 沿用 Golang 的"参考时间"布局 `2006-01-02 15:04:05`：用这串固定数字表示你想要的格式。

## 分组速查表

| 分组 | 代表函数（含调用形态） | 说明 |
| --- | --- | --- |
| 获取 | `time.Now()` `t.Unix()` `t.UnixNano()` | 当前时间、秒/纳秒时间戳 |
| 格式化 | `t.Format("2006-01-02 15:04:05")` `t.String()` | 按参考时间布局格式化 |
| 解析 | `time.Parse(layout, s)` | 字符串转时间，返回 `(Time, error)` |
| 时长 | `time.ParseDuration("1h")` `d.Seconds()` `d.Minutes()` | 解析与换算时长 |
| 计算 | `t.Add(d)` `t.Sub(t2)` `t.Before(t2)` `t.After(t2)` | 加减、求差、比较 |
| 组件 | `t.Year()` `t.Month()` `t.Day()` `t.Hour()` ... | 提取年月日时分秒 |
| 休眠 | `time.Sleep(秒)` | 休眠，单位为秒（支持小数） |

## 当前时间与格式化

``````````````yak
// 特性: 当前时间 time.Now / Unix / Format
// 关键词: time.Now, Unix, Format
n = time.Now()
// 现在的 Unix 时间戳必然大于 2023 年的某个值
println(n.Unix() > 1700000000)        // OUT: true
// 用参考时间布局格式化, 日期固定 10 个字符
println(len(n.Format("2006-01-02")))  // OUT: 10
``````````````

:::note 格式串为什么是 2006-01-02 15:04:05 这串"怪数字"
Golang 时间格式不用 `YYYY-MM-DD`，而是用一个**具体参考时刻**当模板——`01/02 03:04:05PM '06 -0700`（即 1、2、3、4、5、6、7）。你想要什么格式，就把这个参考时刻"写成那个样子"：

- `"2006-01-02"` → 年-月-日
- `"15:04:05"` → 24 小时制时:分:秒（`15` 表示下午 3 点）
- `"2006/01/02 15:04"` → 斜杠分隔、到分钟

记住这个参考时刻即可，不必背占位符。
:::

## 解析与时间计算

`time.Parse` 把字符串按布局解析成时间（返回 `(Time, error)`）；`time.ParseDuration` 解析时长（`"1h"`、`"30m"`、`"1.5s"`）；再用 `Add` / `Sub` / `Before` / `After` 做运算与比较。

``````````````yak
// 特性: 解析与计算 time.Parse / ParseDuration / Add / Sub / After
// 关键词: time.Parse, time.ParseDuration, Add, Sub, After
// 解析后再格式化应当还原
t = time.Parse("2006-01-02 15:04:05", "2024-01-15 10:30:00")~
println(t.Format("2006-01-02 15:04:05"))   // OUT: 2024-01-15 10:30:00

d = time.ParseDuration("1h")~       // 解析出 1 小时时长
later = t.Add(d)                    // 加 1 小时
println(later.After(t))            // OUT: true
println(later.Sub(t).Minutes())    // OUT: 60
``````````````

:::danger time.Parse 不带时区时，解析结果是 UTC
布局里没有时区信息时，`time.Parse` 把字符串当作 **UTC** 解析，而不是本地时区。如果你的字符串其实是本地时间，跨时区计算会差几个小时。需要按本地时区解析时用 `time.ParseInLocation`。本节示例只做"解析→格式化→相减"的相对运算，不受时区影响，所以结果稳定。
:::

## 时间组件与休眠

从时间对象可提取年、月、日、时、分、秒；`time.Sleep(秒)` 休眠，常配合两次 `time.Now()` 求差来测耗时。

``````````````yak
// 特性: 组件提取 Year/Day/Hour + time.Sleep 休眠测耗时
// 关键词: Year, Day, Hour, time.Sleep, Sub
t = time.Parse("2006-01-02 15:04:05", "2024-03-09 08:05:06")~
println(t.Year())    // OUT: 2024
println(t.Day())     // OUT: 9
println(t.Hour())    // OUT: 8

start = time.Now()
time.Sleep(0.05)     // 休眠约 50ms(单位是秒)
println(time.Now().Sub(start).Seconds() >= 0.04)   // OUT: true
``````````````

:::note time.Sleep 的单位是"秒"（支持小数）
与很多语言里 `sleep` 收毫秒不同，Yaklang 的 `time.Sleep` 收的是**秒**且支持小数：`time.Sleep(0.05)` 是 50 毫秒，`time.Sleep(2)` 是 2 秒。
:::

:::note timestamp() 与 time.Now() 的关系
上一章的全局函数 `timestamp()` / `datetime()` 是对 `time` 库的便捷封装，适合快速取值；需要解析、格式化、做时间运算时，则用 `time` 库的 `Time` 对象（`time.Now()`、`time.Parse()` 等），能力更完整。
:::
