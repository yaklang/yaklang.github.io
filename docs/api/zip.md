# zip

|实例名|实例描述|
|:------|:--------|
AES128|(zip.EncryptionMethod) 2|
AES192|(zip.EncryptionMethod) 3|
AES256|(zip.EncryptionMethod) 4|
StandardEncryption|(zip.EncryptionMethod) 1|

|函数名|函数描述/介绍|
|:------|:--------|
| [zip.Compress](#compress) ||
| [zip.CompressByNameWithOptions](#compressbynamewithoptions) |CompressByNameWithOptions 把若干本地文件/目录压缩为 zip 文件，支持 CompressOption（含密码、加密方法）。 关键词: CompressByName, 密码 zip 写 参数: - files: 待压缩的文件或目录路径列表 - dest: 输出的 zip 文...|
| [zip.CompressRaw](#compressraw) |CompressRaw 将一个 map（文件名 -&gt; 内容）在内存中压缩为 zip 字节切片 参数: - i: 文件名到内容的映射（值可以是字符串或字节切片） 返回值: - 压缩后的 zip 字节切片 - 错误信息|
| [zip.CompressRawWithPassword](#compressrawwithpassword) |CompressRawWithPassword 与 CompressRaw 类似，但生成带密码（默认 AES-256）加密的 zip 字节。 关键词: 内存加密 zip, AES256 zip 创建 参数: - i: 文件名到内容的映射 - password: 加密密码 - encryption: ...|
| [zip.CompressWithPassword](#compresswithpassword) |CompressWithPassword 把若干本地文件压缩成带密码（AES-256）的 zip 文件。 关键词: 文件加密压缩, AES zip 压缩 参数: - zipName: 输出的 zip 文件路径 - password: 加密密码 - filenames: 一个或多个待压缩的文件路径 返...|
| [zip.Decompress](#decompress) |Decompress 解压一个 zip 文件到指定目标目录 参数: - zipFile: 待解压的 zip 文件路径 - dest: 解压输出的目标目录 返回值: - 错误信息|
| [zip.DecompressFromRawWithOptions](#decompressfromrawwithoptions) |DecompressFromRawWithOptions 从内存 zip 原始字节解压到目标目录，支持 DecompressOption（如密码）。 关键词: zip 内存解压, DeCompressFromRaw, 密码 zip 解压 参数: - raw: zip 文件的原始字节内容 - dest...|
| [zip.DecompressWithOptions](#decompresswithoptions) |DecompressWithOptions 解压 zip 文件到目标目录，支持 DecompressOption（如密码）。 关键词: zip 解压密码, DeCompress 参数: - zipFile: 待解压的 zip 文件路径 - dest: 解压输出的目标目录 - opts: 可选的解压选...|
| [zip.DecompressWithPassword](#decompresswithpassword) |DecompressWithPassword 解压带密码的 zip 到目标目录。 关键词: 加密 zip 解压, AES zip 解压 参数: - zipFile: 待解压的 zip 文件路径 - dest: 解压输出的目标目录 - password: 解密密码 返回值: - 错误信息|
| [zip.ExtractByPattern](#extractbypattern) |ExtractByPattern 根据文件名模式（支持 * 通配符）从 ZIP 文件中提取匹配的文件 参数: - zipFile: zip 文件路径 - pattern: 文件名匹配模式（如 &#34;*.txt&#34;） 返回值: - 提取结果列表（每项含 FileName/Content/Error） - 错...|
| [zip.ExtractByPatternFromRaw](#extractbypatternfromraw) |ExtractByPatternFromRaw 从内存中的 ZIP 原始数据按文件名模式（支持 * 通配符）提取匹配的文件 参数: - raw: zip 的原始数据（[]byte、string 或 io.Reader） - pattern: 文件名匹配模式（如 &#34;*.txt&#34;） 返回值: - 提取结...|
| [zip.ExtractByPatternFromRawWithOptions](#extractbypatternfromrawwithoptions) ||
| [zip.ExtractByPatternWithOptions](#extractbypatternwithoptions) ||
| [zip.ExtractFile](#extractfile) |ExtractFile 从 ZIP 文件中提取单个文件的内容 参数: - zipFile: zip 文件路径 - targetFile: 待提取的 zip 内条目名称 返回值: - 提取出的文件内容字节 - 错误信息|
| [zip.ExtractFileFromRaw](#extractfilefromraw) |ExtractFileFromRaw 从内存中的 ZIP 原始数据中提取单个文件的内容 参数: - raw: zip 的原始数据（[]byte、string 或 io.Reader） - targetFile: 待提取的 zip 内条目名称 返回值: - 提取出的文件内容字节 - 错误信息|
| [zip.ExtractFileFromRawWithOptions](#extractfilefromrawwithoptions) |ExtractFileFromRawWithOptions 从内存 ZIP 原始字节提取单个文件，支持 ExtractOption（如密码） 关键词: ExtractFileFromRaw, 内存提取, 密码提取 参数: - raw: zip 的原始数据（[]byte、string 或 io.Rea...|
| [zip.ExtractFileWithOptions](#extractfilewithoptions) |ExtractFileWithOptions 从 ZIP 文件提取单个文件，支持 ExtractOption（如密码） 关键词: ExtractFile, 密码提取 参数: - zipFile: zip 文件路径 - targetFile: 待提取的条目名称 - opts: 可选的提取选项（如 ex...|
| [zip.ExtractFiles](#extractfiles) |ExtractFiles 从 ZIP 文件中并发提取多个文件 参数: - zipFile: zip 文件路径 - targetFiles: 待提取的条目名称列表 返回值: - 提取结果列表（每项含 FileName/Content/Error） - 错误信息|
| [zip.ExtractFilesFromRaw](#extractfilesfromraw) |ExtractFilesFromRaw 从内存中的 ZIP 原始数据中并发提取多个文件 参数: - raw: zip 的原始数据（[]byte、string 或 io.Reader） - targetFiles: 待提取的条目名称列表 返回值: - 提取结果列表（每项含 FileName/Conte...|
| [zip.ExtractFilesFromRawWithOptions](#extractfilesfromrawwithoptions) ||
| [zip.ExtractFilesWithOptions](#extractfileswithoptions) ||
| [zip.GrepPathRawRegexp](#greppathrawregexp) |GrepPathRawRegexp 使用正则表达式在内存 ZIP 原始数据的条目路径（文件名）中搜索 参数: - raw: zip 的原始数据（[]byte、string 或 io.Reader） - pattern: 路径正则表达式 - opts: 可选的 grep 配置选项 返回值: - 匹配的...|
| [zip.GrepPathRawSubString](#greppathrawsubstring) |GrepPathRawSubString 使用子字符串在内存 ZIP 原始数据的条目路径（文件名）中搜索 参数: - raw: zip 的原始数据（[]byte、string 或 io.Reader） - substring: 待搜索的路径子字符串 - opts: 可选的 grep 配置选项 返回值...|
| [zip.GrepPathRegexp](#greppathregexp) |GrepPathRegexp 使用正则表达式在 ZIP 文件的条目路径（文件名）中搜索 参数: - zipFile: zip 文件路径 - pattern: 路径正则表达式 - opts: 可选的 grep 配置选项 返回值: - 匹配的路径结果列表 - 错误信息|
| [zip.GrepPathSubString](#greppathsubstring) |GrepPathSubString 使用子字符串在 ZIP 文件的条目路径（文件名）中搜索 参数: - zipFile: zip 文件路径 - substring: 待搜索的路径子字符串 - opts: 可选的 grep 配置选项 返回值: - 匹配的路径结果列表 - 错误信息|
| [zip.GrepRawRegexp](#greprawregexp) |GrepRawRegexp 使用正则表达式在内存中的 ZIP 原始数据的条目内容中搜索 参数: - raw: zip 的原始数据（[]byte、string 或 io.Reader） - pattern: 正则表达式 - opts: 可选的 grep 配置选项 返回值: - 匹配结果列表 - 错误信...|
| [zip.GrepRawSubString](#greprawsubstring) |GrepRawSubString 使用子字符串在内存中的 ZIP 原始数据的条目内容中搜索（默认不区分大小写） 参数: - raw: zip 的原始数据（[]byte、string 或 io.Reader） - substring: 待搜索的子字符串 - opts: 可选的 grep 配置选项 返回...|
| [zip.GrepRegexp](#grepregexp) |GrepRegexp 使用正则表达式在 ZIP 文件的所有条目内容中搜索 参数: - zipFile: zip 文件路径 - pattern: 正则表达式 - opts: 可选的 grep 配置选项 返回值: - 匹配结果列表 - 错误信息|
| [zip.GrepSubString](#grepsubstring) |GrepSubString 使用子字符串在 ZIP 文件的所有条目内容中搜索（默认不区分大小写） 参数: - zipFile: zip 文件路径 - substring: 待搜索的子字符串 - opts: 可选的 grep 配置选项 返回值: - 匹配结果列表 - 错误信息|
| [zip.MergeGrepResults](#mergegrepresults) |MergeGrepResults 合并多个 GrepResult，将位于同一文件且上下文相邻的结果合并在一起 参数: - results: 待合并的 GrepResult 列表 返回值: - 合并后的 GrepResult 列表|
| [zip.NewGrepSearcher](#newgrepsearcher) |NewGrepSearcher 从一个 ZIP 文件创建带缓存的搜索器，适合对同一 zip 多次搜索 参数: - zipFile: zip 文件路径 返回值: - zip 搜索器对象 - 错误信息|
| [zip.NewGrepSearcherFromRaw](#newgrepsearcherfromraw) |NewGrepSearcherFromRaw 从内存中的 ZIP 原始数据创建带缓存的搜索器，适合对同一 zip 多次搜索 参数: - raw: zip 的原始数据（[]byte、string 或 io.Reader） - filename: 可选的逻辑文件名（仅用于结果展示） 返回值: - zip...|
| [zip.RRFRankResults](#rrfrankresults) |RRFRankResults 使用 RRF（Reciprocal Rank Fusion）算法对多组 GrepResult 进行融合排序 参数: - results: 待排序的 GrepResult 切片 返回值: - 重新排序后的 GrepResult 切片|
| [zip.Recursive](#recursive) |Recursive 递归遍历一个本地 zip 文件中的所有条目，对每个条目调用回调函数 参数: - i: 本地 zip 文件路径 - cb: 对每个条目调用的回调函数，参数为 (是否为目录, 条目路径, 文件信息) 返回值: - 错误信息|
| [zip.RecursiveFromRaw](#recursivefromraw) |RecursiveFromRaw 递归遍历内存中 zip 原始字节的所有条目，对每个条目调用回调函数 参数: - i: zip 文件的原始字节内容 - cb: 对每个条目调用的回调函数，参数为 (是否为目录, 条目路径, 文件信息) 返回值: - 错误信息|
| [zip.compressEncryption](#compressencryption) |compressEncryption 设置 zip 压缩的加密方法（默认 AES256） 关键词: zip 加密方法, AES256 参数: - method: 加密方法（如 zip.AES256、zip.AES128、zip.StandardEncryption） 返回值: - 一个压缩配置选项|
| [zip.compressPassword](#compresspassword) |compressPassword 为 zip 压缩设置加密密码 关键词: zip 压缩密码, 加密 zip 创建 参数: - password: 加密密码 返回值: - 一个压缩配置选项|
| [zip.decompressPassword](#decompresspassword) |decompressPassword 为 zip 解压设置解密密码 关键词: zip 解压密码 参数: - password: 解密密码 返回值: - 一个解压配置选项|
| [zip.extractPassword](#extractpassword) |extractPassword 为 zip 提取设置解密密码 关键词: zip 提取密码 参数: - password: 解密密码 返回值: - 一个提取配置选项|
| [zip.grepCaseSensitive](#grepcasesensitive) |grepCaseSensitive 设置 zip grep 子串搜索是否区分大小写 参数: - i: 是否区分大小写，不传则默认为 true 返回值: - 一个 grep 配置选项|
| [zip.grepContextLine](#grepcontextline) |grepContextLine 设置 zip grep 搜索时匹配行的上下文行数 参数: - context: 匹配行前后保留的上下文行数 返回值: - 一个 grep 配置选项|
| [zip.grepExcludePathRegexp](#grepexcludepathregexp) |grepExcludePathRegexp 排除路径匹配指定正则的条目（任一匹配即排除） 参数: - patterns: 一个或多个路径正则表达式 返回值: - 一个 grep 配置选项|
| [zip.grepExcludePathSubString](#grepexcludepathsubstring) |grepExcludePathSubString 排除路径包含指定子串的条目（任一匹配即排除） 参数: - patterns: 一个或多个路径子串 返回值: - 一个 grep 配置选项|
| [zip.grepIncludePathRegexp](#grepincludepathregexp) |grepIncludePathRegexp 仅在路径匹配指定正则的条目中搜索（任一匹配即可） 参数: - patterns: 一个或多个路径正则表达式 返回值: - 一个 grep 配置选项|
| [zip.grepIncludePathSubString](#grepincludepathsubstring) |grepIncludePathSubString 仅在路径包含指定子串的条目中搜索（任一匹配即可） 参数: - patterns: 一个或多个路径子串 返回值: - 一个 grep 配置选项|
| [zip.grepLimit](#greplimit) |grepLimit 设置 zip grep 搜索返回结果的最大数量 参数: - limit: 结果数量上限 返回值: - 一个 grep 配置选项|
| [zip.grepPassword](#greppassword) |grepPassword 在 zip 中执行 grep 时设置加密条目的解密密码 关键词: zip grep 密码, 加密 zip 搜索 参数: - password: 解密密码 返回值: - 一个 grep 配置选项|


## 函数定义
### Compress

#### 详细描述
暂无描述

#### 定义

`Compress(zipName string, filenames ...string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| zipName | `string` |  |
| filenames | `...string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |  |


### CompressByNameWithOptions

#### 详细描述
CompressByNameWithOptions 把若干本地文件/目录压缩为 zip 文件，支持 CompressOption（含密码、加密方法）。

关键词: CompressByName, 密码 zip 写

参数:

  - files: 待压缩的文件或目录路径列表

  - dest: 输出的 zip 文件路径（必须不存在）

  - opts: 可选的压缩选项（如 compressPassword、compressEncryption）



返回值:

  - 错误信息




Example:

``````````````yak
zip.CompressByNameWithOptions(["/tmp/a.txt"], "/tmp/out.zip", zip.compressPassword("123456"))~
``````````````


#### 定义

`CompressByNameWithOptions(files []string, dest string, opts ...CompressOption) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| files | `[]string` | 待压缩的文件或目录路径列表 |
| dest | `string` | 输出的 zip 文件路径（必须不存在） |
| opts | `...CompressOption` | 可选的压缩选项（如 compressPassword、compressEncryption） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### CompressRaw

#### 详细描述
CompressRaw 将一个 map（文件名 -&gt; 内容）在内存中压缩为 zip 字节切片

参数:

  - i: 文件名到内容的映射（值可以是字符串或字节切片）



返回值:

  - 压缩后的 zip 字节切片

  - 错误信息




Example:

``````````````yak
// 内存压缩后再从字节中提取，验证往返一致
zipBytes = zip.CompressRaw({"a.txt": "hello world"})~
content = zip.ExtractFileFromRaw(zipBytes, "a.txt")~
assert string(content) == "hello world", "CompressRaw then ExtractFileFromRaw should round-trip"
``````````````


#### 定义

`CompressRaw(i any) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 文件名到内容的映射（值可以是字符串或字节切片） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 压缩后的 zip 字节切片 |
| r2 | `error` | 错误信息 |


### CompressRawWithPassword

#### 详细描述
CompressRawWithPassword 与 CompressRaw 类似，但生成带密码（默认 AES-256）加密的 zip 字节。

关键词: 内存加密 zip, AES256 zip 创建

参数:

  - i: 文件名到内容的映射

  - password: 加密密码

  - encryption: 可选的加密方法（默认 AES256）



返回值:

  - 加密后的 zip 字节切片

  - 错误信息




Example:

``````````````yak
// 加密压缩后用密码提取，验证往返一致
zipBytes = zip.CompressRawWithPassword({"s.txt": "secret"}, "123456")~
content = zip.ExtractFileFromRawWithOptions(zipBytes, "s.txt", zip.extractPassword("123456"))~
assert string(content) == "secret", "encrypted CompressRaw should round-trip with password"
``````````````


#### 定义

`CompressRawWithPassword(i any, password string, encryption ...ziputil.EncryptionMethod) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 文件名到内容的映射 |
| password | `string` | 加密密码 |
| encryption | `...ziputil.EncryptionMethod` | 可选的加密方法（默认 AES256） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 加密后的 zip 字节切片 |
| r2 | `error` | 错误信息 |


### CompressWithPassword

#### 详细描述
CompressWithPassword 把若干本地文件压缩成带密码（AES-256）的 zip 文件。

关键词: 文件加密压缩, AES zip 压缩

参数:

  - zipName: 输出的 zip 文件路径

  - password: 加密密码

  - filenames: 一个或多个待压缩的文件路径



返回值:

  - 错误信息




Example:

``````````````yak
zip.CompressWithPassword("/tmp/out.zip", "123456", "/tmp/a.txt", "/tmp/b.txt")~
``````````````


#### 定义

`CompressWithPassword(zipName string, password string, filenames ...string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| zipName | `string` | 输出的 zip 文件路径 |
| password | `string` | 加密密码 |
| filenames | `...string` | 一个或多个待压缩的文件路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### Decompress

#### 详细描述
Decompress 解压一个 zip 文件到指定目标目录

参数:

  - zipFile: 待解压的 zip 文件路径

  - dest: 解压输出的目标目录



返回值:

  - 错误信息




Example:

``````````````yak
zip.Decompress("/tmp/abc.zip", "/tmp/abc_extracted")~
``````````````


#### 定义

`Decompress(zipFile string, dest string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| zipFile | `string` | 待解压的 zip 文件路径 |
| dest | `string` | 解压输出的目标目录 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### DecompressFromRawWithOptions

#### 详细描述
DecompressFromRawWithOptions 从内存 zip 原始字节解压到目标目录，支持 DecompressOption（如密码）。

关键词: zip 内存解压, DeCompressFromRaw, 密码 zip 解压

参数:

  - raw: zip 文件的原始字节内容

  - dest: 解压输出的目标目录

  - opts: 可选的解压选项（如 decompressPassword）



返回值:

  - 错误信息




Example:

``````````````yak
// 内存加密压缩后解压到临时目录，再读回验证
zipBytes = zip.CompressRawWithPassword({"a.txt": "AAA"}, "123456")~
dest = file.Join(os.TempDir(), "yak-zip-decompress")
zip.DecompressFromRawWithOptions(zipBytes, dest, zip.decompressPassword("123456"))~
content = file.ReadFile(file.Join(dest, "a.txt"))~
assert string(content) == "AAA", "DecompressFromRawWithOptions should restore the entry"
file.Remove(dest)
``````````````


#### 定义

`DecompressFromRawWithOptions(raw []byte, dest string, opts ...DecompressOption) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` | zip 文件的原始字节内容 |
| dest | `string` | 解压输出的目标目录 |
| opts | `...DecompressOption` | 可选的解压选项（如 decompressPassword） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### DecompressWithOptions

#### 详细描述
DecompressWithOptions 解压 zip 文件到目标目录，支持 DecompressOption（如密码）。

关键词: zip 解压密码, DeCompress

参数:

  - zipFile: 待解压的 zip 文件路径

  - dest: 解压输出的目标目录

  - opts: 可选的解压选项（如 decompressPassword）



返回值:

  - 错误信息




Example:

``````````````yak
zip.DecompressWithOptions("/tmp/enc.zip", "/tmp/dest", zip.decompressPassword("123456"))~
``````````````


#### 定义

`DecompressWithOptions(zipFile string, dest string, opts ...DecompressOption) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| zipFile | `string` | 待解压的 zip 文件路径 |
| dest | `string` | 解压输出的目标目录 |
| opts | `...DecompressOption` | 可选的解压选项（如 decompressPassword） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### DecompressWithPassword

#### 详细描述
DecompressWithPassword 解压带密码的 zip 到目标目录。

关键词: 加密 zip 解压, AES zip 解压

参数:

  - zipFile: 待解压的 zip 文件路径

  - dest: 解压输出的目标目录

  - password: 解密密码



返回值:

  - 错误信息




Example:

``````````````yak
zip.DecompressWithPassword("/tmp/out.zip", "/tmp/dest", "123456")~
``````````````


#### 定义

`DecompressWithPassword(zipFile string, dest string, password string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| zipFile | `string` | 待解压的 zip 文件路径 |
| dest | `string` | 解压输出的目标目录 |
| password | `string` | 解密密码 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### ExtractByPattern

#### 详细描述
ExtractByPattern 根据文件名模式（支持 * 通配符）从 ZIP 文件中提取匹配的文件

参数:

  - zipFile: zip 文件路径

  - pattern: 文件名匹配模式（如 &#34;*.txt&#34;）



返回值:

  - 提取结果列表（每项含 FileName/Content/Error）

  - 错误信息




Example:

``````````````yak
results = zip.ExtractByPattern("/tmp/abc.zip", "*.txt")~
for r in results { println(r.FileName) }
``````````````


#### 定义

`ExtractByPattern(zipFile string, pattern string) ([]*ExtractResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| zipFile | `string` | zip 文件路径 |
| pattern | `string` | 文件名匹配模式（如 &#34;*.txt&#34;） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*ExtractResult` | 提取结果列表（每项含 FileName/Content/Error） |
| r2 | `error` | 错误信息 |


### ExtractByPatternFromRaw

#### 详细描述
ExtractByPatternFromRaw 从内存中的 ZIP 原始数据按文件名模式（支持 * 通配符）提取匹配的文件

参数:

  - raw: zip 的原始数据（[]byte、string 或 io.Reader）

  - pattern: 文件名匹配模式（如 &#34;*.txt&#34;）



返回值:

  - 提取结果列表（每项含 FileName/Content/Error）

  - 错误信息




Example:

``````````````yak
zipBytes = zip.CompressRaw({"a.txt": "AAA", "b.log": "BBB"})~
results = zip.ExtractByPatternFromRaw(zipBytes, "*.txt")~
assert len(results) == 1, "only the .txt entry should match the pattern"
``````````````


#### 定义

`ExtractByPatternFromRaw(raw any, pattern string) ([]*ExtractResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `any` | zip 的原始数据（[]byte、string 或 io.Reader） |
| pattern | `string` | 文件名匹配模式（如 &#34;*.txt&#34;） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*ExtractResult` | 提取结果列表（每项含 FileName/Content/Error） |
| r2 | `error` | 错误信息 |


### ExtractByPatternFromRawWithOptions

#### 详细描述
暂无描述

#### 定义

`ExtractByPatternFromRawWithOptions(raw any, pattern string, opts ...ExtractOption) ([]*ExtractResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `any` |  |
| pattern | `string` |  |
| opts | `...ExtractOption` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*ExtractResult` |  |
| r2 | `error` |  |


### ExtractByPatternWithOptions

#### 详细描述
暂无描述

#### 定义

`ExtractByPatternWithOptions(zipFile string, pattern string, opts ...ExtractOption) ([]*ExtractResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| zipFile | `string` |  |
| pattern | `string` |  |
| opts | `...ExtractOption` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*ExtractResult` |  |
| r2 | `error` |  |


### ExtractFile

#### 详细描述
ExtractFile 从 ZIP 文件中提取单个文件的内容

参数:

  - zipFile: zip 文件路径

  - targetFile: 待提取的 zip 内条目名称



返回值:

  - 提取出的文件内容字节

  - 错误信息




Example:

``````````````yak
content = zip.ExtractFile("/tmp/abc.zip", "a.txt")~
``````````````


#### 定义

`ExtractFile(zipFile string, targetFile string) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| zipFile | `string` | zip 文件路径 |
| targetFile | `string` | 待提取的 zip 内条目名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 提取出的文件内容字节 |
| r2 | `error` | 错误信息 |


### ExtractFileFromRaw

#### 详细描述
ExtractFileFromRaw 从内存中的 ZIP 原始数据中提取单个文件的内容

参数:

  - raw: zip 的原始数据（[]byte、string 或 io.Reader）

  - targetFile: 待提取的 zip 内条目名称



返回值:

  - 提取出的文件内容字节

  - 错误信息




Example:

``````````````yak
zipBytes = zip.CompressRaw({"a.txt": "hello world"})~
content = zip.ExtractFileFromRaw(zipBytes, "a.txt")~
assert string(content) == "hello world", "ExtractFileFromRaw should return the entry content"
``````````````


#### 定义

`ExtractFileFromRaw(raw any, targetFile string) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `any` | zip 的原始数据（[]byte、string 或 io.Reader） |
| targetFile | `string` | 待提取的 zip 内条目名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 提取出的文件内容字节 |
| r2 | `error` | 错误信息 |


### ExtractFileFromRawWithOptions

#### 详细描述
ExtractFileFromRawWithOptions 从内存 ZIP 原始字节提取单个文件，支持 ExtractOption（如密码）

关键词: ExtractFileFromRaw, 内存提取, 密码提取

参数:

  - raw: zip 的原始数据（[]byte、string 或 io.Reader）

  - targetFile: 待提取的条目名称

  - opts: 可选的提取选项（如 extractPassword）



返回值:

  - 提取出的文件内容字节

  - 错误信息




Example:

``````````````yak
zipBytes = zip.CompressRawWithPassword({"s.txt": "secret"}, "123456")~
content = zip.ExtractFileFromRawWithOptions(zipBytes, "s.txt", zip.extractPassword("123456"))~
assert string(content) == "secret", "should extract encrypted entry with password"
``````````````


#### 定义

`ExtractFileFromRawWithOptions(raw any, targetFile string, opts ...ExtractOption) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `any` | zip 的原始数据（[]byte、string 或 io.Reader） |
| targetFile | `string` | 待提取的条目名称 |
| opts | `...ExtractOption` | 可选的提取选项（如 extractPassword） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 提取出的文件内容字节 |
| r2 | `error` | 错误信息 |


### ExtractFileWithOptions

#### 详细描述
ExtractFileWithOptions 从 ZIP 文件提取单个文件，支持 ExtractOption（如密码）

关键词: ExtractFile, 密码提取

参数:

  - zipFile: zip 文件路径

  - targetFile: 待提取的条目名称

  - opts: 可选的提取选项（如 extractPassword）



返回值:

  - 提取出的文件内容字节

  - 错误信息




Example:

``````````````yak
content = zip.ExtractFileWithOptions("/tmp/enc.zip", "s.txt", zip.extractPassword("123456"))~
``````````````


#### 定义

`ExtractFileWithOptions(zipFile string, targetFile string, opts ...ExtractOption) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| zipFile | `string` | zip 文件路径 |
| targetFile | `string` | 待提取的条目名称 |
| opts | `...ExtractOption` | 可选的提取选项（如 extractPassword） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 提取出的文件内容字节 |
| r2 | `error` | 错误信息 |


### ExtractFiles

#### 详细描述
ExtractFiles 从 ZIP 文件中并发提取多个文件

参数:

  - zipFile: zip 文件路径

  - targetFiles: 待提取的条目名称列表



返回值:

  - 提取结果列表（每项含 FileName/Content/Error）

  - 错误信息




Example:

``````````````yak
results = zip.ExtractFiles("/tmp/abc.zip", ["a.txt", "b.txt"])~
for r in results { println(r.FileName) }
``````````````


#### 定义

`ExtractFiles(zipFile string, targetFiles []string) ([]*ExtractResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| zipFile | `string` | zip 文件路径 |
| targetFiles | `[]string` | 待提取的条目名称列表 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*ExtractResult` | 提取结果列表（每项含 FileName/Content/Error） |
| r2 | `error` | 错误信息 |


### ExtractFilesFromRaw

#### 详细描述
ExtractFilesFromRaw 从内存中的 ZIP 原始数据中并发提取多个文件

参数:

  - raw: zip 的原始数据（[]byte、string 或 io.Reader）

  - targetFiles: 待提取的条目名称列表



返回值:

  - 提取结果列表（每项含 FileName/Content/Error）

  - 错误信息




Example:

``````````````yak
zipBytes = zip.CompressRaw({"a.txt": "AAA", "b.txt": "BBB"})~
results = zip.ExtractFilesFromRaw(zipBytes, ["a.txt"])~
assert len(results) == 1, "ExtractFilesFromRaw should return one matched file"
assert string(results[0].Content) == "AAA", "extracted content should match"
``````````````


#### 定义

`ExtractFilesFromRaw(raw any, targetFiles []string) ([]*ExtractResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `any` | zip 的原始数据（[]byte、string 或 io.Reader） |
| targetFiles | `[]string` | 待提取的条目名称列表 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*ExtractResult` | 提取结果列表（每项含 FileName/Content/Error） |
| r2 | `error` | 错误信息 |


### ExtractFilesFromRawWithOptions

#### 详细描述
暂无描述

#### 定义

`ExtractFilesFromRawWithOptions(raw any, targetFiles []string, opts ...ExtractOption) ([]*ExtractResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `any` |  |
| targetFiles | `[]string` |  |
| opts | `...ExtractOption` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*ExtractResult` |  |
| r2 | `error` |  |


### ExtractFilesWithOptions

#### 详细描述
暂无描述

#### 定义

`ExtractFilesWithOptions(zipFile string, targetFiles []string, opts ...ExtractOption) ([]*ExtractResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| zipFile | `string` |  |
| targetFiles | `[]string` |  |
| opts | `...ExtractOption` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*ExtractResult` |  |
| r2 | `error` |  |


### GrepPathRawRegexp

#### 详细描述
GrepPathRawRegexp 使用正则表达式在内存 ZIP 原始数据的条目路径（文件名）中搜索

参数:

  - raw: zip 的原始数据（[]byte、string 或 io.Reader）

  - pattern: 路径正则表达式

  - opts: 可选的 grep 配置选项



返回值:

  - 匹配的路径结果列表

  - 错误信息




Example:

``````````````yak
zipBytes = zip.CompressRaw({"dir/a.txt": "x"})~
results = zip.GrepPathRawRegexp(zipBytes, `a\.txt`)~
assert len(results) == 1, "GrepPathRawRegexp should match the entry path"
``````````````


#### 定义

`GrepPathRawRegexp(raw any, pattern string, opts ...GrepOption) ([]*GrepResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `any` | zip 的原始数据（[]byte、string 或 io.Reader） |
| pattern | `string` | 路径正则表达式 |
| opts | `...GrepOption` | 可选的 grep 配置选项 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*GrepResult` | 匹配的路径结果列表 |
| r2 | `error` | 错误信息 |


### GrepPathRawSubString

#### 详细描述
GrepPathRawSubString 使用子字符串在内存 ZIP 原始数据的条目路径（文件名）中搜索

参数:

  - raw: zip 的原始数据（[]byte、string 或 io.Reader）

  - substring: 待搜索的路径子字符串

  - opts: 可选的 grep 配置选项



返回值:

  - 匹配的路径结果列表

  - 错误信息




Example:

``````````````yak
zipBytes = zip.CompressRaw({"dir/a.txt": "x"})~
results = zip.GrepPathRawSubString(zipBytes, "a.txt")~
assert len(results) == 1, "GrepPathRawSubString should match the entry path"
assert results[0].FileName == "dir/a.txt", "matched path should be the entry name"
``````````````


#### 定义

`GrepPathRawSubString(raw any, substring string, opts ...GrepOption) ([]*GrepResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `any` | zip 的原始数据（[]byte、string 或 io.Reader） |
| substring | `string` | 待搜索的路径子字符串 |
| opts | `...GrepOption` | 可选的 grep 配置选项 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*GrepResult` | 匹配的路径结果列表 |
| r2 | `error` | 错误信息 |


### GrepPathRegexp

#### 详细描述
GrepPathRegexp 使用正则表达式在 ZIP 文件的条目路径（文件名）中搜索

参数:

  - zipFile: zip 文件路径

  - pattern: 路径正则表达式

  - opts: 可选的 grep 配置选项



返回值:

  - 匹配的路径结果列表

  - 错误信息




Example:

``````````````yak
results = zip.GrepPathRegexp("/tmp/abc.zip", `\.txt$`)~
for r in results { println(r.FileName) }
``````````````


#### 定义

`GrepPathRegexp(zipFile string, pattern string, opts ...GrepOption) ([]*GrepResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| zipFile | `string` | zip 文件路径 |
| pattern | `string` | 路径正则表达式 |
| opts | `...GrepOption` | 可选的 grep 配置选项 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*GrepResult` | 匹配的路径结果列表 |
| r2 | `error` | 错误信息 |


### GrepPathSubString

#### 详细描述
GrepPathSubString 使用子字符串在 ZIP 文件的条目路径（文件名）中搜索

参数:

  - zipFile: zip 文件路径

  - substring: 待搜索的路径子字符串

  - opts: 可选的 grep 配置选项



返回值:

  - 匹配的路径结果列表

  - 错误信息




Example:

``````````````yak
results = zip.GrepPathSubString("/tmp/abc.zip", "config")~
for r in results { println(r.FileName) }
``````````````


#### 定义

`GrepPathSubString(zipFile string, substring string, opts ...GrepOption) ([]*GrepResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| zipFile | `string` | zip 文件路径 |
| substring | `string` | 待搜索的路径子字符串 |
| opts | `...GrepOption` | 可选的 grep 配置选项 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*GrepResult` | 匹配的路径结果列表 |
| r2 | `error` | 错误信息 |


### GrepRawRegexp

#### 详细描述
GrepRawRegexp 使用正则表达式在内存中的 ZIP 原始数据的条目内容中搜索

参数:

  - raw: zip 的原始数据（[]byte、string 或 io.Reader）

  - pattern: 正则表达式

  - opts: 可选的 grep 配置选项



返回值:

  - 匹配结果列表

  - 错误信息




Example:

``````````````yak
zipBytes = zip.CompressRaw({"a.txt": "hello\nworld"})~
results = zip.GrepRawRegexp(zipBytes, "w.rld")~
assert len(results) == 1, "GrepRawRegexp should find the matching line"
``````````````


#### 定义

`GrepRawRegexp(raw any, pattern string, opts ...GrepOption) ([]*GrepResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `any` | zip 的原始数据（[]byte、string 或 io.Reader） |
| pattern | `string` | 正则表达式 |
| opts | `...GrepOption` | 可选的 grep 配置选项 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*GrepResult` | 匹配结果列表 |
| r2 | `error` | 错误信息 |


### GrepRawSubString

#### 详细描述
GrepRawSubString 使用子字符串在内存中的 ZIP 原始数据的条目内容中搜索（默认不区分大小写）

参数:

  - raw: zip 的原始数据（[]byte、string 或 io.Reader）

  - substring: 待搜索的子字符串

  - opts: 可选的 grep 配置选项



返回值:

  - 匹配结果列表

  - 错误信息




Example:

``````````````yak
zipBytes = zip.CompressRaw({"a.txt": "hello\nworld"})~
results = zip.GrepRawSubString(zipBytes, "world")~
assert len(results) == 1, "GrepRawSubString should find one match"
assert results[0].LineNumber == 2, "match should be on the second line"
``````````````


#### 定义

`GrepRawSubString(raw any, substring string, opts ...GrepOption) ([]*GrepResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `any` | zip 的原始数据（[]byte、string 或 io.Reader） |
| substring | `string` | 待搜索的子字符串 |
| opts | `...GrepOption` | 可选的 grep 配置选项 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*GrepResult` | 匹配结果列表 |
| r2 | `error` | 错误信息 |


### GrepRegexp

#### 详细描述
GrepRegexp 使用正则表达式在 ZIP 文件的所有条目内容中搜索

参数:

  - zipFile: zip 文件路径

  - pattern: 正则表达式

  - opts: 可选的 grep 配置选项



返回值:

  - 匹配结果列表

  - 错误信息




Example:

``````````````yak
results = zip.GrepRegexp("/tmp/abc.zip", "password\\s*=")~
for r in results { println(r.FileName, r.LineNumber, r.Line) }
``````````````


#### 定义

`GrepRegexp(zipFile string, pattern string, opts ...GrepOption) ([]*GrepResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| zipFile | `string` | zip 文件路径 |
| pattern | `string` | 正则表达式 |
| opts | `...GrepOption` | 可选的 grep 配置选项 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*GrepResult` | 匹配结果列表 |
| r2 | `error` | 错误信息 |


### GrepSubString

#### 详细描述
GrepSubString 使用子字符串在 ZIP 文件的所有条目内容中搜索（默认不区分大小写）

参数:

  - zipFile: zip 文件路径

  - substring: 待搜索的子字符串

  - opts: 可选的 grep 配置选项



返回值:

  - 匹配结果列表

  - 错误信息




Example:

``````````````yak
results = zip.GrepSubString("/tmp/abc.zip", "password")~
for r in results { println(r.FileName, r.LineNumber, r.Line) }
``````````````


#### 定义

`GrepSubString(zipFile string, substring string, opts ...GrepOption) ([]*GrepResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| zipFile | `string` | zip 文件路径 |
| substring | `string` | 待搜索的子字符串 |
| opts | `...GrepOption` | 可选的 grep 配置选项 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*GrepResult` | 匹配结果列表 |
| r2 | `error` | 错误信息 |


### MergeGrepResults

#### 详细描述
MergeGrepResults 合并多个 GrepResult，将位于同一文件且上下文相邻的结果合并在一起

参数:

  - results: 待合并的 GrepResult 列表



返回值:

  - 合并后的 GrepResult 列表




Example:

``````````````yak
zipBytes = zip.CompressRaw({"a.txt": "hello\nworld"})~
results = zip.GrepRawSubString(zipBytes, "world")~
merged = zip.MergeGrepResults(results)
assert len(merged) >= 1, "MergeGrepResults should keep at least one result"
``````````````


#### 定义

`MergeGrepResults(results []*GrepResult) []*GrepResult`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| results | `[]*GrepResult` | 待合并的 GrepResult 列表 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*GrepResult` | 合并后的 GrepResult 列表 |


### NewGrepSearcher

#### 详细描述
NewGrepSearcher 从一个 ZIP 文件创建带缓存的搜索器，适合对同一 zip 多次搜索

参数:

  - zipFile: zip 文件路径



返回值:

  - zip 搜索器对象

  - 错误信息




Example:

``````````````yak
searcher = zip.NewGrepSearcher("/tmp/abc.zip")~
results = searcher.GrepSubString("password")~
``````````````


#### 定义

`NewGrepSearcher(zipFile string) (*ZipGrepSearcher, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| zipFile | `string` | zip 文件路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ZipGrepSearcher` | zip 搜索器对象 |
| r2 | `error` | 错误信息 |


### NewGrepSearcherFromRaw

#### 详细描述
NewGrepSearcherFromRaw 从内存中的 ZIP 原始数据创建带缓存的搜索器，适合对同一 zip 多次搜索

参数:

  - raw: zip 的原始数据（[]byte、string 或 io.Reader）

  - filename: 可选的逻辑文件名（仅用于结果展示）



返回值:

  - zip 搜索器对象

  - 错误信息




Example:

``````````````yak
zipBytes = zip.CompressRaw({"a.txt": "hello\nworld"})~
searcher = zip.NewGrepSearcherFromRaw(zipBytes)~
results = searcher.GrepSubString("world")~
assert len(results) == 1, "searcher should find one match"
``````````````


#### 定义

`NewGrepSearcherFromRaw(raw any, filename ...string) (*ZipGrepSearcher, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `any` | zip 的原始数据（[]byte、string 或 io.Reader） |
| filename | `...string` | 可选的逻辑文件名（仅用于结果展示） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ZipGrepSearcher` | zip 搜索器对象 |
| r2 | `error` | 错误信息 |


### RRFRankResults

#### 详细描述
RRFRankResults 使用 RRF（Reciprocal Rank Fusion）算法对多组 GrepResult 进行融合排序

参数:

  - results: 待排序的 GrepResult 切片



返回值:

  - 重新排序后的 GrepResult 切片




Example:

``````````````yak
// 在内存 zip 中搜索后对结果进行 RRF 排序
zipBytes = zip.CompressRaw({"a.txt": "hello\nworld"})~
results = zip.GrepRawSubString(zipBytes, "world")~
ranked = zip.RRFRankResults(results)
assert len(ranked) == len(results), "RRFRankResults should keep all results"
``````````````


#### 定义

`RRFRankResults(results []*ziputil.GrepResult) []*ziputil.GrepResult`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| results | `[]*ziputil.GrepResult` | 待排序的 GrepResult 切片 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*ziputil.GrepResult` | 重新排序后的 GrepResult 切片 |


### Recursive

#### 详细描述
Recursive 递归遍历一个本地 zip 文件中的所有条目，对每个条目调用回调函数

参数:

  - i: 本地 zip 文件路径

  - cb: 对每个条目调用的回调函数，参数为 (是否为目录, 条目路径, 文件信息)



返回值:

  - 错误信息




Example:

``````````````yak
zip.Recursive("/tmp/abc.zip", (isDir, pathName, info) => {
		log.info("isDir: %v, pathName: %v, info: %v", isDir, pathName, info.Name())
})~
``````````````


#### 定义

`Recursive(i any, cb func(isDir bool, pathName string, info os.FileInfo) error) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 本地 zip 文件路径 |
| cb | `func(isDir bool, pathName string, info os.FileInfo) error` | 对每个条目调用的回调函数，参数为 (是否为目录, 条目路径, 文件信息) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### RecursiveFromRaw

#### 详细描述
RecursiveFromRaw 递归遍历内存中 zip 原始字节的所有条目，对每个条目调用回调函数

参数:

  - i: zip 文件的原始字节内容

  - cb: 对每个条目调用的回调函数，参数为 (是否为目录, 条目路径, 文件信息)



返回值:

  - 错误信息




Example:

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


#### 定义

`RecursiveFromRaw(i any, cb func(isDir bool, pathName string, info os.FileInfo) error) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | zip 文件的原始字节内容 |
| cb | `func(isDir bool, pathName string, info os.FileInfo) error` | 对每个条目调用的回调函数，参数为 (是否为目录, 条目路径, 文件信息) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### compressEncryption

#### 详细描述
compressEncryption 设置 zip 压缩的加密方法（默认 AES256）

关键词: zip 加密方法, AES256

参数:

  - method: 加密方法（如 zip.AES256、zip.AES128、zip.StandardEncryption）



返回值:

  - 一个压缩配置选项




Example:

``````````````yak
zip.CompressByNameWithOptions(["/tmp/a.txt"], "/tmp/out.zip", zip.compressPassword("123456"), zip.compressEncryption(zip.AES256))~
``````````````


#### 定义

`compressEncryption(method EncryptionMethod) CompressOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| method | `EncryptionMethod` | 加密方法（如 zip.AES256、zip.AES128、zip.StandardEncryption） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CompressOption` | 一个压缩配置选项 |


### compressPassword

#### 详细描述
compressPassword 为 zip 压缩设置加密密码

关键词: zip 压缩密码, 加密 zip 创建

参数:

  - password: 加密密码



返回值:

  - 一个压缩配置选项




Example:

``````````````yak
zip.CompressByNameWithOptions(["/tmp/a.txt"], "/tmp/out.zip", zip.compressPassword("123456"))~
``````````````


#### 定义

`compressPassword(password string) CompressOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| password | `string` | 加密密码 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CompressOption` | 一个压缩配置选项 |


### decompressPassword

#### 详细描述
decompressPassword 为 zip 解压设置解密密码

关键词: zip 解压密码

参数:

  - password: 解密密码



返回值:

  - 一个解压配置选项




Example:

``````````````yak
zip.DecompressWithOptions("/tmp/enc.zip", "/tmp/dest", zip.decompressPassword("123456"))~
``````````````


#### 定义

`decompressPassword(password string) DecompressOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| password | `string` | 解密密码 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `DecompressOption` | 一个解压配置选项 |


### extractPassword

#### 详细描述
extractPassword 为 zip 提取设置解密密码

关键词: zip 提取密码

参数:

  - password: 解密密码



返回值:

  - 一个提取配置选项




Example:

``````````````yak
zipBytes = zip.CompressRawWithPassword({"s.txt": "secret"}, "123456")~
content = zip.ExtractFileFromRawWithOptions(zipBytes, "s.txt", zip.extractPassword("123456"))~
assert string(content) == "secret", "extractPassword should allow decrypting the entry"
``````````````


#### 定义

`extractPassword(password string) ExtractOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| password | `string` | 解密密码 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ExtractOption` | 一个提取配置选项 |


### grepCaseSensitive

#### 详细描述
grepCaseSensitive 设置 zip grep 子串搜索是否区分大小写

参数:

  - i: 是否区分大小写，不传则默认为 true



返回值:

  - 一个 grep 配置选项




Example:

``````````````yak
results = zip.GrepSubString("/tmp/abc.zip", "Password", zip.grepCaseSensitive(true))~
``````````````


#### 定义

`grepCaseSensitive(i ...bool) GrepOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `...bool` | 是否区分大小写，不传则默认为 true |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GrepOption` | 一个 grep 配置选项 |


### grepContextLine

#### 详细描述
grepContextLine 设置 zip grep 搜索时匹配行的上下文行数

参数:

  - context: 匹配行前后保留的上下文行数



返回值:

  - 一个 grep 配置选项




Example:

``````````````yak
results = zip.GrepSubString("/tmp/abc.zip", "password", zip.grepContextLine(2))~
``````````````


#### 定义

`grepContextLine(context int) GrepOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| context | `int` | 匹配行前后保留的上下文行数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GrepOption` | 一个 grep 配置选项 |


### grepExcludePathRegexp

#### 详细描述
grepExcludePathRegexp 排除路径匹配指定正则的条目（任一匹配即排除）

参数:

  - patterns: 一个或多个路径正则表达式



返回值:

  - 一个 grep 配置选项




Example:

``````````````yak
results = zip.GrepSubString("/tmp/abc.zip", "key", zip.grepExcludePathRegexp(`_test\.go$`))~
``````````````


#### 定义

`grepExcludePathRegexp(patterns ...string) GrepOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| patterns | `...string` | 一个或多个路径正则表达式 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GrepOption` | 一个 grep 配置选项 |


### grepExcludePathSubString

#### 详细描述
grepExcludePathSubString 排除路径包含指定子串的条目（任一匹配即排除）

参数:

  - patterns: 一个或多个路径子串



返回值:

  - 一个 grep 配置选项




Example:

``````````````yak
results = zip.GrepSubString("/tmp/abc.zip", "key", zip.grepExcludePathSubString("test/"))~
``````````````


#### 定义

`grepExcludePathSubString(patterns ...string) GrepOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| patterns | `...string` | 一个或多个路径子串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GrepOption` | 一个 grep 配置选项 |


### grepIncludePathRegexp

#### 详细描述
grepIncludePathRegexp 仅在路径匹配指定正则的条目中搜索（任一匹配即可）

参数:

  - patterns: 一个或多个路径正则表达式



返回值:

  - 一个 grep 配置选项




Example:

``````````````yak
results = zip.GrepSubString("/tmp/abc.zip", "key", zip.grepIncludePathRegexp(`\.ya?ml$`))~
``````````````


#### 定义

`grepIncludePathRegexp(patterns ...string) GrepOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| patterns | `...string` | 一个或多个路径正则表达式 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GrepOption` | 一个 grep 配置选项 |


### grepIncludePathSubString

#### 详细描述
grepIncludePathSubString 仅在路径包含指定子串的条目中搜索（任一匹配即可）

参数:

  - patterns: 一个或多个路径子串



返回值:

  - 一个 grep 配置选项




Example:

``````````````yak
results = zip.GrepSubString("/tmp/abc.zip", "key", zip.grepIncludePathSubString("config/"))~
``````````````


#### 定义

`grepIncludePathSubString(patterns ...string) GrepOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| patterns | `...string` | 一个或多个路径子串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GrepOption` | 一个 grep 配置选项 |


### grepLimit

#### 详细描述
grepLimit 设置 zip grep 搜索返回结果的最大数量

参数:

  - limit: 结果数量上限



返回值:

  - 一个 grep 配置选项




Example:

``````````````yak
results = zip.GrepSubString("/tmp/abc.zip", "password", zip.grepLimit(10))~
``````````````


#### 定义

`grepLimit(limit int) GrepOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| limit | `int` | 结果数量上限 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GrepOption` | 一个 grep 配置选项 |


### grepPassword

#### 详细描述
grepPassword 在 zip 中执行 grep 时设置加密条目的解密密码

关键词: zip grep 密码, 加密 zip 搜索

参数:

  - password: 解密密码



返回值:

  - 一个 grep 配置选项




Example:

``````````````yak
results = zip.GrepSubString("/tmp/enc.zip", "secret", zip.grepPassword("123456"))~
``````````````


#### 定义

`grepPassword(password string) GrepOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| password | `string` | 解密密码 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GrepOption` | 一个 grep 配置选项 |


