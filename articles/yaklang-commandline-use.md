# Yak 命令行扫描指南

Go0p Yak Project 2024-04-03 17:30

![](/articles/wechat2md-57d4b38fb5fac67b077017855ed50c43.gif)

![](/articles/wechat2md-db1046bd0a578d9e6a66225a13801196.jpeg)

# **前言**

出于各种原因，很多师傅提出想要使用 yak 命令行对目标系统发起扫描，在 Yaklang v1.3.1-sp3 的版本中，我们对yak引擎中的许多功能添加了命令行支持，比如 scan(插件扫描)/yso(yak Ysoserial Util)，本次就大家比较关心的命令行扫描功能进行介绍，一起来看看**如何使用 yak 命令行进行扫描**。
![](/articles/wechat2md-9d2363e086c405fb89cc8763106f02fb.jpeg)

# **命令行参数详解**
执行 yak scan -h 查看参数，如下：
![](/articles/wechat2md-0255fe92276c17e0a893e8b5d69c15d4.png)

## **选项**
- **--templates, -t**  
指定插件模板文件或目录（使用逗号分隔）。这些模板定义了扫描的具体方式和检查点，允许用户定制化扫描任务，例如：-t './templates/1.yaml,./templates/vulns/'  
- **--target, --host**
指定目标主机，可以是单个主机或多个主机（使用逗号分隔）。支持域名和IP地址，甚至是IP段，例如：--target example.com,http://www2.example.com,192.168.1.2/24  
- **--target-file, -f**  
通过文件指定目标主机，文件中每一行包含一个主机，适用于批量扫描
- **--raw-packet-file, --raw** 
指定原始数据包文件，用于模拟网络请求，支持HTTP和HTTPS（通过--https选项指定）
- **--keyword, --fuzz, -k**
使用模糊搜索插件关键字，适用于当你不确定使用哪个插件时。
- **--list, -l**  
仅列出插件，不执行扫描。这对于了解可用插件非常有用。
- **--plugin**
通过名称执行单个插件，适用于已知具体插件时。
- **--type**
指定Yakit中插件的类型，如port-scan  、mitm  、yaml-poc  等，让用户可以根据需要选择插件类型.
- **--proxy**  
通过代理服务器执行扫描，支持http代理，例如：--proxy http://127.0.0.1:8083  
- **--concurrent, --thread**  
设置并发扫描数（线程数），默认为50，适用于调整扫描速度和系统负载。
- **--poc-timeout** 
设置单个子任务的扫描超时时间，默认为30秒，可根据网络状况调整。
- **--total-timeout** 
设置整体扫描的超时时间，默认为7200秒（2小时），以防长时间挂起。

yak scan 命令行的设计十分简单易懂，主要分为三块，分别是：  
**目标的输入(target)、指定插件、扫描配置项**。

# **下载插件**
当在一台全新的计算机中使用 yak 引擎进行扫描时，首要步骤就是下载插件，插件的下载可以使用 yak pull命令。
![](/articles/wechat2md-3d46aa4e006a4423ff658d0d3147efc6.png)
> 由于会访问 github 下载 nuclei-templates，可能会出现网络不佳的情况，可以使用 yak pull --proxy http://xxx 设置代理。

# **列出插件**

![](/articles/wechat2md-151d5edc5897dd0c05900660571b46ab.png)  

首先我们先使用 list 列出所有的插件，会打印出如下插件信息，可以看见我的插件个数为 598 个

```
.\yak.exe scan -list

             _    _ _
 _   _  __ _| | _(_) |_      ___  ___ __ _ _ __
| | | |/ _` | |/ / | __|____/ __|/ __/ _` | '_ \
| |_| | (_| |   <| | ||_____\__ \ (_| (_| | | | |
 \__, |\__,_|_|\_\_|\__|    |___/\___\__,_|_| |_|
 |___/
                                                --- Powered by yaklang.io

[INFO] 2024-04-02 17:44:54 [scan_pluginscan:230]
List All Matched Plugins: ""
+----------------------------------------------+-----------+-------------------+
|                 PLUGIN NAME                  |   TYPE    |      AUTHOR       |
+----------------------------------------------+-----------+-------------------+
| 开放 URL 重定向漏洞                            | mitm      | Rookie            |
| 基础 XSS 检测                                  | mitm      | 神经蛙            |
| 启发式SQL注入检测                              | mitm      | 雨过天晴&伞落人离   |
| Swagger JSON 泄漏                             | mitm      | yaklang.io        |
| SSTI Expr 服务器模版表达式注入                  | mitm      | V1ll4n            |
| SSRF HTTP Public                              | mitm      | 桔子爱吃橘子       |
........
| SQL注入-MySQL-ErrorBased                       | mitm      | yaklang.io        |
| SQL注入-UNION注入-MD5函数                       | mitm      | yaklang.io        |
| HTTP请求走私                                    | mitm      | yaklang.io        |
+-------------------------------------------------+----------+------------------+
[INFO] 2024-04-02 17:44:54 [scan_pluginscan:252] Total Matched Plugins: 598
```   

可以使用 list 和 keyword 进行模糊查询，比如查询包含shiro关键字的插件

![](/articles/wechat2md-b2be8f0cdfcd9398c9cbdf253ad001ce.png)

# **使用插件**   

使用 yak 命令行进行扫描有三种指定插件的方式，分别是使用 templates 、keyword 、plugin ，接下来我们启动Yakit 中提供的 Vulinbox 靶场进行扫描。   

## **templates参数**
使用 templates 可以指定一个包含.yaml 、.yml 文件的文件夹或者以.yaml 、.yml 结尾的文件
![](/articles/wechat2md-b97509dfbfe6dc4f92f673ed03c2e783.png)

## 关于 yaml  
文件可以通过使用 WebFuzzer 页面配置匹配器后自动生成模板文件，也可使用 nuclei 的Yaml 插件。
> 部分使用Yakit WebFuzzer 生成的Yaml 插件，使用 Nuclei 进行扫描存在不兼容的情况，因此更推荐使用 yak 命令行进行相关的扫描检测
## **keyword 参数**
使用keyword 可以使用关键字指定要扫描的插件，例如使用 "shiro" 关键字进行扫描，可以看到下面加载了五个插件，这次我们的目标输入使用 --raw-packet-file, --raw 来进行演示，我们先创建一个 packet.txt文件，内容如下：

![](/articles/wechat2md-71ea6ab83585f5bc1ba2e3785f8a5854.png)

随后进行检测

![](/articles/wechat2md-f798b97e2d2778560aa1e083cf719557.png)   

## **plugin 参数**
使用plugin可以指定插件名进行扫描，使用 list 列出的插件名，都可以使用 plugin 参数进行指定扫描.
![](/articles/wechat2md-fe5fad3ea404234bf11db82f34a87ac2.png)  

# **检出漏洞**
当某一个插件检出了对应的漏洞或风险时，将会在控制台打印出漏洞的基本信息，如下所示：
![](/articles/wechat2md-ac8884402967aaf5a0a619cb6187fcf5.png)
# **流量相关**
当想查看所有插件发送的具体流量时， **无需设置代理** ,可以直接在 Yakit 在 History 中点击**插件流量**进行查看，如下：

![](/articles/wechat2md-7b3d6378bf9b4009ef1de6719c664842.png)

Tags 标识了插件名，代表该条记录是由哪一个插件产生的，并且可以在数据库的漏洞中，查看检出的漏洞或风险。

![](/articles/wechat2md-b3d7b6a8d4d9adbd446b7396bff82738.png)   

# **最后**

![](/articles/wechat2md-151d5edc5897dd0c05900660571b46ab.png)

本次简单讲解了如何使用 yak 命令行进行漏洞扫描，对于有命令行需求的师傅，也可以多多使用，并给我们提出宝贵建议，有任何疑问大家可以在Yakit沟通群中进行提问。

**END**  
**YAK官方资源**  
Yak 语言官方教程：  
https://yaklang.com/docs/intro/Yakit   
视频教程：  
https://space.bilibili.com/437503777Github  
下载地址：  
https://github.com/yaklang/yakitYakit  
官网下载地址：  
https://yaklang.com/Yakit  
安装文档：  
https://yaklang.com/products/download_and_install  
Yakit使用文档：  
https://yaklang.com/products/intro/  
常见问题速查：  
https://yaklang.com/products/FAQ  
  
![](/articles/wechat2md-8764ec1e71cc199b4b0b0bfb3a12e542.other)  
  
![](/articles/wechat2md-304b45488320344b4c7cdbd5759ee4e8.gif) 
