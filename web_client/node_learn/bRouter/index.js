/**
 * Created by A170860 on 2018/5/7.
 */
var server = require("./server2");
var router = require("./router");
server.start(router.route);