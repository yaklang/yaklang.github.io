---
sidebar_position: 14
---

# [tls] TLS工具包

不同于 Golang 原生的 TLS 包，yak 的 TLS 工具包并不提供 TLS 连接等功能，只提供必要的根证书生成与证书签发等功能。

本 tls 工具包重点支持其他工具包对于 TLS 的需求：

1. 比如开启一个 TCP TLS 连接需要的 HTTPS 证书组
1. `mitm` 中间人劫持对证书的需求
1. ...

## API

1. `fn tls.GenerateRootCA(commonName: string): (caCert []byte, pKey []byte, err error)` 使用 CommonName 作为根证书的名字，生成一个简易根证书：PEM格式
1. `fn tls.SignClientCertAndKey(caCert: []byte, pKey: []byte): (cert []byte, pKey []byte, err error)` 使用根证书签出一个 Server 端可用的服务器证书（不开启 x509 认证）：PEM格式
1. `fn tls.SignServerCertAndKey(caCert: []byte, pKey: []byte): (cert []byte, pKey []byte, err error)` 使用证书签出一个 Client 端可用的用户端证书（不开启 x509 认证）：PEM格式
1. `fn tls.SignX509ClientCertAndKey(caCert: []byte, pKey: []byte): (cert []byte, pKey []byte, err error)` 使用根证书签出一个 Server 端可用的服务器证书（开启 x509 认证）：PEM格式
1. `fn tls.SignX509ServerCertAndKey(caCert: []byte, pKey: []byte): (cert []byte, pKey []byte, err error)` 使用证书签出一个 Client 端可用的用户端证书（开启 x509 认证）：PEM格式

## `x509` or Not ?

我们在上面 API 中，发现我们签发服务端证书或者客户端证书的时候，可以选择 `x509` 是否开启。那么什么是 `x509` 认证呢？简单理解可以理解为: **TLS签发的服务端/客户端证书只允许连接受信任的客户端/服务端，这个认证不需要密码，只通过证书来认证，在本包中，我们保证同一个根证书签发的开启 X509 认证的客户端和服务端都可以互相连接**。

:::success 案例：如果你想开启一个 HTTPS 大家都可以访问，就不应该开启 X509 认证

反之，你的 HTTPS 连接如果只想要自己（的证书应用）连接，则需要开启 x509 认证

:::

## 案例

### 生成根证书保存在本地

```go
ca, key, err := tls.GenerateRootCA("Yak Test")
die(err)

// 打印一下 ca key 到屏幕，看一下具体格式：PEM格式
println(string(ca))
println(string(key))

// 把 ca 和 key 保存在本地，如果错误，直接退出
die(file.Save("yak.ca.pem", ca))
die(file.Save("yak.pkey.pem", key))
```

我们执行上述内容之后，获得如下结果

```go
-----BEGIN CERTIFICATE-----
MIIDEzCCAfugAwIBAgIQer+QHpumrucWtk75qj4MIjANBgkqhkiG9w0BAQsFADAT
MREwDwYDVQQDEwhZYWsgVGVzdDAgFw05OTEyMzExNjAwMDBaGA8yMTIwMDUyMjAz
MTIyMlowEzERMA8GA1UEAxMIWWFrIFRlc3QwggEiMA0GCSqGSIb3DQEBAQUAA4IB
DwAwggEKAoIBAQCeGjz3/9a2/NTDmrkCSWDeUDF0sA0EpeD/FfK4RJ4cGD5XwDqY
eutQVHS7pPop3xD9EsajKCE5Y1X3Hl+HKWfyYnUM1fcc5E1k4dMXaNgJdpmHBloo
RpMCA75NVM/bzQ/cSo16K9tq+ymC9+T7Elin8CKVwzxBBFmxTLZR1R+Y2RhJp9Ia
hJNgN0nVggZZD/reD9uc9LFyzCO9H/wonrC2oI+djwHaWGpHJqIh/+mMpTNExpIo
BbjSdZi+BTFnp+Lfvm0vHLj7+pCafQk51RcCJWVdQ8Fr9K70balHRRNIIKG7gStI
sUfzjKLKcOtGbl1UpAmzPDhqCdGIpcRx0lx9AgMBAAGjYTBfMA4GA1UdDwEB/wQE
AwIBpjAdBgNVHSUEFjAUBggrBgEFBQcDAgYIKwYBBQUHAwEwDwYDVR0TAQH/BAUw
AwEB/zAdBgNVHQ4EFgQU2NWjQNUfp7HvVgqhL8glrgt3n6QwDQYJKoZIhvcNAQEL
BQADggEBAHqahMJp9Y9CtIrZuK5ahztFBqO0aHvbGWNzyaZug+eOV9360yBtP52o
FolCA2yxAb2xyI0O2oX4I9OWeDVFRXU4vWayk60a+r00ETRiOVeJTe6agBL8NLtJ
rgxIYG8BZBpt2pwpXuNU6M+Eq/eyWDlvAg9+qixVM9ov63ra39nSziGFyyE/Kg4g
qcq7SA32LyjhMR48fPEp86fC+ItBv6i/2CHpxfAkm/kYpwRJuxcnNPTo910lUZZA
dCA9c6jm8DP9s6FEDADBrtB8JBmrEdsXy2Buo/n/MFgyXaTWqb071RCUaYiWuBpm
CP/SKvx0QOXU18mRbQCFP10r9XPqcXA=
-----END CERTIFICATE-----

-----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEAnho89//WtvzUw5q5Aklg3lAxdLANBKXg/xXyuESeHBg+V8A6
mHrrUFR0u6T6Kd8Q/RLGoyghOWNV9x5fhyln8mJ1DNX3HORNZOHTF2jYCXaZhwZa
KEaTAgO+TVTP280P3EqNeivbavspgvfk+xJYp/AilcM8QQRZsUy2UdUfmNkYSafS
GoSTYDdJ1YIGWQ/63g/bnPSxcswjvR/8KJ6wtqCPnY8B2lhqRyaiIf/pjKUzRMaS
KAW40nWYvgUxZ6fi375tLxy4+/qQmn0JOdUXAiVlXUPBa/Su9G2pR0UTSCChu4Er
SLFH84yiynDrRm5dVKQJszw4agnRiKXEcdJcfQIDAQABAoIBAAxQvOkQi7grT6OA
/OJZtur6Ui/lus3e4fzcx9Bkv/AuT0Tkm2vfP089lO489qOmVZtxB/oTmSrwOvUJ
76UGq6ss0jNSw3IDsqemE5xiNVnfXCwxaXpzrOXeRsedUKetfIvLXuPiYLAfqmci
SjroffFu+jKyR5JE9XujHxyWvmRYfXeS6/tVrcPUNppdCU2XUrjbHCIjsaGDJFVb
RdJ3zG3X2XaD2KhNi9JPmFLvNyGOQxC304vHLZpiSmpjzbqiasIJMDI1ySMQqHG5
om1pZWYEEJG+K02z8lijyc+p9aFAwGQI5YTQkdriX9RNu9EdVkaN9sEh47HUNb7C
zxExJwECgYEAwdTLyDoPnuVr+1WF13eE6OMQLUuXdxl2HMkHbVMqz4StCay/Wiwv
qdBqj+ntScW6/a/J9w3ENsywSQJ9cM4ZEH9HQSkMbOQbjsY+6hkhNyr1+WSZ4Lmf
JrxopC+Fn4hMg46RTn95eapOlMpvn7dz9cYUydrCJcNYtYNFvi1l1z0CgYEA0M/O
eJabg1KgqPx3wwigXfGuCtON4cd4VdwYZgb3eGfyDbhhX4/Ci9EUGOmEAMXKvG2T
opgjc2bPc4DY7yoS8HE3n8r902WoxdWK440HYOXnu4OVals3ZC8WMpp+C7vl40N9
GTo+pHDY0oq7vD8JR1FeSl8joNTunGYH0x4M7kECgYAufMDbJsG0VEXPo7VT9gBU
cpDgrC6Ji/u976DuYXH1D1cI6PuDvvE3gxrrpSkZ9mhgi5aewBh9JB5rhENdmLB+
Omh2gkfOne7WEUnpj1leB9mylKQrN5mqCqn2JsefeWsQalMDRqN1wJjUKrEW10Li
gT1fJC5ILE/MSM2jTPQN6QKBgQCBswH5TvsLZ9BZBnBRGVOa5poHKX5wZhitpAcX
oG4oQNBNi2AYHlBlzhkgnDMc075oqdtQ3BTxAkQK51ZXv5eB96DoRQrCOtvI/inF
y3xwyHzWsRWmuT+/n6u3BNUT7sMNFYdnmxD7zQgwRnHzrGfT/4uEwHF93aTUSl/D
11+KwQKBgCzTf7JngQCIo5IjJq7XjBUZzhTTRsek5opVcVE/ilE8MQ4fVG89VUTF
FqvNsTu8/qKTpuc0HFNUh3Bg5SoxAO47/iYtx7hACjmn1E1bYTByP4kGZ//eiqFz
CvOqogKav8T8ZJDIGNbvo0laAoIyvF+6f6v/9lBQAb/sle8B33Yh
-----END RSA PRIVATE KEY-----

```

### 签发证书，并尝试构建 TLS TCP 通信

```go
// 生成一个 CA
ca, key, err := tls.GenerateRootCA("Yak Test")
die(err)

// 使用 CA 和 KEY 签发一个 TLS 服务端证书
serverCert, serverKey, err := tls.SignServerCertAndKey(ca, key)
die(err)

// 签发一个客户端 TLS 证书
clientCert, clientKey, err := tls.SignClientCertAndKey(ca, key)
die(err)

// 启动一个 TCP 服务器
go tcp.Serve("127.0.0.1", 54326, tcp.serverTls(serverCert, serverKey), tcp.serverCallback(func(conn){
    println("TLS Server RECV conn from: ", conn.RemoteAddr())
    defer conn.Close()

    conn.Send("Hello TLS Config")
}))

// 启动一个 TLS 客户端连接
sleep(1)
conn, err := tcp.Connect("127.0.0.1", 54326, tcp.clientTls(clientCert, clientKey))
die(err)

sleep(2)

raw, err := conn.RecvString()
die(err)

println("Client RECV: ", raw)
```

我们在上述代码中，构建了 CA，并用 CA 签发了客户端和服务端证书，使用证书进行了密码通信（虽然没有进行 x509 加密）

我们执行完上述代码之后，收到的结果为：

```go
TLS Server RECV conn from:  127.0.0.1:55217
Client RECV:  Hello TLS Config
```