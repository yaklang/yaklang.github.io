---
sidebar_position: 16
---

# [spacengine] 网络空间引擎

本网络空间引擎目前集成了市面常见的一些网络空间引擎的库：

1. `fofa`
1. `shodan`
1. `quake`(From 360)
1. `hunter`
1. `zoomeye`

可以支持编写脚本从上述五个引擎中搜索数据

:::success 当然，Secret 和 AccessKey 需要用户自行购买


:::

## API

### 搜索 API

1. `fn spacengine.FofaQuery(email: string, secretKey: string, searchFilter: string, vars: ...yaklib._spaceEngineConfigOpt): (chan *spacengine.NetSpaceEngineResult, error)`
   Fofa 搜索引擎
1. `fn spacengine.QuakeQuery(apiKey: string, searchFilter: string, vars: ...yaklib._spaceEngineConfigOpt): (chan *spacengine.NetSpaceEngineResult, error)`
   360 Quake 空间搜索引擎
1. `fn spacengine.ShodanQuery(apiKey: string, searchFilter: string, vars: ...yaklib._spaceEngineConfigOpt): (chan *spacengine.NetSpaceEngineResult, error)`
   Shodan 老牌搜索引擎
1. `fn spacengine.HunterQuery(name: string, apiKey: string, searchFilter: string, vars: ...yaklib._spaceEngineConfigOpt): (chan *spacengine.NetSpaceEngineResult, error)`
   Hunter 空间搜索引擎
2. `fn spacengine.ZoomeyeQuery(apiKey: string, searchFilter: string, vars: ...yaklib._spaceEngineConfigOpt): (chan *spacengine.NetSpaceEngineResult, error)`
   Zoomeye 空间搜索引擎

:::note `*spacengine.NetSpaceEngineResult` 结构可用字段

```go
type palm/server/dbm/falcons/spacengine.(NetSpaceEngineResult) struct {
  Fields(可用字段):
      // IP 地址 : 端口
      Addr: string
      
      // 数据从哪个搜索引擎来的？
      FromEngine: string
      
      // 经纬度
      Latitude: float64
      Longitude: float64
      
      // 如果是 HTML 的话，Title 是啥？
      HtmlTitle: string
      
      // 这个 IP 地址的域名是啥？
      Domains: string

      // 如果有，ASN 编号      
      Asn: string
      
      // 地理位置名称
      Province: string
      City: string
      Location: string
      
      // 使用什么语句搜索到的结果？
      FromFilter: string
      
      // 可能的服务运营商
      ServiceProvider: string

      // 指纹
      Fingerprints: string

      Banner: string
}
```

:::

### 参数 API

1. `fn spacengine.maxPage(var_1: int): yaklib._spaceEngineConfigOpt` 最多获取多少页的数据？
1. `fn spacengine.maxRecord(var_1: int): yaklib._spaceEngineConfigOpt` 最多获取多少条？（按页获取，实际返回数量等于 `maxRecord % perPageRecord > 0 ? perPageRecord * (page+1) : perPageRecord * page` ）

## 实战案例：

### 基础使用案例

```go title="yak 25_spacengine.yak --token vO5Z*********************aHgdTeEM"
apiKey := cli.String("token")

res, err := spacengine.ShodanQuery(apiKey, "jenkins", spacengine.maxRecord(100))
die(err)

for r := range res {
    println(r.Addr)
}
```

当我们执行上述代码之后，我们可以得到按行获取的扫描目标

### 配合 `servicescan` 使用

```go {6-7}
apiKey := cli.String("token")

res, err := spacengine.ShodanQuery(apiKey, "jenkins", spacengine.maxRecord(100))
die(err)

fpRes, err := servicescan.ScanFromSpaceEngine(res)
die(err)

for result := range fpRes {
    println(result)
}
```

通过高亮行代码，我们可以把 `spacengine` 模块的扫描结果直接给服务扫描进行执行。 