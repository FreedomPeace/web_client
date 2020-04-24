/**
 * Created by A170860 on 2018/5/7.
 */
var http = require("http");
var url = require("url");
function start(route) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");
        route(pathname);
    }

    http.createServer(onRequest).listen(8080);
    console.log("Server has started.");
}
exports.start = start;