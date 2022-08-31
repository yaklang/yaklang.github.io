# timezone


|成员函数|函数描述/介绍|
|:------|:--------|
 | [timezone.Get](#timezoneget) |  |
 | [timezone.Now](#timezonenow) |  |




 



## 函数定义

### timezone.Get



#### 详细描述



#### 定义：

`func timezone.Get(v1: string) return (r0: *time.Location, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*time.Location` |   |
| r1 | `error` |   |


 
### timezone.Now



#### 详细描述



#### 定义：

`func timezone.Now(v1: string) return (r0: time.Time)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `time.Time` |   |


 


