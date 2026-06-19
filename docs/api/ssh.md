# ssh

|函数名|函数描述/介绍|
|:------|:--------|
| [ssh.Connect](#connect) |Connect 使用灵活的配置选项建立一个 SSH 连接，返回可执行命令与传输文件的客户端 参数: - host: 目标地址，格式为 host 或 host:port，未指定端口时默认 22 - opts: 可选配置，例如 ssh.username、ssh.password、ssh.privateK...|
| [ssh.ConnectWithKey](#connectwithkey) |ConnectWithKey 使用私钥认证连接到 SSH 服务器，返回 SSH 客户端 参数: - host: 目标地址，格式为 host 或 host:port，未指定端口时默认 22 - username: 登录用户名 - keyPath: 私钥文件路径 返回值: - SSH 客户端对象，可调用...|
| [ssh.ConnectWithPasswd](#connectwithpasswd) |ConnectWithPasswd 使用密码认证连接到 SSH 服务器，返回 SSH 客户端 参数: - host: 目标地址，格式为 host 或 host:port，未指定端口时默认 22 - username: 登录用户名 - password: 登录密码 返回值: - SSH 客户端对象，可...|
| [ssh.keyPassphrase](#keypassphrase) |keyPassphrase 是一个 SSH 连接配置选项，用于设置加密私钥的口令 参数: - passphrase: 私钥口令 返回值: - 一个 SSH 连接配置选项，作为可变参数传入 ssh.Connect|
| [ssh.password](#password) |password 是一个 SSH 连接配置选项，用于设置登录密码 参数: - password: 登录密码 返回值: - 一个 SSH 连接配置选项，作为可变参数传入 ssh.Connect|
| [ssh.port](#port) |port 是一个 SSH 连接配置选项，用于设置 SSH 服务器端口 参数: - port: SSH 服务器端口，默认 22 返回值: - 一个 SSH 连接配置选项，作为可变参数传入 ssh.Connect|
| [ssh.privateKey](#privatekey) |privateKey 是一个 SSH 连接配置选项，用于设置私钥文件路径以进行密钥认证 参数: - keyPath: 私钥文件路径 返回值: - 一个 SSH 连接配置选项，作为可变参数传入 ssh.Connect|
| [ssh.timeout](#timeout) |timeout 是一个 SSH 连接配置选项，用于设置连接超时时间（单位：秒） 参数: - timeout: 超时时间，单位为秒，支持小数 返回值: - 一个 SSH 连接配置选项，作为可变参数传入 ssh.Connect|
| [ssh.username](#username) |username 是一个 SSH 连接配置选项，用于设置登录用户名 参数: - username: 登录用户名 返回值: - 一个 SSH 连接配置选项，作为可变参数传入 ssh.Connect|


## 函数定义
### Connect

#### 详细描述
Connect 使用灵活的配置选项建立一个 SSH 连接，返回可执行命令与传输文件的客户端

参数:

  - host: 目标地址，格式为 host 或 host:port，未指定端口时默认 22

  - opts: 可选配置，例如 ssh.username、ssh.password、ssh.privateKey、ssh.port、ssh.timeout



返回值:

  - SSH 客户端对象，可调用 Run/RunScript/UploadFile 等方法

  - 错误信息，连接或认证失败时返回非空




Example:

``````````````yak
// 建立 SSH 连接并执行命令，依赖目标服务，此处仅作示意
client = ssh.Connect("example.com:22", ssh.username("root"), ssh.password("pass"), ssh.timeout(5))~
defer client.Close()
output = client.Run("whoami")~
println(output)
``````````````


#### 定义

`Connect(host string, opts ...SSHOption) (*SSHClient, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| host | `string` | 目标地址，格式为 host 或 host:port，未指定端口时默认 22 |
| opts | `...SSHOption` | 可选配置，例如 ssh.username、ssh.password、ssh.privateKey、ssh.port、ssh.timeout |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*SSHClient` | SSH 客户端对象，可调用 Run/RunScript/UploadFile 等方法 |
| r2 | `error` | 错误信息，连接或认证失败时返回非空 |


### ConnectWithKey

#### 详细描述
ConnectWithKey 使用私钥认证连接到 SSH 服务器，返回 SSH 客户端

参数:

  - host: 目标地址，格式为 host 或 host:port，未指定端口时默认 22

  - username: 登录用户名

  - keyPath: 私钥文件路径



返回值:

  - SSH 客户端对象，可调用 Run/RunScript/UploadFile 等方法

  - 错误信息，连接或认证失败时返回非空




Example:

``````````````yak
// 使用私钥连接 SSH 并执行命令，依赖目标服务，此处仅作示意
client = ssh.ConnectWithKey("example.com:22", "root", "/path/to/id_rsa")~
defer client.Close()
output = client.Run("uname -a")~
println(output)
``````````````


#### 定义

`ConnectWithKey(host string, username string, keyPath string) (*SSHClient, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| host | `string` | 目标地址，格式为 host 或 host:port，未指定端口时默认 22 |
| username | `string` | 登录用户名 |
| keyPath | `string` | 私钥文件路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*SSHClient` | SSH 客户端对象，可调用 Run/RunScript/UploadFile 等方法 |
| r2 | `error` | 错误信息，连接或认证失败时返回非空 |


### ConnectWithPasswd

#### 详细描述
ConnectWithPasswd 使用密码认证连接到 SSH 服务器，返回 SSH 客户端

参数:

  - host: 目标地址，格式为 host 或 host:port，未指定端口时默认 22

  - username: 登录用户名

  - password: 登录密码



返回值:

  - SSH 客户端对象，可调用 Run/RunScript/UploadFile 等方法

  - 错误信息，连接或认证失败时返回非空




Example:

``````````````yak
// 使用密码连接 SSH 并执行命令，依赖目标服务，此处仅作示意
client = ssh.ConnectWithPasswd("example.com:22", "root", "password")~
defer client.Close()
output = client.Run("id")~
println(output)
``````````````


#### 定义

`ConnectWithPasswd(host string, username string, password string) (*SSHClient, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| host | `string` | 目标地址，格式为 host 或 host:port，未指定端口时默认 22 |
| username | `string` | 登录用户名 |
| password | `string` | 登录密码 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*SSHClient` | SSH 客户端对象，可调用 Run/RunScript/UploadFile 等方法 |
| r2 | `error` | 错误信息，连接或认证失败时返回非空 |


### keyPassphrase

#### 详细描述
keyPassphrase 是一个 SSH 连接配置选项，用于设置加密私钥的口令

参数:

  - passphrase: 私钥口令



返回值:

  - 一个 SSH 连接配置选项，作为可变参数传入 ssh.Connect




Example:

``````````````yak
// 使用带口令的私钥建立 SSH 连接，此处仅作示意
client = ssh.Connect("example.com:22", ssh.username("root"), ssh.privateKey("/path/to/id_rsa"), ssh.keyPassphrase("secret"))~
defer client.Close()
``````````````


#### 定义

`keyPassphrase(passphrase string) SSHOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| passphrase | `string` | 私钥口令 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `SSHOption` | 一个 SSH 连接配置选项，作为可变参数传入 ssh.Connect |


### password

#### 详细描述
password 是一个 SSH 连接配置选项，用于设置登录密码

参数:

  - password: 登录密码



返回值:

  - 一个 SSH 连接配置选项，作为可变参数传入 ssh.Connect




Example:

``````````````yak
// 指定用户名密码建立 SSH 连接，此处仅作示意
client = ssh.Connect("example.com:22", ssh.username("root"), ssh.password("pass"))~
defer client.Close()
``````````````


#### 定义

`password(password string) SSHOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| password | `string` | 登录密码 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `SSHOption` | 一个 SSH 连接配置选项，作为可变参数传入 ssh.Connect |


### port

#### 详细描述
port 是一个 SSH 连接配置选项，用于设置 SSH 服务器端口

参数:

  - port: SSH 服务器端口，默认 22



返回值:

  - 一个 SSH 连接配置选项，作为可变参数传入 ssh.Connect




Example:

``````````````yak
// 指定端口建立 SSH 连接，此处仅作示意
client = ssh.Connect("example.com", ssh.port(2222), ssh.username("root"), ssh.password("pass"))~
defer client.Close()
``````````````


#### 定义

`port(port int) SSHOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| port | `int` | SSH 服务器端口，默认 22 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `SSHOption` | 一个 SSH 连接配置选项，作为可变参数传入 ssh.Connect |


### privateKey

#### 详细描述
privateKey 是一个 SSH 连接配置选项，用于设置私钥文件路径以进行密钥认证

参数:

  - keyPath: 私钥文件路径



返回值:

  - 一个 SSH 连接配置选项，作为可变参数传入 ssh.Connect




Example:

``````````````yak
// 使用私钥建立 SSH 连接，此处仅作示意
client = ssh.Connect("example.com:22", ssh.username("root"), ssh.privateKey("/path/to/id_rsa"))~
defer client.Close()
``````````````


#### 定义

`privateKey(keyPath string) SSHOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| keyPath | `string` | 私钥文件路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `SSHOption` | 一个 SSH 连接配置选项，作为可变参数传入 ssh.Connect |


### timeout

#### 详细描述
timeout 是一个 SSH 连接配置选项，用于设置连接超时时间（单位：秒）

参数:

  - timeout: 超时时间，单位为秒，支持小数



返回值:

  - 一个 SSH 连接配置选项，作为可变参数传入 ssh.Connect




Example:

``````````````yak
// 设置连接超时建立 SSH 连接，此处仅作示意
client = ssh.Connect("example.com:22", ssh.username("root"), ssh.password("pass"), ssh.timeout(5))~
defer client.Close()
``````````````


#### 定义

`timeout(timeout float64) SSHOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| timeout | `float64` | 超时时间，单位为秒，支持小数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `SSHOption` | 一个 SSH 连接配置选项，作为可变参数传入 ssh.Connect |


### username

#### 详细描述
username 是一个 SSH 连接配置选项，用于设置登录用户名

参数:

  - username: 登录用户名



返回值:

  - 一个 SSH 连接配置选项，作为可变参数传入 ssh.Connect




Example:

``````````````yak
// 指定用户名密码建立 SSH 连接，此处仅作示意
client = ssh.Connect("example.com:22", ssh.username("root"), ssh.password("pass"))~
defer client.Close()
``````````````


#### 定义

`username(username string) SSHOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| username | `string` | 登录用户名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `SSHOption` | 一个 SSH 连接配置选项，作为可变参数传入 ssh.Connect |


