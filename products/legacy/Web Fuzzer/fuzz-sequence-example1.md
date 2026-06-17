---
sidebar_position: 15
---

# 序列场景案例：每日签到

这篇文章我们将会介绍一个 Web Fuzzer 序列的实际应用案例：每日签到。我们以某个网站的签到为例，我们先来看看它的登录逻辑：

![](/img/products/yakit/Fuzz-sequence-example1/1.png) 

可以看到，登录成功后显示登录成功信息，并且设置了一些cookie。

在登录后，在用户中心点击签到，使用yakit的 MITM 模块拦截请求，我们可以看到签到的请求如下：

![](/img/products/yakit/Fuzz-sequence-example1/2.png) 

可以看到，我们发送了一个post请求，行为是qiandao，然而还有一个nonce的参数，它是一个长度为9的数字字母的字符串。

nonce是WordPress中用于验证的机制，它通常用于保护请求防止被滥用（例如爆破，CSRF等）。nonce的值是随机的，虽然它并不是一次性的，但是它的生命周期很短，所以我们需要先获取nonce的值，然后再发送签到请求。

我们来看看要如何获取nonce值，它一般存在于页面的源码中，我们使用 Web Fuzzer 序列拼接登录和访问用户中心的请求，拿到用户中心页面的响应，可以找到它的nonce值：
![](/img/products/yakit/Fuzz-sequence-example1/3.png) 

接下来我们需要使用数据提取器来提取这个值，我们使用xpath来提取，由于文档结构比较简单，我们只需要简单地提取所有button下的data-nonce即可：
![](/img/products/yakit/Fuzz-sequence-example1/4.png) 

最后一步，我们使用 Web Fuzzer 序列来实现整个签到，顺序如下：
1. 登录请求
2. 获取签到所需nonce值（继承cookie）
3. 使用获取到的nonce值（继承变量和cookie），其中第三个请求使用到第二个请求的变量：`{{p(nonce)}}`

构造好 Web Fuzzer 序列后，我们发送请求，可以看到成功签到，至此我们就可以利用这个 Web Fuzzer 序列一键签到了：
![](/img/products/yakit/Fuzz-sequence-example1/5.png) 


