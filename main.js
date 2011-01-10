//The traditional nodejs http example

require(['sys', 'http'], function (sys, http) {
    http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello World\n');
        //port is likely 80 on no.de, on local dev box, 8000
    }).listen(process.env.PORT || 8000);
});
