# zip

|函数名|函数描述/介绍|
|:------|:--------|
| [zip.Compress](#compress) ||
| [zip.CompressRaw](#compressraw) |CompressRaw compresses a map to a zip file  |
| [zip.Decompress](#decompress) |解压 |
| [zip.ExtractByPattern](#extractbypattern) |ExtractByPattern 根据文件名模式提取文件（支持通配符） |
| [zip.ExtractByPatternFromRaw](#extractbypatternfromraw) |ExtractByPatternFromRaw 从原始数据根据文件名模式提取文件 |
| [zip.ExtractFile](#extractfile) |ExtractFile 从 ZIP 文件中提取单个文件 |
| [zip.ExtractFileFromRaw](#extractfilefromraw) |ExtractFileFromRaw 从 ZIP 原始数据中提取单个文件 |
| [zip.ExtractFiles](#extractfiles) |ExtractFiles 从 ZIP 文件中并发提取多个文件 |
| [zip.ExtractFilesFromRaw](#extractfilesfromraw) |ExtractFilesFromRaw 从 ZIP 原始数据中并发提取多个文件 |
| [zip.GrepPathRawRegexp](#greppathrawregexp) |GrepPathRawRegexp 使用正则表达式在原始数据中搜索文件路径 |
| [zip.GrepPathRawSubString](#greppathrawsubstring) |GrepPathRawSubString 使用子字符串在原始数据中搜索文件路径 |
| [zip.GrepPathRegexp](#greppathregexp) |GrepPathRegexp 使用正则表达式搜索文件路径 |
| [zip.GrepPathSubString](#greppathsubstring) |GrepPathSubString 使用子字符串搜索文件路径 |
| [zip.GrepRawRegexp](#greprawregexp) |GrepRawRegexp 使用正则表达式在 ZIP 原始数据中搜索 |
| [zip.GrepRawSubString](#greprawsubstring) |GrepRawSubString 使用子字符串在 ZIP 原始数据中搜索 |
| [zip.GrepRegexp](#grepregexp) |GrepRegexp 使用正则表达式在 ZIP 文件中搜索 |
| [zip.GrepSubString](#grepsubstring) |GrepSubString 使用子字符串在 ZIP 文件中搜索 |
| [zip.MergeGrepResults](#mergegrepresults) |MergeGrepResults 合并多个 GrepResult，将可以合并的结果合并在一起 |
| [zip.NewGrepSearcher](#newgrepsearcher) |NewZipGrepSearcher 创建一个新的 ZIP 搜索器（从文件） |
| [zip.NewGrepSearcherFromRaw](#newgrepsearcherfromraw) |NewZipGrepSearcherFromRaw 创建一个新的 ZIP 搜索器（从原始数据） |
| [zip.RRFRankResults](#rrfrankresults) |RRFRankGrepResults 使用 RRF 算法对 GrepResult 进行排序  |
| [zip.Recursive](#recursive) |Recursive Decompress decompresses a zip file to a directory  |
| [zip.RecursiveFromRaw](#recursivefromraw) |RecursiveFromRaw decompresses a zip file to a directory  |
| [zip.grepCaseSensitive](#grepcasesensitive) ||
| [zip.grepContextLine](#grepcontextline) ||
| [zip.grepExcludePathRegexp](#grepexcludepathregexp) ||
| [zip.grepExcludePathSubString](#grepexcludepathsubstring) ||
| [zip.grepIncludePathRegexp](#grepincludepathregexp) ||
| [zip.grepIncludePathSubString](#grepincludepathsubstring) ||
| [zip.grepLimit](#greplimit) ||


## 函数定义
### Compress

#### 详细描述


#### 定义

`Compress(zipName string, filenames ...string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| zipName | `string` |   |
| filenames | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### CompressRaw

#### 详细描述
CompressRaw compresses a map to a zip file

Example:
```

	zipBytes = zip.CompressRaw({
		 "a.txt": "hello",
	     "b.txt": "world",
	})~
	zipBytes2, err = zip.CompressRaw({ "a.txt": "hello", "b.txt": file.ReadFile("/tmp/external-file-name.txt")~ })

```


#### 定义

`CompressRaw(i any) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### Decompress

#### 详细描述
解压


#### 定义

`Decompress(zipFile string, dest string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| zipFile | `string` |   |
| dest | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### ExtractByPattern

#### 详细描述
ExtractByPattern 根据文件名模式提取文件（支持通配符）


#### 定义

`ExtractByPattern(zipFile string, pattern string) ([]*ExtractResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| zipFile | `string` |   |
| pattern | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*ExtractResult` |   |
| r2 | `error` |   |


### ExtractByPatternFromRaw

#### 详细描述
ExtractByPatternFromRaw 从原始数据根据文件名模式提取文件


#### 定义

`ExtractByPatternFromRaw(raw any, pattern string) ([]*ExtractResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `any` |   |
| pattern | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*ExtractResult` |   |
| r2 | `error` |   |


### ExtractFile

#### 详细描述
ExtractFile 从 ZIP 文件中提取单个文件


#### 定义

`ExtractFile(zipFile string, targetFile string) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| zipFile | `string` |   |
| targetFile | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### ExtractFileFromRaw

#### 详细描述
ExtractFileFromRaw 从 ZIP 原始数据中提取单个文件


#### 定义

`ExtractFileFromRaw(raw any, targetFile string) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `any` |   |
| targetFile | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### ExtractFiles

#### 详细描述
ExtractFiles 从 ZIP 文件中并发提取多个文件


#### 定义

`ExtractFiles(zipFile string, targetFiles []string) ([]*ExtractResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| zipFile | `string` |   |
| targetFiles | `[]string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*ExtractResult` |   |
| r2 | `error` |   |


### ExtractFilesFromRaw

#### 详细描述
ExtractFilesFromRaw 从 ZIP 原始数据中并发提取多个文件


#### 定义

`ExtractFilesFromRaw(raw any, targetFiles []string) ([]*ExtractResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `any` |   |
| targetFiles | `[]string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*ExtractResult` |   |
| r2 | `error` |   |


### GrepPathRawRegexp

#### 详细描述
GrepPathRawRegexp 使用正则表达式在原始数据中搜索文件路径


#### 定义

`GrepPathRawRegexp(raw any, pattern string, opts ...GrepOption) ([]*GrepResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `any` |   |
| pattern | `string` |   |
| opts | `...GrepOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*GrepResult` |   |
| r2 | `error` |   |


### GrepPathRawSubString

#### 详细描述
GrepPathRawSubString 使用子字符串在原始数据中搜索文件路径


#### 定义

`GrepPathRawSubString(raw any, substring string, opts ...GrepOption) ([]*GrepResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `any` |   |
| substring | `string` |   |
| opts | `...GrepOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*GrepResult` |   |
| r2 | `error` |   |


### GrepPathRegexp

#### 详细描述
GrepPathRegexp 使用正则表达式搜索文件路径


#### 定义

`GrepPathRegexp(zipFile string, pattern string, opts ...GrepOption) ([]*GrepResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| zipFile | `string` |   |
| pattern | `string` |   |
| opts | `...GrepOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*GrepResult` |   |
| r2 | `error` |   |


### GrepPathSubString

#### 详细描述
GrepPathSubString 使用子字符串搜索文件路径


#### 定义

`GrepPathSubString(zipFile string, substring string, opts ...GrepOption) ([]*GrepResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| zipFile | `string` |   |
| substring | `string` |   |
| opts | `...GrepOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*GrepResult` |   |
| r2 | `error` |   |


### GrepRawRegexp

#### 详细描述
GrepRawRegexp 使用正则表达式在 ZIP 原始数据中搜索


#### 定义

`GrepRawRegexp(raw any, pattern string, opts ...GrepOption) ([]*GrepResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `any` |   |
| pattern | `string` |   |
| opts | `...GrepOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*GrepResult` |   |
| r2 | `error` |   |


### GrepRawSubString

#### 详细描述
GrepRawSubString 使用子字符串在 ZIP 原始数据中搜索


#### 定义

`GrepRawSubString(raw any, substring string, opts ...GrepOption) ([]*GrepResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `any` |   |
| substring | `string` |   |
| opts | `...GrepOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*GrepResult` |   |
| r2 | `error` |   |


### GrepRegexp

#### 详细描述
GrepRegexp 使用正则表达式在 ZIP 文件中搜索


#### 定义

`GrepRegexp(zipFile string, pattern string, opts ...GrepOption) ([]*GrepResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| zipFile | `string` |   |
| pattern | `string` |   |
| opts | `...GrepOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*GrepResult` |   |
| r2 | `error` |   |


### GrepSubString

#### 详细描述
GrepSubString 使用子字符串在 ZIP 文件中搜索


#### 定义

`GrepSubString(zipFile string, substring string, opts ...GrepOption) ([]*GrepResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| zipFile | `string` |   |
| substring | `string` |   |
| opts | `...GrepOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*GrepResult` |   |
| r2 | `error` |   |


### MergeGrepResults

#### 详细描述
MergeGrepResults 合并多个 GrepResult，将可以合并的结果合并在一起


#### 定义

`MergeGrepResults(results []*GrepResult) []*GrepResult`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| results | `[]*GrepResult` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*GrepResult` |   |


### NewGrepSearcher

#### 详细描述
NewZipGrepSearcher 创建一个新的 ZIP 搜索器（从文件）


#### 定义

`NewGrepSearcher(zipFile string) (*ZipGrepSearcher, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| zipFile | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ZipGrepSearcher` |   |
| r2 | `error` |   |


### NewGrepSearcherFromRaw

#### 详细描述
NewZipGrepSearcherFromRaw 创建一个新的 ZIP 搜索器（从原始数据）


#### 定义

`NewGrepSearcherFromRaw(raw any, filename ...string) (*ZipGrepSearcher, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `any` |   |
| filename | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ZipGrepSearcher` |   |
| r2 | `error` |   |


### RRFRankResults

#### 详细描述
RRFRankGrepResults 使用 RRF 算法对 GrepResult 进行排序

Example:
```

	results1 = zip.GrepRegexp("file.zip", "pattern1")~
	results2 = zip.GrepSubString("file.zip", "keyword")~
	allResults = append(results1, results2...)
	ranked = zip.RRFRankResults(allResults)~

```


#### 定义

`RRFRankResults(results []*ziputil.GrepResult) []*ziputil.GrepResult`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| results | `[]*ziputil.GrepResult` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*ziputil.GrepResult` |   |


### Recursive

#### 详细描述
Recursive Decompress decompresses a zip file to a directory

Example:
```

	zip.Decompress("/tmp/abc.zip", (isDir, pathName, info) => {
			log.info("isDir: %v, pathName: %v, info: %v", isDir, pathName, info.Name())
	})~

```


#### 定义

`Recursive(i any, cb func(isDir bool, pathName string, info os.FileInfo) error) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |
| cb | `func(isDir bool, pathName string, info os.FileInfo) error` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### RecursiveFromRaw

#### 详细描述
RecursiveFromRaw decompresses a zip file to a directory

Example:
```

	raw = file.ReadFile("/tmp/abc.zip")~
	zip.RecursiveFromRawBytes(raw, (isDir, pathName, info) => {
			log.info("isDir: %v, pathName: %v, info: %v", isDir, pathName, info.Name())
	})

```


#### 定义

`RecursiveFromRaw(i any, cb func(isDir bool, pathName string, info os.FileInfo) error) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |
| cb | `func(isDir bool, pathName string, info os.FileInfo) error` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### grepCaseSensitive

#### 详细描述


#### 定义

`grepCaseSensitive(i ...bool) GrepOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `...bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GrepOption` |   |


### grepContextLine

#### 详细描述


#### 定义

`grepContextLine(context int) GrepOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| context | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GrepOption` |   |


### grepExcludePathRegexp

#### 详细描述


#### 定义

`grepExcludePathRegexp(patterns ...string) GrepOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| patterns | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GrepOption` |   |


### grepExcludePathSubString

#### 详细描述


#### 定义

`grepExcludePathSubString(patterns ...string) GrepOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| patterns | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GrepOption` |   |


### grepIncludePathRegexp

#### 详细描述


#### 定义

`grepIncludePathRegexp(patterns ...string) GrepOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| patterns | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GrepOption` |   |


### grepIncludePathSubString

#### 详细描述


#### 定义

`grepIncludePathSubString(patterns ...string) GrepOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| patterns | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GrepOption` |   |


### grepLimit

#### 详细描述


#### 定义

`grepLimit(limit int) GrepOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| limit | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `GrepOption` |   |


