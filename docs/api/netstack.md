# netstack {#library-netstack}

`netstack` 库提供用户态网络栈与系统路由管理能力，可创建特权网络设备（TUN）、构建用户态网络虚拟机、管理系统路由，常用于流量重定向、代理底座与高级网络操作。这些操作通常需要管理员/root 权限。

典型使用场景：

- 网络设备与虚拟机：`netstack.CreatePrivilegedDevice` / `netstack.CreatePrivilegedDeviceWithMTU` 创建 TUN 设备，`netstack.NewVMFromDevice` 在其上构建用户态网络栈虚拟机。
- 路由管理：`netstack.GetSystemRouteManager` / `netstack.GetPrivilegedSystemRouteManager` 管理系统路由，`netstack.FastKillTCP` 快速断开 TCP 连接。

与相邻库的关系：`netstack` 偏底层网络栈，与 `netutils`（路由表增删）、`pcapx`（抓包/造包）配合，用于构建代理、流量牵引等高级网络场景。

> 共 7 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [netstack.CreatePrivilegedDevice](#createprivilegeddevice) | - | `lowtun.Device, error` | 创建一个使用默认 MTU(1500) 的特权 TUN 虚拟网卡（导出名为 netstack.CreatePrivilegedDevice） |
| [netstack.CreatePrivilegedDeviceWithMTU](#createprivilegeddevicewithmtu) | `mtu int` | `lowtun.Device, error` | 创建一个使用指定 MTU 的特权 TUN 虚拟网卡（导出名为 netstack.CreatePrivilegedDeviceWithMTU） |
| [netstack.GetPrivilegedSystemRouteManager](#getprivilegedsystemroutemanager) | - | `*SystemRouteManager, error` | 创建一个带特权路由设备的系统路由管理器（导出名为 netstack.GetPrivilegedSystemRouteManager） |
| [netstack.GetSystemRouteManager](#getsystemroutemanager) | - | `*SystemRouteManager` | 获取系统路由管理器的单例实例（导出名为 netstack.GetSystemRouteManager） |
| [netstack.NewVMFromDevice](#newvmfromdevice) | `device lowtun.Device` | `*NetstackVM, error` | 基于一个 TUN 设备创建网络栈虚拟机（导出名为 netstack.NewVMFromDevice） |
| [netstack.NewVMFromDeviceWithContext](#newvmfromdevicewithcontext) | `ctx context.Context, device lowtun.Device` | `*NetstackVM, error` | 基于 TUN 设备与自定义上下文创建网络栈虚拟机（导出名为 netstack.NewVMFromDeviceWithContext） |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [netstack.FastKillTCP](#fastkilltcp) | `killDuration time.Duration, target ...string` | `error` | 在指定时间窗口内快速切断匹配目标的 TCP 连接（导出名为 netstack.FastKillTCP） |

## 函数详情

### CreatePrivilegedDevice {#createprivilegeddevice}

```go
CreatePrivilegedDevice() (lowtun.Device, error)
```

创建一个使用默认 MTU(1500) 的特权 TUN 虚拟网卡（导出名为 netstack.CreatePrivilegedDevice）

需要管理员/root 权限；返回的设备可交给 netstack.NewVMFromDevice 构建网络栈虚拟机

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `lowtun.Device` | TUN 设备对象 |
| r2 | `error` | 错误信息（权限不足或创建失败时返回） |

**示例**

``````````````yak
// 真实功能示例：创建 TUN 设备并构建网络栈虚拟机（需要 root 权限，示意性用法）
device = netstack.CreatePrivilegedDevice()~
vm = netstack.NewVMFromDevice(device)~
println("tunnel:", vm.GetTunnelName())
defer vm.Close()
``````````````

---

### CreatePrivilegedDeviceWithMTU {#createprivilegeddevicewithmtu}

```go
CreatePrivilegedDeviceWithMTU(mtu int) (lowtun.Device, error)
```

创建一个使用指定 MTU 的特权 TUN 虚拟网卡（导出名为 netstack.CreatePrivilegedDeviceWithMTU）

需要管理员/root 权限；MTU 取值范围为 1 到 9000

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| mtu | `int` | 最大传输单元，常用 1500，巨帧场景可设更大（不超过 9000） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `lowtun.Device` | TUN 设备对象 |
| r2 | `error` | 错误信息（MTU 非法、权限不足或创建失败时返回） |

**示例**

``````````````yak
// 真实功能示例：以 1400 的 MTU 创建 TUN 设备（需要 root 权限，示意性用法）
device = netstack.CreatePrivilegedDeviceWithMTU(1400)~
vm = netstack.NewVMFromDevice(device)~
defer vm.Close()
``````````````

---

### GetPrivilegedSystemRouteManager {#getprivilegedsystemroutemanager}

```go
GetPrivilegedSystemRouteManager() (*SystemRouteManager, error)
```

创建一个带特权路由设备的系统路由管理器（导出名为 netstack.GetPrivilegedSystemRouteManager）

需要管理员/root 权限；相比 GetSystemRouteManager，它会额外创建一个特权路由设备，可实际下发路由

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*SystemRouteManager` | 系统路由管理器对象 |
| r2 | `error` | 错误信息（权限不足或创建路由设备失败时返回） |

**示例**

``````````````yak
// 真实功能示例：获取带特权设备的路由管理器（需要 root 权限，示意性用法）
rm = netstack.GetPrivilegedSystemRouteManager()~
println(rm)
``````````````

---

### GetSystemRouteManager {#getsystemroutemanager}

```go
GetSystemRouteManager() *SystemRouteManager
```

获取系统路由管理器的单例实例（导出名为 netstack.GetSystemRouteManager）

路由管理器用于记录与管理由本程序添加的系统路由，单例会在首次获取时从数据库加载已有记录

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*SystemRouteManager` | 系统路由管理器单例对象 |

**示例**

``````````````yak
// 真实功能示例：获取路由管理器并查看已记录的路由（需要相应权限，示意性用法）
rm = netstack.GetSystemRouteManager()
println(rm)
``````````````

---

### NewVMFromDevice {#newvmfromdevice}

```go
NewVMFromDevice(device lowtun.Device) (*NetstackVM, error)
```

基于一个 TUN 设备创建网络栈虚拟机（导出名为 netstack.NewVMFromDevice）

该虚拟机会劫持流经 TUN 设备的 TCP 连接，可通过 StartForwarding 把连接转发到通道，进而交给 tcpmitm 处理

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| device | `lowtun.Device` | 由 netstack.CreatePrivilegedDevice 等创建的 TUN 设备 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*NetstackVM` | 网络栈虚拟机对象（使用完毕需调用 Close 释放） |
| r2 | `error` | 错误信息（设备为空或初始化失败时返回） |

**示例**

``````````````yak
// 真实功能示例：劫持 TCP 连接并转发到通道供后续处理（需要 root 权限，示意性用法）
device = netstack.CreatePrivilegedDevice()~
vm = netstack.NewVMFromDevice(device)~
defer vm.Close()
connChan = make(chan any, 16)
vm.StartForwarding(connChan)~
``````````````

---

### NewVMFromDeviceWithContext {#newvmfromdevicewithcontext}

```go
NewVMFromDeviceWithContext(ctx context.Context, device lowtun.Device) (*NetstackVM, error)
```

基于 TUN 设备与自定义上下文创建网络栈虚拟机（导出名为 netstack.NewVMFromDeviceWithContext）

与 netstack.NewVMFromDevice 类似，但可通过上下文统一控制虚拟机生命周期（上下文取消即停止）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| ctx | `context.Context` | 控制虚拟机生命周期的上下文 |
| device | `lowtun.Device` | 由 netstack.CreatePrivilegedDevice 等创建的 TUN 设备 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*NetstackVM` | 网络栈虚拟机对象（使用完毕需调用 Close 释放） |
| r2 | `error` | 错误信息（设备为空或初始化失败时返回） |

**示例**

``````````````yak
// 真实功能示例：用带超时的上下文限制虚拟机运行时长（需要 root 权限，示意性用法）
ctx = context.WithTimeout(context.Background(), 60 * time.Second)
device = netstack.CreatePrivilegedDevice()~
vm = netstack.NewVMFromDeviceWithContext(ctx, device)~
defer vm.Close()
``````````````

---

## 可变参数函数详情

### FastKillTCP {#fastkilltcp}

```go
FastKillTCP(killDuration time.Duration, target ...string) error
```

在指定时间窗口内快速切断匹配目标的 TCP 连接（导出名为 netstack.FastKillTCP）

需要相应的网络权限；通过在公网出口接管并发送 RST 等方式，干扰/切断到目标的现有 TCP 连接

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| killDuration | `time.Duration` | 持续切断的时间窗口（time.Duration） |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| target | `...string` | 可选的目标过滤（如 IP 或 IP:Port），不传则按默认策略处理 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息（获取路由失败或执行失败时返回） |

**示例**

``````````````yak
// 真实功能示例：在 5 秒内切断到指定目标的 TCP 连接（需要相应权限，示意性用法）
netstack.FastKillTCP(5 * time.Second, "1.2.3.4:443")~
``````````````

---

