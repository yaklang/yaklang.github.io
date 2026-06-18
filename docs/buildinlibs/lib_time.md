---
sidebar_position: 10
---

# [time] 时间与日期

1. `fn time.After(var_1: float64): <-chan time.Time` 
1. `fn time.AfterFunc(var_1: time.Duration, var_2: func()): *time.Timer`
1. `fn time.GetCurrentDate(): (time.Time, error)`
1. `fn time.GetCurrentMonday(): (time.Time, error)`
1. `fn time.NewTicker(var_1: float64): *time.Ticker`
1. `fn time.NewTimer(var_1: float64): *time.Timer`
1. `fn time.Now(): time.Time`
1. `fn time.Parse(var_1: string, var_2: string): (time.Time, error)`
1. `fn time.ParseDuration(var_1: string): (time.Duration, error)`
1. `fn time.Since(var_1: time.Time): time.Duration`
1. `fn time.Sleep(var_1: float64)`
1. `fn time.Unix(var_1: int64, var_2: int64): time.Time`
1. `fn time.Until(var_1: time.Time): time.Duration`
1. `fn time.now(): time.Time`
1. `fn time.sleep(var_1: float64)`