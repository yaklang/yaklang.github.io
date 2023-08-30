---
sidebar_position: 11
---
# 二、爆破

使用过Burp Suite的同学都知道，它有一个Intruder模块，它的核心其实并不是某一个功能，而是一整套的操作流：
1. 劫持数据包
2. 发送到Intruder
3. 清除占位符，添加新的占位符
4. 为占位符设置一个值序列，如字典，多行字符串，一串数字等
5. 设置爆破模式，开始爆破

我们发现，后面几步是很繁琐的，很多时候大家花了大功夫的时间在设置上。

那么有没有更好的方法来完成呢？答案是肯定的，Yakit 使用了一种全新的方法，**可以直接在Web fuzzer模块中完成重放与爆破两种工作**，，更轻松地实现批量发包模糊测试。

## 模糊测试标签
首先，我们需要介绍模糊测试标签(fuzztag)。fuzztag是一种小型语法结构，它大概长这个样子：`{{tagname(tagvalue)}}`，例如`{{randint(1,100)}}`生成1-100随机整数。

我们可以看到实际上fuzztag非常像一个函数调用，只是外层包裹了两个花括号。以`randint`这个fuzztag为例，其实所有fuzztag都只接收一个字符串，但是会在后端处理时会特殊处理。

fuzztag还有许多变体，例如它可以嵌套调用：`{{base64(randint(100))}}`生成base64编码后的1-100随机整数。

想要了解fuzztag可用标签和使用样例的同学可以查看这篇文章：[Fuzz Tag Playbook](/docs/newforyak/fuzztag)。

## 使用模糊测试标签进行爆破

### 直接输入fuzztag
在我们了解了fuzztag之后，我们就可以开始使用它来进行爆破了。使用fuzztag最直接的方式是直接在Web fuzzer模块中输入，例如我们爆破数字1-10，只需要简单地在想爆破的位置输入`{{int(1-10)}}`即可：
![](/img/products/yakit/Fuzzer-fuzz/1.png)

可以看到当Web Fuzzer发送了不止一个数据包时，Response自动转换为列表形式展示，当我们点击Response列表中的某一项时，会在右下角显示这次请求的响应，可以看到fuzztag已经被替换为实际的值(这里为10)，另外我们也可以通过点击轻松地切换查看请求与响应。

### 右键插入fuzztag
与之相对的，Web Fuzzer也提供了更简单的方式来插入fuzztag，我们只需要在Web Fuzzer中右键选择**插入标签/字典**即可：
![](/img/products/yakit/Fuzzer-fuzz/2.png)

#### 插入空字节标签：{{hexd(00)}}
`{{hexd(00)}}`将在所在位置插入一个空字节，可以用于测试空字节截断漏洞。这实际上也体现了fuzztag的另外一个好处，我们不需要Burp Suite的十六进制编辑器，也可以轻松地插入十六进制数据。

#### 插入临时字典
![](/img/products/yakit/Fuzzer-fuzz/3.png)

这个功能将用户输入的内容存储到临时文件中，并插入为fuzztag，他有两个模式，一个是插入整个文本内容，另外一个则是按文件内容的每一行插入（例如用户输入了5行字符串，则会发送5个请求）。

#### 插入模糊测试字典标签
![](/img/products/yakit/Fuzzer-fuzz/4.png)

这个功能实际上是与yakit中的另外一个模块：payload的联动。当你再payload中导入了字典后，你可以使用这个功能点击闪电按钮将字典中的内容按行插入为fuzztag。

#### 插入热加载标签
由于热加载的使用门槛较高，所以我们会在后续的教程中再提及相关的内容。

#### 插入文件标签
![](/img/products/yakit/Fuzzer-fuzz/5.png)

这个功能与**插入临时字典**类似，一共有三个模式，第一个是插入整个文本内容，第二个是按文件内容的每一行插入，第三个则是按文件夹下的每一个文件插入（例如该文件夹下一共有5个文件，则会发送5个请求）。

### * 插入标签
![](/img/products/yakit/Fuzzer-fuzz/6.png)

这是yakit最近新增的功能，当你在Web Fuzzer中鼠标点选了某个位置时，会弹出一个插入标签的悬浮框，在这个悬浮框中你可以选择插入一些常见的fuzztag。

## 爆破模式
我们知道，Burp Suite中存在四种爆破模式：Sniper，Battering ram，Pitchfork，Cluster bomb。但实际上我们真的需要爆破模式吗？它是不可替代的吗？

我们先来剖析一下这四个爆破模式的本质：
1. Sniper：单个参数爆破，如果此模式下存在多个占位符，则只同时爆破一个占位符，其他占位符保持不变，例如：`{"key": "§value§", "key2": "§value2§"}`，此时爆破时会先爆破value，而`§value2§`则保持不变，发送的包为：`{"key": "爆破值", "key2": "value2"}`
2. Battering ram：多个参数同时使用一个字典爆破，例如：`{"key": "§value§", "key2": "§value2§"}`，此时爆破时会先同时爆破value和value2，发送的包为：`{"key": "爆破值", "key2": "爆破值"}`
3. Pitchfork：多个参数同时爆破，使用不同字典，字典间一一对应，行数不一致时则取最小值。例如：`{"key": "§value§", "key2": "§value2§"}`，使用的第一个字典为`1,2`，第二个字典为`3,4`，则发送的包为：`{"key": "1", "key2": "3"}`，`{"key": "2", "key2": "4"}`
4. Cluster bomb：多个参数同时爆破，使用不同字典，字典间做笛卡尔乘积模式。例如：`{"key": "§value§", "key2": "§value2§"}`，使用的第一个字典为`1,2`，第二个字典为`3,4`，则发送的包为：`{"key": "1", "key2": "3"}`，`{"key": "1", "key2": "4"}`，`{"key": "2", "key2": "3"}`，`{"key": "2", "key2": "4"}`

根据上述的分析，我们可以看到爆破模式实际上主要服务于多个参数爆破且使用不同字典的情况，我们有没有更好的方式来替代爆破模式呢？答案是肯定的，我们依然可以使用fuzztag来实现。

首先我们来看看多参数的情况下fuzztag的默认表现，实际上他是类似于Cluster bomb爆破模式：
![](/img/products/yakit/Fuzzer-fuzz/7.png)

可以看到一共发送了4个包，和Cluster bomb爆破模式一致。

那么我们要如何使用fuzztag来实现Battering ram爆破模式呢？我们只需要在每个参数的位置插入相同的fuzztag即可：
![](/img/products/yakit/Fuzzer-fuzz/8.png)

我们再来看看如何使用fuzztag实现Pitchfork爆破模式，这时候需要学习fuzztag的一个小小的新语法。我们知道fuzztag它大概长这个样子：`{{tagname(tagvalue)}}`，但实际上我们可以给他分组，就像这个样子：`{{tagname::1(tagvalue)}}`。

两个冒号后面的数字表示分组，分组的意思是：**同一个分组的fuzztag会被替换为同一个 Index 的值**。例如我们想要实现Pitchfork爆破模式，我们只需要在每个参数的位置插入fuzztag，并且在每个fuzztag后面加上相同的分组标识即可：
![](/img/products/yakit/Fuzzer-fuzz/9.png)

通过上述的学习，我们可以发现Burp suite的爆破模式并不是必须的，我们可以通过fuzztag加分组的方式来实现更加灵活的爆破模式。