---
sidebar_position: 18
---
# jetty插件使用

## 1 CVE-2021-28164 敏感信息泄露漏洞

**插件id：**

df9916e5-bac8-4eba-9adb-3a794918b792

**漏洞描述：**

Jetty WEB-INF 敏感信息泄露漏洞，Jetty 9.4.37引入对RFC3986的新实现，而URL编码的.字符被排除在URI规范之外，这个行为在RFC中是正确的，但在servlet的实现中导致攻击者可以通过%2e来绕过限制，下载WEB-INF目录下的任意文件，导致敏感信息泄露。该漏洞在9.4.39中修复。

**测试过程：**

访问目标靶场（vulhub），直接访问web.xml文件，返回404

![](/img/products/yakit/jetty-1.png)

使用%2e来绕过限制下载web.xml，返回200，下载成功

![](/img/products/yakit/jetty-2.png)

## 2 CVE-2021-28169 信息泄露漏洞

**插件id：**

Yakit正在努力编写~

**漏洞描述：**

在9.4.40, 10.0.2, 11.0.2版本前，Jetty Servlets中的ConcatServlet、WelcomeFilter类存在多重解码问题，如果开发者主动使用了这两个类，攻击者可以利用其访问WEB-INF目录下的敏感文件，造成配置文件及代码泄露。

**测试过程：**

正常目标靶场（vulhub），通过/static?/WEB-INF/web.xml无法访问到敏感文件web.xml：

![](/img/products/yakit/jetty-3.png)

对字母W进行双URL编码，即可绕过限制访问web.xml：

![](/img/products/yakit/jetty-4.png)

## 3 CVE-2021-34429 敏感信息泄露漏洞

**插件id：**

Yakit正在努力编写~

**漏洞描述：**

Jetty在9.4.40后修复了因为%2e导致的敏感信息泄露漏洞CVE-2021-28164，但这个修复是不完全的，通过下面三种方式可以进行绕过：
    unicode形式URL编码：/%u002e/WEB-INF/web.xml
    \0组合.导致的绕过：/.%00/WEB-INF/web.xml
    \0组合..导致的绕过：/a/b/..%00/WEB-INF/web.xml
影响版本：9.4.37-9.4.42, 10.0.1-10.0.5, 11.0.1-11.0.5

**测试过程：**

访问目标靶场（vulhub），直接访问web.xml文件，返回404：

![](/img/products/yakit/jetty-5.png)

使用/%u002e/WEB-INF/web.xml来绕过限制下载web.xml：

![](/img/products/yakit/jetty-6.png)
