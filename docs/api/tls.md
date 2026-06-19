# tls

|实例名|实例描述|
|:------|:--------|
GMTLS_ECC_SM4_CBC_SM3|(int) 57363|
GMTLS_ECC_SM4_GCM_SM3|(int) 57427|
GMTLS_ECDHE_SM4_CBC_SM3|(int) 57361|
GMTLS_ECDHE_SM4_GCM_SM3|(int) 57425|

|函数名|函数描述/介绍|
|:------|:--------|
| [tls.DecryptWithPkcs1v15](#decryptwithpkcs1v15) |DecryptWithPkcs1v15/RSADecryptWithPKCS1v15 使用 RSA私钥 和 PKCS#1 v1.5填充方式 解密给定的密文。 参数 raw 表示 RSA 私钥，支持以下格式： - DER 编码的私钥（raw ASN.1 DER 字节流） - Base64 编码的 DE...|
| [tls.EncryptWithPkcs1v15](#encryptwithpkcs1v15) |EncryptWithPkcs1v15/RSAEncryptWithPKCS1v15 使用 RSA 公钥和 PKCS#1 v1.5 填充方式对给定数据进行加密。 参数: - raw: RSA 公钥（支持 DER/PEM/Base64 等格式） - data: 要加密的明文数据（[]byte、stri...|
| [tls.GenerateClientCert](#generateclientcert) |GenerateClientCert 使用给定的 CA 签发一个客户端证书 参数: - caCertPEM: PEM 编码的 CA 证书 - caKeyPEM: PEM 编码的 CA 私钥 - opts: 可选证书选项，例如 tls.commonName 返回值: - PEM 编码的客户端证书 - ...|
| [tls.GenerateRSA1024KeyPair](#generatersa1024keypair) |GenerateRSA1024KeyPair 生成 1024 位大小的 RSA 公私钥对 返回值: - PEM 格式的公钥 - PEM 格式的私钥 - 错误信息，生成失败时返回非空|
| [tls.GenerateRSA2048KeyPair](#generatersa2048keypair) |GenerateRSA2048KeyPair 生成 2048 位大小的 RSA 公私钥对 返回值: - PEM 格式的公钥 - PEM 格式的私钥 - 错误信息，生成失败时返回非空|
| [tls.GenerateRSA4096KeyPair](#generatersa4096keypair) |GenerateRSA4096KeyPair 生成 4096 位大小的 RSA 公私钥对 返回值: - PEM 格式的公钥 - PEM 格式的私钥 - 错误信息，生成失败时返回非空|
| [tls.GenerateRSAKeyPair](#generatersakeypair) |GenerateRSAKeyPair 根据给定的位大小生成 RSA 公私钥对 参数: - bitSize: 密钥位数，如 1024、2048、4096 返回值: - PEM 格式的公钥 - PEM 格式的私钥 - 错误信息，生成失败时返回非空|
| [tls.GenerateRootCA](#generaterootca) |GenerateRootCA 根据名字生成根证书和私钥 参数: - commonName: 证书的通用名称（CN），同时用作组织名 - opts: 可选的证书选项，例如 tls.validity、tls.alternativeDNS 返回值: - PEM 格式的根证书 - PEM 格式的私钥 - 错...|
| [tls.GenerateSM2KeyPair](#generatesm2keypair) |GenerateSM2KeyPair 生成 SM2 国密公私钥对 返回值: - PEM 格式的公钥 - PEM 格式的私钥 - 错误信息，生成失败时返回非空|
| [tls.GenerateServerCert](#generateservercert) |GenerateServerCert 使用给定的 CA 签发一个服务器证书 参数: - caCertPEM: PEM 编码的 CA 证书 - caKeyPEM: PEM 编码的 CA 私钥 - opts: 可选证书选项，例如 tls.commonName、tls.alternativeDNS 返回值...|
| [tls.Inspect](#inspect) |Inspect 检查目标地址的 TLS 证书，支持检测普通 TLS 和国密 TLS(GMTLS) 证书，自动尝试多种握手方式并去重返回结果 参数: - addr: 目标地址，格式为 host:port 返回值: - TLS 证书检查结果列表 - 错误信息，连接或握手失败时返回非空|
| [tls.InspectForceHttp1_1](#inspectforcehttp1_1) |InspectForceHttp1_1 检查目标地址的 TLS 证书，强制使用 HTTP/1.1 协议，支持检测普通 TLS 和国密 TLS(GMTLS) 证书 参数: - addr: 目标地址，格式为 host:port 返回值: - TLS 证书检查结果列表 - 错误信息，连接或握手失败时返回非...|
| [tls.InspectForceHttp2](#inspectforcehttp2) |InspectForceHttp2 检查目标地址的 TLS 证书，强制使用 HTTP/2 协议，支持检测普通 TLS 和国密 TLS(GMTLS) 证书 参数: - addr: 目标地址，格式为 host:port 返回值: - TLS 证书检查结果列表 - 错误信息，连接或握手失败时返回非空|
| [tls.SignClientCertAndKey](#signclientcertandkey) |SignClientCertAndKey 根据给定的 CA 证书和私钥，生成不包含认证的客户端证书和密钥 参数: - ca: PEM 格式的 CA 证书 - key: PEM 格式的 CA 私钥 返回值: - PEM 格式的客户端证书 - PEM 格式的客户端私钥 - 错误信息，签发失败时返回非空|
| [tls.SignServerCertAndKey](#signservercertandkey) |SignServerCertAndKey 根据给定的 CA 证书和私钥，生成不包含客户端认证的服务器证书和密钥 参数: - ca: PEM 格式的 CA 证书 - key: PEM 格式的 CA 私钥 返回值: - PEM 格式的服务器证书 - PEM 格式的服务器私钥 - 错误信息，签发失败时返回...|
| [tls.SignX509ClientCertAndKey](#signx509clientcertandkey) |SignX509ClientCertAndKey 根据给定的 CA 证书和私钥，生成带认证的客户端证书和密钥 参数: - ca: PEM 格式的 CA 证书 - key: PEM 格式的 CA 私钥 返回值: - PEM 格式的客户端证书 - PEM 格式的客户端私钥 - 错误信息，签发失败时返回非...|
| [tls.SignX509ServerCertAndKey](#signx509servercertandkey) |SignX509ServerCertAndKey 根据给定的 CA 证书和私钥，生成带客户端认证的服务器证书和密钥 参数: - ca: PEM 格式的 CA 证书 - key: PEM 格式的 CA 私钥 返回值: - PEM 格式的服务器证书 - PEM 格式的服务器私钥 - 错误信息，签发失败时...|
| [tls.alternativeDNS](#alternativedns) |alternativeDNS 是一个证书选项，用于添加一个或多个 DNS 备用名称 (SAN) 参数: - dnsNames: 一个或多个 DNS 名称 返回值: - 一个证书选项，作为可变参数传入 tls.GenerateRootCA / tls.GenerateServerCert 等|
| [tls.alternativeIP](#alternativeip) |alternativeIP 是一个证书选项，用于添加一个或多个字符串格式的 IP 备用名称 (SAN)，无效的 IP 字符串将被忽略 参数: - ipStrings: 一个或多个 IP 地址字符串 返回值: - 一个证书选项，作为可变参数传入 tls.GenerateRootCA / tls.Gen...|
| [tls.commonName](#commonname) |commonName 是一个证书选项，用于设置证书的通用名称 (Common Name) 参数: - cn: 通用名称 返回值: - 一个证书选项，作为可变参数传入 tls.GenerateRootCA / tls.GenerateServerCert 等|
| [tls.country](#country) |country 是一个证书选项，用于设置证书的国家 (Country) 参数: - country: 国家代码或名称 返回值: - 一个证书选项，作为可变参数传入 tls.GenerateRootCA / tls.GenerateServerCert 等|
| [tls.locality](#locality) |locality 是一个证书选项，用于设置证书的城市/地区 (Locality) 参数: - locality: 城市/地区名称 返回值: - 一个证书选项，作为可变参数传入 tls.GenerateRootCA / tls.GenerateServerCert 等|
| [tls.notAfter](#notafter) |notAfter 是一个证书选项，用于设置证书的过期时间 参数: - t: 过期时间点 返回值: - 一个证书选项，作为可变参数传入 tls.GenerateRootCA / tls.GenerateServerCert 等|
| [tls.notBefore](#notbefore) |notBefore 是一个证书选项，用于设置证书的生效时间 参数: - t: 生效时间点 返回值: - 一个证书选项，作为可变参数传入 tls.GenerateRootCA / tls.GenerateServerCert 等|
| [tls.organization](#organization) |organization 是一个证书选项，用于设置证书的组织 (Organization) 参数: - org: 组织名称 返回值: - 一个证书选项，作为可变参数传入 tls.GenerateRootCA / tls.GenerateServerCert 等|
| [tls.privateKeyFromFile](#privatekeyfromfile) |privateKeyFromFile 是一个证书选项，用于从文件加载已有的私钥来签发证书，而不是自动生成新私钥 参数: - path: 私钥文件路径 返回值: - 一个证书选项，作为可变参数传入 tls.GenerateServerCert / tls.GenerateClientCert 等|
| [tls.privateKeyFromRaw](#privatekeyfromraw) |privateKeyFromRaw 是一个证书选项，用于从内存中的字节数据加载已有的私钥来签发证书，而不是自动生成新私钥 参数: - key: PEM 格式的私钥字节数组 返回值: - 一个证书选项，作为可变参数传入 tls.GenerateServerCert / tls.GenerateClie...|
| [tls.province](#province) |province 是一个证书选项，用于设置证书的省/州 (Province) 参数: - province: 省/州名称 返回值: - 一个证书选项，作为可变参数传入 tls.GenerateRootCA / tls.GenerateServerCert 等|
| [tls.validity](#validity) |validity 是一个证书选项，用于设置证书的有效期（从现在开始，持续时间为 duration） 参数: - duration: 有效期时长 返回值: - 一个证书选项，作为可变参数传入 tls.GenerateRootCA / tls.GenerateServerCert 等|


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



参数:

  - raw: RSA 私钥（支持 DER/PEM/Base64 等格式）

  - data: 要解密的密文数据（[]byte、string 等）



返回值:

  - 解密得到的明文字节数组

  - 错误信息，解密失败时返回非空




Example:

``````````````yak
raw := `
-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASC...（略）
-----END PRIVATE KEY-----
`
plaintext, err := DecryptWithPkcs1v15(raw, encryptedData)
	plaintext, err := RSADecryptWithPKCS1v15(raw, encryptedData)
``````````````


#### 定义

`DecryptWithPkcs1v15(raw []byte, data any) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` | RSA 私钥（支持 DER/PEM/Base64 等格式） |
| data | `any` | 要解密的密文数据（[]byte、string 等） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 解密得到的明文字节数组 |
| r2 | `error` | 错误信息，解密失败时返回非空 |


### EncryptWithPkcs1v15

#### 详细描述
EncryptWithPkcs1v15/RSAEncryptWithPKCS1v15 使用 RSA 公钥和 PKCS#1 v1.5 填充方式对给定数据进行加密。



参数:

  - raw: RSA 公钥（支持 DER/PEM/Base64 等格式）

  - data: 要加密的明文数据（[]byte、string 等）



返回值:

  - 加密后的密文字节数组

  - 错误信息，加密失败时返回非空



参数 raw 表示 RSA 公钥，支持以下格式：

  - DER 编码的公钥（raw ASN.1 DER 字节流）

  - Base64 编码的 DER 格式（自动解码）

  - PEM 编码（例如 &#34;-----BEGIN PUBLIC KEY-----&#34; 或 &#34;-----BEGIN RSA PUBLIC KEY-----&#34; 块）

  - Base64 编码的 PEM 格式（自动解码）



参数 data 是要加密的明文数据，可以是 []byte、string 或其他可转换为字节数组的类型。

返回值是加密后的密文（字节切片），如果加密失败则返回错误。




Example:

``````````````yak
raw := `
-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAn...（略）
-----END PUBLIC KEY-----
`
ciphertext, err := EncryptWithPkcs1v15(raw, "hello world")
ciphertext, err := RSAEncryptWithPKCS1v15(raw, "hello world")
``````````````


#### 定义

`EncryptWithPkcs1v15(raw []byte, data any) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` | RSA 公钥（支持 DER/PEM/Base64 等格式） |
| data | `any` | 要加密的明文数据（[]byte、string 等） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | 加密后的密文字节数组 |
| r2 | `error` | 错误信息，加密失败时返回非空 |


### GenerateClientCert

#### 详细描述
GenerateClientCert 使用给定的 CA 签发一个客户端证书

参数:

  - caCertPEM: PEM 编码的 CA 证书

  - caKeyPEM: PEM 编码的 CA 私钥

  - opts: 可选证书选项，例如 tls.commonName



返回值:

  - PEM 编码的客户端证书

  - PEM 编码的客户端私钥

  - 错误信息，签发失败时返回非空




Example:

``````````````yak
ca, caKey = tls.GenerateRootCA("ca")~
cert, key = tls.GenerateClientCert(ca, caKey, tls.commonName("client"))~
``````````````


#### 定义

`GenerateClientCert(caCertPEM []byte, caKeyPEM []byte, opts ...CertOption) ([]byte, []byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| caCertPEM | `[]byte` | PEM 编码的 CA 证书 |
| caKeyPEM | `[]byte` | PEM 编码的 CA 私钥 |
| opts | `...CertOption` | 可选证书选项，例如 tls.commonName |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | PEM 编码的客户端证书 |
| r2 | `[]byte` | PEM 编码的客户端私钥 |
| r3 | `error` | 错误信息，签发失败时返回非空 |


### GenerateRSA1024KeyPair

#### 详细描述
GenerateRSA1024KeyPair 生成 1024 位大小的 RSA 公私钥对

返回值:

  - PEM 格式的公钥

  - PEM 格式的私钥

  - 错误信息，生成失败时返回非空




Example:

``````````````yak
pub, pri, err := tls.GenerateRSA1024KeyPair()
``````````````


#### 定义

`GenerateRSA1024KeyPair() ([]byte, []byte, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | PEM 格式的公钥 |
| r2 | `[]byte` | PEM 格式的私钥 |
| r3 | `error` | 错误信息，生成失败时返回非空 |


### GenerateRSA2048KeyPair

#### 详细描述
GenerateRSA2048KeyPair 生成 2048 位大小的 RSA 公私钥对

返回值:

  - PEM 格式的公钥

  - PEM 格式的私钥

  - 错误信息，生成失败时返回非空




Example:

``````````````yak
pub, pri, err := tls.GenerateRSA2048KeyPair()
``````````````


#### 定义

`GenerateRSA2048KeyPair() ([]byte, []byte, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | PEM 格式的公钥 |
| r2 | `[]byte` | PEM 格式的私钥 |
| r3 | `error` | 错误信息，生成失败时返回非空 |


### GenerateRSA4096KeyPair

#### 详细描述
GenerateRSA4096KeyPair 生成 4096 位大小的 RSA 公私钥对

返回值:

  - PEM 格式的公钥

  - PEM 格式的私钥

  - 错误信息，生成失败时返回非空




Example:

``````````````yak
pub, pri, err := tls.GenerateRSA4096KeyPair()
``````````````


#### 定义

`GenerateRSA4096KeyPair() ([]byte, []byte, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | PEM 格式的公钥 |
| r2 | `[]byte` | PEM 格式的私钥 |
| r3 | `error` | 错误信息，生成失败时返回非空 |


### GenerateRSAKeyPair

#### 详细描述
GenerateRSAKeyPair 根据给定的位大小生成 RSA 公私钥对

参数:

  - bitSize: 密钥位数，如 1024、2048、4096



返回值:

  - PEM 格式的公钥

  - PEM 格式的私钥

  - 错误信息，生成失败时返回非空




Example:

``````````````yak
pub, pri, err := tls.GenerateRSAKeyPair(2048)
``````````````


#### 定义

`GenerateRSAKeyPair(bitSize int) ([]byte, []byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| bitSize | `int` | 密钥位数，如 1024、2048、4096 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | PEM 格式的公钥 |
| r2 | `[]byte` | PEM 格式的私钥 |
| r3 | `error` | 错误信息，生成失败时返回非空 |


### GenerateRootCA

#### 详细描述
GenerateRootCA 根据名字生成根证书和私钥

参数:

  - commonName: 证书的通用名称（CN），同时用作组织名

  - opts: 可选的证书选项，例如 tls.validity、tls.alternativeDNS



返回值:

  - PEM 格式的根证书

  - PEM 格式的私钥

  - 错误信息，生成失败时返回非空




Example:

``````````````yak
cert, key, err := tls.GenerateRootCA("yaklang.io")
``````````````


#### 定义

`GenerateRootCA(commonName string, opts ...tlsutils.CertOption) (ca []byte, key []byte, err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| commonName | `string` | 证书的通用名称（CN），同时用作组织名 |
| opts | `...tlsutils.CertOption` | 可选的证书选项，例如 tls.validity、tls.alternativeDNS |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| ca | `[]byte` | PEM 格式的根证书 |
| key | `[]byte` | PEM 格式的私钥 |
| err | `error` | 错误信息，生成失败时返回非空 |


### GenerateSM2KeyPair

#### 详细描述
GenerateSM2KeyPair 生成 SM2 国密公私钥对

返回值:

  - PEM 格式的公钥

  - PEM 格式的私钥

  - 错误信息，生成失败时返回非空




Example:

``````````````yak
pub, pri, err := tls.GenerateSM2KeyPair()
``````````````


#### 定义

`GenerateSM2KeyPair() ([]byte, []byte, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | PEM 格式的公钥 |
| r2 | `[]byte` | PEM 格式的私钥 |
| r3 | `error` | 错误信息，生成失败时返回非空 |


### GenerateServerCert

#### 详细描述
GenerateServerCert 使用给定的 CA 签发一个服务器证书

参数:

  - caCertPEM: PEM 编码的 CA 证书

  - caKeyPEM: PEM 编码的 CA 私钥

  - opts: 可选证书选项，例如 tls.commonName、tls.alternativeDNS



返回值:

  - PEM 编码的服务器证书

  - PEM 编码的服务器私钥

  - 错误信息，签发失败时返回非空




Example:

``````````````yak
ca, caKey = tls.GenerateRootCA("ca")~
cert, key = tls.GenerateServerCert(ca, caKey, tls.commonName("example.com"))~
``````````````


#### 定义

`GenerateServerCert(caCertPEM []byte, caKeyPEM []byte, opts ...CertOption) ([]byte, []byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| caCertPEM | `[]byte` | PEM 编码的 CA 证书 |
| caKeyPEM | `[]byte` | PEM 编码的 CA 私钥 |
| opts | `...CertOption` | 可选证书选项，例如 tls.commonName、tls.alternativeDNS |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | PEM 编码的服务器证书 |
| r2 | `[]byte` | PEM 编码的服务器私钥 |
| r3 | `error` | 错误信息，签发失败时返回非空 |


### Inspect

#### 详细描述
Inspect 检查目标地址的 TLS 证书，支持检测普通 TLS 和国密 TLS(GMTLS) 证书，自动尝试多种握手方式并去重返回结果

参数:

  - addr: 目标地址，格式为 host:port



返回值:

  - TLS 证书检查结果列表

  - 错误信息，连接或握手失败时返回非空




Example:

``````````````yak
cert, err := tls.Inspect("yaklang.io:443")
``````````````


#### 定义

`Inspect(addr string) ([]*TLSInspectResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| addr | `string` | 目标地址，格式为 host:port |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*TLSInspectResult` | TLS 证书检查结果列表 |
| r2 | `error` | 错误信息，连接或握手失败时返回非空 |


### InspectForceHttp1_1

#### 详细描述
InspectForceHttp1_1 检查目标地址的 TLS 证书，强制使用 HTTP/1.1 协议，支持检测普通 TLS 和国密 TLS(GMTLS) 证书

参数:

  - addr: 目标地址，格式为 host:port



返回值:

  - TLS 证书检查结果列表

  - 错误信息，连接或握手失败时返回非空




Example:

``````````````yak
cert, err := tls.InspectForceHttp1_1("yaklang.io:443")
``````````````


#### 定义

`InspectForceHttp1_1(addr string) ([]*TLSInspectResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| addr | `string` | 目标地址，格式为 host:port |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*TLSInspectResult` | TLS 证书检查结果列表 |
| r2 | `error` | 错误信息，连接或握手失败时返回非空 |


### InspectForceHttp2

#### 详细描述
InspectForceHttp2 检查目标地址的 TLS 证书，强制使用 HTTP/2 协议，支持检测普通 TLS 和国密 TLS(GMTLS) 证书

参数:

  - addr: 目标地址，格式为 host:port



返回值:

  - TLS 证书检查结果列表

  - 错误信息，连接或握手失败时返回非空




Example:

``````````````yak
cert, err := tls.InspectForceHttp2("yaklang.io:443")
``````````````


#### 定义

`InspectForceHttp2(addr string) ([]*TLSInspectResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| addr | `string` | 目标地址，格式为 host:port |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*TLSInspectResult` | TLS 证书检查结果列表 |
| r2 | `error` | 错误信息，连接或握手失败时返回非空 |


### SignClientCertAndKey

#### 详细描述
SignClientCertAndKey 根据给定的 CA 证书和私钥，生成不包含认证的客户端证书和密钥

参数:

  - ca: PEM 格式的 CA 证书

  - key: PEM 格式的 CA 私钥



返回值:

  - PEM 格式的客户端证书

  - PEM 格式的客户端私钥

  - 错误信息，签发失败时返回非空




Example:

``````````````yak
ca, key, err = tls.GenerateRootCA("yaklang.io")
cert, sKey, err = tls.SignClientCertAndKey(ca, key)
``````````````


#### 定义

`SignClientCertAndKey(ca []byte, key []byte) ([]byte, []byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ca | `[]byte` | PEM 格式的 CA 证书 |
| key | `[]byte` | PEM 格式的 CA 私钥 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | PEM 格式的客户端证书 |
| r2 | `[]byte` | PEM 格式的客户端私钥 |
| r3 | `error` | 错误信息，签发失败时返回非空 |


### SignServerCertAndKey

#### 详细描述
SignServerCertAndKey 根据给定的 CA 证书和私钥，生成不包含客户端认证的服务器证书和密钥

参数:

  - ca: PEM 格式的 CA 证书

  - key: PEM 格式的 CA 私钥



返回值:

  - PEM 格式的服务器证书

  - PEM 格式的服务器私钥

  - 错误信息，签发失败时返回非空




Example:

``````````````yak
ca, key, err = tls.GenerateRootCA("yaklang.io")
cert, sKey, err = tls.SignServerCertAndKey(ca, key)
``````````````


#### 定义

`SignServerCertAndKey(ca []byte, key []byte) (cert []byte, sKey []byte, _ error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ca | `[]byte` | PEM 格式的 CA 证书 |
| key | `[]byte` | PEM 格式的 CA 私钥 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| cert | `[]byte` | PEM 格式的服务器证书 |
| sKey | `[]byte` | PEM 格式的服务器私钥 |
| _ | `error` | 错误信息，签发失败时返回非空 |


### SignX509ClientCertAndKey

#### 详细描述
SignX509ClientCertAndKey 根据给定的 CA 证书和私钥，生成带认证的客户端证书和密钥

参数:

  - ca: PEM 格式的 CA 证书

  - key: PEM 格式的 CA 私钥



返回值:

  - PEM 格式的客户端证书

  - PEM 格式的客户端私钥

  - 错误信息，签发失败时返回非空




Example:

``````````````yak
ca, key, err = tls.GenerateRootCA("yaklang.io")
cert, sKey, err = tls.SignX509ClientCertAndKey(ca, key)
``````````````


#### 定义

`SignX509ClientCertAndKey(ca []byte, key []byte) ([]byte, []byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ca | `[]byte` | PEM 格式的 CA 证书 |
| key | `[]byte` | PEM 格式的 CA 私钥 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` | PEM 格式的客户端证书 |
| r2 | `[]byte` | PEM 格式的客户端私钥 |
| r3 | `error` | 错误信息，签发失败时返回非空 |


### SignX509ServerCertAndKey

#### 详细描述
SignX509ServerCertAndKey 根据给定的 CA 证书和私钥，生成带客户端认证的服务器证书和密钥

参数:

  - ca: PEM 格式的 CA 证书

  - key: PEM 格式的 CA 私钥



返回值:

  - PEM 格式的服务器证书

  - PEM 格式的服务器私钥

  - 错误信息，签发失败时返回非空




Example:

``````````````yak
ca, key, err = tls.GenerateRootCA("yaklang.io")
cert, sKey, err = tls.SignX509ServerCertAndKey(ca, key)
``````````````


#### 定义

`SignX509ServerCertAndKey(ca []byte, key []byte) (cert []byte, sKey []byte, _ error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ca | `[]byte` | PEM 格式的 CA 证书 |
| key | `[]byte` | PEM 格式的 CA 私钥 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| cert | `[]byte` | PEM 格式的服务器证书 |
| sKey | `[]byte` | PEM 格式的服务器私钥 |
| _ | `error` | 错误信息，签发失败时返回非空 |


### alternativeDNS

#### 详细描述
alternativeDNS 是一个证书选项，用于添加一个或多个 DNS 备用名称 (SAN)

参数:

  - dnsNames: 一个或多个 DNS 名称



返回值:

  - 一个证书选项，作为可变参数传入 tls.GenerateRootCA / tls.GenerateServerCert 等




Example:

``````````````yak
cert, key = tls.GenerateRootCA("ca", tls.alternativeDNS("example.com", "www.example.com"))~
``````````````


#### 定义

`alternativeDNS(dnsNames ...string) CertOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| dnsNames | `...string` | 一个或多个 DNS 名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CertOption` | 一个证书选项，作为可变参数传入 tls.GenerateRootCA / tls.GenerateServerCert 等 |


### alternativeIP

#### 详细描述
alternativeIP 是一个证书选项，用于添加一个或多个字符串格式的 IP 备用名称 (SAN)，无效的 IP 字符串将被忽略

参数:

  - ipStrings: 一个或多个 IP 地址字符串



返回值:

  - 一个证书选项，作为可变参数传入 tls.GenerateRootCA / tls.GenerateServerCert 等




Example:

``````````````yak
cert, key = tls.GenerateRootCA("ca", tls.alternativeIP("127.0.0.1", "192.168.1.1"))~
``````````````


#### 定义

`alternativeIP(ipStrings ...string) CertOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ipStrings | `...string` | 一个或多个 IP 地址字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CertOption` | 一个证书选项，作为可变参数传入 tls.GenerateRootCA / tls.GenerateServerCert 等 |


### commonName

#### 详细描述
commonName 是一个证书选项，用于设置证书的通用名称 (Common Name)

参数:

  - cn: 通用名称



返回值:

  - 一个证书选项，作为可变参数传入 tls.GenerateRootCA / tls.GenerateServerCert 等




Example:

``````````````yak
cert, key = tls.GenerateRootCA("ca", tls.commonName("example.com"))~
``````````````


#### 定义

`commonName(cn string) CertOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cn | `string` | 通用名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CertOption` | 一个证书选项，作为可变参数传入 tls.GenerateRootCA / tls.GenerateServerCert 等 |


### country

#### 详细描述
country 是一个证书选项，用于设置证书的国家 (Country)

参数:

  - country: 国家代码或名称



返回值:

  - 一个证书选项，作为可变参数传入 tls.GenerateRootCA / tls.GenerateServerCert 等




Example:

``````````````yak
cert, key = tls.GenerateRootCA("ca", tls.country("CN"))~
``````````````


#### 定义

`country(country string) CertOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| country | `string` | 国家代码或名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CertOption` | 一个证书选项，作为可变参数传入 tls.GenerateRootCA / tls.GenerateServerCert 等 |


### locality

#### 详细描述
locality 是一个证书选项，用于设置证书的城市/地区 (Locality)

参数:

  - locality: 城市/地区名称



返回值:

  - 一个证书选项，作为可变参数传入 tls.GenerateRootCA / tls.GenerateServerCert 等




Example:

``````````````yak
cert, key = tls.GenerateRootCA("ca", tls.locality("Beijing"))~
``````````````


#### 定义

`locality(locality string) CertOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| locality | `string` | 城市/地区名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CertOption` | 一个证书选项，作为可变参数传入 tls.GenerateRootCA / tls.GenerateServerCert 等 |


### notAfter

#### 详细描述
notAfter 是一个证书选项，用于设置证书的过期时间

参数:

  - t: 过期时间点



返回值:

  - 一个证书选项，作为可变参数传入 tls.GenerateRootCA / tls.GenerateServerCert 等




Example:

``````````````yak
cert, key = tls.GenerateRootCA("ca", tls.notAfter(time.Now().Add(time.Hour)))~
``````````````


#### 定义

`notAfter(t time.Time) CertOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| t | `time.Time` | 过期时间点 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CertOption` | 一个证书选项，作为可变参数传入 tls.GenerateRootCA / tls.GenerateServerCert 等 |


### notBefore

#### 详细描述
notBefore 是一个证书选项，用于设置证书的生效时间

参数:

  - t: 生效时间点



返回值:

  - 一个证书选项，作为可变参数传入 tls.GenerateRootCA / tls.GenerateServerCert 等




Example:

``````````````yak
cert, key = tls.GenerateRootCA("ca", tls.notBefore(time.Now()))~
``````````````


#### 定义

`notBefore(t time.Time) CertOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| t | `time.Time` | 生效时间点 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CertOption` | 一个证书选项，作为可变参数传入 tls.GenerateRootCA / tls.GenerateServerCert 等 |


### organization

#### 详细描述
organization 是一个证书选项，用于设置证书的组织 (Organization)

参数:

  - org: 组织名称



返回值:

  - 一个证书选项，作为可变参数传入 tls.GenerateRootCA / tls.GenerateServerCert 等




Example:

``````````````yak
cert, key = tls.GenerateRootCA("ca", tls.organization("YakOrg"))~
``````````````


#### 定义

`organization(org string) CertOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| org | `string` | 组织名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CertOption` | 一个证书选项，作为可变参数传入 tls.GenerateRootCA / tls.GenerateServerCert 等 |


### privateKeyFromFile

#### 详细描述
privateKeyFromFile 是一个证书选项，用于从文件加载已有的私钥来签发证书，而不是自动生成新私钥

参数:

  - path: 私钥文件路径



返回值:

  - 一个证书选项，作为可变参数传入 tls.GenerateServerCert / tls.GenerateClientCert 等




Example:

``````````````yak
cert, key = tls.GenerateServerCert(ca, caKey, tls.privateKeyFromFile("/tmp/server.key"))~
``````````````


#### 定义

`privateKeyFromFile(path string) CertOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` | 私钥文件路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CertOption` | 一个证书选项，作为可变参数传入 tls.GenerateServerCert / tls.GenerateClientCert 等 |


### privateKeyFromRaw

#### 详细描述
privateKeyFromRaw 是一个证书选项，用于从内存中的字节数据加载已有的私钥来签发证书，而不是自动生成新私钥

参数:

  - key: PEM 格式的私钥字节数组



返回值:

  - 一个证书选项，作为可变参数传入 tls.GenerateServerCert / tls.GenerateClientCert 等




Example:

``````````````yak
cert, key = tls.GenerateServerCert(ca, caKey, tls.privateKeyFromRaw(keyBytes))~
``````````````


#### 定义

`privateKeyFromRaw(key []byte) CertOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `[]byte` | PEM 格式的私钥字节数组 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CertOption` | 一个证书选项，作为可变参数传入 tls.GenerateServerCert / tls.GenerateClientCert 等 |


### province

#### 详细描述
province 是一个证书选项，用于设置证书的省/州 (Province)

参数:

  - province: 省/州名称



返回值:

  - 一个证书选项，作为可变参数传入 tls.GenerateRootCA / tls.GenerateServerCert 等




Example:

``````````````yak
cert, key = tls.GenerateRootCA("ca", tls.province("Beijing"))~
``````````````


#### 定义

`province(province string) CertOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| province | `string` | 省/州名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CertOption` | 一个证书选项，作为可变参数传入 tls.GenerateRootCA / tls.GenerateServerCert 等 |


### validity

#### 详细描述
validity 是一个证书选项，用于设置证书的有效期（从现在开始，持续时间为 duration）

参数:

  - duration: 有效期时长



返回值:

  - 一个证书选项，作为可变参数传入 tls.GenerateRootCA / tls.GenerateServerCert 等




Example:

``````````````yak
cert, key = tls.GenerateRootCA("ca", tls.validity(time.Hour * 24 * 365))~
``````````````


#### 定义

`validity(duration time.Duration) CertOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| duration | `time.Duration` | 有效期时长 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `CertOption` | 一个证书选项，作为可变参数传入 tls.GenerateRootCA / tls.GenerateServerCert 等 |


