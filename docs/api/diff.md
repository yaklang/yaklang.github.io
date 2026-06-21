# diff {#library-diff}

`diff` 库用于比较两份内容的差异，支持文本、目录、文件系统与 ZIP 包级别的对比，常用于版本变更分析、补丁比对与固件/代码审计。

典型使用场景：

- 文本差异：`diff.Diff(raw1, raw2, handler...)` 比较两段内容。
- 目录与归档：`diff.DiffDir` 比较两个目录，`diff.DiffZIPFile` 比较两个 ZIP 包，`diff.DiffFromFileSystem` 比较两个文件系统抽象。

与相邻库的关系：`diff` 是分析工具，常与 `filesys`（文件系统遍历）、`zip`（归档）、`sca`/`ssa`（代码与成分分析）配合，用于"前后版本变了什么"的比对场景。

> 共 4 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [diff.DiffDir](#diffdir) | `i string, j string` | `string, error` | 比较两个本地目录的内容并返回 git 风格的 diff 文本（导出名为 diff.DiffDir） |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [diff.Diff](#diff) | `raw1 any, raw2 any, handler ...DiffHandler` | `string, error` | 比较两个输入内容并返回 git 风格的 diff 文本 |
| [diff.DiffFromFileSystem](#difffromfilesystem) | `fs1 fi.FileSystem, fs2 fi.FileSystem, handler ...DiffHandler` | `string, error` | FileSystemDiff 比较两个文件系统并返回 git 风格的 diff 文本 |
| [diff.DiffZIPFile](#diffzipfile) | `zipFile1 string, zipFile2 string, handler ...DiffHandler` | `string, error` | 比较两个 ZIP 压缩包的内容并返回 git 风格的 diff 文本 |

## 函数详情

### DiffDir {#diffdir}

```go
DiffDir(i string, j string) (string, error)
```

比较两个本地目录的内容并返回 git 风格的 diff 文本（导出名为 diff.DiffDir）

递归对比两个目录下的同名文件，输出新增、删除与修改

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `string` | 第一个（旧）目录路径 |
| j | `string` | 第二个（新）目录路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | git 风格的 diff 文本 |
| r2 | `error` | 错误信息（目录不存在或比较失败时返回） |

**示例**

``````````````yak
base = os.TempDir()
d1 = file.Join(base, "diff_a"); d2 = file.Join(base, "diff_b")
file.MkdirAll(d1)~; file.MkdirAll(d2)~
file.Save(file.Join(d1, "f.txt"), "hello")~
file.Save(file.Join(d2, "f.txt"), "hello world")~
result = diff.DiffDir(d1, d2)~
println(result)
assert result.Contains("hello world"), "diff should contain the changed content"
``````````````

---

## 可变参数函数详情

### Diff {#diff}

```go
Diff(raw1 any, raw2 any, handler ...DiffHandler) (string, error)
```

比较两个输入内容并返回 git 风格的 diff 文本

内部通过内存 git 仓库提交两个版本并计算差异，输入可为字符串或字节

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| raw1 | `any` | 第一个（旧）内容，字符串或字节 |
| raw2 | `any` | 第二个（新）内容，字符串或字节 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| handler | `...DiffHandler` | 可选的差异回调处理器；提供后将逐个变更回调且返回空字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | diff 文本（未提供 handler 时）；内容相同时为空字符串 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
result = diff.Diff("hello\n", "hello\nworld\n")~
assert str.Contains(result, "+world"), "diff should mark the added line"
assert str.Contains(result, "hello"), "diff should keep the context line"
``````````````

---

### DiffFromFileSystem {#difffromfilesystem}

```go
DiffFromFileSystem(fs1 fi.FileSystem, fs2 fi.FileSystem, handler ...DiffHandler) (string, error)
```

FileSystemDiff 比较两个文件系统并返回 git 风格的 diff 文本

常用于比较两个目录树或压缩包的内容差异（导出名为 diff.DiffFromFileSystem）

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| fs1 | `fi.FileSystem` | 第一个（旧）文件系统 |
| fs2 | `fi.FileSystem` | 第二个（新）文件系统 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| handler | `...DiffHandler` | 可选的差异回调处理器；提供后将逐个变更回调且返回空字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | diff 文本（未提供 handler 时）；内容相同时为空字符串 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 无法本地验证: 需要磁盘上真实存在的两个目录(请替换为真实路径)
// 比较两个目录的文件差异，输出 git 风格 diff 文本
fs1 = filesys.NewLocalFs() // 旧目录文件系统
fs2 = filesys.NewLocalFs() // 新目录文件系统
result, err = diff.DiffFromFileSystem(fs1, fs2)
if err != nil { die(err) }
println(result)
``````````````

---

### DiffZIPFile {#diffzipfile}

```go
DiffZIPFile(zipFile1 string, zipFile2 string, handler ...DiffHandler) (string, error)
```

比较两个 ZIP 压缩包的内容并返回 git 风格的 diff 文本

是对 FileSystemDiff 的高层封装，自动将 ZIP 文件加载为文件系统再比较

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| zipFile1 | `string` | 第一个（旧）ZIP 文件路径 |
| zipFile2 | `string` | 第二个（新）ZIP 文件路径 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| handler | `...DiffHandler` | 可选的差异回调处理器；提供后将逐个变更回调且返回空字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | diff 文本（未提供 handler 时） |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 无法本地验证: 需要磁盘上真实存在的两个 ZIP 包(请替换为真实路径)
// 比较两个 ZIP 包内容，输出 git 风格 diff 文本
result, err = diff.DiffZIPFile("/tmp/old.zip", "/tmp/new.zip")
if err != nil { die(err) }
println(result)
``````````````

---

