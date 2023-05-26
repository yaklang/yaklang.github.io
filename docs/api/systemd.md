# systemd


|成员函数|函数描述/介绍|
|:------|:--------|
 | [systemd.Create](#systemdcreate) |  |
 | [systemd.extra_raw](#systemdextra_raw) |  |
 | [systemd.install_wanted_by](#systemdinstall_wanted_by) |  |
 | [systemd.service_environment](#systemdservice_environment) |  |
 | [systemd.service_environment_file](#systemdservice_environment_file) |  |
 | [systemd.service_exec_start](#systemdservice_exec_start) |  |
 | [systemd.service_exec_start_post](#systemdservice_exec_start_post) |  |
 | [systemd.service_exec_start_pre](#systemdservice_exec_start_pre) |  |
 | [systemd.service_exec_stop](#systemdservice_exec_stop) |  |
 | [systemd.service_exec_stop_post](#systemdservice_exec_stop_post) |  |
 | [systemd.service_group](#systemdservice_group) |  |
 | [systemd.service_kill9](#systemdservice_kill9) |  |
 | [systemd.service_kill_mode](#systemdservice_kill_mode) |  |
 | [systemd.service_kill_signal](#systemdservice_kill_signal) |  |
 | [systemd.service_raw](#systemdservice_raw) |  |
 | [systemd.service_restart](#systemdservice_restart) |  |
 | [systemd.service_restart_sec](#systemdservice_restart_sec) |  |
 | [systemd.service_stderr](#systemdservice_stderr) |  |
 | [systemd.service_stdin](#systemdservice_stdin) |  |
 | [systemd.service_stdout](#systemdservice_stdout) |  |
 | [systemd.service_timeout_start_sec](#systemdservice_timeout_start_sec) |  |
 | [systemd.service_type](#systemdservice_type) |  |
 | [systemd.service_umask](#systemdservice_umask) |  |
 | [systemd.service_user](#systemdservice_user) |  |
 | [systemd.timer_active_sec](#systemdtimer_active_sec) |  |
 | [systemd.timer_boot_sec](#systemdtimer_boot_sec) |  |
 | [systemd.timer_calendar](#systemdtimer_calendar) |  |
 | [systemd.timer_raw](#systemdtimer_raw) |  |
 | [systemd.timer_startup_sec](#systemdtimer_startup_sec) |  |
 | [systemd.timer_unit](#systemdtimer_unit) |  |
 | [systemd.timer_unit_active_sec](#systemdtimer_unit_active_sec) |  |
 | [systemd.timer_unit_inactive_sec](#systemdtimer_unit_inactive_sec) |  |
 | [systemd.unit_after](#systemdunit_after) |  |
 | [systemd.unit_before](#systemdunit_before) |  |
 | [systemd.unit_binds_to](#systemdunit_binds_to) |  |
 | [systemd.unit_description](#systemdunit_description) |  |
 | [systemd.unit_documentation](#systemdunit_documentation) |  |
 | [systemd.unit_extra_line](#systemdunit_extra_line) |  |
 | [systemd.unit_requires](#systemdunit_requires) |  |
 | [systemd.unit_wants](#systemdunit_wants) |  |




 



## 函数定义

### systemd.Create



#### 详细描述



#### 定义：

`func systemd.Create(v1: string, v2 ...systemd.ConfigOption) return (r0: string, r1: string)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...systemd.ConfigOption` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `string` |   |
| r1 | `string` |   |


 
### systemd.extra_raw



#### 详细描述



#### 定义：

`func systemd.extra_raw(v1: string) return (r0: func ConfigOption(v1: *systemd.SystemdServiceConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *systemd.SystemdServiceConfig) ` |   |


 
### systemd.install_wanted_by



#### 详细描述



#### 定义：

`func systemd.install_wanted_by(v1: string) return (r0: func ConfigOption(v1: *systemd.SystemdServiceConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *systemd.SystemdServiceConfig) ` |   |


 
### systemd.service_environment



#### 详细描述



#### 定义：

`func systemd.service_environment(v1: string) return (r0: func ConfigOption(v1: *systemd.SystemdServiceConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *systemd.SystemdServiceConfig) ` |   |


 
### systemd.service_environment_file



#### 详细描述



#### 定义：

`func systemd.service_environment_file(v1: string) return (r0: func ConfigOption(v1: *systemd.SystemdServiceConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *systemd.SystemdServiceConfig) ` |   |


 
### systemd.service_exec_start



#### 详细描述



#### 定义：

`func systemd.service_exec_start(v1: string) return (r0: func ConfigOption(v1: *systemd.SystemdServiceConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *systemd.SystemdServiceConfig) ` |   |


 
### systemd.service_exec_start_post



#### 详细描述



#### 定义：

`func systemd.service_exec_start_post(v1: string) return (r0: func ConfigOption(v1: *systemd.SystemdServiceConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *systemd.SystemdServiceConfig) ` |   |


 
### systemd.service_exec_start_pre



#### 详细描述



#### 定义：

`func systemd.service_exec_start_pre(v1: string) return (r0: func ConfigOption(v1: *systemd.SystemdServiceConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *systemd.SystemdServiceConfig) ` |   |


 
### systemd.service_exec_stop



#### 详细描述



#### 定义：

`func systemd.service_exec_stop(v1: string) return (r0: func ConfigOption(v1: *systemd.SystemdServiceConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *systemd.SystemdServiceConfig) ` |   |


 
### systemd.service_exec_stop_post



#### 详细描述



#### 定义：

`func systemd.service_exec_stop_post(v1: string) return (r0: func ConfigOption(v1: *systemd.SystemdServiceConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *systemd.SystemdServiceConfig) ` |   |


 
### systemd.service_group



#### 详细描述



#### 定义：

`func systemd.service_group(v1: string) return (r0: func ConfigOption(v1: *systemd.SystemdServiceConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *systemd.SystemdServiceConfig) ` |   |


 
### systemd.service_kill9



#### 详细描述



#### 定义：

`func systemd.service_kill9() return (r0: func ConfigOption(v1: *systemd.SystemdServiceConfig) )`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *systemd.SystemdServiceConfig) ` |   |


 
### systemd.service_kill_mode



#### 详细描述



#### 定义：

`func systemd.service_kill_mode(v1: string) return (r0: func ConfigOption(v1: *systemd.SystemdServiceConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *systemd.SystemdServiceConfig) ` |   |


 
### systemd.service_kill_signal



#### 详细描述



#### 定义：

`func systemd.service_kill_signal(v1: string) return (r0: func ConfigOption(v1: *systemd.SystemdServiceConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *systemd.SystemdServiceConfig) ` |   |


 
### systemd.service_raw



#### 详细描述



#### 定义：

`func systemd.service_raw(v1: string) return (r0: func ConfigOption(v1: *systemd.SystemdServiceConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *systemd.SystemdServiceConfig) ` |   |


 
### systemd.service_restart



#### 详细描述



#### 定义：

`func systemd.service_restart(v1: string) return (r0: func ConfigOption(v1: *systemd.SystemdServiceConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *systemd.SystemdServiceConfig) ` |   |


 
### systemd.service_restart_sec



#### 详细描述



#### 定义：

`func systemd.service_restart_sec(v1: float64) return (r0: func ConfigOption(v1: *systemd.SystemdServiceConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `float64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *systemd.SystemdServiceConfig) ` |   |


 
### systemd.service_stderr



#### 详细描述



#### 定义：

`func systemd.service_stderr(v1: string) return (r0: func ConfigOption(v1: *systemd.SystemdServiceConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *systemd.SystemdServiceConfig) ` |   |


 
### systemd.service_stdin



#### 详细描述



#### 定义：

`func systemd.service_stdin(v1: string) return (r0: func ConfigOption(v1: *systemd.SystemdServiceConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *systemd.SystemdServiceConfig) ` |   |


 
### systemd.service_stdout



#### 详细描述



#### 定义：

`func systemd.service_stdout(v1: string) return (r0: func ConfigOption(v1: *systemd.SystemdServiceConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *systemd.SystemdServiceConfig) ` |   |


 
### systemd.service_timeout_start_sec



#### 详细描述



#### 定义：

`func systemd.service_timeout_start_sec(v1: float64) return (r0: func ConfigOption(v1: *systemd.SystemdServiceConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `float64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *systemd.SystemdServiceConfig) ` |   |


 
### systemd.service_type



#### 详细描述



#### 定义：

`func systemd.service_type(v1: string) return (r0: func ConfigOption(v1: *systemd.SystemdServiceConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *systemd.SystemdServiceConfig) ` |   |


 
### systemd.service_umask



#### 详细描述



#### 定义：

`func systemd.service_umask(v1: string) return (r0: func ConfigOption(v1: *systemd.SystemdServiceConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *systemd.SystemdServiceConfig) ` |   |


 
### systemd.service_user



#### 详细描述



#### 定义：

`func systemd.service_user(v1: string) return (r0: func ConfigOption(v1: *systemd.SystemdServiceConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *systemd.SystemdServiceConfig) ` |   |


 
### systemd.timer_active_sec



#### 详细描述



#### 定义：

`func systemd.timer_active_sec(v1: int64) return (r0: func ConfigOption(v1: *systemd.SystemdServiceConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *systemd.SystemdServiceConfig) ` |   |


 
### systemd.timer_boot_sec



#### 详细描述



#### 定义：

`func systemd.timer_boot_sec(v1: int64) return (r0: func ConfigOption(v1: *systemd.SystemdServiceConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *systemd.SystemdServiceConfig) ` |   |


 
### systemd.timer_calendar



#### 详细描述



#### 定义：

`func systemd.timer_calendar(v1: string) return (r0: func ConfigOption(v1: *systemd.SystemdServiceConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *systemd.SystemdServiceConfig) ` |   |


 
### systemd.timer_raw



#### 详细描述



#### 定义：

`func systemd.timer_raw(v1: string) return (r0: func ConfigOption(v1: *systemd.SystemdServiceConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *systemd.SystemdServiceConfig) ` |   |


 
### systemd.timer_startup_sec



#### 详细描述



#### 定义：

`func systemd.timer_startup_sec(v1: int64) return (r0: func ConfigOption(v1: *systemd.SystemdServiceConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *systemd.SystemdServiceConfig) ` |   |


 
### systemd.timer_unit



#### 详细描述



#### 定义：

`func systemd.timer_unit(v1: string) return (r0: func ConfigOption(v1: *systemd.SystemdServiceConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *systemd.SystemdServiceConfig) ` |   |


 
### systemd.timer_unit_active_sec



#### 详细描述



#### 定义：

`func systemd.timer_unit_active_sec(v1: int64) return (r0: func ConfigOption(v1: *systemd.SystemdServiceConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *systemd.SystemdServiceConfig) ` |   |


 
### systemd.timer_unit_inactive_sec



#### 详细描述



#### 定义：

`func systemd.timer_unit_inactive_sec(v1: int64) return (r0: func ConfigOption(v1: *systemd.SystemdServiceConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `int64` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *systemd.SystemdServiceConfig) ` |   |


 
### systemd.unit_after



#### 详细描述



#### 定义：

`func systemd.unit_after(v1: string) return (r0: func ConfigOption(v1: *systemd.SystemdServiceConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *systemd.SystemdServiceConfig) ` |   |


 
### systemd.unit_before



#### 详细描述



#### 定义：

`func systemd.unit_before(v1: string) return (r0: func ConfigOption(v1: *systemd.SystemdServiceConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *systemd.SystemdServiceConfig) ` |   |


 
### systemd.unit_binds_to



#### 详细描述



#### 定义：

`func systemd.unit_binds_to(v1: string) return (r0: func ConfigOption(v1: *systemd.SystemdServiceConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *systemd.SystemdServiceConfig) ` |   |


 
### systemd.unit_description



#### 详细描述



#### 定义：

`func systemd.unit_description(v1: string) return (r0: func ConfigOption(v1: *systemd.SystemdServiceConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *systemd.SystemdServiceConfig) ` |   |


 
### systemd.unit_documentation



#### 详细描述



#### 定义：

`func systemd.unit_documentation(v1: string) return (r0: func ConfigOption(v1: *systemd.SystemdServiceConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *systemd.SystemdServiceConfig) ` |   |


 
### systemd.unit_extra_line



#### 详细描述



#### 定义：

`func systemd.unit_extra_line(v1: string) return (r0: func ConfigOption(v1: *systemd.SystemdServiceConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *systemd.SystemdServiceConfig) ` |   |


 
### systemd.unit_requires



#### 详细描述



#### 定义：

`func systemd.unit_requires(v1: string) return (r0: func ConfigOption(v1: *systemd.SystemdServiceConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *systemd.SystemdServiceConfig) ` |   |


 
### systemd.unit_wants



#### 详细描述



#### 定义：

`func systemd.unit_wants(v1: string) return (r0: func ConfigOption(v1: *systemd.SystemdServiceConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOption(v1: *systemd.SystemdServiceConfig) ` |   |


 


