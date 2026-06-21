# smb {#library-smb}

`smb` 库提供 SMB（Windows 文件共享）协议连接能力，用于会话建立、凭据验证与共享访问测试，常用于内网横向与认证安全评估。

典型使用场景：

- 建立连接：`smb.Connect(addr, opts...)` 连接 SMB 服务并建立会话，配 `smb.username` / `smb.password` / `smb.hash`（哈希传递）/ `smb.domain` / `smb.workstation` 提供认证信息。

与相邻库的关系：`smb` 属于协议交互工具，与 `brute`（口令/哈希爆破）、`ldap`、`servicescan`（服务识别）配合，常用于内网 SMB 的安全评估。

> 共 7 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [smb.debug](#debug) | `w bool` | `_smbConfigHandler` | 是一个 SMB 连接配置选项，用于开启调试日志输出 |
| [smb.domain](#domain) | `w string` | `_smbConfigHandler` | 是一个 SMB 连接配置选项，用于设置认证所属的域 |
| [smb.hash](#hash) | `w string` | `_smbConfigHandler` | 是一个 SMB 连接配置选项，用于设置 NTLM 哈希以进行哈希传递（Pass-the-Hash）认证 |
| [smb.password](#password) | `pass string` | `_smbConfigHandler` | 是一个 SMB 连接配置选项，用于设置认证密码 |
| [smb.username](#username) | `user string` | `_smbConfigHandler` | 是一个 SMB 连接配置选项，用于设置认证用户名 |
| [smb.workstation](#workstation) | `w string` | `_smbConfigHandler` | 是一个 SMB 连接配置选项，用于设置工作站名称 |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [smb.Connect](#connect) | `addr string, opts ..._smbConfigHandler` | `*smb.Session, error` | 建立一个 SMB 会话，返回一个可进行文件共享操作的会话对象 |

## 函数详情

### debug {#debug}

```go
debug(w bool) _smbConfigHandler
```

是一个 SMB 连接配置选项，用于开启调试日志输出

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| w | `bool` | 是否开启调试模式 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `_smbConfigHandler` | 一个 SMB 连接配置选项，作为可变参数传入 smb.Connect |

**示例**

``````````````yak
// 开启调试模式连接 SMB，此处仅作示意
session = smb.Connect("192.168.1.1:445", smb.username("administrator"), smb.password("123456"), smb.debug(true))~
defer session.Close()
``````````````

---

### domain {#domain}

```go
domain(w string) _smbConfigHandler
```

是一个 SMB 连接配置选项，用于设置认证所属的域

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| w | `string` | 域名称 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `_smbConfigHandler` | 一个 SMB 连接配置选项，作为可变参数传入 smb.Connect |

**示例**

``````````````yak
// 指定域进行 SMB 域认证，此处仅作示意
session = smb.Connect("192.168.1.1:445", smb.username("administrator"), smb.password("123456"), smb.domain("CORP"))~
defer session.Close()
``````````````

---

### hash {#hash}

```go
hash(w string) _smbConfigHandler
```

是一个 SMB 连接配置选项，用于设置 NTLM 哈希以进行哈希传递（Pass-the-Hash）认证

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| w | `string` | NTLM 哈希字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `_smbConfigHandler` | 一个 SMB 连接配置选项，作为可变参数传入 smb.Connect |

**示例**

``````````````yak
// 使用 NTLM 哈希进行哈希传递认证连接 SMB，此处仅作示意
session = smb.Connect("192.168.1.1:445", smb.username("administrator"), smb.hash("aad3b435b51404eeaad3b435b51404ee:..."))~
defer session.Close()
``````````````

---

### password {#password}

```go
password(pass string) _smbConfigHandler
```

是一个 SMB 连接配置选项，用于设置认证密码

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| pass | `string` | 认证密码 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `_smbConfigHandler` | 一个 SMB 连接配置选项，作为可变参数传入 smb.Connect |

**示例**

``````````````yak
// 指定用户名密码连接 SMB，此处仅作示意
session = smb.Connect("192.168.1.1:445", smb.username("administrator"), smb.password("123456"))~
defer session.Close()
``````````````

---

### username {#username}

```go
username(user string) _smbConfigHandler
```

是一个 SMB 连接配置选项，用于设置认证用户名

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| user | `string` | 认证用户名 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `_smbConfigHandler` | 一个 SMB 连接配置选项，作为可变参数传入 smb.Connect |

**示例**

``````````````yak
// 指定用户名密码连接 SMB，此处仅作示意
session = smb.Connect("192.168.1.1:445", smb.username("administrator"), smb.password("123456"))~
defer session.Close()
``````````````

---

### workstation {#workstation}

```go
workstation(w string) _smbConfigHandler
```

是一个 SMB 连接配置选项，用于设置工作站名称

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| w | `string` | 工作站名称 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `_smbConfigHandler` | 一个 SMB 连接配置选项，作为可变参数传入 smb.Connect |

**示例**

``````````````yak
// 指定工作站名称连接 SMB，此处仅作示意
session = smb.Connect("192.168.1.1:445", smb.username("administrator"), smb.password("123456"), smb.workstation("WIN-PC"))~
defer session.Close()
``````````````

---

## 可变参数函数详情

### Connect {#connect}

```go
Connect(addr string, opts ..._smbConfigHandler) (*smb.Session, error)
```

建立一个 SMB 会话，返回一个可进行文件共享操作的会话对象

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| addr | `string` | 目标地址，格式为 host 或 host:port，未指定端口时默认 445 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| opts | `..._smbConfigHandler` | 可选配置，例如 smb.username、smb.password、smb.domain、smb.hash |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*smb.Session` | SMB 会话对象，可进行共享枚举、文件读写等操作 |
| r2 | `error` | 错误信息，连接或认证失败时返回非空 |

**示例**

``````````````yak
// 建立 SMB 会话，依赖目标服务，此处仅作示意
session = smb.Connect("192.168.1.1:445", smb.username("administrator"), smb.password("123456"))~
defer session.Close()
``````````````

---

