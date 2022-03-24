---
sidebar_position: 5
---

# 专项漏洞数据库更新

在 Yakit 的 "专项漏洞" 检测中，我们大量使用了 "Nuclei Yaml PoC" 作为通用支持。

在实际的使用过程中，Yakit 并不 "自带" Yaml PoC，所以用户需要自行安装并加载到 Yakit 插件数据库中。

:::info

本文描述的更新内容与 yak 子命令操作略有版本差异，推荐在 yak 版本 `>= 1.0.13-sp30` 使用。 

:::

## 自动更新

:::caution 注意更新时用户权限

推荐使用非 Root 用户更新 Nuclei Yaml PoC

:::

![](/img/products/yakit/yakit-update-yaml-poc.jpg)

按照途中按钮即可操作更新

:::danger 更新失败？

### 自动更新失败的原因？

#### 1. nuclei 配置文件权限原因：

nuclei templates 在更新的时候依赖于本地 `~/.config/nuclei/*` 下的内容作为 "记录"。

一般情况下，我们可以不关心这些内容，但是由于用户某次使用 "root" 权限更新导致 `~/.config/nuclei` 的用户组变为 root。

然而再次普通用户更新的时候，权限不足，导致更新失败。

针对这种情况，处理方案非常简单：

使用 `sudo chown -R [your-unix-user] ~/.config/nuclei` 改变用户配置文件权限组即可。

#### 2. 网络问题

中国大陆不同运营商对 Github 的策略有所不同，一般来说均可更新成功，这种情况，用户可以挂载代理更新即可。

#### 3. 数据库权限配置问题

一般来说，在新版本的 Yakit(>=1.0.13-sp4) 界面上如果发现数据库有权限问题，将会显示自动修复的按钮，点击即可自动修复。

如果自动修复失败，一般来说也是权限问题：通常 `sudo chown -R [your-unix-user] ~/yakit-projects/` 即可修复

:::

## 自动更新失效？试试手动


### 步骤一：手动下载 PoC

:::success 提示

推荐使用普通用户权限 

:::

```go
cd ~
git clone https://github.com/projectdiscovery/nuclei-templates --depth 1
```

### 步骤二：加载本地 PoC

本地 PoC 的地址在 `~/nuclei-templates` 中，在执行步骤二的时候，请确保用户更新 `nuclei-templates` 成功

#### 使用 Yakit-Store 中的 "重置 nuclei Yaml PoC 数据库" 插件

![](/img/products/yakit/yakit-update-yakit-store-reset-nuclei-database.jpg)

我们在插件仓库中可以看到 "重置 nuclei Yaml PoC 数据库" 这个插件，点击这个插件即可加载用户下载到本地的 `nuclei-templates` 

#### 备选：在 Yak Runner 中重置 nuclei yaml poc 数据库

在 yak 核心引擎的 `>= v1.0.13-sp30` 版本中，执行如下操作等效于使用上述插件。

```go
loglevel("info")
nuclei.RemoveDatabase()
nuclei.UpdateDatabase()
```