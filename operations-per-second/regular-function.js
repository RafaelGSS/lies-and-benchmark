const operations = 1_000_000 // 1 million

const test = (func) => {
  const start = performance.now()
  for(let i = 0; i < operations; i++) {
    func()
  }
  return `${(performance.now() - start).toFixed(7)}ms`
}

console.log(`Operations: ${operations}`)

console.log('regular function', test(() => {
  const b = function () {}
  b()
}))
