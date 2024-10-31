#  在 Yakit 中让 AI 辅助你完成复杂工作   
原创 Yak Project  Yak Project   2024-06-06 16:45  
  
![](/articles/wechat2md-57d4b38fb5fac67b077017855ed50c43.gif)  
  
![](/articles/wechat2md-151d5edc5897dd0c05900660571b46ab.png)  
  
**实践型 AI Gateway**  
  
  
  
  
  
  
  
  
![](/articles/wechat2md-f37ad4d81e63c8aa2f4752a0d49acff7.png)  
  
  
在各种 GPT 的轰炸下，先进技术探索者们开始尝试使用 AI 来完成各种各样的工作任务，各种用户和开发者开始在复杂的 Agent 流配置中寻求“使用”和“智能”的平衡。但是我们并没有看到实践性很强的 AI 工程化实现，特此我们将会在这篇文章中介绍，**Yakit 是如何把 AI 用在真实的安全从业人员的日常工作中的。**  
  
  
  
**亟待解决“效率悖论”问题**  
  
![](/articles/wechat2md-151d5edc5897dd0c05900660571b46ab.png)  
  
  
如果一个 AI 工具或者系统，是需要  
**强行把用户从核心工作流中抽离出来**，让用户人脑/手动总结上下文，传递给 AI 然后再让 AI 把结果传递给人，人理解之后再去补充上下文  
**切换回原来的工作流**，然而我们经过大量实践认为  
**上下文切换其实是非常耗费精力的****。**  
  
在这种情况下，AI 的介入反而会造成真正在进行工作的时候，效率变低，与我们引入 AI 辅助的目的相悖，我们可以称这种情况叫“效率悖论”。要解决这个问题，AI 的应用绝对不应该是与原本工作割裂的，至少应该像 Github Copilot 代码补全一样，直接融入核心工作流程。  
  
基于这个原理，如果想要在垂直领域让 AI 发挥它的作用和正确帮助专业领域进行智能转型，一个重要的事情就是让 AI 直接接入我们的日常生产工作环境。  
  
![](/articles/wechat2md-32835f8017d0c7ec545ca51fd5ac187f.png)  
  
  
**AI 接入 Yakit 的用户工作流**  
  
![](/articles/wechat2md-151d5edc5897dd0c05900660571b46ab.png)  
  
#   
  
随着使用 Yakit 的安全从业人员规模增长，我们发现 History 和 Web Fuzzer 几乎是时刻都会打开的功能，实际上不论是劫持功能还是数据包重放，数据源几乎都是随手都可以获取到的。在一般的其他 AI 用户应用使用中，用户都需要  
**手动复制数据包到 AI 工具或者 IDE 中**进行操作。实际在工作中，这个过程就**非常割裂**  
，很多用户甚至因为这种复制到 AI 的操作会中断思路而拒绝使用 AI。  
  
经过思考之后，用户入口不应该是 “复制粘贴” 到别的应用，在软件的  
**“右键菜单”中直接操作**即是我们认为的 AI 最佳的接入方式。那么在 Yakit 的右键扩展中，其实已经有了插件系统的接入，我们可以用右键执行 Yaklang 代码帮助我们处理任何数据包变形，数据提取等事情。那么  
**只要让 Yaklang 可以接入多种 AI 系统**，把多种平台的 AI 综合表达成统一的接口，这样用户就无需复制粘贴数据到别的平台了，并且在接入 AI 系统之前，用户可以按照自己的要求构建 prompt 或者获取数据源。  
  
  
  
**Yaklang 全面拥抱 AI**  
  
![](/articles/wechat2md-151d5edc5897dd0c05900660571b46ab.png)  
  
#   
  
根据上面我们实际的效果，Yaklang 在 AI Agent 编程的能力可以直接在 Yakit 中体现和接入，甚至用户几乎不需额外复制粘贴手动构建 prompt 即可使用插件商店中的 AI 插件。  
  
实现这个功能，我们需要为用户介绍我们的新的 Yaklang 编程库：ai  
。  
  
在大部分插件的编程中，ai 库的使用会被自动识别，同时 ai 也将会从 “系统配置” 中选择配置过的第三方应用：  
  
![](/articles/wechat2md-10fe9bc30629e420244e4b0bc57f0bd5.png)  
  
用户可以在 “第三方应用” 中添加 AI 的 APIKey 即可使用，目前我们支持：  
  
1、  
openai   
接入点（**可单独配置代理**），可以配置代理域名  
  
2、  
comate   
接入   
>= 1.3.4-beta2  
 版本以上可用，不定时限时免费（Beta）  
  
3、  
moonshot  
 APIKey 接入  
  
4、  
chatglm  
 APIKey 接入  
  
  
  
**AI 插件支持：**  
  
**任何人都可以编写 Yakit AI 插件**  
  
![](/articles/wechat2md-151d5edc5897dd0c05900660571b46ab.png)  
  
#   
  
当然，我们官方并不提供 AI APIKey（除了限免活动），所以实际上，用户使用的 AI 模型应该自己去申请 APIKey 并在全局配置中设置好。  
  
**在 Yakit 中配置 APIKey**  
  
**编写一个 AI 插件**  
##   
  
我们编写 AI 插件在**Yakit Codec 插件**中几乎没有任何学习成本：  
  
![](/articles/wechat2md-07ffebc96afe9852fc6afe5dccefea09.png)  
  
以一个插件商店的简单插件为例：构建 prompt 直接调用 ai.Chat()  
 无需额外传递其他参数，可自动使用“全局配置”中的 APIKey 和对应的类型以及平台。在插件编写的时候，还可以勾选插件的生效位置，目前支持  
  
![](/articles/wechat2md-2b1c89b6956c4b79e05c2108a4d36aa2.png)  
  
在目前支持的支持中：  
1. 数据包右键：指的是所有输入/文本框中展示内容是数据包内容的地方（编辑器以及数据包展示）  
  
1. History 右键（单选/多选）：在 History 的流量表的右键可以轻松唤起插件调用，可以直接把数据库记录转入插件。  
  
![](/articles/wechat2md-d3dee2df76829ebe3d45f96ac1dbfe7e.png)  
  
![](/articles/wechat2md-2ba0fcda98683ea6e35a550c202694dc.png)  
#   
  
**AI 助手 Comate：限时免费**  
  
![](/articles/wechat2md-151d5edc5897dd0c05900660571b46ab.png)  
  
#   
  
在本周五的版本中，用户无需任何配置即可在 Yakit 中使用 Comate 进行 AI 问答与操作。  
  
![](/articles/wechat2md-1633e2a4da7ffbd3247b702d76c1976f.jpeg)  
  
  
**END**  
  
  
  
 **YAK官方资源**  
  
  
Yak 语言官方教程：  
https://yaklang.com/docs/intro/Yakit 视频教程：  
https://space.bilibili.com/437503777Github下载地址：  
https://github.com/yaklang/yakitYakit官网下载地址：  
https://yaklang.com/Yakit安装文档：  
https://yaklang.com/products/download_and_installYakit使用文档：  
https://yaklang.com/products/intro/常见问题速查：  
https://yaklang.com/products/FAQ  
  
![](/articles/wechat2md-85062b6e6c63b9d9d17d1e2a5ca2ec01.other)  
  
**长按识别添加工作人员**  
  
开启Yakit进阶之旅  
  
![](/articles/wechat2md-14665f86963c7c123b43378ebc55bb0f.other)  
  
  
