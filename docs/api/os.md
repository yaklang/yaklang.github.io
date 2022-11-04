# os


|成员函数|函数描述/介绍|
|:------|:--------|
 | [os.Chdir](#oschdir) |  |
 | [os.Clearenv](#osclearenv) | 清除环境变量，与原生 Golang `go.Clearenv` 相同 |
 | [os.Environ](#osenviron) | 获取当前所有的环境变量内容 |
 | [os.Executable](#osexecutable) | 获取当前正在执行的二进制程序的路径 |
 | [os.Exit](#osexit) | 退出主程序，手动结束当前进程 |
 | [os.ExpandEnv](#osexpandenv) | 同 Golang 的 `os.ExpandEnv`：根据当前环境变量的值来替换字符串中的${var}或者$var |
 | [os.GetMachineID](#osgetmachineid) |  |
 | [os.GetRandomAvailableTCPPort](#osgetrandomavailabletcpport) | 随机获得一个可用的 TCP 端口 |
 | [os.GetRandomAvailableUDPPort](#osgetrandomavailableudpport) | 随机获得一个可用的 UDP 端口 |
 | [os.Getenv](#osgetenv) | 获得一个环境变量的值 |
 | [os.IsRemoteTCPPortOpen](#osisremotetcpportopen) | 判断一个远程 TCP 端口是否开放 |
 | [os.IsTCPPortAvailable](#osistcpportavailable) | 判断一个本地 TCP 端口是否可用（监听可用） |
 | [os.IsTCPPortOpen](#osistcpportopen) | 判断一个本地端口是否开放 |
 | [os.IsUDPPortAvailable](#osisudpportavailable) | 判断一个本地 UDP 端口是否可用 |
 | [os.IsUDPPortOpen](#osisudpportopen) | 判断一个本地 UDP 端口是否开放 |
 | [os.LookupEnv](#oslookupenv) | 判断这个环境变量是否存在，如果存在，返回环境变量的值，不存在设置 ok 为 false |
 | [os.Pipe](#ospipe) | 返回文件管道，两个结果互通，均可互相读写 |
 | [os.Remove](#osremove) | 移除一个文件 |
 | [os.RemoveAll](#osremoveall) | 移除一个文件（强制） |
 | [os.Rename](#osrename) | 重命名一个文件：同 Golang `os.Rename` |
 | [os.Setenv](#ossetenv) | 设置环境变量 |
 | [os.Unsetenv](#osunsetenv) | 清除环境变量 |




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

`func os.Chdir(v1: string) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### os.Clearenv

清除环境变量，与原生 Golang `go.Clearenv` 相同

#### 详细描述



#### 定义：

``func os.Clearenv()``

 

 

 
### os.Environ

获取当前所有的环境变量内容

#### 详细描述



#### 定义：

`func os.Environ() return (r0: []string)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### os.Executable

获取当前正在执行的二进制程序的路径

#### 详细描述



#### 定义：

`func os.Executable() return (path: string, r1: error)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| path | `string` |   |
| r1 | `error` |   |


 
### os.Exit

退出主程序，手动结束当前进程

#### 详细描述



#### 定义：

``func os.Exit(exitCode: int)``


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| exitCode | `int` |   |




 

 
### os.ExpandEnv

同 Golang 的 `os.ExpandEnv`：根据当前环境变量的值来替换字符串中的${var}或者$var

#### 详细描述



#### 定义：

`func os.ExpandEnv(targetWithEnv: string) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| targetWithEnv | `string` |  替换前的字符串 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |  替换后的字符串 |


 
### os.GetMachineID



#### 详细描述



#### 定义：

`func os.GetMachineID() return (r0: string)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### os.GetRandomAvailableTCPPort

随机获得一个可用的 TCP 端口

#### 详细描述



#### 定义：

`func os.GetRandomAvailableTCPPort() return (port: int)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| port | `int` |   |


 
### os.GetRandomAvailableUDPPort

随机获得一个可用的 UDP 端口

#### 详细描述



#### 定义：

`func os.GetRandomAvailableUDPPort() return (port: int)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| port | `int` |   |


 
### os.Getenv

获得一个环境变量的值

#### 详细描述



#### 定义：

`func os.Getenv(envName: string) return (value: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| envName | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| value | `string` |   |


 
### os.IsRemoteTCPPortOpen

判断一个远程 TCP 端口是否开放

#### 详细描述



#### 定义：

`func os.IsRemoteTCPPortOpen(host: string, port: int) return (r0: bool)`


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

`func os.IsTCPPortAvailable(port: int) return (r0: bool)`


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

`func os.IsTCPPortOpen(port: int) return (r0: bool)`


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

`func os.IsUDPPortAvailable(port: int) return (r0: bool)`


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

`func os.IsUDPPortOpen(port: int) return (r0: bool)`


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

`func os.LookupEnv(envName: string) return (value: string, ok: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| envName | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| value | `string` |   |
| ok | `bool` |   |


 
### os.Pipe

返回文件管道，两个结果互通，均可互相读写

#### 详细描述



#### 定义：

`func os.Pipe() return (file1: *os.File, file2: *os.File, r2: error)`

 


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

`func os.Remove(fileName: string) return (r0: error)`


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

`func os.RemoveAll(fileName: string) return (r0: error)`


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

`func os.Rename(oldFile: string, newFile: string) return (r0: error)`


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

`func os.Setenv(key: string, value: string) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |
| value | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### os.Unsetenv

清除环境变量

#### 详细描述



#### 定义：

`func os.Unsetenv(key: string) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 


