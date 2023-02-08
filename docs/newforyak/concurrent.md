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
减去一个任务计数。最后 `WaitGroup` 通过 `.Wait()` 函数。

但是，我们发现上述的代码还不够精简，他还有很大的提升空间，如果我们把逻辑放在 for 方法体中，并发的编写将会更加精炼；

```go
loglevel(`info`)

wg := sync.NewWaitGroup()

for index, element := range ["cha1", "a2", "d3"] {
    element := element  // 这行代码是必须的，把 element 变量绑定到当前定义域
    wg.Add(1)
    go func{
        defer wg.Done()

        log.info("caller: %v", element)
        sleep(1)
        log.info("task is finished... caller: %s", element)
    }
}

log.info("start to wait all tasks finishing...")
wg.Wait()
log.info("all tasks finished")
```

:::caution 作为对比，观察在 Golang 中的处理方式

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

### "线程池"：如何限制最大并发量

在常用场景下，我们经常会遇到限制：

1. 机器的性能并不是无限的
2. 网络带宽并不是无限的

所以我们往往需要限制一下执行任务的最大量。

在 Python 中，我们经常需要构建一个线程池，或者为了充分利用 CPU 性能，会使用 `processing` 中的 pool 来执行。

幸运的是，在 Golang 中，我们并不需要太担心线程/进程上下文切换的开销，我们可以使用 Goroutine 来进行异步任务执行， 并且也并不需要太担心上下文频繁切换带来的问题。毕竟一个 Goroutine 的开销大概在 4K
左右，对于整个程序来说，微不足道。

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

我们在前一节中，编写了一个小程序，使用 yak 从 shodan 中获取数据，并且对每一个结果，进行 http 请求的访问，但是由于我们并没有使用并发编程，导致整个过程挺慢的。

在我们本节学习了如何编写带并发的 yak 脚本后，我们可以尝试对上一节的代码进行一些改造：

我们查看原始代码，其实非常简单，这是不是很像我们看到过的 `for range` 分发任务。

```go
shodanToken := cli.String("token")
maxRecord := cli.Int("max-record")
if maxRecord <= 0 {
    maxRecord = 100
}

ch, err := spacengine.ShodanQuery(shodanToken, "wordpress", spacengine.maxRecord(maxRecord))
die(err)

for result := range ch {
    addr := result.Addr
    println(result.Addr)
}
```

我们构建一个执行函数，在这个函数中，我们去进行 http 访问。

```go
// 构建一个 SizedWaitGroup 来限制并发
swg := sync.NewSizedWaitGroup(20)

// 构建任务执行函数，在这个函数中启动 Goroutine
func submitTask(addr) {

    // 把一个网络地址解析成可能存在的 urls
    urls := str.ParseStringToUrls(addr)
    swg.Add()
    go func{
        defer swg.Done()
        
        // 把 url 使用 http.get 访问，对结果进行简单展示和访问 
        for _, u := range urls {
            rsp, err := http.Get(u)
            if err != nil {
                log.error("request %v failed: %s", u, err)
                continue
            }

            // 使用 http.dump 把 http.Response 变成 bytes 数据包
            packetRaw, err := http.dump(rsp)
            if err != nil {
                log.info("url: %v status code: %v", u, rsp.StatusCode)
                continue
            }
            
            // 展示基础信息
            log.info("url: %v status code: %v packet len: %v", u, rsp.StatusCode, len(packetRaw))
        }
    }
}
```

编写了上述函数之后，我们可以很容易的把一开始的脚本改造成想要的样子（从 Shodan 中获取内容，并发获取网站实际的信息）

```go
loglevel(`info`)

shodanToken := cli.String("token")
maxRecord := cli.Int("max-record")
if maxRecord <= 0 {
    maxRecord = 100
}

ch, err := spacengine.ShodanQuery(shodanToken, "wordpress", spacengine.maxRecord(maxRecord))
die(err)

swg := sync.NewSizedWaitGroup(20)
func submitTask(addr) {
    urls := str.ParseStringToUrls(addr)
    swg.Add()
    go func{
        defer swg.Done()
        
        for _, u := range urls {
            rsp, err := http.Get(u)
            if err != nil {
                log.error("request %v failed: %s", u, err)
                continue
            }

            packetRaw, err := http.dump(rsp)
            if err != nil {
                log.info("url: %v status code: %v", u, rsp.StatusCode)
                continue
            }
            
            log.info("url: %v status code: %v packet len: %v", u, rsp.StatusCode, len(packetRaw))
        }
    }
}

for result := range ch {
    addr := result.Addr
    log.info("start to handling shodan result: %v", addr)
    submitTask(addr)
}

log.info("all task is submitted...")
swg.Wait()
```

这个脚本我们只是把原脚本和新的函数进行了整合，当我们执行之后，得到的内容如下：

:::caution

注意：关键的目标信息，我们已经进行了隐去，有需要的同学请自行购买 token 进行操作。

:::

```go
[INFO] 2021-07-01 10:45:54 +0800 [default:shodan.go:73] shodan fetch: 66.171.******3:443
[INFO] 2021-07-01 10:45:54 +0800 [default:shodan.go:73] shodan fetch: 52.6******43:80
[INFO] 2021-07-01 10:45:54 +0800 [a] start to handling shodan result: 66.171.******3:443
[INFO] 2021-07-01 10:45:54 +0800 [a] start to handling shodan result: 52.6******43:80
[INFO] 2021-07-01 10:45:54 +0800 [default:shodan.go:73] shodan fetch: 216.194******8:443
[INFO] 2021-07-01 10:45:54 +0800 [default:shodan.go:73] shodan fetch: 104.2******2:443
[INFO] 2021-07-01 10:45:54 +0800 [a] start to handling shodan result: 216.194******8:443
[INFO] 2021-07-01 10:45:54 +0800 [a] start to handling shodan result: 104.2******2:443
[INFO] 2021-07-01 10:45:54 +0800 [default:shodan.go:73] shodan fetch: 23.235******07:80
[INFO] 2021-07-01 10:45:54 +0800 [default:shodan.go:73] shodan fetch: 192.******8:443
[INFO] 2021-07-01 10:45:54 +0800 [a] start to handling shodan result: 23.235******07:80
...
...
...
[INFO] 2021-07-01 10:45:55 +0800 [a] start to handling shodan result: 45.79******08:80
[INFO] 2021-07-01 10:45:55 +0800 [default:shodan.go:73] shodan fetch: 124.111******54:80
[INFO] 2021-07-01 10:45:57 +0800 [a] url: https?://***.**.***.** status code: 200 packet ******25785
[INFO] 2021-07-01 10:45:57 +0800 [a] start to handling shodan result: 124.111******54:80
[INFO] 2021-07-01 10:45:57 +0800 [default:shodan.go:73] shodan fetch: 165.******80:80
[INFO] 2021-07-01 10:45:57 +0800 [a] url: https?://***.**.***.** status code: 200 packet******90338
[INFO] 2021-07-01 10:45:57 +0800 [a] start to handling shodan result: 165.******80:80
[INFO] 2021-07-01 10:45:57 +0800 [default:shodan.go:73] shodan fetch: 72.10******12:80
[INFO] 2021-07-01 10:45:57 +0800 [a] url: https?://***.**.***.** status code: 200 pack******: 841
[INFO] 2021-07-01 10:45:57 +0800 [a] start to handling shodan result: 72.10******12:80
...
...
...
[INFO] 2021-07-01 10:45:59 +0800 [a] start to handling shodan result: 52.5******81:80
[INFO] 2021-07-01 10:45:59 +0800 [default:shodan.go:73] shodan fetch: 208.7******50:80
[INFO] 2021-07-01 10:45:59 +0800 [a] url: https?://***.**.***.** status code: 200 packet******32551
[INFO] 2021-07-01 10:45:59 +0800 [a] start to handling shodan result: 208.7******50:80
[INFO] 2021-07-01 10:45:59 +0800 [default:shodan.go:73] shodan fetch: 104.2******1:443
...
...
...
[INFO] 2021-07-01 10:46:11 +0800 [default:shodan.go:73] shodan fetch: 52.22******70:80
[INFO] 2021-07-01 10:46:11 +0800 [a] url: https?://***.**.***.** status code: 200 packet ******49903
[INFO] 2021-07-01 10:46:11 +0800 [a] start to handling shodan result: 52.22******70:80
[INFO] 2021-07-01 10:46:11 +0800 [a] url: https?://***.**.***.** status code: 200 packet ******38659
[INFO] 2021-07-01 10:46:11 +0800 [a] all task is submited...
[INFO] 2021-07-01 10:46:12 +0800 [a] url: https?://***.**.***.** status code: 200 packet******37318
[INFO] 2021-07-01 10:46:12 +0800 [a] url: https?://***.**.***.** status code: 200 packet******30814
[INFO] 2021-07-01 10:46:12 +0800 [a] url: https?://***.**.***.** status code: 200 packet ******19441
[INFO] 2021-07-01 10:46:12 +0800 [a] url: https?://***.**.***.** status code: 200 packet ******56180
[INFO] 2021-07-01 10:46:12 +0800 [a] url: https?://***.**.***.** status code: 200 packet******74448
[ERRO] 2021-07-01 10:46:12 +0800 [a] request https?://***.**.***.** failed: Get "https?://***.**.***.** tls: first record does not look like a TL******shake
[INFO] 2021-07-01 10:46:12 +0800 [a] url: https?://***.**.***.** status code: 200 packet******64965
[INFO] 2021-07-01 10:46:12 +0800 [a] url: https?://***.**.***.** status code: 200 packet******81119
...
...
...

```

## 结束语

当然，很多朋友会吐槽，我们最近两节并不是特别亲人，毕竟 shodan token 并不是谁都有的。

那么我们下一节讲介绍一些不需要氪金就可以快乐玩耍的小技能。