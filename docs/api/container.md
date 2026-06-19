# container

|函数名|函数描述/介绍|
|:------|:--------|
| [container.NewLinkedList](#newlinkedlist) |NewLinkedList 创建一个空的双向链表 返回值: - 创建出的双向链表对象，可使用 PushBack/PushFront/ToSlice 等方法|
| [container.NewSet](#newset) |NewSet 创建一个线程安全的集合(Set)，自动去重 参数: - vals: 初始放入集合的元素，可为零个或多个 返回值: - 创建出的集合对象|
| [container.NewUnsafeSet](#newunsafeset) |NewUnsafeSet 创建一个非线程安全的集合(Set)，性能更高但不可并发使用 参数: - vals: 初始放入集合的元素，可为零个或多个 返回值: - 创建出的非线程安全集合对象|


## 函数定义
### NewLinkedList

#### 详细描述
NewLinkedList 创建一个空的双向链表

返回值:

  - 创建出的双向链表对象，可使用 PushBack/PushFront/ToSlice 等方法




Example:

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


#### 定义

`NewLinkedList() *LinkedList`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*LinkedList` | 创建出的双向链表对象，可使用 PushBack/PushFront/ToSlice 等方法 |


### NewSet

#### 详细描述
NewSet 创建一个线程安全的集合(Set)，自动去重

参数:

  - vals: 初始放入集合的元素，可为零个或多个



返回值:

  - 创建出的集合对象




Example:

``````````````yak
// VARS: 创建集合，重复元素会被去重
s = container.NewSet("1", "2", "2")
// STDOUT: 打印去重后的元素个数
println(s.Len())   // OUT: 2
// assert: 包含判断正确
assert s.Contains("1") == true, "set should contain inserted element"
``````````````


#### 定义

`NewSet(vals ...any) (s *Set)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| vals | `...any` | 初始放入集合的元素，可为零个或多个 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| s | `*Set` | 创建出的集合对象 |


### NewUnsafeSet

#### 详细描述
NewUnsafeSet 创建一个非线程安全的集合(Set)，性能更高但不可并发使用

参数:

  - vals: 初始放入集合的元素，可为零个或多个



返回值:

  - 创建出的非线程安全集合对象




Example:

``````````````yak
// VARS: 创建非线程安全集合
s = container.NewUnsafeSet("1", "2")
// STDOUT: 打印元素个数
println(s.Len())   // OUT: 2
// assert: 包含判断正确
assert s.Contains("2") == true, "unsafe set should contain inserted element"
``````````````


#### 定义

`NewUnsafeSet(vals ...any) (s *Set)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| vals | `...any` | 初始放入集合的元素，可为零个或多个 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| s | `*Set` | 创建出的非线程安全集合对象 |


