---
sidebar_position: 22
---

# 热加载Fuzz

### 背景

在 HTB：BountyHunter 中，我们发现 Web Fuzzer 在使用中可以 “更强”，我们需要编写 Yak 脚本的事情，如果可以经过某些 Web Fuzzer 的优化，可以达到同样的效果。

在一个标签中，我们实现 `{{base64(xxxx)}}` 即可把内容进行 base64 编码，但是经常性，我们在 base64 之后需要过一层`urlescape`或者加前后缀，进行其他变换。一般这种情况，我们需要自行编写脚本来实现。

## HowTo

众所周知，Fuzz Tag 是 Yakit Web Fuzzer 的灵魂，在实际的工程实践中，我们可能会使用各种各样的 tag 来实现核心功能：

1. Fuzz 一个参数的整数范围我们常用 `{{int(1-100)}}`
2. 为一个参数值增加一个随机字符串，我们使用 `{{randstr(10,10)}}`
3. 针对某一个位置进行爆破，比如爆破目录等，我们通常使用 `{{x(dictname)}}`

但是往往在实战中，需要面对的参数是非常复杂的，上述类似的简单标签只能覆盖百分之六十的情况，那么如何解决后面的问题？

>我们尝试了标签组合，把标签分为 “普通标签” / “编码标签”。但是实际上效果并不理想，编码可能会多次叠加，这是非常要命的缺陷，那么我们要一次性解决这个 “多次叠加” 的问题，方法绝对不是剪枝。

就像 Yak 解决 Yaml PoC 的问题，理论上来说要解决这个问题，最好的方案就是 <span style={{background:"#fff67acc"}}>“让标签图灵完备”。</span>
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