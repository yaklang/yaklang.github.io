# os

|实例名|实例描述|
|:------|:--------|
ARCH|(string) &#34;amd64&#34;|
Args|([]string) Command line arguments|
IsPrivileged|(bool) false|
OS|(string) &#34;linux&#34;|
Stderr|(os.File) &amp;os.File{file: &amp;os.file{pfd: poll.FD{fdmu: poll.fdMutex{state: 0, rsema: 0, wsema: 0}, Sysfd: 2, SysFile: poll.SysFile{iovecs: (*[]syscall.Iovec)(nil)}, pd: poll.pollDesc{runtimeCtx: 0}, csema: 0, isBlocking: 1, IsStream: true, ZeroReadIsEOF: true, isFile: true}, name: &#34;/dev/stderr&#34;, dirinfo: atomic.Pointer[os.dirInfo]{_: [0]*os.dirInfo{}, _: atomic.noCopy{}, v: (unsafe.Pointer)(nil)}, nonblock: false, stdoutOrErr: true, appendMode: false}}|
Stdin|(os.File) &amp;os.File{file: &amp;os.file{pfd: poll.FD{fdmu: poll.fdMutex{state: 0, rsema: 0, wsema: 0}, Sysfd: 0, SysFile: poll.SysFile{iovecs: (*[]syscall.Iovec)(nil)}, pd: poll.pollDesc{runtimeCtx: 0}, csema: 0, isBlocking: 1, IsStream: true, ZeroReadIsEOF: true, isFile: true}, name: &#34;/dev/stdin&#34;, dirinfo: atomic.Pointer[os.dirInfo]{_: [0]*os.dirInfo{}, _: atomic.noCopy{}, v: (unsafe.Pointer)(nil)}, nonblock: false, stdoutOrErr: false, appendMode: false}}|
Stdout|(os.File) &amp;os.File{file: &amp;os.file{pfd: poll.FD{fdmu: poll.fdMutex{state: 0, rsema: 0, wsema: 0}, Sysfd: 1, SysFile: poll.SysFile{iovecs: (*[]syscall.Iovec)(nil)}, pd: poll.pollDesc{runtimeCtx: 0}, csema: 0, isBlocking: 1, IsStream: true, ZeroReadIsEOF: true, isFile: true}, name: &#34;/dev/stdout&#34;, dirinfo: atomic.Pointer[os.dirInfo]{_: [0]*os.dirInfo{}, _: atomic.noCopy{}, v: (unsafe.Pointer)(nil)}, nonblock: false, stdoutOrErr: true, appendMode: false}}|

|函数名|函数描述/介绍|
|:------|:--------|
| [os.Chdir](#chdir) |Chdir 改变当前工作目录  |
| [os.Chmod](#chmod) |Chmod 改变指定文件或目录的权限  |
| [os.Chown](#chown) |Chown 改变指定文件或目录的所有者和所属组  |
| [os.Clearenv](#clearenv) |Clearenv 清空所有环境变量  |
| [os.Environ](#environ) |Environ 获取表示环境变量的字符串切片，格式为&amp;#34;key=value&amp;#34;  |
| [os.Executable](#executable) |Executable 获取当前可执行文件的路径  |
| [os.Exit](#exit) |Exit 退出当前进程  |
| [os.ExpandEnv](#expandenv) |ExpandEnv  将字符串中的${var}或$var替换为其对应环境变量名的值  |
| [os.GetDefaultDNSServers](#getdefaultdnsservers) |GetDefaultDNSServers 获取默认的DNS服务器ip对应的字符串切片  |
| [os.GetHomeDir](#gethomedir) |GetHomeDir 获取当前用户的家目录  |
| [os.GetLocalAddress](#getlocaladdress) |GetLocalAddress 获取本地IP地址  |
| [os.GetLocalIPv4Address](#getlocalipv4address) |GetLocalIPv4Address 获取本地IPv4地址  |
| [os.GetLocalIPv6Address](#getlocalipv6address) |GetLocalIPv6Address 获取本地IPv6地址  |
| [os.GetMachineID](#getmachineid) |GetMachineID 获取每个机器唯一的标识符  |
| [os.GetRandomAvailableTCPPort](#getrandomavailabletcpport) |GetRandomAvailableTCPPort 获取随机可用的TCP端口  |
| [os.GetRandomAvailableUDPPort](#getrandomavailableudpport) |GetRandomAvailableUDPPort 获取随机可用的UDP端口  |
| [os.Getegid](#getegid) |Getegid 获取当前进程的有效组ID  |
| [os.Getenv](#getenv) |Getenv 获取指定的环境变量的值，如果不存在则返回空字符串  |
| [os.Geteuid](#geteuid) |Geteuid 获取当前进程的有效用户ID  |
| [os.Getgid](#getgid) |Getgid 获取当前进程的组ID  |
| [os.Getpid](#getpid) |Getpid 获取当前进程的进程ID  |
| [os.Getppid](#getppid) |Getppid  获取当前进程的父进程ID  |
| [os.Getuid](#getuid) |Getuid 获取当前进程的用户ID  |
| [os.Getwd](#getwd) |Getwd 获取当前工作目录路径  |
| [os.Hostname](#hostname) |Hostname 获取主机名  |
| [os.IsRemoteTCPPortOpen](#isremotetcpportopen) |IsRemoteTCPPortOpen 检查远程TCP端口是否开放  |
| [os.IsTCPPortAvailable](#istcpportavailable) |IsTCPPortAvailable 检查TCP端口是否可用  |
| [os.IsTCPPortOpen](#istcpportopen) |IsTCPPortOpen 检查TCP端口是否开放  |
| [os.IsUDPPortAvailable](#isudpportavailable) |IsUDPPortAvailable 检查UDP端口是否可用  |
| [os.IsUDPPortOpen](#isudpportopen) |IsUDPPortOpen 检查UDP端口是否开放  |
| [os.LookupEnv](#lookupenv) |LookupEnv 获取指定的环境变量的值  |
| [os.LookupHost](#lookuphost) |LookupHost 通过DNS服务器，根据域名查找IP  |
| [os.LookupIP](#lookupip) |LookupIP 通过DNS服务器，根据域名查找IP  |
| [os.Pipe](#pipe) |Pipe 创建一个管道，返回一个读取端和一个写入端以及错误  它实际是 io.Pipe 的别名  |
| [os.Remove](#remove) |Remove 删除指定的文件或目录  |
| [os.RemoveAll](#removeall) |RemoveAll 递归删除指定的路径及其子路径  |
| [os.Rename](#rename) |Rename 重命名文件或目录，可以用于移动文件或目录  |
| [os.Setenv](#setenv) |Setenv 设置指定的环境变量  |
| [os.TempDir](#tempdir) |TempDir 获取用于存放临时文件的默认目录路径  |
| [os.Unsetenv](#unsetenv) |Unsetenv 删除指定的环境变量  |
| [os.WaitConnect](#waitconnect) |WaitConnect 等待一个地址的端口开放或指导超时时间，如果超时则返回错误，这通常用于等待并确保一个服务启动  |


## 函数定义
### Chdir

#### 详细描述
Chdir 改变当前工作目录

Example:
```
err = os.Chdir("/tmp")
```


#### 定义

`Chdir(dir string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| dir | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### Chmod

#### 详细描述
Chmod 改变指定文件或目录的权限

Example:
```
err = os.Chmod("/tmp/test.txt", 0777)
```


#### 定义

`Chmod(name string, mode os.FileMode) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| mode | `os.FileMode` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### Chown

#### 详细描述
Chown 改变指定文件或目录的所有者和所属组

Example:
```
err = os.Chown("/var/www/html/test.txt", 1000, 1000)
```


#### 定义

`Chown(name string, uid int, gid int) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| uid | `int` |   |
| gid | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### Clearenv

#### 详细描述
Clearenv 清空所有环境变量

Example:
```
os.Clearenv()
```


#### 定义

`Clearenv()`


### Environ

#### 详细描述
Environ 获取表示环境变量的字符串切片，格式为&#34;key=value&#34;

Example:
```
for env in os.Environ() {
value = env.SplitN("=", 2)
printf("key = %s, value = %v\n", value[0], value[1])
}
```


#### 定义

`Environ() []string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### Executable

#### 详细描述
Executable 获取当前可执行文件的路径

Example:
```
path, err = os.Executable()
```


#### 定义

`Executable() (string, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


### Exit

#### 详细描述
Exit 退出当前进程

Example:
```
os.Exit(0)
```


#### 定义

`Exit(code int)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| code | `int` |   |


### ExpandEnv

#### 详细描述
ExpandEnv  将字符串中的${var}或$var替换为其对应环境变量名的值

Example:
```
os.ExpandEnv("PATH = $PATH")
```


#### 定义

`ExpandEnv(s string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### GetDefaultDNSServers

#### 详细描述
GetDefaultDNSServers 获取默认的DNS服务器ip对应的字符串切片

Example:
```
os.GetDefaultDNSServers()
```


#### 定义

`GetDefaultDNSServers() []string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### GetHomeDir

#### 详细描述
GetHomeDir 获取当前用户的家目录

Example:
```
os.GetHomeDir() // "/Users/yaklang"
```


#### 定义

`GetHomeDir() string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### GetLocalAddress

#### 详细描述
GetLocalAddress 获取本地IP地址

Example:
```
os.GetLocalAddress() // ["192.168.1.103", "fe80::605a:5ff:fefb:5405"]
```


#### 定义

`GetLocalAddress() []string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### GetLocalIPv4Address

#### 详细描述
GetLocalIPv4Address 获取本地IPv4地址

Example:
```
os.GetLocalIPv4Address() // ["192.168.3.103"]
```


#### 定义

`GetLocalIPv4Address() []string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### GetLocalIPv6Address

#### 详细描述
GetLocalIPv6Address 获取本地IPv6地址

Example:
```
os.GetLocalIPv6Address() // ["fe80::605a:5ff:fefb:5405"]
```


#### 定义

`GetLocalIPv6Address() []string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### GetMachineID

#### 详细描述
GetMachineID 获取每个机器唯一的标识符

Example:
```
os.GetMachineID()
```


#### 定义

`GetMachineID() string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### GetRandomAvailableTCPPort

#### 详细描述
GetRandomAvailableTCPPort 获取随机可用的TCP端口

Example:
```
tcp.Serve("127.0.0.1", os.GetRandomAvailableTCPPort())
```


#### 定义

`GetRandomAvailableTCPPort() int`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` |   |


### GetRandomAvailableUDPPort

#### 详细描述
GetRandomAvailableUDPPort 获取随机可用的UDP端口

Example:
```
udp.Serve("127.0.0.1", os.GetRandomAvailableTCPPort())
```


#### 定义

`GetRandomAvailableUDPPort() int`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` |   |


### Getegid

#### 详细描述
Getegid 获取当前进程的有效组ID

Example:
```
os.Getegid()
```


#### 定义

`Getegid() int`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` |   |


### Getenv

#### 详细描述
Getenv 获取指定的环境变量的值，如果不存在则返回空字符串

Example:
```
value = os.Getenv("PATH")
```


#### 定义

`Getenv(key string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### Geteuid

#### 详细描述
Geteuid 获取当前进程的有效用户ID

Example:
```
os.Geteuid()
```


#### 定义

`Geteuid() int`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` |   |


### Getgid

#### 详细描述
Getgid 获取当前进程的组ID

Example:
```
os.Getgid()
```


#### 定义

`Getgid() int`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` |   |


### Getpid

#### 详细描述
Getpid 获取当前进程的进程ID

Example:
```
os.Getpid()
```


#### 定义

`Getpid() int`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` |   |


### Getppid

#### 详细描述
Getppid  获取当前进程的父进程ID

Example:
```
os.Getppid()
```


#### 定义

`Getppid() int`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` |   |


### Getuid

#### 详细描述
Getuid 获取当前进程的用户ID

Example:
```
os.Getuid()
```


#### 定义

`Getuid() int`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` |   |


### Getwd

#### 详细描述
Getwd 获取当前工作目录路径

Example:
```
cwd, err = os.Getwd()
```


#### 定义

`Getwd() (string, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


### Hostname

#### 详细描述
Hostname 获取主机名

Example:
```
name, err = os.Hostname()
```


#### 定义

`Hostname() (name string, err error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| err | `error` |   |


### IsRemoteTCPPortOpen

#### 详细描述
IsRemoteTCPPortOpen 检查远程TCP端口是否开放

Example:
```
os.IsRemoteTCPPortOpen("yaklang.com", 443) // true
```


#### 定义

`IsRemoteTCPPortOpen(host string, p int) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| host | `string` |   |
| p | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### IsTCPPortAvailable

#### 详细描述
IsTCPPortAvailable 检查TCP端口是否可用

Example:
```
os.IsTCPPortAvailable(80)
```


#### 定义

`IsTCPPortAvailable(p int) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| p | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### IsTCPPortOpen

#### 详细描述
IsTCPPortOpen 检查TCP端口是否开放

Example:
```
os.IsTCPPortOpen(80)
```


#### 定义

`IsTCPPortOpen(p int) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| p | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### IsUDPPortAvailable

#### 详细描述
IsUDPPortAvailable 检查UDP端口是否可用

Example:
```
os.IsUDPPortAvailable(80)
```


#### 定义

`IsUDPPortAvailable(p int) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| p | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### IsUDPPortOpen

#### 详细描述
IsUDPPortOpen 检查UDP端口是否开放

Example:
```
os.IsUDPPortOpen(80)
```


#### 定义

`IsUDPPortOpen(p int) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| p | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### LookupEnv

#### 详细描述
LookupEnv 获取指定的环境变量的值

Example:
```
value, ok = os.LookupEnv("PATH")
```


#### 定义

`LookupEnv(key string) (string, bool)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `bool` |   |


### LookupHost

#### 详细描述
LookupHost 通过DNS服务器，根据域名查找IP

Example:
```
os.LookupHost("www.yaklang.com")
```


#### 定义

`LookupHost(i string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### LookupIP

#### 详细描述
LookupIP 通过DNS服务器，根据域名查找IP

Example:
```
os.LookupIP("www.yaklang.com")
```


#### 定义

`LookupIP(i string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### Pipe

#### 详细描述
Pipe 创建一个管道，返回一个读取端和一个写入端以及错误

它实际是 io.Pipe 的别名

Example:
```
r, w, err = os.Pipe()
die(err)

	go func {
	    w.WriteString("hello yak")
	    w.Close()
	}

bytes, err = io.ReadAll(r)
die(err)
dump(bytes)
```


#### 定义

`Pipe() (r *os.File, w *os.File, err error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r | `*os.File` |   |
| w | `*os.File` |   |
| err | `error` |   |


### Remove

#### 详细描述
Remove 删除指定的文件或目录

Example:
```
os.Remove("/tmp/test.txt")
```


#### 定义

`Remove(name string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### RemoveAll

#### 详细描述
RemoveAll 递归删除指定的路径及其子路径

Example:
```
os.RemoveAll("/tmp")
```


#### 定义

`RemoveAll(name string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### Rename

#### 详细描述
Rename 重命名文件或目录，可以用于移动文件或目录

Example:
```
os.Rename("/tmp/test.txt", "/tmp/test2.txt")
os.Rename("/tmp/test", "/root/test")
```


#### 定义

`Rename(oldpath string, newpath string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| oldpath | `string` |   |
| newpath | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### Setenv

#### 详细描述
Setenv 设置指定的环境变量

Example:
```
os.Setenv("PATH", "/usr/local/bin:/usr/bin:/bin")
```


#### 定义

`Setenv(key string, value string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |
| value | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### TempDir

#### 详细描述
TempDir 获取用于存放临时文件的默认目录路径

Example:
```
os.TempDir()
```


#### 定义

`TempDir() string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### Unsetenv

#### 详细描述
Unsetenv 删除指定的环境变量

Example:
```
os.Unsetenv("PATH")
```


#### 定义

`Unsetenv(key string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### WaitConnect

#### 详细描述
WaitConnect 等待一个地址的端口开放或指导超时时间，如果超时则返回错误，这通常用于等待并确保一个服务启动

Example:
```
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
```


#### 定义

`WaitConnect(addr string, timeout float64) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| addr | `string` |   |
| timeout | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


