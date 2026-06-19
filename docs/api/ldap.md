# ldap

|函数名|函数描述/介绍|
|:------|:--------|
| [ldap.Login](#login) |Login 连接并绑定（登录）到 LDAP 服务器，返回一个可用的 LDAP 连接对象 参数: - addr: 目标地址，格式为 host 或 host:port，未指定端口时默认 389 - opts: 可选配置，例如 ldap.username、ldap.password、ldap.port 返...|
| [ldap.password](#password) |password 是一个 LDAP 登录配置选项，用于设置绑定（Bind）密码 参数: - i: 绑定密码 返回值: - 一个 LDAP 登录配置选项，作为可变参数传入 ldap.Login|
| [ldap.port](#port) |port 是一个 LDAP 登录配置选项，用于设置 LDAP 服务器端口 参数: - i: LDAP 服务器端口，默认 389 返回值: - 一个 LDAP 登录配置选项，作为可变参数传入 ldap.Login|
| [ldap.username](#username) |username 是一个 LDAP 登录配置选项，用于设置绑定（Bind）用户名 参数: - i: 绑定用户名，留空或 &#34;anonymous&#34; 时进行匿名绑定 返回值: - 一个 LDAP 登录配置选项，作为可变参数传入 ldap.Login|


## 函数定义
### Login

#### 详细描述
Login 连接并绑定（登录）到 LDAP 服务器，返回一个可用的 LDAP 连接对象

参数:

  - addr: 目标地址，格式为 host 或 host:port，未指定端口时默认 389

  - opts: 可选配置，例如 ldap.username、ldap.password、ldap.port



返回值:

  - LDAP 连接对象，可进行搜索、修改等操作

  - 错误信息，连接或绑定失败时返回非空




Example:

``````````````yak
// 登录 LDAP 服务器，依赖目标服务，此处仅作示意
conn = ldap.Login("192.168.1.1", ldap.username("admin"), ldap.password("admin"))~
defer conn.Close()
``````````````


#### 定义

`Login(addr string, opts ...func(config *ldapClientConfig)) (*ldap.Conn, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| addr | `string` | 目标地址，格式为 host 或 host:port，未指定端口时默认 389 |
| opts | `...func(config *ldapClientConfig)` | 可选配置，例如 ldap.username、ldap.password、ldap.port |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ldap.Conn` | LDAP 连接对象，可进行搜索、修改等操作 |
| r2 | `error` | 错误信息，连接或绑定失败时返回非空 |


### password

#### 详细描述
password 是一个 LDAP 登录配置选项，用于设置绑定（Bind）密码

参数:

  - i: 绑定密码



返回值:

  - 一个 LDAP 登录配置选项，作为可变参数传入 ldap.Login




Example:

``````````````yak
// 指定用户名密码登录 LDAP，此处仅作示意
conn = ldap.Login("192.168.1.1", ldap.username("admin"), ldap.password("admin"))~
defer conn.Close()
``````````````


#### 定义

`password(i string) func(config *ldapClientConfig)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` | 绑定密码 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `func(config *ldapClientConfig)` | 一个 LDAP 登录配置选项，作为可变参数传入 ldap.Login |


### port

#### 详细描述
port 是一个 LDAP 登录配置选项，用于设置 LDAP 服务器端口

参数:

  - i: LDAP 服务器端口，默认 389



返回值:

  - 一个 LDAP 登录配置选项，作为可变参数传入 ldap.Login




Example:

``````````````yak
// 指定端口登录 LDAP，此处仅作示意
conn = ldap.Login("192.168.1.1", ldap.port(389), ldap.username("admin"), ldap.password("admin"))~
defer conn.Close()
``````````````


#### 定义

`port(i int) func(config *ldapClientConfig)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `int` | LDAP 服务器端口，默认 389 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `func(config *ldapClientConfig)` | 一个 LDAP 登录配置选项，作为可变参数传入 ldap.Login |


### username

#### 详细描述
username 是一个 LDAP 登录配置选项，用于设置绑定（Bind）用户名

参数:

  - i: 绑定用户名，留空或 &#34;anonymous&#34; 时进行匿名绑定



返回值:

  - 一个 LDAP 登录配置选项，作为可变参数传入 ldap.Login




Example:

``````````````yak
// 指定用户名密码登录 LDAP，此处仅作示意
conn = ldap.Login("192.168.1.1", ldap.username("admin"), ldap.password("admin"))~
defer conn.Close()
``````````````


#### 定义

`username(i string) func(config *ldapClientConfig)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` | 绑定用户名，留空或 &#34;anonymous&#34; 时进行匿名绑定 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `func(config *ldapClientConfig)` | 一个 LDAP 登录配置选项，作为可变参数传入 ldap.Login |


