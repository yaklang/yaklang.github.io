# mimetype

|函数名|函数描述/介绍|
|:------|:--------|
| [mimetype.Detect](#detect) |mimetype.Detect 判断一段数据的具体 MIME 类型，支持 io.Reader、[]byte 与 string 输入 通过数据头部的魔数（magic number）进行识别；传入 io.Reader 时最多读取 5 秒 参数: - i: 待检测的数据，可为 string、[]byte ...|
| [mimetype.DetectFile](#detectfile) |mimetype.DetectFile 读取指定文件并判断其具体 MIME 类型 通过读取文件头部的魔数（magic number）进行识别，不依赖文件扩展名 参数: - i: 待检测的文件路径 返回值: - MIME 检测结果对象，可调用 String() 获取形如 &#34;text/plain; ch...|


## 函数定义
### Detect

#### 详细描述
mimetype.Detect 判断一段数据的具体 MIME 类型，支持 io.Reader、[]byte 与 string 输入

通过数据头部的魔数（magic number）进行识别；传入 io.Reader 时最多读取 5 秒



参数:

  - i: 待检测的数据，可为 string、[]byte 或 io.Reader



返回值:

  - MIME 检测结果对象，可调用 String() 获取形如 &#34;text/plain; charset=utf-8&#34; 的字符串

  - 错误信息（从 io.Reader 读取失败时返回）




Example:

``````````````yak
mime = mimetype.Detect("hello yak")~
println(mime.String())
assert mime != nil, "Detect should return a MIME instance"
assert mime.String().Contains("text/plain"), "plain ascii text should be detected as text/plain"
``````````````


#### 定义

`Detect(i any) (*MIME, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待检测的数据，可为 string、[]byte 或 io.Reader |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*MIME` | MIME 检测结果对象，可调用 String() 获取形如 &#34;text/plain; charset=utf-8&#34; 的字符串 |
| r2 | `error` | 错误信息（从 io.Reader 读取失败时返回） |


### DetectFile

#### 详细描述
mimetype.DetectFile 读取指定文件并判断其具体 MIME 类型

通过读取文件头部的魔数（magic number）进行识别，不依赖文件扩展名



参数:

  - i: 待检测的文件路径



返回值:

  - MIME 检测结果对象，可调用 String() 获取形如 &#34;text/plain; charset=utf-8&#34; 的字符串

  - 错误信息（文件不存在、为目录或读取失败时返回）




Example:

``````````````yak
fp = file.Join(os.TempDir(), "yak_mime_demo.txt")
file.Save(fp, "hello yak")~
defer file.Remove(fp)
mime = mimetype.DetectFile(fp)~
println(mime.String())
assert mime.String().Contains("text/plain"), "text file should be detected as text/plain"
``````````````


#### 定义

`DetectFile(i string) (*MIME, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` | 待检测的文件路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*MIME` | MIME 检测结果对象，可调用 String() 获取形如 &#34;text/plain; charset=utf-8&#34; 的字符串 |
| r2 | `error` | 错误信息（文件不存在、为目录或读取失败时返回） |


