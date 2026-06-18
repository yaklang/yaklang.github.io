---
sidebar_position: 6
sidebar_label: "系统命令执行（exec）"
---

# 系统命令执行（exec）

本节全部来自 `exec` 库（解析输出会配合 `str`）。`exec` 负责调用外部命令，覆盖：一次性执行拿输出、带超时执行、命令对象（区分 stdout / stdout+stderr）、批量并发执行、流式捕获输出、崩溃检测。

## 分组速查表

| 分组 | 函数（含调用形态） | 说明 |
| --- | --- | --- |
| 一次性执行 | `exec.System(cmd)` `exec.SystemContext(ctx, cmd)` | 执行并返回 `([]byte, error)`，**输出是 stdout+stderr 合并** |
| 命令对象 | `exec.Command(cmd)` `exec.CommandContext(ctx, cmd)` | 创建 `*Cmd`，再调用 `.Output()` / `.CombinedOutput()` / `.Run()` |
| 命令对象方法 | `cmd.Output()` `cmd.CombinedOutput()` `cmd.Run()` `cmd.String()` | 仅 stdout / 合并 / 只跑不收输出 / 解析后的命令行 |
| 批量执行 | `exec.SystemBatch(tmpl, ...opts)` | 配合 fuzztag 批量并发执行 |
| 批量选项 | `exec.concurrent(n)` `exec.timeout(sec)` `exec.callback(fn)` | 并发数 / 单条超时 / 结果回调 |
| 流式输出 | `exec.WatchStdout(cmd, sec, fn)` `exec.WatchStderr(cmd, sec, fn)` | 长任务边产边收 |
| 崩溃检测 | `exec.CheckCrash(cmd)` | 判断是否 SIGSEGV/SIGABRT（不支持 Windows） |

## 一次性执行：exec.System

`exec.System` 执行命令并返回输出。**注意它返回的是 stdout 与 stderr 合并后的结果**（底层用 `CombinedOutput`）。命令输出通常带结尾换行，用 `str.TrimSpace` 清理。

``````````````yak
// 特性: exec.System 执行命令(输出 = stdout+stderr 合并)
// 关键词: exec.System, str.TrimSpace, CombinedOutput
out = exec.System("echo hello-exec")~
println(str.TrimSpace(string(out)))   // OUT: hello-exec
``````````````

下面验证"合并"这件事：让命令只往标准错误写，`exec.System` 依然能拿到。

``````````````yak
// 特性: exec.System 会一并收集 stderr
// 关键词: exec.System, 标准错误, sh -c
// 用 sh -c 显式起 shell, 把输出重定向到 stderr
out = exec.System(`sh -c "echo to-stderr 1>&2"`)~
println(str.Contains(string(out), "to-stderr"))   // OUT: true
``````````````

:::danger exec.System 不经完整 shell，`;`、`|`、`>` 不会被解释
这是最容易踩的坑。`exec.System("echo a; echo b")` 不会输出两行，而是把 `a; echo b` 整体当成 `echo` 的一个参数。原因看实现就明白——它用 `shlex.Split` 把命令字符串按"shell 词法"切成参数数组，然后**直接调用程序**，并没有再套一层 `sh -c`：

```go
// common/yak/yaklib/exec.go
func commandContext(ctx context.Context, s string) (*exec.Cmd, error) {
    cmds, _ := shlex.Split(s)                 // 仅分词, 不解释 ; | > 等
    cmd = exec.CommandContext(ctx, cmds[0], cmds[1:]...)  // 直接执行 cmds[0]
    setupProcessGroup(cmd)                    // 建进程组, 便于超时整组清理
    return cmd, nil
}
```

因此 `;`、`|`、`>`、`&&`、`$VAR` 这些 shell 特性都不生效。需要它们时必须显式起 shell：`exec.System("sh -c \"echo a | grep a\"")`（上一个示例就是这么做的）。同时这也是安全要点：把未净化的外部输入拼进命令会导致命令注入，外部参数应优先用 `exec.Command` 以参数数组构造，或严格白名单校验。
:::

## 带超时执行：exec.SystemContext

执行可能卡住的命令时，带上 `context` 做超时控制。

``````````````yak
// 特性: exec.SystemContext 带超时执行
// 关键词: exec.SystemContext, context.WithTimeoutSeconds
ctx = context.WithTimeoutSeconds(3)   // 3 秒超时
out = exec.SystemContext(ctx, "echo ctx-exec")~
println(str.TrimSpace(string(out)))   // OUT: ctx-exec
``````````````

:::note 超时后会连子进程一起清理
上面 `commandContext` 里的 `setupProcessGroup(cmd)` 会把命令放进独立进程组。这样 `context` 超时被取消时，Yaklang 能把"整个进程树"杀掉，而不只是直接启动的那个进程，避免会派生子进程的命令留下僵死的孤儿进程。
:::

## 命令对象：Command / Output / CombinedOutput / Run

需要更精细控制时用 `exec.Command` 创建命令对象 `*Cmd`，再按需调用：

- `cmd.Output()`：执行并返回 **仅 stdout**。
- `cmd.CombinedOutput()`：执行并返回 **stdout + stderr 合并**（`exec.System` 内部用的就是它）。
- `cmd.Run()`：只执行、**不收集输出**，返回退出错误，适合只关心成败的场景。
- `cmd.String()`：返回解析后的命令行（会显示程序的绝对路径）。

``````````````yak
// 特性: exec.Command + Output(仅stdout) / CombinedOutput(合并)
// 关键词: exec.Command, cmd.Output, cmd.CombinedOutput
// 每个 *Cmd 只能执行一次, 所以分别创建
cmd1 = exec.Command("echo via-output")~
println(str.TrimSpace(string(cmd1.Output()~)))         // OUT: via-output

cmd2 = exec.Command("echo via-combined")~
println(str.TrimSpace(string(cmd2.CombinedOutput()~))) // OUT: via-combined
``````````````

`cmd.Run()` 只跑命令、返回 error，配合 `context` 还能限时。

``````````````yak
// 特性: exec.CommandContext + Run(只执行, 看退出状态)
// 关键词: exec.CommandContext, cmd.Run
ctx = context.WithTimeoutSeconds(3)
cmd = exec.CommandContext(ctx, "echo run-ok")~
err = cmd.Run()          // Run 不收集输出, 成功返回 nil
println(err == nil)      // OUT: true
``````````````

:::danger 一个 *Cmd 只能执行一次
`Output()` / `CombinedOutput()` / `Run()` 都会"启动并等待"这个命令，因此**同一个 `cmd` 对象不能再次执行**（会报 "exec: already started"）。要再跑就重新 `exec.Command(...)` 创建一个。上面示例中 stdout 与合并输出用了两个不同对象，正是这个原因。
:::

## 批量并发执行：exec.SystemBatch

`exec.SystemBatch` 配合 **fuzztag** 把一个模板展开成多条命令并发执行。常用选项：`exec.concurrent(n)` 设并发数（默认 20）、`exec.timeout(sec)` 设单条超时、`exec.callback(fn)` 注册结果回调（回调参数为 `(命令字符串, 输出字节)`）。

``````````````yak
// 特性: exec.SystemBatch 批量执行(fuzztag) + concurrent/timeout/callback
// 关键词: exec.SystemBatch, fuzztag, exec.concurrent, exec.callback
mu = sync.NewMutex()
results = []
exec.SystemBatch(
    "echo host-{{int(1-3)}}",        // fuzztag 展开成 3 条命令
    exec.concurrent(2),               // 并发数 2
    exec.timeout(5),                  // 每条命令超时 5 秒
    exec.callback((cmd, raw) => {     // 每条命令完成回调一次(并发, 用锁保护共享变量)
        mu.Lock()
        results = append(results, str.TrimSpace(string(raw)))
        mu.Unlock()
    }),
)
// 三条命令各回调一次
println(len(results))    // OUT: 3
``````````````

:::note SystemBatch 是异步并发的，回调要加锁
`exec.SystemBatch` 内部用带并发上限的 WaitGroup 起多个 goroutine，并在返回前 `Wait` 所有任务完成——所以函数返回后读结果是安全的。但多个回调在**不同 goroutine** 中并发执行，回调里修改共享变量（如上面的 `results`）必须用 `sync.NewMutex()` 加锁，否则会有竞态。
:::

## 流式捕获输出：WatchStdout / WatchStderr

长时间运行、持续产出的命令（如 `tail -f`），用 `exec.WatchStdout(cmd, timeoutSeconds, callback)` 边产边收，回调返回 `true` 继续、`false` 停止。`exec.WatchStderr` 同理但盯标准错误。

``````````````yak
// 特性: exec.WatchStdout 流式回调
// 关键词: exec.WatchStdout, 秒级轮询, 回调返回 true/false
// 回调每收到一段 stdout 触发一次; 这里只演示 API 形态
exec.WatchStdout("echo streaming", 3, (raw) => {
    log.info("got chunk: %s", string(raw))
    return true     // 返回 true 继续监控
})~
println("watch done")   // OUT: watch done
``````````````

:::danger WatchStdout 按秒级轮询，瞬时命令可能一次回调都没有
它的实现是开 goroutine 按**秒级 tick** 读标准输出管道：

```go
// common/yak/yaklib/exec.go (execWatchStdout 内)
utils.ReadWithContextTickCallback(context.Background(), reader, f, time.Second)
```

正因为是秒级轮询，它适合 `tail -f` 这类长任务；对 `echo` 这种瞬间结束的命令，进程可能在第一次轮询前就退出了，回调可能一次都不触发。要稳定拿到瞬时命令的输出，请用前面的 `exec.System`。
:::

## 崩溃检测：exec.CheckCrash

在命令执行后（拿到 `ProcessState`），`exec.CheckCrash` 判断它是否因 `SIGSEGV` / `SIGABRT` 崩溃。**不支持 Windows。**

``````````````yak
// 特性: exec.CheckCrash 崩溃检测(非 Windows)
// 关键词: exec.CheckCrash, ProcessState
cmd = exec.Command(`sh -c "exit 0"`)~
cmd.Run()                       // 必须先执行, 才有进程状态可查
crashed = exec.CheckCrash(cmd)~
println(crashed)                // OUT: false
``````````````

:::note CheckCrash 关注的是"崩溃信号"，不是"非零退出"
`exec.CheckCrash` 只在进程被 `SIGSEGV`（段错误）或 `SIGABRT`（abort）这类信号终止时返回 `true`。普通的非零退出码（如 `exit 1`）并不算"崩溃"，会返回 `false`。它的典型用途是模糊测试中判断目标程序是否被打挂，而不是判断命令成功与否——后者应看 `cmd.Run()` 的返回错误。
:::
