const ttest = require('ttest')

const N = 30

function randomNumber(min, max) {
  return Math.floor((Math.random() * (max - min) + min) * 100) / 100;
}

function ABench() {
  const A = []
  for (let i = 0; i < N; ++i) {
    A.push(randomNumber(43, 47))
  }
  console.log('A', A)
  return A
}

function BBench() {
  const B = []
  for (let i = 0; i < N; ++i) {
    B.push(randomNumber(42, 46))
  }
  console.log('B', B)
  return B
}

const A = ABench()
const B = BBench()

const res = ttest(A, B)
const pValue = res.pValue() * 100
console.log('Confidence', res.confidence())
if (pValue > 5) {
  console.log(`It's NOT a significant difference - `, res.pValue())
} else {
  console.log(`It's a significant difference - `, res.pValue())
}
