/**
 * Created by A170860 on 2018/5/4.
 */
/**
 语法
 写入 Node 缓冲区的语法如下所示：
 buf.write(string[, offset[, length]][, encoding])
 参数
 参数描述如下：
 •	string - 写入缓冲区的字符串。
 •	offset - 缓冲区开始写入的索引值，默认为 0 。
 •	length - 写入的字节数，默认为 buffer.length
 •	encoding - 使用的编码。默认为 'utf8' 。
 根据 encoding 的字符编码写入 string 到 buf 中的 offset 位置。
 length 参数是写入的字节数。 如果 buf 没有足够的空间保存整个字符串，则只会写入 string 的一部分。 只部分解码的字符不会被写入。
 返回值
 返回实际写入的大小。如果 buffer 空间不足， 则只会写入部分字符串。

 * */
var content = "i am learning node";
var buf = Buffer.allocUnsafe(content.length);
buf.write(content);
console.log(buf.toString("hex"));//
console.log(buf.toString("utf8"));