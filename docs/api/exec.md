# exec


|成员函数|函数描述/介绍|
|:------|:--------|
 | [exec.Command](#execcommand) |  |
 | [exec.CommandContext](#execcommandcontext) |  |
 | [exec.System](#execsystem) |  |
 | [exec.SystemBatch](#execsystembatch) |  |
 | [exec.SystemContext](#execsystemcontext) |  |
 | [exec.WatchOutput](#execwatchoutput) |  |
 | [exec.WatchStderr](#execwatchstderr) |  |
 | [exec.WatchStdout](#execwatchstdout) |  |
 | [exec.callback](#execcallback) |  |
 | [exec.concurrent](#execconcurrent) |  |
 | [exec.timeout](#exectimeout) |  |




 



## 函数定义

### exec.Command



#### 详细描述



#### 定义：

`func exec.Command(v1: string) return (r0: *exec.Cmd, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*exec.Cmd` |   |
| r1 | `error` |   |


 
### exec.CommandContext



#### 详细描述



#### 定义：

`func exec.CommandContext(v1: context.Context, v2: string) return (r0: *exec.Cmd, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `context.Context` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*exec.Cmd` |   |
| r1 | `error` |   |


 
### exec.System



#### 详细描述



#### 定义：

`func exec.System(v1: string) return (r0: bytes, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### exec.SystemBatch



#### 详细描述



#### 定义：

``func exec.SystemBatch(v1: string, v2 ...[]yaklib.poolOpt)``


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `[]yaklib.poolOpt /*可变参数*/` |   |




 

 
### exec.SystemContext



#### 详细描述



#### 定义：

`func exec.SystemContext(v1: context.Context, v2: string) return (r0: bytes, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `context.Context` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### exec.WatchOutput



#### 详细描述



#### 定义：

`func exec.WatchOutput(v1: string, v2: float64, v3: func (v1: bytes) return(bool) ) return (r0: error)`


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


 
### exec.WatchStderr



#### 详细描述



#### 定义：

`func exec.WatchStderr(v1: string, v2: float64, v3: func (v1: bytes) return(bool) ) return (r0: error)`


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



#### 详细描述



#### 定义：

`func exec.callback(v1: func (v1: string, v2: bytes) ) return (r0: func poolOpt(v1: *yaklib._execPoolConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `func (v1: string, v2: bytes) ` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func poolOpt(v1: *yaklib._execPoolConfig) ` |   |


 
### exec.concurrent



#### 详细描述



#### 定义：

`func exec.concurrent(v1: int) return (r0: func poolOpt(v1: *yaklib._execPoolConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func poolOpt(v1: *yaklib._execPoolConfig) ` |   |


 
### exec.timeout



#### 详细描述



#### 定义：

`func exec.timeout(v1: float64) return (r0: func poolOpt(v1: *yaklib._execPoolConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `float64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func poolOpt(v1: *yaklib._execPoolConfig) ` |   |


 


