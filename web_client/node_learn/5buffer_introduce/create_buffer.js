/**
 * Created by A170860 on 2018/5/4.
 */

/**
 * 创建 Buffer 类
 Buffer 提供了以下 API 来创建 Buffer 类：
 •	Buffer.alloc(size[, fill[, encoding]])：
 返回一个指定大小的 Buffer 实例，如果没有设置 fill，则默认填满 0
 •	Buffer.allocUnsafe(size)：
 返回一个指定大小的 Buffer 实例，但是它不会被初始化，所以它可能包含敏感的数据
 •	Buffer.allocUnsafeSlow(size)
 •	Buffer.from(array)：
 返回一个被 array 的值初始化的新的 Buffer 实例（传入的 array 的元素只能是数字，不然就会自动被 0 覆盖）
 •	Buffer.from(arrayBuffer[, byteOffset[, length]])：
 返回一个新建的与给定的 ArrayBuffer 共享同一内存的 Buffer。
 •	Buffer.from(buffer)：
 复制传入的 Buffer 实例的数据，并返回一个新的 Buffer 实例
 •	Buffer.from(string[, encoding])：
 返回一个被 string 的值初始化的新的 Buffer 实例

 * */
// 创建一个长度为 10、且用 0 填充的 Buffer。
const buf1 = Buffer.alloc(10);

// 创建一个长度为 10、且用 0x1 填充的 Buffer。
const buf2 = Buffer.alloc(10, 1);

// 创建一个长度为 10、且未初始化的 Buffer。
// 这个方法比调用 Buffer.alloc() 更快，
// 但返回的 Buffer 实例可能包含旧数据，
// 因此需要使用 fill() 或 write() 重写。
const buf3 = Buffer.allocUnsafe(10);

// 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。
const buf4 = Buffer.from([1, 2, 3]);
console.log("buf4 ==="+buf4.toString("utf8"));

// 创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer。
const buf5 = Buffer.from('tést');
console.log("buf5 ==="+buf5.toString("hex"));
// 创建一个包含 Latin-1 字节 [0x74, 0xe9, 0x73, 0x74] 的 Buffer。
const buf6 = Buffer.from('tést', 'latin1');
