var express = require('express');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var fs = require("fs");

  var greeting = fs.readFile('index.html', function(err, data) {
    if (err) {
        console.log("NEW ERROR: " + err);
    }
    console.log("***********************************************");
    console.log(typeof data);
    return data.toString();  
  });
  response.send(greeting);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
