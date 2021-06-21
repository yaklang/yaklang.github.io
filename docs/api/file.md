# file


|成员函数|函数描述/介绍|
|:------|:--------|
 | [file.Abs](#fileabs) |  |
 | [file.Cat](#filecat) |  |
 | [file.Cp](#filecp) |  |
 | [file.Create](#filecreate) |  |
 | [file.DeepLs](#filedeepls) |  |
 | [file.Dir](#filedir) |  |
 | [file.IsAbs](#fileisabs) |  |
 | [file.IsDir](#fileisdir) |  |
 | [file.IsExisted](#fileisexisted) |  |
 | [file.IsFile](#fileisfile) |  |
 | [file.IsLink](#fileislink) |  |
 | [file.Join](#filejoin) |  |
 | [file.Ls](#filels) |  |
 | [file.Lstat](#filelstat) |  |
 | [file.Mkdir](#filemkdir) |  |
 | [file.MkdirAll](#filemkdirall) |  |
 | [file.Mv](#filemv) |  |
 | [file.Open](#fileopen) |  |
 | [file.OpenFile](#fileopenfile) |  |
 | [file.ReadAll](#filereadall) |  |
 | [file.ReadFile](#filereadfile) |  |
 | [file.Remove](#fileremove) |  |
 | [file.Rename](#filerename) |  |
 | [file.Rm](#filerm) |  |
 | [file.Save](#filesave) |  |
 | [file.SaveJson](#filesavejson) |  |
 | [file.Stat](#filestat) |  |
 | [file.TempFile](#filetempfile) |  |




## 变量定义

|变量调用名|变量类型|变量解释/帮助信息|
|:-----------|:---------- |:-----------|
|`file.O_APPEND`|`int`| //|
|`file.O_CREATE`|`int`| //|
|`file.O_EXCL`|`int`| //|
|`file.O_RDONLY`|`int`| //|
|`file.O_RDWR`|`int`| //|
|`file.O_SYNC`|`int`| //|
|`file.O_TRUNC`|`int`| //|
|`file.O_WRONLY`|`int`| //|





## 函数定义

### file.Abs



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


### file.Cat



#### 定义：

`func (v1: string) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |




 

### file.Cp



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


### file.Create



#### 定义：

`func (v1: string) return(*yaklib._yakFile, error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | *yaklib._yakFile |   |
| r1 | error |   |


### file.DeepLs



#### 定义：

`func (v1: string) return([]*utils.FileInfo) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | []*utils.FileInfo |   |


### file.Dir



#### 定义：

`func (v1: string) return([]*utils.FileInfo) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | []*utils.FileInfo |   |


### file.IsAbs



#### 定义：

`func (v1: string) return(bool) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | bool |   |


### file.IsDir



#### 定义：

`func (v1: string) return(bool) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | bool |   |


### file.IsExisted



#### 定义：

`func (v1: string) return(bool) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | bool |   |


### file.IsFile



#### 定义：

`func (v1: string) return(bool) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | bool |   |


### file.IsLink



#### 定义：

`func (v1: string) return(bool) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | bool |   |


### file.Join



#### 定义：

`func (v1 ...string) return(string) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | []string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | string |   |


### file.Ls



#### 定义：

`func (v1: string) return([]*utils.FileInfo) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | []*utils.FileInfo |   |


### file.Lstat



#### 定义：

`func (v1: string) return(fs.FileInfo, error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | fs.FileInfo |   |
| r1 | error |   |


### file.Mkdir



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


### file.MkdirAll



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


### file.Mv



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


### file.Open



#### 定义：

`func (v1: string) return(*yaklib._yakFile, error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | *yaklib._yakFile |   |
| r1 | error |   |


### file.OpenFile



#### 定义：

`func (v1: string, v2: int, v3: fs.FileMode) return(*yaklib._yakFile, error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |
| v2 | int |   |
| v3 | fs.FileMode |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | *yaklib._yakFile |   |
| r1 | error |   |


### file.ReadAll



#### 定义：

`func (v1: io.Reader) return([]uint8, error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | io.Reader |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | []uint8 |   |
| r1 | error |   |


### file.ReadFile



#### 定义：

`func (v1: string) return([]uint8, error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | []uint8 |   |
| r1 | error |   |


### file.Remove



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


### file.Rename



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


### file.Rm



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


### file.Save



#### 定义：

`func (v1: string, v2: interface {}) return(error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |
| v2 | interface {} |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | error |   |


### file.SaveJson



#### 定义：

`func (v1: string, v2: interface {}) return(error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |
| v2 | interface {} |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | error |   |


### file.Stat



#### 定义：

`func (v1: string) return(fs.FileInfo, error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | fs.FileInfo |   |
| r1 | error |   |


### file.TempFile



#### 定义：

`func (v1: string) return(*yaklib._yakFile, error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | *yaklib._yakFile |   |
| r1 | error |   |





