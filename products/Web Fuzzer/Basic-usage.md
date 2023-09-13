---
sidebar_position: 15
---

# 基础用法

使用过Burp Suite的同学都知道，在渗透测试过程中，其实相比 Burpsuite 的交互式劫持功能，Repeater 和 Intruder 对于 “手工渗透” 来说，其实是大家花的时间最多的。当我们只实现了 Burpsuite 的核心交互式劫持的时候，其实对 Burp 的替代还远不够。

BP的 Intruder 核心其实并不是某一个功能，而是一整套的操作流：

1. 劫持 HTTPS
2. HTTP History 查看劫持到的请求
3. History 中发送需要测试的请求到 “插件” 或者 Repeater / Intruder
4. 修改数据包，重放 / 爆破

我们发现，前三步其实只是大家花费大量时间的 “入口”，是一个获取流量的过程，很多时候大家花了大功夫的时间在 Repeater 和 Intruder 上。

Yakit 使用 yaklang 的核心模糊测试标签语法，实现了对 Repeater 和 Intruder 的完美整合，甚至可以免配置实现批量发包模糊测试。 


### 用 Web Fuzzer 进行Web应用交互式流量重放

:::tip
Web Fuzzr 模块支持用户自定义HTTP原文发送请求。为了让用户使用简单，符合直觉，只需要关心数据相关信息，Yakit后端做了很多工作。

HTTP原文中一些保证数据传输和解析的信息都是由Yakit后端修复补全的，例如修复CRLF，补全Content-Type、通过chunk方式传输、补全boundary、修复 Content-Length等等。
:::
首先我们先来学习重放请求的操作，在日常工作中可以使用 Web Fuzzer 进行请求与响应的消息验证分析，比如修改请求参数，验证输入的漏洞；修改请求参数，验证逻辑越权； 从拦截历史记录中，捕获特征性的请求消息进行请求重放。

Web Fuzzer 界面如图所示

![](/img/products/yakit/Web-Fuzzer-1.png) 

左边为高级配置和请求消息区，我们为每一个请求都做了请求编号，当有多个web fuzzer页面的时候，在请求编码的数字上双击之后，可以修改请求的名字，这是为了方便多个请求消息时，做备注或区分用的。

在左上角，有一个`发送数据包`按钮，当我们对请求的消息编辑完之后，点击此按钮即发送请求给服务器端。

响应消息区为对应的请求消息点击`发送数据包`按钮后，服务器端的反馈消息。通过修改请求消息的参数来比对分析每次应答消息之间的差异，能更好的帮助我们分析系统可能存在的漏洞。

对数据包右键点击，可以对数据包进行编码/解码操作，以及美化数据包操作并支持智能自动解码（注意：需要选择你所需要的编码解码数据，或者直接全选，快捷键Ctrl+A）。

![](/img/products/yakit/Web-Fuzzer-16.png)

除此之外支持市面上所有流行的密码学编码解码包括不仅限于（URL编解码/base64编解码/HEX编解码/HTML编解码/Unicode编解码/JWT解析）。

如果想对当前请求包的请求类型做修改或Chunk编码绕过一些waf可以直接右键对数据包修改。

点击`历史`按钮还可以导入之前发过的包。

### 快捷进入 Web Fuzzer 页面

在 history 页面点击数据包右键，可以新建Web fuzzer，或者也可以对参数名就行模糊测试。

![](/img/products/yakit/Web-Fuzzer-2.png)

或者在 MITM 的 HTTP`History`页面可以右键发送到 Web Fuzzer 或直接点击`Fuzz`按钮将请求包发送到`Web Fuzzer`。 

![](/img/products/yakit/Web-Fuzzer-3.png)

### 固定目标数据包Fuzzer

点击Web Fuzzer 旁边的`＋号`会自动开启一个新的弹框。

![](/img/products/yakit/Web-Fuzzer-5.png)

点击URL 输入目标 自动生成构造请求访问。

![](/img/products/yakit/Web-Fuzzer-6.png)

_**注意**：数据包是否为http还是https协议，是否需要勾选`强制HTTPS`。_

### 分享/导入数据包Fuzzer

分享/导入功能可用于信息分享，如图所示，分享可以设置有效时长和分享密码，凭分享id和密码可以导入分享者的请求包。

![](/img/products/yakit/Web-Fuzzer-8.png)

_**注意**：数据包是否为http还是https协议，是否需要勾选`强制HTTPS`。_

![](/img/products/yakit/Web-Fuzzer-9.png)

### 数据包扫描

MITM交互劫持中对于数据包，可以点击 `数据包扫描` 可以根据需求选择对本数据包扫描。

![](/img/products/yakit/Web-Fuzzer-13.png)

选择扫描类型后可以根据需要设置扫描时间。

![](/img/products/yakit/Web-Fuzzer-14.png)



