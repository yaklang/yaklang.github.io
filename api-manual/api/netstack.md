# netstack

|函数名|函数描述/介绍|
|:------|:--------|
| [netstack.CreatePrivilegedDevice](#createprivilegeddevice) |_createPrivilegedDevice creates a privileged TUN device with default MTU (1500) |
| [netstack.CreatePrivilegedDeviceWithMTU](#createprivilegeddevicewithmtu) |_createPrivilegedDeviceWithMTU creates a privileged TUN device with specified MTU |
| [netstack.FastKillTCP](#fastkilltcp) ||
| [netstack.GetPrivilegedSystemRouteManager](#getprivilegedsystemroutemanager) ||
| [netstack.GetSystemRouteManager](#getsystemroutemanager) |GetSystemRouteManager 获取系统路由管理器的单例实例 |
| [netstack.NewVMFromDevice](#newvmfromdevice) |_newVMFromDevice creates a network stack virtual machine from a TUN device The VM will hijack TCP connections and make them available via GetTCPConnCh...|
| [netstack.NewVMFromDeviceWithContext](#newvmfromdevicewithcontext) ||


## 函数定义
### CreatePrivilegedDevice

#### 详细描述
_createPrivilegedDevice creates a privileged TUN device with default MTU (1500)


#### 定义

`CreatePrivilegedDevice() (lowtun.Device, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `lowtun.Device` |   |
| r2 | `error` |   |


### CreatePrivilegedDeviceWithMTU

#### 详细描述
_createPrivilegedDeviceWithMTU creates a privileged TUN device with specified MTU


#### 定义

`CreatePrivilegedDeviceWithMTU(mtu int) (lowtun.Device, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| mtu | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `lowtun.Device` |   |
| r2 | `error` |   |


### FastKillTCP

#### 详细描述


#### 定义

`FastKillTCP(killDuration time.Duration, target ...string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| killDuration | `time.Duration` |   |
| target | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### GetPrivilegedSystemRouteManager

#### 详细描述


#### 定义

`GetPrivilegedSystemRouteManager() (*SystemRouteManager, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*SystemRouteManager` |   |
| r2 | `error` |   |


### GetSystemRouteManager

#### 详细描述
GetSystemRouteManager 获取系统路由管理器的单例实例


#### 定义

`GetSystemRouteManager() *SystemRouteManager`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*SystemRouteManager` |   |


### NewVMFromDevice

#### 详细描述
_newVMFromDevice creates a network stack virtual machine from a TUN device
The VM will hijack TCP connections and make them available via GetTCPConnChan()


#### 定义

`NewVMFromDevice(device lowtun.Device) (*NetstackVM, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| device | `lowtun.Device` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*NetstackVM` |   |
| r2 | `error` |   |


### NewVMFromDeviceWithContext

#### 详细描述


#### 定义

`NewVMFromDeviceWithContext(ctx context.Context, device lowtun.Device) (*NetstackVM, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` |   |
| device | `lowtun.Device` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*NetstackVM` |   |
| r2 | `error` |   |


