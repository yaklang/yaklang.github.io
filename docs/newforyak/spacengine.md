---
sidebar_position: 4
---

# 网络空间引擎信息收集

前面一些简单小课程，我们主要讲述了如何使用 yak 进行扫描端口，但是有时候，我们针对互联网大量的设备取扫描端口，本身是一件比较奇怪的事情。

:::caution
漫无目的的扫描无异于大海捞针
:::

本节，我们将会学习 yak 更为强大的一面：

1. 内置 shodan API 的接口，可以直接获取 shodan 的数据（以 Wordpress 为例）。
2. 我们对 shodan 获取到的特定数据进行简单筛选，尝试对 Wordpress 的后端进行访问和分析

## shodan API 快速开始

其实我们发现，我们要实现这些常见的功能，已经并不需要手动去寻找库，我们的内置 API 可以完成这部分操作，最基础的代码我们可以看如下样例

```go
shodanToken := cli.String("token")
maxRecord := cli.Int("max-record")
if maxRecord <= 0 {
    maxRecord = 100
}

ch, err := spacengine.ShodanQuery(shodanToken, "wordpress", spacengine.maxRecord(maxRecord))
die(err)

for result := range ch {
    addr := result.Addr
    println(result.Addr)
}
```

当我们执行了上面的结果，我们得到如下结果

![简单shodan API](../../static/img/lesson2_1.jpg)

## 处理 Shodan 中的结果

其实正常来说，到了这一步，关于网络空间引擎的简介与使用应该已经结束了，但是作为作者，当然希望用户使用 yak 来做更加富有想象力的事情。

我们获取到了一批机器地址，想要对上面的内容进行进一步测试，或者进一步处理，应该如何操作呢？

:::info

毕竟有时候，我们也并不能确定网络空间引擎上的目标一定是活跃的目标，可能是旧的，过时的。

所以，我们如何验证上述目标都是有效的呢？

我们以访问 wordpress 后台为例来简要描述一下 yak 支持的另一项强大的操作。

:::

### 可能是迄今为止最强大的 fuzz 模块

fuzz 是在二进制领域最常见的操作之一，零零星星也有人在 web 领域提到这个概念和操作，但是我们并没有找到特别棒的 webfuzz 手段。

长久以来我们会困在工具中迷失方向，webfuzz 相关的工具其实早就有了，大多针对一个 HTTP 请求进行变形操作；其实这个概念在 Burpsuite 的 Intruder 中很常见了。

但是如果用户想要编程实现一套这种操作，进行各种创造力的判断和验证自己的漏洞检测算法和模型是否工作，需要大量的技术积累，这些基础设施本来就是一个不低的门槛。

所幸的是，我们在 yak 中实现了这一套操作，可以支持用户自己针对一个请求或一批请求进行批量的模糊测试，简单写一个脚本来展示一下 yak 神奇的 Fuzz 功能。

```go
// 预先设置一些想要 fuzz 的目标
urls := [
    "https://www.baidu123.com",
    "https://qq123asfa.com/",
    "https://exampleijasdf.com/",
    "10.3.0.142:8082",
    "abcdefadsfasdt.com",
]

// 根据 URL 生成可以用于 Fuzz 的 HTTP 请求组
req, err := fuzz.UrlsToHTTPRequests(urls...)
die(err)

// 针对这些请求进行 Fuzz
//    FuzzPath("/target-path")     可以针对 Path 进行变换
//    FuzzMethod("GET", "POST")    针对 HTTP 请求的方法进行 Fuzz（使用 GET / POST）
//    .Results()                   返回 Fuzz 的结果，([]*http.Request, error)
reqs, err := req.FuzzPath("/target-path").FuzzMethod("GET", "POST").Results()
die(err)

for _, result := range reqs {
    println("____________________________________________")
    http.show(result)
}
```

当我们执行上述脚本，我们发现，很多不同的数据包被 `http.show(result)` 打印在了屏幕上，并且我们设置 `/target-path` 和 `GET`，`POST` 方法都已经生效了，样例结果如下：

```http
____________________________________________
GET /target-path HTTP/1.1
Host: www.baidu123.com
Content-Length: 0


____________________________________________
POST /target-path HTTP/1.1
Host: www.baidu123.com
Content-Length: 0


...
...
...
____________________________________________
POST /target-path HTTP/1.1
Host: 10.3.0.142:8082
Content-Length: 0


____________________________________________
GET /target-path HTTP/1.1
Host: 10.3.0.142:8082
Content-Length: 0


____________________________________________
POST /target-path HTTP/1.1
Host: 10.3.0.142:8082
Content-Length: 0


____________________________________________
GET /target-path HTTP/1.1
Host: abcdefadsfasdt.com
Content-Length: 0


____________________________________________
POST /target-path HTTP/1.1
Host: abcdefadsfasdt.com
Content-Length: 0


____________________________________________
GET /target-path HTTP/1.1
Host: www.abcdefadsfasdt.com
Content-Length: 0


____________________________________________
POST /target-path HTTP/1.1
Host: www.abcdefadsfasdt.com
Content-Length: 0


____________________________________________
GET /target-path HTTP/1.1
Host: abcdefadsfasdt.com
Content-Length: 0


____________________________________________
POST /target-path HTTP/1.1
Host: abcdefadsfasdt.com
Content-Length: 0


____________________________________________
GET /target-path HTTP/1.1
Host: www.abcdefadsfasdt.com
Content-Length: 0


____________________________________________
POST /target-path HTTP/1.1
Host: www.abcdefadsfasdt.com
Content-Length: 0

```

简简单单的几个 url 我们可以把他们变成任意的请求

> 当然，我们 Fuzz 的参数位置不仅仅只能是 Method 和 Path，我还可以测试 Get 参数，Post 参数，甚至与 Post 参数中的 Json 数据
> 甚至，我们测试的 Path 中，也可以加入可变参数（高级话题我们之后在议）
>
> 其实 fuzz 模块的全部功能非常强大，理论上可以实现任何形式的数据包的模糊测试。

### 我们甚至可以批量发起 HTTP 请求：`httpool.Pool`

在上一节中，我们可以批量生成 HTTP 请求，与此同时，我们可以配套发起批量请求，同时支持并发，针对请求的结果进行筛选和分析，检查目标的各种状态和特征，达到我们的目的。

接下来，我们对上一个脚本进行一些改造，增加了批量请求的功能 `httpool.Pool`，请看下面的请求内容：

```go
// 预先设置一些想要 fuzz 的目标
urls := [
    "https://www.baidu123.com",
    "https://qq123asfa.com/",
    "https://exampleijasdf.com/",
    "10.3.0.142:8082",
    "abcdefadsfasdt.com",
]

// 根据 URL 生成可以用于 Fuzz 的 HTTP 请求组
req, err := fuzz.UrlsToHTTPRequests(urls...)
die(err)

// 针对这些请求进行 Fuzz
//    FuzzPath("/target-path")     可以针对 Path 进行变换
//    FuzzMethod("GET", "POST")    针对 HTTP 请求的方法进行 Fuzz（使用 GET / POST）
//    .Results()                   返回 Fuzz 的结果，([]*http.Request, error)
reqs, err := req.FuzzPath("/target-path").FuzzMethod("GET", "POST").Results()
die(err)

// 请求池，可以同时对多个 request 请求进行访问，并返回结果
rsps, err := httpool.Pool(reqs, httpool.size(10))
die(err)

// 简单展示一下请求的结果
for rspDict := range rsps {
    println("-----------------------")
    if rspDict.error != nil {
        printf("request error: %v for\n%v\n", rspDict.error, rspDict.request)
    }else{
        http.show(rspDict.response)
    }
}
```

当我们执行了上述脚本，我们获取到了结果

```go
-----------------------
request error: dial www.qq123asfa.com:80 failed: dial tcp: lookup www.qq123asfa.com: no such host for
&{GET https:///target-path HTTP/1.1 1 1 map[Content-Length:[0] Host:[www.qq123asfa.com]] {} <nil> 0 [] false www.qq123asfa.com map[] map[] <nil> map[]  /target-path <nil> <nil> <nil> <nil>}
-----------------------
request error: dns failed for querying: qq123asfa.com for
&{GET https:///target-path HTTP/1.1 1 1 map[Content-Length:[0] Host:[qq123asfa.com]] {} <nil> 0 [] false qq123asfa.com map[] map[] <nil> map[]  /target-path <nil> <nil> <nil> <nil>}
-----------------------
request error: dns failed for querying: exampleijasdf.com for
&{GET https:///target-path HTTP/1.1 1 1 map[Content-Length:[0] Host:[exampleijasdf.com]] {} <nil> 0 [] false exampleijasdf.com map[] map[] <nil> map[]  /target-path <nil> <nil> <nil> <nil>}
-----------------------
request error: dns failed for querying: www.exampleijasdf.com for
&{POST https:///target-path HTTP/1.1 1 1 map[Content-Length:[0] Host:[www.exampleijasdf.com]] {} <nil> 0 [] false www.exampleijasdf.com map[] map[] <nil> map[]  /target-path <nil> <nil> <nil> <nil>}
-----------------------
request error: dns failed for querying: abcdefadsfasdt.com for
&{POST https:///target-path HTTP/1.1 1 1 map[Content-Length:[0] Host:[abcdefadsfasdt.com]] {} <nil> 0 [] false abcdefadsfasdt.com map[] map[] <nil> map[]  /target-path <nil> <nil> <nil> <nil>}
-----------------------
request error: dns failed for querying: www.abcdefadsfasdt.com for
&{GET http:///target-path HTTP/1.1 1 1 map[Content-Length:[0] Host:[www.abcdefadsfasdt.com]] {} <nil> 0 [] false www.abcdefadsfasdt.com map[] map[] <nil> map[]  /target-path <nil> <nil> <nil> <nil>}
...
...
...
-----------------------
request error: read failed: empty with: Err[read empty: %!s(<nil>)] for
&{GET https:///target-path HTTP/1.1 1 1 map[Content-Length:[0] Host:[www.baidu123.com]] {} <nil> 0 [] false www.baidu123.com map[] map[] <nil> map[]  /target-path <nil> <nil> <nil> <nil>}
-----------------------
request error: dial 10.3.0.142:80 failed: dial tcp 10.3.0.142:80: i/o timeout for
&{POST https:///target-path HTTP/1.1 1 1 map[Content-Length:[0] Host:[10.3.0.142:8082]] {} <nil> 0 [] false 10.3.0.142:8082 map[] map[] <nil> map[]  /target-path <nil> <nil> <nil> <nil>}
-----------------------
request error: dns failed for querying: qq123asfa.com for
&{POST https:///target-path HTTP/1.1 1 1 map[Content-Length:[0] Host:[qq123asfa.com]] {} <nil> 0 [] false qq123asfa.com map[] map[] <nil> map[]  /target-path <nil> <nil> <nil> <nil>}
-----------------------
request error: dns failed for querying: exampleijasdf.com for
&{POST https:///target-path HTTP/1.1 1 1 map[Content-Length:[0] Host:[exampleijasdf.com]] {} <nil> 0 [] false exampleijasdf.com map[] map[] <nil> map[]  /target-path <nil> <nil> <nil> <nil>}
...
...
...
```

当然，我们的目标是虚拟的，但是其实也可以看到了，我们确实对批量的 HTTP 发起了请求，并且拿到了结果。

## 最终组合拳：针对 Shodan 的结果进行测试

当我们学习到了如何使用 Fuzz 之后，我们发现，我们可以针对第一节提到的 Shodan 结果进行批量测试，我们可以进行复杂的测试，但是为了教学方便，我们只批量请求 `/wp-admin/admin.php` 这个路径，简单打印出结果

1. 获取 Shodan API KEY 查询 Wordpress 相关资产
2. 根据 Wordpress 资产，构建请求组
3. 发动请求，获取 HTTP 请求结果

```go
shodanToken := cli.String("token")
maxRecord := cli.Int("max-record")
if maxRecord <= 0 {
    maxRecord = 100
}

if shodanToken == "" {
    println("empty shodan token")
}

println("fetch param：Shodan Key: ", shodanToken)
println("start to query shodan data")
// 查询 Shodan 的接口，获取 wordpress 的搜索结果
ch, err := spacengine.ShodanQuery(shodanToken, "wordpress", spacengine.maxRecord(maxRecord))
die(err)

addrs = []
for result := range ch {
    printf("fetch shodan target: %v\n", result.Addr)
    addrs = append(addrs, result.Addr)
}

println("为了简单教学，我们只取 10 个请求")
// 为了简单，我们只取 10 个请求
if len(addrs) > 10 {
    addrs = addrs[:10]
}

println("start to build fuzz http requests")
// 把搜索结果的 Addrs 转变成 Fuzz 请求组
fuzzReqs, err := fuzz.UrlsToHTTPRequests(addrs...)
die(err)

println("start build requests with PATH: ", `/wp-admin/admin.php`)
// 针对请求组，进行批量测试，请求 wp-admin/admin.php
requests, err := fuzzReqs.FuzzPath("/wp-admin/admin.php").Results()
die(err)

println("stat to send http request batch...")
loglevel("info")
rsps, err := httpool.Pool(requests)
die(err)

for rspDict := range rsps {
    if rspDict.response != nil {
        printf("%v\n", string(rspDict.response))
    }
}
```

上述脚本我们执行成功之后获取到的结果如下（为了避免麻烦，我们隐去了实际扫描的目标）：

```bash
fetch param：Shodan Key:  vO5*********************eEM
start to query shodan data
fetch shodan target: 47.*******.70:443
fetch shodan target: 35.*******..220:80
fetch shodan target: 184.*******.1:80
fetch shodan target: 104.*******.09:443
...
...
...
fetch shodan target: 62.*******..244:443
fetch shodan target: 173.2*******.02:443
fetch shodan target: 104.*******.10:80
fetch shodan target: 52.*******.140:80
fetch shodan target: 185*******.7.160:443
为了简单教学，我们只取 10 个请求
start to build fuzz http requests
start build requests with PATH:  /wp-admin/admin.php
stat to send http request batch...
[INFO] 2021-05-29 18:42:34 +0800 [default:http_pool.go:81] start to send to http://188.******.85/wp-admin/admin.php
[INFO] 2021-05-29 18:42:34 +0800 [default:http_pool.go:81] start to send to http://104******47.72/wp-admin/admin.php
[INFO] 2021-05-29 18:42:34 +0800 [default:http_pool.go:81] start to send to http://35.******6.220/wp-admin/admin.php
[INFO] 2021-05-29 18:42:34 +0800 [default:http_pool.go:81] start to send to http://134******08.140/wp-admin/admin.php
[INFO] 2021-05-29 18:42:34 +0800 [default:http_pool.go:81] start to send to http://47.******170/wp-admin/admin.php
[INFO] 2021-05-29 18:42:34 +0800 [default:http_pool.go:81] start to send to http://176******9.197/wp-admin/admin.php
[INFO] 2021-05-29 18:42:34 +0800 [default:http_pool.go:81] start to send to http://91.******2.237/wp-admin/admin.php
[INFO] 2021-05-29 18:42:34 +0800 [default:http_pool.go:81] start to send to http://184.******91/wp-admin/admin.php
[INFO] 2021-05-29 18:42:34 +0800 [default:http_pool.go:81] start to send to http://149.******.202/wp-admin/admin.php
[INFO] 2021-05-29 18:42:34 +0800 [default:http_pool.go:81] start to send to http://159.******.52/wp-admin/admin.php
HTTP/1.1 302 Found
Date: Sat, 29 May 2021 10:42:34 GMT
Server: Apache/2.4.6
X-Powered-By: PHP/7.0.27
Expires: Wed, 11 Jan 1984 05:00:00 GMT
Cache-Control: no-transform, no-cache, must-revalidate, max-age=0
X-Redirect-By: WordPress
Location: https://159.******3.52/wp-admin/admin.php
Content-Length: 0
Content-Type: text/html; charset=UTF-8


HTTP/1.1 302 Found
Date: Sat, 29 May 2021 10:42:34 GMT
Server: Apache/2.4.29 (Ubuntu)
Expires: Wed, 11 Jan 1984 05:00:00 GMT
Cache-Control: no-cache, must-revalidate, max-age=0
X-Redirect-By: WordPress
Location: https://184******.91/wp-admin/admin.php
Content-Length: 0
Content-Type: text/html; charset=UTF-8


HTTP/1.1 403 Forbidden
Date: Sat, 29 May 2021 10:42:34 GMT
Server: Apache/2.4.25 (Debian)
Content-Length: 279
Content-Type: text/html; charset=iso-8859-1

<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
<html><head>
<title>403 Forbidden</title>
</head><body>
<h1>Forbidden</h1>
<p>You don't have permission to access this resource.</p>
<hr>
<address>Apache/2.4.25 (Debian) Server at 176******.197 Port 80</address>
</body></html>

HTTP/1.1 404 Not Found
Server: nginx
Date: Sat, 29 May 2021 10:42:34 GMT
Content-Type: text/html
Content-Length: 5891
Connection: keep-alive
Keep-Alive: timeout=20
Vary: Accept-Encoding
ETag: "5e3e2a50-1703"

<!DOCTYPE html>
<html>
<head>
    <title>Site Not Configured | 404 Not Found</title>
</head>

<body>
    <style>
	@import url(//fonts.googleapis.com/css?family=Open+Sans:300);

    body {
    color: #000;
    font-family: 'Open Sans Regular', Helvetica, Arial, sans-serif;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.2;
    margin: 50px 25px;
    }

    h1 {
    font-size: 200px;
    color: #44BCC8;
    font-weight:300;
    margin:0;
    padding:0;
    }

    h2 {
    font-weight:300;
    margin:0;
    padding:0;
    }

    hr {
    background:#DFDFDF;
    height: 1px;
    border:0;
    margin: 20px 0 30px;
    }

    a {
    color: #44BCC8;
    text-decoration: none;

    }

    a:hover {
    text-decoration: underline;
    }

    p {
	    margin-bottom:40px;
    }

    .admin {
	    margin-bottom:1em;
    }

    .logo {
    font-size: 12px;
    margin-top:20px;
    }

    .logo img {
    border : 0;
    outline : none;
    position: relative;
    top: 7px;
    padding-left:5px;
    }
    </style>

    <h1>404</h1>

    <h2>The site you were looking for couldn't be found.</h2>

        <hr>

    <p class="admin">
	    This domain is successfully pointed at WP Engine, but is not configured for an account on our platform.
	    <ul>
		    <li>If you just signed up, we're still likely creating your account.</li>
		    <li>Did you <a href="http://wpe******om/support/add-domain-in-user-portal/">add this domain to your install</a>?</li>
<li>Did you point DNS to the correct <a href="http://wpen******m/support/find-ip/">IP address</a> or <a href="http://wp******om/support/cname/">CNAME</a>?</li>

	    </ul>

	    If you've completed the steps above, or need more help, please <a href="https://m******gine.com/support">contact us</a> and we can help get your site up and running in no time.
    </p>

    <hr>

    <p class="logo">
	    Hosted by <a href="https://ww******ine.com"><img height="25px" src="data:image/png;base64,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"></a>
    </p>
</body>
</html>

HTTP/1.1 302 Found
Server: nginx
Date: Sat, 29 May 2021 10:42:35 GMT
Content-Type: text/html; charset=UTF-8
Content-Length: 0
Connection: keep-alive
Expires: Wed, 11 Jan 1984 05:00:00 GMT
Cache-Control: no-cache, must-revalidate, max-age=0
X-Redirect-By: WordPress
Location: https://188******.85/wp-admin/admin.php


HTTP/1.1 302 Found
Server: nginx
Date: Sat, 29 May 2021 10:42:36 GMT
Content-Type: text/html; charset=UTF-8
Transfer-Encoding: chunked
Connection: keep-alive
Expires: Wed, 11 Jan 1984 05:00:00 GMT
Cache-Control: no-cache, must-revalidate, max-age=0
X-Redirect-By: WordPress
Location: http://ust******s.com/wp-login.php?redirect_to=http%3A%2F%2F149******202%2Fwp-admin%2Fadmin.php&reauth=1

0


HTTP/1.1 302 Found
Date: Sat, 29 May 2021 10:42:34 GMT
Server: Apache
Expires: Wed, 11 Jan 1984 05:00:00 GMT
Cache-Control: no-cache, must-revalidate, max-age=0
X-Frame-Options: SAMEORIGIN
Location: http://47.******70/wp-login.php?redirect_to=http%3A%2F%2F47******.170%2Fwp-admin%2Fadmin.php&reauth=1
Content-Length: 0
Content-Type: text/html; charset=UTF-8


HTTP/1.1 403 Forbidden
Date: Sat, 29 May 2021 10:42:34 GMT
Server: Apache/2.4.18 (Ubuntu)
Content-Length: 280
Content-Type: text/html; charset=iso-8859-1

<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
<html><head>
<title>403 Forbidden</title>
</head><body>
<h1>Forbidden</h1>
<p>You don't have permission to access this resource.</p>
<hr>
<address>Apache/2.4.18 (Ubuntu) Server at 134******.140 Port 80</address>
</body></html>

HTTP/1.1 302 Found
Date: Sat, 29 May 2021 10:42:34 GMT
Server: Apache
Expires: Wed, 11 Jan 1984 05:00:00 GMT
Cache-Control: no-cache, must-revalidate, max-age=0
X-Redirect-By: WordPress
Location: https://35.******220/wp-admin/admin.php
Content-Length: 0
Content-Type: text/html; charset=UTF-8


HTTP/1.1 302 Found
Server: nginx
Date: Sat, 29 May 2021 10:42:35 GMT
Content-Type: text/html; charset=UTF-8
Content-Length: 0
Connection: keep-alive
Expires: Wed, 11 Jan 1984 05:00:00 GMT
Cache-Control: no-cache, must-revalidate, max-age=0
X-Redirect-By: WordPress
Location: https://91.******.237/wp-admin/admin.php

...
...
...

```

我们发现，进行上述请求之后，我们顺利拿到了批量请求的结果，可以初步确认一些目标的状态，指纹信息。

这个时候，大家可以发挥自己的想象力去做自己想做的事儿了

## 第三课小总结

当我们完成学习了这门小教程，其实已经可以完成一些非常棒的工具的编写了，很多这类工具其实在 Github 上有很多 Star。

我们发现，在 yak 提供的基础设施中，我们可以很容易的完成一些安全测试人员常见的操作，甚至可以完成的更好，更快。

我想这就是我们这门语言的意义所在吧？