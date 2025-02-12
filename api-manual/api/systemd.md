# systemd

|函数名|函数描述/介绍|
|:------|:--------|
| [systemd.Create](#create) ||
| [systemd.extra_raw](#extra_raw) ||
| [systemd.install_wanted_by](#install_wanted_by) ||
| [systemd.service_environment](#service_environment) ||
| [systemd.service_environment_file](#service_environment_file) ||
| [systemd.service_exec_start](#service_exec_start) ||
| [systemd.service_exec_start_post](#service_exec_start_post) ||
| [systemd.service_exec_start_pre](#service_exec_start_pre) ||
| [systemd.service_exec_stop](#service_exec_stop) ||
| [systemd.service_exec_stop_post](#service_exec_stop_post) ||
| [systemd.service_group](#service_group) ||
| [systemd.service_kill9](#service_kill9) ||
| [systemd.service_kill_mode](#service_kill_mode) ||
| [systemd.service_kill_signal](#service_kill_signal) ||
| [systemd.service_raw](#service_raw) ||
| [systemd.service_restart](#service_restart) ||
| [systemd.service_restart_sec](#service_restart_sec) ||
| [systemd.service_stderr](#service_stderr) ||
| [systemd.service_stdin](#service_stdin) ||
| [systemd.service_stdout](#service_stdout) ||
| [systemd.service_timeout_start_sec](#service_timeout_start_sec) ||
| [systemd.service_type](#service_type) ||
| [systemd.service_umask](#service_umask) ||
| [systemd.service_user](#service_user) ||
| [systemd.timer_active_sec](#timer_active_sec) ||
| [systemd.timer_boot_sec](#timer_boot_sec) ||
| [systemd.timer_calendar](#timer_calendar) ||
| [systemd.timer_raw](#timer_raw) ||
| [systemd.timer_startup_sec](#timer_startup_sec) ||
| [systemd.timer_unit](#timer_unit) ||
| [systemd.timer_unit_active_sec](#timer_unit_active_sec) ||
| [systemd.timer_unit_inactive_sec](#timer_unit_inactive_sec) ||
| [systemd.unit_after](#unit_after) ||
| [systemd.unit_before](#unit_before) ||
| [systemd.unit_binds_to](#unit_binds_to) ||
| [systemd.unit_description](#unit_description) ||
| [systemd.unit_documentation](#unit_documentation) ||
| [systemd.unit_extra_line](#unit_extra_line) ||
| [systemd.unit_requires](#unit_requires) ||
| [systemd.unit_wants](#unit_wants) ||


## 函数定义
### Create

#### 详细描述


#### 定义

`Create(name string, opt ...ConfigOption) (string, string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| opt | `...ConfigOption` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `string` |   |


### extra_raw

#### 详细描述


#### 定义

`extra_raw(i string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### install_wanted_by

#### 详细描述


#### 定义

`install_wanted_by(wantedBy string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| wantedBy | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### service_environment

#### 详细描述


#### 定义

`service_environment(environment string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| environment | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### service_environment_file

#### 详细描述


#### 定义

`service_environment_file(environmentFile string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| environmentFile | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### service_exec_start

#### 详细描述


#### 定义

`service_exec_start(execStart string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| execStart | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### service_exec_start_post

#### 详细描述


#### 定义

`service_exec_start_post(execStartPost string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| execStartPost | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### service_exec_start_pre

#### 详细描述


#### 定义

`service_exec_start_pre(execStartPre string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| execStartPre | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### service_exec_stop

#### 详细描述


#### 定义

`service_exec_stop(execStop string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| execStop | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### service_exec_stop_post

#### 详细描述


#### 定义

`service_exec_stop_post(execStopPost string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| execStopPost | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### service_group

#### 详细描述


#### 定义

`service_group(group string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| group | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### service_kill9

#### 详细描述


#### 定义

`service_kill9()`


### service_kill_mode

#### 详细描述


#### 定义

`service_kill_mode(killMode string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| killMode | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### service_kill_signal

#### 详细描述


#### 定义

`service_kill_signal(killSignal string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| killSignal | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### service_raw

#### 详细描述


#### 定义

`service_raw(extraLine string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| extraLine | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### service_restart

#### 详细描述


#### 定义

`service_restart(restart string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| restart | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### service_restart_sec

#### 详细描述


#### 定义

`service_restart_sec(restartSec float64) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| restartSec | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### service_stderr

#### 详细描述


#### 定义

`service_stderr(standardError string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| standardError | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### service_stdin

#### 详细描述


#### 定义

`service_stdin(standardInput string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| standardInput | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### service_stdout

#### 详细描述


#### 定义

`service_stdout(standardOutput string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| standardOutput | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### service_timeout_start_sec

#### 详细描述


#### 定义

`service_timeout_start_sec(timeoutStartSec float64) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| timeoutStartSec | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### service_type

#### 详细描述


#### 定义

`service_type(serviceType string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| serviceType | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### service_umask

#### 详细描述


#### 定义

`service_umask(umask string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| umask | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### service_user

#### 详细描述


#### 定义

`service_user(user string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| user | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### timer_active_sec

#### 详细描述


#### 定义

`timer_active_sec(onActiveSec int64) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| onActiveSec | `int64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### timer_boot_sec

#### 详细描述


#### 定义

`timer_boot_sec(onBootSec int64) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| onBootSec | `int64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### timer_calendar

#### 详细描述


#### 定义

`timer_calendar(onCalendar string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| onCalendar | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### timer_raw

#### 详细描述


#### 定义

`timer_raw(extraLine string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| extraLine | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### timer_startup_sec

#### 详细描述


#### 定义

`timer_startup_sec(onStartupSec int64) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| onStartupSec | `int64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### timer_unit

#### 详细描述


#### 定义

`timer_unit(unit string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| unit | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### timer_unit_active_sec

#### 详细描述


#### 定义

`timer_unit_active_sec(onUnitActiveSec int64) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| onUnitActiveSec | `int64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### timer_unit_inactive_sec

#### 详细描述


#### 定义

`timer_unit_inactive_sec(s int64) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `int64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### unit_after

#### 详细描述


#### 定义

`unit_after(after string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| after | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### unit_before

#### 详细描述


#### 定义

`unit_before(before string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| before | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### unit_binds_to

#### 详细描述


#### 定义

`unit_binds_to(bindsTo string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| bindsTo | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### unit_description

#### 详细描述


#### 定义

`unit_description(description string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| description | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### unit_documentation

#### 详细描述


#### 定义

`unit_documentation(documentation string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| documentation | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### unit_extra_line

#### 详细描述


#### 定义

`unit_extra_line(extraLine string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| extraLine | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### unit_requires

#### 详细描述


#### 定义

`unit_requires(requires string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| requires | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


### unit_wants

#### 详细描述


#### 定义

`unit_wants(wants string) ConfigOption`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| wants | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `ConfigOption` |   |


