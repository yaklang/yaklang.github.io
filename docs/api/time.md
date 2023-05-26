# time


|成员函数|函数描述/介绍|
|:------|:--------|
 | [time.After](#timeafter) |  |
 | [time.AfterFunc](#timeafterfunc) | 一段时间之后执行一个函数 |
 | [time.GetCurrentDate](#timegetcurrentdate) | 获得当前今天的日期 |
 | [time.GetCurrentMonday](#timegetcurrentmonday) | 或者当前周的周一日期 |
 | [time.NewTicker](#timenewticker) | 获取一个 seconds 的 ticker，每隔 seconds 秒触发一次 |
 | [time.NewTimer](#timenewtimer) | 设置一个新的定时器，seconds 秒之后触发 |
 | [time.Now](#timenow) | 获取当前时间 |
 | [time.Parse](#timeparse) | 把时间按照一定规则进行解析（遵循 Golang 的规则） |
 | [time.ParseDuration](#timeparseduration) | 把一个字符串时间解析成 `time.Duration` |
 | [time.Since](#timesince) | 计算一个时间到现在的时间差 |
 | [time.Sleep](#timesleep) | sleep 一段时间 |
 | [time.Unix](#timeunix) | 使用 Unix 时间戳构建一个时间 |
 | [time.Until](#timeuntil) | 计算当前时间到目标时间的时间间隔 |
 | [time.now](#timenow) | 当前时间 |
 | [time.sleep](#timesleep) | sleep 一段时间 |




 



## 函数定义

### time.After



#### 详细描述



#### 定义：

`After(float64) &lt;-chan time.Time`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `float64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `&lt;-chan time.Time` |   |


 
### time.AfterFunc

一段时间之后执行一个函数

#### 详细描述



#### 定义：

`AfterFunc(time.Duration, func()) *time.Timer`


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

获得当前今天的日期

#### 详细描述



#### 定义：

`GetCurrentDate() (time.Time, error)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `time.Time` |   |
| r1 | `error` |   |


 
### time.GetCurrentMonday

或者当前周的周一日期

#### 详细描述



#### 定义：

`GetCurrentMonday() (time.Time, error)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `time.Time` |   |
| r1 | `error` |   |


 
### time.NewTicker

获取一个 seconds 的 ticker，每隔 seconds 秒触发一次

#### 详细描述



#### 定义：

`NewTicker(float64) *time.Ticker`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| seconds | `float64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*time.Ticker` |   |


 
### time.NewTimer

设置一个新的定时器，seconds 秒之后触发

#### 详细描述



#### 定义：

`NewTimer(float64) *time.Timer`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| seconds | `float64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*time.Timer` |   |


 
### time.Now

获取当前时间

#### 详细描述



#### 定义：

`Now() time.Time`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `time.Time` |   |


 
### time.Parse

把时间按照一定规则进行解析（遵循 Golang 的规则）

#### 详细描述



#### 定义：

`Parse(string, string) (time.Time, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| timeStr | `string` |   |
| format | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `time.Time` |   |
| r1 | `error` |   |


 
### time.ParseDuration

把一个字符串时间解析成 `time.Duration`

#### 详细描述



#### 定义：

`ParseDuration(string) (time.Duration, error)`


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

计算一个时间到现在的时间差

#### 详细描述



#### 定义：

`Since(time.Time) time.Duration`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| start | `time.Time` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `time.Duration` |   |


 
### time.Sleep

sleep 一段时间

#### 详细描述



#### 定义：

`Sleep(i float64)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| seconds | `float64` |   |




 

 
### time.Unix

使用 Unix 时间戳构建一个时间

#### 详细描述



#### 定义：

`Unix(int64, int64) time.Time`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| timestampSeconds | `int64` |   |
| nano | `int64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `time.Time` |   |


 
### time.Until

计算当前时间到目标时间的时间间隔

#### 详细描述



#### 定义：

`Until(time.Time) time.Duration`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| end | `time.Time` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `time.Duration` |   |


 
### time.now

当前时间

#### 详细描述



#### 定义：

`now() time.Time`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `time.Time` |   |


 
### time.sleep

sleep 一段时间

#### 详细描述



#### 定义：

`sleep(i float64)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| seconds | `float64` |   |




 

 


