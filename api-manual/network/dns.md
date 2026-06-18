---
sidebar_position: 6
sidebar_label: "DNS 解析"
---

# DNS 解析

`dns` 库提供域名解析：查 A 记录（域名 → IP）、查所有 IP、查 NS / TXT 等记录，并支持指定解析超时和自定义 DNS 服务器。它是子域名收集、资产测绘、解析诊断类脚本的基础。

:::danger 本页真实解析结果取决于运行环境
对外部域名的解析结果（具体 IP、NS、TXT）依赖你机器的网络和 DNS 配置，因此这些行不用 `// OUT:` 锁定具体值。只有"IP 字面量原样返回""localhost 能解析出非空结果"这类与网络无关的稳定结论，才用 `// OUT:` / `assert`。
:::

## 分组速查表

| 分组 | 代表 API（含调用形态） | 返回 | 说明 |
| --- | --- | --- | --- |
| 单个 IP | `dns.QueryIP(domain, opts...)` | `string` | 取一个 A/AAAA 记录，失败返回 `""` |
| 全部 IP | `dns.QueryIPAll(domain, opts...)` | `[]string` | 取全部 IP 记录 |
| NS 记录 | `dns.QueryNS(domain, opts...)` | `[]string` | 权威名称服务器 |
| TXT 记录 | `dns.QueryTXT(domain, opts...)` | `[]string` | 文本记录（SPF 等） |
| 区域传输 | `dns.QueryAxfr(domain, opts...)` | `[]string` | AXFR，多数服务器禁用 |
| 选项 | `dns.timeout(sec)` `dns.dnsServers("8.8.8.8", ...)` | — | 超时、指定解析器 |

## 基础查询与稳定行为

`dns.QueryIP` 返回单个 IP 字符串，解析不到时返回空串 `""`（不是报错，所以判断要用 `!= ""`）。当传入的本身就是 IP 字面量时，会原样返回。

``````````````yak
// 特性: dns.QueryIP / QueryIPAll 的稳定行为
// 关键词: dns.QueryIP, dns.QueryIPAll, IP 字面量, 失败返回空串
// 传入 IP 字面量时原样返回(与网络无关, 稳定)
println(dns.QueryIP("127.0.0.1"))       // OUT: 127.0.0.1
println(dns.QueryIPAll("127.0.0.1"))    // OUT: [127.0.0.1]

// localhost 一定能解析出非空结果(具体是 127.0.0.1 还是 ::1 取决于系统)
println(dns.QueryIP("localhost") != "")  // OUT: true

assert dns.QueryIP("localhost") != "", "localhost should resolve"
``````````````

`dns.QueryIP` 失败返回空串这一点很关键：它不会抛错，所以一定要写 `if ip == "" { ... }` 来判断解析失败，而不是去判断 error。`dns.QueryIPAll` 则返回字符串切片，解析不到时是空切片 `[]`。

## 查询外部域名（结果随网络变化）

下面演示对真实域名做 A / NS / TXT 查询。这些输出依赖网络与 DNS 配置，所以不用 `// OUT:` 锁定，只演示调用形态。

``````````````yak
// 特性: 对真实域名查询 A / NS / TXT 记录
// 关键词: dns.QueryIP, dns.QueryNS, dns.QueryTXT
domain = "example.com"

ip = dns.QueryIP(domain)
println(f"A:    ${domain} -> ${ip}")          // 输出依赖网络, 不做断言

nsList = dns.QueryNS(domain)
println(f"NS:   count=${len(nsList)}")          // 通常 > 0

txtList = dns.QueryTXT(domain)
println(f"TXT:  count=${len(txtList)}")         // 视域名而定
``````````````

`QueryNS` 返回域名的权威名称服务器列表，`QueryTXT` 返回 TXT 记录（常用于读取 SPF、域名验证串等）。这几个查询函数都返回切片，遍历即可。

## 超时与自定义 DNS 服务器

两个选项最常用：`dns.timeout(秒)` 控制单次解析超时；`dns.dnsServers(...)` 指定一个或多个解析器，绕过系统默认 DNS。

``````````````yak
// 特性: dns.timeout 与 dns.dnsServers 选项
// 关键词: dns.timeout, dns.dnsServers, 自定义解析器
domain = "example.com"

// 指定用公共 DNS 解析, 并设 3 秒超时
ip = dns.QueryIP(domain, dns.dnsServers("8.8.8.8", "1.1.1.1"), dns.timeout(3))
println(f"resolved via public dns: ${ip != ""}")   // 输出依赖网络

// 选项对 IP 字面量不产生影响, 仍原样返回(稳定)
println(dns.QueryIP("8.8.8.8", dns.timeout(1)))     // OUT: 8.8.8.8
``````````````

`dns.dnsServers` 可以一次传多个解析器做冗余；当某些环境的本地 DNS 不可信或被污染时，指定可信的公共 DNS 很有用。超时设得太短（如 0.1 秒）会导致正常域名也解析失败，要按网络情况留足余量。

## 小结

- `dns.QueryIP` 返回单个 IP 字符串，**失败返回 `""` 而非报错**；`QueryIPAll` / `QueryNS` / `QueryTXT` 返回切片。
- IP 字面量会原样返回；localhost 稳定可解析。
- 用 `dns.timeout(秒)` 控制超时、`dns.dnsServers(...)` 指定解析器。
- 真实域名的解析结果取决于运行环境，写脚本时务必对空结果做判断。
