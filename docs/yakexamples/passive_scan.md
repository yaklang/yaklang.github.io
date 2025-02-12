---
sidebar_position: 11
---

# 初探被动扫描

## 被动扫描是什么？

在最普通的扫描中，我们把一个目标发送给扫描器，扫描器自主决定扫描的 URL，或者对扫描的目标进行爬虫，自己寻找扫描目标，我们经常把这个过程成为主动扫描。

区别于此，在被动扫描过程中，我们通过某种方式把扫描目标的流量（一般是 HTTP 数据包）直接发送给扫描器，扫描器根据扫描目标流量直接确定需要扫描的参数以及扫描目标。

:::caution

并不是说被动扫描一定比主动扫描好，他们在工程实践中各有优劣，适应的场景不一样。

例如，针对大规模的扫描目标（需要监管千万级的网站/资产/漏洞）主动扫描可以进行高度自动化。

但是针对单个目标进行深度扫描，涉及到各种登录状态，以及登录后的扫描，高度自动化往往会失去流量扫描的精准优势。

所以选择怎么样的扫描并不完全取决于扫描的效果，也需要考虑具体场景选择性价比最高的方式。

:::

## 业内最方便的中间人劫持

被动扫描能力底座也是 Yak 目前 "独一份" 提供的。简单来说，Yak 提供了一个方便的中间人的接口，仅需 `mitm.Start` 即可启动一个中间人代理。

```go
err = mitm.Start(8082, mitm.callback(func(isHttps, url, req, rsp) {
    if req.Method == "CONNECT" {
        return
    }
    

    printf("[%5s] url: %v \n", req.Method, url)
    println()
}), mitm.useDefaultCA(true))
die(err)
```

:::caution 证书问题

当你默认不配置证书的时候，Yak 将在你当前工作目录创建一套证书，名为 `yak-mitm-ca.crt` 和 `yak-mitm-ca.key`，将会使用这套证书进行中间人劫持

当你 `mitm.useDefaultCA(false)` 选项被使用的时候，将不会使用默认的证书名，这个时候，需要用户强制使用自己的证书。

详情参考 [`mitm` 使用文档](/api-manual/buildinlibs/lib_mitm)

:::

## 精密外科手术：`mitm` 配合 `fuzz`

在前面的教程中，我们学习了如何使用 `fuzz` 模块，那同时我们本节也学习了如何进行中间人劫持。

顺理成章的，我们可以编写自己的被动扫描器了，我们通过 `fuzz` 模块，可以很容易做到针对 `http.Request` 的变形，不管是分析内部参数还是对特定参数进行扫描，这些操作手到擒来！

```go
wg = sync.NewWaitGroup()
defer wg.Wait()

// 设置 Fuzz 函数
submitTask = func(fReq){
    wg.Add(1)
    go func{
        defer wg.Done()
        for _, p := range fReq.GetCommonParams() {
            reqs, err := p.Fuzz("PAYLOAD_TOKEN").Exec()
            if err != nil {
                log.error("FUZZ ERROR: %s", err)
                return
            }

            for result := range reqs {
                println("-----------------------FUZZED REQUEST-------------------------")
                println(result.Url)
                println("    Rsp Length: ", len(result.ResponseRaw))
            }
        }
    }
}

// 启动一个中间人劫持服务器
go def{
    err = mitm.Start(8082, mitm.callback(func(isHttps, url, req, rsp) {
        if req.Method == "CONNECT" {
            return
        }

        fReq, err := fuzz.HTTPRequest(req, fuzz.https(isHttps/*type: bool*/))
        if err != nil {
            log.error("build fuzz http request failed: %s", err)
            return
        }

        submitTask(fReq)
        
    }), mitm.useDefaultCA(true))
    die(err)
}

time.sleep(1)

// 发送一个请求，以中间人开放代理为代理
rsp, err := http.Get("https://www.baidu.com/?a=test", http.proxy("http://127.0.0.1:8082"))
if err != nil {
    die(err)
}
```

通过上面的代码，我们可以说已经完成了一个最简易的被动扫描器入口

:::note

当然，本节提供的案例仅供用户学习，一般来说，编写被动扫描器的关键在于对于 `fuzz` 编写优秀的扫描模块，当然我们也可以不使用自己编写的 `fuzz` 漏洞挖掘模块。 

:::

:::info mitm 入口有无数种玩法

当然如果想要记录流量，或者说仅仅作为调试使用，或者把流量抽出来作为 nuclei 的扫描，Yak 都是很容易可以做到的！

:::