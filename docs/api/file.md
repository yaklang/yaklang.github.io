# file


|成员函数|函数描述/介绍|
|:------|:--------|
 | [file.Abs](#fileabs) | 把相对路径变为绝对路径，如果出错，原样返回 |
 | [file.Cat](#filecat) | 把文件内容 `cat`到显示屏 |
 | [file.Cp](#filecp) | 复制文件 |
 | [file.Create](#filecreate) | 创建一个文件，当前用户下读写执行权限均打开 |
 | [file.Dir](#filedir) | 同 `file.Ls` |
 | [file.GetDirPath](#filegetdirpath) |  |
 | [file.IsAbs](#fileisabs) | 判断路径是否是绝对路径名 |
 | [file.IsDir](#fileisdir) | 判断路径是否是一个文件夹 |
 | [file.IsExisted](#fileisexisted) | 判断路径文件是否存在 |
 | [file.IsFile](#fileisfile) | 判断文件是否存在 |
 | [file.IsLink](#fileislink) | 判断一个路径是否是一个文件链接/快捷方式 |
 | [file.Join](#filejoin) | 拼接路径 |
 | [file.Ls](#filels) | 查看当前路径下是否有其他文件 |
 | [file.Lstat](#filelstat) |  |
 | [file.Mkdir](#filemkdir) | 创建一个文件夹，如果无法创建，基本等同于 `mkdir [path]`，则会失败 |
 | [file.MkdirAll](#filemkdirall) | 强制创建个文件夹，如果没有父路径，则会强制创建，相当于执行 `mkdir -p [path]` |
 | [file.Mv](#filemv) | 把一个文件 move 到另一个地方，本质上执行 `os.Rename` |
 | [file.Open](#fileopen) | 打开一个文件，如果没有就创建，使用最多权限 |
 | [file.OpenFile](#fileopenfile) |  |
 | [file.ReadAll](#filereadall) | 把一个 reader 的内容全部读出来 |
 | [file.ReadDirInfoInDirectory](#filereaddirinfoindirectory) |  |
 | [file.ReadFile](#filereadfile) | 把一个文件内容读出来 |
 | [file.ReadFileInfoInDirectory](#filereadfileinfoindirectory) |  |
 | [file.Remove](#fileremove) | 把一个文件移除，相当于 `os.RemoveAll` |
 | [file.Rename](#filerename) | 把一个路径重命名 |
 | [file.Rm](#filerm) | 同 `file.Remove` / Golang `os.RemoveAll` |
 | [file.Save](#filesave) | 把 content 中的内容写入文件名为 fileName 中的文件，支持 bytes/string/[]string |
 | [file.SaveJson](#filesavejson) |  |
 | [file.Split](#filesplit) |  |
 | [file.Stat](#filestat) |  |
 | [file.TempFile](#filetempfile) |  |
 | [file.TempFileName](#filetempfilename) |  |




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

把相对路径变为绝对路径，如果出错，原样返回

#### 详细描述



#### 定义：

`func file.Abs(path: string) return (absPath: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| absPath | `string` |   |


 
### file.Cat

把文件内容 `cat`到显示屏

#### 详细描述



#### 定义：

``func file.Cat(fileName: string)``


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fileName | `string` |  想要查看内容的文件名 |




 

 
### file.Cp

复制文件

#### 详细描述



#### 定义：

`func file.Cp(originFile: string, targetFile: string) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| originFile | `string` |  想要复制的文件 |
| targetFile | `string` |  目标文件 |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### file.Create

创建一个文件，当前用户下读写执行权限均打开

#### 详细描述



#### 定义：

`func file.Create(fileName: string) return (r0: *yaklib._yakFile, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fileName | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yaklib._yakFile` |   |
| r1 | `error` |   |


 
### file.Dir

同 `file.Ls`

#### 详细描述



#### 定义：

`func file.Dir(dirName: string) return (fileInfos: []*utils.FileInfo)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| dirName | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| fileInfos | `[]*utils.FileInfo` |   |


 
### file.GetDirPath



#### 详细描述



#### 定义：

`func file.GetDirPath(v1: string) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### file.IsAbs

判断路径是否是绝对路径名

#### 详细描述



#### 定义：

`func file.IsAbs(absPath: string) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| absPath | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### file.IsDir

判断路径是否是一个文件夹

#### 详细描述



#### 定义：

`func file.IsDir(path: string) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### file.IsExisted

判断路径文件是否存在

#### 详细描述



#### 定义：

`func file.IsExisted(path: string) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### file.IsFile

判断文件是否存在

#### 详细描述



#### 定义：

`func file.IsFile(path: string) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### file.IsLink

判断一个路径是否是一个文件链接/快捷方式

#### 详细描述



#### 定义：

`func file.IsLink(path: string) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 
### file.Join

拼接路径

#### 详细描述



#### 定义：

`func file.Join(paths ...string) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| paths | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### file.Ls

查看当前路径下是否有其他文件

#### 详细描述



#### 定义：

`func file.Ls(dirPath: string) return (r0: []*utils.FileInfo)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| dirPath | `string` |   |





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

创建一个文件夹，如果无法创建，基本等同于 `mkdir [path]`，则会失败

#### 详细描述



#### 定义：

`func file.Mkdir(path: string) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### file.MkdirAll

强制创建个文件夹，如果没有父路径，则会强制创建，相当于执行 `mkdir -p [path]`

#### 详细描述



#### 定义：

`func file.MkdirAll(path: string) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### file.Mv

把一个文件 move 到另一个地方，本质上执行 `os.Rename`

#### 详细描述



#### 定义：

`func file.Mv(oldPath: string, newPath: string) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| oldPath | `string` |   |
| newPath | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### file.Open

打开一个文件，如果没有就创建，使用最多权限

#### 详细描述



#### 定义：

`func file.Open(fileName: string) return (r0: *yaklib._yakFile, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fileName | `string` |   |





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

把一个 reader 的内容全部读出来

#### 详细描述



#### 定义：

`func file.ReadAll(ioReader: io.Reader) return (r0: bytes, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ioReader | `io.Reader` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### file.ReadDirInfoInDirectory



#### 详细描述



#### 定义：

`func file.ReadDirInfoInDirectory(v1: string) return (r0: []*utils.FileInfo, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]*utils.FileInfo` |   |
| r1 | `error` |   |


 
### file.ReadFile

把一个文件内容读出来

#### 详细描述



#### 定义：

`func file.ReadFile(fileName: string) return (fileContent: bytes, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fileName | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| fileContent | `bytes` |   |
| r1 | `error` |   |


 
### file.ReadFileInfoInDirectory



#### 详细描述



#### 定义：

`func file.ReadFileInfoInDirectory(v1: string) return (r0: []*utils.FileInfo, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]*utils.FileInfo` |   |
| r1 | `error` |   |


 
### file.Remove

把一个文件移除，相当于 `os.RemoveAll`

#### 详细描述



#### 定义：

`func file.Remove(fileName: string) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fileName | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### file.Rename

把一个路径重命名

#### 详细描述



#### 定义：

`func file.Rename(oldPath: string, newPath: string) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| oldPath | `string` |   |
| newPath | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### file.Rm

同 `file.Remove` / Golang `os.RemoveAll`

#### 详细描述



#### 定义：

`func file.Rm(fileName: string) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fileName | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### file.Save

把 content 中的内容写入文件名为 fileName 中的文件，支持 bytes/string/[]string

#### 详细描述



#### 定义：

`func file.Save(fileName: string, content: []byte|string|[]string) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fileName | `string` |   |
| content | `[]byte|string|[]string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### file.SaveJson



#### 详细描述



#### 定义：

`func file.SaveJson(filePath: string, v2: any) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| filePath | `string` |   |
| v2 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### file.Split



#### 详细描述



#### 定义：

`func file.Split(v1: string) return (r0: string, r1: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |
| r1 | `string` |   |


 
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

`func file.TempFile(v1 ...string) return (r0: *yaklib._yakFile, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yaklib._yakFile` |   |
| r1 | `error` |   |


 
### file.TempFileName



#### 详细描述



#### 定义：

`func file.TempFileName() return (r0: string, r1: error)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |
| r1 | `error` |   |


 


