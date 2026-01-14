# filemonitor

|实例名|实例描述|
|:------|:--------|
OP_CHMOD|(string) &#34;chmod&#34;|
OP_CHOWN|(string) &#34;chown&#34;|
OP_CREATE|(string) &#34;create&#34;|
OP_DELETE|(string) &#34;delete&#34;|
OP_WRITE|(string) &#34;write&#34;|

|函数名|函数描述/介绍|
|:------|:--------|
| [filemonitor.NewMonitor](#newmonitor) |NewMonitor 创建新的文件监控器 参数 config 支持的配置项：   - watch_paths: []string，必需，要监控的路径列表   - recursive: bool，可选，是否递归监控子目录，默认为 true   - include_patterns: []string，...|


## 函数定义
### NewMonitor

#### 详细描述
NewMonitor 创建新的文件监控器
参数 config 支持的配置项：
  - watch_paths: []string，必需，要监控的路径列表
  - recursive: bool，可选，是否递归监控子目录，默认为 true
  - include_patterns: []string，可选，包含的文件模式（支持 glob 和正则表达式）
  - exclude_patterns: []string，可选，排除的文件模式（支持 glob 和正则表达式）
  - monitor_ops: []string，可选，要监控的操作类型，可选值：OP_CREATE, OP_WRITE, OP_DELETE, OP_CHMOD, OP_CHOWN
  - max_file_size: int，可选，最大文件大小（字节），默认 10MB
  - poll_interval: float64，可选，轮询间隔（秒），默认 5 秒
返回文件监控器实例和错误信息


#### 定义

`NewMonitor(config map[string]any) (*FileMonitor, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| config | `map[string]any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*FileMonitor` |   |
| r2 | `error` |   |


