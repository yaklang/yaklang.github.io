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



#### 定义：

`func () `

 

 

### os.Environ



#### 定义：

`func () return([]string) `

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | []string |   |


### os.Executable



#### 定义：

`func () return(string, error) `

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | string |   |
| r1 | error |   |


### os.Exit



#### 定义：

`func (v1: int) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | int |   |




 

### os.ExpandEnv



#### 定义：

`func (v1: string) return(string) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | string |   |


### os.GetRandomAvailableTCPPort



#### 定义：

`func () return(int) `

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | int |   |


### os.GetRandomAvailableUDPPort



#### 定义：

`func () return(int) `

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | int |   |


### os.Getenv



#### 定义：

`func (v1: string) return(string) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | string |   |


### os.IsRemoteTCPPortOpen



#### 定义：

`func (v1: string, v2: int) return(bool) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |
| v2 | int |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | bool |   |


### os.IsTCPPortAvailable



#### 定义：

`func (v1: int) return(bool) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | int |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | bool |   |


### os.IsTCPPortOpen



#### 定义：

`func (v1: int) return(bool) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | int |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | bool |   |


### os.IsUDPPortAvailable



#### 定义：

`func (v1: int) return(bool) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | int |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | bool |   |


### os.IsUDPPortOpen



#### 定义：

`func (v1: int) return(bool) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | int |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | bool |   |


### os.LookupEnv



#### 定义：

`func (v1: string) return(string, bool) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | string |   |
| r1 | bool |   |


### os.Pipe



#### 定义：

`func () return(*os.File, *os.File, error) `

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | *os.File |   |
| r1 | *os.File |   |
| r2 | error |   |


### os.Remove



#### 定义：

`func (v1: string) return(error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | error |   |


### os.RemoveAll



#### 定义：

`func (v1: string) return(error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | error |   |


### os.Rename



#### 定义：

`func (v1: string, v2: string) return(error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |
| v2 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | error |   |


### os.Setenv



#### 定义：

`func (v1: string, v2: string) return(error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |
| v2 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | error |   |


### os.Unsetenv



#### 定义：

`func (v1: string) return(error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | error |   |





