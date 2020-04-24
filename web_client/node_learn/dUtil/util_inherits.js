/**
 * Created by A170860 on 2018/5/7.
 */
/**
 * util.inherits(constructor, superConstructor)是一个实现对象间原型继承的函数。
 JavaScript 的面向对象特性是基于  原型的，与常见的基于类的不同。
 JavaScript 没有 提供对象继承的语言级别特性，而是通过原型复制来实现的。

 */
var util = require("util");
function Base(){
    var name;
    this.speakName = function () {
        console.log(name);
    }
}
Base.prototype.eat = function() {
    console.log(this.toString()+"吃饭");
}
function Sub() {
    this.sleep = function () {
        console.log("sleeping");
    }
}
util.inherits(Sub, Base);

var base = new Base();
var sub = new Sub();

// sub.speakName();
sub.sleep();
sub.eat();

base.speakName();
base.eat();

