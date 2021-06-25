# io


|成员函数|函数描述/介绍|
|:------|:--------|
 | [io.Copy](#iocopy) |  |
 | [io.CopyBuffer](#iocopybuffer) |  |
 | [io.CopyN](#iocopyn) |  |
 | [io.LimitReader](#iolimitreader) |  |
 | [io.MultiReader](#iomultireader) |  |
 | [io.NewSectionReader](#ionewsectionreader) |  |
 | [io.NopCloser](#ionopcloser) |  |
 | [io.Pipe](#iopipe) |  |
 | [io.ReadAll](#ioreadall) |  |
 | [io.ReadAtLeast](#ioreadatleast) |  |
 | [io.ReadEvery1s](#ioreadevery1s) |  |
 | [io.ReadFile](#ioreadfile) |  |
 | [io.ReadFull](#ioreadfull) |  |
 | [io.TeeReader](#ioteereader) |  |
 | [io.WriteString](#iowritestring) |  |




## 变量定义

|变量调用名|变量类型|变量解释/帮助信息|
|:-----------|:---------- |:-----------|
|`io.Discard`|`io.discard`| //|
|`io.EOF`|`*errors.errorString`| //|





## 函数定义

### io.Copy



#### 详细描述



#### 定义：

`func io.Copy(v1: io.Writer, v2: io.Reader) return (r0: int64, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `io.Writer` |   |
| v2 | `io.Reader` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `int64` |   |
| r1 | `error` |   |


 
### io.CopyBuffer



#### 详细描述



#### 定义：

`func io.CopyBuffer(v1: io.Writer, v2: io.Reader, v3: bytes) return (r0: int64, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `io.Writer` |   |
| v2 | `io.Reader` |   |
| v3 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `int64` |   |
| r1 | `error` |   |


 
### io.CopyN



#### 详细描述



#### 定义：

`func io.CopyN(v1: io.Writer, v2: io.Reader, v3: int64) return (r0: int64, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `io.Writer` |   |
| v2 | `io.Reader` |   |
| v3 | `int64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `int64` |   |
| r1 | `error` |   |


 
### io.LimitReader



#### 详细描述



#### 定义：

`func io.LimitReader(v1: io.Reader, v2: int64) return (r0: io.Reader)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `io.Reader` |   |
| v2 | `int64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `io.Reader` |   |


 
### io.MultiReader



#### 详细描述



#### 定义：

`func io.MultiReader(v1 ...io.Reader) return (r0: io.Reader)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...io.Reader` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `io.Reader` |   |


 
### io.NewSectionReader



#### 详细描述



#### 定义：

`func io.NewSectionReader(v1: io.ReaderAt, v2: int64, v3: int64) return (r0: *io.SectionReader)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `io.ReaderAt` |   |
| v2 | `int64` |   |
| v3 | `int64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*io.SectionReader` |   |


 
### io.NopCloser



#### 详细描述



#### 定义：

`func io.NopCloser(v1: io.Reader) return (r0: io.ReadCloser)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `io.Reader` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `io.ReadCloser` |   |


 
### io.Pipe



#### 详细描述



#### 定义：

`func io.Pipe() return (r0: *io.PipeReader, r1: *io.PipeWriter)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*io.PipeReader` |   |
| r1 | `*io.PipeWriter` |   |


 
### io.ReadAll



#### 详细描述



#### 定义：

`func io.ReadAll(v1: io.Reader) return (r0: bytes, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `io.Reader` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### io.ReadAtLeast



#### 详细描述



#### 定义：

`func io.ReadAtLeast(v1: io.Reader, v2: bytes, v3: int) return (r0: int, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `io.Reader` |   |
| v2 | `bytes` |   |
| v3 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `int` |   |
| r1 | `error` |   |


 
### io.ReadEvery1s



#### 详细描述



#### 定义：

``func io.ReadEvery1s(v1: context.Context, v2: io.Reader, v3: func (v1: bytes) return(bool) )``


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `context.Context` |   |
| v2 | `io.Reader` |   |
| v3 | `func (v1: bytes) return(bool) ` |   |




 

 
### io.ReadFile



#### 详细描述



#### 定义：

`func io.ReadFile(v1: string) return (r0: bytes, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### io.ReadFull



#### 详细描述



#### 定义：

`func io.ReadFull(v1: io.Reader, v2: bytes) return (r0: int, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `io.Reader` |   |
| v2 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `int` |   |
| r1 | `error` |   |


 
### io.TeeReader



#### 详细描述



#### 定义：

`func io.TeeReader(v1: io.Reader, v2: io.Writer) return (r0: io.Reader)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `io.Reader` |   |
| v2 | `io.Writer` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `io.Reader` |   |


 
### io.WriteString



#### 详细描述



#### 定义：

`func io.WriteString(v1: io.Writer, v2: string) return (r0: int, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `io.Writer` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `int` |   |
| r1 | `error` |   |


 


