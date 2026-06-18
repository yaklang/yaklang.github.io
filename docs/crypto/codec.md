---
sidebar_position: 1
sidebar_label: "编解码与加解密 codec"
---

# 编解码与加解密 codec

`codec` 是安全研发里使用频率最高的工具库之一，几乎贯穿每一次抓包、改包、爆破与漏洞验证。它把四大类能力收在一个库里：

- **编码转换**：Hex / Base64 / Base32 / URL / HTML / Unicode / 中文字符集（GBK、GB18030）。
- **哈希与消息认证**：MD5 / SHA 系列 / 国密 SM3 / MurmurHash，以及带密钥的 HMAC。
- **对称加密**：AES、DES/3DES、国密 SM4、RC4，覆盖 CBC / ECB / CFB / GCM 等模式。
- **非对称加密与签名**：RSA（加解密、签名验签）、国密 SM2（加解密、签名验签）。

本章按功能分组，每一组都给出可直接 `yak` 运行的示例；逐函数的完整定义另见 **「内置标准库完全手册 → codec」**。与密钥/证书相关的密码学处理（生成 RSA/SM2 密钥对、自签 CA、用 AES/SM4 保护私钥等）见同组的 [密钥与证书的密码学处理](./tls-crypto.md)。

:::tip 本章示例怎么读、怎么验证
示例同时使用两种验证手段：`assert` 锁定确定性结论（编码/加密的往返一致、哈希长度等），`println` 打印可直接观察的值，并在同一行用 `// OUT:` 标注真实标准输出。所有示例均经过 `yak` 实跑验证。

三个反复出现的约定：

- **很多 codec 函数返回 `([]byte, error)`**，要用波浪号 `~` 自动处理错误，例如 `codec.DecodeHex(s)~`。
- **二进制结果（哈希、密文、密钥）打印前先转可读形式**，常用 `codec.EncodeToHex(...)` 或 `codec.EncodeBase64(...)`。
- **加密结果是字节，且 CBC/ECB 含随机或固定填充**，比较时统一用 `string(解密结果) == 明文` 做往返断言。
:::

## 分组速查表

| 分组 | 代表函数 | 一句话说明 |
| --- | --- | --- |
| 基础编码 | `EncodeToHex` `DecodeHex` `EncodeBase64` `DecodeBase64` `EncodeBase32` `EncodeBase64Url` | 文本/字节与 Hex/Base64/Base32 互转 |
| URL 编码 | `EncodeUrl` `DecodeUrl` `EscapeQueryUrl` `EscapePathUrl` `DoubleEncodeUrl` | URL 转义、查询/路径转义、双重编码 |
| HTML 编码 | `EncodeHtml` `EncodeHtmlHex` `DecodeHtml` | HTML 实体编/解码（XSS 相关） |
| 哈希 | `Md5` `Sha1` `Sha256` `Sha512` `Sm3` `MMH3Hash32` `MMH3Hash128` | 消息摘要（SM3 返回字节） |
| HMAC | `HmacMD5` `HmacSha1` `HmacSha256` `HmacSha512` `HmacSM3` | 带密钥的消息认证码（返回字节） |
| 对称加密 | `AESCBCEncrypt` `AESECBEncrypt` `AESCFBEncrypt` `AESGCMEncrypt` `DESCBCEncrypt` `TripleDESCBCEncrypt` `Sm4CBCEncrypt` `RC4Encrypt` | AES / DES / 3DES / SM4 / RC4 |
| 非对称 | `RSAEncryptWithOAEP` `RSAEncryptWithPKCS1v15` `SignSHA256WithRSA` `Sm2EncryptC1C2C3` `Sm2SignWithSM3` | RSA / 国密 SM2 |
| 填充 | `PKCS7Padding` `PKCS5Padding` `ZeroPadding` | 块加密填充/去填充 |
| 字符集 | `UnicodeEncode` `UTF8ToGBK` `GBKToUTF8` `UTF8ToGB18030` | Unicode 转义、中文字符集转换 |
| HTTP/字符串 | `EncodeChunked` `DecodeChunked` `StrconvQuote` `FixUTF8` `IsUTF8` | 分块编码、Go 风格引用、UTF-8 检测修复 |

## 基础编码：Hex / Base64 / Base32

最常用的一组编码。`EncodeXxx` 接收字符串或字节、返回字符串；对应的 `DecodeXxx` 返回 `([]byte, error)`，记得用 `~`。`EncodeBase64Url` 是 URL 安全变体（用 `-` `_` 替换 `+` `/`），便于放进 URL 与 Cookie。

``````````````yak
// 特性: 基础编码 codec.EncodeToHex / EncodeBase64 / EncodeBase32 / EncodeBase64Url
// 关键词: codec.EncodeToHex, codec.DecodeHex, codec.EncodeBase64, codec.EncodeBase32
data = "Hello Yaklang"

println(codec.EncodeToHex(data))     // OUT: 48656c6c6f2059616b6c616e67
println(codec.EncodeBase64(data))    // OUT: SGVsbG8gWWFrbGFuZw==
println(codec.EncodeBase32(data))    // OUT: JBSWY3DPEBMWC23MMFXGO===
// URL 安全 Base64: 对含 + / 的字节用 - _ 替换
println(codec.EncodeBase64Url("\xFB\xFF"))   // OUT: -_8

// 解码返回 ([]byte, err), 用 ~ 处理后转字符串, 与原文往返一致
assert string(codec.DecodeHex(codec.EncodeToHex(data))~) == data
assert string(codec.DecodeBase64(codec.EncodeBase64(data))~) == data
assert string(codec.DecodeBase32(codec.EncodeBase32(data))~) == data
assert string(codec.DecodeBase64Url(codec.EncodeBase64Url(data))~) == data
``````````````

## URL 编码

`EncodeUrl` 做百分号编码（实现偏激进，会把普通字符也编码成 `%xx`）；`EscapeQueryUrl` 专门转义查询串里的 `=`、`&` 等保留字符；`EscapePathUrl` 转义 URL 路径；`DoubleEncodeUrl` 做两次编码，是绕过部分 WAF 的常用技巧。解码函数同样返回 `([]byte, error)`。

``````````````yak
// 特性: URL 编码 codec.EncodeUrl / EscapeQueryUrl / EscapePathUrl / DoubleEncodeUrl
// 关键词: codec.EncodeUrl, codec.EscapeQueryUrl, codec.EscapePathUrl, codec.DoubleEncodeUrl
// EncodeUrl 会把空格等都编码成 %xx
println(codec.EncodeUrl("a b"))             // OUT: %61%20%62
// EscapeQueryUrl 只转义查询串里的保留字符
println(codec.EscapeQueryUrl("a=b&c=d"))    // OUT: a%3Db%26c%3Dd

// 基础 URL 编/解码往返
assert string(codec.DecodeUrl(codec.EncodeUrl("name=张三&v=hello world"))~) == "name=张三&v=hello world"
// 路径转义往返(EscapePathUrl / UnescapePathUrl)
assert string(codec.UnescapePathUrl(codec.EscapePathUrl("/api/用户/info"))~) == "/api/用户/info"
// 双重编码后再双重解码可还原(常用于 WAF 绕过测试)
assert string(codec.DoubleDecodeUrl(codec.DoubleEncodeUrl("admin' OR '1'='1"))~) == "admin' OR '1'='1"
``````````````

## HTML 实体编码

`EncodeHtml` 把特殊字符转成 HTML 实体（数字实体，如 `<` → `&#60;`），`EncodeHtmlHex` 转成十六进制实体（如 `<` → `&#x3c;`），常用于 XSS 场景的构造与还原；二者都用 `DecodeHtml` 解码。

``````````````yak
// 特性: HTML 实体编码 codec.EncodeHtml / EncodeHtmlHex / DecodeHtml
// 关键词: codec.EncodeHtml, codec.EncodeHtmlHex, codec.DecodeHtml, HTML 实体, XSS
println(codec.EncodeHtml("<b>"))      // OUT: &#60;&#98;&#62;
println(codec.EncodeHtmlHex("<b>"))   // OUT: &#x3c;&#x62;&#x3e;

// 两种实体都用 DecodeHtml 还原(返回 ([]byte, err))
payload = "<script>alert('XSS')</script>"
assert string(codec.DecodeHtml(codec.EncodeHtml(payload))~) == payload
assert string(codec.DecodeHtml(codec.EncodeHtmlHex(payload))~) == payload
``````````````

## 哈希与摘要

哈希函数把任意数据压成定长指纹。注意返回类型不统一：`Md5` / `Sha1` / `Sha256` / `Sha512` **直接返回十六进制字符串**，而 `Sm3` **返回字节切片**，需要 `codec.EncodeToHex` 转可读形式；`MMH3Hash32` / `MMH3Hash128` 是非加密的快速哈希，返回数值，常用于指纹库与去重。

``````````````yak
// 特性: 哈希 codec.Md5 / Sha1 / Sha256 / Sha512 / Sm3 / MMH3Hash32
// 关键词: codec.Md5, codec.Sha1, codec.Sha256, codec.Sha512, codec.Sm3, codec.MMH3Hash32
data = "Hello Yaklang"

// Md5 / Sha* 直接返回 hex 字符串
println(codec.Md5(data))      // OUT: 74357c51a83c8c04cf366c5e91111b7f
println(codec.Sha1(data))     // OUT: 2898d61436580c31fbeed34bd22f2fe219b040a3
println(codec.Sha256(data))   // OUT: b85796f14942bfab5e0aafe7011c43ba9accc10f38d9df3a5cf22cbbff69a31d

// 各算法的 hex 长度是固定的
assert len(codec.Md5(data)) == 32
assert len(codec.Sha1(data)) == 40
assert len(codec.Sha256(data)) == 64
assert len(codec.Sha512(data)) == 128

// Sm3 返回字节, 需 EncodeToHex
println(codec.EncodeToHex(codec.Sm3(data)))   // OUT: f89d15e57c41cbf8063307d7fe97ad373b8a3dadf5185936f22e2190a5043b2d
assert len(codec.EncodeToHex(codec.Sm3(data))) == 64

// MurmurHash3: 非加密快速哈希, 返回数值
println(codec.MMH3Hash32(data))   // OUT: 1791056375
``````````````

:::danger 哈希函数的返回类型不一致
`codec.Md5` / `codec.Sha1` / `codec.Sha256` / `codec.Sha512` 返回的是**十六进制字符串**，可直接打印；而 `codec.Sm3` 返回的是**字节切片**，直接打印会得到一串数字，必须先用 `codec.EncodeToHex(...)` 转换。拿不准时先打印一下确认类型。
:::

## HMAC 消息认证码

HMAC 在哈希基础上引入密钥，用于消息认证（API 签名、口令存储、防篡改）。所有 `Hmac*` 函数都**返回字节切片**，统一用 `codec.EncodeToHex` 转可读。参数顺序是 `(密钥, 数据)`。

``````````````yak
// 特性: HMAC codec.HmacMD5 / HmacSha1 / HmacSha256 / HmacSha512 / HmacSM3
// 关键词: codec.HmacSha256, codec.HmacMD5, codec.HmacSM3, 消息认证码, MAC
key = "secret_key"
msg = "Important Message"

// 全部返回字节, 用 EncodeToHex 转 hex; 长度与对应哈希一致
assert len(codec.EncodeToHex(codec.HmacMD5(key, msg))) == 32
assert len(codec.EncodeToHex(codec.HmacSha1(key, msg))) == 40
assert len(codec.EncodeToHex(codec.HmacSha256(key, msg))) == 64
assert len(codec.EncodeToHex(codec.HmacSha512(key, msg))) == 128
assert len(codec.EncodeToHex(codec.HmacSM3(key, msg))) == 64   // 国密 HMAC-SM3

// 相同密钥与数据, HMAC 结果稳定可复现(用于签名校验)
a = codec.EncodeToHex(codec.HmacSha256(key, msg))
b = codec.EncodeToHex(codec.HmacSha256(key, msg))
assert a == b
println("hmac-sha256 length:", len(a))   // OUT: hmac-sha256 length: 64
``````````````

## 对称加密：AES

对称加密用同一把密钥加解密。AES 支持多种模式：

- **CBC**：最常用，需 16 字节 IV，自动 PKCS7 填充。
- **ECB**：不需要 IV（传 `nil`），相同明文块会产生相同密文，安全性差，不推荐。
- **CFB**：流密码模式，需 IV。
- **GCM**：认证加密（AEAD），第三参数是附加认证数据 AAD，加解密必须一致。

密钥长度决定 AES 强度：16 字节 = AES-128，24 = AES-192，32 = AES-256。加解密函数都返回 `([]byte, error)`。

``````````````yak
// 特性: AES 四种模式 codec.AES{CBC,ECB,CFB,GCM}Encrypt
// 关键词: codec.AESCBCEncrypt, codec.AESECBEncrypt, codec.AESCFBEncrypt, codec.AESGCMEncrypt
key = "1234567890123456"   // AES-128: 16 字节密钥
iv  = "abcdefghijklmnop"   // CBC/CFB: 16 字节 IV
pt  = "Secret Message"

// CBC: 最常用, 自动 PKCS7 填充
assert string(codec.AESCBCDecrypt(key, codec.AESCBCEncrypt(key, pt, iv)~, iv)~) == pt
// ECB: 不需要 IV, 传 nil
assert string(codec.AESECBDecrypt(key, codec.AESECBEncrypt(key, pt, nil)~, nil)~) == pt
// CFB: 流密码模式
assert string(codec.AESCFBDecrypt(key, codec.AESCFBEncrypt(key, pt, iv)~, iv)~) == pt
// GCM: 认证加密, 第三参数 AAD 加解密必须一致
gcm = codec.AESGCMEncrypt(key, pt, []byte("aad"))~
println(string(codec.AESGCMDecrypt(key, gcm, []byte("aad"))~))   // OUT: Secret Message
``````````````

:::danger 密钥/IV 长度必须匹配算法
AES-128 需要 16 字节密钥，AES-192/256 分别是 24/32 字节；CBC/CFB 模式的 IV 必须正好 16 字节；长度不对会直接返回 error（被 `~` 抛成 panic）。ECB 模式不需要 IV，传 `nil` 即可。**ECB 模式相同明文块产生相同密文，会泄漏数据模式，除非有特殊需求否则不要使用。**
:::

## 对称加密：DES / 3DES

DES 是较老的对称算法（密钥 8 字节），安全性已不足；3DES（TripleDES）用三个 DES 密钥串联（密钥 24 字节）提升强度。除遗留系统兼容外，新系统应优先选 AES 或 SM4。

``````````````yak
// 特性: DES / 3DES codec.DESCBCEncrypt / TripleDESCBCEncrypt
// 关键词: codec.DESCBCEncrypt, codec.TripleDESCBCEncrypt, DES, 3DES
desKey = "12345678"                   // DES: 8 字节密钥
desIV  = "abcdefgh"                   // DES: 8 字节 IV
des3Key = "123456781234567812345678"  // 3DES: 24 字节密钥
pt = "Secret Message"

// DES-CBC 往返
assert string(codec.DESCBCDecrypt(desKey, codec.DESCBCEncrypt(desKey, pt, desIV)~, desIV)~) == pt
// 3DES-CBC 往返(IV 仍是 8 字节)
assert string(codec.TripleDESCBCDecrypt(des3Key, codec.TripleDESCBCEncrypt(des3Key, pt, desIV)~, desIV)~) == pt
println("DES / 3DES roundtrip ok")   // OUT: DES / 3DES roundtrip ok
``````````````

## 对称加密：国密 SM4

国密 **SM4** 是分组密码（密钥/IV 均 16 字节），接口形态与 AES 完全一致，同样支持 CBC / ECB / GCM。合规与国产化场景常用。

``````````````yak
// 特性: 国密 SM4 codec.Sm4{CBC,ECB,GCM}Encrypt
// 关键词: codec.Sm4CBCEncrypt, codec.Sm4ECBEncrypt, codec.Sm4GCMEncrypt, SM4, 国密
key = "1234567890123456"   // SM4: 16 字节密钥
iv  = "abcdefghijklmnop"   // SM4: 16 字节 IV
pt  = "Secret Message"

// CBC / ECB(传 nil) / GCM(带 AAD) 往返
assert string(codec.Sm4CBCDecrypt(key, codec.Sm4CBCEncrypt(key, pt, iv)~, iv)~) == pt
assert string(codec.Sm4ECBDecrypt(key, codec.Sm4ECBEncrypt(key, pt, nil)~, nil)~) == pt
assert string(codec.Sm4GCMDecrypt(key, codec.Sm4GCMEncrypt(key, pt, []byte("aad"))~, []byte("aad"))~) == pt
println("SM4 roundtrip ok")   // OUT: SM4 roundtrip ok
``````````````

## 流密码：RC4

RC4 是经典流密码，密钥长度可变，加密与解密是同一种运算。它已被证明存在弱点，**仅用于兼容旧协议或分析样本，不要在新系统里用它保护数据**。

``````````````yak
// 特性: RC4 流密码 codec.RC4Encrypt / RC4Decrypt
// 关键词: codec.RC4Encrypt, codec.RC4Decrypt, RC4, 流密码
key = "secretkey"
pt  = "Secret Message"

enc = codec.RC4Encrypt(key, pt)~
assert string(codec.RC4Decrypt(key, enc)~) == pt
println("RC4 roundtrip ok")   // OUT: RC4 roundtrip ok
``````````````

## 非对称加密与签名：RSA

RSA 用公钥加密、私钥解密，用私钥签名、公钥验签。codec 的 RSA 函数需要 PEM 格式的公私钥，可用 `tls` 库现场生成（详见 [密钥与证书的密码学处理](./tls-crypto.md)）。`RSAEncryptWithOAEP` 是推荐的加密填充，`SignSHA256WithRSA` 做 SHA256 签名。

``````````````yak
// 特性: RSA 加解密与签名 codec.RSAEncryptWithOAEP / SignSHA256WithRSA
// 关键词: codec.RSAEncryptWithOAEP, codec.RSAEncryptWithPKCS1v15, codec.SignSHA256WithRSA
// 用 tls 库生成 PEM 公私钥
pub, pri = tls.GenerateRSAKeyPair(2048)~

// OAEP / PKCS1v15 两种填充, 公钥加密、私钥解密往返
assert string(codec.RSADecryptWithOAEP(pri, codec.RSAEncryptWithOAEP(pub, "secret")~)~) == "secret"
assert string(codec.RSADecryptWithPKCS1v15(pri, codec.RSAEncryptWithPKCS1v15(pub, "secret")~)~) == "secret"

// 私钥签名、公钥验签: 验签函数返回 error, nil 表示通过
sig = codec.SignSHA256WithRSA(pri, "msg")~
assert codec.SignVerifySHA256WithRSA(pub, "msg", sig) == nil
println("RSA encrypt/sign ok")   // OUT: RSA encrypt/sign ok
``````````````

:::danger RSA 不能加密大块数据
RSA 单次加密的明文长度受密钥长度限制（2048 位约 245 字节封顶），超长会直接报错。正确姿势是"信封加密"：随机生成一个对称密钥（AES/SM4），用它加密数据，再用 RSA 公钥加密这个对称密钥。完整示例见 [密钥与证书的密码学处理 → 混合加密](./tls-crypto.md)。
:::

## 非对称加密与签名：国密 SM2

国密 **SM2** 基于椭圆曲线，自带密钥对生成函数，无需外部准备。密文有 `C1C2C3` 和 `C1C3C2` 两种分块排列（与对接系统保持一致即可）；签名用 `Sm2SignWithSM3`、验签用 `Sm2VerifyWithSM3`。密文随机，所以只断言"解密能还原明文"。

``````````````yak
// 特性: 国密 SM2 codec.Sm2GenerateHexKeyPair / Sm2EncryptC1C2C3 / Sm2SignWithSM3
// 关键词: codec.Sm2GenerateHexKeyPair, codec.Sm2EncryptC1C2C3, codec.Sm2SignWithSM3, SM2, 国密
// 现场生成一对 SM2 密钥(hex 形式), 返回 (私钥, 公钥)
priv, pub = codec.Sm2GenerateHexKeyPair()~

// 两种密文排列模式都做加解密往返
assert string(codec.Sm2DecryptC1C2C3(priv, codec.Sm2EncryptC1C2C3(pub, "secret")~)~) == "secret"
assert string(codec.Sm2DecryptC1C3C2(priv, codec.Sm2EncryptC1C3C2(pub, "secret")~)~) == "secret"

// SM2 签名(基于 SM3)与验签: 验签返回 error, nil 表示通过
sig = codec.Sm2SignWithSM3(priv, "msg")~
assert codec.Sm2VerifyWithSM3(pub, "msg", sig) == nil
println("SM2 encrypt/sign ok")   // OUT: SM2 encrypt/sign ok
``````````````

:::note 还需要 PEM 形式的 SM2 密钥？
`codec.Sm2GenerateHexKeyPair()` 返回 hex 文本的密钥对；如需 PEM 格式，用 `codec.Sm2GeneratePemKeyPair()`（同样返回 `(私钥, 公钥)`）。
:::

## 块填充：PKCS7 / PKCS5 / Zero

CBC、ECB 等块加密要求数据长度是块大小的整数倍。`codec.AES*` / `codec.Sm4*` 系列内部已自动填充，但当你手工实现分块逻辑或对接外部系统时，可以直接用填充函数。`PKCS7Padding` 默认填充到 16 字节块；`PKCS5Padding` / `ZeroPadding` 需指定块大小。

``````````````yak
// 特性: 块填充 codec.PKCS7Padding / PKCS5Padding / ZeroPadding
// 关键词: codec.PKCS7Padding, codec.PKCS5Padding, codec.ZeroPadding, 块填充
// PKCS7: 默认填充到 16 字节块
padded = codec.PKCS7Padding([]byte("hi"))~
assert len(padded) == 16
assert string(codec.PKCS7UnPadding(padded)~) == "hi"

// PKCS5: 需指定块大小(通常 8)
p5 = codec.PKCS5Padding([]byte("Test Data"), 8)~
assert string(codec.PKCS5UnPadding(p5)~) == "Test Data"

// Zero: 零字节填充到指定块大小
z = codec.ZeroPadding([]byte("Test Data"), 16)~
assert len(z) == 16
assert string(codec.ZeroUnPadding(z)~) == "Test Data"
println("padding roundtrip ok")   // OUT: padding roundtrip ok
``````````````

## 字符集与 Unicode 转义

`UnicodeEncode` / `UnicodeDecode` 处理 `\uXXXX` 形式的 Unicode 转义；`UTF8ToGBK` / `GBKToUTF8`、`UTF8ToGB18030` / `GB18030ToUTF8` 在 UTF-8 与中文字符集之间转换，处理中文乱码时很常用。这些转换函数返回 `([]byte, error)`。

``````````````yak
// 特性: 字符集 codec.UnicodeEncode / UTF8ToGBK / UTF8ToGB18030
// 关键词: codec.UnicodeEncode, codec.UTF8ToGBK, codec.GBKToUTF8, codec.UTF8ToGB18030, 中文编码
// Unicode 转义往返
println(codec.UnicodeEncode("A"))   // OUT: \u0041
assert string(codec.UnicodeDecode(codec.UnicodeEncode("你好"))~) == "你好"

// UTF-8 与 GBK / GB18030 往返(返回 ([]byte, err))
assert string(codec.GBKToUTF8(codec.UTF8ToGBK("中文")~)~) == "中文"
assert string(codec.GB18030ToUTF8(codec.UTF8ToGB18030("中文")~)~) == "中文"
``````````````

## HTTP 分块编码与字符串转义

`EncodeChunked` / `DecodeChunked` 处理 HTTP `Transfer-Encoding: chunked` 分块传输；`StrconvQuote` / `StrconvUnquote` 做 Go 风格的字符串引用转义（把 `\n`、`\t` 等转成可见的转义序列），在打印含控制字符的数据时很有用。

``````````````yak
// 特性: 分块编码 codec.EncodeChunked / 字符串转义 codec.StrconvQuote
// 关键词: codec.EncodeChunked, codec.DecodeChunked, codec.StrconvQuote, Chunked, 转义
// HTTP chunked 编/解码往返
assert string(codec.DecodeChunked(codec.EncodeChunked("chunked body")~)~) == "chunked body"

// Go 风格引用: 控制字符转为可见转义序列
println(codec.StrconvQuote("a\nb"))   // OUT: "a\nb"
assert string(codec.StrconvUnquote(codec.StrconvQuote("Hello\tWorld"))~) == "Hello\tWorld"
``````````````

## UTF-8 检测与修复

`IsUTF8` 判断字节是否为合法 UTF-8（返回 `(bool, error)`，用 `~` 取布尔值）；`FixUTF8` 把非法字节替换/修复成合法 UTF-8 字符串，处理混合编码的脏数据时常用。

``````````````yak
// 特性: UTF-8 检测/修复 codec.IsUTF8 / FixUTF8
// 关键词: codec.IsUTF8, codec.FixUTF8, UTF8 检测, 编码修复
// IsUTF8 返回 (bool, error), 用 ~ 取布尔结果
assert codec.IsUTF8("hello")~ == true
assert codec.IsUTF8("中文")~ == true

// FixUTF8 对合法字符串原样返回
println(codec.FixUTF8("hello"))   // OUT: hello
``````````````

## 实战场景

下面几个例子把多个 codec 函数组合起来，对应安全研发里的高频需求。

### 用 HMAC 加盐存储密码

口令不应明文或仅 MD5 存储。常见做法是为每个用户生成随机盐，用 `HmacSha256(盐, 口令)` 计算摘要后存储；登录时用同样方式计算并比对。

``````````````yak
// 特性: 加盐口令存储与校验
// 关键词: codec.HmacSha256, 口令存储, 加盐, 登录校验
salt = "random_salt_value"
stored = codec.EncodeToHex(codec.HmacSha256(salt, "UserPassword123!"))

// 登录时用同样的盐与算法计算并比对
login = codec.EncodeToHex(codec.HmacSha256(salt, "UserPassword123!"))
assert stored == login
println("password verified:", stored == login)   // OUT: password verified: true
``````````````

### API 请求签名

调用方用密钥对请求参数做 HMAC 签名随请求发出，服务端用同一密钥重算比对，防止参数被篡改。

``````````````yak
// 特性: API 请求 HMAC 签名与校验
// 关键词: codec.HmacSha256, API 签名, 防篡改
secret = "api_secret_key"
params = "user_id=12345&timestamp=1700000000&action=transfer"

clientSig = codec.EncodeToHex(codec.HmacSha256(secret, params))
serverSig = codec.EncodeToHex(codec.HmacSha256(secret, params))
assert clientSig == serverSig
println("signature valid:", clientSig == serverSig)   // OUT: signature valid: true
``````````````

### 多层编码混淆与还原

前端常对参数做 Base64 + URL 双层编码以避免特殊字符问题；后端按相反顺序还原。

``````````````yak
// 特性: Base64 + URL 多层编码与还原
// 关键词: codec.EncodeBase64, codec.EncodeUrl, 多层编码, 数据混淆
raw = "user_id=admin&role=administrator"

// 编码: 先 Base64 再 URL
obfuscated = codec.EncodeUrl(codec.EncodeBase64(raw))
// 解码: 先 URL 再 Base64(顺序相反)
step1 = codec.DecodeUrl(obfuscated)~
recovered = string(codec.DecodeBase64(string(step1))~)

assert recovered == raw
println("recovered:", recovered)   // OUT: recovered: user_id=admin&role=administrator
``````````````
