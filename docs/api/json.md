# json


|成员函数|函数描述/介绍|
|:------|:--------|
 | [json.Find](#jsonfind) |  |
 | [json.FindPath](#jsonfindpath) |  |
 | [json.Marshal](#jsonmarshal) |  |
 | [json.New](#jsonnew) |  |
 | [json.dumps](#jsondumps) | 把一个任何Yak/Golang对象解析为 string |
 | [json.loads](#jsonloads) | 把一个JSON字符串解析成Yak对象，要注意参数支持 string 或 bytes |




 



## 函数定义

### json.Find



#### 详细描述



#### 定义：

`func json.Find(v1: any, v2: string) return (r0: any)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |


 
### json.FindPath



#### 详细描述



#### 定义：

`func json.FindPath(v1: any, v2: string) return (r0: any)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |


 
### json.Marshal



#### 详细描述



#### 定义：

`func json.Marshal(v1: any) return (r0: bytes, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `bytes` |   |
| r1 | `error` |   |


 
### json.New



#### 详细描述



#### 定义：

`func json.New(v1: any) return (r0: *yaklib.yakJson, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yaklib.yakJson` |   |
| r1 | `error` |   |


 
### json.dumps

把一个任何Yak/Golang对象解析为 string

#### 详细描述



#### 定义：

`func json.dumps(v1: any) return (r0: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |


 
### json.loads

把一个JSON字符串解析成Yak对象，要注意参数支持 string 或 bytes

#### 详细描述



#### 定义：

`func json.loads(v1: string|[]byte) return (r0: any)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string|[]byte` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `any` |   |


 


