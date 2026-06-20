# hids

|函数名|函数描述/介绍|
|:------|:--------|
| [hids.CPUAverage](#cpuaverage) |CPUAverage 获取当前系统的 CPU 使用率平均值 返回值: - CPU 使用率平均值（百分比，0-100）|
| [hids.CPUAverageCallback](#cpuaveragecallback) |CPUAverageCallback 当 CPU 使用率平均值发生变化时，调用 callback 函数 参数: - callback: 回调函数，入参为当前 CPU 使用率平均值（百分比）|
| [hids.CPUPercent](#cpupercent) |CPUPercent 获取当前系统的 CPU 使用率 返回值: - CPU 使用率（百分比，0-100）|
| [hids.CPUPercentCallback](#cpupercentcallback) |CPUPercentCallback 当 CPU 使用率发生变化时，调用 callback 函数 参数: - callback: 回调函数，入参为当前 CPU 使用率（百分比）|
| [hids.CheckAuditSystem](#checkauditsystem) |CheckAuditSystem 检查 audit 子系统状态（需要 root 权限，仅 Linux 可用） 返回值: - audit 子系统状态（是否启用、积压、丢失事件数等） - 错误信息（无权限或 audit 不可用时返回）|
| [hids.CheckJournalAvailable](#checkjournalavailable) |CheckJournalAvailable 检查 journalctl 是否可用且当前用户有权读取系统级 sshd 日志 sshd 日志属于 system journal，非 root 用户需要加入 systemd-journal（或 adm）组才能读取。 如果权限不足，journalctl 会静默...|
| [hids.GetConnectionStats](#getconnectionstats) |GetConnectionStats 获取连接统计信息 返回值: - 连接统计信息（总数、按状态/协议分类计数等） - 错误信息|
| [hids.GetConnectionsByPid](#getconnectionsbypid) |GetConnectionsByPid 获取指定进程的连接 参数: - pid: 进程 PID 返回值: - 该进程的连接信息列表 - 错误信息|
| [hids.GetConnectionsByPort](#getconnectionsbyport) |GetConnectionsByPort 获取指定端口的连接 参数: - port: 端口号（匹配本地端口或远程端口） 返回值: - 匹配该端口的连接信息列表 - 错误信息|
| [hids.GetCurrentProcessInfo](#getcurrentprocessinfo) |GetCurrentProcessInfo 获取当前进程信息 返回值: - 当前进程信息 - 错误信息|
| [hids.GetEstablishedConnections](#getestablishedconnections) |GetEstablishedConnections 获取已建立的连接 返回值: - 处于 ESTABLISHED 状态的连接信息列表 - 错误信息|
| [hids.GetFileHashMD5](#getfilehashmd5) |GetFileHashMD5 获取文件MD5哈希 参数: - path: 文件路径 返回值: - 文件 MD5 哈希（十六进制字符串） - 错误信息|
| [hids.GetFileHashSHA256](#getfilehashsha256) |GetFileHashSHA256 获取文件SHA256哈希 参数: - path: 文件路径 返回值: - 文件 SHA256 哈希（十六进制字符串） - 错误信息|
| [hids.GetListeningPorts](#getlisteningports) |GetListeningPorts 获取所有监听端口 返回值: - 处于 LISTEN 状态的连接信息列表 - 错误信息|
| [hids.GetProcessAncestors](#getprocessancestors) |GetProcessAncestors 获取进程的所有祖先进程（父进程链） 参数: - pid: 进程 PID 返回值: - 祖先进程信息列表（由近到远） - 错误信息|
| [hids.GetProcessByPid](#getprocessbypid) |GetProcessByPid 根据PID获取进程详细信息 参数: - pid: 进程 PID 返回值: - 进程信息 - 错误信息|
| [hids.GetProcessChildren](#getprocesschildren) |GetProcessChildren 获取进程的所有子进程 参数: - pid: 进程 PID 返回值: - 子进程信息列表 - 错误信息|
| [hids.GetProcessParent](#getprocessparent) |GetProcessParent 获取进程的父进程信息 参数: - pid: 进程 PID 返回值: - 父进程信息 - 错误信息|
| [hids.GetProcessTree](#getprocesstree) |GetProcessTree 获取进程树（从指定PID开始，或从init进程开始） 参数: - rootPid: 进程树的根 PID（传 1 可获取整个系统进程树） 返回值: - 进程树根节点 - 错误信息|
| [hids.GetTCPConnections](#gettcpconnections) |GetTCPConnections 获取TCP连接列表 返回值: - TCP 连接信息列表 - 错误信息|
| [hids.GetUDPConnections](#getudpconnections) |GetUDPConnections 获取UDP连接列表 返回值: - UDP 连接信息列表 - 错误信息|
| [hids.Init](#init) |Init 初始化全局健康管理器|
| [hids.KillProcess](#killprocess) |KillProcess 终止进程 参数: - pid: 要终止的进程 PID 返回值: - 错误信息|
| [hids.MemoryPercent](#memorypercent) |MemoryPercent 获取当前系统的内存使用率 返回值: - 内存使用率（百分比，0-100）|
| [hids.MemoryPercentCallback](#memorypercentcallback) |MemoryPercentCallback 当内存使用率发生变化时，调用 callback 参数: - callback: 回调函数，入参为当前内存使用率（百分比）|
| [hids.Netstat](#netstat) |Netstat 获取网络连接列表（类似netstat命令） 参数: - filters: 可选的连接过滤器（由 hids.NewConnectionFilter 创建），不传则返回全部连接 返回值: - 连接信息列表 - 错误信息|
| [hids.NewAuditMonitor](#newauditmonitor) |NewAuditMonitor 创建Audit监控器（需要 root 权限，仅 Linux 可用） 参数: - opts: 可选配置项，如 hids.auditMonitorLogin / hids.auditOnLoginEvent 等 返回值: - Audit 监控器对象，调用 Start() ...|
| [hids.NewConnectionFilter](#newconnectionfilter) |NewConnectionFilter 创建新的连接过滤器 返回值: - 连接过滤器对象，可设置 Protocol/Status/LocalPort 等字段后传给 hids.Netstat|
| [hids.NewConnectionMonitor](#newconnectionmonitor) |NewConnectionMonitor 创建连接监控器 参数: - opts: 可选配置项，如 hids.WithConnectionMonitorInterval / hids.WithOnNewConnection 等 返回值: - 连接监控器对象，调用 Start() 开始监控、Stop()...|
| [hids.NewJournalSSHMonitor](#newjournalsshmonitor) |NewJournalSSHMonitor 创建基于 systemd journal 的 SSH 登录监控器 相比 audit 监控，journal 监控有以下优势： - 不需要 root 权限（用户属于 systemd-journal 组即可） - 不依赖 audit 子系统安装和启用 - 直接解析...|
| [hids.NewProcessFilter](#newprocessfilter) |NewProcessFilter 创建新的进程过滤器 返回值: - 进程过滤器对象，可设置 Name/Pid/Username 等字段后传给 hids.PS|
| [hids.NewProcessMonitor](#newprocessmonitor) |NewProcessMonitor 创建进程监控器 参数: - opts: 可选配置项，如 hids.WithProcessMonitorInterval / hids.WithOnProcessCreate 等 返回值: - 进程监控器对象，调用 Start() 开始监控、Stop() 停止|
| [hids.NewWhitelistRule](#newwhitelistrule) |NewWhitelistRule 创建新的白名单规则 返回值: - 进程白名单规则对象，可设置 Name/ExePath/ExeHash 等字段|
| [hids.PS](#ps) |PS 获取进程列表，可选择使用过滤器 参数: - filters: 可选的进程过滤器（由 hids.NewProcessFilter 创建），不传则返回全部进程 返回值: - 进程信息列表 - 错误信息|
| [hids.ProcessExists](#processexists) |ProcessExists 检查指定PID的进程是否存在 参数: - pid: 进程 PID 返回值: - 进程是否存在|
| [hids.SetMonitorInterval](#setmonitorinterval) |SetMonitorInterval 设置全局健康管理器的监控间隔(单位：秒)，如果在全局健康管理器运行时调用，会重置全局健康管理器 参数: - i: 监控间隔，单位为秒|
| [hids.ShowMonitorInterval](#showmonitorinterval) |ShowMonitorInterval 在标准输出中输出全局健康管理器的监控间隔(单位：秒)|
| [hids.WatchAuditEvents](#watchauditevents) |WatchAuditEvents 简化的audit监控函数（需要 root 权限，仅 Linux 可用） 参数: - ctx: 上下文，取消时停止监控 - onLogin: 登录事件回调（可为 nil） - onCommand: 命令执行事件回调（可为 nil） 返回值: - 错误信息|
| [hids.WatchConnections](#watchconnections) |WatchConnections 简单的连接监控函数，监控指定时长后返回事件列表 参数: - durationSeconds: 监控时长，单位为秒 返回值: - 监控期间产生的连接事件列表 - 错误信息|
| [hids.WatchJournalSSHEvents](#watchjournalsshevents) |WatchJournalSSHEvents 简化的 SSH journal 监控函数 使用 context 控制生命周期，onSuccess 和 onFailed 可以为 nil 参数: - ctx: 上下文，取消时停止监控 - onSuccess: 登录成功事件回调（可为 nil） - onFai...|
| [hids.WatchProcess](#watchprocess) |WatchProcess 简单的进程监控函数，监控指定时长后返回事件列表 参数: - durationSeconds: 监控时长，单位为秒 返回值: - 监控期间产生的进程事件列表 - 错误信息|
| [hids.WithConnectionFilter](#withconnectionfilter) |WithConnectionFilter 设置连接监控的过滤器，仅监控匹配的连接 参数: - filter: 连接过滤器（由 hids.NewConnectionFilter 创建） 返回值: - 可传入 hids.NewConnectionMonitor 的配置选项|
| [hids.WithConnectionHistory](#withconnectionhistory) |WithConnectionHistory 启用连接事件历史记录，并设置最大保留条数 参数: - maxHistory: 最大历史记录条数（小于等于 0 时使用默认 1000） 返回值: - 可传入 hids.NewConnectionMonitor 的配置选项|
| [hids.WithConnectionMonitorInterval](#withconnectionmonitorinterval) |WithConnectionMonitorInterval 设置连接监控的轮询间隔 参数: - seconds: 轮询间隔，单位为秒 返回值: - 可传入 hids.NewConnectionMonitor 的配置选项|
| [hids.WithOnConnectionDisappear](#withonconnectiondisappear) |WithOnConnectionDisappear 设置连接消失时的回调 参数: - callback: 回调函数，入参为连接事件 返回值: - 可传入 hids.NewConnectionMonitor 的配置选项|
| [hids.WithOnNewConnection](#withonnewconnection) |WithOnNewConnection 设置发现新连接时的回调 参数: - callback: 回调函数，入参为连接事件 返回值: - 可传入 hids.NewConnectionMonitor 的配置选项|
| [hids.WithOnProcessCreate](#withonprocesscreate) |WithOnProcessCreate 设置进程创建回调 参数: - callback: 回调函数，入参为进程事件 返回值: - 可传入 hids.NewProcessMonitor 的配置选项|
| [hids.WithOnProcessExit](#withonprocessexit) |WithOnProcessExit 设置进程退出回调 参数: - callback: 回调函数，入参为进程事件 返回值: - 可传入 hids.NewProcessMonitor 的配置选项|
| [hids.WithProcessMonitorInterval](#withprocessmonitorinterval) |WithProcessMonitorInterval 设置进程监控的轮询间隔 参数: - seconds: 轮询间隔，单位为秒 返回值: - 可传入 hids.NewProcessMonitor 的配置选项|
| [hids.WithWhitelist](#withwhitelist) |WithWhitelist 设置进程白名单规则 参数: - rules: 白名单规则列表（由 hids.NewWhitelistRule 创建） 返回值: - 可传入 hids.NewProcessMonitor 的配置选项|
| [hids.auditFilterCommands](#auditfiltercommands) |auditFilterCommands 设置命令过滤器（支持正则） 参数: - commands: 命令匹配正则列表，可传多个，命中任一即处理 返回值: - 可传入 hids.NewAuditMonitor 的配置选项|
| [hids.auditFilterLoginUsers](#auditfilterloginusers) |auditFilterLoginUsers 设置原始登录用户过滤器（按 LoginUser 过滤） 过滤原始登录的用户（例如 SSH 登录的用户，即使后来 su 到其他用户） 参数: - users: 允许的原始登录用户名列表，可传多个 返回值: - 可传入 hids.NewAuditMonitor...|
| [hids.auditFilterUsers](#auditfilterusers) |auditFilterUsers 设置当前用户过滤器（按 Username 过滤） 过滤当前执行操作的用户（例如 su 后的用户） 参数: - users: 允许的当前用户名列表，可传多个 返回值: - 可传入 hids.NewAuditMonitor 的配置选项|
| [hids.auditMonitorCommand](#auditmonitorcommand) |auditMonitorCommand 设置是否监控命令执行事件 参数: - enable: 是否监控命令执行事件 返回值: - 可传入 hids.NewAuditMonitor 的配置选项|
| [hids.auditMonitorLogin](#auditmonitorlogin) |auditMonitorLogin 设置是否监控登录事件 参数: - enable: 是否监控登录事件 返回值: - 可传入 hids.NewAuditMonitor 的配置选项|
| [hids.auditOnCommandEvent](#auditoncommandevent) |auditOnCommandEvent 设置命令执行事件回调 参数: - callback: 回调函数，入参为命令执行事件 返回值: - 可传入 hids.NewAuditMonitor 的配置选项|
| [hids.auditOnLoginEvent](#auditonloginevent) |auditOnLoginEvent 设置登录事件回调 参数: - callback: 回调函数，入参为登录事件 返回值: - 可传入 hids.NewAuditMonitor 的配置选项|
| [hids.journalSSHFilterRemoteIPs](#journalsshfilterremoteips) |journalSSHFilterRemoteIPs 只监控来自指定 IP 的 SSH 登录事件 参数: - ips: 允许的远程 IP 列表，可传多个 返回值: - 可传入 hids.NewJournalSSHMonitor 的配置选项|
| [hids.journalSSHFilterUsers](#journalsshfilterusers) |journalSSHFilterUsers 只监控指定用户名的 SSH 登录事件 参数: - users: 允许的用户名列表，可传多个 返回值: - 可传入 hids.NewJournalSSHMonitor 的配置选项|
| [hids.journalSSHOnAnyEvent](#journalsshonanyevent) |journalSSHOnAnyEvent 设置任意 SSH 事件回调（成功/失败/断开均触发） 参数: - callback: 回调函数，入参为 SSH 事件 返回值: - 可传入 hids.NewJournalSSHMonitor 的配置选项|
| [hids.journalSSHOnDisconnected](#journalsshondisconnected) |journalSSHOnDisconnected 设置会话断开事件回调 参数: - callback: 回调函数，入参为 SSH 事件 返回值: - 可传入 hids.NewJournalSSHMonitor 的配置选项|
| [hids.journalSSHOnLoginFailed](#journalsshonloginfailed) |journalSSHOnLoginFailed 设置登录失败事件回调 参数: - callback: 回调函数，入参为 SSH 事件 返回值: - 可传入 hids.NewJournalSSHMonitor 的配置选项|
| [hids.journalSSHOnLoginSuccess](#journalsshonloginsuccess) |journalSSHOnLoginSuccess 设置登录成功事件回调 参数: - callback: 回调函数，入参为 SSH 事件 返回值: - 可传入 hids.NewJournalSSHMonitor 的配置选项|
| [hids.journalSSHSince](#journalsshsince) |journalSSHSince 设置从何时开始读取日志（journalctl --since 参数格式） 默认为 &#34;now&#34;，即只读取启动后的新日志 参数: - since: 起始时间，格式同 journalctl --since（如 &#34;1 hour ago&#34;、&#34;2024-01-01 00:00:0...|
| [hids.journalSSHUnits](#journalsshunits) |journalSSHUnits 设置要监听的 systemd unit 名称（默认自动检测 sshd/ssh） 参数: - units: systemd unit 名称列表，可传多个 返回值: - 可传入 hids.NewJournalSSHMonitor 的配置选项|


## 函数定义
### CPUAverage

#### 详细描述
CPUAverage 获取当前系统的 CPU 使用率平均值



返回值:

  - CPU 使用率平均值（百分比，0-100）




Example:

``````````````yak
printf("%f%%\n", hids.CPUAverage())
``````````````


#### 定义

`CPUAverage() float64`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `float64` | CPU 使用率平均值（百分比，0-100） |


### CPUAverageCallback

#### 详细描述
CPUAverageCallback 当 CPU 使用率平均值发生变化时，调用 callback 函数



参数:

  - callback: 回调函数，入参为当前 CPU 使用率平均值（百分比）




Example:

``````````````yak
hids.Init()
hids.CPUAverageCallback(func(i) {
if (i > 50) { println("cpu average precent is over 50%") } // 当 CPU 使用率平均值超过50%时输出信息
})
``````````````


#### 定义

`CPUAverageCallback(callback func(i float64))`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `func(i float64)` | 回调函数，入参为当前 CPU 使用率平均值（百分比） |


### CPUPercent

#### 详细描述
CPUPercent 获取当前系统的 CPU 使用率



返回值:

  - CPU 使用率（百分比，0-100）




Example:

``````````````yak
printf("%f%%\n", hids.CPUPercent())
``````````````


#### 定义

`CPUPercent() float64`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `float64` | CPU 使用率（百分比，0-100） |


### CPUPercentCallback

#### 详细描述
CPUPercentCallback 当 CPU 使用率发生变化时，调用 callback 函数



参数:

  - callback: 回调函数，入参为当前 CPU 使用率（百分比）




Example:

``````````````yak
hids.Init()
hids.CPUPercentCallback(func(i) {
if (i > 50) { println("cpu precent is over 50%") } // 当 CPU 使用率超过50%时输出信息
})
``````````````


#### 定义

`CPUPercentCallback(callback func(i float64))`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `func(i float64)` | 回调函数，入参为当前 CPU 使用率（百分比） |


### CheckAuditSystem

#### 详细描述
CheckAuditSystem 检查 audit 子系统状态（需要 root 权限，仅 Linux 可用）



返回值:

  - audit 子系统状态（是否启用、积压、丢失事件数等）

  - 错误信息（无权限或 audit 不可用时返回）




Example:

``````````````yak
status, err = hids.CheckAuditSystem()
if err != nil { println("Audit not available:", err) }
println("Audit enabled:", status.Enabled)
``````````````


#### 定义

`CheckAuditSystem() (*AuditStatus, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*AuditStatus` | audit 子系统状态（是否启用、积压、丢失事件数等） |
| r2 | `error` | 错误信息（无权限或 audit 不可用时返回） |


### CheckJournalAvailable

#### 详细描述
CheckJournalAvailable 检查 journalctl 是否可用且当前用户有权读取系统级 sshd 日志



sshd 日志属于 system journal，非 root 用户需要加入 systemd-journal（或 adm）组才能读取。

如果权限不足，journalctl 会静默返回空结果而不报错，导致监控无法捕获任何事件。

本函数通过不带 -q 执行 journalctl，捕获其向 stderr 输出的权限提示来判断。



返回值:

  - 错误信息（journalctl 不存在或当前用户无权读取系统级日志时返回，nil 表示可用）




Example:

``````````````yak
err = hids.CheckJournalAvailable()
if err != nil { println("journal not available:", err) }
``````````````


#### 定义

`CheckJournalAvailable() error`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息（journalctl 不存在或当前用户无权读取系统级日志时返回，nil 表示可用） |


### GetConnectionStats

#### 详细描述
GetConnectionStats 获取连接统计信息



返回值:

  - 连接统计信息（总数、按状态/协议分类计数等）

  - 错误信息




Example:

``````````````yak
stats, err = hids.GetConnectionStats()
println("Total connections:", stats.Total)
println("TCP connections:", stats.TCPCount)
println("Listening ports:", stats.ListenCount)
``````````````


#### 定义

`GetConnectionStats() (*ConnectionStats, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ConnectionStats` | 连接统计信息（总数、按状态/协议分类计数等） |
| r2 | `error` | 错误信息 |


### GetConnectionsByPid

#### 详细描述
GetConnectionsByPid 获取指定进程的连接



参数:

  - pid: 进程 PID



返回值:

  - 该进程的连接信息列表

  - 错误信息




Example:

``````````````yak
conns, err = hids.GetConnectionsByPid(1234)
``````````````


#### 定义

`GetConnectionsByPid(pid int32) ([]*ConnectionInfo, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pid | `int32` | 进程 PID |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*ConnectionInfo` | 该进程的连接信息列表 |
| r2 | `error` | 错误信息 |


### GetConnectionsByPort

#### 详细描述
GetConnectionsByPort 获取指定端口的连接



参数:

  - port: 端口号（匹配本地端口或远程端口）



返回值:

  - 匹配该端口的连接信息列表

  - 错误信息




Example:

``````````````yak
conns, err = hids.GetConnectionsByPort(80)
``````````````


#### 定义

`GetConnectionsByPort(port uint32) ([]*ConnectionInfo, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| port | `uint32` | 端口号（匹配本地端口或远程端口） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*ConnectionInfo` | 匹配该端口的连接信息列表 |
| r2 | `error` | 错误信息 |


### GetCurrentProcessInfo

#### 详细描述
GetCurrentProcessInfo 获取当前进程信息



返回值:

  - 当前进程信息

  - 错误信息




Example:

``````````````yak
info, err = hids.GetCurrentProcessInfo()
println("Current PID:", info.Pid)
``````````````


#### 定义

`GetCurrentProcessInfo() (*ProcessInfo, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ProcessInfo` | 当前进程信息 |
| r2 | `error` | 错误信息 |


### GetEstablishedConnections

#### 详细描述
GetEstablishedConnections 获取已建立的连接



返回值:

  - 处于 ESTABLISHED 状态的连接信息列表

  - 错误信息




Example:

``````````````yak
conns, err = hids.GetEstablishedConnections()
``````````````


#### 定义

`GetEstablishedConnections() ([]*ConnectionInfo, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*ConnectionInfo` | 处于 ESTABLISHED 状态的连接信息列表 |
| r2 | `error` | 错误信息 |


### GetFileHashMD5

#### 详细描述
GetFileHashMD5 获取文件MD5哈希



参数:

  - path: 文件路径



返回值:

  - 文件 MD5 哈希（十六进制字符串）

  - 错误信息




Example:

``````````````yak
hash = hids.GetFileHashMD5("/usr/bin/nginx")
``````````````


#### 定义

`GetFileHashMD5(path string) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` | 文件路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 文件 MD5 哈希（十六进制字符串） |
| r2 | `error` | 错误信息 |


### GetFileHashSHA256

#### 详细描述
GetFileHashSHA256 获取文件SHA256哈希



参数:

  - path: 文件路径



返回值:

  - 文件 SHA256 哈希（十六进制字符串）

  - 错误信息




Example:

``````````````yak
hash = hids.GetFileHashSHA256("/usr/bin/nginx")
``````````````


#### 定义

`GetFileHashSHA256(path string) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` | 文件路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 文件 SHA256 哈希（十六进制字符串） |
| r2 | `error` | 错误信息 |


### GetListeningPorts

#### 详细描述
GetListeningPorts 获取所有监听端口



返回值:

  - 处于 LISTEN 状态的连接信息列表

  - 错误信息




Example:

``````````````yak
conns, err = hids.GetListeningPorts()
for _, conn := range conns {

	println("Port:", conn.LocalPort, "PID:", conn.Pid)

}
``````````````


#### 定义

`GetListeningPorts() ([]*ConnectionInfo, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*ConnectionInfo` | 处于 LISTEN 状态的连接信息列表 |
| r2 | `error` | 错误信息 |


### GetProcessAncestors

#### 详细描述
GetProcessAncestors 获取进程的所有祖先进程（父进程链）



参数:

  - pid: 进程 PID



返回值:

  - 祖先进程信息列表（由近到远）

  - 错误信息




Example:

``````````````yak
ancestors, err = hids.GetProcessAncestors(1234)

	for _, ancestor := range ancestors {
	    println("Ancestor PID:", ancestor.Pid, "Name:", ancestor.Name)
	}
``````````````


#### 定义

`GetProcessAncestors(pid int32) ([]*ProcessInfo, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pid | `int32` | 进程 PID |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*ProcessInfo` | 祖先进程信息列表（由近到远） |
| r2 | `error` | 错误信息 |


### GetProcessByPid

#### 详细描述
GetProcessByPid 根据PID获取进程详细信息



参数:

  - pid: 进程 PID



返回值:

  - 进程信息

  - 错误信息




Example:

``````````````yak
info, err = hids.GetProcessByPid(1234)

	if err == nil {
	    println("Process Name:", info.Name)
	    println("Process User:", info.Username)
	}
``````````````


#### 定义

`GetProcessByPid(pid int32) (*ProcessInfo, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pid | `int32` | 进程 PID |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ProcessInfo` | 进程信息 |
| r2 | `error` | 错误信息 |


### GetProcessChildren

#### 详细描述
GetProcessChildren 获取进程的所有子进程



参数:

  - pid: 进程 PID



返回值:

  - 子进程信息列表

  - 错误信息




Example:

``````````````yak
children, err = hids.GetProcessChildren(1234)

	for _, child := range children {
	    println("Child PID:", child.Pid, "Name:", child.Name)
	}
``````````````


#### 定义

`GetProcessChildren(pid int32) ([]*ProcessInfo, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pid | `int32` | 进程 PID |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*ProcessInfo` | 子进程信息列表 |
| r2 | `error` | 错误信息 |


### GetProcessParent

#### 详细描述
GetProcessParent 获取进程的父进程信息



参数:

  - pid: 进程 PID



返回值:

  - 父进程信息

  - 错误信息




Example:

``````````````yak
parent, err = hids.GetProcessParent(1234)

	if err == nil {
	    println("Parent PID:", parent.Pid, "Name:", parent.Name)
	}
``````````````


#### 定义

`GetProcessParent(pid int32) (*ProcessInfo, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pid | `int32` | 进程 PID |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ProcessInfo` | 父进程信息 |
| r2 | `error` | 错误信息 |


### GetProcessTree

#### 详细描述
GetProcessTree 获取进程树（从指定PID开始，或从init进程开始）



参数:

  - rootPid: 进程树的根 PID（传 1 可获取整个系统进程树）



返回值:

  - 进程树根节点

  - 错误信息




Example:

``````````````yak
// 获取指定进程的进程树
tree, err = hids.GetProcessTree(1234)

// 获取整个系统的进程树
tree, err = hids.GetProcessTree(1)
``````````````


#### 定义

`GetProcessTree(rootPid int32) (*ProcessTreeNode, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| rootPid | `int32` | 进程树的根 PID（传 1 可获取整个系统进程树） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ProcessTreeNode` | 进程树根节点 |
| r2 | `error` | 错误信息 |


### GetTCPConnections

#### 详细描述
GetTCPConnections 获取TCP连接列表



返回值:

  - TCP 连接信息列表

  - 错误信息




Example:

``````````````yak
conns, err = hids.GetTCPConnections()
``````````````


#### 定义

`GetTCPConnections() ([]*ConnectionInfo, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*ConnectionInfo` | TCP 连接信息列表 |
| r2 | `error` | 错误信息 |


### GetUDPConnections

#### 详细描述
GetUDPConnections 获取UDP连接列表



返回值:

  - UDP 连接信息列表

  - 错误信息




Example:

``````````````yak
conns, err = hids.GetUDPConnections()
``````````````


#### 定义

`GetUDPConnections() ([]*ConnectionInfo, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*ConnectionInfo` | UDP 连接信息列表 |
| r2 | `error` | 错误信息 |


### Init

#### 详细描述
Init 初始化全局健康管理器


Example:

``````````````yak
hids.Init()
``````````````


#### 定义

`Init()`


### KillProcess

#### 详细描述
KillProcess 终止进程



参数:

  - pid: 要终止的进程 PID



返回值:

  - 错误信息




Example:

``````````````yak
err = hids.KillProcess(1234)
``````````````


#### 定义

`KillProcess(pid int32) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pid | `int32` | 要终止的进程 PID |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### MemoryPercent

#### 详细描述
MemoryPercent 获取当前系统的内存使用率



返回值:

  - 内存使用率（百分比，0-100）




Example:

``````````````yak
printf("%f%%\n", hids.MemoryPercent())
``````````````


#### 定义

`MemoryPercent() float64`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `float64` | 内存使用率（百分比，0-100） |


### MemoryPercentCallback

#### 详细描述
MemoryPercentCallback 当内存使用率发生变化时，调用 callback



参数:

  - callback: 回调函数，入参为当前内存使用率（百分比）




Example:

``````````````yak
hids.Init()
hids.MemoryPercentCallback(func(i) {
if (i > 50) { println("memory precent is over 50%") } // 当内存使用率超过50%时输出信息
})
``````````````


#### 定义

`MemoryPercentCallback(callback func(i float64))`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `func(i float64)` | 回调函数，入参为当前内存使用率（百分比） |


### Netstat

#### 详细描述
Netstat 获取网络连接列表（类似netstat命令）



参数:

  - filters: 可选的连接过滤器（由 hids.NewConnectionFilter 创建），不传则返回全部连接



返回值:

  - 连接信息列表

  - 错误信息




Example:

``````````````yak
// 获取所有连接
conns, err = hids.Netstat()

// 使用过滤器
filter = hids.NewConnectionFilter()
filter.Status = "LISTEN"
conns, err = hids.Netstat(filter)
``````````````


#### 定义

`Netstat(filters ...*ConnectionFilter) ([]*ConnectionInfo, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| filters | `...*ConnectionFilter` | 可选的连接过滤器（由 hids.NewConnectionFilter 创建），不传则返回全部连接 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*ConnectionInfo` | 连接信息列表 |
| r2 | `error` | 错误信息 |


### NewAuditMonitor

#### 详细描述
NewAuditMonitor 创建Audit监控器（需要 root 权限，仅 Linux 可用）



参数:

  - opts: 可选配置项，如 hids.auditMonitorLogin / hids.auditOnLoginEvent 等



返回值:

  - Audit 监控器对象，调用 Start() 开始监控、Stop() 停止

  - 错误信息




Example:

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


#### 定义

`NewAuditMonitor(opts ...AuditMonitorOption) (*AuditMonitor, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...AuditMonitorOption` | 可选配置项，如 hids.auditMonitorLogin / hids.auditOnLoginEvent 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*AuditMonitor` | Audit 监控器对象，调用 Start() 开始监控、Stop() 停止 |
| r2 | `error` | 错误信息 |


### NewConnectionFilter

#### 详细描述
NewConnectionFilter 创建新的连接过滤器



返回值:

  - 连接过滤器对象，可设置 Protocol/Status/LocalPort 等字段后传给 hids.Netstat




Example:

``````````````yak
filter = hids.NewConnectionFilter()
filter.Status = "LISTEN"
filter.Protocol = "tcp"
conns = hids.Netstat(filter)
``````````````


#### 定义

`NewConnectionFilter() *ConnectionFilter`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ConnectionFilter` | 连接过滤器对象，可设置 Protocol/Status/LocalPort 等字段后传给 hids.Netstat |


### NewConnectionMonitor

#### 详细描述
NewConnectionMonitor 创建连接监控器



参数:

  - opts: 可选配置项，如 hids.WithConnectionMonitorInterval / hids.WithOnNewConnection 等



返回值:

  - 连接监控器对象，调用 Start() 开始监控、Stop() 停止




Example:

``````````````yak
monitor = hids.NewConnectionMonitor(

	hids.WithConnectionMonitorInterval(1),
	hids.WithOnNewConnection(func(event) {
	    println("New connection:", event.Connection.LocalAddr, "->", event.Connection.RemoteAddr)
	}),

)
``````````````


#### 定义

`NewConnectionMonitor(opts ...ConnectionMonitorOption) *ConnectionMonitor`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...ConnectionMonitorOption` | 可选配置项，如 hids.WithConnectionMonitorInterval / hids.WithOnNewConnection 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ConnectionMonitor` | 连接监控器对象，调用 Start() 开始监控、Stop() 停止 |


### NewJournalSSHMonitor

#### 详细描述
NewJournalSSHMonitor 创建基于 systemd journal 的 SSH 登录监控器



相比 audit 监控，journal 监控有以下优势：

  - 不需要 root 权限（用户属于 systemd-journal 组即可）

  - 不依赖 audit 子系统安装和启用

  - 直接解析 sshd 的认证日志，信息直观



参数:

  - opts: 可选配置项，如 hids.journalSSHOnLoginSuccess / hids.journalSSHFilterUsers 等



返回值:

  - SSH journal 监控器对象，调用 Start() 开始监控、Stop() 停止

  - 错误信息




Example:

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


#### 定义

`NewJournalSSHMonitor(opts ...JournalSSHMonitorOption) (*JournalSSHMonitor, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...JournalSSHMonitorOption` | 可选配置项，如 hids.journalSSHOnLoginSuccess / hids.journalSSHFilterUsers 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*JournalSSHMonitor` | SSH journal 监控器对象，调用 Start() 开始监控、Stop() 停止 |
| r2 | `error` | 错误信息 |


### NewProcessFilter

#### 详细描述
NewProcessFilter 创建新的进程过滤器



返回值:

  - 进程过滤器对象，可设置 Name/Pid/Username 等字段后传给 hids.PS




Example:

``````````````yak
filter = hids.NewProcessFilter()
filter.Name = "nginx"
processes = hids.PS(filter)
``````````````


#### 定义

`NewProcessFilter() *ProcessFilter`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ProcessFilter` | 进程过滤器对象，可设置 Name/Pid/Username 等字段后传给 hids.PS |


### NewProcessMonitor

#### 详细描述
NewProcessMonitor 创建进程监控器



参数:

  - opts: 可选配置项，如 hids.WithProcessMonitorInterval / hids.WithOnProcessCreate 等



返回值:

  - 进程监控器对象，调用 Start() 开始监控、Stop() 停止




Example:

``````````````yak
monitor = hids.NewProcessMonitor(

	hids.WithProcessMonitorInterval(1),
	hids.WithOnProcessCreate(func(event) {
	    println("New process:", event.Process.Name)
	}),

)
``````````````


#### 定义

`NewProcessMonitor(opts ...ProcessMonitorOption) *ProcessMonitor`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...ProcessMonitorOption` | 可选配置项，如 hids.WithProcessMonitorInterval / hids.WithOnProcessCreate 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ProcessMonitor` | 进程监控器对象，调用 Start() 开始监控、Stop() 停止 |


### NewWhitelistRule

#### 详细描述
NewWhitelistRule 创建新的白名单规则



返回值:

  - 进程白名单规则对象，可设置 Name/ExePath/ExeHash 等字段




Example:

``````````````yak
rule = hids.NewWhitelistRule()
rule.Name = "nginx"
rule.ExePath = "/usr/sbin/nginx"
``````````````


#### 定义

`NewWhitelistRule() *ProcessWhitelistRule`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ProcessWhitelistRule` | 进程白名单规则对象，可设置 Name/ExePath/ExeHash 等字段 |


### PS

#### 详细描述
PS 获取进程列表，可选择使用过滤器



参数:

  - filters: 可选的进程过滤器（由 hids.NewProcessFilter 创建），不传则返回全部进程



返回值:

  - 进程信息列表

  - 错误信息




Example:

``````````````yak
// 获取所有进程
processes, err = hids.PS()

// 使用过滤器
filter = hids.NewProcessFilter()
filter.Name = "nginx"
processes, err = hids.PS(filter)
``````````````


#### 定义

`PS(filters ...*ProcessFilter) ([]*ProcessInfo, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| filters | `...*ProcessFilter` | 可选的进程过滤器（由 hids.NewProcessFilter 创建），不传则返回全部进程 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*ProcessInfo` | 进程信息列表 |
| r2 | `error` | 错误信息 |


### ProcessExists

#### 详细描述
ProcessExists 检查指定PID的进程是否存在



参数:

  - pid: 进程 PID



返回值:

  - 进程是否存在




Example:

``````````````yak
exists = hids.ProcessExists(1234)
``````````````


#### 定义

`ProcessExists(pid int32) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pid | `int32` | 进程 PID |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 进程是否存在 |


### SetMonitorInterval

#### 详细描述
SetMonitorInterval 设置全局健康管理器的监控间隔(单位：秒)，如果在全局健康管理器运行时调用，会重置全局健康管理器



参数:

  - i: 监控间隔，单位为秒




Example:

``````````````yak
hids.SetMonitorInterval(1)
``````````````


#### 定义

`SetMonitorInterval(i float64)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `float64` | 监控间隔，单位为秒 |


### ShowMonitorInterval

#### 详细描述
ShowMonitorInterval 在标准输出中输出全局健康管理器的监控间隔(单位：秒)


Example:

``````````````yak
hids.ShowMonitorInterval()
``````````````


#### 定义

`ShowMonitorInterval()`


### WatchAuditEvents

#### 详细描述
WatchAuditEvents 简化的audit监控函数（需要 root 权限，仅 Linux 可用）



参数:

  - ctx: 上下文，取消时停止监控

  - onLogin: 登录事件回调（可为 nil）

  - onCommand: 命令执行事件回调（可为 nil）



返回值:

  - 错误信息




Example:

``````````````yak
ctx, cancel = context.WithTimeout(context.Background(), 10)
defer cancel()
err = hids.WatchAuditEvents(ctx,

	fn(event) { println("Login:", event.Username) },
	fn(event) { println("Command:", event.Command) },

)
``````````````


#### 定义

`WatchAuditEvents(ctx context.Context, onLogin func(*LoginEvent), onCommand func(*CommandEvent)) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` | 上下文，取消时停止监控 |
| onLogin | `func(*LoginEvent)` | 登录事件回调（可为 nil） |
| onCommand | `func(*CommandEvent)` | 命令执行事件回调（可为 nil） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### WatchConnections

#### 详细描述
WatchConnections 简单的连接监控函数，监控指定时长后返回事件列表



参数:

  - durationSeconds: 监控时长，单位为秒



返回值:

  - 监控期间产生的连接事件列表

  - 错误信息




Example:

``````````````yak
events, err = hids.WatchConnections(5) // 监控5秒
for _, event := range events {

	println(event.Type, event.Connection.LocalAddr, "->", event.Connection.RemoteAddr)

}
``````````````


#### 定义

`WatchConnections(durationSeconds float64) ([]*ConnectionEvent, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| durationSeconds | `float64` | 监控时长，单位为秒 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*ConnectionEvent` | 监控期间产生的连接事件列表 |
| r2 | `error` | 错误信息 |


### WatchJournalSSHEvents

#### 详细描述
WatchJournalSSHEvents 简化的 SSH journal 监控函数

使用 context 控制生命周期，onSuccess 和 onFailed 可以为 nil



参数:

  - ctx: 上下文，取消时停止监控

  - onSuccess: 登录成功事件回调（可为 nil）

  - onFailed: 登录失败事件回调（可为 nil）



返回值:

  - 错误信息




Example:

``````````````yak
ctx, cancel = context.WithTimeout(context.Background(), 60)
defer cancel()
err = hids.WatchJournalSSHEvents(ctx,

	fn(event) { printf("Login success: %s from %s\n", event.Username, event.RemoteIP) },
	fn(event) { printf("Login failed: %s from %s\n", event.Username, event.RemoteIP) },

)
``````````````


#### 定义

`WatchJournalSSHEvents(ctx context.Context, onSuccess func(*JournalSSHEvent), onFailed func(*JournalSSHEvent)) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` | 上下文，取消时停止监控 |
| onSuccess | `func(*JournalSSHEvent)` | 登录成功事件回调（可为 nil） |
| onFailed | `func(*JournalSSHEvent)` | 登录失败事件回调（可为 nil） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### WatchProcess

#### 详细描述
WatchProcess 简单的进程监控函数，监控指定时长后返回事件列表



参数:

  - durationSeconds: 监控时长，单位为秒



返回值:

  - 监控期间产生的进程事件列表

  - 错误信息




Example:

``````````````yak
events, err = hids.WatchProcess(5) // 监控5秒
for _, event := range events {

	println(event.Type, event.Process.Name, event.Process.Pid)

}
``````````````


#### 定义

`WatchProcess(durationSeconds float64) ([]*ProcessEvent, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| durationSeconds | `float64` | 监控时长，单位为秒 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*ProcessEvent` | 监控期间产生的进程事件列表 |
| r2 | `error` | 错误信息 |


### WithConnectionFilter

#### 详细描述
WithConnectionFilter 设置连接监控的过滤器，仅监控匹配的连接



参数:

  - filter: 连接过滤器（由 hids.NewConnectionFilter 创建）



返回值:

  - 可传入 hids.NewConnectionMonitor 的配置选项




Example:

``````````````yak
f = hids.NewConnectionFilter()
f.Status = "ESTABLISHED"
monitor = hids.NewConnectionMonitor(hids.WithConnectionFilter(f))
``````````````


#### 定义

`WithConnectionFilter(filter *ConnectionFilter) ConnectionMonitorOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| filter | `*ConnectionFilter` | 连接过滤器（由 hids.NewConnectionFilter 创建） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConnectionMonitorOption` | 可传入 hids.NewConnectionMonitor 的配置选项 |


### WithConnectionHistory

#### 详细描述
WithConnectionHistory 启用连接事件历史记录，并设置最大保留条数



参数:

  - maxHistory: 最大历史记录条数（小于等于 0 时使用默认 1000）



返回值:

  - 可传入 hids.NewConnectionMonitor 的配置选项




Example:

``````````````yak
monitor = hids.NewConnectionMonitor(hids.WithConnectionHistory(500))
// 之后可用 monitor.GetHistory() 获取历史事件
``````````````


#### 定义

`WithConnectionHistory(maxHistory int) ConnectionMonitorOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| maxHistory | `int` | 最大历史记录条数（小于等于 0 时使用默认 1000） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConnectionMonitorOption` | 可传入 hids.NewConnectionMonitor 的配置选项 |


### WithConnectionMonitorInterval

#### 详细描述
WithConnectionMonitorInterval 设置连接监控的轮询间隔



参数:

  - seconds: 轮询间隔，单位为秒



返回值:

  - 可传入 hids.NewConnectionMonitor 的配置选项




Example:

``````````````yak
monitor = hids.NewConnectionMonitor(hids.WithConnectionMonitorInterval(1))
monitor.Start()
``````````````


#### 定义

`WithConnectionMonitorInterval(seconds float64) ConnectionMonitorOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| seconds | `float64` | 轮询间隔，单位为秒 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConnectionMonitorOption` | 可传入 hids.NewConnectionMonitor 的配置选项 |


### WithOnConnectionDisappear

#### 详细描述
WithOnConnectionDisappear 设置连接消失时的回调



参数:

  - callback: 回调函数，入参为连接事件



返回值:

  - 可传入 hids.NewConnectionMonitor 的配置选项




Example:

``````````````yak
monitor = hids.NewConnectionMonitor(hids.WithOnConnectionDisappear(func(event) {
    println("connection closed:", event.Connection.LocalAddr)
}))
``````````````


#### 定义

`WithOnConnectionDisappear(callback func(event *ConnectionEvent)) ConnectionMonitorOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `func(event *ConnectionEvent)` | 回调函数，入参为连接事件 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConnectionMonitorOption` | 可传入 hids.NewConnectionMonitor 的配置选项 |


### WithOnNewConnection

#### 详细描述
WithOnNewConnection 设置发现新连接时的回调



参数:

  - callback: 回调函数，入参为连接事件



返回值:

  - 可传入 hids.NewConnectionMonitor 的配置选项




Example:

``````````````yak
monitor = hids.NewConnectionMonitor(hids.WithOnNewConnection(func(event) {
    println("new connection:", event.Connection.LocalAddr, "->", event.Connection.RemoteAddr)
}))
``````````````


#### 定义

`WithOnNewConnection(callback func(event *ConnectionEvent)) ConnectionMonitorOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `func(event *ConnectionEvent)` | 回调函数，入参为连接事件 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConnectionMonitorOption` | 可传入 hids.NewConnectionMonitor 的配置选项 |


### WithOnProcessCreate

#### 详细描述
WithOnProcessCreate 设置进程创建回调



参数:

  - callback: 回调函数，入参为进程事件



返回值:

  - 可传入 hids.NewProcessMonitor 的配置选项




Example:

``````````````yak
monitor = hids.NewProcessMonitor(hids.WithOnProcessCreate(func(event) {
    println("New process:", event.Process.Name, "PID:", event.Process.Pid)
}))
``````````````


#### 定义

`WithOnProcessCreate(callback func(event *ProcessEvent)) ProcessMonitorOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `func(event *ProcessEvent)` | 回调函数，入参为进程事件 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ProcessMonitorOption` | 可传入 hids.NewProcessMonitor 的配置选项 |


### WithOnProcessExit

#### 详细描述
WithOnProcessExit 设置进程退出回调



参数:

  - callback: 回调函数，入参为进程事件



返回值:

  - 可传入 hids.NewProcessMonitor 的配置选项




Example:

``````````````yak
monitor = hids.NewProcessMonitor(hids.WithOnProcessExit(func(event) {
    println("Process exited:", event.Process.Name, "PID:", event.Process.Pid)
}))
``````````````


#### 定义

`WithOnProcessExit(callback func(event *ProcessEvent)) ProcessMonitorOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `func(event *ProcessEvent)` | 回调函数，入参为进程事件 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ProcessMonitorOption` | 可传入 hids.NewProcessMonitor 的配置选项 |


### WithProcessMonitorInterval

#### 详细描述
WithProcessMonitorInterval 设置进程监控的轮询间隔



参数:

  - seconds: 轮询间隔，单位为秒



返回值:

  - 可传入 hids.NewProcessMonitor 的配置选项




Example:

``````````````yak
monitor = hids.NewProcessMonitor(hids.WithProcessMonitorInterval(2))
``````````````


#### 定义

`WithProcessMonitorInterval(seconds float64) ProcessMonitorOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| seconds | `float64` | 轮询间隔，单位为秒 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ProcessMonitorOption` | 可传入 hids.NewProcessMonitor 的配置选项 |


### WithWhitelist

#### 详细描述
WithWhitelist 设置进程白名单规则



参数:

  - rules: 白名单规则列表（由 hids.NewWhitelistRule 创建）



返回值:

  - 可传入 hids.NewProcessMonitor 的配置选项




Example:

``````````````yak
rules = [hids.NewWhitelistRule()]
rules[0].Name = "nginx"
monitor = hids.NewProcessMonitor(hids.WithWhitelist(rules))
``````````````


#### 定义

`WithWhitelist(rules []*ProcessWhitelistRule) ProcessMonitorOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| rules | `[]*ProcessWhitelistRule` | 白名单规则列表（由 hids.NewWhitelistRule 创建） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ProcessMonitorOption` | 可传入 hids.NewProcessMonitor 的配置选项 |


### auditFilterCommands

#### 详细描述
auditFilterCommands 设置命令过滤器（支持正则）



参数:

  - commands: 命令匹配正则列表，可传多个，命中任一即处理



返回值:

  - 可传入 hids.NewAuditMonitor 的配置选项




Example:

``````````````yak
monitor = hids.NewAuditMonitor(hids.auditFilterCommands(".*ssh.*", "sudo"))
``````````````


#### 定义

`auditFilterCommands(commands ...string) AuditMonitorOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| commands | `...string` | 命令匹配正则列表，可传多个，命中任一即处理 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AuditMonitorOption` | 可传入 hids.NewAuditMonitor 的配置选项 |


### auditFilterLoginUsers

#### 详细描述
auditFilterLoginUsers 设置原始登录用户过滤器（按 LoginUser 过滤）

过滤原始登录的用户（例如 SSH 登录的用户，即使后来 su 到其他用户）



参数:

  - users: 允许的原始登录用户名列表，可传多个



返回值:

  - 可传入 hids.NewAuditMonitor 的配置选项




Example:

``````````````yak
// 只监控原始登录用户为 root 的会话中的操作
monitor = hids.NewAuditMonitor(hids.auditFilterLoginUsers("root"))
``````````````


#### 定义

`auditFilterLoginUsers(users ...string) AuditMonitorOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| users | `...string` | 允许的原始登录用户名列表，可传多个 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AuditMonitorOption` | 可传入 hids.NewAuditMonitor 的配置选项 |


### auditFilterUsers

#### 详细描述
auditFilterUsers 设置当前用户过滤器（按 Username 过滤）

过滤当前执行操作的用户（例如 su 后的用户）



参数:

  - users: 允许的当前用户名列表，可传多个



返回值:

  - 可传入 hids.NewAuditMonitor 的配置选项




Example:

``````````````yak
// 只监控 matrix 用户执行的命令
monitor = hids.NewAuditMonitor(hids.auditFilterUsers("root", "www"))
``````````````


#### 定义

`auditFilterUsers(users ...string) AuditMonitorOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| users | `...string` | 允许的当前用户名列表，可传多个 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AuditMonitorOption` | 可传入 hids.NewAuditMonitor 的配置选项 |


### auditMonitorCommand

#### 详细描述
auditMonitorCommand 设置是否监控命令执行事件



参数:

  - enable: 是否监控命令执行事件



返回值:

  - 可传入 hids.NewAuditMonitor 的配置选项




Example:

``````````````yak
monitor = hids.NewAuditMonitor(hids.auditMonitorCommand(true))
``````````````


#### 定义

`auditMonitorCommand(enable bool) AuditMonitorOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| enable | `bool` | 是否监控命令执行事件 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AuditMonitorOption` | 可传入 hids.NewAuditMonitor 的配置选项 |


### auditMonitorLogin

#### 详细描述
auditMonitorLogin 设置是否监控登录事件



参数:

  - enable: 是否监控登录事件



返回值:

  - 可传入 hids.NewAuditMonitor 的配置选项




Example:

``````````````yak
monitor = hids.NewAuditMonitor(hids.auditMonitorLogin(true))
``````````````


#### 定义

`auditMonitorLogin(enable bool) AuditMonitorOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| enable | `bool` | 是否监控登录事件 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AuditMonitorOption` | 可传入 hids.NewAuditMonitor 的配置选项 |


### auditOnCommandEvent

#### 详细描述
auditOnCommandEvent 设置命令执行事件回调



参数:

  - callback: 回调函数，入参为命令执行事件



返回值:

  - 可传入 hids.NewAuditMonitor 的配置选项




Example:

``````````````yak
monitor = hids.NewAuditMonitor(hids.auditOnCommandEvent(fn(event) {

	println("Command:", event.Command, "by", event.Username)

}))
``````````````


#### 定义

`auditOnCommandEvent(callback func(*CommandEvent)) AuditMonitorOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `func(*CommandEvent)` | 回调函数，入参为命令执行事件 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AuditMonitorOption` | 可传入 hids.NewAuditMonitor 的配置选项 |


### auditOnLoginEvent

#### 详细描述
auditOnLoginEvent 设置登录事件回调



参数:

  - callback: 回调函数，入参为登录事件



返回值:

  - 可传入 hids.NewAuditMonitor 的配置选项




Example:

``````````````yak
monitor = hids.NewAuditMonitor(hids.auditOnLoginEvent(fn(event) {

	println("Login:", event.Username, "from", event.RemoteIP)

}))
``````````````


#### 定义

`auditOnLoginEvent(callback func(*LoginEvent)) AuditMonitorOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `func(*LoginEvent)` | 回调函数，入参为登录事件 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `AuditMonitorOption` | 可传入 hids.NewAuditMonitor 的配置选项 |


### journalSSHFilterRemoteIPs

#### 详细描述
journalSSHFilterRemoteIPs 只监控来自指定 IP 的 SSH 登录事件



参数:

  - ips: 允许的远程 IP 列表，可传多个



返回值:

  - 可传入 hids.NewJournalSSHMonitor 的配置选项




Example:

``````````````yak
monitor, err = hids.NewJournalSSHMonitor(

	hids.journalSSHFilterRemoteIPs("192.168.1.1", "10.0.0.2"),

)
``````````````


#### 定义

`journalSSHFilterRemoteIPs(ips ...string) JournalSSHMonitorOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ips | `...string` | 允许的远程 IP 列表，可传多个 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `JournalSSHMonitorOption` | 可传入 hids.NewJournalSSHMonitor 的配置选项 |


### journalSSHFilterUsers

#### 详细描述
journalSSHFilterUsers 只监控指定用户名的 SSH 登录事件



参数:

  - users: 允许的用户名列表，可传多个



返回值:

  - 可传入 hids.NewJournalSSHMonitor 的配置选项




Example:

``````````````yak
monitor, err = hids.NewJournalSSHMonitor(

	hids.journalSSHFilterUsers("root", "admin"),

)
``````````````


#### 定义

`journalSSHFilterUsers(users ...string) JournalSSHMonitorOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| users | `...string` | 允许的用户名列表，可传多个 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `JournalSSHMonitorOption` | 可传入 hids.NewJournalSSHMonitor 的配置选项 |


### journalSSHOnAnyEvent

#### 详细描述
journalSSHOnAnyEvent 设置任意 SSH 事件回调（成功/失败/断开均触发）



参数:

  - callback: 回调函数，入参为 SSH 事件



返回值:

  - 可传入 hids.NewJournalSSHMonitor 的配置选项




Example:

``````````````yak
monitor, err = hids.NewJournalSSHMonitor(

	hids.journalSSHOnAnyEvent(fn(event) {
	    println("SSH event:", event.EventType, event.Username, event.RemoteIP)
	}),

)
``````````````


#### 定义

`journalSSHOnAnyEvent(callback func(*JournalSSHEvent)) JournalSSHMonitorOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `func(*JournalSSHEvent)` | 回调函数，入参为 SSH 事件 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `JournalSSHMonitorOption` | 可传入 hids.NewJournalSSHMonitor 的配置选项 |


### journalSSHOnDisconnected

#### 详细描述
journalSSHOnDisconnected 设置会话断开事件回调



参数:

  - callback: 回调函数，入参为 SSH 事件



返回值:

  - 可传入 hids.NewJournalSSHMonitor 的配置选项




Example:

``````````````yak
monitor, err = hids.NewJournalSSHMonitor(

	hids.journalSSHOnDisconnected(fn(event) {
	    println("SSH disconnected:", event.Username, "from", event.RemoteIP)
	}),

)
``````````````


#### 定义

`journalSSHOnDisconnected(callback func(*JournalSSHEvent)) JournalSSHMonitorOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `func(*JournalSSHEvent)` | 回调函数，入参为 SSH 事件 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `JournalSSHMonitorOption` | 可传入 hids.NewJournalSSHMonitor 的配置选项 |


### journalSSHOnLoginFailed

#### 详细描述
journalSSHOnLoginFailed 设置登录失败事件回调



参数:

  - callback: 回调函数，入参为 SSH 事件



返回值:

  - 可传入 hids.NewJournalSSHMonitor 的配置选项




Example:

``````````````yak
monitor, err = hids.NewJournalSSHMonitor(

	hids.journalSSHOnLoginFailed(fn(event) {
	    println("SSH login failed:", event.Username, "from", event.RemoteIP)
	}),

)
``````````````


#### 定义

`journalSSHOnLoginFailed(callback func(*JournalSSHEvent)) JournalSSHMonitorOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `func(*JournalSSHEvent)` | 回调函数，入参为 SSH 事件 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `JournalSSHMonitorOption` | 可传入 hids.NewJournalSSHMonitor 的配置选项 |


### journalSSHOnLoginSuccess

#### 详细描述
journalSSHOnLoginSuccess 设置登录成功事件回调



参数:

  - callback: 回调函数，入参为 SSH 事件



返回值:

  - 可传入 hids.NewJournalSSHMonitor 的配置选项




Example:

``````````````yak
monitor, err = hids.NewJournalSSHMonitor(

	hids.journalSSHOnLoginSuccess(fn(event) {
	    println("SSH login success:", event.Username, "from", event.RemoteIP)
	}),

)
``````````````


#### 定义

`journalSSHOnLoginSuccess(callback func(*JournalSSHEvent)) JournalSSHMonitorOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `func(*JournalSSHEvent)` | 回调函数，入参为 SSH 事件 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `JournalSSHMonitorOption` | 可传入 hids.NewJournalSSHMonitor 的配置选项 |


### journalSSHSince

#### 详细描述
journalSSHSince 设置从何时开始读取日志（journalctl --since 参数格式）

默认为 &#34;now&#34;，即只读取启动后的新日志



参数:

  - since: 起始时间，格式同 journalctl --since（如 &#34;1 hour ago&#34;、&#34;2024-01-01 00:00:00&#34;）



返回值:

  - 可传入 hids.NewJournalSSHMonitor 的配置选项




Example:

``````````````yak
// 读取最近1小时的历史日志并持续监控
monitor, err = hids.NewJournalSSHMonitor(

	hids.journalSSHSince("1 hour ago"),

)
``````````````


#### 定义

`journalSSHSince(since string) JournalSSHMonitorOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| since | `string` | 起始时间，格式同 journalctl --since（如 &#34;1 hour ago&#34;、&#34;2024-01-01 00:00:00&#34;） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `JournalSSHMonitorOption` | 可传入 hids.NewJournalSSHMonitor 的配置选项 |


### journalSSHUnits

#### 详细描述
journalSSHUnits 设置要监听的 systemd unit 名称（默认自动检测 sshd/ssh）



参数:

  - units: systemd unit 名称列表，可传多个



返回值:

  - 可传入 hids.NewJournalSSHMonitor 的配置选项




Example:

``````````````yak
monitor, err = hids.NewJournalSSHMonitor(

	hids.journalSSHUnits("sshd.service"),

)
``````````````


#### 定义

`journalSSHUnits(units ...string) JournalSSHMonitorOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| units | `...string` | systemd unit 名称列表，可传多个 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `JournalSSHMonitorOption` | 可传入 hids.NewJournalSSHMonitor 的配置选项 |


