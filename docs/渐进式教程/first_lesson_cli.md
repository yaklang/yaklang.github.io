---
sidebar_position: 3
---

# 第一课：Hello World 与接收命令行参数并使用内置扫描端口

当我们执行 `yak -c 'println("Hello World")'` 的时候，我们屏幕上出现 `Hello World`，我们 Hello World 程序就已经完成了。

当然，我们第一课不会只介绍 Hello World。

通常来说，我们想要写一个命令行工具，经常需要用户输入参数我们来接收，处理参数，我们渐进式教程的第一课就来介绍如何接收并处理用户的输入

## 处理命令行参数从未这么简单

我们 yak 语言中，内置了很多功能库，这些功能库并不需要用户手动来导入，直接 `package_name.methodName` 即可调用，例如我们本节教程将会遇见的案例：`cli.String` 这些案例

一般来说，我们接收命令行参数，需要通过预先定义参数类型和描述来操作，但是在 yak 中，我们处理参数其实可以非常简单

```go
// 如果我们需要处理 --your-param xxx 这个参数，我们通过下面代码获取
cli.String("your-param")

// 同理，如果想要获取一个 int，则可以通过 cli.Int() 来获取
cli.Int("int-param")
```

我们写一个最简单的脚本，我们命名叫 `1_handleCliParam.yak`

```go
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


