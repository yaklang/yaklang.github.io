# hook {#library-hook}

`hook` 库是 Yakit 插件调用框架，把 yak 插件按其声明的 Hook 点（如 `mirrorNewWebsitePath`、`handle` 等）装载并驱动，常用于在脚本中复用现有插件、构建 MITM/扫描的插件调用链。

典型使用场景：

- 管理器：`hook.NewManager` 创建调用管理器，`hook.LoadYakitPlugin` / `hook.LoadYakitPluginByName` / `hook.LoadYakitPluginByID` 按类型/名称/ID 装载插件，`hook.RemoveYakitPluginByName` 卸载。
- 混合调用器：`hook.NewMixPluginCaller` / `hook.NewMixPluginCallerWithFilter` 创建可同时驱动多类插件（端口/MITM/Web）的调用器。
- 直接调用：`hook.CallYakitPluginFunc` 调用插件中导出的某个函数。

与相邻库的关系：`hook` 通常与 `db.CreateTemporaryYakScript`（创建临时插件）、`mitm`（流量劫持）、`fuzz`/`poc`（请求处理）协同，把"一段检测逻辑"以插件形式插入到流量/扫描链路中。

> 共 10 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [hook.CallYakitPluginFunc](#callyakitpluginfunc) | `scriptName string, hookName string` | `any, error` | 跨插件调用指定插件中导出的函数（导出名为 hook.CallYakitPluginFunc） |
| [hook.NewManager](#newmanager) | - | `*YakToCallerManager` | NewYakToCallerManager 创建一个插件回调管理器（导出名为 hook.NewManager） |
| [hook.NewMixPluginCaller](#newmixplugincaller) | - | `*MixPluginCaller, error` | 创建一个混合插件调用器（导出名为 hook.NewMixPluginCaller） |
| [hook.NewMixPluginCallerWithFilter](#newmixplugincallerwithfilter) | `webFilter filter.Filterable` | `*MixPluginCaller, error` | 创建带自定义网站过滤器的混合插件调用器（导出名为 hook.NewMixPluginCallerWithFilter） |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [hook.LoadYakitPlugin](#loadyakitplugin) | `mng *YakToCallerManager, scriptType string, hookNames ...string` | `error` | loadScript 按插件类型批量加载 Yakit 插件到回调管理器（导出名为 hook.LoadYakitPlugin） |
| [hook.LoadYakitPluginByID](#loadyakitpluginbyid) | `mng *YakToCallerManager, id any, hookNames ...string` | `error` | loadScriptByID 按插件数据库 ID 或 UUID 加载插件（导出名为 hook.LoadYakitPluginByID） |
| [hook.LoadYakitPluginByIDContext](#loadyakitpluginbyidcontext) | `mng *YakToCallerManager, ctx context.Context, id any, hookNames ...string` | `error` | loadScriptByIDCtx 按插件 ID/UUID 加载插件（带上下文，导出名为 hook.LoadYakitPluginByIDContext） |
| [hook.LoadYakitPluginByName](#loadyakitpluginbyname) | `mng *YakToCallerManager, scriptName string, hookNames ...string` | `error` | loadScriptByName 按插件名加载 Yakit 插件到回调管理器（导出名为 hook.LoadYakitPluginByName） |
| [hook.LoadYakitPluginContext](#loadyakitplugincontext) | `mng *YakToCallerManager, ctx context.Context, scriptType string, hookNames ...string` | `error` | loadScriptCtx 按插件类型批量加载插件（带上下文，导出名为 hook.LoadYakitPluginContext） |
| [hook.RemoveYakitPluginByName](#removeyakitpluginbyname) | `mng *YakToCallerManager, scriptNames ...string` | - | removeScriptByNameCtx 从回调管理器中移除指定名称的插件（导出名为 hook.RemoveYakitPluginByName） |

## 函数详情

### CallYakitPluginFunc {#callyakitpluginfunc}

```go
CallYakitPluginFunc(scriptName string, hookName string) (any, error)
```

跨插件调用指定插件中导出的函数（导出名为 hook.CallYakitPluginFunc）

仅可在 `yak your-file.yak` 方式运行的脚本中使用，不可在 MITM/WebFuzzer 热加载中使用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| scriptName | `string` | 目标插件名称 |
| hookName | `string` | 插件中要调用的函数/变量名 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `any` | 被调用函数对应的值 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 示意性示例，需要本地插件数据库与预置引擎
pluginFn = hook.CallYakitPluginFunc("my-plugin", "analyze")~
pluginFn("target")
``````````````

---

### NewManager {#newmanager}

```go
NewManager() *YakToCallerManager
```

NewYakToCallerManager 创建一个插件回调管理器（导出名为 hook.NewManager）

管理器用于加载插件、维护 hook 回调表并按需触发插件回调

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*YakToCallerManager` | 插件回调管理器对象 |

**示例**

``````````````yak
// 示意性示例，需要本地插件数据库
mng = hook.NewManager()
err = hook.LoadYakitPlugin(mng, "mitm")
``````````````

---

### NewMixPluginCaller {#newmixplugincaller}

```go
NewMixPluginCaller() (*MixPluginCaller, error)
```

创建一个混合插件调用器（导出名为 hook.NewMixPluginCaller）

调用器内置网站/路径/参数等过滤器，便于按 MITM 流量统一调度多类插件

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*MixPluginCaller` | 混合插件调用器对象 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 示意性示例，需要本地插件数据库
caller, err = hook.NewMixPluginCaller()
if err != nil { die(err) }
caller.LoadPlugin("my-plugin")
``````````````

---

### NewMixPluginCallerWithFilter {#newmixplugincallerwithfilter}

```go
NewMixPluginCallerWithFilter(webFilter filter.Filterable) (*MixPluginCaller, error)
```

创建带自定义网站过滤器的混合插件调用器（导出名为 hook.NewMixPluginCallerWithFilter）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| webFilter | `filter.Filterable` | 自定义的网站去重/过滤器 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*MixPluginCaller` | 混合插件调用器对象 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 示意性示例，需要本地插件数据库
caller, err = hook.NewMixPluginCallerWithFilter(filter.NewFilter())
if err != nil { die(err) }
caller.LoadPlugin("my-plugin")
``````````````

---

## 可变参数函数详情

### LoadYakitPlugin {#loadyakitplugin}

```go
LoadYakitPlugin(mng *YakToCallerManager, scriptType string, hookNames ...string) error
```

loadScript 按插件类型批量加载 Yakit 插件到回调管理器（导出名为 hook.LoadYakitPlugin）

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| mng | `*YakToCallerManager` | 插件回调管理器 |
| scriptType | `string` | 插件类型，如 &#34;mitm&#34;、&#34;port-scan&#34; |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| hookNames | `...string` | 可选，仅加载指定的 hook 名称 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
// 示意性示例，需要本地插件数据库
mng = hook.NewManager()
err = hook.LoadYakitPlugin(mng, "mitm")
if err != nil { die(err) }
``````````````

---

### LoadYakitPluginByID {#loadyakitpluginbyid}

```go
LoadYakitPluginByID(mng *YakToCallerManager, id any, hookNames ...string) error
```

loadScriptByID 按插件数据库 ID 或 UUID 加载插件（导出名为 hook.LoadYakitPluginByID）

支持数值类型的数据库 ID，或字符串类型的 UUID

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| mng | `*YakToCallerManager` | 插件回调管理器 |
| id | `any` | 插件数据库 ID 或 UUID |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| hookNames | `...string` | 可选，仅加载指定的 hook 名称 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
// 示意性示例，需要本地插件数据库
mng = hook.NewManager()
err = hook.LoadYakitPluginByID(mng, 1)
if err != nil { die(err) }
``````````````

---

### LoadYakitPluginByIDContext {#loadyakitpluginbyidcontext}

```go
LoadYakitPluginByIDContext(mng *YakToCallerManager, ctx context.Context, id any, hookNames ...string) error
```

loadScriptByIDCtx 按插件 ID/UUID 加载插件（带上下文，导出名为 hook.LoadYakitPluginByIDContext）

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| mng | `*YakToCallerManager` | 插件回调管理器 |
| ctx | `context.Context` | 上下文对象，用于控制取消 |
| id | `any` | 插件数据库 ID 或 UUID |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| hookNames | `...string` | 可选，仅加载指定的 hook 名称 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
// 示意性示例，需要本地插件数据库
mng = hook.NewManager()
ctx = context.Background()
err = hook.LoadYakitPluginByIDContext(mng, ctx, 1)
if err != nil { die(err) }
``````````````

---

### LoadYakitPluginByName {#loadyakitpluginbyname}

```go
LoadYakitPluginByName(mng *YakToCallerManager, scriptName string, hookNames ...string) error
```

loadScriptByName 按插件名加载 Yakit 插件到回调管理器（导出名为 hook.LoadYakitPluginByName）

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| mng | `*YakToCallerManager` | 插件回调管理器 |
| scriptName | `string` | 插件名称 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| hookNames | `...string` | 可选，仅加载指定的 hook 名称 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
// 示意性示例，需要本地插件数据库
mng = hook.NewManager()
err = hook.LoadYakitPluginByName(mng, "my-plugin")
if err != nil { die(err) }
``````````````

---

### LoadYakitPluginContext {#loadyakitplugincontext}

```go
LoadYakitPluginContext(mng *YakToCallerManager, ctx context.Context, scriptType string, hookNames ...string) error
```

loadScriptCtx 按插件类型批量加载插件（带上下文，导出名为 hook.LoadYakitPluginContext）

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| mng | `*YakToCallerManager` | 插件回调管理器 |
| ctx | `context.Context` | 上下文对象，用于控制取消 |
| scriptType | `string` | 插件类型 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| hookNames | `...string` | 可选，仅加载指定的 hook 名称 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
// 示意性示例，需要本地插件数据库
mng = hook.NewManager()
ctx = context.Background()
err = hook.LoadYakitPluginContext(mng, ctx, "mitm")
if err != nil { die(err) }
``````````````

---

### RemoveYakitPluginByName {#removeyakitpluginbyname}

```go
RemoveYakitPluginByName(mng *YakToCallerManager, scriptNames ...string)
```

removeScriptByNameCtx 从回调管理器中移除指定名称的插件（导出名为 hook.RemoveYakitPluginByName）

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| mng | `*YakToCallerManager` | 插件回调管理器 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| scriptNames | `...string` | 要移除的插件名称列表 |

**示例**

``````````````yak
// 示意性示例，需要本地插件数据库
mng = hook.NewManager()
hook.RemoveYakitPluginByName(mng, "my-plugin")
``````````````

---

