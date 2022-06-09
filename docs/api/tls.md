# tls


|成员函数|函数描述/介绍|
|:------|:--------|
 | [tls.GenerateRSA1024KeyPair](#tlsgeneratersa1024keypair) |  |
 | [tls.GenerateRSA2048KeyPair](#tlsgeneratersa2048keypair) |  |
 | [tls.GenerateRSA4096KeyPair](#tlsgeneratersa4096keypair) |  |
 | [tls.GenerateRSAKeyPair](#tlsgeneratersakeypair) |  |
 | [tls.GenerateRootCA](#tlsgeneraterootca) | 签发一个 CA 证书 |
 | [tls.GenerateSM2KeyPair](#tlsgeneratesm2keypair) |  |
 | [tls.Inspect](#tlsinspect) | 审计一个地址的 TLS 信息 |
 | [tls.SignClientCertAndKey](#tlssignclientcertandkey) | 签发一个客户端证书，不带x509认证 |
 | [tls.SignServerCertAndKey](#tlssignservercertandkey) | 签发一个服务端证书，不带 x509 认证 |
 | [tls.SignX509ClientCertAndKey](#tlssignx509clientcertandkey) | 签发一个带 x509 认证的客户端证书 |
 | [tls.SignX509ServerCertAndKey](#tlssignx509servercertandkey) | 签发一个服务端证书，带x509认证 |




 



## 函数定义

### tls.GenerateRSA1024KeyPair



#### 详细描述



#### 定义：

`func tls.GenerateRSA1024KeyPair() return (r0: bytes, r1: bytes, r2: error)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `bytes` |   |
| r2 | `error` |   |


 
### tls.GenerateRSA2048KeyPair



#### 详细描述



#### 定义：

`func tls.GenerateRSA2048KeyPair() return (r0: bytes, r1: bytes, r2: error)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `bytes` |   |
| r2 | `error` |   |


 
### tls.GenerateRSA4096KeyPair



#### 详细描述



#### 定义：

`func tls.GenerateRSA4096KeyPair() return (r0: bytes, r1: bytes, r2: error)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `bytes` |   |
| r2 | `error` |   |


 
### tls.GenerateRSAKeyPair



#### 详细描述



#### 定义：

`func tls.GenerateRSAKeyPair(v1: int) return (r0: bytes, r1: bytes, r2: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `bytes` |   |
| r2 | `error` |   |


 
### tls.GenerateRootCA

签发一个 CA 证书

#### 详细描述



#### 定义：

`func tls.GenerateRootCA(commonName: string) return (cert: bytes, privateKey: bytes, r2: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| commonName | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| cert | `bytes` |   |
| privateKey | `bytes` |   |
| r2 | `error` |   |


 
### tls.GenerateSM2KeyPair



#### 详细描述



#### 定义：

`func tls.GenerateSM2KeyPair() return (r0: bytes, r1: bytes, r2: error)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `bytes` |   |
| r2 | `error` |   |


 
### tls.Inspect

审计一个地址的 TLS 信息

#### 详细描述



#### 定义：

`func tls.Inspect(v1: string) return (r0: []*tlsutils.TLSInspectResult, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]*tlsutils.TLSInspectResult` |   |
| r1 | `error` |   |


 
### tls.SignClientCertAndKey

签发一个客户端证书，不带x509认证

#### 详细描述



#### 定义：

`func tls.SignClientCertAndKey(caCert: bytes, pKey: bytes) return (clientCert: bytes, clientKey: bytes, r2: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| caCert | `bytes` |   |
| pKey | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| clientCert | `bytes` |   |
| clientKey | `bytes` |   |
| r2 | `error` |   |


 
### tls.SignServerCertAndKey

签发一个服务端证书，不带 x509 认证

#### 详细描述



#### 定义：

`func tls.SignServerCertAndKey(caCert: bytes, caKey: bytes) return (serverCert: bytes, serverKey: bytes, r2: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| caCert | `bytes` |   |
| caKey | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| serverCert | `bytes` |   |
| serverKey | `bytes` |   |
| r2 | `error` |   |


 
### tls.SignX509ClientCertAndKey

签发一个带 x509 认证的客户端证书

#### 详细描述



#### 定义：

`func tls.SignX509ClientCertAndKey(caCert: bytes, caKey: bytes) return (clientCert: bytes, clientKey: bytes, r2: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| caCert | `bytes` |   |
| caKey | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| clientCert | `bytes` |   |
| clientKey | `bytes` |   |
| r2 | `error` |   |


 
### tls.SignX509ServerCertAndKey

签发一个服务端证书，带x509认证

#### 详细描述



#### 定义：

`func tls.SignX509ServerCertAndKey(caCert: bytes, caKey: bytes) return (cert: bytes, key: bytes, r2: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| caCert | `bytes` |   |
| caKey | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| cert | `bytes` |   |
| key | `bytes` |   |
| r2 | `error` |   |


 


