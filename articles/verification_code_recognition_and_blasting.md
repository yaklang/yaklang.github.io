#  拿不下总统之位，那就用热加载拿下验证码识别与爆破好了！   
原创 Yak  Yak Project   2024-11-08 17:31  
  
![](/articles/wechat2md-57d4b38fb5fac67b077017855ed50c43.gif)  
  
大家好，这里是在总统选举中**惜败**的超级牛  
  
![](/articles/wechat2md-f1b2e0388a2f03ef1566973c06848d57.png)  
  
虽然没能拿下阿美利卡总统之位  
  
但是牛牛的**热加载**功能，却能轻松拿下**验证码的识别与爆破**  
  
![](/articles/wechat2md-15188eeeaf0c79d60b92b341f1486886.jpeg)  
  
  
![](/articles/wechat2md-9a1fca0d6d160c150f933eaece35e23e.png)  
  
![](/articles/wechat2md-c1f79c63aacd87f977df3ac644e5761f.png)  
  
验证码一般会在注册、登录等功能，用来防止自动化工具的攻击。一般的验证码生成过程如下图所示：  
  
![](/articles/wechat2md-2eb12d7f85eb299c77f3dd6151794666.png)  
  
我们可以看到，验证码在访问功能页面的时候便已经生成，并且服务端在生成验证码的时候会将结果保存，并作为以用户输入的验证码做比较的依据。一般而言，验证码不具备复用性，在你输错验证码或者重新请求验证码接口的时候，后台便会刷新，并返回新的验证码，这大大提高了爆破的难度。  
  
![](/articles/wechat2md-f5b088e2dfd6190597b9696a177cab58.png)  
  
那么，Yakit的热加载如何进行验证码爆破呢？答案是我们需要让热加载参与到**客户端请求验证码**、**客户端接收验证码**和**客户端发送验证码**的生命周期中。如下图所示：  
  
![](/articles/wechat2md-bb53cf22379e0f1d33d7c5e79ddd4228.png)  
- 客户端请求验证码：在这个阶段，我们可以使用poc库发送HTTP请求，请求一份验证码。  
  
- 客户端接收验证码：这个阶段，在热加载中可以将服务端返回的图片验证码转化为base64形式，方便后续进行ocr图像识别。  
  
- 客户端发送验证码：将base64形式的图片数据发送到图像识别平台，或者在本地搭建的如ddddocr图像识别接口进行识别，然后将识别得到的验证码替换原始报文中验证码参数并发送。  
  
![](/articles/wechat2md-98dacf6ffcc356ff9d5a46ca629b4f34.png)  
  
理论形成，实践开始。  
  
这里以pikachu靶场中验证码绕过(on server)为例。  
  
![](/articles/wechat2md-7fb52f97c7ee3f907cd263bec850555a.png)  
  
我们先随便输入一些内容，并抓包查看内容。可以发现对验证码进行了识别：  
  
![](/articles/wechat2md-bca0d96cc8f7d2426574daed0c7ecafd.png)  
  
然后我们开始编写热加载代码。从热加载参与验证码爆破的声明周期可以知道，我们只要在发送数据包之前做处理就可以，即我们热加载代码写在beforeRequest函数内就行。  
  
![](/articles/wechat2md-13f432dc73840a405aab6cd096fe8e0d.png)  
  
首先通过查看验证码链接，知道验证码请求的接口为/pikachu/inc/showvcode.php,因此可以调用该接口得到验证码图像数据，并使用codec将其转化为base64的形式：  
```
rsp, _ := poc.Get(`http://127.0.0.1/pikachu/inc/showvcode.php`)~
imageData = rsp.GetBody()
base64Image := codec.EncodeBase64(imageData)
```  
  
![](/articles/wechat2md-a831ff85c3039ea3718dc367db431d28.png)  
  
这里使用验证码识别平台进行识别验证码，将api的token及图像数据作为POST的参数进行发送。api返回的是json格式的数据，这里使用json库获取识别到的信息。并将请求包的__verify__替换为验证码。__verify__为占位符，以方便对参数进行替换。  
```
apiURL = "http://api.example.com/api/ocr"   #验证码识别api
token = "xxxxxxx"  #toekn

rsp,_=poc.Post(apiURL, poc.appendPostParam("image", base64Image),poc.appendPostParam("token",token))~
result:=json.loads(rsp.GetBody())
code=json.Find(result, `$.data.data`)
req = re.ReplaceAll(req, `__verify__`, code)
```  
  
完整的热加载代码如下：  
```
// beforeRequest 允许发送数据包前再做一次处理，定义为 func(origin []byte) []byte
beforeRequest = func(req) {
    rsp, _ := poc.Get(`http://127.0.0.1/pikachu/inc/showvcode.php`)~
    imageData = rsp.GetBody()
    base64Image := codec.EncodeBase64(imageData)

    apiURL = "http://api.example.com/api/ocr"   #验证码识别api
    token = "xxxxxxx"  #toekn

    rsp,_=poc.Post(apiURL, poc.appendPostParam("image", base64Image),poc.appendPostParam("token",token))~
    result:=json.loads(rsp.GetBody())
    code=json.Find(result, `$.data.data`)
    req = re.ReplaceAll(req, `__verify__`, code)
    return []byte(req)
}
```  
  
请求包可以修改成如下，验证码参数使用__verify__作为占位符。然后账号和密码可以设置上自己的字典，并将并发线程设置为1，这样就能够爆破啦。  
  
![](/articles/wechat2md-913805fd14fa40dce649093a98cc97b2.png)  
  
最后可以看到验证码成功被识别出来  
  
![](/articles/wechat2md-b7b8768eb656293557cadbffc758d9e4.png)  
  
![](/articles/wechat2md-202cc2dd82f6bf09dbd40654c2894e5d.png)  
  
我们在社群接到小伙伴反馈说，所有设置都按照教程设置了，为什么验证码很多都没识别出来呢？这是这位小伙伴的热加载代码：  
  
![](/articles/wechat2md-635d535acc093f47dc606209531c5529.png)  
  
![](/articles/wechat2md-e6fe2fb6cc86255049b2ba8d993a96a7.png)  
  
我们发现它在handle2使用了热加载，但是由于fuzztag会预先进行渲染，渲染的时候会发送一次验证码API，导致验证码刷新，从而使得后续识别到的验证码与session绑定的验证码不一致。  
  
因此，在我们明确了热加载在验证码识别的生命周期，也就明白了为什么要写在**beforeRequest**里啦。  
  
![](/articles/wechat2md-dba49271ce3ba112432e5f27f19fc93e.png)  
  
热加载用来验证码识别或者csrf token的思路其实是一样的，只不过多了个ocr的步骤。本文使用的字母与数字组合验证码，但是只要明确热加载参与的生命周期，识别其它验证码思路也是一致的。  
  
  
**END**  
  
  
 **《CDSL-YAK 网络安全领域编程语言—从入门到实践》**  
  
超级牛新书出版！  
  
一本书带你CDSL-YAK从入门到起飞  
  
jd搜索关键词：CDSL-YAK 
  
  
  
****  
  
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
  
![](/articles/wechat2md-8764ec1e71cc199b4b0b0bfb3a12e542.other)  
  
![](/articles/wechat2md-304b45488320344b4c7cdbd5759ee4e8.gif) 
  
  
  
