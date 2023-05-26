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
 | [file.NewMultiFileLineReader](#filenewmultifilelinereader) |  |
 | [file.Open](#fileopen) | 打开一个文件，如果没有就创建，使用最多权限 |
 | [file.OpenFile](#fileopenfile) |  |
 | [file.ReadAll](#filereadall) | 把一个 reader 的内容全部读出来 |
 | [file.ReadDirInfoInDirectory](#filereaddirinfoindirectory) |  |
 | [file.ReadFile](#filereadfile) | 把一个文件内容读出来 |
 | [file.ReadFileInfoInDirectory](#filereadfileinfoindirectory) |  |
 | [file.ReadLines](#filereadlines) |  |
 | [file.Remove](#fileremove) | 把一个文件移除，相当于 `os.RemoveAll` |
 | [file.Rename](#filerename) | 把一个路径重命名 |
 | [file.Rm](#filerm) | 同 `file.Remove` / Golang `os.RemoveAll` |
 | [file.Save](#filesave) | 把 content 中的内容写入文件名为 fileName 中的文件，支持 bytes/string/[]string |
 | [file.SaveJson](#filesavejson) |  |
 | [file.Split](#filesplit) |  |
 | [file.Stat](#filestat) |  |
 | [file.TailF](#filetailf) |  |
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

`Abs(string) string`


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

`Cat(string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fileName | `string` |  想要查看内容的文件名 |




 

 
### file.Cp

复制文件

#### 详细描述



#### 定义：

`Cp(src, dst string) error  doc:Copy the src file to dst. Any existing file will be overwritten and will notcopy file attributes.`


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

`Create(string) (*yaklib._yakFile, error)`


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

`Dir(i string) []*utils.FileInfo`


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

`GetDirPath(path string) string  doc:Dir returns all but the last element of path, typically the path&#39;s directory.After dropping the final element, Dir calls Clean on the path and trailingslashes are removed.If the path is empty, Dir returns &#34;.&#34;.If the path consists entirely of separators, Dir returns a single separator.The returned path does not end in a separator unless it is the root directory.`


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

`IsAbs(path string) bool  doc:IsAbs reports whether the path is absolute.`


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

`IsDir(file string) bool`


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

`IsExisted(string) bool`


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

`IsFile(string) bool`


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

`IsLink(file string) bool`


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

`Join(elem ...string) string  doc:Join joins any number of path elements into a single path,separating them with an OS specific Separator. Empty elementsare ignored. The result is Cleaned. However, if the argumentlist is empty or all its elements are empty, Join returnsan empty string.On Windows, the result will only be a UNC path if the firstnon-empty element is a UNC path.`


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

`Ls(i string) []*utils.FileInfo`


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

`Lstat(string) (fs.FileInfo, error)`


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

`Mkdir(string) error`


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

`MkdirAll(string) error`


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

`Mv(oldpath, newpath string) error  doc:Rename renames (moves) oldpath to newpath.If newpath already exists and is not a directory, Rename replaces it.OS-specific restrictions may apply when oldpath and newpath are in different directories.If there is an error, it will be of type *LinkError.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| oldPath | `string` |   |
| newPath | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### file.NewMultiFileLineReader



#### 详细描述



#### 定义：

`NewMultiFileLineReader(...string) (*mfreader.MultiFileLineReader, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*mfreader.MultiFileLineReader` |   |
| r1 | `error` |   |


 
### file.Open

打开一个文件，如果没有就创建，使用最多权限

#### 详细描述



#### 定义：

`Open(string) (*yaklib._yakFile, error)`


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

`OpenFile(string, int, fs.FileMode) (*yaklib._yakFile, error)`


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

`ReadAll(r io.Reader) ([]byte, error)  doc:ReadAll reads from r until an error or EOF and returns the data it read.A successful call returns err == nil, not err == EOF. Because ReadAll isdefined to read from src until EOF, it does not treat an EOF from Readas an error to be reported.As of Go 1.16, this function simply calls io.ReadAll.`


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

`ReadDirInfoInDirectory(string) ([]*utils.FileInfo, error)`


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

`ReadFile(filename string) ([]byte, error)  doc:ReadFile reads the file named by filename and returns the contents.A successful call returns err == nil, not err == EOF. Because ReadFilereads the whole file, it does not treat an EOF from Read as an errorto be reported.As of Go 1.16, this function simply calls os.ReadFile.`


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

`ReadFileInfoInDirectory(string) ([]*utils.FileInfo, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]*utils.FileInfo` |   |
| r1 | `error` |   |


 
### file.ReadLines



#### 详细描述



#### 定义：

`ReadLines(i any) []string`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]string` |   |


 
### file.Remove

把一个文件移除，相当于 `os.RemoveAll`

#### 详细描述



#### 定义：

`Remove(path string) error  doc:RemoveAll removes path and any children it contains.It removes everything it can but returns the first errorit encounters. If the path does not exist, RemoveAllreturns nil (no error).If there is an error, it will be of type *PathError.`


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

`Rename(oldpath, newpath string) error  doc:Rename renames (moves) oldpath to newpath.If newpath already exists and is not a directory, Rename replaces it.OS-specific restrictions may apply when oldpath and newpath are in different directories.If there is an error, it will be of type *LinkError.`


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

`Rm(path string) error  doc:RemoveAll removes path and any children it contains.It removes everything it can but returns the first errorit encounters. If the path does not exist, RemoveAllreturns nil (no error).If there is an error, it will be of type *PathError.`


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

`Save(fileName string, i any) error`


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

`SaveJson(string, any) error`


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

`Split(path string) (dir, file string)  doc:Split splits path immediately following the final Separator,separating it into a directory and file name component.If there is no Separator in path, Split returns an empty dirand file set to path.The returned values have the property that path = dir&#43;file.`


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

`Stat(string) (fs.FileInfo, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `fs.FileInfo` |   |
| r1 | `error` |   |


 
### file.TailF



#### 详细描述



#### 定义：

`TailF(string, func(string))`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `func (v1: string) ` |   |




 

 
### file.TempFile



#### 详细描述



#### 定义：

`TempFile(...string) (*yaklib._yakFile, error)`


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

`TempFileName() (string, error)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |
| r1 | `error` |   |


 


