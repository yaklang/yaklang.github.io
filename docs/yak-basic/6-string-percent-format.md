---
sidebar_position: 6
---

# 6. 字符串：% 格式化语法

在 Yak 字符串编写中，我们经常需要格式化字符串，最基本的用法是将一个值插入到一个有字符串格式符 %s 的字符串中。仅仅通过 % 就可以把需要格式化的字符串和需要插入的值进行关联（类似 Python）;

最基础的使用如下：`"Hello String Formatter: %s" % "Element"`，当然他的效果和 Golang 中 fmt.Sprintf(tmp, items...) 是一致的；

实际上，Yak 中对这种语法的支持全面：大家可以像下面的内容一样使用 string 的定义：

```go
println("Hello %v" % "World")
/* Hello World */

println("Hello %v + %v" % ["World", "Yaklang"])
/* Hello World + Yaklang */

println("Hello %v" % "World")
/* Hello World */

println("Hello %v + %05d" % ["World", 4])
/* Hello World + 00004 */
```