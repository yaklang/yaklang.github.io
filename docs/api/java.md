# java

|成员函数|函数描述/介绍|
|:------|:--------|
| [java.FromJson](#FromJson) ||
| [java.MarshalJavaObjects](#MarshalJavaObjects) ||
| [java.NewJavaArray](#NewJavaArray) ||
| [java.NewJavaBlockDataBytes](#NewJavaBlockDataBytes) ||
| [java.NewJavaClass](#NewJavaClass) ||
| [java.NewJavaClassData](#NewJavaClassData) ||
| [java.NewJavaClassDesc](#NewJavaClassDesc) ||
| [java.NewJavaClassDetails](#NewJavaClassDetails) ||
| [java.NewJavaClassField](#NewJavaClassField) ||
| [java.NewJavaClassFields](#NewJavaClassFields) ||
| [java.NewJavaEndBlockData](#NewJavaEndBlockData) ||
| [java.NewJavaEnum](#NewJavaEnum) ||
| [java.NewJavaFieldArrayValue](#NewJavaFieldArrayValue) ||
| [java.NewJavaFieldBoolValue](#NewJavaFieldBoolValue) ||
| [java.NewJavaFieldByteValue](#NewJavaFieldByteValue) ||
| [java.NewJavaFieldCharValue](#NewJavaFieldCharValue) ||
| [java.NewJavaFieldDoubleValue](#NewJavaFieldDoubleValue) ||
| [java.NewJavaFieldFloatValue](#NewJavaFieldFloatValue) ||
| [java.NewJavaFieldIntValue](#NewJavaFieldIntValue) ||
| [java.NewJavaFieldLongValue](#NewJavaFieldLongValue) ||
| [java.NewJavaFieldObjectValue](#NewJavaFieldObjectValue) ||
| [java.NewJavaFieldShortValue](#NewJavaFieldShortValue) ||
| [java.NewJavaFieldValue](#NewJavaFieldValue) ||
| [java.NewJavaLongString](#NewJavaLongString) ||
| [java.NewJavaNull](#NewJavaNull) ||
| [java.NewJavaObject](#NewJavaObject) ||
| [java.NewJavaReference](#NewJavaReference) ||
| [java.NewJavaString](#NewJavaString) ||
| [java.ParseHexJavaObjectStream](#ParseHexJavaObjectStream) ||
| [java.ParseJavaObjectStream](#ParseJavaObjectStream) ||
| [java.ToJson](#ToJson) ||


## 函数定义
### java.FromJson

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


### java.MarshalJavaObjects

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


### java.NewJavaArray

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


### java.NewJavaBlockDataBytes

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


### java.NewJavaClass

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


### java.NewJavaClassData

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


### java.NewJavaClassDesc

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


### java.NewJavaClassDetails

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


### java.NewJavaClassField

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


### java.NewJavaClassFields

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


### java.NewJavaEndBlockData

#### 详细描述


#### 定义

`NewJavaEndBlockData() *JavaEndBlockData`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaEndBlockData` |   |


### java.NewJavaEnum

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


### java.NewJavaFieldArrayValue

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


### java.NewJavaFieldBoolValue

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


### java.NewJavaFieldByteValue

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


### java.NewJavaFieldCharValue

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


### java.NewJavaFieldDoubleValue

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


### java.NewJavaFieldFloatValue

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


### java.NewJavaFieldIntValue

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


### java.NewJavaFieldLongValue

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


### java.NewJavaFieldObjectValue

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


### java.NewJavaFieldShortValue

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


### java.NewJavaFieldValue

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


### java.NewJavaLongString

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


### java.NewJavaNull

#### 详细描述


#### 定义

`NewJavaNull() *JavaNull`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JavaNull` |   |


### java.NewJavaObject

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


### java.NewJavaReference

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


### java.NewJavaString

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


### java.ParseHexJavaObjectStream

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


### java.ParseJavaObjectStream

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


### java.ToJson

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


