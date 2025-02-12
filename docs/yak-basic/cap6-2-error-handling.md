# 错误处理

# 6.6 错误处理

在程序运行中，可能会出现很多的错误以及崩溃。

比如以下这个代码样例：

```Go
a = 1/0
println("after a = ", a)
```

程序运行时将会产生以下的信息： 

```Go
Panic Stack:
File "/var/folders/8f/m14c7x3x1c55rzvk5qvvb1w00000gn/T/yaki-code-3822814179.yak", in __yak_main__
--> 1 a = 1/0

YakVM Panic: runtime error: integer divide by zero
```

这就是在提示程序发生了崩溃。当崩溃发生时，程序将会直接退出，不会执行后续的代码，在这个示例中可以看到后续的`println("after a = ", a)`并没有被执行。

在大多数时候程序的程序的崩溃是应当被恰当处理的，当崩溃被处理之后，程序将不会直接退出，而是继续执行崩溃处理代码之后的代码，这就保证了代码的健壮。

崩溃可能由各种原因引发，包括运行时崩溃（例如，尝试从长度为零的列表中取值）和手动触发的崩溃（例如，调用 panic 或 die 函数）。

另一方面，还有许多 Yak 的库函数是可能执行失败的，这些标准库函数不能产生崩溃，而是使用返回值的方式表达执行的失败，这些函数通常会在返回值的最后有一个 error 类型的值。如果函数调用没有出现错误，此返回值为 nil；如果函数发生错误，将返回一个包含错误信息的 error 对象。调用该函数的时候，只需要通过判断其最后一个返回值是否为nil即可判断该函数执行是否成功。

## 6.6.1 **处理错误**

当调用可能返回错误的函数时，Yak 的常见处理方式如下：

```Plain
ret, err = func(arg)
if err != nil {
    // 处理错误，通常是返回或触发崩溃
}
```

如果函数返回错误，则该函数调用的其它返回值通常不可信。在大多数情况下，发生错误后应终止当前函数的后续执行，以防止错误的返回值引发后续代码的问题。 Yak 中常用 panic 函数将错误转换为崩溃。函数 panic 接受一个参数，该参数就是崩溃信息。函数 die 也接受一个参数，但它会检查该参数是否为 nil。如果参数不为 nil，则直接调用 panic；否则，不执行任何操作。

Yak 还支持一种简化的错误处理语法。在函数调用后使用 `~`，表示此函数可能返回错误，并检查其最后一个参数（即返回的错误）是否为 nil。如果不为 nil，则调用 panic 函数。

以下是三种错误处理方式的等价代码：

```Plain
// 使用 panic 进行错误处理
ret, err = func(arg)
if err != nil {
    panic(err)
}
// 使用 die 进行错误处理
ret, err = func(arg)
die(err)
// 使用 ~ 进行错误处理
ret = func(arg)~
```

注意，不仅在调用可能返回错误的函数时可以使用 panic，而且在代码的任何位置都可以使用 panic 来表示错误或崩溃。

## 6.6.2 **使用Panic和Recover进行错误处理**

如前文所述，panic 函数会触发一个崩溃。当崩溃发生时，它会立即终止当前函数并返回到上层函数，一层层向上返回。当返回到最外层时，程序会直接崩溃。 recover 是一个函数，当调用它时，它会立即检查是否存在崩溃的向上传递。如果存在，recover 就会捕获这个崩溃，并停止向上的传递，同时返回这个崩溃的信息。 一般来说，发生时，将停止执行任何后续语句，并向上层函数传递。当函数退出时，无论是否存在崩溃，都会运行函数的 defer 语句。因此，通常会使用 defer 和 recover 配合进行错误处理。 以下是一个代码示例：

```Plain
defer fn{
    println(recover()) // 设置 main 函数的错误处理
}
a = () =>{
    panic("panic in a") // 触发错误
}
b = () => {
    defer fn{
        println("defer in b") // b 函数的延迟函数
    }
    a()
    println("after a function call ") // 当 a 函数调用结束
}
b()
```

在这段代码中，首先在 main 函数中设置了一个 defer 函数来处理错误。然后调用函数 b，函数 b 再调用函数 a，函数 a 调用 panic 触发崩溃。这会立即退出函数 a 并返回到函数 b，然后运行函数 b 的 defer 函数打印信息并立即退出函数 b，返回到 main 函数。最后，在运行 main 函数的 defer 函数时，recover被调用，捕获并打印错误。 这段代码的运行结果如下：

```Plaintext
defer in b
panic in a
```

## 6.6.3 **使用try-catch处理崩溃**

Yak 将错误通过 panic 和相关语法转换为崩溃。对于崩溃的处理，Yak 提供了两种方式。前面一小节已经介绍了recover的崩溃处理方案，这一小节将介绍第二种方案，即 try-catch 模式。语法如下：

```Plain
try {
    // 代码
    // 如果此处出现崩溃，则直接跳到 catch 代码块执行
} catch err {
    // 崩溃处理代码
    // 崩溃信息即为 panic 的参数，可以通过 err 变量获取
} finally {
    // 清理代码
    // 无论 try 或 catch 代码块执行结束后，都会执行 finally 代码块
}
```

在 catch 语句中，崩溃信息存储在名为 err 的变量中。如果不需要获取该信息，可以省略 err。 以下是一个代码示例：

```Plain
try {
    println("We are in Trying")
    panic("panic in try!")
} catch err {
    println("Fetch Error" + f": ${err}")
} finally {
    println("working in finally")
}
```

这段代码首先在 try 语句中主动调用 panic 触发崩溃，因为在 try 语句内，所以会跳转到 catch 代码块执行，其中的错误信息存储在 err 变量中。最后，无论是否发生崩溃，都会执行 finally 代码块。代码示例的输出如下：

```Plaintext
We are in Trying
Fetch Error: panic in try!
working in finally
```

