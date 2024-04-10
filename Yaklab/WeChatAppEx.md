---
sidebar_position: 7
---
# Yakit 配合 Proxifier 小程序抓包

## Proxifier 介绍

[Proxifier](https://www.proxifier.com/) 是一款功能强大的网络代理工具，它可以让你将网络应用程序通过代理服务器进行连接。它提供了一个简单而灵活的方式，让你能够将任何应用程序的网络流量路由到指定的代理服务器上，从而实现匿名浏览、绕过网络封锁、访问受限网站等功能。

Proxifier 的工作原理是通过修改操作系统的网络设置，将应用程序的网络连接引导到代理服务器上。它支持多种代理协议，包括HTTP、HTTPS、SOCKS v4和SOCKS v5，可以与各种代理服务器兼容。此外，Proxifier 还支持对代理服务器进行负载均衡，以提高网络连接的速度和稳定性。

Proxifier 具有以下一些主要特点和功能：

 - 应用程序透明代理：Proxifier 可以将选定的应用程序的网络连接路由到代理服务器上，应用程序无需任何修改即可通过代理服务器连接网络。

 - 灵活的代理规则：你可以根据自己的需求设置代理规则，例如，可以根据目标主机、端口号、应用程序名称等条件进行灵活的配置。

 - DNS 解析代理：Proxifier 还支持通过代理服务器解析 DNS 请求，这有助于保护隐私并绕过某些网络限制。

 - 代理链：Proxifier 支持将多个代理服务器链接起来，形成代理链，以增加网络连接的安全性和隐私性。

 - 日志记录和统计：Proxifier 可以记录网络连接的日志信息，并提供统计数据，帮助你了解应用程序的网络使用情况。

总之，Proxifier 是一款功能强大的网络代理工具，可以帮助用户实现匿名浏览、绕过封锁、访问受限网站等目的。它简单易用，同时具有灵活的配置选项，适合各种网络代理需求。

## Proxifier proxy server 配置

**1 启动 Yakit MITM:**

使用前请先安装证书，参考 [Yakit 证书安装](/products/mitm/hijack-configuration#ca证书的安装)。

![](/img/products/yakit/WeChatAppEx-1.png)

点击劫持启动。

**2 Proxifier 添加 proxy server:**

![](/img/products/yakit/WeChatAppEx-2.png)

添加完成后，点击 OK 保存。

## 手动添加规则

### Windows Rules配置

Add 添加一条规则，填写如下:

![](/img/products/yakit/WeChatAppEx-3.png)

注意 Applications 填写 `wechatappex.exe`, Action 选择上一步添加的 proxy server, 点击 OK 保存。

![](/img/products/yakit/WeChatAppEx-4.png)

### Mac OS Rules配置

Add 添加一条规则,通过`+`按钮点击:

![](/img/products/yakit/WeChatAppEx-5.png)

通过 command+shift+G 打开 `/Applications/WeChat.app/Contents/MacOS` 路径,

![](/img/products/yakit/WeChatAppEx-6.png)

选择 `Mini Program.app` 

> 注意: 新版 Mac 微信小程序的可执行路径发生了变化，可以尝试此路径 `/Applications/WeChat.app/Contents/MacOS/WeChatAppEx.app/Contents/Frameworks/WeChatAppEx Framework.framework/Versions/C/Helpers/WeChatAppEx Helper.app/Contents/MacOS/WeChatAppEx Helper`

![](/img/products/yakit/WeChatAppEx-7.png)

Proxifier 会自动添加完毕。

![](/img/products/yakit/WeChatAppEx-8.png)

或者直接复制 `"Mini Program.app"; "Mini Program"; com.tencent.xinWeChat.MiniProgram` 到 Applications 中。

> 注意: 新版 Mac 微信小程序可以使用 "WeChatAppEx Helper.app"; "WeChatAppEx Helper"; com.tencent.xinWeChat.WeChatAppEx.helper 作为应用程序名称。

![](/img/products/yakit/WeChatAppEx-8.png)

Action 选择上一步中添加的 proxy server, 点击 OK 保存。

### 开始抓包

使用 PC 端微信打开需要的小程序，然后在 Yakit 中查看抓包数据。

![](/img/products/yakit/WeChatAppEx-9.png)

## 自动导入规则

### Profile 导入

为了方便配置 Proxifier 代理小程序，我们提供了一个 profile，可以通过导入 profile 文件，实现对 微信小程序的代理，profile 规则中内置了 Windows 和 Mac OS 所需的微信小程序规则，如下所示

![](/img/products/yakit/WeChatAppEx-10.png)

同时也内置了一个 Proxy Server 地址，默认Address 为 127.0.0.1 ，端口 8083，类型为 HTTPS，<span style={{ color: 'red' }}>如果你 MITM 监听的端口不为 8083，请修改为 Yakit MITM 监听的端口。</span>

### 导入方式

Windows 和 Mac 的导入方式一致，下载 [Yakit-WeChatAppEx.ppx](https://aliyun-oss.yaklang.com/utils/Yakit-WeChatAppEx.ppx) 后，选择 File -> Import Profile...

![](/img/products/yakit/WeChatAppEx-11.png)

点击后可能会出现如下提示，让你保存当前的规则配置，如果你有其他的一些规则配置，可以点击取消后保存你之前的规则配置

![](/img/products/yakit/WeChatAppEx-12.png)

这里我们没有需要保存的规则配置，直接点击是，选择下载的 [Yakit-WeChatAppEx.ppx](https://aliyun-oss.yaklang.com/utils/Yakit-WeChatAppEx.ppx) 文件

![](/img/products/yakit/WeChatAppEx-13.png)

发现 `Yakit-WeChatAppEx` 配置出现在 Load Profile 中即可

![](/img/products/yakit/WeChatAppEx-14.png)

随后即可对小程序进行抓包

![](/img/products/yakit/WeChatAppEx-15.png)

## 常见错误排查

证书最常见的错误就是，Yakit 证书安装错误，表现为打开小程序后，小程序显示网络错误，或者卡在加载界面，此时 Yakit MITM 也没有相应的流量。

### 网络错误、网络异常的情况

![](/img/products/yakit/WeChatAppEx-16.png)

### 一直显示加载中的情况

![](/img/products/yakit/WeChatAppEx-17.png)

### 解决方案

在 Yakit v1.3.0 添加Windows 自定义安装路径之后，我们<span style={{ color: 'red' }}>需要对 Yakit 的证书进行重新安装</span>，并且证书安装完成后，需要<span style={{ color: 'red' }}>重启微信</span>，随后即可正常抓包

## App 抓包

### 步骤 1: 配置 yakit

在Yakit MITM界面进行配置代理监听的配置，然后点击劫持启动。

![](/img/products/yakit/WeChatAppEx-18.png)

### 步骤 2: 设置手机/模拟器的代理

App的抓包可以用手机或者手机模拟器，操作是相同的，这里以夜神模拟器为例进行演示

**注意：要确保运行 Yakit 的计算机和手机或者模拟器是处于同一网络中的，以便模能够连接到 Yakit 的代理。**

1. 启动夜神 模拟器

2. 配置网络代理：

   1.   在模拟器中，打开设置 > WLAN>长按wiredSSID >修改网络

      ![](/img/products/yakit/WeChatAppEx-19.png)

   2. 在“代理主机名”处输入你电脑的局域网 IP 地址，端口填写为 9999（或你在 Yakit 中设置的端口）。

      ![](/img/products/yakit/WeChatAppEx-20.png)

   3. 保存设置

### 步骤 3: 安装 Yakit 的 CA 证书

关于Android 7.0 以下的证书安装过于简单，网上有太多相关文章，这里不过多的赘述，下面主要介绍Android 7.0以上的证书安装。为了大家便于理解，这里我们先对安卓的证书先简单的做一个介绍。

Android 设备上的 CA 证书和其他系统中一样分为两种，分别是系统证书和用户证书，两者的区别如下：

####  系统 CA 证书

- 内置证书：系统 CA 证书是 Android 系统内置的，由设备制造商或操作系统开发者预装。这些证书通常来源于全球公认的证书颁发机构（CA）。
- 存储位置：如你所述，系统 CA 证书存放在 `/etc/security/cacerts/` 目录下，文件名基于证书的 subjectDN 的 MD5 值。
- 安全性：由于系统 CA 证书是预装的，它们通常被视为更加安全和可信。应用程序和系统服务依赖这些证书来建立安全的 HTTPS 连接。
- 管理权限：修改系统 CA 证书需要 Root 权限，这是因为改动系统证书可能会影响到设备的整体安全性和稳定性。

#### 用户 CA 证书

- 用户安装：用户 CA 证书由设备的用户手动安装。这对于某些特定的使用场景非常有用，比如开发和测试，或者连接需要特定 CA 证书的企业网络。
- 存储和管理：用户 CA 证书可以通过设备的设置菜单安装，通常在 `设置 → 系统安全 → 加密与凭据 → 从 SD 卡安装` 下。安装后，这些证书会显示在 `设置 → 系统安全 → 加密与凭据 → 信任的凭据` 下的“用户”部分。

但是从 Android 7.0 (Nougat) 开始，Google 引入了新的安全增强功能，系统不再信任用户安装的 CA 证书对于所有应用的 HTTPS 流量。为了让 Yakit 能够解密和捕获 HTTPS 流量，我们需要绕过限制，让 APP “信任” Yakit 的 CA 证书。绕过的方式有很多种，这里我们介绍较为简单快捷的一种方式：将Yakit的证书导入在系统证书内。

#### 方式一、机内手动安装证书

1.在Yakit中下载证书，并重命名为yakit.cer 

![](/img/products/yakit/WeChatAppEx-21.png)

2.然后将证书复制到模拟器中（直接拖动到模拟器中即可），证书会出现在/storage/emulated/0/Pictures目录中

![](/img/products/yakit/WeChatAppEx-22.png)

3.进入模拟器中设置-安全-从SD卡安装证书，选择证书导入，然后设置证书名称。第一次添加证书时会要求设置密码。

4.打开文件管理器（记得开启Root权限，模拟器右上角设置中开启）

进入根目录，然后进入/data/misc/user/0/cacerts-added 复制证书

![](/img/products/yakit/WeChatAppEx-23.png)

将证书粘贴到  /etc/security/cacerts 目录下

![](/img/products/yakit/WeChatAppEx-24.png)

点开属性，并赋予权限

![](/img/products/yakit/WeChatAppEx-25.png)

5.访问app或网站即可抓到HTTPS的数据包

![](/img/products/yakit/WeChatAppEx-26.png)

另外，对于其他无法手动安装证书的模拟器，也可以通过第二种方式，原理是一样的。

#### 方式二、adb上传证书

1.直接在Yakit下载证书，然后利用openssl（windows需要自行下载，方法见：）计算证书hash值

```
openssl x509 -inform PEM -subject_hash_old -in yakit证书.crt.pem 
```

![](/img/products/yakit/WeChatAppEx-27.png)

2.重命名“yakit证书.crt.pem”文件为38555061.0 （图中计算出的hash值）

![](/img/products/yakit/WeChatAppEx-28.png)

3.使用adb上传证书至模拟器

（1）找到夜神模拟器的NOX目录下的bin目录，并将重命名之后的证书38555061.0复制到这个文件夹

（2）在这个目录下打开cmd命令行

（3）`adb.exe devices`命令查看设备的连接情况，如图就是正常

![](/img/products/yakit/WeChatAppEx-29.png)

（4）进行上传文件 `adb.exe push 38555061.0 /sdcard/`

（5）以读写方式（rw）重新挂载/分区

```
adb.exe shell
mount -o remount,rw /system 
```

（6）将证书复制到系统安全目录并给读写权限，然后reboot重启模拟器即可

```
cp /sdcard/38555061.0 /system/etc/security/cacerts/
chmod 644 /system/etc/security/cacerts/38555061.0
reboot
```

![](/img/products/yakit/WeChatAppEx-30.png)

（7）在模拟器中设置-安全-信任的凭据中确认证书是否添加

![](/img/products/yakit/WeChatAppEx-31.png)
