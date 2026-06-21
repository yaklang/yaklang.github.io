# dictutil {#library-dictutil}

`dictutil` 库是字典处理小工具，用于把多组词表做笛卡尔积/混合，批量生成组合字典，常用于爆破、模糊测试的 Payload 生成。

典型使用场景：

- 混合生成：`dictutil.Mix(raw...)` 传入多组词表，返回一个 channel 流式产出所有组合（如用户名×密码、前缀×后缀）。

与相邻库的关系：`dictutil` 产出的字典常喂给 `brute`（爆破）、`fuzz`（变异测试）使用，是 Payload 生成阶段的轻量工具。

> 共 1 个函数

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [dictutil.Mix](#mix) | `raw ...any` | `chan []string, error` | 对多个字典做笛卡尔积组合，按字典序流式产出每一种组合 |

## 可变参数函数详情

### Mix {#mix}

```go
Mix(raw ...any) (chan []string, error)
```

对多个字典做笛卡尔积组合，按字典序流式产出每一种组合

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| raw | `...any` | 一个或多个字典，每个可为字符串(按行拆分)、[]string、[]byte 或 [][]byte |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `chan []string` | 输出组合结果的通道，每个元素是各字典各取一个值组成的 []string |
| r2 | `error` | 创建混合器失败时返回的错误 |

**示例**

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

---

