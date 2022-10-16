import autocannon from 'autocannon'
import fs from 'node:fs'

let tick = 0;
const reqTick = {}

const [,,cpuN] = process.argv
if (!cpuN) {
  console.error('Missing CPU Number')
  process.exit(1)
}

const instance = autocannon({
  url: 'http://localhost:8080',
  connections: 100,
  pipelining: 1,
  duration: 30
}, (err, result) => {
  if (err) throw err
  if (result.errors !== 0) {
    console.log('The result contain errors. Retry.')
    console.log(result)
    process.exit(1)
  }

  fs.writeFileSync(
    `./bench-result-cpu-${cpuN}.json`,
    JSON.stringify(reqTick, null, 2)
  )
  console.log('Done!')
})

instance.on('response', (_client, statusCode, _resBytes, responseTime) => {
  if (statusCode === 200) {
    if (!reqTick[tick]) {
      reqTick[tick] = []
    }
    reqTick[tick].push(responseTime)
  } else {
    console.error('Invalid statusCode', statusCode)
    process.exit(1)
  }
})

instance.on('tick', () => ++tick)

