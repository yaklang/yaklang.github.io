# ssh {#library-ssh}

`ssh` 库提供 SSH 客户端能力，支持口令与密钥认证，连接后可执行命令、做运维与安全测试，常用于远程主机交互与认证评估。

典型使用场景：

- 建立连接：`ssh.Connect(host, opts...)` 通用连接（配 `ssh.username` / `ssh.password` / `ssh.privateKey` / `ssh.keyPassphrase` / `ssh.port` / `ssh.timeout`），`ssh.ConnectWithPasswd` / `ssh.ConnectWithKey` 为口令/密钥认证的便捷入口，返回客户端后执行命令。

与相邻库的关系：`ssh` 属于协议交互工具，与 `brute`（SSH 口令爆破）、`servicescan`（服务识别）配合用于远程主机的安全评估与自动化运维。

> 共 9 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [ssh.ConnectWithKey](#connectwithkey) | `host string, username string, keyPath string` | `*SSHClient, error` | 使用私钥认证连接到 SSH 服务器，返回 SSH 客户端 |
| [ssh.ConnectWithPasswd](#connectwithpasswd) | `host string, username string, password string` | `*SSHClient, error` | 使用密码认证连接到 SSH 服务器，返回 SSH 客户端 |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [ssh.Connect](#connect) | `host string, opts ...SSHOption` | `*SSHClient, error` | 使用灵活的配置选项建立一个 SSH 连接，返回可执行命令与传输文件的客户端 |

## 函数详情

### ConnectWithKey {#connectwithkey}

```go
ConnectWithKey(host string, username string, keyPath string) (*SSHClient, error)
```

使用私钥认证连接到 SSH 服务器，返回 SSH 客户端

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| host | `string` | 目标地址，格式为 host 或 host:port，未指定端口时默认 22 |
| username | `string` | 登录用户名 |
| keyPath | `string` | 私钥文件路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*SSHClient` | SSH 客户端对象，可调用 Run/RunScript/UploadFile 等方法 |
| r2 | `error` | 错误信息，连接或认证失败时返回非空 |

**示例**

``````````````yak
// 使用私钥连接 SSH 并执行命令，依赖目标服务，此处仅作示意
client = ssh.ConnectWithKey("example.com:22", "root", "/path/to/id_rsa")~
defer client.Close()
output = client.Run("uname -a")~
println(output)
``````````````

---

### ConnectWithPasswd {#connectwithpasswd}

```go
ConnectWithPasswd(host string, username string, password string) (*SSHClient, error)
```

使用密码认证连接到 SSH 服务器，返回 SSH 客户端

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| host | `string` | 目标地址，格式为 host 或 host:port，未指定端口时默认 22 |
| username | `string` | 登录用户名 |
| password | `string` | 登录密码 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*SSHClient` | SSH 客户端对象，可调用 Run/RunScript/UploadFile 等方法 |
| r2 | `error` | 错误信息，连接或认证失败时返回非空 |

**示例**

``````````````yak
// 使用密码连接 SSH 并执行命令，依赖目标服务，此处仅作示意
client = ssh.ConnectWithPasswd("example.com:22", "root", "password")~
defer client.Close()
output = client.Run("id")~
println(output)
``````````````

---

## 可变参数函数详情

### Connect {#connect}

```go
Connect(host string, opts ...SSHOption) (*SSHClient, error)
```

使用灵活的配置选项建立一个 SSH 连接，返回可执行命令与传输文件的客户端

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| host | `string` | 目标地址，格式为 host 或 host:port，未指定端口时默认 22 |

**可选参数**

可作为可变参数 `opts ...SSHOption` 传入选项；共 6 个可用选项，详见 [SSHOption 选项列表](#option-sshoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*SSHClient` | SSH 客户端对象，可调用 Run/RunScript/UploadFile 等方法 |
| r2 | `error` | 错误信息，连接或认证失败时返回非空 |

**示例**

``````````````yak
// 建立 SSH 连接并执行命令，依赖目标服务，此处仅作示意
client = ssh.Connect("example.com:22", ssh.username("root"), ssh.password("pass"), ssh.timeout(5))~
defer client.Close()
output = client.Run("whoami")~
println(output)
``````````````

---

## 可变参数选项列表

以下按选项类型汇总全部可变参数选项(原先重复在各主函数下的选项表已收拢到此处)：

### 1. 类型：SSHOption {#option-sshoption}

涉及到的函数有：[ssh.Connect](#connect)

|选项函数|参数|返回值|说明|
|:--|:--|:--|:--|
| `ssh.keyPassphrase` | `passphrase string` | `SSHOption` | 是一个 SSH 连接配置选项，用于设置加密私钥的口令 |
| `ssh.password` | `password string` | `SSHOption` | 是一个 SSH 连接配置选项，用于设置登录密码 |
| `ssh.port` | `port int` | `SSHOption` | 是一个 SSH 连接配置选项，用于设置 SSH 服务器端口 |
| `ssh.privateKey` | `keyPath string` | `SSHOption` | 是一个 SSH 连接配置选项，用于设置私钥文件路径以进行密钥认证 |
| `ssh.timeout` | `timeout float64` | `SSHOption` | 是一个 SSH 连接配置选项，用于设置连接超时时间（单位：秒） |
| `ssh.username` | `username string` | `SSHOption` | 是一个 SSH 连接配置选项，用于设置登录用户名 |

