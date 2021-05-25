---
sidebar_position: 1
---

# 基础语法：目标10分钟上手

Yak 是一门纯 Golang 的嵌入式语言，是一门纯 Golang 实现的基于反射特性的语言，语法在一定程度上保留了 Golang 的风格，甚至可以实现 Golang 语言的对象无缝开放给 Yak 使用的功能。

Golang 的一些令人惊叹的特性我们在 Yak 中也可以找到实现，比如大家熟悉或者有所耳闻的 `go func() {} ()`，`defer` 关键字，`chan <T>` 等。

在保留这些优秀功能的同时，我们极大的简化了 Golang 的语法，移除了静态类型的特性，移除了严格的语法检查，这是一门动态强类型语言，同时，我们也尽力兼容了一些动态语言常见的使用场景。

**最令人激动的**其实是我们在语言内置了各种安全从业人员需要的安全扫描工具和前无古人的模糊测试模块。

我们希望 Yak 对与安全从业人员是相当友好的，10 分钟即可上手！如果你熟悉 Golang 和 Python，我相信 Yak 一定也是你将会非常喜爱的胶水语言。

## 运算符支持

### 基础运算符

```go
// 加减乘除:  1 + 4 * 5
'+' '-' '*' '/' 

// 取余数
'%'

// 赋值运算符：为保持 Golang 用户使用习惯，我们保留了 := 赋值模式，a := 1; 或者 a = 1 是等效的
'=' ':=' 

// 位运算
'^' '&' '&^' '|' '<<' '>>'

// 运算赋值，值得注意的是，++ 和 -- 只能用在变量后，其相当于 += 1 / -= 1
'+=' '-=' '*=' '/=' '%=' '++' '--'

// 位运算赋值
'^=' '&=' '&^=' '|=' '<<=' '>>='

// 单位运算符，取反
'!'

// 逻辑比较运算符
'>=' '<=' '>' '<' '==' '!=' '&&' '||'
```

### 特殊运算符，操作 Golang 通道：`<-` 

`<-` 操作符既可以把元素写入现成的 chan 中，也可以从 chan 中读取相关元素

1. `varName = <- chanVar` 意思是把 chanVar 这个 chan 读出一个元素，赋值给 varName。
2. `chanVar <- someValue` 意思是把 someValue 写入 chanVar 这个 chan 中

如果读者有写过 Golang，我们下面一段代码可以更容易帮你理解这个特殊操作符

```go
// 声明一个 chan，类型为 var, chan 的缓冲区为 2，可以缓冲两个元素
ch := make(chan var, 2)
ch <- 123
ch <- 456

firstIn = <- ch
secondIn = <- ch
println("first:    ", firstIn)
println("seconds:  ", secondIn)
```

我们很容易才到，上面代码的执行结果为

```
first:     123
seconds:   456
```

## 类型与数据结构使用

### 基础数据类型

```golang
1. int
2. float     // 等效于 Golang 的 float64
3. string
4. byte
5. bool
6. var       // 等效于 Golang 的 interface{}          
```

这些类型其实都是最基础的数据类型：

```go
// 以下是一组基础声明
a = 1 // 创建一个 int 类型变量，并初始化为 1
b = "hello" // string 类型
c = true // bool 类型
d = 1.0 // float 类型
e = 'h' // byte 类型
f = var // f 为一个 兼容类型
```

### 复合类型

1. `slice`：是用于以列表的形式存储元素的数据类型 (等效于 Python 的 `list`)，同 Golang 中的 slice
2. `map`：用于以键值对的形式存储数据的结构（等效于 Python 中的 `dict`），同 Golang 中的 map
3. `chan`：Yak 与 Golang 特有的复合数据类型，通过 `make(chan <T>)` 创建，`<T>` 为这个 chan 数据通道传输的数据类型，可以类比为 Python 中的 Queue

### 函数类型与类

1. 闭包与函数均是特殊类型的实例，同 Golang 与 Python，我们可以把函数赋值给一个变量，在你想使用它的时候使用它
2. 类与类成员函数也是本语言可支持的特色之一，但是对于脚本语言来说，OOP 的特性支持会极大增加语言复杂程度，尽管语言支持，但是作者并不希望这个特性被广泛使用。

### 如何使用 Slice / List

```go
b = [1, 2.3, 5]         // 创建一个 []float
c = ["a", "b", "c"]     // 创建一个 []string
d = ["a", 1, 2.3]       // 创建一个 []var (等价于 Go 语言的 []interface{})
e = make([]int, 3, 3)   // 创建一个 []int，并将长度设置为 3，容量设置为 3
f = make([][]int, 3, 3) // 创建一个 [][]int，并将长度设置为 3，容量设置为 3
g = []byte{1, 2, 3}     // 创建一个 byte slice，并初始化为 [1, 2, 3]
h = []byte(nil)         // 创建一个空 byte slice
```

### 如何使用 Map / Dict

### 使用函数/闭包：`def` `func` `fn` 均等效

函数和闭包定义关键字为 `def` / `func` / `fn`, 这三个关键字完全等效！

```go
// 定义了一个函数为 aaa，同时这个函数被赋值给了 bbb，所以这个函数拥有了两个名字
bbb = func aaa() {
    println("具名函数 aaa 函数赋值给了 bbb，被调用了")
}

// 定义了个匿名函数，赋值给了 ccc，所以 ccc 可以被当作函数调用了
ccc = fn() {
    println("匿名函数赋值给了 ccc，被调用了")
}

// 分别执行 aaa  bbb  ccc 来看结果
aaa()
bbb()
ccc()

// 生命一个闭包
def{
    println("这是一个闭包，声明的时候，将立即会被调用")
}

// 让 Goroutine 执行一个闭包函数
go def{
    sleep(0.5)
    println("在 Gorouting 中执行了闭包函数喔")
}

// aaa() 放在 Gourinte 中执行
go aaa()

// sleep 1 秒等待 Goroutine 执行完成
sleep(1)
```

执行完如上脚本，我们看到结果为

```text
具名函数 aaa 函数赋值给了 bbb，被调用了
具名函数 aaa 函数赋值给了 bbb，被调用了
匿名函数赋值给了 ccc，被调用了
这是一个闭包，声明的时候，将立即会被调用
具名函数 aaa 函数赋值给了 bbb，被调用了
在 Gorouting 中执行了闭包函数喔
```