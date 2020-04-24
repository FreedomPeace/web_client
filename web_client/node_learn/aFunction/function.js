/**
 * Created by A170860 on 2018/5/7.
 */

function say(word) {
    console.log(word);
}

function execute(someFunction, word) {
    someFunction(word);
}

execute(say, "hello");//say 是函数本身
var word = "happy new year";
execute(
    function (word) {console.log(word);}//匿名的函数只能作为参数
    , word);
/*exports.*/execute(say, "hello ,word");