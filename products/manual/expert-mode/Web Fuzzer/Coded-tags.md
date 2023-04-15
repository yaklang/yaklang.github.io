---
sidebar_position: 20
---

# 编码标签

标签语法直接提供的一些加解密功能。{{md5}} {{sha1}} {{sha256}} {{sha512}}{{base64}} {{hex}} {{url}} {{durl}} {{html}} {{htmlhex}}
### 1  {{md5}}
进行MD5加密

```bash
yak fuzz -t "{{md5(123456)}}"
```
```bash
yak fuzz -t "{{md5({{int(1-10)}})}}"
```

![](/img/products/yakit/fuzz-16.png)

### 2  {{sha1}}
进行 sha1 编码：
```bash
yak fuzz -t "{{sha1({{int(123456,111111)}})}}"
```

123456和111111进行sha1编码：

![](/img/products/yakit/fuzz-17.png)

### 3  {{sha256}}
进行 sha256 编码：
```bash
yak fuzz -t "{{sha256({{int(123456,111111)}})}}"
```

123456和111111进行sha256编码：

![](/img/products/yakit/fuzz-18.png)

### 4  {{sha512}}
进行 sha512 编码：
```bash
yak fuzz -t "{{sha512({{int(123456,111111)}})}}"
```

123456和111111进行sha512编码：

![](/img/products/yakit/fuzz-19.png)

### 5 {{sm3}}
计算 sm3 哈希值：
```bash
yak fuzz -t "{{sm3({{int(123456,111111)}})}}"
```

123456和111111进行sm3编码：

![](/img/products/yakit/fuzz-20.png)

### 6 {{base64}}
base64enc进行 base64 编码：
```bash
yak fuzz -t "{{base64enc(abc)}}"
```

base64dec进行 base64 解码：
```bash
yak fuzz -t "{{base64enc(YWJj)}}"
```

![](/img/products/yakit/fuzz-21.png)

### 7  {{hex}}
HEX 编码：
```bash
yak fuzz -t "{{hexenc(abc)}}"
```

HEX 解码：
```bash
yak fuzz -t "{{hexdec(616263)}}"
```

整数10和11进行编码：
```bash
yak fuzz -t "{{hexenc({{int(10,11)}})}}"
```


![](/img/products/yakit/fuzz-22.png)

### 8  {{url}}
urlescape URL 编码(只编码特殊字符)

```bash
yak fuzz -t "{{urlescape(abc==+)}}"
```
--> abc%3D%3D%2B  (abc没有编码只编码的==+特殊符号)

urlenc URL 强制编码

```bash
yak fuzz -t "{{urlenc(abc==+)}}"
```
--> %61%62%63%3d%3d%2b  (abc==+全部URL编码)

urldec URL 强制解码

```bash
yak fuzz -t "{{urldec(%61%62%63%3d%3d%2b)}}"
```
--> abc==+

doubleurlenc 双重URL编码

```bash
yak fuzz -t "{{doubleurlenc(abc==+)}}"
```
--> %2561%2562%2563%253d%253d%252b

doubleurldec 双重URL解码

```bash
yak fuzz -t "{{doubleurldec(%2561%2562%2563%253d%253d%252b)}}"
```
--> abc==+

![](/img/products/yakit/fuzz-23.png)

### 9  {{html}}
htmlenc HTML 实体编码

```bash
yak fuzz -t "{{htmlenc(abc==+)}}"
```
--> &#97;&#98;&#99;&#61;&#61;&#43;

htmlhexenc HTML 十六进制实体编码

```bash
yak fuzz -t "{{htmlhexenc(abc==+)}}"
```
--> &#x61;&#x62;&#x63;&#x3d;&#x3d;&#x2b;

htmldec HTML 解码

```bash
yak fuzz -t "{{htmldec(&#97;&#98;&#99;&#61;&#61;&#43;)}}"
```
--> abc==+

![](/img/products/yakit/fuzz-24.png)
