# codec

|实例名|实例描述|
|:------|:--------|
CBC|(string) &#34;CBC&#34;|
CFB|(string) &#34;CFB&#34;|
CTR|(string) &#34;CTR&#34;|
ECB|(string) &#34;ECB&#34;|
OFB|(string) &#34;OFB&#34;|

|函数名|函数描述/介绍|
|:------|:--------|
| [codec.AESCBCDecrypt](#aescbcdecrypt) |AESDecryptCBCWithPKCSPadding 使用 AES 算法在 CBC 模式下用 PKCS7 填充解密数据 密钥长度必须是 16/24/32 字节(分别对应 AES-128/192/256)；iv 为 nil 时使用 key 前 16 字节作为 iv。 注意：AESCBCDecryp...|
| [codec.AESCBCDecryptWithPKCS7Padding](#aescbcdecryptwithpkcs7padding) |AESDecryptCBCWithPKCSPadding 使用 AES 算法在 CBC 模式下用 PKCS7 填充解密数据 密钥长度必须是 16/24/32 字节(分别对应 AES-128/192/256)；iv 为 nil 时使用 key 前 16 字节作为 iv。 注意：AESCBCDecryp...|
| [codec.AESCBCDecryptWithZeroPadding](#aescbcdecryptwithzeropadding) |AESDecryptCBCWithZeroPadding 使用 AES 算法在 CBC 模式下用零(Zero)填充解密数据 密钥长度必须是 16/24/32 字节(分别对应 AES-128/192/256)；iv 为 nil 时使用 key 前 16 字节作为 iv。 参数: - key: 密钥(1...|
| [codec.AESCBCEncrypt](#aescbcencrypt) |AESEncryptCBCWithPKCSPadding 使用 AES 算法在 CBC 模式下用 PKCS7 填充加密数据 密钥长度必须是 16/24/32 字节(分别对应 AES-128/192/256)；iv 为 nil 时使用 key 前 16 字节作为 iv。 注意：AESCBCEncryp...|
| [codec.AESCBCEncryptWithPKCS7Padding](#aescbcencryptwithpkcs7padding) |AESEncryptCBCWithPKCSPadding 使用 AES 算法在 CBC 模式下用 PKCS7 填充加密数据 密钥长度必须是 16/24/32 字节(分别对应 AES-128/192/256)；iv 为 nil 时使用 key 前 16 字节作为 iv。 注意：AESCBCEncryp...|
| [codec.AESCBCEncryptWithZeroPadding](#aescbcencryptwithzeropadding) |AESEncryptCBCWithZeroPadding 使用 AES 算法在 CBC 模式下用零(Zero)填充加密数据 密钥长度必须是 16/24/32 字节(分别对应 AES-128/192/256)；iv 为 nil 时使用 key 前 16 字节作为 iv。 参数: - key: 密钥(1...|
| [codec.AESCFBDecrypt](#aescfbdecrypt) |AESDecryptCFBWithPKCSPadding 使用 AES 算法在 CFB 模式下用 PKCS7 填充解密数据 密钥长度必须是 16/24/32 字节(分别对应 AES-128/192/256)；iv 为 nil 时使用 key 前 16 字节作为 iv。 注意：AESCFBDecryp...|
| [codec.AESCFBEncrypt](#aescfbencrypt) |AESEncryptCFBWithPKCSPadding 使用 AES 算法在 CFB 模式下用 PKCS7 填充加密数据 密钥长度必须是 16/24/32 字节(分别对应 AES-128/192/256)；iv 为 nil 时使用 key 前 16 字节作为 iv。 注意：AESCFBEncryp...|
| [codec.AESDecrypt](#aesdecrypt) |AESDecryptCBCWithPKCSPadding 使用 AES 算法在 CBC 模式下用 PKCS7 填充解密数据 密钥长度必须是 16/24/32 字节(分别对应 AES-128/192/256)；iv 为 nil 时使用 key 前 16 字节作为 iv。 注意：AESCBCDecryp...|
| [codec.AESDecryptBasic](#aesdecryptbasic) |AESDecryptBasic 使用 AES 算法对数据进行解密，支持多种模式(CBC、CFB、ECB、OFB、CTR) 注意：此函数是底层高级用法，需要外部自行处理 padding、key、iv 等问题。 参数: - key: 密钥(16/24/32 字节) - data: 待解密的密文字节 - ...|
| [codec.AESDecryptCFBWithPKCSPadding](#aesdecryptcfbwithpkcspadding) |AESDecryptCFBWithPKCSPadding 使用 AES 算法在 CFB 模式下用 PKCS7 填充解密数据 密钥长度必须是 16/24/32 字节(分别对应 AES-128/192/256)；iv 为 nil 时使用 key 前 16 字节作为 iv。 注意：AESCFBDecryp...|
| [codec.AESDecryptCFBWithZeroPadding](#aesdecryptcfbwithzeropadding) |AESDecryptCFBWithZeroPadding 使用 AES 算法在 CFB 模式下用零(Zero)填充解密数据 密钥长度必须是 16/24/32 字节(分别对应 AES-128/192/256)；iv 为 nil 时使用 key 前 16 字节作为 iv。 参数: - key: 密钥(1...|
| [codec.AESECBDecrypt](#aesecbdecrypt) |AESDecryptECBWithPKCSPadding 使用 AES 算法在 ECB 模式下用 PKCS7 填充解密数据(ECB 模式下 iv 无用，传 nil) 密钥长度必须是 16/24/32 字节(分别对应 AES-128/192/256)。 注意：AESECBDecrypt 和 AESDe...|
| [codec.AESECBDecryptWithPKCS7Padding](#aesecbdecryptwithpkcs7padding) |AESDecryptECBWithPKCSPadding 使用 AES 算法在 ECB 模式下用 PKCS7 填充解密数据(ECB 模式下 iv 无用，传 nil) 密钥长度必须是 16/24/32 字节(分别对应 AES-128/192/256)。 注意：AESECBDecrypt 和 AESDe...|
| [codec.AESECBDecryptWithZeroPadding](#aesecbdecryptwithzeropadding) |AESDecryptECBWithZeroPadding 使用 AES 算法在 ECB 模式下用零(Zero)填充解密数据(ECB 模式下 iv 无用，传 nil) 密钥长度必须是 16/24/32 字节(分别对应 AES-128/192/256)。 参数: - key: 密钥(16/24/32 字...|
| [codec.AESECBEncrypt](#aesecbencrypt) |AESEncryptECBWithPKCSPadding 使用 AES 算法在 ECB 模式下用 PKCS7 填充加密数据(ECB 模式下 iv 无用，传 nil) 密钥长度必须是 16/24/32 字节(分别对应 AES-128/192/256)。 注意：AESECBEncrypt 和 AESEC...|
| [codec.AESECBEncryptWithPKCS7Padding](#aesecbencryptwithpkcs7padding) |AESEncryptECBWithPKCSPadding 使用 AES 算法在 ECB 模式下用 PKCS7 填充加密数据(ECB 模式下 iv 无用，传 nil) 密钥长度必须是 16/24/32 字节(分别对应 AES-128/192/256)。 注意：AESECBEncrypt 和 AESEC...|
| [codec.AESECBEncryptWithZeroPadding](#aesecbencryptwithzeropadding) |AESEncryptECBWithZeroPadding 使用 AES 算法在 ECB 模式下用零(Zero)填充加密数据(ECB 模式下 iv 无用，传 nil) 密钥长度必须是 16/24/32 字节(分别对应 AES-128/192/256)。 参数: - key: 密钥(16/24/32 字...|
| [codec.AESEncrypt](#aesencrypt) |AESEncryptCBCWithPKCSPadding 使用 AES 算法在 CBC 模式下用 PKCS7 填充加密数据 密钥长度必须是 16/24/32 字节(分别对应 AES-128/192/256)；iv 为 nil 时使用 key 前 16 字节作为 iv。 注意：AESCBCEncryp...|
| [codec.AESEncryptBasic](#aesencryptbasic) |AESEncryptBasic 使用 AES 算法对数据进行加密，支持多种模式(CBC、CFB、ECB、OFB、CTR) 注意：此函数是底层高级用法，需要外部自行处理 padding、key、iv 等问题。 参数: - key: 密钥(16/24/32 字节) - data: 待加密的数据字节 - ...|
| [codec.AESEncryptCFBWithPKCSPadding](#aesencryptcfbwithpkcspadding) |AESEncryptCFBWithPKCSPadding 使用 AES 算法在 CFB 模式下用 PKCS7 填充加密数据 密钥长度必须是 16/24/32 字节(分别对应 AES-128/192/256)；iv 为 nil 时使用 key 前 16 字节作为 iv。 注意：AESCFBEncryp...|
| [codec.AESEncryptCFBWithZeroPadding](#aesencryptcfbwithzeropadding) |AESEncryptCFBWithZeroPadding 使用 AES 算法在 CFB 模式下用零(Zero)填充加密数据 密钥长度必须是 16/24/32 字节(分别对应 AES-128/192/256)；iv 为 nil 时使用 key 前 16 字节作为 iv。 参数: - key: 密钥(1...|
| [codec.AESGCMDecrypt](#aesgcmdecrypt) |AESGCMDecrypt 使用 AES-GCM 认证加密模式解密数据；nonce 为空时从密文前置部分提取 nonce 密钥长度必须是 16/24/32 字节；nonce 长度为 16 时用 16，否则用 12。 参数: - key: 密钥(16/24/32 字节) - data: 待解密的密文，...|
| [codec.AESGCMDecryptWithNonceSize12](#aesgcmdecryptwithnoncesize12) |AESGCMDecryptWithNonceSize12 使用 AES-GCM 模式以 12 字节 nonce 解密数据 参数: - key: 密钥(16/24/32 字节) - data: 待解密的密文，可为 []byte 等 - nonce: nonce(随机数)，传 nil 则从密文前 12 ...|
| [codec.AESGCMDecryptWithNonceSize16](#aesgcmdecryptwithnoncesize16) |AESGCMDecryptWithNonceSize16 使用 AES-GCM 模式以 16 字节 nonce 解密数据 参数: - key: 密钥(16/24/32 字节) - data: 待解密的密文，可为 []byte 等 - nonce: nonce(随机数)，传 nil 则从密文前 16 ...|
| [codec.AESGCMEncrypt](#aesgcmencrypt) |//AES GCM 加密后的payload shiro 1.4.2版本更换为了AES-GCM加密方式 func AES_GCM_Encrypt(key []byte, Content []byte) string { block, _ := aes.NewCipher(key) nonce := m...|
| [codec.AESGCMEncryptWithNonceSize12](#aesgcmencryptwithnoncesize12) |AESGCMEncryptWithNonceSize12 使用 AES-GCM 模式以 12 字节 nonce 加密数据 参数: - key: 密钥(16/24/32 字节) - data: 待加密的数据，可为 string、[]byte 等 - nonceRaw: nonce(随机数)，传 nil...|
| [codec.AESGCMEncryptWithNonceSize16](#aesgcmencryptwithnoncesize16) |//AES GCM 加密后的payload shiro 1.4.2版本更换为了AES-GCM加密方式 func AES_GCM_Encrypt(key []byte, Content []byte) string { block, _ := aes.NewCipher(key) nonce := m...|
| [codec.AutoDecode](#autodecode) |AutoDecode 自动识别并逐层解码输入数据(依次尝试 URL/HTML 实体/Hex/Unicode/Base32/Base64/JWT/字符集等) 参数: - i: 待自动解码的数据，可为 string、[]byte 等 返回值: - 解码过程的结果列表，每个元素含 Type(编码类型)、O...|
| [codec.CryptoRandBytes](#cryptorandbytes) |RandBytes 生成 n 个密码学安全的随机字节 参数: - n: 需要生成的随机字节数量 返回值: - 长度为 n 的随机字节切片(读取失败时返回 nil)|
| [codec.DESCBCDecrypt](#descbcdecrypt) |DESDecryptCBCWithZeroPadding 使用 DES 算法在 CBC 模式下用零填充解密数据 密钥长度必须是 8 字节，iv 可为 nil 或 8 字节；iv 为 nil 时固定为密钥或零填充到 8 字节。 注意：DESCBCDecrypt、DESDecrypt 和本函数是同一个函...|
| [codec.DESCBCEncrypt](#descbcencrypt) |DESEncryptCBCWithZeroPadding 使用 DES 算法在 CBC 模式下用零填充加密数据 密钥长度必须是 8 字节，iv 可为 nil 或 8 字节；iv 为 nil 时固定为密钥或零填充到 8 字节。 注意：DESCBCEncrypt、DESEncrypt 和本函数是同一个函...|
| [codec.DESDecrypt](#desdecrypt) |DESDecryptCBCWithZeroPadding 使用 DES 算法在 CBC 模式下用零填充解密数据 密钥长度必须是 8 字节，iv 可为 nil 或 8 字节；iv 为 nil 时固定为密钥或零填充到 8 字节。 注意：DESCBCDecrypt、DESDecrypt 和本函数是同一个函...|
| [codec.DESECBDecrypt](#desecbdecrypt) |DESECBDec 使用 DES 算法在 ECB 模式下用零填充解密数据(ECB 模式下无 iv 参数) 密钥长度必须是 8 字节。 参数: - key: 密钥(8 字节) - data: 待解密的密文字节 返回值: - []byte: 解密还原后的明文字节 - error: 解密失败时返回的错误|
| [codec.DESECBEncrypt](#desecbencrypt) |DESECBEnc 使用 DES 算法在 ECB 模式下用零填充加密数据(ECB 模式下无 iv 参数) 密钥长度必须是 8 字节。 参数: - key: 密钥(8 字节) - data: 待加密的数据字节 返回值: - []byte: 加密后的密文字节 - error: 加密失败时返回的错误|
| [codec.DESEncrypt](#desencrypt) |DESEncryptCBCWithZeroPadding 使用 DES 算法在 CBC 模式下用零填充加密数据 密钥长度必须是 8 字节，iv 可为 nil 或 8 字节；iv 为 nil 时固定为密钥或零填充到 8 字节。 注意：DESCBCEncrypt、DESEncrypt 和本函数是同一个函...|
| [codec.DecodeASCII](#decodeascii) |Unquote interprets s as a single-quoted, double-quoted, or backquoted Go string literal, returning the string value that s quotes. (If s is single-quo...|
| [codec.DecodeBase32](#decodebase32) |DecodeBase32 将标准 Base32 字符串解码为原始字节 参数: - i: 待解码的标准 Base32 字符串 返回值: - []byte: 解码后的原始字节 - error: 解码失败时返回的错误|
| [codec.DecodeBase64](#decodebase64) |DecodeBase64 将标准 Base64 字符串解码为原始字节 参数: - i: 待解码的标准 Base64 字符串 返回值: - []byte: 解码后的原始字节 - error: 解码失败时返回的错误|
| [codec.DecodeBase64Url](#decodebase64url) |DecodeBase64Url 将 URL 安全的 Base64 字符串解码为原始字节 参数: - i: 待解码的 URL 安全 Base64 字符串 返回值: - []byte: 解码后的原始字节 - error: 解码失败时返回的错误|
| [codec.DecodeChunked](#decodechunked) |HTTPChunkedDecode 解码 HTTP Transfer-Encoding: chunked 分块传输数据，还原原始 body 参数: - raw: 分块编码后的字节数据 返回值: - []byte: 解码还原后的原始 body - error: 解码失败时返回的错误|
| [codec.DecodeHex](#decodehex) |DecodeHex 将十六进制(Hex)字符串解码为原始字节，支持可选的 0x 前缀 参数: - i: 待解码的十六进制字符串 返回值: - []byte: 解码后的原始字节 - error: 解码失败时返回的错误|
| [codec.DecodeHtml](#decodehtml) |UnescapeString unescapes entities like &#34;&amp;lt;&#34; to become &#34;&lt;&#34;. It unescapes a larger range of entities than EscapeString escapes. For example, &#34;&amp;aacute;...|
| [codec.DecodeUrl](#decodeurl) |QueryUnescape 对 URL 百分号编码的字符串做查询串解码，同时兼容 %uXXXX 形式 参数: - s: 待解码的 URL 编码字符串 返回值: - string: 解码后的字符串 - error: 解码失败时返回的错误|
| [codec.DoubleDecodeUrl](#doubledecodeurl) ||
| [codec.DoubleEncodeUrl](#doubleencodeurl) ||
| [codec.EncodeASCII](#encodeascii) |StrConvQuoteHex 将字符串转换为带双引号的可打印形式，非字母数字字节统一转义为 \xNN 参数: - s: 待转换的字符串 返回值: - 带双引号、非字母数字字节转义为 \xNN 的字符串|
| [codec.EncodeBase32](#encodebase32) |EncodeBase32 将输入数据编码为标准 Base32 字符串 参数: - i: 待编码的数据，可为 string、[]byte 等 返回值: - 标准 Base32 编码后的字符串|
| [codec.EncodeBase64](#encodebase64) |EncodeBase64 将输入数据编码为标准 Base64 字符串 参数: - i: 待编码的数据，可为 string、[]byte 等 返回值: - 标准 Base64 编码后的字符串|
| [codec.EncodeBase64Url](#encodebase64url) |EncodeBase64Url 将输入数据编码为 URL 安全的 Base64 字符串(用 - _ 替换 + /，并去掉末尾的 =) 参数: - i: 待编码的数据，可为 string、[]byte 等 返回值: - URL 安全的 Base64 编码字符串|
| [codec.EncodeChunked](#encodechunked) |HTTPChunkedEncode 将原始数据编码为 HTTP Transfer-Encoding: chunked 分块传输格式 参数: - raw: 待编码的原始 body 字节 返回值: - 分块编码后的字节数据|
| [codec.EncodeHtml](#encodehtml) |EncodeHtmlEntity 将输入数据的每个字节编码为十进制 HTML 实体(如 &lt; 编码为 &amp;#60;)，常用于 XSS 构造 参数: - i: 待编码的数据，可为 string、[]byte 等 返回值: - 十进制 HTML 实体字符串|
| [codec.EncodeHtmlHex](#encodehtmlhex) |EncodeHtmlEntityHex 将输入数据的每个字节编码为十六进制 HTML 实体(如 &lt; 编码为 &amp;#x3c;)，常用于 XSS 构造 参数: - i: 待编码的数据，可为 string、[]byte 等 返回值: - 十六进制 HTML 实体字符串|
| [codec.EncodeToHex](#encodetohex) |EncodeToHex 将输入数据编码为十六进制(Hex)字符串 参数: - i: 待编码的数据，可为 string、[]byte 等 返回值: - 十六进制编码后的字符串|
| [codec.EncodeToPrintable](#encodetoprintable) |StrConvQuoteHex 将字符串转换为带双引号的可打印形式，非字母数字字节统一转义为 \xNN 参数: - s: 待转换的字符串 返回值: - 带双引号、非字母数字字节转义为 \xNN 的字符串|
| [codec.EncodeUrl](#encodeurl) |EncodeUrlCode 对输入数据做激进的百分号(URL)编码，把每个字节都编码成 %xx 形式 参数: - i: 待编码的数据，可为 string、[]byte 等 返回值: - 百分号编码后的字符串|
| [codec.EscapeHtml](#escapehtml) |EscapeString escapes special characters like &#34;&lt;&#34; to become &#34;&amp;lt;&#34;. It escapes only five such characters: &lt;, &gt;, &amp;, &#39; and &#34;. UnescapeString(EscapeString...|
| [codec.EscapePathUrl](#escapepathurl) |PathEscape escapes the string so it can be safely placed inside a [URL] path segment, replacing special characters (including /) with %XX sequences as...|
| [codec.EscapeQueryUrl](#escapequeryurl) |QueryEscape 对字符串做 URL 查询串转义，把保留字符(如空格、= 、&amp;)转义为 %xx(空格转为 +) 参数: - s: 待转义的字符串 返回值: - 转义后的查询串字符串|
| [codec.EscapeUrl](#escapeurl) |QueryEscape 对字符串做 URL 查询串转义，把保留字符(如空格、= 、&amp;)转义为 %xx(空格转为 +) 参数: - s: 待转义的字符串 返回值: - 转义后的查询串字符串|
| [codec.FixUTF8](#fixutf8) |EscapeInvalidUTF8Byte 将字节数据中的非法 UTF-8 字节与不可见控制字符转义为 \xNN 形式，得到可读字符串 参数: - s: 待修复的字节数据(可能含非法 UTF-8 或控制字符) 返回值: - 修复/转义后的可读 UTF-8 字符串|
| [codec.GB18030ToUTF8](#gb18030toutf8) |GB18030ToUtf8 将 GB18030 编码的字节转换为 UTF-8 字节 参数: - s: GB18030 编码的字节数据 返回值: - []byte: 转换后的 UTF-8 字节 - error: 转换失败时返回的错误|
| [codec.GBKSafe](#gbksafe) |GBKSafeString 将字节数据安全转换为可读字符串：已是合法 UTF-8 则原样返回，否则尝试按 GBK 解码为 UTF-8 参数: - s: 待转换的字节数据(可能是 UTF-8 或 GBK) 返回值: - string: 转换后的可读字符串 - error: 既非合法 UTF-8 又无法...|
| [codec.GBKToUTF8](#gbktoutf8) |GbkToUtf8 将 GBK 编码的字节转换为 UTF-8 字节 参数: - s: GBK 编码的字节数据 返回值: - []byte: 转换后的 UTF-8 字节 - error: 转换失败时返回的错误|
| [codec.HTMLChardet](#htmlchardet) |CharDetect 检测输入数据可能的字符集编码，返回所有候选结果(按置信度排序) 参数: - raw: 待检测的数据，可为 string、[]byte 等 返回值: - []chardet.Result: 候选字符集检测结果列表(含 Charset、Confidence 等字段) - error...|
| [codec.HTMLChardetBest](#htmlchardetbest) |CharDetectBest 检测输入数据最可能的字符集编码，返回置信度最高的单个结果 参数: - raw: 待检测的数据，可为 string、[]byte 等 返回值: - *chardet.Result: 置信度最高的字符集检测结果(含 Charset、Confidence 等字段) - err...|
| [codec.HZGB2312ToUTF8](#hzgb2312toutf8) |HZGB2312ToUtf8 将 HZ-GB2312 编码的字节转换为 UTF-8 字节 参数: - s: HZ-GB2312(兼容 GB18030 解码)编码的字节数据 返回值: - []byte: 转换后的 UTF-8 字节 - error: 转换失败时返回的错误|
| [codec.HmacMD5](#hmacmd5) |HmacMD5 使用给定密钥计算数据的 HMAC-MD5 消息认证码，返回字节切片 参数: - key: 密钥，可为 string、[]byte 等 - data: 待认证的数据，可为 string、[]byte 等 返回值: - HMAC-MD5 结果字节切片(16 字节，转 hex 后长度 32...|
| [codec.HmacSM3](#hmacsm3) |HmacSM3 使用给定密钥计算数据的国密 HMAC-SM3 消息认证码，返回字节切片 参数: - key: 密钥，可为 string、[]byte 等 - data: 待认证的数据，可为 string、[]byte 等 返回值: - HMAC-SM3 结果字节切片(32 字节，转 hex 后长度 ...|
| [codec.HmacSha1](#hmacsha1) |HmacSha1 使用给定密钥计算数据的 HMAC-SHA1 消息认证码，返回字节切片 参数: - key: 密钥，可为 string、[]byte 等 - data: 待认证的数据，可为 string、[]byte 等 返回值: - HMAC-SHA1 结果字节切片(20 字节，转 hex 后长度...|
| [codec.HmacSha256](#hmacsha256) |HmacSha256 使用给定密钥计算数据的 HMAC-SHA256 消息认证码，返回字节切片 参数: - key: 密钥，可为 string、[]byte 等 - data: 待认证的数据，可为 string、[]byte 等 返回值: - HMAC-SHA256 结果字节切片(32 字节，转 h...|
| [codec.HmacSha512](#hmacsha512) |HmacSha512 使用给定密钥计算数据的 HMAC-SHA512 消息认证码，返回字节切片 参数: - key: 密钥，可为 string、[]byte 等 - data: 待认证的数据，可为 string、[]byte 等 返回值: - HMAC-SHA512 结果字节切片(64 字节，转 h...|
| [codec.IsUTF8](#isutf8) |IsUTF8 判断输入数据是否为合法的 UTF-8 编码 参数: - i: 待检测的数据，可为 string、[]byte、io.Reader 等 返回值: - bool: 是合法 UTF-8 返回 true，否则 false - error: 读取数据失败时返回的错误|
| [codec.IsUTF8File](#isutf8file) |IsUTF8File 使用采样策略判断文件内容是否为合法 UTF-8 编码 小于 0.5K 的文件检查全部内容；0.5K-1K 检查一个 0.5K 采样；大于 1K 采样 4-8 段(每段约 256 个字符)。 参数: - filename: 待检测的文件路径 返回值: - bool: 文件内容为合...|
| [codec.MMH3Hash128](#mmh3hash128) |MMH3Hash128 计算输入数据的 MurmurHash3 128 位哈希并返回十六进制字符串 参数: - i: 待哈希的数据，可为 string、[]byte 等 返回值: - 32 位十六进制 MurmurHash3 128 位哈希字符串|
| [codec.MMH3Hash128x64](#mmh3hash128x64) |MMH3Hash128x64 计算输入数据的 MurmurHash3 128 位(x64 变体)哈希并返回十六进制字符串 参数: - i: 待哈希的数据，可为 string、[]byte 等 返回值: - 32 位十六进制 MurmurHash3 128 位(x64)哈希字符串|
| [codec.MMH3Hash32](#mmh3hash32) |MMH3Hash32 计算输入数据的 MurmurHash3 32 位非加密快速哈希，返回数值 参数: - i: 待哈希的数据，可为 string、[]byte 等 返回值: - MurmurHash3 32 位哈希值(int64)|
| [codec.Md5](#md5) |Md5 计算输入数据的 MD5 摘要并返回十六进制字符串 参数: - i: 待计算摘要的数据，可为 string、[]byte 等 返回值: - 32 位十六进制 MD5 摘要字符串|
| [codec.PBKDF2SHA1Key](#pbkdf2sha1key) |PBKDF2SHA1Key 使用 PBKDF2-HMAC-SHA1 从口令与盐派生固定长度的密钥(如微信 wxapkg V1MMWX 解密) 参数: - password: 口令，可为 string、[]byte 等 - salt: 盐值，可为 string、[]byte 等 - iteration...|
| [codec.PKCS5Padding](#pkcs5padding) |PKCS5Padding 对数据按指定块大小做 PKCS5/PKCS7 填充，使其长度补齐到块大小的整数倍 参数: - ciphertext: 待填充的原始数据 - blockSize: 块大小(字节)，如 8 或 16 返回值: - 填充后的字节切片|
| [codec.PKCS5UnPadding](#pkcs5unpadding) |PKCS5UnPadding 去除数据末尾的 PKCS5/PKCS7 填充，返回原始数据 参数: - origData: 带填充的数据 返回值: - 去除填充后的字节切片|
| [codec.PKCS7Padding](#pkcs7padding) ||
| [codec.PKCS7PaddingForDES](#pkcs7paddingfordes) |PKCS7PaddingFor8ByteBlock 按 8 字节块大小对数据做 PKCS7/PKCS5 填充(常用于 DES) 参数: - src: 待填充的数据字节 返回值: - 填充到 8 字节整数倍后的数据字节|
| [codec.PKCS7UnPadding](#pkcs7unpadding) ||
| [codec.PKCS7UnPaddingForDES](#pkcs7unpaddingfordes) |PKCS7UnPaddingFor8ByteBlock 去除 8 字节块大小的 PKCS7/PKCS5 填充(常用于 DES) 参数: - src: 含 PKCS7 填充的数据字节 返回值: - 去除填充后的原始数据字节|
| [codec.RC4Decrypt](#rc4decrypt) |RC4Decrypt 使用 RC4 流密码解密数据(RC4 加解密为同一运算) 参数: - cipherKey: RC4 密钥(长度可变) - cipherText: 待解密的密文字节 返回值: - []byte: 解密还原后的明文字节 - error: 密钥非法等错误|
| [codec.RC4Encrypt](#rc4encrypt) |RC4Encrypt 使用 RC4 流密码加密数据(RC4 加解密为同一运算) 参数: - cipherKey: RC4 密钥(长度可变) - plainText: 待加密的明文字节 返回值: - []byte: 加密后的密文字节 - error: 密钥非法等错误|
| [codec.RSADecryptWithJSEncryptStyle](#rsadecryptwithjsencryptstyle) |RSADecryptWithJSEncryptStyle is an alias for PKCS#1 v1.5 block decryption compatibility.|
| [codec.RSADecryptWithOAEP](#rsadecryptwithoaep) |RSADecryptWithOAEP 使用 RSA私钥 和 RSA-OAEP 填充方式解密给定的密文。 参数 raw 表示 RSA 私钥，支持以下格式： - DER 编码的私钥（raw ASN.1 DER 字节流） - Base64 编码的 DER 格式（自动解码） - PEM 编码（包括带有 &#34;-...|
| [codec.RSADecryptWithPKCS1v15](#rsadecryptwithpkcs1v15) |DecryptWithPkcs1v15/RSADecryptWithPKCS1v15 使用 RSA私钥 和 PKCS#1 v1.5填充方式 解密给定的密文。 参数 raw 表示 RSA 私钥，支持以下格式： - DER 编码的私钥（raw ASN.1 DER 字节流） - Base64 编码的 DE...|
| [codec.RSADecryptWithPKCS1v15Block](#rsadecryptwithpkcs1v15block) |RSADecryptWithPKCS1v15Block decrypts ciphertext with PKCS#1 v1.5 and automatically chunks by key size.|
| [codec.RSAEncryptWithJSEncryptStyle](#rsaencryptwithjsencryptstyle) |RSAEncryptWithJSEncryptStyle is an alias for PKCS#1 v1.5 block encryption compatibility.|
| [codec.RSAEncryptWithOAEP](#rsaencryptwithoaep) |RSAEncryptWithOAEP 使用 RSA 公钥和 OAEP 填充方式对给定数据进行加密。 参数 raw 表示 RSA 公钥，支持以下格式： - DER 编码的公钥（raw ASN.1 DER 字节流） - Base64 编码的 DER 格式（自动解码） - PEM 编码（例如 &#34;-----...|
| [codec.RSAEncryptWithPKCS1v15](#rsaencryptwithpkcs1v15) |EncryptWithPkcs1v15/RSAEncryptWithPKCS1v15 使用 RSA 公钥和 PKCS#1 v1.5 填充方式对给定数据进行加密。 参数: - raw: RSA 公钥（支持 DER/PEM/Base64 等格式） - data: 要加密的明文数据（[]byte、stri...|
| [codec.RSAEncryptWithPKCS1v15Block](#rsaencryptwithpkcs1v15block) |RSAEncryptWithPKCS1v15Block encrypts plaintext with PKCS#1 v1.5 and automatically chunks long plaintext.|
| [codec.RSASignWithPKCS1v15Digest](#rsasignwithpkcs1v15digest) |RSASignWithPKCS1v15Digest signs data using PKCS#1 v1.5 with sha256/sha512.|
| [codec.RSAVerifyWithPKCS1v15Digest](#rsaverifywithpkcs1v15digest) |RSAVerifyWithPKCS1v15Digest verifies RSA signature using PKCS#1 v1.5 with sha256/sha512.|
| [codec.RandBytes](#randbytes) |RandBytes 生成 n 个密码学安全的随机字节 参数: - n: 需要生成的随机字节数量 返回值: - 长度为 n 的随机字节切片(读取失败时返回 nil)|
| [codec.Sha1](#sha1) |Sha1 计算输入数据的 SHA-1 摘要并返回十六进制字符串 参数: - i: 待计算摘要的数据，可为 string、[]byte 等 返回值: - 40 位十六进制 SHA-1 摘要字符串|
| [codec.Sha224](#sha224) |Sha224 计算输入数据的 SHA-224 摘要并返回十六进制字符串 参数: - i: 待计算摘要的数据，可为 string、[]byte 等 返回值: - 56 位十六进制 SHA-224 摘要字符串|
| [codec.Sha256](#sha256) |Sha256 计算输入数据的 SHA-256 摘要并返回十六进制字符串 参数: - i: 待计算摘要的数据，可为 string、[]byte 等 返回值: - 64 位十六进制 SHA-256 摘要字符串|
| [codec.Sha384](#sha384) |Sha384 计算输入数据的 SHA-384 摘要并返回十六进制字符串 参数: - i: 待计算摘要的数据，可为 string、[]byte 等 返回值: - 96 位十六进制 SHA-384 摘要字符串|
| [codec.Sha512](#sha512) |Sha512 计算输入数据的 SHA-512 摘要并返回十六进制字符串 参数: - i: 待计算摘要的数据，可为 string、[]byte 等 返回值: - 128 位十六进制 SHA-512 摘要字符串|
| [codec.SignSHA256WithRSA](#signsha256withrsa) |SignSHA256WithRSA 使用RSA私钥对数据进行SHA256签名，返回签名与错误|
| [codec.SignSHA512WithRSA](#signsha512withrsa) |SignSHA512WithRSA 使用RSA私钥对数据进行SHA512签名，返回签名与错误|
| [codec.SignVerifySHA256WithRSA](#signverifysha256withrsa) |SignVerifySHA256WithRSA 使用RSA公钥对数据进行SHA256签名验证，返回错误|
| [codec.SignVerifySHA512WithRSA](#signverifysha512withrsa) |SignVerifySHA512WithRSA 使用RSA公钥对数据进行SHA512签名验证，返回错误|
| [codec.Sm2Decrypt](#sm2decrypt) |SM2DecryptC1C2C3 使用国密 SM2 私钥按 C1C2C3 密文排列解密数据 注意：Sm2Decrypt 和 Sm2DecryptC1C2C3 是同一个函数的别名 参数: - priKey: SM2 私钥(支持 PEM/HEX/原始字节) - data: 待解密的密文字节 返回值: -...|
| [codec.Sm2DecryptAsn1](#sm2decryptasn1) |SM2DecryptASN1 使用国密 SM2 私钥按 ASN.1 编码格式解密数据 注意：Sm2DecryptAsn1 是本函数的导出名 参数: - priKey: SM2 私钥(支持 PEM/HEX/原始字节) - data: 待解密的 ASN.1 编码密文字节 返回值: - []byte: 解...|
| [codec.Sm2DecryptAsn1WithPassword](#sm2decryptasn1withpassword) |SM2DecryptASN1WithPassword 使用带密码保护的国密 SM2 私钥按 ASN.1 编码格式解密数据 注意：Sm2DecryptAsn1WithPassword 是本函数的导出名 参数: - priKey: SM2 私钥(支持 PEM/HEX/原始字节，可为加密私钥) - dat...|
| [codec.Sm2DecryptC1C2C3](#sm2decryptc1c2c3) |SM2DecryptC1C2C3 使用国密 SM2 私钥按 C1C2C3 密文排列解密数据 注意：Sm2Decrypt 和 Sm2DecryptC1C2C3 是同一个函数的别名 参数: - priKey: SM2 私钥(支持 PEM/HEX/原始字节) - data: 待解密的密文字节 返回值: -...|
| [codec.Sm2DecryptC1C2C3WithPassword](#sm2decryptc1c2c3withpassword) |SM2DecryptC1C2C3WithPassword 使用带密码保护的国密 SM2 私钥按 C1C2C3 密文排列解密数据 参数: - priKey: SM2 私钥(支持 PEM/HEX/原始字节，可为加密私钥) - data: 待解密的密文字节 - password: 私钥保护密码，未加密时传...|
| [codec.Sm2DecryptC1C3C2](#sm2decryptc1c3c2) |SM2DecryptC1C3C2 使用国密 SM2 私钥按 C1C3C2 密文排列解密数据 参数: - priKey: SM2 私钥(支持 PEM/HEX/原始字节) - data: 待解密的密文字节 返回值: - []byte: 解密还原后的明文字节 - error: 解密失败时返回的错误|
| [codec.Sm2DecryptC1C3C2WithPassword](#sm2decryptc1c3c2withpassword) |SM2DecryptC1C3C2WithPassword 使用带密码保护的国密 SM2 私钥按 C1C3C2 密文排列解密数据 参数: - priKey: SM2 私钥(支持 PEM/HEX/原始字节，可为加密私钥) - data: 待解密的密文字节 - password: 私钥保护密码，未加密时传...|
| [codec.Sm2Encrypt](#sm2encrypt) |SM2EncryptC1C2C3 使用国密 SM2 公钥按 C1C2C3 密文排列加密数据 注意：Sm2Encrypt 和 Sm2EncryptC1C2C3 是同一个函数的别名 参数: - pubKey: SM2 公钥(支持 PEM/HEX/原始字节) - data: 待加密的数据字节 返回值: -...|
| [codec.Sm2EncryptAsn1](#sm2encryptasn1) |SM2EncryptASN1 使用国密 SM2 公钥按 ASN.1 编码格式加密数据 注意：Sm2EncryptAsn1 是本函数的导出名 参数: - pubKey: SM2 公钥(支持 PEM/HEX/原始字节) - data: 待加密的数据字节 返回值: - []byte: ASN.1 编码的密...|
| [codec.Sm2EncryptC1C2C3](#sm2encryptc1c2c3) |SM2EncryptC1C2C3 使用国密 SM2 公钥按 C1C2C3 密文排列加密数据 注意：Sm2Encrypt 和 Sm2EncryptC1C2C3 是同一个函数的别名 参数: - pubKey: SM2 公钥(支持 PEM/HEX/原始字节) - data: 待加密的数据字节 返回值: -...|
| [codec.Sm2EncryptC1C3C2](#sm2encryptc1c3c2) |SM2EncryptC1C3C2 使用国密 SM2 公钥按 C1C3C2 密文排列加密数据 参数: - pubKey: SM2 公钥(支持 PEM/HEX/原始字节) - data: 待加密的数据字节 返回值: - []byte: 加密后的密文字节(每次随机，结果不固定) - error: 加密失败...|
| [codec.Sm2GenerateHexKeyPair](#sm2generatehexkeypair) |GenerateSM2PrivateKeyHEX 生成一对国密 SM2 密钥(HEX 文本格式) 返回值: - []byte: SM2 私钥(HEX 文本) - []byte: SM2 公钥(HEX 文本) - error: 生成失败时返回的错误|
| [codec.Sm2GeneratePemKeyPair](#sm2generatepemkeypair) |GenerateSM2PrivateKeyPEM 生成一对国密 SM2 密钥(PEM 文本格式) 返回值: - []byte: SM2 私钥(PEM 文本) - []byte: SM2 公钥(PEM 文本) - error: 生成失败时返回的错误|
| [codec.Sm2GenerateTemporaryKeyPair](#sm2generatetemporarykeypair) |SM2GenerateTemporaryKeyPair 生成用于密钥交换的临时密钥对 返回值： - []byte: 临时私钥（HEX格式） - []byte: 临时公钥（HEX格式） - error: 错误信息|
| [codec.Sm2KeyExchange](#sm2keyexchange) |SM2KeyExchange 执行SM2密钥交换算法 参数说明： - keyLength: 期望的共享密钥长度（字节） - idA: A方标识（[]byte） - idB: B方标识（[]byte） - priKey: 调用方私钥（[]byte，支持PEM、HEX、原始字节） - pubKey: 对...|
| [codec.Sm2SignWithSM3](#sm2signwithsm3) |SM2SignWithSM3 使用国密 SM2 私钥对数据进行 SM3 签名，返回 ASN.1 DER 编码的签名 参数: - priKeyBytes: SM2 私钥(支持 PEM/HEX/32 字节原始字节) - data: 待签名的数据，可为 string、[]byte 等 返回值: - []b...|
| [codec.Sm2SignWithSM3WithPassword](#sm2signwithsm3withpassword) |SM2SignWithSM3WithPassword 使用带密码保护的国密 SM2 私钥对数据进行 SM3 签名 参数: - priKeyBytes: SM2 私钥(支持 PEM/HEX/原始字节，可为加密私钥) - data: 待签名的数据，可为 string、[]byte 等 - passwor...|
| [codec.Sm2VerifyWithSM3](#sm2verifywithsm3) |SM2VerifyWithSM3 使用国密 SM2 公钥对数据进行 SM3 签名验证，验证通过返回 nil 参数: - pubKeyBytes: SM2 公钥(支持 PEM/HEX/64 或 65 字节原始字节) - originData: 原始签名数据，可为 string、[]byte 等 - s...|
| [codec.Sm3](#sm3) |SM3 计算输入数据的国密 SM3 摘要，返回 32 字节摘要(注意是字节切片，打印前需用 codec.EncodeToHex 转可读) 参数: - raw: 待计算摘要的数据，可为 string、[]byte 等 返回值: - SM3 摘要字节切片(32 字节，转 hex 后长度 64)|
| [codec.Sm4CBCDecrypt](#sm4cbcdecrypt) |SM4DecryptCBCWithPKCSPadding 使用国密 SM4 算法在 CBC 模式下用 PKCS7 填充解密数据 密钥与 IV 均为 16 字节；IV 为空时使用 key 前 16 字节作为 IV。 注意：Sm4Decrypt、Sm4CBCDecrypt 和 Sm4CBCDecrypt...|
| [codec.Sm4CBCDecryptWithPKCSPadding](#sm4cbcdecryptwithpkcspadding) |SM4DecryptCBCWithPKCSPadding 使用国密 SM4 算法在 CBC 模式下用 PKCS7 填充解密数据 密钥与 IV 均为 16 字节；IV 为空时使用 key 前 16 字节作为 IV。 注意：Sm4Decrypt、Sm4CBCDecrypt 和 Sm4CBCDecrypt...|
| [codec.Sm4CBCDecryptWithZeroPadding](#sm4cbcdecryptwithzeropadding) ||
| [codec.Sm4CBCEncrypt](#sm4cbcencrypt) |SM4EncryptCBCWithPKCSPadding 使用国密 SM4 算法在 CBC 模式下用 PKCS7 填充加密数据 密钥与 IV 均为 16 字节；IV 为空时使用 key 前 16 字节作为 IV。 注意：Sm4Encrypt、Sm4CBCEncrypt 和 Sm4CBCEncrypt...|
| [codec.Sm4CBCEncryptWithPKCSPadding](#sm4cbcencryptwithpkcspadding) |SM4EncryptCBCWithPKCSPadding 使用国密 SM4 算法在 CBC 模式下用 PKCS7 填充加密数据 密钥与 IV 均为 16 字节；IV 为空时使用 key 前 16 字节作为 IV。 注意：Sm4Encrypt、Sm4CBCEncrypt 和 Sm4CBCEncrypt...|
| [codec.Sm4CBCEncryptWithZeroPadding](#sm4cbcencryptwithzeropadding) ||
| [codec.Sm4CFBDecrypt](#sm4cfbdecrypt) |SM4DecryptCFBWithPKCSPadding 使用国密 SM4 算法在 CFB 模式下用 PKCS7 填充解密数据 密钥与 IV 均为 16 字节；IV 为空时使用 key 前 16 字节作为 IV。 注意：Sm4CFBDecrypt 和 Sm4CFBDecryptWithPKCSPad...|
| [codec.Sm4CFBDecryptWithPKCSPadding](#sm4cfbdecryptwithpkcspadding) |SM4DecryptCFBWithPKCSPadding 使用国密 SM4 算法在 CFB 模式下用 PKCS7 填充解密数据 密钥与 IV 均为 16 字节；IV 为空时使用 key 前 16 字节作为 IV。 注意：Sm4CFBDecrypt 和 Sm4CFBDecryptWithPKCSPad...|
| [codec.Sm4CFBDecryptWithZeroPadding](#sm4cfbdecryptwithzeropadding) ||
| [codec.Sm4CFBEncrypt](#sm4cfbencrypt) |SM4EncryptCFBWithPKCSPadding 使用国密 SM4 算法在 CFB 模式下用 PKCS7 填充加密数据 密钥与 IV 均为 16 字节；IV 为空时使用 key 前 16 字节作为 IV。 注意：Sm4CFBEncrypt 和 Sm4CFBEncryptWithPKCSPad...|
| [codec.Sm4CFBEncryptWithPKCSPadding](#sm4cfbencryptwithpkcspadding) |SM4EncryptCFBWithPKCSPadding 使用国密 SM4 算法在 CFB 模式下用 PKCS7 填充加密数据 密钥与 IV 均为 16 字节；IV 为空时使用 key 前 16 字节作为 IV。 注意：Sm4CFBEncrypt 和 Sm4CFBEncryptWithPKCSPad...|
| [codec.Sm4CFBEncryptWithZeroPadding](#sm4cfbencryptwithzeropadding) ||
| [codec.Sm4CTRDecrypt](#sm4ctrdecrypt) ||
| [codec.Sm4CTRDecryptWithPKCSPadding](#sm4ctrdecryptwithpkcspadding) ||
| [codec.Sm4CTRDecryptWithZeroPadding](#sm4ctrdecryptwithzeropadding) ||
| [codec.Sm4CTREncrypt](#sm4ctrencrypt) ||
| [codec.Sm4CTREncryptWithPKCSPadding](#sm4ctrencryptwithpkcspadding) ||
| [codec.Sm4CTREncryptWithZeroPadding](#sm4ctrencryptwithzeropadding) ||
| [codec.Sm4Decrypt](#sm4decrypt) |SM4DecryptCBCWithPKCSPadding 使用国密 SM4 算法在 CBC 模式下用 PKCS7 填充解密数据 密钥与 IV 均为 16 字节；IV 为空时使用 key 前 16 字节作为 IV。 注意：Sm4Decrypt、Sm4CBCDecrypt 和 Sm4CBCDecrypt...|
| [codec.Sm4EBCDecrypt](#sm4ebcdecrypt) |SM4DecryptEBCWithPKCSPadding 使用国密 SM4 算法在 ECB 模式下用 PKCS7 填充解密数据(为兼容历史拼写错误保留) Deprecated: 请使用 Sm4ECBDecrypt(EBC 是 ECB 的拼写错误) 参数: - key: 密钥(16 字节) - i: ...|
| [codec.Sm4EBCEncrypt](#sm4ebcencrypt) |SM4EncryptEBCWithPKCSPadding 使用国密 SM4 算法在 ECB 模式下用 PKCS7 填充加密数据(为兼容历史拼写错误保留) Deprecated: 请使用 Sm4ECBEncrypt(EBC 是 ECB 的拼写错误) 参数: - key: 密钥(16 字节) - i: ...|
| [codec.Sm4ECBDecrypt](#sm4ecbdecrypt) |SM4DecryptECBWithPKCSPadding 使用国密 SM4 算法在 ECB 模式下用 PKCS7 填充解密数据(ECB 模式下 iv 无用，传 nil) 密钥为 16 字节。 注意：Sm4ECBDecrypt 和 Sm4ECBDecryptWithPKCSPadding 是同一个函数...|
| [codec.Sm4ECBDecryptWithPKCSPadding](#sm4ecbdecryptwithpkcspadding) |SM4DecryptECBWithPKCSPadding 使用国密 SM4 算法在 ECB 模式下用 PKCS7 填充解密数据(ECB 模式下 iv 无用，传 nil) 密钥为 16 字节。 注意：Sm4ECBDecrypt 和 Sm4ECBDecryptWithPKCSPadding 是同一个函数...|
| [codec.Sm4ECBDecryptWithZeroPadding](#sm4ecbdecryptwithzeropadding) ||
| [codec.Sm4ECBEncrypt](#sm4ecbencrypt) |SM4EncryptECBWithPKCSPadding 使用国密 SM4 算法在 ECB 模式下用 PKCS7 填充加密数据(ECB 模式下 iv 无用，传 nil) 密钥为 16 字节。 注意：Sm4ECBEncrypt 和 Sm4ECBEncryptWithPKCSPadding 是同一个函数...|
| [codec.Sm4ECBEncryptWithPKCSPadding](#sm4ecbencryptwithpkcspadding) |SM4EncryptECBWithPKCSPadding 使用国密 SM4 算法在 ECB 模式下用 PKCS7 填充加密数据(ECB 模式下 iv 无用，传 nil) 密钥为 16 字节。 注意：Sm4ECBEncrypt 和 Sm4ECBEncryptWithPKCSPadding 是同一个函数...|
| [codec.Sm4ECBEncryptWithZeroPadding](#sm4ecbencryptwithzeropadding) ||
| [codec.Sm4Encrypt](#sm4encrypt) |SM4EncryptCBCWithPKCSPadding 使用国密 SM4 算法在 CBC 模式下用 PKCS7 填充加密数据 密钥与 IV 均为 16 字节；IV 为空时使用 key 前 16 字节作为 IV。 注意：Sm4Encrypt、Sm4CBCEncrypt 和 Sm4CBCEncrypt...|
| [codec.Sm4GCMDecrypt](#sm4gcmdecrypt) |SM4GCMDec 使用国密 SM4 算法在 GCM 模式下解密数据 密钥与 IV 均为 16 字节；IV 为空时使用 key 前 16 字节作为 IV。 参数: - key: 密钥(16 字节) - data: 待解密的密文，可为 []byte 等 - iv: 初始化向量(16 字节)，可为 ni...|
| [codec.Sm4GCMEncrypt](#sm4gcmencrypt) |SM4GCMEnc 使用国密 SM4 算法在 GCM 模式下加密数据 密钥与 IV 均为 16 字节；IV 为空时使用 key 前 16 字节作为 IV。 参数: - key: 密钥(16 字节) - data: 待加密的数据，可为 string、[]byte 等 - iv: 初始化向量(16 字节...|
| [codec.Sm4OFBDecrypt](#sm4ofbdecrypt) |SM4DecryptOFBWithPKCSPadding 使用国密 SM4 算法在 OFB 模式下用 PKCS7 填充解密数据 密钥与 IV 均为 16 字节；IV 为空时使用 key 前 16 字节作为 IV。 注意：Sm4OFBDecrypt 和 Sm4OFBDecryptWithPKCSPad...|
| [codec.Sm4OFBDecryptWithPKCSPadding](#sm4ofbdecryptwithpkcspadding) |SM4DecryptOFBWithPKCSPadding 使用国密 SM4 算法在 OFB 模式下用 PKCS7 填充解密数据 密钥与 IV 均为 16 字节；IV 为空时使用 key 前 16 字节作为 IV。 注意：Sm4OFBDecrypt 和 Sm4OFBDecryptWithPKCSPad...|
| [codec.Sm4OFBDecryptWithZeroPadding](#sm4ofbdecryptwithzeropadding) ||
| [codec.Sm4OFBEncrypt](#sm4ofbencrypt) |SM4EncryptOFBWithPKCSPadding 使用国密 SM4 算法在 OFB 模式下用 PKCS7 填充加密数据 密钥与 IV 均为 16 字节；IV 为空时使用 key 前 16 字节作为 IV。 注意：Sm4OFBEncrypt 和 Sm4OFBEncryptWithPKCSPad...|
| [codec.Sm4OFBEncryptWithPKCSPadding](#sm4ofbencryptwithpkcspadding) |SM4EncryptOFBWithPKCSPadding 使用国密 SM4 算法在 OFB 模式下用 PKCS7 填充加密数据 密钥与 IV 均为 16 字节；IV 为空时使用 key 前 16 字节作为 IV。 注意：Sm4OFBEncrypt 和 Sm4OFBEncryptWithPKCSPad...|
| [codec.Sm4OFBEncryptWithZeroPadding](#sm4ofbencryptwithzeropadding) ||
| [codec.StrconvQuote](#strconvquote) |Quote returns a double-quoted Go string literal representing s. The returned string uses Go escape sequences (\t, \n, \xFF, \u0100) for control charac...|
| [codec.StrconvUnquote](#strconvunquote) |Unquote interprets s as a single-quoted, double-quoted, or backquoted Go string literal, returning the string value that s quotes. (If s is single-quo...|
| [codec.TripleDESCBCDecrypt](#tripledescbcdecrypt) |TripleDESDecryptCBCWithZeroPadding 使用 3DES(Triple DES) 算法在 CBC 模式下用零填充解密数据 密钥长度必须是 24 字节(即 3 * 8 字节)，iv 可为 nil 或 8 字节；iv 为 nil 时固定为密钥或零填充到 8 字节。 注意：Tr...|
| [codec.TripleDESCBCEncrypt](#tripledescbcencrypt) |TripleDESEncryptCBCWithZeroPadding 使用 3DES(Triple DES) 算法在 CBC 模式下用零填充加密数据 密钥长度必须是 24 字节(即 3 * 8 字节)，iv 可为 nil 或 8 字节；iv 为 nil 时固定为密钥。 注意：TripleDESCBC...|
| [codec.TripleDESDecrypt](#tripledesdecrypt) |TripleDESDecryptCBCWithZeroPadding 使用 3DES(Triple DES) 算法在 CBC 模式下用零填充解密数据 密钥长度必须是 24 字节(即 3 * 8 字节)，iv 可为 nil 或 8 字节；iv 为 nil 时固定为密钥或零填充到 8 字节。 注意：Tr...|
| [codec.TripleDESECBDecrypt](#tripledesecbdecrypt) |TripleDES_ECBDec 使用 3DES(Triple DES) 算法在 ECB 模式下用零填充解密数据(ECB 模式下无 iv 参数) 密钥长度必须是 24 字节(即 3 * 8 字节)。 参数: - key: 密钥(24 字节) - data: 待解密的密文字节 返回值: - []byt...|
| [codec.TripleDESECBEncrypt](#tripledesecbencrypt) |TripleDES_ECBEnc 使用 3DES(Triple DES) 算法在 ECB 模式下用零填充加密数据(ECB 模式下无 iv 参数) 密钥长度必须是 24 字节(即 3 * 8 字节)。 参数: - key: 密钥(24 字节) - data: 待加密的数据字节 返回值: - []byt...|
| [codec.TripleDESEncrypt](#tripledesencrypt) |TripleDESEncryptCBCWithZeroPadding 使用 3DES(Triple DES) 算法在 CBC 模式下用零填充加密数据 密钥长度必须是 24 字节(即 3 * 8 字节)，iv 可为 nil 或 8 字节；iv 为 nil 时固定为密钥。 注意：TripleDESCBC...|
| [codec.UTF8ToGB18030](#utf8togb18030) |Utf8ToGB18030 将 UTF-8 编码的字节转换为 GB18030 编码的字节 参数: - s: UTF-8 编码的字节数据 返回值: - []byte: 转换后的 GB18030 字节 - error: 转换失败时返回的错误|
| [codec.UTF8ToGBK](#utf8togbk) |Utf8ToGbk 将 UTF-8 编码的字节转换为 GBK 编码的字节 参数: - s: UTF-8 编码的字节数据 返回值: - []byte: 转换后的 GBK 字节 - error: 转换失败时返回的错误|
| [codec.UTF8ToHZGB2312](#utf8tohzgb2312) |Utf8ToHZGB2312 将 UTF-8 编码的字节转换为 HZ-GB2312 编码的字节 参数: - s: UTF-8 编码的字节数据 返回值: - []byte: 转换后的 HZ-GB2312 字节 - error: 转换失败时返回的错误|
| [codec.UnescapePathUrl](#unescapepathurl) |PathUnescape 对 URL 路径转义的字符串做解码，同时兼容 %uXXXX 形式 参数: - s: 待解码的 URL 路径转义字符串 返回值: - string: 解码后的字符串 - error: 解码失败时返回的错误|
| [codec.UnescapeQueryUrl](#unescapequeryurl) |QueryUnescape 对 URL 百分号编码的字符串做查询串解码，同时兼容 %uXXXX 形式 参数: - s: 待解码的 URL 编码字符串 返回值: - string: 解码后的字符串 - error: 解码失败时返回的错误|
| [codec.UnescapeString](#unescapestring) |UnescapeString 处理字符串中的转义字符，无需外层引号 支持 \&#34; \\ \n \r \t \xNN \uNNNN \UNNNNNNNN 等转义序列；与 codec.StrconvUnquote 不同，本函数不要求输入带引号包裹 参数: - s: 含转义序列的字符串(无需外层引号) 返回...|
| [codec.UnicodeDecode](#unicodedecode) |JsonUnicodeDecode 将 \uXXXX / \UXXXXXXXX 形式的 Unicode 转义序列解码为原始字符串 参数: - i: 含 Unicode 转义序列的字符串 返回值: - 解码后的原始字符串|
| [codec.UnicodeEncode](#unicodeencode) |JsonUnicodeEncode 将字符串的每个字符编码为 \uXXXX 形式的 Unicode 转义序列 参数: - i: 待编码的字符串 返回值: - \uXXXX 形式的 Unicode 转义字符串|
| [codec.ZeroPadding](#zeropadding) |ZeroPadding 对数据按指定块大小做零字节(0x00)填充，使其长度补齐到块大小的整数倍 参数: - origin: 待填充的原始数据 - blockSize: 块大小(字节)，如 8 或 16 返回值: - 填充后的字节切片|
| [codec.ZeroUnPadding](#zerounpadding) |ZeroUnPadding 去除数据末尾的零字节(0x00)填充，返回原始数据 参数: - originData: 带零填充的数据 返回值: - 去除零填充后的字节切片|


## 函数定义
### AESCBCDecrypt

#### 详细描述
AESDecryptCBCWithPKCSPadding 使用 AES 算法在 CBC 模式下用 PKCS7 填充解密数据

密钥长度必须是 16/24/32 字节(分别对应 AES-128/192/256)；iv 为 nil 时使用 key 前 16 字节作为 iv。

注意：AESCBCDecrypt、AESDecrypt 和 AESCBCDecryptWithPKCS7Padding 是同一个函数的别名

参数:

  - key: 密钥(16/24/32 字节)

  - i: 待解密的密文，可为 []byte 等

  - iv: 初始化向量(16 字节)，可为 nil



返回值:

  - []byte: 解密还原后的明文字节

  - error: 解密失败时返回的错误




Example:

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


#### 定义

`AESCBCDecrypt(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` | 密钥(16/24/32 字节) |
| i | `any` | 待解密的密文，可为 []byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |


### AESCBCDecryptWithPKCS7Padding

#### 详细描述
AESDecryptCBCWithPKCSPadding 使用 AES 算法在 CBC 模式下用 PKCS7 填充解密数据

密钥长度必须是 16/24/32 字节(分别对应 AES-128/192/256)；iv 为 nil 时使用 key 前 16 字节作为 iv。

注意：AESCBCDecrypt、AESDecrypt 和 AESCBCDecryptWithPKCS7Padding 是同一个函数的别名

参数:

  - key: 密钥(16/24/32 字节)

  - i: 待解密的密文，可为 []byte 等

  - iv: 初始化向量(16 字节)，可为 nil



返回值:

  - []byte: 解密还原后的明文字节

  - error: 解密失败时返回的错误




Example:

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


#### 定义

`AESCBCDecryptWithPKCS7Padding(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` | 密钥(16/24/32 字节) |
| i | `any` | 待解密的密文，可为 []byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |


### AESCBCDecryptWithZeroPadding

#### 详细描述
AESDecryptCBCWithZeroPadding 使用 AES 算法在 CBC 模式下用零(Zero)填充解密数据

密钥长度必须是 16/24/32 字节(分别对应 AES-128/192/256)；iv 为 nil 时使用 key 前 16 字节作为 iv。

参数:

  - key: 密钥(16/24/32 字节)

  - i: 待解密的密文，可为 []byte 等

  - iv: 初始化向量(16 字节)，可为 nil



返回值:

  - []byte: 解密还原后的明文字节(末尾零字节会被去除)

  - error: 解密失败时返回的错误




Example:

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


#### 定义

`AESCBCDecryptWithZeroPadding(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` | 密钥(16/24/32 字节) |
| i | `any` | 待解密的密文，可为 []byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 解密还原后的明文字节(末尾零字节会被去除) |
| r2 | `error` | 解密失败时返回的错误 |


### AESCBCEncrypt

#### 详细描述
AESEncryptCBCWithPKCSPadding 使用 AES 算法在 CBC 模式下用 PKCS7 填充加密数据

密钥长度必须是 16/24/32 字节(分别对应 AES-128/192/256)；iv 为 nil 时使用 key 前 16 字节作为 iv。

注意：AESCBCEncrypt、AESEncrypt 和 AESCBCEncryptWithPKCS7Padding 是同一个函数的别名

参数:

  - key: 密钥(16/24/32 字节)

  - i: 待加密的数据，可为 string、[]byte 等

  - iv: 初始化向量(16 字节)，可为 nil



返回值:

  - []byte: 加密后的密文字节

  - error: 加密失败(如密钥长度非法)时返回的错误




Example:

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


#### 定义

`AESCBCEncrypt(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` | 密钥(16/24/32 字节) |
| i | `any` | 待加密的数据，可为 string、[]byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 加密失败(如密钥长度非法)时返回的错误 |


### AESCBCEncryptWithPKCS7Padding

#### 详细描述
AESEncryptCBCWithPKCSPadding 使用 AES 算法在 CBC 模式下用 PKCS7 填充加密数据

密钥长度必须是 16/24/32 字节(分别对应 AES-128/192/256)；iv 为 nil 时使用 key 前 16 字节作为 iv。

注意：AESCBCEncrypt、AESEncrypt 和 AESCBCEncryptWithPKCS7Padding 是同一个函数的别名

参数:

  - key: 密钥(16/24/32 字节)

  - i: 待加密的数据，可为 string、[]byte 等

  - iv: 初始化向量(16 字节)，可为 nil



返回值:

  - []byte: 加密后的密文字节

  - error: 加密失败(如密钥长度非法)时返回的错误




Example:

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


#### 定义

`AESCBCEncryptWithPKCS7Padding(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` | 密钥(16/24/32 字节) |
| i | `any` | 待加密的数据，可为 string、[]byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 加密失败(如密钥长度非法)时返回的错误 |


### AESCBCEncryptWithZeroPadding

#### 详细描述
AESEncryptCBCWithZeroPadding 使用 AES 算法在 CBC 模式下用零(Zero)填充加密数据

密钥长度必须是 16/24/32 字节(分别对应 AES-128/192/256)；iv 为 nil 时使用 key 前 16 字节作为 iv。

参数:

  - key: 密钥(16/24/32 字节)

  - i: 待加密的数据，可为 string、[]byte 等

  - iv: 初始化向量(16 字节)，可为 nil



返回值:

  - []byte: 加密后的密文字节

  - error: 加密失败(如密钥长度非法)时返回的错误




Example:

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


#### 定义

`AESCBCEncryptWithZeroPadding(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` | 密钥(16/24/32 字节) |
| i | `any` | 待加密的数据，可为 string、[]byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 加密失败(如密钥长度非法)时返回的错误 |


### AESCFBDecrypt

#### 详细描述
AESDecryptCFBWithPKCSPadding 使用 AES 算法在 CFB 模式下用 PKCS7 填充解密数据

密钥长度必须是 16/24/32 字节(分别对应 AES-128/192/256)；iv 为 nil 时使用 key 前 16 字节作为 iv。

注意：AESCFBDecrypt 和 AESDecryptCFBWithPKCSPadding 是同一个函数的别名

参数:

  - key: 密钥(16/24/32 字节)

  - i: 待解密的密文，可为 []byte 等

  - iv: 初始化向量(16 字节)，可为 nil



返回值:

  - []byte: 解密还原后的明文字节

  - error: 解密失败时返回的错误




Example:

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


#### 定义

`AESCFBDecrypt(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` | 密钥(16/24/32 字节) |
| i | `any` | 待解密的密文，可为 []byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |


### AESCFBEncrypt

#### 详细描述
AESEncryptCFBWithPKCSPadding 使用 AES 算法在 CFB 模式下用 PKCS7 填充加密数据

密钥长度必须是 16/24/32 字节(分别对应 AES-128/192/256)；iv 为 nil 时使用 key 前 16 字节作为 iv。

注意：AESCFBEncrypt 和 AESEncryptCFBWithPKCSPadding 是同一个函数的别名

参数:

  - key: 密钥(16/24/32 字节)

  - i: 待加密的数据，可为 string、[]byte 等

  - iv: 初始化向量(16 字节)，可为 nil



返回值:

  - []byte: 加密后的密文字节

  - error: 加密失败时返回的错误




Example:

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


#### 定义

`AESCFBEncrypt(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` | 密钥(16/24/32 字节) |
| i | `any` | 待加密的数据，可为 string、[]byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 加密失败时返回的错误 |


### AESDecrypt

#### 详细描述
AESDecryptCBCWithPKCSPadding 使用 AES 算法在 CBC 模式下用 PKCS7 填充解密数据

密钥长度必须是 16/24/32 字节(分别对应 AES-128/192/256)；iv 为 nil 时使用 key 前 16 字节作为 iv。

注意：AESCBCDecrypt、AESDecrypt 和 AESCBCDecryptWithPKCS7Padding 是同一个函数的别名

参数:

  - key: 密钥(16/24/32 字节)

  - i: 待解密的密文，可为 []byte 等

  - iv: 初始化向量(16 字节)，可为 nil



返回值:

  - []byte: 解密还原后的明文字节

  - error: 解密失败时返回的错误




Example:

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


#### 定义

`AESDecrypt(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` | 密钥(16/24/32 字节) |
| i | `any` | 待解密的密文，可为 []byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |


### AESDecryptBasic

#### 详细描述
AESDecryptBasic 使用 AES 算法对数据进行解密，支持多种模式(CBC、CFB、ECB、OFB、CTR)

注意：此函数是底层高级用法，需要外部自行处理 padding、key、iv 等问题。

参数:

  - key: 密钥(16/24/32 字节)

  - data: 待解密的密文字节

  - iv: 初始化向量(块模式需要)

  - mode: 解密模式，取 codec.CBC / codec.CFB / codec.ECB / codec.OFB / codec.CTR



返回值:

  - []byte: 解密后的明文字节(块模式下可能含零填充)

  - error: 解密失败时返回的错误




Example:

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


#### 定义

`AESDecryptBasic(key []byte, data []byte, iv []byte, mode string) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` | 密钥(16/24/32 字节) |
| data | `[]byte` | 待解密的密文字节 |
| iv | `[]byte` | 初始化向量(块模式需要) |
| mode | `string` | 解密模式，取 codec.CBC / codec.CFB / codec.ECB / codec.OFB / codec.CTR |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 解密后的明文字节(块模式下可能含零填充) |
| r2 | `error` | 解密失败时返回的错误 |


### AESDecryptCFBWithPKCSPadding

#### 详细描述
AESDecryptCFBWithPKCSPadding 使用 AES 算法在 CFB 模式下用 PKCS7 填充解密数据

密钥长度必须是 16/24/32 字节(分别对应 AES-128/192/256)；iv 为 nil 时使用 key 前 16 字节作为 iv。

注意：AESCFBDecrypt 和 AESDecryptCFBWithPKCSPadding 是同一个函数的别名

参数:

  - key: 密钥(16/24/32 字节)

  - i: 待解密的密文，可为 []byte 等

  - iv: 初始化向量(16 字节)，可为 nil



返回值:

  - []byte: 解密还原后的明文字节

  - error: 解密失败时返回的错误




Example:

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


#### 定义

`AESDecryptCFBWithPKCSPadding(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` | 密钥(16/24/32 字节) |
| i | `any` | 待解密的密文，可为 []byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |


### AESDecryptCFBWithZeroPadding

#### 详细描述
AESDecryptCFBWithZeroPadding 使用 AES 算法在 CFB 模式下用零(Zero)填充解密数据

密钥长度必须是 16/24/32 字节(分别对应 AES-128/192/256)；iv 为 nil 时使用 key 前 16 字节作为 iv。

参数:

  - key: 密钥(16/24/32 字节)

  - i: 待解密的密文，可为 []byte 等

  - iv: 初始化向量(16 字节)，可为 nil



返回值:

  - []byte: 解密还原后的明文字节(末尾零字节会被去除)

  - error: 解密失败时返回的错误




Example:

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


#### 定义

`AESDecryptCFBWithZeroPadding(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` | 密钥(16/24/32 字节) |
| i | `any` | 待解密的密文，可为 []byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 解密还原后的明文字节(末尾零字节会被去除) |
| r2 | `error` | 解密失败时返回的错误 |


### AESECBDecrypt

#### 详细描述
AESDecryptECBWithPKCSPadding 使用 AES 算法在 ECB 模式下用 PKCS7 填充解密数据(ECB 模式下 iv 无用，传 nil)

密钥长度必须是 16/24/32 字节(分别对应 AES-128/192/256)。

注意：AESECBDecrypt 和 AESDecryptECBWithPKCSPadding 是同一个函数的别名

参数:

  - key: 密钥(16/24/32 字节)

  - i: 待解密的密文，可为 []byte 等

  - iv: ECB 模式下无用，传 nil 即可



返回值:

  - []byte: 解密还原后的明文字节

  - error: 解密失败时返回的错误




Example:

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


#### 定义

`AESECBDecrypt(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` | 密钥(16/24/32 字节) |
| i | `any` | 待解密的密文，可为 []byte 等 |
| iv | `[]byte` | ECB 模式下无用，传 nil 即可 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |


### AESECBDecryptWithPKCS7Padding

#### 详细描述
AESDecryptECBWithPKCSPadding 使用 AES 算法在 ECB 模式下用 PKCS7 填充解密数据(ECB 模式下 iv 无用，传 nil)

密钥长度必须是 16/24/32 字节(分别对应 AES-128/192/256)。

注意：AESECBDecrypt 和 AESDecryptECBWithPKCSPadding 是同一个函数的别名

参数:

  - key: 密钥(16/24/32 字节)

  - i: 待解密的密文，可为 []byte 等

  - iv: ECB 模式下无用，传 nil 即可



返回值:

  - []byte: 解密还原后的明文字节

  - error: 解密失败时返回的错误




Example:

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


#### 定义

`AESECBDecryptWithPKCS7Padding(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` | 密钥(16/24/32 字节) |
| i | `any` | 待解密的密文，可为 []byte 等 |
| iv | `[]byte` | ECB 模式下无用，传 nil 即可 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |


### AESECBDecryptWithZeroPadding

#### 详细描述
AESDecryptECBWithZeroPadding 使用 AES 算法在 ECB 模式下用零(Zero)填充解密数据(ECB 模式下 iv 无用，传 nil)

密钥长度必须是 16/24/32 字节(分别对应 AES-128/192/256)。

参数:

  - key: 密钥(16/24/32 字节)

  - i: 待解密的密文，可为 []byte 等

  - iv: ECB 模式下无用，传 nil 即可



返回值:

  - []byte: 解密还原后的明文字节(末尾零字节会被去除)

  - error: 解密失败时返回的错误




Example:

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


#### 定义

`AESECBDecryptWithZeroPadding(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` | 密钥(16/24/32 字节) |
| i | `any` | 待解密的密文，可为 []byte 等 |
| iv | `[]byte` | ECB 模式下无用，传 nil 即可 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 解密还原后的明文字节(末尾零字节会被去除) |
| r2 | `error` | 解密失败时返回的错误 |


### AESECBEncrypt

#### 详细描述
AESEncryptECBWithPKCSPadding 使用 AES 算法在 ECB 模式下用 PKCS7 填充加密数据(ECB 模式下 iv 无用，传 nil)

密钥长度必须是 16/24/32 字节(分别对应 AES-128/192/256)。

注意：AESECBEncrypt 和 AESECBEncryptWithPKCS7Padding 是同一个函数的别名

参数:

  - key: 密钥(16/24/32 字节)

  - i: 待加密的数据，可为 string、[]byte 等

  - iv: ECB 模式下无用，传 nil 即可



返回值:

  - []byte: 加密后的密文字节

  - error: 加密失败(如密钥长度非法)时返回的错误




Example:

``````````````yak
// VARS: ECB 模式 iv 传 nil
key = "1234567890123456"
ct = codec.AESECBEncrypt(key, "Secret Message", nil)~
// STDOUT: 解密还原后打印
println(string(codec.AESECBDecrypt(key, ct, nil)~))   // OUT: Secret Message
// assert: 锁定结论(ECB 加解密往返一致)
assert string(codec.AESECBDecrypt(key, ct, nil)~) == "Secret Message", "AES-ECB encrypt/decrypt should round-trip"
``````````````


#### 定义

`AESECBEncrypt(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` | 密钥(16/24/32 字节) |
| i | `any` | 待加密的数据，可为 string、[]byte 等 |
| iv | `[]byte` | ECB 模式下无用，传 nil 即可 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 加密失败(如密钥长度非法)时返回的错误 |


### AESECBEncryptWithPKCS7Padding

#### 详细描述
AESEncryptECBWithPKCSPadding 使用 AES 算法在 ECB 模式下用 PKCS7 填充加密数据(ECB 模式下 iv 无用，传 nil)

密钥长度必须是 16/24/32 字节(分别对应 AES-128/192/256)。

注意：AESECBEncrypt 和 AESECBEncryptWithPKCS7Padding 是同一个函数的别名

参数:

  - key: 密钥(16/24/32 字节)

  - i: 待加密的数据，可为 string、[]byte 等

  - iv: ECB 模式下无用，传 nil 即可



返回值:

  - []byte: 加密后的密文字节

  - error: 加密失败(如密钥长度非法)时返回的错误




Example:

``````````````yak
// VARS: ECB 模式 iv 传 nil
key = "1234567890123456"
ct = codec.AESECBEncrypt(key, "Secret Message", nil)~
// STDOUT: 解密还原后打印
println(string(codec.AESECBDecrypt(key, ct, nil)~))   // OUT: Secret Message
// assert: 锁定结论(ECB 加解密往返一致)
assert string(codec.AESECBDecrypt(key, ct, nil)~) == "Secret Message", "AES-ECB encrypt/decrypt should round-trip"
``````````````


#### 定义

`AESECBEncryptWithPKCS7Padding(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` | 密钥(16/24/32 字节) |
| i | `any` | 待加密的数据，可为 string、[]byte 等 |
| iv | `[]byte` | ECB 模式下无用，传 nil 即可 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 加密失败(如密钥长度非法)时返回的错误 |


### AESECBEncryptWithZeroPadding

#### 详细描述
AESEncryptECBWithZeroPadding 使用 AES 算法在 ECB 模式下用零(Zero)填充加密数据(ECB 模式下 iv 无用，传 nil)

密钥长度必须是 16/24/32 字节(分别对应 AES-128/192/256)。

参数:

  - key: 密钥(16/24/32 字节)

  - i: 待加密的数据，可为 string、[]byte 等

  - iv: ECB 模式下无用，传 nil 即可



返回值:

  - []byte: 加密后的密文字节

  - error: 加密失败(如密钥长度非法)时返回的错误




Example:

``````````````yak
// VARS: ECB 零填充，iv 传 nil
key = "1234567890123456"
ct = codec.AESECBEncryptWithZeroPadding(key, "Secret Message", nil)~
// STDOUT: 解密还原后打印
println(string(codec.AESECBDecryptWithZeroPadding(key, ct, nil)~))   // OUT: Secret Message
// assert: 锁定结论(ECB 零填充往返一致)
assert string(codec.AESECBDecryptWithZeroPadding(key, ct, nil)~) == "Secret Message", "AES-ECB zero-padding should round-trip"
``````````````


#### 定义

`AESECBEncryptWithZeroPadding(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` | 密钥(16/24/32 字节) |
| i | `any` | 待加密的数据，可为 string、[]byte 等 |
| iv | `[]byte` | ECB 模式下无用，传 nil 即可 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 加密失败(如密钥长度非法)时返回的错误 |


### AESEncrypt

#### 详细描述
AESEncryptCBCWithPKCSPadding 使用 AES 算法在 CBC 模式下用 PKCS7 填充加密数据

密钥长度必须是 16/24/32 字节(分别对应 AES-128/192/256)；iv 为 nil 时使用 key 前 16 字节作为 iv。

注意：AESCBCEncrypt、AESEncrypt 和 AESCBCEncryptWithPKCS7Padding 是同一个函数的别名

参数:

  - key: 密钥(16/24/32 字节)

  - i: 待加密的数据，可为 string、[]byte 等

  - iv: 初始化向量(16 字节)，可为 nil



返回值:

  - []byte: 加密后的密文字节

  - error: 加密失败(如密钥长度非法)时返回的错误




Example:

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


#### 定义

`AESEncrypt(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` | 密钥(16/24/32 字节) |
| i | `any` | 待加密的数据，可为 string、[]byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 加密失败(如密钥长度非法)时返回的错误 |


### AESEncryptBasic

#### 详细描述
AESEncryptBasic 使用 AES 算法对数据进行加密，支持多种模式(CBC、CFB、ECB、OFB、CTR)

注意：此函数是底层高级用法，需要外部自行处理 padding、key、iv 等问题。

参数:

  - key: 密钥(16/24/32 字节)

  - data: 待加密的数据字节

  - iv: 初始化向量(块模式需要)

  - mode: 加密模式，取 codec.CBC / codec.CFB / codec.ECB / codec.OFB / codec.CTR



返回值:

  - []byte: 加密后的密文字节

  - error: 加密失败时返回的错误




Example:

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


#### 定义

`AESEncryptBasic(key []byte, data []byte, iv []byte, mode string) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` | 密钥(16/24/32 字节) |
| data | `[]byte` | 待加密的数据字节 |
| iv | `[]byte` | 初始化向量(块模式需要) |
| mode | `string` | 加密模式，取 codec.CBC / codec.CFB / codec.ECB / codec.OFB / codec.CTR |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 加密失败时返回的错误 |


### AESEncryptCFBWithPKCSPadding

#### 详细描述
AESEncryptCFBWithPKCSPadding 使用 AES 算法在 CFB 模式下用 PKCS7 填充加密数据

密钥长度必须是 16/24/32 字节(分别对应 AES-128/192/256)；iv 为 nil 时使用 key 前 16 字节作为 iv。

注意：AESCFBEncrypt 和 AESEncryptCFBWithPKCSPadding 是同一个函数的别名

参数:

  - key: 密钥(16/24/32 字节)

  - i: 待加密的数据，可为 string、[]byte 等

  - iv: 初始化向量(16 字节)，可为 nil



返回值:

  - []byte: 加密后的密文字节

  - error: 加密失败时返回的错误




Example:

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


#### 定义

`AESEncryptCFBWithPKCSPadding(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` | 密钥(16/24/32 字节) |
| i | `any` | 待加密的数据，可为 string、[]byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 加密失败时返回的错误 |


### AESEncryptCFBWithZeroPadding

#### 详细描述
AESEncryptCFBWithZeroPadding 使用 AES 算法在 CFB 模式下用零(Zero)填充加密数据

密钥长度必须是 16/24/32 字节(分别对应 AES-128/192/256)；iv 为 nil 时使用 key 前 16 字节作为 iv。

参数:

  - key: 密钥(16/24/32 字节)

  - i: 待加密的数据，可为 string、[]byte 等

  - iv: 初始化向量(16 字节)，可为 nil



返回值:

  - []byte: 加密后的密文字节

  - error: 加密失败时返回的错误




Example:

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


#### 定义

`AESEncryptCFBWithZeroPadding(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` | 密钥(16/24/32 字节) |
| i | `any` | 待加密的数据，可为 string、[]byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 加密失败时返回的错误 |


### AESGCMDecrypt

#### 详细描述
AESGCMDecrypt 使用 AES-GCM 认证加密模式解密数据；nonce 为空时从密文前置部分提取 nonce

密钥长度必须是 16/24/32 字节；nonce 长度为 16 时用 16，否则用 12。

参数:

  - key: 密钥(16/24/32 字节)

  - data: 待解密的密文，可为 []byte 等

  - nonce: nonce(随机数)，传 nil 则从密文前置部分提取



返回值:

  - []byte: 解密还原后的明文字节

  - error: 解密或认证失败时返回的错误




Example:

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


#### 定义

`AESGCMDecrypt(key []byte, data any, nonce []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` | 密钥(16/24/32 字节) |
| data | `any` | 待解密的密文，可为 []byte 等 |
| nonce | `[]byte` | nonce(随机数)，传 nil 则从密文前置部分提取 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密或认证失败时返回的错误 |


### AESGCMDecryptWithNonceSize12

#### 详细描述
AESGCMDecryptWithNonceSize12 使用 AES-GCM 模式以 12 字节 nonce 解密数据

参数:

  - key: 密钥(16/24/32 字节)

  - data: 待解密的密文，可为 []byte 等

  - nonce: nonce(随机数)，传 nil 则从密文前 12 字节提取



返回值:

  - []byte: 解密还原后的明文字节

  - error: 解密或认证失败时返回的错误




Example:

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


#### 定义

`AESGCMDecryptWithNonceSize12(key []byte, data any, nonce []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` | 密钥(16/24/32 字节) |
| data | `any` | 待解密的密文，可为 []byte 等 |
| nonce | `[]byte` | nonce(随机数)，传 nil 则从密文前 12 字节提取 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密或认证失败时返回的错误 |


### AESGCMDecryptWithNonceSize16

#### 详细描述
AESGCMDecryptWithNonceSize16 使用 AES-GCM 模式以 16 字节 nonce 解密数据

参数:

  - key: 密钥(16/24/32 字节)

  - data: 待解密的密文，可为 []byte 等

  - nonce: nonce(随机数)，传 nil 则从密文前 16 字节提取



返回值:

  - []byte: 解密还原后的明文字节

  - error: 解密或认证失败时返回的错误




Example:

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


#### 定义

`AESGCMDecryptWithNonceSize16(key []byte, data any, nonce []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` | 密钥(16/24/32 字节) |
| data | `any` | 待解密的密文，可为 []byte 等 |
| nonce | `[]byte` | nonce(随机数)，传 nil 则从密文前 16 字节提取 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密或认证失败时返回的错误 |


### AESGCMEncrypt

#### 详细描述
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

参数:

  - key: 密钥(16/24/32 字节)

  - data: 待加密的数据，可为 string、[]byte 等

  - nonceRaw: nonce(随机数)，传 nil 则自动生成并前置到密文



返回值:

  - []byte: 加密后的密文字节(随机 nonce 时前 nonceSize 字节为 nonce)

  - error: 加密失败时返回的错误




Example:

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


#### 定义

`AESGCMEncrypt(key []byte, data any, nonceRaw []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` | 密钥(16/24/32 字节) |
| data | `any` | 待加密的数据，可为 string、[]byte 等 |
| nonceRaw | `[]byte` | nonce(随机数)，传 nil 则自动生成并前置到密文 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 加密后的密文字节(随机 nonce 时前 nonceSize 字节为 nonce) |
| r2 | `error` | 加密失败时返回的错误 |


### AESGCMEncryptWithNonceSize12

#### 详细描述
AESGCMEncryptWithNonceSize12 使用 AES-GCM 模式以 12 字节 nonce 加密数据

参数:

  - key: 密钥(16/24/32 字节)

  - data: 待加密的数据，可为 string、[]byte 等

  - nonceRaw: nonce(随机数)，传 nil 则自动生成 12 字节并前置到密文



返回值:

  - []byte: 加密后的密文字节

  - error: 加密失败时返回的错误




Example:

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


#### 定义

`AESGCMEncryptWithNonceSize12(key []byte, data any, nonceRaw []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` | 密钥(16/24/32 字节) |
| data | `any` | 待加密的数据，可为 string、[]byte 等 |
| nonceRaw | `[]byte` | nonce(随机数)，传 nil 则自动生成 12 字节并前置到密文 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 加密失败时返回的错误 |


### AESGCMEncryptWithNonceSize16

#### 详细描述
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

参数:

  - key: 密钥(16/24/32 字节)

  - data: 待加密的数据，可为 string、[]byte 等

  - nonceRaw: nonce(随机数)，传 nil 则自动生成并前置到密文



返回值:

  - []byte: 加密后的密文字节(随机 nonce 时前 nonceSize 字节为 nonce)

  - error: 加密失败时返回的错误




Example:

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


#### 定义

`AESGCMEncryptWithNonceSize16(key []byte, data any, nonceRaw []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` | 密钥(16/24/32 字节) |
| data | `any` | 待加密的数据，可为 string、[]byte 等 |
| nonceRaw | `[]byte` | nonce(随机数)，传 nil 则自动生成并前置到密文 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 加密后的密文字节(随机 nonce 时前 nonceSize 字节为 nonce) |
| r2 | `error` | 加密失败时返回的错误 |


### AutoDecode

#### 详细描述
AutoDecode 自动识别并逐层解码输入数据(依次尝试 URL/HTML 实体/Hex/Unicode/Base32/Base64/JWT/字符集等)

参数:

  - i: 待自动解码的数据，可为 string、[]byte 等



返回值:

  - 解码过程的结果列表，每个元素含 Type(编码类型)、Origin(本层输入)、Result(本层输出)等字段；无法识别时返回单个 Type 为 No 的结果




Example:

``````````````yak
// VARS: 对 Base64 文本自动解码
results = codec.AutoDecode(codec.EncodeBase64("hello world"))
// STDOUT: 打印是否得到解码步骤
println(len(results) > 0)   // OUT: true
// assert: 锁定结论(返回非空解码结果列表)
assert len(results) > 0, "AutoDecode should return decode steps"
``````````````


#### 定义

`AutoDecode(i any) []*AutoDecodeResult`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待自动解码的数据，可为 string、[]byte 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*AutoDecodeResult` | 解码过程的结果列表，每个元素含 Type(编码类型)、Origin(本层输入)、Result(本层输出)等字段；无法识别时返回单个 Type 为 No 的结果 |


### CryptoRandBytes

#### 详细描述
RandBytes 生成 n 个密码学安全的随机字节

参数:

  - n: 需要生成的随机字节数量



返回值:

  - 长度为 n 的随机字节切片(读取失败时返回 nil)




Example:

``````````````yak
// VARS: 生成 16 个随机字节(每次结果不同)
result = codec.RandBytes(16)
// STDOUT: 打印长度
println(len(result))   // OUT: 16
// assert: 锁定结论(长度固定为请求值)
assert len(result) == 16, "RandBytes should produce requested length"
``````````````


#### 定义

`CryptoRandBytes(n int) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `int` | 需要生成的随机字节数量 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 长度为 n 的随机字节切片(读取失败时返回 nil) |


### DESCBCDecrypt

#### 详细描述
DESDecryptCBCWithZeroPadding 使用 DES 算法在 CBC 模式下用零填充解密数据

密钥长度必须是 8 字节，iv 可为 nil 或 8 字节；iv 为 nil 时固定为密钥或零填充到 8 字节。

注意：DESCBCDecrypt、DESDecrypt 和本函数是同一个函数的别名

参数:

  - key: 密钥(8 字节)

  - i: 待解密的密文，可为 []byte 等

  - iv: 初始化向量(8 字节)，可为 nil



返回值:

  - []byte: 解密还原后的明文字节

  - error: 解密失败时返回的错误




Example:

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


#### 定义

`DESCBCDecrypt(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` | 密钥(8 字节) |
| i | `any` | 待解密的密文，可为 []byte 等 |
| iv | `[]byte` | 初始化向量(8 字节)，可为 nil |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |


### DESCBCEncrypt

#### 详细描述
DESEncryptCBCWithZeroPadding 使用 DES 算法在 CBC 模式下用零填充加密数据

密钥长度必须是 8 字节，iv 可为 nil 或 8 字节；iv 为 nil 时固定为密钥或零填充到 8 字节。

注意：DESCBCEncrypt、DESEncrypt 和本函数是同一个函数的别名；如需其他填充，先用 codec.PKCS7PaddingForDES 填充再调用。

参数:

  - key: 密钥(8 字节)

  - i: 待加密的数据，可为 string、[]byte 等

  - iv: 初始化向量(8 字节)，可为 nil



返回值:

  - []byte: 加密后的密文字节

  - error: 加密失败时返回的错误




Example:

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


#### 定义

`DESCBCEncrypt(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` | 密钥(8 字节) |
| i | `any` | 待加密的数据，可为 string、[]byte 等 |
| iv | `[]byte` | 初始化向量(8 字节)，可为 nil |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 加密失败时返回的错误 |


### DESDecrypt

#### 详细描述
DESDecryptCBCWithZeroPadding 使用 DES 算法在 CBC 模式下用零填充解密数据

密钥长度必须是 8 字节，iv 可为 nil 或 8 字节；iv 为 nil 时固定为密钥或零填充到 8 字节。

注意：DESCBCDecrypt、DESDecrypt 和本函数是同一个函数的别名

参数:

  - key: 密钥(8 字节)

  - i: 待解密的密文，可为 []byte 等

  - iv: 初始化向量(8 字节)，可为 nil



返回值:

  - []byte: 解密还原后的明文字节

  - error: 解密失败时返回的错误




Example:

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


#### 定义

`DESDecrypt(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` | 密钥(8 字节) |
| i | `any` | 待解密的密文，可为 []byte 等 |
| iv | `[]byte` | 初始化向量(8 字节)，可为 nil |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |


### DESECBDecrypt

#### 详细描述
DESECBDec 使用 DES 算法在 ECB 模式下用零填充解密数据(ECB 模式下无 iv 参数)

密钥长度必须是 8 字节。

参数:

  - key: 密钥(8 字节)

  - data: 待解密的密文字节



返回值:

  - []byte: 解密还原后的明文字节

  - error: 解密失败时返回的错误




Example:

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


#### 定义

`DESECBDecrypt(key []byte, data []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` | 密钥(8 字节) |
| data | `[]byte` | 待解密的密文字节 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |


### DESECBEncrypt

#### 详细描述
DESECBEnc 使用 DES 算法在 ECB 模式下用零填充加密数据(ECB 模式下无 iv 参数)

密钥长度必须是 8 字节。

参数:

  - key: 密钥(8 字节)

  - data: 待加密的数据字节



返回值:

  - []byte: 加密后的密文字节

  - error: 加密失败时返回的错误




Example:

``````````````yak
// VARS: DES-ECB 加解密(8 字节密钥)
key = "12345678"
ct = codec.DESECBEncrypt(key, "Secret Message")~
// STDOUT: 去零填充解密后打印
println(string(codec.ZeroUnPadding(codec.DESECBDecrypt(key, ct)~)))   // OUT: Secret Message
// assert: 锁定结论(DES-ECB 加解密往返一致)
assert string(codec.ZeroUnPadding(codec.DESECBDecrypt(key, ct)~)) == "Secret Message", "DES-ECB should round-trip"
``````````````


#### 定义

`DESECBEncrypt(key []byte, data []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` | 密钥(8 字节) |
| data | `[]byte` | 待加密的数据字节 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 加密失败时返回的错误 |


### DESEncrypt

#### 详细描述
DESEncryptCBCWithZeroPadding 使用 DES 算法在 CBC 模式下用零填充加密数据

密钥长度必须是 8 字节，iv 可为 nil 或 8 字节；iv 为 nil 时固定为密钥或零填充到 8 字节。

注意：DESCBCEncrypt、DESEncrypt 和本函数是同一个函数的别名；如需其他填充，先用 codec.PKCS7PaddingForDES 填充再调用。

参数:

  - key: 密钥(8 字节)

  - i: 待加密的数据，可为 string、[]byte 等

  - iv: 初始化向量(8 字节)，可为 nil



返回值:

  - []byte: 加密后的密文字节

  - error: 加密失败时返回的错误




Example:

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


#### 定义

`DESEncrypt(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` | 密钥(8 字节) |
| i | `any` | 待加密的数据，可为 string、[]byte 等 |
| iv | `[]byte` | 初始化向量(8 字节)，可为 nil |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 加密失败时返回的错误 |


### DecodeASCII

#### 详细描述
Unquote interprets s as a single-quoted, double-quoted,
or backquoted Go string literal, returning the string value
that s quotes.  (If s is single-quoted, it would be a Go
character literal; Unquote returns the corresponding
one-character string.)


#### 定义

`DecodeASCII(s string) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |  |
| r2 | `error` |  |


### DecodeBase32

#### 详细描述
DecodeBase32 将标准 Base32 字符串解码为原始字节

参数:

  - i: 待解码的标准 Base32 字符串



返回值:

  - []byte: 解码后的原始字节

  - error: 解码失败时返回的错误




Example:

``````````````yak
// VARS: 波浪号自动解包 error，得到 []byte
result = codec.DecodeBase32("MFRGG===")~
// STDOUT: 转字符串后打印
println(string(result))   // OUT: abc
// assert: 锁定结论
assert string(result) == "abc", "DecodeBase32 should decode base32 back to bytes"
``````````````


#### 定义

`DecodeBase32(i string) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` | 待解码的标准 Base32 字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 解码后的原始字节 |
| r2 | `error` | 解码失败时返回的错误 |


### DecodeBase64

#### 详细描述
DecodeBase64 将标准 Base64 字符串解码为原始字节

参数:

  - i: 待解码的标准 Base64 字符串



返回值:

  - []byte: 解码后的原始字节

  - error: 解码失败时返回的错误




Example:

``````````````yak
// VARS: 波浪号自动解包 error，得到 []byte
result = codec.DecodeBase64("YWJj")~
// STDOUT: 转字符串后打印
println(string(result))   // OUT: abc
// assert: 锁定结论
assert string(result) == "abc", "DecodeBase64 should decode base64 back to bytes"
``````````````


#### 定义

`DecodeBase64(i string) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` | 待解码的标准 Base64 字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 解码后的原始字节 |
| r2 | `error` | 解码失败时返回的错误 |


### DecodeBase64Url

#### 详细描述
DecodeBase64Url 将 URL 安全的 Base64 字符串解码为原始字节

参数:

  - i: 待解码的 URL 安全 Base64 字符串



返回值:

  - []byte: 解码后的原始字节

  - error: 解码失败时返回的错误




Example:

``````````````yak
// VARS: URL 安全 Base64 解码，波浪号自动解包 error
result = codec.DecodeBase64Url(codec.EncodeBase64Url("abc"))~
// STDOUT: 转字符串后打印
println(string(result))   // OUT: abc
// assert: 锁定结论
assert string(result) == "abc", "base64url decode should recover origin"
``````````````


#### 定义

`DecodeBase64Url(i any) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待解码的 URL 安全 Base64 字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 解码后的原始字节 |
| r2 | `error` | 解码失败时返回的错误 |


### DecodeChunked

#### 详细描述
HTTPChunkedDecode 解码 HTTP Transfer-Encoding: chunked 分块传输数据，还原原始 body

参数:

  - raw: 分块编码后的字节数据



返回值:

  - []byte: 解码还原后的原始 body

  - error: 解码失败时返回的错误




Example:

``````````````yak
// VARS: 先分块编码再解码，波浪号自动解包 error
result = codec.DecodeChunked(codec.EncodeChunked("chunked body"))~
// STDOUT: 转字符串后打印
println(string(result))   // OUT: chunked body
// assert: 锁定结论(分块编解码往返一致)
assert string(result) == "chunked body", "chunked encode/decode should round-trip"
``````````````


#### 定义

`DecodeChunked(raw []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` | 分块编码后的字节数据 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 解码还原后的原始 body |
| r2 | `error` | 解码失败时返回的错误 |


### DecodeHex

#### 详细描述
DecodeHex 将十六进制(Hex)字符串解码为原始字节，支持可选的 0x 前缀

参数:

  - i: 待解码的十六进制字符串



返回值:

  - []byte: 解码后的原始字节

  - error: 解码失败时返回的错误




Example:

``````````````yak
// VARS: 波浪号自动解包 error，得到 []byte
result = codec.DecodeHex("616263")~
// STDOUT: 转字符串后打印
println(string(result))   // OUT: abc
// assert: 锁定结论
assert string(result) == "abc", "DecodeHex should decode hex back to bytes"
``````````````


#### 定义

`DecodeHex(i string) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` | 待解码的十六进制字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 解码后的原始字节 |
| r2 | `error` | 解码失败时返回的错误 |


### DecodeHtml

#### 详细描述
UnescapeString unescapes entities like &#34;&amp;lt;&#34; to become &#34;&lt;&#34;. It unescapes a
larger range of entities than EscapeString escapes. For example, &#34;&amp;aacute;&#34;
unescapes to &#34;á&#34;, as does &#34;&amp;#225;&#34; and &#34;&amp;#xE1;&#34;.
UnescapeString(EscapeString(s)) == s always holds, but the converse isn&#39;t
always true.


#### 定义

`DecodeHtml(s string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |  |


### DecodeUrl

#### 详细描述
QueryUnescape 对 URL 百分号编码的字符串做查询串解码，同时兼容 %uXXXX 形式

参数:

  - s: 待解码的 URL 编码字符串



返回值:

  - string: 解码后的字符串

  - error: 解码失败时返回的错误




Example:

``````````````yak
// VARS: URL 解码，波浪号自动解包 error
result = codec.DecodeUrl("a%20b")~
// STDOUT: 打印可观察输出
println(result)   // OUT: a b
// assert: 锁定结论
assert result == "a b", "DecodeUrl should decode percent-encoding"
``````````````


#### 定义

`DecodeUrl(s string) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` | 待解码的 URL 编码字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 解码后的字符串 |
| r2 | `error` | 解码失败时返回的错误 |


### DoubleDecodeUrl

#### 详细描述
暂无描述

#### 定义

`DoubleDecodeUrl(i string) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |  |
| r2 | `error` |  |


### DoubleEncodeUrl

#### 详细描述
暂无描述

#### 定义

`DoubleEncodeUrl(i any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |  |


### EncodeASCII

#### 详细描述
StrConvQuoteHex 将字符串转换为带双引号的可打印形式，非字母数字字节统一转义为 \xNN

参数:

  - s: 待转换的字符串



返回值:

  - 带双引号、非字母数字字节转义为 \xNN 的字符串




Example:

``````````````yak
// VARS: 转为可打印形式(EncodeToPrintable / EncodeASCII 同一函数)
result = codec.EncodeToPrintable("a b")
// STDOUT: 打印可观察输出(空格被转义为 \x20)
println(result)   // OUT: "a\x20b"
// assert: 锁定结论
assert result == "\"a\\x20b\"", "EncodeToPrintable should hex-escape non-alnum bytes"
``````````````


#### 定义

`EncodeASCII(s string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` | 待转换的字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 带双引号、非字母数字字节转义为 \xNN 的字符串 |


### EncodeBase32

#### 详细描述
EncodeBase32 将输入数据编码为标准 Base32 字符串

参数:

  - i: 待编码的数据，可为 string、[]byte 等



返回值:

  - 标准 Base32 编码后的字符串




Example:

``````````````yak
// VARS: 把编码结果赋值给变量
result = codec.EncodeBase32("abc")
// STDOUT: 打印可观察输出
println(result)   // OUT: MFRGG===
// assert: 锁定结论(与 DecodeBase32 往返一致)
assert string(codec.DecodeBase32(result)~) == "abc", "base32 encode/decode should round-trip"
``````````````


#### 定义

`EncodeBase32(i any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待编码的数据，可为 string、[]byte 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 标准 Base32 编码后的字符串 |


### EncodeBase64

#### 详细描述
EncodeBase64 将输入数据编码为标准 Base64 字符串

参数:

  - i: 待编码的数据，可为 string、[]byte 等



返回值:

  - 标准 Base64 编码后的字符串




Example:

``````````````yak
// VARS: 把编码结果赋值给变量
result = codec.EncodeBase64("abc")
// STDOUT: 打印可观察输出
println(result)   // OUT: YWJj
// assert: 锁定结论(与 DecodeBase64 往返一致)
assert result == "YWJj", "EncodeBase64 should base64-encode bytes"
assert string(codec.DecodeBase64(result)~) == "abc", "base64 encode/decode should round-trip"
``````````````


#### 定义

`EncodeBase64(i any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待编码的数据，可为 string、[]byte 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 标准 Base64 编码后的字符串 |


### EncodeBase64Url

#### 详细描述
EncodeBase64Url 将输入数据编码为 URL 安全的 Base64 字符串(用 - _ 替换 + /，并去掉末尾的 =)

参数:

  - i: 待编码的数据，可为 string、[]byte 等



返回值:

  - URL 安全的 Base64 编码字符串




Example:

``````````````yak
// VARS: 对含 + / 的字节做 URL 安全编码
result = codec.EncodeBase64Url("\xFB\xFF")
// STDOUT: 打印可观察输出
println(result)   // OUT: -_8
// assert: 锁定结论(与 DecodeBase64Url 往返一致)
assert string(codec.DecodeBase64Url(codec.EncodeBase64Url("abc"))~) == "abc", "base64url encode/decode should round-trip"
``````````````


#### 定义

`EncodeBase64Url(i any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待编码的数据，可为 string、[]byte 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | URL 安全的 Base64 编码字符串 |


### EncodeChunked

#### 详细描述
HTTPChunkedEncode 将原始数据编码为 HTTP Transfer-Encoding: chunked 分块传输格式

参数:

  - raw: 待编码的原始 body 字节



返回值:

  - 分块编码后的字节数据




Example:

``````````````yak
// VARS: 先分块编码再解码，验证往返一致
encoded = codec.EncodeChunked("chunked body")
result = codec.DecodeChunked(encoded)~
// STDOUT: 转字符串后打印
println(string(result))   // OUT: chunked body
// assert: 锁定结论(分块编解码往返一致)
assert string(result) == "chunked body", "EncodeChunked should be decodable back"
``````````````


#### 定义

`EncodeChunked(raw []byte) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` | 待编码的原始 body 字节 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 分块编码后的字节数据 |


### EncodeHtml

#### 详细描述
EncodeHtmlEntity 将输入数据的每个字节编码为十进制 HTML 实体(如 &lt; 编码为 &amp;#60;)，常用于 XSS 构造

参数:

  - i: 待编码的数据，可为 string、[]byte 等



返回值:

  - 十进制 HTML 实体字符串




Example:

``````````````yak
// VARS: 把特殊字符编码为十进制 HTML 实体
result = codec.EncodeHtml("<b>")
// STDOUT: 打印可观察输出
println(result)   // OUT: &#60;&#98;&#62;
// assert: 锁定结论(可用 DecodeHtml 还原)
assert string(codec.DecodeHtml(result)~) == "<b>", "EncodeHtml should be decodable back"
``````````````


#### 定义

`EncodeHtml(i any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待编码的数据，可为 string、[]byte 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 十进制 HTML 实体字符串 |


### EncodeHtmlHex

#### 详细描述
EncodeHtmlEntityHex 将输入数据的每个字节编码为十六进制 HTML 实体(如 &lt; 编码为 &amp;#x3c;)，常用于 XSS 构造

参数:

  - i: 待编码的数据，可为 string、[]byte 等



返回值:

  - 十六进制 HTML 实体字符串




Example:

``````````````yak
// VARS: 把特殊字符编码为十六进制 HTML 实体
result = codec.EncodeHtmlHex("<b>")
// STDOUT: 打印可观察输出
println(result)   // OUT: &#x3c;&#x62;&#x3e;
// assert: 锁定结论(可用 DecodeHtml 还原)
assert string(codec.DecodeHtml(result)~) == "<b>", "EncodeHtmlHex should be decodable back"
``````````````


#### 定义

`EncodeHtmlHex(i any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待编码的数据，可为 string、[]byte 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 十六进制 HTML 实体字符串 |


### EncodeToHex

#### 详细描述
EncodeToHex 将输入数据编码为十六进制(Hex)字符串

参数:

  - i: 待编码的数据，可为 string、[]byte 等



返回值:

  - 十六进制编码后的字符串




Example:

``````````````yak
// VARS: 把编码结果赋值给变量
result = codec.EncodeToHex("abc")
// STDOUT: 打印可观察输出
println(result)   // OUT: 616263
// assert: 锁定结论(与 DecodeHex 往返一致)
assert result == "616263", "EncodeToHex should hex-encode bytes"
assert string(codec.DecodeHex(result)~) == "abc", "hex encode/decode should round-trip"
``````````````


#### 定义

`EncodeToHex(i any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待编码的数据，可为 string、[]byte 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 十六进制编码后的字符串 |


### EncodeToPrintable

#### 详细描述
StrConvQuoteHex 将字符串转换为带双引号的可打印形式，非字母数字字节统一转义为 \xNN

参数:

  - s: 待转换的字符串



返回值:

  - 带双引号、非字母数字字节转义为 \xNN 的字符串




Example:

``````````````yak
// VARS: 转为可打印形式(EncodeToPrintable / EncodeASCII 同一函数)
result = codec.EncodeToPrintable("a b")
// STDOUT: 打印可观察输出(空格被转义为 \x20)
println(result)   // OUT: "a\x20b"
// assert: 锁定结论
assert result == "\"a\\x20b\"", "EncodeToPrintable should hex-escape non-alnum bytes"
``````````````


#### 定义

`EncodeToPrintable(s string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` | 待转换的字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 带双引号、非字母数字字节转义为 \xNN 的字符串 |


### EncodeUrl

#### 详细描述
EncodeUrlCode 对输入数据做激进的百分号(URL)编码，把每个字节都编码成 %xx 形式

参数:

  - i: 待编码的数据，可为 string、[]byte 等



返回值:

  - 百分号编码后的字符串




Example:

``````````````yak
// VARS: 把每个字节都编码成 %xx
result = codec.EncodeUrl("abc")
// STDOUT: 打印可观察输出
println(result)   // OUT: %61%62%63
// assert: 锁定结论(可用 DecodeUrl 还原)
assert string(codec.DecodeUrl(result)~) == "abc", "EncodeUrl should be decodable back"
``````````````


#### 定义

`EncodeUrl(i any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待编码的数据，可为 string、[]byte 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 百分号编码后的字符串 |


### EscapeHtml

#### 详细描述
EscapeString escapes special characters like &#34;&lt;&#34; to become &#34;&amp;lt;&#34;. It
escapes only five such characters: &lt;, &gt;, &amp;, &#39; and &#34;.
UnescapeString(EscapeString(s)) == s always holds, but the converse isn&#39;t
always true.


#### 定义

`EscapeHtml(s string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |  |


### EscapePathUrl

#### 详细描述
PathEscape escapes the string so it can be safely placed inside a [URL] path segment,
replacing special characters (including /) with %XX sequences as needed.


#### 定义

`EscapePathUrl(s string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |  |


### EscapeQueryUrl

#### 详细描述
QueryEscape 对字符串做 URL 查询串转义，把保留字符(如空格、= 、&amp;)转义为 %xx(空格转为 +)

参数:

  - s: 待转义的字符串



返回值:

  - 转义后的查询串字符串




Example:

``````````````yak
// VARS: 查询串转义
result = codec.EscapeQueryUrl("a b")
// STDOUT: 打印可观察输出(空格被转义为 +)
println(result)   // OUT: a+b
// assert: 锁定结论
assert result == "a+b", "EscapeQueryUrl should escape space to plus"
``````````````


#### 定义

`EscapeQueryUrl(s string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` | 待转义的字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 转义后的查询串字符串 |


### EscapeUrl

#### 详细描述
QueryEscape 对字符串做 URL 查询串转义，把保留字符(如空格、= 、&amp;)转义为 %xx(空格转为 +)

参数:

  - s: 待转义的字符串



返回值:

  - 转义后的查询串字符串




Example:

``````````````yak
// VARS: 查询串转义
result = codec.EscapeQueryUrl("a b")
// STDOUT: 打印可观察输出(空格被转义为 +)
println(result)   // OUT: a+b
// assert: 锁定结论
assert result == "a+b", "EscapeQueryUrl should escape space to plus"
``````````````


#### 定义

`EscapeUrl(s string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` | 待转义的字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 转义后的查询串字符串 |


### FixUTF8

#### 详细描述
EscapeInvalidUTF8Byte 将字节数据中的非法 UTF-8 字节与不可见控制字符转义为 \xNN 形式，得到可读字符串

参数:

  - s: 待修复的字节数据(可能含非法 UTF-8 或控制字符)



返回值:

  - 修复/转义后的可读 UTF-8 字符串




Example:

``````````````yak
// VARS: 合法字符串原样返回
result = codec.FixUTF8("hello")
// STDOUT: 打印可观察输出
println(result)   // OUT: hello
// assert: 锁定结论(合法输入保持不变)
assert result == "hello", "FixUTF8 should keep valid string unchanged"
``````````````


#### 定义

`FixUTF8(s []byte) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `[]byte` | 待修复的字节数据(可能含非法 UTF-8 或控制字符) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 修复/转义后的可读 UTF-8 字符串 |


### GB18030ToUTF8

#### 详细描述
GB18030ToUtf8 将 GB18030 编码的字节转换为 UTF-8 字节

参数:

  - s: GB18030 编码的字节数据



返回值:

  - []byte: 转换后的 UTF-8 字节

  - error: 转换失败时返回的错误




Example:

``````````````yak
// VARS: 先转 GB18030 再转回 UTF-8，波浪号自动解包 error
result = codec.GB18030ToUTF8(codec.UTF8ToGB18030("中文")~)~
// STDOUT: 转字符串后打印
println(string(result))   // OUT: 中文
// assert: 锁定结论(GB18030 与 UTF-8 往返一致)
assert string(result) == "中文", "GB18030/UTF8 should round-trip"
``````````````


#### 定义

`GB18030ToUTF8(s []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `[]byte` | GB18030 编码的字节数据 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 转换后的 UTF-8 字节 |
| r2 | `error` | 转换失败时返回的错误 |


### GBKSafe

#### 详细描述
GBKSafeString 将字节数据安全转换为可读字符串：已是合法 UTF-8 则原样返回，否则尝试按 GBK 解码为 UTF-8

参数:

  - s: 待转换的字节数据(可能是 UTF-8 或 GBK)



返回值:

  - string: 转换后的可读字符串

  - error: 既非合法 UTF-8 又无法按 GBK 解码时返回的错误




Example:

``````````````yak
// VARS: 合法 UTF-8 输入原样返回，波浪号自动解包 error
result = codec.GBKSafe("hello")~
// STDOUT: 打印可观察输出
println(result)   // OUT: hello
// assert: 锁定结论
assert result == "hello", "GBKSafe should return valid utf8 as-is"
``````````````


#### 定义

`GBKSafe(s []byte) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `[]byte` | 待转换的字节数据(可能是 UTF-8 或 GBK) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 转换后的可读字符串 |
| r2 | `error` | 既非合法 UTF-8 又无法按 GBK 解码时返回的错误 |


### GBKToUTF8

#### 详细描述
GbkToUtf8 将 GBK 编码的字节转换为 UTF-8 字节

参数:

  - s: GBK 编码的字节数据



返回值:

  - []byte: 转换后的 UTF-8 字节

  - error: 转换失败时返回的错误




Example:

``````````````yak
// VARS: 先转 GBK 再转回 UTF-8，波浪号自动解包 error
result = codec.GBKToUTF8(codec.UTF8ToGBK("中文")~)~
// STDOUT: 转字符串后打印
println(string(result))   // OUT: 中文
// assert: 锁定结论(GBK 与 UTF-8 往返一致)
assert string(result) == "中文", "GBK/UTF8 should round-trip"
``````````````


#### 定义

`GBKToUTF8(s []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `[]byte` | GBK 编码的字节数据 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 转换后的 UTF-8 字节 |
| r2 | `error` | 转换失败时返回的错误 |


### HTMLChardet

#### 详细描述
CharDetect 检测输入数据可能的字符集编码，返回所有候选结果(按置信度排序)

参数:

  - raw: 待检测的数据，可为 string、[]byte 等



返回值:

  - []chardet.Result: 候选字符集检测结果列表(含 Charset、Confidence 等字段)

  - error: 检测失败时返回的错误




Example:

``````````````yak
// VARS: 检测字符集，波浪号自动解包 error
results = codec.HTMLChardet("hello world, this is plain english text")~
// STDOUT: 打印是否得到候选结果
println(len(results) > 0)   // OUT: true
// assert: 锁定结论(返回非空候选列表)
assert len(results) > 0, "HTMLChardet should return candidates"
``````````````


#### 定义

`HTMLChardet(raw any) ([]chardet.Result, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `any` | 待检测的数据，可为 string、[]byte 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]chardet.Result` | []chardet.Result: 候选字符集检测结果列表(含 Charset、Confidence 等字段) |
| r2 | `error` | 检测失败时返回的错误 |


### HTMLChardetBest

#### 详细描述
CharDetectBest 检测输入数据最可能的字符集编码，返回置信度最高的单个结果

参数:

  - raw: 待检测的数据，可为 string、[]byte 等



返回值:

  - *chardet.Result: 置信度最高的字符集检测结果(含 Charset、Confidence 等字段)

  - error: 检测失败时返回的错误




Example:

``````````````yak
// VARS: 检测最佳字符集，波浪号自动解包 error
best = codec.HTMLChardetBest("hello world, this is plain english text")~
// STDOUT: 打印是否检测到结果
println(best != nil)   // OUT: true
// assert: 锁定结论(返回非空结果)
assert best != nil, "HTMLChardetBest should return a result"
``````````````


#### 定义

`HTMLChardetBest(raw any) (*chardet.Result, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `any` | 待检测的数据，可为 string、[]byte 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*chardet.Result` | *chardet.Result: 置信度最高的字符集检测结果(含 Charset、Confidence 等字段) |
| r2 | `error` | 检测失败时返回的错误 |


### HZGB2312ToUTF8

#### 详细描述
HZGB2312ToUtf8 将 HZ-GB2312 编码的字节转换为 UTF-8 字节

参数:

  - s: HZ-GB2312(兼容 GB18030 解码)编码的字节数据



返回值:

  - []byte: 转换后的 UTF-8 字节

  - error: 转换失败时返回的错误




Example:

``````````````yak
// VARS: GBK 编码的中文再用 HZGB2312ToUTF8 还原，波浪号自动解包 error
result = codec.HZGB2312ToUTF8(codec.UTF8ToGBK("中文")~)~
// STDOUT: 转字符串后打印
println(string(result))   // OUT: 中文
// assert: 锁定结论(还原为 UTF-8 中文)
assert string(result) == "中文", "HZGB2312ToUTF8 should recover utf8 chinese"
``````````````


#### 定义

`HZGB2312ToUTF8(s []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `[]byte` | HZ-GB2312(兼容 GB18030 解码)编码的字节数据 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 转换后的 UTF-8 字节 |
| r2 | `error` | 转换失败时返回的错误 |


### HmacMD5

#### 详细描述
HmacMD5 使用给定密钥计算数据的 HMAC-MD5 消息认证码，返回字节切片

参数:

  - key: 密钥，可为 string、[]byte 等

  - data: 待认证的数据，可为 string、[]byte 等



返回值:

  - HMAC-MD5 结果字节切片(16 字节，转 hex 后长度 32)




Example:

``````````````yak
// VARS: 计算 HMAC-MD5 并转 hex
result = codec.EncodeToHex(codec.HmacMD5("secret_key", "Important Message"))
// STDOUT: 打印长度
println(len(result))   // OUT: 32
// assert: 锁定结论(hex 长度固定为 32)
assert len(result) == 32, "HmacMD5 hex length should be 32"
``````````````


#### 定义

`HmacMD5(key any, data any) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `any` | 密钥，可为 string、[]byte 等 |
| data | `any` | 待认证的数据，可为 string、[]byte 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | HMAC-MD5 结果字节切片(16 字节，转 hex 后长度 32) |


### HmacSM3

#### 详细描述
HmacSM3 使用给定密钥计算数据的国密 HMAC-SM3 消息认证码，返回字节切片

参数:

  - key: 密钥，可为 string、[]byte 等

  - data: 待认证的数据，可为 string、[]byte 等



返回值:

  - HMAC-SM3 结果字节切片(32 字节，转 hex 后长度 64)




Example:

``````````````yak
// VARS: 计算 HMAC-SM3 并转 hex
result = codec.EncodeToHex(codec.HmacSM3("secret_key", "Important Message"))
// STDOUT: 打印长度
println(len(result))   // OUT: 64
// assert: 锁定结论(hex 长度固定为 64)
assert len(result) == 64, "HmacSM3 hex length should be 64"
``````````````


#### 定义

`HmacSM3(key any, data any) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `any` | 密钥，可为 string、[]byte 等 |
| data | `any` | 待认证的数据，可为 string、[]byte 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | HMAC-SM3 结果字节切片(32 字节，转 hex 后长度 64) |


### HmacSha1

#### 详细描述
HmacSha1 使用给定密钥计算数据的 HMAC-SHA1 消息认证码，返回字节切片

参数:

  - key: 密钥，可为 string、[]byte 等

  - data: 待认证的数据，可为 string、[]byte 等



返回值:

  - HMAC-SHA1 结果字节切片(20 字节，转 hex 后长度 40)




Example:

``````````````yak
// VARS: 计算 HMAC-SHA1 并转 hex
result = codec.EncodeToHex(codec.HmacSha1("secret_key", "Important Message"))
// STDOUT: 打印长度
println(len(result))   // OUT: 40
// assert: 锁定结论(hex 长度固定为 40)
assert len(result) == 40, "HmacSha1 hex length should be 40"
``````````````


#### 定义

`HmacSha1(key any, data any) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `any` | 密钥，可为 string、[]byte 等 |
| data | `any` | 待认证的数据，可为 string、[]byte 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | HMAC-SHA1 结果字节切片(20 字节，转 hex 后长度 40) |


### HmacSha256

#### 详细描述
HmacSha256 使用给定密钥计算数据的 HMAC-SHA256 消息认证码，返回字节切片

参数:

  - key: 密钥，可为 string、[]byte 等

  - data: 待认证的数据，可为 string、[]byte 等



返回值:

  - HMAC-SHA256 结果字节切片(32 字节，转 hex 后长度 64)




Example:

``````````````yak
// VARS: 计算 HMAC-SHA256 并转 hex
result = codec.EncodeToHex(codec.HmacSha256("secret_key", "Important Message"))
// STDOUT: 打印长度
println(len(result))   // OUT: 64
// assert: 锁定结论(相同输入结果稳定可复现)
assert len(result) == 64, "HmacSha256 hex length should be 64"
assert result == codec.EncodeToHex(codec.HmacSha256("secret_key", "Important Message")), "HmacSha256 should be deterministic"
``````````````


#### 定义

`HmacSha256(key any, data any) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `any` | 密钥，可为 string、[]byte 等 |
| data | `any` | 待认证的数据，可为 string、[]byte 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | HMAC-SHA256 结果字节切片(32 字节，转 hex 后长度 64) |


### HmacSha512

#### 详细描述
HmacSha512 使用给定密钥计算数据的 HMAC-SHA512 消息认证码，返回字节切片

参数:

  - key: 密钥，可为 string、[]byte 等

  - data: 待认证的数据，可为 string、[]byte 等



返回值:

  - HMAC-SHA512 结果字节切片(64 字节，转 hex 后长度 128)




Example:

``````````````yak
// VARS: 计算 HMAC-SHA512 并转 hex
result = codec.EncodeToHex(codec.HmacSha512("secret_key", "Important Message"))
// STDOUT: 打印长度
println(len(result))   // OUT: 128
// assert: 锁定结论(hex 长度固定为 128)
assert len(result) == 128, "HmacSha512 hex length should be 128"
``````````````


#### 定义

`HmacSha512(key any, data any) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `any` | 密钥，可为 string、[]byte 等 |
| data | `any` | 待认证的数据，可为 string、[]byte 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | HMAC-SHA512 结果字节切片(64 字节，转 hex 后长度 128) |


### IsUTF8

#### 详细描述
IsUTF8 判断输入数据是否为合法的 UTF-8 编码

参数:

  - i: 待检测的数据，可为 string、[]byte、io.Reader 等



返回值:

  - bool: 是合法 UTF-8 返回 true，否则 false

  - error: 读取数据失败时返回的错误




Example:

``````````````yak
// VARS: 检测合法 UTF-8，波浪号自动解包 error
result = codec.IsUTF8("hello")~
// STDOUT: 打印可观察输出
println(result)   // OUT: true
// assert: 锁定结论(ASCII 与中文均为合法 UTF-8)
assert result == true, "ascii should be valid utf8"
assert codec.IsUTF8("中文")~ == true, "chinese should be valid utf8"
``````````````


#### 定义

`IsUTF8(i any) (bool, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待检测的数据，可为 string、[]byte、io.Reader 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 是合法 UTF-8 返回 true，否则 false |
| r2 | `error` | 读取数据失败时返回的错误 |


### IsUTF8File

#### 详细描述
IsUTF8File 使用采样策略判断文件内容是否为合法 UTF-8 编码

小于 0.5K 的文件检查全部内容；0.5K-1K 检查一个 0.5K 采样；大于 1K 采样 4-8 段(每段约 256 个字符)。

参数:

  - filename: 待检测的文件路径



返回值:

  - bool: 文件内容为合法 UTF-8 返回 true，否则 false

  - error: 打开或读取文件失败时返回的错误




Example:

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


#### 定义

`IsUTF8File(filename string) (bool, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| filename | `string` | 待检测的文件路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 文件内容为合法 UTF-8 返回 true，否则 false |
| r2 | `error` | 打开或读取文件失败时返回的错误 |


### MMH3Hash128

#### 详细描述
MMH3Hash128 计算输入数据的 MurmurHash3 128 位哈希并返回十六进制字符串

参数:

  - i: 待哈希的数据，可为 string、[]byte 等



返回值:

  - 32 位十六进制 MurmurHash3 128 位哈希字符串




Example:

``````````````yak
// VARS: 计算 MMH3 128 位哈希
result = codec.MMH3Hash128("abc")
// STDOUT: 打印可观察输出
println(result)   // OUT: 6778ad3f3f3f96b4522dca264174a23b
// assert: 锁定结论(确定性哈希 + 固定长度)
assert result == "6778ad3f3f3f96b4522dca264174a23b", "MMH3Hash128 should match known value"
assert len(result) == 32, "MMH3Hash128 hex length should be 32"
``````````````


#### 定义

`MMH3Hash128(i any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待哈希的数据，可为 string、[]byte 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 32 位十六进制 MurmurHash3 128 位哈希字符串 |


### MMH3Hash128x64

#### 详细描述
MMH3Hash128x64 计算输入数据的 MurmurHash3 128 位(x64 变体)哈希并返回十六进制字符串

参数:

  - i: 待哈希的数据，可为 string、[]byte 等



返回值:

  - 32 位十六进制 MurmurHash3 128 位(x64)哈希字符串




Example:

``````````````yak
// VARS: 计算 MMH3 128 位(x64) 哈希
result = codec.MMH3Hash128x64("abc")
// STDOUT: 打印可观察输出
println(result)   // OUT: 6778ad3f3f3f96b4522dca264174a23b
// assert: 锁定结论(确定性哈希 + 固定长度)
assert result == "6778ad3f3f3f96b4522dca264174a23b", "MMH3Hash128x64 should match known value"
assert len(result) == 32, "MMH3Hash128x64 hex length should be 32"
``````````````


#### 定义

`MMH3Hash128x64(i any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待哈希的数据，可为 string、[]byte 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 32 位十六进制 MurmurHash3 128 位(x64)哈希字符串 |


### MMH3Hash32

#### 详细描述
MMH3Hash32 计算输入数据的 MurmurHash3 32 位非加密快速哈希，返回数值

参数:

  - i: 待哈希的数据，可为 string、[]byte 等



返回值:

  - MurmurHash3 32 位哈希值(int64)




Example:

``````````````yak
// VARS: 计算 MMH3 32 位哈希
result = codec.MMH3Hash32("abc")
// STDOUT: 打印可观察输出
println(result)   // OUT: 3017643002
// assert: 锁定结论(确定性哈希)
assert result == 3017643002, "MMH3Hash32 should match known value"
``````````````


#### 定义

`MMH3Hash32(i any) int64`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待哈希的数据，可为 string、[]byte 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int64` | MurmurHash3 32 位哈希值(int64) |


### Md5

#### 详细描述
Md5 计算输入数据的 MD5 摘要并返回十六进制字符串

参数:

  - i: 待计算摘要的数据，可为 string、[]byte 等



返回值:

  - 32 位十六进制 MD5 摘要字符串




Example:

``````````````yak
// VARS: 计算 MD5 摘要
result = codec.Md5("abc")
// STDOUT: 打印可观察输出
println(result)   // OUT: 900150983cd24fb0d6963f7d28e17f72
// assert: 锁定结论(已知摘要 + 固定长度)
assert result == "900150983cd24fb0d6963f7d28e17f72", "Md5 should match known digest"
assert len(result) == 32, "Md5 hex length should be 32"
``````````````


#### 定义

`Md5(i any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待计算摘要的数据，可为 string、[]byte 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 32 位十六进制 MD5 摘要字符串 |


### PBKDF2SHA1Key

#### 详细描述
PBKDF2SHA1Key 使用 PBKDF2-HMAC-SHA1 从口令与盐派生固定长度的密钥(如微信 wxapkg V1MMWX 解密)

参数:

  - password: 口令，可为 string、[]byte 等

  - salt: 盐值，可为 string、[]byte 等

  - iterations: 迭代次数，&lt;=0 时使用默认值 10000

  - keyLen: 派生密钥长度(字节)，&lt;=0 时使用默认值 32



返回值:

  - []byte: 派生出的密钥字节

  - error: 派生失败时返回的错误




Example:

``````````````yak
// VARS: 从口令与盐派生 16 字节密钥
key = codec.PBKDF2SHA1Key("password", "salt", 1000, 16)~
// STDOUT: 打印密钥长度
println(len(key))   // OUT: 16
// assert: 锁定结论(长度符合 + 确定性可复现)
assert len(key) == 16, "PBKDF2SHA1Key should produce key of requested length"
assert codec.EncodeToHex(key) == codec.EncodeToHex(codec.PBKDF2SHA1Key("password", "salt", 1000, 16)~), "PBKDF2 should be deterministic"
``````````````


#### 定义

`PBKDF2SHA1Key(password any, salt any, iterations int, keyLen int) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| password | `any` | 口令，可为 string、[]byte 等 |
| salt | `any` | 盐值，可为 string、[]byte 等 |
| iterations | `int` | 迭代次数，&lt;=0 时使用默认值 10000 |
| keyLen | `int` | 派生密钥长度(字节)，&lt;=0 时使用默认值 32 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 派生出的密钥字节 |
| r2 | `error` | 派生失败时返回的错误 |


### PKCS5Padding

#### 详细描述
PKCS5Padding 对数据按指定块大小做 PKCS5/PKCS7 填充，使其长度补齐到块大小的整数倍

参数:

  - ciphertext: 待填充的原始数据

  - blockSize: 块大小(字节)，如 8 或 16



返回值:

  - 填充后的字节切片




Example:

``````````````yak
// VARS: 把 2 字节数据填充到 16 字节块
result = codec.PKCS5Padding([]byte("hi"), 16)
// STDOUT: 打印长度
println(len(result))   // OUT: 16
// assert: 锁定结论(可用 PKCS5UnPadding 去填充)
assert len(result) == 16, "PKCS5Padding should pad to block size"
assert string(codec.PKCS5UnPadding(result)) == "hi", "PKCS5 pad/unpad should round-trip"
``````````````


#### 定义

`PKCS5Padding(ciphertext []byte, blockSize int) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ciphertext | `[]byte` | 待填充的原始数据 |
| blockSize | `int` | 块大小(字节)，如 8 或 16 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 填充后的字节切片 |


### PKCS5UnPadding

#### 详细描述
PKCS5UnPadding 去除数据末尾的 PKCS5/PKCS7 填充，返回原始数据

参数:

  - origData: 带填充的数据



返回值:

  - 去除填充后的字节切片




Example:

``````````````yak
// VARS: 先填充再去填充
padded = codec.PKCS5Padding([]byte("hi"), 16)
result = codec.PKCS5UnPadding(padded)
// STDOUT: 转字符串后打印
println(string(result))   // OUT: hi
// assert: 锁定结论(还原原始数据)
assert string(result) == "hi", "PKCS5UnPadding should remove padding"
``````````````


#### 定义

`PKCS5UnPadding(origData []byte) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| origData | `[]byte` | 带填充的数据 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 去除填充后的字节切片 |


### PKCS7Padding

#### 详细描述
暂无描述

#### 定义

`PKCS7Padding(src []byte) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| src | `[]byte` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |  |


### PKCS7PaddingForDES

#### 详细描述
PKCS7PaddingFor8ByteBlock 按 8 字节块大小对数据做 PKCS7/PKCS5 填充(常用于 DES)

参数:

  - src: 待填充的数据字节



返回值:

  - 填充到 8 字节整数倍后的数据字节




Example:

``````````````yak
// VARS: 对 3 字节数据按 8 字节块填充
padded = codec.PKCS7PaddingForDES("abc")
// STDOUT: 打印填充后的长度
println(len(padded))   // OUT: 8
// assert: 锁定结论(去填充可还原原始数据)
assert string(codec.PKCS7UnPaddingForDES(padded)) == "abc", "PKCS7 for DES padding/unpadding should round-trip"
``````````````


#### 定义

`PKCS7PaddingForDES(src []byte) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| src | `[]byte` | 待填充的数据字节 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 填充到 8 字节整数倍后的数据字节 |


### PKCS7UnPadding

#### 详细描述
暂无描述

#### 定义

`PKCS7UnPadding(src []byte) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| src | `[]byte` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |  |


### PKCS7UnPaddingForDES

#### 详细描述
PKCS7UnPaddingFor8ByteBlock 去除 8 字节块大小的 PKCS7/PKCS5 填充(常用于 DES)

参数:

  - src: 含 PKCS7 填充的数据字节



返回值:

  - 去除填充后的原始数据字节




Example:

``````````````yak
// VARS: 填充后再去填充往返
padded = codec.PKCS7PaddingForDES("abc")
unpadded = codec.PKCS7UnPaddingForDES(padded)
// STDOUT: 打印去填充后的结果
println(string(unpadded))   // OUT: abc
// assert: 锁定结论(去填充还原原始数据)
assert string(unpadded) == "abc", "PKCS7 for DES unpadding should recover original data"
``````````````


#### 定义

`PKCS7UnPaddingForDES(src []byte) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| src | `[]byte` | 含 PKCS7 填充的数据字节 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 去除填充后的原始数据字节 |


### RC4Decrypt

#### 详细描述
RC4Decrypt 使用 RC4 流密码解密数据(RC4 加解密为同一运算)

参数:

  - cipherKey: RC4 密钥(长度可变)

  - cipherText: 待解密的密文字节



返回值:

  - []byte: 解密还原后的明文字节

  - error: 密钥非法等错误




Example:

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


#### 定义

`RC4Decrypt(cipherKey []byte, cipherText []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cipherKey | `[]byte` | RC4 密钥(长度可变) |
| cipherText | `[]byte` | 待解密的密文字节 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 密钥非法等错误 |


### RC4Encrypt

#### 详细描述
RC4Encrypt 使用 RC4 流密码加密数据(RC4 加解密为同一运算)

参数:

  - cipherKey: RC4 密钥(长度可变)

  - plainText: 待加密的明文字节



返回值:

  - []byte: 加密后的密文字节

  - error: 密钥非法等错误




Example:

``````````````yak
// VARS: RC4 加解密往返
key = "secretkey"
ct = codec.RC4Encrypt(key, "Secret Message")~
// STDOUT: 解密还原后打印
println(string(codec.RC4Decrypt(key, ct)~))   // OUT: Secret Message
// assert: 锁定结论(RC4 加解密往返一致)
assert string(codec.RC4Decrypt(key, ct)~) == "Secret Message", "RC4 encrypt/decrypt should round-trip"
``````````````


#### 定义

`RC4Encrypt(cipherKey []byte, plainText []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cipherKey | `[]byte` | RC4 密钥(长度可变) |
| plainText | `[]byte` | 待加密的明文字节 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 密钥非法等错误 |


### RSADecryptWithJSEncryptStyle

#### 详细描述
RSADecryptWithJSEncryptStyle is an alias for PKCS#1 v1.5 block decryption compatibility.


#### 定义

`RSADecryptWithJSEncryptStyle(privKeyPem string, ciphertext []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| privKeyPem | `string` |  |
| ciphertext | `[]byte` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |  |
| r2 | `error` |  |


### RSADecryptWithOAEP

#### 详细描述
RSADecryptWithOAEP 使用 RSA私钥 和 RSA-OAEP 填充方式解密给定的密文。
参数 raw 表示 RSA 私钥，支持以下格式：
  - DER 编码的私钥（raw ASN.1 DER 字节流）
  - Base64 编码的 DER 格式（自动解码）
  - PEM 编码（包括带有 &#34;-----BEGIN PRIVATE KEY-----&#34; 或 &#34;-----BEGIN RSA PRIVATE KEY-----&#34; 的块）
  - Base64 编码的 PEM 格式（自动解码）

参数 data 是加密后的数据（密文），可以是 []byte 或 base64 字符串等支持类型。
返回值是解密得到的原始明文，如果失败则返回错误。


Example:

``````````````yak
raw := `
-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASC...（略）
-----END PRIVATE KEY-----
`
plaintext, err := Pkcs1v15Decrypt([]byte(raw), encryptedData)
``````````````


#### 定义

`RSADecryptWithOAEP(raw []byte, data any) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` |  |
| data | `any` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | ----BEGIN PRIVATE KEY----- |
| r2 | `error` | ----END PRIVATE KEY----- |


### RSADecryptWithPKCS1v15

#### 详细描述
DecryptWithPkcs1v15/RSADecryptWithPKCS1v15 使用 RSA私钥 和 PKCS#1 v1.5填充方式 解密给定的密文。

参数 raw 表示 RSA 私钥，支持以下格式：

  - DER 编码的私钥（raw ASN.1 DER 字节流）

  - Base64 编码的 DER 格式（自动解码）

  - PEM 编码（包括带有 &#34;-----BEGIN PRIVATE KEY-----&#34; 或 &#34;-----BEGIN RSA PRIVATE KEY-----&#34; 的块）

  - Base64 编码的 PEM 格式（自动解码）



参数 data 是被加密后的数据（密文）

返回值是解密得到的原始明文，如果失败则返回错误。



参数:

  - raw: RSA 私钥（支持 DER/PEM/Base64 等格式）

  - data: 要解密的密文数据（[]byte、string 等）



返回值:

  - 解密得到的明文字节数组

  - 错误信息，解密失败时返回非空




Example:

``````````````yak
raw := `
-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASC...（略）
-----END PRIVATE KEY-----
`
plaintext, err := DecryptWithPkcs1v15(raw, encryptedData)
	plaintext, err := RSADecryptWithPKCS1v15(raw, encryptedData)
``````````````


#### 定义

`RSADecryptWithPKCS1v15(raw []byte, data any) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` | RSA 私钥（支持 DER/PEM/Base64 等格式） |
| data | `any` | 要解密的密文数据（[]byte、string 等） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 解密得到的明文字节数组 |
| r2 | `error` | 错误信息，解密失败时返回非空 |


### RSADecryptWithPKCS1v15Block

#### 详细描述
RSADecryptWithPKCS1v15Block decrypts ciphertext with PKCS#1 v1.5 and automatically chunks by key size.


#### 定义

`RSADecryptWithPKCS1v15Block(privKeyPem string, ciphertext []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| privKeyPem | `string` |  |
| ciphertext | `[]byte` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |  |
| r2 | `error` |  |


### RSAEncryptWithJSEncryptStyle

#### 详细描述
RSAEncryptWithJSEncryptStyle is an alias for PKCS#1 v1.5 block encryption compatibility.


#### 定义

`RSAEncryptWithJSEncryptStyle(pubKeyPem string, data []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pubKeyPem | `string` |  |
| data | `[]byte` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |  |
| r2 | `error` |  |


### RSAEncryptWithOAEP

#### 详细描述
RSAEncryptWithOAEP 使用 RSA 公钥和 OAEP 填充方式对给定数据进行加密。



参数 raw 表示 RSA 公钥，支持以下格式：

  - DER 编码的公钥（raw ASN.1 DER 字节流）

  - Base64 编码的 DER 格式（自动解码）

  - PEM 编码（例如 &#34;-----BEGIN PUBLIC KEY-----&#34; 或 &#34;-----BEGIN RSA PUBLIC KEY-----&#34; 块）

  - Base64 编码的 PEM 格式（自动解码）



参数 data 是要加密的明文数据，可以是 []byte、string 或其他可转换为字节数组的类型。

返回值是加密后的密文（字节切片），如果加密失败则返回错误。




Example:

``````````````yak
raw := `
-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAn...（略）
-----END PUBLIC KEY-----
`
ciphertext, err := RSAEncryptWithOAEP(raw, "hello world")
``````````````


#### 定义

`RSAEncryptWithOAEP(raw []byte, data any) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` |  |
| data | `any` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |  |
| r2 | `error` |  |


### RSAEncryptWithPKCS1v15

#### 详细描述
EncryptWithPkcs1v15/RSAEncryptWithPKCS1v15 使用 RSA 公钥和 PKCS#1 v1.5 填充方式对给定数据进行加密。



参数:

  - raw: RSA 公钥（支持 DER/PEM/Base64 等格式）

  - data: 要加密的明文数据（[]byte、string 等）



返回值:

  - 加密后的密文字节数组

  - 错误信息，加密失败时返回非空



参数 raw 表示 RSA 公钥，支持以下格式：

  - DER 编码的公钥（raw ASN.1 DER 字节流）

  - Base64 编码的 DER 格式（自动解码）

  - PEM 编码（例如 &#34;-----BEGIN PUBLIC KEY-----&#34; 或 &#34;-----BEGIN RSA PUBLIC KEY-----&#34; 块）

  - Base64 编码的 PEM 格式（自动解码）



参数 data 是要加密的明文数据，可以是 []byte、string 或其他可转换为字节数组的类型。

返回值是加密后的密文（字节切片），如果加密失败则返回错误。




Example:

``````````````yak
raw := `
-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAn...（略）
-----END PUBLIC KEY-----
`
ciphertext, err := EncryptWithPkcs1v15(raw, "hello world")
ciphertext, err := RSAEncryptWithPKCS1v15(raw, "hello world")
``````````````


#### 定义

`RSAEncryptWithPKCS1v15(raw []byte, data any) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` | RSA 公钥（支持 DER/PEM/Base64 等格式） |
| data | `any` | 要加密的明文数据（[]byte、string 等） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 加密后的密文字节数组 |
| r2 | `error` | 错误信息，加密失败时返回非空 |


### RSAEncryptWithPKCS1v15Block

#### 详细描述
RSAEncryptWithPKCS1v15Block encrypts plaintext with PKCS#1 v1.5 and automatically chunks long plaintext.


#### 定义

`RSAEncryptWithPKCS1v15Block(pubKeyPem string, data []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pubKeyPem | `string` |  |
| data | `[]byte` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |  |
| r2 | `error` |  |


### RSASignWithPKCS1v15Digest

#### 详细描述
RSASignWithPKCS1v15Digest signs data using PKCS#1 v1.5 with sha256/sha512.


#### 定义

`RSASignWithPKCS1v15Digest(privKeyPem string, data []byte, algo string) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| privKeyPem | `string` |  |
| data | `[]byte` |  |
| algo | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |  |
| r2 | `error` |  |


### RSAVerifyWithPKCS1v15Digest

#### 详细描述
RSAVerifyWithPKCS1v15Digest verifies RSA signature using PKCS#1 v1.5 with sha256/sha512.


#### 定义

`RSAVerifyWithPKCS1v15Digest(pubKeyPem string, data []byte, signature []byte, algo string) (bool, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pubKeyPem | `string` |  |
| data | `[]byte` |  |
| signature | `[]byte` |  |
| algo | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |  |
| r2 | `error` |  |


### RandBytes

#### 详细描述
RandBytes 生成 n 个密码学安全的随机字节

参数:

  - n: 需要生成的随机字节数量



返回值:

  - 长度为 n 的随机字节切片(读取失败时返回 nil)




Example:

``````````````yak
// VARS: 生成 16 个随机字节(每次结果不同)
result = codec.RandBytes(16)
// STDOUT: 打印长度
println(len(result))   // OUT: 16
// assert: 锁定结论(长度固定为请求值)
assert len(result) == 16, "RandBytes should produce requested length"
``````````````


#### 定义

`RandBytes(n int) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `int` | 需要生成的随机字节数量 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 长度为 n 的随机字节切片(读取失败时返回 nil) |


### Sha1

#### 详细描述
Sha1 计算输入数据的 SHA-1 摘要并返回十六进制字符串

参数:

  - i: 待计算摘要的数据，可为 string、[]byte 等



返回值:

  - 40 位十六进制 SHA-1 摘要字符串




Example:

``````````````yak
// VARS: 计算 SHA-1 摘要
result = codec.Sha1("abc")
// STDOUT: 打印可观察输出
println(result)   // OUT: a9993e364706816aba3e25717850c26c9cd0d89d
// assert: 锁定结论(已知摘要 + 固定长度)
assert result == "a9993e364706816aba3e25717850c26c9cd0d89d", "Sha1 should match known digest"
assert len(result) == 40, "Sha1 hex length should be 40"
``````````````


#### 定义

`Sha1(i any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待计算摘要的数据，可为 string、[]byte 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 40 位十六进制 SHA-1 摘要字符串 |


### Sha224

#### 详细描述
Sha224 计算输入数据的 SHA-224 摘要并返回十六进制字符串

参数:

  - i: 待计算摘要的数据，可为 string、[]byte 等



返回值:

  - 56 位十六进制 SHA-224 摘要字符串




Example:

``````````````yak
// VARS: 计算 SHA-224 摘要
result = codec.Sha224("abc")
// STDOUT: 打印可观察输出
println(result)   // OUT: 23097d223405d8228642a477bda255b32aadbce4bda0b3f7e36c9da7
// assert: 锁定结论(已知摘要 + 固定长度)
assert result == "23097d223405d8228642a477bda255b32aadbce4bda0b3f7e36c9da7", "Sha224 should match known digest"
assert len(result) == 56, "Sha224 hex length should be 56"
``````````````


#### 定义

`Sha224(i any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待计算摘要的数据，可为 string、[]byte 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 56 位十六进制 SHA-224 摘要字符串 |


### Sha256

#### 详细描述
Sha256 计算输入数据的 SHA-256 摘要并返回十六进制字符串

参数:

  - i: 待计算摘要的数据，可为 string、[]byte 等



返回值:

  - 64 位十六进制 SHA-256 摘要字符串




Example:

``````````````yak
// VARS: 计算 SHA-256 摘要
result = codec.Sha256("abc")
// STDOUT: 打印可观察输出
println(result)   // OUT: ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad
// assert: 锁定结论(已知摘要 + 固定长度)
assert result == "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad", "Sha256 should match known digest"
assert len(result) == 64, "Sha256 hex length should be 64"
``````````````


#### 定义

`Sha256(i any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待计算摘要的数据，可为 string、[]byte 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 64 位十六进制 SHA-256 摘要字符串 |


### Sha384

#### 详细描述
Sha384 计算输入数据的 SHA-384 摘要并返回十六进制字符串

参数:

  - i: 待计算摘要的数据，可为 string、[]byte 等



返回值:

  - 96 位十六进制 SHA-384 摘要字符串




Example:

``````````````yak
// VARS: 计算 SHA-384 摘要
result = codec.Sha384("abc")
// STDOUT: 打印长度
println(len(result))   // OUT: 96
// assert: 锁定结论(已知摘要 + 固定长度)
assert result == "cb00753f45a35e8bb5a03d699ac65007272c32ab0eded1631a8b605a43ff5bed8086072ba1e7cc2358baeca134c825a7", "Sha384 should match known digest"
assert len(result) == 96, "Sha384 hex length should be 96"
``````````````


#### 定义

`Sha384(i any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待计算摘要的数据，可为 string、[]byte 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 96 位十六进制 SHA-384 摘要字符串 |


### Sha512

#### 详细描述
Sha512 计算输入数据的 SHA-512 摘要并返回十六进制字符串

参数:

  - i: 待计算摘要的数据，可为 string、[]byte 等



返回值:

  - 128 位十六进制 SHA-512 摘要字符串




Example:

``````````````yak
// VARS: 计算 SHA-512 摘要
result = codec.Sha512("abc")
// STDOUT: 打印长度
println(len(result))   // OUT: 128
// assert: 锁定结论(已知摘要 + 固定长度)
assert result == "ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f", "Sha512 should match known digest"
assert len(result) == 128, "Sha512 hex length should be 128"
``````````````


#### 定义

`Sha512(i any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` | 待计算摘要的数据，可为 string、[]byte 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 128 位十六进制 SHA-512 摘要字符串 |


### SignSHA256WithRSA

#### 详细描述
SignSHA256WithRSA 使用RSA私钥对数据进行SHA256签名，返回签名与错误


Example:

``````````````yak
pemBytes = string(`-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDZz5Zz3z3z3z3z
...
-----END PRIVATE KEY-----`)
signBytes, err := tls.SignSHA256WithRSA(pemBytes, "hello")
die(err)
signString = string(signBytes)
``````````````


#### 定义

`SignSHA256WithRSA(pemBytes []byte, data any) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pemBytes | `[]byte` |  |
| data | `any` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |  |
| r2 | `error` |  |


### SignSHA512WithRSA

#### 详细描述
SignSHA512WithRSA 使用RSA私钥对数据进行SHA512签名，返回签名与错误


Example:

``````````````yak
pemBytes = string(`-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDZz5Zz3z3z3z3z
...
-----END PRIVATE KEY-----`)
signBytes, err := tls.SignSHA512WithRSA(pemBytes, "hello")
die(err)
signString = string(signBytes)
``````````````


#### 定义

`SignSHA512WithRSA(pemBytes []byte, data any) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pemBytes | `[]byte` |  |
| data | `any` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |  |
| r2 | `error` |  |


### SignVerifySHA256WithRSA

#### 详细描述
SignVerifySHA256WithRSA 使用RSA公钥对数据进行SHA256签名验证，返回错误


Example:

``````````````yak
pemBytes = string(`-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAs1pvFYNQpPSPbshg6F7Z
...
-----END PUBLIC KEY-----`)
err := tls.PemVerifySignSha256WithRSA(pemBytes, "hello", signBytes)
die(err)
``````````````


#### 定义

`SignVerifySHA256WithRSA(pemBytes []byte, originData any, sign []byte) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pemBytes | `[]byte` |  |
| originData | `any` |  |
| sign | `[]byte` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |  |


### SignVerifySHA512WithRSA

#### 详细描述
SignVerifySHA512WithRSA 使用RSA公钥对数据进行SHA512签名验证，返回错误


Example:

``````````````yak
pemBytes = string(`-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAs1pvFYNQpPSPbshg6F7Z
...
-----END PUBLIC KEY-----`)
err := tls.PemVerifySignSha512WithRSA(pemBytes, "hello", signBytes)
die(err)
``````````````


#### 定义

`SignVerifySHA512WithRSA(pemBytes []byte, originData any, sign []byte) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pemBytes | `[]byte` |  |
| originData | `any` |  |
| sign | `[]byte` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |  |


### Sm2Decrypt

#### 详细描述
SM2DecryptC1C2C3 使用国密 SM2 私钥按 C1C2C3 密文排列解密数据

注意：Sm2Decrypt 和 Sm2DecryptC1C2C3 是同一个函数的别名

参数:

  - priKey: SM2 私钥(支持 PEM/HEX/原始字节)

  - data: 待解密的密文字节



返回值:

  - []byte: 解密还原后的明文字节

  - error: 解密失败时返回的错误




Example:

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


#### 定义

`Sm2Decrypt(priKey []byte, data []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| priKey | `[]byte` | SM2 私钥(支持 PEM/HEX/原始字节) |
| data | `[]byte` | 待解密的密文字节 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |


### Sm2DecryptAsn1

#### 详细描述
SM2DecryptASN1 使用国密 SM2 私钥按 ASN.1 编码格式解密数据

注意：Sm2DecryptAsn1 是本函数的导出名

参数:

  - priKey: SM2 私钥(支持 PEM/HEX/原始字节)

  - data: 待解密的 ASN.1 编码密文字节



返回值:

  - []byte: 解密还原后的明文字节

  - error: 解密失败时返回的错误




Example:

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


#### 定义

`Sm2DecryptAsn1(priKey []byte, data []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| priKey | `[]byte` | SM2 私钥(支持 PEM/HEX/原始字节) |
| data | `[]byte` | 待解密的 ASN.1 编码密文字节 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |


### Sm2DecryptAsn1WithPassword

#### 详细描述
SM2DecryptASN1WithPassword 使用带密码保护的国密 SM2 私钥按 ASN.1 编码格式解密数据

注意：Sm2DecryptAsn1WithPassword 是本函数的导出名

参数:

  - priKey: SM2 私钥(支持 PEM/HEX/原始字节，可为加密私钥)

  - data: 待解密的 ASN.1 编码密文字节

  - password: 私钥保护密码，未加密时传 nil



返回值:

  - []byte: 解密还原后的明文字节

  - error: 解密失败时返回的错误




Example:

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


#### 定义

`Sm2DecryptAsn1WithPassword(priKey []byte, data []byte, password []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| priKey | `[]byte` | SM2 私钥(支持 PEM/HEX/原始字节，可为加密私钥) |
| data | `[]byte` | 待解密的 ASN.1 编码密文字节 |
| password | `[]byte` | 私钥保护密码，未加密时传 nil |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |


### Sm2DecryptC1C2C3

#### 详细描述
SM2DecryptC1C2C3 使用国密 SM2 私钥按 C1C2C3 密文排列解密数据

注意：Sm2Decrypt 和 Sm2DecryptC1C2C3 是同一个函数的别名

参数:

  - priKey: SM2 私钥(支持 PEM/HEX/原始字节)

  - data: 待解密的密文字节



返回值:

  - []byte: 解密还原后的明文字节

  - error: 解密失败时返回的错误




Example:

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


#### 定义

`Sm2DecryptC1C2C3(priKey []byte, data []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| priKey | `[]byte` | SM2 私钥(支持 PEM/HEX/原始字节) |
| data | `[]byte` | 待解密的密文字节 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |


### Sm2DecryptC1C2C3WithPassword

#### 详细描述
SM2DecryptC1C2C3WithPassword 使用带密码保护的国密 SM2 私钥按 C1C2C3 密文排列解密数据

参数:

  - priKey: SM2 私钥(支持 PEM/HEX/原始字节，可为加密私钥)

  - data: 待解密的密文字节

  - password: 私钥保护密码，未加密时传 nil



返回值:

  - []byte: 解密还原后的明文字节

  - error: 解密失败时返回的错误




Example:

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


#### 定义

`Sm2DecryptC1C2C3WithPassword(priKey []byte, data []byte, password []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| priKey | `[]byte` | SM2 私钥(支持 PEM/HEX/原始字节，可为加密私钥) |
| data | `[]byte` | 待解密的密文字节 |
| password | `[]byte` | 私钥保护密码，未加密时传 nil |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |


### Sm2DecryptC1C3C2

#### 详细描述
SM2DecryptC1C3C2 使用国密 SM2 私钥按 C1C3C2 密文排列解密数据

参数:

  - priKey: SM2 私钥(支持 PEM/HEX/原始字节)

  - data: 待解密的密文字节



返回值:

  - []byte: 解密还原后的明文字节

  - error: 解密失败时返回的错误




Example:

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


#### 定义

`Sm2DecryptC1C3C2(priKey []byte, data []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| priKey | `[]byte` | SM2 私钥(支持 PEM/HEX/原始字节) |
| data | `[]byte` | 待解密的密文字节 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |


### Sm2DecryptC1C3C2WithPassword

#### 详细描述
SM2DecryptC1C3C2WithPassword 使用带密码保护的国密 SM2 私钥按 C1C3C2 密文排列解密数据

参数:

  - priKey: SM2 私钥(支持 PEM/HEX/原始字节，可为加密私钥)

  - data: 待解密的密文字节

  - password: 私钥保护密码，未加密时传 nil



返回值:

  - []byte: 解密还原后的明文字节

  - error: 解密失败时返回的错误




Example:

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


#### 定义

`Sm2DecryptC1C3C2WithPassword(priKey []byte, data []byte, password []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| priKey | `[]byte` | SM2 私钥(支持 PEM/HEX/原始字节，可为加密私钥) |
| data | `[]byte` | 待解密的密文字节 |
| password | `[]byte` | 私钥保护密码，未加密时传 nil |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |


### Sm2Encrypt

#### 详细描述
SM2EncryptC1C2C3 使用国密 SM2 公钥按 C1C2C3 密文排列加密数据

注意：Sm2Encrypt 和 Sm2EncryptC1C2C3 是同一个函数的别名

参数:

  - pubKey: SM2 公钥(支持 PEM/HEX/原始字节)

  - data: 待加密的数据字节



返回值:

  - []byte: 加密后的密文字节(每次随机，结果不固定)

  - error: 加密失败时返回的错误




Example:

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


#### 定义

`Sm2Encrypt(pubKey []byte, data []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pubKey | `[]byte` | SM2 公钥(支持 PEM/HEX/原始字节) |
| data | `[]byte` | 待加密的数据字节 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 加密后的密文字节(每次随机，结果不固定) |
| r2 | `error` | 加密失败时返回的错误 |


### Sm2EncryptAsn1

#### 详细描述
SM2EncryptASN1 使用国密 SM2 公钥按 ASN.1 编码格式加密数据

注意：Sm2EncryptAsn1 是本函数的导出名

参数:

  - pubKey: SM2 公钥(支持 PEM/HEX/原始字节)

  - data: 待加密的数据字节



返回值:

  - []byte: ASN.1 编码的密文字节(每次随机，结果不固定)

  - error: 加密失败时返回的错误




Example:

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


#### 定义

`Sm2EncryptAsn1(pubKey []byte, data []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pubKey | `[]byte` | SM2 公钥(支持 PEM/HEX/原始字节) |
| data | `[]byte` | 待加密的数据字节 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: ASN.1 编码的密文字节(每次随机，结果不固定) |
| r2 | `error` | 加密失败时返回的错误 |


### Sm2EncryptC1C2C3

#### 详细描述
SM2EncryptC1C2C3 使用国密 SM2 公钥按 C1C2C3 密文排列加密数据

注意：Sm2Encrypt 和 Sm2EncryptC1C2C3 是同一个函数的别名

参数:

  - pubKey: SM2 公钥(支持 PEM/HEX/原始字节)

  - data: 待加密的数据字节



返回值:

  - []byte: 加密后的密文字节(每次随机，结果不固定)

  - error: 加密失败时返回的错误




Example:

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


#### 定义

`Sm2EncryptC1C2C3(pubKey []byte, data []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pubKey | `[]byte` | SM2 公钥(支持 PEM/HEX/原始字节) |
| data | `[]byte` | 待加密的数据字节 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 加密后的密文字节(每次随机，结果不固定) |
| r2 | `error` | 加密失败时返回的错误 |


### Sm2EncryptC1C3C2

#### 详细描述
SM2EncryptC1C3C2 使用国密 SM2 公钥按 C1C3C2 密文排列加密数据

参数:

  - pubKey: SM2 公钥(支持 PEM/HEX/原始字节)

  - data: 待加密的数据字节



返回值:

  - []byte: 加密后的密文字节(每次随机，结果不固定)

  - error: 加密失败时返回的错误




Example:

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


#### 定义

`Sm2EncryptC1C3C2(pubKey []byte, data []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pubKey | `[]byte` | SM2 公钥(支持 PEM/HEX/原始字节) |
| data | `[]byte` | 待加密的数据字节 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 加密后的密文字节(每次随机，结果不固定) |
| r2 | `error` | 加密失败时返回的错误 |


### Sm2GenerateHexKeyPair

#### 详细描述
GenerateSM2PrivateKeyHEX 生成一对国密 SM2 密钥(HEX 文本格式)

返回值:

  - []byte: SM2 私钥(HEX 文本)

  - []byte: SM2 公钥(HEX 文本)

  - error: 生成失败时返回的错误




Example:

``````````````yak
// VARS: 生成 HEX 格式 SM2 密钥对(返回顺序: 私钥, 公钥)
priv, pub = codec.Sm2GenerateHexKeyPair()~
// STDOUT: 打印是否生成非空密钥对
println(len(priv) > 0 && len(pub) > 0)   // OUT: true
// assert: 锁定结论(生成非空密钥对)
assert len(priv) > 0 && len(pub) > 0, "Sm2GenerateHexKeyPair should produce keypair"
``````````````


#### 定义

`Sm2GenerateHexKeyPair() ([]byte, []byte, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: SM2 私钥(HEX 文本) |
| r2 | `[]byte` | []byte: SM2 公钥(HEX 文本) |
| r3 | `error` | 生成失败时返回的错误 |


### Sm2GeneratePemKeyPair

#### 详细描述
GenerateSM2PrivateKeyPEM 生成一对国密 SM2 密钥(PEM 文本格式)

返回值:

  - []byte: SM2 私钥(PEM 文本)

  - []byte: SM2 公钥(PEM 文本)

  - error: 生成失败时返回的错误




Example:

``````````````yak
// VARS: 生成 PEM 格式 SM2 密钥对(返回顺序: 私钥, 公钥)
priv, pub = codec.Sm2GeneratePemKeyPair()~
// STDOUT: 打印私钥是否为 PEM 文本
println(str.HasPrefix(string(priv), "-----BEGIN"))   // OUT: true
// assert: 锁定结论(生成非空密钥对)
assert len(priv) > 0 && len(pub) > 0, "Sm2GeneratePemKeyPair should produce keypair"
``````````````


#### 定义

`Sm2GeneratePemKeyPair() ([]byte, []byte, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: SM2 私钥(PEM 文本) |
| r2 | `[]byte` | []byte: SM2 公钥(PEM 文本) |
| r3 | `error` | 生成失败时返回的错误 |


### Sm2GenerateTemporaryKeyPair

#### 详细描述
SM2GenerateTemporaryKeyPair 生成用于密钥交换的临时密钥对



返回值：

  - []byte: 临时私钥（HEX格式）

  - []byte: 临时公钥（HEX格式）

  - error: 错误信息




Example:

``````````````yak
tempPriKey, tempPubKey, err := codec.Sm2GenerateTemporaryKeyPair()
die(err)
println("临时私钥:", string(tempPriKey))
println("临时公钥:", string(tempPubKey))
``````````````


#### 定义

`Sm2GenerateTemporaryKeyPair() ([]byte, []byte, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 临时私钥（HEX格式） |
| r2 | `[]byte` | []byte: 临时公钥（HEX格式） |
| r3 | `error` | 错误信息 |


### Sm2KeyExchange

#### 详细描述
SM2KeyExchange 执行SM2密钥交换算法



参数说明：

  - keyLength: 期望的共享密钥长度（字节）

  - idA: A方标识（[]byte）

  - idB: B方标识（[]byte）

  - priKey: 调用方私钥（[]byte，支持PEM、HEX、原始字节）

  - pubKey: 对方公钥（[]byte，支持PEM、HEX、原始字节）

  - tempPriKey: 调用方临时私钥（[]byte，支持PEM、HEX、原始字节）

  - tempPubKey: 对方临时公钥（[]byte，支持PEM、HEX、原始字节）

  - thisIsA: 如果是A方调用设置为true，B方调用设置为false



返回值：

  - sharedKey: 协商得到的共享密钥（[]byte）

  - s1: 验证值S1，用于A验证B的身份（[]byte）

  - s2: 验证值S2，用于B验证A的身份（[]byte）

  - error: 错误信息




Example:

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


#### 定义

`Sm2KeyExchange(keyLength int, idA []byte, idB []byte, priKey []byte, pubKey []byte, tempPriKey []byte, tempPubKey []byte, thisIsA bool) ([]byte, []byte, []byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| keyLength | `int` | 期望的共享密钥长度（字节） |
| idA | `[]byte` | A方标识（[]byte） |
| idB | `[]byte` | B方标识（[]byte） |
| priKey | `[]byte` | 调用方私钥（[]byte，支持PEM、HEX、原始字节） |
| pubKey | `[]byte` | 对方公钥（[]byte，支持PEM、HEX、原始字节） |
| tempPriKey | `[]byte` | 调用方临时私钥（[]byte，支持PEM、HEX、原始字节） |
| tempPubKey | `[]byte` | 对方临时公钥（[]byte，支持PEM、HEX、原始字节） |
| thisIsA | `bool` | 如果是A方调用设置为true，B方调用设置为false |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 协商得到的共享密钥（[]byte） |
| r2 | `[]byte` | 验证值S1，用于A验证B的身份（[]byte） |
| r3 | `[]byte` | 验证值S2，用于B验证A的身份（[]byte） |
| r4 | `error` | 错误信息 |


### Sm2SignWithSM3

#### 详细描述
SM2SignWithSM3 使用国密 SM2 私钥对数据进行 SM3 签名，返回 ASN.1 DER 编码的签名

参数:

  - priKeyBytes: SM2 私钥(支持 PEM/HEX/32 字节原始字节)

  - data: 待签名的数据，可为 string、[]byte 等



返回值:

  - []byte: ASN.1 DER 编码的 SM2 签名(每次随机，结果不固定)

  - error: 签名失败时返回的错误




Example:

``````````````yak
// VARS: 生成密钥对，签名后用公钥验签
priv, pub = codec.Sm2GenerateHexKeyPair()~
sig = codec.Sm2SignWithSM3(priv, "msg")~
// STDOUT: 验签返回 error，nil 表示通过
println(codec.Sm2VerifyWithSM3(pub, "msg", sig) == nil)   // OUT: true
// assert: 锁定结论(签名可被对应公钥验证通过)
assert codec.Sm2VerifyWithSM3(pub, "msg", sig) == nil, "SM2 sign should be verifiable"
``````````````


#### 定义

`Sm2SignWithSM3(priKeyBytes []byte, data any) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| priKeyBytes | `[]byte` | SM2 私钥(支持 PEM/HEX/32 字节原始字节) |
| data | `any` | 待签名的数据，可为 string、[]byte 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: ASN.1 DER 编码的 SM2 签名(每次随机，结果不固定) |
| r2 | `error` | 签名失败时返回的错误 |


### Sm2SignWithSM3WithPassword

#### 详细描述
SM2SignWithSM3WithPassword 使用带密码保护的国密 SM2 私钥对数据进行 SM3 签名

参数:

  - priKeyBytes: SM2 私钥(支持 PEM/HEX/原始字节，可为加密私钥)

  - data: 待签名的数据，可为 string、[]byte 等

  - password: 私钥保护密码，未加密时传 nil



返回值:

  - []byte: ASN.1 DER 编码的 SM2 签名(每次随机，结果不固定)

  - error: 签名失败时返回的错误




Example:

``````````````yak
// VARS: 未加密私钥时 password 传 nil
priv, pub = codec.Sm2GenerateHexKeyPair()~
sig = codec.Sm2SignWithSM3WithPassword(priv, "msg", nil)~
// STDOUT: 验签返回 error，nil 表示通过
println(codec.Sm2VerifyWithSM3(pub, "msg", sig) == nil)   // OUT: true
// assert: 锁定结论(带密码接口在 nil 密码下也能签名并验证)
assert codec.Sm2VerifyWithSM3(pub, "msg", sig) == nil, "SM2 sign with password(nil) should be verifiable"
``````````````


#### 定义

`Sm2SignWithSM3WithPassword(priKeyBytes []byte, data any, password []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| priKeyBytes | `[]byte` | SM2 私钥(支持 PEM/HEX/原始字节，可为加密私钥) |
| data | `any` | 待签名的数据，可为 string、[]byte 等 |
| password | `[]byte` | 私钥保护密码，未加密时传 nil |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: ASN.1 DER 编码的 SM2 签名(每次随机，结果不固定) |
| r2 | `error` | 签名失败时返回的错误 |


### Sm2VerifyWithSM3

#### 详细描述
SM2VerifyWithSM3 使用国密 SM2 公钥对数据进行 SM3 签名验证，验证通过返回 nil

参数:

  - pubKeyBytes: SM2 公钥(支持 PEM/HEX/64 或 65 字节原始字节)

  - originData: 原始签名数据，可为 string、[]byte 等

  - sign: 待验证的 ASN.1 DER 编码签名



返回值:

  - error: 验证通过返回 nil，验证失败返回错误信息




Example:

``````````````yak
// VARS: 生成密钥对并签名，再验签
priv, pub = codec.Sm2GenerateHexKeyPair()~
sig = codec.Sm2SignWithSM3(priv, "msg")~
// STDOUT: 验签返回 error，nil 表示通过
println(codec.Sm2VerifyWithSM3(pub, "msg", sig) == nil)   // OUT: true
// assert: 锁定结论(正确签名验证通过)
assert codec.Sm2VerifyWithSM3(pub, "msg", sig) == nil, "SM2 verify should pass for valid signature"
``````````````


#### 定义

`Sm2VerifyWithSM3(pubKeyBytes []byte, originData any, sign []byte) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pubKeyBytes | `[]byte` | SM2 公钥(支持 PEM/HEX/64 或 65 字节原始字节) |
| originData | `any` | 原始签名数据，可为 string、[]byte 等 |
| sign | `[]byte` | 待验证的 ASN.1 DER 编码签名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 验证通过返回 nil，验证失败返回错误信息 |


### Sm3

#### 详细描述
SM3 计算输入数据的国密 SM3 摘要，返回 32 字节摘要(注意是字节切片，打印前需用 codec.EncodeToHex 转可读)

参数:

  - raw: 待计算摘要的数据，可为 string、[]byte 等



返回值:

  - SM3 摘要字节切片(32 字节，转 hex 后长度 64)




Example:

``````````````yak
// VARS: SM3 返回字节，需 EncodeToHex 转可读
result = codec.EncodeToHex(codec.Sm3("abc"))
// STDOUT: 打印可观察输出
println(result)   // OUT: 66c7f0f462eeedd9d1f2d46bdc10e4e24167c4875cf2f7a2297da02b8f4ba8e0
// assert: 锁定结论(已知摘要 + 固定长度)
assert result == "66c7f0f462eeedd9d1f2d46bdc10e4e24167c4875cf2f7a2297da02b8f4ba8e0", "Sm3 should match known digest"
assert len(result) == 64, "Sm3 hex length should be 64"
``````````````


#### 定义

`Sm3(raw any) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `any` | 待计算摘要的数据，可为 string、[]byte 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | SM3 摘要字节切片(32 字节，转 hex 后长度 64) |


### Sm4CBCDecrypt

#### 详细描述
SM4DecryptCBCWithPKCSPadding 使用国密 SM4 算法在 CBC 模式下用 PKCS7 填充解密数据

密钥与 IV 均为 16 字节；IV 为空时使用 key 前 16 字节作为 IV。

注意：Sm4Decrypt、Sm4CBCDecrypt 和 Sm4CBCDecryptWithPKCSPadding 是同一个函数的别名

参数:

  - key: 密钥(16 字节)

  - i: 待解密的密文，可为 []byte 等

  - iv: 初始化向量(16 字节)，可为 nil



返回值:

  - []byte: 解密还原后的明文字节

  - error: 解密失败时返回的错误




Example:

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


#### 定义

`Sm4CBCDecrypt(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` | 密钥(16 字节) |
| i | `any` | 待解密的密文，可为 []byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |


### Sm4CBCDecryptWithPKCSPadding

#### 详细描述
SM4DecryptCBCWithPKCSPadding 使用国密 SM4 算法在 CBC 模式下用 PKCS7 填充解密数据

密钥与 IV 均为 16 字节；IV 为空时使用 key 前 16 字节作为 IV。

注意：Sm4Decrypt、Sm4CBCDecrypt 和 Sm4CBCDecryptWithPKCSPadding 是同一个函数的别名

参数:

  - key: 密钥(16 字节)

  - i: 待解密的密文，可为 []byte 等

  - iv: 初始化向量(16 字节)，可为 nil



返回值:

  - []byte: 解密还原后的明文字节

  - error: 解密失败时返回的错误




Example:

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


#### 定义

`Sm4CBCDecryptWithPKCSPadding(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` | 密钥(16 字节) |
| i | `any` | 待解密的密文，可为 []byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |


### Sm4CBCDecryptWithZeroPadding

#### 详细描述
暂无描述

#### 定义

`Sm4CBCDecryptWithZeroPadding(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |  |
| i | `any` |  |
| iv | `[]byte` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |  |
| r2 | `error` |  |


### Sm4CBCEncrypt

#### 详细描述
SM4EncryptCBCWithPKCSPadding 使用国密 SM4 算法在 CBC 模式下用 PKCS7 填充加密数据

密钥与 IV 均为 16 字节；IV 为空时使用 key 前 16 字节作为 IV。

注意：Sm4Encrypt、Sm4CBCEncrypt 和 Sm4CBCEncryptWithPKCSPadding 是同一个函数的别名

参数:

  - key: 密钥(16 字节)

  - i: 待加密的数据，可为 string、[]byte 等

  - iv: 初始化向量(16 字节)，可为 nil



返回值:

  - []byte: 加密后的密文字节

  - error: 加密失败时返回的错误




Example:

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


#### 定义

`Sm4CBCEncrypt(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` | 密钥(16 字节) |
| i | `any` | 待加密的数据，可为 string、[]byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 加密失败时返回的错误 |


### Sm4CBCEncryptWithPKCSPadding

#### 详细描述
SM4EncryptCBCWithPKCSPadding 使用国密 SM4 算法在 CBC 模式下用 PKCS7 填充加密数据

密钥与 IV 均为 16 字节；IV 为空时使用 key 前 16 字节作为 IV。

注意：Sm4Encrypt、Sm4CBCEncrypt 和 Sm4CBCEncryptWithPKCSPadding 是同一个函数的别名

参数:

  - key: 密钥(16 字节)

  - i: 待加密的数据，可为 string、[]byte 等

  - iv: 初始化向量(16 字节)，可为 nil



返回值:

  - []byte: 加密后的密文字节

  - error: 加密失败时返回的错误




Example:

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


#### 定义

`Sm4CBCEncryptWithPKCSPadding(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` | 密钥(16 字节) |
| i | `any` | 待加密的数据，可为 string、[]byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 加密失败时返回的错误 |


### Sm4CBCEncryptWithZeroPadding

#### 详细描述
暂无描述

#### 定义

`Sm4CBCEncryptWithZeroPadding(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |  |
| i | `any` |  |
| iv | `[]byte` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |  |
| r2 | `error` |  |


### Sm4CFBDecrypt

#### 详细描述
SM4DecryptCFBWithPKCSPadding 使用国密 SM4 算法在 CFB 模式下用 PKCS7 填充解密数据

密钥与 IV 均为 16 字节；IV 为空时使用 key 前 16 字节作为 IV。

注意：Sm4CFBDecrypt 和 Sm4CFBDecryptWithPKCSPadding 是同一个函数的别名

参数:

  - key: 密钥(16 字节)

  - i: 待解密的密文，可为 []byte 等

  - iv: 初始化向量(16 字节)，可为 nil



返回值:

  - []byte: 解密还原后的明文字节

  - error: 解密失败时返回的错误




Example:

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


#### 定义

`Sm4CFBDecrypt(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` | 密钥(16 字节) |
| i | `any` | 待解密的密文，可为 []byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |


### Sm4CFBDecryptWithPKCSPadding

#### 详细描述
SM4DecryptCFBWithPKCSPadding 使用国密 SM4 算法在 CFB 模式下用 PKCS7 填充解密数据

密钥与 IV 均为 16 字节；IV 为空时使用 key 前 16 字节作为 IV。

注意：Sm4CFBDecrypt 和 Sm4CFBDecryptWithPKCSPadding 是同一个函数的别名

参数:

  - key: 密钥(16 字节)

  - i: 待解密的密文，可为 []byte 等

  - iv: 初始化向量(16 字节)，可为 nil



返回值:

  - []byte: 解密还原后的明文字节

  - error: 解密失败时返回的错误




Example:

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


#### 定义

`Sm4CFBDecryptWithPKCSPadding(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` | 密钥(16 字节) |
| i | `any` | 待解密的密文，可为 []byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |


### Sm4CFBDecryptWithZeroPadding

#### 详细描述
暂无描述

#### 定义

`Sm4CFBDecryptWithZeroPadding(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |  |
| i | `any` |  |
| iv | `[]byte` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |  |
| r2 | `error` |  |


### Sm4CFBEncrypt

#### 详细描述
SM4EncryptCFBWithPKCSPadding 使用国密 SM4 算法在 CFB 模式下用 PKCS7 填充加密数据

密钥与 IV 均为 16 字节；IV 为空时使用 key 前 16 字节作为 IV。

注意：Sm4CFBEncrypt 和 Sm4CFBEncryptWithPKCSPadding 是同一个函数的别名

参数:

  - key: 密钥(16 字节)

  - i: 待加密的数据，可为 string、[]byte 等

  - iv: 初始化向量(16 字节)，可为 nil



返回值:

  - []byte: 加密后的密文字节

  - error: 加密失败时返回的错误




Example:

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


#### 定义

`Sm4CFBEncrypt(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` | 密钥(16 字节) |
| i | `any` | 待加密的数据，可为 string、[]byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 加密失败时返回的错误 |


### Sm4CFBEncryptWithPKCSPadding

#### 详细描述
SM4EncryptCFBWithPKCSPadding 使用国密 SM4 算法在 CFB 模式下用 PKCS7 填充加密数据

密钥与 IV 均为 16 字节；IV 为空时使用 key 前 16 字节作为 IV。

注意：Sm4CFBEncrypt 和 Sm4CFBEncryptWithPKCSPadding 是同一个函数的别名

参数:

  - key: 密钥(16 字节)

  - i: 待加密的数据，可为 string、[]byte 等

  - iv: 初始化向量(16 字节)，可为 nil



返回值:

  - []byte: 加密后的密文字节

  - error: 加密失败时返回的错误




Example:

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


#### 定义

`Sm4CFBEncryptWithPKCSPadding(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` | 密钥(16 字节) |
| i | `any` | 待加密的数据，可为 string、[]byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 加密失败时返回的错误 |


### Sm4CFBEncryptWithZeroPadding

#### 详细描述
暂无描述

#### 定义

`Sm4CFBEncryptWithZeroPadding(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |  |
| i | `any` |  |
| iv | `[]byte` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |  |
| r2 | `error` |  |


### Sm4CTRDecrypt

#### 详细描述
暂无描述

#### 定义

`Sm4CTRDecrypt(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |  |
| i | `any` |  |
| iv | `[]byte` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |  |
| r2 | `error` |  |


### Sm4CTRDecryptWithPKCSPadding

#### 详细描述
暂无描述

#### 定义

`Sm4CTRDecryptWithPKCSPadding(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |  |
| i | `any` |  |
| iv | `[]byte` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |  |
| r2 | `error` |  |


### Sm4CTRDecryptWithZeroPadding

#### 详细描述
暂无描述

#### 定义

`Sm4CTRDecryptWithZeroPadding(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |  |
| i | `any` |  |
| iv | `[]byte` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |  |
| r2 | `error` |  |


### Sm4CTREncrypt

#### 详细描述
暂无描述

#### 定义

`Sm4CTREncrypt(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |  |
| i | `any` |  |
| iv | `[]byte` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |  |
| r2 | `error` |  |


### Sm4CTREncryptWithPKCSPadding

#### 详细描述
暂无描述

#### 定义

`Sm4CTREncryptWithPKCSPadding(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |  |
| i | `any` |  |
| iv | `[]byte` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |  |
| r2 | `error` |  |


### Sm4CTREncryptWithZeroPadding

#### 详细描述
暂无描述

#### 定义

`Sm4CTREncryptWithZeroPadding(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |  |
| i | `any` |  |
| iv | `[]byte` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |  |
| r2 | `error` |  |


### Sm4Decrypt

#### 详细描述
SM4DecryptCBCWithPKCSPadding 使用国密 SM4 算法在 CBC 模式下用 PKCS7 填充解密数据

密钥与 IV 均为 16 字节；IV 为空时使用 key 前 16 字节作为 IV。

注意：Sm4Decrypt、Sm4CBCDecrypt 和 Sm4CBCDecryptWithPKCSPadding 是同一个函数的别名

参数:

  - key: 密钥(16 字节)

  - i: 待解密的密文，可为 []byte 等

  - iv: 初始化向量(16 字节)，可为 nil



返回值:

  - []byte: 解密还原后的明文字节

  - error: 解密失败时返回的错误




Example:

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


#### 定义

`Sm4Decrypt(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` | 密钥(16 字节) |
| i | `any` | 待解密的密文，可为 []byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |


### Sm4EBCDecrypt

#### 详细描述
SM4DecryptEBCWithPKCSPadding 使用国密 SM4 算法在 ECB 模式下用 PKCS7 填充解密数据(为兼容历史拼写错误保留)

Deprecated: 请使用 Sm4ECBDecrypt(EBC 是 ECB 的拼写错误)

参数:

  - key: 密钥(16 字节)

  - i: 待解密的密文，可为 []byte 等

  - iv: ECB 模式下无用，传 nil 即可



返回值:

  - []byte: 解密还原后的明文字节

  - error: 解密失败时返回的错误




Example:

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


#### 定义

`Sm4EBCDecrypt(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` | 密钥(16 字节) |
| i | `any` | 待解密的密文，可为 []byte 等 |
| iv | `[]byte` | ECB 模式下无用，传 nil 即可 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |


### Sm4EBCEncrypt

#### 详细描述
SM4EncryptEBCWithPKCSPadding 使用国密 SM4 算法在 ECB 模式下用 PKCS7 填充加密数据(为兼容历史拼写错误保留)

Deprecated: 请使用 Sm4ECBEncrypt(EBC 是 ECB 的拼写错误)

参数:

  - key: 密钥(16 字节)

  - i: 待加密的数据，可为 string、[]byte 等

  - iv: ECB 模式下无用，传 nil 即可



返回值:

  - []byte: 加密后的密文字节

  - error: 加密失败时返回的错误




Example:

``````````````yak
// VARS: 兼容旧拼写的 SM4-ECB 加解密
key = "1234567890123456"
ct = codec.Sm4EBCEncrypt(key, "Secret Message", nil)~
// STDOUT: 解密还原后打印
println(string(codec.Sm4EBCDecrypt(key, ct, nil)~))   // OUT: Secret Message
// assert: 锁定结论(加解密往返一致)
assert string(codec.Sm4EBCDecrypt(key, ct, nil)~) == "Secret Message", "SM4-EBC(alias) should round-trip"
``````````````


#### 定义

`Sm4EBCEncrypt(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` | 密钥(16 字节) |
| i | `any` | 待加密的数据，可为 string、[]byte 等 |
| iv | `[]byte` | ECB 模式下无用，传 nil 即可 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 加密失败时返回的错误 |


### Sm4ECBDecrypt

#### 详细描述
SM4DecryptECBWithPKCSPadding 使用国密 SM4 算法在 ECB 模式下用 PKCS7 填充解密数据(ECB 模式下 iv 无用，传 nil)

密钥为 16 字节。

注意：Sm4ECBDecrypt 和 Sm4ECBDecryptWithPKCSPadding 是同一个函数的别名

参数:

  - key: 密钥(16 字节)

  - i: 待解密的密文，可为 []byte 等

  - iv: ECB 模式下无用，传 nil 即可



返回值:

  - []byte: 解密还原后的明文字节

  - error: 解密失败时返回的错误




Example:

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


#### 定义

`Sm4ECBDecrypt(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` | 密钥(16 字节) |
| i | `any` | 待解密的密文，可为 []byte 等 |
| iv | `[]byte` | ECB 模式下无用，传 nil 即可 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |


### Sm4ECBDecryptWithPKCSPadding

#### 详细描述
SM4DecryptECBWithPKCSPadding 使用国密 SM4 算法在 ECB 模式下用 PKCS7 填充解密数据(ECB 模式下 iv 无用，传 nil)

密钥为 16 字节。

注意：Sm4ECBDecrypt 和 Sm4ECBDecryptWithPKCSPadding 是同一个函数的别名

参数:

  - key: 密钥(16 字节)

  - i: 待解密的密文，可为 []byte 等

  - iv: ECB 模式下无用，传 nil 即可



返回值:

  - []byte: 解密还原后的明文字节

  - error: 解密失败时返回的错误




Example:

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


#### 定义

`Sm4ECBDecryptWithPKCSPadding(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` | 密钥(16 字节) |
| i | `any` | 待解密的密文，可为 []byte 等 |
| iv | `[]byte` | ECB 模式下无用，传 nil 即可 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |


### Sm4ECBDecryptWithZeroPadding

#### 详细描述
暂无描述

#### 定义

`Sm4ECBDecryptWithZeroPadding(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |  |
| i | `any` |  |
| iv | `[]byte` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |  |
| r2 | `error` |  |


### Sm4ECBEncrypt

#### 详细描述
SM4EncryptECBWithPKCSPadding 使用国密 SM4 算法在 ECB 模式下用 PKCS7 填充加密数据(ECB 模式下 iv 无用，传 nil)

密钥为 16 字节。

注意：Sm4ECBEncrypt 和 Sm4ECBEncryptWithPKCSPadding 是同一个函数的别名

参数:

  - key: 密钥(16 字节)

  - i: 待加密的数据，可为 string、[]byte 等

  - iv: ECB 模式下无用，传 nil 即可



返回值:

  - []byte: 加密后的密文字节

  - error: 加密失败时返回的错误




Example:

``````````````yak
// VARS: SM4-ECB 加解密(iv 传 nil)
key = "1234567890123456"
ct = codec.Sm4ECBEncrypt(key, "Secret Message", nil)~
// STDOUT: 解密还原后打印
println(string(codec.Sm4ECBDecrypt(key, ct, nil)~))   // OUT: Secret Message
// assert: 锁定结论(SM4-ECB 加解密往返一致)
assert string(codec.Sm4ECBDecrypt(key, ct, nil)~) == "Secret Message", "SM4-ECB should round-trip"
``````````````


#### 定义

`Sm4ECBEncrypt(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` | 密钥(16 字节) |
| i | `any` | 待加密的数据，可为 string、[]byte 等 |
| iv | `[]byte` | ECB 模式下无用，传 nil 即可 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 加密失败时返回的错误 |


### Sm4ECBEncryptWithPKCSPadding

#### 详细描述
SM4EncryptECBWithPKCSPadding 使用国密 SM4 算法在 ECB 模式下用 PKCS7 填充加密数据(ECB 模式下 iv 无用，传 nil)

密钥为 16 字节。

注意：Sm4ECBEncrypt 和 Sm4ECBEncryptWithPKCSPadding 是同一个函数的别名

参数:

  - key: 密钥(16 字节)

  - i: 待加密的数据，可为 string、[]byte 等

  - iv: ECB 模式下无用，传 nil 即可



返回值:

  - []byte: 加密后的密文字节

  - error: 加密失败时返回的错误




Example:

``````````````yak
// VARS: SM4-ECB 加解密(iv 传 nil)
key = "1234567890123456"
ct = codec.Sm4ECBEncrypt(key, "Secret Message", nil)~
// STDOUT: 解密还原后打印
println(string(codec.Sm4ECBDecrypt(key, ct, nil)~))   // OUT: Secret Message
// assert: 锁定结论(SM4-ECB 加解密往返一致)
assert string(codec.Sm4ECBDecrypt(key, ct, nil)~) == "Secret Message", "SM4-ECB should round-trip"
``````````````


#### 定义

`Sm4ECBEncryptWithPKCSPadding(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` | 密钥(16 字节) |
| i | `any` | 待加密的数据，可为 string、[]byte 等 |
| iv | `[]byte` | ECB 模式下无用，传 nil 即可 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 加密失败时返回的错误 |


### Sm4ECBEncryptWithZeroPadding

#### 详细描述
暂无描述

#### 定义

`Sm4ECBEncryptWithZeroPadding(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |  |
| i | `any` |  |
| iv | `[]byte` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |  |
| r2 | `error` |  |


### Sm4Encrypt

#### 详细描述
SM4EncryptCBCWithPKCSPadding 使用国密 SM4 算法在 CBC 模式下用 PKCS7 填充加密数据

密钥与 IV 均为 16 字节；IV 为空时使用 key 前 16 字节作为 IV。

注意：Sm4Encrypt、Sm4CBCEncrypt 和 Sm4CBCEncryptWithPKCSPadding 是同一个函数的别名

参数:

  - key: 密钥(16 字节)

  - i: 待加密的数据，可为 string、[]byte 等

  - iv: 初始化向量(16 字节)，可为 nil



返回值:

  - []byte: 加密后的密文字节

  - error: 加密失败时返回的错误




Example:

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


#### 定义

`Sm4Encrypt(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` | 密钥(16 字节) |
| i | `any` | 待加密的数据，可为 string、[]byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 加密失败时返回的错误 |


### Sm4GCMDecrypt

#### 详细描述
SM4GCMDec 使用国密 SM4 算法在 GCM 模式下解密数据

密钥与 IV 均为 16 字节；IV 为空时使用 key 前 16 字节作为 IV。

参数:

  - key: 密钥(16 字节)

  - data: 待解密的密文，可为 []byte 等

  - iv: 初始化向量(16 字节)，可为 nil



返回值:

  - []byte: 解密还原后的明文字节

  - error: 解密或认证失败时返回的错误




Example:

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


#### 定义

`Sm4GCMDecrypt(key []byte, data any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` | 密钥(16 字节) |
| data | `any` | 待解密的密文，可为 []byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密或认证失败时返回的错误 |


### Sm4GCMEncrypt

#### 详细描述
SM4GCMEnc 使用国密 SM4 算法在 GCM 模式下加密数据

密钥与 IV 均为 16 字节；IV 为空时使用 key 前 16 字节作为 IV。

参数:

  - key: 密钥(16 字节)

  - data: 待加密的数据，可为 string、[]byte 等

  - iv: 初始化向量(16 字节)，可为 nil



返回值:

  - []byte: 加密后的密文字节

  - error: 加密失败时返回的错误




Example:

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


#### 定义

`Sm4GCMEncrypt(key []byte, data any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` | 密钥(16 字节) |
| data | `any` | 待加密的数据，可为 string、[]byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 加密失败时返回的错误 |


### Sm4OFBDecrypt

#### 详细描述
SM4DecryptOFBWithPKCSPadding 使用国密 SM4 算法在 OFB 模式下用 PKCS7 填充解密数据

密钥与 IV 均为 16 字节；IV 为空时使用 key 前 16 字节作为 IV。

注意：Sm4OFBDecrypt 和 Sm4OFBDecryptWithPKCSPadding 是同一个函数的别名

参数:

  - key: 密钥(16 字节)

  - i: 待解密的密文，可为 []byte 等

  - iv: 初始化向量(16 字节)，可为 nil



返回值:

  - []byte: 解密还原后的明文字节

  - error: 解密失败时返回的错误




Example:

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


#### 定义

`Sm4OFBDecrypt(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` | 密钥(16 字节) |
| i | `any` | 待解密的密文，可为 []byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |


### Sm4OFBDecryptWithPKCSPadding

#### 详细描述
SM4DecryptOFBWithPKCSPadding 使用国密 SM4 算法在 OFB 模式下用 PKCS7 填充解密数据

密钥与 IV 均为 16 字节；IV 为空时使用 key 前 16 字节作为 IV。

注意：Sm4OFBDecrypt 和 Sm4OFBDecryptWithPKCSPadding 是同一个函数的别名

参数:

  - key: 密钥(16 字节)

  - i: 待解密的密文，可为 []byte 等

  - iv: 初始化向量(16 字节)，可为 nil



返回值:

  - []byte: 解密还原后的明文字节

  - error: 解密失败时返回的错误




Example:

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


#### 定义

`Sm4OFBDecryptWithPKCSPadding(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` | 密钥(16 字节) |
| i | `any` | 待解密的密文，可为 []byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |


### Sm4OFBDecryptWithZeroPadding

#### 详细描述
暂无描述

#### 定义

`Sm4OFBDecryptWithZeroPadding(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |  |
| i | `any` |  |
| iv | `[]byte` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |  |
| r2 | `error` |  |


### Sm4OFBEncrypt

#### 详细描述
SM4EncryptOFBWithPKCSPadding 使用国密 SM4 算法在 OFB 模式下用 PKCS7 填充加密数据

密钥与 IV 均为 16 字节；IV 为空时使用 key 前 16 字节作为 IV。

注意：Sm4OFBEncrypt 和 Sm4OFBEncryptWithPKCSPadding 是同一个函数的别名

参数:

  - key: 密钥(16 字节)

  - i: 待加密的数据，可为 string、[]byte 等

  - iv: 初始化向量(16 字节)，可为 nil



返回值:

  - []byte: 加密后的密文字节

  - error: 加密失败时返回的错误




Example:

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


#### 定义

`Sm4OFBEncrypt(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` | 密钥(16 字节) |
| i | `any` | 待加密的数据，可为 string、[]byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 加密失败时返回的错误 |


### Sm4OFBEncryptWithPKCSPadding

#### 详细描述
SM4EncryptOFBWithPKCSPadding 使用国密 SM4 算法在 OFB 模式下用 PKCS7 填充加密数据

密钥与 IV 均为 16 字节；IV 为空时使用 key 前 16 字节作为 IV。

注意：Sm4OFBEncrypt 和 Sm4OFBEncryptWithPKCSPadding 是同一个函数的别名

参数:

  - key: 密钥(16 字节)

  - i: 待加密的数据，可为 string、[]byte 等

  - iv: 初始化向量(16 字节)，可为 nil



返回值:

  - []byte: 加密后的密文字节

  - error: 加密失败时返回的错误




Example:

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


#### 定义

`Sm4OFBEncryptWithPKCSPadding(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` | 密钥(16 字节) |
| i | `any` | 待加密的数据，可为 string、[]byte 等 |
| iv | `[]byte` | 初始化向量(16 字节)，可为 nil |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 加密失败时返回的错误 |


### Sm4OFBEncryptWithZeroPadding

#### 详细描述
暂无描述

#### 定义

`Sm4OFBEncryptWithZeroPadding(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |  |
| i | `any` |  |
| iv | `[]byte` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |  |
| r2 | `error` |  |


### StrconvQuote

#### 详细描述
Quote returns a double-quoted Go string literal representing s. The
returned string uses Go escape sequences (\t, \n, \xFF, \u0100) for
control characters and non-printable characters as defined by
IsPrint.


#### 定义

`StrconvQuote(s string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |  |


### StrconvUnquote

#### 详细描述
Unquote interprets s as a single-quoted, double-quoted,
or backquoted Go string literal, returning the string value
that s quotes.  (If s is single-quoted, it would be a Go
character literal; Unquote returns the corresponding
one-character string.)


#### 定义

`StrconvUnquote(s string) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |  |
| r2 | `error` |  |


### TripleDESCBCDecrypt

#### 详细描述
TripleDESDecryptCBCWithZeroPadding 使用 3DES(Triple DES) 算法在 CBC 模式下用零填充解密数据

密钥长度必须是 24 字节(即 3 * 8 字节)，iv 可为 nil 或 8 字节；iv 为 nil 时固定为密钥或零填充到 8 字节。

注意：TripleDESCBCDecrypt、TripleDESDecrypt 和本函数是同一个函数的别名

参数:

  - key: 密钥(24 字节)

  - i: 待解密的密文，可为 []byte 等

  - iv: 初始化向量(8 字节)，可为 nil



返回值:

  - []byte: 解密还原后的明文字节

  - error: 解密失败时返回的错误




Example:

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


#### 定义

`TripleDESCBCDecrypt(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` | 密钥(24 字节) |
| i | `any` | 待解密的密文，可为 []byte 等 |
| iv | `[]byte` | 初始化向量(8 字节)，可为 nil |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |


### TripleDESCBCEncrypt

#### 详细描述
TripleDESEncryptCBCWithZeroPadding 使用 3DES(Triple DES) 算法在 CBC 模式下用零填充加密数据

密钥长度必须是 24 字节(即 3 * 8 字节)，iv 可为 nil 或 8 字节；iv 为 nil 时固定为密钥。

注意：TripleDESCBCEncrypt、TripleDESEncrypt 和本函数是同一个函数的别名

参数:

  - key: 密钥(24 字节)

  - i: 待加密的数据，可为 string、[]byte 等

  - iv: 初始化向量(8 字节)，可为 nil



返回值:

  - []byte: 加密后的密文字节

  - error: 加密失败时返回的错误




Example:

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


#### 定义

`TripleDESCBCEncrypt(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` | 密钥(24 字节) |
| i | `any` | 待加密的数据，可为 string、[]byte 等 |
| iv | `[]byte` | 初始化向量(8 字节)，可为 nil |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 加密失败时返回的错误 |


### TripleDESDecrypt

#### 详细描述
TripleDESDecryptCBCWithZeroPadding 使用 3DES(Triple DES) 算法在 CBC 模式下用零填充解密数据

密钥长度必须是 24 字节(即 3 * 8 字节)，iv 可为 nil 或 8 字节；iv 为 nil 时固定为密钥或零填充到 8 字节。

注意：TripleDESCBCDecrypt、TripleDESDecrypt 和本函数是同一个函数的别名

参数:

  - key: 密钥(24 字节)

  - i: 待解密的密文，可为 []byte 等

  - iv: 初始化向量(8 字节)，可为 nil



返回值:

  - []byte: 解密还原后的明文字节

  - error: 解密失败时返回的错误




Example:

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


#### 定义

`TripleDESDecrypt(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` | 密钥(24 字节) |
| i | `any` | 待解密的密文，可为 []byte 等 |
| iv | `[]byte` | 初始化向量(8 字节)，可为 nil |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |


### TripleDESECBDecrypt

#### 详细描述
TripleDES_ECBDec 使用 3DES(Triple DES) 算法在 ECB 模式下用零填充解密数据(ECB 模式下无 iv 参数)

密钥长度必须是 24 字节(即 3 * 8 字节)。

参数:

  - key: 密钥(24 字节)

  - data: 待解密的密文字节



返回值:

  - []byte: 解密还原后的明文字节

  - error: 解密失败时返回的错误




Example:

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


#### 定义

`TripleDESECBDecrypt(key []byte, data []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` | 密钥(24 字节) |
| data | `[]byte` | 待解密的密文字节 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 解密还原后的明文字节 |
| r2 | `error` | 解密失败时返回的错误 |


### TripleDESECBEncrypt

#### 详细描述
TripleDES_ECBEnc 使用 3DES(Triple DES) 算法在 ECB 模式下用零填充加密数据(ECB 模式下无 iv 参数)

密钥长度必须是 24 字节(即 3 * 8 字节)。

参数:

  - key: 密钥(24 字节)

  - data: 待加密的数据字节



返回值:

  - []byte: 加密后的密文字节

  - error: 加密失败时返回的错误




Example:

``````````````yak
// VARS: 3DES-ECB 加解密(24 字节密钥)
key = "123456781234567812345678"
ct = codec.TripleDESECBEncrypt(key, "Secret Message")~
// STDOUT: 去零填充解密后打印
println(string(codec.ZeroUnPadding(codec.TripleDESECBDecrypt(key, ct)~)))   // OUT: Secret Message
// assert: 锁定结论(3DES-ECB 加解密往返一致)
assert string(codec.ZeroUnPadding(codec.TripleDESECBDecrypt(key, ct)~)) == "Secret Message", "3DES-ECB should round-trip"
``````````````


#### 定义

`TripleDESECBEncrypt(key []byte, data []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` | 密钥(24 字节) |
| data | `[]byte` | 待加密的数据字节 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 加密失败时返回的错误 |


### TripleDESEncrypt

#### 详细描述
TripleDESEncryptCBCWithZeroPadding 使用 3DES(Triple DES) 算法在 CBC 模式下用零填充加密数据

密钥长度必须是 24 字节(即 3 * 8 字节)，iv 可为 nil 或 8 字节；iv 为 nil 时固定为密钥。

注意：TripleDESCBCEncrypt、TripleDESEncrypt 和本函数是同一个函数的别名

参数:

  - key: 密钥(24 字节)

  - i: 待加密的数据，可为 string、[]byte 等

  - iv: 初始化向量(8 字节)，可为 nil



返回值:

  - []byte: 加密后的密文字节

  - error: 加密失败时返回的错误




Example:

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


#### 定义

`TripleDESEncrypt(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` | 密钥(24 字节) |
| i | `any` | 待加密的数据，可为 string、[]byte 等 |
| iv | `[]byte` | 初始化向量(8 字节)，可为 nil |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 加密后的密文字节 |
| r2 | `error` | 加密失败时返回的错误 |


### UTF8ToGB18030

#### 详细描述
Utf8ToGB18030 将 UTF-8 编码的字节转换为 GB18030 编码的字节

参数:

  - s: UTF-8 编码的字节数据



返回值:

  - []byte: 转换后的 GB18030 字节

  - error: 转换失败时返回的错误




Example:

``````````````yak
// VARS: UTF-8 转 GB18030 再转回 UTF-8，波浪号自动解包 error
gb = codec.UTF8ToGB18030("中文")~
result = codec.GB18030ToUTF8(gb)~
// STDOUT: 转字符串后打印
println(string(result))   // OUT: 中文
// assert: 锁定结论(UTF-8 与 GB18030 往返一致)
assert string(result) == "中文", "UTF8/GB18030 should round-trip"
``````````````


#### 定义

`UTF8ToGB18030(s []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `[]byte` | UTF-8 编码的字节数据 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 转换后的 GB18030 字节 |
| r2 | `error` | 转换失败时返回的错误 |


### UTF8ToGBK

#### 详细描述
Utf8ToGbk 将 UTF-8 编码的字节转换为 GBK 编码的字节

参数:

  - s: UTF-8 编码的字节数据



返回值:

  - []byte: 转换后的 GBK 字节

  - error: 转换失败时返回的错误




Example:

``````````````yak
// VARS: UTF-8 转 GBK 再转回 UTF-8，波浪号自动解包 error
gbk = codec.UTF8ToGBK("中文")~
result = codec.GBKToUTF8(gbk)~
// STDOUT: 转字符串后打印
println(string(result))   // OUT: 中文
// assert: 锁定结论(UTF-8 与 GBK 往返一致)
assert string(result) == "中文", "UTF8/GBK should round-trip"
``````````````


#### 定义

`UTF8ToGBK(s []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `[]byte` | UTF-8 编码的字节数据 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 转换后的 GBK 字节 |
| r2 | `error` | 转换失败时返回的错误 |


### UTF8ToHZGB2312

#### 详细描述
Utf8ToHZGB2312 将 UTF-8 编码的字节转换为 HZ-GB2312 编码的字节

参数:

  - s: UTF-8 编码的字节数据



返回值:

  - []byte: 转换后的 HZ-GB2312 字节

  - error: 转换失败时返回的错误




Example:

``````````````yak
// VARS: UTF-8 转 HZ-GB2312，结果非空
result = codec.UTF8ToHZGB2312("中文")~
// STDOUT: 打印是否非空
println(len(result) > 0)   // OUT: true
// assert: 锁定结论(转换得到非空字节)
assert len(result) > 0, "UTF8ToHZGB2312 should produce bytes"
``````````````


#### 定义

`UTF8ToHZGB2312(s []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `[]byte` | UTF-8 编码的字节数据 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | []byte: 转换后的 HZ-GB2312 字节 |
| r2 | `error` | 转换失败时返回的错误 |


### UnescapePathUrl

#### 详细描述
PathUnescape 对 URL 路径转义的字符串做解码，同时兼容 %uXXXX 形式

参数:

  - s: 待解码的 URL 路径转义字符串



返回值:

  - string: 解码后的字符串

  - error: 解码失败时返回的错误




Example:

``````````````yak
// VARS: 路径解码，波浪号自动解包 error
result = codec.UnescapePathUrl("a%20b")~
// STDOUT: 打印可观察输出
println(result)   // OUT: a b
// assert: 锁定结论(与 EscapePathUrl 往返一致)
assert string(codec.UnescapePathUrl(codec.EscapePathUrl("/api/info"))~) == "/api/info", "path escape/unescape should round-trip"
``````````````


#### 定义

`UnescapePathUrl(s string) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` | 待解码的 URL 路径转义字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 解码后的字符串 |
| r2 | `error` | 解码失败时返回的错误 |


### UnescapeQueryUrl

#### 详细描述
QueryUnescape 对 URL 百分号编码的字符串做查询串解码，同时兼容 %uXXXX 形式

参数:

  - s: 待解码的 URL 编码字符串



返回值:

  - string: 解码后的字符串

  - error: 解码失败时返回的错误




Example:

``````````````yak
// VARS: URL 解码，波浪号自动解包 error
result = codec.DecodeUrl("a%20b")~
// STDOUT: 打印可观察输出
println(result)   // OUT: a b
// assert: 锁定结论
assert result == "a b", "DecodeUrl should decode percent-encoding"
``````````````


#### 定义

`UnescapeQueryUrl(s string) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` | 待解码的 URL 编码字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 解码后的字符串 |
| r2 | `error` | 解码失败时返回的错误 |


### UnescapeString

#### 详细描述
UnescapeString 处理字符串中的转义字符，无需外层引号

支持 \&#34; \\ \n \r \t \xNN \uNNNN \UNNNNNNNN 等转义序列；与 codec.StrconvUnquote 不同，本函数不要求输入带引号包裹

参数:

  - s: 含转义序列的字符串(无需外层引号)



返回值:

  - string: 解转义后的字符串

  - error: 解析失败时返回的错误




Example:

``````````````yak
// VARS: 解转义，波浪号自动解包 error
result = codec.UnescapeString("a\\nb")~
// STDOUT: 打印长度(\n 解为单个换行符，总长 3)
println(len(result))   // OUT: 3
// assert: 锁定结论(转义序列 \n 被解析为换行)
assert result == "a\nb", "UnescapeString should unescape \\n to newline"
``````````````


#### 定义

`UnescapeString(s string) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` | 含转义序列的字符串(无需外层引号) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 解转义后的字符串 |
| r2 | `error` | 解析失败时返回的错误 |


### UnicodeDecode

#### 详细描述
JsonUnicodeDecode 将 \uXXXX / \UXXXXXXXX 形式的 Unicode 转义序列解码为原始字符串

参数:

  - i: 含 Unicode 转义序列的字符串



返回值:

  - 解码后的原始字符串




Example:

``````````````yak
// VARS: 解码 \uXXXX 转义序列
result = codec.UnicodeDecode("\\u0061\\u0062\\u0063")
// STDOUT: 打印可观察输出
println(result)   // OUT: abc
// assert: 锁定结论
assert result == "abc", "UnicodeDecode should decode escape sequences"
``````````````


#### 定义

`UnicodeDecode(i string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` | 含 Unicode 转义序列的字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 解码后的原始字符串 |


### UnicodeEncode

#### 详细描述
JsonUnicodeEncode 将字符串的每个字符编码为 \uXXXX 形式的 Unicode 转义序列

参数:

  - i: 待编码的字符串



返回值:

  - \uXXXX 形式的 Unicode 转义字符串




Example:

``````````````yak
// VARS: 把字符串编码为 \uXXXX
result = codec.UnicodeEncode("abc")
// STDOUT: 打印可观察输出
println(result)   // OUT: \u0061\u0062\u0063
// assert: 锁定结论(与 UnicodeDecode 往返一致)
assert codec.UnicodeDecode(result) == "abc", "unicode encode/decode should round-trip"
``````````````


#### 定义

`UnicodeEncode(i string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` | 待编码的字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | \uXXXX 形式的 Unicode 转义字符串 |


### ZeroPadding

#### 详细描述
ZeroPadding 对数据按指定块大小做零字节(0x00)填充，使其长度补齐到块大小的整数倍

参数:

  - origin: 待填充的原始数据

  - blockSize: 块大小(字节)，如 8 或 16



返回值:

  - 填充后的字节切片




Example:

``````````````yak
// VARS: 把数据零填充到 16 字节块
result = codec.ZeroPadding([]byte("Test Data"), 16)
// STDOUT: 打印长度
println(len(result))   // OUT: 16
// assert: 锁定结论(可用 ZeroUnPadding 去填充)
assert len(result) == 16, "ZeroPadding should pad to block size"
assert string(codec.ZeroUnPadding(result)) == "Test Data", "Zero pad/unpad should round-trip"
``````````````


#### 定义

`ZeroPadding(origin []byte, blockSize int) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| origin | `[]byte` | 待填充的原始数据 |
| blockSize | `int` | 块大小(字节)，如 8 或 16 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 填充后的字节切片 |


### ZeroUnPadding

#### 详细描述
ZeroUnPadding 去除数据末尾的零字节(0x00)填充，返回原始数据

参数:

  - originData: 带零填充的数据



返回值:

  - 去除零填充后的字节切片




Example:

``````````````yak
// VARS: 先零填充再去填充
padded = codec.ZeroPadding([]byte("Test Data"), 16)
result = codec.ZeroUnPadding(padded)
// STDOUT: 转字符串后打印
println(string(result))   // OUT: Test Data
// assert: 锁定结论(还原原始数据)
assert string(result) == "Test Data", "ZeroUnPadding should remove zero padding"
``````````````


#### 定义

`ZeroUnPadding(originData []byte) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| originData | `[]byte` | 带零填充的数据 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 去除零填充后的字节切片 |


