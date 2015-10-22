//This is needed in order to test 404.html, router.js, and api.html

var http = require("http");
var url = require("url");
var path = require("path");
var fs = require("fs");
var port = process.argv[2] || 8000;

http.createServer(function (request, response) {

    var uri = url.parse(request.url).pathname;
    var filename = path.join(process.cwd(), uri);

    var contentTypesByExtension = {
        '.html': "text/html",
        '.css':  "text/css",
        '.js':   "text/javascript"
    };

    fs.exists(filename, function(exists) {
        if (!exists) {
            console.log("FAIL: " + filename);
            filename = path.join(process.cwd(), '/404.html');
        } else if (fs.statSync(filename).isDirectory()) {
            console.log("FLDR: " + filename);
            filename += '/index.html';
        }

        fs.readFile(filename, "binary", function(err, file) {
            console.log("FILE: " + filename);
            if(err) {
                response.writeHead(500, {"Content-Type": "text/plain"});
                response.write(err + "\n");
                response.end();
                return;
            }

            var headers = {};
            var contentType = contentTypesByExtension[path.extname(filename)];
            if (contentType) headers["Content-Type"] = contentType;
            response.writeHead(200, headers);
            response.write(file, "binary");
            response.end();
        });
    });
}).listen(parseInt(port, 10));

console.log("Static file server running at\n  => http://localhost:" + port + "/\nCTRL + C to shutdown");
