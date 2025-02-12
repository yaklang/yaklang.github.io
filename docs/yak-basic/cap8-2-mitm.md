# 中间人攻击: MITM

## 8.3.1 基础概念：MITM

中间人攻击（英语：**M**an-**i**n-**t**he-**m**iddle attack，缩写：**MITM**）又称为中间人劫持技术，是一种会话劫持攻击。作为中间人的攻击者伪装为通信双方的终端，并以此劫持到通信双方的通信信息以及通信过程，从而达到窃取信息或冒充等目的。中间人攻击通常是因为通信双方缺乏认证而造成的。实际上，中间人攻击是一个统称，其具体的攻击方式有多种，例如Wi-Fi仿冒、邮件劫持、DNS欺骗、SSL劫持等，在后文，我们重点讨论HTTP(s)协议的中间人攻击。

### 攻击示例

假设有三个人：小明（A）、小红（B）和攻击者（C）。小明和小红想要通过互联网进行通信，通常他们会使用加密技术。在这个例子中，我们假设他们使用一种简单的加密方法：对称加密。在对称加密中，通信双方需要使用相同的密钥（Key）来加密和解密信息。

![img](/yak-basic/cap8-2-1.png)

在上述示例中，攻击者通过执行中间人攻击，成功获取了通信双方的信息内容。此外，攻击者还能随意伪造信息或终止通信过程。

## 8.3.2 MITM基础应用

### 流量嗅探

在 Yak 语言中，实施一次中间人攻击是相对容易的，只需利用标准库：`mitm`。通过调用标准库函数：`mitm.Start`即可在指定端口上启动一个中间人代理。此外，我们还需结合回调函数：`mitm.callback` 来处理捕获到的 HTTP(s) 流量。以下是一个简单的示例以帮助读者更好地理解：

```Go
// 监听所有网卡的8082端口
err = mitm.Start(
    8082, 
    // 传入mitm.callback选项函数，并传入一个自定义函数作为回调
    mitm.callback(func(isHttps, url, req, rsp) {
        // 当有请求完成收到响应后，会就执行本函数
        // 忽略CONNECT方法的请求
        if req.Method == "CONNECT" {
            return
        }
        
        printf("[%5s] %v\n", req.Method, url) // 输出请求方法与URL        
    }), 
    mitm.useDefaultCA(true), // 使用默认CA
)
die(err)
```

上述代码示例相对简单明了。我们在所有网卡的 8082 端口上进行监听，当捕获到 HTTP(s) 流量时，会触发回调函数。在函数内部，我们过滤掉请求方法为 CONNECT 的请求，然后输出请求的方法和 URL。实际上，在回调函数中可以获取到完整的请求和响应，从而实现更多功能，例如将完整的 HTTP(s) 流量记录到文件或数据库等。

### 请求与响应劫持

在前一部分中，我们成功地实现了中间人攻击的流量嗅探功能。实际上， Yak 语言也能轻松地实现中间人攻击中对HTTP(s)的请求和响应的拦截。为了实现这一目标，我们需要使用两个新的标准库函数：`mitm.hijackHTTPRequest`和`mitm.hijackHTTPResponse`。以下是一个简单的示例，以便于读者更好地理解：

```Go
// 监听所有网卡的8082端口
err = mitm.Start(
    8082, 
    mitm.hijackHTTPRequest(func(isHttps, u, req, modified, dropped) {
        if poc.GetHTTPPacketQueryParam(req, "dropped") != "" { 
            dropped() // 如果请求参数中包含dropped则将此请求丢弃
        }
    }),
    mitm.hijackHTTPResponse(func(isHttps, u, rsp, modified, dropped) {
        // 调用poc.ReplaceBody将响应体修改
        rsp = poc.ReplaceBody(rsp, "hijacked by yak", false)
        modified(rsp)// 将响应转发

    }), 
    mitm.useDefaultCA(true), // 使用默认CA
)
die(err)
```

在运行上述代码之后，我们可以通过将浏览器代理设置为127.0.0.1:8082并使用浏览器访问任意HTTP网站来观察效果，如果不出意外的话，读者会发现网站的响应都被修改为`"hijacked by yak"`。如果我们在请求参数中添加名为`"dropped"`的参数，那么我们将收到来自中间人服务器的空白响应。

### HTTPS与CA证书

*HTTPS是HTTP的安全版本，它在客户端（如浏览器）与服务器之间使用**SSL**/**TLS**协议建立加密通信，以保护数据的隐私和完整性，防止第三方窃取或篡改数据。*

根据前文，我们了解到HTTPS是一种防护中间人攻击的方法。然而，我们仍需探讨是否存在某种方式能够嗅探或劫持HTTPS流量。为此，我们必须深入了解HTTPS的具体实现，该实现依赖于 CA 证书。

 CA 证书是一种由证书颁发机构（CA）签发的数字证书。 CA 是一个默认信任的第三方组织，负责验证网站的身份并向其颁发数字证书。数字证书中包含了网站的公钥、证书颁发者、有效期等信息，这些信息用于确认网站的身份并建立加密通信。

一个简要的通信过程如下：

![img](/yak-basic/cap8-2-2.png)

根据上述通信过程分析，我们得出结论： CA 证书在整个通信过程中具有重要作用。若客户端信任了一个自签名的CA证书并将其导入客户端的受信任证书颁发机构列表，这将导致客户端信任由该 CA 颁发的所有证书。在这种情况下，中间人攻击便有可能成功实施。

在Yak语言中，在使用 MITM 功能之前，Yak语言会自动生成一份默认的CA证书，分别为`yak-mitm-ca.crt`和`yak-mitm-ca.key`，并将其存储在安装目录（默认情况下是家目录）下的`yakit-projects`文件夹中。完成信任 CA 证书的步骤后，用户便可利用Yak编程语言的MITM功能来嗅探或劫持HTTPS流量。

若要在MITM标准库中配置MITM服务器以使用默认的 CA 证书，只需调用函数：`mitm.useDefaultCA(true)`。需要注意的是，此选项默认已启用。若需使用其他 CA 证书，请参考以下示例：

```Go
err = mitm.Start(
    8082, 
    ..., // 省略
    mitm.useDefaultCA(false), // 不使用默认CA
    mitm.rootCA("path/to/mitm.crt", "path/to/mitm.key") // 使用自签名的CA证书
)
die(err)
```

