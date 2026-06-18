# io

|实例名|实例描述|
|:------|:--------|
Discard|(io.discard) io.discard{}|
EOF|(errors.errorString) &amp;errors.errorString{s: &#34;EOF&#34;}|

|函数名|函数描述/介绍|
|:------|:--------|
| [io.Copy](#copy) |Copy 将 reader 中的数据拷贝到 writer 中，直到读取到 EOF 或者发生错误，返回拷贝的字节数和错误  |
| [io.CopyN](#copyn) |CopyN 将 reader 中的数据拷贝到 writer 中，直到读取到 EOF 或者拷贝了 n 个字节，返回拷贝的字节数和错误  |
| [io.LimitReader](#limitreader) |LimitReader 返回一个 Reader，该 Reader 从 r 中读取字节，但在读取 n 个字节后就会返回 EOF  |
| [io.MultiReader](#multireader) |MultiReader 返回一个 Reader，该 Reader 从多个 Reader 中读取数据  |
| [io.NopCloser](#nopcloser) |NopCloser 返回一个 ReadCloser，该 ReadCloser 从 r 中读取数据，并实现了一个空的 Close 方法  |
| [io.Pipe](#pipe) |Pipe 创建一个管道，返回一个读取端和一个写入端以  |
| [io.ReadAll](#readall) |ReadAll 读取 Reader 中的所有字节，返回读取到的数据和错误  |
| [io.ReadEvery1s](#readevery1s) |ReadEvery1s 每秒读取 Reader 一次，直到读取到 EOF 或者回调函数返回 false  |
| [io.ReadFile](#readfile) |ReadFile 读取指定文件中的所有内容，返回读取到的数据和错误  |
| [io.ReadStable](#readstable) |ReadStable 从 reader 中稳定地读取数据，直到读取到 EOF 或者超时，返回读取到的数据  |
| [io.TeeReader](#teereader) |TeeReader 返回一个 Reader，该 Reader 从 r 中读取字节，并将读取到的字节写入 w 中  该 Reader 通常用于保存已经读取的数据副本  |
| [io.WriteString](#writestring) |WriteString 将字符串 s 写入 writer 中，返回写入的字节数和错误  |


## 函数定义
### Copy

#### 详细描述
Copy 将 reader 中的数据拷贝到 writer 中，直到读取到 EOF 或者发生错误，返回拷贝的字节数和错误

Example:
```
n, err = io.Copy(writer, reader)
```


#### 定义

`Copy(writer io.Writer, reader io.Reader) (written int64, err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| writer | `io.Writer` |   |
| reader | `io.Reader` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| written | `int64` |   |
| err | `error` |   |


### CopyN

#### 详细描述
CopyN 将 reader 中的数据拷贝到 writer 中，直到读取到 EOF 或者拷贝了 n 个字节，返回拷贝的字节数和错误

Example:
```
n, err = io.CopyN(writer, reader, 1024)
```


#### 定义

`CopyN(writer io.Writer, reader io.Reader, n int64) (written int64, err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| writer | `io.Writer` |   |
| reader | `io.Reader` |   |
| n | `int64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| written | `int64` |   |
| err | `error` |   |


### LimitReader

#### 详细描述
LimitReader 返回一个 Reader，该 Reader 从 r 中读取字节，但在读取 n 个字节后就会返回 EOF

Example:
```
lr = io.LimitReader(reader, 1024)
```


#### 定义

`LimitReader(r io.Reader, n int64) io.Reader`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| r | `io.Reader` |   |
| n | `int64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `io.Reader` |   |


### MultiReader

#### 详细描述
MultiReader 返回一个 Reader，该 Reader 从多个 Reader 中读取数据

Example:
```
mr = io.MultiReader(reader1, reader2) // 读取 mr 即按照顺序读取 reader1 和 reader2 中的数据
io.ReadAll(mr)
```


#### 定义

`MultiReader(readers ...io.Reader) io.Reader`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| readers | `...io.Reader` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `io.Reader` |   |


### NopCloser

#### 详细描述
NopCloser 返回一个 ReadCloser，该 ReadCloser 从 r 中读取数据，并实现了一个空的 Close 方法

Example:
```
r = io.NopCloser(reader)
r.Close() // 什么都不做
```


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
Pipe 创建一个管道，返回一个读取端和一个写入端以

Example:
```
r, w = io.Pipe()

	go func {
	    w.WriteString("hello yak")
	    w.Close()
	}

bytes, err = io.ReadAll(r)
die(err)
dump(bytes)
```


#### 定义

`Pipe() (*bufpipe.PipeReader, *bufpipe.PipeWriter)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*bufpipe.PipeReader` |   |
| r2 | `*bufpipe.PipeWriter` |   |


### ReadAll

#### 详细描述
ReadAll 读取 Reader 中的所有字节，返回读取到的数据和错误

Example:
```
data, err = ioutil.ReadAll(reader)
```


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
ReadEvery1s 每秒读取 Reader 一次，直到读取到 EOF 或者回调函数返回 false

Example:
```
r, w = io.Pipe() // 创建一个管道，返回一个读取端和一个写入端

	go func{
	    for {
		       w.WriteString("hello yak\n")
		       time.Sleep(1)
		   }
	}

	io.ReadEvery1s(context.New(), r, func(data) {
	    println(string(data))
		   return true
	})

```


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
ReadFile 读取指定文件中的所有内容，返回读取到的数据和错误

Example:
```
// 假设存在文件 /tmp/test.txt，内容为 "hello yak"
data, err = ioutil.ReadFile("/tmp/test.txt") // data = b"hello yak", err = nil
```


#### 定义

`ReadFile(path string) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### ReadStable

#### 详细描述
ReadStable 从 reader 中稳定地读取数据，直到读取到 EOF 或者超时，返回读取到的数据

Example:
```
data = io.ReadStable(reader, 60)
```


#### 定义

`ReadStable(reader io.Reader, float float64) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| reader | `io.Reader` |   |
| float | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### TeeReader

#### 详细描述
TeeReader 返回一个 Reader，该 Reader 从 r 中读取字节，并将读取到的字节写入 w 中

该 Reader 通常用于保存已经读取的数据副本

Example:
```
tr = io.TeeReader(reader, buf)
io.ReadAll(tr)
// 现在 buf 中也保存了 reader 中的读到的所有数据
```


#### 定义

`TeeReader(r io.Reader, w io.Writer) io.Reader`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| r | `io.Reader` |   |
| w | `io.Writer` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `io.Reader` |   |


### WriteString

#### 详细描述
WriteString 将字符串 s 写入 writer 中，返回写入的字节数和错误

Example:
```
n, err = io.WriteString(writer, "hello yak")
```


#### 定义

`WriteString(writer io.Writer, s string) (n int, err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| writer | `io.Writer` |   |
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| n | `int` |   |
| err | `error` |   |


