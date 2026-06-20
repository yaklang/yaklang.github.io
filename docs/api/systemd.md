# systemd

|函数名|函数描述/介绍|
|:------|:--------|
| [systemd.Create](#create) |Create 根据给定的服务名与选项生成 systemd 单元文件 返回单元文件名与文件内容；未配置 timer 相关选项时文件名为 name.service，配置后为 name.timer 参数: - name: 服务名称（用于单元文件名与标识） - opt: 可选项，如 systemd.unit...|
| [systemd.extra_raw](#extra_raw) |extra_raw 设置整体追加到单元文件末尾的原始内容 参数: - i: 追加的原始内容 返回值: - 可传入 systemd.Create 的配置选项|
| [systemd.install_wanted_by](#install_wanted_by) |install_wanted_by 设置 [Install] 段的 WantedBy，决定 enable 时挂载到哪个 target 参数: - wantedBy: 目标 target（如 multi-user.target） 返回值: - 可传入 systemd.Create 的配置选项|
| [systemd.service_environment](#service_environment) |service_environment 设置 [Service] 段的 Environment，注入环境变量 参数: - environment: 环境变量声明（如 &#34;KEY=VALUE&#34;） 返回值: - 可传入 systemd.Create 的配置选项|
| [systemd.service_environment_file](#service_environment_file) |service_environment_file 设置 [Service] 段的 EnvironmentFile，从文件加载环境变量 参数: - environmentFile: 环境变量文件路径 返回值: - 可传入 systemd.Create 的配置选项|
| [systemd.service_exec_start](#service_exec_start) |service_exec_start 设置 [Service] 段的 ExecStart，即服务启动命令 参数: - execStart: 启动命令（建议使用绝对路径） 返回值: - 可传入 systemd.Create 的配置选项|
| [systemd.service_exec_start_post](#service_exec_start_post) |service_exec_start_post 设置 [Service] 段的 ExecStartPost，启动后执行的命令 参数: - execStartPost: 启动后命令 返回值: - 可传入 systemd.Create 的配置选项|
| [systemd.service_exec_start_pre](#service_exec_start_pre) |service_exec_start_pre 设置 [Service] 段的 ExecStartPre，启动前执行的命令 参数: - execStartPre: 启动前命令 返回值: - 可传入 systemd.Create 的配置选项|
| [systemd.service_exec_stop](#service_exec_stop) |service_exec_stop 设置 [Service] 段的 ExecStop，即服务停止命令 参数: - execStop: 停止命令 返回值: - 可传入 systemd.Create 的配置选项|
| [systemd.service_exec_stop_post](#service_exec_stop_post) |service_exec_stop_post 设置 [Service] 段的 ExecStopPost，停止后执行的命令 参数: - execStopPost: 停止后命令 返回值: - 可传入 systemd.Create 的配置选项|
| [systemd.service_group](#service_group) |service_group 设置 [Service] 段的 Group，指定运行服务的用户组 参数: - group: 运行用户组名 返回值: - 可传入 systemd.Create 的配置选项|
| [systemd.service_kill9](#service_kill9) |service_kill9 设置 [Service] 段的 KillSignal 为 SIGKILL（强制杀死） 返回值: - 可传入 systemd.Create 的配置选项|
| [systemd.service_kill_mode](#service_kill_mode) |service_kill_mode 设置 [Service] 段的 KillMode 仅接受 control-group/process/mixed/none 参数: - killMode: 进程终止模式，非法值会回退为默认 control-group 返回值: - 可传入 systemd.Crea...|
| [systemd.service_kill_signal](#service_kill_signal) |service_kill_signal 设置 [Service] 段的 KillSignal，指定停止服务时发送的信号 参数: - killSignal: 信号名（如 SIGTERM、SIGINT） 返回值: - 可传入 systemd.Create 的配置选项|
| [systemd.service_raw](#service_raw) |service_raw 向 [Service] 段追加自定义原始行（多行可用换行分隔） 参数: - extraLine: 追加到 [Service] 段的原始内容 返回值: - 可传入 systemd.Create 的配置选项|
| [systemd.service_restart](#service_restart) |service_restart 设置 [Service] 段的 Restart 策略 仅接受 no/on-success/on-failure/on-abnormal/on-watchdog/on-abort/always 参数: - restart: 重启策略，非法值会回退为默认 no 返回值: ...|
| [systemd.service_restart_sec](#service_restart_sec) |service_restart_sec 设置 [Service] 段的 RestartSec，重启前等待的秒数 参数: - restartSec: 重启等待时间，单位为秒 返回值: - 可传入 systemd.Create 的配置选项|
| [systemd.service_stderr](#service_stderr) |service_stderr 设置 [Service] 段的 StandardError 仅接受 inherit/null/tty/journal/syslog/kmsg/journal+console/syslog+console/kmsg+console/socket/fd/file 参数: -...|
| [systemd.service_stdin](#service_stdin) |service_stdin 设置 [Service] 段的 StandardInput 仅接受 null/tty/tty-force/tty-fail/socket/fd/fd-force/fd-fail/file/file-force/file-fail 参数: - standardInput: ...|
| [systemd.service_stdout](#service_stdout) |service_stdout 设置 [Service] 段的 StandardOutput 仅接受 inherit/null/tty/journal/syslog/kmsg/journal+console/syslog+console/kmsg+console/socket/fd/file 参数: ...|
| [systemd.service_timeout_start_sec](#service_timeout_start_sec) |service_timeout_start_sec 设置 [Service] 段的 TimeoutStartSec，启动超时秒数 参数: - timeoutStartSec: 启动超时时间，单位为秒 返回值: - 可传入 systemd.Create 的配置选项|
| [systemd.service_type](#service_type) |service_type 设置 [Service] 段的 Type，仅接受 simple/forking/oneshot/dbus/notify/idle 参数: - serviceType: 服务类型，非法值会回退为默认 simple 返回值: - 可传入 systemd.Create 的配置选项|
| [systemd.service_umask](#service_umask) |service_umask 设置 [Service] 段的 UMask，设置进程文件创建掩码 参数: - umask: 文件掩码（如 &#34;0022&#34;） 返回值: - 可传入 systemd.Create 的配置选项|
| [systemd.service_user](#service_user) |service_user 设置 [Service] 段的 User，指定运行服务的用户 参数: - user: 运行用户名 返回值: - 可传入 systemd.Create 的配置选项|
| [systemd.timer_active_sec](#timer_active_sec) |timer_active_sec 设置 [Timer] 段的 OnActiveSec，相对定时器激活时刻触发 参数: - onActiveSec: 相对激活时刻的秒数 返回值: - 可传入 systemd.Create 的配置选项|
| [systemd.timer_boot_sec](#timer_boot_sec) |timer_boot_sec 设置 [Timer] 段的 OnBootSec，相对系统启动时刻触发 参数: - onBootSec: 相对系统启动的秒数 返回值: - 可传入 systemd.Create 的配置选项|
| [systemd.timer_calendar](#timer_calendar) |timer_calendar 设置 [Timer] 段的 OnCalendar，使用日历表达式定时触发 参数: - onCalendar: 日历表达式（如 &#34;*-*-* 02:00:00&#34;） 返回值: - 可传入 systemd.Create 的配置选项；配置该项后 systemd.Create 会...|
| [systemd.timer_raw](#timer_raw) |timer_raw 向 [Timer] 段追加自定义原始行（多行可用换行分隔） 参数: - extraLine: 追加到 [Timer] 段的原始内容 返回值: - 可传入 systemd.Create 的配置选项|
| [systemd.timer_startup_sec](#timer_startup_sec) |timer_startup_sec 设置 [Timer] 段的 OnStartupSec，相对 systemd 启动时刻触发 参数: - onStartupSec: 相对 systemd 启动的秒数 返回值: - 可传入 systemd.Create 的配置选项|
| [systemd.timer_unit](#timer_unit) |timer_unit 设置 [Timer] 段的 Unit，指定定时器触发时激活的单元 参数: - unit: 被触发的单元名 返回值: - 可传入 systemd.Create 的配置选项|
| [systemd.timer_unit_active_sec](#timer_unit_active_sec) |timer_unit_active_sec 设置 [Timer] 段的 OnUnitActiveSec，相对单元上次激活时刻触发 参数: - onUnitActiveSec: 相对单元上次激活的秒数 返回值: - 可传入 systemd.Create 的配置选项|
| [systemd.timer_unit_inactive_sec](#timer_unit_inactive_sec) |timer_unit_inactive_sec 设置 [Timer] 段的 OnUnitInactiveSec，相对单元上次停用时刻触发 参数: - s: 相对单元上次停用的秒数 返回值: - 可传入 systemd.Create 的配置选项|
| [systemd.unit_after](#unit_after) |unit_after 设置 [Unit] 段的 After，声明本服务应在指定单元之后启动 参数: - after: 依赖的单元名（如 network.target） 返回值: - 可传入 systemd.Create 的配置选项|
| [systemd.unit_before](#unit_before) |unit_before 设置 [Unit] 段的 Before，声明本服务应在指定单元之前启动 参数: - before: 在其之前启动的单元名 返回值: - 可传入 systemd.Create 的配置选项|
| [systemd.unit_binds_to](#unit_binds_to) |unit_binds_to 设置 [Unit] 段的 BindsTo，声明强绑定单元（绑定单元停止则本服务也停止） 参数: - bindsTo: 绑定的单元名 返回值: - 可传入 systemd.Create 的配置选项|
| [systemd.unit_description](#unit_description) |unit_description 设置 [Unit] 段的 Description，用于描述该服务用途 参数: - description: 服务描述文本 返回值: - 可传入 systemd.Create 的配置选项|
| [systemd.unit_documentation](#unit_documentation) |unit_documentation 设置 [Unit] 段的 Documentation，指向服务文档链接 参数: - documentation: 文档地址（如 man 手册或 URL） 返回值: - 可传入 systemd.Create 的配置选项|
| [systemd.unit_extra_line](#unit_extra_line) |unit_extra_line 向 [Unit] 段追加自定义原始行（多行可用换行分隔） 参数: - extraLine: 追加到 [Unit] 段的原始内容 返回值: - 可传入 systemd.Create 的配置选项|
| [systemd.unit_requires](#unit_requires) |unit_requires 设置 [Unit] 段的 Requires，声明强依赖单元（依赖失败则本服务也失败） 参数: - requires: 强依赖的单元名 返回值: - 可传入 systemd.Create 的配置选项|
| [systemd.unit_wants](#unit_wants) |unit_wants 设置 [Unit] 段的 Wants，声明弱依赖单元（依赖失败不影响本服务启动） 参数: - wants: 弱依赖的单元名 返回值: - 可传入 systemd.Create 的配置选项|


## 函数定义
### Create

#### 详细描述
Create 根据给定的服务名与选项生成 systemd 单元文件

返回单元文件名与文件内容；未配置 timer 相关选项时文件名为 name.service，配置后为 name.timer



参数:

  - name: 服务名称（用于单元文件名与标识）

  - opt: 可选项，如 systemd.unit_description / systemd.service_exec_start / systemd.install_wanted_by 等



返回值:

  - 单元文件名（如 myapp.service 或 myapp.timer）

  - 单元文件内容




Example:

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


#### 定义

`Create(name string, opt ...ConfigOption) (string, string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` | 服务名称（用于单元文件名与标识） |
| opt | `...ConfigOption` | 可选项，如 systemd.unit_description / systemd.service_exec_start / systemd.install_wanted_by 等 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` | 单元文件名（如 myapp.service 或 myapp.timer） |
| r2 | `string` | 单元文件内容 |


### extra_raw

#### 详细描述
extra_raw 设置整体追加到单元文件末尾的原始内容



参数:

  - i: 追加的原始内容



返回值:

  - 可传入 systemd.Create 的配置选项




Example:

``````````````yak
_, serviceFile = systemd.Create("myapp", systemd.extra_raw("# generated by yaklang"))
assert str.Contains(serviceFile, "# generated by yaklang")
``````````````


#### 定义

`extra_raw(i string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` | 追加的原始内容 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 可传入 systemd.Create 的配置选项 |


### install_wanted_by

#### 详细描述
install_wanted_by 设置 [Install] 段的 WantedBy，决定 enable 时挂载到哪个 target



参数:

  - wantedBy: 目标 target（如 multi-user.target）



返回值:

  - 可传入 systemd.Create 的配置选项




Example:

``````````````yak
_, serviceFile = systemd.Create("myapp", systemd.install_wanted_by("multi-user.target"))
assert str.Contains(serviceFile, "WantedBy=multi-user.target")
``````````````


#### 定义

`install_wanted_by(wantedBy string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| wantedBy | `string` | 目标 target（如 multi-user.target） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 可传入 systemd.Create 的配置选项 |


### service_environment

#### 详细描述
service_environment 设置 [Service] 段的 Environment，注入环境变量



参数:

  - environment: 环境变量声明（如 &#34;KEY=VALUE&#34;）



返回值:

  - 可传入 systemd.Create 的配置选项




Example:

``````````````yak
_, serviceFile = systemd.Create("myapp", systemd.service_environment("ENV=production"))
assert str.Contains(serviceFile, "Environment=ENV=production")
``````````````


#### 定义

`service_environment(environment string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| environment | `string` | 环境变量声明（如 &#34;KEY=VALUE&#34;） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 可传入 systemd.Create 的配置选项 |


### service_environment_file

#### 详细描述
service_environment_file 设置 [Service] 段的 EnvironmentFile，从文件加载环境变量



参数:

  - environmentFile: 环境变量文件路径



返回值:

  - 可传入 systemd.Create 的配置选项




Example:

``````````````yak
_, serviceFile = systemd.Create("myapp", systemd.service_environment_file("/etc/myapp.env"))
assert str.Contains(serviceFile, "EnvironmentFile=/etc/myapp.env")
``````````````


#### 定义

`service_environment_file(environmentFile string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| environmentFile | `string` | 环境变量文件路径 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 可传入 systemd.Create 的配置选项 |


### service_exec_start

#### 详细描述
service_exec_start 设置 [Service] 段的 ExecStart，即服务启动命令



参数:

  - execStart: 启动命令（建议使用绝对路径）



返回值:

  - 可传入 systemd.Create 的配置选项




Example:

``````````````yak
_, serviceFile = systemd.Create("myapp", systemd.service_exec_start("/usr/bin/myapp --serve"))
assert str.Contains(serviceFile, "ExecStart=/usr/bin/myapp --serve")
``````````````


#### 定义

`service_exec_start(execStart string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| execStart | `string` | 启动命令（建议使用绝对路径） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 可传入 systemd.Create 的配置选项 |


### service_exec_start_post

#### 详细描述
service_exec_start_post 设置 [Service] 段的 ExecStartPost，启动后执行的命令



参数:

  - execStartPost: 启动后命令



返回值:

  - 可传入 systemd.Create 的配置选项




Example:

``````````````yak
_, serviceFile = systemd.Create("myapp", systemd.service_exec_start_post("/usr/bin/notify-ready"))
assert str.Contains(serviceFile, "ExecStartPost=/usr/bin/notify-ready")
``````````````


#### 定义

`service_exec_start_post(execStartPost string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| execStartPost | `string` | 启动后命令 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 可传入 systemd.Create 的配置选项 |


### service_exec_start_pre

#### 详细描述
service_exec_start_pre 设置 [Service] 段的 ExecStartPre，启动前执行的命令



参数:

  - execStartPre: 启动前命令



返回值:

  - 可传入 systemd.Create 的配置选项




Example:

``````````````yak
_, serviceFile = systemd.Create("myapp", systemd.service_exec_start_pre("/usr/bin/myapp --check"))
assert str.Contains(serviceFile, "ExecStartPre=/usr/bin/myapp --check")
``````````````


#### 定义

`service_exec_start_pre(execStartPre string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| execStartPre | `string` | 启动前命令 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 可传入 systemd.Create 的配置选项 |


### service_exec_stop

#### 详细描述
service_exec_stop 设置 [Service] 段的 ExecStop，即服务停止命令



参数:

  - execStop: 停止命令



返回值:

  - 可传入 systemd.Create 的配置选项




Example:

``````````````yak
_, serviceFile = systemd.Create("myapp", systemd.service_exec_stop("/usr/bin/myapp --shutdown"))
assert str.Contains(serviceFile, "ExecStop=/usr/bin/myapp --shutdown")
``````````````


#### 定义

`service_exec_stop(execStop string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| execStop | `string` | 停止命令 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 可传入 systemd.Create 的配置选项 |


### service_exec_stop_post

#### 详细描述
service_exec_stop_post 设置 [Service] 段的 ExecStopPost，停止后执行的命令



参数:

  - execStopPost: 停止后命令



返回值:

  - 可传入 systemd.Create 的配置选项




Example:

``````````````yak
_, serviceFile = systemd.Create("myapp", systemd.service_exec_stop_post("/usr/bin/cleanup"))
assert str.Contains(serviceFile, "ExecStopPost=/usr/bin/cleanup")
``````````````


#### 定义

`service_exec_stop_post(execStopPost string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| execStopPost | `string` | 停止后命令 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 可传入 systemd.Create 的配置选项 |


### service_group

#### 详细描述
service_group 设置 [Service] 段的 Group，指定运行服务的用户组



参数:

  - group: 运行用户组名



返回值:

  - 可传入 systemd.Create 的配置选项




Example:

``````````````yak
_, serviceFile = systemd.Create("myapp", systemd.service_group("www-data"))
assert str.Contains(serviceFile, "Group=www-data")
``````````````


#### 定义

`service_group(group string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| group | `string` | 运行用户组名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 可传入 systemd.Create 的配置选项 |


### service_kill9

#### 详细描述
service_kill9 设置 [Service] 段的 KillSignal 为 SIGKILL（强制杀死）



返回值:

  - 可传入 systemd.Create 的配置选项




Example:

``````````````yak
_, serviceFile = systemd.Create("myapp", systemd.service_kill9())
assert str.Contains(serviceFile, "KillSignal=SIGKILL")
``````````````


#### 定义

`service_kill9() ConfigOption`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 可传入 systemd.Create 的配置选项 |


### service_kill_mode

#### 详细描述
service_kill_mode 设置 [Service] 段的 KillMode

仅接受 control-group/process/mixed/none



参数:

  - killMode: 进程终止模式，非法值会回退为默认 control-group



返回值:

  - 可传入 systemd.Create 的配置选项




Example:

``````````````yak
_, serviceFile = systemd.Create("myapp", systemd.service_kill_mode("mixed"))
assert str.Contains(serviceFile, "KillMode=mixed")
``````````````


#### 定义

`service_kill_mode(killMode string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| killMode | `string` | 进程终止模式，非法值会回退为默认 control-group |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 可传入 systemd.Create 的配置选项 |


### service_kill_signal

#### 详细描述
service_kill_signal 设置 [Service] 段的 KillSignal，指定停止服务时发送的信号



参数:

  - killSignal: 信号名（如 SIGTERM、SIGINT）



返回值:

  - 可传入 systemd.Create 的配置选项




Example:

``````````````yak
_, serviceFile = systemd.Create("myapp", systemd.service_kill_signal("SIGTERM"))
assert str.Contains(serviceFile, "KillSignal=SIGTERM")
``````````````


#### 定义

`service_kill_signal(killSignal string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| killSignal | `string` | 信号名（如 SIGTERM、SIGINT） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 可传入 systemd.Create 的配置选项 |


### service_raw

#### 详细描述
service_raw 向 [Service] 段追加自定义原始行（多行可用换行分隔）



参数:

  - extraLine: 追加到 [Service] 段的原始内容



返回值:

  - 可传入 systemd.Create 的配置选项




Example:

``````````````yak
_, serviceFile = systemd.Create("myapp", systemd.service_raw("LimitNOFILE=65536"))
assert str.Contains(serviceFile, "LimitNOFILE=65536")
``````````````


#### 定义

`service_raw(extraLine string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| extraLine | `string` | 追加到 [Service] 段的原始内容 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 可传入 systemd.Create 的配置选项 |


### service_restart

#### 详细描述
service_restart 设置 [Service] 段的 Restart 策略

仅接受 no/on-success/on-failure/on-abnormal/on-watchdog/on-abort/always



参数:

  - restart: 重启策略，非法值会回退为默认 no



返回值:

  - 可传入 systemd.Create 的配置选项




Example:

``````````````yak
_, serviceFile = systemd.Create("myapp", systemd.service_restart("always"))
assert str.Contains(serviceFile, "Restart=always")
``````````````


#### 定义

`service_restart(restart string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| restart | `string` | 重启策略，非法值会回退为默认 no |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 可传入 systemd.Create 的配置选项 |


### service_restart_sec

#### 详细描述
service_restart_sec 设置 [Service] 段的 RestartSec，重启前等待的秒数



参数:

  - restartSec: 重启等待时间，单位为秒



返回值:

  - 可传入 systemd.Create 的配置选项




Example:

``````````````yak
_, serviceFile = systemd.Create("myapp", systemd.service_restart_sec(5))
assert str.Contains(serviceFile, "RestartSec=")
``````````````


#### 定义

`service_restart_sec(restartSec float64) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| restartSec | `float64` | 重启等待时间，单位为秒 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 可传入 systemd.Create 的配置选项 |


### service_stderr

#### 详细描述
service_stderr 设置 [Service] 段的 StandardError

仅接受 inherit/null/tty/journal/syslog/kmsg/journal+console/syslog+console/kmsg+console/socket/fd/file



参数:

  - standardError: 标准错误类型，非法值会回退为默认 inherit



返回值:

  - 可传入 systemd.Create 的配置选项




Example:

``````````````yak
_, serviceFile = systemd.Create("myapp", systemd.service_stderr("journal"))
assert str.Contains(serviceFile, "StandardError=journal")
``````````````


#### 定义

`service_stderr(standardError string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| standardError | `string` | 标准错误类型，非法值会回退为默认 inherit |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 可传入 systemd.Create 的配置选项 |


### service_stdin

#### 详细描述
service_stdin 设置 [Service] 段的 StandardInput

仅接受 null/tty/tty-force/tty-fail/socket/fd/fd-force/fd-fail/file/file-force/file-fail



参数:

  - standardInput: 标准输入类型，非法值会回退为默认 null



返回值:

  - 可传入 systemd.Create 的配置选项




Example:

``````````````yak
_, serviceFile = systemd.Create("myapp", systemd.service_stdin("tty"))
assert str.Contains(serviceFile, "StandardInput=tty")
``````````````


#### 定义

`service_stdin(standardInput string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| standardInput | `string` | 标准输入类型，非法值会回退为默认 null |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 可传入 systemd.Create 的配置选项 |


### service_stdout

#### 详细描述
service_stdout 设置 [Service] 段的 StandardOutput

仅接受 inherit/null/tty/journal/syslog/kmsg/journal+console/syslog+console/kmsg+console/socket/fd/file



参数:

  - standardOutput: 标准输出类型，非法值会回退为默认 inherit



返回值:

  - 可传入 systemd.Create 的配置选项




Example:

``````````````yak
_, serviceFile = systemd.Create("myapp", systemd.service_stdout("journal"))
assert str.Contains(serviceFile, "StandardOutput=journal")
``````````````


#### 定义

`service_stdout(standardOutput string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| standardOutput | `string` | 标准输出类型，非法值会回退为默认 inherit |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 可传入 systemd.Create 的配置选项 |


### service_timeout_start_sec

#### 详细描述
service_timeout_start_sec 设置 [Service] 段的 TimeoutStartSec，启动超时秒数



参数:

  - timeoutStartSec: 启动超时时间，单位为秒



返回值:

  - 可传入 systemd.Create 的配置选项




Example:

``````````````yak
_, serviceFile = systemd.Create("myapp", systemd.service_timeout_start_sec(30))
assert str.Contains(serviceFile, "TimeoutStartSec=")
``````````````


#### 定义

`service_timeout_start_sec(timeoutStartSec float64) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| timeoutStartSec | `float64` | 启动超时时间，单位为秒 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 可传入 systemd.Create 的配置选项 |


### service_type

#### 详细描述
service_type 设置 [Service] 段的 Type，仅接受 simple/forking/oneshot/dbus/notify/idle



参数:

  - serviceType: 服务类型，非法值会回退为默认 simple



返回值:

  - 可传入 systemd.Create 的配置选项




Example:

``````````````yak
_, serviceFile = systemd.Create("myapp", systemd.service_type("forking"))
assert str.Contains(serviceFile, "Type=forking")
``````````````


#### 定义

`service_type(serviceType string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| serviceType | `string` | 服务类型，非法值会回退为默认 simple |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 可传入 systemd.Create 的配置选项 |


### service_umask

#### 详细描述
service_umask 设置 [Service] 段的 UMask，设置进程文件创建掩码



参数:

  - umask: 文件掩码（如 &#34;0022&#34;）



返回值:

  - 可传入 systemd.Create 的配置选项




Example:

``````````````yak
_, serviceFile = systemd.Create("myapp", systemd.service_umask("0027"))
assert str.Contains(serviceFile, "Umask=0027")
``````````````


#### 定义

`service_umask(umask string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| umask | `string` | 文件掩码（如 &#34;0022&#34;） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 可传入 systemd.Create 的配置选项 |


### service_user

#### 详细描述
service_user 设置 [Service] 段的 User，指定运行服务的用户



参数:

  - user: 运行用户名



返回值:

  - 可传入 systemd.Create 的配置选项




Example:

``````````````yak
_, serviceFile = systemd.Create("myapp", systemd.service_user("www-data"))
assert str.Contains(serviceFile, "User=www-data")
``````````````


#### 定义

`service_user(user string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| user | `string` | 运行用户名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 可传入 systemd.Create 的配置选项 |


### timer_active_sec

#### 详细描述
timer_active_sec 设置 [Timer] 段的 OnActiveSec，相对定时器激活时刻触发



参数:

  - onActiveSec: 相对激活时刻的秒数



返回值:

  - 可传入 systemd.Create 的配置选项




Example:

``````````````yak
_, timerFile = systemd.Create("myapp", systemd.timer_unit("myapp.service"), systemd.timer_active_sec(60))
assert str.Contains(timerFile, "OnActiveSec=")
``````````````


#### 定义

`timer_active_sec(onActiveSec int64) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| onActiveSec | `int64` | 相对激活时刻的秒数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 可传入 systemd.Create 的配置选项 |


### timer_boot_sec

#### 详细描述
timer_boot_sec 设置 [Timer] 段的 OnBootSec，相对系统启动时刻触发



参数:

  - onBootSec: 相对系统启动的秒数



返回值:

  - 可传入 systemd.Create 的配置选项




Example:

``````````````yak
_, timerFile = systemd.Create("myapp", systemd.timer_unit("myapp.service"), systemd.timer_boot_sec(120))
assert str.Contains(timerFile, "OnBootSec=")
``````````````


#### 定义

`timer_boot_sec(onBootSec int64) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| onBootSec | `int64` | 相对系统启动的秒数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 可传入 systemd.Create 的配置选项 |


### timer_calendar

#### 详细描述
timer_calendar 设置 [Timer] 段的 OnCalendar，使用日历表达式定时触发



参数:

  - onCalendar: 日历表达式（如 &#34;*-*-* 02:00:00&#34;）



返回值:

  - 可传入 systemd.Create 的配置选项；配置该项后 systemd.Create 会返回非空 timer 内容




Example:

``````````````yak
_, timerFile = systemd.Create("myapp", systemd.timer_unit("myapp.service"), systemd.timer_calendar("*-*-* 02:00:00"))
assert str.Contains(timerFile, "OnCalendar=*-*-* 02:00:00")
``````````````


#### 定义

`timer_calendar(onCalendar string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| onCalendar | `string` | 日历表达式（如 &#34;*-*-* 02:00:00&#34;） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 可传入 systemd.Create 的配置选项；配置该项后 systemd.Create 会返回非空 timer 内容 |


### timer_raw

#### 详细描述
timer_raw 向 [Timer] 段追加自定义原始行（多行可用换行分隔）



参数:

  - extraLine: 追加到 [Timer] 段的原始内容



返回值:

  - 可传入 systemd.Create 的配置选项




Example:

``````````````yak
_, timerFile = systemd.Create("myapp", systemd.timer_unit("myapp.service"), systemd.timer_raw("Persistent=true"))
assert str.Contains(timerFile, "Persistent=true")
``````````````


#### 定义

`timer_raw(extraLine string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| extraLine | `string` | 追加到 [Timer] 段的原始内容 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 可传入 systemd.Create 的配置选项 |


### timer_startup_sec

#### 详细描述
timer_startup_sec 设置 [Timer] 段的 OnStartupSec，相对 systemd 启动时刻触发



参数:

  - onStartupSec: 相对 systemd 启动的秒数



返回值:

  - 可传入 systemd.Create 的配置选项




Example:

``````````````yak
_, timerFile = systemd.Create("myapp", systemd.timer_unit("myapp.service"), systemd.timer_startup_sec(90))
assert str.Contains(timerFile, "OnStartupSec=")
``````````````


#### 定义

`timer_startup_sec(onStartupSec int64) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| onStartupSec | `int64` | 相对 systemd 启动的秒数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 可传入 systemd.Create 的配置选项 |


### timer_unit

#### 详细描述
timer_unit 设置 [Timer] 段的 Unit，指定定时器触发时激活的单元



参数:

  - unit: 被触发的单元名



返回值:

  - 可传入 systemd.Create 的配置选项




Example:

``````````````yak
_, timerFile = systemd.Create("myapp", systemd.timer_unit("backup.service"), systemd.timer_calendar("daily"))
assert str.Contains(timerFile, "Unit=backup.service")
``````````````


#### 定义

`timer_unit(unit string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| unit | `string` | 被触发的单元名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 可传入 systemd.Create 的配置选项 |


### timer_unit_active_sec

#### 详细描述
timer_unit_active_sec 设置 [Timer] 段的 OnUnitActiveSec，相对单元上次激活时刻触发



参数:

  - onUnitActiveSec: 相对单元上次激活的秒数



返回值:

  - 可传入 systemd.Create 的配置选项




Example:

``````````````yak
_, timerFile = systemd.Create("myapp", systemd.timer_unit("myapp.service"), systemd.timer_unit_active_sec(3600))
assert str.Contains(timerFile, "OnUnitActiveSec=")
``````````````


#### 定义

`timer_unit_active_sec(onUnitActiveSec int64) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| onUnitActiveSec | `int64` | 相对单元上次激活的秒数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 可传入 systemd.Create 的配置选项 |


### timer_unit_inactive_sec

#### 详细描述
timer_unit_inactive_sec 设置 [Timer] 段的 OnUnitInactiveSec，相对单元上次停用时刻触发



参数:

  - s: 相对单元上次停用的秒数



返回值:

  - 可传入 systemd.Create 的配置选项




Example:

``````````````yak
_, timerFile = systemd.Create("myapp", systemd.timer_unit("myapp.service"), systemd.timer_unit_inactive_sec(1800))
assert str.Contains(timerFile, "OnUnitInactiveSec=")
``````````````


#### 定义

`timer_unit_inactive_sec(s int64) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `int64` | 相对单元上次停用的秒数 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 可传入 systemd.Create 的配置选项 |


### unit_after

#### 详细描述
unit_after 设置 [Unit] 段的 After，声明本服务应在指定单元之后启动



参数:

  - after: 依赖的单元名（如 network.target）



返回值:

  - 可传入 systemd.Create 的配置选项




Example:

``````````````yak
_, serviceFile = systemd.Create("myapp", systemd.unit_after("network.target"))
assert str.Contains(serviceFile, "After=network.target")
``````````````


#### 定义

`unit_after(after string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| after | `string` | 依赖的单元名（如 network.target） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 可传入 systemd.Create 的配置选项 |


### unit_before

#### 详细描述
unit_before 设置 [Unit] 段的 Before，声明本服务应在指定单元之前启动



参数:

  - before: 在其之前启动的单元名



返回值:

  - 可传入 systemd.Create 的配置选项




Example:

``````````````yak
_, serviceFile = systemd.Create("myapp", systemd.unit_before("nginx.service"))
assert str.Contains(serviceFile, "Before=nginx.service")
``````````````


#### 定义

`unit_before(before string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| before | `string` | 在其之前启动的单元名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 可传入 systemd.Create 的配置选项 |


### unit_binds_to

#### 详细描述
unit_binds_to 设置 [Unit] 段的 BindsTo，声明强绑定单元（绑定单元停止则本服务也停止）



参数:

  - bindsTo: 绑定的单元名



返回值:

  - 可传入 systemd.Create 的配置选项




Example:

``````````````yak
_, serviceFile = systemd.Create("myapp", systemd.unit_binds_to("docker.service"))
assert str.Contains(serviceFile, "BindsTo=docker.service")
``````````````


#### 定义

`unit_binds_to(bindsTo string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| bindsTo | `string` | 绑定的单元名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 可传入 systemd.Create 的配置选项 |


### unit_description

#### 详细描述
unit_description 设置 [Unit] 段的 Description，用于描述该服务用途



参数:

  - description: 服务描述文本



返回值:

  - 可传入 systemd.Create 的配置选项




Example:

``````````````yak
_, serviceFile = systemd.Create("myapp", systemd.unit_description("My Application"))
assert str.Contains(serviceFile, "Description=My Application")
``````````````


#### 定义

`unit_description(description string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| description | `string` | 服务描述文本 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 可传入 systemd.Create 的配置选项 |


### unit_documentation

#### 详细描述
unit_documentation 设置 [Unit] 段的 Documentation，指向服务文档链接



参数:

  - documentation: 文档地址（如 man 手册或 URL）



返回值:

  - 可传入 systemd.Create 的配置选项




Example:

``````````````yak
_, serviceFile = systemd.Create("myapp", systemd.unit_documentation("https://example.com/docs"))
assert str.Contains(serviceFile, "Documentation=https://example.com/docs")
``````````````


#### 定义

`unit_documentation(documentation string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| documentation | `string` | 文档地址（如 man 手册或 URL） |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 可传入 systemd.Create 的配置选项 |


### unit_extra_line

#### 详细描述
unit_extra_line 向 [Unit] 段追加自定义原始行（多行可用换行分隔）



参数:

  - extraLine: 追加到 [Unit] 段的原始内容



返回值:

  - 可传入 systemd.Create 的配置选项




Example:

``````````````yak
_, serviceFile = systemd.Create("myapp", systemd.unit_extra_line("ConditionPathExists=/etc/myapp.conf"))
assert str.Contains(serviceFile, "ConditionPathExists=/etc/myapp.conf")
``````````````


#### 定义

`unit_extra_line(extraLine string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| extraLine | `string` | 追加到 [Unit] 段的原始内容 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 可传入 systemd.Create 的配置选项 |


### unit_requires

#### 详细描述
unit_requires 设置 [Unit] 段的 Requires，声明强依赖单元（依赖失败则本服务也失败）



参数:

  - requires: 强依赖的单元名



返回值:

  - 可传入 systemd.Create 的配置选项




Example:

``````````````yak
_, serviceFile = systemd.Create("myapp", systemd.unit_requires("postgresql.service"))
assert str.Contains(serviceFile, "Requires=postgresql.service")
``````````````


#### 定义

`unit_requires(requires string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| requires | `string` | 强依赖的单元名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 可传入 systemd.Create 的配置选项 |


### unit_wants

#### 详细描述
unit_wants 设置 [Unit] 段的 Wants，声明弱依赖单元（依赖失败不影响本服务启动）



参数:

  - wants: 弱依赖的单元名



返回值:

  - 可传入 systemd.Create 的配置选项




Example:

``````````````yak
_, serviceFile = systemd.Create("myapp", systemd.unit_wants("redis.service"))
assert str.Contains(serviceFile, "Wants=redis.service")
``````````````


#### 定义

`unit_wants(wants string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| wants | `string` | 弱依赖的单元名 |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` | 可传入 systemd.Create 的配置选项 |


