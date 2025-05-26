# tls

|函数名|函数描述/介绍|
|:------|:--------|
| [tls.DecryptWithPkcs1v15](#decryptwithpkcs1v15) |DecryptWithPkcs1v15/RSADecryptWithPKCS1v15 使用 RSA私钥 和 PKCS#1 v1.5填充方式 解密给定的密文。  参数 raw 表示 RSA 私钥，支持以下格式：    - DER 编码的私钥（raw ASN.1 DER 字节流）    - Base64...|
| [tls.EncryptWithPkcs1v15](#encryptwithpkcs1v15) |EncryptWithPkcs1v15/RSAEncryptWithPKCS1v15 使用 RSA 公钥和 PKCS#1 v1.5 填充方式对给定数据进行加密。    参数 raw 表示 RSA 公钥，支持以下格式：    - DER 编码的公钥（raw ASN.1 DER 字节流）    - Ba...|
| [tls.GenerateRSA1024KeyPair](#generatersa1024keypair) |GenerateRSA1024KeyPair 生成1024位大小的RSA公私钥对，返回PEM格式公钥和私钥与错误  |
| [tls.GenerateRSA2048KeyPair](#generatersa2048keypair) |GenerateRSA2048KeyPair 生成2048位大小的RSA公私钥对，返回PEM格式公钥和私钥与错误  |
| [tls.GenerateRSA4096KeyPair](#generatersa4096keypair) |GenerateRSA4096KeyPair 生成4096位大小的RSA公私钥对，返回PEM格式公钥和私钥与错误  |
| [tls.GenerateRSAKeyPair](#generatersakeypair) |GenerateRSAKeyPair 根据给定的bit大小生成RSA公私钥对，返回PEM格式公钥和私钥与错误  |
| [tls.GenerateRootCA](#generaterootca) |GenerateRootCA 根据名字生成根证书和私钥，返回PEM格式证书和私钥与错误  |
| [tls.GenerateSM2KeyPair](#generatesm2keypair) |GenerateSM2KeyPair 生成SM2公私钥对，返回PEM格式公钥和私钥与错误  |
| [tls.Inspect](#inspect) |Inspect 检查目标地址的TLS证书，并返回其证书信息与错误  |
| [tls.InspectForceHttp1_1](#inspectforcehttp1_1) |InspectForceHttp1_1 检查目标地址的TLS证书，并返回其证书信息与错误，强制使用HTTP/1.1协议  |
| [tls.InspectForceHttp2](#inspectforcehttp2) |InspectForceHttp2 检查目标地址的TLS证书，并返回其证书信息与错误，强制使用HTTP/2协议  |
| [tls.SignClientCertAndKey](#signclientcertandkey) |SignClientCertAndKey 根据给定的CA证书和私钥，生成不包含认证的客户端证书和密钥，返回PEM格式的客户端证书和密钥与错误  |
| [tls.SignServerCertAndKey](#signservercertandkey) |SignServerCertAndKey 根据给定的CA证书和私钥，生成不包含认证的服务器证书和密钥，返回PEM格式的服务器证书和密钥与错误  |
| [tls.SignX509ClientCertAndKey](#signx509clientcertandkey) |SignX509ClientCertAndKey 根据给定的CA证书和私钥，生成客户端证书和密钥，返回PEM格式的客户端证书和密钥与错误  |
| [tls.SignX509ServerCertAndKey](#signx509servercertandkey) |SignX509ServerCertAndKey 根据给定的CA证书和私钥，生成服务器证书和密钥，返回PEM格式的服务器证书和密钥与错误  |


## 函数定义
### DecryptWithPkcs1v15

#### 详细描述
DecryptWithPkcs1v15/RSADecryptWithPKCS1v15 使用 RSA私钥 和 PKCS#1 v1.5填充方式 解密给定的密文。

参数 raw 表示 RSA 私钥，支持以下格式：

  - DER 编码的私钥（raw ASN.1 DER 字节流）

  - Base64 编码的 DER 格式（自动解码）

  - PEM 编码（包括带有 &#34;-----BEGIN PRIVATE KEY-----&#34; 或 &#34;-----BEGIN RSA PRIVATE KEY-----&#34; 的块）

  - Base64 编码的 PEM 格式（自动解码）



参数 data 是被加密后的数据（密文）

返回值是解密得到的原始明文，如果失败则返回错误。



Example:
```

		raw := `
		-----BEGIN PRIVATE KEY-----
		MIIEvQIBADANBgkqhkiG9w0BAQEFAASC...（略）
		-----END PRIVATE KEY-----
		`
		plaintext, err := DecryptWithPkcs1v15(raw, encryptedData)
	 	plaintext, err := RSADecryptWithPKCS1v15(raw, encryptedData)

```


#### 定义

`DecryptWithPkcs1v15(raw []byte, data any) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` |   |
| data | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### EncryptWithPkcs1v15

#### 详细描述
EncryptWithPkcs1v15/RSAEncryptWithPKCS1v15 使用 RSA 公钥和 PKCS#1 v1.5 填充方式对给定数据进行加密。



参数 raw 表示 RSA 公钥，支持以下格式：

  - DER 编码的公钥（raw ASN.1 DER 字节流）

  - Base64 编码的 DER 格式（自动解码）

  - PEM 编码（例如 &#34;-----BEGIN PUBLIC KEY-----&#34; 或 &#34;-----BEGIN RSA PUBLIC KEY-----&#34; 块）

  - Base64 编码的 PEM 格式（自动解码）



参数 data 是要加密的明文数据，可以是 []byte、string 或其他可转换为字节数组的类型。

返回值是加密后的密文（字节切片），如果加密失败则返回错误。



Example:
```

		raw := `
		-----BEGIN PUBLIC KEY-----
		MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAn...（略）
		-----END PUBLIC KEY-----
		`
		ciphertext, err := EncryptWithPkcs1v15(raw, "hello world")
	 ciphertext, err := RSAEncryptWithPKCS1v15(raw, "hello world")

```


#### 定义

`EncryptWithPkcs1v15(raw []byte, data any) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` |   |
| data | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### GenerateRSA1024KeyPair

#### 详细描述
GenerateRSA1024KeyPair 生成1024位大小的RSA公私钥对，返回PEM格式公钥和私钥与错误

Example:
```
pub, pri, err := tls.GenerateRSA1024KeyPair()
```


#### 定义

`GenerateRSA1024KeyPair() ([]byte, []byte, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `[]byte` |   |
| r3 | `error` |   |


### GenerateRSA2048KeyPair

#### 详细描述
GenerateRSA2048KeyPair 生成2048位大小的RSA公私钥对，返回PEM格式公钥和私钥与错误

Example:
```
pub, pri, err := tls.GenerateRSA2048KeyPair()
```


#### 定义

`GenerateRSA2048KeyPair() ([]byte, []byte, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `[]byte` |   |
| r3 | `error` |   |


### GenerateRSA4096KeyPair

#### 详细描述
GenerateRSA4096KeyPair 生成4096位大小的RSA公私钥对，返回PEM格式公钥和私钥与错误

Example:
```
pub, pri, err := tls.GenerateRSA4096KeyPair()
```


#### 定义

`GenerateRSA4096KeyPair() ([]byte, []byte, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `[]byte` |   |
| r3 | `error` |   |


### GenerateRSAKeyPair

#### 详细描述
GenerateRSAKeyPair 根据给定的bit大小生成RSA公私钥对，返回PEM格式公钥和私钥与错误

Example:
```
pub, pri, err := tls.GenerateRSAKeyPair(2048)
```


#### 定义

`GenerateRSAKeyPair(bitSize int) ([]byte, []byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| bitSize | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `[]byte` |   |
| r3 | `error` |   |


### GenerateRootCA

#### 详细描述
GenerateRootCA 根据名字生成根证书和私钥，返回PEM格式证书和私钥与错误

Example:
```
cert, key, err := tls.GenerateRootCA("yaklang.io")
```


#### 定义

`GenerateRootCA(commonName string) (ca []byte, key []byte, err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| commonName | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| ca | `[]byte` |   |
| key | `[]byte` |   |
| err | `error` |   |


### GenerateSM2KeyPair

#### 详细描述
GenerateSM2KeyPair 生成SM2公私钥对，返回PEM格式公钥和私钥与错误

Example:
```
pub, pri, err := tls.GenerateSM2KeyPair()
```


#### 定义

`GenerateSM2KeyPair() ([]byte, []byte, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `[]byte` |   |
| r3 | `error` |   |


### Inspect

#### 详细描述
Inspect 检查目标地址的TLS证书，并返回其证书信息与错误

Example:
```
cert, err := tls.Inspect("yaklang.io:443")
```


#### 定义

`Inspect(addr string) ([]*TLSInspectResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| addr | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*TLSInspectResult` |   |
| r2 | `error` |   |


### InspectForceHttp1_1

#### 详细描述
InspectForceHttp1_1 检查目标地址的TLS证书，并返回其证书信息与错误，强制使用HTTP/1.1协议

Example:
```
cert, err := tls.InspectForceHttp1_1("yaklang.io:443")
```


#### 定义

`InspectForceHttp1_1(addr string) ([]*TLSInspectResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| addr | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*TLSInspectResult` |   |
| r2 | `error` |   |


### InspectForceHttp2

#### 详细描述
InspectForceHttp2 检查目标地址的TLS证书，并返回其证书信息与错误，强制使用HTTP/2协议

Example:
```
cert, err := tls.InspectForceHttp2("yaklang.io:443")
```


#### 定义

`InspectForceHttp2(addr string) ([]*TLSInspectResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| addr | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*TLSInspectResult` |   |
| r2 | `error` |   |


### SignClientCertAndKey

#### 详细描述
SignClientCertAndKey 根据给定的CA证书和私钥，生成不包含认证的客户端证书和密钥，返回PEM格式的客户端证书和密钥与错误

Example:
```
ca, key, err = tls.GenerateRootCA("yaklang.io")
cert, sKey, err = tls.SignClientCertAndKey(ca, key)
```


#### 定义

`SignClientCertAndKey(ca []byte, key []byte) ([]byte, []byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ca | `[]byte` |   |
| key | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `[]byte` |   |
| r3 | `error` |   |


### SignServerCertAndKey

#### 详细描述
SignServerCertAndKey 根据给定的CA证书和私钥，生成不包含认证的服务器证书和密钥，返回PEM格式的服务器证书和密钥与错误

Example:
```
ca, key, err = tls.GenerateRootCA("yaklang.io")
cert, sKey, err = tls.SignServerCertAndKey(ca, key)
```


#### 定义

`SignServerCertAndKey(ca []byte, key []byte) (cert []byte, sKey []byte, _ error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ca | `[]byte` |   |
| key | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| cert | `[]byte` |   |
| sKey | `[]byte` |   |
| _ | `error` |   |


### SignX509ClientCertAndKey

#### 详细描述
SignX509ClientCertAndKey 根据给定的CA证书和私钥，生成客户端证书和密钥，返回PEM格式的客户端证书和密钥与错误

Example:
```
ca, key, err = tls.GenerateRootCA("yaklang.io")
cert, sKey, err = tls.SignX509ClientCertAndKey(ca, key)
```


#### 定义

`SignX509ClientCertAndKey(ca []byte, key []byte) ([]byte, []byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ca | `[]byte` |   |
| key | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `[]byte` |   |
| r3 | `error` |   |


### SignX509ServerCertAndKey

#### 详细描述
SignX509ServerCertAndKey 根据给定的CA证书和私钥，生成服务器证书和密钥，返回PEM格式的服务器证书和密钥与错误

Example:
```
ca, key, err = tls.GenerateRootCA("yaklang.io")
cert, sKey, err = tls.SignX509ServerCertAndKey(ca, key)
```


#### 定义

`SignX509ServerCertAndKey(ca []byte, key []byte) (cert []byte, sKey []byte, _ error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ca | `[]byte` |   |
| key | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| cert | `[]byte` |   |
| sKey | `[]byte` |   |
| _ | `error` |   |


