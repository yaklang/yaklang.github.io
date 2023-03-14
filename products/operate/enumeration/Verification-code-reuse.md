---
sidebar_position: 11
---

# 验证码复用

**漏洞描述：**

尝试爆破的过程中，虽然有验证码参数且验证码起作用，但是验证码正确输入在数据包中爆破用户名跟密码参数时验证码没有更换，导致用户可以使用同一验证码去爆破多组账号密码。

**漏洞案例：**

访问测试网站
登陆框存在验证码

![](/img/products/yakit/Verification-code-reuse-1.png)

输入账号，密码和验证码后点击登陆开启抓包，开启手动劫持，不丢弃当前请求

![](/img/products/yakit/Verification-code-reuse-2.png)

此时将数据包放到Web Fuzzer,重放数据包，发现均提示登录失败，请检查用户账号和密码是否正确，并没有提示验证码错误，证明此验证码能复用

![](/img/products/yakit/Verification-code-reuse-3.png)


