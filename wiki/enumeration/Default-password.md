---
sidebar_position: 14
---

# 通用框架默认密码

**漏洞描述：**

如果登录框采用的是通用的web框架或者设备，测试过程中可以优先尝试设备或框架弱口令

**漏洞案例：**

尝试这些通用web框架的默认密码
例如某测试网站使用apache axis2框架  尝试admin/axis2默认密码

![](/img/products/yakit/Default-password-1.png)

成功登陆

![](/img/products/yakit/Default-password-2.png)

若使用默认密码登陆失败后可尝试进行爆破
