---
sidebar_position: 10
---
# 接口未授权

**漏洞描述：**

开发者设计接口的时候没有对某些接口进行鉴权，导致攻击者可以恶意拼接接口绕过限制去直接访问某些路径，非法获取数据。

**漏洞案例：**

***案例1***

访问接口未授权的地址：http://xxx.xx/xxx/readfile.php?file=../../../../../etc/passwd

![](/img/products/yakit/apiUnauthorized-1.png)

***案例2***

访问泄露的接口之后发现未授权信息泄漏
http://xxx.xx.x.xxx//api/basetynfo/tutorRdfecruitManage/selectTgrgutorList

![](/img/products/yakit/apiUnauthorized-2.png)

***案例3***

访问接口未授权的地址
可未授权查看用户名，手机号等信息

![](/img/products/yakit/apiUnauthorized-3.png)

***案例4***

通过拼接接口：http://xxx.xx.xx.xx/api/system/user/detail/1
未授权访问接口获取admin手机号密码等信息

![](/img/products/yakit/apiUnauthorized-4.png)

***案例5***

通过拼接接口：https://xx.xxx.xxxx/api/v3.0/LoginLog/Pageing

![](/img/products/yakit/apiUnauthorized-5.png)
