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



#### 定义：

`func (v1: io.Writer, v2: io.Reader) return(int64, error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | io.Writer |   |
| v2 | io.Reader |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | int64 |   |
| r1 | error |   |


### io.CopyBuffer



#### 定义：

`func (v1: io.Writer, v2: io.Reader, v3: []uint8) return(int64, error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | io.Writer |   |
| v2 | io.Reader |   |
| v3 | []uint8 |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | int64 |   |
| r1 | error |   |


### io.CopyN



#### 定义：

`func (v1: io.Writer, v2: io.Reader, v3: int64) return(int64, error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | io.Writer |   |
| v2 | io.Reader |   |
| v3 | int64 |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | int64 |   |
| r1 | error |   |


### io.LimitReader



#### 定义：

`func (v1: io.Reader, v2: int64) return(io.Reader) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | io.Reader |   |
| v2 | int64 |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | io.Reader |   |


### io.MultiReader



#### 定义：

`func (v1 ...io.Reader) return(io.Reader) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | []io.Reader |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | io.Reader |   |


### io.NewSectionReader



#### 定义：

`func (v1: io.ReaderAt, v2: int64, v3: int64) return(*io.SectionReader) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | io.ReaderAt |   |
| v2 | int64 |   |
| v3 | int64 |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | *io.SectionReader |   |


### io.NopCloser



#### 定义：

`func (v1: io.Reader) return(io.ReadCloser) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | io.Reader |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | io.ReadCloser |   |


### io.Pipe



#### 定义：

`func () return(*io.PipeReader, *io.PipeWriter) `

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | *io.PipeReader |   |
| r1 | *io.PipeWriter |   |


### io.ReadAll



#### 定义：

`func (v1: io.Reader) return([]uint8, error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | io.Reader |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | []uint8 |   |
| r1 | error |   |


### io.ReadAtLeast



#### 定义：

`func (v1: io.Reader, v2: []uint8, v3: int) return(int, error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | io.Reader |   |
| v2 | []uint8 |   |
| v3 | int |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | int |   |
| r1 | error |   |


### io.ReadEvery1s



#### 定义：

`func (v1: context.Context, v2: io.Reader, v3: func (v1: []uint8) return(bool) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | context.Context |   |
| v2 | io.Reader |   |
| v3 | func (v1: []uint8) return(bool)  |   |




 

### io.ReadFile



#### 定义：

`func (v1: string) return([]uint8, error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | []uint8 |   |
| r1 | error |   |


### io.ReadFull



#### 定义：

`func (v1: io.Reader, v2: []uint8) return(int, error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | io.Reader |   |
| v2 | []uint8 |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | int |   |
| r1 | error |   |


### io.TeeReader



#### 定义：

`func (v1: io.Reader, v2: io.Writer) return(io.Reader) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | io.Reader |   |
| v2 | io.Writer |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | io.Reader |   |


### io.WriteString



#### 定义：

`func (v1: io.Writer, v2: string) return(int, error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | io.Writer |   |
| v2 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | int |   |
| r1 | error |   |





