# gzip


|成员函数|函数描述/介绍|
|:------|:--------|
 | [gzip.Compress](#gzipcompress) | 把一个数据进行 gzip 压缩 |
 | [gzip.Decompress](#gzipdecompress) | 解压缩 |
 | [gzip.IsGzip](#gzipisgzip) |  |




 



## 函数定义

### gzip.Compress

把一个数据进行 gzip 压缩

#### 详细描述



#### 定义：

`func gzip.Compress(v1: any) return (r0: bytes, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### gzip.Decompress

解压缩

#### 详细描述



#### 定义：

`func gzip.Decompress(v1: bytes) return (r0: bytes, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### gzip.IsGzip



#### 详细描述



#### 定义：

`func gzip.IsGzip(v1: bytes) return (r0: bool)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `bytes` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bool` |   |


 


