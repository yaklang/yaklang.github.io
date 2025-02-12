---
sidebar_position: 16
---

# [mitm] HTTPS中间人劫持(被动扫描入口)

熟悉 `xray` 的同学可能非常熟悉被动扫描的模式，当我们测试爬虫失效的情况下，经常需要手动设置代理来收集更多的请求（用于纯记录或扫描）。

本功能库包含的内容：

1. `fn mitm.Bridge(var_1: interface {}, var_2: string, vars: ...yaklib.mitmConfigOpt): error` 设置一个桥接模式的中间人
1. `fn mitm.Start(var_1: int, vars: ...yaklib.mitmConfigOpt): error` 启动一个代理模式中间人
1. `fn mitm.callback(var_1: func(isHttps bool, url string, request *http.Request, response *http.Response)): yaklib.mitmConfigOpt`【参数】：设置进入中间人的请求的入口（只劫持不修改）
1. `fn mitm.wscallback(var_1: func(data []byte, isRequest bool): var): yaklib.mitmConfigOpt`【参数】：设置进入中间人的websocket请求的入口（**通过返回值修改内容**）
1. `fn wsforcetext(var_1: bool): yaklib.mitmConfigOpt`【参数】：设置wscallback中的返回值内容是否强制为文本类型(后文会细讲)
1. `fn mitm.hijack(var_1: func(bool, *http.Request, *http.Response)): yaklib.mitmConfigOpt`【暂不开放：参数】：设置进入中间人的请求的入口（劫持）
1. `fn mitm.context(var_1: context.Context): yaklib.mitmConfigOpt`【参数】：控制中间人生命周期的上下文
1. `fn mitm.host(var_1: string): yaklib.mitmConfigOpt`【参数】：想要监听到本地的地址
1. `fn mitm.rootCA(var_1: []uint8, var_2: []uint8): yaklib.mitmConfigOpt`【参数】：设置自定义根证书（可以使用[`tls` 工具包](./lib_tls)）

:::danger HTTPS 劫持成功的条件是信任根证书

大概在 2020 年，收约在 xray 社区博客分享过一篇文章，主要讲中间人劫持的一些神奇操作：

> [HTTPS 劫持漫谈：https://blog.xray.cool/post/HTTPS-hijacking/](https://blog.xray.cool/post/HTTPS-hijacking/)

本文关于中间人攻击原理就不再赘述了，有兴趣的同学可以查看上面链接，自行学习一下

:::

## 代理模式中间人：`mitm.Start`

代理模式中间人是一个启用 HTTP 代理协议的服务器，同时通过动态签发证书来做中间人劫持（无法劫持 x509 认证和估定证书/CA的）

> 参考资料：https://datatracker.ietf.org/doc/html/rfc2616

### 如何使用 `mitm.Start` ?

```go
// 启动一个 mitm 劫持服务器
go mitm.Start(8084, mitm.callback(fn(isHttps, url, request, response){
    if isHttps {
        println("厉害了：我们劫持到一个 HTTPS！")    
    }
    
    http.show(request)
    http.showhead(response)
}))

// 等待一秒：等待 mitm 完全启动
sleep(1)

// 发送一个 Get 请求，设置代理：代理为我们刚启动的 http mitm 服务器
rsp, err := http.Get("https://www.baidu.com", http.proxy("http://127.0.0.1:8084"))
die(err)
```

在上面的例子中，我们通过 go 异步启动了一个 `mitm` 中间人服务器。对所有进入把 `127.0.0.1:8084` 作为 HTTP 代理的请求进行劫持，获取到信息。 

当我们执行上述脚本之后，结果如下：

```go
[WARN] 2021-06-17 17:59:54 +0800 [default:mitm.go:87] mitm proxy use the default cert and key
CONNECT www.baidu.com:443 HTTP/1.1
Host: www.baidu.com:443
User-Agent: Go-http-client/1.1


HTTP/1.1 200 OK
Content-Length: 0


厉害了：我们劫持到一个 HTTPS！
GET / HTTP/1.1
Host: www.baidu.com
Connection: close
Connection: close
User-Agent: Go-http-client/1.1


HTTP/1.1 200 OK
Connection: close
Content-Length: 227
Accept-Ranges: bytes
Cache-Control: no-cache
Content-Type: text/html
Date: Thu, 17 Jun 2021 09:59:56 GMT
P3p: CP=" OTI DSP COR IVA OUR IND COM "
P3p: CP=" OTI DSP COR IVA OUR IND COM "
Pragma: no-cache
Server: BWS/1.1
Set-Cookie: BD_NOT_HTTPS=1; path=/; Max-Age=300
Set-Cookie: BIDUPSID=CA8E0B14CB5BB63F465E53D6A93AB589; expires=Thu, 31-Dec-37 23:55:55 GMT; max-age=2147483647; path=/; domain=.baidu.com
Set-Cookie: PSTM=1623923996; expires=Thu, 31-Dec-37 23:55:55 GMT; max-age=2147483647; path=/; domain=.baidu.com
Set-Cookie: BAIDUID=CA8E0B14CB5BB63F2F9039F3FBF3EFDA:FG=1; max-age=31536000; expires=Fri, 17-Jun-22 09:59:56 GMT; domain=.baidu.com; path=/; version=1; comment=bd
Strict-Transport-Security: max-age=0
Traceid: 1623923996019334170611497956510311710358
X-Ua-Compatible: IE=Edge,chrome=1


```

我们观察上述的劫持结果，发现：

1. 回调函数中 `isHttps` 如果为 true，说明当前劫持到的请求是一个 HTTPS 请求
1. `http.show()` 对 request 和 response 仍然有效

## 中间人劫持桥接模式： `mitm.Bridge` 

在 HTTP 代理协议中，我们可以设置下游代理。设置了下游代理，这个代理就成为了 HTTP/HTTPS 的一个中转站，可以劫持到里面 HTTP 和 HTTPS 的内容，作为代理服务器。

我们设置了下游代理，对一开始的用户并无感觉，我们可以在代理中做很多事情：

1. 获取用户流量，进行作为扫描器的入口，进行分析构造扫描请求
1. 修改用户流量，可以进行 IoT 设备的劫持安装包等操作，成功 GetShell，或者设置全局的 302 跳转到特定网站。

### 如何使用 `mitm.Bridge`？

我们对上述案例进行改造：我们保留原来 HTTPS 劫持的中间人服务器，在请求发送到 HTTPS 中间人之前，就把请求劫持下来，并且不影响后续的代理请求。

```go
// 启动一个 mitm 劫持服务器
go mitm.Start(8084, mitm.callback(fn(isHttps, url, request, response){
    println("请求经过了代理服务器")
}))

go mitm.Bridge(8086, "http://127.0.0.1:8084", mitm.callback(fn(
    isHttps, url, request, response,
){
    if (!isHttps) {
        return
    }

    println("劫持到了 HTTPS！")
    println("请求经过了桥接模式的中间人！你已经被黑了，Hacked by yaklang")
    http.show(request)
    http.showhead(response)
}))

// 等待一秒：等待 mitm 代理服务器和桥接器完全启动
sleep(1)

// 发送一个 Get 请求，设置代理：代理为我们刚启动的 http mitm 服务器
rsp, err := http.Get("https://www.baidu.com", http.proxy("http://127.0.0.1:8086"))
die(err)
```

当然，在我们完成上述代码执行的时候，我们如愿以偿得到了如下输出

```go
[WARN] 2021-06-17 20:31:17 +0800 [default:mitm.go:87] mitm proxy use the default cert and key
[WARN] 2021-06-17 20:31:17 +0800 [default:mitm.go:87] mitm proxy use the default cert and key
请求经过了代理服务器
请求经过了代理服务器
劫持到了 HTTPS！
请求经过了桥接模式的中间人！你已经被黑了，Hacked by yaklang
GET / HTTP/1.1
Host: www.baidu.com
Connection: close
Connection: close
User-Agent: Go-http-client/1.1


HTTP/1.1 200 OK
Connection: close
Content-Length: 227
Accept-Ranges: bytes
Cache-Control: no-cache
Content-Type: text/html
Date: Thu, 17 Jun 2021 12:31:19 GMT
P3p: CP=" OTI DSP COR IVA OUR IND COM "
P3p: CP=" OTI DSP COR IVA OUR IND COM "
Pragma: no-cache
Server: BWS/1.1
Set-Cookie: BD_NOT_HTTPS=1; path=/; Max-Age=300
Set-Cookie: BIDUPSID=0C95EED3D6AAB35100B443082722A2C9; expires=Thu, 31-Dec-37 23:55:55 GMT; max-age=2147483647; path=/; domain=.baidu.com
Set-Cookie: PSTM=1623933079; expires=Thu, 31-Dec-37 23:55:55 GMT; max-age=2147483647; path=/; domain=.baidu.com
Set-Cookie: BAIDUID=0C95EED3D6AAB3511E2D3CDCA705D285:FG=1; max-age=31536000; expires=Fri, 17-Jun-22 12:31:19 GMT; domain=.baidu.com; path=/; version=1; comment=bd
Strict-Transport-Security: max-age=0
Traceid: 1623933079019163777015697755628909614426
X-Ua-Compatible: IE=Edge,chrome=1


```

令人高兴的是，我们看到了 `劫持到了 HTTPS！`这句话，这句话意味着我们劫持成功了。

 

## websocket的中间人劫持: `mitm.wscallback`

随着时代的发展，越来越多的网站开始使用websocket技术，为此，yak也推出了对websocket劫持的支持。我们只需要简单地添加一个`mitm.wscallback`参数即可。

### 如何使用 `mitm.wscallback`？

我们使用一个新的例子来测试，首先编写一个yak脚本来启动一个能劫持websocket的server:

```go
wg = sync.NewWaitGroup()
wg.Add(1)
go fn{
    defer wg.Done()
    mitm.Start(8084, mitm.wscallback(
    fn(data, isRequest){
        if isRequest {
            data = "Hijack request"
        } else {
            data = "Hijack Response"
        }
        return data
    }))
}
wg.Wait()
```

这里有2点需要注意:

1. wscallback接受一个新的函数作为参数，该函数有两个参数:`data`和`isRequests`，其中`data`是[]byte类型(代表劫持到的websocket 请求/响应原始内容)，而`isRequest`则是bool类型(代表劫持到的是请求还是响应，true代表劫持的是请求，false代表劫持的是响应)
2. 函数返回值将会被用于修改请求/响应内容，如果无需修改也需要将原`data`返回。(**无论如何都要return**)



接下来我们使用go来启动一个websocket的测试服务器，这里需要安装依赖:**"github.com/gorilla/websocket"**:

```go
package main

import (
	"fmt"
	"net/http"
	"os"
	"time"

	"github.com/gorilla/websocket"
)

func main() {
	var upgrader = websocket.Upgrader{}

	f, err := os.CreateTemp("", "test-*.html")
	if err != nil {
		panic(err)
	}
	f.Write([]byte(`<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8"/>
    <title>Sample of websocket with golang</title>
    <script src="http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>
    <script>
        $(function() {
            var ws = new WebSocket('ws://' + window.location.host + '/ws');
            ws.onmessage = function(e) {
                $('<li>').text(event.data).appendTo($ul);
            ws.send('{"message":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"}');
            };
            var $ul = $('#msg-list');
        });
    </script>
</head>
<body>
<ul id="msg-list"></ul>
</body>
</html>`))
	index := http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, f.Name())
	})
	http.Handle("/", index)
	http.Handle("/index.html", index)
	http.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request) {
		// msg := &RecvMessage{}

		ws, err := upgrader.Upgrade(w, r, nil)
		if err != nil {
			panic(err)
			return
		}
		defer ws.Close()

		go func() {
			for {
				_, msg, err := ws.ReadMessage()
				if err != nil {
					panic(err)
					return
				}
				fmt.Printf("server recv from client: %s\n", msg)
			}
		}()

		for {
			time.Sleep(time.Second)
			ws.WriteJSON(map[string]interface{}{
				"message": fmt.Sprintf("Golang Websocket Message: %v", time.Now()),
			})
		}
	})

	err = http.ListenAndServe(":8884", nil)
	if err != nil {
		panic(err)
	}
}
```



现在，我们访问http://127.0.0.1:8884，会发现屏幕会每秒输出一条json内容，例如:

```
{"message":"Golang Websocket Message: 2022-09-05 15:17:22.497926 +0800 CST m=+7.689153001"}
```

同时，在终端中会每秒输出一条以下内容:
```
server recv from client: {"message":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"}
```



这时候我们挂上代理http://127.0.0.1:8084/再进行访问，如果顺利的话，你会发现上述的内容都会发生改变，屏幕输出的内容变为:

```
Hijack Response
```

同时，终端输出的内容变为:

```
server recv from client: Hijack request
```

这说明我们成功对websocket的请求与响应进行了劫持!



### 如何使用 `mitm.wsforcetext`？

`mitm.wsforcetext`的使用非常简单，我们只需要对上述的例子进行稍微的修改即可:

```go
wg = sync.NewWaitGroup()
wg.Add(1)
go fn{
    defer wg.Done()
    mitm.Start(8084, mitm.wsforcetext(true),mitm.wscallback(
    fn(data, isRequest){
        if isRequest {
            data = "Hijack request"
        } else {
            data = "Hijack Response"
        }
        return data
    }))
}
wg.Wait()
```

在说明如何使用`mitm.wsforcetext`之后，我们来说说为什么需要这个函数，这涉及到了websocket协议。

websocket协议头中有4 bit(opcode)来决定了操作代码，Opcode的值决定了应该如何解析后续的data。如果操作代码是不认识的，那么接收端应该断开连接。可选的操作代码如下：

- %x0：表示一个延续帧。当Opcode为0时，表示本次数据传输采用了数据分片，当前收到的数据帧为其中一个数据分片。
- %x1：表示这是一个文本帧（frame）
- %x2：表示这是一个二进制帧（frame）
- %x3-7：保留的操作代码，用于后续定义的非控制帧。
- %x8：表示连接断开。
- %x9：表示这是一个ping操作。
- %xA：表示这是一个pong操作。
- %xB-F：保留的操作代码，用于后续定义的控制帧。

在默认情况下，yak启动的mitm server是不会对websocket的opcode进行修改的，而在某些情况下，我们需要强制让修改后的内容变为文本帧(%x1)，这也是为什么会有`mitm.wsforcetext`函数。