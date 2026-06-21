# sca {#library-sca}

`sca` 库是软件成分分析（Software Composition Analysis）工具，扫描文件系统、Git 仓库或容器镜像，识别其中的第三方组件与版本，为供应链安全与已知漏洞关联提供基础。

典型使用场景：

- 扫描来源：`sca.ScanLocalFilesystem` / `sca.ScanFilesystem` 扫描目录，`sca.ScanGitRepo` 扫描仓库，`sca.ScanImageFromFile` / `sca.ScanImageFromContext` / `sca.ScanContainerFromContext` 扫描镜像/容器，返回组件包列表。
- 定制：`sca.analyzers` / `sca.customAnalyzer` 定制分析器，`sca.scanMode` / `sca.concurrent` 控制扫描方式与并发，`sca.NewAnalyzerResult` 构造自定义包结果。

与相邻库的关系：`sca` 识别出的组件与版本常交给 `cve`/`cwe` 关联已知漏洞，与 `git`（仓库）、`filesys`（文件系统）、`diff`（版本比对）配合用于供应链审计。

> 共 12 个函数、23 个实例

## 实例

|实例名|类型|说明|
|:--|:--|:--|
| ANALYZER_TYPE_APK | `analyzer.TypAnalyzer` | &#34;apk-pkg&#34; |
| ANALYZER_TYPE_CLANG_CONAN | `analyzer.TypAnalyzer` | &#34;conan-lang&#34; |
| ANALYZER_TYPE_DPKG | `analyzer.TypAnalyzer` | &#34;dpkg-pkg&#34; |
| ANALYZER_TYPE_GO_BINARY | `analyzer.TypAnalyzer` | &#34;go-binary-lang&#34; |
| ANALYZER_TYPE_GO_MOD | `analyzer.TypAnalyzer` | &#34;go-mod-lang&#34; |
| ANALYZER_TYPE_JAVA_GRADLE | `analyzer.TypAnalyzer` | &#34;gradle-lang&#34; |
| ANALYZER_TYPE_JAVA_JAR | `analyzer.TypAnalyzer` | &#34;jar-lang&#34; |
| ANALYZER_TYPE_JAVA_POM | `analyzer.TypAnalyzer` | &#34;pom-lang&#34; |
| ANALYZER_TYPE_NODE_NPM | `analyzer.TypAnalyzer` | &#34;npm-lang&#34; |
| ANALYZER_TYPE_NODE_PNPM | `analyzer.TypAnalyzer` | &#34;npmp-lang&#34; |
| ANALYZER_TYPE_NODE_YARN | `analyzer.TypAnalyzer` | &#34;yarm-lang&#34; |
| ANALYZER_TYPE_PHP_COMPOSER | `analyzer.TypAnalyzer` | &#34;composer-lang&#34; |
| ANALYZER_TYPE_PYTHON_PACKAGING | `analyzer.TypAnalyzer` | &#34;python-packaging-lang&#34; |
| ANALYZER_TYPE_PYTHON_PIP | `analyzer.TypAnalyzer` | &#34;python-pip-lang&#34; |
| ANALYZER_TYPE_PYTHON_PIPENV | `analyzer.TypAnalyzer` | &#34;python-pipenv-lang&#34; |
| ANALYZER_TYPE_PYTHON_POETRY | `analyzer.TypAnalyzer` | &#34;python-poetry-lang&#34; |
| ANALYZER_TYPE_RPM | `analyzer.TypAnalyzer` | &#34;rpm-pkg&#34; |
| ANALYZER_TYPE_RUBY_BUNDLER | `analyzer.TypAnalyzer` | &#34;ruby-bundler-lang&#34; |
| ANALYZER_TYPE_RUBY_GEMSPEC | `analyzer.TypAnalyzer` | &#34;ruby-gemspec-lang&#34; |
| ANALYZER_TYPE_RUST_CARGO | `analyzer.TypAnalyzer` | &#34;cargo-lang&#34; |
| MODE_ALL | `analyzer.ScanMode` | 0 |
| MODE_LANGUAGE | `int` | 4 |
| MODE_PKG | `int` | 2 |

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [sca.NewAnalyzerResult](#newanalyzerresult) | `name string, version string` | `*CustomPackage` | 创建一个自定义分析结果(软件包)，用于在自定义 SCA 分析器中返回识别到的组件 |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [sca.ScanContainerFromContext](#scancontainerfromcontext) | `containerID string, opts ...ScanOption` | `[]*dxtypes.Package, error` | ScanDockerContainerFromContext 通过 Docker API 导出指定容器(包括其挂载卷)，识别其中的软件成分(SCA) |
| [sca.ScanFilesystem](#scanfilesystem) | `p fi.FileSystem, opts ...ScanOption` | `[]*dxtypes.Package, error` | 扫描给定的文件系统接口对象，识别其中的软件成分(SCA)，返回检测到的软件包列表 |
| [sca.ScanGitRepo](#scangitrepo) | `repoDir string, opts ...ScanOption` | `[]*dxtypes.Package, error` | 遍历本地 Git 仓库的全部提交历史，识别各历史版本中的软件成分(SCA) |
| [sca.ScanImageFromContext](#scanimagefromcontext) | `imageID string, opts ...ScanOption` | `[]*dxtypes.Package, error` | ScanDockerImageFromContext 通过 Docker API 拉取/导出指定镜像，识别其中的软件成分(SCA) |
| [sca.ScanImageFromFile](#scanimagefromfile) | `path string, opts ...ScanOption` | `[]*dxtypes.Package, error` | ScanDockerImageFromFile 扫描本地保存的 Docker 镜像 tar 文件，识别其中的软件成分(SCA) |
| [sca.ScanLocalFilesystem](#scanlocalfilesystem) | `p string, opts ...ScanOption` | `[]*dxtypes.Package, error` | 扫描本地文件系统目录，识别其中的软件成分(SCA)，返回检测到的软件包列表 |

## 函数详情

### NewAnalyzerResult {#newanalyzerresult}

```go
NewAnalyzerResult(name string, version string) *CustomPackage
```

创建一个自定义分析结果(软件包)，用于在自定义 SCA 分析器中返回识别到的组件

在 yak 中通过 sca.NewAnalyzerResult 调用

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 软件包名称 |
| version | `string` | 软件包版本号 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*CustomPackage` | 包含名称与版本的自定义软件包对象 |

**示例**

``````````````yak
pkg = sca.NewAnalyzerResult("openssl", "1.1.1w")
println(pkg.Name)      // OUT: openssl
println(pkg.Version)   // OUT: 1.1.1w
assert pkg.Name == "openssl", "package name should be set"
assert pkg.Version == "1.1.1w", "package version should be set"
``````````````

---

## 可变参数函数详情

### ScanContainerFromContext {#scancontainerfromcontext}

```go
ScanContainerFromContext(containerID string, opts ...ScanOption) (pkgs []*dxtypes.Package, err error)
```

ScanDockerContainerFromContext 通过 Docker API 导出指定容器(包括其挂载卷)，识别其中的软件成分(SCA)

在 yak 中通过 sca.ScanContainerFromContext 调用，依赖本地或远程 Docker 环境

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| containerID | `string` | 目标容器 ID 或名称 |

**可选参数**

可作为可变参数 `opts ...ScanOption` 传入选项；共 5 个可用选项，详见 [ScanOption 选项列表](#option-scanoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| pkgs | `[]*dxtypes.Package` | 检测到的软件包列表 |
| err | `error` | 错误信息，连接 Docker 或扫描失败时非 nil |

**示例**

``````````````yak
// 该示例为示意性用法：依赖 Docker 环境，扫描运行中的容器
pkgs = sca.ScanContainerFromContext("my-container", sca.endpoint("unix:///var/run/docker.sock"))~
println("packages:", len(pkgs))
``````````````

---

### ScanFilesystem {#scanfilesystem}

```go
ScanFilesystem(p fi.FileSystem, opts ...ScanOption) ([]*dxtypes.Package, error)
```

扫描给定的文件系统接口对象，识别其中的软件成分(SCA)，返回检测到的软件包列表

在 yak 中通过 sca.ScanFilesystem 调用，可配合 filesys 包构造的各类文件系统使用

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| p | `fi.FileSystem` | 实现 FileSystem 接口的文件系统对象(如 filesys.NewLocalFs() 等) |

**可选参数**

可作为可变参数 `opts ...ScanOption` 传入选项；共 5 个可用选项，详见 [ScanOption 选项列表](#option-scanoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*dxtypes.Package` | 检测到的软件包列表 |
| r2 | `error` | 错误信息，输入文件系统为空或扫描失败时非 nil |

**示例**

``````````````yak
// 该示例为示意性用法：扫描任意文件系统接口对象
fs = filesys.NewLocalFs()
pkgs = sca.ScanFilesystem(fs)~
println("packages:", len(pkgs))
``````````````

---

### ScanGitRepo {#scangitrepo}

```go
ScanGitRepo(repoDir string, opts ...ScanOption) ([]*dxtypes.Package, error)
```

遍历本地 Git 仓库的全部提交历史，识别各历史版本中的软件成分(SCA)

在 yak 中通过 sca.ScanGitRepo 调用

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| repoDir | `string` | 本地 Git 仓库目录路径 |

**可选参数**

可作为可变参数 `opts ...ScanOption` 传入选项；共 5 个可用选项，详见 [ScanOption 选项列表](#option-scanoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*dxtypes.Package` | 检测到的软件包列表 |
| r2 | `error` | 错误信息，扫描失败时非 nil |

**示例**

``````````````yak
// 该示例为示意性用法：扫描本地 Git 仓库历史中的软件成分
pkgs = sca.ScanGitRepo("/path/to/repo")~
println("packages:", len(pkgs))
``````````````

---

### ScanImageFromContext {#scanimagefromcontext}

```go
ScanImageFromContext(imageID string, opts ...ScanOption) ([]*dxtypes.Package, error)
```

ScanDockerImageFromContext 通过 Docker API 拉取/导出指定镜像，识别其中的软件成分(SCA)

在 yak 中通过 sca.ScanImageFromContext 调用，依赖本地或远程 Docker 环境

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| imageID | `string` | 目标镜像 ID 或名称 |

**可选参数**

可作为可变参数 `opts ...ScanOption` 传入选项；共 5 个可用选项，详见 [ScanOption 选项列表](#option-scanoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*dxtypes.Package` | 检测到的软件包列表 |
| r2 | `error` | 错误信息，连接 Docker 或扫描失败时非 nil |

**示例**

``````````````yak
// 该示例为示意性用法：依赖 Docker 环境，扫描镜像
pkgs = sca.ScanImageFromContext("nginx:latest")~
println("packages:", len(pkgs))
``````````````

---

### ScanImageFromFile {#scanimagefromfile}

```go
ScanImageFromFile(path string, opts ...ScanOption) ([]*dxtypes.Package, error)
```

ScanDockerImageFromFile 扫描本地保存的 Docker 镜像 tar 文件，识别其中的软件成分(SCA)

在 yak 中通过 sca.ScanImageFromFile 调用，无需连接 Docker 守护进程

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| path | `string` | 本地镜像 tar 文件路径(通常由 docker save 导出) |

**可选参数**

可作为可变参数 `opts ...ScanOption` 传入选项；共 5 个可用选项，详见 [ScanOption 选项列表](#option-scanoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*dxtypes.Package` | 检测到的软件包列表 |
| r2 | `error` | 错误信息，文件打开或扫描失败时非 nil |

**示例**

``````````````yak
// 该示例为示意性用法：扫描 docker save 导出的镜像文件
pkgs = sca.ScanImageFromFile("/path/to/image.tar")~
println("packages:", len(pkgs))
``````````````

---

### ScanLocalFilesystem {#scanlocalfilesystem}

```go
ScanLocalFilesystem(p string, opts ...ScanOption) ([]*dxtypes.Package, error)
```

扫描本地文件系统目录，识别其中的软件成分(SCA)，返回检测到的软件包列表

在 yak 中通过 sca.ScanLocalFilesystem 调用，会根据各类包管理器清单(如 package.json、go.mod 等)解析依赖

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| p | `string` | 待扫描的本地目录路径 |

**可选参数**

可作为可变参数 `opts ...ScanOption` 传入选项；共 5 个可用选项，详见 [ScanOption 选项列表](#option-scanoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*dxtypes.Package` | 检测到的软件包列表 |
| r2 | `error` | 错误信息，扫描失败时非 nil |

**示例**

``````````````yak
// 该示例为示意性用法：扫描本地项目目录的软件成分
pkgs = sca.ScanLocalFilesystem("/path/to/project")~

	for pkg = range pkgs {
	    println(pkg.Name, pkg.Version)
	}
``````````````

---

## 可变参数选项列表

以下按选项类型汇总全部可变参数选项(原先重复在各主函数下的选项表已收拢到此处)：

### 1. 类型：ScanOption {#option-scanoption}

涉及到的函数有：[sca.ScanContainerFromContext](#scancontainerfromcontext)、[sca.ScanFilesystem](#scanfilesystem)、[sca.ScanGitRepo](#scangitrepo)、[sca.ScanImageFromContext](#scanimagefromcontext)、[sca.ScanImageFromFile](#scanimagefromfile)、[sca.ScanLocalFilesystem](#scanlocalfilesystem)

|选项函数|参数|返回值|说明|
|:--|:--|:--|:--|
| `sca.analyzers` | `a ...analyzer.TypAnalyzer` | `ScanOption` | 指定本次扫描启用的分析器类型，仅运行所列分析器 |
| `sca.concurrent` | `n int` | `ScanOption` | 设置扫描时的并发 worker 数量 |
| `sca.customAnalyzer` | `matchFunc func(info analyzer.MatchInfo) int, analyzeFunc func(fi *analyzer.FileInfo, otherFi map[string]*analyzer.FileInfo) []*analyzer.CustomPackage` | `ScanOption` | 注册一个自定义 SCA 分析器，通过 matchFunc 决定是否处理某文件、analyzeFunc 产出软件包结果 |
| `sca.endpoint` | `endpoint string` | `ScanOption` | 设置扫描 Docker 镜像/容器时使用的 Docker Endpoint 地址 |
| `sca.scanMode` | `mode analyzer.ScanMode` | `ScanOption` | 设置扫描模式，控制识别全部成分、仅系统包或仅语言依赖 |

