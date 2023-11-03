# file

|成员函数|函数描述/介绍|
|:------|:--------|
| [file.Abs](#abs) ||
| [file.Cat](#cat) ||
| [file.Cp](#cp) |Copy the src file to dst. Any existing file will be overwritten and will not copy file attributes. |
| [file.Create](#create) ||
| [file.Dir](#dir) ||
| [file.GetDirPath](#getdirpath) |Dir returns all but the last element of path, typically the path's directory. After dropping the final element, Dir calls Clean on the path and traili...|
| [file.IsAbs](#isabs) |IsAbs reports whether the path is absolute. |
| [file.IsDir](#isdir) ||
| [file.IsExisted](#isexisted) ||
| [file.IsFile](#isfile) ||
| [file.IsLink](#islink) ||
| [file.Join](#join) |Join joins any number of path elements into a single path, separating them with an OS specific Separator. Empty elements are ignored. The result is Cl...|
| [file.Ls](#ls) ||
| [file.Lstat](#lstat) ||
| [file.Mkdir](#mkdir) ||
| [file.MkdirAll](#mkdirall) ||
| [file.Mv](#mv) |Rename renames (moves) oldpath to newpath. If newpath already exists and is not a directory, Rename replaces it. OS-specific restrictions may apply wh...|
| [file.NewMultiFileLineReader](#newmultifilelinereader) ||
| [file.Open](#open) ||
| [file.OpenFile](#openfile) ||
| [file.ReadAll](#readall) |ReadAll reads from r until an error or EOF and returns the data it read. A successful call returns err == nil, not err == EOF. Because ReadAll is defi...|
| [file.ReadDirInfoInDirectory](#readdirinfoindirectory) ||
| [file.ReadFile](#readfile) |ReadFile reads the file named by filename and returns the contents. A successful call returns err == nil, not err == EOF. Because ReadFile reads the w...|
| [file.ReadFileInfoInDirectory](#readfileinfoindirectory) ||
| [file.ReadLines](#readlines) ||
| [file.Remove](#remove) |RemoveAll removes path and any children it contains. It removes everything it can but returns the first error it encounters. If the path does not exis...|
| [file.Rename](#rename) |Rename renames (moves) oldpath to newpath. If newpath already exists and is not a directory, Rename replaces it. OS-specific restrictions may apply wh...|
| [file.Rm](#rm) |RemoveAll removes path and any children it contains. It removes everything it can but returns the first error it encounters. If the path does not exis...|
| [file.Save](#save) ||
| [file.SaveJson](#savejson) ||
| [file.Split](#split) |Split splits path immediately following the final Separator, separating it into a directory and file name component. If there is no Separator in path,...|
| [file.Stat](#stat) ||
| [file.TailF](#tailf) ||
| [file.TempFile](#tempfile) ||
| [file.TempFileName](#tempfilename) ||


## 函数定义
### Abs

#### 详细描述


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


#### 定义

`Cat(i string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |


### Cp

#### 详细描述
Copy the src file to dst. Any existing file will be overwritten and will not
copy file attributes.


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


### Dir

#### 详细描述


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


### GetDirPath

#### 详细描述
Dir returns all but the last element of path, typically the path's directory.
After dropping the final element, Dir calls Clean on the path and trailing
slashes are removed.
If the path is empty, Dir returns ".".
If the path consists entirely of separators, Dir returns a single separator.
The returned path does not end in a separator unless it is the root directory.


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


### IsAbs

#### 详细描述
IsAbs reports whether the path is absolute.


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


#### 定义

`IsDir(file string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| file | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### IsExisted

#### 详细描述


#### 定义

`IsExisted(name string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### IsFile

#### 详细描述


#### 定义

`IsFile(file string) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| file | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### IsLink

#### 详细描述


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
Join joins any number of path elements into a single path,
separating them with an OS specific Separator. Empty elements
are ignored. The result is Cleaned. However, if the argument
list is empty or all its elements are empty, Join returns
an empty string.
On Windows, the result will only be a UNC path if the first
non-empty element is a UNC path.


#### 定义

`Join(elem ...string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| elem | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### Ls

#### 详细描述


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


#### 定义

`Lstat(name string) (FileInfo, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `FileInfo` |   |
| r2 | `error` |   |


### Mkdir

#### 详细描述


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
Rename renames (moves) oldpath to newpath.
If newpath already exists and is not a directory, Rename replaces it.
OS-specific restrictions may apply when oldpath and newpath are in different directories.
Even within the same directory, on non-Unix platforms Rename is not an atomic operation.
If there is an error, it will be of type *LinkError.


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


#### 定义

`NewMultiFileLineReader(files ...string) (*MultiFileLineReader, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| files | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*MultiFileLineReader` |   |
| r2 | `error` |   |


### Open

#### 详细描述


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


#### 定义

`OpenFile(name string, flag int, perm os.FileMode) (*_yakFile, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| flag | `int` |   |
| perm | `os.FileMode` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*_yakFile` |   |
| r2 | `error` |   |


### ReadAll

#### 详细描述
ReadAll reads from r until an error or EOF and returns the data it read.
A successful call returns err == nil, not err == EOF. Because ReadAll is
defined to read from src until EOF, it does not treat an EOF from Read
as an error to be reported.

Deprecated: As of Go 1.16, this function simply calls io.ReadAll.


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


#### 定义

`ReadDirInfoInDirectory(p string) ([]*FileInfo, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| p | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*FileInfo` |   |
| r2 | `error` |   |


### ReadFile

#### 详细描述
ReadFile reads the file named by filename and returns the contents.
A successful call returns err == nil, not err == EOF. Because ReadFile
reads the whole file, it does not treat an EOF from Read as an error
to be reported.

Deprecated: As of Go 1.16, this function simply calls os.ReadFile.


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


#### 定义

`ReadFileInfoInDirectory(p string) ([]*FileInfo, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| p | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*FileInfo` |   |
| r2 | `error` |   |


### ReadLines

#### 详细描述


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


### Remove

#### 详细描述
RemoveAll removes path and any children it contains.
It removes everything it can but returns the first error
it encounters. If the path does not exist, RemoveAll
returns nil (no error).
If there is an error, it will be of type *PathError.


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
Rename renames (moves) oldpath to newpath.
If newpath already exists and is not a directory, Rename replaces it.
OS-specific restrictions may apply when oldpath and newpath are in different directories.
Even within the same directory, on non-Unix platforms Rename is not an atomic operation.
If there is an error, it will be of type *LinkError.


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
RemoveAll removes path and any children it contains.
It removes everything it can but returns the first error
it encounters. If the path does not exist, RemoveAll
returns nil (no error).
If there is an error, it will be of type *PathError.


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
Split splits path immediately following the final Separator,
separating it into a directory and file name component.
If there is no Separator in path, Split returns an empty dir
and file set to path.
The returned values have the property that path = dir+file.


#### 定义

`Split(path string) (dir string, file string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| dir | `string` |   |
| file | `string` |   |


### Stat

#### 详细描述


#### 定义

`Stat(name string) (FileInfo, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `FileInfo` |   |
| r2 | `error` |   |


### TailF

#### 详细描述


#### 定义

`TailF(i string, line func(i string))`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |
| line | `func(i string)` |   |


### TempFile

#### 详细描述


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


#### 定义

`TempFileName() (string, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


