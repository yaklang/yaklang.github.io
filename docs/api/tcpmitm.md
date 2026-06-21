# tcpmitm {#library-tcpmitm}

`tcpmitm` 库提供 TCP 层的中间人（MITM）能力，劫持任意 TCP 连接与帧，对原始字节流进行查看与改写，适合非 HTTP 协议的流量分析与篡改。

典型使用场景：

- 启动劫持：`tcpmitm.Start(ch, opts...)` 启动 TCP MITM，`tcpmitm.hijackTCPConn` 在连接级回调处理，`tcpmitm.hijackTCPFrame` 在帧级回调改写字节，`tcpmitm.dialer` 自定义上游连接方式，`tcpmitm.context` 控制生命周期。

与相邻库的关系：`tcpmitm` 工作在 TCP 字节流层，`mitm` 工作在 HTTP/HTTPS 层；前者适合自定义/二进制协议，常与 `tcp`（连接）、`pcapx`（抓包）配合。

> 共 8 个函数

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [tcpmitm.Start](#start) | `ch any, opts ...Option` | `*TCPMitm, error` | 从连接通道创建并启动一个 TCP 中间人（MITM），是 tcpmitm 在 yaklang 中的主入口（导出名为 tcpmitm.Start） |

## 可变参数函数详情

### Start {#start}

```go
Start(ch any, opts ...Option) (*TCPMitm, error)
```

从连接通道创建并启动一个 TCP 中间人（MITM），是 tcpmitm 在 yaklang 中的主入口（导出名为 tcpmitm.Start）

ch 是元素为已建立连接（net.Conn）的通道，通常来自 TUN/netstack 劫持。每收到一个连接，中间人会通过

tcpmitm.dialer 连接真实服务端，并把双向数据按帧切分后交给 tcpmitm.hijackTCPFrame 回调检查/改写，

或在连接建立时交给 tcpmitm.hijackTCPConn 回调接管。

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| ch | `any` | 元素为连接的通道（chan net.Conn，或 yaklang 的 chan） |

**可选参数**

可作为可变参数 `opts ...Option` 传入选项；共 7 个可用选项，详见 [Option 选项列表](#option-option)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*TCPMitm` | TCPMitm 控制器对象，需调用其 Run() 进入处理循环（Run 会阻塞，通常放入 go 协程） |
| r2 | `error` | 错误信息（通道为空或类型非法时返回） |

**示例**

``````````````yak
// 真实功能示例：劫持每个连接的数据帧，转发到真实服务端，同时按方向统计流量（需要连接来源，示意性用法）
connChan = make(chan any, 16)
mitm = tcpmitm.Start(connChan,
    tcpmitm.dialer(func(addr) { return tcp.Connect("127.0.0.1", 3306)~ }), // 自定义到真实服务端的拨号
    tcpmitm.protocolAwareSplit(true),                                      // 按协议感知切分数据帧
    tcpmitm.maxBufferSize(16 * 1024),                                      // 单帧缓冲上限 16KB
    tcpmitm.hijackTCPFrame(func(flow, frame) {
        println(flow.String(), "frame bytes:", len(frame.GetRawBytes()))
        frame.Forward() // 放行；也可 frame.Drop() 丢弃，或 frame.SetRawBytes(newBytes) 改写
    }),
)~
go mitm.Run()
// 后续把劫持到的连接写入 connChan 即可被中间人处理
``````````````

---

## 可变参数选项列表

以下按选项类型汇总全部可变参数选项(原先重复在各主函数下的选项表已收拢到此处)：

### 1. 类型：Option {#option-option}

涉及到的函数有：[tcpmitm.Start](#start)

|选项函数|参数|返回值|说明|
|:--|:--|:--|:--|
| `tcpmitm.context` | `ctx context.Context` | `Option` | 为 TCP 中间人设置自定义上下文，用于统一控制生命周期 |
| `tcpmitm.dialer` | `dialer func(addr string) (net.Conn, error)` | `Option` | 设置连接真实服务端所使用的拨号函数 |
| `tcpmitm.hijackTCPConn` | `callback ConnHijackCallback` | `Option` | 设置连接级别劫持回调 |
| `tcpmitm.hijackTCPFrame` | `callback FrameHijackCallback` | `Option` | 设置帧级别劫持回调 |
| `tcpmitm.maxBufferSize` | `size int` | `Option` | 设置在强制切分前单个数据帧的最大缓冲字节数 |
| `tcpmitm.protocolAwareSplit` | `enable bool` | `Option` | 启用协议感知的数据帧切分 |
| `tcpmitm.timeGapThreshold` | `d time.Duration` | `Option` | 设置基于时间间隔切分数据帧的阈值 |

