# codec


|成员函数|函数描述/介绍|
|:------|:--------|
 | [codec.AesDecrypt](#codecaesdecrypt) |  |
 | [codec.AesEncrypt](#codecaesencrypt) |  |
 | [codec.DecodeASCII](#codecdecodeascii) | 等价于 `strconv.Unquote`，把一个被 `&#34;` 包裹的字符串解析成字符串内容，同时解析 `&#34;\x0a&#34;` 解析成对应的字符串。 |
 | [codec.DecodeBase64](#codecdecodebase64) | 把 base64 解析成 bytes |
 | [codec.DecodeHex](#codecdecodehex) | 把 Hex 字符串解析成 bytes |
 | [codec.DecodeHtml](#codecdecodehtml) | 把 HTML 实体编码后的文字进行解析，例如 `&amp;#x0a;` 或 `&amp;#amp;` 等，如果包含正常字符串，则会保留原字符串 |
 | [codec.DecodeUrl](#codecdecodeurl) | 把 `%21%63%57asdf` 这类的字符串中的 URL 编码解析成正常字符 |
 | [codec.DoubleDecodeUrl](#codecdoubledecodeurl) | 双重 URL 解码，例如 `%2564%2567` 会解析成 `dg` |
 | [codec.DoubleEncodeUrl](#codecdoubleencodeurl) |  |
 | [codec.EncodeASCII](#codecencodeascii) | 通常用于把不可见字符串变成可见字符串，把一个字符串变成双引号`&#34;`包裹的字符串，字符串中的不可见字符会变成 `\xAA\x0A` 这类被转义的内容 |
 | [codec.EncodeBase64](#codecencodebase64) | 把一个对象编码成 base64 字符串 |
 | [codec.EncodeHtml](#codecencodehtml) | 把一个字符串编码成 HTML 实体编码，如果输入了一个对象，会 json 序列化后再编码，注意这个函数会把所有内容都进行编码 |
 | [codec.EncodeHtmlHex](#codecencodehtmlhex) | 把一个字符串编码成 HTML 实体编码，如果输入了一个对象，会序列化后再对 bytes 进行编码，注意这个函数会把参数所有内容都进行编码，编码成 `&amp;#xNN;` 这种形式 |
 | [codec.EncodeToHex](#codecencodetohex) | 把一个对象编码成 hex 字符串，注意：不以 `0x` 开头 |
 | [codec.EncodeToPrintable](#codecencodetoprintable) | 等价于 `codec.EncodeASCII` |
 | [codec.EncodeUrl](#codecencodeurl) | 把一个对象进行 URL 编码 |
 | [codec.EscapeHtml](#codecescapehtml) | 同 `codec.DecodeHtml` |
 | [codec.EscapePathUrl](#codecescapepathurl) | URL 编码：（作为 url.Path 进行编码） |
 | [codec.EscapeQueryUrl](#codecescapequeryurl) | URL 编码：作为 url.Query 进行编码 |
 | [codec.Md5](#codecmd5) | 计算 md5 hash |
 | [codec.Sha1](#codecsha1) | 计算 sha1 hash |
 | [codec.Sha224](#codecsha224) |  |
 | [codec.Sha256](#codecsha256) |  |
 | [codec.Sha384](#codecsha384) |  |
 | [codec.Sha512](#codecsha512) |  |
 | [codec.UnescapePathUrl](#codecunescapepathurl) | 作为 url.Path 进行 URL 解码 |
 | [codec.UnescapeQueryUrl](#codecunescapequeryurl) | 作为 url.Query 进行 URL 解码 |




 



## 函数定义

### codec.AesDecrypt



#### 定义：

`func (v1: []uint8, v2: []uint8) return([]uint8, error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | []uint8 |   |
| v2 | []uint8 |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | []uint8 |   |
| r1 | error |   |


### codec.AesEncrypt



#### 定义：

`func (v1: []uint8, v2: []uint8) return([]uint8, error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | []uint8 |   |
| v2 | []uint8 |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | []uint8 |   |
| r1 | error |   |


### codec.DecodeASCII

等价于 `strconv.Unquote`，把一个被 `&#34;` 包裹的字符串解析成字符串内容，同时解析 `&#34;\x0a&#34;` 解析成对应的字符串。

#### 定义：

`func (v1: string) return(string, error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | string |   |
| r1 | error |   |


### codec.DecodeBase64

把 base64 解析成 bytes

#### 定义：

`func (v1: string) return([]uint8, error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | []uint8 |   |
| r1 | error |   |


### codec.DecodeHex

把 Hex 字符串解析成 bytes

#### 定义：

`func (v1: string) return([]uint8, error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |  想要解析的 HEX 字符串，例如 `0a0a` 会解析成 `\n\n` |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | []uint8 |  解析出的 bytes |
| r1 | error |   |


### codec.DecodeHtml

把 HTML 实体编码后的文字进行解析，例如 `&amp;#x0a;` 或 `&amp;#amp;` 等，如果包含正常字符串，则会保留原字符串

#### 定义：

`func (v1: string) return(string) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | string |   |


### codec.DecodeUrl

把 `%21%63%57asdf` 这类的字符串中的 URL 编码解析成正常字符

#### 定义：

`func (v1: string) return(string, error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |  需要解析的字符串 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | string |  解析后的字符串 |
| r1 | error |   |


### codec.DoubleDecodeUrl

双重 URL 解码，例如 `%2564%2567` 会解析成 `dg`

#### 定义：

`func (v1: string) return(string, error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |  想要解析的包含双重 URL 编码的字符串，其他字符串将不会被解析 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | string |  解析结果 |
| r1 | error |   |


### codec.DoubleEncodeUrl



#### 定义：

`func (v1: interface {}) return(string) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | interface {} |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | string |   |


### codec.EncodeASCII

通常用于把不可见字符串变成可见字符串，把一个字符串变成双引号`&#34;`包裹的字符串，字符串中的不可见字符会变成 `\xAA\x0A` 这类被转义的内容

#### 定义：

`func (v1: string) return(string) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |  想要编码的字符串 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | string |  编码结果 |


### codec.EncodeBase64

把一个对象编码成 base64 字符串

#### 定义：

`func (v1: interface {}) return(string) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | interface {} |  想要编码的对象，如果是 string 或者 []byte 会正常编码，如果是一个其他对象，会尝试把 `json.Marshal` 之后的 bytes 进行编码 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | string |  编码后的 base64 字符串 |


### codec.EncodeHtml

把一个字符串编码成 HTML 实体编码，如果输入了一个对象，会 json 序列化后再编码，注意这个函数会把所有内容都进行编码

#### 定义：

`func (v1: interface {}) return(string) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | interface {} |  想要编码的对象 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | string |  编码结果 |


### codec.EncodeHtmlHex

把一个字符串编码成 HTML 实体编码，如果输入了一个对象，会序列化后再对 bytes 进行编码，注意这个函数会把参数所有内容都进行编码，编码成 `&amp;#xNN;` 这种形式

#### 定义：

`func (v1: interface {}) return(string) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | interface {} |  想要编码的对象 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | string |  编码结果 |


### codec.EncodeToHex

把一个对象编码成 hex 字符串，注意：不以 `0x` 开头

#### 定义：

`func (v1: interface {}) return(string) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | interface {} |  想要编码的内容 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | string |  编码的结果 |


### codec.EncodeToPrintable

等价于 `codec.EncodeASCII`

#### 定义：

`func (v1: string) return(string) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |  等价于 `codec.EncodeASCII` |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | string |  等价于 `codec.EncodeASCII` |


### codec.EncodeUrl

把一个对象进行 URL 编码

#### 定义：

`func (v1: interface {}) return(string) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | interface {} |  想要编码的参数 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | string |  编码后的结果 |


### codec.EscapeHtml

同 `codec.DecodeHtml`

#### 定义：

`func (v1: string) return(string) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |  想要解码的内容 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | string |  解码结果 |


### codec.EscapePathUrl

URL 编码：（作为 url.Path 进行编码）

#### 定义：

`func (v1: string) return(string) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |  想要编码的内容 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | string |  编码结果 |


### codec.EscapeQueryUrl

URL 编码：作为 url.Query 进行编码

#### 定义：

`func (v1: string) return(string) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |  想要编码的内容 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | string |  编码结果 |


### codec.Md5

计算 md5 hash

#### 定义：

`func (v1: interface {}) return(string) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | interface {} |  想要计算 md5 的值，如果是一个对象，会先尝试序列化 json |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | string |  计算结果为一串十六进制字符串 |


### codec.Sha1

计算 sha1 hash

#### 定义：

`func (v1: interface {}) return(string) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | interface {} |  想要计算 sha1 的参数 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | string |  计算结果，十六进制字符串 |


### codec.Sha224



#### 定义：

`func (v1: interface {}) return(string) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | interface {} |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | string |   |


### codec.Sha256



#### 定义：

`func (v1: interface {}) return(string) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | interface {} |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | string |   |


### codec.Sha384



#### 定义：

`func (v1: interface {}) return(string) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | interface {} |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | string |   |


### codec.Sha512



#### 定义：

`func (v1: interface {}) return(string) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | interface {} |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | string |   |


### codec.UnescapePathUrl

作为 url.Path 进行 URL 解码

#### 定义：

`func (v1: string) return(string, error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |  想要解码的内容 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | string |  解码结果 |
| r1 | error |   |


### codec.UnescapeQueryUrl

作为 url.Query 进行 URL 解码

#### 定义：

`func (v1: string) return(string, error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |  想要解码的内容 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | string |  解码结果 |
| r1 | error |   |





