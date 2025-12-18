# ssa

|实例名|实例描述|
|:------|:--------|
Java|(ssaconfig.Language) &#34;java&#34;|
Javascript|(ssaconfig.Language) &#34;js&#34;|
ModeAll|(ssaconfig.Mode) 127|
ModeProjectCompile|(ssaconfig.Mode) 35|
PHP|(ssaconfig.Language) &#34;php&#34;|
Yak|(ssaconfig.Language) &#34;yak&#34;|

|函数名|函数描述/介绍|
|:------|:--------|
| [ssa.GetSSAProjectByID](#getssaprojectbyid) ||
| [ssa.GetSSAProjectByNameAndURL](#getssaprojectbynameandurl) ||
| [ssa.NewConfig](#newconfig) ||
| [ssa.NewFromProgramName](#newfromprogramname) ||
| [ssa.NewProgramFromDB](#newprogramfromdb) ||
| [ssa.NewResultFromDB](#newresultfromdb) ||
| [ssa.NewSSAProject](#newssaproject) ||
| [ssa.Parse](#parse) ||
| [ssa.ParseLocalProject](#parselocalproject) ||
| [ssa.ParseProject](#parseproject) ||
| [ssa.YaklangScriptChecking](#yaklangscriptchecking) ||
| [ssa.withCodeSourceAuthKeyContent](#withcodesourceauthkeycontent) ||
| [ssa.withCodeSourceAuthKeyPath](#withcodesourceauthkeypath) ||
| [ssa.withCodeSourceAuthKind](#withcodesourceauthkind) ||
| [ssa.withCodeSourceAuthPassword](#withcodesourceauthpassword) ||
| [ssa.withCodeSourceAuthUserName](#withcodesourceauthusername) ||
| [ssa.withCodeSourceBranch](#withcodesourcebranch) ||
| [ssa.withCodeSourceKind](#withcodesourcekind) ||
| [ssa.withCodeSourceLocalFile](#withcodesourcelocalfile) ||
| [ssa.withCodeSourcePath](#withcodesourcepath) ||
| [ssa.withCodeSourceURL](#withcodesourceurl) ||
| [ssa.withConcurrency](#withconcurrency) ||
| [ssa.withConfigInfo](#withconfiginfo) ||
| [ssa.withContext](#withcontext) ||
| [ssa.withDefaultExcludeFunc](#withdefaultexcludefunc) ||
| [ssa.withDescription](#withdescription) ||
| [ssa.withEntryFile](#withentryfile) ||
| [ssa.withExcludeFile](#withexcludefile) ||
| [ssa.withExternLib](#withexternlib) ||
| [ssa.withExternValue](#withexternvalue) ||
| [ssa.withJsonRawConfig](#withjsonrawconfig) ||
| [ssa.withLanguage](#withlanguage) ||
| [ssa.withMemory](#withmemory) ||
| [ssa.withPeepholeSize](#withpeepholesize) ||
| [ssa.withProcess](#withprocess) ||
| [ssa.withProgramName](#withprogramname) ||
| [ssa.withProjectDescription](#withprojectdescription) ||
| [ssa.withProjectID](#withprojectid) ||
| [ssa.withProjectLanguage](#withprojectlanguage) ||
| [ssa.withProjectName](#withprojectname) ||
| [ssa.withProjectTags](#withprojecttags) ||
| [ssa.withReCompile](#withrecompile) ||
| [ssa.withStrictMode](#withstrictmode) ||


## 函数定义
### GetSSAProjectByID

#### 详细描述


#### 定义

`GetSSAProjectByID(id uint) (*SSAProject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| id | `uint` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*SSAProject` |   |
| r2 | `error` |   |


### GetSSAProjectByNameAndURL

#### 详细描述


#### 定义

`GetSSAProjectByNameAndURL(projectName string, url string) (*SSAProject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| projectName | `string` |   |
| url | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*SSAProject` |   |
| r2 | `error` |   |


### NewConfig

#### 详细描述


#### 定义

`NewConfig(mode Mode, opts ...Option) (*Config, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| mode | `Mode` |   |
| opts | `...Option` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*Config` |   |
| r2 | `error` |   |


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


### NewSSAProject

#### 详细描述


#### 定义

`NewSSAProject(opts ...ssaconfig.Option) (*SSAProject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...ssaconfig.Option` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*SSAProject` |   |
| r2 | `error` |   |


### Parse

#### 详细描述


#### 定义

`Parse(code string, opts ...ssaconfig.Option) (*Program, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| code | `string` |   |
| opts | `...ssaconfig.Option` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*Program` |   |
| r2 | `error` |   |


### ParseLocalProject

#### 详细描述


#### 定义

`ParseLocalProject(path string, opts ...ssaconfig.Option) (Programs, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` |   |
| opts | `...ssaconfig.Option` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Programs` |   |
| r2 | `error` |   |


### ParseProject

#### 详细描述


#### 定义

`ParseProject(opts ...ssaconfig.Option) (prog Programs, err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...ssaconfig.Option` |   |

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


### withCodeSourceAuthKeyContent

#### 详细描述


#### 定义

`withCodeSourceAuthKeyContent(keyContent string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| keyContent | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### withCodeSourceAuthKeyPath

#### 详细描述


#### 定义

`withCodeSourceAuthKeyPath(keyPath string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| keyPath | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### withCodeSourceAuthKind

#### 详细描述


#### 定义

`withCodeSourceAuthKind(kind string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| kind | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### withCodeSourceAuthPassword

#### 详细描述


#### 定义

`withCodeSourceAuthPassword(password string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| password | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### withCodeSourceAuthUserName

#### 详细描述


#### 定义

`withCodeSourceAuthUserName(userName string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| userName | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### withCodeSourceBranch

#### 详细描述


#### 定义

`withCodeSourceBranch(branch string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| branch | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### withCodeSourceKind

#### 详细描述


#### 定义

`withCodeSourceKind(kind CodeSourceKind) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| kind | `CodeSourceKind` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### withCodeSourceLocalFile

#### 详细描述


#### 定义

`withCodeSourceLocalFile(localFile string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| localFile | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### withCodeSourcePath

#### 详细描述


#### 定义

`withCodeSourcePath(path string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### withCodeSourceURL

#### 详细描述


#### 定义

`withCodeSourceURL(url string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


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

`withDefaultExcludeFunc(patterns []string) ssaconfig.Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| patterns | `[]string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ssaconfig.Option` |   |


### withDescription

#### 详细描述


#### 定义

`withDescription(description string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| description | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### withEntryFile

#### 详细描述


#### 定义

`withEntryFile(v ...string) ssaconfig.Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ssaconfig.Option` |   |


### withExcludeFile

#### 详细描述


#### 定义

`withExcludeFile(value TValue) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| value | `TValue` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### withExternLib

#### 详细描述


#### 定义

`withExternLib(name string, table map[string]any) ssaconfig.Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| table | `map[string]any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ssaconfig.Option` |   |


### withExternValue

#### 详细描述


#### 定义

`withExternValue(value TValue) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| value | `TValue` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### withJsonRawConfig

#### 详细描述


#### 定义

`withJsonRawConfig(raw []byte) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### withLanguage

#### 详细描述


#### 定义

`withLanguage(language string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| language | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### withMemory

#### 详细描述


#### 定义

`withMemory(memoryCompile ...bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| memoryCompile | `...bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### withPeepholeSize

#### 详细描述


#### 定义

`withPeepholeSize(peepholeSize int) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| peepholeSize | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### withProcess

#### 详细描述


#### 定义

`withProcess(value TValue) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| value | `TValue` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### withProgramName

#### 详细描述


#### 定义

`withProgramName(programName ...string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| programName | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### withProjectDescription

#### 详细描述


#### 定义

`withProjectDescription(s string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### withProjectID

#### 详细描述


#### 定义

`withProjectID(projectId uint64) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| projectId | `uint64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### withProjectLanguage

#### 详细描述


#### 定义

`withProjectLanguage(language Language) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| language | `Language` |   |

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


### withProjectTags

#### 详细描述


#### 定义

`withProjectTags(tags []string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tags | `[]string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### withReCompile

#### 详细描述


#### 定义

`withReCompile(reCompile bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| reCompile | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


### withStrictMode

#### 详细描述


#### 定义

`withStrictMode(strictMode bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| strictMode | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |   |


