# ssa

|实例名|实例描述|
|:------|:--------|
Yak|(ssaapi.Language) "yak"|
PHP|(ssaapi.Language) "php"|
Java|(ssaapi.Language) "java"|
Javascript|(ssaapi.Language) "js"|

|函数名|函数描述/介绍|
|:------|:--------|
| [ssa.Parse](#parse) ||
| [ssa.withDatabaseProgramName](#withdatabaseprogramname) |save to database, please set the program name |
| [ssa.withExternLib](#withexternlib) ||
| [ssa.withExternValue](#withexternvalue) ||
| [ssa.withLanguage](#withlanguage) ||


## 函数定义
### Parse

#### 详细描述


#### 定义

`Parse(code string, opts ...Option) (*Program, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| code | `string` |   |
| opts | `...Option` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*Program` |   |
| r2 | `error` |   |


### withDatabaseProgramName

#### 详细描述
save to database, please set the program name


#### 定义

`withDatabaseProgramName(name string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### withExternLib

#### 详细描述


#### 定义

`withExternLib(name string, table map[string]any) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| table | `map[string]any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### withExternValue

#### 详细描述


#### 定义

`withExternValue(table map[string]any) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| table | `map[string]any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### withLanguage

#### 详细描述


#### 定义

`withLanguage(language Language) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| language | `Language` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


