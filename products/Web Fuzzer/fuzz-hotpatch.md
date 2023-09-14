---
sidebar_position: 17
---

# 八、热加载

在聊热加载之前，我们首先需要对其进行了解：什么是热加载？

广义上来说，热加载是一种允许在不停止或重启应用程序的情况下，动态加载或更新特定组件或模块的功能。这种技术常用于开发过程中，提高开发效率和用户体验。

在Yakit 的Web Fuzzer中，热加载是一种高级技术，让 Yak 成为 Web Fuzzer 和用户自定义代码中的桥梁，它允许我们编写一段 Yak 函数，在 Web Fuzzer 过程中使用，从而实现自定义 fuzztag 或更多功能。

## 调用热加载 fuzztag
实际上，我们调用热加载中编写的函数也使用 fuzztag 。我们也可以理解为热加载是一种特殊的 fuzztag ，它的格式为：

```
{{yak(funcname)}}
```

当我们需要传入参数时，则格式为
```
{{yak(funcname|param)}}
```
需要注意的是，我们传入的参数可以是 fuzztag ，也就是可以编写形如：`{{yak(funcname|{{x(pass_top25)}})}}`的格式。

## 热加载函数定义
我们可以在热加载页面中编写热加载函数，其函数定义如下：
```go
// 函数名为funcname，参数只有一个，为param，类型是字符串
funcname = func(param) {
    // 返回值可以是字符串或数组
    return param
}
```

## 使用热加载实现大写转换
点击图片中的**热加载**按钮，打开热加载页面：
![](/img/products/yakit/Fuzz-hotpatch/1.png)

如图来看一下热加载页面的功能：
![](/img/products/yakit/Fuzz-hotpatch/2.png)

接下来我们来编写一个简单的热加载内容，使用 Yak 代码来将传入的字符串转换为大写，代码如下：
```go
upper = func(s) {
    // 传入的参数，类型为字符串，返回值可以是字符串或数组
    return s.Upper()
}
```

然后我们点击**保存**按钮，保存热加载内容，这时候我们就可以在 Web Fuzzer 中使用这个热加载 fuzztag 了，如图所示，可以看到字符串中的英文字母都变为大写了：
![](/img/products/yakit/Fuzz-hotpatch/3.png)

## 使用热加载实现更灵活的 fuzztag
上文中有提到，热加载函数可以返回一个数组，当我们返回一个数组时， Web Fuzzer 会将数组中的每一个元素都作为值去发包，所以当我们数组有5个元素时， Web Fuzzer 会发出5个包，这样我们就可以实现更灵活的fuzztag了。

以下是一个简单的例子，我们返回一个数组，其原始值为`list = ["1", "2", "3"]`, 然后将数组中的每个元素进行base64编码后再url编码：
```go
handle = func(param) {
    list = ["1", "2", "3"]
    for i, v = range list {
        list[i] = codec.EncodeBase64Url(v)
    }
    return list
}
```

然后我们点击**保存**按钮，保存热加载内容，这时候我们就可以在 Web Fuzzer 中使用这个热加载 fuzztag 了，如图所示，可以看到数字1,2,3都被base64编码后再url编码了：
![](/img/products/yakit/Fuzz-hotpatch/4.png)

## 热加载中的"魔术方法"
在热加载代码区中，实际上存在两个特殊的魔术方法：`beforeRequest`和`afterRequest`，它函数的定义如下：
```go
// beforeRequest 允许发送数据包前再做一次处理，定义为 func(origin []byte) []byte
beforeRequest = func(req) { 
    return []byte(req)
}

// afterRequest 允许对每一个请求的响应做处理，定义为 func(origin []byte) []byte
afterRequest = func(rsp) {
    return []byte(rsp)
}
```
这两个魔术方法分别在每次请求之前和每次请求拿到响应之后调用，它们可以用于修改我们 Web Fuzzer 的请求与响应。通过这两个魔术方法配合 Yak代码，我们实际上可以实现许多有用的功能。

以下是一个简单的例子，我们将请求包中的`__TIMESTAMP__`替换为当前的时间戳：
![](/img/products/yakit/Fuzz-hotpatch/5.png)

如果我们只是使用这两个魔术方法，我们实际上不需要在 Web Fuzzer 中使用热加载 fuzztag ，它就会自动执行。
![](/img/products/yakit/Fuzz-hotpatch/6.png)

