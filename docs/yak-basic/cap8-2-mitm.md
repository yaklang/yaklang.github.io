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

# 8.3 中间人劫持技术：MITM

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

