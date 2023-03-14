---
sidebar_position: 12
---

# 通用框架登录

**漏洞描述：**

一些oa或者别的web框架可能会爆出任意用户登录漏洞，因为为白盒审计出来的漏洞所以可能会跟常规的任意用户登录的绕过手法有所不同

**漏洞案例：**

这里以通达oa的任意用户登录作例子
使用yakit抓取登录的数据包

![](/img/products/yakit/General-framework-1.png)
![](/img/products/yakit/General-framework-2.png)

修改接口logincheck.php为logincheck_code.php
删除cookie的值
添加UID=1参数

![](/img/products/yakit/General-framework-3.png)

返回包中会返回管理员的cookie
访问url，在浏览器中替换cookie即可登录

![](/img/products/yakit/General-framework-4.png)

成功以管理员身份登录

![](/img/products/yakit/General-framework-5.png)
