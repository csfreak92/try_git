// Sample Node program 
var mongoose = require("mongoose");
var http = require("http");

http.createServer(function(request,response){ 
  response.writeHead(200, {"Content-Type":"text/plain"});
  response.write("Welcome to Node.js!");
  response.end();
}).listen(8888);
