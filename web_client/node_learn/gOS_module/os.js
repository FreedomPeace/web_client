/**
 * Created by A170860 on 2018/5/8.
 */
var os = require("os");

var tmpdir = os.tmpdir();
console.log(tmpdir);
//返回cpu的字节序，可能的是BE或LE
console.log(os.endianness());
//操作系统的主机名
console.log(os.hostname());
// 操作系统名
console.log(os.type());

console.log(os.platform());
console.log(os.arch());
console.log(os.release());
console.log(os.uptime());
console.log(os.loadavg());
console.log(os.totalmem());
console.log(os.freemem());
