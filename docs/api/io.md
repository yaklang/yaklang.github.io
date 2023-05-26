# io


|成员函数|函数描述/介绍|
|:------|:--------|
 | [io.Copy](#iocopy) | 把一个 `io.Reader` 中的内容对接到 `io.Writer` 中 |
 | [io.CopyN](#iocopyn) | 从 srcReader 中复制固定长度的字节到 dstWriter |
 | [io.LimitReader](#iolimitreader) | 创建一个新的 `io.Reader` 这个 Reader 只读固定长度 |
 | [io.MultiReader](#iomultireader) | 把多个 Reader 合并成一个 |
 | [io.NopCloser](#ionopcloser) | 把一个 io.Reader 包装成 io.ReadCloser，遇到 Nop/EOF 即关闭 |
 | [io.Pipe](#iopipe) | 创建一个 io 管道 |
 | [io.ReadAll](#ioreadall) | 把一个 reader 中的内容全部读出来 |
 | [io.ReadEvery1s](#ioreadevery1s) | 使用一个 ctx 控制生命周期，每隔一秒钟读一次 Reader，每隔一秒钟执行一次回调函数，回调函数如果返回 false，则立即停止读取 |
 | [io.ReadFile](#ioreadfile) | 把一个文件中的内容全部读出来 |
 | [io.ReadStable](#ioreadstable) | 增加一个【稳定即可】的 Reader |
 | [io.TeeReader](#ioteereader) | reader 分流，把 srcReader 读出来的内容会同步写到 teeWriter，通过返回值的 reader 来驱动 |
 | [io.WriteString](#iowritestring) | 把一个 string 写到 writer 中 |




## 变量定义

|变量调用名|变量类型|变量解释/帮助信息|
|:-----------|:---------- |:-----------|
|`io.Discard`|`io.discard`| //|
|`io.EOF`|`*errors.errorString`| 结束符|





## 函数定义

### io.Copy

把一个 `io.Reader` 中的内容对接到 `io.Writer` 中

#### 详细描述



#### 定义：

`Copy(dst Writer, src Reader) (written int64, err error)  doc:Copy copies from src to dst until either EOF is reachedon src or an error occurs. It returns the number of bytescopied and the first error encountered while copying, if any.A successful Copy returns err == nil, not err == EOF.Because Copy is defined to read from src until EOF, it doesnot treat an EOF from Read as an error to be reported.If src implements the WriterTo interface,the copy is implemented by calling src.WriteTo(dst).Otherwise, if dst implements the ReaderFrom interface,the copy is implemented by calling dst.ReadFrom(src).`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| dstWriter | `io.Writer` |   |
| srcReader | `io.Reader` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `int64` |   |
| r1 | `error` |   |


 
### io.CopyN

从 srcReader 中复制固定长度的字节到 dstWriter

#### 详细描述



#### 定义：

`CopyN(dst Writer, src Reader, n int64) (written int64, err error)  doc:CopyN copies n bytes (or until an error) from src to dst.It returns the number of bytes copied and the earliesterror encountered while copying.On return, written == n if and only if err == nil.If dst implements the ReaderFrom interface,the copy is implemented using it.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| dstWriter | `io.Writer` |   |
| srcReader | `io.Reader` |   |
| copyLen | `int64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `int64` |   |
| r1 | `error` |   |


 
### io.LimitReader

创建一个新的 `io.Reader` 这个 Reader 只读固定长度

#### 详细描述



#### 定义：

`LimitReader(io.Reader, int64) io.Reader`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| srcReader | `io.Reader` |   |
| length | `int64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `io.Reader` |   |


 
### io.MultiReader

把多个 Reader 合并成一个

#### 详细描述



#### 定义：

`MultiReader(...io.Reader) io.Reader`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| readers | `...io.Reader` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `io.Reader` |   |


 
### io.NopCloser

把一个 io.Reader 包装成 io.ReadCloser，遇到 Nop/EOF 即关闭

#### 详细描述



#### 定义：

`NopCloser(r io.Reader) io.ReadCloser  doc:NopCloser returns a ReadCloser with a no-op Close method wrappingthe provided Reader r.As of Go 1.16, this function simply calls io.NopCloser.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| reader | `io.Reader` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `io.ReadCloser` |   |


 
### io.Pipe

创建一个 io 管道

#### 详细描述



#### 定义：

`Pipe() (*PipeReader, *PipeWriter)  doc:Pipe creates a synchronous in-memory pipe.It can be used to connect code expecting an io.Readerwith code expecting an io.Writer.Reads and Writes on the pipe are matched one to oneexcept when multiple Reads are needed to consume a single Write.That is, each Write to the PipeWriter blocks until it has satisfiedone or more Reads from the PipeReader that fully consumethe written data.The data is copied directly from the Write to the correspondingRead (or Reads); there is no internal buffering.It is safe to call Read and Write in parallel with each other or with Close.Parallel calls to Read and parallel calls to Write are also safe:the individual calls will be gated sequentially.`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| reader | `*io.PipeReader` |   |
| writer | `*io.PipeWriter` |   |


 
### io.ReadAll

把一个 reader 中的内容全部读出来

#### 详细描述



#### 定义：

`ReadAll(r io.Reader) ([]byte, error)  doc:ReadAll reads from r until an error or EOF and returns the data it read.A successful call returns err == nil, not err == EOF. Because ReadAll isdefined to read from src until EOF, it does not treat an EOF from Readas an error to be reported.As of Go 1.16, this function simply calls io.ReadAll.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| reader | `io.Reader` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### io.ReadEvery1s

使用一个 ctx 控制生命周期，每隔一秒钟读一次 Reader，每隔一秒钟执行一次回调函数，回调函数如果返回 false，则立即停止读取

#### 详细描述



#### 定义：

`ReadEvery1s(context.Context, io.Reader, func([]uint8) bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` |   |
| reader | `io.Reader` |   |
| callback | `func (v1: bytes) return(bool) ` |  回调函数，如果回调函数返回 false，立即停止，如果想继续执行则需要返回 true |




 

 
### io.ReadFile

把一个文件中的内容全部读出来

#### 详细描述



#### 定义：

`ReadFile(filename string) ([]byte, error)  doc:ReadFile reads the file named by filename and returns the contents.A successful call returns err == nil, not err == EOF. Because ReadFilereads the whole file, it does not treat an EOF from Read as an errorto be reported.As of Go 1.16, this function simply calls os.ReadFile.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fileName | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### io.ReadStable

增加一个【稳定即可】的 Reader

#### 详细描述



#### 定义：

`ReadStable(net.Conn, float64) []uint8`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `net.Conn` |   |
| v2 | `float64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |


 
### io.TeeReader

reader 分流，把 srcReader 读出来的内容会同步写到 teeWriter，通过返回值的 reader 来驱动

#### 详细描述



#### 定义：

`TeeReader(io.Reader, io.Writer) io.Reader`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| srcReader | `io.Reader` |   |
| teeWriter | `io.Writer` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `io.Reader` |   |


 
### io.WriteString

把一个 string 写到 writer 中

#### 详细描述



#### 定义：

`WriteString(w Writer, s string) (n int, err error)  doc:WriteString writes the contents of the string s to w, which accepts a slice of bytes.If w implements StringWriter, its WriteString method is invoked directly.Otherwise, w.Write is called exactly once.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| writer | `io.Writer` |   |
| content | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `int` |   |
| r1 | `error` |   |


 


