/**
 * Created by A170860 on 2018/5/7.
 */
function route(pathname,response) {
    if(pathname=="login"){
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("login success");
        response.end();
    }
    console.log("About to route a request for " + pathname);
}
exports.route = route;