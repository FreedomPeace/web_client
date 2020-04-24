/**
 * Created by A170860 on 2018/5/8.
 */
var path = require("path");

/**
 * path.normalize();
 * 规范化路径
 *
 * */
// 格式化路径
console.log("normalization :"
    +path.normalize('/test/test1//2slashes/1slash/tab/..'))
// 连接路径
console.log('joint path : ' + path.join('/test', 'test1', '2slashes/1slash', '5tab', '..'));
// 转换为绝对路径
console.log('resolve : ' + path.resolve('national_branch_center.html'));
// 路径中文件的后缀名
console.log('ext name : ' + path.extname('path2me.js'));
/**
 * 代码执行结果如下：
 $ node main.js
 normalization : /test/test1/2slashes/1slash
 joint path : /test/test1/2slashes/1slash
 resolve : /web/com/1427176256_27423/main.js
 ext name : .js

 */