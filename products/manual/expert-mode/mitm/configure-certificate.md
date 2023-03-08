---
sidebar_position: 10
---

# 配置安装证书MITM劫持

任何浏览器都可以，但是必须配置HTTPS证书，支持多种浏览器类型。

点击`手工测试`--`MITM交互式坚持`--`MITM`--`插件自动加载`--`选择你需要使用的插件`--`劫持代理主机劫持代理端口`（默认无需修改）--`劫持启动`。

![](/img/products/yakit/mitm-5.png)

点击HTTPS证书配置。

![](/img/products/yakit/mitm-6.png)

点击HTTPS证书配置。

![](/img/products/yakit/mitm-7.png)

修改下载证书的后缀，去掉“.pem”，修改后的证书如下，双击进行安装。

![](/img/products/yakit/mitm-8.png)

证书需安装为根证书，点击安装，按照步骤进行操作即可。

![](/img/products/yakit/mitm-9.png)

证书安装完成，打开你所需要使用的浏览器，配置代理127.0.0.1:8083 即开始抓包，所示：火狐浏览器MITM劫持。

![](/img/products/yakit/mitm-10.png)



