/**
 * Created by A170860 on 2018/5/8.
 */
var dns = require("dns");
// DNS 模块用于解析域名
dns.lookup('www.github.com', function (err, address, famlily) {
    console.log('ip 地址:', address);
    dns.reverse(address, function (err, hostnames) {
        if (err) {
            console.log(err.stack);
        }

        console.log('反向解析 ' + address + ': ' + JSON.stringify(hostnames));

    })
});
// dns.setServers(["182.180.80.8"]);
console.log(dns.getServers());
dns.reverse("182.180.47.76", function (err, hostnames) {
    if (err) {
        console.log(err.stack);
    }

    console.log('反向解析 '  + ': ' + JSON.stringify(hostnames));

})