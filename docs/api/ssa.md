# ssa

|实例名|实例描述|
|:------|:--------|
Java|(ssaconfig.Language) &#34;java&#34;|
Javascript|(ssaconfig.Language) &#34;js&#34;|
ModeAll|(ssaconfig.Mode) 127|
ModeProjectCompile|(ssaconfig.Mode) 35|
PHP|(ssaconfig.Language) &#34;php&#34;|
Python|(ssaconfig.Language) &#34;python&#34;|
Yak|(ssaconfig.Language) &#34;yak&#34;|

|函数名|函数描述/介绍|
|:------|:--------|
| [ssa.GetLatestProgramNameByProjectName](#getlatestprogramnamebyprojectname) ||
| [ssa.GetSSAProjectByID](#getssaprojectbyid) |LoadSSAProjectByID 根据项目 ID 从数据库加载 SSA 项目（导出名为 ssa.GetSSAProjectByID） 参数: - id: 项目的数据库 ID 返回值: - SSA 项目对象 - 错误信息|
| [ssa.GetSSAProjectByNameAndURL](#getssaprojectbynameandurl) |LoadSSAProjectByNameAndURL 根据项目名与代码源 URL 从数据库加载 SSA 项目（导出名为 ssa.GetSSAProjectByNameAndURL） 参数: - projectName: 项目名 - url: 代码源 URL 返回值: - SSA 项目对象 - 错误信...|
| [ssa.NewConfig](#newconfig) |New 创建一个 SSA 配置对象（导出名为 ssa.NewConfig） 参数: - mode: 配置模式，如 ssa.ModeAll、ssa.ModeProjectCompile - opts: 配置可选项，如 ssa.withProgramName、ssa.withLanguage 等 返回值...|
| [ssa.NewFromProgramName](#newfromprogramname) ||
| [ssa.NewProgramFromDB](#newprogramfromdb) ||
| [ssa.NewResultFromDB](#newresultfromdb) ||
| [ssa.NewSSAProject](#newssaproject) |NewSSAProject 根据配置选项创建一个 SSA 项目对象（导出名为 ssa.NewSSAProject） 参数: - opts: 项目配置可选项，如 ssa.withProjectName、ssa.withCodeSourceLocalFile 等 返回值: - SSA 项目对象 - 错误...|
| [ssa.Parse](#parse) ||
| [ssa.ParseLocalProject](#parselocalproject) ||
| [ssa.ParseProject](#parseproject) ||
| [ssa.SyntaxFlowRuleChecking](#syntaxflowrulechecking) |SyntaxFlowRuleChecking 对 SyntaxFlow 规则内容做语法检查（导出名为 ssa.SyntaxFlowRuleChecking） 参数: - code: 待检查的 SyntaxFlow 规则内容 返回值: - 静态分析结果列表，语法正确的规则返回空列表|
| [ssa.YaklangScriptChecking](#yaklangscriptchecking) |YaklangScriptChecking 对 Yaklang 插件代码做静态分析检查（导出名为 ssa.YaklangScriptChecking） 参数: - code: 待检查的源码 - pluginType: 插件类型，可选值为 &#34;yak&#34;、&#34;mitm&#34;、&#34;port-scan&#34;、&#34;codec...|
| [ssa.withBaseProgramName](#withbaseprogramname) ||
| [ssa.withCodeSourceAuthKeyContent](#withcodesourceauthkeycontent) ||
| [ssa.withCodeSourceAuthKeyPath](#withcodesourceauthkeypath) ||
| [ssa.withCodeSourceAuthKind](#withcodesourceauthkind) ||
| [ssa.withCodeSourceAuthPassword](#withcodesourceauthpassword) ||
| [ssa.withCodeSourceAuthUserName](#withcodesourceauthusername) ||
| [ssa.withCodeSourceBranch](#withcodesourcebranch) ||
| [ssa.withCodeSourceJarRecursiveParse](#withcodesourcejarrecursiveparse) ||
| [ssa.withCodeSourceKind](#withcodesourcekind) ||
| [ssa.withCodeSourceLocalFile](#withcodesourcelocalfile) ||
| [ssa.withCodeSourcePath](#withcodesourcepath) ||
| [ssa.withCodeSourceURL](#withcodesourceurl) ||
| [ssa.withConcurrency](#withconcurrency) ||
| [ssa.withConfigInfo](#withconfiginfo) ||
| [ssa.withContext](#withcontext) |WithContext 为 SSA 编译/查询设置上下文（导出名为 ssa.withContext） 参数: - ctx: 上下文，用于控制取消与超时 返回值: - 配置可选项|
| [ssa.withDefaultExcludeFunc](#withdefaultexcludefunc) ||
| [ssa.withDescription](#withdescription) ||
| [ssa.withEnableIncrementalCompile](#withenableincrementalcompile) ||
| [ssa.withEntryFile](#withentryfile) |WithFileSystemEntry 设置编译入口文件（导出名为 ssa.withEntryFile） 参数: - v: 一个或多个入口文件路径，支持逗号分隔 返回值: - 编译配置可选项|
| [ssa.withExcludeFile](#withexcludefile) ||
| [ssa.withExternLib](#withexternlib) |WithExternLib 为 SSA 编译注入外部库（导出名为 ssa.withExternLib） 用于让分析器识别自定义的库函数与符号 参数: - name: 库名 - table: 库的符号表（名称到值的映射） 返回值: - 编译配置可选项|
| [ssa.withExternValue](#withexternvalue) ||
| [ssa.withFilePerformanceLog](#withfileperformancelog) ||
| [ssa.withJsonRawConfig](#withjsonrawconfig) |WithJsonRawConfig 从原始 JSON 字节加载并合并到配置中（导出名为 ssa.withJsonRawConfig） 参数: - raw: JSON 格式的配置字节 返回值: - 配置可选项|
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
| [ssa.withSetProgramName](#withsetprogramname) ||
| [ssa.withStrictMode](#withstrictmode) ||


## 函数定义
### GetLatestProgramNameByProjectName

#### 详细描述
暂无描述

#### 定义

`GetLatestProgramNameByProjectName(projectName string) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| projectName | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |  |
| r2 | `error` |  |


### GetSSAProjectByID

#### 详细描述
LoadSSAProjectByID 根据项目 ID 从数据库加载 SSA 项目（导出名为 ssa.GetSSAProjectByID）

参数:

  - id: 项目的数据库 ID



返回值:

  - SSA 项目对象

  - 错误信息




Example:

``````````````yak
// 加载已保存的项目（示意性示例，需要数据库中已有该项目）
project = ssa.GetSSAProjectByID(1)~
dump(project)
``````````````


#### 定义

`GetSSAProjectByID(id uint) (*SSAProject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| id | `uint` | 项目的数据库 ID |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*SSAProject` | SSA 项目对象 |
| r2 | `error` | 错误信息 |


### GetSSAProjectByNameAndURL

#### 详细描述
LoadSSAProjectByNameAndURL 根据项目名与代码源 URL 从数据库加载 SSA 项目（导出名为 ssa.GetSSAProjectByNameAndURL）

参数:

  - projectName: 项目名

  - url: 代码源 URL



返回值:

  - SSA 项目对象

  - 错误信息




Example:

``````````````yak
// 加载已保存的项目（示意性示例，需要数据库中已有该项目）
project = ssa.GetSSAProjectByNameAndURL("demo", "https://github.com/yaklang/yaklang.git")~
dump(project)
``````````````


#### 定义

`GetSSAProjectByNameAndURL(projectName string, url string) (*SSAProject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| projectName | `string` | 项目名 |
| url | `string` | 代码源 URL |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*SSAProject` | SSA 项目对象 |
| r2 | `error` | 错误信息 |


### NewConfig

#### 详细描述
New 创建一个 SSA 配置对象（导出名为 ssa.NewConfig）

参数:

  - mode: 配置模式，如 ssa.ModeAll、ssa.ModeProjectCompile

  - opts: 配置可选项，如 ssa.withProgramName、ssa.withLanguage 等



返回值:

  - 配置对象

  - 错误信息




Example:

``````````````yak
config = ssa.NewConfig(ssa.ModeProjectCompile, ssa.withLanguage("java"))~
dump(config)
``````````````


#### 定义

`NewConfig(mode Mode, opts ...Option) (*Config, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| mode | `Mode` | 配置模式，如 ssa.ModeAll、ssa.ModeProjectCompile |
| opts | `...Option` | 配置可选项，如 ssa.withProgramName、ssa.withLanguage 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*Config` | 配置对象 |
| r2 | `error` | 错误信息 |


### NewFromProgramName

#### 详细描述
暂无描述

#### 定义

`NewFromProgramName(programName string) (p *Program, err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| programName | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| p | `*Program` |  |
| err | `error` |  |


### NewProgramFromDB

#### 详细描述
暂无描述

#### 定义

`NewProgramFromDB(programName string) (SyntaxFlowQueryInstance, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| programName | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `SyntaxFlowQueryInstance` |  |
| r2 | `error` |  |


### NewResultFromDB

#### 详细描述
暂无描述

#### 定义

`NewResultFromDB(resultID uint, force ...bool) (*SyntaxFlowResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| resultID | `uint` |  |
| force | `...bool` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*SyntaxFlowResult` |  |
| r2 | `error` |  |


### NewSSAProject

#### 详细描述
NewSSAProject 根据配置选项创建一个 SSA 项目对象（导出名为 ssa.NewSSAProject）

参数:

  - opts: 项目配置可选项，如 ssa.withProjectName、ssa.withCodeSourceLocalFile 等



返回值:

  - SSA 项目对象

  - 错误信息




Example:

``````````````yak
project = ssa.NewSSAProject(ssa.withProjectName("demo"), ssa.withLanguage("java"))~
dump(project)
``````````````


#### 定义

`NewSSAProject(opts ...ssaconfig.Option) (*SSAProject, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...ssaconfig.Option` | 项目配置可选项，如 ssa.withProjectName、ssa.withCodeSourceLocalFile 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*SSAProject` | SSA 项目对象 |
| r2 | `error` | 错误信息 |


### Parse

#### 详细描述
暂无描述

#### 定义

`Parse(code string, opts ...ssaconfig.Option) (*Program, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| code | `string` |  |
| opts | `...ssaconfig.Option` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*Program` |  |
| r2 | `error` |  |


### ParseLocalProject

#### 详细描述
暂无描述

#### 定义

`ParseLocalProject(path string, opts ...ssaconfig.Option) (Programs, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` |  |
| opts | `...ssaconfig.Option` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Programs` |  |
| r2 | `error` |  |


### ParseProject

#### 详细描述
暂无描述

#### 定义

`ParseProject(opts ...ssaconfig.Option) (prog Programs, err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...ssaconfig.Option` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| prog | `Programs` |  |
| err | `error` |  |


### SyntaxFlowRuleChecking

#### 详细描述
SyntaxFlowRuleChecking 对 SyntaxFlow 规则内容做语法检查（导出名为 ssa.SyntaxFlowRuleChecking）

参数:

  - code: 待检查的 SyntaxFlow 规则内容



返回值:

  - 静态分析结果列表，语法正确的规则返回空列表




Example:

``````````````yak
results = ssa.SyntaxFlowRuleChecking(`desc(title: "demo"); sink as $sink;`)
dump(results)
``````````````


#### 定义

`SyntaxFlowRuleChecking(code string) []*result.StaticAnalyzeResult`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| code | `string` | 待检查的 SyntaxFlow 规则内容 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*result.StaticAnalyzeResult` | 静态分析结果列表，语法正确的规则返回空列表 |


### YaklangScriptChecking

#### 详细描述
YaklangScriptChecking 对 Yaklang 插件代码做静态分析检查（导出名为 ssa.YaklangScriptChecking）

参数:

  - code: 待检查的源码

  - pluginType: 插件类型，可选值为 &#34;yak&#34;、&#34;mitm&#34;、&#34;port-scan&#34;、&#34;codec&#34;、&#34;syntaxflow&#34;



返回值:

  - 静态分析结果列表，正常代码返回空列表




Example:

``````````````yak
results = ssa.YaklangScriptChecking("a = 1\nb = a + 1\n", "yak")
assert len(results) == 0, "valid yak code should have no static analyze error"
``````````````


#### 定义

`YaklangScriptChecking(code string, pluginType string) []*result.StaticAnalyzeResult`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| code | `string` | 待检查的源码 |
| pluginType | `string` | 插件类型，可选值为 &#34;yak&#34;、&#34;mitm&#34;、&#34;port-scan&#34;、&#34;codec&#34;、&#34;syntaxflow&#34; |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*result.StaticAnalyzeResult` | 静态分析结果列表，正常代码返回空列表 |


### withBaseProgramName

#### 详细描述
暂无描述

#### 定义

`withBaseProgramName(baseProgramName string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| baseProgramName | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |  |


### withCodeSourceAuthKeyContent

#### 详细描述
暂无描述

#### 定义

`withCodeSourceAuthKeyContent(keyContent string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| keyContent | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |  |


### withCodeSourceAuthKeyPath

#### 详细描述
暂无描述

#### 定义

`withCodeSourceAuthKeyPath(keyPath string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| keyPath | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |  |


### withCodeSourceAuthKind

#### 详细描述
暂无描述

#### 定义

`withCodeSourceAuthKind(kind string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| kind | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |  |


### withCodeSourceAuthPassword

#### 详细描述
暂无描述

#### 定义

`withCodeSourceAuthPassword(password string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| password | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |  |


### withCodeSourceAuthUserName

#### 详细描述
暂无描述

#### 定义

`withCodeSourceAuthUserName(userName string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| userName | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |  |


### withCodeSourceBranch

#### 详细描述
暂无描述

#### 定义

`withCodeSourceBranch(branch string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| branch | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |  |


### withCodeSourceJarRecursiveParse

#### 详细描述
暂无描述

#### 定义

`withCodeSourceJarRecursiveParse(enable bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| enable | `bool` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |  |


### withCodeSourceKind

#### 详细描述
暂无描述

#### 定义

`withCodeSourceKind(kind CodeSourceKind) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| kind | `CodeSourceKind` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |  |


### withCodeSourceLocalFile

#### 详细描述
暂无描述

#### 定义

`withCodeSourceLocalFile(localFile string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| localFile | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |  |


### withCodeSourcePath

#### 详细描述
暂无描述

#### 定义

`withCodeSourcePath(path string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |  |


### withCodeSourceURL

#### 详细描述
暂无描述

#### 定义

`withCodeSourceURL(url string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |  |


### withConcurrency

#### 详细描述
暂无描述

#### 定义

`withConcurrency(concurrency int) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| concurrency | `int` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |  |


### withConfigInfo

#### 详细描述
暂无描述

#### 定义

`withConfigInfo(input map[string]any) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| input | `map[string]any` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |  |


### withContext

#### 详细描述
WithContext 为 SSA 编译/查询设置上下文（导出名为 ssa.withContext）

参数:

  - ctx: 上下文，用于控制取消与超时



返回值:

  - 配置可选项




Example:

``````````````yak
opt = ssa.withContext(context.Background())
println(opt)
``````````````


#### 定义

`withContext(ctx context.Context) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` | 上下文，用于控制取消与超时 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 配置可选项 |


### withDefaultExcludeFunc

#### 详细描述
暂无描述

#### 定义

`withDefaultExcludeFunc(excludeFiles ...string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| excludeFiles | `...string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |  |


### withDescription

#### 详细描述
暂无描述

#### 定义

`withDescription(description string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| description | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |  |


### withEnableIncrementalCompile

#### 详细描述
暂无描述

#### 定义

`withEnableIncrementalCompile(enable bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| enable | `bool` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |  |


### withEntryFile

#### 详细描述
WithFileSystemEntry 设置编译入口文件（导出名为 ssa.withEntryFile）

参数:

  - v: 一个或多个入口文件路径，支持逗号分隔



返回值:

  - 编译配置可选项




Example:

``````````````yak
opt = ssa.withEntryFile("src/main/java/App.java")
println(opt)
``````````````


#### 定义

`withEntryFile(v ...string) ssaconfig.Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v | `...string` | 一个或多个入口文件路径，支持逗号分隔 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ssaconfig.Option` | 编译配置可选项 |


### withExcludeFile

#### 详细描述
暂无描述

#### 定义

`withExcludeFile(excludeFiles ...string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| excludeFiles | `...string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |  |


### withExternLib

#### 详细描述
WithExternLib 为 SSA 编译注入外部库（导出名为 ssa.withExternLib）

用于让分析器识别自定义的库函数与符号

参数:

  - name: 库名

  - table: 库的符号表（名称到值的映射）



返回值:

  - 编译配置可选项




Example:

``````````````yak
opt = ssa.withExternLib("mylib", {"foo": func() { return 1 }})
println(opt)
``````````````


#### 定义

`withExternLib(name string, table map[string]any) ssaconfig.Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 库名 |
| table | `map[string]any` | 库的符号表（名称到值的映射） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ssaconfig.Option` | 编译配置可选项 |


### withExternValue

#### 详细描述
暂无描述

#### 定义

`withExternValue(value TValue) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| value | `TValue` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |  |


### withFilePerformanceLog

#### 详细描述
暂无描述

#### 定义

`withFilePerformanceLog(enable bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| enable | `bool` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |  |


### withJsonRawConfig

#### 详细描述
WithJsonRawConfig 从原始 JSON 字节加载并合并到配置中（导出名为 ssa.withJsonRawConfig）

参数:

  - raw: JSON 格式的配置字节



返回值:

  - 配置可选项




Example:

``````````````yak
opt = ssa.withJsonRawConfig([]byte(`{"base_info":{"program_names":["demo"]}}`))
println(opt)
``````````````


#### 定义

`withJsonRawConfig(raw []byte) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` | JSON 格式的配置字节 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 配置可选项 |


### withLanguage

#### 详细描述
暂无描述

#### 定义

`withLanguage(language string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| language | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |  |


### withMemory

#### 详细描述
暂无描述

#### 定义

`withMemory(memoryCompile ...bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| memoryCompile | `...bool` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |  |


### withPeepholeSize

#### 详细描述
暂无描述

#### 定义

`withPeepholeSize(peepholeSize int) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| peepholeSize | `int` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |  |


### withProcess

#### 详细描述
暂无描述

#### 定义

`withProcess(value TValue) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| value | `TValue` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |  |


### withProgramName

#### 详细描述
暂无描述

#### 定义

`withProgramName(programName ...string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| programName | `...string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |  |


### withProjectDescription

#### 详细描述
暂无描述

#### 定义

`withProjectDescription(s string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |  |


### withProjectID

#### 详细描述
暂无描述

#### 定义

`withProjectID(projectId uint64) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| projectId | `uint64` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |  |


### withProjectLanguage

#### 详细描述
暂无描述

#### 定义

`withProjectLanguage(language Language) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| language | `Language` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |  |


### withProjectName

#### 详细描述
暂无描述

#### 定义

`withProjectName(name string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |  |


### withProjectTags

#### 详细描述
暂无描述

#### 定义

`withProjectTags(tags []string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tags | `[]string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |  |


### withReCompile

#### 详细描述
暂无描述

#### 定义

`withReCompile(reCompile bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| reCompile | `bool` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |  |


### withSetProgramName

#### 详细描述
暂无描述

#### 定义

`withSetProgramName(name string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |  |


### withStrictMode

#### 详细描述
暂无描述

#### 定义

`withStrictMode(strictMode bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| strictMode | `bool` |  |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` |  |


