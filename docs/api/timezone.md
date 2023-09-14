# timezone

|成员函数|函数描述/介绍|
|:------|:--------|
| [timezone.Get](#Get) |LoadLocation returns the Location with the given name.If the name is "" or "UTC", LoadLocation returns UTC.If the name is "Local", LoadLocation returns Local.Otherwise, the name is taken to be a location name corresponding to a filein the IANA Time Zone database, such as "America/New_York".LoadLocation looks for the IANA Time Zone database in the followinglocations in order:  - the directory or uncompressed zip file named by the ZONEINFO environment variable  - on a Unix system, the system standard installation location  - $GOROOT/lib/time/zoneinfo.zip  - the time/tzdata package, if it was imported|
| [timezone.Now](#Now) ||


## 函数定义
### timezone.Get

#### 详细描述
LoadLocation returns the Location with the given name.If the name is "" or "UTC", LoadLocation returns UTC.If the name is "Local", LoadLocation returns Local.Otherwise, the name is taken to be a location name corresponding to a filein the IANA Time Zone database, such as "America/New_York".LoadLocation looks for the IANA Time Zone database in the followinglocations in order:  - the directory or uncompressed zip file named by the ZONEINFO environment variable  - on a Unix system, the system standard installation location  - $GOROOT/lib/time/zoneinfo.zip  - the time/tzdata package, if it was imported

#### 定义

`Get(name string) (*Location, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*Location` |   |
| r2 | `error` |   |


### timezone.Now

#### 详细描述


#### 定义

`Now(i string) time.Time`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `time.Time` |   |


