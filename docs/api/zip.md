# zip

|成员函数|函数描述/介绍|
|:------|:--------|
| [zip.Compress](#Compress) ||
| [zip.Decompress](#Decompress) |解压|


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


