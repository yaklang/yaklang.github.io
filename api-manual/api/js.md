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
| [.](#) ||
| [js.ASTWalk](#astwalk) |ASTWalk 对传入的JS代码进行AST遍历，返回遍历后的结果(包含字面量，标识符，语法错误)和错误  |
| [js.CallFunctionFromCode](#callfunctionfromcode) |CallFunctionFromCode 从传入的代码中调用指定的JS函数并返回调用结果  第一个参数为包含JS代码的字符串  第二个参数为要调用的JS函数名  后续参数为零个到多个函数参数  |
| [js.GetFunction](#getfunction) |GetFunction 将传入的Value转换为可以调用的对象(Object)函数  第一个参数为JS引擎  第二个参数为函数名字  |
| [js.GetObjectFunction](#getobjectfunction) |GetObjectFunction 将传入的Value转换为可以调用的对象(Object)函数  第一个参数为JS引擎  第二个参数为Object名字  第三个参数为方法名字  |
| [js.GetSTType](#getsttype) ||
| [js.New](#new) |New 创建新的JS引擎并返回  |
| [js.Parse](#parse) |Parse 对传入的JS代码进行解析并返回解析后的AST树和错误  |
| [js.Run](#run) |Run 创建新的JS引擎并运行传入的代码并返回JS引擎结构体引用，运行值和错误  第一个参数为运行的代码字符串  后续参数为零个到多个运行选项，用于对此次运行进行配置，例如嵌入常用的JS第三方库等  现在会尝试自动导入代码中使用到的库, CryptoJS会导入V4版本  |
| [js.libCryptoJSV3](#libcryptojsv3) |libCryptoJSV3 是一个JS运行选项参数，用于在运行JS代码时嵌入CryptoJS 3.3.0库  |
| [js.libCryptoJSV4](#libcryptojsv4) |libCryptoJSV4 是一个JS运行选项参数，用于在运行JS代码时嵌入CryptoJS 4.2.0库  |
| [js.libJSRSASign](#libjsrsasign) |libJSRSASign 是一个JS运行选项参数，用于在运行JS代码时嵌入jsrsasign 10.8.6库  |
| [js.libJsEncrypt](#libjsencrypt) |_libJsEncrypt 是一个JS运行选项参数，用于在运行JS代码时嵌入JsEncrypt 3.3.2库  |
| [js.withVariable](#withvariable) ||
| [js.withVariables](#withvariables) ||


## 函数定义
### 

#### 详细描述


#### 定义

``


### ASTWalk

#### 详细描述
ASTWalk 对传入的JS代码进行AST遍历，返回遍历后的结果(包含字面量，标识符，语法错误)和错误

Example:
```
code = `function add(a, b) { return a + b; }`
res = js.ASTWalk(code)~
dump(res)
```


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


### CallFunctionFromCode

#### 详细描述
CallFunctionFromCode 从传入的代码中调用指定的JS函数并返回调用结果

第一个参数为包含JS代码的字符串

第二个参数为要调用的JS函数名

后续参数为零个到多个函数参数

Example:
```
value = js.CallFunctionFromCode(`function add(a, b) { return a + b; }`, "add", 1, 2)~
println(value.String())
```


#### 定义

`CallFunctionFromCode(src any, funcName string, params ...any) (goja.Value, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| src | `any` |   |
| funcName | `string` |   |
| params | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `goja.Value` |   |
| r2 | `error` |   |


### GetFunction

#### 详细描述
GetFunction 将传入的Value转换为可以调用的对象(Object)函数

第一个参数为JS引擎

第二个参数为函数名字

Example:
```
vm, _ = js.Run(`function sum(a, b) {return a+b;}`)~
sum, ok = js.GetFunction(vm,"sum")
if ok {
println(sum(2,3).ToInteger()) // 5
}
```


#### 定义

`GetFunction(vm *goja.Runtime, funcName string) (jsFunction, bool)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| vm | `*goja.Runtime` |   |
| funcName | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `jsFunction` |   |
| r2 | `bool` |   |


### GetObjectFunction

#### 详细描述
GetObjectFunction 将传入的Value转换为可以调用的对象(Object)函数

第一个参数为JS引擎

第二个参数为Object名字

第三个参数为方法名字

Example:
```
vm, _ = js.Run(`a = {
d: 3,
add(a) {return this.d+a},
}`)~
add, ok = js.GetObjectFunction(vm, "a", "add")
if ok {
println(add(1).ToInteger()) // 4
}
```


#### 定义

`GetObjectFunction(vm *goja.Runtime, thisName string, funcName string) (jsFunction, bool)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| vm | `*goja.Runtime` |   |
| thisName | `string` |   |
| funcName | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `jsFunction` |   |
| r2 | `bool` |   |


### GetSTType

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


### New

#### 详细描述
New 创建新的JS引擎并返回

Example:
```
engine = js.New()
val = engine.RunString("1+1")~.ToInteger()~
println(val)
```


#### 定义

`New(opts ...jsRunOpts) *goja.Runtime`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...jsRunOpts` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*goja.Runtime` |   |


### Parse

#### 详细描述
Parse 对传入的JS代码进行解析并返回解析后的AST树和错误

Example:
```
code = `function add(a, b) { return a + b; }`
tree = js.Parse(code)~
dump(tree)
```


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


### Run

#### 详细描述
Run 创建新的JS引擎并运行传入的代码并返回JS引擎结构体引用，运行值和错误

第一个参数为运行的代码字符串

后续参数为零个到多个运行选项，用于对此次运行进行配置，例如嵌入常用的JS第三方库等

现在会尝试自动导入代码中使用到的库, CryptoJS会导入V4版本

Example:
```
_, value = js.Run(`CryptoJS.HmacSHA256("Message", "secret").toString();`, js.libCryptoJSV3())~
println(value.String())
```


#### 定义

`Run(src any, opts ...jsRunOpts) (*goja.Runtime, goja.Value, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| src | `any` |   |
| opts | `...jsRunOpts` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*goja.Runtime` |   |
| r2 | `goja.Value` |   |
| r3 | `error` |   |


### libCryptoJSV3

#### 详细描述
libCryptoJSV3 是一个JS运行选项参数，用于在运行JS代码时嵌入CryptoJS 3.3.0库

Example:
```
_, value = js.Run(`CryptoJS.HmacSHA256("Message", "secret").toString();`, js.libCryptoJSV3())~
println(value.String())
```


#### 定义

`libCryptoJSV3() jsRunOpts`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `jsRunOpts` |   |


### libCryptoJSV4

#### 详细描述
libCryptoJSV4 是一个JS运行选项参数，用于在运行JS代码时嵌入CryptoJS 4.2.0库

Example:
```
_, value = js.Run(`CryptoJS.HmacSHA256("Message", "secret").toString();`, js.libCryptoJSV4())~
println(value.String())
```


#### 定义

`libCryptoJSV4() jsRunOpts`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `jsRunOpts` |   |


### libJSRSASign

#### 详细描述
libJSRSASign 是一个JS运行选项参数，用于在运行JS代码时嵌入jsrsasign 10.8.6库

Example:
```
_, value = js.Run(`KEYUTIL.getKey(pemPublicKey).encrypt("yaklang")`, js.libJSRSASign())~
println(value.String())
```


#### 定义

`libJSRSASign() jsRunOpts`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `jsRunOpts` |   |


### libJsEncrypt

#### 详细描述
_libJsEncrypt 是一个JS运行选项参数，用于在运行JS代码时嵌入JsEncrypt 3.3.2库

Example:
```
_, value = js.Run("var encrypt = new JSEncrypt();", js._libJsEncrypt())~
println(value.String())
```


#### 定义

`libJsEncrypt() jsRunOpts`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `jsRunOpts` |   |


### withVariable

#### 详细描述


#### 定义

`withVariable(name string, value any) jsRunOpts`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| value | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `jsRunOpts` |   |


### withVariables

#### 详细描述


#### 定义

`withVariables(vars map[string]any) jsRunOpts`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| vars | `map[string]any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `jsRunOpts` |   |


