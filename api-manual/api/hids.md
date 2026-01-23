# hids

|函数名|函数描述/介绍|
|:------|:--------|
| [hids.CPUAverage](#cpuaverage) |CPUAverage 获取当前系统的 CPU 使用率平均值  |
| [hids.CPUAverageCallback](#cpuaveragecallback) |CPUPercentCallback 当 CPU 使用率平均值发生变化时，调用 callback 函数  |
| [hids.CPUPercent](#cpupercent) |CPUPercent 获取当前系统的 CPU 使用率  |
| [hids.CPUPercentCallback](#cpupercentcallback) |CPUPercentCallback 当 CPU 使用率发生变化时，调用 callback 函数  |
| [hids.CheckAuditSystem](#checkauditsystem) ||
| [hids.GetConnectionStats](#getconnectionstats) |GetConnectionStats 获取连接统计信息  |
| [hids.GetConnectionsByPid](#getconnectionsbypid) |GetConnectionsByPid 获取指定进程的连接  |
| [hids.GetConnectionsByPort](#getconnectionsbyport) |GetConnectionsByPort 获取指定端口的连接  |
| [hids.GetCurrentProcessInfo](#getcurrentprocessinfo) |GetCurrentProcessInfo 获取当前进程信息  |
| [hids.GetEstablishedConnections](#getestablishedconnections) |GetEstablishedConnections 获取已建立的连接  |
| [hids.GetFileHashMD5](#getfilehashmd5) |GetFileHashMD5 获取文件MD5哈希  |
| [hids.GetFileHashSHA256](#getfilehashsha256) |GetFileHashSHA256 获取文件SHA256哈希  |
| [hids.GetListeningPorts](#getlisteningports) |GetListeningPorts 获取所有监听端口  |
| [hids.GetProcessAncestors](#getprocessancestors) |GetProcessAncestors 获取进程的所有祖先进程（父进程链）  |
| [hids.GetProcessByPid](#getprocessbypid) |GetProcessByPid 根据PID获取进程详细信息  |
| [hids.GetProcessChildren](#getprocesschildren) |GetProcessChildren 获取进程的所有子进程  |
| [hids.GetProcessParent](#getprocessparent) |GetProcessParent 获取进程的父进程信息  |
| [hids.GetProcessTree](#getprocesstree) |GetProcessTree 获取进程树（从指定PID开始，或从init进程开始）  |
| [hids.GetTCPConnections](#gettcpconnections) |GetTCPConnections 获取TCP连接列表  |
| [hids.GetUDPConnections](#getudpconnections) |GetUDPConnections 获取UDP连接列表  |
| [hids.Init](#init) |Init 初始化全局健康管理器  |
| [hids.KillProcess](#killprocess) |KillProcess 终止进程  |
| [hids.MemoryPercent](#memorypercent) |MemoryPercent 获取当前系统的内存使用率  |
| [hids.MemoryPercentCallback](#memorypercentcallback) |MemoryPercentCallback 当内存使用率发生变化时，调用 callback  |
| [hids.Netstat](#netstat) |Netstat 获取网络连接列表（类似netstat命令）  |
| [hids.NewAuditMonitor](#newauditmonitor) ||
| [hids.NewConnectionFilter](#newconnectionfilter) |NewConnectionFilter 创建新的连接过滤器  |
| [hids.NewConnectionMonitor](#newconnectionmonitor) |NewConnectionMonitor 创建连接监控器  |
| [hids.NewProcessFilter](#newprocessfilter) |NewProcessFilter 创建新的进程过滤器  |
| [hids.NewProcessMonitor](#newprocessmonitor) |NewProcessMonitor 创建进程监控器  |
| [hids.NewWhitelistRule](#newwhitelistrule) |NewWhitelistRule 创建新的白名单规则  |
| [hids.PS](#ps) |PS 获取进程列表，可选择使用过滤器  |
| [hids.ProcessExists](#processexists) |ProcessExists 检查指定PID的进程是否存在  |
| [hids.SetMonitorInterval](#setmonitorinterval) |SetMonitorInterval 设置全局健康管理器的监控间隔(单位：秒)，如果在全局健康管理器运行时调用，会重置全局健康管理器  |
| [hids.ShowMonitorInterval](#showmonitorinterval) |ShowMonitorInterval 在标准输出中输出全局健康管理器的监控间隔(单位：秒)  |
| [hids.WatchAuditEvents](#watchauditevents) |WatchAuditEvents 简化的监控函数 - 监控audit事件  |
| [hids.WatchConnections](#watchconnections) |WatchConnections 简单的连接监控函数，监控指定时长后返回事件列表  |
| [hids.WatchProcess](#watchprocess) |WatchProcess 简单的进程监控函数，监控指定时长后返回事件列表  |
| [hids.WithAuditBufferSize](#withauditbuffersize) |WithAuditBufferSize 设置缓冲区大小  |
| [hids.WithAuditFilterCommands](#withauditfiltercommands) |WithAuditFilterCommands 设置命令过滤器（支持正则）  |
| [hids.WithAuditFilterLoginUsers](#withauditfilterloginusers) |WithAuditFilterLoginUsers 设置原始登录用户过滤器（按 LoginUser 过滤）  过滤原始登录的用户（例如 SSH 登录的用户，即使后来 su 到其他用户）  |
| [hids.WithAuditFilterUsers](#withauditfilterusers) |WithAuditFilterUsers 设置当前用户过滤器（按 Username 过滤）  过滤当前执行操作的用户（例如 su 后的用户）  |
| [hids.WithAuditMonitorCommand](#withauditmonitorcommand) |WithAuditMonitorCommand 设置是否监控命令执行事件  |
| [hids.WithAuditMonitorLogin](#withauditmonitorlogin) |WithAuditMonitorLogin 设置是否监控登录事件  |
| [hids.WithConnectionFilter](#withconnectionfilter) |WithConnectionFilter 设置连接过滤器 |
| [hids.WithConnectionHistory](#withconnectionhistory) |WithConnectionHistory 启用历史记录 |
| [hids.WithConnectionMonitorInterval](#withconnectionmonitorinterval) |WithConnectionMonitorInterval 设置监控间隔 |
| [hids.WithOnCommandEvent](#withoncommandevent) |WithOnCommandEvent 设置命令执行事件回调  |
| [hids.WithOnConnectionDisappear](#withonconnectiondisappear) |WithOnConnectionDisappear 设置连接消失回调 |
| [hids.WithOnLoginEvent](#withonloginevent) |WithOnLoginEvent 设置登录事件回调  |
| [hids.WithOnNewConnection](#withonnewconnection) |WithOnNewConnection 设置新连接回调 |
| [hids.WithOnProcessCreate](#withonprocesscreate) |WithOnProcessCreate 设置进程创建回调  |
| [hids.WithOnProcessExit](#withonprocessexit) |WithOnProcessExit 设置进程退出回调  |
| [hids.WithProcessMonitorInterval](#withprocessmonitorinterval) |WithProcessMonitorInterval 设置监控间隔  |
| [hids.WithWhitelist](#withwhitelist) |WithWhitelist 设置进程白名单规则  |


## 函数定义
### CPUAverage

#### 详细描述
CPUAverage 获取当前系统的 CPU 使用率平均值

Example:
```
printf("%f%%\n", hids.CPUAverage())
```


#### 定义

`CPUAverage() float64`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `float64` |   |


### CPUAverageCallback

#### 详细描述
CPUPercentCallback 当 CPU 使用率平均值发生变化时，调用 callback 函数

Example:
```
hids.Init()
hids.CPUAverageCallback(func(i) {
if (i > 50) { println("cpu average precent is over 50%") } // 当 CPU 使用率平均值超过50%时输出信息
})
```


#### 定义

`CPUAverageCallback(callback func(i float64))`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `func(i float64)` |   |


### CPUPercent

#### 详细描述
CPUPercent 获取当前系统的 CPU 使用率

Example:
```
printf("%f%%\n", hids.CPUPercent())
```


#### 定义

`CPUPercent() float64`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `float64` |   |


### CPUPercentCallback

#### 详细描述
CPUPercentCallback 当 CPU 使用率发生变化时，调用 callback 函数

Example:
```
hids.Init()
hids.CPUPercentCallback(func(i) {
if (i > 50) { println("cpu precent is over 50%") } // 当 CPU 使用率超过50%时输出信息
})
```


#### 定义

`CPUPercentCallback(callback func(i float64))`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `func(i float64)` |   |


### CheckAuditSystem

#### 详细描述


#### 定义

`CheckAuditSystem() (*AuditStatus, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*AuditStatus` |   |
| r2 | `error` |   |


### GetConnectionStats

#### 详细描述
GetConnectionStats 获取连接统计信息

Example:
```
stats, err = hids.GetConnectionStats()
println("Total connections:", stats.Total)
println("TCP connections:", stats.TCPCount)
println("Listening ports:", stats.ListenCount)
```


#### 定义

`GetConnectionStats() (*ConnectionStats, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ConnectionStats` |   |
| r2 | `error` |   |


### GetConnectionsByPid

#### 详细描述
GetConnectionsByPid 获取指定进程的连接

Example:
```
conns, err = hids.GetConnectionsByPid(1234)
```


#### 定义

`GetConnectionsByPid(pid int32) ([]*ConnectionInfo, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pid | `int32` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*ConnectionInfo` |   |
| r2 | `error` |   |


### GetConnectionsByPort

#### 详细描述
GetConnectionsByPort 获取指定端口的连接

Example:
```
conns, err = hids.GetConnectionsByPort(80)
```


#### 定义

`GetConnectionsByPort(port uint32) ([]*ConnectionInfo, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| port | `uint32` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*ConnectionInfo` |   |
| r2 | `error` |   |


### GetCurrentProcessInfo

#### 详细描述
GetCurrentProcessInfo 获取当前进程信息

Example:
```
info, err = hids.GetCurrentProcessInfo()
println("Current PID:", info.Pid)
```


#### 定义

`GetCurrentProcessInfo() (*ProcessInfo, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ProcessInfo` |   |
| r2 | `error` |   |


### GetEstablishedConnections

#### 详细描述
GetEstablishedConnections 获取已建立的连接

Example:
```
conns, err = hids.GetEstablishedConnections()
```


#### 定义

`GetEstablishedConnections() ([]*ConnectionInfo, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*ConnectionInfo` |   |
| r2 | `error` |   |


### GetFileHashMD5

#### 详细描述
GetFileHashMD5 获取文件MD5哈希

Example:
```
hash = hids.GetFileHashMD5("/usr/bin/nginx")
```


#### 定义

`GetFileHashMD5(path string) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


### GetFileHashSHA256

#### 详细描述
GetFileHashSHA256 获取文件SHA256哈希

Example:
```
hash = hids.GetFileHashSHA256("/usr/bin/nginx")
```


#### 定义

`GetFileHashSHA256(path string) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


### GetListeningPorts

#### 详细描述
GetListeningPorts 获取所有监听端口

Example:
```
conns, err = hids.GetListeningPorts()
for _, conn := range conns {

	println("Port:", conn.LocalPort, "PID:", conn.Pid)

}
```


#### 定义

`GetListeningPorts() ([]*ConnectionInfo, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*ConnectionInfo` |   |
| r2 | `error` |   |


### GetProcessAncestors

#### 详细描述
GetProcessAncestors 获取进程的所有祖先进程（父进程链）

Example:
```
ancestors, err = hids.GetProcessAncestors(1234)

	for _, ancestor := range ancestors {
	    println("Ancestor PID:", ancestor.Pid, "Name:", ancestor.Name)
	}

```


#### 定义

`GetProcessAncestors(pid int32) ([]*ProcessInfo, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pid | `int32` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*ProcessInfo` |   |
| r2 | `error` |   |


### GetProcessByPid

#### 详细描述
GetProcessByPid 根据PID获取进程详细信息

Example:
```
info, err = hids.GetProcessByPid(1234)

	if err == nil {
	    println("Process Name:", info.Name)
	    println("Process User:", info.Username)
	}

```


#### 定义

`GetProcessByPid(pid int32) (*ProcessInfo, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pid | `int32` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ProcessInfo` |   |
| r2 | `error` |   |


### GetProcessChildren

#### 详细描述
GetProcessChildren 获取进程的所有子进程

Example:
```
children, err = hids.GetProcessChildren(1234)

	for _, child := range children {
	    println("Child PID:", child.Pid, "Name:", child.Name)
	}

```


#### 定义

`GetProcessChildren(pid int32) ([]*ProcessInfo, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pid | `int32` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*ProcessInfo` |   |
| r2 | `error` |   |


### GetProcessParent

#### 详细描述
GetProcessParent 获取进程的父进程信息

Example:
```
parent, err = hids.GetProcessParent(1234)

	if err == nil {
	    println("Parent PID:", parent.Pid, "Name:", parent.Name)
	}

```


#### 定义

`GetProcessParent(pid int32) (*ProcessInfo, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pid | `int32` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ProcessInfo` |   |
| r2 | `error` |   |


### GetProcessTree

#### 详细描述
GetProcessTree 获取进程树（从指定PID开始，或从init进程开始）

Example:
```
// 获取指定进程的进程树
tree, err = hids.GetProcessTree(1234)

// 获取整个系统的进程树
tree, err = hids.GetProcessTree(1)
```


#### 定义

`GetProcessTree(rootPid int32) (*ProcessTreeNode, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| rootPid | `int32` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ProcessTreeNode` |   |
| r2 | `error` |   |


### GetTCPConnections

#### 详细描述
GetTCPConnections 获取TCP连接列表

Example:
```
conns, err = hids.GetTCPConnections()
```


#### 定义

`GetTCPConnections() ([]*ConnectionInfo, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*ConnectionInfo` |   |
| r2 | `error` |   |


### GetUDPConnections

#### 详细描述
GetUDPConnections 获取UDP连接列表

Example:
```
conns, err = hids.GetUDPConnections()
```


#### 定义

`GetUDPConnections() ([]*ConnectionInfo, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*ConnectionInfo` |   |
| r2 | `error` |   |


### Init

#### 详细描述
Init 初始化全局健康管理器

Example:
```
hids.Init()
```


#### 定义

`Init()`


### KillProcess

#### 详细描述
KillProcess 终止进程

Example:
```
err = hids.KillProcess(1234)
```


#### 定义

`KillProcess(pid int32) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pid | `int32` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### MemoryPercent

#### 详细描述
MemoryPercent 获取当前系统的内存使用率

Example:
```
printf("%f%%\n", hids.MemoryPercent())
```


#### 定义

`MemoryPercent() float64`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `float64` |   |


### MemoryPercentCallback

#### 详细描述
MemoryPercentCallback 当内存使用率发生变化时，调用 callback

Example:
```
hids.Init()
hids.MemoryPercentCallback(func(i) {
if (i > 50) { println("memory precent is over 50%") } // 当内存使用率超过50%时输出信息
})
```


#### 定义

`MemoryPercentCallback(callback func(i float64))`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `func(i float64)` |   |


### Netstat

#### 详细描述
Netstat 获取网络连接列表（类似netstat命令）

Example:
```
// 获取所有连接
conns, err = hids.Netstat()

// 使用过滤器
filter = hids.NewConnectionFilter()
filter.Status = "LISTEN"
conns, err = hids.Netstat(filter)
```


#### 定义

`Netstat(filters ...*ConnectionFilter) ([]*ConnectionInfo, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| filters | `...*ConnectionFilter` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*ConnectionInfo` |   |
| r2 | `error` |   |


### NewAuditMonitor

#### 详细描述


#### 定义

`NewAuditMonitor(opts ...AuditMonitorOption) (*AuditMonitor, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...AuditMonitorOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*AuditMonitor` |   |
| r2 | `error` |   |


### NewConnectionFilter

#### 详细描述
NewConnectionFilter 创建新的连接过滤器

Example:
```
filter = hids.NewConnectionFilter()
filter.Status = "LISTEN"
filter.Protocol = "tcp"
conns = hids.Netstat(filter)
```


#### 定义

`NewConnectionFilter() *ConnectionFilter`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ConnectionFilter` |   |


### NewConnectionMonitor

#### 详细描述
NewConnectionMonitor 创建连接监控器

Example:
```
monitor = hids.NewConnectionMonitor(

	hids.WithConnectionMonitorInterval(1),
	hids.WithOnNewConnection(func(event) {
	    println("New connection:", event.Connection.LocalAddr, "->", event.Connection.RemoteAddr)
	}),

)
```


#### 定义

`NewConnectionMonitor(opts ...ConnectionMonitorOption) *ConnectionMonitor`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...ConnectionMonitorOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ConnectionMonitor` |   |


### NewProcessFilter

#### 详细描述
NewProcessFilter 创建新的进程过滤器

Example:
```
filter = hids.NewProcessFilter()
filter.Name = "nginx"
processes = hids.PS(filter)
```


#### 定义

`NewProcessFilter() *ProcessFilter`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ProcessFilter` |   |


### NewProcessMonitor

#### 详细描述
NewProcessMonitor 创建进程监控器

Example:
```
monitor = hids.NewProcessMonitor(

	hids.WithProcessMonitorInterval(1),
	hids.WithOnProcessCreate(func(event) {
	    println("New process:", event.Process.Name)
	}),

)
```


#### 定义

`NewProcessMonitor(opts ...ProcessMonitorOption) *ProcessMonitor`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...ProcessMonitorOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ProcessMonitor` |   |


### NewWhitelistRule

#### 详细描述
NewWhitelistRule 创建新的白名单规则

Example:
```
rule = hids.NewWhitelistRule()
rule.Name = "nginx"
rule.ExePath = "/usr/sbin/nginx"
```


#### 定义

`NewWhitelistRule() *ProcessWhitelistRule`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ProcessWhitelistRule` |   |


### PS

#### 详细描述
PS 获取进程列表，可选择使用过滤器

Example:
```
// 获取所有进程
processes, err = hids.PS()

// 使用过滤器
filter = hids.NewProcessFilter()
filter.Name = "nginx"
processes, err = hids.PS(filter)
```


#### 定义

`PS(filters ...*ProcessFilter) ([]*ProcessInfo, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| filters | `...*ProcessFilter` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*ProcessInfo` |   |
| r2 | `error` |   |


### ProcessExists

#### 详细描述
ProcessExists 检查指定PID的进程是否存在

Example:
```
exists = hids.ProcessExists(1234)
```


#### 定义

`ProcessExists(pid int32) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pid | `int32` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### SetMonitorInterval

#### 详细描述
SetMonitorInterval 设置全局健康管理器的监控间隔(单位：秒)，如果在全局健康管理器运行时调用，会重置全局健康管理器

Example:
```
hids.SetMonitorInterval(1)
```


#### 定义

`SetMonitorInterval(i float64)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `float64` |   |


### ShowMonitorInterval

#### 详细描述
ShowMonitorInterval 在标准输出中输出全局健康管理器的监控间隔(单位：秒)

Example:
```
hids.ShowMonitorInterval()
```


#### 定义

`ShowMonitorInterval()`


### WatchAuditEvents

#### 详细描述
WatchAuditEvents 简化的监控函数 - 监控audit事件

Example:
```
ctx, cancel = context.WithTimeout(context.Background(), 10)
defer cancel()
err = hids.WatchAuditEvents(ctx, func(event) {

	println("Login:", event.Username)

}, func(event) {

	println("Command:", event.Command)

})
```


#### 定义

`WatchAuditEvents(ctx context.Context, onLogin func(*LoginEvent), onCommand func(*CommandEvent)) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` |   |
| onLogin | `func(*LoginEvent)` |   |
| onCommand | `func(*CommandEvent)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### WatchConnections

#### 详细描述
WatchConnections 简单的连接监控函数，监控指定时长后返回事件列表

Example:
```
events, err = hids.WatchConnections(5) // 监控5秒
for _, event := range events {

	println(event.Type, event.Connection.LocalAddr, "->", event.Connection.RemoteAddr)

}
```


#### 定义

`WatchConnections(durationSeconds float64) ([]*ConnectionEvent, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| durationSeconds | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*ConnectionEvent` |   |
| r2 | `error` |   |


### WatchProcess

#### 详细描述
WatchProcess 简单的进程监控函数，监控指定时长后返回事件列表

Example:
```
events, err = hids.WatchProcess(5) // 监控5秒
for _, event := range events {

	println(event.Type, event.Process.Name, event.Process.Pid)

}
```


#### 定义

`WatchProcess(durationSeconds float64) ([]*ProcessEvent, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| durationSeconds | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*ProcessEvent` |   |
| r2 | `error` |   |


### WithAuditBufferSize

#### 详细描述
WithAuditBufferSize 设置缓冲区大小

Example:
```
monitor = hids.NewAuditMonitor(hids.WithAuditBufferSize(16384))
```


#### 定义

`WithAuditBufferSize(size int) AuditMonitorOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| size | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AuditMonitorOption` |   |


### WithAuditFilterCommands

#### 详细描述
WithAuditFilterCommands 设置命令过滤器（支持正则）

Example:
```
monitor = hids.NewAuditMonitor(hids.WithAuditFilterCommands(".*ssh.*", "sudo"))
```


#### 定义

`WithAuditFilterCommands(commands ...string) AuditMonitorOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| commands | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AuditMonitorOption` |   |


### WithAuditFilterLoginUsers

#### 详细描述
WithAuditFilterLoginUsers 设置原始登录用户过滤器（按 LoginUser 过滤）

过滤原始登录的用户（例如 SSH 登录的用户，即使后来 su 到其他用户）

Example:
```
// 只监控原始登录用户为 root 的会话中的操作
monitor = hids.NewAuditMonitor(hids.WithAuditFilterLoginUsers("root"))
```


#### 定义

`WithAuditFilterLoginUsers(users ...string) AuditMonitorOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| users | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AuditMonitorOption` |   |


### WithAuditFilterUsers

#### 详细描述
WithAuditFilterUsers 设置当前用户过滤器（按 Username 过滤）

过滤当前执行操作的用户（例如 su 后的用户）

Example:
```
// 只监控 matrix 用户执行的命令
monitor = hids.NewAuditMonitor(hids.WithAuditFilterUsers("matrix", "admin"))
```


#### 定义

`WithAuditFilterUsers(users ...string) AuditMonitorOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| users | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AuditMonitorOption` |   |


### WithAuditMonitorCommand

#### 详细描述
WithAuditMonitorCommand 设置是否监控命令执行事件

Example:
```
monitor = hids.NewAuditMonitor(hids.WithAuditMonitorCommand(true))
```


#### 定义

`WithAuditMonitorCommand(enable bool) AuditMonitorOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| enable | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AuditMonitorOption` |   |


### WithAuditMonitorLogin

#### 详细描述
WithAuditMonitorLogin 设置是否监控登录事件

Example:
```
monitor = hids.NewAuditMonitor(hids.WithAuditMonitorLogin(true))
```


#### 定义

`WithAuditMonitorLogin(enable bool) AuditMonitorOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| enable | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AuditMonitorOption` |   |


### WithConnectionFilter

#### 详细描述
WithConnectionFilter 设置连接过滤器


#### 定义

`WithConnectionFilter(filter *ConnectionFilter) ConnectionMonitorOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| filter | `*ConnectionFilter` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConnectionMonitorOption` |   |


### WithConnectionHistory

#### 详细描述
WithConnectionHistory 启用历史记录


#### 定义

`WithConnectionHistory(maxHistory int) ConnectionMonitorOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| maxHistory | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConnectionMonitorOption` |   |


### WithConnectionMonitorInterval

#### 详细描述
WithConnectionMonitorInterval 设置监控间隔


#### 定义

`WithConnectionMonitorInterval(seconds float64) ConnectionMonitorOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| seconds | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConnectionMonitorOption` |   |


### WithOnCommandEvent

#### 详细描述
WithOnCommandEvent 设置命令执行事件回调

Example:
```
monitor = hids.NewAuditMonitor(hids.WithOnCommandEvent(func(event) {

	println("Command:", event.Command, "by", event.Username)

}))
```


#### 定义

`WithOnCommandEvent(callback func(*CommandEvent)) AuditMonitorOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `func(*CommandEvent)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AuditMonitorOption` |   |


### WithOnConnectionDisappear

#### 详细描述
WithOnConnectionDisappear 设置连接消失回调


#### 定义

`WithOnConnectionDisappear(callback func(event *ConnectionEvent)) ConnectionMonitorOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `func(event *ConnectionEvent)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConnectionMonitorOption` |   |


### WithOnLoginEvent

#### 详细描述
WithOnLoginEvent 设置登录事件回调

Example:
```
monitor = hids.NewAuditMonitor(hids.WithOnLoginEvent(func(event) {

	println("Login:", event.Username, "from", event.RemoteIP)

}))
```


#### 定义

`WithOnLoginEvent(callback func(*LoginEvent)) AuditMonitorOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `func(*LoginEvent)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AuditMonitorOption` |   |


### WithOnNewConnection

#### 详细描述
WithOnNewConnection 设置新连接回调


#### 定义

`WithOnNewConnection(callback func(event *ConnectionEvent)) ConnectionMonitorOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `func(event *ConnectionEvent)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConnectionMonitorOption` |   |


### WithOnProcessCreate

#### 详细描述
WithOnProcessCreate 设置进程创建回调

Example:
```

	monitor = hids.NewProcessMonitor(hids.WithOnProcessCreate(func(event) {
	    println("New process:", event.Process.Name, "PID:", event.Process.Pid)
	}))

```


#### 定义

`WithOnProcessCreate(callback func(event *ProcessEvent)) ProcessMonitorOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `func(event *ProcessEvent)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ProcessMonitorOption` |   |


### WithOnProcessExit

#### 详细描述
WithOnProcessExit 设置进程退出回调

Example:
```

	monitor = hids.NewProcessMonitor(hids.WithOnProcessExit(func(event) {
	    println("Process exited:", event.Process.Name, "PID:", event.Process.Pid)
	}))

```


#### 定义

`WithOnProcessExit(callback func(event *ProcessEvent)) ProcessMonitorOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `func(event *ProcessEvent)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ProcessMonitorOption` |   |


### WithProcessMonitorInterval

#### 详细描述
WithProcessMonitorInterval 设置监控间隔

Example:
```
monitor = hids.NewProcessMonitor(hids.WithProcessMonitorInterval(2))
```


#### 定义

`WithProcessMonitorInterval(seconds float64) ProcessMonitorOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| seconds | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ProcessMonitorOption` |   |


### WithWhitelist

#### 详细描述
WithWhitelist 设置进程白名单规则

Example:
```
rules = [hids.NewWhitelistRule()]
rules[0].Name = "nginx"
monitor = hids.NewProcessMonitor(hids.WithWhitelist(rules))
```


#### 定义

`WithWhitelist(rules []*ProcessWhitelistRule) ProcessMonitorOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| rules | `[]*ProcessWhitelistRule` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ProcessMonitorOption` |   |


