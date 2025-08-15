# file

|实例名|实例描述|
|:------|:--------|
O_APPEND|(int) 1024|
O_CREATE|(int) 64|
O_EXCL|(int) 128|
O_RDONLY|(int) 0|
O_RDWR|(int) 2|
O_SYNC|(int) 1052672|
O_TRUNC|(int) 512|
O_WRONLY|(int) 1|
SEPARATOR|(string) &#34;/&#34;|

|函数名|函数描述/介绍|
|:------|:--------|
| [file.Abs](#abs) |Abs 返回一个路径的绝对路径  |
| [file.Cat](#cat) |Cat 模拟 unix 命令 cat，打印文件内容到标准输出  |
| [file.Clean](#clean) |Clean 清理路径中的多余的分隔符和 . 和 ..  |
| [file.Cp](#cp) |Cp 拷贝文件或目录，返回错误  |
| [file.Create](#create) |Create 创建一个文件，返回一个文件结构体引用与错误  |
| [file.DetectMIMETypeFromFile](#detectmimetypefromfile) ||
| [file.DetectMIMETypeFromRaw](#detectmimetypefromraw) ||
| [file.Dir](#dir) |Ls 列出一个目录下的所有文件和目录，返回一个文件信息切片  |
| [file.GetBase](#getbase) |GetBase 获取文件的基本名  |
| [file.GetDirPath](#getdirpath) |GetDirPath 返回路径中除最后一个元素之后的路径，这通常是原本路径的目录  |
| [file.GetExt](#getext) |GetExt 获取文件的扩展名  |
| [file.IsAbs](#isabs) |IsAbs 判断路径是否是绝对路径  |
| [file.IsDir](#isdir) |IsDir 判断路径是否存在且是一个目录  |
| [file.IsExisted](#isexisted) |IsExisted 判断文件或目录是否存在  |
| [file.IsFile](#isfile) |IsFile 判断路径是否存在且是一个文件  |
| [file.IsLink](#islink) |IsLink 判断文件是否是一个符号链接  |
| [file.Join](#join) |Join 将任意数量的路径以默认路径分隔符链接在一起  |
| [file.Ls](#ls) |Dir 列出一个目录下的所有文件和目录，返回一个文件信息切片，它是 Ls 的别名  |
| [file.Lstat](#lstat) |Lstat 返回一个文件的信息和错误，如果文件是一个符号链接，返回的是符号链接的信息  |
| [file.Mkdir](#mkdir) |Mkdir 创建一个目录，返回错误  |
| [file.MkdirAll](#mkdirall) |MkdirAll 创建一个递归创建一个目录，返回错误  |
| [file.Mv](#mv) |Mv 重命名一个文件或文件夹，返回错误，这个函数也会移动文件或文件夹，它是 Rename 的别名  ! 在 windows 下，无法将文件移动到不同的磁盘  |
| [file.NewMultiFileLineReader](#newmultifilelinereader) |NewMultiFileLineReader 创建一个多文件读取器，返回一个多文件读取器结构体引用和错误  |
| [file.Open](#open) |Open 打开一个文件，返回一个文件结构体引用与错误  |
| [file.OpenFile](#openfile) |OpenFile 打开一个文件，使用 file.O_CREATE ... 和权限控制，返回一个文件结构体引用与错误  |
| [file.ReadAll](#readall) |ReadAll 从 Reader 读取直到出现错误或 EOF，然后返回字节切片与错误  |
| [file.ReadDirInfoInDirectory](#readdirinfoindirectory) |ReadDirInfoInDirectory 读取一个目录下的所有目录信息，返回一个文件信息切片和错误  |
| [file.ReadFile](#readfile) |ReadFile 读取一个文件的所有内容，返回字节切片与错误  |
| [file.ReadFileInfoInDirectory](#readfileinfoindirectory) |ReadFileInfoInDirectory 读取一个目录下的所有文件信息，返回一个文件信息切片和错误  |
| [file.ReadLines](#readlines) |ReadLines 尝试读取一个文件中的所有行，返回一个字符串切片，会去除BOM头和空行  |
| [file.ReadLinesWithCallback](#readlineswithcallback) |ReadLinesWithCallback 尝试读取一个文件中的所有行，每读取一行，便会调用回调函数，返回错误  |
| [file.Remove](#remove) |Remove 删除路径及其包含的所有子路径  |
| [file.Rename](#rename) |Rename 重命名一个文件或文件夹，返回错误，这个函数也会移动文件或文件夹  ! 在 windows 下，无法将文件移动到不同的磁盘  |
| [file.Rm](#rm) |Rm 删除路径及其包含的所有子路径，它是 Remove 的别名  |
| [file.Save](#save) |Save 将字符串或字节切片或字符串切片写入到文件中，如果文件不存在则创建，如果文件存在则覆盖，返回错误  |
| [file.SaveJson](#savejson) |SaveJson 将字符串或字节切片或字符串切片写入到文件中，如果文件不存在则创建，如果文件存在则覆盖，返回错误  与 Save 不同的是，如果传入的参数是其他类型，会尝试将其序列化为 json 字符再写入到文件中  |
| [file.Split](#split) |Split 以操作系统的默认路径分隔符分割路径，返回目录和文件名  |
| [file.Stat](#stat) |Stat 返回一个文件的信息和错误  |
| [file.TailF](#tailf) |TailF 模拟 unix 命令 tail -f，执行这个函数会一直阻塞，打印文件内容到标准输出，如果文件有变化，会自动打印新的内容  |
| [file.TempFile](#tempfile) |TempFile 创建一个临时文件，返回一个文件结构体引用与错误  |
| [file.TempFileName](#tempfilename) |TempFileName 创建一个临时文件，返回一个文件名与错误  |
| [file.Walk](#walk) |Walk 遍历一个目录下的所有文件和目录，返回错误  |


## 函数定义
### Abs

#### 详细描述
Abs 返回一个路径的绝对路径

Example:
```
// 假设当前目录是 /tmp
file.Abs("./test.txt") // /tmp/test.txt
```


#### 定义

`Abs(i string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### Cat

#### 详细描述
Cat 模拟 unix 命令 cat，打印文件内容到标准输出

Example:
```
file.Cat("/tmp/test.txt")
```


#### 定义

`Cat(i string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |


### Clean

#### 详细描述
Clean 清理路径中的多余的分隔符和 . 和 ..

Example:
```
file.Clean("/tmp/../tmp/test.txt") // "/tmp/test.txt"
```


#### 定义

`Clean(s string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### Cp

#### 详细描述
Cp 拷贝文件或目录，返回错误

Example:
```
file.Cp("/tmp/test.txt", "/tmp/test2.txt")
file.Cp("/tmp/test", "/root/tmp/test")
```


#### 定义

`Cp(src string, dst string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| src | `string` |   |
| dst | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### Create

#### 详细描述
Create 创建一个文件，返回一个文件结构体引用与错误

Example:
```
f, err = file.Create("/tmp/test.txt")
```


#### 定义

`Create(name string) (*_yakFile, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*_yakFile` |   |
| r2 | `error` |   |


### DetectMIMETypeFromFile

#### 详细描述


#### 定义

`DetectMIMETypeFromFile(path string) (*MIME, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*MIME` |   |
| r2 | `error` |   |


### DetectMIMETypeFromRaw

#### 详细描述


#### 定义

`DetectMIMETypeFromRaw(raw []byte) *MIME`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*MIME` |   |


### Dir

#### 详细描述
Ls 列出一个目录下的所有文件和目录，返回一个文件信息切片

Example:
```
for f in file.Ls("/tmp") {
println(f.Name)
}
```


#### 定义

`Dir(i string) []*utils.FileInfo`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*utils.FileInfo` |   |


### GetBase

#### 详细描述
GetBase 获取文件的基本名

Example:
```
file.GetBase("/tmp/test.txt") // "test.txt"
```


#### 定义

`GetBase(s string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### GetDirPath

#### 详细描述
GetDirPath 返回路径中除最后一个元素之后的路径，这通常是原本路径的目录

Example:
```
file.GetDirPath("/usr/bin/bash") // "/usr/bin/"
```


#### 定义

`GetDirPath(path string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### GetExt

#### 详细描述
GetExt 获取文件的扩展名

Example:
```
file.GetExt("/tmp/test.txt") // ".txt"
```


#### 定义

`GetExt(s string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### IsAbs

#### 详细描述
IsAbs 判断路径是否是绝对路径

Example:
```
file.IsAbs("/usr/bin/bash") // true
file.IsAbs("../../../usr/bin/bash") // false
```


#### 定义

`IsAbs(path string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### IsDir

#### 详细描述
IsDir 判断路径是否存在且是一个目录

Example:
```
// 假设存在 /usr/bin/bash 文件
file.IsDir("/usr/bin") // true
file.IsDir("/usr/bin/bash") // false
```


#### 定义

`IsDir(path string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### IsExisted

#### 详细描述
IsExisted 判断文件或目录是否存在

Example:
```
file.IsExisted("/usr/bin/bash")
```


#### 定义

`IsExisted(path string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### IsFile

#### 详细描述
IsFile 判断路径是否存在且是一个文件

Example:
```
// 假设存在 /usr/bin/bash 文件
file.IsFile("/usr/bin/bash") // true
file.IsFile("/usr/bin") // false
```


#### 定义

`IsFile(path string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### IsLink

#### 详细描述
IsLink 判断文件是否是一个符号链接

Example:
```
假设 /usr/bin/bash 是一个符号链接，指向 /bin/bash
file.IsLink("/usr/bin/bash") // true
file.IsLink("/bin/bash") // false
```


#### 定义

`IsLink(file string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| file | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### Join

#### 详细描述
Join 将任意数量的路径以默认路径分隔符链接在一起

Example:
```
file.Join("/usr", "bin", "bash") // "/usr/bin/bash"
```


#### 定义

`Join(path ...string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### Ls

#### 详细描述
Dir 列出一个目录下的所有文件和目录，返回一个文件信息切片，它是 Ls 的别名

Example:
```
for f in file.Ls("/tmp") {
println(f.Name)
}
```


#### 定义

`Ls(i string) []*utils.FileInfo`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*utils.FileInfo` |   |


### Lstat

#### 详细描述
Lstat 返回一个文件的信息和错误，如果文件是一个符号链接，返回的是符号链接的信息

Example:
```
info, err = file.Lstat("/tmp/test.txt")
desc(info)
```


#### 定义

`Lstat(name string) (os.FileInfo, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `os.FileInfo` |   |
| r2 | `error` |   |


### Mkdir

#### 详细描述
Mkdir 创建一个目录，返回错误

Example:
```
err = file.Mkdir("/tmp/test")
```


#### 定义

`Mkdir(name string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### MkdirAll

#### 详细描述
MkdirAll 创建一个递归创建一个目录，返回错误

Example:
```
// 假设存在 /tmp 目录，不存在 /tmp/test 目录
err = file.MkdirAll("/tmp/test/test2")
```


#### 定义

`MkdirAll(name string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### Mv

#### 详细描述
Mv 重命名一个文件或文件夹，返回错误，这个函数也会移动文件或文件夹，它是 Rename 的别名

! 在 windows 下，无法将文件移动到不同的磁盘

Example:
```
// 假设存在 /tmp/test.txt 文件
err = file.Rename("/tmp/test.txt", "/tmp/test2.txt")
```


#### 定义

`Mv(oldpath string, newpath string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| oldpath | `string` |   |
| newpath | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### NewMultiFileLineReader

#### 详细描述
NewMultiFileLineReader 创建一个多文件读取器，返回一个多文件读取器结构体引用和错误

Example:
```
// 假设存在 /tmp/test.txt 文件，内容为 123
// 假设存在 /tmp/test2.txt 文件，内容为 456
m, err = file.NewMultiFileLineReader("/tmp/test.txt", "/tmp/test2.txt")
for m.Next() {
println(m.Text())
}
```


#### 定义

`NewMultiFileLineReader(files ...string) (*mfreader.MultiFileLineReader, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| files | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*mfreader.MultiFileLineReader` |   |
| r2 | `error` |   |


### Open

#### 详细描述
Open 打开一个文件，返回一个文件结构体引用与错误

Example:
```
f, err = file.Open("/tmp/test.txt")
content, err = file.ReadAll(f)
```


#### 定义

`Open(name string) (*_yakFile, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*_yakFile` |   |
| r2 | `error` |   |


### OpenFile

#### 详细描述
OpenFile 打开一个文件，使用 file.O_CREATE ... 和权限控制，返回一个文件结构体引用与错误

Example:
```
f = file.OpenFile("/tmp/test.txt", file.O_CREATE|file.O_RDWR, 0o777)~; defer f.Close()
```


#### 定义

`OpenFile(name string, flags int, mode os.FileMode) (*_yakFile, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| flags | `int` |   |
| mode | `os.FileMode` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*_yakFile` |   |
| r2 | `error` |   |


### ReadAll

#### 详细描述
ReadAll 从 Reader 读取直到出现错误或 EOF，然后返回字节切片与错误

Example:
```
f, err = file.Open("/tmp/test.txt")
content, err = file.ReadAll(f)
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


### ReadDirInfoInDirectory

#### 详细描述
ReadDirInfoInDirectory 读取一个目录下的所有目录信息，返回一个文件信息切片和错误

Example:
```
for d in file.ReadDirInfoInDirectory("/tmp")~ {
println(d.Name)
}
```


#### 定义

`ReadDirInfoInDirectory(path string) ([]*utils.FileInfo, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*utils.FileInfo` |   |
| r2 | `error` |   |


### ReadFile

#### 详细描述
ReadFile 读取一个文件的所有内容，返回字节切片与错误

Example:
```
content, err = file.ReadFile("/tmp/test.txt")
```


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


### ReadFileInfoInDirectory

#### 详细描述
ReadFileInfoInDirectory 读取一个目录下的所有文件信息，返回一个文件信息切片和错误

Example:
```
for f in file.ReadFileInfoInDirectory("/tmp")~ {
println(f.Name)
}
```


#### 定义

`ReadFileInfoInDirectory(path string) ([]*utils.FileInfo, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*utils.FileInfo` |   |
| r2 | `error` |   |


### ReadLines

#### 详细描述
ReadLines 尝试读取一个文件中的所有行，返回一个字符串切片，会去除BOM头和空行

Example:
```
lines = file.ReadLines("/tmp/test.txt")
```


#### 定义

`ReadLines(i any) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### ReadLinesWithCallback

#### 详细描述
ReadLinesWithCallback 尝试读取一个文件中的所有行，每读取一行，便会调用回调函数，返回错误

Example:
```
err = file.ReadLinesWithCallback("/tmp/test.txt", func(line) { println(line) })
```


#### 定义

`ReadLinesWithCallback(i any, callback func(string)) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |
| callback | `func(string)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### Remove

#### 详细描述
Remove 删除路径及其包含的所有子路径

Example:
```
// 假设存在 /tmp/test/test.txt 文件和 /tmp/test/test2.txt 文件
err = file.Remove("/tmp/test")
```


#### 定义

`Remove(path string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### Rename

#### 详细描述
Rename 重命名一个文件或文件夹，返回错误，这个函数也会移动文件或文件夹

! 在 windows 下，无法将文件移动到不同的磁盘

Example:
```
// 假设存在 /tmp/test.txt 文件
err = file.Rename("/tmp/test.txt", "/tmp/test2.txt")
```


#### 定义

`Rename(oldpath string, newpath string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| oldpath | `string` |   |
| newpath | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### Rm

#### 详细描述
Rm 删除路径及其包含的所有子路径，它是 Remove 的别名

Example:
```
// 假设存在 /tmp/test/test.txt 文件和 /tmp/test/test2.txt 文件
err = file.Remove("/tmp/test")
```


#### 定义

`Rm(path string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### Save

#### 详细描述
Save 将字符串或字节切片或字符串切片写入到文件中，如果文件不存在则创建，如果文件存在则覆盖，返回错误

Example:
```
file.Save("/tmp/test.txt", "hello yak")
```


#### 定义

`Save(fileName string, i any) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fileName | `string` |   |
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### SaveJson

#### 详细描述
SaveJson 将字符串或字节切片或字符串切片写入到文件中，如果文件不存在则创建，如果文件存在则覆盖，返回错误

与 Save 不同的是，如果传入的参数是其他类型，会尝试将其序列化为 json 字符再写入到文件中

Example:
```
file.SaveJson("/tmp/test.txt", "hello yak")
```


#### 定义

`SaveJson(name string, i any) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### Split

#### 详细描述
Split 以操作系统的默认路径分隔符分割路径，返回目录和文件名

Example:
```
file.Split("/usr/bin/bash") // "/usr/bin", "bash"
```


#### 定义

`Split(path string) (string, string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `string` |   |


### Stat

#### 详细描述
Stat 返回一个文件的信息和错误

Example:
```
info, err = file.Stat("/tmp/test.txt")
desc(info)
```


#### 定义

`Stat(name string) (os.FileInfo, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `os.FileInfo` |   |
| r2 | `error` |   |


### TailF

#### 详细描述
TailF 模拟 unix 命令 tail -f，执行这个函数会一直阻塞，打印文件内容到标准输出，如果文件有变化，会自动打印新的内容

Example:
```
file.TailF("/tmp/test.txt")
```


#### 定义

`TailF(i string, line func(i string))`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |
| line | `func(i string)` |   |


### TempFile

#### 详细描述
TempFile 创建一个临时文件，返回一个文件结构体引用与错误

Example:
```
f, err = file.TempFile()
die(err)
defer f.Close()
f.WriteString("hello yak")
```


#### 定义

`TempFile(dirPart ...string) (*_yakFile, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| dirPart | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*_yakFile` |   |
| r2 | `error` |   |


### TempFileName

#### 详细描述
TempFileName 创建一个临时文件，返回一个文件名与错误

Example:
```
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
```


#### 定义

`TempFileName(pattern ...string) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pattern | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


### Walk

#### 详细描述
Walk 遍历一个目录下的所有文件和目录，返回错误

Example:
```
file.Walk("/tmp", func(info) {println(info.Name); return true})~
```


#### 定义

`Walk(uPath string, i func(info *utils.FileInfo) bool) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| uPath | `string` |   |
| i | `func(info *utils.FileInfo) bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


