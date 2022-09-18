const http = require('http');

const requestListener = function (req, res) {
  setTimeout(() => {
    res.writeHead(200);
    res.end('Hello, World!');
  }, 500)
}

const server = http.createServer(requestListener);
server.listen(8080);
