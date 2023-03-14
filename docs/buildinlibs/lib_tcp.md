---
sidebar_position: 7
---

# [tcp] TCP 网络连接库

本网络连接库经过高度简化，并不使用传统 Socket 接口，而使用核心的三个函数来完成常见 TCP 的功能

1. `Connect` 作为 TCP 连接客户端发起连接
1. `Serve` 快速构建一个 TCP 服务器
1. `Forward` 端口转发，可以把一个本地端口的流量转发到远程端口上

## 一个例子看透 TCP 库的三个 API

```go
// 设置日志的级别，方便我们看到 TCP 库的一些信息输出
loglevel("info")

// 启动一个 TCP 服务器，在 Goroutine 中异步启动
go fn{
    tcp.Serve("127.0.0.1", 8085, tcp.serverCallback(func(conn) {
        println("真正的 TCP 服务器收到一个连接：", conn.RemoteAddr())
        bytes, err := conn.RecvLen(4)
        if err != nil {
            conn.Close()
            return
        }
        println("收到连接的前 4 个字符为", string(bytes))
        println("发送一个 Hello World 给客户端")

        conn.Send("你好，世界！Hello World from 127.0.0.1:8085")
        println("发送成功了！")
        conn.Close()
    }))
}

// 启动一个 TCP 本地转发，把本地 9000 转发到 127.0.0.1:8085
go fn{
    tcp.Forward(9000, "127.0.0.1", 8085)
}

// 启动一个 TCP 连接，直接访问本地 9000 端口
conn, err := tcp.Connect("127.0.0.1", 9000)
die(err)

// 发送一个消息给 9000 端口
conn.Send("abdasdf this message from client")

dump(conn.RecvStringTimeout(1))
// 等待3秒观察日志
sleep(3)
```

上面的脚本其实非常直观:

1. 我们启动了 TCP 服务器
1. 把 TCP 服务器的端口做了转发，转发到 9000 端口上了
1. 然后我们访问本地 9000 端口，发送一条消息
1. 我们从客户端收到了，服务器返回来的消息

```go
[INFO] 2021-06-11 17:52:47 +0800 [default:tcp_serve.go:63] recv tcp connection from 127.0.0.1:58352 to 127.0.0.1:9000
[INFO] 2021-06-11 17:52:47 +0800 [default:tcp_util.go:15] recv local connection from: 127.0.0.1:58352
[INFO] 2021-06-11 17:52:47 +0800 [default:tcp_serve.go:63] recv tcp connection from 127.0.0.1:58353 to 127.0.0.1:8085
[INFO] 2021-06-11 17:52:47 +0800 [default:tcp_util.go:23] create remote connection from: 127.0.0.1:8085
真正的 TCP 服务器收到一个连接： 127.0.0.1:58353
收到连接的前 4 个字符为 abda
发送一个 Hello World 给客户端
发送成功了！
([]interface {}) (len=2 cap=2) {
 (string) (len=49) "你好，世界！Hello World from 127.0.0.1:8085",
 (interface {}) <nil>
}
```

## 详细 API 介绍

1. `fn tcp.Connect(host: string, port: int, params: ...clientParams): (*yaklib.tcpConnection, error)` 发起一个 TCP 连接
1. `fn tcp.Forward(localPort: int, remoteHost: string, remotePort: int): error` 转发一个 TCP 连接（把一个远程连接映射到本地）
1. `fn tcp.Serve(var_1: interface {}, var_2: int, vars: ...yaklib.tcpServerConfigOpt): error` 启动一个 TCP 服务器

### TCP 客户端参数

1. `fn tcp.clientLocal(var_1: interface {}): yaklib.dialerOpt` 客户端参数，设置本地地址
1. `fn tcp.clientTimeout(var_1: float64): yaklib.dialerOpt`  客户端参数，当次连接的超时时间
1. `fn tcp.clientTls(var_1: interface {}, var_2: interface {}, vars: ...interface {}): yaklib.tcpServerConfigOpt` 开启 TLS 加密的 TCP 连接

### TCP 服务端参数

1. `fn tcp.serverCallback(var_1: func(*yaklib.tcpConnection)): yaklib.tcpServerConfigOpt` 服务端参数：设置回调函数，处理服务器端收到的 TCP 连接
1. `fn tcp.serverContext(var_1: context.Context): yaklib.tcpServerConfigOpt` 服务器端参数，设置超时时间
1. `fn tcp.serverTls(cert: interface {}, privateKey: interface {}, caCerts: ...interface {}): yaklib.tcpServerConfigOpt` 为服务器设置 TLS，设置一个加密的 TLS

### 结构定义

#### `*yaklib.tcpConnection` 函数定义

```go
type palm/common/yak/yaklib.(tcpConnection) struct {
  Fields(可用字段):
      Conn: net.Conn
  StructMethods(结构方法/函数):
      // 关闭网络连接
      func Close() return(error)

      // 查看本地地址
      func LocalAddr() return(net.Addr)

      // 标准 Read 接口
      func Read(v1: []uint8) return(int, error)

      // 远程地址
      func RemoteAddr() return(net.Addr)

      // 设置读写 DDL
      func SetDeadline(v1: time.Time) return(error)
      func SetReadDeadline(v1: time.Time) return(error)
      func SetWriteDeadline(v1: time.Time) return(error)

      // 标准写接口
      func Write(v1: []uint8) return(int, error)
  PtrStructMethods(指针结构方法/函数):
      func Close() return(error)
      func GetTimeout() return(time.Duration)
      func LocalAddr() return(net.Addr)
      func Read(v1: []uint8) return(int, error)

      // 接收 bytes，会阻塞
      func Recv() return([]uint8, error)

      // 接收固定长度的 bytes
      func RecvLen(v1: int64) return([]uint8, error)

      // 接收一个字符串
      func RecvString() return(string, error)

      // 接收一个字符串，如果超时就直接返回
      func RecvStringTimeout(v1: float64) return(string, error)

      // 接收一个 bytes，超时返回
      func RecvTimeout(v1: float64) return([]uint8, error)

      // 远程地址
      func RemoteAddr() return(net.Addr)

      // 发送一个对象，这个对象不同类型会有不同操作，json
      func Send(v1: interface {}) return(error)

      // 设置 DDL
      func SetDeadline(v1: time.Time) return(error)
      func SetReadDeadline(v1: time.Time) return(error)
      func SetWriteDeadline(v1: time.Time) return(error)

      // 标准写
      func Write(v1: []uint8) return(int, error)
      
      // 设置默认超时
      func SetTimeout(v1: float64)

}
```
