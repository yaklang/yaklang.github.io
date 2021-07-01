---
sidebar_position: 6
---

# 实战2: 指纹扫描+基础爬虫

本节内容其实相对简单多了，大家如果学习了前面的内容之后，本节扫描端口+爬虫其实是一个非常顺理成章的程序：

## 原始程序：仅扫描端口

这段代码其实大家相当熟悉，我们接受扫描目标输入，然后调用内置的端口扫描模块进行扫描，把扫描结果打印到屏幕

:::
:::

```go 
ports = cli.String("ports", cli.setDefault("22,80,443,8080-8082,8000-8004"))
hosts = cli.String("targets", cli.setHelp("扫描目标"))
synScanAllowed := cli.Have("syn", cli.setDefault(false))

if hosts == "" {
    die("扫描目标不能为空")
}

log.setLevel("info")

if synScanAllowed {
    log.info("start to synscan: %v ports: %v", hosts, ports)
    synResults, err := synscan.Scan(hosts, ports)
    die(err)

    res, err := servicescan.ScanFromSynResult(synResults, servicescan.active(true))
    die(err)

    for result := range res {
        println(result.String())
    }
} else{
    log.info("start to servicescan: %v ports: %v", hosts, ports)
    res, err := servicescan.Scan(hosts, ports)
    die(err)

    for result := range res {
        if result.IsOpen() {
            println(result.String())
        }
    }
}
```