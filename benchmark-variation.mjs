import autocannon from 'autocannon'
import { plot } from 'nodeplotlib'

let tick = 0;
const reqTick = {}

const instance = autocannon({
  url: 'http://localhost:8080',
  connections: 10, //default
  pipelining: 1, // default
  duration: 10 // default
}, (err, result) => {
  console.log(result)
  plot({
    x: Object.keys(reqTick),
    y: Object.values(reqTick),
    type: 'scatter',
  })
})

instance.on('response', (client, statusCode, resBytes, responseTime) => {
  if (statusCode === 200) {
    if (!reqTick[tick]) {
      reqTick[tick] = []
    }
    reqTick[tick].push(responseTime)
  }
})

instance.on('tick', () => ++tick)

