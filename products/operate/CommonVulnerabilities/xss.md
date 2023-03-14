---
sidebar_position: 10
---
# XSS漏洞

## 反射型XSS

**漏洞描述：**

反射型XXS是一种非持久性的攻击，它指的是恶意攻击者往Web页面里插入恶意代码，当用户浏览该页之时，嵌入其中Web里面的html代码会被执行，从而达到恶意攻击用户的目的。这里插入的恶意代码并没有保存在目标网站，需要引诱用户点击一个链接到目标网站的恶意链接来实施攻击

**漏洞案例：**

***POST型反射XSS***

访问测试网站的一个搜索框界面
在搜索框输入：<script>alert(1)</script>
点击查询时开启抓包

![](/img/products/yakit/xss-1.png)

发送包中将输入的payload自动拼接了

![](/img/products/yakit/xss-2.png)

放包后成功弹窗

![](/img/products/yakit/xss-3.png)

***GET型反射XSS***

直接拼接到含有漏洞URL中，例如：https://xxx.xxxx.xxx/search/foods.html?keyword=<script>alert(1)</script>

![](/img/products/yakit/xss-4.png)


## 存储型XSS

**漏洞描述：**

存储型XSS，也就是持久型XSS。攻击者上传的包含恶意js脚本的留言等信息被Web应用程序保存到数据库中，Web应用程序在生成新的页面的时候如果包含了该恶意js脚本，这样会导致所有访问该网页的浏览器解析执行该恶意脚本。这种攻击类型一般常见在博客、论坛等网站中

**漏洞案例：**

***案例1***

访问测试网站为一个留言板
点击留言插入payload：<script>console.log(1)</script>
留言成功后打开控制台可以看到成功执行，控制台输出

![](/img/products/yakit/xss-5.png)

***案例2***

访问的测试网站也是一个留言板
插入payload：XSS”><script>console.log(1)</script><span style=”
点击留成功后打开控制台可以看到成功执行，控制台输出

![](/img/products/yakit/xss-6.png)

## DOM型XSS

**漏洞描述：**

DOM，全称是Document Object Model，是一个平台和语言都中立的接口，可以使程序和脚本能够动态访问和更新文档的内容、结构和样式。DOM型XSS其实是一种特殊类型的反射型XSS，它是基于DOM文档对象模型的一种漏洞，而且不需要与服务器进行交互。客户端的脚本程序可以通过DOM来动态修改页面内容，从客户端获取DOM中的数据并在本地执行。基于这个特性，就可以利用JS脚本来实现XSS漏洞的利用


:::note

漏洞修复方案

输入过滤：对用户提交的数据进行有效验证，仅接受指定长度范围内的，采用适当格式的内容提交，阻止或者忽略除此以外的其他任何数据。除了在客户端验证数据的合法性，输入过滤中最重要的还是过滤和净化有害的输入;
输出编码：对输出的数据进行编码，如HTML编码。
白名单和黑名单：根据白名单的标签和属性对数据进行过滤，以此来对可执行的脚本进行清除(如script标签，img标签的onerror属性等)

:::