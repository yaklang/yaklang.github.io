---
sidebar_position: 19
---

# Fuzz标签

手工测试场景中需要渗透人员对报文进行反复的发送畸形或者特定的payload进行查看服务器的反馈并以此来进行下一步的判断。Fuzz标签便是来配合渗透人员应对不同测试场景，可以到达免配置适配大量测试场景。
我们如果想要使用 fuzz 标签，需要明确两个概念，标签的格式是自定义的，目前支持{{和}}作为标签的标记。
我们以 {{int()}} 为例，int 代表标签要渲染的具体功能，() 括号中的内容是渲染材料，有一些标签需要，有一些标签可以没有，例如 随机类 的标签。
例如：
### 1  整数{{int}}
fuzz渲染整数：
```bash
yak fuzz -t "{{int(1-10)}}" 
``` 

![](/img/products/yakit/fuzz-1.png)

### 2 目标{{host}}{{port}}
fuzz渲染扫描目标：
```bash
yak fuzz -t "{{host(192.168.1.1/28,example.com,10.3.1.2)}}" 
```

![](/img/products/yakit/fuzz-2.png)

```bash
yak fuzz -t "{{host(192.168.1.1/28,example.com,10.3.1.2)}}:{{port(80,443,8080)}}" 
```

![](/img/products/yakit/fuzz-3.png)

### 3 随机字符串{{randstr}}
randstr 是一个非常常见的渲染模版，这个模版的意思是，生成一个随机字符串，只包含二十六个英文字母大小写，值得注意的是，{{randstr}} 的参数有四种不同类型分别如下 
* {{randstr(length)}}例如：{{randstr(8)}}意思是，生成一个长度是 8 的随机字符串 
* {{randstr(min,max)}}生成一个长度在min和max之间的随机字符串，例如{{randstr(4,8)}} 
* {{randstr(min,max,repeat)}}重复repeat次生成一个min和max之间长度的字符串组 
* {{randstr}}例如：{{randstr}}就可以直接被渲染，等效为{{randstr(8,8)}}

```bash
yak fuzz -t "{{randstr(5,10,5)}}" 
```
随机生成字符串最小为5位，最大为10为，生成5次

```bash
yak fuzz -t "{{randstr(5,5,5)}}" 
```
随机生成字符串最小为5位，最大为5为，生成5次

![](/img/products/yakit/Web-Fuzzer-4.png)

### 4 随机数字{{randint}}
这个标签和 randstr 用途基本一样，用于生成随机一个整数。
同样的，这个标签分为四种情况
* {{randint(max)}} 生成一个最大值不超过 max 的随机整数
* {{randint(min,max)}} 生成一个最大最小值在 min 和 max 之间的整数
* {{randint(min,max,repeat)}} 生成 repeat 个值在 min 和 max
* {{randint}} 等价于 {{randint(10)}}

```bash
yak fuzz -t "{{randint(10,100,10)}}" 
```
随机生成数字10-100之间生成10次。

```bash
yak fuzz -t "{{randint(10,100)}}" 
```
随机生成数字10-100之间。

![](/img/products/yakit/fuzz-5.png)

### 5 可见标点符{{punc}}
{{punc}}渲染所有可见标点符

```bash
yak fuzz -t "{{punc}}" 
```

![](/img/products/yakit/fuzz-6.png)

### 6 任意字符{{rangechar}}
按顺序生成一个 range 字符集，通常来说，我们除了在使用特殊标点符号的时候，经常还需要生成一些不可见字符，我们在 Yak 中如何生成不可见字符呢？{{rangechar(charMax)}}: 输入生成字符范围（使用16进制），默认最小为0，charMax 为最大的字符值（UTF8 编码）
{{rangechar(min,max)}}: 输入生成字符的范围（使用16进制），最小为 min，最大为 max。



```bash
yak fuzz -t "{{rangechar(30,40)}}" 
```

```bash
yak fuzz -t "0x{{hex({{rangechar(30,40)}})}}" 
```
![](/img/products/yakit/fuzz-7.png)

### 7 单个字符{{char}}
生成一个字符
```bash
yak fuzz -t "{{char(a-d)}}" 
```
```bash
yak fuzz -t "{{char(e-z)}}" 
```

![](/img/products/yakit/fuzz-8.png)

### 8 随机生成文件头
yak内置了很强大的功能，我们可以通过指定文件头标签直接去生成我们需要的文件头来使用。
我们可以使用{{ico}}来直接生成一个ico的文件头；可以使用{{tiff}}来生成gif文件头；使用{{gif}}来生成gif文件头；使用{{png}}来生成PNG文件头；使用{{jpeg}}来 生成jpeg/jpg文件头。
生成各种文件头
* 生成一个 ico 文件头，例如 {{ico}}
* 生成一个 tiff 文件头，例如 {{tiff}}
* 生成一个 bmp 文件头，例如 {{bmp}}
* 生成 gif 文件头，例如 {{gif}}
* 生成 PNG 文件头，例如 {{PNG}}
* 生成 jpeg / jpg 文件头，例如 {{jpg}}

![](/img/products/yakit/fuzz-9.png)

### 9 随机大小写{{randomupper}}
{{randomupper(qwertyuiopasdfghjklzxcvb)}}

![](/img/products/yakit/fuzz-10.png)

### 10 大写{{upper}}
`upper`把传入的内容变成大写
{{upper(qwertyuiopasdfghjklzxcvb)}}

![](/img/products/yakit/fuzz-11.png)

### 11 小写{{lower}}
`lower`把传入的内容都设置成小写
{{lower(qwertyuiopasdfghjklzxcvb)}}

![](/img/products/yakit/fuzz-12.png)

### 12 重复字符串{{repeatstr}}
`repeatstr`的意思是，指定一个字符或者字符串，通过指定num的大小来控制字符重复的次数：
{{repeatstr(str|num)}}

例如：{{repeatstr(qwertyuiopasdfghjklzxcvb|3)}}
意思是，qwertyuiopasdfghjklzxcvb字符串重复三次。

![](/img/products/yakit/fuzz-12（1）.png)

### 13 读取文件{{file}}
{{file}} 读取文件内容，可以支持多个文件，用竖线分割


```bash
yak fuzz -t "{{file(C:\Users\22835\\2023pass-top20.txt)}}" 
```

![](/img/products/yakit/fuzz-13.png)

{{file:line}解析文件名（可以用 | 分割），把文件中的内容按行反回成数组
{{file:line()}}使用方式和{file()}}基本相同。可以读取文件内容，并且可以支持多个文件，用|分割

```bash
yak fuzz -t "{{file:line(C:\Users\22835\Yakit1.txt|C:\Users\22835\Yakit2.txt)}}" 
```

![](/img/products/yakit/fuzz-14.png)

{{file:dir}}解析文件夹，把文件夹中文件的内容读取出来，读取成数组返回

```bash
yak fuzz -t "{{file:dir(C:\Users\22835\)}}"
```

![](/img/products/yakit/fuzz-15.png)