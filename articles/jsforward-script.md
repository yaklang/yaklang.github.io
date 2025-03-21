#  一种简单又强势的Js-Forward脚本编写方式   
原创 Yak  Yak Project   2025-01-16 17:30  
  
![](/articles/wechat2md-57d4b38fb5fac67b077017855ed50c43.gif)  
  
听牛牛说  
  
先这样，在这样，最后再这样  
  
![](/articles/wechat2md-36a05d88c96156790360b0ea843ac25f.png)  
  
一个  
**Js-Forward脚本**  
就写出来了  
  
你学废了吗？  
  
![](/articles/wechat2md-0cc4843bf310c753fea8d1f840e83881.webp)  
  
  
![](/articles/wechat2md-242ec68fbf912c4bbce11471dee4fde9.png)  
  
J  
S  
-Forward是一款可以配合抓包软件的脚本，脚本的功能是可以将js里面的参数通过Http请求将参数发送出来，在外部(例如Yakit的MITM中)进行修改，最后将修改后的返回值再替换回原参数。在一些特定场景是可以方便做功能测试。比较常见是在JS加密解密场景下使用。  
  
一个简单的时序图如下：  
  
![](/articles/wechat2md-340fd4eaf495490ed96bd381a4d24851.png)  
  
![](/articles/wechat2md-4ef96531788f3c6e4a70c222c7c4bccb.png)  
  
**原版Js-Forward地址：**  
  
https://github.com/G-Security-Team/JS-Forward/  
  
原版Js-Forward的脚本比较简短，实际上原理也非常简单，我们拿最重要的两个服务器处理函数进行解析：  
  
```
class ForwardRequestHandler(BaseHTTPRequestHandler):
    def do_POST(self):
        content_length = int(self.headers.get('content-length'， 0))

        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin'，'*')
        self.end_headers()
        data = self.rfile.read(content_length)
        if str(self.path) == "/REQUEST":
            r = requests.request('REQUEST'， 'http://127.0.0.1:{}/'.format(ECHO_PORT)，
                                 proxies={'http': 'http://127.0.0.1:{}'.format(BURP_PORT)}，
                                 data=data)
            new_data = r.text
            self.wfile.write(new_data.encode('utf8'))
        else:
            try:
                r = requests.request('RESPONSE'， 'http://127.0.0.1:{}/'.format(ECHO_PORT)，
                                     proxies={'http': 'http://127.0.0.1:{}'.format(BURP_PORT)}，
                                     data=data)
                new_data = r.text
                self.wfile.write(new_data.encode('utf8'))
            except:
                self.wfile.write(data)
```  
  
  
以上是其中一个转发HTTP服务器的处理函数，在接收到POST请求时将请求转发到另外一个Echo服务器（对应时序图中的第一步），并且途中设置代理为BurpSuite端口的代理，以此来让外部对请求参数进行修改。在收到响应时，直接将原始的响应写回给客户端即可（对应时序图的第四步）。  
```
class RequestHandler(BaseHTTPRequestHandler):
    def do_REQUEST(self):
        content_length = int(self.headers.get('content-length', 0))
        self.send_response(200)
        self.end_headers()
        self.wfile.write(self.rfile.read(content_length))

    do_RESPONSE = do_REQUEST
```  
  
这个是另外一个Echo服务器的处理函数，直接将收到的请求体原封不动地写入响应体即可。  
  
![](/articles/wechat2md-f5ce5f624d1f7f4922da9af57fe169d4.png)  
  
Js-Forward的核心函数就是以上两个函数，在了解了Js-Forward原理之后，有一个常见的疑问是为什么会有一个”多余“的Echo服务器。  
  
实际上这个答案很简单，即我们不能直接将请求发给MITM代理，因为代理会将请求发到真实的服务器，并将响应返回给客户端，如果我们不将请求发给Echo服务器而是发给其他服务器或者目标服务器，显然我们无法将响应体作为修改后的请求参数来使用。  
  
![](/articles/wechat2md-2a0deed7924249268818237afb21fad9.png)  
  
使用yaklang自带的httpserver库，我们可以很轻易地启动一个http server。一个简单的echo server例子如下：  
```
httpserver.Serve("127.0.0.1", 18888, httpserver.handler(func(w, req) {
    w.WriteHeader(200)
    rawRequest = http.dump(req)~ // 获取完整的请求数据包
    body = poc.GetHTTPPacketBody(rawRequest) // 获取请求体
    if len(body) > 0{
        w.Write(body)
    }
}))
```  
  
需要注意的是通常我们会使用协程来启动http server，因为httpserver.Server函数本身是阻塞的.  
  
![](/articles/wechat2md-2c67c27a5b0b878aeb620933e5b8551b.png)  
  
参考原版的Js-Forward脚本，我们可以很轻松地编写出来对应Yaklang版本的Js-Forward脚本。现在脚本可以在插件商店中搜索"Js-Forward"来下载使用。这里贴出全部代码：  
```
varname = cli.String("varname", cli.setVerboseName("参数名"), cli.setRequired(true), cli.setHelp("要转发的参数名"))
vartyp = cli.StringSlice("vartyp", cli.setVerboseName("变量类型"), cli.setRequired(true), cli.setSelectOption("字符串", "string"), cli.setSelectOption("Json", "json"))
yakit_port = cli.Int("yakit_port", cli.setVerboseName("Yakit MITM端口"), cli.setDefault(8083))
cli.check()

vartyp = vartyp[0]

port = os.GetRandomAvailableTCPPort()
echo_port = os.GetRandomAvailableTCPPort()
jsCode = f`var xhr = new XMLHttpRequest();xhr.open('POST', 'http://127.0.0.1:${port}', false);xhr.send(${varname});${varname}=xhr.responseText;`
if vartyp == "json" {
    jsCode = f`var xhr = new XMLHttpRequest();xhr.open('POST', 'http://127.0.0.1:${port}', false);xhr.send(JSON.stringify(${varname}));${varname}=JSON.parse(xhr.responseText);`
}
yakit.Info("将上述代码复制到找到的加密函数开头,变量定义之后(需要注意的是变量是否为常量,如果是常量则要改成变量)")
yakit.Code(jsCode)
getbody = func(req) {
    r = req.Body
    body, _ = io.ReadAll(r)
    return body
}

go httpserver.Serve("127.0.0.1", echo_port, httpserver.handler(func(w, req) {
    w.WriteHeader(200)
    body = getbody(req)
    if len(body) > 0{
        w.Write(body)
    }
}))
go httpserver.Serve("127.0.0.1", port, httpserver.handler(func(w, req) {
    opts = []
    body = getbody(req)
    opts.Append(poc.replaceBody(body, false), poc.proxy(f"http://127.0.0.1:${yakit_port}"))
    rsp, _, err = poc.Post(f`http://127.0.0.1:${echo_port}`, opts...)
    if err != nil {
        yakit.Error(err.Error())
        return
    }
    origin = req.Header["Origin"]
    if len(origin) > 0 {
        w.Header().Set("Access-Control-Allow-Origin", origin[0])
    }
    w.WriteHeader(200)
    w.Write(rsp.GetBody())
}))

ch = make(chan any)
<-ch
```  
  
代码中有几处关键的地方值得注意：  
1. 使用cli库我们可以很轻松地获取用户的输入  
  
1. 需要判断变量类型来对变量进行额外处理（JSON.Parse/JSON.stringify）  
  
1. http服务器要额外处理CORS的问题,将origin原封不动写回去即可，否则响应会被浏览器的CORS策略拦截。  
  
![](/articles/wechat2md-9af219a8b3d4091e70a502ed2d755493.png)  
  
这里以**encrypt-labs**  
(  
**https://github.com/SwagXz/encrypt-labs**)中的第一个题目为例：  
  
![](/articles/wechat2md-1ca9297c06beeccefdadc5ef3606e3c9.png)  
1. 分析html与js代码，发现其会调用sendDataAes这个函数，在easy.js中找到该函数，并且发现我们输入的数据会赋值够jsonData:  
  
![](/articles/wechat2md-487d4bd03012b7ff702dc3f71c561f56.png)  
  
这里需要注意的是jsonData是常亮，后续修改前需要将const改为var/let，让该变量可以被修改。  
1. 打开Js-Forward插件，填写对应的参数并运行：  
  
![](/articles/wechat2md-bdaae9ba268b77d5f20f8b3005aa1ccd.png)  
1. 将输出的代码块复制，并放到变量定义的后面：  
  
![](/articles/wechat2md-f2fcae4a89e682d88027a5046dcf3b38.png)  
  
![](/articles/wechat2md-791434ec552fd360f30a9c4e8c7046c8.png)  
1. 保存修改的代码，并启动Yakit MITM服务器，需要注意端口为8083，或者在第二步中修改Js-Forward的Yakit MITM端口号：  
  
![](/articles/wechat2md-98c0a627905080f6de41e545311bb5ec.png)  
1. 在靶场中随意填写用户名和密码，并点击数据发送接口为：AES固定KEY，此时MITM应该会接收到请求：  
  
![](/articles/wechat2md-d6f91527104e0c81b4daed7a99133dd5.png)  
1. 修改请求中的明文参数，用户名为admin,密码为123456并点击提交数据：  
  
![](/articles/wechat2md-c6007184eb5090597ee5ef4b5c5f3bfd.png)  
1. 靶场提示登录成功，即证明Js-Forward正常工作，成功跳过了加密的步骤：  
  
![](/articles/wechat2md-ffed9a4ad11183d281005809c7334341.png)  
  
![](/articles/wechat2md-689c95040f56da86acef385ab3d4286a.png)  
  
一个很明显的问题是，Js-Forward只能用于手工的渗透测试，只是略过了JS中的前端加密，而没法用于我们去批量对账号密码进行爆破（上文靶场中所希望的）。  
  
对于这种前端加密的爆破，我们仍然需要分析出加密流程（或者找到加密函数），并且利用模拟JS执行（例如Yaklang中的js库）或手动编写其他语言的代码的方式来实现加密流程以进行爆破。关于模拟JS执行来进行爆破的案例可以参考以往公众号文章。  
  
  
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
  
![](/articles/wechat2md-382b711760574d429c6c8742ecfc1d9b.png)  
  
![](/articles/wechat2md-304b45488320344b4c7cdbd5759ee4e8.gif)  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
