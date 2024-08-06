# ssa

|实例名|实例描述|
|:------|:--------|
Java|(consts.Language) &#34;java&#34;|
Javascript|(consts.Language) &#34;js&#34;|
PHP|(consts.Language) &#34;php&#34;|
Yak|(consts.Language) &#34;yak&#34;|

|函数名|函数描述/介绍|
|:------|:--------|
| [ssa.Parse](#parse) ||
| [ssa.ParseLocalProject](#parselocalproject) ||
| [ssa.withDatabaseProgramName](#withdatabaseprogramname) |save to database, please set the program name |
| [ssa.withEntryFile](#withentryfile) ||
| [ssa.withExternLib](#withexternlib) ||
| [ssa.withExternValue](#withexternvalue) ||
| [ssa.withLanguage](#withlanguage) ||
| [ssa.withProcess](#withprocess) ||
| [ssa.withReCompile](#withrecompile) ||


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


### ParseLocalProject

#### 详细描述


#### 定义

`ParseLocalProject(path string, opts ...Option) (Programs, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` |   |
| opts | `...Option` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Programs` |   |
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


### withEntryFile

#### 详细描述


#### 定义

`withEntryFile(files ...string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| files | `...string` |   |

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

`withLanguage(input_language string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| input_language | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### withProcess

#### 详细描述


#### 定义

`withProcess(process ProcessFunc) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| process | `ProcessFunc` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### withReCompile

#### 详细描述


#### 定义

`withReCompile(b bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


