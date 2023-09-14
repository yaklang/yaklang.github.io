---
sidebar_position: 14
---

# 五、Web Fuzzer序列基础
在经过上述教程的铺垫后，我们终于开始介绍Web Fuzzer序列功能了。 Web Fuzzer 序列就是将多个 Web Fuzzer 节点串联起来，实现更复杂的逻辑与功能。例如我们需要先进行登录，然后再进行其他操作，这时候我们就可以使用 Web Fuzzer 序列功能。

Web Fuzzer序列如图所示，在最左侧有一个**Fuzzer 序列**按钮：
![](/img/products/yakit/Fuzz-Sequence/1.png)

当我们点击 `Fuzzer 序列` 按钮时，会将 `WF-[1]`这个子标签页组成一个序列，变成如下所示：

![](/img/products/yakit/Fuzz-Sequence/2.png)

随后我们可以在 `Step [0]` 这个节点中，添加 `Web Fuzzer` 的标签页`WF-[1]`，这相当于序列中设置第一个节点的请求包为`WF-[1]`。

![](/img/products/yakit/Fuzz-Sequence/3.png)

我们还可以继续添加其他节点到序列中，只需要将其他标签页拖入序列中即可：

![](/img/products/yakit/Fuzz-Sequence/4.png)

接着我们在 `WF-[1]` 中设置一个提取器规则，规则内容是提取键值为`Node1`的值，声明为 `get`变量。再设置一个变量 `node1`，内容是`我是节点1传来的值`：

![](/img/products/yakit/Fuzz-Sequence/5.png)

然后我们在 `WF-[2]`中设置`WF-[1]`中声明的变量，假如此时我们直接发送请求，结果会为空，这是因为单独发送这一个请求，是没有`WF-[1]`中声明的变量的：

![](/img/products/yakit/Fuzz-Sequence/6.png)

最后我们使用 `Fuzzer` 序列功能尝试一下，在` WF-[1]`到`WF-[2]`的中间，开启**继承变量**选项(默认开启)，点击`开始执行`按钮，等待请求结束后，我们查看`WF-[2]`的响应，发现它已经成功使用了在`WF-[1]`中设置的变量：

![](/img/products/yakit/Fuzz-Sequence/7.png)
