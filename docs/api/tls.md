# tls

|成员函数|函数描述/介绍|
|:------|:--------|
| [tls.DecryptWithPkcs1v15](#DecryptWithPkcs1v15) ||
| [tls.EncryptWithPkcs1v15](#EncryptWithPkcs1v15) ||
| [tls.GenerateRSA1024KeyPair](#GenerateRSA1024KeyPair) ||
| [tls.GenerateRSA2048KeyPair](#GenerateRSA2048KeyPair) ||
| [tls.GenerateRSA4096KeyPair](#GenerateRSA4096KeyPair) ||
| [tls.GenerateRSAKeyPair](#GenerateRSAKeyPair) ||
| [tls.GenerateRootCA](#GenerateRootCA) ||
| [tls.GenerateSM2KeyPair](#GenerateSM2KeyPair) ||
| [tls.Inspect](#Inspect) ||
| [tls.SignClientCertAndKey](#SignClientCertAndKey) ||
| [tls.SignServerCertAndKey](#SignServerCertAndKey) ||
| [tls.SignX509ClientCertAndKey](#SignX509ClientCertAndKey) ||
| [tls.SignX509ServerCertAndKey](#SignX509ServerCertAndKey) ||


## 函数定义
### DecryptWithPkcs1v15

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


### EncryptWithPkcs1v15

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


### GenerateRSA1024KeyPair

#### 详细描述


#### 定义

`GenerateRSA1024KeyPair(i int) func() ([]byte, []byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `func() ([]byte, []byte, error)` |   |


### GenerateRSA2048KeyPair

#### 详细描述


#### 定义

`GenerateRSA2048KeyPair(i int) func() ([]byte, []byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `func() ([]byte, []byte, error)` |   |


### GenerateRSA4096KeyPair

#### 详细描述


#### 定义

`GenerateRSA4096KeyPair(i int) func() ([]byte, []byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `func() ([]byte, []byte, error)` |   |


### GenerateRSAKeyPair

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


### GenerateRootCA

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


### GenerateSM2KeyPair

#### 详细描述


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


### SignClientCertAndKey

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


### SignServerCertAndKey

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


### SignX509ClientCertAndKey

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


### SignX509ServerCertAndKey

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


