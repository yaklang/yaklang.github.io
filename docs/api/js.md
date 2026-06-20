# js

|实例名|实例描述|
|:------|:--------|
FalseValue|(goja.valueBool) false|
NaNValue|(goja.valueFloat) NaN|
NullValue|(github.com/dop251/goja.valueNull) null|
PoweredBy|(string) &#34;github.com/dop251/goja&#34;|
TrueValue|(goja.valueBool) true|
UndefinedValue|(github.com/dop251/goja.valueUndefined) undefined|

|函数名|函数描述/介绍|
|:------|:--------|
| [js.ASTWalk](#astwalk) |ASTWalk 对传入的 JS 代码进行 AST 遍历，收集字面量、标识符与语法错误（导出名为 js.ASTWalk） 参数: - code: JS 源代码字符串 返回值: - 遍历结果（含字符串字面量、标识符、语法错误等） - 错误信息|
| [js.CallFunctionFromCode](#callfunctionfromcode) |CallFunctionFromCode 从传入代码中调用指定的 JS 函数并返回结果 参数: - src: 包含 JS 代码的字符串 - funcName: 要调用的 JS 函数名 - params: 零个或多个函数参数 返回值: - 函数调用的返回值 - 错误信息|
| [js.GetFunction](#getfunction) |GetFunction 从 JS 引擎中取出某个全局函数并转换为可调用函数 参数: - vm: JS 引擎 - funcName: 函数名 返回值: - 可调用的 JS 函数 - 是否成功获取|
| [js.GetObjectFunction](#getobjectfunction) |GetObjectFunction 从 JS 引擎中取出某个对象的方法并转换为可调用函数 参数: - vm: JS 引擎 - thisName: 对象名 - funcName: 方法名 返回值: - 可调用的 JS 函数 - 是否成功获取|
| [js.GetSTType](#getsttype) |GetStatementType 返回 JS AST 节点的类型名（去掉 *ast. 前缀，导出名为 js.GetSTType） 参数: - st: JS AST 节点（如 js.Parse 的返回值或其子节点） 返回值: - 节点类型名字符串|
| [js.New](#new) |New 创建一个新的 JS 引擎（goja Runtime）并返回 参数: - opts: 零个或多个运行选项，如嵌入第三方库或预置变量 返回值: - JS 引擎对象，可调用 RunString 执行 JS 代码|
| [js.Parse](#parse) |Parse 对传入的 JS 代码进行解析并返回 AST 语法树 参数: - code: JS 源代码字符串 返回值: - 解析得到的 AST 程序节点 - 错误信息|
| [js.Run](#run) |Run 创建新的 JS 引擎并运行传入代码，返回引擎、运行结果值和错误 会尝试自动导入代码中用到的库（CryptoJS 默认导入 V4 版本） 参数: - src: 要运行的 JS 代码字符串 - opts: 零个或多个运行选项，如嵌入第三方库或预置变量 返回值: - JS 引擎对象 - 运行结果值...|
| [js.ToValue](#tovalue) |ToValue 将一个 Go 值转换为 JS 运行时中的值(JS Value)，便于作为变量注入 JS 环境或与执行结果交互（导出名为 js.ToValue） 参数: - i: 任意 Go 值（数字、字符串、布尔、map、slice 等） 返回值: - 转换后的 JS 值|
| [js.libCryptoJSV3](#libcryptojsv3) |libCryptoJSV3 是一个 JS 运行选项参数，用于在运行 JS 代码时嵌入 CryptoJS 3.3.0 库 返回值: - JS 运行选项|
| [js.libCryptoJSV4](#libcryptojsv4) |libCryptoJSV4 是一个 JS 运行选项参数，用于在运行 JS 代码时嵌入 CryptoJS 4.2.0 库 返回值: - JS 运行选项|
| [js.libJSRSASign](#libjsrsasign) |libJSRSASign 是一个 JS 运行选项参数，用于在运行 JS 代码时嵌入 jsrsasign 10.8.6 库 返回值: - JS 运行选项|
| [js.libJsEncrypt](#libjsencrypt) |libJsEncrypt 是一个 JS 运行选项参数，用于在运行 JS 代码时嵌入 JSEncrypt 3.3.2 库 返回值: - JS 运行选项|
| [js.withVariable](#withvariable) |withVariable 为 JS 运行设置单个全局变量（导出名为 js.withVariable） 参数: - name: 变量名 - value: 变量值 返回值: - JS 运行选项|
| [js.withVariables](#withvariables) |withVariables 为 JS 运行批量设置多个全局变量（导出名为 js.withVariables） 参数: - vars: 变量名到变量值的映射 返回值: - JS 运行选项|


## 函数定义
### ASTWalk

#### 详细描述
ASTWalk 对传入的 JS 代码进行 AST 遍历，收集字面量、标识符与语法错误（导出名为 js.ASTWalk）

参数:

  - code: JS 源代码字符串



返回值:

  - 遍历结果（含字符串字面量、标识符、语法错误等）

  - 错误信息




Example:

``````````````yak
res = js.ASTWalk(`var name = "yak"; foo("bar");`)~
dump(res)
``````````````


#### 定义

`ASTWalk(code string) (*ASTWalkerResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| code | `string` | JS 源代码字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ASTWalkerResult` | 遍历结果（含字符串字面量、标识符、语法错误等） |
| r2 | `error` | 错误信息 |


### CallFunctionFromCode

#### 详细描述
CallFunctionFromCode 从传入代码中调用指定的 JS 函数并返回结果

参数:

  - src: 包含 JS 代码的字符串

  - funcName: 要调用的 JS 函数名

  - params: 零个或多个函数参数



返回值:

  - 函数调用的返回值

  - 错误信息




Example:

``````````````yak
value = js.CallFunctionFromCode(`function add(a, b) { return a + b; }`, "add", 1, 2)~
println(value.ToInteger())   // OUT: 3
assert value.ToInteger() == 3, "add(1,2) should be 3"
``````````````


#### 定义

`CallFunctionFromCode(src any, funcName string, params ...any) (goja.Value, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| src | `any` | 包含 JS 代码的字符串 |
| funcName | `string` | 要调用的 JS 函数名 |
| params | `...any` | 零个或多个函数参数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `goja.Value` | 函数调用的返回值 |
| r2 | `error` | 错误信息 |


### GetFunction

#### 详细描述
GetFunction 从 JS 引擎中取出某个全局函数并转换为可调用函数

参数:

  - vm: JS 引擎

  - funcName: 函数名



返回值:

  - 可调用的 JS 函数

  - 是否成功获取




Example:

``````````````yak
vm, _ = js.Run(`function sum(a, b) {return a+b;}`)~
sum, ok = js.GetFunction(vm, "sum")
assert ok, "should get function sum"
assert sum(2, 3)~.ToInteger() == 5, "sum(2,3) should be 5"
``````````````


#### 定义

`GetFunction(vm *goja.Runtime, funcName string) (jsFunction, bool)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| vm | `*goja.Runtime` | JS 引擎 |
| funcName | `string` | 函数名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `jsFunction` | 可调用的 JS 函数 |
| r2 | `bool` | 是否成功获取 |


### GetObjectFunction

#### 详细描述
GetObjectFunction 从 JS 引擎中取出某个对象的方法并转换为可调用函数

参数:

  - vm: JS 引擎

  - thisName: 对象名

  - funcName: 方法名



返回值:

  - 可调用的 JS 函数

  - 是否成功获取




Example:

``````````````yak
vm, _ = js.Run(`a = { d: 3, add(a) {return this.d+a} }`)~
add, ok = js.GetObjectFunction(vm, "a", "add")
assert ok, "should get object method add"
assert add(1)~.ToInteger() == 4, "a.add(1) should be 4"
``````````````


#### 定义

`GetObjectFunction(vm *goja.Runtime, thisName string, funcName string) (jsFunction, bool)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| vm | `*goja.Runtime` | JS 引擎 |
| thisName | `string` | 对象名 |
| funcName | `string` | 方法名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `jsFunction` | 可调用的 JS 函数 |
| r2 | `bool` | 是否成功获取 |


### GetSTType

#### 详细描述
GetStatementType 返回 JS AST 节点的类型名（去掉 *ast. 前缀，导出名为 js.GetSTType）

参数:

  - st: JS AST 节点（如 js.Parse 的返回值或其子节点）



返回值:

  - 节点类型名字符串




Example:

``````````````yak
tree = js.Parse("function add(a, b) { return a + b; }")~
println(js.GetSTType(tree))   // OUT: Program
assert js.GetSTType(tree) == "Program", "parsed root node should be Program"
``````````````


#### 定义

`GetSTType(st any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| st | `any` | JS AST 节点（如 js.Parse 的返回值或其子节点） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 节点类型名字符串 |


### New

#### 详细描述
New 创建一个新的 JS 引擎（goja Runtime）并返回

参数:

  - opts: 零个或多个运行选项，如嵌入第三方库或预置变量



返回值:

  - JS 引擎对象，可调用 RunString 执行 JS 代码




Example:

``````````````yak
engine = js.New()
val = engine.RunString("1+1")~.ToInteger()
println(val)   // OUT: 2
assert val == 2, "js engine should evaluate 1+1 to 2"
``````````````


#### 定义

`New(opts ...jsRunOpts) *goja.Runtime`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...jsRunOpts` | 零个或多个运行选项，如嵌入第三方库或预置变量 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*goja.Runtime` | JS 引擎对象，可调用 RunString 执行 JS 代码 |


### Parse

#### 详细描述
Parse 对传入的 JS 代码进行解析并返回 AST 语法树

参数:

  - code: JS 源代码字符串



返回值:

  - 解析得到的 AST 程序节点

  - 错误信息




Example:

``````````````yak
tree = js.Parse(`function add(a, b) { return a + b; }`)~
assert tree != nil, "parse should return a non-nil AST"
println(js.GetSTType(tree))   // OUT: Program
``````````````


#### 定义

`Parse(code string) (*ast.Program, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| code | `string` | JS 源代码字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ast.Program` | 解析得到的 AST 程序节点 |
| r2 | `error` | 错误信息 |


### Run

#### 详细描述
Run 创建新的 JS 引擎并运行传入代码，返回引擎、运行结果值和错误

会尝试自动导入代码中用到的库（CryptoJS 默认导入 V4 版本）

参数:

  - src: 要运行的 JS 代码字符串

  - opts: 零个或多个运行选项，如嵌入第三方库或预置变量



返回值:

  - JS 引擎对象

  - 运行结果值

  - 错误信息




Example:

``````````````yak
_, value = js.Run("1+1")~
println(value.ToInteger())   // OUT: 2
assert value.ToInteger() == 2, "js.Run should evaluate 1+1 to 2"
``````````````


#### 定义

`Run(src any, opts ...jsRunOpts) (*goja.Runtime, goja.Value, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| src | `any` | 要运行的 JS 代码字符串 |
| opts | `...jsRunOpts` | 零个或多个运行选项，如嵌入第三方库或预置变量 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*goja.Runtime` | JS 引擎对象 |
| r2 | `goja.Value` | 运行结果值 |
| r3 | `error` | 错误信息 |


### ToValue

#### 详细描述
ToValue 将一个 Go 值转换为 JS 运行时中的值(JS Value)，便于作为变量注入 JS 环境或与执行结果交互（导出名为 js.ToValue）



参数:

  - i: 任意 Go 值（数字、字符串、布尔、map、slice 等）



返回值:

  - 转换后的 JS 值




Example:

``````````````yak
v = js.ToValue("hello")
assert v != nil, "ToValue should convert a go value to a js value"
``````````````


#### 定义

`ToValue(i any) goja.Value`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 任意 Go 值（数字、字符串、布尔、map、slice 等） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `goja.Value` | 转换后的 JS 值 |


### libCryptoJSV3

#### 详细描述
libCryptoJSV3 是一个 JS 运行选项参数，用于在运行 JS 代码时嵌入 CryptoJS 3.3.0 库

返回值:

  - JS 运行选项




Example:

``````````````yak
_, value = js.Run(`CryptoJS.HmacSHA256("Message", "secret").toString();`, js.libCryptoJSV3())~
assert value.String() == "aa747c502a898200f9e4fa21bac68136f886a0e27aec70ba06daf2e2a5cb5597", "HmacSHA256 should be deterministic"
``````````````


#### 定义

`libCryptoJSV3() jsRunOpts`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `jsRunOpts` | JS 运行选项 |


### libCryptoJSV4

#### 详细描述
libCryptoJSV4 是一个 JS 运行选项参数，用于在运行 JS 代码时嵌入 CryptoJS 4.2.0 库

返回值:

  - JS 运行选项




Example:

``````````````yak
_, value = js.Run(`CryptoJS.HmacSHA256("Message", "secret").toString();`, js.libCryptoJSV4())~
assert value.String() == "aa747c502a898200f9e4fa21bac68136f886a0e27aec70ba06daf2e2a5cb5597", "HmacSHA256 should be deterministic"
``````````````


#### 定义

`libCryptoJSV4() jsRunOpts`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `jsRunOpts` | JS 运行选项 |


### libJSRSASign

#### 详细描述
libJSRSASign 是一个 JS 运行选项参数，用于在运行 JS 代码时嵌入 jsrsasign 10.8.6 库

返回值:

  - JS 运行选项




Example:

``````````````yak
// 示意性示例，需要有效的 PEM 公钥
_, value = js.Run(`KEYUTIL.getKey(pemPublicKey).encrypt("yaklang")`, js.libJSRSASign())~
println(value.String())
``````````````


#### 定义

`libJSRSASign() jsRunOpts`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `jsRunOpts` | JS 运行选项 |


### libJsEncrypt

#### 详细描述
libJsEncrypt 是一个 JS 运行选项参数，用于在运行 JS 代码时嵌入 JSEncrypt 3.3.2 库

返回值:

  - JS 运行选项




Example:

``````````````yak
_, value = js.Run("var encrypt = new JSEncrypt(); 'ok';", js.libJsEncrypt())~
assert value.String() == "ok", "JSEncrypt lib should be embedded successfully"
``````````````


#### 定义

`libJsEncrypt() jsRunOpts`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `jsRunOpts` | JS 运行选项 |


### withVariable

#### 详细描述
withVariable 为 JS 运行设置单个全局变量（导出名为 js.withVariable）

参数:

  - name: 变量名

  - value: 变量值



返回值:

  - JS 运行选项




Example:

``````````````yak
_, value = js.Run("a + b", js.withVariable("a", 1), js.withVariable("b", 2))~
println(value.ToInteger())   // OUT: 3
assert value.ToInteger() == 3, "a + b with injected variables should be 3"
``````````````


#### 定义

`withVariable(name string, value any) jsRunOpts`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 变量名 |
| value | `any` | 变量值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `jsRunOpts` | JS 运行选项 |


### withVariables

#### 详细描述
withVariables 为 JS 运行批量设置多个全局变量（导出名为 js.withVariables）

参数:

  - vars: 变量名到变量值的映射



返回值:

  - JS 运行选项




Example:

``````````````yak
_, value = js.Run("a + b", js.withVariables({"a": 10, "b": 5}))~
println(value.ToInteger())   // OUT: 15
assert value.ToInteger() == 15, "a + b with injected variables should be 15"
``````````````


#### 定义

`withVariables(vars map[string]any) jsRunOpts`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| vars | `map[string]any` | 变量名到变量值的映射 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `jsRunOpts` | JS 运行选项 |


