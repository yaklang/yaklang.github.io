---
sidebar_position: 13
---
# Thinkphp插件使用

## 1 Thinkphp-5.0.22/5.1.29-RCE

**插件id：**

711ce43e-2bd8-4788-8c2a-2dee1b0279fc

**测试过程：**

vulhub测试网站地址输入到该插件扫描目标栏，插件默认端口为8080就不用再修改
插件成功检测到该漏洞

![](/img/products/yakit/Thinkphp-1.png)

并且可以一键getshell

![](/img/products/yakit/Thinkphp-2.png)

输入shell地址和密码可以直接链接

![](/img/products/yakit/Thinkphp-3.png)

## 2 ThinkPHP CNVD-2018-2494 漏洞检测

**插件id：**

Yakit正在努力编写~

**测试过程：**

测试网站：vulfocus靶场
payload：http://xx.xx.x.xx:xxx/index.php?s=/Index/\think\app/invokefunction&function=call_user_func_array&vars[0]=phpinfo&vars[1][]=-1

![](/img/products/yakit/Thinkphp-4.png)

## 3 ThinkPHP5023 method rce 漏洞

**插件id：**

696fe1c8-8390-47b3-a0a2-185a69bb1cc8

**测试过程：**

直接在插件中输入地址＋端口进行扫描，得出测试结果

![](/img/products/yakit/Thinkphp-5.png)

## 4 ThinkPHP_2.x~3.0 Beta远程代码执行漏洞检测

**插件id：**

254be510-6b1d-4e7f-8a70-b2f26ebab5b6

**测试过程：**

访问漏洞地址显示：

![](/img/products/yakit/Thinkphp-6.png)

直接输入地址扫描，成功验证漏洞存在

![](/img/products/yakit/Thinkphp-7.png)


## 5 ThinkPHP v6 file write 漏洞

**插件id：**

Yakit正在努力编写~

**测试过程：**

暂无案例

## 6 ThinkPHP-5.x/3.x/6.x-日志泄露-V0.2

**插件id：**

b6844edb-9b90-4836-8959-74a74727a9b8

**测试过程：**

测试网站在接口/App/Runtime/Logs/Home/23_02_27.log下存在日志泄漏

![](/img/products/yakit/Thinkphp-8.png)

插件成功检测出来漏洞

![](/img/products/yakit/Thinkphp-9.png)

## 7 ThinkPHP5 controller rce 漏洞

**插件id：**

a020beed-7c49-4e5a-a0b3-5dbb01cf4356

**测试过程：**

将靶场ip和端口填入，点击开始执行
成功检测出该漏洞

![](/img/products/yakit/Thinkphp-10.png)

## 8 ThinkPHP_Lang_RCE

**插件id：**

3d771294-474c-4f41-b8ca-b9cf92028894

**测试过程：**

暂无案例

## 9 ThinkPHP RCE 被动扫描

**插件id：**

09e1d6c4-4b4d-4a49-9b8c-ab45d31437dd

**测试过程：**

Yakit开起被动扫描插件去访问靶场环境，成功检测出漏洞

![](/img/products/yakit/Thinkphp-11.png)
![](/img/products/yakit/Thinkphp-12.png)
