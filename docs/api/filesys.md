# filesys {#library-filesys}

`filesys` 库提供文件系统抽象与递归遍历能力，统一处理本地目录、ZIP、内存等不同来源的文件系统，常用于目录扫描、批量文件处理与跨文件系统拷贝。

典型使用场景：

- 递归遍历：`filesys.Recursive(path, opts...)` 递归遍历目录，配合 `filesys.onFileStat` / `filesys.onDirStat` / `filesys.onStat` 等回调逐项处理，`filesys.dir` 指定 glob，`filesys.onStatEx` 支持中途停止。
- 跨文件系统：`filesys.CopyToRefLocal` / `filesys.CopyToTemporary` 把任意文件系统拷贝到本地/临时目录，`filesys.Glance` 快速预览文件。

与相邻库的关系：`filesys` 是文件系统抽象层，比 `file` 更适合统一处理 ZIP/内存等虚拟文件系统，常与 `diff`（差异比对）、`zip`（归档）、`ssa`（代码分析）配合。

> 共 12 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [filesys.CopyToRefLocal](#copytoreflocal) | `srcFs filesys_interface.FileSystem, dest string` | `*RelLocalFs, error` | 把一个源文件系统的全部内容拷贝到指定的本地目录，并返回指向该目录的文件系统对象 |
| [filesys.CopyToTemporary](#copytotemporary) | `srcFs filesys_interface.FileSystem` | `*RelLocalFs` | 把一个源文件系统的全部内容拷贝到一个新建的临时目录，并返回指向该临时目录的文件系统对象 |
| [filesys.Glance](#glance) | `localfile any` | `string` | 快速查看一个文件系统或本地目录的概览信息（统计与树形结构） |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [filesys.Recursive](#recursive) | `raw string, opts ...Option` | `error` | 递归遍历指定路径下的所有文件和目录，对每个条目按配置的回调进行处理 |

## 函数详情

### CopyToRefLocal {#copytoreflocal}

```go
CopyToRefLocal(srcFs filesys_interface.FileSystem, dest string) (*RelLocalFs, error)
```

把一个源文件系统的全部内容拷贝到指定的本地目录，并返回指向该目录的文件系统对象

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| srcFs | `filesys_interface.FileSystem` | 源文件系统对象 |
| dest | `string` | 目标本地目录路径（不存在时会自动创建） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*RelLocalFs` | 指向目标本地目录的文件系统对象 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 将一个内存 zip 文件系统拷贝到本地目录
zfs = filesys.NewZipFSFromLocal("/tmp/abc.zip")~
localFs = filesys.CopyToRefLocal(zfs, "/tmp/abc_extracted")~
``````````````

---

### CopyToTemporary {#copytotemporary}

```go
CopyToTemporary(srcFs filesys_interface.FileSystem) *RelLocalFs
```

把一个源文件系统的全部内容拷贝到一个新建的临时目录，并返回指向该临时目录的文件系统对象

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| srcFs | `filesys_interface.FileSystem` | 源文件系统对象 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*RelLocalFs` | 指向新建临时目录的文件系统对象 |

**示例**

``````````````yak
// 将一个内存 zip 文件系统拷贝到临时目录
zfs = filesys.NewZipFSFromLocal("/tmp/abc.zip")~
tmpFs = filesys.CopyToTemporary(zfs)
``````````````

---

### Glance {#glance}

```go
Glance(localfile any) string
```

快速查看一个文件系统或本地目录的概览信息（统计与树形结构）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| localfile | `any` | 本地目录路径，或一个 FileSystem 对象 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 包含目录统计与树形视图的概览字符串 |

**示例**

``````````````yak
// 在临时目录创建文件后查看概览，输出应包含统计信息
root = file.Join(os.TempDir(), "yak-filesys-glance")
file.MkdirAll(root)
file.Save(file.Join(root, "a.txt"), "A")~
summary = filesys.Glance(root)
assert str.Contains(summary, "total:"), "Glance output should contain a total summary"
file.Remove(root)
``````````````

---

## 可变参数函数详情

### Recursive {#recursive}

```go
Recursive(raw string, opts ...Option) error
```

递归遍历指定路径下的所有文件和目录，对每个条目按配置的回调进行处理

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| raw | `string` | 起始遍历的根路径 |

**可选参数**

可作为可变参数 `opts ...Option` 传入选项；共 8 个可用选项，详见 [Option 选项列表](#option-option)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

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

---

## 可变参数选项列表

以下按选项类型汇总全部可变参数选项(原先重复在各主函数下的选项表已收拢到此处)：

### 1. 类型：Option {#option-option}

涉及到的函数有：[filesys.Recursive](#recursive)

|选项函数|参数|返回值|说明|
|:--|:--|:--|:--|
| `filesys.dir` | `globDir string, opts ...Option` | `Option` | 为匹配指定 glob 目录的子树设置一组单独的遍历选项 |
| `filesys.onDirStat` | `h func(pathname string, info os.FileInfo)` | `Option` | 设置遍历到每个目录时调用的回调 |
| `filesys.onFS` | `f fi.FileSystem` | `Option` | 设置遍历所使用的文件系统对象（如 zip 文件系统、内存文件系统等） |
| `filesys.onFileStat` | `h func(pathname string, info os.FileInfo)` | `Option` | 设置遍历到每个文件（不含目录）时调用的回调 |
| `filesys.onFileStatEx` | `h func(pathname string, info os.FileInfo, stop func())` | `Option` | 设置遍历到每个文件时调用的回调，并提供一个 stop 函数用于提前终止遍历 |
| `filesys.onReady` | `h func(name string, isDir bool)` | `Option` | 设置遍历开始（准备就绪）时调用的回调 |
| `filesys.onStat` | `h func(isDir bool, pathname string, info os.FileInfo)` | `Option` | 设置遍历到每个条目（文件或目录）时调用的回调 |
| `filesys.onStatEx` | `h func(isDir bool, pathname string, info os.FileInfo, stop func())` | `Option` | 设置遍历到每个条目时调用的回调，并提供一个 stop 函数用于提前终止遍历 |

