const fs = require('fs')

console.time('perf')
const fds = []
for (let i = 0; i < 61450; ++i) {
  fs.open('./test' + i, 'w+', (err, fd) => {
    if (!err) fds.push(fd)
  })
}

fds.map((fd) => fs.closeSync(fd))
console.timeEnd('perf')
