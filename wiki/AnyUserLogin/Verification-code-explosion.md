---
sidebar_position: 11
---

# 验证码可爆破

**漏洞描述：**

短信验证码一般由4位或者6位数字组成，若服务器未对验证时间，次数进行限制，则存在被爆破成功的可能性。

**漏洞案例：**

访问测试网站
选择验证码登陆，输入一个存在的手机号15555555555，点击获取验证码

![](/img/products/yakit/Verification-code-explosion-1.png)

然后随意输入验证码1111，点击登陆时开启抓包

![](/img/products/yakit/Verification-code-explosion-2.png)

放到Web Fuzzer进行4位验证码爆破（之所以爆破4位验证码，是因为提前用自己手机号测试时发现验证码为4位）
成功爆破出验证码2159，获取到手机号15555555555用户的token凭证。

![](/img/products/yakit/Verification-code-explosion-3.png)
![](/img/products/yakit/Verification-code-explosion-4.png)

