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
| [sca.NewAnalyzerResult](#newanalyzerresult) ||
| [sca.ScanContainerFromContext](#scancontainerfromcontext) ||
| [sca.ScanFilesystem](#scanfilesystem) ||
| [sca.ScanGitRepo](#scangitrepo) ||
| [sca.ScanImageFromContext](#scanimagefromcontext) ||
| [sca.ScanImageFromFile](#scanimagefromfile) ||
| [sca.ScanLocalFilesystem](#scanlocalfilesystem) ||
| [sca.analyzers](#analyzers) ||
| [sca.concurrent](#concurrent) ||
| [sca.customAnalyzer](#customanalyzer) ||
| [sca.endpoint](#endpoint) ||
| [sca.scanMode](#scanmode) ||


## 函数定义
### NewAnalyzerResult

#### 详细描述


#### 定义

`NewAnalyzerResult(name string, version string) *CustomPackage`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| version | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*CustomPackage` |   |


### ScanContainerFromContext

#### 详细描述


#### 定义

`ScanContainerFromContext(containerID string, opts ...ScanOption) (pkgs []*dxtypes.Package, err error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| containerID | `string` |   |
| opts | `...ScanOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| pkgs | `[]*dxtypes.Package` |   |
| err | `error` |   |


### ScanFilesystem

#### 详细描述


#### 定义

`ScanFilesystem(p fi.FileSystem, opts ...ScanOption) ([]*dxtypes.Package, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| p | `fi.FileSystem` |   |
| opts | `...ScanOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*dxtypes.Package` |   |
| r2 | `error` |   |


### ScanGitRepo

#### 详细描述


#### 定义

`ScanGitRepo(repoDir string, opts ...ScanOption) ([]*dxtypes.Package, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| repoDir | `string` |   |
| opts | `...ScanOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*dxtypes.Package` |   |
| r2 | `error` |   |


### ScanImageFromContext

#### 详细描述


#### 定义

`ScanImageFromContext(imageID string, opts ...ScanOption) ([]*dxtypes.Package, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| imageID | `string` |   |
| opts | `...ScanOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*dxtypes.Package` |   |
| r2 | `error` |   |


### ScanImageFromFile

#### 详细描述


#### 定义

`ScanImageFromFile(path string, opts ...ScanOption) ([]*dxtypes.Package, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` |   |
| opts | `...ScanOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*dxtypes.Package` |   |
| r2 | `error` |   |


### ScanLocalFilesystem

#### 详细描述


#### 定义

`ScanLocalFilesystem(p string, opts ...ScanOption) ([]*dxtypes.Package, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| p | `string` |   |
| opts | `...ScanOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]*dxtypes.Package` |   |
| r2 | `error` |   |


### analyzers

#### 详细描述


#### 定义

`analyzers(a ...analyzer.TypAnalyzer) ScanOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| a | `...analyzer.TypAnalyzer` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ScanOption` |   |


### concurrent

#### 详细描述


#### 定义

`concurrent(n int) ScanOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| n | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ScanOption` |   |


### customAnalyzer

#### 详细描述


#### 定义

`customAnalyzer(matchFunc func(info analyzer.MatchInfo) int, analyzeFunc func(fi *analyzer.FileInfo, otherFi map[string]*analyzer.FileInfo) []*analyzer.CustomPackage) ScanOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| matchFunc | `func(info analyzer.MatchInfo) int` |   |
| analyzeFunc | `func(fi *analyzer.FileInfo, otherFi map[string]*analyzer.FileInfo) []*analyzer.CustomPackage` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ScanOption` |   |


### endpoint

#### 详细描述


#### 定义

`endpoint(endpoint string) ScanOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| endpoint | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ScanOption` |   |


### scanMode

#### 详细描述


#### 定义

`scanMode(mode analyzer.ScanMode) ScanOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| mode | `analyzer.ScanMode` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ScanOption` |   |


