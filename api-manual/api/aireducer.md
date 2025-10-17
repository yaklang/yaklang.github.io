# aireducer

|函数名|函数描述/介绍|
|:------|:--------|
| [aireducer.File](#file) ||
| [aireducer.NewReducerFromFile](#newreducerfromfile) ||
| [aireducer.NewReducerFromReader](#newreducerfromreader) ||
| [aireducer.NewReducerFromString](#newreducerfromstring) ||
| [aireducer.Reader](#reader) ||
| [aireducer.String](#string) ||
| [aireducer.callback](#callback) ||
| [aireducer.chunkSize](#chunksize) ||
| [aireducer.context](#context) ||
| [aireducer.lineNumber](#linenumber) |WithEnableLineNumber enables line number prefixing for chunk content. When enabled, each line in the chunk will be prefixed with line numbers. This op...|
| [aireducer.lines](#lines) |WithLines sets the line trigger for chunking. When set to a positive value,  chunks will be created every N lines. If the N lines content is smaller t...|
| [aireducer.memory](#memory) ||
| [aireducer.reducerCallback](#reducercallback) ||
| [aireducer.separator](#separator) ||
| [aireducer.timeTriggerInterval](#timetriggerinterval) ||
| [aireducer.timeTriggerIntervalSeconds](#timetriggerintervalseconds) ||


## 函数定义
### File

#### 详细描述


#### 定义

`File(filename string, callback func(chunk chunkmaker.Chunk), options ...Option) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| filename | `string` |   |
| callback | `func(chunk chunkmaker.Chunk)` |   |
| options | `...Option` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


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


### Reader

#### 详细描述


#### 定义

`Reader(i io.Reader, callback func(chunk chunkmaker.Chunk), options ...Option) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `io.Reader` |   |
| callback | `func(chunk chunkmaker.Chunk)` |   |
| options | `...Option` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### String

#### 详细描述


#### 定义

`String(s string, callback func(chunk chunkmaker.Chunk), options ...Option) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |
| callback | `func(chunk chunkmaker.Chunk)` |   |
| options | `...Option` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### callback

#### 详细描述


#### 定义

`callback(callback ReducerCallbackType) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `ReducerCallbackType` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### chunkSize

#### 详细描述


#### 定义

`chunkSize(size int64) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| size | `int64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


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


### lineNumber

#### 详细描述
WithEnableLineNumber enables line number prefixing for chunk content.
When enabled, each line in the chunk will be prefixed with line numbers.
This option works with all chunking modes and respects ChunkSize limits.


#### 定义

`lineNumber(enable bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| enable | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### lines

#### 详细描述
WithLines sets the line trigger for chunking. When set to a positive value,

chunks will be created every N lines. If the N lines content is smaller than

ChunkSize, it will be kept intact. If larger than ChunkSize, it will be split

according to ChunkSize (ChunkSize is a hard limit).



Example:
```

	aireducer.NewReducerFromFile("file.txt", aireducer.WithLines(10), aireducer.WithChunkSize(1024))
	// This will create chunks every 10 lines, but if 10 lines exceed 1024 bytes,
	// they will be split at 1024 byte boundaries.

```


#### 定义

`lines(lines int) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| lines | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### memory

#### 详细描述


#### 定义

`memory(memory *aid.PromptContextProvider) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| memory | `*aid.PromptContextProvider` |   |

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


