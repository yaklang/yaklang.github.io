# sca {#library-sca}

`sca` 库分析调用方提供的文件系统材料，识别组件、版本声明与依赖证据。

- `sca.ScanLocalFilesystem` / `sca.ScanFilesystem` 扫描已经准备好的目录或虚拟文件系统。
- `sca.analyzers` / `sca.customAnalyzer` 选择内置分析器或注入受信任回调；`sca.scanMode` / `sca.concurrent` 配置扫描。
- SCA 不再获取 Docker 镜像、容器或 Git 历史。调用方自行准备材料；不同提交应分别扫描，分别保留快照标识。

识别结果可交给 `cve`/`cwe` 做关联。声明版本、校验记录与实际安装证据应分别解释。

> 共 7 个函数、27 个实例

## 实例

|实例名|类型|说明|
|:--|:--|:--|
| ANALYZER_TYPE_APK | `analyzer.TypAnalyzer` | &#34;apk-pkg&#34; |
| ANALYZER_TYPE_BUN | `analyzer.TypAnalyzer` | &#34;bun-lang&#34; |
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
| ANALYZER_TYPE_NUGET | `analyzer.TypAnalyzer` | &#34;nuget-lang&#34; |
| ANALYZER_TYPE_PHP_COMPOSER | `analyzer.TypAnalyzer` | &#34;composer-lang&#34; |
| ANALYZER_TYPE_PYTHON_PACKAGING | `analyzer.TypAnalyzer` | &#34;python-packaging-lang&#34; |
| ANALYZER_TYPE_PYTHON_PIP | `analyzer.TypAnalyzer` | &#34;python-pip-lang&#34; |
| ANALYZER_TYPE_PYTHON_PIPENV | `analyzer.TypAnalyzer` | &#34;python-pipenv-lang&#34; |
| ANALYZER_TYPE_PYTHON_POETRY | `analyzer.TypAnalyzer` | &#34;python-poetry-lang&#34; |
| ANALYZER_TYPE_RPM | `analyzer.TypAnalyzer` | &#34;rpm-pkg&#34; |
| ANALYZER_TYPE_RUBY_BUNDLER | `analyzer.TypAnalyzer` | &#34;ruby-bundler-lang&#34; |
| ANALYZER_TYPE_RUBY_GEMSPEC | `analyzer.TypAnalyzer` | &#34;ruby-gemspec-lang&#34; |
| ANALYZER_TYPE_RUST_CARGO | `analyzer.TypAnalyzer` | &#34;cargo-lang&#34; |
| ANALYZER_TYPE_SWIFT | `analyzer.TypAnalyzer` | &#34;swift-lang&#34; |
| ANALYZER_TYPE_UV | `analyzer.TypAnalyzer` | &#34;python-uv-lang&#34; |
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
| [sca.ScanFilesystem](#scanfilesystem) | `p fs.FS, opts ...ScanOption` | `[]*dxtypes.Package, error` | 扫描给定的文件系统接口对象，识别其中的软件成分(SCA)，返回检测到的软件包列表 |
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

### ScanFilesystem {#scanfilesystem}

```go
ScanFilesystem(p fs.FS, opts ...ScanOption) ([]*dxtypes.Package, error)
```

扫描给定的文件系统接口对象，识别其中的软件成分(SCA)，返回检测到的软件包列表

在 yak 中通过 sca.ScanFilesystem 调用，可配合 filesys 包构造的各类文件系统使用

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| p | `fs.FS` | 实现 FileSystem 接口的文件系统对象(如 fsio.New(os.DirFS(&#34;.&#34;)) 等) |

**可选参数**

可作为可变参数 `opts ...ScanOption` 传入选项；共 4 个可用选项，详见 [ScanOption 选项列表](#option-scanoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `[]*dxtypes.Package` | 检测到的软件包列表 |
| r2 | `error` | 错误信息，输入文件系统为空或扫描失败时非 nil |

**示例**

``````````````yak
// 该示例为示意性用法：扫描任意文件系统接口对象
fs = fsio.New(os.DirFS("."))
pkgs = sca.ScanFilesystem(fs)~
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

可作为可变参数 `opts ...ScanOption` 传入选项；共 4 个可用选项，详见 [ScanOption 选项列表](#option-scanoption)。

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

涉及到的函数有：[sca.ScanFilesystem](#scanfilesystem)、[sca.ScanLocalFilesystem](#scanlocalfilesystem)

|选项函数|参数|返回值|说明|
|:--|:--|:--|:--|
| `sca.analyzers` | `a ...analyzer.TypAnalyzer` | `ScanOption` | 指定本次扫描启用的分析器类型，仅运行所列分析器 |
| `sca.concurrent` | `n int` | `ScanOption` | 设置扫描时的并发 worker 数量 |
| `sca.customAnalyzer` | `matchFunc func(info analyzer.MatchInfo) int, analyzeFunc func(fi *analyzer.FileInfo, otherFi map[string]*analyzer.FileInfo) []*analyzer.CustomPackage` | `ScanOption` | 注册一个自定义 SCA 分析器，通过 matchFunc 决定是否处理某文件、analyzeFunc 产出软件包结果 |
| `sca.scanMode` | `mode analyzer.ScanMode` | `ScanOption` | 设置扫描模式，控制识别全部成分、仅系统包或仅语言依赖 |

