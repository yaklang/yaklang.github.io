---
sidebar_position: 6
---

# 模块化指纹扫描的“终极”形态

众所周知，端口扫描其实并不能玩出什么新花样，甚至对于这种刚需的需求，我们的潜意识并没有什么额外期待：无非老三样：SYN + TCP Connect + 指纹识别。

那既然我们要谈 “史无前例” 的话，那么总要搞点大部分产品都没有的扩展能力。

## 从 Nmap NSE 谈起
在 Yak Project 上次征文活动中，@剑思庭 师傅和 @ykc 师傅提起，端口扫描如果可以自动执行后续的话，这是最好了，Yakit 可否有 “NSE” 的机制呢？

其实如果要兼容 NSE 的话，需要定制一个 Lua 引擎，把 Nmap 的所有脚本用到的库都实现一遍，这是表面上最 “精致” 的实现方式。但是实际上我并不认为应该这么做，理由有如下：

1. 新的 Lua 并不能很好地和 Yaklang 原生各种各样的库整合起来
2. Lua 将会造成与插件本身的能力与 Yakit 的功能脱节，输出不能很好的在 Yakit 中格式化
3. 同时，Yaklang 的用户如果想要对扫描插件进行编写，需要重新学习一个 “新的”，写起来并不舒适的语言。

与此同时，NSE 中也并不是所有的插件都是我们想要的，对吧？也并不是我们想做的所有的事情（尤其是针对 Web 应用的扫描），NSE 做起来非常别扭。    
所以啊，我们应该有自己的一整套插件机制，来对 yaklang 端口扫描功能进行扩展

## 与 MITM 被动扫描师出同门
众所周知，对于 yaklang 来说，端口扫描本质上就是一段脚本，一个 Yakit 插件而已，那么想要动态加载插件，我们就需要在本来已经是一个动态的脚本中，新增一个 “动态加载” 的过程：

<div align="center">
    <img src="/img/products/yakit/scanning-dynamic-loading-flow.svg" />
</div>

当我们捋清了思路之后，我们发现其实插件本质上就是给原本的流程加了一个 Sidecar。    
当然，我们如果把上面这部分流程图的 Sidecar 部分，拆解成 yaklang 代码，其实非常简单：

```go
// 使用 hook.NewManager() 为当前脚本创建一个可以动态加载插件的管理器
manager = hook.NewManager()

// 依次按照插件名加载插件中的某个函数。
x.Foreach(scriptNames, func(e){
    err = hook.LoadYakitPluginByName(manager, e, "handle")
    if err != nil {
        yakit.Error("load plugin[%v] error: %v", e, err)
    }
})

// handle Result
handleFpResult = func(result) {
    ...
    ...
    // 当扫描结束后，处理指纹扫描结果的时候
    // 将会执行所有已经加载的 “handle” 函数，参数为扫描结果
    manager.CallByName("handle", result)
}
```
当然，在不到 10 行的有效代码中，我们就实现了插件的核心加载流程。


<div align="center">
    <img src="/img/products/yakit/scanning-joke.png" />
</div>

## 使用插件 “平平无奇”
当我们把上面描述的内容做好之后，结合 Yakit 之前在 MITM 被动扫描中积累的 “交互经验”。

<span style={{background:"#fff67acc"}}>“选择插件” => “执行扫描” => “查看结果” </span>其实是成本最低的交互方案，我们可以从下面两个交互案例中发现实际的操作过程：

### 选择插件，开启扫描

![](/img/products/yakit/scanning-turn-scan.png)

### 点击插件日志，查看插件特有的输出内容

![](/img/products/yakit/scanning-turn-scan-log.png)

与此同时，我们在实现上述内容的时候，我们额外的操作除了进行一些基础性检查之外，允许用户随时通过 “插件仓库” 编写自己合适的插件脚本。

同时插件仓库与 Github 仓库已经打通，官方更新的插件随时可以加载进来。

## 编写一个最基础的端口扫描插件
对于已经编写过 Yak 原生插件和尝试过 MITM 插件的同学来说，编写端口扫描插件同样非常简单：他更像是 MITM 插件的一个降级版本，并且可以完美支持 yakit 交互。

![](/img/products/yakit/scanning-base-plugin.png)

我们发现，在端口扫描插件中，最核心的函数在于一个 “handle”，端口扫描的结果将会回传到这个函数中，我们以 “指纹扫描” 扫出某个指纹才触发某些 PoC / Exp 为例子，一个简单的 PoC 应该是这样的：

```go
handle = func(result /* *fp.MatchResult */) {
    // handle match result
    if !(result.IsOpen() && result.Fingerprint != nil) {
        // 说明端口并没有开放
        return
    }
    
    if str.Contains(result.GetServiceName(), "zookeeper") {
        // do sth for zookeeper
    }
}
```
## 举一反三

我们在 yakit-store 中添加了几个比较典型的插件来告诉大家，Yakit 端口扫描插件究竟可以做什么？当然，如果大家编写：

1. 端口扫描 => 按指纹调用 nuclei => 保存漏洞，其实就已经实现了一个非常简单暴力且有效的 “漏洞扫描方案”。
2. 端口扫描 => Web 爬虫 => 分析页面包含 “参数” 的点 => 自动保存 “参数” 相关的 URL 或者请求。从而构建一个更强自动化与定制化能力的 “打点” 系统。
3. 端口扫描 => 特定服务开启 => 调用爆破模块，使用简短有效字典来爆破服务。
4. ...
