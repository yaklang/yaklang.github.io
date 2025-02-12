# 8.1 专家级 HTTP 协议库：`poc`

在这里，我们将向您介绍如何使用我们的专家级HTTP库，这个库提供了一些传统HTTP库所没有的功能，并且对安全场景做了特殊优化，这些优化将帮助您理解和掌握在安全领域中非常重要的HTTP数据包处理技术：

1. 直接使用原始 HTTP Request 报文发送数据包
2. 构造畸形数据包
3. 修复不符合 HTTP 协议的 HTTP Request 报文，让他能被合理接受
4. 手动控制 chunk 等过程
5. 自动处理 HTTP Response 的响应信息等

在开始之前，我们需要改变我们的视角：从单纯遵循HTTP协议的角度，转变为深入理解和操作HTTP数据包的角度。这种视角的转变，特别在安全领域中显得至关重要。

- **TCP协议****与HTTP**

首先，我们需要了解HTTP协议是建立在TCP（传输控制协议）之上的。这是因为HTTP需要一个可靠的传输服务来保证数据的完整性和顺序性。当我们发送一个HTTP请求时，实际上是在客户端和服务器之间通过TCP协议建立了一个连接。了解这一点，有助于我们更好地理解数据如何在网络中传输。

在本教程中，您将学习到以下内容：

1. 发送原始HTTP请求报文：学习如何直接发送未经处理的HTTP请求数据包。
2. 动态参数调整：掌握如何动态改变数据包中的参数。
3. 处理TLS(HTTPS)连接：了解如何确定是否使用TLS进行加密通信。
4. Host识别与指定：
   1. 自动识别请求目标的Host。
   2. 手动指定Host，这在进行Host碰撞测试时很有用。
5. 请求与响应数据获取：学习如何获取并处理更多的请求与响应数据。
6. 数据包修复与处理：
   1. 如何修复不符合规范的HTTPRequest与HTTPResponse。
   2. 修改数据包的实用工具——packet helper。
   3. 构造请求包BuildRequest。
   4. 分割数据包中的Header和Body部分。

通过本教程，您将能够掌握Yak语言中高级HTTP库的强大功能，并应用于安全领域中的各种场景。让我们开始吧！

## 8.1.1 基本概念：HTTP报文

在深入探讨如何使用专家级HTTP库之前，我们首先需要理解HTTP报文的基本构成。HTTP报文是客户端和服务器之间通信的基础，它遵循特定的格式来交换信息。一个HTTP报文可以分为两种类型：请求报文和响应报文。在本章节中，我们将专注于这些报文的结构，以及如何通过Yak语言中的高级HTTP库来操控和分析这些报文。

### HTTP请求报文

HTTP请求报文由三个主要部分组成，我们在后文有时会使用“HTTP Request”来代替“HTTP请求”：

1. **请求行（Request Line）**：这是请求报文的第一行，包含了方法（如GET、POST等）、请求的资源路径（如`/index.html`）、请求的简单参数（如`?abc=123`）和HTTP版本（如HTTP/1.1）。
2. **请求头（Header Fields）**：紧随请求行之后，请求头包含了一系列的键值对，它们定义了关于请求的元数据，如`Host`、`User-Agent`、`Accept`等。
3. **请求体（Message Body）**：不是所有的请求都有请求体。请求体传输的数据一般会携带一些重要信息，比如提交的表单内容或者提交一些查询数据；

我们以一个案例来了解具体的内容：

```JSON
GET / HTTP/1.1
Host: example.com
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36
```

**解释**:

- `GET` 是请求使用的方法，`/` 是请求的资源路径（在这个例子中是根目录），`HTTP/1.1` 是HTTP协议的版本。
- `Host` 头部指明了请求的目标主机。
- `User-Agent` 头部告诉服务器有关请求者的信息，包括浏览器类型和操作系统。

### HTTP响应报文

HTTP响应报文的结构与请求报文类似，但有其特定的组成部分，我们在后文有时会使用“HTTP Response”来代替“HTTP响应”：

1. **状态行（Status Line）**：响应报文的第一行，包含了HTTP版本、状态码（如200、404等）和状态消息（如OK、Not Found等）。
2. **响应头（Header Fields）**：与请求头类似，响应头提供了响应的元数据，如`Content-Type`、`Content-Length`、`Server`等。
3. **响应体（Message Body）**：包含了服务器返回的实际数据，比如网页的HTML代码。

服务器收到上述请求后，会返回一个响应报文。这个响应报文可能看起来像这样：

```JSON
HTTP/1.1 200 OK
Date: Wed, 23 Nov 2023 17:15:00 GMT
Server: Apache/2.4.1 (Unix)
Last-Modified: Mon, 12 Oct 2023 13:15:00 GMT
Content-Type: text/html; charset=UTF-8
Content-Length: 438
Connection: close

<!DOCTYPE html>
<html>
<head>
    <title>An Example Page</title>
</head>
<body>
    <p>Hello, World!</p>
</body>
</html>
```

**解释**:

- `HTTP/1.1 200 OK` 是状态行，表明HTTP协议版本，状态码和状态消息。`200` 表示请求成功。
- `Date`, `Server`, `Last-Modified` 是响应头部，提供了响应的生成时间、服务器类型、最后修改时间等信息。
- `Content-Type` 和 `Content-Length` 头部描述了响应体的媒体类型和长度。
- `Connection: close` 指示服务器关闭TCP连接。
- 空行后面的部分是响应体，包含了实际的HTML内容。

### 总结：HTTP报文的深入理解

尽管HTTP请求和响应的首行不同，但两者都遵循相同的基本结构，即头部（Header）和数据（Body）。我们可以对上述数据包进行一些总结，无论是请求还是响应，HTTP报文都遵循几乎相同的解析规则：

#### **首行**

首行是HTTP报文的开始，它为客户端和服务器之间的交互提供了上下文。在请求报文中，首行指定了要执行的操作（请求方法）、资源的位置（URI）和HTTP协议版本。在响应报文中，首行提供了状态码和描述性消息，以告知客户端请求的结果。

#### **头部（Headers）**

头部是由多个字段组成的，每个字段都有一个特定的用途，比如指示内容类型、内容长度、缓存策略等。头部字段是按行分割的，每行用一个冒号（:）分隔键和值，并以CRLF结束。这些字段统称为MIME Header，因为它们遵循在MIME标准中定义的格式。

#### **空行**

空行是头部和数据部分之间的分隔符，由两个连续的CRLF表示。这个空行是必须的，即使数据部分为空，也需要这个空行来告知解析器头部已经结束。

#### **数据（Body）**

数据部分包含了实际传输的内容。在请求报文中，这可能是表单数据或文件上传的内容；而在响应报文中，这通常是请求的网页、图片或其他资源。数据部分的长度可以通过头部中的`Content-Length`字段预先指定，或者通过分块传输的方式动态发送。

## 8.1.2 HTTP原始报文通信

在本章节，我们将深入探索如何使用HTTP原始报文与网站进行交互。HTTP原始报文是构成HTTP请求和响应的基础文本信息。了解和使用这些原始报文对于理解Web通信的底层细节至关重要。本节将通过实例教您如何手动构建HTTP请求报文，并使用这些报文从网站获取信息。在后续的内容中，我们将会学习Yak语言中的专家级HTTP协议库：`poc`，在用户的编程中，几乎所有的HTTP数据报文处理的方法都可以在这个模块中找到，这是一个非常强悍的模块。

### 原始报文发送请求

使用 `poc.HTTP` 可以直接做到以一个数据包发送报文，这个函数的定义为：`poc.HTTP(packet, opts...)`返回值为：`(responseBytes, requestBytes, err)`。我们可以通过下面这个简单的案例理解这个函数：

```JSON
rsp, req = poc.HTTP(`GET / HTTP/1.1
Host: www.baidu.com

`)~

/*
rsp:
([]uint8) (len=10511 cap=13076) {
 00000000  48 54 54 50 2f 31 2e 31  20 32 30 30 20 4f 4b 0d  |HTTP/1.1 200 OK.|
 00000010  0a 41 63 63 65 70 74 2d  52 61 6e 67 65 73 3a 20  |.Accept-Ranges: |
 00000020  62 79 74 65 73 0d 0a 43  61 63 68 65 2d 43 6f 6e  |bytes..Cache-Con|
...
...
 000028f0  20 42 61 69 64 75 20 22  3c 2f 73 63 72 69 70 74  | Baidu "</script|
 00002900  3e 3c 2f 62 6f 64 79 3e  3c 2f 68 74 6d 6c 3e     |></body></html>|
}

req:
([]uint8) (len=39 cap=48) {
 00000000  47 45 54 20 2f 20 48 54  54 50 2f 31 2e 31 0d 0a  |GET / HTTP/1.1..|
 00000010  48 6f 73 74 3a 20 77 77  77 2e 62 61 69 64 75 2e  |Host: www.baidu.|
 00000020  63 6f 6d 0d 0a 0d 0a                              |com....|
}
*/
```

可以很直观的了解到，使用这种方式我们发送出去的数据包非常容易被用户控制。在任何地方加入任何数据都会被可能保留原义发送。但是我们经常会遇到不符合HTTP协议规范的情况，在使用`poc.HTTP`的过程中，Yak会自动检测数据包中不符合规范的部分，并且尽力修复数据包避免服务器处理异常。

修复协议损坏的数据包是一个复杂的过程，我们需要考虑的内容至少包括如下：

1. 数据包的 CRLF 是否被正确设置？
2. 数据包的`Transfer-Encoding: chunked`是否被合理设置？
3. 针对Content-Type为`multipart/form-data`的数据包，它的`boundary`参数是否和数据包实际的`boundary`是否相同？
4. `Content-Length`和`Transfer-Encoding`处理的先后顺序如何？
5. 如果用户要发送畸形数据包应该如何处理？畸形请求通常会造成畸形响应，我们应该如何处理这种情况

#### 实战案例：发送原始报文并获取响应

```JSON
rsp, req = poc.HTTP(`GET / HTTP/1.1
Host: www.example.com

`)~

if rsp.Contains("<title>Example Domain</title>") {
    dump("www.example.com in Response Bytes!")
}

// (string) (len=34) "www.example.com in Response Bytes!"
```

它执行了一个HTTP GET请求，并检查响应中是否包含特定的字符串：

1. `poc.HTTP` 是一个函数调用，它发送一个HTTP请求。这个请求是一个GET请求，请求行为 `GET / HTTP/1.1`，表示获取根目录(`/`)。请求头包含 `Host: ``www.example.com`，这指定了请求的目标主机。
2. 这个HTTP请求的结果被赋值给两个变量：`rsp` 和 `req`。这里 `rsp` 可能代表响应对象，而 `req` 可能代表请求对象。
3. 接下来的 `if` 语句检查响应对象 (`rsp`) 是否包含特定的HTML标签 `<title>Example Domain</title>`。
4. 如果响应中包含这个标题标签，`dump` 函数将被调用，并打印出 `"``www.example.com`` in Response Bytes!"`。
5. 最后一行注释 `(string) (len=34) "``www.example.com`` in Response Bytes!"` 是 `dump` 函数输出的结果，表示输出的是一个字符串，长度为34个字符，内容是 `"``www.example.com`` in Response Bytes!"`。

### 参数使用：发送配置后的原始报文

`poc`这个库在设计之初就考虑了大量的“参数”使用的问题，最简单的情况就是，我们在原始数据包中并不包含`HTTPS`的协议描述，但是在URL中会有描述，那么我们如何声明一个报文使用的是HTTPS通信呢？

在Yak语言`poc`库核心API使用中，参数在`poc`中一般来说是小写的，让我们回顾一下`poc.HTTP`的定义：`poc.HTTP(packet, opts...)`第一个参数为数据包的内容，后续是一个可变参数，我们，下面我们举一些更具体的案例来介绍一些常见参数：

#### HTTPS 参数使用

```JSON
packet = `GET / HTTP/1.1
Host: www.example.com
Content-Length: 3

abc`
rsp, req = poc.HTTP(packet, poc.https(true))~
```

我们观察上面的例子，除了packet参数之外，后续可以追加各种一系列的配置参数，这些参数用于修改或增强请求的行为。

- `packet`: 这是一个多行字符串，代表要发送的HTTP请求报文。在这个例子中，它表示一个简单的HTTP GET请求，请求的资源是根路径 `/`，使用的是HTTP/1.1协议。请求包含两个头部字段：`Host` 和 `Content-Length`，以及请求体 `abc`。
- `poc.HTTP`: 这是 `poc` 库中的一个函数，它负责处理传入的原始HTTP报文字符串，并发送该HTTP请求。返回的可能是一个包含响应和请求详细信息的列表。
- `poc.https(true)`: 这个调用是一个配置函数，它接收一个布尔值参数。在这个上下文中，`true` 表示要使用HTTPS协议进行通信。这意味着，尽管原始报文中没有指定使用HTTPS，`poc` 库应该将该请求作为一个HTTPS请求处理。

#### 为原始报文请求新增代理

类似地Yak语言的`poc`库还提供了“代理”参数，用户可以参考这段代码案例来为当前请求设置参数：

```SQL
packet = `GET / HTTP/1.1
Host: www.example.com
Content-Length: 3

abc`
rsp, req = poc.HTTP(packet, poc.https(true), poc.proxy("http://127.0.0.1:8083"))~
```

这段代码中`poc.proxy(...)`中填入要设置的代理即可。实际在使用的过程中，除了HTTP代理协议之外，还可使用其他协议：包含：`socks5`，`https`，`socks4`协议。

##### 带认证的代理

如果你需要通过代理并且代理服务器要求认证信息，你通常需要提供用户名和密码。在很多HTTP客户端库中，代理认证信息是通过代理服务器的URL来提供的，格式通常是：

```Plaintext
http://username:password@proxyserver:port
```

假定我们启动一个代理，它的认证信息设置成用户名：`admin111`，密码：`123456`，那么我们将上述代码的代理URL替换之后，代码将会变成：

```SQL
proxy = "http://%v:%v@127.0.0.1:8083" % ["admin111", "123456"]
rsp, req = poc.HTTP(packet, poc.https(true), poc.proxy(proxy))~
```

在这个例子中，`username`和`password`变量分别存储代理认证所需的用户名和密码。然后，这些信息被嵌入到代理服务器的URL中，创建了一个新的`proxyUrl`变量。最后，这个`proxyUrl`被传递给`poc.proxy`函数。

##### 带特殊符号的代理认证

在使用`admin111:123456`作为用户名和密码的时候，编程者很容易通过字符串拼接得到上述结果，但是实际上如果密码或用户名中包含特殊字符，拼接一般会造成比较大的误解，例如：

1. 用户名为：`admin111//;@`
2. 密码为：`123456`

这个时候如果我们使用原来的方式，将会变成：`http://admin//;@@:123456@127.0.0.1:8083`，这个URL会变的非常奇怪，用户名中的特殊符号干扰了代理URL的识别。这种情况下，我们需要使用`codec`中的URL编码函数把用户名进行编码：

```SQL
proxy = "http://%v:%v@127.0.0.1:8083" % [codec.EscapeQueryUrl("admin111//;@"), "123456"]
rsp, req = poc.HTTP(packet, poc.https(true), poc.proxy(proxy))~


// proxy: http://admin111%2F%2F%3B%40:123456@127.0.0.1:8083
```

#### 重定向配置

HTTP重定向是HTTP协议中的一种机制，它允许Web服务器告诉客户端（例如Web浏览器）去访问另一个URL。换句话说，它是一种服务器端的指令，用来将用户从一个网页自动转移到另一个网页。在`poc`库的处理中，我们一般支持3种跳转方式：

1. 使用状态码与`Location`头做跳转；
2. 使用`<meta>`标签做跳转；
3. 使用JavaScript代码标签做跳转；

这三种跳转方式都非常常见。我们在HTTP请求过程中可以很容易通过`poc`库的参数控制重定向的参数和过程，具体的选项如下：

##### 控制重定向次数

`poc.redirectTimes`可以用来控制重定向的次数，类似`poc.proxy`的用法，用户只需要`poc.redirectTimes(3)`放入`poc.HTTP`的选项参数中即可：

```JSON
poc.HTTP(packet, poc.redirectTimes(3))
```

在这个示例中，`poc.HTTP` 函数用于发送HTTP请求，而 `packet` 是该请求的原始HTTP报文。第二个参数 `poc.redirectTimes(3)` 可能是一个配置函数调用，它设置了重定向的最大次数。

这里的 `poc.redirectTimes(3)` 表示如果在请求过程中遇到HTTP重定向响应，客户端将跟随重定向的URL再次发送请求，最多跟随3次。这是一个常见的HTTP客户端配置选项，用于防止无限重定向循环。

如果用户设置`poc.noRedirect(true)`这个选项，等价于设置了`poc.redirectTimes(0)`。

#### 超时配置

在进行HTTP请求的时候，如果网站响应特别慢，为了避免程序“卡住”，一般可以通过设置请求的超时时间来规避这些问题。用户可以使用`poc.timeout(5)`来设置请求的超时秒数，为了方便用户理解，我们可以举例一段代码：

```JSON
poc.HTTP(`GET / HTTP/1.1
Host: www.example.com

`, poc.timeout(0.1))~

/*
Panic Stack:
File "/var...yaki-code-2755550240.yak", in __yak_main__
--> 1-4 poc.HTTP(`GET / HTTP/1.1
        Host: www.example.com
        
        `, poc.timeout(0.1))~

YakVM Panic: native func `poc.HTTP` call error: read tcp 192.1....34:80: i/o timeout
*/
```

我们使用`poc.timeout(0.1)`设置该请求的超时时间。在这个例子中，超时时间被设置为0.1秒，这是一个非常短的时间间隔，我们在这里设置是因为要为大家演示超时崩溃的场景。

超时时间是指客户端等待服务器响应的最长时间。如果在这段时间内没有收到服务器的响应（无论是完整的响应还是响应的一部分），客户端将停止等待，并且抛出一个错误或异常。在Yak语言中，这个错误和异常表现为：`YakVM Panic: native func `poc.HTTP` call error: read tcp 192.1....34:80: i/o timeout`。在编写网络相关的代码时，处理超时和异常是非常重要的，以确保程序的鲁棒性和用户体验，我们接下来来解释如何正确处理这种情况

##### 超时错误处理：try-catch

在Yak语言中的错误处理章节中，我们明确有两种错误处理方式可供用户选择：

1. 使用函数错误断言调用，即：`poc.HTTP(...)~`通过函数调用结尾的一个简单的波浪号，可以实现快速失败，让程序发生错误。同时配合`try-catch`编程来捕获错误
2. 另一种方式是主动“接受错误”，主动处理错误：`rsp, req, err = poc.HTTP(...)`通过使用左值直接接收错误可以主动避免程序崩溃。

这两种错误处理的方式用户可以自行选择在恰当的时候使用恰当的处理方法，在Yak语言编程中，这两种错误处理方式都被认为是合理的，用户可以遵循下面的代码进行编程：

```JSON
// 使用Try-Catch来处理错误
try {
    rsp, req = poc.HTTP(`GET / HTTP/1.1
Host: www.example.com

`, poc.timeout(0.1))~
} catch err {
    println(err) 
    // native func `poc.HTTP` call error: read tcp 192.168.3.29:60318->93.184.216.34:80: i/o timeout
}

// 主动接受错误来处理
rsp, req, err = poc.HTTP(`GET / HTTP/1.1
Host: www.example.com

`, poc.timeout(0.1))
println(err) // read tcp 192.168.3.29:60284->93.184.216.34:80: i/o timeout
```

#### 数据包变形

在网络编程中，经常需要根据特定的需求来修改HTTP请求的头部或者其他元素的信息。这一过程通常被称为“数据包变形”。在Yak语言中，可以使用内建的库函数来方便地添加或者修改HTTP请求的头部或者其他信息。以下是一个在Yak语言中进行HTTP请求头部变形的实例：

```Plain
rsp, req = poc.HTTP(`GET / HTTP/1.1
Host: www.example.com
`, poc.appendHeader("User-Agent", "Yak poc lib HTTP Client"))~
println(string(req))
```

在这个例子中，我们使用 `poc.HTTP` 函数发起一个GET请求，并通过 `poc.appendHeader` 函数来添加一个新的头部字段 `User-Agent`。这个字段用于告诉服务器我们的客户端信息，它是HTTP请求的一部分，可以被用来识别发起请求的客户端应用。

执行上述代码后，将会在控制台输出以下HTTP请求数据：

```Plaintext
GET / HTTP/1.1
Host: www.example.com
User-Agent: Yak poc lib HTTP Client
```

这个输出展示了最终的HTTP请求包含了我们添加的 `User-Agent` 头部。这样，服务器接收到这个请求时，就能识别出请求是由 "Yak poc lib HTTP Client" 发起的。

##### 更多的变形方式

除了`poc.appendHeader`这个接口之外，Yak语言的`poc`库还提供了大量的其他的辅助参数可以帮助用户快速进行数据包变形，我们把常用的一些方法汇总成了表格，方便用户了解和学习：

| **接口名称**                 | **使用说明**                            | **案例**                                                     |
| ---------------------------- | --------------------------------------- | ------------------------------------------------------------ |
| `replaceFirstLine`           | 替换HTTP请求的请求行                    | `poc.HTTP(request, poc.replaceFirstLine("POST / HTTP/1.1"))` |
| `replaceMethod`              | 替换HTTP请求的方法                      | `poc.HTTP(request, poc.replaceMethod("POST"))`               |
| `replaceHeader`              | 替换HTTP请求中的指定头部                | `poc.HTTP(request, poc.replaceHeader("User-Agent", "NewAgent"))` |
| `replaceHost`                | 替换HTTP请求的Host头部                  | `poc.HTTP(request, poc.replaceHost("www.newhost.com"))`      |
| `replaceCookie`              | 替换HTTP请求中的Cookie                  | `poc.HTTP(request, poc.replaceCookie("sessionid", "newvalue"))` |
| `replaceBody(body, chunked)` | 替换HTTP请求的正文内容，并且控制chunked | `poc.HTTP(request, poc.replaceBody("new=body&data=true", false))` |
| `replaceAllQueryParams`      | 替换HTTP请求的所有查询参数              | `poc.HTTP(request, poc.replaceAllQueryParams({"foo":"bar"}))` |
| `replaceAllPostParams`       | 替换HTTP请求的所有POST参数              | `poc.HTTP(request, poc.replaceAllPostParams({"foo":"bar"}))` |
| `replaceQueryParam`          | 替换HTTP请求中的指定查询参数            | `poc.HTTP(request, poc.replaceQueryParam("id", "12345"))`    |
| `replacePostParam`           | 替换HTTP请求中的指定POST参数            | `poc.HTTP(request, poc.replacePostParam("username", "newuser"))` |
| `replacePath`                | 替换HTTP请求的路径                      | `poc.HTTP(request, poc.replacePath("/newpath"))`             |
| `appendHeader`               | 向HTTP请求添加一个头部                  | `poc.HTTP(request, poc.appendHeader("X-Custom-Header", "value"))` |
| `appendCookie`               | 向HTTP请求添加一个Cookie                | `poc.HTTP(request, poc.appendCookie("newcookie", "value"))`  |
| `appendQueryParam`           | 向HTTP请求的URL添加一个查询参数         | `poc.HTTP(request, poc.appendQueryParam("newparam", "value"))` |
| `appendPostParam`            | 向HTTP请求的正文添加一个POST参数        | `poc.HTTP(request, poc.appendPostParam("newpostparam", "value"))` |
| `appendPath`                 | 向HTTP请求的路径添加一个额外的路径部分  | `poc.HTTP(request, poc.appendPath("/additionalpath"))`       |
| `deleteHeader`               | 删除HTTP请求中的指定头部                | `poc.HTTP(request, poc.deleteHeader("User-Agent"))`          |
| `deleteCookie`               | 删除HTTP请求中的指定Cookie              | `poc.HTTP(request, poc.deleteCookie("sessionid"))`           |

这个表格中列出了一些常见的Yak语言`poc`库中针对数据包的变形方法，用户可以根据需要选择对应的接口参数来使用，它旨在提供一个概览，具体的使用和语法应参考最新的Yak语言文档。

#### Cookie 使用与会话管理

在本节中，我们将探讨如何在 Yak 语言中使用 Cookie 进行会话管理。在深入代码示例之前，让我们回顾一下 Cookie 的基本概念以及它们在 HTTP 通信中的角色。

Cookie 是服务器发送到用户浏览器并保存在本地的小型数据片段，主要用于记住用户的信息和在线活动。当用户再次访问同一服务器时，浏览器会将之前保存的 Cookie 一同发送到服务器，从而允许服务器维持用户的会话状态。

Cookie 最常见的用途包括：

- 会话管理（如用户登录状态、购物车）
- 个性化（如用户偏好设置）
- 跟踪（如分析用户行为）

##### 会话保存示例

在 Yak 语言中，我们可以利用 Cookie 实现用户会话的保存和管理。以下是一个示例，演示了如何通过使用可更新的 Cookie 来维护会话状态。

首先，我们通过生成一个唯一的会话 ID 来创建一个新会话。接下来，我们将展示如何在两个 HTTP 请求中使用这个会话 ID，以保持用户会话的连续性。

```SQL
// 生成唯一会话 ID
sessionId = uuid()

// 发送第一个请求，带上会话 ID
response1, request1 = poc.Get("http://www.example.com/before", poc.session(sessionId))

// 发送第二个请求，重用相同的会话 ID
response2, request2 = poc.Get("http://www.example.com/after", poc.session(sessionId))
```

在这个示例中，`uuid()` 函数用于生成一个全局唯一标识符（GUID），作为会话 ID。我们使用 `poc.session(sessionId)` 来绑定会话 ID 到请求中，确保两次请求都使用相同的会话标识。

`poc.Get` 函数发送 HTTP GET 请求到指定的 URL。第一个参数是请求的 URL，第二个参数是请求配置，其中包括会话 ID。通过这种方式，我们可以确保服务器能够识别是同一个用户的连续请求，从而允许跨请求的数据持久化和会话管理。通过使用 Cookie 和会话 ID，我们可以在 Yak 语言编程中有效地管理用户会话，为用户提供连贯且个性化的体验。

## 8.1.3 HTTP原始报文解析与处理

在本章节中，我们将继续探索HTTP原始报文的世界。除了发送原始数据包的功能，Yak语言还提供了一系列强大的HTTP原始报文处理函数。我们将向您介绍一些非常实用的数据包处理函数，它们将帮助您更深入地学习和使用这些工具。 与发送数据包时对HTTP请求的处理不同，这些便捷的函数允许您在不发送数据包的情况下对报文内容进行精细调整。这一点对于开发安全产品或进行安全分析的工具尤为重要。 在本节中，我们将重点介绍如何使用Yak语言提供的这些工具函数，不仅帮助您理解数据包的结构和内容，还能够教您如何在实际情况中灵活调整这些数据，以适应不同的安全分析和测试需求。这些技能对于网络安全的学习者来说是基础且必不可少的。

### 提取数据包中的信息

在用户可以直接操作报文的时候，可能会遇到的第一个问题是：“如何提取数据包中的一些字段的信息，难道必须用正则吗？”。我们为用户准备了一系列提取数据包中信息的帮助函数，用户可以随时使用，以下我们给一些案例来展示：

```SQL
packet = `GET /mng/index.html?key=value&key2=foo&key3=bar HTTP/1.1
Host: www.example.com
User-Agent: test-agent
Cookie: cookieId=123; b=1
Content-Length: 11

a=1&b=2&c=3`

path1 = poc.GetHTTPRequestPath(packet)
// path1: (string) (len=43) "/mng/index.html?key=value&key2=foo&key3=bar"
path2 = poc.GetHTTPRequestPathWithoutQuery(packet)
// path2: (string) (len=15) "/mng/index.html"

cookie1 = poc.GetHTTPPacketCookie(packet, "cookieId")
// cookie1: (string) (len=3) "123"
cookie2 = poc.GetHTTPPacketCookie(packet, "b")
// cookie2: (string) (len=1) "1"

// ignore case
ua = poc.GetHTTPPacketHeader(packet, "user-agent")
// ua: (string) (len=10) "test-agent"

// get params
param1 = poc.GetHTTPPacketQueryParam(packet, "key")
// param1: (string) (len=5) "value"
param2 = poc.GetHTTPPacketQueryParam(packet, "key2")
// param2: (string) (len=3) "foo"
params = poc.GetAllHTTPPacketQueryParams(packet)
// params: {"key": "values", "key2": "foo", "key3", "bar"}
```

这段代码展示了如何使用Yak语言`poc`来处理和解析一个HTTP请求数据包。下面是对每个函数调用的解读：

1. `poc.GetHTTPRequestPath(packet)`
   1. 这个函数从HTTP请求数据包中提取完整的请求路径，包括路径和查询字符串。
   2. 在提供的示例中，它返回了`"/mng/index.html?key=value&key2=foo&key3=bar"`。
2. `poc.GetHTTPRequestPathWithoutQuery(packet)`
   1. 这个函数从HTTP请求数据包中提取请求路径，但不包括查询字符串。
   2. 在提供的示例中，它返回了`"/mng/index.html"`。
3. `poc.GetHTTPPacketCookie(packet, "cookieId")`
   1. 这个函数从HTTP请求数据包中提取指定名称的cookie值。
   2. 在提供的示例中，它查找cookie名为`"cookieId"`的值，并返回`"123"`。
4. `poc.GetHTTPPacketCookie(packet, "b")`
   1. 这个函数的作用同上，不过它查找的是cookie名为`"b"`的值，并返回`"1"`。
5. `poc.GetHTTPPacketHeader(packet, "user-agent")`
   1. 这个函数用于提取HTTP请求数据包中指定的头部信息；这个函数是对HTTP头大小写并不敏感。
   2. 在示例中，它不区分大小写地获取`"user-agent"`头部的值，并返回`"test-agent"`。
6. `poc.GetHTTPPacketQueryParam(packet, "key")`
   1. 这个函数用于获取HTTP请求数据包中URL查询参数的值。
   2. 在示例中，它获取查询参数`"key"`的值，返回`"value"`。
7. `poc.GetHTTPPacketQueryParam(packet, "key2")`
   1. 类似于上一个函数，它获取查询参数`"key2"`的值，并返回`"foo"`。
8. `poc.GetAllHTTPPacketQueryParams(packet)`
   1. 这个函数获取HTTP请求数据包中所有的URL查询参数及其值。
   2. 在示例中，它返回一个包含所有查询参数的字典：`{"key": "value", "key2": "foo", "key3": "bar"}`。

这些函数对于分析和处理HTTP请求非常有用，特别是在需要解析请求的不同部分以进行网络安全测试或数据提取时。通过这些函数，用户可以轻松地访问请求路径、查询参数、头部信息和cookie值，而无需手动解析整个HTTP请求数据包。除了上述提到的内容，还有一些函数，我们在下面的总结中为大家列出：

| **函数及使用说明**                                           | **代码案例**                                          |
| ------------------------------------------------------------ | ----------------------------------------------------- |
| `poc.GetAllHTTPPacketQueryParams` - 获取所有URL查询参数及其值 | `poc.GetAllHTTPPacketQueryParams(packet)`             |
| `poc.GetAllHTTPPacketPostParams` - 获取所有POST请求参数及其值 | `poc.GetAllHTTPPacketPostParams(packet)`              |
| `poc.GetHTTPPacketQueryParam` - 获取指定的URL查询参数值      | `poc.GetHTTPPacketQueryParam(packet, "paramName")`    |
| `poc.GetHTTPPacketPostParam` - 获取指定的POST请求参数值      | `poc.GetHTTPPacketPostParam(packet, "paramName")`     |
| `poc.GetHTTPPacketCookieValues` - 获取所有Cookie的key对应的值 | `poc.GetHTTPPacketCookieValues(packet, "cookieName")` |
| `poc.GetHTTPPacketCookieFirst` - 获取第一个Cookie的值        | `poc.GetHTTPPacketCookieFirst(packet, "cookieName")`  |
| `poc.GetHTTPPacketCookie` - 获取指定Cookie的值               | `poc.GetHTTPPacketCookie(packet, "cookieName")`       |
| `poc.GetHTTPPacketContentType` - 获取HTTP包的内容类型        | `poc.GetHTTPPacketContentType(packet)`                |
| `poc.GetHTTPPacketCookies` - 获取HTTP请求中的Cookies         | `poc.GetHTTPPacketCookies(packet)`                    |
| `poc.GetHTTPPacketHeaders` - 获取HTTP请求中的头部信息        | `poc.GetHTTPPacketHeaders(packet)`                    |
| `poc.GetHTTPPacketHeader` - 获取指定的HTTP头信息             | `poc.GetHTTPPacketHeader(packet, "HeaderName")`       |
| `poc.GetHTTPPacketBody` - 获取HTTP请求或响应的主体内容       | `poc.GetHTTPPacketBody(packet)`                       |
| `poc.GetHTTPPacketFirstLine` - 获取HTTP请求或响应的第一行，并把他们分割 | `poc.GetHTTPPacketFirstLine(packet)`                  |
| `poc.GetStatusCodeFromResponse` - 获取HTTP响应的状态码       | `poc.GetStatusCodeFromResponse(responsePacket)`       |
| `poc.GetHTTPRequestMethod` - 获取HTTP请求的方法              | `poc.GetHTTPRequestMethod(packet)`                    |
| `poc.GetHTTPRequestPath` - 获取HTTP请求的路径                | `poc.GetHTTPRequestPath(packet)`                      |
| `poc.GetHTTPRequestPathWithoutQuery` - 获取不含查询参数的路径 | `poc.GetHTTPRequestPathWithoutQuery(packet)`          |

### 修改数据包关键部分内容

在处理网络数据包时，可能需要修改、添加或删除某些部分的内容以满足特定的测试或模拟需求。`poc`库提供了一系列函数来执行这些操作，分为三大类：`ReplaceHTTPPacket...`、`AppendHTTPPacket...` 和 `DeleteHTTPPacket...`。每一类函数侧重于不同的用途：

1. `ReplaceHTTPPacket...` 函数用于替换数据包中现有的内容。
2. `AppendHTTPPacket...` 函数用于在数据包的特定部分添加新内容。
3. `DeleteHTTPPacket...` 函数用于删除数据包中的特定内容。

以下是一些典型的函数使用案例：

#### **替换数据包内容**

```Plain
// 替换HTTP方法
packet = poc.ReplaceHTTPPacketMethod(packet, "POST")
// 替换HTTP请求的第一行
packet = poc.ReplaceHTTPPacketFirstLine(packet, "POST /new/path HTTP/1.1")
// 替换HTTP请求头部
packet = poc.ReplaceHTTPPacketHeader(packet, "Host", "new.example.com")
// 替换HTTP请求体
packet = poc.ReplaceHTTPPacketBody(packet, "newBodyContent")
// 替换Cookie
packet = poc.ReplaceHTTPPacketCookie(packet, "sessionId", "newSessionId")
// 替换Host字段
packet = poc.ReplaceHTTPPacketHost(packet, "another.example.com")
// 替换基础认证信息
packet = poc.ReplaceHTTPPacketBasicAuth(packet, "newUsername", "newPassword")
// 替换所有URL查询参数
packet = poc.ReplaceAllHTTPPacketQueryParams(packet, {"newKey": "newValue", "anotherKey": "another"})
// 替换特定的URL查询参数
packet = poc.ReplaceHTTPPacketQueryParam(packet, "key", "newKey")
// 替换特定的POST参数
packet = poc.ReplaceHTTPPacketPostParam(packet, "a", "newValue")
// 替换请求路径
packet = poc.ReplaceHTTPPacketPath(packet, "/new/path")
```

#### **添加数据包内容**

```Plain
// 添加HTTP头部
packet = poc.AppendHTTPPacketHeader(packet, "New-Header", "HeaderValue")
// 添加Cookie
packet = poc.AppendHTTPPacketCookie(packet, "newCookie", "newValue")
// 添加URL查询参数
packet = poc.AppendHTTPPacketQueryParam(packet, "newParam", "newValue")
// 添加POST参数
packet = poc.AppendHTTPPacketPostParam(packet, "d", "4")
// 添加到请求路径
packet = poc.AppendHTTPPacketPath(packet, "/additional/path")
```

#### **删除数据包内容**

```Plain
// 删除HTTP头部
packet = poc.DeleteHTTPPacketHeader(packet, "User-Agent")
// 删除Cookie
packet = poc.DeleteHTTPPacketCookie(packet, "b")
// 删除URL查询参数
packet = poc.DeleteHTTPPacketQueryParam(packet, "key2")
// 删除POST参数
packet = poc.DeleteHTTPPacketPostParam(packet, "b")
```

在上述案例中，我们演示了如何使用`poc`库中的函数对HTTP数据包进行修改、添加和删除操作。这些操作对于模拟网络攻击、测试应用程序的安全性或者进行自动化测试等场景非常有用。通过这些函数，开发者和测试人员可以方便地对HTTP数据包进行精确控制，以满足他们的具体需求。

### 数据包提取URL

在网络编程和安全分析中，经常需要从HTTP请求数据包中提取出完整的URL。Yak语言提供了一个便捷的函数`poc.GetUrlFromHTTPRequest`来执行这一操作。该函数接受两个参数：`scheme`和`packet`，其中`scheme`表示URL的协议部分（如`http`、`https`或其他自定义协议），`packet`是包含HTTP请求的字节数组。

#### **函数原型与使用说明**

```Plain
poc.GetUrlFromHTTPRequest(scheme string, packet []byte) string
```

**参数：**

- `scheme`: URL的协议类型，例如`http`或`https`。
- `packet`: 字节数组格式的HTTP请求数据。

**返回值：**

函数返回一个字符串，代表从HTTP请求数据包中提取出的完整URL。

#### **使用案例**

在进行网络数据分析或安全测试时，我们经常需要从HTTP请求中提取出完整的URL。以下是如何使用Yak语言中的`poc.GetUrlFromHTTPRequest`函数来从一个实际的HTTP请求数据包中提取URL的经典案例。

考虑以下HTTP请求数据包：

```HTTP
GET /mng/index.html?key=value&key2=foo&key3=bar HTTP/1.1
Host: www.example.com
User-Agent: test-agent
Cookie: cookieId=123; b=1
Content-Length: 11
content-type: application/json
a=1&b=2&c=3
```

这个请求包含了一个GET请求，请求的路径包含了查询参数，以及一些HTTP头部信息，如`Host`、`User-Agent`、`Cookie`、`Content-Length`和`content-type`。请求体中也包含了一些数据。

要从这个HTTP请求中提取URL，我们可以使用`poc.GetUrlFromHTTPRequest`函数。以下是在Yak语言中实现的例子：

```Plain
packet := `GET /mng/index.html?key=value&key2=foo&key3=bar HTTP/1.1
Host: www.example.com
User-Agent: test-agent
Cookie: cookieId=123; b=1
Content-Length: 11
content-type: application/json
a=1&b=2&c=3`
url := poc.GetUrlFromHTTPRequest("http", packet)
println(url)
```

执行上述代码后，我们将得到以下输出：

```Plaintext
http://www.example.com/mng/index.html?key=value&key2=foo&key3=bar
```

这个输出是根据HTTP请求中的方法、路径、查询参数和主机头部信息构建的完整URL。在这个例子中，`poc.GetUrlFromHTTPRequest`函数正确地识别了URL的协议为`http`，并将请求行和头部中的信息组合成了一个格式化的URL。

### 数据包修复

在网络通信中，数据包的格式和完整性至关重要。不正确的行结束符（如CRLF问题）或错误的内容长度声明（`Content-Length`头部错误）可能导致对端无法识别正确的传输内容。因此，修复这些问题是确保数据包正确传输和处理的关键步骤。一般来说，在发送数据包的过程中会自动修复这些内容。

- **CRLF修复**

HTTP协议规定，请求头部和起始行之间应使用一对回车换行符（CRLF，即`\r\n`）作为分隔。有时，由于平台差异或编码错误，这些行结束符可能会被错误地编码为单个换行符（`\n`）。这种情况下，需要将其修复为标准的CRLF对。

- **`Content-Length`****头部修复**

`Content-Length`头部指示了HTTP请求或响应的消息体的确切字节数。如果`Content-Length`值不正确，接收方可能无法正确地解析消息体。因此，如果已知实际内容的长度，应该修复`Content-Length`头部以反映正确的长度。

#### 修复案例

下面我们从一个案例来理解数据包修复是一个什么样的效果，假设我们有一个HTTP请求数据包，它的行结束符不符合标准，缺少了回车符（`\r`），如下所示：

```HTTP
GET / HTTP/1.1\nHost: www.example.com
```

显然这个不规范的数据包直接发送到服务端，服务端并不一定能正常识别：通常表现为“卡住了”，服务端一直没有响应；或服务端直接返回`400 Bad Request`。

我们可以使用Yak语言中的`poc.FixHTTPRequest`函数来修复这个数据包，使其符合HTTP协议的要求。以下是如何在Yak语言中进行数据包修复的例子：

```Plain
packet := "GET / HTTP/1.1\nHost: www.example.com"
packet = poc.FixHTTPRequest(packet)
dump(packet)
```

执行上述代码后，我们将得到以下输出：

```Plaintext
([]byte) (len=41 cap=64) {
 00000000  47 45 54 20 2f 20 48 54  54 50 2f 31 2e 31 0d 0a  |GET / HTTP/1.1..|
 00000010  48 6f 73 74 3a 20 77 77  77 2e 65 78 61 6d 70 6c  |Host: www.exampl|
 00000020  65 2e 63 6f 6d 0d 0a 0d  0a                       |e.com....|
}
```

在这个输出中，我们可以看到原始数据包中的`\n`已被修复为标准的CRLF（`\r\n`），确保了数据包符合HTTP协议的格式要求。这个数据包如果被发送到`www.example.com`网站中的话，会得到正确的回复。

#### 如何修复损坏的数据包？

我们在修复的时候，需要用到`poc.FixHTTPRequest`或者`poc.FixHTTPResponse`这两个函数，实际上他们的核心功能是修复HTTP报文中的CRLF问题，并且根据参数决定是否修复`Content-Length`头。以下是代码流程的总结：

1. 移除HTTP报文左侧的空白字符。
2. 检查报文是否为空，如果为空，则返回`nil`。
3. 初始化一些标志变量，用于标记报文的特定属性（如是否是请求、响应、是否是多部分表单、是否已有`Content-Length`或`Transfer-Encoding: chunked`头等）。
4. 分离HTTP报文的头部和体部，并对头部的每一行进行处理：
   1. 如果头部包含`Content-Type: multipart/form-data`，则设置多部分表单标志。
   2. 如果头部包含`Content-Length`，则设置`Content-Length`存在标志。
   3. 如果头部包含`Transfer-Encoding: chunked`，则设置`Transfer-Encoding`标志。
5. 如果报文是请求且同时包含`Content-Length`和`Transfer-Encoding: chunked`头，则标记为HTTP走私攻击（smuggle case）。
6. 如果报文体部以CRLF结束且`noFixLength`为真，则将CRLF追加到报文体部的末尾。
7. 如果报文是多部分表单请求，则修复多部分表单的边界（boundary）。
8. 如果`noFixLength`为假且没有`Transfer-Encoding: chunked`头：
   1. 如果有`Content-Length`头，则修复`Content-Length`的值为实际报文体的长度。
   2. 如果没有`Content-Length`头，则添加`Content-Length`头并设置其值为报文体的长度。
9. 将修复后的头部和体部重新组合成完整的HTTP报文。

# 8.2 模糊测试 HTTP协议

在上一节中，介绍Yak语言中`poc`库的强大功能，这些库使测试人员能够在数据包级别精确地操作和分析HTTP通信。通过这些工具，测试人员可以构建、发送、捕获以及解析HTTP请求和响应，从而获得网络应用程序工作机制的深入理解。然而，理解通信协议的结构和行为只是网络安全的一部分。为了确保应用程序的健壮性和安全性，测试人员还需要采取主动措施来识别潜在的弱点。

这引出了这一节的主题：HTTP Fuzz。Fuzz是一种强大的自动化软件测试技术，它通过向应用程序输入异常或随机生成的数据来揭露安全漏洞。在网络安全的语境中，HTTP Fuzz专注于探索Web应用程序如何处理非预期或恶意构造的HTTP请求。通过使用HTTP Fuzz库，安全专家和开发者可以发现那些可能被恶意攻击者利用的缺陷，从而在问题导致安全事件之前预防和修复它们。接下来的内容，将探讨Yak的HTTP Fuzz如何完成对web应用的安全检查。

## 8.2.1 基础概念：HTTP Fuzz

HTTP Fuzz是一种自动化的网络安全测试技术，主要通过生成并发送异常或特制的HTTP请求到Web应用程序，以便发现可能的输入验证缺陷、处理异常不当或安全漏洞，如SQL注入、跨站脚本(XSS)和缓冲区溢出等。这个过程涉及大量的请求变异，以及对响应的监控和分析，旨在在实际攻击发生前识别和修复潜在的安全问题。

Fuzz可以是完全随机的，也可以是基于某种模式或逻辑的，后者更为有效。在HTTP Fuzz中，一个“fuzzer”工具会生成各种HTTP请求，包括改变**HTTP方法、路径、头部、参数和正文内容**。这些请求可能包含：

- 非标准或无效的HTTP方法
- 路径遍历序列（例如`../`来尝试访问不应该暴露的目录）
- 不同类型的输入，用以测试类型处理错误
- 特殊字符和编码，可能引起解析器错误或注入攻击
- 极端长度的值，可能触发缓冲区溢出
- 逻辑错误，如重复的参数或头部

## 8.2.2 构建 HTTP Fuzz 对象 与  执行模糊测试

### 构建HTTP Fuzz对象

`fuzz.HTTPRequest`是 Yak HTTP Fuzz 模块中的核心API，调用此API可以创建一个HTTP Fuzz对象。其函数定义如下：

```Go
fuzz.HTTPRequest(packet []byte, opt...) (*FuzzHTTPRequest, error)
```

第一个参数为数据包的内容，后续是一个可变参数，可以将 `fuzz.https(true) `, `fuzz.proxy("http://proxy.com")`之类的参数任意填在opts可变参数中，来指定一些HTTP 配置。

#### HTTPS 参数使用

```Go
raw = `GET / HTTP/1.1
Host: www.example.com

abc=1`
fuzz.HTTPRequest(raw, fuzz.https(true))~
```

我们观察上面的例子，除了packet参数之外，后续可以追加各种一系列的配置参数，这些参数用于修改或增强请求的行为。

- `raw`: 这是一个多行字符串，代表要发送的HTTP请求报文。在这个例子中，它表示一个简单的HTTP GET请求，是HTTP Fuzz的基础模板
- `fuzz.HTTPRequest`: 这是 fuzz库中的一个函数，它负责处理传入的原始HTTP报文字符串，以其作为模板创建出一个HTTP Fuzz对象供给数据包变形和模糊测试。
- `fuzz.https(true)`: 这个调用是一个配置函数，它接收一个布尔值参数。在这个上下文中，`true` 表示要使用HTTPS协议进行通信。这意味着，尽管原始报文模板中没有指定使用HTTPS，`fuzz`库在后续发送模糊测请求的时候也会将请求作为HTTPS请求处理。

#### Proxy参数使用

类似地Yak语言的`fuzz`库还提供了“代理”参数，用户可以参考这段代码案例来为当前请求设置参数：

```Go
raw = `GET / HTTP/1.1
Host: www.example.com

abc=1`
fuzz.HTTPRequest(raw, fuzz.proxy("http://proxy.com"))~
```

这段代码中`fuzz.proxy(...)`中填入要设置的代理即可。实际在使用的过程中，除了HTTP代理协议之外，还可使用其他协议：包含：`socks5`，`https`，`socks4`协议。

如代理认证之类的其他情况的代理方式同上一章的`poc`库在这里就不多做赘述了。

#### 内处理错误

还有一个内处理的错误的API：`NewMustFuzzHTTPRequest`其调用方式与上述API完全一致，不过不再返回错误，而是存在错误的情况下直接打印错误信息。

在拥有一个HTTP Fuzz对象之后，就可以对其进行一系列的数据包变形操作来生成HTTP Fuzz 所要使用的测试数据了。

在继续后面的内容之前，还需要大致了解一下 `fuzz` 这个模块在 API 设计上的特性。

> **方法链式调用**，也称为命名参数惯用法。每个方法都返回同一个对象，允许在单个语句中将调用链接在一起，而无需变量来存储中间结果。
>
> 方法链式调用是一种语法糖。 类似的语法是方法级联调用，即调用一个对象的多个方法的语法糖
>
> ```Go
> raw = `GET / HTTP/1.1
> Host: www.example.com
> 
> abc=1`
> fuzz.HTTPRequest(raw, fuzz.https(true))~.Show()
> ```

### 执行模糊测试

HTTP Fuzzing 技术主要包含两个关键步骤：

1. **生成 Fuzz 数据（HTTP 数据包变形）**：这是 HTTP Fuzzing 技术的核心环节，负责创建变异的 HTTP 请求数据。这一过程将在后续的部分中进行详细阐述。
2. **执行****模糊测试****（发送 Fuzz 数据包）**：在生成 Fuzz 数据之后，这一步涉及将这些变异的数据包发送到目标服务器以测试其响应和稳定性。

在 fuzz 库中，存在两个用于执行模糊测试的 API，分别是 `Exec` 和 `ExecFirst`。两个 API 的调用语法是相同的，但它们在发送 HTTP Fuzz 对象生成的数据包时有所不同。`Exec` 方法会发送整个生成的数据包集合，而 `ExecFirst` 仅发送集合中的第一个数据包。这样，`ExecFirst` 可以用于快速检查或测试初始的 fuzz 案例，而 `Exec` 用于进行全面的模糊测试。

通过一个案例来快速熟悉一下执行模糊测试的API：

```Go
raw = `GET / HTTP/1.1
Host: www.example.com

`
ch = fuzz.HTTPRequest(raw, fuzz.https(true))~.FuzzMethod("GET","POST").Exec(fuzz.WithDelay(1))~
for res = range ch {
    println(res.Response.Status)
}
/*
200 OK
200 OK
*/
```

在上述示例中，构建了一个 HTTP Fuzz 对象，调用了 `FuzzMethod`。该 API 的具体作用将在随后的内容中详细描述。只需关注以下代码：`fuzz.HTTPRequest(raw, fuzz.https(true))~.FuzzMethod("GET","POST")`，其调用后生成的HTTP Fuzz对象渲染出的Fuzz 数据集合如下：

```Go
GET / HTTP/1.1
Host: www.example.com


POST / HTTP/1.1
Host: www.example.com
Content-Length: 0
```

随后调用`Exec`API以上述的数据集合进行模糊测试，`Exec`API的定义为：`Exec(opts...) (chan *_httpResult, error)`，这个 API 接受一个可变数量的参数 `opts`，允许用户定制化测试的执行。通过这些参数，用户可以增强 `Exec` 函数的功能，并调整发包策略。以下是一些可用的配置选项：：

- `fuzz.WithDelay`：控制发包延时（单位：秒）
- `fuzz.WithConcurrentLimit`：控制发包并发数量（默认50）
- `fuzz.WithTimeOut`：控制超时限制（默认10秒）

`Exec`的返回值有两个：HTTP响应管道、可能存在错误。在上述案例中使用变量`ch`接收响应管道，使用`~`语法处理了错误。并在之后的代码里遍历管道读取到了两个响应。

下面是一个`ExecFirst`的案例，其调用方式与`Exec`一致，不过返回值不再是管道，而是单独响应对象，所以案例中只需直接读取即可。

```Go
raw = `GET / HTTP/1.1
Host: www.example.com

`
res = fuzz.HTTPRequest(raw, fuzz.https(true))~.FuzzMethod("GET","POST").ExecFirst()~
println(res.Response.Status)
/*
200 OK
*/
```

## 8.2.3 基本 HTTP 数据包变形

了解了HTTP Fuzz技术的概念之后，不难看出 HTTP Fuzz 关键点在于对HTTP数据的变形过程，其实再具体一点就是对HTTP Request的变形。

那么在上一章详细了解HTTP 数据包的构造之后，不难总结出 HTTP Fuzz变形数据包的几个关键点。

1. **请求行**：
   1. **HTTP方法**：通过改变请求的HTTP方法，如GET, POST, PUT, DELETE等，来测试服务器对不同HTTP动词的处理和响应。这可能揭示对特定方法的处理中存在的安全缺陷。
   2. **URLs**：
      1. **Path**：改变请求的URL路径部分，以探测潜在的目录遍历漏洞或路由配置错误。
      2. **GET参数**：通过改变URL的查询字符串参数，可以测试应用程序对输入验证和处理的健壮性
2. **请求头部**：
   1. **常规头部**：修改如User-Agent（模拟不同的浏览器或设备）、Accept（请求特定的内容类型）、Host（指定服务器域名）等头部，以测试服务器对各种头部值的处理能力。
   2. **Cookie****头部**：通过改变Cookie的值，由于Cookie需要的粒度更细，不同于其他头部，对Cookie头部的测试需要支持键值对（K-V Pair）格式。
3.  **请求体**：
   1. **Json****数据**：对JSON格式的请求体数据进行变形和替换，以测试应用程序如何处理不正确或恶意构造的JSON输入，这对于发现类型错误和处理逻辑漏洞至关重要。
   2. **Urlencode数据**：对于以application/x-www-form-urlencoded格式发送的数据，即POST参数，应用与GET参数相同的测试方法，以测试表单提交的处理。
   3. **form-data数据-上传文件**：对文件上传功能进行测试，包括上传恶意文件，以检查应用程序是否能正确处理文件类型和内容，防止上传恶意代码和执行文件。

fuzz库为用户提供便捷的数据包变形API，只需要用户将不同变形点的Fuzz数据传入对应的API，就可以方便地获取到可用的HTTP Fuzz数据包。再搭配Yak独有的fuzztag，就可以实现通过少量的代码完成大量HTTP Fuzz数据包的生成工作。

### HTTP请求行变形

> 在正式介绍fuzz库的数据包变形能力之前，需要认识一个工具API:`FuzzHTTPRequest.Show()`
>
> 此API的作用是展示当前HTTP Fuzz对象表达的所有HTTP请求数据包。在后面的介绍中会频繁使用此API来展示Fuzz的数据包结果。

#### 请求方法

在Fuzz库中生成针对请求方法的Fuzz数据是很容易的，需要使用的API是 `FuzzMethod`此API接收请求方法列表，使用这个方法列表以模板为基础生成请求方法对应的数据包。

```Go
raw = `GET / HTTP/1.1
Host: www.example.com

abc=1`
fuzz.HTTPRequest(raw, fuzz.https(true))~.FuzzMethod("POST","GET").Show()
/*
POST / HTTP/1.1
Host: www.example.com
Content-Length: 5

abc=1
GET / HTTP/1.1
Host: www.example.com
Content-Length: 5

abc=1
*/
```

具体来说，这段代码首先定义了一个HTTP请求报文字符串raw，包含了一个GET请求，请求目标为 `www.example.com`，请求路径为空，请求参数为abc=1。然后使用Fuzz模块的HTTPRequest方法来解析HTTP请求报文，使用`https(true)`参数指定使用HTTPS协议。

接下来使用`FuzzMethod`方法来对HTTP请求方法进行模糊测试，将"POST"、"GET"两种种方法作为参数传入，这些方法将被用于构造HTTP请求的方法字段，生成上述两个不同的数据包。

#### 请求路径

同样的也配备了针对请求路径的Fuzz的API：`FuzzPath`，还是传入一个请求路径的列表，改造一下上面的案例，一个针对请求路径的HTTP Fuzz数据生成案例：

```Go
raw = `GET / HTTP/1.1
Host: www.example.com

abc=1`
fuzz.HTTPRequest(raw, fuzz.https(true))~.FuzzPath("/a","/b","/a/b").Show()
/*
GET /a HTTP/1.1
Host: www.example.com
Content-Length: 5

abc=1
GET /b HTTP/1.1
Host: www.example.com
Content-Length: 5

abc=1
GET /a/b HTTP/1.1
Host: www.example.com
Content-Length: 5

abc=1
*/
```

此案例使用了`FuzzPath`方法对HTTP请求路径进行模糊测试，将"/a","/b","/a/b"三个路径作为参数传入，这些路径将被用于构造HTTP请求的路径字段，生成了上述三个不同的数据包。

除了`FuzzPath`这个API以外，Yak中还有另一个API可以使用：`FuzzPathAppend`此API可以在原有路径基础上追加新的路径，一个简单的案例如下：

```Go
raw = `GET / HTTP/1.1
Host: www.example.com

abc=1`
fuzz.HTTPRequest(raw, fuzz.https(true))~.FuzzPath("/prefix").FuzzPathAppend("A","B","C").Show()
/*
GET /prefix/A HTTP/1.1
Host: www.example.com
Content-Length: 5

abc=1
GET /prefix/B HTTP/1.1
Host: www.example.com
Content-Length: 5

abc=1
GET /prefix/C HTTP/1.1
Host: www.example.com
Content-Length: 5

abc=1
*/
```

此案例使用了`FuzzPathAppend`方法对HTTP请求路径进行模糊测试，不同于`FuzzPath`，`FuzzPathAppend`用于追加路径，会在原有的路径基础上向后追加路径，而不是一个完整的路径。

#### GET参数

在Yak的fuzz库中有四种常规的HTTP GET参数变形模式，需要注意的是这几种模式通常不希望被同时使用。

##### **参数整体原文**

直接变形参数原文的API是`FuzzGetParamsRaw`，此API直接操作URL的query部分，接收一个paramsRaw 列表，会使用此列表生成对应的变形数据包。这是一个清晰明了的案例：

```Go
raw = `GET /?a=b HTTP/1.1
Host: www.example.com

abc=1`
fuzz.HTTPRequest(raw, fuzz.https(true))~.FuzzGetParamsRaw("a=c","b=d&e=f").Show()
/*
GET /?a=c HTTP/1.1
Host: www.example.com
Content-Length: 5

abc=1
GET /?b=d&e=f HTTP/1.1
Host: www.example.com
Content-Length: 5

abc=1
*/
```

##### **单个指定参数**

只变形指定参数的API是`FuzzGetParams`。

此API可以单独操作一个GET参数。

```Go
raw = `GET /?a=b HTTP/1.1
Host: www.example.com

abc=1`
fuzz.HTTPRequest(raw, fuzz.https(true))~.FuzzGetParams("a",["c","d"]).Show()
/*
GET /?a=c HTTP/1.1
Host: www.example.com
Content-Length: 5

abc=1
GET /?a=d HTTP/1.1
Host: www.example.com
Content-Length: 5

abc=1
*/
```

上述案例中`FuzzGetParams`API的传入值分别为：**参数名**：`"a"`,**Fuzz数据集合（参数值）**: `["c","d"]`，Fuzz数据集合还可以是一个单个值如 `"c"`，单独这样看起来似乎比较鸡肋，但是搭配之前提过的Yak的 Fuzztag，如`{{i(1-3)}}`就可以通过少量的代码完成大量的数据生成，当然fuzztag也可以是列表中的一项，同样会被渲染。下面是一个简单的案例：

```Go
raw = `GET /?a=b HTTP/1.1
Host: www.example.com

abc=1`
fuzz.HTTPRequest(raw, fuzz.https(true))~.FuzzGetParams("a","{{i(1-3)}}").Show()
/*
GET /?a=1 HTTP/1.1
Host: www.example.com
Content-Length: 5

abc=1
GET /?a=2 HTTP/1.1
Host: www.example.com
Content-Length: 5

abc=1
GET /?a=3 HTTP/1.1
Host: www.example.com
Content-Length: 5

abc=1
*/
```

在fuzz库的API中像这样的Fuzz数据集合这样的输入形式会经常使用到。

##### **特别处理的GET参数**

- Json参数处理

fuzz库中还有更细粒度的GET参数变形API，当出现GET参数中存在JSON的情况。如：

```HTTP
GET /?a={"abc":"test"} HTTP/1.1
Host: www.example.com

abc=1
```

fuzz库中的API`FuzzGetJsonPathParams`可以使用jsonPath的方式操作指定的json节点。

此API原型是`FuzzGetJsonPathParams(key any, jsonPath string, val any)`，key是GET参数名，jsoPath需要操作的json节点的索引，val是Fuzz数据集合，可以是单个值也可以是列表。

一个简单的例子如下

```Go
raw = `GET /?a={"abc":"test"} HTTP/1.1
Host: www.example.com

abc=1`
fuzz.HTTPRequest(raw, fuzz.https(true))~.FuzzGetJsonPathParams(`a`, `$.abc`, [`aaa`,`bbb`]).Show()
/*
GET /?a=%7B%22abc%22%3A%22aaa%22%7D HTTP/1.1
Host: www.example.com
Content-Length: 5

abc=1
GET /?a=%7B%22abc%22%3A%22bbb%22%7D HTTP/1.1
Host: www.example.com
Content-Length: 5

abc=1

*/
```

- Base64编码参数

在一些渗透测试中有特殊的需求，需要在GET参数中传递一些需要编码的数据。

fuzz库同样包含针对这种情况的API：`FuzzGetBase64Params`，其调用和`FuzzGetParams`完全一致，唯一的不同是会将参数值Base64编码。案例如下：

```Go
raw = `GET /?a=b HTTP/1.1
Host: www.example.com

abc=1`
fuzz.HTTPRequest(raw, fuzz.https(true))~.FuzzGetBase64Params("a",["test","test2"]).Show()
/*
GET /?a=dGVzdA%3D%3D HTTP/1.1
Host: www.example.com
Content-Length: 5

abc=1
GET /?a=dGVzdDI%3D HTTP/1.1
Host: www.example.com
Content-Length: 5

abc=1
*/
```

- Base64编码的Json参数

一些情况下的Json参数为了避免编码处理问题，会将Json数据Base64编码之后作为参数值。

fuzz库中处理这种情况的API是：`FuzzGetBase64JsonPath`，此API的调用同`FuzzGetJsonPathParams`，不同的是此API会在解析和填入数据的时候分别对参数值进行Base64解码和Base64编码

```Go
//eyJhYmMiOiJ0ZXN0In0%3D {"abc":"test"}
raw = `GET /?a=eyJhYmMiOiJ0ZXN0In0%3D HTTP/1.1 
Host: www.example.com

abc=1`
fuzz.HTTPRequest(raw, fuzz.https(true))~.FuzzGetBase64JsonPath(`a`, `$.abc`, [`aaa`,`bbb`]).Show()
/*
GET /?a=eyJhYmMiOiJhYWEifQ%3D%3D HTTP/1.1
Host: www.example.com
Content-Length: 5

abc=1
GET /?a=eyJhYmMiOiJiYmIifQ%3D%3D HTTP/1.1
Host: www.example.com
Content-Length: 5

abc=1

*/
```

值得一提的是，”参数形式“的变形点是HTTP Fuzz的重要关注点，所以这类变形点（GET参数、Cookie、POST参数），都拥有上述这套API。即

- 整体原文处理API
- 单个参数处理API
- 特殊处理API
  - Json参数处理
  - Base64编码处理
  - Base64编码的Json参数处理

### HTTP请求头变形

#### 常规头部

对于常规的头部变形需求，fuzz库中提供的API是`FuzzHTTPHeader`。

```Go
raw = `GET / HTTP/1.1
Host: www.example.com
a: b

abc=1`
fuzz.HTTPRequest(raw, fuzz.https(true))~.FuzzHTTPHeader("a",["c","d"]).Show()
/*
GET / HTTP/1.1
Host: www.example.com
a: c
Content-Length: 5

abc=1
GET / HTTP/1.1
Host: www.example.com
a: d
Content-Length: 5

abc=1
*/
```

在此案例中，`FuzzHTTPHeader`接收了两个参数：**请求头名**：`"a"`，**Fuzz数据集合（请求头内容）：**`["c","d"]`，可以看到生成的数据包中有预期的两个头。

#### Cookie

##### **Cookie****原文整体变形**

首先是请求头级别的Cookie变形，使用的API是`FuzzCookieRaw`，此API是对之前提过的普通Header变形的一层封装，减少了指定请求头名的参数，固定为 “Cookie”，只需要传入请求头内容即可，构造 Fuzz数据包时候会将Cookie头整体进行变形替换。

```Go
raw = `GET / HTTP/1.1
Host: www.example.com
Cookie: a=b

abc=1`
fuzz.HTTPRequest(raw, fuzz.https(true))~.FuzzCookieRaw(["b=c","c=d"]).Show()
/*
GET / HTTP/1.1
Host: www.example.com
Cookie: b=c
Content-Length: 5

abc=1
GET / HTTP/1.1
Host: www.example.com
Cookie: c=d
Content-Length: 5

abc=1
*/
```

##### **细粒度单个****Cookie****变形**

Cookie作为安全测试的重要关注点，还需要更细粒度的API支持，所以fuzz中提供了针对单个Cookie变形的API：`FuzzCookie`，通过一个简单的案例来学习这个API。

```Go
raw = `GET / HTTP/1.1
Host: www.example.com
Cookie: a=b

abc=1`
fuzz.HTTPRequest(raw, fuzz.https(true))~.FuzzCookie("a",["c","d"]).Show()
/*
GET / HTTP/1.1
Host: www.example.com
Cookie: a=c
Content-Length: 5

abc=1
GET / HTTP/1.1
Host: www.example.com
Cookie: a=d
Content-Length: 5

abc=1
*/
```

上述案例中`FuzzCookie`传入的参数有：**Cookie****名**：`"a"`，**Fuzz数据集合（Cookie值）**：`["c","d"]`，可以看到生成的数据包中分别存在`Cookie: a=c`和`Cookie: a=d`

与GET参数变形相似，Cookie变形也有一些用于处理特殊情况的API，调用方式完全一致：

- `FuzzCookieBase64` ：处理base64编码的Cookie
- `FuzzCookieJsonPath`：更细粒度地处理Json格式的Cookie
- `FuzzCookieBase64JsonPath`：处理base64编码的Json格式的Cookie

这里就不一一举例了。

### HTTP请求体变形

学习HTTP请求体变形之前需要先认识一个HTTP 头部：`Content-Type`

`Content-Type` 是一个 HTTP 头部字段，它描述了**请求或响应的主体内容的类型**（MIME类型）。这个字段告诉对端如何解析主体内容，例如，是否将其视为HTML、纯文本、JSON数据等。正确设置 `Content-Type` 对于确保网络通信的互操作性非常重要。下面是一些常见的`Content-Type` 头部值:

- `text/html` 表示HTML文档，通常用于网页
- `application/json` 表示JSON格式的数据，常用于APIs
- `application/x-www-form-urlencoded` 提交表单数据时使用的默认编码类型
- `multipart/form-data` 用于表单提交，常在上传文件时使用

不同的`Content-Type`会有不同的**主体内容的类型**，因此fuzz库中有不同的API来应对不同的情况。

#### 请求体原文

对请求体变形的基础支撑API是`FuzzPostRaw`，此API用于请求体原文整体替换。

```Go
raw = `POST / HTTP/1.1
Host: www.example.com

a`
fuzz.HTTPRequest(raw, fuzz.https(true))~.FuzzPostRaw("b","c").Show()
/*
POST / HTTP/1.1
Host: www.example.com
Content-Length: 1

b
POST / HTTP/1.1
Host: www.example.com
Content-Length: 1

c
*/
```

案例中向`FuzzPostRaw`API传入了一个请求体数据列表，会根据传入的数据变形生成对应的数据包。

#### application/json：JSON参数

`Content-Type`为`application/json`时会使用JSON格式提交数据，fuzz库中配备了针对Json形式的HTTP请求体的API：`FuzzPostJsonParams`，此API可以针对Json格式请求体的指定节点进行变形。

```Go
raw = `POST / HTTP/1.1
Host: www.example.com

{"1":"2","a":"b"}`
fuzz.HTTPRequest(raw, fuzz.https(true))~.FuzzPostJsonParams("a",["c","d"]).Show()
/*
POST / HTTP/1.1
Host: www.example.com
Content-Length: 17

{"1":"2","a":"c"}
POST / HTTP/1.1
Host: www.example.com
Content-Length: 17

{"1":"2","a":"d"}
*/
```

在上述案例中，指定 **节点**：`"a"`，**Fuzz数据集合**：`["c","d"]`。是一个针对Json单个节点的Fuzz数据生成。可以看到只对单个节点生效，正确地生成对应的数据包。

#### **application/x-www-form-urlencoded：键值对参数**

提交表单数据时，使用默认使用`Content-Type`为`application/x-www-form-urlencoded`。在这种格式中，表单数据被编码为**键值对**，就像GET参数一样。

```HTTP
username=abc&password=123456
```

例如上述例子中的 POST 参数就是 `username` 和 `password`，它们的值分别是 `abc`和 `123456`

与GET参数和Cookie相同，fuzz库中处理**简单表单POST参数**的API也分为基础处理API和特殊处理API

- 基础单个参数处理

基础的参数处理的API是`FuzzPostParams`接下来通过一个简单的案例，迅速认识一下：

```Go
raw = `POST / HTTP/1.1
Host: www.example.com

a=b`
fuzz.HTTPRequest(raw, fuzz.https(true))~.FuzzPostParams("a",["c","d"]).Show()
/*
GET / HTTP/1.1
Host: www.example.com
Content-Length: 3

a=c
POST / HTTP/1.1
Host: www.example.com
Content-Length: 3

a=d
*/
```

上述案例中传入的参数意义为：**POST参数名**：`"a"`，**Fuzz数据集合（POST参数值）**：`["c","d"]`。

- 特殊参数处理
  -  调用方式一脉相承，无需赘述。
  - `FuzzPostBase64Params`：处理base64编码的POST参数
  - `FuzzPostJsonPathParams`：更细粒度地处理Json格式的POST参数
  - `FuzzPostBase64JsonPath`：处理base64编码的Json格式的POST参数

#### **multipart/form-data：文件参数**

##### 基础知识

`Content-Type`的`multipart/form-data`配置被设计用来处理表单数据，尤其是在需要上传文件时。由于文件通常是二进制数据，而不是简单的文本数据，因此需要一种机制能够在一个请求中同时发送文本（如表单字段）和二进制（如文件内容）数据。

###### 边界字符串

一个 `multipart/form-data` 类型的 POST 请求由多个部分组成，每个部分对应表单中的一个字段或文件。这些部分由一个**边界字符串**分隔，这个边界是一个在整个请求体中唯一出现的字符串，通常由一系列随机生成的字符组成。

请求头 `Content-Type` 会包含这个**边界字符串**，例如：

```HTTP
Content-Type: multipart/form-data; boundary=abcd
```

在这个例子中，`abcd` 就是**边界字符串**。接下来，请求体中的每个部分都会用 `--` 加上边界字符串来分隔

###### **`name`** **属性**

`name` 属性是表单控件的名称，用于在表单提交时将数据与该名称关联。每个表单元素都有一个 `name` 属性，它的值在提交表单时将作为数据的键发送到服务器，使得服务器能够识别不同的表单输入字段。

在 `multipart/form-data` 的每个部分中，`Content-Disposition` 头部会包含 `name` 属性，如下所示：

```Plaintext
Content-Disposition: form-data; name="textFieldName"
```

这里的 `"textFieldName"` 是表单中对应输入字段的名称。

###### **`filename`** **属性**

`filename` 属性用于文件上传控件。当用户选择上传文件时，`filename` 属性会包含上传文件的原始文件名。这个属性是可选的，只在 `input` 类型为 `file` 的表单元素中使用。它告诉服务器上传文件的名称，服务器可以使用这个名称来处理和存储文件。

在 `multipart/form-data` 的部分中，如果该部分包含一个文件，`Content-Disposition` 头部会扩展以包含 `filename` 属性，如下所示：

```Plaintext
Content-Disposition: form-data; name="fileFieldName"; filename="uploadedfile.png"
```

这里的 `"fileFieldName"` 是 `<input type="file" name="fileFieldName" />` 中的 `name` 属性值，而 `"uploadedfile.png"` 是用户上传的文件名。

###### 具体案例

下面是一个`multipart/form-data`格式POST请求的请求报文例子

假设有一个表单，其中包含一个文本字段 `username` 和一个文件字段 `avatar`，那么下面是一个可能的请求报文

```HTTP
POST /submit-form HTTP/1.1
Host: example.com
Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW

----WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="username"
admin
----WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="avatar"; filename="avatar.png"
Content-Type: image/png
...binary data...
----WebKitFormBoundary7MA4YWxkTrZu0gW--
```

这个 HTTP POST 请求包含了一个使用 `multipart/form-data` 编码的表单数据，请求的主体部分包含了两个不同的表单字段，一个是文本字段 `username`，另一个是文件字段 `avatar`。下面是对请求主体部分的详细分析：

1. `boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW`

这一行定义了用于分隔请求中多个部分的边界标识符。这个标识符是在请求头 `Content-Type` 中定义的，并且在请求的正文中重复出现，用于分隔表单中的每个字段。

1. `----WebKitFormBoundary7MA4YWxkTrZu0gW`

这一行是边界标识符的实例，表示一个表单字段的开始。

1. `Content-Disposition: form-data; name="username"`

这行描述了表单字段的内容配置。`name="username"` 指出了表单字段的名称是 `username`。

1. `admin`

这是 `username` 字段的值，即用户在表单中输入的用户名。

1. `Content-Disposition: form-data; name="avatar"; filename="avatar.png"`

这行描述了第二个表单字段的内容配置。`name="avatar"` 表明字段名称是 `avatar`，而 `filename="avatar.png"` 指出上传的文件名是 `avatar.png`。

1. `Content-Type: image/png`

这行指定了上传文件的 MIME 类型，这里是 `image/png`，表明上传的是一个 PNG 图像文件。

1. `...binary data...`

这部分是文件的二进制数据。在实际的 HTTP 请求中，这里会是文件的内容，但在这个示例中用省略号表示。

1. `----WebKitFormBoundary7MA4YWxkTrZu0gW--`

最后一个边界标识符，后面跟着两个连字符 `--`，表示表单数据的结束。

##### **文件内容**

首先是复杂表单中文件内容变形的API：`FuzzUploadFile`

API原型为`FuzzUploadFile(name any , filename any, content []byte)`，通过一个案例来快速认知一下：

```Go
raw = `GET / HTTP/1.1
Host: www.example.com

`
fuzz.HTTPRequest(raw, fuzz.https(true))~.FuzzUploadFile("a","abc.php","123").Show()
/*
GET / HTTP/1.1
Host: www.example.com
Content-Type: multipart/form-data; boundary=------------------------KsytTMFnXTlUNSfJkUGKXIxPKEEXcclcnrIXwzHV
Content-Length: 247

--------------------------KsytTMFnXTlUNSfJkUGKXIxPKEEXcclcnrIXwzHV
Content-Disposition: form-data; name="a"; filename="abc.php"
Content-Type: application/octet-stream

123
--------------------------KsytTMFnXTlUNSfJkUGKXIxPKEEXcclcnrIXwzHV--
*/
```

上述案例中传入API中的参数意义分别是，**表单字段名**：`"a"`，**上传文件名**：`"abc.php"`，**上传文件内容**：`"123"`。可以看到输出中各个部分的值也正确地被填充上了。

##### **文件名**

上面提到过的文件名属性`filename`，在fuzz库中对应的API是：`FuzzUploadFileName`

```Go
raw = `POST / HTTP/1.1
Host: www.example.com

`
fuzz.HTTPRequest(raw, fuzz.https(true))~.FuzzUploadFileName("a","abc{{i(1-2)}}.php").Show()
/*
POST / HTTP/1.1
Host: www.example.com
Content-Type: multipart/form-data; boundary=------------------------tLjDzleDfctsBEhVbcldMFdgROgcIIpFpPUFtGhW
Content-Length: 245

--------------------------tLjDzleDfctsBEhVbcldMFdgROgcIIpFpPUFtGhW
Content-Disposition: form-data; name="a"; filename="abc1.php"
Content-Type: application/octet-stream


--------------------------tLjDzleDfctsBEhVbcldMFdgROgcIIpFpPUFtGhW--

POST / HTTP/1.1
Host: www.example.com
Content-Type: multipart/form-data; boundary=------------------------tLjDzleDfctsBEhVbcldMFdgROgcIIpFpPUFtGhW
Content-Length: 245

--------------------------tLjDzleDfctsBEhVbcldMFdgROgcIIpFpPUFtGhW
Content-Disposition: form-data; name="a"; filename="abc2.php"
Content-Type: application/octet-stream


--------------------------tLjDzleDfctsBEhVbcldMFdgROgcIIpFpPUFtGhW--

*/
```

上述案例中传入API的参数的含义是：**表单字段名**：`"a"`，**Fuzz数据集合（上传文件名）**：`"abc{{i(1-2)}}.php"`。这里使用Yak的fuzztag，这里的例子可以表达`["abc1.php","abc2.php"]`这样的数据集。

##### 表单文本字段（POST参数）

复杂表单同样可以存在文本字段，也就是通常所说的POST参数，这种情况下的API是：`FuzzUploadKVPair`

直接来看一个案例：

```Go
raw = `POST / HTTP/1.1
Host: www.example.com

`
fuzz.HTTPRequest(raw, fuzz.https(true))~.FuzzUploadKVPair("a","{{i(1-2)}}").Show()
/*
POST / HTTP/1.1
Host: www.example.com
Content-Type: multipart/form-data; boundary=------------------------adDtCubXRLShZOVvkLpVclDfapqGGpCJpFwLOflA
Content-Length: 185

--------------------------adDtCubXRLShZOVvkLpVclDfapqGGpCJpFwLOflA
Content-Disposition: form-data; name="a"

1
--------------------------adDtCubXRLShZOVvkLpVclDfapqGGpCJpFwLOflA--

POST / HTTP/1.1
Host: www.example.com
Content-Type: multipart/form-data; boundary=------------------------adDtCubXRLShZOVvkLpVclDfapqGGpCJpFwLOflA
Content-Length: 185

--------------------------adDtCubXRLShZOVvkLpVclDfapqGGpCJpFwLOflA
Content-Disposition: form-data; name="a"

2
--------------------------adDtCubXRLShZOVvkLpVclDfapqGGpCJpFwLOflA--
*/
```

上述案例中传入API的参数的含义是：**表单字段名**：`"a"`，**Fuzz数据集合（表单字段值）**：`"{{i(1-2)}}"`。

## 8.2.4 高级HTTP Fuzz：自动发现参数

经过上一部分的学习，不难发现在HTTP Fuzz中 **参数** 是重点关注的测试点，fuzz库中针对参数的变形API也是最多的。

对于熟悉渗透测试的读者来说，他们可能会关心这样一个问题：在进行自动化渗透测试时，尤其是**处理用户输入或被动扫描得到的请求，往往并不可知请求中包含哪些参数**。在这种情况下，没有参数的具体信息，就不便于用上一部分介绍的API直接对请求包进行Fuzz变形操作。

为了应对这种情况，fuzz库引入一个新的**Fuzz 参数对象**：`FuzzHTTPRequestParam`。此对象的一些关键API如下：

```Go
type FuzzHTTPRequestParam struct {
  PtrStructMethods(指针结构方法/函数): 
      func Debug() return(*mutate.FuzzHTTPRequestParam) // 打印参数信息
      func DisableAutoEncode(v1: bool) return(*mutate.FuzzHTTPRequestParam) // 设置是否自动解码
      func Fuzz(v1 ...interface {}) return(mutate.FuzzHTTPRequestIf) // 填入Fuzz数据集合
      func GetFirstValue() return(string) // 获取Fuzz数据集合的第一个值
      func IsCookieParams() return(bool) // 判断是否是Cookie参数
      func IsGetParams() return(bool) // 判断是否是GET参数
      func IsGetValueJSON() return(bool) // 判断是否是Json格式的GET参数
      func IsPostParams() return(bool) // 判断是否是POST参数
      func Name() return(string) // 获取参数名
      func Position() return(string) // 获取参数Position
      func PositionVerbose() return(string) // 获取参数Position描述信息
      func Repeat(v1: int) return(mutate.FuzzHTTPRequestIf) // 设置 Fuzz重发次数
      func String() return(string) // 参数信息
      func Value() return(interface {}) // 获取参数原值
}
```

### 发现 Fuzz 参数对象

fuzz库中配备了一批用于自动发现 **Fuzz 参数对象**的API，接下来通过几个案例认识一下常用的获取API。

以此测试请求包为例，此测试数据包有**两个GET参数、两个****Cookie****参数、两个键值对格式的POST参数。**

```HTTP
POST /?get1=1&get2=2 HTTP/1.1
Host: www.example.com
Content-Type: application/x-www-form-urlencoded
Cookie: cookie1 = 1;cookie2 = 2

post1=1&post2=2
```

#### 发现 GET 参数 ：GetGetQueryParams

测试请求包中有两个GET参数`get1`和`get2`，下面是一个使用API `GetGetQueryParams` 自动发现这两个参数的示例：

```Go
raw = `POST /?get1=1&get2=2 HTTP/1.1
Host: www.example.com
Content-Type: application/x-www-form-urlencoded
Cookie: cookie1 = 1;cookie2 = 2

post1=1&post2=2`
params = fuzz.HTTPRequest(raw, fuzz.https(true))~.GetGetQueryParams()
for param in params{
    print(param.String())
}
/*
Name:get2                 Position:[GET参数(get-query)]
Name:get1                 Position:[GET参数(get-query)]
*/
```

此API无需输入参数，返回值是一个**Fuzz参数对象列表**。在上述示例中，API自动发现两个GET请求参数，并将它们包含在了返回的列表中。用户可以遍历这个列表以获取每个参数的详细信息。

#### 发现 Cookie 参数：GetCookieParams

同样使用测试请求包为例。观察请求包，发现其有两个Cookie 参数：`cookie1 = 1`和`cookie2 = 2`。使用`GetCookieParams`自动发现Cookie参数：

```Go
raw = `POST /?get1=1&get2=2 HTTP/1.1
Host: www.example.com
Content-Type: application/x-www-form-urlencoded
Cookie: cookie1 = 1;cookie2 = 2

post1=1&post2=2`
params = fuzz.HTTPRequest(raw, fuzz.https(true))~.GetCookieParams()
for param in params{
    print(param.String())
}
/*
Name:cookie1              Position:[Cookie参数(cookie)]
Name:cookie2              Position:[Cookie参数(cookie)]
*/
```

结果同样符合预期。

#### 发现 POST 参数

##### application/x-www-form-urlencoded：键值对参数

测试请求包里有两个`application/x-www-form-urlencoded`类型的键值对POST参数：`post1=1`和`post2=2`。对应的API是`GetPostParams`

```Go
raw = `POST /?get1=1&get2=2 HTTP/1.1
Host: www.example.com
Content-Type: application/x-www-form-urlencoded
Cookie: cookie1 = 1;cookie2 = 2

post1=1&post2=2`
params = fuzz.HTTPRequest(raw, fuzz.https(true))~.GetPostParams()
for param in params{
    print(param.String())
}
/*
Name:post1                Position:[POST参数(post-query)]
Name:post2                Position:[POST参数(post-query)]
*/
```

##### application/json：JSON参数

在变形数据的部分中有提到过不同的`Content-Type`会使请求体的数据格式不同，除了默认的`application/x-www-form-urlencoded`格式以外，`application/json`也是常用的一种格式。自动发现这种格式的参数的API是`GetPostJsonParams`

```Go
raw = `POST / HTTP/1.1
Host: www.example.com
Content-Type: application/json

{"a":"b","c":"d"}`
params = fuzz.HTTPRequest(raw, fuzz.https(true))~.GetPostJsonParams()
for param in params{
    print(param.String())
}
/*
Name:a                    JsonPath: $.a          Position:[JSON-Body参数(post-json)]
Name:c                    JsonPath: $.c          Position:[JSON-Body参数(post-json)]
*/
```

可以看到结果中获取到了Json参数的具体信息。

#### 发现常用参数：GetCommonParams

实际情况中测试人员还可能连参数的类型也无法确定，因此fuzz库中还有一些泛用的参数发现函数，可以自动发现整个请求包里的各类参数，其中推荐使用的是：`GetCommonParams`

此API会发现 **GET参数、****Cookie****参数、请求体参数（优先解析****JSON****格式）。**

仍然使用上面的测试数据包。

```Go
raw = `POST /?get1=1&get2=2 HTTP/1.1
Host: www.example.com
Content-Type: application/x-www-form-urlencoded
Cookie: cookie1 = 1;cookie2 = 2

post1=1&post2=2`
params = fuzz.HTTPRequest(raw, fuzz.https(true))~.GetCommonParams()
for param in params{
    print(param.String())
}
/*
Name:get1                 Position:[GET参数(get-query)]
Name:get2                 Position:[GET参数(get-query)]
Name:post1                Position:[POST参数(post-query)]
Name:post2                Position:[POST参数(post-query)]
Name:cookie1              Position:[Cookie参数(cookie)]
Name:cookie2              Position:[Cookie参数(cookie)]
*/
```

可以看到成功解析到了六个参数。

#### 更多发现参数API

fuzz库中还有更多形式发现参数API，下面简单介绍一下：

| 函数名               | 函数描述                                           |
| -------------------- | -------------------------------------------------- |
| GetGetQueryParams    | 发现GET参数                                        |
| GetPostJsonParams    | 发现Json格式的请求体参数                           |
| GetPostParams        | 发现键值对格式的请求体参数                         |
| GetCookieParams      | 发现Cookie参数                                     |
| GetPathAppendParams  | 发现路径参数（追加模式）                           |
| GetPathRawParams     | 发现路径参数（原文模式）                           |
| GetPathBlockParams   | 发现路径参数（分块模式）                           |
| GetPathParams        | 发现路径参数                                       |
| GetCommonParams      | 发现常用参数                                       |
| GetAllParams         | 发现所有参数                                       |
| GetHeaderParams      | 发现请求头参数                                     |
| GetHeaderParamByName | 通过请求头名发现请求头参数(只返回一个Fuzz参数对象) |

### 使用 Fuzz 参数对象

获取到 Fuzz 参数对象之后，只需调用其 `Fuzz`方法便可以方便地针对这个参数进行数据包变形。`Fuzz`方法的函数签名是：`Fuzz(i any...) FuzzHTTPRequest`

```Go
raw = `GET /?a=b&c=d HTTP/1.1
Host: www.example.com

`
params = fuzz.HTTPRequest(raw, fuzz.https(true))~.GetGetQueryParams()
for param in params{
    print(param.String())
    param.Fuzz("{{i(1-2)}}").Show()
}
/*
Name:a                    Position:[GET参数(get-query)]
GET /?a=1&c=d HTTP/1.1
Host: www.example.com


GET /?a=2&c=d HTTP/1.1
Host: www.example.com


Name:c                    Position:[GET参数(get-query)]
GET /?a=b&c=1 HTTP/1.1
Host: www.example.com


GET /?a=b&c=2 HTTP/1.1
Host: www.example.com

*/
```

此案例中，先通过`GetGetQueryParams`获取到GET Fuzz参数对象列表，再遍历此列表，依次调用 Fuzz参数对象的`Fuzz`方法，传入 **Fuzz数据集合**完成Fuzz数据包生成，此API返回值是一个 HTTP Fuzz对象，接下来即可使用此构造好的HTTP Fuzz对象进行模糊测试。

相信读者看到这一步，已经明白了 Yak 是如何做 HTTP Fuzz 的基础设施的，作为编程人员编写的脚本可以十分短小精炼，笔者在编写教程的时候，也尽量把代码控制在一眼就能看完的长度。

