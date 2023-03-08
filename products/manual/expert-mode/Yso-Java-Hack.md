---
sidebar_position: 21
---
# Yso-Java Hack
页面初始状态如图，左侧配置 payload 参数，右侧用来展示生成的 payload。

![](/img/products/yakit/Yso-Java-Hack-1.png)

### 生成序列号payload
默认开启 “使用利用链”，即生成序列化 payload ，一级选项是利用链，二级选项是恶意类。鼠标放到小问号上可以看到介绍。

![](/img/products/yakit/Yso-Java-Hack-2.png)

选择利用链和恶意类后，会出现配置表单，类名默认是随机生成的，填写所有表单信息，点击生成，就可以在右侧看到生成的 payload ，点击上方可以切换展示方式。

![](/img/products/yakit/Yso-Java-Hack-3.png)


![](/img/products/yakit/Yso-Java-Hack-4.png)

还可以展示生成payload的代码，还可以将代码发送到Yak Runner，师傅们写插件时如果懒得写，就可以直接在这里直接生成代码。

![](/img/products/yakit/Yso-Java-Hack-5.png)

最新版本 payload 展示类型增加了一个 DUMP ，可以看到 payload 的数据结构，像下面这样。

![](/img/products/yakit/Yso-Java-Hack-6.png)

### 生成恶意类
如图，关闭 “使用利用链” 就可以生成恶意类，具体操作和生成利用链类似

![](/img/products/yakit/Yso-Java-Hack-7.png)

可以看见关闭 “使用利用链” 时多了一个启动反连服务按钮，下面再看一下反连服务。
### 配合反连使用
在配置好恶意类后，点击启动反连，就可以使用当前恶意类直接启动反连了（如果配置了公网反连则使用此配置启动，否则使用本地启动，如果启动失败，请自行在高级配置里配置反连地址），如图

![](/img/products/yakit/Yso-Java-Hack-8.png)

###   实战演示
以 Fastjson 和 shiro 利用为例
这里使用 vulfocus 启动一个 CNVD-2017-02833 实例，攻击流程如下
1. 在 vps 启动一个 yak 引擎yak grpc --host 0.0.0.0，Yakit 端输入服务器地址和端口（默认8087），连接
2. 打开Yakit的端口监听器，监听一个端口，以 8086 为例
   
![](/img/products/yakit/Yso-Java-Hack-9.png)

启动反连服务器并配置恶意类为 TCPReverseShell ，主机填 vps 的 ip ，端口填上面监听的 8086 ，点击应用
   
![](/img/products/yakit/Yso-Java-Hack-10.png)

打开 webfuzzer，发送 Payload
   
![](/img/products/yakit/Yso-Java-Hack-11.png)

   
![](/img/products/yakit/Yso-Java-Hack-12.png)

如图，反连列表中可以看见成功收到 LDAP 和 HTTP 请求，说明目标成功加载了恶意类（如果只收到 LDAP 请求，没有 HTTP 请求，可能是目标未开启com.sun.jndi.ldap.object.trustURLCodebase ）
   
![](/img/products/yakit/Yso-Java-Hack-13.png)
端口监听器收到了目标机器的连接
   
![](/img/products/yakit/Yso-Java-Hack-14.png)

**Shiro测试**

- 使用vulfocus/shiro-CVE-2016-4437镜像搭建环境
- 启动Yakit
- 打开Yso-Java Hack
- 利用链选择CommonsBeanutils1
- 恶意类选择RuntimeExec，填写命令，生成Yak代码
   
![](/img/products/yakit/Yso-Java-Hack-15.png)

- 编写Yak脚本
   
![](/img/products/yakit/Yso-Java-Hack-16.png)

- 执行后进入容器看见/tmp目录下多了111文件，利用成功。