# time


|成员函数|函数描述/介绍|
|:------|:--------|
 | [time.After](#timeafter) |  |
 | [time.AfterFunc](#timeafterfunc) |  |
 | [time.GetCurrentDate](#timegetcurrentdate) |  |
 | [time.GetCurrentMonday](#timegetcurrentmonday) |  |
 | [time.NewTicker](#timenewticker) |  |
 | [time.NewTimer](#timenewtimer) |  |
 | [time.Now](#timenow) |  |
 | [time.Parse](#timeparse) |  |
 | [time.ParseDuration](#timeparseduration) |  |
 | [time.Since](#timesince) |  |
 | [time.Sleep](#timesleep) |  |
 | [time.Unix](#timeunix) |  |
 | [time.Until](#timeuntil) |  |
 | [time.now](#timenow) |  |
 | [time.sleep](#timesleep) |  |




 



## 函数定义

### time.After



#### 详细描述



#### 定义：

`func time.After(v1: float64) return (r0: &lt;-chan time.Time)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `float64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `&lt;-chan time.Time` |   |


 
### time.AfterFunc



#### 详细描述



#### 定义：

`func time.AfterFunc(v1: time.Duration, v2: func () ) return (r0: *time.Timer)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `time.Duration` |   |
| v2 | `func () ` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*time.Timer` |   |


 
### time.GetCurrentDate



#### 详细描述



#### 定义：

`func time.GetCurrentDate() return (r0: time.Time, r1: error)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `time.Time` |   |
| r1 | `error` |   |


 
### time.GetCurrentMonday



#### 详细描述



#### 定义：

`func time.GetCurrentMonday() return (r0: time.Time, r1: error)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `time.Time` |   |
| r1 | `error` |   |


 
### time.NewTicker



#### 详细描述



#### 定义：

`func time.NewTicker(v1: float64) return (r0: *time.Ticker)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `float64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*time.Ticker` |   |


 
### time.NewTimer



#### 详细描述



#### 定义：

`func time.NewTimer(v1: float64) return (r0: *time.Timer)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `float64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*time.Timer` |   |


 
### time.Now



#### 详细描述



#### 定义：

`func time.Now() return (r0: time.Time)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `time.Time` |   |


 
### time.Parse



#### 详细描述



#### 定义：

`func time.Parse(v1: string, v2: string) return (r0: time.Time, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `time.Time` |   |
| r1 | `error` |   |


 
### time.ParseDuration



#### 详细描述



#### 定义：

`func time.ParseDuration(v1: string) return (r0: time.Duration, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `time.Duration` |   |
| r1 | `error` |   |


 
### time.Since



#### 详细描述



#### 定义：

`func time.Since(v1: time.Time) return (r0: time.Duration)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `time.Time` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `time.Duration` |   |


 
### time.Sleep



#### 详细描述



#### 定义：

``func time.Sleep(v1: float64)``


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `float64` |   |




 

 
### time.Unix



#### 详细描述



#### 定义：

`func time.Unix(v1: int64, v2: int64) return (r0: time.Time)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int64` |   |
| v2 | `int64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `time.Time` |   |


 
### time.Until



#### 详细描述



#### 定义：

`func time.Until(v1: time.Time) return (r0: time.Duration)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `time.Time` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `time.Duration` |   |


 
### time.now



#### 详细描述



#### 定义：

`func time.now() return (r0: time.Time)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `time.Time` |   |


 
### time.sleep



#### 详细描述



#### 定义：

``func time.sleep(v1: float64)``


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `float64` |   |




 

 


