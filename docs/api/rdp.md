# rdp {#library-rdp}

`rdp` 库提供 RDP（远程桌面协议）相关能力，用于检测 RDP 服务版本与凭据验证，常用于资产识别与认证安全评估。

典型使用场景：

- 版本探测：`rdp.Version(addr, timeout)` 探测目标 RDP 服务的版本信息。
- 登录验证：`rdp.Login(ip, domain, user, password, port)` 验证一组凭据是否能登录 RDP。

与相邻库的关系：`rdp` 属于协议交互工具，常与 `brute`（凭据爆破）、`servicescan`（服务识别）配合用于远程桌面的安全评估。

> 共 2 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [rdp.Login](#login) | `ip string, domain string, user string, password string, port int` | `bool, error` |  |
| [rdp.Version](#version) | `addr string, timeout time.Duration` | `string, []string, error` | 探测目标 RDP 服务的操作系统版本信息 |

## 函数详情

### Login {#login}

```go
Login(ip string, domain string, user string, password string, port int) (_ bool, err error)
```

暂无描述

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| ip | `string` |  |
| domain | `string` |  |
| user | `string` |  |
| password | `string` |  |
| port | `int` |  |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| _ | `bool` |  |
| err | `error` |  |

---

### Version {#version}

```go
Version(addr string, timeout time.Duration) (_ string, _ []string, finalResult error)
```

探测目标 RDP 服务的操作系统版本信息

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| addr | `string` | 目标地址，格式为 host:port |
| timeout | `time.Duration` | 探测的超时时间 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| _ | `string` | 识别到的操作系统版本描述字符串 |
| _ | `[]string` | 命中的版本指纹细节列表 |
| finalResult | `error` | 错误信息，探测失败时返回非空 |

**示例**

``````````````yak
// 探测 RDP 服务版本，依赖目标服务，此处仅作示意
version, details, err = rdp.Version("192.168.1.1:3389", 5)
println(version)
``````````````

---

