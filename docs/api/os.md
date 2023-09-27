# os

|成员函数|函数描述/介绍|
|:------|:--------|
| [os.Chdir](#chdir) |Chdir changes the current working directory to the named directory.If there is an error, it will be of type *PathError.|
| [os.Chmod](#chmod) |Chmod changes the mode of the named file to mode.If the file is a symbolic link, it changes the mode of the link's target.If there is an error, it wil...|
| [os.Chown](#chown) |Chown changes the numeric uid and gid of the named file.If the file is a symbolic link, it changes the uid and gid of the link's target.A uid or gid o...|
| [os.Clearenv](#clearenv) |Clearenv deletes all environment variables.|
| [os.Environ](#environ) |Environ returns a copy of strings representing the environment,in the form "key=value".|
| [os.Executable](#executable) |Executable returns the path name for the executable that startedthe current process. There is no guarantee that the path is stillpointing to the corre...|
| [os.Exit](#exit) |Exit causes the current program to exit with the given status code.Conventionally, code zero indicates success, non-zero an error.The program terminat...|
| [os.ExpandEnv](#expandenv) |ExpandEnv replaces ${var} or $var in the string according to the valuesof the current environment variables. References to undefinedvariables are repl...|
| [os.GetDefaultDNSServers](#getdefaultdnsservers) ||
| [os.GetMachineID](#getmachineid) ||
| [os.GetRandomAvailableTCPPort](#getrandomavailabletcpport) ||
| [os.GetRandomAvailableUDPPort](#getrandomavailableudpport) ||
| [os.Getegid](#getegid) |Getegid returns the numeric effective group id of the caller.On Windows, it returns -1.|
| [os.Getenv](#getenv) |Getenv retrieves the value of the environment variable named by the key.It returns the value, which will be empty if the variable is not present.To di...|
| [os.Geteuid](#geteuid) |Geteuid returns the numeric effective user id of the caller.On Windows, it returns -1.|
| [os.Getgid](#getgid) |Getgid returns the numeric group id of the caller.On Windows, it returns -1.|
| [os.Getpid](#getpid) |Getpid returns the process id of the caller.|
| [os.Getppid](#getppid) |Getppid returns the process id of the caller's parent.|
| [os.Getuid](#getuid) |Getuid returns the numeric user id of the caller.On Windows, it returns -1.|
| [os.Getwd](#getwd) |Getwd returns a rooted path name corresponding to thecurrent directory. If the current directory can bereached via multiple paths (due to symbolic lin...|
| [os.Hostname](#hostname) |Hostname returns the host name reported by the kernel.|
| [os.IsRemoteTCPPortOpen](#isremotetcpportopen) ||
| [os.IsTCPPortAvailable](#istcpportavailable) ||
| [os.IsTCPPortOpen](#istcpportopen) ||
| [os.IsUDPPortAvailable](#isudpportavailable) ||
| [os.IsUDPPortOpen](#isudpportopen) ||
| [os.LookupEnv](#lookupenv) |LookupEnv retrieves the value of the environment variable namedby the key. If the variable is present in the environment thevalue (which may be empty)...|
| [os.LookupHost](#lookuphost) ||
| [os.LookupIP](#lookupip) ||
| [os.Pipe](#pipe) |Pipe returns a connected pair of Files; reads from r return bytes written to w.It returns the files and an error, if any.|
| [os.Remove](#remove) |Remove removes the named file or (empty) directory.If there is an error, it will be of type *PathError.|
| [os.RemoveAll](#removeall) |RemoveAll removes path and any children it contains.It removes everything it can but returns the first errorit encounters. If the path does not exist,...|
| [os.Rename](#rename) |Rename renames (moves) oldpath to newpath.If newpath already exists and is not a directory, Rename replaces it.OS-specific restrictions may apply when...|
| [os.Setenv](#setenv) |Setenv sets the value of the environment variable named by the key.It returns an error, if any.|
| [os.TempDir](#tempdir) |TempDir returns the default directory to use for temporary files.On Unix systems, it returns $TMPDIR if non-empty, else /tmp.On Windows, it uses GetTe...|
| [os.Unsetenv](#unsetenv) |Unsetenv unsets a single environment variable.|
| [os.WaitConnect](#waitconnect) ||


## 函数定义
### chdir

#### 详细描述
Chdir changes the current working directory to the named directory.If there is an error, it will be of type *PathError.

#### 定义

`Chdir(dir string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| dir | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### chmod

#### 详细描述
Chmod changes the mode of the named file to mode.If the file is a symbolic link, it changes the mode of the link's target.If there is an error, it will be of type *PathError.A different subset of the mode bits are used, depending on theoperating system.On Unix, the mode's permission bits, ModeSetuid, ModeSetgid, andModeSticky are used.On Windows, only the 0200 bit (owner writable) of mode is used; itcontrols whether the file's read-only attribute is set or cleared.The other bits are currently unused. For compatibility with Go 1.12and earlier, use a non-zero mode. Use mode 0400 for a read-onlyfile and 0600 for a readable+writable file.On Plan 9, the mode's permission bits, ModeAppend, ModeExclusive,and ModeTemporary are used.

#### 定义

`Chmod(name string, mode FileMode) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| mode | `FileMode` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### chown

#### 详细描述
Chown changes the numeric uid and gid of the named file.If the file is a symbolic link, it changes the uid and gid of the link's target.A uid or gid of -1 means to not change that value.If there is an error, it will be of type *PathError.On Windows or Plan 9, Chown always returns the syscall.EWINDOWS orEPLAN9 error, wrapped in *PathError.

#### 定义

`Chown(name string, uid int, gid int) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| uid | `int` |   |
| gid | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### clearenv

#### 详细描述
Clearenv deletes all environment variables.

#### 定义

`Clearenv()`


### environ

#### 详细描述
Environ returns a copy of strings representing the environment,in the form "key=value".

#### 定义

`Environ() []string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### executable

#### 详细描述
Executable returns the path name for the executable that startedthe current process. There is no guarantee that the path is stillpointing to the correct executable. If a symlink was used to startthe process, depending on the operating system, the result mightbe the symlink or the path it pointed to. If a stable result isneeded, path/filepath.EvalSymlinks might help.Executable returns an absolute path unless an error occurred.The main use case is finding resources located relative to anexecutable.

#### 定义

`Executable() (string, error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


### exit

#### 详细描述
Exit causes the current program to exit with the given status code.Conventionally, code zero indicates success, non-zero an error.The program terminates immediately; deferred functions are not run.For portability, the status code should be in the range [0, 125].

#### 定义

`Exit(code int)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| code | `int` |   |


### expandenv

#### 详细描述
ExpandEnv replaces ${var} or $var in the string according to the valuesof the current environment variables. References to undefinedvariables are replaced by the empty string.

#### 定义

`ExpandEnv(s string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| s | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### getdefaultdnsservers

#### 详细描述


#### 定义

`GetDefaultDNSServers() []string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### getmachineid

#### 详细描述


#### 定义

`GetMachineID() string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### getrandomavailabletcpport

#### 详细描述


#### 定义

`GetRandomAvailableTCPPort() int`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` |   |


### getrandomavailableudpport

#### 详细描述


#### 定义

`GetRandomAvailableUDPPort() int`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` |   |


### getegid

#### 详细描述
Getegid returns the numeric effective group id of the caller.On Windows, it returns -1.

#### 定义

`Getegid() int`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` |   |


### getenv

#### 详细描述
Getenv retrieves the value of the environment variable named by the key.It returns the value, which will be empty if the variable is not present.To distinguish between an empty value and an unset value, use LookupEnv.

#### 定义

`Getenv(key string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### geteuid

#### 详细描述
Geteuid returns the numeric effective user id of the caller.On Windows, it returns -1.

#### 定义

`Geteuid() int`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` |   |


### getgid

#### 详细描述
Getgid returns the numeric group id of the caller.On Windows, it returns -1.

#### 定义

`Getgid() int`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` |   |


### getpid

#### 详细描述
Getpid returns the process id of the caller.

#### 定义

`Getpid() int`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` |   |


### getppid

#### 详细描述
Getppid returns the process id of the caller's parent.

#### 定义

`Getppid() int`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` |   |


### getuid

#### 详细描述
Getuid returns the numeric user id of the caller.On Windows, it returns -1.

#### 定义

`Getuid() int`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` |   |


### getwd

#### 详细描述
Getwd returns a rooted path name corresponding to thecurrent directory. If the current directory can bereached via multiple paths (due to symbolic links),Getwd may return any one of them.

#### 定义

`Getwd() (dir string, err error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| dir | `string` |   |
| err | `error` |   |


### hostname

#### 详细描述
Hostname returns the host name reported by the kernel.

#### 定义

`Hostname() (name string, err error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |
| err | `error` |   |


### isremotetcpportopen

#### 详细描述


#### 定义

`IsRemoteTCPPortOpen(host string, p int) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| host | `string` |   |
| p | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### istcpportavailable

#### 详细描述


#### 定义

`IsTCPPortAvailable(p int) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| p | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### istcpportopen

#### 详细描述


#### 定义

`IsTCPPortOpen(p int) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| p | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### isudpportavailable

#### 详细描述


#### 定义

`IsUDPPortAvailable(p int) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| p | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### isudpportopen

#### 详细描述


#### 定义

`IsUDPPortOpen(p int) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| p | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### lookupenv

#### 详细描述
LookupEnv retrieves the value of the environment variable namedby the key. If the variable is present in the environment thevalue (which may be empty) is returned and the boolean is true.Otherwise the returned value will be empty and the boolean willbe false.

#### 定义

`LookupEnv(key string) (string, bool)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `bool` |   |


### lookuphost

#### 详细描述


#### 定义

`LookupHost(i string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### lookupip

#### 详细描述


#### 定义

`LookupIP(i string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### pipe

#### 详细描述
Pipe returns a connected pair of Files; reads from r return bytes written to w.It returns the files and an error, if any.

#### 定义

`Pipe() (r *File, w *File, err error)`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r | `*File` |   |
| w | `*File` |   |
| err | `error` |   |


### remove

#### 详细描述
Remove removes the named file or (empty) directory.If there is an error, it will be of type *PathError.

#### 定义

`Remove(name string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| name | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### removeall

#### 详细描述
RemoveAll removes path and any children it contains.It removes everything it can but returns the first errorit encounters. If the path does not exist, RemoveAllreturns nil (no error).If there is an error, it will be of type *PathError.

#### 定义

`RemoveAll(path string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### rename

#### 详细描述
Rename renames (moves) oldpath to newpath.If newpath already exists and is not a directory, Rename replaces it.OS-specific restrictions may apply when oldpath and newpath are in different directories.Even within the same directory, on non-Unix platforms Rename is not an atomic operation.If there is an error, it will be of type *LinkError.

#### 定义

`Rename(oldpath string, newpath string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| oldpath | `string` |   |
| newpath | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### setenv

#### 详细描述
Setenv sets the value of the environment variable named by the key.It returns an error, if any.

#### 定义

`Setenv(key string, value string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |
| value | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### tempdir

#### 详细描述
TempDir returns the default directory to use for temporary files.On Unix systems, it returns $TMPDIR if non-empty, else /tmp.On Windows, it uses GetTempPath, returning the first non-emptyvalue from %TMP%, %TEMP%, %USERPROFILE%, or the Windows directory.On Plan 9, it returns /tmp.The directory is neither guaranteed to exist nor have accessiblepermissions.

#### 定义

`TempDir() string`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### unsetenv

#### 详细描述
Unsetenv unsets a single environment variable.

#### 定义

`Unsetenv(key string) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### waitconnect

#### 详细描述


#### 定义

`WaitConnect(addr string, timeout float64) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| addr | `string` |   |
| timeout | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


