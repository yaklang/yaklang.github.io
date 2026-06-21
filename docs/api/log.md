# log {#library-log}

`log` 库是 yaklang 的日志输出工具，提供分级日志（Debug/Info/Warn/Error）与级别控制，是脚本调试与运行观测的标准手段。建议所有调试输出统一走 `log`，并使用英文内容。

典型使用场景：

- 分级输出：`log.Info` / `log.Warn` / `log.Error` / `log.Debug` 按级别打印（支持格式化参数）。
- 级别控制：`log.SetLevel` 设置最低输出级别，过滤掉低于该级别的日志。

与相邻库的关系：`log` 是基础设施，被几乎所有脚本使用；相比 `println`，它带级别与时间戳，便于在复杂脚本/插件中定位问题。

> 共 10 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [log.SetLevel](#setlevel) | `i any` | - | 根据传入的字符串设置日志级别 |
| [log.setLevel](#setlevel-2) | `i any` | - | 根据传入的字符串设置日志级别 |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [log.Debug](#debug) | `format string, args ...any` | - | 以 debug(调试)级别格式化输出一条日志，日志内容应使用英文 |
| [log.Error](#error) | `format string, args ...any` | - | 以 error(错误)级别格式化输出一条日志，日志内容应使用英文 |
| [log.Info](#info) | `format string, args ...any` | - | 以 info(信息)级别格式化输出一条日志，日志内容应使用英文 |
| [log.Warn](#warn) | `format string, args ...any` | - | 以 warning(警告)级别格式化输出一条日志，日志内容应使用英文 |
| [log.debug](#debug-2) | `format string, args ...any` | - | 以 debug(调试)级别格式化输出一条日志，日志内容应使用英文 |
| [log.error](#error-2) | `format string, args ...any` | - | 以 error(错误)级别格式化输出一条日志，日志内容应使用英文 |
| [log.info](#info-2) | `format string, args ...any` | - | 以 info(信息)级别格式化输出一条日志，日志内容应使用英文 |
| [log.warn](#warn-2) | `format string, args ...any` | - | 以 warning(警告)级别格式化输出一条日志，日志内容应使用英文 |

## 函数详情

### SetLevel {#setlevel}

```go
SetLevel(i any)
```

根据传入的字符串设置日志级别

disable: 禁用所有日志, fatal: 致命错误, error: 错误, warning: 警告, info: 信息, debug: 调试

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 日志级别名称，如 &#34;info&#34;、&#34;warning&#34;、&#34;error&#34;、&#34;debug&#34;、&#34;fatal&#34;、&#34;disable&#34; |

**示例**

``````````````yak
// 把全局日志级别设置为 fatal(仅副作用，无返回值)
log.setLevel("fatal")
``````````````

---

### setLevel {#setlevel-2}

```go
setLevel(i any)
```

根据传入的字符串设置日志级别

disable: 禁用所有日志, fatal: 致命错误, error: 错误, warning: 警告, info: 信息, debug: 调试

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 日志级别名称，如 &#34;info&#34;、&#34;warning&#34;、&#34;error&#34;、&#34;debug&#34;、&#34;fatal&#34;、&#34;disable&#34; |

**示例**

``````````````yak
// 把全局日志级别设置为 fatal(仅副作用，无返回值)
log.setLevel("fatal")
``````````````

---

## 可变参数函数详情

### Debug {#debug}

```go
Debug(format string, args ...any)
```

以 debug(调试)级别格式化输出一条日志，日志内容应使用英文

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| format | `string` | 格式化字符串 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| args | `...any` | 与格式化字符串对应的参数 |

**示例**

``````````````yak
// 输出一条 debug 日志(仅副作用，无返回值)
log.Debug("current value is %v", 123)
``````````````

---

### Error {#error}

```go
Error(format string, args ...any)
```

以 error(错误)级别格式化输出一条日志，日志内容应使用英文

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| format | `string` | 格式化字符串 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| args | `...any` | 与格式化字符串对应的参数 |

**示例**

``````````````yak
// 输出一条 error 日志(仅副作用，无返回值)
log.Error("failed to connect: %s", "timeout")
``````````````

---

### Info {#info}

```go
Info(format string, args ...any)
```

以 info(信息)级别格式化输出一条日志，日志内容应使用英文

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| format | `string` | 格式化字符串 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| args | `...any` | 与格式化字符串对应的参数 |

**示例**

``````````````yak
// 输出一条 info 日志(仅副作用，无返回值)
log.Info("server started on port %d", 8080)
``````````````

---

### Warn {#warn}

```go
Warn(format string, args ...any)
```

以 warning(警告)级别格式化输出一条日志，日志内容应使用英文

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| format | `string` | 格式化字符串 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| args | `...any` | 与格式化字符串对应的参数 |

**示例**

``````````````yak
// 输出一条 warning 日志(仅副作用，无返回值)
log.Warn("disk usage is high: %d%%", 90)
``````````````

---

### debug {#debug-2}

```go
debug(format string, args ...any)
```

以 debug(调试)级别格式化输出一条日志，日志内容应使用英文

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| format | `string` | 格式化字符串 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| args | `...any` | 与格式化字符串对应的参数 |

**示例**

``````````````yak
// 输出一条 debug 日志(仅副作用，无返回值)
log.Debug("current value is %v", 123)
``````````````

---

### error {#error-2}

```go
error(format string, args ...any)
```

以 error(错误)级别格式化输出一条日志，日志内容应使用英文

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| format | `string` | 格式化字符串 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| args | `...any` | 与格式化字符串对应的参数 |

**示例**

``````````````yak
// 输出一条 error 日志(仅副作用，无返回值)
log.Error("failed to connect: %s", "timeout")
``````````````

---

### info {#info-2}

```go
info(format string, args ...any)
```

以 info(信息)级别格式化输出一条日志，日志内容应使用英文

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| format | `string` | 格式化字符串 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| args | `...any` | 与格式化字符串对应的参数 |

**示例**

``````````````yak
// 输出一条 info 日志(仅副作用，无返回值)
log.Info("server started on port %d", 8080)
``````````````

---

### warn {#warn-2}

```go
warn(format string, args ...any)
```

以 warning(警告)级别格式化输出一条日志，日志内容应使用英文

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| format | `string` | 格式化字符串 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| args | `...any` | 与格式化字符串对应的参数 |

**示例**

``````````````yak
// 输出一条 warning 日志(仅副作用，无返回值)
log.Warn("disk usage is high: %d%%", 90)
``````````````

---

