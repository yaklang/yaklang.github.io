# file

|成员函数|函数描述/介绍|
|:------|:--------|
| [file.Abs](#Abs) ||
| [file.Cat](#Cat) ||
| [file.Cp](#Cp) |Copy the src file to dst. Any existing file will be overwritten and will notcopy file attributes.|
| [file.Create](#Create) ||
| [file.Dir](#Dir) ||
| [file.GetDirPath](#GetDirPath) |Dir returns all but the last element of path, typically the path's directory.After dropping the final element, Dir calls Clean on the path and trailingslashes are removed.If the path is empty, Dir returns ".".If the path consists entirely of separators, Dir returns a single separator.The returned path does not end in a separator unless it is the root directory.|
| [file.IsAbs](#IsAbs) |IsAbs reports whether the path is absolute.|
| [file.IsDir](#IsDir) ||
| [file.IsExisted](#IsExisted) ||
| [file.IsFile](#IsFile) ||
| [file.IsLink](#IsLink) ||
| [file.Join](#Join) |Join joins any number of path elements into a single path,separating them with an OS specific Separator. Empty elementsare ignored. The result is Cleaned. However, if the argumentlist is empty or all its elements are empty, Join returnsan empty string.On Windows, the result will only be a UNC path if the firstnon-empty element is a UNC path.|
| [file.Ls](#Ls) ||
| [file.Lstat](#Lstat) ||
| [file.Mkdir](#Mkdir) ||
| [file.MkdirAll](#MkdirAll) ||
| [file.Mv](#Mv) |Rename renames (moves) oldpath to newpath.If newpath already exists and is not a directory, Rename replaces it.OS-specific restrictions may apply when oldpath and newpath are in different directories.Even within the same directory, on non-Unix platforms Rename is not an atomic operation.If there is an error, it will be of type *LinkError.|
| [file.NewMultiFileLineReader](#NewMultiFileLineReader) ||
| [file.Open](#Open) ||
| [file.OpenFile](#OpenFile) ||
| [file.ReadAll](#ReadAll) |ReadAll reads from r until an error or EOF and returns the data it read.A successful call returns err == nil, not err == EOF. Because ReadAll isdefined to read from src until EOF, it does not treat an EOF from Readas an error to be reported.Deprecated: As of Go 1.16, this function simply calls io.ReadAll.|
| [file.ReadDirInfoInDirectory](#ReadDirInfoInDirectory) ||
| [file.ReadFile](#ReadFile) |ReadFile reads the file named by filename and returns the contents.A successful call returns err == nil, not err == EOF. Because ReadFilereads the whole file, it does not treat an EOF from Read as an errorto be reported.Deprecated: As of Go 1.16, this function simply calls os.ReadFile.|
| [file.ReadFileInfoInDirectory](#ReadFileInfoInDirectory) ||
| [file.ReadLines](#ReadLines) ||
| [file.Remove](#Remove) |RemoveAll removes path and any children it contains.It removes everything it can but returns the first errorit encounters. If the path does not exist, RemoveAllreturns nil (no error).If there is an error, it will be of type *PathError.|
| [file.Rename](#Rename) |Rename renames (moves) oldpath to newpath.If newpath already exists and is not a directory, Rename replaces it.OS-specific restrictions may apply when oldpath and newpath are in different directories.Even within the same directory, on non-Unix platforms Rename is not an atomic operation.If there is an error, it will be of type *LinkError.|
| [file.Rm](#Rm) |RemoveAll removes path and any children it contains.It removes everything it can but returns the first errorit encounters. If the path does not exist, RemoveAllreturns nil (no error).If there is an error, it will be of type *PathError.|
| [file.Save](#Save) ||
| [file.SaveJson](#SaveJson) ||
| [file.Split](#Split) |Split splits path immediately following the final Separator,separating it into a directory and file name component.If there is no Separator in path, Split returns an empty dirand file set to path.The returned values have the property that path = dir+file.|
| [file.Stat](#Stat) ||
| [file.TailF](#TailF) ||
| [file.TempFile](#TempFile) ||
| [file.TempFileName](#TempFileName) ||


## 函数定义
### file.Abs

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


### file.Cat

#### 详细描述


#### 定义

`Cat(i string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |


### file.Cp

#### 详细描述
Copy the src file to dst. Any existing file will be overwritten and will notcopy file attributes.

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


### file.Create

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


### file.Dir

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


### file.GetDirPath

#### 详细描述
Dir returns all but the last element of path, typically the path's directory.After dropping the final element, Dir calls Clean on the path and trailingslashes are removed.If the path is empty, Dir returns ".".If the path consists entirely of separators, Dir returns a single separator.The returned path does not end in a separator unless it is the root directory.

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


### file.IsAbs

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


### file.IsDir

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


### file.IsExisted

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


### file.IsFile

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


### file.IsLink

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


### file.Join

#### 详细描述
Join joins any number of path elements into a single path,separating them with an OS specific Separator. Empty elementsare ignored. The result is Cleaned. However, if the argumentlist is empty or all its elements are empty, Join returnsan empty string.On Windows, the result will only be a UNC path if the firstnon-empty element is a UNC path.

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


### file.Ls

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


### file.Lstat

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


### file.Mkdir

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


### file.MkdirAll

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


### file.Mv

#### 详细描述
Rename renames (moves) oldpath to newpath.If newpath already exists and is not a directory, Rename replaces it.OS-specific restrictions may apply when oldpath and newpath are in different directories.Even within the same directory, on non-Unix platforms Rename is not an atomic operation.If there is an error, it will be of type *LinkError.

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


### file.NewMultiFileLineReader

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


### file.Open

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


### file.OpenFile

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


### file.ReadAll

#### 详细描述
ReadAll reads from r until an error or EOF and returns the data it read.A successful call returns err == nil, not err == EOF. Because ReadAll isdefined to read from src until EOF, it does not treat an EOF from Readas an error to be reported.Deprecated: As of Go 1.16, this function simply calls io.ReadAll.

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


### file.ReadDirInfoInDirectory

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


### file.ReadFile

#### 详细描述
ReadFile reads the file named by filename and returns the contents.A successful call returns err == nil, not err == EOF. Because ReadFilereads the whole file, it does not treat an EOF from Read as an errorto be reported.Deprecated: As of Go 1.16, this function simply calls os.ReadFile.

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


### file.ReadFileInfoInDirectory

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


### file.ReadLines

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


### file.Remove

#### 详细描述
RemoveAll removes path and any children it contains.It removes everything it can but returns the first errorit encounters. If the path does not exist, RemoveAllreturns nil (no error).If there is an error, it will be of type *PathError.

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


### file.Rename

#### 详细描述
Rename renames (moves) oldpath to newpath.If newpath already exists and is not a directory, Rename replaces it.OS-specific restrictions may apply when oldpath and newpath are in different directories.Even within the same directory, on non-Unix platforms Rename is not an atomic operation.If there is an error, it will be of type *LinkError.

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


### file.Rm

#### 详细描述
RemoveAll removes path and any children it contains.It removes everything it can but returns the first errorit encounters. If the path does not exist, RemoveAllreturns nil (no error).If there is an error, it will be of type *PathError.

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


### file.Save

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


### file.SaveJson

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


### file.Split

#### 详细描述
Split splits path immediately following the final Separator,separating it into a directory and file name component.If there is no Separator in path, Split returns an empty dirand file set to path.The returned values have the property that path = dir+file.

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


### file.Stat

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


### file.TailF

#### 详细描述


#### 定义

`TailF(i string, line func(i string))`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |
| line | `func(i string)` |   |


### file.TempFile

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


### file.TempFileName

#### 详细描述


#### 定义

`TempFileName() (string, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


