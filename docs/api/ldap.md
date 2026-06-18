# ldap

|函数名|函数描述/介绍|
|:------|:--------|
| [ldap.Login](#login) ||
| [ldap.password](#password) ||
| [ldap.port](#port) ||
| [ldap.username](#username) ||


## 函数定义
### Login

#### 详细描述


#### 定义

`Login(addr string, opts ...func(config *ldapClientConfig)) (*ldap.Conn, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| addr | `string` |   |
| opts | `...func(config *ldapClientConfig)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ldap.Conn` |   |
| r2 | `error` |   |


### password

#### 详细描述


#### 定义

`password(i string) func(config *ldapClientConfig)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `func(config *ldapClientConfig)` |   |


### port

#### 详细描述


#### 定义

`port(i int) func(config *ldapClientConfig)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `func(config *ldapClientConfig)` |   |


### username

#### 详细描述


#### 定义

`username(i string) func(config *ldapClientConfig)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `func(config *ldapClientConfig)` |   |


