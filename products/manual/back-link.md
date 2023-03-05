---
sidebar_position: 23
---
# 反连管理

### 端口监听器
可用于反弹 Shell，如图启动监听，就可以收到反弹 Shell 的请求

![](/img/products/yakit/back-link-1.png)


![](/img/products/yakit/back-link-2.png)

### 反连服务器
支持 RMI、HTTP、TCP 等协议的反连检测，可用于手工漏洞检测
* **本地启动**

    如图关闭公网穿透服务可以用于本地靶场测试或内网平台的漏洞检测

![](/img/products/yakit/back-link-3.png)

访问示例的反连地址就可以在下方就可以看到记录列表

![](/img/products/yakit/back-link-4.png)

*  **公网穿透**

    启动公网穿透，填写 Bridge 信息，连接启动，就可以支持公网反连

![](/img/products/yakit/back-link-5.png)

如图反连地址已经变成了公网 IP 。通过公网反连可以用于公网的漏洞检测

![](/img/products/yakit/back-link-6.png)

### DNSlog
公共 DNSLog 服务，点击 “生成一个可用域名” 就可以获得一个可用于 DNSLog 检测的域名，域名的解析记录会在下方展示

![](/img/products/yakit/back-link-7.png)

### ICMP-Sizelog
ICMP Size Logger 是一个通过 Ping 包大小来判断 ICMP 反连的 ICMP 记录器，可用于检测命令执行

![](/img/products/yakit/back-link-8.png)

### TCP-Portlog
TCP-Portlog 可以检测 TCP 连接，所有连接记录会在下方展示

![](/img/products/yakit/back-link-9.png)
