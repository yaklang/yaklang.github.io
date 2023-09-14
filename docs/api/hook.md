# hook

|成员函数|函数描述/介绍|
|:------|:--------|
| [hook.CallYakitPluginFunc](#CallYakitPluginFunc) ||
| [hook.LoadYakitPlugin](#LoadYakitPlugin) ||
| [hook.LoadYakitPluginByName](#LoadYakitPluginByName) ||
| [hook.LoadYakitPluginContext](#LoadYakitPluginContext) ||
| [hook.NewManager](#NewManager) ||
| [hook.NewMixPluginCaller](#NewMixPluginCaller) ||
| [hook.RemoveYakitPluginByName](#RemoveYakitPluginByName) ||


## 函数定义
### hook.CallYakitPluginFunc

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


### hook.LoadYakitPlugin

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


### hook.LoadYakitPluginByName

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


### hook.LoadYakitPluginContext

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


### hook.NewManager

#### 详细描述


#### 定义

`NewManager() *YakToCallerManager`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*YakToCallerManager` |   |


### hook.NewMixPluginCaller

#### 详细描述


#### 定义

`NewMixPluginCaller() (*MixPluginCaller, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*MixPluginCaller` |   |
| r2 | `error` |   |


### hook.RemoveYakitPluginByName

#### 详细描述


#### 定义

`RemoveYakitPluginByName(mng *YakToCallerManager, scriptNames ...string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| mng | `*YakToCallerManager` |   |
| scriptNames | `...string` |   |


