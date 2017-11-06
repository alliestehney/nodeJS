var http = require("http");

http.createServer(function(request, response) {
	response.writeHead(200, { "Content-type": "text/plain"});
	response.write("I like mint chocolate chip ice cream.");
	response.end();
}).listen(3000);