# smb

|函数名|函数描述/介绍|
|:------|:--------|
| [smb.Connect](#connect) |Connect 建立一个 SMB 会话，返回一个可进行文件共享操作的会话对象 参数: - addr: 目标地址，格式为 host 或 host:port，未指定端口时默认 445 - opts: 可选配置，例如 smb.username、smb.password、smb.domain、smb.has...|
| [smb.debug](#debug) |debug 是一个 SMB 连接配置选项，用于开启调试日志输出 参数: - w: 是否开启调试模式 返回值: - 一个 SMB 连接配置选项，作为可变参数传入 smb.Connect|
| [smb.domain](#domain) |domain 是一个 SMB 连接配置选项，用于设置认证所属的域 参数: - w: 域名称 返回值: - 一个 SMB 连接配置选项，作为可变参数传入 smb.Connect|
| [smb.hash](#hash) |hash 是一个 SMB 连接配置选项，用于设置 NTLM 哈希以进行哈希传递（Pass-the-Hash）认证 参数: - w: NTLM 哈希字符串 返回值: - 一个 SMB 连接配置选项，作为可变参数传入 smb.Connect|
| [smb.password](#password) |password 是一个 SMB 连接配置选项，用于设置认证密码 参数: - pass: 认证密码 返回值: - 一个 SMB 连接配置选项，作为可变参数传入 smb.Connect|
| [smb.username](#username) |username 是一个 SMB 连接配置选项，用于设置认证用户名 参数: - user: 认证用户名 返回值: - 一个 SMB 连接配置选项，作为可变参数传入 smb.Connect|
| [smb.workstation](#workstation) |workstation 是一个 SMB 连接配置选项，用于设置工作站名称 参数: - w: 工作站名称 返回值: - 一个 SMB 连接配置选项，作为可变参数传入 smb.Connect|


## 函数定义
### Connect

#### 详细描述
Connect 建立一个 SMB 会话，返回一个可进行文件共享操作的会话对象

参数:

  - addr: 目标地址，格式为 host 或 host:port，未指定端口时默认 445

  - opts: 可选配置，例如 smb.username、smb.password、smb.domain、smb.hash



返回值:

  - SMB 会话对象，可进行共享枚举、文件读写等操作

  - 错误信息，连接或认证失败时返回非空




Example:

``````````````yak
// 建立 SMB 会话，依赖目标服务，此处仅作示意
session = smb.Connect("192.168.1.1:445", smb.username("administrator"), smb.password("123456"))~
defer session.Close()
``````````````


#### 定义

`Connect(addr string, opts ..._smbConfigHandler) (*smb.Session, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| addr | `string` | 目标地址，格式为 host 或 host:port，未指定端口时默认 445 |
| opts | `..._smbConfigHandler` | 可选配置，例如 smb.username、smb.password、smb.domain、smb.hash |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*smb.Session` | SMB 会话对象，可进行共享枚举、文件读写等操作 |
| r2 | `error` | 错误信息，连接或认证失败时返回非空 |


### debug

#### 详细描述
debug 是一个 SMB 连接配置选项，用于开启调试日志输出

参数:

  - w: 是否开启调试模式



返回值:

  - 一个 SMB 连接配置选项，作为可变参数传入 smb.Connect




Example:

``````````````yak
// 开启调试模式连接 SMB，此处仅作示意
session = smb.Connect("192.168.1.1:445", smb.username("administrator"), smb.password("123456"), smb.debug(true))~
defer session.Close()
``````````````


#### 定义

`debug(w bool) _smbConfigHandler`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| w | `bool` | 是否开启调试模式 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `_smbConfigHandler` | 一个 SMB 连接配置选项，作为可变参数传入 smb.Connect |


### domain

#### 详细描述
domain 是一个 SMB 连接配置选项，用于设置认证所属的域

参数:

  - w: 域名称



返回值:

  - 一个 SMB 连接配置选项，作为可变参数传入 smb.Connect




Example:

``````````````yak
// 指定域进行 SMB 域认证，此处仅作示意
session = smb.Connect("192.168.1.1:445", smb.username("administrator"), smb.password("123456"), smb.domain("CORP"))~
defer session.Close()
``````````````


#### 定义

`domain(w string) _smbConfigHandler`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| w | `string` | 域名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `_smbConfigHandler` | 一个 SMB 连接配置选项，作为可变参数传入 smb.Connect |


### hash

#### 详细描述
hash 是一个 SMB 连接配置选项，用于设置 NTLM 哈希以进行哈希传递（Pass-the-Hash）认证

参数:

  - w: NTLM 哈希字符串



返回值:

  - 一个 SMB 连接配置选项，作为可变参数传入 smb.Connect




Example:

``````````````yak
// 使用 NTLM 哈希进行哈希传递认证连接 SMB，此处仅作示意
session = smb.Connect("192.168.1.1:445", smb.username("administrator"), smb.hash("aad3b435b51404eeaad3b435b51404ee:..."))~
defer session.Close()
``````````````


#### 定义

`hash(w string) _smbConfigHandler`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| w | `string` | NTLM 哈希字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `_smbConfigHandler` | 一个 SMB 连接配置选项，作为可变参数传入 smb.Connect |


### password

#### 详细描述
password 是一个 SMB 连接配置选项，用于设置认证密码

参数:

  - pass: 认证密码



返回值:

  - 一个 SMB 连接配置选项，作为可变参数传入 smb.Connect




Example:

``````````````yak
// 指定用户名密码连接 SMB，此处仅作示意
session = smb.Connect("192.168.1.1:445", smb.username("administrator"), smb.password("123456"))~
defer session.Close()
``````````````


#### 定义

`password(pass string) _smbConfigHandler`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pass | `string` | 认证密码 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `_smbConfigHandler` | 一个 SMB 连接配置选项，作为可变参数传入 smb.Connect |


### username

#### 详细描述
username 是一个 SMB 连接配置选项，用于设置认证用户名

参数:

  - user: 认证用户名



返回值:

  - 一个 SMB 连接配置选项，作为可变参数传入 smb.Connect




Example:

``````````````yak
// 指定用户名密码连接 SMB，此处仅作示意
session = smb.Connect("192.168.1.1:445", smb.username("administrator"), smb.password("123456"))~
defer session.Close()
``````````````


#### 定义

`username(user string) _smbConfigHandler`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| user | `string` | 认证用户名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `_smbConfigHandler` | 一个 SMB 连接配置选项，作为可变参数传入 smb.Connect |


### workstation

#### 详细描述
workstation 是一个 SMB 连接配置选项，用于设置工作站名称

参数:

  - w: 工作站名称



返回值:

  - 一个 SMB 连接配置选项，作为可变参数传入 smb.Connect




Example:

``````````````yak
// 指定工作站名称连接 SMB，此处仅作示意
session = smb.Connect("192.168.1.1:445", smb.username("administrator"), smb.password("123456"), smb.workstation("WIN-PC"))~
defer session.Close()
``````````````


#### 定义

`workstation(w string) _smbConfigHandler`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| w | `string` | 工作站名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `_smbConfigHandler` | 一个 SMB 连接配置选项，作为可变参数传入 smb.Connect |


