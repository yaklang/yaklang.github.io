# ssa {#library-ssa}

`ssa` 库是 yaklang 的静态分析引擎入口，把多语言源码编译为统一的 SSA（静态单赋值）中间表示并构建程序数据库，供 SyntaxFlow 规则做污点/数据流查询，是代码审计能力的底座。

典型使用场景：

- 编译程序：`ssa.Parse` 编译一段代码，`ssa.ParseLocalProject` / `ssa.ParseProject` 编译整个项目（配 `ssa.withLanguage` / `ssa.withProgramName` / `ssa.withExcludeFile` / `ssa.withConcurrency` 等），`ssa.NewFromProgramName` / `ssa.NewProgramFromDB` 从数据库加载已编译程序。
- 项目与结果：`ssa.NewSSAProject` / `ssa.GetSSAProjectByID` 管理审计项目，`ssa.NewResultFromDB` 读取分析结果。
- 静态检查：`ssa.SyntaxFlowRuleChecking` 校验 SyntaxFlow 规则，`ssa.YaklangScriptChecking` 检查 yak 插件代码。

与相邻库的关系：`ssa` 负责"把代码编译成可查询的程序"，`syntaxflow` 在其之上写规则做查询，`sfreport` 输出审计报告，`risk` 记录代码风险；常配合 `git`/`filesys` 提供源码。

> 共 50 个函数、7 个实例

## 实例

|实例名|类型|说明|
|:--|:--|:--|
| Java | `ssaconfig.Language` | &#34;java&#34; |
| Javascript | `ssaconfig.Language` | &#34;js&#34; |
| ModeAll | `ssaconfig.Mode` | 127 |
| ModeProjectCompile | `ssaconfig.Mode` | 35 |
| PHP | `ssaconfig.Language` | &#34;php&#34; |
| Python | `ssaconfig.Language` | &#34;python&#34; |
| Yak | `ssaconfig.Language` | &#34;yak&#34; |

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [ssa.GetLatestProgramNameByProjectName](#getlatestprogramnamebyprojectname) | `projectName string` | `string, error` | 根据 SSA 项目名查询其最新编译产物（program）的名称（导出名为 ssa.GetLatestProgramNameByProjectName） |
| [ssa.GetSSAProjectByID](#getssaprojectbyid) | `id uint` | `*SSAProject, error` | LoadSSAProjectByID 根据项目 ID 从数据库加载 SSA 项目（导出名为 ssa.GetSSAProjectByID） |
| [ssa.GetSSAProjectByNameAndURL](#getssaprojectbynameandurl) | `projectName string, url string` | `*SSAProject, error` | LoadSSAProjectByNameAndURL 根据项目名与代码源 URL 从数据库加载 SSA 项目（导出名为 ssa.GetSSAProjectByNameAndURL） |
| [ssa.NewFromProgramName](#newfromprogramname) | `programName string` | `*Program, error` | FromDatabase 从数据库中按程序名加载已编译的 SSA 程序（导出名为 ssa.NewFromProgramName） |
| [ssa.NewProgramFromDB](#newprogramfromdb) | `programName string` | `SyntaxFlowQueryInstance, error` | 从数据库加载程序并返回 SyntaxFlowQueryInstance 接口（导出名为 ssa.NewProgramFromDB） |
| [ssa.SyntaxFlowRuleChecking](#syntaxflowrulechecking) | `code string` | `[]*result.StaticAnalyzeResult` | 对 SyntaxFlow 规则内容做语法检查（导出名为 ssa.SyntaxFlowRuleChecking） |
| [ssa.YaklangScriptChecking](#yaklangscriptchecking) | `code string, pluginType string` | `[]*result.StaticAnalyzeResult` | 对 Yaklang 插件代码做静态分析检查（导出名为 ssa.YaklangScriptChecking） |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [ssa.NewConfig](#newconfig) | `mode Mode, opts ...Option` | `*Config, error` | New 创建一个 SSA 配置对象（导出名为 ssa.NewConfig） |
| [ssa.NewResultFromDB](#newresultfromdb) | `resultID uint, force ...bool` | `*SyntaxFlowResult, error` | LoadResultByID 根据结果 ID 从数据库加载已保存的 SyntaxFlow 查询结果（导出名为 ssa.NewResultFromDB） |
| [ssa.NewSSAProject](#newssaproject) | `opts ...ssaconfig.Option` | `*SSAProject, error` | 根据配置选项创建一个 SSA 项目对象（导出名为 ssa.NewSSAProject） |
| [ssa.Parse](#parse) | `code string, opts ...ssaconfig.Option` | `*Program, error` | 将一段源码编译为 SSA 程序对象，用于后续的 SyntaxFlow 查询与静态分析 |
| [ssa.ParseLocalProject](#parselocalproject) | `path string, opts ...ssaconfig.Option` | `Programs, error` | ParseProjectFromPath 编译本地路径下的整个项目为 SSA 程序集合（导出名为 ssa.ParseLocalProject） |
| [ssa.ParseProject](#parseproject) | `opts ...ssaconfig.Option` | `Programs, error` | 根据编译选项编译一个项目为 SSA 程序集合（导出名为 ssa.ParseProject） |

## 函数详情

### GetLatestProgramNameByProjectName {#getlatestprogramnamebyprojectname}

```go
GetLatestProgramNameByProjectName(projectName string) (string, error)
```

根据 SSA 项目名查询其最新编译产物（program）的名称（导出名为 ssa.GetLatestProgramNameByProjectName）

一个项目可能多次编译产生多个 program，本函数返回最近一次的 program 名称

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| projectName | `string` | SSA 项目名 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 最新的 program 名称 |
| r2 | `error` | 错误信息（项目名为空或查询失败时返回） |

**示例**

``````````````yak
// 该示例依赖数据库中已存在的 SSA 项目，仅作用法示意
name = ssa.GetLatestProgramNameByProjectName("my-project")~
println(name)
``````````````

---

### GetSSAProjectByID {#getssaprojectbyid}

```go
GetSSAProjectByID(id uint) (*SSAProject, error)
```

LoadSSAProjectByID 根据项目 ID 从数据库加载 SSA 项目（导出名为 ssa.GetSSAProjectByID）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| id | `uint` | 项目的数据库 ID |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*SSAProject` | SSA 项目对象 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 加载已保存的项目（示意性示例，需要数据库中已有该项目）
project = ssa.GetSSAProjectByID(1)~
dump(project)
``````````````

---

### GetSSAProjectByNameAndURL {#getssaprojectbynameandurl}

```go
GetSSAProjectByNameAndURL(projectName string, url string) (*SSAProject, error)
```

LoadSSAProjectByNameAndURL 根据项目名与代码源 URL 从数据库加载 SSA 项目（导出名为 ssa.GetSSAProjectByNameAndURL）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| projectName | `string` | 项目名 |
| url | `string` | 代码源 URL |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*SSAProject` | SSA 项目对象 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 加载已保存的项目（示意性示例，需要数据库中已有该项目）
project = ssa.GetSSAProjectByNameAndURL("demo", "https://github.com/yaklang/yaklang.git")~
dump(project)
``````````````

---

### NewFromProgramName {#newfromprogramname}

```go
NewFromProgramName(programName string) (p *Program, err error)
```

FromDatabase 从数据库中按程序名加载已编译的 SSA 程序（导出名为 ssa.NewFromProgramName）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| programName | `string` | 已保存的程序名 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| p | `*Program` | SSA 程序对象 |
| err | `error` | 错误信息 |

**示例**

``````````````yak
// 加载此前编译并保存的程序（示意性示例，需要数据库中已有该程序）
prog = ssa.NewFromProgramName("my-program")~
result = prog.SyntaxFlowWithError("sink* as $sink")~
dump(result)
``````````````

---

### NewProgramFromDB {#newprogramfromdb}

```go
NewProgramFromDB(programName string) (SyntaxFlowQueryInstance, error)
```

从数据库加载程序并返回 SyntaxFlowQueryInstance 接口（导出名为 ssa.NewProgramFromDB）

如果程序有 overlay（已保存的 overlay 或增量编译的 diff program），返回 *ProgramOverLay，否则返回 *Program

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| programName | `string` | 已保存的程序名 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `SyntaxFlowQueryInstance` | 可执行 SyntaxFlow 查询的程序实例 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 加载已保存的程序并执行查询（示意性示例，需要数据库中已有该程序）
prog = ssa.NewProgramFromDB("my-program")~
result = prog.SyntaxFlowWithError("sink* as $sink")~
dump(result)
``````````````

---

### SyntaxFlowRuleChecking {#syntaxflowrulechecking}

```go
SyntaxFlowRuleChecking(code string) []*result.StaticAnalyzeResult
```

对 SyntaxFlow 规则内容做语法检查（导出名为 ssa.SyntaxFlowRuleChecking）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| code | `string` | 待检查的 SyntaxFlow 规则内容 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*result.StaticAnalyzeResult` | 静态分析结果列表，语法正确的规则返回空列表 |

**示例**

``````````````yak
results = ssa.SyntaxFlowRuleChecking(`desc(title: "demo"); sink as $sink;`)
dump(results)
``````````````

---

### YaklangScriptChecking {#yaklangscriptchecking}

```go
YaklangScriptChecking(code string, pluginType string) []*result.StaticAnalyzeResult
```

对 Yaklang 插件代码做静态分析检查（导出名为 ssa.YaklangScriptChecking）

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| code | `string` | 待检查的源码 |
| pluginType | `string` | 插件类型，可选值为 &#34;yak&#34;、&#34;mitm&#34;、&#34;port-scan&#34;、&#34;codec&#34;、&#34;syntaxflow&#34; |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*result.StaticAnalyzeResult` | 静态分析结果列表，正常代码返回空列表 |

**示例**

``````````````yak
results = ssa.YaklangScriptChecking("a = 1\nb = a + 1\n", "yak")
assert len(results) == 0, "valid yak code should have no static analyze error"
``````````````

---

## 可变参数函数详情

### NewConfig {#newconfig}

```go
NewConfig(mode Mode, opts ...Option) (*Config, error)
```

New 创建一个 SSA 配置对象（导出名为 ssa.NewConfig）

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| mode | `Mode` | 配置模式，如 ssa.ModeAll、ssa.ModeProjectCompile |

**可选参数**

可作为可变参数 `opts ...Option` 传入选项；共 37 个可用选项，详见 [Option 选项列表](#option-option)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*Config` | 配置对象 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
config = ssa.NewConfig(ssa.ModeProjectCompile, ssa.withLanguage("java"))~
dump(config)
``````````````

---

### NewResultFromDB {#newresultfromdb}

```go
NewResultFromDB(resultID uint, force ...bool) (*SyntaxFlowResult, error)
```

LoadResultByID 根据结果 ID 从数据库加载已保存的 SyntaxFlow 查询结果（导出名为 ssa.NewResultFromDB）

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| resultID | `uint` | 已保存结果的数据库 ID |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| force | `...bool` | 是否强制跳过缓存重新加载，缺省为 false |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*SyntaxFlowResult` | SyntaxFlow 查询结果对象 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 加载某次已保存的查询结果（示意性示例，需要数据库中已有该结果）
result = ssa.NewResultFromDB(1)~
dump(result)
``````````````

---

### NewSSAProject {#newssaproject}

```go
NewSSAProject(opts ...ssaconfig.Option) (*SSAProject, error)
```

根据配置选项创建一个 SSA 项目对象（导出名为 ssa.NewSSAProject）

**可选参数**

可作为可变参数 `opts ...ssaconfig.Option` 传入选项；共 37 个可用选项，详见 [Option 选项列表](#option-option)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*SSAProject` | SSA 项目对象 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
project = ssa.NewSSAProject(ssa.withProjectName("demo"), ssa.withLanguage("java"))~
dump(project)
``````````````

---

### Parse {#parse}

```go
Parse(code string, opts ...ssaconfig.Option) (*Program, error)
```

将一段源码编译为 SSA 程序对象，用于后续的 SyntaxFlow 查询与静态分析

导出名为 ssa.Parse

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| code | `string` | 待编译的源码字符串 |

**可选参数**

可作为可变参数 `opts ...ssaconfig.Option` 传入选项；共 37 个可用选项，详见 [Option 选项列表](#option-option)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*Program` | 编译得到的 SSA 程序对象 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
prog = ssa.Parse("a = 1; b = a + 1; println(b)", ssa.withLanguage(ssa.Yak))~
result = prog.SyntaxFlowWithError("println(* as $arg)")~
assert result != nil, "syntaxflow result should not be nil"
``````````````

---

### ParseLocalProject {#parselocalproject}

```go
ParseLocalProject(path string, opts ...ssaconfig.Option) (Programs, error)
```

ParseProjectFromPath 编译本地路径下的整个项目为 SSA 程序集合（导出名为 ssa.ParseLocalProject）

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| path | `string` | 项目所在的本地目录路径 |

**可选参数**

可作为可变参数 `opts ...ssaconfig.Option` 传入选项；共 37 个可用选项，详见 [Option 选项列表](#option-option)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `Programs` | SSA 程序集合 |
| r2 | `error` | 错误信息 |

**示例**

``````````````yak
// 编译本地某个 Java 项目（示意性示例，需替换为真实路径）
progs = ssa.ParseLocalProject("/tmp/my-java-project", ssa.withLanguage(ssa.Java))~
println(len(progs))
``````````````

---

### ParseProject {#parseproject}

```go
ParseProject(opts ...ssaconfig.Option) (prog Programs, err error)
```

根据编译选项编译一个项目为 SSA 程序集合（导出名为 ssa.ParseProject）

与 ParseLocalProject 不同，本函数通过选项指定代码来源（本地文件系统、git 等）

**可选参数**

可作为可变参数 `opts ...ssaconfig.Option` 传入选项；共 37 个可用选项，详见 [Option 选项列表](#option-option)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| prog | `Programs` | SSA 程序集合 |
| err | `error` | 错误信息 |

**示例**

``````````````yak
// 通过选项指定本地代码目录进行编译（示意性示例，需替换为真实路径）
progs = ssa.ParseProject(ssa.withLanguage(ssa.Java), ssa.withProgramName("demo"))~
println(len(progs))
``````````````

---

## 可变参数选项列表

以下按选项类型汇总全部可变参数选项(原先重复在各主函数下的选项表已收拢到此处)：

### 1. 类型：Option {#option-option}

涉及到的函数有：[ssa.NewConfig](#newconfig)、[ssa.NewSSAProject](#newssaproject)、[ssa.Parse](#parse)、[ssa.ParseLocalProject](#parselocalproject)、[ssa.ParseProject](#parseproject)

|选项函数|参数|返回值|说明|
|:--|:--|:--|:--|
| `ssa.withBaseProgramName` | `baseProgramName string` | `Option` | 设置基础程序名称用于差量编译 |
| `ssa.withCodeSourceAuthKeyContent` | `keyContent string` | `Option` | 设置 SSH 私钥内容（PEM 格式，适用于分布式场景，导出名为 ssa.withCodeSourceAuthKeyContent） |
| `ssa.withCodeSourceAuthKeyPath` | `keyPath string` | `Option` | WithSSAProjectCodeSourceAuthKeyPath 设置代码源 SSH 私钥文件路径 |
| `ssa.withCodeSourceAuthKind` | `kind string` | `Option` | 设置代码源认证方式 |
| `ssa.withCodeSourceAuthPassword` | `password string` | `Option` | 设置代码源认证密码或令牌 |
| `ssa.withCodeSourceAuthUserName` | `userName string` | `Option` | 设置代码源认证用户名 |
| `ssa.withCodeSourceBranch` | `branch string` | `Option` | 设置代码源的分支 |
| `ssa.withCodeSourceJarRecursiveParse` | `enable bool` | `Option` | 设置是否对 Jar 包进行递归解析 |
| `ssa.withCodeSourceKind` | `kind CodeSourceKind` | `Option` | 设置代码源类型 |
| `ssa.withCodeSourceLocalFile` | `localFile string` | `Option` | 设置代码源的本地文件/目录路径 |
| `ssa.withCodeSourcePath` | `path string` | `Option` | 设置代码源在仓库内的子路径 |
| `ssa.withCodeSourceURL` | `url string` | `Option` | 设置代码源的远程地址 |
| `ssa.withConcurrency` | `concurrency int` | `Option` | WithCompileConcurrency 设置编译并发数 |
| `ssa.withConfigInfo` | `input map[string]any` | `Option` | WithCodeSourceMap 以 map 形式批量设置代码源配置 |
| `ssa.withContext` | `ctx context.Context` | `Option` | 为 SSA 编译/查询设置上下文 |
| `ssa.withDefaultExcludeFunc` | `excludeFiles ...string` | `Option` | WithCompileExcludeFiles 设置编译时排除的文件 |
| `ssa.withDescription` | `description string` | `Option` | WithProgramDescription 设置程序描述 |
| `ssa.withEnableIncrementalCompile` | `enable bool` | `Option` | 启用增量编译 |
| `ssa.withEntryFile` | `v ...string` | `ssaconfig.Option` | WithFileSystemEntry 设置编译入口文件 |
| `ssa.withExcludeFile` | `excludeFiles ...string` | `Option` | WithCompileExcludeFiles 设置编译时排除的文件 |
| `ssa.withExternLib` | `name string, table map[string]any` | `ssaconfig.Option` | 为 SSA 编译注入外部库 |
| `ssa.withExternValue` | `table map[string]any` | `ssaconfig.Option` | 为 SSA 编译注入外部值符号 |
| `ssa.withFilePerformanceLog` | `enable bool` | `Option` | WithCompileFilePerformanceLog 设置是否记录文件级别性能日志 |
| `ssa.withJsonRawConfig` | `raw []byte` | `Option` | 从原始 JSON 字节加载并合并到配置中 |
| `ssa.withLanguage` | `language string` | `Option` | WithProjectRawLanguage 以字符串形式设置项目编程语言 |
| `ssa.withMemory` | `memoryCompile ...bool` | `Option` | WithCompileMemoryCompile 设置是否在内存中编译（不落库，导出名为 ssa.withMemory） |
| `ssa.withPeepholeSize` | `peepholeSize int` | `Option` | WithCompilePeepholeSize 设置窥视孔大小，用于将虚拟文件系统切分为多个编译块 |
| `ssa.withProcess` | `v ProcessFunc` | `ssaconfig.Option` | 设置编译进度回调 |
| `ssa.withProgramName` | `programName ...string` | `Option` | WithProgramNames 追加要编译/加载的程序名 |
| `ssa.withProjectDescription` | `s string` | `Option` | 设置 SSA 项目描述 |
| `ssa.withProjectID` | `projectId uint64` | `Option` | 设置 SSA 项目 ID |
| `ssa.withProjectLanguage` | `language Language` | `Option` | 以语言枚举形式设置项目编程语言 |
| `ssa.withProjectName` | `name string` | `Option` | 设置 SSA 项目名称 |
| `ssa.withProjectTags` | `tags []string` | `Option` | 设置 SSA 项目标签 |
| `ssa.withReCompile` | `reCompile bool` | `Option` | WithCompileReCompile 设置是否强制重新编译 |
| `ssa.withSetProgramName` | `name string` | `Option` | 设置主 program 名称（替换而非追加，导出名为 ssa.withSetProgramName） |
| `ssa.withStrictMode` | `strictMode bool` | `Option` | WithCompileStrictMode 设置编译严格模式 |

