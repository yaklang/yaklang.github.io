# smb


|成员函数|函数描述/介绍|
|:------|:--------|
 | [smb.Connect](#smbconnect) |  |
 | [smb.debug](#smbdebug) |  |
 | [smb.domain](#smbdomain) |  |
 | [smb.hash](#smbhash) |  |
 | [smb.password](#smbpassword) |  |
 | [smb.username](#smbusername) |  |
 | [smb.workstation](#smbworkstation) |  |




 



## 函数定义

### smb.Connect



#### 详细描述



#### 定义：

`func smb.Connect(v1: string, v2 ...yaklib._smbConfigHandler) return (r0: *smb.Session, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...yaklib._smbConfigHandler` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*smb.Session` |   |
| r1 | `error` |   |


 
### smb.debug



#### 详细描述



#### 定义：

`func smb.debug(v1: bool) return (r0: func _smbConfigHandler(v1: *yaklib._smbConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bool` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func _smbConfigHandler(v1: *yaklib._smbConfig) ` |   |


 
### smb.domain



#### 详细描述



#### 定义：

`func smb.domain(v1: string) return (r0: func _smbConfigHandler(v1: *yaklib._smbConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func _smbConfigHandler(v1: *yaklib._smbConfig) ` |   |


 
### smb.hash



#### 详细描述



#### 定义：

`func smb.hash(v1: string) return (r0: func _smbConfigHandler(v1: *yaklib._smbConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func _smbConfigHandler(v1: *yaklib._smbConfig) ` |   |


 
### smb.password



#### 详细描述



#### 定义：

`func smb.password(v1: string) return (r0: func _smbConfigHandler(v1: *yaklib._smbConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func _smbConfigHandler(v1: *yaklib._smbConfig) ` |   |


 
### smb.username



#### 详细描述



#### 定义：

`func smb.username(v1: string) return (r0: func _smbConfigHandler(v1: *yaklib._smbConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func _smbConfigHandler(v1: *yaklib._smbConfig) ` |   |


 
### smb.workstation



#### 详细描述



#### 定义：

`func smb.workstation(v1: string) return (r0: func _smbConfigHandler(v1: *yaklib._smbConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func _smbConfigHandler(v1: *yaklib._smbConfig) ` |   |


 


