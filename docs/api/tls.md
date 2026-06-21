# tls {#library-tls}

`tls` 库提供 TLS/证书与密钥相关能力：生成根 CA、服务端/客户端证书、RSA/SM2 密钥对，以及探测目标的 TLS 配置，常用于搭建 HTTPS 服务、证书签发与 TLS 安全检查。

典型使用场景：

- 生成证书：`tls.GenerateRootCA` 生成根 CA，`tls.GenerateServerCert` / `tls.GenerateClientCert` 签发服务端/客户端证书（配 `tls.commonName` / `tls.alternativeDNS` / `tls.alternativeIP` / `tls.validity` 等选项）。
- 生成密钥：`tls.GenerateRSA2048KeyPair` / `tls.GenerateRSAKeyPair` / `tls.GenerateSM2KeyPair`，`tls.EncryptWithPkcs1v15` / `tls.DecryptWithPkcs1v15` 做 PKCS1v15 加解密。
- 探测：`tls.Inspect` / `tls.InspectForceHttp2` / `tls.InspectForceHttp1_1` 探测目标 TLS 配置与证书信息。

与相邻库的关系：`tls` 生成的证书常用于 `httpserver`/`tcp`（起 HTTPS/TLS 服务）、`mitm`（根证书），与 `codec`/`ja3` 在密码学与指纹方向互补。

> 共 29 个函数、4 个实例

## 实例

|实例名|类型|说明|
|:--|:--|:--|
| GMTLS_ECC_SM4_CBC_SM3 | `int` | 57363 |
| GMTLS_ECC_SM4_GCM_SM3 | `int` | 57427 |
| GMTLS_ECDHE_SM4_CBC_SM3 | `int` | 57361 |
| GMTLS_ECDHE_SM4_GCM_SM3 | `int` | 57425 |

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [tls.DecryptWithPkcs1v15](#decryptwithpkcs1v15) | `raw []byte, data any` | `[]byte, error` | DecryptWithPkcs1v15/RSADecryptWithPKCS1v15 使用 RSA私钥 和 PKCS#1 v1.5填充方式 解密给定的密文。 |
| [tls.EncryptWithPkcs1v15](#encryptwithpkcs1v15) | `raw []byte, data any` | `[]byte, error` | EncryptWithPkcs1v15/RSAEncryptWithPKCS1v15 使用 RSA 公钥和 PKCS#1 v1.5 填充方式对给定数据进行加密。 |
| [tls.GenerateRSA1024KeyPair](#generatersa1024keypair) | - | `[]byte, []byte, error` | 生成 1024 位大小的 RSA 公私钥对 |
| [tls.GenerateRSA2048KeyPair](#generatersa2048keypair) | - | `[]byte, []byte, error` | 生成 2048 位大小的 RSA 公私钥对 |
| [tls.GenerateRSA4096KeyPair](#generatersa4096keypair) | - | `[]byte, []byte, error` | 生成 4096 位大小的 RSA 公私钥对 |
| [tls.GenerateRSAKeyPair](#generatersakeypair) | `bitSize int` | `[]byte, []byte, error` | 根据给定的位大小生成 RSA 公私钥对 |
| [tls.GenerateSM2KeyPair](#generatesm2keypair) | - | `[]byte, []byte, error` | 生成 SM2 国密公私钥对 |
| [tls.Inspect](#inspect) | `addr string` | `[]*TLSInspectResult, error` | 检查目标地址的 TLS 证书，支持检测普通 TLS 和国密 TLS(GMTLS) 证书，自动尝试多种握手方式并去重返回结果 |
| [tls.InspectForceHttp1_1](#inspectforcehttp1_1) | `addr string` | `[]*TLSInspectResult, error` | 检查目标地址的 TLS 证书，强制使用 HTTP/1.1 协议，支持检测普通 TLS 和国密 TLS(GMTLS) 证书 |
| [tls.InspectForceHttp2](#inspectforcehttp2) | `addr string` | `[]*TLSInspectResult, error` | 检查目标地址的 TLS 证书，强制使用 HTTP/2 协议，支持检测普通 TLS 和国密 TLS(GMTLS) 证书 |
| [tls.SignClientCertAndKey](#signclientcertandkey) | `ca []byte, key []byte` | `[]byte, []byte, error` | 根据给定的 CA 证书和私钥，生成不包含认证的客户端证书和密钥 |
| [tls.SignServerCertAndKey](#signservercertandkey) | `ca []byte, key []byte` | `[]byte, []byte, error` | 根据给定的 CA 证书和私钥，生成不包含客户端认证的服务器证书和密钥 |
| [tls.SignX509ClientCertAndKey](#signx509clientcertandkey) | `ca []byte, key []byte` | `[]byte, []byte, error` | 根据给定的 CA 证书和私钥，生成带认证的客户端证书和密钥 |
| [tls.SignX509ServerCertAndKey](#signx509servercertandkey) | `ca []byte, key []byte` | `[]byte, []byte, error` | 根据给定的 CA 证书和私钥，生成带客户端认证的服务器证书和密钥 |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [tls.GenerateClientCert](#generateclientcert) | `caCertPEM []byte, caKeyPEM []byte, opts ...CertOption` | `[]byte, []byte, error` | 使用给定的 CA 签发一个客户端证书 |
| [tls.GenerateRootCA](#generaterootca) | `commonName string, opts ...tlsutils.CertOption` | `[]byte, []byte, error` | 根据名字生成根证书和私钥 |
| [tls.GenerateServerCert](#generateservercert) | `caCertPEM []byte, caKeyPEM []byte, opts ...CertOption` | `[]byte, []byte, error` | 使用给定的 CA 签发一个服务器证书 |

## 函数详情

### DecryptWithPkcs1v15 {#decryptwithpkcs1v15}

```go
DecryptWithPkcs1v15(raw []byte, data any) ([]byte, error)
```

DecryptWithPkcs1v15/RSADecryptWithPKCS1v15 使用 RSA私钥 和 PKCS#1 v1.5填充方式 解密给定的密文。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| raw | `[]byte` | RSA 私钥（支持 DER/PEM/Base64 等格式） |
| data | `any` | 要解密的密文数据（[]byte、string 等） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 解密得到的明文字节数组 |
| r2 | `error` | 错误信息，解密失败时返回非空 |

**示例**

``````````````yak
// 生成一对 RSA 密钥(第一个返回值是公钥, 第二个是私钥)，用公钥加密后再用私钥解密验证往返一致
pub, pri = tls.GenerateRSA2048KeyPair()~
ciphertext = codec.RSAEncryptWithPKCS1v15(pub, "hello world")~
plaintext = codec.RSADecryptWithPKCS1v15(pri, ciphertext)~
assert string(plaintext) == "hello world", "RSA PKCS1v15 decrypt should recover the plaintext"
``````````````

---

### EncryptWithPkcs1v15 {#encryptwithpkcs1v15}

```go
EncryptWithPkcs1v15(raw []byte, data any) ([]byte, error)
```

EncryptWithPkcs1v15/RSAEncryptWithPKCS1v15 使用 RSA 公钥和 PKCS#1 v1.5 填充方式对给定数据进行加密。

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| raw | `[]byte` | RSA 公钥（支持 DER/PEM/Base64 等格式） |
| data | `any` | 要加密的明文数据（[]byte、string 等） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | 加密后的密文字节数组 |
| r2 | `error` | 错误信息，加密失败时返回非空 |

**示例**

``````````````yak
// 生成一对 RSA 密钥(第一个返回值是公钥, 第二个是私钥)，用公钥加密，再用私钥解密验证往返一致
pub, pri = tls.GenerateRSA2048KeyPair()~
ciphertext = codec.RSAEncryptWithPKCS1v15(pub, "hello world")~
plaintext = codec.RSADecryptWithPKCS1v15(pri, ciphertext)~
assert string(plaintext) == "hello world", "RSA PKCS1v15 encrypt/decrypt round-trip should match"
``````````````

---

### GenerateRSA1024KeyPair {#generatersa1024keypair}

```go
GenerateRSA1024KeyPair() ([]byte, []byte, error)
```

生成 1024 位大小的 RSA 公私钥对

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | PEM 格式的公钥 |
| r2 | `[]byte` | PEM 格式的私钥 |
| r3 | `error` | 错误信息，生成失败时返回非空 |

**示例**

``````````````yak
pub, pri, err := tls.GenerateRSA1024KeyPair()
``````````````

---

### GenerateRSA2048KeyPair {#generatersa2048keypair}

```go
GenerateRSA2048KeyPair() ([]byte, []byte, error)
```

生成 2048 位大小的 RSA 公私钥对

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | PEM 格式的公钥 |
| r2 | `[]byte` | PEM 格式的私钥 |
| r3 | `error` | 错误信息，生成失败时返回非空 |

**示例**

``````````````yak
pub, pri, err := tls.GenerateRSA2048KeyPair()
``````````````

---

### GenerateRSA4096KeyPair {#generatersa4096keypair}

```go
GenerateRSA4096KeyPair() ([]byte, []byte, error)
```

生成 4096 位大小的 RSA 公私钥对

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | PEM 格式的公钥 |
| r2 | `[]byte` | PEM 格式的私钥 |
| r3 | `error` | 错误信息，生成失败时返回非空 |

**示例**

``````````````yak
pub, pri, err := tls.GenerateRSA4096KeyPair()
``````````````

---

### GenerateRSAKeyPair {#generatersakeypair}

```go
GenerateRSAKeyPair(bitSize int) ([]byte, []byte, error)
```

根据给定的位大小生成 RSA 公私钥对

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| bitSize | `int` | 密钥位数，如 1024、2048、4096 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | PEM 格式的公钥 |
| r2 | `[]byte` | PEM 格式的私钥 |
| r3 | `error` | 错误信息，生成失败时返回非空 |

**示例**

``````````````yak
pub, pri, err := tls.GenerateRSAKeyPair(2048)
``````````````

---

### GenerateSM2KeyPair {#generatesm2keypair}

```go
GenerateSM2KeyPair() ([]byte, []byte, error)
```

生成 SM2 国密公私钥对

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | PEM 格式的公钥 |
| r2 | `[]byte` | PEM 格式的私钥 |
| r3 | `error` | 错误信息，生成失败时返回非空 |

**示例**

``````````````yak
pub, pri, err := tls.GenerateSM2KeyPair()
``````````````

---

### Inspect {#inspect}

```go
Inspect(addr string) ([]*TLSInspectResult, error)
```

检查目标地址的 TLS 证书，支持检测普通 TLS 和国密 TLS(GMTLS) 证书，自动尝试多种握手方式并去重返回结果

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| addr | `string` | 目标地址，格式为 host:port |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*TLSInspectResult` | TLS 证书检查结果列表 |
| r2 | `error` | 错误信息，连接或握手失败时返回非空 |

**示例**

``````````````yak
cert, err := tls.Inspect("yaklang.io:443")
``````````````

---

### InspectForceHttp1_1 {#inspectforcehttp1_1}

```go
InspectForceHttp1_1(addr string) ([]*TLSInspectResult, error)
```

检查目标地址的 TLS 证书，强制使用 HTTP/1.1 协议，支持检测普通 TLS 和国密 TLS(GMTLS) 证书

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| addr | `string` | 目标地址，格式为 host:port |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*TLSInspectResult` | TLS 证书检查结果列表 |
| r2 | `error` | 错误信息，连接或握手失败时返回非空 |

**示例**

``````````````yak
cert, err := tls.InspectForceHttp1_1("yaklang.io:443")
``````````````

---

### InspectForceHttp2 {#inspectforcehttp2}

```go
InspectForceHttp2(addr string) ([]*TLSInspectResult, error)
```

检查目标地址的 TLS 证书，强制使用 HTTP/2 协议，支持检测普通 TLS 和国密 TLS(GMTLS) 证书

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| addr | `string` | 目标地址，格式为 host:port |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*TLSInspectResult` | TLS 证书检查结果列表 |
| r2 | `error` | 错误信息，连接或握手失败时返回非空 |

**示例**

``````````````yak
cert, err := tls.InspectForceHttp2("yaklang.io:443")
``````````````

---

### SignClientCertAndKey {#signclientcertandkey}

```go
SignClientCertAndKey(ca []byte, key []byte) ([]byte, []byte, error)
```

根据给定的 CA 证书和私钥，生成不包含认证的客户端证书和密钥

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| ca | `[]byte` | PEM 格式的 CA 证书 |
| key | `[]byte` | PEM 格式的 CA 私钥 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | PEM 格式的客户端证书 |
| r2 | `[]byte` | PEM 格式的客户端私钥 |
| r3 | `error` | 错误信息，签发失败时返回非空 |

**示例**

``````````````yak
ca, key, err = tls.GenerateRootCA("yaklang.io")
cert, sKey, err = tls.SignClientCertAndKey(ca, key)
``````````````

---

### SignServerCertAndKey {#signservercertandkey}

```go
SignServerCertAndKey(ca []byte, key []byte) (cert []byte, sKey []byte, _ error)
```

根据给定的 CA 证书和私钥，生成不包含客户端认证的服务器证书和密钥

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| ca | `[]byte` | PEM 格式的 CA 证书 |
| key | `[]byte` | PEM 格式的 CA 私钥 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| cert | `[]byte` | PEM 格式的服务器证书 |
| sKey | `[]byte` | PEM 格式的服务器私钥 |
| _ | `error` | 错误信息，签发失败时返回非空 |

**示例**

``````````````yak
ca, key, err = tls.GenerateRootCA("yaklang.io")
cert, sKey, err = tls.SignServerCertAndKey(ca, key)
``````````````

---

### SignX509ClientCertAndKey {#signx509clientcertandkey}

```go
SignX509ClientCertAndKey(ca []byte, key []byte) ([]byte, []byte, error)
```

根据给定的 CA 证书和私钥，生成带认证的客户端证书和密钥

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| ca | `[]byte` | PEM 格式的 CA 证书 |
| key | `[]byte` | PEM 格式的 CA 私钥 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | PEM 格式的客户端证书 |
| r2 | `[]byte` | PEM 格式的客户端私钥 |
| r3 | `error` | 错误信息，签发失败时返回非空 |

**示例**

``````````````yak
ca, key, err = tls.GenerateRootCA("yaklang.io")
cert, sKey, err = tls.SignX509ClientCertAndKey(ca, key)
``````````````

---

### SignX509ServerCertAndKey {#signx509servercertandkey}

```go
SignX509ServerCertAndKey(ca []byte, key []byte) (cert []byte, sKey []byte, _ error)
```

根据给定的 CA 证书和私钥，生成带客户端认证的服务器证书和密钥

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| ca | `[]byte` | PEM 格式的 CA 证书 |
| key | `[]byte` | PEM 格式的 CA 私钥 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| cert | `[]byte` | PEM 格式的服务器证书 |
| sKey | `[]byte` | PEM 格式的服务器私钥 |
| _ | `error` | 错误信息，签发失败时返回非空 |

**示例**

``````````````yak
ca, key, err = tls.GenerateRootCA("yaklang.io")
cert, sKey, err = tls.SignX509ServerCertAndKey(ca, key)
``````````````

---

## 可变参数函数详情

### GenerateClientCert {#generateclientcert}

```go
GenerateClientCert(caCertPEM []byte, caKeyPEM []byte, opts ...CertOption) ([]byte, []byte, error)
```

使用给定的 CA 签发一个客户端证书

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| caCertPEM | `[]byte` | PEM 编码的 CA 证书 |
| caKeyPEM | `[]byte` | PEM 编码的 CA 私钥 |

**可选参数**

可作为可变参数 `opts ...CertOption` 传入选项；共 12 个可用选项，详见 [CertOption 选项列表](#option-certoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | PEM 编码的客户端证书 |
| r2 | `[]byte` | PEM 编码的客户端私钥 |
| r3 | `error` | 错误信息，签发失败时返回非空 |

**示例**

``````````````yak
ca, caKey = tls.GenerateRootCA("ca")~
cert, key = tls.GenerateClientCert(ca, caKey, tls.commonName("client"))~
``````````````

---

### GenerateRootCA {#generaterootca}

```go
GenerateRootCA(commonName string, opts ...tlsutils.CertOption) (ca []byte, key []byte, err error)
```

根据名字生成根证书和私钥

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| commonName | `string` | 证书的通用名称（CN），同时用作组织名 |

**可选参数**

可作为可变参数 `opts ...tlsutils.CertOption` 传入选项；共 12 个可用选项，详见 [CertOption 选项列表](#option-certoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| ca | `[]byte` | PEM 格式的根证书 |
| key | `[]byte` | PEM 格式的私钥 |
| err | `error` | 错误信息，生成失败时返回非空 |

**示例**

``````````````yak
cert, key, err := tls.GenerateRootCA("yaklang.io")
``````````````

---

### GenerateServerCert {#generateservercert}

```go
GenerateServerCert(caCertPEM []byte, caKeyPEM []byte, opts ...CertOption) ([]byte, []byte, error)
```

使用给定的 CA 签发一个服务器证书

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| caCertPEM | `[]byte` | PEM 编码的 CA 证书 |
| caKeyPEM | `[]byte` | PEM 编码的 CA 私钥 |

**可选参数**

可作为可变参数 `opts ...CertOption` 传入选项；共 12 个可用选项，详见 [CertOption 选项列表](#option-certoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]byte` | PEM 编码的服务器证书 |
| r2 | `[]byte` | PEM 编码的服务器私钥 |
| r3 | `error` | 错误信息，签发失败时返回非空 |

**示例**

``````````````yak
ca, caKey = tls.GenerateRootCA("ca")~
cert, key = tls.GenerateServerCert(ca, caKey, tls.commonName("example.com"))~
``````````````

---

## 可变参数选项列表

以下按选项类型汇总全部可变参数选项(原先重复在各主函数下的选项表已收拢到此处)：

### 1. 类型：CertOption {#option-certoption}

涉及到的函数有：[tls.GenerateClientCert](#generateclientcert)、[tls.GenerateRootCA](#generaterootca)、[tls.GenerateServerCert](#generateservercert)

|选项函数|参数|返回值|说明|
|:--|:--|:--|:--|
| `tls.alternativeDNS` | `dnsNames ...string` | `CertOption` | 是一个证书选项，用于添加一个或多个 DNS 备用名称 (SAN) |
| `tls.alternativeIP` | `ipStrings ...string` | `CertOption` | 是一个证书选项，用于添加一个或多个字符串格式的 IP 备用名称 (SAN)，无效的 IP 字符串将被忽略 |
| `tls.commonName` | `cn string` | `CertOption` | 是一个证书选项，用于设置证书的通用名称 (Common Name) |
| `tls.country` | `country string` | `CertOption` | 是一个证书选项，用于设置证书的国家 (Country) |
| `tls.locality` | `locality string` | `CertOption` | 是一个证书选项，用于设置证书的城市/地区 (Locality) |
| `tls.notAfter` | `t time.Time` | `CertOption` | 是一个证书选项，用于设置证书的过期时间 |
| `tls.notBefore` | `t time.Time` | `CertOption` | 是一个证书选项，用于设置证书的生效时间 |
| `tls.organization` | `org string` | `CertOption` | 是一个证书选项，用于设置证书的组织 (Organization) |
| `tls.privateKeyFromFile` | `path string` | `CertOption` | 是一个证书选项，用于从文件加载已有的私钥来签发证书，而不是自动生成新私钥 |
| `tls.privateKeyFromRaw` | `key []byte` | `CertOption` | 是一个证书选项，用于从内存中的字节数据加载已有的私钥来签发证书，而不是自动生成新私钥 |
| `tls.province` | `province string` | `CertOption` | 是一个证书选项，用于设置证书的省/州 (Province) |
| `tls.validity` | `duration time.Duration` | `CertOption` | 是一个证书选项，用于设置证书的有效期（从现在开始，持续时间为 duration） |

