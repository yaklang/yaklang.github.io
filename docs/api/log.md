# log


|成员函数|函数描述/介绍|
|:------|:--------|
 | [log.debug](#logdebug) | 打印日志调试信息 |
 | [log.error](#logerror) | 打印日志错误信息 |
 | [log.info](#loginfo) | 打印日志【信息】 |
 | [log.setLevel](#logsetlevel) | 设置当前脚本的日志级别 |
 | [log.warn](#logwarn) | 打印日志信息【警告级别】 |




 



## 函数定义

### log.debug

打印日志调试信息

#### 详细描述



#### 定义：

`debug(format string, args ...any)  doc:Debugf will print when logger&#39;s Level is debug.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fmt | `string` |   |
| items | `...any` |   |




 

 
### log.error

打印日志错误信息

#### 详细描述



#### 定义：

`error(format string, args ...any)  doc:Errorf will print only when logger&#39;s Level is error, warn, info or debug.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fmt | `string` |   |
| items | `...any` |   |




 

 
### log.info

打印日志【信息】

#### 详细描述



#### 定义：

`info(format string, args ...any)  doc:Infof will print when logger&#39;s Level is info or debug.`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fmt | `string` |   |
| items | `...any` |   |




 

 
### log.setLevel

设置当前脚本的日志级别

#### 详细描述



#### 定义：

`setLevel(i any)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| level | `any` |   |




 

 
### log.warn

打印日志信息【警告级别】

#### 详细描述



#### 定义：

`warn(raw string, args ...any)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fmt | `string` |   |
| items | `...any` |   |




 

 


