# sca

|实例名|实例描述|
|:------|:--------|
MODE_LANGUAGE|(int) 4|
ANALYZER_TYPE_JAVA_GRADLE|(analyzer.TypAnalyzer) "gradle-lang"|
ANALYZER_TYPE_JAVA_JAR|(analyzer.TypAnalyzer) "jar-lang"|
ANALYZER_TYPE_PYTHON_PIPENV|(analyzer.TypAnalyzer) "python-pipenv-lang"|
MODE_PKG|(int) 2|
ANALYZER_TYPE_NODE_YARN|(analyzer.TypAnalyzer) "yarm-lang"|
MODE_ALL|(analyzer.ScanMode) 0|
ANALYZER_TYPE_PYTHON_PACKAGING|(analyzer.TypAnalyzer) "python-packaging-lang"|
ANALYZER_TYPE_PYTHON_POETRY|(analyzer.TypAnalyzer) "python-poetry-lang"|
ANALYZER_TYPE_RPM|(analyzer.TypAnalyzer) "rpm-pkg"|
ANALYZER_TYPE_NODE_PNPM|(analyzer.TypAnalyzer) "npmp-lang"|
ANALYZER_TYPE_RUBY_GEMSPEC|(analyzer.TypAnalyzer) "ruby-gemspec-lang"|
ANALYZER_TYPE_GO_BINARY|(analyzer.TypAnalyzer) "go-binary-lang"|
ANALYZER_TYPE_PHP_COMPOSER|(analyzer.TypAnalyzer) "composer-lang"|
ANALYZER_TYPE_PYTHON_PIP|(analyzer.TypAnalyzer) "python-pip-lang"|
ANALYZER_TYPE_APK|(analyzer.TypAnalyzer) "apk-pkg"|
ANALYZER_TYPE_RUBY_BUNDLER|(analyzer.TypAnalyzer) "ruby-bundler-lang"|
ANALYZER_TYPE_CLANG_CONAN|(analyzer.TypAnalyzer) "conan-lang"|
ANALYZER_TYPE_RUST_CARGO|(analyzer.TypAnalyzer) "cargo-lang"|
ANALYZER_TYPE_NODE_NPM|(analyzer.TypAnalyzer) "npm-lang"|
ANALYZER_TYPE_JAVA_POM|(analyzer.TypAnalyzer) "pom-lang"|
ANALYZER_TYPE_GO_MOD|(analyzer.TypAnalyzer) "go-mod-lang"|
ANALYZER_TYPE_DPKG|(analyzer.TypAnalyzer) "dpkg-pkg"|

|函数名|函数描述/介绍|
|:------|:--------|
| [sca.ScanContainerFromContext](#scancontainerfromcontext) ||
| [sca.ScanFilesystem](#scanfilesystem) ||
| [sca.ScanGitRepo](#scangitrepo) ||
| [sca.ScanImageFromContext](#scanimagefromcontext) ||
| [sca.ScanImageFromFile](#scanimagefromfile) ||
| [sca.analyzers](#analyzers) ||
| [sca.concurrent](#concurrent) ||
| [sca.endpoint](#endpoint) ||
| [sca.scanMode](#scanmode) ||


## 函数定义
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

`ScanFilesystem(p string, opts ...ScanOption) ([]*dxtypes.Package, error)`

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


