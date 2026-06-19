# java

|函数名|函数描述/介绍|
|:------|:--------|
| [java.Decompile](#decompile) |Decompile 反编译一个 jar包或者 class 返回值是反编译后的 java 文件路径|
| [java.FromJson](#fromjson) |FromJson 将 java.ToJson 生成的 JSON 还原为 Java 序列化对象列表 在 yak 中通过 java.FromJson 调用，是 java.ToJson 的逆操作 参数: - raw: java.ToJson 生成的 JSON 字节数组 返回值: - 还原出的 Java 序...|
| [java.MarshalJavaObjects](#marshaljavaobjects) |MarshalJavaObjects 将一个或多个 Java 序列化对象编码为 Java 序列化字节流 在 yak 中通过 java.MarshalJavaObjects 调用，是 java.ParseJavaObjectStream 的逆操作 参数: - res: 一个或多个 Java 序列化对象...|
| [java.NewJavaArray](#newjavaarray) |NewJavaArray 创建一个 Java 数组对象(TC_ARRAY)，承载同类型元素的字段值序列 在 yak 中通过 java.NewJavaArray 调用 参数: - j: 数组的类描述对象(描述元素类型) - values: 零个或多个数组元素字段值 返回值: - Java 数组序列化对...|
| [java.NewJavaBlockDataBytes](#newjavablockdatabytes) |NewJavaBlockDataBytes 创建一个 Java 序列化的块数据对象(TC_BLOCKDATA)，承载原始字节 在 yak 中通过 java.NewJavaBlockDataBytes 调用，常用于 writeObject 自定义数据 参数: - raw: 块数据的原始字节内容 返回值...|
| [java.NewJavaClass](#newjavaclass) |NewJavaClass 创建一个 Java 类对象(TC_CLASS)，用于序列化对 Class 本身的引用 在 yak 中通过 java.NewJavaClass 调用 参数: - j: 类描述对象 返回值: - Java 类序列化对象|
| [java.NewJavaClassData](#newjavaclassdata) |NewJavaClassData 创建一个 Java 类数据对象，承载对象实例的字段值与自定义块数据 在 yak 中通过 java.NewJavaClassData 调用，配合 java.NewJavaObject 使用 参数: - fields: 字段值序列化对象列表 - blockData: 自...|
| [java.NewJavaClassDesc](#newjavaclassdesc) |NewJavaClassDesc 创建一个 Java 类描述对象(TC_CLASSDESC)，用于描述对象所属类的元信息 在 yak 中通过 java.NewJavaClassDesc 调用 参数: - className: 类的全限定名 - serialVersionUID: 序列化版本号(8 字...|
| [java.NewJavaClassDetails](#newjavaclassdetails) |NewJavaClassDetails 创建 Java 类描述详情(类名、serialVersionUID、字段、父类等) 在 yak 中通过 java.NewJavaClassDetails 调用，是构造 ClassDesc 的底层结构 参数: - className: 类的全限定名 - seri...|
| [java.NewJavaClassField](#newjavaclassfield) |NewJavaClassField 创建一个 Java 类字段描述，描述单个字段的名称与类型 在 yak 中通过 java.NewJavaClassField 调用 参数: - name: 字段名 - jType: 字段类型标记(如 0x49 表示 int、0x4c 表示对象) - classNam...|
| [java.NewJavaClassFields](#newjavaclassfields) |NewJavaClassFields 创建一个 Java 类字段描述集合，用于聚合多个字段描述 在 yak 中通过 java.NewJavaClassFields 调用 参数: - fields: 零个或多个字段描述对象 返回值: - Java 类字段描述集合对象|
| [java.NewJavaEndBlockData](#newjavaendblockdata) |NewJavaEndBlockData 创建一个 Java 序列化的块数据结束标记对象(TC_ENDBLOCKDATA) 在 yak 中通过 java.NewJavaEndBlockData 调用，用于标记自定义块数据写入结束 返回值: - Java 块数据结束标记序列化对象|
| [java.NewJavaEnum](#newjavaenum) |NewJavaEnum 创建一个 Java 枚举对象(TC_ENUM)，由枚举类描述与常量名组成 在 yak 中通过 java.NewJavaEnum 调用 参数: - i: 枚举类型的类描述对象 - constantName: 枚举常量名(Java 字符串对象) 返回值: - Java 枚举序列化...|
| [java.NewJavaFieldArrayValue](#newjavafieldarrayvalue) |NewJavaFieldArrayValue 创建一个数组类型的 Java 序列化字段值，承载数组/null/引用对象 在 yak 中通过 java.NewJavaFieldArrayValue 调用 参数: - i: 数组、null 或引用类型的 Java 序列化对象 返回值: - Java 字段...|
| [java.NewJavaFieldBoolValue](#newjavafieldboolvalue) |NewJavaFieldBoolValue 创建一个 boolean 类型的 Java 序列化字段值 在 yak 中通过 java.NewJavaFieldBoolValue 调用 参数: - b: 布尔值 返回值: - Java 字段值序列化对象|
| [java.NewJavaFieldByteValue](#newjavafieldbytevalue) |NewJavaFieldByteValue 创建一个 byte 类型的 Java 序列化字段值 在 yak 中通过 java.NewJavaFieldByteValue 调用 参数: - b: 字节值 返回值: - Java 字段值序列化对象|
| [java.NewJavaFieldCharValue](#newjavafieldcharvalue) |NewJavaFieldCharValue 创建一个 char 类型的 Java 序列化字段值 在 yak 中通过 java.NewJavaFieldCharValue 调用 参数: - i: char 对应的整数码点 返回值: - Java 字段值序列化对象|
| [java.NewJavaFieldDoubleValue](#newjavafielddoublevalue) |NewJavaFieldDoubleValue 创建一个 double 类型的 Java 序列化字段值 在 yak 中通过 java.NewJavaFieldDoubleValue 调用 参数: - i: double 浮点值 返回值: - Java 字段值序列化对象|
| [java.NewJavaFieldFloatValue](#newjavafieldfloatvalue) |NewJavaFieldFloatValue 创建一个 float 类型的 Java 序列化字段值 在 yak 中通过 java.NewJavaFieldFloatValue 调用 参数: - i: float 浮点值 返回值: - Java 字段值序列化对象|
| [java.NewJavaFieldIntValue](#newjavafieldintvalue) |NewJavaFieldIntValue 创建一个 int 类型的 Java 序列化字段值 在 yak 中通过 java.NewJavaFieldIntValue 调用 参数: - i: int 整数值 返回值: - Java 字段值序列化对象|
| [java.NewJavaFieldLongValue](#newjavafieldlongvalue) |NewJavaFieldLongValue 创建一个 long 类型的 Java 序列化字段值 在 yak 中通过 java.NewJavaFieldLongValue 调用 参数: - i: long 整数值 返回值: - Java 字段值序列化对象|
| [java.NewJavaFieldObjectValue](#newjavafieldobjectvalue) |NewJavaFieldObjectValue 创建一个对象类型的 Java 序列化字段值，承载对象/字符串/类等引用类型 在 yak 中通过 java.NewJavaFieldObjectValue 调用 参数: - i: 对象、字符串、类、数组、枚举、引用或 null 类型的 Java 序列化对...|
| [java.NewJavaFieldShortValue](#newjavafieldshortvalue) |NewJavaFieldShortValue 创建一个 short 类型的 Java 序列化字段值 在 yak 中通过 java.NewJavaFieldShortValue 调用 参数: - i: short 整数值 返回值: - Java 字段值序列化对象|
| [java.NewJavaFieldValue](#newjavafieldvalue) |NewJavaFieldValue 创建一个指定类型与原始字节的 Java 序列化字段值，是各类字段值构造的基础函数 在 yak 中通过 java.NewJavaFieldValue 调用 参数: - t: 字段类型标记(如 JT_INT、JT_BYTE 等) - raw: 字段值的原始字节 返回值...|
| [java.NewJavaLongString](#newjavalongstring) |NewJavaLongString 创建一个 Java 序列化的长字符串对象(TC_LONGSTRING)，用于超长字符串 在 yak 中通过 java.NewJavaLongString 调用 参数: - raw: 字符串内容 返回值: - Java 长字符串序列化对象|
| [java.NewJavaNull](#newjavanull) |NewJavaNull 创建一个 Java 序列化的 null 对象(TC_NULL) 在 yak 中通过 java.NewJavaNull 调用，常用于表示空引用字段 返回值: - Java null 序列化对象|
| [java.NewJavaObject](#newjavaobject) |NewJavaObject 创建一个 Java 对象(TC_OBJECT)，由类描述与类数据组成，是反序列化攻击载荷的核心结构 在 yak 中通过 java.NewJavaObject 调用 参数: - class: 对象所属的类描述对象 - classData: 零个或多个类数据(字段值与块数据)...|
| [java.NewJavaReference](#newjavareference) |NewJavaReference 创建一个 Java 序列化的引用对象(TC_REFERENCE)，通过句柄复用已序列化对象 在 yak 中通过 java.NewJavaReference 调用 参数: - handle: 被引用对象的句柄(从 0x7e0000 起递增) 返回值: - Java 引...|
| [java.NewJavaString](#newjavastring) |NewJavaString 创建一个 Java 序列化的普通字符串对象(TC_STRING) 在 yak 中通过 java.NewJavaString 调用 参数: - raw: 字符串内容 返回值: - Java 字符串序列化对象|
| [java.ParseHexJavaObjectStream](#parsehexjavaobjectstream) |ParseHexJavaObjectStream 解析十六进制编码的 Java 序列化字节流，返回 Java 序列化对象列表 在 yak 中通过 java.ParseHexJavaObjectStream 调用，适用于已被 hex 编码的序列化数据 参数: - raw: 十六进制编码的 Java 序...|
| [java.ParseJavaObjectStream](#parsejavaobjectstream) |ParseJavaObjectStream 解析 Java 序列化字节流，返回其中包含的 Java 序列化对象列表 在 yak 中通过 java.ParseJavaObjectStream 调用，是 java.MarshalJavaObjects 的逆操作 参数: - raw: Java 序列化字节...|
| [java.ToJson](#tojson) |ToJson 将解析得到的 Java 序列化对象转换为可读的 JSON 字节数组 在 yak 中通过 java.ToJson 调用，便于查看序列化对象的内部结构 参数: - i: 已解析的 Java 序列化对象(或其切片) 返回值: - JSON 字节数组 - 错误信息，失败时非 nil|


## 函数定义
### Decompile

#### 详细描述
Decompile 反编译一个 jar包或者 class

返回值是反编译后的 java 文件路径


Example:

``````````````yak
err = Decompile("test.jar", "test/"); die(err)
err = Decompile("test.war", "test/"); die(err)
Decompile("a.class", "a.java"); die(err)
``````````````


#### 定义

`Decompile(from string, to string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| from | `string` |  |
| to | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |  |


### FromJson

#### 详细描述
FromJson 将 java.ToJson 生成的 JSON 还原为 Java 序列化对象列表

在 yak 中通过 java.FromJson 调用，是 java.ToJson 的逆操作

参数:

  - raw: java.ToJson 生成的 JSON 字节数组



返回值:

  - 还原出的 Java 序列化对象列表

  - 错误信息，失败时非 nil




Example:

``````````````yak
s = java.NewJavaString("hello")
b = java.MarshalJavaObjects(s)
objs = java.ParseJavaObjectStream(b)~
j = java.ToJson(objs)~
restored = java.FromJson(j)~
assert len(restored) == len(objs), "restored object count should match"
``````````````


#### 定义

`FromJson(raw []byte) ([]JavaSerializable, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` | java.ToJson 生成的 JSON 字节数组 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]JavaSerializable` | 还原出的 Java 序列化对象列表 |
| r2 | `error` | 错误信息，失败时非 nil |


### MarshalJavaObjects

#### 详细描述
MarshalJavaObjects 将一个或多个 Java 序列化对象编码为 Java 序列化字节流

在 yak 中通过 java.MarshalJavaObjects 调用，是 java.ParseJavaObjectStream 的逆操作

参数:

  - res: 一个或多个 Java 序列化对象



返回值:

  - Java 序列化字节流




Example:

``````````````yak
s = java.NewJavaString("hello")
b = java.MarshalJavaObjects(s)
assert len(b) > 0, "marshaled bytes should not be empty"
``````````````


#### 定义

`MarshalJavaObjects(res ...JavaSerializable) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| res | `...JavaSerializable` | 一个或多个 Java 序列化对象 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | Java 序列化字节流 |


### NewJavaArray

#### 详细描述
NewJavaArray 创建一个 Java 数组对象(TC_ARRAY)，承载同类型元素的字段值序列

在 yak 中通过 java.NewJavaArray 调用

参数:

  - j: 数组的类描述对象(描述元素类型)

  - values: 零个或多个数组元素字段值



返回值:

  - Java 数组序列化对象




Example:

``````````````yak
// 该示例为示意性用法：构造一个 int 数组对象
desc = java.NewJavaClassDesc("[I", []byte{0,0,0,0,0,0,0,1}, 0x02, java.NewJavaClassFields(), nil, nil)
arr = java.NewJavaArray(desc, java.NewJavaFieldIntValue(1), java.NewJavaFieldIntValue(2))
println(arr.TypeVerbose)
``````````````


#### 定义

`NewJavaArray(j *JavaClassDesc, values ...*JavaFieldValue) *JavaArray`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| j | `*JavaClassDesc` | 数组的类描述对象(描述元素类型) |
| values | `...*JavaFieldValue` | 零个或多个数组元素字段值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaArray` | Java 数组序列化对象 |


### NewJavaBlockDataBytes

#### 详细描述
NewJavaBlockDataBytes 创建一个 Java 序列化的块数据对象(TC_BLOCKDATA)，承载原始字节

在 yak 中通过 java.NewJavaBlockDataBytes 调用，常用于 writeObject 自定义数据

参数:

  - raw: 块数据的原始字节内容



返回值:

  - Java 块数据序列化对象




Example:

``````````````yak
// 该示例为示意性用法：构造原始块数据
block = java.NewJavaBlockDataBytes([]byte("data"))
println(block.TypeVerbose)
``````````````


#### 定义

`NewJavaBlockDataBytes(raw []byte) *JavaBlockData`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` | 块数据的原始字节内容 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaBlockData` | Java 块数据序列化对象 |


### NewJavaClass

#### 详细描述
NewJavaClass 创建一个 Java 类对象(TC_CLASS)，用于序列化对 Class 本身的引用

在 yak 中通过 java.NewJavaClass 调用

参数:

  - j: 类描述对象



返回值:

  - Java 类序列化对象




Example:

``````````````yak
// 该示例为示意性用法：构造类对象
desc = java.NewJavaClassDesc("com.example.Foo", []byte{0,0,0,0,0,0,0,1}, 0x02, java.NewJavaClassFields(), nil, nil)
cls = java.NewJavaClass(desc)
println(cls.TypeVerbose)
``````````````


#### 定义

`NewJavaClass(j *JavaClassDesc) *JavaClass`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| j | `*JavaClassDesc` | 类描述对象 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaClass` | Java 类序列化对象 |


### NewJavaClassData

#### 详细描述
NewJavaClassData 创建一个 Java 类数据对象，承载对象实例的字段值与自定义块数据

在 yak 中通过 java.NewJavaClassData 调用，配合 java.NewJavaObject 使用

参数:

  - fields: 字段值序列化对象列表

  - blockData: 自定义块数据序列化对象列表



返回值:

  - Java 类数据对象




Example:

``````````````yak
// 该示例为示意性用法：构造类数据
data = java.NewJavaClassData([java.NewJavaFieldIntValue(1)], [])
println(len(data.Fields))
``````````````


#### 定义

`NewJavaClassData(fields []JavaSerializable, blockData []JavaSerializable) *JavaClassData`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fields | `[]JavaSerializable` | 字段值序列化对象列表 |
| blockData | `[]JavaSerializable` | 自定义块数据序列化对象列表 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaClassData` | Java 类数据对象 |


### NewJavaClassDesc

#### 详细描述
NewJavaClassDesc 创建一个 Java 类描述对象(TC_CLASSDESC)，用于描述对象所属类的元信息

在 yak 中通过 java.NewJavaClassDesc 调用

参数:

  - className: 类的全限定名

  - serialVersionUID: 序列化版本号(8 字节)

  - flag: 类描述标志位

  - fields: 字段描述集合

  - annotations: 类注解数据列表

  - superClass: 父类描述详情，可为 nil



返回值:

  - Java 类描述序列化对象




Example:

``````````````yak
// 该示例为示意性用法：构造类描述
fields = java.NewJavaClassFields()
desc = java.NewJavaClassDesc("com.example.Foo", []byte{0,0,0,0,0,0,0,1}, 0x02, fields, nil, nil)
obj = java.NewJavaObject(desc)
println(len(java.MarshalJavaObjects(obj)) > 0)
``````````````


#### 定义

`NewJavaClassDesc(className string, serialVersionUID []byte, flag byte, fields *JavaClassFields, annotations []JavaSerializable, superClass *JavaClassDetails) *JavaClassDesc`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| className | `string` | 类的全限定名 |
| serialVersionUID | `[]byte` | 序列化版本号(8 字节) |
| flag | `byte` | 类描述标志位 |
| fields | `*JavaClassFields` | 字段描述集合 |
| annotations | `[]JavaSerializable` | 类注解数据列表 |
| superClass | `*JavaClassDetails` | 父类描述详情，可为 nil |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaClassDesc` | Java 类描述序列化对象 |


### NewJavaClassDetails

#### 详细描述
NewJavaClassDetails 创建 Java 类描述详情(类名、serialVersionUID、字段、父类等)

在 yak 中通过 java.NewJavaClassDetails 调用，是构造 ClassDesc 的底层结构

参数:

  - className: 类的全限定名

  - serialVersionUID: 序列化版本号(8 字节)

  - Flag: 类描述标志位

  - Fields: 字段描述集合

  - Annotations: 类注解数据列表

  - SuperClass: 父类描述详情，可为 nil



返回值:

  - Java 类描述详情对象




Example:

``````````````yak
// 该示例为示意性用法：构造类描述详情
fields = java.NewJavaClassFields()
details = java.NewJavaClassDetails("com.example.Foo", []byte{0,0,0,0,0,0,0,1}, 0x02, fields, nil, nil)
println(details.ClassName)
``````````````


#### 定义

`NewJavaClassDetails(className string, serialVersionUID []byte, Flag byte, Fields *JavaClassFields, Annotations []JavaSerializable, SuperClass *JavaClassDetails) *JavaClassDetails`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| className | `string` | 类的全限定名 |
| serialVersionUID | `[]byte` | 序列化版本号(8 字节) |
| Flag | `byte` | 类描述标志位 |
| Fields | `*JavaClassFields` | 字段描述集合 |
| Annotations | `[]JavaSerializable` | 类注解数据列表 |
| SuperClass | `*JavaClassDetails` | 父类描述详情，可为 nil |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaClassDetails` | Java 类描述详情对象 |


### NewJavaClassField

#### 详细描述
NewJavaClassField 创建一个 Java 类字段描述，描述单个字段的名称与类型

在 yak 中通过 java.NewJavaClassField 调用

参数:

  - name: 字段名

  - jType: 字段类型标记(如 0x49 表示 int、0x4c 表示对象)

  - className: 对象类型字段的类名描述对象，基本类型可传 nil



返回值:

  - Java 类字段描述对象




Example:

``````````````yak
// 该示例为示意性用法：构造一个 int 字段描述
f = java.NewJavaClassField("id", 0x49, nil)
println(f.Name)
``````````````


#### 定义

`NewJavaClassField(name string, jType byte, className JavaSerializable) *JavaClassField`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 字段名 |
| jType | `byte` | 字段类型标记(如 0x49 表示 int、0x4c 表示对象) |
| className | `JavaSerializable` | 对象类型字段的类名描述对象，基本类型可传 nil |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaClassField` | Java 类字段描述对象 |


### NewJavaClassFields

#### 详细描述
NewJavaClassFields 创建一个 Java 类字段描述集合，用于聚合多个字段描述

在 yak 中通过 java.NewJavaClassFields 调用

参数:

  - fields: 零个或多个字段描述对象



返回值:

  - Java 类字段描述集合对象




Example:

``````````````yak
// 该示例为示意性用法：构造字段描述集合
f = java.NewJavaClassField("id", 0x49, nil)
fields = java.NewJavaClassFields(f)
println(len(fields.Fields))
``````````````


#### 定义

`NewJavaClassFields(fields ...*JavaClassField) *JavaClassFields`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fields | `...*JavaClassField` | 零个或多个字段描述对象 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaClassFields` | Java 类字段描述集合对象 |


### NewJavaEndBlockData

#### 详细描述
NewJavaEndBlockData 创建一个 Java 序列化的块数据结束标记对象(TC_ENDBLOCKDATA)

在 yak 中通过 java.NewJavaEndBlockData 调用，用于标记自定义块数据写入结束

返回值:

  - Java 块数据结束标记序列化对象




Example:

``````````````yak
// 该示例为示意性用法：构造块数据结束标记
end = java.NewJavaEndBlockData()
println(end.TypeVerbose)
``````````````


#### 定义

`NewJavaEndBlockData() *JavaEndBlockData`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaEndBlockData` | Java 块数据结束标记序列化对象 |


### NewJavaEnum

#### 详细描述
NewJavaEnum 创建一个 Java 枚举对象(TC_ENUM)，由枚举类描述与常量名组成

在 yak 中通过 java.NewJavaEnum 调用

参数:

  - i: 枚举类型的类描述对象

  - constantName: 枚举常量名(Java 字符串对象)



返回值:

  - Java 枚举序列化对象




Example:

``````````````yak
// 该示例为示意性用法：构造枚举对象
desc = java.NewJavaClassDesc("java.lang.Enum", []byte{0,0,0,0,0,0,0,0}, 0x02, java.NewJavaClassFields(), nil, nil)
e = java.NewJavaEnum(desc, java.NewJavaString("RED"))
println(e.TypeVerbose)
``````````````


#### 定义

`NewJavaEnum(i *JavaClassDesc, constantName *JavaString) *JavaEnumDesc`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `*JavaClassDesc` | 枚举类型的类描述对象 |
| constantName | `*JavaString` | 枚举常量名(Java 字符串对象) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaEnumDesc` | Java 枚举序列化对象 |


### NewJavaFieldArrayValue

#### 详细描述
NewJavaFieldArrayValue 创建一个数组类型的 Java 序列化字段值，承载数组/null/引用对象

在 yak 中通过 java.NewJavaFieldArrayValue 调用

参数:

  - i: 数组、null 或引用类型的 Java 序列化对象



返回值:

  - Java 字段值序列化对象




Example:

``````````````yak
// 该示例为示意性用法：构造数组字段值
v = java.NewJavaFieldArrayValue(java.NewJavaNull())
println(v.FieldTypeVerbose)
``````````````


#### 定义

`NewJavaFieldArrayValue(i JavaSerializable) *JavaFieldValue`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `JavaSerializable` | 数组、null 或引用类型的 Java 序列化对象 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaFieldValue` | Java 字段值序列化对象 |


### NewJavaFieldBoolValue

#### 详细描述
NewJavaFieldBoolValue 创建一个 boolean 类型的 Java 序列化字段值

在 yak 中通过 java.NewJavaFieldBoolValue 调用

参数:

  - b: 布尔值



返回值:

  - Java 字段值序列化对象




Example:

``````````````yak
// 该示例为示意性用法：构造 bool 字段值
v = java.NewJavaFieldBoolValue(true)
println(v.FieldTypeVerbose)
``````````````


#### 定义

`NewJavaFieldBoolValue(b bool) *JavaFieldValue`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` | 布尔值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaFieldValue` | Java 字段值序列化对象 |


### NewJavaFieldByteValue

#### 详细描述
NewJavaFieldByteValue 创建一个 byte 类型的 Java 序列化字段值

在 yak 中通过 java.NewJavaFieldByteValue 调用

参数:

  - b: 字节值



返回值:

  - Java 字段值序列化对象




Example:

``````````````yak
// 该示例为示意性用法：构造 byte 字段值
v = java.NewJavaFieldByteValue(0x41)
println(v.FieldTypeVerbose)
``````````````


#### 定义

`NewJavaFieldByteValue(b byte) *JavaFieldValue`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `byte` | 字节值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaFieldValue` | Java 字段值序列化对象 |


### NewJavaFieldCharValue

#### 详细描述
NewJavaFieldCharValue 创建一个 char 类型的 Java 序列化字段值

在 yak 中通过 java.NewJavaFieldCharValue 调用

参数:

  - i: char 对应的整数码点



返回值:

  - Java 字段值序列化对象




Example:

``````````````yak
// 该示例为示意性用法：构造 char 字段值
v = java.NewJavaFieldCharValue(65)
println(v.FieldTypeVerbose)
``````````````


#### 定义

`NewJavaFieldCharValue(i int) *JavaFieldValue`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `int` | char 对应的整数码点 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaFieldValue` | Java 字段值序列化对象 |


### NewJavaFieldDoubleValue

#### 详细描述
NewJavaFieldDoubleValue 创建一个 double 类型的 Java 序列化字段值

在 yak 中通过 java.NewJavaFieldDoubleValue 调用

参数:

  - i: double 浮点值



返回值:

  - Java 字段值序列化对象




Example:

``````````````yak
// 该示例为示意性用法：构造 double 字段值
v = java.NewJavaFieldDoubleValue(3.14159)
println(v.FieldTypeVerbose)
``````````````


#### 定义

`NewJavaFieldDoubleValue(i float64) *JavaFieldValue`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `float64` | double 浮点值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaFieldValue` | Java 字段值序列化对象 |


### NewJavaFieldFloatValue

#### 详细描述
NewJavaFieldFloatValue 创建一个 float 类型的 Java 序列化字段值

在 yak 中通过 java.NewJavaFieldFloatValue 调用

参数:

  - i: float 浮点值



返回值:

  - Java 字段值序列化对象




Example:

``````````````yak
// 该示例为示意性用法：构造 float 字段值
v = java.NewJavaFieldFloatValue(1.5)
println(v.FieldTypeVerbose)
``````````````


#### 定义

`NewJavaFieldFloatValue(i float32) *JavaFieldValue`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `float32` | float 浮点值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaFieldValue` | Java 字段值序列化对象 |


### NewJavaFieldIntValue

#### 详细描述
NewJavaFieldIntValue 创建一个 int 类型的 Java 序列化字段值

在 yak 中通过 java.NewJavaFieldIntValue 调用

参数:

  - i: int 整数值



返回值:

  - Java 字段值序列化对象




Example:

``````````````yak
// 该示例为示意性用法：构造 int 字段值
v = java.NewJavaFieldIntValue(123456)
println(v.FieldTypeVerbose)
``````````````


#### 定义

`NewJavaFieldIntValue(i uint64) *JavaFieldValue`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `uint64` | int 整数值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaFieldValue` | Java 字段值序列化对象 |


### NewJavaFieldLongValue

#### 详细描述
NewJavaFieldLongValue 创建一个 long 类型的 Java 序列化字段值

在 yak 中通过 java.NewJavaFieldLongValue 调用

参数:

  - i: long 整数值



返回值:

  - Java 字段值序列化对象




Example:

``````````````yak
// 该示例为示意性用法：构造 long 字段值
v = java.NewJavaFieldLongValue(123456789)
println(v.FieldTypeVerbose)
``````````````


#### 定义

`NewJavaFieldLongValue(i uint64) *JavaFieldValue`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `uint64` | long 整数值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaFieldValue` | Java 字段值序列化对象 |


### NewJavaFieldObjectValue

#### 详细描述
NewJavaFieldObjectValue 创建一个对象类型的 Java 序列化字段值，承载对象/字符串/类等引用类型

在 yak 中通过 java.NewJavaFieldObjectValue 调用

参数:

  - i: 对象、字符串、类、数组、枚举、引用或 null 类型的 Java 序列化对象



返回值:

  - Java 字段值序列化对象




Example:

``````````````yak
// 该示例为示意性用法：构造对象字段值
v = java.NewJavaFieldObjectValue(java.NewJavaString("hello"))
println(v.FieldTypeVerbose)
``````````````


#### 定义

`NewJavaFieldObjectValue(i JavaSerializable) *JavaFieldValue`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `JavaSerializable` | 对象、字符串、类、数组、枚举、引用或 null 类型的 Java 序列化对象 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaFieldValue` | Java 字段值序列化对象 |


### NewJavaFieldShortValue

#### 详细描述
NewJavaFieldShortValue 创建一个 short 类型的 Java 序列化字段值

在 yak 中通过 java.NewJavaFieldShortValue 调用

参数:

  - i: short 整数值



返回值:

  - Java 字段值序列化对象




Example:

``````````````yak
// 该示例为示意性用法：构造 short 字段值
v = java.NewJavaFieldShortValue(1024)
println(v.FieldTypeVerbose)
``````````````


#### 定义

`NewJavaFieldShortValue(i int) *JavaFieldValue`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `int` | short 整数值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaFieldValue` | Java 字段值序列化对象 |


### NewJavaFieldValue

#### 详细描述
NewJavaFieldValue 创建一个指定类型与原始字节的 Java 序列化字段值，是各类字段值构造的基础函数

在 yak 中通过 java.NewJavaFieldValue 调用

参数:

  - t: 字段类型标记(如 JT_INT、JT_BYTE 等)

  - raw: 字段值的原始字节



返回值:

  - Java 字段值序列化对象




Example:

``````````````yak
// 该示例为示意性用法：构造一个字节型字段值
v = java.NewJavaFieldValue(0x42, []byte{0x01})
println(v.FieldTypeVerbose)
``````````````


#### 定义

`NewJavaFieldValue(t byte, raw []byte) *JavaFieldValue`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| t | `byte` | 字段类型标记(如 JT_INT、JT_BYTE 等) |
| raw | `[]byte` | 字段值的原始字节 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaFieldValue` | Java 字段值序列化对象 |


### NewJavaLongString

#### 详细描述
NewJavaLongString 创建一个 Java 序列化的长字符串对象(TC_LONGSTRING)，用于超长字符串

在 yak 中通过 java.NewJavaLongString 调用

参数:

  - raw: 字符串内容



返回值:

  - Java 长字符串序列化对象




Example:

``````````````yak
s = java.NewJavaLongString("hello")
println(s.Value) // OUT: hello
``````````````


#### 定义

`NewJavaLongString(raw string) *JavaString`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `string` | 字符串内容 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaString` | Java 长字符串序列化对象 |


### NewJavaNull

#### 详细描述
NewJavaNull 创建一个 Java 序列化的 null 对象(TC_NULL)

在 yak 中通过 java.NewJavaNull 调用，常用于表示空引用字段

返回值:

  - Java null 序列化对象




Example:

``````````````yak
// 该示例为示意性用法：构造 null 对象并参与序列化
n = java.NewJavaNull()
b = java.MarshalJavaObjects(n)
println(len(b))
``````````````


#### 定义

`NewJavaNull() *JavaNull`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaNull` | Java null 序列化对象 |


### NewJavaObject

#### 详细描述
NewJavaObject 创建一个 Java 对象(TC_OBJECT)，由类描述与类数据组成，是反序列化攻击载荷的核心结构

在 yak 中通过 java.NewJavaObject 调用

参数:

  - class: 对象所属的类描述对象

  - classData: 零个或多个类数据(字段值与块数据)



返回值:

  - Java 对象序列化对象




Example:

``````````````yak
// 该示例为示意性用法：构造一个 Java 对象并序列化
desc = java.NewJavaClassDesc("com.example.Foo", []byte{0,0,0,0,0,0,0,1}, 0x02, java.NewJavaClassFields(), nil, nil)
obj = java.NewJavaObject(desc)
println(len(java.MarshalJavaObjects(obj)) > 0)
``````````````


#### 定义

`NewJavaObject(class *JavaClassDesc, classData ...*JavaClassData) *JavaObject`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| class | `*JavaClassDesc` | 对象所属的类描述对象 |
| classData | `...*JavaClassData` | 零个或多个类数据(字段值与块数据) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaObject` | Java 对象序列化对象 |


### NewJavaReference

#### 详细描述
NewJavaReference 创建一个 Java 序列化的引用对象(TC_REFERENCE)，通过句柄复用已序列化对象

在 yak 中通过 java.NewJavaReference 调用

参数:

  - handle: 被引用对象的句柄(从 0x7e0000 起递增)



返回值:

  - Java 引用序列化对象




Example:

``````````````yak
// 该示例为示意性用法：构造对已有对象的引用
ref = java.NewJavaReference(0x7e0000)
println(ref.TypeVerbose)
``````````````


#### 定义

`NewJavaReference(handle uint64) *JavaReference`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| handle | `uint64` | 被引用对象的句柄(从 0x7e0000 起递增) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaReference` | Java 引用序列化对象 |


### NewJavaString

#### 详细描述
NewJavaString 创建一个 Java 序列化的普通字符串对象(TC_STRING)

在 yak 中通过 java.NewJavaString 调用

参数:

  - raw: 字符串内容



返回值:

  - Java 字符串序列化对象




Example:

``````````````yak
s = java.NewJavaString("hello")
println(s.Value) // OUT: hello
``````````````


#### 定义

`NewJavaString(raw string) *JavaString`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `string` | 字符串内容 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaString` | Java 字符串序列化对象 |


### ParseHexJavaObjectStream

#### 详细描述
ParseHexJavaObjectStream 解析十六进制编码的 Java 序列化字节流，返回 Java 序列化对象列表

在 yak 中通过 java.ParseHexJavaObjectStream 调用，适用于已被 hex 编码的序列化数据

参数:

  - raw: 十六进制编码的 Java 序列化字节流



返回值:

  - 解析得到的 Java 序列化对象列表

  - 错误信息，失败时非 nil




Example:

``````````````yak
s = java.NewJavaString("hello")
h = codec.EncodeToHex(java.MarshalJavaObjects(s))
objs = java.ParseHexJavaObjectStream(h)~
assert len(objs) == 1, "should parse exactly one object"
``````````````


#### 定义

`ParseHexJavaObjectStream(raw string) ([]JavaSerializable, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `string` | 十六进制编码的 Java 序列化字节流 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]JavaSerializable` | 解析得到的 Java 序列化对象列表 |
| r2 | `error` | 错误信息，失败时非 nil |


### ParseJavaObjectStream

#### 详细描述
ParseJavaObjectStream 解析 Java 序列化字节流，返回其中包含的 Java 序列化对象列表

在 yak 中通过 java.ParseJavaObjectStream 调用，是 java.MarshalJavaObjects 的逆操作

参数:

  - raw: Java 序列化字节流



返回值:

  - 解析得到的 Java 序列化对象列表

  - 错误信息，失败时非 nil




Example:

``````````````yak
s = java.NewJavaString("hello")
b = java.MarshalJavaObjects(s)
objs = java.ParseJavaObjectStream(b)~
assert len(objs) == 1, "should parse exactly one object"
``````````````


#### 定义

`ParseJavaObjectStream(raw []byte) ([]JavaSerializable, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` | Java 序列化字节流 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]JavaSerializable` | 解析得到的 Java 序列化对象列表 |
| r2 | `error` | 错误信息，失败时非 nil |


### ToJson

#### 详细描述
ToJson 将解析得到的 Java 序列化对象转换为可读的 JSON 字节数组

在 yak 中通过 java.ToJson 调用，便于查看序列化对象的内部结构

参数:

  - i: 已解析的 Java 序列化对象(或其切片)



返回值:

  - JSON 字节数组

  - 错误信息，失败时非 nil




Example:

``````````````yak
s = java.NewJavaString("hello")
b = java.MarshalJavaObjects(s)
objs = java.ParseJavaObjectStream(b)~
j = java.ToJson(objs)~
assert len(j) > 0, "json output should not be empty"
``````````````


#### 定义

`ToJson(i any) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 已解析的 Java 序列化对象(或其切片) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | JSON 字节数组 |
| r2 | `error` | 错误信息，失败时非 nil |


