---
sidebar_position: 15
---

# 基础用法

### 对MITM劫持数据包Fuzzer

左边靶场登录框输入任意账号密码登录，右边MITM交互坚持点击详情即可看见详情数据包内容。

_注：靶场项目地址为 https://github.com/zhuifengshaonianhanlu/pikachu_

![](/img/products/yakit/Web-Fuzzer-1.png) 

点击数据包右键，可以新建webfuzzer，或者也可以对参数名就行模糊测试。

![](/img/products/yakit/Web-Fuzzer-2.png)

Web Fuzzer 支持手动发包，在页面中填写请求原文，点击发送数据包即可，用于手工渗透测试。

![](/img/products/yakit/Web-Fuzzer-3.png)

或者在 MITM 的 HTTP`History`页面可以右键发送到 Web Fuzzer 或直接点击`Fuzz`按钮将请求包发送到`新建Web Fuzzer`。 

![](/img/products/yakit/Web-Fuzzer-4.png)

### 固定目标数据包Fuzzer

点击Web Fuzzer 旁边的`＋号`会自动开启一个新的弹框。

![](/img/products/yakit/Web-Fuzzer-5.png)

点击URL 输入目标 自动生成构造请求访问。

![](/img/products/yakit/Web-Fuzzer-6.png)

_**注意**：数据包是否为http还是https协议，是否需要勾选`强制HTTPS`。_

![](/img/products/yakit/Web-Fuzzer-7.png)

### 分享/导入数据包Fuzzer

分享/导入功能可用于信息分享，如图所示，分享可以设置有效时长和分享密码，凭分享id和密码可以导入分享者的请求包。

![](/img/products/yakit/Web-Fuzzer-8.png)

_**注意**：数据包是否为http还是https协议，是否需要勾选`强制HTTPS`。_

![](/img/products/yakit/Web-Fuzzer-9.png)

