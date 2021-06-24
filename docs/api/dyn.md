# dyn


|成员函数|函数描述/介绍|
|:------|:--------|
 | [dyn.Eval](#dyneval) | 独立上下文执行一段新的 yak 代码 |
 | [dyn.Import](#dynimport) | 加载一个 yak 文件，并把代码中的某些变量提取出来 |
 | [dyn.IsYakFunc](#dynisyakfunc) | 判断一个对象是不是可供 yak 调用的函数，类似 python 的 `callable` |
 | [dyn.LoadVarFromFile](#dynloadvarfromfile) | 从一个文件/文件夹/模块中，批量导入一个对象，通常用于 exp/poc 编写的时候，需要批量导入一些模块的函数 |
 | [dyn.params](#dynparams) | 给导入的脚本额外增加一些变量 |
 | [dyn.recursive](#dynrecursive) |  |




 



## 函数定义

### dyn.Eval

独立上下文执行一段新的 yak 代码

#### 详细描述

独立上下文执行一串新的 yak 代码

```go
die(dyn.Eval(`println(123); 1&#43;1`))
```

执行上述代码之后，将会在屏幕中打印出 `123` 的结果


#### 定义：

`func dyn.Eval(code: interface {}) return (err: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| code | `interface {}` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| err | `error` |   |


 
### dyn.Import

加载一个 yak 文件，并把代码中的某些变量提取出来

#### 详细描述

要注意的是，执行的新的代码 `YAK_MAIN` 会设置为 false，如果想要编写渗透测试工具，进行模块化编程，测试代码可以放在 `if YAK_MAIN {}` 中；

一般来说，这个函数经常会用作导入别的脚本的函数，我们创建如下两个文件

```go title=&#39;a.yak&#39;
def abc(caller) {
  println(`abc from function is called by`, caller)
}
```

```go title=&#39;b.yak&#39;
v, err := dyn.Import(`a`, `abc`)
die(err)

v.Value(&#34;b.yak&#34;)
```

然后通过 `yak b.yak` 来执行 `b.yak`

得到的结果如下：

```
abc from function is called by b.yak
```


#### 定义：

`func dyn.Import(fileOrModel: string, varName: string) return (yakVariable: *yak.yakVariable, err: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fileOrModel | `string` |  可以是一个文件名（加不加 `.yak` 后缀均可）如果是一个文件夹的话，会自动寻找这个文件夹下的 `main.yak` 文件 |
| varName | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| yakVariable | `*yak.yakVariable` |  yak 的变量对象 |
| err | `error` |   |


 
### dyn.IsYakFunc

判断一个对象是不是可供 yak 调用的函数，类似 python 的 `callable`

#### 详细描述



#### 定义：

`func dyn.IsYakFunc(obj: interface {}) return (result: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| obj | `interface {}` |  想要判断的 yak 对象 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| result | `bool` |  是一个 bool 值，标志该对象是否可以被调用 |


 
### dyn.LoadVarFromFile

从一个文件/文件夹/模块中，批量导入一个对象，通常用于 exp/poc 编写的时候，需要批量导入一些模块的函数

#### 详细描述



#### 定义：

`func dyn.LoadVarFromFile(fromModules: string, varName: string, params ...[]yak.yakEvalConfigOpt) return (r0: []*yak.yakVariable, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fromModules | `string` |  可以是文件夹，可以是文件，如果是文件夹，将会把这个文件夹下所有的模块进行导入，如果是文件，将会只导入一个具体的文件 |
| varName | `string` |  想要导入的变量的名称 |
| params | `[]yak.yakEvalConfigOpt /*可变参数*/` |  可变参数：导入的特性，常见的有 params, recursive 两个 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]*yak.yakVariable` |   |
| r1 | `error` |   |


 
### dyn.params

给导入的脚本额外增加一些变量

#### 详细描述



#### 定义：

`func dyn.params(v1: map[string]interface {}) return (r0: func yakEvalConfigOpt(v1: *yak.yakEvalConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `map[string]interface {}` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func yakEvalConfigOpt(v1: *yak.yakEvalConfig) ` |   |


 
### dyn.recursive



#### 详细描述



#### 定义：

`func dyn.recursive(v1: map[string]interface {}) return (r0: func yakEvalConfigOpt(v1: *yak.yakEvalConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `map[string]interface {}` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func yakEvalConfigOpt(v1: *yak.yakEvalConfig) ` |   |


 


