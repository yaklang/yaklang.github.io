---
sidebar_position: 11
---
# 任意文件下载/读取

**漏洞描述：**

一些网站由于业务需求，可能提供文件查看或下载的功能，如果对用户查看或下载的文件不做限制，则恶意用户就能够查看或下载任意的文件，可以是源代码文件、敏感文件等。

**漏洞案例：**

访问测试网站具有下载文件的功能点

![](/img/products/yakit/AnyFileDownload-1.png)

拼接想要访问的文件路径，例如../../etc/passwd文件，成功读取到改文件内容

![](/img/products/yakit/AnyFileDownload-2.png)

Windows系统下可以拼接访问..\..\..\..\..\..\Windows\win.ini

![](/img/products/yakit/AnyFileDownload-3.png)


:::note

漏洞修复方案

过滤点(.)使用户在url中不能回溯上级目录；
正则严格判断用户输入参数的格式；
将下载区独立出来，放在项目路径外，给每个下载资源固定的URL，而不是所有的下载资源都是统一的URL：http://www.test.com/download?filename=文件名。

:::