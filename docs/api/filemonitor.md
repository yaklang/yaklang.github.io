# filemonitor

|实例名|实例描述|
|:------|:--------|
OP_CHMOD|(string) &#34;chmod&#34;|
OP_CHOWN|(string) &#34;chown&#34;|
OP_CREATE|(string) &#34;create&#34;|
OP_DELETE|(string) &#34;delete&#34;|
OP_READ|(string) &#34;read&#34;|
OP_WRITE|(string) &#34;write&#34;|

|函数名|函数描述/介绍|
|:------|:--------|
| [filemonitor.NewMonitor](#newmonitor) |NewMonitor 创建新的文件监控器（导出名为 filemonitor.NewMonitor） 创建后调用 SetEventCallback/SetLogCallback 注册回调，再 Start() 启动、Stop() 停止 参数: - config: 配置字典，支持以下键： watch_pa...|


## 函数定义
### NewMonitor

#### 详细描述
NewMonitor 创建新的文件监控器（导出名为 filemonitor.NewMonitor）

创建后调用 SetEventCallback/SetLogCallback 注册回调，再 Start() 启动、Stop() 停止



参数:

  - config: 配置字典，支持以下键：

    watch_paths([]string, 必需, 要监控的路径列表)、recursive(bool, 是否递归子目录, 默认 true)、

    include_patterns/exclude_patterns([]string, 文件名 glob 或正则)、

    monitor_ops([]string, 监控的操作: OP_CREATE/OP_WRITE/OP_DELETE/OP_CHMOD/OP_CHOWN/OP_READ)、

    max_file_size(int, 最大文件字节, 默认 10MB)、max_content_size(int, 记录内容上限字节, 默认 64KB)、

    poll_interval(float64, 轮询间隔秒, 默认 5)



返回值:

  - 文件监控器实例，可调用 GetConfig / SetEventCallback / Start / Stop

  - 错误信息（配置非法时返回）




Example:

``````````````yak
m = filemonitor.NewMonitor({"watch_paths": [os.TempDir()], "recursive": true})~
cfg = m.GetConfig()
println(len(cfg.WatchPaths))   // OUT: 1
assert len(cfg.WatchPaths) == 1, "monitor should watch exactly one path"
assert cfg.Recursive == true, "recursive option should be enabled"
``````````````


#### 定义

`NewMonitor(config map[string]any) (*FileMonitor, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| config | `map[string]any` | 配置字典，支持以下键： |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*FileMonitor` | 文件监控器实例，可调用 GetConfig / SetEventCallback / Start / Stop |
| r2 | `error` | 错误信息（配置非法时返回） |


