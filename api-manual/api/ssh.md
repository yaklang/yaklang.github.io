# ssh

|函数名|函数描述/介绍|
|:------|:--------|
| [ssh.Connect](#connect) |SSHConnect establishes an SSH connection with flexible options  |
| [ssh.ConnectWithKey](#connectwithkey) |SSHConnectWithKey connects to SSH server using private key  |
| [ssh.ConnectWithPasswd](#connectwithpasswd) |SSHConnectWithPasswd connects to SSH server using password  |
| [ssh.keyPassphrase](#keypassphrase) |WithSSHKeyPassphrase sets the passphrase for encrypted private key |
| [ssh.password](#password) |WithSSHPassword sets the SSH password |
| [ssh.port](#port) |WithSSHPort sets the SSH port |
| [ssh.privateKey](#privatekey) |WithSSHPrivateKey sets the path to SSH private key |
| [ssh.timeout](#timeout) |WithSSHTimeout sets the connection timeout in seconds |
| [ssh.username](#username) |WithSSHUsername sets the SSH username |


## 函数定义
### Connect

#### 详细描述
SSHConnect establishes an SSH connection with flexible options

Example:

	client, err = ssh.Connect("example.com:22", ssh.username("root"), ssh.password("pass"))
	client, err = ssh.Connect("example.com", ssh.username("admin"), ssh.privateKey("/path/to/key"))


#### 定义

`Connect(host string, opts ...SSHOption) (*SSHClient, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| host | `string` |   |
| opts | `...SSHOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*SSHClient` |   |
| r2 | `error` |   |


### ConnectWithKey

#### 详细描述
SSHConnectWithKey connects to SSH server using private key

Example:

	client, err = ssh.ConnectWithKey("example.com:22", "root", "/path/to/id_rsa")


#### 定义

`ConnectWithKey(host string, username string, keyPath string) (*SSHClient, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| host | `string` |   |
| username | `string` |   |
| keyPath | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*SSHClient` |   |
| r2 | `error` |   |


### ConnectWithPasswd

#### 详细描述
SSHConnectWithPasswd connects to SSH server using password

Example:

	client, err = ssh.ConnectWithPasswd("example.com:22", "root", "password")


#### 定义

`ConnectWithPasswd(host string, username string, password string) (*SSHClient, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| host | `string` |   |
| username | `string` |   |
| password | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*SSHClient` |   |
| r2 | `error` |   |


### keyPassphrase

#### 详细描述
WithSSHKeyPassphrase sets the passphrase for encrypted private key


#### 定义

`keyPassphrase(passphrase string) SSHOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| passphrase | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `SSHOption` |   |


### password

#### 详细描述
WithSSHPassword sets the SSH password


#### 定义

`password(password string) SSHOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| password | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `SSHOption` |   |


### port

#### 详细描述
WithSSHPort sets the SSH port


#### 定义

`port(port int) SSHOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| port | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `SSHOption` |   |


### privateKey

#### 详细描述
WithSSHPrivateKey sets the path to SSH private key


#### 定义

`privateKey(keyPath string) SSHOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| keyPath | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `SSHOption` |   |


### timeout

#### 详细描述
WithSSHTimeout sets the connection timeout in seconds


#### 定义

`timeout(timeout float64) SSHOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| timeout | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `SSHOption` |   |


### username

#### 详细描述
WithSSHUsername sets the SSH username


#### 定义

`username(username string) SSHOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| username | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `SSHOption` |   |


