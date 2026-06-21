# codec {#library-codec}

`codec` 库是 yaklang 的编解码与密码学工具箱，覆盖编码转换、哈希、对称/非对称加密、国密算法、字符集转换等近 180 个函数，是数据处理与密码学相关脚本的核心依赖。

典型使用场景：

- 编码转换：`codec.EncodeBase64` / `codec.DecodeBase64`、`codec.EncodeToHex` / `codec.DecodeHex`、`codec.EncodeUrl` / `codec.DecodeUrl`、`codec.EncodeHtml` / `codec.DecodeHtml`、`codec.UnicodeEncode` / `codec.UnicodeDecode`，以及 `codec.AutoDecode` 智能识别多层编码。
- 哈希与 HMAC：`codec.Md5` / `codec.Sha1` / `codec.Sha256` / `codec.Sm3`、`codec.HmacSha256` / `codec.HmacSM3`、`codec.MMH3Hash128` 等。
- 对称加密：AES（`codec.AESCBCEncrypt` / `codec.AESGCMEncrypt` 等多模式多填充）、DES/3DES、RC4，以及国密 `codec.Sm4*`。
- 非对称与签名：RSA（`codec.RSAEncryptWithOAEP` / `codec.RSASignWithPKCS1v15Digest` 等）、国密 `codec.Sm2*`（加解密、签名、密钥交换）。
- 字符集与填充：`codec.GBKToUTF8` / `codec.UTF8ToGBK`、`codec.PKCS7Padding` / `codec.ZeroPadding` 等。

与相邻库的关系：`codec` 是纯计算库，无副作用，被 `poc`、`jwt`、`tls`、`yso` 等大量上层库依赖。注意部分哈希/加密函数返回 `[]byte`，需要 `codec.EncodeToHex`/`codec.EncodeBase64` 转成可读字符串；对称算法对密钥/IV 长度有严格要求。

> 共 180 个函数、5 个实例

## 实例

|实例名|类型|说明|
|:--|:--|:--|
| CBC | `string` | &#34;CBC&#34; |
| CFB | `string` | &#34;CFB&#34; |
| CTR | `string` | &#34;CTR&#34; |
| ECB | `string` | &#34;ECB&#34; |
| OFB | `string` | &#34;OFB&#34; |

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [codec.AESCBCDecrypt](#aescbcdecrypt) | `key []byte, i any, iv []byte` | `[]byte, error` | AESDecryptCBCWithPKCSPadding 使用 AES 算法在 CBC 模式下用 PKCS7 填充解密数据 |
| [codec.AESCBCDecryptWithPKCS7Padding](#aescbcdecryptwithpkcs7padding) | `key []byte, i any, iv []byte` | `[]byte, error` | AESDecryptCBCWithPKCSPadding 使用 AES 算法在 CBC 模式下用 PKCS7 填充解密数据 |
| [codec.AESCBCDecryptWithZeroPadding](#aescbcdecryptwithzeropadding) | `key []byte, i any, iv []byte` | `[]byte, error` | AESDecryptCBCWithZeroPadding 使用 AES 算法在 CBC 模式下用零(Zero)填充解密数据 |
| [codec.AESCBCEncrypt](#aescbcencrypt) | `key []byte, i any, iv []byte` | `[]byte, error` | AESEncryptCBCWithPKCSPadding 使用 AES 算法在 CBC 模式下用 PKCS7 填充加密数据 |
| [codec.AESCBCEncryptWithPKCS7Padding](#aescbcencryptwithpkcs7padding) | `key []byte, i any, iv []byte` | `[]byte, error` | AESEncryptCBCWithPKCSPadding 使用 AES 算法在 CBC 模式下用 PKCS7 填充加密数据 |
| [codec.AESCBCEncryptWithZeroPadding](#aescbcencryptwithzeropadding) | `key []byte, i any, iv []byte` | `[]byte, error` | AESEncryptCBCWithZeroPadding 使用 AES 算法在 CBC 模式下用零(Zero)填充加密数据 |
| [codec.AESCFBDecrypt](#aescfbdecrypt) | `key []byte, i any, iv []byte` | `[]byte, error` | AESDecryptCFBWithPKCSPadding 使用 AES 算法在 CFB 模式下用 PKCS7 填充解密数据 |
| [codec.AESCFBEncrypt](#aescfbencrypt) | `key []byte, i any, iv []byte` | `[]byte, error` | AESEncryptCFBWithPKCSPadding 使用 AES 算法在 CFB 模式下用 PKCS7 填充加密数据 |
| [codec.AESDecrypt](#aesdecrypt) | `key []byte, i any, iv []byte` | `[]byte, error` | AESDecryptCBCWithPKCSPadding 使用 AES 算法在 CBC 模式下用 PKCS7 填充解密数据 |
| [codec.AESDecryptBasic](#aesdecryptbasic) | `key []byte, data []byte, iv []byte, mode string` | `[]byte, error` | 使用 AES 算法对数据进行解密，支持多种模式(CBC、CFB、ECB、OFB、CTR) |
| [codec.AESDecryptCFBWithPKCSPadding](#aesdecryptcfbwithpkcspadding) | `key []byte, i any, iv []byte` | `[]byte, error` | 使用 AES 算法在 CFB 模式下用 PKCS7 填充解密数据 |
| [codec.AESDecryptCFBWithZeroPadding](#aesdecryptcfbwithzeropadding) | `key []byte, i any, iv []byte` | `[]byte, error` | 使用 AES 算法在 CFB 模式下用零(Zero)填充解密数据 |
| [codec.AESECBDecrypt](#aesecbdecrypt) | `key []byte, i any, iv []byte` | `[]byte, error` | AESDecryptECBWithPKCSPadding 使用 AES 算法在 ECB 模式下用 PKCS7 填充解密数据(ECB 模式下 iv 无用，传 nil) |
| [codec.AESECBDecryptWithPKCS7Padding](#aesecbdecryptwithpkcs7padding) | `key []byte, i any, iv []byte` | `[]byte, error` | AESDecryptECBWithPKCSPadding 使用 AES 算法在 ECB 模式下用 PKCS7 填充解密数据(ECB 模式下 iv 无用，传 nil) |
| [codec.AESECBDecryptWithZeroPadding](#aesecbdecryptwithzeropadding) | `key []byte, i any, iv []byte` | `[]byte, error` | AESDecryptECBWithZeroPadding 使用 AES 算法在 ECB 模式下用零(Zero)填充解密数据(ECB 模式下 iv 无用，传 nil) |
| [codec.AESECBEncrypt](#aesecbencrypt) | `key []byte, i any, iv []byte` | `[]byte, error` | AESEncryptECBWithPKCSPadding 使用 AES 算法在 ECB 模式下用 PKCS7 填充加密数据(ECB 模式下 iv 无用，传 nil) |
| [codec.AESECBEncryptWithPKCS7Padding](#aesecbencryptwithpkcs7padding) | `key []byte, i any, iv []byte` | `[]byte, error` | AESEncryptECBWithPKCSPadding 使用 AES 算法在 ECB 模式下用 PKCS7 填充加密数据(ECB 模式下 iv 无用，传 nil) |
| [codec.AESECBEncryptWithZeroPadding](#aesecbencryptwithzeropadding) | `key []byte, i any, iv []byte` | `[]byte, error` | AESEncryptECBWithZeroPadding 使用 AES 算法在 ECB 模式下用零(Zero)填充加密数据(ECB 模式下 iv 无用，传 nil) |
| [codec.AESEncrypt](#aesencrypt) | `key []byte, i any, iv []byte` | `[]byte, error` | AESEncryptCBCWithPKCSPadding 使用 AES 算法在 CBC 模式下用 PKCS7 填充加密数据 |
| [codec.AESEncryptBasic](#aesencryptbasic) | `key []byte, data []byte, iv []byte, mode string` | `[]byte, error` | 使用 AES 算法对数据进行加密，支持多种模式(CBC、CFB、ECB、OFB、CTR) |
| [codec.AESEncryptCFBWithPKCSPadding](#aesencryptcfbwithpkcspadding) | `key []byte, i any, iv []byte` | `[]byte, error` | 使用 AES 算法在 CFB 模式下用 PKCS7 填充加密数据 |
| [codec.AESEncryptCFBWithZeroPadding](#aesencryptcfbwithzeropadding) | `key []byte, i any, iv []byte` | `[]byte, error` | 使用 AES 算法在 CFB 模式下用零(Zero)填充加密数据 |
| [codec.AESGCMDecrypt](#aesgcmdecrypt) | `key []byte, data any, nonce []byte` | `[]byte, error` | 使用 AES-GCM 认证加密模式解密数据；nonce 为空时从密文前置部分提取 nonce |
| [codec.AESGCMDecryptWithNonceSize12](#aesgcmdecryptwithnoncesize12) | `key []byte, data any, nonce []byte` | `[]byte, error` | 使用 AES-GCM 模式以 12 字节 nonce 解密数据 |
| [codec.AESGCMDecryptWithNonceSize16](#aesgcmdecryptwithnoncesize16) | `key []byte, data any, nonce []byte` | `[]byte, error` | 使用 AES-GCM 模式以 16 字节 nonce 解密数据 |
| [codec.AESGCMEncrypt](#aesgcmencrypt) | `key []byte, data any, nonceRaw []byte` | `[]byte, error` | //AES GCM 加密后的payload shiro 1.4.2版本更换为了AES-GCM加密方式 |
| [codec.AESGCMEncryptWithNonceSize12](#aesgcmencryptwithnoncesize12) | `key []byte, data any, nonceRaw []byte` | `[]byte, error` | 使用 AES-GCM 模式以 12 字节 nonce 加密数据 |
| [codec.AESGCMEncryptWithNonceSize16](#aesgcmencryptwithnoncesize16) | `key []byte, data any, nonceRaw []byte` | `[]byte, error` | //AES GCM 加密后的payload shiro 1.4.2版本更换为了AES-GCM加密方式 |
| [codec.AutoDecode](#autodecode) | `i any` | `[]*AutoDecodeResult` | 自动识别并逐层解码输入数据(依次尝试 URL/HTML 实体/Hex/Unicode/Base32/Base64/JWT/字符集等) |
| [codec.CryptoRandBytes](#cryptorandbytes) | `n int` | `[]byte` | RandBytes 生成 n 个密码学安全的随机字节 |
| [codec.DESCBCDecrypt](#descbcdecrypt) | `key []byte, i any, iv []byte` | `[]byte, error` | DESDecryptCBCWithZeroPadding 使用 DES 算法在 CBC 模式下用零填充解密数据 |
| [codec.DESCBCEncrypt](#descbcencrypt) | `key []byte, i any, iv []byte` | `[]byte, error` | DESEncryptCBCWithZeroPadding 使用 DES 算法在 CBC 模式下用零填充加密数据 |
| [codec.DESDecrypt](#desdecrypt) | `key []byte, i any, iv []byte` | `[]byte, error` | DESDecryptCBCWithZeroPadding 使用 DES 算法在 CBC 模式下用零填充解密数据 |
| [codec.DESECBDecrypt](#desecbdecrypt) | `key []byte, data []byte` | `[]byte, error` | DESECBDec 使用 DES 算法在 ECB 模式下用零填充解密数据(ECB 模式下无 iv 参数) |
| [codec.DESECBEncrypt](#desecbencrypt) | `key []byte, data []byte` | `[]byte, error` | DESECBEnc 使用 DES 算法在 ECB 模式下用零填充加密数据(ECB 模式下无 iv 参数) |
| [codec.DESEncrypt](#desencrypt) | `key []byte, i any, iv []byte` | `[]byte, error` | DESEncryptCBCWithZeroPadding 使用 DES 算法在 CBC 模式下用零填充加密数据 |
| [codec.DecodeASCII](#decodeascii) | `s string` | `string, error` | StrConvUnquote 解析带引号的 Go 字面量字符串，去掉外层引号并处理转义序列（导出名为 codec.StrconvUnquote / codec.DecodeASCII） |
| [codec.DecodeBase32](#decodebase32) | `i string` | `[]byte, error` | 将标准 Base32 字符串解码为原始字节 |
| [codec.DecodeBase64](#decodebase64) | `i string` | `[]byte, error` | 将标准 Base64 字符串解码为原始字节 |
| [codec.DecodeBase64Url](#decodebase64url) | `i any` | `[]byte, error` | 将 URL 安全的 Base64 字符串解码为原始字节 |
| [codec.DecodeChunked](#decodechunked) | `raw []byte` | `[]byte, error` | HTTPChunkedDecode 解码 HTTP Transfer-Encoding: chunked 分块传输数据，还原原始 body |
| [codec.DecodeHex](#decodehex) | `i string` | `[]byte, error` | 将十六进制(Hex)字符串解码为原始字节，支持可选的 0x 前缀 |
| [codec.DecodeHtml](#decodehtml) | `s string` | `string` | UnescapeHtmlString 将 HTML 实体还原为原始字符，与 codec.EscapeHtml 配对使用（导出名为 codec.DecodeHtml） |
| [codec.DecodeUrl](#decodeurl) | `s string` | `string, error` | QueryUnescape 对 URL 百分号编码的字符串做查询串解码，同时兼容 %uXXXX 形式 |
| [codec.DoubleDecodeUrl](#doubledecodeurl) | `i string` | `string, error` | 对输入做两次 URL 解码（导出名为 codec.DoubleDecodeUrl） |
| [codec.DoubleEncodeUrl](#doubleencodeurl) | `i any` | `string` | 对输入做两次 URL 编码（导出名为 codec.DoubleEncodeUrl） |
| [codec.EncodeASCII](#encodeascii) | `s string` | `string` | StrConvQuoteHex 将字符串转换为带双引号的可打印形式，非字母数字字节统一转义为 \xNN |
| [codec.EncodeBase32](#encodebase32) | `i any` | `string` | 将输入数据编码为标准 Base32 字符串 |
| [codec.EncodeBase64](#encodebase64) | `i any` | `string` | 将输入数据编码为标准 Base64 字符串 |
| [codec.EncodeBase64Url](#encodebase64url) | `i any` | `string` | 将输入数据编码为 URL 安全的 Base64 字符串(用 - _ 替换 + /，并去掉末尾的 =) |
| [codec.EncodeChunked](#encodechunked) | `raw []byte` | `[]byte` | HTTPChunkedEncode 将原始数据编码为 HTTP Transfer-Encoding: chunked 分块传输格式 |
| [codec.EncodeHtml](#encodehtml) | `i any` | `string` | EncodeHtmlEntity 将输入数据的每个字节编码为十进制 HTML 实体(如 &lt; 编码为 &amp;#60;)，常用于 XSS 构造 |
| [codec.EncodeHtmlHex](#encodehtmlhex) | `i any` | `string` | EncodeHtmlEntityHex 将输入数据的每个字节编码为十六进制 HTML 实体(如 &lt; 编码为 &amp;#x3c;)，常用于 XSS 构造 |
| [codec.EncodeToHex](#encodetohex) | `i any` | `string` | 将输入数据编码为十六进制(Hex)字符串 |
| [codec.EncodeToPrintable](#encodetoprintable) | `s string` | `string` | StrConvQuoteHex 将字符串转换为带双引号的可打印形式，非字母数字字节统一转义为 \xNN |
| [codec.EncodeUrl](#encodeurl) | `i any` | `string` | EncodeUrlCode 对输入数据做激进的百分号(URL)编码，把每个字节都编码成 %xx 形式 |
| [codec.EscapeHtml](#escapehtml) | `s string` | `string` | EscapeHtmlString 对字符串做 HTML 实体转义，将 &lt; &gt; &amp; &#39; &#34; 等转为对应的 HTML 实体（导出名为 codec.EscapeHtml） |
| [codec.EscapePathUrl](#escapepathurl) | `s string` | `string` | PathEscape 对字符串做 URL 路径转义，将空格、斜杠等特殊字符转为百分号编码（导出名为 codec.EscapePathUrl） |
| [codec.EscapeQueryUrl](#escapequeryurl) | `s string` | `string` | QueryEscape 对字符串做 URL 查询串转义，把保留字符(如空格、= 、&amp;)转义为 %xx(空格转为 +) |
| [codec.EscapeUrl](#escapeurl) | `s string` | `string` | QueryEscape 对字符串做 URL 查询串转义，把保留字符(如空格、= 、&amp;)转义为 %xx(空格转为 +) |
| [codec.FixUTF8](#fixutf8) | `s []byte` | `string` | EscapeInvalidUTF8Byte 将字节数据中的非法 UTF-8 字节与不可见控制字符转义为 \xNN 形式，得到可读字符串 |
| [codec.GB18030ToUTF8](#gb18030toutf8) | `s []byte` | `[]byte, error` | 将 GB18030 编码的字节转换为 UTF-8 字节 |
| [codec.GBKSafe](#gbksafe) | `s []byte` | `string, error` | GBKSafeString 将字节数据安全转换为可读字符串：已是合法 UTF-8 则原样返回，否则尝试按 GBK 解码为 UTF-8 |
| [codec.GBKToUTF8](#gbktoutf8) | `s []byte` | `[]byte, error` | 将 GBK 编码的字节转换为 UTF-8 字节 |
| [codec.HTMLChardet](#htmlchardet) | `raw any` | `[]chardet.Result, error` | CharDetect 检测输入数据可能的字符集编码，返回所有候选结果(按置信度排序) |
| [codec.HTMLChardetBest](#htmlchardetbest) | `raw any` | `*chardet.Result, error` | CharDetectBest 检测输入数据最可能的字符集编码，返回置信度最高的单个结果 |
| [codec.HZGB2312ToUTF8](#hzgb2312toutf8) | `s []byte` | `[]byte, error` | 将 HZ-GB2312 编码的字节转换为 UTF-8 字节 |
| [codec.HmacMD5](#hmacmd5) | `key any, data any` | `[]byte` | 使用给定密钥计算数据的 HMAC-MD5 消息认证码，返回字节切片 |
| [codec.HmacSM3](#hmacsm3) | `key any, data any` | `[]byte` | 使用给定密钥计算数据的国密 HMAC-SM3 消息认证码，返回字节切片 |
| [codec.HmacSha1](#hmacsha1) | `key any, data any` | `[]byte` | 使用给定密钥计算数据的 HMAC-SHA1 消息认证码，返回字节切片 |
| [codec.HmacSha256](#hmacsha256) | `key any, data any` | `[]byte` | 使用给定密钥计算数据的 HMAC-SHA256 消息认证码，返回字节切片 |
| [codec.HmacSha512](#hmacsha512) | `key any, data any` | `[]byte` | 使用给定密钥计算数据的 HMAC-SHA512 消息认证码，返回字节切片 |
| [codec.IsUTF8](#isutf8) | `i any` | `bool, error` | 判断输入数据是否为合法的 UTF-8 编码 |
| [codec.IsUTF8File](#isutf8file) | `filename string` | `bool, error` | 使用采样策略判断文件内容是否为合法 UTF-8 编码 |
| [codec.MMH3Hash128](#mmh3hash128) | `i any` | `string` | 计算输入数据的 MurmurHash3 128 位哈希并返回十六进制字符串 |
| [codec.MMH3Hash128x64](#mmh3hash128x64) | `i any` | `string` | 计算输入数据的 MurmurHash3 128 位(x64 变体)哈希并返回十六进制字符串 |
| [codec.MMH3Hash32](#mmh3hash32) | `i any` | `int64` | 计算输入数据的 MurmurHash3 32 位非加密快速哈希，返回数值 |
| [codec.Md5](#md5) | `i any` | `string` | 计算输入数据的 MD5 摘要并返回十六进制字符串 |
| [codec.PBKDF2SHA1Key](#pbkdf2sha1key) | `password any, salt any, iterations int, keyLen int` | `[]byte, error` | 使用 PBKDF2-HMAC-SHA1 从口令与盐派生固定长度的密钥(如微信 wxapkg V1MMWX 解密) |
| [codec.PKCS5Padding](#pkcs5padding) | `ciphertext []byte, blockSize int` | `[]byte` | 对数据按指定块大小做 PKCS5/PKCS7 填充，使其长度补齐到块大小的整数倍 |
| [codec.PKCS5UnPadding](#pkcs5unpadding) | `origData []byte` | `[]byte` | 去除数据末尾的 PKCS5/PKCS7 填充，返回原始数据 |
| [codec.PKCS7Padding](#pkcs7padding) | `src []byte` | `[]byte` | 对数据按 16 字节块大小做 PKCS7 填充（导出名为 codec.PKCS7Padding） |
| [codec.PKCS7PaddingForDES](#pkcs7paddingfordes) | `src []byte` | `[]byte` | PKCS7PaddingFor8ByteBlock 按 8 字节块大小对数据做 PKCS7/PKCS5 填充(常用于 DES) |
| [codec.PKCS7UnPadding](#pkcs7unpadding) | `src []byte` | `[]byte` | 去除数据末尾的 PKCS7 填充字节（导出名为 codec.PKCS7UnPadding） |
| [codec.PKCS7UnPaddingForDES](#pkcs7unpaddingfordes) | `src []byte` | `[]byte` | PKCS7UnPaddingFor8ByteBlock 去除 8 字节块大小的 PKCS7/PKCS5 填充(常用于 DES) |
| [codec.RC4Decrypt](#rc4decrypt) | `cipherKey []byte, cipherText []byte` | `[]byte, error` | 使用 RC4 流密码解密数据(RC4 加解密为同一运算) |
| [codec.RC4Encrypt](#rc4encrypt) | `cipherKey []byte, plainText []byte` | `[]byte, error` | 使用 RC4 流密码加密数据(RC4 加解密为同一运算) |
| [codec.RSADecryptWithJSEncryptStyle](#rsadecryptwithjsencryptstyle) | `privKeyPem string, ciphertext []byte` | `[]byte, error` | 以兼容前端 JSEncrypt 库的方式做 RSA 解密（导出名为 codec.RSADecryptWithJSEncryptStyle） |
| [codec.RSADecryptWithOAEP](#rsadecryptwithoaep) | `raw []byte, data any` | `[]byte, error` | 使用 RSA 私钥和 OAEP 填充方式解密给定的密文（导出名为 codec.RSADecryptWithOAEP） |
| [codec.RSADecryptWithPKCS1v15](#rsadecryptwithpkcs1v15) | `raw []byte, data any` | `[]byte, error` | DecryptWithPkcs1v15/RSADecryptWithPKCS1v15 使用 RSA私钥 和 PKCS#1 v1.5填充方式 解密给定的密文。 |
| [codec.RSADecryptWithPKCS1v15Block](#rsadecryptwithpkcs1v15block) | `privKeyPem string, ciphertext []byte` | `[]byte, error` | 使用 RSA PKCS#1 v1.5 私钥解密数据（导出名为 codec.RSADecryptWithPKCS1v15Block） |
| [codec.RSAEncryptWithJSEncryptStyle](#rsaencryptwithjsencryptstyle) | `pubKeyPem string, data []byte` | `[]byte, error` | 以兼容前端 JSEncrypt 库的方式做 RSA 加密（导出名为 codec.RSAEncryptWithJSEncryptStyle） |
| [codec.RSAEncryptWithOAEP](#rsaencryptwithoaep) | `raw []byte, data any` | `[]byte, error` | 使用 RSA 公钥和 OAEP 填充方式对给定数据进行加密（导出名为 codec.RSAEncryptWithOAEP） |
| [codec.RSAEncryptWithPKCS1v15](#rsaencryptwithpkcs1v15) | `raw []byte, data any` | `[]byte, error` | EncryptWithPkcs1v15/RSAEncryptWithPKCS1v15 使用 RSA 公钥和 PKCS#1 v1.5 填充方式对给定数据进行加密。 |
| [codec.RSAEncryptWithPKCS1v15Block](#rsaencryptwithpkcs1v15block) | `pubKeyPem string, data []byte` | `[]byte, error` | 使用 RSA PKCS#1 v1.5 公钥加密数据（导出名为 codec.RSAEncryptWithPKCS1v15Block） |
| [codec.RSASignWithPKCS1v15Digest](#rsasignwithpkcs1v15digest) | `privKeyPem string, data []byte, algo string` | `[]byte, error` | 使用 RSA PKCS#1 v1.5 私钥对数据做摘要签名（导出名为 codec.RSASignWithPKCS1v15Digest） |
| [codec.RSAVerifyWithPKCS1v15Digest](#rsaverifywithpkcs1v15digest) | `pubKeyPem string, data []byte, signature []byte, algo string` | `bool, error` | 使用 RSA PKCS#1 v1.5 公钥验证摘要签名（导出名为 codec.RSAVerifyWithPKCS1v15Digest） |
| [codec.RandBytes](#randbytes) | `n int` | `[]byte` | 生成 n 个密码学安全的随机字节 |
| [codec.Sha1](#sha1) | `i any` | `string` | 计算输入数据的 SHA-1 摘要并返回十六进制字符串 |
| [codec.Sha224](#sha224) | `i any` | `string` | 计算输入数据的 SHA-224 摘要并返回十六进制字符串 |
| [codec.Sha256](#sha256) | `i any` | `string` | 计算输入数据的 SHA-256 摘要并返回十六进制字符串 |
| [codec.Sha384](#sha384) | `i any` | `string` | 计算输入数据的 SHA-384 摘要并返回十六进制字符串 |
| [codec.Sha512](#sha512) | `i any` | `string` | 计算输入数据的 SHA-512 摘要并返回十六进制字符串 |
| [codec.SignSHA256WithRSA](#signsha256withrsa) | `pemBytes []byte, data any` | `[]byte, error` | 使用 RSA 私钥对数据做 SHA256 签名（导出名为 codec.SignSHA256WithRSA） |
| [codec.SignSHA512WithRSA](#signsha512withrsa) | `pemBytes []byte, data any` | `[]byte, error` | 使用 RSA 私钥对数据做 SHA512 签名（导出名为 codec.SignSHA512WithRSA） |
| [codec.SignVerifySHA256WithRSA](#signverifysha256withrsa) | `pemBytes []byte, originData any, sign []byte` | `error` | 使用 RSA 公钥验证数据的 SHA256 签名（导出名为 codec.SignVerifySHA256WithRSA） |
| [codec.SignVerifySHA512WithRSA](#signverifysha512withrsa) | `pemBytes []byte, originData any, sign []byte` | `error` | 使用 RSA 公钥验证数据的 SHA512 签名（导出名为 codec.SignVerifySHA512WithRSA） |
| [codec.Sm2Decrypt](#sm2decrypt) | `priKey []byte, data []byte` | `[]byte, error` | SM2DecryptC1C2C3 使用国密 SM2 私钥按 C1C2C3 密文排列解密数据 |
| [codec.Sm2DecryptAsn1](#sm2decryptasn1) | `priKey []byte, data []byte` | `[]byte, error` | 使用国密 SM2 私钥按 ASN.1 编码格式解密数据 |
| [codec.Sm2DecryptAsn1WithPassword](#sm2decryptasn1withpassword) | `priKey []byte, data []byte, password []byte` | `[]byte, error` | 使用带密码保护的国密 SM2 私钥按 ASN.1 编码格式解密数据 |
| [codec.Sm2DecryptC1C2C3](#sm2decryptc1c2c3) | `priKey []byte, data []byte` | `[]byte, error` | 使用国密 SM2 私钥按 C1C2C3 密文排列解密数据 |
| [codec.Sm2DecryptC1C2C3WithPassword](#sm2decryptc1c2c3withpassword) | `priKey []byte, data []byte, password []byte` | `[]byte, error` | 使用带密码保护的国密 SM2 私钥按 C1C2C3 密文排列解密数据 |
| [codec.Sm2DecryptC1C3C2](#sm2decryptc1c3c2) | `priKey []byte, data []byte` | `[]byte, error` | 使用国密 SM2 私钥按 C1C3C2 密文排列解密数据 |
| [codec.Sm2DecryptC1C3C2WithPassword](#sm2decryptc1c3c2withpassword) | `priKey []byte, data []byte, password []byte` | `[]byte, error` | 使用带密码保护的国密 SM2 私钥按 C1C3C2 密文排列解密数据 |
| [codec.Sm2Encrypt](#sm2encrypt) | `pubKey []byte, data []byte` | `[]byte, error` | SM2EncryptC1C2C3 使用国密 SM2 公钥按 C1C2C3 密文排列加密数据 |
| [codec.Sm2EncryptAsn1](#sm2encryptasn1) | `pubKey []byte, data []byte` | `[]byte, error` | 使用国密 SM2 公钥按 ASN.1 编码格式加密数据 |
| [codec.Sm2EncryptC1C2C3](#sm2encryptc1c2c3) | `pubKey []byte, data []byte` | `[]byte, error` | 使用国密 SM2 公钥按 C1C2C3 密文排列加密数据 |
| [codec.Sm2EncryptC1C3C2](#sm2encryptc1c3c2) | `pubKey []byte, data []byte` | `[]byte, error` | 使用国密 SM2 公钥按 C1C3C2 密文排列加密数据 |
| [codec.Sm2GenerateHexKeyPair](#sm2generatehexkeypair) | - | `[]byte, []byte, error` | GenerateSM2PrivateKeyHEX 生成一对国密 SM2 密钥(HEX 文本格式) |
| [codec.Sm2GeneratePemKeyPair](#sm2generatepemkeypair) | - | `[]byte, []byte, error` | GenerateSM2PrivateKeyPEM 生成一对国密 SM2 密钥(PEM 文本格式) |
| [codec.Sm2GenerateTemporaryKeyPair](#sm2generatetemporarykeypair) | - | `[]byte, []byte, error` | 生成用于密钥交换的临时密钥对 |
| [codec.Sm2KeyExchange](#sm2keyexchange) | `keyLength int, idA []byte, idB []byte, priKey []byte, pubKey []byte, tempPriKey []byte, tempPubKey []byte, thisIsA bool` | `[]byte, []byte, []byte, error` | 执行SM2密钥交换算法 |
| [codec.Sm2SignWithSM3](#sm2signwithsm3) | `priKeyBytes []byte, data any` | `[]byte, error` | 使用国密 SM2 私钥对数据进行 SM3 签名，返回 ASN.1 DER 编码的签名 |
| [codec.Sm2SignWithSM3WithPassword](#sm2signwithsm3withpassword) | `priKeyBytes []byte, data any, password []byte` | `[]byte, error` | 使用带密码保护的国密 SM2 私钥对数据进行 SM3 签名 |
| [codec.Sm2VerifyWithSM3](#sm2verifywithsm3) | `pubKeyBytes []byte, originData any, sign []byte` | `error` | 使用国密 SM2 公钥对数据进行 SM3 签名验证，验证通过返回 nil |
| [codec.Sm3](#sm3) | `raw any` | `[]byte` | 计算输入数据的国密 SM3 摘要，返回 32 字节摘要(注意是字节切片，打印前需用 codec.EncodeToHex 转可读) |
| [codec.Sm4CBCDecrypt](#sm4cbcdecrypt) | `key []byte, i any, iv []byte` | `[]byte, error` | SM4DecryptCBCWithPKCSPadding 使用国密 SM4 算法在 CBC 模式下用 PKCS7 填充解密数据 |
| [codec.Sm4CBCDecryptWithPKCSPadding](#sm4cbcdecryptwithpkcspadding) | `key []byte, i any, iv []byte` | `[]byte, error` | SM4DecryptCBCWithPKCSPadding 使用国密 SM4 算法在 CBC 模式下用 PKCS7 填充解密数据 |
| [codec.Sm4CBCDecryptWithZeroPadding](#sm4cbcdecryptwithzeropadding) | `key []byte, i any, iv []byte` | `[]byte, error` | SM4DecryptCBCWithZeroPadding 使用国密 SM4 算法在 CBC 模式下用零填充(ZeroPadding)解密数据（导出名为 codec.Sm4CBCDecryptWithZeroPadding） |
| [codec.Sm4CBCEncrypt](#sm4cbcencrypt) | `key []byte, i any, iv []byte` | `[]byte, error` | SM4EncryptCBCWithPKCSPadding 使用国密 SM4 算法在 CBC 模式下用 PKCS7 填充加密数据 |
| [codec.Sm4CBCEncryptWithPKCSPadding](#sm4cbcencryptwithpkcspadding) | `key []byte, i any, iv []byte` | `[]byte, error` | SM4EncryptCBCWithPKCSPadding 使用国密 SM4 算法在 CBC 模式下用 PKCS7 填充加密数据 |
| [codec.Sm4CBCEncryptWithZeroPadding](#sm4cbcencryptwithzeropadding) | `key []byte, i any, iv []byte` | `[]byte, error` | SM4EncryptCBCWithZeroPadding 使用国密 SM4 算法在 CBC 模式下用零填充(ZeroPadding)加密数据（导出名为 codec.Sm4CBCEncryptWithZeroPadding） |
| [codec.Sm4CFBDecrypt](#sm4cfbdecrypt) | `key []byte, i any, iv []byte` | `[]byte, error` | SM4DecryptCFBWithPKCSPadding 使用国密 SM4 算法在 CFB 模式下用 PKCS7 填充解密数据 |
| [codec.Sm4CFBDecryptWithPKCSPadding](#sm4cfbdecryptwithpkcspadding) | `key []byte, i any, iv []byte` | `[]byte, error` | SM4DecryptCFBWithPKCSPadding 使用国密 SM4 算法在 CFB 模式下用 PKCS7 填充解密数据 |
| [codec.Sm4CFBDecryptWithZeroPadding](#sm4cfbdecryptwithzeropadding) | `key []byte, i any, iv []byte` | `[]byte, error` | SM4DecryptCFBWithZeroPadding 使用国密 SM4 算法在 CFB 模式下用零填充(ZeroPadding)解密数据（导出名为 codec.Sm4CFBDecryptWithZeroPadding） |
| [codec.Sm4CFBEncrypt](#sm4cfbencrypt) | `key []byte, i any, iv []byte` | `[]byte, error` | SM4EncryptCFBWithPKCSPadding 使用国密 SM4 算法在 CFB 模式下用 PKCS7 填充加密数据 |
| [codec.Sm4CFBEncryptWithPKCSPadding](#sm4cfbencryptwithpkcspadding) | `key []byte, i any, iv []byte` | `[]byte, error` | SM4EncryptCFBWithPKCSPadding 使用国密 SM4 算法在 CFB 模式下用 PKCS7 填充加密数据 |
| [codec.Sm4CFBEncryptWithZeroPadding](#sm4cfbencryptwithzeropadding) | `key []byte, i any, iv []byte` | `[]byte, error` | SM4EncryptCFBWithZeroPadding 使用国密 SM4 算法在 CFB 模式下用零填充(ZeroPadding)加密数据（导出名为 codec.Sm4CFBEncryptWithZeroPadding） |
| [codec.Sm4CTRDecrypt](#sm4ctrdecrypt) | `key []byte, i any, iv []byte` | `[]byte, error` | SM4DecryptCTRWithPKCSPadding 使用国密 SM4 算法在 CTR 模式下用 PKCS7 填充解密数据（导出名为 codec.Sm4CTRDecrypt / codec.Sm4CTRDecryptWithPKCSPadding） |
| [codec.Sm4CTRDecryptWithPKCSPadding](#sm4ctrdecryptwithpkcspadding) | `key []byte, i any, iv []byte` | `[]byte, error` | SM4DecryptCTRWithPKCSPadding 使用国密 SM4 算法在 CTR 模式下用 PKCS7 填充解密数据（导出名为 codec.Sm4CTRDecrypt / codec.Sm4CTRDecryptWithPKCSPadding） |
| [codec.Sm4CTRDecryptWithZeroPadding](#sm4ctrdecryptwithzeropadding) | `key []byte, i any, iv []byte` | `[]byte, error` | SM4DecryptCTRWithZeroPadding 使用国密 SM4 算法在 CTR 模式下用零填充(ZeroPadding)解密数据（导出名为 codec.Sm4CTRDecryptWithZeroPadding） |
| [codec.Sm4CTREncrypt](#sm4ctrencrypt) | `key []byte, i any, iv []byte` | `[]byte, error` | SM4EncryptCTRWithPKCSPadding 使用国密 SM4 算法在 CTR 模式下用 PKCS7 填充加密数据（导出名为 codec.Sm4CTREncrypt / codec.Sm4CTREncryptWithPKCSPadding） |
| [codec.Sm4CTREncryptWithPKCSPadding](#sm4ctrencryptwithpkcspadding) | `key []byte, i any, iv []byte` | `[]byte, error` | SM4EncryptCTRWithPKCSPadding 使用国密 SM4 算法在 CTR 模式下用 PKCS7 填充加密数据（导出名为 codec.Sm4CTREncrypt / codec.Sm4CTREncryptWithPKCSPadding） |
| [codec.Sm4CTREncryptWithZeroPadding](#sm4ctrencryptwithzeropadding) | `key []byte, i any, iv []byte` | `[]byte, error` | SM4EncryptCTRWithZeroPadding 使用国密 SM4 算法在 CTR 模式下用零填充(ZeroPadding)加密数据（导出名为 codec.Sm4CTREncryptWithZeroPadding） |
| [codec.Sm4Decrypt](#sm4decrypt) | `key []byte, i any, iv []byte` | `[]byte, error` | SM4DecryptCBCWithPKCSPadding 使用国密 SM4 算法在 CBC 模式下用 PKCS7 填充解密数据 |
| [codec.Sm4EBCDecrypt](#sm4ebcdecrypt) | `key []byte, i any, iv []byte` | `[]byte, error` | SM4DecryptEBCWithPKCSPadding 使用国密 SM4 算法在 ECB 模式下用 PKCS7 填充解密数据(为兼容历史拼写错误保留) |
| [codec.Sm4EBCEncrypt](#sm4ebcencrypt) | `key []byte, i any, iv []byte` | `[]byte, error` | SM4EncryptEBCWithPKCSPadding 使用国密 SM4 算法在 ECB 模式下用 PKCS7 填充加密数据(为兼容历史拼写错误保留) |
| [codec.Sm4ECBDecrypt](#sm4ecbdecrypt) | `key []byte, i any, iv []byte` | `[]byte, error` | SM4DecryptECBWithPKCSPadding 使用国密 SM4 算法在 ECB 模式下用 PKCS7 填充解密数据(ECB 模式下 iv 无用，传 nil) |
| [codec.Sm4ECBDecryptWithPKCSPadding](#sm4ecbdecryptwithpkcspadding) | `key []byte, i any, iv []byte` | `[]byte, error` | SM4DecryptECBWithPKCSPadding 使用国密 SM4 算法在 ECB 模式下用 PKCS7 填充解密数据(ECB 模式下 iv 无用，传 nil) |
| [codec.Sm4ECBDecryptWithZeroPadding](#sm4ecbdecryptwithzeropadding) | `key []byte, i any, iv []byte` | `[]byte, error` | SM4DecryptECBWithZeroPadding 使用国密 SM4 算法在 ECB 模式下用零填充(ZeroPadding)解密数据(ECB 模式下 iv 无用，传 nil)（导出名为 codec.Sm4ECBDecryptWithZeroPadding） |
| [codec.Sm4ECBEncrypt](#sm4ecbencrypt) | `key []byte, i any, iv []byte` | `[]byte, error` | SM4EncryptECBWithPKCSPadding 使用国密 SM4 算法在 ECB 模式下用 PKCS7 填充加密数据(ECB 模式下 iv 无用，传 nil) |
| [codec.Sm4ECBEncryptWithPKCSPadding](#sm4ecbencryptwithpkcspadding) | `key []byte, i any, iv []byte` | `[]byte, error` | SM4EncryptECBWithPKCSPadding 使用国密 SM4 算法在 ECB 模式下用 PKCS7 填充加密数据(ECB 模式下 iv 无用，传 nil) |
| [codec.Sm4ECBEncryptWithZeroPadding](#sm4ecbencryptwithzeropadding) | `key []byte, i any, iv []byte` | `[]byte, error` | SM4EncryptECBWithZeroPadding 使用国密 SM4 算法在 ECB 模式下用零填充(ZeroPadding)加密数据(ECB 模式下 iv 无用，传 nil)（导出名为 codec.Sm4ECBEncryptWithZeroPadding） |
| [codec.Sm4Encrypt](#sm4encrypt) | `key []byte, i any, iv []byte` | `[]byte, error` | SM4EncryptCBCWithPKCSPadding 使用国密 SM4 算法在 CBC 模式下用 PKCS7 填充加密数据 |
| [codec.Sm4GCMDecrypt](#sm4gcmdecrypt) | `key []byte, data any, iv []byte` | `[]byte, error` | SM4GCMDec 使用国密 SM4 算法在 GCM 模式下解密数据 |
| [codec.Sm4GCMEncrypt](#sm4gcmencrypt) | `key []byte, data any, iv []byte` | `[]byte, error` | SM4GCMEnc 使用国密 SM4 算法在 GCM 模式下加密数据 |
| [codec.Sm4OFBDecrypt](#sm4ofbdecrypt) | `key []byte, i any, iv []byte` | `[]byte, error` | SM4DecryptOFBWithPKCSPadding 使用国密 SM4 算法在 OFB 模式下用 PKCS7 填充解密数据 |
| [codec.Sm4OFBDecryptWithPKCSPadding](#sm4ofbdecryptwithpkcspadding) | `key []byte, i any, iv []byte` | `[]byte, error` | SM4DecryptOFBWithPKCSPadding 使用国密 SM4 算法在 OFB 模式下用 PKCS7 填充解密数据 |
| [codec.Sm4OFBDecryptWithZeroPadding](#sm4ofbdecryptwithzeropadding) | `key []byte, i any, iv []byte` | `[]byte, error` | SM4DecryptOFBWithZeroPadding 使用国密 SM4 算法在 OFB 模式下用零填充(ZeroPadding)解密数据（导出名为 codec.Sm4OFBDecryptWithZeroPadding） |
| [codec.Sm4OFBEncrypt](#sm4ofbencrypt) | `key []byte, i any, iv []byte` | `[]byte, error` | SM4EncryptOFBWithPKCSPadding 使用国密 SM4 算法在 OFB 模式下用 PKCS7 填充加密数据 |
| [codec.Sm4OFBEncryptWithPKCSPadding](#sm4ofbencryptwithpkcspadding) | `key []byte, i any, iv []byte` | `[]byte, error` | SM4EncryptOFBWithPKCSPadding 使用国密 SM4 算法在 OFB 模式下用 PKCS7 填充加密数据 |
| [codec.Sm4OFBEncryptWithZeroPadding](#sm4ofbencryptwithzeropadding) | `key []byte, i any, iv []byte` | `[]byte, error` | SM4EncryptOFBWithZeroPadding 使用国密 SM4 算法在 OFB 模式下用零填充(ZeroPadding)加密数据（导出名为 codec.Sm4OFBEncryptWithZeroPadding） |
| [codec.StrconvQuote](#strconvquote) | `s string` | `string` | 将字符串转换为带双引号的 Go 字面量形式，特殊字符转义为 \n \t \xNN 等（导出名为 codec.StrconvQuote） |
| [codec.StrconvUnquote](#strconvunquote) | `s string` | `string, error` | 解析带引号的 Go 字面量字符串，去掉外层引号并处理转义序列（导出名为 codec.StrconvUnquote / codec.DecodeASCII） |
| [codec.TripleDESCBCDecrypt](#tripledescbcdecrypt) | `key []byte, i any, iv []byte` | `[]byte, error` | TripleDESDecryptCBCWithZeroPadding 使用 3DES(Triple DES) 算法在 CBC 模式下用零填充解密数据 |
| [codec.TripleDESCBCEncrypt](#tripledescbcencrypt) | `key []byte, i any, iv []byte` | `[]byte, error` | TripleDESEncryptCBCWithZeroPadding 使用 3DES(Triple DES) 算法在 CBC 模式下用零填充加密数据 |
| [codec.TripleDESDecrypt](#tripledesdecrypt) | `key []byte, i any, iv []byte` | `[]byte, error` | TripleDESDecryptCBCWithZeroPadding 使用 3DES(Triple DES) 算法在 CBC 模式下用零填充解密数据 |
| [codec.TripleDESECBDecrypt](#tripledesecbdecrypt) | `key []byte, data []byte` | `[]byte, error` | TripleDES_ECBDec 使用 3DES(Triple DES) 算法在 ECB 模式下用零填充解密数据(ECB 模式下无 iv 参数) |
| [codec.TripleDESECBEncrypt](#tripledesecbencrypt) | `key []byte, data []byte` | `[]byte, error` | TripleDES_ECBEnc 使用 3DES(Triple DES) 算法在 ECB 模式下用零填充加密数据(ECB 模式下无 iv 参数) |
| [codec.TripleDESEncrypt](#tripledesencrypt) | `key []byte, i any, iv []byte` | `[]byte, error` | TripleDESEncryptCBCWithZeroPadding 使用 3DES(Triple DES) 算法在 CBC 模式下用零填充加密数据 |
| [codec.UTF8ToGB18030](#utf8togb18030) | `s []byte` | `[]byte, error` | 将 UTF-8 编码的字节转换为 GB18030 编码的字节 |
| [codec.UTF8ToGBK](#utf8togbk) | `s []byte` | `[]byte, error` | 将 UTF-8 编码的字节转换为 GBK 编码的字节 |
| [codec.UTF8ToHZGB2312](#utf8tohzgb2312) | `s []byte` | `[]byte, error` | 将 UTF-8 编码的字节转换为 HZ-GB2312 编码的字节 |
| [codec.UnescapePathUrl](#unescapepathurl) | `s string` | `string, error` | PathUnescape 对 URL 路径转义的字符串做解码，同时兼容 %uXXXX 形式 |
| [codec.UnescapeQueryUrl](#unescapequeryurl) | `s string` | `string, error` | QueryUnescape 对 URL 百分号编码的字符串做查询串解码，同时兼容 %uXXXX 形式 |
| [codec.UnescapeString](#unescapestring) | `s string` | `string, error` | 处理字符串中的转义字符，无需外层引号 |
| [codec.UnicodeDecode](#unicodedecode) | `i string` | `string` | 将 \uXXXX / \UXXXXXXXX 形式的 Unicode 转义序列解码为原始字符串 |
| [codec.UnicodeEncode](#unicodeencode) | `i string` | `string` | 将字符串的每个字符编码为 \uXXXX 形式的 Unicode 转义序列 |
| [codec.ZeroPadding](#zeropadding) | `origin []byte, blockSize int` | `[]byte` | 对数据按指定块大小做零字节(0x00)填充，使其长度补齐到块大小的整数倍 |
| [codec.ZeroUnPadding](#zerounpadding) | `originData []byte` | `[]byte` | 去除数据末尾的零字节(0x00)填充，返回原始数据 |

## 函数详情

### AESCBCDecrypt {#aescbcdecrypt}

```go
AESCBCDecrypt(key []byte, i any, iv []byte) ([]byte, error)
```

AESDecryptCBCWithPKCSPadding 使用 AES 算法在 CBC 模式下用 PKCS7 填充解密数据

密钥长度必须是 16/24/32 字节(分别对应 AES-128/192/256)；iv 为 nil 时使用 key 前 16 字节作为 iv。

注意：AESCBCDecrypt、AESDecrypt 和 AESCBCDecryptWithPKCS7Padding 是同一个函数的别名

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(16/24/32 字节) |
| i | `any` | 待解密的密文，可为 []byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |

**示例**

``````````````yak
// VARS: 先加密再解密
key = "1234567890123456"
iv = "abcdefghijklmnop"
ct = codec.AESCBCEncrypt(key, "Secret Message", iv)~
pt = codec.AESCBCDecrypt(key, ct, iv)~
// STDOUT: 打印还原后的明文
println(string(pt))   // OUT: Secret Message
// assert: 锁定结论(解密还原一致)
assert string(pt) == "Secret Message", "AES-CBC decrypt should recover plaintext"
``````````````

---

### AESCBCDecryptWithPKCS7Padding {#aescbcdecryptwithpkcs7padding}

```go
AESCBCDecryptWithPKCS7Padding(key []byte, i any, iv []byte) ([]byte, error)
```

AESDecryptCBCWithPKCSPadding 使用 AES 算法在 CBC 模式下用 PKCS7 填充解密数据

密钥长度必须是 16/24/32 字节(分别对应 AES-128/192/256)；iv 为 nil 时使用 key 前 16 字节作为 iv。

注意：AESCBCDecrypt、AESDecrypt 和 AESCBCDecryptWithPKCS7Padding 是同一个函数的别名

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(16/24/32 字节) |
| i | `any` | 待解密的密文，可为 []byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |

**示例**

``````````````yak
// VARS: 先加密再解密
key = "1234567890123456"
iv = "abcdefghijklmnop"
ct = codec.AESCBCEncrypt(key, "Secret Message", iv)~
pt = codec.AESCBCDecrypt(key, ct, iv)~
// STDOUT: 打印还原后的明文
println(string(pt))   // OUT: Secret Message
// assert: 锁定结论(解密还原一致)
assert string(pt) == "Secret Message", "AES-CBC decrypt should recover plaintext"
``````````````

---

### AESCBCDecryptWithZeroPadding {#aescbcdecryptwithzeropadding}

```go
AESCBCDecryptWithZeroPadding(key []byte, i any, iv []byte) ([]byte, error)
```

AESDecryptCBCWithZeroPadding 使用 AES 算法在 CBC 模式下用零(Zero)填充解密数据

密钥长度必须是 16/24/32 字节(分别对应 AES-128/192/256)；iv 为 nil 时使用 key 前 16 字节作为 iv。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(16/24/32 字节) |
| i | `any` | 待解密的密文，可为 []byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 解密还原后的明文字节(末尾零字节会被去除) |
| r2 | `error` | 解密失败时返回的错误 |

**示例**

``````````````yak
// VARS: 先加密再解密
key = "1234567890123456"
iv = "abcdefghijklmnop"
ct = codec.AESCBCEncryptWithZeroPadding(key, "Secret Message", iv)~
pt = codec.AESCBCDecryptWithZeroPadding(key, ct, iv)~
// STDOUT: 打印还原后的明文
println(string(pt))   // OUT: Secret Message
// assert: 锁定结论(零填充解密还原一致)
assert string(pt) == "Secret Message", "AES-CBC zero-padding decrypt should recover plaintext"
``````````````

---

### AESCBCEncrypt {#aescbcencrypt}

```go
AESCBCEncrypt(key []byte, i any, iv []byte) ([]byte, error)
```

AESEncryptCBCWithPKCSPadding 使用 AES 算法在 CBC 模式下用 PKCS7 填充加密数据

密钥长度必须是 16/24/32 字节(分别对应 AES-128/192/256)；iv 为 nil 时使用 key 前 16 字节作为 iv。

注意：AESCBCEncrypt、AESEncrypt 和 AESCBCEncryptWithPKCS7Padding 是同一个函数的别名

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(16/24/32 字节) |
| i | `any` | 待加密的数据，可为 string、[]byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 加密失败(如密钥长度非法)时返回的错误 |

**示例**

``````````````yak
// VARS: 准备密钥、IV 与明文
key = "1234567890123456"
iv = "abcdefghijklmnop"
ct = codec.AESCBCEncrypt(key, "Secret Message", iv)~
// STDOUT: 解密还原后打印
println(string(codec.AESCBCDecrypt(key, ct, iv)~))   // OUT: Secret Message
// assert: 锁定结论(加解密往返一致)
assert string(codec.AESCBCDecrypt(key, ct, iv)~) == "Secret Message", "AES-CBC encrypt/decrypt should round-trip"
``````````````

---

### AESCBCEncryptWithPKCS7Padding {#aescbcencryptwithpkcs7padding}

```go
AESCBCEncryptWithPKCS7Padding(key []byte, i any, iv []byte) ([]byte, error)
```

AESEncryptCBCWithPKCSPadding 使用 AES 算法在 CBC 模式下用 PKCS7 填充加密数据

密钥长度必须是 16/24/32 字节(分别对应 AES-128/192/256)；iv 为 nil 时使用 key 前 16 字节作为 iv。

注意：AESCBCEncrypt、AESEncrypt 和 AESCBCEncryptWithPKCS7Padding 是同一个函数的别名

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(16/24/32 字节) |
| i | `any` | 待加密的数据，可为 string、[]byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 加密失败(如密钥长度非法)时返回的错误 |

**示例**

``````````````yak
// VARS: 准备密钥、IV 与明文
key = "1234567890123456"
iv = "abcdefghijklmnop"
ct = codec.AESCBCEncrypt(key, "Secret Message", iv)~
// STDOUT: 解密还原后打印
println(string(codec.AESCBCDecrypt(key, ct, iv)~))   // OUT: Secret Message
// assert: 锁定结论(加解密往返一致)
assert string(codec.AESCBCDecrypt(key, ct, iv)~) == "Secret Message", "AES-CBC encrypt/decrypt should round-trip"
``````````````

---

### AESCBCEncryptWithZeroPadding {#aescbcencryptwithzeropadding}

```go
AESCBCEncryptWithZeroPadding(key []byte, i any, iv []byte) ([]byte, error)
```

AESEncryptCBCWithZeroPadding 使用 AES 算法在 CBC 模式下用零(Zero)填充加密数据

密钥长度必须是 16/24/32 字节(分别对应 AES-128/192/256)；iv 为 nil 时使用 key 前 16 字节作为 iv。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(16/24/32 字节) |
| i | `any` | 待加密的数据，可为 string、[]byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 加密失败(如密钥长度非法)时返回的错误 |

**示例**

``````````````yak
// VARS: 准备密钥、IV 与明文
key = "1234567890123456"
iv = "abcdefghijklmnop"
ct = codec.AESCBCEncryptWithZeroPadding(key, "Secret Message", iv)~
// STDOUT: 解密还原后打印
println(string(codec.AESCBCDecryptWithZeroPadding(key, ct, iv)~))   // OUT: Secret Message
// assert: 锁定结论(零填充加解密往返一致)
assert string(codec.AESCBCDecryptWithZeroPadding(key, ct, iv)~) == "Secret Message", "AES-CBC zero-padding should round-trip"
``````````````

---

### AESCFBDecrypt {#aescfbdecrypt}

```go
AESCFBDecrypt(key []byte, i any, iv []byte) ([]byte, error)
```

AESDecryptCFBWithPKCSPadding 使用 AES 算法在 CFB 模式下用 PKCS7 填充解密数据

密钥长度必须是 16/24/32 字节(分别对应 AES-128/192/256)；iv 为 nil 时使用 key 前 16 字节作为 iv。

注意：AESCFBDecrypt 和 AESDecryptCFBWithPKCSPadding 是同一个函数的别名

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(16/24/32 字节) |
| i | `any` | 待解密的密文，可为 []byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |

**示例**

``````````````yak
// VARS: 先加密再解密(CFB)
key = "1234567890123456"
iv = "abcdefghijklmnop"
ct = codec.AESCFBEncrypt(key, "Secret Message", iv)~
pt = codec.AESCFBDecrypt(key, ct, iv)~
// STDOUT: 打印还原后的明文
println(string(pt))   // OUT: Secret Message
// assert: 锁定结论(CFB 解密还原一致)
assert string(pt) == "Secret Message", "AES-CFB decrypt should recover plaintext"
``````````````

---

### AESCFBEncrypt {#aescfbencrypt}

```go
AESCFBEncrypt(key []byte, i any, iv []byte) ([]byte, error)
```

AESEncryptCFBWithPKCSPadding 使用 AES 算法在 CFB 模式下用 PKCS7 填充加密数据

密钥长度必须是 16/24/32 字节(分别对应 AES-128/192/256)；iv 为 nil 时使用 key 前 16 字节作为 iv。

注意：AESCFBEncrypt 和 AESEncryptCFBWithPKCSPadding 是同一个函数的别名

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(16/24/32 字节) |
| i | `any` | 待加密的数据，可为 string、[]byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 加密失败时返回的错误 |

**示例**

``````````````yak
// VARS: CFB 流密码模式
key = "1234567890123456"
iv = "abcdefghijklmnop"
ct = codec.AESCFBEncrypt(key, "Secret Message", iv)~
// STDOUT: 解密还原后打印
println(string(codec.AESCFBDecrypt(key, ct, iv)~))   // OUT: Secret Message
// assert: 锁定结论(CFB 加解密往返一致)
assert string(codec.AESCFBDecrypt(key, ct, iv)~) == "Secret Message", "AES-CFB encrypt/decrypt should round-trip"
``````````````

---

### AESDecrypt {#aesdecrypt}

```go
AESDecrypt(key []byte, i any, iv []byte) ([]byte, error)
```

AESDecryptCBCWithPKCSPadding 使用 AES 算法在 CBC 模式下用 PKCS7 填充解密数据

密钥长度必须是 16/24/32 字节(分别对应 AES-128/192/256)；iv 为 nil 时使用 key 前 16 字节作为 iv。

注意：AESCBCDecrypt、AESDecrypt 和 AESCBCDecryptWithPKCS7Padding 是同一个函数的别名

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(16/24/32 字节) |
| i | `any` | 待解密的密文，可为 []byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |

**示例**

``````````````yak
// VARS: 先加密再解密
key = "1234567890123456"
iv = "abcdefghijklmnop"
ct = codec.AESCBCEncrypt(key, "Secret Message", iv)~
pt = codec.AESCBCDecrypt(key, ct, iv)~
// STDOUT: 打印还原后的明文
println(string(pt))   // OUT: Secret Message
// assert: 锁定结论(解密还原一致)
assert string(pt) == "Secret Message", "AES-CBC decrypt should recover plaintext"
``````````````

---

### AESDecryptBasic {#aesdecryptbasic}

```go
AESDecryptBasic(key []byte, data []byte, iv []byte, mode string) ([]byte, error)
```

使用 AES 算法对数据进行解密，支持多种模式(CBC、CFB、ECB、OFB、CTR)

注意：此函数是底层高级用法，需要外部自行处理 padding、key、iv 等问题。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(16/24/32 字节) |
| data | `[]byte` | 待解密的密文字节 |
| iv | `[]byte` | 初始化向量(块模式需要) |
| mode | `string` | 解密模式，取 codec.CBC / codec.CFB / codec.ECB / codec.OFB / codec.CTR |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 解密后的明文字节(块模式下可能含零填充) |
| r2 | `error` | 解密失败时返回的错误 |

**示例**

``````````````yak
// VARS: 底层加解密
key = "1234567890123456"
iv = "abcdefghijklmnop"
ct = codec.AESEncryptBasic(key, "Secret Message", iv, codec.CBC)~
dec = codec.AESDecryptBasic(key, ct, iv, codec.CBC)~
// STDOUT: 去零填充后打印
println(string(codec.ZeroUnPadding(dec)))   // OUT: Secret Message
// assert: 锁定结论(底层解密还原一致)
assert string(codec.ZeroUnPadding(dec)) == "Secret Message", "AESDecryptBasic should recover plaintext"
``````````````

---

### AESDecryptCFBWithPKCSPadding {#aesdecryptcfbwithpkcspadding}

```go
AESDecryptCFBWithPKCSPadding(key []byte, i any, iv []byte) ([]byte, error)
```

使用 AES 算法在 CFB 模式下用 PKCS7 填充解密数据

密钥长度必须是 16/24/32 字节(分别对应 AES-128/192/256)；iv 为 nil 时使用 key 前 16 字节作为 iv。

注意：AESCFBDecrypt 和 AESDecryptCFBWithPKCSPadding 是同一个函数的别名

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(16/24/32 字节) |
| i | `any` | 待解密的密文，可为 []byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |

**示例**

``````````````yak
// VARS: 先加密再解密(CFB)
key = "1234567890123456"
iv = "abcdefghijklmnop"
ct = codec.AESCFBEncrypt(key, "Secret Message", iv)~
pt = codec.AESCFBDecrypt(key, ct, iv)~
// STDOUT: 打印还原后的明文
println(string(pt))   // OUT: Secret Message
// assert: 锁定结论(CFB 解密还原一致)
assert string(pt) == "Secret Message", "AES-CFB decrypt should recover plaintext"
``````````````

---

### AESDecryptCFBWithZeroPadding {#aesdecryptcfbwithzeropadding}

```go
AESDecryptCFBWithZeroPadding(key []byte, i any, iv []byte) ([]byte, error)
```

使用 AES 算法在 CFB 模式下用零(Zero)填充解密数据

密钥长度必须是 16/24/32 字节(分别对应 AES-128/192/256)；iv 为 nil 时使用 key 前 16 字节作为 iv。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(16/24/32 字节) |
| i | `any` | 待解密的密文，可为 []byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 解密还原后的明文字节(末尾零字节会被去除) |
| r2 | `error` | 解密失败时返回的错误 |

**示例**

``````````````yak
// VARS: 先加密再解密(CFB 零填充)
key = "1234567890123456"
iv = "abcdefghijklmnop"
ct = codec.AESEncryptCFBWithZeroPadding(key, "Secret Message", iv)~
pt = codec.AESDecryptCFBWithZeroPadding(key, ct, iv)~
// STDOUT: 打印还原后的明文
println(string(pt))   // OUT: Secret Message
// assert: 锁定结论(CFB 零填充解密还原一致)
assert string(pt) == "Secret Message", "AES-CFB zero-padding decrypt should recover plaintext"
``````````````

---

### AESECBDecrypt {#aesecbdecrypt}

```go
AESECBDecrypt(key []byte, i any, iv []byte) ([]byte, error)
```

AESDecryptECBWithPKCSPadding 使用 AES 算法在 ECB 模式下用 PKCS7 填充解密数据(ECB 模式下 iv 无用，传 nil)

密钥长度必须是 16/24/32 字节(分别对应 AES-128/192/256)。

注意：AESECBDecrypt 和 AESDecryptECBWithPKCSPadding 是同一个函数的别名

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(16/24/32 字节) |
| i | `any` | 待解密的密文，可为 []byte 等 |
| iv | `[]byte` | ECB 模式下无用，传 nil 即可 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |

**示例**

``````````````yak
// VARS: 先加密再解密(ECB iv 传 nil)
key = "1234567890123456"
ct = codec.AESECBEncrypt(key, "Secret Message", nil)~
pt = codec.AESECBDecrypt(key, ct, nil)~
// STDOUT: 打印还原后的明文
println(string(pt))   // OUT: Secret Message
// assert: 锁定结论(ECB 解密还原一致)
assert string(pt) == "Secret Message", "AES-ECB decrypt should recover plaintext"
``````````````

---

### AESECBDecryptWithPKCS7Padding {#aesecbdecryptwithpkcs7padding}

```go
AESECBDecryptWithPKCS7Padding(key []byte, i any, iv []byte) ([]byte, error)
```

AESDecryptECBWithPKCSPadding 使用 AES 算法在 ECB 模式下用 PKCS7 填充解密数据(ECB 模式下 iv 无用，传 nil)

密钥长度必须是 16/24/32 字节(分别对应 AES-128/192/256)。

注意：AESECBDecrypt 和 AESDecryptECBWithPKCSPadding 是同一个函数的别名

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(16/24/32 字节) |
| i | `any` | 待解密的密文，可为 []byte 等 |
| iv | `[]byte` | ECB 模式下无用，传 nil 即可 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |

**示例**

``````````````yak
// VARS: 先加密再解密(ECB iv 传 nil)
key = "1234567890123456"
ct = codec.AESECBEncrypt(key, "Secret Message", nil)~
pt = codec.AESECBDecrypt(key, ct, nil)~
// STDOUT: 打印还原后的明文
println(string(pt))   // OUT: Secret Message
// assert: 锁定结论(ECB 解密还原一致)
assert string(pt) == "Secret Message", "AES-ECB decrypt should recover plaintext"
``````````````

---

### AESECBDecryptWithZeroPadding {#aesecbdecryptwithzeropadding}

```go
AESECBDecryptWithZeroPadding(key []byte, i any, iv []byte) ([]byte, error)
```

AESDecryptECBWithZeroPadding 使用 AES 算法在 ECB 模式下用零(Zero)填充解密数据(ECB 模式下 iv 无用，传 nil)

密钥长度必须是 16/24/32 字节(分别对应 AES-128/192/256)。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(16/24/32 字节) |
| i | `any` | 待解密的密文，可为 []byte 等 |
| iv | `[]byte` | ECB 模式下无用，传 nil 即可 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 解密还原后的明文字节(末尾零字节会被去除) |
| r2 | `error` | 解密失败时返回的错误 |

**示例**

``````````````yak
// VARS: 先加密再解密(ECB 零填充)
key = "1234567890123456"
ct = codec.AESECBEncryptWithZeroPadding(key, "Secret Message", nil)~
pt = codec.AESECBDecryptWithZeroPadding(key, ct, nil)~
// STDOUT: 打印还原后的明文
println(string(pt))   // OUT: Secret Message
// assert: 锁定结论(ECB 零填充解密还原一致)
assert string(pt) == "Secret Message", "AES-ECB zero-padding decrypt should recover plaintext"
``````````````

---

### AESECBEncrypt {#aesecbencrypt}

```go
AESECBEncrypt(key []byte, i any, iv []byte) ([]byte, error)
```

AESEncryptECBWithPKCSPadding 使用 AES 算法在 ECB 模式下用 PKCS7 填充加密数据(ECB 模式下 iv 无用，传 nil)

密钥长度必须是 16/24/32 字节(分别对应 AES-128/192/256)。

注意：AESECBEncrypt 和 AESECBEncryptWithPKCS7Padding 是同一个函数的别名

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(16/24/32 字节) |
| i | `any` | 待加密的数据，可为 string、[]byte 等 |
| iv | `[]byte` | ECB 模式下无用，传 nil 即可 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 加密失败(如密钥长度非法)时返回的错误 |

**示例**

``````````````yak
// VARS: ECB 模式 iv 传 nil
key = "1234567890123456"
ct = codec.AESECBEncrypt(key, "Secret Message", nil)~
// STDOUT: 解密还原后打印
println(string(codec.AESECBDecrypt(key, ct, nil)~))   // OUT: Secret Message
// assert: 锁定结论(ECB 加解密往返一致)
assert string(codec.AESECBDecrypt(key, ct, nil)~) == "Secret Message", "AES-ECB encrypt/decrypt should round-trip"
``````````````

---

### AESECBEncryptWithPKCS7Padding {#aesecbencryptwithpkcs7padding}

```go
AESECBEncryptWithPKCS7Padding(key []byte, i any, iv []byte) ([]byte, error)
```

AESEncryptECBWithPKCSPadding 使用 AES 算法在 ECB 模式下用 PKCS7 填充加密数据(ECB 模式下 iv 无用，传 nil)

密钥长度必须是 16/24/32 字节(分别对应 AES-128/192/256)。

注意：AESECBEncrypt 和 AESECBEncryptWithPKCS7Padding 是同一个函数的别名

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(16/24/32 字节) |
| i | `any` | 待加密的数据，可为 string、[]byte 等 |
| iv | `[]byte` | ECB 模式下无用，传 nil 即可 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 加密失败(如密钥长度非法)时返回的错误 |

**示例**

``````````````yak
// VARS: ECB 模式 iv 传 nil
key = "1234567890123456"
ct = codec.AESECBEncrypt(key, "Secret Message", nil)~
// STDOUT: 解密还原后打印
println(string(codec.AESECBDecrypt(key, ct, nil)~))   // OUT: Secret Message
// assert: 锁定结论(ECB 加解密往返一致)
assert string(codec.AESECBDecrypt(key, ct, nil)~) == "Secret Message", "AES-ECB encrypt/decrypt should round-trip"
``````````````

---

### AESECBEncryptWithZeroPadding {#aesecbencryptwithzeropadding}

```go
AESECBEncryptWithZeroPadding(key []byte, i any, iv []byte) ([]byte, error)
```

AESEncryptECBWithZeroPadding 使用 AES 算法在 ECB 模式下用零(Zero)填充加密数据(ECB 模式下 iv 无用，传 nil)

密钥长度必须是 16/24/32 字节(分别对应 AES-128/192/256)。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(16/24/32 字节) |
| i | `any` | 待加密的数据，可为 string、[]byte 等 |
| iv | `[]byte` | ECB 模式下无用，传 nil 即可 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 加密失败(如密钥长度非法)时返回的错误 |

**示例**

``````````````yak
// VARS: ECB 零填充，iv 传 nil
key = "1234567890123456"
ct = codec.AESECBEncryptWithZeroPadding(key, "Secret Message", nil)~
// STDOUT: 解密还原后打印
println(string(codec.AESECBDecryptWithZeroPadding(key, ct, nil)~))   // OUT: Secret Message
// assert: 锁定结论(ECB 零填充往返一致)
assert string(codec.AESECBDecryptWithZeroPadding(key, ct, nil)~) == "Secret Message", "AES-ECB zero-padding should round-trip"
``````````````

---

### AESEncrypt {#aesencrypt}

```go
AESEncrypt(key []byte, i any, iv []byte) ([]byte, error)
```

AESEncryptCBCWithPKCSPadding 使用 AES 算法在 CBC 模式下用 PKCS7 填充加密数据

密钥长度必须是 16/24/32 字节(分别对应 AES-128/192/256)；iv 为 nil 时使用 key 前 16 字节作为 iv。

注意：AESCBCEncrypt、AESEncrypt 和 AESCBCEncryptWithPKCS7Padding 是同一个函数的别名

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(16/24/32 字节) |
| i | `any` | 待加密的数据，可为 string、[]byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 加密失败(如密钥长度非法)时返回的错误 |

**示例**

``````````````yak
// VARS: 准备密钥、IV 与明文
key = "1234567890123456"
iv = "abcdefghijklmnop"
ct = codec.AESCBCEncrypt(key, "Secret Message", iv)~
// STDOUT: 解密还原后打印
println(string(codec.AESCBCDecrypt(key, ct, iv)~))   // OUT: Secret Message
// assert: 锁定结论(加解密往返一致)
assert string(codec.AESCBCDecrypt(key, ct, iv)~) == "Secret Message", "AES-CBC encrypt/decrypt should round-trip"
``````````````

---

### AESEncryptBasic {#aesencryptbasic}

```go
AESEncryptBasic(key []byte, data []byte, iv []byte, mode string) ([]byte, error)
```

使用 AES 算法对数据进行加密，支持多种模式(CBC、CFB、ECB、OFB、CTR)

注意：此函数是底层高级用法，需要外部自行处理 padding、key、iv 等问题。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(16/24/32 字节) |
| data | `[]byte` | 待加密的数据字节 |
| iv | `[]byte` | 初始化向量(块模式需要) |
| mode | `string` | 加密模式，取 codec.CBC / codec.CFB / codec.ECB / codec.OFB / codec.CTR |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 加密失败时返回的错误 |

**示例**

``````````````yak
// VARS: 底层加密，块模式内部会做零填充
key = "1234567890123456"
iv = "abcdefghijklmnop"
ct = codec.AESEncryptBasic(key, "Secret Message", iv, codec.CBC)~
dec = codec.AESDecryptBasic(key, ct, iv, codec.CBC)~
// STDOUT: 去零填充后打印
println(string(codec.ZeroUnPadding(dec)))   // OUT: Secret Message
// assert: 锁定结论(底层加解密往返一致)
assert string(codec.ZeroUnPadding(dec)) == "Secret Message", "AESEncryptBasic/AESDecryptBasic should round-trip"
``````````````

---

### AESEncryptCFBWithPKCSPadding {#aesencryptcfbwithpkcspadding}

```go
AESEncryptCFBWithPKCSPadding(key []byte, i any, iv []byte) ([]byte, error)
```

使用 AES 算法在 CFB 模式下用 PKCS7 填充加密数据

密钥长度必须是 16/24/32 字节(分别对应 AES-128/192/256)；iv 为 nil 时使用 key 前 16 字节作为 iv。

注意：AESCFBEncrypt 和 AESEncryptCFBWithPKCSPadding 是同一个函数的别名

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(16/24/32 字节) |
| i | `any` | 待加密的数据，可为 string、[]byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 加密失败时返回的错误 |

**示例**

``````````````yak
// VARS: CFB 流密码模式
key = "1234567890123456"
iv = "abcdefghijklmnop"
ct = codec.AESCFBEncrypt(key, "Secret Message", iv)~
// STDOUT: 解密还原后打印
println(string(codec.AESCFBDecrypt(key, ct, iv)~))   // OUT: Secret Message
// assert: 锁定结论(CFB 加解密往返一致)
assert string(codec.AESCFBDecrypt(key, ct, iv)~) == "Secret Message", "AES-CFB encrypt/decrypt should round-trip"
``````````````

---

### AESEncryptCFBWithZeroPadding {#aesencryptcfbwithzeropadding}

```go
AESEncryptCFBWithZeroPadding(key []byte, i any, iv []byte) ([]byte, error)
```

使用 AES 算法在 CFB 模式下用零(Zero)填充加密数据

密钥长度必须是 16/24/32 字节(分别对应 AES-128/192/256)；iv 为 nil 时使用 key 前 16 字节作为 iv。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(16/24/32 字节) |
| i | `any` | 待加密的数据，可为 string、[]byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 加密失败时返回的错误 |

**示例**

``````````````yak
// VARS: CFB 零填充加解密
key = "1234567890123456"
iv = "abcdefghijklmnop"
ct = codec.AESEncryptCFBWithZeroPadding(key, "Secret Message", iv)~
// STDOUT: 去零填充解密后打印
println(string(codec.ZeroUnPadding(codec.AESDecryptCFBWithZeroPadding(key, ct, iv)~)))   // OUT: Secret Message
// assert: 锁定结论(CFB 零填充往返一致)
assert string(codec.ZeroUnPadding(codec.AESDecryptCFBWithZeroPadding(key, ct, iv)~)) == "Secret Message", "AES-CFB zero-padding should round-trip"
``````````````

---

### AESGCMDecrypt {#aesgcmdecrypt}

```go
AESGCMDecrypt(key []byte, data any, nonce []byte) ([]byte, error)
```

使用 AES-GCM 认证加密模式解密数据；nonce 为空时从密文前置部分提取 nonce

密钥长度必须是 16/24/32 字节；nonce 长度为 16 时用 16，否则用 12。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(16/24/32 字节) |
| data | `any` | 待解密的密文，可为 []byte 等 |
| nonce | `[]byte` | nonce(随机数)，传 nil 则从密文前置部分提取 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密或认证失败时返回的错误 |

**示例**

``````````````yak
// VARS: nonce 传 nil，从密文中提取
key = "1234567890123456"
ct = codec.AESGCMEncrypt(key, "Secret Message", nil)~
pt = codec.AESGCMDecrypt(key, ct, nil)~
// STDOUT: 打印还原后的明文
println(string(pt))   // OUT: Secret Message
// assert: 锁定结论(GCM 解密还原一致)
assert string(pt) == "Secret Message", "AES-GCM decrypt should recover plaintext"
``````````````

---

### AESGCMDecryptWithNonceSize12 {#aesgcmdecryptwithnoncesize12}

```go
AESGCMDecryptWithNonceSize12(key []byte, data any, nonce []byte) ([]byte, error)
```

使用 AES-GCM 模式以 12 字节 nonce 解密数据

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(16/24/32 字节) |
| data | `any` | 待解密的密文，可为 []byte 等 |
| nonce | `[]byte` | nonce(随机数)，传 nil 则从密文前 12 字节提取 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密或认证失败时返回的错误 |

**示例**

``````````````yak
// VARS: 先加密再解密(nonce12)
key = "1234567890123456"
ct = codec.AESGCMEncryptWithNonceSize12(key, "Secret Message", nil)~
pt = codec.AESGCMDecryptWithNonceSize12(key, ct, nil)~
// STDOUT: 打印还原后的明文
println(string(pt))   // OUT: Secret Message
// assert: 锁定结论(nonce12 解密还原一致)
assert string(pt) == "Secret Message", "AES-GCM nonce12 decrypt should recover plaintext"
``````````````

---

### AESGCMDecryptWithNonceSize16 {#aesgcmdecryptwithnoncesize16}

```go
AESGCMDecryptWithNonceSize16(key []byte, data any, nonce []byte) ([]byte, error)
```

使用 AES-GCM 模式以 16 字节 nonce 解密数据

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(16/24/32 字节) |
| data | `any` | 待解密的密文，可为 []byte 等 |
| nonce | `[]byte` | nonce(随机数)，传 nil 则从密文前 16 字节提取 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密或认证失败时返回的错误 |

**示例**

``````````````yak
// VARS: 先用 16 字节 nonce 加密再解密
key = "1234567890123456"
ct = codec.AESGCMEncrypt(key, "Secret Message", "0123456789abcdef")~
pt = codec.AESGCMDecryptWithNonceSize16(key, ct, "0123456789abcdef")~
// STDOUT: 打印还原后的明文
println(string(pt))   // OUT: Secret Message
// assert: 锁定结论(nonce16 解密还原一致)
assert string(pt) == "Secret Message", "AES-GCM nonce16 decrypt should recover plaintext"
``````````````

---

### AESGCMEncrypt {#aesgcmencrypt}

```go
AESGCMEncrypt(key []byte, data any, nonceRaw []byte) ([]byte, error)
```

//AES GCM 加密后的payload shiro 1.4.2版本更换为了AES-GCM加密方式

	func AES_GCM_Encrypt(key []byte, Content []byte) string {

		block, _ := aes.NewCipher(key)

		nonce := make([]byte, 16)

		io.ReadFull(rand.Reader, nonce)

		aesgcm, _ := cipher.NewGCMWithNonceSize(block, 16)

		ciphertext := aesgcm.Seal(nil, nonce, Content, nil)

		return base64.StdEncoding.EncodeToString(append(nonce, ciphertext...))

	}

AESGCMEncrypt 使用 AES-GCM 认证加密模式加密数据；nonceRaw 为空时随机生成 nonce 并前置到密文中

密钥长度必须是 16/24/32 字节(分别对应 AES-128/192/256)；nonce 长度为 16 时用 16，否则用 12。

注意：AESGCMEncryptWithNonceSize16 是本函数的别名

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(16/24/32 字节) |
| data | `any` | 待加密的数据，可为 string、[]byte 等 |
| nonceRaw | `[]byte` | nonce(随机数)，传 nil 则自动生成并前置到密文 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 加密后的密文字节(随机 nonce 时前 nonceSize 字节为 nonce) |
| r2 | `error` | 加密失败时返回的错误 |

**示例**

``````````````yak
// VARS: nonce 传 nil 自动生成并前置
key = "1234567890123456"
ct = codec.AESGCMEncrypt(key, "Secret Message", nil)~
pt = codec.AESGCMDecrypt(key, ct, nil)~
// STDOUT: 打印解密还原后的明文
println(string(pt))   // OUT: Secret Message
// assert: 锁定结论(GCM 加解密往返一致)
assert string(pt) == "Secret Message", "AES-GCM encrypt/decrypt should round-trip"
``````````````

---

### AESGCMEncryptWithNonceSize12 {#aesgcmencryptwithnoncesize12}

```go
AESGCMEncryptWithNonceSize12(key []byte, data any, nonceRaw []byte) ([]byte, error)
```

使用 AES-GCM 模式以 12 字节 nonce 加密数据

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(16/24/32 字节) |
| data | `any` | 待加密的数据，可为 string、[]byte 等 |
| nonceRaw | `[]byte` | nonce(随机数)，传 nil 则自动生成 12 字节并前置到密文 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 加密失败时返回的错误 |

**示例**

``````````````yak
// VARS: nonce 传 nil 自动生成(12 字节)并前置
key = "1234567890123456"
ct = codec.AESGCMEncryptWithNonceSize12(key, "Secret Message", nil)~
pt = codec.AESGCMDecryptWithNonceSize12(key, ct, nil)~
// STDOUT: 打印解密还原后的明文
println(string(pt))   // OUT: Secret Message
// assert: 锁定结论(GCM nonce12 加解密往返一致)
assert string(pt) == "Secret Message", "AES-GCM nonce12 should round-trip"
``````````````

---

### AESGCMEncryptWithNonceSize16 {#aesgcmencryptwithnoncesize16}

```go
AESGCMEncryptWithNonceSize16(key []byte, data any, nonceRaw []byte) ([]byte, error)
```

//AES GCM 加密后的payload shiro 1.4.2版本更换为了AES-GCM加密方式

	func AES_GCM_Encrypt(key []byte, Content []byte) string {

		block, _ := aes.NewCipher(key)

		nonce := make([]byte, 16)

		io.ReadFull(rand.Reader, nonce)

		aesgcm, _ := cipher.NewGCMWithNonceSize(block, 16)

		ciphertext := aesgcm.Seal(nil, nonce, Content, nil)

		return base64.StdEncoding.EncodeToString(append(nonce, ciphertext...))

	}

AESGCMEncrypt 使用 AES-GCM 认证加密模式加密数据；nonceRaw 为空时随机生成 nonce 并前置到密文中

密钥长度必须是 16/24/32 字节(分别对应 AES-128/192/256)；nonce 长度为 16 时用 16，否则用 12。

注意：AESGCMEncryptWithNonceSize16 是本函数的别名

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(16/24/32 字节) |
| data | `any` | 待加密的数据，可为 string、[]byte 等 |
| nonceRaw | `[]byte` | nonce(随机数)，传 nil 则自动生成并前置到密文 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 加密后的密文字节(随机 nonce 时前 nonceSize 字节为 nonce) |
| r2 | `error` | 加密失败时返回的错误 |

**示例**

``````````````yak
// VARS: nonce 传 nil 自动生成并前置
key = "1234567890123456"
ct = codec.AESGCMEncrypt(key, "Secret Message", nil)~
pt = codec.AESGCMDecrypt(key, ct, nil)~
// STDOUT: 打印解密还原后的明文
println(string(pt))   // OUT: Secret Message
// assert: 锁定结论(GCM 加解密往返一致)
assert string(pt) == "Secret Message", "AES-GCM encrypt/decrypt should round-trip"
``````````````

---

### AutoDecode {#autodecode}

```go
AutoDecode(i any) []*AutoDecodeResult
```

自动识别并逐层解码输入数据(依次尝试 URL/HTML 实体/Hex/Unicode/Base32/Base64/JWT/字符集等)

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 待自动解码的数据，可为 string、[]byte 等 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*AutoDecodeResult` | 解码过程的结果列表，每个元素含 Type(编码类型)、Origin(本层输入)、Result(本层输出)等字段；无法识别时返回单个 Type 为 No 的结果 |

**示例**

``````````````yak
// VARS: 对 Base64 文本自动解码
results = codec.AutoDecode(codec.EncodeBase64("hello world"))
// STDOUT: 打印是否得到解码步骤
println(len(results) > 0)   // OUT: true
// assert: 锁定结论(返回非空解码结果列表)
assert len(results) > 0, "AutoDecode should return decode steps"
``````````````

---

### CryptoRandBytes {#cryptorandbytes}

```go
CryptoRandBytes(n int) []byte
```

RandBytes 生成 n 个密码学安全的随机字节

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| n | `int` | 需要生成的随机字节数量 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 长度为 n 的随机字节切片(读取失败时返回 nil) |

**示例**

``````````````yak
// VARS: 生成 16 个随机字节(每次结果不同)
result = codec.RandBytes(16)
// STDOUT: 打印长度
println(len(result))   // OUT: 16
// assert: 锁定结论(长度固定为请求值)
assert len(result) == 16, "RandBytes should produce requested length"
``````````````

---

### DESCBCDecrypt {#descbcdecrypt}

```go
DESCBCDecrypt(key []byte, i any, iv []byte) ([]byte, error)
```

DESDecryptCBCWithZeroPadding 使用 DES 算法在 CBC 模式下用零填充解密数据

密钥长度必须是 8 字节，iv 可为 nil 或 8 字节；iv 为 nil 时固定为密钥或零填充到 8 字节。

注意：DESCBCDecrypt、DESDecrypt 和本函数是同一个函数的别名

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(8 字节) |
| i | `any` | 待解密的密文，可为 []byte 等 |
| iv | `[]byte` | 初始化向量(8 字节)，可为 nil |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |

**示例**

``````````````yak
// VARS: 先加密再解密(DES-CBC)
key = "12345678"
iv = "abcdefgh"
ct = codec.DESCBCEncrypt(key, "Secret Message", iv)~
pt = codec.DESCBCDecrypt(key, ct, iv)~
// STDOUT: 打印还原后的明文
println(string(pt))   // OUT: Secret Message
// assert: 锁定结论(DES-CBC 解密还原一致)
assert string(pt) == "Secret Message", "DES-CBC decrypt should recover plaintext"
``````````````

---

### DESCBCEncrypt {#descbcencrypt}

```go
DESCBCEncrypt(key []byte, i any, iv []byte) ([]byte, error)
```

DESEncryptCBCWithZeroPadding 使用 DES 算法在 CBC 模式下用零填充加密数据

密钥长度必须是 8 字节，iv 可为 nil 或 8 字节；iv 为 nil 时固定为密钥或零填充到 8 字节。

注意：DESCBCEncrypt、DESEncrypt 和本函数是同一个函数的别名；如需其他填充，先用 codec.PKCS7PaddingForDES 填充再调用。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(8 字节) |
| i | `any` | 待加密的数据，可为 string、[]byte 等 |
| iv | `[]byte` | 初始化向量(8 字节)，可为 nil |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 加密失败时返回的错误 |

**示例**

``````````````yak
// VARS: DES-CBC 加解密(8 字节密钥与 IV)
key = "12345678"
iv = "abcdefgh"
ct = codec.DESCBCEncrypt(key, "Secret Message", iv)~
// STDOUT: 解密还原后打印
println(string(codec.DESCBCDecrypt(key, ct, iv)~))   // OUT: Secret Message
// assert: 锁定结论(DES-CBC 加解密往返一致)
assert string(codec.DESCBCDecrypt(key, ct, iv)~) == "Secret Message", "DES-CBC should round-trip"
``````````````

---

### DESDecrypt {#desdecrypt}

```go
DESDecrypt(key []byte, i any, iv []byte) ([]byte, error)
```

DESDecryptCBCWithZeroPadding 使用 DES 算法在 CBC 模式下用零填充解密数据

密钥长度必须是 8 字节，iv 可为 nil 或 8 字节；iv 为 nil 时固定为密钥或零填充到 8 字节。

注意：DESCBCDecrypt、DESDecrypt 和本函数是同一个函数的别名

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(8 字节) |
| i | `any` | 待解密的密文，可为 []byte 等 |
| iv | `[]byte` | 初始化向量(8 字节)，可为 nil |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |

**示例**

``````````````yak
// VARS: 先加密再解密(DES-CBC)
key = "12345678"
iv = "abcdefgh"
ct = codec.DESCBCEncrypt(key, "Secret Message", iv)~
pt = codec.DESCBCDecrypt(key, ct, iv)~
// STDOUT: 打印还原后的明文
println(string(pt))   // OUT: Secret Message
// assert: 锁定结论(DES-CBC 解密还原一致)
assert string(pt) == "Secret Message", "DES-CBC decrypt should recover plaintext"
``````````````

---

### DESECBDecrypt {#desecbdecrypt}

```go
DESECBDecrypt(key []byte, data []byte) ([]byte, error)
```

DESECBDec 使用 DES 算法在 ECB 模式下用零填充解密数据(ECB 模式下无 iv 参数)

密钥长度必须是 8 字节。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(8 字节) |
| data | `[]byte` | 待解密的密文字节 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |

**示例**

``````````````yak
// VARS: 先加密再解密(DES-ECB)
key = "12345678"
ct = codec.DESECBEncrypt(key, "Secret Message")~
pt = codec.DESECBDecrypt(key, ct)~
// STDOUT: 去零填充后打印
println(string(codec.ZeroUnPadding(pt)))   // OUT: Secret Message
// assert: 锁定结论(DES-ECB 解密还原一致)
assert string(codec.ZeroUnPadding(pt)) == "Secret Message", "DES-ECB decrypt should recover plaintext"
``````````````

---

### DESECBEncrypt {#desecbencrypt}

```go
DESECBEncrypt(key []byte, data []byte) ([]byte, error)
```

DESECBEnc 使用 DES 算法在 ECB 模式下用零填充加密数据(ECB 模式下无 iv 参数)

密钥长度必须是 8 字节。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(8 字节) |
| data | `[]byte` | 待加密的数据字节 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 加密失败时返回的错误 |

**示例**

``````````````yak
// VARS: DES-ECB 加解密(8 字节密钥)
key = "12345678"
ct = codec.DESECBEncrypt(key, "Secret Message")~
// STDOUT: 去零填充解密后打印
println(string(codec.ZeroUnPadding(codec.DESECBDecrypt(key, ct)~)))   // OUT: Secret Message
// assert: 锁定结论(DES-ECB 加解密往返一致)
assert string(codec.ZeroUnPadding(codec.DESECBDecrypt(key, ct)~)) == "Secret Message", "DES-ECB should round-trip"
``````````````

---

### DESEncrypt {#desencrypt}

```go
DESEncrypt(key []byte, i any, iv []byte) ([]byte, error)
```

DESEncryptCBCWithZeroPadding 使用 DES 算法在 CBC 模式下用零填充加密数据

密钥长度必须是 8 字节，iv 可为 nil 或 8 字节；iv 为 nil 时固定为密钥或零填充到 8 字节。

注意：DESCBCEncrypt、DESEncrypt 和本函数是同一个函数的别名；如需其他填充，先用 codec.PKCS7PaddingForDES 填充再调用。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(8 字节) |
| i | `any` | 待加密的数据，可为 string、[]byte 等 |
| iv | `[]byte` | 初始化向量(8 字节)，可为 nil |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 加密失败时返回的错误 |

**示例**

``````````````yak
// VARS: DES-CBC 加解密(8 字节密钥与 IV)
key = "12345678"
iv = "abcdefgh"
ct = codec.DESCBCEncrypt(key, "Secret Message", iv)~
// STDOUT: 解密还原后打印
println(string(codec.DESCBCDecrypt(key, ct, iv)~))   // OUT: Secret Message
// assert: 锁定结论(DES-CBC 加解密往返一致)
assert string(codec.DESCBCDecrypt(key, ct, iv)~) == "Secret Message", "DES-CBC should round-trip"
``````````````

---

### DecodeASCII {#decodeascii}

```go
DecodeASCII(s string) (string, error)
```

StrConvUnquote 解析带引号的 Go 字面量字符串，去掉外层引号并处理转义序列（导出名为 codec.StrconvUnquote / codec.DecodeASCII）

与 codec.StrconvQuote 配对使用，输入必须是带双引号包裹的字符串

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| s | `string` | 带引号的字符串字面量，如 &#34;\&#34;hi\&#34;&#34; |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 去引号并解转义后的字符串 |
| r2 | `error` | 错误信息（输入不是合法的带引号字面量时返回） |

**示例**

``````````````yak
result = codec.StrconvUnquote("\"a\\nb\"")~
println(len(result))   // OUT: 3
assert result == "a\nb", "StrconvUnquote should unquote and unescape \\n"
``````````````

---

### DecodeBase32 {#decodebase32}

```go
DecodeBase32(i string) ([]byte, error)
```

将标准 Base32 字符串解码为原始字节

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `string` | 待解码的标准 Base32 字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 解码后的原始字节 |
| r2 | `error` | 解码失败时返回的错误 |

**示例**

``````````````yak
// VARS: 波浪号自动解包 error，得到 []byte
result = codec.DecodeBase32("MFRGG===")~
// STDOUT: 转字符串后打印
println(string(result))   // OUT: abc
// assert: 锁定结论
assert string(result) == "abc", "DecodeBase32 should decode base32 back to bytes"
``````````````

---

### DecodeBase64 {#decodebase64}

```go
DecodeBase64(i string) ([]byte, error)
```

将标准 Base64 字符串解码为原始字节

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `string` | 待解码的标准 Base64 字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 解码后的原始字节 |
| r2 | `error` | 解码失败时返回的错误 |

**示例**

``````````````yak
// VARS: 波浪号自动解包 error，得到 []byte
result = codec.DecodeBase64("YWJj")~
// STDOUT: 转字符串后打印
println(string(result))   // OUT: abc
// assert: 锁定结论
assert string(result) == "abc", "DecodeBase64 should decode base64 back to bytes"
``````````````

---

### DecodeBase64Url {#decodebase64url}

```go
DecodeBase64Url(i any) ([]byte, error)
```

将 URL 安全的 Base64 字符串解码为原始字节

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 待解码的 URL 安全 Base64 字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 解码后的原始字节 |
| r2 | `error` | 解码失败时返回的错误 |

**示例**

``````````````yak
// VARS: URL 安全 Base64 解码，波浪号自动解包 error
result = codec.DecodeBase64Url(codec.EncodeBase64Url("abc"))~
// STDOUT: 转字符串后打印
println(string(result))   // OUT: abc
// assert: 锁定结论
assert string(result) == "abc", "base64url decode should recover origin"
``````````````

---

### DecodeChunked {#decodechunked}

```go
DecodeChunked(raw []byte) ([]byte, error)
```

HTTPChunkedDecode 解码 HTTP Transfer-Encoding: chunked 分块传输数据，还原原始 body

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| raw | `[]byte` | 分块编码后的字节数据 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 解码还原后的原始 body |
| r2 | `error` | 解码失败时返回的错误 |

**示例**

``````````````yak
// VARS: 先分块编码再解码，波浪号自动解包 error
result = codec.DecodeChunked(codec.EncodeChunked("chunked body"))~
// STDOUT: 转字符串后打印
println(string(result))   // OUT: chunked body
// assert: 锁定结论(分块编解码往返一致)
assert string(result) == "chunked body", "chunked encode/decode should round-trip"
``````````````

---

### DecodeHex {#decodehex}

```go
DecodeHex(i string) ([]byte, error)
```

将十六进制(Hex)字符串解码为原始字节，支持可选的 0x 前缀

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `string` | 待解码的十六进制字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 解码后的原始字节 |
| r2 | `error` | 解码失败时返回的错误 |

**示例**

``````````````yak
// VARS: 波浪号自动解包 error，得到 []byte
result = codec.DecodeHex("616263")~
// STDOUT: 转字符串后打印
println(string(result))   // OUT: abc
// assert: 锁定结论
assert string(result) == "abc", "DecodeHex should decode hex back to bytes"
``````````````

---

### DecodeHtml {#decodehtml}

```go
DecodeHtml(s string) string
```

UnescapeHtmlString 将 HTML 实体还原为原始字符，与 codec.EscapeHtml 配对使用（导出名为 codec.DecodeHtml）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| s | `string` | 含 HTML 实体的字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 还原后的原始字符串 |

**示例**

``````````````yak
result = codec.DecodeHtml("&lt;a&gt;")
println(result)   // OUT: <a>
assert result == "<a>", "DecodeHtml should unescape HTML entities"
``````````````

---

### DecodeUrl {#decodeurl}

```go
DecodeUrl(s string) (string, error)
```

QueryUnescape 对 URL 百分号编码的字符串做查询串解码，同时兼容 %uXXXX 形式

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| s | `string` | 待解码的 URL 编码字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 解码后的字符串 |
| r2 | `error` | 解码失败时返回的错误 |

**示例**

``````````````yak
// VARS: URL 解码，波浪号自动解包 error
result = codec.DecodeUrl("a%20b")~
// STDOUT: 打印可观察输出
println(result)   // OUT: a b
// assert: 锁定结论
assert result == "a b", "DecodeUrl should decode percent-encoding"
``````````````

---

### DoubleDecodeUrl {#doubledecodeurl}

```go
DoubleDecodeUrl(i string) (string, error)
```

对输入做两次 URL 解码（导出名为 codec.DoubleDecodeUrl）

与 codec.DoubleEncodeUrl 配对使用，用于还原被两次编码的数据

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `string` | 被两次 URL 编码的字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 两次解码后的原始字符串 |
| r2 | `error` | 错误信息（解码失败时返回） |

**示例**

``````````````yak
encoded = codec.DoubleEncodeUrl("a b&c")
decoded = codec.DoubleDecodeUrl(encoded)~
println(decoded)   // OUT: a b&c
assert decoded == "a b&c", "double decode should recover original plaintext"
``````````````

---

### DoubleEncodeUrl {#doubleencodeurl}

```go
DoubleEncodeUrl(i any) string
```

对输入做两次 URL 编码（导出名为 codec.DoubleEncodeUrl）

常用于绕过仅做一次 URL 解码的过滤器；与 codec.DoubleDecodeUrl 配对使用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 待编码的数据，可为 string、[]byte 等 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 经两次 URL 编码后的字符串 |

**示例**

``````````````yak
encoded = codec.DoubleEncodeUrl("a b&c")
decoded = codec.DoubleDecodeUrl(encoded)~
println(decoded)   // OUT: a b&c
assert decoded == "a b&c", "double encode then double decode should round-trip"
``````````````

---

### EncodeASCII {#encodeascii}

```go
EncodeASCII(s string) string
```

StrConvQuoteHex 将字符串转换为带双引号的可打印形式，非字母数字字节统一转义为 \xNN

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| s | `string` | 待转换的字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 带双引号、非字母数字字节转义为 \xNN 的字符串 |

**示例**

``````````````yak
// VARS: 转为可打印形式(EncodeToPrintable / EncodeASCII 同一函数)
result = codec.EncodeToPrintable("a b")
// STDOUT: 打印可观察输出(空格被转义为 \x20)
println(result)   // OUT: "a\x20b"
// assert: 锁定结论
assert result == "\"a\\x20b\"", "EncodeToPrintable should hex-escape non-alnum bytes"
``````````````

---

### EncodeBase32 {#encodebase32}

```go
EncodeBase32(i any) string
```

将输入数据编码为标准 Base32 字符串

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 待编码的数据，可为 string、[]byte 等 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 标准 Base32 编码后的字符串 |

**示例**

``````````````yak
// VARS: 把编码结果赋值给变量
result = codec.EncodeBase32("abc")
// STDOUT: 打印可观察输出
println(result)   // OUT: MFRGG===
// assert: 锁定结论(与 DecodeBase32 往返一致)
assert string(codec.DecodeBase32(result)~) == "abc", "base32 encode/decode should round-trip"
``````````````

---

### EncodeBase64 {#encodebase64}

```go
EncodeBase64(i any) string
```

将输入数据编码为标准 Base64 字符串

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 待编码的数据，可为 string、[]byte 等 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 标准 Base64 编码后的字符串 |

**示例**

``````````````yak
// VARS: 把编码结果赋值给变量
result = codec.EncodeBase64("abc")
// STDOUT: 打印可观察输出
println(result)   // OUT: YWJj
// assert: 锁定结论(与 DecodeBase64 往返一致)
assert result == "YWJj", "EncodeBase64 should base64-encode bytes"
assert string(codec.DecodeBase64(result)~) == "abc", "base64 encode/decode should round-trip"
``````````````

---

### EncodeBase64Url {#encodebase64url}

```go
EncodeBase64Url(i any) string
```

将输入数据编码为 URL 安全的 Base64 字符串(用 - _ 替换 + /，并去掉末尾的 =)

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 待编码的数据，可为 string、[]byte 等 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | URL 安全的 Base64 编码字符串 |

**示例**

``````````````yak
// VARS: 对含 + / 的字节做 URL 安全编码
result = codec.EncodeBase64Url("\xFB\xFF")
// STDOUT: 打印可观察输出
println(result)   // OUT: -_8
// assert: 锁定结论(与 DecodeBase64Url 往返一致)
assert string(codec.DecodeBase64Url(codec.EncodeBase64Url("abc"))~) == "abc", "base64url encode/decode should round-trip"
``````````````

---

### EncodeChunked {#encodechunked}

```go
EncodeChunked(raw []byte) []byte
```

HTTPChunkedEncode 将原始数据编码为 HTTP Transfer-Encoding: chunked 分块传输格式

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| raw | `[]byte` | 待编码的原始 body 字节 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 分块编码后的字节数据 |

**示例**

``````````````yak
// VARS: 先分块编码再解码，验证往返一致
encoded = codec.EncodeChunked("chunked body")
result = codec.DecodeChunked(encoded)~
// STDOUT: 转字符串后打印
println(string(result))   // OUT: chunked body
// assert: 锁定结论(分块编解码往返一致)
assert string(result) == "chunked body", "EncodeChunked should be decodable back"
``````````````

---

### EncodeHtml {#encodehtml}

```go
EncodeHtml(i any) string
```

EncodeHtmlEntity 将输入数据的每个字节编码为十进制 HTML 实体(如 &lt; 编码为 &amp;#60;)，常用于 XSS 构造

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 待编码的数据，可为 string、[]byte 等 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 十进制 HTML 实体字符串 |

**示例**

``````````````yak
// VARS: 把特殊字符编码为十进制 HTML 实体
result = codec.EncodeHtml("<b>")
// STDOUT: 打印可观察输出
println(result)   // OUT: &#60;&#98;&#62;
// assert: 锁定结论(可用 DecodeHtml 还原)
assert string(codec.DecodeHtml(result)~) == "<b>", "EncodeHtml should be decodable back"
``````````````

---

### EncodeHtmlHex {#encodehtmlhex}

```go
EncodeHtmlHex(i any) string
```

EncodeHtmlEntityHex 将输入数据的每个字节编码为十六进制 HTML 实体(如 &lt; 编码为 &amp;#x3c;)，常用于 XSS 构造

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 待编码的数据，可为 string、[]byte 等 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 十六进制 HTML 实体字符串 |

**示例**

``````````````yak
// VARS: 把特殊字符编码为十六进制 HTML 实体
result = codec.EncodeHtmlHex("<b>")
// STDOUT: 打印可观察输出
println(result)   // OUT: &#x3c;&#x62;&#x3e;
// assert: 锁定结论(可用 DecodeHtml 还原)
assert string(codec.DecodeHtml(result)~) == "<b>", "EncodeHtmlHex should be decodable back"
``````````````

---

### EncodeToHex {#encodetohex}

```go
EncodeToHex(i any) string
```

将输入数据编码为十六进制(Hex)字符串

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 待编码的数据，可为 string、[]byte 等 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 十六进制编码后的字符串 |

**示例**

``````````````yak
// VARS: 把编码结果赋值给变量
result = codec.EncodeToHex("abc")
// STDOUT: 打印可观察输出
println(result)   // OUT: 616263
// assert: 锁定结论(与 DecodeHex 往返一致)
assert result == "616263", "EncodeToHex should hex-encode bytes"
assert string(codec.DecodeHex(result)~) == "abc", "hex encode/decode should round-trip"
``````````````

---

### EncodeToPrintable {#encodetoprintable}

```go
EncodeToPrintable(s string) string
```

StrConvQuoteHex 将字符串转换为带双引号的可打印形式，非字母数字字节统一转义为 \xNN

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| s | `string` | 待转换的字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 带双引号、非字母数字字节转义为 \xNN 的字符串 |

**示例**

``````````````yak
// VARS: 转为可打印形式(EncodeToPrintable / EncodeASCII 同一函数)
result = codec.EncodeToPrintable("a b")
// STDOUT: 打印可观察输出(空格被转义为 \x20)
println(result)   // OUT: "a\x20b"
// assert: 锁定结论
assert result == "\"a\\x20b\"", "EncodeToPrintable should hex-escape non-alnum bytes"
``````````````

---

### EncodeUrl {#encodeurl}

```go
EncodeUrl(i any) string
```

EncodeUrlCode 对输入数据做激进的百分号(URL)编码，把每个字节都编码成 %xx 形式

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 待编码的数据，可为 string、[]byte 等 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 百分号编码后的字符串 |

**示例**

``````````````yak
// VARS: 把每个字节都编码成 %xx
result = codec.EncodeUrl("abc")
// STDOUT: 打印可观察输出
println(result)   // OUT: %61%62%63
// assert: 锁定结论(可用 DecodeUrl 还原)
assert string(codec.DecodeUrl(result)~) == "abc", "EncodeUrl should be decodable back"
``````````````

---

### EscapeHtml {#escapehtml}

```go
EscapeHtml(s string) string
```

EscapeHtmlString 对字符串做 HTML 实体转义，将 &lt; &gt; &amp; &#39; &#34; 等转为对应的 HTML 实体（导出名为 codec.EscapeHtml）

用于把用户输入安全地嵌入 HTML 文本，防止 XSS

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| s | `string` | 待转义的字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | HTML 实体转义后的字符串 |

**示例**

``````````````yak
result = codec.EscapeHtml("<a href='x'>")
println(result)   // OUT: &lt;a href=&#39;x&#39;&gt;
assert result == "&lt;a href=&#39;x&#39;&gt;", "EscapeHtml should escape angle brackets and quotes"
``````````````

---

### EscapePathUrl {#escapepathurl}

```go
EscapePathUrl(s string) string
```

PathEscape 对字符串做 URL 路径转义，将空格、斜杠等特殊字符转为百分号编码（导出名为 codec.EscapePathUrl）

与 query 转义不同，路径转义会把空格编码为 %20（而非 +）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| s | `string` | 待转义的字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 路径转义后的字符串 |

**示例**

``````````````yak
result = codec.EscapePathUrl("a b/c")
println(result)   // OUT: a%20b%2Fc
assert result == "a%20b%2Fc", "EscapePathUrl should escape space to %20 and slash to %2F"
``````````````

---

### EscapeQueryUrl {#escapequeryurl}

```go
EscapeQueryUrl(s string) string
```

QueryEscape 对字符串做 URL 查询串转义，把保留字符(如空格、= 、&amp;)转义为 %xx(空格转为 +)

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| s | `string` | 待转义的字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 转义后的查询串字符串 |

**示例**

``````````````yak
// VARS: 查询串转义
result = codec.EscapeQueryUrl("a b")
// STDOUT: 打印可观察输出(空格被转义为 +)
println(result)   // OUT: a+b
// assert: 锁定结论
assert result == "a+b", "EscapeQueryUrl should escape space to plus"
``````````````

---

### EscapeUrl {#escapeurl}

```go
EscapeUrl(s string) string
```

QueryEscape 对字符串做 URL 查询串转义，把保留字符(如空格、= 、&amp;)转义为 %xx(空格转为 +)

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| s | `string` | 待转义的字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 转义后的查询串字符串 |

**示例**

``````````````yak
// VARS: 查询串转义
result = codec.EscapeQueryUrl("a b")
// STDOUT: 打印可观察输出(空格被转义为 +)
println(result)   // OUT: a+b
// assert: 锁定结论
assert result == "a+b", "EscapeQueryUrl should escape space to plus"
``````````````

---

### FixUTF8 {#fixutf8}

```go
FixUTF8(s []byte) string
```

EscapeInvalidUTF8Byte 将字节数据中的非法 UTF-8 字节与不可见控制字符转义为 \xNN 形式，得到可读字符串

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| s | `[]byte` | 待修复的字节数据(可能含非法 UTF-8 或控制字符) |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 修复/转义后的可读 UTF-8 字符串 |

**示例**

``````````````yak
// VARS: 合法字符串原样返回
result = codec.FixUTF8("hello")
// STDOUT: 打印可观察输出
println(result)   // OUT: hello
// assert: 锁定结论(合法输入保持不变)
assert result == "hello", "FixUTF8 should keep valid string unchanged"
``````````````

---

### GB18030ToUTF8 {#gb18030toutf8}

```go
GB18030ToUTF8(s []byte) ([]byte, error)
```

将 GB18030 编码的字节转换为 UTF-8 字节

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| s | `[]byte` | GB18030 编码的字节数据 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 转换后的 UTF-8 字节 |
| r2 | `error` | 转换失败时返回的错误 |

**示例**

``````````````yak
// VARS: 先转 GB18030 再转回 UTF-8，波浪号自动解包 error
result = codec.GB18030ToUTF8(codec.UTF8ToGB18030("中文")~)~
// STDOUT: 转字符串后打印
println(string(result))   // OUT: 中文
// assert: 锁定结论(GB18030 与 UTF-8 往返一致)
assert string(result) == "中文", "GB18030/UTF8 should round-trip"
``````````````

---

### GBKSafe {#gbksafe}

```go
GBKSafe(s []byte) (string, error)
```

GBKSafeString 将字节数据安全转换为可读字符串：已是合法 UTF-8 则原样返回，否则尝试按 GBK 解码为 UTF-8

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| s | `[]byte` | 待转换的字节数据(可能是 UTF-8 或 GBK) |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 转换后的可读字符串 |
| r2 | `error` | 既非合法 UTF-8 又无法按 GBK 解码时返回的错误 |

**示例**

``````````````yak
// VARS: 合法 UTF-8 输入原样返回，波浪号自动解包 error
result = codec.GBKSafe("hello")~
// STDOUT: 打印可观察输出
println(result)   // OUT: hello
// assert: 锁定结论
assert result == "hello", "GBKSafe should return valid utf8 as-is"
``````````````

---

### GBKToUTF8 {#gbktoutf8}

```go
GBKToUTF8(s []byte) ([]byte, error)
```

将 GBK 编码的字节转换为 UTF-8 字节

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| s | `[]byte` | GBK 编码的字节数据 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 转换后的 UTF-8 字节 |
| r2 | `error` | 转换失败时返回的错误 |

**示例**

``````````````yak
// VARS: 先转 GBK 再转回 UTF-8，波浪号自动解包 error
result = codec.GBKToUTF8(codec.UTF8ToGBK("中文")~)~
// STDOUT: 转字符串后打印
println(string(result))   // OUT: 中文
// assert: 锁定结论(GBK 与 UTF-8 往返一致)
assert string(result) == "中文", "GBK/UTF8 should round-trip"
``````````````

---

### HTMLChardet {#htmlchardet}

```go
HTMLChardet(raw any) ([]chardet.Result, error)
```

CharDetect 检测输入数据可能的字符集编码，返回所有候选结果(按置信度排序)

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| raw | `any` | 待检测的数据，可为 string、[]byte 等 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]chardet.Result` | []chardet.Result: 候选字符集检测结果列表(含 Charset、Confidence 等字段) |
| r2 | `error` | 检测失败时返回的错误 |

**示例**

``````````````yak
// VARS: 检测字符集，波浪号自动解包 error
results = codec.HTMLChardet("hello world, this is plain english text")~
// STDOUT: 打印是否得到候选结果
println(len(results) > 0)   // OUT: true
// assert: 锁定结论(返回非空候选列表)
assert len(results) > 0, "HTMLChardet should return candidates"
``````````````

---

### HTMLChardetBest {#htmlchardetbest}

```go
HTMLChardetBest(raw any) (*chardet.Result, error)
```

CharDetectBest 检测输入数据最可能的字符集编码，返回置信度最高的单个结果

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| raw | `any` | 待检测的数据，可为 string、[]byte 等 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*chardet.Result` | *chardet.Result: 置信度最高的字符集检测结果(含 Charset、Confidence 等字段) |
| r2 | `error` | 检测失败时返回的错误 |

**示例**

``````````````yak
// VARS: 检测最佳字符集，波浪号自动解包 error
best = codec.HTMLChardetBest("hello world, this is plain english text")~
// STDOUT: 打印是否检测到结果
println(best != nil)   // OUT: true
// assert: 锁定结论(返回非空结果)
assert best != nil, "HTMLChardetBest should return a result"
``````````````

---

### HZGB2312ToUTF8 {#hzgb2312toutf8}

```go
HZGB2312ToUTF8(s []byte) ([]byte, error)
```

将 HZ-GB2312 编码的字节转换为 UTF-8 字节

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| s | `[]byte` | HZ-GB2312(兼容 GB18030 解码)编码的字节数据 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 转换后的 UTF-8 字节 |
| r2 | `error` | 转换失败时返回的错误 |

**示例**

``````````````yak
// VARS: GBK 编码的中文再用 HZGB2312ToUTF8 还原，波浪号自动解包 error
result = codec.HZGB2312ToUTF8(codec.UTF8ToGBK("中文")~)~
// STDOUT: 转字符串后打印
println(string(result))   // OUT: 中文
// assert: 锁定结论(还原为 UTF-8 中文)
assert string(result) == "中文", "HZGB2312ToUTF8 should recover utf8 chinese"
``````````````

---

### HmacMD5 {#hmacmd5}

```go
HmacMD5(key any, data any) []byte
```

使用给定密钥计算数据的 HMAC-MD5 消息认证码，返回字节切片

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `any` | 密钥，可为 string、[]byte 等 |
| data | `any` | 待认证的数据，可为 string、[]byte 等 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | HMAC-MD5 结果字节切片(16 字节，转 hex 后长度 32) |

**示例**

``````````````yak
// VARS: 计算 HMAC-MD5 并转 hex
result = codec.EncodeToHex(codec.HmacMD5("secret_key", "Important Message"))
// STDOUT: 打印长度
println(len(result))   // OUT: 32
// assert: 锁定结论(hex 长度固定为 32)
assert len(result) == 32, "HmacMD5 hex length should be 32"
``````````````

---

### HmacSM3 {#hmacsm3}

```go
HmacSM3(key any, data any) []byte
```

使用给定密钥计算数据的国密 HMAC-SM3 消息认证码，返回字节切片

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `any` | 密钥，可为 string、[]byte 等 |
| data | `any` | 待认证的数据，可为 string、[]byte 等 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | HMAC-SM3 结果字节切片(32 字节，转 hex 后长度 64) |

**示例**

``````````````yak
// VARS: 计算 HMAC-SM3 并转 hex
result = codec.EncodeToHex(codec.HmacSM3("secret_key", "Important Message"))
// STDOUT: 打印长度
println(len(result))   // OUT: 64
// assert: 锁定结论(hex 长度固定为 64)
assert len(result) == 64, "HmacSM3 hex length should be 64"
``````````````

---

### HmacSha1 {#hmacsha1}

```go
HmacSha1(key any, data any) []byte
```

使用给定密钥计算数据的 HMAC-SHA1 消息认证码，返回字节切片

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `any` | 密钥，可为 string、[]byte 等 |
| data | `any` | 待认证的数据，可为 string、[]byte 等 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | HMAC-SHA1 结果字节切片(20 字节，转 hex 后长度 40) |

**示例**

``````````````yak
// VARS: 计算 HMAC-SHA1 并转 hex
result = codec.EncodeToHex(codec.HmacSha1("secret_key", "Important Message"))
// STDOUT: 打印长度
println(len(result))   // OUT: 40
// assert: 锁定结论(hex 长度固定为 40)
assert len(result) == 40, "HmacSha1 hex length should be 40"
``````````````

---

### HmacSha256 {#hmacsha256}

```go
HmacSha256(key any, data any) []byte
```

使用给定密钥计算数据的 HMAC-SHA256 消息认证码，返回字节切片

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `any` | 密钥，可为 string、[]byte 等 |
| data | `any` | 待认证的数据，可为 string、[]byte 等 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | HMAC-SHA256 结果字节切片(32 字节，转 hex 后长度 64) |

**示例**

``````````````yak
// VARS: 计算 HMAC-SHA256 并转 hex
result = codec.EncodeToHex(codec.HmacSha256("secret_key", "Important Message"))
// STDOUT: 打印长度
println(len(result))   // OUT: 64
// assert: 锁定结论(相同输入结果稳定可复现)
assert len(result) == 64, "HmacSha256 hex length should be 64"
assert result == codec.EncodeToHex(codec.HmacSha256("secret_key", "Important Message")), "HmacSha256 should be deterministic"
``````````````

---

### HmacSha512 {#hmacsha512}

```go
HmacSha512(key any, data any) []byte
```

使用给定密钥计算数据的 HMAC-SHA512 消息认证码，返回字节切片

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `any` | 密钥，可为 string、[]byte 等 |
| data | `any` | 待认证的数据，可为 string、[]byte 等 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | HMAC-SHA512 结果字节切片(64 字节，转 hex 后长度 128) |

**示例**

``````````````yak
// VARS: 计算 HMAC-SHA512 并转 hex
result = codec.EncodeToHex(codec.HmacSha512("secret_key", "Important Message"))
// STDOUT: 打印长度
println(len(result))   // OUT: 128
// assert: 锁定结论(hex 长度固定为 128)
assert len(result) == 128, "HmacSha512 hex length should be 128"
``````````````

---

### IsUTF8 {#isutf8}

```go
IsUTF8(i any) (bool, error)
```

判断输入数据是否为合法的 UTF-8 编码

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 待检测的数据，可为 string、[]byte、io.Reader 等 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `bool` | 是合法 UTF-8 返回 true，否则 false |
| r2 | `error` | 读取数据失败时返回的错误 |

**示例**

``````````````yak
// VARS: 检测合法 UTF-8，波浪号自动解包 error
result = codec.IsUTF8("hello")~
// STDOUT: 打印可观察输出
println(result)   // OUT: true
// assert: 锁定结论(ASCII 与中文均为合法 UTF-8)
assert result == true, "ascii should be valid utf8"
assert codec.IsUTF8("中文")~ == true, "chinese should be valid utf8"
``````````````

---

### IsUTF8File {#isutf8file}

```go
IsUTF8File(filename string) (bool, error)
```

使用采样策略判断文件内容是否为合法 UTF-8 编码

小于 0.5K 的文件检查全部内容；0.5K-1K 检查一个 0.5K 采样；大于 1K 采样 4-8 段(每段约 256 个字符)。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| filename | `string` | 待检测的文件路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `bool` | 文件内容为合法 UTF-8 返回 true，否则 false |
| r2 | `error` | 打开或读取文件失败时返回的错误 |

**示例**

``````````````yak
// VARS: 写入一个 UTF-8 文件再检测
fp = "/tmp/codec-isutf8-demo.txt"
file.Save(fp, "hello utf8 content")~
defer file.Rm(fp)
result = codec.IsUTF8File(fp)~
// STDOUT: 打印可观察输出
println(result)   // OUT: true
// assert: 锁定结论(UTF-8 文件检测为 true)
assert result == true, "utf8 file should be detected as utf8"
``````````````

---

### MMH3Hash128 {#mmh3hash128}

```go
MMH3Hash128(i any) string
```

计算输入数据的 MurmurHash3 128 位哈希并返回十六进制字符串

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 待哈希的数据，可为 string、[]byte 等 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 32 位十六进制 MurmurHash3 128 位哈希字符串 |

**示例**

``````````````yak
// VARS: 计算 MMH3 128 位哈希
result = codec.MMH3Hash128("abc")
// STDOUT: 打印可观察输出
println(result)   // OUT: 6778ad3f3f3f96b4522dca264174a23b
// assert: 锁定结论(确定性哈希 + 固定长度)
assert result == "6778ad3f3f3f96b4522dca264174a23b", "MMH3Hash128 should match known value"
assert len(result) == 32, "MMH3Hash128 hex length should be 32"
``````````````

---

### MMH3Hash128x64 {#mmh3hash128x64}

```go
MMH3Hash128x64(i any) string
```

计算输入数据的 MurmurHash3 128 位(x64 变体)哈希并返回十六进制字符串

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 待哈希的数据，可为 string、[]byte 等 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 32 位十六进制 MurmurHash3 128 位(x64)哈希字符串 |

**示例**

``````````````yak
// VARS: 计算 MMH3 128 位(x64) 哈希
result = codec.MMH3Hash128x64("abc")
// STDOUT: 打印可观察输出
println(result)   // OUT: 6778ad3f3f3f96b4522dca264174a23b
// assert: 锁定结论(确定性哈希 + 固定长度)
assert result == "6778ad3f3f3f96b4522dca264174a23b", "MMH3Hash128x64 should match known value"
assert len(result) == 32, "MMH3Hash128x64 hex length should be 32"
``````````````

---

### MMH3Hash32 {#mmh3hash32}

```go
MMH3Hash32(i any) int64
```

计算输入数据的 MurmurHash3 32 位非加密快速哈希，返回数值

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 待哈希的数据，可为 string、[]byte 等 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `int64` | MurmurHash3 32 位哈希值(int64) |

**示例**

``````````````yak
// VARS: 计算 MMH3 32 位哈希
result = codec.MMH3Hash32("abc")
// STDOUT: 打印可观察输出
println(result)   // OUT: 3017643002
// assert: 锁定结论(确定性哈希)
assert result == 3017643002, "MMH3Hash32 should match known value"
``````````````

---

### Md5 {#md5}

```go
Md5(i any) string
```

计算输入数据的 MD5 摘要并返回十六进制字符串

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 待计算摘要的数据，可为 string、[]byte 等 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 32 位十六进制 MD5 摘要字符串 |

**示例**

``````````````yak
// VARS: 计算 MD5 摘要
result = codec.Md5("abc")
// STDOUT: 打印可观察输出
println(result)   // OUT: 900150983cd24fb0d6963f7d28e17f72
// assert: 锁定结论(已知摘要 + 固定长度)
assert result == "900150983cd24fb0d6963f7d28e17f72", "Md5 should match known digest"
assert len(result) == 32, "Md5 hex length should be 32"
``````````````

---

### PBKDF2SHA1Key {#pbkdf2sha1key}

```go
PBKDF2SHA1Key(password any, salt any, iterations int, keyLen int) ([]byte, error)
```

使用 PBKDF2-HMAC-SHA1 从口令与盐派生固定长度的密钥(如微信 wxapkg V1MMWX 解密)

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| password | `any` | 口令，可为 string、[]byte 等 |
| salt | `any` | 盐值，可为 string、[]byte 等 |
| iterations | `int` | 迭代次数，&lt;=0 时使用默认值 10000 |
| keyLen | `int` | 派生密钥长度(字节)，&lt;=0 时使用默认值 32 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 派生出的密钥字节 |
| r2 | `error` | 派生失败时返回的错误 |

**示例**

``````````````yak
// VARS: 从口令与盐派生 16 字节密钥
key = codec.PBKDF2SHA1Key("password", "salt", 1000, 16)~
// STDOUT: 打印密钥长度
println(len(key))   // OUT: 16
// assert: 锁定结论(长度符合 + 确定性可复现)
assert len(key) == 16, "PBKDF2SHA1Key should produce key of requested length"
assert codec.EncodeToHex(key) == codec.EncodeToHex(codec.PBKDF2SHA1Key("password", "salt", 1000, 16)~), "PBKDF2 should be deterministic"
``````````````

---

### PKCS5Padding {#pkcs5padding}

```go
PKCS5Padding(ciphertext []byte, blockSize int) []byte
```

对数据按指定块大小做 PKCS5/PKCS7 填充，使其长度补齐到块大小的整数倍

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| ciphertext | `[]byte` | 待填充的原始数据 |
| blockSize | `int` | 块大小(字节)，如 8 或 16 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 填充后的字节切片 |

**示例**

``````````````yak
// VARS: 把 2 字节数据填充到 16 字节块
result = codec.PKCS5Padding([]byte("hi"), 16)
// STDOUT: 打印长度
println(len(result))   // OUT: 16
// assert: 锁定结论(可用 PKCS5UnPadding 去填充)
assert len(result) == 16, "PKCS5Padding should pad to block size"
assert string(codec.PKCS5UnPadding(result)) == "hi", "PKCS5 pad/unpad should round-trip"
``````````````

---

### PKCS5UnPadding {#pkcs5unpadding}

```go
PKCS5UnPadding(origData []byte) []byte
```

去除数据末尾的 PKCS5/PKCS7 填充，返回原始数据

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| origData | `[]byte` | 带填充的数据 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 去除填充后的字节切片 |

**示例**

``````````````yak
// VARS: 先填充再去填充
padded = codec.PKCS5Padding([]byte("hi"), 16)
result = codec.PKCS5UnPadding(padded)
// STDOUT: 转字符串后打印
println(string(result))   // OUT: hi
// assert: 锁定结论(还原原始数据)
assert string(result) == "hi", "PKCS5UnPadding should remove padding"
``````````````

---

### PKCS7Padding {#pkcs7padding}

```go
PKCS7Padding(src []byte) []byte
```

对数据按 16 字节块大小做 PKCS7 填充（导出名为 codec.PKCS7Padding）

填充字节的值等于需要填充的长度；即便数据已是块的整数倍也会补一整块

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| src | `[]byte` | 待填充的原始字节 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 填充后长度为 16 字节整数倍的字节 |

**示例**

``````````````yak
padded = codec.PKCS7Padding("yak")
println(len(padded))   // OUT: 16
assert len(padded) == 16, "PKCS7Padding should pad to 16-byte block"
assert string(codec.PKCS7UnPadding(padded)) == "yak", "PKCS7UnPadding should recover original data"
``````````````

---

### PKCS7PaddingForDES {#pkcs7paddingfordes}

```go
PKCS7PaddingForDES(src []byte) []byte
```

PKCS7PaddingFor8ByteBlock 按 8 字节块大小对数据做 PKCS7/PKCS5 填充(常用于 DES)

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| src | `[]byte` | 待填充的数据字节 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 填充到 8 字节整数倍后的数据字节 |

**示例**

``````````````yak
// VARS: 对 3 字节数据按 8 字节块填充
padded = codec.PKCS7PaddingForDES("abc")
// STDOUT: 打印填充后的长度
println(len(padded))   // OUT: 8
// assert: 锁定结论(去填充可还原原始数据)
assert string(codec.PKCS7UnPaddingForDES(padded)) == "abc", "PKCS7 for DES padding/unpadding should round-trip"
``````````````

---

### PKCS7UnPadding {#pkcs7unpadding}

```go
PKCS7UnPadding(src []byte) []byte
```

去除数据末尾的 PKCS7 填充字节（导出名为 codec.PKCS7UnPadding）

与 codec.PKCS7Padding 配对使用；填充非法时原样返回输入

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| src | `[]byte` | 带 PKCS7 填充的字节 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 去除填充后的原始字节 |

**示例**

``````````````yak
padded = codec.PKCS7Padding("yak")
origin = codec.PKCS7UnPadding(padded)
println(string(origin))   // OUT: yak
assert string(origin) == "yak", "PKCS7UnPadding should strip padding and recover data"
``````````````

---

### PKCS7UnPaddingForDES {#pkcs7unpaddingfordes}

```go
PKCS7UnPaddingForDES(src []byte) []byte
```

PKCS7UnPaddingFor8ByteBlock 去除 8 字节块大小的 PKCS7/PKCS5 填充(常用于 DES)

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| src | `[]byte` | 含 PKCS7 填充的数据字节 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 去除填充后的原始数据字节 |

**示例**

``````````````yak
// VARS: 填充后再去填充往返
padded = codec.PKCS7PaddingForDES("abc")
unpadded = codec.PKCS7UnPaddingForDES(padded)
// STDOUT: 打印去填充后的结果
println(string(unpadded))   // OUT: abc
// assert: 锁定结论(去填充还原原始数据)
assert string(unpadded) == "abc", "PKCS7 for DES unpadding should recover original data"
``````````````

---

### RC4Decrypt {#rc4decrypt}

```go
RC4Decrypt(cipherKey []byte, cipherText []byte) ([]byte, error)
```

使用 RC4 流密码解密数据(RC4 加解密为同一运算)

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| cipherKey | `[]byte` | RC4 密钥(长度可变) |
| cipherText | `[]byte` | 待解密的密文字节 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 密钥非法等错误 |

**示例**

``````````````yak
// VARS: 先加密再解密(RC4)
key = "secretkey"
ct = codec.RC4Encrypt(key, "Secret Message")~
pt = codec.RC4Decrypt(key, ct)~
// STDOUT: 打印还原后的明文
println(string(pt))   // OUT: Secret Message
// assert: 锁定结论(RC4 解密还原一致)
assert string(pt) == "Secret Message", "RC4 decrypt should recover plaintext"
``````````````

---

### RC4Encrypt {#rc4encrypt}

```go
RC4Encrypt(cipherKey []byte, plainText []byte) ([]byte, error)
```

使用 RC4 流密码加密数据(RC4 加解密为同一运算)

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| cipherKey | `[]byte` | RC4 密钥(长度可变) |
| plainText | `[]byte` | 待加密的明文字节 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 密钥非法等错误 |

**示例**

``````````````yak
// VARS: RC4 加解密往返
key = "secretkey"
ct = codec.RC4Encrypt(key, "Secret Message")~
// STDOUT: 解密还原后打印
println(string(codec.RC4Decrypt(key, ct)~))   // OUT: Secret Message
// assert: 锁定结论(RC4 加解密往返一致)
assert string(codec.RC4Decrypt(key, ct)~) == "Secret Message", "RC4 encrypt/decrypt should round-trip"
``````````````

---

### RSADecryptWithJSEncryptStyle {#rsadecryptwithjsencryptstyle}

```go
RSADecryptWithJSEncryptStyle(privKeyPem string, ciphertext []byte) ([]byte, error)
```

以兼容前端 JSEncrypt 库的方式做 RSA 解密（导出名为 codec.RSADecryptWithJSEncryptStyle）

等价于 PKCS#1 v1.5 分块解密，与 codec.RSAEncryptWithJSEncryptStyle 配对使用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| privKeyPem | `string` | PEM 格式的 RSA 私钥 |
| ciphertext | `[]byte` | 待解密的密文字节 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 解密得到的明文字节 |
| r2 | `error` | 错误信息（私钥解析失败或解密失败时返回） |

**示例**

``````````````yak
pub, pri = tls.GenerateRSA2048KeyPair()~
ciphertext = codec.RSAEncryptWithJSEncryptStyle(pub, "hello yak")~
plaintext = codec.RSADecryptWithJSEncryptStyle(pri, ciphertext)~
println(string(plaintext))
assert string(plaintext) == "hello yak", "JSEncrypt-style roundtrip should recover plaintext"
``````````````

---

### RSADecryptWithOAEP {#rsadecryptwithoaep}

```go
RSADecryptWithOAEP(raw []byte, data any) ([]byte, error)
```

使用 RSA 私钥和 OAEP 填充方式解密给定的密文（导出名为 codec.RSADecryptWithOAEP）

默认使用 SHA-256 作为 OAEP 哈希算法，与 codec.RSAEncryptWithOAEP 配对使用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| raw | `[]byte` | RSA 私钥，支持 DER、Base64(DER)、PEM、Base64(PEM) 等格式（自动识别） |
| data | `any` | 待解密的密文，可为 []byte 或 base64 字符串等支持类型 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 解密得到的明文字节 |
| r2 | `error` | 错误信息（私钥解析失败或解密失败时返回） |

**示例**

``````````````yak
pub, pri = tls.GenerateRSA2048KeyPair()~
ciphertext = codec.RSAEncryptWithOAEP(pub, "hello yak")~
plaintext = codec.RSADecryptWithOAEP(pri, ciphertext)~
println(string(plaintext))
assert string(plaintext) == "hello yak", "OAEP roundtrip should recover plaintext"
``````````````

---

### RSADecryptWithPKCS1v15 {#rsadecryptwithpkcs1v15}

```go
RSADecryptWithPKCS1v15(raw []byte, data any) ([]byte, error)
```

DecryptWithPkcs1v15/RSADecryptWithPKCS1v15 使用 RSA私钥 和 PKCS#1 v1.5填充方式 解密给定的密文。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| raw | `[]byte` | RSA 私钥（支持 DER/PEM/Base64 等格式） |
| data | `any` | 要解密的密文数据（[]byte、string 等） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 解密得到的明文字节数组 |
| r2 | `error` | 错误信息，解密失败时返回非空 |

**示例**

``````````````yak
// 生成一对 RSA 密钥(第一个返回值是公钥, 第二个是私钥)，用公钥加密后再用私钥解密验证往返一致
pub, pri = tls.GenerateRSA2048KeyPair()~
ciphertext = codec.RSAEncryptWithPKCS1v15(pub, "hello world")~
plaintext = codec.RSADecryptWithPKCS1v15(pri, ciphertext)~
assert string(plaintext) == "hello world", "RSA PKCS1v15 decrypt should recover the plaintext"
``````````````

---

### RSADecryptWithPKCS1v15Block {#rsadecryptwithpkcs1v15block}

```go
RSADecryptWithPKCS1v15Block(privKeyPem string, ciphertext []byte) ([]byte, error)
```

使用 RSA PKCS#1 v1.5 私钥解密数据（导出名为 codec.RSADecryptWithPKCS1v15Block）

自动按私钥长度对密文分块解密，与 codec.RSAEncryptWithPKCS1v15Block 配对使用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| privKeyPem | `string` | PEM 格式的 RSA 私钥 |
| ciphertext | `[]byte` | 待解密的密文字节 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 解密得到的明文字节 |
| r2 | `error` | 错误信息（私钥解析失败、密文长度非法或解密失败时返回） |

**示例**

``````````````yak
pub, pri = tls.GenerateRSA2048KeyPair()~
ciphertext = codec.RSAEncryptWithPKCS1v15Block(pub, "hello yak")~
plaintext = codec.RSADecryptWithPKCS1v15Block(pri, ciphertext)~
println(string(plaintext))
assert string(plaintext) == "hello yak", "PKCS1v15 block roundtrip should recover plaintext"
``````````````

---

### RSAEncryptWithJSEncryptStyle {#rsaencryptwithjsencryptstyle}

```go
RSAEncryptWithJSEncryptStyle(pubKeyPem string, data []byte) ([]byte, error)
```

以兼容前端 JSEncrypt 库的方式做 RSA 加密（导出名为 codec.RSAEncryptWithJSEncryptStyle）

等价于 PKCS#1 v1.5 分块加密，便于与使用 JSEncrypt 的前端互通

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| pubKeyPem | `string` | PEM 格式的 RSA 公钥 |
| data | `[]byte` | 待加密的明文字节 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 密文字节 |
| r2 | `error` | 错误信息（公钥解析失败或加密失败时返回） |

**示例**

``````````````yak
pub, pri = tls.GenerateRSA2048KeyPair()~
ciphertext = codec.RSAEncryptWithJSEncryptStyle(pub, "hello yak")~
plaintext = codec.RSADecryptWithJSEncryptStyle(pri, ciphertext)~
println(string(plaintext))
assert string(plaintext) == "hello yak", "JSEncrypt-style roundtrip should recover plaintext"
``````````````

---

### RSAEncryptWithOAEP {#rsaencryptwithoaep}

```go
RSAEncryptWithOAEP(raw []byte, data any) ([]byte, error)
```

使用 RSA 公钥和 OAEP 填充方式对给定数据进行加密（导出名为 codec.RSAEncryptWithOAEP）

默认使用 SHA-256 作为 OAEP 哈希算法

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| raw | `[]byte` | RSA 公钥，支持 DER、Base64(DER)、PEM、Base64(PEM) 等格式（自动识别） |
| data | `any` | 待加密的明文，可为 []byte、string 等可转换为字节的类型 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 密文字节 |
| r2 | `error` | 错误信息（公钥解析失败或加密失败时返回） |

**示例**

``````````````yak
pub, pri = tls.GenerateRSA2048KeyPair()~
ciphertext = codec.RSAEncryptWithOAEP(pub, "hello yak")~
plaintext = codec.RSADecryptWithOAEP(pri, ciphertext)~
println(string(plaintext))
assert string(plaintext) == "hello yak", "OAEP roundtrip should recover plaintext"
``````````````

---

### RSAEncryptWithPKCS1v15 {#rsaencryptwithpkcs1v15}

```go
RSAEncryptWithPKCS1v15(raw []byte, data any) ([]byte, error)
```

EncryptWithPkcs1v15/RSAEncryptWithPKCS1v15 使用 RSA 公钥和 PKCS#1 v1.5 填充方式对给定数据进行加密。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| raw | `[]byte` | RSA 公钥（支持 DER/PEM/Base64 等格式） |
| data | `any` | 要加密的明文数据（[]byte、string 等） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 加密后的密文字节数组 |
| r2 | `error` | 错误信息，加密失败时返回非空 |

**示例**

``````````````yak
// 生成一对 RSA 密钥(第一个返回值是公钥, 第二个是私钥)，用公钥加密，再用私钥解密验证往返一致
pub, pri = tls.GenerateRSA2048KeyPair()~
ciphertext = codec.RSAEncryptWithPKCS1v15(pub, "hello world")~
plaintext = codec.RSADecryptWithPKCS1v15(pri, ciphertext)~
assert string(plaintext) == "hello world", "RSA PKCS1v15 encrypt/decrypt round-trip should match"
``````````````

---

### RSAEncryptWithPKCS1v15Block {#rsaencryptwithpkcs1v15block}

```go
RSAEncryptWithPKCS1v15Block(pubKeyPem string, data []byte) ([]byte, error)
```

使用 RSA PKCS#1 v1.5 公钥加密数据（导出名为 codec.RSAEncryptWithPKCS1v15Block）

自动按公钥长度对超长明文分块加密，可处理任意长度的输入

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| pubKeyPem | `string` | PEM 格式的 RSA 公钥 |
| data | `[]byte` | 待加密的明文字节 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 密文字节 |
| r2 | `error` | 错误信息（公钥解析失败或加密失败时返回） |

**示例**

``````````````yak
pub, pri = tls.GenerateRSA2048KeyPair()~
ciphertext = codec.RSAEncryptWithPKCS1v15Block(pub, "hello yak")~
plaintext = codec.RSADecryptWithPKCS1v15Block(pri, ciphertext)~
println(string(plaintext))
assert string(plaintext) == "hello yak", "PKCS1v15 block roundtrip should recover plaintext"
``````````````

---

### RSASignWithPKCS1v15Digest {#rsasignwithpkcs1v15digest}

```go
RSASignWithPKCS1v15Digest(privKeyPem string, data []byte, algo string) ([]byte, error)
```

使用 RSA PKCS#1 v1.5 私钥对数据做摘要签名（导出名为 codec.RSASignWithPKCS1v15Digest）

支持 sha256 与 sha512 两种摘要算法

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| privKeyPem | `string` | PEM 格式的 RSA 私钥 |
| data | `[]byte` | 待签名的原始数据 |
| algo | `string` | 摘要算法名，支持 &#34;sha256&#34;、&#34;sha512&#34;（大小写与写法不敏感） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 签名字节 |
| r2 | `error` | 错误信息（算法不支持或签名失败时返回） |

**示例**

``````````````yak
pub, pri = tls.GenerateRSA2048KeyPair()~
signature = codec.RSASignWithPKCS1v15Digest(pri, "hello yak", "sha256")~
valid = codec.RSAVerifyWithPKCS1v15Digest(pub, "hello yak", signature, "sha256")~
println(valid)
assert valid == true, "signature should be verified as valid"
``````````````

---

### RSAVerifyWithPKCS1v15Digest {#rsaverifywithpkcs1v15digest}

```go
RSAVerifyWithPKCS1v15Digest(pubKeyPem string, data []byte, signature []byte, algo string) (bool, error)
```

使用 RSA PKCS#1 v1.5 公钥验证摘要签名（导出名为 codec.RSAVerifyWithPKCS1v15Digest）

与 codec.RSASignWithPKCS1v15Digest 配对使用，支持 sha256 与 sha512

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| pubKeyPem | `string` | PEM 格式的 RSA 公钥 |
| data | `[]byte` | 被签名的原始数据 |
| signature | `[]byte` | 待验证的签名字节 |
| algo | `string` | 摘要算法名，支持 &#34;sha256&#34;、&#34;sha512&#34; |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `bool` | 验证是否通过（true 表示签名有效） |
| r2 | `error` | 错误信息（算法不支持或验证出错时返回） |

**示例**

``````````````yak
pub, pri = tls.GenerateRSA2048KeyPair()~
signature = codec.RSASignWithPKCS1v15Digest(pri, "hello yak", "sha256")~
valid = codec.RSAVerifyWithPKCS1v15Digest(pub, "hello yak", signature, "sha256")~
println(valid)
assert valid == true, "signature should be verified as valid"
``````````````

---

### RandBytes {#randbytes}

```go
RandBytes(n int) []byte
```

生成 n 个密码学安全的随机字节

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| n | `int` | 需要生成的随机字节数量 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 长度为 n 的随机字节切片(读取失败时返回 nil) |

**示例**

``````````````yak
// VARS: 生成 16 个随机字节(每次结果不同)
result = codec.RandBytes(16)
// STDOUT: 打印长度
println(len(result))   // OUT: 16
// assert: 锁定结论(长度固定为请求值)
assert len(result) == 16, "RandBytes should produce requested length"
``````````````

---

### Sha1 {#sha1}

```go
Sha1(i any) string
```

计算输入数据的 SHA-1 摘要并返回十六进制字符串

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 待计算摘要的数据，可为 string、[]byte 等 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 40 位十六进制 SHA-1 摘要字符串 |

**示例**

``````````````yak
// VARS: 计算 SHA-1 摘要
result = codec.Sha1("abc")
// STDOUT: 打印可观察输出
println(result)   // OUT: a9993e364706816aba3e25717850c26c9cd0d89d
// assert: 锁定结论(已知摘要 + 固定长度)
assert result == "a9993e364706816aba3e25717850c26c9cd0d89d", "Sha1 should match known digest"
assert len(result) == 40, "Sha1 hex length should be 40"
``````````````

---

### Sha224 {#sha224}

```go
Sha224(i any) string
```

计算输入数据的 SHA-224 摘要并返回十六进制字符串

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 待计算摘要的数据，可为 string、[]byte 等 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 56 位十六进制 SHA-224 摘要字符串 |

**示例**

``````````````yak
// VARS: 计算 SHA-224 摘要
result = codec.Sha224("abc")
// STDOUT: 打印可观察输出
println(result)   // OUT: 23097d223405d8228642a477bda255b32aadbce4bda0b3f7e36c9da7
// assert: 锁定结论(已知摘要 + 固定长度)
assert result == "23097d223405d8228642a477bda255b32aadbce4bda0b3f7e36c9da7", "Sha224 should match known digest"
assert len(result) == 56, "Sha224 hex length should be 56"
``````````````

---

### Sha256 {#sha256}

```go
Sha256(i any) string
```

计算输入数据的 SHA-256 摘要并返回十六进制字符串

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 待计算摘要的数据，可为 string、[]byte 等 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 64 位十六进制 SHA-256 摘要字符串 |

**示例**

``````````````yak
// VARS: 计算 SHA-256 摘要
result = codec.Sha256("abc")
// STDOUT: 打印可观察输出
println(result)   // OUT: ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad
// assert: 锁定结论(已知摘要 + 固定长度)
assert result == "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad", "Sha256 should match known digest"
assert len(result) == 64, "Sha256 hex length should be 64"
``````````````

---

### Sha384 {#sha384}

```go
Sha384(i any) string
```

计算输入数据的 SHA-384 摘要并返回十六进制字符串

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 待计算摘要的数据，可为 string、[]byte 等 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 96 位十六进制 SHA-384 摘要字符串 |

**示例**

``````````````yak
// VARS: 计算 SHA-384 摘要
result = codec.Sha384("abc")
// STDOUT: 打印长度
println(len(result))   // OUT: 96
// assert: 锁定结论(已知摘要 + 固定长度)
assert result == "cb00753f45a35e8bb5a03d699ac65007272c32ab0eded1631a8b605a43ff5bed8086072ba1e7cc2358baeca134c825a7", "Sha384 should match known digest"
assert len(result) == 96, "Sha384 hex length should be 96"
``````````````

---

### Sha512 {#sha512}

```go
Sha512(i any) string
```

计算输入数据的 SHA-512 摘要并返回十六进制字符串

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `any` | 待计算摘要的数据，可为 string、[]byte 等 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 128 位十六进制 SHA-512 摘要字符串 |

**示例**

``````````````yak
// VARS: 计算 SHA-512 摘要
result = codec.Sha512("abc")
// STDOUT: 打印长度
println(len(result))   // OUT: 128
// assert: 锁定结论(已知摘要 + 固定长度)
assert result == "ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f", "Sha512 should match known digest"
assert len(result) == 128, "Sha512 hex length should be 128"
``````````````

---

### SignSHA256WithRSA {#signsha256withrsa}

```go
SignSHA256WithRSA(pemBytes []byte, data any) ([]byte, error)
```

使用 RSA 私钥对数据做 SHA256 签名（导出名为 codec.SignSHA256WithRSA）

私钥支持 PKCS8 与 PKCS1 两种 PEM 格式

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| pemBytes | `[]byte` | PEM 格式的 RSA 私钥 |
| data | `any` | 待签名的原始数据，可为 []byte、string 等类型 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 签名字节 |
| r2 | `error` | 错误信息（私钥解析失败或签名失败时返回） |

**示例**

``````````````yak
pub, pri = tls.GenerateRSA2048KeyPair()~
signature = codec.SignSHA256WithRSA(pri, "hello yak")~
err = codec.SignVerifySHA256WithRSA(pub, "hello yak", signature)
println(err)
assert err == nil, "valid sha256 signature should be verified successfully"
``````````````

---

### SignSHA512WithRSA {#signsha512withrsa}

```go
SignSHA512WithRSA(pemBytes []byte, data any) ([]byte, error)
```

使用 RSA 私钥对数据做 SHA512 签名（导出名为 codec.SignSHA512WithRSA）

私钥支持 PKCS8 与 PKCS1 两种 PEM 格式

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| pemBytes | `[]byte` | PEM 格式的 RSA 私钥 |
| data | `any` | 待签名的原始数据，可为 []byte、string 等类型 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 签名字节 |
| r2 | `error` | 错误信息（私钥解析失败或签名失败时返回） |

**示例**

``````````````yak
pub, pri = tls.GenerateRSA2048KeyPair()~
signature = codec.SignSHA512WithRSA(pri, "hello yak")~
err = codec.SignVerifySHA512WithRSA(pub, "hello yak", signature)
println(err)
assert err == nil, "valid sha512 signature should be verified successfully"
``````````````

---

### SignVerifySHA256WithRSA {#signverifysha256withrsa}

```go
SignVerifySHA256WithRSA(pemBytes []byte, originData any, sign []byte) error
```

使用 RSA 公钥验证数据的 SHA256 签名（导出名为 codec.SignVerifySHA256WithRSA）

与 codec.SignSHA256WithRSA 配对使用，验证通过时返回 nil

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| pemBytes | `[]byte` | PEM 格式的 RSA 公钥 |
| originData | `any` | 被签名的原始数据 |
| sign | `[]byte` | 待验证的签名字节 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息（验证失败或公钥解析失败时返回，验证通过返回 nil） |

**示例**

``````````````yak
pub, pri = tls.GenerateRSA2048KeyPair()~
signature = codec.SignSHA256WithRSA(pri, "hello yak")~
err = codec.SignVerifySHA256WithRSA(pub, "hello yak", signature)
println(err)
assert err == nil, "valid sha256 signature should be verified successfully"
``````````````

---

### SignVerifySHA512WithRSA {#signverifysha512withrsa}

```go
SignVerifySHA512WithRSA(pemBytes []byte, originData any, sign []byte) error
```

使用 RSA 公钥验证数据的 SHA512 签名（导出名为 codec.SignVerifySHA512WithRSA）

与 codec.SignSHA512WithRSA 配对使用，验证通过时返回 nil

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| pemBytes | `[]byte` | PEM 格式的 RSA 公钥 |
| originData | `any` | 被签名的原始数据 |
| sign | `[]byte` | 待验证的签名字节 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息（验证失败或公钥解析失败时返回，验证通过返回 nil） |

**示例**

``````````````yak
pub, pri = tls.GenerateRSA2048KeyPair()~
signature = codec.SignSHA512WithRSA(pri, "hello yak")~
err = codec.SignVerifySHA512WithRSA(pub, "hello yak", signature)
println(err)
assert err == nil, "valid sha512 signature should be verified successfully"
``````````````

---

### Sm2Decrypt {#sm2decrypt}

```go
Sm2Decrypt(priKey []byte, data []byte) ([]byte, error)
```

SM2DecryptC1C2C3 使用国密 SM2 私钥按 C1C2C3 密文排列解密数据

注意：Sm2Decrypt 和 Sm2DecryptC1C2C3 是同一个函数的别名

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| priKey | `[]byte` | SM2 私钥(支持 PEM/HEX/原始字节) |
| data | `[]byte` | 待解密的密文字节 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |

**示例**

``````````````yak
// VARS: 生成密钥对并做 C1C2C3 加解密往返
priv, pub = codec.Sm2GenerateHexKeyPair()~
ct = codec.Sm2EncryptC1C2C3(pub, "secret")~
pt = codec.Sm2DecryptC1C2C3(priv, ct)~
// STDOUT: 打印还原后的明文
println(string(pt))   // OUT: secret
// assert: 锁定结论(SM2 C1C2C3 解密还原一致)
assert string(pt) == "secret", "SM2 C1C2C3 decrypt should recover plaintext"
``````````````

---

### Sm2DecryptAsn1 {#sm2decryptasn1}

```go
Sm2DecryptAsn1(priKey []byte, data []byte) ([]byte, error)
```

使用国密 SM2 私钥按 ASN.1 编码格式解密数据

注意：Sm2DecryptAsn1 是本函数的导出名

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| priKey | `[]byte` | SM2 私钥(支持 PEM/HEX/原始字节) |
| data | `[]byte` | 待解密的 ASN.1 编码密文字节 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |

**示例**

``````````````yak
// VARS: 生成密钥对并做 ASN.1 加解密往返
priv, pub = codec.Sm2GenerateHexKeyPair()~
ct = codec.Sm2EncryptAsn1(pub, "secret")~
pt = codec.Sm2DecryptAsn1(priv, ct)~
// STDOUT: 打印还原后的明文
println(string(pt))   // OUT: secret
// assert: 锁定结论(SM2 ASN.1 解密还原一致)
assert string(pt) == "secret", "SM2 ASN1 decrypt should recover plaintext"
``````````````

---

### Sm2DecryptAsn1WithPassword {#sm2decryptasn1withpassword}

```go
Sm2DecryptAsn1WithPassword(priKey []byte, data []byte, password []byte) ([]byte, error)
```

使用带密码保护的国密 SM2 私钥按 ASN.1 编码格式解密数据

注意：Sm2DecryptAsn1WithPassword 是本函数的导出名

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| priKey | `[]byte` | SM2 私钥(支持 PEM/HEX/原始字节，可为加密私钥) |
| data | `[]byte` | 待解密的 ASN.1 编码密文字节 |
| password | `[]byte` | 私钥保护密码，未加密时传 nil |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |

**示例**

``````````````yak
// VARS: 未加密私钥时 password 传 nil
priv, pub = codec.Sm2GenerateHexKeyPair()~
ct = codec.Sm2EncryptAsn1(pub, "secret")~
pt = codec.Sm2DecryptAsn1WithPassword(priv, ct, nil)~
// STDOUT: 打印还原后的明文
println(string(pt))   // OUT: secret
// assert: 锁定结论(带密码接口在 nil 密码下也能解密)
assert string(pt) == "secret", "SM2 ASN1 with password(nil) should recover plaintext"
``````````````

---

### Sm2DecryptC1C2C3 {#sm2decryptc1c2c3}

```go
Sm2DecryptC1C2C3(priKey []byte, data []byte) ([]byte, error)
```

使用国密 SM2 私钥按 C1C2C3 密文排列解密数据

注意：Sm2Decrypt 和 Sm2DecryptC1C2C3 是同一个函数的别名

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| priKey | `[]byte` | SM2 私钥(支持 PEM/HEX/原始字节) |
| data | `[]byte` | 待解密的密文字节 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |

**示例**

``````````````yak
// VARS: 生成密钥对并做 C1C2C3 加解密往返
priv, pub = codec.Sm2GenerateHexKeyPair()~
ct = codec.Sm2EncryptC1C2C3(pub, "secret")~
pt = codec.Sm2DecryptC1C2C3(priv, ct)~
// STDOUT: 打印还原后的明文
println(string(pt))   // OUT: secret
// assert: 锁定结论(SM2 C1C2C3 解密还原一致)
assert string(pt) == "secret", "SM2 C1C2C3 decrypt should recover plaintext"
``````````````

---

### Sm2DecryptC1C2C3WithPassword {#sm2decryptc1c2c3withpassword}

```go
Sm2DecryptC1C2C3WithPassword(priKey []byte, data []byte, password []byte) ([]byte, error)
```

使用带密码保护的国密 SM2 私钥按 C1C2C3 密文排列解密数据

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| priKey | `[]byte` | SM2 私钥(支持 PEM/HEX/原始字节，可为加密私钥) |
| data | `[]byte` | 待解密的密文字节 |
| password | `[]byte` | 私钥保护密码，未加密时传 nil |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |

**示例**

``````````````yak
// VARS: 未加密私钥时 password 传 nil
priv, pub = codec.Sm2GenerateHexKeyPair()~
ct = codec.Sm2EncryptC1C2C3(pub, "secret")~
pt = codec.Sm2DecryptC1C2C3WithPassword(priv, ct, nil)~
// STDOUT: 打印还原后的明文
println(string(pt))   // OUT: secret
// assert: 锁定结论(带密码接口在 nil 密码下也能解密)
assert string(pt) == "secret", "SM2 C1C2C3 with password(nil) should recover plaintext"
``````````````

---

### Sm2DecryptC1C3C2 {#sm2decryptc1c3c2}

```go
Sm2DecryptC1C3C2(priKey []byte, data []byte) ([]byte, error)
```

使用国密 SM2 私钥按 C1C3C2 密文排列解密数据

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| priKey | `[]byte` | SM2 私钥(支持 PEM/HEX/原始字节) |
| data | `[]byte` | 待解密的密文字节 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |

**示例**

``````````````yak
// VARS: 生成密钥对并做 C1C3C2 加解密往返
priv, pub = codec.Sm2GenerateHexKeyPair()~
ct = codec.Sm2EncryptC1C3C2(pub, "secret")~
pt = codec.Sm2DecryptC1C3C2(priv, ct)~
// STDOUT: 打印还原后的明文
println(string(pt))   // OUT: secret
// assert: 锁定结论(SM2 C1C3C2 解密还原一致)
assert string(pt) == "secret", "SM2 C1C3C2 decrypt should recover plaintext"
``````````````

---

### Sm2DecryptC1C3C2WithPassword {#sm2decryptc1c3c2withpassword}

```go
Sm2DecryptC1C3C2WithPassword(priKey []byte, data []byte, password []byte) ([]byte, error)
```

使用带密码保护的国密 SM2 私钥按 C1C3C2 密文排列解密数据

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| priKey | `[]byte` | SM2 私钥(支持 PEM/HEX/原始字节，可为加密私钥) |
| data | `[]byte` | 待解密的密文字节 |
| password | `[]byte` | 私钥保护密码，未加密时传 nil |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |

**示例**

``````````````yak
// VARS: 未加密私钥时 password 传 nil
priv, pub = codec.Sm2GenerateHexKeyPair()~
ct = codec.Sm2EncryptC1C3C2(pub, "secret")~
pt = codec.Sm2DecryptC1C3C2WithPassword(priv, ct, nil)~
// STDOUT: 打印还原后的明文
println(string(pt))   // OUT: secret
// assert: 锁定结论(带密码接口在 nil 密码下也能解密)
assert string(pt) == "secret", "SM2 C1C3C2 with password(nil) should recover plaintext"
``````````````

---

### Sm2Encrypt {#sm2encrypt}

```go
Sm2Encrypt(pubKey []byte, data []byte) ([]byte, error)
```

SM2EncryptC1C2C3 使用国密 SM2 公钥按 C1C2C3 密文排列加密数据

注意：Sm2Encrypt 和 Sm2EncryptC1C2C3 是同一个函数的别名

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| pubKey | `[]byte` | SM2 公钥(支持 PEM/HEX/原始字节) |
| data | `[]byte` | 待加密的数据字节 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 加密后的密文字节(每次随机，结果不固定) |
| r2 | `error` | 加密失败时返回的错误 |

**示例**

``````````````yak
// VARS: 生成密钥对并做 C1C2C3 加解密往返
priv, pub = codec.Sm2GenerateHexKeyPair()~
ct = codec.Sm2EncryptC1C2C3(pub, "secret")~
pt = codec.Sm2DecryptC1C2C3(priv, ct)~
// STDOUT: 打印解密还原后的明文
println(string(pt))   // OUT: secret
// assert: 锁定结论(SM2 C1C2C3 加解密往返一致)
assert string(pt) == "secret", "SM2 C1C2C3 should round-trip"
``````````````

---

### Sm2EncryptAsn1 {#sm2encryptasn1}

```go
Sm2EncryptAsn1(pubKey []byte, data []byte) ([]byte, error)
```

使用国密 SM2 公钥按 ASN.1 编码格式加密数据

注意：Sm2EncryptAsn1 是本函数的导出名

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| pubKey | `[]byte` | SM2 公钥(支持 PEM/HEX/原始字节) |
| data | `[]byte` | 待加密的数据字节 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: ASN.1 编码的密文字节(每次随机，结果不固定) |
| r2 | `error` | 加密失败时返回的错误 |

**示例**

``````````````yak
// VARS: 生成密钥对并做 ASN.1 加解密往返
priv, pub = codec.Sm2GenerateHexKeyPair()~
ct = codec.Sm2EncryptAsn1(pub, "secret")~
pt = codec.Sm2DecryptAsn1(priv, ct)~
// STDOUT: 打印解密还原后的明文
println(string(pt))   // OUT: secret
// assert: 锁定结论(SM2 ASN.1 加解密往返一致)
assert string(pt) == "secret", "SM2 ASN1 should round-trip"
``````````````

---

### Sm2EncryptC1C2C3 {#sm2encryptc1c2c3}

```go
Sm2EncryptC1C2C3(pubKey []byte, data []byte) ([]byte, error)
```

使用国密 SM2 公钥按 C1C2C3 密文排列加密数据

注意：Sm2Encrypt 和 Sm2EncryptC1C2C3 是同一个函数的别名

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| pubKey | `[]byte` | SM2 公钥(支持 PEM/HEX/原始字节) |
| data | `[]byte` | 待加密的数据字节 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 加密后的密文字节(每次随机，结果不固定) |
| r2 | `error` | 加密失败时返回的错误 |

**示例**

``````````````yak
// VARS: 生成密钥对并做 C1C2C3 加解密往返
priv, pub = codec.Sm2GenerateHexKeyPair()~
ct = codec.Sm2EncryptC1C2C3(pub, "secret")~
pt = codec.Sm2DecryptC1C2C3(priv, ct)~
// STDOUT: 打印解密还原后的明文
println(string(pt))   // OUT: secret
// assert: 锁定结论(SM2 C1C2C3 加解密往返一致)
assert string(pt) == "secret", "SM2 C1C2C3 should round-trip"
``````````````

---

### Sm2EncryptC1C3C2 {#sm2encryptc1c3c2}

```go
Sm2EncryptC1C3C2(pubKey []byte, data []byte) ([]byte, error)
```

使用国密 SM2 公钥按 C1C3C2 密文排列加密数据

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| pubKey | `[]byte` | SM2 公钥(支持 PEM/HEX/原始字节) |
| data | `[]byte` | 待加密的数据字节 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 加密后的密文字节(每次随机，结果不固定) |
| r2 | `error` | 加密失败时返回的错误 |

**示例**

``````````````yak
// VARS: 生成密钥对并做 C1C3C2 加解密往返
priv, pub = codec.Sm2GenerateHexKeyPair()~
ct = codec.Sm2EncryptC1C3C2(pub, "secret")~
pt = codec.Sm2DecryptC1C3C2(priv, ct)~
// STDOUT: 打印解密还原后的明文
println(string(pt))   // OUT: secret
// assert: 锁定结论(SM2 C1C3C2 加解密往返一致)
assert string(pt) == "secret", "SM2 C1C3C2 should round-trip"
``````````````

---

### Sm2GenerateHexKeyPair {#sm2generatehexkeypair}

```go
Sm2GenerateHexKeyPair() ([]byte, []byte, error)
```

GenerateSM2PrivateKeyHEX 生成一对国密 SM2 密钥(HEX 文本格式)

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: SM2 私钥(HEX 文本) |
| r2 | `[]byte` | []byte: SM2 公钥(HEX 文本) |
| r3 | `error` | 生成失败时返回的错误 |

**示例**

``````````````yak
// VARS: 生成 HEX 格式 SM2 密钥对(返回顺序: 私钥, 公钥)
priv, pub = codec.Sm2GenerateHexKeyPair()~
// STDOUT: 打印是否生成非空密钥对
println(len(priv) > 0 && len(pub) > 0)   // OUT: true
// assert: 锁定结论(生成非空密钥对)
assert len(priv) > 0 && len(pub) > 0, "Sm2GenerateHexKeyPair should produce keypair"
``````````````

---

### Sm2GeneratePemKeyPair {#sm2generatepemkeypair}

```go
Sm2GeneratePemKeyPair() ([]byte, []byte, error)
```

GenerateSM2PrivateKeyPEM 生成一对国密 SM2 密钥(PEM 文本格式)

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: SM2 私钥(PEM 文本) |
| r2 | `[]byte` | []byte: SM2 公钥(PEM 文本) |
| r3 | `error` | 生成失败时返回的错误 |

**示例**

``````````````yak
// VARS: 生成 PEM 格式 SM2 密钥对(返回顺序: 私钥, 公钥)
priv, pub = codec.Sm2GeneratePemKeyPair()~
// STDOUT: 打印私钥是否为 PEM 文本
println(str.HasPrefix(string(priv), "-----BEGIN"))   // OUT: true
// assert: 锁定结论(生成非空密钥对)
assert len(priv) > 0 && len(pub) > 0, "Sm2GeneratePemKeyPair should produce keypair"
``````````````

---

### Sm2GenerateTemporaryKeyPair {#sm2generatetemporarykeypair}

```go
Sm2GenerateTemporaryKeyPair() ([]byte, []byte, error)
```

生成用于密钥交换的临时密钥对

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 临时私钥（HEX格式） |
| r2 | `[]byte` | []byte: 临时公钥（HEX格式） |
| r3 | `error` | 错误信息 |

**示例**

``````````````yak
tempPriKey, tempPubKey, err := codec.Sm2GenerateTemporaryKeyPair()
die(err)
println("临时私钥:", string(tempPriKey))
println("临时公钥:", string(tempPubKey))
``````````````

---

### Sm2KeyExchange {#sm2keyexchange}

```go
Sm2KeyExchange(keyLength int, idA []byte, idB []byte, priKey []byte, pubKey []byte, tempPriKey []byte, tempPubKey []byte, thisIsA bool) ([]byte, []byte, []byte, error)
```

执行SM2密钥交换算法

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| keyLength | `int` | 期望的共享密钥长度（字节） |
| idA | `[]byte` | A方标识（[]byte） |
| idB | `[]byte` | B方标识（[]byte） |
| priKey | `[]byte` | 调用方私钥（[]byte，支持PEM、HEX、原始字节） |
| pubKey | `[]byte` | 对方公钥（[]byte，支持PEM、HEX、原始字节） |
| tempPriKey | `[]byte` | 调用方临时私钥（[]byte，支持PEM、HEX、原始字节） |
| tempPubKey | `[]byte` | 对方临时公钥（[]byte，支持PEM、HEX、原始字节） |
| thisIsA | `bool` | 如果是A方调用设置为true，B方调用设置为false |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 协商得到的共享密钥（[]byte） |
| r2 | `[]byte` | 验证值S1，用于A验证B的身份（[]byte） |
| r3 | `[]byte` | 验证值S2，用于B验证A的身份（[]byte） |
| r4 | `error` | 错误信息 |

**示例**

``````````````yak
// A方和B方各自生成长期密钥对
priKeyA, pubKeyA, _ := codec.Sm2GenerateHexKeyPair()
priKeyB, pubKeyB, _ := codec.Sm2GenerateHexKeyPair()

// A方和B方各自生成临时密钥对
tempPriKeyA, tempPubKeyA, _ := codec.Sm2GenerateHexKeyPair()
tempPriKeyB, tempPubKeyB, _ := codec.Sm2GenerateHexKeyPair()

// A方执行密钥交换
sharedKeyA, s1A, s2A, err := codec.Sm2KeyExchange(32, []byte("Alice"), []byte("Bob"),

	priKeyA, pubKeyB, tempPriKeyA, tempPubKeyB, true)

die(err)

// B方执行密钥交换
sharedKeyB, s1B, s2B, err := codec.Sm2KeyExchange(32, []byte("Alice"), []byte("Bob"),

	priKeyB, pubKeyA, tempPriKeyB, tempPubKeyA, false)

die(err)

println("A方协商密钥:", codec.EncodeToHex(sharedKeyA))
println("B方协商密钥:", codec.EncodeToHex(sharedKeyB))
``````````````

---

### Sm2SignWithSM3 {#sm2signwithsm3}

```go
Sm2SignWithSM3(priKeyBytes []byte, data any) ([]byte, error)
```

使用国密 SM2 私钥对数据进行 SM3 签名，返回 ASN.1 DER 编码的签名

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| priKeyBytes | `[]byte` | SM2 私钥(支持 PEM/HEX/32 字节原始字节) |
| data | `any` | 待签名的数据，可为 string、[]byte 等 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: ASN.1 DER 编码的 SM2 签名(每次随机，结果不固定) |
| r2 | `error` | 签名失败时返回的错误 |

**示例**

``````````````yak
// VARS: 生成密钥对，签名后用公钥验签
priv, pub = codec.Sm2GenerateHexKeyPair()~
sig = codec.Sm2SignWithSM3(priv, "msg")~
// STDOUT: 验签返回 error，nil 表示通过
println(codec.Sm2VerifyWithSM3(pub, "msg", sig) == nil)   // OUT: true
// assert: 锁定结论(签名可被对应公钥验证通过)
assert codec.Sm2VerifyWithSM3(pub, "msg", sig) == nil, "SM2 sign should be verifiable"
``````````````

---

### Sm2SignWithSM3WithPassword {#sm2signwithsm3withpassword}

```go
Sm2SignWithSM3WithPassword(priKeyBytes []byte, data any, password []byte) ([]byte, error)
```

使用带密码保护的国密 SM2 私钥对数据进行 SM3 签名

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| priKeyBytes | `[]byte` | SM2 私钥(支持 PEM/HEX/原始字节，可为加密私钥) |
| data | `any` | 待签名的数据，可为 string、[]byte 等 |
| password | `[]byte` | 私钥保护密码，未加密时传 nil |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: ASN.1 DER 编码的 SM2 签名(每次随机，结果不固定) |
| r2 | `error` | 签名失败时返回的错误 |

**示例**

``````````````yak
// VARS: 未加密私钥时 password 传 nil
priv, pub = codec.Sm2GenerateHexKeyPair()~
sig = codec.Sm2SignWithSM3WithPassword(priv, "msg", nil)~
// STDOUT: 验签返回 error，nil 表示通过
println(codec.Sm2VerifyWithSM3(pub, "msg", sig) == nil)   // OUT: true
// assert: 锁定结论(带密码接口在 nil 密码下也能签名并验证)
assert codec.Sm2VerifyWithSM3(pub, "msg", sig) == nil, "SM2 sign with password(nil) should be verifiable"
``````````````

---

### Sm2VerifyWithSM3 {#sm2verifywithsm3}

```go
Sm2VerifyWithSM3(pubKeyBytes []byte, originData any, sign []byte) error
```

使用国密 SM2 公钥对数据进行 SM3 签名验证，验证通过返回 nil

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| pubKeyBytes | `[]byte` | SM2 公钥(支持 PEM/HEX/64 或 65 字节原始字节) |
| originData | `any` | 原始签名数据，可为 string、[]byte 等 |
| sign | `[]byte` | 待验证的 ASN.1 DER 编码签名 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 验证通过返回 nil，验证失败返回错误信息 |

**示例**

``````````````yak
// VARS: 生成密钥对并签名，再验签
priv, pub = codec.Sm2GenerateHexKeyPair()~
sig = codec.Sm2SignWithSM3(priv, "msg")~
// STDOUT: 验签返回 error，nil 表示通过
println(codec.Sm2VerifyWithSM3(pub, "msg", sig) == nil)   // OUT: true
// assert: 锁定结论(正确签名验证通过)
assert codec.Sm2VerifyWithSM3(pub, "msg", sig) == nil, "SM2 verify should pass for valid signature"
``````````````

---

### Sm3 {#sm3}

```go
Sm3(raw any) []byte
```

计算输入数据的国密 SM3 摘要，返回 32 字节摘要(注意是字节切片，打印前需用 codec.EncodeToHex 转可读)

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| raw | `any` | 待计算摘要的数据，可为 string、[]byte 等 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | SM3 摘要字节切片(32 字节，转 hex 后长度 64) |

**示例**

``````````````yak
// VARS: SM3 返回字节，需 EncodeToHex 转可读
result = codec.EncodeToHex(codec.Sm3("abc"))
// STDOUT: 打印可观察输出
println(result)   // OUT: 66c7f0f462eeedd9d1f2d46bdc10e4e24167c4875cf2f7a2297da02b8f4ba8e0
// assert: 锁定结论(已知摘要 + 固定长度)
assert result == "66c7f0f462eeedd9d1f2d46bdc10e4e24167c4875cf2f7a2297da02b8f4ba8e0", "Sm3 should match known digest"
assert len(result) == 64, "Sm3 hex length should be 64"
``````````````

---

### Sm4CBCDecrypt {#sm4cbcdecrypt}

```go
Sm4CBCDecrypt(key []byte, i any, iv []byte) ([]byte, error)
```

SM4DecryptCBCWithPKCSPadding 使用国密 SM4 算法在 CBC 模式下用 PKCS7 填充解密数据

密钥与 IV 均为 16 字节；IV 为空时使用 key 前 16 字节作为 IV。

注意：Sm4Decrypt、Sm4CBCDecrypt 和 Sm4CBCDecryptWithPKCSPadding 是同一个函数的别名

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(16 字节) |
| i | `any` | 待解密的密文，可为 []byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |

**示例**

``````````````yak
// VARS: 先加密再解密(SM4-CBC)
key = "1234567890123456"
iv = "abcdefghijklmnop"
ct = codec.Sm4CBCEncrypt(key, "Secret Message", iv)~
pt = codec.Sm4CBCDecrypt(key, ct, iv)~
// STDOUT: 打印还原后的明文
println(string(pt))   // OUT: Secret Message
// assert: 锁定结论(SM4-CBC 解密还原一致)
assert string(pt) == "Secret Message", "SM4-CBC decrypt should recover plaintext"
``````````````

---

### Sm4CBCDecryptWithPKCSPadding {#sm4cbcdecryptwithpkcspadding}

```go
Sm4CBCDecryptWithPKCSPadding(key []byte, i any, iv []byte) ([]byte, error)
```

SM4DecryptCBCWithPKCSPadding 使用国密 SM4 算法在 CBC 模式下用 PKCS7 填充解密数据

密钥与 IV 均为 16 字节；IV 为空时使用 key 前 16 字节作为 IV。

注意：Sm4Decrypt、Sm4CBCDecrypt 和 Sm4CBCDecryptWithPKCSPadding 是同一个函数的别名

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(16 字节) |
| i | `any` | 待解密的密文，可为 []byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |

**示例**

``````````````yak
// VARS: 先加密再解密(SM4-CBC)
key = "1234567890123456"
iv = "abcdefghijklmnop"
ct = codec.Sm4CBCEncrypt(key, "Secret Message", iv)~
pt = codec.Sm4CBCDecrypt(key, ct, iv)~
// STDOUT: 打印还原后的明文
println(string(pt))   // OUT: Secret Message
// assert: 锁定结论(SM4-CBC 解密还原一致)
assert string(pt) == "Secret Message", "SM4-CBC decrypt should recover plaintext"
``````````````

---

### Sm4CBCDecryptWithZeroPadding {#sm4cbcdecryptwithzeropadding}

```go
Sm4CBCDecryptWithZeroPadding(key []byte, i any, iv []byte) ([]byte, error)
```

SM4DecryptCBCWithZeroPadding 使用国密 SM4 算法在 CBC 模式下用零填充(ZeroPadding)解密数据（导出名为 codec.Sm4CBCDecryptWithZeroPadding）

与 codec.Sm4CBCEncryptWithZeroPadding 配对使用，密钥与 IV 均为 16 字节。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(16 字节) |
| i | `any` | 待解密的密文，可为 []byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |

**示例**

``````````````yak
key = "1234567890123456"
iv = "abcdefghijklmnop"
ct = codec.Sm4CBCEncryptWithZeroPadding(key, "Secret Message", iv)~
pt = codec.Sm4CBCDecryptWithZeroPadding(key, ct, iv)~
println(string(pt))   // OUT: Secret Message
assert string(pt) == "Secret Message", "SM4-CBC zero padding decrypt should recover plaintext"
``````````````

---

### Sm4CBCEncrypt {#sm4cbcencrypt}

```go
Sm4CBCEncrypt(key []byte, i any, iv []byte) ([]byte, error)
```

SM4EncryptCBCWithPKCSPadding 使用国密 SM4 算法在 CBC 模式下用 PKCS7 填充加密数据

密钥与 IV 均为 16 字节；IV 为空时使用 key 前 16 字节作为 IV。

注意：Sm4Encrypt、Sm4CBCEncrypt 和 Sm4CBCEncryptWithPKCSPadding 是同一个函数的别名

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(16 字节) |
| i | `any` | 待加密的数据，可为 string、[]byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 加密失败时返回的错误 |

**示例**

``````````````yak
// VARS: SM4-CBC 加解密
key = "1234567890123456"
iv = "abcdefghijklmnop"
ct = codec.Sm4CBCEncrypt(key, "Secret Message", iv)~
// STDOUT: 解密还原后打印
println(string(codec.Sm4CBCDecrypt(key, ct, iv)~))   // OUT: Secret Message
// assert: 锁定结论(SM4-CBC 加解密往返一致)
assert string(codec.Sm4CBCDecrypt(key, ct, iv)~) == "Secret Message", "SM4-CBC should round-trip"
``````````````

---

### Sm4CBCEncryptWithPKCSPadding {#sm4cbcencryptwithpkcspadding}

```go
Sm4CBCEncryptWithPKCSPadding(key []byte, i any, iv []byte) ([]byte, error)
```

SM4EncryptCBCWithPKCSPadding 使用国密 SM4 算法在 CBC 模式下用 PKCS7 填充加密数据

密钥与 IV 均为 16 字节；IV 为空时使用 key 前 16 字节作为 IV。

注意：Sm4Encrypt、Sm4CBCEncrypt 和 Sm4CBCEncryptWithPKCSPadding 是同一个函数的别名

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(16 字节) |
| i | `any` | 待加密的数据，可为 string、[]byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 加密失败时返回的错误 |

**示例**

``````````````yak
// VARS: SM4-CBC 加解密
key = "1234567890123456"
iv = "abcdefghijklmnop"
ct = codec.Sm4CBCEncrypt(key, "Secret Message", iv)~
// STDOUT: 解密还原后打印
println(string(codec.Sm4CBCDecrypt(key, ct, iv)~))   // OUT: Secret Message
// assert: 锁定结论(SM4-CBC 加解密往返一致)
assert string(codec.Sm4CBCDecrypt(key, ct, iv)~) == "Secret Message", "SM4-CBC should round-trip"
``````````````

---

### Sm4CBCEncryptWithZeroPadding {#sm4cbcencryptwithzeropadding}

```go
Sm4CBCEncryptWithZeroPadding(key []byte, i any, iv []byte) ([]byte, error)
```

SM4EncryptCBCWithZeroPadding 使用国密 SM4 算法在 CBC 模式下用零填充(ZeroPadding)加密数据（导出名为 codec.Sm4CBCEncryptWithZeroPadding）

密钥与 IV 均为 16 字节；IV 为空时使用 key 前 16 字节作为 IV。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(16 字节) |
| i | `any` | 待加密的数据，可为 string、[]byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 加密失败时返回的错误 |

**示例**

``````````````yak
key = "1234567890123456"
iv = "abcdefghijklmnop"
ct = codec.Sm4CBCEncryptWithZeroPadding(key, "Secret Message", iv)~
pt = codec.Sm4CBCDecryptWithZeroPadding(key, ct, iv)~
println(string(pt))   // OUT: Secret Message
assert string(pt) == "Secret Message", "SM4-CBC zero padding should round-trip"
``````````````

---

### Sm4CFBDecrypt {#sm4cfbdecrypt}

```go
Sm4CFBDecrypt(key []byte, i any, iv []byte) ([]byte, error)
```

SM4DecryptCFBWithPKCSPadding 使用国密 SM4 算法在 CFB 模式下用 PKCS7 填充解密数据

密钥与 IV 均为 16 字节；IV 为空时使用 key 前 16 字节作为 IV。

注意：Sm4CFBDecrypt 和 Sm4CFBDecryptWithPKCSPadding 是同一个函数的别名

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(16 字节) |
| i | `any` | 待解密的密文，可为 []byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |

**示例**

``````````````yak
// VARS: 先加密再解密(SM4-CFB)
key = "1234567890123456"
iv = "abcdefghijklmnop"
ct = codec.Sm4CFBEncrypt(key, "Secret Message", iv)~
pt = codec.Sm4CFBDecrypt(key, ct, iv)~
// STDOUT: 打印还原后的明文
println(string(pt))   // OUT: Secret Message
// assert: 锁定结论(SM4-CFB 解密还原一致)
assert string(pt) == "Secret Message", "SM4-CFB decrypt should recover plaintext"
``````````````

---

### Sm4CFBDecryptWithPKCSPadding {#sm4cfbdecryptwithpkcspadding}

```go
Sm4CFBDecryptWithPKCSPadding(key []byte, i any, iv []byte) ([]byte, error)
```

SM4DecryptCFBWithPKCSPadding 使用国密 SM4 算法在 CFB 模式下用 PKCS7 填充解密数据

密钥与 IV 均为 16 字节；IV 为空时使用 key 前 16 字节作为 IV。

注意：Sm4CFBDecrypt 和 Sm4CFBDecryptWithPKCSPadding 是同一个函数的别名

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(16 字节) |
| i | `any` | 待解密的密文，可为 []byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |

**示例**

``````````````yak
// VARS: 先加密再解密(SM4-CFB)
key = "1234567890123456"
iv = "abcdefghijklmnop"
ct = codec.Sm4CFBEncrypt(key, "Secret Message", iv)~
pt = codec.Sm4CFBDecrypt(key, ct, iv)~
// STDOUT: 打印还原后的明文
println(string(pt))   // OUT: Secret Message
// assert: 锁定结论(SM4-CFB 解密还原一致)
assert string(pt) == "Secret Message", "SM4-CFB decrypt should recover plaintext"
``````````````

---

### Sm4CFBDecryptWithZeroPadding {#sm4cfbdecryptwithzeropadding}

```go
Sm4CFBDecryptWithZeroPadding(key []byte, i any, iv []byte) ([]byte, error)
```

SM4DecryptCFBWithZeroPadding 使用国密 SM4 算法在 CFB 模式下用零填充(ZeroPadding)解密数据（导出名为 codec.Sm4CFBDecryptWithZeroPadding）

与 codec.Sm4CFBEncryptWithZeroPadding 配对使用，密钥与 IV 均为 16 字节。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(16 字节) |
| i | `any` | 待解密的密文，可为 []byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |

**示例**

``````````````yak
key = "1234567890123456"
iv = "abcdefghijklmnop"
ct = codec.Sm4CFBEncryptWithZeroPadding(key, "Secret Message", iv)~
pt = codec.Sm4CFBDecryptWithZeroPadding(key, ct, iv)~
println(string(pt))   // OUT: Secret Message
assert string(pt) == "Secret Message", "SM4-CFB zero padding decrypt should recover plaintext"
``````````````

---

### Sm4CFBEncrypt {#sm4cfbencrypt}

```go
Sm4CFBEncrypt(key []byte, i any, iv []byte) ([]byte, error)
```

SM4EncryptCFBWithPKCSPadding 使用国密 SM4 算法在 CFB 模式下用 PKCS7 填充加密数据

密钥与 IV 均为 16 字节；IV 为空时使用 key 前 16 字节作为 IV。

注意：Sm4CFBEncrypt 和 Sm4CFBEncryptWithPKCSPadding 是同一个函数的别名

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(16 字节) |
| i | `any` | 待加密的数据，可为 string、[]byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 加密失败时返回的错误 |

**示例**

``````````````yak
// VARS: SM4-CFB 加解密
key = "1234567890123456"
iv = "abcdefghijklmnop"
ct = codec.Sm4CFBEncrypt(key, "Secret Message", iv)~
// STDOUT: 解密还原后打印
println(string(codec.Sm4CFBDecrypt(key, ct, iv)~))   // OUT: Secret Message
// assert: 锁定结论(SM4-CFB 加解密往返一致)
assert string(codec.Sm4CFBDecrypt(key, ct, iv)~) == "Secret Message", "SM4-CFB should round-trip"
``````````````

---

### Sm4CFBEncryptWithPKCSPadding {#sm4cfbencryptwithpkcspadding}

```go
Sm4CFBEncryptWithPKCSPadding(key []byte, i any, iv []byte) ([]byte, error)
```

SM4EncryptCFBWithPKCSPadding 使用国密 SM4 算法在 CFB 模式下用 PKCS7 填充加密数据

密钥与 IV 均为 16 字节；IV 为空时使用 key 前 16 字节作为 IV。

注意：Sm4CFBEncrypt 和 Sm4CFBEncryptWithPKCSPadding 是同一个函数的别名

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(16 字节) |
| i | `any` | 待加密的数据，可为 string、[]byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 加密失败时返回的错误 |

**示例**

``````````````yak
// VARS: SM4-CFB 加解密
key = "1234567890123456"
iv = "abcdefghijklmnop"
ct = codec.Sm4CFBEncrypt(key, "Secret Message", iv)~
// STDOUT: 解密还原后打印
println(string(codec.Sm4CFBDecrypt(key, ct, iv)~))   // OUT: Secret Message
// assert: 锁定结论(SM4-CFB 加解密往返一致)
assert string(codec.Sm4CFBDecrypt(key, ct, iv)~) == "Secret Message", "SM4-CFB should round-trip"
``````````````

---

### Sm4CFBEncryptWithZeroPadding {#sm4cfbencryptwithzeropadding}

```go
Sm4CFBEncryptWithZeroPadding(key []byte, i any, iv []byte) ([]byte, error)
```

SM4EncryptCFBWithZeroPadding 使用国密 SM4 算法在 CFB 模式下用零填充(ZeroPadding)加密数据（导出名为 codec.Sm4CFBEncryptWithZeroPadding）

密钥与 IV 均为 16 字节；IV 为空时使用 key 前 16 字节作为 IV。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(16 字节) |
| i | `any` | 待加密的数据，可为 string、[]byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 加密失败时返回的错误 |

**示例**

``````````````yak
key = "1234567890123456"
iv = "abcdefghijklmnop"
ct = codec.Sm4CFBEncryptWithZeroPadding(key, "Secret Message", iv)~
pt = codec.Sm4CFBDecryptWithZeroPadding(key, ct, iv)~
println(string(pt))   // OUT: Secret Message
assert string(pt) == "Secret Message", "SM4-CFB zero padding should round-trip"
``````````````

---

### Sm4CTRDecrypt {#sm4ctrdecrypt}

```go
Sm4CTRDecrypt(key []byte, i any, iv []byte) ([]byte, error)
```

SM4DecryptCTRWithPKCSPadding 使用国密 SM4 算法在 CTR 模式下用 PKCS7 填充解密数据（导出名为 codec.Sm4CTRDecrypt / codec.Sm4CTRDecryptWithPKCSPadding）

与 codec.Sm4CTREncryptWithPKCSPadding 配对使用，密钥与 IV 均为 16 字节。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(16 字节) |
| i | `any` | 待解密的密文，可为 []byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |

**示例**

``````````````yak
key = "1234567890123456"
iv = "abcdefghijklmnop"
ct = codec.Sm4CTREncrypt(key, "Secret Message", iv)~
pt = codec.Sm4CTRDecrypt(key, ct, iv)~
println(string(pt))   // OUT: Secret Message
assert string(pt) == "Secret Message", "SM4-CTR pkcs padding decrypt should recover plaintext"
``````````````

---

### Sm4CTRDecryptWithPKCSPadding {#sm4ctrdecryptwithpkcspadding}

```go
Sm4CTRDecryptWithPKCSPadding(key []byte, i any, iv []byte) ([]byte, error)
```

SM4DecryptCTRWithPKCSPadding 使用国密 SM4 算法在 CTR 模式下用 PKCS7 填充解密数据（导出名为 codec.Sm4CTRDecrypt / codec.Sm4CTRDecryptWithPKCSPadding）

与 codec.Sm4CTREncryptWithPKCSPadding 配对使用，密钥与 IV 均为 16 字节。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(16 字节) |
| i | `any` | 待解密的密文，可为 []byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |

**示例**

``````````````yak
key = "1234567890123456"
iv = "abcdefghijklmnop"
ct = codec.Sm4CTREncrypt(key, "Secret Message", iv)~
pt = codec.Sm4CTRDecrypt(key, ct, iv)~
println(string(pt))   // OUT: Secret Message
assert string(pt) == "Secret Message", "SM4-CTR pkcs padding decrypt should recover plaintext"
``````````````

---

### Sm4CTRDecryptWithZeroPadding {#sm4ctrdecryptwithzeropadding}

```go
Sm4CTRDecryptWithZeroPadding(key []byte, i any, iv []byte) ([]byte, error)
```

SM4DecryptCTRWithZeroPadding 使用国密 SM4 算法在 CTR 模式下用零填充(ZeroPadding)解密数据（导出名为 codec.Sm4CTRDecryptWithZeroPadding）

与 codec.Sm4CTREncryptWithZeroPadding 配对使用，密钥与 IV 均为 16 字节。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(16 字节) |
| i | `any` | 待解密的密文，可为 []byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |

**示例**

``````````````yak
key = "1234567890123456"
iv = "abcdefghijklmnop"
ct = codec.Sm4CTREncryptWithZeroPadding(key, "Secret Message", iv)~
pt = codec.Sm4CTRDecryptWithZeroPadding(key, ct, iv)~
println(string(pt))   // OUT: Secret Message
assert string(pt) == "Secret Message", "SM4-CTR zero padding decrypt should recover plaintext"
``````````````

---

### Sm4CTREncrypt {#sm4ctrencrypt}

```go
Sm4CTREncrypt(key []byte, i any, iv []byte) ([]byte, error)
```

SM4EncryptCTRWithPKCSPadding 使用国密 SM4 算法在 CTR 模式下用 PKCS7 填充加密数据（导出名为 codec.Sm4CTREncrypt / codec.Sm4CTREncryptWithPKCSPadding）

密钥与 IV 均为 16 字节；IV 为空时使用 key 前 16 字节作为 IV。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(16 字节) |
| i | `any` | 待加密的数据，可为 string、[]byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 加密失败时返回的错误 |

**示例**

``````````````yak
key = "1234567890123456"
iv = "abcdefghijklmnop"
ct = codec.Sm4CTREncrypt(key, "Secret Message", iv)~
pt = codec.Sm4CTRDecrypt(key, ct, iv)~
println(string(pt))   // OUT: Secret Message
assert string(pt) == "Secret Message", "SM4-CTR pkcs padding should round-trip"
``````````````

---

### Sm4CTREncryptWithPKCSPadding {#sm4ctrencryptwithpkcspadding}

```go
Sm4CTREncryptWithPKCSPadding(key []byte, i any, iv []byte) ([]byte, error)
```

SM4EncryptCTRWithPKCSPadding 使用国密 SM4 算法在 CTR 模式下用 PKCS7 填充加密数据（导出名为 codec.Sm4CTREncrypt / codec.Sm4CTREncryptWithPKCSPadding）

密钥与 IV 均为 16 字节；IV 为空时使用 key 前 16 字节作为 IV。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(16 字节) |
| i | `any` | 待加密的数据，可为 string、[]byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 加密失败时返回的错误 |

**示例**

``````````````yak
key = "1234567890123456"
iv = "abcdefghijklmnop"
ct = codec.Sm4CTREncrypt(key, "Secret Message", iv)~
pt = codec.Sm4CTRDecrypt(key, ct, iv)~
println(string(pt))   // OUT: Secret Message
assert string(pt) == "Secret Message", "SM4-CTR pkcs padding should round-trip"
``````````````

---

### Sm4CTREncryptWithZeroPadding {#sm4ctrencryptwithzeropadding}

```go
Sm4CTREncryptWithZeroPadding(key []byte, i any, iv []byte) ([]byte, error)
```

SM4EncryptCTRWithZeroPadding 使用国密 SM4 算法在 CTR 模式下用零填充(ZeroPadding)加密数据（导出名为 codec.Sm4CTREncryptWithZeroPadding）

密钥与 IV 均为 16 字节；IV 为空时使用 key 前 16 字节作为 IV。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(16 字节) |
| i | `any` | 待加密的数据，可为 string、[]byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 加密失败时返回的错误 |

**示例**

``````````````yak
key = "1234567890123456"
iv = "abcdefghijklmnop"
ct = codec.Sm4CTREncryptWithZeroPadding(key, "Secret Message", iv)~
pt = codec.Sm4CTRDecryptWithZeroPadding(key, ct, iv)~
println(string(pt))   // OUT: Secret Message
assert string(pt) == "Secret Message", "SM4-CTR zero padding should round-trip"
``````````````

---

### Sm4Decrypt {#sm4decrypt}

```go
Sm4Decrypt(key []byte, i any, iv []byte) ([]byte, error)
```

SM4DecryptCBCWithPKCSPadding 使用国密 SM4 算法在 CBC 模式下用 PKCS7 填充解密数据

密钥与 IV 均为 16 字节；IV 为空时使用 key 前 16 字节作为 IV。

注意：Sm4Decrypt、Sm4CBCDecrypt 和 Sm4CBCDecryptWithPKCSPadding 是同一个函数的别名

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(16 字节) |
| i | `any` | 待解密的密文，可为 []byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |

**示例**

``````````````yak
// VARS: 先加密再解密(SM4-CBC)
key = "1234567890123456"
iv = "abcdefghijklmnop"
ct = codec.Sm4CBCEncrypt(key, "Secret Message", iv)~
pt = codec.Sm4CBCDecrypt(key, ct, iv)~
// STDOUT: 打印还原后的明文
println(string(pt))   // OUT: Secret Message
// assert: 锁定结论(SM4-CBC 解密还原一致)
assert string(pt) == "Secret Message", "SM4-CBC decrypt should recover plaintext"
``````````````

---

### Sm4EBCDecrypt {#sm4ebcdecrypt}

```go
Sm4EBCDecrypt(key []byte, i any, iv []byte) ([]byte, error)
```

SM4DecryptEBCWithPKCSPadding 使用国密 SM4 算法在 ECB 模式下用 PKCS7 填充解密数据(为兼容历史拼写错误保留)

Deprecated: 请使用 Sm4ECBDecrypt(EBC 是 ECB 的拼写错误)

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(16 字节) |
| i | `any` | 待解密的密文，可为 []byte 等 |
| iv | `[]byte` | ECB 模式下无用，传 nil 即可 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |

**示例**

``````````````yak
// VARS: 先加密再解密(兼容旧拼写)
key = "1234567890123456"
ct = codec.Sm4EBCEncrypt(key, "Secret Message", nil)~
pt = codec.Sm4EBCDecrypt(key, ct, nil)~
// STDOUT: 打印还原后的明文
println(string(pt))   // OUT: Secret Message
// assert: 锁定结论(解密还原一致)
assert string(pt) == "Secret Message", "SM4-EBC(alias) decrypt should recover plaintext"
``````````````

---

### Sm4EBCEncrypt {#sm4ebcencrypt}

```go
Sm4EBCEncrypt(key []byte, i any, iv []byte) ([]byte, error)
```

SM4EncryptEBCWithPKCSPadding 使用国密 SM4 算法在 ECB 模式下用 PKCS7 填充加密数据(为兼容历史拼写错误保留)

Deprecated: 请使用 Sm4ECBEncrypt(EBC 是 ECB 的拼写错误)

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(16 字节) |
| i | `any` | 待加密的数据，可为 string、[]byte 等 |
| iv | `[]byte` | ECB 模式下无用，传 nil 即可 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 加密失败时返回的错误 |

**示例**

``````````````yak
// VARS: 兼容旧拼写的 SM4-ECB 加解密
key = "1234567890123456"
ct = codec.Sm4EBCEncrypt(key, "Secret Message", nil)~
// STDOUT: 解密还原后打印
println(string(codec.Sm4EBCDecrypt(key, ct, nil)~))   // OUT: Secret Message
// assert: 锁定结论(加解密往返一致)
assert string(codec.Sm4EBCDecrypt(key, ct, nil)~) == "Secret Message", "SM4-EBC(alias) should round-trip"
``````````````

---

### Sm4ECBDecrypt {#sm4ecbdecrypt}

```go
Sm4ECBDecrypt(key []byte, i any, iv []byte) ([]byte, error)
```

SM4DecryptECBWithPKCSPadding 使用国密 SM4 算法在 ECB 模式下用 PKCS7 填充解密数据(ECB 模式下 iv 无用，传 nil)

密钥为 16 字节。

注意：Sm4ECBDecrypt 和 Sm4ECBDecryptWithPKCSPadding 是同一个函数的别名

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(16 字节) |
| i | `any` | 待解密的密文，可为 []byte 等 |
| iv | `[]byte` | ECB 模式下无用，传 nil 即可 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |

**示例**

``````````````yak
// VARS: 先加密再解密(SM4-ECB)
key = "1234567890123456"
ct = codec.Sm4ECBEncrypt(key, "Secret Message", nil)~
pt = codec.Sm4ECBDecrypt(key, ct, nil)~
// STDOUT: 打印还原后的明文
println(string(pt))   // OUT: Secret Message
// assert: 锁定结论(SM4-ECB 解密还原一致)
assert string(pt) == "Secret Message", "SM4-ECB decrypt should recover plaintext"
``````````````

---

### Sm4ECBDecryptWithPKCSPadding {#sm4ecbdecryptwithpkcspadding}

```go
Sm4ECBDecryptWithPKCSPadding(key []byte, i any, iv []byte) ([]byte, error)
```

SM4DecryptECBWithPKCSPadding 使用国密 SM4 算法在 ECB 模式下用 PKCS7 填充解密数据(ECB 模式下 iv 无用，传 nil)

密钥为 16 字节。

注意：Sm4ECBDecrypt 和 Sm4ECBDecryptWithPKCSPadding 是同一个函数的别名

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(16 字节) |
| i | `any` | 待解密的密文，可为 []byte 等 |
| iv | `[]byte` | ECB 模式下无用，传 nil 即可 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |

**示例**

``````````````yak
// VARS: 先加密再解密(SM4-ECB)
key = "1234567890123456"
ct = codec.Sm4ECBEncrypt(key, "Secret Message", nil)~
pt = codec.Sm4ECBDecrypt(key, ct, nil)~
// STDOUT: 打印还原后的明文
println(string(pt))   // OUT: Secret Message
// assert: 锁定结论(SM4-ECB 解密还原一致)
assert string(pt) == "Secret Message", "SM4-ECB decrypt should recover plaintext"
``````````````

---

### Sm4ECBDecryptWithZeroPadding {#sm4ecbdecryptwithzeropadding}

```go
Sm4ECBDecryptWithZeroPadding(key []byte, i any, iv []byte) ([]byte, error)
```

SM4DecryptECBWithZeroPadding 使用国密 SM4 算法在 ECB 模式下用零填充(ZeroPadding)解密数据(ECB 模式下 iv 无用，传 nil)（导出名为 codec.Sm4ECBDecryptWithZeroPadding）

与 codec.Sm4ECBEncryptWithZeroPadding 配对使用，密钥为 16 字节。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(16 字节) |
| i | `any` | 待解密的密文，可为 []byte 等 |
| iv | `[]byte` | ECB 模式下无用，传 nil 即可 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |

**示例**

``````````````yak
key = "1234567890123456"
ct = codec.Sm4ECBEncryptWithZeroPadding(key, "Secret Message", nil)~
pt = codec.Sm4ECBDecryptWithZeroPadding(key, ct, nil)~
println(string(pt))   // OUT: Secret Message
assert string(pt) == "Secret Message", "SM4-ECB zero padding decrypt should recover plaintext"
``````````````

---

### Sm4ECBEncrypt {#sm4ecbencrypt}

```go
Sm4ECBEncrypt(key []byte, i any, iv []byte) ([]byte, error)
```

SM4EncryptECBWithPKCSPadding 使用国密 SM4 算法在 ECB 模式下用 PKCS7 填充加密数据(ECB 模式下 iv 无用，传 nil)

密钥为 16 字节。

注意：Sm4ECBEncrypt 和 Sm4ECBEncryptWithPKCSPadding 是同一个函数的别名

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(16 字节) |
| i | `any` | 待加密的数据，可为 string、[]byte 等 |
| iv | `[]byte` | ECB 模式下无用，传 nil 即可 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 加密失败时返回的错误 |

**示例**

``````````````yak
// VARS: SM4-ECB 加解密(iv 传 nil)
key = "1234567890123456"
ct = codec.Sm4ECBEncrypt(key, "Secret Message", nil)~
// STDOUT: 解密还原后打印
println(string(codec.Sm4ECBDecrypt(key, ct, nil)~))   // OUT: Secret Message
// assert: 锁定结论(SM4-ECB 加解密往返一致)
assert string(codec.Sm4ECBDecrypt(key, ct, nil)~) == "Secret Message", "SM4-ECB should round-trip"
``````````````

---

### Sm4ECBEncryptWithPKCSPadding {#sm4ecbencryptwithpkcspadding}

```go
Sm4ECBEncryptWithPKCSPadding(key []byte, i any, iv []byte) ([]byte, error)
```

SM4EncryptECBWithPKCSPadding 使用国密 SM4 算法在 ECB 模式下用 PKCS7 填充加密数据(ECB 模式下 iv 无用，传 nil)

密钥为 16 字节。

注意：Sm4ECBEncrypt 和 Sm4ECBEncryptWithPKCSPadding 是同一个函数的别名

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(16 字节) |
| i | `any` | 待加密的数据，可为 string、[]byte 等 |
| iv | `[]byte` | ECB 模式下无用，传 nil 即可 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 加密失败时返回的错误 |

**示例**

``````````````yak
// VARS: SM4-ECB 加解密(iv 传 nil)
key = "1234567890123456"
ct = codec.Sm4ECBEncrypt(key, "Secret Message", nil)~
// STDOUT: 解密还原后打印
println(string(codec.Sm4ECBDecrypt(key, ct, nil)~))   // OUT: Secret Message
// assert: 锁定结论(SM4-ECB 加解密往返一致)
assert string(codec.Sm4ECBDecrypt(key, ct, nil)~) == "Secret Message", "SM4-ECB should round-trip"
``````````````

---

### Sm4ECBEncryptWithZeroPadding {#sm4ecbencryptwithzeropadding}

```go
Sm4ECBEncryptWithZeroPadding(key []byte, i any, iv []byte) ([]byte, error)
```

SM4EncryptECBWithZeroPadding 使用国密 SM4 算法在 ECB 模式下用零填充(ZeroPadding)加密数据(ECB 模式下 iv 无用，传 nil)（导出名为 codec.Sm4ECBEncryptWithZeroPadding）

密钥为 16 字节。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(16 字节) |
| i | `any` | 待加密的数据，可为 string、[]byte 等 |
| iv | `[]byte` | ECB 模式下无用，传 nil 即可 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 加密失败时返回的错误 |

**示例**

``````````````yak
key = "1234567890123456"
ct = codec.Sm4ECBEncryptWithZeroPadding(key, "Secret Message", nil)~
pt = codec.Sm4ECBDecryptWithZeroPadding(key, ct, nil)~
println(string(pt))   // OUT: Secret Message
assert string(pt) == "Secret Message", "SM4-ECB zero padding should round-trip"
``````````````

---

### Sm4Encrypt {#sm4encrypt}

```go
Sm4Encrypt(key []byte, i any, iv []byte) ([]byte, error)
```

SM4EncryptCBCWithPKCSPadding 使用国密 SM4 算法在 CBC 模式下用 PKCS7 填充加密数据

密钥与 IV 均为 16 字节；IV 为空时使用 key 前 16 字节作为 IV。

注意：Sm4Encrypt、Sm4CBCEncrypt 和 Sm4CBCEncryptWithPKCSPadding 是同一个函数的别名

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(16 字节) |
| i | `any` | 待加密的数据，可为 string、[]byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 加密失败时返回的错误 |

**示例**

``````````````yak
// VARS: SM4-CBC 加解密
key = "1234567890123456"
iv = "abcdefghijklmnop"
ct = codec.Sm4CBCEncrypt(key, "Secret Message", iv)~
// STDOUT: 解密还原后打印
println(string(codec.Sm4CBCDecrypt(key, ct, iv)~))   // OUT: Secret Message
// assert: 锁定结论(SM4-CBC 加解密往返一致)
assert string(codec.Sm4CBCDecrypt(key, ct, iv)~) == "Secret Message", "SM4-CBC should round-trip"
``````````````

---

### Sm4GCMDecrypt {#sm4gcmdecrypt}

```go
Sm4GCMDecrypt(key []byte, data any, iv []byte) ([]byte, error)
```

SM4GCMDec 使用国密 SM4 算法在 GCM 模式下解密数据

密钥与 IV 均为 16 字节；IV 为空时使用 key 前 16 字节作为 IV。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(16 字节) |
| data | `any` | 待解密的密文，可为 []byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密或认证失败时返回的错误 |

**示例**

``````````````yak
// VARS: 先加密再解密(SM4-GCM)
key = "1234567890123456"
iv = "abcdefghijklmnop"
ct = codec.Sm4GCMEncrypt(key, "Secret Message", iv)~
pt = codec.Sm4GCMDecrypt(key, ct, iv)~
// STDOUT: 打印还原后的明文
println(string(pt))   // OUT: Secret Message
// assert: 锁定结论(SM4-GCM 解密还原一致)
assert string(pt) == "Secret Message", "SM4-GCM decrypt should recover plaintext"
``````````````

---

### Sm4GCMEncrypt {#sm4gcmencrypt}

```go
Sm4GCMEncrypt(key []byte, data any, iv []byte) ([]byte, error)
```

SM4GCMEnc 使用国密 SM4 算法在 GCM 模式下加密数据

密钥与 IV 均为 16 字节；IV 为空时使用 key 前 16 字节作为 IV。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(16 字节) |
| data | `any` | 待加密的数据，可为 string、[]byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 加密失败时返回的错误 |

**示例**

``````````````yak
// VARS: SM4-GCM 加解密
key = "1234567890123456"
iv = "abcdefghijklmnop"
ct = codec.Sm4GCMEncrypt(key, "Secret Message", iv)~
// STDOUT: 解密还原后打印
println(string(codec.Sm4GCMDecrypt(key, ct, iv)~))   // OUT: Secret Message
// assert: 锁定结论(SM4-GCM 加解密往返一致)
assert string(codec.Sm4GCMDecrypt(key, ct, iv)~) == "Secret Message", "SM4-GCM should round-trip"
``````````````

---

### Sm4OFBDecrypt {#sm4ofbdecrypt}

```go
Sm4OFBDecrypt(key []byte, i any, iv []byte) ([]byte, error)
```

SM4DecryptOFBWithPKCSPadding 使用国密 SM4 算法在 OFB 模式下用 PKCS7 填充解密数据

密钥与 IV 均为 16 字节；IV 为空时使用 key 前 16 字节作为 IV。

注意：Sm4OFBDecrypt 和 Sm4OFBDecryptWithPKCSPadding 是同一个函数的别名

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(16 字节) |
| i | `any` | 待解密的密文，可为 []byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |

**示例**

``````````````yak
// VARS: 先加密再解密(SM4-OFB)
key = "1234567890123456"
iv = "abcdefghijklmnop"
ct = codec.Sm4OFBEncrypt(key, "Secret Message", iv)~
pt = codec.Sm4OFBDecrypt(key, ct, iv)~
// STDOUT: 打印还原后的明文
println(string(pt))   // OUT: Secret Message
// assert: 锁定结论(SM4-OFB 解密还原一致)
assert string(pt) == "Secret Message", "SM4-OFB decrypt should recover plaintext"
``````````````

---

### Sm4OFBDecryptWithPKCSPadding {#sm4ofbdecryptwithpkcspadding}

```go
Sm4OFBDecryptWithPKCSPadding(key []byte, i any, iv []byte) ([]byte, error)
```

SM4DecryptOFBWithPKCSPadding 使用国密 SM4 算法在 OFB 模式下用 PKCS7 填充解密数据

密钥与 IV 均为 16 字节；IV 为空时使用 key 前 16 字节作为 IV。

注意：Sm4OFBDecrypt 和 Sm4OFBDecryptWithPKCSPadding 是同一个函数的别名

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(16 字节) |
| i | `any` | 待解密的密文，可为 []byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |

**示例**

``````````````yak
// VARS: 先加密再解密(SM4-OFB)
key = "1234567890123456"
iv = "abcdefghijklmnop"
ct = codec.Sm4OFBEncrypt(key, "Secret Message", iv)~
pt = codec.Sm4OFBDecrypt(key, ct, iv)~
// STDOUT: 打印还原后的明文
println(string(pt))   // OUT: Secret Message
// assert: 锁定结论(SM4-OFB 解密还原一致)
assert string(pt) == "Secret Message", "SM4-OFB decrypt should recover plaintext"
``````````````

---

### Sm4OFBDecryptWithZeroPadding {#sm4ofbdecryptwithzeropadding}

```go
Sm4OFBDecryptWithZeroPadding(key []byte, i any, iv []byte) ([]byte, error)
```

SM4DecryptOFBWithZeroPadding 使用国密 SM4 算法在 OFB 模式下用零填充(ZeroPadding)解密数据（导出名为 codec.Sm4OFBDecryptWithZeroPadding）

与 codec.Sm4OFBEncryptWithZeroPadding 配对使用，密钥与 IV 均为 16 字节。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(16 字节) |
| i | `any` | 待解密的密文，可为 []byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |

**示例**

``````````````yak
key = "1234567890123456"
iv = "abcdefghijklmnop"
ct = codec.Sm4OFBEncryptWithZeroPadding(key, "Secret Message", iv)~
pt = codec.Sm4OFBDecryptWithZeroPadding(key, ct, iv)~
println(string(pt))   // OUT: Secret Message
assert string(pt) == "Secret Message", "SM4-OFB zero padding decrypt should recover plaintext"
``````````````

---

### Sm4OFBEncrypt {#sm4ofbencrypt}

```go
Sm4OFBEncrypt(key []byte, i any, iv []byte) ([]byte, error)
```

SM4EncryptOFBWithPKCSPadding 使用国密 SM4 算法在 OFB 模式下用 PKCS7 填充加密数据

密钥与 IV 均为 16 字节；IV 为空时使用 key 前 16 字节作为 IV。

注意：Sm4OFBEncrypt 和 Sm4OFBEncryptWithPKCSPadding 是同一个函数的别名

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(16 字节) |
| i | `any` | 待加密的数据，可为 string、[]byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 加密失败时返回的错误 |

**示例**

``````````````yak
// VARS: SM4-OFB 加解密
key = "1234567890123456"
iv = "abcdefghijklmnop"
ct = codec.Sm4OFBEncrypt(key, "Secret Message", iv)~
// STDOUT: 解密还原后打印
println(string(codec.Sm4OFBDecrypt(key, ct, iv)~))   // OUT: Secret Message
// assert: 锁定结论(SM4-OFB 加解密往返一致)
assert string(codec.Sm4OFBDecrypt(key, ct, iv)~) == "Secret Message", "SM4-OFB should round-trip"
``````````````

---

### Sm4OFBEncryptWithPKCSPadding {#sm4ofbencryptwithpkcspadding}

```go
Sm4OFBEncryptWithPKCSPadding(key []byte, i any, iv []byte) ([]byte, error)
```

SM4EncryptOFBWithPKCSPadding 使用国密 SM4 算法在 OFB 模式下用 PKCS7 填充加密数据

密钥与 IV 均为 16 字节；IV 为空时使用 key 前 16 字节作为 IV。

注意：Sm4OFBEncrypt 和 Sm4OFBEncryptWithPKCSPadding 是同一个函数的别名

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(16 字节) |
| i | `any` | 待加密的数据，可为 string、[]byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 加密失败时返回的错误 |

**示例**

``````````````yak
// VARS: SM4-OFB 加解密
key = "1234567890123456"
iv = "abcdefghijklmnop"
ct = codec.Sm4OFBEncrypt(key, "Secret Message", iv)~
// STDOUT: 解密还原后打印
println(string(codec.Sm4OFBDecrypt(key, ct, iv)~))   // OUT: Secret Message
// assert: 锁定结论(SM4-OFB 加解密往返一致)
assert string(codec.Sm4OFBDecrypt(key, ct, iv)~) == "Secret Message", "SM4-OFB should round-trip"
``````````````

---

### Sm4OFBEncryptWithZeroPadding {#sm4ofbencryptwithzeropadding}

```go
Sm4OFBEncryptWithZeroPadding(key []byte, i any, iv []byte) ([]byte, error)
```

SM4EncryptOFBWithZeroPadding 使用国密 SM4 算法在 OFB 模式下用零填充(ZeroPadding)加密数据（导出名为 codec.Sm4OFBEncryptWithZeroPadding）

密钥与 IV 均为 16 字节；IV 为空时使用 key 前 16 字节作为 IV。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(16 字节) |
| i | `any` | 待加密的数据，可为 string、[]byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 加密失败时返回的错误 |

**示例**

``````````````yak
key = "1234567890123456"
iv = "abcdefghijklmnop"
ct = codec.Sm4OFBEncryptWithZeroPadding(key, "Secret Message", iv)~
pt = codec.Sm4OFBDecryptWithZeroPadding(key, ct, iv)~
println(string(pt))   // OUT: Secret Message
assert string(pt) == "Secret Message", "SM4-OFB zero padding should round-trip"
``````````````

---

### StrconvQuote {#strconvquote}

```go
StrconvQuote(s string) string
```

将字符串转换为带双引号的 Go 字面量形式，特殊字符转义为 \n \t \xNN 等（导出名为 codec.StrconvQuote）

与 codec.StrconvUnquote 配对使用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| s | `string` | 待转换的字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 带双引号、特殊字符已转义的字面量字符串 |

**示例**

``````````````yak
result = codec.StrconvQuote("a\nb")
println(result)   // OUT: "a\nb"
assert result == "\"a\\nb\"", "StrconvQuote should quote string and escape newline"
``````````````

---

### StrconvUnquote {#strconvunquote}

```go
StrconvUnquote(s string) (string, error)
```

解析带引号的 Go 字面量字符串，去掉外层引号并处理转义序列（导出名为 codec.StrconvUnquote / codec.DecodeASCII）

与 codec.StrconvQuote 配对使用，输入必须是带双引号包裹的字符串

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| s | `string` | 带引号的字符串字面量，如 &#34;\&#34;hi\&#34;&#34; |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 去引号并解转义后的字符串 |
| r2 | `error` | 错误信息（输入不是合法的带引号字面量时返回） |

**示例**

``````````````yak
result = codec.StrconvUnquote("\"a\\nb\"")~
println(len(result))   // OUT: 3
assert result == "a\nb", "StrconvUnquote should unquote and unescape \\n"
``````````````

---

### TripleDESCBCDecrypt {#tripledescbcdecrypt}

```go
TripleDESCBCDecrypt(key []byte, i any, iv []byte) ([]byte, error)
```

TripleDESDecryptCBCWithZeroPadding 使用 3DES(Triple DES) 算法在 CBC 模式下用零填充解密数据

密钥长度必须是 24 字节(即 3 * 8 字节)，iv 可为 nil 或 8 字节；iv 为 nil 时固定为密钥或零填充到 8 字节。

注意：TripleDESCBCDecrypt、TripleDESDecrypt 和本函数是同一个函数的别名

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(24 字节) |
| i | `any` | 待解密的密文，可为 []byte 等 |
| iv | `[]byte` | 初始化向量(8 字节)，可为 nil |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |

**示例**

``````````````yak
// VARS: 先加密再解密(3DES-CBC)
key = "123456781234567812345678"
iv = "abcdefgh"
ct = codec.TripleDESCBCEncrypt(key, "Secret Message", iv)~
pt = codec.TripleDESCBCDecrypt(key, ct, iv)~
// STDOUT: 打印还原后的明文
println(string(pt))   // OUT: Secret Message
// assert: 锁定结论(3DES-CBC 解密还原一致)
assert string(pt) == "Secret Message", "3DES-CBC decrypt should recover plaintext"
``````````````

---

### TripleDESCBCEncrypt {#tripledescbcencrypt}

```go
TripleDESCBCEncrypt(key []byte, i any, iv []byte) ([]byte, error)
```

TripleDESEncryptCBCWithZeroPadding 使用 3DES(Triple DES) 算法在 CBC 模式下用零填充加密数据

密钥长度必须是 24 字节(即 3 * 8 字节)，iv 可为 nil 或 8 字节；iv 为 nil 时固定为密钥。

注意：TripleDESCBCEncrypt、TripleDESEncrypt 和本函数是同一个函数的别名

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(24 字节) |
| i | `any` | 待加密的数据，可为 string、[]byte 等 |
| iv | `[]byte` | 初始化向量(8 字节)，可为 nil |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 加密失败时返回的错误 |

**示例**

``````````````yak
// VARS: 3DES-CBC 加解密(24 字节密钥，8 字节 IV)
key = "123456781234567812345678"
iv = "abcdefgh"
ct = codec.TripleDESCBCEncrypt(key, "Secret Message", iv)~
// STDOUT: 解密还原后打印
println(string(codec.TripleDESCBCDecrypt(key, ct, iv)~))   // OUT: Secret Message
// assert: 锁定结论(3DES-CBC 加解密往返一致)
assert string(codec.TripleDESCBCDecrypt(key, ct, iv)~) == "Secret Message", "3DES-CBC should round-trip"
``````````````

---

### TripleDESDecrypt {#tripledesdecrypt}

```go
TripleDESDecrypt(key []byte, i any, iv []byte) ([]byte, error)
```

TripleDESDecryptCBCWithZeroPadding 使用 3DES(Triple DES) 算法在 CBC 模式下用零填充解密数据

密钥长度必须是 24 字节(即 3 * 8 字节)，iv 可为 nil 或 8 字节；iv 为 nil 时固定为密钥或零填充到 8 字节。

注意：TripleDESCBCDecrypt、TripleDESDecrypt 和本函数是同一个函数的别名

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(24 字节) |
| i | `any` | 待解密的密文，可为 []byte 等 |
| iv | `[]byte` | 初始化向量(8 字节)，可为 nil |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |

**示例**

``````````````yak
// VARS: 先加密再解密(3DES-CBC)
key = "123456781234567812345678"
iv = "abcdefgh"
ct = codec.TripleDESCBCEncrypt(key, "Secret Message", iv)~
pt = codec.TripleDESCBCDecrypt(key, ct, iv)~
// STDOUT: 打印还原后的明文
println(string(pt))   // OUT: Secret Message
// assert: 锁定结论(3DES-CBC 解密还原一致)
assert string(pt) == "Secret Message", "3DES-CBC decrypt should recover plaintext"
``````````````

---

### TripleDESECBDecrypt {#tripledesecbdecrypt}

```go
TripleDESECBDecrypt(key []byte, data []byte) ([]byte, error)
```

TripleDES_ECBDec 使用 3DES(Triple DES) 算法在 ECB 模式下用零填充解密数据(ECB 模式下无 iv 参数)

密钥长度必须是 24 字节(即 3 * 8 字节)。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(24 字节) |
| data | `[]byte` | 待解密的密文字节 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |

**示例**

``````````````yak
// VARS: 先加密再解密(3DES-ECB)
key = "123456781234567812345678"
ct = codec.TripleDESECBEncrypt(key, "Secret Message")~
pt = codec.TripleDESECBDecrypt(key, ct)~
// STDOUT: 去零填充后打印
println(string(codec.ZeroUnPadding(pt)))   // OUT: Secret Message
// assert: 锁定结论(3DES-ECB 解密还原一致)
assert string(codec.ZeroUnPadding(pt)) == "Secret Message", "3DES-ECB decrypt should recover plaintext"
``````````````

---

### TripleDESECBEncrypt {#tripledesecbencrypt}

```go
TripleDESECBEncrypt(key []byte, data []byte) ([]byte, error)
```

TripleDES_ECBEnc 使用 3DES(Triple DES) 算法在 ECB 模式下用零填充加密数据(ECB 模式下无 iv 参数)

密钥长度必须是 24 字节(即 3 * 8 字节)。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(24 字节) |
| data | `[]byte` | 待加密的数据字节 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 加密失败时返回的错误 |

**示例**

``````````````yak
// VARS: 3DES-ECB 加解密(24 字节密钥)
key = "123456781234567812345678"
ct = codec.TripleDESECBEncrypt(key, "Secret Message")~
// STDOUT: 去零填充解密后打印
println(string(codec.ZeroUnPadding(codec.TripleDESECBDecrypt(key, ct)~)))   // OUT: Secret Message
// assert: 锁定结论(3DES-ECB 加解密往返一致)
assert string(codec.ZeroUnPadding(codec.TripleDESECBDecrypt(key, ct)~)) == "Secret Message", "3DES-ECB should round-trip"
``````````````

---

### TripleDESEncrypt {#tripledesencrypt}

```go
TripleDESEncrypt(key []byte, i any, iv []byte) ([]byte, error)
```

TripleDESEncryptCBCWithZeroPadding 使用 3DES(Triple DES) 算法在 CBC 模式下用零填充加密数据

密钥长度必须是 24 字节(即 3 * 8 字节)，iv 可为 nil 或 8 字节；iv 为 nil 时固定为密钥。

注意：TripleDESCBCEncrypt、TripleDESEncrypt 和本函数是同一个函数的别名

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `[]byte` | 密钥(24 字节) |
| i | `any` | 待加密的数据，可为 string、[]byte 等 |
| iv | `[]byte` | 初始化向量(8 字节)，可为 nil |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 加密失败时返回的错误 |

**示例**

``````````````yak
// VARS: 3DES-CBC 加解密(24 字节密钥，8 字节 IV)
key = "123456781234567812345678"
iv = "abcdefgh"
ct = codec.TripleDESCBCEncrypt(key, "Secret Message", iv)~
// STDOUT: 解密还原后打印
println(string(codec.TripleDESCBCDecrypt(key, ct, iv)~))   // OUT: Secret Message
// assert: 锁定结论(3DES-CBC 加解密往返一致)
assert string(codec.TripleDESCBCDecrypt(key, ct, iv)~) == "Secret Message", "3DES-CBC should round-trip"
``````````````

---

### UTF8ToGB18030 {#utf8togb18030}

```go
UTF8ToGB18030(s []byte) ([]byte, error)
```

将 UTF-8 编码的字节转换为 GB18030 编码的字节

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| s | `[]byte` | UTF-8 编码的字节数据 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 转换后的 GB18030 字节 |
| r2 | `error` | 转换失败时返回的错误 |

**示例**

``````````````yak
// VARS: UTF-8 转 GB18030 再转回 UTF-8，波浪号自动解包 error
gb = codec.UTF8ToGB18030("中文")~
result = codec.GB18030ToUTF8(gb)~
// STDOUT: 转字符串后打印
println(string(result))   // OUT: 中文
// assert: 锁定结论(UTF-8 与 GB18030 往返一致)
assert string(result) == "中文", "UTF8/GB18030 should round-trip"
``````````````

---

### UTF8ToGBK {#utf8togbk}

```go
UTF8ToGBK(s []byte) ([]byte, error)
```

将 UTF-8 编码的字节转换为 GBK 编码的字节

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| s | `[]byte` | UTF-8 编码的字节数据 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 转换后的 GBK 字节 |
| r2 | `error` | 转换失败时返回的错误 |

**示例**

``````````````yak
// VARS: UTF-8 转 GBK 再转回 UTF-8，波浪号自动解包 error
gbk = codec.UTF8ToGBK("中文")~
result = codec.GBKToUTF8(gbk)~
// STDOUT: 转字符串后打印
println(string(result))   // OUT: 中文
// assert: 锁定结论(UTF-8 与 GBK 往返一致)
assert string(result) == "中文", "UTF8/GBK should round-trip"
``````````````

---

### UTF8ToHZGB2312 {#utf8tohzgb2312}

```go
UTF8ToHZGB2312(s []byte) ([]byte, error)
```

将 UTF-8 编码的字节转换为 HZ-GB2312 编码的字节

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| s | `[]byte` | UTF-8 编码的字节数据 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | []byte: 转换后的 HZ-GB2312 字节 |
| r2 | `error` | 转换失败时返回的错误 |

**示例**

``````````````yak
// VARS: UTF-8 转 HZ-GB2312，结果非空
result = codec.UTF8ToHZGB2312("中文")~
// STDOUT: 打印是否非空
println(len(result) > 0)   // OUT: true
// assert: 锁定结论(转换得到非空字节)
assert len(result) > 0, "UTF8ToHZGB2312 should produce bytes"
``````````````

---

### UnescapePathUrl {#unescapepathurl}

```go
UnescapePathUrl(s string) (string, error)
```

PathUnescape 对 URL 路径转义的字符串做解码，同时兼容 %uXXXX 形式

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| s | `string` | 待解码的 URL 路径转义字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 解码后的字符串 |
| r2 | `error` | 解码失败时返回的错误 |

**示例**

``````````````yak
// VARS: 路径解码，波浪号自动解包 error
result = codec.UnescapePathUrl("a%20b")~
// STDOUT: 打印可观察输出
println(result)   // OUT: a b
// assert: 锁定结论(与 EscapePathUrl 往返一致)
assert string(codec.UnescapePathUrl(codec.EscapePathUrl("/api/info"))~) == "/api/info", "path escape/unescape should round-trip"
``````````````

---

### UnescapeQueryUrl {#unescapequeryurl}

```go
UnescapeQueryUrl(s string) (string, error)
```

QueryUnescape 对 URL 百分号编码的字符串做查询串解码，同时兼容 %uXXXX 形式

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| s | `string` | 待解码的 URL 编码字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 解码后的字符串 |
| r2 | `error` | 解码失败时返回的错误 |

**示例**

``````````````yak
// VARS: URL 解码，波浪号自动解包 error
result = codec.DecodeUrl("a%20b")~
// STDOUT: 打印可观察输出
println(result)   // OUT: a b
// assert: 锁定结论
assert result == "a b", "DecodeUrl should decode percent-encoding"
``````````````

---

### UnescapeString {#unescapestring}

```go
UnescapeString(s string) (string, error)
```

处理字符串中的转义字符，无需外层引号

支持 \&#34; \\ \n \r \t \xNN \uNNNN \UNNNNNNNN 等转义序列；与 codec.StrconvUnquote 不同，本函数不要求输入带引号包裹

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| s | `string` | 含转义序列的字符串(无需外层引号) |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 解转义后的字符串 |
| r2 | `error` | 解析失败时返回的错误 |

**示例**

``````````````yak
// VARS: 解转义，波浪号自动解包 error
result = codec.UnescapeString("a\\nb")~
// STDOUT: 打印长度(\n 解为单个换行符，总长 3)
println(len(result))   // OUT: 3
// assert: 锁定结论(转义序列 \n 被解析为换行)
assert result == "a\nb", "UnescapeString should unescape \\n to newline"
``````````````

---

### UnicodeDecode {#unicodedecode}

```go
UnicodeDecode(i string) string
```

将 \uXXXX / \UXXXXXXXX 形式的 Unicode 转义序列解码为原始字符串

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `string` | 含 Unicode 转义序列的字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 解码后的原始字符串 |

**示例**

``````````````yak
// VARS: 解码 \uXXXX 转义序列
result = codec.UnicodeDecode("\\u0061\\u0062\\u0063")
// STDOUT: 打印可观察输出
println(result)   // OUT: abc
// assert: 锁定结论
assert result == "abc", "UnicodeDecode should decode escape sequences"
``````````````

---

### UnicodeEncode {#unicodeencode}

```go
UnicodeEncode(i string) string
```

将字符串的每个字符编码为 \uXXXX 形式的 Unicode 转义序列

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `string` | 待编码的字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | \uXXXX 形式的 Unicode 转义字符串 |

**示例**

``````````````yak
// VARS: 把字符串编码为 \uXXXX
result = codec.UnicodeEncode("abc")
// STDOUT: 打印可观察输出
println(result)   // OUT: \u0061\u0062\u0063
// assert: 锁定结论(与 UnicodeDecode 往返一致)
assert codec.UnicodeDecode(result) == "abc", "unicode encode/decode should round-trip"
``````````````

---

### ZeroPadding {#zeropadding}

```go
ZeroPadding(origin []byte, blockSize int) []byte
```

对数据按指定块大小做零字节(0x00)填充，使其长度补齐到块大小的整数倍

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| origin | `[]byte` | 待填充的原始数据 |
| blockSize | `int` | 块大小(字节)，如 8 或 16 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 填充后的字节切片 |

**示例**

``````````````yak
// VARS: 把数据零填充到 16 字节块
result = codec.ZeroPadding([]byte("Test Data"), 16)
// STDOUT: 打印长度
println(len(result))   // OUT: 16
// assert: 锁定结论(可用 ZeroUnPadding 去填充)
assert len(result) == 16, "ZeroPadding should pad to block size"
assert string(codec.ZeroUnPadding(result)) == "Test Data", "Zero pad/unpad should round-trip"
``````````````

---

### ZeroUnPadding {#zerounpadding}

```go
ZeroUnPadding(originData []byte) []byte
```

去除数据末尾的零字节(0x00)填充，返回原始数据

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| originData | `[]byte` | 带零填充的数据 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 去除零填充后的字节切片 |

**示例**

``````````````yak
// VARS: 先零填充再去填充
padded = codec.ZeroPadding([]byte("Test Data"), 16)
result = codec.ZeroUnPadding(padded)
// STDOUT: 转字符串后打印
println(string(result))   // OUT: Test Data
// assert: 锁定结论(还原原始数据)
assert string(result) == "Test Data", "ZeroUnPadding should remove zero padding"
``````````````

---

