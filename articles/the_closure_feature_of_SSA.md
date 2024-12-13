#  Yaklang中的闭包与side-effect     
![](/articles/wechat2md-57d4b38fb5fac67b077017855ed50c43.gif)  
  
之前的文章中曾经和大家讨论过**Yaklang对块作用域的处理**  
  
（前文指路：[抱歉占用公共资源，大家别猜啦，我们在一起了@Yaker](https://mp.weixin.qq.com/s?__biz=Mzk0MTM4NzIxMQ==&mid=2247521558&idx=1&sn=0a721ae96b5a00febafcacc123cd5029&scene=21#wechat_redirect)）  
  
而在Yaklang中，对于有特殊性质的**闭包**，也有着独特的方法进行处理⬇️  
  
![](/articles/wechat2md-c6ce7ec732531631e8cb9cb717ec77a1.jpeg)  
  
![](/articles/wechat2md-b68f0f0b00f51fa56919dd18f26dc36d.png)  
  
![](/articles/wechat2md-37fbc850f86e3d8466fc4c9e0bfa06ff.png)  
  
先看如下的代码：  
```
package main

func main(){
    a := 1
    f := func(){
        b := a                // freevalue
        println(b)
        a = 2                // side-effect
    }
    f() 
    println(a) // 2
}
```  
  
上述代码展示了闭包中的变量可能会出现的两种情况：  
- 查找一个外部作用域中的变量  
  
- 修改一个外部作用域中的变量  
  
我们将未在闭包作用域中定义的 “a” 被称为**freevalue**，而通过 freevalue 对外部变量的影响则被称为 **side-effect** 。
  
可以通过 yaklang 编译上述代码，输出结果如下：  
```
package: main library
@init
type: () ->
entry-0:

extern type:
main
type: () -> null
entry-0:
        <any> t28 = undefined-println
        <null> t26 = call <() -> null> AnonymousFunc-2 () binding[<number> 1] member[]
        <number> t27 = side-effect <number> 2 [a] by <null> t26
        <any> t29 = call <any> t28 (<number> t27) binding[] member[]

extern type:
AnonymousFunc-2
freeValue: a:(20)a, println:(21)println
sideEffects: a
type: () -> null
entry-0:
        jump -> b-1
b-1: <- entry-0
        <any> t22 = call <any> println (<number> a) binding[] member[]
        jump -> b-2
b-2: <- b-1

extern type:
```  

这里的**AnonymousFunc-2** 就是源码中的闭包函数，可以发现 yaklang 生成了一个名为 **side-effect &lt;number&gt; 2 [a] by &lt;null&gt; t26** 的特殊右值，这个右值和普通的 **&lt;number&gt; 2** 没什么不同，只是为了说明该右值源自于闭包函数**AnonymousFunc-2** 对外部作用域的影响。  
  
通过将 side-effect 描述为右值，就可以将闭包函数对外部的影响给简化为一条或者多条赋值语句，等效为如下代码：  
```
package main

func main(){
    a := 1
    a = 2
    println(a) // 2
}
```  
  
![](/articles/wechat2md-32e45b851fffb02642b3910a83772cb9.png)  
###   
  
上述的处理已经可以应付大多数情况下的 side-effect 了，但 side-effect 还有两个特殊的特性：**绑定和继承**。  
  
具体可以看如下代码：  
```
package main

func main() {
    a := 1
    f1 := func() {
        a = 2
    }
    f2 := func() {
        f1() // f2继承f1的side-effect
    }
    f2()
    println(a) // side-effect(a,2)
}
```  
```
package main

func main() {
    a := 1 // f1将绑定a,绑定值由闭包定义的位置决定与调用位置无关
    f1 := func() {
        a = 2 
    }
    {
        a := 3
        f1()
        println(a) // 3
    }
    println(a) // side-effect(a,2)
}
```  
  
  
在 yaklang 的处理中，side-effect 将被记录在 **FunctionType** 中，成为闭包的一个属性。通过继承闭包的 FunctionType 即可实现 side-effect 的继承。  
  
相对较难处理的是 side-effect 的绑定机制，这里采用了延迟使用 side-effect 的方式：生成好的 side-effect 暂时不会放入作用域中，当前作用域为**a := 1** 的子作用域时才会将 side-effect 放入。  
  
我们可以分别编译上述两个案例，编译后的 ssa 如下：  
```
package: main library
@init
type: () ->
entry-0:

extern type:
main
type: () -> null
entry-0:
        <null> t36 = call <() -> null> AnonymousFunc-3 () binding[<number> 1, <() -> null> AnonymousFunc-2] member[]
        <any> t37 = side-effect <number> 2 [a] by <null> t36
        <number, error> t39 = call <func(...interface {}) (int, error)> println (<any> t37) binding[] member[]

extern type:
AnonymousFunc-2
freeValue: a:(21)a
sideEffects: a
type: () -> null
entry-0:
        jump -> b-1
b-1: <- entry-0
        jump -> b-2
b-2: <- b-1

extern type:
AnonymousFunc-3
freeValue: f1:(29)f1, a:(32)a
sideEffects: a // 继承自AnonymousFunc-2
type: () -> null
entry-0:
        jump -> b-1
b-1: <- entry-0
        <null> t30 = call <() -> null> f1 () binding[<number> a] member[]
        <any> t33 = side-effect <number> 2 [a] by <null> t30
        jump -> b-2
b-2: <- b-1

extern type:
error:
```    
- AnonymousFunc-3 中不存在变量a，其中的 sideEffects a 继承自 AnonymousFunc-2  
  
```
package: main library
@init
type: () ->
entry-0:

extern type:
main
sideEffects: a
type: () -> null
entry-0:
        jump -> b-1
b-1: <- entry-0
        <null> t27 = call <() -> null> AnonymousFunc-2 () binding[<number> 3] member[]
        <any> t28 = side-effect <number> 2 [a] by <null> t27 // 生成side-effect但暂时不会使用
        <number, error> t30 = call <func(...interface {}) (int, error)> println (<number> 3) binding[] member[]
        jump -> b-2
b-2: <- b-1
        <number, error> t33 = call <func(...interface {}) (int, error)> println (<any> t28) binding[] member[]

extern type:
AnonymousFunc-2
freeValue: a:(21)a
sideEffects: a
type: () -> null
entry-0:
        jump -> b-1
b-1: <- entry-0
        jump -> b-2
b-2: <- b-1

extern type:
error:
```  

- 由于 side-effect 不在当前作用域中，因此第一个 println 查找到常量'3'，第二个 println 属于 entry-0 的子作用域，可以查找到 side-effect  
  
![](/articles/wechat2md-b3886da008d1e1ea093e183eb22fda78.png)  
  
  
当前版本的 yaklang 已经能处理大多数情况下的 side-effect 了，但某些 side-effect 与 phi 值结合出现的问题还需要解决：  
```
package main

func main(){
    a := 0
    f := func() {
        if true {
            a = 2
        }else{

        }
        println(a) // phi(freevalue,2)
    }
    a = 1
    f()
    println(a) // phi(1,2)
    a = 2
    f()
    println(a) // phi(2,2)
}
```   
  
在这个样例中的 f 可能生成 side-effect 也可能不生成，因此应该生成一个**phi(freevalue,2)**。而 freevalue 只是一个占位符，它将在该闭包被调用时替换为绑定变量在当前作用域中的值。  
  
目前该功能正在实现中，敬请期待后续版本。  
  
  
**END**  
  
 **YAK官方资源**  
  
Yak 语言官方教程：  
https://yaklang.com/docs/intro/  
Yakit视频教程：  
https://space.bilibili.com/437503777    
Github下载地址：  
https://github.com/yaklang/yakit  
Yakit官网下载地址：  
https://yaklang.com/  
Yakit安装文档：  
https://yaklang.com/products/download_and_install  
Yakit使用文档：  
https://yaklang.com/products/intro/  
常见问题速查：  
https://yaklang.com/products/FAQ  
  
![](/articles/wechat2md-382b711760574d429c6c8742ecfc1d9b.png)  
  
![](/articles/wechat2md-304b45488320344b4c7cdbd5759ee4e8.gif)  
  
  
