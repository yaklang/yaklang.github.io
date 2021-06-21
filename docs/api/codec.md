# codec


|成员函数|函数描述/介绍|
|:------|:--------|
 | [codec.AesDecrypt](#codecaesdecrypt) |  |
 | [codec.AesEncrypt](#codecaesencrypt) |  |
 | [codec.DecodeASCII](#codecdecodeascii) |  |
 | [codec.DecodeBase64](#codecdecodebase64) |  |
 | [codec.DecodeHtml](#codecdecodehtml) |  |
 | [codec.DecodeToHex](#codecdecodetohex) |  |
 | [codec.DecodeUrl](#codecdecodeurl) |  |
 | [codec.DoubleDecodeUrl](#codecdoubledecodeurl) |  |
 | [codec.DoubleEncodeUrl](#codecdoubleencodeurl) |  |
 | [codec.EncodeASCII](#codecencodeascii) |  |
 | [codec.EncodeBase64](#codecencodebase64) |  |
 | [codec.EncodeHtml](#codecencodehtml) |  |
 | [codec.EncodeHtmlHex](#codecencodehtmlhex) |  |
 | [codec.EncodeToHex](#codecencodetohex) |  |
 | [codec.EncodeToPrintable](#codecencodetoprintable) |  |
 | [codec.EncodeUrl](#codecencodeurl) |  |
 | [codec.EscapeHtml](#codecescapehtml) |  |
 | [codec.EscapePathUrl](#codecescapepathurl) |  |
 | [codec.EscapeQueryUrl](#codecescapequeryurl) |  |
 | [codec.Md5](#codecmd5) |  |
 | [codec.Sha1](#codecsha1) |  |
 | [codec.Sha224](#codecsha224) |  |
 | [codec.Sha256](#codecsha256) |  |
 | [codec.Sha384](#codecsha384) |  |
 | [codec.Sha512](#codecsha512) |  |
 | [codec.UnescapePathUrl](#codecunescapepathurl) |  |
 | [codec.UnescapeQueryUrl](#codecunescapequeryurl) |  |




 



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


### codec.DecodeHtml



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


### codec.DecodeToHex



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


### codec.DecodeUrl



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


### codec.DoubleDecodeUrl



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


### codec.EncodeBase64



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


### codec.EncodeHtml



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


### codec.EncodeHtmlHex



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


### codec.EncodeToHex



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


### codec.EncodeToPrintable



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


### codec.EncodeUrl



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


### codec.EscapeHtml



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


### codec.EscapePathUrl



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


### codec.EscapeQueryUrl



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


### codec.Md5



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


### codec.Sha1



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


### codec.UnescapeQueryUrl



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





