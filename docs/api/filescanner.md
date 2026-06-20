# filescanner

|函数名|函数描述/介绍|
|:------|:--------|
| [filescanner.NewScanner](#newscanner) |fileScannerNewScanner 根据配置创建文件扫描器（导出名为 filescanner.NewScanner） 扫描器可对单个文件或整个目录进行扫描，计算哈希、识别 MIME 类型并按签名匹配风险 参数: - config: 配置字典，常用键包括 enable_risk(是否产出风险)...|


## 函数定义
### NewScanner

#### 详细描述
fileScannerNewScanner 根据配置创建文件扫描器（导出名为 filescanner.NewScanner）

扫描器可对单个文件或整个目录进行扫描，计算哈希、识别 MIME 类型并按签名匹配风险



参数:

  - config: 配置字典，常用键包括 enable_risk(是否产出风险)、recursive(是否递归)、

    max_file_size(最大文件字节)、include_patterns/exclude_patterns(文件名通配)、custom_signatures(自定义签名)



返回值:

  - 文件扫描器对象，可调用 ScanFile / ScanDir 进行扫描

  - 错误信息（配置非法时返回）




Example:

``````````````yak
dir = os.TempDir()
f = file.Join(dir, "fs_scan_demo.txt")
file.Save(f, "hello scanner")~
scanner = filescanner.NewScanner({"enable_risk": false})~
result = scanner.ScanFile(f)~
println(result.Name)   // OUT: fs_scan_demo.txt
assert result.Name == "fs_scan_demo.txt", "scan result should report the file name"
assert result.Md5 == codec.Md5("hello scanner"), "scan result md5 should match file content"
``````````````


#### 定义

`NewScanner(config map[string]any) (*FileScanner, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| config | `map[string]any` | 配置字典，常用键包括 enable_risk(是否产出风险)、recursive(是否递归)、 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*FileScanner` | 文件扫描器对象，可调用 ScanFile / ScanDir 进行扫描 |
| r2 | `error` | 错误信息（配置非法时返回） |


