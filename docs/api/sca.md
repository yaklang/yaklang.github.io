# sca

|实例名|实例描述|
|:------|:--------|
ANALYZER_TYPE_APK|(analyzer.TypAnalyzer) &#34;apk-pkg&#34;|
ANALYZER_TYPE_CLANG_CONAN|(analyzer.TypAnalyzer) &#34;conan-lang&#34;|
ANALYZER_TYPE_DPKG|(analyzer.TypAnalyzer) &#34;dpkg-pkg&#34;|
ANALYZER_TYPE_GO_BINARY|(analyzer.TypAnalyzer) &#34;go-binary-lang&#34;|
ANALYZER_TYPE_GO_MOD|(analyzer.TypAnalyzer) &#34;go-mod-lang&#34;|
ANALYZER_TYPE_JAVA_GRADLE|(analyzer.TypAnalyzer) &#34;gradle-lang&#34;|
ANALYZER_TYPE_JAVA_JAR|(analyzer.TypAnalyzer) &#34;jar-lang&#34;|
ANALYZER_TYPE_JAVA_POM|(analyzer.TypAnalyzer) &#34;pom-lang&#34;|
ANALYZER_TYPE_NODE_NPM|(analyzer.TypAnalyzer) &#34;npm-lang&#34;|
ANALYZER_TYPE_NODE_PNPM|(analyzer.TypAnalyzer) &#34;npmp-lang&#34;|
ANALYZER_TYPE_NODE_YARN|(analyzer.TypAnalyzer) &#34;yarm-lang&#34;|
ANALYZER_TYPE_PHP_COMPOSER|(analyzer.TypAnalyzer) &#34;composer-lang&#34;|
ANALYZER_TYPE_PYTHON_PACKAGING|(analyzer.TypAnalyzer) &#34;python-packaging-lang&#34;|
ANALYZER_TYPE_PYTHON_PIP|(analyzer.TypAnalyzer) &#34;python-pip-lang&#34;|
ANALYZER_TYPE_PYTHON_PIPENV|(analyzer.TypAnalyzer) &#34;python-pipenv-lang&#34;|
ANALYZER_TYPE_PYTHON_POETRY|(analyzer.TypAnalyzer) &#34;python-poetry-lang&#34;|
ANALYZER_TYPE_RPM|(analyzer.TypAnalyzer) &#34;rpm-pkg&#34;|
ANALYZER_TYPE_RUBY_BUNDLER|(analyzer.TypAnalyzer) &#34;ruby-bundler-lang&#34;|
ANALYZER_TYPE_RUBY_GEMSPEC|(analyzer.TypAnalyzer) &#34;ruby-gemspec-lang&#34;|
ANALYZER_TYPE_RUST_CARGO|(analyzer.TypAnalyzer) &#34;cargo-lang&#34;|
MODE_ALL|(analyzer.ScanMode) 0|
MODE_LANGUAGE|(int) 4|
MODE_PKG|(int) 2|

|函数名|函数描述/介绍|
|:------|:--------|
| [sca.NewAnalyzerResult](#newanalyzerresult) |NewAnalyzerResult 创建一个自定义分析结果(软件包)，用于在自定义 SCA 分析器中返回识别到的组件 在 yak 中通过 sca.NewAnalyzerResult 调用 参数: - name: 软件包名称 - version: 软件包版本号 返回值: - 包含名称与版本的自定义软件...|
| [sca.ScanContainerFromContext](#scancontainerfromcontext) |ScanDockerContainerFromContext 通过 Docker API 导出指定容器(包括其挂载卷)，识别其中的软件成分(SCA) 在 yak 中通过 sca.ScanContainerFromContext 调用，依赖本地或远程 Docker 环境 参数: - container...|
| [sca.ScanFilesystem](#scanfilesystem) |ScanFilesystem 扫描给定的文件系统接口对象，识别其中的软件成分(SCA)，返回检测到的软件包列表 在 yak 中通过 sca.ScanFilesystem 调用，可配合 filesys 包构造的各类文件系统使用 参数: - p: 实现 FileSystem 接口的文件系统对象(如 fi...|
| [sca.ScanGitRepo](#scangitrepo) |ScanGitRepo 遍历本地 Git 仓库的全部提交历史，识别各历史版本中的软件成分(SCA) 在 yak 中通过 sca.ScanGitRepo 调用 参数: - repoDir: 本地 Git 仓库目录路径 - opts: 可选配置项 返回值: - 检测到的软件包列表 - 错误信息，扫描失败...|
| [sca.ScanImageFromContext](#scanimagefromcontext) |ScanDockerImageFromContext 通过 Docker API 拉取/导出指定镜像，识别其中的软件成分(SCA) 在 yak 中通过 sca.ScanImageFromContext 调用，依赖本地或远程 Docker 环境 参数: - imageID: 目标镜像 ID 或名称 -...|
| [sca.ScanImageFromFile](#scanimagefromfile) |ScanDockerImageFromFile 扫描本地保存的 Docker 镜像 tar 文件，识别其中的软件成分(SCA) 在 yak 中通过 sca.ScanImageFromFile 调用，无需连接 Docker 守护进程 参数: - path: 本地镜像 tar 文件路径(通常由 dock...|
| [sca.ScanLocalFilesystem](#scanlocalfilesystem) |ScanLocalFilesystem 扫描本地文件系统目录，识别其中的软件成分(SCA)，返回检测到的软件包列表 在 yak 中通过 sca.ScanLocalFilesystem 调用，会根据各类包管理器清单(如 package.json、go.mod 等)解析依赖 参数: - p: 待扫描的本...|
| [sca.analyzers](#analyzers) |analyzers 指定本次扫描启用的分析器类型，仅运行所列分析器 在 yak 中通过 sca.analyzers 调用，取值如 sca.ANALYZER_TYPE_JAVA_POM、sca.ANALYZER_TYPE_NODE_NPM 参数: - a: 一个或多个分析器类型 返回值: - 一个扫描...|
| [sca.concurrent](#concurrent) |concurrent 设置扫描时的并发 worker 数量 在 yak 中通过 sca.concurrent 调用 参数: - n: 并发 worker 数量 返回值: - 一个扫描配置选项|
| [sca.customAnalyzer](#customanalyzer) |customAnalyzer 注册一个自定义 SCA 分析器，通过 matchFunc 决定是否处理某文件、analyzeFunc 产出软件包结果 在 yak 中通过 sca.customAnalyzer 调用 参数: - matchFunc: 文件匹配函数，返回非 0 表示该文件由本分析器处理 -...|
| [sca.endpoint](#endpoint) |endpoint 设置扫描 Docker 镜像/容器时使用的 Docker Endpoint 地址 在 yak 中通过 sca.endpoint 调用 参数: - endpoint: Docker Endpoint 地址，如 unix:///var/run/docker.sock 返回值: - 一个...|
| [sca.scanMode](#scanmode) |scanMode 设置扫描模式，控制识别全部成分、仅系统包或仅语言依赖 在 yak 中通过 sca.scanMode 调用，取值如 sca.MODE_ALL、sca.MODE_PKG、sca.MODE_LANGUAGE 参数: - mode: 扫描模式 返回值: - 一个扫描配置选项|


## 函数定义
### NewAnalyzerResult

#### 详细描述
NewAnalyzerResult 创建一个自定义分析结果(软件包)，用于在自定义 SCA 分析器中返回识别到的组件

在 yak 中通过 sca.NewAnalyzerResult 调用

参数:

  - name: 软件包名称

  - version: 软件包版本号



返回值:

  - 包含名称与版本的自定义软件包对象




Example:

``````````````yak
pkg = sca.NewAnalyzerResult("openssl", "1.1.1w")
println(pkg.Name)      // OUT: openssl
println(pkg.Version)   // OUT: 1.1.1w
assert pkg.Name == "openssl", "package name should be set"
assert pkg.Version == "1.1.1w", "package version should be set"
``````````````


#### 定义

`NewAnalyzerResult(name string, version string) *CustomPackage`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 软件包名称 |
| version | `string` | 软件包版本号 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*CustomPackage` | 包含名称与版本的自定义软件包对象 |


### ScanContainerFromContext

#### 详细描述
ScanDockerContainerFromContext 通过 Docker API 导出指定容器(包括其挂载卷)，识别其中的软件成分(SCA)

在 yak 中通过 sca.ScanContainerFromContext 调用，依赖本地或远程 Docker 环境

参数:

  - containerID: 目标容器 ID 或名称

  - opts: 可选配置项，如 sca.endpoint 指定 Docker Endpoint



返回值:

  - 检测到的软件包列表

  - 错误信息，连接 Docker 或扫描失败时非 nil




Example:

``````````````yak
// 该示例为示意性用法：依赖 Docker 环境，扫描运行中的容器
pkgs = sca.ScanContainerFromContext("my-container", sca.endpoint("unix:///var/run/docker.sock"))~
println("packages:", len(pkgs))
``````````````


#### 定义

`ScanContainerFromContext(containerID string, opts ...ScanOption) (pkgs []*dxtypes.Package, err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| containerID | `string` | 目标容器 ID 或名称 |
| opts | `...ScanOption` | 可选配置项，如 sca.endpoint 指定 Docker Endpoint |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| pkgs | `[]*dxtypes.Package` | 检测到的软件包列表 |
| err | `error` | 错误信息，连接 Docker 或扫描失败时非 nil |


### ScanFilesystem

#### 详细描述
ScanFilesystem 扫描给定的文件系统接口对象，识别其中的软件成分(SCA)，返回检测到的软件包列表

在 yak 中通过 sca.ScanFilesystem 调用，可配合 filesys 包构造的各类文件系统使用

参数:

  - p: 实现 FileSystem 接口的文件系统对象(如 filesys.NewLocalFs() 等)

  - opts: 可选配置项



返回值:

  - 检测到的软件包列表

  - 错误信息，输入文件系统为空或扫描失败时非 nil




Example:

``````````````yak
// 该示例为示意性用法：扫描任意文件系统接口对象
fs = filesys.NewLocalFs()
pkgs = sca.ScanFilesystem(fs)~
println("packages:", len(pkgs))
``````````````


#### 定义

`ScanFilesystem(p fi.FileSystem, opts ...ScanOption) ([]*dxtypes.Package, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| p | `fi.FileSystem` | 实现 FileSystem 接口的文件系统对象(如 filesys.NewLocalFs() 等) |
| opts | `...ScanOption` | 可选配置项 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*dxtypes.Package` | 检测到的软件包列表 |
| r2 | `error` | 错误信息，输入文件系统为空或扫描失败时非 nil |


### ScanGitRepo

#### 详细描述
ScanGitRepo 遍历本地 Git 仓库的全部提交历史，识别各历史版本中的软件成分(SCA)

在 yak 中通过 sca.ScanGitRepo 调用

参数:

  - repoDir: 本地 Git 仓库目录路径

  - opts: 可选配置项



返回值:

  - 检测到的软件包列表

  - 错误信息，扫描失败时非 nil




Example:

``````````````yak
// 该示例为示意性用法：扫描本地 Git 仓库历史中的软件成分
pkgs = sca.ScanGitRepo("/path/to/repo")~
println("packages:", len(pkgs))
``````````````


#### 定义

`ScanGitRepo(repoDir string, opts ...ScanOption) ([]*dxtypes.Package, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| repoDir | `string` | 本地 Git 仓库目录路径 |
| opts | `...ScanOption` | 可选配置项 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*dxtypes.Package` | 检测到的软件包列表 |
| r2 | `error` | 错误信息，扫描失败时非 nil |


### ScanImageFromContext

#### 详细描述
ScanDockerImageFromContext 通过 Docker API 拉取/导出指定镜像，识别其中的软件成分(SCA)

在 yak 中通过 sca.ScanImageFromContext 调用，依赖本地或远程 Docker 环境

参数:

  - imageID: 目标镜像 ID 或名称

  - opts: 可选配置项，如 sca.endpoint 指定 Docker Endpoint



返回值:

  - 检测到的软件包列表

  - 错误信息，连接 Docker 或扫描失败时非 nil




Example:

``````````````yak
// 该示例为示意性用法：依赖 Docker 环境，扫描镜像
pkgs = sca.ScanImageFromContext("nginx:latest")~
println("packages:", len(pkgs))
``````````````


#### 定义

`ScanImageFromContext(imageID string, opts ...ScanOption) ([]*dxtypes.Package, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| imageID | `string` | 目标镜像 ID 或名称 |
| opts | `...ScanOption` | 可选配置项，如 sca.endpoint 指定 Docker Endpoint |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*dxtypes.Package` | 检测到的软件包列表 |
| r2 | `error` | 错误信息，连接 Docker 或扫描失败时非 nil |


### ScanImageFromFile

#### 详细描述
ScanDockerImageFromFile 扫描本地保存的 Docker 镜像 tar 文件，识别其中的软件成分(SCA)

在 yak 中通过 sca.ScanImageFromFile 调用，无需连接 Docker 守护进程

参数:

  - path: 本地镜像 tar 文件路径(通常由 docker save 导出)

  - opts: 可选配置项



返回值:

  - 检测到的软件包列表

  - 错误信息，文件打开或扫描失败时非 nil




Example:

``````````````yak
// 该示例为示意性用法：扫描 docker save 导出的镜像文件
pkgs = sca.ScanImageFromFile("/path/to/image.tar")~
println("packages:", len(pkgs))
``````````````


#### 定义

`ScanImageFromFile(path string, opts ...ScanOption) ([]*dxtypes.Package, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` | 本地镜像 tar 文件路径(通常由 docker save 导出) |
| opts | `...ScanOption` | 可选配置项 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*dxtypes.Package` | 检测到的软件包列表 |
| r2 | `error` | 错误信息，文件打开或扫描失败时非 nil |


### ScanLocalFilesystem

#### 详细描述
ScanLocalFilesystem 扫描本地文件系统目录，识别其中的软件成分(SCA)，返回检测到的软件包列表

在 yak 中通过 sca.ScanLocalFilesystem 调用，会根据各类包管理器清单(如 package.json、go.mod 等)解析依赖

参数:

  - p: 待扫描的本地目录路径

  - opts: 可选配置项，如 sca.concurrent、sca.scanMode、sca.analyzers



返回值:

  - 检测到的软件包列表

  - 错误信息，扫描失败时非 nil




Example:

``````````````yak
// 该示例为示意性用法：扫描本地项目目录的软件成分
pkgs = sca.ScanLocalFilesystem("/path/to/project")~

	for pkg = range pkgs {
	    println(pkg.Name, pkg.Version)
	}
``````````````


#### 定义

`ScanLocalFilesystem(p string, opts ...ScanOption) ([]*dxtypes.Package, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| p | `string` | 待扫描的本地目录路径 |
| opts | `...ScanOption` | 可选配置项，如 sca.concurrent、sca.scanMode、sca.analyzers |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*dxtypes.Package` | 检测到的软件包列表 |
| r2 | `error` | 错误信息，扫描失败时非 nil |


### analyzers

#### 详细描述
analyzers 指定本次扫描启用的分析器类型，仅运行所列分析器

在 yak 中通过 sca.analyzers 调用，取值如 sca.ANALYZER_TYPE_JAVA_POM、sca.ANALYZER_TYPE_NODE_NPM

参数:

  - a: 一个或多个分析器类型



返回值:

  - 一个扫描配置选项




Example:

``````````````yak
// 该示例为示意性用法：仅启用 Java POM 分析器
pkgs = sca.ScanLocalFilesystem("/path/to/project", sca.analyzers(sca.ANALYZER_TYPE_JAVA_POM))~
``````````````


#### 定义

`analyzers(a ...analyzer.TypAnalyzer) ScanOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| a | `...analyzer.TypAnalyzer` | 一个或多个分析器类型 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ScanOption` | 一个扫描配置选项 |


### concurrent

#### 详细描述
concurrent 设置扫描时的并发 worker 数量

在 yak 中通过 sca.concurrent 调用

参数:

  - n: 并发 worker 数量



返回值:

  - 一个扫描配置选项




Example:

``````````````yak
// 该示例为示意性用法：以 10 并发扫描本地目录
pkgs = sca.ScanLocalFilesystem("/path/to/project", sca.concurrent(10))~
``````````````


#### 定义

`concurrent(n int) ScanOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `int` | 并发 worker 数量 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ScanOption` | 一个扫描配置选项 |


### customAnalyzer

#### 详细描述
customAnalyzer 注册一个自定义 SCA 分析器，通过 matchFunc 决定是否处理某文件、analyzeFunc 产出软件包结果

在 yak 中通过 sca.customAnalyzer 调用

参数:

  - matchFunc: 文件匹配函数，返回非 0 表示该文件由本分析器处理

  - analyzeFunc: 分析函数，返回识别到的自定义软件包列表



返回值:

  - 一个扫描配置选项




Example:

``````````````yak
// 该示例为示意性用法：注册一个自定义分析器
opt = sca.customAnalyzer(func(info) { return 0 }, func(fi, others) { return [] })
``````````````


#### 定义

`customAnalyzer(matchFunc func(info analyzer.MatchInfo) int, analyzeFunc func(fi *analyzer.FileInfo, otherFi map[string]*analyzer.FileInfo) []*analyzer.CustomPackage) ScanOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| matchFunc | `func(info analyzer.MatchInfo) int` | 文件匹配函数，返回非 0 表示该文件由本分析器处理 |
| analyzeFunc | `func(fi *analyzer.FileInfo, otherFi map[string]*analyzer.FileInfo) []*analyzer.CustomPackage` | 分析函数，返回识别到的自定义软件包列表 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ScanOption` | 一个扫描配置选项 |


### endpoint

#### 详细描述
endpoint 设置扫描 Docker 镜像/容器时使用的 Docker Endpoint 地址

在 yak 中通过 sca.endpoint 调用

参数:

  - endpoint: Docker Endpoint 地址，如 unix:///var/run/docker.sock



返回值:

  - 一个扫描配置选项




Example:

``````````````yak
// 该示例为示意性用法：指定 Docker Endpoint
pkgs = sca.ScanImageFromContext("nginx:latest", sca.endpoint("unix:///var/run/docker.sock"))~
``````````````


#### 定义

`endpoint(endpoint string) ScanOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| endpoint | `string` | Docker Endpoint 地址，如 unix:///var/run/docker.sock |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ScanOption` | 一个扫描配置选项 |


### scanMode

#### 详细描述
scanMode 设置扫描模式，控制识别全部成分、仅系统包或仅语言依赖

在 yak 中通过 sca.scanMode 调用，取值如 sca.MODE_ALL、sca.MODE_PKG、sca.MODE_LANGUAGE

参数:

  - mode: 扫描模式



返回值:

  - 一个扫描配置选项




Example:

``````````````yak
// 该示例为示意性用法：仅扫描语言依赖
pkgs = sca.ScanLocalFilesystem("/path/to/project", sca.scanMode(sca.MODE_LANGUAGE))~
``````````````


#### 定义

`scanMode(mode analyzer.ScanMode) ScanOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| mode | `analyzer.ScanMode` | 扫描模式 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ScanOption` | 一个扫描配置选项 |


