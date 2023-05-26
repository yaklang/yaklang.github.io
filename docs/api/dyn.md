# dyn


|成员函数|函数描述/介绍|
|:------|:--------|
 | [dyn.Eval](#dyneval) | 独立上下文执行一段新的 yak 代码 |
 | [dyn.Import](#dynimport) |  |
 | [dyn.IsYakFunc](#dynisyakfunc) | 判断一个对象是不是可供 yak 调用的函数，类似 python 的 `callable` |
 | [dyn.LoadVarFromFile](#dynloadvarfromfile) | 从一个文件/文件夹/模块中，批量导入一个对象，通常用于 exp/poc 编写的时候，需要批量导入一些模块的函数 |
 | [dyn.params](#dynparams) | 给导入的脚本额外增加一些变量 |
 | [dyn.recursive](#dynrecursive) | 用于 `dyn.LoadVarFromFile` 函数的额外参数，递归加载文件夹内容，会解析文件夹以及自文件下面所有的内容。 |




 



## 函数定义

### dyn.Eval

独立上下文执行一段新的 yak 代码

#### 详细描述

独立上下文执行一串新的 yak 代码

```go
die(dyn.Eval(`println(123); 1+1`))
```

执行上述代码之后，将会在屏幕中打印出 `123` 的结果


#### 定义：

`Eval(i any) error`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| code | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| err | `error` |   |


 
### dyn.Import



#### 详细描述



#### 定义：

`Import(file string, exportsName string) (any, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |
| r1 | `error` |   |


 
### dyn.IsYakFunc

判断一个对象是不是可供 yak 调用的函数，类似 python 的 `callable`

#### 详细描述



#### 定义：

`IsYakFunc(i any) bool`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| obj | `any` |  想要判断的 yak 对象 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| result | `bool` |  是一个 bool 值，标志该对象是否可以被调用 |


 
### dyn.LoadVarFromFile

从一个文件/文件夹/模块中，批量导入一个对象，通常用于 exp/poc 编写的时候，需要批量导入一些模块的函数

#### 详细描述



#### 定义：

`LoadVarFromFile(string, string, ...yak.yakEvalConfigOpt) ([]*yak.yakVariable, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fromModules | `string` |  可以是文件夹，可以是文件，如果是文件夹，将会把这个文件夹下所有的模块进行导入，如果是文件，将会只导入一个具体的文件 |
| varName | `string` |  想要导入的变量的名称 |
| params | `dyn.param` |  可变参数：导入的特性，常见的有 params, recursive 两个 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]*yak.yakVariable` |   |
| r1 | `error` |   |


 
### dyn.params

给导入的脚本额外增加一些变量

#### 详细描述



#### 定义：

`params(map[string]any) yak.yakEvalConfigOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `map[string]any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func yakEvalConfigOpt(v1: *yak.yakEvalConfig) ` |   |


 
### dyn.recursive

用于 `dyn.LoadVarFromFile` 函数的额外参数，递归加载文件夹内容，会解析文件夹以及自文件下面所有的内容。

#### 详细描述

```go
dyn.LoadVarFromFile(`dir`, varName, dyn.recursive(true))
```


#### 定义：

`recursive(bool) yak.yakEvalConfigOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func yakEvalConfigOpt(v1: *yak.yakEvalConfig) ` |   |


 


