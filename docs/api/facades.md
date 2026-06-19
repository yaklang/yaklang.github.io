# facades

|函数名|函数描述/介绍|
|:------|:--------|
| [facades.NewFacadeServer](#newfacadeserver) |NewFacadeServer 创建一个 facade 综合服务对象(同时支持 LDAP/RMI/HTTP 等)，可后续调用其方法启动 在 yak 中通过 facades.NewFacadeServer 调用 参数: - host: 监听地址 - port: 监听端口 - configs: 可选配置...|
| [facades.Serve](#serve) |Serve 在指定地址和端口启动一个 facade 综合服务(同时支持 LDAP/RMI/HTTP 等)并阻塞运行 在 yak 中通过 facades.Serve 调用，常用于 JNDI 注入等漏洞的回连利用 参数: - host: 监听地址 - port: 监听端口 - configs: 可选配置...|
| [facades.evilClassResource](#evilclassresource) |rmiResourceAddr 注册一个 RMI 资源，引导 RMI 客户端从指定 codebase 加载远程类(RMI/JNDI 注入利用) 在 yak 中通过 facades.rmiResourceAddr(或别名 facades.evilClassResource) 调用 参数: - name...|
| [facades.httpResource](#httpresource) |httpResource 在 facade 服务上注册一个 HTTP 资源(路径 /name 返回指定内容)，常用于托管恶意 class 文件 在 yak 中通过 facades.httpResource 调用 参数: - name: 资源路径名(实际访问路径为 /name) - resource:...|
| [facades.javaClassName](#javaclassname) |javaClassName 设置 facade 服务 LDAP 响应中的 javaClassName 字段 在 yak 中通过 facades.javaClassName 调用 参数: - name: Java 类名 返回值: - 一个 facade 服务配置选项|
| [facades.javaCodeBase](#javacodebase) |javaCodeBase 设置 facade 服务 LDAP 响应中的 javaCodeBase 字段(远程类加载地址) 在 yak 中通过 facades.javaCodeBase 调用 参数: - codeBase: 远程 codebase 地址 返回值: - 一个 facade 服务配置选项|
| [facades.javaFactory](#javafactory) |javaFactory 设置 facade 服务 LDAP 响应中的 javaFactory 字段(工厂类名) 在 yak 中通过 facades.javaFactory 调用 参数: - factory: 工厂类名 返回值: - 一个 facade 服务配置选项|
| [facades.ldapResourceAddr](#ldapresourceaddr) |ldapResourceAddr 注册一个 LDAP 资源，引导客户端从指定 codebase 加载 Java 工厂类(JNDI 注入利用) 在 yak 中通过 facades.ldapResourceAddr 调用 参数: - name: 资源/类名 - addr: 远程 codebase 地址 ...|
| [facades.objectClass](#objectclass) |objectClass 设置 facade 服务 LDAP 响应中的 objectClass 字段 在 yak 中通过 facades.objectClass 调用 参数: - obj: objectClass 值，如 javaNamingReference 返回值: - 一个 facade 服务配...|
| [facades.rmiResourceAddr](#rmiresourceaddr) |rmiResourceAddr 注册一个 RMI 资源，引导 RMI 客户端从指定 codebase 加载远程类(RMI/JNDI 注入利用) 在 yak 中通过 facades.rmiResourceAddr(或别名 facades.evilClassResource) 调用 参数: - name...|


## 函数定义
### NewFacadeServer

#### 详细描述
NewFacadeServer 创建一个 facade 综合服务对象(同时支持 LDAP/RMI/HTTP 等)，可后续调用其方法启动

在 yak 中通过 facades.NewFacadeServer 调用

参数:

  - host: 监听地址

  - port: 监听端口

  - configs: 可选配置项，如 facades.ldapResourceAddr、facades.httpResource 等



返回值:

  - facade 服务对象




Example:

``````````````yak
// 该示例为示意性用法：创建 facade 服务对象
server = facades.NewFacadeServer("0.0.0.0", 1389, facades.javaClassName("EvilObject"))
println(server != nil)
``````````````


#### 定义

`NewFacadeServer(host string, port int, configs ...FacadeServerConfig) *FacadeServer`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| host | `string` | 监听地址 |
| port | `int` | 监听端口 |
| configs | `...FacadeServerConfig` | 可选配置项，如 facades.ldapResourceAddr、facades.httpResource 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*FacadeServer` | facade 服务对象 |


### Serve

#### 详细描述
Serve 在指定地址和端口启动一个 facade 综合服务(同时支持 LDAP/RMI/HTTP 等)并阻塞运行

在 yak 中通过 facades.Serve 调用，常用于 JNDI 注入等漏洞的回连利用

参数:

  - host: 监听地址

  - port: 监听端口

  - configs: 可选配置项，如 facades.ldapResourceAddr、facades.httpResource 等



返回值:

  - 错误信息，启动失败时非 nil




Example:

``````````````yak
// 该示例为示意性用法：启动 facade 服务(会阻塞)
err = facades.Serve("0.0.0.0", 1389, facades.ldapResourceAddr("Exploit", "http://127.0.0.1:8000/"))
``````````````


#### 定义

`Serve(host string, port int, configs ...FacadeServerConfig) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| host | `string` | 监听地址 |
| port | `int` | 监听端口 |
| configs | `...FacadeServerConfig` | 可选配置项，如 facades.ldapResourceAddr、facades.httpResource 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息，启动失败时非 nil |


### evilClassResource

#### 详细描述
rmiResourceAddr 注册一个 RMI 资源，引导 RMI 客户端从指定 codebase 加载远程类(RMI/JNDI 注入利用)

在 yak 中通过 facades.rmiResourceAddr(或别名 facades.evilClassResource) 调用

参数:

  - name: 资源/类名

  - rmiResourceAddr: 远程 codebase 地址



返回值:

  - 一个 facade 服务配置选项




Example:

``````````````yak
// 该示例为示意性用法：配置 RMI 资源指向远程 codebase
server = facades.NewFacadeServer("0.0.0.0", 1099, facades.rmiResourceAddr("Exploit", "http://127.0.0.1:8000/"))
``````````````


#### 定义

`evilClassResource(name string, rmiResourceAddr string) FacadeServerConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 资源/类名 |
| rmiResourceAddr | `string` | 远程 codebase 地址 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `FacadeServerConfig` | 一个 facade 服务配置选项 |


### httpResource

#### 详细描述
httpResource 在 facade 服务上注册一个 HTTP 资源(路径 /name 返回指定内容)，常用于托管恶意 class 文件

在 yak 中通过 facades.httpResource 调用

参数:

  - name: 资源路径名(实际访问路径为 /name)

  - resource: 资源内容字节数组



返回值:

  - 一个 facade 服务配置选项




Example:

``````````````yak
// 该示例为示意性用法：托管一个 HTTP 资源
server = facades.NewFacadeServer("0.0.0.0", 8000, facades.httpResource("Exploit.class", []byte("...")))
``````````````


#### 定义

`httpResource(name string, resource []byte) FacadeServerConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 资源路径名(实际访问路径为 /name) |
| resource | `[]byte` | 资源内容字节数组 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `FacadeServerConfig` | 一个 facade 服务配置选项 |


### javaClassName

#### 详细描述
javaClassName 设置 facade 服务 LDAP 响应中的 javaClassName 字段

在 yak 中通过 facades.javaClassName 调用

参数:

  - name: Java 类名



返回值:

  - 一个 facade 服务配置选项




Example:

``````````````yak
// 该示例为示意性用法：设置恶意 Java 类名
server = facades.NewFacadeServer("0.0.0.0", 8085, facades.javaClassName("EvilObject"))
``````````````


#### 定义

`javaClassName(name string) FacadeServerConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | Java 类名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `FacadeServerConfig` | 一个 facade 服务配置选项 |


### javaCodeBase

#### 详细描述
javaCodeBase 设置 facade 服务 LDAP 响应中的 javaCodeBase 字段(远程类加载地址)

在 yak 中通过 facades.javaCodeBase 调用

参数:

  - codeBase: 远程 codebase 地址



返回值:

  - 一个 facade 服务配置选项




Example:

``````````````yak
// 该示例为示意性用法：设置远程类加载地址
server = facades.NewFacadeServer("0.0.0.0", 1389, facades.javaCodeBase("http://127.0.0.1:8000/"))
``````````````


#### 定义

`javaCodeBase(codeBase string) FacadeServerConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| codeBase | `string` | 远程 codebase 地址 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `FacadeServerConfig` | 一个 facade 服务配置选项 |


### javaFactory

#### 详细描述
javaFactory 设置 facade 服务 LDAP 响应中的 javaFactory 字段(工厂类名)

在 yak 中通过 facades.javaFactory 调用

参数:

  - factory: 工厂类名



返回值:

  - 一个 facade 服务配置选项




Example:

``````````````yak
// 该示例为示意性用法：设置 javaFactory
server = facades.NewFacadeServer("0.0.0.0", 1389, facades.javaFactory("EvilFactory"))
``````````````


#### 定义

`javaFactory(factory string) FacadeServerConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| factory | `string` | 工厂类名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `FacadeServerConfig` | 一个 facade 服务配置选项 |


### ldapResourceAddr

#### 详细描述
ldapResourceAddr 注册一个 LDAP 资源，引导客户端从指定 codebase 加载 Java 工厂类(JNDI 注入利用)

在 yak 中通过 facades.ldapResourceAddr 调用

参数:

  - name: 资源/类名

  - addr: 远程 codebase 地址



返回值:

  - 一个 facade 服务配置选项




Example:

``````````````yak
// 该示例为示意性用法：配置 LDAP 资源指向远程 codebase
server = facades.NewFacadeServer("0.0.0.0", 1389, facades.ldapResourceAddr("Exploit", "http://127.0.0.1:8000/"))
``````````````


#### 定义

`ldapResourceAddr(name string, addr string) FacadeServerConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 资源/类名 |
| addr | `string` | 远程 codebase 地址 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `FacadeServerConfig` | 一个 facade 服务配置选项 |


### objectClass

#### 详细描述
objectClass 设置 facade 服务 LDAP 响应中的 objectClass 字段

在 yak 中通过 facades.objectClass 调用

参数:

  - obj: objectClass 值，如 javaNamingReference



返回值:

  - 一个 facade 服务配置选项




Example:

``````````````yak
// 该示例为示意性用法：设置 objectClass
server = facades.NewFacadeServer("0.0.0.0", 1389, facades.objectClass("javaNamingReference"))
``````````````


#### 定义

`objectClass(obj string) FacadeServerConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| obj | `string` | objectClass 值，如 javaNamingReference |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `FacadeServerConfig` | 一个 facade 服务配置选项 |


### rmiResourceAddr

#### 详细描述
rmiResourceAddr 注册一个 RMI 资源，引导 RMI 客户端从指定 codebase 加载远程类(RMI/JNDI 注入利用)

在 yak 中通过 facades.rmiResourceAddr(或别名 facades.evilClassResource) 调用

参数:

  - name: 资源/类名

  - rmiResourceAddr: 远程 codebase 地址



返回值:

  - 一个 facade 服务配置选项




Example:

``````````````yak
// 该示例为示意性用法：配置 RMI 资源指向远程 codebase
server = facades.NewFacadeServer("0.0.0.0", 1099, facades.rmiResourceAddr("Exploit", "http://127.0.0.1:8000/"))
``````````````


#### 定义

`rmiResourceAddr(name string, rmiResourceAddr string) FacadeServerConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 资源/类名 |
| rmiResourceAddr | `string` | 远程 codebase 地址 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `FacadeServerConfig` | 一个 facade 服务配置选项 |


