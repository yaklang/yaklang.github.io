---
sidebar_position: 1
---

# Yak：致力于安全能力融合的语言

## 我们要解决什么问题？

当我们提到黑客编程，可能大家想起得最多是 Python。凭借简单的语法和丰富的安全工具生态基础，Python 被安全从业人员视为必学必会的技能。

随着大家技术的深入，我们不再满足于 Python 编写脚本来服务于自己，大量工具/平台/安全产品的出现，规模化的需求已经被提上了日程， Golang 慢慢进入了大家的视野。作为一门效率更高，更适合产品分发，工程研发和平台搭建的语言，很快各种安全组织和白帽子们发挥自己的研发能力实现了很多工具和系统的研发。

在这个阶段中，我们开始关注更加专业的 "安全研发"。

与此同时，"安全研发不光包含安全平台的研发，也包含安全能力的研发"，这个理念慢慢被大家所接受。 我们常用合适的语言编写平台去处理业务需求，但是安全能力的研发往往更加复杂，一般来说不同的安全工具安全能力会采用"最合适"的语言来完成，这就造成了安全平台与安全能力模块的割裂。为什么安全能力要放在不同项目中呢？不能使用同一个平台吗？

:::tip 关于 "最合适" 的说明

很大一部分原因是 "历史原因"，和没有专人去做新的场景适配，导致 "老代码" 越来越多。

:::

为了搞定这个问题，我们从事了很多工作在 Yak 中，我们希望他能承担 "安全能力融合" 的职责，你的 PoC，你的扫描器，你的扫描模块，漏洞扫描算法都可以用它来解决。

我们目标在提供 "一站式" 的安全能力基座。

## 核心理念：安全基础能力融合

1. 完善的内容生态
    1. 提供入门/保姆级别的安全研发教程
    1. 长期支持，具有成功的企业实践经验
    1. 高级功能自由度极高，独一无二的 Fuzz 体验
1. 底层融合多种安全能力/工具，打破工具和安全小领域之间的壁垒
1. 集成 MIT 协议的高质量工具
1. 提升行业整体安全水平

## 速览：极速编写安全工具

我们创建一个 `service_scan.yak` 内容如下

```go
// 极简获取参数，--target xxxx  --port 80
scanTarget, scanPorts = cli.String("target"), cli.String("port")

// 默认批量进行服务扫描
results, err = servicescan.Scan(scanTarget, scanPorts)
die(err)

// 取出扫描结果（异步扫描结果）
for result = range results {
    println(result.String())
}
```

于是我们执行 `yak service_scan.yak --target 192.168.1.1/24 --port 22,80` 之后，将会看到如下输出

```bash
tcp://192.168.1.32:22	 open	openssh[6.6.1]
tcp://192.168.1.21:22	 open	openssh[7.4]
tcp://192.168.1.40:22	 open	openssh[6.6.1]
tcp://192.168.1.43:22	 open	openssh[5.3]
tcp://192.168.1.44:22	 open	openssh[5.3]
tcp://192.168.1.46:22	 open	openssh[5.3]
tcp://192.168.1.60:22	 open	openssh[5.3]
tcp://192.168.1.48:22	 open	openssh[5.3]
tcp://192.168.1.66:22	 open	linux_kernel[*]/openssh[7.2p2]/ubuntu_linux[*]
tcp://192.168.1.80:22	 open	openssh[5.3]
...
...
...
...
...
tcp://192.168.1.83:80	 open	apache_tomcat[1.1]/coyote[1.1]/coyote_http_connector[1.1]/java[*]/jquery[*]/jquery[1.3.2]
tcp://192.168.1.99:80	 open
tcp://192.168.1.122:80	 open	nginx[*]
tcp://192.168.1.125:80	 open	linux_kernel[*]/nginx[1.10.3]/ubuntu[*]/ubuntu_linux[*]
tcp://192.168.1.126:80	 open	nginx[*]/php[5.4.45]
```

## A Bite of Yaklang!

:::tip 约定与基本概念

我们在后续 Yak 和 Yaklang 一般都表示 Yak 语言，不要混淆。

完全大写的 YAK 表示 Yak 生态，包含 Yaklang 编程语言和 Yakit 安全平台。

:::

按照编程语言的传统，我们要介绍一门语言的第一个程序，一般来说是在屏幕打印 “Hello World”。在 Yaklang 中，我们仅仅用一行就可以表示这个程序：


```go
print("Hello World")
// 输出：Hello World
```

这个语法看起来应该对你来说很熟悉。在 Yaklang 中，这一行代码就是一完整的程序，你不需要像其他语言一样必须使用一个“库”，或者把它封装成“类”来使用。在 Yaklang 中，我们讲究“符合逻辑”的设计原因。在上述代码中，如果不是必要情况，你不需要关心 `main()` 函数如何定义，也不需要在行末尾新增一个 “分号”。

我们这个文档将会给你一个针对 Yaklang 的极简的快速入门，可以帮助你快速上手。并且基本上你可以通过这篇文章瞥见 Yaklang 几乎所有的特性。如果遇到有一些复杂的内容和概念，我们会在后续的章节中进行详细介绍。你也可以随时遇到不清楚的语法部分直接找到更详细的章节中查看。

### 创建变量

在 Yaklang 中，你可以使用 `var` 来创建一个变量，也可以直接使用 `=` 来自动创建一个变量，也可以通过 `:=` 来强制创建一个新的变量。

```go
var myVariable = 1
myVariable = 2
myVariable := 3
var myAnotherVariable
```

这几种方式都可以创建一个变量，但是它们有不同的用途。

1. `var myVariable = 1` 这种方式和 `myVariable := 1` 是等价的，都表示创建一个新的变量
2. `myVariable = 2` 这种方式表示将 `myVariable` 的值设置为 `2`，具体含义为：如果之前没有出现过 `myVariable` 这个变量，那么就会创建一个新的变量，如果出现过，那么就会将 `myVariable` 的值设置为 `2`
3. `var myAnotherVariable` 这种方式表示创建一个新的变量，但是这个变量没有被初始化，因此它的值是 `nil`。

:::tip 注意

Yaklang 是一门动态类型语言，我们并不需要关心变量的类型，Yaklang 会自动根据你赋值的内容来推断变量的类型。因此在创建变量的时候，不可以指定变量的类型。

:::

在 Yaklang 中如果要创建一个变量，一般可以使用赋值语句来创建，如果要创建一个空变量，可以直接使用 `var variableName` 来创建。

### 创建值（字面量）

在 Yaklang 中，值（字面量）是一些基本的数据类型，比如空值（`nil`），整数、浮点数、字符串、布尔值、数组、字典、函数等。我们基本可以认为，值是变量的值，而变量是值的容器。

```
myIntVariable = 1
myFloatVariable = 3.14
myStringVariable = "Hello World"
myBoolVariable = true
myArrayVariable = [1, 2, 3]
myDictVariable = {"key": "value"}
myFunctionVariable = func() {
    print("Hello World")
}
```

由于 Yaklang “符合直觉” 的设计哲学，上述代码中，我们几乎不需要解释什么内容，读者可以自然读懂。

### 重要类型：`string`

在 Yaklang 中，`string` 类型是字符串类型，它是一个字符串的集合。这个类型非常重要，在我们的实际工程中，我们大量的数据都是以字符串的形式进行传输和存储的。因此，我们需要了解一些关于 `string` 的常用操作，这会帮助用户在后面的学习中如虎添翼。

#### 创建字符串

Yaklang 中的创建字符串的方式有多种：

1. 使用双引号创建字符串

```go
myString := "Hello World"
```

使用双引号创建的字符串和 C 语言风格字符串几乎一样，我们需要注意他的转义特性，字符串内部如果需要 `"` 则需要使用 `\"` 来表示，同样的如果需要输入换行，则需要使用 `\n` 来表示。

2. 使用反引号创建字符串

```go
myString := `Hello World`
```

使用反引号创建的字符串，可以包含换行符，因此可以用来创建多行字符串。这个特性是一个非常常见的特性。**注意：反引号创建的字符串不会转义，因此如果反引号的字符串不能再包含反引号了**

3. Heredoc 语法

```go
myString := <<<EOF
Hello World
EOF
```

Heredoc 语法可以用来创建多行字符串，并且可以包含换行符。与反引号不同的是，Heredoc 语法可以包含反引号。

#### 字符串格式化与插值

假如我们用户叫 `John`，我们希望输出 `Hello John`，那么我们可以使用 `string` 的格式化功能来实现。接下来，我们使用各种代码案例来介绍

1. 使用 `string % element` 语法来格式化字符串

```go
name := "John"
println("Hello %v" % name)
// 输出：Hello John
```

这种语法使用 `%v` 来表示变量的值，`%v` 是 `value` 的缩写，表示变量的值的展示形态，Yaklang 会根据变量的类型来决定展示形态。同样的，类似其他编程语言，用户也可以通过 `%d` 来表示整数，通过 `%f` 来表示浮点数，通过 `%s` 来表示字符串。

```go
name, age := "John", 20
println("Hello %v, you are %v years old" % [name, age])
// 输出：Hello John, you are 20 years old
```

如果字符串中，有多个展位符，需要展示多个变量，那么在 `%` 后面需要使用 `[]` 来包裹多个变量。例如上面的案例： `[name, age]` 表示展示 `name` 和 `age` 两个变量。渲染在字符串中，会变成 `Hello John, you are 20 years old`。

2. 使用 `sprintf` 函数来格式化字符串

```go
name := "John"
println(sprintf("Hello %v", name))
// 输出：Hello John
```

`sprintf` 本质上和 `%` 语法是等价的，但是 `sprintf` 对多个变量的支持是通过直接输入多个参数来实现的，而不是 `[]` 包裹多个变量。

```go
name, age := "John", 20
println(sprintf("Hello %v, you are %v years old", name, age))
// 输出：Hello John, you are 20 years old
```

3. f-string 插值语法

```go
name := "John"
println(f"Hello ${name}")
// 输出：Hello John

name, age := "John", 20
println(f"Hello ${name}, you are ${age} years old")
// 输出：Hello John, you are 20 years old
```

f-string 插值的用法是，在字符串创建之前加一个 `f` 作为前缀，字符串中就可以使用 `${  }` 包裹想放入的表达式。在上述案例中，我们把 `${name}` 放入，则就会在字符串的 `${name}` 位置插入 `name` 的值。这是非常常用且好用的语法。

### 复合类型：列表与字典

在前面的小节中，我们基本知道了字典和列表可以直接使用字面量来创建：

```
// 列表
myList := [1, 2, 3]

// 字典
myDict := {"key": "value"}
```

同样的，这两个类型也有一系列的常见操作，用户可以参考下面的案例来了解这些操作：

1. 列表的“增删改查”：

```go
myList = [1,2,3]

myList.Append(4)
println(myList)
// 输出：[1 2 3 4]

myList.Remove(2)
println(myList)
// 输出：[1 3 4]

myList[1] = 999
println(myList)
// 输出：[1 999 4]

println(myList[2])
// 输出：4
println(myList[:2])
// 输出: [1 999]
println(myList[1:])
// 输出: [999 4]
println(myList[1:3])
// 输出：[999 4]
```

除了上述的基本用法之外，`list` 也支持 `newList = append(oldList, element)` 的用法（`append` 是一个内置函数）。

```go
myList = [1,2,3]
newList = append(myList, 4)
println(newList)
// 输出：[1 2 3 4]

newList = append(newList, 5, 6, 7)
println(newList)
// 输出：[1 2 3 4 5 6 7]
```

2. 字典的“增删改查”：

```go
myDict = {}

myDict["name"] = "John"
myDict["age"] = 12
println(myDict)
// 输出：map[age:12 name:John]

myDict.Delete("age")
println(myDict)
// 输出：map[name:John]

myDict["name"] = "Tom"
myDict["age"] = 22
println(myDict)
// 输出：map[age:22 name:Tom]

println(f`Hello ${myDict["name"]}, your age is ${myDict["age"]}`)
// 输出：Hello Tom, your age is 22
```

根据上述内容，我们可以很快理解字典和列表的常见操作，当然涉及到完整的列表和字典（Map）的操作，用户可以在更详细的文档中查阅，这里就不再赘述了。


### 控制流

在 Yaklang 中，我们直接使用 IF 和 Switch 来实现条件控制流。使用 For 来构建循环控制流。使用大括号来包裹控制流中的代码块儿。大家可以直接通过下面的案例快速了解 Yaklang 中的控制流

```go
scores = [10, 20, 30, 40, 50, 60, 70, 80, 99, 100]
teamScore = 0
for score in scores {
    if score > 90 {
        teamScore += 3
    } elif score > 80 {
        teamScore += 2
    } elif score > 70 {
        teamScore += 1
    } else {
        teamScore += 0
    }
}
println(teamScore)
// 输出：7
```

我们发现，上述代码中，我们使用了 `elif` 来表示 "否则如果"，这个语法在其他编程语言中非常常见，实际上，熟悉其他编程语言的同学可能会更喜欢 `else if` 的写法，在 Yaklang 中，我们也可以使用 `else if` 来表示 "否则如果"。观察下面的案例，它在 Yaklang 中仍然是可以生效的，并且和 `elif` 语法是等价的。在实际使用中，你不需要纠结这个问题，按自己的习惯来写即可。

```go
result = ""
age = 18
if age > 80 {
    result = "old man"
} else if age > 10 {
    result = "teenager"
} else {
    result = "child"
}
println(result)
// 输出：teenager
```

在 for 循环中，Yaklang 可以使用 `in` 来表示 foreach 循环。在 `in` 的左边表示当次循环体执行的变量，在 `in` 的右边表示循环的集合。

```go
scores = [10, 20, 30, 40, 50, 60, 70, 80, 99, 100]
for score in scores {
    println(score)
}
// 输出：
// 10
// 20
// 30
// 40
// 50
// 60
// 70
// 80
// 99
// 100
```

这种循环非常符合 `python` 的使用直觉，但是如果用户更喜欢 Golang 风格的 `for range` 语法，那么可以参考下面的案例：

```go
scores = [10, 20, 30, 40, 50, 60, 70, 80, 99, 100]
for index, score = range scores {
    println(index, score)
}
// 输出：
// 0 10
// 1 20
// 2 30
// ...
```

在 `for range` 语法中，`index` 表示当前循环的索引，`score` 表示当前循环的值。用户按需决定自己如何使用 foreach 循环即可，这两种在 Yaklang 中的实现几乎没有特殊的差别。

在 for 循环中，用户也可以通过 `for condition {}` 来实现 while 循环。

```go
i := 0
for i < 10 {
    println(i)
    i += 1
}
// 输出：
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
```

上述代码中，我们通过 `for condition {}` 来实现 while 循环，`condition` 表示循环的条件，当 `condition` 为 `true` 时，循环会继续执行，当 `condition` 为 `false` 时，循环会结束。

除了上面的内容，Yaklang 也支持经典的三段式的 For 循环

```go
for i := 0; i < 10; i++ {
    println(i)
}
// 输出：
// 0
// 1
// 2
// ...
```

上述代码中，我们通过 `for i := 0; i < 10; i++` 来实现三段式的 For 循环，`i := 0` 表示初始化变量 `i`，`i < 10` 表示循环的条件，`i++` 表示循环的步进。这种写法非常贴近 Golang 和 C 的写法，用户可以按需选择。

### 函数与函数调用

Yaklang 中函数使用非常自由，有很多种方式可以创建函数，

```go
func myFunction() {
    println("Hello World")
}
myFunction()
// 输出：Hello World

fn helloName(name) {
    return sprintf("Hello %v", name)
}
println(helloName("John"))
// 输出：Hello John

def helloNameAndAge(name, age) {
    return sprintf("Hello %v, you are %v years old", name, age)
}
println(helloNameAndAge("John", 20))
// 输出：Hello John, you are 20 years old
```

上述代码是最基础的函数创建与使用的案例，实际上在 Yaklang 中，创建函数的关键字不仅可以使用 `func`，还可以使用 `fn` 或者 `def` 来创建函数。这三个关键字都是等价的，用户可以根据自己的习惯来选择。

除了声明式的创建函数之外，Yaklang 还支持箭头函数，箭头函数是函数的一种简写形式，用户可以通过 `=>` 来创建箭头函数。

```go
myFunction = () => {
    println("Hello World")
}
myFunction()
// 输出：Hello World

helloName = (name) => {
    return sprintf("Hello %v", name)
}
println(helloName("John"))
// 输出：Hello John

helloNameAndAge = (name, age) => {
    return sprintf("Hello %v, you are %v years old", name, age)
}
println(helloNameAndAge("John", 20))
// 输出：Hello John, you are 20 years old
```

上述代码中，我们展示了箭头函数的使用，在上面案例中，箭头 `=>` 的左边表示参数，右边表示返回值。如果参数只有一个，可以省略括号，例如 `hellName = (name) => { return sprintf("Hello %v", name) }` 可以简写为 `hellName = name => sprintf("Hello %v", name)`。

箭头函数中箭头的右边可以是一个表达式也可以是代码块儿，如果是一个表达式，那么表达式会自动返回，如果是一个代码块儿，那么代码块儿会自动返回最后一个表达式的值。

```go
helloName = name => sprintf("Hello %v", name)
println(helloName("John"))
// 输出：Hello John
```

这个语法非常简洁，用户可以根据自己的编程需求选择最适合自己的函数创建方式。

#### 函数与闭包

在 Yaklang 的函数中，函数会自动捕获和访问外部变量，这个特性在函数式编程中非常常见，我们称之为闭包。

```go
name := "John"
helloWithOutterName = () => sprintf("Hello %v", name)
println(helloWithOutterName())
// 输出：Hello John
```

上述代码中，我们创建了一个函数 `helloWithOutterName`，这个函数会自动捕获和访问外部变量 `name`，因此我们可以在函数内部使用 `name` 这个变量。

除了自动捕获，函数内部也可以修改外部变量

```go
name := "John"
helloModifiedWithOutterName = () => {
    name = "Jane"
    return sprintf("Hello %v", name)
}
println(helloModifiedWithOutterName())
// 输出：Hello Jane
```

闭包特性在进行一些类函数式编程或者复杂编程的时候，会极大提升表现力。这是一个非常方便并且重要的特性。


### 库函数的使用

Yaklang 是一个安全领域的 DSL，我们内置了很多安全领域的函数，用户可以直接使用这些函数来完成一些常见的安全工具的开发。

最典型的案例就是我们在 “速览” 中的 `servicescan.Scan` 函数，这个函数可以用来扫描目标主机的服务。

```go
results, err = servicescan.Scan(scanTarget, scanPorts)
die(err)

for result in results {
    println(result.String())
}
```

上述代码中，我们使用了 `servicescan.Scan` 函数来扫描目标主机的服务，并且将扫描结果赋值给 `results` 变量。然后我们通过 `for result in results` 来遍历扫描结果，并且将每个扫描结果打印出来。关键函数调用中：`servicescan` 是一个库， `Scan` 是库中的一个函数。在 Yaklang 中，库函数的使用非常简单，用户只需要使用库名点函数名即可。

很多安全相关的库和函数直接内置在 Yaklang 中，用户不需要安装任何依赖，也不需要在语言中进行导入，直接使用即可。类似的案例还有 `synscan.Scan` 启动 SYN 端口开放扫描, `mitm.Start` 启动 MITM 劫持服务器等。

:::tip

这些库和函数很多都是原本 Golang 代码实现的，他的返回值很多都在内部包含了 error 类型，因此用户在调用这些函数的时候，需要使用 `die(err)` 来处理错误。

也可以通过 `~` 这个语法来自动处理错误。关于如何处理错误，我们在下一小节为大家详细讲解。

:::

### 错误处理

1. 手动接受错误，并通过 `die(err)` 来处理错误

```go
results, err = servicescan.Scan(scanTarget, scanPorts)
die(err)
```

如果函数返回了错误，那么用户需要手动接受错误，并通过 `die(err)` 来处理错误。如果没有返回错误，这么写将会报错。

2. 使用 `~` 语法来自动处理错误（WavyCall）

```go
results = servicescan.Scan(scanTarget, scanPorts)~
```

使用 `~` 语法，可以自动处理错误，和 `die(err)` 的效果是一样的，但是有一些语法上的区别：


- 一个函数不管他返回值最后一个是不是 error 类型，都可以使用 `~` 语法来处理错误;
- `~` 的效果是：如果函数返回的错误不为空（函数发生错误），则会抛出错误中断当前函数的执行;

3. 使用 Try-Catch 语法来捕获错误

Yaklang 编程的时候，支持 try-catch 语法，用户可以捕获错误，并进行处理。

```go   
try {
    results = servicescan.Scan(scanTarget, scanPorts)~
    for result in results {
        println(result.String())
    }
} catch err {
    println(err)
} finally {
    println("finally")
}
```

上述代码是一个典型的 try-catch-finally 语法，用户可以捕获错误，并进行处理。需要注意的是 `catch` 后可以指定一个变量，在 try 中捕获的错误会赋值给这个变量。这个变量两边不能包含括号 `( )`。

4. 使用 `defer recover()` 来捕获错误

```go
defer {
    err = recover()
    if err != nil {
        println(err)
    }
}
```

Yaklang 除了传统的 try-catch-finally 语法之外，还支持 `defer recover()` 语法来捕获错误。在这种错误处理模式中，用户可捕捉到中断当前函数执行的错误，并进行处理。

这种错误处理方式通常应用于用户自定义函数中，或者需要整体保证函数执行的完整性。参考如下案例：

```
myFunc = () => {
    defer func {
        err = recover()
        if err != nil {
            println(err)
        }
    }
    println("Before Error")
    1/0
    println("After Error")
}
myFunc()
// 输出：
// 
// Before Error
// runtime error: integer divide by zero
```

上述代码中，我们定义了一个函数 `myFunc`，在函数内部，我们使用 `defer` 语法来捕获错误，并进行处理。当函数执行到 `1/0` 的时候，会抛出错误，并中断当前函数的执行。

:::tip

如果我们使用 `~` 抛出一个错误，那么 `defer recover()` 将会捕获到这个错误，同样的 `try-catch-finally` 也会捕获到这个错误。

因此我们经常组合使用 `~` 和 `defer recover()` 来捕获错误。

:::

### 并发编程

Yaklang 支持并发编程，用户可以通过 `go` 关键字来创建并发任务，从语法上看， `go` 关键字后一般可以跟随一个匿名函数调用。表示以异步的形式立即调用后面的函数。

```go
go func() {
    println("Hello World in Goroutine")
}()
sleep(1)
println("Hello World in Main")
// 输出：Hello World in Goroutine
// 输出：Hello World in Main
```

上述代码中，我们通过 `go` 关键字来创建了一个并发任务，这个任务会立即执行，并且会立即返回，一秒后，主进程会打印 "Hello World in Main"。因此我们会得到输出为 

```
Hello World in Goroutine
Hello World in Main
```

:::tip

熟悉 Golang 的用户会非常喜欢这个特性。

:::

#### 使用 WaitGroup 来等待并发任务完成

通常我们使用 `go` 关键字来创建并发任务，但是这些并发任务执行完毕后，我们可能需要等待这些并发任务执行完毕，这时候我们可以使用 `WaitGroup` 来等待这些并发任务执行完毕。

```go
wg = sync.NewWaitGroup()
for element in [1,2,3] {
    element := element
    wg.Add(1)
    go func() {
        defer wg.Done()
        println(element)
    } ()
}
wg.Wait()
println("All Goroutine is done")
```

上述代码中，我们通过 `sync.NewWaitGroup()` 来创建了一个 `WaitGroup`，然后我们通过 `for` 循环来创建了三个并发任务，每个并发任务都会将 `wg.Add(1)` 的计数器加一，表示有一个并发任务正在执行。然后我们通过 `wg.Wait()` 来等待所有并发任务执行完毕。

#### 使用 SizedWaitGroup 来限制并发资源使用

在用户熟悉 `WaitGroup` 我们发现，`WaitGroup` 的计数器没有限制，用户理论上可以无限添加任务，这在实际使用中可能会导致一些问题。因此，Yaklang 提供了 `SizedWaitGroup` 来限制并发资源的使用。

```
wg = sync.NewSizedWaitGroup(2)
for element in [1,2,3] {
    element := element
    wg.Add(1)
    go func() {
        defer wg.Done()
        println(element)
        sleep(1)
    } ()
}
wg.Wait()
println("All Goroutine is done")
```

用户可以指定 `SizedWaitGroup` 的计数器，当计数器达到最大值后，新的任务将不会被添加到 `WaitGroup` 中，直到有任务完成，计数器才会减少，`wg.Add()` 才会执行完毕，计数器才会增加。这个编程模式在实际使用中非常有用，可以用来限制并发资源的使用。


<!-- ### 语言基础架构

![](/img/docs/yak_core/yak-modules.jpg) -->

