# sync

|函数名|函数描述/介绍|
|:------|:--------|
| [sync.NewCond](#newcond) |NewCond 创建一个 Cond 结构体引用，即一个条件变量，参考golang官方文档：https://golang.org/pkg/sync/#Cond  条件变量是一种用于协调多个并发任务之间的同步机制，它允许一个任务等待某个条件成立，同时允许其他任务在条件成立时通知等待的任务  |
| [sync.NewLock](#newlock) |NewLock 创建一个 Mutex 结构体引用，用于实现互斥锁，其帮助我们避免多个并发任务访问同一个资源时出现数据竞争问题  它实际是 NewMutex 的别名  |
| [sync.NewMap](#newmap) |NewMap 创建一个 Map 结构体引用，这个 Map 是并发安全的  |
| [sync.NewMutex](#newmutex) |NewMutex 创建一个 Mutex 结构体引用，用于实现互斥锁，其帮助我们避免多个并发任务访问同一个资源时出现数据竞争问题  |
| [sync.NewOnce](#newonce) |NewOnce 创建一个 Once 结构体引用，其帮助我们确保某个函数只会被执行一次  |
| [sync.NewPool](#newpool) |NewPool 创建一个 Pool 结构体引用，其帮助我们复用临时对象，减少内存分配的次数  |
| [sync.NewRWMutex](#newrwmutex) |NewRWMutex 创建一个 RWMutex 结构体引用，用于实现读写锁，其帮助我们避免多个并发任务访问同一个资源时出现数据竞争问题  |
| [sync.NewSizedWaitGroup](#newsizedwaitgroup) |NewSizedWaitGroup 创建一个 SizedWaitGroup 结构体引用，其帮助我们在处理多个并发任务时，等待所有任务完成后再进行下一步操作  SizedWaitGroup 与 WaitGroup 的区别在于 SizedWaitGroup 可以限制并发任务的数量  |
| [sync.NewWaitGroup](#newwaitgroup) |NewWaitGroup 创建一个 WaitGroup 结构体引用，其帮助我们在处理多个并发任务时，等待所有任务完成后再进行下一步操作  |


## 函数定义
### NewCond

#### 详细描述
NewCond 创建一个 Cond 结构体引用，即一个条件变量，参考golang官方文档：https://golang.org/pkg/sync/#Cond

条件变量是一种用于协调多个并发任务之间的同步机制，它允许一个任务等待某个条件成立，同时允许其他任务在条件成立时通知等待的任务

Example:
```
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
```


#### 定义

`NewCond() *sync.Cond`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*sync.Cond` |   |


### NewLock

#### 详细描述
NewLock 创建一个 Mutex 结构体引用，用于实现互斥锁，其帮助我们避免多个并发任务访问同一个资源时出现数据竞争问题

它实际是 NewMutex 的别名

Example:
```
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
```


#### 定义

`NewLock() *sync.Mutex`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*sync.Mutex` |   |


### NewMap

#### 详细描述
NewMap 创建一个 Map 结构体引用，这个 Map 是并发安全的

Example:
```
m = sync.NewMap()
go func {
for {
m.Store("key", "value2")
}
}
for {
m.Store("key", "value")
v, ok = m.Load("key")
if ok {
println(v)
}
}
```


#### 定义

`NewMap() *sync.Map`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*sync.Map` |   |


### NewMutex

#### 详细描述
NewMutex 创建一个 Mutex 结构体引用，用于实现互斥锁，其帮助我们避免多个并发任务访问同一个资源时出现数据竞争问题

Example:
```
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
```


#### 定义

`NewMutex() *sync.Mutex`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*sync.Mutex` |   |


### NewOnce

#### 详细描述
NewOnce 创建一个 Once 结构体引用，其帮助我们确保某个函数只会被执行一次

Example:
```
o = sync.NewOnce()
for i in 10 {
o.Do(func() { println("this message will only print once") })
}
```


#### 定义

`NewOnce() *sync.Once`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*sync.Once` |   |


### NewPool

#### 详细描述
NewPool 创建一个 Pool 结构体引用，其帮助我们复用临时对象，减少内存分配的次数

Example:
```
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
```


#### 定义

`NewPool(newFunc ...func() any) *sync.Pool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| newFunc | `...func() any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*sync.Pool` |   |


### NewRWMutex

#### 详细描述
NewRWMutex 创建一个 RWMutex 结构体引用，用于实现读写锁，其帮助我们避免多个并发任务访问同一个资源时出现数据竞争问题

Example:
```
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
```


#### 定义

`NewRWMutex() *sync.RWMutex`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*sync.RWMutex` |   |


### NewSizedWaitGroup

#### 详细描述
NewSizedWaitGroup 创建一个 SizedWaitGroup 结构体引用，其帮助我们在处理多个并发任务时，等待所有任务完成后再进行下一步操作

SizedWaitGroup 与 WaitGroup 的区别在于 SizedWaitGroup 可以限制并发任务的数量

Example:
```
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
```


#### 定义

`NewSizedWaitGroup(size int, ctxs ...context.Context) *utils.SizedWaitGroup`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| size | `int` |   |
| ctxs | `...context.Context` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*utils.SizedWaitGroup` |   |


### NewWaitGroup

#### 详细描述
NewWaitGroup 创建一个 WaitGroup 结构体引用，其帮助我们在处理多个并发任务时，等待所有任务完成后再进行下一步操作

Example:
```
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
```


#### 定义

`NewWaitGroup(ctxs ...context.Context) *WaitGroupProxy`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctxs | `...context.Context` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*WaitGroupProxy` |   |


