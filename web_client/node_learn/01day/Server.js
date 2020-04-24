/**
 * Created by A170860 on 2018/5/3.
 */
var http = require('http');
var Hello = require("./Hello_Obj");//好比java的import导包机制。
var Hello2 = require("./Hello_Obj2");//好比java的import导包机制。
var first_program = require("./CanAccessMethod");
//node.js 提供了两个对象require和exports，其中exports是模块公开的接口，require用于从外部获取一个模块的接口，
//既所获取模块的exports对象
http.createServer(function (request, response) {

    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // 发送响应数据 "Hello World"
    response.end('Hello World\n');
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');
first_program.hello();
first_program.sayHi();
first_program.SpeakEnglish("orange");
//第二种方式，访问其他模块的方法
hello = new Hello();
hello.setName("lily");
hello.say();
//第二种方式，访问其他模块的方法
hello2 = new Hello2();
hello2.setName("jack");
hello2.say();
