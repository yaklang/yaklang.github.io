# java


|成员函数|函数描述/介绍|
|:------|:--------|
 | [java.FromJson](#javafromjson) | 把 JSON 转变为 Java 对象 |
 | [java.NewJavaArray](#javanewjavaarray) | 创建一个 JAVA TC_ARRAY |
 | [java.NewJavaBlockDataBytes](#javanewjavablockdatabytes) | 创建一个 Java TC_BLOCKDATA (bytes) |
 | [java.NewJavaClass](#javanewjavaclass) | 创建一个 JavaClass TC_CLASS |
 | [java.NewJavaClassData](#javanewjavaclassdata) | 创建一个 CLASSDATA 块 |
 | [java.NewJavaClassDesc](#javanewjavaclassdesc) | 创建一个 TC_CLASSDESC |
 | [java.NewJavaClassDetails](#javanewjavaclassdetails) | 创建一个 X_CLASSDETAILS |
 | [java.NewJavaClassField](#javanewjavaclassfield) | 创建一个类参数结构 X_CLASSFIELD |
 | [java.NewJavaClassFields](#javanewjavaclassfields) | 创建参数组 X_CLASSFIELDS |
 | [java.NewJavaEndBlockData](#javanewjavaendblockdata) | 创建一个块数据结束符（TC_ENDBLOCKDATA） |
 | [java.NewJavaEnum](#javanewjavaenum) | 创建一个 TC_ENUM |
 | [java.NewJavaFieldArrayValue](#javanewjavafieldarrayvalue) | 创建一个 X_FIELDVALUE |
 | [java.NewJavaFieldBoolValue](#javanewjavafieldboolvalue) | 创建一个布尔值作为 Java 字段值 |
 | [java.NewJavaFieldByteValue](#javanewjavafieldbytevalue) | 创建一个 Byte 的字段值 |
 | [java.NewJavaFieldCharValue](#javanewjavafieldcharvalue) | 创建一个 Char 作为字段值 |
 | [java.NewJavaFieldDoubleValue](#javanewjavafielddoublevalue) | 创建一个 float64 作为字段值 |
 | [java.NewJavaFieldFloatValue](#javanewjavafieldfloatvalue) | 创建一个 float32 作为字段值 |
 | [java.NewJavaFieldIntValue](#javanewjavafieldintvalue) | 创建一个整数作为字段值 |
 | [java.NewJavaFieldLongValue](#javanewjavafieldlongvalue) | 创建一个 Long 作为字段值(uint64) |
 | [java.NewJavaFieldObjectValue](#javanewjavafieldobjectvalue) | 创建一个 TC_OBJECT 作为字段值 |
 | [java.NewJavaFieldShortValue](#javanewjavafieldshortvalue) | 创建一个 short 作为字段值 |
 | [java.NewJavaFieldValue](#javanewjavafieldvalue) | 根据类型，和 bytes 创建一个字段值 |
 | [java.NewJavaLongString](#javanewjavalongstring) | 创建一个 Long String(8byte length) |
 | [java.NewJavaNull](#javanewjavanull) | 创建一个 TC_NULL |
 | [java.NewJavaObject](#javanewjavaobject) | 创建一个 Java TC_OBJECT |
 | [java.NewJavaReference](#javanewjavareference) | 根据 Handle 创建一个 TC_REFERENCE |
 | [java.NewJavaString](#javanewjavastring) | 创建一个 TC_STRING (4byte length) |
 | [java.ParseHexJavaObjectStream](#javaparsehexjavaobjectstream) | 把 HEX 流(aced0005...)转变为对象 |
 | [java.ParseJavaObjectStream](#javaparsejavaobjectstream) | 把 bytes 转变为 Java 对象 |
 | [java.ToJson](#javatojson) | 把 Java 对象转变为 JSON |




 



## 函数定义

### java.FromJson

把 JSON 转变为 Java 对象

#### 详细描述



#### 定义：

`func java.FromJson(bytes: bytes) return (tcObjects: []yserx.JavaSerializable, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| bytes | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| tcObjects | `[]yserx.JavaSerializable` |   |
| r1 | `error` |   |


 
### java.NewJavaArray

创建一个 JAVA TC_ARRAY

#### 详细描述



#### 定义：

`func java.NewJavaArray(classDesc: *yserx.JavaClassDesc, fields ...*yserx.JavaFieldValue) return (TC_ARRAY: *yserx.JavaArray)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| classDesc | `*yserx.JavaClassDesc` |   |
| fields | `...*yserx.JavaFieldValue` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| TC_ARRAY | `*yserx.JavaArray` |   |


 
### java.NewJavaBlockDataBytes

创建一个 Java TC_BLOCKDATA (bytes)

#### 详细描述



#### 定义：

`func java.NewJavaBlockDataBytes(data: bytes) return (TC_BLOCKDATA: *yserx.JavaBlockData)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| data | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| TC_BLOCKDATA | `*yserx.JavaBlockData` |   |


 
### java.NewJavaClass

创建一个 JavaClass TC_CLASS

#### 详细描述



#### 定义：

`func java.NewJavaClass(tcClassDesc: *yserx.JavaClassDesc) return (TC_CLASS: *yserx.JavaClass)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tcClassDesc | `*yserx.JavaClassDesc` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| TC_CLASS | `*yserx.JavaClass` |   |


 
### java.NewJavaClassData

创建一个 CLASSDATA 块

#### 详细描述



#### 定义：

`func java.NewJavaClassData(fields: []yserx.JavaSerializable, blockdatas: []yserx.JavaSerializable) return (X_CLASSDATA: *yserx.JavaClassData)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fields | `[]yserx.JavaSerializable` |   |
| blockdatas | `[]yserx.JavaSerializable` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| X_CLASSDATA | `*yserx.JavaClassData` |   |


 
### java.NewJavaClassDesc

创建一个 TC_CLASSDESC

#### 详细描述



#### 定义：

`func java.NewJavaClassDesc(className: string, serialId: bytes, flag: byte, X_FIELDS: *yserx.JavaClassFields, annotations: []yserx.JavaSerializable, superClass: *yserx.JavaClassDetails) return (TC_CLASSDESC: *yserx.JavaClassDesc)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| className | `string` |   |
| serialId | `bytes` |   |
| flag | `byte` |   |
| X_FIELDS | `*yserx.JavaClassFields` |   |
| annotations | `[]yserx.JavaSerializable` |   |
| superClass | `*yserx.JavaClassDetails` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| TC_CLASSDESC | `*yserx.JavaClassDesc` |   |


 
### java.NewJavaClassDetails

创建一个 X_CLASSDETAILS

#### 详细描述



#### 定义：

`func java.NewJavaClassDetails(className: string, serialId: bytes, flag: byte, fields: *yserx.JavaClassFields, annotations: []yserx.JavaSerializable, superClass: *yserx.JavaClassDetails) return (X_CLASSDETAILS: *yserx.JavaClassDetails)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| className | `string` |   |
| serialId | `bytes` |   |
| flag | `byte` |   |
| fields | `*yserx.JavaClassFields` |   |
| annotations | `[]yserx.JavaSerializable` |   |
| superClass | `*yserx.JavaClassDetails` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| X_CLASSDETAILS | `*yserx.JavaClassDetails` |   |


 
### java.NewJavaClassField

创建一个类参数结构 X_CLASSFIELD

#### 详细描述



#### 定义：

`func java.NewJavaClassField(fieldName: string, fieldType: byte, fieldObject: yserx.JavaSerializable) return (r0: *yserx.JavaClassField)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fieldName | `string` |   |
| fieldType | `byte` |   |
| fieldObject | `yserx.JavaSerializable` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yserx.JavaClassField` |   |


 
### java.NewJavaClassFields

创建参数组 X_CLASSFIELDS

#### 详细描述



#### 定义：

`func java.NewJavaClassFields(fields ...*yserx.JavaClassField) return (r0: *yserx.JavaClassFields)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fields | `...*yserx.JavaClassField` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yserx.JavaClassFields` |   |


 
### java.NewJavaEndBlockData

创建一个块数据结束符（TC_ENDBLOCKDATA）

#### 详细描述



#### 定义：

`func java.NewJavaEndBlockData() return (r0: *yserx.JavaEndBlockData)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yserx.JavaEndBlockData` |   |


 
### java.NewJavaEnum

创建一个 TC_ENUM

#### 详细描述



#### 定义：

`func java.NewJavaEnum(desc: *yserx.JavaClassDesc, constantName: *yserx.JavaString) return (TC_ENUM: *yserx.JavaEnumDesc)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| desc | `*yserx.JavaClassDesc` |   |
| constantName | `*yserx.JavaString` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| TC_ENUM | `*yserx.JavaEnumDesc` |   |


 
### java.NewJavaFieldArrayValue

创建一个 X_FIELDVALUE

#### 详细描述



#### 定义：

`func java.NewJavaFieldArrayValue(element: yserx.JavaSerializable) return (r0: *yserx.JavaFieldValue)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| element | `yserx.JavaSerializable` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yserx.JavaFieldValue` |   |


 
### java.NewJavaFieldBoolValue

创建一个布尔值作为 Java 字段值

#### 详细描述



#### 定义：

`func java.NewJavaFieldBoolValue(result: bool) return (r0: *yserx.JavaFieldValue)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| result | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yserx.JavaFieldValue` |   |


 
### java.NewJavaFieldByteValue

创建一个 Byte 的字段值

#### 详细描述



#### 定义：

`func java.NewJavaFieldByteValue(data: byte) return (r0: *yserx.JavaFieldValue)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| data | `byte` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yserx.JavaFieldValue` |   |


 
### java.NewJavaFieldCharValue

创建一个 Char 作为字段值

#### 详细描述



#### 定义：

`func java.NewJavaFieldCharValue(data: int) return (r0: *yserx.JavaFieldValue)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| data | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yserx.JavaFieldValue` |   |


 
### java.NewJavaFieldDoubleValue

创建一个 float64 作为字段值

#### 详细描述



#### 定义：

`func java.NewJavaFieldDoubleValue(data: float64) return (r0: *yserx.JavaFieldValue)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| data | `float64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yserx.JavaFieldValue` |   |


 
### java.NewJavaFieldFloatValue

创建一个 float32 作为字段值

#### 详细描述



#### 定义：

`func java.NewJavaFieldFloatValue(data: float32) return (r0: *yserx.JavaFieldValue)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| data | `float32` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yserx.JavaFieldValue` |   |


 
### java.NewJavaFieldIntValue

创建一个整数作为字段值

#### 详细描述



#### 定义：

`func java.NewJavaFieldIntValue(data: uint64) return (r0: *yserx.JavaFieldValue)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| data | `uint64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yserx.JavaFieldValue` |   |


 
### java.NewJavaFieldLongValue

创建一个 Long 作为字段值(uint64)

#### 详细描述



#### 定义：

`func java.NewJavaFieldLongValue(data: uint64) return (r0: *yserx.JavaFieldValue)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| data | `uint64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yserx.JavaFieldValue` |   |


 
### java.NewJavaFieldObjectValue

创建一个 TC_OBJECT 作为字段值

#### 详细描述



#### 定义：

`func java.NewJavaFieldObjectValue(obj: yserx.JavaSerializable) return (r0: *yserx.JavaFieldValue)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| obj | `yserx.JavaSerializable` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yserx.JavaFieldValue` |   |


 
### java.NewJavaFieldShortValue

创建一个 short 作为字段值

#### 详细描述



#### 定义：

`func java.NewJavaFieldShortValue(data: int) return (r0: *yserx.JavaFieldValue)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| data | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yserx.JavaFieldValue` |   |


 
### java.NewJavaFieldValue

根据类型，和 bytes 创建一个字段值

#### 详细描述



#### 定义：

`func java.NewJavaFieldValue(typeFlag: byte, raw: bytes) return (r0: *yserx.JavaFieldValue)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| typeFlag | `byte` |   |
| raw | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yserx.JavaFieldValue` |   |


 
### java.NewJavaLongString

创建一个 Long String(8byte length)

#### 详细描述



#### 定义：

`func java.NewJavaLongString(data: string) return (r0: *yserx.JavaString)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| data | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yserx.JavaString` |   |


 
### java.NewJavaNull

创建一个 TC_NULL

#### 详细描述



#### 定义：

`func java.NewJavaNull() return (r0: *yserx.JavaNull)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yserx.JavaNull` |   |


 
### java.NewJavaObject

创建一个 Java TC_OBJECT

#### 详细描述



#### 定义：

`func java.NewJavaObject(desc: *yserx.JavaClassDesc, classDataArr ...*yserx.JavaClassData) return (TC_OBJECT: *yserx.JavaObject)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| desc | `*yserx.JavaClassDesc` |   |
| classDataArr | `...*yserx.JavaClassData` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| TC_OBJECT | `*yserx.JavaObject` |   |


 
### java.NewJavaReference

根据 Handle 创建一个 TC_REFERENCE

#### 详细描述



#### 定义：

`func java.NewJavaReference(handle: uint64) return (r0: *yserx.JavaReference)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| handle | `uint64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yserx.JavaReference` |   |


 
### java.NewJavaString

创建一个 TC_STRING (4byte length)

#### 详细描述



#### 定义：

`func java.NewJavaString(data: string) return (r0: *yserx.JavaString)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| data | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yserx.JavaString` |   |


 
### java.ParseHexJavaObjectStream

把 HEX 流(aced0005...)转变为对象

#### 详细描述



#### 定义：

`func java.ParseHexJavaObjectStream(hexStream: string) return (objs: []yserx.JavaSerializable, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| hexStream | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| objs | `[]yserx.JavaSerializable` |   |
| r1 | `error` |   |


 
### java.ParseJavaObjectStream

把 bytes 转变为 Java 对象

#### 详细描述



#### 定义：

`func java.ParseJavaObjectStream(raw: bytes) return (obj: []yserx.JavaSerializable, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| obj | `[]yserx.JavaSerializable` |   |
| r1 | `error` |   |


 
### java.ToJson

把 Java 对象转变为 JSON

#### 详细描述



#### 定义：

`func java.ToJson(v1: any) return (r0: bytes, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 


