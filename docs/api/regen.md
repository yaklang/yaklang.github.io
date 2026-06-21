# regen {#library-regen}

`regen` 库是"反向正则"——根据一个正则表达式生成能匹配它的字符串，常用于批量生成测试数据、字典与符合特定格式的 Payload。

典型使用场景：

- 全量生成：`regen.Generate(pattern)` / `regen.MustGenerate` 生成所有匹配字符串（注意模式不要过于宽泛导致组合爆炸）。
- 单条生成：`regen.GenerateOne` / `regen.MustGenerateOne` 生成一条，`regen.GenerateVisibleOne` 生成可见字符串。
- 流式生成：`regen.GenerateStream` / `regen.GenerateOneStream` 在上下文控制下流式产出，适合大规模生成。

与相邻库的关系：`regen` 与 `re`（正则匹配）互为逆操作，产出的数据常喂给 `fuzz`（变异测试）、`brute`/`dictutil`（字典）使用。提示：正则模式建议用反引号原始串书写。

> 共 9 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [regen.Generate](#generate) | `pattern string` | `[]string, error` | 根据正则表达式生成所有匹配的字符串，返回生成的字符串切片和错误 |
| [regen.GenerateOne](#generateone) | `pattern string` | `string, error` | 根据正则表达式生成一个匹配的字符串，返回生成的字符串和错误 |
| [regen.GenerateVisibleOne](#generatevisibleone) | `pattern string` | `string, error` | 根据正则表达式生成一个匹配的字符串(都是可见字符)，返回生成的字符串和错误 |
| [regen.MustGenerate](#mustgenerate) | `pattern string` | `[]string` | 根据正则表达式生成所有匹配的字符串，如果生成失败则会崩溃，返回生成的字符串切片 |
| [regen.MustGenerateOne](#mustgenerateone) | `pattern string` | `string` | 根据正则表达式生成一个匹配的字符串，如果生成失败则会崩溃，返回生成的字符串 |
| [regen.MustGenerateVisibleOne](#mustgeneratevisibleone) | `pattern string` | `string` | 根据正则表达式生成一个匹配的字符串(都是可见字符)，如果生成失败则会崩溃，返回生成的字符串 |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [regen.GenerateOneStream](#generateonestream) | `pattern string, ctxs ...context.Context` | `string, error` | GenerateStream 根据正则表达式流式生成一个匹配的字符串，返回生成的字符串和错误 |
| [regen.GenerateStream](#generatestream) | `pattern string, ctxs ...context.Context` | `chan string, context.CancelFunc, error` | 根据正则表达式流式生成所有匹配的字符串，返回生成的字符串通道和生成取消函数和错误 |
| [regen.GenerateVisibleOneStream](#generatevisibleonestream) | `pattern string, ctxs ...context.Context` | `string, error` | 根据正则表达式流式生成一个匹配的字符串(都是可见字符)，返回生成的字符串和错误 |

## 函数详情

### Generate {#generate}

```go
Generate(pattern string) ([]string, error)
```

根据正则表达式生成所有匹配的字符串，返回生成的字符串切片和错误

对于一些可能匹配多次的元字符:

*     : 则只会生成匹配 0 次或 1 次的字符串

+     : 则只会生成匹配 1 次或 2 次的字符串

{n,m} : 则会生成匹配 n 次到 m 次的字符串

{n,}  : 则只会生成匹配 n 次或 n+1 次的字符串

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| pattern | `string` | 用于生成字符串的正则表达式 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]string` | 所有匹配字符串组成的切片 |
| r2 | `error` | 编译正则失败时返回的错误 |

**示例**

``````````````yak
// VARS: 字符集会枚举出全部可能
result = regen.Generate("[ab]c")~
// STDOUT: 打印生成结果
println(result)   // OUT: [ac bc]
// assert: 枚举出两个组合
assert len(result) == 2, "Generate should enumerate ac and bc"
``````````````

---

### GenerateOne {#generateone}

```go
GenerateOne(pattern string) (string, error)
```

根据正则表达式生成一个匹配的字符串，返回生成的字符串和错误

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| pattern | `string` | 用于生成字符串的正则表达式 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 生成的一个匹配字符串 |
| r2 | `error` | 编译正则失败时返回的错误 |

**示例**

``````````````yak
// VARS: 字面量模式只有唯一结果
result = regen.GenerateOne("abc")~
// STDOUT: 打印生成结果
println(result)   // OUT: abc
// assert: 锁定结论
assert result == "abc", "literal pattern should generate itself"
``````````````

---

### GenerateVisibleOne {#generatevisibleone}

```go
GenerateVisibleOne(pattern string) (string, error)
```

根据正则表达式生成一个匹配的字符串(都是可见字符)，返回生成的字符串和错误

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| pattern | `string` | 用于生成字符串的正则表达式 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 生成的一个全部为可见字符的匹配字符串 |
| r2 | `error` | 编译正则失败时返回的错误 |

**示例**

``````````````yak
// VARS: 字面量模式只有唯一结果
result = regen.GenerateVisibleOne("abc")~
// STDOUT: 打印生成结果
println(result)   // OUT: abc
// assert: 锁定结论
assert result == "abc", "literal pattern should generate itself"
``````````````

---

### MustGenerate {#mustgenerate}

```go
MustGenerate(pattern string) []string
```

根据正则表达式生成所有匹配的字符串，如果生成失败则会崩溃，返回生成的字符串切片

对于一些可能匹配多次的元字符:

*     : 则只会生成匹配 0 次或 1 次的字符串

+     : 则只会生成匹配 1 次或 2 次的字符串

{n,m} : 则会生成匹配 n 次到 m 次的字符串

{n,}  : 则只会生成匹配 n 次或 n+1 次的字符串

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| pattern | `string` | 用于生成字符串的正则表达式 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]string` | 所有匹配字符串组成的切片（编译失败会直接 panic） |

**示例**

``````````````yak
// VARS: 字符集会枚举出全部可能
result = regen.MustGenerate("[ab]c")
// STDOUT: 打印生成结果
println(result)   // OUT: [ac bc]
// assert: 枚举出两个组合
assert len(result) == 2, "MustGenerate should enumerate ac and bc"
``````````````

---

### MustGenerateOne {#mustgenerateone}

```go
MustGenerateOne(pattern string) string
```

根据正则表达式生成一个匹配的字符串，如果生成失败则会崩溃，返回生成的字符串

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| pattern | `string` | 用于生成字符串的正则表达式 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 生成的一个匹配字符串（编译失败会直接 panic） |

**示例**

``````````````yak
// VARS: 字面量模式只有唯一结果
result = regen.MustGenerateOne("abc")
// STDOUT: 打印生成结果
println(result)   // OUT: abc
// assert: 锁定结论
assert result == "abc", "literal pattern should generate itself"
``````````````

---

### MustGenerateVisibleOne {#mustgeneratevisibleone}

```go
MustGenerateVisibleOne(pattern string) string
```

根据正则表达式生成一个匹配的字符串(都是可见字符)，如果生成失败则会崩溃，返回生成的字符串

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| pattern | `string` | 用于生成字符串的正则表达式 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 生成的一个全部为可见字符的匹配字符串（编译失败会直接 panic） |

**示例**

``````````````yak
// VARS: 字面量模式只有唯一结果
result = regen.MustGenerateVisibleOne("abc")
// STDOUT: 打印生成结果
println(result)   // OUT: abc
// assert: 锁定结论
assert result == "abc", "literal pattern should generate itself"
``````````````

---

## 可变参数函数详情

### GenerateOneStream {#generateonestream}

```go
GenerateOneStream(pattern string, ctxs ...context.Context) (string, error)
```

GenerateStream 根据正则表达式流式生成一个匹配的字符串，返回生成的字符串和错误

对于一些可能匹配多次的元字符:

*     : 则只会生成匹配 0 次或 1 次的字符串

+     : 则只会生成匹配 1 次或 2 次的字符串

{n,m} : 则会生成匹配 n 次到 m 次的字符串

{n,}  : 则只会生成匹配 n 次或 n+1 次的字符串

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| pattern | `string` | 用于生成字符串的正则表达式 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| ctxs | `...context.Context` | 可选的 context，用于提前取消生成 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 生成的一个匹配字符串 |
| r2 | `error` | 编译正则失败时返回的错误 |

**示例**

``````````````yak
regen.GenerateOneStream("[a-z]+") // a-z 中随机一个字母
regen.GenerateOneStream(`^(13[0-9]|14[57]|15[0-9]|18[0-9])\d{8}$`) // 生成一个手机号
``````````````

---

### GenerateStream {#generatestream}

```go
GenerateStream(pattern string, ctxs ...context.Context) (chan string, context.CancelFunc, error)
```

根据正则表达式流式生成所有匹配的字符串，返回生成的字符串通道和生成取消函数和错误

对于一些可能匹配多次的元字符:

*     : 则只会生成匹配 0 次或 1 次的字符串

+     : 则只会生成匹配 1 次或 2 次的字符串

{n,m} : 则会生成匹配 n 次到 m 次的字符串

{n,}  : 则只会生成匹配 n 次或 n+1 次的字符串

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| pattern | `string` | 用于生成字符串的正则表达式 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| ctxs | `...context.Context` | 可选的 context，用于提前取消生成 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `chan string` | 流式输出生成结果的字符串通道 |
| r2 | `context.CancelFunc` | 用于停止生成的取消函数 |
| r3 | `error` | 编译正则失败时返回的错误 |

**示例**

``````````````yak
ch, cancel, err = regen.GenerateStream("[a-z]+")
for s = range ch {
println(s)
}
``````````````

---

### GenerateVisibleOneStream {#generatevisibleonestream}

```go
GenerateVisibleOneStream(pattern string, ctxs ...context.Context) (string, error)
```

根据正则表达式流式生成一个匹配的字符串(都是可见字符)，返回生成的字符串和错误

对于一些可能匹配多次的元字符:

*     : 则只会生成匹配 0 次或 1 次的字符串

+     : 则只会生成匹配 1 次或 2 次的字符串

{n,m} : 则会生成匹配 n 次到 m 次的字符串

{n,}  : 则只会生成匹配 n 次或 n+1 次的字符串

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| pattern | `string` | 用于生成字符串的正则表达式 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| ctxs | `...context.Context` | 可选的 context，用于提前取消生成 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 生成的一个全部为可见字符的匹配字符串 |
| r2 | `error` | 编译正则失败时返回的错误 |

**示例**

``````````````yak
regen.GenerateVisibleOneStream("[a-z]") // a-z 中随机一个字母
regen.GenerateVisibleOneStream(`^(13[0-9]|14[57]|15[0-9]|18[0-9])\d{8}$`) // 生成一个手机号
``````````````

---

