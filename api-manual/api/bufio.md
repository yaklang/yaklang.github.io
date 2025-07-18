# bufio

|函数名|函数描述/介绍|
|:------|:--------|
| [bufio.NewBuffer](#newbuffer) |NewBuffer 创建一个新的 Buffer 结构体引用，其帮助我们处理字符串  Buffer 也实现了 Reader 和 Writer 接口  常用的 Buffer 方法有：Bytes, String, Read, Write, WriteString, WriteByte, Reset  |
| [bufio.NewPipe](#newpipe) ||
| [bufio.NewReadWriter](#newreadwriter) |NewReadWriter 根据传入的 Reader 和 Writer 创建一个新的 BufioReadWriter 结构体引用  BufioReadWriter 可以同时调用 BufioReader 和 BufioWriter 的方法  |
| [bufio.NewReader](#newreader) |NewReader 根据传入的 Reader 创建一个新的 BufioReader 结构体引用  常用的 BufioReader 方法有：Read, ReadByte, ReadBytes, ReadLine, ReadString, Reset  |
| [bufio.NewReaderSize](#newreadersize) |NewReaderSize 根据传入的 Reader 创建一个新的 BufioReader 结构体引用，其的缓存大小为 size  常用的 BufioReader 方法有：Read, ReadByte, ReadBytes, ReadLine, ReadString, Reset  |
| [bufio.NewScanner](#newscanner) |NewScanner 根据传入的 Reader 创建一个新的 Scanner 结构体引用  常用的 Scanner 方法有：Scan, Text, Err, Split, SplitFunc  |
| [bufio.NewWriter](#newwriter) |NewWriter 根据传入的 Writer 创建一个新的 BufioWriter 结构体引用  常用的 BufioWriter 方法有：Write, WriteByte, WriteString, Reset, Flush  |
| [bufio.NewWriterSize](#newwritersize) |NewWriterSize 根据传入的 Writer 创建一个新的 BufioWriter 结构体引用，其的缓存大小为 size  常用的 BufioWriter 方法有：Write, WriteByte, WriteString, Reset, Flush  |


## 函数定义
### NewBuffer

#### 详细描述
NewBuffer 创建一个新的 Buffer 结构体引用，其帮助我们处理字符串

Buffer 也实现了 Reader 和 Writer 接口

常用的 Buffer 方法有：Bytes, String, Read, Write, WriteString, WriteByte, Reset

Example:
```
buffer = bufio.NewBuffer() // 或者你也可以使用 io.NewBuffer("hello yak") 来初始化一个 Buffer
buffer.WriteString("hello yak")
data, err = io.ReadAll(buffer) // data = b"hello yak", err = nil
```


#### 定义

`NewBuffer(b ...[]byte) *bytes.Buffer`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `...[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*bytes.Buffer` |   |


### NewPipe

#### 详细描述


#### 定义

`NewPipe() (*PipeReader, *PipeWriter)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*PipeReader` |   |
| r2 | `*PipeWriter` |   |


### NewReadWriter

#### 详细描述
NewReadWriter 根据传入的 Reader 和 Writer 创建一个新的 BufioReadWriter 结构体引用

BufioReadWriter 可以同时调用 BufioReader 和 BufioWriter 的方法

Example:
```
rw, err = bufio.NewReadWriter(os.Stdin, os.Stdout)
```


#### 定义

`NewReadWriter(i any, i2 any) (*bufio.ReadWriter, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |
| i2 | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*bufio.ReadWriter` |   |
| r2 | `error` |   |


### NewReader

#### 详细描述
NewReader 根据传入的 Reader 创建一个新的 BufioReader 结构体引用

常用的 BufioReader 方法有：Read, ReadByte, ReadBytes, ReadLine, ReadString, Reset

Example:
```
reader = bufio.NewReader(os.Stdin)
```


#### 定义

`NewReader(raw ...any) (*bufio.Reader, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*bufio.Reader` |   |
| r2 | `error` |   |


### NewReaderSize

#### 详细描述
NewReaderSize 根据传入的 Reader 创建一个新的 BufioReader 结构体引用，其的缓存大小为 size

常用的 BufioReader 方法有：Read, ReadByte, ReadBytes, ReadLine, ReadString, Reset

Example:
```
reader = bufio.NewReaderSize(os.Stdin, 1024)
```


#### 定义

`NewReaderSize(i any, size int) (*bufio.Reader, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |
| size | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*bufio.Reader` |   |
| r2 | `error` |   |


### NewScanner

#### 详细描述
NewScanner 根据传入的 Reader 创建一个新的 Scanner 结构体引用

常用的 Scanner 方法有：Scan, Text, Err, Split, SplitFunc

Example:
```
buf = bufio.NewBuffer("hello yak\nhello yakit")
scanner, err = bufio.NewScanner(buf)
for scanner.Scan() {
println(scanner.Text())
}
```


#### 定义

`NewScanner(i any) (*bufio.Scanner, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*bufio.Scanner` |   |
| r2 | `error` |   |


### NewWriter

#### 详细描述
NewWriter 根据传入的 Writer 创建一个新的 BufioWriter 结构体引用

常用的 BufioWriter 方法有：Write, WriteByte, WriteString, Reset, Flush

Example:
```
writer, err = bufio.NewWriter(os.Stdout)
writer.WriteString("hello yak")
writer.Flush()
```


#### 定义

`NewWriter(raw ...any) (*bufio.Writer, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*bufio.Writer` |   |
| r2 | `error` |   |


### NewWriterSize

#### 详细描述
NewWriterSize 根据传入的 Writer 创建一个新的 BufioWriter 结构体引用，其的缓存大小为 size

常用的 BufioWriter 方法有：Write, WriteByte, WriteString, Reset, Flush

Example:
```
writer, err = bufio.NewWriterSize(os.Stdout, 1024)
writer.WriteString("hello yak")
writer.Flush()
```


#### 定义

`NewWriterSize(i any, size int) (*bufio.Writer, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |
| size | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*bufio.Writer` |   |
| r2 | `error` |   |


