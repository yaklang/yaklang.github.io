---
sidebar_position: 2
sidebar_label: "内置函数与内置操作"
---

# 内置函数与内置操作

内置函数（也叫全局函数）无需引入任何库即可直接调用，它们是编写 Yaklang 脚本的基础工具；内置操作则是作用在切片、映射、通道等复合结构上的语言级能力。本章先用一张速查表建立全局认知，再按功能组逐一拆解，每组都配有可直接用 `yak` 运行的示例。

:::tip 本章示例怎么读、怎么验证
示例同时使用两种验证手段，各有侧重：

- `assert`：适合**确定性**结果，断言不成立会立即中断脚本并打印原因，是"机器可验证"的硬保证。
- `println`：适合**用户直接观察**就能理解的结果，把关键值打印到标准输出（STDOUT）。

每段代码末尾的注释里都列出了该脚本的 `STDOUT`，本手册的校验脚本会真实运行示例、捕获标准输出，并核对这些行确实被打印出来——因此 `println` 同样是"可验证"的。
:::

## 速查表

| 功能组 | 代表函数 | 一句话说明 |
| --- | --- | --- |
| 打印与格式化 | `print` `println` `printf` `sprintf` `dump` `sdump` | 输出到标准输出或返回格式化字符串 |
| 断言与判空 | `assert` `assertf` `isEmpty` `assertEmpty` | 校验条件、判断 nil/undefined |
| 程序控制与异常 | `die` `panic` `recover` `sleep` `wait` | 中断、捕获异常、休眠等待 |
| 随机与唯一标识 | `randn` `randstr` `uuid` | 随机整数/字符串、全局唯一标识 |
| 时间与时间戳 | `timestamp` `now` `date` `datetime` | 当前时间与时间戳互转 |
| 类型探查 | `typeof` `callable` `desc` | 运行时类型、是否可调用、结构查看 |
| 数值与日志 | `max` `min` `loglevel` | 取极值、控制日志噪声 |
| 数值类型转换 | `int` `float` `byte` | 字符串/浮点与整型互转（截断） |
| 字符串与字节 | `string` `[]byte` | 值转字符串、字节切片还原文本 |
| 字符与码点 | `chr` `ord` | 单字符与码点互转 |
| 字符串解析 | `parseInt` `atoi` `parseFloat` `parseBool` | 显式解析，可控错误 |
| 类型字面量 | `typeof(x) == int` | 类型作为一等值参与比较 |
| 切片操作 | `append` `len` `cap` `make` `copy` | 追加、长度容量、拷贝 |
| 切片遍历 | `for ... in` `for ... = range` | 取元素 / 取下标与值 |
| 映射操作 | `make` `get` `set` `delete` `len` | 键值读写、删除、计数 |
| 通道操作 | `make(chan)` `close` `range` | 协程通信、关闭、遍历 |

## 打印与格式化输出

Yaklang 提供了一组与 Golang `fmt` 对应的打印/格式化函数。命名有规律：带 `s` 前缀的 `sprint` / `sprintf` / `sdump` 返回字符串而不打印，不带 `s` 的直接写入标准输出；占位符（`%s`、`%d`、`%v` 等）与 Golang 完全一致。

``````````````yak
// 特性: 格式化输出 sprintf / sprint, 用 println 直接观察结果
// 关键词: sprintf, sprint, println, dump, sdump
name = "yak"

// sprintf 用占位符格式化并返回字符串; 既用 assert 确认, 也用 println 观察
greet = sprintf("hello %s, version %d", name, 3)
assert greet == "hello yak, version 3", "sprintf should format with verbs"
println(greet)

// sprint 直接拼接(两个字符串之间不加空格)
joined = sprint("a", "b")
assert joined == "ab", "sprint should concatenate string args"
println(joined)

println("print family ok")

/**
VARS:

@greet: "hello yak, version 3"
@joined: "ab"

STDOUT:

hello yak, version 3
ab
print family ok
*/
``````````````

调试复杂结构时优先用 `dump` / `sdump`，它们会展开嵌套字段，比单纯的 `%v` 更直观。

## 断言与判空

`assert` 是编写可验证脚本的核心：条件为假时立即中断并把第二个参数作为失败原因打印出来。`isEmpty` 判断的是 `nil` / `undefined`，常用于检查"变量是否未定义/调用是否返回了空值"。

``````````````yak
// 特性: 断言与判空 assert / assertf / isEmpty / assertEmpty
// 关键词: assert, assertf, isEmpty, assertEmpty
codeValue = 200

// assert 语句形式: assert 表达式, 失败原因
assert codeValue == 200, "code should be 200"

// assertf 支持格式化的失败信息
assertf(codeValue == 200, "code should be %d", 200)

// isEmpty 只把 nil / undefined 视为空
assert isEmpty(nil) == true, "nil is empty"
assert isEmpty(123) == false, "123 is not empty"

// assertEmpty: 值为空时不报错(常用于确认 err 为 nil)
assertEmpty(nil)

println("assert family ok")

/**
VARS:

@isEmpty(nil): true
@isEmpty(123): false

STDOUT:

assert family ok
*/
``````````````

:::note assert 是语句也是函数
`assert` 既能写成语句形式 `assert 条件, "原因"`，也能写成函数形式 `assert(条件, "原因")`，二者等价，推荐用更直观的语句形式。但 `assertf`、`assertEmpty`、`isEmpty` 都是普通函数，必须带括号调用。
:::

## 程序控制与异常

Yaklang 有两种错误风格：`die` / `panic` 走"异常中断"，需要配合 `defer recover()` 才能兜底，否则整个脚本崩溃；日常更推荐返回值式处理（`~` 波浪号或显式 `err`，见下一章）。`recover()` 只有写在 `defer` 的函数里才生效。

``````````````yak
// 特性: 异常捕获 recover 与定时 sleep / wait
// 关键词: panic, die, recover, sleep, wait
recovered = false

// 用闭包 + defer recover 捕获内部 panic, 避免脚本整体崩溃
func mayPanic() {
    defer func() {
        if recover() != nil {
            recovered = true
        }
    }()
    die("boom")  // die 接收到非空错误信息, 触发中断
}
mayPanic()
assert recovered == true, "recover should catch the panic from die"
println(sprintf("recovered = %v", recovered))

// wait 接收数字时等价于 sleep(秒)
start = nanotimestamp()
wait(0.05)
assert nanotimestamp() - start >= 40000000, "wait(0.05) should sleep about 50ms"

println("control flow ok")

/**
VARS:

@recovered: true   // die 触发的 panic 被 defer recover 捕获

STDOUT:

recovered = true
control flow ok
*/
``````````````

:::danger die 会直接中断脚本
`die(v)` 在 `v` 表示错误（非 `nil`）时立即抛出 panic 终止脚本。若上层没有 `defer recover()` 捕获，整个脚本都会崩溃。在需要继续执行的场景，应改用波浪号 `result = mayFail()~` 或 `result, err = mayFail()` 显式处理错误，而不是 `die`。
:::

## 随机与唯一标识

这些值每次运行都不同，所以断言里只校验"范围"或"长度"，绝不写死具体结果——这也是测试随机逻辑的通用思路。因此本组的 `STDOUT` 只放确定性的收尾行。

``````````````yak
// 特性: 随机数与唯一标识 randn / randstr / uuid
// 关键词: randn, randstr, uuid
rv = randn(1, 10)
assert rv >= 1 && rv < 10, "randn should be within [1, 10)"

rs = randstr(8)
assert len(rs) == 8, "randstr(8) should be 8 chars long"

uid = uuid()
assert len(uid) == 36, "uuid string length should be 36"

println("random family ok")

/**
VARS:    // 随机值每次运行都不同, 下面是某次示例

@rv:  7                                       // [1, 10) 区间内整数
@rs:  "kQ8fzLmt"                              // 8 位随机字母串
@uid: "1f3a9c2e-5b7d-4e1a-9c0f-2d6b8a4e7c11" // 36 位 UUID

STDOUT:

random family ok
*/
``````````````

`uuid` 常用于生成全局唯一标识，`randstr` 适合快速造测试数据。

## 时间与时间戳

容易混淆的一点：Yaklang 沿用 Golang 的"参考时间"布局 `2006-01-02 15:04:05`（用这串特定数字表示格式，而不是 `yyyy-MM-dd`）。秒级时间戳用 `timestamp()`，更高精度用 `nanotimestamp()`，二者都是 `int64`，可直接做差计算耗时。

``````````````yak
// 特性: 时间与时间戳互转
// 关键词: timestamp, date, datetime, datetimeToTimestamp
nowTs = timestamp()
assert nowTs > 1700000000, "current timestamp should be reasonable"

// date 固定 10 个字符(yyyy-MM-dd), datetime 固定 19 个字符
assert len(date()) == 10, "date format should be yyyy-MM-dd"
assert len(datetime()) == 19, "datetime format should be yyyy-MM-dd HH:mm:ss"

// 字符串转回时间戳, 用 ~ 自动处理错误(结果与时区相关, 故不打印具体值)
back = datetimeToTimestamp("2023-11-11 11:11:11")~
assert back > 0, "datetimeToTimestamp should parse a valid datetime"

println("time family ok")

/**
VARS:    // 与运行时刻/时区相关, 下面是某次示例

@date():     "2026-06-18"
@datetime(): "2026-06-18 15:25:00"
@back:       1699672271          // datetimeToTimestamp 解析得到的时间戳

STDOUT:

time family ok
*/
``````````````

## 类型探查与反射

`typeof` 返回的是可参与比较的"类型对象"而非字符串，这是 Yaklang 运行时反射的基础；`callable` 则能在调用前判断变量是否为函数，避免对非函数值发起调用而 panic。

``````````````yak
// 特性: 类型探查 typeof / callable
// 关键词: typeof, callable, desc
// typeof 返回的类型可直接与类型字面量比较
assert typeof(1) == int, "typeof(1) should equal int"
assert typeof("x") == string, "typeof of string literal should equal string"

// callable 判断是否为可调用函数; 用 println 直接观察布尔结果
assert callable(println) == true, "println should be callable"
assert callable(123) == false, "an int should not be callable"
println(sprintf("println callable = %v", callable(println)))

println("type probe ok")

/**
VARS:

@typeof(1):          int
@callable(println):  true
@callable(123):      false

STDOUT:

println callable = true
type probe ok
*/
``````````````

需要进一步查看对象有哪些字段和方法时，用 `desc(obj)` 直接打印结构。

## 数值与日志控制

`max` / `min` 接收任意多个参数，并允许 `int` 与 `float` 混用。`loglevel` 以及 `logquiet` / `logrecover` 用于控制脚本运行时的日志噪声，在批量任务里保持输出干净。

``````````````yak
// 特性: 数值 max / min, 用 println 观察结果
// 关键词: max, min, loglevel
assert max(1, 5, 3) == 5, "max should return the largest value"
assert min(1, 5, 3) == 1, "min should return the smallest value"
println(sprintf("max=%d min=%d", max(1, 5, 3), min(1, 5, 3)))

// 调整日志级别(不影响断言, 仅演示调用形式)
loglevel("info")

println("number family ok")

/**
VARS:

@max(1, 5, 3): 5
@min(1, 5, 3): 1

STDOUT:

max=5 min=1
number family ok
*/
``````````````

## 数值类型转换

这里体现了 Yaklang "类型即函数"的设计：类型名 `int` / `float` / `byte` 本身就能当转换函数调用。两个易混点：浮点转整型是**向零截断**而非四舍五入；`byte` 是 `uint8` 的别名，取值范围 `0~255`。

``````````````yak
// 特性: 数值类型转换 int / float / byte
// 关键词: int, float, byte, 截断
assert int("123") == 123, "int should parse decimal string"
assert int(3.9) == 3, "int(float) should truncate toward zero"
assert float("1.5") == 1.5, "float should parse decimal string"
assert byte(65) == 65, "byte(65) should be 65"
println(sprintf("int(3.9)=%d float(1.5)=%v", int(3.9), float("1.5")))

println("numeric convert ok")

/**
VARS:

@int("123"): 123
@int(3.9):   3      // 直接截断小数, 不四舍五入

STDOUT:

int(3.9)=3 float(1.5)=1.5
numeric convert ok
*/
``````````````

## 字符串与字节转换

`string()` 对不同输入语义不同：对整数它给出"十进制文本"，对字节切片它给出"文本内容"。这正是新手最容易混淆的地方。

``````````````yak
// 特性: 字符串转换 string 的常见误区
// 关键词: string, []byte, 十进制字符串
// string(整数) 是数字的十进制文本, 而不是 ASCII 字符
assert string(65) == "65", "string(int) gives the decimal text, not a char"

// 字节切片转字符串才会得到文本内容
assert string([]byte("hi")) == "hi", "string([]byte) restores text"
println(sprintf("string(65)=%s string([]byte)=%s", string(65), string([]byte("hi"))))

println("string convert ok")

/**
VARS:

@string(65):           "65"   // 十进制文本, 不是字符 "A"
@string([]byte("hi")): "hi"

STDOUT:

string(65)=65 string([]byte)=hi
string convert ok
*/
``````````````

:::danger string(整数) 不是 ASCII 字符
最常见的踩坑点：`string(65)` 得到的是十进制文本 `"65"`，**不是**字符 `"A"`。想要"码点转字符"必须用 `chr(65)`（得到 `"A"`）或 `sprintf("%c", 65)`。
:::

## 字符与码点

`chr` 与 `ord` 互为逆运算，专门处理"单个字符 ↔ 码点"，接受十进制或十六进制（如 `0x41`）码点。

``````````````yak
// 特性: 码点与字符互转 chr / ord
// 关键词: chr, ord, ascii
assert chr(65) == "A", "chr(65) should be A"
assert chr(0x41) == "A", "chr accepts hex code point"
assert ord("A") == 65, "ord('A') should be 65"
assert ord(chr(97)) == 97, "ord and chr should be inverse"
println(sprintf("chr(65)=%s ord(A)=%d", chr(65), ord("A")))

println("char convert ok")

/**
VARS:

@chr(65):  "A"
@ord("A"): 65

STDOUT:

chr(65)=A ord(A)=65
char convert ok
*/
``````````````

## 字符串解析函数

相比直接 `int()` / `float()`，`parseInt` / `atoi` / `parseFloat` 这类解析函数会**显式返回 `error`**，遇到非法输入时可控地处理而不是直接中断，更适合解析用户输入或外部数据。

``````````````yak
// 特性: 字符串解析 parseInt / atoi / parseFloat / parseBool
// 关键词: parseInt, atoi, parseFloat, parseBool
// parseInt 第二参数为进制; base=0 时自动识别 0x 前缀
assert parseInt("0x10", 0) == 16, "parseInt with base 0 detects hex"
assert parseInt("10") == 10, "parseInt defaults to decimal"

// atoi 返回 (int, error), 用 ~ 自动处理错误
assert atoi("42")~ == 42, "atoi should parse decimal"

assert parseFloat("3.14") == 3.14, "parseFloat should parse float text"
assert parseBool("true") == true, "parseBool should parse boolean text"
println(sprintf("parseInt(0x10)=%d atoi(42)=%d", parseInt("0x10", 0), atoi("42")~))

println("parse family ok")

/**
VARS:

@parseInt("0x10", 0): 16     // base=0 自动识别 0x 前缀
@atoi("42")~:         42     // 注意 atoi 返回 (int, error)

STDOUT:

parseInt(0x10)=16 atoi(42)=42
parse family ok
*/
``````````````

:::danger atoi 返回两个值，别忘了处理错误
`atoi(s)` 返回 `(int, error)`。直接写 `n = atoi("42")` 会让 `n` 变成元组而非整数，后续运算就会出错。正确写法是 `n = atoi("42")~` 或 `n, err = atoi("42")`。`parseInt`、`parseFloat` 同理。
:::

## 布尔与类型字面量

类型字面量（`int`、`string`、`float64` 等）在 Yaklang 里是"一等值"，可直接参与 `==` 比较。结合 `typeof` 就能写出清晰的运行时类型分支，无需依赖字符串名称。

``````````````yak
// 特性: 类型字面量与运行时类型判断
// 关键词: typeof, int, string, float64
value = "hello"
isString = typeof(value) == string
assert isString == true, "value should be detected as string"
assert typeof(3.14) == float64, "3.14 should be float64"
println(sprintf("is string = %v", isString))

println("type literal ok")

/**
VARS:

@isString:     true      // typeof(value) == string
@typeof(3.14): float64

STDOUT:

is string = true
type literal ok
*/
``````````````

## 切片操作

切片的内置操作与 Golang 基本一致：`make([]int, 0, 8)` 中第二个参数是初始长度、第三个是预留容量，预留容量能减少追加时的扩容拷贝。`copy` 按"目标与源中较短的长度"拷贝并返回实际拷贝个数。

``````````````yak
// 特性: 切片追加与长度/容量 append / len / cap / make / copy
// 关键词: append, len, cap, make, copy
nums = [1, 2, 3]

// append 返回新切片, 必须重新赋值
nums = append(nums, 4, 5)
assert len(nums) == 5, "append should grow slice to length 5"

// make 预分配容量, len 为 0
buf = make([]int, 0, 8)
assert cap(buf) == 8, "make with cap should reserve capacity"

// copy 把源切片内容拷贝到目标, 返回拷贝个数
dst = make([]int, 3)
copied = copy(dst, [7, 8, 9])
assert copied == 3, "copy should report number of copied elements"
println(sprintf("nums=%v cap(buf)=%d copied=%d", nums, cap(buf), copied))

println("slice ops ok")

/**
VARS:

@nums:     [1, 2, 3, 4, 5]   // append 后重新赋值的结果
@cap(buf): 8                 // make 预分配的容量
@copied:   3                 // copy 实际拷贝的元素个数

STDOUT:

nums=[1 2 3 4 5] cap(buf)=8 copied=3
slice ops ok
*/
``````````````

:::danger append 必须重新赋值
`append` 返回的是追加后的**新切片**，原切片不会被改变。写成 `append(nums, 4)` 而不接收返回值，追加的元素就会丢失。务必写成 `nums = append(nums, 4)`。
:::

## 切片遍历

两种遍历各有侧重：`for v in items` 只关心元素值，写法最简洁；`for i, v = range items` 同时拿到下标与值。注意 `range` 这里用的是 `=` 赋值而非 `in`。

``````````````yak
// 特性: 切片遍历 for-in / for-range
// 关键词: for in, range, slice 遍历
items = [10, 20, 30]

// for-in 直接遍历元素
total = 0
for v in items {
    total += v
}
assert total == 60, "for-in should sum all elements"

// for index, value = range 遍历下标与值
idxSum = 0
for i, v = range items {
    idxSum += i
}
assert idxSum == 3, "range index sum should be 0+1+2"
println(sprintf("total=%d idxSum=%d", total, idxSum))

println("slice iterate ok")

/**
VARS:

@total:  60   // for-in 对 [10, 20, 30] 求和
@idxSum: 3    // range 下标求和 0+1+2

STDOUT:

total=60 idxSum=3
slice iterate ok
*/
``````````````

## 映射操作

映射有两套等价用法：字面量 `{}` 配合下标 `m[key]`，以及函数式的 `get` / `set` / `delete`。两者可混用，按可读性选择即可。

``````````````yak
// 特性: 映射读写 get / set / delete / len
// 关键词: map, get, set, delete, len
profile = {"name": "yak", "age": 3}

// 既可用下标也可用 get 读取
assert profile["name"] == "yak", "index access should work"
assert get(profile, "age") == 3, "get should read value by key"

// set 写入新键, len 反映键值对数量
set(profile, "lang", "go")
assert len(profile) == 3, "set should add a new entry"
println(sprintf("after set, len=%d", len(profile)))

// delete 删除键后, get 返回 nil, len 减一
delete(profile, "age")
assert get(profile, "age") == nil, "deleted key should be nil"
println(sprintf("after delete, len=%d", len(profile)))

println("map ops ok")

/**
VARS:

@len(profile) (set 后):  3     // name / age / lang
@len(profile) (delete 后): 2   // 删掉 age
@get(profile, "age"):    nil   // delete 之后读取返回 nil

STDOUT:

after set, len=3
after delete, len=2
map ops ok
*/
``````````````

:::note 读取不存在的键返回 nil
用下标 `m[key]` 或 `get(m, key)` 读取不存在的键时返回 `nil`，不会报错。因此判断"键是否存在"不能只看值是否为 `nil`（值本身也可能就是 `nil`）。
:::

## 通道操作

通道是协程间通信的核心：带缓冲通道在缓冲未满时发送不阻塞、未空时接收不阻塞。`for v = range ch` 会一直读到通道被关闭且读空为止。

``````````````yak
// 特性: 通道创建/发送/关闭/遍历 make chan / close / range
// 关键词: chan, make, close, range
pipe = make(chan int, 3)

// 写入缓冲后关闭, 仍可把已写入的元素读完
pipe <- 1
pipe <- 2
pipe <- 3
close(pipe)

drained = 0
for v = range pipe {
    drained += v
}
assert drained == 6, "range over closed channel should drain buffered values"
println(sprintf("drained=%d", drained))

println("chan ops ok")

/**
VARS:

@drained: 6   // close 后仍读完缓冲 1+2+3

STDOUT:

drained=6
chan ops ok
*/
``````````````

:::danger 向已关闭的通道发送会 panic
通道 `close` 之后继续 `<-ch` 接收是安全的（读完缓冲后返回零值），但再向其 `ch <- v` 发送会立即 panic；重复 `close` 同样会 panic。约定俗成是"谁发送谁关闭"，且只关闭一次。
:::
