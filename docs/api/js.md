# js

|成员函数|函数描述/介绍|
|:------|:--------|
| [js.ASTWalk](#astwalk) ||
| [js.CallFunctionFromCode](#callfunctionfromcode) ||
| [js.FalseValue](#falsevalue) |FalseValue will return a value representing false.

It is equivalent to:

	ToValue(false)
|
| [js.GetSTType](#getsttype) ||
| [js.NaNValue](#nanvalue) |NaNValue will return a value representing NaN.

It is equivalent to:

	ToValue(math.NaN())
|
| [js.New](#new) |create vm
|
| [js.NullValue](#nullvalue) |NullValue will return a Value representing null.
|
| [js.Parse](#parse) ||
| [js.Run](#run) |Run will allocate a new JavaScript runtime, run the given source
on the allocated runtime, and return the runtime, resulting value, and
error (if any)...|
| [js.ToValue](#tovalue) |ToValue will convert an interface{} value to a value digestible by otto/JavaScript

This function will not work for advanced types (struct, map, slice...|
| [js.TrueValue](#truevalue) |TrueValue will return a value representing true.

It is equivalent to:

	ToValue(true)
|
| [js.UndefinedValue](#undefinedvalue) |UndefinedValue will return a Value representing undefined.
|


## 函数定义
### astwalk

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


### callfunctionfromcode

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


### falsevalue

#### 详细描述
FalseValue will return a value representing false.

It is equivalent to:

	ToValue(false)


#### 定义

`FalseValue() Value`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Value` |   |


### getsttype

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


### nanvalue

#### 详细描述
NaNValue will return a value representing NaN.

It is equivalent to:

	ToValue(math.NaN())


#### 定义

`NaNValue() Value`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Value` |   |


### new

#### 详细描述
create vm


#### 定义

`New() *otto.Otto`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*otto.Otto` |   |


### nullvalue

#### 详细描述
NullValue will return a Value representing null.


#### 定义

`NullValue() Value`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Value` |   |


### parse

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


### run

#### 详细描述
Run will allocate a new JavaScript runtime, run the given source
on the allocated runtime, and return the runtime, resulting value, and
error (if any).

src may be a string, a byte slice, a bytes.Buffer, or an io.Reader, but it MUST always be in UTF-8.

src may also be a Script.

src may also be a Program, but if the AST has been modified, then runtime behavior is undefined.


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


### tovalue

#### 详细描述
ToValue will convert an interface{} value to a value digestible by otto/JavaScript

This function will not work for advanced types (struct, map, slice/array, etc.) and
you should use Otto.ToValue instead.


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


### truevalue

#### 详细描述
TrueValue will return a value representing true.

It is equivalent to:

	ToValue(true)


#### 定义

`TrueValue() Value`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Value` |   |


### undefinedvalue

#### 详细描述
UndefinedValue will return a Value representing undefined.


#### 定义

`UndefinedValue() Value`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Value` |   |


