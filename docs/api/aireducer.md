# aireducer {#library-aireducer}

`aireducer` 库用于把大文本/大文件按块（chunk）切分，并对每一块逐步执行回调——这正是 "reduce" 的含义。它常用于配合 AI：把超长内容分段喂给模型处理（如逐段摘要、逐段分析），避免一次性超出上下文长度限制。

典型使用场景：

- 直接处理数据源：`aireducer.File` / `aireducer.Reader` / `aireducer.String` 传入文件名、`io.Reader` 或字符串，并给一个 `func(chunk)` 回调，库会自动分块并逐块回调。
- 构建可复用 Reducer：`aireducer.NewReducerFromFile` / `NewReducerFromReader` / `NewReducerFromString` 返回 `*Reducer` 句柄按需驱动。
- 切分策略：`aireducer.chunkSize` 按字节大小、`aireducer.lines` 按行数、`aireducer.separator` / `aireducer.separatorAsBoundary` 按分隔符切块；`aireducer.timeTriggerInterval` 支持按时间触发；`aireducer.memory` 接入上下文记忆。

与相邻库的关系：`aireducer` 是"分块器"，处理后的每块通常交给 `ai` 做模型调用、或交给 `rag` 做入库与检索，是处理超长素材的 AI 预处理工具。

> 共 17 个函数

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [aireducer.File](#file) | `filename string, callback func(chunk chunkmaker.Chunk), options ...Option` | `error` | 读取文件内容并按配置切分为 chunk，对每个 chunk 调用回调（导出名为 aireducer.File） |
| [aireducer.NewReducerFromFile](#newreducerfromfile) | `filename string, opts ...Option` | `*Reducer, error` | 基于文件创建一个 reducer 对象（导出名为 aireducer.NewReducerFromFile） |
| [aireducer.NewReducerFromReader](#newreducerfromreader) | `r io.Reader, opts ...Option` | `*Reducer, error` | 基于 io.Reader 创建一个 reducer 对象（导出名为 aireducer.NewReducerFromReader） |
| [aireducer.NewReducerFromString](#newreducerfromstring) | `i string, opts ...Option` | `*Reducer, error` | 基于字符串创建一个 reducer 对象（导出名为 aireducer.NewReducerFromString） |
| [aireducer.Reader](#reader) | `i io.Reader, callback func(chunk chunkmaker.Chunk), options ...Option` | `error` | 从 io.Reader 读取数据并按配置切分为 chunk，对每个 chunk 调用回调（导出名为 aireducer.Reader） |
| [aireducer.String](#string) | `s string, callback func(chunk chunkmaker.Chunk), options ...Option` | `error` | 将字符串按配置切分为 chunk，对每个 chunk 调用回调（导出名为 aireducer.String） |

## 可变参数函数详情

### File {#file}

```go
File(filename string, callback func(chunk chunkmaker.Chunk), options ...Option) error
```

读取文件内容并按配置切分为 chunk，对每个 chunk 调用回调（导出名为 aireducer.File）

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| filename | `string` | 文件路径 |
| callback | `func(chunk chunkmaker.Chunk)` | 每生成一个 chunk 触发的回调，参数为 chunk 对象 |

**可选参数**

可作为可变参数 `options ...Option` 传入选项；共 11 个可用选项，详见 [Option 选项列表](#option-option)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
// 按 1024 字节切分文件并逐块处理（示意性示例，需替换为真实文件路径）

	aireducer.File("/tmp/example.txt", func(chunk) {
	    println(string(chunk.Data()))
	}, aireducer.chunkSize(1024))~
``````````````

---

### NewReducerFromFile {#newreducerfromfile}

```go
NewReducerFromFile(filename string, opts ...Option) (*Reducer, error)
```

基于文件创建一个 reducer 对象（导出名为 aireducer.NewReducerFromFile）

创建后需通过 Run 启动，通常配合 aireducer.callback 设置 chunk 回调

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| filename | `string` | 文件路径 |

**可选参数**

可作为可变参数 `opts ...Option` 传入选项；共 11 个可用选项，详见 [Option 选项列表](#option-option)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*Reducer` | reducer 对象 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 按行切分文件并逐块处理（示意性示例，需替换为真实文件路径）

	reducer = aireducer.NewReducerFromFile("/tmp/example.txt", aireducer.lines(10), aireducer.callback(func(config, memory, chunk) {
	    println(string(chunk.Data()))
	}))~

reducer.Run()
``````````````

---

### NewReducerFromReader {#newreducerfromreader}

```go
NewReducerFromReader(r io.Reader, opts ...Option) (*Reducer, error)
```

基于 io.Reader 创建一个 reducer 对象（导出名为 aireducer.NewReducerFromReader）

创建后需通过 Run 启动，通常配合 aireducer.callback 设置 chunk 回调

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| r | `io.Reader` | 数据来源 reader |

**可选参数**

可作为可变参数 `opts ...Option` 传入选项；共 11 个可用选项，详见 [Option 选项列表](#option-option)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*Reducer` | reducer 对象 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
count = 0
reader = str.NewReader("aaaaabbbbbccccc")
reducer = aireducer.NewReducerFromReader(reader, aireducer.chunkSize(5), aireducer.callback(func(config, memory, chunk) { count++ }))~
reducer.Run()
println(count)   // OUT: 3
``````````````

---

### NewReducerFromString {#newreducerfromstring}

```go
NewReducerFromString(i string, opts ...Option) (*Reducer, error)
```

基于字符串创建一个 reducer 对象（导出名为 aireducer.NewReducerFromString）

创建后需通过 Run 启动，通常配合 aireducer.callback 设置 chunk 回调

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `string` | 输入字符串 |

**可选参数**

可作为可变参数 `opts ...Option` 传入选项；共 11 个可用选项，详见 [Option 选项列表](#option-option)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*Reducer` | reducer 对象 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
count = 0
reducer = aireducer.NewReducerFromString("aaaaabbbbbccccc", aireducer.chunkSize(5), aireducer.callback(func(config, memory, chunk) { count++ }))~
reducer.Run()
println(count)   // OUT: 3
``````````````

---

### Reader {#reader}

```go
Reader(i io.Reader, callback func(chunk chunkmaker.Chunk), options ...Option) error
```

从 io.Reader 读取数据并按配置切分为 chunk，对每个 chunk 调用回调（导出名为 aireducer.Reader）

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `io.Reader` | 数据来源 reader |
| callback | `func(chunk chunkmaker.Chunk)` | 每生成一个 chunk 触发的回调，参数为 chunk 对象 |

**可选参数**

可作为可变参数 `options ...Option` 传入选项；共 11 个可用选项，详见 [Option 选项列表](#option-option)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
count = 0
reader = str.NewReader("aaaaabbbbbccccc")
aireducer.Reader(reader, func(chunk) { count++ }, aireducer.chunkSize(5))~
println(count)   // OUT: 3
``````````````

---

### String {#string}

```go
String(s string, callback func(chunk chunkmaker.Chunk), options ...Option) error
```

将字符串按配置切分为 chunk，对每个 chunk 调用回调（导出名为 aireducer.String）

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| s | `string` | 输入字符串 |
| callback | `func(chunk chunkmaker.Chunk)` | 每生成一个 chunk 触发的回调，参数为 chunk 对象 |

**可选参数**

可作为可变参数 `options ...Option` 传入选项；共 11 个可用选项，详见 [Option 选项列表](#option-option)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
count = 0
aireducer.String("aaaaabbbbbccccc", func(chunk) { count++ }, aireducer.chunkSize(5))~
println(count)   // OUT: 3
``````````````

---

## 可变参数选项列表

以下按选项类型汇总全部可变参数选项(原先重复在各主函数下的选项表已收拢到此处)：

### 1. 类型：Option {#option-option}

涉及到的函数有：[aireducer.File](#file)、[aireducer.NewReducerFromFile](#newreducerfromfile)、[aireducer.NewReducerFromReader](#newreducerfromreader)、[aireducer.NewReducerFromString](#newreducerfromstring)、[aireducer.Reader](#reader)、[aireducer.String](#string)

|选项函数|参数|返回值|说明|
|:--|:--|:--|:--|
| `aireducer.callback` | `callback ReducerCallbackType` | `Option` | WithReducerCallback 设置 chunk 处理回调 |
| `aireducer.chunkSize` | `size int64` | `Option` | WithChunkSize 设置每个 chunk 的最大字节数 |
| `aireducer.context` | `ctx context.Context` | `Option` | WithContext 设置 reducer 运行的上下文，用于控制取消 |
| `aireducer.lineNumber` | `enable bool` | `Option` | WithEnableLineNumber enables line number prefixing for chunk content. |
| `aireducer.lines` | `lines int` | `Option` | WithLines sets the line trigger for chunking. When set to a positive value, |
| `aireducer.memory` | `memory *aid.PromptContextProvider` | `Option` | WithMemory 设置 reducer 使用的记忆/上下文提供者 |
| `aireducer.reducerCallback` | `callback ReducerCallbackType` | `Option` | WithReducerCallback 设置 chunk 处理回调 |
| `aireducer.separator` | `separator string` | `Option` | WithSeparatorTrigger 设置切分分隔符，遇到分隔符即触发一个 chunk |
| `aireducer.separatorAsBoundary` | `asBoundary bool` | `Option` | WithSeparatorAsBoundary switches the separator semantics from &#34;trigger every |
| `aireducer.timeTriggerInterval` | `interval time.Duration` | `Option` | WithTimeTriggerInterval 设置基于时间的 chunk 触发间隔 |
| `aireducer.timeTriggerIntervalSeconds` | `seconds float64` | `Option` | WithTimeTriggerIntervalSeconds 以秒为单位设置基于时间的 chunk 触发间隔 |

