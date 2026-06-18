---
sidebar_position: 18
---

# [dyn] 动态插件

dyn 是 yak 中的动态插件模块，我们在编写 yak exp / poc 代码时，经常需要分工协作。

当多人协作的时候，我们需要提供一种加载别人代码的方式，当然 `include` 是一种方式，但是有时候需要动态加载，而 `include` 只能用于脚本加载的时候，其本质相当于复制了一份别人的代码到我们的代码中。这种方式其实并不好。

为了解决这个问题，我们提供了 dyn 模块来动态加载别人的代码，同时从别人代码中找出自己想要使用的函数（或变量），导出到自己的程序中。

核心函数如下

1. `fn dyn.Eval(var_1: interface {}): error` 简易 Eval，执行代码
1. `fn dyn.IsYakFunc(var_1: interface {}): bool`，判断一个对象是不是可供 yak 调用的函数
1. `fn dyn.LoadVarFromFile(var_1: string, var_2: string, vars: ...yak.yakEvalConfigOpt): ([]*yak.yakVariable, error)`
   从一个文件或者文件夹中加载一批 yak 源码，从这些源码中取出 `var_2` 中名字的变量。把所有结果返回出来，由于可能取到多个文件，所以返回的结果是一个 `*yakVariable` 列表。

:::info

```go title="yakVariable 定义"
type palm/common/yak.(yakVariable) struct {
  Fields(可用字段):
      // 加载的文件名
      FilePath: string
      
      // 文件中 YAK_MOD 变量的名称
      YakMod: string
      
      // 导出的变量的具体值
      Value: interface {}
  StructMethods(结构方法/函数):
  PtrStructMethods(指针结构方法/函数):
}
```

:::

## `dyn.Eval` 同全局函数 `eval`

这是一个最基础动态执行的函数，但是我们只能执行 yak 代码，并不能取到其中的变量。

例如我们可以这样使用

```go {1}
dyn.Eval(`
loglevel("info")
log.info("this message is from eval %v", 1+1)
`)
```

上述代码设置了日志级别，然后返回了一条日志信息

```go
[INFO] 2021-06-22 17:57:14 +0800 [default:value.go:476] this message is from eval 2
```

## `dyn.LoadVarFromFile`：加载 yak 源码文件获取其中的变量

我们创建一个文件

```go title="data/yak-basic/27_dyn.yak" {1}
vars, err := dyn.LoadVarFromFile("data/yak-basic/27_submod.yak", "abc")
die(err)

for _, res := range vars {
    if dyn.IsYakFunc(res.Value) {
        res.Value()
    }
}
```

再创建我们想要引用的模块文件：

```go title="data/yak-basic/27_submod.yak" {1} {5-8}
YAK_MOD = "testmod"

testvar = 123

func abc() {
    log.info("print submod abc...")
    println("am is submod.yak")
}
```

1. 当我们执行 `27_dyn.yak` 的时候，我们会加载 `27_submod.yak` 这个文件中的内容;
2. 加载完成之后，我们会取出 `27_submod.yak` 中的 `abc` 变量
3. 通过 `dyn.IsYakFunc` 函数，我们可以判断 `abc` 是不是一个可用函数
4. 我们判断出取出来的变量是一个函数，直接调用他，执行之后屏幕打印出

```go
am is submod.yak
```

说明我们从一个文件成功引用到了另一个文件的函数。

### `LoadVarFromFile` 参数详细说明

#### 第一个参数：想要导入的文件

第一个参数可以是一个文件夹，也可以是一个文件：

如果是一个文件夹的话，则会导入文件夹下所有的 yak 文件。

如果是一个文件的话，只导出一个 yak 文件。

#### 第二个参数：想要导入的变量名

这个变量名不仅可以导出函数，也可以导出任何变量，不要被局限住。

如果没有该变量，虽然加载了 yak 源文件，但是并不会导入，这点要注意。
