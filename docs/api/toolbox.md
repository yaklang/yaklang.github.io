# toolbox {#library-toolbox}

`toolbox` 库用于管理外部第三方安全工具/二进制的安装、卸载与查询，方便在脚本运行环境中按需准备所依赖的外部工具。

典型使用场景：

- 工具管理：`toolbox.Install(name, opts...)` 安装工具（配 `toolbox.proxy` / `toolbox.force` / `toolbox.progress` 控制下载），`toolbox.Uninstall` 卸载，`toolbox.List` 列出已安装工具及状态。

与相邻库的关系：`toolbox` 是环境准备工具，常配合 `exec`（调用安装好的外部工具）使用。

> 共 7 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [toolbox.List](#list) | - | `[]*BinaryStatus, error` | GetAllStatus 列出所有已注册第三方工具的安装状态（导出名为 toolbox.List） |
| [toolbox.Uninstall](#uninstall) | `name string` | `error` | 卸载指定的第三方二进制工具（导出名为 toolbox.Uninstall） |
| [toolbox.context](#context) | `ctx context.Context` | `InstallOptionFunc` | WithContext 设置安装上下文，用于控制取消与超时（导出名为 toolbox.context） |
| [toolbox.force](#force) | `force bool` | `InstallOptionFunc` | WithForce 设置是否强制重新安装（导出名为 toolbox.force） |
| [toolbox.progress](#progress) | `progress ProgressCallback` | `InstallOptionFunc` | WithProgress 设置安装进度回调（导出名为 toolbox.progress） |
| [toolbox.proxy](#proxy) | `proxy string` | `InstallOptionFunc` | WithProxy 设置下载代理（导出名为 toolbox.proxy） |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [toolbox.Install](#install) | `name string, options ...InstallOptionFunc` | `error` | _install 安装指定的第三方二进制工具（导出名为 toolbox.Install） |

## 函数详情

### List {#list}

```go
List() ([]*BinaryStatus, error)
```

GetAllStatus 列出所有已注册第三方工具的安装状态（导出名为 toolbox.List）

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*BinaryStatus` | 各工具的状态列表（包含名称、是否已安装、版本等） |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
statusList, err = toolbox.List()
assert err == nil, "toolbox.List should not fail"

	for s in statusList {
	    println(s.Name)
	}
``````````````

---

### Uninstall {#uninstall}

```go
Uninstall(name string) error
```

卸载指定的第三方二进制工具（导出名为 toolbox.Uninstall）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 工具名称，如 &#34;ffmpeg&#34; |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
// 示意性示例
err = toolbox.Uninstall("ffmpeg")
if err != nil { die(err) }
``````````````

---

### context {#context}

```go
context(ctx context.Context) InstallOptionFunc
```

WithContext 设置安装上下文，用于控制取消与超时（导出名为 toolbox.context）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| ctx | `context.Context` | 上下文对象 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `InstallOptionFunc` | 安装可选项 |

**示例**

``````````````yak
// 示意性示例，需要网络下载第三方工具
ctx, cancel = context.WithTimeout(context.Background(), 60 * time.Second)
defer cancel()
err = toolbox.Install("ffmpeg", toolbox.context(ctx))
``````````````

---

### force {#force}

```go
force(force bool) InstallOptionFunc
```

WithForce 设置是否强制重新安装（导出名为 toolbox.force）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| force | `bool` | 为 true 时即使已安装也会重新安装 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `InstallOptionFunc` | 安装可选项 |

**示例**

``````````````yak
// 示意性示例，需要网络下载第三方工具
err = toolbox.Install("ffmpeg", toolbox.force(true))
``````````````

---

### progress {#progress}

```go
progress(progress ProgressCallback) InstallOptionFunc
```

WithProgress 设置安装进度回调（导出名为 toolbox.progress）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| progress | `ProgressCallback` | 进度回调函数 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `InstallOptionFunc` | 安装可选项 |

**示例**

``````````````yak
// 示意性示例，需要网络下载第三方工具
err = toolbox.Install("ffmpeg", toolbox.progress(func(p) { println(p) }))
``````````````

---

### proxy {#proxy}

```go
proxy(proxy string) InstallOptionFunc
```

WithProxy 设置下载代理（导出名为 toolbox.proxy）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| proxy | `string` | 代理地址，如 http&#58;//127.0.0.1:7890 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `InstallOptionFunc` | 安装可选项 |

**示例**

``````````````yak
// 示意性示例，需要网络下载第三方工具
err = toolbox.Install("ffmpeg", toolbox.proxy("http://127.0.0.1:7890"))
``````````````

---

## 可变参数函数详情

### Install {#install}

```go
Install(name string, options ...InstallOptionFunc) error
```

_install 安装指定的第三方二进制工具（导出名为 toolbox.Install）

从远端下载并安装如 ffmpeg、whisper 等第三方工具到本地

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 工具名称，如 &#34;ffmpeg&#34; |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| options | `...InstallOptionFunc` | 可选项，如 toolbox.proxy / toolbox.force / toolbox.context / toolbox.progress |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
// 示意性示例，需要网络下载第三方工具
err = toolbox.Install("ffmpeg")
if err != nil { die(err) }
``````````````

---

