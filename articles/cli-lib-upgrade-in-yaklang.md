#  CLI参数助力MITM插件升级，起飞！   
原创 rookie  Yak Project   2024-08-02 17:30  
  
![](/articles/wechat2md-57d4b38fb5fac67b077017855ed50c43.gif)  
![](/articles/wechat2md-b904917540c9ce445abf66c529954953.png)  
![](/articles/wechat2md-86c50d1335bf9aedf70735cb71de0c84.png)  
![](/articles/wechat2md-b98f40869426f24cfc00c63ca06fa2e9.png)  
  
为了解决上述问题，yakit在本周的更新中支持了在 **MITM中间人劫持** 和 **插件调试** 部分使用带 CLI参数的 MITM 插件。  
  
一个简单的案例是  
```
test = cli.String("input", cli.setRequired(true))
cli.check()

# mirrorHTTPFlow 会镜像所有的流量到这里，包括 .js / .css / .jpg 这类一般会被劫持程序过滤的请求
mirrorHTTPFlow = func(isHttps /*bool*/, url /*string*/, req /*[]byte*/, rsp /*[]byte*/, body /*[]byte*/) {
    yakit.Output(sprintf("input data %s", test))
}
```  
此插件可以接收一个cli参数，然后在流量经过的时候将其发送给yakit，写好这样的代码会发现在参数预览一栏中已经有了对应的参数存在。  
  
![](/articles/wechat2md-69f4aa1c8530b91a1e523e8de578798d.png)  
  
输入参数执行也成功地在日志中打印了参数数据。  
  
![](/articles/wechat2md-4fa98ee982a6cdde3dc1054820c8d067.png)  
  
![](/articles/wechat2md-c11c749d598baf7b5f23f085647980b3.png)  
  
之前在社区中有师傅提到需要测试越权的插件，需要配置低权限账户的cookie，但是每次都去修改插件的源码略显繁琐。  
  
在本周更新之后可以通过Cli参数来动态设置cookie。接下我们就来简单实现一个越权测试插件的demo。  
  
![](/articles/wechat2md-89ccb9e018812d29043a0c36c497257b.png)  
  
这是一个非常简单的越权检测插件，可以通过 cli 参数动态设置一个低权限的cookie ，在mitm hook中替换掉高权限的cookie，再发送一个数据包，比较两次数据包的，检查是否有权限问题  
```
oc.replaceHeader("Cookie", lowCookie),poc.https(isHttps))
        log.error("send low permissions cookie request err %s", err)
        if lowRsp == rsp {
            risk.NewRisk(
            url,
            risk.title("越权访问"),
            risk.severity("high"),
            risk.titleVerbose("越权访问"),
            risk.details({
                "target": url,
                "request": lowReq,
                "response": lowRsp,
            }),
            risk.description("越权访问"),
            risk.solution("增强权限检查")
            )
        } 
    }
}
```  
  
但是这样简单的检测逻辑是不够在实战中使用的，很多页面是本身就不需要鉴权的，无论使用什么身份访问都是返回相同的响应，这样会出现大量的误报情况，所以可以再丰富一下插件的逻辑，来减少误报的可能性。  
```
lowCookie = cli.Text("lowCookie", cli.setRequired(true),cli.setVerboseName("低权限cookie"))
website = cli.String("website",cli.setRequired(true),cli.setVerboseName("目标检测网站"))
pathPrefix = cli.String("pathPrefix", cli.setRequired(true),cli.setVerboseName("路径前缀过滤"))
```  
  
再加入两个cli参数   
- Website ：指定只检测某个网站  
  
- pathPrefix：指定网站路径前缀 只做敏感的路径检查  
  
```
mirrorHTTPFlow = func(isHttps , url , req , rsp , body ) {
    urlIns,err =  str.ParseStringUrlToUrlInstance(url)
    if err != nil{
        log.error("parse url string to url instance err %s", err)
        return
    }
    if urlIns.Host != website || str.HasPrefix(urlIns.Path, pathPrefix){
        return
    }

    if poc.GetHTTPPacketHeader(req,"Cookie") != ""{
        lowRsp,lowReq,err = poc.HTTP(req, poc.replaceHeader("Cookie", lowCookie),poc.https(isHttps))
        log.error("send low permissions cookie request err %s", err)
        if lowRsp == rsp {
            risk.NewRisk(
            url,
            risk.title("越权访问"),
            risk.severity("high"),
            risk.titleVerbose("越权访问"),
            risk.details({
                "target": url,
                "request": lowReq,
                "response": lowRsp,
            }),
            risk.description("越权访问"),
            risk.solution("增强权限检查")
            )
        } 
    }
}
```  
  
### 单个调试  
  
****  
在单个插件执行这些额外的参数是放在 固定输入的上方  
  
![](/articles/wechat2md-3a2c11e14431edf55101891d40f83baa.png)  
  
直接输入即可  
  
### MITM中间人劫持  
  
在mitm中间人劫持模块的插件栏在更新之后分出了带参数部分。  
  
![](/articles/wechat2md-5f20509fcdfa1bf87efad3f924e67a1b.png)  
  
只需要点击插件输入参数即可加载成功。  
  
![](/articles/wechat2md-3be08397b31190bf8cb0c6aba9a0f764.png)  
  
![](/articles/wechat2md-21388f4cf4d5ec25df37aad927ae46b2.png)  
  
使用Vulinbox的越权靶场验证一下   
  
先注册两个账户 yak、yaklang   
  
先使用获取一个yak账户的cookie： **_cookie=7d367973-c806-436d-a2e0-778eec224b6e**  
  
再抓取一个yaklang账户访问自身信息的数据包：  
```
GET /logic/user/profile?id=24 HTTP/1.1
Host: 127.0.0.1:8787
Cookie: _cookie=7d367973-c806-436d-a2e0-778eec224b6e
Sec-Fetch-Mode: navigate
sec-ch-ua-platform: "Windows"
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36
Sec-Fetch-Dest: document
sec-ch-ua: "Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"
Referer: http://127.0.0.1:8787/logic/user/login
Sec-Fetch-Site: same-origin
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
Accept-Encoding: gzip, deflate, br, zstd
Sec-Fetch-User: ?1
Accept-Language: zh-CN,zh;q=0.9
sec-ch-ua-mobile: ?0

```  
  
![](/articles/wechat2md-9c577a636716eab560aab7844d0662fa.png)  
  
使用调试插件执行   
  
![](/articles/wechat2md-64a3b28e66761d2aaa5fa65e08acc301.png)  
  
成功检测漏洞  
  
![](/articles/wechat2md-ad840b75e8c3d40e25012740aaf2a8c2.png)  
  
  
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