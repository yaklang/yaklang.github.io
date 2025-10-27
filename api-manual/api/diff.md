# diff

|函数名|函数描述/介绍|
|:------|:--------|
| [diff.Diff](#diff) |Diff 比较两个输入并返回 diff 结果字符串（为了向后兼容，现在返回字符串） |
| [diff.DiffDir](#diffdir) ||
| [diff.DiffFromFileSystem](#difffromfilesystem) |FileSystemDiff 比较两个文件系统并返回diff字符串（为了向后兼容，现在返回字符串） |
| [diff.DiffZIPFile](#diffzipfile) |DiffZIPFile compares two ZIP files and returns diff string or invokes the handler for each change This is a high-level wrapper around FileSystemDiff f...|


## 函数定义
### Diff

#### 详细描述
Diff 比较两个输入并返回 diff 结果字符串（为了向后兼容，现在返回字符串）


#### 定义

`Diff(raw1 any, raw2 any, handler ...DiffHandler) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw1 | `any` |   |
| raw2 | `any` |   |
| handler | `...DiffHandler` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


### DiffDir

#### 详细描述


#### 定义

`DiffDir(i string, j string) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |
| j | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


### DiffFromFileSystem

#### 详细描述
FileSystemDiff 比较两个文件系统并返回diff字符串（为了向后兼容，现在返回字符串）


#### 定义

`DiffFromFileSystem(fs1 fi.FileSystem, fs2 fi.FileSystem, handler ...DiffHandler) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fs1 | `fi.FileSystem` |   |
| fs2 | `fi.FileSystem` |   |
| handler | `...DiffHandler` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


### DiffZIPFile

#### 详细描述
DiffZIPFile compares two ZIP files and returns diff string or invokes the handler for each change
This is a high-level wrapper around FileSystemDiff for ZIP files


#### 定义

`DiffZIPFile(zipFile1 string, zipFile2 string, handler ...DiffHandler) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| zipFile1 | `string` |   |
| zipFile2 | `string` |   |
| handler | `...DiffHandler` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


