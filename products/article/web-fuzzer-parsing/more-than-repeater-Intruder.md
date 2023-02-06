---
sidebar_position: 1
---

# Web Fuzzer: MORE than Repeater + Intruder

>如果我们只是想做 Repeater / Intruder 的平替，其实并没有太大的意义。实际上可以基于 Fuzz 模版变形的 Web Fuzzer 的操作在灰度测试的过程中取得了巨大反响，收获了大量好评，同时也有很多关于操作和使用的有效反馈。  
>
>在迭代了很多个版本，优化了很多交互逻辑，修复了诸多 BUG 之后，我们认为 Web Fuzzer 已经相对比较成熟。

## 背景
其实相比 Burpsuite 的交互式劫持功能，Repeater 和 Intruder 对于 “手工渗透” 来说，其实是大家花的时间最多的。当我们只实现了 Burpsuite 的核心交互式劫持的时候，其实对 Burp 的替代还远不够。

我们发现他的核心其实并不是某一个功能，而是一整套的操作流：

1. 劫持 HTTPS
2. HTTP History 查看劫持到的请求
3. History 中发送需要测试的请求到 “插件” 或者 Repeater / Intruder
4. 修改数据包，重放 / 爆破

我们发现，前三步其实只是大家花费大量时间的 “入口”，是一个获取流量的过程，很多时候大家花了大功夫的时间在 Repeater 和 Intruder 上。

>为什么发送原始数据包这么简单的事情，很多工具不支持，做不好，自己写的也各种小问题。
>
>甚至在 Burp 本身的一些细节处理也存在问题

Yakit 使用 yaklang 的核心模糊测试标签语法，实现了对 Repeater 和 Intruder 的完美整合，甚至可以免配置实现批量发包模糊测试。

## 快速预览: 基础操作流

我们使用 Yakit 的交互式劫持功能，可以很容易实现 Burp 的最基础操作流

1. 开启代理：劫持数据包
2. 在 History 中右键数据包，发送到 Web Fuzzer
3. 在 Web Fuzzer 中修改数据包并重放

<video
    src="https://yaklang.oss-cn-beijing.aliyuncs.com/video/yakit-burp.mp4"
    loop={true} playsInline={true} controls={true} autoPlay={true} style={{width: 890}}
/>

## 快速预览: 使用 Web Fuzzer 进行爆破

>推荐大家升级 Yakit-1.0.13-sp3 与引擎  >= Yakit-1.0.13-sp16

使用 Burp 的 Intruder 爆破其实是任何一个渗透测试同学的必修课，在原数据流程，我们需要做的事情是：

1. 把需要爆破的数据包发送到 Intruder
2. 为爆破的位置打标记
3. 设置字典
4. 开始爆破
5. 等待结果，查看爆破过程

然而在 Yakit 中，这个过程变得更加简单并且符合人的逻辑。

1. 把需要爆破的数据包发送到 Intruder
2. 选中需要打标记的位置
3. 右键选择字典
4. 发包！

当然，这类场景非常多，很多时候我们想要的遍历订单类，遍历手机号，甚至遍历 Path 都可以通过这个方式做到，实际 Yakit 在进行标记的时候，和 Burp 略微不同，并不是用序号进行标记，而是通过一个特殊的 Fuzz 标签，标签可以支持非常多的种类。

比如说，如果要进行一个参数遍历 1-10，在 Yakit 中只需要 {{int(1-10)}} 即可把这个位置用数字 1-10 依次替换。如果需要用到字典，通过 {{x(your-dict)}} 即可把字典内容依次替换标签位置内容，从而达到 Fuzz / 爆破的目的。

更让人高兴的是，实际上我们的爆破有时候并不完全依赖字典，如果单纯只是想测试少数的几个路径，我们费力去传一个字典，其实有点浪费了，在 Yakit 中我们可以通过 {{list(element1|element2|...)}} 来测试几个特定的值。

例如，我们以一个具体的案例来看，如下是一个文件包含漏洞的典型数据包。

``` HTMLBars
GET /fileincl/example1.php?page=/etc/{{list(hosts|passwd|nginx.conf)}} HTTP/1.1
Host: 172.16.86.134
Connection: close
```
针对这个案例，我们在 page=/etc/{{list(hosts|passwd|nginx.conf)}} 设置了一个这样的内容，意味着整个数据包将会被渲染成三个数据包，分别为

```go
// hosts
GET /fileincl/example1.php?page=/etc/hosts HTTP/1.1
Host: 172.16.86.134
Connection: close

// passwd
GET /fileincl/example1.php?page=/etc/passwd HTTP/1.1
Host: 172.16.86.134
Connection: close

// nginx.conf
GET /fileincl/example1.php?page=/etc/nginx.conf HTTP/1.1
Host: 172.16.86.134
Connection: close
```

在 Web Fuzzer 中我们发送这个数据包

![](/img/products/yakit/repeater-data-packet.png)

当我们发送了这种可以渲染的数据包的时候，我们的界面将不再会是之前的左边请求，右边单个响应体的布局，右边将会变成一个列表，列表中每个请求的各种指标：响应大小（Burpsuite 常用），响应内容的相似度，响应 Header 的相似度，Payload 内容可以帮助用户迅速筛选出想要的结果。

## 高级案例: 可作为 Web 扫描器的 Fuzzer！

众所周知，在 Burp 的 2021 年 12 月的版本中，才支持可以针对 Host 的 Intruder 配置。    
但是实际上，从 Yakit 一出生的时候，就支持这类场景。

### Yakit Web Fuzzer 高级配置

>如果直接根据 Host 去发起请求的话，那如何实现 Host 碰撞的问题呢？

这是一个好问题，从 Host 取需要请求的网站是正常的逻辑，但是这种会造成 Host 碰撞的需求无法实现。但是并不代表 Yakit Web Fuzzer 放弃了这个能力

![](/img/products/yakit/repeater-advanced-configuration.png)

当我们打开 “高级配置”，我们发现可以静态设置 Host，这个 Host 是实际请求将会采用的 Host，如果设置了他，意味着发包过程中，Web Fuzzer 不会根据数据包的 Host 字段去决定要给谁发送请求了。

通过固定 Host，我们再在数据包中，对 Hosts 进行 fuzz 标签标记，就可以轻松达到 Host 碰撞的目的。

同样的，其他的高级配置均可生效，我们可以很容易的配置

1. 是否启用渲染模版，即是否启用 Web Fuzzer 的 fuzz 标签的功能。
2. 配置批量数据包发送时候的并发，为了方便理解，配置为 “并发线程”。
3. 强制开启 HTTPS
4. 为 Intruder 和 Repeater 快速设置代理（可自动缓存记住配置，不需要每次都重新配）
5. 设置单个请求的超时时间

### 以一个网段+多个端口为目标：批量扫描！

要进行批量扫描，我们需要用到新的标签 {{net(network_block)}} 和 {{port(portstr)}}
当我们以

```HTMLBars
{{net(172.168.1.1/24)}}:{{port(80,443,8080)}}
```

作为输入时，即使笔者不给大家介绍这个标签，大家也可以从标签内容看出这个标签承担的作用。渲染一段网段，渲染几个端口，然后把渲染出的结果进行笛卡尔乘积：

大家可以随时在 “数据处理=>Codec=>模糊测试” 功能中测试自己编写的标签模版。

![](/img/products/yakit/repeater-batch-scan.png)

在有了这个积累之后，我们可以很容易构造一个数据包，来爆破管理员目录    
比如说，我们只爆破 admin/, login.php, wp-login  这三个目录，针对某一个网段的 80,443,8080 端口，那么我们的 Payload 很可能长成这样。

```HTMLBars
GET /{{list(admin/|login.php|wp-login)}} HTTP/1.1
Host: {{net(47.52.100.1/24)}}:{{port(80,443,8080)}}
Connection: close
```

![](/img/products/yakit/repeater-batch-scan-select.png)

在爆破过程中，我们点击 StatusCode 筛选，可以从状态码筛选出我们想要的内容。    
其实在熟练的情况下，我们的核心操作只有：

1. 编写合适的 Web Fuzzer 模版
2. 发包！筛选！

## 配合字典：如何在 Web Fuzzer 中使用字典？
在 Web Fuzzer 中使用字典其实非常自然，我们经过各种测试与研究，发现 Burpsuite 的大标签，根据序号选择字典并不是非常自然和科学的习惯。相比之下，我们觉得更人性化的逻辑是：

1. 选中想要替换的位置，右键
2. 选择字典进行替换

![](/img/products/yakit/repeater-dictionaries.png)

当点击 “插入模糊测试字典标签” 之后将会看到如下对话框。    
在新的框中，用户可以选择字典，同时查看里面的内容，在决定要选择哪个字典之后，可以点击 “小闪电” 或者 “选择该 Fuzz 标签”。自动把标签内容替换到 Web Fuzzer 中选中部分。

![](/img/products/yakit/repeater-insert.png)

![](/img/products/yakit/repeater-insert-send.png)

再插入了新的标签之后，我们再点击 “发送数据包”，将会在表格中的 Payload 看到这次渲染的 “结果”。值得注意的是

![](/img/products/yakit/repeater-insert-careful.png)

当用户可以完成我上述的一些操作的时候，发现其实 Repeater 和 Intruder 的功能是完全可以有一种 “奇妙的结合” 的，原本在 Burpsuite 中需要 Repeater 和 Intruder 切换的功能，在 Yakit 的 Web Fuzzer 中通过 Fuzz 标签得到了平衡，同时摒弃了 “不直观” 的问题，真的所见即所得。

## 技术补充说明：
1. 在最新的 Yak 引擎中 (yak-1.0.13-sp18)，<span style={{background:"#fff67acc"}}>劫持代理并不会为劫持到的请求增加 "Connection: close"。对于一些要通过 Connection: close 来判断是否被调试的 Web 应用来说，这种方式只能针对 Burpsuite。</span>
2. Web Fuzzer 会对数据包进行修复，修复的内容如下：
    1. 解决数据包的 CRLF 的问题
    2. 如果数据包是 multipart/form-data，也会修复这种数据结构下的 CRLF
    3. 兼容 Chunk（右键可以进行 Chunk 编码）
    4. 自动修复 Content-Length，如果为 0，则不显示
    5. <span style={{background:"#fff67acc"}}>不会自动增加或修改 Connection 字段</span>
3. Web Fuzzer 的模糊测试解决方案本质上是 Yak 语言 fuzz 模块的扩展
4. 本文介绍的几种常见的标签内容，在 https://www.yaklang.io/docs/buildinlibs/lib_fuzz 中可以找到详细的教程
5. Yak 语言中的 poc.HTTP (https://www.yaklang.io/docs/yakexamples/http-raw) 其实和 Web Fuzzer 的核心功能一样，可以说是单体发包的可编程实现。高并发版本是：httpool.Pool (https://www.yaklang.io/docs/yakexamples/batch-http)

>Connection: close / keep-alive 额外说明：
>
>我们假定来自于响应的数据包不畸形，那么一个 HTTP 数据包是不是完整的，并不应该取决于 Connection close/keep-alive. 而是应该由 HTTP 协议内容来决定，比如 Transfer-Encoding: chunked 读完了吗？比如 Content-Length 的长度是否正确？Bytes / Range 设置。
>
>在大部分渗透测试过程中，我们并不需要保持连接，但是 Connection: close 有时会成为累赘（他在 HTTP/1.1 和 HTTP/1.0 是不一样的），因此擅自改动会导致代理性能降低，或者不兼容 HTTP/1.1 强制只允许默认行为的应用，例如宝塔面板 （@奶权 师傅提供案例）

## 并不是终点
其实虽然 Web Fuzzer 的已经初具雏形，但是扪心自问一些细节仍然处理的还不够好，并且 Web Fuzzer 应该还可以支持更多更强的功能：

比如说，

1. Web Fuzzer 的数据包应该可以和新的插件系统进行关联，在右键菜单中可以直接使用数据包进行漏洞扫描。
2. 发送的目标可以基于 unix-socket 而不应该局限于 TCP
3. 更多更强的标签也应该有被开发，诸如：
    1. {{repeat(times)}} 标签: 直接重复一定次数，用于测试逻辑漏洞和竞争问题，暂时可用 {{randstr(0,0,10)}} 代替
    2. {{file(filename)}} 标签: 直接选择一个文件名作为输入，可以加载文件
    3. {{files(file1|file2|file3|dir)}} 标签: 直接选择一个文件名作为输入，可以加载多个文件内容，可以支持针对文件上传的文件内容的批量测试