# hids

|函数名|函数描述/介绍|
|:------|:--------|
| [hids.CPUAverage](#cpuaverage) |CPUAverage 获取当前系统的 CPU 使用率平均值  |
| [hids.CPUAverageCallback](#cpuaveragecallback) |CPUPercentCallback 当 CPU 使用率平均值发生变化时，调用 callback 函数  |
| [hids.CPUPercent](#cpupercent) |CPUPercent 获取当前系统的 CPU 使用率  |
| [hids.CPUPercentCallback](#cpupercentcallback) |CPUPercentCallback 当 CPU 使用率发生变化时，调用 callback 函数  |
| [hids.Init](#init) |Init 初始化全局健康管理器  |
| [hids.MemoryPercent](#memorypercent) |MemoryPercent 获取当前系统的内存使用率  |
| [hids.MemoryPercentCallback](#memorypercentcallback) |MemoryPercentCallback 当内存使用率发生变化时，调用 callback  |
| [hids.SetMonitorInterval](#setmonitorinterval) |SetMonitorInterval 设置全局健康管理器的监控间隔(单位：秒)，如果在全局健康管理器运行时调用，会重置全局健康管理器  |
| [hids.ShowMonitorInterval](#showmonitorinterval) |ShowMonitorInterval 在标准输出中输出全局健康管理器的监控间隔(单位：秒)  |


## 函数定义
### CPUAverage

#### 详细描述
CPUAverage 获取当前系统的 CPU 使用率平均值

Example:
```
printf("%f%%\n", hids.CPUAverage())
```


#### 定义

`CPUAverage() float64`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `float64` |   |


### CPUAverageCallback

#### 详细描述
CPUPercentCallback 当 CPU 使用率平均值发生变化时，调用 callback 函数

Example:
```
hids.Init()
hids.CPUAverageCallback(func(i) {
if (i > 50) { println("cpu average precent is over 50%") } // 当 CPU 使用率平均值超过50%时输出信息
})
```


#### 定义

`CPUAverageCallback(callback func(i float64))`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `func(i float64)` |   |


### CPUPercent

#### 详细描述
CPUPercent 获取当前系统的 CPU 使用率

Example:
```
printf("%f%%\n", hids.CPUPercent())
```


#### 定义

`CPUPercent() float64`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `float64` |   |


### CPUPercentCallback

#### 详细描述
CPUPercentCallback 当 CPU 使用率发生变化时，调用 callback 函数

Example:
```
hids.Init()
hids.CPUPercentCallback(func(i) {
if (i > 50) { println("cpu precent is over 50%") } // 当 CPU 使用率超过50%时输出信息
})
```


#### 定义

`CPUPercentCallback(callback func(i float64))`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `func(i float64)` |   |


### Init

#### 详细描述
Init 初始化全局健康管理器

Example:
```
hids.Init()
```


#### 定义

`Init()`


### MemoryPercent

#### 详细描述
MemoryPercent 获取当前系统的内存使用率

Example:
```
printf("%f%%\n", hids.MemoryPercent())
```


#### 定义

`MemoryPercent() float64`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `float64` |   |


### MemoryPercentCallback

#### 详细描述
MemoryPercentCallback 当内存使用率发生变化时，调用 callback

Example:
```
hids.Init()
hids.MemoryPercentCallback(func(i) {
if (i > 50) { println("memory precent is over 50%") } // 当内存使用率超过50%时输出信息
})
```


#### 定义

`MemoryPercentCallback(callback func(i float64))`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| callback | `func(i float64)` |   |


### SetMonitorInterval

#### 详细描述
SetMonitorInterval 设置全局健康管理器的监控间隔(单位：秒)，如果在全局健康管理器运行时调用，会重置全局健康管理器

Example:
```
hids.SetMonitorInterval(1)
```


#### 定义

`SetMonitorInterval(i float64)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `float64` |   |


### ShowMonitorInterval

#### 详细描述
ShowMonitorInterval 在标准输出中输出全局健康管理器的监控间隔(单位：秒)

Example:
```
hids.ShowMonitorInterval()
```


#### 定义

`ShowMonitorInterval()`


