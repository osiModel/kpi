'use strict';

/* Call function from function in loop
- Implement function `average` with signature
  `average(a: number, b: number): number`
  calculating average (arithmetic mean).
- Implement function `square` with signature
  `square(x: number): number` calculating square of x.
- Implement function `cube` with signature
  `cube(x: number): number` calculating cube of x.
- Call `square` and `cube` in loop 0 to 9, pass results
  to function `average` on each iteration.
  Add calculation results to array and return this array
  from function `calculate`.

Call functions `square` and `cube` in loop, then pass their
results to function `average`. Print what `average` returns. */

const square =function(a){
  return a*a*a;
};

const cube = function(a){
  return a*a*a;
};

const average = function(a,b){
  return (a+b)/2;
};

const calculate = function(){
  let sum = 0;
  for(let i = 0;i<10  ;++i){
    sum += average(cube(i),square(i));
  }
  return sum;
};

console.log(calculate());