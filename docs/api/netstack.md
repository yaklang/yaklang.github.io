# netstack

|函数名|函数描述/介绍|
|:------|:--------|
| [netstack.CreatePrivilegedDevice](#createprivilegeddevice) |CreatePrivilegedDevice 创建一个使用默认 MTU(1500) 的特权 TUN 虚拟网卡（导出名为 netstack.CreatePrivilegedDevice） 需要管理员/root 权限；返回的设备可交给 netstack.NewVMFromDevice 构建网络栈虚拟机 ...|
| [netstack.CreatePrivilegedDeviceWithMTU](#createprivilegeddevicewithmtu) |CreatePrivilegedDeviceWithMTU 创建一个使用指定 MTU 的特权 TUN 虚拟网卡（导出名为 netstack.CreatePrivilegedDeviceWithMTU） 需要管理员/root 权限；MTU 取值范围为 1 到 9000 参数: - mtu: 最大传输单...|
| [netstack.FastKillTCP](#fastkilltcp) |FastKillTCP 在指定时间窗口内快速切断匹配目标的 TCP 连接（导出名为 netstack.FastKillTCP） 需要相应的网络权限；通过在公网出口接管并发送 RST 等方式，干扰/切断到目标的现有 TCP 连接 参数: - killDuration: 持续切断的时间窗口（time.D...|
| [netstack.GetPrivilegedSystemRouteManager](#getprivilegedsystemroutemanager) |GetPrivilegedSystemRouteManager 创建一个带特权路由设备的系统路由管理器（导出名为 netstack.GetPrivilegedSystemRouteManager） 需要管理员/root 权限；相比 GetSystemRouteManager，它会额外创建一个特权路由...|
| [netstack.GetSystemRouteManager](#getsystemroutemanager) |GetSystemRouteManager 获取系统路由管理器的单例实例（导出名为 netstack.GetSystemRouteManager） 路由管理器用于记录与管理由本程序添加的系统路由，单例会在首次获取时从数据库加载已有记录 返回值: - 系统路由管理器单例对象|
| [netstack.NewVMFromDevice](#newvmfromdevice) |NewVMFromDevice 基于一个 TUN 设备创建网络栈虚拟机（导出名为 netstack.NewVMFromDevice） 该虚拟机会劫持流经 TUN 设备的 TCP 连接，可通过 StartForwarding 把连接转发到通道，进而交给 tcpmitm 处理 参数: - device:...|
| [netstack.NewVMFromDeviceWithContext](#newvmfromdevicewithcontext) |NewVMFromDeviceWithContext 基于 TUN 设备与自定义上下文创建网络栈虚拟机（导出名为 netstack.NewVMFromDeviceWithContext） 与 netstack.NewVMFromDevice 类似，但可通过上下文统一控制虚拟机生命周期（上下文取消即停...|


## 函数定义
### CreatePrivilegedDevice

#### 详细描述
CreatePrivilegedDevice 创建一个使用默认 MTU(1500) 的特权 TUN 虚拟网卡（导出名为 netstack.CreatePrivilegedDevice）

需要管理员/root 权限；返回的设备可交给 netstack.NewVMFromDevice 构建网络栈虚拟机



返回值:

  - TUN 设备对象

  - 错误信息（权限不足或创建失败时返回）




Example:

``````````````yak
// 真实功能示例：创建 TUN 设备并构建网络栈虚拟机（需要 root 权限，示意性用法）
device = netstack.CreatePrivilegedDevice()~
vm = netstack.NewVMFromDevice(device)~
println("tunnel:", vm.GetTunnelName())
defer vm.Close()
``````````````


#### 定义

`CreatePrivilegedDevice() (lowtun.Device, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `lowtun.Device` | TUN 设备对象 |
| r2 | `error` | 错误信息（权限不足或创建失败时返回） |


### CreatePrivilegedDeviceWithMTU

#### 详细描述
CreatePrivilegedDeviceWithMTU 创建一个使用指定 MTU 的特权 TUN 虚拟网卡（导出名为 netstack.CreatePrivilegedDeviceWithMTU）

需要管理员/root 权限；MTU 取值范围为 1 到 9000



参数:

  - mtu: 最大传输单元，常用 1500，巨帧场景可设更大（不超过 9000）



返回值:

  - TUN 设备对象

  - 错误信息（MTU 非法、权限不足或创建失败时返回）




Example:

``````````````yak
// 真实功能示例：以 1400 的 MTU 创建 TUN 设备（需要 root 权限，示意性用法）
device = netstack.CreatePrivilegedDeviceWithMTU(1400)~
vm = netstack.NewVMFromDevice(device)~
defer vm.Close()
``````````````


#### 定义

`CreatePrivilegedDeviceWithMTU(mtu int) (lowtun.Device, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| mtu | `int` | 最大传输单元，常用 1500，巨帧场景可设更大（不超过 9000） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `lowtun.Device` | TUN 设备对象 |
| r2 | `error` | 错误信息（MTU 非法、权限不足或创建失败时返回） |


### FastKillTCP

#### 详细描述
FastKillTCP 在指定时间窗口内快速切断匹配目标的 TCP 连接（导出名为 netstack.FastKillTCP）

需要相应的网络权限；通过在公网出口接管并发送 RST 等方式，干扰/切断到目标的现有 TCP 连接



参数:

  - killDuration: 持续切断的时间窗口（time.Duration）

  - target: 可选的目标过滤（如 IP 或 IP:Port），不传则按默认策略处理



返回值:

  - 错误信息（获取路由失败或执行失败时返回）




Example:

``````````````yak
// 真实功能示例：在 5 秒内切断到指定目标的 TCP 连接（需要相应权限，示意性用法）
netstack.FastKillTCP(5 * time.Second, "1.2.3.4:443")~
``````````````


#### 定义

`FastKillTCP(killDuration time.Duration, target ...string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| killDuration | `time.Duration` | 持续切断的时间窗口（time.Duration） |
| target | `...string` | 可选的目标过滤（如 IP 或 IP:Port），不传则按默认策略处理 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息（获取路由失败或执行失败时返回） |


### GetPrivilegedSystemRouteManager

#### 详细描述
GetPrivilegedSystemRouteManager 创建一个带特权路由设备的系统路由管理器（导出名为 netstack.GetPrivilegedSystemRouteManager）

需要管理员/root 权限；相比 GetSystemRouteManager，它会额外创建一个特权路由设备，可实际下发路由



返回值:

  - 系统路由管理器对象

  - 错误信息（权限不足或创建路由设备失败时返回）




Example:

``````````````yak
// 真实功能示例：获取带特权设备的路由管理器（需要 root 权限，示意性用法）
rm = netstack.GetPrivilegedSystemRouteManager()~
println(rm)
``````````````


#### 定义

`GetPrivilegedSystemRouteManager() (*SystemRouteManager, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*SystemRouteManager` | 系统路由管理器对象 |
| r2 | `error` | 错误信息（权限不足或创建路由设备失败时返回） |


### GetSystemRouteManager

#### 详细描述
GetSystemRouteManager 获取系统路由管理器的单例实例（导出名为 netstack.GetSystemRouteManager）

路由管理器用于记录与管理由本程序添加的系统路由，单例会在首次获取时从数据库加载已有记录



返回值:

  - 系统路由管理器单例对象




Example:

``````````````yak
// 真实功能示例：获取路由管理器并查看已记录的路由（需要相应权限，示意性用法）
rm = netstack.GetSystemRouteManager()
println(rm)
``````````````


#### 定义

`GetSystemRouteManager() *SystemRouteManager`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*SystemRouteManager` | 系统路由管理器单例对象 |


### NewVMFromDevice

#### 详细描述
NewVMFromDevice 基于一个 TUN 设备创建网络栈虚拟机（导出名为 netstack.NewVMFromDevice）

该虚拟机会劫持流经 TUN 设备的 TCP 连接，可通过 StartForwarding 把连接转发到通道，进而交给 tcpmitm 处理



参数:

  - device: 由 netstack.CreatePrivilegedDevice 等创建的 TUN 设备



返回值:

  - 网络栈虚拟机对象（使用完毕需调用 Close 释放）

  - 错误信息（设备为空或初始化失败时返回）




Example:

``````````````yak
// 真实功能示例：劫持 TCP 连接并转发到通道供后续处理（需要 root 权限，示意性用法）
device = netstack.CreatePrivilegedDevice()~
vm = netstack.NewVMFromDevice(device)~
defer vm.Close()
connChan = make(chan any, 16)
vm.StartForwarding(connChan)~
``````````````


#### 定义

`NewVMFromDevice(device lowtun.Device) (*NetstackVM, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| device | `lowtun.Device` | 由 netstack.CreatePrivilegedDevice 等创建的 TUN 设备 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*NetstackVM` | 网络栈虚拟机对象（使用完毕需调用 Close 释放） |
| r2 | `error` | 错误信息（设备为空或初始化失败时返回） |


### NewVMFromDeviceWithContext

#### 详细描述
NewVMFromDeviceWithContext 基于 TUN 设备与自定义上下文创建网络栈虚拟机（导出名为 netstack.NewVMFromDeviceWithContext）

与 netstack.NewVMFromDevice 类似，但可通过上下文统一控制虚拟机生命周期（上下文取消即停止）



参数:

  - ctx: 控制虚拟机生命周期的上下文

  - device: 由 netstack.CreatePrivilegedDevice 等创建的 TUN 设备



返回值:

  - 网络栈虚拟机对象（使用完毕需调用 Close 释放）

  - 错误信息（设备为空或初始化失败时返回）




Example:

``````````````yak
// 真实功能示例：用带超时的上下文限制虚拟机运行时长（需要 root 权限，示意性用法）
ctx = context.WithTimeout(context.Background(), 60 * time.Second)
device = netstack.CreatePrivilegedDevice()~
vm = netstack.NewVMFromDeviceWithContext(ctx, device)~
defer vm.Close()
``````````````


#### 定义

`NewVMFromDeviceWithContext(ctx context.Context, device lowtun.Device) (*NetstackVM, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` | 控制虚拟机生命周期的上下文 |
| device | `lowtun.Device` | 由 netstack.CreatePrivilegedDevice 等创建的 TUN 设备 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*NetstackVM` | 网络栈虚拟机对象（使用完毕需调用 Close 释放） |
| r2 | `error` | 错误信息（设备为空或初始化失败时返回） |


