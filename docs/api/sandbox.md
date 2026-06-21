# sandbox {#library-sandbox}

`sandbox` 库提供受限的代码执行沙箱，在隔离、可控的库环境中执行表达式/代码，常用于安全地运行不可信片段或限定可用能力的脚本求值。

典型使用场景：

- 创建沙箱：`sandbox.Create(opts...)` 创建沙箱实例，`sandbox.library` 注入允许使用的库/变量集合，从而在受控环境里执行代码。

与相邻库的关系：`sandbox` 与 `dyn`（动态执行）相对——后者在完整运行时执行，前者强调隔离与能力收敛，适合执行外部输入的表达式。

> 共 2 个函数

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [sandbox.Create](#create) | `opts ...SandboxOption` | `*Sandbox` | 创建一个沙箱(Sandbox)，用于在受限环境中执行表达式或代码 |

## 可变参数函数详情

### Create {#create}

```go
Create(opts ...SandboxOption) *Sandbox
```

创建一个沙箱(Sandbox)，用于在受限环境中执行表达式或代码

**可选参数**

可作为可变参数 `opts ...SandboxOption` 传入选项；共 1 个可用选项，详见 [SandboxOption 选项列表](#option-sandboxoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*Sandbox` | 沙箱对象，可调用 ExecuteAsExpression / ExecuteAsBoolean 等方法 |

**示例**

``````````````yak
// VARS: 创建沙箱并求值表达式
sb = sandbox.Create()
result = sb.ExecuteAsExpression("1 + 1")~
// STDOUT: 打印求值结果
println(result)   // OUT: 2
// assert: 锁定结论
assert result == 2, "sandbox should evaluate the expression"
``````````````

---

## 可变参数选项列表

以下按选项类型汇总全部可变参数选项(原先重复在各主函数下的选项表已收拢到此处)：

### 1. 类型：SandboxOption {#option-sandboxoption}

涉及到的函数有：[sandbox.Create](#create)

|选项函数|参数|返回值|说明|
|:--|:--|:--|:--|
| `sandbox.library` | `lib map[string]any` | `SandboxOption` | 生成一个沙箱配置项，向沙箱注入外部库(函数/变量表) |

