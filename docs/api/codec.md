# codec

|成员函数|函数描述/介绍|
|:------|:--------|
| [codec.AESCBCDecrypt](#aescbcdecrypt) ||
| [codec.AESCBCDecryptWithPKCS7Padding](#aescbcdecryptwithpkcs7padding) ||
| [codec.AESCBCDecryptWithZeroPadding](#aescbcdecryptwithzeropadding) ||
| [codec.AESCBCEncrypt](#aescbcencrypt) ||
| [codec.AESCBCEncryptWithPKCS7Padding](#aescbcencryptwithpkcs7padding) ||
| [codec.AESCBCEncryptWithZeroPadding](#aescbcencryptwithzeropadding) ||
| [codec.AESDecrypt](#aesdecrypt) ||
| [codec.AESECBDecrypt](#aesecbdecrypt) ||
| [codec.AESECBDecryptWithPKCS7Padding](#aesecbdecryptwithpkcs7padding) ||
| [codec.AESECBDecryptWithZeroPadding](#aesecbdecryptwithzeropadding) ||
| [codec.AESECBEncrypt](#aesecbencrypt) ||
| [codec.AESECBEncryptWithPKCS7Padding](#aesecbencryptwithpkcs7padding) ||
| [codec.AESECBEncryptWithZeroPadding](#aesecbencryptwithzeropadding) ||
| [codec.AESEncrypt](#aesencrypt) ||
| [codec.AESGCMDecrypt](#aesgcmdecrypt) ||
| [codec.AESGCMDecryptWithNonceSize12](#aesgcmdecryptwithnoncesize12) ||
| [codec.AESGCMDecryptWithNonceSize16](#aesgcmdecryptwithnoncesize16) ||
| [codec.AESGCMEncrypt](#aesgcmencrypt) |//AES GCM 加密后的payload shiro 1.4.2版本更换为了AES-GCM加密方式  	func AES_GCM_Encrypt(key []byte, Content []byte) string { 		block, _ := aes.NewCipher(key) 		nonc...|
| [codec.AESGCMEncryptWithNonceSize12](#aesgcmencryptwithnoncesize12) ||
| [codec.AESGCMEncryptWithNonceSize16](#aesgcmencryptwithnoncesize16) |//AES GCM 加密后的payload shiro 1.4.2版本更换为了AES-GCM加密方式  	func AES_GCM_Encrypt(key []byte, Content []byte) string { 		block, _ := aes.NewCipher(key) 		nonc...|
| [codec.AutoDecode](#autodecode) ||
| [codec.DESCBCDecrypt](#descbcdecrypt) ||
| [codec.DESCBCEncrypt](#descbcencrypt) ||
| [codec.DESDecrypt](#desdecrypt) ||
| [codec.DESECBDecrypt](#desecbdecrypt) ||
| [codec.DESECBEncrypt](#desecbencrypt) ||
| [codec.DESEncrypt](#desencrypt) ||
| [codec.DecodeASCII](#decodeascii) |Unquote interprets s as a single-quoted, double-quoted, or backquoted Go string literal, returning the string value that s quotes.  (If s is single-qu...|
| [codec.DecodeBase32](#decodebase32) ||
| [codec.DecodeBase64](#decodebase64) ||
| [codec.DecodeBase64Url](#decodebase64url) ||
| [codec.DecodeChunked](#decodechunked) ||
| [codec.DecodeHex](#decodehex) ||
| [codec.DecodeHtml](#decodehtml) |UnescapeString unescapes entities like "&lt;" to become "&lt;". It unescapes a larger range of entities than EscapeString escapes. For example, "&aacu...|
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
| [codec.EscapeHtml](#escapehtml) |EscapeString escapes special characters like "&lt;" to become "&lt;". It escapes only five such characters: &lt;, &gt;, &, ' and ". UnescapeString(Esc...|
| [codec.EscapePathUrl](#escapepathurl) |PathEscape escapes the string so it can be safely placed inside a URL path segment, replacing special characters (including /) with %XX sequences as n...|
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
| [codec.PKCS7UnPadding](#pkcs7unpadding) ||
| [codec.RC4Decrypt](#rc4decrypt) ||
| [codec.RC4Encrypt](#rc4encrypt) ||
| [codec.RSADecryptWithOAEP](#rsadecryptwithoaep) ||
| [codec.RSADecryptWithPKCS1v15](#rsadecryptwithpkcs1v15) |DecryptWithPkcs1v15 将PEM格式的私钥与密文进行PKCS1v15解密，返回明文与错误  |
| [codec.RSAEncryptWithOAEP](#rsaencryptwithoaep) ||
| [codec.RSAEncryptWithPKCS1v15](#rsaencryptwithpkcs1v15) |EncryptWithPkcs1v15 将PEM格式的公钥与数据进行PKCS1v15加密，返回密文与错误  |
| [codec.Sha1](#sha1) ||
| [codec.Sha224](#sha224) ||
| [codec.Sha256](#sha256) ||
| [codec.Sha384](#sha384) ||
| [codec.Sha512](#sha512) ||
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
| [codec.Sm3](#sm3) ||
| [codec.Sm4CBCDecrypt](#sm4cbcdecrypt) ||
| [codec.Sm4CBCEncrypt](#sm4cbcencrypt) ||
| [codec.Sm4CFBDecrypt](#sm4cfbdecrypt) ||
| [codec.Sm4CFBEncrypt](#sm4cfbencrypt) ||
| [codec.Sm4EBCDecrypt](#sm4ebcdecrypt) ||
| [codec.Sm4EBCEncrypt](#sm4ebcencrypt) ||
| [codec.Sm4ECBDecrypt](#sm4ecbdecrypt) ||
| [codec.Sm4ECBEncrypt](#sm4ecbencrypt) ||
| [codec.Sm4GCMDecrypt](#sm4gcmdecrypt) ||
| [codec.Sm4GCMEncrypt](#sm4gcmencrypt) ||
| [codec.Sm4OFBDecrypt](#sm4ofbdecrypt) ||
| [codec.Sm4OFBEncrypt](#sm4ofbencrypt) ||
| [codec.StrconvQuote](#strconvquote) ||
| [codec.StrconvUnquote](#strconvunquote) |Unquote interprets s as a single-quoted, double-quoted, or backquoted Go string literal, returning the string value that s quotes.  (If s is single-qu...|
| [codec.TripleDESCBCDecrypt](#tripledescbcdecrypt) ||
| [codec.TripleDESCBCEncrypt](#tripledescbcencrypt) ||
| [codec.TripleDESDecrypt](#tripledesdecrypt) ||
| [codec.TripleDESECBDecrypt](#tripledesecbdecrypt) ||
| [codec.TripleDESECBEncrypt](#tripledesecbencrypt) ||
| [codec.TripleDESEncrypt](#tripledesencrypt) ||
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


#### 定义

`DESCBCDecrypt(key []byte, data []byte, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |   |
| data | `[]byte` |   |
| iv | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### DESCBCEncrypt

#### 详细描述


#### 定义

`DESCBCEncrypt(key []byte, data []byte, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |   |
| data | `[]byte` |   |
| iv | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### DESDecrypt

#### 详细描述


#### 定义

`DESDecrypt(key []byte, data []byte, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |   |
| data | `[]byte` |   |
| iv | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### DESECBDecrypt

#### 详细描述


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


#### 定义

`DESEncrypt(key []byte, data []byte, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |   |
| data | `[]byte` |   |
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
one-character string.)


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
UnescapeString unescapes entities like "&lt;" to become "&lt;". It unescapes a
larger range of entities than EscapeString escapes. For example, "&aacute;"
unescapes to "á", as does "&#225;" and "&#xE1;".
UnescapeString(EscapeString(s)) == s always holds, but the converse isn't
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

`DoubleDecodeUrl(i string) (string , error )`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| string | `` |   |
| error | `` |   |


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
EscapeString escapes special characters like "&lt;" to become "&lt;". It
escapes only five such characters: &lt;, &gt;, &, ' and ".
UnescapeString(EscapeString(s)) == s always holds, but the converse isn't
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
PathEscape escapes the string so it can be safely placed inside a URL path segment,
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


#### 定义

`RSADecryptWithOAEP(pemPriBytes []byte, data any) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pemPriBytes | `[]byte` |   |
| data | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### RSADecryptWithPKCS1v15

#### 详细描述
DecryptWithPkcs1v15 将PEM格式的私钥与密文进行PKCS1v15解密，返回明文与错误

Example:
```
dec, err := tls.DecryptWithPkcs1v15(pemBytes, enc)
```


#### 定义

`RSADecryptWithPKCS1v15(pemPriBytes []byte, data any) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pemPriBytes | `[]byte` |   |
| data | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### RSAEncryptWithOAEP

#### 详细描述


#### 定义

`RSAEncryptWithOAEP(pemBytes []byte, data any) ([]byte, error)`

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


### RSAEncryptWithPKCS1v15

#### 详细描述
EncryptWithPkcs1v15 将PEM格式的公钥与数据进行PKCS1v15加密，返回密文与错误

Example:
```
enc, err := tls.EncryptWithPkcs1v15(pemBytes, "hello")
```


#### 定义

`RSAEncryptWithPKCS1v15(pemBytes []byte, data any) ([]byte, error)`

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


#### 定义

`Sm4CBCDecrypt(key []byte, data any, iv []byte) ([]byte, error)`

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


### Sm4CBCEncrypt

#### 详细描述


#### 定义

`Sm4CBCEncrypt(key []byte, data any, iv []byte) ([]byte, error)`

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


### Sm4CFBDecrypt

#### 详细描述


#### 定义

`Sm4CFBDecrypt(key []byte, data any, iv []byte) ([]byte, error)`

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


### Sm4CFBEncrypt

#### 详细描述


#### 定义

`Sm4CFBEncrypt(key []byte, data any, iv []byte) ([]byte, error)`

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


### Sm4EBCDecrypt

#### 详细描述


#### 定义

`Sm4EBCDecrypt(key []byte, data any, iv []byte) ([]byte, error)`

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


### Sm4EBCEncrypt

#### 详细描述


#### 定义

`Sm4EBCEncrypt(key []byte, data any, iv []byte) ([]byte, error)`

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


### Sm4ECBDecrypt

#### 详细描述


#### 定义

`Sm4ECBDecrypt(key []byte, data any, iv []byte) ([]byte, error)`

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


### Sm4ECBEncrypt

#### 详细描述


#### 定义

`Sm4ECBEncrypt(key []byte, data any, iv []byte) ([]byte, error)`

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


#### 定义

`Sm4OFBDecrypt(key []byte, data any, iv []byte) ([]byte, error)`

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


### Sm4OFBEncrypt

#### 详细描述


#### 定义

`Sm4OFBEncrypt(key []byte, data any, iv []byte) ([]byte, error)`

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


### StrconvQuote

#### 详细描述


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
one-character string.)


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


#### 定义

`TripleDESCBCDecrypt(key []byte, data []byte, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |   |
| data | `[]byte` |   |
| iv | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### TripleDESCBCEncrypt

#### 详细描述


#### 定义

`TripleDESCBCEncrypt(key []byte, data []byte, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |   |
| data | `[]byte` |   |
| iv | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### TripleDESDecrypt

#### 详细描述


#### 定义

`TripleDESDecrypt(key []byte, data []byte, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |   |
| data | `[]byte` |   |
| iv | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### TripleDESECBDecrypt

#### 详细描述


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


#### 定义

`TripleDESEncrypt(key []byte, data []byte, iv []byte) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` |   |
| data | `[]byte` |   |
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


