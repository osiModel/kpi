'use strict'

function sum(...args){
    let total = 0;
    let i = 0;
    while(i<args.length){
        total += args[i++];
    }
    return total;
}

const a = sum(5,6,8)

console.dir(a)