# pprof

|函数名|函数描述/介绍|
|:------|:--------|
| [pprof.AutoAnalyzeFile](#autoanalyzefile) |AutoAnalyzeFile 分析指定的 pprof 文件并返回人类可读的分析结果 |
| [pprof.StartCPUAndMemoryProfile](#startcpuandmemoryprofile) ||
| [pprof.StartCPUProfile](#startcpuprofile) ||
| [pprof.StartMemoryProfile](#startmemoryprofile) ||
| [pprof.callback](#callback) ||
| [pprof.cpuProfilePath](#cpuprofilepath) ||
| [pprof.ctx](#ctx) ||
| [pprof.memProfilePath](#memprofilepath) ||
| [pprof.onCPUProfileFinished](#oncpuprofilefinished) ||
| [pprof.onCPUProfileStarted](#oncpuprofilestarted) ||
| [pprof.onMemProfileFinished](#onmemprofilefinished) ||
| [pprof.onMemProfileStarted](#onmemprofilestarted) ||
| [pprof.timeout](#timeout) ||


## 函数定义
### AutoAnalyzeFile

#### 详细描述
AutoAnalyzeFile 分析指定的 pprof 文件并返回人类可读的分析结果


#### 定义

`AutoAnalyzeFile(filename string) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| filename | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


### StartCPUAndMemoryProfile

#### 详细描述


#### 定义

`StartCPUAndMemoryProfile(opts ...Option) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...Option` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### StartCPUProfile

#### 详细描述


#### 定义

`StartCPUProfile(opts ...Option) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...Option` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### StartMemoryProfile

#### 详细描述


#### 定义

`StartMemoryProfile(opts ...Option) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...Option` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### callback

#### 详细描述


#### 定义

`callback(h func(string)) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `func(string)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### cpuProfilePath

#### 详细描述


#### 定义

`cpuProfilePath(file string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| file | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### ctx

#### 详细描述


#### 定义

`ctx(ctx context.Context) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### memProfilePath

#### 详细描述


#### 定义

`memProfilePath(file string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| file | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### onCPUProfileFinished

#### 详细描述


#### 定义

`onCPUProfileFinished(fn func(string, error)) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fn | `func(string, error)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### onCPUProfileStarted

#### 详细描述


#### 定义

`onCPUProfileStarted(fn func(string)) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fn | `func(string)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### onMemProfileFinished

#### 详细描述


#### 定义

`onMemProfileFinished(fn func(string, error)) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fn | `func(string, error)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### onMemProfileStarted

#### 详细描述


#### 定义

`onMemProfileStarted(fn func(string)) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fn | `func(string)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### timeout

#### 详细描述


#### 定义

`timeout(i float64) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


