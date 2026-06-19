# hook

|函数名|函数描述/介绍|
|:------|:--------|
| [hook.CallYakitPluginFunc](#callyakitpluginfunc) |CallYakitPluginFunc 跨插件调用指定插件中导出的函数（导出名为 hook.CallYakitPluginFunc） 仅可在 `yak your-file.yak` 方式运行的脚本中使用，不可在 MITM/WebFuzzer 热加载中使用 参数: - scriptName: 目标插件...|
| [hook.LoadYakitPlugin](#loadyakitplugin) |loadScript 按插件类型批量加载 Yakit 插件到回调管理器（导出名为 hook.LoadYakitPlugin） 参数: - mng: 插件回调管理器 - scriptType: 插件类型，如 &#34;mitm&#34;、&#34;port-scan&#34; - hookNames: 可选，仅加载指定的 hook ...|
| [hook.LoadYakitPluginByID](#loadyakitpluginbyid) |loadScriptByID 按插件数据库 ID 或 UUID 加载插件（导出名为 hook.LoadYakitPluginByID） 支持数值类型的数据库 ID，或字符串类型的 UUID 参数: - mng: 插件回调管理器 - id: 插件数据库 ID 或 UUID - hookNames: 可...|
| [hook.LoadYakitPluginByIDContext](#loadyakitpluginbyidcontext) |loadScriptByIDCtx 按插件 ID/UUID 加载插件（带上下文，导出名为 hook.LoadYakitPluginByIDContext） 参数: - mng: 插件回调管理器 - ctx: 上下文对象，用于控制取消 - id: 插件数据库 ID 或 UUID - hookNames...|
| [hook.LoadYakitPluginByName](#loadyakitpluginbyname) |loadScriptByName 按插件名加载 Yakit 插件到回调管理器（导出名为 hook.LoadYakitPluginByName） 参数: - mng: 插件回调管理器 - scriptName: 插件名称 - hookNames: 可选，仅加载指定的 hook 名称 返回值: - 错误...|
| [hook.LoadYakitPluginContext](#loadyakitplugincontext) |loadScriptCtx 按插件类型批量加载插件（带上下文，导出名为 hook.LoadYakitPluginContext） 参数: - mng: 插件回调管理器 - ctx: 上下文对象，用于控制取消 - scriptType: 插件类型 - hookNames: 可选，仅加载指定的 hook...|
| [hook.NewManager](#newmanager) |NewYakToCallerManager 创建一个插件回调管理器（导出名为 hook.NewManager） 管理器用于加载插件、维护 hook 回调表并按需触发插件回调 返回值: - 插件回调管理器对象|
| [hook.NewMixPluginCaller](#newmixplugincaller) |NewMixPluginCaller 创建一个混合插件调用器（导出名为 hook.NewMixPluginCaller） 调用器内置网站/路径/参数等过滤器，便于按 MITM 流量统一调度多类插件 返回值: - 混合插件调用器对象 - 错误信息|
| [hook.NewMixPluginCallerWithFilter](#newmixplugincallerwithfilter) |NewMixPluginCallerWithFilter 创建带自定义网站过滤器的混合插件调用器（导出名为 hook.NewMixPluginCallerWithFilter） 参数: - webFilter: 自定义的网站去重/过滤器 返回值: - 混合插件调用器对象 - 错误信息|
| [hook.RemoveYakitPluginByName](#removeyakitpluginbyname) |removeScriptByNameCtx 从回调管理器中移除指定名称的插件（导出名为 hook.RemoveYakitPluginByName） 参数: - mng: 插件回调管理器 - scriptNames: 要移除的插件名称列表|


## 函数定义
### CallYakitPluginFunc

#### 详细描述
CallYakitPluginFunc 跨插件调用指定插件中导出的函数（导出名为 hook.CallYakitPluginFunc）

仅可在 `yak your-file.yak` 方式运行的脚本中使用，不可在 MITM/WebFuzzer 热加载中使用

参数:

  - scriptName: 目标插件名称

  - hookName: 插件中要调用的函数/变量名



返回值:

  - 被调用函数对应的值

  - 错误信息




Example:

``````````````yak
// 示意性示例，需要本地插件数据库与预置引擎
fn = hook.CallYakitPluginFunc("my-plugin", "analyze")~
fn("target")
``````````````


#### 定义

`CallYakitPluginFunc(scriptName string, hookName string) (any, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| scriptName | `string` | 目标插件名称 |
| hookName | `string` | 插件中要调用的函数/变量名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` | 被调用函数对应的值 |
| r2 | `error` | 错误信息 |


### LoadYakitPlugin

#### 详细描述
loadScript 按插件类型批量加载 Yakit 插件到回调管理器（导出名为 hook.LoadYakitPlugin）

参数:

  - mng: 插件回调管理器

  - scriptType: 插件类型，如 &#34;mitm&#34;、&#34;port-scan&#34;

  - hookNames: 可选，仅加载指定的 hook 名称



返回值:

  - 错误信息




Example:

``````````````yak
// 示意性示例，需要本地插件数据库
mng = hook.NewManager()
err = hook.LoadYakitPlugin(mng, "mitm")
if err != nil { die(err) }
``````````````


#### 定义

`LoadYakitPlugin(mng *YakToCallerManager, scriptType string, hookNames ...string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| mng | `*YakToCallerManager` | 插件回调管理器 |
| scriptType | `string` | 插件类型，如 &#34;mitm&#34;、&#34;port-scan&#34; |
| hookNames | `...string` | 可选，仅加载指定的 hook 名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### LoadYakitPluginByID

#### 详细描述
loadScriptByID 按插件数据库 ID 或 UUID 加载插件（导出名为 hook.LoadYakitPluginByID）

支持数值类型的数据库 ID，或字符串类型的 UUID

参数:

  - mng: 插件回调管理器

  - id: 插件数据库 ID 或 UUID

  - hookNames: 可选，仅加载指定的 hook 名称



返回值:

  - 错误信息




Example:

``````````````yak
// 示意性示例，需要本地插件数据库
mng = hook.NewManager()
err = hook.LoadYakitPluginByID(mng, 1)
if err != nil { die(err) }
``````````````


#### 定义

`LoadYakitPluginByID(mng *YakToCallerManager, id any, hookNames ...string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| mng | `*YakToCallerManager` | 插件回调管理器 |
| id | `any` | 插件数据库 ID 或 UUID |
| hookNames | `...string` | 可选，仅加载指定的 hook 名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### LoadYakitPluginByIDContext

#### 详细描述
loadScriptByIDCtx 按插件 ID/UUID 加载插件（带上下文，导出名为 hook.LoadYakitPluginByIDContext）

参数:

  - mng: 插件回调管理器

  - ctx: 上下文对象，用于控制取消

  - id: 插件数据库 ID 或 UUID

  - hookNames: 可选，仅加载指定的 hook 名称



返回值:

  - 错误信息




Example:

``````````````yak
// 示意性示例，需要本地插件数据库
mng = hook.NewManager()
ctx = context.Background()
err = hook.LoadYakitPluginByIDContext(mng, ctx, 1)
if err != nil { die(err) }
``````````````


#### 定义

`LoadYakitPluginByIDContext(mng *YakToCallerManager, ctx context.Context, id any, hookNames ...string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| mng | `*YakToCallerManager` | 插件回调管理器 |
| ctx | `context.Context` | 上下文对象，用于控制取消 |
| id | `any` | 插件数据库 ID 或 UUID |
| hookNames | `...string` | 可选，仅加载指定的 hook 名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### LoadYakitPluginByName

#### 详细描述
loadScriptByName 按插件名加载 Yakit 插件到回调管理器（导出名为 hook.LoadYakitPluginByName）

参数:

  - mng: 插件回调管理器

  - scriptName: 插件名称

  - hookNames: 可选，仅加载指定的 hook 名称



返回值:

  - 错误信息




Example:

``````````````yak
// 示意性示例，需要本地插件数据库
mng = hook.NewManager()
err = hook.LoadYakitPluginByName(mng, "my-plugin")
if err != nil { die(err) }
``````````````


#### 定义

`LoadYakitPluginByName(mng *YakToCallerManager, scriptName string, hookNames ...string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| mng | `*YakToCallerManager` | 插件回调管理器 |
| scriptName | `string` | 插件名称 |
| hookNames | `...string` | 可选，仅加载指定的 hook 名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### LoadYakitPluginContext

#### 详细描述
loadScriptCtx 按插件类型批量加载插件（带上下文，导出名为 hook.LoadYakitPluginContext）

参数:

  - mng: 插件回调管理器

  - ctx: 上下文对象，用于控制取消

  - scriptType: 插件类型

  - hookNames: 可选，仅加载指定的 hook 名称



返回值:

  - 错误信息




Example:

``````````````yak
// 示意性示例，需要本地插件数据库
mng = hook.NewManager()
ctx = context.Background()
err = hook.LoadYakitPluginContext(mng, ctx, "mitm")
if err != nil { die(err) }
``````````````


#### 定义

`LoadYakitPluginContext(mng *YakToCallerManager, ctx context.Context, scriptType string, hookNames ...string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| mng | `*YakToCallerManager` | 插件回调管理器 |
| ctx | `context.Context` | 上下文对象，用于控制取消 |
| scriptType | `string` | 插件类型 |
| hookNames | `...string` | 可选，仅加载指定的 hook 名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### NewManager

#### 详细描述
NewYakToCallerManager 创建一个插件回调管理器（导出名为 hook.NewManager）

管理器用于加载插件、维护 hook 回调表并按需触发插件回调

返回值:

  - 插件回调管理器对象




Example:

``````````````yak
// 示意性示例，需要本地插件数据库
mng = hook.NewManager()
err = hook.LoadYakitPlugin(mng, "mitm")
``````````````


#### 定义

`NewManager() *YakToCallerManager`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*YakToCallerManager` | 插件回调管理器对象 |


### NewMixPluginCaller

#### 详细描述
NewMixPluginCaller 创建一个混合插件调用器（导出名为 hook.NewMixPluginCaller）

调用器内置网站/路径/参数等过滤器，便于按 MITM 流量统一调度多类插件

返回值:

  - 混合插件调用器对象

  - 错误信息




Example:

``````````````yak
// 示意性示例，需要本地插件数据库
caller, err = hook.NewMixPluginCaller()
if err != nil { die(err) }
caller.LoadPlugin("my-plugin")
``````````````


#### 定义

`NewMixPluginCaller() (*MixPluginCaller, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*MixPluginCaller` | 混合插件调用器对象 |
| r2 | `error` | 错误信息 |


### NewMixPluginCallerWithFilter

#### 详细描述
NewMixPluginCallerWithFilter 创建带自定义网站过滤器的混合插件调用器（导出名为 hook.NewMixPluginCallerWithFilter）

参数:

  - webFilter: 自定义的网站去重/过滤器



返回值:

  - 混合插件调用器对象

  - 错误信息




Example:

``````````````yak
// 示意性示例，需要本地插件数据库
caller, err = hook.NewMixPluginCallerWithFilter(filter.NewFilter())
if err != nil { die(err) }
caller.LoadPlugin("my-plugin")
``````````````


#### 定义

`NewMixPluginCallerWithFilter(webFilter filter.Filterable) (*MixPluginCaller, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| webFilter | `filter.Filterable` | 自定义的网站去重/过滤器 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*MixPluginCaller` | 混合插件调用器对象 |
| r2 | `error` | 错误信息 |


### RemoveYakitPluginByName

#### 详细描述
removeScriptByNameCtx 从回调管理器中移除指定名称的插件（导出名为 hook.RemoveYakitPluginByName）

参数:

  - mng: 插件回调管理器

  - scriptNames: 要移除的插件名称列表




Example:

``````````````yak
// 示意性示例，需要本地插件数据库
mng = hook.NewManager()
hook.RemoveYakitPluginByName(mng, "my-plugin")
``````````````


#### 定义

`RemoveYakitPluginByName(mng *YakToCallerManager, scriptNames ...string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| mng | `*YakToCallerManager` | 插件回调管理器 |
| scriptNames | `...string` | 要移除的插件名称列表 |


