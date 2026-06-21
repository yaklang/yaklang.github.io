# js {#library-js}

`js` 库内嵌一个 JavaScript 运行时（goja），可在 yak 脚本中执行 JS 代码、调用 JS 函数、解析 JS AST，并内置 CryptoJS、JSEncrypt、jsrsasign 等常用前端加密库，常用于还原前端加密逻辑、对抗 JS 混淆与参数加签。

典型使用场景：

- 执行与调用：`js.Run` 执行 JS 代码，`js.CallFunctionFromCode` 直接调用源码中的函数，`js.New` 创建可复用运行时，`js.ToValue` 在 yak/JS 值间转换。
- 解析：`js.Parse` / `js.ASTWalk` 解析与遍历 JS AST（用于分析前端逻辑）。
- 内置加密库：`js.libCryptoJSV3` / `js.libCryptoJSV4` / `js.libJSRSASign` / `js.libJsEncrypt` 注入常用前端加密库，`js.withVariable(s)` 注入变量。

与相邻库的关系：`js` 常配合 `crawler`/`crawlerx`（前端逻辑分析）、`codec`（加解密）、`fuzz`（构造加密参数）使用，用于"用前端的算法生成请求参数"的场景。

> 共 15 个函数、6 个实例

## 实例

|实例名|类型|说明|
|:--|:--|:--|
| FalseValue | `goja.valueBool` | false |
| NaNValue | `goja.valueFloat` | NaN |
| NullValue | `github.com/dop251/goja.valueNull` | null |
| PoweredBy | `string` | &#34;github.com/dop251/goja&#34; |
| TrueValue | `goja.valueBool` | true |
| UndefinedValue | `github.com/dop251/goja.valueUndefined` | undefined |

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [js.ASTWalk](#astwalk) | `code string` | `*ASTWalkerResult, error` | 对传入的 JS 代码进行 AST 遍历，收集字面量、标识符与语法错误（导出名为 js.ASTWalk） |
| [js.GetFunction](#getfunction) | `vm *goja.Runtime, funcName string` | `jsFunction, bool` | 从 JS 引擎中取出某个全局函数并转换为可调用函数 |
| [js.GetObjectFunction](#getobjectfunction) | `vm *goja.Runtime, thisName string, funcName string` | `jsFunction, bool` | 从 JS 引擎中取出某个对象的方法并转换为可调用函数 |
| [js.GetSTType](#getsttype) | `st any` | `string` | GetStatementType 返回 JS AST 节点的类型名（去掉 *ast. 前缀，导出名为 js.GetSTType） |
| [js.Parse](#parse) | `code string` | `*ast.Program, error` | 对传入的 JS 代码进行解析并返回 AST 语法树 |
| [js.ToValue](#tovalue) | `i any` | `goja.Value` | 将一个 Go 值转换为 JS 运行时中的值(JS Value)，便于作为变量注入 JS 环境或与执行结果交互（导出名为 js.ToValue） |
| [js.libCryptoJSV3](#libcryptojsv3) | - | `jsRunOpts` | 是一个 JS 运行选项参数，用于在运行 JS 代码时嵌入 CryptoJS 3.3.0 库 |
| [js.libCryptoJSV4](#libcryptojsv4) | - | `jsRunOpts` | 是一个 JS 运行选项参数，用于在运行 JS 代码时嵌入 CryptoJS 4.2.0 库 |
| [js.libJSRSASign](#libjsrsasign) | - | `jsRunOpts` | 是一个 JS 运行选项参数，用于在运行 JS 代码时嵌入 jsrsasign 10.8.6 库 |
| [js.libJsEncrypt](#libjsencrypt) | - | `jsRunOpts` | 是一个 JS 运行选项参数，用于在运行 JS 代码时嵌入 JSEncrypt 3.3.2 库 |
| [js.withVariable](#withvariable) | `name string, value any` | `jsRunOpts` | 为 JS 运行设置单个全局变量（导出名为 js.withVariable） |
| [js.withVariables](#withvariables) | `vars map[string]any` | `jsRunOpts` | 为 JS 运行批量设置多个全局变量（导出名为 js.withVariables） |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [js.CallFunctionFromCode](#callfunctionfromcode) | `src any, funcName string, params ...any` | `goja.Value, error` | 从传入代码中调用指定的 JS 函数并返回结果 |
| [js.New](#new) | `opts ...jsRunOpts` | `*goja.Runtime` | 创建一个新的 JS 引擎（goja Runtime）并返回 |
| [js.Run](#run) | `src any, opts ...jsRunOpts` | `*goja.Runtime, goja.Value, error` | 创建新的 JS 引擎并运行传入代码，返回引擎、运行结果值和错误 |

## 函数详情

### ASTWalk {#astwalk}

```go
ASTWalk(code string) (*ASTWalkerResult, error)
```

对传入的 JS 代码进行 AST 遍历，收集字面量、标识符与语法错误（导出名为 js.ASTWalk）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| code | `string` | JS 源代码字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*ASTWalkerResult` | 遍历结果（含字符串字面量、标识符、语法错误等） |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
res = js.ASTWalk(`var name = "yak"; foo("bar");`)~
dump(res)
``````````````

---

### GetFunction {#getfunction}

```go
GetFunction(vm *goja.Runtime, funcName string) (jsFunction, bool)
```

从 JS 引擎中取出某个全局函数并转换为可调用函数

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| vm | `*goja.Runtime` | JS 引擎 |
| funcName | `string` | 函数名 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `jsFunction` | 可调用的 JS 函数 |
| r2 | `bool` | 是否成功获取 |

**示例**

``````````````yak
vm, _ = js.Run(`function sum(a, b) {return a+b;}`)~
sum, ok = js.GetFunction(vm, "sum")
assert ok, "should get function sum"
assert sum(2, 3)~.ToInteger() == 5, "sum(2,3) should be 5"
``````````````

---

### GetObjectFunction {#getobjectfunction}

```go
GetObjectFunction(vm *goja.Runtime, thisName string, funcName string) (jsFunction, bool)
```

从 JS 引擎中取出某个对象的方法并转换为可调用函数

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| vm | `*goja.Runtime` | JS 引擎 |
| thisName | `string` | 对象名 |
| funcName | `string` | 方法名 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `jsFunction` | 可调用的 JS 函数 |
| r2 | `bool` | 是否成功获取 |

**示例**

``````````````yak
vm, _ = js.Run(`a = { d: 3, add(a) {return this.d+a} }`)~
add, ok = js.GetObjectFunction(vm, "a", "add")
assert ok, "should get object method add"
assert add(1)~.ToInteger() == 4, "a.add(1) should be 4"
``````````````

---

### GetSTType {#getsttype}

```go
GetSTType(st any) string
```

GetStatementType 返回 JS AST 节点的类型名（去掉 *ast. 前缀，导出名为 js.GetSTType）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| st | `any` | JS AST 节点（如 js.Parse 的返回值或其子节点） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 节点类型名字符串 |

**示例**

``````````````yak
tree = js.Parse("function add(a, b) { return a + b; }")~
println(js.GetSTType(tree))   // OUT: Program
assert js.GetSTType(tree) == "Program", "parsed root node should be Program"
``````````````

---

### Parse {#parse}

```go
Parse(code string) (*ast.Program, error)
```

对传入的 JS 代码进行解析并返回 AST 语法树

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| code | `string` | JS 源代码字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*ast.Program` | 解析得到的 AST 程序节点 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
tree = js.Parse(`function add(a, b) { return a + b; }`)~
assert tree != nil, "parse should return a non-nil AST"
println(js.GetSTType(tree))   // OUT: Program
``````````````

---

### ToValue {#tovalue}

```go
ToValue(i any) goja.Value
```

将一个 Go 值转换为 JS 运行时中的值(JS Value)，便于作为变量注入 JS 环境或与执行结果交互（导出名为 js.ToValue）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 任意 Go 值（数字、字符串、布尔、map、slice 等） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `goja.Value` | 转换后的 JS 值 |

**示例**

``````````````yak
v = js.ToValue("hello")
assert v != nil, "ToValue should convert a go value to a js value"
``````````````

---

### libCryptoJSV3 {#libcryptojsv3}

```go
libCryptoJSV3() jsRunOpts
```

是一个 JS 运行选项参数，用于在运行 JS 代码时嵌入 CryptoJS 3.3.0 库

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `jsRunOpts` | JS 运行选项 |

**示例**

``````````````yak
_, value = js.Run(`CryptoJS.HmacSHA256("Message", "secret").toString();`, js.libCryptoJSV3())~
assert value.String() == "aa747c502a898200f9e4fa21bac68136f886a0e27aec70ba06daf2e2a5cb5597", "HmacSHA256 should be deterministic"
``````````````

---

### libCryptoJSV4 {#libcryptojsv4}

```go
libCryptoJSV4() jsRunOpts
```

是一个 JS 运行选项参数，用于在运行 JS 代码时嵌入 CryptoJS 4.2.0 库

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `jsRunOpts` | JS 运行选项 |

**示例**

``````````````yak
_, value = js.Run(`CryptoJS.HmacSHA256("Message", "secret").toString();`, js.libCryptoJSV4())~
assert value.String() == "aa747c502a898200f9e4fa21bac68136f886a0e27aec70ba06daf2e2a5cb5597", "HmacSHA256 should be deterministic"
``````````````

---

### libJSRSASign {#libjsrsasign}

```go
libJSRSASign() jsRunOpts
```

是一个 JS 运行选项参数，用于在运行 JS 代码时嵌入 jsrsasign 10.8.6 库

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `jsRunOpts` | JS 运行选项 |

**示例**

``````````````yak
// 无法本地验证: 需要在 JS 中先定义有效的 PEM 公钥变量 pemPublicKey
// 加载 jsrsasign 库后即可在 JS 里用 KEYUTIL 做 RSA 加解密
_, value = js.Run(`KEYUTIL.getKey(pemPublicKey).encrypt("yaklang")`, js.libJSRSASign())~
println(value.String())
``````````````

---

### libJsEncrypt {#libjsencrypt}

```go
libJsEncrypt() jsRunOpts
```

是一个 JS 运行选项参数，用于在运行 JS 代码时嵌入 JSEncrypt 3.3.2 库

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `jsRunOpts` | JS 运行选项 |

**示例**

``````````````yak
_, value = js.Run("var encrypt = new JSEncrypt(); 'ok';", js.libJsEncrypt())~
assert value.String() == "ok", "JSEncrypt lib should be embedded successfully"
``````````````

---

### withVariable {#withvariable}

```go
withVariable(name string, value any) jsRunOpts
```

为 JS 运行设置单个全局变量（导出名为 js.withVariable）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 变量名 |
| value | `any` | 变量值 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `jsRunOpts` | JS 运行选项 |

**示例**

``````````````yak
_, value = js.Run("a + b", js.withVariable("a", 1), js.withVariable("b", 2))~
println(value.ToInteger())   // OUT: 3
assert value.ToInteger() == 3, "a + b with injected variables should be 3"
``````````````

---

### withVariables {#withvariables}

```go
withVariables(vars map[string]any) jsRunOpts
```

为 JS 运行批量设置多个全局变量（导出名为 js.withVariables）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| vars | `map[string]any` | 变量名到变量值的映射 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `jsRunOpts` | JS 运行选项 |

**示例**

``````````````yak
_, value = js.Run("a + b", js.withVariables({"a": 10, "b": 5}))~
println(value.ToInteger())   // OUT: 15
assert value.ToInteger() == 15, "a + b with injected variables should be 15"
``````````````

---

## 可变参数函数详情

### CallFunctionFromCode {#callfunctionfromcode}

```go
CallFunctionFromCode(src any, funcName string, params ...any) (goja.Value, error)
```

从传入代码中调用指定的 JS 函数并返回结果

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| src | `any` | 包含 JS 代码的字符串 |
| funcName | `string` | 要调用的 JS 函数名 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| params | `...any` | 零个或多个函数参数 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `goja.Value` | 函数调用的返回值 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
value = js.CallFunctionFromCode(`function add(a, b) { return a + b; }`, "add", 1, 2)~
println(value.ToInteger())   // OUT: 3
assert value.ToInteger() == 3, "add(1,2) should be 3"
``````````````

---

### New {#new}

```go
New(opts ...jsRunOpts) *goja.Runtime
```

创建一个新的 JS 引擎（goja Runtime）并返回

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...jsRunOpts` | 零个或多个运行选项，如嵌入第三方库或预置变量 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*goja.Runtime` | JS 引擎对象，可调用 RunString 执行 JS 代码 |

**示例**

``````````````yak
engine = js.New()
val = engine.RunString("1+1")~.ToInteger()
println(val)   // OUT: 2
assert val == 2, "js engine should evaluate 1+1 to 2"
``````````````

---

### Run {#run}

```go
Run(src any, opts ...jsRunOpts) (*goja.Runtime, goja.Value, error)
```

创建新的 JS 引擎并运行传入代码，返回引擎、运行结果值和错误

会尝试自动导入代码中用到的库（CryptoJS 默认导入 V4 版本）

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| src | `any` | 要运行的 JS 代码字符串 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...jsRunOpts` | 零个或多个运行选项，如嵌入第三方库或预置变量 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*goja.Runtime` | JS 引擎对象 |
| r2 | `goja.Value` | 运行结果值 |
| r3 | `error` | 错误信息 |

**示例**

``````````````yak
_, value = js.Run("1+1")~
println(value.ToInteger())   // OUT: 2
assert value.ToInteger() == 2, "js.Run should evaluate 1+1 to 2"
``````````````

---

