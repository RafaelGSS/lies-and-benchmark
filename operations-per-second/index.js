let pInt, plus;
{
  const start = performance.now()
  const int = parseInt('9999999999', 10)
  pInt = performance.now() - start
}
{
  const start = performance.now()
  const int = +'9999999999'
  plus = performance.now() - start
}

console.table({ plugSignal: plus, parseInt: pInt })
