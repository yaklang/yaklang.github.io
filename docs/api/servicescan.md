# servicescan


|成员函数|函数描述/介绍|
|:------|:--------|
 | [servicescan.Scan](#servicescanscan) |  |
 | [servicescan.ScanFromSpaceEngine](#servicescanscanfromspaceengine) |  |
 | [servicescan.ScanFromSynResult](#servicescanscanfromsynresult) |  |
 | [servicescan.ScanOne](#servicescanscanone) |  |
 | [servicescan.active](#servicescanactive) |  |
 | [servicescan.all](#servicescanall) |  |
 | [servicescan.concurrent](#servicescanconcurrent) |  |
 | [servicescan.maxProbes](#servicescanmaxprobes) |  |
 | [servicescan.maxProbesConcurrent](#servicescanmaxprobesconcurrent) |  |
 | [servicescan.nmapRarityMax](#servicescannmapraritymax) |  |
 | [servicescan.nmapRule](#servicescannmaprule) |  |
 | [servicescan.proto](#servicescanproto) |  |
 | [servicescan.service](#servicescanservice) |  |
 | [servicescan.web](#servicescanweb) |  |
 | [servicescan.webRule](#servicescanwebrule) |  |




 



## 函数定义

### servicescan.Scan



#### 定义：

`func (v1: string, v2: string, v3 ...func ConfigOption(v1: *fp.Config) ) return(chan *fp.MatchResult, error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |
| v2 | string |   |
| v3 | []fp.ConfigOption |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | chan *fp.MatchResult |   |
| r1 | error |   |


### servicescan.ScanFromSpaceEngine



#### 定义：

`func (v1: interface {}, v2 ...func ConfigOption(v1: *fp.Config) ) return(chan *fp.MatchResult, error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | interface {} |   |
| v2 | []fp.ConfigOption |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | chan *fp.MatchResult |   |
| r1 | error |   |


### servicescan.ScanFromSynResult



#### 定义：

`func (v1: interface {}, v2 ...func ConfigOption(v1: *fp.Config) ) return(chan *fp.MatchResult, error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | interface {} |   |
| v2 | []fp.ConfigOption |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | chan *fp.MatchResult |   |
| r1 | error |   |


### servicescan.ScanOne



#### 定义：

`func (v1: string, v2: int, v3 ...func ConfigOption(v1: *fp.Config) ) return(*fp.MatchResult, error) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | string |   |
| v2 | int |   |
| v3 | []fp.ConfigOption |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | *fp.MatchResult |   |
| r1 | error |   |


### servicescan.active



#### 定义：

`func (v1: bool) return(func ConfigOption(v1: *fp.Config) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | bool |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func ConfigOption(v1: *fp.Config)  |   |


### servicescan.all



#### 定义：

`func () return(func ConfigOption(v1: *fp.Config) ) `

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func ConfigOption(v1: *fp.Config)  |   |


### servicescan.concurrent



#### 定义：

`func (v1: int) return(func ConfigOption(v1: *fp.Config) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | int |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func ConfigOption(v1: *fp.Config)  |   |


### servicescan.maxProbes



#### 定义：

`func (v1: int) return(func ConfigOption(v1: *fp.Config) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | int |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func ConfigOption(v1: *fp.Config)  |   |


### servicescan.maxProbesConcurrent



#### 定义：

`func (v1: int) return(func ConfigOption(v1: *fp.Config) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | int |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func ConfigOption(v1: *fp.Config)  |   |


### servicescan.nmapRarityMax



#### 定义：

`func (v1: int) return(func ConfigOption(v1: *fp.Config) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | int |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func ConfigOption(v1: *fp.Config)  |   |


### servicescan.nmapRule



#### 定义：

`func (v1: interface {}) return(func ConfigOption(v1: *fp.Config) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | interface {} |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func ConfigOption(v1: *fp.Config)  |   |


### servicescan.proto



#### 定义：

`func (v1 ...interface {}) return(func ConfigOption(v1: *fp.Config) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | []interface {} |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func ConfigOption(v1: *fp.Config)  |   |


### servicescan.service



#### 定义：

`func () return(func ConfigOption(v1: *fp.Config) ) `

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func ConfigOption(v1: *fp.Config)  |   |


### servicescan.web



#### 定义：

`func () return(func ConfigOption(v1: *fp.Config) ) `

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func ConfigOption(v1: *fp.Config)  |   |


### servicescan.webRule



#### 定义：

`func (v1: interface {}) return(func ConfigOption(v1: *fp.Config) ) `


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | interface {} |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | func ConfigOption(v1: *fp.Config)  |   |





