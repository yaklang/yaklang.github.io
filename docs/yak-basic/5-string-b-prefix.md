---
sidebar_position: 5
---

# 5. 字符串：字节序列（bytes）

在我们了解 string 之后，我们如果想要快速创建一个原始字节，可以使用字符串前缀 b 因此我们可以构造 b"Hello World!" 为原始字节序列。实际使用非常简单，我们只需要在原有的字符串定义前增加 b 前缀，使用起来更像 b""

    name = b"Hello World\r\nHello V1ll4n"
    dump(name)
    
    /*
    ([]uint8) (len=25 cap=32) {
     00000000  48 65 6c 6c 6f 20 57 6f  72 6c 64 0d 0a 48 65 6c  |Hello World..Hel|
     00000010  6c 6f 20 56 31 6c 6c 34  6e                       |lo V1ll4n|
    }
    */
    
更令人开心的是，b 前缀也可以用于 `\`` 包裹的文本块

    name = b`Hello World
    
    Hello V1ll4n`
    dump(name)
    
    /*
    ([]uint8) (len=25 cap=32) {
     00000000  48 65 6c 6c 6f 20 57 6f  72 6c 64 0a 0a 48 65 6c  |Hello World..Hel|
     00000010  6c 6f 20 56 31 6c 6c 34  6e                       |lo V1ll4n|
    }
    */
    
在实际的使用中，尤其是函数传递过程，字符序列与字符串都会根据形参自动互转；因此实际不需要在传递参数的时候，手动转类型。
