---
sidebar_position: 28
---
# FAQ

本章节可以速查社区用户在使用过程中遇到的问题，并且会持续更新

1. 远程连接报错或连接不上
 * 检查防火墙
 * --host 是不是 0.0.0.0，端口只要不被占用就行（默认为了安全起见是监听在 localhost 上了，服务器上需要设置一下 host)
2. 数据如何导出

   `设置`-`项目管理`即可导出。

   也可以使用数据库客户端连接Yakit数据库即可：

   数据库位置：
   - mac/linux 的话是 ~/yakit-projects/default-yakit.db
   - windows 就是你当前目录的 yakit-projects\default-yakit.db 文件，是 sqlite 直接连进去即可查看 
3. 右上角的公网反连和左侧那个反连管理不一样的吗

   公网反连和左侧反连服务器不是一个功能。但两个功能共用一个 Bridge，默认同步Yak Bridge 的地址和密码，这个地址在你本地存着。公网反连端口其实不是固定的，重启引擎他就会改变。 

4. 之后不会割韭菜改成付费版吧？

   yak&yakit项目不会出个人的付费版，之后的付费版版是针对企业的企业版，且企业版的功能也是适用于企业的。我们现在前端是完全开源的，其实也是传达了这样的精神。
   
5. 数据库位置

  - macOS 或者 linux 下在 ~/yakit-projects/default-yakit.db
  - windows 下在 %HOME%/yakit-projects/default-yakit.db 下

6. 手机模拟器抓包

   下载证书导入到模拟器的系统里面，MITM监听的时候写 0.0.0.0，手机代理写电脑网卡的 IP 

7. 远程模式如何更新引擎
   
   在远程机器上执行yak upgrade

8. yakit检测出来的XSS-echo是什么意思啊？payload怎么用呢？
   
   这个意思是，有回显但是不保证能利用成功

9. 怎么实现端口转发

   ![](/img/products/yakit/FQA-1.png)

10. DNSlog报错

   这个错误是配置了自己的反连服务器但是没有配 dnslog 导致的
   ![](/img/products/yakit/FQA-2.png)
   ![](/img/products/yakit/FQA-3.png)
   
11. 引擎报错
   这个报错是没创建表，跑一遍yak grpc即可

![](/img/products/yakit/FQA-4.jpeg)

12. 涉及到图片如何重放

   涉及图片上传，需要用图片文件便签插入，不能直接重放
   ![](/img/products/yakit/FQA-5.png)

13. telnet爆破为啥没有

   telnet 的实现很多设备都不一样，不是标准协议，所以没有添加在爆破模块中

14. 在web fuzzer里发包，dns解析用的是电脑自身配置的dns么

   是的，用的是系统的配置 

15. 怎么跟随302

![](/img/products/yakit/FQA-6.png)

16. yakit的socks5或者http的代理带有用户名和密码怎么配置

   - socks5://user:pass@host:port
   - http:// user:pass@ip:port 
17. int复数形式标签

   {{list(|-)}}{{int(1-10)}} 

18. yakit打开mitm的时候cpu跟要炸了一样，内存能跑6个G，磁盘能跑800mb/s，重启引擎也无法解决

   可以把default-yakit.db备份一下，然后删掉，我感觉是很早之前的版本直接升级很新的版本数据库 migrate 有点问题导致的 

19. 0000-9999写法

   {{int(0-9999|4)}}，参考 https://www.yaklang.com/docs/yakexamples/fuzztag

20. database is locked 



21. 远程模式下开启劫持

   通过远程模式启动的引擎，配置代理时不能用127.0.0.1，要用服务器的公网ip，mitm的bind ip要0.0.0.0 

22. 401爆破语法

   {{base64({{x(user_top10)}}:{{x(pass_top25)}})}} 

23. 反连报错

   这个需要服务端执行yak bridge --secret xxx，填服务端ip，端口和密码
   
24. 怎么达到下面的效果
    ![](/img/products/yakit/FQA-7.jpeg)
   {{regen([a-zA-Z0-9]{3})}}  （反向正则标签）
   {{regen([a-zA-Z0-9])}}{{regen([a-zA-Z0-9])}}{{regen([a-zA-Z0-9])}}{{regen([a-zA-Z0-9])}}
   如果不够快的话，可以拆成四个，拆成四个就会加快，输出中间结果 

25. 远程连接如何自己启动端口

   用这个命令启动yak grpc --host "0.0.0.0" --port 端口号 

26. Yak Runner 里面怎么使用https呢？

   一般来说是poc.HTTP(packet, poc.https(true))
   poc.https(isTls)是poc.HTTP的参数，这么用poc.HTTP(packet, poc.https(isTls))，如果isTls是true，发出的请求就是https的

27. Yakit如何查看drop的包

   无法查看丢弃的包，直接被MITM过滤的数据包不会存储到数据库，丢弃也算是过滤，所以师傅可能需要设置好过滤器 

28. yakit的fuzzer能直接插入时间戳吗? 比如某个请求携带了时间戳 fuzzing时根据发包时间赛一个时间戳进去

   目前的做法可以在热加载里面写一个
   {{yak(ts)}}
   ts = func(s) { return f${timestamp()}} 就行了 

29. 为什么系统代理只能http/https

![](/img/products/yakit/FQA-8.png)
   系统代理这个和系统配置有关，暂时只能 http(s)，主要是 Win 和 Mac 有点差别，取了个交集 

30. 反连功能可以与客户端分离吗，因为我到目标地址有个前置机

   可以分离的，直接引擎分离或者部署个额外反连就行 

31. 为啥用户数据非得在c盘

   因为macOS一般不分盘，为了让用户数据路径尽量统一，就统一用了用户路径。


32. 插入多个数据格式

   {{list(xxxx|bbbbb)}}