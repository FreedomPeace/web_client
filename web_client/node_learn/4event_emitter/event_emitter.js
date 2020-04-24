/**
 * Created by A170860 on 2018/5/4.
 */
/**
 * Node.js 所有的异步 I/O 操作在完成时都会发送一个事件到事件队列。
 Node.js里面的许多对象都会分发事件：
 一个net.Server对象会在每次有新连接时分发一个事件，
 一个fs.readStream对象会在文件被打开的时候发出一个事件。
 所有这些产生事件的对象都是 events.EventEmitter 的实例。

 events 模块只提供了一个对象： events.EventEmitter。
 EventEmitter 的核心就是事件触发与事件监听器功能的封装。
 */
//引入events模块
var events = require("events");
//创建eventEmitter对象
var eventEmitter = new events.EventEmitter();
//绑定事件
eventEmitter.on("event_name", function () {

});
//发射事件
eventEmitter.emit("event_name");

//demo
var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();
event.on('some_event', function() {
    console.log('some_event 事件触发');
});
setTimeout(function() {
    event.emit('some_event');
}, 1000);

