# bufio

|函数名|函数描述/介绍|
|:------|:--------|
| [bufio.NewBuffer](#newbuffer) |NewBuffer 创建一个新的 Buffer 结构体引用，其帮助我们处理字符串（导出名为 bufio.NewBuffer） Buffer 同时实现了 Reader 和 Writer 接口 常用方法：Bytes, String, Read, Write, WriteString, WriteByte...|
| [bufio.NewPipe](#newpipe) |NewPipe 创建一个内存管道，返回配对的 PipeReader 与 PipeWriter（导出名为 bufio.NewPipe） 写入端写入的数据可从读取端读出，常用于在协程间传递流式数据 返回值: - 管道读取端 PipeReader - 管道写入端 PipeWriter|
| [bufio.NewReadWriter](#newreadwriter) |NewReadWriter 根据传入的 Reader 和 Writer 创建一个带缓冲的 ReadWriter（导出名为 bufio.NewReadWriter） ReadWriter 可同时调用带缓冲 Reader 与 Writer 的方法 参数: - i: 底层 io.Reader - i2: ...|
| [bufio.NewReader](#newreader) |NewReader 根据传入的 Reader 创建一个新的带缓冲 Reader（导出名为 bufio.NewReader） 常用方法：Read, ReadByte, ReadBytes, ReadLine, ReadString, Reset 参数: - raw: 可选的底层 io.Reader；不...|
| [bufio.NewReaderSize](#newreadersize) |NewReaderSize 根据传入的 Reader 创建一个指定缓冲区大小的带缓冲 Reader（导出名为 bufio.NewReaderSize） 常用方法：Read, ReadByte, ReadBytes, ReadLine, ReadString, Reset 参数: - i: 底层 io...|
| [bufio.NewScanner](#newscanner) |NewScanner 根据传入的 Reader 创建一个 Scanner（导出名为 bufio.NewScanner） Scanner 默认按行切分输入，常用方法：Scan, Text, Err, Split, SplitFunc 参数: - i: 底层 io.Reader 返回值: - Scann...|
| [bufio.NewWriter](#newwriter) |NewWriter 根据传入的 Writer 创建一个新的带缓冲 Writer（导出名为 bufio.NewWriter） 写入会先进入缓冲区，需调用 Flush 才会真正写到底层 Writer 常用方法：Write, WriteByte, WriteString, Reset, Flush 参数:...|
| [bufio.NewWriterSize](#newwritersize) |NewWriterSize 根据传入的 Writer 创建一个指定缓冲区大小的带缓冲 Writer（导出名为 bufio.NewWriterSize） 常用方法：Write, WriteByte, WriteString, Reset, Flush 参数: - i: 底层 io.Writer - s...|


## 函数定义
### NewBuffer

#### 详细描述
NewBuffer 创建一个新的 Buffer 结构体引用，其帮助我们处理字符串（导出名为 bufio.NewBuffer）

Buffer 同时实现了 Reader 和 Writer 接口

常用方法：Bytes, String, Read, Write, WriteString, WriteByte, Reset



参数:

  - b: 可选的初始内容字节



返回值:

  - 新建的 Buffer 对象




Example:

``````````````yak
buffer = bufio.NewBuffer()
buffer.WriteString("hello yak")
println(buffer.String())   // OUT: hello yak
assert buffer.String() == "hello yak", "NewBuffer should hold written content"
``````````````


#### 定义

`NewBuffer(b ...[]byte) *bytes.Buffer`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `...[]byte` | 可选的初始内容字节 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*bytes.Buffer` | 新建的 Buffer 对象 |


### NewPipe

#### 详细描述
NewPipe 创建一个内存管道，返回配对的 PipeReader 与 PipeWriter（导出名为 bufio.NewPipe）

写入端写入的数据可从读取端读出，常用于在协程间传递流式数据



返回值:

  - 管道读取端 PipeReader

  - 管道写入端 PipeWriter




Example:

``````````````yak
r, w = bufio.NewPipe()
go func() { w.Write("Hello World"); w.Close() }()
data = io.ReadAll(r)~
println(string(data))   // OUT: Hello World
assert string(data) == "Hello World", "NewPipe should transfer data from writer to reader"
``````````````


#### 定义

`NewPipe() (*bufpipe.PipeReader, *bufpipe.PipeWriter)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*bufpipe.PipeReader` | 管道读取端 PipeReader |
| r2 | `*bufpipe.PipeWriter` | 管道写入端 PipeWriter |


### NewReadWriter

#### 详细描述
NewReadWriter 根据传入的 Reader 和 Writer 创建一个带缓冲的 ReadWriter（导出名为 bufio.NewReadWriter）

ReadWriter 可同时调用带缓冲 Reader 与 Writer 的方法



参数:

  - i: 底层 io.Reader

  - i2: 底层 io.Writer



返回值:

  - 带缓冲的 ReadWriter 对象

  - 错误信息（任一参数类型不符时返回）




Example:

``````````````yak
rw = bufio.NewReadWriter(bufio.NewBuffer("input"), bufio.NewBuffer())~
line = rw.ReadString('t')~
println(line)   // OUT: input
assert line == "input", "NewReadWriter should read from the underlying reader"
``````````````


#### 定义

`NewReadWriter(i any, i2 any) (*bufio.ReadWriter, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 底层 io.Reader |
| i2 | `any` | 底层 io.Writer |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*bufio.ReadWriter` | 带缓冲的 ReadWriter 对象 |
| r2 | `error` | 错误信息（任一参数类型不符时返回） |


### NewReader

#### 详细描述
NewReader 根据传入的 Reader 创建一个新的带缓冲 Reader（导出名为 bufio.NewReader）

常用方法：Read, ReadByte, ReadBytes, ReadLine, ReadString, Reset



参数:

  - raw: 可选的底层 io.Reader；不传则使用空缓冲



返回值:

  - 带缓冲的 Reader 对象

  - 错误信息（传入类型非 io.Reader 时返回）




Example:

``````````````yak
reader = bufio.NewReader(bufio.NewBuffer("line1\nline2"))~
first = reader.ReadString('\n')~
println(first)   // OUT: line1
assert first == "line1\n", "NewReader ReadString should read up to and including the delimiter"
``````````````


#### 定义

`NewReader(raw ...any) (*bufio.Reader, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `...any` | 可选的底层 io.Reader；不传则使用空缓冲 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*bufio.Reader` | 带缓冲的 Reader 对象 |
| r2 | `error` | 错误信息（传入类型非 io.Reader 时返回） |


### NewReaderSize

#### 详细描述
NewReaderSize 根据传入的 Reader 创建一个指定缓冲区大小的带缓冲 Reader（导出名为 bufio.NewReaderSize）

常用方法：Read, ReadByte, ReadBytes, ReadLine, ReadString, Reset



参数:

  - i: 底层 io.Reader

  - size: 缓冲区大小（字节）



返回值:

  - 带缓冲的 Reader 对象

  - 错误信息（传入类型非 io.Reader 时返回）




Example:

``````````````yak
reader = bufio.NewReaderSize(bufio.NewBuffer("abcdef"), 1024)~
part = reader.ReadString('c')~
println(part)   // OUT: abc
assert part == "abc", "NewReaderSize ReadString should read up to delimiter c"
``````````````


#### 定义

`NewReaderSize(i any, size int) (*bufio.Reader, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 底层 io.Reader |
| size | `int` | 缓冲区大小（字节） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*bufio.Reader` | 带缓冲的 Reader 对象 |
| r2 | `error` | 错误信息（传入类型非 io.Reader 时返回） |


### NewScanner

#### 详细描述
NewScanner 根据传入的 Reader 创建一个 Scanner（导出名为 bufio.NewScanner）

Scanner 默认按行切分输入，常用方法：Scan, Text, Err, Split, SplitFunc



参数:

  - i: 底层 io.Reader



返回值:

  - Scanner 对象

  - 错误信息（传入类型非 io.Reader 时返回）




Example:

``````````````yak
scanner = bufio.NewScanner(bufio.NewBuffer("a\nb\nc"))~
count = 0
for scanner.Scan() { count++ }
println(count)   // OUT: 3
assert count == 3, "NewScanner should iterate over 3 lines"
``````````````


#### 定义

`NewScanner(i any) (*bufio.Scanner, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 底层 io.Reader |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*bufio.Scanner` | Scanner 对象 |
| r2 | `error` | 错误信息（传入类型非 io.Reader 时返回） |


### NewWriter

#### 详细描述
NewWriter 根据传入的 Writer 创建一个新的带缓冲 Writer（导出名为 bufio.NewWriter）

写入会先进入缓冲区，需调用 Flush 才会真正写到底层 Writer

常用方法：Write, WriteByte, WriteString, Reset, Flush



参数:

  - raw: 可选的底层 io.Writer；不传则写入空缓冲



返回值:

  - 带缓冲的 Writer 对象

  - 错误信息（传入类型非 io.Writer 时返回）




Example:

``````````````yak
sink = bufio.NewBuffer()
writer = bufio.NewWriter(sink)~
writer.WriteString("hello yak")
writer.Flush()
println(sink.String())   // OUT: hello yak
assert sink.String() == "hello yak", "NewWriter should flush buffered data to the sink"
``````````````


#### 定义

`NewWriter(raw ...any) (*bufio.Writer, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `...any` | 可选的底层 io.Writer；不传则写入空缓冲 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*bufio.Writer` | 带缓冲的 Writer 对象 |
| r2 | `error` | 错误信息（传入类型非 io.Writer 时返回） |


### NewWriterSize

#### 详细描述
NewWriterSize 根据传入的 Writer 创建一个指定缓冲区大小的带缓冲 Writer（导出名为 bufio.NewWriterSize）

常用方法：Write, WriteByte, WriteString, Reset, Flush



参数:

  - i: 底层 io.Writer

  - size: 缓冲区大小（字节）



返回值:

  - 带缓冲的 Writer 对象

  - 错误信息（传入类型非 io.Writer 时返回）




Example:

``````````````yak
sink = bufio.NewBuffer()
writer = bufio.NewWriterSize(sink, 1024)~
writer.WriteString("hello yak")
writer.Flush()
println(sink.String())   // OUT: hello yak
assert sink.String() == "hello yak", "NewWriterSize should flush buffered data to the sink"
``````````````


#### 定义

`NewWriterSize(i any, size int) (*bufio.Writer, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 底层 io.Writer |
| size | `int` | 缓冲区大小（字节） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*bufio.Writer` | 带缓冲的 Writer 对象 |
| r2 | `error` | 错误信息（传入类型非 io.Writer 时返回） |


