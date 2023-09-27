# hids

|成员函数|函数描述/介绍|
|:------|:--------|
| [hids.CPUAverageCallback](#cpuaveragecallback) ||
| [hids.CPUPercent](#cpupercent) ||
| [hids.CPUPercentCallback](#cpupercentcallback) ||
| [hids.Init](#init) ||
| [hids.MemoryPercent](#memorypercent) ||
| [hids.MemoryPercentCallback](#memorypercentcallback) ||
| [hids.SetMonitorInterval](#setmonitorinterval) ||
| [hids.ShowMonitorInterval](#showmonitorinterval) ||


## 函数定义
### cpuaveragecallback

#### 详细描述


#### 定义

`CPUAverageCallback(callback func(i float64))`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `func(i float64)` |   |


### cpupercent

#### 详细描述


#### 定义

`CPUPercent() float64`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `float64` |   |


### cpupercentcallback

#### 详细描述


#### 定义

`CPUPercentCallback(callback func(i float64))`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `func(i float64)` |   |


### init

#### 详细描述


#### 定义

`Init()`


### memorypercent

#### 详细描述


#### 定义

`MemoryPercent() float64`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `float64` |   |


### memorypercentcallback

#### 详细描述


#### 定义

`MemoryPercentCallback(callback func(i float64))`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `func(i float64)` |   |


### setmonitorinterval

#### 详细描述


#### 定义

`SetMonitorInterval(i float64)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `float64` |   |


### showmonitorinterval

#### 详细描述


#### 定义

`ShowMonitorInterval()`


