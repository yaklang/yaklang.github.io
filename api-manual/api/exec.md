# exec

|函数名|函数描述/介绍|
|:------|:--------|
| [exec.CheckCrash](#checkcrash) |CheckCrash 检查命令执行是否发生了崩溃，不支持 Windows 系统，返回值为是否崩溃和错误信息  |
| [exec.Command](#command) |Command 创建一个命令结构体  |
| [exec.CommandContext](#commandcontext) |CommandContext 创建一个受上下文控制的命令结构体，其第一个参数是上下文，第二个参数是要执行的命令  |
| [exec.System](#system) |System 创建命令结构体并执行，返回结果与错误  |
| [exec.SystemBatch](#systembatch) |SystemBatch 批量执行命令，它的第一个参数为要批量执行的命令(支持 fuzztag )，接下来可以接收零个到多个选项，用于对批量命令执行进行配置，例如设置超时时间，回调函数等  |
| [exec.SystemContext](#systemcontext) |SystemContext 创建受上下文控制的命令结构体并执行，返回结果与错误  |
| [exec.WatchOutput](#watchoutput) |WatchStdout 执行命令并监控标准输出，当标准输出有数据时，会调用回调函数处理数据，回调函数的参数为标准输出的原始数据，返回值为是否继续监控  |
| [exec.WatchStderr](#watchstderr) |WatchStderr 执行命令并监控标准错误，当标准错误有数据时，会调用回调函数处理数据，回调函数的参数为标准错误的原始数据，返回值为是否继续监控  |
| [exec.WatchStdout](#watchstdout) |WatchStdout 执行命令并监控标准输出，当标准输出有数据时，会调用回调函数处理数据，回调函数的参数为标准输出的原始数据，返回值为是否继续监控  |
| [exec.callback](#callback) |callback 是一个选项参数，用于设置批量命令执行的回调函数，回调函数的第一个参数为执行的命令，第二个参数为执行的结果，在回调函数中可以对命令执行结果进行处理  |
| [exec.concurrent](#concurrent) |concurrent 是一个选项参数，用于设置批量命令执行的并发数，默认为 20  |
| [exec.timeout](#timeout) |timeout 是一个选项参数，用于设置批量命令执行的超时时间，单位为秒  |


## 函数定义
### CheckCrash

#### 详细描述
CheckCrash 检查命令执行是否发生了崩溃，不支持 Windows 系统，返回值为是否崩溃和错误信息

Example:
```
cmd = exec.Command("ls -al")~
isCrash = exec.CheckCrash(cmd)~
if isCrash {
// ...
}
```


#### 定义

`CheckCrash(c *exec.Cmd) (bool, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| c | `*exec.Cmd` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |
| r2 | `error` |   |


### Command

#### 详细描述
Command 创建一个命令结构体

Example:
```
cmd = exec.Command("ls -al")
output = cmd.CombineOutput()~
dump(output)
```


#### 定义

`Command(s string) (*exec.Cmd, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*exec.Cmd` |   |
| r2 | `error` |   |


### CommandContext

#### 详细描述
CommandContext 创建一个受上下文控制的命令结构体，其第一个参数是上下文，第二个参数是要执行的命令

Example:
```
cmd = exec.CommandContext(context.New(), "ls -al")
output = cmd.CombineOutput()~
dump(output)
```


#### 定义

`CommandContext(ctx context.Context, s string) (*exec.Cmd, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` |   |
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*exec.Cmd` |   |
| r2 | `error` |   |


### System

#### 详细描述
System 创建命令结构体并执行，返回结果与错误

Example:
```
output, err = exec.System("ls -al")~
dump(output)
```


#### 定义

`System(i string) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### SystemBatch

#### 详细描述
SystemBatch 批量执行命令，它的第一个参数为要批量执行的命令(支持 fuzztag )，接下来可以接收零个到多个选项，用于对批量命令执行进行配置，例如设置超时时间，回调函数等

Example:
```
exec.SystemBatch("ping 192.168.1.{{int(1-100)}}",
exec.timeout(10),
exec.concurrent(20),
exec.callback(func(cmd, result) {
log.Infof("exec[%v] result: %v", cmd, string(result))
})
```


#### 定义

`SystemBatch(i string, opts ...execPoolOpt)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |
| opts | `...execPoolOpt` |   |


### SystemContext

#### 详细描述
SystemContext 创建受上下文控制的命令结构体并执行，返回结果与错误

Example:
```
output, err = exec.SystemContext(context.New(),"ls -al")~
dump(output)
```


#### 定义

`SystemContext(ctx context.Context, i string) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` |   |
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### WatchOutput

#### 详细描述
WatchStdout 执行命令并监控标准输出，当标准输出有数据时，会调用回调函数处理数据，回调函数的参数为标准输出的原始数据，返回值为是否继续监控

Example:
```
exec.WatchStdout("tail -f /tmp/log", 60, func(raw) {
log.Infof("stdout: %v", string(raw))
return true
}
```


#### 定义

`WatchOutput(i string, timeout float64, f func(raw []byte) bool) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |
| timeout | `float64` |   |
| f | `func(raw []byte) bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### WatchStderr

#### 详细描述
WatchStderr 执行命令并监控标准错误，当标准错误有数据时，会调用回调函数处理数据，回调函数的参数为标准错误的原始数据，返回值为是否继续监控

Example:
```
exec.WatchStderr("tail -f /tmp/log", 60, func(raw) {
log.Infof("stderr: %v", string(raw))
return true
}
```


#### 定义

`WatchStderr(i string, timeout float64, f func(raw []byte) bool) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |
| timeout | `float64` |   |
| f | `func(raw []byte) bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### WatchStdout

#### 详细描述
WatchStdout 执行命令并监控标准输出，当标准输出有数据时，会调用回调函数处理数据，回调函数的参数为标准输出的原始数据，返回值为是否继续监控

Example:
```
exec.WatchStdout("tail -f /tmp/log", 60, func(raw) {
log.Infof("stdout: %v", string(raw))
return true
}
```


#### 定义

`WatchStdout(i string, timeout float64, f func(raw []byte) bool) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |
| timeout | `float64` |   |
| f | `func(raw []byte) bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### callback

#### 详细描述
callback 是一个选项参数，用于设置批量命令执行的回调函数，回调函数的第一个参数为执行的命令，第二个参数为执行的结果，在回调函数中可以对命令执行结果进行处理

Example:
```
exec.SystemBatch("ping 192.168.1.{{int(1-100)}}",
exec.timeout(10),
exec.concurrent(20),
exec.callback(func(cmd, result) {
log.Infof("exec[%v] result: %v", cmd, string(result))
})
```


#### 定义

`callback(f func(string, []byte)) execPoolOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `func(string, []byte)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `execPoolOpt` |   |


### concurrent

#### 详细描述
concurrent 是一个选项参数，用于设置批量命令执行的并发数，默认为 20

Example:
```
exec.SystemBatch("ping 192.168.1.{{int(1-100)}}",
exec.timeout(10),
exec.concurrent(20),
exec.callback(func(cmd, result) {
log.Infof("exec[%v] result: %v", cmd, string(result))
})
```


#### 定义

`concurrent(i int) execPoolOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `execPoolOpt` |   |


### timeout

#### 详细描述
timeout 是一个选项参数，用于设置批量命令执行的超时时间，单位为秒

Example:
```
exec.SystemBatch("ping 192.168.1.{{int(1-100)}}",
exec.timeout(10),
exec.concurrent(20),
exec.callback(func(cmd, result) {
log.Infof("exec[%v] result: %v", cmd, string(result))
})
```


#### 定义

`timeout(i float64) execPoolOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `execPoolOpt` |   |


