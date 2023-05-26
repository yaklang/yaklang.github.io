# ldap


|成员函数|函数描述/介绍|
|:------|:--------|
 | [ldap.Login](#ldaplogin) |  |
 | [ldap.password](#ldappassword) |  |
 | [ldap.port](#ldapport) |  |
 | [ldap.username](#ldapusername) |  |




 



## 函数定义

### ldap.Login



#### 详细描述



#### 定义：

`Login(addr string, opts ...func(config *ldapClientConfig)) (*ldap.Conn, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...func(*yaklib.ldapClientConfig)` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*ldap.Conn` |   |
| r1 | `error` |   |


 
### ldap.password



#### 详细描述



#### 定义：

`password(i string) func(config *ldapClientConfig)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func (v1: *yaklib.ldapClientConfig) ` |   |


 
### ldap.port



#### 详细描述



#### 定义：

`port(i int) func(config *ldapClientConfig)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func (v1: *yaklib.ldapClientConfig) ` |   |


 
### ldap.username



#### 详细描述



#### 定义：

`username(i string) func(config *ldapClientConfig)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func (v1: *yaklib.ldapClientConfig) ` |   |


 


