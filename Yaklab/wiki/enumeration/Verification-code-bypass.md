---
sidebar_position: 10
---

# 验证码可绕过

## （1）验证码没有与账号密码一同校验

**漏洞描述：**

对验证码进行校验的时候先判断验证码是否正确，如果正确通过验证码的校验，后续进行用户名密码爆破验证码就不再起作用。

**漏洞案例：**

下面通过某src实战经历介绍一个验证码绕过
访问测试网站
发现登录页面存在验证码

![](/img/products/yakit/Verification-code-bypass-1.png)

随意输入用户名和密码，然后输入验证码点击登录进行抓包
发现该网站第一步首先验证验证码是否正确

![](/img/products/yakit/Verification-code-bypass-2.png)

劫持响应可以看到先验证码是否输入正确，如果成功返回true

![](/img/products/yakit/Verification-code-bypass-3.png)

如果验证验证码正确后就会出现不带验证码的username和password的数据包，此时就达到了对验证码的绕过

![](/img/products/yakit/Verification-code-bypass-4.png)


## （2）验证码置空

**漏洞描述：**

登录过程中会出现验证码参数，但是可以通过将验证码置空或者删除验证码参数以达到绕过验证码进行枚举用户名密码的操作。


## （3）验证码前端校验

**漏洞描述：**

网站在校验验证码的时候，只是在网站的前端进行验证码验证，网站的后台逻辑并没有对验证码进行校验，因此可以直接对其账户密码进行爆破

