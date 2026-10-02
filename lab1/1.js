'use strict';

function inc(n){
    return ++n;
}

let a = 5;
const b = inc(a);

console.log({a, b});