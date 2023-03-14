---
sidebar_position: 7
---

# 7. 字符串：模版字符串语法 f-string

在 Yaklang 中，我们使用了 JavaScript 风格字符串模版构建方式，这种方式将会极大的缩短 “字符串格式化” 的步骤。具体使用方法是，我们在一个基础字符串的前方增加 f 前缀，这个前缀将会名声之后的字符串是一个 “模板”，可以通过 ${  } 来执行一个表达式。我们可以通过这样的方式，快速把一个值注入到字符串中

```go    
a = "World"
name = "V1ll4n"
println(f`Hello ${a}, Hello ${name}`)
/*    
OUTPUT: 
    Hello World, Hello V1ll4n
*/

println(f`1+1 = ${1+1}`)
/* 
OUTPUT:
    1+1 = 2 
*/
```

这种方式处理字符串实际上是 JavaScript (ECMAScript) 的招牌方式。非常具有实战价值。

例如，在构建一个数据包的时候，我们可以很自然的使用这个逻辑来操作。

```javascript
var targetPath = "admin.php?id=1"
var addr = "example.com:8080"
var payload = codec.EncodeUrl("1'or''='1")

packet = f`GET /${targetPath} HTTP/1.1
Host: ${addr}

key=value&key2=${payload}`
/*
GET /admin.php?id=1 HTTP/1.1
Host: example.com:8080

key=value&key2=%31%27%6f%72%27%27%3d%27%31
*/

rsp, req, err = poc.HTTP(packet)
die(err)
```