---
sidebar_position: 20
---
# Websocket劫持

### 背景

随着Web应用的发展与动态网页的普及，越来越多的场景需要数据动态刷新功能。

在早期时，我们通常使用轮询的方式(即客户端每隔一段时间询问一次服务器)来实现，但是这种实现方式缺点很明显: 

大量请求实际上是无效的，这导致了大量带宽的浪费。这时候我们急需一个新的技术来解决这一痛点

Websocket应运而生: WebSocket是一种网络传输协议，可在单个TCP连接上进行全双工通信，位于OSI模型的应用层。

### 案例：websocket劫持

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

### Websocket劫持

1.启动MITM流量劫持，然后访问测试用的websocket服务或者是网站。

![](/img/products/yakit/Websocket-2.png)

2.在`HTTP History`里面点击`只看websocket`，就可以找到我们请求的websocket数据包。

![](/img/products/yakit/Websocket-3.png)

### Websocket  Fuzzer

1.如果要对websocket数据包进行fuzz操作，可以选择所需数据包，然后点击`fuzz`按钮,即可进行fuzz操作。

![](/img/products/yakit/Websocket-4.png)

2.点击`连接`，可以看到成功连接了服务端，并且在右侧可以看到实时的服务器请求与响应。

![](/img/products/yakit/Websocket-5.png)

3.接下来在下方发送数据框里面发送websocket请求，可以看到服务端成功接收数据。

![](/img/products/yakit/Websocket-6.png)