# jwt {#library-jwt}

`jwt` 库提供 JWT（JSON Web Token）的生成、解析与攻击辅助能力，用于接口鉴权测试，尤其是常见的 JWT 误用漏洞（如算法混淆、空算法、弱密钥）验证。

典型使用场景：

- 生成：`jwt.JWTGenerate` / `jwt.JWTGenerateEx`（自定义 header）按算法与密钥签发 Token，`jwt.JWSGenerate` / `jwt.JWSGenerateEx` 生成 JWS。
- 解析与攻击：`jwt.Parse` 解析 Token 取出 claims，`jwt.RemoveAlg` 构造 `alg=none` 攻击 Token，`jwt.AllAlgs` 列出支持的算法。

与相邻库的关系：`jwt` 与 `codec`（底层签名/编码）、`fuzz`/`poc`（携带篡改后的 Token 发包）配合，用于鉴权绕过类测试。

> 共 7 个函数、14 个实例

## 实例

|实例名|类型|说明|
|:--|:--|:--|
| ALG_ES256 | `string` | &#34;ES256&#34; |
| ALG_ES384 | `string` | &#34;ES384&#34; |
| ALG_ES512 | `string` | &#34;ES512&#34; |
| ALG_HS256 | `string` | &#34;HS256&#34; |
| ALG_HS384 | `string` | &#34;HS384&#34; |
| ALG_HS512 | `string` | &#34;HS512&#34; |
| ALG_NONE | `string` | &#34;None&#34; |
| ALG_PS256 | `string` | &#34;PS256&#34; |
| ALG_PS384 | `string` | &#34;PS384&#34; |
| ALG_PS512 | `string` | &#34;PS512&#34; |
| ALG_RS256 | `string` | &#34;RS256&#34; |
| ALG_RS384 | `string` | &#34;RS384&#34; |
| ALG_RS512 | `string` | &#34;RS512&#34; |
| CommonWeakJWTKeys | `[]string` | []string{&#34;secret&#34;, &#34;...&#34;, &#34;012345678901234567890123456789XY&#34;, &#34;12345&#34;, &#34;12345678901234567890123456789012&#34;, &#34;61306132616264382D363136322D343163332D383364362D316366353539623436616663&#34;, &#34;61306132616264382d363136322d343163332d383364362d316366353539623436616663&#34;, &#34;872e4e50ce9990d8b041330c47c9ddd11bec6b503ae9386a99da8584e9bb12c4&#34;, &#34;8zUpiGcaPkNhNGi8oyrq&#34;, &#34;A43CC200A1BD292682598DA42DAA9FD14589F3D8BF832FFA206BE775259EE1EA&#34;, &#34;C2A4EB068AF8ABEF18D80B1689C7D785&#34;, &#34;GQDstcKsx0NHjPOuXOYg5MbeJ1XT0uFiwDVvVBrk&#34;, &#34;Hello, World!&#34;, &#34;J5hZTw1vtee0PGaoAuaW&#34;, &#34;[107 105 97 108 105]&#34;, &#34;kiali&#34;, &#34;My super secret key!&#34;, &#34;Original secret string&#34;, &#34;R9MyWaEoyiMYViVWo8Fk4TUGWiSoaW6U1nOqXri8_XU&#34;, &#34;RfxRP43BIKoSQ7P1GfeO&#34;, &#34;Secret key. You can use `mix guardian.gen.secret`to get one&#34;, &#34;SecretKey&#34;, &#34;Setec Astronomy&#34;, &#34;SignerTest&#34;, &#34;Super Secret Key&#34;, &#34;THE_SAME_HMAC_KEY&#34;, &#34;ThisIsMySuperSecret&#34;, &#34;XYZ&#34;, &#34;YOUR_HMAC_KEY&#34;, &#34;YoUR sUpEr S3krEt 1337 HMAC kEy HeRE&#34;, &#34;]V@IaC1%fU,DrVI&#34;, &#34;`mix guardian.gen.secret`&#34;, &#34;a43cc200a1bd292682598da42daa9fd14589f3d8bf832ffa206be775259ee1ea&#34;, &#34;banana&#34;, &#34;bar&#34;, &#34;c2a4eb068af8abef18d80b1689c7d785&#34;, &#34;client_secret_basic&#34;, &#34;custom&#34;, &#34;default-key&#34;, &#34;example-hmac-key&#34;, &#34;example_key&#34;, &#34;fe1a1915a379f3be5394b64d14794932&#34;, &#34;gZH75aKtMN3Yj0iPS4hcgUuTwjAzZr9C&#34;, &#34;guest&#34;, &#34;hard!to-guess_secret&#34;, &#34;has a van&#34;, &#34;her key&#34;, &#34;his key&#34;, &#34;key&#34;, &#34;key1&#34;, &#34;key2&#34;, &#34;key3&#34;, &#34;kkey&#34;, &#34;mix guardian.gen.secret&#34;, &#34;my key&#34;, &#34;my super secret password&#34;, &#34;my$ecretK3y&#34;, &#34;my_very_long_and_safe_secret_key&#34;, &#34;mypass&#34;, &#34;mysecretkey&#34;, &#34;mysupersecretkey&#34;, &#34;newSecret&#34;, &#34;password&#34;, &#34;secret-key&#34;, &#34;secret123&#34;, &#34;secret_key&#34;, &#34;secret_key_here&#34;, &#34;secretkey&#34;, &#34;shared-secret&#34;, &#34;shared_secret&#34;, &#34;shhhhh&#34;, &#34;shhhhhhared-secret&#34;, &#34;some-secret-string&#34;, &#34;super-secret-password&#34;, &#34;super_fancy_secret&#34;, &#34;supersecret&#34;, &#34;symmetric key&#34;, &#34;test-key&#34;, &#34;testing1&#34;, &#34;token&#34;, &#34;too many secrets&#34;, &#34;top secret&#34;, &#34;verysecret&#34;, &#34;wrong-secret&#34;, &#34;xxx&#34;, &#34;your-256-bit-secret&#34;, &#34;your-384-bit-secret&#34;, &#34;your-512-bit-secret&#34;, &#34;your-own-jwt-secret&#34;, &#34;your-top-secret-key&#34;, &#34;jwt&#34;, &#34;jwt-secret&#34;, &#34;hmac-secret&#34;, &#34;hs256-secret&#34;, &#34;AC8d83&amp;21Almnis710sds&#34;, &#34;123456&#34;} |

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [jwt.AllAlgs](#allalgs) | - | `[]string` | AvailableJWTTokensAlgs 返回当前支持的所有 JWT 签名算法名称列表 |
| [jwt.JWSGenerate](#jwsgenerate) | `alg string, claims any, key []byte` | `string, error` | 使用指定签名算法和密钥，把 claims 生成为一个 JWS(typ=JWS) 字符串 |
| [jwt.JWSGenerateEx](#jwsgenerateex) | `alg string, extraHeader any, claims any, key []byte` | `string, error` | JWSGenerateExport 在 JWSGenerate 的基础上额外允许自定义头部(extraHeader) |
| [jwt.JWTGenerate](#jwtgenerate) | `alg string, i any, key []byte` | `string, error` | 使用指定签名算法和密钥，把 claims 生成为一个 JWT(typ=JWT) 字符串 |
| [jwt.JWTGenerateEx](#jwtgenerateex) | `alg string, extraHeader any, claims any, key []byte` | `string, error` | JWTGenerateExport 在 JWTGenerate 的基础上额外允许自定义 JWT 头部(extraHeader) |
| [jwt.RemoveAlg](#removealg) | `token string` | `string, error` | JwtChangeAlgToNone 把给定 JWT 的签名算法改写为 none(去除签名)，常用于 JWT 安全测试 |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [jwt.Parse](#parse) | `tokenStr string, keys ...string` | `*Token, []byte, error` | 解析 JWT 字符串，提取头部与载荷；当提供候选密钥时会尝试逐个验证签名 |

## 函数详情

### AllAlgs {#allalgs}

```go
AllAlgs() []string
```

AvailableJWTTokensAlgs 返回当前支持的所有 JWT 签名算法名称列表

在 yak 中通过 jwt.AllAlgs 调用

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]string` | 支持的签名算法名称字符串切片，如 ES256、HS256、RS256 等 |

**示例**

``````````````yak
algs = jwt.AllAlgs()
println(len(algs))   // OUT: 13
assert len(algs) >= 12, "should expose all supported jwt algorithms"
``````````````

---

### JWSGenerate {#jwsgenerate}

```go
JWSGenerate(alg string, claims any, key []byte) (string, error)
```

使用指定签名算法和密钥，把 claims 生成为一个 JWS(typ=JWS) 字符串

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| alg | `string` | 签名算法名称，如 jwt.ALG_HS256 |
| claims | `any` | 载荷 claims，通常是一个 map |
| key | `[]byte` | 签名密钥(字节数组) |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 生成的 JWS 字符串 |
| r2 | `error` | 错误信息，成功时为 nil |

**示例**

``````````````yak
// 用 HS256 生成 JWS 并解析校验往返一致
token = jwt.JWSGenerate(jwt.ALG_HS256, {"user": "admin"}, []byte("secret123"))~
_, key, err = jwt.Parse(token, "secret123")
assert err == nil, "valid token should parse without error"
println(string(key))   // OUT: secret123
assert string(key) == "secret123", "parse should recover the signing key"
``````````````

---

### JWSGenerateEx {#jwsgenerateex}

```go
JWSGenerateEx(alg string, extraHeader any, claims any, key []byte) (string, error)
```

JWSGenerateExport 在 JWSGenerate 的基础上额外允许自定义头部(extraHeader)

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| alg | `string` | 签名算法名称，如 jwt.ALG_HS256 |
| extraHeader | `any` | 附加的头部字段，通常是一个 map |
| claims | `any` | 载荷 claims，通常是一个 map |
| key | `[]byte` | 签名密钥(字节数组) |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 生成的 JWS 字符串 |
| r2 | `error` | 错误信息，成功时为 nil |

**示例**

``````````````yak
// 生成带自定义头部的 JWS 并解析校验往返一致
token = jwt.JWSGenerateEx(jwt.ALG_HS256, {"kid": "k1"}, {"user": "admin"}, []byte("secret123"))~
_, key, err = jwt.Parse(token, "secret123")
assert err == nil, "valid token should parse without error"
println(string(key))   // OUT: secret123
assert string(key) == "secret123", "parse should recover the signing key"
``````````````

---

### JWTGenerate {#jwtgenerate}

```go
JWTGenerate(alg string, i any, key []byte) (string, error)
```

使用指定签名算法和密钥，把 claims 生成为一个 JWT(typ=JWT) 字符串

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| alg | `string` | 签名算法名称，如 jwt.ALG_HS256、jwt.ALG_NONE 等 |
| i | `any` | 载荷 claims，通常是一个 map |
| key | `[]byte` | 签名密钥(字节数组)，HMAC 系列算法直接使用该密钥 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 生成的 JWT 字符串 |
| r2 | `error` | 错误信息，成功时为 nil |

**示例**

``````````````yak
// 用 HS256 算法和密钥生成 JWT，再用同一密钥解析校验，验证往返一致
token = jwt.JWTGenerate(jwt.ALG_HS256, {"user": "admin"}, []byte("secret123"))~
_, key, err = jwt.Parse(token, "secret123")
assert err == nil, "valid token should parse without error"
println(string(key))   // OUT: secret123
assert string(key) == "secret123", "parse should recover the signing key"
``````````````

---

### JWTGenerateEx {#jwtgenerateex}

```go
JWTGenerateEx(alg string, extraHeader any, claims any, key []byte) (string, error)
```

JWTGenerateExport 在 JWTGenerate 的基础上额外允许自定义 JWT 头部(extraHeader)

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| alg | `string` | 签名算法名称，如 jwt.ALG_HS256 |
| extraHeader | `any` | 附加的头部字段，通常是一个 map |
| claims | `any` | 载荷 claims，通常是一个 map |
| key | `[]byte` | 签名密钥(字节数组) |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 生成的 JWT 字符串 |
| r2 | `error` | 错误信息，成功时为 nil |

**示例**

``````````````yak
// 生成带自定义头部 kid 的 JWT，并用同一密钥解析校验往返一致
token = jwt.JWTGenerateEx(jwt.ALG_HS256, {"kid": "k1"}, {"user": "admin"}, []byte("secret123"))~
_, key, err = jwt.Parse(token, "secret123")
assert err == nil, "valid token should parse without error"
println(string(key))   // OUT: secret123
assert string(key) == "secret123", "parse should recover the signing key"
``````````````

---

### RemoveAlg {#removealg}

```go
RemoveAlg(token string) (string, error)
```

JwtChangeAlgToNone 把给定 JWT 的签名算法改写为 none(去除签名)，常用于 JWT 安全测试

在 yak 中通过 jwt.RemoveAlg 调用，保留原始头部与载荷，仅去掉签名部分

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| token | `string` | 原始 JWT 字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 算法被改写为 none 的新 JWT 字符串 |
| r2 | `error` | 错误信息，成功时为 nil |

**示例**

``````````````yak
// 把已有 token 改写为 alg:none 形式，验证生成结果可被再次解析出原始 claims
token = jwt.JWTGenerate(jwt.ALG_HS256, {"user": "admin"}, []byte("secret123"))~
noneToken = jwt.RemoveAlg(token)~
tokenObj, _, _ = jwt.Parse(noneToken)
assert tokenObj != nil, "alg:none token should still be parseable"
``````````````

---

## 可变参数函数详情

### Parse {#parse}

```go
Parse(tokenStr string, keys ...string) (*Token, []byte, error)
```

解析 JWT 字符串，提取头部与载荷；当提供候选密钥时会尝试逐个验证签名

在 yak 中通过 jwt.Parse 调用。不传密钥时仅做解析展示；传入正确密钥时返回该密钥

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| tokenStr | `string` | 待解析的 JWT 字符串 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| keys | `...string` | 可选的候选签名密钥列表，用于尝试验证 token 签名 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*Token` | 解析得到的 Token 对象，包含头部与载荷 |
| r2 | `[]byte` | 验证成功时命中的密钥(字节数组)，未命中时为 nil |
| r3 | `error` | 错误信息，解析或验证失败时非 nil |

**示例**

``````````````yak
// 先用密钥签发 token，再用同一密钥解析校验，验证往返一致
token = jwt.JWTGenerate(jwt.ALG_HS256, {"user": "admin"}, []byte("secret123"))~
tokenObj, key, err = jwt.Parse(token, "secret123")
assert err == nil, "valid token should parse without error"
println(string(key))   // OUT: secret123
assert string(key) == "secret123", "parse should recover the signing key"
``````````````

---

