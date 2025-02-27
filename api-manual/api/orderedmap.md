# orderedmap

|函数名|函数描述/介绍|
|:------|:--------|
| [orderedmap.New](#new) |New 从零创建一个有序映射或从一个普通映射中创建一个有序映射，其的基本用法与普通映射相同，但内置方法可能不同  值得注意的是，如果传入的是一个普通映射，使用此函数转换为有序映射并不能保证原有的顺序  如果需要保留原有顺序，可以使用 `omap({&amp;#34;a&amp;#34;: 1, &amp;#34;b&amp;#34...|


## 函数定义
### New

#### 详细描述
New 从零创建一个有序映射或从一个普通映射中创建一个有序映射，其的基本用法与普通映射相同，但内置方法可能不同

值得注意的是，如果传入的是一个普通映射，使用此函数转换为有序映射并不能保证原有的顺序

如果需要保留原有顺序，可以使用 `omap({&#34;a&#34;: 1, &#34;b&#34;: 2})` 来直接生成一个有序映射

Example:
```
om = orderedmap.New()
om["a"] = 1
om.b = 2
println(om.a) // 1
println(om["b"]) // 2
om.Delete("a")
om.Delete("b")
println(om.a) // nil
for i in 100 { om[string(i)] = i }
for k, v in om {
println(k, v)
}
```


#### 定义

`New(maps ...any) *OrderedMap`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| maps | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*OrderedMap` |   |


