var http = require("http");
var url = require("url");

function start(route,handle){
    function onRequest(request, response) {
      response.writeHead(200, {"Content-Type": "text/plain"});
      var pathname = url.parse(request.url).pathname;
        var content = route(handle, pathname);
        response.write(content);
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    //这里的console.log只是为了调试
    console.log("Server has started.");
}

exports.start = start;
