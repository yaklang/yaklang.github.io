# aireducer

|函数名|函数描述/介绍|
|:------|:--------|
| [aireducer.NewReducerFromFile](#newreducerfromfile) ||
| [aireducer.NewReducerFromReader](#newreducerfromreader) ||
| [aireducer.NewReducerFromString](#newreducerfromstring) ||
| [aireducer.context](#context) ||
| [aireducer.memory](#memory) ||
| [aireducer.reducerCallback](#reducercallback) ||
| [aireducer.separator](#separator) ||
| [aireducer.timeTriggerInterval](#timetriggerinterval) ||
| [aireducer.timeTriggerIntervalSeconds](#timetriggerintervalseconds) ||


## 函数定义
### NewReducerFromFile

#### 详细描述


#### 定义

`NewReducerFromFile(filename string, opts ...Option) (*Reducer, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| filename | `string` |   |
| opts | `...Option` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*Reducer` |   |
| r2 | `error` |   |


### NewReducerFromReader

#### 详细描述


#### 定义

`NewReducerFromReader(r io.Reader, opts ...Option) (*Reducer, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| r | `io.Reader` |   |
| opts | `...Option` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*Reducer` |   |
| r2 | `error` |   |


### NewReducerFromString

#### 详细描述


#### 定义

`NewReducerFromString(i string, opts ...Option) (*Reducer, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |
| opts | `...Option` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*Reducer` |   |
| r2 | `error` |   |


### context

#### 详细描述


#### 定义

`context(ctx context.Context) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### memory

#### 详细描述


#### 定义

`memory(memory *aid.Memory) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| memory | `*aid.Memory` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### reducerCallback

#### 详细描述


#### 定义

`reducerCallback(callback ReducerCallbackType) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `ReducerCallbackType` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### separator

#### 详细描述


#### 定义

`separator(separator string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| separator | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### timeTriggerInterval

#### 详细描述


#### 定义

`timeTriggerInterval(interval time.Duration) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| interval | `time.Duration` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### timeTriggerIntervalSeconds

#### 详细描述


#### 定义

`timeTriggerIntervalSeconds(seconds float64) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| seconds | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


