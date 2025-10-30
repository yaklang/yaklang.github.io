# ssa

|实例名|实例描述|
|:------|:--------|
Java|(ssaconfig.Language) &#34;java&#34;|
Javascript|(ssaconfig.Language) &#34;js&#34;|
PHP|(ssaconfig.Language) &#34;php&#34;|
Yak|(ssaconfig.Language) &#34;yak&#34;|
progName|(schema.SSADiffResultKind) &#34;program&#34;|
runtimeId|(schema.SSADiffResultKind) &#34;runtimeId&#34;|

|函数名|函数描述/介绍|
|:------|:--------|
| [ssa.NewFromProgramName](#newfromprogramname) ||
| [ssa.NewProgramFromDB](#newprogramfromdb) ||
| [ssa.NewResultFromDB](#newresultfromdb) ||
| [ssa.Parse](#parse) ||
| [ssa.ParseLocalProject](#parselocalproject) ||
| [ssa.ParseProject](#parseproject) ||
| [ssa.YaklangScriptChecking](#yaklangscriptchecking) ||
| [ssa.withConcurrency](#withconcurrency) ||
| [ssa.withConfigInfo](#withconfiginfo) ||
| [ssa.withContext](#withcontext) ||
| [ssa.withDefaultExcludeFunc](#withdefaultexcludefunc) ||
| [ssa.withDescription](#withdescription) ||
| [ssa.withEntryFile](#withentryfile) ||
| [ssa.withExcludeFile](#withexcludefile) ||
| [ssa.withExternLib](#withexternlib) ||
| [ssa.withExternValue](#withexternvalue) ||
| [ssa.withLanguage](#withlanguage) ||
| [ssa.withMemory](#withmemory) ||
| [ssa.withPeepholeSize](#withpeepholesize) ||
| [ssa.withProcess](#withprocess) ||
| [ssa.withProgramName](#withprogramname) |save to database, please set the program name |
| [ssa.withProjectName](#withprojectname) ||
| [ssa.withReCompile](#withrecompile) ||
| [ssa.withSSAConfig](#withssaconfig) ||
| [ssa.withStrictMode](#withstrictmode) ||


## 函数定义
### NewFromProgramName

#### 详细描述


#### 定义

`NewFromProgramName(programName string) (p *Program, err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| programName | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| p | `*Program` |   |
| err | `error` |   |


### NewProgramFromDB

#### 详细描述


#### 定义

`NewProgramFromDB(programName string) (p *Program, err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| programName | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| p | `*Program` |   |
| err | `error` |   |


### NewResultFromDB

#### 详细描述


#### 定义

`NewResultFromDB(resultID uint, force ...bool) (*SyntaxFlowResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| resultID | `uint` |   |
| force | `...bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*SyntaxFlowResult` |   |
| r2 | `error` |   |


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


### ParseProject

#### 详细描述


#### 定义

`ParseProject(opts ...Option) (prog Programs, err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...Option` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| prog | `Programs` |   |
| err | `error` |   |


### YaklangScriptChecking

#### 详细描述


#### 定义

`YaklangScriptChecking(code string, pluginType string) []*result.StaticAnalyzeResult`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| code | `string` |   |
| pluginType | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*result.StaticAnalyzeResult` |   |


### withConcurrency

#### 详细描述


#### 定义

`withConcurrency(concurrency int) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| concurrency | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### withConfigInfo

#### 详细描述


#### 定义

`withConfigInfo(input map[string]any) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| input | `map[string]any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


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


### withDefaultExcludeFunc

#### 详细描述


#### 定义

`withDefaultExcludeFunc(patterns []string) (Option, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| patterns | `[]string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |
| r2 | `error` |   |


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


### withExcludeFile

#### 详细描述


#### 定义

`withExcludeFile(f func(path, filename string) bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `func(path, filename string) bool` |   |

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


### withMemory

#### 详细描述


#### 定义

`withMemory(ttl ...time.Duration) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ttl | `...time.Duration` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### withPeepholeSize

#### 详细描述


#### 定义

`withPeepholeSize(size int) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| size | `int` |   |

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


### withProjectName

#### 详细描述


#### 定义

`withProjectName(name string) Option`

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


### withSSAConfig

#### 详细描述


#### 定义

`withSSAConfig(sc *ssaconfig.Config) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| sc | `*ssaconfig.Config` |   |

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


