# exec


|成员函数|函数描述/介绍|
|:------|:--------|
 | [exec.CheckCrash](#execcheckcrash) | 检查这个进程是否崩溃 |
 | [exec.Command](#execcommand) | 最基础的，创建一个 `*exec.Cmd` 对象，可以执行，这个功能就是 Golang 原生的 `exec.Command` |
 | [exec.CommandContext](#execcommandcontext) | 同 `exec.Command` 函数，但是增加了 context 的配置，可以使用 context.Context 来解决生命周期管理的问题 |
 | [exec.System](#execsystem) | 直接执行一条系统命令，把结果标准输出和标准错误流一起输出出来，bytes 数据流作为结果 |
 | [exec.SystemBatch](#execsystembatch) | 批量执行系统命令，cmd 会经过 `fuzz.Strings` 进行变异 |
 | [exec.SystemContext](#execsystemcontext) | 带 context 控制生命周期的 `exec.System` |
 | [exec.WatchOutput](#execwatchoutput) | 监控一个命令执行的中间结果，一般用于检测这个命令是否得到了想要的结果，或者获取一个命令的中间结果。该函数监控命令执行的标准输出流&#43;标准错误流结果 |
 | [exec.WatchStderr](#execwatchstderr) | 使用方法同 `exec.WatchOutput` 只是监控的输出是标准错误流 |
 | [exec.WatchStdout](#execwatchstdout) |  |
 | [exec.callback](#execcallback) | 设置 SystemBatch 批量执行的回调函数，命令执行结束后会执行的函数 |
 | [exec.concurrent](#execconcurrent) | 设置 SystemBatch 批量执行的并发量 |
 | [exec.timeout](#exectimeout) | 设置 SystemBatch 批量执行的 timeout |




 



## 函数定义

### exec.CheckCrash

检查这个进程是否崩溃

#### 详细描述



#### 定义：

`func exec.CheckCrash(v1: *exec.Cmd) return (r0: bool, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `*exec.Cmd` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |
| r1 | `error` |   |


 
### exec.Command

最基础的，创建一个 `*exec.Cmd` 对象，可以执行，这个功能就是 Golang 原生的 `exec.Command`

#### 详细描述

该命令就是最基础的命令执行，但是是 Golang 风格的，使用案例如下

```go
cmd, err := exec.Command(&#34;ls -lh&#34; )
die(err)

cmd.Stdout = os.Stdout
die(cmd.Run())
```


#### 定义：

`func exec.Command(cmd: string) return (cmdInstance: *exec.Cmd, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cmd | `string` |  想要执行的命令，字符串 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| cmdInstance | `*exec.Cmd` |  命令行执行程序，不是立即执行，需要执行 `cmdInstance.Run()` 来执行 |
| r1 | `error` |   |


 
### exec.CommandContext

同 `exec.Command` 函数，但是增加了 context 的配置，可以使用 context.Context 来解决生命周期管理的问题

#### 详细描述



#### 定义：

`func exec.CommandContext(ctx: context.Context, cmd: string) return (cmdInstance: *exec.Cmd, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` |  控制命令执行生命周期的上下文 |
| cmd | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| cmdInstance | `*exec.Cmd` |   |
| r1 | `error` |   |


 
### exec.System

直接执行一条系统命令，把结果标准输出和标准错误流一起输出出来，bytes 数据流作为结果

#### 详细描述

使用案例如下

```go
res, err := exec.System(&#34;ls -lh&#34; )
die(err)

println(string(res))
```


#### 定义：

`func exec.System(cmd: string) return (results: bytes, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cmd | `string` |  想要执行的命令 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| results | `bytes` |  执行的结果的命令行输出 |
| r1 | `error` |   |


 
### exec.SystemBatch

批量执行系统命令，cmd 会经过 `fuzz.Strings` 进行变异

#### 详细描述

直接执行一条系统命令，该命令支持 fuzz 字符串，具体案例如下:

```go
exec.SystemBatch(&#34;echo {{net:(192.168.1.1/24,example.com)}}&#34; , exec.callback(func(cmd, results){
    println(&#34;exec: &#34;, &#34;results: &#34;, codec.EncodeASCII(string(results)))
}))
```

执行结果如下

```
exec:  results:  &#34;192.168.1.15\n&#34;
exec:  results:  &#34;192.168.1.16\n&#34;
exec:  results:  &#34;192.168.1.0\n&#34;
exec:  results:  &#34;192.168.1.7\n&#34;
exec:  results:  &#34;192.168.1.13\n&#34;
...
...
...
exec:  results:  &#34;192.168.1.251\n&#34;
exec:  results:  &#34;192.168.1.255\n&#34;
exec:  results:  &#34;example.com\n&#34;
```

不熟悉 `{{net:(xxx)}}` 的朋友可以详细学习一下 fuzz 这个包。


#### 定义：

``func exec.SystemBatch(cmd: string, params ...yaklib.poolOpt)``


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cmd | `string` |   |
| params | `...yaklib.poolOpt` |  对批量执行命令的后续操作，或者执行池的配置，常见参数有 `callback / concurrent / timeout` |




 

 
### exec.SystemContext

带 context 控制生命周期的 `exec.System`

#### 详细描述



#### 定义：

`func exec.SystemContext(ctx: context.Context, cmd: string) return (results: bytes, err: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` |   |
| cmd | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| results | `bytes` |   |
| err | `error` |   |


 
### exec.WatchOutput

监控一个命令执行的中间结果，一般用于检测这个命令是否得到了想要的结果，或者获取一个命令的中间结果。该函数监控命令执行的标准输出流&#43;标准错误流结果

#### 详细描述

该命令在执行过程中，会把结果每秒输出一次，通过回调函数 `func callback(results: bytes) bool` 来输出结果，

案例如下：

```go
exec.WatchOutput(&#34;ping 8.8.8.8&#34; , 10, def callback(result) {
    println(now())
    println(string(result))
    return true
})
```

执行结果如下

```go
2021-06-25 14:28:47.516709 +0800 CST m=+1.035775209
PING 8.8.8.8 (8.8.8.8): 56 data bytes
64 bytes from 8.8.8.8: icmp_seq=0 ttl=113 time=75.586 ms

2021-06-25 14:28:48.515702 +0800 CST m=+2.034775042
PING 8.8.8.8 (8.8.8.8): 56 data bytes
64 bytes from 8.8.8.8: icmp_seq=0 ttl=113 time=75.586 ms
64 bytes from 8.8.8.8: icmp_seq=1 ttl=113 time=124.303 ms

2021-06-25 14:28:49.516388 +0800 CST m=+3.035467376
PING 8.8.8.8 (8.8.8.8): 56 data bytes
64 bytes from 8.8.8.8: icmp_seq=0 ttl=113 time=75.586 ms
64 bytes from 8.8.8.8: icmp_seq=1 ttl=113 time=124.303 ms
64 bytes from 8.8.8.8: icmp_seq=2 ttl=113 time=90.452 ms

2021-06-25 14:28:50.514747 +0800 CST m=+4.033832667
PING 8.8.8.8 (8.8.8.8): 56 data bytes
64 bytes from 8.8.8.8: icmp_seq=0 ttl=113 time=75.586 ms
64 bytes from 8.8.8.8: icmp_seq=1 ttl=113 time=124.303 ms
64 bytes from 8.8.8.8: icmp_seq=2 ttl=113 time=90.452 ms
64 bytes from 8.8.8.8: icmp_seq=3 ttl=113 time=85.585 ms
```


#### 定义：

`func exec.WatchOutput(cmd: string, timeout: float64, callback: func (v1: bytes) return(bool) ) return (Err: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cmd | `string` |  想要执行的命令 |
| timeout | `float64` |  这个命令最多执行多少秒 |
| callback | `func (v1: bytes) return(bool) ` |  每一个间隔的时候，命令行是技术出了什么？`func(results bytes) bool`,参数是 `[]byte`, 返回值为 true 说明命令继续，返回值为 false，说明命令应该立即停止 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| Err | `error` |   |


 
### exec.WatchStderr

使用方法同 `exec.WatchOutput` 只是监控的输出是标准错误流

#### 详细描述

使用方法同 `exec.WatchStdout` 但是只是监控的输出是标准错误流

#### 定义：

`func exec.WatchStderr(cmd: string, timeout: float64, callback: func (v1: bytes) return(bool) ) return (err: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cmd | `string` |   |
| timeout | `float64` |   |
| callback | `func (v1: bytes) return(bool) ` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| err | `error` |   |


 
### exec.WatchStdout



#### 详细描述



#### 定义：

`func exec.WatchStdout(v1: string, v2: float64, v3: func (v1: bytes) return(bool) ) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `float64` |   |
| v3 | `func (v1: bytes) return(bool) ` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### exec.callback

设置 SystemBatch 批量执行的回调函数，命令执行结束后会执行的函数

#### 详细描述



#### 定义：

`func exec.callback(callbackFunc: func (v1: string, v2: bytes) ) return (r0: func poolOpt(v1: *yaklib._execPoolConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callbackFunc | `func (v1: string, v2: bytes) ` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func poolOpt(v1: *yaklib._execPoolConfig) ` |   |


 
### exec.concurrent

设置 SystemBatch 批量执行的并发量

#### 详细描述



#### 定义：

`func exec.concurrent(poolSize: int) return (r0: func poolOpt(v1: *yaklib._execPoolConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| poolSize | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func poolOpt(v1: *yaklib._execPoolConfig) ` |   |


 
### exec.timeout

设置 SystemBatch 批量执行的 timeout

#### 详细描述



#### 定义：

`func exec.timeout(timeout: float64) return (r0: func poolOpt(v1: *yaklib._execPoolConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| timeout | `float64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func poolOpt(v1: *yaklib._execPoolConfig) ` |   |


 


