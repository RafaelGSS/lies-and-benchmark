const ttest = require('ttest')

const A = [98, 110, 97, 100, 101]
// const A = [9, 7, 4, 6, 3]
const B = [100, 101, 102, 99, 101]
// const B = [2, 3, 3, 8, 4]

const res = ttest(A, B, {})

console.log(res.testValue())
console.log('p', res.pValue())
console.log(res.confidence())
console.log(res.valid())
