#  Yak 中的块作用域
原创 Yhellow  Yak Project   2024-09-20 14:36  
  
![](/articles/wechat2md-57d4b38fb5fac67b077017855ed50c43.gif)  
##   
## 家人们早上好呀  
  
这里是超绝脱单牛一枚  
  
没错，我和Yaker有一个孩子（bushi  
  
今天我们的孩子——YakLang！来给大家介绍介绍，ta对块作用域的处理方式  
  
  
![](/articles/wechat2md-3eb2f9d279501724d2a786402628fe1e.png)  
  
![](/articles/wechat2md-731c51f9907fa865b64d586357387aa7.png)  
  
![](/articles/wechat2md-13ced54a9c82e234f5f058aeb16c9792.png)  
  
在编程中，**作用域**（Scope）指的是变量、函数和对象的可访问性和生命周期的范围。不同的编程语言可能对作用域有不同的定义和实现。  
  
**块级作用域**  
（Block Scope）是指在代码块（如条件语句、循环、函数等）内部定义的变量仅在该块内可访问的特性。这一概念在许多现代高级编程语言中得到了广泛应用。  
  
那么在 yaklang 中是如何处理块级作用域的呢？  
  
首先查看如下的 golang if 语句  
```
if a := 0;  
a > 0   {    
        a = 1  
        }   
        else   
        {    
        a := 2
        }
```  
  
可以发现，上述代码实际上形成了如下的 block 结构：  
  
![](/articles/wechat2md-e3655b8661cb8e25fae02b7335a74387.png)  
  
想必细心的同学已经发现了，在**true block 中的表达式**会影响外部的 global block 并且生成 phi 值，而 false block 则不会。  
  
那么 yaklang 是如何区分是否生成 phi 的呢？这就涉及到了 scope 的3种常规操作：  
**sub，merge，cover**。  
  
![](/articles/wechat2md-b162d8b9060156ab2115a9253df22c62.png)  
### Phi值是什么？  
- 在编程语言和编译器设计中，  
**phi 值**（φ 值）是一种用于静态单赋值形式（Static Single Assignment, SSA）中的概念  
  
- 当控制流图中的某个节点（如条件分支）需要根据不同的路径选择变量的值时就会生成 phi 值，phi 值用于描述一个变量在当前作用域中可能存在的所有值  
  
### Scope 常规操作： 
  
**Sub（产生子作用域）**  
- **定义**：  
以一个 scope 为父类，产生该 scope 的子作用域（在查找变量时可以通过_parent 指针索引到父类 scope）。  
  
- **实例**：  
```
if a := 1; a > 0 { // condition block sub true block
    println(a) // 1
}
```  
  
**Cover（覆盖）**  
- **定义**：  
当一个变量在内部 scope 被重新赋值时，内部作用域的变量将“**覆盖**”外部作用域中同名的变量。这意味着在内部作用域中，引用该变量时将使用新定义的值。  
  
- **实例**：  
  
```
a := 1
{
    a = 2 // true block cover to condition block
}
println(a) // 2
```  
  
****  
**Merge（合并）**  
- **定义**:  
在作用域中，合并通常指将多个作用域中的变量或命名空间组合在一起，以便可以访问所有变量。这种合并可能发生在不同的作用域级别之间，特别是在模块或命名空间中。  
  
- **实例**：  
```
if a > 0 {
    a = 1
} else {
    a = 2
} 
// true block, false block merge to global block
println(a) // phi(a)[1,2]
```  
  
简单来说，cover 会使非本地的变量影响到外部，而 merge 则会合并多个 scope 以生成 phi 值。  
  
### yaklang 中的 local value  
  
在 yaklang 中有一个 local 标志位来记录变量是否在当前作用域中创建，还是这个例子：  
```
if a := 0 /* local value(condition block) */; a > 0 {
    a = 1 /* not local value(true block) */
    a = 2 /* not local value(true block) */
} else {
    a := 3 /* local value(false block) */
}
```  
  
如果在某个 scope 中产生了一个**非本地变量**，那么在当前 scope 中将会生成一个 capture value，而 merge 正是通过 capture value 来生产 phi 值的。  
  
![](/articles/wechat2md-ab2d95cb138af2fcd42945fafadf8b60.png)  
  
了解了以上知识以后，我们来看一个复杂一点的案例：  
```
b := 0
if a := 0; a > 0 {
    a = 1
    a = 2
    b = 1
} else {
    a := 2
}
println(a) // undefined
println(b) // phi(b)[0,1]
```  
  
详细的处理过程如下：  
  
首先从 global scope 中 sub 一个 condition scope，然后再分别从 condition scope 中 sub true scope 和 false scope。  
  
在 true scope 中存在非本地变量 “a” 与 “b”，然后分别生成对应的 capture value（capture value 会记录当前 scope 中非本地变量的最后一次赋值）。  
  
当 true block 和 false block 都处理完毕以后，程序就会将 true scope 和 false scope merge 到一起，由于检测到 capture value，因此会生成 phi 值（分别是 phi(a)[0,2]和 phi(b)[0,1]）。  
  
在 yaklang 中，最后两步处理比较特殊：  
  
程序会选择在 condition scope 中 sub 一个新的 scope（condition scope end），然后将 merge 后的 scope 直接 cover 到新的 scope 上。  
  
接着从 global scope 中 sub 一个新的 scope（global scope end），然后将之前 cover 后的 scope 直接 cover 到该 scope 上。  
  
这样处理的目的是为了确保最后生成的 global scope end 是 global scope 的直接子类（没有任何的中间 scope）。  
  
流程图如下：  
  
![](/articles/wechat2md-539a5e2b08ee7feb4770cba3d1710fe6.png)  
  
PS：  
从代码层面来看，流程图可能有所不同，因为在我们实际的代码中 merge 方法里面包含了 cover 的代码，因此在代码流程图中没有 merge scope 这一步。  
  
最后形成如下结构：  
```
if-condition :
          condition
          true -> if-true
          false -> if-false
if-true:
          body
          if-true -> if-done
if-false:
           // else or else-if
          (else-body)
          (
condition
true -> if-true2
false-> if-false2
          )
     if-false -> if-done
if-done:
           // next code
```  
  
对于一个 if 语句而言，yaklang 将其 scope 分为了3个大的部分：  
**global scope，if scope，if scope end：**  
- if scope 和 if scope end 都以 global scope 为父类  
  
- if scope end 被 if scope 所覆盖  
  
最后在 if 语句执行完毕以后，将当前作用域标记为 if scope end。  
  
实际上的处理也应该是这样：  
- if 语句后的代码可以通过父类的 global scope 查找到 global scope 中的变量  
  
- 在 if scope 中对外部作用域的影响（例如生成 phi 值）被 cover 到当前作用域中（if scope end）  
  
![](/articles/wechat2md-d3a1b5c234519a66c1f5636b68fa636b.png)  
  
我们可以利用 yaklang 跑一个 golang 的代码，查看 yaklang 对于块作用域的处理效果：  
```
func TestTemp(t *testing.T) {
        t.Run("temp", func(t *testing.T) {
                test.CheckPrintlnValue(`package main
                
import "fmt"

func main() {
        b := 0
        if a := 0; a > 0 {
                a = 1
                a = 2
                b = 1
        } else {
                a := 2
        }
        println(a) // undefined
        println(b) // phi(b)[0,1]
}

                `, []string{"Undefined-a","phi(b)[1,0]"}, t)
        })
}

```  
```
package: main library
@init
type: (any) -> any
entry-0:

extern type:
main
type: () -> null
entry-0:
        jump -> if-condition-1
if-condition-1: <- entry-0
        <boolean> t22 = <number> 0 gt <number> 0
        If [<boolean> false] true -> if.true-2, false -> if.false-3
if.true-2: <- if-condition-1
        jump -> if.done-4
if.false-3: <- if-condition-1
        jump -> if.done-4
if.done-4: <- if.true-2 if.false-3
        <any> t33 = phi [<number> 1, if.true-2] [<number> 0, entry-0]
        <any> t34 = phi [<number> 2, if.true-2] [<number> 0, if-condition-1]
        <any> t36 = undefined-a
        <number, error> t37 = call <func(...interface {}) (int, error)> println (<any> t36) binding[] member[]
        <number, error> t38 = call <func(...interface {}) (int, error)> println (<any> t33) binding[] member[]

extern type:
error:
        [ warn] (GO):   not find variable a in current scope: 14:10 - 14:11: a

Values: 1
        0 (t35): [Function] Function-println    14:2 - 14:9: println

Values: 2
        0 (t37): [Call  ] Function-println(Undefined-a) 14:2 - 14:12: println(a)
        1 (t38): [Call  ] Function-println(phi(b)[1,0]) 15:2 - 15:12: println(b)

[INFO] 2024-09-19 13:20:49 [utils4frontend:135] got :[Undefined-a phi(b)[1,0]]
[INFO] 2024-09-19 13:20:49 [utils4frontend:137] want :[Undefined-a phi(b)[1,0]]
```  
  
可以发现，yaklang 不仅对块作用域有明确的标识，还分析了各个块的逻辑关系，生产的 phi 值也有明确的来源，最后在查找的过程中也区分开了变量 “a” 与变量 “b” 的作用域范围。  
  
在 yaklang 中，目前已经对**if，loop，try-catch，switch，break，continue**都有了比较完善的处理，和对 goto 的部分处理（正在开发）。  
  
  
**END**  
  
  
  
 **YAK官方资源**  
  
  
Yak 语言官方教程：  
https://yaklang.com/docs/intro/Yakit   
视频教程：  
https://space.bilibili.com/437503777Github  
下载地址：  
https://github.com/yaklang/yakitYakit  
官网下载地址：  
https://yaklang.com/Yakit  
安装文档：  
https://yaklang.com/products/download_and_install  
Yakit使用文档：  
https://yaklang.com/products/intro/  
常见问题速查：  
https://yaklang.com/products/FAQ  
  
![](/articles/wechat2md-85062b6e6c63b9d9d17d1e2a5ca2ec01.other)  
长按识别添加工作人员  
开启Yakit进阶之旅  
![](/articles/wechat2md-14665f86963c7c123b43378ebc55bb0f.other)  
  
  
