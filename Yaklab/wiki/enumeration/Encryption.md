---
sidebar_position: 13
---

# 账号密码为加密参数

## （1） 账号密码都加密

**漏洞描述：**

在登录的过程中，输入用户名密码后，网站可能会对你所输入的网站用户名密码进行加密，加密方式可能为base64，AES，MD5等加密方式，如果网站对登录次数没有做限制，则也是可以对其登录进行爆破。

**漏洞案例：**

下面通过对tomcat的basic认证来进行爆破
输入账户名密码，获取登录包，并发送到webfuzz

![](/img/products/yakit/Encryption-1.png)

设置fuzz格式
复制fuzz标签

![](/img/products/yakit/Encryption-2.png)

base64基本格式  base64(payload)

![](/img/products/yakit/Encryption-3.png)

将上面的标签复制好后，则可以开始爆破

![](/img/products/yakit/Encryption-4.png)


## （2） 账号未加密密码加密

**漏洞描述：**

尝试爆破的过程中，数据包中的密码参数为简单的加密（如md5、base64等加密方式），且用户名没有被加密

**漏洞案例：**

访问测试网站，输入账号和密码点击登录开启抓包

![](/img/products/yakit/Encryption-5.png)

发现数据包中密码字段进行加密，但发现加密方式为md5加密，仍然可以使用yakit的md5 fuzz标签进行爆破

![](/img/products/yakit/Encryption-6.png)
![](/img/products/yakit/Encryption-7.png)

