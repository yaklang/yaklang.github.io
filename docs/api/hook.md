# hook

|函数名|函数描述/介绍|
|:------|:--------|
| [hook.CallYakitPluginFunc](#callyakitpluginfunc) ||
| [hook.LoadYakitPlugin](#loadyakitplugin) ||
| [hook.LoadYakitPluginByName](#loadyakitpluginbyname) ||
| [hook.LoadYakitPluginContext](#loadyakitplugincontext) ||
| [hook.NewManager](#newmanager) ||
| [hook.NewMixPluginCaller](#newmixplugincaller) ||
| [hook.NewMixPluginCallerWithFilter](#newmixplugincallerwithfilter) ||
| [hook.RemoveYakitPluginByName](#removeyakitpluginbyname) ||


## 函数定义
### CallYakitPluginFunc

#### 详细描述


#### 定义

`CallYakitPluginFunc(scriptName string, hookName string) (any, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| scriptName | `string` |   |
| hookName | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `any` |   |
| r2 | `error` |   |


### LoadYakitPlugin

#### 详细描述


#### 定义

`LoadYakitPlugin(mng *YakToCallerManager, scriptType string, hookNames ...string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| mng | `*YakToCallerManager` |   |
| scriptType | `string` |   |
| hookNames | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### LoadYakitPluginByName

#### 详细描述


#### 定义

`LoadYakitPluginByName(mng *YakToCallerManager, scriptName string, hookNames ...string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| mng | `*YakToCallerManager` |   |
| scriptName | `string` |   |
| hookNames | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### LoadYakitPluginContext

#### 详细描述


#### 定义

`LoadYakitPluginContext(mng *YakToCallerManager, ctx context.Context, scriptType string, hookNames ...string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| mng | `*YakToCallerManager` |   |
| ctx | `context.Context` |   |
| scriptType | `string` |   |
| hookNames | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### NewManager

#### 详细描述


#### 定义

`NewManager() *YakToCallerManager`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*YakToCallerManager` |   |


### NewMixPluginCaller

#### 详细描述


#### 定义

`NewMixPluginCaller() (*MixPluginCaller, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*MixPluginCaller` |   |
| r2 | `error` |   |


### NewMixPluginCallerWithFilter

#### 详细描述


#### 定义

`NewMixPluginCallerWithFilter(webFilter filter.Filterable) (*MixPluginCaller, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| webFilter | `filter.Filterable` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*MixPluginCaller` |   |
| r2 | `error` |   |


### RemoveYakitPluginByName

#### 详细描述


#### 定义

`RemoveYakitPluginByName(mng *YakToCallerManager, scriptNames ...string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| mng | `*YakToCallerManager` |   |
| scriptNames | `...string` |   |


