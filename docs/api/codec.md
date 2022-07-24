# codec


|成员函数|函数描述/介绍|
|:------|:--------|
 | [codec.AESCBCDecrypt](#codecaescbcdecrypt) | aes cbc 解密 |
 | [codec.AESCBCEncrypt](#codecaescbcencrypt) | aes cbc 加密 |
 | [codec.AESDecrypt](#codecaesdecrypt) | aes 解密 |
 | [codec.AESECBDecrypt](#codecaesecbdecrypt) |  |
 | [codec.AESECBEncrypt](#codecaesecbencrypt) |  |
 | [codec.AESEncrypt](#codecaesencrypt) | aes cbc 加密 |
 | [codec.AESGCMDecrypt](#codecaesgcmdecrypt) | aes gcm 解密 |
 | [codec.AESGCMEncrypt](#codecaesgcmencrypt) | aes gcm 加密 |
 | [codec.AutoDecode](#codecautodecode) |  |
 | [codec.DESCBCDecrypt](#codecdescbcdecrypt) |  |
 | [codec.DESCBCEncrypt](#codecdescbcencrypt) |  |
 | [codec.DESDecrypt](#codecdesdecrypt) | DES 解密（默认CBC） |
 | [codec.DESEncrypt](#codecdesencrypt) | DES 加密，默认 CBC 模式 |
 | [codec.DecodeASCII](#codecdecodeascii) | 等价于 `strconv.Unquote`，把一个被 `&#34;` 包裹的字符串解析成字符串内容，同时解析 `&#34;\x0a&#34;` 解析成对应的字符串。 |
 | [codec.DecodeBase64](#codecdecodebase64) | 把 base64 解析成 bytes |
 | [codec.DecodeChunked](#codecdecodechunked) | http chunked 解码 |
 | [codec.DecodeHex](#codecdecodehex) | 把 Hex 字符串解析成 bytes |
 | [codec.DecodeHtml](#codecdecodehtml) | 把 HTML 实体编码后的文字进行解析，例如 `&amp;#x0a;` 或 `&amp;#amp;` 等，如果包含正常字符串，则会保留原字符串 |
 | [codec.DecodeUrl](#codecdecodeurl) | 把 `%21%63%57asdf` 这类的字符串中的 URL 编码解析成正常字符 |
 | [codec.DoubleDecodeUrl](#codecdoubledecodeurl) | 双重 URL 解码，例如 `%2564%2567` 会解析成 `dg` |
 | [codec.DoubleEncodeUrl](#codecdoubleencodeurl) |  |
 | [codec.EncodeASCII](#codecencodeascii) | 通常用于把不可见字符串变成可见字符串，把一个字符串变成双引号`&#34;`包裹的字符串，字符串中的不可见字符会变成 `\xAA\x0A` 这类被转义的内容 |
 | [codec.EncodeBase64](#codecencodebase64) | 把一个对象编码成 base64 字符串 |
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
 | [codec.MMH3Hash128](#codecmmh3hash128) | 计算一个对象的 mmh3 hash128 |
 | [codec.MMH3Hash128x64](#codecmmh3hash128x64) | 计算一个对象的 mmh3 hash128x64 |
 | [codec.MMH3Hash32](#codecmmh3hash32) | 计算 mmh3 的 hash32 |
 | [codec.Md5](#codecmd5) | 计算 md5 hash |
 | [codec.PKCS5Padding](#codecpkcs5padding) | pkcs5 填充 |
 | [codec.PKCS5UnPadding](#codecpkcs5unpadding) | pkcs5 解码 |
 | [codec.PKCS7Padding](#codecpkcs7padding) | pkcs7 编码 |
 | [codec.PKCS7UnPadding](#codecpkcs7unpadding) | pkcs7 解码 |
 | [codec.Sha1](#codecsha1) | 计算 sha1 hash |
 | [codec.Sha224](#codecsha224) |  |
 | [codec.Sha256](#codecsha256) |  |
 | [codec.Sha384](#codecsha384) |  |
 | [codec.Sha512](#codecsha512) |  |
 | [codec.Sm3](#codecsm3) | SM3 计算 Hash |
 | [codec.Sm4CBCDecrypt](#codecsm4cbcdecrypt) | 国密4 CBC 解密 |
 | [codec.Sm4CBCEncrypt](#codecsm4cbcencrypt) | 国密4 cbc 加密 |
 | [codec.Sm4CFBDecrypt](#codecsm4cfbdecrypt) | 国密4 CFB 解密 |
 | [codec.Sm4CFBEncrypt](#codecsm4cfbencrypt) | 国密4 cfb 加密 |
 | [codec.Sm4EBCDecrypt](#codecsm4ebcdecrypt) | 国密4 EBC 解密 |
 | [codec.Sm4EBCEncrypt](#codecsm4ebcencrypt) | 国密4 EBC 加密 |
 | [codec.Sm4GCMDecrypt](#codecsm4gcmdecrypt) | 国密4 gcm 解密 |
 | [codec.Sm4GCMEncrypt](#codecsm4gcmencrypt) | SM4 GCM 加密 |
 | [codec.Sm4OFBDecrypt](#codecsm4ofbdecrypt) | SM4 OFB 解密 |
 | [codec.Sm4OFBEncrypt](#codecsm4ofbencrypt) | SM4 OBF 加密 |
 | [codec.StrconvQuote](#codecstrconvquote) |  |
 | [codec.StrconvUnquote](#codecstrconvunquote) |  |
 | [codec.UTF8ToGB18030](#codecutf8togb18030) |  |
 | [codec.UTF8ToGBK](#codecutf8togbk) |  |
 | [codec.UTF8ToHZGB2312](#codecutf8tohzgb2312) |  |
 | [codec.UnescapePathUrl](#codecunescapepathurl) | 作为 url.Path 进行 URL 解码 |
 | [codec.UnescapeQueryUrl](#codecunescapequeryurl) | 作为 url.Query 进行 URL 解码 |
 | [codec.ZeroPadding](#codeczeropadding) | 零填充 |
 | [codec.ZeroUnPadding](#codeczerounpadding) | 移除 0 填充的末尾 |




 



## 函数定义

### codec.AESCBCDecrypt

aes cbc 解密

#### 详细描述



#### 定义：

`func codec.AESCBCDecrypt(key: bytes, data: any, iv: bytes) return (r0: bytes, r1: error)`


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


 
### codec.AESCBCEncrypt

aes cbc 加密

#### 详细描述



#### 定义：

`func codec.AESCBCEncrypt(key: bytes, data: any, iv: bytes) return (r0: bytes, r1: error)`


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


 
### codec.AESDecrypt

aes 解密

#### 详细描述



#### 定义：

`func codec.AESDecrypt(key: bytes, data: any, iv: bytes) return (r0: bytes, r1: error)`


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

`func codec.AESECBDecrypt(v1: bytes, v2: any, v3: bytes) return (r0: bytes, r1: error)`


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

`func codec.AESECBEncrypt(v1: bytes, v2: any, v3: bytes) return (r0: bytes, r1: error)`


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

`func codec.AESEncrypt(key: bytes, data: any, v3: bytes) return (r0: bytes, r1: error)`


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

`func codec.AESGCMDecrypt(key: bytes, data: any, iv: bytes) return (r0: bytes, r1: error)`


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


 
### codec.AESGCMEncrypt

aes gcm 加密

#### 详细描述



#### 定义：

`func codec.AESGCMEncrypt(key: bytes, data: any, iv: bytes) return (r0: bytes, r1: error)`


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


 
### codec.AutoDecode



#### 详细描述



#### 定义：

`func codec.AutoDecode(v1: any) return (r0: []*codec.AutoDecodeResult)`


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

`func codec.DESCBCDecrypt(v1: bytes, v2: bytes, v3: bytes) return (r0: bytes, r1: error)`


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

`func codec.DESCBCEncrypt(v1: bytes, v2: bytes, v3: bytes) return (r0: bytes, r1: error)`


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

`func codec.DESDecrypt(key: bytes, encryptedData: bytes, iv: bytes) return (r0: bytes, r1: error)`


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


 
### codec.DESEncrypt

DES 加密，默认 CBC 模式

#### 详细描述



#### 定义：

`func codec.DESEncrypt(key: bytes, originData: bytes, iv: bytes) return (r0: bytes, r1: error)`


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

`func codec.DecodeASCII(v1: string) return (r0: string, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |
| r1 | `error` |   |


 
### codec.DecodeBase64

把 base64 解析成 bytes

#### 详细描述



#### 定义：

`func codec.DecodeBase64(base64Str: str) return (result: bytes, err: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| base64Str | `str` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| result | `bytes` |   |
| err | `error` |   |


 
### codec.DecodeChunked

http chunked 解码

#### 详细描述



#### 定义：

`func codec.DecodeChunked(v1: bytes) return (r0: bytes, r1: error)`


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

`func codec.DecodeHex(v1: string) return (r0: bytes, r1: error)`


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

`func codec.DecodeHtml(v1: string) return (r0: string)`


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

`func codec.DecodeUrl(v1: string) return (r0: string, r1: error)`


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

`func codec.DoubleDecodeUrl(v1: string) return (r0: string, r1: error)`


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

`func codec.DoubleEncodeUrl(v1: any) return (r0: string)`


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

`func codec.EncodeASCII(v1: string) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |  想要编码的字符串 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |  编码结果 |


 
### codec.EncodeBase64

把一个对象编码成 base64 字符串

#### 详细描述



#### 定义：

`func codec.EncodeBase64(v1: any) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |  想要编码的对象，如果是 string 或者 []byte 会正常编码，如果是一个其他对象，会尝试把 `json.Marshal` 之后的 bytes 进行编码 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |  编码后的 base64 字符串 |


 
### codec.EncodeChunked

增加 chunked 编码

#### 详细描述



#### 定义：

`func codec.EncodeChunked(v1: bytes) return (r0: bytes)`


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

`func codec.EncodeHtml(v1: any) return (r0: string)`


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

`func codec.EncodeHtmlHex(v1: any) return (r0: string)`


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

`func codec.EncodeToHex(v1: any) return (r0: string)`


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

`func codec.EncodeToPrintable(v1: string) return (r0: string)`


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

`func codec.EncodeUrl(v1: any) return (r0: string)`


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

`func codec.EscapeHtml(v1: string) return (r0: string)`


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

`func codec.EscapePathUrl(v1: string) return (r0: string)`


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

`func codec.EscapeQueryUrl(v1: string) return (r0: string)`


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

`func codec.FixUTF8(v1: bytes) return (r0: string)`


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

`func codec.GB18030ToUTF8(v1: bytes) return (r0: bytes, r1: error)`


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

`func codec.GBKSafe(v1: bytes) return (r0: string, r1: error)`


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

`func codec.GBKToUTF8(v1: bytes) return (r0: bytes, r1: error)`


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

`func codec.HTMLChardet(v1: any) return (r0: []chardet.Result, r1: error)`


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

`func codec.HTMLChardetBest(v1: any) return (r0: *chardet.Result, r1: error)`


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

`func codec.HZGB2312ToUTF8(v1: bytes) return (r0: bytes, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### codec.MMH3Hash128

计算一个对象的 mmh3 hash128

#### 详细描述



#### 定义：

`func codec.MMH3Hash128(v1: any) return (r0: string)`


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

`func codec.MMH3Hash128x64(v1: any) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### codec.MMH3Hash32

计算 mmh3 的 hash32

#### 详细描述



#### 定义：

`func codec.MMH3Hash32(v1: any) return (r0: uint32)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `uint32` |   |


 
### codec.Md5

计算 md5 hash

#### 详细描述



#### 定义：

`func codec.Md5(v1: any) return (r0: string)`


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

`func codec.PKCS5Padding(data: bytes, blockSize: int) return (r0: bytes)`


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

`func codec.PKCS5UnPadding(data: bytes) return (r0: bytes)`


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

`func codec.PKCS7Padding(data: bytes) return (r0: bytes)`


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

`func codec.PKCS7UnPadding(data: bytes) return (r0: bytes)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| data | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |


 
### codec.Sha1

计算 sha1 hash

#### 详细描述



#### 定义：

`func codec.Sha1(v1: any) return (r0: string)`


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

`func codec.Sha224(v1: any) return (r0: string)`


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

`func codec.Sha256(v1: any) return (r0: string)`


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

`func codec.Sha384(v1: any) return (r0: string)`


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

`func codec.Sha512(v1: any) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### codec.Sm3

SM3 计算 Hash

#### 详细描述



#### 定义：

`func codec.Sm3(v1: any) return (r0: bytes)`


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

`func codec.Sm4CBCDecrypt(key: bytes, data: any, iv: bytes) return (r0: bytes, r1: error)`


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

`func codec.Sm4CBCEncrypt(key: bytes, data: any, iv: bytes) return (r0: bytes, r1: error)`


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

`func codec.Sm4CFBDecrypt(key: bytes, data: any, iv: bytes) return (r0: bytes, r1: error)`


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

`func codec.Sm4CFBEncrypt(key: bytes, data: any, iv: bytes) return (r0: bytes, r1: error)`


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

`func codec.Sm4EBCDecrypt(key: bytes, data: any, iv: bytes) return (r0: bytes, r1: error)`


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

`func codec.Sm4EBCEncrypt(key: bytes, data: any, iv: bytes) return (r0: bytes, r1: error)`


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


 
### codec.Sm4GCMDecrypt

国密4 gcm 解密

#### 详细描述



#### 定义：

`func codec.Sm4GCMDecrypt(key: bytes, data: any, iv: bytes) return (r0: bytes, r1: error)`


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

`func codec.Sm4GCMEncrypt(key: bytes, data: any, iv: bytes) return (r0: bytes, r1: error)`


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

`func codec.Sm4OFBDecrypt(key: bytes, data: any, iv: bytes) return (r0: bytes, r1: error)`


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

`func codec.Sm4OFBEncrypt(key: bytes, data: any, iv: bytes) return (r0: bytes, r1: error)`


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

`func codec.StrconvQuote(v1: string) return (r0: string)`


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

`func codec.StrconvUnquote(v1: string) return (r0: string, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |
| r1 | `error` |   |


 
### codec.UTF8ToGB18030



#### 详细描述



#### 定义：

`func codec.UTF8ToGB18030(v1: bytes) return (r0: bytes, r1: error)`


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

`func codec.UTF8ToGBK(v1: bytes) return (r0: bytes, r1: error)`


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

`func codec.UTF8ToHZGB2312(v1: bytes) return (r0: bytes, r1: error)`


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

`func codec.UnescapePathUrl(v1: string) return (r0: string, r1: error)`


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

`func codec.UnescapeQueryUrl(v1: string) return (r0: string, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |  想要解码的内容 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |  解码结果 |
| r1 | `error` |   |


 
### codec.ZeroPadding

零填充

#### 详细描述



#### 定义：

`func codec.ZeroPadding(originData: bytes, blockSize: int) return (r0: bytes)`


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

`func codec.ZeroUnPadding(v1: bytes) return (r0: bytes)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |


 


