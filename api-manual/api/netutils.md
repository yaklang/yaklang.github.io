# netutils

|函数名|函数描述/介绍|
|:------|:--------|
| [netutils.AddIPRouteToNetInterface](#addiproutetonetinterface) |AddIPRouteToNetInterface 添加IP路由到网络接口 支持单个IP（string）或多个IP（[]string 或任何可转换的切片类型） ipOrIPAddrs: IP地址，支持 string、[]string 或通过 InterfaceToStringSlice 转换的类型 i...|
| [netutils.AddSpecificIPRouteToNetInterface](#addspecificiproutetonetinterface) |AddSpecificIPRouteToNetInterface 添加单个IP到特定网络接口的路由 |
| [netutils.BatchAddSpecificIPRouteToNetInterface](#batchaddspecificiproutetonetinterface) |BatchAddSpecificIPRouteToNetInterface 批量添加多个IP到特定网络接口的路由 |
| [netutils.BatchDeleteSpecificIPRoute](#batchdeletespecificiproute) |BatchDeleteSpecificIPRoute 批量删除多个IP的路由 |
| [netutils.DeleteAllRoutesForInterface](#deleteallroutesforinterface) |DeleteAllRoutesForInterface 删除特定网络接口的所有路由 |
| [netutils.DeleteIPRoute](#deleteiproute) |DeleteIPRoute 删除IP路由 支持单个IP（string）或多个IP（[]string 或任何可转换的切片类型） ipOrIPAddrs: IP地址，支持 string、[]string 或通过 InterfaceToStringSlice 转换的类型 |
| [netutils.DeleteIPRouteFromNetInterface](#deleteiproutefromnetinterface) |DeleteIPRouteFromNetInterface 删除网络接口的所有/32主机路由 ifaceName: 网络接口名称 |
| [netutils.DeleteSpecificIPRoute](#deletespecificiproute) |DeleteSpecificIPRoute 删除单个IP的路由 |


## 函数定义
### AddIPRouteToNetInterface

#### 详细描述
AddIPRouteToNetInterface 添加IP路由到网络接口
支持单个IP（string）或多个IP（[]string 或任何可转换的切片类型）
ipOrIPAddrs: IP地址，支持 string、[]string 或通过 InterfaceToStringSlice 转换的类型
ifaceName: 网络接口名称


#### 定义

`AddIPRouteToNetInterface(ipOrIPAddrs any, ifaceName string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ipOrIPAddrs | `any` |   |
| ifaceName | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### AddSpecificIPRouteToNetInterface

#### 详细描述
AddSpecificIPRouteToNetInterface 添加单个IP到特定网络接口的路由


#### 定义

`AddSpecificIPRouteToNetInterface(ipStr string, interfaceName string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ipStr | `string` |   |
| interfaceName | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### BatchAddSpecificIPRouteToNetInterface

#### 详细描述
BatchAddSpecificIPRouteToNetInterface 批量添加多个IP到特定网络接口的路由


#### 定义

`BatchAddSpecificIPRouteToNetInterface(ipList []string, interfaceName string) (success []string, failed map[string]error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ipList | `[]string` |   |
| interfaceName | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| success | `[]string` |   |
| failed | `map[string]error` |   |


### BatchDeleteSpecificIPRoute

#### 详细描述
BatchDeleteSpecificIPRoute 批量删除多个IP的路由


#### 定义

`BatchDeleteSpecificIPRoute(ipList []string) (success []string, failed map[string]error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ipList | `[]string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| success | `[]string` |   |
| failed | `map[string]error` |   |


### DeleteAllRoutesForInterface

#### 详细描述
DeleteAllRoutesForInterface 删除特定网络接口的所有路由


#### 定义

`DeleteAllRoutesForInterface(interfaceName string) (success []string, failed map[string]error, err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| interfaceName | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| success | `[]string` |   |
| failed | `map[string]error` |   |
| err | `error` |   |


### DeleteIPRoute

#### 详细描述
DeleteIPRoute 删除IP路由
支持单个IP（string）或多个IP（[]string 或任何可转换的切片类型）
ipOrIPAddrs: IP地址，支持 string、[]string 或通过 InterfaceToStringSlice 转换的类型


#### 定义

`DeleteIPRoute(ipOrIPAddrs any) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ipOrIPAddrs | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### DeleteIPRouteFromNetInterface

#### 详细描述
DeleteIPRouteFromNetInterface 删除网络接口的所有/32主机路由
ifaceName: 网络接口名称


#### 定义

`DeleteIPRouteFromNetInterface(ifaceName string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ifaceName | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### DeleteSpecificIPRoute

#### 详细描述
DeleteSpecificIPRoute 删除单个IP的路由


#### 定义

`DeleteSpecificIPRoute(ipStr string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ipStr | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


