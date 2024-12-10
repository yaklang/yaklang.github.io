#  渗透测试高级技巧：分析验签与前端加密（一）   
原创 V1ll4n  Yak Project   2023-09-14 17:30  
  
![](/articles/wechat2md-a21f7f554b250d8a30f8ee4262a40bc7.gif)  
  
#   
# 本文作者V1ll4n，预计阅读时间16分钟  
  
![](/articles/wechat2md-190f024d0e6c4b2e6bb458b02993c794.png)  
  
  
  
**“开局一个登录框”**  
  
在黑盒的安全测试的工作开始的时候，打开网站一般来说可能仅仅是一个登录框；很多时候这种系统往往都是自研或者一些业务公司专门研发。最基础的情况下，我们会尝试使用 SQL 注入绕过或者爆破之类的常规手段，如果可以成功，那皆大欢喜；但是随着甲方系统研发的迭代与额外安全要求，简单的抓包重访变得非常困难。有什么容易的办法吗？本篇文章先为大家呈上两个秘技~  
  
Yak  
  
![](/articles/wechat2md-91bceff07c24aac49e9ec2ce6f64f200.png)  
  
01  
  
  
**秘技一：破解验签防篡改**  
#   
> 签名验证（又叫验签或签名）是验证请求参数是否被篡改的一种常见安全手段，验证签名方法主流的有两种，一种是 KEY+哈希算法，例如 HMAC-MD5 / HMAC-SHA256 等，另外生成签名的规则可能为：username=*&password=*。在提交和验证的时候需要分别对提交数据进行处理，签名才可以使用和验证  
  
  
在给请求签名的情况下，如果重访过程中，数据修改了然而签名没有修改，那就意味服务器可以因为“签名不一致”随时拒绝掉我们的用户请求。  
  
为了方便大家理解这个过程，我们可以通过一个简单的案例向大家介绍这种前端安全防护技术：  
  
![](/articles/wechat2md-fcb83f5b0434ef66d24eb14819cdedc6.png)  
  
当我们把这个表单提交给后端之后，将会看到后端的验证结果：分别是 “签名验证成功”，“用户名密码验证失败”  
  
![](/articles/wechat2md-c318dd0f64926a9f823787290f7e8cdf.png)  
  
这说明我们可以从网站提供的表单简单发起了一个可以过验签的请求，但是并不能过认证；当然能不能过认证都要看“缘分”了。  
  
![](/articles/wechat2md-151d5edc5897dd0c05900660571b46ab.png)  
  
  
**验签真的可以防爆****破吗？**  
  
  
##   
  
验签是一个很基础的对数据包完整性和篡改防护的保护策略，他在大多数时候可以应对简单的修改，例如：我们在 Yakit 手动劫持中，劫持到验证数据包，然后直接进行修改：  
  
![](/articles/wechat2md-3f83bc2000b7f51b8805bfbf039a8b2a.png)  
  
在这种情况下，我们想要重放数据包，从 password  
这个字段入手，爆破一下密码，自然也是不行的：那么难道真的就一筹莫展了嘛？  
  
![](/articles/wechat2md-6004e7e53f5d87495b22e5366f8ae8f6.png)  
  
大家深入思考验签的流程，就很容易想到，只要修改数据的时候，连带签名一起修改掉就好了。那么我们应该如何做这个事情呢？首先用户需要很清楚如下几点：  
  
**01**  
  
  
  
  
大部分签名的逻辑都藏在前端 JavaScript 中；  
  
**02**  
  
  
  
  
签名中字段的顺序一般来说是有意义的，JavaScript 中的 Object Properties 是有顺序的；  
  
**03**  
  
  
  
  
JavaScript 签名的算法可能用的算法库一般不需要用户手动实现，找出算法一般就可以开始实现了。  
  
为了让大家更清楚这个过程，大家可以跟随笔者的操作一步一步  
**复现分析过程：**  
  
![](/articles/wechat2md-506e388d96f70f92dcbbdb55cff2d802.png)  
  
我们通过浏览器操作直接定位到 HTML 元素（为了方便大家观察，我们直接把 HTML 元素复制在下面的代码块中）：  
```
<form id="json-form" class="mt-4">
        <div class="mb-3">
            <label for="username" class="form-label">UserName</label>
            <input id="username" class="form-control" type="text">
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input id="password" class="form-control" type="text">
        </div>
        <button id="submit" type="submit" class="btn btn-primary">Submit</button>
    </form>
```  

  
我们要记住 id='json-form'  
这个表格内的内容，，在验签的时候，多半是需要操作 DOM 元素取值计算的。细心的读者可能发现了，这个表格和我们有时候见到的表格是不一样的，他没有action  
也没有method  
，一般来说，在没有这些东西情况下，有两种情况：  
  
**01**  
  
  
  
  
（大概率）表单提交事件会忽略掉默认浏览器行为，直接通过 JavaScript 来操作的  
  
**02**  
  
  
  
  
表单只提交到当前页面使用默认的 method 方法  
  
在看页面内容中，我们发现 &lt;script&gt;
中有一段 JavaScript 代码比较明显，从generateKey  
到Encrypt  
和Decrypt  
应有尽有，这个很明显这个表单就是通过 JS 去操作的了。  
> 重新整理一下思路我们想到，JS 操作表单提交数据的话，一般有几种方式？笔者在这里列出一些基础的特性，大家可以有一个印象：  
> 通过创建一个form元素然后执行他的submit方法来实现，一般来说特征代码是使用 `constform Instance = document.createElement("form"); ... ;formInstance.submit()`使用 `AJAX：var xhr = new XMLHttpRequest(); ... xhr.open("POST", '/submit', true);`使用 `jQuery Ajax：$.ajax(...)`通过 JavaScript fetch 函数实现使用第三方库例如Axios API实现  
  
  
![](/articles/wechat2md-6ed1830e75f159d65ee8af8d9722edd7.png)  
  
我们通过上述描述的内容，可以很容易分析出这个表单提交和验签算法的基础逻辑：  
  
**01**  
  
  
  
  
生成一个 KEY，默认为 16 位数 1234123412341234  
  
**02**  
  
  
  
  
从表单中获取用户填写的用户名和密码进入getData()函数中  
  
**03**  
  

  
  
  
  
用户数据用户名密码字符串排列拼接好之后，使用Encrypt函数为他计算签名  
  
**04**  
  
  
  
  
把计算的结果和 KEY 进行 JSON.stringify(...)处理后通过fetch提交  
  
因此，如果我们要重放这个请求，一定需要经过验签。对应的验签名逻辑根据描述其实非常好做，我们简单实用 Yaklang 来实现一下（验签的核心函数是 HMacSha256）这在 Yaklang 中是有对应的函数的，只需要调用即可。  
```
result = codec.HmacSha256("1234123412341234", "username=admin&password=123456")~
result = codec.EncodeToHex(result)
dump(result)
// (string) (len=64) "7d113a1544cd53ff6c527c865511be4f18d4372a7fa571dbc035f0fc12b2b092"

func sign(user, pass) {
    return codec.EncodeToHex(codec.HmacSha256("123412341234", f`username=${user}&password=${pass}`)~)
}
```  
```

```  
  
我们通过简单的函数封装，就实现了和 JavaScript 相同的计算结果，那么我们可以完整地实现一下 Web Fuzzer 对验签的爆破过程：  
  
![](/articles/wechat2md-6abd882a352373b138703eec5e4e20c5.png)  
  
我们编写了一个几行的函数来承载核心的签名功能：  
```
func sign(user, pass) {
    return codec.EncodeToHex(codec.HmacSha256("1234123412341234", f`username=${user}&password=${pass}`)~)
}

signRequest = result => {
    pairs := result.SplitN("|", 2)
    dump(pairs)
    return sign(pairs[0], pairs[1])
}
```  
```

```  
  
这两个函数在热加载中可以通过 {{yak(signRequest|...)}}  
来调用，配合我们编写的标签，直接实现发包的时候签名，达到爆破的目的。  
  
![](/articles/wechat2md-a8cb4b69a9328f9d7acfd38d717e28f8.png)  
  
通过设置 fuzztag 的变量，我们直接对签名进行动态修改并且每一次都能验签成功，实际上已经可以进行爆破了！那么很自然的，我们可以设置变量中的 password  
 直接对有签名验证的登录点进行爆破。  
  
![](/articles/wechat2md-571d922c2682de7a49066f121c059b65.png)  
  
![](/articles/wechat2md-151d5edc5897dd0c05900660571b46ab.png)  
  
  
**签名并不能解决“明文密码传输”**  
  
  
##   
  
当我们学会测试带验签的接口的基本技能之后，我们会自我反省这个保护措施其实只是增加了操作的复杂度和难度，并不是真正的能解决“防篡改防重放的问题”。  
  
当然，我们的密码仍然在通信过程中**“明文传输”**；  
> “明文密码传输”的不合规项一直是一个备受争议的选项，甚至前些年大家觉得这就是用来“凑数”的安服报告内容。  
> 但是戏剧性的是，随着一些甲方单位真的全 API 通信上了加密之后，普通测试手段失效了，大家不再轻视这个问题，开始广泛讨论“如何绕过前端加密进行安全测试”这类话题。  
  
  
  
#   
  
02  
  
  
**秘技二：****渗透前端JS加密表单**  
# 当我们发现网站的管理员把“明文密码传输”这种问题拿上台面并且真的做了防护的时候，很多本来唾手可得的成果，突然就变得棘手。这要求我们老旧的工具需要进行升级，防护技术的更新换代自然要求安全测试技术也必须跟上。那么受到“使用 Yaklang 解决验签”技术的启发，我们其实可以使用同样的手段去解决一下明文密码传输的问题。  
  
那么，我们将会以：CryptoJS AES  
的前端加密技术来作为案例，为大家介绍这种技术（类似验签中的案例）：我们使用 Vulinbox 中的CryptoJS AES(CBC) 前端加密登陆表单  
这个靶场来为大家介绍这种防护的测试方案。  
  
![](/articles/wechat2md-a9c2143308cdbd9d069ca00402f8b81d.png)  
  
![](/articles/wechat2md-151d5edc5897dd0c05900660571b46ab.png)  
  
  
**了解你的对手**  
  
  
##   
  
在安全测试的过程中，**AES-CBC/ECB** 的组合可能是我们最常遇到的两种，很多同学对这两种组合其实并不清楚，那么我们应该如何测试这种相对比较常见的前端加密防护呢？工欲善其事，必先利其器，我们在测试之前，必须对基本的 JavaScript 加密的前端技术有一定认知：  
> 前端加密一般常用的是两个库，CryptoJS 和 jsrsasign，他们彼此侧重点其实是不一样的：  
>   
> CryptoJS 主要提供 AES，SHA，HMAC，PBKDF2 等加密算法，但是他不提供非对称公钥 RSA 或者椭圆曲线（ECC）算法；jsrsasign 主要提供的签名和非对称加密算法，比如 RSA / ECC 等，除此之外，JWT 的验证，X.509 的证书解析等也有借口  
> 这两个前端的关键加解密库对应的功能其实是互补的，并不能说我们只了解一个就能解决问题。在这一系列的教程中，我们也会为大家介绍他们各自擅长的加密场景和安全测试方法。  
> 但是读者可千万不能认为前端的加密解密只有这两个库，事实上这两个库只是被用的多而已，还有一些更“官方”支持的库。  
> Chrome 的 cryoto.subtle  
也是一个非常典型的加解密库，大家遇到的时候不要慌乱，他对 RSA 的支持也是可以实现加解密的。  
> 还有国密商密算法系列，SM2 椭圆曲线，SM4 等，我们之后将会为大家依次介绍。  
  
  
对于AES的CBC模式和ECB模式，我们需要知道他们的**区别和联系**才能方便后面的计算：  
明文是静态的 - 两个明文相同，那么他们密文也相同
对于 CryptoJS 来说，我们需要记住下面几个易错点：  
  
**01**  
  
  
  
  
`key = CryptoJS.enc.Utf8.parse(...) `是常见的构建加密密钥的代码，通过这种方式构建出来的代码，直接调用   
`key.toString()`得到的数据实际上是原值进行  
**十六进制编码**的结果  
  
**02**  
  
  
  
  
如果想要得到key的Base64编码需要  
`key.toString(CryptoJS.enc.Base64)`
  
**03**  

  
  
  
  
  
如果需要得到最原始的 key 的值（Utf8），则需要  
`key.toString(CryptoJS.enc.Utf8) ` 
  
**04**  
  
  
  
  
如果 CryptoJS 的密码不够16/24/32字节的时候，他的会首先使用NULL(0x00)补全到对应位数，如果超过了位数，将会把多余的字节丢掉  
  
当然  
，所  
有 CryptoJS 中的字符串都遵循基本相同的规律。  
  
![](/articles/wechat2md-151d5edc5897dd0c05900660571b46ab.png)  
  
  
**分析加解密JS代码**  
  
  
##   
  
读者通过了解我们上述的 JavaScript 加解密介绍，很容易能分析懂这个加密解密的实际过程关键点如下：  
  
![](/articles/wechat2md-3fa18ba07347f7efd9dae0ab577400fe.png)  
  
**01**  
  
  
  
  
密钥被硬编码（1234123412341234）  
  
**02**  
  
  
  
  
IV 是随机生成，也可以给一个固定值  
  
根据这个基本分析，我们再来审视这个页面将会有新的理解：  
  
IV 和 KEY 不变的话，加密的内容就不会变，我们只需要尝试使用 Yaklang 把这个密文用 IV 和 KEY 把内容解密，就可以验证了。  
```
data = {
  "data": "lvIsXDQECZuulFJf4FsG+MGESw+NHG0sp78Gz7uuFvYuABq/H4aHT7RDpNUoV5Yc",
  "key": "31323334313233343132333431323334",
  "iv": "0e32a6c40da89058b6451c717d648cb7"
}
keyBytes = codec.DecodeHex(data.key)~
ivBytes = codec.DecodeHex(data.iv)~
a = codec.AESCBCDecryptWithPKCS7Padding(keyBytes, codec.DecodeBase64(data.data)~, ivBytes)~
println(string(a))
// {"username":"admin","password":"123456"}
```  
  
我们发现解密出的内容非常符合预期，那么我们就可以着手准备我们的热加载代码了，需要模拟用户端的加密技术。为此我们编写一个热加载函数：  
```
// {{base64({{yak(aescbc|{"username":"admin","password":"{{x(pass_top25)}}"})}})}}
aescbc = result => {
    result = codec.AESCBCEncryptWithPKCS7Padding(
        codec.DecodeHex(`31323334313233343132333431323334`)~, 
        result, 
        codec.DecodeHex(`0e32a6c40da89058b6451c717d648cb7`)~,
    )~
    return string(result)
}
```  

  
这个加密函数其实非常简单，我们放入热加载代码之后，调试出一个可用的 Payload，然后再 Web Fuzzer 种尝试进行爆破；检查一批发送成功的结果。  
  
![](/articles/wechat2md-133d8601fdb4df792440069fb21ecdab.png)  
  
![](/articles/wechat2md-151d5edc5897dd0c05900660571b46ab.png)  
  
  
**成功爆破**  
  
  
##   
  
在我们基础验证之后，根据前面的一些经验，我们可以使用高级配置中的“变量”来加载我们的字典，达到爆破的目的：  
  
![](/articles/wechat2md-e4fc4b11227a63b2a360c4496023d043.png)  
  
  
03  
  
  
**中场休息**  
#   
  
经过上面的操作，读者跟随我们的引导，在 Vulinbox 应该基本可以完成一些基本前端加密场景的渗透工作了。但是真实的场景其实很多要比我们实现的这几个靶场要复杂得多，Yakit Web Fuzzer 的更深层次的技术我们仍然没有办法在短短这一篇中给大家介绍完全，在接下来的篇幅中，我们会在为大家介绍一些更复杂更高级的前端安全防护的对抗技术：  
  
![](/articles/wechat2md-66acb37976e5a2ebeeef9be3cdf201c9.png)  
  
**Loading...**  
  
**1、动态加载密钥 Key 的 AES 加密防护对抗**  
  
**2、SM2 + SM4 的加密防护对抗**  
  
**3、动态加载密钥的 RSA-OAEP 加密对抗**  
  
  
![](/articles/wechat2md-3b7f532e45a16cce6b793fb116652b44.png)  
  
  
**END**  
  
  
**Yak官方资源**  
  
Yak 语言官方教程：  
https://yaklang.com/docs/intro/Yakit 视频教程：  
https://space.bilibili.com/437503777Github下载地址：  
https://github.com/yaklang/yakitYakit官网下载地址：  
https://yaklang.com/Yakit安装文档：  
https://yaklang.com/products/download_and_installYakit使用文档：  
https://yaklang.com/products/intro/常见问题速查：  
https://yaklang.com/products/FAQ  
  
![](/articles/wechat2md-5408ebaecab12337dcc9232ada0921cf.jpeg)  
  
**长按识别添加工作人员**  
  
开启Yakit进阶之旅  
  
![](/articles/wechat2md-e1bc9272cb0aae3ca8afd1734c4d5591.jpeg)  
****  
