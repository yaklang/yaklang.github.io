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
| [zip.GrepRawRegexp](#greprawregexp) |GrepRawRegexp 使用正则表达式在 ZIP 原始数据中搜索 |
| [zip.GrepRawSubString](#greprawsubstring) |GrepRawSubString 使用子字符串在 ZIP 原始数据中搜索 |
| [zip.GrepRegexp](#grepregexp) |GrepRegexp 使用正则表达式在 ZIP 文件中搜索 |
| [zip.GrepSubString](#grepsubstring) |GrepSubString 使用子字符串在 ZIP 文件中搜索 |
| [zip.Recursive](#recursive) |Recursive Decompress decompresses a zip file to a directory  |
| [zip.RecursiveFromRaw](#recursivefromraw) |RecursiveFromRaw decompresses a zip file to a directory  |
| [zip.grepCaseSensitive](#grepcasesensitive) ||
| [zip.grepContextLine](#grepcontextline) ||
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

`grepCaseSensitive()`


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


