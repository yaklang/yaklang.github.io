# codec

|函数名|函数描述/介绍|
|:------|:--------|
| [codec.AESCBCDecrypt](#aescbcdecrypt) |AESCBCDecryptWithPKCS7Padding 使用 AES 算法，在 CBC 模式下，使用 PKCS5 填充来解密数据。 它接受一个密钥（key）、需要解密的数据（data to decrypt）和一个初始化向量（iv）。 密钥的长度必须是 16、24 或 32 字节（分别对应 AES...|
| [codec.AESCBCDecryptWithPKCS7Padding](#aescbcdecryptwithpkcs7padding) |AESCBCDecryptWithPKCS7Padding 使用 AES 算法，在 CBC 模式下，使用 PKCS5 填充来解密数据。 它接受一个密钥（key）、需要解密的数据（data to decrypt）和一个初始化向量（iv）。 密钥的长度必须是 16、24 或 32 字节（分别对应 AES...|
| [codec.AESCBCDecryptWithZeroPadding](#aescbcdecryptwithzeropadding) |AESCBCDecryptWithZeroPadding 使用 AES 算法，在 CBC 模式下，使用 Zero 填充来解密数据。 它接受一个密钥（key）、需要解密的数据（data to decrypt）和一个初始化向量（iv）。 密钥的长度必须是 16、24 或 32 字节（分别对应 AES-1...|
| [codec.AESCBCEncrypt](#aescbcencrypt) |AESCBCEncryptWithPKCS7Padding 使用 AES 算法，在 CBC 模式下，使用 PKCS5 填充来加密数据。 它接受一个密钥（key）、需要加密的数据（data to encrypt）和一个初始化向量（iv）。 密钥的长度必须是 16、24 或 32 字节（分别对应 AES...|
| [codec.AESCBCEncryptWithPKCS7Padding](#aescbcencryptwithpkcs7padding) |AESCBCEncryptWithPKCS7Padding 使用 AES 算法，在 CBC 模式下，使用 PKCS5 填充来加密数据。 它接受一个密钥（key）、需要加密的数据（data to encrypt）和一个初始化向量（iv）。 密钥的长度必须是 16、24 或 32 字节（分别对应 AES...|
| [codec.AESCBCEncryptWithZeroPadding](#aescbcencryptwithzeropadding) |AESCBCEncryptWithZeroPadding 使用 AES 算法，在 CBC 模式下，使用 Zero 填充来加密数据。 它接受一个密钥（key）、需要加密的数据（data to encrypt）和一个初始化向量（iv）。 密钥的长度必须是 16、24 或 32 字节（分别对应 AES-1...|
| [codec.AESDecrypt](#aesdecrypt) |AESCBCDecryptWithPKCS7Padding 使用 AES 算法，在 CBC 模式下，使用 PKCS5 填充来解密数据。 它接受一个密钥（key）、需要解密的数据（data to decrypt）和一个初始化向量（iv）。 密钥的长度必须是 16、24 或 32 字节（分别对应 AES...|
| [codec.AESECBDecrypt](#aesecbdecrypt) |AESDecryptECBWithPKCSPadding 使用 AES 算法，在 ECB 模式下对数据进行解密，使用 PKCSPadding 填充方式 它接受一个密钥（key）、需要解密的数据（data to decrypt）。 ecb 模式下iv 无用。 密钥的长度必须是 16、24 或 32 字...|
| [codec.AESECBDecryptWithPKCS7Padding](#aesecbdecryptwithpkcs7padding) |AESDecryptECBWithPKCSPadding 使用 AES 算法，在 ECB 模式下对数据进行解密，使用 PKCSPadding 填充方式 它接受一个密钥（key）、需要解密的数据（data to decrypt）。 ecb 模式下iv 无用。 密钥的长度必须是 16、24 或 32 字...|
| [codec.AESECBDecryptWithZeroPadding](#aesecbdecryptwithzeropadding) |AESDecryptECBWithZeroPadding 使用 AES 算法，在 ECB 模式下对数据进行解密，使用 ZeroPadding 填充方式 它接受一个密钥（key）、需要解密的数据（data to decrypt）。 ecb 模式下iv 无用。 密钥的长度必须是 16、24 或 32 字...|
| [codec.AESECBEncrypt](#aesecbencrypt) |AESCBCEncryptWithZeroPadding 使用 AES 算法，在 ECB 模式下对数据进行加密，使用 PKCSPadding 填充方式 它接受一个密钥（key）、需要加密的数据（data to encrypt）。 ecb 模式下iv 无用。 密钥的长度必须是 16、24 或 32 字...|
| [codec.AESECBEncryptWithPKCS7Padding](#aesecbencryptwithpkcs7padding) |AESCBCEncryptWithZeroPadding 使用 AES 算法，在 ECB 模式下对数据进行加密，使用 PKCSPadding 填充方式 它接受一个密钥（key）、需要加密的数据（data to encrypt）。 ecb 模式下iv 无用。 密钥的长度必须是 16、24 或 32 字...|
| [codec.AESECBEncryptWithZeroPadding](#aesecbencryptwithzeropadding) |AESCBCEncryptWithZeroPadding 使用 AES 算法，在 ECB 模式下对数据进行加密，使用 ZeroPadding 填充方式 它接受一个密钥（key）、需要加密的数据（data to encrypt）。 ecb 模式下iv 无用。 密钥的长度必须是 16、24 或 32 字...|
| [codec.AESEncrypt](#aesencrypt) |AESCBCEncryptWithPKCS7Padding 使用 AES 算法，在 CBC 模式下，使用 PKCS5 填充来加密数据。 它接受一个密钥（key）、需要加密的数据（data to encrypt）和一个初始化向量（iv）。 密钥的长度必须是 16、24 或 32 字节（分别对应 AES...|
| [codec.AESGCMDecrypt](#aesgcmdecrypt) ||
| [codec.AESGCMDecryptWithNonceSize12](#aesgcmdecryptwithnoncesize12) ||
| [codec.AESGCMDecryptWithNonceSize16](#aesgcmdecryptwithnoncesize16) ||
| [codec.AESGCMEncrypt](#aesgcmencrypt) |//AES GCM 加密后的payload shiro 1.4.2版本更换为了AES-GCM加密方式  	func AES_GCM_Encrypt(key []byte, Content []byte) string { 		block, _ := aes.NewCipher(key) 		nonc...|
| [codec.AESGCMEncryptWithNonceSize12](#aesgcmencryptwithnoncesize12) ||
| [codec.AESGCMEncryptWithNonceSize16](#aesgcmencryptwithnoncesize16) |//AES GCM 加密后的payload shiro 1.4.2版本更换为了AES-GCM加密方式  	func AES_GCM_Encrypt(key []byte, Content []byte) string { 		block, _ := aes.NewCipher(key) 		nonc...|
| [codec.AutoDecode](#autodecode) ||
| [codec.DESCBCDecrypt](#descbcdecrypt) |DESCBCDecrypt 是一个便捷函数，用于使用 DES 算法，在 CBC 模式下，使用零填充来解密数据。 它接受一个密钥（key）、需要解密的数据（data to decrypt）和一个初始化向量（iv）。 密钥的长度必须是 8 个字节，并且 iv 可以是 nil 或者 8 个字节长。 如果 ...|
| [codec.DESCBCEncrypt](#descbcencrypt) |DESCBCEncrypt 是一个便捷函数，用于使用 DES 算法，在 CBC 模式下，使用零填充来加密数据。 它接受一个密钥（key）、需要加密的数据（data to encrypt）和一个初始化向量（iv）。 密钥的长度必须是 8 个字节，并且 iv 可以是 nil 或者 8 个字节长。 如果 ...|
| [codec.DESDecrypt](#desdecrypt) |DESCBCDecrypt 是一个便捷函数，用于使用 DES 算法，在 CBC 模式下，使用零填充来解密数据。 它接受一个密钥（key）、需要解密的数据（data to decrypt）和一个初始化向量（iv）。 密钥的长度必须是 8 个字节，并且 iv 可以是 nil 或者 8 个字节长。 如果 ...|
| [codec.DESECBDecrypt](#desecbdecrypt) |DESECBDecrypt 是一个便捷函数，用于使用 DES 算法，在 ECB 模式下，使用 零填充来解密数据。 它接受一个密钥（key）、需要解密的数据（data to decrypt）（ecb 模式下 iv 无用） 密钥的长度必须是 8 个字节。 example: ``` codec.DESEC...|
| [codec.DESECBEncrypt](#desecbencrypt) |DESECBEncrypt 是一个便捷函数，用于使用 DES 算法，在 ECB 模式下，使用 零填充来加密数据。 它接受一个密钥（key）、需要加密的数据（data to encrypt）（ecb 模式下 iv 无用） 密钥的长度必须是 8 个字节。 example: ``` codec.DESEC...|
| [codec.DESEncrypt](#desencrypt) |DESCBCEncrypt 是一个便捷函数，用于使用 DES 算法，在 CBC 模式下，使用零填充来加密数据。 它接受一个密钥（key）、需要加密的数据（data to encrypt）和一个初始化向量（iv）。 密钥的长度必须是 8 个字节，并且 iv 可以是 nil 或者 8 个字节长。 如果 ...|
| [codec.DecodeASCII](#decodeascii) |Unquote interprets s as a single-quoted, double-quoted, or backquoted Go string literal, returning the string value that s quotes.  (If s is single-qu...|
| [codec.DecodeBase32](#decodebase32) ||
| [codec.DecodeBase64](#decodebase64) ||
| [codec.DecodeBase64Url](#decodebase64url) ||
| [codec.DecodeChunked](#decodechunked) ||
| [codec.DecodeHex](#decodehex) ||
| [codec.DecodeHtml](#decodehtml) |UnescapeString unescapes entities like &amp;#34;&amp;amp;lt;&amp;#34; to become &amp;#34;&amp;lt;&amp;#34;. It unescapes a larger range of entities than EscapeString escapes....|
| [codec.DecodeUrl](#decodeurl) ||
| [codec.DoubleDecodeUrl](#doubledecodeurl) ||
| [codec.DoubleEncodeUrl](#doubleencodeurl) ||
| [codec.EncodeASCII](#encodeascii) ||
| [codec.EncodeBase32](#encodebase32) ||
| [codec.EncodeBase64](#encodebase64) ||
| [codec.EncodeBase64Url](#encodebase64url) ||
| [codec.EncodeChunked](#encodechunked) ||
| [codec.EncodeHtml](#encodehtml) ||
| [codec.EncodeHtmlHex](#encodehtmlhex) ||
| [codec.EncodeToHex](#encodetohex) ||
| [codec.EncodeToPrintable](#encodetoprintable) ||
| [codec.EncodeUrl](#encodeurl) ||
| [codec.EscapeHtml](#escapehtml) |EscapeString escapes special characters like &amp;#34;&amp;lt;&amp;#34; to become &amp;#34;&amp;amp;lt;&amp;#34;. It escapes only five such characters: &amp;lt;, &amp;gt;, &amp;amp;, &amp;#3...|
| [codec.EscapePathUrl](#escapepathurl) |PathEscape escapes the string so it can be safely placed inside a [URL] path segment, replacing special characters (including /) with %XX sequences as...|
| [codec.EscapeQueryUrl](#escapequeryurl) ||
| [codec.EscapeUrl](#escapeurl) ||
| [codec.FixUTF8](#fixutf8) ||
| [codec.GB18030ToUTF8](#gb18030toutf8) ||
| [codec.GBKSafe](#gbksafe) ||
| [codec.GBKToUTF8](#gbktoutf8) ||
| [codec.HTMLChardet](#htmlchardet) ||
| [codec.HTMLChardetBest](#htmlchardetbest) ||
| [codec.HZGB2312ToUTF8](#hzgb2312toutf8) ||
| [codec.HmacMD5](#hmacmd5) ||
| [codec.HmacSM3](#hmacsm3) ||
| [codec.HmacSha1](#hmacsha1) ||
| [codec.HmacSha256](#hmacsha256) ||
| [codec.HmacSha512](#hmacsha512) ||
| [codec.MMH3Hash128](#mmh3hash128) ||
| [codec.MMH3Hash128x64](#mmh3hash128x64) ||
| [codec.MMH3Hash32](#mmh3hash32) ||
| [codec.Md5](#md5) ||
| [codec.PKCS5Padding](#pkcs5padding) ||
| [codec.PKCS5UnPadding](#pkcs5unpadding) ||
| [codec.PKCS7Padding](#pkcs7padding) ||
| [codec.PKCS7PaddingForDES](#pkcs7paddingfordes) ||
| [codec.PKCS7UnPadding](#pkcs7unpadding) ||
| [codec.PKCS7UnPaddingForDES](#pkcs7unpaddingfordes) ||
| [codec.RC4Decrypt](#rc4decrypt) ||
| [codec.RC4Encrypt](#rc4encrypt) ||
| [codec.RSADecryptWithOAEP](#rsadecryptwithoaep) |RSADecryptWithOAEP 使用 RSA私钥 和 RSA-OAEP 填充方式解密给定的密文。 参数 raw 表示 RSA 私钥，支持以下格式：   - DER 编码的私钥（raw ASN.1 DER 字节流）   - Base64 编码的 DER 格式（自动解码）   - PEM 编码（包...|
| [codec.RSADecryptWithPKCS1v15](#rsadecryptwithpkcs1v15) |DecryptWithPkcs1v15/RSADecryptWithPKCS1v15 使用 RSA私钥 和 PKCS#1 v1.5填充方式 解密给定的密文。  参数 raw 表示 RSA 私钥，支持以下格式：    - DER 编码的私钥（raw ASN.1 DER 字节流）    - Base64...|
| [codec.RSAEncryptWithOAEP](#rsaencryptwithoaep) |RSAEncryptWithOAEP 使用 RSA 公钥和 OAEP 填充方式对给定数据进行加密。    参数 raw 表示 RSA 公钥，支持以下格式：    - DER 编码的公钥（raw ASN.1 DER 字节流）    - Base64 编码的 DER 格式（自动解码）    - PEM ...|
| [codec.RSAEncryptWithPKCS1v15](#rsaencryptwithpkcs1v15) |EncryptWithPkcs1v15/RSAEncryptWithPKCS1v15 使用 RSA 公钥和 PKCS#1 v1.5 填充方式对给定数据进行加密。    参数 raw 表示 RSA 公钥，支持以下格式：    - DER 编码的公钥（raw ASN.1 DER 字节流）    - Ba...|
| [codec.Sha1](#sha1) ||
| [codec.Sha224](#sha224) ||
| [codec.Sha256](#sha256) ||
| [codec.Sha384](#sha384) ||
| [codec.Sha512](#sha512) ||
| [codec.SignSHA256WithRSA](#signsha256withrsa) |SignSHA256WithRSA 使用RSA私钥对数据进行SHA256签名，返回签名与错误  |
| [codec.SignVerifySHA256WithRSA](#signverifysha256withrsa) |SignVerifySHA256WithRSA 使用RSA公钥对数据进行SHA256签名验证，返回错误  |
| [codec.Sm2DecryptAsn1](#sm2decryptasn1) ||
| [codec.Sm2DecryptAsn1WithPassword](#sm2decryptasn1withpassword) ||
| [codec.Sm2DecryptC1C2C3](#sm2decryptc1c2c3) ||
| [codec.Sm2DecryptC1C2C3WithPassword](#sm2decryptc1c2c3withpassword) ||
| [codec.Sm2DecryptC1C3C2](#sm2decryptc1c3c2) ||
| [codec.Sm2DecryptC1C3C2WithPassword](#sm2decryptc1c3c2withpassword) ||
| [codec.Sm2EncryptAsn1](#sm2encryptasn1) ||
| [codec.Sm2EncryptC1C2C3](#sm2encryptc1c2c3) ||
| [codec.Sm2EncryptC1C3C2](#sm2encryptc1c3c2) ||
| [codec.Sm2GenerateHexKeyPair](#sm2generatehexkeypair) ||
| [codec.Sm2GeneratePemKeyPair](#sm2generatepemkeypair) ||
| [codec.Sm2SignWithSM3](#sm2signwithsm3) |SM2SignWithSM3 使用SM2私钥对数据进行SM3签名，返回签名与错误    参数 priKeyBytes 表示 SM2 私钥，支持以下格式：    - PEM 编码（例如 &amp;#34;-----BEGIN PRIVATE KEY-----&amp;#34; 块）    - HEX 字符串格式（64...|
| [codec.Sm2SignWithSM3WithPassword](#sm2signwithsm3withpassword) |SM2SignWithSM3WithPassword 使用带密码保护的SM2私钥对数据进行SM3签名    参数 priKeyBytes 表示加密的 SM2 私钥（PEM格式）  参数 data 是要签名的原始数据  参数 password 是私钥的保护密码，如果私钥未加密则传入 nil  返回值是...|
| [codec.Sm2VerifyWithSM3](#sm2verifywithsm3) |SM2VerifyWithSM3 使用SM2公钥对数据进行SM3签名验证，返回错误    参数 pubKeyBytes 表示 SM2 公钥，支持以下格式：    - PEM 编码（例如 &amp;#34;-----BEGIN PUBLIC KEY-----&amp;#34; 块）    - HEX 字符串格式（12...|
| [codec.Sm3](#sm3) ||
| [codec.Sm4CBCDecrypt](#sm4cbcdecrypt) |Sm4CBCDecrypt 使用 SM4 算法，在 CBC 模式下，使用 PKCS#5 填充来解密数据  CBC 模式下需要 IV (初始化向量)，若为空则会使用 key 的前 16 字节作为 IV。  |
| [codec.Sm4CBCEncrypt](#sm4cbcencrypt) |Sm4CBCEncrypt 使用 SM4 算法，在 CBC 模式下，使用 PKCS#5 填充来加密数据 CBC 模式下需要 IV (初始化向量)，若为空则会使用 key 的前 16 字节作为 IV。 example: ``` codec.Sm4CBCEncrypt(&amp;#34;123412341234...|
| [codec.Sm4CFBDecrypt](#sm4cfbdecrypt) |Sm4CFBDecrypt 使用 SM4 算法，在 ECB 模式下，使用 PKCS#5 填充来解密数据  ECB 模式下不需要 IV (初始化向量)，因此它可以为 nil (空)。  |
| [codec.Sm4CFBEncrypt](#sm4cfbencrypt) |Sm4CFBEncrypt 使用 SM4 算法，在 CFB 模式下，使用 PKCS#5 填充来加密数据  CFB 模式下需要 IV (初始化向量)，若为空则会使用 key 的前 16 字节作为 IV。  |
| [codec.Sm4EBCDecrypt](#sm4ebcdecrypt) |Sm4ECBDecrypt 使用 SM4 算法，在 ECB 模式下，使用 PKCS#5 填充来解密数据  ECB 模式下不需要 IV (初始化向量)，因此其是一个无用字段。  |
| [codec.Sm4EBCEncrypt](#sm4ebcencrypt) |Sm4ECBEncrypt 使用 SM4 算法，在 ECB 模式下，使用 PKCS#5 填充来加密数据  ECB 模式下不需要 IV (初始化向量)，因此其是一个无用字段.  |
| [codec.Sm4ECBDecrypt](#sm4ecbdecrypt) |Sm4ECBDecrypt 使用 SM4 算法，在 ECB 模式下，使用 PKCS#5 填充来解密数据  ECB 模式下不需要 IV (初始化向量)，因此其是一个无用字段。  |
| [codec.Sm4ECBEncrypt](#sm4ecbencrypt) |Sm4ECBEncrypt 使用 SM4 算法，在 ECB 模式下，使用 PKCS#5 填充来加密数据  ECB 模式下不需要 IV (初始化向量)，因此其是一个无用字段.  |
| [codec.Sm4GCMDecrypt](#sm4gcmdecrypt) ||
| [codec.Sm4GCMEncrypt](#sm4gcmencrypt) |	func sm4encBase(data interface{}, key []byte, iv []byte, sm4ordinary func(key, in []byte, encode bool, iv []byte) ([]byte, error)) ([]byte, error) { ...|
| [codec.Sm4OFBDecrypt](#sm4ofbdecrypt) |Sm4OFBDecrypt 使用 SM4 算法，在 OFB 模式下，使用 PKCS#5 填充来解密数据  OFB 模式下需要 IV (初始化向量)，若为空则会使用 key 的前 16 字节作为 IV。  |
| [codec.Sm4OFBEncrypt](#sm4ofbencrypt) |Sm4OFBEncrypt 使用 SM4 算法，在 OFB 模式下，使用 PKCS#5 填充来加密数据  OFB 模式下需要 IV (初始化向量)，若为空则会使用 key 的前 16 字节作为 IV。  |
| [codec.StrconvQuote](#strconvquote) |Quote returns a double-quoted Go string literal representing s. The returned string uses Go escape sequences (\t, \n, \xFF, \u0100) for control charac...|
| [codec.StrconvUnquote](#strconvunquote) |Unquote interprets s as a single-quoted, double-quoted, or backquoted Go string literal, returning the string value that s quotes.  (If s is single-qu...|
| [codec.TripleDESCBCDecrypt](#tripledescbcdecrypt) |TripleDESCBCDecrypt 是一个便捷函数，用于使用 Triple DES 算法，在 CBC 模式下，使用 零填充来解密数据。 它接受一个密钥（key）、需要解密的数据（data to decrypt）和一个初始化向量（iv）。 密钥的长度必须是 24 个字节（即 3 * 8 字节），并...|
| [codec.TripleDESCBCEncrypt](#tripledescbcencrypt) |TripleDESCBCEncrypt 是一个便捷函数，用于使用 Triple DES 算法，在 CBC 模式下，使用 零填充来加密数据。 它接受一个密钥（key）、需要加密的数据（data to encrypt）和一个初始化向量（iv）。 密钥的长度必须是 24 个字节（即 3 * 8 字节），并...|
| [codec.TripleDESDecrypt](#tripledesdecrypt) |TripleDESCBCDecrypt 是一个便捷函数，用于使用 Triple DES 算法，在 CBC 模式下，使用 零填充来解密数据。 它接受一个密钥（key）、需要解密的数据（data to decrypt）和一个初始化向量（iv）。 密钥的长度必须是 24 个字节（即 3 * 8 字节），并...|
| [codec.TripleDESECBDecrypt](#tripledesecbdecrypt) |TripleDESECBDecrypt 是一个便捷函数，用于使用 Triple DES 算法，在 ECB 模式下，使用 零填充来解密数据。 它接受一个密钥（key）、需要解密的数据（data to decrypt）（ecb 模式下 iv 无用） 密钥的长度必须是 24 个字节（即 3 * 8 字节）...|
| [codec.TripleDESECBEncrypt](#tripledesecbencrypt) |TripleDESECBEncrypt 是一个便捷函数，用于使用 Triple DES 算法，在 ECB 模式下，使用 零填充来加密数据。 它接受一个密钥（key）、需要加密的数据（data to encrypt）（ecb 模式下 iv 无用） 密钥的长度必须是 24 个字节（即 3 * 8 字节）...|
| [codec.TripleDESEncrypt](#tripledesencrypt) |TripleDESCBCEncrypt 是一个便捷函数，用于使用 Triple DES 算法，在 CBC 模式下，使用 零填充来加密数据。 它接受一个密钥（key）、需要加密的数据（data to encrypt）和一个初始化向量（iv）。 密钥的长度必须是 24 个字节（即 3 * 8 字节），并...|
| [codec.UTF8ToGB18030](#utf8togb18030) ||
| [codec.UTF8ToGBK](#utf8togbk) ||
| [codec.UTF8ToHZGB2312](#utf8tohzgb2312) ||
| [codec.UnescapePathUrl](#unescapepathurl) ||
| [codec.UnescapeQueryUrl](#unescapequeryurl) ||
| [codec.UnicodeDecode](#unicodedecode) ||
| [codec.UnicodeEncode](#unicodeencode) ||
| [codec.ZeroPadding](#zeropadding) ||
| [codec.ZeroUnPadding](#zerounpadding) ||


## 函数定义
### AESCBCDecrypt

#### 详细描述
AESCBCDecryptWithPKCS7Padding 使用 AES 算法，在 CBC 模式下，使用 PKCS5 填充来解密数据。
它接受一个密钥（key）、需要解密的数据（data to decrypt）和一个初始化向量（iv）。
密钥的长度必须是 16、24 或 32 字节（分别对应 AES-128、AES-192 或 AES-256）。
如果iv为 nil，则使用key的前16字节作为iv。
注意：AESCBCDecrypt AESDecrypt 和 AESCBCDecryptWithPKCS7Padding 是同一个函数的别名
example：
```

	codec.AESCBCDecryptWithPKCS7Padding(&#34;1234567890123456&#34;, ciphertext, &#34;1234567890123456&#34;)

```


#### 定义

`AESCBCDecrypt(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |   |
| i | `any` |   |
| iv | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### AESCBCDecryptWithPKCS7Padding

#### 详细描述
AESCBCDecryptWithPKCS7Padding 使用 AES 算法，在 CBC 模式下，使用 PKCS5 填充来解密数据。
它接受一个密钥（key）、需要解密的数据（data to decrypt）和一个初始化向量（iv）。
密钥的长度必须是 16、24 或 32 字节（分别对应 AES-128、AES-192 或 AES-256）。
如果iv为 nil，则使用key的前16字节作为iv。
注意：AESCBCDecrypt AESDecrypt 和 AESCBCDecryptWithPKCS7Padding 是同一个函数的别名
example：
```

	codec.AESCBCDecryptWithPKCS7Padding(&#34;1234567890123456&#34;, ciphertext, &#34;1234567890123456&#34;)

```


#### 定义

`AESCBCDecryptWithPKCS7Padding(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |   |
| i | `any` |   |
| iv | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### AESCBCDecryptWithZeroPadding

#### 详细描述
AESCBCDecryptWithZeroPadding 使用 AES 算法，在 CBC 模式下，使用 Zero 填充来解密数据。
它接受一个密钥（key）、需要解密的数据（data to decrypt）和一个初始化向量（iv）。
密钥的长度必须是 16、24 或 32 字节（分别对应 AES-128、AES-192 或 AES-256）。
如果iv为 nil，则使用key的前16字节作为iv。
example：
```
codec.AESCBCDecryptWithZeroPadding(&#34;1234567890123456&#34;, ciphertext, &#34;1234567890123456&#34;)
```


#### 定义

`AESCBCDecryptWithZeroPadding(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |   |
| i | `any` |   |
| iv | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### AESCBCEncrypt

#### 详细描述
AESCBCEncryptWithPKCS7Padding 使用 AES 算法，在 CBC 模式下，使用 PKCS5 填充来加密数据。
它接受一个密钥（key）、需要加密的数据（data to encrypt）和一个初始化向量（iv）。
密钥的长度必须是 16、24 或 32 字节（分别对应 AES-128、AES-192 或 AES-256）。
如果iv为 nil，则使用key的前16字节作为iv。
注意：AESCBCEncrypt AESEncrypt 和 AESCBCEncryptWithPKCS7Padding 是同一个函数的别名
example：
```

	codec.AESCBCEncryptWithPKCS7Padding(&#34;1234567890123456&#34;, &#34;hello world&#34;, &#34;1234567890123456&#34;)

```


#### 定义

`AESCBCEncrypt(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |   |
| i | `any` |   |
| iv | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### AESCBCEncryptWithPKCS7Padding

#### 详细描述
AESCBCEncryptWithPKCS7Padding 使用 AES 算法，在 CBC 模式下，使用 PKCS5 填充来加密数据。
它接受一个密钥（key）、需要加密的数据（data to encrypt）和一个初始化向量（iv）。
密钥的长度必须是 16、24 或 32 字节（分别对应 AES-128、AES-192 或 AES-256）。
如果iv为 nil，则使用key的前16字节作为iv。
注意：AESCBCEncrypt AESEncrypt 和 AESCBCEncryptWithPKCS7Padding 是同一个函数的别名
example：
```

	codec.AESCBCEncryptWithPKCS7Padding(&#34;1234567890123456&#34;, &#34;hello world&#34;, &#34;1234567890123456&#34;)

```


#### 定义

`AESCBCEncryptWithPKCS7Padding(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |   |
| i | `any` |   |
| iv | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### AESCBCEncryptWithZeroPadding

#### 详细描述
AESCBCEncryptWithZeroPadding 使用 AES 算法，在 CBC 模式下，使用 Zero 填充来加密数据。
它接受一个密钥（key）、需要加密的数据（data to encrypt）和一个初始化向量（iv）。
密钥的长度必须是 16、24 或 32 字节（分别对应 AES-128、AES-192 或 AES-256）。
如果iv为 nil，则使用key的前16字节作为iv。
example：
```
codec.AESCBCEncryptWithZeroPadding(&#34;1234567890123456&#34;, &#34;hello world&#34;, &#34;1234567890123456&#34;)
```


#### 定义

`AESCBCEncryptWithZeroPadding(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |   |
| i | `any` |   |
| iv | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### AESDecrypt

#### 详细描述
AESCBCDecryptWithPKCS7Padding 使用 AES 算法，在 CBC 模式下，使用 PKCS5 填充来解密数据。
它接受一个密钥（key）、需要解密的数据（data to decrypt）和一个初始化向量（iv）。
密钥的长度必须是 16、24 或 32 字节（分别对应 AES-128、AES-192 或 AES-256）。
如果iv为 nil，则使用key的前16字节作为iv。
注意：AESCBCDecrypt AESDecrypt 和 AESCBCDecryptWithPKCS7Padding 是同一个函数的别名
example：
```

	codec.AESCBCDecryptWithPKCS7Padding(&#34;1234567890123456&#34;, ciphertext, &#34;1234567890123456&#34;)

```


#### 定义

`AESDecrypt(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |   |
| i | `any` |   |
| iv | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### AESECBDecrypt

#### 详细描述
AESDecryptECBWithPKCSPadding 使用 AES 算法，在 ECB 模式下对数据进行解密，使用 PKCSPadding 填充方式
它接受一个密钥（key）、需要解密的数据（data to decrypt）。
ecb 模式下iv 无用。
密钥的长度必须是 16、24 或 32 字节（分别对应 AES-128、AES-192 或 AES-256）。
AESECBDecrypt 和 AESDecryptECBWithPKCSPadding 是同一个函数。
example:
```
codec.AESECBDecryptWithPKCS7Padding(&#34;1234567890123456&#34;, &#34;hello world&#34;, nil)
```


#### 定义

`AESECBDecrypt(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |   |
| i | `any` |   |
| iv | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### AESECBDecryptWithPKCS7Padding

#### 详细描述
AESDecryptECBWithPKCSPadding 使用 AES 算法，在 ECB 模式下对数据进行解密，使用 PKCSPadding 填充方式
它接受一个密钥（key）、需要解密的数据（data to decrypt）。
ecb 模式下iv 无用。
密钥的长度必须是 16、24 或 32 字节（分别对应 AES-128、AES-192 或 AES-256）。
AESECBDecrypt 和 AESDecryptECBWithPKCSPadding 是同一个函数。
example:
```
codec.AESECBDecryptWithPKCS7Padding(&#34;1234567890123456&#34;, &#34;hello world&#34;, nil)
```


#### 定义

`AESECBDecryptWithPKCS7Padding(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |   |
| i | `any` |   |
| iv | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### AESECBDecryptWithZeroPadding

#### 详细描述
AESDecryptECBWithZeroPadding 使用 AES 算法，在 ECB 模式下对数据进行解密，使用 ZeroPadding 填充方式
它接受一个密钥（key）、需要解密的数据（data to decrypt）。
ecb 模式下iv 无用。
密钥的长度必须是 16、24 或 32 字节（分别对应 AES-128、AES-192 或 AES-256）。
example:
```
codec.AESECBDecryptWithZeroPadding(&#34;1234567890123456&#34;, &#34;hello world&#34;, nil)
```


#### 定义

`AESECBDecryptWithZeroPadding(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |   |
| i | `any` |   |
| iv | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### AESECBEncrypt

#### 详细描述
AESCBCEncryptWithZeroPadding 使用 AES 算法，在 ECB 模式下对数据进行加密，使用 PKCSPadding 填充方式
它接受一个密钥（key）、需要加密的数据（data to encrypt）。
ecb 模式下iv 无用。
密钥的长度必须是 16、24 或 32 字节（分别对应 AES-128、AES-192 或 AES-256）。
AESECBEncrypt 和 AESECBEncryptWithPKCSPadding 是同一个函数。
example:
```
codec.AESECBEncryptWithPKCS7Padding(&#34;1234567890123456&#34;, &#34;hello world&#34;, nil)
```


#### 定义

`AESECBEncrypt(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |   |
| i | `any` |   |
| iv | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### AESECBEncryptWithPKCS7Padding

#### 详细描述
AESCBCEncryptWithZeroPadding 使用 AES 算法，在 ECB 模式下对数据进行加密，使用 PKCSPadding 填充方式
它接受一个密钥（key）、需要加密的数据（data to encrypt）。
ecb 模式下iv 无用。
密钥的长度必须是 16、24 或 32 字节（分别对应 AES-128、AES-192 或 AES-256）。
AESECBEncrypt 和 AESECBEncryptWithPKCSPadding 是同一个函数。
example:
```
codec.AESECBEncryptWithPKCS7Padding(&#34;1234567890123456&#34;, &#34;hello world&#34;, nil)
```


#### 定义

`AESECBEncryptWithPKCS7Padding(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |   |
| i | `any` |   |
| iv | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### AESECBEncryptWithZeroPadding

#### 详细描述
AESCBCEncryptWithZeroPadding 使用 AES 算法，在 ECB 模式下对数据进行加密，使用 ZeroPadding 填充方式
它接受一个密钥（key）、需要加密的数据（data to encrypt）。
ecb 模式下iv 无用。
密钥的长度必须是 16、24 或 32 字节（分别对应 AES-128、AES-192 或 AES-256）。
example:
```
codec.AESECBEncryptWithZeroPadding(&#34;1234567890123456&#34;, &#34;hello world&#34;, nil)
```


#### 定义

`AESECBEncryptWithZeroPadding(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |   |
| i | `any` |   |
| iv | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### AESEncrypt

#### 详细描述
AESCBCEncryptWithPKCS7Padding 使用 AES 算法，在 CBC 模式下，使用 PKCS5 填充来加密数据。
它接受一个密钥（key）、需要加密的数据（data to encrypt）和一个初始化向量（iv）。
密钥的长度必须是 16、24 或 32 字节（分别对应 AES-128、AES-192 或 AES-256）。
如果iv为 nil，则使用key的前16字节作为iv。
注意：AESCBCEncrypt AESEncrypt 和 AESCBCEncryptWithPKCS7Padding 是同一个函数的别名
example：
```

	codec.AESCBCEncryptWithPKCS7Padding(&#34;1234567890123456&#34;, &#34;hello world&#34;, &#34;1234567890123456&#34;)

```


#### 定义

`AESEncrypt(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |   |
| i | `any` |   |
| iv | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### AESGCMDecrypt

#### 详细描述


#### 定义

`AESGCMDecrypt(key []byte, data any, nonce []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |   |
| data | `any` |   |
| nonce | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### AESGCMDecryptWithNonceSize12

#### 详细描述


#### 定义

`AESGCMDecryptWithNonceSize12(key []byte, data any, nonce []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |   |
| data | `any` |   |
| nonce | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### AESGCMDecryptWithNonceSize16

#### 详细描述


#### 定义

`AESGCMDecryptWithNonceSize16(key []byte, data any, nonce []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |   |
| data | `any` |   |
| nonce | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


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


#### 定义

`AESGCMEncrypt(key []byte, data any, nonceRaw []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |   |
| data | `any` |   |
| nonceRaw | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### AESGCMEncryptWithNonceSize12

#### 详细描述


#### 定义

`AESGCMEncryptWithNonceSize12(key []byte, data any, nonceRaw []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |   |
| data | `any` |   |
| nonceRaw | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


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


#### 定义

`AESGCMEncryptWithNonceSize16(key []byte, data any, nonceRaw []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |   |
| data | `any` |   |
| nonceRaw | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### AutoDecode

#### 详细描述


#### 定义

`AutoDecode(i any) []*AutoDecodeResult`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*AutoDecodeResult` |   |


### DESCBCDecrypt

#### 详细描述
DESCBCDecrypt 是一个便捷函数，用于使用 DES 算法，在 CBC 模式下，使用零填充来解密数据。
它接受一个密钥（key）、需要解密的数据（data to decrypt）和一个初始化向量（iv）。
密钥的长度必须是 8 个字节，并且 iv 可以是 nil 或者 8 个字节长。
如果 iv 为 nil，它将被固定为密钥，或者用零填充到 8 个字节。
DESCBCDecrypt DESDecrypt 是同一个函数。
example:
```
codec.DESCBCEncrypt([]byte(&#34;12345678&#34;), ciphertext, &#34;12345678&#34;)
```


#### 定义

`DESCBCDecrypt(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |   |
| i | `any` |   |
| iv | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### DESCBCEncrypt

#### 详细描述
DESCBCEncrypt 是一个便捷函数，用于使用 DES 算法，在 CBC 模式下，使用零填充来加密数据。
它接受一个密钥（key）、需要加密的数据（data to encrypt）和一个初始化向量（iv）。
密钥的长度必须是 8 个字节，并且 iv 可以是 nil 或者 8 个字节长。
如果 iv 为 nil，它将被固定为密钥，或者用零填充到 8 个字节。
DESCBCEncrypt DESEncrypt 是同一个函数。
example:
```
codec.DESCBCEncrypt([]byte(&#34;12345678&#34;), &#34;hello world&#34;, &#34;12345678&#34;)
```


#### 定义

`DESCBCEncrypt(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |   |
| i | `any` |   |
| iv | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### DESDecrypt

#### 详细描述
DESCBCDecrypt 是一个便捷函数，用于使用 DES 算法，在 CBC 模式下，使用零填充来解密数据。
它接受一个密钥（key）、需要解密的数据（data to decrypt）和一个初始化向量（iv）。
密钥的长度必须是 8 个字节，并且 iv 可以是 nil 或者 8 个字节长。
如果 iv 为 nil，它将被固定为密钥，或者用零填充到 8 个字节。
DESCBCDecrypt DESDecrypt 是同一个函数。
example:
```
codec.DESCBCEncrypt([]byte(&#34;12345678&#34;), ciphertext, &#34;12345678&#34;)
```


#### 定义

`DESDecrypt(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |   |
| i | `any` |   |
| iv | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### DESECBDecrypt

#### 详细描述
DESECBDecrypt 是一个便捷函数，用于使用 DES 算法，在 ECB 模式下，使用 零填充来解密数据。
它接受一个密钥（key）、需要解密的数据（data to decrypt）（ecb 模式下 iv 无用）
密钥的长度必须是 8 个字节。
example:
```
codec.DESECBDecrypt([]byte(&#34;12345678&#34;), ciphertext)
```


#### 定义

`DESECBDecrypt(key []byte, data []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |   |
| data | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### DESECBEncrypt

#### 详细描述
DESECBEncrypt 是一个便捷函数，用于使用 DES 算法，在 ECB 模式下，使用 零填充来加密数据。
它接受一个密钥（key）、需要加密的数据（data to encrypt）（ecb 模式下 iv 无用）
密钥的长度必须是 8 个字节。
example:
```
codec.DESECBEncrypt([]byte(&#34;12345678&#34;), &#34;hello world&#34;)
```


#### 定义

`DESECBEncrypt(key []byte, data []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |   |
| data | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### DESEncrypt

#### 详细描述
DESCBCEncrypt 是一个便捷函数，用于使用 DES 算法，在 CBC 模式下，使用零填充来加密数据。
它接受一个密钥（key）、需要加密的数据（data to encrypt）和一个初始化向量（iv）。
密钥的长度必须是 8 个字节，并且 iv 可以是 nil 或者 8 个字节长。
如果 iv 为 nil，它将被固定为密钥，或者用零填充到 8 个字节。
DESCBCEncrypt DESEncrypt 是同一个函数。
example:
```
codec.DESCBCEncrypt([]byte(&#34;12345678&#34;), &#34;hello world&#34;, &#34;12345678&#34;)
```


#### 定义

`DESEncrypt(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |   |
| i | `any` |   |
| iv | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### DecodeASCII

#### 详细描述
Unquote interprets s as a single-quoted, double-quoted,
or backquoted Go string literal, returning the string value
that s quotes.  (If s is single-quoted, it would be a Go
character literal; Unquote returns the corresponding
one-character string. For an empty character literal
Unquote returns the empty string.)


#### 定义

`DecodeASCII(s string) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


### DecodeBase32

#### 详细描述


#### 定义

`DecodeBase32(i string) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### DecodeBase64

#### 详细描述


#### 定义

`DecodeBase64(i string) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### DecodeBase64Url

#### 详细描述


#### 定义

`DecodeBase64Url(i any) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### DecodeChunked

#### 详细描述


#### 定义

`DecodeChunked(raw []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### DecodeHex

#### 详细描述


#### 定义

`DecodeHex(i string) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


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
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### DecodeUrl

#### 详细描述


#### 定义

`DecodeUrl(s string) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


### DoubleDecodeUrl

#### 详细描述


#### 定义

`DoubleDecodeUrl(i string) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


### DoubleEncodeUrl

#### 详细描述


#### 定义

`DoubleEncodeUrl(i any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### EncodeASCII

#### 详细描述


#### 定义

`EncodeASCII(s string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### EncodeBase32

#### 详细描述


#### 定义

`EncodeBase32(i any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### EncodeBase64

#### 详细描述


#### 定义

`EncodeBase64(i any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### EncodeBase64Url

#### 详细描述


#### 定义

`EncodeBase64Url(i any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### EncodeChunked

#### 详细描述


#### 定义

`EncodeChunked(raw []byte) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### EncodeHtml

#### 详细描述


#### 定义

`EncodeHtml(i any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### EncodeHtmlHex

#### 详细描述


#### 定义

`EncodeHtmlHex(i any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### EncodeToHex

#### 详细描述


#### 定义

`EncodeToHex(i any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### EncodeToPrintable

#### 详细描述


#### 定义

`EncodeToPrintable(s string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### EncodeUrl

#### 详细描述


#### 定义

`EncodeUrl(i any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


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
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### EscapePathUrl

#### 详细描述
PathEscape escapes the string so it can be safely placed inside a [URL] path segment,
replacing special characters (including /) with %XX sequences as needed.


#### 定义

`EscapePathUrl(s string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### EscapeQueryUrl

#### 详细描述


#### 定义

`EscapeQueryUrl(s string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### EscapeUrl

#### 详细描述


#### 定义

`EscapeUrl(s string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### FixUTF8

#### 详细描述


#### 定义

`FixUTF8(s []byte) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### GB18030ToUTF8

#### 详细描述


#### 定义

`GB18030ToUTF8(s []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### GBKSafe

#### 详细描述


#### 定义

`GBKSafe(s []byte) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


### GBKToUTF8

#### 详细描述


#### 定义

`GBKToUTF8(s []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### HTMLChardet

#### 详细描述


#### 定义

`HTMLChardet(raw any) ([]chardet.Result, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]chardet.Result` |   |
| r2 | `error` |   |


### HTMLChardetBest

#### 详细描述


#### 定义

`HTMLChardetBest(raw any) (*chardet.Result, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*chardet.Result` |   |
| r2 | `error` |   |


### HZGB2312ToUTF8

#### 详细描述


#### 定义

`HZGB2312ToUTF8(s []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### HmacMD5

#### 详细描述


#### 定义

`HmacMD5(key any, data any) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `any` |   |
| data | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### HmacSM3

#### 详细描述


#### 定义

`HmacSM3(key any, data any) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `any` |   |
| data | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### HmacSha1

#### 详细描述


#### 定义

`HmacSha1(key any, data any) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `any` |   |
| data | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### HmacSha256

#### 详细描述


#### 定义

`HmacSha256(key any, data any) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `any` |   |
| data | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### HmacSha512

#### 详细描述


#### 定义

`HmacSha512(key any, data any) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `any` |   |
| data | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### MMH3Hash128

#### 详细描述


#### 定义

`MMH3Hash128(i any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### MMH3Hash128x64

#### 详细描述


#### 定义

`MMH3Hash128x64(i any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### MMH3Hash32

#### 详细描述


#### 定义

`MMH3Hash32(i any) int64`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int64` |   |


### Md5

#### 详细描述


#### 定义

`Md5(i any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### PKCS5Padding

#### 详细描述


#### 定义

`PKCS5Padding(ciphertext []byte, blockSize int) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ciphertext | `[]byte` |   |
| blockSize | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### PKCS5UnPadding

#### 详细描述


#### 定义

`PKCS5UnPadding(origData []byte) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| origData | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### PKCS7Padding

#### 详细描述


#### 定义

`PKCS7Padding(src []byte) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| src | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### PKCS7PaddingForDES

#### 详细描述


#### 定义

`PKCS7PaddingForDES(src []byte) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| src | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### PKCS7UnPadding

#### 详细描述


#### 定义

`PKCS7UnPadding(src []byte) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| src | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### PKCS7UnPaddingForDES

#### 详细描述


#### 定义

`PKCS7UnPaddingForDES(src []byte) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| src | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### RC4Decrypt

#### 详细描述


#### 定义

`RC4Decrypt(cipherKey []byte, cipherText []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cipherKey | `[]byte` |   |
| cipherText | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### RC4Encrypt

#### 详细描述


#### 定义

`RC4Encrypt(cipherKey []byte, plainText []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cipherKey | `[]byte` |   |
| plainText | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


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

示例：

	raw := `
	-----BEGIN PRIVATE KEY-----
	MIIEvQIBADANBgkqhkiG9w0BAQEFAASC...（略）
	-----END PRIVATE KEY-----
	`
	plaintext, err := Pkcs1v15Decrypt([]byte(raw), encryptedData)


#### 定义

`RSADecryptWithOAEP(raw []byte, data any) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` |   |
| data | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


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



Example:
```

		raw := `
		-----BEGIN PRIVATE KEY-----
		MIIEvQIBADANBgkqhkiG9w0BAQEFAASC...（略）
		-----END PRIVATE KEY-----
		`
		plaintext, err := DecryptWithPkcs1v15(raw, encryptedData)
	 	plaintext, err := RSADecryptWithPKCS1v15(raw, encryptedData)

```


#### 定义

`RSADecryptWithPKCS1v15(raw []byte, data any) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` |   |
| data | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


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
```

	raw := `
	-----BEGIN PUBLIC KEY-----
	MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAn...（略）
	-----END PUBLIC KEY-----
	`
	ciphertext, err := RSAEncryptWithOAEP(raw, "hello world")

```


#### 定义

`RSAEncryptWithOAEP(raw []byte, data any) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` |   |
| data | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### RSAEncryptWithPKCS1v15

#### 详细描述
EncryptWithPkcs1v15/RSAEncryptWithPKCS1v15 使用 RSA 公钥和 PKCS#1 v1.5 填充方式对给定数据进行加密。



参数 raw 表示 RSA 公钥，支持以下格式：

  - DER 编码的公钥（raw ASN.1 DER 字节流）

  - Base64 编码的 DER 格式（自动解码）

  - PEM 编码（例如 &#34;-----BEGIN PUBLIC KEY-----&#34; 或 &#34;-----BEGIN RSA PUBLIC KEY-----&#34; 块）

  - Base64 编码的 PEM 格式（自动解码）



参数 data 是要加密的明文数据，可以是 []byte、string 或其他可转换为字节数组的类型。

返回值是加密后的密文（字节切片），如果加密失败则返回错误。



Example:
```

		raw := `
		-----BEGIN PUBLIC KEY-----
		MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAn...（略）
		-----END PUBLIC KEY-----
		`
		ciphertext, err := EncryptWithPkcs1v15(raw, "hello world")
	 ciphertext, err := RSAEncryptWithPKCS1v15(raw, "hello world")

```


#### 定义

`RSAEncryptWithPKCS1v15(raw []byte, data any) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` |   |
| data | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### Sha1

#### 详细描述


#### 定义

`Sha1(i any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### Sha224

#### 详细描述


#### 定义

`Sha224(i any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### Sha256

#### 详细描述


#### 定义

`Sha256(i any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### Sha384

#### 详细描述


#### 定义

`Sha384(i any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### Sha512

#### 详细描述


#### 定义

`Sha512(i any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### SignSHA256WithRSA

#### 详细描述
SignSHA256WithRSA 使用RSA私钥对数据进行SHA256签名，返回签名与错误

Example:
```
pemBytes = string(`-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDZz5Zz3z3z3z3z
...
-----END PRIVATE KEY-----`)
signBytes, err := tls.SignSHA256WithRSA(pemBytes, "hello")
die(err)
signString = string(signBytes)
```


#### 定义

`SignSHA256WithRSA(pemBytes []byte, data any) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pemBytes | `[]byte` |   |
| data | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### SignVerifySHA256WithRSA

#### 详细描述
SignVerifySHA256WithRSA 使用RSA公钥对数据进行SHA256签名验证，返回错误

Example:
```
pemBytes = string(`-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAs1pvFYNQpPSPbshg6F7Z
...
-----END PUBLIC KEY-----`)
err := tls.PemVerifySignSha256WithRSA(pemBytes, "hello", signBytes)
die(err)
```


#### 定义

`SignVerifySHA256WithRSA(pemBytes []byte, originData any, sign []byte) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pemBytes | `[]byte` |   |
| originData | `any` |   |
| sign | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### Sm2DecryptAsn1

#### 详细描述


#### 定义

`Sm2DecryptAsn1(priKey []byte, data []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| priKey | `[]byte` |   |
| data | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### Sm2DecryptAsn1WithPassword

#### 详细描述


#### 定义

`Sm2DecryptAsn1WithPassword(priKey []byte, data []byte, password []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| priKey | `[]byte` |   |
| data | `[]byte` |   |
| password | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### Sm2DecryptC1C2C3

#### 详细描述


#### 定义

`Sm2DecryptC1C2C3(priKey []byte, data []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| priKey | `[]byte` |   |
| data | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### Sm2DecryptC1C2C3WithPassword

#### 详细描述


#### 定义

`Sm2DecryptC1C2C3WithPassword(priKey []byte, data []byte, password []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| priKey | `[]byte` |   |
| data | `[]byte` |   |
| password | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### Sm2DecryptC1C3C2

#### 详细描述


#### 定义

`Sm2DecryptC1C3C2(priKey []byte, data []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| priKey | `[]byte` |   |
| data | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### Sm2DecryptC1C3C2WithPassword

#### 详细描述


#### 定义

`Sm2DecryptC1C3C2WithPassword(priKey []byte, data []byte, password []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| priKey | `[]byte` |   |
| data | `[]byte` |   |
| password | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### Sm2EncryptAsn1

#### 详细描述


#### 定义

`Sm2EncryptAsn1(pubKey []byte, data []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pubKey | `[]byte` |   |
| data | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### Sm2EncryptC1C2C3

#### 详细描述


#### 定义

`Sm2EncryptC1C2C3(pubKey []byte, data []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pubKey | `[]byte` |   |
| data | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### Sm2EncryptC1C3C2

#### 详细描述


#### 定义

`Sm2EncryptC1C3C2(pubKey []byte, data []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pubKey | `[]byte` |   |
| data | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### Sm2GenerateHexKeyPair

#### 详细描述


#### 定义

`Sm2GenerateHexKeyPair() ([]byte, []byte, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `[]byte` |   |
| r3 | `error` |   |


### Sm2GeneratePemKeyPair

#### 详细描述


#### 定义

`Sm2GeneratePemKeyPair() ([]byte, []byte, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `[]byte` |   |
| r3 | `error` |   |


### Sm2SignWithSM3

#### 详细描述
SM2SignWithSM3 使用SM2私钥对数据进行SM3签名，返回签名与错误



参数 priKeyBytes 表示 SM2 私钥，支持以下格式：

  - PEM 编码（例如 &#34;-----BEGIN PRIVATE KEY-----&#34; 块）

  - HEX 字符串格式（64位十六进制字符串）

  - 原始字节数组（32字节的私钥数据）



参数 data 是要签名的原始数据，可以是 []byte、string 或其他可转换为字节数组的类型。

返回值是SM2签名结果（ASN.1 DER编码），如果签名失败则返回错误。



Example:
```
priKey, pubKey, _ := codec.Sm2GeneratePemKeyPair()
data := "hello world"
signature, err := codec.Sm2SignWithSM3(priKey, data)
die(err)
println("签名成功")
```


#### 定义

`Sm2SignWithSM3(priKeyBytes []byte, data any) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| priKeyBytes | `[]byte` |   |
| data | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### Sm2SignWithSM3WithPassword

#### 详细描述
SM2SignWithSM3WithPassword 使用带密码保护的SM2私钥对数据进行SM3签名



参数 priKeyBytes 表示加密的 SM2 私钥（PEM格式）

参数 data 是要签名的原始数据

参数 password 是私钥的保护密码，如果私钥未加密则传入 nil

返回值是SM2签名结果（ASN.1 DER编码），如果签名失败则返回错误。



Example:
```
encryptedPriKey := []byte(`-----BEGIN ENCRYPTED PRIVATE KEY-----
MIGHAgEAMBMGByqGSM49AgEGCCqBHM9VAYItBG0wawIBAQQg...
-----END ENCRYPTED PRIVATE KEY-----`)
data := "hello world"
password := []byte("mypassword")
signature, err := codec.Sm2SignWithSM3WithPassword(encryptedPriKey, data, password)
die(err)
println("加密私钥签名成功")
```


#### 定义

`Sm2SignWithSM3WithPassword(priKeyBytes []byte, data any, password []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| priKeyBytes | `[]byte` |   |
| data | `any` |   |
| password | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### Sm2VerifyWithSM3

#### 详细描述
SM2VerifyWithSM3 使用SM2公钥对数据进行SM3签名验证，返回错误



参数 pubKeyBytes 表示 SM2 公钥，支持以下格式：

  - PEM 编码（例如 &#34;-----BEGIN PUBLIC KEY-----&#34; 块）

  - HEX 字符串格式（128位或130位十六进制字符串）

  - 原始字节数组（64或65字节的公钥数据）



参数 originData 是原始签名数据

参数 sign 是SM2签名结果（ASN.1 DER编码）

如果验证成功返回 nil，验证失败返回错误信息。



Example:
```
priKey, pubKey, _ := codec.Sm2GeneratePemKeyPair()
data := "hello world"
signature, _ := codec.Sm2SignWithSM3(priKey, data)
err := codec.Sm2VerifyWithSM3(pubKey, data, signature)

if err == nil {
   println("签名验证成功")
}else {
   println("签名验证失败:", err.Error())
}
```


#### 定义

`Sm2VerifyWithSM3(pubKeyBytes []byte, originData any, sign []byte) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pubKeyBytes | `[]byte` |   |
| originData | `any` |   |
| sign | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### Sm3

#### 详细描述


#### 定义

`Sm3(raw any) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### Sm4CBCDecrypt

#### 详细描述
Sm4CBCDecrypt 使用 SM4 算法，在 CBC 模式下，使用 PKCS#5 填充来解密数据

CBC 模式下需要 IV (初始化向量)，若为空则会使用 key 的前 16 字节作为 IV。

Example:
```
codec.Sm4CBCDecrypt("1234123412341234", "123412341234123456", "1234123412341234")
```


#### 定义

`Sm4CBCDecrypt(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |   |
| i | `any` |   |
| iv | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### Sm4CBCEncrypt

#### 详细描述
Sm4CBCEncrypt 使用 SM4 算法，在 CBC 模式下，使用 PKCS#5 填充来加密数据
CBC 模式下需要 IV (初始化向量)，若为空则会使用 key 的前 16 字节作为 IV。
example:
```
codec.Sm4CBCEncrypt(&#34;1234123412341234&#34;, &#34;123412341234123456&#34;, &#34;1234123412341234&#34;)
```


#### 定义

`Sm4CBCEncrypt(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |   |
| i | `any` |   |
| iv | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### Sm4CFBDecrypt

#### 详细描述
Sm4CFBDecrypt 使用 SM4 算法，在 ECB 模式下，使用 PKCS#5 填充来解密数据

ECB 模式下不需要 IV (初始化向量)，因此它可以为 nil (空)。

Example:
```
codec.Sm4CFBDecrypt("1234123412341234", "123412341234123456", nil)
```


#### 定义

`Sm4CFBDecrypt(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |   |
| i | `any` |   |
| iv | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### Sm4CFBEncrypt

#### 详细描述
Sm4CFBEncrypt 使用 SM4 算法，在 CFB 模式下，使用 PKCS#5 填充来加密数据

CFB 模式下需要 IV (初始化向量)，若为空则会使用 key 的前 16 字节作为 IV。

Example:
```
codec.Sm4CFBEncrypt("1234123412341234", "123412341234123456", "1234123412341234")
```


#### 定义

`Sm4CFBEncrypt(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |   |
| i | `any` |   |
| iv | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### Sm4EBCDecrypt

#### 详细描述
Sm4ECBDecrypt 使用 SM4 算法，在 ECB 模式下，使用 PKCS#5 填充来解密数据

ECB 模式下不需要 IV (初始化向量)，因此其是一个无用字段。

Example:
```
codec.Sm4ECBDecrypt("1234123412341234", "123412341234123456", nil)
```


#### 定义

`Sm4EBCDecrypt(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |   |
| i | `any` |   |
| iv | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### Sm4EBCEncrypt

#### 详细描述
Sm4ECBEncrypt 使用 SM4 算法，在 ECB 模式下，使用 PKCS#5 填充来加密数据

ECB 模式下不需要 IV (初始化向量)，因此其是一个无用字段.

Example:
```
codec.Sm4ECBEncrypt("1234123412341234", "123412341234123456", nil)
```


#### 定义

`Sm4EBCEncrypt(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |   |
| i | `any` |   |
| iv | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### Sm4ECBDecrypt

#### 详细描述
Sm4ECBDecrypt 使用 SM4 算法，在 ECB 模式下，使用 PKCS#5 填充来解密数据

ECB 模式下不需要 IV (初始化向量)，因此其是一个无用字段。

Example:
```
codec.Sm4ECBDecrypt("1234123412341234", "123412341234123456", nil)
```


#### 定义

`Sm4ECBDecrypt(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |   |
| i | `any` |   |
| iv | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### Sm4ECBEncrypt

#### 详细描述
Sm4ECBEncrypt 使用 SM4 算法，在 ECB 模式下，使用 PKCS#5 填充来加密数据

ECB 模式下不需要 IV (初始化向量)，因此其是一个无用字段.

Example:
```
codec.Sm4ECBEncrypt("1234123412341234", "123412341234123456", nil)
```


#### 定义

`Sm4ECBEncrypt(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |   |
| i | `any` |   |
| iv | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### Sm4GCMDecrypt

#### 详细描述


#### 定义

`Sm4GCMDecrypt(key []byte, data any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |   |
| data | `any` |   |
| iv | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### Sm4GCMEncrypt

#### 详细描述
	func sm4encBase(data interface{}, key []byte, iv []byte, sm4ordinary func(key, in []byte, encode bool, iv []byte) ([]byte, error)) ([]byte, error) {
		return sm4ordinary(key, interfaceToBytes(data), true, iv)
	}

	func sm4decBase(data interface{}, key []byte, iv []byte, sm4ordinary func(key, in []byte, encode bool, iv []byte) ([]byte, error)) ([]byte, error) {
		return sm4ordinary(key, interfaceToBytes(data), false, iv)
	}

	func SM4CFBEnc(key []byte, data interface{}, iv []byte) ([]byte, error) {
		return sm4encBase(data, key, iv, sm4.Sm4CFB)
	}

	func SM4CBCEnc(key []byte, data interface{}, iv []byte) ([]byte, error) {
		return sm4encBase(data, key, iv, sm4.Sm4Cbc)
	}

	func SM4ECBEnc(key []byte, data interface{}, iv []byte) ([]byte, error) {
		return sm4encBase(data, key, iv, sm4.Sm4Ecb)
	}

	func SM4OFBEnc(key []byte, data interface{}, iv []byte) ([]byte, error) {
		return sm4encBase(data, key, iv, sm4.Sm4OFB)
	}

	func SM4CFBDec(key []byte, data interface{}, iv []byte) ([]byte, error) {
		return sm4decBase(data, key, iv, sm4.Sm4CFB)
	}

	func SM4CBCDec(key []byte, data interface{}, iv []byte) ([]byte, error) {
		return sm4decBase(data, key, iv, sm4.Sm4Cbc)
	}

	func SM4ECBDec(key []byte, data interface{}, iv []byte) ([]byte, error) {
		return sm4decBase(data, key, iv, sm4.Sm4Ecb)
	}

	func SM4OFBDec(key []byte, data interface{}, iv []byte) ([]byte, error) {
		return sm4decBase(data, key, iv, sm4.Sm4OFB)
	}


#### 定义

`Sm4GCMEncrypt(key []byte, data any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |   |
| data | `any` |   |
| iv | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### Sm4OFBDecrypt

#### 详细描述
Sm4OFBDecrypt 使用 SM4 算法，在 OFB 模式下，使用 PKCS#5 填充来解密数据

OFB 模式下需要 IV (初始化向量)，若为空则会使用 key 的前 16 字节作为 IV。

Example:
```
codec.Sm4OFBDecrypt("1234123412341234", "123412341234123456", "1234123412341234")
```


#### 定义

`Sm4OFBDecrypt(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |   |
| i | `any` |   |
| iv | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### Sm4OFBEncrypt

#### 详细描述
Sm4OFBEncrypt 使用 SM4 算法，在 OFB 模式下，使用 PKCS#5 填充来加密数据

OFB 模式下需要 IV (初始化向量)，若为空则会使用 key 的前 16 字节作为 IV。

Example:
```
codec.Sm4OFBEncrypt("1234123412341234", "123412341234123456", "1234123412341234")
```


#### 定义

`Sm4OFBEncrypt(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |   |
| i | `any` |   |
| iv | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### StrconvQuote

#### 详细描述
Quote returns a double-quoted Go string literal representing s. The
returned string uses Go escape sequences (\t, \n, \xFF, \u0100) for
control characters and non-printable characters as defined by
[IsPrint].


#### 定义

`StrconvQuote(s string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### StrconvUnquote

#### 详细描述
Unquote interprets s as a single-quoted, double-quoted,
or backquoted Go string literal, returning the string value
that s quotes.  (If s is single-quoted, it would be a Go
character literal; Unquote returns the corresponding
one-character string. For an empty character literal
Unquote returns the empty string.)


#### 定义

`StrconvUnquote(s string) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


### TripleDESCBCDecrypt

#### 详细描述
TripleDESCBCDecrypt 是一个便捷函数，用于使用 Triple DES 算法，在 CBC 模式下，使用 零填充来解密数据。
它接受一个密钥（key）、需要解密的数据（data to decrypt）和一个初始化向量（iv）。
密钥的长度必须是 24 个字节（即 3 * 8 字节），并且 iv 可以是 nil 或者 8 个字节长。
如果 iv 为 nil，它将被固定为密钥，或者用零填充到 8 个字节。
TripleDESCBCDecrypt TripleDESDecrypt 是同一个函数。
example:
```
codec.TripleDESCBCDecrypt([]byte(&#34;123456789012345678901234&#34;), ciphertext, &#34;12345678&#34;)
```


#### 定义

`TripleDESCBCDecrypt(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |   |
| i | `any` |   |
| iv | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### TripleDESCBCEncrypt

#### 详细描述
TripleDESCBCEncrypt 是一个便捷函数，用于使用 Triple DES 算法，在 CBC 模式下，使用 零填充来加密数据。
它接受一个密钥（key）、需要加密的数据（data to encrypt）和一个初始化向量（iv）。
密钥的长度必须是 24 个字节（即 3 * 8 字节），并且 iv 可以是 nil 或者 8 个字节长。
如果 iv 为 nil，它将被固定为密钥.
TripleDESCBCDecrypt TripleDESEncrypt 是同一个函数。
example:
```
codec.TripleDESCBCEncrypt([]byte(&#34;123456789012345678901234&#34;), &#34;hello world&#34;, &#34;12345678&#34;)
```


#### 定义

`TripleDESCBCEncrypt(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |   |
| i | `any` |   |
| iv | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### TripleDESDecrypt

#### 详细描述
TripleDESCBCDecrypt 是一个便捷函数，用于使用 Triple DES 算法，在 CBC 模式下，使用 零填充来解密数据。
它接受一个密钥（key）、需要解密的数据（data to decrypt）和一个初始化向量（iv）。
密钥的长度必须是 24 个字节（即 3 * 8 字节），并且 iv 可以是 nil 或者 8 个字节长。
如果 iv 为 nil，它将被固定为密钥，或者用零填充到 8 个字节。
TripleDESCBCDecrypt TripleDESDecrypt 是同一个函数。
example:
```
codec.TripleDESCBCDecrypt([]byte(&#34;123456789012345678901234&#34;), ciphertext, &#34;12345678&#34;)
```


#### 定义

`TripleDESDecrypt(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |   |
| i | `any` |   |
| iv | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### TripleDESECBDecrypt

#### 详细描述
TripleDESECBDecrypt 是一个便捷函数，用于使用 Triple DES 算法，在 ECB 模式下，使用 零填充来解密数据。
它接受一个密钥（key）、需要解密的数据（data to decrypt）（ecb 模式下 iv 无用）
密钥的长度必须是 24 个字节（即 3 * 8 字节）。
example:
```
codec.TripleDESECBDecrypt([]byte(&#34;123456789012345678901234&#34;), ciphertext)
```


#### 定义

`TripleDESECBDecrypt(key []byte, data []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |   |
| data | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### TripleDESECBEncrypt

#### 详细描述
TripleDESECBEncrypt 是一个便捷函数，用于使用 Triple DES 算法，在 ECB 模式下，使用 零填充来加密数据。
它接受一个密钥（key）、需要加密的数据（data to encrypt）（ecb 模式下 iv 无用）
密钥的长度必须是 24 个字节（即 3 * 8 字节）。
example:
```
codec.TripleDESECBEncrypt([]byte(&#34;123456789012345678901234&#34;), &#34;hello world&#34;)
```


#### 定义

`TripleDESECBEncrypt(key []byte, data []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |   |
| data | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### TripleDESEncrypt

#### 详细描述
TripleDESCBCEncrypt 是一个便捷函数，用于使用 Triple DES 算法，在 CBC 模式下，使用 零填充来加密数据。
它接受一个密钥（key）、需要加密的数据（data to encrypt）和一个初始化向量（iv）。
密钥的长度必须是 24 个字节（即 3 * 8 字节），并且 iv 可以是 nil 或者 8 个字节长。
如果 iv 为 nil，它将被固定为密钥.
TripleDESCBCDecrypt TripleDESEncrypt 是同一个函数。
example:
```
codec.TripleDESCBCEncrypt([]byte(&#34;123456789012345678901234&#34;), &#34;hello world&#34;, &#34;12345678&#34;)
```


#### 定义

`TripleDESEncrypt(key []byte, i any, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |   |
| i | `any` |   |
| iv | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### UTF8ToGB18030

#### 详细描述


#### 定义

`UTF8ToGB18030(s []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### UTF8ToGBK

#### 详细描述


#### 定义

`UTF8ToGBK(s []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### UTF8ToHZGB2312

#### 详细描述


#### 定义

`UTF8ToHZGB2312(s []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### UnescapePathUrl

#### 详细描述


#### 定义

`UnescapePathUrl(s string) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


### UnescapeQueryUrl

#### 详细描述


#### 定义

`UnescapeQueryUrl(s string) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


### UnicodeDecode

#### 详细描述


#### 定义

`UnicodeDecode(i string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### UnicodeEncode

#### 详细描述


#### 定义

`UnicodeEncode(i string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### ZeroPadding

#### 详细描述


#### 定义

`ZeroPadding(origin []byte, blockSize int) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| origin | `[]byte` |   |
| blockSize | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### ZeroUnPadding

#### 详细描述


#### 定义

`ZeroUnPadding(originData []byte) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| originData | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


