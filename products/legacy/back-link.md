---
sidebar_position: 23
---
# 反连管理

### 背景

很多时候，我们在进行漏洞检测时无法通过应用返回的信息来确定一个漏洞是否存在。如果命令/特殊操作确实执行了，那我们如何证明这个命令或者特殊操作执行了呢？

同样的，实战中反序列化漏洞利用时，经常会遇到不出网的情况，命令执行成功，但拿不到执行结果，也不能回连，该如何解决？

本章，我们将学习Yakit的反连管理模块，该模块主要用来辅助在日常测试中遇到的无回显漏洞检测、内网穿透、反弹shell、DNSlog带外等操作。

该模块主要分为6个部分：

* 端口监听器
* 反连服务器
* DNSlog
* ICMP-SizeLog
* TCP-PortLog
* Yso-Java Hack

接下来将进行一一的讲解

### 端口监听器

反弹 Shell 的接收工具，利用端口监听器可以在服务器上开启一个端口，进行监听，并进行交互。

![](/img/products/yakit/back-link-1.png)

输入想要监听的端口，点击监听该端口即可开始监听。

### DNSlog
:::noteDNS反连检测原理
举个例子，服务外连时，我们执行 `curl abc.example.com` 命令：
1. 这个时候，`abc.example.com` 将会被解析，会查询 `abc.example.com` 的 NS 记录和 A 记录
1. 如果 NS 记录存在(ns1.example.com)，会向 `ns1.example.com` 查询 `abc.example.com` 的 A 记录。
1. 如果 NS 不存在，则直接向公共服务器启用 `A` 记录查询。

上述描述的过程中，如果我们可以控制 `ns1.example.com` 的话，任何用户查询的过程将会被记录下来。

当然，我们可以人为设置一个子域名，任何查询到这个子域名的被集合展示，这就是 `dnslog.cn` 的核心原理。
:::
Yakit 提供了一个公共 DNSLog 服务，在DNSlog页面点击 `生成一个可用域名` 就可以获得一个可用于 DNSLog 检测的域名，域名的解析记录会在下方展示

![](/img/products/yakit/back-link-2.png)

### 反连服务器

Yakit的反连服务器使用协议端口复用技术，同时在一个端口同时实现 HTTP / RMI / HTTPS 等协议的反连，可用于手工漏洞检测。
:::info多协议复用端口
这个技术并不是什么高深的技术，端口复用其实是一个很简单的操作，不同协议的协议头是不一样的：

例如：
1. TLS 协议要先进行 TLS 握手（handshake） 操作。在 TLS 握手时，我们将会识别到这是一个 TLS 握手操作，客户端把服务器当作一个 TLS 服务来判断，那么服务端将会自动返回 TLS 应该收到的东西。
1. RMI 的协议头为 JRMI，当我们收到客户端发来这几个字节时，我们就应该回复 RMI 应该识别的内容
1. 当然 HTTP 更简单了，对吧？

当然我们集合了常见的这几种协议，同时在一个端口上开启，早一段时间大家管这个技术叫 `拟态`其实也可以说是 `yaklang.io` 实现了 `拟态` 反连服务器。

我们给这个服务器起名叫 `Facade`
:::

反连服务器的使用分为两种场景：

* **本地启动**

如图所示关闭公网穿透服务则在本地启动反连服务器，可以用于本地靶场测试或内网平台的漏洞检测

![](/img/products/yakit/back-link-3.png)

访问示例的反连地址就可以在下方就可以看到记录列表

![](/img/products/yakit/back-link-4.png)

*  **公网穿透**

很多时候，我们在进行扫描的时候，并不一定及时能搭配起一个公网服务器开启反连服务器。

就算公网服务器开启了反连服务，我们的漏洞 Payload 打出去并不一定及时能知道自己的服务器接收到了对应反连。

这时，就可以使用公网穿透模式。

:::tip对标实现ngrok穿透

解决前文提出的这个问题，对于 yaklang.io 项目来说，最简单的就是在公网部署一个 yak 引擎。除此之外，还有别的解决办法吗？

>熟悉 ngrok 的同学就会说，我们可以部署一个 ngrok 让本地的服务器在远端上线。
> 
>很多同学在使用 CS 上线节点的时候都这么操作。

于是，我们在 yak 中实现了一套机制，叫 cybertunnel, 使用 grpc 构建了一套端口穿透的技术，我们可以实现映射一个本地 tcp / udp 协议端口到远端。
甚至于说，我们都可以映射一个本地 dnslog 服务器到远端（远端需要域名提供商配置解析记录）
:::

打开`启用公网穿透`开关，我们就可以看到提示框，穿透服务是需要一个远端服务器来打配合的。

服务器上安装了 yak 核心引擎的话，使用 `yak bridge` 即可解决这个问题

`yak bridge --secret [your-password]`

如果只有 docker 环境，可以使用 `https://github.com/yaklang/yak-bridge-docker/` 中的解决方案

```
docker run -d --rm --net=host v1ll4n/yak-bridge yak bridge --secret [your-awesome-password-for-u-bridge]
```

一条命令即可启动一个 yak bridge 服务器

![](/img/products/yakit/back-link-5.png)

启动公网穿透，填写 Bridge 信息，连接启动，就可以支持公网反连

![](/img/products/yakit/back-link-6.png)

### ICMP-Sizelog

ICMP Size Logger 是一个通过 Ping 包大小来判断 ICMP 反连的 ICMP 记录器，可用于检测命令执行

在这个页面中，实现了以下的操作内容：

1. 我们生成一个可用的 ICMP 长度
2. 使用这个长度渲染 ping 命令，可供用户使用
3. 在用户 ping 命令执行后，可以自动观测到 “谁 ping 了我”。

点击 `随机生成可用长度` 即可生成命令

![](/img/products/yakit/back-link-7.png)

### TCP-Portlog

实际上对于除了 DNS 之外的大多数场景来说，绝大多数反连的 “检测” 都是以 TCP 作为基础协议的，我们可以通过对基于 TCP 协议进行实现从而实现多种应用写的复杂兼容

TCP-Portlog 可以检测 TCP 连接，所有连接记录会在下方展示

![](/img/products/yakit/back-link-8.png)

### Yso-Java Hack

反序列化、类加载、JNDI漏洞利用是Java漏洞中特别常见的几种类型，但相对来说利用过程又是较为复杂的。

所以Yakit提供了两个特别好用的功能一个是前文提到的反连服务器，一个是Yso-Java Hack。无需Java环境，仅需一个Yakit。

* 页面初始状态如图，左侧配置 payload 参数，右侧用来展示生成的 payload。

![](/img/products/yakit/Yso-Java-Hack-1.png)

* 默认开启 “使用利用链”，即生成序列化 payload ，一级选项是利用链，二级选项是恶意类。鼠标放到小问号上可以看到介绍。

![](/img/products/yakit/Yso-Java-Hack-2.png)

* 选择利用链和恶意类后，会出现配置表单，类名默认是随机生成的，填写所有表单信息，点击生成，就可以在右侧看到生成的 payload ，点击上方可以切换展示方式。

![](/img/products/yakit/Yso-Java-Hack-3.png)


![](/img/products/yakit/Yso-Java-Hack-4.png)

* 还可以展示生成payload的代码，还可以将代码发送到Yak Runner，写插件时如果懒得写，就可以直接在这里直接生成代码。

![](/img/products/yakit/Yso-Java-Hack-5.png)

* 最新版本 payload 展示类型增加了一个 DUMP ，可以看到 payload 的数据结构，像下面这样。

![](/img/products/yakit/Yso-Java-Hack-6.png)

* 生成恶意类

如图，关闭 “使用利用链” 就可以生成恶意类，具体操作和生成利用链类似

![](/img/products/yakit/Yso-Java-Hack-7.png)