# filesys

|函数名|函数描述/介绍|
|:------|:--------|
| [filesys.CopyToRefLocal](#copytoreflocal) ||
| [filesys.CopyToTemporary](#copytotemporary) ||
| [filesys.Glance](#glance) |Glance is for quickly viewing the basic info in fs |
| [filesys.Recursive](#recursive) |Recursive recursively walk through the file system  raw: the root path  opts: options  return: error    |
| [filesys.dir](#dir) ||
| [filesys.onDirStat](#ondirstat) |onDirStat will be called when the walker met one directory. |
| [filesys.onFS](#onfs) ||
| [filesys.onFileStat](#onfilestat) |onFileStat will be called when the walker met one file. |
| [filesys.onFileStatEx](#onfilestatex) |onFileStatEx will be called when the walker met one file and control stop |
| [filesys.onReady](#onready) |onReady will be called when the walker is ready to start walking. |
| [filesys.onStat](#onstat) |onStat will be called when the walker met one file description. |
| [filesys.onStatEx](#onstatex) |onStatEx will be called when the walker met one file description. |


## 函数定义
### CopyToRefLocal

#### 详细描述


#### 定义

`CopyToRefLocal(srcFs filesys_interface.FileSystem, dest string) (*RelLocalFs, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| srcFs | `filesys_interface.FileSystem` |   |
| dest | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*RelLocalFs` |   |
| r2 | `error` |   |


### CopyToTemporary

#### 详细描述


#### 定义

`CopyToTemporary(srcFs filesys_interface.FileSystem) *RelLocalFs`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| srcFs | `filesys_interface.FileSystem` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*RelLocalFs` |   |


### Glance

#### 详细描述
Glance is for quickly viewing the basic info in fs


#### 定义

`Glance(localfile any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| localfile | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### Recursive

#### 详细描述
Recursive recursively walk through the file system

raw: the root path

opts: options

return: error



Example:
```
err := filesys.Recursive( //

	"testdata",
	filesys.dir(["cc", "dd"], filesys.onFileStat((name, info) => {})),

)
```


#### 定义

`Recursive(raw string, opts ...Option) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `string` |   |
| opts | `...Option` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### dir

#### 详细描述


#### 定义

`dir(globDir string, opts ...Option) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| globDir | `string` |   |
| opts | `...Option` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### onDirStat

#### 详细描述
onDirStat will be called when the walker met one directory.


#### 定义

`onDirStat(h func(pathname string, info os.FileInfo)) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `func(pathname string, info os.FileInfo)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### onFS

#### 详细描述


#### 定义

`onFS(f fi.FileSystem) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `fi.FileSystem` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### onFileStat

#### 详细描述
onFileStat will be called when the walker met one file.


#### 定义

`onFileStat(h func(pathname string, info os.FileInfo)) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `func(pathname string, info os.FileInfo)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### onFileStatEx

#### 详细描述
onFileStatEx will be called when the walker met one file and control stop


#### 定义

`onFileStatEx(h func(pathname string, info os.FileInfo, stop func())) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `func(pathname string, info os.FileInfo, stop func())` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### onReady

#### 详细描述
onReady will be called when the walker is ready to start walking.


#### 定义

`onReady(h func(name string, isDir bool)) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `func(name string, isDir bool)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### onStat

#### 详细描述
onStat will be called when the walker met one file description.


#### 定义

`onStat(h func(isDir bool, pathname string, info os.FileInfo)) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `func(isDir bool, pathname string, info os.FileInfo)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### onStatEx

#### 详细描述
onStatEx will be called when the walker met one file description.


#### 定义

`onStatEx(h func(isDir bool, pathname string, info os.FileInfo, stop func())) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `func(isDir bool, pathname string, info os.FileInfo, stop func())` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


