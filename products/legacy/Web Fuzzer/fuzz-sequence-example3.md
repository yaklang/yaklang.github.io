---
sidebar_position: 17
---


# 序列场景案例：csrf token保护下的爆破
这篇文章我们将会介绍另外一个序列的实际应用案例：csrf token保护下的爆破。我们以pikachu靶场为例，安装pikachu靶场后(**记得要初始化**)，我们打开如下页面：
![](/img/products/yakit/Fuzz-sequence-example3/1.png)

任意输入账号密码之后，使用 yakit 的 MITM 模块拦截登录请求，我们可以看到请求如下：
![](/img/products/yakit/Fuzz-sequence-example3/2.png)

注意到除了用户和密码之外，还存在一个token的post参数，这是一个csrf token，它主要是用来防止CSRF攻击的，但是这也给我们的爆破增加了一定的难度，因为每次爆破都需要使用一个新的token。那么在这种情况下我们应该如何爆破呢？

首先我们应该来看看token是从哪里获取的，我们继续使用 yakit 的 MITM 模块拦截请求，这次我们拦截的是直接访问该页面的GET请求，当我们将其发送到 Web FUzzer 发送请求后，可以看到其响应中存在token：
![](/img/products/yakit/Fuzz-sequence-example3/3.png)

接下来我们来使用序列来完成爆破功能。我们完整的爆破流程如图所示：
![](/img/products/yakit/Fuzz-sequence-example3/4.png)

要完成爆破功能，我们需要先使用前文提到的提取器提取token，我们添加一个变量名为 token 的 Xpath 提取器，使用 `//input[@name='token']/@value`进行匹配：
![](/img/products/yakit/Fuzz-sequence-example3/5.png)

由于第二个登录数据包需要使用到第一个请求中的 token，即每次登录前要获取一次 token，因此我们需要从第一个请求中**进行分叉**，这点**至关重要**，如图所示：
![](/img/products/yakit/Fuzz-sequence-example3/6.png)

因此，我们在第一个数据包中进行爆破设置，这里我们需要使用前文提到的变量来设置爆破需要的字典，例如，如果我们要爆破密码，我们添加一个变量名为 pass 的 fuzztag 变量，值为`{{x(pass_top25)}}`，即使用名为 pass_top25 的内置字典。

这样，第一个数据包就会被发送 25 次，每次使用一个字典中的密码进行爆破。

此外，为了进行爆破并且每次请求的 token 互不干扰，所以我们在第一个获取数据的请求包中删除了 Cookie，因为一般情况下 token 是和 Cookie 绑定的：

![](/img/products/yakit/Fuzz-sequence-example3/7.png)

第二个数据包的设置比较简单，只需要使用数据包一中设置的两个变量token和pass。如图所示：
![](/img/products/yakit/Fuzz-sequence-example3/8.png)

最后一步，我们将数据包1与数据包2组成一个序列组，设置**继承变量，Cookie**，点击开始执行即可：
![](/img/products/yakit/Fuzz-sequence-example3/9.png)

成功爆破出了 admin 的密码为123456：
![](/img/products/yakit/Fuzz-sequence-example3/10.png)
