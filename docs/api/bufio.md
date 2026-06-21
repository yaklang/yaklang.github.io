# bufio {#library-bufio}

`bufio` 库是 Go 标准库 `bufio` 的 yak 封装，提供带缓冲的读写器与扫描器，用于高效地按行/按块处理 I/O 流（文件、网络连接、内存缓冲等）。

典型使用场景：

- 读取：`bufio.NewReader` / `bufio.NewReaderSize` 创建带缓冲读取器，`bufio.NewScanner` 创建按行/按 token 扫描器逐段读取大流。
- 写入：`bufio.NewWriter` / `bufio.NewWriterSize` 创建带缓冲写入器，`bufio.NewReadWriter` 组合读写。
- 缓冲与管道：`bufio.NewBuffer` 创建内存字节缓冲，`bufio.NewPipe` 创建内存管道（一端写、一端读）。

与相邻库的关系：`bufio` 是底层 I/O 工具，常与 `io`、`file`、`tcp`/`udp` 等配合，用于流式读取网络/文件数据而不一次性占满内存。

> 共 8 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [bufio.NewPipe](#newpipe) | - | `*bufpipe.PipeReader, *bufpipe.PipeWriter` | 创建一个内存管道，返回配对的 PipeReader 与 PipeWriter（导出名为 bufio.NewPipe） |
| [bufio.NewReadWriter](#newreadwriter) | `i any, i2 any` | `*bufio.ReadWriter, error` | 根据传入的 Reader 和 Writer 创建一个带缓冲的 ReadWriter（导出名为 bufio.NewReadWriter） |
| [bufio.NewReaderSize](#newreadersize) | `i any, size int` | `*bufio.Reader, error` | 根据传入的 Reader 创建一个指定缓冲区大小的带缓冲 Reader（导出名为 bufio.NewReaderSize） |
| [bufio.NewScanner](#newscanner) | `i any` | `*bufio.Scanner, error` | 根据传入的 Reader 创建一个 Scanner（导出名为 bufio.NewScanner） |
| [bufio.NewWriterSize](#newwritersize) | `i any, size int` | `*bufio.Writer, error` | 根据传入的 Writer 创建一个指定缓冲区大小的带缓冲 Writer（导出名为 bufio.NewWriterSize） |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [bufio.NewBuffer](#newbuffer) | `b ...[]byte` | `*bytes.Buffer` | 创建一个新的 Buffer 结构体引用，其帮助我们处理字符串（导出名为 bufio.NewBuffer） |
| [bufio.NewReader](#newreader) | `raw ...any` | `*bufio.Reader, error` | 根据传入的 Reader 创建一个新的带缓冲 Reader（导出名为 bufio.NewReader） |
| [bufio.NewWriter](#newwriter) | `raw ...any` | `*bufio.Writer, error` | 根据传入的 Writer 创建一个新的带缓冲 Writer（导出名为 bufio.NewWriter） |

## 函数详情

### NewPipe {#newpipe}

```go
NewPipe() (*bufpipe.PipeReader, *bufpipe.PipeWriter)
```

创建一个内存管道，返回配对的 PipeReader 与 PipeWriter（导出名为 bufio.NewPipe）

写入端写入的数据可从读取端读出，常用于在协程间传递流式数据

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*bufpipe.PipeReader` | 管道读取端 PipeReader |
| r2 | `*bufpipe.PipeWriter` | 管道写入端 PipeWriter |

**示例**

``````````````yak
r, w = bufio.NewPipe()
go func() { w.Write("Hello World"); w.Close() }()
data = io.ReadAll(r)~
println(string(data))   // OUT: Hello World
assert string(data) == "Hello World", "NewPipe should transfer data from writer to reader"
``````````````

---

### NewReadWriter {#newreadwriter}

```go
NewReadWriter(i any, i2 any) (*bufio.ReadWriter, error)
```

根据传入的 Reader 和 Writer 创建一个带缓冲的 ReadWriter（导出名为 bufio.NewReadWriter）

ReadWriter 可同时调用带缓冲 Reader 与 Writer 的方法

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 底层 io.Reader |
| i2 | `any` | 底层 io.Writer |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*bufio.ReadWriter` | 带缓冲的 ReadWriter 对象 |
| r2 | `error` | 错误信息（任一参数类型不符时返回） |

**示例**

``````````````yak
rw = bufio.NewReadWriter(bufio.NewBuffer("input"), bufio.NewBuffer())~
line = rw.ReadString('t')~
println(line)   // OUT: input
assert line == "input", "NewReadWriter should read from the underlying reader"
``````````````

---

### NewReaderSize {#newreadersize}

```go
NewReaderSize(i any, size int) (*bufio.Reader, error)
```

根据传入的 Reader 创建一个指定缓冲区大小的带缓冲 Reader（导出名为 bufio.NewReaderSize）

常用方法：Read, ReadByte, ReadBytes, ReadLine, ReadString, Reset

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 底层 io.Reader |
| size | `int` | 缓冲区大小（字节） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*bufio.Reader` | 带缓冲的 Reader 对象 |
| r2 | `error` | 错误信息（传入类型非 io.Reader 时返回） |

**示例**

``````````````yak
reader = bufio.NewReaderSize(bufio.NewBuffer("abcdef"), 1024)~
part = reader.ReadString('c')~
println(part)   // OUT: abc
assert part == "abc", "NewReaderSize ReadString should read up to delimiter c"
``````````````

---

### NewScanner {#newscanner}

```go
NewScanner(i any) (*bufio.Scanner, error)
```

根据传入的 Reader 创建一个 Scanner（导出名为 bufio.NewScanner）

Scanner 默认按行切分输入，常用方法：Scan, Text, Err, Split, SplitFunc

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 底层 io.Reader |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*bufio.Scanner` | Scanner 对象 |
| r2 | `error` | 错误信息（传入类型非 io.Reader 时返回） |

**示例**

``````````````yak
scanner = bufio.NewScanner(bufio.NewBuffer("a\nb\nc"))~
count = 0
for scanner.Scan() { count++ }
println(count)   // OUT: 3
assert count == 3, "NewScanner should iterate over 3 lines"
``````````````

---

### NewWriterSize {#newwritersize}

```go
NewWriterSize(i any, size int) (*bufio.Writer, error)
```

根据传入的 Writer 创建一个指定缓冲区大小的带缓冲 Writer（导出名为 bufio.NewWriterSize）

常用方法：Write, WriteByte, WriteString, Reset, Flush

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 底层 io.Writer |
| size | `int` | 缓冲区大小（字节） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*bufio.Writer` | 带缓冲的 Writer 对象 |
| r2 | `error` | 错误信息（传入类型非 io.Writer 时返回） |

**示例**

``````````````yak
sink = bufio.NewBuffer()
writer = bufio.NewWriterSize(sink, 1024)~
writer.WriteString("hello yak")
writer.Flush()
println(sink.String())   // OUT: hello yak
assert sink.String() == "hello yak", "NewWriterSize should flush buffered data to the sink"
``````````````

---

## 可变参数函数详情

### NewBuffer {#newbuffer}

```go
NewBuffer(b ...[]byte) *bytes.Buffer
```

创建一个新的 Buffer 结构体引用，其帮助我们处理字符串（导出名为 bufio.NewBuffer）

Buffer 同时实现了 Reader 和 Writer 接口

常用方法：Bytes, String, Read, Write, WriteString, WriteByte, Reset

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| b | `...[]byte` | 可选的初始内容字节 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*bytes.Buffer` | 新建的 Buffer 对象 |

**示例**

``````````````yak
buffer = bufio.NewBuffer()
buffer.WriteString("hello yak")
println(buffer.String())   // OUT: hello yak
assert buffer.String() == "hello yak", "NewBuffer should hold written content"
``````````````

---

### NewReader {#newreader}

```go
NewReader(raw ...any) (*bufio.Reader, error)
```

根据传入的 Reader 创建一个新的带缓冲 Reader（导出名为 bufio.NewReader）

常用方法：Read, ReadByte, ReadBytes, ReadLine, ReadString, Reset

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| raw | `...any` | 可选的底层 io.Reader；不传则使用空缓冲 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*bufio.Reader` | 带缓冲的 Reader 对象 |
| r2 | `error` | 错误信息（传入类型非 io.Reader 时返回） |

**示例**

``````````````yak
reader = bufio.NewReader(bufio.NewBuffer("line1\nline2"))~
first = reader.ReadString('\n')~
println(first)   // OUT: line1
assert first == "line1\n", "NewReader ReadString should read up to and including the delimiter"
``````````````

---

### NewWriter {#newwriter}

```go
NewWriter(raw ...any) (*bufio.Writer, error)
```

根据传入的 Writer 创建一个新的带缓冲 Writer（导出名为 bufio.NewWriter）

写入会先进入缓冲区，需调用 Flush 才会真正写到底层 Writer

常用方法：Write, WriteByte, WriteString, Reset, Flush

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| raw | `...any` | 可选的底层 io.Writer；不传则写入空缓冲 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*bufio.Writer` | 带缓冲的 Writer 对象 |
| r2 | `error` | 错误信息（传入类型非 io.Writer 时返回） |

**示例**

``````````````yak
sink = bufio.NewBuffer()
writer = bufio.NewWriter(sink)~
writer.WriteString("hello yak")
writer.Flush()
println(sink.String())   // OUT: hello yak
assert sink.String() == "hello yak", "NewWriter should flush buffered data to the sink"
``````````````

---

