---
sidebar_position: 5
---

# 爆破与未授权检测

### 功能介绍：
该模块可以对ftp、memcached、mongodb、mssql、mysql、postgres、rdp、redis、smb、ssh、tomcat、vnc进行口令的爆破。
### 使用方法
输入目标，在左侧选择爆破类型以后，点击`开始检测`，即可对用户名和密码进行爆破。除了输入目标之外，还支持TXT、Excle格式的导入，将文件拖拽至输入框或点击`点击此处`按钮即可进行上传。

![](/img/products/yakit/blasting-and-unauthorized-testing-1.png)

### 参数设置

点击更多参数可以进行字典的自定义配置以及并发和间隔时间等高级参数的设置。

关于参数的解释：

- 爆破用户字典：可以选择上传在`Payload管理`的字典进行爆破
- 爆破用户：如需对字典内容进行补充，可以在这里进行输入 -
- 同时使用默认字典：如勾选则表示需要使用该功能内置的默认字典，不勾选则表示不使用。
- 爆破密码字典、爆破密码、同时使用默认字典意义同上
- 自动停止：遇到第一个爆破结果时是否终止任务
- 目标并发：同时可爆破的目标数，yak的爆破规则为同时爆破“多个目标”，每个目标低并发。这样在有多个目标的时候，并不会影响效率，而且单个目标也不会过快导致被封禁。

![](/img/products/yakit/blasting-and-unauthorized-testing-2.png)

- 最小延迟，最大延迟：可理解为超时时间，单位为s，超过时间则不会继续进行爆破。一般来讲，如果要 ban 爆破行为的话，通常会设置一个时间窗口，短时间时间窗口被打满会认为发生了爆破事件。如果可以再“放缓” 针对单个目标的测试强度，其实有可能可以缓解这个问题，所以我们可以通过这种设置最小延迟和最大延迟来解决这个问题。

![](/img/products/yakit/blasting-and-unauthorized-testing-3.png)

爆破的结果会在页面下方展示，点击相应菜单即可查看

![](/img/products/yakit/blasting-and-unauthorized-testing-4.png)
