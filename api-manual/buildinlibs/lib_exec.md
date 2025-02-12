---
sidebar_position: 20
---

# [exec] 命令执行封装

[API 完全手册](/api-manual/api/exec)

本模块是一个高度封装的系统命令执行模块，支持基础的命令执行，同时也支持复杂的针对命令执行中内容的分析，本教程简单通过两个例子来介绍 `exec` 对 Golang 原生命令执行的封装。

## 基础 API：类原生：`exec.Command/CommandContext`）

这两个 API 是最简单也是最容易理解的

1. `fn exec.Command(var_1: string): (*exec.Cmd, error)` 输入一个想执行的命令，返回一个 Golang 原生的 `*exec.Cmd` 对象
1. `fn exec.CommandContext(var_1: context.Context, var_2: string): (*exec.Cmd, error)` 输入一个想执行的命令，返回一个 Golang
   原生的 `*exec.Cmd` 对象，支持 Context 控制生命周期

:::note 我们列出 `*exec.Cmd` 可用的操作与字段，如有需要可以自行取用。

```go
type os/exec.(Cmd) struct {
  Fields(可用字段): 
      Path: string  
      Args: []string  
      Env: []string  
      Dir: string  
      Stdin: io.Reader  
      Stdout: io.Writer  
      Stderr: io.Writer  
      ExtraFiles: []*os.File  
      SysProcAttr: *syscall.SysProcAttr  
      Process: *os.Process  
      ProcessState: *os.ProcessState  
  StructMethods(结构方法/函数): 
  PtrStructMethods(指针结构方法/函数): 
      func CombinedOutput() return([]uint8, error) 
      func Output() return([]uint8, error) 
      func Run() return(error) 
      func Start() return(error) 
      func StderrPipe() return(io.ReadCloser, error) 
      func StdinPipe() return(io.WriteCloser, error) 
      func StdoutPipe() return(io.ReadCloser, error) 
      func String() return(string) 
      func Wait() return(error) 
}
```

:::

## 简化 API：`exec.System/SystemContext`

这两个 API 是最容易让人理解的，基本同 `python` 中 `os.system()`，可以执行一条系统命令，然后把结果返回回来`（bytes, error）`

1. `fn exec.System(var_1: string): ([]uint8, error)` 执行一条系统命令，返回 bytes 与 error
1. `fn exec.SystemContext(var_1: context.Context, var_2: string): ([]uint8, error)`，执行一条系统命令（context 控制生命周期），返回 bytes 与 error

使用案例如下

```go
raw, err = exec.System("ls")
die(err)
dump(raw)
```

当我们执行上面例子的时候，本质上是执行了一条系统命令 `ls`

```go
([]uint8) (len=32 cap=1536) {
 00000000  53 32 5f 30 34 36 2e 79  61 6b 0a 61 2e 79 61 6b  |S2_046.yak.a.yak|
 00000010  0a 62 2e 79 61 6b 0a 74  65 73 74 2e 79 61 6b 0a  |.b.yak.test.yak.|
}
```

## 多命令批量执行：`exec.SystemBatch`

1. `fn exec.SystemBatch(var_1: string, vars: ...yaklib.poolOpt)`

这个函数是 yak 的特有功能，[`fuzz.Strings`](/api-manual/api/fuzz#fuzzstrings) 这个函数大家如果有有了解的话，其实就很容易理解这个批量系统命令执行的能力了。

通过 [`fuzz.Strings`](/api-manual/api/fuzz#fuzzstrings)，拆成多个字符串（命令），以一定并发批量执行所有的命令，执行的结果通过 `exec.callback` 参数返回结果交给用户处理。

经典案例如下：

```go
exec.SystemBatch(`echo {{net:(192.168.1.1/28,example.com)}}` , exec.callback(func(cmd, results){
    println(`exec: `, `results: `, codec.EncodeASCII(string(results)))
}))
```

执行结果如下：

```go
exec:  results:  "192.168.1.7\n"
exec:  results:  "192.168.1.6\n"
exec:  results:  "192.168.1.3\n"
exec:  results:  "192.168.1.0\n"
exec:  results:  "192.168.1.5\n"
exec:  results:  "192.168.1.11\n"
exec:  results:  "192.168.1.10\n"
exec:  results:  "192.168.1.8\n"
exec:  results:  "192.168.1.15\n"
exec:  results:  "example.com\n"
exec:  results:  "192.168.1.14\n"
exec:  results:  "192.168.1.9\n"
exec:  results:  "192.168.1.2\n"
exec:  results:  "192.168.1.13\n"
exec:  results:  "192.168.1.12\n"
exec:  results:  "192.168.1.4\n"
exec:  results:  "192.168.1.1\n"
```

大家看到结果就肯定知道发生了什么，我们的 `{{net()}}` 标签将标签内的参数作为网段和域名拆解，并把结果返回到 echo 中。

执行的结果通过 `exec.callback(func(cmd, results){ // do sth })` 这个参数回传给了用户。

当然，我们还有其他参数可以设置

### SystemBatch 的可用参数

1. `fn exec.callback(var_1: func(string, []uint8)): yaklib.poolOpt` 设置回调函数（最常用） 
1. `fn exec.concurrent(var_1: int): yaklib.poolOpt` 命令执行并发量，同时支持多少个命令同时执行？
1. `fn exec.timeout(var_1: float64): yaklib.poolOpt` 超时设置

## 监控特性：`exec.WatchOutput/WatchStdout/WatchStderr`

这三个命令其实是非常棒的封装，当我们调用系统命令的时候，有时经常需要中间结果。

如果命令行工具并不支持将中间结果以某些合理的形式输出的话，我们通常需要等到命令结束，拿到结果，进行处理。

我们的 `exec.WatchOutput` 很好的解决了这个问题：

> 监控一个命令执行的中间结果，一般用于检测这个命令是否得到了想要的结果，或者获取一个命令的中间结果。该函数监控命令执行的标准输出流+标准错误流结果
> 
> 该命令在执行过程中，会把结果每秒输出一次，通过回调函数 func callback(results: bytes) bool 来输出结果，

1. `fn exec.WatchOutput(system: string, seconds: float64, callback: func([]uint8) bool): error`

我们以下面例子作为展示

```go
exec.WatchOutput(`ping 8.8.8.8`, 4, def callback(result) {
    println(now())
    println(string(result))
    return true
})
```

上面意思是，我们执行 `ping 8.8.8.8` 最多执行 4 秒钟，每一秒钟返回一次标准错误+标准输出，把时间戳和返回的内容打印出来。

:::danger

注意上述 `callback` 返回值为 bool，如果返回值为 true，表示继续执行，如果返回值为 false，会立即停止这个命令的执行。

:::

执行上述结果为：

```go
2021-06-28 21:25:28.298526 +0800 CST m=+1.030134668
PING 8.8.8.8 (8.8.8.8): 56 data bytes
64 bytes from 8.8.8.8: icmp_seq=0 ttl=113 time=108.981 ms

2021-06-28 21:25:29.29681 +0800 CST m=+2.028436126
PING 8.8.8.8 (8.8.8.8): 56 data bytes
64 bytes from 8.8.8.8: icmp_seq=0 ttl=113 time=108.981 ms
64 bytes from 8.8.8.8: icmp_seq=1 ttl=113 time=161.165 ms

2021-06-28 21:25:30.297573 +0800 CST m=+3.029216584
PING 8.8.8.8 (8.8.8.8): 56 data bytes
64 bytes from 8.8.8.8: icmp_seq=0 ttl=113 time=108.981 ms
64 bytes from 8.8.8.8: icmp_seq=1 ttl=113 time=161.165 ms
64 bytes from 8.8.8.8: icmp_seq=2 ttl=113 time=98.257 ms

2021-06-28 21:25:31.29788 +0800 CST m=+4.029542168
PING 8.8.8.8 (8.8.8.8): 56 data bytes
64 bytes from 8.8.8.8: icmp_seq=0 ttl=113 time=108.981 ms
64 bytes from 8.8.8.8: icmp_seq=1 ttl=113 time=161.165 ms
64 bytes from 8.8.8.8: icmp_seq=2 ttl=113 time=98.257 ms
64 bytes from 8.8.8.8: icmp_seq=3 ttl=113 time=117.291 ms

```

同理，`exec.WatchStderr/WatchStdout` 使用方法完全相同，只不过针对的输出监控不一样，一个是只监控标准错误流，一个是只监控标准输出流。