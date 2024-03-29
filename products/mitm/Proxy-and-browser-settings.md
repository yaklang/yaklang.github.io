---
sidebar_position: 10
---
# 代理和浏览器设置

Yakit MITM模块以拦截代理的方式截获所有通过代理的网络流量，包括客户端的请求数据和服务器端的响应信息。主要拦截http和https协议的流量，并通过中间人方式，对客户端请求和服务端响应进行处理，以实现安全评估测试的目的。

在日常工作中，我们最常使用的是web浏览器作为web客户端。通过设置代理，我们可以截取web浏览器的流量，并对流经Yakit代理的数据进行处理。这种方式可以模拟各种攻击场景，帮助测试人员发现应用程序中的安全漏洞。

下面我们就介绍下在常用浏览器Firefox和Google Chrome下是如何配置Yakit的代理。

### Google Chrome代理设置

Google Chrome使用Yakit作为代理服务器的配置步骤如下：

1. 启动Yakit 打开 MITM 交互劫持，配置代理地址和端口 127.0.0.1:8083，点击劫持启动，确保劫持处于开启状态。

![](/img/products/yakit/pr0xy-1.png)

2. 在Chrome浏览器中，点击浏览器右上角的三个点按钮，选择“设置”选项。

3. 在“设置”页面中，向下滚动到底部，找到“系统”选项，点击“打开代理设置”按钮

![](/img/products/yakit/pr0xy-3.png)

4. 在“代理”选项卡中，打开`手动设置代理服务器`下的`使用代理服务器`，在“地址”和“端口”文本框中输入前面设置的Yakit MITM 的代理服务器的IP地址和端口号（127.0.0.1:8083）

![](/img/products/yakit/pr0xy-4.png)

5.点击`保存`按钮保存设置并关闭所有窗口。

### FireFox设置

与Google Chrome 的设置类似，在FireFox中，我们也要进行代理的设置，才能将FireFox浏览器的通信流量，通过 Yakit 的代理进行传输。详细的步骤如下：

1. 启动Yakit 打开 MITM 交互劫持，配置代理地址和端口 127.0.0.1:8083，点击劫持启动，确保劫持处于开启状态。

2. 下载最新版Firefox浏览器，打开浏览器，点击右上角的菜单按钮（三条横线），选择`设置`选项。

3. 左侧菜单中选择`常规`,然后下拉至最底部的`网络设置`，点击`设置`

![](/img/products/yakit/pr0xy-5.png)

4. 在`连接设置`对话框中，选择`手动代理配置`选项,在`HTTP代理`文本框中输入 Yakit 代理服务器的IP地址和端口号（默认为127.0.0.1:8083）

![](/img/products/yakit/pr0xy-6.png)

5. 勾选`也将此代理用于 HTTPS`复选框，点击确定，设置完成。

以上就是代理和浏览器设置的所有内容。当然，浏览器中，可以添加一些扩展组件，对代理服务器进行管理。如Proxy Swither、Proxy SwitchyOmega等等都是很好用的插件，感兴趣的读者可以自己搜索相关知识，下载试用一下。

除此之外，Yakit还提供了系统代理，系统代理能帮助用户自动代理系统所有请求全局抓包。系统代理打开的具体位置在劫持界面的右上角。

![](/img/products/yakit/pr0xy-7.png)

点击启用后即可开始全局抓包，显示“已启用”表示启用成功，系统所有请求数据包均可抓取。此功能常用来抓取微信小程序、钉钉等应用的数据包。


