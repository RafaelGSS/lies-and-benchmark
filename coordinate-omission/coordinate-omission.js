const http = require('http');

let count = 0;
const requestListener = function (req, res) {
  // 60sec
  if (++count > 120) {
    setTimeout(() => {
      res.writeHead(200);
      res.end('Hello, World!');
    }, 59000)
  } else {
    setTimeout(() => {
      res.writeHead(200);
      res.end('Hello, World!');
    }, 500)
  }
}

const server = http.createServer(requestListener);
server.listen(8080);
