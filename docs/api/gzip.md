# gzip

|函数名|函数描述/介绍|
|:------|:--------|
| [gzip.Compress](#compress) |Compress 使用 gzip 压缩数据，返回压缩后的字节与错误 参数: - i: 待压缩的数据，支持字符串、字节切片或 io.Reader 返回值: - 压缩后的字节切片（带 gzip 魔数头） - 错误信息|
| [gzip.Decompress](#decompress) |Decompress 解压 gzip 数据，返回解压后的字节与错误 参数: - ret: 经过 gzip 压缩的字节切片 返回值: - 解压还原后的字节切片 - 错误信息|
| [gzip.IsGzip](#isgzip) |IsGzip 判断给定字节切片是否为 gzip 压缩数据（通过检查魔数头） 参数: - raw: 待检测的字节切片 返回值: - 是否为 gzip 数据（以 0x1f 0x8b 0x08 开头则为 true）|


## 函数定义
### Compress

#### 详细描述
Compress 使用 gzip 压缩数据，返回压缩后的字节与错误

参数:

  - i: 待压缩的数据，支持字符串、字节切片或 io.Reader



返回值:

  - 压缩后的字节切片（带 gzip 魔数头）

  - 错误信息




Example:

``````````````yak
// 压缩后再解压应还原原始数据（round-trip）
compressed = gzip.Compress("hello yaklang")~
assert gzip.IsGzip(compressed), "compressed output should have gzip magic header"
raw = gzip.Decompress(compressed)~
assert string(raw) == "hello yaklang", "gzip compress then decompress should round-trip"
println("gzip round-trip example passed")
``````````````


#### 定义

`Compress(i any) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待压缩的数据，支持字符串、字节切片或 io.Reader |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 压缩后的字节切片（带 gzip 魔数头） |
| r2 | `error` | 错误信息 |


### Decompress

#### 详细描述
Decompress 解压 gzip 数据，返回解压后的字节与错误

参数:

  - ret: 经过 gzip 压缩的字节切片



返回值:

  - 解压还原后的字节切片

  - 错误信息




Example:

``````````````yak
// 压缩再解压应还原原始数据（round-trip）
compressed = gzip.Compress("hello yaklang")~
raw = gzip.Decompress(compressed)~
assert string(raw) == "hello yaklang", "gzip decompress should restore original data"
println("gzip decompress example passed")
``````````````


#### 定义

`Decompress(ret []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ret | `[]byte` | 经过 gzip 压缩的字节切片 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 解压还原后的字节切片 |
| r2 | `error` | 错误信息 |


### IsGzip

#### 详细描述
IsGzip 判断给定字节切片是否为 gzip 压缩数据（通过检查魔数头）

参数:

  - raw: 待检测的字节切片



返回值:

  - 是否为 gzip 数据（以 0x1f 0x8b 0x08 开头则为 true）




Example:

``````````````yak
compressed = gzip.Compress("hello yaklang")~
println(gzip.IsGzip(compressed))   // OUT: true
assert gzip.IsGzip(compressed), "gzip output should be detected as gzip"
assert !gzip.IsGzip("plain text"), "plain text should not be detected as gzip"
``````````````


#### 定义

`IsGzip(raw []byte) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` | 待检测的字节切片 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 是否为 gzip 数据（以 0x1f 0x8b 0x08 开头则为 true） |


