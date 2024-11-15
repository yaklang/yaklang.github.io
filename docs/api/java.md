# java

|函数名|函数描述/介绍|
|:------|:--------|
| [java.Decompile](#decompile) |Decompile 反编译一个 jar包或者 class  返回值是反编译后的 java 文件路径  |
| [java.FromJson](#fromjson) ||
| [java.MarshalJavaObjects](#marshaljavaobjects) ||
| [java.NewJavaArray](#newjavaarray) ||
| [java.NewJavaBlockDataBytes](#newjavablockdatabytes) ||
| [java.NewJavaClass](#newjavaclass) ||
| [java.NewJavaClassData](#newjavaclassdata) ||
| [java.NewJavaClassDesc](#newjavaclassdesc) ||
| [java.NewJavaClassDetails](#newjavaclassdetails) ||
| [java.NewJavaClassField](#newjavaclassfield) ||
| [java.NewJavaClassFields](#newjavaclassfields) ||
| [java.NewJavaEndBlockData](#newjavaendblockdata) ||
| [java.NewJavaEnum](#newjavaenum) ||
| [java.NewJavaFieldArrayValue](#newjavafieldarrayvalue) ||
| [java.NewJavaFieldBoolValue](#newjavafieldboolvalue) ||
| [java.NewJavaFieldByteValue](#newjavafieldbytevalue) ||
| [java.NewJavaFieldCharValue](#newjavafieldcharvalue) ||
| [java.NewJavaFieldDoubleValue](#newjavafielddoublevalue) ||
| [java.NewJavaFieldFloatValue](#newjavafieldfloatvalue) ||
| [java.NewJavaFieldIntValue](#newjavafieldintvalue) ||
| [java.NewJavaFieldLongValue](#newjavafieldlongvalue) ||
| [java.NewJavaFieldObjectValue](#newjavafieldobjectvalue) ||
| [java.NewJavaFieldShortValue](#newjavafieldshortvalue) ||
| [java.NewJavaFieldValue](#newjavafieldvalue) ||
| [java.NewJavaLongString](#newjavalongstring) ||
| [java.NewJavaNull](#newjavanull) ||
| [java.NewJavaObject](#newjavaobject) ||
| [java.NewJavaReference](#newjavareference) ||
| [java.NewJavaString](#newjavastring) ||
| [java.ParseHexJavaObjectStream](#parsehexjavaobjectstream) ||
| [java.ParseJavaObjectStream](#parsejavaobjectstream) ||
| [java.ToJson](#tojson) ||


## 函数定义
### Decompile

#### 详细描述
Decompile 反编译一个 jar包或者 class

返回值是反编译后的 java 文件路径

Example:
```
err = Decompile("test.jar", "test/"); die(err)
err = Decompile("test.war", "test/"); die(err)
Decompile("a.class", "a.java"); die(err)
```


#### 定义

`Decompile(from string, to string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| from | `string` |   |
| to | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### FromJson

#### 详细描述


#### 定义

`FromJson(raw []byte) ([]JavaSerializable, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]JavaSerializable` |   |
| r2 | `error` |   |


### MarshalJavaObjects

#### 详细描述


#### 定义

`MarshalJavaObjects(res ...JavaSerializable) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| res | `...JavaSerializable` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### NewJavaArray

#### 详细描述


#### 定义

`NewJavaArray(j *JavaClassDesc, values ...*JavaFieldValue) *JavaArray`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| j | `*JavaClassDesc` |   |
| values | `...*JavaFieldValue` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaArray` |   |


### NewJavaBlockDataBytes

#### 详细描述


#### 定义

`NewJavaBlockDataBytes(raw []byte) *JavaBlockData`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaBlockData` |   |


### NewJavaClass

#### 详细描述


#### 定义

`NewJavaClass(j *JavaClassDesc) *JavaClass`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| j | `*JavaClassDesc` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaClass` |   |


### NewJavaClassData

#### 详细描述


#### 定义

`NewJavaClassData(fields []JavaSerializable, blockData []JavaSerializable) *JavaClassData`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fields | `[]JavaSerializable` |   |
| blockData | `[]JavaSerializable` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaClassData` |   |


### NewJavaClassDesc

#### 详细描述


#### 定义

`NewJavaClassDesc(className string, serialVersionUID []byte, flag byte, fields *JavaClassFields, annotations []JavaSerializable, superClass *JavaClassDetails) *JavaClassDesc`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| className | `string` |   |
| serialVersionUID | `[]byte` |   |
| flag | `byte` |   |
| fields | `*JavaClassFields` |   |
| annotations | `[]JavaSerializable` |   |
| superClass | `*JavaClassDetails` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaClassDesc` |   |


### NewJavaClassDetails

#### 详细描述


#### 定义

`NewJavaClassDetails(className string, serialVersionUID []byte, Flag byte, Fields *JavaClassFields, Annotations []JavaSerializable, SuperClass *JavaClassDetails) *JavaClassDetails`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| className | `string` |   |
| serialVersionUID | `[]byte` |   |
| Flag | `byte` |   |
| Fields | `*JavaClassFields` |   |
| Annotations | `[]JavaSerializable` |   |
| SuperClass | `*JavaClassDetails` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaClassDetails` |   |


### NewJavaClassField

#### 详细描述


#### 定义

`NewJavaClassField(name string, jType byte, className JavaSerializable) *JavaClassField`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| jType | `byte` |   |
| className | `JavaSerializable` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaClassField` |   |


### NewJavaClassFields

#### 详细描述


#### 定义

`NewJavaClassFields(fields ...*JavaClassField) *JavaClassFields`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fields | `...*JavaClassField` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaClassFields` |   |


### NewJavaEndBlockData

#### 详细描述


#### 定义

`NewJavaEndBlockData() *JavaEndBlockData`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaEndBlockData` |   |


### NewJavaEnum

#### 详细描述


#### 定义

`NewJavaEnum(i *JavaClassDesc, constantName *JavaString) *JavaEnumDesc`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `*JavaClassDesc` |   |
| constantName | `*JavaString` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaEnumDesc` |   |


### NewJavaFieldArrayValue

#### 详细描述


#### 定义

`NewJavaFieldArrayValue(i JavaSerializable) *JavaFieldValue`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `JavaSerializable` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaFieldValue` |   |


### NewJavaFieldBoolValue

#### 详细描述


#### 定义

`NewJavaFieldBoolValue(b bool) *JavaFieldValue`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaFieldValue` |   |


### NewJavaFieldByteValue

#### 详细描述


#### 定义

`NewJavaFieldByteValue(b byte) *JavaFieldValue`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaFieldValue` |   |


### NewJavaFieldCharValue

#### 详细描述


#### 定义

`NewJavaFieldCharValue(i int) *JavaFieldValue`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaFieldValue` |   |


### NewJavaFieldDoubleValue

#### 详细描述


#### 定义

`NewJavaFieldDoubleValue(i float64) *JavaFieldValue`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaFieldValue` |   |


### NewJavaFieldFloatValue

#### 详细描述


#### 定义

`NewJavaFieldFloatValue(i float32) *JavaFieldValue`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `float32` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaFieldValue` |   |


### NewJavaFieldIntValue

#### 详细描述


#### 定义

`NewJavaFieldIntValue(i uint64) *JavaFieldValue`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `uint64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaFieldValue` |   |


### NewJavaFieldLongValue

#### 详细描述


#### 定义

`NewJavaFieldLongValue(i uint64) *JavaFieldValue`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `uint64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaFieldValue` |   |


### NewJavaFieldObjectValue

#### 详细描述


#### 定义

`NewJavaFieldObjectValue(i JavaSerializable) *JavaFieldValue`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `JavaSerializable` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaFieldValue` |   |


### NewJavaFieldShortValue

#### 详细描述


#### 定义

`NewJavaFieldShortValue(i int) *JavaFieldValue`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaFieldValue` |   |


### NewJavaFieldValue

#### 详细描述


#### 定义

`NewJavaFieldValue(t byte, raw []byte) *JavaFieldValue`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| t | `byte` |   |
| raw | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaFieldValue` |   |


### NewJavaLongString

#### 详细描述


#### 定义

`NewJavaLongString(raw string) *JavaString`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaString` |   |


### NewJavaNull

#### 详细描述


#### 定义

`NewJavaNull() *JavaNull`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaNull` |   |


### NewJavaObject

#### 详细描述


#### 定义

`NewJavaObject(class *JavaClassDesc, classData ...*JavaClassData) *JavaObject`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| class | `*JavaClassDesc` |   |
| classData | `...*JavaClassData` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaObject` |   |


### NewJavaReference

#### 详细描述


#### 定义

`NewJavaReference(handle uint64) *JavaReference`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| handle | `uint64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaReference` |   |


### NewJavaString

#### 详细描述


#### 定义

`NewJavaString(raw string) *JavaString`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaString` |   |


### ParseHexJavaObjectStream

#### 详细描述


#### 定义

`ParseHexJavaObjectStream(raw string) ([]JavaSerializable, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]JavaSerializable` |   |
| r2 | `error` |   |


### ParseJavaObjectStream

#### 详细描述


#### 定义

`ParseJavaObjectStream(raw []byte) ([]JavaSerializable, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]JavaSerializable` |   |
| r2 | `error` |   |


### ToJson

#### 详细描述


#### 定义

`ToJson(i any) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


