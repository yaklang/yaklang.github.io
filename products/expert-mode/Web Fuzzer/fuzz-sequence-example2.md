---
sidebar_position: 16
---

# 七、序列场景案例：文件上传与校验

这篇文章我们将会介绍另外一个 Web Fuzzer 序列的实际应用案例：文件上传与校验。我们以 Upload labs 靶场为例。

打开 Upload labs 靶场的 Pass-01 ，上传文件，使用yakit的 MITM 模块拦截请求，发送到 Web Fuzzer 中：
![](/img/products/yakit/Fuzz-sequence-example2/1.png) 

由于 Pass-01存在前端限制，只允许上传图片后缀的文件，在我们抓到包后将jpg后缀改为php后缀，点击**发送请求**按钮，可以找到文件上传后存放的路径：
![](/img/products/yakit/Fuzz-sequence-example2/2.png) 

接下来我们使用数据提取器来提取出文件上传后的路径，我们使用xpath来提取，获取id为img的div下的img标签中的src属性即可：
![](/img/products/yakit/Fuzz-sequence-example2/3.png) 

之后我们还需要GET请求来访问上传的路径，由于返回的值是相对路径，所以我们还需要fix一下，使用nuclei函数trim一下：
![](/img/products/yakit/Fuzz-sequence-example2/4.png) 

最后我们使用 Web Fuzzer 序列来实现整个文件的上传与校验，可以看到响应200，并且返回了我们上传的php文件中输出的`hello`：
![](/img/products/yakit/Fuzz-sequence-example2/5.png) 