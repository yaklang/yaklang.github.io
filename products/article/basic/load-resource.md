---
sidebar_position: 3
---

# 插件商店系统

Yakit 并不会把用户数据上传到服务器，如大家所见，Yakit 也并没有用户体系，而是一个非常纯粹的工具样式。

但是 Yakit 本身可以加载各种外部数据，比如 `github.com/yaklang/yakit-store` 中的插件。

## Yakit 的插件指的是？

原生 Yakit 插件核心其实是 Yak 脚本加若干可视化配置，这个脚本可实现

1. 核心能力：`yak` 程序编程中的所有功能：任何 yak 内置模块的扫描，http 请求等均可以实现
1. 参数交互：插件的参数 UI 的接收
1. 输出交互：插件的执行结果存入数据库，或从数据库中读出资产库中的内容

## 如何加载远端插件？

### 更新原理：

Yakit 的官方插件库地址为 `https://github.com/yaklang/yakit-store`

在每次这个插件库更新的时候，将会自动通过 github actions 打包整个插件发布到 aliyun OSS 中。

### Yakit 中的操作

在 Yakit 中只需要点击 "更新 Yakit 插件商店" 按钮即可同步官方仓库中所有的插件。

具体操作如下：

![](/img/products/yakit/update-yakit-store.jpg)

![](/img/products/yakit/yakit-store-update-result.jpg)

### 插件商店界面

![](/img/products/yakit/yakit-store-quick-view.jpg)
