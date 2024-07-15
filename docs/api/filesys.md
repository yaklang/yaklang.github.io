# filesys

|函数名|函数描述/介绍|
|:------|:--------|
| [filesys.Recursive](#recursive) |Recursive recursively walk through the file system  raw: the root path  opts: options  return: error    |
| [filesys.dir](#dir) ||
| [filesys.onDirStat](#ondirstat) |onDirStat will be called when the walker met one directory. |
| [filesys.onFileStat](#onfilestat) |onFileStat will be called when the walker met one file. |
| [filesys.onReady](#onready) |onReady will be called when the walker is ready to start walking. |
| [filesys.onStat](#onstat) |onStat will be called when the walker met one file description. |


## 函数定义
### Recursive

#### 详细描述
Recursive recursively walk through the file system

raw: the root path

opts: options

return: error



Example:
```
err := filesys.Recursive( //

	&#34;testdata&#34;,
	filesys.dir([&#34;cc&#34;, &#34;dd&#34;], filesys.onFileStat((name, info) =&gt; {})),

)
```


#### 定义

`Recursive(raw string, opts ...Option) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `string` |   |
| opts | `...Option` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### dir

#### 详细描述


#### 定义

`dir(globDir string, opts ...Option) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| globDir | `string` |   |
| opts | `...Option` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### onDirStat

#### 详细描述
onDirStat will be called when the walker met one directory.


#### 定义

`onDirStat(h func(pathname string, info os.FileInfo)) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `func(pathname string, info os.FileInfo)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### onFileStat

#### 详细描述
onFileStat will be called when the walker met one file.


#### 定义

`onFileStat(h func(pathname string, info os.FileInfo)) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `func(pathname string, info os.FileInfo)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### onReady

#### 详细描述
onReady will be called when the walker is ready to start walking.


#### 定义

`onReady(h func(name string, isDir bool)) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `func(name string, isDir bool)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### onStat

#### 详细描述
onStat will be called when the walker met one file description.


#### 定义

`onStat(h func(isDir bool, pathname string, info os.FileInfo)) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `func(isDir bool, pathname string, info os.FileInfo)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


