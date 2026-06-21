# timezone {#library-timezone}

`timezone` 库提供时区处理能力，按时区名获取位置对象与该时区的当前时间，常用于跨时区的时间展示与日志归一化。

典型使用场景：

- 获取时区：`timezone.Get(name)` 按 IANA 时区名（如 `Asia/Shanghai`）获取 `*time.Location`。
- 时区时间：`timezone.Now(name)` 获取指定时区的当前时间。

与相邻库的关系：`timezone` 与 `time`（时间处理）配合，用于把时间转换/展示到指定时区。

> 共 2 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [timezone.Get](#get) | `name string` | `*time.Location, error` | 返回具有给定名称的时区与错误 |
| [timezone.Now](#now) | `name string` | `time.Time` | 根据给定名称的时区返回当前时间结构体 |

## 函数详情

### Get {#get}

```go
Get(name string) (*time.Location, error)
```

返回具有给定名称的时区与错误

如果名称为空字符串 &#34;&#34; 或 &#34;UTC&#34;，LoadLocation 返回 UTC 时区

如果名称为 &#34;Local&#34;，LoadLocation 返回本地时区

否则，该名称被视为 IANA 时区数据库中的一个位置名称，如 &#34;America/New_York&#34;

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 时区名称，如 &#34;UTC&#34;、&#34;Local&#34;、&#34;Asia/Shanghai&#34; |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*time.Location` | 解析得到的时区对象 |
| r2 | `error` | 名称无效时返回的错误 |

**示例**

``````````````yak
// VARS: 加载上海时区
loc = timezone.Get("Asia/Shanghai")~
// STDOUT: 打印时区名称
println(loc.String())   // OUT: Asia/Shanghai
// assert: 锁定结论
assert loc.String() == "Asia/Shanghai", "Get should load the named location"
``````````````

---

### Now {#now}

```go
Now(name string) time.Time
```

根据给定名称的时区返回当前时间结构体

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 时区名称，如 &#34;UTC&#34;、&#34;Asia/Shanghai&#34;；名称无效时回退到本地时间 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `time.Time` | 该时区下的当前时间 |

**示例**

``````````````yak
// 获取上海时区下的当前时间(结果随运行时刻变化，仅作示意)
now = timezone.Now("Asia/Shanghai")
println(now.String())
``````````````

---

