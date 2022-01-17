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

`func io.Copy(dstWriter: io.Writer, srcReader: io.Reader) return (r0: int64, r1: error)`


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

`func io.CopyN(dstWriter: io.Writer, srcReader: io.Reader, copyLen: int64) return (r0: int64, r1: error)`


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

`func io.LimitReader(srcReader: io.Reader, length: int64) return (r0: io.Reader)`


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

`func io.MultiReader(readers ...io.Reader) return (r0: io.Reader)`


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

`func io.NopCloser(reader: io.Reader) return (r0: io.ReadCloser)`


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

`func io.Pipe() return (reader: *io.PipeReader, writer: *io.PipeWriter)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| reader | `*io.PipeReader` |   |
| writer | `*io.PipeWriter` |   |


 
### io.ReadAll

把一个 reader 中的内容全部读出来

#### 详细描述



#### 定义：

`func io.ReadAll(reader: io.Reader) return (r0: bytes, r1: error)`


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

``func io.ReadEvery1s(ctx: context.Context, reader: io.Reader, callback: func (v1: bytes) return(bool) )``


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

`func io.ReadFile(fileName: string) return (r0: bytes, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fileName | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### io.TeeReader

reader 分流，把 srcReader 读出来的内容会同步写到 teeWriter，通过返回值的 reader 来驱动

#### 详细描述



#### 定义：

`func io.TeeReader(srcReader: io.Reader, teeWriter: io.Writer) return (r0: io.Reader)`


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

`func io.WriteString(writer: io.Writer, content: string) return (r0: int, r1: error)`


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


 


