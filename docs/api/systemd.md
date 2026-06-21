# systemd {#library-systemd}

`systemd` 库用于生成 systemd 的 unit/service/timer 配置文件，便于把脚本/程序注册为系统服务或定时任务，常用于持久化、运维部署与权限维持研究。

典型使用场景：

- 生成配置：`systemd.Create(name, opts...)` 生成 service/timer 配置。Service 段用 `systemd.service_exec_start` / `systemd.service_user` / `systemd.service_restart` 等；Unit 段用 `systemd.unit_description` / `systemd.unit_after` / `systemd.unit_requires` 等；Timer 段用 `systemd.timer_calendar` / `systemd.timer_boot_sec` / `systemd.timer_unit` 等定义触发。

与相邻库的关系：`systemd` 是配置生成工具，生成的 unit 常配合 `ssh`/`exec`（部署到目标）、`file`（落盘）使用。

> 共 40 个函数

## 可变参数函数索引

|函数|参数|返回值|说明|
|:--|:--|:--|:--|
| [systemd.Create](#create) | `name string, opt ...ConfigOption` | `string, string` | 根据给定的服务名与选项生成 systemd 单元文件 |

## 可变参数函数详情

### Create {#create}

```go
Create(name string, opt ...ConfigOption) (string, string)
```

根据给定的服务名与选项生成 systemd 单元文件

返回单元文件名与文件内容；未配置 timer 相关选项时文件名为 name.service，配置后为 name.timer

**必填参数**

|参数名|类型|说明|
|:--|:--|:--|
| name | `string` | 服务名称（用于单元文件名与标识） |

**可选参数**

可作为可变参数 `opt ...ConfigOption` 传入选项；共 39 个可用选项，详见 [ConfigOption 选项列表](#option-configoption)。

**返回值**

|序号|类型|说明|
|:--|:--|:--|
| r1 | `string` | 单元文件名（如 myapp.service 或 myapp.timer） |
| r2 | `string` | 单元文件内容 |

**示例**

``````````````yak
// 生成一个最简单的 systemd 服务单元
fileName, content = systemd.Create("myapp",
    systemd.unit_description("My Application"),
    systemd.service_exec_start("/usr/bin/myapp --serve"),
    systemd.install_wanted_by("multi-user.target"),
)
assert fileName == "myapp.service"
assert str.Contains(content, "ExecStart=/usr/bin/myapp --serve")
assert str.Contains(content, "Description=My Application")
``````````````

---

## 可变参数选项列表

以下按选项类型汇总全部可变参数选项(原先重复在各主函数下的选项表已收拢到此处)：

### 1. 类型：ConfigOption {#option-configoption}

涉及到的函数有：[systemd.Create](#create)

|选项函数|参数|返回值|说明|
|:--|:--|:--|:--|
| `systemd.extra_raw` | `i string` | `ConfigOption` | 设置整体追加到单元文件末尾的原始内容 |
| `systemd.install_wanted_by` | `wantedBy string` | `ConfigOption` | 设置 [Install] 段的 WantedBy，决定 enable 时挂载到哪个 target |
| `systemd.service_environment` | `environment string` | `ConfigOption` | 设置 [Service] 段的 Environment，注入环境变量 |
| `systemd.service_environment_file` | `environmentFile string` | `ConfigOption` | 设置 [Service] 段的 EnvironmentFile，从文件加载环境变量 |
| `systemd.service_exec_start` | `execStart string` | `ConfigOption` | 设置 [Service] 段的 ExecStart，即服务启动命令 |
| `systemd.service_exec_start_post` | `execStartPost string` | `ConfigOption` | 设置 [Service] 段的 ExecStartPost，启动后执行的命令 |
| `systemd.service_exec_start_pre` | `execStartPre string` | `ConfigOption` | 设置 [Service] 段的 ExecStartPre，启动前执行的命令 |
| `systemd.service_exec_stop` | `execStop string` | `ConfigOption` | 设置 [Service] 段的 ExecStop，即服务停止命令 |
| `systemd.service_exec_stop_post` | `execStopPost string` | `ConfigOption` | 设置 [Service] 段的 ExecStopPost，停止后执行的命令 |
| `systemd.service_group` | `group string` | `ConfigOption` | 设置 [Service] 段的 Group，指定运行服务的用户组 |
| `systemd.service_kill9` | - | `ConfigOption` | 设置 [Service] 段的 KillSignal 为 SIGKILL（强制杀死） |
| `systemd.service_kill_mode` | `killMode string` | `ConfigOption` | 设置 [Service] 段的 KillMode |
| `systemd.service_kill_signal` | `killSignal string` | `ConfigOption` | 设置 [Service] 段的 KillSignal，指定停止服务时发送的信号 |
| `systemd.service_raw` | `extraLine string` | `ConfigOption` | 向 [Service] 段追加自定义原始行（多行可用换行分隔） |
| `systemd.service_restart` | `restart string` | `ConfigOption` | 设置 [Service] 段的 Restart 策略 |
| `systemd.service_restart_sec` | `restartSec float64` | `ConfigOption` | 设置 [Service] 段的 RestartSec，重启前等待的秒数 |
| `systemd.service_stderr` | `standardError string` | `ConfigOption` | 设置 [Service] 段的 StandardError |
| `systemd.service_stdin` | `standardInput string` | `ConfigOption` | 设置 [Service] 段的 StandardInput |
| `systemd.service_stdout` | `standardOutput string` | `ConfigOption` | 设置 [Service] 段的 StandardOutput |
| `systemd.service_timeout_start_sec` | `timeoutStartSec float64` | `ConfigOption` | 设置 [Service] 段的 TimeoutStartSec，启动超时秒数 |
| `systemd.service_type` | `serviceType string` | `ConfigOption` | 设置 [Service] 段的 Type，仅接受 simple/forking/oneshot/dbus/notify/idle |
| `systemd.service_umask` | `umask string` | `ConfigOption` | 设置 [Service] 段的 UMask，设置进程文件创建掩码 |
| `systemd.service_user` | `user string` | `ConfigOption` | 设置 [Service] 段的 User，指定运行服务的用户 |
| `systemd.timer_active_sec` | `onActiveSec int64` | `ConfigOption` | 设置 [Timer] 段的 OnActiveSec，相对定时器激活时刻触发 |
| `systemd.timer_boot_sec` | `onBootSec int64` | `ConfigOption` | 设置 [Timer] 段的 OnBootSec，相对系统启动时刻触发 |
| `systemd.timer_calendar` | `onCalendar string` | `ConfigOption` | 设置 [Timer] 段的 OnCalendar，使用日历表达式定时触发 |
| `systemd.timer_raw` | `extraLine string` | `ConfigOption` | 向 [Timer] 段追加自定义原始行（多行可用换行分隔） |
| `systemd.timer_startup_sec` | `onStartupSec int64` | `ConfigOption` | 设置 [Timer] 段的 OnStartupSec，相对 systemd 启动时刻触发 |
| `systemd.timer_unit` | `unit string` | `ConfigOption` | 设置 [Timer] 段的 Unit，指定定时器触发时激活的单元 |
| `systemd.timer_unit_active_sec` | `onUnitActiveSec int64` | `ConfigOption` | 设置 [Timer] 段的 OnUnitActiveSec，相对单元上次激活时刻触发 |
| `systemd.timer_unit_inactive_sec` | `s int64` | `ConfigOption` | 设置 [Timer] 段的 OnUnitInactiveSec，相对单元上次停用时刻触发 |
| `systemd.unit_after` | `after string` | `ConfigOption` | 设置 [Unit] 段的 After，声明本服务应在指定单元之后启动 |
| `systemd.unit_before` | `before string` | `ConfigOption` | 设置 [Unit] 段的 Before，声明本服务应在指定单元之前启动 |
| `systemd.unit_binds_to` | `bindsTo string` | `ConfigOption` | 设置 [Unit] 段的 BindsTo，声明强绑定单元（绑定单元停止则本服务也停止） |
| `systemd.unit_description` | `description string` | `ConfigOption` | 设置 [Unit] 段的 Description，用于描述该服务用途 |
| `systemd.unit_documentation` | `documentation string` | `ConfigOption` | 设置 [Unit] 段的 Documentation，指向服务文档链接 |
| `systemd.unit_extra_line` | `extraLine string` | `ConfigOption` | 向 [Unit] 段追加自定义原始行（多行可用换行分隔） |
| `systemd.unit_requires` | `requires string` | `ConfigOption` | 设置 [Unit] 段的 Requires，声明强依赖单元（依赖失败则本服务也失败） |
| `systemd.unit_wants` | `wants string` | `ConfigOption` | 设置 [Unit] 段的 Wants，声明弱依赖单元（依赖失败不影响本服务启动） |

