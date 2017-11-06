var http = require("http");

var mod = require("./tasks.js");

var taskList = mod.tasks;
console.log(taskList);

for (var i=0; i<taskList.length; i++) {
	console.log(taskList[i]);
}

var randomNumber = Math.floor(Math.random() *4); // generates a random number between 1 and 4

http.createServer(function(request, response) {
	response.writeHead(200, { "Content-type": "text/plain"});
	response.write(taskList[randomNumber]);
	response.end();
}).listen(3000);