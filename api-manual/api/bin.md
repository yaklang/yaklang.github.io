# bin

|函数名|函数描述/介绍|
|:------|:--------|
| [bin.Find](#find) |Find 根据字段名称在解析结果中查找对应的字段值  @param {[]ResultIf} results 通过bin.Read获取的解析结果  @param {string} name 要查找的字段名称  @return {ResultIf} 找到的字段值，如果未找到则返回nil  |
| [bin.Read](#read) ||
| [bin.toBool](#tobool) |toBool 创建一个布尔类型描述符，用于从二进制数据中读取布尔值（非零为true） @param {string} name 字段名称，用于之后通过Find函数查找 @param {string} verbose 可选的详细描述 @return {PartDescriptor} 返回类型描述符对象...|
| [bin.toBytes](#tobytes) |toRaw 创建一个字节数组类型描述符，用于从二进制数据中读取字节序列  @param {string} name 字段名称，用于之后通过Find函数查找  @param {number\|string} size 字节长度或引用其他字段名称作为长度值  @return {PartDescriptor...|
| [bin.toInt](#toint) |toInt64 创建一个64位整数类型描述符，用于从二进制数据中读取int64值 @param {string} name 字段名称，用于之后通过Find函数查找 @param {string} values 可选的详细描述 @return {PartDescriptor} 返回类型描述符对象 |
| [bin.toInt16](#toint16) |toInt16 创建一个16位整数类型描述符，用于从二进制数据中读取int16值 @param {string} name 字段名称，用于之后通过Find函数查找 @param {string} values 可选的详细描述 @return {PartDescriptor} 返回类型描述符对象 |
| [bin.toInt32](#toint32) |toInt32 创建一个32位整数类型描述符，用于从二进制数据中读取int32值 @param {string} name 字段名称，用于之后通过Find函数查找 @param {string} values 可选的详细描述 @return {PartDescriptor} 返回类型描述符对象 |
| [bin.toInt64](#toint64) |toInt64 创建一个64位整数类型描述符，用于从二进制数据中读取int64值 @param {string} name 字段名称，用于之后通过Find函数查找 @param {string} values 可选的详细描述 @return {PartDescriptor} 返回类型描述符对象 |
| [bin.toInt8](#toint8) |toInt8 创建一个8位整数类型描述符，用于从二进制数据中读取int8值 @param {string} name 字段名称，用于之后通过Find函数查找 @param {string} values 可选的详细描述 @return {PartDescriptor} 返回类型描述符对象 |
| [bin.toList](#tolist) |toList 创建一个列表类型描述符，用于从二进制数据中按顺序读取多个相同格式的元素  @param {PartDescriptor} builder 列表中的元素描述符  @return {PartDescriptor} 返回列表类型描述符对象  |
| [bin.toRaw](#toraw) |toRaw 创建一个字节数组类型描述符，用于从二进制数据中读取字节序列  @param {string} name 字段名称，用于之后通过Find函数查找  @param {number\|string} size 字节长度或引用其他字段名称作为长度值  @return {PartDescriptor...|
| [bin.toStruct](#tostruct) |toStruct 创建一个结构体类型描述符，用于从二进制数据中读取不同类型字段组成的结构  @param {PartDescriptor} builder 结构体中的字段描述符  @return {PartDescriptor} 返回结构体类型描述符对象  |
| [bin.toUint](#touint) |toUint64 创建一个64位无符号整数类型描述符，用于从二进制数据中读取uint64值 @param {string} name 字段名称，用于之后通过Find函数查找 @param {string} values 可选的详细描述 @return {PartDescriptor} 返回类型描述符...|
| [bin.toUint16](#touint16) |toUint16 创建一个16位无符号整数类型描述符，用于从二进制数据中读取uint16值 @param {string} name 字段名称，用于之后通过Find函数查找 @param {string} values 可选的详细描述 @return {PartDescriptor} 返回类型描述符...|
| [bin.toUint32](#touint32) |toUint32 创建一个32位无符号整数类型描述符，用于从二进制数据中读取uint32值 @param {string} name 字段名称，用于之后通过Find函数查找 @param {string} values 可选的详细描述 @return {PartDescriptor} 返回类型描述符...|
| [bin.toUint64](#touint64) |toUint64 创建一个64位无符号整数类型描述符，用于从二进制数据中读取uint64值 @param {string} name 字段名称，用于之后通过Find函数查找 @param {string} values 可选的详细描述 @return {PartDescriptor} 返回类型描述符...|
| [bin.toUint8](#touint8) |toUint8 创建一个8位无符号整数类型描述符，用于从二进制数据中读取uint8值 @param {string} name 字段名称，用于之后通过Find函数查找 @param {string} values 可选的详细描述 @return {PartDescriptor} 返回类型描述符对象 |


## 函数定义
### Find

#### 详细描述
Find 根据字段名称在解析结果中查找对应的字段值

@param {[]ResultIf} results 通过bin.Read获取的解析结果

@param {string} name 要查找的字段名称

@return {ResultIf} 找到的字段值，如果未找到则返回nil

Example:
```
result = bin.Read(data, bin.toUint16("magic"), bin.toUint8("version"))~
magic = bin.Find(result, "magic")

	if magic != nil {
	  println("Magic:", magic.AsUint16())
	}

```


#### 定义

`Find(results []ResultIf, name string) ResultIf`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| results | `[]ResultIf` |   |
| name | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ResultIf` |   |


### Read

#### 详细描述


#### 定义

`Read(data any, descriptors ...*PartDescriptor) ([]ResultIf, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| data | `any` |   |
| descriptors | `...*PartDescriptor` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]ResultIf` |   |
| r2 | `error` |   |


### toBool

#### 详细描述
toBool 创建一个布尔类型描述符，用于从二进制数据中读取布尔值（非零为true）
@param {string} name 字段名称，用于之后通过Find函数查找
@param {string} verbose 可选的详细描述
@return {PartDescriptor} 返回类型描述符对象


#### 定义

`toBool(name string, verbose ...string) *PartDescriptor`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| verbose | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*PartDescriptor` |   |


### toBytes

#### 详细描述
toRaw 创建一个字节数组类型描述符，用于从二进制数据中读取字节序列

@param {string} name 字段名称，用于之后通过Find函数查找

@param {number|string} size 字节长度或引用其他字段名称作为长度值

@return {PartDescriptor} 返回类型描述符对象

Example:
```
// 读取长度为5的字节数组
bin.Read(data, bin.toBytes("content", 5))

// 读取长度由另一个字段决定的字节数组
bin.Read(data, bin.toUint8("length"), bin.toBytes("content", "length"))
```


#### 定义

`toBytes(name string, size any) *PartDescriptor`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| size | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*PartDescriptor` |   |


### toInt

#### 详细描述
toInt64 创建一个64位整数类型描述符，用于从二进制数据中读取int64值
@param {string} name 字段名称，用于之后通过Find函数查找
@param {string} values 可选的详细描述
@return {PartDescriptor} 返回类型描述符对象


#### 定义

`toInt(name string, values ...string) *PartDescriptor`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| values | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*PartDescriptor` |   |


### toInt16

#### 详细描述
toInt16 创建一个16位整数类型描述符，用于从二进制数据中读取int16值
@param {string} name 字段名称，用于之后通过Find函数查找
@param {string} values 可选的详细描述
@return {PartDescriptor} 返回类型描述符对象


#### 定义

`toInt16(name string, values ...string) *PartDescriptor`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| values | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*PartDescriptor` |   |


### toInt32

#### 详细描述
toInt32 创建一个32位整数类型描述符，用于从二进制数据中读取int32值
@param {string} name 字段名称，用于之后通过Find函数查找
@param {string} values 可选的详细描述
@return {PartDescriptor} 返回类型描述符对象


#### 定义

`toInt32(name string, values ...string) *PartDescriptor`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| values | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*PartDescriptor` |   |


### toInt64

#### 详细描述
toInt64 创建一个64位整数类型描述符，用于从二进制数据中读取int64值
@param {string} name 字段名称，用于之后通过Find函数查找
@param {string} values 可选的详细描述
@return {PartDescriptor} 返回类型描述符对象


#### 定义

`toInt64(name string, values ...string) *PartDescriptor`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| values | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*PartDescriptor` |   |


### toInt8

#### 详细描述
toInt8 创建一个8位整数类型描述符，用于从二进制数据中读取int8值
@param {string} name 字段名称，用于之后通过Find函数查找
@param {string} values 可选的详细描述
@return {PartDescriptor} 返回类型描述符对象


#### 定义

`toInt8(name string, values ...string) *PartDescriptor`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| values | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*PartDescriptor` |   |


### toList

#### 详细描述
toList 创建一个列表类型描述符，用于从二进制数据中按顺序读取多个相同格式的元素

@param {PartDescriptor} builder 列表中的元素描述符

@return {PartDescriptor} 返回列表类型描述符对象

Example:
```
// 读取两个uint16构成的列表
result = bin.Read(data, bin.toList(bin.toUint16("item"), bin.toUint16("item")))~
list = result[0]
item1 = list.Result[0].AsUint16()
item2 = list.Result[1].AsUint16()
```


#### 定义

`toList(builder ...*PartDescriptor) *PartDescriptor`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| builder | `...*PartDescriptor` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*PartDescriptor` |   |


### toRaw

#### 详细描述
toRaw 创建一个字节数组类型描述符，用于从二进制数据中读取字节序列

@param {string} name 字段名称，用于之后通过Find函数查找

@param {number|string} size 字节长度或引用其他字段名称作为长度值

@return {PartDescriptor} 返回类型描述符对象

Example:
```
// 读取长度为5的字节数组
bin.Read(data, bin.toBytes("content", 5))

// 读取长度由另一个字段决定的字节数组
bin.Read(data, bin.toUint8("length"), bin.toBytes("content", "length"))
```


#### 定义

`toRaw(name string, size any) *PartDescriptor`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| size | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*PartDescriptor` |   |


### toStruct

#### 详细描述
toStruct 创建一个结构体类型描述符，用于从二进制数据中读取不同类型字段组成的结构

@param {PartDescriptor} builder 结构体中的字段描述符

@return {PartDescriptor} 返回结构体类型描述符对象

Example:
```
// 读取包含magic(uint16)和version(uint8)的结构体
result = bin.Read(data, bin.toStruct(

	bin.toUint16("magic"),
	bin.toUint8("version")

))~
structResult = result[0]
magic = structResult.Result[0].AsUint16()
version = structResult.Result[1].AsUint8()
```


#### 定义

`toStruct(builder ...*PartDescriptor) *PartDescriptor`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| builder | `...*PartDescriptor` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*PartDescriptor` |   |


### toUint

#### 详细描述
toUint64 创建一个64位无符号整数类型描述符，用于从二进制数据中读取uint64值
@param {string} name 字段名称，用于之后通过Find函数查找
@param {string} values 可选的详细描述
@return {PartDescriptor} 返回类型描述符对象


#### 定义

`toUint(name string, values ...string) *PartDescriptor`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| values | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*PartDescriptor` |   |


### toUint16

#### 详细描述
toUint16 创建一个16位无符号整数类型描述符，用于从二进制数据中读取uint16值
@param {string} name 字段名称，用于之后通过Find函数查找
@param {string} values 可选的详细描述
@return {PartDescriptor} 返回类型描述符对象


#### 定义

`toUint16(name string, values ...string) *PartDescriptor`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| values | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*PartDescriptor` |   |


### toUint32

#### 详细描述
toUint32 创建一个32位无符号整数类型描述符，用于从二进制数据中读取uint32值
@param {string} name 字段名称，用于之后通过Find函数查找
@param {string} values 可选的详细描述
@return {PartDescriptor} 返回类型描述符对象


#### 定义

`toUint32(name string, values ...string) *PartDescriptor`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| values | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*PartDescriptor` |   |


### toUint64

#### 详细描述
toUint64 创建一个64位无符号整数类型描述符，用于从二进制数据中读取uint64值
@param {string} name 字段名称，用于之后通过Find函数查找
@param {string} values 可选的详细描述
@return {PartDescriptor} 返回类型描述符对象


#### 定义

`toUint64(name string, values ...string) *PartDescriptor`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| values | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*PartDescriptor` |   |


### toUint8

#### 详细描述
toUint8 创建一个8位无符号整数类型描述符，用于从二进制数据中读取uint8值
@param {string} name 字段名称，用于之后通过Find函数查找
@param {string} values 可选的详细描述
@return {PartDescriptor} 返回类型描述符对象


#### 定义

`toUint8(name string, values ...string) *PartDescriptor`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| values | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*PartDescriptor` |   |


