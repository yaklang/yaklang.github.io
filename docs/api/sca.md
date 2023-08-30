# sca


|成员函数|函数描述/介绍|
|:------|:--------|
 | [sca.ScanContainerFromContext](#scascancontainerfromcontext) |  |
 | [sca.ScanImageFromContext](#scascanimagefromcontext) |  |
 | [sca.ScanImageFromFile](#scascanimagefromfile) |  |
 | [sca.analyzers](#scaanalyzers) |  |
 | [sca.concurrent](#scaconcurrent) |  |
 | [sca.endpoint](#scaendpoint) |  |
 | [sca.scanMode](#scascanmode) |  |




## 变量定义

|变量调用名|变量类型|变量解释/帮助信息|
|:-----------|:---------- |:-----------|
|`sca.ALL_MODE`|`analyzer.ScanMode`| //|
|`sca.APK_ALALYZER`|`analyzer.TypAnalyzer`| //|
|`sca.CLANG_CONAN_ANALYZER`|`analyzer.TypAnalyzer`| //|
|`sca.DPKG_ALALYZER`|`analyzer.TypAnalyzer`| //|
|`sca.GO_BINARY_ANALYZER`|`analyzer.TypAnalyzer`| //|
|`sca.GO_MOD_ANALYZER`|`analyzer.TypAnalyzer`| //|
|`sca.JAVA_GRADLE_ANALYZER`|`analyzer.TypAnalyzer`| //|
|`sca.JAVA_JAR_ANALYZER`|`analyzer.TypAnalyzer`| //|
|`sca.JAVA_POM_ANALYZER`|`analyzer.TypAnalyzer`| //|
|`sca.LANGUAGE_MODE`|`int`| //|
|`sca.NODE_NPM_ANALYZER`|`analyzer.TypAnalyzer`| //|
|`sca.NODE_PNPM_ANALYZER`|`analyzer.TypAnalyzer`| //|
|`sca.NODE_YARN_ANALYZER`|`analyzer.TypAnalyzer`| //|
|`sca.PHP_COMPOSER_ANALYZER`|`analyzer.TypAnalyzer`| //|
|`sca.PKG_MODE`|`int`| //|
|`sca.PYTHON_PACKAGING_ANALYZER`|`analyzer.TypAnalyzer`| //|
|`sca.PYTHON_PIPENV_ANALYZER`|`analyzer.TypAnalyzer`| //|
|`sca.PYTHON_PIP_ANALYZER`|`analyzer.TypAnalyzer`| //|
|`sca.PYTHON_POETRY_ANALYZER`|`analyzer.TypAnalyzer`| //|
|`sca.RPM_ALALYZER`|`analyzer.TypAnalyzer`| //|
|`sca.RUBY_BUNDLER_ANALYZER`|`analyzer.TypAnalyzer`| //|
|`sca.RUBY_GEMSPEC_ANALYZER`|`analyzer.TypAnalyzer`| //|
|`sca.RUST_CARGO_ANALYZER`|`analyzer.TypAnalyzer`| //|





## 函数定义

### sca.ScanContainerFromContext



#### 详细描述



#### 定义：

`func sca.ScanContainerFromContext(v1: string, v2 ...sca.dockerContextOption) return (r0: []*dxtypes.Package, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...sca.dockerContextOption` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]*dxtypes.Package` |   |
| r1 | `error` |   |


 
### sca.ScanImageFromContext



#### 详细描述



#### 定义：

`func sca.ScanImageFromContext(v1: string, v2 ...sca.dockerContextOption) return (r0: []*dxtypes.Package, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...sca.dockerContextOption` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]*dxtypes.Package` |   |
| r1 | `error` |   |


 
### sca.ScanImageFromFile



#### 详细描述



#### 定义：

`func sca.ScanImageFromFile(v1: string, v2 ...sca.dockerContextOption) return (r0: []*dxtypes.Package, r1: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...sca.dockerContextOption` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `[]*dxtypes.Package` |   |
| r1 | `error` |   |


 
### sca.analyzers



#### 详细描述



#### 定义：

`func sca.analyzers(v1 ...analyzer.TypAnalyzer) return (r0: func dockerContextOption(v1: *sca.dockerContextConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `...analyzer.TypAnalyzer` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func dockerContextOption(v1: *sca.dockerContextConfig) ` |   |


 
### sca.concurrent



#### 详细描述



#### 定义：

`func sca.concurrent(v1: int) return (r0: func dockerContextOption(v1: *sca.dockerContextConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func dockerContextOption(v1: *sca.dockerContextConfig) ` |   |


 
### sca.endpoint



#### 详细描述



#### 定义：

`func sca.endpoint(v1: string) return (r0: func dockerContextOption(v1: *sca.dockerContextConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func dockerContextOption(v1: *sca.dockerContextConfig) ` |   |


 
### sca.scanMode



#### 详细描述



#### 定义：

`func sca.scanMode(v1: analyzer.ScanMode) return (r0: func dockerContextOption(v1: *sca.dockerContextConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `analyzer.ScanMode` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func dockerContextOption(v1: *sca.dockerContextConfig) ` |   |


 


