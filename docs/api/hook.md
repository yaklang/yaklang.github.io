# hook


|成员函数|函数描述/介绍|
|:------|:--------|
 | [hook.CallYakitPluginFunc](#hookcallyakitpluginfunc) |  |
 | [hook.LoadYakitPlugin](#hookloadyakitplugin) |  |
 | [hook.LoadYakitPluginContext](#hookloadyakitplugincontext) |  |
 | [hook.NewManager](#hooknewmanager) |  |




 



## 函数定义

### hook.CallYakitPluginFunc



#### 详细描述



#### 定义：

`func hook.CallYakitPluginFunc(v1: string, v2: string) return (r0: any, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |
| r1 | `error` |   |


 
### hook.LoadYakitPlugin



#### 详细描述



#### 定义：

`func hook.LoadYakitPlugin(v1: *yak.YakToCallerManager, v2: string, v3 ...string) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `*yak.YakToCallerManager` |   |
| v2 | `string` |   |
| v3 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### hook.LoadYakitPluginContext



#### 详细描述



#### 定义：

`func hook.LoadYakitPluginContext(v1: *yak.YakToCallerManager, v2: context.Context, v3: string, v4 ...string) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `*yak.YakToCallerManager` |   |
| v2 | `context.Context` |   |
| v3 | `string` |   |
| v4 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### hook.NewManager



#### 详细描述



#### 定义：

`func hook.NewManager() return (r0: *yak.YakToCallerManager)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yak.YakToCallerManager` |   |


 


