# smb

|函数名|函数描述/介绍|
|:------|:--------|
| [smb.Connect](#connect) ||
| [smb.debug](#debug) ||
| [smb.domain](#domain) ||
| [smb.hash](#hash) ||
| [smb.password](#password) ||
| [smb.username](#username) ||
| [smb.workstation](#workstation) ||


## 函数定义
### Connect

#### 详细描述


#### 定义

`Connect(addr string, opts ..._smbConfigHandler) (*smb.Session, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| addr | `string` |   |
| opts | `..._smbConfigHandler` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*smb.Session` |   |
| r2 | `error` |   |


### debug

#### 详细描述


#### 定义

`debug(w bool) _smbConfigHandler`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| w | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `_smbConfigHandler` |   |


### domain

#### 详细描述


#### 定义

`domain(w string) _smbConfigHandler`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| w | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `_smbConfigHandler` |   |


### hash

#### 详细描述


#### 定义

`hash(w string) _smbConfigHandler`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| w | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `_smbConfigHandler` |   |


### password

#### 详细描述


#### 定义

`password(pass string) _smbConfigHandler`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pass | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `_smbConfigHandler` |   |


### username

#### 详细描述


#### 定义

`username(user string) _smbConfigHandler`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| user | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `_smbConfigHandler` |   |


### workstation

#### 详细描述


#### 定义

`workstation(w string) _smbConfigHandler`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| w | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `_smbConfigHandler` |   |


