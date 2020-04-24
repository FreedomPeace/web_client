/**
 *
 * Created by A170860 on 2018/5/4.
 */
//引入events模块
var events = require("events");
//创建eventEmitter对象
var eventEmitter = new events.EventEmitter();

//定义两个事件
var EVENT1 = "connection";
var EVENT2 = "data received";

//创建EVENT1事件的处理程序
var connectHandler = function connected() {
    console.log("connected success");
    //触发 data_received事件
    setTimeout(function() {
        eventEmitter.emit(EVENT2);
    }, 1000);

}
//绑定EVENT1事件处理程序
eventEmitter.on(EVENT1, connectHandler);
//通过匿名函数的方式，绑定EVENT2事件处理程序
eventEmitter.on(EVENT2, function () {
    console.log("数据接收成功");
});

// 触发 EVENT1 事件
eventEmitter.emit(EVENT1);
eventEmitter.emit(EVENT2);
console.log("程序执行完毕");

