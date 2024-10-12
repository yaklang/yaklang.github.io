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
| [ssa.withContext](#withcontext) ||
| [ssa.withDatabasePath](#withdatabasepath) ||
| [ssa.withDescription](#withdescription) ||
| [ssa.withEntryFile](#withentryfile) ||
| [ssa.withExternLib](#withexternlib) ||
| [ssa.withExternValue](#withexternvalue) ||
| [ssa.withLanguage](#withlanguage) ||
| [ssa.withProcess](#withprocess) ||
| [ssa.withProgramName](#withprogramname) |save to database, please set the program name |
| [ssa.withReCompile](#withrecompile) ||
| [ssa.withSaveToProfile](#withsavetoprofile) ||
| [ssa.withStrictMode](#withstrictmode) ||


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


### withContext

#### 详细描述


#### 定义

`withContext(ctx context.Context) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### withDatabasePath

#### 详细描述


#### 定义

`withDatabasePath(path string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### withDescription

#### 详细描述


#### 定义

`withDescription(desc string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| desc | `string` |   |

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


### withProgramName

#### 详细描述
save to database, please set the program name


#### 定义

`withProgramName(name string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |

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


### withSaveToProfile

#### 详细描述


#### 定义

`withSaveToProfile(b ...bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `...bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### withStrictMode

#### 详细描述


#### 定义

`withStrictMode(b bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


