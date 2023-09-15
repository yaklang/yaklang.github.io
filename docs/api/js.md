# js

|成员函数|函数描述/介绍|
|:------|:--------|
| [js.ASTWalk](#ASTWalk) ||
| [js.CallFunctionFromCode](#CallFunctionFromCode) ||
| [js.FalseValue](#FalseValue) |FalseValue will return a value representing false.It is equivalent to:	ToValue(false)|
| [js.GetSTType](#GetSTType) ||
| [js.NaNValue](#NaNValue) |NaNValue will return a value representing NaN.It is equivalent to:	ToValue(math.NaN())|
| [js.New](#New) |create vm|
| [js.NullValue](#NullValue) |NullValue will return a Value representing null.|
| [js.Parse](#Parse) ||
| [js.Run](#Run) |Run will allocate a new JavaScript runtime, run the given sourceon the allocated runtime, and return the runtime, resulting value, anderror (if any).src may be a string, a byte slice, a bytes.Buffer, or an io.Reader, but it MUST always be in UTF-8.src may also be a Script.src may also be a Program, but if the AST has been modified, then runtime behavior is undefined.|
| [js.ToValue](#ToValue) |ToValue will convert an interface{} value to a value digestible by otto/JavaScriptThis function will not work for advanced types (struct, map, slice/array, etc.) andyou should use Otto.ToValue instead.|
| [js.TrueValue](#TrueValue) |TrueValue will return a value representing true.It is equivalent to:	ToValue(true)|
| [js.UndefinedValue](#UndefinedValue) |UndefinedValue will return a Value representing undefined.|


## 函数定义
### ASTWalk

#### 详细描述


#### 定义

`ASTWalk(code string) (*ASTWalkerResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| code | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ASTWalkerResult` |   |
| r2 | `error` |   |


### CallFunctionFromCode

#### 详细描述


#### 定义

`CallFunctionFromCode(i any, funcName string, params ...any) (otto.Value, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |
| funcName | `string` |   |
| params | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `otto.Value` |   |
| r2 | `error` |   |


### FalseValue

#### 详细描述
FalseValue will return a value representing false.It is equivalent to:	ToValue(false)

#### 定义

`FalseValue() Value`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Value` |   |


### GetSTType

#### 详细描述


#### 定义

`GetSTType(st any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| st | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### NaNValue

#### 详细描述
NaNValue will return a value representing NaN.It is equivalent to:	ToValue(math.NaN())

#### 定义

`NaNValue() Value`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Value` |   |


### New

#### 详细描述
create vm

#### 定义

`New() *otto.Otto`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*otto.Otto` |   |


### NullValue

#### 详细描述
NullValue will return a Value representing null.

#### 定义

`NullValue() Value`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Value` |   |


### Parse

#### 详细描述


#### 定义

`Parse(code string) (*ast.Program, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| code | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ast.Program` |   |
| r2 | `error` |   |


### Run

#### 详细描述
Run will allocate a new JavaScript runtime, run the given sourceon the allocated runtime, and return the runtime, resulting value, anderror (if any).src may be a string, a byte slice, a bytes.Buffer, or an io.Reader, but it MUST always be in UTF-8.src may also be a Script.src may also be a Program, but if the AST has been modified, then runtime behavior is undefined.

#### 定义

`Run(src any) (*Otto, Value, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| src | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*Otto` |   |
| r2 | `Value` |   |
| r3 | `error` |   |


### ToValue

#### 详细描述
ToValue will convert an interface{} value to a value digestible by otto/JavaScriptThis function will not work for advanced types (struct, map, slice/array, etc.) andyou should use Otto.ToValue instead.

#### 定义

`ToValue(value any) (Value, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| value | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Value` |   |
| r2 | `error` |   |


### TrueValue

#### 详细描述
TrueValue will return a value representing true.It is equivalent to:	ToValue(true)

#### 定义

`TrueValue() Value`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Value` |   |


### UndefinedValue

#### 详细描述
UndefinedValue will return a Value representing undefined.

#### 定义

`UndefinedValue() Value`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Value` |   |


