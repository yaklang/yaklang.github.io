# file

|实例名|实例描述|
|:------|:--------|
O_APPEND|(int) 8|
O_CREATE|(int) 512|
O_EXCL|(int) 2048|
O_RDONLY|(int) 0|
O_RDWR|(int) 2|
O_SYNC|(int) 128|
O_TRUNC|(int) 1024|
O_WRONLY|(int) 1|
SEPARATOR|(string) &#34;/&#34;|

|函数名|函数描述/介绍|
|:------|:--------|
| [file.Abs](#abs) |Abs 返回一个路径的绝对路径 参数: - i: 输入路径（支持以 ~ 开头表示家目录） 返回值: - 对应的绝对路径|
| [file.Cat](#cat) |Cat 模拟 unix 命令 cat，打印文件内容到标准输出 参数: - i: 待打印的文件路径|
| [file.Clean](#clean) |Clean 清理路径中的多余的分隔符和 . 和 .. 参数: - s: 输入路径 返回值: - 规整化后的最短等价路径|
| [file.Cp](#cp) |Cp 拷贝文件或目录，返回错误 参数: - src: 源文件或目录路径 - dst: 目标文件或目录路径 返回值: - 错误信息|
| [file.Create](#create) |Create 创建一个文件，返回一个文件结构体引用与错误 参数: - name: 待创建的文件路径 返回值: - 文件结构体引用 - 错误信息|
| [file.DetectFileType](#detectfiletype) |DetectFileType 统一的文件类型识别函数，使用魔数识别文件类型 支持常见操作系统（Linux、Windows、macOS）中的各种文件格式 参数: - filePath: 文件路径 返回值: - MIME 类型字符串 - 错误信息，如果无法识别文件类型则返回错误|
| [file.DetectMIMETypeFromFile](#detectmimetypefromfile) ||
| [file.DetectMIMETypeFromRaw](#detectmimetypefromraw) ||
| [file.Dir](#dir) |Ls 列出一个目录下的所有文件和目录，返回一个文件信息切片 参数: - i: 待列出的目录路径 返回值: - 目录下文件和子目录的文件信息切片|
| [file.GetBase](#getbase) |GetBase 获取文件的基本名 参数: - s: 文件路径 返回值: - 路径最后一段（文件名）|
| [file.GetDirPath](#getdirpath) |GetDirPath 返回路径中除最后一个元素之后的路径，这通常是原本路径的目录 参数: - path: 输入路径 返回值: - 路径所在目录（带结尾分隔符）|
| [file.GetExt](#getext) |GetExt 获取文件的扩展名 参数: - s: 文件路径 返回值: - 扩展名（含点，如 .txt），无扩展名返回空字符串|
| [file.GetTypeByExtension](#gettypebyextension) |GetTypeByExtension 根据文件扩展名获取 MIME 类型 参数: - ext: 文件扩展名（可以带或不带点号，如 &#34;.txt&#34; 或 &#34;txt&#34;） 返回值: - MIME 类型字符串，如果未找到则返回 &#34;application/octet-stream&#34;|
| [file.IsAbs](#isabs) |IsAbs 判断路径是否是绝对路径 参数: - path: 待判断的路径 返回值: - 是否为绝对路径|
| [file.IsDir](#isdir) |IsDir 判断路径是否存在且是一个目录 参数: - path: 待判断的路径 返回值: - 路径是否存在且为目录|
| [file.IsExisted](#isexisted) |IsExisted 判断文件或目录是否存在 参数: - path: 待判断的路径 返回值: - 路径是否存在|
| [file.IsFile](#isfile) |IsFile 判断路径是否存在且是一个文件 参数: - path: 待判断的路径 返回值: - 路径是否存在且为文件|
| [file.IsLink](#islink) |IsLink 判断文件是否是一个符号链接 参数: - file: 待判断的文件路径 返回值: - 是否为符号链接|
| [file.Join](#join) |Join 将任意数量的路径以默认路径分隔符链接在一起 参数: - elem: 任意数量的路径片段 返回值: - 用默认分隔符拼接后的路径|
| [file.Ls](#ls) |Dir 列出一个目录下的所有文件和目录，返回一个文件信息切片，它是 Ls 的别名 参数: - i: 待列出的目录路径 返回值: - 目录下文件和子目录的文件信息切片|
| [file.Lstat](#lstat) |Lstat 返回一个文件的信息和错误，如果文件是一个符号链接，返回的是符号链接的信息 参数: - name: 待查询的文件路径 返回值: - 文件信息对象（符号链接本身的信息） - 错误信息|
| [file.MatchMalicious](#matchmalicious) |MatchMalicious 检测文件或内容是否包含恶意特征 支持两种输入类型： - string: 文件路径，会读取文件内容进行匹配 - []byte: 文件内容，直接匹配内容 参数: - input: 文件路径（string）或文件内容（[]byte） 返回值: - 匹配到的特征名称列表 - 错...|
| [file.MatchMaliciousWithDetails](#matchmaliciouswithdetails) |MatchMaliciousWithDetails 检测文件或内容并返回详细信息 支持两种输入类型： - string: 文件路径，会读取文件内容进行匹配 - []byte: 文件内容，直接匹配内容 参数: - input: 文件路径（string）或文件内容（[]byte） 返回值: - 匹配到的...|
| [file.Md5](#md5) |Md5 计算文件的 MD5 哈希值 参数: - filepath: 文件路径 返回值: - MD5 哈希值（32位十六进制字符串），如果文件不存在或读取失败则返回空字符串|
| [file.Mkdir](#mkdir) |Mkdir 创建一个目录，返回错误 参数: - name: 待创建的目录路径 返回值: - 错误信息|
| [file.MkdirAll](#mkdirall) |MkdirAll 递归创建一个目录（包括所有不存在的父目录），返回错误 参数: - name: 待创建的目录路径 返回值: - 错误信息|
| [file.Mv](#mv) |Mv 重命名一个文件或文件夹，返回错误，这个函数也会移动文件或文件夹，它是 Rename 的别名 ! 在 windows 下，无法将文件移动到不同的磁盘 参数: - oldpath: 原路径 - newpath: 目标路径 返回值: - 错误信息|
| [file.NewMaliciousFileMatcher](#newmaliciousfilematcher) |NewMaliciousFileMatcher 创建一个恶意文件特征匹配器，内置常见 webshell/恶意代码特征 返回值: - 恶意文件特征匹配器对象|
| [file.NewMultiFileLineReader](#newmultifilelinereader) |NewMultiFileLineReader 创建一个多文件读取器，返回一个多文件读取器结构体引用和错误 参数: - files: 一个或多个待读取的文件路径 返回值: - 多文件读取器结构体引用 - 错误信息|
| [file.Open](#open) |Open 打开一个文件，返回一个文件结构体引用与错误 参数: - name: 待打开的文件路径 返回值: - 文件结构体引用 - 错误信息|
| [file.OpenFile](#openfile) |OpenFile 打开一个文件，使用 file.O_CREATE ... 和权限控制，返回一个文件结构体引用与错误 参数: - name: 待打开的文件路径 - flags: 打开标志（如 file.O_CREATE\|file.O_RDWR） - mode: 文件权限（如 0o777） 返回值: -...|
| [file.ReadAll](#readall) |ReadAll 从 Reader 读取直到出现错误或 EOF，然后返回字节切片与错误 参数: - r: 可读取的流对象（Reader） 返回值: - 读取到的全部字节 - 错误信息|
| [file.ReadDirInfoInDirectory](#readdirinfoindirectory) |ReadDirInfoInDirectory 递归读取一个目录下的所有子目录信息，返回一个文件信息切片和错误 参数: - path: 待读取的目录路径 返回值: - 目录下所有子目录的文件信息切片 - 错误信息|
| [file.ReadFile](#readfile) |ReadFile 读取一个文件的所有内容，返回字节切片与错误 参数: - filename: 待读取的文件路径 返回值: - 文件的全部内容字节 - 错误信息|
| [file.ReadFileInfoInDirectory](#readfileinfoindirectory) |ReadFileInfoInDirectory 递归读取一个目录下的所有文件信息，返回一个文件信息切片和错误 参数: - path: 待读取的目录路径 返回值: - 目录下所有文件的文件信息切片 - 错误信息|
| [file.ReadLines](#readlines) |ReadLines 尝试读取一个文件中的所有行，返回一个字符串切片，会去除BOM头和空行 参数: - i: 待读取的文件路径 返回值: - 文件中的所有行组成的字符串切片|
| [file.ReadLinesWithCallback](#readlineswithcallback) |ReadLinesWithCallback 尝试读取一个文件中的所有行，每读取一行，便会调用回调函数，返回错误 参数: - i: 待读取的文件路径 - callback: 每读取一行时调用的回调函数，参数为该行内容 返回值: - 错误信息|
| [file.Remove](#remove) |Remove 删除路径及其包含的所有子路径 参数: - path: 待删除的路径 返回值: - 错误信息|
| [file.Rename](#rename) |Rename 重命名一个文件或文件夹，返回错误，这个函数也会移动文件或文件夹 ! 在 windows 下，无法将文件移动到不同的磁盘 参数: - oldpath: 原路径 - newpath: 目标路径 返回值: - 错误信息|
| [file.Rm](#rm) |Rm 删除路径及其包含的所有子路径，它是 Remove 的别名 参数: - path: 待删除的路径 返回值: - 错误信息|
| [file.Save](#save) |Save 将字符串或字节切片或字符串切片写入到文件中，如果文件不存在则创建，如果文件存在则覆盖，返回错误 参数: - fileName: 目标文件路径 - i: 待写入的内容，支持字符串、字节切片或字符串切片 返回值: - 错误信息|
| [file.SaveJson](#savejson) |SaveJson 将字符串或字节切片或字符串切片写入到文件中，如果文件不存在则创建，如果文件存在则覆盖，返回错误 与 Save 不同的是，如果传入的参数是其他类型，会尝试将其序列化为 json 字符再写入到文件中 参数: - name: 目标文件路径 - i: 待写入的内容，非字符串/字节类型会被序...|
| [file.Sha1](#sha1) |Sha1 计算文件的 SHA1 哈希值 参数: - filepath: 文件路径 返回值: - SHA1 哈希值（40位十六进制字符串），如果文件不存在或读取失败则返回空字符串|
| [file.Sha256](#sha256) |Sha256 计算文件的 SHA256 哈希值 参数: - filepath: 文件路径 返回值: - SHA256 哈希值（64位十六进制字符串），如果文件不存在或读取失败则返回空字符串|
| [file.Split](#split) |Split 以操作系统的默认路径分隔符分割路径，返回目录和文件名 参数: - path: 输入路径 返回值: - 目录部分（带结尾分隔符） - 文件名部分|
| [file.Stat](#stat) |Stat 返回一个文件的信息和错误 参数: - name: 待查询的文件路径 返回值: - 文件信息对象 - 错误信息|
| [file.TailF](#tailf) |TailF 模拟 unix 命令 tail -f，执行这个函数会一直阻塞，监听文件内容变化，如果文件有变化，会自动通过回调通知新的内容 参数: - i: 待监听的文件路径 - line: 每读取到新行时调用的回调函数，参数为该行内容|
| [file.TempFile](#tempfile) |TempFile 创建一个临时文件，返回一个文件结构体引用与错误 参数: - dirPart: 可选的临时文件所在目录，不传则使用默认临时目录 返回值: - 临时文件结构体引用 - 错误信息|
| [file.TempFileName](#tempfilename) |TempFileName 创建一个临时文件，返回一个文件名与错误 参数: - pattern: 可选的文件名匹配模式（如 &#34;pattern-*.txt&#34;） 返回值: - 创建的临时文件名 - 错误信息|
| [file.Walk](#walk) |Walk 遍历一个目录下的所有文件和目录，对每一项调用回调函数，返回错误 参数: - uPath: 待遍历的目录路径 - i: 对每个文件/目录调用的回调函数，返回 true 继续遍历 返回值: - 错误信息|


## 函数定义
### Abs

#### 详细描述
Abs 返回一个路径的绝对路径

参数:

  - i: 输入路径（支持以 ~ 开头表示家目录）



返回值:

  - 对应的绝对路径




Example:

``````````````yak
// 假设当前目录是 /tmp
file.Abs("./test.txt") // /tmp/test.txt
``````````````


#### 定义

`Abs(i string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` | 输入路径（支持以 ~ 开头表示家目录） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 对应的绝对路径 |


### Cat

#### 详细描述
Cat 模拟 unix 命令 cat，打印文件内容到标准输出

参数:

  - i: 待打印的文件路径




Example:

``````````````yak
file.Cat("/tmp/test.txt")
``````````````


#### 定义

`Cat(i string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` | 待打印的文件路径 |


### Clean

#### 详细描述
Clean 清理路径中的多余的分隔符和 . 和 ..

参数:

  - s: 输入路径



返回值:

  - 规整化后的最短等价路径




Example:

``````````````yak
p = file.Clean("/tmp/../tmp/test.txt")
println(p)   // OUT: /tmp/test.txt
assert p == "/tmp/test.txt", "Clean should normalize the path"
``````````````


#### 定义

`Clean(s string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` | 输入路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 规整化后的最短等价路径 |


### Cp

#### 详细描述
Cp 拷贝文件或目录，返回错误

参数:

  - src: 源文件或目录路径

  - dst: 目标文件或目录路径



返回值:

  - 错误信息




Example:

``````````````yak
file.Cp("/tmp/test.txt", "/tmp/test2.txt")
file.Cp("/tmp/test", "/root/tmp/test")
``````````````


#### 定义

`Cp(src string, dst string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| src | `string` | 源文件或目录路径 |
| dst | `string` | 目标文件或目录路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### Create

#### 详细描述
Create 创建一个文件，返回一个文件结构体引用与错误

参数:

  - name: 待创建的文件路径



返回值:

  - 文件结构体引用

  - 错误信息




Example:

``````````````yak
f, err = file.Create("/tmp/test.txt")
``````````````


#### 定义

`Create(name string) (*_yakFile, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 待创建的文件路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*_yakFile` | 文件结构体引用 |
| r2 | `error` | 错误信息 |


### DetectFileType

#### 详细描述
DetectFileType 统一的文件类型识别函数，使用魔数识别文件类型

支持常见操作系统（Linux、Windows、macOS）中的各种文件格式

参数:

  - filePath: 文件路径



返回值:

  - MIME 类型字符串

  - 错误信息，如果无法识别文件类型则返回错误




Example:

``````````````yak
mimeType, err = file.DetectFileType("/path/to/file")

	if err == nil {
	    println(mimeType)  // "text/plain" 或 "application/pdf" 等
	}
``````````````


#### 定义

`DetectFileType(filePath string) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| filePath | `string` | 文件路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | MIME 类型字符串 |
| r2 | `error` | 错误信息，如果无法识别文件类型则返回错误 |


### DetectMIMETypeFromFile

#### 详细描述
暂无描述

#### 定义

`DetectMIMETypeFromFile(path string) (*MIME, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*MIME` |  |
| r2 | `error` |  |


### DetectMIMETypeFromRaw

#### 详细描述
暂无描述

#### 定义

`DetectMIMETypeFromRaw(raw []byte) *MIME`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*MIME` |  |


### Dir

#### 详细描述
Ls 列出一个目录下的所有文件和目录，返回一个文件信息切片

参数:

  - i: 待列出的目录路径



返回值:

  - 目录下文件和子目录的文件信息切片




Example:

``````````````yak
for f in file.Ls("/tmp") {
println(f.Name)
}
``````````````


#### 定义

`Dir(i string) []*utils.FileInfo`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` | 待列出的目录路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*utils.FileInfo` | 目录下文件和子目录的文件信息切片 |


### GetBase

#### 详细描述
GetBase 获取文件的基本名

参数:

  - s: 文件路径



返回值:

  - 路径最后一段（文件名）




Example:

``````````````yak
base = file.GetBase("/tmp/test.txt")
println(base)   // OUT: test.txt
assert base == "test.txt", "GetBase should return the file name"
``````````````


#### 定义

`GetBase(s string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` | 文件路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 路径最后一段（文件名） |


### GetDirPath

#### 详细描述
GetDirPath 返回路径中除最后一个元素之后的路径，这通常是原本路径的目录

参数:

  - path: 输入路径



返回值:

  - 路径所在目录（带结尾分隔符）




Example:

``````````````yak
dir = file.GetDirPath("/usr/bin/bash")
println(dir)   // OUT: /usr/bin/
assert dir == "/usr/bin/", "GetDirPath should return the directory with trailing separator"
``````````````


#### 定义

`GetDirPath(path string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` | 输入路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 路径所在目录（带结尾分隔符） |


### GetExt

#### 详细描述
GetExt 获取文件的扩展名

参数:

  - s: 文件路径



返回值:

  - 扩展名（含点，如 .txt），无扩展名返回空字符串




Example:

``````````````yak
ext = file.GetExt("/tmp/test.txt")
println(ext)   // OUT: .txt
assert ext == ".txt", "GetExt should return the file extension"
``````````````


#### 定义

`GetExt(s string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` | 文件路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 扩展名（含点，如 .txt），无扩展名返回空字符串 |


### GetTypeByExtension

#### 详细描述
GetTypeByExtension 根据文件扩展名获取 MIME 类型

参数:

  - ext: 文件扩展名（可以带或不带点号，如 &#34;.txt&#34; 或 &#34;txt&#34;）



返回值:

  - MIME 类型字符串，如果未找到则返回 &#34;application/octet-stream&#34;




Example:

``````````````yak
mimeType = file.GetTypeByExtension(".txt")
// 不同平台可能带不同的 charset 后缀，仅断言主类型
assert str.Contains(mimeType, "text/plain"), "txt extension should map to text/plain"
``````````````


#### 定义

`GetTypeByExtension(ext string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ext | `string` | 文件扩展名（可以带或不带点号，如 &#34;.txt&#34; 或 &#34;txt&#34;） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | MIME 类型字符串，如果未找到则返回 &#34;application/octet-stream&#34; |


### IsAbs

#### 详细描述
IsAbs 判断路径是否是绝对路径

参数:

  - path: 待判断的路径



返回值:

  - 是否为绝对路径




Example:

``````````````yak
println(file.IsAbs("/usr/bin/bash"))   // OUT: true
assert file.IsAbs("/usr/bin/bash") == true, "absolute path should be detected"
assert file.IsAbs("../../usr/bin") == false, "relative path should not be absolute"
``````````````


#### 定义

`IsAbs(path string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` | 待判断的路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 是否为绝对路径 |


### IsDir

#### 详细描述
IsDir 判断路径是否存在且是一个目录

参数:

  - path: 待判断的路径



返回值:

  - 路径是否存在且为目录




Example:

``````````````yak
// 假设存在 /usr/bin/bash 文件
file.IsDir("/usr/bin") // true
file.IsDir("/usr/bin/bash") // false
``````````````


#### 定义

`IsDir(path string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` | 待判断的路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 路径是否存在且为目录 |


### IsExisted

#### 详细描述
IsExisted 判断文件或目录是否存在

参数:

  - path: 待判断的路径



返回值:

  - 路径是否存在




Example:

``````````````yak
file.IsExisted("/usr/bin/bash")
``````````````


#### 定义

`IsExisted(path string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` | 待判断的路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 路径是否存在 |


### IsFile

#### 详细描述
IsFile 判断路径是否存在且是一个文件

参数:

  - path: 待判断的路径



返回值:

  - 路径是否存在且为文件




Example:

``````````````yak
// 假设存在 /usr/bin/bash 文件
file.IsFile("/usr/bin/bash") // true
file.IsFile("/usr/bin") // false
``````````````


#### 定义

`IsFile(path string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` | 待判断的路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 路径是否存在且为文件 |


### IsLink

#### 详细描述
IsLink 判断文件是否是一个符号链接

参数:

  - file: 待判断的文件路径



返回值:

  - 是否为符号链接




Example:

``````````````yak
// 假设 /usr/bin/bash 是一个符号链接，指向 /bin/bash
file.IsLink("/usr/bin/bash") // true
file.IsLink("/bin/bash") // false
``````````````


#### 定义

`IsLink(file string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| file | `string` | 待判断的文件路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 是否为符号链接 |


### Join

#### 详细描述
Join 将任意数量的路径以默认路径分隔符链接在一起

参数:

  - elem: 任意数量的路径片段



返回值:

  - 用默认分隔符拼接后的路径




Example:

``````````````yak
p = file.Join("/usr", "bin", "bash")
println(p)   // OUT: /usr/bin/bash
assert p == "/usr/bin/bash", "Join should join path segments with separator"
``````````````


#### 定义

`Join(path ...string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `...string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 用默认分隔符拼接后的路径 |


### Ls

#### 详细描述
Dir 列出一个目录下的所有文件和目录，返回一个文件信息切片，它是 Ls 的别名

参数:

  - i: 待列出的目录路径



返回值:

  - 目录下文件和子目录的文件信息切片




Example:

``````````````yak
for f in file.Dir("/tmp") {
println(f.Name)
}
``````````````


#### 定义

`Ls(i string) []*utils.FileInfo`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` | 待列出的目录路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*utils.FileInfo` | 目录下文件和子目录的文件信息切片 |


### Lstat

#### 详细描述
Lstat 返回一个文件的信息和错误，如果文件是一个符号链接，返回的是符号链接的信息

参数:

  - name: 待查询的文件路径



返回值:

  - 文件信息对象（符号链接本身的信息）

  - 错误信息




Example:

``````````````yak
info, err = file.Lstat("/tmp/test.txt")
desc(info)
``````````````


#### 定义

`Lstat(name string) (os.FileInfo, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 待查询的文件路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `os.FileInfo` | 文件信息对象（符号链接本身的信息） |
| r2 | `error` | 错误信息 |


### MatchMalicious

#### 详细描述
MatchMalicious 检测文件或内容是否包含恶意特征

支持两种输入类型：

  - string: 文件路径，会读取文件内容进行匹配

  - []byte: 文件内容，直接匹配内容



参数:

  - input: 文件路径（string）或文件内容（[]byte）



返回值:

  - 匹配到的特征名称列表

  - 错误信息（仅当输入为文件路径且读取失败时返回）




Example:

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


#### 定义

`MatchMalicious(input any) ([]string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| input | `any` | 文件路径（string）或文件内容（[]byte） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 匹配到的特征名称列表 |
| r2 | `error` | 错误信息（仅当输入为文件路径且读取失败时返回） |


### MatchMaliciousWithDetails

#### 详细描述
MatchMaliciousWithDetails 检测文件或内容并返回详细信息

支持两种输入类型：

  - string: 文件路径，会读取文件内容进行匹配

  - []byte: 文件内容，直接匹配内容



参数:

  - input: 文件路径（string）或文件内容（[]byte）



返回值:

  - 匹配到的特征详细信息列表（含 name/category/description/severity）

  - 错误信息（仅当输入为文件路径且读取失败时返回）




Example:

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


#### 定义

`MatchMaliciousWithDetails(input any) ([]map[string]any, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| input | `any` | 文件路径（string）或文件内容（[]byte） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]map[string]any` | 匹配到的特征详细信息列表（含 name/category/description/severity） |
| r2 | `error` | 错误信息（仅当输入为文件路径且读取失败时返回） |


### Md5

#### 详细描述
Md5 计算文件的 MD5 哈希值

参数:

  - filepath: 文件路径



返回值:

  - MD5 哈希值（32位十六进制字符串），如果文件不存在或读取失败则返回空字符串




Example:

``````````````yak
// 写入已知内容 "abc"，其 MD5 是固定值
p = file.Join(os.TempDir(), "yak-md5-example.txt")
file.Save(p, "abc")~
md5Hash = file.Md5(p)
println(md5Hash)   // OUT: 900150983cd24fb0d6963f7d28e17f72
assert md5Hash == "900150983cd24fb0d6963f7d28e17f72", "Md5 of 'abc' should be stable"
file.Remove(p)
``````````````


#### 定义

`Md5(filepath string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| filepath | `string` | 文件路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | MD5 哈希值（32位十六进制字符串），如果文件不存在或读取失败则返回空字符串 |


### Mkdir

#### 详细描述
Mkdir 创建一个目录，返回错误

参数:

  - name: 待创建的目录路径



返回值:

  - 错误信息




Example:

``````````````yak
err = file.Mkdir("/tmp/test")
``````````````


#### 定义

`Mkdir(name string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 待创建的目录路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### MkdirAll

#### 详细描述
MkdirAll 递归创建一个目录（包括所有不存在的父目录），返回错误

参数:

  - name: 待创建的目录路径



返回值:

  - 错误信息




Example:

``````````````yak
// 假设存在 /tmp 目录，不存在 /tmp/test 目录
err = file.MkdirAll("/tmp/test/test2")
``````````````


#### 定义

`MkdirAll(name string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 待创建的目录路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### Mv

#### 详细描述
Mv 重命名一个文件或文件夹，返回错误，这个函数也会移动文件或文件夹，它是 Rename 的别名

! 在 windows 下，无法将文件移动到不同的磁盘

参数:

  - oldpath: 原路径

  - newpath: 目标路径



返回值:

  - 错误信息




Example:

``````````````yak
// 假设存在 /tmp/test.txt 文件
err = file.Mv("/tmp/test.txt", "/tmp/test2.txt")
``````````````


#### 定义

`Mv(oldpath string, newpath string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| oldpath | `string` | 原路径 |
| newpath | `string` | 目标路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### NewMaliciousFileMatcher

#### 详细描述
NewMaliciousFileMatcher 创建一个恶意文件特征匹配器，内置常见 webshell/恶意代码特征

返回值:

  - 恶意文件特征匹配器对象




Example:

``````````````yak
matcher = file.NewMaliciousFileMatcher()
matches, err = matcher.MatchContent([]byte("<?php eval($_POST[1]);?>"))
``````````````


#### 定义

`NewMaliciousFileMatcher() *MaliciousFileMatcher`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*MaliciousFileMatcher` | 恶意文件特征匹配器对象 |


### NewMultiFileLineReader

#### 详细描述
NewMultiFileLineReader 创建一个多文件读取器，返回一个多文件读取器结构体引用和错误

参数:

  - files: 一个或多个待读取的文件路径



返回值:

  - 多文件读取器结构体引用

  - 错误信息




Example:

``````````````yak
// 假设存在 /tmp/test.txt 文件，内容为 123
// 假设存在 /tmp/test2.txt 文件，内容为 456
m, err = file.NewMultiFileLineReader("/tmp/test.txt", "/tmp/test2.txt")
for m.Next() {
println(m.Text())
}
``````````````


#### 定义

`NewMultiFileLineReader(files ...string) (*mfreader.MultiFileLineReader, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| files | `...string` | 一个或多个待读取的文件路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*mfreader.MultiFileLineReader` | 多文件读取器结构体引用 |
| r2 | `error` | 错误信息 |


### Open

#### 详细描述
Open 打开一个文件，返回一个文件结构体引用与错误

参数:

  - name: 待打开的文件路径



返回值:

  - 文件结构体引用

  - 错误信息




Example:

``````````````yak
f, err = file.Open("/tmp/test.txt")
content, err = file.ReadAll(f)
``````````````


#### 定义

`Open(name string) (*_yakFile, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 待打开的文件路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*_yakFile` | 文件结构体引用 |
| r2 | `error` | 错误信息 |


### OpenFile

#### 详细描述
OpenFile 打开一个文件，使用 file.O_CREATE ... 和权限控制，返回一个文件结构体引用与错误

参数:

  - name: 待打开的文件路径

  - flags: 打开标志（如 file.O_CREATE|file.O_RDWR）

  - mode: 文件权限（如 0o777）



返回值:

  - 文件结构体引用

  - 错误信息




Example:

``````````````yak
f = file.OpenFile("/tmp/test.txt", file.O_CREATE|file.O_RDWR, 0o777)~; defer f.Close()
``````````````


#### 定义

`OpenFile(name string, flags int, mode os.FileMode) (*_yakFile, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 待打开的文件路径 |
| flags | `int` | 打开标志（如 file.O_CREATE\|file.O_RDWR） |
| mode | `os.FileMode` | 文件权限（如 0o777） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*_yakFile` | 文件结构体引用 |
| r2 | `error` | 错误信息 |


### ReadAll

#### 详细描述
ReadAll 从 Reader 读取直到出现错误或 EOF，然后返回字节切片与错误

参数:

  - r: 可读取的流对象（Reader）



返回值:

  - 读取到的全部字节

  - 错误信息




Example:

``````````````yak
f, err = file.Open("/tmp/test.txt")
content, err = file.ReadAll(f)
``````````````


#### 定义

`ReadAll(r io.Reader) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| r | `io.Reader` | 可读取的流对象（Reader） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 读取到的全部字节 |
| r2 | `error` | 错误信息 |


### ReadDirInfoInDirectory

#### 详细描述
ReadDirInfoInDirectory 递归读取一个目录下的所有子目录信息，返回一个文件信息切片和错误

参数:

  - path: 待读取的目录路径



返回值:

  - 目录下所有子目录的文件信息切片

  - 错误信息




Example:

``````````````yak
for d in file.ReadDirInfoInDirectory("/tmp")~ {
println(d.Name)
}
``````````````


#### 定义

`ReadDirInfoInDirectory(path string) ([]*utils.FileInfo, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` | 待读取的目录路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*utils.FileInfo` | 目录下所有子目录的文件信息切片 |
| r2 | `error` | 错误信息 |


### ReadFile

#### 详细描述
ReadFile 读取一个文件的所有内容，返回字节切片与错误

参数:

  - filename: 待读取的文件路径



返回值:

  - 文件的全部内容字节

  - 错误信息




Example:

``````````````yak
// 写入后读取，验证内容一致
p = file.Join(os.TempDir(), "yak-readfile-example.txt")
file.Save(p, "hello yak")~
content = file.ReadFile(p)~
assert string(content) == "hello yak", "ReadFile should return the file content"
file.Remove(p)
``````````````


#### 定义

`ReadFile(filename string) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| filename | `string` | 待读取的文件路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 文件的全部内容字节 |
| r2 | `error` | 错误信息 |


### ReadFileInfoInDirectory

#### 详细描述
ReadFileInfoInDirectory 递归读取一个目录下的所有文件信息，返回一个文件信息切片和错误

参数:

  - path: 待读取的目录路径



返回值:

  - 目录下所有文件的文件信息切片

  - 错误信息




Example:

``````````````yak
for f in file.ReadFileInfoInDirectory("/tmp")~ {
println(f.Name)
}
``````````````


#### 定义

`ReadFileInfoInDirectory(path string) ([]*utils.FileInfo, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` | 待读取的目录路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*utils.FileInfo` | 目录下所有文件的文件信息切片 |
| r2 | `error` | 错误信息 |


### ReadLines

#### 详细描述
ReadLines 尝试读取一个文件中的所有行，返回一个字符串切片，会去除BOM头和空行

参数:

  - i: 待读取的文件路径



返回值:

  - 文件中的所有行组成的字符串切片




Example:

``````````````yak
// 写入三行后读取，验证行数与首行
p = file.Join(os.TempDir(), "yak-readlines-example.txt")
file.Save(p, "line1\nline2\nline3")~
lines = file.ReadLines(p)
println(len(lines))   // OUT: 3
assert lines[0] == "line1", "ReadLines should return the first line"
file.Remove(p)
``````````````


#### 定义

`ReadLines(i any) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待读取的文件路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 文件中的所有行组成的字符串切片 |


### ReadLinesWithCallback

#### 详细描述
ReadLinesWithCallback 尝试读取一个文件中的所有行，每读取一行，便会调用回调函数，返回错误

参数:

  - i: 待读取的文件路径

  - callback: 每读取一行时调用的回调函数，参数为该行内容



返回值:

  - 错误信息




Example:

``````````````yak
err = file.ReadLinesWithCallback("/tmp/test.txt", func(line) { println(line) })
``````````````


#### 定义

`ReadLinesWithCallback(i any, callback func(string)) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待读取的文件路径 |
| callback | `func(string)` | 每读取一行时调用的回调函数，参数为该行内容 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### Remove

#### 详细描述
Remove 删除路径及其包含的所有子路径

参数:

  - path: 待删除的路径



返回值:

  - 错误信息




Example:

``````````````yak
// 假设存在 /tmp/test/test.txt 文件和 /tmp/test/test2.txt 文件
err = file.Remove("/tmp/test")
``````````````


#### 定义

`Remove(path string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` | 待删除的路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### Rename

#### 详细描述
Rename 重命名一个文件或文件夹，返回错误，这个函数也会移动文件或文件夹

! 在 windows 下，无法将文件移动到不同的磁盘

参数:

  - oldpath: 原路径

  - newpath: 目标路径



返回值:

  - 错误信息




Example:

``````````````yak
// 假设存在 /tmp/test.txt 文件
err = file.Rename("/tmp/test.txt", "/tmp/test2.txt")
``````````````


#### 定义

`Rename(oldpath string, newpath string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| oldpath | `string` | 原路径 |
| newpath | `string` | 目标路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### Rm

#### 详细描述
Rm 删除路径及其包含的所有子路径，它是 Remove 的别名

参数:

  - path: 待删除的路径



返回值:

  - 错误信息




Example:

``````````````yak
// 假设存在 /tmp/test/test.txt 文件和 /tmp/test/test2.txt 文件
err = file.Rm("/tmp/test")
``````````````


#### 定义

`Rm(path string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` | 待删除的路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### Save

#### 详细描述
Save 将字符串或字节切片或字符串切片写入到文件中，如果文件不存在则创建，如果文件存在则覆盖，返回错误

参数:

  - fileName: 目标文件路径

  - i: 待写入的内容，支持字符串、字节切片或字符串切片



返回值:

  - 错误信息




Example:

``````````````yak
// 写入后再读回，验证内容一致
p = file.Join(os.TempDir(), "yak-save-example.txt")
file.Save(p, "hello yak")~
content = file.ReadFile(p)~
assert string(content) == "hello yak", "Save should write the content to file"
file.Remove(p)
``````````````


#### 定义

`Save(fileName string, i any) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fileName | `string` | 目标文件路径 |
| i | `any` | 待写入的内容，支持字符串、字节切片或字符串切片 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### SaveJson

#### 详细描述
SaveJson 将字符串或字节切片或字符串切片写入到文件中，如果文件不存在则创建，如果文件存在则覆盖，返回错误

与 Save 不同的是，如果传入的参数是其他类型，会尝试将其序列化为 json 字符再写入到文件中

参数:

  - name: 目标文件路径

  - i: 待写入的内容，非字符串/字节类型会被序列化为 JSON



返回值:

  - 错误信息




Example:

``````````````yak
// 写入一个 map，会被序列化为 JSON 文本
p = file.Join(os.TempDir(), "yak-savejson-example.json")
file.SaveJson(p, {"name": "yak"})~
content = file.ReadFile(p)~
assert str.Contains(string(content), "yak"), "SaveJson should write json content"
file.Remove(p)
``````````````


#### 定义

`SaveJson(name string, i any) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 目标文件路径 |
| i | `any` | 待写入的内容，非字符串/字节类型会被序列化为 JSON |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### Sha1

#### 详细描述
Sha1 计算文件的 SHA1 哈希值

参数:

  - filepath: 文件路径



返回值:

  - SHA1 哈希值（40位十六进制字符串），如果文件不存在或读取失败则返回空字符串




Example:

``````````````yak
// 写入已知内容 "abc"，其 SHA1 是固定值
p = file.Join(os.TempDir(), "yak-sha1-example.txt")
file.Save(p, "abc")~
sha1Hash = file.Sha1(p)
println(sha1Hash)   // OUT: a9993e364706816aba3e25717850c26c9cd0d89d
assert sha1Hash == "a9993e364706816aba3e25717850c26c9cd0d89d", "Sha1 of 'abc' should be stable"
file.Remove(p)
``````````````


#### 定义

`Sha1(filepath string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| filepath | `string` | 文件路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | SHA1 哈希值（40位十六进制字符串），如果文件不存在或读取失败则返回空字符串 |


### Sha256

#### 详细描述
Sha256 计算文件的 SHA256 哈希值

参数:

  - filepath: 文件路径



返回值:

  - SHA256 哈希值（64位十六进制字符串），如果文件不存在或读取失败则返回空字符串




Example:

``````````````yak
// 写入已知内容 "abc"，其 SHA256 是固定值
p = file.Join(os.TempDir(), "yak-sha256-example.txt")
file.Save(p, "abc")~
sha256Hash = file.Sha256(p)
println(sha256Hash)   // OUT: ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad
assert sha256Hash == "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad", "Sha256 of 'abc' should be stable"
file.Remove(p)
``````````````


#### 定义

`Sha256(filepath string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| filepath | `string` | 文件路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | SHA256 哈希值（64位十六进制字符串），如果文件不存在或读取失败则返回空字符串 |


### Split

#### 详细描述
Split 以操作系统的默认路径分隔符分割路径，返回目录和文件名

参数:

  - path: 输入路径



返回值:

  - 目录部分（带结尾分隔符）

  - 文件名部分




Example:

``````````````yak
dir, name = file.Split("/usr/bin/bash")
println(dir)    // OUT: /usr/bin/
println(name)   // OUT: bash
assert dir == "/usr/bin/", "Split should return the directory part"
assert name == "bash", "Split should return the file name part"
``````````````


#### 定义

`Split(path string) (string, string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` | 输入路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 目录部分（带结尾分隔符） |
| r2 | `string` | 文件名部分 |


### Stat

#### 详细描述
Stat 返回一个文件的信息和错误

参数:

  - name: 待查询的文件路径



返回值:

  - 文件信息对象

  - 错误信息




Example:

``````````````yak
info, err = file.Stat("/tmp/test.txt")
desc(info)
``````````````


#### 定义

`Stat(name string) (os.FileInfo, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 待查询的文件路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `os.FileInfo` | 文件信息对象 |
| r2 | `error` | 错误信息 |


### TailF

#### 详细描述
TailF 模拟 unix 命令 tail -f，执行这个函数会一直阻塞，监听文件内容变化，如果文件有变化，会自动通过回调通知新的内容

参数:

  - i: 待监听的文件路径

  - line: 每读取到新行时调用的回调函数，参数为该行内容




Example:

``````````````yak
file.TailF("/tmp/test.txt", func(line) { println(line) })
``````````````


#### 定义

`TailF(i string, line func(i string))`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` | 待监听的文件路径 |
| line | `func(i string)` | 每读取到新行时调用的回调函数，参数为该行内容 |


### TempFile

#### 详细描述
TempFile 创建一个临时文件，返回一个文件结构体引用与错误

参数:

  - dirPart: 可选的临时文件所在目录，不传则使用默认临时目录



返回值:

  - 临时文件结构体引用

  - 错误信息




Example:

``````````````yak
f, err = file.TempFile()
die(err)
defer f.Close()
f.WriteString("hello yak")
``````````````


#### 定义

`TempFile(dirPart ...string) (*_yakFile, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| dirPart | `...string` | 可选的临时文件所在目录，不传则使用默认临时目录 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*_yakFile` | 临时文件结构体引用 |
| r2 | `error` | 错误信息 |


### TempFileName

#### 详细描述
TempFileName 创建一个临时文件，返回一个文件名与错误

参数:

  - pattern: 可选的文件名匹配模式（如 &#34;pattern-*.txt&#34;）



返回值:

  - 创建的临时文件名

  - 错误信息




Example:

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


#### 定义

`TempFileName(pattern ...string) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pattern | `...string` | 可选的文件名匹配模式（如 &#34;pattern-*.txt&#34;） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 创建的临时文件名 |
| r2 | `error` | 错误信息 |


### Walk

#### 详细描述
Walk 遍历一个目录下的所有文件和目录，对每一项调用回调函数，返回错误

参数:

  - uPath: 待遍历的目录路径

  - i: 对每个文件/目录调用的回调函数，返回 true 继续遍历



返回值:

  - 错误信息




Example:

``````````````yak
file.Walk("/tmp", func(info) {println(info.Name); return true})~
``````````````


#### 定义

`Walk(uPath string, i func(info *utils.FileInfo) bool) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| uPath | `string` | 待遍历的目录路径 |
| i | `func(info *utils.FileInfo) bool` | 对每个文件/目录调用的回调函数，返回 true 继续遍历 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


