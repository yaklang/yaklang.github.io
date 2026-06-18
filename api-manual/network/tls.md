---
sidebar_position: 5
sidebar_label: "TLS 证书生成与加密连接"
---

# TLS 证书生成与加密连接

`tls` 库一边管"密码学材料"（生成 RSA / SM2 密钥对、自签根 CA、签发服务器/客户端证书、RSA 加解密），一边管"加密通道"（探测目标 TLS 信息、给 TCP/HTTP 服务套 TLS）。本章先把证书这条线讲清楚，再把它接到上一章的 TCP 服务上跑通一条加密连接。

## 分组速查表

| 分组 | 代表 API（含调用形态） | 说明 |
| --- | --- | --- |
| 生成密钥对 | `tls.GenerateRSAKeyPair(bits)` `tls.GenerateRSA2048KeyPair()` `tls.GenerateSM2KeyPair()` | 返回 `(公钥PEM, 私钥PEM, error)` |
| 生成根 CA | `tls.GenerateRootCA(commonName)` | 返回 `(证书PEM, 私钥PEM, error)` |
| 签发证书 | `tls.SignServerCertAndKey(ca, caKey)` `tls.SignX509ServerCertAndKey(...)` `tls.SignX509ClientCertAndKey(...)` | 用 CA 签发服务器/客户端证书 |
| RSA 加解密 | `tls.EncryptWithPkcs1v15(pub, data)` `tls.DecryptWithPkcs1v15(pri, enc)` | 公钥加密、私钥解密 |
| TLS 探测 | `tls.Inspect(host:port)` `tls.InspectForceHttp2(...)` | 探测目标的 TLS 版本/协议/密码套件 |
| 套到连接上 | `tcp.serverTls` `tcp.clientTls` `httpserver.tlsCertAndKey` | 见 [TCP 章节](./tcp.md) |

## 生成密钥对

`tls.GenerateRSAKeyPair(位数)` 返回 PEM 文本形式的公钥与私钥。位数越大越安全也越慢，生产环境推荐 2048 位起步。

``````````````yak
// 特性: 生成 RSA 密钥对, 检查 PEM 头
// 关键词: tls.GenerateRSAKeyPair, PEM, PUBLIC KEY, RSA PRIVATE KEY
pub, pri = tls.GenerateRSAKeyPair(2048)~

println(str.HasPrefix(string(pub), "-----BEGIN PUBLIC KEY-----"))        // OUT: true
println(str.HasPrefix(string(pri), "-----BEGIN RSA PRIVATE KEY-----"))   // OUT: true

assert len(pub) > 0 && len(pri) > 0, "keypair must be generated"
``````````````

公私钥都是标准 PEM 文本（`-----BEGIN ...-----` 开头），可以直接写文件或传给别的函数。库里还有 `GenerateRSA1024/2048/4096KeyPair()` 这些定长快捷版，以及国密的 `GenerateSM2KeyPair()`。

## 自签 CA 与签发证书链

要让自己的服务跑 TLS，典型流程是：生成一个根 CA → 用根 CA 签发服务器证书 →（可选）再签客户端证书做双向认证。

``````````````yak
// 特性: 根 CA 签发服务器证书 / 客户端证书
// 关键词: tls.GenerateRootCA, tls.SignServerCertAndKey, tls.SignX509ClientCertAndKey
ca, caKey = tls.GenerateRootCA("MyRootCA")~
println(str.HasPrefix(string(ca), "-----BEGIN CERTIFICATE-----"))   // OUT: true

// 用 CA 签发服务器证书
sCert, sKey = tls.SignServerCertAndKey(ca, caKey)~
println(str.HasPrefix(string(sCert), "-----BEGIN CERTIFICATE-----"))   // OUT: true

// 用同一个 CA 签发客户端证书(用于双向认证 mTLS)
cCert, cKey = tls.SignX509ClientCertAndKey(ca, caKey)~
println(str.HasPrefix(string(cCert), "-----BEGIN CERTIFICATE-----"))   // OUT: true

assert len(sCert) > 0 && len(cCert) > 0, "certs must be signed"
``````````````

`SignServerCertAndKey` / `SignX509ServerCertAndKey` 签出来的是服务器证书（含 Server Auth 用途），`SignX509ClientCertAndKey` 签的是客户端证书（含 Client Auth 用途）。只做单向 TLS（像普通 HTTPS）只需要服务器证书；要做双向认证（mTLS，服务端也校验客户端身份）才需要客户端证书。

## RSA 公钥加密、私钥解密

`tls.EncryptWithPkcs1v15` 用公钥加密、`tls.DecryptWithPkcs1v15` 用私钥解密，是最常见的 RSA 非对称加解密组合。

``````````````yak
// 特性: RSA PKCS1v15 公钥加密 / 私钥解密往返
// 关键词: tls.EncryptWithPkcs1v15, tls.DecryptWithPkcs1v15
pub, pri = tls.GenerateRSAKeyPair(2048)~

plain = "Hello TLS"
enc = tls.EncryptWithPkcs1v15(pub, plain)~     // 公钥加密
dec = tls.DecryptWithPkcs1v15(pri, enc)~       // 私钥解密

println(string(dec))         // OUT: Hello TLS
println(len(enc) == 256)     // OUT: true

assert string(dec) == plain, "decrypt must recover plaintext"
``````````````

2048 位 RSA 的一次加密输出恒为 256 字节（密钥长度 / 8），所以上面 `len(enc) == 256` 成立。注意 PKCS1v15 一次能加密的明文长度有上限（约为密钥字节数减 11），**大数据不要直接用 RSA 加密**，应当用 RSA 加密一个随机对称密钥、再用对称算法（如 AES）加密数据。

:::danger RSA 不能加密大块数据
RSA 是非对称算法，单次加密的明文长度受密钥长度限制（2048 位约 245 字节封顶）。超长明文会直接报错。正确姿势是"信封加密"：随机生成一个 AES 密钥，用它加密数据，再用 RSA 公钥加密这个 AES 密钥。
:::

## 把证书接到 TCP 服务上跑一条加密连接（mTLS）

把上面签出来的证书接到 [TCP 章节](./tcp.md) 的服务上，就得到一条真实的加密连接。下面用同一套 CA 让服务端和客户端互相信任，跑通一次加密回环。

``````````````yak
// 特性: 用现签证书建立 TLS 加密的 TCP 回环
// 关键词: tcp.serverTls, tcp.clientTls, mTLS
ca, caKey = tls.GenerateRootCA("LoopCA")~
sCert, sKey = tls.SignServerCertAndKey(ca, caKey)~

port = os.GetRandomAvailableTCPPort()
ctx, cancel = context.WithCancel(context.Background())
go func() {
    tcp.Serve("127.0.0.1", port,
        tcp.serverContext(ctx),
        tcp.serverTls(sCert, sKey),
        tcp.serverCallback(func(conn) {
            conn.SetTimeout(1)
            d = conn.RecvString()~
            conn.Send("secure:" + d)
            conn.Close()
        }),
    )
}()
time.Sleep(0.5)

conn = tcp.Connect("127.0.0.1", port,
    tcp.clientTimeout(3),
    tcp.clientTls(sCert, sKey, ca),   // 带上 CA, 信任服务端证书
)~
conn.Send("ping")~
println(conn.RecvString()~)   // OUT: secure:ping
conn.Close()
cancel()
``````````````

加密由库透明完成，业务侧的 `Send` / `Recv` 与明文 TCP 完全一样。要给 HTTP 服务起 HTTPS 是同理：`httpserver.Serve(host, port, httpserver.tlsCertAndKey(sCert, sKey), httpserver.handler(...))`。

## 探测目标的 TLS 信息

`tls.Inspect(host:port)` 会和目标握手并迭代返回其 TLS 版本、协议（ALPN）、密码套件等信息，常用于资产识别。它依赖外网且结果随目标而变，所以下面用 `try` 包住、不对具体值做断言。

``````````````yak
// 特性: tls.Inspect 探测目标 TLS 信息(依赖外网, 结果不固定)
// 关键词: tls.Inspect, TLS 版本, 密码套件, ALPN
try {
    for result in tls.Inspect("www.example.com:443")~ {
        log.info("protocol=%v version=%v cipher=%v", result.Protocol, result.Version, result.CipherSuite)
        break  // 只看第一个结果
    }
} catch e {
    log.warn("inspect failed (likely network): %v", e)
}
println("inspect demo done")   // OUT: inspect demo done
``````````````

`tls.Inspect` 的返回结果用 `for ... in ...~` 迭代，每个 `result` 上有 `Protocol`、`Version`、`CipherSuite` 等字段。还有 `tls.InspectForceHttp2` / `tls.InspectForceHttp1_1` 可以强制用指定的 ALPN 协议去探测，便于判断目标是否支持 HTTP/2。

## 小结

- 证书三步走：`GenerateRootCA` → `SignServerCertAndKey`（+ `SignX509ClientCertAndKey` 做 mTLS）。
- 密钥/证书都是 PEM 文本，`GenerateRSAKeyPair(bits)~` 取公私钥。
- RSA 加解密用 `EncryptWithPkcs1v15` / `DecryptWithPkcs1v15`，**只适合小数据**，大数据走信封加密。
- 把证书喂给 `tcp.serverTls` / `tcp.clientTls` 或 `httpserver.tlsCertAndKey` 即可加密连接，业务收发代码不变。
- `tls.Inspect` 探测目标 TLS 信息（依赖外网）。
