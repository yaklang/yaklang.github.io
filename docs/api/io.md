# io

|成员函数|函数描述/介绍|
|:------|:--------|
| [io.Copy](#Copy) |Copy copies from src to dst until either EOF is reachedon src or an error occurs. It returns the number of bytescopied and the first error encountered while copying, if any.A successful Copy returns err == nil, not err == EOF.Because Copy is defined to read from src until EOF, it doesnot treat an EOF from Read as an error to be reported.If src implements the WriterTo interface,the copy is implemented by calling src.WriteTo(dst).Otherwise, if dst implements the ReaderFrom interface,the copy is implemented by calling dst.ReadFrom(src).|
| [io.CopyN](#CopyN) |CopyN copies n bytes (or until an error) from src to dst.It returns the number of bytes copied and the earliesterror encountered while copying.On return, written == n if and only if err == nil.If dst implements the ReaderFrom interface,the copy is implemented using it.|
| [io.LimitReader](#LimitReader) |LimitReader returns a Reader that reads from rbut stops with EOF after n bytes.The underlying implementation is a *LimitedReader.|
| [io.MultiReader](#MultiReader) ||
| [io.NopCloser](#NopCloser) |NopCloser returns a ReadCloser with a no-op Close method wrappingthe provided Reader r.Deprecated: As of Go 1.16, this function simply calls io.NopCloser.|
| [io.Pipe](#Pipe) |Pipe creates a synchronous in-memory pipe.It can be used to connect code expecting an io.Readerwith code expecting an io.Writer.Reads and Writes on the pipe are matched one to oneexcept when multiple Reads are needed to consume a single Write.That is, each Write to the PipeWriter blocks until it has satisfiedone or more Reads from the PipeReader that fully consumethe written data.The data is copied directly from the Write to the correspondingRead (or Reads); there is no internal buffering.It is safe to call Read and Write in parallel with each other or with Close.Parallel calls to Read and parallel calls to Write are also safe:the individual calls will be gated sequentially.|
| [io.ReadAll](#ReadAll) |ReadAll reads from r until an error or EOF and returns the data it read.A successful call returns err == nil, not err == EOF. Because ReadAll isdefined to read from src until EOF, it does not treat an EOF from Readas an error to be reported.Deprecated: As of Go 1.16, this function simply calls io.ReadAll.|
| [io.ReadEvery1s](#ReadEvery1s) ||
| [io.ReadFile](#ReadFile) |ReadFile reads the file named by filename and returns the contents.A successful call returns err == nil, not err == EOF. Because ReadFilereads the whole file, it does not treat an EOF from Read as an errorto be reported.Deprecated: As of Go 1.16, this function simply calls os.ReadFile.|
| [io.ReadStable](#ReadStable) ||
| [io.TeeReader](#TeeReader) |TeeReader returns a Reader that writes to w what it reads from r.All reads from r performed through it are matched withcorresponding writes to w. There is no internal buffering -the write must complete before the read completes.Any error encountered while writing is reported as a read error.|
| [io.WriteString](#WriteString) |WriteString writes the contents of the string s to w, which accepts a slice of bytes.If w implements StringWriter, its WriteString method is invoked directly.Otherwise, w.Write is called exactly once.|


## 函数定义
### Copy

#### 详细描述
Copy copies from src to dst until either EOF is reachedon src or an error occurs. It returns the number of bytescopied and the first error encountered while copying, if any.A successful Copy returns err == nil, not err == EOF.Because Copy is defined to read from src until EOF, it doesnot treat an EOF from Read as an error to be reported.If src implements the WriterTo interface,the copy is implemented by calling src.WriteTo(dst).Otherwise, if dst implements the ReaderFrom interface,the copy is implemented by calling dst.ReadFrom(src).

#### 定义

`Copy(dst Writer, src Reader) (written int64, err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| dst | `Writer` |   |
| src | `Reader` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| written | `int64` |   |
| err | `error` |   |


### CopyN

#### 详细描述
CopyN copies n bytes (or until an error) from src to dst.It returns the number of bytes copied and the earliesterror encountered while copying.On return, written == n if and only if err == nil.If dst implements the ReaderFrom interface,the copy is implemented using it.

#### 定义

`CopyN(dst Writer, src Reader, n int64) (written int64, err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| dst | `Writer` |   |
| src | `Reader` |   |
| n | `int64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| written | `int64` |   |
| err | `error` |   |


### LimitReader

#### 详细描述
LimitReader returns a Reader that reads from rbut stops with EOF after n bytes.The underlying implementation is a *LimitedReader.

#### 定义

`LimitReader(r Reader, n int64) Reader`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| r | `Reader` |   |
| n | `int64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Reader` |   |


### MultiReader

#### 详细描述


#### 定义

`MultiReader(readers ...Reader) Reader`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| readers | `...Reader` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Reader` |   |


### NopCloser

#### 详细描述
NopCloser returns a ReadCloser with a no-op Close method wrappingthe provided Reader r.Deprecated: As of Go 1.16, this function simply calls io.NopCloser.

#### 定义

`NopCloser(r io.Reader) io.ReadCloser`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| r | `io.Reader` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `io.ReadCloser` |   |


### Pipe

#### 详细描述
Pipe creates a synchronous in-memory pipe.It can be used to connect code expecting an io.Readerwith code expecting an io.Writer.Reads and Writes on the pipe are matched one to oneexcept when multiple Reads are needed to consume a single Write.That is, each Write to the PipeWriter blocks until it has satisfiedone or more Reads from the PipeReader that fully consumethe written data.The data is copied directly from the Write to the correspondingRead (or Reads); there is no internal buffering.It is safe to call Read and Write in parallel with each other or with Close.Parallel calls to Read and parallel calls to Write are also safe:the individual calls will be gated sequentially.

#### 定义

`Pipe() (*PipeReader, *PipeWriter)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*PipeReader` |   |
| r2 | `*PipeWriter` |   |


### ReadAll

#### 详细描述
ReadAll reads from r until an error or EOF and returns the data it read.A successful call returns err == nil, not err == EOF. Because ReadAll isdefined to read from src until EOF, it does not treat an EOF from Readas an error to be reported.Deprecated: As of Go 1.16, this function simply calls io.ReadAll.

#### 定义

`ReadAll(r io.Reader) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| r | `io.Reader` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### ReadEvery1s

#### 详细描述


#### 定义

`ReadEvery1s(c context.Context, reader io.Reader, f func([]byte) bool)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| c | `context.Context` |   |
| reader | `io.Reader` |   |
| f | `func([]byte) bool` |   |


### ReadFile

#### 详细描述
ReadFile reads the file named by filename and returns the contents.A successful call returns err == nil, not err == EOF. Because ReadFilereads the whole file, it does not treat an EOF from Read as an errorto be reported.Deprecated: As of Go 1.16, this function simply calls os.ReadFile.

#### 定义

`ReadFile(filename string) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| filename | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### ReadStable

#### 详细描述


#### 定义

`ReadStable(conn net.Conn, float float64) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| conn | `net.Conn` |   |
| float | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### TeeReader

#### 详细描述
TeeReader returns a Reader that writes to w what it reads from r.All reads from r performed through it are matched withcorresponding writes to w. There is no internal buffering -the write must complete before the read completes.Any error encountered while writing is reported as a read error.

#### 定义

`TeeReader(r Reader, w Writer) Reader`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| r | `Reader` |   |
| w | `Writer` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Reader` |   |


### WriteString

#### 详细描述
WriteString writes the contents of the string s to w, which accepts a slice of bytes.If w implements StringWriter, its WriteString method is invoked directly.Otherwise, w.Write is called exactly once.

#### 定义

`WriteString(w Writer, s string) (n int, err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| w | `Writer` |   |
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| n | `int` |   |
| err | `error` |   |


