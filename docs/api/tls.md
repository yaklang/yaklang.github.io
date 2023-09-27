# tls

|成员函数|函数描述/介绍|
|:------|:--------|
| [tls.DecryptWithPkcs1v15](#decryptwithpkcs1v15) ||
| [tls.EncryptWithPkcs1v15](#encryptwithpkcs1v15) ||
| [tls.GenerateRSA1024KeyPair](#generatersa1024keypair) ||
| [tls.GenerateRSA2048KeyPair](#generatersa2048keypair) ||
| [tls.GenerateRSA4096KeyPair](#generatersa4096keypair) ||
| [tls.GenerateRSAKeyPair](#generatersakeypair) ||
| [tls.GenerateRootCA](#generaterootca) ||
| [tls.GenerateSM2KeyPair](#generatesm2keypair) ||
| [tls.Inspect](#inspect) ||
| [tls.SignClientCertAndKey](#signclientcertandkey) ||
| [tls.SignServerCertAndKey](#signservercertandkey) ||
| [tls.SignX509ClientCertAndKey](#signx509clientcertandkey) ||
| [tls.SignX509ServerCertAndKey](#signx509servercertandkey) ||


## 函数定义
### decryptwithpkcs1v15

#### 详细描述


#### 定义

`DecryptWithPkcs1v15(pemPriBytes []byte, data any) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pemPriBytes | `[]byte` |   |
| data | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### encryptwithpkcs1v15

#### 详细描述


#### 定义

`EncryptWithPkcs1v15(pemBytes []byte, data any) ([]byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pemBytes | `[]byte` |   |
| data | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `error` |   |


### generatersa1024keypair

#### 详细描述


#### 定义

`GenerateRSA1024KeyPair() ([]byte, []byte, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `[]byte` |   |
| r3 | `error` |   |


### generatersa2048keypair

#### 详细描述


#### 定义

`GenerateRSA2048KeyPair() ([]byte, []byte, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `[]byte` |   |
| r3 | `error` |   |


### generatersa4096keypair

#### 详细描述


#### 定义

`GenerateRSA4096KeyPair() ([]byte, []byte, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `[]byte` |   |
| r3 | `error` |   |


### generatersakeypair

#### 详细描述


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


### generaterootca

#### 详细描述


#### 定义

`GenerateRootCA(commonName string) (ca []byte, key []byte, _ error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| commonName | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| ca | `[]byte` |   |
| key | `[]byte` |   |
| _ | `error` |   |


### generatesm2keypair

#### 详细描述


#### 定义

`GenerateSM2KeyPair() ([]byte, []byte, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `[]byte` |   |
| r3 | `error` |   |


### inspect

#### 详细描述


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


### signclientcertandkey

#### 详细描述


#### 定义

`SignClientCertAndKey(ca []byte, key []byte) (cert []byte, sKey []byte, _ error)`

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


### signservercertandkey

#### 详细描述


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


### signx509clientcertandkey

#### 详细描述


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


### signx509servercertandkey

#### 详细描述


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


