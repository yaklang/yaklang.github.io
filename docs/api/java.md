# java {#library-java}

`java` 库提供 Java 序列化对象的解析、构造与序列化能力，以及字节码反编译，用于深度分析与手工构造 Java 反序列化数据流，是反序列化漏洞研究的底层工具。

典型使用场景：

- 解析序列化流：`java.ParseJavaObjectStream` / `java.ParseHexJavaObjectStream` 解析序列化字节，`java.ToJson` / `java.FromJson` 在对象与 JSON 间转换。
- 手工构造对象：`java.NewJavaObject` / `java.NewJavaClass` / `java.NewJavaClassDesc`、`java.NewJavaString`、各类 `java.NewJavaFieldXxxValue` 逐字段构造 Java 对象，`java.MarshalJavaObjects` 序列化输出。
- 反编译：`java.Decompile` 把 class/jar 反编译为源码。

与相邻库的关系：`java` 是底层手工构造层，`yso` 在其之上提供现成的 gadget 生成；二者配合 `facades`/`iiop` 完成完整反序列化利用链。

> 共 32 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [java.Decompile](#decompile) | `from string, to string` | `error` | 反编译一个 jar包或者 class |
| [java.FromJson](#fromjson) | `raw []byte` | `[]JavaSerializable, error` | 将 java.ToJson 生成的 JSON 还原为 Java 序列化对象列表 |
| [java.NewJavaBlockDataBytes](#newjavablockdatabytes) | `raw []byte` | `*JavaBlockData` | 创建一个 Java 序列化的块数据对象(TC_BLOCKDATA)，承载原始字节 |
| [java.NewJavaClass](#newjavaclass) | `j *JavaClassDesc` | `*JavaClass` | 创建一个 Java 类对象(TC_CLASS)，用于序列化对 Class 本身的引用 |
| [java.NewJavaClassData](#newjavaclassdata) | `fields []JavaSerializable, blockData []JavaSerializable` | `*JavaClassData` | 创建一个 Java 类数据对象，承载对象实例的字段值与自定义块数据 |
| [java.NewJavaClassDesc](#newjavaclassdesc) | `className string, serialVersionUID []byte, flag byte, fields *JavaClassFields, annotations []JavaSerializable, superClass *JavaClassDetails` | `*JavaClassDesc` | 创建一个 Java 类描述对象(TC_CLASSDESC)，用于描述对象所属类的元信息 |
| [java.NewJavaClassDetails](#newjavaclassdetails) | `className string, serialVersionUID []byte, Flag byte, Fields *JavaClassFields, Annotations []JavaSerializable, SuperClass *JavaClassDetails` | `*JavaClassDetails` | 创建 Java 类描述详情(类名、serialVersionUID、字段、父类等) |
| [java.NewJavaClassField](#newjavaclassfield) | `name string, jType byte, className JavaSerializable` | `*JavaClassField` | 创建一个 Java 类字段描述，描述单个字段的名称与类型 |
| [java.NewJavaEndBlockData](#newjavaendblockdata) | - | `*JavaEndBlockData` | 创建一个 Java 序列化的块数据结束标记对象(TC_ENDBLOCKDATA) |
| [java.NewJavaEnum](#newjavaenum) | `i *JavaClassDesc, constantName *JavaString` | `*JavaEnumDesc` | 创建一个 Java 枚举对象(TC_ENUM)，由枚举类描述与常量名组成 |
| [java.NewJavaFieldArrayValue](#newjavafieldarrayvalue) | `i JavaSerializable` | `*JavaFieldValue` | 创建一个数组类型的 Java 序列化字段值，承载数组/null/引用对象 |
| [java.NewJavaFieldBoolValue](#newjavafieldboolvalue) | `b bool` | `*JavaFieldValue` | 创建一个 boolean 类型的 Java 序列化字段值 |
| [java.NewJavaFieldByteValue](#newjavafieldbytevalue) | `b byte` | `*JavaFieldValue` | 创建一个 byte 类型的 Java 序列化字段值 |
| [java.NewJavaFieldCharValue](#newjavafieldcharvalue) | `i int` | `*JavaFieldValue` | 创建一个 char 类型的 Java 序列化字段值 |
| [java.NewJavaFieldDoubleValue](#newjavafielddoublevalue) | `i float64` | `*JavaFieldValue` | 创建一个 double 类型的 Java 序列化字段值 |
| [java.NewJavaFieldFloatValue](#newjavafieldfloatvalue) | `i float32` | `*JavaFieldValue` | 创建一个 float 类型的 Java 序列化字段值 |
| [java.NewJavaFieldIntValue](#newjavafieldintvalue) | `i uint64` | `*JavaFieldValue` | 创建一个 int 类型的 Java 序列化字段值 |
| [java.NewJavaFieldLongValue](#newjavafieldlongvalue) | `i uint64` | `*JavaFieldValue` | 创建一个 long 类型的 Java 序列化字段值 |
| [java.NewJavaFieldObjectValue](#newjavafieldobjectvalue) | `i JavaSerializable` | `*JavaFieldValue` | 创建一个对象类型的 Java 序列化字段值，承载对象/字符串/类等引用类型 |
| [java.NewJavaFieldShortValue](#newjavafieldshortvalue) | `i int` | `*JavaFieldValue` | 创建一个 short 类型的 Java 序列化字段值 |
| [java.NewJavaFieldValue](#newjavafieldvalue) | `t byte, raw []byte` | `*JavaFieldValue` | 创建一个指定类型与原始字节的 Java 序列化字段值，是各类字段值构造的基础函数 |
| [java.NewJavaLongString](#newjavalongstring) | `raw string` | `*JavaString` | 创建一个 Java 序列化的长字符串对象(TC_LONGSTRING)，用于超长字符串 |
| [java.NewJavaNull](#newjavanull) | - | `*JavaNull` | 创建一个 Java 序列化的 null 对象(TC_NULL) |
| [java.NewJavaReference](#newjavareference) | `handle uint64` | `*JavaReference` | 创建一个 Java 序列化的引用对象(TC_REFERENCE)，通过句柄复用已序列化对象 |
| [java.NewJavaString](#newjavastring) | `raw string` | `*JavaString` | 创建一个 Java 序列化的普通字符串对象(TC_STRING) |
| [java.ParseHexJavaObjectStream](#parsehexjavaobjectstream) | `raw string` | `[]JavaSerializable, error` | 解析十六进制编码的 Java 序列化字节流，返回 Java 序列化对象列表 |
| [java.ParseJavaObjectStream](#parsejavaobjectstream) | `raw []byte` | `[]JavaSerializable, error` | 解析 Java 序列化字节流，返回其中包含的 Java 序列化对象列表 |
| [java.ToJson](#tojson) | `i any` | `[]byte, error` | 将解析得到的 Java 序列化对象转换为可读的 JSON 字节数组 |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [java.MarshalJavaObjects](#marshaljavaobjects) | `res ...JavaSerializable` | `[]byte` | 将一个或多个 Java 序列化对象编码为 Java 序列化字节流 |
| [java.NewJavaArray](#newjavaarray) | `j *JavaClassDesc, values ...*JavaFieldValue` | `*JavaArray` | 创建一个 Java 数组对象(TC_ARRAY)，承载同类型元素的字段值序列 |
| [java.NewJavaClassFields](#newjavaclassfields) | `fields ...*JavaClassField` | `*JavaClassFields` | 创建一个 Java 类字段描述集合，用于聚合多个字段描述 |
| [java.NewJavaObject](#newjavaobject) | `class *JavaClassDesc, classData ...*JavaClassData` | `*JavaObject` | 创建一个 Java 对象(TC_OBJECT)，由类描述与类数据组成，是反序列化攻击载荷的核心结构 |

## 函数详情

### Decompile {#decompile}

```go
Decompile(from string, to string) error
```

反编译一个 jar包或者 class

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| from | `string` | 待反编译的 jar/war/class 文件路径 |
| to | `string` | 反编译结果输出的目录或文件路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 反编译失败时返回错误 |

**示例**

``````````````yak
// 无法本地验证: 需要磁盘上真实存在的 jar/war/class 文件(请替换为真实路径)
err = java.Decompile("test.jar", "test/"); die(err)   // 反编译 jar 到目录
err = java.Decompile("test.war", "test/"); die(err)   // 反编译 war 到目录
err = java.Decompile("a.class", "a.java"); die(err)   // 反编译单个 class 到文件
``````````````

---

### FromJson {#fromjson}

```go
FromJson(raw []byte) ([]JavaSerializable, error)
```

将 java.ToJson 生成的 JSON 还原为 Java 序列化对象列表

在 yak 中通过 java.FromJson 调用，是 java.ToJson 的逆操作

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| raw | `[]byte` | java.ToJson 生成的 JSON 字节数组 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]JavaSerializable` | 还原出的 Java 序列化对象列表 |
| r2 | `error` | 错误信息，失败时非 nil |

**示例**

``````````````yak
s = java.NewJavaString("hello")
b = java.MarshalJavaObjects(s)
objs = java.ParseJavaObjectStream(b)~
j = java.ToJson(objs)~
restored = java.FromJson(j)~
assert len(restored) == len(objs), "restored object count should match"
``````````````

---

### NewJavaBlockDataBytes {#newjavablockdatabytes}

```go
NewJavaBlockDataBytes(raw []byte) *JavaBlockData
```

创建一个 Java 序列化的块数据对象(TC_BLOCKDATA)，承载原始字节

在 yak 中通过 java.NewJavaBlockDataBytes 调用，常用于 writeObject 自定义数据

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| raw | `[]byte` | 块数据的原始字节内容 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*JavaBlockData` | Java 块数据序列化对象 |

**示例**

``````````````yak
// 该示例为示意性用法：构造原始块数据
block = java.NewJavaBlockDataBytes([]byte("data"))
println(block.TypeVerbose)
``````````````

---

### NewJavaClass {#newjavaclass}

```go
NewJavaClass(j *JavaClassDesc) *JavaClass
```

创建一个 Java 类对象(TC_CLASS)，用于序列化对 Class 本身的引用

在 yak 中通过 java.NewJavaClass 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| j | `*JavaClassDesc` | 类描述对象 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*JavaClass` | Java 类序列化对象 |

**示例**

``````````````yak
// 该示例为示意性用法：构造类对象
desc = java.NewJavaClassDesc("com.example.Foo", []byte{0,0,0,0,0,0,0,1}, 0x02, java.NewJavaClassFields(), nil, nil)
cls = java.NewJavaClass(desc)
println(cls.TypeVerbose)
``````````````

---

### NewJavaClassData {#newjavaclassdata}

```go
NewJavaClassData(fields []JavaSerializable, blockData []JavaSerializable) *JavaClassData
```

创建一个 Java 类数据对象，承载对象实例的字段值与自定义块数据

在 yak 中通过 java.NewJavaClassData 调用，配合 java.NewJavaObject 使用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| fields | `[]JavaSerializable` | 字段值序列化对象列表 |
| blockData | `[]JavaSerializable` | 自定义块数据序列化对象列表 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*JavaClassData` | Java 类数据对象 |

**示例**

``````````````yak
// 该示例为示意性用法：构造类数据
data = java.NewJavaClassData([java.NewJavaFieldIntValue(1)], [])
println(len(data.Fields))
``````````````

---

### NewJavaClassDesc {#newjavaclassdesc}

```go
NewJavaClassDesc(className string, serialVersionUID []byte, flag byte, fields *JavaClassFields, annotations []JavaSerializable, superClass *JavaClassDetails) *JavaClassDesc
```

创建一个 Java 类描述对象(TC_CLASSDESC)，用于描述对象所属类的元信息

在 yak 中通过 java.NewJavaClassDesc 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| className | `string` | 类的全限定名 |
| serialVersionUID | `[]byte` | 序列化版本号(8 字节) |
| flag | `byte` | 类描述标志位 |
| fields | `*JavaClassFields` | 字段描述集合 |
| annotations | `[]JavaSerializable` | 类注解数据列表 |
| superClass | `*JavaClassDetails` | 父类描述详情，可为 nil |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*JavaClassDesc` | Java 类描述序列化对象 |

**示例**

``````````````yak
// 该示例为示意性用法：构造类描述
fields = java.NewJavaClassFields()
desc = java.NewJavaClassDesc("com.example.Foo", []byte{0,0,0,0,0,0,0,1}, 0x02, fields, nil, nil)
obj = java.NewJavaObject(desc)
println(len(java.MarshalJavaObjects(obj)) > 0)
``````````````

---

### NewJavaClassDetails {#newjavaclassdetails}

```go
NewJavaClassDetails(className string, serialVersionUID []byte, Flag byte, Fields *JavaClassFields, Annotations []JavaSerializable, SuperClass *JavaClassDetails) *JavaClassDetails
```

创建 Java 类描述详情(类名、serialVersionUID、字段、父类等)

在 yak 中通过 java.NewJavaClassDetails 调用，是构造 ClassDesc 的底层结构

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| className | `string` | 类的全限定名 |
| serialVersionUID | `[]byte` | 序列化版本号(8 字节) |
| Flag | `byte` | 类描述标志位 |
| Fields | `*JavaClassFields` | 字段描述集合 |
| Annotations | `[]JavaSerializable` | 类注解数据列表 |
| SuperClass | `*JavaClassDetails` | 父类描述详情，可为 nil |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*JavaClassDetails` | Java 类描述详情对象 |

**示例**

``````````````yak
// 该示例为示意性用法：构造类描述详情
fields = java.NewJavaClassFields()
details = java.NewJavaClassDetails("com.example.Foo", []byte{0,0,0,0,0,0,0,1}, 0x02, fields, nil, nil)
println(details.ClassName)
``````````````

---

### NewJavaClassField {#newjavaclassfield}

```go
NewJavaClassField(name string, jType byte, className JavaSerializable) *JavaClassField
```

创建一个 Java 类字段描述，描述单个字段的名称与类型

在 yak 中通过 java.NewJavaClassField 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 字段名 |
| jType | `byte` | 字段类型标记(如 0x49 表示 int、0x4c 表示对象) |
| className | `JavaSerializable` | 对象类型字段的类名描述对象，基本类型可传 nil |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*JavaClassField` | Java 类字段描述对象 |

**示例**

``````````````yak
// 该示例为示意性用法：构造一个 int 字段描述
f = java.NewJavaClassField("id", 0x49, nil)
println(f.Name)
``````````````

---

### NewJavaEndBlockData {#newjavaendblockdata}

```go
NewJavaEndBlockData() *JavaEndBlockData
```

创建一个 Java 序列化的块数据结束标记对象(TC_ENDBLOCKDATA)

在 yak 中通过 java.NewJavaEndBlockData 调用，用于标记自定义块数据写入结束

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*JavaEndBlockData` | Java 块数据结束标记序列化对象 |

**示例**

``````````````yak
// 该示例为示意性用法：构造块数据结束标记
end = java.NewJavaEndBlockData()
println(end.TypeVerbose)
``````````````

---

### NewJavaEnum {#newjavaenum}

```go
NewJavaEnum(i *JavaClassDesc, constantName *JavaString) *JavaEnumDesc
```

创建一个 Java 枚举对象(TC_ENUM)，由枚举类描述与常量名组成

在 yak 中通过 java.NewJavaEnum 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `*JavaClassDesc` | 枚举类型的类描述对象 |
| constantName | `*JavaString` | 枚举常量名(Java 字符串对象) |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*JavaEnumDesc` | Java 枚举序列化对象 |

**示例**

``````````````yak
// 该示例为示意性用法：构造枚举对象
desc = java.NewJavaClassDesc("java.lang.Enum", []byte{0,0,0,0,0,0,0,0}, 0x02, java.NewJavaClassFields(), nil, nil)
e = java.NewJavaEnum(desc, java.NewJavaString("RED"))
println(e.TypeVerbose)
``````````````

---

### NewJavaFieldArrayValue {#newjavafieldarrayvalue}

```go
NewJavaFieldArrayValue(i JavaSerializable) *JavaFieldValue
```

创建一个数组类型的 Java 序列化字段值，承载数组/null/引用对象

在 yak 中通过 java.NewJavaFieldArrayValue 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `JavaSerializable` | 数组、null 或引用类型的 Java 序列化对象 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*JavaFieldValue` | Java 字段值序列化对象 |

**示例**

``````````````yak
// 该示例为示意性用法：构造数组字段值
v = java.NewJavaFieldArrayValue(java.NewJavaNull())
println(v.FieldTypeVerbose)
``````````````

---

### NewJavaFieldBoolValue {#newjavafieldboolvalue}

```go
NewJavaFieldBoolValue(b bool) *JavaFieldValue
```

创建一个 boolean 类型的 Java 序列化字段值

在 yak 中通过 java.NewJavaFieldBoolValue 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| b | `bool` | 布尔值 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*JavaFieldValue` | Java 字段值序列化对象 |

**示例**

``````````````yak
// 该示例为示意性用法：构造 bool 字段值
v = java.NewJavaFieldBoolValue(true)
println(v.FieldTypeVerbose)
``````````````

---

### NewJavaFieldByteValue {#newjavafieldbytevalue}

```go
NewJavaFieldByteValue(b byte) *JavaFieldValue
```

创建一个 byte 类型的 Java 序列化字段值

在 yak 中通过 java.NewJavaFieldByteValue 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| b | `byte` | 字节值 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*JavaFieldValue` | Java 字段值序列化对象 |

**示例**

``````````````yak
// 该示例为示意性用法：构造 byte 字段值
v = java.NewJavaFieldByteValue(0x41)
println(v.FieldTypeVerbose)
``````````````

---

### NewJavaFieldCharValue {#newjavafieldcharvalue}

```go
NewJavaFieldCharValue(i int) *JavaFieldValue
```

创建一个 char 类型的 Java 序列化字段值

在 yak 中通过 java.NewJavaFieldCharValue 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `int` | char 对应的整数码点 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*JavaFieldValue` | Java 字段值序列化对象 |

**示例**

``````````````yak
// 该示例为示意性用法：构造 char 字段值
v = java.NewJavaFieldCharValue(65)
println(v.FieldTypeVerbose)
``````````````

---

### NewJavaFieldDoubleValue {#newjavafielddoublevalue}

```go
NewJavaFieldDoubleValue(i float64) *JavaFieldValue
```

创建一个 double 类型的 Java 序列化字段值

在 yak 中通过 java.NewJavaFieldDoubleValue 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `float64` | double 浮点值 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*JavaFieldValue` | Java 字段值序列化对象 |

**示例**

``````````````yak
// 该示例为示意性用法：构造 double 字段值
v = java.NewJavaFieldDoubleValue(3.14159)
println(v.FieldTypeVerbose)
``````````````

---

### NewJavaFieldFloatValue {#newjavafieldfloatvalue}

```go
NewJavaFieldFloatValue(i float32) *JavaFieldValue
```

创建一个 float 类型的 Java 序列化字段值

在 yak 中通过 java.NewJavaFieldFloatValue 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `float32` | float 浮点值 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*JavaFieldValue` | Java 字段值序列化对象 |

**示例**

``````````````yak
// 该示例为示意性用法：构造 float 字段值
v = java.NewJavaFieldFloatValue(1.5)
println(v.FieldTypeVerbose)
``````````````

---

### NewJavaFieldIntValue {#newjavafieldintvalue}

```go
NewJavaFieldIntValue(i uint64) *JavaFieldValue
```

创建一个 int 类型的 Java 序列化字段值

在 yak 中通过 java.NewJavaFieldIntValue 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `uint64` | int 整数值 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*JavaFieldValue` | Java 字段值序列化对象 |

**示例**

``````````````yak
// 该示例为示意性用法：构造 int 字段值
v = java.NewJavaFieldIntValue(123456)
println(v.FieldTypeVerbose)
``````````````

---

### NewJavaFieldLongValue {#newjavafieldlongvalue}

```go
NewJavaFieldLongValue(i uint64) *JavaFieldValue
```

创建一个 long 类型的 Java 序列化字段值

在 yak 中通过 java.NewJavaFieldLongValue 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `uint64` | long 整数值 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*JavaFieldValue` | Java 字段值序列化对象 |

**示例**

``````````````yak
// 该示例为示意性用法：构造 long 字段值
v = java.NewJavaFieldLongValue(123456789)
println(v.FieldTypeVerbose)
``````````````

---

### NewJavaFieldObjectValue {#newjavafieldobjectvalue}

```go
NewJavaFieldObjectValue(i JavaSerializable) *JavaFieldValue
```

创建一个对象类型的 Java 序列化字段值，承载对象/字符串/类等引用类型

在 yak 中通过 java.NewJavaFieldObjectValue 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `JavaSerializable` | 对象、字符串、类、数组、枚举、引用或 null 类型的 Java 序列化对象 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*JavaFieldValue` | Java 字段值序列化对象 |

**示例**

``````````````yak
// 该示例为示意性用法：构造对象字段值
v = java.NewJavaFieldObjectValue(java.NewJavaString("hello"))
println(v.FieldTypeVerbose)
``````````````

---

### NewJavaFieldShortValue {#newjavafieldshortvalue}

```go
NewJavaFieldShortValue(i int) *JavaFieldValue
```

创建一个 short 类型的 Java 序列化字段值

在 yak 中通过 java.NewJavaFieldShortValue 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `int` | short 整数值 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*JavaFieldValue` | Java 字段值序列化对象 |

**示例**

``````````````yak
// 该示例为示意性用法：构造 short 字段值
v = java.NewJavaFieldShortValue(1024)
println(v.FieldTypeVerbose)
``````````````

---

### NewJavaFieldValue {#newjavafieldvalue}

```go
NewJavaFieldValue(t byte, raw []byte) *JavaFieldValue
```

创建一个指定类型与原始字节的 Java 序列化字段值，是各类字段值构造的基础函数

在 yak 中通过 java.NewJavaFieldValue 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| t | `byte` | 字段类型标记(如 JT_INT、JT_BYTE 等) |
| raw | `[]byte` | 字段值的原始字节 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*JavaFieldValue` | Java 字段值序列化对象 |

**示例**

``````````````yak
// 该示例为示意性用法：构造一个字节型字段值
v = java.NewJavaFieldValue(0x42, []byte{0x01})
println(v.FieldTypeVerbose)
``````````````

---

### NewJavaLongString {#newjavalongstring}

```go
NewJavaLongString(raw string) *JavaString
```

创建一个 Java 序列化的长字符串对象(TC_LONGSTRING)，用于超长字符串

在 yak 中通过 java.NewJavaLongString 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| raw | `string` | 字符串内容 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*JavaString` | Java 长字符串序列化对象 |

**示例**

``````````````yak
s = java.NewJavaLongString("hello")
println(s.Value) // OUT: hello
``````````````

---

### NewJavaNull {#newjavanull}

```go
NewJavaNull() *JavaNull
```

创建一个 Java 序列化的 null 对象(TC_NULL)

在 yak 中通过 java.NewJavaNull 调用，常用于表示空引用字段

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*JavaNull` | Java null 序列化对象 |

**示例**

``````````````yak
// 该示例为示意性用法：构造 null 对象并参与序列化
n = java.NewJavaNull()
b = java.MarshalJavaObjects(n)
println(len(b))
``````````````

---

### NewJavaReference {#newjavareference}

```go
NewJavaReference(handle uint64) *JavaReference
```

创建一个 Java 序列化的引用对象(TC_REFERENCE)，通过句柄复用已序列化对象

在 yak 中通过 java.NewJavaReference 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| handle | `uint64` | 被引用对象的句柄(从 0x7e0000 起递增) |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*JavaReference` | Java 引用序列化对象 |

**示例**

``````````````yak
// 该示例为示意性用法：构造对已有对象的引用
ref = java.NewJavaReference(0x7e0000)
println(ref.TypeVerbose)
``````````````

---

### NewJavaString {#newjavastring}

```go
NewJavaString(raw string) *JavaString
```

创建一个 Java 序列化的普通字符串对象(TC_STRING)

在 yak 中通过 java.NewJavaString 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| raw | `string` | 字符串内容 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*JavaString` | Java 字符串序列化对象 |

**示例**

``````````````yak
s = java.NewJavaString("hello")
println(s.Value) // OUT: hello
``````````````

---

### ParseHexJavaObjectStream {#parsehexjavaobjectstream}

```go
ParseHexJavaObjectStream(raw string) ([]JavaSerializable, error)
```

解析十六进制编码的 Java 序列化字节流，返回 Java 序列化对象列表

在 yak 中通过 java.ParseHexJavaObjectStream 调用，适用于已被 hex 编码的序列化数据

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| raw | `string` | 十六进制编码的 Java 序列化字节流 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]JavaSerializable` | 解析得到的 Java 序列化对象列表 |
| r2 | `error` | 错误信息，失败时非 nil |

**示例**

``````````````yak
s = java.NewJavaString("hello")
h = codec.EncodeToHex(java.MarshalJavaObjects(s))
objs = java.ParseHexJavaObjectStream(h)~
assert len(objs) == 1, "should parse exactly one object"
``````````````

---

### ParseJavaObjectStream {#parsejavaobjectstream}

```go
ParseJavaObjectStream(raw []byte) ([]JavaSerializable, error)
```

解析 Java 序列化字节流，返回其中包含的 Java 序列化对象列表

在 yak 中通过 java.ParseJavaObjectStream 调用，是 java.MarshalJavaObjects 的逆操作

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| raw | `[]byte` | Java 序列化字节流 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]JavaSerializable` | 解析得到的 Java 序列化对象列表 |
| r2 | `error` | 错误信息，失败时非 nil |

**示例**

``````````````yak
s = java.NewJavaString("hello")
b = java.MarshalJavaObjects(s)
objs = java.ParseJavaObjectStream(b)~
assert len(objs) == 1, "should parse exactly one object"
``````````````

---

### ToJson {#tojson}

```go
ToJson(i any) ([]byte, error)
```

将解析得到的 Java 序列化对象转换为可读的 JSON 字节数组

在 yak 中通过 java.ToJson 调用，便于查看序列化对象的内部结构

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 已解析的 Java 序列化对象(或其切片) |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | JSON 字节数组 |
| r2 | `error` | 错误信息，失败时非 nil |

**示例**

``````````````yak
s = java.NewJavaString("hello")
b = java.MarshalJavaObjects(s)
objs = java.ParseJavaObjectStream(b)~
j = java.ToJson(objs)~
assert len(j) > 0, "json output should not be empty"
``````````````

---

## 可变参数函数详情

### MarshalJavaObjects {#marshaljavaobjects}

```go
MarshalJavaObjects(res ...JavaSerializable) []byte
```

将一个或多个 Java 序列化对象编码为 Java 序列化字节流

在 yak 中通过 java.MarshalJavaObjects 调用，是 java.ParseJavaObjectStream 的逆操作

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| res | `...JavaSerializable` | 一个或多个 Java 序列化对象 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | Java 序列化字节流 |

**示例**

``````````````yak
s = java.NewJavaString("hello")
b = java.MarshalJavaObjects(s)
assert len(b) > 0, "marshaled bytes should not be empty"
``````````````

---

### NewJavaArray {#newjavaarray}

```go
NewJavaArray(j *JavaClassDesc, values ...*JavaFieldValue) *JavaArray
```

创建一个 Java 数组对象(TC_ARRAY)，承载同类型元素的字段值序列

在 yak 中通过 java.NewJavaArray 调用

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| j | `*JavaClassDesc` | 数组的类描述对象(描述元素类型) |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| values | `...*JavaFieldValue` | 零个或多个数组元素字段值 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*JavaArray` | Java 数组序列化对象 |

**示例**

``````````````yak
// 该示例为示意性用法：构造一个 int 数组对象
desc = java.NewJavaClassDesc("[I", []byte{0,0,0,0,0,0,0,1}, 0x02, java.NewJavaClassFields(), nil, nil)
arr = java.NewJavaArray(desc, java.NewJavaFieldIntValue(1), java.NewJavaFieldIntValue(2))
println(arr.TypeVerbose)
``````````````

---

### NewJavaClassFields {#newjavaclassfields}

```go
NewJavaClassFields(fields ...*JavaClassField) *JavaClassFields
```

创建一个 Java 类字段描述集合，用于聚合多个字段描述

在 yak 中通过 java.NewJavaClassFields 调用

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| fields | `...*JavaClassField` | 零个或多个字段描述对象 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*JavaClassFields` | Java 类字段描述集合对象 |

**示例**

``````````````yak
// 该示例为示意性用法：构造字段描述集合
f = java.NewJavaClassField("id", 0x49, nil)
fields = java.NewJavaClassFields(f)
println(len(fields.Fields))
``````````````

---

### NewJavaObject {#newjavaobject}

```go
NewJavaObject(class *JavaClassDesc, classData ...*JavaClassData) *JavaObject
```

创建一个 Java 对象(TC_OBJECT)，由类描述与类数据组成，是反序列化攻击载荷的核心结构

在 yak 中通过 java.NewJavaObject 调用

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| class | `*JavaClassDesc` | 对象所属的类描述对象 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| classData | `...*JavaClassData` | 零个或多个类数据(字段值与块数据) |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*JavaObject` | Java 对象序列化对象 |

**示例**

``````````````yak
// 该示例为示意性用法：构造一个 Java 对象并序列化
desc = java.NewJavaClassDesc("com.example.Foo", []byte{0,0,0,0,0,0,0,1}, 0x02, java.NewJavaClassFields(), nil, nil)
obj = java.NewJavaObject(desc)
println(len(java.MarshalJavaObjects(obj)) > 0)
``````````````

---

