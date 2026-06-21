# ldap {#library-ldap}

`ldap` 库提供 LDAP 连接与登录能力，用于目录服务的连通性测试、认证验证与凭据爆破等场景。

典型使用场景：

- 连接登录：`ldap.Login(addr, opts...)` 连接并登录 LDAP 服务，返回连接对象做后续查询。
- 选项：`ldap.username` / `ldap.password` 提供凭据，`ldap.port` 指定端口。

与相邻库的关系：`ldap` 与 `brute`（凭据爆破）、`smb`/`redis` 等协议库同属服务交互工具；在 Java 利用场景中，LDAP 引用相关能力则由 `facades` 提供。

> 共 4 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [ldap.password](#password) | `i string` | `func(config *ldapClientConfig)` | 是一个 LDAP 登录配置选项，用于设置绑定（Bind）密码 |
| [ldap.port](#port) | `i int` | `func(config *ldapClientConfig)` | 是一个 LDAP 登录配置选项，用于设置 LDAP 服务器端口 |
| [ldap.username](#username) | `i string` | `func(config *ldapClientConfig)` | 是一个 LDAP 登录配置选项，用于设置绑定（Bind）用户名 |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [ldap.Login](#login) | `addr string, opts ...func(config *ldapClientConfig)` | `*ldap.Conn, error` | 连接并绑定（登录）到 LDAP 服务器，返回一个可用的 LDAP 连接对象 |

## 函数详情

### password {#password}

```go
password(i string) func(config *ldapClientConfig)
```

是一个 LDAP 登录配置选项，用于设置绑定（Bind）密码

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `string` | 绑定密码 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `func(config *ldapClientConfig)` | 一个 LDAP 登录配置选项，作为可变参数传入 ldap.Login |

**示例**

``````````````yak
// 指定用户名密码登录 LDAP，此处仅作示意
conn = ldap.Login("192.168.1.1", ldap.username("admin"), ldap.password("admin"))~
defer conn.Close()
``````````````

---

### port {#port}

```go
port(i int) func(config *ldapClientConfig)
```

是一个 LDAP 登录配置选项，用于设置 LDAP 服务器端口

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `int` | LDAP 服务器端口，默认 389 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `func(config *ldapClientConfig)` | 一个 LDAP 登录配置选项，作为可变参数传入 ldap.Login |

**示例**

``````````````yak
// 指定端口登录 LDAP，此处仅作示意
conn = ldap.Login("192.168.1.1", ldap.port(389), ldap.username("admin"), ldap.password("admin"))~
defer conn.Close()
``````````````

---

### username {#username}

```go
username(i string) func(config *ldapClientConfig)
```

是一个 LDAP 登录配置选项，用于设置绑定（Bind）用户名

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `string` | 绑定用户名，留空或 &#34;anonymous&#34; 时进行匿名绑定 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `func(config *ldapClientConfig)` | 一个 LDAP 登录配置选项，作为可变参数传入 ldap.Login |

**示例**

``````````````yak
// 指定用户名密码登录 LDAP，此处仅作示意
conn = ldap.Login("192.168.1.1", ldap.username("admin"), ldap.password("admin"))~
defer conn.Close()
``````````````

---

## 可变参数函数详情

### Login {#login}

```go
Login(addr string, opts ...func(config *ldapClientConfig)) (*ldap.Conn, error)
```

连接并绑定（登录）到 LDAP 服务器，返回一个可用的 LDAP 连接对象

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| addr | `string` | 目标地址，格式为 host 或 host:port，未指定端口时默认 389 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `...func(config *ldapClientConfig)` | 可选配置，例如 ldap.username、ldap.password、ldap.port |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*ldap.Conn` | LDAP 连接对象，可进行搜索、修改等操作 |
| r2 | `error` | 错误信息，连接或绑定失败时返回非空 |

**示例**

``````````````yak
// 登录 LDAP 服务器，依赖目标服务，此处仅作示意
conn = ldap.Login("192.168.1.1", ldap.username("admin"), ldap.password("admin"))~
defer conn.Close()
``````````````

---

