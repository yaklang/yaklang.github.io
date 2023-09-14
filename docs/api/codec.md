# codec

|成员函数|函数描述/介绍|
|:------|:--------|
| [codec.AESCBCDecrypt](#AESCBCDecrypt) ||
| [codec.AESCBCDecryptWithPKCS7Padding](#AESCBCDecryptWithPKCS7Padding) ||
| [codec.AESCBCDecryptWithZeroPadding](#AESCBCDecryptWithZeroPadding) ||
| [codec.AESCBCEncrypt](#AESCBCEncrypt) ||
| [codec.AESCBCEncryptWithPKCS7Padding](#AESCBCEncryptWithPKCS7Padding) ||
| [codec.AESCBCEncryptWithZeroPadding](#AESCBCEncryptWithZeroPadding) ||
| [codec.AESDecrypt](#AESDecrypt) ||
| [codec.AESECBDecrypt](#AESECBDecrypt) ||
| [codec.AESECBDecryptWithPKCS7Padding](#AESECBDecryptWithPKCS7Padding) ||
| [codec.AESECBDecryptWithZeroPadding](#AESECBDecryptWithZeroPadding) ||
| [codec.AESECBEncrypt](#AESECBEncrypt) ||
| [codec.AESECBEncryptWithPKCS7Padding](#AESECBEncryptWithPKCS7Padding) ||
| [codec.AESECBEncryptWithZeroPadding](#AESECBEncryptWithZeroPadding) ||
| [codec.AESEncrypt](#AESEncrypt) ||
| [codec.AESGCMDecrypt](#AESGCMDecrypt) ||
| [codec.AESGCMDecryptWithNonceSize12](#AESGCMDecryptWithNonceSize12) ||
| [codec.AESGCMDecryptWithNonceSize16](#AESGCMDecryptWithNonceSize16) ||
| [codec.AESGCMEncrypt](#AESGCMEncrypt) |//AES GCM 加密后的payload shiro 1.4.2版本更换为了AES-GCM加密方式	func AES_GCM_Encrypt(key []byte, Content []byte) string {		block, _ := aes.NewCipher(key)		nonce := make([]byte, 16)		io.ReadFull(rand.Reader, nonce)		aesgcm, _ := cipher.NewGCMWithNonceSize(block, 16)		ciphertext := aesgcm.Seal(nil, nonce, Content, nil)		return base64.StdEncoding.EncodeToString(append(nonce, ciphertext...))	}|
| [codec.AESGCMEncryptWithNonceSize12](#AESGCMEncryptWithNonceSize12) ||
| [codec.AESGCMEncryptWithNonceSize16](#AESGCMEncryptWithNonceSize16) |//AES GCM 加密后的payload shiro 1.4.2版本更换为了AES-GCM加密方式	func AES_GCM_Encrypt(key []byte, Content []byte) string {		block, _ := aes.NewCipher(key)		nonce := make([]byte, 16)		io.ReadFull(rand.Reader, nonce)		aesgcm, _ := cipher.NewGCMWithNonceSize(block, 16)		ciphertext := aesgcm.Seal(nil, nonce, Content, nil)		return base64.StdEncoding.EncodeToString(append(nonce, ciphertext...))	}|
| [codec.AutoDecode](#AutoDecode) ||
| [codec.DESCBCDecrypt](#DESCBCDecrypt) ||
| [codec.DESCBCEncrypt](#DESCBCEncrypt) ||
| [codec.DESDecrypt](#DESDecrypt) ||
| [codec.DESECBDecrypt](#DESECBDecrypt) ||
| [codec.DESECBEncrypt](#DESECBEncrypt) ||
| [codec.DESEncrypt](#DESEncrypt) ||
| [codec.DecodeASCII](#DecodeASCII) |Unquote interprets s as a single-quoted, double-quoted,or backquoted Go string literal, returning the string valuethat s quotes.  (If s is single-quoted, it would be a Gocharacter literal; Unquote returns the correspondingone-character string.)|
| [codec.DecodeBase32](#DecodeBase32) ||
| [codec.DecodeBase64](#DecodeBase64) ||
| [codec.DecodeBase64Url](#DecodeBase64Url) ||
| [codec.DecodeChunked](#DecodeChunked) ||
| [codec.DecodeHex](#DecodeHex) ||
| [codec.DecodeHtml](#DecodeHtml) |UnescapeString unescapes entities like "&lt;" to become "<". It unescapes alarger range of entities than EscapeString escapes. For example, "&aacute;"unescapes to "á", as does "&#225;" and "&#xE1;".UnescapeString(EscapeString(s)) == s always holds, but the converse isn'talways true.|
| [codec.DecodeUrl](#DecodeUrl) |QueryUnescape does the inverse transformation of QueryEscape,converting each 3-byte encoded substring of the form "%AB" into thehex-decoded byte 0xAB.It returns an error if any % is not followed by two hexadecimaldigits.|
| [codec.DoubleDecodeUrl](#DoubleDecodeUrl) ||
| [codec.DoubleEncodeUrl](#DoubleEncodeUrl) ||
| [codec.EncodeASCII](#EncodeASCII) ||
| [codec.EncodeBase32](#EncodeBase32) ||
| [codec.EncodeBase64](#EncodeBase64) ||
| [codec.EncodeBase64Url](#EncodeBase64Url) ||
| [codec.EncodeChunked](#EncodeChunked) ||
| [codec.EncodeHtml](#EncodeHtml) ||
| [codec.EncodeHtmlHex](#EncodeHtmlHex) ||
| [codec.EncodeToHex](#EncodeToHex) ||
| [codec.EncodeToPrintable](#EncodeToPrintable) ||
| [codec.EncodeUrl](#EncodeUrl) ||
| [codec.EscapeHtml](#EscapeHtml) |EscapeString escapes special characters like "<" to become "&lt;". Itescapes only five such characters: <, >, &, ' and ".UnescapeString(EscapeString(s)) == s always holds, but the converse isn'talways true.|
| [codec.EscapePathUrl](#EscapePathUrl) |PathEscape escapes the string so it can be safely placed inside a URL path segment,replacing special characters (including /) with %XX sequences as needed.|
| [codec.EscapeQueryUrl](#EscapeQueryUrl) |QueryEscape escapes the string so it can be safely placedinside a URL query.|
| [codec.FixUTF8](#FixUTF8) ||
| [codec.GB18030ToUTF8](#GB18030ToUTF8) ||
| [codec.GBKSafe](#GBKSafe) ||
| [codec.GBKToUTF8](#GBKToUTF8) ||
| [codec.HTMLChardet](#HTMLChardet) ||
| [codec.HTMLChardetBest](#HTMLChardetBest) ||
| [codec.HZGB2312ToUTF8](#HZGB2312ToUTF8) ||
| [codec.HmacMD5](#HmacMD5) ||
| [codec.HmacSM3](#HmacSM3) ||
| [codec.HmacSha1](#HmacSha1) ||
| [codec.HmacSha256](#HmacSha256) ||
| [codec.HmacSha512](#HmacSha512) ||
| [codec.MMH3Hash128](#MMH3Hash128) ||
| [codec.MMH3Hash128x64](#MMH3Hash128x64) ||
| [codec.MMH3Hash32](#MMH3Hash32) ||
| [codec.Md5](#Md5) ||
| [codec.PKCS5Padding](#PKCS5Padding) ||
| [codec.PKCS5UnPadding](#PKCS5UnPadding) ||
| [codec.PKCS7Padding](#PKCS7Padding) ||
| [codec.PKCS7UnPadding](#PKCS7UnPadding) ||
| [codec.RC4Decrypt](#RC4Decrypt) ||
| [codec.RC4Encrypt](#RC4Encrypt) ||
| [codec.RSADecryptWithOAEP](#RSADecryptWithOAEP) ||
| [codec.RSADecryptWithPKCS1v15](#RSADecryptWithPKCS1v15) ||
| [codec.RSAEncryptWithOAEP](#RSAEncryptWithOAEP) ||
| [codec.RSAEncryptWithPKCS1v15](#RSAEncryptWithPKCS1v15) ||
| [codec.Sha1](#Sha1) ||
| [codec.Sha224](#Sha224) ||
| [codec.Sha256](#Sha256) ||
| [codec.Sha384](#Sha384) ||
| [codec.Sha512](#Sha512) ||
| [codec.Sm2DecryptAsn1](#Sm2DecryptAsn1) ||
| [codec.Sm2DecryptAsn1WithPassword](#Sm2DecryptAsn1WithPassword) ||
| [codec.Sm2DecryptC1C2C3](#Sm2DecryptC1C2C3) ||
| [codec.Sm2DecryptC1C2C3WithPassword](#Sm2DecryptC1C2C3WithPassword) ||
| [codec.Sm2DecryptC1C3C2](#Sm2DecryptC1C3C2) ||
| [codec.Sm2DecryptC1C3C2WithPassword](#Sm2DecryptC1C3C2WithPassword) ||
| [codec.Sm2EncryptAsn1](#Sm2EncryptAsn1) ||
| [codec.Sm2EncryptC1C2C3](#Sm2EncryptC1C2C3) ||
| [codec.Sm2EncryptC1C3C2](#Sm2EncryptC1C3C2) ||
| [codec.Sm2GenerateHexKeyPair](#Sm2GenerateHexKeyPair) ||
| [codec.Sm2GeneratePemKeyPair](#Sm2GeneratePemKeyPair) ||
| [codec.Sm3](#Sm3) ||
| [codec.Sm4CBCDecrypt](#Sm4CBCDecrypt) ||
| [codec.Sm4CBCEncrypt](#Sm4CBCEncrypt) ||
| [codec.Sm4CFBDecrypt](#Sm4CFBDecrypt) ||
| [codec.Sm4CFBEncrypt](#Sm4CFBEncrypt) ||
| [codec.Sm4EBCDecrypt](#Sm4EBCDecrypt) ||
| [codec.Sm4EBCEncrypt](#Sm4EBCEncrypt) ||
| [codec.Sm4ECBDecrypt](#Sm4ECBDecrypt) ||
| [codec.Sm4ECBEncrypt](#Sm4ECBEncrypt) ||
| [codec.Sm4GCMDecrypt](#Sm4GCMDecrypt) ||
| [codec.Sm4GCMEncrypt](#Sm4GCMEncrypt) ||
| [codec.Sm4OFBDecrypt](#Sm4OFBDecrypt) ||
| [codec.Sm4OFBEncrypt](#Sm4OFBEncrypt) ||
| [codec.StrconvQuote](#StrconvQuote) ||
| [codec.StrconvUnquote](#StrconvUnquote) |Unquote interprets s as a single-quoted, double-quoted,or backquoted Go string literal, returning the string valuethat s quotes.  (If s is single-quoted, it would be a Gocharacter literal; Unquote returns the correspondingone-character string.)|
| [codec.TripleDESCBCDecrypt](#TripleDESCBCDecrypt) ||
| [codec.TripleDESCBCEncrypt](#TripleDESCBCEncrypt) ||
| [codec.TripleDESDecrypt](#TripleDESDecrypt) ||
| [codec.TripleDESECBDecrypt](#TripleDESECBDecrypt) ||
| [codec.TripleDESECBEncrypt](#TripleDESECBEncrypt) ||
| [codec.TripleDESEncrypt](#TripleDESEncrypt) ||
| [codec.UTF8ToGB18030](#UTF8ToGB18030) ||
| [codec.UTF8ToGBK](#UTF8ToGBK) ||
| [codec.UTF8ToHZGB2312](#UTF8ToHZGB2312) ||
| [codec.UnescapePathUrl](#UnescapePathUrl) |PathUnescape does the inverse transformation of PathEscape,converting each 3-byte encoded substring of the form "%AB" into thehex-decoded byte 0xAB. It returns an error if any % is not followedby two hexadecimal digits.PathUnescape is identical to QueryUnescape except that it does notunescape '+' to ' ' (space).|
| [codec.UnescapeQueryUrl](#UnescapeQueryUrl) |QueryUnescape does the inverse transformation of QueryEscape,converting each 3-byte encoded substring of the form "%AB" into thehex-decoded byte 0xAB.It returns an error if any % is not followed by two hexadecimaldigits.|
| [codec.UnicodeDecode](#UnicodeDecode) ||
| [codec.UnicodeEncode](#UnicodeEncode) ||
| [codec.ZeroPadding](#ZeroPadding) ||
| [codec.ZeroUnPadding](#ZeroUnPadding) ||


## 函数定义
### codec.AESCBCDecrypt

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


### codec.AESCBCDecryptWithPKCS7Padding

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


### codec.AESCBCDecryptWithZeroPadding

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


### codec.AESCBCEncrypt

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


### codec.AESCBCEncryptWithPKCS7Padding

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


### codec.AESCBCEncryptWithZeroPadding

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


### codec.AESDecrypt

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


### codec.AESECBDecrypt

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


### codec.AESECBDecryptWithPKCS7Padding

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


### codec.AESECBDecryptWithZeroPadding

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


### codec.AESECBEncrypt

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


### codec.AESECBEncryptWithPKCS7Padding

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


### codec.AESECBEncryptWithZeroPadding

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


### codec.AESEncrypt

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


### codec.AESGCMDecrypt

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


### codec.AESGCMDecryptWithNonceSize12

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


### codec.AESGCMDecryptWithNonceSize16

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


### codec.AESGCMEncrypt

#### 详细描述
//AES GCM 加密后的payload shiro 1.4.2版本更换为了AES-GCM加密方式	func AES_GCM_Encrypt(key []byte, Content []byte) string {		block, _ := aes.NewCipher(key)		nonce := make([]byte, 16)		io.ReadFull(rand.Reader, nonce)		aesgcm, _ := cipher.NewGCMWithNonceSize(block, 16)		ciphertext := aesgcm.Seal(nil, nonce, Content, nil)		return base64.StdEncoding.EncodeToString(append(nonce, ciphertext...))	}

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


### codec.AESGCMEncryptWithNonceSize12

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


### codec.AESGCMEncryptWithNonceSize16

#### 详细描述
//AES GCM 加密后的payload shiro 1.4.2版本更换为了AES-GCM加密方式	func AES_GCM_Encrypt(key []byte, Content []byte) string {		block, _ := aes.NewCipher(key)		nonce := make([]byte, 16)		io.ReadFull(rand.Reader, nonce)		aesgcm, _ := cipher.NewGCMWithNonceSize(block, 16)		ciphertext := aesgcm.Seal(nil, nonce, Content, nil)		return base64.StdEncoding.EncodeToString(append(nonce, ciphertext...))	}

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


### codec.AutoDecode

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


### codec.DESCBCDecrypt

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


### codec.DESCBCEncrypt

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


### codec.DESDecrypt

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


### codec.DESECBDecrypt

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


### codec.DESECBEncrypt

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


### codec.DESEncrypt

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


### codec.DecodeASCII

#### 详细描述
Unquote interprets s as a single-quoted, double-quoted,or backquoted Go string literal, returning the string valuethat s quotes.  (If s is single-quoted, it would be a Gocharacter literal; Unquote returns the correspondingone-character string.)

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


### codec.DecodeBase32

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


### codec.DecodeBase64

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


### codec.DecodeBase64Url

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


### codec.DecodeChunked

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


### codec.DecodeHex

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


### codec.DecodeHtml

#### 详细描述
UnescapeString unescapes entities like "&lt;" to become "<". It unescapes alarger range of entities than EscapeString escapes. For example, "&aacute;"unescapes to "á", as does "&#225;" and "&#xE1;".UnescapeString(EscapeString(s)) == s always holds, but the converse isn'talways true.

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


### codec.DecodeUrl

#### 详细描述
QueryUnescape does the inverse transformation of QueryEscape,converting each 3-byte encoded substring of the form "%AB" into thehex-decoded byte 0xAB.It returns an error if any % is not followed by two hexadecimaldigits.

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


### codec.DoubleDecodeUrl

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


### codec.DoubleEncodeUrl

#### 详细描述


#### 定义

`DoubleEncodeUrl(i interface) (i interface)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `interface` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| i | `interface` |   |


### codec.EncodeASCII

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


### codec.EncodeBase32

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


### codec.EncodeBase64

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


### codec.EncodeBase64Url

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


### codec.EncodeChunked

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


### codec.EncodeHtml

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


### codec.EncodeHtmlHex

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


### codec.EncodeToHex

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


### codec.EncodeToPrintable

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


### codec.EncodeUrl

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


### codec.EscapeHtml

#### 详细描述
EscapeString escapes special characters like "<" to become "&lt;". Itescapes only five such characters: <, >, &, ' and ".UnescapeString(EscapeString(s)) == s always holds, but the converse isn'talways true.

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


### codec.EscapePathUrl

#### 详细描述
PathEscape escapes the string so it can be safely placed inside a URL path segment,replacing special characters (including /) with %XX sequences as needed.

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


### codec.EscapeQueryUrl

#### 详细描述
QueryEscape escapes the string so it can be safely placedinside a URL query.

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


### codec.FixUTF8

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


### codec.GB18030ToUTF8

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


### codec.GBKSafe

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


### codec.GBKToUTF8

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


### codec.HTMLChardet

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


### codec.HTMLChardetBest

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


### codec.HZGB2312ToUTF8

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


### codec.HmacMD5

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


### codec.HmacSM3

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


### codec.HmacSha1

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


### codec.HmacSha256

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


### codec.HmacSha512

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


### codec.MMH3Hash128

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


### codec.MMH3Hash128x64

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


### codec.MMH3Hash32

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


### codec.Md5

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


### codec.PKCS5Padding

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


### codec.PKCS5UnPadding

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


### codec.PKCS7Padding

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


### codec.PKCS7UnPadding

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


### codec.RC4Decrypt

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


### codec.RC4Encrypt

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


### codec.RSADecryptWithOAEP

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


### codec.RSADecryptWithPKCS1v15

#### 详细描述


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


### codec.RSAEncryptWithOAEP

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


### codec.RSAEncryptWithPKCS1v15

#### 详细描述


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


### codec.Sha1

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


### codec.Sha224

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


### codec.Sha256

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


### codec.Sha384

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


### codec.Sha512

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


### codec.Sm2DecryptAsn1

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


### codec.Sm2DecryptAsn1WithPassword

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


### codec.Sm2DecryptC1C2C3

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


### codec.Sm2DecryptC1C2C3WithPassword

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


### codec.Sm2DecryptC1C3C2

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


### codec.Sm2DecryptC1C3C2WithPassword

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


### codec.Sm2EncryptAsn1

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


### codec.Sm2EncryptC1C2C3

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


### codec.Sm2EncryptC1C3C2

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


### codec.Sm2GenerateHexKeyPair

#### 详细描述


#### 定义

`Sm2GenerateHexKeyPair() ([]byte, []byte, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `[]byte` |   |
| r3 | `error` |   |


### codec.Sm2GeneratePemKeyPair

#### 详细描述


#### 定义

`Sm2GeneratePemKeyPair() ([]byte, []byte, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `[]byte` |   |
| r3 | `error` |   |


### codec.Sm3

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


### codec.Sm4CBCDecrypt

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


### codec.Sm4CBCEncrypt

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


### codec.Sm4CFBDecrypt

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


### codec.Sm4CFBEncrypt

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


### codec.Sm4EBCDecrypt

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


### codec.Sm4EBCEncrypt

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


### codec.Sm4ECBDecrypt

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


### codec.Sm4ECBEncrypt

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


### codec.Sm4GCMDecrypt

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


### codec.Sm4GCMEncrypt

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


### codec.Sm4OFBDecrypt

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


### codec.Sm4OFBEncrypt

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


### codec.StrconvQuote

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


### codec.StrconvUnquote

#### 详细描述
Unquote interprets s as a single-quoted, double-quoted,or backquoted Go string literal, returning the string valuethat s quotes.  (If s is single-quoted, it would be a Gocharacter literal; Unquote returns the correspondingone-character string.)

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


### codec.TripleDESCBCDecrypt

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


### codec.TripleDESCBCEncrypt

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


### codec.TripleDESDecrypt

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


### codec.TripleDESECBDecrypt

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


### codec.TripleDESECBEncrypt

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


### codec.TripleDESEncrypt

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


### codec.UTF8ToGB18030

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


### codec.UTF8ToGBK

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


### codec.UTF8ToHZGB2312

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


### codec.UnescapePathUrl

#### 详细描述
PathUnescape does the inverse transformation of PathEscape,converting each 3-byte encoded substring of the form "%AB" into thehex-decoded byte 0xAB. It returns an error if any % is not followedby two hexadecimal digits.PathUnescape is identical to QueryUnescape except that it does notunescape '+' to ' ' (space).

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


### codec.UnescapeQueryUrl

#### 详细描述
QueryUnescape does the inverse transformation of QueryEscape,converting each 3-byte encoded substring of the form "%AB" into thehex-decoded byte 0xAB.It returns an error if any % is not followed by two hexadecimaldigits.

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


### codec.UnicodeDecode

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


### codec.UnicodeEncode

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


### codec.ZeroPadding

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


### codec.ZeroUnPadding

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


