# jwt


|成员函数|函数描述/介绍|
|:------|:--------|
 | [jwt.AllAlgs](#jwtallalgs) | 返回所有当前支持的 JWT 签名算法 |
 | [jwt.JWSGenerate](#jwtjwsgenerate) | 生成一个 JWS 的 Token |
 | [jwt.JWTGenerate](#jwtjwtgenerate) | 生成 JWT Token |
 | [jwt.Parse](#jwtparse) | 解析 JWT 的 Token，使用默认弱口令，如果需要自定义 secretKey，可以在 v2 不定长参数中设置 |
 | [jwt.RemoveAlg](#jwtremovealg) | 把一个 JWT 的 Token 移除加密算法部分 |




 



## 函数定义

### jwt.AllAlgs

返回所有当前支持的 JWT 签名算法

#### 详细描述



#### 定义：

`func jwt.AllAlgs() return (r0: []string)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### jwt.JWSGenerate

生成一个 JWS 的 Token

#### 详细描述



#### 定义：

`func jwt.JWSGenerate(algName: string, params: any, secretKey: bytes) return (r0: string, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| algName | `string` |   |
| params | `any` |   |
| secretKey | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |
| r1 | `error` |   |


 
### jwt.JWTGenerate

生成 JWT Token

#### 详细描述



#### 定义：

`func jwt.JWTGenerate(alg: string, params: any, secretKey: bytes) return (token: string, err: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| alg | `string` |   |
| params | `any` |   |
| secretKey | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| token | `string` |   |
| err | `error` |   |


 
### jwt.Parse

解析 JWT 的 Token，使用默认弱口令，如果需要自定义 secretKey，可以在 v2 不定长参数中设置

#### 详细描述



#### 定义：

`func jwt.Parse(token: string, secretKeys ...string) return (params: *jwt.Token, secretKey: bytes, err: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| token | `string` |   |
| secretKeys | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| params | `*jwt.Token` |   |
| secretKey | `bytes` |   |
| err | `error` |   |


 
### jwt.RemoveAlg

把一个 JWT 的 Token 移除加密算法部分

#### 详细描述



#### 定义：

`func jwt.RemoveAlg(token: string) return (newToken: string, err: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| token | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| newToken | `string` |   |
| err | `error` |   |


 


