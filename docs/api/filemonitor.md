# filemonitor {#library-filemonitor}

`filemonitor` 库提供文件系统监控能力，监听指定路径下文件的创建、修改、删除等事件，常用于主机入侵检测（HIDS）、配置变更审计与实时取证。

典型使用场景：

- 创建监控器：`filemonitor.NewMonitor(config)` 按配置（监控路径、事件类型、回调等）创建监控器并持续监听文件变化。

与相邻库的关系：`filemonitor` 偏主机侧实时监控，与 `hids`（主机入侵检测）、`filescanner`（文件扫描）、`file`/`filesys`（文件操作）配合，用于"持续盯住文件变化"的防护场景。

> 共 1 个函数、6 个实例

## 实例

|实例名|类型|说明|
|:--|:--|:--|
| OP_CHMOD | `string` | &#34;chmod&#34; |
| OP_CHOWN | `string` | &#34;chown&#34; |
| OP_CREATE | `string` | &#34;create&#34; |
| OP_DELETE | `string` | &#34;delete&#34; |
| OP_READ | `string` | &#34;read&#34; |
| OP_WRITE | `string` | &#34;write&#34; |

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [filemonitor.NewMonitor](#newmonitor) | `config map[string]any` | `*FileMonitor, error` | 创建新的文件监控器（导出名为 filemonitor.NewMonitor） |

## 函数详情

### NewMonitor {#newmonitor}

```go
NewMonitor(config map[string]any) (*FileMonitor, error)
```

创建新的文件监控器（导出名为 filemonitor.NewMonitor）

创建后调用 SetEventCallback/SetLogCallback 注册回调，再 Start() 启动、Stop() 停止

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| config | `map[string]any` | 配置字典，支持以下键： |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*FileMonitor` | 文件监控器实例，可调用 GetConfig / SetEventCallback / Start / Stop |
| r2 | `error` | 错误信息（配置非法时返回） |

**示例**

``````````````yak
m = filemonitor.NewMonitor({"watch_paths": [os.TempDir()], "recursive": true})~
cfg = m.GetConfig()
println(len(cfg.WatchPaths))   // OUT: 1
assert len(cfg.WatchPaths) == 1, "monitor should watch exactly one path"
assert cfg.Recursive == true, "recursive option should be enabled"
``````````````

---

