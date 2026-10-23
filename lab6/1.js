'use strict'

const pipe = (...args) => (x) => {
  let temp = x;
  for(let i = 0;i<args.length;++i){
    if(typeof args[i] !== 'function') 
      throw new Error(`Parameter ${i+1} is not a function`);
    temp = args[i](temp)
  }
  return temp;
} 

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f = pipe(inc, twice, cube);

const x = f(5);

console.log(x);