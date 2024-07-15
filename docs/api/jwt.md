# jwt

|实例名|实例描述|
|:------|:--------|
ALG_ES256|(string) &#34;ES256&#34;|
ALG_ES384|(string) &#34;ES384&#34;|
ALG_ES512|(string) &#34;ES512&#34;|
ALG_HS256|(string) &#34;HS256&#34;|
ALG_HS384|(string) &#34;HS384&#34;|
ALG_HS512|(string) &#34;HS512&#34;|
ALG_NONE|(string) &#34;None&#34;|
ALG_PS256|(string) &#34;PS256&#34;|
ALG_PS384|(string) &#34;PS384&#34;|
ALG_PS512|(string) &#34;PS512&#34;|
ALG_RS256|(string) &#34;RS256&#34;|
ALG_RS384|(string) &#34;RS384&#34;|
ALG_RS512|(string) &#34;RS512&#34;|

|函数名|函数描述/介绍|
|:------|:--------|
| [jwt.AllAlgs](#allalgs) ||
| [jwt.JWSGenerate](#jwsgenerate) ||
| [jwt.JWSGenerateEx](#jwsgenerateex) ||
| [jwt.JWTGenerate](#jwtgenerate) ||
| [jwt.JWTGenerateEx](#jwtgenerateex) ||
| [jwt.Parse](#parse) ||
| [jwt.RemoveAlg](#removealg) ||


## 函数定义
### AllAlgs

#### 详细描述


#### 定义

`AllAlgs() []string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### JWSGenerate

#### 详细描述


#### 定义

`JWSGenerate(alg string, i any, key []byte) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| alg | `string` |   |
| i | `any` |   |
| key | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


### JWSGenerateEx

#### 详细描述


#### 定义

`JWSGenerateEx(alg string, extraHeader any, i any, key []byte) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| alg | `string` |   |
| extraHeader | `any` |   |
| i | `any` |   |
| key | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


### JWTGenerate

#### 详细描述


#### 定义

`JWTGenerate(alg string, i any, key []byte) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| alg | `string` |   |
| i | `any` |   |
| key | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


### JWTGenerateEx

#### 详细描述


#### 定义

`JWTGenerateEx(alg string, extraHeader any, i any, key []byte) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| alg | `string` |   |
| extraHeader | `any` |   |
| i | `any` |   |
| key | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


### Parse

#### 详细描述


#### 定义

`Parse(tokenStr string, keys ...string) (*jwt.Token, []byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tokenStr | `string` |   |
| keys | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*jwt.Token` |   |
| r2 | `[]byte` |   |
| r3 | `error` |   |


### RemoveAlg

#### 详细描述


#### 定义

`RemoveAlg(token string) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| token | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


