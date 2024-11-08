#  Yaklang 与 Yakit 有什么区别？   
原创 Longlone  Yak Project   2024-09-14 15:30  
  
![](/articles/wechat2md-57d4b38fb5fac67b077017855ed50c43.gif)  
  
天命人们大家好  
  
黑猴大家都通关了吗  
  
这里是一觉睡醒要再上30+年班的超级马喽牛  
  
![](/articles/wechat2md-b74f13632956c46464d313df81c10f96.png)  
  
先提前祝大家[中秋快乐](http://mp.weixin.qq.com/s?__biz=Mzk0MTM4NzIxMQ==&mid=2247521342&idx=1&sn=04d08f4920279e5c620c5c7e9138d803&chksm=c2d1e89af5a6618ceb0508c384d662f79fbcf992e0a36f9d74e25ce62ec9d66b1eea023b7fa9&scene=21#wechat_redirect)  
  
  
经常有小伙伴问  
  
“Yakit怎么报错了？”  
  
“YAK和Yakit有什么区别？”  
  
牛牛委屈  
  
无能狂怒（标题致歉，封面致歉，ooc致歉  
  
今天的文章，就来为大家集中解答一波  
  
![](/articles/wechat2md-3c7b63447b178dca759252db58a2f6c2.png)  
  
![](/articles/wechat2md-239333bf70461c1bb4a984dd3beeb6df.png)  
![](/articles/wechat2md-8be9db6347f2ea70817bafa261ef2623.png)  
![](/articles/wechat2md-980240b2c6bc3714f6373a47ea8ccb3b.png)  
  
**Yaklang**是一种**专为网络安全领域设计的领域特定编程语言**。其目标在于解决安全产品整合过程中所面临的技术挑战，例如不同产品之间的互操作性问题以及安全工具开发过程中的效率和一致性问题。作为一门编程语言，Yaklang能够**独立**完成多项复杂且高级的任务，包括启动中间人攻击、发送HTTP原始报文和编写复杂的POC等。  
  
![](/articles/wechat2md-45e087723096e0c0bdc89133f614e963.png)  
  
**Yakit**是官方的Yaklang**图形化客户端**，绝大多数用户通常接触的软件就是Yakit。实际上，Yakit可以被视为一个精致的“盒子”，其主要目的是为大部分用户提供便利，帮助他们更有效地使用Yaklang。  
  
![](/articles/wechat2md-fce2e4873e48227ed51ea8807f0ad4e4.png)  
  
  
在最初，**Yaklang**最先出现，它作为一门专门为网络安全领域设计的领域特定编程语言，可以通过编程来完成许多复杂的任务，但是这也带来了一部分的**门槛**，即用户需要重新学习一门语言，哪怕这门语言的语法非常的直观，易于学习，对于大部分用户来说依然不够简便。  
  
为了解决这个问题，**Yakit**出现了。**Yakit**是**Yaklang**的图形化客户端，其旨在降低用户的学习门槛，提高效率。Yakit通过直观的图形界面，使得用户能够通过简单的方式去执行复杂的功能模块，测试相关的网站/APP等。  
  
  
![](/articles/wechat2md-f3ed01b2c87914a543c232479637b930.png)  
  
  
Yakit与Yaklang是基于CS(Client/Server,客户端/服务器模式)架构的,而它们之间的通信则是通过**gRPC**进行的。  
  
gRPC是由Google开发的一种高性能、开源且通用的远程过程调用（RPC）框架。该框架基于HTTP/2协议，并采用Protocol Buffers（protobuf）作为接口定义语言（IDL），从而实现不同编程语言之间的高效通信与交互。  
  
在设计过程中，gRPC充分考虑了向后兼容性，尤其是在使用Protocol Buffers时，提供了良好的版本管理机制。良好的兼容性确保了不同版本之间添加字段或接口不会影响通信流程。**这也是为何我们能够使用旧版的Yakit连接新版的Yaklang，或反之亦然的原因。**  
  
![](/articles/wechat2md-729a63a93943fa80853721e52d0d10f5.png)  
  
  
在我们正常启动Yakit时，我们会自动进入最近使用的模式（一般是本地模式），如：  
  
![](/articles/wechat2md-24ca37df242227e94a8c7ae622b6081d.png)  
  
  
得益于Yakit与Yaklang的通信方式（基于CS架构），我们可以通过远程模式来连接Yaklang引擎，远程模式可以在项目管理界面的左下角切换：  
  
![](/articles/wechat2md-7f075065e18b7ec1eefbe40136d6831b.png)  
  
  
或在连上项目后**设置-切换连接模式-远程**进行切换：  
  
![](/articles/wechat2md-14edd0cb750b3619b48e23f86bc7acbb.png)  
  
  
之后，我们可以使用命令:  
```
yak grpc --host 0.0.0.0 --port 8888
```  
  
  
来启动一个gRPC服务器，以便使用Yakit使用：  
  
![](/articles/wechat2md-302a22a96483217ba1b6ca7ee0972397.png)  
  
  
接下来，我们就可以在远程模式中轻松地进行连接：  
  
![](/articles/wechat2md-a145435ed91a2d7721903d5d15c55576.png)  
  
  
![](/articles/wechat2md-f3edfdcfd3761d3a5c4b0e6e11b1e5f0.png)  
  
在了解Yakit与Yaklang的定义及其区别之后，用户再面对类似的**UNIMPLEMENTED**错误就知道如何解决了，即通过升级Yakit和Yaklang版本来解决此问题。为确保获得更佳的使用体验，**建议同时更新这两者。**  
  
![](/articles/wechat2md-5801f310e5a63168d2d987bc5da75283.png)  
  
  
  
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
  
![](/articles/wechat2md-85062b6e6c63b9d9d17d1e2a5ca2ec01.other)  
长按识别添加工作人员
开启Yakit进阶之旅  
![](/articles/wechat2md-14665f86963c7c123b43378ebc55bb0f.other)  
  