/**
 * Created by A170860 on 2018/5/4.
 */
var fs = require("fs");

fs.readFile("input",function (err, data) {
    if (err){
        console.log(err.stack);
        return;
    }
    console.log(data.toString());

});

console.log("程序执行完毕");