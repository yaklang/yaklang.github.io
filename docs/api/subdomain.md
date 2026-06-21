# subdomain {#library-subdomain}

`subdomain` 库提供子域名枚举能力，结合字典爆破与多源搜索发现目标域名的子域，支持递归枚举与泛解析处理，是资产测绘的重要一环。

典型使用场景：

- 枚举：`subdomain.Scan(target, opts...)` 对目标域枚举子域并流式返回结果。
- 控制：`subdomain.mainDict` / `subdomain.recursiveDict` 指定字典，`subdomain.recursive` / `subdomain.maxDepth` 控制递归，`subdomain.wildcardToStop` 处理泛解析，`subdomain.dnsServer` 指定解析服务器，`subdomain.targetConcurrent` / `subdomain.workerConcurrent` 控制并发。

与相邻库的关系：`subdomain` 处于资产发现前端，与 `dns`（解析）、`spacengine`（测绘）配合发现资产，结果可交给 `servicescan`/`poc` 做后续扫描。

> 共 12 个函数

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [subdomain.Scan](#scan) | `target any, opts ...subdomain.ConfigOption` | `chan *subdomain.SubdomainResult, error` | 对域名进行子域名扫描，它的第一个参数可以接收字符串或字符串数组，接下来可以接收零个到多个选项，用于对此次扫描进行配置，例如设置扫描超时时间，是否递归等，返回结果管道与错误 |

## 可变参数函数详情

### Scan {#scan}

```go
Scan(target any, opts ...subdomain.ConfigOption) (chan *subdomain.SubdomainResult, error)
```

对域名进行子域名扫描，它的第一个参数可以接收字符串或字符串数组，接下来可以接收零个到多个选项，用于对此次扫描进行配置，例如设置扫描超时时间，是否递归等，返回结果管道与错误

使用 请求(爆破)，查询，域传送技术进行子域名扫描

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| target | `any` | 扫描目标，支持字符串、字节数组或字符串数组 |

**可选参数**

可作为可变参数 `opts ...subdomain.ConfigOption` 传入选项；共 11 个可用选项，详见 [ConfigOption 选项列表](#option-configoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `chan *subdomain.SubdomainResult` | chan *subdomain.SubdomainResult: 子域名扫描结果管道 |
| r2 | `error` | 启动失败时返回错误 |

**示例**

``````````````yak
for domain in subdomain.Scan("example.com")~ {
dump(domain)
}
``````````````

---

## 可变参数选项列表

以下按选项类型汇总全部可变参数选项(原先重复在各主函数下的选项表已收拢到此处)：

### 1. 类型：ConfigOption {#option-configoption}

涉及到的函数有：[subdomain.Scan](#scan)

|选项函数|参数|返回值|说明|
|:--|:--|:--|:--|
| `subdomain.dnsServer` | `servers []string` | `ConfigOption` | 是一个选项参数，设置用于解析域名的 DNS 服务器，默认为 114.114.114.114 和 8.8.8.8 |
| `subdomain.eachQueryTimeout` | `i float64` | `subdomain.ConfigOption` | 是一个选项参数，设置每个查询的超时时间，单位为秒，默认为 3s |
| `subdomain.eachSearchTimeout` | `i float64` | `subdomain.ConfigOption` | 是一个选项参数，设置每个搜索的超时时间，单位为秒，默认为 10s |
| `subdomain.mainDict` | `i any` | `subdomain.ConfigOption` | 是一个选项参数，设置子域名爆破主字典，其第一个参数可以是文件名、字符串或字符串数组 |
| `subdomain.maxDepth` | `d int` | `ConfigOption` | 是一个选项参数，设置子域名遍历的最大深度，默认为 5，通常与 recursive 一起使用 |
| `subdomain.recursive` | `b bool` | `ConfigOption` | 是一个选项参数，设置是否递归扫描子域名，如果不递归扫描，那么只会扫描一层子域名，默认为false |
| `subdomain.recursiveDict` | `i any` | `subdomain.ConfigOption` | 是一个选项参数，设置子域名爆破递归字典，其第一个参数可以是文件名、字符串或字符串数组 |
| `subdomain.targetConcurrent` | `c int` | `ConfigOption` | 是一个选项参数，设置每个目标的最大线程数量，默认为 10 |
| `subdomain.targetTimeout` | `i float64` | `subdomain.ConfigOption` | 是一个选项参数，设置每个目标的超时时间，单位为秒，默认为 300s |
| `subdomain.wildcardToStop` | `t bool` | `ConfigOption` | 是一个选项参数，遇到泛解析的情况，是否马上停止解析，默认为 false |
| `subdomain.workerConcurrent` | `c int` | `ConfigOption` | 是一个选项参数，设置总的工作线程数量，默认为 50 |

