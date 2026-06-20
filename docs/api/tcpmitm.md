# tcpmitm

|函数名|函数描述/介绍|
|:------|:--------|
| [tcpmitm.Start](#start) |Start 从连接通道创建并启动一个 TCP 中间人（MITM），是 tcpmitm 在 yaklang 中的主入口（导出名为 tcpmitm.Start） ch 是元素为已建立连接（net.Conn）的通道，通常来自 TUN/netstack 劫持。每收到一个连接，中间人会通过 tcpmitm.d...|
| [tcpmitm.context](#context) |context 为 TCP 中间人设置自定义上下文，用于统一控制生命周期（导出名为 tcpmitm.context） 作为 tcpmitm.Start 的可选项使用，上下文取消时中间人会停止处理 参数: - ctx: 控制中间人生命周期的上下文 返回值: - 可传入 tcpmitm.Start 的选...|
| [tcpmitm.dialer](#dialer) |dialer 设置连接真实服务端所使用的拨号函数（导出名为 tcpmitm.dialer） 作为 tcpmitm.Start 的可选项使用。回调入参为目标地址（host:port），需返回与真实服务端建立的连接； 可借此实现透明代理、强制走指定上游、或在测试中把流量引到本地服务 参数: - dial...|
| [tcpmitm.hijackTCPConn](#hijacktcpconn) |hijackTCPConn 设置连接级别劫持回调（导出名为 tcpmitm.hijackTCPConn） 作为 tcpmitm.Start 的可选项使用。每当有新连接建立时调用该回调，可在此接管连接： operator.Hold() 自行接管（中间人不再继续处理）、operator.CloseHij...|
| [tcpmitm.hijackTCPFrame](#hijacktcpframe) |hijackTCPFrame 设置帧级别劫持回调（导出名为 tcpmitm.hijackTCPFrame） 作为 tcpmitm.Start 的可选项使用。中间人会把双向数据按帧切分，对每个数据帧调用该回调， 在回调内可读取/修改帧内容并决定放行或丢弃：frame.Forward() 放行、fram...|
| [tcpmitm.maxBufferSize](#maxbuffersize) |maxBufferSize 设置在强制切分前单个数据帧的最大缓冲字节数（导出名为 tcpmitm.maxBufferSize） 作为 tcpmitm.Start 的可选项使用。当缓冲超过该值时会强制切出一帧，默认 8KB 参数: - size: 最大缓冲字节数 返回值: - 可传入 tcpmitm....|
| [tcpmitm.protocolAwareSplit](#protocolawaresplit) |protocolAwareSplit 启用协议感知的数据帧切分（导出名为 tcpmitm.protocolAwareSplit） 作为 tcpmitm.Start 的可选项使用。启用后会结合协议特征（HTTP/TLS/Redis 等）更合理地划分帧边界， 便于在 hijackTCPFrame 回调中...|
| [tcpmitm.timeGapThreshold](#timegapthreshold) |timeGapThreshold 设置基于时间间隔切分数据帧的阈值（导出名为 tcpmitm.timeGapThreshold） 作为 tcpmitm.Start 的可选项使用。当同方向数据出现超过该阈值的静默间隔时，会切出一个新帧； 常用取值：50ms、100ms、200ms、300ms 参数: ...|


## 函数定义
### Start

#### 详细描述
Start 从连接通道创建并启动一个 TCP 中间人（MITM），是 tcpmitm 在 yaklang 中的主入口（导出名为 tcpmitm.Start）

ch 是元素为已建立连接（net.Conn）的通道，通常来自 TUN/netstack 劫持。每收到一个连接，中间人会通过

tcpmitm.dialer 连接真实服务端，并把双向数据按帧切分后交给 tcpmitm.hijackTCPFrame 回调检查/改写，

或在连接建立时交给 tcpmitm.hijackTCPConn 回调接管。



参数:

  - ch: 元素为连接的通道（chan net.Conn，或 yaklang 的 chan）

  - opts: 可选项，如 tcpmitm.dialer / tcpmitm.hijackTCPFrame / tcpmitm.hijackTCPConn / tcpmitm.protocolAwareSplit / tcpmitm.maxBufferSize / tcpmitm.timeGapThreshold / tcpmitm.context



返回值:

  - TCPMitm 控制器对象，需调用其 Run() 进入处理循环（Run 会阻塞，通常放入 go 协程）

  - 错误信息（通道为空或类型非法时返回）




Example:

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


#### 定义

`Start(ch any, opts ...Option) (*TCPMitm, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ch | `any` | 元素为连接的通道（chan net.Conn，或 yaklang 的 chan） |
| opts | `...Option` | 可选项，如 tcpmitm.dialer / tcpmitm.hijackTCPFrame / tcpmitm.hijackTCPConn / tcpmitm.protocolAwareSplit / tcpmitm.maxBufferSize / tcpmitm.timeGapThreshold / tcpmitm.context |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*TCPMitm` | TCPMitm 控制器对象，需调用其 Run() 进入处理循环（Run 会阻塞，通常放入 go 协程） |
| r2 | `error` | 错误信息（通道为空或类型非法时返回） |


### context

#### 详细描述
context 为 TCP 中间人设置自定义上下文，用于统一控制生命周期（导出名为 tcpmitm.context）

作为 tcpmitm.Start 的可选项使用，上下文取消时中间人会停止处理



参数:

  - ctx: 控制中间人生命周期的上下文



返回值:

  - 可传入 tcpmitm.Start 的选项




Example:

``````````````yak
// 真实功能示例：用带超时的上下文限制中间人运行时长（需要连接来源，示意性用法）
ctx = context.WithTimeout(context.Background(), 30 * time.Second)
connChan = make(chan any, 16)
mitm = tcpmitm.Start(connChan, tcpmitm.context(ctx), tcpmitm.hijackTCPFrame(func(flow, frame) { frame.Forward() }))~
go mitm.Run()
``````````````


#### 定义

`context(ctx context.Context) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` | 控制中间人生命周期的上下文 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 可传入 tcpmitm.Start 的选项 |


### dialer

#### 详细描述
dialer 设置连接真实服务端所使用的拨号函数（导出名为 tcpmitm.dialer）

作为 tcpmitm.Start 的可选项使用。回调入参为目标地址（host:port），需返回与真实服务端建立的连接；

可借此实现透明代理、强制走指定上游、或在测试中把流量引到本地服务



参数:

  - dialer: 拨号函数 func(addr string) (net.Conn, error)



返回值:

  - 可传入 tcpmitm.Start 的选项




Example:

``````````````yak
// 真实功能示例：把所有劫持流量统一拨号到本地真实服务端（需要连接来源，示意性用法）
connChan = make(chan any, 16)
mitm = tcpmitm.Start(connChan,
    tcpmitm.dialer(func(addr) {
        println("dialing real server for:", addr)
        return tcp.Connect("127.0.0.1", 8080, tcp.clientTimeout(5))~
    }),
    tcpmitm.hijackTCPFrame(func(flow, frame) { frame.Forward() }),
)~
go mitm.Run()
``````````````


#### 定义

`dialer(dialer func(addr string) (net.Conn, error)) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| dialer | `func(addr string) (net.Conn, error)` | 拨号函数 func(addr string) (net.Conn, error) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 可传入 tcpmitm.Start 的选项 |


### hijackTCPConn

#### 详细描述
hijackTCPConn 设置连接级别劫持回调（导出名为 tcpmitm.hijackTCPConn）

作为 tcpmitm.Start 的可选项使用。每当有新连接建立时调用该回调，可在此接管连接：

operator.Hold() 自行接管（中间人不再继续处理）、operator.CloseHijackedConn() 直接关闭连接、

operator.GetFlow() 获取连接的五元组信息



参数:

  - callback: 连接回调 func(conn, operator)，conn 为劫持到的连接，operator 用于控制该连接



返回值:

  - 可传入 tcpmitm.Start 的选项




Example:

``````````````yak
// 真实功能示例：按目标端口决定放行还是直接阻断连接（需要连接来源，示意性用法）
connChan = make(chan any, 16)
mitm = tcpmitm.Start(connChan, tcpmitm.hijackTCPConn(func(conn, operator) {
    flow = operator.GetFlow()
    println("new connection:", flow.String())
    if flow.GetServerPort() == 22 {
        operator.CloseHijackedConn() // 阻断到 22 端口的连接
    }
}))~
go mitm.Run()
``````````````


#### 定义

`hijackTCPConn(callback ConnHijackCallback) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `ConnHijackCallback` | 连接回调 func(conn, operator)，conn 为劫持到的连接，operator 用于控制该连接 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 可传入 tcpmitm.Start 的选项 |


### hijackTCPFrame

#### 详细描述
hijackTCPFrame 设置帧级别劫持回调（导出名为 tcpmitm.hijackTCPFrame）

作为 tcpmitm.Start 的可选项使用。中间人会把双向数据按帧切分，对每个数据帧调用该回调，

在回调内可读取/修改帧内容并决定放行或丢弃：frame.Forward() 放行、frame.Drop() 丢弃、

frame.SetRawBytes(b) 改写、frame.Inject(b) 注入额外数据



参数:

  - callback: 帧回调 func(flow, frame)，flow 为连接信息，frame 为当前数据帧



返回值:

  - 可传入 tcpmitm.Start 的选项




Example:

``````````````yak
// 真实功能示例：统计上行字节数并对包含敏感词的帧做改写（需要连接来源，示意性用法）
connChan = make(chan any, 16)
mitm = tcpmitm.Start(connChan, tcpmitm.hijackTCPFrame(func(flow, frame) {
    data = frame.GetRawBytes()
    if frame.GetDirection() == 0 { // 0 表示 client -> server
        println("client sent:", len(data), "bytes")
    }
    if str.Contains(string(data), "password") {
        frame.SetRawBytes([]byte(str.ReplaceAll(string(data), "password", "******")))
    }
    frame.Forward()
}))~
go mitm.Run()
``````````````


#### 定义

`hijackTCPFrame(callback FrameHijackCallback) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `FrameHijackCallback` | 帧回调 func(flow, frame)，flow 为连接信息，frame 为当前数据帧 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 可传入 tcpmitm.Start 的选项 |


### maxBufferSize

#### 详细描述
maxBufferSize 设置在强制切分前单个数据帧的最大缓冲字节数（导出名为 tcpmitm.maxBufferSize）

作为 tcpmitm.Start 的可选项使用。当缓冲超过该值时会强制切出一帧，默认 8KB



参数:

  - size: 最大缓冲字节数



返回值:

  - 可传入 tcpmitm.Start 的选项




Example:

``````````````yak
// 真实功能示例：限制单帧最大 16KB，避免大包占用过多内存（需要连接来源，示意性用法）
connChan = make(chan any, 16)
mitm = tcpmitm.Start(connChan,
    tcpmitm.maxBufferSize(16 * 1024),
    tcpmitm.hijackTCPFrame(func(flow, frame) { frame.Forward() }),
)~
go mitm.Run()
``````````````


#### 定义

`maxBufferSize(size int) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| size | `int` | 最大缓冲字节数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 可传入 tcpmitm.Start 的选项 |


### protocolAwareSplit

#### 详细描述
protocolAwareSplit 启用协议感知的数据帧切分（导出名为 tcpmitm.protocolAwareSplit）

作为 tcpmitm.Start 的可选项使用。启用后会结合协议特征（HTTP/TLS/Redis 等）更合理地划分帧边界，

便于在 hijackTCPFrame 回调中以「一个完整协议消息」为单位检查与改写



参数:

  - enable: 是否启用协议感知切分



返回值:

  - 可传入 tcpmitm.Start 的选项




Example:

``````````````yak
// 真实功能示例：开启协议感知切分并打印每帧探测到的协议（需要连接来源，示意性用法）
connChan = make(chan any, 16)
mitm = tcpmitm.Start(connChan,
    tcpmitm.protocolAwareSplit(true),
    tcpmitm.hijackTCPFrame(func(flow, frame) {
        println(flow.String(), "protocol:", frame.GetDetectedProtocol())
        frame.Forward()
    }),
)~
go mitm.Run()
``````````````


#### 定义

`protocolAwareSplit(enable bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| enable | `bool` | 是否启用协议感知切分 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 可传入 tcpmitm.Start 的选项 |


### timeGapThreshold

#### 详细描述
timeGapThreshold 设置基于时间间隔切分数据帧的阈值（导出名为 tcpmitm.timeGapThreshold）

作为 tcpmitm.Start 的可选项使用。当同方向数据出现超过该阈值的静默间隔时，会切出一个新帧；

常用取值：50ms、100ms、200ms、300ms



参数:

  - d: 时间间隔阈值（time.Duration）



返回值:

  - 可传入 tcpmitm.Start 的选项




Example:

``````````````yak
// 真实功能示例：以 100ms 静默间隔切分请求/响应帧（需要连接来源，示意性用法）
connChan = make(chan any, 16)
mitm = tcpmitm.Start(connChan,
    tcpmitm.timeGapThreshold(100 * time.Millisecond),
    tcpmitm.hijackTCPFrame(func(flow, frame) {
        println(flow.String(), "frame:", len(frame.GetRawBytes()))
        frame.Forward()
    }),
)~
go mitm.Run()
``````````````


#### 定义

`timeGapThreshold(d time.Duration) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| d | `time.Duration` | 时间间隔阈值（time.Duration） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 可传入 tcpmitm.Start 的选项 |


