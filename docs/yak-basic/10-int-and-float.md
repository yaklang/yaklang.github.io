---
sidebar_position: 10
---

# 10. 整数，浮点数与数学运算

yaklang保持了与golang类似的数字类型：int，float即整数与浮点，一个简单的数学运算例子如下：

    println(2 + 2)    // 4
    println(50 - 5*6) // 20
    println(8 / 5)    // 1
    println(17 % 3)   // 2

## 整数声明可多进制

与其他语言类似，yaklang在声明整数时可以用不同的进制（二进制，八进制，十进制，十六进制）

    // 二进制声明
    a = 0b10
    println(a) // 2
    
    // 八进制声明
    b = 0100
    println(b) // 64
    
    // 普通整数声明（十进制）
    c = 100
    println(c) // 100
    
    // 十六进制声明
    d = 0x10
    println(d) // 16
 
## 浮点数声明

    a = 1.5
    println(a) // 1.5
    
    b = a / 0.5
    println(b) // 3.0
    
## 整数与浮点可运算

当整数与浮点数运算时，整数会被先转换为浮点数，再进行运算，最终结果也会是浮点数

    a = 5 / 2.0
    println(a)      // 2.5
    printf("%T", a) // float64