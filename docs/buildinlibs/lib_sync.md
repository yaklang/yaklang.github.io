---
sidebar_position: 9
---

# [sync] 同步/并发控制

本模块基本和 Golang 原生 `sync` 功能相同，基本也都继承了 Golang 的相关数据结构。

## `sync` 相关 API

    fn sync.NewCond(): *sync.Cond
    fn sync.NewLock(): *sync.Mutex
    fn sync.NewMap(): *sync.Map
    fn sync.NewMutex(): *sync.Mutex
    fn sync.NewOnce(): *sync.Once
    fn sync.NewPool(): *sync.Pool
    fn sync.NewRWMutex(): *sync.RWMutex
    fn sync.NewSizedWaitGroup(var_1: int): *utils.SizedWaitGroup
    fn sync.NewWaitGroup(): *sync.WaitGroup
