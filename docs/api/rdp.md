# rdp


|成员函数|函数描述/介绍|
|:------|:--------|
 | [rdp.Login](#rdplogin) |  |
 | [rdp.Version](#rdpversion) |  |




 



## 函数定义

### rdp.Login



#### 详细描述



#### 定义：

`Login(ip, domain, user, password string, port int) (_ bool, err error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |
| v3 | `string` |   |
| v4 | `string` |   |
| v5 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |
| r1 | `error` |   |


 
### rdp.Version



#### 详细描述



#### 定义：

`Version(addr string, timeout time.Duration) (_ string, _ []string, finalResult error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `time.Duration` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |
| r1 | `[]string` |   |
| r2 | `error` |   |


 


