---
sidebar_position: 4
---

# 4. 字符串：基础字符串使用

Yaklang 的字符串非常灵活，在吸收了 Python，JavaScript，Golang 共同的最优秀的特性的同时，也实现了一些非常具有 Yak 特色的功能，我们一次详细解释 Yaklang 中的字符串基础；
经典字符串声明

定义一个字符串的方式有两种，直接用双引号包裹即可，这是最基础的定义方式 "Hello World"，通过这个方式，我们可以声明一个字符串变量，完成最基础的程序：Hello World

```go
println("Hello World")
```

在这个方式声明下，我们如果需要换行，需要使用 \n 来转义，例如 "Hello \nWorld" 当然如果用户输入 \x0a 也可以输入 ASCII 码为 0x0a 的字符；这个行为基本和所有语言都是一致的；
文本块声明

我们使用反引号可以包裹一个文本字符串：

```go
a = `Hello World`;
```
    
这种声明方式的优势是可以支持直接换行的多行文本，不需要转义，但是他也有它自己的限制：“无法在文本块儿内再使用反引号”

```go
abc = `Hello World
Hello V1ll4n`
println(abc)
```

## 字符声明

yaklang保持了与golang相同的字符声明方式，即使用单引号包裹一个字符:

```go
c = 'c'
println(c)
c = '\x20'
println(c)

/*
    99
    32
*/
```