---
sidebar_position: 5
---

# YAK 中编写"多线程/多并发"应用

在上一节中，我们遗留了一个问题：

> 如何把我们从 shodan 中的结果使用并发的手段快速验证？（如何使用并发快速发送 HTTP 请求？）

当然，我们 YAK 作为 Golang 语言的反射脚本语言，自然支持了 Golang 中最引以为傲的 Go 关键字特性了。

## 扫描器常见并发范式

### 最基础的并发：`go func(){/* do */}()`

众所周知，我们可以很简单的启动一个 go 的 `goroutine` 就像真的在写 Golang 一样

```go
go fn() {
    log.info("goroutine is started")
    sleep(1)
    log.info("I am in Goroutnie!")
}()

// 设置默认日志级别为 info
loglevel(`info`)

sleep(2)
```

上述执行其实非常好理解，我们启动了一个 Goroutine，先打印一条日志，再 Sleep 1 秒，再打印一条日志结束。

执行结果为

```go
[INFO] 2021-06-29 23:56:34 +0800 [a1] goroutine is started
[INFO] 2021-06-29 23:56:35 +0800 [a1] I am in Goroutnie!
```

### 并发范式：多任务控制（`WaitGroup`模式）

```go
loglevel(`info`)

wg := sync.NewWaitGroup()

def submitTask(value) {
    wg.Add(1)
    go fn{
        defer wg.Done()
        log.info("caller: %v", value)
        sleep(1)
        log.info("task is finished... caller: %v", value)
    }
}

for index, element := range ["cha1", "a2", "d3"] {
    submitTask(element)
}

log.info("start to wait all tasks finishing...")
wg.Wait()
log.info("all tasks finished")
```

我们执行了上述代码，结果非常简单，大家也很容易猜测到

```go
[INFO] 2021-06-30 11:30:18 +0800 [a] start to wait all tasks finishing...
[INFO] 2021-06-30 11:30:18 +0800 [a] caller: cha1
[INFO] 2021-06-30 11:30:18 +0800 [a] caller: a2
[INFO] 2021-06-30 11:30:18 +0800 [a] caller: d3
[INFO] 2021-06-30 11:30:19 +0800 [a] task is finished... caller: d3
[INFO] 2021-06-30 11:30:19 +0800 [a] task is finished... caller: a2
[INFO] 2021-06-30 11:30:19 +0800 [a] task is finished... caller: cha1
[INFO] 2021-06-30 11:30:19 +0800 [a] all tasks finished
```

我们创建了一个 `*sync.WaitGroup` 对象，这个对象作用是控制一组异步任务的执行，每一个任务执行之前应该 `.Add(1)` 去 `WaitGroup` 增加一个调用任务的计数， 当任务结束后，应该 `.Done()`
减去一个任务计数。最后 `WaitGroup` 通过 `.Wait()` 函数

:::danger 注意！这里有一个易错点

上述代码很容易做错的一个点是在 for 循环中直接使用 Go 关键字启动 Goroutine。例如可能有同学会把上述代码简化成

```go
loglevel(`info`)

wg := sync.NewWaitGroup()

for index, element := range ["cha1", "a2", "d3"] {
    wg.Add(1)
    value = element;
    go fn{
        defer wg.Done()
        log.info("caller: %v", value)
        sleep(1)
        log.info("task is finished... caller: %v", value)
    }
}

log.info("start to wait all tasks finishing...")
wg.Wait()
log.info("all tasks finished")
```

这种代码是非常具有迷惑性的，上述代码执行结果大概率是：

```go
[INFO] 2021-06-30 10:59:05 +0800 [a] start to wait all tasks finishing...
[INFO] 2021-06-30 10:59:05 +0800 [a] caller: d3
[INFO] 2021-06-30 10:59:05 +0800 [a] caller: d3
[INFO] 2021-06-30 10:59:05 +0800 [a] caller: d3
[INFO] 2021-06-30 10:59:06 +0800 [a] task is finished... caller: d3
[INFO] 2021-06-30 10:59:06 +0800 [a] task is finished... caller: d3
[INFO] 2021-06-30 10:59:06 +0800 [a] task is finished... caller: d3
[INFO] 2021-06-30 10:59:06 +0800 [a] all tasks finished
```

我们发现 d3 变成了唯一的 caller 并且被调用了 3 次，这和我们一开始的结果差别很大，这是为啥？

> go 关键字启动并不会同步绑定当前上下文的变量，而是真正执行的一瞬间才会绑定，然而执行 Goroutine 函数的时候，并不一定可以和 for 当前循环绑定到。可能获取启动值的时候，参数值已经不一样了

所以，为了解决这个问题，我们不推荐在 for 中直接启动 Goroutine，而应该给 Goroutine 新创建一个冲突域容器，最简单的处理方案其实就是 for 中可以同步执行一个函数，
在函数同步执行的时候执行的时候，将会创建一个新的冲突域，在这个域中启动 Goroutine 是安全的！

具体做法如下：

```go
func submitTask(param) {
    go func{
        println("save goroutine")
    }
}

for _, value := range [1, 2, 3] {
    submitTask(value)
}
```

观察上面代码，我们很容易就能解决上面提到的 BUG。

:::

:::caution 作为对比，在 Golang 中的处理方式

众所周知，在 Golang 中，我们在 for 循环中启动 goroutine 需要万分小心

```go
for _, value := range []string{"a1", "a2", "a3"} {
    go executeFunc(value)
}
```

这种方法是非常错误的，因为 go 来启动 goroutine 并不是即时启动的，可能等到 goroutine 启动的时候，value 已经不是原来的 value 了。

为了解决这个问题，Golang 中，我们可以采用在新的代码块重新声明变量以把变量绑定到 goroutine 的作用域中。

比如

```go
for _, value := range []string{"a1", "a2", "a3"} {
    value := value;
    go executeFunc(value)
}
```

可以解决这个问题

:::

### 并发范式：带最大并发量限制的多任务

在常用场景下，我们经常会遇到限制：

1. 机器的性能并不是无限的 
2. 网络带宽并不是无限的

所以我们往往需要限制一下执行任务的最大量。

在 Python 中，我们经常需要构建一个线程池，或者为了充分利用 CPU 性能，会使用 `processing` 中的 pool 来执行。

幸运的是，在 Golang 中，我们并不需要太担心线程/进程上下文切换的开销，我们可以使用 Goroutine 来进行异步任务执行，
并且也并不需要太担心上下文频繁切换带来的问题。毕竟一个 Goroutine 的开销大概在 4K 左右，对于整个程序来说，微不足道。

那么话说回来，我们如何限制最大并发呢？Yak 提供了一个非常好的工具类 `SizedWaitGroup`，看名字大家就能看得出来，这是一个带大小限制的 `WaitGroup`。

Golang 也有相关包的实现，其实非常简单

1. [https://github.com/remeh/sizedwaitgroup](https://github.com/remeh/sizedwaitgroup)

我们尝试将第二节中的内容修改一下，也许改造成本很低：

```go {3,6,15}
loglevel(`info`)

wg := sync.NewSizedWaitGroup(4)

def submitTask(value) {
    wg.Add()
    go fn{
        defer wg.Done()
        log.info("caller: %v", value)
        sleep(1)
        log.info("task is finished... caller: %v", value)
    }
}

for index := range make([]int, 10) {
    submitTask(index)
}

log.info("start to wait all tasks finishing...")
wg.Wait()
log.info("all tasks finished")
```

我们看上述内容，只修改了三行：

1. `line: 3`: 为调用 `sync.NewSizedWaitGroup` 来生成一个 `SizedWaitGroup` 来限制并发，并发限制大小为 4 
2. `line: 6`: 因为方法定义不同，SizedWaitGroup 的 `.Add()` 没有参数，默认调用一次，增加一次任务计数
3. `line: 15`: 我们创建更多大的 slice，比我们限制的并发大，我们才能看到效果。

上述代码执行的时候，每一个任务执行一秒钟，有 4 个任务同时在执行过程中的时候，其他任务会阻塞，等待剩余任务执行完毕，才会执行，从而限制了 Goroutine 的并发。

我们预计会把总任务 10 个分为三组，`4,4,2`，所以将会执行三秒（一组任务耗时1秒）。获得的结果如下：

```go
[INFO] 2021-06-30 17:41:56 +0800 [a] caller: 3
[INFO] 2021-06-30 17:41:56 +0800 [a] caller: 0
[INFO] 2021-06-30 17:41:56 +0800 [a] caller: 1
[INFO] 2021-06-30 17:41:56 +0800 [a] caller: 2
[INFO] 2021-06-30 17:41:57 +0800 [a] task is finished... caller: 2
[INFO] 2021-06-30 17:41:57 +0800 [a] task is finished... caller: 1
[INFO] 2021-06-30 17:41:57 +0800 [a] task is finished... caller: 3
[INFO] 2021-06-30 17:41:57 +0800 [a] caller: 4
[INFO] 2021-06-30 17:41:57 +0800 [a] task is finished... caller: 0
[INFO] 2021-06-30 17:41:57 +0800 [a] caller: 7
[INFO] 2021-06-30 17:41:57 +0800 [a] caller: 5
[INFO] 2021-06-30 17:41:57 +0800 [a] caller: 6
[INFO] 2021-06-30 17:41:58 +0800 [a] task is finished... caller: 4
[INFO] 2021-06-30 17:41:58 +0800 [a] task is finished... caller: 6
[INFO] 2021-06-30 17:41:58 +0800 [a] start to wait all tasks finishing...
[INFO] 2021-06-30 17:41:58 +0800 [a] caller: 9
[INFO] 2021-06-30 17:41:58 +0800 [a] task is finished... caller: 7
[INFO] 2021-06-30 17:41:58 +0800 [a] task is finished... caller: 5
[INFO] 2021-06-30 17:41:58 +0800 [a] caller: 8
[INFO] 2021-06-30 17:41:59 +0800 [a] task is finished... caller: 8
[INFO] 2021-06-30 17:41:59 +0800 [a] task is finished... caller: 9
[INFO] 2021-06-30 17:41:59 +0800 [a] all tasks finished
```

## 实战案例（1）：批量验证空间引擎中的网站
