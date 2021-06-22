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



#### 详细描述



#### 定义：

`func file.Abs(v1: string) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### file.Cat



#### 详细描述



#### 定义：

``func file.Cat(v1: string)``


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |




 

 
### file.Cp



#### 详细描述



#### 定义：

`func file.Cp(v1: string, v2: string) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### file.Create



#### 详细描述



#### 定义：

`func file.Create(v1: string) return (r0: *yaklib._yakFile, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yaklib._yakFile` |   |
| r1 | `error` |   |


 
### file.DeepLs



#### 详细描述



#### 定义：

`func file.DeepLs(v1: string) return (r0: []*utils.FileInfo)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]*utils.FileInfo` |   |


 
### file.Dir



#### 详细描述



#### 定义：

`func file.Dir(v1: string) return (r0: []*utils.FileInfo)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]*utils.FileInfo` |   |


 
### file.IsAbs



#### 详细描述



#### 定义：

`func file.IsAbs(v1: string) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### file.IsDir



#### 详细描述



#### 定义：

`func file.IsDir(v1: string) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### file.IsExisted



#### 详细描述



#### 定义：

`func file.IsExisted(v1: string) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### file.IsFile



#### 详细描述



#### 定义：

`func file.IsFile(v1: string) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### file.IsLink



#### 详细描述



#### 定义：

`func file.IsLink(v1: string) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### file.Join



#### 详细描述



#### 定义：

`func file.Join(v1 ...[]string) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `[]string /*可变参数*/` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### file.Ls



#### 详细描述



#### 定义：

`func file.Ls(v1: string) return (r0: []*utils.FileInfo)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]*utils.FileInfo` |   |


 
### file.Lstat



#### 详细描述



#### 定义：

`func file.Lstat(v1: string) return (r0: fs.FileInfo, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `fs.FileInfo` |   |
| r1 | `error` |   |


 
### file.Mkdir



#### 详细描述



#### 定义：

`func file.Mkdir(v1: string) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### file.MkdirAll



#### 详细描述



#### 定义：

`func file.MkdirAll(v1: string) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### file.Mv



#### 详细描述



#### 定义：

`func file.Mv(v1: string, v2: string) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### file.Open



#### 详细描述



#### 定义：

`func file.Open(v1: string) return (r0: *yaklib._yakFile, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yaklib._yakFile` |   |
| r1 | `error` |   |


 
### file.OpenFile



#### 详细描述



#### 定义：

`func file.OpenFile(v1: string, v2: int, v3: fs.FileMode) return (r0: *yaklib._yakFile, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `int` |   |
| v3 | `fs.FileMode` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yaklib._yakFile` |   |
| r1 | `error` |   |


 
### file.ReadAll



#### 详细描述



#### 定义：

`func file.ReadAll(v1: io.Reader) return (r0: bytes, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `io.Reader` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### file.ReadFile



#### 详细描述



#### 定义：

`func file.ReadFile(v1: string) return (r0: bytes, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### file.Remove



#### 详细描述



#### 定义：

`func file.Remove(v1: string) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### file.Rename



#### 详细描述



#### 定义：

`func file.Rename(v1: string, v2: string) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### file.Rm



#### 详细描述



#### 定义：

`func file.Rm(v1: string) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### file.Save



#### 详细描述



#### 定义：

`func file.Save(v1: string, v2: interface {}) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `interface {}` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### file.SaveJson



#### 详细描述



#### 定义：

`func file.SaveJson(v1: string, v2: interface {}) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `interface {}` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### file.Stat



#### 详细描述



#### 定义：

`func file.Stat(v1: string) return (r0: fs.FileInfo, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `fs.FileInfo` |   |
| r1 | `error` |   |


 
### file.TempFile



#### 详细描述



#### 定义：

`func file.TempFile(v1: string) return (r0: *yaklib._yakFile, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yaklib._yakFile` |   |
| r1 | `error` |   |


 


