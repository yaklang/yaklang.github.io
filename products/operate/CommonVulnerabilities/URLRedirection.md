---
sidebar_position: 9
---
# URL重定向

## 1 访问直接跳转

**漏洞描述：**

当网站设置有redirect或者jump等跳转参数时，设置参数链接可以直接达到url重定向目的

**漏洞案例：**

访问漏洞带有redirect参数的链接，拼接到指定url
例如：https://xxx.xxxx.xx/demo.php?redirect_url=https://www.baidu.com
访问之后直接跳转到百度

![](/img/products/yakit/URLRedirection-1.png)

## 2 点击功能跳转

**漏洞描述：**

URL跳转漏洞本质上是利用Web应用中带有重定向功能的业务，比如说一些登录注册分享接口，如果没有对用户可控的地址做校验可能就会导致攻击者通过伪造恶意链接将用户从一个网站重定向到另一个网站

**漏洞案例：**

访问测试网站为一个登录界面
拼接redirect_url参数重定向到www.baidu.com
https://xxx.xxxx.xxx.xx/sign/in/?redirect_url=https://www.baidu.com

![](/img/products/yakit/URLRedirection-2.png)

输入账号密码（账号需要是已注册的），点击登录
成功跳转到百度

![](/img/products/yakit/URLRedirection-3.png)


:::note

漏洞修复方案

加入referer的限制，保证该URL的有效性，避免恶意用户自己生成跳转链接
加入有效性验证Token，保证所有生成的链接都是来自于我们可信域的，通过在生成的链接里加入用户不可控的Token对生成的链接进行校验，可以避免用户生成自己的恶意链接从而被利用（但是如果功能本身要求比较开放，可能会产生一定的限制）
判断用户传入的URL参数是否为自己网站域名的URL
代码固定跳转地址，不让用户控制变量，不允许将 URL 作为目标的用户输入
跳转目标地址采用白名单映射机制
合理充分的校验跳转的目标地址，非己方地址时告知用户跳转风险

:::
