var express = require('express');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var fs = require("fs");

  var greeting = function() {
    var message = '';
    fs.readFile('index.html', function(err, data) {
      if (err) {
        throw error;
      }
      console.log("*********************************************** NO ERRORS IN FILE READING");
      console.log(typeof data);
      message = data.toString();  
    });
    return message();
  });
  response.send(message);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
