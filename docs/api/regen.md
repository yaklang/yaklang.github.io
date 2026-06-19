# regen

|函数名|函数描述/介绍|
|:------|:--------|
| [regen.Generate](#generate) |Generate 根据正则表达式生成所有匹配的字符串，返回生成的字符串切片和错误 对于一些可能匹配多次的元字符: * : 则只会生成匹配 0 次或 1 次的字符串 + : 则只会生成匹配 1 次或 2 次的字符串 {n,m} : 则会生成匹配 n 次到 m 次的字符串 {n,} : 则只会生成匹配 ...|
| [regen.GenerateOne](#generateone) |GenerateOne 根据正则表达式生成一个匹配的字符串，返回生成的字符串和错误 参数: - pattern: 用于生成字符串的正则表达式 返回值: - 生成的一个匹配字符串 - 编译正则失败时返回的错误|
| [regen.GenerateOneStream](#generateonestream) |GenerateStream 根据正则表达式流式生成一个匹配的字符串，返回生成的字符串和错误 对于一些可能匹配多次的元字符: * : 则只会生成匹配 0 次或 1 次的字符串 + : 则只会生成匹配 1 次或 2 次的字符串 {n,m} : 则会生成匹配 n 次到 m 次的字符串 {n,} : 则只...|
| [regen.GenerateStream](#generatestream) |GenerateStream 根据正则表达式流式生成所有匹配的字符串，返回生成的字符串通道和生成取消函数和错误 对于一些可能匹配多次的元字符: * : 则只会生成匹配 0 次或 1 次的字符串 + : 则只会生成匹配 1 次或 2 次的字符串 {n,m} : 则会生成匹配 n 次到 m 次的字符串 ...|
| [regen.GenerateVisibleOne](#generatevisibleone) |GenerateVisibleOne 根据正则表达式生成一个匹配的字符串(都是可见字符)，返回生成的字符串和错误 参数: - pattern: 用于生成字符串的正则表达式 返回值: - 生成的一个全部为可见字符的匹配字符串 - 编译正则失败时返回的错误|
| [regen.GenerateVisibleOneStream](#generatevisibleonestream) |GenerateVisibleOneStream 根据正则表达式流式生成一个匹配的字符串(都是可见字符)，返回生成的字符串和错误 对于一些可能匹配多次的元字符: * : 则只会生成匹配 0 次或 1 次的字符串 + : 则只会生成匹配 1 次或 2 次的字符串 {n,m} : 则会生成匹配 n 次到...|
| [regen.MustGenerate](#mustgenerate) |MustGenerate 根据正则表达式生成所有匹配的字符串，如果生成失败则会崩溃，返回生成的字符串切片 对于一些可能匹配多次的元字符: * : 则只会生成匹配 0 次或 1 次的字符串 + : 则只会生成匹配 1 次或 2 次的字符串 {n,m} : 则会生成匹配 n 次到 m 次的字符串 {n,...|
| [regen.MustGenerateOne](#mustgenerateone) |MustGenerateOne 根据正则表达式生成一个匹配的字符串，如果生成失败则会崩溃，返回生成的字符串 参数: - pattern: 用于生成字符串的正则表达式 返回值: - 生成的一个匹配字符串（编译失败会直接 panic）|
| [regen.MustGenerateVisibleOne](#mustgeneratevisibleone) |MustGenerateVisibleOne 根据正则表达式生成一个匹配的字符串(都是可见字符)，如果生成失败则会崩溃，返回生成的字符串 参数: - pattern: 用于生成字符串的正则表达式 返回值: - 生成的一个全部为可见字符的匹配字符串（编译失败会直接 panic）|


## 函数定义
### Generate

#### 详细描述
Generate 根据正则表达式生成所有匹配的字符串，返回生成的字符串切片和错误

对于一些可能匹配多次的元字符:

*     : 则只会生成匹配 0 次或 1 次的字符串

+     : 则只会生成匹配 1 次或 2 次的字符串

{n,m} : 则会生成匹配 n 次到 m 次的字符串

{n,}  : 则只会生成匹配 n 次或 n+1 次的字符串

参数:

  - pattern: 用于生成字符串的正则表达式



返回值:

  - 所有匹配字符串组成的切片

  - 编译正则失败时返回的错误




Example:

``````````````yak
// VARS: 字符集会枚举出全部可能
result = regen.Generate("[ab]c")~
// STDOUT: 打印生成结果
println(result)   // OUT: [ac bc]
// assert: 枚举出两个组合
assert len(result) == 2, "Generate should enumerate ac and bc"
``````````````


#### 定义

`Generate(pattern string) ([]string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pattern | `string` | 用于生成字符串的正则表达式 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 所有匹配字符串组成的切片 |
| r2 | `error` | 编译正则失败时返回的错误 |


### GenerateOne

#### 详细描述
GenerateOne 根据正则表达式生成一个匹配的字符串，返回生成的字符串和错误

参数:

  - pattern: 用于生成字符串的正则表达式



返回值:

  - 生成的一个匹配字符串

  - 编译正则失败时返回的错误




Example:

``````````````yak
// VARS: 字面量模式只有唯一结果
result = regen.GenerateOne("abc")~
// STDOUT: 打印生成结果
println(result)   // OUT: abc
// assert: 锁定结论
assert result == "abc", "literal pattern should generate itself"
``````````````


#### 定义

`GenerateOne(pattern string) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pattern | `string` | 用于生成字符串的正则表达式 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 生成的一个匹配字符串 |
| r2 | `error` | 编译正则失败时返回的错误 |


### GenerateOneStream

#### 详细描述
GenerateStream 根据正则表达式流式生成一个匹配的字符串，返回生成的字符串和错误

对于一些可能匹配多次的元字符:

*     : 则只会生成匹配 0 次或 1 次的字符串

+     : 则只会生成匹配 1 次或 2 次的字符串

{n,m} : 则会生成匹配 n 次到 m 次的字符串

{n,}  : 则只会生成匹配 n 次或 n+1 次的字符串

参数:

  - pattern: 用于生成字符串的正则表达式

  - ctxs: 可选的 context，用于提前取消生成



返回值:

  - 生成的一个匹配字符串

  - 编译正则失败时返回的错误




Example:

``````````````yak
regen.GenerateOneStream("[a-z]+") // a-z 中随机一个字母
regen.GenerateOneStream("^(13[0-9]|14[57]|15[0-9]|18[0-9])\d{8}$") // 生成一个手机号
``````````````


#### 定义

`GenerateOneStream(pattern string, ctxs ...context.Context) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pattern | `string` | 用于生成字符串的正则表达式 |
| ctxs | `...context.Context` | 可选的 context，用于提前取消生成 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 生成的一个匹配字符串 |
| r2 | `error` | 编译正则失败时返回的错误 |


### GenerateStream

#### 详细描述
GenerateStream 根据正则表达式流式生成所有匹配的字符串，返回生成的字符串通道和生成取消函数和错误

对于一些可能匹配多次的元字符:

*     : 则只会生成匹配 0 次或 1 次的字符串

+     : 则只会生成匹配 1 次或 2 次的字符串

{n,m} : 则会生成匹配 n 次到 m 次的字符串

{n,}  : 则只会生成匹配 n 次或 n+1 次的字符串

参数:

  - pattern: 用于生成字符串的正则表达式

  - ctxs: 可选的 context，用于提前取消生成



返回值:

  - 流式输出生成结果的字符串通道

  - 用于停止生成的取消函数

  - 编译正则失败时返回的错误




Example:

``````````````yak
ch, cancel, err = regen.GenerateStream("[a-z]+")
for s = range ch {
println(s)
}
``````````````


#### 定义

`GenerateStream(pattern string, ctxs ...context.Context) (chan string, context.CancelFunc, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pattern | `string` | 用于生成字符串的正则表达式 |
| ctxs | `...context.Context` | 可选的 context，用于提前取消生成 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan string` | 流式输出生成结果的字符串通道 |
| r2 | `context.CancelFunc` | 用于停止生成的取消函数 |
| r3 | `error` | 编译正则失败时返回的错误 |


### GenerateVisibleOne

#### 详细描述
GenerateVisibleOne 根据正则表达式生成一个匹配的字符串(都是可见字符)，返回生成的字符串和错误

参数:

  - pattern: 用于生成字符串的正则表达式



返回值:

  - 生成的一个全部为可见字符的匹配字符串

  - 编译正则失败时返回的错误




Example:

``````````````yak
// VARS: 字面量模式只有唯一结果
result = regen.GenerateVisibleOne("abc")~
// STDOUT: 打印生成结果
println(result)   // OUT: abc
// assert: 锁定结论
assert result == "abc", "literal pattern should generate itself"
``````````````


#### 定义

`GenerateVisibleOne(pattern string) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pattern | `string` | 用于生成字符串的正则表达式 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 生成的一个全部为可见字符的匹配字符串 |
| r2 | `error` | 编译正则失败时返回的错误 |


### GenerateVisibleOneStream

#### 详细描述
GenerateVisibleOneStream 根据正则表达式流式生成一个匹配的字符串(都是可见字符)，返回生成的字符串和错误

对于一些可能匹配多次的元字符:

*     : 则只会生成匹配 0 次或 1 次的字符串

+     : 则只会生成匹配 1 次或 2 次的字符串

{n,m} : 则会生成匹配 n 次到 m 次的字符串

{n,}  : 则只会生成匹配 n 次或 n+1 次的字符串

参数:

  - pattern: 用于生成字符串的正则表达式

  - ctxs: 可选的 context，用于提前取消生成



返回值:

  - 生成的一个全部为可见字符的匹配字符串

  - 编译正则失败时返回的错误




Example:

``````````````yak
regen.GenerateVisibleOneStream("[a-z]") // a-z 中随机一个字母
regen.GenerateVisibleOneStream("^(13[0-9]|14[57]|15[0-9]|18[0-9])\d{8}$") // 生成一个手机号
``````````````


#### 定义

`GenerateVisibleOneStream(pattern string, ctxs ...context.Context) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pattern | `string` | 用于生成字符串的正则表达式 |
| ctxs | `...context.Context` | 可选的 context，用于提前取消生成 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 生成的一个全部为可见字符的匹配字符串 |
| r2 | `error` | 编译正则失败时返回的错误 |


### MustGenerate

#### 详细描述
MustGenerate 根据正则表达式生成所有匹配的字符串，如果生成失败则会崩溃，返回生成的字符串切片

对于一些可能匹配多次的元字符:

*     : 则只会生成匹配 0 次或 1 次的字符串

+     : 则只会生成匹配 1 次或 2 次的字符串

{n,m} : 则会生成匹配 n 次到 m 次的字符串

{n,}  : 则只会生成匹配 n 次或 n+1 次的字符串

参数:

  - pattern: 用于生成字符串的正则表达式



返回值:

  - 所有匹配字符串组成的切片（编译失败会直接 panic）




Example:

``````````````yak
// VARS: 字符集会枚举出全部可能
result = regen.MustGenerate("[ab]c")
// STDOUT: 打印生成结果
println(result)   // OUT: [ac bc]
// assert: 枚举出两个组合
assert len(result) == 2, "MustGenerate should enumerate ac and bc"
``````````````


#### 定义

`MustGenerate(pattern string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pattern | `string` | 用于生成字符串的正则表达式 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 所有匹配字符串组成的切片（编译失败会直接 panic） |


### MustGenerateOne

#### 详细描述
MustGenerateOne 根据正则表达式生成一个匹配的字符串，如果生成失败则会崩溃，返回生成的字符串

参数:

  - pattern: 用于生成字符串的正则表达式



返回值:

  - 生成的一个匹配字符串（编译失败会直接 panic）




Example:

``````````````yak
// VARS: 字面量模式只有唯一结果
result = regen.MustGenerateOne("abc")
// STDOUT: 打印生成结果
println(result)   // OUT: abc
// assert: 锁定结论
assert result == "abc", "literal pattern should generate itself"
``````````````


#### 定义

`MustGenerateOne(pattern string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pattern | `string` | 用于生成字符串的正则表达式 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 生成的一个匹配字符串（编译失败会直接 panic） |


### MustGenerateVisibleOne

#### 详细描述
MustGenerateVisibleOne 根据正则表达式生成一个匹配的字符串(都是可见字符)，如果生成失败则会崩溃，返回生成的字符串

参数:

  - pattern: 用于生成字符串的正则表达式



返回值:

  - 生成的一个全部为可见字符的匹配字符串（编译失败会直接 panic）




Example:

``````````````yak
// VARS: 字面量模式只有唯一结果
result = regen.MustGenerateVisibleOne("abc")
// STDOUT: 打印生成结果
println(result)   // OUT: abc
// assert: 锁定结论
assert result == "abc", "literal pattern should generate itself"
``````````````


#### 定义

`MustGenerateVisibleOne(pattern string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pattern | `string` | 用于生成字符串的正则表达式 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 生成的一个全部为可见字符的匹配字符串（编译失败会直接 panic） |


