# dyn

|函数名|函数描述/介绍|
|:------|:--------|
| [dyn.Eval](#eval) |Eval 动态执行一段 yak 代码 参数: - i: 要执行的 yak 代码(字符串或字节切片) 返回值: - 执行过程中产生的错误，成功时为 nil|
| [dyn.Import](#import) |Import 从指定 yak 文件中加载并导入名为 exportsName 的变量 参数: - file: yak 文件路径(可省略 .yak 后缀)或包含 main.yak 的目录 - exportsName: 要导入的变量名 返回值: - 导入的变量值 - 加载失败时返回的错误|
| [dyn.IsYakFunc](#isyakfunc) |IsYakFunc 判断传入的值是否为一个函数(包括 yak 函数与原生函数) 参数: - i: 待判断的值 返回值: - 是否为函数|
| [dyn.LoadVarFromFile](#loadvarfromfile) |LoadVarFromFile 从指定文件或目录中批量加载脚本，并提取每个脚本中名为 exportsName 的变量 参数: - path: yak 文件路径或目录(目录会遍历其中的 .yak 文件) - exportsName: 要从每个脚本中提取的变量名 - opts: 可选配置，如 dyn.p...|
| [dyn.params](#params) |params 生成一个 LoadVarFromFile 的配置项，为被加载脚本注入额外参数 参数: - i: 注入到被加载脚本中的参数键值表 返回值: - 可传给 dyn.LoadVarFromFile 的配置项|
| [dyn.recursive](#recursive) |recursive 生成一个 LoadVarFromFile 的配置项，控制是否递归遍历子目录加载脚本 参数: - i: 是否递归加载子目录中的 yak 文件 返回值: - 可传给 dyn.LoadVarFromFile 的配置项|


## 函数定义
### Eval

#### 详细描述
Eval 动态执行一段 yak 代码

参数:

  - i: 要执行的 yak 代码(字符串或字节切片)



返回值:

  - 执行过程中产生的错误，成功时为 nil




Example:

``````````````yak
// VARS: 动态执行一段代码
err = dyn.Eval("a = 1 + 1")
// assert: 合法代码执行无错误
assert err == nil, "valid code should evaluate without error"
``````````````


#### 定义

`Eval(i any) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 要执行的 yak 代码(字符串或字节切片) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 执行过程中产生的错误，成功时为 nil |


### Import

#### 详细描述
Import 从指定 yak 文件中加载并导入名为 exportsName 的变量

参数:

  - file: yak 文件路径(可省略 .yak 后缀)或包含 main.yak 的目录

  - exportsName: 要导入的变量名



返回值:

  - 导入的变量值

  - 加载失败时返回的错误




Example:

``````````````yak
// 从 ./mod.yak 导入名为 Exports 的变量(依赖外部文件，作示意)
v, err = dyn.Import("./mod", "Exports")
``````````````


#### 定义

`Import(file string, exportsName string) (any, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| file | `string` | yak 文件路径(可省略 .yak 后缀)或包含 main.yak 的目录 |
| exportsName | `string` | 要导入的变量名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` | 导入的变量值 |
| r2 | `error` | 加载失败时返回的错误 |


### IsYakFunc

#### 详细描述
IsYakFunc 判断传入的值是否为一个函数(包括 yak 函数与原生函数)

参数:

  - i: 待判断的值



返回值:

  - 是否为函数




Example:

``````````````yak
// STDOUT: 函数返回 true
println(dyn.IsYakFunc(func() { return 1 }))   // OUT: true
// assert: 非函数返回 false
assert dyn.IsYakFunc(123) == false, "an integer is not a function"
``````````````


#### 定义

`IsYakFunc(i any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待判断的值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 是否为函数 |


### LoadVarFromFile

#### 详细描述
LoadVarFromFile 从指定文件或目录中批量加载脚本，并提取每个脚本中名为 exportsName 的变量

参数:

  - path: yak 文件路径或目录(目录会遍历其中的 .yak 文件)

  - exportsName: 要从每个脚本中提取的变量名

  - opts: 可选配置，如 dyn.params(...)、dyn.recursive(...)



返回值:

  - 提取到的变量列表，每个元素包含文件路径、模块名与变量值

  - 加载失败时返回的错误




Example:

``````````````yak
// 从目录加载所有脚本的 Exports 变量(依赖外部文件，作示意)
vars, err = dyn.LoadVarFromFile("./mods", "Exports", dyn.recursive(true))
``````````````


#### 定义

`LoadVarFromFile(path string, exportsName string, opts ...yakEvalConfigOpt) ([]*yakVariable, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` | yak 文件路径或目录(目录会遍历其中的 .yak 文件) |
| exportsName | `string` | 要从每个脚本中提取的变量名 |
| opts | `...yakEvalConfigOpt` | 可选配置，如 dyn.params(...)、dyn.recursive(...) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*yakVariable` | 提取到的变量列表，每个元素包含文件路径、模块名与变量值 |
| r2 | `error` | 加载失败时返回的错误 |


### params

#### 详细描述
params 生成一个 LoadVarFromFile 的配置项，为被加载脚本注入额外参数

参数:

  - i: 注入到被加载脚本中的参数键值表



返回值:

  - 可传给 dyn.LoadVarFromFile 的配置项




Example:

``````````````yak
// 注入参数后加载脚本中的 Exports 变量(作示意)
vars, err = dyn.LoadVarFromFile("./mod", "Exports", dyn.params({"key": "value"}))
``````````````


#### 定义

`params(i map[string]any) yakEvalConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `map[string]any` | 注入到被加载脚本中的参数键值表 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `yakEvalConfigOpt` | 可传给 dyn.LoadVarFromFile 的配置项 |


### recursive

#### 详细描述
recursive 生成一个 LoadVarFromFile 的配置项，控制是否递归遍历子目录加载脚本

参数:

  - i: 是否递归加载子目录中的 yak 文件



返回值:

  - 可传给 dyn.LoadVarFromFile 的配置项




Example:

``````````````yak
// 递归加载目录下所有脚本中的 Exports 变量(作示意)
vars, err = dyn.LoadVarFromFile("./mods", "Exports", dyn.recursive(true))
``````````````


#### 定义

`recursive(i bool) yakEvalConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `bool` | 是否递归加载子目录中的 yak 文件 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `yakEvalConfigOpt` | 可传给 dyn.LoadVarFromFile 的配置项 |


