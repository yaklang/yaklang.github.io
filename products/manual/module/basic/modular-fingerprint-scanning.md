---
sidebar_position: 6
---

# 端口探测和指纹扫描

### 功能介绍

- 端口探测：获取目标站点开放端口情况，识别端口对应服务及版本；
- Web指纹识别：通过加载相关插件对网页关键字、特定文件MD5比对、指定URL关键字、指定URL的TAG模式等进行判断，识别当前web应用程序及相关版本

### 使用方法

如图,在`扫描目标`文本框中输入想要扫描的目标（域名/主机/IP/IP段均可，逗号分隔或按行分割），也可以点击`在此上传`按钮上传TXT、Excle文件进行批量目标的上传。

然后根据实际需求勾选需要的端口选项，也可以在`扫描端口`中直接自定义想要扫描的端口，按逗号进行分隔。在左侧`扫描端口操作台`处可以选择想要加载的插件进行勾选，

点击`开始扫描`即可进行开始进行端口的探测。

![](/img/products/yakit/modular-fingerprint-scanning-1.png)

注：默认的扫描方式是SYN扫描，若想修改扫描方式，请在`更多参数`处进行选择。

如图，默认不会进行进行web指纹的扫描，需要在`更多参数`处进行选择。可以选择只扫描指纹或SYN+指纹扫描。

更多指纹扫描的高级选项，可以在参数设置处根据每个选项的注释按需进行调整。

另外，在扫描端口/指纹的过程中，在不停止扫描的情况下可选择插件进行同步加载进行扫描。

### 更多参数

如需设置更多高级扫描选项，点击`更多参数`即可按照注释进行相应的设置

![](/img/products/yakit/modular-fingerprint-scanning-2.png)

- 扫描模式分类：

***SYN扫描***

具有权限要求，Linux下启动yakit需要以root权限启动，windows下需要管理员权限启动，如果不是以root或者管理员权限启动会报如下错误：

![](/img/products/yakit/modular-fingerprint-scanning-3.png)

***指纹扫描***

无权限要求，可直接进行扫描，识别端口指纹

***SYN+指纹扫描***

具有权限要求，Linux下启动yakit需要以root权限启动，windows下需要管理员权限启动，如果不是以root或者管理员权限启动会报如下错误：

![](/img/products/yakit/modular-fingerprint-scanning-4.png)

单次扫描结果可在页面下方进行展示，

![](/img/products/yakit/modular-fingerprint-scanning-5.png)

历史结果可在`端口资产管理`，或者`数据库`-`端口资产`进行查看

![](/img/products/yakit/modular-fingerprint-scanning-8.png)

端口及版本

![](/img/products/yakit/modular-fingerprint-scanning-6.png)

Web指纹

![](/img/products/yakit/modular-fingerprint-scanning-7.png)


