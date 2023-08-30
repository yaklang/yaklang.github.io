# js


|成员函数|函数描述/介绍|
|:------|:--------|
 | [js.ASTWalk](#jsastwalk) | 遍历一个 JS 中的所有符号，字面量以及数据解析错误的地方 |
 | [js.CallFunctionFromCode](#jscallfunctionfromcode) | 从一段代码中调用某个函数 |
 | [js.FalseValue](#jsfalsevalue) | 返回 JS 的 False 对象 |
 | [js.GetSTType](#jsgetsttype) |  |
 | [js.NaNValue](#jsnanvalue) |  |
 | [js.New](#jsnew) | 新创建一个 JS 执行上下文 |
 | [js.NullValue](#jsnullvalue) | 返回 JS 的 NULL 对象 |
 | [js.Parse](#jsparse) |  |
 | [js.Run](#jsrun) | 执行一段 JS 代码，返回上下文以及代码的执行结果 |
 | [js.ToValue](#jstovalue) | 把 Golang/Yak 对象转变为 otto.Value 对象 |
 | [js.TrueValue](#jstruevalue) |  |
 | [js.UndefinedValue](#jsundefinedvalue) |  |




## 变量定义

|变量调用名|变量类型|变量解释/帮助信息|
|:-----------|:---------- |:-----------|
|`js.PoweredBy`|`string`| //|





## 函数定义

### js.ASTWalk

遍历一个 JS 中的所有符号，字面量以及数据解析错误的地方

#### 详细描述



#### 定义：

`ASTWalk(string) (*javascript.ASTWalkerResult, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*javascript.ASTWalkerResult` |   |
| r1 | `error` |   |


 
### js.CallFunctionFromCode

从一段代码中调用某个函数

#### 详细描述



#### 定义：

`CallFunctionFromCode(i any, funcName string, params ...any) (otto.Value, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| code | `any` |   |
| funcName | `string` |   |
| params | `...any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| ottoValue | `otto.Value` |   |
| r1 | `error` |   |


 
### js.FalseValue

返回 JS 的 False 对象

#### 详细描述



#### 定义：

`FalseValue() otto.Value`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `otto.Value` |   |


 
### js.GetSTType



#### 详细描述



#### 定义：

`func js.GetSTType(v1: any) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### js.NaNValue



#### 详细描述

返回 JS 的 NaN 对象

#### 定义：

`NaNValue() otto.Value`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `otto.Value` |   |


 
### js.New

新创建一个 JS 执行上下文

#### 详细描述



#### 定义：

`New() *otto.Otto  doc:create vm`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*otto.Otto` |   |


 
### js.NullValue

返回 JS 的 NULL 对象

#### 详细描述



#### 定义：

`NullValue() otto.Value`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `otto.Value` |   |


 
### js.Parse



#### 详细描述



#### 定义：

`func js.Parse(v1: string) return (r0: *ast.Program, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*ast.Program` |   |
| r1 | `error` |   |


 
### js.Run

执行一段 JS 代码，返回上下文以及代码的执行结果

#### 详细描述



#### 定义：

`Run(src any) (*Otto, Value, error)  doc:Run will allocate a new JavaScript runtime, run the given sourceon the allocated runtime, and return the runtime, resulting value, anderror (if any).src may be a string, a byte slice, a bytes.Buffer, or an io.Reader, but it MUST always be in UTF-8.src may also be a Script.src may also be a Program, but if the AST has been modified, then runtime behavior is undefined.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*otto.Otto` |   |
| r1 | `otto.Value` |   |
| r2 | `error` |   |


 
### js.ToValue

把 Golang/Yak 对象转变为 otto.Value 对象

#### 详细描述



#### 定义：

`ToValue(any) (otto.Value, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `otto.Value` |   |
| r1 | `error` |   |


 
### js.TrueValue



#### 详细描述



#### 定义：

`TrueValue() otto.Value`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `otto.Value` |   |


 
### js.UndefinedValue



#### 详细描述



#### 定义：

`UndefinedValue() otto.Value`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `otto.Value` |   |


 


