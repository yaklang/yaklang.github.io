# exec

|成员函数|函数描述/介绍|
|:------|:--------|
| [exec.CheckCrash](#checkcrash) ||
| [exec.Command](#command) ||
| [exec.CommandContext](#commandcontext) ||
| [exec.System](#system) ||
| [exec.SystemBatch](#systembatch) ||
| [exec.SystemContext](#systemcontext) |执行系统命令
|
| [exec.WatchOutput](#watchoutput) ||
| [exec.WatchStderr](#watchstderr) ||
| [exec.WatchStdout](#watchstdout) ||
| [exec.callback](#callback) ||
| [exec.concurrent](#concurrent) ||
| [exec.timeout](#timeout) ||


## 函数定义
### checkcrash

#### 详细描述


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


### command

#### 详细描述


#### 定义

`Command(i string) (*exec.Cmd, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*exec.Cmd` |   |
| r2 | `error` |   |


### commandcontext

#### 详细描述


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


### system

#### 详细描述


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


### systembatch

#### 详细描述


#### 定义

`SystemBatch(i string, opts ...poolOpt)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |
| opts | `...poolOpt` |   |


### systemcontext

#### 详细描述
执行系统命令


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


### watchoutput

#### 详细描述


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


### watchstderr

#### 详细描述


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


### watchstdout

#### 详细描述


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


#### 定义

`callback(f func(string, []byte)) poolOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `func(string, []byte)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `poolOpt` |   |


### concurrent

#### 详细描述


#### 定义

`concurrent(i int) poolOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `poolOpt` |   |


### timeout

#### 详细描述


#### 定义

`timeout(i float64) poolOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `poolOpt` |   |


