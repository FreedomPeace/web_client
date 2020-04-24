/**
 * Created by A170860 on 2018/5/4.
 */
var fs = require("fs");
var data = fs.readFile("EventEmitter",function (err, data) {
    if (err) {
        console.error(err);
        return
    }
    console.log(data.toString());
});
console.log("program is over");