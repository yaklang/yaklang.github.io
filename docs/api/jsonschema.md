# jsonschema {#library-jsonschema}

`jsonschema` 库用于以声明式方式构建 JSON Schema 字符串，定义对象、字段类型、约束与枚举，主要服务于 AI 工具/函数调用的参数与输出结构定义。

典型使用场景：

- 构建对象：`jsonschema.Object` / `jsonschema.NewObjectSchema` / `jsonschema.ObjectArray` 定义对象/数组 Schema，`jsonschema.ActionObject` 定义带 action 的对象。
- 声明字段：`jsonschema.paramString` / `jsonschema.paramInt` / `jsonschema.paramBool` / `jsonschema.paramNumber` / `jsonschema.paramObject` / `jsonschema.paramStringArray` 等声明各类字段。
- 约束：`jsonschema.description` / `jsonschema.required` / `jsonschema.enum` / `jsonschema.min` / `jsonschema.max` / `jsonschema.minLength` / `jsonschema.example` 等修饰字段。

与相邻库的关系：`jsonschema` 为 `ai`（FunctionCall）、`aiagent`/`liteforge`（工具与结构化输出）提供参数/输出 Schema，是 AI 工具化的基础。

> 共 28 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [jsonschema.action](#action) | `action string` | `ToolOption` | WithAction 向 schema 添加一个常量 @action 字段（导出名为 jsonschema.action） |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [jsonschema.ActionObject](#actionobject) | `opts ...any` | `string` | NewObjectSchemaWithAction 生成带默认 @action 字段的对象 JSON Schema（导出名为 jsonschema.ActionObject） |
| [jsonschema.NewObjectArraySchema](#newobjectarrayschema) | `opts ...any` | `string` | 生成 array 类型（元素为 object）的 JSON Schema 字符串 |
| [jsonschema.NewObjectSchema](#newobjectschema) | `opts ...any` | `string` | 生成 object 类型的 JSON Schema 字符串（导出名为 jsonschema.Object / jsonschema.NewObjectSchema） |
| [jsonschema.Object](#object) | `opts ...any` | `string` | NewObjectSchema 生成 object 类型的 JSON Schema 字符串（导出名为 jsonschema.Object / jsonschema.NewObjectSchema） |
| [jsonschema.ObjectArray](#objectarray) | `opts ...any` | `string` | newObjectArraySchema 生成 array 类型（元素为 object）的 JSON Schema 字符串 |
| [jsonschema.paramBool](#parambool) | `name string, opts ...PropertyOption` | `ToolOption` | WithBoolParam 向 schema 添加一个布尔类型属性（导出名为 jsonschema.paramBool） |
| [jsonschema.paramInt](#paramint) | `name string, opts ...PropertyOption` | `ToolOption` | WithIntegerParam 向 schema 添加一个整数类型属性（导出名为 jsonschema.paramInt） |
| [jsonschema.paramKeyValuePairsArray](#paramkeyvaluepairsarray) | `name string, opts ...PropertyOption` | `ToolOption` | WithKVPairsParam 向 schema 添加一个键值对数组类型属性（导出名为 jsonschema.paramKeyValuePairsArray） |
| [jsonschema.paramNumber](#paramnumber) | `name string, opts ...PropertyOption` | `ToolOption` | WithNumberParam 向 schema 添加一个数值类型属性（导出名为 jsonschema.paramNumber） |
| [jsonschema.paramNumberArray](#paramnumberarray) | `name string, opts ...PropertyOption` | `ToolOption` | WithNumberArrayParam 向 schema 添加一个数值数组类型属性（导出名为 jsonschema.paramNumberArray） |
| [jsonschema.paramObject](#paramobject) | `objectName string, opts ...any` | `ToolOption` | _withParamObject 向 schema 添加一个对象类型属性（导出名为 jsonschema.paramObject） |
| [jsonschema.paramObjectArray](#paramobjectarray) | `name string, opts ...any` | `ToolOption` | _withObjectArray 向 schema 添加一个对象数组类型属性（导出名为 jsonschema.paramObjectArray） |
| [jsonschema.paramObjectArrayEx](#paramobjectarrayex) | `name string, arrayPropsRaw []any, opts ...any` | `ToolOption` | _withObjectArrayEx 向 schema 添加对象数组属性，并可单独指定数组级属性（导出名为 jsonschema.paramObjectArrayEx） |
| [jsonschema.paramRaw](#paramraw) | `name string, object map[string]any, opts ...PropertyOption` | `ToolOption` | WithRawParam 以原始 schema 对象的方式向 schema 添加一个属性（导出名为 jsonschema.paramRaw） |
| [jsonschema.paramString](#paramstring) | `name string, opts ...PropertyOption` | `ToolOption` | WithStringParam 向 schema 添加一个字符串类型属性（导出名为 jsonschema.paramString） |
| [jsonschema.paramStringArray](#paramstringarray) | `name string, opts ...PropertyOption` | `ToolOption` | WithStringArrayParam 向 schema 添加一个字符串数组类型属性（导出名为 jsonschema.paramStringArray） |

## 函数详情

### action {#action}

```go
action(action string) ToolOption
```

WithAction 向 schema 添加一个常量 @action 字段（导出名为 jsonschema.action）

@action 字段帮助 AI 识别输出 JSON 对象的类型

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| action | `string` | action 名称（作为该字段的 const 值） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ToolOption` | schema 构建可选项 |

**示例**

``````````````yak
schema = jsonschema.Object(jsonschema.action("create_user"), jsonschema.paramString("name"))
assert str.Contains(schema, "@action"), "schema should contain @action field"
``````````````

---

## 可变参数函数详情

### ActionObject {#actionobject}

```go
ActionObject(opts ...any) string
```

NewObjectSchemaWithAction 生成带默认 @action 字段的对象 JSON Schema（导出名为 jsonschema.ActionObject）

@action 字段用于帮助 AI 识别输出的 JSON 对象类型，默认 action 名为 &#34;object&#34;

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...any` | schema 构建可选项，如 jsonschema.paramString 等 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | JSON Schema 字符串 |

**示例**

``````````````yak
schema = jsonschema.ActionObject(jsonschema.paramString("name"))
assert str.Contains(schema, "@action"), "ActionObject should contain @action field"
``````````````

---

### NewObjectArraySchema {#newobjectarrayschema}

```go
NewObjectArraySchema(opts ...any) string
```

生成 array 类型（元素为 object）的 JSON Schema 字符串

导出名为 jsonschema.ObjectArray / jsonschema.NewObjectArraySchema

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...any` | schema 构建可选项，描述数组中每个对象元素的属性 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | JSON Schema 字符串（draft-07） |

**示例**

``````````````yak
schema = jsonschema.ObjectArray(

	jsonschema.paramString("name"),
	jsonschema.paramInt("age"),

)
assert str.Contains(schema, "\"type\": \"array\""), "should generate an array schema"
``````````````

---

### NewObjectSchema {#newobjectschema}

```go
NewObjectSchema(opts ...any) string
```

生成 object 类型的 JSON Schema 字符串（导出名为 jsonschema.Object / jsonschema.NewObjectSchema）

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...any` | schema 构建可选项，如 jsonschema.paramString / jsonschema.paramInt 等 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | JSON Schema 字符串（draft-07） |

**示例**

``````````````yak
schema = jsonschema.Object(

	jsonschema.paramString("name", jsonschema.description("user name")),
	jsonschema.paramInt("age", jsonschema.required(true)),

)
assert str.Contains(schema, "\"type\": \"object\""), "should generate an object schema"
assert str.Contains(schema, "name"), "schema should contain name property"
``````````````

---

### Object {#object}

```go
Object(opts ...any) string
```

NewObjectSchema 生成 object 类型的 JSON Schema 字符串（导出名为 jsonschema.Object / jsonschema.NewObjectSchema）

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...any` | schema 构建可选项，如 jsonschema.paramString / jsonschema.paramInt 等 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | JSON Schema 字符串（draft-07） |

**示例**

``````````````yak
schema = jsonschema.Object(

	jsonschema.paramString("name", jsonschema.description("user name")),
	jsonschema.paramInt("age", jsonschema.required(true)),

)
assert str.Contains(schema, "\"type\": \"object\""), "should generate an object schema"
assert str.Contains(schema, "name"), "schema should contain name property"
``````````````

---

### ObjectArray {#objectarray}

```go
ObjectArray(opts ...any) string
```

newObjectArraySchema 生成 array 类型（元素为 object）的 JSON Schema 字符串

导出名为 jsonschema.ObjectArray / jsonschema.NewObjectArraySchema

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...any` | schema 构建可选项，描述数组中每个对象元素的属性 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | JSON Schema 字符串（draft-07） |

**示例**

``````````````yak
schema = jsonschema.ObjectArray(

	jsonschema.paramString("name"),
	jsonschema.paramInt("age"),

)
assert str.Contains(schema, "\"type\": \"array\""), "should generate an array schema"
``````````````

---

### paramBool {#parambool}

```go
paramBool(name string, opts ...PropertyOption) ToolOption
```

WithBoolParam 向 schema 添加一个布尔类型属性（导出名为 jsonschema.paramBool）

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 属性名 |

**可选参数**

可作为可变参数 `opts ...PropertyOption` 传入选项；共 11 个可用选项，详见 [PropertyOption 选项列表](#option-propertyoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ToolOption` | schema 构建可选项 |

**示例**

``````````````yak
schema = jsonschema.Object(jsonschema.paramBool("enabled"))
assert str.Contains(schema, "boolean"), "schema should contain a boolean property"
``````````````

---

### paramInt {#paramint}

```go
paramInt(name string, opts ...PropertyOption) ToolOption
```

WithIntegerParam 向 schema 添加一个整数类型属性（导出名为 jsonschema.paramInt）

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 属性名 |

**可选参数**

可作为可变参数 `opts ...PropertyOption` 传入选项；共 11 个可用选项，详见 [PropertyOption 选项列表](#option-propertyoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ToolOption` | schema 构建可选项 |

**示例**

``````````````yak
schema = jsonschema.Object(jsonschema.paramInt("age"))
assert str.Contains(schema, "integer"), "schema should contain an integer property"
``````````````

---

### paramKeyValuePairsArray {#paramkeyvaluepairsarray}

```go
paramKeyValuePairsArray(name string, opts ...PropertyOption) ToolOption
```

WithKVPairsParam 向 schema 添加一个键值对数组类型属性（导出名为 jsonschema.paramKeyValuePairsArray）

适合表达 HTTP headers、查询参数等 key/value 列表结构

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 属性名 |

**可选参数**

可作为可变参数 `opts ...PropertyOption` 传入选项；共 11 个可用选项，详见 [PropertyOption 选项列表](#option-propertyoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ToolOption` | schema 构建可选项 |

**示例**

``````````````yak
schema = jsonschema.Object(jsonschema.paramKeyValuePairsArray("headers"))
assert str.Contains(schema, "array"), "schema should contain a kv-pairs array property"
``````````````

---

### paramNumber {#paramnumber}

```go
paramNumber(name string, opts ...PropertyOption) ToolOption
```

WithNumberParam 向 schema 添加一个数值类型属性（导出名为 jsonschema.paramNumber）

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 属性名 |

**可选参数**

可作为可变参数 `opts ...PropertyOption` 传入选项；共 11 个可用选项，详见 [PropertyOption 选项列表](#option-propertyoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ToolOption` | schema 构建可选项 |

**示例**

``````````````yak
schema = jsonschema.Object(jsonschema.paramNumber("score"))
assert str.Contains(schema, "number"), "schema should contain a number property"
``````````````

---

### paramNumberArray {#paramnumberarray}

```go
paramNumberArray(name string, opts ...PropertyOption) ToolOption
```

WithNumberArrayParam 向 schema 添加一个数值数组类型属性（导出名为 jsonschema.paramNumberArray）

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 属性名 |

**可选参数**

可作为可变参数 `opts ...PropertyOption` 传入选项；共 11 个可用选项，详见 [PropertyOption 选项列表](#option-propertyoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ToolOption` | schema 构建可选项 |

**示例**

``````````````yak
schema = jsonschema.Object(jsonschema.paramNumberArray("scores"))
assert str.Contains(schema, "array"), "schema should contain a number array property"
``````````````

---

### paramObject {#paramobject}

```go
paramObject(objectName string, opts ...any) ToolOption
```

_withParamObject 向 schema 添加一个对象类型属性（导出名为 jsonschema.paramObject）

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| objectName | `string` | 对象属性名 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...any` | 子属性可选项与对象配置项 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ToolOption` | schema 构建可选项 |

**示例**

``````````````yak
schema = jsonschema.Object(jsonschema.paramObject("user",

	jsonschema.paramString("name"),
	jsonschema.paramInt("age"),

))
assert str.Contains(schema, "user"), "schema should contain the object property"
``````````````

---

### paramObjectArray {#paramobjectarray}

```go
paramObjectArray(name string, opts ...any) ToolOption
```

_withObjectArray 向 schema 添加一个对象数组类型属性（导出名为 jsonschema.paramObjectArray）

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 属性名 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...any` | 作用于数组中对象元素的属性可选项 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ToolOption` | schema 构建可选项 |

**示例**

``````````````yak
schema = jsonschema.Object(jsonschema.paramObjectArray("users",

	jsonschema.paramString("name"),
	jsonschema.paramInt("age"),

))
assert str.Contains(schema, "users"), "schema should contain the object array property"
``````````````

---

### paramObjectArrayEx {#paramobjectarrayex}

```go
paramObjectArrayEx(name string, arrayPropsRaw []any, opts ...any) ToolOption
```

_withObjectArrayEx 向 schema 添加对象数组属性，并可单独指定数组级属性（导出名为 jsonschema.paramObjectArrayEx）

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 属性名 |
| arrayPropsRaw | `[]any` | 作用于数组本身的属性可选项 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...any` | 作用于数组中对象元素的属性可选项 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ToolOption` | schema 构建可选项 |

**示例**

``````````````yak
schema = jsonschema.Object(jsonschema.paramObjectArrayEx("users", [jsonschema.description("user list")],

	jsonschema.paramString("name"),

))
assert str.Contains(schema, "users"), "schema should contain the object array property"
``````````````

---

### paramRaw {#paramraw}

```go
paramRaw(name string, object map[string]any, opts ...PropertyOption) ToolOption
```

WithRawParam 以原始 schema 对象的方式向 schema 添加一个属性（导出名为 jsonschema.paramRaw）

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 属性名 |
| object | `map[string]any` | 该属性的原始 JSON Schema 对象 |

**可选参数**

可作为可变参数 `opts ...PropertyOption` 传入选项；共 11 个可用选项，详见 [PropertyOption 选项列表](#option-propertyoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ToolOption` | schema 构建可选项 |

**示例**

``````````````yak
schema = jsonschema.Object(jsonschema.paramRaw("ip", {"type": "string", "format": "ipv4"}))
assert str.Contains(schema, "ipv4"), "schema should contain the raw object property"
``````````````

---

### paramString {#paramstring}

```go
paramString(name string, opts ...PropertyOption) ToolOption
```

WithStringParam 向 schema 添加一个字符串类型属性（导出名为 jsonschema.paramString）

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 属性名 |

**可选参数**

可作为可变参数 `opts ...PropertyOption` 传入选项；共 11 个可用选项，详见 [PropertyOption 选项列表](#option-propertyoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ToolOption` | schema 构建可选项 |

**示例**

``````````````yak
schema = jsonschema.Object(jsonschema.paramString("name"))
assert str.Contains(schema, "string"), "schema should contain a string property"
``````````````

---

### paramStringArray {#paramstringarray}

```go
paramStringArray(name string, opts ...PropertyOption) ToolOption
```

WithStringArrayParam 向 schema 添加一个字符串数组类型属性（导出名为 jsonschema.paramStringArray）

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 属性名 |

**可选参数**

可作为可变参数 `opts ...PropertyOption` 传入选项；共 11 个可用选项，详见 [PropertyOption 选项列表](#option-propertyoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `ToolOption` | schema 构建可选项 |

**示例**

``````````````yak
schema = jsonschema.Object(jsonschema.paramStringArray("tags"))
assert str.Contains(schema, "array"), "schema should contain a string array property"
``````````````

---

## 可变参数选项列表

以下按选项类型汇总全部可变参数选项(原先重复在各主函数下的选项表已收拢到此处)：

### 1. 类型：PropertyOption {#option-propertyoption}

涉及到的函数有：[jsonschema.paramBool](#parambool)、[jsonschema.paramInt](#paramint)、[jsonschema.paramKeyValuePairsArray](#paramkeyvaluepairsarray)、[jsonschema.paramNumber](#paramnumber)、[jsonschema.paramNumberArray](#paramnumberarray)、[jsonschema.paramRaw](#paramraw)、[jsonschema.paramString](#paramstring)、[jsonschema.paramStringArray](#paramstringarray)

|选项函数|参数|返回值|说明|
|:--|:--|:--|:--|
| `jsonschema.const` | `values ...any` | `PropertyOption` | WithParam_Const 指定属性的常量取值 |
| `jsonschema.description` | `desc string` | `PropertyOption` | WithParam_Description 为属性添加描述信息 |
| `jsonschema.enum` | `values ...any` | `PropertyOption` | WithParam_Enum 指定属性的可选枚举值列表 |
| `jsonschema.example` | `i any` | `PropertyOption` | WithParam_Example 为属性添加示例值 |
| `jsonschema.max` | `max float64` | `PropertyOption` | WithParam_Max 设置数值属性的最大值 |
| `jsonschema.maxLength` | `max int` | `PropertyOption` | WithParam_MaxLength 设置字符串属性的最大长度 |
| `jsonschema.min` | `min float64` | `PropertyOption` | WithParam_Min 设置数值属性的最小值 |
| `jsonschema.minLength` | `min int` | `PropertyOption` | WithParam_MinLength 设置字符串属性的最小长度 |
| `jsonschema.raw` | `name string, v any` | `PropertyOption` | WithParam_Raw 向属性写入原始的 JSON Schema 键值 |
| `jsonschema.required` | `required ...bool` | `PropertyOption` | WithParam_Required 将属性标记为必填 |
| `jsonschema.title` | `title string` | `PropertyOption` | WithParam_Title 为属性添加便于展示的标题 |

