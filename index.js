//The traditional nodejs http example

require(['sys', 'http'], function (sys, http) {
    http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello World\n');
    }).listen(8000);
});
