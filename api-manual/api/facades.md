# facades

|函数名|函数描述/介绍|
|:------|:--------|
| [facades.NewFacadeServer](#newfacadeserver) ||
| [facades.Serve](#serve) ||
| [facades.evilClassResource](#evilclassresource) ||
| [facades.httpResource](#httpresource) ||
| [facades.javaClassName](#javaclassname) ||
| [facades.javaCodeBase](#javacodebase) ||
| [facades.javaFactory](#javafactory) ||
| [facades.ldapResourceAddr](#ldapresourceaddr) ||
| [facades.objectClass](#objectclass) ||
| [facades.rmiResourceAddr](#rmiresourceaddr) ||


## 函数定义
### NewFacadeServer

#### 详细描述


#### 定义

`NewFacadeServer(host string, port int, configs ...FacadeServerConfig) *FacadeServer`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| host | `string` |   |
| port | `int` |   |
| configs | `...FacadeServerConfig` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*FacadeServer` |   |


### Serve

#### 详细描述


#### 定义

`Serve(host string, port int, configs ...FacadeServerConfig) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| host | `string` |   |
| port | `int` |   |
| configs | `...FacadeServerConfig` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### evilClassResource

#### 详细描述


#### 定义

`evilClassResource(name string, rmiResourceAddr string) FacadeServerConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| rmiResourceAddr | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `FacadeServerConfig` |   |


### httpResource

#### 详细描述


#### 定义

`httpResource(name string, resource []byte) FacadeServerConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| resource | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `FacadeServerConfig` |   |


### javaClassName

#### 详细描述


#### 定义

`javaClassName(name string) FacadeServerConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `FacadeServerConfig` |   |


### javaCodeBase

#### 详细描述


#### 定义

`javaCodeBase(codeBase string) FacadeServerConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| codeBase | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `FacadeServerConfig` |   |


### javaFactory

#### 详细描述


#### 定义

`javaFactory(factory string) FacadeServerConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| factory | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `FacadeServerConfig` |   |


### ldapResourceAddr

#### 详细描述


#### 定义

`ldapResourceAddr(name string, addr string) FacadeServerConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| addr | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `FacadeServerConfig` |   |


### objectClass

#### 详细描述


#### 定义

`objectClass(obj string) FacadeServerConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| obj | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `FacadeServerConfig` |   |


### rmiResourceAddr

#### 详细描述


#### 定义

`rmiResourceAddr(name string, rmiResourceAddr string) FacadeServerConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| rmiResourceAddr | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `FacadeServerConfig` |   |


