/**
 * Created by A170860 on 2018/5/7.
 */
/**
 * 语法：
 * 异步打开文件
 * fs.open(path,flags[,mode],callback);
 * path:文件的路径
 * flags:文件打开的行为,读写等如下表。
 * mode:设置文件模式（权限），默认777
 * callback-回调函数，带有两个参数：callback（err,fd);
 * */

var fs = require("fs");

// 异步打开文件
console.log("准备打开文件！");
fs.open('input.txt', 'r+', function (err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("文件打开成功！");
});
