---
sidebar_position: 13
---

# 代理

### 全局代理

系统代理能帮助用户自动代理系统所有请求全局抓包，确认配置以后点击`配置HTTP/HTTPS代理`即可开始全局抓包。

![](/img/products/yakit/mitm-32.png)

![](/img/products/yakit/mitm-33.png)

显示`已启用`表示启用成功，即可开始抓包。

![](/img/products/yakit/mitm-34.png)

系统所有请求数据包均可抓取，如图：

![](/img/products/yakit/mitm-35.png)

### 下游代理

下游代理用于访问中国大陆无法访问的网站或访问特殊网络/内网，支持http协议或socks5协议格式如：

http://127.0.0.1:10809   socks5://127.0.0.1:10809

### 案例：设置下游代理访问谷歌

首先电脑先有翻墙代理并且全局模式，比如：目前电脑本机全局代理127.0.0.1:10809

![](/img/products/yakit/mitm-36.png)

设置下游代理：http://127.0.0.1:10809 点击劫持启动。

![](/img/products/yakit/mitm-37.png)

免配置启动谷歌浏览器，访问推特，即可以看见劫持twitter流量。

![](/img/products/yakit/mitm-38.png)

