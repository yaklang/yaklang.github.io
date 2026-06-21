# exec {#library-exec}

`exec` 库用于在本机执行系统命令并获取输出，支持同步执行、上下文取消、流式监听输出与批量并发执行，是与操作系统交互、集成外部工具的入口。

典型使用场景：

- 直接执行：`exec.System` 执行命令并返回输出，`exec.SystemContext` 带上下文取消，`exec.SystemBatch` 批量并发执行。
- 构造命令：`exec.Command` / `exec.CommandContext` 创建 `*exec.Cmd` 以做更精细控制，`exec.CheckCrash` 判断进程是否崩溃。
- 流式监听：`exec.WatchStdout` / `exec.WatchStderr` / `exec.WatchOutput` 在超时内回调处理输出流；`exec.concurrent` / `exec.timeout` / `exec.callback` 控制批量行为。

与相邻库的关系：`exec` 是系统交互工具，常用于调用外部安全工具、采集本机信息（与 `os`、`hids` 配合）。注意命令内容须可信，避免注入风险。

> 共 12 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [exec.CheckCrash](#checkcrash) | `c *exec.Cmd` | `bool, error` | 检查一个已执行完成的命令是否因崩溃信号（SIGSEGV/SIGABRT）而终止（导出名为 exec.CheckCrash） |
| [exec.Command](#command) | `s string` | `*exec.Cmd, error` | 创建一个命令对象（导出名为 exec.Command） |
| [exec.CommandContext](#commandcontext) | `ctx context.Context, s string` | `*exec.Cmd, error` | 创建一个受上下文控制的命令对象（导出名为 exec.CommandContext） |
| [exec.System](#system) | `i string` | `[]byte, error` | 执行命令并返回合并的输出（导出名为 exec.System） |
| [exec.SystemContext](#systemcontext) | `ctx context.Context, i string` | `[]byte, error` | 在指定上下文下执行命令并返回合并的输出（导出名为 exec.SystemContext） |
| [exec.WatchOutput](#watchoutput) | `i string, timeout float64, f func(raw []byte) bool` | `error` | WatchStdout 执行命令并实时监控其标准输出（导出名为 exec.WatchStdout，exec.WatchOutput 为其别名） |
| [exec.WatchStderr](#watchstderr) | `i string, timeout float64, f func(raw []byte) bool` | `error` | 执行命令并实时监控其标准错误（导出名为 exec.WatchStderr） |
| [exec.WatchStdout](#watchstdout) | `i string, timeout float64, f func(raw []byte) bool` | `error` | 执行命令并实时监控其标准输出（导出名为 exec.WatchStdout，exec.WatchOutput 为其别名） |
| [exec.callback](#callback) | `f func(string, []byte)` | `execPoolOpt` | 设置 exec.SystemBatch 每条命令执行完成后的回调（导出名为 exec.callback） |
| [exec.concurrent](#concurrent) | `i int` | `execPoolOpt` | 设置 exec.SystemBatch 的并发执行数，默认为 20（导出名为 exec.concurrent） |
| [exec.timeout](#timeout) | `i float64` | `execPoolOpt` | 设置 exec.SystemBatch 中每条命令的超时时间，单位为秒（导出名为 exec.timeout） |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [exec.SystemBatch](#systembatch) | `i string, opts ...execPoolOpt` | - | 批量并发执行命令（导出名为 exec.SystemBatch） |

## 函数详情

### CheckCrash {#checkcrash}

```go
CheckCrash(c *exec.Cmd) (bool, error)
```

检查一个已执行完成的命令是否因崩溃信号（SIGSEGV/SIGABRT）而终止（导出名为 exec.CheckCrash）

不支持 Windows 系统；需在命令 Run/Wait 之后调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| c | `*exec.Cmd` | 已执行完成的命令对象 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `bool` | 是否检测到崩溃 |
| r2 | `error` | 错误信息（如在 Windows 上调用） |

**示例**

``````````````yak
cmd = exec.Command("echo done")~
cmd.Run()
isCrash = exec.CheckCrash(cmd)~
println(isCrash)   // OUT: false
assert isCrash == false, "a normally exited command should not be reported as crashed"
``````````````

---

### Command {#command}

```go
Command(s string) (*exec.Cmd, error)
```

创建一个命令对象（导出名为 exec.Command）

等价于使用 context.Background() 的 CommandContext

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| s | `string` | 完整命令字符串（如 &#34;echo hello&#34;） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*exec.Cmd` | 命令对象（可调用 CombinedOutput/Run 等方法） |
| r2 | `error` | 错误信息（命令解析失败时返回） |

**示例**

``````````````yak
cmd = exec.Command("echo hello")~
output = cmd.CombinedOutput()~
println(string(output))   // OUT: hello
assert str.Contains(string(output), "hello"), "Command output should contain the echoed text"
``````````````

---

### CommandContext {#commandcontext}

```go
CommandContext(ctx context.Context, s string) (*exec.Cmd, error)
```

创建一个受上下文控制的命令对象（导出名为 exec.CommandContext）

命令字符串会按 shell 规则切分参数；上下文取消时会终止整个进程组

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| ctx | `context.Context` | 控制命令生命周期的上下文 |
| s | `string` | 完整命令字符串（如 &#34;echo hello&#34;） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*exec.Cmd` | 命令对象（可调用 CombinedOutput/Run 等方法） |
| r2 | `error` | 错误信息（命令解析失败时返回） |

**示例**

``````````````yak
cmd = exec.CommandContext(context.Background(), "echo ctx")~
output = cmd.CombinedOutput()~
println(string(output))   // OUT: ctx
assert str.Contains(string(output), "ctx"), "CommandContext output should contain the echoed text"
``````````````

---

### System {#system}

```go
System(i string) ([]byte, error)
```

执行命令并返回合并的输出（导出名为 exec.System）

等价于使用 context.Background() 的 SystemContext，同时收集 stdout 与 stderr

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `string` | 完整命令字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 命令的合并输出（stdout+stderr） |
| r2 | `error` | 错误信息（命令执行失败时返回） |

**示例**

``````````````yak
output = exec.System("echo systest")~
println(string(output))   // OUT: systest
assert str.Contains(string(output), "systest"), "System output should contain the echoed text"
``````````````

---

### SystemContext {#systemcontext}

```go
SystemContext(ctx context.Context, i string) ([]byte, error)
```

在指定上下文下执行命令并返回合并的输出（导出名为 exec.SystemContext）

同时收集标准输出与标准错误

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| ctx | `context.Context` | 控制命令生命周期的上下文 |
| i | `string` | 完整命令字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 命令的合并输出（stdout+stderr） |
| r2 | `error` | 错误信息（命令执行失败时返回） |

**示例**

``````````````yak
output = exec.SystemContext(context.Background(), "echo sysctx")~
println(string(output))   // OUT: sysctx
assert str.Contains(string(output), "sysctx"), "SystemContext output should contain the echoed text"
``````````````

---

### WatchOutput {#watchoutput}

```go
WatchOutput(i string, timeout float64, f func(raw []byte) bool) error
```

WatchStdout 执行命令并实时监控其标准输出（导出名为 exec.WatchStdout，exec.WatchOutput 为其别名）

每当有新输出时调用回调，回调返回 false 可停止监控；适合监控长时间运行命令的输出流

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `string` | 完整命令字符串 |
| timeout | `float64` | 监控超时时间，单位秒 |
| f | `func(raw []byte) bool` | 回调函数 func(raw)，返回是否继续监控 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息（命令创建或执行失败时返回） |

**示例**

``````````````yak
got = bufio.NewBuffer()
exec.WatchStdout(`sh -c "echo watchme; sleep 1"`, 8, func(raw) { got.Write(raw); return true })~
println(str.Contains(got.String(), "watchme"))   // OUT: true
assert str.Contains(got.String(), "watchme"), "WatchStdout should deliver stdout to the callback"
``````````````

---

### WatchStderr {#watchstderr}

```go
WatchStderr(i string, timeout float64, f func(raw []byte) bool) error
```

执行命令并实时监控其标准错误（导出名为 exec.WatchStderr）

每当有新错误输出时调用回调，回调返回 false 可停止监控

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `string` | 完整命令字符串 |
| timeout | `float64` | 监控超时时间，单位秒 |
| f | `func(raw []byte) bool` | 回调函数 func(raw)，返回是否继续监控 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息（命令创建或执行失败时返回） |

**示例**

``````````````yak
gotErr = bufio.NewBuffer()
exec.WatchStderr(`sh -c "echo errmsg 1>&2; sleep 1"`, 8, func(raw) { gotErr.Write(raw); return true })
println(str.Contains(gotErr.String(), "errmsg"))   // OUT: true
assert str.Contains(gotErr.String(), "errmsg"), "WatchStderr should deliver stderr to the callback"
``````````````

---

### WatchStdout {#watchstdout}

```go
WatchStdout(i string, timeout float64, f func(raw []byte) bool) error
```

执行命令并实时监控其标准输出（导出名为 exec.WatchStdout，exec.WatchOutput 为其别名）

每当有新输出时调用回调，回调返回 false 可停止监控；适合监控长时间运行命令的输出流

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `string` | 完整命令字符串 |
| timeout | `float64` | 监控超时时间，单位秒 |
| f | `func(raw []byte) bool` | 回调函数 func(raw)，返回是否继续监控 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息（命令创建或执行失败时返回） |

**示例**

``````````````yak
got = bufio.NewBuffer()
exec.WatchStdout(`sh -c "echo watchme; sleep 1"`, 8, func(raw) { got.Write(raw); return true })~
println(str.Contains(got.String(), "watchme"))   // OUT: true
assert str.Contains(got.String(), "watchme"), "WatchStdout should deliver stdout to the callback"
``````````````

---

### callback {#callback}

```go
callback(f func(string, []byte)) execPoolOpt
```

设置 exec.SystemBatch 每条命令执行完成后的回调（导出名为 exec.callback）

回调第一个参数为执行的命令，第二个参数为该命令的输出结果；作为 exec.SystemBatch 的可选项使用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| f | `func(string, []byte)` | 回调函数 func(cmd, result) |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `execPoolOpt` | 可传入 exec.SystemBatch 的选项 |

**示例**

``````````````yak
outputs = make([]string, 0)
lock = sync.NewMutex()
exec.SystemBatch("echo cb{{int(1-3)}}",
    exec.callback(func(cmd, result) { lock.Lock(); outputs = append(outputs, string(result)); lock.Unlock() }),
)
println(len(outputs))   // OUT: 3
assert len(outputs) == 3, "callback should be invoked once per expanded command"
``````````````

---

### concurrent {#concurrent}

```go
concurrent(i int) execPoolOpt
```

设置 exec.SystemBatch 的并发执行数，默认为 20（导出名为 exec.concurrent）

作为 exec.SystemBatch 的可选项使用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `int` | 并发数 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `execPoolOpt` | 可传入 exec.SystemBatch 的选项 |

**示例**

``````````````yak
results = make([]string, 0)
lock = sync.NewMutex()
exec.SystemBatch("echo c{{int(1-3)}}",
    exec.concurrent(2),
    exec.callback(func(cmd, result) { lock.Lock(); results = append(results, string(result)); lock.Unlock() }),
)
println(len(results))   // OUT: 3
assert len(results) == 3, "concurrent option should still run all expanded commands"
``````````````

---

### timeout {#timeout}

```go
timeout(i float64) execPoolOpt
```

设置 exec.SystemBatch 中每条命令的超时时间，单位为秒（导出名为 exec.timeout）

作为 exec.SystemBatch 的可选项使用；超时后该命令被终止

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `float64` | 超时秒数（支持小数） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `execPoolOpt` | 可传入 exec.SystemBatch 的选项 |

**示例**

``````````````yak
results = make([]string, 0)
lock = sync.NewMutex()
exec.SystemBatch("echo t{{int(1-2)}}",
    exec.timeout(10),
    exec.callback(func(cmd, result) { lock.Lock(); results = append(results, string(result)); lock.Unlock() }),
)
println(len(results))   // OUT: 2
assert len(results) == 2, "timeout option should not affect fast commands"
``````````````

---

## 可变参数函数详情

### SystemBatch {#systembatch}

```go
SystemBatch(i string, opts ...execPoolOpt)
```

批量并发执行命令（导出名为 exec.SystemBatch）

第一个参数为命令模板，支持 fuzztag 展开为多条命令；其余为可选项，用于配置并发数、超时与结果回调

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `string` | 命令模板（支持 fuzztag，如 &#34;echo {{int(1-3)}}&#34;） |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...execPoolOpt` | 可选项，如 exec.concurrent / exec.timeout / exec.callback |

**示例**

``````````````yak
results = make([]string, 0)
lock = sync.NewMutex()
exec.SystemBatch("echo batch{{int(1-3)}}",
    exec.timeout(10),
    exec.concurrent(5),
    exec.callback(func(cmd, result) {
        lock.Lock(); results = append(results, string(result)); lock.Unlock()
    }),
)
println(len(results))   // OUT: 3
assert len(results) == 3, "SystemBatch should run the three expanded commands"
``````````````

---

