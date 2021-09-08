# Yakit: 集成化单兵安全能力平台

Yakit 是 Yak 的衍生项目，Yak 语言核心提供了非常强大的安全能力，但是限于使用形式，用户必须学习 Yak
语言并同时具备对安全的一定理解。

为了让 Yak 本身的安全能力更容易贴近大家的实际使用，我们在为 Yak 编写了 gRPC 服务器，
并使用这个服务器实现 / 构建了一个客户端：Yakit。

Yakit 是一个高度集成化的 Yak 语言安全能力的输出平台，使用 Yakit，我们可以做到：

1. 类 Burpsuite 的 MITM 劫持操作台
1. 查看所有劫持到的请求的历史记录以及分析请求的参数
1. 全球第一个可视化的 Web 模糊测试工具：Web Fuzzer
1. Yak Cloud IDE：内置智能提示的 Yak 语言云 IDE
1. ShellReceiver：开启 TCP 服务器接收反弹交互式 Shell 的反连
1. 第三方 Yak 模块商店（待上线）：社区主导的第三方 Yak 模块插件，你想要的应有尽有
1. ...

## 第一无二的 Yakit 架构

正如我们在上面提到的，Yakit 的核心并不在工具本身上，而是依托于 Yak gRPC 接口；
也就是说，我们可以仅仅只把 Yakit 当作一个 "视窗" 来操纵 Yak 引擎来完成我们想要实现的安全能力。

我们可以用一张图来简单解释一下 Yakit 的架构是怎么样与传统安全工具有所区别的：

![](../static/img/products/yakit/arch.jpg)

## 如何使用 Yakit MITM 来劫持 HTTPS？

## 如何使用可视化模糊测试： Yakit Web Fuzzer
