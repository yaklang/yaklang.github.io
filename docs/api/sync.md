# sync {#library-sync}

`sync` 库是 Go 标准库 `sync` 的 yak 封装，提供并发原语：互斥锁、读写锁、等待组、once、条件变量、并发安全 map 与对象池，是编写并发脚本的基础设施。

典型使用场景：

- 锁：`sync.NewMutex` / `sync.NewLock` 互斥锁，`sync.NewRWMutex` 读写锁，`sync.NewCond` 条件变量。
- 协作：`sync.NewWaitGroup` 等待一组协程结束，`sync.NewSizedWaitGroup` 带并发上限的等待组（常用于控制扫描并发），`sync.NewOnce` 只执行一次。
- 容器：`sync.NewMap` 并发安全 map，`sync.NewPool` 对象池。

与相邻库的关系：`sync` 是并发基础库，常与 `context`（取消控制）配合，在批量扫描、并发请求等场景中控制并发度与同步。

> 共 9 个函数

## 函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [sync.NewCond](#newcond) | - | `*sync.Cond` | 创建一个 Cond 结构体引用，即一个条件变量，参考golang官方文档：https&#58;//golang.org/pkg/sync/#Cond |
| [sync.NewLock](#newlock) | - | `*sync.Mutex` | 创建一个 Mutex 结构体引用，用于实现互斥锁，其帮助我们避免多个并发任务访问同一个资源时出现数据竞争问题 |
| [sync.NewMap](#newmap) | - | `*sync.Map` | 创建一个 Map 结构体引用，这个 Map 是并发安全的 |
| [sync.NewMutex](#newmutex) | - | `*sync.Mutex` | 创建一个 Mutex 结构体引用，用于实现互斥锁，其帮助我们避免多个并发任务访问同一个资源时出现数据竞争问题 |
| [sync.NewOnce](#newonce) | - | `*sync.Once` | 创建一个 Once 结构体引用，其帮助我们确保某个函数只会被执行一次 |
| [sync.NewRWMutex](#newrwmutex) | - | `*sync.RWMutex` | 创建一个 RWMutex 结构体引用，用于实现读写锁，其帮助我们避免多个并发任务访问同一个资源时出现数据竞争问题 |

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [sync.NewPool](#newpool) | `newFunc ...func() any` | `*sync.Pool` | 创建一个 Pool 结构体引用，其帮助我们复用临时对象，减少内存分配的次数 |
| [sync.NewSizedWaitGroup](#newsizedwaitgroup) | `size int, ctxs ...context.Context` | `*utils.SizedWaitGroup` | 创建一个 SizedWaitGroup 结构体引用，其帮助我们在处理多个并发任务时，等待所有任务完成后再进行下一步操作 |
| [sync.NewWaitGroup](#newwaitgroup) | `ctxs ...context.Context` | `*WaitGroupProxy` | 创建一个 WaitGroup 结构体引用，其帮助我们在处理多个并发任务时，等待所有任务完成后再进行下一步操作 |

## 函数详情

### NewCond {#newcond}

```go
NewCond() *sync.Cond
```

创建一个 Cond 结构体引用，即一个条件变量，参考golang官方文档：https&#58;//golang.org/pkg/sync/#Cond

条件变量是一种用于协调多个并发任务之间的同步机制，它允许一个任务等待某个条件成立，同时允许其他任务在条件成立时通知等待的任务

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*sync.Cond` | 新建的条件变量引用 |

**示例**

``````````````yak
c = sync.NewCond()
done = false
func read(name) {
c.L.Lock()
for !done {
c.Wait()
}
println(name, "start reading")
c.L.Unlock()
}

func write(name) {
time.sleep(1)
println(name, "start writing")
c.L.Lock()
done = true
c.L.Unlock()
println(name, "wakes all")
c.Broadcast()
}

go read("reader1")
go read("reader2")
go read("reader3")
write("writer")
time.sleep(3)
``````````````

---

### NewLock {#newlock}

```go
NewLock() *sync.Mutex
```

创建一个 Mutex 结构体引用，用于实现互斥锁，其帮助我们避免多个并发任务访问同一个资源时出现数据竞争问题

它实际是 NewMutex 的别名

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*sync.Mutex` | 新建的互斥锁引用 |

**示例**

``````````````yak
m = sync.NewMutex()
newMap = make(map[string]string)
go func{
for {
m.Lock()         // 请求锁
defer m.Unlock() // 释放锁
newMap["key"] = "value" // 防止多个并发任务同时修改 newMap
}
}
for {
println(newMap["key"])
}
``````````````

---

### NewMap {#newmap}

```go
NewMap() *sync.Map
```

创建一个 Map 结构体引用，这个 Map 是并发安全的

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*sync.Map` | 新建的并发安全 Map 引用 |

**示例**

``````````````yak
// VARS: 并发安全 map 的基本存取
m = sync.NewMap()
m.Store("key", "value")
v, ok = m.Load("key")
// STDOUT: 打印读取到的值
println(v)   // OUT: value
// assert: 键存在且值正确
assert ok == true, "stored key should be loadable"
``````````````

---

### NewMutex {#newmutex}

```go
NewMutex() *sync.Mutex
```

创建一个 Mutex 结构体引用，用于实现互斥锁，其帮助我们避免多个并发任务访问同一个资源时出现数据竞争问题

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*sync.Mutex` | 新建的互斥锁引用 |

**示例**

``````````````yak
m = sync.NewMutex()
newMap = make(map[string]string)
go func{
for {
m.Lock()         // 请求锁
defer m.Unlock() // 释放锁
newMap["key"] = "value" // 防止多个并发任务同时修改 newMap
}
}
for {
println(newMap["key"])
}
``````````````

---

### NewOnce {#newonce}

```go
NewOnce() *sync.Once
```

创建一个 Once 结构体引用，其帮助我们确保某个函数只会被执行一次

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*sync.Once` | 新建的 Once 引用 |

**示例**

``````````````yak
o = sync.NewOnce()
for i in 10 {
o.Do(func() { println("this message will only print once") })
}
``````````````

---

### NewRWMutex {#newrwmutex}

```go
NewRWMutex() *sync.RWMutex
```

创建一个 RWMutex 结构体引用，用于实现读写锁，其帮助我们避免多个并发任务访问同一个资源时出现数据竞争问题

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*sync.RWMutex` | 新建的读写锁引用 |

**示例**

``````````````yak
m = sync.NewRWMutex()
newMap = make(map[string]string)
go func{
for {
m.Lock()         // 请求写锁
defer m.Unlock() // 释放写锁
newMap["key"] = "value" // 防止多个并发任务同时修改 newMap
}
}
for {
m.RLock()         // 请求读锁
defer m.RUnlock() // 释放读锁
println(newMap["key"])
}
``````````````

---

## 可变参数函数详情

### NewPool {#newpool}

```go
NewPool(newFunc ...func() any) *sync.Pool
```

创建一个 Pool 结构体引用，其帮助我们复用临时对象，减少内存分配的次数

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| newFunc | `...func() any` | 可选的对象构造函数，当 Pool 为空时用于创建新对象 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*sync.Pool` | 新建的对象池引用 |

**示例**

``````````````yak
p = sync.NewPool(func() {
return make(map[string]string)
})
m = p.Get() // 从 Pool 中获取，如果 Pool 中没有，则会调用传入的第一个参数函数，返回一个新的 map[string]string
m["1"] = "2"
println(m) // {"1": "2"}
// 将 m 放回 Pool 中
p.Put(m)
m2 = p.Get() // 从 Pool 中获取，实际上我们获取到的是刚 Put 进去的 m
println(m2) // {"1": "2"}
``````````````

---

### NewSizedWaitGroup {#newsizedwaitgroup}

```go
NewSizedWaitGroup(size int, ctxs ...context.Context) *utils.SizedWaitGroup
```

创建一个 SizedWaitGroup 结构体引用，其帮助我们在处理多个并发任务时，等待所有任务完成后再进行下一步操作

SizedWaitGroup 与 WaitGroup 的区别在于 SizedWaitGroup 可以限制并发任务的数量

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| size | `int` | 允许的最大并发任务数 |

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| ctxs | `...context.Context` | 可选的 context，任一 context 结束会终止等待 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*utils.SizedWaitGroup` | 新建的 SizedWaitGroup 引用 |

**示例**

``````````````yak
wg = sync.NewSizedWaitGroup(5) // 限制大小为5
for i in 10 {
wg.Add() // 任务数量超过5时，会阻塞，直到有任务完成
go func(i) {
defer wg.Done()
time.Sleep(i)
printf("任务%d 完成\n", i)
}(i)
}
wg.Wait()
println("所有任务完成")
``````````````

---

### NewWaitGroup {#newwaitgroup}

```go
NewWaitGroup(ctxs ...context.Context) *WaitGroupProxy
```

创建一个 WaitGroup 结构体引用，其帮助我们在处理多个并发任务时，等待所有任务完成后再进行下一步操作

**可选参数**

|参数名|类型|说明|
|:--|:--|:--|
| ctxs | `...context.Context` | 可选的 context，任一 context 结束会把等待组计数清零 |

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `*WaitGroupProxy` | 新建的 WaitGroup 引用 |

**示例**

``````````````yak
wg = sync.NewWaitGroup()
for i in 5 {
wg.Add() // 增加一个任务
go func(i) {
defer wg.Done()
time.Sleep(i)
printf("任务%d 完成\n", i)
}(i)
}
wg.Wait()
println("所有任务完成")
``````````````

---

