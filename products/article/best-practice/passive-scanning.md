---
sidebar_position: 2
---

# Log4j JDNI fuzz与被动扫描

## Log4j JNDI Lookup 潜在威胁
log4j 的黑盒漏洞检测其实是一个老大难的问题，不像 “正常” 的漏洞有明确的输入点，以及利用方式。

他的输入点可以出现在任何意想不到的地方：

1. User-Agent / Content-Type(Parsed Error) / X-Real-IP 等 HTTP Header 的位置。
2. 逆向思维：让请求发生错误的时候，log 最容易被打印，所以输出故意填在一些参数中，造成人为的 “不合逻辑” 出错，也可以达到效果。
3. 有朋友问 Rasp 与其他安全产品一定能解决这个问题吗？
    1. 使用 “Java AOP 的代码插桩 / Agent” 的 Rasp 大概率也是 Java 实现的，如果 Rasp 本身拦截的参数名被 log4j 打印出来了呢？
    2. 如果 Rasp 拦截了，但是日志平台，安全产品日志平台打到了 ELK / Hadoop 等平台呢？同理安全分析时候使用 ES 进行搜索...
4. 存在严重的二次污染的风险，发送一个过渡编码的 “不可用的 log4j jndi”，会被安全设备和大数据中间件等过度编码解读，虽然对网站和应用没啥威胁，但是极有可能 “隔山打牛”。

这些可能的特性决定了，log4j jndi ldap/rmi 可以出现在任何令人意想不到的地方。

## 如何检测？
### 发送数据包的 “小难题”
由于 PoC 实在太自由，漏洞的简单检测反而不太好写，需要一个 “度”。现有的 Yaml PoC 和使用 HTTP 客户端编写并不能很好适应这种情况。乙方厂商的检测手段，大多也能反映这个问题。

最有效的发包检测手段，其实公认是在“MITM 劫持代理模式”下，对流入代理的数据包进行检测。

有很多关键点需要注意：

1. 在授权范围内，测试的目标需要被精准限制，比如说 baidu / google / gov / edu 造成大量脏数据或社会危害的目标应该被主动排除，或者直接采用白名单限制目标。
2. 能够解析数据包中的参数，并及时替换数据包中的参数的值或内容。

### 回显检测：jndi ldap/rmi
众所周知，jndi 支持的协议不止有 ldap，也有 rmi，dns 这种类型，相比于 RMI 外连这种一看就心怀鬼胎的操作，dnslog 是一个非常好的验证漏洞是否存在的手段。不管是 ldap 还是 dns 或者 rmi ，只要被测应用可出网，一般都不会去对 dns 有限制。

市面上有很多适应于回显检测的 DNS 服务器套件，特别是有些处理能解析 DNS 请求之外，还能解析 RMI 回连，HTTP 回连。

例如借此机会大火的 dnslog[dot]cn, ceye[dot]io, interactsh 等

不管是自己搭建也好，还是使用 dnslog[dot]cn 这种公共服务也好，其实在企业授权情况下，确认回连的 IP 为公司资产，即可暂时认为可能存在漏洞。

## 最佳实践
最佳实践并不是教大家如何利用漏洞，而是帮助大家在授权范围内，尽可能找到潜在威胁。

我们在【发送数据包的 “小难题”】中，提到了可能是最合理的手段是 MITM 劫持代理下，对数据包进行分析与重组，我们暂时把这个过程称为模糊测试（fuzz）。

能做到上述自动发包的办法可能除了 Burpsuite 的插件，也就只有 Yakit 与 Yakit 的 MITM 插件系统了。

当然在详细介绍怎么样 fuzz 之前，我们来直接看一下检测效果。

<video
    src="https://yaklang.oss-cn-beijing.aliyuncs.com/video/yakit-log4j-fuzzer.mp4"
    loop={true} playsInline={true} controls={true} autoPlay={true} style={{width: 890}}
/>


>感谢 vulfucos 团队的线上靶场与 log[dot]咕[dot]com 的服务提供者为本次 PoC 提供靶场

根据视频内容我们：

1. 打开 Yakit 的 MITM 服务器设置页
2. 使用默认设置打开 “被动扫描模式”，进入 Yak 脚本构建的劫持插件操作台
3. 点击 “加载插件”，选择【log4j fuzzer】
4. 输入在 dnslog 平台中获取到的域名，启动

![](/img/products/yakit/passive-scanning-dnslog.png)

看到上述内容时，意味着我们的 log4j fuzzer 加载成功了！

5. 于是我们可以挂上代理，访问想要检测的网站 (Powered by Vulfocus)了~ 
访问之后，进入 dnslog 平台查看结果

![](/img/products/yakit/passive-scanning-agent.png)

## 知其所以然
大家也许很好奇，Yakit 的 MITM 的插件是如何做到上述自动 fuzz 发包的。我们打开 Yakit 的插件仓库

![](/img/products/yakit/passive-scanning-fuzz.png)

可以查看到插件的源码，其实插件源码如大家所见，非常简单

### yak.fuzz 语法与 API
当然，下面的代码仅仅是插件的一小部分，完整的代码，用户可通过 “更新插件商店” 来查看。

![](/img/products/yakit/passive-scanning-fuzz-1.png)

其实上面的代码，非常简单，我们在

1. Web Fuzz 基础 API https://www.yaklang.io/docs/newforyak/fuzz_tutorial
2. Web Fuzz 高级教程 https://www.yaklang.io/docs/newforyak/fuzz_for_more

中都可以找到如何使用这样的模块与 API。

### 与 Burpsuite 插件体系的对比
本质上 yak 语言的 fuzz 模块，封装了很多可以模糊测试的 API，精细操作数据包中的内容，对于这种场景来说。

相比于 Burpsuite 的插件体系，需要编写 Java UI 和 Java 环境。与此同时【Log4shell中被忽视的威胁：BurpSuite插件】这篇文章中提到的问题也不应该被忽视：

https://mp.weixin.qq.com/s?src=11&timestamp=1639672105&ver=3500&signature=H5XEuiaTO01AYO4yGGTh9a8wfT7F5TIfwczKapyu3gcTT35KprtS0SlqO9AJXKiBiue27pi87ZMOLZx0456j0vX5eg95*UwAaxcFV3MZODxTKUz6jqHJfIi*gu90ATFu&new=1

Yakit 使用配置化和自动生成的 UI，并且插件核心内容其实就是一段 Yak 脚本（“文本”）；    
更具有便携性。同时允许用户 “热加载” 现场编写的代码，这可能是市面上任何工具/平台，都做不到的

![](/img/products/yakit/passive-scanning-burpsuite.png)
