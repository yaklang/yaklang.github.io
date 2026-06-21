# filescanner {#library-filescanner}

`filescanner` 库提供按规则扫描文件/目录的能力，用于在大量文件中检出敏感信息、恶意特征或符合规则的内容，常用于代码仓库与主机的合规/威胁扫描。

典型使用场景：

- 创建扫描器：`filescanner.NewScanner(config)` 按配置（扫描路径、规则、并发等）创建扫描器并执行文件扫描。

与相邻库的关系：`filescanner` 偏批量文件规则匹配，与 `filemonitor`（实时监控）、`hids`（主机检测）、`file`/`filesys`（遍历读取）配合，用于"在文件里找东西"的场景。

> 共 1 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [filescanner.NewScanner](#newscanner) | `config map[string]any` | `*FileScanner, error` | 根据配置创建文件扫描器（导出名为 filescanner.NewScanner） |

## 函数详情

### NewScanner {#newscanner}

```go
NewScanner(config map[string]any) (*FileScanner, error)
```

根据配置创建文件扫描器（导出名为 filescanner.NewScanner）

扫描器可对单个文件或整个目录进行扫描，计算哈希、识别 MIME 类型并按签名匹配风险

**参数**

|参数名|类型|说明|
|:--|:--|:--|
| config | `map[string]any` | 配置字典，常用键包括 enable_risk(是否产出风险)、recursive(是否递归)、 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*FileScanner` | 文件扫描器对象，可调用 ScanFile / ScanDir 进行扫描 |
| r2 | `error` | 错误信息（配置非法时返回） |

**示例**

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

---

