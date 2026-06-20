# netutils

|函数名|函数描述/介绍|
|:------|:--------|
| [netutils.AddIPRouteToNetInterface](#addiproutetonetinterface) |AddIPRouteToNetInterface 添加 IP 主机路由到指定网络接口（导出名为 netutils.AddIPRouteToNetInterface） 需要管理员/root 权限；支持单个 IP(string) 或多个 IP([]string 等可转换切片)，会为每个 IP 添加 /3...|
| [netutils.AddSpecificIPRouteToNetInterface](#addspecificiproutetonetinterface) |AddSpecificIPRouteToNetInterface 为单个 IP 向指定网络接口添加 /32 主机路由（导出名为 netutils.AddSpecificIPRouteToNetInterface） 需要管理员/root 权限，是 AddIPRouteToNetInterface 的底...|
| [netutils.BatchAddSpecificIPRouteToNetInterface](#batchaddspecificiproutetonetinterface) |BatchAddSpecificIPRouteToNetInterface 批量为多个 IP 向指定接口添加 /32 主机路由（导出名为 netutils.BatchAddSpecificIPRouteToNetInterface） 需要管理员/root 权限；批量操作只需一次提权，效率更高 参数:...|
| [netutils.BatchDeleteSpecificIPRoute](#batchdeletespecificiproute) |BatchDeleteSpecificIPRoute 批量删除多个 IP 的 /32 主机路由（导出名为 netutils.BatchDeleteSpecificIPRoute） 需要管理员/root 权限；批量操作只需一次提权 参数: - ipList: 多个 IP 地址组成的列表 返回值: - ...|
| [netutils.DeleteAllRoutesForInterface](#deleteallroutesforinterface) |DeleteAllRoutesForInterface 删除指定网络接口上的所有 /32 主机路由（导出名为 netutils.DeleteAllRoutesForInterface） 需要管理员/root 权限；只删除掩码为 /32 的特定 IP 路由，不影响 default 与网段路由 参数: ...|
| [netutils.DeleteIPRoute](#deleteiproute) |DeleteIPRoute 删除此前添加的 IP 主机路由（导出名为 netutils.DeleteIPRoute） 需要管理员/root 权限；支持单个 IP(string) 或多个 IP([]string 等可转换切片) 参数: - ipOrIPAddrs: IP 地址，支持 string、[]...|
| [netutils.DeleteIPRouteFromNetInterface](#deleteiproutefromnetinterface) |DeleteIPRouteFromNetInterface 删除指定网络接口上的所有 /32 主机路由（导出名为 netutils.DeleteIPRouteFromNetInterface） 需要管理员/root 权限；常用于清理之前通过 AddIPRouteToNetInterface 添加到该...|
| [netutils.DeleteSpecificIPRoute](#deletespecificiproute) |DeleteSpecificIPRoute 删除单个 IP 的 /32 主机路由（导出名为 netutils.DeleteSpecificIPRoute） 需要管理员/root 权限，是 DeleteIPRoute 的底层单 IP 版本 参数: - ipStr: 单个 IP 地址 返回值: - 错误...|


## 函数定义
### AddIPRouteToNetInterface

#### 详细描述
AddIPRouteToNetInterface 添加 IP 主机路由到指定网络接口（导出名为 netutils.AddIPRouteToNetInterface）

需要管理员/root 权限；支持单个 IP(string) 或多个 IP([]string 等可转换切片)，会为每个 IP 添加 /32 主机路由



参数:

  - ipOrIPAddrs: IP 地址，支持 string、[]string 或可被 InterfaceToStringSlice 转换的类型

  - ifaceName: 目标网络接口名称（如 &#34;en0&#34;、&#34;eth0&#34;）



返回值:

  - 错误信息（权限不足、接口不存在或添加失败时返回）




Example:

``````````````yak
// 真实功能示例：把若干 IP 的流量定向到指定网卡（需要 root 权限，示意性用法）
netutils.AddIPRouteToNetInterface(["1.1.1.1", "8.8.8.8"], "en0")~
``````````````


#### 定义

`AddIPRouteToNetInterface(ipOrIPAddrs any, ifaceName string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ipOrIPAddrs | `any` | IP 地址，支持 string、[]string 或可被 InterfaceToStringSlice 转换的类型 |
| ifaceName | `string` | 目标网络接口名称（如 &#34;en0&#34;、&#34;eth0&#34;） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息（权限不足、接口不存在或添加失败时返回） |


### AddSpecificIPRouteToNetInterface

#### 详细描述
AddSpecificIPRouteToNetInterface 为单个 IP 向指定网络接口添加 /32 主机路由（导出名为 netutils.AddSpecificIPRouteToNetInterface）

需要管理员/root 权限，是 AddIPRouteToNetInterface 的底层单 IP 版本



参数:

  - ipStr: 单个 IP 地址

  - interfaceName: 目标网络接口名称（如 &#34;eth0&#34;）



返回值:

  - 错误信息（权限不足、接口不存在或添加失败时返回）




Example:

``````````````yak
// 真实功能示例：为单个 IP 添加主机路由（需要 root 权限，示意性用法）
netutils.AddSpecificIPRouteToNetInterface("1.1.1.1", "eth0")~
``````````````


#### 定义

`AddSpecificIPRouteToNetInterface(ipStr string, interfaceName string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ipStr | `string` | 单个 IP 地址 |
| interfaceName | `string` | 目标网络接口名称（如 &#34;eth0&#34;） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息（权限不足、接口不存在或添加失败时返回） |


### BatchAddSpecificIPRouteToNetInterface

#### 详细描述
BatchAddSpecificIPRouteToNetInterface 批量为多个 IP 向指定接口添加 /32 主机路由（导出名为 netutils.BatchAddSpecificIPRouteToNetInterface）

需要管理员/root 权限；批量操作只需一次提权，效率更高



参数:

  - ipList: 多个 IP 地址组成的列表

  - interfaceName: 目标网络接口名称（如 &#34;eth0&#34;）



返回值:

  - 添加成功的 IP 列表

  - 添加失败的 IP 到错误的映射




Example:

``````````````yak
// 真实功能示例：批量添加主机路由并查看成功数（需要 root 权限，示意性用法）
success, failed = netutils.BatchAddSpecificIPRouteToNetInterface(["1.1.1.1", "8.8.8.8"], "eth0")
println("ok:", len(success), "fail:", len(failed))
``````````````


#### 定义

`BatchAddSpecificIPRouteToNetInterface(ipList []string, interfaceName string) (success []string, failed map[string]error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ipList | `[]string` | 多个 IP 地址组成的列表 |
| interfaceName | `string` | 目标网络接口名称（如 &#34;eth0&#34;） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| success | `[]string` | 添加成功的 IP 列表 |
| failed | `map[string]error` | 添加失败的 IP 到错误的映射 |


### BatchDeleteSpecificIPRoute

#### 详细描述
BatchDeleteSpecificIPRoute 批量删除多个 IP 的 /32 主机路由（导出名为 netutils.BatchDeleteSpecificIPRoute）

需要管理员/root 权限；批量操作只需一次提权



参数:

  - ipList: 多个 IP 地址组成的列表



返回值:

  - 删除成功的 IP 列表

  - 删除失败的 IP 到错误的映射




Example:

``````````````yak
// 真实功能示例：批量删除主机路由（需要 root 权限，示意性用法）
success, failed = netutils.BatchDeleteSpecificIPRoute(["1.1.1.1", "8.8.8.8"])
println("ok:", len(success), "fail:", len(failed))
``````````````


#### 定义

`BatchDeleteSpecificIPRoute(ipList []string) (success []string, failed map[string]error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ipList | `[]string` | 多个 IP 地址组成的列表 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| success | `[]string` | 删除成功的 IP 列表 |
| failed | `map[string]error` | 删除失败的 IP 到错误的映射 |


### DeleteAllRoutesForInterface

#### 详细描述
DeleteAllRoutesForInterface 删除指定网络接口上的所有 /32 主机路由（导出名为 netutils.DeleteAllRoutesForInterface）

需要管理员/root 权限；只删除掩码为 /32 的特定 IP 路由，不影响 default 与网段路由



参数:

  - interfaceName: 网络接口名称（如 &#34;eth0&#34;）



返回值:

  - 删除成功的 IP 列表

  - 删除失败的 IP 到错误的映射

  - 错误信息（接口名非法等情况返回）




Example:

``````````````yak
// 真实功能示例：清理某网卡上所有 /32 主机路由（需要 root 权限，示意性用法）
success, failed, err = netutils.DeleteAllRoutesForInterface("eth0")
println("ok:", len(success))
``````````````


#### 定义

`DeleteAllRoutesForInterface(interfaceName string) (success []string, failed map[string]error, err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| interfaceName | `string` | 网络接口名称（如 &#34;eth0&#34;） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| success | `[]string` | 删除成功的 IP 列表 |
| failed | `map[string]error` | 删除失败的 IP 到错误的映射 |
| err | `error` | 错误信息（接口名非法等情况返回） |


### DeleteIPRoute

#### 详细描述
DeleteIPRoute 删除此前添加的 IP 主机路由（导出名为 netutils.DeleteIPRoute）

需要管理员/root 权限；支持单个 IP(string) 或多个 IP([]string 等可转换切片)



参数:

  - ipOrIPAddrs: IP 地址，支持 string、[]string 或可被 InterfaceToStringSlice 转换的类型



返回值:

  - 错误信息（权限不足或删除失败时返回）




Example:

``````````````yak
// 真实功能示例：删除之前添加的主机路由（需要 root 权限，示意性用法）
netutils.DeleteIPRoute(["1.1.1.1", "8.8.8.8"])~
``````````````


#### 定义

`DeleteIPRoute(ipOrIPAddrs any) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ipOrIPAddrs | `any` | IP 地址，支持 string、[]string 或可被 InterfaceToStringSlice 转换的类型 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息（权限不足或删除失败时返回） |


### DeleteIPRouteFromNetInterface

#### 详细描述
DeleteIPRouteFromNetInterface 删除指定网络接口上的所有 /32 主机路由（导出名为 netutils.DeleteIPRouteFromNetInterface）

需要管理员/root 权限；常用于清理之前通过 AddIPRouteToNetInterface 添加到该接口的所有路由



参数:

  - ifaceName: 网络接口名称（如 &#34;en0&#34;、&#34;eth0&#34;）



返回值:

  - 错误信息（权限不足、接口不存在或删除失败时返回）




Example:

``````````````yak
// 真实功能示例：清理某网卡上所有由本程序添加的主机路由（需要 root 权限，示意性用法）
netutils.DeleteIPRouteFromNetInterface("en0")~
``````````````


#### 定义

`DeleteIPRouteFromNetInterface(ifaceName string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ifaceName | `string` | 网络接口名称（如 &#34;en0&#34;、&#34;eth0&#34;） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息（权限不足、接口不存在或删除失败时返回） |


### DeleteSpecificIPRoute

#### 详细描述
DeleteSpecificIPRoute 删除单个 IP 的 /32 主机路由（导出名为 netutils.DeleteSpecificIPRoute）

需要管理员/root 权限，是 DeleteIPRoute 的底层单 IP 版本



参数:

  - ipStr: 单个 IP 地址



返回值:

  - 错误信息（权限不足或删除失败时返回）




Example:

``````````````yak
// 真实功能示例：删除单个 IP 的主机路由（需要 root 权限，示意性用法）
netutils.DeleteSpecificIPRoute("1.1.1.1")~
``````````````


#### 定义

`DeleteSpecificIPRoute(ipStr string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ipStr | `string` | 单个 IP 地址 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息（权限不足或删除失败时返回） |


