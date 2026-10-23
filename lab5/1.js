'use strict'

const seq = (x) => (y) => {
  if(typeof y === 'number') return x(y)
  return seq((num) => x(y(num)))
}
console.log(seq(x => x + 1)
   (x => x * 2)(x => x / 3)
   (x => x - 4)(7))