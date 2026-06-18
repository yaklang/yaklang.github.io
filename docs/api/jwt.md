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
CommonWeakJWTKeys|([]string) []string{&#34;secret&#34;, &#34;...&#34;, &#34;012345678901234567890123456789XY&#34;, &#34;12345&#34;, &#34;12345678901234567890123456789012&#34;, &#34;61306132616264382D363136322D343163332D383364362D316366353539623436616663&#34;, &#34;61306132616264382d363136322d343163332d383364362d316366353539623436616663&#34;, &#34;872e4e50ce9990d8b041330c47c9ddd11bec6b503ae9386a99da8584e9bb12c4&#34;, &#34;8zUpiGcaPkNhNGi8oyrq&#34;, &#34;A43CC200A1BD292682598DA42DAA9FD14589F3D8BF832FFA206BE775259EE1EA&#34;, &#34;C2A4EB068AF8ABEF18D80B1689C7D785&#34;, &#34;GQDstcKsx0NHjPOuXOYg5MbeJ1XT0uFiwDVvVBrk&#34;, &#34;Hello, World!&#34;, &#34;J5hZTw1vtee0PGaoAuaW&#34;, &#34;[107 105 97 108 105]&#34;, &#34;kiali&#34;, &#34;My super secret key!&#34;, &#34;Original secret string&#34;, &#34;R9MyWaEoyiMYViVWo8Fk4TUGWiSoaW6U1nOqXri8_XU&#34;, &#34;RfxRP43BIKoSQ7P1GfeO&#34;, &#34;Secret key. You can use `mix guardian.gen.secret`to get one&#34;, &#34;SecretKey&#34;, &#34;Setec Astronomy&#34;, &#34;SignerTest&#34;, &#34;Super Secret Key&#34;, &#34;THE_SAME_HMAC_KEY&#34;, &#34;ThisIsMySuperSecret&#34;, &#34;XYZ&#34;, &#34;YOUR_HMAC_KEY&#34;, &#34;YoUR sUpEr S3krEt 1337 HMAC kEy HeRE&#34;, &#34;]V@IaC1%fU,DrVI&#34;, &#34;`mix guardian.gen.secret`&#34;, &#34;a43cc200a1bd292682598da42daa9fd14589f3d8bf832ffa206be775259ee1ea&#34;, &#34;banana&#34;, &#34;bar&#34;, &#34;c2a4eb068af8abef18d80b1689c7d785&#34;, &#34;client_secret_basic&#34;, &#34;custom&#34;, &#34;default-key&#34;, &#34;example-hmac-key&#34;, &#34;example_key&#34;, &#34;fe1a1915a379f3be5394b64d14794932&#34;, &#34;gZH75aKtMN3Yj0iPS4hcgUuTwjAzZr9C&#34;, &#34;guest&#34;, &#34;hard!to-guess_secret&#34;, &#34;has a van&#34;, &#34;her key&#34;, &#34;his key&#34;, &#34;key&#34;, &#34;key1&#34;, &#34;key2&#34;, &#34;key3&#34;, &#34;kkey&#34;, &#34;mix guardian.gen.secret&#34;, &#34;my key&#34;, &#34;my super secret password&#34;, &#34;my$ecretK3y&#34;, &#34;my_very_long_and_safe_secret_key&#34;, &#34;mypass&#34;, &#34;mysecretkey&#34;, &#34;mysupersecretkey&#34;, &#34;newSecret&#34;, &#34;password&#34;, &#34;secret-key&#34;, &#34;secret123&#34;, &#34;secret_key&#34;, &#34;secret_key_here&#34;, &#34;secretkey&#34;, &#34;shared-secret&#34;, &#34;shared_secret&#34;, &#34;shhhhh&#34;, &#34;shhhhhhared-secret&#34;, &#34;some-secret-string&#34;, &#34;super-secret-password&#34;, &#34;super_fancy_secret&#34;, &#34;supersecret&#34;, &#34;symmetric key&#34;, &#34;test-key&#34;, &#34;testing1&#34;, &#34;token&#34;, &#34;too many secrets&#34;, &#34;top secret&#34;, &#34;verysecret&#34;, &#34;wrong-secret&#34;, &#34;xxx&#34;, &#34;your-256-bit-secret&#34;, &#34;your-384-bit-secret&#34;, &#34;your-512-bit-secret&#34;, &#34;your-own-jwt-secret&#34;, &#34;your-top-secret-key&#34;, &#34;jwt&#34;, &#34;jwt-secret&#34;, &#34;hmac-secret&#34;, &#34;hs256-secret&#34;, &#34;AC8d83&amp;21Almnis710sds&#34;, &#34;123456&#34;}|

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

`JWSGenerate(alg string, claims any, key []byte) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| alg | `string` |   |
| claims | `any` |   |
| key | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


### JWSGenerateEx

#### 详细描述


#### 定义

`JWSGenerateEx(alg string, extraHeader any, claims any, key []byte) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| alg | `string` |   |
| extraHeader | `any` |   |
| claims | `any` |   |
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

`JWTGenerateEx(alg string, extraHeader any, claims any, key []byte) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| alg | `string` |   |
| extraHeader | `any` |   |
| claims | `any` |   |
| key | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


### Parse

#### 详细描述


#### 定义

`Parse(tokenStr string, keys ...string) (*Token, []byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tokenStr | `string` |   |
| keys | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*Token` |   |
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


