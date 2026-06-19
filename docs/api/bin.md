# bin

|函数名|函数描述/介绍|
|:------|:--------|
| [bin.Find](#find) |Find 根据字段名称在解析结果中查找对应的字段值 参数: - results: 通过 bin.Read 获取的解析结果 - name: 要查找的字段名称 返回值: - 找到的字段值，如果未找到则返回 nil|
| [bin.Read](#read) ||
| [bin.toBool](#tobool) |toBool 创建一个布尔类型描述符，用于从二进制数据中读取布尔值（非零为true） 参数: - name: 字段名称，用于之后通过 Find 函数查找 - verbose: 可选的详细描述 返回值: - 类型描述符对象|
| [bin.toBytes](#tobytes) |toRaw 创建一个字节数组类型描述符，用于从二进制数据中读取字节序列 参数: - name: 字段名称，用于之后通过 Find 函数查找 - size: 字节长度（数字），或引用其他字段名称（字符串）作为长度值 返回值: - 类型描述符对象|
| [bin.toInt](#toint) |toInt64 创建一个64位整数类型描述符，用于从二进制数据中读取int64值 参数: - name: 字段名称，用于之后通过 Find 函数查找 - values: 可选的详细描述 返回值: - 类型描述符对象|
| [bin.toInt16](#toint16) |toInt16 创建一个16位整数类型描述符，用于从二进制数据中读取int16值 参数: - name: 字段名称，用于之后通过 Find 函数查找 - values: 可选的详细描述 返回值: - 类型描述符对象|
| [bin.toInt32](#toint32) |toInt32 创建一个32位整数类型描述符，用于从二进制数据中读取int32值 参数: - name: 字段名称，用于之后通过 Find 函数查找 - values: 可选的详细描述 返回值: - 类型描述符对象|
| [bin.toInt64](#toint64) |toInt64 创建一个64位整数类型描述符，用于从二进制数据中读取int64值 参数: - name: 字段名称，用于之后通过 Find 函数查找 - values: 可选的详细描述 返回值: - 类型描述符对象|
| [bin.toInt8](#toint8) |toInt8 创建一个8位整数类型描述符，用于从二进制数据中读取int8值 参数: - name: 字段名称，用于之后通过 Find 函数查找 - values: 可选的详细描述 返回值: - 类型描述符对象|
| [bin.toList](#tolist) |toList 创建一个列表类型描述符，用于从二进制数据中按顺序读取多个相同格式的元素 参数: - builder: 列表中的元素描述符（一个或多个） 返回值: - 列表类型描述符对象|
| [bin.toRaw](#toraw) |toRaw 创建一个字节数组类型描述符，用于从二进制数据中读取字节序列 参数: - name: 字段名称，用于之后通过 Find 函数查找 - size: 字节长度（数字），或引用其他字段名称（字符串）作为长度值 返回值: - 类型描述符对象|
| [bin.toStruct](#tostruct) |toStruct 创建一个结构体类型描述符，用于从二进制数据中读取不同类型字段组成的结构 参数: - builder: 结构体中的字段描述符（一个或多个） 返回值: - 结构体类型描述符对象|
| [bin.toUint](#touint) |toUint64 创建一个64位无符号整数类型描述符，用于从二进制数据中读取uint64值 参数: - name: 字段名称，用于之后通过 Find 函数查找 - values: 可选的详细描述 返回值: - 类型描述符对象|
| [bin.toUint16](#touint16) |toUint16 创建一个16位无符号整数类型描述符，用于从二进制数据中读取uint16值 参数: - name: 字段名称，用于之后通过 Find 函数查找 - values: 可选的详细描述 返回值: - 类型描述符对象|
| [bin.toUint32](#touint32) |toUint32 创建一个32位无符号整数类型描述符，用于从二进制数据中读取uint32值 参数: - name: 字段名称，用于之后通过 Find 函数查找 - values: 可选的详细描述 返回值: - 类型描述符对象|
| [bin.toUint64](#touint64) |toUint64 创建一个64位无符号整数类型描述符，用于从二进制数据中读取uint64值 参数: - name: 字段名称，用于之后通过 Find 函数查找 - values: 可选的详细描述 返回值: - 类型描述符对象|
| [bin.toUint8](#touint8) |toUint8 创建一个8位无符号整数类型描述符，用于从二进制数据中读取uint8值 参数: - name: 字段名称，用于之后通过 Find 函数查找 - values: 可选的详细描述 返回值: - 类型描述符对象|


## 函数定义
### Find

#### 详细描述
Find 根据字段名称在解析结果中查找对应的字段值

参数:

  - results: 通过 bin.Read 获取的解析结果

  - name: 要查找的字段名称



返回值:

  - 找到的字段值，如果未找到则返回 nil




Example:

``````````````yak
data = codec.DecodeHex("1234ff")~
result = bin.Read(data, bin.toUint16("magic"), bin.toUint8("version"))~
version = bin.Find(result, "version")
println(version.AsUint8())   // OUT: 255
assert version.AsUint8() == 255, "Find should locate the version field by name"
``````````````


#### 定义

`Find(results []ResultIf, name string) ResultIf`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| results | `[]ResultIf` | 通过 bin.Read 获取的解析结果 |
| name | `string` | 要查找的字段名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ResultIf` | 找到的字段值，如果未找到则返回 nil |


### Read

#### 详细描述
暂无描述

#### 定义

`Read(data any, descriptors ...*PartDescriptor) ([]ResultIf, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| data | `any` |  |
| descriptors | `...*PartDescriptor` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]ResultIf` |  |
| r2 | `error` |  |


### toBool

#### 详细描述
toBool 创建一个布尔类型描述符，用于从二进制数据中读取布尔值（非零为true）

参数:

  - name: 字段名称，用于之后通过 Find 函数查找

  - verbose: 可选的详细描述



返回值:

  - 类型描述符对象




Example:

``````````````yak
// 读取一个字节，非零即为 true
data = codec.DecodeHex("ff")~
result = bin.Read(data, bin.toBool("ok"))~
println(result[0].AsBool())   // OUT: true
assert result[0].AsBool() == true, "non-zero byte should be parsed as true"
``````````````


#### 定义

`toBool(name string, verbose ...string) *PartDescriptor`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 字段名称，用于之后通过 Find 函数查找 |
| verbose | `...string` | 可选的详细描述 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*PartDescriptor` | 类型描述符对象 |


### toBytes

#### 详细描述
toRaw 创建一个字节数组类型描述符，用于从二进制数据中读取字节序列

参数:

  - name: 字段名称，用于之后通过 Find 函数查找

  - size: 字节长度（数字），或引用其他字段名称（字符串）作为长度值



返回值:

  - 类型描述符对象




Example:

``````````````yak
// 读取长度为 2 的字节数组（0x41 0x42 即 "AB"）
data = codec.DecodeHex("4142")~
result = bin.Read(data, bin.toBytes("content", 2))~
println(result[0].AsString())   // OUT: AB
assert result[0].AsString() == "AB", "toBytes should read the fixed-length byte sequence"
``````````````


#### 定义

`toBytes(name string, size any) *PartDescriptor`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 字段名称，用于之后通过 Find 函数查找 |
| size | `any` | 字节长度（数字），或引用其他字段名称（字符串）作为长度值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*PartDescriptor` | 类型描述符对象 |


### toInt

#### 详细描述
toInt64 创建一个64位整数类型描述符，用于从二进制数据中读取int64值

参数:

  - name: 字段名称，用于之后通过 Find 函数查找

  - values: 可选的详细描述



返回值:

  - 类型描述符对象




Example:

``````````````yak
data = codec.DecodeHex("0000000000000100")~
result = bin.Read(data, bin.toInt64("v"))~
println(result[0].AsInt64())   // OUT: 256
assert result[0].AsInt64() == 256, "0x...0100 should be parsed as int64 256"
``````````````


#### 定义

`toInt(name string, values ...string) *PartDescriptor`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 字段名称，用于之后通过 Find 函数查找 |
| values | `...string` | 可选的详细描述 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*PartDescriptor` | 类型描述符对象 |


### toInt16

#### 详细描述
toInt16 创建一个16位整数类型描述符，用于从二进制数据中读取int16值

参数:

  - name: 字段名称，用于之后通过 Find 函数查找

  - values: 可选的详细描述



返回值:

  - 类型描述符对象




Example:

``````````````yak
data = codec.DecodeHex("ffff")~
result = bin.Read(data, bin.toInt16("v"))~
println(result[0].AsInt16())   // OUT: -1
assert result[0].AsInt16() == -1, "0xffff should be parsed as int16 -1"
``````````````


#### 定义

`toInt16(name string, values ...string) *PartDescriptor`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 字段名称，用于之后通过 Find 函数查找 |
| values | `...string` | 可选的详细描述 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*PartDescriptor` | 类型描述符对象 |


### toInt32

#### 详细描述
toInt32 创建一个32位整数类型描述符，用于从二进制数据中读取int32值

参数:

  - name: 字段名称，用于之后通过 Find 函数查找

  - values: 可选的详细描述



返回值:

  - 类型描述符对象




Example:

``````````````yak
data = codec.DecodeHex("0000ffff")~
result = bin.Read(data, bin.toInt32("v"))~
println(result[0].AsInt32())   // OUT: 65535
assert result[0].AsInt32() == 65535, "0x0000ffff should be parsed as int32 65535"
``````````````


#### 定义

`toInt32(name string, values ...string) *PartDescriptor`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 字段名称，用于之后通过 Find 函数查找 |
| values | `...string` | 可选的详细描述 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*PartDescriptor` | 类型描述符对象 |


### toInt64

#### 详细描述
toInt64 创建一个64位整数类型描述符，用于从二进制数据中读取int64值

参数:

  - name: 字段名称，用于之后通过 Find 函数查找

  - values: 可选的详细描述



返回值:

  - 类型描述符对象




Example:

``````````````yak
data = codec.DecodeHex("0000000000000100")~
result = bin.Read(data, bin.toInt64("v"))~
println(result[0].AsInt64())   // OUT: 256
assert result[0].AsInt64() == 256, "0x...0100 should be parsed as int64 256"
``````````````


#### 定义

`toInt64(name string, values ...string) *PartDescriptor`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 字段名称，用于之后通过 Find 函数查找 |
| values | `...string` | 可选的详细描述 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*PartDescriptor` | 类型描述符对象 |


### toInt8

#### 详细描述
toInt8 创建一个8位整数类型描述符，用于从二进制数据中读取int8值

参数:

  - name: 字段名称，用于之后通过 Find 函数查找

  - values: 可选的详细描述



返回值:

  - 类型描述符对象




Example:

``````````````yak
// 0xff 作为有符号 int8 解析为 -1
data = codec.DecodeHex("ff")~
result = bin.Read(data, bin.toInt8("b"))~
println(result[0].AsInt8())   // OUT: -1
assert result[0].AsInt8() == -1, "0xff should be parsed as int8 -1"
``````````````


#### 定义

`toInt8(name string, values ...string) *PartDescriptor`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 字段名称，用于之后通过 Find 函数查找 |
| values | `...string` | 可选的详细描述 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*PartDescriptor` | 类型描述符对象 |


### toList

#### 详细描述
toList 创建一个列表类型描述符，用于从二进制数据中按顺序读取多个相同格式的元素

参数:

  - builder: 列表中的元素描述符（一个或多个）



返回值:

  - 列表类型描述符对象




Example:

``````````````yak
// 读取两个 uint16 构成的列表
data = codec.DecodeHex("00010002")~
result = bin.Read(data, bin.toList(bin.toUint16("item"), bin.toUint16("item")))~
list = result[0]
println(list.Result[0].AsUint16())   // OUT: 1
assert list.Result[0].AsUint16() == 1, "first list item should be 1"
assert list.Result[1].AsUint16() == 2, "second list item should be 2"
``````````````


#### 定义

`toList(builder ...*PartDescriptor) *PartDescriptor`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| builder | `...*PartDescriptor` | 列表中的元素描述符（一个或多个） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*PartDescriptor` | 列表类型描述符对象 |


### toRaw

#### 详细描述
toRaw 创建一个字节数组类型描述符，用于从二进制数据中读取字节序列

参数:

  - name: 字段名称，用于之后通过 Find 函数查找

  - size: 字节长度（数字），或引用其他字段名称（字符串）作为长度值



返回值:

  - 类型描述符对象




Example:

``````````````yak
// 读取长度为 2 的字节数组（0x41 0x42 即 "AB"）
data = codec.DecodeHex("4142")~
result = bin.Read(data, bin.toBytes("content", 2))~
println(result[0].AsString())   // OUT: AB
assert result[0].AsString() == "AB", "toBytes should read the fixed-length byte sequence"
``````````````


#### 定义

`toRaw(name string, size any) *PartDescriptor`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 字段名称，用于之后通过 Find 函数查找 |
| size | `any` | 字节长度（数字），或引用其他字段名称（字符串）作为长度值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*PartDescriptor` | 类型描述符对象 |


### toStruct

#### 详细描述
toStruct 创建一个结构体类型描述符，用于从二进制数据中读取不同类型字段组成的结构

参数:

  - builder: 结构体中的字段描述符（一个或多个）



返回值:

  - 结构体类型描述符对象




Example:

``````````````yak
// 读取包含 magic(uint16) 和 version(uint8) 的结构体
data = codec.DecodeHex("123405")~
result = bin.Read(data, bin.toStruct(bin.toUint16("magic"), bin.toUint8("version")))~
structResult = result[0]
println(structResult.Result[0].AsUint16())   // OUT: 4660
assert structResult.Result[0].AsUint16() == 4660, "struct magic should be 0x1234"
assert structResult.Result[1].AsUint8() == 5, "struct version should be 5"
``````````````


#### 定义

`toStruct(builder ...*PartDescriptor) *PartDescriptor`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| builder | `...*PartDescriptor` | 结构体中的字段描述符（一个或多个） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*PartDescriptor` | 结构体类型描述符对象 |


### toUint

#### 详细描述
toUint64 创建一个64位无符号整数类型描述符，用于从二进制数据中读取uint64值

参数:

  - name: 字段名称，用于之后通过 Find 函数查找

  - values: 可选的详细描述



返回值:

  - 类型描述符对象




Example:

``````````````yak
data = codec.DecodeHex("0000000000000100")~
result = bin.Read(data, bin.toUint64("v"))~
println(result[0].AsUint64())   // OUT: 256
assert result[0].AsUint64() == 256, "0x...0100 should be parsed as uint64 256"
``````````````


#### 定义

`toUint(name string, values ...string) *PartDescriptor`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 字段名称，用于之后通过 Find 函数查找 |
| values | `...string` | 可选的详细描述 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*PartDescriptor` | 类型描述符对象 |


### toUint16

#### 详细描述
toUint16 创建一个16位无符号整数类型描述符，用于从二进制数据中读取uint16值

参数:

  - name: 字段名称，用于之后通过 Find 函数查找

  - values: 可选的详细描述



返回值:

  - 类型描述符对象




Example:

``````````````yak
// 默认按大端序解析两个字节
data = codec.DecodeHex("1234")~
result = bin.Read(data, bin.toUint16("magic"))~
println(result[0].AsUint16())   // OUT: 4660
assert result[0].AsUint16() == 4660, "0x1234 should be parsed as uint16 4660"
``````````````


#### 定义

`toUint16(name string, values ...string) *PartDescriptor`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 字段名称，用于之后通过 Find 函数查找 |
| values | `...string` | 可选的详细描述 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*PartDescriptor` | 类型描述符对象 |


### toUint32

#### 详细描述
toUint32 创建一个32位无符号整数类型描述符，用于从二进制数据中读取uint32值

参数:

  - name: 字段名称，用于之后通过 Find 函数查找

  - values: 可选的详细描述



返回值:

  - 类型描述符对象




Example:

``````````````yak
data = codec.DecodeHex("0000ffff")~
result = bin.Read(data, bin.toUint32("v"))~
println(result[0].AsUint32())   // OUT: 65535
assert result[0].AsUint32() == 65535, "0x0000ffff should be parsed as uint32 65535"
``````````````


#### 定义

`toUint32(name string, values ...string) *PartDescriptor`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 字段名称，用于之后通过 Find 函数查找 |
| values | `...string` | 可选的详细描述 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*PartDescriptor` | 类型描述符对象 |


### toUint64

#### 详细描述
toUint64 创建一个64位无符号整数类型描述符，用于从二进制数据中读取uint64值

参数:

  - name: 字段名称，用于之后通过 Find 函数查找

  - values: 可选的详细描述



返回值:

  - 类型描述符对象




Example:

``````````````yak
data = codec.DecodeHex("0000000000000100")~
result = bin.Read(data, bin.toUint64("v"))~
println(result[0].AsUint64())   // OUT: 256
assert result[0].AsUint64() == 256, "0x...0100 should be parsed as uint64 256"
``````````````


#### 定义

`toUint64(name string, values ...string) *PartDescriptor`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 字段名称，用于之后通过 Find 函数查找 |
| values | `...string` | 可选的详细描述 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*PartDescriptor` | 类型描述符对象 |


### toUint8

#### 详细描述
toUint8 创建一个8位无符号整数类型描述符，用于从二进制数据中读取uint8值

参数:

  - name: 字段名称，用于之后通过 Find 函数查找

  - values: 可选的详细描述



返回值:

  - 类型描述符对象




Example:

``````````````yak
data = codec.DecodeHex("ff")~
result = bin.Read(data, bin.toUint8("b"))~
println(result[0].AsUint8())   // OUT: 255
assert result[0].AsUint8() == 255, "0xff should be parsed as uint8 255"
``````````````


#### 定义

`toUint8(name string, values ...string) *PartDescriptor`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 字段名称，用于之后通过 Find 函数查找 |
| values | `...string` | 可选的详细描述 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*PartDescriptor` | 类型描述符对象 |


