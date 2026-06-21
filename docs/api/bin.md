# bin {#library-bin}

`bin` 库是二进制结构解析工具，用声明式的"描述符（PartDescriptor）"定义一段二进制数据的字段布局，然后把原始字节按布局解析成结构化结果。它适合解析自定义协议报文、文件格式头、TLV 结构等场景。

典型使用场景：

- 定义字段：`bin.toInt8/16/32/64`、`bin.toUint8/16/32/64` 解析定长整数，`bin.toBytes` / `bin.toRaw` 解析定长字节块，`bin.toBool` 解析布尔位。
- 组合结构：`bin.toStruct` 把若干字段组成结构体，`bin.toList` 解析重复字段列表，支持嵌套。
- 执行解析与取值：`bin.Read(data, descriptors...)` 按描述符解析输入数据得到结果切片，`bin.Find(results, name)` 按字段名取出某个解析结果。

与相邻库的关系：`bin` 偏底层二进制解析，常与 `codec`（编解码）、`pcapx`（抓包/造包）、`fuzz`（协议变异）配合，用于自定义协议的解析与构造。

> 共 17 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [bin.Find](#find) | `results []ResultIf, name string` | `ResultIf` | 根据字段名称在解析结果中查找对应的字段值 |
| [bin.toBytes](#tobytes) | `name string, size any` | `*PartDescriptor` | toRaw 创建一个字节数组类型描述符，用于从二进制数据中读取字节序列 |
| [bin.toRaw](#toraw) | `name string, size any` | `*PartDescriptor` | 创建一个字节数组类型描述符，用于从二进制数据中读取字节序列 |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [bin.Read](#read) | `data any, descriptors ...*PartDescriptor` | `[]ResultIf, error` | 从字节数据或IO流中按照指定的数据类型描述符读取二进制数据，解析成结构化的结果 |
| [bin.toBool](#tobool) | `name string, verbose ...string` | `*PartDescriptor` | 创建一个布尔类型描述符，用于从二进制数据中读取布尔值（非零为true） |
| [bin.toInt](#toint) | `name string, values ...string` | `*PartDescriptor` | toInt64 创建一个64位整数类型描述符，用于从二进制数据中读取int64值 |
| [bin.toInt16](#toint16) | `name string, values ...string` | `*PartDescriptor` | 创建一个16位整数类型描述符，用于从二进制数据中读取int16值 |
| [bin.toInt32](#toint32) | `name string, values ...string` | `*PartDescriptor` | 创建一个32位整数类型描述符，用于从二进制数据中读取int32值 |
| [bin.toInt64](#toint64) | `name string, values ...string` | `*PartDescriptor` | 创建一个64位整数类型描述符，用于从二进制数据中读取int64值 |
| [bin.toInt8](#toint8) | `name string, values ...string` | `*PartDescriptor` | 创建一个8位整数类型描述符，用于从二进制数据中读取int8值 |
| [bin.toList](#tolist) | `builder ...*PartDescriptor` | `*PartDescriptor` | 创建一个列表类型描述符，用于从二进制数据中按顺序读取多个相同格式的元素 |
| [bin.toStruct](#tostruct) | `builder ...*PartDescriptor` | `*PartDescriptor` | 创建一个结构体类型描述符，用于从二进制数据中读取不同类型字段组成的结构 |
| [bin.toUint](#touint) | `name string, values ...string` | `*PartDescriptor` | toUint64 创建一个64位无符号整数类型描述符，用于从二进制数据中读取uint64值 |
| [bin.toUint16](#touint16) | `name string, values ...string` | `*PartDescriptor` | 创建一个16位无符号整数类型描述符，用于从二进制数据中读取uint16值 |
| [bin.toUint32](#touint32) | `name string, values ...string` | `*PartDescriptor` | 创建一个32位无符号整数类型描述符，用于从二进制数据中读取uint32值 |
| [bin.toUint64](#touint64) | `name string, values ...string` | `*PartDescriptor` | 创建一个64位无符号整数类型描述符，用于从二进制数据中读取uint64值 |
| [bin.toUint8](#touint8) | `name string, values ...string` | `*PartDescriptor` | 创建一个8位无符号整数类型描述符，用于从二进制数据中读取uint8值 |

## 函数详情

### Find {#find}

```go
Find(results []ResultIf, name string) ResultIf
```

根据字段名称在解析结果中查找对应的字段值

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| results | `[]ResultIf` | 通过 bin.Read 获取的解析结果 |
| name | `string` | 要查找的字段名称 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ResultIf` | 找到的字段值，如果未找到则返回 nil |

**示例**

``````````````yak
data = codec.DecodeHex("1234ff")~
result = bin.Read(data, bin.toUint16("magic"), bin.toUint8("version"))~
version = bin.Find(result, "version")
println(version.AsUint8())   // OUT: 255
assert version.AsUint8() == 255, "Find should locate the version field by name"
``````````````

---

### toBytes {#tobytes}

```go
toBytes(name string, size any) *PartDescriptor
```

toRaw 创建一个字节数组类型描述符，用于从二进制数据中读取字节序列

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 字段名称，用于之后通过 Find 函数查找 |
| size | `any` | 字节长度（数字），或引用其他字段名称（字符串）作为长度值 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*PartDescriptor` | 类型描述符对象 |

**示例**

``````````````yak
// 读取长度为 2 的字节数组（0x41 0x42 即 "AB"）
data = codec.DecodeHex("4142")~
result = bin.Read(data, bin.toBytes("content", 2))~
println(result[0].AsString())   // OUT: AB
assert result[0].AsString() == "AB", "toBytes should read the fixed-length byte sequence"
``````````````

---

### toRaw {#toraw}

```go
toRaw(name string, size any) *PartDescriptor
```

创建一个字节数组类型描述符，用于从二进制数据中读取字节序列

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 字段名称，用于之后通过 Find 函数查找 |
| size | `any` | 字节长度（数字），或引用其他字段名称（字符串）作为长度值 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*PartDescriptor` | 类型描述符对象 |

**示例**

``````````````yak
// 读取长度为 2 的字节数组（0x41 0x42 即 "AB"）
data = codec.DecodeHex("4142")~
result = bin.Read(data, bin.toBytes("content", 2))~
println(result[0].AsString())   // OUT: AB
assert result[0].AsString() == "AB", "toBytes should read the fixed-length byte sequence"
``````````````

---

## 可变参数函数详情

### Read {#read}

```go
Read(data any, descriptors ...*PartDescriptor) ([]ResultIf, error)
```

从字节数据或IO流中按照指定的数据类型描述符读取二进制数据，解析成结构化的结果

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| data | `any` | 二进制数据或支持读取的流对象（[]byte、string 或 io.Reader） |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| descriptors | `...*PartDescriptor` | 一个或多个数据类型描述符，可以是 toUint16() 等类型描述符 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]ResultIf` | 解析结果切片，可通过索引访问各字段值 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 解析二进制数据：前两字节为 magic(uint16)，后一字节为 version(uint8)
data = codec.DecodeHex("123405")~
result = bin.Read(data, bin.toUint16("magic"), bin.toUint8("version"))~
println(result[0].AsUint16())   // OUT: 4660
assert result[0].AsUint16() == 4660, "magic should be parsed as 0x1234"
assert result[1].AsUint8() == 5, "version should be parsed as 5"
``````````````

---

### toBool {#tobool}

```go
toBool(name string, verbose ...string) *PartDescriptor
```

创建一个布尔类型描述符，用于从二进制数据中读取布尔值（非零为true）

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 字段名称，用于之后通过 Find 函数查找 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| verbose | `...string` | 可选的详细描述 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*PartDescriptor` | 类型描述符对象 |

**示例**

``````````````yak
// 读取一个字节，非零即为 true
data = codec.DecodeHex("ff")~
result = bin.Read(data, bin.toBool("ok"))~
println(result[0].AsBool())   // OUT: true
assert result[0].AsBool() == true, "non-zero byte should be parsed as true"
``````````````

---

### toInt {#toint}

```go
toInt(name string, values ...string) *PartDescriptor
```

toInt64 创建一个64位整数类型描述符，用于从二进制数据中读取int64值

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 字段名称，用于之后通过 Find 函数查找 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| values | `...string` | 可选的详细描述 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*PartDescriptor` | 类型描述符对象 |

**示例**

``````````````yak
data = codec.DecodeHex("0000000000000100")~
result = bin.Read(data, bin.toInt64("v"))~
println(result[0].AsInt64())   // OUT: 256
assert result[0].AsInt64() == 256, "0x...0100 should be parsed as int64 256"
``````````````

---

### toInt16 {#toint16}

```go
toInt16(name string, values ...string) *PartDescriptor
```

创建一个16位整数类型描述符，用于从二进制数据中读取int16值

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 字段名称，用于之后通过 Find 函数查找 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| values | `...string` | 可选的详细描述 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*PartDescriptor` | 类型描述符对象 |

**示例**

``````````````yak
data = codec.DecodeHex("ffff")~
result = bin.Read(data, bin.toInt16("v"))~
println(result[0].AsInt16())   // OUT: -1
assert result[0].AsInt16() == -1, "0xffff should be parsed as int16 -1"
``````````````

---

### toInt32 {#toint32}

```go
toInt32(name string, values ...string) *PartDescriptor
```

创建一个32位整数类型描述符，用于从二进制数据中读取int32值

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 字段名称，用于之后通过 Find 函数查找 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| values | `...string` | 可选的详细描述 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*PartDescriptor` | 类型描述符对象 |

**示例**

``````````````yak
data = codec.DecodeHex("0000ffff")~
result = bin.Read(data, bin.toInt32("v"))~
println(result[0].AsInt32())   // OUT: 65535
assert result[0].AsInt32() == 65535, "0x0000ffff should be parsed as int32 65535"
``````````````

---

### toInt64 {#toint64}

```go
toInt64(name string, values ...string) *PartDescriptor
```

创建一个64位整数类型描述符，用于从二进制数据中读取int64值

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 字段名称，用于之后通过 Find 函数查找 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| values | `...string` | 可选的详细描述 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*PartDescriptor` | 类型描述符对象 |

**示例**

``````````````yak
data = codec.DecodeHex("0000000000000100")~
result = bin.Read(data, bin.toInt64("v"))~
println(result[0].AsInt64())   // OUT: 256
assert result[0].AsInt64() == 256, "0x...0100 should be parsed as int64 256"
``````````````

---

### toInt8 {#toint8}

```go
toInt8(name string, values ...string) *PartDescriptor
```

创建一个8位整数类型描述符，用于从二进制数据中读取int8值

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 字段名称，用于之后通过 Find 函数查找 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| values | `...string` | 可选的详细描述 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*PartDescriptor` | 类型描述符对象 |

**示例**

``````````````yak
// 0xff 作为有符号 int8 解析为 -1
data = codec.DecodeHex("ff")~
result = bin.Read(data, bin.toInt8("b"))~
println(result[0].AsInt8())   // OUT: -1
assert result[0].AsInt8() == -1, "0xff should be parsed as int8 -1"
``````````````

---

### toList {#tolist}

```go
toList(builder ...*PartDescriptor) *PartDescriptor
```

创建一个列表类型描述符，用于从二进制数据中按顺序读取多个相同格式的元素

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| builder | `...*PartDescriptor` | 列表中的元素描述符（一个或多个） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*PartDescriptor` | 列表类型描述符对象 |

**示例**

``````````````yak
// 读取两个 uint16 构成的列表
data = codec.DecodeHex("00010002")~
result = bin.Read(data, bin.toList(bin.toUint16("item"), bin.toUint16("item")))~
list = result[0]
println(list.Result[0].AsUint16())   // OUT: 1
assert list.Result[0].AsUint16() == 1, "first list item should be 1"
assert list.Result[1].AsUint16() == 2, "second list item should be 2"
``````````````

---

### toStruct {#tostruct}

```go
toStruct(builder ...*PartDescriptor) *PartDescriptor
```

创建一个结构体类型描述符，用于从二进制数据中读取不同类型字段组成的结构

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| builder | `...*PartDescriptor` | 结构体中的字段描述符（一个或多个） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*PartDescriptor` | 结构体类型描述符对象 |

**示例**

``````````````yak
// 读取包含 magic(uint16) 和 version(uint8) 的结构体
data = codec.DecodeHex("123405")~
result = bin.Read(data, bin.toStruct(bin.toUint16("magic"), bin.toUint8("version")))~
structResult = result[0]
println(structResult.Result[0].AsUint16())   // OUT: 4660
assert structResult.Result[0].AsUint16() == 4660, "struct magic should be 0x1234"
assert structResult.Result[1].AsUint8() == 5, "struct version should be 5"
``````````````

---

### toUint {#touint}

```go
toUint(name string, values ...string) *PartDescriptor
```

toUint64 创建一个64位无符号整数类型描述符，用于从二进制数据中读取uint64值

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 字段名称，用于之后通过 Find 函数查找 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| values | `...string` | 可选的详细描述 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*PartDescriptor` | 类型描述符对象 |

**示例**

``````````````yak
data = codec.DecodeHex("0000000000000100")~
result = bin.Read(data, bin.toUint64("v"))~
println(result[0].AsUint64())   // OUT: 256
assert result[0].AsUint64() == 256, "0x...0100 should be parsed as uint64 256"
``````````````

---

### toUint16 {#touint16}

```go
toUint16(name string, values ...string) *PartDescriptor
```

创建一个16位无符号整数类型描述符，用于从二进制数据中读取uint16值

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 字段名称，用于之后通过 Find 函数查找 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| values | `...string` | 可选的详细描述 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*PartDescriptor` | 类型描述符对象 |

**示例**

``````````````yak
// 默认按大端序解析两个字节
data = codec.DecodeHex("1234")~
result = bin.Read(data, bin.toUint16("magic"))~
println(result[0].AsUint16())   // OUT: 4660
assert result[0].AsUint16() == 4660, "0x1234 should be parsed as uint16 4660"
``````````````

---

### toUint32 {#touint32}

```go
toUint32(name string, values ...string) *PartDescriptor
```

创建一个32位无符号整数类型描述符，用于从二进制数据中读取uint32值

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 字段名称，用于之后通过 Find 函数查找 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| values | `...string` | 可选的详细描述 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*PartDescriptor` | 类型描述符对象 |

**示例**

``````````````yak
data = codec.DecodeHex("0000ffff")~
result = bin.Read(data, bin.toUint32("v"))~
println(result[0].AsUint32())   // OUT: 65535
assert result[0].AsUint32() == 65535, "0x0000ffff should be parsed as uint32 65535"
``````````````

---

### toUint64 {#touint64}

```go
toUint64(name string, values ...string) *PartDescriptor
```

创建一个64位无符号整数类型描述符，用于从二进制数据中读取uint64值

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 字段名称，用于之后通过 Find 函数查找 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| values | `...string` | 可选的详细描述 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*PartDescriptor` | 类型描述符对象 |

**示例**

``````````````yak
data = codec.DecodeHex("0000000000000100")~
result = bin.Read(data, bin.toUint64("v"))~
println(result[0].AsUint64())   // OUT: 256
assert result[0].AsUint64() == 256, "0x...0100 should be parsed as uint64 256"
``````````````

---

### toUint8 {#touint8}

```go
toUint8(name string, values ...string) *PartDescriptor
```

创建一个8位无符号整数类型描述符，用于从二进制数据中读取uint8值

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 字段名称，用于之后通过 Find 函数查找 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| values | `...string` | 可选的详细描述 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*PartDescriptor` | 类型描述符对象 |

**示例**

``````````````yak
data = codec.DecodeHex("ff")~
result = bin.Read(data, bin.toUint8("b"))~
println(result[0].AsUint8())   // OUT: 255
assert result[0].AsUint8() == 255, "0xff should be parsed as uint8 255"
``````````````

---

