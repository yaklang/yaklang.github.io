# dictutil

|函数名|函数描述/介绍|
|:------|:--------|
| [dictutil.Mix](#mix) |Mix 对多个字典做笛卡尔积组合，按字典序流式产出每一种组合 参数: - raw: 一个或多个字典，每个可为字符串(按行拆分)、[]string、[]byte 或 [][]byte 返回值: - 输出组合结果的通道，每个元素是各字典各取一个值组成的 []string - 创建混合器失败时返回的错误|


## 函数定义
### Mix

#### 详细描述
Mix 对多个字典做笛卡尔积组合，按字典序流式产出每一种组合

参数:

  - raw: 一个或多个字典，每个可为字符串(按行拆分)、[]string、[]byte 或 [][]byte



返回值:

  - 输出组合结果的通道，每个元素是各字典各取一个值组成的 []string

  - 创建混合器失败时返回的错误




Example:

``````````````yak
// VARS: 把两个字典做笛卡尔积
ch = dictutil.Mix(["a", "b"], ["1", "2"])~
all = []

	for v = range ch {
	    all = append(all, v)
	}

// STDOUT: 打印第一种组合
println(all[0])   // OUT: [a 1]
// assert: 2x2 共四种组合
assert len(all) == 4, "mix of two 2-item dicts should produce 4 combinations"
``````````````


#### 定义

`Mix(raw ...any) (chan []string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `...any` | 一个或多个字典，每个可为字符串(按行拆分)、[]string、[]byte 或 [][]byte |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `chan []string` | 输出组合结果的通道，每个元素是各字典各取一个值组成的 []string |
| r2 | `error` | 创建混合器失败时返回的错误 |


