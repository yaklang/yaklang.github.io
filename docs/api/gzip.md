# gzip {#library-gzip}

`gzip` 库提供 gzip 压缩与解压能力，用于处理 HTTP 响应、日志、归档等 gzip 编码的数据。

典型使用场景：

- 压缩/解压：`gzip.Compress` 压缩数据，`gzip.Decompress` 解压。
- 识别：`gzip.IsGzip` 判断字节流是否为 gzip 格式。

与相邻库的关系：`gzip` 是数据处理小工具，常与 `http`/`poc`（处理压缩响应）、`zip`（归档）、`codec`（编解码）配合。

> 共 3 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [gzip.Compress](#compress) | `i any` | `[]byte, error` | 使用 gzip 压缩数据，返回压缩后的字节与错误 |
| [gzip.Decompress](#decompress) | `ret []byte` | `[]byte, error` | 解压 gzip 数据，返回解压后的字节与错误 |
| [gzip.IsGzip](#isgzip) | `raw []byte` | `bool` | 判断给定字节切片是否为 gzip 压缩数据（通过检查魔数头） |

## 函数详情

### Compress {#compress}

```go
Compress(i any) ([]byte, error)
```

使用 gzip 压缩数据，返回压缩后的字节与错误

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 待压缩的数据，支持字符串、字节切片或 io.Reader |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 压缩后的字节切片（带 gzip 魔数头） |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 压缩后再解压应还原原始数据（round-trip）
compressed = gzip.Compress("hello yaklang")~
assert gzip.IsGzip(compressed), "compressed output should have gzip magic header"
raw = gzip.Decompress(compressed)~
assert string(raw) == "hello yaklang", "gzip compress then decompress should round-trip"
println("gzip round-trip example passed")
``````````````

---

### Decompress {#decompress}

```go
Decompress(ret []byte) ([]byte, error)
```

解压 gzip 数据，返回解压后的字节与错误

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| ret | `[]byte` | 经过 gzip 压缩的字节切片 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 解压还原后的字节切片 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 压缩再解压应还原原始数据（round-trip）
compressed = gzip.Compress("hello yaklang")~
raw = gzip.Decompress(compressed)~
assert string(raw) == "hello yaklang", "gzip decompress should restore original data"
println("gzip decompress example passed")
``````````````

---

### IsGzip {#isgzip}

```go
IsGzip(raw []byte) bool
```

判断给定字节切片是否为 gzip 压缩数据（通过检查魔数头）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| raw | `[]byte` | 待检测的字节切片 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `bool` | 是否为 gzip 数据（以 0x1f 0x8b 0x08 开头则为 true） |

**示例**

``````````````yak
compressed = gzip.Compress("hello yaklang")~
println(gzip.IsGzip(compressed))   // OUT: true
assert gzip.IsGzip(compressed), "gzip output should be detected as gzip"
assert !gzip.IsGzip("plain text"), "plain text should not be detected as gzip"
``````````````

---

