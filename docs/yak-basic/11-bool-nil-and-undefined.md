---
sidebar_position: 11
---

# 11. 布尔值，nil 与 undefined

yaklang 中布尔值使用常量 true 和 false 来表示。值得注意的是，布尔值是没办法参与数值运算的，即形如 true + 1这种运算是非法的，一个简单的布尔值例子如下：

```go
a = true
b = false
if a && b {
    println("won't go here")
} else if a || b {
    println("true || false == true")
}
```

在yaklang中，nil和undefined是完全等价的，一个简单的例子如下：

```go
a = nil
println(a == undefined) // true
println(b == nil) // true 访问没声明的变量其值相当于nil/undefined
```