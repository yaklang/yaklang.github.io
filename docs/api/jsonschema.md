# jsonschema

|函数名|函数描述/介绍|
|:------|:--------|
| [jsonschema.ActionObject](#actionobject) |NewObjectSchemaWithAction 生成带默认 @action 字段的对象 JSON Schema（导出名为 jsonschema.ActionObject） @action 字段用于帮助 AI 识别输出的 JSON 对象类型，默认 action 名为 &#34;object&#34; 参数: - ...|
| [jsonschema.NewObjectArraySchema](#newobjectarrayschema) |newObjectArraySchema 生成 array 类型（元素为 object）的 JSON Schema 字符串 导出名为 jsonschema.ObjectArray / jsonschema.NewObjectArraySchema 参数: - opts: schema 构建可选项，描...|
| [jsonschema.NewObjectSchema](#newobjectschema) |NewObjectSchema 生成 object 类型的 JSON Schema 字符串（导出名为 jsonschema.Object / jsonschema.NewObjectSchema） 参数: - opts: schema 构建可选项，如 jsonschema.paramString /...|
| [jsonschema.Object](#object) |NewObjectSchema 生成 object 类型的 JSON Schema 字符串（导出名为 jsonschema.Object / jsonschema.NewObjectSchema） 参数: - opts: schema 构建可选项，如 jsonschema.paramString /...|
| [jsonschema.ObjectArray](#objectarray) |newObjectArraySchema 生成 array 类型（元素为 object）的 JSON Schema 字符串 导出名为 jsonschema.ObjectArray / jsonschema.NewObjectArraySchema 参数: - opts: schema 构建可选项，描...|
| [jsonschema.action](#action) ||
| [jsonschema.const](#const) |WithParam_Const 指定属性的常量取值（导出名为 jsonschema.const） 参数: - values: 常量值 返回值: - 属性可选项|
| [jsonschema.description](#description) |WithParam_Description 为属性添加描述信息（导出名为 jsonschema.description） 参数: - desc: 属性描述文本 返回值: - 属性可选项|
| [jsonschema.enum](#enum) |WithParam_Enum 指定属性的可选枚举值列表（导出名为 jsonschema.enum） 参数: - values: 允许的取值列表 返回值: - 属性可选项|
| [jsonschema.example](#example) |WithParam_Example 为属性添加示例值（导出名为 jsonschema.example） 参数: - i: 示例值 返回值: - 属性可选项|
| [jsonschema.max](#max) |WithParam_Max 设置数值属性的最大值（导出名为 jsonschema.max） 参数: - max: 最大值 返回值: - 属性可选项|
| [jsonschema.maxLength](#maxlength) |WithParam_MaxLength 设置字符串属性的最大长度（导出名为 jsonschema.maxLength） 参数: - max: 最大长度 返回值: - 属性可选项|
| [jsonschema.min](#min) |WithParam_Min 设置数值属性的最小值（导出名为 jsonschema.min） 参数: - min: 最小值 返回值: - 属性可选项|
| [jsonschema.minLength](#minlength) |WithParam_MinLength 设置字符串属性的最小长度（导出名为 jsonschema.minLength） 参数: - min: 最小长度 返回值: - 属性可选项|
| [jsonschema.paramBool](#parambool) |WithBoolParam 向 schema 添加一个布尔类型属性（导出名为 jsonschema.paramBool） 参数: - name: 属性名 - opts: 属性可选项，如 jsonschema.description / jsonschema.required 返回值: - schem...|
| [jsonschema.paramInt](#paramint) |WithIntegerParam 向 schema 添加一个整数类型属性（导出名为 jsonschema.paramInt） 参数: - name: 属性名 - opts: 属性可选项，如 jsonschema.description / jsonschema.required 返回值: - sch...|
| [jsonschema.paramKeyValuePairsArray](#paramkeyvaluepairsarray) |WithKVPairsParam 向 schema 添加一个键值对数组类型属性（导出名为 jsonschema.paramKeyValuePairsArray） 适合表达 HTTP headers、查询参数等 key/value 列表结构 参数: - name: 属性名 - opts: 属性可选项 ...|
| [jsonschema.paramNumber](#paramnumber) |WithNumberParam 向 schema 添加一个数值类型属性（导出名为 jsonschema.paramNumber） 参数: - name: 属性名 - opts: 属性可选项，如 jsonschema.min / jsonschema.max 返回值: - schema 构建可选项|
| [jsonschema.paramNumberArray](#paramnumberarray) |WithNumberArrayParam 向 schema 添加一个数值数组类型属性（导出名为 jsonschema.paramNumberArray） 参数: - name: 属性名 - opts: 属性可选项 返回值: - schema 构建可选项|
| [jsonschema.paramObject](#paramobject) ||
| [jsonschema.paramObjectArray](#paramobjectarray) ||
| [jsonschema.paramObjectArrayEx](#paramobjectarrayex) ||
| [jsonschema.paramRaw](#paramraw) |WithRawParam 以原始 schema 对象的方式向 schema 添加一个属性（导出名为 jsonschema.paramRaw） 参数: - name: 属性名 - object: 该属性的原始 JSON Schema 对象 - opts: 属性可选项 返回值: - schema 构建可...|
| [jsonschema.paramString](#paramstring) |WithStringParam 向 schema 添加一个字符串类型属性（导出名为 jsonschema.paramString） 参数: - name: 属性名 - opts: 属性可选项，如 jsonschema.description / jsonschema.enum 返回值: - sche...|
| [jsonschema.paramStringArray](#paramstringarray) |WithStringArrayParam 向 schema 添加一个字符串数组类型属性（导出名为 jsonschema.paramStringArray） 参数: - name: 属性名 - opts: 属性可选项 返回值: - schema 构建可选项|
| [jsonschema.raw](#raw) |WithParam_Raw 向属性写入原始的 JSON Schema 键值（导出名为 jsonschema.raw） 参数: - name: 键名 - v: 键值 返回值: - 属性可选项|
| [jsonschema.required](#required) |WithParam_Required 将属性标记为必填（导出名为 jsonschema.required） 参数: - required: 是否必填，缺省为 true 返回值: - 属性可选项|
| [jsonschema.title](#title) |WithParam_Title 为属性添加便于展示的标题（导出名为 jsonschema.title） 参数: - title: 属性标题 返回值: - 属性可选项|


## 函数定义
### ActionObject

#### 详细描述
NewObjectSchemaWithAction 生成带默认 @action 字段的对象 JSON Schema（导出名为 jsonschema.ActionObject）

@action 字段用于帮助 AI 识别输出的 JSON 对象类型，默认 action 名为 &#34;object&#34;

参数:

  - opts: schema 构建可选项，如 jsonschema.paramString 等



返回值:

  - JSON Schema 字符串




Example:

``````````````yak
schema = jsonschema.ActionObject(jsonschema.paramString("name"))
assert str.Contains(schema, "@action"), "ActionObject should contain @action field"
``````````````


#### 定义

`ActionObject(opts ...any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...any` | schema 构建可选项，如 jsonschema.paramString 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | JSON Schema 字符串 |


### NewObjectArraySchema

#### 详细描述
newObjectArraySchema 生成 array 类型（元素为 object）的 JSON Schema 字符串

导出名为 jsonschema.ObjectArray / jsonschema.NewObjectArraySchema

参数:

  - opts: schema 构建可选项，描述数组中每个对象元素的属性



返回值:

  - JSON Schema 字符串（draft-07）




Example:

``````````````yak
schema = jsonschema.ObjectArray(

	jsonschema.paramString("name"),
	jsonschema.paramInt("age"),

)
assert str.Contains(schema, "\"type\": \"array\""), "should generate an array schema"
``````````````


#### 定义

`NewObjectArraySchema(opts ...any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...any` | schema 构建可选项，描述数组中每个对象元素的属性 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | JSON Schema 字符串（draft-07） |


### NewObjectSchema

#### 详细描述
NewObjectSchema 生成 object 类型的 JSON Schema 字符串（导出名为 jsonschema.Object / jsonschema.NewObjectSchema）

参数:

  - opts: schema 构建可选项，如 jsonschema.paramString / jsonschema.paramInt 等



返回值:

  - JSON Schema 字符串（draft-07）




Example:

``````````````yak
schema = jsonschema.Object(

	jsonschema.paramString("name", jsonschema.description("user name")),
	jsonschema.paramInt("age", jsonschema.required(true)),

)
assert str.Contains(schema, "\"type\": \"object\""), "should generate an object schema"
assert str.Contains(schema, "name"), "schema should contain name property"
``````````````


#### 定义

`NewObjectSchema(opts ...any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...any` | schema 构建可选项，如 jsonschema.paramString / jsonschema.paramInt 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | JSON Schema 字符串（draft-07） |


### Object

#### 详细描述
NewObjectSchema 生成 object 类型的 JSON Schema 字符串（导出名为 jsonschema.Object / jsonschema.NewObjectSchema）

参数:

  - opts: schema 构建可选项，如 jsonschema.paramString / jsonschema.paramInt 等



返回值:

  - JSON Schema 字符串（draft-07）




Example:

``````````````yak
schema = jsonschema.Object(

	jsonschema.paramString("name", jsonschema.description("user name")),
	jsonschema.paramInt("age", jsonschema.required(true)),

)
assert str.Contains(schema, "\"type\": \"object\""), "should generate an object schema"
assert str.Contains(schema, "name"), "schema should contain name property"
``````````````


#### 定义

`Object(opts ...any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...any` | schema 构建可选项，如 jsonschema.paramString / jsonschema.paramInt 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | JSON Schema 字符串（draft-07） |


### ObjectArray

#### 详细描述
newObjectArraySchema 生成 array 类型（元素为 object）的 JSON Schema 字符串

导出名为 jsonschema.ObjectArray / jsonschema.NewObjectArraySchema

参数:

  - opts: schema 构建可选项，描述数组中每个对象元素的属性



返回值:

  - JSON Schema 字符串（draft-07）




Example:

``````````````yak
schema = jsonschema.ObjectArray(

	jsonschema.paramString("name"),
	jsonschema.paramInt("age"),

)
assert str.Contains(schema, "\"type\": \"array\""), "should generate an array schema"
``````````````


#### 定义

`ObjectArray(opts ...any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...any` | schema 构建可选项，描述数组中每个对象元素的属性 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | JSON Schema 字符串（draft-07） |


### action

#### 详细描述
暂无描述

#### 定义

`action(action string) ToolOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| action | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ToolOption` |  |


### const

#### 详细描述
WithParam_Const 指定属性的常量取值（导出名为 jsonschema.const）

参数:

  - values: 常量值



返回值:

  - 属性可选项




Example:

``````````````yak
schema = jsonschema.Object(jsonschema.paramString("type", jsonschema.const("user")))
assert str.Contains(schema, "const"), "schema should contain const value"
``````````````


#### 定义

`const(values ...any) PropertyOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| values | `...any` | 常量值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PropertyOption` | 属性可选项 |


### description

#### 详细描述
WithParam_Description 为属性添加描述信息（导出名为 jsonschema.description）

参数:

  - desc: 属性描述文本



返回值:

  - 属性可选项




Example:

``````````````yak
schema = jsonschema.Object(jsonschema.paramString("name", jsonschema.description("the user name")))
assert str.Contains(schema, "the user name"), "schema should contain the description"
``````````````


#### 定义

`description(desc string) PropertyOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| desc | `string` | 属性描述文本 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PropertyOption` | 属性可选项 |


### enum

#### 详细描述
WithParam_Enum 指定属性的可选枚举值列表（导出名为 jsonschema.enum）

参数:

  - values: 允许的取值列表



返回值:

  - 属性可选项




Example:

``````````````yak
schema = jsonschema.Object(jsonschema.paramString("level", jsonschema.enum("low", "high")))
assert str.Contains(schema, "enum"), "schema should contain enum values"
``````````````


#### 定义

`enum(values ...any) PropertyOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| values | `...any` | 允许的取值列表 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PropertyOption` | 属性可选项 |


### example

#### 详细描述
WithParam_Example 为属性添加示例值（导出名为 jsonschema.example）

参数:

  - i: 示例值



返回值:

  - 属性可选项




Example:

``````````````yak
schema = jsonschema.Object(jsonschema.paramString("name", jsonschema.example("yak")))
assert str.Contains(schema, "example"), "schema should contain the example"
``````````````


#### 定义

`example(i any) PropertyOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 示例值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PropertyOption` | 属性可选项 |


### max

#### 详细描述
WithParam_Max 设置数值属性的最大值（导出名为 jsonschema.max）

参数:

  - max: 最大值



返回值:

  - 属性可选项




Example:

``````````````yak
schema = jsonschema.Object(jsonschema.paramNumber("age", jsonschema.max(120)))
assert str.Contains(schema, "maximum"), "schema should contain maximum"
``````````````


#### 定义

`max(max float64) PropertyOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| max | `float64` | 最大值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PropertyOption` | 属性可选项 |


### maxLength

#### 详细描述
WithParam_MaxLength 设置字符串属性的最大长度（导出名为 jsonschema.maxLength）

参数:

  - max: 最大长度



返回值:

  - 属性可选项




Example:

``````````````yak
schema = jsonschema.Object(jsonschema.paramString("name", jsonschema.maxLength(20)))
assert str.Contains(schema, "maxLength"), "schema should contain maxLength"
``````````````


#### 定义

`maxLength(max int) PropertyOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| max | `int` | 最大长度 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PropertyOption` | 属性可选项 |


### min

#### 详细描述
WithParam_Min 设置数值属性的最小值（导出名为 jsonschema.min）

参数:

  - min: 最小值



返回值:

  - 属性可选项




Example:

``````````````yak
schema = jsonschema.Object(jsonschema.paramNumber("age", jsonschema.min(0)))
assert str.Contains(schema, "minimum"), "schema should contain minimum"
``````````````


#### 定义

`min(min float64) PropertyOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| min | `float64` | 最小值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PropertyOption` | 属性可选项 |


### minLength

#### 详细描述
WithParam_MinLength 设置字符串属性的最小长度（导出名为 jsonschema.minLength）

参数:

  - min: 最小长度



返回值:

  - 属性可选项




Example:

``````````````yak
schema = jsonschema.Object(jsonschema.paramString("name", jsonschema.minLength(2)))
assert str.Contains(schema, "minLength"), "schema should contain minLength"
``````````````


#### 定义

`minLength(min int) PropertyOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| min | `int` | 最小长度 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PropertyOption` | 属性可选项 |


### paramBool

#### 详细描述
WithBoolParam 向 schema 添加一个布尔类型属性（导出名为 jsonschema.paramBool）

参数:

  - name: 属性名

  - opts: 属性可选项，如 jsonschema.description / jsonschema.required



返回值:

  - schema 构建可选项




Example:

``````````````yak
schema = jsonschema.Object(jsonschema.paramBool("enabled"))
assert str.Contains(schema, "boolean"), "schema should contain a boolean property"
``````````````


#### 定义

`paramBool(name string, opts ...PropertyOption) ToolOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 属性名 |
| opts | `...PropertyOption` | 属性可选项，如 jsonschema.description / jsonschema.required |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ToolOption` | schema 构建可选项 |


### paramInt

#### 详细描述
WithIntegerParam 向 schema 添加一个整数类型属性（导出名为 jsonschema.paramInt）

参数:

  - name: 属性名

  - opts: 属性可选项，如 jsonschema.description / jsonschema.required



返回值:

  - schema 构建可选项




Example:

``````````````yak
schema = jsonschema.Object(jsonschema.paramInt("age"))
assert str.Contains(schema, "integer"), "schema should contain an integer property"
``````````````


#### 定义

`paramInt(name string, opts ...PropertyOption) ToolOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 属性名 |
| opts | `...PropertyOption` | 属性可选项，如 jsonschema.description / jsonschema.required |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ToolOption` | schema 构建可选项 |


### paramKeyValuePairsArray

#### 详细描述
WithKVPairsParam 向 schema 添加一个键值对数组类型属性（导出名为 jsonschema.paramKeyValuePairsArray）

适合表达 HTTP headers、查询参数等 key/value 列表结构

参数:

  - name: 属性名

  - opts: 属性可选项



返回值:

  - schema 构建可选项




Example:

``````````````yak
schema = jsonschema.Object(jsonschema.paramKeyValuePairsArray("headers"))
assert str.Contains(schema, "array"), "schema should contain a kv-pairs array property"
``````````````


#### 定义

`paramKeyValuePairsArray(name string, opts ...PropertyOption) ToolOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 属性名 |
| opts | `...PropertyOption` | 属性可选项 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ToolOption` | schema 构建可选项 |


### paramNumber

#### 详细描述
WithNumberParam 向 schema 添加一个数值类型属性（导出名为 jsonschema.paramNumber）

参数:

  - name: 属性名

  - opts: 属性可选项，如 jsonschema.min / jsonschema.max



返回值:

  - schema 构建可选项




Example:

``````````````yak
schema = jsonschema.Object(jsonschema.paramNumber("score"))
assert str.Contains(schema, "number"), "schema should contain a number property"
``````````````


#### 定义

`paramNumber(name string, opts ...PropertyOption) ToolOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 属性名 |
| opts | `...PropertyOption` | 属性可选项，如 jsonschema.min / jsonschema.max |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ToolOption` | schema 构建可选项 |


### paramNumberArray

#### 详细描述
WithNumberArrayParam 向 schema 添加一个数值数组类型属性（导出名为 jsonschema.paramNumberArray）

参数:

  - name: 属性名

  - opts: 属性可选项



返回值:

  - schema 构建可选项




Example:

``````````````yak
schema = jsonschema.Object(jsonschema.paramNumberArray("scores"))
assert str.Contains(schema, "array"), "schema should contain a number array property"
``````````````


#### 定义

`paramNumberArray(name string, opts ...PropertyOption) ToolOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 属性名 |
| opts | `...PropertyOption` | 属性可选项 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ToolOption` | schema 构建可选项 |


### paramObject

#### 详细描述
暂无描述

#### 定义

`paramObject(objectName string, opts ...any) ToolOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| objectName | `string` |  |
| opts | `...any` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ToolOption` |  |


### paramObjectArray

#### 详细描述
暂无描述

#### 定义

`paramObjectArray(name string, opts ...any) ToolOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |  |
| opts | `...any` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ToolOption` |  |


### paramObjectArrayEx

#### 详细描述
暂无描述

#### 定义

`paramObjectArrayEx(name string, arrayPropsRaw []any, opts ...any) ToolOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |  |
| arrayPropsRaw | `[]any` |  |
| opts | `...any` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ToolOption` |  |


### paramRaw

#### 详细描述
WithRawParam 以原始 schema 对象的方式向 schema 添加一个属性（导出名为 jsonschema.paramRaw）

参数:

  - name: 属性名

  - object: 该属性的原始 JSON Schema 对象

  - opts: 属性可选项



返回值:

  - schema 构建可选项




Example:

``````````````yak
schema = jsonschema.Object(jsonschema.paramRaw("ip", {"type": "string", "format": "ipv4"}))
assert str.Contains(schema, "ipv4"), "schema should contain the raw object property"
``````````````


#### 定义

`paramRaw(name string, object map[string]any, opts ...PropertyOption) ToolOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 属性名 |
| object | `map[string]any` | 该属性的原始 JSON Schema 对象 |
| opts | `...PropertyOption` | 属性可选项 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ToolOption` | schema 构建可选项 |


### paramString

#### 详细描述
WithStringParam 向 schema 添加一个字符串类型属性（导出名为 jsonschema.paramString）

参数:

  - name: 属性名

  - opts: 属性可选项，如 jsonschema.description / jsonschema.enum



返回值:

  - schema 构建可选项




Example:

``````````````yak
schema = jsonschema.Object(jsonschema.paramString("name"))
assert str.Contains(schema, "string"), "schema should contain a string property"
``````````````


#### 定义

`paramString(name string, opts ...PropertyOption) ToolOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 属性名 |
| opts | `...PropertyOption` | 属性可选项，如 jsonschema.description / jsonschema.enum |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ToolOption` | schema 构建可选项 |


### paramStringArray

#### 详细描述
WithStringArrayParam 向 schema 添加一个字符串数组类型属性（导出名为 jsonschema.paramStringArray）

参数:

  - name: 属性名

  - opts: 属性可选项



返回值:

  - schema 构建可选项




Example:

``````````````yak
schema = jsonschema.Object(jsonschema.paramStringArray("tags"))
assert str.Contains(schema, "array"), "schema should contain a string array property"
``````````````


#### 定义

`paramStringArray(name string, opts ...PropertyOption) ToolOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 属性名 |
| opts | `...PropertyOption` | 属性可选项 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ToolOption` | schema 构建可选项 |


### raw

#### 详细描述
WithParam_Raw 向属性写入原始的 JSON Schema 键值（导出名为 jsonschema.raw）

参数:

  - name: 键名

  - v: 键值



返回值:

  - 属性可选项




Example:

``````````````yak
schema = jsonschema.Object(jsonschema.paramString("status", jsonschema.raw("format", "email")))
assert str.Contains(schema, "format"), "schema should contain the raw key"
``````````````


#### 定义

`raw(name string, v any) PropertyOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 键名 |
| v | `any` | 键值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PropertyOption` | 属性可选项 |


### required

#### 详细描述
WithParam_Required 将属性标记为必填（导出名为 jsonschema.required）

参数:

  - required: 是否必填，缺省为 true



返回值:

  - 属性可选项




Example:

``````````````yak
schema = jsonschema.Object(jsonschema.paramString("name", jsonschema.required(true)))
assert str.Contains(schema, "required"), "schema should mark name as required"
``````````````


#### 定义

`required(required ...bool) PropertyOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| required | `...bool` | 是否必填，缺省为 true |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PropertyOption` | 属性可选项 |


### title

#### 详细描述
WithParam_Title 为属性添加便于展示的标题（导出名为 jsonschema.title）

参数:

  - title: 属性标题



返回值:

  - 属性可选项




Example:

``````````````yak
schema = jsonschema.Object(jsonschema.paramString("name", jsonschema.title("User Name")))
assert str.Contains(schema, "User Name"), "schema should contain the title"
``````````````


#### 定义

`title(title string) PropertyOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| title | `string` | 属性标题 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PropertyOption` | 属性可选项 |


