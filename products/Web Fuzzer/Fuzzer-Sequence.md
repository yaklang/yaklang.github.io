---
sidebar_position: 21
---

# Web Fuzzer 序列相关

在 Yakit 的众多模块中，MITM 和 Web Fuzzer 模块肯定是使用频率最高的，今天的主角就是我们的 Web Fuzzer 模块，在原有的功能基础上，我们给 Web Fuzzer 添加了一个被称为 Web Fuzzer 序列(Web Fuzzer Sequence)的功能，简单概括就是——Web Fuzzer 序列功能可以串联起多个 Web Fuzzer 节点页面，同时下级节点节点可以自由选择是否继承上级节点的变量(Cookie或其他数据)。
Web Fuzzer 序列基本是由 Web Fuzzer 页面中的数据提取器以及设置变量这个两个功能所组成的复合功能，接下来我们将首先介绍**数据提取器**和**设置变量**。

### 数据提取器

单从数据提取器来看，大家可能觉得功能十分的简单，不就是提取返回包中的一些值吗？但是其实它还有另一个功能——声明变量，直接看图说话：

![](/img/products/yakit/Fuzzer-Sequence/sequence_1.png)

图中红框中的 `data_0`就是提取结果后声明的变量名，用伪代码的方式可以像如下表示:

```go
data_0 = "提取的目标值"
```

熟悉代码的小伙伴应该马上能想到，既然都能声明变量了，那肯定也可以使用变量对吧！

没错，下面让我们配合匹配器功能来测试一下我们声明的变量该如何使用吧

首先，我们先启动一个 `MockEchoServer`，这个 `HTTP Server` 十分的简单，它会把我们发送的请求头、请求体，原封不动的放在返回包中

![](/img/products/yakit/Fuzzer-Sequence/sequence_2.png)

启动了这个MockEchoServer后，我们就可以很方便的进行调试了，现在我们可以设置一个数据提取器规则了，如下

![](/img/products/yakit/Fuzzer-Sequence/sequence_3.png)

解释一下我们设置的提取器，首先我们把原来的 `data_0`变量名修改为了`token`，其次我们的提取类型为键值对，提取范围为 `Raw`，也就是将提取的范围限定为整个返回包，最下方的 `token`则是特定键名了，我们通过token这个键名就可以获取到`1c544524-e8d8-42fd-921b-373c2345d201的值了`，点击调试执行，看看结果是否复合预期

![](/img/products/yakit/Fuzzer-Sequence/sequence_4.png)

那么我们上面设置的提取器规则，相当于是我们声明了一段代码：

```go
token = "1c544524-e8d8-42fd-921b-373c2345d201"
```

> 键值对的提取方式指的是从一个数据结构中获取或检索与特定键关联的值。这通常在编程中用于访问诸如字典（Dictionary）、哈希表（HashMap）或关联数组（Associative Array）等数据结构中的数据。

数据提取器的规则设置完毕了，接下来就是用匹配器来验证我们上面声明的变量是否可以使用了，我们设置一个如下的匹配器规则：

![](/img/products/yakit/Fuzzer-Sequence/sequence_5.png)

在这个匹配器规则中，我们选择了使用变量配合表达式语句进行匹配，箭头指向的 `token`就是我们在上一步中声明的变量(token)，那么这个匹配器规则配合之前的提取器规则的伪代码如下：

```go
// 使用 {{int(20000-20003)}} 会发送四个包
for req in [req1 , req2 , req3 , req4]{
    rsp,_ = poc.HTTP(req)~
    // 提取器 从 body 中提取 {"token":"20000"} 的值
    token = 键值对提取器(rsp.body,"token") // token = "20002"
    // 匹配器 使用我们输入的表达式
    if 表达式匹配器(`token == "20002"`){
        println("匹配成功")
    }
}
```


我们发送一下请求，查看结果发现，匹配器成功的使用了提取器的获取的值进行了表达式的判断

![](/img/products/yakit/Fuzzer-Sequence/sequence_6.png)

我们现在把表达式的值由原来的 `token == '20002'`改为`token != '20002'`后继续测试，结果完美符合预期！

![](/img/products/yakit/Fuzzer-Sequence/sequence_7.png)

### 设置变量

在上面的数据提取器中，我们已经介绍了如何声明变量，那么接下来我们就来介绍如何另一种声明变量的方式——直接在 Web Fuzzer 中`设置变量` ，下面我们直接对应着发包来介绍一下这种方式。

![](/img/products/yakit/Fuzzer-Sequence/sequence_8.png)

上图分别设置了四个变量，分别是
1. `dsl_var` 未开启 `Fuzztag` 识别，同时变量的值被包裹在{{}}中则默认使用的是 nuclei dsl的方法，此处使用的是 `rand_int(1000,2000)`，表示生成一个范围在 1000 到 2000 的随机数。
2. `tag_var` 开启 `Fuzztag` 识别，则可以使用 `yak` 原生支持的 `fuzztag` 标签了，`randint(1000,2000)`功能上和上一步中功能是一样的
3. `sum` 稍微有点不一样，sum的值是由上面设置的两个变量进行相加，换句话说，设置变量的值甚至可以输入一段**Yak代码**(沙箱中运行，限制了很多的内置方法以及库)
4. `expr` 它的值是一个 If语句，是执行了 `if true { return 22222}` 这段代码后的结果

简单介绍了**设置变量**功能后，我们同样结合着**匹配器功能**，来进一步的讲解，设置变量功能究竟有何作用，我们本次用一个 `Struts2-045`的本地靶场来进行演示，

![](/img/products/yakit/Fuzzer-Sequence/sequence_9.png)

我们设置了三个变量，以及一个匹配器规则，很完美的发送了一个漏洞检测数据包，是不是有写 `Poc`的感觉了？实际上，后续也确实会有 Web Fuzzer 配合匹配器、提取器、设置变量，一键生成 `Yaml Poc` 的功能

### Web Fuzzer 序列

铺垫了这么多，终于要到 Web Fuzzer 序列功能了，直接上图展示一下 Web Fuzzer 序列的功能吧

![](/img/products/yakit/Fuzzer-Sequence/sequence_10.png)

在 `Web-Fuzzer` 子标签的左侧我们发现多了一个侧边 Tab页，当我们点击 `Fuzzer` 序列时，会将 `WF-[1]`这个子标签页拖入一个序列组中，变成如下所示

![](/img/products/yakit/Fuzzer-Sequence/sequence_11.png)

随后我们可以在 `Step [0]` 这个节点中，添加 `Web Fuzzer` 的标签页`WF-[1]`

![](/img/products/yakit/Fuzzer-Sequence/sequence_12.png)

我们还可以继续添加其他的 Fuzzer 标签页，随后只需要将标签页拖入序列组中，即可再次添加节点

![](/img/products/yakit/Fuzzer-Sequence/sequence_13.png)

随后我们在 `WF-[1]` 中设置一个提取器规则，规则内容是提取键值为`Node1`的值，声明为 `get`变量

再设置一个变量 `node1`，内容是字符串

![](/img/products/yakit/Fuzzer-Sequence/sequence_14.png)

最后我们在 `WF-[2]`中设置一下上面中声明的变量，可以发现，直接发送请求，结果是为空的，这是因为单独发送这一个请求，是没有`WF-[1]`中声明的变量的上下文的

![](/img/products/yakit/Fuzzer-Sequence/sequence_15.png)

那么我们使用 `Fuzzer` 序列功能尝试一下，在` WF-[1]`到`WF-[2]`的中间，开启**继承变量**(默认都是开启的)，查看结果，`WF-[2]`已经完美继承了在`WF-[1]`中设置的功能了

![](/img/products/yakit/Fuzzer-Sequence/sequence_16.png)

### Fuzzer 序列的使用场景

1. 需要登陆后进行的一些操作，比如说，你完全可以使用 Fuzzer 序列功能写一个每日签到脚本
2. csrf token 表达场景
3. 编写 PoC，比如服务器返回了上传文件的Path，需要自行拼接地址进行访问，确认上传的文件被成功解析
4. ...