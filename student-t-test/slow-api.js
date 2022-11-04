const http = require('http');

const requestListener = function (req, res) {
  const delay = Math.random() * (350 - 150) + 150;
  setTimeout(() => {
    res.writeHead(200);
    res.end('Hello, World!');
  }, delay)
}

const server = http.createServer(requestListener);
server.listen(8080, () => {
  if (process.send)
    process.send('listening...')
});
