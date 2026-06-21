# container {#library-container}

`container` 库提供常用数据结构容器，补充内置 `list`/`map` 之外的集合类型，用于需要去重、链表操作的算法场景。

典型使用场景：

- 集合：`container.NewSet`（线程安全集合）、`container.NewUnsafeSet`（非线程安全、更快）用于元素去重与集合运算。
- 链表：`container.NewLinkedList` 创建双向链表，适合频繁头尾插入/删除的场景。

与相邻库的关系：`container` 是纯数据结构工具，无副作用，可在任意脚本中替代手写去重/链表逻辑，常与 `x`（funk 工具）等数据处理库配合。

> 共 3 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [container.NewLinkedList](#newlinkedlist) | - | `*LinkedList` | 创建一个空的双向链表 |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [container.NewSet](#newset) | `vals ...any` | `*Set` | 创建一个线程安全的集合(Set)，自动去重 |
| [container.NewUnsafeSet](#newunsafeset) | `vals ...any` | `*Set` | 创建一个非线程安全的集合(Set)，性能更高但不可并发使用 |

## 函数详情

### NewLinkedList {#newlinkedlist}

```go
NewLinkedList() *LinkedList
```

创建一个空的双向链表

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*LinkedList` | 创建出的双向链表对象，可使用 PushBack/PushFront/ToSlice 等方法 |

**示例**

``````````````yak
// VARS: 创建链表并依次尾插元素
l = container.NewLinkedList()
l.PushBack("a")
l.PushBack("b")
// STDOUT: 转为切片后按插入顺序排列
println(l.ToSlice())   // OUT: [a b]
// assert: 长度为 2
assert l.Len() == 2, "linked list should hold two elements"
``````````````

---

## 可变参数函数详情

### NewSet {#newset}

```go
NewSet(vals ...any) (s *Set)
```

创建一个线程安全的集合(Set)，自动去重

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| vals | `...any` | 初始放入集合的元素，可为零个或多个 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| s | `*Set` | 创建出的集合对象 |

**示例**

``````````````yak
// VARS: 创建集合，重复元素会被去重
s = container.NewSet("1", "2", "2")
// STDOUT: 打印去重后的元素个数
println(s.Len())   // OUT: 2
// assert: 包含判断正确
assert s.Contains("1") == true, "set should contain inserted element"
``````````````

---

### NewUnsafeSet {#newunsafeset}

```go
NewUnsafeSet(vals ...any) (s *Set)
```

创建一个非线程安全的集合(Set)，性能更高但不可并发使用

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| vals | `...any` | 初始放入集合的元素，可为零个或多个 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| s | `*Set` | 创建出的非线程安全集合对象 |

**示例**

``````````````yak
// VARS: 创建非线程安全集合
s = container.NewUnsafeSet("1", "2")
// STDOUT: 打印元素个数
println(s.Len())   // OUT: 2
// assert: 包含判断正确
assert s.Contains("2") == true, "unsafe set should contain inserted element"
``````````````

---

