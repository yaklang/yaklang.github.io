# io {#library-io}

`io` 库是 Go 标准库 `io` 的 yak 封装，提供读写流的基础工具：拷贝、限长、多路合并、管道与稳定读取等，是处理网络/文件流的底层依赖。

典型使用场景：

- 拷贝与读取：`io.Copy` / `io.CopyN` 在 reader/writer 间拷贝，`io.ReadAll` 读尽，`io.ReadFile` 读文件，`io.WriteString` 写字符串。
- 流组合：`io.MultiReader` 合并多个 reader，`io.TeeReader` 边读边复制，`io.LimitReader` 限长，`io.NopCloser` 包装，`io.Pipe` 创建管道。
- 流式读取：`io.ReadStable` / `io.ReadEvery1s` 按稳定/周期读取（适合实时输出）。

与相邻库的关系：`io` 是底层流工具，与 `bufio`（缓冲）、`file`（文件）、`tcp`/`udp`（网络连接）配合使用。

> 共 12 个函数、2 个实例

## 实例

|实例名|类型|说明|
|:--|:--|:--|
| Discard | `io.discard` | io.discard{} |
| EOF | `errors.errorString` | &amp;errors.errorString{s: &#34;EOF&#34;} |

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [io.Copy](#copy) | `writer io.Writer, reader io.Reader` | `int64, error` | 将 reader 中的数据全部拷贝到 writer，直到 EOF 或出错（导出名为 io.Copy） |
| [io.CopyN](#copyn) | `writer io.Writer, reader io.Reader, n int64` | `int64, error` | 将 reader 中最多 n 个字节拷贝到 writer，直到 EOF 或拷满 n 字节（导出名为 io.CopyN） |
| [io.LimitReader](#limitreader) | `r io.Reader, n int64` | `io.Reader` | 返回一个最多读取 n 个字节后即返回 EOF 的 Reader（导出名为 io.LimitReader） |
| [io.NopCloser](#nopcloser) | `r io.Reader` | `io.ReadCloser` | 将一个 Reader 包装为 ReadCloser，其 Close 方法为空操作（导出名为 io.NopCloser） |
| [io.Pipe](#pipe) | - | `*bufpipe.PipeReader, *bufpipe.PipeWriter` | 创建一个内存管道，返回配对的读取端与写入端（导出名为 io.Pipe） |
| [io.ReadAll](#readall) | `r io.Reader` | `[]byte, error` | 读取 Reader 中的所有字节，直到 EOF（导出名为 io.ReadAll） |
| [io.ReadEvery1s](#readevery1s) | `c context.Context, reader io.Reader, f func([]byte) bool` | - | 每秒读取一次 Reader，并把读到的数据交给回调函数处理（导出名为 io.ReadEvery1s） |
| [io.ReadFile](#readfile) | `path string` | `[]byte, error` | 读取指定文件的全部内容（导出名为 io.ReadFile） |
| [io.ReadStable](#readstable) | `reader io.Reader, float float64` | `[]byte` | 从 reader 稳定读取数据，在指定时间内无新数据或读到 EOF 时返回（导出名为 io.ReadStable） |
| [io.TeeReader](#teereader) | `r io.Reader, w io.Writer` | `io.Reader` | 返回一个 Reader，从 r 读取的同时把数据写入 w（导出名为 io.TeeReader） |
| [io.WriteString](#writestring) | `writer io.Writer, s string` | `int, error` | 将字符串写入 writer（导出名为 io.WriteString） |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [io.MultiReader](#multireader) | `readers ...io.Reader` | `io.Reader` | 将多个 Reader 串联成一个 Reader，按顺序逐个读取（导出名为 io.MultiReader） |

## 函数详情

### Copy {#copy}

```go
Copy(writer io.Writer, reader io.Reader) (written int64, err error)
```

将 reader 中的数据全部拷贝到 writer，直到 EOF 或出错（导出名为 io.Copy）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| writer | `io.Writer` | 目标 Writer |
| reader | `io.Reader` | 数据来源 Reader |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| written | `int64` | 实际拷贝的字节数 |
| err | `error` | 错误信息（拷贝出错时返回） |

**示例**

``````````````yak
sink = bufio.NewBuffer()
n = io.Copy(sink, bufio.NewBuffer("copydata"))~
println(sink.String())   // OUT: copydata
assert sink.String() == "copydata", "Copy should copy all bytes to the writer"
assert n == 8, "Copy should return the number of bytes copied"
``````````````

---

### CopyN {#copyn}

```go
CopyN(writer io.Writer, reader io.Reader, n int64) (written int64, err error)
```

将 reader 中最多 n 个字节拷贝到 writer，直到 EOF 或拷满 n 字节（导出名为 io.CopyN）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| writer | `io.Writer` | 目标 Writer |
| reader | `io.Reader` | 数据来源 Reader |
| n | `int64` | 最多拷贝的字节数 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| written | `int64` | 实际拷贝的字节数 |
| err | `error` | 错误信息（提前 EOF 或出错时返回） |

**示例**

``````````````yak
sink = bufio.NewBuffer()
io.CopyN(sink, bufio.NewBuffer("abcdef"), 3)~
println(sink.String())   // OUT: abc
assert sink.String() == "abc", "CopyN should copy at most n bytes"
``````````````

---

### LimitReader {#limitreader}

```go
LimitReader(r io.Reader, n int64) io.Reader
```

返回一个最多读取 n 个字节后即返回 EOF 的 Reader（导出名为 io.LimitReader）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| r | `io.Reader` | 底层 Reader |
| n | `int64` | 最多读取的字节数 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `io.Reader` | 受限的 Reader |

**示例**

``````````````yak
lr = io.LimitReader(bufio.NewBuffer("abcdefgh"), 3)
data = io.ReadAll(lr)~
println(string(data))   // OUT: abc
assert string(data) == "abc", "LimitReader should stop after n bytes"
``````````````

---

### NopCloser {#nopcloser}

```go
NopCloser(r io.Reader) io.ReadCloser
```

将一个 Reader 包装为 ReadCloser，其 Close 方法为空操作（导出名为 io.NopCloser）

常用于满足需要 ReadCloser 的接口，但底层数据源不需要真正关闭的场景

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| r | `io.Reader` | 底层 Reader |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `io.ReadCloser` | 带空 Close 的 ReadCloser |

**示例**

``````````````yak
nc = io.NopCloser(bufio.NewBuffer("nopdata"))
nc.Close()
data = io.ReadAll(nc)~
println(string(data))   // OUT: nopdata
assert string(data) == "nopdata", "NopCloser should stay readable after Close"
``````````````

---

### Pipe {#pipe}

```go
Pipe() (*bufpipe.PipeReader, *bufpipe.PipeWriter)
```

创建一个内存管道，返回配对的读取端与写入端（导出名为 io.Pipe）

写入端写入的数据可从读取端读出，常用于在协程间传递流式数据

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*bufpipe.PipeReader` | 管道读取端 |
| r2 | `*bufpipe.PipeWriter` | 管道写入端 |

**示例**

``````````````yak
r, w = io.Pipe()
go func() { w.WriteString("piped"); w.Close() }()
data = io.ReadAll(r)~
println(string(data))   // OUT: piped
assert string(data) == "piped", "Pipe should transfer data from writer to reader"
``````````````

---

### ReadAll {#readall}

```go
ReadAll(r io.Reader) ([]byte, error)
```

读取 Reader 中的所有字节，直到 EOF（导出名为 io.ReadAll）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| r | `io.Reader` | 数据来源 Reader |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 读取到的全部字节 |
| r2 | `error` | 错误信息（读取出错时返回，正常读到 EOF 不算错误） |

**示例**

``````````````yak
data = io.ReadAll(bufio.NewBuffer("hello yak"))~
println(string(data))   // OUT: hello yak
assert string(data) == "hello yak", "ReadAll should read all bytes from the reader"
``````````````

---

### ReadEvery1s {#readevery1s}

```go
ReadEvery1s(c context.Context, reader io.Reader, f func([]byte) bool)
```

每秒读取一次 Reader，并把读到的数据交给回调函数处理（导出名为 io.ReadEvery1s）

直到读取到 EOF、上下文取消、或回调返回 false 为止，常用于持续消费子进程/连接的流式输出

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| c | `context.Context` | 控制生命周期的上下文，取消后停止读取 |
| reader | `io.Reader` | 数据来源 Reader |
| f | `func([]byte) bool` | 回调函数，接收本次读到的数据；返回 false 表示停止 |

**示例**

``````````````yak
collected = bufio.NewBuffer()
ctx, cancel = context.WithTimeout(context.Background(), time.ParseDuration("3s")~)
r, w = io.Pipe()
go func() { w.WriteString("tick"); w.Close() }()
io.ReadEvery1s(ctx, r, func(data) { collected.Write(data); cancel(); return false })
println(collected.String())   // OUT: tick
assert str.Contains(collected.String(), "tick"), "ReadEvery1s should deliver data to the callback"
``````````````

---

### ReadFile {#readfile}

```go
ReadFile(path string) ([]byte, error)
```

读取指定文件的全部内容（导出名为 io.ReadFile）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| path | `string` | 文件路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 文件内容字节 |
| r2 | `error` | 错误信息（文件不存在或读取失败时返回） |

**示例**

``````````````yak
fp = file.Join(os.TempDir(), "io_readfile_demo.txt")
file.Save(fp, "hello yak")~
data = io.ReadFile(fp)~
println(string(data))   // OUT: hello yak
assert string(data) == "hello yak", "ReadFile should return the whole file content"
file.Remove(fp)
``````````````

---

### ReadStable {#readstable}

```go
ReadStable(reader io.Reader, float float64) []byte
```

从 reader 稳定读取数据，在指定时间内无新数据或读到 EOF 时返回（导出名为 io.ReadStable）

适合读取不会主动关闭、但会间歇产出数据的流（如某些网络连接）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| reader | `io.Reader` | 数据来源 Reader |
| float | `float64` | 稳定等待的秒数（支持小数） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 读取到的数据字节 |

**示例**

``````````````yak
data = io.ReadStable(bufio.NewBuffer("stable"), 1)
println(string(data))   // OUT: stable
assert string(data) == "stable", "ReadStable should read available data within the window"
``````````````

---

### TeeReader {#teereader}

```go
TeeReader(r io.Reader, w io.Writer) io.Reader
```

返回一个 Reader，从 r 读取的同时把数据写入 w（导出名为 io.TeeReader）

常用于在读取数据流的同时保留一份副本

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| r | `io.Reader` | 底层 Reader |
| w | `io.Writer` | 副本写入目标 Writer |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `io.Reader` | 带旁路写入的 Reader |

**示例**

``````````````yak
sink = bufio.NewBuffer()
tr = io.TeeReader(bufio.NewBuffer("teedata"), sink)
io.ReadAll(tr)~
println(sink.String())   // OUT: teedata
assert sink.String() == "teedata", "TeeReader should mirror read bytes into the writer"
``````````````

---

### WriteString {#writestring}

```go
WriteString(writer io.Writer, s string) (n int, err error)
```

将字符串写入 writer（导出名为 io.WriteString）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| writer | `io.Writer` | 目标 Writer |
| s | `string` | 要写入的字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| n | `int` | 实际写入的字节数 |
| err | `error` | 错误信息（写入出错时返回） |

**示例**

``````````````yak
sink = bufio.NewBuffer()
n = io.WriteString(sink, "hello yak")~
println(sink.String())   // OUT: hello yak
assert sink.String() == "hello yak", "WriteString should write the string to the writer"
assert n == 9, "WriteString should return the number of bytes written"
``````````````

---

## 可变参数函数详情

### MultiReader {#multireader}

```go
MultiReader(readers ...io.Reader) io.Reader
```

将多个 Reader 串联成一个 Reader，按顺序逐个读取（导出名为 io.MultiReader）

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| readers | `...io.Reader` | 一个或多个 Reader，按传入顺序读取 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `io.Reader` | 串联后的 Reader |

**示例**

``````````````yak
mr = io.MultiReader(bufio.NewBuffer("foo"), bufio.NewBuffer("bar"))
data = io.ReadAll(mr)~
println(string(data))   // OUT: foobar
assert string(data) == "foobar", "MultiReader should read readers in order"
``````````````

---

