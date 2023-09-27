# hook

|成员函数|函数描述/介绍|
|:------|:--------|
| [hook.CallYakitPluginFunc](#callyakitpluginfunc) ||
| [hook.LoadYakitPlugin](#loadyakitplugin) ||
| [hook.LoadYakitPluginByName](#loadyakitpluginbyname) ||
| [hook.LoadYakitPluginContext](#loadyakitplugincontext) ||
| [hook.NewManager](#newmanager) ||
| [hook.NewMixPluginCaller](#newmixplugincaller) ||
| [hook.RemoveYakitPluginByName](#removeyakitpluginbyname) ||


## 函数定义
### callyakitpluginfunc

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


### loadyakitplugin

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


### loadyakitpluginbyname

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


### loadyakitplugincontext

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


### newmanager

#### 详细描述


#### 定义

`NewManager() *YakToCallerManager`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*YakToCallerManager` |   |


### newmixplugincaller

#### 详细描述


#### 定义

`NewMixPluginCaller() (*MixPluginCaller, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*MixPluginCaller` |   |
| r2 | `error` |   |


### removeyakitpluginbyname

#### 详细描述


#### 定义

`RemoveYakitPluginByName(mng *YakToCallerManager, scriptNames ...string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| mng | `*YakToCallerManager` |   |
| scriptNames | `...string` |   |


