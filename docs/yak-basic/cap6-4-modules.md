# 6.8 **模块化和多文件编程**

在考虑模块化和多文件编程时，我们经常需要根据位置定位文件和资源目录。Yak提供三个全局变量用于支持此功能。

- `YAK_MAIN`：bool 类型数据，只有当文件主动调用运行时会设置为 true，其他文件导入本文件时被设置为 false。
- `YAK_FILENAME`：当前执行脚本文件的具体文件名。 
- `YAK_DIR`：当前执行脚本文件所在路径的位置。

## 6.8.1 **导入变量：import函数**

函数定义如下：

```Go
func import(file, exportsName) (var, error)
```

当我们调用此函数的时候，将会把对应的文件载入到Yak代码中，并把变量名为`exportsName`的变量导出，如果执行失败，返回值将会返回`(``nil``, error)`，

一个例子如下, 首先创建`lib.yak`脚本：

```Go
func callee(caller) {
    println("callee is called by", caller)
}
```

创建main.yak脚本：

```Go
res, err = import("lib", "callee")
die(err)

res("main.yak")
```

执行文件main.yak时，将会从当前目录下找到lib.yak文件，并引入其中名为callee的变量，然后当作函数调用，将会打印如下内容。

```SQL
callee is called by main.yak
```

## 6.8.2 **导入另一个脚本：include**

include 只有脚本执行前执行，一定位于代码的最前面，include 相当于把目标文件直接复制到当前脚本中，一起执行。

一个例子如下, 首先创建lib.yak脚本：

```Go
func callee(caller) {
    println("callee is called by", caller)
}
```

创建main.yak脚本：

```Go
include "lib.yak"
callee("main.yak")
```

执行文件main.yak时，将会从当前目录下找到lib.yak文件，并将文件内容替换掉 include 语句，然后后续代码可直接使用在此文件中的所有内容，上述的两个文件将会形成如下的代码

```Go
func callee(caller) {
    println("callee is called by", caller)
}
callee("main.yak")
```

以上代码运行将会打印如下内容。

```Go
callee is called by main.yak
```

## 6.8.3 **判断是否被导入：YAK_MAIN**

当调用运行一个 Yak 脚本时，此脚本内的YAK_MAIN全局变量则会设置为 true。如果使用被其他的包导入时则会被设置为 false。我们仍然使用前面所述的例子，但是对两个函数都加入 YAK_MAIN 的判断。

首先创建lib.yak脚本如下：

```Go
func callee(caller) {
    println("callee is called by", caller)
}
if YAK_MAIN {
    println("i am in lib block")
}
```

使用 include 语法的main.yak脚本如下：

```Go
include "lib.yak"
callee("main.yak")
if YAK_MAIN {
    println("i am in main block")
}
```

执行文件main.yak时， include 将会将lib.yak脚本内内容完全复制，因此lib.yak内的判断YAM_MAIN代码实际上是在main.yak内运行的，因此也为 true。执行结果如下：

```Go
i am in lib block
callee is called by main.yak
i am in main block
```

使用 import 语法的main.yak脚本如下：

```Go
res, err = import("lib", "callee")
die(err)

res("main.yak")
if YAK_MAIN {
    println("i am in main block")
}
```

此时使用 import 语法，则在lib.yak中的YAK_MAIN为 false，不会运行对应判断内代码。输出如下：

```Go
callee is called by main.yak
i am in main block
```

