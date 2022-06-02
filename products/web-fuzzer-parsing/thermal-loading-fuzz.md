---
sidebar_position: 2
---

# 热加载Fuzz

## Yakit Web Fuzzer 终极能力强化：热加载 Fuzz

## Background
在 HTB：BountyHunter 中，我们发现 Web Fuzzer 在使用中可以 “更强”，我们需要编写 Yak 脚本的事情，如果可以经过某些 Web Fuzzer 的优化，可以达到同样的效果。

在一个标签中，我们实现 `{{base64(xxxx)}}` 即可把内容进行 base64 编码，但是经常性，我们在 base64 之后需要过一层`urlescape`或者加前后缀，进行其他变换。一般这种情况，我们需要自行编写脚本来实现。

## HowTo

众所周知，Fuzz Tag 是 Yakit Web Fuzzer 的灵魂，在实际的工程实践中，我们可能会使用各种各样的 tag 来实现核心功能：

1. Fuzz 一个参数的证书范围我们常用 `{{int(1-100)}}`
2. 为一个参数值增加一个随机字符串，我们使用 `{{randstr(10,10)}}`
3. 针对某一个位置进行爆破，比如爆破目录等，我们通常使用 `{{x(dictname)}}`

但是往往在实战中，需要面对的参数是非常复杂的，上述类似的简单标签只能覆盖百分之六十的情况，那么如何解决后面的问题？

>我们尝试了标签组合，把标签分为 “普通标签” / “编码标签”。但是实际上效果并不理想，编码可能会多次叠加，这是非常要命的缺陷，那么我们要一次性解决这个 “多次叠加” 的问题，方法绝对不是剪枝。

就像 Yak 解决 Yaml PoC 的问题，理论上来说要解决这个问题，最好的方案就是 <span style={{background:"#fff67acc"}}>“让标签图灵完备”。</span>

### 技术核心：热加载 HotPatch
众所周知，在 Yakit MITM 插件中，HotPatch 是一个非常有意思的设定，在劫持过程中，任何用户输入的 Yak 代码均可以随时加载到 MITM 过程中执行。

那么基于这项技术，<span style={{background:"#fff67acc"}}>我们在 Web Fuzzer 执行数据包修复和渲染之前，让用户输入一段 Yak 代码，我们利用类似 MITM 插件的 “热加载技术”，</span>让 Yak 成为 Web Fuzzer 和用户自定义代码中的桥梁，编写 “函数”，在恰当的时候执行这个回调函数，就可以很好的实现标签核心代码 “图灵完备”

### 定义与详解

我们在 Web Fuzzer 的高级使用中，已经很习惯于 `{{x(dictname)}}` , `{{int(1-100)}}` 这类操作，在我们最新的热加载特性中，我们新增一个 <span style={{background:"#fff67acc"}}>“热加载标签” </span>的功能。在大家进入编辑界面后，将会看到标签的调试内容

#### 调用热加载标签
在插件调用时，可以不加参数，通过 {{yak}} 标签告诉引擎这是一个 yak hotpatch 标签，需要配合热加载代码使用。

```go
{{yak(funcname)}}
```
上述内容，标签如果配合热加载代码的话，可以实现调用代码中名为 `funcname` 的函数。
当然我们很可能需要接受一个参数，`funcname` 的参数调用方式如下：

```go
{{yak(funcname|param)}}
```

我们通过 `| `来分割函数名与参数内容。

![](/img/products/yakit/hot-division.png)

按图中配置好后，我们可以通过 “执行” 来调试上述标签渲染是否成功。

#### 热加载函数定义

`func(param: string) (string | []string, error)`

我们实际在定义时，可以通过如下案例直接定义

```go
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

## Best Practice

既然缘起 HTB: BountyHunter，我们还用这个靶场中的 XXE 案例来说明我们的执行案例：

### Walkthrough：流程解释

![](/img/products/yakit/hot-walkthrough.png)

熟悉我们在 HTB 中的 XXE 案例的同学，可能对上面的内容非常熟悉，data 中的参数经过 base64 和 url 编码，我们把它还原之后，看到一个 XML，然后这个 XML 我们在外面套一层

`{{yak(handle|...)}}`

之后，显然易见的，我们需要实现 `yak(handle|...)` 的具体内容。我们定义我们的数据包如下

```HTTP
POST /tracker_diRbPr00f314.php HTTP/1.1
Host: 10.129.95.166
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.109 Safari/537.36
Content-Length: 215
Accept: */*
Accept-Encoding: identity
Accept-Language: zh-CN,zh;q=0.9
Content-Type: application/x-www-form-urlencoded; charset=UTF-8
Cookie: _dd_s=logs=1&id=7ce5ac86-97dd-4e71-952e-f7ad5a3244e6&created=1651717064428&expire=1651717980936
Origin: http://10.129.95.166
Referer: http://10.129.95.166/log_submit.php
X-Requested-With: XMLHttpRequest

data={{yak(handle|<?xml  version="1.0" encoding="ISO-8859-1"?>
        <bugreport>
        <title>122222222</title>
        <cwe>123</cwe>
        <cvss>123</cvss>
        <reward>123</reward>
        </bugreport>)}}
```
在 “插入热加载标签” 中，我们进行如下操作：编写一个测试标签，编写热加载代码中临时参数：

```go
handle = func(param) {
    return codec.EscapeQueryUrl(codec.EncodeBase64(param))
}
```

接下来我们简单测试一下：

![](/img/products/yakit/hot-test.png)

于是我们就可以开心地免去编写完整的 Yak 脚本对其测试了。

![](/img/products/yakit/hot-no-yak-script.png)

我们调整 Payload，马上就能看到 Payload 产生的影响，这其实非常振奋人心，调整 Payload 手动的安全测试将变得非常简单且易于操作。

### In a Nutshell

![](/img/products/yakit/hot-a-nutshell.png)

## Conclution

通常来说，我们的操作绝不止于此：

1. 如果才做需要 JS 执行，我们当然也可以用 otto 来直接执行对应的编码代码。
2. 由于热加载与导出机制的天然优势，我们可以在热加载的代码中设置 “全局变量”，从而实现一个 Key 在多次使用。
3. Yak 代码只要能执行，它内置的所有模块其实都是完全可用的，最常见的我们可以在 Yak 代码中执行 Codec 模块下的编码解码函数，同样的，我们也可以在热加载代码中执行 “扫描代码” 或者 “db 模块下的数据库操作”。

Happy Game
