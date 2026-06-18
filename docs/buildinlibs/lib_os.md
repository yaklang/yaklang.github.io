---
sidebar_position: 6
---

# [os] 操作系统库

1. `fn os.Clearenv()` 清除所有环境变量
1. `fn os.Environ(): []string` 获取当前所有环境变量
1. `fn os.Executable(): (string, error)` 获取当前执行的二进制文件路径
1. `fn os.Exit(var_1: int)` 退出主程序
1. `fn os.ExpandEnv(var_1: string): string` 获取特定环境变量
1. `fn os.GetRandomAvailableTCPPort(): int` 获取一个随机的可用的 TCP 端口
1. `fn os.GetRandomAvailableUDPPort(): int` 获取一个随机的可用的 UDP 端口
1. `fn os.Getenv(var_1: string): string` 获取环境变量
1. `fn os.IsRemoteTCPPortOpen(host: string, port: int): bool` 判断一个 TCP 端口是否开放
1. `fn os.IsTCPPortAvailable(var_1: int): bool` 判断一个端口是否可用
1. `fn os.IsTCPPortOpen(var_1: int): bool` 判断一个本地端口是否开放
1. `fn os.IsUDPPortAvailable(var_1: int): bool` 判断 UDP 端口是否可用
1. `fn os.IsUDPPortOpen(var_1: int): bool` 判断一个本地 UDP 端口是否开放
1. `fn os.LookupEnv(var_1: string): (string, bool)` 寻找环境变量
1. `fn os.Pipe(): (*os.File, *os.File, error)` 创建一个管道
1. `fn os.Remove(var_1: string): error` 移除一个文件
1. `fn os.RemoveAll(var_1: string): error` 强制移除一个文件
1. `fn os.Rename(var_1: string, var_2: string): error` 重命名文件
1. `fn os.Setenv(var_1: string, var_2: string): error` 设置环境变量
1. `fn os.Unsetenv(var_1: string): error` 清除某一个具体的环境变量
1. `os.Args: []string` 当前命令行参数
1. `os.Stderr: *os.File` 标准错误流
1. `os.Stdin: *os.File` 标准输入流
1. `os.Stdout: *os.File` 标准输出流