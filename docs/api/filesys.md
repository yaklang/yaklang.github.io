# filesys

|函数名|函数描述/介绍|
|:------|:--------|
| [filesys.CopyToRefLocal](#copytoreflocal) ||
| [filesys.CopyToTemporary](#copytotemporary) ||
| [filesys.Glance](#glance) |Glance 快速查看一个文件系统或本地目录的概览信息（统计与树形结构） 参数: - localfile: 本地目录路径，或一个 FileSystem 对象 返回值: - 包含目录统计与树形视图的概览字符串|
| [filesys.Recursive](#recursive) |Recursive 递归遍历指定路径下的所有文件和目录，对每个条目按配置的回调进行处理 参数: - raw: 起始遍历的根路径 - opts: 遍历选项（如 filesys.onFileStat、filesys.onDirStat、filesys.dir 等） 返回值: - 错误信息|
| [filesys.dir](#dir) |dir 为匹配指定 glob 目录的子树设置一组单独的遍历选项 参数: - globDir: 目录匹配的 glob 模式 - opts: 对匹配到的子目录生效的遍历选项 返回值: - 一个遍历配置选项|
| [filesys.onDirStat](#ondirstat) |onDirStat 设置遍历到每个目录时调用的回调 参数: - h: 回调函数，参数为 (目录路径, 文件信息) 返回值: - 一个遍历配置选项|
| [filesys.onFS](#onfs) |onFS 设置遍历所使用的文件系统对象（如 zip 文件系统、内存文件系统等） 参数: - f: 待遍历的文件系统对象 返回值: - 一个遍历配置选项|
| [filesys.onFileStat](#onfilestat) |onFileStat 设置遍历到每个文件（不含目录）时调用的回调 参数: - h: 回调函数，参数为 (文件路径, 文件信息) 返回值: - 一个遍历配置选项|
| [filesys.onFileStatEx](#onfilestatex) |onFileStatEx 设置遍历到每个文件时调用的回调，并提供一个 stop 函数用于提前终止遍历 参数: - h: 回调函数，参数为 (文件路径, 文件信息, stop 终止函数) 返回值: - 一个遍历配置选项|
| [filesys.onReady](#onready) |onReady 设置遍历开始（准备就绪）时调用的回调 参数: - h: 回调函数，参数为 (名称, 是否为目录) 返回值: - 一个遍历配置选项|
| [filesys.onStat](#onstat) |onStat 设置遍历到每个条目（文件或目录）时调用的回调 参数: - h: 回调函数，参数为 (是否为目录, 路径, 文件信息) 返回值: - 一个遍历配置选项|
| [filesys.onStatEx](#onstatex) |onStatEx 设置遍历到每个条目时调用的回调，并提供一个 stop 函数用于提前终止遍历 参数: - h: 回调函数，参数为 (是否为目录, 路径, 文件信息, stop 终止函数) 返回值: - 一个遍历配置选项|


## 函数定义
### CopyToRefLocal

#### 详细描述
暂无描述

#### 定义

`CopyToRefLocal(srcFs filesys_interface.FileSystem, dest string) (*RelLocalFs, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| srcFs | `filesys_interface.FileSystem` |  |
| dest | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*RelLocalFs` |  |
| r2 | `error` |  |


### CopyToTemporary

#### 详细描述
暂无描述

#### 定义

`CopyToTemporary(srcFs filesys_interface.FileSystem) *RelLocalFs`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| srcFs | `filesys_interface.FileSystem` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*RelLocalFs` |  |


### Glance

#### 详细描述
Glance 快速查看一个文件系统或本地目录的概览信息（统计与树形结构）

参数:

  - localfile: 本地目录路径，或一个 FileSystem 对象



返回值:

  - 包含目录统计与树形视图的概览字符串




Example:

``````````````yak
// 在临时目录创建文件后查看概览，输出应包含统计信息
root = file.Join(os.TempDir(), "yak-filesys-glance")
file.MkdirAll(root)
file.Save(file.Join(root, "a.txt"), "A")~
summary = filesys.Glance(root)
assert str.Contains(summary, "total:"), "Glance output should contain a total summary"
file.Remove(root)
``````````````


#### 定义

`Glance(localfile any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| localfile | `any` | 本地目录路径，或一个 FileSystem 对象 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 包含目录统计与树形视图的概览字符串 |


### Recursive

#### 详细描述
Recursive 递归遍历指定路径下的所有文件和目录，对每个条目按配置的回调进行处理

参数:

  - raw: 起始遍历的根路径

  - opts: 遍历选项（如 filesys.onFileStat、filesys.onDirStat、filesys.dir 等）



返回值:

  - 错误信息




Example:

``````````````yak
// 在临时目录创建两个文件，递归统计文件数量
root = file.Join(os.TempDir(), "yak-filesys-recursive")
file.MkdirAll(root)
file.Save(file.Join(root, "a.txt"), "A")~
file.Save(file.Join(root, "b.txt"), "B")~
count = 0
filesys.Recursive(root, filesys.onFileStat((name, info) => { count++ }))~
assert count == 2, "Recursive should visit both files"
file.Remove(root)
``````````````


#### 定义

`Recursive(raw string, opts ...Option) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `string` | 起始遍历的根路径 |
| opts | `...Option` | 遍历选项（如 filesys.onFileStat、filesys.onDirStat、filesys.dir 等） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### dir

#### 详细描述
dir 为匹配指定 glob 目录的子树设置一组单独的遍历选项

参数:

  - globDir: 目录匹配的 glob 模式

  - opts: 对匹配到的子目录生效的遍历选项



返回值:

  - 一个遍历配置选项




Example:

``````````````yak
filesys.Recursive("testdata", filesys.dir("cc", filesys.onFileStat((name, info) => {})))~
``````````````


#### 定义

`dir(globDir string, opts ...Option) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| globDir | `string` | 目录匹配的 glob 模式 |
| opts | `...Option` | 对匹配到的子目录生效的遍历选项 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 一个遍历配置选项 |


### onDirStat

#### 详细描述
onDirStat 设置遍历到每个目录时调用的回调

参数:

  - h: 回调函数，参数为 (目录路径, 文件信息)



返回值:

  - 一个遍历配置选项




Example:

``````````````yak
filesys.Recursive("testdata", filesys.onDirStat((pathname, info) => { println(pathname) }))~
``````````````


#### 定义

`onDirStat(h func(pathname string, info os.FileInfo)) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `func(pathname string, info os.FileInfo)` | 回调函数，参数为 (目录路径, 文件信息) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 一个遍历配置选项 |


### onFS

#### 详细描述
onFS 设置遍历所使用的文件系统对象（如 zip 文件系统、内存文件系统等）

参数:

  - f: 待遍历的文件系统对象



返回值:

  - 一个遍历配置选项




Example:

``````````````yak
zfs = filesys.NewZipFSFromLocal("/tmp/abc.zip")~
filesys.Recursive(".", filesys.onFS(zfs), filesys.onFileStat((name, info) => { println(name) }))~
``````````````


#### 定义

`onFS(f fi.FileSystem) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `fi.FileSystem` | 待遍历的文件系统对象 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 一个遍历配置选项 |


### onFileStat

#### 详细描述
onFileStat 设置遍历到每个文件（不含目录）时调用的回调

参数:

  - h: 回调函数，参数为 (文件路径, 文件信息)



返回值:

  - 一个遍历配置选项




Example:

``````````````yak
filesys.Recursive("testdata", filesys.onFileStat((pathname, info) => { println(pathname) }))~
``````````````


#### 定义

`onFileStat(h func(pathname string, info os.FileInfo)) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `func(pathname string, info os.FileInfo)` | 回调函数，参数为 (文件路径, 文件信息) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 一个遍历配置选项 |


### onFileStatEx

#### 详细描述
onFileStatEx 设置遍历到每个文件时调用的回调，并提供一个 stop 函数用于提前终止遍历

参数:

  - h: 回调函数，参数为 (文件路径, 文件信息, stop 终止函数)



返回值:

  - 一个遍历配置选项




Example:

``````````````yak
filesys.Recursive("testdata", filesys.onFileStatEx((pathname, info, stop) => { stop() }))~
``````````````


#### 定义

`onFileStatEx(h func(pathname string, info os.FileInfo, stop func())) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `func(pathname string, info os.FileInfo, stop func())` | 回调函数，参数为 (文件路径, 文件信息, stop 终止函数) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 一个遍历配置选项 |


### onReady

#### 详细描述
onReady 设置遍历开始（准备就绪）时调用的回调

参数:

  - h: 回调函数，参数为 (名称, 是否为目录)



返回值:

  - 一个遍历配置选项




Example:

``````````````yak
filesys.Recursive("testdata", filesys.onReady((name, isDir) => { println(name) }))~
``````````````


#### 定义

`onReady(h func(name string, isDir bool)) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `func(name string, isDir bool)` | 回调函数，参数为 (名称, 是否为目录) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 一个遍历配置选项 |


### onStat

#### 详细描述
onStat 设置遍历到每个条目（文件或目录）时调用的回调

参数:

  - h: 回调函数，参数为 (是否为目录, 路径, 文件信息)



返回值:

  - 一个遍历配置选项




Example:

``````````````yak
filesys.Recursive("testdata", filesys.onStat((isDir, pathname, info) => { println(pathname) }))~
``````````````


#### 定义

`onStat(h func(isDir bool, pathname string, info os.FileInfo)) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `func(isDir bool, pathname string, info os.FileInfo)` | 回调函数，参数为 (是否为目录, 路径, 文件信息) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 一个遍历配置选项 |


### onStatEx

#### 详细描述
onStatEx 设置遍历到每个条目时调用的回调，并提供一个 stop 函数用于提前终止遍历

参数:

  - h: 回调函数，参数为 (是否为目录, 路径, 文件信息, stop 终止函数)



返回值:

  - 一个遍历配置选项




Example:

``````````````yak
filesys.Recursive("testdata", filesys.onStatEx((isDir, pathname, info, stop) => { stop() }))~
``````````````


#### 定义

`onStatEx(h func(isDir bool, pathname string, info os.FileInfo, stop func())) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `func(isDir bool, pathname string, info os.FileInfo, stop func())` | 回调函数，参数为 (是否为目录, 路径, 文件信息, stop 终止函数) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 一个遍历配置选项 |


