# os

|实例名|实例描述|
|:------|:--------|
ARCH|(string) &#34;arm64&#34;|
Args|([]string) Command line arguments|
IsPrivileged|(bool) false|
OS|(string) &#34;darwin&#34;|
Stderr|(os.File) &amp;os.File{file: &amp;os.file{pfd: poll.FD{fdmu: poll.fdMutex{state: 0, rsema: 0, wsema: 0}, Sysfd: 2, SysFile: poll.SysFile{iovecs: (*[]syscall.Iovec)(nil)}, pd: poll.pollDesc{runtimeCtx: 0}, csema: 0, isBlocking: 1, IsStream: true, ZeroReadIsEOF: true, isFile: true}, name: &#34;/dev/stderr&#34;, dirinfo: &lt;Already printed&gt;, nonblock: false, stdoutOrErr: true, appendMode: false}}|
Stdin|(os.File) &amp;os.File{file: &amp;os.file{pfd: poll.FD{fdmu: poll.fdMutex{state: 0, rsema: 0, wsema: 0}, Sysfd: 0, SysFile: poll.SysFile{iovecs: (*[]syscall.Iovec)(nil)}, pd: poll.pollDesc{runtimeCtx: 0}, csema: 0, isBlocking: 1, IsStream: true, ZeroReadIsEOF: true, isFile: true}, name: &#34;/dev/stdin&#34;, dirinfo: &lt;Already printed&gt;, nonblock: false, stdoutOrErr: false, appendMode: false}}|
Stdout|(os.File) &amp;os.File{file: &amp;os.file{pfd: poll.FD{fdmu: poll.fdMutex{state: 0, rsema: 0, wsema: 0}, Sysfd: 1, SysFile: poll.SysFile{iovecs: (*[]syscall.Iovec)(nil)}, pd: poll.pollDesc{runtimeCtx: 0}, csema: 0, isBlocking: 1, IsStream: true, ZeroReadIsEOF: true, isFile: true}, name: &#34;/dev/stdout&#34;, dirinfo: &lt;Already printed&gt;, nonblock: false, stdoutOrErr: true, appendMode: false}}|

|函数名|函数描述/介绍|
|:------|:--------|
| [os.Chdir](#chdir) |Chdir 改变当前工作目录 参数: - dir: 目标工作目录路径 返回值: - 错误信息|
| [os.Chmod](#chmod) |Chmod 改变指定文件或目录的权限 参数: - name: 文件或目录路径 - mode: 目标权限（如 0o777） 返回值: - 错误信息|
| [os.Chown](#chown) |Chown 改变指定文件或目录的所有者和所属组 参数: - name: 文件或目录路径 - uid: 新的所有者用户 ID - gid: 新的所属组 ID 返回值: - 错误信息|
| [os.Clearenv](#clearenv) |Clearenv 清空当前进程的所有环境变量|
| [os.Environ](#environ) |Environ 获取表示环境变量的字符串切片，格式为&#34;key=value&#34; 返回值: - 形如 &#34;key=value&#34; 的环境变量字符串切片|
| [os.Executable](#executable) |Executable 获取当前可执行文件的路径 返回值: - 当前可执行文件的绝对路径 - 错误信息|
| [os.Exit](#exit) |Exit 以指定状态码退出当前进程 参数: - code: 进程退出状态码（0 表示成功）|
| [os.ExpandEnv](#expandenv) |ExpandEnv 将字符串中的 ${var} 或 $var 替换为其对应环境变量的值 参数: - s: 含有环境变量引用的字符串 返回值: - 替换后的字符串|
| [os.GetDefaultDNSServers](#getdefaultdnsservers) |GetDefaultDNSServers 获取默认的DNS服务器ip对应的字符串切片 返回值: - 默认 DNS 服务器 IP 字符串切片|
| [os.GetHomeDir](#gethomedir) |GetHomeDir 获取当前用户的家目录 返回值: - 当前用户的家目录路径|
| [os.GetLocalAddress](#getlocaladdress) |GetLocalAddress 获取本地IP地址 返回值: - 本地网卡 IP 地址字符串切片|
| [os.GetLocalIPv4Address](#getlocalipv4address) |GetLocalIPv4Address 获取本地IPv4地址 返回值: - 本地非回环 IPv4 地址字符串切片|
| [os.GetLocalIPv6Address](#getlocalipv6address) |GetLocalIPv6Address 获取本地IPv6地址 返回值: - 本地非回环 IPv6 地址字符串切片|
| [os.GetMachineID](#getmachineid) |GetMachineID 获取每个机器唯一的标识符 返回值: - 当前机器的唯一标识字符串|
| [os.GetRandomAvailableTCPPort](#getrandomavailabletcpport) |GetRandomAvailableTCPPort 获取一个随机可用的TCP端口 返回值: - 一个当前可用的 TCP 端口号|
| [os.GetRandomAvailableUDPPort](#getrandomavailableudpport) |GetRandomAvailableUDPPort 获取一个随机可用的UDP端口 返回值: - 一个当前可用的 UDP 端口号|
| [os.Getegid](#getegid) |Getegid 获取当前进程的有效组ID 返回值: - 当前进程的有效组 ID|
| [os.Getenv](#getenv) |Getenv 获取指定的环境变量的值，如果不存在则返回空字符串 参数: - key: 环境变量名 返回值: - 环境变量的值，不存在时为空字符串|
| [os.Geteuid](#geteuid) |Geteuid 获取当前进程的有效用户ID 返回值: - 当前进程的有效用户 ID|
| [os.Getgid](#getgid) |Getgid 获取当前进程的组ID 返回值: - 当前进程的组 ID|
| [os.Getpid](#getpid) |Getpid 获取当前进程的进程ID 返回值: - 当前进程 ID|
| [os.Getppid](#getppid) |Getppid 获取当前进程的父进程ID 返回值: - 当前进程的父进程 ID|
| [os.Getuid](#getuid) |Getuid 获取当前进程的用户ID 返回值: - 当前进程的用户 ID|
| [os.Getwd](#getwd) |Getwd 获取当前工作目录路径 返回值: - 当前工作目录路径 - 错误信息|
| [os.Hostname](#hostname) |Hostname 获取主机名 返回值: - 主机名 - 错误信息|
| [os.IsRemoteTCPPortOpen](#isremotetcpportopen) |IsRemoteTCPPortOpen 检查远程主机的TCP端口是否开放 参数: - host: 远程主机地址（域名或 IP） - p: 待检查的 TCP 端口号 返回值: - 远程端口是否开放|
| [os.IsTCPPortAvailable](#istcpportavailable) |IsTCPPortAvailable 检查本地TCP端口是否可用（未被占用） 参数: - p: 待检查的 TCP 端口号 返回值: - 端口是否可用（可被监听）|
| [os.IsTCPPortOpen](#istcpportopen) |IsTCPPortOpen 检查本地TCP端口是否开放（被占用） 参数: - p: 待检查的 TCP 端口号 返回值: - 端口是否开放（已被监听）|
| [os.IsUDPPortAvailable](#isudpportavailable) |IsUDPPortAvailable 检查本地UDP端口是否可用（未被占用） 参数: - p: 待检查的 UDP 端口号 返回值: - 端口是否可用|
| [os.IsUDPPortOpen](#isudpportopen) |IsUDPPortOpen 检查本地UDP端口是否开放（被占用） 参数: - p: 待检查的 UDP 端口号 返回值: - 端口是否开放（已被占用）|
| [os.LookupEnv](#lookupenv) |LookupEnv 获取指定的环境变量的值，并返回该变量是否存在 参数: - key: 环境变量名 返回值: - 环境变量的值 - 该环境变量是否存在|
| [os.LookupHost](#lookuphost) |LookupHost 通过DNS服务器，根据域名查找IP 参数: - i: 待查询的域名 返回值: - 解析得到的 IP 字符串切片|
| [os.LookupIP](#lookupip) |LookupIP 通过DNS服务器，根据域名查找IP 参数: - i: 待查询的域名 返回值: - 解析得到的 IP 字符串切片|
| [os.NewConnectionsWatcher](#newconnectionswatcher) |NewConnectionsWatcher 针对单个进程创建一个网络连接监控器，发现新的远程 IP 时回调通知 参数: - pid: 待监控的进程 ID - cb: 发现新远程 IP 时的回调函数，签名为 func(pid, remoteIP) - interval: 轮询连接的时间间隔 返回值: ...|
| [os.NewProcessWatcher](#newprocesswatcher) |NewProcessWatcher 创建并初始化一个新的系统进程监控器，用于监控进程的创建与退出 返回值: - 进程监控器对象|
| [os.Pipe](#pipe) |Pipe 创建一个管道，返回一个读取端和一个写入端以及错误 它实际是 io.Pipe 的别名 返回值: - 管道的读取端文件对象 - 管道的写入端文件对象 - 错误信息|
| [os.Remove](#remove) |Remove 删除指定的文件或空目录 参数: - name: 待删除的文件或目录路径 返回值: - 错误信息|
| [os.RemoveAll](#removeall) |RemoveAll 递归删除指定的路径及其包含的所有子路径 参数: - name: 待删除的路径 返回值: - 错误信息|
| [os.Rename](#rename) |Rename 重命名文件或目录，可以用于移动文件或目录 参数: - oldpath: 原路径 - newpath: 目标路径 返回值: - 错误信息|
| [os.Setenv](#setenv) |Setenv 设置指定的环境变量 参数: - key: 环境变量名 - value: 环境变量值 返回值: - 错误信息|
| [os.TempDir](#tempdir) |TempDir 获取用于存放临时文件的默认目录路径 返回值: - 系统临时目录路径|
| [os.Unsetenv](#unsetenv) |Unsetenv 删除指定的环境变量 参数: - key: 待删除的环境变量名 返回值: - 错误信息|
| [os.WaitConnect](#waitconnect) |WaitConnect 等待一个地址的端口开放，直到超时，如果超时则返回错误，这通常用于等待并确保一个服务启动 参数: - addr: 目标地址（host:port） - timeout: 最长等待时间（秒） 返回值: - 错误信息（超时或连接失败时非空）|


## 函数定义
### Chdir

#### 详细描述
Chdir 改变当前工作目录

参数:

  - dir: 目标工作目录路径



返回值:

  - 错误信息




Example:

``````````````yak
err = os.Chdir("/tmp")
``````````````


#### 定义

`Chdir(dir string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| dir | `string` | 目标工作目录路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### Chmod

#### 详细描述
Chmod 改变指定文件或目录的权限

参数:

  - name: 文件或目录路径

  - mode: 目标权限（如 0o777）



返回值:

  - 错误信息




Example:

``````````````yak
err = os.Chmod("/tmp/test.txt", 0777)
``````````````


#### 定义

`Chmod(name string, mode os.FileMode) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 文件或目录路径 |
| mode | `os.FileMode` | 目标权限（如 0o777） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### Chown

#### 详细描述
Chown 改变指定文件或目录的所有者和所属组

参数:

  - name: 文件或目录路径

  - uid: 新的所有者用户 ID

  - gid: 新的所属组 ID



返回值:

  - 错误信息




Example:

``````````````yak
err = os.Chown("/var/www/html/test.txt", 1000, 1000)
``````````````


#### 定义

`Chown(name string, uid int, gid int) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 文件或目录路径 |
| uid | `int` | 新的所有者用户 ID |
| gid | `int` | 新的所属组 ID |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### Clearenv

#### 详细描述
Clearenv 清空当前进程的所有环境变量


Example:

``````````````yak
os.Clearenv()
``````````````


#### 定义

`Clearenv()`


### Environ

#### 详细描述
Environ 获取表示环境变量的字符串切片，格式为&#34;key=value&#34;

返回值:

  - 形如 &#34;key=value&#34; 的环境变量字符串切片




Example:

``````````````yak
for env in os.Environ() {
value = env.SplitN("=", 2)
printf("key = %s, value = %v\n", value[0], value[1])
}
``````````````


#### 定义

`Environ() []string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 形如 &#34;key=value&#34; 的环境变量字符串切片 |


### Executable

#### 详细描述
Executable 获取当前可执行文件的路径

返回值:

  - 当前可执行文件的绝对路径

  - 错误信息




Example:

``````````````yak
path, err = os.Executable()
``````````````


#### 定义

`Executable() (string, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 当前可执行文件的绝对路径 |
| r2 | `error` | 错误信息 |


### Exit

#### 详细描述
Exit 以指定状态码退出当前进程

参数:

  - code: 进程退出状态码（0 表示成功）




Example:

``````````````yak
os.Exit(0)
``````````````


#### 定义

`Exit(code int)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| code | `int` | 进程退出状态码（0 表示成功） |


### ExpandEnv

#### 详细描述
ExpandEnv 将字符串中的 ${var} 或 $var 替换为其对应环境变量的值

参数:

  - s: 含有环境变量引用的字符串



返回值:

  - 替换后的字符串




Example:

``````````````yak
os.Setenv("YAK_DOC_EXPAND", "yak")
result = os.ExpandEnv("hello $YAK_DOC_EXPAND")
println(result)   // OUT: hello yak
assert result == "hello yak", "ExpandEnv should substitute the variable value"
``````````````


#### 定义

`ExpandEnv(s string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` | 含有环境变量引用的字符串 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 替换后的字符串 |


### GetDefaultDNSServers

#### 详细描述
GetDefaultDNSServers 获取默认的DNS服务器ip对应的字符串切片

返回值:

  - 默认 DNS 服务器 IP 字符串切片




Example:

``````````````yak
os.GetDefaultDNSServers()
``````````````


#### 定义

`GetDefaultDNSServers() []string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 默认 DNS 服务器 IP 字符串切片 |


### GetHomeDir

#### 详细描述
GetHomeDir 获取当前用户的家目录

返回值:

  - 当前用户的家目录路径




Example:

``````````````yak
os.GetHomeDir() // "/Users/yaklang"
``````````````


#### 定义

`GetHomeDir() string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 当前用户的家目录路径 |


### GetLocalAddress

#### 详细描述
GetLocalAddress 获取本地IP地址

返回值:

  - 本地网卡 IP 地址字符串切片




Example:

``````````````yak
os.GetLocalAddress() // ["192.168.1.103", "fe80::605a:5ff:fefb:5405"]
``````````````


#### 定义

`GetLocalAddress() []string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 本地网卡 IP 地址字符串切片 |


### GetLocalIPv4Address

#### 详细描述
GetLocalIPv4Address 获取本地IPv4地址

返回值:

  - 本地非回环 IPv4 地址字符串切片




Example:

``````````````yak
os.GetLocalIPv4Address() // ["192.168.3.103"]
``````````````


#### 定义

`GetLocalIPv4Address() []string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 本地非回环 IPv4 地址字符串切片 |


### GetLocalIPv6Address

#### 详细描述
GetLocalIPv6Address 获取本地IPv6地址

返回值:

  - 本地非回环 IPv6 地址字符串切片




Example:

``````````````yak
os.GetLocalIPv6Address() // ["fe80::605a:5ff:fefb:5405"]
``````````````


#### 定义

`GetLocalIPv6Address() []string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 本地非回环 IPv6 地址字符串切片 |


### GetMachineID

#### 详细描述
GetMachineID 获取每个机器唯一的标识符

返回值:

  - 当前机器的唯一标识字符串




Example:

``````````````yak
os.GetMachineID()
``````````````


#### 定义

`GetMachineID() string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 当前机器的唯一标识字符串 |


### GetRandomAvailableTCPPort

#### 详细描述
GetRandomAvailableTCPPort 获取一个随机可用的TCP端口

返回值:

  - 一个当前可用的 TCP 端口号




Example:

``````````````yak
tcp.Serve("127.0.0.1", os.GetRandomAvailableTCPPort())
``````````````


#### 定义

`GetRandomAvailableTCPPort() int`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` | 一个当前可用的 TCP 端口号 |


### GetRandomAvailableUDPPort

#### 详细描述
GetRandomAvailableUDPPort 获取一个随机可用的UDP端口

返回值:

  - 一个当前可用的 UDP 端口号




Example:

``````````````yak
udp.Serve("127.0.0.1", os.GetRandomAvailableTCPPort())
``````````````


#### 定义

`GetRandomAvailableUDPPort() int`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` | 一个当前可用的 UDP 端口号 |


### Getegid

#### 详细描述
Getegid 获取当前进程的有效组ID

返回值:

  - 当前进程的有效组 ID




Example:

``````````````yak
os.Getegid()
``````````````


#### 定义

`Getegid() int`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` | 当前进程的有效组 ID |


### Getenv

#### 详细描述
Getenv 获取指定的环境变量的值，如果不存在则返回空字符串

参数:

  - key: 环境变量名



返回值:

  - 环境变量的值，不存在时为空字符串




Example:

``````````````yak
os.Setenv("YAK_DOC_GET", "world")
value = os.Getenv("YAK_DOC_GET")
println(value)   // OUT: world
assert value == "world", "Getenv should return the value set by Setenv"
``````````````


#### 定义

`Getenv(key string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` | 环境变量名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 环境变量的值，不存在时为空字符串 |


### Geteuid

#### 详细描述
Geteuid 获取当前进程的有效用户ID

返回值:

  - 当前进程的有效用户 ID




Example:

``````````````yak
os.Geteuid()
``````````````


#### 定义

`Geteuid() int`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` | 当前进程的有效用户 ID |


### Getgid

#### 详细描述
Getgid 获取当前进程的组ID

返回值:

  - 当前进程的组 ID




Example:

``````````````yak
os.Getgid()
``````````````


#### 定义

`Getgid() int`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` | 当前进程的组 ID |


### Getpid

#### 详细描述
Getpid 获取当前进程的进程ID

返回值:

  - 当前进程 ID




Example:

``````````````yak
os.Getpid()
``````````````


#### 定义

`Getpid() int`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` | 当前进程 ID |


### Getppid

#### 详细描述
Getppid 获取当前进程的父进程ID

返回值:

  - 当前进程的父进程 ID




Example:

``````````````yak
os.Getppid()
``````````````


#### 定义

`Getppid() int`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` | 当前进程的父进程 ID |


### Getuid

#### 详细描述
Getuid 获取当前进程的用户ID

返回值:

  - 当前进程的用户 ID




Example:

``````````````yak
os.Getuid()
``````````````


#### 定义

`Getuid() int`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` | 当前进程的用户 ID |


### Getwd

#### 详细描述
Getwd 获取当前工作目录路径

返回值:

  - 当前工作目录路径

  - 错误信息




Example:

``````````````yak
cwd, err = os.Getwd()
``````````````


#### 定义

`Getwd() (string, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 当前工作目录路径 |
| r2 | `error` | 错误信息 |


### Hostname

#### 详细描述
Hostname 获取主机名

返回值:

  - 主机名

  - 错误信息




Example:

``````````````yak
name, err = os.Hostname()
``````````````


#### 定义

`Hostname() (name string, err error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| name | `string` | 主机名 |
| err | `error` | 错误信息 |


### IsRemoteTCPPortOpen

#### 详细描述
IsRemoteTCPPortOpen 检查远程主机的TCP端口是否开放

参数:

  - host: 远程主机地址（域名或 IP）

  - p: 待检查的 TCP 端口号



返回值:

  - 远程端口是否开放




Example:

``````````````yak
os.IsRemoteTCPPortOpen("yaklang.com", 443) // true
``````````````


#### 定义

`IsRemoteTCPPortOpen(host string, p int) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| host | `string` | 远程主机地址（域名或 IP） |
| p | `int` | 待检查的 TCP 端口号 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 远程端口是否开放 |


### IsTCPPortAvailable

#### 详细描述
IsTCPPortAvailable 检查本地TCP端口是否可用（未被占用）

参数:

  - p: 待检查的 TCP 端口号



返回值:

  - 端口是否可用（可被监听）




Example:

``````````````yak
os.IsTCPPortAvailable(80)
``````````````


#### 定义

`IsTCPPortAvailable(p int) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| p | `int` | 待检查的 TCP 端口号 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 端口是否可用（可被监听） |


### IsTCPPortOpen

#### 详细描述
IsTCPPortOpen 检查本地TCP端口是否开放（被占用）

参数:

  - p: 待检查的 TCP 端口号



返回值:

  - 端口是否开放（已被监听）




Example:

``````````````yak
os.IsTCPPortOpen(80)
``````````````


#### 定义

`IsTCPPortOpen(p int) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| p | `int` | 待检查的 TCP 端口号 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 端口是否开放（已被监听） |


### IsUDPPortAvailable

#### 详细描述
IsUDPPortAvailable 检查本地UDP端口是否可用（未被占用）

参数:

  - p: 待检查的 UDP 端口号



返回值:

  - 端口是否可用




Example:

``````````````yak
os.IsUDPPortAvailable(80)
``````````````


#### 定义

`IsUDPPortAvailable(p int) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| p | `int` | 待检查的 UDP 端口号 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 端口是否可用 |


### IsUDPPortOpen

#### 详细描述
IsUDPPortOpen 检查本地UDP端口是否开放（被占用）

参数:

  - p: 待检查的 UDP 端口号



返回值:

  - 端口是否开放（已被占用）




Example:

``````````````yak
os.IsUDPPortOpen(80)
``````````````


#### 定义

`IsUDPPortOpen(p int) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| p | `int` | 待检查的 UDP 端口号 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` | 端口是否开放（已被占用） |


### LookupEnv

#### 详细描述
LookupEnv 获取指定的环境变量的值，并返回该变量是否存在

参数:

  - key: 环境变量名



返回值:

  - 环境变量的值

  - 该环境变量是否存在




Example:

``````````````yak
os.Setenv("YAK_DOC_LOOKUP", "hello")
value, ok = os.LookupEnv("YAK_DOC_LOOKUP")
println(value)   // OUT: hello
assert ok, "LookupEnv should report the variable exists"
assert value == "hello", "LookupEnv should return the variable value"
``````````````


#### 定义

`LookupEnv(key string) (string, bool)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` | 环境变量名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 环境变量的值 |
| r2 | `bool` | 该环境变量是否存在 |


### LookupHost

#### 详细描述
LookupHost 通过DNS服务器，根据域名查找IP

参数:

  - i: 待查询的域名



返回值:

  - 解析得到的 IP 字符串切片




Example:

``````````````yak
os.LookupHost("www.yaklang.com")
``````````````


#### 定义

`LookupHost(i string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` | 待查询的域名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 解析得到的 IP 字符串切片 |


### LookupIP

#### 详细描述
LookupIP 通过DNS服务器，根据域名查找IP

参数:

  - i: 待查询的域名



返回值:

  - 解析得到的 IP 字符串切片




Example:

``````````````yak
os.LookupIP("www.yaklang.com")
``````````````


#### 定义

`LookupIP(i string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` | 待查询的域名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` | 解析得到的 IP 字符串切片 |


### NewConnectionsWatcher

#### 详细描述
NewConnectionsWatcher 针对单个进程创建一个网络连接监控器，发现新的远程 IP 时回调通知

参数:

  - pid: 待监控的进程 ID

  - cb: 发现新远程 IP 时的回调函数，签名为 func(pid, remoteIP)

  - interval: 轮询连接的时间间隔



返回值:

  - 连接监控器对象

  - 错误信息（进程不存在时非空）




Example:

``````````````yak
w = os.NewConnectionsWatcher(os.Getpid(), (pid, ip) => {
    log.info("process %v connects to %v", pid, ip)
}, 1 * time.Second)~
``````````````


#### 定义

`NewConnectionsWatcher(pid int32, cb NewRemoteIPCallback, interval time.Duration) (*ConnectionsWatcher, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pid | `int32` | 待监控的进程 ID |
| cb | `NewRemoteIPCallback` | 发现新远程 IP 时的回调函数，签名为 func(pid, remoteIP) |
| interval | `time.Duration` | 轮询连接的时间间隔 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ConnectionsWatcher` | 连接监控器对象 |
| r2 | `error` | 错误信息（进程不存在时非空） |


### NewProcessWatcher

#### 详细描述
NewProcessWatcher 创建并初始化一个新的系统进程监控器，用于监控进程的创建与退出

返回值:

  - 进程监控器对象




Example:

``````````````yak
w = os.NewProcessWatcher()
// 通过 w.Start(...) 启动监控
``````````````


#### 定义

`NewProcessWatcher() *ProcessesWatcher`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*ProcessesWatcher` | 进程监控器对象 |


### Pipe

#### 详细描述
Pipe 创建一个管道，返回一个读取端和一个写入端以及错误

它实际是 io.Pipe 的别名

返回值:

  - 管道的读取端文件对象

  - 管道的写入端文件对象

  - 错误信息




Example:

``````````````yak
r, w, err = os.Pipe()
die(err)

	go func {
	    w.WriteString("hello yak")
	    w.Close()
	}

bytes, err = io.ReadAll(r)
die(err)
dump(bytes)
``````````````


#### 定义

`Pipe() (r *os.File, w *os.File, err error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r | `*os.File` | 管道的读取端文件对象 |
| w | `*os.File` | 管道的写入端文件对象 |
| err | `error` | 错误信息 |


### Remove

#### 详细描述
Remove 删除指定的文件或空目录

参数:

  - name: 待删除的文件或目录路径



返回值:

  - 错误信息




Example:

``````````````yak
os.Remove("/tmp/test.txt")
``````````````


#### 定义

`Remove(name string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 待删除的文件或目录路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### RemoveAll

#### 详细描述
RemoveAll 递归删除指定的路径及其包含的所有子路径

参数:

  - name: 待删除的路径



返回值:

  - 错误信息




Example:

``````````````yak
os.RemoveAll("/tmp")
``````````````


#### 定义

`RemoveAll(name string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 待删除的路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### Rename

#### 详细描述
Rename 重命名文件或目录，可以用于移动文件或目录

参数:

  - oldpath: 原路径

  - newpath: 目标路径



返回值:

  - 错误信息




Example:

``````````````yak
os.Rename("/tmp/test.txt", "/tmp/test2.txt")
os.Rename("/tmp/test", "/root/test")
``````````````


#### 定义

`Rename(oldpath string, newpath string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| oldpath | `string` | 原路径 |
| newpath | `string` | 目标路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### Setenv

#### 详细描述
Setenv 设置指定的环境变量

参数:

  - key: 环境变量名

  - value: 环境变量值



返回值:

  - 错误信息




Example:

``````````````yak
os.Setenv("YAK_DOC_SET", "yaklang")
println(os.Getenv("YAK_DOC_SET"))   // OUT: yaklang
assert os.Getenv("YAK_DOC_SET") == "yaklang", "Setenv then Getenv should round-trip"
``````````````


#### 定义

`Setenv(key string, value string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` | 环境变量名 |
| value | `string` | 环境变量值 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### TempDir

#### 详细描述
TempDir 获取用于存放临时文件的默认目录路径

返回值:

  - 系统临时目录路径




Example:

``````````````yak
dir = os.TempDir()
assert dir != "", "TempDir should return a non-empty path"
assert file.IsDir(dir), "TempDir should point to an existing directory"
``````````````


#### 定义

`TempDir() string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 系统临时目录路径 |


### Unsetenv

#### 详细描述
Unsetenv 删除指定的环境变量

参数:

  - key: 待删除的环境变量名



返回值:

  - 错误信息




Example:

``````````````yak
os.Setenv("YAK_DOC_UNSET", "v")
os.Unsetenv("YAK_DOC_UNSET")
assert os.Getenv("YAK_DOC_UNSET") == "", "Unsetenv should remove the environment variable"
``````````````


#### 定义

`Unsetenv(key string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` | 待删除的环境变量名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息 |


### WaitConnect

#### 详细描述
WaitConnect 等待一个地址的端口开放，直到超时，如果超时则返回错误，这通常用于等待并确保一个服务启动

参数:

  - addr: 目标地址（host:port）

  - timeout: 最长等待时间（秒）



返回值:

  - 错误信息（超时或连接失败时非空）




Example:

``````````````yak
timeout, _ = time.ParseDuration("1m")
ctx, cancel = context.WithTimeout(context.New(), timeout)

	go func() {
	    err = tcp.Serve("127.0.0.1", 8888, tcp.serverCallback(func (conn) {
	    conn.Send("hello world")
	    conn.Close()
	}), tcp.serverContext(ctx))

	    die(err)
	}()

os.WaitConnect("127.0.0.1:8888", 5)~ // 等待tcp服务器启动
conn = tcp.Connect("127.0.0.1", 8888)~
bytes = conn.Recv()~
println(string(bytes))
``````````````


#### 定义

`WaitConnect(addr string, timeout float64) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| addr | `string` | 目标地址（host:port） |
| timeout | `float64` | 最长等待时间（秒） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` | 错误信息（超时或连接失败时非空） |


