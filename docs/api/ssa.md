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
| [ssa.GetLatestProgramNameByProjectName](#getlatestprogramnamebyprojectname) |getLatestProgramNameByProjectName 根据 SSA 项目名查询其最新编译产物（program）的名称（导出名为 ssa.GetLatestProgramNameByProjectName） 一个项目可能多次编译产生多个 program，本函数返回最近一次的 progra...|
| [ssa.GetSSAProjectByID](#getssaprojectbyid) |LoadSSAProjectByID 根据项目 ID 从数据库加载 SSA 项目（导出名为 ssa.GetSSAProjectByID） 参数: - id: 项目的数据库 ID 返回值: - SSA 项目对象 - 错误信息|
| [ssa.GetSSAProjectByNameAndURL](#getssaprojectbynameandurl) |LoadSSAProjectByNameAndURL 根据项目名与代码源 URL 从数据库加载 SSA 项目（导出名为 ssa.GetSSAProjectByNameAndURL） 参数: - projectName: 项目名 - url: 代码源 URL 返回值: - SSA 项目对象 - 错误信...|
| [ssa.NewConfig](#newconfig) |New 创建一个 SSA 配置对象（导出名为 ssa.NewConfig） 参数: - mode: 配置模式，如 ssa.ModeAll、ssa.ModeProjectCompile - opts: 配置可选项，如 ssa.withProgramName、ssa.withLanguage 等 返回值...|
| [ssa.NewFromProgramName](#newfromprogramname) |FromDatabase 从数据库中按程序名加载已编译的 SSA 程序（导出名为 ssa.NewFromProgramName） 参数: - programName: 已保存的程序名 返回值: - SSA 程序对象 - 错误信息|
| [ssa.NewProgramFromDB](#newprogramfromdb) |NewProgramFromDB 从数据库加载程序并返回 SyntaxFlowQueryInstance 接口（导出名为 ssa.NewProgramFromDB） 如果程序有 overlay（已保存的 overlay 或增量编译的 diff program），返回 *ProgramOverLay，...|
| [ssa.NewResultFromDB](#newresultfromdb) |LoadResultByID 根据结果 ID 从数据库加载已保存的 SyntaxFlow 查询结果（导出名为 ssa.NewResultFromDB） 参数: - resultID: 已保存结果的数据库 ID - force: 是否强制跳过缓存重新加载，缺省为 false 返回值: - Syntax...|
| [ssa.NewSSAProject](#newssaproject) |NewSSAProject 根据配置选项创建一个 SSA 项目对象（导出名为 ssa.NewSSAProject） 参数: - opts: 项目配置可选项，如 ssa.withProjectName、ssa.withCodeSourceLocalFile 等 返回值: - SSA 项目对象 - 错误...|
| [ssa.Parse](#parse) |Parse 将一段源码编译为 SSA 程序对象，用于后续的 SyntaxFlow 查询与静态分析 导出名为 ssa.Parse 参数: - code: 待编译的源码字符串 - opts: 编译可选项，如 ssa.withLanguage(ssa.Yak)、ssa.withProgramName 等 ...|
| [ssa.ParseLocalProject](#parselocalproject) |ParseProjectFromPath 编译本地路径下的整个项目为 SSA 程序集合（导出名为 ssa.ParseLocalProject） 参数: - path: 项目所在的本地目录路径 - opts: 编译可选项，如 ssa.withLanguage、ssa.withProgramName 等...|
| [ssa.ParseProject](#parseproject) |ParseProject 根据编译选项编译一个项目为 SSA 程序集合（导出名为 ssa.ParseProject） 与 ParseLocalProject 不同，本函数通过选项指定代码来源（本地文件系统、git 等） 参数: - opts: 编译可选项，如 ssa.withEntryFile、ss...|
| [ssa.SyntaxFlowRuleChecking](#syntaxflowrulechecking) |SyntaxFlowRuleChecking 对 SyntaxFlow 规则内容做语法检查（导出名为 ssa.SyntaxFlowRuleChecking） 参数: - code: 待检查的 SyntaxFlow 规则内容 返回值: - 静态分析结果列表，语法正确的规则返回空列表|
| [ssa.YaklangScriptChecking](#yaklangscriptchecking) |YaklangScriptChecking 对 Yaklang 插件代码做静态分析检查（导出名为 ssa.YaklangScriptChecking） 参数: - code: 待检查的源码 - pluginType: 插件类型，可选值为 &#34;yak&#34;、&#34;mitm&#34;、&#34;port-scan&#34;、&#34;codec...|
| [ssa.withBaseProgramName](#withbaseprogramname) |WithBaseProgramName 设置基础程序名称用于差量编译（导出名为 ssa.withBaseProgramName） 设置后会自动启用增量编译 参数: - baseProgramName: 作为增量编译基线的程序名 返回值: - 编译配置可选项|
| [ssa.withCodeSourceAuthKeyContent](#withcodesourceauthkeycontent) |WithCodeSourceAuthKeyContent 设置 SSH 私钥内容（PEM 格式，适用于分布式场景，导出名为 ssa.withCodeSourceAuthKeyContent） 参数: - keyContent: SSH 私钥的 PEM 文本内容 返回值: - 代码源配置可选项|
| [ssa.withCodeSourceAuthKeyPath](#withcodesourceauthkeypath) |WithSSAProjectCodeSourceAuthKeyPath 设置代码源 SSH 私钥文件路径（导出名为 ssa.withCodeSourceAuthKeyPath） 参数: - keyPath: SSH 私钥文件路径 返回值: - 代码源配置可选项|
| [ssa.withCodeSourceAuthKind](#withcodesourceauthkind) |WithCodeSourceAuthKind 设置代码源认证方式（导出名为 ssa.withCodeSourceAuthKind） 参数: - kind: 认证类型，如 &#34;password&#34;、&#34;ssh_key&#34; 返回值: - 代码源配置可选项|
| [ssa.withCodeSourceAuthPassword](#withcodesourceauthpassword) |WithCodeSourceAuthPassword 设置代码源认证密码或令牌（导出名为 ssa.withCodeSourceAuthPassword） 参数: - password: 密码或访问令牌 返回值: - 代码源配置可选项|
| [ssa.withCodeSourceAuthUserName](#withcodesourceauthusername) |WithCodeSourceAuthUserName 设置代码源认证用户名（导出名为 ssa.withCodeSourceAuthUserName） 参数: - userName: 用户名 返回值: - 代码源配置可选项|
| [ssa.withCodeSourceBranch](#withcodesourcebranch) |WithCodeSourceBranch 设置代码源的分支（导出名为 ssa.withCodeSourceBranch） 参数: - branch: 分支名 返回值: - 代码源配置可选项|
| [ssa.withCodeSourceJarRecursiveParse](#withcodesourcejarrecursiveparse) |WithCodeSourceJarRecursiveParse 设置是否对 Jar 包进行递归解析（导出名为 ssa.withCodeSourceJarRecursiveParse） 参数: - enable: 是否递归解析 Jar 包 返回值: - 代码源配置可选项|
| [ssa.withCodeSourceKind](#withcodesourcekind) |WithCodeSourceKind 设置代码源类型（导出名为 ssa.withCodeSourceKind） 参数: - kind: 代码源类型，如本地、git 等 返回值: - 代码源配置可选项|
| [ssa.withCodeSourceLocalFile](#withcodesourcelocalfile) |WithCodeSourceLocalFile 设置代码源的本地文件/目录路径（导出名为 ssa.withCodeSourceLocalFile） 参数: - localFile: 本地文件或目录路径 返回值: - 代码源配置可选项|
| [ssa.withCodeSourcePath](#withcodesourcepath) |WithCodeSourcePath 设置代码源在仓库内的子路径（导出名为 ssa.withCodeSourcePath） 参数: - path: 仓库内的子路径 返回值: - 代码源配置可选项|
| [ssa.withCodeSourceURL](#withcodesourceurl) |WithCodeSourceURL 设置代码源的远程地址（导出名为 ssa.withCodeSourceURL） 参数: - url: 代码仓库 URL 返回值: - 代码源配置可选项|
| [ssa.withConcurrency](#withconcurrency) |WithCompileConcurrency 设置编译并发数（导出名为 ssa.withConcurrency） 参数: - concurrency: 并发数（仅并行化预处理阶段的读取与 AST 解析） 返回值: - 编译配置可选项|
| [ssa.withConfigInfo](#withconfiginfo) |WithCodeSourceMap 以 map 形式批量设置代码源配置（导出名为 ssa.withConfigInfo） 参数: - input: 代码源配置字典，如 {&#34;kind&#34;: &#34;local&#34;, &#34;local_file&#34;: &#34;/tmp/project&#34;} 返回值: - 代码源配置可选项|
| [ssa.withContext](#withcontext) |WithContext 为 SSA 编译/查询设置上下文（导出名为 ssa.withContext） 参数: - ctx: 上下文，用于控制取消与超时 返回值: - 配置可选项|
| [ssa.withDefaultExcludeFunc](#withdefaultexcludefunc) |WithCompileExcludeFiles 设置编译时排除的文件（导出名为 ssa.withExcludeFile / ssa.withDefaultExcludeFunc） 参数: - excludeFiles: 要排除的文件路径模式，支持逗号分隔多个模式 返回值: - 编译配置可选项|
| [ssa.withDescription](#withdescription) |WithProgramDescription 设置程序描述（导出名为 ssa.withDescription） 参数: - description: 程序描述 返回值: - 编译/项目配置可选项|
| [ssa.withEnableIncrementalCompile](#withenableincrementalcompile) |WithEnableIncrementalCompile 启用增量编译（导出名为 ssa.withEnableIncrementalCompile） 如果启用增量编译但 BaseProgramName 为空，表示这是第一次增量编译（base program） 参数: - enable: 是否启用增量...|
| [ssa.withEntryFile](#withentryfile) |WithFileSystemEntry 设置编译入口文件（导出名为 ssa.withEntryFile） 参数: - v: 一个或多个入口文件路径，支持逗号分隔 返回值: - 编译配置可选项|
| [ssa.withExcludeFile](#withexcludefile) |WithCompileExcludeFiles 设置编译时排除的文件（导出名为 ssa.withExcludeFile / ssa.withDefaultExcludeFunc） 参数: - excludeFiles: 要排除的文件路径模式，支持逗号分隔多个模式 返回值: - 编译配置可选项|
| [ssa.withExternLib](#withexternlib) |WithExternLib 为 SSA 编译注入外部库（导出名为 ssa.withExternLib） 用于让分析器识别自定义的库函数与符号 参数: - name: 库名 - table: 库的符号表（名称到值的映射） 返回值: - 编译配置可选项|
| [ssa.withExternValue](#withexternvalue) |WithExternValue 为 SSA 编译注入外部值符号（导出名为 ssa.withExternValue） 让分析器把这些名称识别为已知的外部符号，避免被当作未定义变量 参数: - table: 外部值的符号表（名称到值的映射） 返回值: - 编译配置可选项，可传入 ssa.Parse|
| [ssa.withFilePerformanceLog](#withfileperformancelog) |WithCompileFilePerformanceLog 设置是否记录文件级别性能日志（导出名为 ssa.withFilePerformanceLog） 参数: - enable: 是否开启文件级别性能日志 返回值: - 编译配置可选项|
| [ssa.withJsonRawConfig](#withjsonrawconfig) |WithJsonRawConfig 从原始 JSON 字节加载并合并到配置中（导出名为 ssa.withJsonRawConfig） 参数: - raw: JSON 格式的配置字节 返回值: - 配置可选项|
| [ssa.withLanguage](#withlanguage) |WithProjectRawLanguage 以字符串形式设置项目编程语言（导出名为 ssa.withLanguage） 参数: - language: 语言名称，如 &#34;java&#34;、&#34;yak&#34;、&#34;php&#34;、&#34;golang&#34; 返回值: - 编译/项目配置可选项|
| [ssa.withMemory](#withmemory) |WithCompileMemoryCompile 设置是否在内存中编译（不落库，导出名为 ssa.withMemory） 参数: - memoryCompile: 是否使用内存编译，缺省为 true 返回值: - 编译配置可选项|
| [ssa.withPeepholeSize](#withpeepholesize) |WithCompilePeepholeSize 设置窥视孔大小，用于将虚拟文件系统切分为多个编译块（导出名为 ssa.withPeepholeSize） 参数: - peepholeSize: 窥视孔大小 返回值: - 编译配置可选项|
| [ssa.withProcess](#withprocess) |WithProcess 设置编译进度回调（导出名为 ssa.withProcess） 编译过程中会以 (进度消息, 进度比例) 回调该函数，常用于展示编译进度 参数: - v: 进度回调函数，参数为 (msg 进度消息, process 进度比例 0~1) 返回值: - 编译配置可选项，可传入 ss...|
| [ssa.withProgramName](#withprogramname) |WithProgramNames 追加要编译/加载的程序名（导出名为 ssa.withProgramName） 参数: - programName: 一个或多个程序名 返回值: - 编译/项目配置可选项|
| [ssa.withProjectDescription](#withprojectdescription) |WithProjectDescription 设置 SSA 项目描述（导出名为 ssa.withProjectDescription） 参数: - s: 项目描述 返回值: - 编译/项目配置可选项|
| [ssa.withProjectID](#withprojectid) |WithProjectID 设置 SSA 项目 ID（导出名为 ssa.withProjectID） 参数: - projectId: 项目 ID 返回值: - 编译/项目配置可选项|
| [ssa.withProjectLanguage](#withprojectlanguage) |WithProjectLanguage 以语言枚举形式设置项目编程语言（导出名为 ssa.withProjectLanguage） 参数: - language: 语言枚举，如 ssa.Java、ssa.Yak、ssa.PHP 返回值: - 编译/项目配置可选项|
| [ssa.withProjectName](#withprojectname) |WithProjectName 设置 SSA 项目名称（导出名为 ssa.withProjectName） 参数: - name: 项目名称 返回值: - 编译/项目配置可选项|
| [ssa.withProjectTags](#withprojecttags) |WithProjectTags 设置 SSA 项目标签（导出名为 ssa.withProjectTags） 参数: - tags: 标签列表 返回值: - 编译/项目配置可选项|
| [ssa.withReCompile](#withrecompile) |WithCompileReCompile 设置是否强制重新编译（导出名为 ssa.withReCompile） 参数: - reCompile: 是否忽略缓存重新编译 返回值: - 编译配置可选项|
| [ssa.withSetProgramName](#withsetprogramname) |WithSetProgramName 设置主 program 名称（替换而非追加，导出名为 ssa.withSetProgramName） 用于新编译场景：当 config 从项目 JSON 加载时可能包含旧的 program_names， 调用此选项可强制使用新生成的 program 名称，避免复...|
| [ssa.withStrictMode](#withstrictmode) |WithCompileStrictMode 设置编译严格模式（导出名为 ssa.withStrictMode） 参数: - strictMode: 是否开启严格模式 返回值: - 编译配置可选项|


## 函数定义
### GetLatestProgramNameByProjectName

#### 详细描述
getLatestProgramNameByProjectName 根据 SSA 项目名查询其最新编译产物（program）的名称（导出名为 ssa.GetLatestProgramNameByProjectName）

一个项目可能多次编译产生多个 program，本函数返回最近一次的 program 名称



参数:

  - projectName: SSA 项目名



返回值:

  - 最新的 program 名称

  - 错误信息（项目名为空或查询失败时返回）




Example:

``````````````yak
// 该示例依赖数据库中已存在的 SSA 项目，仅作用法示意
name = ssa.GetLatestProgramNameByProjectName("my-project")~
println(name)
``````````````


#### 定义

`GetLatestProgramNameByProjectName(projectName string) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| projectName | `string` | SSA 项目名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 最新的 program 名称 |
| r2 | `error` | 错误信息（项目名为空或查询失败时返回） |


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
FromDatabase 从数据库中按程序名加载已编译的 SSA 程序（导出名为 ssa.NewFromProgramName）

参数:

  - programName: 已保存的程序名



返回值:

  - SSA 程序对象

  - 错误信息




Example:

``````````````yak
// 加载此前编译并保存的程序（示意性示例，需要数据库中已有该程序）
prog = ssa.NewFromProgramName("my-program")~
result = prog.SyntaxFlowWithError("sink* as $sink")~
dump(result)
``````````````


#### 定义

`NewFromProgramName(programName string) (p *Program, err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| programName | `string` | 已保存的程序名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| p | `*Program` | SSA 程序对象 |
| err | `error` | 错误信息 |


### NewProgramFromDB

#### 详细描述
NewProgramFromDB 从数据库加载程序并返回 SyntaxFlowQueryInstance 接口（导出名为 ssa.NewProgramFromDB）

如果程序有 overlay（已保存的 overlay 或增量编译的 diff program），返回 *ProgramOverLay，否则返回 *Program

参数:

  - programName: 已保存的程序名



返回值:

  - 可执行 SyntaxFlow 查询的程序实例

  - 错误信息




Example:

``````````````yak
// 加载已保存的程序并执行查询（示意性示例，需要数据库中已有该程序）
prog = ssa.NewProgramFromDB("my-program")~
result = prog.SyntaxFlowWithError("sink* as $sink")~
dump(result)
``````````````


#### 定义

`NewProgramFromDB(programName string) (SyntaxFlowQueryInstance, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| programName | `string` | 已保存的程序名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `SyntaxFlowQueryInstance` | 可执行 SyntaxFlow 查询的程序实例 |
| r2 | `error` | 错误信息 |


### NewResultFromDB

#### 详细描述
LoadResultByID 根据结果 ID 从数据库加载已保存的 SyntaxFlow 查询结果（导出名为 ssa.NewResultFromDB）

参数:

  - resultID: 已保存结果的数据库 ID

  - force: 是否强制跳过缓存重新加载，缺省为 false



返回值:

  - SyntaxFlow 查询结果对象

  - 错误信息




Example:

``````````````yak
// 加载某次已保存的查询结果（示意性示例，需要数据库中已有该结果）
result = ssa.NewResultFromDB(1)~
dump(result)
``````````````


#### 定义

`NewResultFromDB(resultID uint, force ...bool) (*SyntaxFlowResult, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| resultID | `uint` | 已保存结果的数据库 ID |
| force | `...bool` | 是否强制跳过缓存重新加载，缺省为 false |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*SyntaxFlowResult` | SyntaxFlow 查询结果对象 |
| r2 | `error` | 错误信息 |


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
Parse 将一段源码编译为 SSA 程序对象，用于后续的 SyntaxFlow 查询与静态分析

导出名为 ssa.Parse

参数:

  - code: 待编译的源码字符串

  - opts: 编译可选项，如 ssa.withLanguage(ssa.Yak)、ssa.withProgramName 等



返回值:

  - 编译得到的 SSA 程序对象

  - 错误信息




Example:

``````````````yak
prog = ssa.Parse("a = 1; b = a + 1; println(b)", ssa.withLanguage(ssa.Yak))~
result = prog.SyntaxFlowWithError("println(* as $arg)")~
assert result != nil, "syntaxflow result should not be nil"
``````````````


#### 定义

`Parse(code string, opts ...ssaconfig.Option) (*Program, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| code | `string` | 待编译的源码字符串 |
| opts | `...ssaconfig.Option` | 编译可选项，如 ssa.withLanguage(ssa.Yak)、ssa.withProgramName 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*Program` | 编译得到的 SSA 程序对象 |
| r2 | `error` | 错误信息 |


### ParseLocalProject

#### 详细描述
ParseProjectFromPath 编译本地路径下的整个项目为 SSA 程序集合（导出名为 ssa.ParseLocalProject）

参数:

  - path: 项目所在的本地目录路径

  - opts: 编译可选项，如 ssa.withLanguage、ssa.withProgramName 等



返回值:

  - SSA 程序集合

  - 错误信息




Example:

``````````````yak
// 编译本地某个 Java 项目（示意性示例，需替换为真实路径）
progs = ssa.ParseLocalProject("/tmp/my-java-project", ssa.withLanguage(ssa.Java))~
println(len(progs))
``````````````


#### 定义

`ParseLocalProject(path string, opts ...ssaconfig.Option) (Programs, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` | 项目所在的本地目录路径 |
| opts | `...ssaconfig.Option` | 编译可选项，如 ssa.withLanguage、ssa.withProgramName 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Programs` | SSA 程序集合 |
| r2 | `error` | 错误信息 |


### ParseProject

#### 详细描述
ParseProject 根据编译选项编译一个项目为 SSA 程序集合（导出名为 ssa.ParseProject）

与 ParseLocalProject 不同，本函数通过选项指定代码来源（本地文件系统、git 等）

参数:

  - opts: 编译可选项，如 ssa.withEntryFile、ssa.withLanguage、ssa.withProgramName 等



返回值:

  - SSA 程序集合

  - 错误信息




Example:

``````````````yak
// 通过选项指定本地代码目录进行编译（示意性示例，需替换为真实路径）
progs = ssa.ParseProject(ssa.withLanguage(ssa.Java), ssa.withProgramName("demo"))~
println(len(progs))
``````````````


#### 定义

`ParseProject(opts ...ssaconfig.Option) (prog Programs, err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| opts | `...ssaconfig.Option` | 编译可选项，如 ssa.withEntryFile、ssa.withLanguage、ssa.withProgramName 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| prog | `Programs` | SSA 程序集合 |
| err | `error` | 错误信息 |


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
WithBaseProgramName 设置基础程序名称用于差量编译（导出名为 ssa.withBaseProgramName）

设置后会自动启用增量编译

参数:

  - baseProgramName: 作为增量编译基线的程序名



返回值:

  - 编译配置可选项




Example:

``````````````yak
opt = ssa.withBaseProgramName("base-program")
println(opt)
``````````````


#### 定义

`withBaseProgramName(baseProgramName string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| baseProgramName | `string` | 作为增量编译基线的程序名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 编译配置可选项 |


### withCodeSourceAuthKeyContent

#### 详细描述
WithCodeSourceAuthKeyContent 设置 SSH 私钥内容（PEM 格式，适用于分布式场景，导出名为 ssa.withCodeSourceAuthKeyContent）

参数:

  - keyContent: SSH 私钥的 PEM 文本内容



返回值:

  - 代码源配置可选项




Example:

``````````````yak
opt = ssa.withCodeSourceAuthKeyContent("-----BEGIN OPENSSH PRIVATE KEY-----...")
println(opt)
``````````````


#### 定义

`withCodeSourceAuthKeyContent(keyContent string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| keyContent | `string` | SSH 私钥的 PEM 文本内容 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 代码源配置可选项 |


### withCodeSourceAuthKeyPath

#### 详细描述
WithSSAProjectCodeSourceAuthKeyPath 设置代码源 SSH 私钥文件路径（导出名为 ssa.withCodeSourceAuthKeyPath）

参数:

  - keyPath: SSH 私钥文件路径



返回值:

  - 代码源配置可选项




Example:

``````````````yak
opt = ssa.withCodeSourceAuthKeyPath("/root/.ssh/id_rsa")
println(opt)
``````````````


#### 定义

`withCodeSourceAuthKeyPath(keyPath string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| keyPath | `string` | SSH 私钥文件路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 代码源配置可选项 |


### withCodeSourceAuthKind

#### 详细描述
WithCodeSourceAuthKind 设置代码源认证方式（导出名为 ssa.withCodeSourceAuthKind）

参数:

  - kind: 认证类型，如 &#34;password&#34;、&#34;ssh_key&#34;



返回值:

  - 代码源配置可选项




Example:

``````````````yak
opt = ssa.withCodeSourceAuthKind("password")
println(opt)
``````````````


#### 定义

`withCodeSourceAuthKind(kind string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| kind | `string` | 认证类型，如 &#34;password&#34;、&#34;ssh_key&#34; |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 代码源配置可选项 |


### withCodeSourceAuthPassword

#### 详细描述
WithCodeSourceAuthPassword 设置代码源认证密码或令牌（导出名为 ssa.withCodeSourceAuthPassword）

参数:

  - password: 密码或访问令牌



返回值:

  - 代码源配置可选项




Example:

``````````````yak
opt = ssa.withCodeSourceAuthPassword("your-token")
println(opt)
``````````````


#### 定义

`withCodeSourceAuthPassword(password string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| password | `string` | 密码或访问令牌 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 代码源配置可选项 |


### withCodeSourceAuthUserName

#### 详细描述
WithCodeSourceAuthUserName 设置代码源认证用户名（导出名为 ssa.withCodeSourceAuthUserName）

参数:

  - userName: 用户名



返回值:

  - 代码源配置可选项




Example:

``````````````yak
opt = ssa.withCodeSourceAuthUserName("git")
println(opt)
``````````````


#### 定义

`withCodeSourceAuthUserName(userName string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| userName | `string` | 用户名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 代码源配置可选项 |


### withCodeSourceBranch

#### 详细描述
WithCodeSourceBranch 设置代码源的分支（导出名为 ssa.withCodeSourceBranch）

参数:

  - branch: 分支名



返回值:

  - 代码源配置可选项




Example:

``````````````yak
opt = ssa.withCodeSourceBranch("main")
println(opt)
``````````````


#### 定义

`withCodeSourceBranch(branch string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| branch | `string` | 分支名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 代码源配置可选项 |


### withCodeSourceJarRecursiveParse

#### 详细描述
WithCodeSourceJarRecursiveParse 设置是否对 Jar 包进行递归解析（导出名为 ssa.withCodeSourceJarRecursiveParse）

参数:

  - enable: 是否递归解析 Jar 包



返回值:

  - 代码源配置可选项




Example:

``````````````yak
opt = ssa.withCodeSourceJarRecursiveParse(true)
println(opt)
``````````````


#### 定义

`withCodeSourceJarRecursiveParse(enable bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| enable | `bool` | 是否递归解析 Jar 包 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 代码源配置可选项 |


### withCodeSourceKind

#### 详细描述
WithCodeSourceKind 设置代码源类型（导出名为 ssa.withCodeSourceKind）

参数:

  - kind: 代码源类型，如本地、git 等



返回值:

  - 代码源配置可选项




Example:

``````````````yak
opt = ssa.withCodeSourceKind("local")
println(opt)
``````````````


#### 定义

`withCodeSourceKind(kind CodeSourceKind) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| kind | `CodeSourceKind` | 代码源类型，如本地、git 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 代码源配置可选项 |


### withCodeSourceLocalFile

#### 详细描述
WithCodeSourceLocalFile 设置代码源的本地文件/目录路径（导出名为 ssa.withCodeSourceLocalFile）

参数:

  - localFile: 本地文件或目录路径



返回值:

  - 代码源配置可选项




Example:

``````````````yak
opt = ssa.withCodeSourceLocalFile("/tmp/project")
println(opt)
``````````````


#### 定义

`withCodeSourceLocalFile(localFile string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| localFile | `string` | 本地文件或目录路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 代码源配置可选项 |


### withCodeSourcePath

#### 详细描述
WithCodeSourcePath 设置代码源在仓库内的子路径（导出名为 ssa.withCodeSourcePath）

参数:

  - path: 仓库内的子路径



返回值:

  - 代码源配置可选项




Example:

``````````````yak
opt = ssa.withCodeSourcePath("backend/")
println(opt)
``````````````


#### 定义

`withCodeSourcePath(path string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` | 仓库内的子路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 代码源配置可选项 |


### withCodeSourceURL

#### 详细描述
WithCodeSourceURL 设置代码源的远程地址（导出名为 ssa.withCodeSourceURL）

参数:

  - url: 代码仓库 URL



返回值:

  - 代码源配置可选项




Example:

``````````````yak
opt = ssa.withCodeSourceURL("https://github.com/yaklang/yaklang.git")
println(opt)
``````````````


#### 定义

`withCodeSourceURL(url string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| url | `string` | 代码仓库 URL |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 代码源配置可选项 |


### withConcurrency

#### 详细描述
WithCompileConcurrency 设置编译并发数（导出名为 ssa.withConcurrency）

参数:

  - concurrency: 并发数（仅并行化预处理阶段的读取与 AST 解析）



返回值:

  - 编译配置可选项




Example:

``````````````yak
opt = ssa.withConcurrency(5)
println(opt)
``````````````


#### 定义

`withConcurrency(concurrency int) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| concurrency | `int` | 并发数（仅并行化预处理阶段的读取与 AST 解析） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 编译配置可选项 |


### withConfigInfo

#### 详细描述
WithCodeSourceMap 以 map 形式批量设置代码源配置（导出名为 ssa.withConfigInfo）

参数:

  - input: 代码源配置字典，如 {&#34;kind&#34;: &#34;local&#34;, &#34;local_file&#34;: &#34;/tmp/project&#34;}



返回值:

  - 代码源配置可选项




Example:

``````````````yak
opt = ssa.withConfigInfo({"kind": "local", "local_file": "/tmp/project"})
println(opt)
``````````````


#### 定义

`withConfigInfo(input map[string]any) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| input | `map[string]any` | 代码源配置字典，如 {&#34;kind&#34;: &#34;local&#34;, &#34;local_file&#34;: &#34;/tmp/project&#34;} |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 代码源配置可选项 |


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
WithCompileExcludeFiles 设置编译时排除的文件（导出名为 ssa.withExcludeFile / ssa.withDefaultExcludeFunc）

参数:

  - excludeFiles: 要排除的文件路径模式，支持逗号分隔多个模式



返回值:

  - 编译配置可选项




Example:

``````````````yak
opt = ssa.withExcludeFile("**/test/**", "**/*.min.js")
println(opt)
``````````````


#### 定义

`withDefaultExcludeFunc(excludeFiles ...string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| excludeFiles | `...string` | 要排除的文件路径模式，支持逗号分隔多个模式 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 编译配置可选项 |


### withDescription

#### 详细描述
WithProgramDescription 设置程序描述（导出名为 ssa.withDescription）

参数:

  - description: 程序描述



返回值:

  - 编译/项目配置可选项




Example:

``````````````yak
opt = ssa.withDescription("program description")
println(opt)
``````````````


#### 定义

`withDescription(description string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| description | `string` | 程序描述 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 编译/项目配置可选项 |


### withEnableIncrementalCompile

#### 详细描述
WithEnableIncrementalCompile 启用增量编译（导出名为 ssa.withEnableIncrementalCompile）

如果启用增量编译但 BaseProgramName 为空，表示这是第一次增量编译（base program）

参数:

  - enable: 是否启用增量编译



返回值:

  - 编译配置可选项




Example:

``````````````yak
opt = ssa.withEnableIncrementalCompile(true)
println(opt)
``````````````


#### 定义

`withEnableIncrementalCompile(enable bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| enable | `bool` | 是否启用增量编译 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 编译配置可选项 |


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
WithCompileExcludeFiles 设置编译时排除的文件（导出名为 ssa.withExcludeFile / ssa.withDefaultExcludeFunc）

参数:

  - excludeFiles: 要排除的文件路径模式，支持逗号分隔多个模式



返回值:

  - 编译配置可选项




Example:

``````````````yak
opt = ssa.withExcludeFile("**/test/**", "**/*.min.js")
println(opt)
``````````````


#### 定义

`withExcludeFile(excludeFiles ...string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| excludeFiles | `...string` | 要排除的文件路径模式，支持逗号分隔多个模式 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 编译配置可选项 |


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
WithExternValue 为 SSA 编译注入外部值符号（导出名为 ssa.withExternValue）

让分析器把这些名称识别为已知的外部符号，避免被当作未定义变量



参数:

  - table: 外部值的符号表（名称到值的映射）



返回值:

  - 编译配置可选项，可传入 ssa.Parse




Example:

``````````````yak
prog = ssa.Parse(`x = EXTERN_VAL`, ssa.withExternValue({"EXTERN_VAL": 123}))~
println(prog != nil)   // OUT: true
assert prog != nil, "parse with withExternValue option should succeed"
``````````````


#### 定义

`withExternValue(table map[string]any) ssaconfig.Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| table | `map[string]any` | 外部值的符号表（名称到值的映射） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ssaconfig.Option` | 编译配置可选项，可传入 ssa.Parse |


### withFilePerformanceLog

#### 详细描述
WithCompileFilePerformanceLog 设置是否记录文件级别性能日志（导出名为 ssa.withFilePerformanceLog）

参数:

  - enable: 是否开启文件级别性能日志



返回值:

  - 编译配置可选项




Example:

``````````````yak
opt = ssa.withFilePerformanceLog(true)
println(opt)
``````````````


#### 定义

`withFilePerformanceLog(enable bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| enable | `bool` | 是否开启文件级别性能日志 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 编译配置可选项 |


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
WithProjectRawLanguage 以字符串形式设置项目编程语言（导出名为 ssa.withLanguage）

参数:

  - language: 语言名称，如 &#34;java&#34;、&#34;yak&#34;、&#34;php&#34;、&#34;golang&#34;



返回值:

  - 编译/项目配置可选项




Example:

``````````````yak
opt = ssa.withLanguage("java")
println(opt)
``````````````


#### 定义

`withLanguage(language string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| language | `string` | 语言名称，如 &#34;java&#34;、&#34;yak&#34;、&#34;php&#34;、&#34;golang&#34; |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 编译/项目配置可选项 |


### withMemory

#### 详细描述
WithCompileMemoryCompile 设置是否在内存中编译（不落库，导出名为 ssa.withMemory）

参数:

  - memoryCompile: 是否使用内存编译，缺省为 true



返回值:

  - 编译配置可选项




Example:

``````````````yak
opt = ssa.withMemory(true)
println(opt)
``````````````


#### 定义

`withMemory(memoryCompile ...bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| memoryCompile | `...bool` | 是否使用内存编译，缺省为 true |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 编译配置可选项 |


### withPeepholeSize

#### 详细描述
WithCompilePeepholeSize 设置窥视孔大小，用于将虚拟文件系统切分为多个编译块（导出名为 ssa.withPeepholeSize）

参数:

  - peepholeSize: 窥视孔大小



返回值:

  - 编译配置可选项




Example:

``````````````yak
opt = ssa.withPeepholeSize(100)
println(opt)
``````````````


#### 定义

`withPeepholeSize(peepholeSize int) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| peepholeSize | `int` | 窥视孔大小 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 编译配置可选项 |


### withProcess

#### 详细描述
WithProcess 设置编译进度回调（导出名为 ssa.withProcess）

编译过程中会以 (进度消息, 进度比例) 回调该函数，常用于展示编译进度



参数:

  - v: 进度回调函数，参数为 (msg 进度消息, process 进度比例 0~1)



返回值:

  - 编译配置可选项，可传入 ssa.Parse




Example:

``````````````yak
called = false
prog = ssa.Parse(`a = 1; b = a + 1; println(b)`, ssa.withProcess((msg, process) => { called = true }))~
println(called)   // OUT: true
assert prog != nil, "parse with withProcess option should succeed"
assert called == true, "process callback should be invoked during compilation"
``````````````


#### 定义

`withProcess(v ProcessFunc) ssaconfig.Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v | `ProcessFunc` | 进度回调函数，参数为 (msg 进度消息, process 进度比例 0~1) |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ssaconfig.Option` | 编译配置可选项，可传入 ssa.Parse |


### withProgramName

#### 详细描述
WithProgramNames 追加要编译/加载的程序名（导出名为 ssa.withProgramName）

参数:

  - programName: 一个或多个程序名



返回值:

  - 编译/项目配置可选项




Example:

``````````````yak
opt = ssa.withProgramName("my-program")
println(opt)
``````````````


#### 定义

`withProgramName(programName ...string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| programName | `...string` | 一个或多个程序名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 编译/项目配置可选项 |


### withProjectDescription

#### 详细描述
WithProjectDescription 设置 SSA 项目描述（导出名为 ssa.withProjectDescription）

参数:

  - s: 项目描述



返回值:

  - 编译/项目配置可选项




Example:

``````````````yak
opt = ssa.withProjectDescription("a demo project")
println(opt)
``````````````


#### 定义

`withProjectDescription(s string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` | 项目描述 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 编译/项目配置可选项 |


### withProjectID

#### 详细描述
WithProjectID 设置 SSA 项目 ID（导出名为 ssa.withProjectID）

参数:

  - projectId: 项目 ID



返回值:

  - 编译/项目配置可选项




Example:

``````````````yak
opt = ssa.withProjectID(1)
println(opt)
``````````````


#### 定义

`withProjectID(projectId uint64) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| projectId | `uint64` | 项目 ID |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 编译/项目配置可选项 |


### withProjectLanguage

#### 详细描述
WithProjectLanguage 以语言枚举形式设置项目编程语言（导出名为 ssa.withProjectLanguage）

参数:

  - language: 语言枚举，如 ssa.Java、ssa.Yak、ssa.PHP



返回值:

  - 编译/项目配置可选项




Example:

``````````````yak
opt = ssa.withProjectLanguage(ssa.Java)
println(opt)
``````````````


#### 定义

`withProjectLanguage(language Language) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| language | `Language` | 语言枚举，如 ssa.Java、ssa.Yak、ssa.PHP |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 编译/项目配置可选项 |


### withProjectName

#### 详细描述
WithProjectName 设置 SSA 项目名称（导出名为 ssa.withProjectName）

参数:

  - name: 项目名称



返回值:

  - 编译/项目配置可选项




Example:

``````````````yak
opt = ssa.withProjectName("my-project")
println(opt)
``````````````


#### 定义

`withProjectName(name string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 项目名称 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 编译/项目配置可选项 |


### withProjectTags

#### 详细描述
WithProjectTags 设置 SSA 项目标签（导出名为 ssa.withProjectTags）

参数:

  - tags: 标签列表



返回值:

  - 编译/项目配置可选项




Example:

``````````````yak
opt = ssa.withProjectTags(["java", "demo"])
println(opt)
``````````````


#### 定义

`withProjectTags(tags []string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| tags | `[]string` | 标签列表 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 编译/项目配置可选项 |


### withReCompile

#### 详细描述
WithCompileReCompile 设置是否强制重新编译（导出名为 ssa.withReCompile）

参数:

  - reCompile: 是否忽略缓存重新编译



返回值:

  - 编译配置可选项




Example:

``````````````yak
opt = ssa.withReCompile(true)
println(opt)
``````````````


#### 定义

`withReCompile(reCompile bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| reCompile | `bool` | 是否忽略缓存重新编译 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 编译配置可选项 |


### withSetProgramName

#### 详细描述
WithSetProgramName 设置主 program 名称（替换而非追加，导出名为 ssa.withSetProgramName）

用于新编译场景：当 config 从项目 JSON 加载时可能包含旧的 program_names，

调用此选项可强制使用新生成的 program 名称，避免复用数据库中的旧 program

参数:

  - name: 新的主程序名



返回值:

  - 编译/项目配置可选项




Example:

``````````````yak
opt = ssa.withSetProgramName("new-program")
println(opt)
``````````````


#### 定义

`withSetProgramName(name string) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 新的主程序名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 编译/项目配置可选项 |


### withStrictMode

#### 详细描述
WithCompileStrictMode 设置编译严格模式（导出名为 ssa.withStrictMode）

参数:

  - strictMode: 是否开启严格模式



返回值:

  - 编译配置可选项




Example:

``````````````yak
opt = ssa.withStrictMode(true)
println(opt)
``````````````


#### 定义

`withStrictMode(strictMode bool) Option`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| strictMode | `bool` | 是否开启严格模式 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `Option` | 编译配置可选项 |


