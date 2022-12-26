---
sidebar_position: 3
---

# 3. Yaklang 中的类型和变量

Yaklang 的类型其实非常简单，我们仅需要记住如下类型即可

1. string 字符串类型，用以快速构建一个字符串
2. int 整数类型：在 64 位机中，int 和 int64 是一样的
3. float 浮点类型，用来定义和表示浮点数
4. byte 本质上等同于 uint8
5. undefined / nil 为定义的值，我们可以理解为空值
6. bool 只有 true 或 false
7. map，基本等同于 Python 中的 Dict
8. slice，基本等同于 Python 中的 List
9. channel，基本等同于 Golang 中的 Channel
10. var，任意类型，等同于 Golang 中的 interface{}

我们以一个表格快速来对比大家熟悉的语言的类型，以方便大家快速理解

|对比类型 | Yaklang | Python | Golang|
|:-----:|:-----:|:-----:|:-----:|
|字符串 | string | string | string|
|二进制字符串 | []byte | b-string | []byte|
|整数|int|int| int8, int16, int32, int64 <br/> uint8, uint16, uint32, uint64 <br/>int |
|浮点|float|float|float32, float64(double)|
| 空值|undefined / nil|不支持|nil|
|布尔值|bool|bool|bool|
|键值组(map / dict)|map|dict|map|
| 数组 / 切片 / 列表|slice|list|slice / array| 
|结构体 / 类 / 接口|不支持|class|struct / interface 体系
|数据通道|channel|不支持|channel |
| 任意类型 | var | object | interface{} | 

## 变量的声明，定义与使用

在yaklang中定义/声明一个变量十分简单：

    var a            // 声明变量a
    var b, c         // 声明变量b,c
    var d, e = 1, 2  // 声明变量d,e并分别赋值为1,2


同时，我们可以直接对一个变量进行赋值，省略定义/声明的步骤:

    a, b = 1, 2 // 此时a=1, b=2

当然，变量的使用依然很简单而符合直觉:

    a, b = 1, 2
    dump(a, b)
    /*
        (int) 1
        (int) 2
    */

## 附录：字面量构建语法 eBNF 范式（字面量节选）

    literal
        : templateStringLiteral
        | stringLiteral
        | numericLiteral
        | charaterLiteral
        | UndefinedLiteral
        | NilLiteral
        | boolLiteral
        | mapLiteral
        | sliceLiteral
        ;