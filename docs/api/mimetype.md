# mimetype {#library-mimetype}

`mimetype` 库用于检测数据的 MIME 类型，基于内容魔数而非文件后缀判断真实类型，常用于文件上传安全检查、内容分类与取证。

典型使用场景：

- 检测类型：`mimetype.Detect(i)` 检测字节/字符串数据的 MIME 类型，`mimetype.DetectFile(path)` 检测文件的 MIME 类型。

与相邻库的关系：`mimetype` 与 `file`（`file.DetectMIMEType*`）、`fileparser`（文件解析）配合，用于"这份数据/文件到底是什么类型"的判断。

> 共 2 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [mimetype.Detect](#detect) | `i any` | `*MIME, error` | mimetype.Detect 判断一段数据的具体 MIME 类型，支持 io.Reader、[]byte 与 string 输入 |
| [mimetype.DetectFile](#detectfile) | `i string` | `*MIME, error` | mimetype.DetectFile 读取指定文件并判断其具体 MIME 类型 |

## 函数详情

### Detect {#detect}

```go
Detect(i any) (*MIME, error)
```

mimetype.Detect 判断一段数据的具体 MIME 类型，支持 io.Reader、[]byte 与 string 输入

通过数据头部的魔数（magic number）进行识别；传入 io.Reader 时最多读取 5 秒

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 待检测的数据，可为 string、[]byte 或 io.Reader |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*MIME` | MIME 检测结果对象，可调用 String() 获取形如 &#34;text/plain; charset=utf-8&#34; 的字符串 |
| r2 | `error` | 错误信息（从 io.Reader 读取失败时返回） |

**示例**

``````````````yak
mime = mimetype.Detect("hello yak")~
println(mime.String())
assert mime != nil, "Detect should return a MIME instance"
assert mime.String().Contains("text/plain"), "plain ascii text should be detected as text/plain"
``````````````

---

### DetectFile {#detectfile}

```go
DetectFile(i string) (*MIME, error)
```

mimetype.DetectFile 读取指定文件并判断其具体 MIME 类型

通过读取文件头部的魔数（magic number）进行识别，不依赖文件扩展名

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `string` | 待检测的文件路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*MIME` | MIME 检测结果对象，可调用 String() 获取形如 &#34;text/plain; charset=utf-8&#34; 的字符串 |
| r2 | `error` | 错误信息（文件不存在、为目录或读取失败时返回） |

**示例**

``````````````yak
fp = file.Join(os.TempDir(), "yak_mime_demo.txt")
file.Save(fp, "hello yak")~
defer file.Remove(fp)
mime = mimetype.DetectFile(fp)~
println(mime.String())
assert mime.String().Contains("text/plain"), "text file should be detected as text/plain"
``````````````

---

