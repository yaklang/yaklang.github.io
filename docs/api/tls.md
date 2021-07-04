# tls


|成员函数|函数描述/介绍|
|:------|:--------|
 | [tls.GenerateRootCA](#tlsgeneraterootca) | 签发一个 CA 证书 |
 | [tls.SignClientCertAndKey](#tlssignclientcertandkey) | 签发一个客户端证书，不带x509认证 |
 | [tls.SignServerCertAndKey](#tlssignservercertandkey) | 签发一个服务端证书，不带 x509 认证 |
 | [tls.SignX509ClientCertAndKey](#tlssignx509clientcertandkey) | 签发一个带 x509 认证的客户端证书 |
 | [tls.SignX509ServerCertAndKey](#tlssignx509servercertandkey) | 签发一个服务端证书，带x509认证 |




 



## 函数定义

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


 


