---
sidebar_position: 12
---

# [synscan] SYN扫端口

语言自带扫描功能是本语言的一个大亮点。你在使用 yak 的时候，将不会再费心思考虑如何实现一个端口扫描功能，或者如何把 nmap 集成进你想编写的语言中。

什么是 SYN 端口扫描？

1. 自己维护一套网络栈，拆解 TCP 三次握手
1. 只进行第一次握手，如果收到了扫描目标的 `SYN-ACK` 则判定为端口开放
1. 发送 `RST` 强行中断握手

本系统工具实现原理基本同 `masscan`：短时间内把 `SYN` 数据包都发送出去，检查若干秒内的返回记录。

所以，我们在本扩展包中开放出了 `synscan.wait(second)` 这个参数配置，可以动态配置想要等待的秒数。

## 为什么 SYN 扫端口比 TCP 连接扫描更快速？

直接调用系统接口进行 TCP 连接，系统需要帮忙维护一个 TCP 连接状态。众所周知

1. 系统可打开的 TCP 连接是有限制的，可配置开放这个限制。
1. 系统可同时打开的文件描述符也是有限制的，`ulimit` 可配。

### 优势

1. 不需要进行完整 TCP 连接，系统对 TCP 连接无感知
1. 资源消耗极低，发包速率取决于系统性能以及网络 IO

### 弊端

1. 频率过高的数据包容易被中间路由丢包，损失准确率
1. 网络状况越差，丢包概率越大，扫描效果越差

## 最简单最高效的扫描接口

### 核心扫描函数

1. `fn synscan.Scan(hosts: string, ports: string, vars: ...tools.scanOpt): (chan *tools.SynScanResult, error)` 核心扫描函数，参数 `hosts` 可以支持 IP/IP+掩盖码，域名等；`ports` 支持端口组，例如 `22.443.80,8080-8084`，或者 `1-65535`

### 扫描额外参数

1. `fn synscan.outputFile(var_1: string): tools.scanOpt`  设置输出的文件，输出文件为 `var_1` 的值
1. `fn synscan.outputPrefix(var_1: string): tools.scanOpt` 设置输出文件内容每一行的前缀，例如 `http://`，或者 `redis://` 等，方便后续处理文件
1. `fn synscan.wait(var_1: float64): tools.scanOpt` 全部数据包发送完之后，等待多少时间？单位秒

### `tools.SynScanResult` 扫描结果结构

```go
type palm/common/yak/yaklib/tools.(SynScanResult) struct {
  Fields(可用字段):
      // 扫描到的 IP
      Host: string

      // 这个 IP 开放的端口
      Port: int

  PtrStructMethods(指针结构方法/函数):
      // 展示 SynScanResult  demo: `OPEN: 127.0.0.1:6341       from synscan`
      func Show()
}
```

### 执行案例：最经典/最简单的使用方法

```go
res, err := synscan.Scan("127.0.0.1", "1-65535")
die(err)

for result := range res {
    result.Show()
}
```

当我们执行完上面脚本之后，我们发现扫描结果如下：

```go
OPEN: 127.0.0.1:60012      from synscan
OPEN: 127.0.0.1:6341       from synscan
OPEN: 127.0.0.1:7891       from synscan
OPEN: 127.0.0.1:9090       from synscan
OPEN: 127.0.0.1:10000      from synscan
OPEN: 127.0.0.1:49159      from synscan
OPEN: 127.0.0.1:63342      from synscan
OPEN: 127.0.0.1:7890       from synscan
OPEN: 127.0.0.1:3306       from synscan
OPEN: 127.0.0.1:10800      from synscan
OPEN: 127.0.0.1:33060      from synscan
OPEN: 127.0.0.1:6942       from synscan
OPEN: 127.0.0.1:8080       from synscan
OPEN: 127.0.0.1:49922      from synscan
OPEN: 127.0.0.1:16090      from synscan
OPEN: 127.0.0.1:16308      from synscan
OPEN: 127.0.0.1:6342       from synscan
OPEN: 127.0.0.1:50031      from synscan
OPEN: 127.0.0.1:16067      from synscan
```

### 执行案例：自定义等待时间

```go
// 扫描本地 1-65535 号端口，全部数据包发送完毕的时候，等待 3.5 秒
res, err := synscan.Scan("127.0.0.1", "1-65535", synscan.wait(3.5))
die(err)

for result := range res {
    result.Show()
}
```

### 执行案例：输出到文件

```go
res, err := synscan.Scan("127.0.0.1", "1-65535",
    synscan.wait(3.5),
    synscan.outputFile("test.txt"),
)
die(err)

for result := range res {
    result.Show()
}
```

当我们执行完上面的代码之后，`cat test.txt`，我们发现了文件内容结果如下

```go
127.0.0.1:60012
127.0.0.1:6341
127.0.0.1:7891
127.0.0.1:9090
127.0.0.1:10000
127.0.0.1:49159
127.0.0.1:63342
127.0.0.1:7890
127.0.0.1:3306
127.0.0.1:10800
127.0.0.1:33060
127.0.0.1:6942
127.0.0.1:8080
127.0.0.1:49922
127.0.0.1:16090
127.0.0.1:16308
127.0.0.1:6342
127.0.0.1:50031
127.0.0.1:16067
```