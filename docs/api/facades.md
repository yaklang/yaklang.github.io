# facades

|成员函数|函数描述/介绍|
|:------|:--------|
| [facades.NewFacadeServer](#NewFacadeServer) ||
| [facades.Serve](#Serve) ||
| [facades.evilClassResource](#evilClassResource) ||
| [facades.httpResource](#httpResource) ||
| [facades.javaClassName](#javaClassName) ||
| [facades.javaCodeBase](#javaCodeBase) ||
| [facades.javaFactory](#javaFactory) ||
| [facades.ldapResourceAddr](#ldapResourceAddr) ||
| [facades.objectClass](#objectClass) ||
| [facades.rmiResourceAddr](#rmiResourceAddr) ||


## 函数定义
### facades.NewFacadeServer

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


### facades.Serve

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


### facades.evilClassResource

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


### facades.httpResource

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


### facades.javaClassName

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


### facades.javaCodeBase

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


### facades.javaFactory

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


### facades.ldapResourceAddr

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


### facades.objectClass

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


### facades.rmiResourceAddr

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


