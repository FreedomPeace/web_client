/**
 * Created by A170860 on 2018/5/4.
 */
var Hello = function () {
    var name;
    this.setName=function (thyName) {
        name = thyName;
    }
    this.say = function () {
        console.log(name+"say");
    }
}
module.exports = Hello;