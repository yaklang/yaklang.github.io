---
sidebar_position: 14
---

# 验证码回显

**漏洞描述：**

登录时用户点击获取验证码功能点时，服务器响应的同时把具体验证码回显到返回包中。

**漏洞案例：**

这里以注册功能的验证码回显作例子，其原理以及利用方法都是相同的
输入信息之后点击获取验证码

![](/img/products/yakit/Verification-code-echo-1.png)

抓到如图数据包

![](/img/products/yakit/Verification-code-echo-2.png)

code就是其发送的验证码，在返回包中回显了出来，经验证跟手机收到的短信相同可以直接使用

![](/img/products/yakit/Verification-code-echo-3.png)
