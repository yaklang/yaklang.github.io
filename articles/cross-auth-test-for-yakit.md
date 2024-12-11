#  "Yaker，你可以全局配置插件环境变量!"
原创 Yak  Yak Project   2024-11-28 17:30

![](/articles/wechat2md-57d4b38fb5fac67b077017855ed50c43.gif)

周四周四，Vme50(bushi

大家好，这里是疯狂超级牛（功能上新版）

![](/articles/wechat2md-be056115ce4cad5a943f713126836d75.png)

经常有用户问

“牛牛如何为不同插件配置相同的变量值呢？”

“能有一个一波搞定插件变量的方式就好了”

超级牛听到了广大用户的声音，默默地拿起了鞭子，走向开发团队...

于是！**插件全局变量配置功能** ，上新！

那么如何具体使用此功能来配置插件的环境变量呢？

请看VCR⬇️

![](/articles/wechat2md-f449c4ddfa6b3c48c868fc5c880bb625.jpeg)

![](/articles/wechat2md-aff5859e2a52e9f6b3cdb79577b4490b.png)

![](/articles/wechat2md-4716e77f643320a73d13ca6cfbc8e1bd.png)

我们的设计中，使用cli的选项作为环境变量的获取接口。一个简单的例子如下
```
// setPluginEnv 是一个选项函数，设置参数从插件环境中取值
key = cli.String("key", cli.setPluginEnv("api-key"))
```  

获取插件环境变量和使用普通cli参数基本一致，只需要在选项里设置 cli.setPluginEnv("api-key")即可，其中传入的是环境变量的key值。

需要说明的是一旦设置这个选项，Yakit将不再提供输入，其数据必定来自于插件环境变量。

![](/articles/wechat2md-b8b16137585d937c62e015ba908cdcbd.png)

可以看到上述demo中为cli参数 env设置 setPluginEnv之后，参数预览处就没有对应的输入框了。

![](/articles/wechat2md-1a801c50533ae96fb847ce0684387123.png)
#   

插件环境变量可以在两处配置 插件商店页面的配置页 和 单个插件的配置页

![](/articles/wechat2md-c3d38c9c921bb07ae8e56fd9dc9044c6.png)

这两处的配置有一些细节的不同。

![](/articles/wechat2md-7a5f49a132d2c96ea9ec5802ac063f84.png)
##   

![](/articles/wechat2md-ebe23df29491b7cec345f26b5f5e29d3.png)

这里的配置页面拥有完整的对环境变量的增删改查能力。可以新建环境变量，即使没有插件使用。

![](/articles/wechat2md-8f1aaea01d4fa3ca6da42ff5dc2a7c07.png)

需要说明的是变量是**可以支持空值**的，**这与没有环境变量并不等价。**

![](/articles/wechat2md-cd2cc4afc7fd915eafc2b6c3cea555a4.png) 

这部分的配置是为了方便使用做出的针对单个插件的简单版配置

![](/articles/wechat2md-61644b57d884342a3156ba198a13a62d.png)

它只对本插件代码中使用的环境变量进行了展示，只提供对应的修改功能。

这里是对代码进行了解析处理，如果有代码中需要使用的环境变量没有被配置的话，会在此处提示用户。

![](/articles/wechat2md-a93f331e03d4781d13aa42728374e991.png)

点击配置即可在此处快捷配置环境变量
> 需要注意的时候环境变量的影响范围是全局，这里修改之后，所有的使用对应环境变量的地方都会受到影响。


![](/articles/wechat2md-f933d85b578090be8ecbd16adea56dcd.png)
#   

有了插件环境变量之后，一些情况可以有更好的解决方案。比如为简单改动插件 就可以为其添加特定的校验头。

这里使用简单的内置插件——HTTP请求走私为例
```
buildSmugglePacket = (host, newPacket) => {
...
}

mirrorNewWebsite = func(isHttps /*bool*/, url /*string*/, req /*[]byte*/, rsp /*[]byte*/, body /*[]byte*/) {
    ...
    payload = buildSmugglePacket(host, req)
    println(payload)
    ...
    rsp, _ = poc.HTTPEx(payload, poc.https(isHttps), poc.noFixContentLength(true))~
    ...
}
```  

假设现在进行渗透测试的一批目标中，分别添加特定的头 TestHeader，不同的测试目标的校验值不一样。

那么这个时候就可以通过环境变量进行一次通用改造。
```
header = cli.String("header",cli.setPluginEnv("testheader"))
cli.check()

buildSmugglePacket = (host, newPacket) => {
...
}

mirrorNewWebsite = func(isHttps /*bool*/, url /*string*/, req /*[]byte*/, rsp /*[]byte*/, body /*[]byte*/) {
    ...
    payload = buildSmugglePacket(host, req)
    println(payload)
    ...
    originResponse, req = poc.HTTP(standardPacket.Replace("REPLACEME_HOST", host), poc.https(isHttps),poc.replaceHeader("TestHeader", header))~
    ...
}
```  

改造之后此参数会在插件发送测试数据包的时候添加特定的请求头值，如需改动请求头值只需，修改环境变量配置即可，无需再改代码。

修改完毕在配置页面可以看到有未配置的变量

![](/articles/wechat2md-e0099c9fb757084b7c3d4bc20bcc2398.png)

点击配置设置好环境变量之后执行插件，可以看到成功地进行请求头插入

![](/articles/wechat2md-20542c2fdecf06753b38084ba59526d6.png)

如果需要更换测试目标，只需要在配置页面替换即可。

当然，这只是一个例子用来帮助社区用户快速了解插件环境变量的用途。

实际工作中可以改造热加载插件，使用hijack系列的hook，达到”一处修改，全局生效“的效果，用户可以自行探索。



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
