# zip {#library-zip}

`zip` 库提供功能完整的 ZIP 压缩/解压能力，支持加密、按模式提取、以及在不解压的情况下对压缩包内容做正则/子串检索（grep），常用于归档处理、固件/样本分析与压缩包内的敏感信息搜索。

典型使用场景：

- 压缩：`zip.Compress` / `zip.CompressByNameWithOptions` 打包文件，`zip.CompressRaw` 压缩内存数据，`zip.CompressWithPassword` 加密压缩。
- 解压与提取：`zip.Decompress` / `zip.DecompressWithPassword` 解压，`zip.ExtractFile` / `zip.ExtractByPattern` 按文件名/模式提取，`zip.Recursive` 遍历包内条目。
- 内容检索：`zip.GrepRegexp` / `zip.GrepSubString` / `zip.GrepPathRegexp` 在压缩包内按正则/子串/路径检索，`zip.NewGrepSearcher` 创建可复用检索器，`zip.RRFRankResults` 对结果排序。

与相邻库的关系：`zip` 与 `gzip`（单流压缩）、`filesys`（文件系统遍历）、`diff`（`DiffZIPFile`）配合，是归档处理与"压缩包里找东西"的主力。

> 共 47 个函数、4 个实例

## 实例

|实例名|类型|说明|
|:--|:--|:--|
| AES128 | `zip.EncryptionMethod` | 2 |
| AES192 | `zip.EncryptionMethod` | 3 |
| AES256 | `zip.EncryptionMethod` | 4 |
| StandardEncryption | `zip.EncryptionMethod` | 1 |

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [zip.CompressRaw](#compressraw) | `i any` | `[]byte, error` | 将一个 map（文件名 -&gt; 内容）在内存中压缩为 zip 字节切片 |
| [zip.Decompress](#decompress) | `zipFile string, dest string` | `error` | 解压一个 zip 文件到指定目标目录 |
| [zip.DecompressWithPassword](#decompresswithpassword) | `zipFile string, dest string, password string` | `error` | 解压带密码的 zip 到目标目录。 |
| [zip.ExtractByPattern](#extractbypattern) | `zipFile string, pattern string` | `[]*ExtractResult, error` | 根据文件名模式（支持 * 通配符）从 ZIP 文件中提取匹配的文件 |
| [zip.ExtractByPatternFromRaw](#extractbypatternfromraw) | `raw any, pattern string` | `[]*ExtractResult, error` | 从内存中的 ZIP 原始数据按文件名模式（支持 * 通配符）提取匹配的文件 |
| [zip.ExtractFile](#extractfile) | `zipFile string, targetFile string` | `[]byte, error` | 从 ZIP 文件中提取单个文件的内容 |
| [zip.ExtractFileFromRaw](#extractfilefromraw) | `raw any, targetFile string` | `[]byte, error` | 从内存中的 ZIP 原始数据中提取单个文件的内容 |
| [zip.ExtractFiles](#extractfiles) | `zipFile string, targetFiles []string` | `[]*ExtractResult, error` | 从 ZIP 文件中并发提取多个文件 |
| [zip.ExtractFilesFromRaw](#extractfilesfromraw) | `raw any, targetFiles []string` | `[]*ExtractResult, error` | 从内存中的 ZIP 原始数据中并发提取多个文件 |
| [zip.MergeGrepResults](#mergegrepresults) | `results []*GrepResult` | `[]*GrepResult` | 合并多个 GrepResult，将位于同一文件且上下文相邻的结果合并在一起 |
| [zip.NewGrepSearcher](#newgrepsearcher) | `zipFile string` | `*ZipGrepSearcher, error` | 从一个 ZIP 文件创建带缓存的搜索器，适合对同一 zip 多次搜索 |
| [zip.RRFRankResults](#rrfrankresults) | `results []*ziputil.GrepResult` | `[]*ziputil.GrepResult` | 使用 RRF（Reciprocal Rank Fusion）算法对多组 GrepResult 进行融合排序 |
| [zip.Recursive](#recursive) | `i any, cb func(isDir bool, pathName string, info os.FileInfo) error` | `error` | 递归遍历一个本地 zip 文件中的所有条目，对每个条目调用回调函数 |
| [zip.RecursiveFromRaw](#recursivefromraw) | `i any, cb func(isDir bool, pathName string, info os.FileInfo) error` | `error` | 递归遍历内存中 zip 原始字节的所有条目，对每个条目调用回调函数 |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [zip.Compress](#compress) | `zipName string, filenames ...string` | `error` | 将一个或多个文件压缩打包为 zip 文件（导出名为 zip.Compress） |
| [zip.CompressByNameWithOptions](#compressbynamewithoptions) | `files []string, dest string, opts ...CompressOption` | `error` | 把若干本地文件/目录压缩为 zip 文件，支持 CompressOption（含密码、加密方法）。 |
| [zip.CompressRawWithPassword](#compressrawwithpassword) | `i any, password string, encryption ...ziputil.EncryptionMethod` | `[]byte, error` | 与 CompressRaw 类似，但生成带密码（默认 AES-256）加密的 zip 字节。 |
| [zip.CompressWithPassword](#compresswithpassword) | `zipName string, password string, filenames ...string` | `error` | 把若干本地文件压缩成带密码（AES-256）的 zip 文件。 |
| [zip.DecompressFromRawWithOptions](#decompressfromrawwithoptions) | `raw []byte, dest string, opts ...DecompressOption` | `error` | 从内存 zip 原始字节解压到目标目录，支持 DecompressOption（如密码）。 |
| [zip.DecompressWithOptions](#decompresswithoptions) | `zipFile string, dest string, opts ...DecompressOption` | `error` | 解压 zip 文件到目标目录，支持 DecompressOption（如密码）。 |
| [zip.ExtractByPatternFromRawWithOptions](#extractbypatternfromrawwithoptions) | `raw any, pattern string, opts ...ExtractOption` | `[]*ExtractResult, error` | 从内存 ZIP 原始字节按通配符提取，支持 ExtractOption（如密码） |
| [zip.ExtractByPatternWithOptions](#extractbypatternwithoptions) | `zipFile string, pattern string, opts ...ExtractOption` | `[]*ExtractResult, error` | 从 ZIP 文件按通配符提取多个文件，支持 ExtractOption（如密码） |
| [zip.ExtractFileFromRawWithOptions](#extractfilefromrawwithoptions) | `raw any, targetFile string, opts ...ExtractOption` | `[]byte, error` | 从内存 ZIP 原始字节提取单个文件，支持 ExtractOption（如密码） |
| [zip.ExtractFileWithOptions](#extractfilewithoptions) | `zipFile string, targetFile string, opts ...ExtractOption` | `[]byte, error` | 从 ZIP 文件提取单个文件，支持 ExtractOption（如密码） |
| [zip.ExtractFilesFromRawWithOptions](#extractfilesfromrawwithoptions) | `raw any, targetFiles []string, opts ...ExtractOption` | `[]*ExtractResult, error` | 从内存 ZIP 原始字节并发提取多个文件，支持 ExtractOption（如密码） |
| [zip.ExtractFilesWithOptions](#extractfileswithoptions) | `zipFile string, targetFiles []string, opts ...ExtractOption` | `[]*ExtractResult, error` | 从 ZIP 文件并发提取多个文件，支持 ExtractOption（如密码） |
| [zip.GrepPathRawRegexp](#greppathrawregexp) | `raw any, pattern string, opts ...GrepOption` | `[]*GrepResult, error` | 使用正则表达式在内存 ZIP 原始数据的条目路径（文件名）中搜索 |
| [zip.GrepPathRawSubString](#greppathrawsubstring) | `raw any, substring string, opts ...GrepOption` | `[]*GrepResult, error` | 使用子字符串在内存 ZIP 原始数据的条目路径（文件名）中搜索 |
| [zip.GrepPathRegexp](#greppathregexp) | `zipFile string, pattern string, opts ...GrepOption` | `[]*GrepResult, error` | 使用正则表达式在 ZIP 文件的条目路径（文件名）中搜索 |
| [zip.GrepPathSubString](#greppathsubstring) | `zipFile string, substring string, opts ...GrepOption` | `[]*GrepResult, error` | 使用子字符串在 ZIP 文件的条目路径（文件名）中搜索 |
| [zip.GrepRawRegexp](#greprawregexp) | `raw any, pattern string, opts ...GrepOption` | `[]*GrepResult, error` | 使用正则表达式在内存中的 ZIP 原始数据的条目内容中搜索 |
| [zip.GrepRawSubString](#greprawsubstring) | `raw any, substring string, opts ...GrepOption` | `[]*GrepResult, error` | 使用子字符串在内存中的 ZIP 原始数据的条目内容中搜索（默认不区分大小写） |
| [zip.GrepRegexp](#grepregexp) | `zipFile string, pattern string, opts ...GrepOption` | `[]*GrepResult, error` | 使用正则表达式在 ZIP 文件的所有条目内容中搜索 |
| [zip.GrepSubString](#grepsubstring) | `zipFile string, substring string, opts ...GrepOption` | `[]*GrepResult, error` | 使用子字符串在 ZIP 文件的所有条目内容中搜索（默认不区分大小写） |
| [zip.NewGrepSearcherFromRaw](#newgrepsearcherfromraw) | `raw any, filename ...string` | `*ZipGrepSearcher, error` | 从内存中的 ZIP 原始数据创建带缓存的搜索器，适合对同一 zip 多次搜索 |

## 函数详情

### CompressRaw {#compressraw}

```go
CompressRaw(i any) ([]byte, error)
```

将一个 map（文件名 -&gt; 内容）在内存中压缩为 zip 字节切片

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 文件名到内容的映射（值可以是字符串或字节切片） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 压缩后的 zip 字节切片 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 内存压缩后再从字节中提取，验证往返一致
zipBytes = zip.CompressRaw({"a.txt": "hello world"})~
content = zip.ExtractFileFromRaw(zipBytes, "a.txt")~
assert string(content) == "hello world", "CompressRaw then ExtractFileFromRaw should round-trip"
``````````````

---

### Decompress {#decompress}

```go
Decompress(zipFile string, dest string) error
```

解压一个 zip 文件到指定目标目录

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| zipFile | `string` | 待解压的 zip 文件路径 |
| dest | `string` | 解压输出的目标目录 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
zip.Decompress("/tmp/abc.zip", "/tmp/abc_extracted")~
``````````````

---

### DecompressWithPassword {#decompresswithpassword}

```go
DecompressWithPassword(zipFile string, dest string, password string) error
```

解压带密码的 zip 到目标目录。

关键词: 加密 zip 解压, AES zip 解压

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| zipFile | `string` | 待解压的 zip 文件路径 |
| dest | `string` | 解压输出的目标目录 |
| password | `string` | 解密密码 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
zip.DecompressWithPassword("/tmp/out.zip", "/tmp/dest", "123456")~
``````````````

---

### ExtractByPattern {#extractbypattern}

```go
ExtractByPattern(zipFile string, pattern string) ([]*ExtractResult, error)
```

根据文件名模式（支持 * 通配符）从 ZIP 文件中提取匹配的文件

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| zipFile | `string` | zip 文件路径 |
| pattern | `string` | 文件名匹配模式（如 &#34;*.txt&#34;） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*ExtractResult` | 提取结果列表（每项含 FileName/Content/Error） |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
results = zip.ExtractByPattern("/tmp/abc.zip", "*.txt")~
for r in results { println(r.FileName) }
``````````````

---

### ExtractByPatternFromRaw {#extractbypatternfromraw}

```go
ExtractByPatternFromRaw(raw any, pattern string) ([]*ExtractResult, error)
```

从内存中的 ZIP 原始数据按文件名模式（支持 * 通配符）提取匹配的文件

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| raw | `any` | zip 的原始数据（[]byte、string 或 io.Reader） |
| pattern | `string` | 文件名匹配模式（如 &#34;*.txt&#34;） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*ExtractResult` | 提取结果列表（每项含 FileName/Content/Error） |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
zipBytes = zip.CompressRaw({"a.txt": "AAA", "b.log": "BBB"})~
results = zip.ExtractByPatternFromRaw(zipBytes, "*.txt")~
assert len(results) == 1, "only the .txt entry should match the pattern"
``````````````

---

### ExtractFile {#extractfile}

```go
ExtractFile(zipFile string, targetFile string) ([]byte, error)
```

从 ZIP 文件中提取单个文件的内容

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| zipFile | `string` | zip 文件路径 |
| targetFile | `string` | 待提取的 zip 内条目名称 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 提取出的文件内容字节 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
content = zip.ExtractFile("/tmp/abc.zip", "a.txt")~
``````````````

---

### ExtractFileFromRaw {#extractfilefromraw}

```go
ExtractFileFromRaw(raw any, targetFile string) ([]byte, error)
```

从内存中的 ZIP 原始数据中提取单个文件的内容

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| raw | `any` | zip 的原始数据（[]byte、string 或 io.Reader） |
| targetFile | `string` | 待提取的 zip 内条目名称 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 提取出的文件内容字节 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
zipBytes = zip.CompressRaw({"a.txt": "hello world"})~
content = zip.ExtractFileFromRaw(zipBytes, "a.txt")~
assert string(content) == "hello world", "ExtractFileFromRaw should return the entry content"
``````````````

---

### ExtractFiles {#extractfiles}

```go
ExtractFiles(zipFile string, targetFiles []string) ([]*ExtractResult, error)
```

从 ZIP 文件中并发提取多个文件

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| zipFile | `string` | zip 文件路径 |
| targetFiles | `[]string` | 待提取的条目名称列表 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*ExtractResult` | 提取结果列表（每项含 FileName/Content/Error） |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
results = zip.ExtractFiles("/tmp/abc.zip", ["a.txt", "b.txt"])~
for r in results { println(r.FileName) }
``````````````

---

### ExtractFilesFromRaw {#extractfilesfromraw}

```go
ExtractFilesFromRaw(raw any, targetFiles []string) ([]*ExtractResult, error)
```

从内存中的 ZIP 原始数据中并发提取多个文件

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| raw | `any` | zip 的原始数据（[]byte、string 或 io.Reader） |
| targetFiles | `[]string` | 待提取的条目名称列表 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*ExtractResult` | 提取结果列表（每项含 FileName/Content/Error） |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
zipBytes = zip.CompressRaw({"a.txt": "AAA", "b.txt": "BBB"})~
results = zip.ExtractFilesFromRaw(zipBytes, ["a.txt"])~
assert len(results) == 1, "ExtractFilesFromRaw should return one matched file"
assert string(results[0].Content) == "AAA", "extracted content should match"
``````````````

---

### MergeGrepResults {#mergegrepresults}

```go
MergeGrepResults(results []*GrepResult) []*GrepResult
```

合并多个 GrepResult，将位于同一文件且上下文相邻的结果合并在一起

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| results | `[]*GrepResult` | 待合并的 GrepResult 列表 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*GrepResult` | 合并后的 GrepResult 列表 |

**示例**

``````````````yak
zipBytes = zip.CompressRaw({"a.txt": "hello\nworld"})~
results = zip.GrepRawSubString(zipBytes, "world")~
merged = zip.MergeGrepResults(results)
assert len(merged) >= 1, "MergeGrepResults should keep at least one result"
``````````````

---

### NewGrepSearcher {#newgrepsearcher}

```go
NewGrepSearcher(zipFile string) (*ZipGrepSearcher, error)
```

从一个 ZIP 文件创建带缓存的搜索器，适合对同一 zip 多次搜索

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| zipFile | `string` | zip 文件路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*ZipGrepSearcher` | zip 搜索器对象 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
searcher = zip.NewGrepSearcher("/tmp/abc.zip")~
results = searcher.GrepSubString("password")~
``````````````

---

### RRFRankResults {#rrfrankresults}

```go
RRFRankResults(results []*ziputil.GrepResult) []*ziputil.GrepResult
```

使用 RRF（Reciprocal Rank Fusion）算法对多组 GrepResult 进行融合排序

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| results | `[]*ziputil.GrepResult` | 待排序的 GrepResult 切片 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*ziputil.GrepResult` | 重新排序后的 GrepResult 切片 |

**示例**

``````````````yak
// 在内存 zip 中搜索后对结果进行 RRF 排序
zipBytes = zip.CompressRaw({"a.txt": "hello\nworld"})~
results = zip.GrepRawSubString(zipBytes, "world")~
ranked = zip.RRFRankResults(results)
assert len(ranked) == len(results), "RRFRankResults should keep all results"
``````````````

---

### Recursive {#recursive}

```go
Recursive(i any, cb func(isDir bool, pathName string, info os.FileInfo) error) error
```

递归遍历一个本地 zip 文件中的所有条目，对每个条目调用回调函数

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 本地 zip 文件路径 |
| cb | `func(isDir bool, pathName string, info os.FileInfo) error` | 对每个条目调用的回调函数，参数为 (是否为目录, 条目路径, 文件信息) |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
zip.Recursive("/tmp/abc.zip", (isDir, pathName, info) => {
		log.info("isDir: %v, pathName: %v, info: %v", isDir, pathName, info.Name())
})~
``````````````

---

### RecursiveFromRaw {#recursivefromraw}

```go
RecursiveFromRaw(i any, cb func(isDir bool, pathName string, info os.FileInfo) error) error
```

递归遍历内存中 zip 原始字节的所有条目，对每个条目调用回调函数

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | zip 文件的原始字节内容 |
| cb | `func(isDir bool, pathName string, info os.FileInfo) error` | 对每个条目调用的回调函数，参数为 (是否为目录, 条目路径, 文件信息) |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
// 先在内存中压缩两个文件，再遍历统计条目数量
raw = zip.CompressRaw({"a.txt": "hello", "b.txt": "world"})~
count = 0

	zip.RecursiveFromRaw(raw, (isDir, pathName, info) => {
	    count++
	    return nil
	})~

assert count == 2, "RecursiveFromRaw should visit both entries"
``````````````

---

## 可变参数函数详情

### Compress {#compress}

```go
Compress(zipName string, filenames ...string) error
```

将一个或多个文件压缩打包为 zip 文件（导出名为 zip.Compress）

按给定文件名读取文件内容并写入目标 zip 包

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| zipName | `string` | 输出的 zip 文件路径 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| filenames | `...string` | 一个或多个待压缩的文件路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息（读取文件或写入 zip 失败时返回） |

**示例**

``````````````yak
dir = os.TempDir()
src = file.Join(dir, "zip_demo_src.txt")
file.Save(src, "hello zip world")~
zipPath = file.Join(dir, "zip_demo.zip")
zip.Compress(zipPath, src)~
println(file.IsExisted(zipPath))   // OUT: true
assert file.IsExisted(zipPath), "zip archive should be created"
assert len(file.ReadFile(zipPath)~) > 0, "zip archive should be non-empty"
``````````````

---

### CompressByNameWithOptions {#compressbynamewithoptions}

```go
CompressByNameWithOptions(files []string, dest string, opts ...CompressOption) error
```

把若干本地文件/目录压缩为 zip 文件，支持 CompressOption（含密码、加密方法）。

关键词: CompressByName, 密码 zip 写

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| files | `[]string` | 待压缩的文件或目录路径列表 |
| dest | `string` | 输出的 zip 文件路径（必须不存在） |

**可选参数**

可作为可变参数 `opts ...CompressOption` 传入选项；共 2 个可用选项，详见 [CompressOption 选项列表](#option-compressoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
zip.CompressByNameWithOptions(["/tmp/a.txt"], "/tmp/out.zip", zip.compressPassword("123456"))~
``````````````

---

### CompressRawWithPassword {#compressrawwithpassword}

```go
CompressRawWithPassword(i any, password string, encryption ...ziputil.EncryptionMethod) ([]byte, error)
```

与 CompressRaw 类似，但生成带密码（默认 AES-256）加密的 zip 字节。

关键词: 内存加密 zip, AES256 zip 创建

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 文件名到内容的映射 |
| password | `string` | 加密密码 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| encryption | `...ziputil.EncryptionMethod` | 可选的加密方法（默认 AES256） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 加密后的 zip 字节切片 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 加密压缩后用密码提取，验证往返一致
zipBytes = zip.CompressRawWithPassword({"s.txt": "secret"}, "123456")~
content = zip.ExtractFileFromRawWithOptions(zipBytes, "s.txt", zip.extractPassword("123456"))~
assert string(content) == "secret", "encrypted CompressRaw should round-trip with password"
``````````````

---

### CompressWithPassword {#compresswithpassword}

```go
CompressWithPassword(zipName string, password string, filenames ...string) error
```

把若干本地文件压缩成带密码（AES-256）的 zip 文件。

关键词: 文件加密压缩, AES zip 压缩

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| zipName | `string` | 输出的 zip 文件路径 |
| password | `string` | 加密密码 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| filenames | `...string` | 一个或多个待压缩的文件路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
zip.CompressWithPassword("/tmp/out.zip", "123456", "/tmp/a.txt", "/tmp/b.txt")~
``````````````

---

### DecompressFromRawWithOptions {#decompressfromrawwithoptions}

```go
DecompressFromRawWithOptions(raw []byte, dest string, opts ...DecompressOption) error
```

从内存 zip 原始字节解压到目标目录，支持 DecompressOption（如密码）。

关键词: zip 内存解压, DeCompressFromRaw, 密码 zip 解压

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| raw | `[]byte` | zip 文件的原始字节内容 |
| dest | `string` | 解压输出的目标目录 |

**可选参数**

可作为可变参数 `opts ...DecompressOption` 传入选项；共 1 个可用选项，详见 [DecompressOption 选项列表](#option-decompressoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
// 内存加密压缩后解压到临时目录，再读回验证
zipBytes = zip.CompressRawWithPassword({"a.txt": "AAA"}, "123456")~
dest = file.Join(os.TempDir(), "yak-zip-decompress")
zip.DecompressFromRawWithOptions(zipBytes, dest, zip.decompressPassword("123456"))~
content = file.ReadFile(file.Join(dest, "a.txt"))~
assert string(content) == "AAA", "DecompressFromRawWithOptions should restore the entry"
file.Remove(dest)
``````````````

---

### DecompressWithOptions {#decompresswithoptions}

```go
DecompressWithOptions(zipFile string, dest string, opts ...DecompressOption) error
```

解压 zip 文件到目标目录，支持 DecompressOption（如密码）。

关键词: zip 解压密码, DeCompress

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| zipFile | `string` | 待解压的 zip 文件路径 |
| dest | `string` | 解压输出的目标目录 |

**可选参数**

可作为可变参数 `opts ...DecompressOption` 传入选项；共 1 个可用选项，详见 [DecompressOption 选项列表](#option-decompressoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
zip.DecompressWithOptions("/tmp/enc.zip", "/tmp/dest", zip.decompressPassword("123456"))~
``````````````

---

### ExtractByPatternFromRawWithOptions {#extractbypatternfromrawwithoptions}

```go
ExtractByPatternFromRawWithOptions(raw any, pattern string, opts ...ExtractOption) ([]*ExtractResult, error)
```

从内存 ZIP 原始字节按通配符提取，支持 ExtractOption（如密码）

关键词: ExtractByPatternFromRaw, 内存通配符提取, 密码提取

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| raw | `any` | zip 的原始数据（[]byte、string 或 io.Reader） |
| pattern | `string` | 文件名匹配模式（如 &#34;*.txt&#34;） |

**可选参数**

可作为可变参数 `opts ...ExtractOption` 传入选项；共 1 个可用选项，详见 [ExtractOption 选项列表](#option-extractoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*ExtractResult` | 提取结果列表（每项含 FileName/Content/Error） |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
zipBytes = zip.CompressRawWithPassword({"a.txt": "AAA"}, "123456")~
results = zip.ExtractByPatternFromRawWithOptions(zipBytes, "*.txt", zip.extractPassword("123456"))~
assert len(results) == 1, "pattern should match one encrypted entry"
``````````````

---

### ExtractByPatternWithOptions {#extractbypatternwithoptions}

```go
ExtractByPatternWithOptions(zipFile string, pattern string, opts ...ExtractOption) ([]*ExtractResult, error)
```

从 ZIP 文件按通配符提取多个文件，支持 ExtractOption（如密码）

关键词: ExtractByPattern, 通配符提取, 密码提取

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| zipFile | `string` | zip 文件路径 |
| pattern | `string` | 文件名匹配模式（如 &#34;*.txt&#34;） |

**可选参数**

可作为可变参数 `opts ...ExtractOption` 传入选项；共 1 个可用选项，详见 [ExtractOption 选项列表](#option-extractoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*ExtractResult` | 提取结果列表（每项含 FileName/Content/Error） |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
results = zip.ExtractByPatternWithOptions("/tmp/enc.zip", "*.txt", zip.extractPassword("123456"))~
``````````````

---

### ExtractFileFromRawWithOptions {#extractfilefromrawwithoptions}

```go
ExtractFileFromRawWithOptions(raw any, targetFile string, opts ...ExtractOption) ([]byte, error)
```

从内存 ZIP 原始字节提取单个文件，支持 ExtractOption（如密码）

关键词: ExtractFileFromRaw, 内存提取, 密码提取

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| raw | `any` | zip 的原始数据（[]byte、string 或 io.Reader） |
| targetFile | `string` | 待提取的条目名称 |

**可选参数**

可作为可变参数 `opts ...ExtractOption` 传入选项；共 1 个可用选项，详见 [ExtractOption 选项列表](#option-extractoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 提取出的文件内容字节 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
zipBytes = zip.CompressRawWithPassword({"s.txt": "secret"}, "123456")~
content = zip.ExtractFileFromRawWithOptions(zipBytes, "s.txt", zip.extractPassword("123456"))~
assert string(content) == "secret", "should extract encrypted entry with password"
``````````````

---

### ExtractFileWithOptions {#extractfilewithoptions}

```go
ExtractFileWithOptions(zipFile string, targetFile string, opts ...ExtractOption) ([]byte, error)
```

从 ZIP 文件提取单个文件，支持 ExtractOption（如密码）

关键词: ExtractFile, 密码提取

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| zipFile | `string` | zip 文件路径 |
| targetFile | `string` | 待提取的条目名称 |

**可选参数**

可作为可变参数 `opts ...ExtractOption` 传入选项；共 1 个可用选项，详见 [ExtractOption 选项列表](#option-extractoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 提取出的文件内容字节 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
content = zip.ExtractFileWithOptions("/tmp/enc.zip", "s.txt", zip.extractPassword("123456"))~
``````````````

---

### ExtractFilesFromRawWithOptions {#extractfilesfromrawwithoptions}

```go
ExtractFilesFromRawWithOptions(raw any, targetFiles []string, opts ...ExtractOption) ([]*ExtractResult, error)
```

从内存 ZIP 原始字节并发提取多个文件，支持 ExtractOption（如密码）

关键词: ExtractFilesFromRaw, 并发提取, 密码提取

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| raw | `any` | zip 的原始数据（[]byte、string 或 io.Reader） |
| targetFiles | `[]string` | 待提取的条目名称列表 |

**可选参数**

可作为可变参数 `opts ...ExtractOption` 传入选项；共 1 个可用选项，详见 [ExtractOption 选项列表](#option-extractoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*ExtractResult` | 提取结果列表（每项含 FileName/Content/Error） |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
zipBytes = zip.CompressRawWithPassword({"a.txt": "AAA"}, "123456")~
results = zip.ExtractFilesFromRawWithOptions(zipBytes, ["a.txt"], zip.extractPassword("123456"))~
assert len(results) == 1, "should extract one encrypted entry"
assert string(results[0].Content) == "AAA", "decrypted content should match"
``````````````

---

### ExtractFilesWithOptions {#extractfileswithoptions}

```go
ExtractFilesWithOptions(zipFile string, targetFiles []string, opts ...ExtractOption) ([]*ExtractResult, error)
```

从 ZIP 文件并发提取多个文件，支持 ExtractOption（如密码）

关键词: ExtractFiles, 并发提取, 密码提取

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| zipFile | `string` | zip 文件路径 |
| targetFiles | `[]string` | 待提取的条目名称列表 |

**可选参数**

可作为可变参数 `opts ...ExtractOption` 传入选项；共 1 个可用选项，详见 [ExtractOption 选项列表](#option-extractoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*ExtractResult` | 提取结果列表（每项含 FileName/Content/Error） |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
results = zip.ExtractFilesWithOptions("/tmp/enc.zip", ["a.txt"], zip.extractPassword("123456"))~
``````````````

---

### GrepPathRawRegexp {#greppathrawregexp}

```go
GrepPathRawRegexp(raw any, pattern string, opts ...GrepOption) ([]*GrepResult, error)
```

使用正则表达式在内存 ZIP 原始数据的条目路径（文件名）中搜索

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| raw | `any` | zip 的原始数据（[]byte、string 或 io.Reader） |
| pattern | `string` | 路径正则表达式 |

**可选参数**

可作为可变参数 `opts ...GrepOption` 传入选项；共 8 个可用选项，详见 [GrepOption 选项列表](#option-grepoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*GrepResult` | 匹配的路径结果列表 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
zipBytes = zip.CompressRaw({"dir/a.txt": "x"})~
results = zip.GrepPathRawRegexp(zipBytes, `a\.txt`)~
assert len(results) == 1, "GrepPathRawRegexp should match the entry path"
``````````````

---

### GrepPathRawSubString {#greppathrawsubstring}

```go
GrepPathRawSubString(raw any, substring string, opts ...GrepOption) ([]*GrepResult, error)
```

使用子字符串在内存 ZIP 原始数据的条目路径（文件名）中搜索

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| raw | `any` | zip 的原始数据（[]byte、string 或 io.Reader） |
| substring | `string` | 待搜索的路径子字符串 |

**可选参数**

可作为可变参数 `opts ...GrepOption` 传入选项；共 8 个可用选项，详见 [GrepOption 选项列表](#option-grepoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*GrepResult` | 匹配的路径结果列表 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
zipBytes = zip.CompressRaw({"dir/a.txt": "x"})~
results = zip.GrepPathRawSubString(zipBytes, "a.txt")~
assert len(results) == 1, "GrepPathRawSubString should match the entry path"
assert results[0].FileName == "dir/a.txt", "matched path should be the entry name"
``````````````

---

### GrepPathRegexp {#greppathregexp}

```go
GrepPathRegexp(zipFile string, pattern string, opts ...GrepOption) ([]*GrepResult, error)
```

使用正则表达式在 ZIP 文件的条目路径（文件名）中搜索

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| zipFile | `string` | zip 文件路径 |
| pattern | `string` | 路径正则表达式 |

**可选参数**

可作为可变参数 `opts ...GrepOption` 传入选项；共 8 个可用选项，详见 [GrepOption 选项列表](#option-grepoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*GrepResult` | 匹配的路径结果列表 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
results = zip.GrepPathRegexp("/tmp/abc.zip", `\.txt$`)~
for r in results { println(r.FileName) }
``````````````

---

### GrepPathSubString {#greppathsubstring}

```go
GrepPathSubString(zipFile string, substring string, opts ...GrepOption) ([]*GrepResult, error)
```

使用子字符串在 ZIP 文件的条目路径（文件名）中搜索

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| zipFile | `string` | zip 文件路径 |
| substring | `string` | 待搜索的路径子字符串 |

**可选参数**

可作为可变参数 `opts ...GrepOption` 传入选项；共 8 个可用选项，详见 [GrepOption 选项列表](#option-grepoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*GrepResult` | 匹配的路径结果列表 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
results = zip.GrepPathSubString("/tmp/abc.zip", "config")~
for r in results { println(r.FileName) }
``````````````

---

### GrepRawRegexp {#greprawregexp}

```go
GrepRawRegexp(raw any, pattern string, opts ...GrepOption) ([]*GrepResult, error)
```

使用正则表达式在内存中的 ZIP 原始数据的条目内容中搜索

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| raw | `any` | zip 的原始数据（[]byte、string 或 io.Reader） |
| pattern | `string` | 正则表达式 |

**可选参数**

可作为可变参数 `opts ...GrepOption` 传入选项；共 8 个可用选项，详见 [GrepOption 选项列表](#option-grepoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*GrepResult` | 匹配结果列表 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
zipBytes = zip.CompressRaw({"a.txt": "hello\nworld"})~
results = zip.GrepRawRegexp(zipBytes, "w.rld")~
assert len(results) == 1, "GrepRawRegexp should find the matching line"
``````````````

---

### GrepRawSubString {#greprawsubstring}

```go
GrepRawSubString(raw any, substring string, opts ...GrepOption) ([]*GrepResult, error)
```

使用子字符串在内存中的 ZIP 原始数据的条目内容中搜索（默认不区分大小写）

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| raw | `any` | zip 的原始数据（[]byte、string 或 io.Reader） |
| substring | `string` | 待搜索的子字符串 |

**可选参数**

可作为可变参数 `opts ...GrepOption` 传入选项；共 8 个可用选项，详见 [GrepOption 选项列表](#option-grepoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*GrepResult` | 匹配结果列表 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
zipBytes = zip.CompressRaw({"a.txt": "hello\nworld"})~
results = zip.GrepRawSubString(zipBytes, "world")~
assert len(results) == 1, "GrepRawSubString should find one match"
assert results[0].LineNumber == 2, "match should be on the second line"
``````````````

---

### GrepRegexp {#grepregexp}

```go
GrepRegexp(zipFile string, pattern string, opts ...GrepOption) ([]*GrepResult, error)
```

使用正则表达式在 ZIP 文件的所有条目内容中搜索

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| zipFile | `string` | zip 文件路径 |
| pattern | `string` | 正则表达式 |

**可选参数**

可作为可变参数 `opts ...GrepOption` 传入选项；共 8 个可用选项，详见 [GrepOption 选项列表](#option-grepoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*GrepResult` | 匹配结果列表 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
results = zip.GrepRegexp("/tmp/abc.zip", "password\\s*=")~
for r in results { println(r.FileName, r.LineNumber, r.Line) }
``````````````

---

### GrepSubString {#grepsubstring}

```go
GrepSubString(zipFile string, substring string, opts ...GrepOption) ([]*GrepResult, error)
```

使用子字符串在 ZIP 文件的所有条目内容中搜索（默认不区分大小写）

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| zipFile | `string` | zip 文件路径 |
| substring | `string` | 待搜索的子字符串 |

**可选参数**

可作为可变参数 `opts ...GrepOption` 传入选项；共 8 个可用选项，详见 [GrepOption 选项列表](#option-grepoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*GrepResult` | 匹配结果列表 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
results = zip.GrepSubString("/tmp/abc.zip", "password")~
for r in results { println(r.FileName, r.LineNumber, r.Line) }
``````````````

---

### NewGrepSearcherFromRaw {#newgrepsearcherfromraw}

```go
NewGrepSearcherFromRaw(raw any, filename ...string) (*ZipGrepSearcher, error)
```

从内存中的 ZIP 原始数据创建带缓存的搜索器，适合对同一 zip 多次搜索

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| raw | `any` | zip 的原始数据（[]byte、string 或 io.Reader） |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| filename | `...string` | 可选的逻辑文件名（仅用于结果展示） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*ZipGrepSearcher` | zip 搜索器对象 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
zipBytes = zip.CompressRaw({"a.txt": "hello\nworld"})~
searcher = zip.NewGrepSearcherFromRaw(zipBytes)~
results = searcher.GrepSubString("world")~
assert len(results) == 1, "searcher should find one match"
``````````````

---

## 可变参数选项列表

以下按选项类型汇总全部可变参数选项(原先重复在各主函数下的选项表已收拢到此处)：

### 1. 类型：CompressOption {#option-compressoption}

涉及到的函数有：[zip.CompressByNameWithOptions](#compressbynamewithoptions)

|选项函数|参数|返回值|说明|
|:--|:--|:--|:--|
| `zip.compressEncryption` | `method EncryptionMethod` | `CompressOption` | 设置 zip 压缩的加密方法（默认 AES256） |
| `zip.compressPassword` | `password string` | `CompressOption` | 为 zip 压缩设置加密密码 |

### 2. 类型：DecompressOption {#option-decompressoption}

涉及到的函数有：[zip.DecompressFromRawWithOptions](#decompressfromrawwithoptions)、[zip.DecompressWithOptions](#decompresswithoptions)

|选项函数|参数|返回值|说明|
|:--|:--|:--|:--|
| `zip.decompressPassword` | `password string` | `DecompressOption` | 为 zip 解压设置解密密码 |

### 3. 类型：ExtractOption {#option-extractoption}

涉及到的函数有：[zip.ExtractByPatternFromRawWithOptions](#extractbypatternfromrawwithoptions)、[zip.ExtractByPatternWithOptions](#extractbypatternwithoptions)、[zip.ExtractFileFromRawWithOptions](#extractfilefromrawwithoptions)、[zip.ExtractFileWithOptions](#extractfilewithoptions)、[zip.ExtractFilesFromRawWithOptions](#extractfilesfromrawwithoptions)、[zip.ExtractFilesWithOptions](#extractfileswithoptions)

|选项函数|参数|返回值|说明|
|:--|:--|:--|:--|
| `zip.extractPassword` | `password string` | `ExtractOption` | 为 zip 提取设置解密密码 |

### 4. 类型：GrepOption {#option-grepoption}

涉及到的函数有：[zip.GrepPathRawRegexp](#greppathrawregexp)、[zip.GrepPathRawSubString](#greppathrawsubstring)、[zip.GrepPathRegexp](#greppathregexp)、[zip.GrepPathSubString](#greppathsubstring)、[zip.GrepRawRegexp](#greprawregexp)、[zip.GrepRawSubString](#greprawsubstring)、[zip.GrepRegexp](#grepregexp)、[zip.GrepSubString](#grepsubstring)

|选项函数|参数|返回值|说明|
|:--|:--|:--|:--|
| `zip.grepCaseSensitive` | `i ...bool` | `GrepOption` | 设置 zip grep 子串搜索是否区分大小写 |
| `zip.grepContextLine` | `context int` | `GrepOption` | 设置 zip grep 搜索时匹配行的上下文行数 |
| `zip.grepExcludePathRegexp` | `patterns ...string` | `GrepOption` | 排除路径匹配指定正则的条目（任一匹配即排除） |
| `zip.grepExcludePathSubString` | `patterns ...string` | `GrepOption` | 排除路径包含指定子串的条目（任一匹配即排除） |
| `zip.grepIncludePathRegexp` | `patterns ...string` | `GrepOption` | 仅在路径匹配指定正则的条目中搜索（任一匹配即可） |
| `zip.grepIncludePathSubString` | `patterns ...string` | `GrepOption` | 仅在路径包含指定子串的条目中搜索（任一匹配即可） |
| `zip.grepLimit` | `limit int` | `GrepOption` | 设置 zip grep 搜索返回结果的最大数量 |
| `zip.grepPassword` | `password string` | `GrepOption` | 在 zip 中执行 grep 时设置加密条目的解密密码 |

