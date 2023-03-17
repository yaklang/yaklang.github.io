---
sidebar_position: 9
---

# 客户端验证绕过

**漏洞描述：**

开发人员使用服务器端返回的相关参数作为最终登录凭证，导致可绕过登录限制，如服务器返回一个flag参数作为登录是否成功的标准，但是由于代码最后登录是否成功是通过获取这个flag参数来作为最终的验证，导致攻击者者通过修改flag参数即可绕过登录的限制。

**漏洞案例：**

访问测试网站，页面为用友NC控制台，用友NC控制台存在一个可通过修改返回包来绕过验证，登陆administrator用户的漏洞。随意输入密码，点击OK时开启抓包

![](/img/products/yakit/Client-Authentication-Bypass-1.png)

劫持响应，将返回包的0改为1

![](/img/products/yakit/Client-Authentication-Bypass-2.png)
![](/img/products/yakit/Client-Authentication-Bypass-3.png)
![](/img/products/yakit/Client-Authentication-Bypass-4.png)

即可绕过验证，成功登陆administrator用户。

![](/img/products/yakit/Client-Authentication-Bypass-5.png)
