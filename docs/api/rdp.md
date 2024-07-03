# rdp

|函数名|函数描述/介绍|
|:------|:--------|
| [rdp.Login](#login) ||
| [rdp.Version](#version) ||


## 函数定义
### Login

#### 详细描述


#### 定义

`Login(ip string, domain string, user string, password string, port int) (_ bool, err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ip | `string` |   |
| domain | `string` |   |
| user | `string` |   |
| password | `string` |   |
| port | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| _ | `bool` |   |
| err | `error` |   |


### Version

#### 详细描述


#### 定义

`Version(addr string, timeout time.Duration) (_ string, _ []string, finalResult error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| addr | `string` |   |
| timeout | `time.Duration` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| _ | `string` |   |
| _ | `[]string` |   |
| finalResult | `error` |   |


