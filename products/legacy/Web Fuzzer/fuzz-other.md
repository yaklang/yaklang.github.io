---
sidebar_position: 21
---

# 其他
在这里，我们介绍一些 Web Fuzzer 的小功能，功能虽小，但是却很实用。

## 新建 Web Fuzzer
### 从 Web Fuzzer 页面中新建
![](/img/products/yakit/Fuzz-other/1.png)

点击加号即可新建一个新的 Web Fuzzer 。新建的 Web Fuzzer 页面默认请求包是一个发送给`exmaple.com`网站的POST请求。

![](/img/products/yakit/Fuzz-other/2.png)
另外，你也可以在一个 Web Fuzzer 中，右键选择**新建 WebFuzzer**按钮或者使用快捷键(ctrl+R)，这样做会将当前的 Web Fuzzer 复制一份。

### 从历史（History）页面中新建
![](/img/products/yakit/Fuzz-other/3.png)

当我们在历史页面选中一个请求包时，右键选择**新建 WebFuzzer**按钮或者使用快捷键(ctrl+R)，即可新建一个 Web Fuzzer 并跳转到 Web Fuzzer 页面。

### 从 MITM 交互式劫持页面中新建
![](/img/products/yakit/Fuzz-other/4.png)

当我们在 MITM 模块中劫持到一个请求包时，右键选择**新建 WebFuzzer**按钮或者使用快捷键(ctrl+shift+R)，即可新建一个 Web Fuzzer 并跳转到 Web Fuzzer 页面。

## 分享与导入
在某些情况下，我们可能需要将当前的 Web Fuzzer 分享给别人，这时候最常见的做法是将整个数据包复制下来。但是这么做会有一些问题，比如说别人从聊天软件中复制下来的数据包可能会丢失 / 被修改了某些内容，这样就会导致数据包不正常。

一个更好的方法是使用 Web Fuzzer 的**分享/导入**按钮，这会将  Web FUzzer 暂存到**云端**，然后其他人可以通过复制分享密令来导入这个 Web Fuzzer。

### 分享
![](/img/products/yakit/Fuzz-other/5.png)

![](/img/products/yakit/Fuzz-other/6.png)

点击**分享/导入**按钮，再点击**分享当前 Web Fuzzer**，设置好选项后，即可点击**生成分享密令**按钮生成分享命令，最后点击**复制分享**按钮即可复制分享命令。

### 导入
![](/img/products/yakit/Fuzz-other/7.png)

![](/img/products/yakit/Fuzz-other/8.png)

点击**分享/导入**按钮，再点击**导入 Web Fuzzer**，输入别人分享给你的**分享密令**，即可导入别人分享给你的 Web Fuzzer。

## 历史
我们经常会有这样的需求：需要查看以前发送过的请求包，或者需要重新发送以前发送过的请求包。这时候我们就可以使用 Web Fuzzer 的**历史**功能。

### 从历史按钮查看具体历史
![](/img/products/yakit/Fuzz-other/9.png)

当我们在一个 Web Fuzzer 发送了多个请求包之后，我们可以通过点击**历史**按钮来查看当前 Web Fuzzer 的历史记录。鼠标悬浮在某次历史记录即可快速预览该历史发送的请求包，或者点击某次历史记录，可以将 Web Fuzzer 切换到这次历史记录中，查看这次历史记录的请求包与响应包。

### 通过箭头按钮快速切换历史
![](/img/products/yakit/Fuzz-other/10.png)

当我们在一个 Web Fuzzer 发送了多个请求包之后，我们可以通过点击左/右箭头来切换上一个/下一个历史记录。

## 构造请求
有时候，我们会有这样的需求：通过输入一个URL或者一个CURL命令，来快速构造一个 Web Fuzzer 。这时候我们就可以使用 Web Fuzzer 的**构造请求**功能。

### 通过URL构造 Web Fuzzer
![](/img/products/yakit/Fuzz-other/11.png)

![](/img/products/yakit/Fuzz-other/12.png)

点击**构造请求**按钮，选择**URL**选项，输入URL地址，再按下**构造请求**按钮，我们就可以快速构造一个GET请求的 Web Fuzzer 了。

### 通过CURL构造 Web Fuzzer
![](/img/products/yakit/Fuzz-other/13.png)

![](/img/products/yakit/Fuzz-other/14.png)

点击**构造请求**按钮，选择**CURL**选项，输入CURL命令，如`curl -X POST -H 'Content-Type: application/json' -d '{"key": "value"}' 'http://pie.dev/post'`，再按下**构造请求**按钮，我们就可以快速构造一个 Web Fuzzer 了。

## 复制请求
复制请求与构造请求的功能相反，它将一个 Web Fuzzer 复制为一个URL或者CURL命令。这样方便我们使用其他软件或工具来发送这个请求包。

### 复制为URL
![](/img/products/yakit/Fuzz-other/15.png)

在一个 Web Fuzzer 中右键，选择**复制为URL**按钮，即可将当前 Web Fuzzer 复制为一个URL。

### 复制为CURL
![](/img/products/yakit/Fuzz-other/16.png)

在一个 Web Fuzzer 中右键，选择**复制curl 命令**，即可将当前 Web Fuzzer 复制为 curl 命令。之后就可以使用 curl 工具来发送该请求包。

## 复制为 CSRF POC
![](/img/products/yakit/Fuzz-other/17.png)

在一个 Web Fuzzer 中右键，选择**复制为 CSRF POC**，即可将当前 Web Fuzzer 复制为 CSRF 的POC。这个POC是一个HTML网页，网页上存在一个按钮，当点击这个按钮时，会自动向该请求包的目标网站发送请求包。

## 在浏览器中打开
![](/img/products/yakit/Fuzz-other/18.png)

有时候，我们想要在浏览器中查看当前 Web Fuzzer 的响应包，这时候我们就可以使用**在浏览器中打开**功能。一共有两种方式：
1. 在响应包中右键，选择**在浏览器中打开**按钮，即可在浏览器中打开当前 Web Fuzzer 的响应包。
2. 点击响应包中的 chrome 浏览器图标，即可在chrome浏览器中打开当前 Web Fuzzer 的响应包。

## 跟随重定向
在 Web Fuzzer 中，我们跟随重定向有两种方式，第一种在[三、高级配置](/products/expert-mode/Web Fuzzer/additional-configuration.md)中已经介绍过了，配置了重定向配置后会自动进行重定向，这里我们介绍第二种方式，我们以下图为例：

![](/img/products/yakit/Fuzz-other/19.png)

我们访问了`https://baidu.com`，此时网站会将我们重定向到`https://www.baidu.com`。此时响应包中存在`Location`请求头，那么在 Web Fuzzer 上侧就会出现**跟随重定向**按钮。

我们点击**跟随重定向**按钮，即可跟随重定向到`https://www.baidu.com`。

## 编码与解码
我们经常会有对请求包中的数据进行编码与解码的需求，这时候我们就可以使用 Web Fuzzer 的**编码与解码**功能。

### 使用右键进行编码与解码
在 Web Fuzzer 中，我们选中了一段数据后，可以右键对其进行编码与解码，在右键中内置了一些场景的编码与解码选项：
![](/img/products/yakit/Fuzz-other/20.png)

当我们选择了其中一个选项后，会弹出一个窗口显示编码/解码后的效果，此时再点击替换内容，即可将原来的内容替换为编码/解码后的内容：
![](/img/products/yakit/Fuzz-other/21.png)

### * 使用悬浮框进行编码与解码
![](/img/products/yakit/Fuzz-other/22.png)

当你在Web Fuzzer中鼠标点选了某个位置时，会弹出一个悬浮框，在这个悬浮框中你选择对选择的内容进行编码和解码。

当我们选择了其中一个编码时，内容并不会被编码，而是使用了 fuzztag 来将其包裹，这会在 Web Fuzzer 真正发送请求前才将其编码。

当我们选择解码时，会进行智能解码的方式，即会自动判断编码类型，然后进行解码，之后选择一个你认为正确的内容，可以对选中的内容进行替换：
![](/img/products/yakit/Fuzz-other/23.png)

## HTTP请求包变形
这个功能可以对请求包进行一些变形，例如将GET请求变为POST请求，或者将POST请求变为GET请求等等。在 Web Fuzzer 中，我们可以通过右键选择**HTTP请求包变形**按钮来进行请求包变形：
![](/img/products/yakit/Fuzz-other/24.png)

## * 自定义HTTP请求包变形
这是yakit最近新增的功能，这个功能允许你编写一个codec插件，通过 Yak 代码来将请求包进行灵活变形。我们以一个简单的例子来说明这个功能，首先我们打开**插件 - 本地**，新建插件：
![](/img/products/yakit/Fuzz-other/25.png)

选择 Codec 模块，并打开**用于自定义HTTP数据包变形**：
![](/img/products/yakit/Fuzz-other/26.png)

接下来我们简单地编写插件，我们使用`poc.AppendHTTPPacketHeader()`函数来为原始的请求包增加一个AAA头，其值为BBB，并给这个插件取名，需要注意的是最后返回值使用`string()`函数来将 []byte 类型转换为 stirng 类型：
![](/img/products/yakit/Fuzz-other/27.png)

接下来我们保存插件，然后打开一个新的 Web Fuzzer，这时候会发现我们的自定义插件已经出现在**HTTP请求包变形**的选项中了：
![](/img/products/yakit/Fuzz-other/28.png)

点击这个选项，我们会发现请求包已经被修改，成功添加了请求头：
![](/img/products/yakit/Fuzz-other/29.png)

## 总结
至此， Web Fuzzer 系列教程告一段落，但是还未结束，后续还可能会有更多有关 Web Fuzzer 功能上线与改进，敬请期待。