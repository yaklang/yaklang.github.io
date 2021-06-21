# tls


|成员函数|函数描述/介绍|
|:------|:--------|
 | [tls.GenerateRootCA](#tlsgeneraterootca) |  |
 | [tls.SignClientCertAndKey](#tlssignclientcertandkey) |  |
 | [tls.SignServerCertAndKey](#tlssignservercertandkey) |  |
 | [tls.SignX509ClientCertAndKey](#tlssignx509clientcertandkey) |  |
 | [tls.SignX509ServerCertAndKey](#tlssignx509servercertandkey) |  |




 



## 函数定义

### tls.GenerateRootCA



#### 定义：

`func (v1: string) return([]uint8, []uint8, error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | []uint8 |   |
| r1 | []uint8 |   |
| r2 | error |   |


### tls.SignClientCertAndKey



#### 定义：

`func (v1: []uint8, v2: []uint8) return([]uint8, []uint8, error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | []uint8 |   |
| v2 | []uint8 |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | []uint8 |   |
| r1 | []uint8 |   |
| r2 | error |   |


### tls.SignServerCertAndKey



#### 定义：

`func (v1: []uint8, v2: []uint8) return([]uint8, []uint8, error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | []uint8 |   |
| v2 | []uint8 |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | []uint8 |   |
| r1 | []uint8 |   |
| r2 | error |   |


### tls.SignX509ClientCertAndKey



#### 定义：

`func (v1: []uint8, v2: []uint8) return([]uint8, []uint8, error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | []uint8 |   |
| v2 | []uint8 |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | []uint8 |   |
| r1 | []uint8 |   |
| r2 | error |   |


### tls.SignX509ServerCertAndKey



#### 定义：

`func (v1: []uint8, v2: []uint8) return([]uint8, []uint8, error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | []uint8 |   |
| v2 | []uint8 |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | []uint8 |   |
| r1 | []uint8 |   |
| r2 | error |   |





