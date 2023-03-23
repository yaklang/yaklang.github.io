---
sidebar_position: 27
---
# Metinfo插件使用

## 1 Metinfo 多个漏洞进行检测

**插件id：**

f2ed36bf-3c76-4f89-945f-3758bb9f75f7

**测试过程：**

***cve-2019-16996-sqli***

漏洞版本为metinfo7.0beta版本
sql注入的漏洞点在后台
不过需要登录

![](/img/products/yakit/Metinfo-1.png)

后端数据包回显  41557*43952的值，代表数据被带入数据库中进行计算
sql注入存在

![](/img/products/yakit/Metinfo-2.png)

***cve-2019-16997-sqli*** 

后台漏洞，暂无案例

***cve-2019-17418-sqli***

后台漏洞，暂无案例

***metinfo-file-read***

漏洞版本要求6.0，且本漏洞文件名为文件读取
?dir=http\..\..\config\config_db.php

![](/img/products/yakit/Metinfo-3.png)

成功读取

![](/img/products/yakit/Metinfo-4.png)

***cnvd-2018-13393-lfi***

payload:/include/thumb.php?dir=http\..\..\admin\login\login_check.php

成功检测出漏洞

![](/img/products/yakit/Metinfo-5.png)
