---
sidebar_position: 3
---

# 高效的端口扫描：SYN+指纹扫描

我们学习了基础的服务扫描的用法，但是同时，我们发现了一个问题，直接只进行服务扫描，速度并不快，因为服务扫描我们要建立 TCP
连接，发送探测请求，接收指纹信息等操作；与此同时，如果指纹无法匹配，我们需要对比更多的指纹规则，以获取最准确最精确的指纹信息。

熟悉端口扫描的同学其实了解，这种问题是有解法的，我们自己可以发送 TCP 连接的第一次 SYN 握手包，同时从流量中获取扫描目标的 SYN/ACK 或者 RST 包即可绕开操作系统对 TCP
连接的维护，同时也不需要打开过多的文件描述符，不需要维护每一个连接的状态，将会节省大量的资源。

:::note SYN扫描

SYN扫描是另一种TCP扫描。端口扫描工具不使用操作系统原生网络功能，而是自行生成、发送IP数据包，并监控其回应。这种扫描模式被称为“半开放扫描”，因为它从不建立完整的TCP连接。端口扫描工具生成一个SYN包，如果目标端口开放，则会返回SYN-ACK包。扫描端回应一个RST包，然后在握手完成前关闭连接。[3]
如果端口关闭了但未使用过滤，目标端口应该会持续返回RST包。

这种粗略的网络利用方式有几个优点：给扫描工具全权控制数据包发送和等待回应时长的权力，允许更详细的回应分析。关于哪一种对目标主机的扫描方式更不具备入侵性存在一些争议，但SYN扫描的优势是从不会建立完整的连接。然而，RST包可能导致网络堵塞，尤其是一些简单如打印机之类的网络设备。
:::

## 如何使用 YAK 中的 SYN 扫描技术？

:::caution SYN 扫描需要用到 root 权限(windows 下是计算机管理员权限)

需要通过 `sudo yak synscan_script.yak` 来执行我们的扫描脚本。

:::

幸运的是，虽然我们学习了 `servicescan` 中的写法，但是聪明的小伙伴已经发现了，我们的 `synscan` 的使用方法和 `servicescan` 是非常相似的。

核心扫描函数是 `synscan.Scan(target, port)` 返回值是包含扫描结果的 `channel` 和如果失败无法进行扫描的原因。

我们看下面的代码

```go
target := cli.String("target", cli.setHelp("设置扫描目标"))
port  = cli.String("ports", cli.setDefault("80,8080-8082,9000-9002"))

res, err := synscan.Scan(target, port)
die(err)

for ret := range res {
    ret.Show()
}
```

其实看起来和上一节中指纹扫描非常非常相似，我们有疑惑的可能是，res 是什么类型，ret 又是什么类型？他有哪些函数/方法/字段可用？

### `synscan.Scan` 的返回值

参考如下核心文档：[`synscan.Scan`](/api-manual/api/synscan#synscanscan)

上述代码返回值有两个：

1. `res`：他的类型是 `chan *tools.SynScanResult`
2. `err` 一般是 `nil`，但是如果扫描发生了异常，err 中的值为 Golang 的一个 error 对象，他存储了失败的原因

我们在上述代码中

```go {2}
res, err := synscan.Scan(target, port)
die(err)
```

使用 `die(err)` 的意思是，如果 err 不为空，就停止掉该脚本。

当我们需要处理 `res: chan *tools.SynScanResult` 的时候，我们需要了解 `tools.SynScanResult` 这个对象究竟是谁？有哪些可供我们用户操作的办法？

通过 `desc(ret)` 这个函数，我们可以很容易查看里面的内容（原理是 Golang 的反射）。

:::info

`*tools.SynScanResult` 结构说明

```go
type palm/common/yak/yaklib/tools.(SynScanResult) struct {
  Fields(可用字段): 
      Host: string  
      Port: int  
  StructMethods(结构方法/函数): 
  PtrStructMethods(指针结构方法/函数): 
      func Show() 
}
```

我们发现其实结果非常简单非常单一，`Host` 为扫描的目标，`Port` 为结果

有一个 `Show` 方法，用来展示扫描的结果
:::

在样例代码中，我们通过 `ret.Show()` 来展示了扫描结果，非常简洁明了。

:::note Q & A：扫描过程是扫描完全结束之后，统一返回结果吗？还是一边扫描一边返回？

大家可能会有这个疑问，作者在这里统一进行解答，大家在使用 yak 的时候，经常会看到返回结果是一个 `chan *[someType]` 的，这个结果其实和 `slice/list` 的结果有本质区别。

大部分的 `slice/list` 作为结果，都是执行完毕之后，统一把结果收集起来放在，`slice/list` 中返回给用户。

`chan` 就不一样了，chan 创建将会直接返回给用户，如果有扫描结果出现，会立即放入 chan 中，这个时候，用户在外部读取 chan 就会收集到这个结果。以此达到输入中间结果的目的，也因此可以做到一边扫描，一边出结果。

:::

## 速度和精度，我全都要！

我们在执行了上述案例之后，马上发现了一个问题，速度有了，但是精准度差了点，我们似乎想要知道端口开放的同时，也得知道端口上可能的服务，指纹都是啥？

会有一种方法把这两个扫描对接起来吗？我们想要 SYN 的速度，同时也想要指纹扫描的精准度？应该如何做？

幸运的是，Yak 当然自带的接口可以集成实现 `synscan` 到 `servicescan`
的无缝对接，这个接口就是 [`servicescan.ScanFromSynResult`](/api-manual/api/servicescan#servicescanscanfromsynresult)

我们看如下案例：

```go {7-8}
target := cli.String("target", cli.setHelp("设置扫描目标"))
port  = cli.String("ports", cli.setDefault("80,8080-8082,9000-9002"))

res, err := synscan.Scan(target, port)
die(err)

fpResults, err := servicescan.ScanFromSynResult(res)
die(err)

for fp := range fpResults {
    println(fp.String())
}
```

我们使用 [`servicescan.ScanFromSynResult`](/api-manual/api/servicescan#servicescanscanfromsynresult) 只修改了非常少量的代码，就可以把 `synscan`
和 `servicescan` 串起来了。执行的结果，由大家自己去操作吧！

## 并非银弹

:::danger SYN 扫描的注意实现

由于 SYN 扫描高并发高效率，本质上是同时一起发送了大量 SYN 包，然后统一等待结果的返回。

这可能会造成短暂的网络拥挤，路由缓存拉满，甚至被防火墙拦截的不良后果。

同时，由于各种不可抗力的丢包问题，扫描的结果也会出现误差，频繁扫描相同目标误差大。

用户需要谨慎扫描，科学对待。

:::