# zip

|函数名|函数描述/介绍|
|:------|:--------|
| [zip.Compress](#compress) ||
| [zip.CompressRaw](#compressraw) |CompressRaw compresses a map to a zip file  |
| [zip.Decompress](#decompress) |解压 |
| [zip.Recursive](#recursive) |Recursive Decompress decompresses a zip file to a directory  |
| [zip.RecursiveFromRaw](#recursivefromraw) |RecursiveFromRaw decompresses a zip file to a directory  |


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


