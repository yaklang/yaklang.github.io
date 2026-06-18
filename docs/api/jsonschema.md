# jsonschema

|函数名|函数描述/介绍|
|:------|:--------|
| [jsonschema.ActionObject](#actionobject) ||
| [jsonschema.NewObjectArraySchema](#newobjectarrayschema) ||
| [jsonschema.NewObjectSchema](#newobjectschema) ||
| [jsonschema.Object](#object) ||
| [jsonschema.ObjectArray](#objectarray) ||
| [jsonschema.action](#action) ||
| [jsonschema.const](#const) |WithParam_Enum specifies a list of allowed values for a string property. The property value must be one of the specified enum values. |
| [jsonschema.description](#description) |WithParam_Description adds a description to a property in the JSON Schema. The description should explain the purpose and expected values of the prope...|
| [jsonschema.enum](#enum) |WithParam_Enum specifies a list of allowed values for a string property. The property value must be one of the specified enum values. |
| [jsonschema.example](#example) |WithParam_Example adds an example value for a property in the JSON Schema. |
| [jsonschema.max](#max) |WithParam_Max sets the maximum value for a number property. The number value must not exceed this maximum. |
| [jsonschema.maxLength](#maxlength) |WithParam_MaxLength sets the maximum length for a string property. The string value must not exceed this length. |
| [jsonschema.min](#min) |WithParam_Min sets the minimum value for a number property. The number value must not be less than this minimum. |
| [jsonschema.minLength](#minlength) |WithParam_MinLength sets the minimum length for a string property. The string value must be at least this length. |
| [jsonschema.paramBool](#parambool) |WithBoolParam adds a boolean property to the tool schema. It accepts property options to configure the boolean property&amp;#39;s behavior and constraints...|
| [jsonschema.paramInt](#paramint) |WithIntegerParam adds a integer property to the tool schema. It accepts property options to configure the integer property&amp;#39;s behavior and constrai...|
| [jsonschema.paramKeyValuePairsArray](#paramkeyvaluepairsarray) ||
| [jsonschema.paramNumber](#paramnumber) |WithNumberParam adds a number property to the tool schema. It accepts property options to configure the number property&amp;#39;s behavior and constraints...|
| [jsonschema.paramNumberArray](#paramnumberarray) |WithNumberArrayParam adds a number array property to the tool schema. It accepts property options to configure the number-array property&amp;#39;s behavio...|
| [jsonschema.paramObject](#paramobject) ||
| [jsonschema.paramObjectArray](#paramobjectarray) ||
| [jsonschema.paramObjectArrayEx](#paramobjectarrayex) ||
| [jsonschema.paramRaw](#paramraw) |WithRawParam adds a custom object property to the tool schema. It accepts property options to configure the object property&amp;#39;s behavior and constra...|
| [jsonschema.paramString](#paramstring) |WithStringParam adds a string property to the tool schema. It accepts property options to configure the string property&amp;#39;s behavior and constraints...|
| [jsonschema.paramStringArray](#paramstringarray) |WithStringArrayParam adds a string array property to the tool schema. It accepts property options to configure the string-array property&amp;#39;s behavio...|
| [jsonschema.raw](#raw) |WithParam_Raw adds a raw JSON schema object to the tool&amp;#39;s input schema. |
| [jsonschema.required](#required) |WithParam_Required marks a property as required in the tool&amp;#39;s input schema. WithParam_Required properties must be provided when using the tool. |
| [jsonschema.title](#title) |WithParam_Title adds a display-friendly title to a property in the JSON Schema. This title can be used by UI components to show a more readable proper...|


## 函数定义
### ActionObject

#### 详细描述


#### 定义

`ActionObject(opts ...any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### NewObjectArraySchema

#### 详细描述


#### 定义

`NewObjectArraySchema(opts ...any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### NewObjectSchema

#### 详细描述


#### 定义

`NewObjectSchema(opts ...any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### Object

#### 详细描述


#### 定义

`Object(opts ...any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### ObjectArray

#### 详细描述


#### 定义

`ObjectArray(opts ...any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### action

#### 详细描述


#### 定义

`action(action string) ToolOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| action | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ToolOption` |   |


### const

#### 详细描述
WithParam_Enum specifies a list of allowed values for a string property.
The property value must be one of the specified enum values.


#### 定义

`const(values ...any) PropertyOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| values | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PropertyOption` |   |


### description

#### 详细描述
WithParam_Description adds a description to a property in the JSON Schema.
The description should explain the purpose and expected values of the property.


#### 定义

`description(desc string) PropertyOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| desc | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PropertyOption` |   |


### enum

#### 详细描述
WithParam_Enum specifies a list of allowed values for a string property.
The property value must be one of the specified enum values.


#### 定义

`enum(values ...any) PropertyOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| values | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PropertyOption` |   |


### example

#### 详细描述
WithParam_Example adds an example value for a property in the JSON Schema.


#### 定义

`example(i any) PropertyOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PropertyOption` |   |


### max

#### 详细描述
WithParam_Max sets the maximum value for a number property.
The number value must not exceed this maximum.


#### 定义

`max(max float64) PropertyOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| max | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PropertyOption` |   |


### maxLength

#### 详细描述
WithParam_MaxLength sets the maximum length for a string property.
The string value must not exceed this length.


#### 定义

`maxLength(max int) PropertyOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| max | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PropertyOption` |   |


### min

#### 详细描述
WithParam_Min sets the minimum value for a number property.
The number value must not be less than this minimum.


#### 定义

`min(min float64) PropertyOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| min | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PropertyOption` |   |


### minLength

#### 详细描述
WithParam_MinLength sets the minimum length for a string property.
The string value must be at least this length.


#### 定义

`minLength(min int) PropertyOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| min | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PropertyOption` |   |


### paramBool

#### 详细描述
WithBoolParam adds a boolean property to the tool schema.
It accepts property options to configure the boolean property&#39;s behavior and constraints.


#### 定义

`paramBool(name string, opts ...PropertyOption) ToolOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| opts | `...PropertyOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ToolOption` |   |


### paramInt

#### 详细描述
WithIntegerParam adds a integer property to the tool schema.
It accepts property options to configure the integer property&#39;s behavior and constraints.


#### 定义

`paramInt(name string, opts ...PropertyOption) ToolOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| opts | `...PropertyOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ToolOption` |   |


### paramKeyValuePairsArray

#### 详细描述


#### 定义

`paramKeyValuePairsArray(name string, opts ...PropertyOption) ToolOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| opts | `...PropertyOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ToolOption` |   |


### paramNumber

#### 详细描述
WithNumberParam adds a number property to the tool schema.
It accepts property options to configure the number property&#39;s behavior and constraints.


#### 定义

`paramNumber(name string, opts ...PropertyOption) ToolOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| opts | `...PropertyOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ToolOption` |   |


### paramNumberArray

#### 详细描述
WithNumberArrayParam adds a number array property to the tool schema.
It accepts property options to configure the number-array property&#39;s behavior and constraints.


#### 定义

`paramNumberArray(name string, opts ...PropertyOption) ToolOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| opts | `...PropertyOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ToolOption` |   |


### paramObject

#### 详细描述


#### 定义

`paramObject(objectName string, opts ...any) ToolOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| objectName | `string` |   |
| opts | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ToolOption` |   |


### paramObjectArray

#### 详细描述


#### 定义

`paramObjectArray(name string, opts ...any) ToolOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| opts | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ToolOption` |   |


### paramObjectArrayEx

#### 详细描述


#### 定义

`paramObjectArrayEx(name string, arrayPropsRaw []any, opts ...any) ToolOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| arrayPropsRaw | `[]any` |   |
| opts | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ToolOption` |   |


### paramRaw

#### 详细描述
WithRawParam adds a custom object property to the tool schema.
It accepts property options to configure the object property&#39;s behavior and constraints.


#### 定义

`paramRaw(name string, object map[string]any, opts ...PropertyOption) ToolOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| object | `map[string]any` |   |
| opts | `...PropertyOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ToolOption` |   |


### paramString

#### 详细描述
WithStringParam adds a string property to the tool schema.
It accepts property options to configure the string property&#39;s behavior and constraints.


#### 定义

`paramString(name string, opts ...PropertyOption) ToolOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| opts | `...PropertyOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ToolOption` |   |


### paramStringArray

#### 详细描述
WithStringArrayParam adds a string array property to the tool schema.
It accepts property options to configure the string-array property&#39;s behavior and constraints.


#### 定义

`paramStringArray(name string, opts ...PropertyOption) ToolOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| opts | `...PropertyOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ToolOption` |   |


### raw

#### 详细描述
WithParam_Raw adds a raw JSON schema object to the tool&#39;s input schema.


#### 定义

`raw(name string, v any) PropertyOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| v | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PropertyOption` |   |


### required

#### 详细描述
WithParam_Required marks a property as required in the tool&#39;s input schema.
WithParam_Required properties must be provided when using the tool.


#### 定义

`required(required ...bool) PropertyOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| required | `...bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PropertyOption` |   |


### title

#### 详细描述
WithParam_Title adds a display-friendly title to a property in the JSON Schema.
This title can be used by UI components to show a more readable property name.


#### 定义

`title(title string) PropertyOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| title | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PropertyOption` |   |


