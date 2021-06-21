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



#### 定义：

`func (v1: string) return(*exec.Cmd, error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | *exec.Cmd |   |
| r1 | error |   |


### exec.CommandContext



#### 定义：

`func (v1: context.Context, v2: string) return(*exec.Cmd, error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | context.Context |   |
| v2 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | *exec.Cmd |   |
| r1 | error |   |


### exec.System



#### 定义：

`func (v1: string) return([]uint8, error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | []uint8 |   |
| r1 | error |   |


### exec.SystemBatch



#### 定义：

`func (v1: string, v2 ...func poolOpt(v1: *yaklib._execPoolConfig) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |
| v2 | []yaklib.poolOpt |   |




 

### exec.SystemContext



#### 定义：

`func (v1: context.Context, v2: string) return([]uint8, error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | context.Context |   |
| v2 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | []uint8 |   |
| r1 | error |   |


### exec.WatchOutput



#### 定义：

`func (v1: string, v2: float64, v3: func (v1: []uint8) return(bool) ) return(error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |
| v2 | float64 |   |
| v3 | func (v1: []uint8) return(bool)  |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | error |   |


### exec.WatchStderr



#### 定义：

`func (v1: string, v2: float64, v3: func (v1: []uint8) return(bool) ) return(error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |
| v2 | float64 |   |
| v3 | func (v1: []uint8) return(bool)  |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | error |   |


### exec.WatchStdout



#### 定义：

`func (v1: string, v2: float64, v3: func (v1: []uint8) return(bool) ) return(error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |
| v2 | float64 |   |
| v3 | func (v1: []uint8) return(bool)  |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | error |   |


### exec.callback



#### 定义：

`func (v1: func (v1: string, v2: []uint8) ) return(func poolOpt(v1: *yaklib._execPoolConfig) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | func (v1: string, v2: []uint8)  |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func poolOpt(v1: *yaklib._execPoolConfig)  |   |


### exec.concurrent



#### 定义：

`func (v1: int) return(func poolOpt(v1: *yaklib._execPoolConfig) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | int |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func poolOpt(v1: *yaklib._execPoolConfig)  |   |


### exec.timeout



#### 定义：

`func (v1: float64) return(func poolOpt(v1: *yaklib._execPoolConfig) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | float64 |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func poolOpt(v1: *yaklib._execPoolConfig)  |   |





