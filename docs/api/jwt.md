# jwt

|成员函数|函数描述/介绍|
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


