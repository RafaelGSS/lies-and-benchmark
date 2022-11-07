const autocannon = require('autocannon')
const child = require('child_process')
const ttest = require('ttest')
const path = require('path')

async function run(resultArr) {
  const result = await autocannon({
    url: 'http://localhost:8080',
    connections: 200,
    duration: 5
  })
  if (result.errors !== 0) {
    console.error('The result contain errors. Retry.')
    console.error(result)
    return 1;
  }

  resultArr.push(result['2xx'])
  console.log('Done!')
  return 0;
}

async function* spawnServer() {
  const startServer = (module) => {
    return new Promise((resolve) => {
      const c = child.fork(path.join(module), []);
      c.on('message', () => resolve(c))
      c.on('error', () => {
        console.error('error on http process')
        process.exit(1)
      })
    })
  }

  yield await startServer('./slow-api.js')
  yield await startServer('./better-api.js')
}

function stopServer(child) {
  return new Promise((resolve) => {
    child.on('exit', () => { resolve() })
    child.kill('SIGINT')
  })
}

async function main() {
  const totalRuns = 30
  const servers = spawnServer()

  console.log('starting server A...')
  const cA = (await servers.next()).value
  const A = []
  for (let i = 0; i < totalRuns; ++i) {
    const ret = await run(A)
    if (ret !== 0) {
      await stopServer(cA)
      process.exit(ret)
    }
  }
  console.log('stopping server A...')
  await stopServer(cA)
  console.log('stopped')

  console.log('starting server B...')
  const cB = (await servers.next()).value
  const B = []
  for (let i = 0; i < totalRuns; ++i) {
    const ret = await run(B)
    if (ret !== 0) {
      await stopServer(cB)
      process.exit(ret)
    }
  }
  console.log('stopping server B...')
  await stopServer(cB)
  console.log('stopped')

  console.log('A', A)
  console.log('B', B)
  const res = ttest(A, B)
  const pValue = res.pValue()
  if (pValue <= 0.05) {
    console.log(`It's a significant difference - `, res.pValue())
  } else {
    console.log(`It's NOT a significant difference - `, res.pValue())
  }
}

main()
