#  不夸张，MITM真是网安人的神器   
Q16G  Yak Project   2024-07-19 17:28  
  
![](/articles/wechat2md-57d4b38fb5fac67b077017855ed50c43.gif)  
  
#   
#   
  
![](/articles/wechat2md-03d98d951f4627887508345df64f47a7.png)  
![](/articles/wechat2md-eeb9db18f654c38ee264fee22d4bc08e.png)  
![](/articles/wechat2md-52339620690b57bffc7cedac4ec32940.png)  
  
内置规则 主要是在被动扫描部分，从mitm经过的请求包/返回包会在这部分进行规则匹配，在渗透测试过程中，我们会常常发现有信息泄漏、框架指纹、密钥、配置信息泄漏等，他们都在返回包的不同位置进行展示，我们可以编写规则来进行检测。  
  
  
![](/articles/wechat2md-ba8f7939d3cae8341f9331feb45a4667.png)  
  
在yak中也内置了一部分内容规则来使用，我们可以点击右侧的齿轮⚙️来进行查看和编写规则。内置的规则偏向于信息泄漏部分，可以扩充自己的cms或者OA的指纹规则，或者导入自己的规则。（也可以勾选mitm插件）格式为：  
  
```
[
    {
        "Rule": "M1-Server 已启动，您可以使用移动设备登录M1",
        "NoReplace": true,
        "Color": "green",
        "EnableForResponse": true,
        "EnableForHeader": true,
        "EnableForBody": true,
        "Index": 1,
        "ExtraTag": [
            "致远 M1"
        ],
        "VerboseName": "致远 M1"
    }
 ]
 
```  
  
 ![](/articles/wechat2md-bf2fb9bfa74053756ce830cf70eff089.png)  
  
###   
  
![](/articles/wechat2md-f7126ff220d643dd58910df75c410972.png)  
  
下游代理的意思是，请求在经过yak-mitm之后流向的一个下游监听地址。可以配置但不仅限于下面的几种。  
- 内网穿透在公网上的映射（内网渗透常用，无特征）  
  
- 出口代理可以配置本地的出口代理，比如clash，v2ray等  
  
- 和扫描器进行联动使用。  
  
使用前请先安装证书，参考 Yakit 证书安装。  
  
![](/articles/wechat2md-9d34e9981c58280c66538f77dca2b960.png)  
  
热加载指的是在我们mitm在对经过流量的request、response进行hook，主要分为下面几种。  
  
#### 流量镜像：  
- mirrorHTTPFlow：镜像全流量  
  
- mirrorFilteredHTTPFlow：镜像过滤流量  
  
- mirrorNewWebsite：每新出现一个网站，这个网站的第一个请求，将会在这里被调用！  
  
- mirrorNewWebsitePath：每新出现一个网站路径，关于这个网站路径的第一个请求，将会在这里被传入回调  
  
- mirrorNewWebsitePathParams：每新出现一个网站路径且带有一些参数，参数通过常见位置和参数名去重，去重的第一个 HTTPFlow 在这里被调用  
  
####   
#### 流量劫持：  
- hijackHTTPRequest：劫持http流量。  
  
- beforeRequest：发送到服务端之前进行hook。  
  
- afterRequest：再对返回包进行hook。  
  
上面介绍了这么多的流量镜像函数和流量劫持函数，在热加载的时候到底如何正确的使用，将通过下面的几个常见场景来进行介绍。  
  
#### 场景分析1：对网站的返回包进行分析  
  
下面针对于网站返回包中含有js代码，我们想获取到js中的请求路径，我们选择的是mirrorNewWebsitePath。启动一个简单的demo，返回包的内容如下。  
```
[
    {
        "Rule": "M1-Server 已启动，您可以使用移动设备登录M1",
        "NoReplace": true,
        "Color": "green",
        "EnableForResponse": true,
        "EnableForHeader": true,
        "EnableForBody": true,
        "Index": 1,
        "ExtraTag": [
            "致远 M1"
        ],
        "VerboseName": "致远 M1"
    }
 ]
 
```  
  
在热加载中使用的代码为：  
> 思路：用xpath取出script中的内容，用syntax-flow来进行js分析  
  
```
mirrorNewWebsitePath = func(isHttps /*bool*/, url /*string*/, req /*[]byte*/, rsp /*[]byte*/, body /*[]byte*/) {
    htmlnode:=xpath.LoadHTMLDocument(string(body))~
    res = xpath.Find(htmlnode, `//script`)
    for _,node :=range res{
        script = xpath.InnerText(node)
        if script!=""{
            prog:=ssa.Parse(script.Trim(" ","\n"), ssa.withLanguage(ssa.Javascript))~
            result :=prog.SyntaxFlowWithError(`.open(,* #-> * as $param)`)~
            yakit_output(result.GetAllValues())
        }
    }
}
```  
  
![](/articles/wechat2md-71d2db1486ce11ceb105c572b7b5a002.png)  
####   
#### 场景分析2：对请求包中的某个参数进行加密或者修改  
  
选择到的hijackHTTPRequest或者beforeRequest，这里我选择使用hijackHTTPRequest，需求：  
我们需要手动添加auth header头。  
加密可以使用codec里面的插件  
```
hijackHTTPRequest = func(isHttps, url, req, forward /*func(modifiedRequest []byte)*/, drop /*func()*/) {
    req = poc.ParseBytesToHTTPRequest(req)~
    if req.Host=="10.211.55.11:8133"{
        forward(poc.ReplaceHTTPPacketHeader(req, "Auth", "123"))
    }else{
        return req
    }
}
```  
  
![](/articles/wechat2md-e4825069175b6429c3ec7d442f229248.png)  
  
#### 场景分析3：对返回包进行解密  
  
可以选择hijackHTTPResponse、afterRequest,这里选择一个hijackHTTPResponse，场景需求：返回包内容是进行的base64解密，我们需要进行解密。热加载代码如下  
```
hijackHTTPResponse = func(isHttps, url, rsp, forward, drop) {
    host,port = str.ParseStringToHostPort(url)~
    if host=="10.211.55.11"{
        body = poc.GetHTTPPacketBody(rsp)
        _body = codec.DecodeBase64(body)~
        forward(poc.ReplaceHTTPPacketBody(rsp, _body))
    }else{
        forward(rsp)
    }
}

```  
  
 ![](/articles/wechat2md-385a5b95f0c3e91daef7dbd7038458f1.png)  
  
  
![](/articles/wechat2md-7886ea743a45bf3367c512f279ab6c3d.png)  
  
yak-mitm在多个场景中有不同的应用，热加载模式是可以直接对request和response进行劫持和hook，可以和ssa进行很好的融合。是一个非常方便的功能。内置规则和内置插件也在渗透测试过程中有发挥更好的效果。  
  
  
**END**  
  
  
 **YAK官方资源**  
  
  
Yak 语言官方教程：  
https://yaklang.com/docs/intro/Yakit 视频教程：  
https://space.bilibili.com/437503777Github下载地址：  
https://github.com/yaklang/yakitYakit官网下载地址：  
https://yaklang.com/Yakit安装文档：  
https://yaklang.com/products/download_and_installYakit使用文档：  
https://yaklang.com/products/intro/常见问题速查：  
https://yaklang.com/products/FAQ  
  
![](/articles/wechat2md-8764ec1e71cc199b4b0b0bfb3a12e542.other)  
  
![](/articles/wechat2md-304b45488320344b4c7cdbd5759ee4e8.gif)  
  
  
