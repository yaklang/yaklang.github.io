# os


|成员函数|函数描述/介绍|
|:------|:--------|
 | [os.Clearenv](#osclearenv) |  |
 | [os.Environ](#osenviron) |  |
 | [os.Executable](#osexecutable) |  |
 | [os.Exit](#osexit) |  |
 | [os.ExpandEnv](#osexpandenv) |  |
 | [os.GetRandomAvailableTCPPort](#osgetrandomavailabletcpport) |  |
 | [os.GetRandomAvailableUDPPort](#osgetrandomavailableudpport) |  |
 | [os.Getenv](#osgetenv) |  |
 | [os.IsRemoteTCPPortOpen](#osisremotetcpportopen) |  |
 | [os.IsTCPPortAvailable](#osistcpportavailable) |  |
 | [os.IsTCPPortOpen](#osistcpportopen) |  |
 | [os.IsUDPPortAvailable](#osisudpportavailable) |  |
 | [os.IsUDPPortOpen](#osisudpportopen) |  |
 | [os.LookupEnv](#oslookupenv) |  |
 | [os.Pipe](#ospipe) |  |
 | [os.Remove](#osremove) |  |
 | [os.RemoveAll](#osremoveall) |  |
 | [os.Rename](#osrename) |  |
 | [os.Setenv](#ossetenv) |  |
 | [os.Unsetenv](#osunsetenv) |  |




## 变量定义

|变量调用名|变量类型|变量解释/帮助信息|
|:-----------|:---------- |:-----------|
|`os.Args`|`[]string`| //|
|`os.Stderr`|`*os.File`| //|
|`os.Stdin`|`*os.File`| //|
|`os.Stdout`|`*os.File`| //|





## 函数定义

### os.Clearenv



#### 详细描述



#### 定义：

``func os.Clearenv()``

 

 

 
### os.Environ



#### 详细描述



#### 定义：

`func os.Environ() return (r0: []string)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### os.Executable



#### 详细描述



#### 定义：

`func os.Executable() return (r0: string, r1: error)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |
| r1 | `error` |   |


 
### os.Exit



#### 详细描述



#### 定义：

``func os.Exit(v1: int)``


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |




 

 
### os.ExpandEnv



#### 详细描述



#### 定义：

`func os.ExpandEnv(v1: string) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### os.GetRandomAvailableTCPPort



#### 详细描述



#### 定义：

`func os.GetRandomAvailableTCPPort() return (r0: int)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `int` |   |


 
### os.GetRandomAvailableUDPPort



#### 详细描述



#### 定义：

`func os.GetRandomAvailableUDPPort() return (r0: int)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `int` |   |


 
### os.Getenv



#### 详细描述



#### 定义：

`func os.Getenv(v1: string) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### os.IsRemoteTCPPortOpen



#### 详细描述



#### 定义：

`func os.IsRemoteTCPPortOpen(v1: string, v2: int) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### os.IsTCPPortAvailable



#### 详细描述



#### 定义：

`func os.IsTCPPortAvailable(v1: int) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### os.IsTCPPortOpen



#### 详细描述



#### 定义：

`func os.IsTCPPortOpen(v1: int) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### os.IsUDPPortAvailable



#### 详细描述



#### 定义：

`func os.IsUDPPortAvailable(v1: int) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### os.IsUDPPortOpen



#### 详细描述



#### 定义：

`func os.IsUDPPortOpen(v1: int) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### os.LookupEnv



#### 详细描述



#### 定义：

`func os.LookupEnv(v1: string) return (r0: string, r1: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |
| r1 | `bool` |   |


 
### os.Pipe



#### 详细描述



#### 定义：

`func os.Pipe() return (r0: *os.File, r1: *os.File, r2: error)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*os.File` |   |
| r1 | `*os.File` |   |
| r2 | `error` |   |


 
### os.Remove



#### 详细描述



#### 定义：

`func os.Remove(v1: string) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### os.RemoveAll



#### 详细描述



#### 定义：

`func os.RemoveAll(v1: string) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### os.Rename



#### 详细描述



#### 定义：

`func os.Rename(v1: string, v2: string) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### os.Setenv



#### 详细描述



#### 定义：

`func os.Setenv(v1: string, v2: string) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### os.Unsetenv



#### 详细描述



#### 定义：

`func os.Unsetenv(v1: string) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 


