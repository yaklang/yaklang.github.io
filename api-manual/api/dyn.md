# dyn

|函数名|函数描述/介绍|
|:------|:--------|
| [dyn.Eval](#eval) ||
| [dyn.Import](#import) ||
| [dyn.IsYakFunc](#isyakfunc) ||
| [dyn.LoadVarFromFile](#loadvarfromfile) ||
| [dyn.params](#params) ||
| [dyn.recursive](#recursive) ||


## 函数定义
### Eval

#### 详细描述


#### 定义

`Eval(i any) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### Import

#### 详细描述


#### 定义

`Import(file string, exportsName string) (any, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| file | `string` |   |
| exportsName | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` |   |
| r2 | `error` |   |


### IsYakFunc

#### 详细描述


#### 定义

`IsYakFunc(i any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### LoadVarFromFile

#### 详细描述


#### 定义

`LoadVarFromFile(path string, exportsName string, opts ...yakEvalConfigOpt) ([]*yakVariable, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` |   |
| exportsName | `string` |   |
| opts | `...yakEvalConfigOpt` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*yakVariable` |   |
| r2 | `error` |   |


### params

#### 详细描述


#### 定义

`params(i map[string]any) yakEvalConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `map[string]any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `yakEvalConfigOpt` |   |


### recursive

#### 详细描述


#### 定义

`recursive(i bool) yakEvalConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `yakEvalConfigOpt` |   |


