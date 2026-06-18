---
sidebar_position: 6
---

# 实战2: 指纹扫描+基础爬虫

本节内容其实相对简单多了，大家如果学习了前面的内容之后，本节扫描端口+爬虫其实是一个非常顺理成章的程序：

我们经常在扫描端口的时候，发现他是一个 Web 端口，但是他的内部的一些 URL 我们并不能获取到。同时往往进行 PoC 扫描/漏洞扫描的时候，我们需要精确到 URL，甚至数据包才能确定这个需要扫描的参数。

我们把上述描述过程使用流程图表示如下：

![process](/img/docs/scan_and_crawler/process.jpg)

大家应该很熟悉这个图了，我们在上一节中已经看过类似的图，并针对每一个步骤进行了讲解和拆分，我们可以很容易独立自主完成绝大多数的步骤。

## 0x01 温故而知新：输入处理与扫描端口

这一部分内容非常简单，我们在前面已经写过很多次了，通过 `servicescan.ScanFromSynResult` 我们可以把 SYN 端口开放扫描和指纹识别扫描进行关联与对接，这一步会针对初步单端口的扫描非常快速。

```go
hosts = cli.String("target", cli.setHelp("scan hosts"))
ports = cli.String("ports", cli.setDefault("80,8080-8082,443,888"))

if hosts == "" {
    die("target is empty")
}

synResults, err := synscan.Scan(hosts, ports)
die(err)

res, err := servicescan.ScanFromSynResult(synResults)
die(err)
```

## 0x02 简易的基础爬虫（非浏览器爬虫）

我们的基础爬虫模块其实也是内置的，在使用基础爬虫进行扫描的时候，我们可以设置很多参数

1. 基础使用手册可以具体参考 [crawler 基础爬虫使用文档](/api-manual/buildinlibs/lib_crawler)
1. 爬虫所有 API 可以参考 [crawler 完全 API](/api-manual/api/crawler)

```go
// 创建一个文件夹为 `./scan_and_crawler` 的临时文件位置。
// 这个文件夹用于存储扫描的结果
fp, err = file.TempFile("scan_and_crawler")
die(err)
defer fp.Close()

// 设置爬虫函数：通过 SizedWaitGroup 来限频
// 如果大家阅读过前面关于并发的处理，将会对这个写法非常熟悉
crawlerSwg := sync.NewSizedWaitGroup(10)
defer crawlerSwg.Wait()
func startCrawler(target) {
    crawlerSwg.Add()
    go func{
        defer crawlerSwg.Done()

        // 创建爬虫
        res, err := crawler.Start(target, crawler.maxRequest(50))
        die(err)
        
        // 针对爬虫的结果进行展示（仅仅展示 Url，并同时把结果写入文件中）
        for req := range res {
            println(req.Url())
            fp.WriteLine(req.Url())
        }
    }
}
```

## 0x03 把端口扫描和爬虫进行组合？

其实组合方法非常简单，我们在指纹扫描结果中简单判断一下我们的端口是否开放，我们的指纹是否包含 HTTP 请求。可以确定是否是 HTTP 服务。

:::caution

当然，判断一个服务是不是 HTTP 服务的时候，有很多方法，甚至可以不判断，直接把 IP+端口塞进去进行判断。

:::

```go {40-48}
// 从命令行获取输入
hosts = cli.String("target", cli.setHelp("scan hosts"))
ports = cli.String("ports", cli.setDefault("80,8080-8082,443,888"))

if hosts == "" {
    die("target is empty")
}

// 构建端口扫描任务
synResults, err := synscan.Scan(hosts, ports)
die(err)

// 构建指纹扫描任务
res, err := servicescan.ScanFromSynResult(synResults)
die(err)

fp, err = file.TempFile("scan_and_crawler")
die(err)
defer fp.Close()


// 构建指纹扫描并发任务
crawlerSwg := sync.NewSizedWaitGroup(10)
defer crawlerSwg.Wait()
func startCrawler(target) {
    crawlerSwg.Add()
    go func{
        defer crawlerSwg.Done()

        res, err := crawler.Start(target, crawler.maxRequest(50))
        die(err)
        for req := range res {
            println(req.Url())
            fp.WriteLine(req.Url())
        }
    }
}


// 判断指纹扫描结果，根据指纹扫描结果来启动端口扫描
for result := range res {
    if result.IsOpen() {
        if result.Fingerprint != nil && result.Fingerprint.HttpFlows != nil{
            // 判断扫描指纹
            startCrawler(str.HostPort(result.Target, result.Port))
        }
    }
}
```

## 0x04 简单小测试

当我们完成上述代码的时候，我们可以执行 

```go
yak scan_and_crawler.yak --target 47.***.**.**/24 --ports 80,8000-8003,8080-8083,443
```

执行之后，我们可以寻找到爬虫请求对应的 URL 以及响应。从而可以收集这些内容交给 nuclei 进行漏洞扫描。