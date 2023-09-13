---
sidebar_position: 9
---

# 用户名密码可枚举

**漏洞描述：**

登录框中没有对用户的尝试次数做限制，且没有添加验证码等保护措施，用户可以直接通过枚举的手法去探测账号密码。

**漏洞案例：**

通过某国站点对其进行爆破，

![](/img/products/yakit/enumeration-pass-1.png)

尝试抓包对其进行爆破，没有爆破成功，但是，网站是可以进行爆破的

具体等操作过程：开启yakit劫持
随后去模拟登录
拿到登录包之后
随后去加载账号密码字典进行爆破

![](/img/products/yakit/enumeration-pass-2.png)

myusername插入文本内容，password也与之同理（加载字典）

![](/img/products/yakit/enumeration-pass-3.png)

如下图，并没有爆破成功但是可以成功进行爆破

![](/img/products/yakit/enumeration-pass-4.png)

![](/img/products/yakit/enumeration-pass-5.png)


