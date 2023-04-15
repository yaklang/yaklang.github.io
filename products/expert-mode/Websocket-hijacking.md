---
sidebar_position: 20
---
# Websocket劫持

### 背景

随着Web应用的发展与动态网页的普及，越来越多的场景需要数据动态刷新功能。

在早期时，我们通常使用轮询的方式(即客户端每隔一段时间询问一次服务器)来实现，但是这种实现方式缺点很明显: 

大量请求实际上是无效的，这导致了大量带宽的浪费。这时候我们急需一个新的技术来解决这一痛点，Websocket应运而生:

WebSocket协议是一种基于TCP协议之上的全双工通信协议，它允许浏览器和服务器之间建立一条持久连接，可以实现客户端和服务端之间的实时通信。相比于HTTP协议，WebSocket协议具有更低的延迟和更高的实时性。

WebSocket协议是通过HTTP协议进行握手建立连接的，建立连接之后，客户端和服务端之间可以直接进行数据传输，不需要再次发送HTTP请求和响应。WebSocket协议的消息格式为帧（frame），每个帧可以包含一个或多个数据段，可以进行二进制或文本格式的数据传输。

WebSocket协议支持服务器主动向客户端发送消息，也支持客户端向服务器发送消息。由于WebSocket协议具有双向通信的特性，因此可以用于实现聊天室、实时游戏、金融数据等需要实时通信的应用程序。

WebSocket协议通常使用在Web应用程序中，可以通过JavaScript代码与服务端进行通信。除了浏览器之外，WebSocket协议也可以用于移动应用程序、桌面应用程序等场景中，以实现实时通信的功能。

### websocket劫持

WebSocket劫持是一种攻击技术，攻击者可以利用这种技术来窃取WebSocket通信数据或者篡改通信内容。WebSocket劫持的原理是攻击者通过特殊的手段将自己伪装成正常的WebSocket服务器，并在通信过程中截取、篡改或者丢弃数据，从而实现对通信内容的控制和窃取。

实现 WebSocket 协议劫持的难点主要包括以下几个方面：

1. WebSocket 协议的特殊性：WebSocket 协议相对于传统的 HTTP 协议而言，它是一种全双工的通信协议，允许客户端和服务器之间进行实时的双向通信。因此，攻击者需要对 WebSocket 协议的特殊性有深入的了解，才能够有效地实现 WebSocket 协议劫持。

2. WebSocket 连接的建立：在 WebSocket 连接建立时，需要进行一系列的握手操作，包括发送 HTTP 请求、接收 HTTP 响应、发送 WebSocket 握手请求等。攻击者需要深入了解这些握手过程的细节，并能够模拟合法的握手请求，才能够成功地实现 WebSocket 协议劫持。

3. WebSocket 数据的处理：WebSocket 协议允许传输任意格式的数据，包括文本、二进制、JSON 等。攻击者需要能够准确地识别 WebSocket 数据的格式，并且能够对这些数据进行解析和处理，才能够实现 WebSocket 协议劫持。

4. WebSocket 连接的维持：WebSocket 连接通常会持续一段时间，攻击者需要能够保持对 WebSocket 连接的控制，并且能够防止被服务器端主动关闭。攻击者需要具备一定的网络技术和攻击技术，才能够维持对 WebSocket 连接的控制。

下面我们通过一个案例来给大家讲解Yakit MITM模块关于websocket劫持的使用。

### 案例：websocket劫持

首先，我们在本地搭建一个websocket通信的环境：

本地python起一个http.server放置test.html,并且启动test.py

![](/img/products/yakit/Websocket-1.png) 

代码如下：

**Websocket 服务端**

```python
#!/usr/bin/python3
# 主要功能：创建1个基本的websocket server, 符合asyncio 开发要求
import asyncio
import websockets
from datetime import datetime


async def handler(websocket,path):
data = await websocket.recv()
reply = f"Data received as \"{data}\".  time: {datetime.now()}"
print(reply)
await websocket.send(reply)
print("Send reply")


async def main():
async with websockets.serve(handler, "127.0.0.1", 9999):
await asyncio.Future()  # run forever

if __name__ == "__main__":
asyncio.run(main())
```
**Websocket 客户端**

```html
<!DOCTYPE HTML>
<html>

<head>
    <meta charset="utf-8">
    <title>websocket demo</title>
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <link rel="stylesheet" href="https://cdn.staticfile.org/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
        <script src="https://cdn.staticfile.org/jquery/3.2.1/jquery.min.js">                </script>
        <script src="https://cdn.staticfile.org/popper.js/1.15.0/umd/popper.min.js"></script>
          <script src="https://cdn.staticfile.org/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>

    <script type="text/javascript">
        function WebSocketTest() {
            text = document.getElementById("div_text");
            if ("WebSocket" in window) {
                // 打开一个 web socket
                var ws = new WebSocket("ws://127.0.0.1:9999/");

                ws.onopen = function () {
                    // Web Socket 已连接上，使用 send() 方法发送数据
                    ws.send("Javscript发送的数据");
                    text.innerHTML = "数据发送中...";
                    alert("数据发送中...");
                };

                ws.onmessage = function (evt) {
                    var received_msg = evt.data;
                    text.innerHTML = "收到的数据：" + received_msg;
                    alert("数据已接收...");
                };

                ws.onclose = function () {
                    // 关闭 websocket
                    text.innerHTML = "连接已关闭...";
                    alert("连接已关闭...");
                };
            }

            else {
                // 浏览器不支持 WebSocket
                alert("您的浏览器不支持 WebSocket!");
            }
        }
    </script>

</head>

<body>

    <div class="col-md-6 m-5 p-2" id="div_ws">
        <a class="btn btn-primary" href="javascript:WebSocketTest()">连接WebSocket</a>
    </div>
    <div class="col-md-6 border border-primary mx-5 p-2 " id="div_text" style="margin:20px;height:100px;">
        display communicate text
    </div>

</body>

</html>
```

也可以使用在线wesocket测试环境进行测试：[Websocket在线测试](http://www.websocket-test.com/)

### Websocket劫持

启动MITM流量劫持，然后访问测试用的websocket服务或者是网站。在`HTTP History`里面协议类型选择`websocket`，就可以找到我们请求的websocket数据包。

![](/img/products/yakit/Websocket-2.png)

### Websocket  Fuzzer

1.如果要对websocket数据包进行fuzz操作，可以选择所需数据包，然后点击`fuzz`按钮,即可进行fuzz操作。

![](/img/products/yakit/Websocket-3.png)

2.点击`连接`，可以看到成功连接了服务端，并且在右侧可以看到实时的服务器请求与响应。在下方发送数据框里面发送websocket请求，可以看到服务端成功接收数据。

![](/img/products/yakit/Websocket-4.png)

