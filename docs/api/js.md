# js


|成员函数|函数描述/介绍|
|:------|:--------|
 | [js.CallFunctionFromCode](#jscallfunctionfromcode) | 从一段代码中调用某个函数 |
 | [js.FalseValue](#jsfalsevalue) | 返回 JS 的 False 对象 |
 | [js.NaNValue](#jsnanvalue) |  |
 | [js.New](#jsnew) | 新创建一个 JS 执行上下文 |
 | [js.NullValue](#jsnullvalue) | 返回 JS 的 NULL 对象 |
 | [js.Run](#jsrun) | 执行一段 JS 代码，返回上下文以及代码的执行结果 |
 | [js.ToValue](#jstovalue) | 把 Golang/Yak 对象转变为 otto.Value 对象 |
 | [js.TrueValue](#jstruevalue) |  |
 | [js.UndefinedValue](#jsundefinedvalue) |  |




## 变量定义

|变量调用名|变量类型|变量解释/帮助信息|
|:-----------|:---------- |:-----------|
|`js.PoweredBy`|`string`| //|





## 函数定义

### js.CallFunctionFromCode

从一段代码中调用某个函数

#### 详细描述



#### 定义：

`func js.CallFunctionFromCode(code: any, funcName: string, params ...any) return (ottoValue: otto.Value, r1: error)`


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

`func js.FalseValue() return (r0: otto.Value)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `otto.Value` |   |


 
### js.NaNValue



#### 详细描述

返回 JS 的 NaN 对象

#### 定义：

`func js.NaNValue() return (r0: otto.Value)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `otto.Value` |   |


 
### js.New

新创建一个 JS 执行上下文

#### 详细描述



#### 定义：

`func js.New() return (r0: *otto.Otto)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*otto.Otto` |   |


 
### js.NullValue

返回 JS 的 NULL 对象

#### 详细描述



#### 定义：

`func js.NullValue() return (r0: otto.Value)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `otto.Value` |   |


 
### js.Run

执行一段 JS 代码，返回上下文以及代码的执行结果

#### 详细描述



#### 定义：

`func js.Run(v1: any) return (r0: *otto.Otto, r1: otto.Value, r2: error)`


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

`func js.ToValue(v1: any) return (r0: otto.Value, r1: error)`


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

`func js.TrueValue() return (r0: otto.Value)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `otto.Value` |   |


 
### js.UndefinedValue



#### 详细描述



#### 定义：

`func js.UndefinedValue() return (r0: otto.Value)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `otto.Value` |   |


 


