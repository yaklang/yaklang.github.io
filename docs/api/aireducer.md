# aireducer

|函数名|函数描述/介绍|
|:------|:--------|
| [aireducer.File](#file) |_reducerFile 读取文件内容并按配置切分为 chunk，对每个 chunk 调用回调（导出名为 aireducer.File） 参数: - filename: 文件路径 - callback: 每生成一个 chunk 触发的回调，参数为 chunk 对象 - options: 切分可选项，...|
| [aireducer.NewReducerFromFile](#newreducerfromfile) |NewReducerFromFile 基于文件创建一个 reducer 对象（导出名为 aireducer.NewReducerFromFile） 创建后需通过 Run 启动，通常配合 aireducer.callback 设置 chunk 回调 参数: - filename: 文件路径 - opt...|
| [aireducer.NewReducerFromReader](#newreducerfromreader) |NewReducerFromReader 基于 io.Reader 创建一个 reducer 对象（导出名为 aireducer.NewReducerFromReader） 创建后需通过 Run 启动，通常配合 aireducer.callback 设置 chunk 回调 参数: - r: 数据来源...|
| [aireducer.NewReducerFromString](#newreducerfromstring) |NewReducerFromString 基于字符串创建一个 reducer 对象（导出名为 aireducer.NewReducerFromString） 创建后需通过 Run 启动，通常配合 aireducer.callback 设置 chunk 回调 参数: - i: 输入字符串 - opts...|
| [aireducer.Reader](#reader) |_reducerReader 从 io.Reader 读取数据并按配置切分为 chunk，对每个 chunk 调用回调（导出名为 aireducer.Reader） 参数: - i: 数据来源 reader - callback: 每生成一个 chunk 触发的回调，参数为 chunk 对象 - o...|
| [aireducer.String](#string) |_reducerString 将字符串按配置切分为 chunk，对每个 chunk 调用回调（导出名为 aireducer.String） 参数: - s: 输入字符串 - callback: 每生成一个 chunk 触发的回调，参数为 chunk 对象 - options: 切分可选项，如 air...|
| [aireducer.callback](#callback) |WithReducerCallback 设置 chunk 处理回调（导出名为 aireducer.callback / aireducer.reducerCallback） 参数: - callback: 回调函数，参数为 (config, memory, chunk) 返回值: - 切分可选项|
| [aireducer.chunkSize](#chunksize) |WithChunkSize 设置每个 chunk 的最大字节数（导出名为 aireducer.chunkSize） 参数: - size: chunk 最大字节数（默认 1024） 返回值: - 切分可选项|
| [aireducer.context](#context) |WithContext 设置 reducer 运行的上下文，用于控制取消（导出名为 aireducer.context） 参数: - ctx: 上下文对象 返回值: - 切分可选项|
| [aireducer.lineNumber](#linenumber) |WithEnableLineNumber enables line number prefixing for chunk content. When enabled, each line in the chunk will be prefixed with line numbers. This op...|
| [aireducer.lines](#lines) |WithLines sets the line trigger for chunking. When set to a positive value, chunks will be created every N lines. If the N lines content is smaller th...|
| [aireducer.memory](#memory) |WithMemory 设置 reducer 使用的记忆/上下文提供者（导出名为 aireducer.memory） 参数: - memory: 上下文提供者对象 返回值: - 切分可选项|
| [aireducer.reducerCallback](#reducercallback) |WithReducerCallback 设置 chunk 处理回调（导出名为 aireducer.callback / aireducer.reducerCallback） 参数: - callback: 回调函数，参数为 (config, memory, chunk) 返回值: - 切分可选项|
| [aireducer.separator](#separator) |WithSeparatorTrigger 设置切分分隔符，遇到分隔符即触发一个 chunk（导出名为 aireducer.separator） 参数: - separator: 分隔符字符串 返回值: - 切分可选项|
| [aireducer.separatorAsBoundary](#separatorasboundary) |WithSeparatorAsBoundary switches the separator semantics from &#34;trigger every occurrence&#34; (default) to &#34;use the separator as a preferred cut boundary&#34;....|
| [aireducer.timeTriggerInterval](#timetriggerinterval) |WithTimeTriggerInterval 设置基于时间的 chunk 触发间隔（导出名为 aireducer.timeTriggerInterval） 参数: - interval: 触发间隔（time.Duration），为 0 时不按时间触发 返回值: - 切分可选项|
| [aireducer.timeTriggerIntervalSeconds](#timetriggerintervalseconds) |WithTimeTriggerIntervalSeconds 以秒为单位设置基于时间的 chunk 触发间隔（导出名为 aireducer.timeTriggerIntervalSeconds） 参数: - seconds: 触发间隔（秒） 返回值: - 切分可选项|


## 函数定义
### File

#### 详细描述
_reducerFile 读取文件内容并按配置切分为 chunk，对每个 chunk 调用回调（导出名为 aireducer.File）

参数:

  - filename: 文件路径

  - callback: 每生成一个 chunk 触发的回调，参数为 chunk 对象

  - options: 切分可选项，如 aireducer.chunkSize、aireducer.lines、aireducer.lineNumber 等



返回值:

  - 错误信息




Example:

``````````````yak
// 按 1024 字节切分文件并逐块处理（示意性示例，需替换为真实文件路径）

	aireducer.File("/tmp/example.txt", func(chunk) {
	    println(string(chunk.Data()))
	}, aireducer.chunkSize(1024))~
``````````````


#### 定义

`File(filename string, callback func(chunk chunkmaker.Chunk), options ...Option) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| filename | `string` | 文件路径 |
| callback | `func(chunk chunkmaker.Chunk)` | 每生成一个 chunk 触发的回调，参数为 chunk 对象 |
| options | `...Option` | 切分可选项，如 aireducer.chunkSize、aireducer.lines、aireducer.lineNumber 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### NewReducerFromFile

#### 详细描述
NewReducerFromFile 基于文件创建一个 reducer 对象（导出名为 aireducer.NewReducerFromFile）

创建后需通过 Run 启动，通常配合 aireducer.callback 设置 chunk 回调

参数:

  - filename: 文件路径

  - opts: 切分可选项，如 aireducer.chunkSize、aireducer.lines、aireducer.callback 等



返回值:

  - reducer 对象

  - 错误信息




Example:

``````````````yak
// 按行切分文件并逐块处理（示意性示例，需替换为真实文件路径）

	reducer = aireducer.NewReducerFromFile("/tmp/example.txt", aireducer.lines(10), aireducer.callback(func(config, memory, chunk) {
	    println(string(chunk.Data()))
	}))~

reducer.Run()
``````````````


#### 定义

`NewReducerFromFile(filename string, opts ...Option) (*Reducer, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| filename | `string` | 文件路径 |
| opts | `...Option` | 切分可选项，如 aireducer.chunkSize、aireducer.lines、aireducer.callback 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*Reducer` | reducer 对象 |
| r2 | `error` | 错误信息 |


### NewReducerFromReader

#### 详细描述
NewReducerFromReader 基于 io.Reader 创建一个 reducer 对象（导出名为 aireducer.NewReducerFromReader）

创建后需通过 Run 启动，通常配合 aireducer.callback 设置 chunk 回调

参数:

  - r: 数据来源 reader

  - opts: 切分可选项，如 aireducer.chunkSize、aireducer.callback 等



返回值:

  - reducer 对象

  - 错误信息




Example:

``````````````yak
count = 0
reader = str.NewReader("aaaaabbbbbccccc")
reducer = aireducer.NewReducerFromReader(reader, aireducer.chunkSize(5), aireducer.callback(func(config, memory, chunk) { count++ }))~
reducer.Run()
println(count)   // OUT: 3
``````````````


#### 定义

`NewReducerFromReader(r io.Reader, opts ...Option) (*Reducer, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| r | `io.Reader` | 数据来源 reader |
| opts | `...Option` | 切分可选项，如 aireducer.chunkSize、aireducer.callback 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*Reducer` | reducer 对象 |
| r2 | `error` | 错误信息 |


### NewReducerFromString

#### 详细描述
NewReducerFromString 基于字符串创建一个 reducer 对象（导出名为 aireducer.NewReducerFromString）

创建后需通过 Run 启动，通常配合 aireducer.callback 设置 chunk 回调

参数:

  - i: 输入字符串

  - opts: 切分可选项，如 aireducer.chunkSize、aireducer.callback 等



返回值:

  - reducer 对象

  - 错误信息




Example:

``````````````yak
count = 0
reducer = aireducer.NewReducerFromString("aaaaabbbbbccccc", aireducer.chunkSize(5), aireducer.callback(func(config, memory, chunk) { count++ }))~
reducer.Run()
println(count)   // OUT: 3
``````````````


#### 定义

`NewReducerFromString(i string, opts ...Option) (*Reducer, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` | 输入字符串 |
| opts | `...Option` | 切分可选项，如 aireducer.chunkSize、aireducer.callback 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*Reducer` | reducer 对象 |
| r2 | `error` | 错误信息 |


### Reader

#### 详细描述
_reducerReader 从 io.Reader 读取数据并按配置切分为 chunk，对每个 chunk 调用回调（导出名为 aireducer.Reader）

参数:

  - i: 数据来源 reader

  - callback: 每生成一个 chunk 触发的回调，参数为 chunk 对象

  - options: 切分可选项，如 aireducer.chunkSize、aireducer.separator、aireducer.lines 等



返回值:

  - 错误信息




Example:

``````````````yak
count = 0
reader = str.NewReader("aaaaabbbbbccccc")
aireducer.Reader(reader, func(chunk) { count++ }, aireducer.chunkSize(5))~
println(count)   // OUT: 3
``````````````


#### 定义

`Reader(i io.Reader, callback func(chunk chunkmaker.Chunk), options ...Option) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `io.Reader` | 数据来源 reader |
| callback | `func(chunk chunkmaker.Chunk)` | 每生成一个 chunk 触发的回调，参数为 chunk 对象 |
| options | `...Option` | 切分可选项，如 aireducer.chunkSize、aireducer.separator、aireducer.lines 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### String

#### 详细描述
_reducerString 将字符串按配置切分为 chunk，对每个 chunk 调用回调（导出名为 aireducer.String）

参数:

  - s: 输入字符串

  - callback: 每生成一个 chunk 触发的回调，参数为 chunk 对象

  - options: 切分可选项，如 aireducer.chunkSize、aireducer.separator、aireducer.lines 等



返回值:

  - 错误信息




Example:

``````````````yak
count = 0
aireducer.String("aaaaabbbbbccccc", func(chunk) { count++ }, aireducer.chunkSize(5))~
println(count)   // OUT: 3
``````````````


#### 定义

`String(s string, callback func(chunk chunkmaker.Chunk), options ...Option) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` | 输入字符串 |
| callback | `func(chunk chunkmaker.Chunk)` | 每生成一个 chunk 触发的回调，参数为 chunk 对象 |
| options | `...Option` | 切分可选项，如 aireducer.chunkSize、aireducer.separator、aireducer.lines 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### callback

#### 详细描述
WithReducerCallback 设置 chunk 处理回调（导出名为 aireducer.callback / aireducer.reducerCallback）

参数:

  - callback: 回调函数，参数为 (config, memory, chunk)



返回值:

  - 切分可选项




Example:

``````````````yak
opt = aireducer.callback(func(config, memory, chunk) { println(string(chunk.Data())) })
println(opt)
``````````````


#### 定义

`callback(callback ReducerCallbackType) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `ReducerCallbackType` | 回调函数，参数为 (config, memory, chunk) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 切分可选项 |


### chunkSize

#### 详细描述
WithChunkSize 设置每个 chunk 的最大字节数（导出名为 aireducer.chunkSize）

参数:

  - size: chunk 最大字节数（默认 1024）



返回值:

  - 切分可选项




Example:

``````````````yak
count = 0
aireducer.String("aaaaabbbbbccccc", func(chunk) { count++ }, aireducer.chunkSize(5))~
println(count)   // OUT: 3
``````````````


#### 定义

`chunkSize(size int64) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| size | `int64` | chunk 最大字节数（默认 1024） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 切分可选项 |


### context

#### 详细描述
WithContext 设置 reducer 运行的上下文，用于控制取消（导出名为 aireducer.context）

参数:

  - ctx: 上下文对象



返回值:

  - 切分可选项




Example:

``````````````yak
opt = aireducer.context(context.Background())
println(opt)
``````````````


#### 定义

`context(ctx context.Context) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` | 上下文对象 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 切分可选项 |


### lineNumber

#### 详细描述
WithEnableLineNumber enables line number prefixing for chunk content.

When enabled, each line in the chunk will be prefixed with line numbers.

This option works with all chunking modes and respects ChunkSize limits.



参数:

  - enable: 是否为每行内容添加行号前缀



返回值:

  - 切分可选项




Example:

``````````````yak
opt = aireducer.lineNumber(true)
println(opt)
``````````````


#### 定义

`lineNumber(enable bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| enable | `bool` | 是否为每行内容添加行号前缀 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 切分可选项 |


### lines

#### 详细描述
WithLines sets the line trigger for chunking. When set to a positive value,

chunks will be created every N lines. If the N lines content is smaller than

ChunkSize, it will be kept intact. If larger than ChunkSize, it will be split

according to ChunkSize (ChunkSize is a hard limit).




Example:

``````````````yak
aireducer.NewReducerFromFile("file.txt", aireducer.WithLines(10), aireducer.WithChunkSize(1024))
	// This will create chunks every 10 lines, but if 10 lines exceed 1024 bytes,
	// they will be split at 1024 byte boundaries.


参数:
  - lines: 每隔多少行触发一个 chunk，正数生效

返回值:
  - 切分可选项
``````````````


#### 定义

`lines(lines int) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| lines | `int` | 每隔多少行触发一个 chunk，正数生效 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 切分可选项 |


### memory

#### 详细描述
WithMemory 设置 reducer 使用的记忆/上下文提供者（导出名为 aireducer.memory）

参数:

  - memory: 上下文提供者对象



返回值:

  - 切分可选项




Example:

``````````````yak
// memory 通常由 AI 相关流程提供（示意性示例）
opt = aireducer.memory(memory)
println(opt)
``````````````


#### 定义

`memory(memory *aid.PromptContextProvider) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| memory | `*aid.PromptContextProvider` | 上下文提供者对象 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 切分可选项 |


### reducerCallback

#### 详细描述
WithReducerCallback 设置 chunk 处理回调（导出名为 aireducer.callback / aireducer.reducerCallback）

参数:

  - callback: 回调函数，参数为 (config, memory, chunk)



返回值:

  - 切分可选项




Example:

``````````````yak
opt = aireducer.callback(func(config, memory, chunk) { println(string(chunk.Data())) })
println(opt)
``````````````


#### 定义

`reducerCallback(callback ReducerCallbackType) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `ReducerCallbackType` | 回调函数，参数为 (config, memory, chunk) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 切分可选项 |


### separator

#### 详细描述
WithSeparatorTrigger 设置切分分隔符，遇到分隔符即触发一个 chunk（导出名为 aireducer.separator）

参数:

  - separator: 分隔符字符串



返回值:

  - 切分可选项




Example:

``````````````yak
count = 0
aireducer.String("a\nb\nc\n", func(chunk) { count++ }, aireducer.separator("\n"))~
println(count)   // OUT: 3
``````````````


#### 定义

`separator(separator string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| separator | `string` | 分隔符字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 切分可选项 |


### separatorAsBoundary

#### 详细描述
WithSeparatorAsBoundary switches the separator semantics from &#34;trigger every

occurrence&#34; (default) to &#34;use the separator as a preferred cut boundary&#34;.

When true, the reducer fills up to ChunkSize and, inside each chunk, cuts at

the LAST separator occurrence in the window so that pre-structured blocks

stay intact. Combine with WithSeparatorTrigger(sep) + WithChunkSize(n).



参数:

  - asBoundary: 是否将分隔符作为切分边界而非每次触发



返回值:

  - 切分可选项




Example:

``````````````yak
opt = aireducer.separatorAsBoundary(true)
println(opt)
``````````````


#### 定义

`separatorAsBoundary(asBoundary bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| asBoundary | `bool` | 是否将分隔符作为切分边界而非每次触发 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 切分可选项 |


### timeTriggerInterval

#### 详细描述
WithTimeTriggerInterval 设置基于时间的 chunk 触发间隔（导出名为 aireducer.timeTriggerInterval）

参数:

  - interval: 触发间隔（time.Duration），为 0 时不按时间触发



返回值:

  - 切分可选项




Example:

``````````````yak
opt = aireducer.timeTriggerInterval(time.Second)
println(opt)
``````````````


#### 定义

`timeTriggerInterval(interval time.Duration) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| interval | `time.Duration` | 触发间隔（time.Duration），为 0 时不按时间触发 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 切分可选项 |


### timeTriggerIntervalSeconds

#### 详细描述
WithTimeTriggerIntervalSeconds 以秒为单位设置基于时间的 chunk 触发间隔（导出名为 aireducer.timeTriggerIntervalSeconds）

参数:

  - seconds: 触发间隔（秒）



返回值:

  - 切分可选项




Example:

``````````````yak
opt = aireducer.timeTriggerIntervalSeconds(1.5)
println(opt)
``````````````


#### 定义

`timeTriggerIntervalSeconds(seconds float64) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| seconds | `float64` | 触发间隔（秒） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 切分可选项 |


