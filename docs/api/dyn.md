# dyn {#library-dyn}

`dyn` 库提供动态执行与模块导入能力，允许在运行时求值 yak 代码、从 `.yak` 文件导入变量/函数，实现脚本的动态加载与组合。

典型使用场景：

- 动态求值：`dyn.Eval` 在当前运行时执行一段 yak 代码。
- 模块导入：`dyn.Import` 从文件导入导出项，`dyn.LoadVarFromFile` 加载文件中的变量（可配 `dyn.params` 传参、`dyn.recursive` 递归）。
- 类型判断：`dyn.IsYakFunc` 判断某值是否为 yak 函数。

与相邻库的关系：`dyn` 提供脚本级的动态能力，常用于插件框架、把多个 `.yak` 文件组合调用的场景，与 `hook`（插件调用）思路互补。

> 共 6 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [dyn.Eval](#eval) | `i any` | `error` | 动态执行一段 yak 代码 |
| [dyn.Import](#import) | `file string, exportsName string` | `any, error` | 从指定 yak 文件中加载并导入名为 exportsName 的变量 |
| [dyn.IsYakFunc](#isyakfunc) | `i any` | `bool` | 判断传入的值是否为一个函数(包括 yak 函数与原生函数) |
| [dyn.params](#params) | `i map[string]any` | `yakEvalConfigOpt` | 生成一个 LoadVarFromFile 的配置项，为被加载脚本注入额外参数 |
| [dyn.recursive](#recursive) | `i bool` | `yakEvalConfigOpt` | 生成一个 LoadVarFromFile 的配置项，控制是否递归遍历子目录加载脚本 |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [dyn.LoadVarFromFile](#loadvarfromfile) | `path string, exportsName string, opts ...yakEvalConfigOpt` | `[]*yakVariable, error` | 从指定文件或目录中批量加载脚本，并提取每个脚本中名为 exportsName 的变量 |

## 函数详情

### Eval {#eval}

```go
Eval(i any) error
```

动态执行一段 yak 代码

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 要执行的 yak 代码(字符串或字节切片) |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 执行过程中产生的错误，成功时为 nil |

**示例**

``````````````yak
// VARS: 动态执行一段代码
err = dyn.Eval("a = 1 + 1")
// assert: 合法代码执行无错误
assert err == nil, "valid code should evaluate without error"
``````````````

---

### Import {#import}

```go
Import(file string, exportsName string) (any, error)
```

从指定 yak 文件中加载并导入名为 exportsName 的变量

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| file | `string` | yak 文件路径(可省略 .yak 后缀)或包含 main.yak 的目录 |
| exportsName | `string` | 要导入的变量名 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `any` | 导入的变量值 |
| r2 | `error` | 加载失败时返回的错误 |

**示例**

``````````````yak
// 从 ./mod.yak 导入名为 Exports 的变量(依赖外部文件，作示意)
v, err = dyn.Import("./mod", "Exports")
``````````````

---

### IsYakFunc {#isyakfunc}

```go
IsYakFunc(i any) bool
```

判断传入的值是否为一个函数(包括 yak 函数与原生函数)

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 待判断的值 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `bool` | 是否为函数 |

**示例**

``````````````yak
// STDOUT: 函数返回 true
println(dyn.IsYakFunc(func() { return 1 }))   // OUT: true
// assert: 非函数返回 false
assert dyn.IsYakFunc(123) == false, "an integer is not a function"
``````````````

---

### params {#params}

```go
params(i map[string]any) yakEvalConfigOpt
```

生成一个 LoadVarFromFile 的配置项，为被加载脚本注入额外参数

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `map[string]any` | 注入到被加载脚本中的参数键值表 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `yakEvalConfigOpt` | 可传给 dyn.LoadVarFromFile 的配置项 |

**示例**

``````````````yak
// 注入参数后加载脚本中的 Exports 变量(作示意)
vars, err = dyn.LoadVarFromFile("./mod", "Exports", dyn.params({"key": "value"}))
``````````````

---

### recursive {#recursive}

```go
recursive(i bool) yakEvalConfigOpt
```

生成一个 LoadVarFromFile 的配置项，控制是否递归遍历子目录加载脚本

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `bool` | 是否递归加载子目录中的 yak 文件 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `yakEvalConfigOpt` | 可传给 dyn.LoadVarFromFile 的配置项 |

**示例**

``````````````yak
// 递归加载目录下所有脚本中的 Exports 变量(作示意)
vars, err = dyn.LoadVarFromFile("./mods", "Exports", dyn.recursive(true))
``````````````

---

## 可变参数函数详情

### LoadVarFromFile {#loadvarfromfile}

```go
LoadVarFromFile(path string, exportsName string, opts ...yakEvalConfigOpt) ([]*yakVariable, error)
```

从指定文件或目录中批量加载脚本，并提取每个脚本中名为 exportsName 的变量

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| path | `string` | yak 文件路径或目录(目录会遍历其中的 .yak 文件) |
| exportsName | `string` | 要从每个脚本中提取的变量名 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...yakEvalConfigOpt` | 可选配置，如 dyn.params(...)、dyn.recursive(...) |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*yakVariable` | 提取到的变量列表，每个元素包含文件路径、模块名与变量值 |
| r2 | `error` | 加载失败时返回的错误 |

**示例**

``````````````yak
// 从目录加载所有脚本的 Exports 变量(依赖外部文件，作示意)
vars, err = dyn.LoadVarFromFile("./mods", "Exports", dyn.recursive(true))
``````````````

---

