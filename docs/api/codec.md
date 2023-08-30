# codec


|成员函数|函数描述/介绍|
|:------|:--------|
 | [codec.AESCBCDecrypt](#codecaescbcdecrypt) | aes cbc 解密 |
 | [codec.AESCBCDecryptWithPKCS7Padding](#codecaescbcdecryptwithpkcs7padding) |  |
 | [codec.AESCBCDecryptWithZeroPadding](#codecaescbcdecryptwithzeropadding) |  |
 | [codec.AESCBCEncrypt](#codecaescbcencrypt) | aes cbc 加密 |
 | [codec.AESCBCEncryptWithPKCS7Padding](#codecaescbcencryptwithpkcs7padding) |  |
 | [codec.AESCBCEncryptWithZeroPadding](#codecaescbcencryptwithzeropadding) |  |
 | [codec.AESDecrypt](#codecaesdecrypt) | aes 解密 |
 | [codec.AESECBDecrypt](#codecaesecbdecrypt) |  |
 | [codec.AESECBDecryptWithPKCS7Padding](#codecaesecbdecryptwithpkcs7padding) |  |
 | [codec.AESECBDecryptWithZeroPadding](#codecaesecbdecryptwithzeropadding) |  |
 | [codec.AESECBEncrypt](#codecaesecbencrypt) |  |
 | [codec.AESECBEncryptWithPKCS7Padding](#codecaesecbencryptwithpkcs7padding) |  |
 | [codec.AESECBEncryptWithZeroPadding](#codecaesecbencryptwithzeropadding) |  |
 | [codec.AESEncrypt](#codecaesencrypt) | aes cbc 加密 |
 | [codec.AESGCMDecrypt](#codecaesgcmdecrypt) | aes gcm 解密 |
 | [codec.AESGCMDecryptWithNonceSize12](#codecaesgcmdecryptwithnoncesize12) |  |
 | [codec.AESGCMDecryptWithNonceSize16](#codecaesgcmdecryptwithnoncesize16) |  |
 | [codec.AESGCMEncrypt](#codecaesgcmencrypt) | aes gcm 加密 |
 | [codec.AESGCMEncryptWithNonceSize12](#codecaesgcmencryptwithnoncesize12) |  |
 | [codec.AESGCMEncryptWithNonceSize16](#codecaesgcmencryptwithnoncesize16) |  |
 | [codec.AutoDecode](#codecautodecode) |  |
 | [codec.DESCBCDecrypt](#codecdescbcdecrypt) |  |
 | [codec.DESCBCEncrypt](#codecdescbcencrypt) |  |
 | [codec.DESDecrypt](#codecdesdecrypt) | DES 解密（默认CBC） |
 | [codec.DESECBDecrypt](#codecdesecbdecrypt) |  |
 | [codec.DESECBEncrypt](#codecdesecbencrypt) |  |
 | [codec.DESEncrypt](#codecdesencrypt) | DES 加密，默认 CBC 模式 |
 | [codec.DecodeASCII](#codecdecodeascii) | 等价于 `strconv.Unquote`，把一个被 `&#34;` 包裹的字符串解析成字符串内容，同时解析 `&#34;\x0a&#34;` 解析成对应的字符串。 |
 | [codec.DecodeBase32](#codecdecodebase32) |  |
 | [codec.DecodeBase64](#codecdecodebase64) | 把 base64 解析成 bytes |
 | [codec.DecodeBase64Url](#codecdecodebase64url) |  |
 | [codec.DecodeChunked](#codecdecodechunked) | http chunked 解码 |
 | [codec.DecodeHex](#codecdecodehex) | 把 Hex 字符串解析成 bytes |
 | [codec.DecodeHtml](#codecdecodehtml) | 把 HTML 实体编码后的文字进行解析，例如 `&amp;#x0a;` 或 `&amp;#amp;` 等，如果包含正常字符串，则会保留原字符串 |
 | [codec.DecodeUrl](#codecdecodeurl) | 把 `%21%63%57asdf` 这类的字符串中的 URL 编码解析成正常字符 |
 | [codec.DoubleDecodeUrl](#codecdoubledecodeurl) | 双重 URL 解码，例如 `%2564%2567` 会解析成 `dg` |
 | [codec.DoubleEncodeUrl](#codecdoubleencodeurl) |  |
 | [codec.EncodeASCII](#codecencodeascii) | 通常用于把不可见字符串变成可见字符串，把一个字符串变成双引号`&#34;`包裹的字符串，字符串中的不可见字符会变成 `\xAA\x0A` 这类被转义的内容 |
 | [codec.EncodeBase32](#codecencodebase32) |  |
 | [codec.EncodeBase64](#codecencodebase64) | 把一个对象编码成 base64 字符串 |
 | [codec.EncodeBase64Url](#codecencodebase64url) |  |
 | [codec.EncodeChunked](#codecencodechunked) | 增加 chunked 编码 |
 | [codec.EncodeHtml](#codecencodehtml) | 把一个字符串编码成 HTML 实体编码，如果输入了一个对象，会 json 序列化后再编码，注意这个函数会把所有内容都进行编码 |
 | [codec.EncodeHtmlHex](#codecencodehtmlhex) | 把一个字符串编码成 HTML 实体编码，如果输入了一个对象，会序列化后再对 bytes 进行编码，注意这个函数会把参数所有内容都进行编码，编码成 `&amp;#xNN;` 这种形式 |
 | [codec.EncodeToHex](#codecencodetohex) | 把一个对象编码成 hex 字符串，注意：不以 `0x` 开头 |
 | [codec.EncodeToPrintable](#codecencodetoprintable) | 等价于 `codec.EncodeASCII` |
 | [codec.EncodeUrl](#codecencodeurl) | 把一个对象进行 URL 编码 |
 | [codec.EscapeHtml](#codecescapehtml) | 同 `codec.DecodeHtml` |
 | [codec.EscapePathUrl](#codecescapepathurl) | URL 编码：（作为 url.Path 进行编码） |
 | [codec.EscapeQueryUrl](#codecescapequeryurl) | URL 编码：作为 url.Query 进行编码 |
 | [codec.FixUTF8](#codecfixutf8) | 修复 Bytes 到 UTF8，会把不合理的 UTF8 字符转义 |
 | [codec.GB18030ToUTF8](#codecgb18030toutf8) |  |
 | [codec.GBKSafe](#codecgbksafe) | 尝试修复 GBK |
 | [codec.GBKToUTF8](#codecgbktoutf8) |  |
 | [codec.HTMLChardet](#codechtmlchardet) | 检测 HTML 的字符集 |
 | [codec.HTMLChardetBest](#codechtmlchardetbest) | 检测 HTML 的字符集，只展示最有可能的结果 |
 | [codec.HZGB2312ToUTF8](#codechzgb2312toutf8) |  |
 | [codec.HmacMD5](#codechmacmd5) |  |
 | [codec.HmacSM3](#codechmacsm3) |  |
 | [codec.HmacSha1](#codechmacsha1) |  |
 | [codec.HmacSha256](#codechmacsha256) |  |
 | [codec.HmacSha512](#codechmacsha512) |  |
 | [codec.MMH3Hash128](#codecmmh3hash128) | 计算一个对象的 mmh3 hash128 |
 | [codec.MMH3Hash128x64](#codecmmh3hash128x64) | 计算一个对象的 mmh3 hash128x64 |
 | [codec.MMH3Hash32](#codecmmh3hash32) |  |
 | [codec.Md5](#codecmd5) | 计算 md5 hash |
 | [codec.PKCS5Padding](#codecpkcs5padding) | pkcs5 填充 |
 | [codec.PKCS5UnPadding](#codecpkcs5unpadding) | pkcs5 解码 |
 | [codec.PKCS7Padding](#codecpkcs7padding) | pkcs7 编码 |
 | [codec.PKCS7UnPadding](#codecpkcs7unpadding) | pkcs7 解码 |
 | [codec.RC4Decrypt](#codecrc4decrypt) |  |
 | [codec.RC4Encrypt](#codecrc4encrypt) |  |
 | [codec.RSADecryptWithOAEP](#codecrsadecryptwithoaep) |  |
 | [codec.RSADecryptWithPKCS1v15](#codecrsadecryptwithpkcs1v15) |  |
 | [codec.RSAEncryptWithOAEP](#codecrsaencryptwithoaep) |  |
 | [codec.RSAEncryptWithPKCS1v15](#codecrsaencryptwithpkcs1v15) |  |
 | [codec.Sha1](#codecsha1) | 计算 sha1 hash |
 | [codec.Sha224](#codecsha224) |  |
 | [codec.Sha256](#codecsha256) |  |
 | [codec.Sha384](#codecsha384) |  |
 | [codec.Sha512](#codecsha512) |  |
 | [codec.Sm2DecryptAsn1](#codecsm2decryptasn1) |  |
 | [codec.Sm2DecryptAsn1WithPassword](#codecsm2decryptasn1withpassword) |  |
 | [codec.Sm2DecryptC1C2C3](#codecsm2decryptc1c2c3) |  |
 | [codec.Sm2DecryptC1C2C3WithPassword](#codecsm2decryptc1c2c3withpassword) |  |
 | [codec.Sm2DecryptC1C3C2](#codecsm2decryptc1c3c2) |  |
 | [codec.Sm2DecryptC1C3C2WithPassword](#codecsm2decryptc1c3c2withpassword) |  |
 | [codec.Sm2EncryptAsn1](#codecsm2encryptasn1) |  |
 | [codec.Sm2EncryptC1C2C3](#codecsm2encryptc1c2c3) |  |
 | [codec.Sm2EncryptC1C3C2](#codecsm2encryptc1c3c2) |  |
 | [codec.Sm2GenerateHexKeyPair](#codecsm2generatehexkeypair) |  |
 | [codec.Sm2GeneratePemKeyPair](#codecsm2generatepemkeypair) |  |
 | [codec.Sm3](#codecsm3) | SM3 计算 Hash |
 | [codec.Sm4CBCDecrypt](#codecsm4cbcdecrypt) | 国密4 CBC 解密 |
 | [codec.Sm4CBCEncrypt](#codecsm4cbcencrypt) | 国密4 cbc 加密 |
 | [codec.Sm4CFBDecrypt](#codecsm4cfbdecrypt) | 国密4 CFB 解密 |
 | [codec.Sm4CFBEncrypt](#codecsm4cfbencrypt) | 国密4 cfb 加密 |
 | [codec.Sm4EBCDecrypt](#codecsm4ebcdecrypt) | 国密4 EBC 解密 |
 | [codec.Sm4EBCEncrypt](#codecsm4ebcencrypt) | 国密4 EBC 加密 |
 | [codec.Sm4ECBDecrypt](#codecsm4ecbdecrypt) |  |
 | [codec.Sm4ECBEncrypt](#codecsm4ecbencrypt) |  |
 | [codec.Sm4GCMDecrypt](#codecsm4gcmdecrypt) | 国密4 gcm 解密 |
 | [codec.Sm4GCMEncrypt](#codecsm4gcmencrypt) | SM4 GCM 加密 |
 | [codec.Sm4OFBDecrypt](#codecsm4ofbdecrypt) | SM4 OFB 解密 |
 | [codec.Sm4OFBEncrypt](#codecsm4ofbencrypt) | SM4 OBF 加密 |
 | [codec.StrconvQuote](#codecstrconvquote) |  |
 | [codec.StrconvUnquote](#codecstrconvunquote) |  |
 | [codec.TripleDESCBCDecrypt](#codectripledescbcdecrypt) |  |
 | [codec.TripleDESCBCEncrypt](#codectripledescbcencrypt) |  |
 | [codec.TripleDESDecrypt](#codectripledesdecrypt) |  |
 | [codec.TripleDESECBDecrypt](#codectripledesecbdecrypt) |  |
 | [codec.TripleDESECBEncrypt](#codectripledesecbencrypt) |  |
 | [codec.TripleDESEncrypt](#codectripledesencrypt) |  |
 | [codec.UTF8ToGB18030](#codecutf8togb18030) |  |
 | [codec.UTF8ToGBK](#codecutf8togbk) |  |
 | [codec.UTF8ToHZGB2312](#codecutf8tohzgb2312) |  |
 | [codec.UnescapePathUrl](#codecunescapepathurl) | 作为 url.Path 进行 URL 解码 |
 | [codec.UnescapeQueryUrl](#codecunescapequeryurl) | 作为 url.Query 进行 URL 解码 |
 | [codec.UnicodeDecode](#codecunicodedecode) |  |
 | [codec.UnicodeEncode](#codecunicodeencode) |  |
 | [codec.ZeroPadding](#codeczeropadding) | 零填充 |
 | [codec.ZeroUnPadding](#codeczerounpadding) | 移除 0 填充的末尾 |




 



## 函数定义

### codec.AESCBCDecrypt

aes cbc 解密

#### 详细描述



#### 定义：

`AESCBCDecrypt(key []byte, i any, iv []byte) ([]byte, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `bytes` |   |
| data | `any` |   |
| iv | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.AESCBCDecryptWithPKCS7Padding



#### 详细描述



#### 定义：

`func codec.AESCBCDecryptWithPKCS7Padding(v1: bytes, v2: any, v3: bytes) return (r0: bytes, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `any` |   |
| v3 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.AESCBCDecryptWithZeroPadding



#### 详细描述



#### 定义：

`func codec.AESCBCDecryptWithZeroPadding(v1: bytes, v2: any, v3: bytes) return (r0: bytes, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `any` |   |
| v3 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.AESCBCEncrypt

aes cbc 加密

#### 详细描述



#### 定义：

`AESCBCEncrypt(key []byte, i any, iv []byte) (data []byte, _ error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `bytes` |   |
| data | `any` |   |
| iv | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.AESCBCEncryptWithPKCS7Padding



#### 详细描述



#### 定义：

`func codec.AESCBCEncryptWithPKCS7Padding(v1: bytes, v2: any, v3: bytes) return (r0: bytes, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `any` |   |
| v3 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.AESCBCEncryptWithZeroPadding



#### 详细描述



#### 定义：

`func codec.AESCBCEncryptWithZeroPadding(v1: bytes, v2: any, v3: bytes) return (r0: bytes, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `any` |   |
| v3 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.AESDecrypt

aes 解密

#### 详细描述



#### 定义：

`AESDecrypt(key []byte, i any, iv []byte) ([]byte, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `bytes` |   |
| data | `any` |   |
| iv | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.AESECBDecrypt



#### 详细描述



#### 定义：

`AESECBDecrypt(key []byte, i any, iv []byte) ([]byte, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `any` |   |
| v3 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.AESECBDecryptWithPKCS7Padding



#### 详细描述



#### 定义：

`func codec.AESECBDecryptWithPKCS7Padding(v1: bytes, v2: any, v3: bytes) return (r0: bytes, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `any` |   |
| v3 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.AESECBDecryptWithZeroPadding



#### 详细描述



#### 定义：

`func codec.AESECBDecryptWithZeroPadding(v1: bytes, v2: any, v3: bytes) return (r0: bytes, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `any` |   |
| v3 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.AESECBEncrypt



#### 详细描述



#### 定义：

`AESECBEncrypt(key []byte, i any, iv []byte) ([]byte, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `any` |   |
| v3 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.AESECBEncryptWithPKCS7Padding



#### 详细描述



#### 定义：

`func codec.AESECBEncryptWithPKCS7Padding(v1: bytes, v2: any, v3: bytes) return (r0: bytes, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `any` |   |
| v3 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.AESECBEncryptWithZeroPadding



#### 详细描述



#### 定义：

`func codec.AESECBEncryptWithZeroPadding(v1: bytes, v2: any, v3: bytes) return (r0: bytes, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `any` |   |
| v3 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.AESEncrypt

aes cbc 加密

#### 详细描述



#### 定义：

`AESEncrypt(key []byte, i any, iv []byte) (data []byte, _ error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `bytes` |   |
| data | `any` |   |
| v3 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.AESGCMDecrypt

aes gcm 解密

#### 详细描述



#### 定义：

`AESGCMDecrypt(key []byte, data any, _ []byte) ([]byte, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `bytes` |   |
| data | `any` |   |
| iv | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.AESGCMDecryptWithNonceSize12



#### 详细描述



#### 定义：

`func codec.AESGCMDecryptWithNonceSize12(v1: bytes, v2: any, v3: bytes) return (r0: bytes, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `any` |   |
| v3 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.AESGCMDecryptWithNonceSize16



#### 详细描述



#### 定义：

`func codec.AESGCMDecryptWithNonceSize16(v1: bytes, v2: any, v3: bytes) return (r0: bytes, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `any` |   |
| v3 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.AESGCMEncrypt

aes gcm 加密

#### 详细描述



#### 定义：

`AESGCMEncrypt(key []byte, data any, _ []byte) ([]byte, error)  doc://AES GCM 加密后的payload shiro 1.4.2版本更换为了AES-GCM加密方式func AES_GCM_Encrypt(key []byte, Content []byte) string {	block, _ := aes.NewCipher(key)	nonce := make([]byte, 16)	io.ReadFull(rand.Reader, nonce)	aesgcm, _ := cipher.NewGCMWithNonceSize(block, 16)	ciphertext := aesgcm.Seal(nil, nonce, Content, nil)	return base64.StdEncoding.EncodeToString(append(nonce, ciphertext...))}`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `bytes` |   |
| data | `any` |   |
| iv | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.AESGCMEncryptWithNonceSize12



#### 详细描述



#### 定义：

`func codec.AESGCMEncryptWithNonceSize12(v1: bytes, v2: any, v3: bytes) return (r0: bytes, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `any` |   |
| v3 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.AESGCMEncryptWithNonceSize16



#### 详细描述



#### 定义：

`func codec.AESGCMEncryptWithNonceSize16(v1: bytes, v2: any, v3: bytes) return (r0: bytes, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `any` |   |
| v3 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.AutoDecode



#### 详细描述



#### 定义：

`AutoDecode(any) []*codec.AutoDecodeResult`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]*codec.AutoDecodeResult` |   |


 
### codec.DESCBCDecrypt



#### 详细描述



#### 定义：

`DESCBCDecrypt(key, data, iv []byte) ([]byte, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `bytes` |   |
| v3 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.DESCBCEncrypt



#### 详细描述



#### 定义：

`DESCBCEncrypt(key []byte, data []byte, iv []byte) ([]byte, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `bytes` |   |
| v3 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.DESDecrypt

DES 解密（默认CBC）

#### 详细描述



#### 定义：

`DESDecrypt(key, data, iv []byte) ([]byte, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `bytes` |   |
| encryptedData | `bytes` |   |
| iv | `bytes` |  初始化块，可以为空(nil) |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.DESECBDecrypt



#### 详细描述



#### 定义：

`DESECBDecrypt(key []byte, data []byte) ([]byte, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.DESECBEncrypt



#### 详细描述



#### 定义：

`DESECBEncrypt(key []byte, data []byte) ([]byte, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.DESEncrypt

DES 加密，默认 CBC 模式

#### 详细描述



#### 定义：

`DESEncrypt(key []byte, data []byte, iv []byte) ([]byte, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `bytes` |   |
| originData | `bytes` |   |
| iv | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.DecodeASCII

等价于 `strconv.Unquote`，把一个被 `&#34;` 包裹的字符串解析成字符串内容，同时解析 `&#34;\x0a&#34;` 解析成对应的字符串。

#### 详细描述



#### 定义：

`DecodeASCII(s string) (string, error)  doc:Unquote interprets s as a single-quoted, double-quoted,or backquoted Go string literal, returning the string valuethat s quotes.  (If s is single-quoted, it would be a Gocharacter literal; Unquote returns the correspondingone-character string.)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |
| r1 | `error` |   |


 
### codec.DecodeBase32



#### 详细描述



#### 定义：

`func codec.DecodeBase32(v1: string) return (r0: bytes, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.DecodeBase64

把 base64 解析成 bytes

#### 详细描述



#### 定义：

`DecodeBase64(i string) ([]byte, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| base64Str | `str` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| result | `bytes` |   |
| err | `error` |   |


 
### codec.DecodeBase64Url



#### 详细描述



#### 定义：

`DecodeBase64Url(i any) ([]byte, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.DecodeChunked

http chunked 解码

#### 详细描述



#### 定义：

`DecodeChunked(raw []byte) ([]byte, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.DecodeHex

把 Hex 字符串解析成 bytes

#### 详细描述



#### 定义：

`DecodeHex(i string) ([]byte, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |  想要解析的 HEX 字符串，例如 `0a0a` 会解析成 `\n\n` |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |  解析出的 bytes |
| r1 | `error` |   |


 
### codec.DecodeHtml

把 HTML 实体编码后的文字进行解析，例如 `&amp;#x0a;` 或 `&amp;#amp;` 等，如果包含正常字符串，则会保留原字符串

#### 详细描述



#### 定义：

`DecodeHtml(s string) string  doc:UnescapeString unescapes entities like &#34;&amp;lt;&#34; to become &#34;&lt;&#34;. It unescapes alarger range of entities than EscapeString escapes. For example, &#34;&amp;aacute;&#34;unescapes to &#34;á&#34;, as does &#34;&amp;#225;&#34; and &#34;&amp;#xE1;&#34;.UnescapeString(EscapeString(s)) == s always holds, but the converse isn&#39;talways true.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### codec.DecodeUrl

把 `%21%63%57asdf` 这类的字符串中的 URL 编码解析成正常字符

#### 详细描述



#### 定义：

`DecodeUrl(s string) (string, error)  doc:QueryUnescape does the inverse transformation of QueryEscape,converting each 3-byte encoded substring of the form &#34;%AB&#34; into thehex-decoded byte 0xAB.It returns an error if any % is not followed by two hexadecimaldigits.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |  需要解析的字符串 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |  解析后的字符串 |
| r1 | `error` |   |


 
### codec.DoubleDecodeUrl

双重 URL 解码，例如 `%2564%2567` 会解析成 `dg`

#### 详细描述



#### 定义：

`DoubleDecodeUrl(string) (string, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |  想要解析的包含双重 URL 编码的字符串，其他字符串将不会被解析 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |  解析结果 |
| r1 | `error` |   |


 
### codec.DoubleEncodeUrl



#### 详细描述



#### 定义：

`DoubleEncodeUrl(any) string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### codec.EncodeASCII

通常用于把不可见字符串变成可见字符串，把一个字符串变成双引号`&#34;`包裹的字符串，字符串中的不可见字符会变成 `\xAA\x0A` 这类被转义的内容

#### 详细描述



#### 定义：

`EncodeASCII(string) string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |  想要编码的字符串 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |  编码结果 |


 
### codec.EncodeBase32



#### 详细描述



#### 定义：

`func codec.EncodeBase32(v1: any) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### codec.EncodeBase64

把一个对象编码成 base64 字符串

#### 详细描述



#### 定义：

`EncodeBase64(i any) string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |  想要编码的对象，如果是 string 或者 []byte 会正常编码，如果是一个其他对象，会尝试把 `json.Marshal` 之后的 bytes 进行编码 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |  编码后的 base64 字符串 |


 
### codec.EncodeBase64Url



#### 详细描述



#### 定义：

`EncodeBase64Url(i any) string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### codec.EncodeChunked

增加 chunked 编码

#### 详细描述



#### 定义：

`EncodeChunked(raw []byte) []byte`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |


 
### codec.EncodeHtml

把一个字符串编码成 HTML 实体编码，如果输入了一个对象，会 json 序列化后再编码，注意这个函数会把所有内容都进行编码

#### 详细描述



#### 定义：

`EncodeHtml(i any) string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |  想要编码的对象 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |  编码结果 |


 
### codec.EncodeHtmlHex

把一个字符串编码成 HTML 实体编码，如果输入了一个对象，会序列化后再对 bytes 进行编码，注意这个函数会把参数所有内容都进行编码，编码成 `&amp;#xNN;` 这种形式

#### 详细描述



#### 定义：

`EncodeHtmlHex(i any) string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |  想要编码的对象 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |  编码结果 |


 
### codec.EncodeToHex

把一个对象编码成 hex 字符串，注意：不以 `0x` 开头

#### 详细描述



#### 定义：

`EncodeToHex(i any) string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |  想要编码的内容 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |  编码的结果 |


 
### codec.EncodeToPrintable

等价于 `codec.EncodeASCII`

#### 详细描述



#### 定义：

`EncodeToPrintable(string) string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |  等价于 `codec.EncodeASCII` |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |  等价于 `codec.EncodeASCII` |


 
### codec.EncodeUrl

把一个对象进行 URL 编码

#### 详细描述



#### 定义：

`EncodeUrl(i any) string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |  想要编码的参数 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |  编码后的结果 |


 
### codec.EscapeHtml

同 `codec.DecodeHtml`

#### 详细描述



#### 定义：

`EscapeHtml(s string) string  doc:EscapeString escapes special characters like &#34;&lt;&#34; to become &#34;&amp;lt;&#34;. Itescapes only five such characters: &lt;, &gt;, &amp;, &#39; and &#34;.UnescapeString(EscapeString(s)) == s always holds, but the converse isn&#39;talways true.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |  想要解码的内容 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |  解码结果 |


 
### codec.EscapePathUrl

URL 编码：（作为 url.Path 进行编码）

#### 详细描述



#### 定义：

`EscapePathUrl(s string) string  doc:PathEscape escapes the string so it can be safely placed inside a URL path segment,replacing special characters (including /) with %XX sequences as needed.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |  想要编码的内容 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |  编码结果 |


 
### codec.EscapeQueryUrl

URL 编码：作为 url.Query 进行编码

#### 详细描述



#### 定义：

`EscapeQueryUrl(s string) string  doc:QueryEscape escapes the string so it can be safely placedinside a URL query.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |  想要编码的内容 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |  编码结果 |


 
### codec.FixUTF8

修复 Bytes 到 UTF8，会把不合理的 UTF8 字符转义

#### 详细描述



#### 定义：

`FixUTF8(s []byte) string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### codec.GB18030ToUTF8



#### 详细描述



#### 定义：

`GB18030ToUTF8(s []byte) ([]byte, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.GBKSafe

尝试修复 GBK

#### 详细描述



#### 定义：

`GBKSafe(s []byte) (string, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |
| r1 | `error` |   |


 
### codec.GBKToUTF8



#### 详细描述



#### 定义：

`GBKToUTF8(s []byte) ([]byte, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.HTMLChardet

检测 HTML 的字符集

#### 详细描述



#### 定义：

`HTMLChardet(raw any) ([]chardet.Result, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]chardet.Result` |   |
| r1 | `error` |   |


 
### codec.HTMLChardetBest

检测 HTML 的字符集，只展示最有可能的结果

#### 详细描述



#### 定义：

`HTMLChardetBest(raw any) (*chardet.Result, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*chardet.Result` |   |
| r1 | `error` |   |


 
### codec.HZGB2312ToUTF8



#### 详细描述



#### 定义：

`HZGB2312ToUTF8(s []byte) ([]byte, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.HmacMD5



#### 详细描述



#### 定义：

`HmacMD5(key, data any) []byte`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |


 
### codec.HmacSM3



#### 详细描述



#### 定义：

`HmacSM3(key, data any) []byte`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |


 
### codec.HmacSha1



#### 详细描述



#### 定义：

`HmacSha1(key, data any) []byte`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |


 
### codec.HmacSha256



#### 详细描述



#### 定义：

`HmacSha256(key, data any) []byte`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |


 
### codec.HmacSha512



#### 详细描述



#### 定义：

`HmacSha512(key, data any) []byte`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |


 
### codec.MMH3Hash128

计算一个对象的 mmh3 hash128

#### 详细描述



#### 定义：

`MMH3Hash128(i any) string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### codec.MMH3Hash128x64

计算一个对象的 mmh3 hash128x64

#### 详细描述



#### 定义：

`MMH3Hash128x64(i any) string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### codec.MMH3Hash32



#### 详细描述



#### 定义：

`MMH3Hash32(i any) int64`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `int64` |   |


 
### codec.Md5

计算 md5 hash

#### 详细描述



#### 定义：

`Md5(i any) string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |  想要计算 md5 的值，如果是一个对象，会先尝试序列化 json |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |  计算结果为一串十六进制字符串 |


 
### codec.PKCS5Padding

pkcs5 填充

#### 详细描述



#### 定义：

`PKCS5Padding(ciphertext []byte, blockSize ...int) []byte`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| data | `bytes` |   |
| blockSize | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |


 
### codec.PKCS5UnPadding

pkcs5 解码

#### 详细描述



#### 定义：

`PKCS5UnPadding(origData []byte) (result []byte)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| data | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |


 
### codec.PKCS7Padding

pkcs7 编码

#### 详细描述



#### 定义：

`PKCS7Padding(src []byte) []byte`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| data | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |


 
### codec.PKCS7UnPadding

pkcs7 解码

#### 详细描述



#### 定义：

`PKCS7UnPadding(src []byte) []byte`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| data | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |


 
### codec.RC4Decrypt



#### 详细描述



#### 定义：

`RC4Decrypt(cipherKey []byte, cipherText []byte) ([]byte, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.RC4Encrypt



#### 详细描述



#### 定义：

`RC4Encrypt(cipherKey []byte, plainText []byte) ([]byte, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.RSADecryptWithOAEP



#### 详细描述



#### 定义：

`func codec.RSADecryptWithOAEP(v1: bytes, v2: any) return (r0: bytes, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.RSADecryptWithPKCS1v15



#### 详细描述



#### 定义：

`RSADecryptWithPKCS1v15(pemPriBytes []byte, data any) ([]byte, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.RSAEncryptWithOAEP



#### 详细描述



#### 定义：

`func codec.RSAEncryptWithOAEP(v1: bytes, v2: any) return (r0: bytes, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.RSAEncryptWithPKCS1v15



#### 详细描述



#### 定义：

`RSAEncryptWithPKCS1v15(pemBytes []byte, data any) ([]byte, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.Sha1

计算 sha1 hash

#### 详细描述



#### 定义：

`Sha1(i any) string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |  想要计算 sha1 的参数 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |  计算结果，十六进制字符串 |


 
### codec.Sha224



#### 详细描述



#### 定义：

`Sha224(i any) string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### codec.Sha256



#### 详细描述



#### 定义：

`Sha256(i any) string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### codec.Sha384



#### 详细描述



#### 定义：

`Sha384(i any) string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### codec.Sha512



#### 详细描述



#### 定义：

`Sha512(i any) string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### codec.Sm2DecryptAsn1



#### 详细描述



#### 定义：

`Sm2DecryptAsn1(priKey []byte, data []byte) ([]byte, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.Sm2DecryptAsn1WithPassword



#### 详细描述



#### 定义：

`Sm2DecryptAsn1WithPassword(priKey []byte, data []byte, password []byte) ([]byte, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `bytes` |   |
| v3 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.Sm2DecryptC1C2C3



#### 详细描述



#### 定义：

`Sm2DecryptC1C2C3(priKey []byte, data []byte) ([]byte, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.Sm2DecryptC1C2C3WithPassword



#### 详细描述



#### 定义：

`Sm2DecryptC1C2C3WithPassword(priKey []byte, data []byte, password []byte) ([]byte, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `bytes` |   |
| v3 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.Sm2DecryptC1C3C2



#### 详细描述



#### 定义：

`Sm2DecryptC1C3C2(priKey []byte, data []byte) ([]byte, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.Sm2DecryptC1C3C2WithPassword



#### 详细描述



#### 定义：

`Sm2DecryptC1C3C2WithPassword(priKey []byte, data []byte, password []byte) ([]byte, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `bytes` |   |
| v3 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.Sm2EncryptAsn1



#### 详细描述



#### 定义：

`Sm2EncryptAsn1(pubKey []byte, data []byte) ([]byte, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.Sm2EncryptC1C2C3



#### 详细描述



#### 定义：

`Sm2EncryptC1C2C3(pubKey []byte, data []byte) ([]byte, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.Sm2EncryptC1C3C2



#### 详细描述



#### 定义：

`Sm2EncryptC1C3C2(pubKey []byte, data []byte) ([]byte, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.Sm2GenerateHexKeyPair



#### 详细描述



#### 定义：

`Sm2GenerateHexKeyPair() ([]byte, []byte, error)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `bytes` |   |
| r2 | `error` |   |


 
### codec.Sm2GeneratePemKeyPair



#### 详细描述



#### 定义：

`Sm2GeneratePemKeyPair() ([]byte, []byte, error)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `bytes` |   |
| r2 | `error` |   |


 
### codec.Sm3

SM3 计算 Hash

#### 详细描述



#### 定义：

`Sm3(raw any) []byte`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |


 
### codec.Sm4CBCDecrypt

国密4 CBC 解密

#### 详细描述



#### 定义：

`Sm4CBCDecrypt(key []byte, data any, iv []byte) ([]byte, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `bytes` |   |
| data | `any` |   |
| iv | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.Sm4CBCEncrypt

国密4 cbc 加密

#### 详细描述



#### 定义：

`Sm4CBCEncrypt(key []byte, data any, iv []byte) ([]byte, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `bytes` |   |
| data | `any` |   |
| iv | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.Sm4CFBDecrypt

国密4 CFB 解密

#### 详细描述



#### 定义：

`Sm4CFBDecrypt(key []byte, data any, iv []byte) ([]byte, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `bytes` |   |
| data | `any` |   |
| iv | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.Sm4CFBEncrypt

国密4 cfb 加密

#### 详细描述



#### 定义：

`Sm4CFBEncrypt(key []byte, data any, iv []byte) ([]byte, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `bytes` |   |
| data | `any` |   |
| iv | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.Sm4EBCDecrypt

国密4 EBC 解密

#### 详细描述



#### 定义：

`Sm4EBCDecrypt(key []byte, data any, iv []byte) ([]byte, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `bytes` |   |
| data | `any` |   |
| iv | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.Sm4EBCEncrypt

国密4 EBC 加密

#### 详细描述



#### 定义：

`Sm4EBCEncrypt(key []byte, data any, iv []byte) ([]byte, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `bytes` |   |
| data | `any` |   |
| iv | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.Sm4ECBDecrypt



#### 详细描述



#### 定义：

`Sm4ECBDecrypt(key []byte, data any, iv []byte) ([]byte, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `any` |   |
| v3 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.Sm4ECBEncrypt



#### 详细描述



#### 定义：

`Sm4ECBEncrypt(key []byte, data any, iv []byte) ([]byte, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `any` |   |
| v3 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.Sm4GCMDecrypt

国密4 gcm 解密

#### 详细描述



#### 定义：

`Sm4GCMDecrypt(key []byte, data any, iv []byte) ([]byte, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `bytes` |   |
| data | `any` |   |
| iv | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.Sm4GCMEncrypt

SM4 GCM 加密

#### 详细描述



#### 定义：

`Sm4GCMEncrypt(key []byte, data any, iv []byte) ([]byte, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `bytes` |   |
| data | `any` |   |
| iv | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.Sm4OFBDecrypt

SM4 OFB 解密

#### 详细描述



#### 定义：

`Sm4OFBDecrypt(key []byte, data any, iv []byte) ([]byte, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `bytes` |   |
| data | `any` |   |
| iv | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.Sm4OFBEncrypt

SM4 OBF 加密

#### 详细描述



#### 定义：

`Sm4OFBEncrypt(key []byte, data any, iv []byte) ([]byte, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `bytes` |   |
| data | `any` |   |
| iv | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.StrconvQuote



#### 详细描述



#### 定义：

`StrconvQuote(string) string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### codec.StrconvUnquote



#### 详细描述



#### 定义：

`StrconvUnquote(s string) (string, error)  doc:Unquote interprets s as a single-quoted, double-quoted,or backquoted Go string literal, returning the string valuethat s quotes.  (If s is single-quoted, it would be a Gocharacter literal; Unquote returns the correspondingone-character string.)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |
| r1 | `error` |   |


 
### codec.TripleDESCBCDecrypt



#### 详细描述



#### 定义：

`func codec.TripleDESCBCDecrypt(v1: bytes, v2: bytes, v3: bytes) return (r0: bytes, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `bytes` |   |
| v3 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.TripleDESCBCEncrypt



#### 详细描述



#### 定义：

`func codec.TripleDESCBCEncrypt(v1: bytes, v2: bytes, v3: bytes) return (r0: bytes, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `bytes` |   |
| v3 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.TripleDESDecrypt



#### 详细描述



#### 定义：

`func codec.TripleDESDecrypt(v1: bytes, v2: bytes, v3: bytes) return (r0: bytes, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `bytes` |   |
| v3 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.TripleDESECBDecrypt



#### 详细描述



#### 定义：

`func codec.TripleDESECBDecrypt(v1: bytes, v2: bytes) return (r0: bytes, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.TripleDESECBEncrypt



#### 详细描述



#### 定义：

`func codec.TripleDESECBEncrypt(v1: bytes, v2: bytes) return (r0: bytes, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.TripleDESEncrypt



#### 详细描述



#### 定义：

`func codec.TripleDESEncrypt(v1: bytes, v2: bytes, v3: bytes) return (r0: bytes, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |
| v2 | `bytes` |   |
| v3 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.UTF8ToGB18030



#### 详细描述



#### 定义：

`UTF8ToGB18030(s []byte) ([]byte, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.UTF8ToGBK



#### 详细描述



#### 定义：

`UTF8ToGBK(s []byte) ([]byte, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.UTF8ToHZGB2312



#### 详细描述



#### 定义：

`UTF8ToHZGB2312(s []byte) ([]byte, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.UnescapePathUrl

作为 url.Path 进行 URL 解码

#### 详细描述



#### 定义：

`UnescapePathUrl(s string) (string, error)  doc:PathUnescape does the inverse transformation of PathEscape,converting each 3-byte encoded substring of the form &#34;%AB&#34; into thehex-decoded byte 0xAB. It returns an error if any % is not followedby two hexadecimal digits.PathUnescape is identical to QueryUnescape except that it does notunescape &#39;&#43;&#39; to &#39; &#39; (space).`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |  想要解码的内容 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |  解码结果 |
| r1 | `error` |   |


 
### codec.UnescapeQueryUrl

作为 url.Query 进行 URL 解码

#### 详细描述



#### 定义：

`UnescapeQueryUrl(s string) (string, error)  doc:QueryUnescape does the inverse transformation of QueryEscape,converting each 3-byte encoded substring of the form &#34;%AB&#34; into thehex-decoded byte 0xAB.It returns an error if any % is not followed by two hexadecimaldigits.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |  想要解码的内容 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |  解码结果 |
| r1 | `error` |   |


 
### codec.UnicodeDecode



#### 详细描述



#### 定义：

`UnicodeDecode(i string) string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### codec.UnicodeEncode



#### 详细描述



#### 定义：

`UnicodeEncode(i string) string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### codec.ZeroPadding

零填充

#### 详细描述



#### 定义：

`ZeroPadding(origin []byte, blockSize int) []byte`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| originData | `bytes` |   |
| blockSize | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |


 
### codec.ZeroUnPadding

移除 0 填充的末尾

#### 详细描述



#### 定义：

`ZeroUnPadding(originData []byte) []byte`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |


 


