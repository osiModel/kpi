'use strict'

function sum(...args){
    let total = 0;
    for(let i = 0;i<args.length;++i){
        total += args[i];
    }
    return total;
}

const a = sum(1,2,3)

console.dir(a)