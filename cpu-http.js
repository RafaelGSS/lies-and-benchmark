const http = require('http');

let obj = { a: 1 }
for (var i = 0; i < 10; i++) {
  obj = { obj1: obj, obj2: obj };
}

function sumValues () {
  let sum = 0;
  for (let i = 0; i < 999999; i++) {
    sum += i;
  }
  return sum;
}

const requestListener = function (req, res) {
  const sum = sumValues()
  const rawData = JSON.stringify(obj)
  res.end(rawData + sum);
}

const server = http.createServer(requestListener);
server.listen(8080);

// Apparently, the use of CPU 0 doesn't affect
// Node.js webserver (Linux)
// rafaelgss@rafaelgss-desktop:~$ taskset -c 1 node cpu-http.js
// rafaelgss@rafaelgss-desktop:~$ taskset -c 0 node cpu-http.js
