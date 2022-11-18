---
sidebar_position: 3
---

# 基础语法(新yakvm引擎)：目标10分钟上手

Yak 是一门纯 Golang 的嵌入式语言，是一门纯 Golang 实现的基于反射特性的语言，语法在一定程度上保留了 Golang 的风格，同时吸取了一些优秀语言的特性(如c,python)，甚至可以实现 Golang 语言的对象无缝开放给 Yak 使用的功能。

Golang 的一些令人惊叹的特性我们在 Yak 中也可以找到实现，比如大家熟悉或者有所耳闻的 `go 关键字`，`defer` 关键字，`管道` 等。

在保留这些优秀功能的同时，我们极大的简化了 Golang 的语法，移除了静态类型的特性，移除了严格的语法检查，这是一门动态强类型语言，同时，我们也尽力兼容了一些动态语言常见的使用场景。

**最令人激动的**其实是我们在语言内置了各种安全从业人员需要的安全扫描工具和前无古人的模糊测试模块。

我们希望 Yak 对与安全从业人员是相当友好的，10 分钟即可上手！如果你熟悉 Golang 和 Python，我相信 Yak 一定也是你将会非常喜爱的胶水语言。

> yak 每行结尾不需要加分号，当然加了也没关系

## 运算符

### 基础运算符

```go
// 加减乘除:  1 + 4 * 5
'+' '-' '*' '/' 

// 取余数或格式化字符串
'%'

// 赋值运算符, = 与 := 的区别在于后者会强制在当前作用域定义新的变量
'=' ':=' 

// c系列的自增自减运算符
'++' '--'

// 运算赋值，值得注意的是，++ 和 -- 只能用在变量后，其相当于 += 1 / -= 1
'+=' '-=' '*=' '/=' '%=' '++' '--'

// 位运算
'^' '&' '&^' '|' '<<' '>>'

// 位运算赋值
'^=' '&=' '&^=' '|=' '<<=' '>>='

// 单位运算符，取反
'!'

// 逻辑比较运算符
'>=' '<=' '>' '<' '==' '!=' '&&' '||'
```

### 三元运算符: `condition ? value1 : value2`

yak也同时支持在c系语言中常见三元运算符，其使用方法完全相同，例如:

```go
a = true ? "1" : "2" // "1"
b = 2>1?(2<1?true:false):false // false
c = true?false?true:false:false // false
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

/* OUTPUT:
first:     123
seconds:   456
*/
```

### 特殊运算符，格式化字符串: `%`

我们可以使用sprintf实现简单地实现格式化字符串:

```go
println(sprintf("here is string: %s and int: %d", "something", 0))
```

当然一个更简单的方法是类似于python的语法糖`%`:

```go
s = "here is string: %s" % "something"
s2 = "here is int: %d and %d" % [1, 2]
println(s) // here is string: something
println(s2) // here is int: 1 and 2
```

### 特殊运算符，判断是否存在: `in`和`not in`

`in`运算符与python中的表现类似:

```go
// 包含子字符串，等价于str.Contains("aabb", "aa")
assert "aa" in "aabb"

// 元素是否在Slice/Array中存在
assert 1 in [1, 2, 3]

// 键是否在Map/Dict中存在
assert "key" in {"key":"value"}

// 方法是否在库中存在
assert "Now" in time

// 结构体字段/方法是否在结构体中存在
assert "Add" in time.Now()

// not in 用法与in相同，其结果与not相反
assert "bb" not in "aa"
```



### 基础运算符的扩展，合并Slice/Array: `+`

与python类似，yak可以使用+号合并Slice/Array:

```go
println([1, 2, 3]  + [4, 5, 6]) // [1 2 3 4 5 6]
println([1, 2, 3]  + ["aaa", "bbb"]) // [1 2 3 aaa bbb]
```



### 基础运算符的扩展，重复字符串: `*`

与python类似，yak可以使用*号来生成重复的字符串，注意，这里`*`号只能用于生成重复的字符串，不能像python一样生成重复元素组成数组等:

```go
println("a" * 3) // aaa
println([]byte{104} * 3) // [104 104 104]
```



## 类型与数据结构

### 基础数据类型

```golang
1. int/int8/int16/int32/int64
2. uint/uint8/uint16/uint32/uint64
3. float/float64/double
4. string
5. byte
6. bool
7. var       // 可以理解为any类型，其实际上等效于 Golang 的 interface{}          
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
2. `map`：用于以键值对的形式存储数据的结构（等效于 Python 中的 `dict`，**但它是无序的**），同 Golang 中的 map
3. `chan`：Yak 与 Golang 特有的复合数据类型，通过 `make(chan <T>)` 创建，`<T>` 为这个 chan 数据通道传输的数据类型，可以类比为 Python 中的 Queue

### 函数类型与类

1. 闭包与函数均是特殊类型的实例，同 Golang 与 Python，我们可以把函数赋值给一个变量，在你想使用它的时候使用它
2. 类与类成员函数也是本语言可支持的特色之一，但是对于脚本语言来说，OOP 的特性支持会极大增加语言复杂程度，尽管语言支持，但是我们并不希望这个特性被广泛使用

### 强制类型转换

yak里也可以允许强制类型转换，其语法为: `type(expression)`

一个简单的示例如下

```go
assert int(123) == 123, "convert int to int failed"
assert int(123.0) == 123, "convert float to int failed"
assert int("123") == 123, "convert string to int failed"
assert int(true) == 1, "convert boolean to int failed"
assert int(false) == 0, "convert boolean to int failed"

assert float(123.3) == 123.3, "convert floatint to float failed"
assert float(123) == 123, "convert int to float failed"
assert float("123.3") == 123.3, "convert string to float failed"
assert float(true) == 1, "convert boolean to float failed"
assert float(false) == 0, "convert boolean to float failed"

assert string(123.3) == "123.3", "convert float to string failed"
assert string(123) == "123", "convert int to string failed"
assert string("123.3") == "123.3", "convert string to string failed"
assert string(true) == "true", "convert boolean to string failed"
assert string(false) == "false", "convert boolean to string failed"

assert bool(123.3) == true, "convert float to bool failed"
assert bool(123) == true, "convert int to bool failed"
assert bool("123.3") == true, "convert string to bool failed"
assert bool(true) == true, "convert boolean to bool failed"
assert bool(false) == false, "convert boolean to bool failed"
assert bool(0) == false, "convert int to bool failed"

assert []byte("qwe") == 0h717765, "convert string to []byte failed"
```



### 如何使用 Slice / List

#### 声明一个 Slice

```go
b = [1, 2.3, 5]         // 创建一个 []float
c = ["a", "b", "c"]     // 创建一个 []string
d = ["a", 1, 2.3]       // 创建一个 []var (等价于 Go 语言的 []interface{})
e = make([]int, 3, 3)   // 创建一个 []int，并将长度设置为 3，容量设置为 3
f = make([][]int, 3, 3) // 创建一个 [][]int，并将长度设置为 3，容量设置为 3
g = []byte{1, 2, 3}     // 创建一个 byte slice，并初始化为 [1, 2, 3]
h = []byte(nil)         // 创建一个空 byte slice
```

#### Slice / List 的基础操作

#### 追加

同 Golang 用法

```go
a = append(a, 1, 2, 3) // 往a后追加 1,2,3 三个元素
```

#### 长度与容量

通过 `len` 函数获取 Slice 的元素个数，通过 `cap` 函数获得 slice 的容量，同 Golang 用法

```go
a = append([1,2,3], 5,6,7)
length = len(a)
println("len(a): ", length)

capValue = cap(a)
println("cap(a): ", capValue)

/* OUTPUT:
len(a):  6
cap(a):  6
*/
```

#### 复制

`copy(dst, src)` 把 src的元素复制到 dst中，复制的元素个数为 `min(len(src), len(dst))`

```go
a = [1,2,3]
b = [4,5,6,7,8]
copiedCount = copy(a, b)
println("copy(a, b) returns ", copiedCount)
println("slice a now: ", a)

/* OUTPUT:
copy(a, b) returns  3
slice a now:  [4 5 6]
*/
```

#### 取值

 按索引取数组元素，支持拆包，具体案例如下

```go
a = [1,2,3,4,5,6,7,8]
b = a[4:6]
c = a[:5]
d = a[3:]
e = a[::2]
index1 = a[1]
index2, index3 = a[2], a[3]

println("b: ", b)
println("c: ", c)
println("d: ", d)
println("e: ", e)
println("a[1]: ", index1)
println("a[2]: ", index2)
println("a[3]: ", index3)

/* OUTPUT：
b:  [5 6]
c:  [1 2 3 4 5]
d:  [4 5 6 7 8]
e:  [1, 3, 5, 7]
a[1]:  2
a[2]:  3
a[3]:  4
*/
```

#### 拆包

与python的拆包操作类似

```go
a, b, c = [1, 2.3, "stringValue"]
println("a: ", a)
println("b: ", b)
println("c: ", c)

/*
OUTPUT:
a:  1
b:  2.3
c:  stringValue
*/ 
```

#### 拆包赋值

与Go的拆包赋值操作类似

```go
a = make([]var, 4)
a[1], a[2], a[3] = 1, "asdfasdf", false

println("slice a: ", a)

/*
OUTPUT:
slice a:  [<nil> 1 asdfasdf false]
*/
```

### 如何使用 Map / Dict

#### 赋值与创建一个 Map / Dict

```go
a = {"a": 1, "b": 2, "c": 3}             // 得到 map[string]int 类型的对象
b = {"a":1,"b":2.3,"c": 3}               // 得到 map[string]float64 类型的对象
c = {1: "a", 2: "b", 3: "c"}             // 得到 map[int]string 类型的对象
d = {"a": "hello", "b": 2.0, "c": true}  // 得到 map[string]interface{} 类型的对象
e = make(map[string]int)                 // 创建一个空的 map[string]int 类型的对象
f = make(map[string]map[string]int)      // 创建一个 map[string]map[string]int 类型的对象
g = map[string]int16{"a": 1, "b": 2}     // 创建一个 map[string]int16 类型的对象
x = {}                                   // 创建一个 map[string]interface{}
x = make(map[var]var)                    // 创建一个 map[interface{}]interface{}
```

上述方法均可创建一个 map，我们发现：

1. 直接使用 `{key: value ... }` 方式创建的 map 会自动选择最兼容的类型

2. 使用 `make(map[T1]T2)` 可以创建指定类型的 map
   

#### map / dict 的基本操作

```go
a = {"a": 234, "b": "sasdfasdf", "ccc": "13"}      // 我们创建一个 map[var]var
n = len(a)                                         // 取 a 的元素个数，即map的键值对个数
println("len(a): ", n)
// OUTPUT: len(a):  3

x = a["b"]                                         // 取 a map 中 key 为 "b" 的元素
println(`a["b"]: `, x)
// OUTPUT: a["b"]:  sasdfasdf

a.noSuchKey                                        // 如果取一个不存在的 key，直接通过 .keyName 调用则会报错，退出程序、

// 当然，我们也可以把拆包解包用在 map 中
a["e"], a["f"], a["g"] = 4, 5, 6                   // 同 Go 语言
a.e, a.f, a.g = 4, 5, 6                            // 含义同 a["e"], a["f"], a["g"] = 4, 5, 6

// 如果你想要删掉 map 中的某个元素
a = {"a": 123, "b": 1345, "c": 999}
println("a.b: ", a.b)
delete(a, "b")
println("NOW map a: ")
dump(a)
/* OUTPUT:
a.b:  1345
NOW map a:
(map[string]int) (len=2) {
 (string) (len=1) "a": (int) 123,
 (string) (len=1) "c": (int) 999
}    
*/ 
```

如何判断元素是否存在或在元素不存在时取默认值？

:::tip 注意
**注意：在判断元素是否存在或在元素不存在时取默认值时，Yak 和 Golang 有区别**

```go
x = {"a": 1, "b": 2}
a = x["a"] // a = 1
c = x["c"]                      // c = nil
d = x["d"]                      // d = nil
// 判断元素是否存在

// 方法1:判断取值是否为undefined
if a != nil { // 判断 key"a" 在map中存在

}

// 方法2:使用in运算符
if "e" in x { // 判断 key"a" 在map中存在
    e = x["e"]
}

// 元素不存在时取默认值

// 方法1:使用三元运算符
f = "f" in x ? x["f"] : "fffff"  // f = "fffff"

// 方法2:使用get函数，第一个参数为map/dict，第二个参数为键，第三个参数为取不到键值时的默认值
g = get(x, "g", "ggggg") // g = "ggggg"
```

:::

### 如何使用 chan

#### chan的创建

创建 chan 与 Golang 保持相同的方法

```go
ch1 = make(chan bool, 2)        // 得到 size = 2 的 chan bool
ch2 = make(chan int)            // 得到 size = 0 的 chan int
ch3 = make(chan map[string]int) // 得到 size = 0 的 chan map[string]int
ch4 = make(chan []int, 0, 4)    // 得到 size = 0, cap = 4 的chan []int
```

#### chan 的读写

```go
/*创建一个 chan var*/
ch1 = make(chan var, 4)
ch1 <- 1
ch1 <- 2

// 基础操作
n = len(ch1)               // 取得chan当前的元素个数
m = cap(ch1)               // 取得chan的容量
v = <-ch1                  // 从chan取出一个值
/* 实际上我们可以用chan中取出两个值,例如:
v, ok = <-ch1
此时第一个值为管道拿到的值，第二个值为布尔值，表示是否成功从管道中拿到值
*/
close(ch1)                 // 关闭chan，被关闭的chan是不能写，但是还可以读(直到已经写入的值全部被取完为止)
v1 = <- ch1
v2 = <- ch1

// 查看操作的结果和特性
println("len(ch1): ", n)
println("cap(ch1): ", m)
println("<-ch1 执行第一次: ", v)
println("<-ch1 执行第二次: ", v1)
println("<-ch1 执行第三次: ", v2)

// 同样我们支持使用for-range来读取chan
ch2 = make(chan int, 1)
go func {
	for i=0;i<4;i++ {
		ch2 <- 1
	}
	close(ch2)
}
for v = range ch2 {
    println("<-ch2:",v)
}
/* OUTPUT:
len(ch1):  2
cap(ch1):  4
<-ch1 执行第一次:  1
<-ch1 执行第二次:  2
<-ch1 执行第三次:  nil
<-ch2: 1
<-ch2: 1
<-ch2: 1
<-ch2: 1
*/
```

### 如何使用 prefix-string

前缀字符串(即prefix-string)是python语言中流行的特性，yak作为后进者吸取了这一特性

#### b-string

与python的b前缀类似，使用这个前缀的字符串实际上被转换成了byte数组(即[]byte/[]uint8)

一个简单的示例如下

```go
a = b"qwe"
printf("value: %v, type: %T\n", a, a)
/* OUTPUT:
value: [113 119 101], type: []uint8
*/
```

#### f-string

与python>=3.6的f前缀类似，使用这个前缀的字符串可以使用`${表达式}`来执行表达式(**注意，在python中是{}，这与python不一样**)，并将表达式的结果作为字符串嵌入，它也可以很好地作为sprintf的替代

一个简单的示例如下

```go
a = {"key": "value"}
println(f`1 + 1 = ${1+1}`)
println(f`a: ${a}`)
/* OUTPUT:
1 + 1 = 2
a: map[key:value]
*/
```

#### x-string

这是yak语言中独有的一种前缀，使用这个前缀的字符串将会渲染fuzztag，其实际上是`fuzz.Strings()`的语法糖

一个简单的示例如下

```go
a = x"{{int(1-10)}}" // 相当于 a = fuzz.Strings("{{int(1-10)}}")
printf("value: %v, type: %T\n", a, a)
/* OUTPUT:
value: [1 2 3 4 5 6 7 8 9 10], type: []string
*/
```



## 流程控制语句

### 分支结构：if语句

if语句的用法与golang基本保持一致，**同时支持elif和else if**

一个简单的示例如下

```go
a = 5
if a > 2 {
    println("a > 2")
} else {
    println("a <= 2")
}

b = 10
if b > 15 {
    println("b > 15")
} elif b > 8 {
    println("b > 8")
} else {
    println("b <= 8")
}

c = -1
if c > 0 {
    println("c > 0")
} else if c < 0 {
    println("c < 0")
} else {
    println("c == 0")
}
/* OUTPUT:
a > 2
b > 8
c < 0
*/
```

### 分支结构：switch语句

yak switch 语句和 Golang 的有共同点也有不同点:

1. switch语句的用法与golang基本保持一致，支持break和fallthrough
2. yak switch 后的表达式只能是表达式，不能像 Golang 一样承载`赋值语句; 表达式`

一个简单的例子如下，可以通过这个例子了解到switch的特性：

```go
a = 1
switch a {
case 1:
    println("a = 1")
case 2:
    println("a = 2")
default:
    println("a != 1 && a != 2")    
}
/* OUTPUT: 
a = 1
*/

// case中可以使用,分割多个表达式,相当于或关系
a = 0
switch 1 {
case 1, 2:
    println("a = 1 || a = 2")
case 3:
	println("a = 3")
default:
	println("a != 1 && a != 2 && a != 3")
}
/* OUTPUT: 
a != 1 && a != 2 && a != 3
*/

// switch后可以不用表达式
switch {
case true:
    println("true")
default:
    println("default")
}
/* OUTPUT:
true
*/

// case短路
c = 0
switch 1 {
case 1, fn{c++}:
	c += 1
case 2:
	c += 4
default:
	c += 8
}
assert c == 1

// fallthrough
a = 1
switch {
case 1:
    println("a = 1")
    fallthrough
case 2:
    println("case 2")
}
/* OUTPUT:
a = 1
case 2
*/

// break
c = 0
switch 1 {
case 1:
    println("c = 1")
	break
case 2:
    println("c = 2")
default:
    println("c != 1 && c != 2")
}
/* OUTPUT:
c != 1 && c != 2
*/
```

### 循环结构：for语句

Yak的for语句同时吸收了golang和python的精髓，同时对其进行了扩展，其基本用法基本相同，支持break和continue

一个简单的示例如下

```go
// c系的for循环
for i=0;i<10;i++ {
    println(i)
}

/* OUTPUT:
0
1
2
3
4
5
6
7
8
9
*/

// golang的for-range循环遍历slice,map,channel
a = ["a", "b", "c", "d"]
for i, v = range a {
    println(i, v)
}
println()
z = [[1, 2], [3, 4], [5, 6]]
for i, j = range z {
    println(i, j)
}
println()
b = {"a": "b","c": "d","e": "f"}
for k, v = range b {
    println(k, v)
}
println()
ch = make(chan int, 1)
go func {
	for i=0;i<4;i++ {
		ch <- 1
	}
	close(ch)
}
for v = range ch {
    println(v)
}

/* OUTPUT:
0 a
1 b
2 c
3 d

1 2
3 4
5 6

a b
c d
e f

1
1
1
1
*/

// python的for-in循环遍历slice,map,channel
a = ["a", "b", "c", "d"]
for v in a {
    println(v)
}
println()
z = [[1, 2], [3, 4], [5, 6]]
for i, j in z {
    println(i, j)
}
println()
b = {"a": "b","c": "d","e": "f"}
for k in b { // 每次取key
    println(k, b[k])
}
println()
for k, v in b { // 每次取key和value
    println(k, v)
}
println()
ch = make(chan int, 1)
go func {
	for i=0;i<4;i++ {
		ch <- 1
	}
	close(ch)
}
for v in ch {
    println(v)
}
/* OUTPUT:
0 a
1 b
2 c
3 d

1 2
3 4
5 6

a b
c d
e f

a b
c d
e f

1
1
1
1
*/

// yak独有的for-number循环
for range 4 {
    println("1")
}
println()
for i = range 4 {
    println(i)
}
println()
for in 4 {
    println("1")
}
println()
for i in 4 {
    println(i)
}
/* OUTPUT:
1
1
1
1

0
1
2
3

1
1
1
1

0
1
2
3
*/

// yak里同样支持break与continue
for range 4 {
    println("1")
    break
}
println()
for i in 4 {
    if i > 2 {
	    continue        
    }
    println(i)
}

/* OUTPUT:
1

0
1
2
*/
```

## 断言语句

yak的assert断言语句与python使用方法类似，语法为:

```go
assert expression [, argument]
```

一个使用用例如下:

```go
a = [1, 2, 3]
assert a[0] == 1
assert a[1] == 3, "a[1] != 3"
```



## 使用函数/闭包：`def` `func` `fn` 均等效

### Yak 函数的定义：定义参数与可变参数

本质上 yak 函数的定义本质上都是 `func(params ...interface{}) interface{}` 因此可以对常见任何形态的函数定义做兼容。

```go
// 我们定义一个带参数的函数
func x(a) {
    println("exec in x func, recv: ", a)
}
println(x("aaa"))

/*
OUTPUT:
exec in x func, recv:  aaa
*/
```

```go
func argsTest1(vars...) {
    println("argsTest1 recv: ", vars)
}

func argsTest(var1, vars...) {
    println("var1: ", var1)
    println("vars: ", vars)
}

argsTest1(123, 1, 2, 3, 4, 5)
println("---------------------")
argsTest(123, 1, 2, 3, 4, 5)

/* OUTPUT:
argsTest1 recv:  [123 1 2 3 4 5]
---------------------
var1:  123
vars:  [1 2 3 4 5]
*/
```

### 匿名函数和闭包的定义：可直接赋值给变量，闭包立即调用

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

// 声明一个闭包，这个闭包将被立刻调用
def{
    println("这是一个闭包，声明的时候会立刻调用")
}

// 让 Goroutine 执行一个闭包函数
go def{
    sleep(0.5)
    println("在 Goroutine 中执行了闭包函数喔")
}

// aaa() 放在 Goroutine 中执行
go aaa()

// sleep 1 秒等待 Goroutine 执行完成
sleep(1)

/* OUTPUT:
具名函数 aaa 函数赋值给了 bbb，被调用了
具名函数 aaa 函数赋值给了 bbb，被调用了
匿名函数赋值给了 ccc，被调用了
这是一个闭包，声明的时候会立刻调用
具名函数 aaa 函数赋值给了 bbb，被调用了
在 Gorouting 中执行了闭包函数喔
*/
```



### 箭头函数定义：简短的匿名函数

yak支持了与ES6类似的箭头函数，箭头函数的语法比普通匿名函数更加简洁。

```go
// 多个参数
(参数1, 参数2, …, 参数N) => { 函数声明 }
(参数1, 参数2, …, 参数N) => 表达式

// 单个参数，此时圆括号是可选的
(单一参数) => {函数声明}
单一参数 => {函数声明}
(单一参数) => 表达式
单一参数 => 表达式

// 没有参数，此时应该写一对圆括号
() => {函数声明}
() => 表达式
```

一个简单的例子如下

```go
sum = (a, b) => a + b
println(sum(1, 2)) // 3
println(sum(2.5, 1.2)) // 3.7

anonymous = () => {println("here is anonymous")}
anonymous() // here is anonymous

/* OUTPUT:
3
3.7
here is anonymous
*/
```





### 函数的返回值：可以支持多个返回值，拆包

当我们定义的 yak 函数有多个返回值时，我们默认返回的是 `[]interface{}`，所以在函数返回的时候，可以支持自动拆包，这样做间接支持了 Golang 的多返回值语法。

```go
// 我们看如下案例
func testFunc(arg1, args...) {
    return 1, 2, arg1
}

rets = testFunc("test")
println("rets = testFunc(`test`) -> rets: ", rets)
println("---------------")
ret1, ret2, ret3 = testFunc("aaa", "bbb", "ccc")
println(`ret1, ret2, ret3 = testFunc("aaa", "bbb", "ccc")`)
println("ret1: ", ret1)
println("ret2: ", ret2)
println("ret3: ", ret3)

/*
rets = testFunc(`test`) -> rets:  [1 2 test]
---------------
ret1, ret2, ret3 = testFunc("aaa", "bbb", "ccc")
ret1:  1
ret2:  2
ret3:  aaa
*/
```

在 `rets = testFunc("test")` 的情况下， 我们发现 `rets` 的值为 `[1 2 test]` 直接印证了我们的说法。

当然在不完全拆包的情况下，会报错，我们看如下情况:

```go
func testFunc(arg1, args...) {
    return 1, 2, arg1
}
ret1, ret2 = testFunc("aaa", "bbb", "ccc")

/*
OUTPUT:

[ERRO] 2021-05-26 23:32:19 +0800 [default:yak.go:100] line 4: multi assignment error: require 3 variables, but we got 2
*/
```

### 类型的内置方法

Yak借鉴了python中的一些特性，某些类型会存在内置方法，例如`string`，`slice`，`map`类型

#### string类型的内置方法

一个简单的示例如下，它展示了`string`类型的全部内置方法: `Reverse()`, `Contains()`, `Replace()`, `ReplaceAll()`, `Slipt()`, `SplitN()`, `Sort()`, `Join()`, `Trim()`, `TimLeft()`,  `TimRight()`,  `HasPrefix()`,  `HasSuffxi()`, `Zfill()`, `Ljust()`, `Rjust()`, `Count()`, `Find()`, `Rfind()`, `Lower()`, `Upper()`, `Title()`, `IsLower()`, `IsUpper()`, `IsTitle()`, `IsAlpha()`, `IsDigit()`, `IsAlnum()`, `IsPrintable()`

```go
assert "abcdefg".Reverse() == "gfedcba"
assert "abcabc".Contains("abc") == true
assert "abcabc".Contains("qwe") == false
assert "abcabc".Replace("abc", "123", 1) == "123abc"
assert "abcabc".Replace("abc", "123", 2) == "123123"
assert "abcabc".ReplaceAll("abc", "123") == "123123"
assert "abc1abc".Split("1") == ["abc", "abc"]
assert "abc1abc1abc".SplitN("1", 2) == ["abc", "abc1abc"]
assert "1".Join(["abc", "abc"]) == "abc1abc"
assert "pabcp".Trim("p") == "abc"
assert "pabc".TrimLeft("p") == "abc"
assert "abcp".TrimRight("p") == "abc"
assert "abcdefg".HasPrefix("abc") == true
assert "abcdefg".HasSuffix("efg") == true
assert "abc".Zfill(5) == "00abc"
assert "abc".Zfill(2) == "abc"
assert "abc".Rzfill(5) == "abc00"
assert "abc".Rzfill(2) == "abc"
assert "abc".Ljust(5) == "abc  "
assert "abc".Ljust(2) == "abc"
assert "abc".Rjust(5) == "  abc"
assert "abc".Rjust(2) == "abc"
assert "abcabc".Count("abc") == 2
assert "abcabc".Count("qwe") == 0
assert "abcabc".Find("abc") == 0
assert "abcabc".Find("qwe") == -1
assert "abcabc".Rfind("abc") == 3
assert "abcabc".Rfind("qwe") == -1
assert "ABC".Lower() == "abc"
assert "abc".Upper() == "ABC"
assert "abc".Title() == "Abc"
assert "ABC".IsLower() == false
assert "abc".IsLower() == true
assert "ABC".IsUpper() == true
assert "abc".IsUpper() == false
assert "abc".IsTitle() == false
assert "Abc".IsTitle() == true
assert "abc".IsAlpha() == true
assert "abc1".IsAlpha() == false
assert "abc".IsDigit() == false
assert "123".IsDigit() == true
assert "abc".IsAlnum() == true
assert "abc1".IsAlnum() == true
assert "abc1 ".IsAlnum() == false
assert "abc".IsPrintable() == true
assert "abc1 ".IsPrintable() == true
assert "abc1 \xff".IsPrintable() == false
```



#### slice类型的内置方法

一个简单的示例如下，它展示了`slice`类型的全部内置方法: `Append()`, `Extend()`, `Pop()`, `Insert()`, `Remove()`, `Reverse()`, `Sort()`, `Clear()`, `Count()`, `Index()`

```go
a = [1, 2, 3]
a.Append(4)
assert a == [1, 2, 3, 4], sprint(a)
a.Extend([5, 6])
assert a == [1, 2, 3, 4, 5, 6], sprint(a)
// 
a = [1, 2, 3, 4]
v = a.Pop()
assert a == [1, 2, 3], sprint(a)
assert v == 4, v
v = a.Pop(1)
assert a == [1, 3], sprint(a)
assert v == 2, v
v = a.Pop(99999)
assert a == [1], sprint(a)
assert v == 3, v
a = [1, 2, 3, 4, 5]
v = a.Pop(-2)
assert a == [1, 3, 4 ,5], sprint(a)
assert v == 2, v
v = a.Pop(-999999)
assert a == [1, 3, 4], sprint(a)
assert v == 5, v
a.Insert(1, 2)
assert a == [1, 2, 3, 4], sprint(a)
a.Insert(999, 5)
assert a == [1, 2, 3, 4, 5], sprint(a)
a.Insert(-1, 999)
assert a == [1, 2, 3, 4, 999, 5], sprint(a)
a.Insert(-9999, 0)
assert a == [0, 1, 2, 3, 4, 999, 5], sprint(a)
//
a = [1, 2, 1]
a.Remove(1)
assert a == [2, 1], sprint(a)
a.Remove(1)
assert a == [2], sprint(a)
//
a = [1, 2, 3, 4]
a.Reverse()
assert a == [4, 3, 2, 1], sprint(a)
a = [1, 2, 3, 4, 5]
a.Reverse()
assert a == [5, 4, 3, 2, 1], sprint(a)
//
a = [4, 1, 3, 2]
a.Sort()
assert a == [1, 2, 3, 4], sprint(a)
a = [4, 1, 3, 2]
a.Sort(true)
assert a == [4, 3, 2, 1], sprint(a)
//
a = [1, 2, 3]
a.Clear()
assert a == [], sprint(a)
//
a = [1, 2, 3, 1]
assert a.Count(1) == 2, a.Count(1)
assert a.Count(5) == 0, a.Count(5)
//
a = [1, 2, 3, 4]
assert a.Index(0) == 1, a.Index(0)
assert a.Index(2) == 3, a.Index(3)
assert a.Index(9999) == 4, a.Index(9999)
assert a.Index(-1) == 4, a.Index(-1)
assert a.Index(-9999) == 1, a.Index(-9999)
```

#### map类型的内置方法

一个简单的示例如下，它展示了`map`类型的全部内置方法: `Keys()`, `Values()`, `Entries()/Items()`, `ForEach()`, `Set()`, `Remove()/Delete()`, `Has()`, `Length()`

```go
a = {"a":1,"b":2}
assert len({}.Entries()) == 0
assert len(a.Entries()) == 2
assert len(a.Items()) == 2
assert len(a.Keys()) == 2
assert a.Keys()[0] == "a"
assert a.Values()[0] == 1
a.ForEach(func(k,v){	
	assert k in ["a","b"]
	assert v in [1,2]
})
a.Set("c",3)
assert len(a) == 3
a.Remove("a")
a.Delete("a")
assert len(a) == 2
assert a.Has("a") == false
assert a.Has("c") == true
```





## Go 关键字与 Goroutine

### 基础用法

Goroutine 是 Golang 最强大的特性之一，Yak 完美继承了这一特性。

Yak 脚本与 Golang 的 Go 的作用都是相同的，但是需要注意一点的是，`go` 关键字可以用来启动 yak 的闭包函数

在 Golang 中，我们启动一个 Goroutine 通过以下操作启动

```go
go func(){
    // ...do some codes
}()
```

在 yak 中，我们不仅兼容了上述写法，我们执行如下命令，都是等效的

```go
//  goroutine 启动来函数异步调用
go func(){
    /*do sth*/
}() // 兼容 Go 的写法

go fn(){
    /*do sth*/
}() // 也可以使用fn关键字代替func关键字

go def(){
    /*do sth*/
}()  // 兼容 Python 定义方法的关键字

// 定义闭包，执行 Goroutine
go fn{
    /*do sth*/
}

go func{
    /*do sth*/
}

go def{
    /*do sth*/
}
```

### 并发控制用例

一个比较复杂的例子：

```go
wg = sync.NewWaitGroup()
wg.Add(2)

go func {
    defer wg.Done()
    println("in goroutine1")
}

go func {
    defer wg.Done()
    println("in goroutine2")
}

wg.Wait()
```

我们执行上述代码，程序将会等待直到两个 Goroutine 都执行完才会退出，这属于比较经典的并发案例。

## Defer 机制与 Golang 的 Defer

基本和 Golang 的 defer 用法类似

但是，由于匿名函数存在，所以 yak defer 常见有两种写法：

```go
defer fn(){
    
}()

defer fn{
    
}
```

值得注意的是：

在细节上 yak 的 defer 和 Golang 处理并不一致，那就是 defer 表达式中的变量值。

在 Golang 中，当 defer 被声明的时候，如果直接使用函数传参的形式(非指针引用)，此时的参数就会使用参数当前值，在整个生命周期内不会变化。

golang 示例

```go
func dfp1() {
   var a = 1
   defer func(t int) {
        fmt.Println(t) // 1
   }(a)
   a = 2
   return
}

func main() {
    dfp1()
}
```

如果直接使用了变量。则修改会改变 defer 使用的值。

golang 示例

```go
func dfp2() {
   var a = 1
    defer func(){
        fmt.Println(a) // 2
    }()
   a = 2
   return
}

func main() {
    dfp2()
}
```

但 yak 不论何种方式都是会受到影响。

yak 示例

```go
f = {"ccc": 1}
dump(f.ccc)
defer func{
    println("准备开始执行 defer func")
    println(f.ccc) // 等到执行这里的时候，就会报错
}       
println("设置 f 变量为空")
f = nil // 在这里设置 f 为空

// 由于f = nil, 所以defer访问`f.ccc`时就会发生错误
/* OUTPUT:
(int) 1
设置 f 变量为空
准备开始执行 defer func
Panic Stack:
function: 
--> 5 println(f.ccc)    // 等到执行这里的时候，就会报错
global code
--> 3-6 defer func{
            println("准备开始执行 defer func")
            println(f.ccc)    // 等到执行这里的时候，就会报错
    	}

YakVM Panic: "cannot find built-in method ccc of invalid type"
```



在 defer 中修改返回值，如果是直接修改了返回值的值，golang 会改变返回的值，而yak 不会受到影响。

golang 示例

```go
func dfr1() (r int) {
	r = 5
	defer func() {
		r++
		fmt.Println("dfr1@", r) // 3
	}()
	return 2 // 3
}

func dfr2() (r int) {
	r = 5
	defer func(r int) {
		r++
		fmt.Println("dfr2@", r) // 6
	}(r) // 3

	return 2 // 2
}

func main() {
	fmt.Println("return dfr1: ", dfr1()) // 3
	fmt.Println("return dfr2: ", dfr2()) // 2
}
```

yak 示例

```go
fn dfr1(){
   a := 2
   defer fn{
       a++
   }
   return a // 2
}

fn dfr2(){
   a := 2
   defer func(a){
       a++
   }(a)
   return a // 2
}

println(dfr1()) // 2
println(dfr2()) // 2
```

defer 的执行顺序跟 Golang 中的一致：

```go
defer fn {
    dump(2)
}

defer fn(){
    dump(1)
}()

/* OUTPUT:
(int) 1
(int) 2
*/
```

## 模块化/多文件编程

在模块化与多文件编程中，我们通常需要根据相对位置定位文件或者资源目录

为此我们准备有三个常见全局变量方便用户操作

1. `YAK_MAIN`: boolean 类型，如果为 false 说明这个文件是主文件，通过动态引入的文件将会为 false
2. `YAK_FILENAME`: 当前执行的脚本文件的具体文件名
3. `YAK_DIR`: 当前脚本文件所在的路径位置

### 使用 `YAK_MAIN`：等价于 Python 中的 `__main__`

如果你调用一个 yak 脚本，通过 `yak [your-yak-script].yak` 来调用，那么脚本中的 `YAK_MAIN` 将会设置为 `true`。

相反，如果是通过 [`dyn`](api/dyn) 中的包来调用，那么，`YAK_MAIN` 的结果则会是 `false`。

所以我们在看下面代码：

```go
// main.yak
func callee(caller) {
   println("callee is called by", caller)
}

if YAK_MAIN {
   println("i am in main block")
   callee("main")
}
```

当我们调用 `yak main.yak` 的时候，界面展示

```go
i am in main block
callee is called by main
```

我们发现，我们定义的函数执行了，`YAK_MAIN` 的值为 `true`。

作为对比，我们在同一个目录下，编写一个 `foo.yak`，内容如下

```go
// foo.yak
res, err := dyn.LoadVarFromFile("main.yak", "callee")
die(err)

res[0].Value("foo.yak")
```

我们执行 `yak foo.yak` 之后，发现屏幕打印出：

```go
callee is called by foo.yak
```

我们发现:

```go
if YAK_MAIN {
   println("i am in main block")
   callee("main")
}
```

这段代码并没有被执行，这是因为 `main.yak` 第二次执行的时候，并不是主函数。所以 `YAK_MAIN` 为 `false`。

### 内置函数 `import`：加载另外的脚本中的变量。

#### 定义

` 
func import(file: string, exportsName: string) (interface{}, error)
`

我们执行完上述函数之后，将会把一个本地 `file` 单独加载到我们新的脚本中，并把变量名为 `exportsName` 的变量导出。

如果执行失败，返回值将会为 `nil, err`。

#### Quick Start

我们先创建一个 `a1.yak` 脚本

```go
// a1.yak
func callee() {
   println("I am in `callee` function....")
}

if YAK_MAIN {
   println("callee function is called by a1")
   callee()
}
```

然后我们创建一个 `main.yak` 脚本

```go
// main.yak
calleeVar, err = import("a1", "callee")
if err != nil {
    die(err)
}

if YAK_MAIN {
   println("callee function is called by main")
   calleeVar()
}
```

如果我们单独执行 `main.yak` 我们发现输出为

```go
callee function is called by main
I am in `callee` function....
```

如果我们单独执行 `a1.yak` 我们发现输出为：

```go
callee function is called by a1
I am in `callee` function....
```

显然的我们从 `main.yak` 调用到了 `a1.yak` 中的函数（实际上是变量）。非常简单实用！

### `include` 像 PHP include 另一个脚本

`include` 只有在脚本执行之前进行执行，本质相当于把一个新的文件 "复制" 一个当前脚本中执行了。

作为对比，我们继续使用上一节的 `main.yak` 函数。通过 `include` 来执行。

```go
// foo2.yak
include "main.yak"

if YAK_MAIN {
    calleeVar()
}
```

我们执行上述代码之后，发现结果如下

```go
callee function is called by main
I am in `callee` function....
I am in `callee` function....
```

`main.yak` 中的 `if YAK_MAIN{}` 分支下的内容被执行了。
