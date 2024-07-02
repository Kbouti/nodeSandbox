const http = require('http');

const hostname = "127.0.0.1";
const port = 8000;

const server = http.createServer(function(req, res) {
  res.writeHead(200, { "Content-Type": "text/plain"});

  res.end("Hello World!");
});

server.listen(port, hostname, function() {
  console.log(`Server running at http://${hostname}:${port}/`);
});


// We made a really basic server!!!! Starting back at the basics cuz we fuq'd up the local library project
// We can visit our site at http://localhost:8000/