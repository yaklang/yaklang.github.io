---
sidebar_position: 2
---

# 你的第一个服务扫描程序

MacOS/Linux 下当我们执行 `yak -c 'println("Hello World")'` 的时候，我们屏幕上出现 `Hello World`，我们 Hello World 程序就已经完成了。

Windows 同学可以直接打开文件编写脚本，然后通过 `yak [your-file].yak` 即可。

:::tip 推荐使用 Yak Runner

Yakit 的 Yak Runner 是一个很好的执行代码，调试脚本的地方。

:::

当然，我们第一课不会只介绍 Hello World。

通常来说，我们想要写一个命令行工具，经常需要用户输入参数我们来接收，处理参数，我们渐进式教程的第一课就来介绍如何接收并处理用户的输入，并使用用户输入作为端口扫描的参数。

## 处理命令行参数从未这么简单

我们 yak 语言中，内置了很多功能库，这些功能库并不需要用户手动来导入，直接 `package_name.methodName` 即可调用，例如我们本节教程将会遇见的案例：[`cli.String`](/api-manual/api/cli#clistring) 这些案例

一般来说，我们接收命令行参数，需要通过预先定义参数类型和描述来操作，但是在 yak 中，我们处理参数其实可以非常简单

```go
// 如果我们需要处理 --your-param xxx 这个参数，我们通过下面代码获取
cli.String("your-param")

// 同理，如果想要获取一个 int，则可以通过 cli.Int() 来获取
cli.Int("int-param")
```

我们写一个最简单的脚本

```go title="1_handleCliParam.yak"
target = cli.String("target")
intParam = cli.Int("int-param")

println("我们接收到两个参数")
println("--target: ", target)
println("--target type: ", type(target))
println()
println("--int-param: ", intParam)
println("--int-param type: ", type(intParam))
```

我们通过
```shell
yak data/yak-basic/1_handleCliParam.yak --target targetParamValue --int-param 125
```

执行结果为

```text
我们接收到两个参数
--target:  targetParamValue
--target type:  string

--ini-param:  125
--ini-param type:  int
```

## 使用命令行参数扫描端口指纹

当我们可以学会了接收命令行参数之后，我们可以使用参数做一些事情。

最简单的例子，我们的 yak 既然是一门安全从业人员的语言，我们会努力把一些基本的扫描功能集成在语言内置的库中。

:::info 简单易用的服务扫描库

YAK 自带了服务扫描功能

1. 大家可以打开 [servicescan 的 API手册](/api-manual/api/servicescan#servicescanscan) 自行查看相关接口 
1. 也可以查看这个模块的详细文档：[](/)

:::


```go
// 使用命令行参数
targets := cli.String("target")
ports := cli.String("ports", cli.setDefault("80,22,8080-8082"))

if targets == "" {
    die("empty target")
}

if ports == "" {
    ports = "22,80,443,3306,8000-8002"
}

printf("start scan %v  ports:%v\n", targets, ports)

ch, err = servicescan.Scan(targets, ports)
die(err)

for result := range ch {
    if result.IsOpen() {
        println(result.String())
    }
}

println("Scan Finished")
```

我们仅仅不到 30 行，就完成了一个端口扫描的小程序，我们运行一下看看？

![脚本执行截图](../../static/img/lesson1_1.png)
![脚本执行截图1](../../static/img/lesson1_2.jpg)

### 设置扫描端口服务的参数

当我们执行了上述脚本之后，我们发现，虽然我们成功扫描了端口，但是我们输出并不是特别好格式化，我们只在控制台输出了内容。

很多时候，这远远不够，我们可能需要设置更复杂的扫描参数，比如

1. 设置扫描并发
2. 设置指纹服务探测的超时请求
3. 自定义指纹扫描的指纹
4. ...

当然，我们的接口都有相关功能实现，我们如何使用呢，我们为上述的脚本增加一个设置并发和设置输出的参数试一下

```go
// 使用命令行参数
targets := cli.String("target")
ports := cli.String("ports")
concurrent := cli.Int("concurrent")

if targets == "" {
    die("empty target")
}

if ports == "" {
    ports = "22,80,443,3306,8000-8002"
}

// 设置并发
if concurrent <= 0 {
    concurrent = 20
}

if jsonOutput == "" {
    jsonOutput = "result.json"
}

printf("start scan %v  ports:%v\n", targets, ports)

ch, err = servicescan.Scan(targets, ports, servicescan.concurrent(concurrent), )
die(err)

for result := range ch {
    if result.IsOpen() {
        println(result.String())
    }
}

println("Scan Finished")
```

在我们修改了新的脚本之后，执行如下代码试试？

## 小总结

作为对比，我们在使用 Python 或者 Golang 的时候其实依赖预先实现的一些扫描端口的库，或者调用命令行的 nmap 来实现。每个人实现的扫描实现方案以及指纹库其实标准并不相同，并且输出的内容也并没有很好的格式化和标准化，水平层次不齐。这也是重复造轮子恶果之一。这个问题很明显，甚至于说我之前面过很多候选人，在问到你知道“CPE”是什么吗？很多人答不出来，问到扫描到的指纹信息标准化的时候，大家总是在说“我们自研了一套体系”，然后一脸骄傲。在我眼里，如果自研了一个独一无二的东西，那最好不过，但是一个已经成熟的体系，谁也没有办法保证自己研发的能超越前人。

我们一直想解决重复造轮子的问题，但是本质上，编写一个“更好用的”工具，其实并不是一个难事儿，难的是别人按照你的想法来使用你的工具。

> 我和朋友们在谈这个问题的时候给了一个小结论：“给用户的想象空间不够大”。

当然这是题外话了。

### 回顾第一课

在第一课中，我们实现了从用户处接收数据，并传入了语言内置的服务扫描功能，并成功扫描了结果。

同时，我们也学会了如何把参数传入函数中进行执行，控制扫描时的参数。

相信动手操作过，你一定已经尝到了 yak 的甜头。如果你以为仅仅 yak 只是扫描端口而已，那可能不太对，接下来的几个课程，我们会更详细介绍 yak 的其他强大功能。