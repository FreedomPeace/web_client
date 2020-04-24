/**
 * Created by A170860 on 2018/5/2.
 */
var module;
/**
 * Node.js REPL Read eval  Print Loop (交互式解释器）
 *通过exports对象 可以设置方法被其他模块访问
 */

exports.hello = function () {
    console.log("hello world");
}

module.exports.sayHi = function () {
    console.log("say hi");
}
//这个方法，其他模块不能直接访问
function speakEnglish(data) {
    console.log("say english"+data.toString());
}
module.exports.SpeakEnglish = speakEnglish;
