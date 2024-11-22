# xml

|函数名|函数描述/介绍|
|:------|:--------|
| [xml.Escape](#escape) ||
| [xml.dumps](#dumps) ||
| [xml.escape](#escape) |WithHTMLEscape 设置是否转义 HTML 的选项，默认为 True，即转义 HTML  |
| [xml.loads](#loads) ||


## 函数定义
### Escape

#### 详细描述


#### 定义

`Escape(s []byte) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### dumps

#### 详细描述


#### 定义

`dumps(v any, opts ...EncoderOption) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v | `any` |   |
| opts | `...EncoderOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### escape

#### 详细描述
WithHTMLEscape 设置是否转义 HTML 的选项，默认为 True，即转义 HTML

Example:
```
m = {"a": "qwe&zxc"}
e := xml.dumps(m, xml.escape(false))
```


#### 定义

`escape(escape bool) EncoderOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| escape | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `EncoderOption` |   |


### loads

#### 详细描述


#### 定义

`loads(v any) map[string]any`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `map[string]any` |   |


