# rdp

|函数名|函数描述/介绍|
|:------|:--------|
| [rdp.Login](#login) |Login 尝试登录 RDP（远程桌面）服务，用于验证给定凭据是否有效 参数: - ip: 目标主机 IP 地址 - domain: 登录所属的域，无域时可传空字符串 - user: 登录用户名 - password: 登录密码 - port: RDP 服务端口，通常为 3389 返回值: - 登录...|
| [rdp.Version](#version) |Version 探测目标 RDP 服务的操作系统版本信息 参数: - addr: 目标地址，格式为 host:port - timeout: 探测的超时时间 返回值: - 识别到的操作系统版本描述字符串 - 命中的版本指纹细节列表 - 错误信息，探测失败时返回非空|


## 函数定义
### Login

#### 详细描述
Login 尝试登录 RDP（远程桌面）服务，用于验证给定凭据是否有效

参数:

  - ip: 目标主机 IP 地址

  - domain: 登录所属的域，无域时可传空字符串

  - user: 登录用户名

  - password: 登录密码

  - port: RDP 服务端口，通常为 3389



返回值:

  - 登录是否成功

  - 错误信息，连接失败或认证失败时返回非空




Example:

``````````````yak
// 验证 RDP 凭据，依赖目标服务，此处仅作示意
ok, err = rdp.Login("192.168.1.1", "", "administrator", "123456", 3389)
println(ok)
``````````````


#### 定义

`Login(ip string, domain string, user string, password string, port int) (_ bool, err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ip | `string` | 目标主机 IP 地址 |
| domain | `string` | 登录所属的域，无域时可传空字符串 |
| user | `string` | 登录用户名 |
| password | `string` | 登录密码 |
| port | `int` | RDP 服务端口，通常为 3389 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| _ | `bool` | 登录是否成功 |
| err | `error` | 错误信息，连接失败或认证失败时返回非空 |


### Version

#### 详细描述
Version 探测目标 RDP 服务的操作系统版本信息

参数:

  - addr: 目标地址，格式为 host:port

  - timeout: 探测的超时时间



返回值:

  - 识别到的操作系统版本描述字符串

  - 命中的版本指纹细节列表

  - 错误信息，探测失败时返回非空




Example:

``````````````yak
// 探测 RDP 服务版本，依赖目标服务，此处仅作示意
version, details, err = rdp.Version("192.168.1.1:3389", 5)
println(version)
``````````````


#### 定义

`Version(addr string, timeout time.Duration) (_ string, _ []string, finalResult error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| addr | `string` | 目标地址，格式为 host:port |
| timeout | `time.Duration` | 探测的超时时间 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| _ | `string` | 识别到的操作系统版本描述字符串 |
| _ | `[]string` | 命中的版本指纹细节列表 |
| finalResult | `error` | 错误信息，探测失败时返回非空 |


