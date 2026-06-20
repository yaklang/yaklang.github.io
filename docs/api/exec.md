# exec

|函数名|函数描述/介绍|
|:------|:--------|
| [exec.CheckCrash](#checkcrash) |CheckCrash 检查一个已执行完成的命令是否因崩溃信号（SIGSEGV/SIGABRT）而终止（导出名为 exec.CheckCrash） 不支持 Windows 系统；需在命令 Run/Wait 之后调用 参数: - c: 已执行完成的命令对象 返回值: - 是否检测到崩溃 - 错误信息（如...|
| [exec.Command](#command) |Command 创建一个命令对象（导出名为 exec.Command） 等价于使用 context.Background() 的 CommandContext 参数: - s: 完整命令字符串（如 &#34;echo hello&#34;） 返回值: - 命令对象（可调用 CombinedOutput/Run 等方...|
| [exec.CommandContext](#commandcontext) |CommandContext 创建一个受上下文控制的命令对象（导出名为 exec.CommandContext） 命令字符串会按 shell 规则切分参数；上下文取消时会终止整个进程组 参数: - ctx: 控制命令生命周期的上下文 - s: 完整命令字符串（如 &#34;echo hello&#34;） 返回值:...|
| [exec.System](#system) |System 执行命令并返回合并的输出（导出名为 exec.System） 等价于使用 context.Background() 的 SystemContext，同时收集 stdout 与 stderr 参数: - i: 完整命令字符串 返回值: - 命令的合并输出（stdout+stderr） -...|
| [exec.SystemBatch](#systembatch) |SystemBatch 批量并发执行命令（导出名为 exec.SystemBatch） 第一个参数为命令模板，支持 fuzztag 展开为多条命令；其余为可选项，用于配置并发数、超时与结果回调 参数: - i: 命令模板（支持 fuzztag，如 &#34;echo {{int(1-3)}}&#34;） - opt...|
| [exec.SystemContext](#systemcontext) |SystemContext 在指定上下文下执行命令并返回合并的输出（导出名为 exec.SystemContext） 同时收集标准输出与标准错误 参数: - ctx: 控制命令生命周期的上下文 - i: 完整命令字符串 返回值: - 命令的合并输出（stdout+stderr） - 错误信息（命令执...|
| [exec.WatchOutput](#watchoutput) |WatchStdout 执行命令并实时监控其标准输出（导出名为 exec.WatchStdout，exec.WatchOutput 为其别名） 每当有新输出时调用回调，回调返回 false 可停止监控；适合监控长时间运行命令的输出流 参数: - i: 完整命令字符串 - timeout: 监控超时时...|
| [exec.WatchStderr](#watchstderr) |WatchStderr 执行命令并实时监控其标准错误（导出名为 exec.WatchStderr） 每当有新错误输出时调用回调，回调返回 false 可停止监控 参数: - i: 完整命令字符串 - timeout: 监控超时时间，单位秒 - f: 回调函数 func(raw)，返回是否继续监控 返...|
| [exec.WatchStdout](#watchstdout) |WatchStdout 执行命令并实时监控其标准输出（导出名为 exec.WatchStdout，exec.WatchOutput 为其别名） 每当有新输出时调用回调，回调返回 false 可停止监控；适合监控长时间运行命令的输出流 参数: - i: 完整命令字符串 - timeout: 监控超时时...|
| [exec.callback](#callback) |callback 设置 exec.SystemBatch 每条命令执行完成后的回调（导出名为 exec.callback） 回调第一个参数为执行的命令，第二个参数为该命令的输出结果；作为 exec.SystemBatch 的可选项使用 参数: - f: 回调函数 func(cmd, result) ...|
| [exec.concurrent](#concurrent) |concurrent 设置 exec.SystemBatch 的并发执行数，默认为 20（导出名为 exec.concurrent） 作为 exec.SystemBatch 的可选项使用 参数: - i: 并发数 返回值: - 可传入 exec.SystemBatch 的选项|
| [exec.timeout](#timeout) |timeout 设置 exec.SystemBatch 中每条命令的超时时间，单位为秒（导出名为 exec.timeout） 作为 exec.SystemBatch 的可选项使用；超时后该命令被终止 参数: - i: 超时秒数（支持小数） 返回值: - 可传入 exec.SystemBatch 的选...|


## 函数定义
### CheckCrash

#### 详细描述
CheckCrash 检查一个已执行完成的命令是否因崩溃信号（SIGSEGV/SIGABRT）而终止（导出名为 exec.CheckCrash）

不支持 Windows 系统；需在命令 Run/Wait 之后调用



参数:

  - c: 已执行完成的命令对象



返回值:

  - 是否检测到崩溃

  - 错误信息（如在 Windows 上调用）




Example:

``````````````yak
cmd = exec.Command("echo done")~
cmd.Run()
isCrash = exec.CheckCrash(cmd)~
println(isCrash)   // OUT: false
assert isCrash == false, "a normally exited command should not be reported as crashed"
``````````````


#### 定义

`CheckCrash(c *exec.Cmd) (bool, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| c | `*exec.Cmd` | 已执行完成的命令对象 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 是否检测到崩溃 |
| r2 | `error` | 错误信息（如在 Windows 上调用） |


### Command

#### 详细描述
Command 创建一个命令对象（导出名为 exec.Command）

等价于使用 context.Background() 的 CommandContext



参数:

  - s: 完整命令字符串（如 &#34;echo hello&#34;）



返回值:

  - 命令对象（可调用 CombinedOutput/Run 等方法）

  - 错误信息（命令解析失败时返回）




Example:

``````````````yak
cmd = exec.Command("echo hello")~
output = cmd.CombinedOutput()~
println(string(output))   // OUT: hello
assert str.Contains(string(output), "hello"), "Command output should contain the echoed text"
``````````````


#### 定义

`Command(s string) (*exec.Cmd, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` | 完整命令字符串（如 &#34;echo hello&#34;） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*exec.Cmd` | 命令对象（可调用 CombinedOutput/Run 等方法） |
| r2 | `error` | 错误信息（命令解析失败时返回） |


### CommandContext

#### 详细描述
CommandContext 创建一个受上下文控制的命令对象（导出名为 exec.CommandContext）

命令字符串会按 shell 规则切分参数；上下文取消时会终止整个进程组



参数:

  - ctx: 控制命令生命周期的上下文

  - s: 完整命令字符串（如 &#34;echo hello&#34;）



返回值:

  - 命令对象（可调用 CombinedOutput/Run 等方法）

  - 错误信息（命令解析失败时返回）




Example:

``````````````yak
cmd = exec.CommandContext(context.Background(), "echo ctx")~
output = cmd.CombinedOutput()~
println(string(output))   // OUT: ctx
assert str.Contains(string(output), "ctx"), "CommandContext output should contain the echoed text"
``````````````


#### 定义

`CommandContext(ctx context.Context, s string) (*exec.Cmd, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` | 控制命令生命周期的上下文 |
| s | `string` | 完整命令字符串（如 &#34;echo hello&#34;） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*exec.Cmd` | 命令对象（可调用 CombinedOutput/Run 等方法） |
| r2 | `error` | 错误信息（命令解析失败时返回） |


### System

#### 详细描述
System 执行命令并返回合并的输出（导出名为 exec.System）

等价于使用 context.Background() 的 SystemContext，同时收集 stdout 与 stderr



参数:

  - i: 完整命令字符串



返回值:

  - 命令的合并输出（stdout+stderr）

  - 错误信息（命令执行失败时返回）




Example:

``````````````yak
output = exec.System("echo systest")~
println(string(output))   // OUT: systest
assert str.Contains(string(output), "systest"), "System output should contain the echoed text"
``````````````


#### 定义

`System(i string) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` | 完整命令字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 命令的合并输出（stdout+stderr） |
| r2 | `error` | 错误信息（命令执行失败时返回） |


### SystemBatch

#### 详细描述
SystemBatch 批量并发执行命令（导出名为 exec.SystemBatch）

第一个参数为命令模板，支持 fuzztag 展开为多条命令；其余为可选项，用于配置并发数、超时与结果回调



参数:

  - i: 命令模板（支持 fuzztag，如 &#34;echo {{int(1-3)}}&#34;）

  - opts: 可选项，如 exec.concurrent / exec.timeout / exec.callback




Example:

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


#### 定义

`SystemBatch(i string, opts ...execPoolOpt)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` | 命令模板（支持 fuzztag，如 &#34;echo {{int(1-3)}}&#34;） |
| opts | `...execPoolOpt` | 可选项，如 exec.concurrent / exec.timeout / exec.callback |


### SystemContext

#### 详细描述
SystemContext 在指定上下文下执行命令并返回合并的输出（导出名为 exec.SystemContext）

同时收集标准输出与标准错误



参数:

  - ctx: 控制命令生命周期的上下文

  - i: 完整命令字符串



返回值:

  - 命令的合并输出（stdout+stderr）

  - 错误信息（命令执行失败时返回）




Example:

``````````````yak
output = exec.SystemContext(context.Background(), "echo sysctx")~
println(string(output))   // OUT: sysctx
assert str.Contains(string(output), "sysctx"), "SystemContext output should contain the echoed text"
``````````````


#### 定义

`SystemContext(ctx context.Context, i string) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` | 控制命令生命周期的上下文 |
| i | `string` | 完整命令字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 命令的合并输出（stdout+stderr） |
| r2 | `error` | 错误信息（命令执行失败时返回） |


### WatchOutput

#### 详细描述
WatchStdout 执行命令并实时监控其标准输出（导出名为 exec.WatchStdout，exec.WatchOutput 为其别名）

每当有新输出时调用回调，回调返回 false 可停止监控；适合监控长时间运行命令的输出流



参数:

  - i: 完整命令字符串

  - timeout: 监控超时时间，单位秒

  - f: 回调函数 func(raw)，返回是否继续监控



返回值:

  - 错误信息（命令创建或执行失败时返回）




Example:

``````````````yak
got = bufio.NewBuffer()
exec.WatchStdout(`sh -c "echo watchme; sleep 1"`, 8, func(raw) { got.Write(raw); return true })~
println(str.Contains(got.String(), "watchme"))   // OUT: true
assert str.Contains(got.String(), "watchme"), "WatchStdout should deliver stdout to the callback"
``````````````


#### 定义

`WatchOutput(i string, timeout float64, f func(raw []byte) bool) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` | 完整命令字符串 |
| timeout | `float64` | 监控超时时间，单位秒 |
| f | `func(raw []byte) bool` | 回调函数 func(raw)，返回是否继续监控 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息（命令创建或执行失败时返回） |


### WatchStderr

#### 详细描述
WatchStderr 执行命令并实时监控其标准错误（导出名为 exec.WatchStderr）

每当有新错误输出时调用回调，回调返回 false 可停止监控



参数:

  - i: 完整命令字符串

  - timeout: 监控超时时间，单位秒

  - f: 回调函数 func(raw)，返回是否继续监控



返回值:

  - 错误信息（命令创建或执行失败时返回）




Example:

``````````````yak
gotErr = bufio.NewBuffer()
exec.WatchStderr(`sh -c "echo errmsg 1>&2; sleep 1"`, 8, func(raw) { gotErr.Write(raw); return true })
println(str.Contains(gotErr.String(), "errmsg"))   // OUT: true
assert str.Contains(gotErr.String(), "errmsg"), "WatchStderr should deliver stderr to the callback"
``````````````


#### 定义

`WatchStderr(i string, timeout float64, f func(raw []byte) bool) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` | 完整命令字符串 |
| timeout | `float64` | 监控超时时间，单位秒 |
| f | `func(raw []byte) bool` | 回调函数 func(raw)，返回是否继续监控 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息（命令创建或执行失败时返回） |


### WatchStdout

#### 详细描述
WatchStdout 执行命令并实时监控其标准输出（导出名为 exec.WatchStdout，exec.WatchOutput 为其别名）

每当有新输出时调用回调，回调返回 false 可停止监控；适合监控长时间运行命令的输出流



参数:

  - i: 完整命令字符串

  - timeout: 监控超时时间，单位秒

  - f: 回调函数 func(raw)，返回是否继续监控



返回值:

  - 错误信息（命令创建或执行失败时返回）




Example:

``````````````yak
got = bufio.NewBuffer()
exec.WatchStdout(`sh -c "echo watchme; sleep 1"`, 8, func(raw) { got.Write(raw); return true })~
println(str.Contains(got.String(), "watchme"))   // OUT: true
assert str.Contains(got.String(), "watchme"), "WatchStdout should deliver stdout to the callback"
``````````````


#### 定义

`WatchStdout(i string, timeout float64, f func(raw []byte) bool) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` | 完整命令字符串 |
| timeout | `float64` | 监控超时时间，单位秒 |
| f | `func(raw []byte) bool` | 回调函数 func(raw)，返回是否继续监控 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息（命令创建或执行失败时返回） |


### callback

#### 详细描述
callback 设置 exec.SystemBatch 每条命令执行完成后的回调（导出名为 exec.callback）

回调第一个参数为执行的命令，第二个参数为该命令的输出结果；作为 exec.SystemBatch 的可选项使用



参数:

  - f: 回调函数 func(cmd, result)



返回值:

  - 可传入 exec.SystemBatch 的选项




Example:

``````````````yak
outputs = make([]string, 0)
lock = sync.NewMutex()
exec.SystemBatch("echo cb{{int(1-3)}}",
    exec.callback(func(cmd, result) { lock.Lock(); outputs = append(outputs, string(result)); lock.Unlock() }),
)
println(len(outputs))   // OUT: 3
assert len(outputs) == 3, "callback should be invoked once per expanded command"
``````````````


#### 定义

`callback(f func(string, []byte)) execPoolOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `func(string, []byte)` | 回调函数 func(cmd, result) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `execPoolOpt` | 可传入 exec.SystemBatch 的选项 |


### concurrent

#### 详细描述
concurrent 设置 exec.SystemBatch 的并发执行数，默认为 20（导出名为 exec.concurrent）

作为 exec.SystemBatch 的可选项使用



参数:

  - i: 并发数



返回值:

  - 可传入 exec.SystemBatch 的选项




Example:

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


#### 定义

`concurrent(i int) execPoolOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `int` | 并发数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `execPoolOpt` | 可传入 exec.SystemBatch 的选项 |


### timeout

#### 详细描述
timeout 设置 exec.SystemBatch 中每条命令的超时时间，单位为秒（导出名为 exec.timeout）

作为 exec.SystemBatch 的可选项使用；超时后该命令被终止



参数:

  - i: 超时秒数（支持小数）



返回值:

  - 可传入 exec.SystemBatch 的选项




Example:

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


#### 定义

`timeout(i float64) execPoolOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `float64` | 超时秒数（支持小数） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `execPoolOpt` | 可传入 exec.SystemBatch 的选项 |


