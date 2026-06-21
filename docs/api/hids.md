# hids {#library-hids}

`hids` 库是主机入侵检测（Host-based IDS）工具集，提供进程、网络连接、资源、审计日志与 SSH 登录的采集与实时监控能力，用于主机安全监控、应急响应与威胁狩猎。

典型使用场景：

- 资源采集：`hids.CPUPercent` / `hids.MemoryPercent` 取资源占用，`hids.PS` 列进程，`hids.Netstat` / `hids.GetEstablishedConnections` / `hids.GetListeningPorts` 看连接。
- 进程关系：`hids.GetProcessTree` / `hids.GetProcessAncestors` / `hids.GetProcessChildren` 分析进程树，`hids.KillProcess` 终止进程。
- 实时监控：`hids.NewProcessMonitor` / `hids.NewConnectionMonitor`（配 `hids.WithOnProcessCreate` / `hids.WithOnNewConnection` 等回调）监控进程与连接事件；`hids.NewAuditMonitor` / `hids.WatchAuditEvents` 监控登录与命令；`hids.NewJournalSSHMonitor` 监控 SSH 登录。

与相邻库的关系：`hids` 偏主机侧防御与监控，与 `filemonitor`（文件监控）、`exec`/`os`（系统交互）配合，构成主机侧的"看得见"能力。

> 共 65 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [hids.CPUAverage](#cpuaverage) | - | `float64` | 获取当前系统的 CPU 使用率平均值 |
| [hids.CPUAverageCallback](#cpuaveragecallback) | `callback func(i float64)` | - | 当 CPU 使用率平均值发生变化时，调用 callback 函数 |
| [hids.CPUPercent](#cpupercent) | - | `float64` | 获取当前系统的 CPU 使用率 |
| [hids.CPUPercentCallback](#cpupercentcallback) | `callback func(i float64)` | - | 当 CPU 使用率发生变化时，调用 callback 函数 |
| [hids.CheckAuditSystem](#checkauditsystem) | - | `*AuditStatus, error` | 检查 audit 子系统状态（需要 root 权限，仅 Linux 可用） |
| [hids.CheckJournalAvailable](#checkjournalavailable) | - | `error` | 检查 journalctl 是否可用且当前用户有权读取系统级 sshd 日志 |
| [hids.GetConnectionStats](#getconnectionstats) | - | `*ConnectionStats, error` | 获取连接统计信息 |
| [hids.GetConnectionsByPid](#getconnectionsbypid) | `pid int32` | `[]*ConnectionInfo, error` | 获取指定进程的连接 |
| [hids.GetConnectionsByPort](#getconnectionsbyport) | `port uint32` | `[]*ConnectionInfo, error` | 获取指定端口的连接 |
| [hids.GetCurrentProcessInfo](#getcurrentprocessinfo) | - | `*ProcessInfo, error` | 获取当前进程信息 |
| [hids.GetEstablishedConnections](#getestablishedconnections) | - | `[]*ConnectionInfo, error` | 获取已建立的连接 |
| [hids.GetFileHashMD5](#getfilehashmd5) | `path string` | `string, error` | 获取文件MD5哈希 |
| [hids.GetFileHashSHA256](#getfilehashsha256) | `path string` | `string, error` | 获取文件SHA256哈希 |
| [hids.GetListeningPorts](#getlisteningports) | - | `[]*ConnectionInfo, error` | 获取所有监听端口 |
| [hids.GetProcessAncestors](#getprocessancestors) | `pid int32` | `[]*ProcessInfo, error` | 获取进程的所有祖先进程（父进程链） |
| [hids.GetProcessByPid](#getprocessbypid) | `pid int32` | `*ProcessInfo, error` | 根据PID获取进程详细信息 |
| [hids.GetProcessChildren](#getprocesschildren) | `pid int32` | `[]*ProcessInfo, error` | 获取进程的所有子进程 |
| [hids.GetProcessParent](#getprocessparent) | `pid int32` | `*ProcessInfo, error` | 获取进程的父进程信息 |
| [hids.GetProcessTree](#getprocesstree) | `rootPid int32` | `*ProcessTreeNode, error` | 获取进程树（从指定PID开始，或从init进程开始） |
| [hids.GetTCPConnections](#gettcpconnections) | - | `[]*ConnectionInfo, error` | 获取TCP连接列表 |
| [hids.GetUDPConnections](#getudpconnections) | - | `[]*ConnectionInfo, error` | 获取UDP连接列表 |
| [hids.Init](#init) | - | - | 初始化全局健康管理器 |
| [hids.KillProcess](#killprocess) | `pid int32` | `error` | 终止进程 |
| [hids.MemoryPercent](#memorypercent) | - | `float64` | 获取当前系统的内存使用率 |
| [hids.MemoryPercentCallback](#memorypercentcallback) | `callback func(i float64)` | - | 当内存使用率发生变化时，调用 callback |
| [hids.NewConnectionFilter](#newconnectionfilter) | - | `*ConnectionFilter` | 创建新的连接过滤器 |
| [hids.NewProcessFilter](#newprocessfilter) | - | `*ProcessFilter` | 创建新的进程过滤器 |
| [hids.NewWhitelistRule](#newwhitelistrule) | - | `*ProcessWhitelistRule` | 创建新的白名单规则 |
| [hids.ProcessExists](#processexists) | `pid int32` | `bool` | 检查指定PID的进程是否存在 |
| [hids.SetMonitorInterval](#setmonitorinterval) | `i float64` | - | 设置全局健康管理器的监控间隔(单位：秒)，如果在全局健康管理器运行时调用，会重置全局健康管理器 |
| [hids.ShowMonitorInterval](#showmonitorinterval) | - | - | 在标准输出中输出全局健康管理器的监控间隔(单位：秒) |
| [hids.WatchAuditEvents](#watchauditevents) | `ctx context.Context, onLogin func(*LoginEvent), onCommand func(*CommandEvent)` | `error` | 简化的audit监控函数（需要 root 权限，仅 Linux 可用） |
| [hids.WatchConnections](#watchconnections) | `durationSeconds float64` | `[]*ConnectionEvent, error` | 简单的连接监控函数，监控指定时长后返回事件列表 |
| [hids.WatchJournalSSHEvents](#watchjournalsshevents) | `ctx context.Context, onSuccess func(*JournalSSHEvent), onFailed func(*JournalSSHEvent)` | `error` | 简化的 SSH journal 监控函数 |
| [hids.WatchProcess](#watchprocess) | `durationSeconds float64` | `[]*ProcessEvent, error` | 简单的进程监控函数，监控指定时长后返回事件列表 |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [hids.Netstat](#netstat) | `filters ...*ConnectionFilter` | `[]*ConnectionInfo, error` | 获取网络连接列表（类似netstat命令） |
| [hids.NewAuditMonitor](#newauditmonitor) | `opts ...AuditMonitorOption` | `*AuditMonitor, error` | 创建Audit监控器（需要 root 权限，仅 Linux 可用） |
| [hids.NewConnectionMonitor](#newconnectionmonitor) | `opts ...ConnectionMonitorOption` | `*ConnectionMonitor` | 创建连接监控器 |
| [hids.NewJournalSSHMonitor](#newjournalsshmonitor) | `opts ...JournalSSHMonitorOption` | `*JournalSSHMonitor, error` | 创建基于 systemd journal 的 SSH 登录监控器 |
| [hids.NewProcessMonitor](#newprocessmonitor) | `opts ...ProcessMonitorOption` | `*ProcessMonitor` | 创建进程监控器 |
| [hids.PS](#ps) | `filters ...*ProcessFilter` | `[]*ProcessInfo, error` | 获取进程列表，可选择使用过滤器 |

## 函数详情

### CPUAverage {#cpuaverage}

```go
CPUAverage() float64
```

获取当前系统的 CPU 使用率平均值

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `float64` | CPU 使用率平均值（百分比，0-100） |

**示例**

``````````````yak
printf("%f%%\n", hids.CPUAverage())
``````````````

---

### CPUAverageCallback {#cpuaveragecallback}

```go
CPUAverageCallback(callback func(i float64))
```

当 CPU 使用率平均值发生变化时，调用 callback 函数

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| callback | `func(i float64)` | 回调函数，入参为当前 CPU 使用率平均值（百分比） |

**示例**

``````````````yak
hids.Init()
hids.CPUAverageCallback(func(i) {
if (i > 50) { println("cpu average precent is over 50%") } // 当 CPU 使用率平均值超过50%时输出信息
})
``````````````

---

### CPUPercent {#cpupercent}

```go
CPUPercent() float64
```

获取当前系统的 CPU 使用率

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `float64` | CPU 使用率（百分比，0-100） |

**示例**

``````````````yak
printf("%f%%\n", hids.CPUPercent())
``````````````

---

### CPUPercentCallback {#cpupercentcallback}

```go
CPUPercentCallback(callback func(i float64))
```

当 CPU 使用率发生变化时，调用 callback 函数

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| callback | `func(i float64)` | 回调函数，入参为当前 CPU 使用率（百分比） |

**示例**

``````````````yak
hids.Init()
hids.CPUPercentCallback(func(i) {
if (i > 50) { println("cpu precent is over 50%") } // 当 CPU 使用率超过50%时输出信息
})
``````````````

---

### CheckAuditSystem {#checkauditsystem}

```go
CheckAuditSystem() (*AuditStatus, error)
```

检查 audit 子系统状态（需要 root 权限，仅 Linux 可用）

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*AuditStatus` | audit 子系统状态（是否启用、积压、丢失事件数等） |
| r2 | `error` | 错误信息（无权限或 audit 不可用时返回） |

**示例**

``````````````yak
status, err = hids.CheckAuditSystem()
if err != nil { println("Audit not available:", err) }
println("Audit enabled:", status.Enabled)
``````````````

---

### CheckJournalAvailable {#checkjournalavailable}

```go
CheckJournalAvailable() error
```

检查 journalctl 是否可用且当前用户有权读取系统级 sshd 日志

sshd 日志属于 system journal，非 root 用户需要加入 systemd-journal（或 adm）组才能读取。

如果权限不足，journalctl 会静默返回空结果而不报错，导致监控无法捕获任何事件。

本函数通过不带 -q 执行 journalctl，捕获其向 stderr 输出的权限提示来判断。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息（journalctl 不存在或当前用户无权读取系统级日志时返回，nil 表示可用） |

**示例**

``````````````yak
err = hids.CheckJournalAvailable()
if err != nil { println("journal not available:", err) }
``````````````

---

### GetConnectionStats {#getconnectionstats}

```go
GetConnectionStats() (*ConnectionStats, error)
```

获取连接统计信息

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*ConnectionStats` | 连接统计信息（总数、按状态/协议分类计数等） |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
stats, err = hids.GetConnectionStats()
println("Total connections:", stats.Total)
println("TCP connections:", stats.TCPCount)
println("Listening ports:", stats.ListenCount)
``````````````

---

### GetConnectionsByPid {#getconnectionsbypid}

```go
GetConnectionsByPid(pid int32) ([]*ConnectionInfo, error)
```

获取指定进程的连接

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| pid | `int32` | 进程 PID |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*ConnectionInfo` | 该进程的连接信息列表 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
conns, err = hids.GetConnectionsByPid(1234)
``````````````

---

### GetConnectionsByPort {#getconnectionsbyport}

```go
GetConnectionsByPort(port uint32) ([]*ConnectionInfo, error)
```

获取指定端口的连接

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| port | `uint32` | 端口号（匹配本地端口或远程端口） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*ConnectionInfo` | 匹配该端口的连接信息列表 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
conns, err = hids.GetConnectionsByPort(80)
``````````````

---

### GetCurrentProcessInfo {#getcurrentprocessinfo}

```go
GetCurrentProcessInfo() (*ProcessInfo, error)
```

获取当前进程信息

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*ProcessInfo` | 当前进程信息 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
info, err = hids.GetCurrentProcessInfo()
println("Current PID:", info.Pid)
``````````````

---

### GetEstablishedConnections {#getestablishedconnections}

```go
GetEstablishedConnections() ([]*ConnectionInfo, error)
```

获取已建立的连接

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*ConnectionInfo` | 处于 ESTABLISHED 状态的连接信息列表 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
conns, err = hids.GetEstablishedConnections()
``````````````

---

### GetFileHashMD5 {#getfilehashmd5}

```go
GetFileHashMD5(path string) (string, error)
```

获取文件MD5哈希

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| path | `string` | 文件路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 文件 MD5 哈希（十六进制字符串） |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
hash = hids.GetFileHashMD5("/usr/bin/nginx")
``````````````

---

### GetFileHashSHA256 {#getfilehashsha256}

```go
GetFileHashSHA256(path string) (string, error)
```

获取文件SHA256哈希

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| path | `string` | 文件路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 文件 SHA256 哈希（十六进制字符串） |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
hash = hids.GetFileHashSHA256("/usr/bin/nginx")
``````````````

---

### GetListeningPorts {#getlisteningports}

```go
GetListeningPorts() ([]*ConnectionInfo, error)
```

获取所有监听端口

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*ConnectionInfo` | 处于 LISTEN 状态的连接信息列表 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
conns, err = hids.GetListeningPorts()
for _, conn := range conns {

	println("Port:", conn.LocalPort, "PID:", conn.Pid)

}
``````````````

---

### GetProcessAncestors {#getprocessancestors}

```go
GetProcessAncestors(pid int32) ([]*ProcessInfo, error)
```

获取进程的所有祖先进程（父进程链）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| pid | `int32` | 进程 PID |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*ProcessInfo` | 祖先进程信息列表（由近到远） |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
ancestors, err = hids.GetProcessAncestors(1234)

	for _, ancestor := range ancestors {
	    println("Ancestor PID:", ancestor.Pid, "Name:", ancestor.Name)
	}
``````````````

---

### GetProcessByPid {#getprocessbypid}

```go
GetProcessByPid(pid int32) (*ProcessInfo, error)
```

根据PID获取进程详细信息

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| pid | `int32` | 进程 PID |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*ProcessInfo` | 进程信息 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
info, err = hids.GetProcessByPid(1234)

	if err == nil {
	    println("Process Name:", info.Name)
	    println("Process User:", info.Username)
	}
``````````````

---

### GetProcessChildren {#getprocesschildren}

```go
GetProcessChildren(pid int32) ([]*ProcessInfo, error)
```

获取进程的所有子进程

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| pid | `int32` | 进程 PID |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*ProcessInfo` | 子进程信息列表 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
children, err = hids.GetProcessChildren(1234)

	for _, child := range children {
	    println("Child PID:", child.Pid, "Name:", child.Name)
	}
``````````````

---

### GetProcessParent {#getprocessparent}

```go
GetProcessParent(pid int32) (*ProcessInfo, error)
```

获取进程的父进程信息

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| pid | `int32` | 进程 PID |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*ProcessInfo` | 父进程信息 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
parent, err = hids.GetProcessParent(1234)

	if err == nil {
	    println("Parent PID:", parent.Pid, "Name:", parent.Name)
	}
``````````````

---

### GetProcessTree {#getprocesstree}

```go
GetProcessTree(rootPid int32) (*ProcessTreeNode, error)
```

获取进程树（从指定PID开始，或从init进程开始）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| rootPid | `int32` | 进程树的根 PID（传 1 可获取整个系统进程树） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*ProcessTreeNode` | 进程树根节点 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 获取指定进程的进程树
tree, err = hids.GetProcessTree(1234)

// 获取整个系统的进程树
tree, err = hids.GetProcessTree(1)
``````````````

---

### GetTCPConnections {#gettcpconnections}

```go
GetTCPConnections() ([]*ConnectionInfo, error)
```

获取TCP连接列表

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*ConnectionInfo` | TCP 连接信息列表 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
conns, err = hids.GetTCPConnections()
``````````````

---

### GetUDPConnections {#getudpconnections}

```go
GetUDPConnections() ([]*ConnectionInfo, error)
```

获取UDP连接列表

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*ConnectionInfo` | UDP 连接信息列表 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
conns, err = hids.GetUDPConnections()
``````````````

---

### Init {#init}

```go
Init()
```

初始化全局健康管理器

**示例**

``````````````yak
hids.Init()
``````````````

---

### KillProcess {#killprocess}

```go
KillProcess(pid int32) error
```

终止进程

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| pid | `int32` | 要终止的进程 PID |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
err = hids.KillProcess(1234)
``````````````

---

### MemoryPercent {#memorypercent}

```go
MemoryPercent() float64
```

获取当前系统的内存使用率

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `float64` | 内存使用率（百分比，0-100） |

**示例**

``````````````yak
printf("%f%%\n", hids.MemoryPercent())
``````````````

---

### MemoryPercentCallback {#memorypercentcallback}

```go
MemoryPercentCallback(callback func(i float64))
```

当内存使用率发生变化时，调用 callback

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| callback | `func(i float64)` | 回调函数，入参为当前内存使用率（百分比） |

**示例**

``````````````yak
hids.Init()
hids.MemoryPercentCallback(func(i) {
if (i > 50) { println("memory precent is over 50%") } // 当内存使用率超过50%时输出信息
})
``````````````

---

### NewConnectionFilter {#newconnectionfilter}

```go
NewConnectionFilter() *ConnectionFilter
```

创建新的连接过滤器

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*ConnectionFilter` | 连接过滤器对象，可设置 Protocol/Status/LocalPort 等字段后传给 hids.Netstat |

**示例**

``````````````yak
filter = hids.NewConnectionFilter()
filter.Status = "LISTEN"
filter.Protocol = "tcp"
conns = hids.Netstat(filter)
``````````````

---

### NewProcessFilter {#newprocessfilter}

```go
NewProcessFilter() *ProcessFilter
```

创建新的进程过滤器

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*ProcessFilter` | 进程过滤器对象，可设置 Name/Pid/Username 等字段后传给 hids.PS |

**示例**

``````````````yak
filter = hids.NewProcessFilter()
filter.Name = "nginx"
processes = hids.PS(filter)
``````````````

---

### NewWhitelistRule {#newwhitelistrule}

```go
NewWhitelistRule() *ProcessWhitelistRule
```

创建新的白名单规则

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*ProcessWhitelistRule` | 进程白名单规则对象，可设置 Name/ExePath/ExeHash 等字段 |

**示例**

``````````````yak
rule = hids.NewWhitelistRule()
rule.Name = "nginx"
rule.ExePath = "/usr/sbin/nginx"
``````````````

---

### ProcessExists {#processexists}

```go
ProcessExists(pid int32) bool
```

检查指定PID的进程是否存在

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| pid | `int32` | 进程 PID |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `bool` | 进程是否存在 |

**示例**

``````````````yak
exists = hids.ProcessExists(1234)
``````````````

---

### SetMonitorInterval {#setmonitorinterval}

```go
SetMonitorInterval(i float64)
```

设置全局健康管理器的监控间隔(单位：秒)，如果在全局健康管理器运行时调用，会重置全局健康管理器

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `float64` | 监控间隔，单位为秒 |

**示例**

``````````````yak
hids.SetMonitorInterval(1)
``````````````

---

### ShowMonitorInterval {#showmonitorinterval}

```go
ShowMonitorInterval()
```

在标准输出中输出全局健康管理器的监控间隔(单位：秒)

**示例**

``````````````yak
hids.ShowMonitorInterval()
``````````````

---

### WatchAuditEvents {#watchauditevents}

```go
WatchAuditEvents(ctx context.Context, onLogin func(*LoginEvent), onCommand func(*CommandEvent)) error
```

简化的audit监控函数（需要 root 权限，仅 Linux 可用）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| ctx | `context.Context` | 上下文，取消时停止监控 |
| onLogin | `func(*LoginEvent)` | 登录事件回调（可为 nil） |
| onCommand | `func(*CommandEvent)` | 命令执行事件回调（可为 nil） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
ctx, cancel = context.WithTimeout(context.Background(), 10)
defer cancel()
err = hids.WatchAuditEvents(ctx,

	fn(event) { println("Login:", event.Username) },
	fn(event) { println("Command:", event.Command) },

)
``````````````

---

### WatchConnections {#watchconnections}

```go
WatchConnections(durationSeconds float64) ([]*ConnectionEvent, error)
```

简单的连接监控函数，监控指定时长后返回事件列表

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| durationSeconds | `float64` | 监控时长，单位为秒 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*ConnectionEvent` | 监控期间产生的连接事件列表 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
events, err = hids.WatchConnections(5) // 监控5秒
for _, event := range events {

	println(event.Type, event.Connection.LocalAddr, "->", event.Connection.RemoteAddr)

}
``````````````

---

### WatchJournalSSHEvents {#watchjournalsshevents}

```go
WatchJournalSSHEvents(ctx context.Context, onSuccess func(*JournalSSHEvent), onFailed func(*JournalSSHEvent)) error
```

简化的 SSH journal 监控函数

使用 context 控制生命周期，onSuccess 和 onFailed 可以为 nil

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| ctx | `context.Context` | 上下文，取消时停止监控 |
| onSuccess | `func(*JournalSSHEvent)` | 登录成功事件回调（可为 nil） |
| onFailed | `func(*JournalSSHEvent)` | 登录失败事件回调（可为 nil） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
ctx, cancel = context.WithTimeout(context.Background(), 60)
defer cancel()
err = hids.WatchJournalSSHEvents(ctx,

	fn(event) { printf("Login success: %s from %s\n", event.Username, event.RemoteIP) },
	fn(event) { printf("Login failed: %s from %s\n", event.Username, event.RemoteIP) },

)
``````````````

---

### WatchProcess {#watchprocess}

```go
WatchProcess(durationSeconds float64) ([]*ProcessEvent, error)
```

简单的进程监控函数，监控指定时长后返回事件列表

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| durationSeconds | `float64` | 监控时长，单位为秒 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*ProcessEvent` | 监控期间产生的进程事件列表 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
events, err = hids.WatchProcess(5) // 监控5秒
for _, event := range events {

	println(event.Type, event.Process.Name, event.Process.Pid)

}
``````````````

---

## 可变参数函数详情

### Netstat {#netstat}

```go
Netstat(filters ...*ConnectionFilter) ([]*ConnectionInfo, error)
```

获取网络连接列表（类似netstat命令）

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| filters | `...*ConnectionFilter` | 可选的连接过滤器（由 hids.NewConnectionFilter 创建），不传则返回全部连接 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*ConnectionInfo` | 连接信息列表 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 获取所有连接
conns, err = hids.Netstat()

// 使用过滤器
filter = hids.NewConnectionFilter()
filter.Status = "LISTEN"
conns, err = hids.Netstat(filter)
``````````````

---

### NewAuditMonitor {#newauditmonitor}

```go
NewAuditMonitor(opts ...AuditMonitorOption) (*AuditMonitor, error)
```

创建Audit监控器（需要 root 权限，仅 Linux 可用）

**可选参数**

可作为可变参数 `opts ...AuditMonitorOption` 传入选项；共 7 个可用选项，详见 [AuditMonitorOption 选项列表](#option-auditmonitoroption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*AuditMonitor` | Audit 监控器对象，调用 Start() 开始监控、Stop() 停止 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
monitor = hids.NewAuditMonitor(

	hids.auditMonitorLogin(true),
	hids.auditMonitorCommand(true),
	hids.auditOnLoginEvent(fn(event) {
	    println("Login:", event.Username, "from", event.RemoteIP)
	}),
	hids.auditOnCommandEvent(fn(event) {
	    println("Command:", event.Command)
	}),

)
``````````````

---

### NewConnectionMonitor {#newconnectionmonitor}

```go
NewConnectionMonitor(opts ...ConnectionMonitorOption) *ConnectionMonitor
```

创建连接监控器

**可选参数**

可作为可变参数 `opts ...ConnectionMonitorOption` 传入选项；共 5 个可用选项，详见 [ConnectionMonitorOption 选项列表](#option-connectionmonitoroption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*ConnectionMonitor` | 连接监控器对象，调用 Start() 开始监控、Stop() 停止 |

**示例**

``````````````yak
monitor = hids.NewConnectionMonitor(

	hids.WithConnectionMonitorInterval(1),
	hids.WithOnNewConnection(func(event) {
	    println("New connection:", event.Connection.LocalAddr, "->", event.Connection.RemoteAddr)
	}),

)
``````````````

---

### NewJournalSSHMonitor {#newjournalsshmonitor}

```go
NewJournalSSHMonitor(opts ...JournalSSHMonitorOption) (*JournalSSHMonitor, error)
```

创建基于 systemd journal 的 SSH 登录监控器

相比 audit 监控，journal 监控有以下优势：

  - 不需要 root 权限（用户属于 systemd-journal 组即可）

  - 不依赖 audit 子系统安装和启用

  - 直接解析 sshd 的认证日志，信息直观

**可选参数**

可作为可变参数 `opts ...JournalSSHMonitorOption` 传入选项；共 8 个可用选项，详见 [JournalSSHMonitorOption 选项列表](#option-journalsshmonitoroption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*JournalSSHMonitor` | SSH journal 监控器对象，调用 Start() 开始监控、Stop() 停止 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
monitor, err = hids.NewJournalSSHMonitor(

	hids.journalSSHOnLoginSuccess(fn(event) {
	    printf("SSH login success: user=%s from=%s method=%s\n", event.Username, event.RemoteIP, event.AuthMethod)
	}),
	hids.journalSSHOnLoginFailed(fn(event) {
	    printf("SSH login failed: user=%s from=%s\n", event.Username, event.RemoteIP)
	}),

)
if err != nil { die(err) }
err = monitor.Start()
``````````````

---

### NewProcessMonitor {#newprocessmonitor}

```go
NewProcessMonitor(opts ...ProcessMonitorOption) *ProcessMonitor
```

创建进程监控器

**可选参数**

可作为可变参数 `opts ...ProcessMonitorOption` 传入选项；共 4 个可用选项，详见 [ProcessMonitorOption 选项列表](#option-processmonitoroption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*ProcessMonitor` | 进程监控器对象，调用 Start() 开始监控、Stop() 停止 |

**示例**

``````````````yak
monitor = hids.NewProcessMonitor(

	hids.WithProcessMonitorInterval(1),
	hids.WithOnProcessCreate(func(event) {
	    println("New process:", event.Process.Name)
	}),

)
``````````````

---

### PS {#ps}

```go
PS(filters ...*ProcessFilter) ([]*ProcessInfo, error)
```

获取进程列表，可选择使用过滤器

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| filters | `...*ProcessFilter` | 可选的进程过滤器（由 hids.NewProcessFilter 创建），不传则返回全部进程 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*ProcessInfo` | 进程信息列表 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 获取所有进程
processes, err = hids.PS()

// 使用过滤器
filter = hids.NewProcessFilter()
filter.Name = "nginx"
processes, err = hids.PS(filter)
``````````````

---

## 可变参数选项列表

以下按选项类型汇总全部可变参数选项(原先重复在各主函数下的选项表已收拢到此处)：

### 1. 类型：AuditMonitorOption {#option-auditmonitoroption}

涉及到的函数有：[hids.NewAuditMonitor](#newauditmonitor)

|选项函数|参数|返回值|说明|
|:--|:--|:--|:--|
| `hids.auditFilterCommands` | `commands ...string` | `AuditMonitorOption` | 设置命令过滤器（支持正则） |
| `hids.auditFilterLoginUsers` | `users ...string` | `AuditMonitorOption` | 设置原始登录用户过滤器（按 LoginUser 过滤） |
| `hids.auditFilterUsers` | `users ...string` | `AuditMonitorOption` | 设置当前用户过滤器（按 Username 过滤） |
| `hids.auditMonitorCommand` | `enable bool` | `AuditMonitorOption` | 设置是否监控命令执行事件 |
| `hids.auditMonitorLogin` | `enable bool` | `AuditMonitorOption` | 设置是否监控登录事件 |
| `hids.auditOnCommandEvent` | `callback func(*CommandEvent)` | `AuditMonitorOption` | 设置命令执行事件回调 |
| `hids.auditOnLoginEvent` | `callback func(*LoginEvent)` | `AuditMonitorOption` | 设置登录事件回调 |

### 2. 类型：ConnectionMonitorOption {#option-connectionmonitoroption}

涉及到的函数有：[hids.NewConnectionMonitor](#newconnectionmonitor)

|选项函数|参数|返回值|说明|
|:--|:--|:--|:--|
| `hids.WithConnectionFilter` | `filter *ConnectionFilter` | `ConnectionMonitorOption` | 设置连接监控的过滤器，仅监控匹配的连接 |
| `hids.WithConnectionHistory` | `maxHistory int` | `ConnectionMonitorOption` | 启用连接事件历史记录，并设置最大保留条数 |
| `hids.WithConnectionMonitorInterval` | `seconds float64` | `ConnectionMonitorOption` | 设置连接监控的轮询间隔 |
| `hids.WithOnConnectionDisappear` | `callback func(event *ConnectionEvent)` | `ConnectionMonitorOption` | 设置连接消失时的回调 |
| `hids.WithOnNewConnection` | `callback func(event *ConnectionEvent)` | `ConnectionMonitorOption` | 设置发现新连接时的回调 |

### 3. 类型：JournalSSHMonitorOption {#option-journalsshmonitoroption}

涉及到的函数有：[hids.NewJournalSSHMonitor](#newjournalsshmonitor)

|选项函数|参数|返回值|说明|
|:--|:--|:--|:--|
| `hids.journalSSHFilterRemoteIPs` | `ips ...string` | `JournalSSHMonitorOption` | 只监控来自指定 IP 的 SSH 登录事件 |
| `hids.journalSSHFilterUsers` | `users ...string` | `JournalSSHMonitorOption` | 只监控指定用户名的 SSH 登录事件 |
| `hids.journalSSHOnAnyEvent` | `callback func(*JournalSSHEvent)` | `JournalSSHMonitorOption` | 设置任意 SSH 事件回调（成功/失败/断开均触发） |
| `hids.journalSSHOnDisconnected` | `callback func(*JournalSSHEvent)` | `JournalSSHMonitorOption` | 设置会话断开事件回调 |
| `hids.journalSSHOnLoginFailed` | `callback func(*JournalSSHEvent)` | `JournalSSHMonitorOption` | 设置登录失败事件回调 |
| `hids.journalSSHOnLoginSuccess` | `callback func(*JournalSSHEvent)` | `JournalSSHMonitorOption` | 设置登录成功事件回调 |
| `hids.journalSSHSince` | `since string` | `JournalSSHMonitorOption` | 设置从何时开始读取日志（journalctl --since 参数格式） |
| `hids.journalSSHUnits` | `units ...string` | `JournalSSHMonitorOption` | 设置要监听的 systemd unit 名称（默认自动检测 sshd/ssh） |

### 4. 类型：ProcessMonitorOption {#option-processmonitoroption}

涉及到的函数有：[hids.NewProcessMonitor](#newprocessmonitor)

|选项函数|参数|返回值|说明|
|:--|:--|:--|:--|
| `hids.WithOnProcessCreate` | `callback func(event *ProcessEvent)` | `ProcessMonitorOption` | 设置进程创建回调 |
| `hids.WithOnProcessExit` | `callback func(event *ProcessEvent)` | `ProcessMonitorOption` | 设置进程退出回调 |
| `hids.WithProcessMonitorInterval` | `seconds float64` | `ProcessMonitorOption` | 设置进程监控的轮询间隔 |
| `hids.WithWhitelist` | `rules []*ProcessWhitelistRule` | `ProcessMonitorOption` | 设置进程白名单规则 |

