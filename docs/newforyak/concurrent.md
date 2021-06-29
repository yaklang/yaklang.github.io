---
sidebar_position: 5
---

# YAK 中编写"多线程/多并发"应用

在上一节中，我们遗留了一个问题：

> 如何把我们从 shodan 中的结果使用并发的手段快速验证？（如何使用并发快速发送 HTTP 请求？）

当然，我们 YAK 作为 Golang 语言的反射脚本语言，自然支持了 Golang 中最引以为傲的 Go 关键字特性了。

## 最基础的并发：`go func(){/* do */}()`

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

## 并发范式：多任务控制（`WaitGroup`模式）

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

:::danger 注意！这里有一个易错点
:::

## 并发范式：带最大并发量限制的多任务