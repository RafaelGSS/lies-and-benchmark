const fs = require('fs')

// MacOS you can use the Console to see failure logs
console.time('perf')
const fds = []
// for (let i = 0; i < 61450; ++i) {
for (let i = 0; i < 60000; ++i) {
  fs.open('./test' + i, 'w+', (err, fd) => {
    if (!err) fds.push(fd)
  })
}
console.timeEnd('perf')

setTimeout(() => {
  fds.map((fd) => fs.closeSync(fd))
}, 3000)
