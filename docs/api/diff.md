# diff

|函数名|函数描述/介绍|
|:------|:--------|
| [diff.Diff](#diff) |Diff 比较两个输入内容并返回 git 风格的 diff 文本 内部通过内存 git 仓库提交两个版本并计算差异，输入可为字符串或字节 参数: - raw1: 第一个（旧）内容，字符串或字节 - raw2: 第二个（新）内容，字符串或字节 - handler: 可选的差异回调处理器；提供后将逐个变...|
| [diff.DiffDir](#diffdir) ||
| [diff.DiffFromFileSystem](#difffromfilesystem) |FileSystemDiff 比较两个文件系统并返回 git 风格的 diff 文本 常用于比较两个目录树或压缩包的内容差异（导出名为 diff.DiffFromFileSystem） 参数: - fs1: 第一个（旧）文件系统 - fs2: 第二个（新）文件系统 - handler: 可选的差异回...|
| [diff.DiffZIPFile](#diffzipfile) |DiffZIPFile 比较两个 ZIP 压缩包的内容并返回 git 风格的 diff 文本 是对 FileSystemDiff 的高层封装，自动将 ZIP 文件加载为文件系统再比较 参数: - zipFile1: 第一个（旧）ZIP 文件路径 - zipFile2: 第二个（新）ZIP 文件路径 ...|


## 函数定义
### Diff

#### 详细描述
Diff 比较两个输入内容并返回 git 风格的 diff 文本

内部通过内存 git 仓库提交两个版本并计算差异，输入可为字符串或字节

参数:

  - raw1: 第一个（旧）内容，字符串或字节

  - raw2: 第二个（新）内容，字符串或字节

  - handler: 可选的差异回调处理器；提供后将逐个变更回调且返回空字符串



返回值:

  - diff 文本（未提供 handler 时）；内容相同时为空字符串

  - 错误信息




Example:

``````````````yak
result = diff.Diff("hello\n", "hello\nworld\n")~
assert str.Contains(result, "+world"), "diff should mark the added line"
assert str.Contains(result, "hello"), "diff should keep the context line"
``````````````


#### 定义

`Diff(raw1 any, raw2 any, handler ...DiffHandler) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw1 | `any` | 第一个（旧）内容，字符串或字节 |
| raw2 | `any` | 第二个（新）内容，字符串或字节 |
| handler | `...DiffHandler` | 可选的差异回调处理器；提供后将逐个变更回调且返回空字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | diff 文本（未提供 handler 时）；内容相同时为空字符串 |
| r2 | `error` | 错误信息 |


### DiffDir

#### 详细描述
暂无描述

#### 定义

`DiffDir(i string, j string) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |  |
| j | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |  |
| r2 | `error` |  |


### DiffFromFileSystem

#### 详细描述
FileSystemDiff 比较两个文件系统并返回 git 风格的 diff 文本

常用于比较两个目录树或压缩包的内容差异（导出名为 diff.DiffFromFileSystem）

参数:

  - fs1: 第一个（旧）文件系统

  - fs2: 第二个（新）文件系统

  - handler: 可选的差异回调处理器；提供后将逐个变更回调且返回空字符串



返回值:

  - diff 文本（未提供 handler 时）；内容相同时为空字符串

  - 错误信息




Example:

``````````````yak
// 比较两个目录（示意性示例，需替换为真实路径）
fs1 = filesys.NewRelLocalFs("/tmp/dir-old")
fs2 = filesys.NewRelLocalFs("/tmp/dir-new")
result, err = diff.DiffFromFileSystem(fs1, fs2)
if err != nil { die(err) }
println(result)
``````````````


#### 定义

`DiffFromFileSystem(fs1 fi.FileSystem, fs2 fi.FileSystem, handler ...DiffHandler) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fs1 | `fi.FileSystem` | 第一个（旧）文件系统 |
| fs2 | `fi.FileSystem` | 第二个（新）文件系统 |
| handler | `...DiffHandler` | 可选的差异回调处理器；提供后将逐个变更回调且返回空字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | diff 文本（未提供 handler 时）；内容相同时为空字符串 |
| r2 | `error` | 错误信息 |


### DiffZIPFile

#### 详细描述
DiffZIPFile 比较两个 ZIP 压缩包的内容并返回 git 风格的 diff 文本

是对 FileSystemDiff 的高层封装，自动将 ZIP 文件加载为文件系统再比较

参数:

  - zipFile1: 第一个（旧）ZIP 文件路径

  - zipFile2: 第二个（新）ZIP 文件路径

  - handler: 可选的差异回调处理器；提供后将逐个变更回调且返回空字符串



返回值:

  - diff 文本（未提供 handler 时）

  - 错误信息




Example:

``````````````yak
// 比较两个 ZIP 包（示意性示例，需替换为真实路径）
result, err = diff.DiffZIPFile("/tmp/old.zip", "/tmp/new.zip")
if err != nil { die(err) }
println(result)
``````````````


#### 定义

`DiffZIPFile(zipFile1 string, zipFile2 string, handler ...DiffHandler) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| zipFile1 | `string` | 第一个（旧）ZIP 文件路径 |
| zipFile2 | `string` | 第二个（新）ZIP 文件路径 |
| handler | `...DiffHandler` | 可选的差异回调处理器；提供后将逐个变更回调且返回空字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | diff 文本（未提供 handler 时） |
| r2 | `error` | 错误信息 |


