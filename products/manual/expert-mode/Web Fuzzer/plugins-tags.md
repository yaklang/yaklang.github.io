---
sidebar_position: 22
---

# 插件标签

该标签语法会直接调用yak函数或者是编写好的yak插件，这几个标签会调用用户定义的函数。

**定义说明**
1. `{{yak(handle|params)}}` 此标签只能在webfuzzer 里面配置了热加载 函数之后使用params为传入的参数
2. `{{params}}` 此标签能方便用户动态获取不同的参数
3. `{{codec()}}` 次标签能直接调用Codec模块的插件

### 1 热加载简介
**技术核心：热加载 HotPatch**

众所周知，在 Yakit MITM 插件中，HotPatch 是一个非常有意思的设定，在劫持过程中，任何用户输入的 Yak 代码均可以随时加载到 MITM 过程中执行。

那么基于这项技术，我们在 Web Fuzzer 执行数据包修复和渲染之前，让用户输入一段 Yak 代码，我们利用类似 MITM 插件的 “热加载技术”，让 Yak 成为 Web Fuzzer 和用户自定义代码中的桥梁，编写 “函数”，在恰当的时候执行这个回调函数，就可以很好的实现标签核心代码 “图灵完备”。

**定义与详解**

我们在 Web Fuzzer 的高级使用中，已经很习惯于 `{{x(dictname)}}` , `{{int(1-100)}}` 这类操作，在我们最新的热加载特性中，我们新增一个 “热加载标签” 的功能。在大家进入编辑界面后，将会看到标签的调试内容。

**调用热加载标签**

在插件调用时，可以不加参数，通过 `{{yak}}` 标签告诉引擎这是一个 yak hotpatch 标签，需要配合热加载代码使用。
```bash
{{yak(funcname)}}
```
上述内容，标签如果配合热加载代码的话，可以实现调用代码中名为 `funcname` 的函数。
当然我们很可能需要接受一个参数，`funcname` 的参数调用方式如下：
```bash
{{yak(funcname|param)}}
```
我们通过 | 来分割函数名与参数内容。

![](/img/products/yakit/fuzz-60.png)

按图中配置好后，我们可以通过 “执行” 来调试上述标签渲染是否成功。
热加载函数定义
`func(param: string) (string | []string, error)`
我们实际在定义时，可以通过如下案例直接定义
```bash
// 定义只有一个返回值的渲染标签
handle = func(param) {
return "rendered" + param
}

// 定义一个返回多个渲染结果的标签
handle = func(param) {
return [param, "asdfasdfasd" + param, "foo", "bar", "param:"+param]
}

// 定义一个返回多个渲染结果的标签(复杂逻辑)
handle = func(param) {
list = make([]string)
list = append(list, "param:"+param)
list = append(list, codec.EncodeBase64(param))
return list
}
```
定义一个返回值或者多个文本返回值都会生效，定义多个返回值的话，会为每一个返回值生成数据包并在 Web Fuzzer 中执行发送。
### 2 热加载Fuzz案例
劫持某后台登录数据包发现account为明文password 加密且含有一个token签名。

![](/img/products/yakit/fuzz-61.png)

检索前端源代码，发现两个参数，一个参数t1，一个参数s1。t1参数为token值 s1参数目前还未知。

![](/img/products/yakit/fuzz-62.png)

其次全局检索s1参数，通过分析这串JS代码发现采用了CryptoJS加密库，CryptoJS加密库用来实现AES加密，s1就是加密密钥。

`id="t1"  value="58ab45522ab247e7ba6c58e3cca8102f`

`id="s1"  value="sdrfedwsdjujnsde`

![](/img/products/yakit/fuzz-63.png)

热加载编写加密函数
首先获取token
```bash
rsp,err = http.Get("http://120.0.0.1:2362/login")
die(err)
header,body= poc.Split(http.dump(rsp)[0])
regexp = `t1[^>]+value="([^"]+)"`
value = re.FindSubmatch(body,regexp)[1]
dump(value)
```
![](/img/products/yakit/fuzz-64.png)

但是测试网站发现，验证码和token 使用后并不销毁，热加载代码：
```bash
handle = func(data) {
key = "sdrfedwsdjujnsde"
data = codec.PKCS7Padding(data)
res = codec.AESECBEncrypt(key, data,nil)~
return codec.EncodeBase64(res)
}
```
![](/img/products/yakit/fuzz-65.png)

调试执行，加密成功。

![](/img/products/yakit/fuzz-66.png)

点击复制。

![](/img/products/yakit/fuzz-67.png)

插入需要fuzz的参数处，如下：

![](/img/products/yakit/fuzz-68.png)