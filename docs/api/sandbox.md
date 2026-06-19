# sandbox

|函数名|函数描述/介绍|
|:------|:--------|
| [sandbox.Create](#create) |Create 创建一个沙箱(Sandbox)，用于在受限环境中执行表达式或代码 参数: - opts: 可选配置，如 sandbox.library(...) 注入外部库 返回值: - 沙箱对象，可调用 ExecuteAsExpression / ExecuteAsBoolean 等方法|
| [sandbox.library](#library) |library 生成一个沙箱配置项，向沙箱注入外部库(函数/变量表) 参数: - lib: 要注入的外部库，键为名称，值为函数或变量 返回值: - 可传给 sandbox.Create 的配置项|


## 函数定义
### Create

#### 详细描述
Create 创建一个沙箱(Sandbox)，用于在受限环境中执行表达式或代码

参数:

  - opts: 可选配置，如 sandbox.library(...) 注入外部库



返回值:

  - 沙箱对象，可调用 ExecuteAsExpression / ExecuteAsBoolean 等方法




Example:

``````````````yak
// VARS: 创建沙箱并求值表达式
sb = sandbox.Create()
result = sb.ExecuteAsExpression("1 + 1")~
// STDOUT: 打印求值结果
println(result)   // OUT: 2
// assert: 锁定结论
assert result == 2, "sandbox should evaluate the expression"
``````````````


#### 定义

`Create(opts ...SandboxOption) *Sandbox`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...SandboxOption` | 可选配置，如 sandbox.library(...) 注入外部库 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*Sandbox` | 沙箱对象，可调用 ExecuteAsExpression / ExecuteAsBoolean 等方法 |


### library

#### 详细描述
library 生成一个沙箱配置项，向沙箱注入外部库(函数/变量表)

参数:

  - lib: 要注入的外部库，键为名称，值为函数或变量



返回值:

  - 可传给 sandbox.Create 的配置项




Example:

``````````````yak
// VARS: 注入自定义变量后在沙箱表达式中使用
sb = sandbox.Create(sandbox.library({"base": 10}))
result = sb.ExecuteAsExpression("base + 5")~
// STDOUT: 打印求值结果
println(result)   // OUT: 15
// assert: 注入的变量可在沙箱中使用
assert result == 15, "injected library variable should be usable in sandbox"
``````````````


#### 定义

`library(lib map[string]any) SandboxOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| lib | `map[string]any` | 要注入的外部库，键为名称，值为函数或变量 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `SandboxOption` | 可传给 sandbox.Create 的配置项 |


