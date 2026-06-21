# file {#library-file}

`file` 库是 yaklang 的文件与路径操作工具箱，覆盖读写、创建删除、遍历、路径处理、类型/MIME 识别、哈希计算等近 50 个函数，是本地文件处理的核心依赖。

典型使用场景：

- 读写：`file.ReadFile` / `file.ReadLines` / `file.ReadAll` 读取，`file.Save` / `file.SaveJson` 写入，`file.Open` / `file.OpenFile` / `file.Create` / `file.TempFile` 打开句柄，`file.TailF` 跟踪追加。
- 文件操作：`file.Cp` / `file.Mv` / `file.Rm`（`file.Remove`）/ `file.Mkdir` / `file.MkdirAll` / `file.Rename`。
- 路径处理：`file.Join` / `file.Abs` / `file.Clean` / `file.Dir` / `file.GetBase` / `file.GetExt` / `file.Split`。
- 信息与遍历：`file.IsExisted` / `file.IsDir` / `file.IsFile` / `file.Stat`、`file.Ls` / `file.Dir` / `file.Walk` 遍历，`file.Md5` / `file.Sha256` 计算哈希。
- 类型识别：`file.DetectFileType` / `file.DetectMIMETypeFromFile` / `file.DetectMIMETypeFromRaw`，以及 `file.MatchMalicious` 恶意文件匹配。

与相邻库的关系：`file` 是基础 I/O 库，与 `filesys`（文件系统抽象遍历）、`os`（系统）、`io`/`bufio`（流）、`mimetype`（类型）协同，几乎所有需要落地/读取数据的脚本都会用到。

快速上手（创建目录 - 写入 - 判断 - 按行读取 - 清理）：

```yak
dir = file.Join(os.TempDir(), "yak-file-overview-demo") // 用临时目录, 避免污染真实路径
file.MkdirAll(dir)                                       // 递归创建目录
p = file.Join(dir, "note.txt")
file.Save(p, "line1\nline2")~                            // 写入文件(~ 自动处理错误)

println("exists:", file.IsExisted(p))                    // 预期输出: exists: true
lines = file.ReadLines(p)                                // 按行读取
println("line count:", len(lines))                       // 预期输出: line count: 2
assert len(lines) == 2, "should read 2 lines"

file.Remove(dir)                                          // 递归清理
assert !file.IsExisted(dir), "dir should be removed"
```

> 共 50 个函数、9 个实例

## 实例

|实例名|类型|说明|
|:--|:--|:--|
| O_APPEND | `int` | 1024 |
| O_CREATE | `int` | 64 |
| O_EXCL | `int` | 128 |
| O_RDONLY | `int` | 0 |
| O_RDWR | `int` | 2 |
| O_SYNC | `int` | 1052672 |
| O_TRUNC | `int` | 512 |
| O_WRONLY | `int` | 1 |
| SEPARATOR | `string` | &#34;/&#34; |

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [file.Abs](#abs) | `i string` | `string` | 返回一个路径的绝对路径 |
| [file.Cat](#cat) | `i string` | - | 模拟 unix 命令 cat，打印文件内容到标准输出 |
| [file.Clean](#clean) | `s string` | `string` | 清理路径中的多余的分隔符和 . 和 .. |
| [file.Cp](#cp) | `src string, dst string` | `error` | 拷贝文件或目录，返回错误 |
| [file.Create](#create) | `name string` | `*_yakFile, error` | 创建一个文件，返回一个文件结构体引用与错误 |
| [file.DetectFileType](#detectfiletype) | `filePath string` | `string, error` | 统一的文件类型识别函数，使用魔数识别文件类型 |
| [file.DetectMIMETypeFromFile](#detectmimetypefromfile) | `path string` | `*MIME, error` | 读取文件并通过魔数识别其 MIME 类型 |
| [file.DetectMIMETypeFromRaw](#detectmimetypefromraw) | `raw []byte` | `*MIME` | 通过字节内容（魔数）识别 MIME 类型 |
| [file.Dir](#dir) | `i string` | `[]*utils.FileInfo` | Ls 列出一个目录下的所有文件和目录，返回一个文件信息切片 |
| [file.GetBase](#getbase) | `s string` | `string` | 获取文件的基本名 |
| [file.GetDirPath](#getdirpath) | `path string` | `string` | 返回路径中除最后一个元素之后的路径，这通常是原本路径的目录 |
| [file.GetExt](#getext) | `s string` | `string` | 获取文件的扩展名 |
| [file.GetTypeByExtension](#gettypebyextension) | `ext string` | `string` | 根据文件扩展名获取 MIME 类型 |
| [file.IsAbs](#isabs) | `path string` | `bool` | 判断路径是否是绝对路径 |
| [file.IsDir](#isdir) | `path string` | `bool` | 判断路径是否存在且是一个目录 |
| [file.IsExisted](#isexisted) | `path string` | `bool` | 判断文件或目录是否存在 |
| [file.IsFile](#isfile) | `path string` | `bool` | 判断路径是否存在且是一个文件 |
| [file.IsLink](#islink) | `file string` | `bool` | 判断文件是否是一个符号链接 |
| [file.Ls](#ls) | `i string` | `[]*utils.FileInfo` | Dir 列出一个目录下的所有文件和目录，返回一个文件信息切片，它是 Ls 的别名 |
| [file.Lstat](#lstat) | `name string` | `os.FileInfo, error` | 返回一个文件的信息和错误，如果文件是一个符号链接，返回的是符号链接的信息 |
| [file.MatchMalicious](#matchmalicious) | `input any` | `[]string, error` | 检测文件或内容是否包含恶意特征 |
| [file.MatchMaliciousWithDetails](#matchmaliciouswithdetails) | `input any` | `[]map[string]any, error` | 检测文件或内容并返回详细信息 |
| [file.Md5](#md5) | `filepath string` | `string` | 计算文件的 MD5 哈希值 |
| [file.Mkdir](#mkdir) | `name string` | `error` | 创建一个目录，返回错误 |
| [file.MkdirAll](#mkdirall) | `name string` | `error` | 递归创建一个目录（包括所有不存在的父目录），返回错误 |
| [file.Mv](#mv) | `oldpath string, newpath string` | `error` | 重命名一个文件或文件夹，返回错误，这个函数也会移动文件或文件夹，它是 Rename 的别名 |
| [file.NewMaliciousFileMatcher](#newmaliciousfilematcher) | - | `*MaliciousFileMatcher` | 创建一个恶意文件特征匹配器，内置常见 webshell/恶意代码特征 |
| [file.Open](#open) | `name string` | `*_yakFile, error` | 打开一个文件，返回一个文件结构体引用与错误 |
| [file.OpenFile](#openfile) | `name string, flags int, mode os.FileMode` | `*_yakFile, error` | 打开一个文件，使用 file.O_CREATE ... 和权限控制，返回一个文件结构体引用与错误 |
| [file.ReadAll](#readall) | `r io.Reader` | `[]byte, error` | 从 Reader 读取直到出现错误或 EOF，然后返回字节切片与错误 |
| [file.ReadDirInfoInDirectory](#readdirinfoindirectory) | `path string` | `[]*utils.FileInfo, error` | 递归读取一个目录下的所有子目录信息，返回一个文件信息切片和错误 |
| [file.ReadFile](#readfile) | `filename string` | `[]byte, error` | 读取一个文件的所有内容，返回字节切片与错误 |
| [file.ReadFileInfoInDirectory](#readfileinfoindirectory) | `path string` | `[]*utils.FileInfo, error` | 递归读取一个目录下的所有文件信息，返回一个文件信息切片和错误 |
| [file.ReadLines](#readlines) | `i any` | `[]string` | 尝试读取一个文件中的所有行，返回一个字符串切片，会去除BOM头和空行 |
| [file.ReadLinesWithCallback](#readlineswithcallback) | `i any, callback func(string)` | `error` | 尝试读取一个文件中的所有行，每读取一行，便会调用回调函数，返回错误 |
| [file.Remove](#remove) | `path string` | `error` | 删除路径及其包含的所有子路径 |
| [file.Rename](#rename) | `oldpath string, newpath string` | `error` | 重命名一个文件或文件夹，返回错误，这个函数也会移动文件或文件夹 |
| [file.Rm](#rm) | `path string` | `error` | 删除路径及其包含的所有子路径，它是 Remove 的别名 |
| [file.Save](#save) | `fileName string, i any` | `error` | 将字符串或字节切片或字符串切片写入到文件中，如果文件不存在则创建，如果文件存在则覆盖，返回错误 |
| [file.SaveJson](#savejson) | `name string, i any` | `error` | 将字符串或字节切片或字符串切片写入到文件中，如果文件不存在则创建，如果文件存在则覆盖，返回错误 |
| [file.Sha1](#sha1) | `filepath string` | `string` | 计算文件的 SHA1 哈希值 |
| [file.Sha256](#sha256) | `filepath string` | `string` | 计算文件的 SHA256 哈希值 |
| [file.Split](#split) | `path string` | `string, string` | 以操作系统的默认路径分隔符分割路径，返回目录和文件名 |
| [file.Stat](#stat) | `name string` | `os.FileInfo, error` | 返回一个文件的信息和错误 |
| [file.TailF](#tailf) | `i string, line func(i string)` | - | 模拟 unix 命令 tail -f，执行这个函数会一直阻塞，监听文件内容变化，如果文件有变化，会自动通过回调通知新的内容 |
| [file.Walk](#walk) | `uPath string, i func(info *utils.FileInfo) bool` | `error` | 遍历一个目录下的所有文件和目录，对每一项调用回调函数，返回错误 |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [file.Join](#join) | `path ...string` | `string` | 将任意数量的路径以默认路径分隔符链接在一起 |
| [file.NewMultiFileLineReader](#newmultifilelinereader) | `files ...string` | `*mfreader.MultiFileLineReader, error` | 创建一个多文件读取器，返回一个多文件读取器结构体引用和错误 |
| [file.TempFile](#tempfile) | `dirPart ...string` | `*_yakFile, error` | 创建一个临时文件，返回一个文件结构体引用与错误 |
| [file.TempFileName](#tempfilename) | `pattern ...string` | `string, error` | 创建一个临时文件，返回一个文件名与错误 |

## 函数详情

### Abs {#abs}

```go
Abs(i string) string
```

返回一个路径的绝对路径

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `string` | 输入路径（支持以 ~ 开头表示家目录） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 对应的绝对路径 |

**示例**

``````````````yak
// 假设当前目录是 /tmp
file.Abs("./test.txt") // /tmp/test.txt
``````````````

---

### Cat {#cat}

```go
Cat(i string)
```

模拟 unix 命令 cat，打印文件内容到标准输出

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `string` | 待打印的文件路径 |

**示例**

``````````````yak
// 关键词: file.Cat, 打印文件内容
p = file.Join(os.TempDir(), "yak-cat-demo.txt")
file.Save(p, "hello yak")~          // 先准备一个文件
file.Cat(p)                          // 将文件内容打印到标准输出, 这里会打印 hello yak
file.Remove(p)
``````````````

---

### Clean {#clean}

```go
Clean(s string) string
```

清理路径中的多余的分隔符和 . 和 ..

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| s | `string` | 输入路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 规整化后的最短等价路径 |

**示例**

``````````````yak
p = file.Clean("/tmp/../tmp/test.txt")
println(p)   // OUT: /tmp/test.txt
assert p == "/tmp/test.txt", "Clean should normalize the path"
``````````````

---

### Cp {#cp}

```go
Cp(src string, dst string) error
```

拷贝文件或目录，返回错误

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| src | `string` | 源文件或目录路径 |
| dst | `string` | 目标文件或目录路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
// 关键词: file.Cp, 复制文件/目录
dir = file.Join(os.TempDir(), "yak-cp-demo")
file.MkdirAll(dir)
src = file.Join(dir, "src.txt")
dst = file.Join(dir, "dst.txt")
file.Save(src, "hello yak")~                 // 先准备一个源文件
file.Cp(src, dst)~                           // 复制到目标
println("dst content:", string(file.ReadFile(dst)~)) // 预期输出: dst content: hello yak
assert string(file.ReadFile(dst)~) == "hello yak", "copied content should match source"
file.Remove(dir)
``````````````

---

### Create {#create}

```go
Create(name string) (*_yakFile, error)
```

创建一个文件，返回一个文件结构体引用与错误

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 待创建的文件路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*_yakFile` | 文件结构体引用 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 关键词: file.Create, 创建文件并写入
p = file.Join(os.TempDir(), "yak-create-demo.txt")
f = file.Create(p)~
f.WriteString("hello yak")  // 通过文件句柄写入内容
f.Close()                   // 记得关闭句柄
assert string(file.ReadFile(p)~) == "hello yak", "content should be written"
file.Remove(p)
``````````````

---

### DetectFileType {#detectfiletype}

```go
DetectFileType(filePath string) (string, error)
```

统一的文件类型识别函数，使用魔数识别文件类型

支持常见操作系统（Linux、Windows、macOS）中的各种文件格式

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| filePath | `string` | 文件路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | MIME 类型字符串 |
| r2 | `error` | 错误信息，如果无法识别文件类型则返回错误 |

**示例**

``````````````yak
mimeType, err = file.DetectFileType("/path/to/file")

	if err == nil {
	    println(mimeType)  // "text/plain" 或 "application/pdf" 等
	}
``````````````

---

### DetectMIMETypeFromFile {#detectmimetypefromfile}

```go
DetectMIMETypeFromFile(path string) (*MIME, error)
```

读取文件并通过魔数识别其 MIME 类型

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| path | `string` | 待识别的文件路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*MIME` | MIME 类型对象，识别失败时为 application/octet-stream |
| r2 | `error` | 错误信息（与打开/读取文件相关） |

**示例**

``````````````yak
// 写入 PNG 文件头后识别文件类型
p = file.Join(os.TempDir(), "yak-mime-example.png")
file.Save(p, codec.DecodeHex("89504e470d0a1a0a")~)~
mime, err = file.DetectMIMETypeFromFile(p)
assert err == nil, "DetectMIMETypeFromFile should not fail on readable file"
assert mime.String() == "image/png", "PNG file should be detected as image/png"
file.Remove(p)
``````````````

---

### DetectMIMETypeFromRaw {#detectmimetypefromraw}

```go
DetectMIMETypeFromRaw(raw []byte) *MIME
```

通过字节内容（魔数）识别 MIME 类型

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| raw | `[]byte` | 待识别的字节内容 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*MIME` | MIME 类型对象，识别失败时为 application/octet-stream |

**示例**

``````````````yak
// PNG 文件头魔数应被识别为 image/png
pngHeader = codec.DecodeHex("89504e470d0a1a0a")~
mime = file.DetectMIMETypeFromRaw(pngHeader)
println(mime.String())   // OUT: image/png
assert mime.String() == "image/png", "PNG magic should be detected as image/png"
``````````````

---

### Dir {#dir}

```go
Dir(i string) []*utils.FileInfo
```

Ls 列出一个目录下的所有文件和目录，返回一个文件信息切片

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `string` | 待列出的目录路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*utils.FileInfo` | 目录下文件和子目录的文件信息切片 |

**示例**

``````````````yak
for f in file.Ls("/tmp") {
println(f.Name)
}
``````````````

---

### GetBase {#getbase}

```go
GetBase(s string) string
```

获取文件的基本名

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| s | `string` | 文件路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 路径最后一段（文件名） |

**示例**

``````````````yak
base = file.GetBase("/tmp/test.txt")
println(base)   // OUT: test.txt
assert base == "test.txt", "GetBase should return the file name"
``````````````

---

### GetDirPath {#getdirpath}

```go
GetDirPath(path string) string
```

返回路径中除最后一个元素之后的路径，这通常是原本路径的目录

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| path | `string` | 输入路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 路径所在目录（带结尾分隔符） |

**示例**

``````````````yak
dir = file.GetDirPath("/usr/bin/bash")
println(dir)   // OUT: /usr/bin/
assert dir == "/usr/bin/", "GetDirPath should return the directory with trailing separator"
``````````````

---

### GetExt {#getext}

```go
GetExt(s string) string
```

获取文件的扩展名

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| s | `string` | 文件路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 扩展名（含点，如 .txt），无扩展名返回空字符串 |

**示例**

``````````````yak
ext = file.GetExt("/tmp/test.txt")
println(ext)   // OUT: .txt
assert ext == ".txt", "GetExt should return the file extension"
``````````````

---

### GetTypeByExtension {#gettypebyextension}

```go
GetTypeByExtension(ext string) string
```

根据文件扩展名获取 MIME 类型

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| ext | `string` | 文件扩展名（可以带或不带点号，如 &#34;.txt&#34; 或 &#34;txt&#34;） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | MIME 类型字符串，如果未找到则返回 &#34;application/octet-stream&#34; |

**示例**

``````````````yak
mimeType = file.GetTypeByExtension(".txt")
// 不同平台可能带不同的 charset 后缀，仅断言主类型
assert str.Contains(mimeType, "text/plain"), "txt extension should map to text/plain"
``````````````

---

### IsAbs {#isabs}

```go
IsAbs(path string) bool
```

判断路径是否是绝对路径

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| path | `string` | 待判断的路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `bool` | 是否为绝对路径 |

**示例**

``````````````yak
println(file.IsAbs("/usr/bin/bash"))   // OUT: true
assert file.IsAbs("/usr/bin/bash") == true, "absolute path should be detected"
assert file.IsAbs("../../usr/bin") == false, "relative path should not be absolute"
``````````````

---

### IsDir {#isdir}

```go
IsDir(path string) bool
```

判断路径是否存在且是一个目录

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| path | `string` | 待判断的路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `bool` | 路径是否存在且为目录 |

**示例**

``````````````yak
// 关键词: file.IsDir, 判断是否为目录
dir = file.Join(os.TempDir(), "yak-isdir-demo")
file.MkdirAll(dir)
p = file.Join(dir, "a.txt")
file.Save(p, "x")~
println("dir is dir:", file.IsDir(dir), "; file is dir:", file.IsDir(p))
assert file.IsDir(dir), "a directory should be a dir"
assert !file.IsDir(p), "a regular file should not be a dir"
file.Remove(dir)
``````````````

---

### IsExisted {#isexisted}

```go
IsExisted(path string) bool
```

判断文件或目录是否存在

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| path | `string` | 待判断的路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `bool` | 路径是否存在 |

**示例**

``````````````yak
// 关键词: file.IsExisted, 判断路径是否存在
p = file.Join(os.TempDir(), "yak-exist-demo.txt")
file.Save(p, "x")~
println("exist:", file.IsExisted(p))                 // 预期输出: exist: true
assert file.IsExisted(p), "the file we just created should exist"
file.Remove(p)
assert !file.IsExisted(p), "the file should not exist after remove"
``````````````

---

### IsFile {#isfile}

```go
IsFile(path string) bool
```

判断路径是否存在且是一个文件

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| path | `string` | 待判断的路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `bool` | 路径是否存在且为文件 |

**示例**

``````````````yak
// 关键词: file.IsFile, 判断是否为文件
dir = file.Join(os.TempDir(), "yak-isfile-demo")
file.MkdirAll(dir)
p = file.Join(dir, "a.txt")
file.Save(p, "x")~
println("p is file:", file.IsFile(p), "; dir is file:", file.IsFile(dir))
assert file.IsFile(p), "a regular file should be a file"
assert !file.IsFile(dir), "a directory should not be a file"
file.Remove(dir)
``````````````

---

### IsLink {#islink}

```go
IsLink(file string) bool
```

判断文件是否是一个符号链接

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| file | `string` | 待判断的文件路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `bool` | 是否为符号链接 |

**示例**

``````````````yak
// 关键词: file.IsLink, 判断是否为符号链接
p = file.Join(os.TempDir(), "yak-islink-demo.txt")
file.Save(p, "x")~
println("regular file is link:", file.IsLink(p)) // 预期输出: regular file is link: false
assert !file.IsLink(p), "a regular file is not a symbolic link"
file.Remove(p)
// 对真实的符号链接(如某些系统的 /usr/bin/bash)则会返回 true
``````````````

---

### Ls {#ls}

```go
Ls(i string) []*utils.FileInfo
```

Dir 列出一个目录下的所有文件和目录，返回一个文件信息切片，它是 Ls 的别名

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `string` | 待列出的目录路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*utils.FileInfo` | 目录下文件和子目录的文件信息切片 |

**示例**

``````````````yak
for f in file.Dir("/tmp") {
println(f.Name)
}
``````````````

---

### Lstat {#lstat}

```go
Lstat(name string) (os.FileInfo, error)
```

返回一个文件的信息和错误，如果文件是一个符号链接，返回的是符号链接的信息

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 待查询的文件路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `os.FileInfo` | 文件信息对象（符号链接本身的信息） |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 关键词: file.Lstat, 获取文件信息(不跟随符号链接)
p = file.Join(os.TempDir(), "yak-lstat-demo.txt")
file.Save(p, "hello yak")~
info = file.Lstat(p)~
println("name:", info.Name(), "size:", info.Size())
assert info.Name() == "yak-lstat-demo.txt", "name should match"
file.Remove(p)
``````````````

---

### MatchMalicious {#matchmalicious}

```go
MatchMalicious(input any) ([]string, error)
```

检测文件或内容是否包含恶意特征

支持两种输入类型：

  - string: 文件路径，会读取文件内容进行匹配

  - []byte: 文件内容，直接匹配内容

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| input | `any` | 文件路径（string）或文件内容（[]byte） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]string` | 匹配到的特征名称列表 |
| r2 | `error` | 错误信息（仅当输入为文件路径且读取失败时返回） |

**示例**

``````````````yak
// 方式1: 匹配文件
matches, err = file.MatchMalicious("/path/to/suspicious.php")

	if err == nil && len(matches) > 0 {
	    println("malicious signatures found:", matches)
	}

// 方式2: 匹配内容
content = file.ReadFile("/path/to/suspicious.php")
matches, err = file.MatchMalicious(content)

	if len(matches) > 0 {
	    println("malicious signatures found:", matches)
	}
``````````````

---

### MatchMaliciousWithDetails {#matchmaliciouswithdetails}

```go
MatchMaliciousWithDetails(input any) ([]map[string]any, error)
```

检测文件或内容并返回详细信息

支持两种输入类型：

  - string: 文件路径，会读取文件内容进行匹配

  - []byte: 文件内容，直接匹配内容

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| input | `any` | 文件路径（string）或文件内容（[]byte） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]map[string]any` | 匹配到的特征详细信息列表（含 name/category/description/severity） |
| r2 | `error` | 错误信息（仅当输入为文件路径且读取失败时返回） |

**示例**

``````````````yak
// 方式1: 匹配文件
details, err = file.MatchMaliciousWithDetails("/path/to/suspicious.php")

	if err == nil {
	    for detail in details {
	        println(sprintf("name: %s, category: %s, severity: %s",
	            detail["name"], detail["category"], detail["severity"]))
	    }
	}

// 方式2: 匹配内容
content = file.ReadFile("/path/to/suspicious.php")
details, err = file.MatchMaliciousWithDetails(content)
``````````````

---

### Md5 {#md5}

```go
Md5(filepath string) string
```

计算文件的 MD5 哈希值

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| filepath | `string` | 文件路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | MD5 哈希值（32位十六进制字符串），如果文件不存在或读取失败则返回空字符串 |

**示例**

``````````````yak
// 写入已知内容 "abc"，其 MD5 是固定值
p = file.Join(os.TempDir(), "yak-md5-example.txt")
file.Save(p, "abc")~
md5Hash = file.Md5(p)
println(md5Hash)   // OUT: 900150983cd24fb0d6963f7d28e17f72
assert md5Hash == "900150983cd24fb0d6963f7d28e17f72", "Md5 of 'abc' should be stable"
file.Remove(p)
``````````````

---

### Mkdir {#mkdir}

```go
Mkdir(name string) error
```

创建一个目录，返回错误

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 待创建的目录路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
// 关键词: file.Mkdir, 创建单层目录
dir = file.Join(os.TempDir(), "yak-mkdir-demo")
file.Remove(dir)              // 先清理, 保证目录不存在
file.Mkdir(dir)~
assert file.IsDir(dir), "directory should be created"
file.Remove(dir)
``````````````

---

### MkdirAll {#mkdirall}

```go
MkdirAll(name string) error
```

递归创建一个目录（包括所有不存在的父目录），返回错误

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 待创建的目录路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
// 关键词: file.MkdirAll, 递归创建多层目录
dir = file.Join(os.TempDir(), "yak-mkdirall-demo", "a", "b", "c") // 多层不存在的目录
file.MkdirAll(dir)~                                                // 会自动逐级创建
assert file.IsDir(dir), "nested directories should be created"
file.Remove(file.Join(os.TempDir(), "yak-mkdirall-demo"))
``````````````

---

### Mv {#mv}

```go
Mv(oldpath string, newpath string) error
```

重命名一个文件或文件夹，返回错误，这个函数也会移动文件或文件夹，它是 Rename 的别名

! 在 windows 下，无法将文件移动到不同的磁盘

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| oldpath | `string` | 原路径 |
| newpath | `string` | 目标路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
// 关键词: file.Mv, 移动/重命名文件(Rename 的别名)
dir = file.Join(os.TempDir(), "yak-mv-demo"); file.MkdirAll(dir)
oldp = file.Join(dir, "a.txt"); newp = file.Join(dir, "b.txt")
file.Save(oldp, "hello yak")~
file.Mv(oldp, newp)~
assert file.IsExisted(newp) && !file.IsExisted(oldp), "file should be moved"
file.Remove(dir)
``````````````

---

### NewMaliciousFileMatcher {#newmaliciousfilematcher}

```go
NewMaliciousFileMatcher() *MaliciousFileMatcher
```

创建一个恶意文件特征匹配器，内置常见 webshell/恶意代码特征

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*MaliciousFileMatcher` | 恶意文件特征匹配器对象 |

**示例**

``````````````yak
matcher = file.NewMaliciousFileMatcher()
matches, err = matcher.MatchContent([]byte("<?php eval($_POST[1]);?>"))
``````````````

---

### Open {#open}

```go
Open(name string) (*_yakFile, error)
```

打开一个文件，返回一个文件结构体引用与错误

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 待打开的文件路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*_yakFile` | 文件结构体引用 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 关键词: file.Open, file.ReadAll, 打开并读取
p = file.Join(os.TempDir(), "yak-open-demo.txt")
file.Save(p, "hello yak")~
f = file.Open(p)~
content = file.ReadAll(f)~
println("content:", string(content)) // 预期输出: content: hello yak
assert string(content) == "hello yak", "ReadAll should read file content"
f.Close()
file.Remove(p)
``````````````

---

### OpenFile {#openfile}

```go
OpenFile(name string, flags int, mode os.FileMode) (*_yakFile, error)
```

打开一个文件，使用 file.O_CREATE ... 和权限控制，返回一个文件结构体引用与错误

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 待打开的文件路径 |
| flags | `int` | 打开标志（如 file.O_CREATE\|file.O_RDWR） |
| mode | `os.FileMode` | 文件权限（如 0o777） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*_yakFile` | 文件结构体引用 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 关键词: file.OpenFile, 按标志位/权限打开文件
p = file.Join(os.TempDir(), "yak-openfile-demo.txt")
// O_CREATE 不存在则创建, O_RDWR 读写, O_TRUNC 清空原内容
f = file.OpenFile(p, file.O_CREATE|file.O_RDWR|file.O_TRUNC, 0o644)~
f.WriteString("hello yak")
f.Close()
assert string(file.ReadFile(p)~) == "hello yak", "content should be written"
file.Remove(p)
``````````````

---

### ReadAll {#readall}

```go
ReadAll(r io.Reader) ([]byte, error)
```

从 Reader 读取直到出现错误或 EOF，然后返回字节切片与错误

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| r | `io.Reader` | 可读取的流对象（Reader） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 读取到的全部字节 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 关键词: file.ReadAll, 从 Reader 读取全部字节
p = file.Join(os.TempDir(), "yak-readall-demo.txt")
file.Save(p, "hello yak")~
f = file.Open(p)~
content = file.ReadAll(f)~       // ReadAll 接收任意 Reader, 这里传文件句柄
println("content:", string(content)) // 预期输出: content: hello yak
assert string(content) == "hello yak", "should read all bytes"
f.Close(); file.Remove(p)
``````````````

---

### ReadDirInfoInDirectory {#readdirinfoindirectory}

```go
ReadDirInfoInDirectory(path string) ([]*utils.FileInfo, error)
```

递归读取一个目录下的所有子目录信息，返回一个文件信息切片和错误

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| path | `string` | 待读取的目录路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*utils.FileInfo` | 目录下所有子目录的文件信息切片 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
for d in file.ReadDirInfoInDirectory("/tmp")~ {
println(d.Name)
}
``````````````

---

### ReadFile {#readfile}

```go
ReadFile(filename string) ([]byte, error)
```

读取一个文件的所有内容，返回字节切片与错误

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| filename | `string` | 待读取的文件路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 文件的全部内容字节 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 写入后读取，验证内容一致
p = file.Join(os.TempDir(), "yak-readfile-example.txt")
file.Save(p, "hello yak")~
content = file.ReadFile(p)~
assert string(content) == "hello yak", "ReadFile should return the file content"
file.Remove(p)
``````````````

---

### ReadFileInfoInDirectory {#readfileinfoindirectory}

```go
ReadFileInfoInDirectory(path string) ([]*utils.FileInfo, error)
```

递归读取一个目录下的所有文件信息，返回一个文件信息切片和错误

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| path | `string` | 待读取的目录路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*utils.FileInfo` | 目录下所有文件的文件信息切片 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
for f in file.ReadFileInfoInDirectory("/tmp")~ {
println(f.Name)
}
``````````````

---

### ReadLines {#readlines}

```go
ReadLines(i any) []string
```

尝试读取一个文件中的所有行，返回一个字符串切片，会去除BOM头和空行

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 待读取的文件路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]string` | 文件中的所有行组成的字符串切片 |

**示例**

``````````````yak
// 写入三行后读取，验证行数与首行
p = file.Join(os.TempDir(), "yak-readlines-example.txt")
file.Save(p, "line1\nline2\nline3")~
lines = file.ReadLines(p)
println(len(lines))   // OUT: 3
assert lines[0] == "line1", "ReadLines should return the first line"
file.Remove(p)
``````````````

---

### ReadLinesWithCallback {#readlineswithcallback}

```go
ReadLinesWithCallback(i any, callback func(string)) error
```

尝试读取一个文件中的所有行，每读取一行，便会调用回调函数，返回错误

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 待读取的文件路径 |
| callback | `func(string)` | 每读取一行时调用的回调函数，参数为该行内容 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
// 关键词: file.ReadLinesWithCallback, 逐行回调读取
p = file.Join(os.TempDir(), "yak-readlines-cb.txt")
file.Save(p, "line1\nline2\nline3")~
count = 0
file.ReadLinesWithCallback(p, func(line) {
    count++
    println("got line:", line) // 每读到一行就回调一次
})~
assert count == 3, "should read 3 lines"
file.Remove(p)
``````````````

---

### Remove {#remove}

```go
Remove(path string) error
```

删除路径及其包含的所有子路径

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| path | `string` | 待删除的路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
// 关键词: file.Remove, 递归删除文件/目录
dir = file.Join(os.TempDir(), "yak-remove-demo"); file.MkdirAll(dir)
file.Save(file.Join(dir, "a.txt"), "x")~
file.Remove(dir)~                            // 会连同子文件一起删除
assert !file.IsExisted(dir), "directory should be removed recursively"
``````````````

---

### Rename {#rename}

```go
Rename(oldpath string, newpath string) error
```

重命名一个文件或文件夹，返回错误，这个函数也会移动文件或文件夹

! 在 windows 下，无法将文件移动到不同的磁盘

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| oldpath | `string` | 原路径 |
| newpath | `string` | 目标路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
// 关键词: file.Rename, 重命名/移动文件
dir = file.Join(os.TempDir(), "yak-rename-demo"); file.MkdirAll(dir)
oldp = file.Join(dir, "old.txt"); newp = file.Join(dir, "new.txt")
file.Save(oldp, "hello yak")~
file.Rename(oldp, newp)~
assert !file.IsExisted(oldp), "old path should be gone"
assert string(file.ReadFile(newp)~) == "hello yak", "content should move to new path"
file.Remove(dir)
``````````````

---

### Rm {#rm}

```go
Rm(path string) error
```

删除路径及其包含的所有子路径，它是 Remove 的别名

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| path | `string` | 待删除的路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
// 关键词: file.Rm, 递归删除(Remove 的别名)
p = file.Join(os.TempDir(), "yak-rm-demo.txt")
file.Save(p, "x")~
file.Rm(p)~
assert !file.IsExisted(p), "file should be removed"
``````````````

---

### Save {#save}

```go
Save(fileName string, i any) error
```

将字符串或字节切片或字符串切片写入到文件中，如果文件不存在则创建，如果文件存在则覆盖，返回错误

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| fileName | `string` | 目标文件路径 |
| i | `any` | 待写入的内容，支持字符串、字节切片或字符串切片 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
// 写入后再读回，验证内容一致
p = file.Join(os.TempDir(), "yak-save-example.txt")
file.Save(p, "hello yak")~
content = file.ReadFile(p)~
assert string(content) == "hello yak", "Save should write the content to file"
file.Remove(p)
``````````````

---

### SaveJson {#savejson}

```go
SaveJson(name string, i any) error
```

将字符串或字节切片或字符串切片写入到文件中，如果文件不存在则创建，如果文件存在则覆盖，返回错误

与 Save 不同的是，如果传入的参数是其他类型，会尝试将其序列化为 json 字符再写入到文件中

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 目标文件路径 |
| i | `any` | 待写入的内容，非字符串/字节类型会被序列化为 JSON |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
// 写入一个 map，会被序列化为 JSON 文本
p = file.Join(os.TempDir(), "yak-savejson-example.json")
file.SaveJson(p, {"name": "yak"})~
content = file.ReadFile(p)~
assert str.Contains(string(content), "yak"), "SaveJson should write json content"
file.Remove(p)
``````````````

---

### Sha1 {#sha1}

```go
Sha1(filepath string) string
```

计算文件的 SHA1 哈希值

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| filepath | `string` | 文件路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | SHA1 哈希值（40位十六进制字符串），如果文件不存在或读取失败则返回空字符串 |

**示例**

``````````````yak
// 写入已知内容 "abc"，其 SHA1 是固定值
p = file.Join(os.TempDir(), "yak-sha1-example.txt")
file.Save(p, "abc")~
sha1Hash = file.Sha1(p)
println(sha1Hash)   // OUT: a9993e364706816aba3e25717850c26c9cd0d89d
assert sha1Hash == "a9993e364706816aba3e25717850c26c9cd0d89d", "Sha1 of 'abc' should be stable"
file.Remove(p)
``````````````

---

### Sha256 {#sha256}

```go
Sha256(filepath string) string
```

计算文件的 SHA256 哈希值

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| filepath | `string` | 文件路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | SHA256 哈希值（64位十六进制字符串），如果文件不存在或读取失败则返回空字符串 |

**示例**

``````````````yak
// 写入已知内容 "abc"，其 SHA256 是固定值
p = file.Join(os.TempDir(), "yak-sha256-example.txt")
file.Save(p, "abc")~
sha256Hash = file.Sha256(p)
println(sha256Hash)   // OUT: ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad
assert sha256Hash == "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad", "Sha256 of 'abc' should be stable"
file.Remove(p)
``````````````

---

### Split {#split}

```go
Split(path string) (string, string)
```

以操作系统的默认路径分隔符分割路径，返回目录和文件名

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| path | `string` | 输入路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 目录部分（带结尾分隔符） |
| r2 | `string` | 文件名部分 |

**示例**

``````````````yak
dir, name = file.Split("/usr/bin/bash")
println(dir)    // OUT: /usr/bin/
println(name)   // OUT: bash
assert dir == "/usr/bin/", "Split should return the directory part"
assert name == "bash", "Split should return the file name part"
``````````````

---

### Stat {#stat}

```go
Stat(name string) (os.FileInfo, error)
```

返回一个文件的信息和错误

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 待查询的文件路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `os.FileInfo` | 文件信息对象 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 关键词: file.Stat, 获取文件信息
p = file.Join(os.TempDir(), "yak-stat-demo.txt")
file.Save(p, "hello yak")~                  // body 共 9 字节
info = file.Stat(p)~
println("name:", info.Name(), "size:", info.Size(), "isDir:", info.IsDir())
assert info.Size() == 9, "size should be 9 bytes"
assert !info.IsDir(), "should be a file, not a dir"
file.Remove(p)
``````````````

---

### TailF {#tailf}

```go
TailF(i string, line func(i string))
```

模拟 unix 命令 tail -f，执行这个函数会一直阻塞，监听文件内容变化，如果文件有变化，会自动通过回调通知新的内容

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `string` | 待监听的文件路径 |
| line | `func(i string)` | 每读取到新行时调用的回调函数，参数为该行内容 |

**示例**

``````````````yak
// 无法本地验证: TailF 会持续阻塞监听文件变化, 不适合在示例中同步执行
file.TailF("/tmp/test.txt", func(line) { println(line) }) // 类似 tail -f, 有新行就回调
``````````````

---

### Walk {#walk}

```go
Walk(uPath string, i func(info *utils.FileInfo) bool) error
```

遍历一个目录下的所有文件和目录，对每一项调用回调函数，返回错误

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| uPath | `string` | 待遍历的目录路径 |
| i | `func(info *utils.FileInfo) bool` | 对每个文件/目录调用的回调函数，返回 true 继续遍历 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
file.Walk("/tmp", func(info) {println(info.Name); return true})~
``````````````

---

## 可变参数函数详情

### Join {#join}

```go
Join(path ...string) string
```

将任意数量的路径以默认路径分隔符链接在一起

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| path | `...string` | 任意数量的路径片段 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 用默认分隔符拼接后的路径 |

**示例**

``````````````yak
p = file.Join("/usr", "bin", "bash")
println(p)   // OUT: /usr/bin/bash
assert p == "/usr/bin/bash", "Join should join path segments with separator"
``````````````

---

### NewMultiFileLineReader {#newmultifilelinereader}

```go
NewMultiFileLineReader(files ...string) (*mfreader.MultiFileLineReader, error)
```

创建一个多文件读取器，返回一个多文件读取器结构体引用和错误

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| files | `...string` | 一个或多个待读取的文件路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*mfreader.MultiFileLineReader` | 多文件读取器结构体引用 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 关键词: file.NewMultiFileLineReader, 多文件逐行读取
f1 = file.Join(os.TempDir(), "yak-mfr-1.txt")
f2 = file.Join(os.TempDir(), "yak-mfr-2.txt")
file.Save(f1, "123")~   // 第一个文件
file.Save(f2, "456")~   // 第二个文件
m = file.NewMultiFileLineReader(f1, f2)~ // 跨多个文件连续按行读取
lines = []
for m.Next() {
    lines = append(lines, m.Text()) // 依次读到 "123" 和 "456"
}
println("lines:", lines)
assert len(lines) == 2, "should read 2 lines across 2 files"
file.Remove(f1); file.Remove(f2)
``````````````

---

### TempFile {#tempfile}

```go
TempFile(dirPart ...string) (*_yakFile, error)
```

创建一个临时文件，返回一个文件结构体引用与错误

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| dirPart | `...string` | 可选的临时文件所在目录，不传则使用默认临时目录 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*_yakFile` | 临时文件结构体引用 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
f, err = file.TempFile()
die(err)
defer f.Close()
f.WriteString("hello yak")
``````````````

---

### TempFileName {#tempfilename}

```go
TempFileName(pattern ...string) (string, error)
```

创建一个临时文件，返回一个文件名与错误

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| pattern | `...string` | 可选的文件名匹配模式（如 &#34;pattern-*.txt&#34;） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 创建的临时文件名 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
name, err = file.TempFileName()
die(err)
defer os.Remove(name)
file.Save(name, "hello yak")

name, err = file.TempFileName("pattern-*.txt")

	if die(err) {
		return
	}

defer os.Remove(name)
file.Save(name, "hello yak")
``````````````

---

