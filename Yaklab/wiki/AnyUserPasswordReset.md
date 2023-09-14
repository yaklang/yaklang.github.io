---
sidebar_position: 6
---
# 任意用户密码重置

## 1 验证码可爆破

**漏洞描述：**

有些网站在设置重置密码功能时使用验证码进行校验，但是没有做任何限制，导致用户可以通过枚举的方式获取正确验证码。

**漏洞案例：**

同：/任意用户登录/验证码可爆破

## 2 验证码未做绑定

**漏洞描述：**

用户A接受的验证码，B用户同样也可以使用A用户的验证码，缺少匹配机制，这种漏洞可能导致A用户去操作B用户。

**漏洞案例：**

同：/任意用户登录/验证码未做绑定

## 3 验证码回显

**漏洞描述：**

注册时用户点击获取验证码功能点时，服务器响应的同时把具体验证码回显到返回包中。

**漏洞案例：**

同：/任意用户登录/验证码回显

## 4 客户端验证绕过

**漏洞描述：**

客户端进行验证码检验是不安全的，本地判断返回一个判断结果True/flase，我们可以修改这个判断结果进行绕过

**漏洞案例：**

访问测试网站重置密码的界面，这里拿到一个已经存在的测试账号模拟攻击验证绕过

![](/img/products/yakit/AnyUserPasswordReset-1.png)

这里使用yakit重置该测试账号的密码

![](/img/products/yakit/AnyUserPasswordReset-2.png)

随意输入验证码，点击下一步抓包

![](/img/products/yakit/AnyUserPasswordReset-3.png)

抓取这一步的返回包

![](/img/products/yakit/AnyUserPasswordReset-4.png)

这里的statuscode 200 代表成功，所以我们修改返回包

![](/img/products/yakit/AnyUserPasswordReset-5.png)

可以看到这里成功跳转到修改密码的界面了

![](/img/products/yakit/AnyUserPasswordReset-6.png)

输入密码之后点击下一步提示密码修改成功

![](/img/products/yakit/AnyUserPasswordReset-7.png)

返回登录界面验证是否成功将密码修改，使用新密码成功登录

![](/img/products/yakit/AnyUserPasswordReset-8.png)

## 5 跳过验证步骤

**漏洞描述：**

开发人员在开发注册模块是，对使用者进行注册操作时没有做严格的检验机制，从而导致绕过注册。
一般注册的步骤有2-4步，总体上都是先去校验验证码是否正确，再去执行下一步。
我们可以通过修改返回包的响应结果，从而完成下一步注册步骤。

**漏洞案例：**

测试网站重置密码页面
输入手机号和图片验证码，点击下一步

![](/img/products/yakit/AnyUserPasswordReset-1.png)

进入第2步验证身份环节

![](/img/products/yakit/AnyUserPasswordReset-2.png)

此时直接输入第3步重置密码的url可直接绕过验证身份步骤进入密码重置环节

![](/img/products/yakit/AnyUserPasswordReset-3.png)

输入新密码后点击下一步，发现直接密码重置成功

![](/img/products/yakit/AnyUserPasswordReset-4.png)

使用新密码成功登录系统

![](/img/products/yakit/AnyUserPasswordReset-5.png)

## 6 重置链接可fuzz

**漏洞描述：**

有些重置密码过程中会发送一个密码重置链接，例如：www.xxx.com/repass?token=aaa
如果密码重置链接中的token或者其他字段存在一定的规律，攻击者通过爆破可以获得其他用户的token
使用爆破出来的token，从而达到修改其他账户的密码

**漏洞案例：**

这里以一个案例作演示类似可能存在问题的密码重置链接

访问登录界面，点击忘记密码

![](/img/products/yakit/AnyUserPasswordReset-9.png)

输入已知账户存在的邮箱
点击发送验证码

![](/img/products/yakit/AnyUserPasswordReset-10.png)

邮箱中收到一个密码重置链接
例如：https://xxxx.xxx.xxx.xx/index/index/resetpass/code/280938b01d7742de39dbdd7tfffe2453bfaf4c48
像这种类似的密码重置链接如果验证凭证存在一定规律可以尝试进行猜解，从而重置其他用户密码

## 7 越权导致修改任意用户密码

**漏洞描述：**

在修改密码的功能处，可尝试去修改一些字段，比如用户ID，用户cookie，导致直接修改任意用户密码

**漏洞案例：**

（这里的案例为修改两个参数，有些情况可能直接通过类似userid的一个参数即可修改，这里只是一个参考）

访问测试网站登录界面

![](/img/products/yakit/AnyUserPasswordReset-11.png)

右上角找到更改密码功能

![](/img/products/yakit/AnyUserPasswordReset-12.png)

正常获取当前手机号的验证码进入到下一步

![](/img/products/yakit/AnyUserPasswordReset-13.png)
![](/img/products/yakit/AnyUserPasswordReset-14.png)

输入密码的之后点击提交用yakit抓取数据包

![](/img/products/yakit/AnyUserPasswordReset-15.png)

抓到如图数据包

![](/img/products/yakit/AnyUserPasswordReset-16.png)

此功能校验userid与phone是否绑定，若为绑定则返回true
这里注册了另一个账号userid为110853。 手机号为173xxxxxxxx
发送数据包发现成功越权修改

![](/img/products/yakit/AnyUserPasswordReset-17.png)

使用密码Admin119登录173xxxxxxxx账号
成功登录

![](/img/products/yakit/AnyUserPasswordReset-18.png)


:::note

漏洞修复方案

设置验证码失效时间并设置验证码尝试次数过多失效
校验用户传入的验证码与当前手机号是否绑定，而不是只单独校验验证码是否正确
禁止服务器返回验证码在返回包中
重置密码过程中加强鉴权，在用户最终提交请求时再次对验证码进行校验
对重置密码链接中的验证凭证进行强加密

:::