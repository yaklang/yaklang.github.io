---
sidebar_position: 1
sidebar_label: "本章总览"
---

# 网络编程

本章介绍 Yaklang 中从传输层到应用层的网络通信原语：TCP 客户端与服务端、UDP 无连接通信、HTTP 服务端、TLS 证书生成与加密连接，以及 DNS 解析。这些是写扫描器、自定义协议交互、Mock 服务、加密通道与资产发现类脚本的基础。

为方便循序渐进地学习，本章拆成多篇小文章，**每一项能力来自哪个库，下表写得很清楚**。Yaklang 中所有这类调用都带库名前缀（如 `tcp.Connect`、`udp.Serve`、`httpserver.Serve`、`tls.GenerateRootCA`、`dns.QueryIP`），看前缀就知道它属于哪个库。

更上层、面向安全测试的 HTTP 请求与模糊测试（`poc` / `http` / `fuzz`）能力，请查阅「内置标准库完全手册」，本章只覆盖 `httpserver` 这类"自己起一个服务"的场景。

## 本章目录与所属库

| 小节 | 所属库 | 代表 API | 一句话说明 |
| --- | --- | --- | --- |
| [TCP 客户端与服务端编程](./tcp.md) | `tcp` | `tcp.Connect` `tcp.Serve` `conn.Send` `conn.Recv` | 建立连接、收发数据、超时/TLS/代理选项、起 TCP 服务 |
| [UDP 无连接通信与服务器](./udp.md) | `udp` | `udp.Connect` `udp.Serve` `conn.SendTo` | 数据报收发、`SendTo` 指定目标、起 UDP 服务 |
| [HTTP 服务端编程](./httpserver.md) | `httpserver` | `httpserver.Serve` `httpserver.handler` `httpserver.context` | 起 HTTP 服务、路由分发、读请求/写响应、生命周期 |
| [TLS 证书生成与加密连接](./tls.md) | `tls` | `tls.GenerateRootCA` `tls.SignServerCertAndKey` `tls.Inspect` | 生成密钥/证书、签发证书链、加密通道、探测 TLS |
| [DNS 解析](./dns.md) | `dns` | `dns.QueryIP` `dns.QueryIPAll` `dns.QueryNS` `dns.QueryTXT` | A/NS/TXT 等记录查询、自定义解析器与超时 |

:::tip 阅读约定
本章所有示例都经过 `yak` 实跑验证。沿用 `str` 手册的约定：`assert` 用来锁定确定性结论（不成立即中断），`println` 用来打印可观察的结果，并在同一行用 `// OUT:` 标注它真实打印了什么——`// OUT:` 后面就是该行的标准输出，可以逐行对照学习。

网络示例普遍采用"同一个脚本里既起服务端、又起客户端"的回环（loopback）写法：用 `os.GetRandomAvailableTCPPort()` 取一个空闲端口，`go func(){ ... }()` 在后台起服务，`time.Sleep` 等服务就绪后再用客户端连接。服务端跑在 goroutine 里，主函数返回时进程随之退出，无需手动 join。
:::

:::danger DNS 与外网示例的输出依赖运行环境
`dns` 章节的真实解析结果（IP、NS、TXT）取决于你机器的网络与 DNS 配置，因此那些行不会用 `// OUT:` 锁定具体值，只用 `assert` 锁定"能解析出非空结果"这类稳定结论。其余 TCP/UDP/HTTP/TLS 示例都是本机回环，输出完全确定。
:::
