/**
 * Created by A170860 on 2018/5/4.
 */
//创建指定编码的字符序列
//Buffer.from(string[, encoding])：
// 返回一个被 string 的值初始化的新的 Buffer 实例
const buf = Buffer.from("13", "hex");
const buf2 = Buffer.from("11", "binary");
// 输出 72756e6f6f62
console.log(buf.toString('hex'));

// 输出
console.log(buf2.toString('hex'));
console.log(buf2.toString());
