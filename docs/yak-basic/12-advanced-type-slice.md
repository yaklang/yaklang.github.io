---
sidebar_position: 12
---

# 12. 列表类型：创建与声明

在yaklang中，使用 `[var1, var2, var3...]` 来创建一个slice，同时我们也兼容golang的语法，使用make语句来创建slice

## 字面量声明：推断类型

在yaklang中，如果使用 `[var1, var2, var3...]` 这种形式来创建slice，yak vm会根据slice中的元素类型来自动推断最契合的slice类型，一个简单的例子如下：

```go
a = [1, 2, 3]
println(typeof(a)) // []int
b = ["qwe", "asd"]
println(typeof(b)) // []string
c = [1, 2, "3"]
println(typeof(c)) // []any{}
```

### 自动推断的规则如下：

1. 最宽泛的类型为 any 也可以认为类似 TypeScript 中的 any，Golang 中对应 interface{}
2. 如果同时存在字符串，数字，布尔值结构体任意两个组合，则认为类型为 any
3. 如果只存在数字，则都是整数的话，认为是 int
4. 如果都是数字，整数和浮点都存在，则认为是 float

## 按类型构建（make）

yaklang也兼容golang语法，使用make语句显示创建一个对应类型的slice，一个简单的例子如下：

```go
// 创建一个不带长度的 []int
a = make([]int)
println(typeof(a)) // []int

// 创建一个带长度的 []int
b = make([]int, 2)
println(len(b)) // 2
```