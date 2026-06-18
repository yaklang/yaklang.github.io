---
sidebar_position: 2
sidebar_label: "密钥与证书的密码学处理"
---

# 密钥与证书的密码学处理

`tls` 库不只是用来建加密连接，它还提供了一整套**密码学材料**的生成能力：RSA / SM2 密钥对、自签根 CA、签发服务器/客户端证书、RSA 公钥加密私钥解密。本章聚焦"密码学处理"这条线——把 `tls` 生成的密钥与证书，配合 `codec` 做编码、哈希指纹、加密保护与密钥派生，最后落到一套实战的"信封加密"。

:::tip 本章和「网络编程 → TLS」有什么区别？
[网络编程 → TLS 证书生成与加密连接](../network/tls.md) 偏"**把证书接到 TCP/HTTP 服务上建立加密连接**"（mTLS、`tls.Inspect` 探测等）；本章偏"**对密钥和证书本身做密码学处理**"（编码存储、指纹校验、加密保护、密钥派生、混合加密）。两章互补，函数同源。
:::

所有示例均经过 `yak` 实跑验证：用 `assert` 锁定加解密往返一致与哈希长度，用 `println` + `// OUT:` 标注可观察输出。

## 密钥与证书的编码

`tls` 生成的密钥/证书都是 PEM 文本（`-----BEGIN ...-----`）。要写进数据库、放进 JSON 或经 URL 传输时，常用 `codec` 再编一层：Base64 便于存储传输，Hex 便于调试比对，Base64Url 适合放进 URL 与 Cookie。

``````````````yak
// 特性: 密钥的 Base64 / Hex / URL 安全编码与还原
// 关键词: tls.GenerateRSAKeyPair, codec.EncodeBase64, codec.EncodeToHex, codec.EncodeBase64Url
pub, pri = tls.GenerateRSAKeyPair(2048)~
println(str.HasPrefix(string(pub), "-----BEGIN PUBLIC KEY-----"))   // OUT: true

// 公钥 Base64、私钥 Hex、公钥 URL 安全 Base64, 都能无损还原
assert string(codec.DecodeBase64(codec.EncodeBase64(pub))~) == string(pub)
assert string(codec.DecodeHex(codec.EncodeToHex(pri))~) == string(pri)
assert string(codec.DecodeBase64Url(codec.EncodeBase64Url(pub))~) == string(pub)
``````````````

## 证书指纹与哈希

证书指纹（Fingerprint）就是对证书内容做哈希，用于快速比对与固定信任（pinning）。SHA256 是当前推荐，SHA1/MD5 仅用于兼容老系统，国密场景用 SM3。注意 `Md5/Sha1/Sha256` 返回 hex 字符串，`Sm3` 返回字节需 `EncodeToHex`。

``````````````yak
// 特性: 证书多种哈希指纹 + 指纹按冒号分段格式化
// 关键词: tls.GenerateRootCA, codec.Sha256, codec.Md5, codec.Sm3, 证书指纹
caCert, caKey = tls.GenerateRootCA("HashTestCA")~

// 各算法指纹长度固定
assert len(codec.Md5(caCert)) == 32
assert len(codec.Sha1(caCert)) == 40
assert len(codec.Sha256(caCert)) == 64
assert len(codec.EncodeToHex(codec.Sm3(caCert))) == 64   // 国密 SM3

// 把 SHA256 指纹格式化成常见的"每两位一冒号"样式
sha256 = codec.Sha256(caCert)
formatted = ""
for i = 0; i < len(sha256); i += 2 {
    if i > 0 { formatted += ":" }
    formatted += sha256[i:i+2]
}
assert str.Contains(formatted, ":")
println("fingerprint formatted ok")   // OUT: fingerprint formatted ok
``````````````

## 用对称加密保护私钥

私钥落盘前应当加密保护。常见做法是用一把对称密钥（AES-256 或国密 SM4）把私钥加密，再 Base64 存储；读取时解密还原。GCM 模式还能附带完整性校验。

``````````````yak
// 特性: 用 AES-256 / SM4 加密保护 RSA 私钥
// 关键词: codec.AESCBCEncrypt, codec.AESGCMEncrypt, codec.Sm4CBCEncrypt, 私钥保护
pub, pri = tls.GenerateRSAKeyPair(2048)~

aesKey = "12345678901234567890123456789012"   // 32 字节 AES-256
aesIv  = "1234567890123456"                    // 16 字节 IV

// AES-CBC 加密私钥 -> Base64 存储 -> 解密还原
stored = codec.EncodeBase64(codec.AESCBCEncrypt(aesKey, pri, aesIv)~)
restored = codec.AESCBCDecrypt(aesKey, codec.DecodeBase64(stored)~, aesIv)~
assert string(restored) == string(pri)

// AES-GCM(带完整性) 与国密 SM4-CBC 同样可保护私钥
assert string(codec.AESGCMDecrypt(aesKey, codec.AESGCMEncrypt(aesKey, pri, aesIv)~, aesIv)~) == string(pri)
sm4Key = "16BytesSM4Key123"
assert string(codec.Sm4CBCDecrypt(sm4Key, codec.Sm4CBCEncrypt(sm4Key, pri, aesIv)~, aesIv)~) == string(pri)
println("private key protected ok")   // OUT: private key protected ok
``````````````

## RSA 加密 + 密文编码传输

`tls.EncryptWithPkcs1v15` 用公钥加密、`tls.DecryptWithPkcs1v15` 用私钥解密。密文是字节，传输前常用 Base64 编码，并可附一个 SHA256 摘要做完整性校验。

``````````````yak
// 特性: RSA 加密 -> Base64 传输 -> 解密, 并用 SHA256 校验密文完整性
// 关键词: tls.EncryptWithPkcs1v15, tls.DecryptWithPkcs1v15, codec.EncodeBase64, codec.Sha256
pub, pri = tls.GenerateRSAKeyPair(2048)~
secret = "Secret Password: P@ssw0rd123!"

// 公钥加密 -> Base64 编码(便于传输)
enc = tls.EncryptWithPkcs1v15(pub, secret)~
encB64 = codec.EncodeBase64(enc)

// 接收端: Base64 解码 -> 校验完整性 -> 私钥解密
encRecv = codec.DecodeBase64(encB64)~
assert codec.Sha256(enc) == codec.Sha256(encRecv)        // 传输前后密文一致
assert string(tls.DecryptWithPkcs1v15(pri, encRecv)~) == secret
println("RSA transfer ok")   // OUT: RSA transfer ok
``````````````

## 证书链哈希与 HMAC 完整性

对"根 CA + 服务器证书"拼成的证书链整体做哈希，可得到链的指纹；再用 HMAC（带密钥）保护，可防止链被悄悄替换。

``````````````yak
// 特性: 证书链组合哈希 + HMAC 完整性保护
// 关键词: tls.GenerateRootCA, tls.SignServerCertAndKey, codec.Sha256, codec.HmacSha256
rootCA, rootKey = tls.GenerateRootCA("Root CA")~
serverCert, serverKey = tls.SignServerCertAndKey(rootCA, rootKey)~

// 把证书链拼起来算组合指纹
chain = string(rootCA) + string(serverCert)
assert len(codec.Sha256(chain)) == 64

// 用带密钥的 HMAC 保护证书链, 重算比对应一致
k = "certificate-chain-key"
a = codec.EncodeToHex(codec.HmacSha256(k, chain))
b = codec.EncodeToHex(codec.HmacSha256(k, chain))
assert a == b
println("cert chain integrity ok")   // OUT: cert chain integrity ok
``````````````

## 从证书派生密钥

哈希是确定性的：同样的输入永远得到同样的输出。利用这一点可以从证书/主密钥**派生**出多把用途不同的子密钥（加密用、认证用、会话用），无需逐一存储。

``````````````yak
// 特性: 用 SHA256 从证书/主密钥逐级派生子密钥(确定性)
// 关键词: codec.Sha256, 密钥派生, KDF, 确定性密钥
rootCA, rootKey = tls.GenerateRootCA("Root CA")~

// 一级: 证书 -> 主密钥; 二级: 主密钥 + 用途 -> 子密钥
master = codec.Sha256(rootCA)
encKey = codec.Sha256(master + "encryption")
authKey = codec.Sha256(master + "authentication")

// 派生是确定性的, 可随时重算得到同一把密钥
assert codec.Sha256(rootCA) == master
assert encKey != authKey                  // 不同用途派生出不同密钥
assert len(encKey[:32]) == 32             // 取前 32 字节即可当 AES-256 密钥
println("key derivation ok")   // OUT: key derivation ok
``````````````

## 实战：信封加密（RSA + 对称）

RSA 不能直接加密大数据，标准做法是"信封加密"：随机生成一把对称密钥（会话密钥）加密真正的数据，再用 RSA 公钥加密这把会话密钥一起发出。接收端先用私钥解出会话密钥，再解数据。

``````````````yak
// 特性: 信封加密 = AES-GCM 加密数据 + RSA 加密会话密钥
// 关键词: 混合加密, 信封加密, tls.EncryptWithPkcs1v15, codec.AESGCMEncrypt
pub, pri = tls.GenerateRSAKeyPair(2048)~

// 1) 随机会话密钥(32B)与 IV(16B): 用哈希 + 随机串生成
sessionKey = codec.Sha256("session-" + str.RandStr(16))[:32]
iv = codec.Md5("iv-" + str.RandStr(16))[:16]

// 2) 用会话密钥(对称)加密大数据
bigData = "This is a large secret payload. " * 10
cipher = codec.AESGCMEncrypt(sessionKey, bigData, iv)~

// 3) 用 RSA 公钥加密会话密钥(随密文一起发出)
encKey = tls.EncryptWithPkcs1v15(pub, sessionKey)~

// === 接收端 ===
// 4) 私钥解出会话密钥, 再用它解数据
recvKey = tls.DecryptWithPkcs1v15(pri, encKey)~
plain = codec.AESGCMDecrypt(string(recvKey), cipher, iv)~

assert string(plain) == bigData
println("envelope encryption ok")   // OUT: envelope encryption ok
``````````````

## 小结

- **编码存储**：PEM 密钥/证书再套一层 `codec.EncodeBase64`（存储传输）/ `EncodeToHex`（调试）/ `EncodeBase64Url`（URL）。
- **指纹校验**：`codec.Sha256(cert)` 取证书指纹，SHA1/MD5 仅兼容旧系统，国密用 `Sm3`。
- **保护私钥**：用 `AES`/`SM4` 加密私钥再落盘，GCM 模式自带完整性。
- **安全传输**：RSA 加密小数据，密文 `Base64` 编码，配 `Sha256` 校验完整性。
- **密钥派生**：用 `Sha256` 从主密钥确定性地派生多把用途不同的子密钥。
- **大数据加密**：走信封加密——对称密钥加密数据、RSA 加密对称密钥。
- 要把证书接到真实连接上跑 TLS，见 [网络编程 → TLS 证书生成与加密连接](../network/tls.md)。
