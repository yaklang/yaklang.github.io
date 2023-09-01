# os


|成员函数|函数描述/介绍|
|:------|:--------|
 | [os.Chdir](#oschdir) |  |
 | [os.Chmod](#oschmod) |  |
 | [os.Chown](#oschown) |  |
 | [os.Clearenv](#osclearenv) | 清除环境变量，与原生 Golang `go.Clearenv` 相同 |
 | [os.Environ](#osenviron) | 获取当前所有的环境变量内容 |
 | [os.Executable](#osexecutable) | 获取当前正在执行的二进制程序的路径 |
 | [os.Exit](#osexit) | 退出主程序，手动结束当前进程 |
 | [os.ExpandEnv](#osexpandenv) | 同 Golang 的 `os.ExpandEnv`：根据当前环境变量的值来替换字符串中的${var}或者$var |
 | [os.GetDefaultDNSServers](#osgetdefaultdnsservers) |  |
 | [os.GetMachineID](#osgetmachineid) |  |
 | [os.GetRandomAvailableTCPPort](#osgetrandomavailabletcpport) | 随机获得一个可用的 TCP 端口 |
 | [os.GetRandomAvailableUDPPort](#osgetrandomavailableudpport) | 随机获得一个可用的 UDP 端口 |
 | [os.Getegid](#osgetegid) |  |
 | [os.Getenv](#osgetenv) | 获得一个环境变量的值 |
 | [os.Geteuid](#osgeteuid) |  |
 | [os.Getgid](#osgetgid) |  |
 | [os.Getpid](#osgetpid) |  |
 | [os.Getppid](#osgetppid) |  |
 | [os.Getuid](#osgetuid) |  |
 | [os.Getwd](#osgetwd) |  |
 | [os.Hostname](#oshostname) |  |
 | [os.IsRemoteTCPPortOpen](#osisremotetcpportopen) | 判断一个远程 TCP 端口是否开放 |
 | [os.IsTCPPortAvailable](#osistcpportavailable) | 判断一个本地 TCP 端口是否可用（监听可用） |
 | [os.IsTCPPortOpen](#osistcpportopen) | 判断一个本地端口是否开放 |
 | [os.IsUDPPortAvailable](#osisudpportavailable) | 判断一个本地 UDP 端口是否可用 |
 | [os.IsUDPPortOpen](#osisudpportopen) | 判断一个本地 UDP 端口是否开放 |
 | [os.LookupEnv](#oslookupenv) | 判断这个环境变量是否存在，如果存在，返回环境变量的值，不存在设置 ok 为 false |
 | [os.LookupHost](#oslookuphost) |  |
 | [os.LookupIP](#oslookupip) |  |
 | [os.Pipe](#ospipe) | 返回文件管道，两个结果互通，均可互相读写 |
 | [os.Remove](#osremove) | 移除一个文件 |
 | [os.RemoveAll](#osremoveall) | 移除一个文件（强制） |
 | [os.Rename](#osrename) | 重命名一个文件：同 Golang `os.Rename` |
 | [os.Setenv](#ossetenv) | 设置环境变量 |
 | [os.TempDir](#ostempdir) |  |
 | [os.Unsetenv](#osunsetenv) | 清除环境变量 |
 | [os.WaitConnect](#oswaitconnect) |  |




## 变量定义

|变量调用名|变量类型|变量解释/帮助信息|
|:-----------|:---------- |:-----------|
|`os.ARCH`|`string`| //|
|`os.Args`|`[]string`| 获取当前命令行参数|
|`os.IsPrivileged`|`bool`| //|
|`os.OS`|`string`| //|
|`os.Stderr`|`*os.File`| 标准错误流|
|`os.Stdin`|`*os.File`| 标准输入流|
|`os.Stdout`|`*os.File`| 标准输出流|





## 函数定义

### os.Chdir



#### 详细描述



#### 定义：

`Chdir(dir string) error  doc:Chdir changes the current working directory to the named directory.If there is an error, it will be of type *PathError.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### os.Chmod



#### 详细描述



#### 定义：

`Chmod(name string, mode FileMode) error  doc:Chmod changes the mode of the named file to mode.If the file is a symbolic link, it changes the mode of the link&#39;s target.If there is an error, it will be of type *PathError.A different subset of the mode bits are used, depending on theoperating system.On Unix, the mode&#39;s permission bits, ModeSetuid, ModeSetgid, andModeSticky are used.On Windows, only the 0200 bit (owner writable) of mode is used; itcontrols whether the file&#39;s read-only attribute is set or cleared.The other bits are currently unused. For compatibility with Go 1.12and earlier, use a non-zero mode. Use mode 0400 for a read-onlyfile and 0600 for a readable&#43;writable file.On Plan 9, the mode&#39;s permission bits, ModeAppend, ModeExclusive,and ModeTemporary are used.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `fs.FileMode` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### os.Chown



#### 详细描述



#### 定义：

`Chown(name string, uid, gid int) error  doc:Chown changes the numeric uid and gid of the named file.If the file is a symbolic link, it changes the uid and gid of the link&#39;s target.A uid or gid of -1 means to not change that value.If there is an error, it will be of type *PathError.On Windows or Plan 9, Chown always returns the syscall.EWINDOWS orEPLAN9 error, wrapped in *PathError.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `int` |   |
| v3 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### os.Clearenv

清除环境变量，与原生 Golang `go.Clearenv` 相同

#### 详细描述



#### 定义：

`Clearenv()  doc:Clearenv deletes all environment variables.`

 

 

 
### os.Environ

获取当前所有的环境变量内容

#### 详细描述



#### 定义：

`Environ() []string  doc:Environ returns a copy of strings representing the environment,in the form &#34;key=value&#34;.`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### os.Executable

获取当前正在执行的二进制程序的路径

#### 详细描述



#### 定义：

`Executable() (string, error)  doc:Executable returns the path name for the executable that startedthe current process. There is no guarantee that the path is stillpointing to the correct executable. If a symlink was used to startthe process, depending on the operating system, the result mightbe the symlink or the path it pointed to. If a stable result isneeded, path/filepath.EvalSymlinks might help.Executable returns an absolute path unless an error occurred.The main use case is finding resources located relative to anexecutable.`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| path | `string` |   |
| r1 | `error` |   |


 
### os.Exit

退出主程序，手动结束当前进程

#### 详细描述



#### 定义：

`Exit(code int)  doc:Exit causes the current program to exit with the given status code.Conventionally, code zero indicates success, non-zero an error.The program terminates immediately; deferred functions are not run.For portability, the status code should be in the range [0, 125].`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| exitCode | `int` |   |




 

 
### os.ExpandEnv

同 Golang 的 `os.ExpandEnv`：根据当前环境变量的值来替换字符串中的${var}或者$var

#### 详细描述



#### 定义：

`ExpandEnv(s string) string  doc:ExpandEnv replaces ${var} or $var in the string according to the valuesof the current environment variables. References to undefinedvariables are replaced by the empty string.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| targetWithEnv | `string` |  替换前的字符串 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |  替换后的字符串 |


 
### os.GetDefaultDNSServers



#### 详细描述



#### 定义：

`GetDefaultDNSServers() []string`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### os.GetMachineID



#### 详细描述



#### 定义：

`GetMachineID() string`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### os.GetRandomAvailableTCPPort

随机获得一个可用的 TCP 端口

#### 详细描述



#### 定义：

`GetRandomAvailableTCPPort() int`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| port | `int` |   |


 
### os.GetRandomAvailableUDPPort

随机获得一个可用的 UDP 端口

#### 详细描述



#### 定义：

`GetRandomAvailableUDPPort() int`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| port | `int` |   |


 
### os.Getegid



#### 详细描述



#### 定义：

`Getegid() int  doc:Getegid returns the numeric effective group id of the caller.On Windows, it returns -1.`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `int` |   |


 
### os.Getenv

获得一个环境变量的值

#### 详细描述



#### 定义：

`Getenv(key string) string  doc:Getenv retrieves the value of the environment variable named by the key.It returns the value, which will be empty if the variable is not present.To distinguish between an empty value and an unset value, use LookupEnv.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| envName | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| value | `string` |   |


 
### os.Geteuid



#### 详细描述



#### 定义：

`Geteuid() int  doc:Geteuid returns the numeric effective user id of the caller.On Windows, it returns -1.`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `int` |   |


 
### os.Getgid



#### 详细描述



#### 定义：

`Getgid() int  doc:Getgid returns the numeric group id of the caller.On Windows, it returns -1.`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `int` |   |


 
### os.Getpid



#### 详细描述



#### 定义：

`Getpid() int  doc:Getpid returns the process id of the caller.`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `int` |   |


 
### os.Getppid



#### 详细描述



#### 定义：

`Getppid() int  doc:Getppid returns the process id of the caller&#39;s parent.`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `int` |   |


 
### os.Getuid



#### 详细描述



#### 定义：

`Getuid() int  doc:Getuid returns the numeric user id of the caller.On Windows, it returns -1.`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `int` |   |


 
### os.Getwd



#### 详细描述



#### 定义：

`Getwd() (dir string, err error)  doc:Getwd returns a rooted path name corresponding to thecurrent directory. If the current directory can bereached via multiple paths (due to symbolic links),Getwd may return any one of them.`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |
| r1 | `error` |   |


 
### os.Hostname



#### 详细描述



#### 定义：

`Hostname() (name string, err error)  doc:Hostname returns the host name reported by the kernel.`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |
| r1 | `error` |   |


 
### os.IsRemoteTCPPortOpen

判断一个远程 TCP 端口是否开放

#### 详细描述



#### 定义：

`IsRemoteTCPPortOpen(string, int) bool`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| host | `string` |   |
| port | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### os.IsTCPPortAvailable

判断一个本地 TCP 端口是否可用（监听可用）

#### 详细描述



#### 定义：

`IsTCPPortAvailable(p int) bool`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| port | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### os.IsTCPPortOpen

判断一个本地端口是否开放

#### 详细描述



#### 定义：

`IsTCPPortOpen(int) bool`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| port | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### os.IsUDPPortAvailable

判断一个本地 UDP 端口是否可用

#### 详细描述



#### 定义：

`IsUDPPortAvailable(p int) bool`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| port | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### os.IsUDPPortOpen

判断一个本地 UDP 端口是否开放

#### 详细描述



#### 定义：

`IsUDPPortOpen(int) bool`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| port | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### os.LookupEnv

判断这个环境变量是否存在，如果存在，返回环境变量的值，不存在设置 ok 为 false

#### 详细描述



#### 定义：

`LookupEnv(key string) (string, bool)  doc:LookupEnv retrieves the value of the environment variable namedby the key. If the variable is present in the environment thevalue (which may be empty) is returned and the boolean is true.Otherwise the returned value will be empty and the boolean willbe false.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| envName | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| value | `string` |   |
| ok | `bool` |   |


 
### os.LookupHost



#### 详细描述



#### 定义：

`func os.LookupHost(v1: string) return (r0: []string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### os.LookupIP



#### 详细描述



#### 定义：

`func os.LookupIP(v1: string) return (r0: []string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### os.Pipe

返回文件管道，两个结果互通，均可互相读写

#### 详细描述



#### 定义：

`Pipe() (r *File, w *File, err error)  doc:Pipe returns a connected pair of Files; reads from r return bytes written to w.It returns the files and an error, if any.`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| file1 | `*os.File` |   |
| file2 | `*os.File` |   |
| r2 | `error` |   |


 
### os.Remove

移除一个文件

#### 详细描述



#### 定义：

`Remove(name string) error  doc:Remove removes the named file or (empty) directory.If there is an error, it will be of type *PathError.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fileName | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### os.RemoveAll

移除一个文件（强制）

#### 详细描述



#### 定义：

`RemoveAll(path string) error  doc:RemoveAll removes path and any children it contains.It removes everything it can but returns the first errorit encounters. If the path does not exist, RemoveAllreturns nil (no error).If there is an error, it will be of type *PathError.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fileName | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### os.Rename

重命名一个文件：同 Golang `os.Rename`

#### 详细描述



#### 定义：

`Rename(oldpath, newpath string) error  doc:Rename renames (moves) oldpath to newpath.If newpath already exists and is not a directory, Rename replaces it.OS-specific restrictions may apply when oldpath and newpath are in different directories.If there is an error, it will be of type *LinkError.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| oldFile | `string` |   |
| newFile | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### os.Setenv

设置环境变量

#### 详细描述



#### 定义：

`Setenv(key, value string) error  doc:Setenv sets the value of the environment variable named by the key.It returns an error, if any.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |
| value | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### os.TempDir



#### 详细描述



#### 定义：

`TempDir() string  doc:TempDir returns the default directory to use for temporary files.On Unix systems, it returns $TMPDIR if non-empty, else /tmp.On Windows, it uses GetTempPath, returning the first non-emptyvalue from %TMP%, %TEMP%, %USERPROFILE%, or the Windows directory.On Plan 9, it returns /tmp.The directory is neither guaranteed to exist nor have accessiblepermissions.`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### os.Unsetenv

清除环境变量

#### 详细描述



#### 定义：

`Unsetenv(key string) error  doc:Unsetenv unsets a single environment variable.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### os.WaitConnect



#### 详细描述



#### 定义：

`func os.WaitConnect(v1: string, v2: float64) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `float64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 


