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



#### 定义：

`func (v1: float64) return(&lt;-chan time.Time) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | float64 |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | &lt;-chan time.Time |   |


### time.AfterFunc



#### 定义：

`func (v1: time.Duration, v2: func () ) return(*time.Timer) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | time.Duration |   |
| v2 | func ()  |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | *time.Timer |   |


### time.GetCurrentDate



#### 定义：

`func () return(time.Time, error) `

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | time.Time |   |
| r1 | error |   |


### time.GetCurrentMonday



#### 定义：

`func () return(time.Time, error) `

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | time.Time |   |
| r1 | error |   |


### time.NewTicker



#### 定义：

`func (v1: float64) return(*time.Ticker) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | float64 |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | *time.Ticker |   |


### time.NewTimer



#### 定义：

`func (v1: float64) return(*time.Timer) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | float64 |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | *time.Timer |   |


### time.Now



#### 定义：

`func () return(time.Time) `

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | time.Time |   |


### time.Parse



#### 定义：

`func (v1: string, v2: string) return(time.Time, error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |
| v2 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | time.Time |   |
| r1 | error |   |


### time.ParseDuration



#### 定义：

`func (v1: string) return(time.Duration, error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | time.Duration |   |
| r1 | error |   |


### time.Since



#### 定义：

`func (v1: time.Time) return(time.Duration) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | time.Time |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | time.Duration |   |


### time.Sleep



#### 定义：

`func (v1: float64) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | float64 |   |




 

### time.Unix



#### 定义：

`func (v1: int64, v2: int64) return(time.Time) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | int64 |   |
| v2 | int64 |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | time.Time |   |


### time.Until



#### 定义：

`func (v1: time.Time) return(time.Duration) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | time.Time |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | time.Duration |   |


### time.now



#### 定义：

`func () return(time.Time) `

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | time.Time |   |


### time.sleep



#### 定义：

`func (v1: float64) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | float64 |   |




 




