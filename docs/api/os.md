# os {#library-os}

`os` 库提供操作系统交互能力，覆盖环境变量、进程信息、主机/网络信息、本地端口探测与文件系统基础操作，是采集本机环境与做系统级判断的入口。

典型使用场景：

- 主机与网络信息：`os.Hostname` / `os.GetMachineID` / `os.GetHomeDir`，`os.GetLocalIPv4Address` / `os.GetLocalAddress` / `os.LookupIP` / `os.LookupHost` 获取地址与解析。
- 端口探测：`os.GetRandomAvailableTCPPort` 取空闲端口，`os.IsTCPPortOpen` / `os.IsRemoteTCPPortOpen` / `os.IsTCPPortAvailable` 判断端口状态，`os.WaitConnect` 等待可连接。
- 进程与环境：`os.Getpid` / `os.Getppid` / `os.Getuid`，`os.Getenv` / `os.Setenv` / `os.Environ` / `os.ExpandEnv` 管理环境变量。
- 文件与监控：`os.Remove` / `os.RemoveAll` / `os.Rename` / `os.TempDir`，`os.NewProcessWatcher` / `os.NewConnectionsWatcher` 监控进程/连接。

与相邻库的关系：`os` 与 `env`（环境变量）、`exec`（执行命令）、`file`（文件操作）、`hids`（主机监控）协同，是系统层信息采集的基础。

> 共 43 个函数、7 个实例

## 实例

|实例名|类型|说明|
|:--|:--|:--|
| ARCH | `string` | &#34;amd64&#34; |
| Args | `[]string` | Command line arguments |
| IsPrivileged | `bool` | false |
| OS | `string` | &#34;linux&#34; |
| Stderr | `os.File` | &amp;os.File{file: &amp;os.file{pfd: poll.FD{fdmu: poll.fdMutex{state: 0, rsema: 0, wsema: 0}, Sysfd: 2, SysFile: poll.SysFile{iovecs: (*[]syscall.Iovec)(nil)}, pd: poll.pollDesc{runtimeCtx: 0}, csema: 0, isBlocking: 1, IsStream: true, ZeroReadIsEOF: true, isFile: true}, name: &#34;/dev/stderr&#34;, dirinfo: atomic.Pointer[os.dirInfo]{_: [0]*os.dirInfo{}, _: atomic.noCopy{}, v: (unsafe.Pointer)(nil)}, nonblock: false, stdoutOrErr: true, appendMode: false}} |
| Stdin | `os.File` | &amp;os.File{file: &amp;os.file{pfd: poll.FD{fdmu: poll.fdMutex{state: 0, rsema: 0, wsema: 0}, Sysfd: 0, SysFile: poll.SysFile{iovecs: (*[]syscall.Iovec)(nil)}, pd: poll.pollDesc{runtimeCtx: 0}, csema: 0, isBlocking: 1, IsStream: true, ZeroReadIsEOF: true, isFile: true}, name: &#34;/dev/stdin&#34;, dirinfo: atomic.Pointer[os.dirInfo]{_: [0]*os.dirInfo{}, _: atomic.noCopy{}, v: (unsafe.Pointer)(nil)}, nonblock: false, stdoutOrErr: false, appendMode: false}} |
| Stdout | `os.File` | &amp;os.File{file: &amp;os.file{pfd: poll.FD{fdmu: poll.fdMutex{state: 0, rsema: 0, wsema: 0}, Sysfd: 1, SysFile: poll.SysFile{iovecs: (*[]syscall.Iovec)(nil)}, pd: poll.pollDesc{runtimeCtx: 0}, csema: 0, isBlocking: 1, IsStream: true, ZeroReadIsEOF: true, isFile: true}, name: &#34;/dev/stdout&#34;, dirinfo: atomic.Pointer[os.dirInfo]{_: [0]*os.dirInfo{}, _: atomic.noCopy{}, v: (unsafe.Pointer)(nil)}, nonblock: false, stdoutOrErr: true, appendMode: false}} |

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [os.Chdir](#chdir) | `dir string` | `error` | 改变当前工作目录 |
| [os.Chmod](#chmod) | `name string, mode os.FileMode` | `error` | 改变指定文件或目录的权限 |
| [os.Chown](#chown) | `name string, uid int, gid int` | `error` | 改变指定文件或目录的所有者和所属组 |
| [os.Clearenv](#clearenv) | - | - | 清空当前进程的所有环境变量 |
| [os.Environ](#environ) | - | `[]string` | 获取表示环境变量的字符串切片，格式为&#34;key=value&#34; |
| [os.Executable](#executable) | - | `string, error` | 获取当前可执行文件的路径 |
| [os.Exit](#exit) | `code int` | - | 以指定状态码退出当前进程 |
| [os.ExpandEnv](#expandenv) | `s string` | `string` | 将字符串中的 ${var} 或 $var 替换为其对应环境变量的值 |
| [os.GetDefaultDNSServers](#getdefaultdnsservers) | - | `[]string` | 获取默认的DNS服务器ip对应的字符串切片 |
| [os.GetHomeDir](#gethomedir) | - | `string` | 获取当前用户的家目录 |
| [os.GetLocalAddress](#getlocaladdress) | - | `[]string` | 获取本地IP地址 |
| [os.GetLocalIPv4Address](#getlocalipv4address) | - | `[]string` | 获取本地IPv4地址 |
| [os.GetLocalIPv6Address](#getlocalipv6address) | - | `[]string` | 获取本地IPv6地址 |
| [os.GetMachineID](#getmachineid) | - | `string` | 获取每个机器唯一的标识符 |
| [os.GetRandomAvailableTCPPort](#getrandomavailabletcpport) | - | `int` | 获取一个随机可用的TCP端口 |
| [os.GetRandomAvailableUDPPort](#getrandomavailableudpport) | - | `int` | 获取一个随机可用的UDP端口 |
| [os.Getegid](#getegid) | - | `int` | 获取当前进程的有效组ID |
| [os.Getenv](#getenv) | `key string` | `string` | 获取指定的环境变量的值，如果不存在则返回空字符串 |
| [os.Geteuid](#geteuid) | - | `int` | 获取当前进程的有效用户ID |
| [os.Getgid](#getgid) | - | `int` | 获取当前进程的组ID |
| [os.Getpid](#getpid) | - | `int` | 获取当前进程的进程ID |
| [os.Getppid](#getppid) | - | `int` | 获取当前进程的父进程ID |
| [os.Getuid](#getuid) | - | `int` | 获取当前进程的用户ID |
| [os.Getwd](#getwd) | - | `string, error` | 获取当前工作目录路径 |
| [os.Hostname](#hostname) | - | `string, error` | 获取主机名 |
| [os.IsRemoteTCPPortOpen](#isremotetcpportopen) | `host string, p int` | `bool` | 检查远程主机的TCP端口是否开放 |
| [os.IsTCPPortAvailable](#istcpportavailable) | `p int` | `bool` | 检查本地TCP端口是否可用（未被占用） |
| [os.IsTCPPortOpen](#istcpportopen) | `p int` | `bool` | 检查本地TCP端口是否开放（被占用） |
| [os.IsUDPPortAvailable](#isudpportavailable) | `p int` | `bool` | 检查本地UDP端口是否可用（未被占用） |
| [os.IsUDPPortOpen](#isudpportopen) | `p int` | `bool` | 检查本地UDP端口是否开放（被占用） |
| [os.LookupEnv](#lookupenv) | `key string` | `string, bool` | 获取指定的环境变量的值，并返回该变量是否存在 |
| [os.LookupHost](#lookuphost) | `i string` | `[]string` | 通过DNS服务器，根据域名查找IP |
| [os.LookupIP](#lookupip) | `i string` | `[]string` | 通过DNS服务器，根据域名查找IP |
| [os.NewConnectionsWatcher](#newconnectionswatcher) | `pid int32, cb NewRemoteIPCallback, interval time.Duration` | `*ConnectionsWatcher, error` | 针对单个进程创建一个网络连接监控器，发现新的远程 IP 时回调通知 |
| [os.NewProcessWatcher](#newprocesswatcher) | - | `*ProcessesWatcher` | 创建并初始化一个新的系统进程监控器，用于监控进程的创建与退出 |
| [os.Pipe](#pipe) | - | `*os.File, *os.File, error` | 创建一个管道，返回一个读取端和一个写入端以及错误 |
| [os.Remove](#remove) | `name string` | `error` | 删除指定的文件或空目录 |
| [os.RemoveAll](#removeall) | `name string` | `error` | 递归删除指定的路径及其包含的所有子路径 |
| [os.Rename](#rename) | `oldpath string, newpath string` | `error` | 重命名文件或目录，可以用于移动文件或目录 |
| [os.Setenv](#setenv) | `key string, value string` | `error` | 设置指定的环境变量 |
| [os.TempDir](#tempdir) | - | `string` | 获取用于存放临时文件的默认目录路径 |
| [os.Unsetenv](#unsetenv) | `key string` | `error` | 删除指定的环境变量 |
| [os.WaitConnect](#waitconnect) | `addr string, timeout float64` | `error` | 等待一个地址的端口开放，直到超时，如果超时则返回错误，这通常用于等待并确保一个服务启动 |

## 函数详情

### Chdir {#chdir}

```go
Chdir(dir string) error
```

改变当前工作目录

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| dir | `string` | 目标工作目录路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
err = os.Chdir("/tmp")
``````````````

---

### Chmod {#chmod}

```go
Chmod(name string, mode os.FileMode) error
```

改变指定文件或目录的权限

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 文件或目录路径 |
| mode | `os.FileMode` | 目标权限（如 0o777） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
err = os.Chmod("/tmp/test.txt", 0777)
``````````````

---

### Chown {#chown}

```go
Chown(name string, uid int, gid int) error
```

改变指定文件或目录的所有者和所属组

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 文件或目录路径 |
| uid | `int` | 新的所有者用户 ID |
| gid | `int` | 新的所属组 ID |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
err = os.Chown("/var/www/html/test.txt", 1000, 1000)
``````````````

---

### Clearenv {#clearenv}

```go
Clearenv()
```

清空当前进程的所有环境变量

**示例**

``````````````yak
os.Clearenv()
``````````````

---

### Environ {#environ}

```go
Environ() []string
```

获取表示环境变量的字符串切片，格式为&#34;key=value&#34;

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]string` | 形如 &#34;key=value&#34; 的环境变量字符串切片 |

**示例**

``````````````yak
for env in os.Environ() {
value = env.SplitN("=", 2)
printf("key = %s, value = %v\n", value[0], value[1])
}
``````````````

---

### Executable {#executable}

```go
Executable() (string, error)
```

获取当前可执行文件的路径

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 当前可执行文件的绝对路径 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
path, err = os.Executable()
``````````````

---

### Exit {#exit}

```go
Exit(code int)
```

以指定状态码退出当前进程

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| code | `int` | 进程退出状态码（0 表示成功） |

**示例**

``````````````yak
os.Exit(0)
``````````````

---

### ExpandEnv {#expandenv}

```go
ExpandEnv(s string) string
```

将字符串中的 ${var} 或 $var 替换为其对应环境变量的值

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| s | `string` | 含有环境变量引用的字符串 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 替换后的字符串 |

**示例**

``````````````yak
os.Setenv("YAK_DOC_EXPAND", "yak")
result = os.ExpandEnv("hello $YAK_DOC_EXPAND")
println(result)   // OUT: hello yak
assert result == "hello yak", "ExpandEnv should substitute the variable value"
``````````````

---

### GetDefaultDNSServers {#getdefaultdnsservers}

```go
GetDefaultDNSServers() []string
```

获取默认的DNS服务器ip对应的字符串切片

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]string` | 默认 DNS 服务器 IP 字符串切片 |

**示例**

``````````````yak
os.GetDefaultDNSServers()
``````````````

---

### GetHomeDir {#gethomedir}

```go
GetHomeDir() string
```

获取当前用户的家目录

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 当前用户的家目录路径 |

**示例**

``````````````yak
os.GetHomeDir() // "/Users/yaklang"
``````````````

---

### GetLocalAddress {#getlocaladdress}

```go
GetLocalAddress() []string
```

获取本地IP地址

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]string` | 本地网卡 IP 地址字符串切片 |

**示例**

``````````````yak
os.GetLocalAddress() // ["192.168.1.103", "fe80::605a:5ff:fefb:5405"]
``````````````

---

### GetLocalIPv4Address {#getlocalipv4address}

```go
GetLocalIPv4Address() []string
```

获取本地IPv4地址

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]string` | 本地非回环 IPv4 地址字符串切片 |

**示例**

``````````````yak
os.GetLocalIPv4Address() // ["192.168.3.103"]
``````````````

---

### GetLocalIPv6Address {#getlocalipv6address}

```go
GetLocalIPv6Address() []string
```

获取本地IPv6地址

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]string` | 本地非回环 IPv6 地址字符串切片 |

**示例**

``````````````yak
os.GetLocalIPv6Address() // ["fe80::605a:5ff:fefb:5405"]
``````````````

---

### GetMachineID {#getmachineid}

```go
GetMachineID() string
```

获取每个机器唯一的标识符

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 当前机器的唯一标识字符串 |

**示例**

``````````````yak
os.GetMachineID()
``````````````

---

### GetRandomAvailableTCPPort {#getrandomavailabletcpport}

```go
GetRandomAvailableTCPPort() int
```

获取一个随机可用的TCP端口

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `int` | 一个当前可用的 TCP 端口号 |

**示例**

``````````````yak
tcp.Serve("127.0.0.1", os.GetRandomAvailableTCPPort())
``````````````

---

### GetRandomAvailableUDPPort {#getrandomavailableudpport}

```go
GetRandomAvailableUDPPort() int
```

获取一个随机可用的UDP端口

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `int` | 一个当前可用的 UDP 端口号 |

**示例**

``````````````yak
udp.Serve("127.0.0.1", os.GetRandomAvailableTCPPort())
``````````````

---

### Getegid {#getegid}

```go
Getegid() int
```

获取当前进程的有效组ID

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `int` | 当前进程的有效组 ID |

**示例**

``````````````yak
os.Getegid()
``````````````

---

### Getenv {#getenv}

```go
Getenv(key string) string
```

获取指定的环境变量的值，如果不存在则返回空字符串

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `string` | 环境变量名 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 环境变量的值，不存在时为空字符串 |

**示例**

``````````````yak
os.Setenv("YAK_DOC_GET", "world")
value = os.Getenv("YAK_DOC_GET")
println(value)   // OUT: world
assert value == "world", "Getenv should return the value set by Setenv"
``````````````

---

### Geteuid {#geteuid}

```go
Geteuid() int
```

获取当前进程的有效用户ID

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `int` | 当前进程的有效用户 ID |

**示例**

``````````````yak
os.Geteuid()
``````````````

---

### Getgid {#getgid}

```go
Getgid() int
```

获取当前进程的组ID

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `int` | 当前进程的组 ID |

**示例**

``````````````yak
os.Getgid()
``````````````

---

### Getpid {#getpid}

```go
Getpid() int
```

获取当前进程的进程ID

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `int` | 当前进程 ID |

**示例**

``````````````yak
os.Getpid()
``````````````

---

### Getppid {#getppid}

```go
Getppid() int
```

获取当前进程的父进程ID

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `int` | 当前进程的父进程 ID |

**示例**

``````````````yak
os.Getppid()
``````````````

---

### Getuid {#getuid}

```go
Getuid() int
```

获取当前进程的用户ID

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `int` | 当前进程的用户 ID |

**示例**

``````````````yak
os.Getuid()
``````````````

---

### Getwd {#getwd}

```go
Getwd() (string, error)
```

获取当前工作目录路径

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 当前工作目录路径 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
cwd, err = os.Getwd()
``````````````

---

### Hostname {#hostname}

```go
Hostname() (name string, err error)
```

获取主机名

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| name | `string` | 主机名 |
| err | `error` | 错误信息 |

**示例**

``````````````yak
name, err = os.Hostname()
``````````````

---

### IsRemoteTCPPortOpen {#isremotetcpportopen}

```go
IsRemoteTCPPortOpen(host string, p int) bool
```

检查远程主机的TCP端口是否开放

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| host | `string` | 远程主机地址（域名或 IP） |
| p | `int` | 待检查的 TCP 端口号 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `bool` | 远程端口是否开放 |

**示例**

``````````````yak
os.IsRemoteTCPPortOpen("yaklang.com", 443) // true
``````````````

---

### IsTCPPortAvailable {#istcpportavailable}

```go
IsTCPPortAvailable(p int) bool
```

检查本地TCP端口是否可用（未被占用）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| p | `int` | 待检查的 TCP 端口号 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `bool` | 端口是否可用（可被监听） |

**示例**

``````````````yak
os.IsTCPPortAvailable(80)
``````````````

---

### IsTCPPortOpen {#istcpportopen}

```go
IsTCPPortOpen(p int) bool
```

检查本地TCP端口是否开放（被占用）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| p | `int` | 待检查的 TCP 端口号 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `bool` | 端口是否开放（已被监听） |

**示例**

``````````````yak
os.IsTCPPortOpen(80)
``````````````

---

### IsUDPPortAvailable {#isudpportavailable}

```go
IsUDPPortAvailable(p int) bool
```

检查本地UDP端口是否可用（未被占用）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| p | `int` | 待检查的 UDP 端口号 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `bool` | 端口是否可用 |

**示例**

``````````````yak
os.IsUDPPortAvailable(80)
``````````````

---

### IsUDPPortOpen {#isudpportopen}

```go
IsUDPPortOpen(p int) bool
```

检查本地UDP端口是否开放（被占用）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| p | `int` | 待检查的 UDP 端口号 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `bool` | 端口是否开放（已被占用） |

**示例**

``````````````yak
os.IsUDPPortOpen(80)
``````````````

---

### LookupEnv {#lookupenv}

```go
LookupEnv(key string) (string, bool)
```

获取指定的环境变量的值，并返回该变量是否存在

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `string` | 环境变量名 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 环境变量的值 |
| r2 | `bool` | 该环境变量是否存在 |

**示例**

``````````````yak
os.Setenv("YAK_DOC_LOOKUP", "hello")
value, ok = os.LookupEnv("YAK_DOC_LOOKUP")
println(value)   // OUT: hello
assert ok, "LookupEnv should report the variable exists"
assert value == "hello", "LookupEnv should return the variable value"
``````````````

---

### LookupHost {#lookuphost}

```go
LookupHost(i string) []string
```

通过DNS服务器，根据域名查找IP

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `string` | 待查询的域名 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]string` | 解析得到的 IP 字符串切片 |

**示例**

``````````````yak
os.LookupHost("www.yaklang.com")
``````````````

---

### LookupIP {#lookupip}

```go
LookupIP(i string) []string
```

通过DNS服务器，根据域名查找IP

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| i | `string` | 待查询的域名 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]string` | 解析得到的 IP 字符串切片 |

**示例**

``````````````yak
os.LookupIP("www.yaklang.com")
``````````````

---

### NewConnectionsWatcher {#newconnectionswatcher}

```go
NewConnectionsWatcher(pid int32, cb NewRemoteIPCallback, interval time.Duration) (*ConnectionsWatcher, error)
```

针对单个进程创建一个网络连接监控器，发现新的远程 IP 时回调通知

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| pid | `int32` | 待监控的进程 ID |
| cb | `NewRemoteIPCallback` | 发现新远程 IP 时的回调函数，签名为 func(pid, remoteIP) |
| interval | `time.Duration` | 轮询连接的时间间隔 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*ConnectionsWatcher` | 连接监控器对象 |
| r2 | `error` | 错误信息（进程不存在时非空） |

**示例**

``````````````yak
w = os.NewConnectionsWatcher(os.Getpid(), (pid, ip) => {
    log.info("process %v connects to %v", pid, ip)
}, 1 * time.Second)~
``````````````

---

### NewProcessWatcher {#newprocesswatcher}

```go
NewProcessWatcher() *ProcessesWatcher
```

创建并初始化一个新的系统进程监控器，用于监控进程的创建与退出

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*ProcessesWatcher` | 进程监控器对象 |

**示例**

``````````````yak
w = os.NewProcessWatcher()
// 通过 w.Start(...) 启动监控
``````````````

---

### Pipe {#pipe}

```go
Pipe() (r *os.File, w *os.File, err error)
```

创建一个管道，返回一个读取端和一个写入端以及错误

它实际是 io.Pipe 的别名

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r | `*os.File` | 管道的读取端文件对象 |
| w | `*os.File` | 管道的写入端文件对象 |
| err | `error` | 错误信息 |

**示例**

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

---

### Remove {#remove}

```go
Remove(name string) error
```

删除指定的文件或空目录

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 待删除的文件或目录路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
os.Remove("/tmp/test.txt")
``````````````

---

### RemoveAll {#removeall}

```go
RemoveAll(name string) error
```

递归删除指定的路径及其包含的所有子路径

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 待删除的路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
os.RemoveAll("/tmp")
``````````````

---

### Rename {#rename}

```go
Rename(oldpath string, newpath string) error
```

重命名文件或目录，可以用于移动文件或目录

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| oldpath | `string` | 原路径 |
| newpath | `string` | 目标路径 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
os.Rename("/tmp/test.txt", "/tmp/test2.txt")
os.Rename("/tmp/test", "/root/test")
``````````````

---

### Setenv {#setenv}

```go
Setenv(key string, value string) error
```

设置指定的环境变量

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `string` | 环境变量名 |
| value | `string` | 环境变量值 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
os.Setenv("YAK_DOC_SET", "yaklang")
println(os.Getenv("YAK_DOC_SET"))   // OUT: yaklang
assert os.Getenv("YAK_DOC_SET") == "yaklang", "Setenv then Getenv should round-trip"
``````````````

---

### TempDir {#tempdir}

```go
TempDir() string
```

获取用于存放临时文件的默认目录路径

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 系统临时目录路径 |

**示例**

``````````````yak
dir = os.TempDir()
assert dir != "", "TempDir should return a non-empty path"
assert file.IsDir(dir), "TempDir should point to an existing directory"
``````````````

---

### Unsetenv {#unsetenv}

```go
Unsetenv(key string) error
```

删除指定的环境变量

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| key | `string` | 待删除的环境变量名 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息 |

**示例**

``````````````yak
os.Setenv("YAK_DOC_UNSET", "v")
os.Unsetenv("YAK_DOC_UNSET")
assert os.Getenv("YAK_DOC_UNSET") == "", "Unsetenv should remove the environment variable"
``````````````

---

### WaitConnect {#waitconnect}

```go
WaitConnect(addr string, timeout float64) error
```

等待一个地址的端口开放，直到超时，如果超时则返回错误，这通常用于等待并确保一个服务启动

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| addr | `string` | 目标地址（host:port） |
| timeout | `float64` | 最长等待时间（秒） |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `error` | 错误信息（超时或连接失败时非空） |

**示例**

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

---

