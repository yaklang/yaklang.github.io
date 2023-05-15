---
sidebar_position: 9
---

# 9. 字符串：运算与内置方法函数

## 字符串运算

与大多数语言类似，我们使用+号来连接字符串，例如：

```go
a = "Hello, "
b = "Yak"
println(a + b) // Hello, Yak
```

我们吸取了python的语法糖，可以使用*号来重复字符串n次，例如：

```go
a = "powerful "
println(a * 5 + "yak") // powerful powerful powerful powerful powerful yak 
```

## 索引/截取：取子串或子元素

在索引/截取方面，我们同样吸取了python的语法糖，完美继承了python中的索引方式，即：

    字符串[头下标:尾下标:步长]

索引值以 0 为开始值，-1 为从末尾的开始位置。

一个简单的例子如下：

```go
a = "Hello, Yak"
println(a[0])      // H
println(a[1:5])    // ello
println(a[3:0:-1]) // lle
```

## 内置方法：快速运算字符串

当然了，我们一样支持类似于python的字符串内置方法，下面这个例子展示了字符串类型的所有内置方法：

```go
// 取字符串倒序等价于 [::-1]
assert "abcdefg".Reverse() == "gfedcba"

// 取字符串是否包含子字符串
assert "abcabc".Contains("abc") == true
assert "abcabc".Contains("qwe") == false

// 基础替代字符串字串方法
assert "abcabc".ReplaceN("abc", "123", 1) == "123abc"
assert "abcabc".ReplaceN("abc", "123", 2) == "123123"
assert "abcabc".Replace("abc", "123") == "123123"
assert "abcabc".ReplaceAll("abc", "123") == "123123"

// 分割字符串为数组
assert "abc1abc".Split("1") == ["abc", "abc"]
assert "abc1abc1abc".SplitN("1", 2) == ["abc", "abc1abc"]

// 拼接字符串
assert "1".Join(["abc", "abc"]) == "abc1abc"

// 移除前后 Trim
assert "pabcp".Trim("p") == "abc"
assert "pabc".TrimLeft("p") == "abc"
assert "abcp".TrimRight("p") == "abc"

// 前后缀
assert "abcdefg".HasPrefix("abc") == true
assert "abcdefg".HasSuffix("efg") == true

// 左右填充 0 或者 ' '
assert "abc".Zfill(5) == "00abc"
assert "abc".Zfill(2) == "abc"
assert "abc".Rzfill(5) == "abc00"
assert "abc".Rzfill(2) == "abc"
assert "abc".Ljust(5) == "abc  "
assert "abc".Ljust(2) == "abc"
assert "abc".Rjust(5) == "  abc"
assert "abc".Rjust(2) == "abc"

// 计算重复字串次数
assert "abcabc".Count("abc") == 2
assert "abcabc".Count("qwe") == 0

// 寻找字串索引
assert "abcabc".Find("abc") == 0
assert "abcabc".Find("qwe") == -1
assert "abcabc".Rfind("abc") == 3
assert "abcabc".Rfind("qwe") == -1

// 大小写切换
assert "ABC".Lower() == "abc"
assert "abc".Upper() == "ABC"
assert "abc".Title() == "Abc"

// 判断函数
assert "ABC".IsLower() == false
assert "abc".IsLower() == true
assert "ABC".IsUpper() == true
assert "abc".IsUpper() == false
assert "abc".IsTitle() == false
assert "Abc".IsTitle() == true

// 判断字符串中是否是数字
assert "abc".IsAlpha() == true
assert "abc1".IsAlpha() == false
assert "abc".IsDigit() == false
assert "123".IsDigit() == true

// 判断字母和数字
assert "abc".IsAlnum() == true
assert "abc1".IsAlnum() == true
assert "abc1 ".IsAlnum() == false

// 判断字符串中是否都是可打印字符
assert "abc".IsPrintable() == true
assert "abc1 ".IsPrintable() == true
assert "abc1 \xff".IsPrintable() == false
```

## 附录：字符串内置方法

|方法名|描述|
|:---:|:----|
|Reverse()|翻转字符串|
|Contains(substr)|字符串是否包含substr，如果是则返回 True，否则返回 False|
|ReplaceN(old, new, n)|把 将字符串中的 old 替换成 new,最多替换不超过 n 次|
|ReplaceAll(old, new) / Replace(old, new)|把 将字符串中所有的 old 替换成 new|
|Split(substr)|以 substr 为分隔符截取字符串|
|SplitN(substr, n)|以 substr 为分隔符截取字符串，最多切割为 n 份|
|Join(seq)|以字符串作为分隔符，将 seq 中所有的元素(的字符串表示)合并为一个新的字符串|
|Trim(cutstr...)|删除字符串头尾的空格和cutstr|
|TrimLeft(cutstr...)|删除字符串头部的cutstr|
|TrimRight(cutstr...)|删除字符串尾部的cutstr|
|HasPrefix(substr) / StartsWith(substr)|检查字符串是否是以指定子字符串 substr 开头|
|HasSuffix(substr) / EndsWith(substr)|检查字符串是否是以指定子字符串 substr 结尾|
|Zfill(width)|返回长度为 width 的字符串，原字符串右对齐，前面填充0|
|Rzfill(width)|返回长度为 width 的字符串，原字符串左对齐，后面填充0|
|Ljust(width)|返回一个原字符串左对齐,并使用空格填充至长度 width 的新字符串|
|Rjust(width)|返回一个原字符串右对齐,并使用空格填充至长度 width 的新字符串|
|Count(n)|返回 str 在 string 里面出现的次数|
|Find(substr) / IndexOf(substr)|检测 str 是否包含在字符串中，并返回开始的索引值，如没找到则返回-1|
|Rfind(substr) / LastIndexOf(substr)|类似于 find()函数，不过是从右边开始查找|
|Lower()|转换字符串中所有大写字符为小写|
|Upper()|转换字符串中的小写字母为大写|
|Title()|返回"标题化"的字符串,就是说所有单词都是以大写开始，其余字母均为小写|
|IsLower()|判断字符串是否全为小写，如果是则返回 True，否则返回 False|
|IsUpwer()|判断字符串是否全为大写，如果是则返回 True，否则返回 False|
|IsTitle()|如果字符串是标题化的则返回 True，否则返回 False|
|IsAlpha()|如果字符串所有字符都是字母则返回 True, 否则返回 False|
|IsDigit()|如果字符串所有字符都是数字则返回 True, 否则返回 False|
|IsAlnum()|如果字符串所有字符都是字母和数字则返回 True, 否则返回 False|
|IsPrintable()|如果字符串所有字符都是可见字符则返回 True, 否则返回 False|