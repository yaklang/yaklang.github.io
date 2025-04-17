# container

|函数名|函数描述/介绍|
|:------|:--------|
| [container.NewLinkedList](#newlinkedlist) ||
| [container.NewSet](#newset) |NewSet creates a new set  |
| [container.NewUnsafeSet](#newunsafeset) |NewUnsafeSet creates a new set that is not thread-safe  |


## 函数定义
### NewLinkedList

#### 详细描述


#### 定义

`NewLinkedList() *LinkedList`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*LinkedList` |   |


### NewSet

#### 详细描述
NewSet creates a new set

Example:
```
s = container.NewSet("1", "2")
```


#### 定义

`NewSet(vals ...any) (s *Set)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| vals | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| s | `*Set` |   |


### NewUnsafeSet

#### 详细描述
NewUnsafeSet creates a new set that is not thread-safe

Example:
```
s = container.NewUnsafeSet("1", "2")
```


#### 定义

`NewUnsafeSet(vals ...any) (s *Set)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| vals | `...any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| s | `*Set` |   |


