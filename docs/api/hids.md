# hids

|成员函数|函数描述/介绍|
|:------|:--------|
| [hids.CPUAverageCallback](#CPUAverageCallback) ||
| [hids.CPUPercent](#CPUPercent) ||
| [hids.CPUPercentCallback](#CPUPercentCallback) ||
| [hids.Init](#Init) ||
| [hids.MemoryPercent](#MemoryPercent) ||
| [hids.MemoryPercentCallback](#MemoryPercentCallback) ||
| [hids.SetMonitorInterval](#SetMonitorInterval) ||
| [hids.ShowMonitorInterval](#ShowMonitorInterval) ||


## 函数定义
### hids.CPUAverageCallback

#### 详细描述


#### 定义

`CPUAverageCallback(callback func(i float64))`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `func(i float64)` |   |


### hids.CPUPercent

#### 详细描述


#### 定义

`CPUPercent() float64`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `float64` |   |


### hids.CPUPercentCallback

#### 详细描述


#### 定义

`CPUPercentCallback(callback func(i float64))`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `func(i float64)` |   |


### hids.Init

#### 详细描述


#### 定义

`Init()`


### hids.MemoryPercent

#### 详细描述


#### 定义

`MemoryPercent() float64`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `float64` |   |


### hids.MemoryPercentCallback

#### 详细描述


#### 定义

`MemoryPercentCallback(callback func(i float64))`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `func(i float64)` |   |


### hids.SetMonitorInterval

#### 详细描述


#### 定义

`SetMonitorInterval(i float64)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `float64` |   |


### hids.ShowMonitorInterval

#### 详细描述


#### 定义

`ShowMonitorInterval()`


