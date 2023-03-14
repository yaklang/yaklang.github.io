---
sidebar_position: 8
---

# 使用 Yakit 打破 Java 序列化协议语言隔离


## 一句话背景知识

众所周知，在使用 Java 编写漏洞利用或检测时，ysoserial 或类似工具会构造一个特定的执行命令的对象，然后进行序列化，作为用户只把序列化（Marshal）后的二进制对象作为 Payload，打到特定位置或注册为远程对象，通过 RMI 或者远程服务 readObject 后直接 RCE。
虽然这是一个人人都知道的过程。

## 威胁

当然，“赛博回忆录-反制系列” 针对这个问题做了详细的文章，Java 实现的漏洞利用实际上是一把 “双刃剑”，在使用各种链来构造特定反序列化流的同时，自己也是一个“靶子”。
其实早在反制系列出现之前，笔者在长亭工作时，子航师傅就提过 Java RMI 的反制，可以做到放一个 1099 RMI 蜜罐在公网，谁来打就打回去反向 RCE。这个原理也非常容易理解。

## 如何不被“反制”？

大家做漏洞扫描这类安全开发的时候，非常头痛的事情在于，偏爱 Python 或 Golang，不考虑用 Java 实现。

就直接导致很多 Java 漏洞的检测变得非常扭曲。

如果用了 Java 又需要思考如何不被反制，用户需要严格控制不要加载任何来源于攻击者的类或者流。

### 现状：

市面上关于有 Java 相关的漏洞扫描现在主流分两类：

1. <span style={{background:"#fff67acc"}}>依赖 Java 环境</span>，并且 ysoserial.jar 作为扫描器依赖打包，以 Popen / system / subprocess / Exec 调用 java -jar ysoserial.jar 来生成特定 Payload 来进行漏洞检测或攻击。
2. <span style={{background:"#fff67acc"}}>另一类选择硬编码利用链的 Payload，然后根据执行命令的 Payload 长度构造合适的 “块”</span>，替换原 Payload 位置，从而构造出一个可用的 Payload。大家常见的 xray 就是通过 “硬编码” 来实现利用链的。

众所周知，针对一些 Groovy 链和常见的 CC1 链都是可以直接找到对应的命令的位置，直接替换即可。实际在第二种实现中，有着非常大的限制：TemplatesImpl 

>[com.sun.org](http://com.sun.org).apache.xalan.internal.xsltc.trax.TemplatesImpl 模版是很多链执行命令的关键。

尝试过进行一些分析的读者其实非常清楚，我们在有 TemplatesImpl 的链（例如 CC2[CommonCollections2] / CC3 / CC4）中，无法直接 “搜到” 执行的命令的关键字。其实本质上是因为，有一些命令和代码被编译成了 “Java 字节码”，然后又被序列化成了 “TC_BLOCKDATA”，表象就是，每个字节都加了 Padding，我们发现无法 “搜” 到对应 string 了。当然，我们也可以人为去做 “Padding”，然后把 Payload 自己去 Padding 后塞入链中特定位置，也可以构造出一个 “可用” 的 Payload。

作为对比，第一种实现写的代码更少，调用别人的东西而已，无非多启动几个进程；“被反制风险” 当然不言而喻，如果启用 RMI 去攻击，那么被反制可以说是“咎由自取”了。

## 透过现象看本质

本质上 Java 序列化协议 和 Json 从解决问题的角度来说，没有任何区别：都是<span style={{background:"#fff67acc"}}>为了让数据可以脱离 “程序” 单独存在，进行传输或持久化</span>。只是载体不一样而已。

我们可以很容易理解 Json，其实 Java 序列化协议一样，protobuf 也一样，Bson，Gson，xml 都有这个目的，并且可以说是主要目的。

被反制并不是说只有 Java 反序列化过程会出现问题，PHP 也一样，fastjson 甚至是在反序列化 Json 的过程中，加载了不该加载的东西。

然而要兼容反序列化协议其实并不难，甚至我们可以脑洞一下，我们能把 Java 序列化流中的对象都解析出来，然后经过一些格式检查存储成更利于大家观察的 Json，并且，大家可以修改了 Json 之后，再按照 Java 序列化的协议组合回去。

> https://docs.oracle.com/javase/7/docs/platform/serialization/spec/protocol.html
> https://docs.oracle.com/en/java/javase/17/docs/specs/serialization/protocol.html

## Talk is Cheap

其实笔者并不愿意花大量的笔墨来介绍 Java 序列化协议，这些内容其实如果大家稍有研究的话，属于基础知识。我们可以直接来观察一个基础例子：

### 从一片落叶开始：TC_STRING

我们从最简单的案例开始：我们从字符串对象的序列化开始

![](/img/products/yakit/breaking-TC_STRING.png)

通过执行上面的代码，我们发现执行的结果为：

``` makefile
rO0ABXQAFnlha2xhbmcuaW8taXMtYXdlc29tZSE=
```

当我们把上述的内容变为十六进制的时候，我们熟悉的 ACED 出现了。

``` nginx
aced000574001679616b6c616e672e696f2d69732d617765736f6d6521
```

在我们小工具中，我们选择 “Codec => Java => 反序列化 Java 对象流（Hex）” 

![](/img/products/yakit/breaking-java-hex.png)

可以发现我们把左边的序列化的流转换成了一段 JSON
```json
[
  {
    "type": 116,
    "type_verbose": "TC_STRING",
    "is_long": false,
    "size": 22,
    "raw": "eWFrbGFuZy5pby1pcy1hd2Vzb21lIQ==",
    "value": "yaklang.io-is-awesome!",
    "handle": 0
  }
]
```

同样的，我们把序列化后的内容放在左栏，选择 “Java => Java 对象流序列化(JSON=>HEX)” 即可还原我们的 TC_STRING 变成 ACED 开头的 Java 对象流。

![](/img/products/yakit/breaking-java-reduction.png)

当然，虽然这个工具看起来非常简单，但是绝对也不仅仅是生成 / 还原一下 HEX。

### SerialDumper 的 yaklang.io 版本
我们 Java 序列化协议的实现过程中，增加了和 SerialDumper 一样的功能。

![](/img/products/yakit/breaking-java-serial-dumper.png)

熟悉 Java 反序列化的同学也可能都对 SerialDumper 非常熟悉，通常，我们能直接查看一个 ACED 二进制流的工具并不多

>SerialDumper 是 Java 反序列化漏洞大热的时候 toptensoftware 开源的一款序列化分析工具。

### 复杂案例（一）：“可读化”CC1 利用链

当然，如果仅仅只能序列化一个 TC_STRING 其实是很鸡肋的。我们尝试一些更复杂的序列化流。

笔者使用 

```Bash
java -jar ysoserial.jar CommenCollections1 "YAKITEXT" > cc1.ser && yak hex -f cc1.ser
```
当然 yak hex 命令是 yak 引擎自带的小工具，可以把一个文件以十六进制的形式打印出来。不安装 yak 也有很多种办法可以做到。

<video
    src="https://yaklang.oss-cn-beijing.aliyuncs.com/video/yakit-hex.mp4"
    loop={true} playsInline={true} controls={true} autoPlay={true} style={{width: 890}}
/>

### 复杂案例（二）：CC1 利用链与 JSON 互可逆

当然，我们发现，仿 SerialDumper 的实现在大多数时候，虽然可读性增强了，但是并不可逆，我们针对这种情况，实现了 ACED 反序列化流与 JSON 的互转。

虽然在 “从一片落叶开始” 中，我们已经发现了这个特性，但是还不够复杂，实战 ysoserial 的案例的展示更有那味儿。

<video
    src="https://yaklang.oss-cn-beijing.aliyuncs.com/video/yakit-ysoserial.mp4"
    loop={true} playsInline={true} controls={true} autoPlay={true} style={{width: 890}}
/>


>额外说明：虽然大多数大家看到的反序列化后的对象都是 TC_XXX 开头的对象，但是偶尔会出现 X_CLASSDATA 这类
>‘X’ 开头的对象名称，这些并不是 Java 中的，而是 yaklang.io 为了方便让其对象更容易可逆互转认为进行了结构分
>割。

## 结语与意外

“最后几块拼图” 其实说的是作为一个常年和漏洞扫描算法与扫描装置斗争的代码崽，尝试花一点时间来做“最后一英里”的事情。其实这个思路和操作并不是独一无二的，世界上并没有那么多 “独一无二” 的东西可以给大家来搞。

>在完成这个模块的时候，我和 @phith0n P 牛提起这个事儿，他：“卧槽？我也写了一个这玩意”。  
>嗯...  
>  
>果然在没有任何预兆的情况下和大家撞车了。

当然，对 P 师傅来说，这个项目还不够深入，比如，Java 字节码本质上也可以变成这样的形式，这一块因为各种原因，还没来得及实现完毕，也算是遗憾；在后续的项目中，我们团队也会进行 Java 字节码的生成的工作。

但是对于 yaklang.io 来说，这个项目并不是结束，我们基于这个项目可以做非常优秀的扩展

1. 更安全，平台无关的 ysoserial payload generator 的实现
2. 更安全的 RMI Exploit

回到项目刚开始和大家讲的，我们要做 “安全能力基座”，拼图当然要拼完。

当然，Java 序列化流分析也只是一部分，yak 语言也将会开放 java 各种序列化流处理和分析的接口，方便大家随时使用与集成。

### Version Note:

1. Yakit 版本 >= Yakit 1.0.11-sp6 
2.  yak 核心引擎 >= 1.0.11-sp9

大家在安装最新版本的 Yakit 和 yak 核心引擎的之后，就可以使用本文录屏和截屏中的 Java 序列化流分析工具（Codec => Java）。

### Reference

>SerialDumper (hxxps://github[dot]com/toptensoftware/serialdump) 
>Java序列化协议 https://docs.oracle.com/javase/7/docs/platform/serialization/spec/protocol.html