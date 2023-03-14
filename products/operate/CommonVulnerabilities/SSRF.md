---
sidebar_position: 12
---
# SSRF漏洞

**漏洞描述：**

服务器端请求伪造（也称为 SSRF）是一种 Web 安全漏洞，允许攻击者诱导服务器端应用程序向非预期位置发出请求，攻击者可以滥用服务器上的功能来读取或更新内部资源。

**漏洞案例：**

使用yakit中DNSlog功能生成一个可用域名

![](/img/products/yakit/ssrf-1.png)

在测试网站URL后拼接生成的域名地址
例如：https://xxx.xxx/download.php?filename=http://{yakit 生成的域名}
访问发现yakit中DNSlog收到记录

![](/img/products/yakit/ssrf-2.png)


:::note

漏洞修复方案

将应用程序需要访问的主机名（DNS 名称）或 IP 地址列入白名单；
在任何情况下都不应将来自服务器发送的请求的原始响应正文传递给客户端；
启用身份验证

:::