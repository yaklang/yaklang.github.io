# netutils {#library-netutils}

`netutils` 库提供系统路由表的增删操作，把指定 IP/网段的路由绑定到某个网络接口或删除，常用于流量牵引、分流与代理环境配置。这些操作通常需要管理员/root 权限。

典型使用场景：

- 添加路由：`netutils.AddIPRouteToNetInterface` / `netutils.AddSpecificIPRouteToNetInterface` 把 IP 路由到指定接口，`netutils.BatchAddSpecificIPRouteToNetInterface` 批量添加。
- 删除路由：`netutils.DeleteIPRoute` / `netutils.DeleteSpecificIPRoute` / `netutils.BatchDeleteSpecificIPRoute` 删除路由，`netutils.DeleteAllRoutesForInterface` 清空某接口的路由。

与相邻库的关系：`netutils` 与 `netstack`（用户态网络栈）配合，用于把目标流量牵引到代理/虚拟网络栈处理。

> 共 8 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [netutils.AddIPRouteToNetInterface](#addiproutetonetinterface) | `ipOrIPAddrs any, ifaceName string` | `error` | 添加 IP 主机路由到指定网络接口（导出名为 netutils.AddIPRouteToNetInterface） |
| [netutils.AddSpecificIPRouteToNetInterface](#addspecificiproutetonetinterface) | `ipStr string, interfaceName string` | `error` | 为单个 IP 向指定网络接口添加 /32 主机路由（导出名为 netutils.AddSpecificIPRouteToNetInterface） |
| [netutils.BatchAddSpecificIPRouteToNetInterface](#batchaddspecificiproutetonetinterface) | `ipList []string, interfaceName string` | `[]string, map[string]error` | 批量为多个 IP 向指定接口添加 /32 主机路由（导出名为 netutils.BatchAddSpecificIPRouteToNetInterface） |
| [netutils.BatchDeleteSpecificIPRoute](#batchdeletespecificiproute) | `ipList []string` | `[]string, map[string]error` | 批量删除多个 IP 的 /32 主机路由（导出名为 netutils.BatchDeleteSpecificIPRoute） |
| [netutils.DeleteAllRoutesForInterface](#deleteallroutesforinterface) | `interfaceName string` | `[]string, map[string]error, error` | 删除指定网络接口上的所有 /32 主机路由（导出名为 netutils.DeleteAllRoutesForInterface） |
| [netutils.DeleteIPRoute](#deleteiproute) | `ipOrIPAddrs any` | `error` | 删除此前添加的 IP 主机路由（导出名为 netutils.DeleteIPRoute） |
| [netutils.DeleteIPRouteFromNetInterface](#deleteiproutefromnetinterface) | `ifaceName string` | `error` | 删除指定网络接口上的所有 /32 主机路由（导出名为 netutils.DeleteIPRouteFromNetInterface） |
| [netutils.DeleteSpecificIPRoute](#deletespecificiproute) | `ipStr string` | `error` | 删除单个 IP 的 /32 主机路由（导出名为 netutils.DeleteSpecificIPRoute） |

## 函数详情

### AddIPRouteToNetInterface {#addiproutetonetinterface}

```go
AddIPRouteToNetInterface(ipOrIPAddrs any, ifaceName string) error
```

添加 IP 主机路由到指定网络接口（导出名为 netutils.AddIPRouteToNetInterface）

需要管理员/root 权限；支持单个 IP(string) 或多个 IP([]string 等可转换切片)，会为每个 IP 添加 /32 主机路由

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| ipOrIPAddrs | `any` | IP 地址，支持 string、[]string 或可被 InterfaceToStringSlice 转换的类型 |
| ifaceName | `string` | 目标网络接口名称（如 &#34;en0&#34;、&#34;eth0&#34;） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息（权限不足、接口不存在或添加失败时返回） |

**示例**

``````````````yak
// 真实功能示例：把若干 IP 的流量定向到指定网卡（需要 root 权限，示意性用法）
netutils.AddIPRouteToNetInterface(["1.1.1.1", "8.8.8.8"], "en0")~
``````````````

---

### AddSpecificIPRouteToNetInterface {#addspecificiproutetonetinterface}

```go
AddSpecificIPRouteToNetInterface(ipStr string, interfaceName string) error
```

为单个 IP 向指定网络接口添加 /32 主机路由（导出名为 netutils.AddSpecificIPRouteToNetInterface）

需要管理员/root 权限，是 AddIPRouteToNetInterface 的底层单 IP 版本

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| ipStr | `string` | 单个 IP 地址 |
| interfaceName | `string` | 目标网络接口名称（如 &#34;eth0&#34;） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息（权限不足、接口不存在或添加失败时返回） |

**示例**

``````````````yak
// 真实功能示例：为单个 IP 添加主机路由（需要 root 权限，示意性用法）
netutils.AddSpecificIPRouteToNetInterface("1.1.1.1", "eth0")~
``````````````

---

### BatchAddSpecificIPRouteToNetInterface {#batchaddspecificiproutetonetinterface}

```go
BatchAddSpecificIPRouteToNetInterface(ipList []string, interfaceName string) (success []string, failed map[string]error)
```

批量为多个 IP 向指定接口添加 /32 主机路由（导出名为 netutils.BatchAddSpecificIPRouteToNetInterface）

需要管理员/root 权限；批量操作只需一次提权，效率更高

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| ipList | `[]string` | 多个 IP 地址组成的列表 |
| interfaceName | `string` | 目标网络接口名称（如 &#34;eth0&#34;） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| success | `[]string` | 添加成功的 IP 列表 |
| failed | `map[string]error` | 添加失败的 IP 到错误的映射 |

**示例**

``````````````yak
// 真实功能示例：批量添加主机路由并查看成功数（需要 root 权限，示意性用法）
success, failed = netutils.BatchAddSpecificIPRouteToNetInterface(["1.1.1.1", "8.8.8.8"], "eth0")
println("ok:", len(success), "fail:", len(failed))
``````````````

---

### BatchDeleteSpecificIPRoute {#batchdeletespecificiproute}

```go
BatchDeleteSpecificIPRoute(ipList []string) (success []string, failed map[string]error)
```

批量删除多个 IP 的 /32 主机路由（导出名为 netutils.BatchDeleteSpecificIPRoute）

需要管理员/root 权限；批量操作只需一次提权

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| ipList | `[]string` | 多个 IP 地址组成的列表 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| success | `[]string` | 删除成功的 IP 列表 |
| failed | `map[string]error` | 删除失败的 IP 到错误的映射 |

**示例**

``````````````yak
// 真实功能示例：批量删除主机路由（需要 root 权限，示意性用法）
success, failed = netutils.BatchDeleteSpecificIPRoute(["1.1.1.1", "8.8.8.8"])
println("ok:", len(success), "fail:", len(failed))
``````````````

---

### DeleteAllRoutesForInterface {#deleteallroutesforinterface}

```go
DeleteAllRoutesForInterface(interfaceName string) (success []string, failed map[string]error, err error)
```

删除指定网络接口上的所有 /32 主机路由（导出名为 netutils.DeleteAllRoutesForInterface）

需要管理员/root 权限；只删除掩码为 /32 的特定 IP 路由，不影响 default 与网段路由

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| interfaceName | `string` | 网络接口名称（如 &#34;eth0&#34;） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| success | `[]string` | 删除成功的 IP 列表 |
| failed | `map[string]error` | 删除失败的 IP 到错误的映射 |
| err | `error` | 错误信息（接口名非法等情况返回） |

**示例**

``````````````yak
// 真实功能示例：清理某网卡上所有 /32 主机路由（需要 root 权限，示意性用法）
success, failed, err = netutils.DeleteAllRoutesForInterface("eth0")
println("ok:", len(success))
``````````````

---

### DeleteIPRoute {#deleteiproute}

```go
DeleteIPRoute(ipOrIPAddrs any) error
```

删除此前添加的 IP 主机路由（导出名为 netutils.DeleteIPRoute）

需要管理员/root 权限；支持单个 IP(string) 或多个 IP([]string 等可转换切片)

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| ipOrIPAddrs | `any` | IP 地址，支持 string、[]string 或可被 InterfaceToStringSlice 转换的类型 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息（权限不足或删除失败时返回） |

**示例**

``````````````yak
// 真实功能示例：删除之前添加的主机路由（需要 root 权限，示意性用法）
netutils.DeleteIPRoute(["1.1.1.1", "8.8.8.8"])~
``````````````

---

### DeleteIPRouteFromNetInterface {#deleteiproutefromnetinterface}

```go
DeleteIPRouteFromNetInterface(ifaceName string) error
```

删除指定网络接口上的所有 /32 主机路由（导出名为 netutils.DeleteIPRouteFromNetInterface）

需要管理员/root 权限；常用于清理之前通过 AddIPRouteToNetInterface 添加到该接口的所有路由

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| ifaceName | `string` | 网络接口名称（如 &#34;en0&#34;、&#34;eth0&#34;） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息（权限不足、接口不存在或删除失败时返回） |

**示例**

``````````````yak
// 真实功能示例：清理某网卡上所有由本程序添加的主机路由（需要 root 权限，示意性用法）
netutils.DeleteIPRouteFromNetInterface("en0")~
``````````````

---

### DeleteSpecificIPRoute {#deletespecificiproute}

```go
DeleteSpecificIPRoute(ipStr string) error
```

删除单个 IP 的 /32 主机路由（导出名为 netutils.DeleteSpecificIPRoute）

需要管理员/root 权限，是 DeleteIPRoute 的底层单 IP 版本

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| ipStr | `string` | 单个 IP 地址 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息（权限不足或删除失败时返回） |

**示例**

``````````````yak
// 真实功能示例：删除单个 IP 的主机路由（需要 root 权限，示意性用法）
netutils.DeleteSpecificIPRoute("1.1.1.1")~
``````````````

---

